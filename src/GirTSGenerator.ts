import type { ParserOptions } from '@babel/parser';
import _ from 'lodash';
import BabelParserGenerator, { type InjectPath } from './BabelParserGenerator.js';
import { constructorTag } from './Gir.js';
import type {
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
  UserConfig,
} from './types.js';
import { girChildren } from './utils.js';

export default class GirTSGenerator extends BabelParserGenerator {
  // `dts` puts the parser in declaration-file mode, which is what the output
  // actually is: ambient `export const X: T;` and body-less methods are only
  // legal there. Babel 8 enforces this; Babel 7 used to let it slide.
  options: ParserOptions = {
    plugins: ['jsx', ['typescript', { dts: true }]],
    sourceType: 'module',
  };

  imports: Set<string> = new Set();

  isModule = false;

  moduleTypes: Set<string> = new Set();

  renamed: Renamed = {
    classes: {},
    functions: {},
  };

  constructor(
    public $namespace: Namespace,
    public userConfig: UserConfig,
    public logger: Logger,
    public moduleName = '',
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
    const named = [
      ...girChildren<Constant>(this.$namespace, 'constant'),
      ...girChildren<Alias>(this.$namespace, 'alias'),
      ...girChildren<Union>(this.$namespace, 'union'),
      ...girChildren<Enumeration>(this.$namespace, 'enumeration'),
      ...girChildren<Class>(this.$namespace, 'class'),
      ...girChildren<Bitfield>(this.$namespace, 'bitfield'),
      ...girChildren<Record>(this.$namespace, 'record'),
      ...girChildren<Function>(this.$namespace, 'function'),
      ...girChildren<Callback>(this.$namespace, 'callback'),
    ];
    named.forEach(($named) => this.moduleTypes.add($named['@_name']));
  }

  buildModules(path: InjectPath = ''): void {
    const count = this.isModule ? this.append(`declare module '${this.moduleName}' {}`, path) : 0;
    const at: InjectPath = [path, this.isModule ? count - 1 : ''];
    this.buildConstantDeclarations(girChildren<Constant>(this.$namespace, 'constant'), at);
    this.buildEnumDeclarations(girChildren<Enumeration>(this.$namespace, 'enumeration'), at);
    this.buildEnumDeclarations(girChildren<Enumeration>(this.$namespace, 'bitfield'), at);
    this.buildTypeDeclarations(girChildren<Alias>(this.$namespace, 'alias'), at);
    this.buildTypeDeclarations(girChildren<Union>(this.$namespace, 'union'), at);
    this.buildInterfaceDeclarations(girChildren<Interface>(this.$namespace, 'interface'), at);
    this.buildClassDeclarations(girChildren<Class>(this.$namespace, 'class'), at);
    this.buildClassDeclarations(girChildren<Class>(this.$namespace, 'record'), at);
    this.buildFunctionDeclarations(girChildren<Function>(this.$namespace, 'function'), at);
    this.buildCallbackDeclarations(girChildren<Callback>(this.$namespace, 'callback'), at);
  }

  buildImports(imports: Set<string>, path: InjectPath = ''): void {
    imports.forEach((importName: string) => {
      let importPath = this.userConfig.importMap[_.kebabCase(importName)];
      if (!importPath) importPath = `./${_.kebabCase(importName)}`;
      this.prepend(`import * as ${importName} from '${importPath}'`, path);
      this.logger.warn(`importing '${importName}' from '${importPath}'`);
    });
  }

  buildTypeDeclarations($aliasesOrUnions: Alias[] | Union[], path: InjectPath = ''): void {
    $aliasesOrUnions.forEach(($aliasOrUnion: Alias | Union) => {
      const typeName = $aliasOrUnion['@_name'];
      const $fields = girChildren<Field>($aliasOrUnion, 'field');
      const types: GirType[] = $fields.length ? $fields : [$aliasOrUnion as unknown as GirType];
      const typeString = _.uniq(types.map((t) => this.getType(t))).join(' | ');
      this.append(`export type ${typeName} = ${typeString}`, [
        path,
        this.isModule ? 'body.body' : '',
      ]);
    });
  }

  buildEnumDeclarations($enumerations: Enumeration[], path: InjectPath = ''): void {
    $enumerations.forEach(($enumeration: Enumeration) => {
      const enumName = $enumeration['@_name'];
      const count = this.append(`export enum ${enumName} {}`, [
        path,
        this.isModule ? 'body.body' : '',
      ]);
      this.buildEnumDeclarationMembers(girChildren<Member>($enumeration, 'member'), [
        path,
        this.isModule ? 'body.body' : '',
        count - 1,
      ]);
    });
  }

