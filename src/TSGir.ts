import { Command, flags } from '@oclif/command';
import Gir from './Gir';

export default class TSGir extends Command {
  static description = 'generate typescript from gir';

  static flags = {
    help: flags.help({ char: 'h' }),
    version: flags.version({ char: 'v' })
  };

  static args = [{ name: 'GIR_FILE', required: true }];

  async run() {
    const { args } = this.parse(TSGir);
    const girFile = args.GIR_FILE;
    const gir = new Gir();
    await gir.loadFile(girFile);
    const code = gir.generateTypescript();
    console.log(code);
  }
}
