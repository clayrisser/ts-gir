import fs from 'fs-extra';
import path from 'path';
import { parse } from 'fast-xml-parser';
import { Repository } from './types';

export default class Gir {
  repository: Repository;

  xml: string;

  async loadFile(girFile: string) {
    const filePath = path.resolve(process.cwd(), girFile);
    this.xml = (await fs.readFile(filePath)).toString();
    this.repository = parse(this.xml, {
      ignoreAttributes: false
    }).repository;
  }
}
