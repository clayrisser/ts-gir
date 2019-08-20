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
    return this.forEach($namespaces, ($namespace: Namespace, i: number) => {
      const moduleName = $namespace['@_name'];
      const count = this.append(`declare module '${moduleName}' {}`, path);
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
      return count;
    });
  }

  buildImports(
    $includes: Include[],
    _position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($includes)) $includes = [$includes];
    return this.forEach($includes, ($include: Include) => {
      const importName = $include['@_name'];
      return this.append(
        `import * as ${importName} from '${importName}'`,
        path
      );
    });
  }

  buildEnumDeclarations(
    $enumerations: Enumeration[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($enumerations)) $enumerations = [$enumerations];
    return this.forEach(
      $enumerations,
      ($enumeration: Enumeration, i: number) => {
        const enumName = $enumeration['@_name'];
        const count = this.append(`export enum ${enumName} {}`, [
          path,
          `${position[0]}.body.body`
        ]);
        this.buildEnumDeclarationMembers(
          oc($enumeration).member([]),
          [position[1] + i, 0],
          [path, `${position[0]}.body.body`]
        );
        return count;
      }
    );
  }

  buildEnumDeclarationMembers(
    $members: Member[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($members)) $members = [$members];
    return this.forEach($members, ($member: Member) => {
      const identifierName = $member['@_c:identifier'];
      return this.append(
        `enum E {${identifierName}}`,
        [path, `${position[0]}.declaration.members`],
        'members.0'
      );
    });
  }

  buildConstantDeclarations(
    $constants: Constant[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($constants)) $constants = [$constants];
    return this.forEach($constants, ($constant: Constant) => {
      const constantName = $constant['@_name'];
      const constantType = this.getType($constant);
      return this.append(`export const ${constantName}: ${constantType};`, [
        path,
        `${position[0]}.body.body`
      ]);
    });
  }

  buildFunctionDeclarations(
    $functions: Function[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    return this.forEach($functions, ($function: Function, i: number) => {
      const returnType = this.getType($function['return-value']);
      const functionName = $function['@_name'];
      const count = this.append(
        `export function ${functionName}(): ${returnType}`,
        [path, `${position[0]}.body.body`]
      );
      this.buildFunctionDeclarationParams(
        oc($function).parameters.parameter([]),
        [position[1] + i, 0],
        [path, `${position[0]}.body.body`]
      );
      return count;
    });
  }

  buildFunctionDeclarationParams(
    $parameters: Parameter[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    return this.forEach(
      $parameters,
      ($parameter: Parameter, _i: number, count: number) => {
        const paramName = $parameter['@_name'];
        const paramRequired = $parameter['@_optional'] !== '1';
        const paramType = this.getType($parameter);
        if (paramType) {
          // TODO: some param types not supported
          return this.append(
            `function hello(${paramName}${
              paramRequired ? '' : '?'
            }: ${paramType}) {}`,
            [path, `${position[0]}.declaration.params`],
            'params.0'
          );
        }
        return count;
      }
    );
  }

  buildClassDeclarations(
    $classes: Class[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    return this.forEach($classes, ($class: Class, i: number) => {
      const className = $class['@_name'];
      this.symbols.add(className);
      const parentClassName = $class['@_parent'];
      const count = this.append(
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
      return count;
    });
  }

  buildMethodDeclarations(
    $methods: Method[],
    position: number[],
    path: string | DeepArray<string>
  ): number {
    if (!Array.isArray($methods)) $methods = [$methods];
    return this.forEach($methods, ($method: Method, i: number) => {
      const returnType = this.getType($method['return-value']);
      const methodName = $method['@_name'];
      const count = this.append(
        `class C {${methodName}(): ${returnType}}`,
        [path, `${position[0]}.declaration.body.body`],
        'body.body'
      );
      this.buildMethodDeclarationParams(
        oc($method).parameters.parameter([]),
        [position[1] + i, 0],
        [path, `${position[0]}.declaration.body.body`]
      );
      return count;
    });
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
