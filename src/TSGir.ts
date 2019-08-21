import { Command, flags } from '@oclif/command';
import Gir from './Gir';

export default class TSGir extends Command {
  static description = 'generate typescript from gir';

  static flags = {
    help: flags.help({ char: 'h' }),
    output: flags.string({ char: 'o' }),
    silent: flags.boolean({ char: 's' }),
    verbose: flags.boolean(),
    version: flags.version({ char: 'v' })
  };

  static args = [{ name: 'GIR_FILE', required: true }];

  async run() {
    const { args, flags } = this.parse(TSGir);
    const girFile = args.GIR_FILE;
    const gir = new Gir();
    await gir.loadFile(girFile);
    const code = gir.generateTypescript({ info: this.log, warn: this.warn });
    if (!flags.silent) this.log(code);
  }
}
