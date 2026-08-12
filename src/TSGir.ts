import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { cosmiconfig } from 'cosmiconfig';
import { glob } from 'glob';
import _ from 'lodash';
import Gir from './Gir.js';
import GirJSGenerator from './GirJSGenerator.js';
import GirTSGenerator from './GirTSGenerator.js';
import type { Logger, Namespace, UserConfig } from './types.js';
import { girChildren } from './utils.js';

export interface TSGirOptions {
  dir?: string;
  inputs: string[];
  module?: string;
  output?: string;
  silent?: boolean;
  verbose?: boolean;
}

export interface GeneratedNamespace {
  basename: string;
  js: string;
  namespace: string;
  ts: string;
}

export default class TSGir {
  logger: Logger;

  warnings: Set<string> = new Set();

  private userConfig?: UserConfig;

  constructor(public options: TSGirOptions) {
    this.logger = {
      info: (message?: string, ...args: unknown[]) => {
        if (this.options.silent) return;
        console.log(message, ...args);
      },
      warn: (input: string | Error) => {
        if (this.options.silent) return;
        if (typeof input === 'string' && !this.options.verbose) {
          if (this.warnings.has(input)) return;
          this.warnings.add(input);
        }
        console.warn(`warning: ${input instanceof Error ? input.message : input}`);
      },
    };
  }

  async getUserConfig(): Promise<UserConfig> {
    if (this.userConfig) return this.userConfig;
    const result = await cosmiconfig('tsgir').search(process.cwd());
    const userConfig: UserConfig = {
      importMap: {},
      ignoreDuplicates: false,
      ...result?.config,
    };
    this.userConfig = userConfig;
    return userConfig;
  }

  /**
   * Every input is treated as a glob. The original only expanded wildcards for
   * the built-in default, so an explicit `-i '/usr/share/gir-1.0/*.gir'` was
   * passed through to the file reader verbatim and always failed.
   */
  async resolveInputs(): Promise<string[]> {
    const matches = await glob(this.options.inputs, { nodir: true });
    return _.uniq(matches).toSorted();
  }

  async generateForFile(girFile: string): Promise<GeneratedNamespace[]> {
    const gir = new Gir();
    const repository = await gir.loadFile(girFile);
    const userConfig = await this.getUserConfig();
    const moduleName = this.options.module || userConfig.moduleName;
    return girChildren<Namespace>(repository, 'namespace').map(($namespace: Namespace) => {
      const namespaceName = $namespace['@_name'];
      const girTSGenerator = new GirTSGenerator($namespace, userConfig, this.logger, moduleName);
      girTSGenerator.build();
      const girJSGenerator = new GirJSGenerator($namespace, girTSGenerator.renamed);
      girJSGenerator.build();
      return {
        basename: this.options.output || userConfig.output || _.kebabCase(namespaceName),
        js: girJSGenerator.generate(),
        namespace: namespaceName,
        ts: girTSGenerator.generate(),
      };
    });
  }

  async run(): Promise<string[]> {
    const inputFiles = await this.resolveInputs();
    if (!inputFiles.length) {
      throw new Error(`no gir files matched ${this.options.inputs.join(', ')}`);
    }
    const userConfig = await this.getUserConfig();
    const outDir = path.resolve(process.cwd(), this.options.dir || userConfig.dir || '');
    await mkdir(outDir, { recursive: true });
    const written: string[] = [];
    for (const girFile of inputFiles) {
      this.logger.info(`generating from ${girFile}`);
      for (const generated of await this.generateForFile(girFile)) {
        const target = path.join(outDir, generated.basename);
        await writeFile(`${target}.d.ts`, `${generated.ts}\n`);
        await writeFile(`${target}.js`, `${generated.js}\n`);
        written.push(`${target}.d.ts`, `${target}.js`);
      }
    }
    return written;
  }
}
