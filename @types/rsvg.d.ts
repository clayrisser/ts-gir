import * as GLib from './g-lib';
import * as GObject from './g-object';
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION: string;
export enum Error {
  RSVG_ERROR_FAILED
}
export enum HandleFlags {
  RSVG_HANDLE_FLAGS_NONE,
  RSVG_HANDLE_FLAG_UNLIMITED,
  RSVG_HANDLE_FLAG_KEEP_IMAGE_DATA
}
export class DimensionData {
  static width: number;
  static height: number;
  static em: number;
  static ex: number;
}
export class HandleClass {
  static parent: GObject.ObjectClass;
  static _abi_padding: object[];
}
export class HandlePrivate {}
export class PositionData {
  static x: number;
  static y: number;
}
export function cleanup(): void;
export function error_quark(): GLib.Quark;
export function set_default_dpi(dpi: number): void;
export function set_default_dpi_x_y(dpi_x: number, dpi_y: number): void;
