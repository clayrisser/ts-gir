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
    const childCount = this.buildImports(
      oc(this.repository).include([]),
      [0, 0],
      ''
    );
    this.buildModules(oc(this.repository).namespace([]), [0, childCount], '');
  }

  buildModules(
    $namespaces: Namespace[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($namespaces)) $namespaces = [$namespaces];
    let count = 0;
    $namespaces.forEach(($namespace: Namespace, i: number) => {
      const moduleName = $namespace['@_name'];
      count = this.append(`declare module '${moduleName}' {}`, path);
      let childCount = this.buildConstantDeclarations(
        oc($namespace).constant([]),
        [position[1] + i, 0],
        ''
      );
      childCount = this.buildEnumDeclarations(
        oc($namespace).enumeration([]),
        [position[1] + i, childCount],
        ''
      );
      childCount = this.buildClassDeclarations(
        oc($namespace).class([]),
        [position[1] + i, childCount],
        ''
      );
      this.buildFunctionDeclarations(
        oc($namespace).function([]),
        [position[1] + i, childCount],
        ''
      );
    });
    return count;
  }

  buildImports(
    $includes: Include[],
    _position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($includes)) $includes = [$includes];
    let count = 0;
    $includes.forEach(($include: Include) => {
      const importName = $include['@_name'];
      count = this.append(
        `import * as ${importName} from '${importName}'`,
        path
      );
    });
    return count;
  }

  buildEnumDeclarations(
    $enumerations: Enumeration[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($enumerations)) $enumerations = [$enumerations];
    let count = 0;
    $enumerations.forEach(($enumeration: Enumeration, i: number) => {
      const enumName = $enumeration['@_name'];
      count = this.append(`export enum ${enumName} {}`, [
        path,
        `${position[0]}.body.body`
      ]);
      this.buildEnumDeclarationMembers(
        oc($enumeration).member([]),
        [position[1] + i, 0],
        [path, `${position[0]}.body.body`]
      );
    });
    return count;
  }

  buildEnumDeclarationMembers(
    $members: Member[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($members)) $members = [$members];
    let count = 0;
    $members.forEach(($member: Member) => {
      const identifierName = $member['@_c:identifier'];
      count = this.append(
        `enum E {${identifierName}}`,
        [path, `${position[0]}.declaration.members`],
        'members.0'
      );
    });
    return count;
  }

  buildConstantDeclarations(
    $constants: Constant[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($constants)) $constants = [$constants];
    let count = 0;
    $constants.forEach(($constant: Constant) => {
      const constantName = $constant['@_name'];
      const constantType = this.getType($constant);
      count = this.append(`export const ${constantName}: ${constantType};`, [
        path,
        `${position[0]}.body.body`
      ]);
    });
    return count;
  }

  buildFunctionDeclarations(
    $functions: Function[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    let count = 0;
    $functions.forEach(($function: Function, i: number) => {
      const returnType = this.getType($function['return-value']);
      const functionName = $function['@_name'];
      count = this.append(`export function ${functionName}(): ${returnType}`, [
        path,
        `${position[0]}.body.body`
      ]);
      this.buildFunctionDeclarationParams(
        oc($function).parameters.parameter([]),
        [position[1] + i, 0],
        [path, `${position[0]}.body.body`]
      );
    });
    return count;
  }

  buildFunctionDeclarationParams(
    $parameters: Parameter[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let count = 0;
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = $parameter['@_name'];
      const paramRequired = $parameter['@_optional'] !== '1';
      const paramType = this.getType($parameter);
      if (paramType) {
        // TODO: some param types not supported
        count = this.append(
          `function hello(${paramName}${
            paramRequired ? '' : '?'
          }: ${paramType}) {}`,
          [path, `${position[0]}.declaration.params`],
          'params.0'
        );
      }
    });
    return count;
  }

  buildClassDeclarations(
    $classes: Class[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    let count = 0;
    $classes.forEach(($class: Class, i: number) => {
      const className = $class['@_name'];
      this.symbols.add(className);
      const parentClassName = $class['@_parent'];
      count = this.append(
        `export class ${className} ${
          parentClassName ? `extends ${parentClassName} ` : ''
        }{}`,
        [path, `${position[0]}.body.body`]
      );
      const childCount = this.buildPropertyDeclarations(
        oc($class).property([]),
        [position[1] + i, 0],
        [path, `${position[0]}.body.body`]
      );
      this.buildMethodDeclarations(
        oc($class).method([]),
        [position[1] + i, childCount],
        [path, `${position[0]}.body.body`]
      );
    });
    return count;
  }

  buildMethodDeclarations(
    $methods: Method[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($methods)) $methods = [$methods];
    let count = 0;
    $methods.forEach(($method: Method, i: number) => {
      const returnType = this.getType($method['return-value']);
      const methodName = $method['@_name'];
      count = this.append(
        `class C {${methodName}(): ${returnType}}`,
        [path, `${position[0]}.declaration.body.body`],
        'body.body'
      );
      this.buildMethodDeclarationParams(
        oc($method).parameters.parameter([]),
        [position[1] + i, 0],
        [path, `${position[0]}.declaration.body.body`]
      );
    });
    return count;
  }

  buildMethodDeclarationParams(
    $parameters: Parameter[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let count = 0;
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = $parameter['@_name'];
      const paramRequired = $parameter['@_optional'] !== '1';
      const paramType = this.getType($parameter);
      if (paramType) {
        // TODO: some param types not supported
        count = this.append(
          `function hello(${paramName}${
            paramRequired ? '' : '?'
          }: ${paramType}) {}`,
          [path, `${position[0]}.params`],
          'params.0'
        );
      }
    });
    return count;
  }

  buildPropertyDeclarations(
    $properties: Property[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($properties)) $properties = [$properties];
    let count = 0;
    $properties.forEach(($property: Property) => {
      const propertyName = $property['@_name'];
      const propertyType = this.getType($property);
      count = this.append(
        `class C {'${propertyName}': ${propertyType}}`,
        [path, `${position[0]}.declaration.body.body`],
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
