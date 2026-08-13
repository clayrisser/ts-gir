import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import type { Repository } from './types.js';

/**
 * fast-xml-parser refuses to key a parsed object by `constructor`, `prototype`
 * or `__proto__` because doing so is a prototype-pollution vector. GIR declares
 * every factory function as `<constructor>`, so those tags are renamed during
 * the parse and referenced by the safe name from then on.
 */
export const constructorTag = 'gir-constructor';

const renamedTags: Record<string, string> = {
  __proto__: 'gir-proto',
  constructor: constructorTag,
  prototype: 'gir-prototype',
};

export default class Gir {
  repository?: Repository;

  xml = '';

  load(xml: string): Repository {
    this.xml = xml;
    // GIR leans entirely on attributes, so they must survive the parse.
    // Attribute values stay unparsed strings because the generator compares
    // them against '1'.
    this.repository = new XMLParser({
      ignoreAttributes: false,
      parseAttributeValue: false,
      transformTagName: (tagName: string) => renamedTags[tagName] ?? tagName,
    }).parse(xml).repository;
    if (!this.repository) {
      throw new Error('gir document has no <repository> element');
    }
    return this.repository;
  }

  async loadFile(girFile: string): Promise<Repository> {
    const filePath = path.resolve(process.cwd(), girFile);
    return this.load(await readFile(filePath, 'utf8'));
  }
}
