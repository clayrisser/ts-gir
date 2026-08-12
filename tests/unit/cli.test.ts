import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { buildProgram, main, run } from '../../src/cli.js';
import { assertParsesAsTypeScript, fixturePath } from '../helpers.js';

describe('buildProgram', () => {
  it('defaults to the system gir directory', () => {
    expect(buildProgram().parse(['node', 'ts-gir']).opts().inputs).toEqual([
      '/usr/share/gir-1.0/*.gir',
    ]);
  });

  it('accepts several inputs after a single flag', () => {
    const opts = buildProgram()
      .parse(['node', 'ts-gir', '-i', 'a.gir', 'b.gir', '-d', 'out', '-s'])
      .opts();
    expect(opts.inputs).toEqual(['a.gir', 'b.gir']);
    expect(opts.dir).toBe('out');
    expect(opts.silent).toBe(true);
  });
});

describe('main', () => {
  let outDir: string;

  beforeEach(async () => {
    outDir = await mkdtemp(path.join(tmpdir(), 'ts-gir-'));
  });

  afterEach(async () => {
    await rm(outDir, { force: true, recursive: true });
  });

  it('writes a declaration file and a runtime shim per namespace', async () => {
    const written = await main(['node', 'ts-gir', '-s', '-i', fixturePath, '-d', outDir]);
    expect(written).toEqual([path.join(outDir, 'demo.d.ts'), path.join(outDir, 'demo.js')]);
    const declarations = await readFile(written[0], 'utf8');
    expect(() => assertParsesAsTypeScript(declarations)).not.toThrow();
    expect(declarations.endsWith('\n')).toBe(true);
  });

  it('honours an explicit output basename', async () => {
    const written = await main([
      'node',
      'ts-gir',
      '-s',
      '-i',
      fixturePath,
      '-d',
      outDir,
      '-o',
      'custom',
    ]);
    expect(written[0]).toBe(path.join(outDir, 'custom.d.ts'));
  });

  it('creates the output directory when it is missing', async () => {
    const nested = path.join(outDir, 'deeply', 'nested');
    const written = await main(['node', 'ts-gir', '-s', '-i', fixturePath, '-d', nested]);
    expect(written[0]).toBe(path.join(nested, 'demo.d.ts'));
  });
});

describe('run', () => {
  afterEach(() => {
    process.exitCode = undefined;
    vi.restoreAllMocks();
  });

  it('reports the failure and sets a non-zero exit code', async () => {
    const error = vi.spyOn(console, 'error').mockImplementation(() => {});
    await run(['node', 'ts-gir', '-s', '-i', '/nonexistent/*.gir']);
    expect(process.exitCode).toBe(1);
    expect(error).toHaveBeenCalledWith(expect.stringContaining('no gir files matched'));
  });
});