  buildEnumDeclarationMembers($members: Member[], path: InjectPath = ''): void {
    $members.forEach(($member: Member) => {
      const identifierName = $member['@_c:identifier'];
      // Babel 8 wraps enum members in a TSEnumBody node; Babel 7 hung
      // `members` directly off the TSEnumDeclaration.
      this.append(
        `enum E {${identifierName}}`,
        [path, 'declaration.body.members'],
        'body.members.0',
      );
    });
  }

  buildConstantDeclarations($constants: Constant[], path: InjectPath = ''): void {
    $constants.forEach(($constant: Constant) => {
      const constantName = $constant['@_name'];
      const constantType = this.getType($constant);
      this.append(`export const ${constantName}: ${constantType};`, [
        path,
        this.isModule ? 'body.body' : '',
      ]);
    });
  }

  buildFunctionDeclarations($functions: Function[], path: InjectPath = ''): void {
    $functions.forEach(($function: Function) => {
      const returnType = this.getType($function['return-value']);
      let functionName = $function['@_name'];
      if (this.isReservedKeyword(functionName)) {
        functionName = `g_${functionName}`;
        this.renamed.functions[$function['@_name']] = functionName;
        this.logger.warn(`function '${$function['@_name']}' renamed to '${functionName}'`);
      }
      const count = this.append(`export function ${functionName}(): ${returnType}`, [
        path,
        this.isModule ? 'body.body' : '',
      ]);
      this.buildFunctionParams(girChildren<Parameter>($function.parameters, 'parameter'), [
        path,
        this.isModule ? 'body.body' : '',
        count - 1,
        'declaration.params',
      ]);
    });
  }

  buildCallbackDeclarations($callbacks: Callback[], path: InjectPath = ''): void {
    $callbacks.forEach(($callback: Callback) => {
      const returnType = this.getType($callback['return-value']);
      const callbackName = $callback['@_name'];
      const count = this.append(`export type ${callbackName} = () => ${returnType}`, [
        path,
        this.isModule ? 'body.body' : '',
      ]);
      this.buildFunctionParams(
        girChildren<Parameter>($callback.parameters, 'parameter'),
        // Babel 8 renamed TSFunctionType.parameters to params.
        [path, this.isModule ? 'body.body' : '', count - 1, 'declaration.typeAnnotation.params'],
      );
    });
  }

  buildFunctionParams($parameters: Parameter[], path: InjectPath = ''): void {
    let paramRequired = true;
    $parameters.forEach(($parameter: Parameter) => {
      let paramName = this.safeWord($parameter['@_name']);
      let paramType = this.getType($parameter);
      if (paramName === 'arguments' || paramName === 'eval') {
        paramName = `_${paramName}`;
        paramRequired = !paramRequired ? false : $parameter['@_optional'] !== '1';
      } else if (paramName === '...') {
        paramName = '...args';
        paramRequired = true;
        paramType = this.getType($parameter, { isArray: true });
      }
      if (paramType) {
        // TODO: some param types not supported
        this.append(
          `function f(${paramName}${paramRequired ? '' : '?'}: ${paramType});`,
          path,
          'params.0',
        );
      }
    });
  }

