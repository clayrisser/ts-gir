import fs from 'fs-extra';
import path from 'path';
import { Command, flags } from '@oclif/command';
import Gir from './Gir';

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

  async run() {
    const { args, flags } = this.parse(TSGir);
    const girFile = args.GIR_FILE;
    const gir = new Gir();
    await gir.loadFile(girFile);
    const code = gir.generateTypescript(
      {
        info: this.log,
        warn: this.handleWarn.bind(this)
      },
      flags.module
    );
    if (flags.output) {
      await fs.writeFile(path.resolve(process.cwd(), flags.output), code);
    } else if (!flags.silent) this.log(code);
  }

  handleWarn(input: string | Error): void {
    if (typeof input === 'string') {
      if (this.warnings.has(input)) return;
      this.warnings.add(input);
    }
    this.warn(input);
  }
}
