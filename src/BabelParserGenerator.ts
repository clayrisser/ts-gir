import generate, { type GeneratorOptions } from '@babel/generator';
import { parse, type ParserOptions } from '@babel/parser';
import template from '@babel/template';
import type { File, Statement } from '@babel/types';
import _ from 'lodash';

export interface DeepArray<T> extends Array<T | DeepArray<T>> {}

export interface Substitutions {
  [key: string]: string;
}

export type InjectPath = number | string | DeepArray<number | string>;

function joinPath(path: InjectPath): string {
  if (!Array.isArray(path)) return path.toString();
  return _.flattenDeep(path)
    .filter((segment) => segment.toString().length)
    .join('.');
}

/**
 * Builds a Babel AST incrementally by parsing source snippets and splicing the
 * resulting nodes into arbitrary lodash-style paths of a growing program body.
 *
 * Vendored from the unmaintained `babel-parser-generator` package, whose last
 * release (0.1.12, 2019) is unusable: it emits `@babel/runtime` helper requires
 * without declaring `@babel/runtime` as a dependency, so it only ever resolved
 * under npm's hoisted layout.
 */
export default class BabelParserGenerator {
  ast: File;

  options: ParserOptions = {};

  reservedKeywords: Set<string> = new Set([
    'break',
    'boolean',
    'case',
    'catch',
    'class',
    'const',
    'continue',
    'debugger',
    'default',
    'delete',
    'do',
    'else',
    'enum',
    'export',
    'extends',
    'false',
    'finally',
    'for',
    'function',
    'if',
    'implements',
    'import',
    'in',
    'instanceof',
    'interface',
    'let',
    'new',
    'number',
    'package',
    'private',
    'protected',
    'public',
    'return',
    'static',
    'super',
    'switch',
    'string',
    'this',
    'throw',
    'true',
    'try',
    'typeof',
    'var',
    'void',
    'while',
    'with',
    'yield',
  ]);

  // Subclass field initializers run after super(), so `this.options` is still
  // empty here — callers seeding a non-empty `code` must pass options directly.
  constructor(code = '', options: ParserOptions = {}) {
    this.ast = parse(code, options);
  }

  isReservedKeyword(keyword: string): boolean {
    return this.reservedKeywords.has(keyword);
  }

  safeWord(keyword: string): string {
    if (!this.isReservedKeyword(keyword)) return keyword;
    return `_${keyword}`;
  }

  templateAst(
    code: string,
    codePath?: string | DeepArray<string>,
    options: ParserOptions = {},
    substitutions?: Substitutions,
  ): Statement | Statement[] {
    const ast = template(code, {
      preserveComments: true,
      ...this.options,
      placeholderPattern: false,
      ...options,
    })(substitutions as never) as Statement | Statement[];
    const path = codePath ? joinPath(codePath) : '';
    if (path) return _.get(ast, path);
    return ast;
  }

  generate(options: GeneratorOptions = {}): string {
    return generate(this.ast, options).code;
  }

  prepend(
    code: string,
    injectPath: InjectPath = '',
    codePath?: string | DeepArray<string>,
    options: ParserOptions = {},
    substitutions?: Substitutions,
  ): number {
    let templateAst = this.templateAst(code, codePath, options, substitutions);
    if (!Array.isArray(templateAst)) templateAst = [templateAst];
    return (
      this.setAst(injectPath, [
        ...templateAst,
        ...(this.getAst(injectPath) as Statement[]),
      ]) as Statement[]
    ).length;
  }

  append(
    code: string,
    injectPath: InjectPath = '',
    codePath?: string | DeepArray<string>,
    options: ParserOptions = {},
    substitutions?: Substitutions,
  ): number {
    let templateAst = this.templateAst(code, codePath, options, substitutions);
    if (!Array.isArray(templateAst)) templateAst = [templateAst];
    return (
      this.setAst(injectPath, [
        ...(this.getAst(injectPath) as Statement[]),
        ...templateAst,
      ]) as Statement[]
    ).length;
  }

  getAst(injectPath: InjectPath = ''): Statement | Statement[] {
    const path = joinPath(injectPath);
    if (path.length) return _.get(this.ast.program.body, path);
    return this.ast.program.body;
  }

  setAst(injectPath: InjectPath = '', value: Statement | Statement[]): Statement | Statement[] {
    const path = joinPath(injectPath);
    if (path.length) {
      _.set(this.ast.program.body, path, value);
    } else {
      this.ast.program.body = value as Statement[];
    }
    return this.getAst(injectPath);
  }
}
