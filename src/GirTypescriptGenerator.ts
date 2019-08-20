import BabelParserGenerator from 'babel-parser-generator';
import { ParserOptions } from '@babel/parser';
import { oc } from 'ts-optchain.macro';
import {
  Class,
  Constant,
  DeepArray,
  Enumeration,
  Function,
  GirType,
  Include,
  Member,
  Method,
  Namespace,
  Parameter,
  Property,
  Repository
} from './types';

export default class GirTypescriptGenerator extends BabelParserGenerator {
  options: ParserOptions = {
    plugins: ['jsx', 'typescript'],
    sourceType: 'module'
  };

  symbols: Set<string> = new Set();

  constructor(public repository: Repository) {
    super();
  }

  build() {
    this.buildImports(oc(this.repository).include([]));
    this.buildModules(oc(this.repository).namespace([]));
  }

  buildModules(
    $namespaces: Namespace[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($namespaces)) $namespaces = [$namespaces];
    $namespaces.forEach(($namespace: Namespace) => {
      const moduleName = $namespace['@_name'];
      const count = this.append(`declare module '${moduleName}' {}`, path);
      this.buildConstantDeclarations(oc($namespace).constant([]), [
        path,
        `${count - 1}`
      ]);
      this.buildEnumDeclarations(oc($namespace).enumeration([]), [
        path,
        `${count - 1}`
      ]);
      this.buildClassDeclarations(oc($namespace).class([]), [
        path,
        `${count - 1}`
      ]);
      this.buildFunctionDeclarations(oc($namespace).function([]), [
        path,
        `${count - 1}`
      ]);
    });
  }

  buildImports(
    $includes: Include[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($includes)) $includes = [$includes];
    $includes.forEach(($include: Include) => {
      const importName = $include['@_name'];
      this.append(`import * as ${importName} from '${importName}'`, path);
    });
  }

  buildEnumDeclarations(
    $enumerations: Enumeration[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($enumerations)) $enumerations = [$enumerations];
    $enumerations.forEach(($enumeration: Enumeration) => {
      const enumName = $enumeration['@_name'];
      const count = this.append(`export enum ${enumName} {}`, [
        path,
        'body.body'
      ]);
      this.buildEnumDeclarationMembers(oc($enumeration).member([]), [
        path,
        `body.body.${count - 1}`
      ]);
    });
  }

  buildEnumDeclarationMembers(
    $members: Member[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($members)) $members = [$members];
    $members.forEach(($member: Member) => {
      const identifierName = $member['@_c:identifier'];
      this.append(
        `enum E {${identifierName}}`,
        [path, 'declaration.members'],
        'members.0'
      );
    });
  }

  buildConstantDeclarations(
    $constants: Constant[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($constants)) $constants = [$constants];
    $constants.forEach(($constant: Constant) => {
      const constantName = $constant['@_name'];
      const constantType = this.getType($constant);
      this.append(`export const ${constantName}: ${constantType};`, [
        path,
        'body.body'
      ]);
    });
  }

  buildFunctionDeclarations(
    $functions: Function[],
    path: string | DeepArray<string> = ''
  ): void {
    $functions.forEach(($function: Function) => {
      const returnType = this.getType($function['return-value']);
      const functionName = $function['@_name'];
      const count = this.append(
        `export function ${functionName}(): ${returnType}`,
        [path, 'body.body']
      );
      this.buildFunctionDeclarationParams(
        oc($function).parameters.parameter([]),
        [path, `body.body.${count - 1}`]
      );
    });
  }

