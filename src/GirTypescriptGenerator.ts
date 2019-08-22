import BabelParserGenerator from 'babel-parser-generator';
import _ from 'lodash';
import { ParserOptions } from '@babel/parser';
import { oc } from 'ts-optchain.macro';
import {
  Alias,
  Bitfield,
  Class,
  Constant,
  DeepArray,
  Enumeration,
  Function,
  GirType,
  Interface,
  Logger,
  Member,
  Method,
  ModulesTypes,
  Namespace,
  Parameter,
  Property,
  Record,
  Repository,
  Union
} from './types';

export default class GirTypescriptGenerator extends BabelParserGenerator {
  options: ParserOptions = {
    plugins: ['jsx', 'typescript'],
    sourceType: 'module'
  };

  modulesTypes: ModulesTypes = {};

  imports: Set<string> = new Set();

  constructor(
    public repository: Repository,
    public logger: Logger,
    public isModule = false
  ) {
    super();
  }

  build() {
    const $namespaces = oc(this.repository).namespace([]);
    this.setModulesTypes($namespaces);
    this.buildModules($namespaces);
    this.buildImports(this.imports);
  }

  setModulesTypes($namespaces: Namespace[]) {
    if (!Array.isArray($namespaces)) $namespaces = [$namespaces];
    $namespaces.forEach(($namespace: Namespace) => {
      this.modulesTypes[$namespace['@_name']] = new Set();
      let $constants = oc($namespace).constant([]);
      if (!Array.isArray($constants)) {
        $constants = [($constants as unknown) as Constant];
      }
      let $enumerations = oc($namespace).enumeration([]);
      if (!Array.isArray($enumerations)) {
        $enumerations = [($enumerations as unknown) as Enumeration];
      }
      let $aliases = oc($namespace).alias([]);
      if (!Array.isArray($aliases)) $aliases = [($aliases as unknown) as Alias];
      let $unions = oc($namespace).union([]);
      if (!Array.isArray($unions)) $unions = [$unions];
      let $classes = oc($namespace).class([]);
      if (!Array.isArray($classes)) $classes = [($classes as unknown) as Class];
      let $records = oc($namespace).record([]);
      if (!Array.isArray($records)) {
        $records = [($records as unknown) as Record];
      }
      let $bitfields = oc($namespace).bitfield([]);
      if (!Array.isArray($bitfields)) $bitfields = [$bitfields];
      let $functions = oc($namespace).function([]);
      if (!Array.isArray($functions)) {
        $functions = [($functions as unknown) as Function];
      }
      $constants.forEach(($constant: Constant) => {
        this.modulesTypes[$namespace['@_name']].add($constant['@_name']);
      });
      $aliases.forEach(($alias: Alias) => {
        this.modulesTypes[$namespace['@_name']].add($alias['@_name']);
      });
      $unions.forEach(($union: Union) => {
        this.modulesTypes[$namespace['@_name']].add($union['@_name']);
      });
      $enumerations.forEach(($enumeration: Enumeration) => {
        this.modulesTypes[$namespace['@_name']].add($enumeration['@_name']);
      });
      $classes.forEach(($class: Class) => {
        this.modulesTypes[$namespace['@_name']].add($class['@_name']);
      });
      $bitfields.forEach(($bitfield: Bitfield) => {
        this.modulesTypes[$namespace['@_name']].add($bitfield['@_name']);
      });
      $records.forEach(($record: Record) => {
        this.modulesTypes[$namespace['@_name']].add($record['@_name']);
      });
      $functions.forEach(($function: Function) => {
        this.modulesTypes[$namespace['@_name']].add($function['@_name']);
      });
    });
  }

