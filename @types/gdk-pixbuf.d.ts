import * as Gio from './gio';
import * as GLib from './g-lib';
import * as GObject from './g-object';
export const PIXBUF_FEATURES_H: number;
export const PIXBUF_MAJOR: number;
export const PIXBUF_MICRO: number;
export const PIXBUF_MINOR: number;
export const PIXBUF_VERSION: string;
export enum Colorspace {
  GDK_COLORSPACE_RGB,
}
export enum InterpType {
  GDK_INTERP_NEAREST,
  GDK_INTERP_TILES,
  GDK_INTERP_BILINEAR,
  GDK_INTERP_HYPER,
}
export enum PixbufAlphaMode {
  GDK_PIXBUF_ALPHA_BILEVEL,
  GDK_PIXBUF_ALPHA_FULL,
}
export enum PixbufError {
  GDK_PIXBUF_ERROR_CORRUPT_IMAGE,
  GDK_PIXBUF_ERROR_INSUFFICIENT_MEMORY,
  GDK_PIXBUF_ERROR_BAD_OPTION,
  GDK_PIXBUF_ERROR_UNKNOWN_TYPE,
  GDK_PIXBUF_ERROR_UNSUPPORTED_OPERATION,
  GDK_PIXBUF_ERROR_FAILED,
  GDK_PIXBUF_ERROR_INCOMPLETE_ANIMATION,
}
export enum PixbufRotation {
  GDK_PIXBUF_ROTATE_NONE,
  GDK_PIXBUF_ROTATE_COUNTERCLOCKWISE,
  GDK_PIXBUF_ROTATE_UPSIDEDOWN,
  GDK_PIXBUF_ROTATE_CLOCKWISE,
}
export class Pixbuf extends GObject.Object {
  constructor(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number);
  'bits-per-sample': number;
  colorspace: Colorspace;
  'has-alpha': boolean;
  height: number;
  'n-channels': number;
  'pixel-bytes': GLib.Bytes;
  pixels: object;
  rowstride: number;
  width: number;
  add_alpha(substitute_color: boolean, r: number, g: number, b: number): Pixbuf;
  apply_embedded_orientation(): Pixbuf;
  composite(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number): void;
  composite_color(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType, overall_alpha: number, check_x: number, check_y: number, check_size: number, color1: number, color2: number): void;
  composite_color_simple(dest_width: number, dest_height: number, interp_type: InterpType, overall_alpha: number, check_size: number, color1: number, color2: number): Pixbuf | null;
  copy(): Pixbuf | null;
  copy_area(src_x: number, src_y: number, width: number, height: number, dest_pixbuf: Pixbuf, dest_x: number, dest_y: number): void;
  copy_options(dest_pixbuf: Pixbuf): boolean;
  fill(pixel: number): void;
  flip(horizontal: boolean): Pixbuf | null;
  get_bits_per_sample(): number;
  get_byte_length(): number;
  get_colorspace(): Colorspace;
  get_has_alpha(): boolean;
  get_height(): number;
  get_n_channels(): number;
  get_option(key: string): string;
  get_options(): GLib.HashTable;
  get_pixels(): number[];
  get_pixels_with_length(length: number): number[];
  get_rowstride(): number;
  get_width(): number;
  new_subpixbuf(src_x: number, src_y: number, width: number, height: number): Pixbuf;
  read_pixel_bytes(): GLib.Bytes;
  read_pixels(): number;
  ref(): Pixbuf;
  remove_option(key: string): boolean;
  rotate_simple(angle: PixbufRotation): Pixbuf | null;
  saturate_and_pixelate(dest: Pixbuf, saturation: number, pixelate: boolean): void;
  save(filename: any, type: string, error: GLib.Error | null, ...args: any[]): boolean;
  save_to_buffer(buffer: number[], buffer_size: number, type: string, error: GLib.Error | null, ...args: any[]): boolean;
  save_to_bufferv(buffer: number[], buffer_size: number, type: string, option_keys: string[], option_values: string[]): boolean;
  save_to_callback(save_func: PixbufSaveFunc, user_data: object | null, type: string, error: GLib.Error | null, ...args: any[]): boolean;
  save_to_callbackv(save_func: PixbufSaveFunc, user_data: object | null, type: string, option_keys: string[], option_values: string[]): boolean;
  save_to_stream(stream: Gio.OutputStream, type: string, cancellable: Gio.Cancellable | null, error: GLib.Error | null, ...args: any[]): boolean;
  save_to_stream_async(stream: Gio.OutputStream, type: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null, ...args: any[]): void;
  save_to_streamv(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable: Gio.Cancellable | null): boolean;
  save_to_streamv_async(stream: Gio.OutputStream, type: string, option_keys: string[], option_values: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  savev(filename: any, type: string, option_keys: string[], option_values: string[]): boolean;
  scale(dest: Pixbuf, dest_x: number, dest_y: number, dest_width: number, dest_height: number, offset_x: number, offset_y: number, scale_x: number, scale_y: number, interp_type: InterpType): void;
  scale_simple(dest_width: number, dest_height: number, interp_type: InterpType): Pixbuf | null;
  set_option(key: string, value: string): boolean;
  unref(): void;
  static calculate_rowstride(colorspace: Colorspace, has_alpha: boolean, bits_per_sample: number, width: number, height: number): number;
  static get_file_info(filename: any, width?: number, height?: number): PixbufFormat | null;
  static get_file_info_async(filename: any, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  static get_file_info_finish(async_result: Gio.AsyncResult, width: number, height: number): PixbufFormat;
  static get_formats(): GLib.SList;
  static init_modules(path: string): boolean;
  static new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  static new_from_stream_at_scale_async(stream: Gio.InputStream, width: number, height: number, preserve_aspect_ratio: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  static save_to_stream_finish(async_result: Gio.AsyncResult): boolean;
}
export class PixbufAnimation extends GObject.Object {
  constructor(filename: any);
  get_height(): number;
  get_iter(start_time: GLib.TimeVal | null): PixbufAnimationIter;
  get_static_image(): Pixbuf;
  get_width(): number;
  is_static_image(): boolean;
  ref(): PixbufAnimation;
  unref(): void;
  static new_from_stream_async(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
}
export class PixbufAnimationIter extends GObject.Object {
  advance(current_time: GLib.TimeVal | null): boolean;
  get_delay_time(): number;
  get_pixbuf(): Pixbuf;
  on_currently_loading_frame(): boolean;
}
export class PixbufLoader extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: object;
  close(): boolean;
  get_animation(): PixbufAnimation;
  get_format(): PixbufFormat | null;
  get_pixbuf(): Pixbuf;
  set_size(width: number, height: number): void;
  write(buf: number[], count: number): boolean;
  write_bytes(buffer: GLib.Bytes): boolean;
  area_prepared(): void;
  area_updated(x: number, y: number, width: number, height: number): void;
  closed(): void;
  size_prepared(width: number, height: number): void;
}
export class PixbufSimpleAnim extends PixbufAnimation {
  constructor(width: number, height: number, rate: number);
  loop: boolean;
  add_frame(pixbuf: Pixbuf): void;
  get_loop(): boolean;
  set_loop(loop: boolean): void;
}
export class PixbufSimpleAnimIter extends PixbufAnimationIter {}
export class PixbufFormat {
  copy(): PixbufFormat;
  free(): void;
  get_description(): string;
  get_extensions(): string[];
  get_license(): string;
  get_mime_types(): string[];
  get_name(): string;
  is_disabled(): boolean;
  is_save_option_supported(option_key: string): boolean;
  is_scalable(): boolean;
  is_writable(): boolean;
  set_disabled(disabled: boolean): void;
}
export class PixbufLoaderClass {
  static parent_class: GObject.ObjectClass;
  static size_prepared: (loader: PixbufLoader, width: number, height: number) => void;
  static area_prepared: (loader: PixbufLoader) => void;
  static area_updated: (loader: PixbufLoader, x: number, y: number, width: number, height: number) => void;
  static closed: (loader: PixbufLoader) => void;
}
export class PixbufSimpleAnimClass {}
export function pixbuf_error_quark(): GLib.Quark;
export type PixbufDestroyNotify = (pixels: number[], data: object | null) => void;
export type PixbufSaveFunc = (buf: number[], count: number, error: GLib.Error, data: object | null) => boolean;