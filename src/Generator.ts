import _ from 'lodash';
import generate from '@babel/generator';
import template from '@babel/template';
import { File, Statement } from '@babel/types';
import { parse, ParserOptions } from '@babel/parser';
import { DeepArray } from './types';

export default class Generator {
  ast: File;

  options: ParserOptions = {};

  constructor(code = '') {
    this.ast = parse(code, this.options);
  }

  templateAst(code: string, codePath?: string): Statement | Statement[] {
    if (Array.isArray(codePath)) {
      codePath = _.flattenDeep(codePath)
        .filter((s: string) => s.length)
        .join('.');
    }
    if (codePath) {
      return _.get(template.ast(code, this.options), codePath);
    }
    return template.ast(code, this.options);
  }

  generate(): string {
    return generate(this.ast, {}).code;
  }

  prepend(code: string, injectPath = '', codePath?: string): void {
    if (Array.isArray(injectPath)) {
      injectPath = _.flattenDeep(injectPath)
        .filter((s: string) => s.length)
        .join('.');
    }
    let ast = this.ast.program.body;
    if (injectPath.length) ast = _.get(this.ast.program.body, injectPath);
    let templateAst = this.templateAst(code, codePath);
    if (!Array.isArray(templateAst)) templateAst = [templateAst];
    if (injectPath.length) {
      _.set(this.ast.program.body, injectPath, [...templateAst, ...ast]);
    } else {
      this.ast.program.body = [...templateAst, ...ast];
    }
  }

  append(
    code: string,
    injectPath: string | DeepArray<string> = '',
    codePath?: string
  ): void {
    if (Array.isArray(injectPath)) {
      injectPath = _.flattenDeep(injectPath)
        .filter((s: string) => s.length)
        .join('.');
    }
    let ast = this.ast.program.body;
    if (injectPath.length) ast = _.get(this.ast.program.body, injectPath);
    let templateAst = this.templateAst(code, codePath);
    if (!Array.isArray(templateAst)) templateAst = [templateAst];
    if (injectPath.length) {
      _.set(this.ast.program.body, injectPath, [...ast, ...templateAst]);
    } else {
      this.ast.program.body = [...ast, ...templateAst];
    }
  }
}