  buildModules(
    $namespaces: Namespace[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($namespaces)) $namespaces = [$namespaces];
    $namespaces.forEach(($namespace: Namespace) => {
      const moduleName = $namespace['@_name'];
      const count = this.isModule
        ? this.append(`declare module '${moduleName}' {}`, path)
        : 0;
      this.buildConstantDeclarations(
        oc($namespace).constant([]),
        [path, this.isModule ? `${count - 1}` : ''],
        $namespace
      );
      this.buildEnumDeclarations(oc($namespace).enumeration([]), [
        path,
        this.isModule ? `${count - 1}` : ''
      ]);
      this.buildEnumDeclarations(oc($namespace).bitfield([]), [
        path,
        this.isModule ? `${count - 1}` : ''
      ]);
      this.buildTypeDeclarations(oc($namespace).alias([]), [
        path,
        this.isModule ? `${count - 1}` : ''
      ]);
      this.buildTypeDeclarations(oc($namespace).union([]), [
        path,
        this.isModule ? `${count - 1}` : ''
      ]);
      this.buildInterfaceDeclarations(
        oc($namespace).interface([]),
        [path, this.isModule ? `${count - 1}` : ''],
        $namespace
      );
      this.buildClassDeclarations(
        oc($namespace).class([]),
        [path, this.isModule ? `${count - 1}` : ''],
        $namespace
      );
      this.buildClassDeclarations(
        oc($namespace).record([]),
        [path, this.isModule ? `${count - 1}` : ''],
        $namespace
      );
      this.buildFunctionDeclarations(
        oc($namespace).function([]),
        [path, this.isModule ? `${count - 1}` : ''],
        $namespace
      );
    });
  }

  buildImports(
    imports: Set<string>,
    path: string | DeepArray<string> = ''
  ): void {
    imports.forEach((importName: string) => {
      const importPath = `gnome-${_.kebabCase(importName)}`;
      this.prepend(`import * as ${importName} from '${importPath}'`, path);
      this.logger.warn(`importing '${importName}' from '${importPath}'`);
    });
  }

  buildTypeDeclarations(
    $aliasesOrUnions: Alias[] | Union[],
    path: string | DeepArray<string> = ''
  ): void {
    if (!Array.isArray($aliasesOrUnions)) $aliasesOrUnions = [$aliasesOrUnions];
    $aliasesOrUnions.forEach(($aliasOrUnion: Alias | Union) => {
      const typeName = $aliasOrUnion['@_name'];
      let types: Field[] | Alias[] = $aliasOrUnion;
      if ($aliasOrUnion.field) {
        types = $aliasOrUnion.field as Field[];
      }
      if (!Array.isArray(types)) types = [types];
      const typeString = _.uniq(types.map(t => this.getType(t))).join(' | ');
      this.append(`export type ${typeName} = ${typeString}`, [
        path,
        this.isModule ? 'body.body' : ''
      ]);
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
        this.isModule ? 'body.body' : ''
      ]);
      this.buildEnumDeclarationMembers(oc($enumeration).member([]), [
        path,
        this.isModule ? 'body.body' : '',
        (count - 1).toString()
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
    path: string | DeepArray<string> = '',
    $namespace?: Namespace
  ): void {
    if (!Array.isArray($constants)) $constants = [$constants];
    $constants.forEach(($constant: Constant) => {
      const constantName = $constant['@_name'];
      const constantType = this.getType($constant, $namespace);
      this.append(`export const ${constantName}: ${constantType};`, [
        path,
        this.isModule ? 'body.body' : ''
      ]);
    });
  }

  buildFunctionDeclarations(
    $functions: Function[],
    path: string | DeepArray<string> = '',
    $namespace?: Namespace
  ): void {
    $functions.forEach(($function: Function) => {
      const returnType = this.getType($function['return-value'], $namespace);
      let functionName = $function['@_name'];
      if (this.isReservedKeyword(functionName)) {
        functionName = `g_${functionName}`;
        this.logger.warn(
          `'${$function['@_name']}' renamed to '${functionName}'`
        );
      }
      const count = this.append(
        `export function ${functionName}(): ${returnType}`,
        [path, this.isModule ? 'body.body' : '']
      );
      this.buildFunctionDeclarationParams(
        oc($function).parameters.parameter([]),
        [path, this.isModule ? 'body.body' : '', (count - 1).toString()],
        $namespace
      );
    });
  }

  buildFunctionDeclarationParams(
    $parameters: Parameter[],
    path: string | DeepArray<string> = '',
    $namespace?: Namespace
  ): void {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let paramRequired = true;
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = this.safeWord($parameter['@_name']);
      paramRequired = !paramRequired ? false : $parameter['@_optional'] !== '1';
      const paramType = this.getType($parameter, $namespace);
      if (paramType && paramName !== '...') {
        // TODO: some param types not supported
        this.append(
          `function f(${paramName}${
            paramRequired ? '' : '?'
          }: ${paramType}) {}`,
          [path, 'declaration.params'],
          'params.0'
        );
      }
    });
  }

