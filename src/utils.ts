/**
 * GIR is XML, so a repeated element arrives as an array, a lone element arrives
 * as a bare object, and an absent element is missing entirely. Every consumer
 * wants a list.
 *
 * The own-property check matters: `<constructor>` collides with
 * `Object.prototype.constructor`, so a plain property read would hand back the
 * `Object` function for any class that declares no constructor.
 */
export function girChildren<T>(parent: unknown, key: string): T[] {
  if (!parent || typeof parent !== 'object') return [];
  if (!Object.hasOwn(parent, key)) return [];
  const value = (parent as Record<string, unknown>)[key];
  if (value == null) return [];
  return (Array.isArray(value) ? value : [value]) as T[];
}
