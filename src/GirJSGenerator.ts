import type { ParserOptions } from '@babel/parser';
import BabelParserGenerator, { type InjectPath } from './BabelParserGenerator.js';
import type { Namespace, Renamed } from './types.js';

/**
 * Emits the runtime shim that pairs with the generated declarations: it
 * re-exports the real GJS namespace and aliases every identifier the TypeScript
 * generator had to rename away from a reserved word.
 */
export default class GirJSGenerator extends BabelParserGenerator {
  options: ParserOptions = {
    plugins: ['jsx'],
    sourceType: 'module',
  };

  constructor(
    public $namespace: Namespace,
    public renamed: Renamed,
  ) {
    super();
  }

  build() {
    const namespaceName = this.$namespace['@_name'];
    this.append(`const ${namespaceName} = imports.gi.${namespaceName}`);
    this.buildClasses();
    this.buildFunctions();
    this.append(`export default ${namespaceName}`);
  }

  buildFunctions(path: InjectPath = ''): void {
    const namespaceName = this.$namespace['@_name'];
    Object.entries(this.renamed.functions).forEach(
      ([fromFunction, toFunction]: [string, string]) => {
        this.append(`${namespaceName}.${toFunction} = ${namespaceName}.${fromFunction}`, path);
      },
    );
  }

  buildClasses(path: InjectPath = ''): void {
    const namespaceName = this.$namespace['@_name'];
    Object.entries(this.renamed.classes).forEach(
      ([className, properties]: [string, { [key: string]: string }]) => {
        const count = this.append(
          `
const ${namespaceName}${className} = ${namespaceName}.${className};
${namespaceName}.${className} = class ${className} extends ${namespaceName}${className} {
  constructor(...props) {
    super(...props);
  }
};`,
          path,
        );
        this.buildPropertyDeclarations(properties, [
          path,
          (count - 1).toString(),
          'expression.right.body.body.0.body.body',
        ]);
      },
    );
  }

  buildPropertyDeclarations(properties: { [key: string]: string }, path: InjectPath = ''): void {
    Object.entries(properties).forEach(([fromProperty, toProperty]: [string, string]) => {
      this.append(
        `class C {constructor() {this.${
          toProperty.indexOf('-') > -1 ? `'${toProperty}'` : toProperty
        } = this.${fromProperty.indexOf('-') > -1 ? `'${fromProperty}'` : fromProperty}}}`,
        path,
        'body.body.0.body.body',
      );
    });
  }
}