  buildInterfaceDeclarations(
    $interfaces: Interface[],
    path: string | DeepArray<string> = '',
    $namespace?: Namespace
  ): void {
    if (!Array.isArray($interfaces)) $interfaces = [$interfaces];
    return $interfaces.forEach(($interface: Interface) => {
      const interfaceName = $interface['@_name'];
      const count = this.append(`export interface ${interfaceName} {}`, [
        path,
        this.isModule ? 'body.body' : ''
      ]);
      this.buildPropertyDeclarations(
        oc($interface).property([]),
        [path, this.isModule ? 'body.body' : '', (count - 1).toString()],
        $interface,
        $namespace
      );
      this.buildMethodDeclarations(
        oc($interface).method([]),
        [path, this.isModule ? 'body.body' : '', (count - 1).toString()],
        $interface,
        $namespace
      );
    });
  }

  buildClassDeclarations(
    $classes: Class[],
    path: string | DeepArray<string> = '',
    $namespace?: Namespace
  ): void {
    return $classes.forEach(($class: Class) => {
      const className = $class['@_name'];
      const parentClassName = $class['@_parent'];
      if ($namespace && parentClassName) {
        const parentClassNameSplit = parentClassName.split('.');
        if (
          parentClassNameSplit.length > 1 &&
          parentClassNameSplit[0] !== $namespace['@_name']
        ) {
          this.imports.add(parentClassNameSplit[0]);
        }
      }
      const count = this.append(
        `export class ${className} ${
          parentClassName ? `extends ${parentClassName} ` : ''
        }{}`,
        [path, this.isModule ? 'body.body' : '']
      );
      this.buildPropertyDeclarations(
        oc($class).property([]),
        [path, this.isModule ? 'body.body' : '', (count - 1).toString()],
        $class,
        $namespace
      );
      this.buildPropertyDeclarations(
        oc($class).field([]),
        [path, this.isModule ? 'body.body' : '', (count - 1).toString()],
        $class,
        $namespace
      );
      this.buildMethodDeclarations(
        oc($class).method([]),
        [path, this.isModule ? 'body.body' : '', (count - 1).toString()],
        $class,
        $namespace
      );
    });
  }

  getClassIdentifiers($class?: Class, $namespace?: Namespace): Set<string> {
    if (!$class || !$namespace) return new Set();
    const $parentClass = _.find(
      $namespace.class,
      $namespaceClass => $namespaceClass['@_name'] === $class['@_parent']
    );
    let $properties = oc($class).property([]);
    if (!Array.isArray($properties)) {
      $properties = [($properties as unknown) as Property];
    }
    let $methods = oc($class).method([]);
    if (!Array.isArray($methods)) $methods = [($methods as unknown) as Method];
    return new Set([
      ...($parentClass
        ? this.getClassIdentifiers($parentClass, $namespace)
        : []),
      ...$methods.map(($method: Method) => $method['@_name']),
      ...$properties.map(($property: Property) => $property['@_name'])
    ]);
  }

  getParentClassIdentifiers(
    $class?: Class,
    $namespace?: Namespace
  ): Set<string> {
    if (!$class || !$namespace) return new Set();
    const $parentClass = _.find(
      $namespace.class,
      $namespaceClass => $namespaceClass['@_name'] === $class['@_parent']
    );
    if (!$parentClass) return new Set();
    return this.getClassIdentifiers($parentClass, $namespace);
  }

