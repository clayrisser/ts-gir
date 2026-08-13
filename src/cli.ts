import { readFileSync } from 'node:fs';
import { Command } from 'commander';
import TSGir, { type TSGirOptions } from './TSGir.js';

const pkg = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8')) as {
  version: string;
};

export function buildProgram(): Command {
  return new Command()
    .name('ts-gir')
    .description('generate typescript from gir')
    .version(pkg.version, '-v, --version')
    .option(
      '-i, --inputs <globs...>',
      'paths to GIR files to generate type definitions from (with wild card support)',
      ['/usr/share/gir-1.0/*.gir'],
    )
    .option('-d, --dir <dir>', 'output dir')
    .option('-o, --output <basename>', 'output basename, if not set, the namespace is used')
    .option('-m, --module <name>', 'wrap declarations in a module declaration')
    .option('-s, --silent', 'suppress all output')
    .option('--verbose', 'report every warning instead of deduplicating them');
}

export async function main(argv: string[] = process.argv): Promise<string[]> {
  const options = buildProgram().parse(argv).opts<TSGirOptions>();
  const tsGir = new TSGir(options);
  const written = await tsGir.run();
  tsGir.logger.info(`wrote ${written.length} files`);
  return written;
}

export async function run(argv: string[] = process.argv): Promise<void> {
  try {
    await main(argv);
  } catch (err: unknown) {
    console.error(err instanceof Error ? err.message : err);
    process.exitCode = 1;
  }
}
