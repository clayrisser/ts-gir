export enum ModuleFlags {
  G_MODULE_BIND_LAZY,
  G_MODULE_BIND_LOCAL,
  G_MODULE_BIND_MASK
}
export function module_build_path(
  directory: string | null,
  module_name: string
): string;
export function module_error(): string;
export function module_supported(): boolean;
export type ModuleCheckInit = (module: Module) => string;
export type ModuleUnload = (module: Module) => void;
