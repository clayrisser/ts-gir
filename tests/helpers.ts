import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { parse } from '@babel/parser';

export const fixturePath = fileURLToPath(new URL('./fixtures/Demo-1.0.gir', import.meta.url));

/** Directories shipping system GIR data, in the order we prefer them. */
const girSearchPaths = [
  '/usr/share/gir-1.0',
  '/opt/homebrew/share/gir-1.0',
  '/usr/local/share/gir-1.0',
];

export function systemGirDir(): string | undefined {
  return girSearchPaths.find((dir) => existsSync(dir));
}

/**
 * Reparses generated output to prove it is syntactically valid TypeScript.
 * Throws with Babel's diagnostic if it is not.
 */
export function assertParsesAsTypeScript(code: string): void {
  parse(code, {
    plugins: ['jsx', ['typescript', { dts: true }]],
    sourceType: 'module',
  });
}

export function assertParsesAsJavaScript(code: string): void {
  parse(code, { plugins: ['jsx'], sourceType: 'module' });
}
