import { ParserOptions } from '@babel/parser';
import { oc } from 'ts-optchain.macro';
import Generator from './Generator';
import {
  Class,
  DeepArray,
  Function,
  GirType,
  Method,
  Namespace,
  Parameter,
  Property,
  Repository
} from './types';

export default class GirTypescriptGenerator extends Generator {
  options: ParserOptions = {
    plugins: ['jsx', 'typescript'],
    sourceType: 'module'
  };

  symbols: Set<string> = new Set();

  constructor(public repository: Repository) {
    super();
  }

  build() {
    this.buildModule();
  }

  buildModule(): number {
    const $namespace = this.repository.namespace;
    const moduleName = $namespace['@_name'];
    this.append(`declare module '${moduleName}' {}`);
    const childCount = this.buildClassDeclarations($namespace, [0, 0], '');
    this.buildFunctionDeclarations($namespace, [0, childCount], '');
    return 1;
  }

  buildFunctionDeclarations(
    $namespace: Namespace,
    position: number[],
    path: string | DeepArray<string>
  ) {
    const $functions: Function[] = oc($namespace).function([]);
    let count = 0;
    $functions.forEach(($function: Function, i: number) => {
      const returnType = this.getType($function['return-value']);
      const functionName = $function['@_name'];
      this.append(`export function ${functionName}(): ${returnType} {}`, [
        path,
        `${position[0]}.body.body`
      ]);
      count++;
      this.buildFunctionDeclarationParams(
        $function,
        [position[1] + i, 0],
        [path, `${position[0]}.body.body`]
      );
    });
    return count;
  }

  buildFunctionDeclarationParams(
    $function: Function,
    position: number[],
    path: string | DeepArray<string>
  ): number {
    let $parameters = oc($function).parameters.parameter([]);
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let count = 0;
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = $parameter['@_name'];
      const paramType = this.getType($parameter);
      if (paramType) {
        // TODO: some param types not supported
        this.append(
          `function hello(${paramName}: ${paramType}) {}`,
          [path, `${position[0]}.declaration.params`],
          'params.0'
        );
        count++;
      }
    });
    return count;
  }

  buildClassDeclarations(
    $namespace: Namespace,
    position: number[],
    path: string | DeepArray<string>
  ): number {
    const $classes = oc($namespace).class([]);
    let count = 0;
    $classes.forEach(($class: Class, i: number) => {
      const className = $class['@_name'];
      this.symbols.add(className);
      const parentClassName = $class['@_parent'];
      this.append(
        `export class ${className} ${
          parentClassName ? `extends ${parentClassName} ` : ''
        }{}`,
        [path, `${position[0]}.body.body`]
      );
      count++;
      const childCount = this.buildPropertyDeclarations(
        $class,
        [position[1] + i, 0],
        [path, `${position[0]}.body.body`]
      );
      this.buildMethodDeclarations(
        $class,
        [position[1] + i, childCount],
        [path, `${position[0]}.body.body`]
      );
    });
    return count;
  }

  buildMethodDeclarations(
    $class: Class,
    position: number[],
    path: string | DeepArray<string>
  ): number {
    let $methods = oc($class).method([]);
    if (!Array.isArray($methods)) $methods = [$methods];
    let count = 0;
    $methods.forEach(($method: Method, i: number) => {
      const returnType = this.getType($method['return-value']);
      const methodName = $method['@_name'];
      this.append(
        `class C {${methodName}(): ${returnType}}`,
        [path, `${position[0]}.declaration.body.body`],
        'body.body'
      );
      this.buildMethodDeclarationParams(
        $method,
        [position[1] + i, 0],
        [path, `${position[0]}.declaration.body.body`]
      );
    });
    return count;
  }

  buildMethodDeclarationParams(
    $method: Method,
    position: number[],
    path: string | DeepArray<string>
  ): number {
    let $parameters = oc($method).parameters.parameter([]);
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let count = 0;
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = $parameter['@_name'];
      const paramType = this.getType($parameter);
      if (paramType) {
        // TODO: some param types not supported
        this.append(
          `function hello(${paramName}: ${paramType}) {}`,
          [path, `${position[0]}.params`],
          'params.0'
        );
        count++;
      }
    });
    return count;
  }

  buildPropertyDeclarations(
    $class: Class,
    position: number[],
    path: string | DeepArray<string>
  ): number {
    let $properties = oc($class).property([]);
    if (!Array.isArray($properties)) $properties = [$properties];
    let count = 0;
    $properties.forEach(($property: Property) => {
      const propertyName = $property['@_name'];
      const propertyType = this.getType($property);
      this.append(
        `class C {'${propertyName}': ${propertyType}}`,
        [path, `${position[0]}.declaration.body.body`],
        'body.body.0'
      );
      count++;
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