  buildInterfaceDeclarations($interfaces: Interface[], path: InjectPath = ''): void {
    $interfaces.forEach(($interface: Interface) => {
      const interfaceName = $interface['@_name'];
      const count = this.append(`export interface ${interfaceName} {}`, [
        path,
        this.isModule ? 'body.body' : '',
      ]);
      this.buildPropertyDeclarations(
        girChildren<Property>($interface, 'property'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $interface,
      );
      this.buildMethodDeclarations(
        girChildren<Method>($interface, 'method'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $interface,
      );
    });
  }

  buildClassDeclarations($classes: Class[], path: InjectPath = ''): void {
    $classes.forEach(($class: Class) => {
      let className = $class['@_name'];
      let parentClassName = $class['@_parent'];
      if (parentClassName) {
        const parentClassNameSplit = parentClassName.split('.');
        if (
          parentClassNameSplit.length > 1 &&
          parentClassNameSplit[0] !== this.$namespace['@_name']
        ) {
          this.imports.add(parentClassNameSplit[0]);
        }
      }

      if (this.isReservedKeyword(className)) {
        this.logger.warn(`parent class '${className}' renamed to 'g_${className}'`);
        className = `g_${className}`;
      }

      if (this.isReservedKeyword(parentClassName)) {
        this.logger.warn(`parent class '${parentClassName}' renamed to 'g_${parentClassName}'`);
        parentClassName = `g_${parentClassName}`;
      }

      const count = this.append(
        `export class ${className} ${parentClassName ? `extends ${parentClassName} ` : ''}{}`,
        [path, this.isModule ? 'body.body' : ''],
      );
      this.buildConstructorDeclaration(girChildren<Constructor>($class, constructorTag), [
        path,
        this.isModule ? 'body.body' : '',
        count - 1,
      ]);
      this.buildPropertyDeclarations(
        girChildren<Property>($class, 'property'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
      );
      this.buildPropertyDeclarations(
        girChildren<Property>($class, 'field'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
        true,
      );
      this.buildMethodDeclarations(
        girChildren<Method>($class, 'method'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
      );
      this.buildMethodDeclarations(
        girChildren<Method>($class, 'virtual-method'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
      );
      this.buildMethodDeclarations(
        girChildren<Function>($class, 'function'),
        [path, this.isModule ? 'body.body' : '', count - 1],
        $class,
        true,
      );
    });
  }

  /**
   * Counts how many times each identifier appears directly on a class, so
   * duplicates can be collapsed to an `any` overload.
   */
  getClassIdentifiers($class?: Class | Interface): ClassIdentifiers {
    const result: ClassIdentifiers = {};
    if (!$class) return result;
    const identifiers = [
      ...girChildren<Field>($class, 'field'),
      ...girChildren<Function>($class, 'function'),
      ...girChildren<Method>($class, 'method'),
      ...girChildren<Property>($class, 'property'),
      ...girChildren<Method>($class, 'virtual-method'),
    ].map(($member) => $member['@_name']);
    identifiers.forEach((identifier: string) => {
      result[identifier] = result[identifier] ? ++result[identifier] : 1;
    });
    return result;
  }

  /**
   * Deliberately only walks one level up. Resolving the full ancestor chain
   * reintroduces the infinite recursion this used to hit on cyclic GIR parent
   * references.
   */
  getParentClassIdentifiers($class?: Class | Interface): ClassIdentifiers {
    if (!$class) return {};
    const $parentClass = _.find(
      girChildren<Class>(this.$namespace, 'class'),
      ($namespaceClass) => $namespaceClass['@_name'] === $class['@_parent'],
    );
    if (!$parentClass) return {};
    return this.getClassIdentifiers($parentClass);
  }

  buildMethodDeclarations(
    $methods: Method[] | Function[],
    path: InjectPath = '',
    $class?: Class | Interface,
    isStatic = false,
  ): void {
    const parentClassIdentifiers = this.getParentClassIdentifiers($class);
    const classIdentifiers = this.getClassIdentifiers($class);
    $methods.forEach(($method: Method) => {
      let methodName = $method['@_name'];
      if (this.isReservedKeyword(methodName) || methodName === 'constructor') {
        methodName = `g_${methodName}`;
        if ($class) {
          if (!this.renamed.classes[$class['@_name']]) {
            this.renamed.classes[$class['@_name']] = {};
          }
          this.renamed.classes[$class['@_name']][$method['@_name']] = methodName;
        }
        this.logger.warn(
          `method '${$method['@_name']}' renamed to '${methodName}'${
            $class ? ` in class '${$class['@_name']}'` : ''
          }`,
        );
      } else if (!methodName.length) {
        this.logger.warn(`empty method name${$class ? ` in class '${$class['@_name']}'` : ''}`);
        return;
      }
      const duplicate = parentClassIdentifiers[methodName] || classIdentifiers[methodName] > 1;
      if (this.userConfig.ignoreDuplicates && duplicate) {
        this.logger.warn(
          `duplicate method '${methodName}' ignored${
            $class ? ` in class '${$class['@_name']}'` : ''
          }`,
        );
        return;
      }
      // Resolved even when unused below: getType registers cross-namespace
      // imports as a side effect.
      const returnType = this.getType($method['return-value']);
      if (duplicate) {
        this.append(
          `class Class {${isStatic ? 'static ' : ''}${methodName}(...args: any[]): any}`,
          [path, 'declaration.body.body'],
          'body.body',
        );
      } else {
        const count = this.append(
          `class Class {${isStatic ? 'static ' : ''}${methodName}(): ${returnType}}`,
          [path, 'declaration.body.body'],
          'body.body',
        );
        this.buildMethodDeclarationParams(girChildren<Parameter>($method.parameters, 'parameter'), [
          path,
          'declaration.body.body',
          count - 1,
        ]);
      }
    });
  }

  buildConstructorDeclaration($constructors: Constructor[], path: InjectPath = ''): void {
    const $constructor = $constructors[0];
    if (!$constructor?.['@_name']) return;
    const count = this.append(
      'class C {constructor()}',
      [path, 'declaration.body.body'],
      'body.body.0',
    );
    this.buildFunctionParams(girChildren<Parameter>($constructor.parameters, 'parameter'), [
      path,
      'declaration.body.body',
      count - 1,
      'params',
    ]);
  }

  buildMethodDeclarationParams($parameters: Parameter[], path: InjectPath = ''): void {
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
          `function f(${paramName}${paramRequired ? '' : '?'}: ${paramType});`,
          [path, 'params'],
          'params.0',
        );
      }
    });
  }

  buildPropertyDeclarations(
    $properties: Property[],
    path: InjectPath = '',
    $class?: Class | Interface,
    isStatic = false,
  ): void {
    const parentClassIdentifiers = this.getParentClassIdentifiers($class);
    const classIdentifiers = this.getClassIdentifiers($class);
    $properties.forEach(($property: Property) => {
      let propertyName = $property['@_name'];
      if (this.isReservedKeyword(propertyName) || propertyName === 'constructor') {
        propertyName = `g_${propertyName}`;
        if ($class) {
          if (!this.renamed.classes[$class['@_name']]) {
            this.renamed.classes[$class['@_name']] = {};
          }
          this.renamed.classes[$class['@_name']][$property['@_name']] = propertyName;
        }
        this.logger.warn(
          `property '${$property['@_name']}' renamed to '${propertyName}'${
            $class ? ` in class '${$class['@_name']}'` : ''
          }`,
        );
      }
      const duplicate = parentClassIdentifiers[propertyName] || classIdentifiers[propertyName] > 1;
      const safeName = propertyName.indexOf('-') > -1 ? `'${propertyName}'` : propertyName;
      if (this.userConfig.ignoreDuplicates && duplicate) {
        this.logger.warn(`duplicate property '${propertyName}' ignored`);
        return;
      }
      // Resolved even when unused below: getType registers cross-namespace
      // imports as a side effect.
      const resolvedType = this.getType($property);
      this.append(
        `class Class {${isStatic ? 'static ' : ''}${safeName}: ${
          duplicate ? 'any' : resolvedType
        }}`,
        [path, 'declaration.body.body'],
        'body.body.0',
      );
    });
  }

  getType(
    girType: GirType,
    options: {
      isArray?: boolean | null;
      nullable?: boolean | null;
    } = {
      isArray: null,
      nullable: null,
    },
  ): string | null {
    let { isArray, nullable } = options;
    if (typeof isArray === 'undefined') isArray = null;
    if (typeof nullable === 'undefined') nullable = null;
    const girTypeStrict = girType as GirTypeStrict;
    // TODO: some param types not supported
    let girTypeStr = '';
    let knownType: string | null = null;
    if (typeof girTypeStrict !== 'string') {
      if (girTypeStrict.array) {
        if (isArray === null) isArray = true;
        girTypeStr = (girTypeStrict.array.type?.['@_name'] ?? '').toString();
        nullable = girTypeStrict['@_nullable'] === '1' && girTypeStrict['@_optional'] !== '1';
      } else if (girTypeStrict.callback) {
        const returnType = this.getType(girTypeStrict.callback['return-value']);
        const girTypescriptGenerator = new GirTSGenerator(
          this.$namespace,
          this.userConfig,
          this.logger,
          this.moduleName,
        );
        girTypescriptGenerator.append(`type T = () => ${returnType}`, '', 'typeAnnotation');
        girTypescriptGenerator.moduleTypes = this.moduleTypes;
        girTypescriptGenerator.buildFunctionParams(
          girChildren<Parameter>(girTypeStrict.callback.parameters, 'parameter'),
          ['0', 'params'],
        );
        knownType = girTypescriptGenerator.generate();
      } else if (girTypeStrict.type) {
        girTypeStr = (girTypeStrict.type['@_name'] ?? '').toString();
        nullable = girTypeStrict['@_nullable'] === '1' && girTypeStrict['@_optional'] !== '1';
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
    let tsType: string = (
      {
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
        va_list: `any${array}`,
      } as { [key: string]: string }
    )[girTypeStr];
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
