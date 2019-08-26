import BabelParserGenerator, { InjectPath } from 'babel-parser-generator';
import _ from 'lodash';
import { ParserOptions } from '@babel/parser';
import { oc } from 'ts-optchain.macro';
import {
  Alias,
  Bitfield,
  Callback,
  Class,
  ClassIdentifiers,
  Constant,
  Constructor,
  Enumeration,
  Field,
  Function,
  GirType,
  GirTypeStrict,
  Interface,
  Logger,
  Member,
  Method,
  Namespace,
  Parameter,
  Property,
  Record,
  Renamed,
  Union,
  UserConfig
} from './types';

export default class GirTSGenerator extends BabelParserGenerator {
  options: ParserOptions = {
    plugins: ['jsx', 'typescript'],
    sourceType: 'module'
  };

  imports: Set<string> = new Set();

  isModule = false;

  moduleTypes: Set<string> = new Set();

  renamed: Renamed = {
    classes: {},
    functions: {}
  };

  constructor(
    public $namespace: Namespace,
    public userConfig: UserConfig,
    public logger: Logger,
    public moduleName = ''
  ) {
    super();
    this.isModule = !!moduleName.length;
  }

  build() {
    this.setModulesTypes();
    this.buildModules();
    this.buildImports(this.imports);
  }

  setModulesTypes() {
    let $constants = oc(this.$namespace).constant([]);
    if (!Array.isArray($constants)) {
      $constants = [($constants as unknown) as Constant];
    }
    let $enumerations = oc(this.$namespace).enumeration([]);
    if (!Array.isArray($enumerations)) {
      $enumerations = [($enumerations as unknown) as Enumeration];
    }
    let $aliases = oc(this.$namespace).alias([]);
    if (!Array.isArray($aliases)) $aliases = [($aliases as unknown) as Alias];
    let $unions = oc(this.$namespace).union([]);
    if (!Array.isArray($unions)) $unions = [$unions];
    let $classes = oc(this.$namespace).class([]);
    if (!Array.isArray($classes)) $classes = [($classes as unknown) as Class];
    let $records = oc(this.$namespace).record([]);
    if (!Array.isArray($records)) {
      $records = [($records as unknown) as Record];
    }
    let $bitfields = oc(this.$namespace).bitfield([]);
    if (!Array.isArray($bitfields)) $bitfields = [$bitfields];
    let $functions = oc(this.$namespace).function([]);
    if (!Array.isArray($functions)) {
      $functions = [($functions as unknown) as Function];
    }
    let $callbacks = oc(this.$namespace).callback([]);
    if (!Array.isArray($callbacks)) {
      $callbacks = [($callbacks as unknown) as Callback];
    }
    $constants.forEach(($constant: Constant) => {
      this.moduleTypes.add($constant['@_name']);
    });
    $aliases.forEach(($alias: Alias) => {
      this.moduleTypes.add($alias['@_name']);
    });
    $unions.forEach(($union: Union) => {
      this.moduleTypes.add($union['@_name']);
    });
    $enumerations.forEach(($enumeration: Enumeration) => {
      this.moduleTypes.add($enumeration['@_name']);
    });
    $classes.forEach(($class: Class) => {
      this.moduleTypes.add($class['@_name']);
    });
    $bitfields.forEach(($bitfield: Bitfield) => {
      this.moduleTypes.add($bitfield['@_name']);
    });
    $records.forEach(($record: Record) => {
      this.moduleTypes.add($record['@_name']);
    });
    $functions.forEach(($function: Function) => {
      this.moduleTypes.add($function['@_name']);
    });
    $callbacks.forEach(($callback: Callback) => {
      this.moduleTypes.add($callback['@_name']);
    });
  }

