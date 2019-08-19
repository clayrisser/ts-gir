import { ParserOptions } from '@babel/parser';
import { oc } from 'ts-optchain.macro';
import Generator from './Generator';
import {
  GirType,
  Class,
  Method,
  Repository,
  Namespace,
  DeepArray
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
    this.buildNamespace();
  }

  buildNamespace() {
    const $namespace = this.repository.namespace;
    const moduleName = $namespace['@_name'];
    this.append(`declare module '${moduleName}' {}`);
    this.buildClasses($namespace, 0, '');
  }

  buildClasses(
    $namespace: Namespace,
    position: number,
    path: string | DeepArray<string>
  ) {
    const $classes = Array.isArray($namespace.class) ? $namespace.class : [];
    $classes.forEach(($class: Class, i) => {
      const className = $class['@_name'];
      this.symbols.add(className);
      const parentClassName = $class['@_parent'];
      if (parentClassName) {
        this.append(
          `export class ${className} ${
            parentClassName ? `extends ${parentClassName} ` : ''
          }{}`,
          [path, `${position}.body.body`]
        );
      }
      this.buildMethods($class, i, [path, `${position}.body.body`]);
    });
  }

  buildMethods(
    $class: Class,
    position: number,
    path: string | DeepArray<string>
  ) {
    const $methods = Array.isArray($class.method) ? $class.method : [];
    $methods.forEach(($method: Method) => {
      const returnType = this.getType($method['return-value']);
      const methodName = $method['@_name'];
      this.symbols.add(methodName);
      this.append(
        `class C {${methodName}(): ${returnType}}`,
        [path, `${position}.declaration.body.body`],
        'body.body'
      );
    });
  }

  getType(girType: GirType, isArray = false): string {
    let girTypeStr: string = '';
    if (typeof girType !== 'string') {
      if (girType.array) {
        isArray = true;
        girTypeStr = oc(girType)
          .array.type['@_name']()
          .toString();
      } else {
        girTypeStr = oc(girType)
          .type['@_name']()
          .toString();
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
