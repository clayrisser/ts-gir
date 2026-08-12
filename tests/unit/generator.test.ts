import { beforeAll, describe, expect, it } from 'vitest';
import TSGir, { type GeneratedNamespace } from '../../src/TSGir.js';
import { assertParsesAsJavaScript, assertParsesAsTypeScript, fixturePath } from '../helpers.js';

describe('generating from the Demo fixture', () => {
  let generated: GeneratedNamespace;

  beforeAll(async () => {
    const tsGir = new TSGir({ inputs: [fixturePath], silent: true });
    [generated] = await tsGir.generateForFile(fixturePath);
  });

  it('names the output after the namespace', () => {
    expect(generated.namespace).toBe('Demo');
    expect(generated.basename).toBe('demo');
  });

  it('emits syntactically valid typescript and javascript', () => {
    expect(() => assertParsesAsTypeScript(generated.ts)).not.toThrow();
    expect(() => assertParsesAsJavaScript(generated.js)).not.toThrow();
  });

  it('declares constants, aliases and unions', () => {
    expect(generated.ts).toContain('export const MAX_ITEMS: number;');
    expect(generated.ts).toContain('export type Handle = number;');
    expect(generated.ts).toContain('export type Value = number | string;');
  });

  it('declares enums and bitfields keyed by their c identifiers', () => {
    expect(generated.ts).toContain('export enum Direction');
    expect(generated.ts).toContain('DEMO_DIRECTION_UP');
    expect(generated.ts).toContain('export enum Flags');
    expect(generated.ts).toContain('DEMO_FLAGS_BOLD');
  });

  it('declares interfaces with their properties and methods', () => {
    expect(generated.ts).toContain('export interface Playable');
    expect(generated.ts).toContain('playing: boolean;');
    expect(generated.ts).toContain('play(): boolean;');
  });

  it('carries the parent class over and imports its namespace', () => {
    expect(generated.ts).toContain("import * as GObject from './g-object';");
    expect(generated.ts).toContain('export class Widget extends GObject.Object');
  });

  it('maps gir types onto typescript types', () => {
    expect(generated.ts).toContain('label: string;');
    expect(generated.ts).toContain('get_children(): Widget[];');
    expect(generated.ts).toContain('set_label(label: string, length?: number): void;');
  });

  it('quotes property names that are not valid identifiers', () => {
    expect(generated.ts).toContain("'child-count': number;");
  });

  it('marks class-level functions static and keeps virtual methods', () => {
    expect(generated.ts).toContain('static lookup(): Widget;');
    expect(generated.ts).toContain('draw(): void;');
  });

  it('emits the constructor signature from <constructor>', () => {
    expect(generated.ts).toContain('constructor(label: string);');
  });

  it('renames identifiers that collide with reserved words', () => {
    expect(generated.ts).toContain('g_delete(): void;');
    expect(generated.ts).toContain('export function g_new(): Widget;');
    expect(generated.ts).not.toMatch(/^\s*delete\(\)/m);
  });

  it('widens methods that a parent class already declares', () => {
    expect(generated.ts).toContain('export class Button extends Widget');
    expect(generated.ts).toContain('set_label(...args: any[]): any;');
  });

  it('turns callbacks into function type aliases', () => {
    expect(generated.ts).toContain('export type Notify = (message: string) => void;');
  });

  it('aliases every renamed identifier in the javascript shim', () => {
    expect(generated.js).toContain('const Demo = imports.gi.Demo;');
    expect(generated.js).toContain('Demo.g_new = Demo.new;');
    expect(generated.js).toContain('this.g_delete = this.delete;');
    expect(generated.js).toContain('export default Demo;');
  });
});

describe('module mode', () => {
  it('wraps every declaration in a module declaration', async () => {
    const tsGir = new TSGir({
      inputs: [fixturePath],
      module: 'gi://Demo',
      silent: true,
    });
    const [generated] = await tsGir.generateForFile(fixturePath);
    expect(generated.ts).toContain("declare module 'gi://Demo'");
    expect(generated.ts).toContain('export class Widget');
    expect(() => assertParsesAsTypeScript(generated.ts)).not.toThrow();
  });
});

describe('ignoreDuplicates', () => {
  it('drops the duplicate instead of widening it', async () => {
    const tsGir = new TSGir({ inputs: [fixturePath], silent: true });
    // getUserConfig is memoised, so seeding it here overrides cosmiconfig.
    Object.assign(tsGir, {
      userConfig: { importMap: {}, ignoreDuplicates: true },
    });
    const [generated] = await tsGir.generateForFile(fixturePath);
    expect(generated.ts).toContain('export class Button extends Widget');
    expect(generated.ts).not.toContain('set_label(...args: any[]): any;');
  });
});

describe('input resolution', () => {
  it('expands wildcards in explicitly passed inputs', async () => {
    const tsGir = new TSGir({
      inputs: [fixturePath.replace('Demo-1.0.gir', '*.gir')],
      silent: true,
    });
    expect(await tsGir.resolveInputs()).toEqual([fixturePath]);
  });

  it('fails loudly when nothing matches', async () => {
    const tsGir = new TSGir({ inputs: ['/nonexistent/*.gir'], silent: true });
    await expect(tsGir.run()).rejects.toThrow(/no gir files matched/);
  });
});
