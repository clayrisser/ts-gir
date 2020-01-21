import Err from 'err';
import _ from 'lodash';
import cosmiconfig from 'cosmiconfig';
import util from 'util';
import fs from 'fs-extra';
import globCb from 'glob';
import Path from 'path';
import pkgDir from 'pkg-dir';
import { Command, flags } from '@oclif/command';
import { mapSeries } from 'bluebird';
// Needs babel
import { oc } from 'ts-optchain.macro';
import Gir from './Gir';
import GirJSGenerator from './GirJSGenerator';
import GirTSGenerator from './GirTSGenerator';
import { Namespace, UserConfig } from './types';

const glob = util.promisify(globCb);

const rootPath = pkgDir.sync(process.cwd()) || process.cwd();

export default class TSGir extends Command {
  static description = 'generate typescript from gir';

  static flags = {
    help: flags.help({ char: 'h' }),
    module: flags.string({ char: 'm' }),
    output: flags.string({ char: 'o' }),
    dir: flags.string({ char: 'd' }),
    silent: flags.boolean({ char: 's' }),
    verbose: flags.boolean(),
    version: flags.version({ char: 'v' }),
    inputs: flags.string({
      char: 'i',
      multiple: true,
      required: true,
      default: '/usr/share/gir-1.0/*.gir'
    })
  };

  // static args = [{ name: 'GIR_FILES', required: true, parse: (input: string) => {
  //   console.log('input');
  //   return input;
  // } }];

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

  async runForFile(girFile: string) {
    const { flags } = this.parse(TSGir);
    const gir = new Gir();
    await gir.loadFile(girFile);
    if (!gir.repository) throw new Err('xml not loaded');
    let $namespaces = gir.repository.namespace;
    if (!Array.isArray($namespaces)) $namespaces = [$namespaces];
    await mapSeries($namespaces, async ($namespace: Namespace) => {
      const namespaceName = $namespace['@_name'];
      const moduleName = flags.module || this.userConfig.moduleName;
      const basename =
        flags.output || this.userConfig.output || _.kebabCase(namespaceName);
      const dir = flags.dir || this.userConfig.dir || '';
      const path = Path.resolve(process.cwd(), dir, basename);
      const girTSGenerator = new GirTSGenerator(
        $namespace,
        this.userConfig,
        {
          info: this.log,
          warn: this.handleWarn.bind(this)
        },
        moduleName
      );
      girTSGenerator.build();

      const girJSGenerator = new GirJSGenerator(
        $namespace,
        girTSGenerator.renamed
      );
      girJSGenerator.build();
      const tsCode = girTSGenerator.generate();
      const jsCode = girJSGenerator.generate();
      await fs.writeFile(`${path}.d.ts`, tsCode);
      await fs.writeFile(`${path}.js`, jsCode);
    });
  }

  async run() {
    const { flags } = this.parse(TSGir);
    let inputFiles = [];
    if (Array.isArray(flags.inputs)) {
      inputFiles = flags.inputs;
    } else {
      inputFiles = await glob(flags.inputs);
    }
    for (let i = 0; i < inputFiles.length; i++) {
      if (inputFiles[i]) {
        await this.runForFile(inputFiles[i]);
      }
    }
  }

  handleWarn(input: string | Error): void {
    if (typeof input === 'string') {
      if (this.warnings.has(input)) return;
      this.warnings.add(input);
    }
    this.warn(input);
  }
}