  buildMethodDeclarations(
    $methods: Method[],
    path: string | DeepArray<string> = '',
    $class?: Class,
    $namespace?: Namespace
  ): void {
    if (!Array.isArray($methods)) $methods = [$methods];
    const classIdentifiers = this.getParentClassIdentifiers($class, $namespace);
    $methods.forEach(($method: Method) => {
      const methodName = $method['@_name'];
      if (classIdentifiers.has(methodName)) {
        this.logger.warn(`duplicate method '${methodName}' ignored`);
      } else {
        const returnType = this.getType($method['return-value'], $namespace);
        const count = this.append(
          `class C {${methodName}(): ${returnType}}`,
          [path, 'declaration.body.body'],
          'body.body'
        );
        this.buildMethodDeclarationParams(
          oc($method).parameters.parameter([]),
          [path, `declaration.body.body.${count - 1}`],
          $namespace
        );
      }
    });
  }

  buildMethodDeclarationParams(
    $parameters: Parameter[],
    path: string | DeepArray<string> = '',
    $namespace?: Namespace
  ): void {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let paramRequired = true;
    $parameters.forEach(($parameter: Parameter) => {
      const paramName = this.safeWord($parameter['@_name']);
      paramRequired = !paramRequired ? false : $parameter['@_optional'] !== '1';
      const paramType = this.getType($parameter, $namespace);
      if (paramType && paramName !== '...') {
        // TODO: some param types not supported
        this.append(
          `function f(${paramName}${
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
    path: string | DeepArray<string> = '',
    $class?: Class,
    $namespace?: Namespace
  ): void {
    if (!Array.isArray($properties)) $properties = [$properties];
    const classIdentifiers = this.getParentClassIdentifiers($class, $namespace);
    $properties.forEach(($property: Property) => {
      let propertyName = $property['@_name'];
      if (
        this.isReservedKeyword(propertyName) ||
        propertyName === 'constructor'
      ) {
        propertyName = `g_${propertyName}`;
        this.logger.warn(
          `property '${$property['@_name']}' renamed to '${propertyName}'`
        );
      }
      if (classIdentifiers.has(propertyName)) {
        this.logger.warn(`duplicate property '${propertyName}' ignored`);
      } else {
        const propertyType = this.getType($property, $namespace);
        this.append(
          `class C {${
            propertyName.indexOf('-') > -1 ? `'${propertyName}'` : propertyName
          }: ${propertyType}}`,
          [path, 'declaration.body.body'],
          'body.body.0'
        );
      }
    });
  }

  getType(
    girType: GirType,
    $namespace?: Namespace,
    isArray?: boolean,
    nullable?: boolean
  ): string | null {
    // TODO: some param types not supported
    let girTypeStr: string = '';
    let unknownType = false;
    if (typeof girType !== 'string') {
      if (girType.array) {
        isArray = true;
        girTypeStr = oc(girType)
          .array.type['@_name']()
          .toString();
        nullable =
          oc(girType)['@_nullable']() === '1' &&
          oc(girType)['@_optional']() !== '1';
      } else if (girType.type) {
        girTypeStr = oc(girType)
          .type['@_name']()
          .toString();
        nullable =
          oc(girType)['@_nullable']() === '1' &&
          oc(girType)['@_optional']() !== '1';
      } else {
        unknownType = true;
      }
    }
    if (typeof isArray === 'undefined' || isArray === null) isArray = false;
    if (typeof nullable === 'undefined' || nullable === null) nullable = false;
    girTypeStr = girTypeStr.split(' ').pop() || '';
    if (!girTypeStr) return 'any';
    let array = '';
    if (isArray) array = '[]';
    if (unknownType) return `any${array}`;
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
      let moduleName = '';
      let moduleTypes = new Set();
      if ($namespace) {
        moduleName = $namespace['@_name'];
        moduleTypes = this.modulesTypes[moduleName];
      }
      let moduleType = girTypeStr;
      const girTypeStrSplit = girTypeStr.split('.');
      if (girTypeStrSplit[0] === moduleName) {
        moduleType = girTypeStrSplit.pop() || girTypeStr;
      }
      if (moduleTypes.has(moduleType)) {
        tsType = moduleType + array;
      } else if (girTypeStrSplit.length > 1) {
        this.imports.add(girTypeStrSplit[0]);
        tsType = girTypeStr + array;
      } else {
        this.logger.warn(`unknown type '${moduleType}' set to 'any'`);
        tsType = `any${array}`;
      }
    }
    if (nullable) tsType = `${tsType} | null`;
    return tsType;
  }
}
