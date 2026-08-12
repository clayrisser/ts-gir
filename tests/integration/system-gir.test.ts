import { readdir } from 'node:fs/promises';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import TSGir from '../../src/TSGir.js';
import { assertParsesAsJavaScript, assertParsesAsTypeScript, systemGirDir } from '../helpers.js';

const girDir = systemGirDir();

// Nothing to integrate against on a host without gobject-introspection data.
// Install `gobject-introspection` (brew) or `libgirepository1.0-dev` (apt).
describe.skipIf(!girDir)('generating from system gir files', () => {
  it('emits valid typescript for every installed namespace', async () => {
    const girFiles = (await readdir(girDir as string))
      .filter((file) => file.endsWith('.gir'))
      .map((file) => path.join(girDir as string, file));
    expect(girFiles.length).toBeGreaterThan(0);

    const tsGir = new TSGir({ inputs: girFiles, silent: true });
    let namespaces = 0;
    for (const girFile of girFiles) {
      for (const generated of await tsGir.generateForFile(girFile)) {
        expect(
          generated.ts.length,
          `${generated.namespace} produced no typescript`,
        ).toBeGreaterThan(0);
        expect(() => assertParsesAsTypeScript(generated.ts)).not.toThrow();
        expect(() => assertParsesAsJavaScript(generated.js)).not.toThrow();
        namespaces += 1;
      }
    }
    expect(namespaces).toBeGreaterThan(0);
  }, 120_000);

  it('produces a substantial surface for a real toolkit namespace', async () => {
    const girFiles = (await readdir(girDir as string)).filter((file) => /^Gtk-\d/.test(file));
    if (!girFiles.length) return;
    const tsGir = new TSGir({ inputs: [], silent: true });
    const [generated] = await tsGir.generateForFile(path.join(girDir as string, girFiles[0]));
    expect(generated.namespace).toBe('Gtk');
    expect(generated.ts).toContain('export class Widget');
    expect(generated.ts.split('\n').length).toBeGreaterThan(1000);
  }, 120_000);
});