  buildFunctionDeclarationParams(
    $parameters: Parameter[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = $parameter['@_name'];
      const paramRequired = $parameter['@_optional'] !== '1';
      const paramType = this.getType($parameter);
      if (paramType) {
        // TODO: some param types not supported
        this.append(
          `function hello(${paramName}${
            paramRequired ? '' : '?'
          }: ${paramType}) {}`,
          [path, 'declaration.params'],
          'params.0'
        );
      }
    });
  }

  buildClassDeclarations(
    $classes: Class[],
    path: string | DeepArray<string> = ''
  ): void {
    return $classes.forEach(($class: Class) => {
      const className = $class['@_name'];
      this.symbols.add(className);
      const parentClassName = $class['@_parent'];
      const count = this.append(
        `export class ${className} ${
          parentClassName ? `extends ${parentClassName} ` : ''
        }{}`,
        [path, 'body.body']
      );
      this.buildPropertyDeclarations(oc($class).property([]), [
        path,
        `body.body.${count - 1}`
      ]);
      this.buildMethodDeclarations(oc($class).method([]), [
        path,
        `body.body.${count - 1}`
      ]);
    });
  }

  buildMethodDeclarations(
    $methods: Method[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($methods)) $methods = [$methods];
    $methods.forEach(($method: Method) => {
      const returnType = this.getType($method['return-value']);
      const methodName = $method['@_name'];
      const count = this.append(
        `class C {${methodName}(): ${returnType}}`,
        [path, 'declaration.body.body'],
        'body.body'
      );
      this.buildMethodDeclarationParams(oc($method).parameters.parameter([]), [
        path,
        `declaration.body.body.${count - 1}`
      ]);
    });
  }

  buildMethodDeclarationParams(
    $parameters: Parameter[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = $parameter['@_name'];
      const paramRequired = $parameter['@_optional'] !== '1';
      const paramType = this.getType($parameter);
      if (paramType) {
        // TODO: some param types not supported
        this.append(
          `function hello(${paramName}${
            paramRequired ? '' : '?'
          }: ${paramType}) {}`,
          [path, 'params'],
          'params.0'
        );
      }
    });
  }

  buildPropertyDeclarations(
    $properties: Property[],
    path: string | DeepArray<string> = ''
  ): number {
    if (!Array.isArray($properties)) $properties = [$properties];
    let count = 0;
    $properties.forEach(($property: Property) => {
      const propertyName = $property['@_name'];
      const propertyType = this.getType($property);
      count = this.append(
        `class C {'${propertyName}': ${propertyType}}`,
        [path, 'declaration.body.body'],
        'body.body.0'
      );
    });
    return count;
  }

  getType(girType: GirType, isArray = false): string | null {
    // TODO: some param types not supported
    let girTypeStr: string = '';
    if (typeof girType !== 'string') {
      if (girType.array) {
        isArray = true;
        girTypeStr = oc(girType)
          .array.type['@_name']()
          .toString();
      } else if (girType.type) {
        girTypeStr = oc(girType)
          .type['@_name']()
          .toString();
      } else {
        return null;
      }
    }
    const girTypeSplit = girTypeStr.split(' ');
    if (girTypeSplit.length > 1) [, girTypeStr] = girTypeSplit;
    if (!girTypeStr) return 'any';
    let array = '';
    if (isArray) array = '[]';
    let tsType: string = ({
      '': `any${array}`,
      double: `number${array}`,
      gboolean: `boolean${array}`,
      gchar: `number${array}`,
      gdouble: `number${array}`,
      gfloat: `number${array}`,
      gint16: `number${array}`,
      gint32: `number${array}`,
      gint64: `number${array}`,
      gint8: `number${array}`,
      gint: `number${array}`,
      glong: `number${array}`,
      gpointer: `object${array}`,
      gsize: `number${array}`,
      gssize: `number${array}`,
      guint16: `number${array}`,
      guint32: `number${array}`,
      guint64: `number${array}`,
      guint8: `number${array}`,
      guint: `number${array}`,
      gulong: `number${array}`,
      gunichar: `number${array}`,
      gushort: `number${array}`,
      long: `number${array}`,
      none: `void${array}`,
      object: `any${array}`,
      utf8: `string${array}`,
      va_list: `any${array}`
    } as { [key: string]: string })[girTypeStr];
    if (!tsType) {
      if (this.symbols.has(tsType)) {
        tsType = girTypeStr + array;
      } else {
        tsType = `any${array}`;
      }
    }
    return tsType;
  }
}
