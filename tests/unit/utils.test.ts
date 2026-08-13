import { describe, expect, it } from 'vitest';
import { girChildren } from '../../src/utils.js';

describe('girChildren', () => {
  it('returns an empty list for absent keys', () => {
    expect(girChildren({}, 'method')).toEqual([]);
    expect(girChildren(undefined, 'method')).toEqual([]);
    expect(girChildren('not an object', 'method')).toEqual([]);
  });

  it('wraps a lone child, because xml collapses single elements', () => {
    expect(girChildren({ method: { '@_name': 'run' } }, 'method')).toEqual([{ '@_name': 'run' }]);
  });

  it('passes repeated children through untouched', () => {
    const methods = [{ '@_name': 'a' }, { '@_name': 'b' }];
    expect(girChildren({ method: methods }, 'method')).toEqual(methods);
  });

  it('ignores inherited keys so <constructor> cannot resolve to Object', () => {
    expect(girChildren({}, 'constructor')).toEqual([]);
    expect(girChildren({}, 'toString')).toEqual([]);
  });
});
