import { readFile } from 'node:fs/promises';
import { describe, expect, it } from 'vitest';
import Gir, { constructorTag } from '../../src/Gir.js';
import type { Class, Namespace } from '../../src/types.js';
import { girChildren } from '../../src/utils.js';
import { fixturePath } from '../helpers.js';

describe('Gir', () => {
  it('parses a gir file into a repository', async () => {
    const gir = new Gir();
    const repository = await gir.loadFile(fixturePath);
    const [$namespace] = girChildren<Namespace>(repository, 'namespace');
    expect($namespace['@_name']).toBe('Demo');
    expect($namespace['@_version']).toBe('1.0');
  });

  it('keeps attribute values as strings so "1" flags stay comparable', async () => {
    const repository = await new Gir().loadFile(fixturePath);
    const [$namespace] = girChildren<Namespace>(repository, 'namespace');
    const $widget = girChildren<Class>($namespace, 'class')[0];
    expect($widget['@_name']).toBe('Widget');
    expect($widget['@_parent']).toBe('GObject.Object');
  });

  it('renames <constructor> so the parser accepts it', async () => {
    const repository = await new Gir().loadFile(fixturePath);
    const [$namespace] = girChildren<Namespace>(repository, 'namespace');
    const $widget = girChildren<Class>($namespace, 'class')[0];
    const $constructors = girChildren<{ '@_name': string }>($widget, constructorTag);
    expect($constructors).toHaveLength(1);
    expect($constructors[0]['@_name']).toBe('new');
  });

  it('rejects xml with no repository element', () => {
    expect(() => new Gir().load('<?xml version="1.0"?><other/>')).toThrow(
      /no <repository> element/,
    );
  });

  it('exposes the raw xml it loaded', async () => {
    const gir = new Gir();
    await gir.loadFile(fixturePath);
    expect(gir.xml).toBe(await readFile(fixturePath, 'utf8'));
  });
});