  buildModules(path: InjectPath = ''): void {
    const count = this.isModule
      ? this.append(`declare module '${this.moduleName}' {}`, path)
      : 0;
    this.buildConstantDeclarations(oc(this.$namespace).constant([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildEnumDeclarations(oc(this.$namespace).enumeration([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildEnumDeclarations(oc(this.$namespace).bitfield([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildTypeDeclarations(oc(this.$namespace).alias([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildTypeDeclarations(oc(this.$namespace).union([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildInterfaceDeclarations(oc(this.$namespace).interface([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildClassDeclarations(oc(this.$namespace).class([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildClassDeclarations(oc(this.$namespace).record([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildFunctionDeclarations(oc(this.$namespace).function([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
    this.buildCallbackDeclarations(oc(this.$namespace).callback([]), [
      path,
      this.isModule ? count - 1 : ''
    ]);
  }

  buildImports(imports: Set<string>, path: InjectPath = ''): void {
    imports.forEach((importName: string) => {
      let importPath = this.userConfig.importMap[_.kebabCase(importName)];
      if (!importPath) importPath = `./${_.kebabCase(importName)}`;
      this.prepend(`import * as ${importName} from '${importPath}'`, path);
      this.logger.warn(`importing '${importName}' from '${importPath}'`);
    });
  }

  buildTypeDeclarations(
    $aliasesOrUnions: Alias[] | Union[],
    path: InjectPath = ''
  ): void {
    if (!Array.isArray($aliasesOrUnions)) $aliasesOrUnions = [$aliasesOrUnions];
    $aliasesOrUnions.forEach(($aliasOrUnion: Alias | Union) => {
      const typeName = $aliasOrUnion['@_name'];
      let types: Field[] | Alias[] = ($aliasOrUnion as unknown) as (
        | Field[]
        | Alias[]);
      if (($aliasOrUnion as Union).field) {
        types = ($aliasOrUnion as Union).field as Field[];
      }
      if (!Array.isArray(types)) types = [types];
      const typeString = _.uniq(
        (types as GirType[]).map(t => this.getType(t))
      ).join(' | ');
      this.append(`export type ${typeName} = ${typeString}`, [
        path,
        this.isModule ? 'body.body' : ''
      ]);
    });
  }

  buildEnumDeclarations(
    $enumerations: Enumeration[],
    path: InjectPath = ''
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
        count - 1
      ]);
    });
  }

  buildEnumDeclarationMembers($members: Member[], path: InjectPath = ''): void {
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
    path: InjectPath = ''
  ): void {
    if (!Array.isArray($constants)) $constants = [$constants];
    $constants.forEach(($constant: Constant) => {
      const constantName = $constant['@_name'];
      const constantType = this.getType($constant);
      this.append(`export const ${constantName}: ${constantType};`, [
        path,
        this.isModule ? 'body.body' : ''
      ]);
    });
  }

  buildFunctionDeclarations(
    $functions: Function[],
    path: InjectPath = ''
  ): void {
    if (!Array.isArray($functions)) $functions = [$functions];
    $functions.forEach(($function: Function) => {
      const returnType = this.getType($function['return-value']);
      let functionName = $function['@_name'];
      if (this.isReservedKeyword(functionName)) {
        functionName = `g_${functionName}`;
        this.renamed.functions[$function['@_name']] = functionName;
        this.logger.warn(
          `function '${$function['@_name']}' renamed to '${functionName}'`
        );
      }
      const count = this.append(
        `export function ${functionName}(): ${returnType}`,
        [path, this.isModule ? 'body.body' : '']
      );
      this.buildFunctionParams(oc($function).parameters.parameter([]), [
        path,
        this.isModule ? 'body.body' : '',
        count - 1,
        'declaration.params'
      ]);
    });
  }

  buildCallbackDeclarations(
    $callbacks: Callback[],
    path: InjectPath = ''
  ): void {
    $callbacks.forEach(($callback: Callback) => {
      const returnType = this.getType($callback['return-value']);
      const callbackName = $callback['@_name'];
      const count = this.append(
        `export type ${callbackName} = () => ${returnType}`,
        [path, this.isModule ? 'body.body' : '']
      );
      this.buildFunctionParams(oc($callback).parameters.parameter([]), [
        path,
        this.isModule ? 'body.body' : '',
        count - 1,
        'declaration.typeAnnotation.parameters'
      ]);
    });
  }

  buildFunctionParams($parameters: Parameter[], path: InjectPath = ''): void {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let paramRequired = true;
    $parameters.forEach(($parameter: Parameter) => {
      let paramName = this.safeWord($parameter['@_name']);
      let paramType = this.getType($parameter);
      if (paramName === 'arguments' || paramName === 'eval') {
        paramName = `_${paramName}`;
        paramRequired = !paramRequired
          ? false
          : $parameter['@_optional'] !== '1';
      } else if (paramName === '...') {
        paramName = '...args';
        paramRequired = true;
        paramType = this.getType($parameter, { isArray: true });
      }
      if (paramType) {
        // TODO: some param types not supported
        this.append(
          `function f(${paramName}${
            paramRequired ? '' : '?'
          }: ${paramType}) {}`,
          path,
          'params.0'
        );
      }
    });
  }

  buildInterfaceDeclarations(
    $interfaces: Interface[],
    path: InjectPath = ''
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
        [path, this.isModule ? 'body.body' : '', count - 1],
        $interface
      );
      this.buildMethodDeclarations(
        oc($interface).method([]),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $interface
      );
    });
  }

  buildClassDeclarations($classes: Class[], path: InjectPath = ''): void {
    return $classes.forEach(($class: Class) => {
      const className = $class['@_name'];
      const parentClassName = $class['@_parent'];
      if (parentClassName) {
        const parentClassNameSplit = parentClassName.split('.');
        if (
          parentClassNameSplit.length > 1 &&
          parentClassNameSplit[0] !== this.$namespace['@_name']
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
      this.buildConstructorDeclaration(oc($class).constructor([]), [
        path,
        this.isModule ? 'body.body' : '',
        count - 1
      ]);
      this.buildPropertyDeclarations(
        oc($class).property([]),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class
      );
      this.buildPropertyDeclarations(
        oc($class).field([]),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
        true
      );
      this.buildMethodDeclarations(
        oc($class).method([]),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class
      );
      this.buildMethodDeclarations(
        oc($class)['virtual-method']([]),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class
      );
      this.buildMethodDeclarations(
        oc($class).function([]),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
        true
      );
    });
  }

  getClassIdentifiers(
    $class?: Class | Interface,
    recursive = true
  ): ClassIdentifiers {
    const result: ClassIdentifiers = {};
    if (!$class) return result;
    const $parentClass = _.find(
      oc(this.$namespace).class([]),
      $namespaceClass => $namespaceClass['@_name'] === $class['@_parent']
    );
    let $properties = oc($class).property([]);
    if (!Array.isArray($properties)) {
      $properties = [($properties as unknown) as Property];
    }
    let $methods = oc($class).method([]);
    if (!Array.isArray($methods)) $methods = [($methods as unknown) as Method];
    let $fields = oc($class).field([]);
    if (!Array.isArray($fields)) $fields = [($fields as unknown) as Field];
    let $functions = oc($class).function([]);
    if (!Array.isArray($functions)) {
      $functions = [($functions as unknown) as Function];
    }
    let $virtualMethods = oc($class)['virtual-method']([]);
    if (!Array.isArray($virtualMethods)) {
      $virtualMethods = [($virtualMethods as unknown) as Method];
    }
    const parentClassIdentifiers = $parentClass
      ? Object.keys(this.getClassIdentifiers($parentClass))
      : [];
    const identifiers = [
      ...(recursive ? parentClassIdentifiers : []),
      ...$fields.map(($field: Field) => $field['@_name']),
      ...$functions.map(($function: Function) => $function['@_name']),
      ...$methods.map(($method: Method) => $method['@_name']),
      ...$properties.map(($property: Property) => $property['@_name']),
      ...$virtualMethods.map(($method: Method) => $method['@_name'])
    ];
    identifiers.forEach((identifier: string) => {
      result[identifier] = result[identifier] ? ++result[identifier] : 1;
    });
    return result;
  }

  getParentClassIdentifiers(
    $class?: Class | Interface,
    recursive = true
  ): ClassIdentifiers {
    if (!$class) return {};
    const $parentClass = _.find(
      oc(this.$namespace).class([]),
      $namespaceClass => $namespaceClass['@_name'] === $class['@_parent']
    );
    if (!$parentClass) return {};
    return this.getClassIdentifiers($parentClass, recursive);
  }

  buildMethodDeclarations(
    $methods: Method[] | Function[],
    path: InjectPath = '',
    $class?: Class | Interface,
    isStatic = false
  ): void {
    if (!Array.isArray($methods)) $methods = [$methods];
    const parentClassIdentifiers = this.getParentClassIdentifiers($class);
    const classIdentifiers = this.getClassIdentifiers($class, false);
    $methods.forEach(($method: Method) => {
      let methodName = $method['@_name'];
      if (this.isReservedKeyword(methodName) || methodName === 'constructor') {
        methodName = `g_${methodName}`;
        if ($class) {
          if (!this.renamed.classes[$class['@_name']]) {
            this.renamed.classes[$class['@_name']] = {};
          }
          this.renamed.classes[$class['@_name']][
            $method['@_name']
          ] = methodName;
        }
        this.logger.warn(
          `method '${$method['@_name']}' renamed to '${methodName}'${
            $class ? ` in class '${$class['@_name']}'` : ''
          }`
        );
      } else if (!methodName.length) {
        this.logger.warn(
          `empty method name${$class ? ` in class '${$class['@_name']}'` : ''}`
        );
        return true;
      }
      if (
        this.userConfig.ignoreDuplicates &&
        (parentClassIdentifiers[methodName] || classIdentifiers[methodName] > 1)
      ) {
        this.logger.warn(
          `duplicate method '${methodName}' ignored${
            $class ? ` in class '${$class['@_name']}'` : ''
          }`
        );
      } else {
        const returnType = this.getType($method['return-value']);
        const count = this.append(
          `class Class {${
            isStatic ? 'static ' : ''
          }${methodName}(): ${returnType}}`,
          [path, 'declaration.body.body'],
          'body.body'
        );
        this.buildMethodDeclarationParams(
          oc($method).parameters.parameter([]),
          [path, 'declaration.body.body', count - 1]
        );
      }
      return true;
    });
  }

  buildConstructorDeclaration(
    $constructors: Constructor[],
    path: InjectPath = ''
  ): void {
    let $constructor = ($constructors as unknown) as Constructor;
    if (Array.isArray($constructors)) {
      if ($constructors.length) {
        $constructor = $constructors[0] as Constructor;
      }
    }
    if (!$constructor['@_name']) return;
    const count = this.append(
      `class C {constructor()}`,
      [path, 'declaration.body.body'],
      'body.body.0'
    );
    this.buildFunctionParams(oc($constructor).parameters.parameter([]), [
      path,
      'declaration.body.body',
      count - 1,
      'params'
    ]);
  }

  buildMethodDeclarationParams(
    $parameters: Parameter[],
    path: InjectPath = ''
  ): void {
    if (!Array.isArray($parameters)) $parameters = [$parameters];
    let paramRequired = true;
    $parameters.forEach(($parameter: Parameter) => {
      let paramName = this.safeWord($parameter['@_name']);
      let paramType = this.getType($parameter);
      if (paramName === 'arguments' || paramName === 'eval') {
        paramName = `_${paramName}`;
      } else if (paramName === '...') {
        paramName = '...args';
        paramRequired = true;
        paramType = this.getType($parameter, { isArray: true });
      }
      paramRequired = !paramRequired ? false : $parameter['@_optional'] !== '1';
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
    path: InjectPath = '',
    $class?: Class | Interface,
    isStatic = false
  ): void {
    if (!Array.isArray($properties)) $properties = [$properties];
    const parentClassIdentifiers = this.getParentClassIdentifiers($class);
    const classIdentifiers = this.getClassIdentifiers($class, false);
    $properties.forEach(($property: Property) => {
      let propertyName = $property['@_name'];
      if (
        this.isReservedKeyword(propertyName) ||
        propertyName === 'constructor'
      ) {
        propertyName = `g_${propertyName}`;
        if ($class) {
          if (!this.renamed.classes[$class['@_name']]) {
            this.renamed.classes[$class['@_name']] = {};
          }
          this.renamed.classes[$class['@_name']][
            $property['@_name']
          ] = propertyName;
        }
        this.logger.warn(
          `property '${$property['@_name']}' renamed to '${propertyName}'${
            $class ? ` in class '${$class['@_name']}'` : ''
          }`
        );
      }
      if (
        this.userConfig.ignoreDuplicates &&
        (parentClassIdentifiers[propertyName] ||
          classIdentifiers[propertyName] > 1)
      ) {
        this.logger.warn(`duplicate property '${propertyName}' ignored`);
      } else {
        const propertyType = this.getType($property);
        this.append(
          `class Class {${isStatic ? 'static ' : ''}${
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
    options: {
      isArray?: boolean | null;
      nullable?: boolean | null;
    } = {
      isArray: null,
      nullable: null
    }
  ): string | null {
    let { isArray, nullable } = options;
    if (typeof isArray === 'undefined') isArray = null;
    if (typeof nullable === 'undefined') nullable = null;
    const girTypeStrict = girType as GirTypeStrict;
    // TODO: some param types not supported
    let girTypeStr: string = '';
    let knownType = null;
    if (typeof girTypeStrict !== 'string') {
      if (girTypeStrict.array) {
        if (isArray === null) isArray = true;
        girTypeStr = oc(girTypeStrict)
          .array.type['@_name']('')
          .toString();
        nullable =
          oc(girTypeStrict)['@_nullable']() === '1' &&
          oc(girTypeStrict)['@_optional']() !== '1';
      } else if (girTypeStrict.callback) {
        const returnType = this.getType(girTypeStrict.callback['return-value']);
        const girTypescriptGenerator = new GirTSGenerator(
          this.$namespace,
          this.userConfig,
          this.logger,
          this.moduleName
        );
        girTypescriptGenerator.append(
          `type T = () => ${returnType}`,
          '',
          'typeAnnotation'
        );
        girTypescriptGenerator.moduleTypes = this.moduleTypes;
        girTypescriptGenerator.buildFunctionParams(
          oc(girTypeStrict).callback.parameters.parameter([]),
          ['0', 'parameters']
        );
        knownType = girTypescriptGenerator.generate();
      } else if (girTypeStrict.type) {
        girTypeStr = oc(girTypeStrict)
          .type['@_name']('')
          .toString();
        nullable =
          oc(girTypeStrict)['@_nullable']() === '1' &&
          oc(girTypeStrict)['@_optional']() !== '1';
      } else {
        knownType = 'any';
      }
    }
    if (isArray === null) isArray = false;
    if (nullable === null) nullable = false;
    girTypeStr = girTypeStr.split(' ').pop() || '';
    if (!girTypeStr && !knownType) knownType = 'any';
    let array = '';
    if (isArray) array = '[]';
    if (knownType) {
      if (knownType.indexOf(' ') > -1 && array.length) {
        knownType = `(${knownType})`;
      }
      knownType = `${knownType}${array}`;
      return knownType;
    }
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
      const moduleName = this.$namespace['@_name'];
      let moduleType = girTypeStr;
      const girTypeStrSplit = girTypeStr.split('.');
      if (girTypeStrSplit[0] === moduleName) {
        moduleType = girTypeStrSplit.pop() || girTypeStr;
      }
      if (this.moduleTypes.has(moduleType)) {
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
