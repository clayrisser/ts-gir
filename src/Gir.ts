import Err from 'err';
import GirGenerator from './GirGenerator';
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

  generateTypescript(): string {
    if (!this.repository) throw new Err('xml not loaded');
    const girGenerator = new GirGenerator(this.repository);
    girGenerator.build();
    return girGenerator.generate();
  }
}
