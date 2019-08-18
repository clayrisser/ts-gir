import * as _ from 'lodash';
import generate from '@babel/generator';
import { File, Statement } from '@babel/types';
import { parse, ParserPlugin } from '@babel/parser';

export default class Generator {
  ast: File;

  plugins: ParserPlugin[] = [];

  constructor(code = '') {
    this.ast = parse(code, { plugins: this.plugins });
  }

  parse(code: string, path = ''): Statement[] {
    return _.get(
      parse(code, {
        plugins: this.plugins
      }).program,
      `body${path.length ? `[0]${path}` : ''}`
    );
  }

  generate(): string {
    return generate(this.ast, {}).code;
  }

  prepend(code: string, injectPath = '', parsePath?: string): void {
    _.set(this.ast.program, `body${injectPath}`, [
      ...this.parse(code, parsePath),
      ..._.get(this.ast.program, `body${injectPath}`)
    ]);
  }

  append(code: string, injectPath = '', parsePath?: string): void {
    _.set(this.ast.program, `body${injectPath}`, [
      ..._.get(this.ast.program, `body${injectPath}`),
      ...this.parse(code, parsePath)
    ]);
  }
}
