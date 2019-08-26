import Err from 'err';
import _ from 'lodash';
import cosmiconfig from 'cosmiconfig';
import fs from 'fs-extra';
import path from 'path';
import pkgDir from 'pkg-dir';
import { Command, flags } from '@oclif/command';
import { mapSeries } from 'bluebird';
import { oc } from 'ts-optchain.macro';
import Gir from './Gir';
import GirJSGenerator from './GirJSGenerator';
import GirTSGenerator from './GirTSGenerator';
import { Namespace, UserConfig } from './types';

const rootPath = pkgDir.sync(process.cwd()) || process.cwd();

export default class TSGir extends Command {
  static description = 'generate typescript from gir';

  static flags = {
    help: flags.help({ char: 'h' }),
    module: flags.string({ char: 'm' }),
    output: flags.string({ char: 'o' }),
    silent: flags.boolean({ char: 's' }),
    verbose: flags.boolean(),
    version: flags.version({ char: 'v' })
  };

  static args = [{ name: 'GIR_FILE', required: true }];

  warnings: Set<string> = new Set();

  get userConfig(): UserConfig {
    const userConfig: Partial<UserConfig> = oc(
      cosmiconfig('tsgir').searchSync(rootPath)
    ).config({});
    return {
      importMap: {},
      ignoreDuplicates: false,
      ...userConfig
    };
  }

  async run() {
    const { args, flags } = this.parse(TSGir);
    const girFile = args.GIR_FILE;
    const gir = new Gir();
    await gir.loadFile(girFile);
    if (!gir.repository) throw new Err('xml not loaded');
    let $namespaces = gir.repository.namespace;
    if (!Array.isArray($namespaces)) $namespaces = [$namespaces];
    await mapSeries($namespaces, async ($namespace: Namespace) => {
      const namespaceName = $namespace['@_name'];
      const girTSGenerator = new GirTSGenerator(
        $namespace,
        this.userConfig,
        {
          info: this.log,
          warn: this.handleWarn.bind(this)
        },
        flags.module || this.userConfig.moduleName
      );
      girTSGenerator.build();
      const girJSGenerator = new GirJSGenerator(
        $namespace,
        girTSGenerator.renamed
      );
      girJSGenerator.build();
      const tsCode = girTSGenerator.generate();
      const jsCode = girJSGenerator.generate();
      await fs.writeFile(
        path.resolve(
          process.cwd(),
          `${flags.output ||
            this.userConfig.output ||
            _.kebabCase(namespaceName)}.d.ts`
        ),
        tsCode
      );
      await fs.writeFile(
        path.resolve(
          process.cwd(),
          `${flags.output ||
            this.userConfig.output ||
            _.kebabCase(namespaceName)}.js`
        ),
        jsCode
      );
    });
  }

  handleWarn(input: string | Error): void {
    if (typeof input === 'string') {
      if (this.warnings.has(input)) return;
      this.warnings.add(input);
    }
    this.warn(input);
  }
}
