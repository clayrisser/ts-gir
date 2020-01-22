import * as GLib from './g-lib';
import * as Pango from './pango';
import * as cairo from './cairo';
export interface Font {
  get_scaled_font(): cairo.ScaledFont | null;
}
export interface FontMap {
  create_context(): Pango.Context;
  get_font_type(): cairo.FontType;
  get_resolution(): number;
  set_default(): void;
  set_resolution(dpi: number): void;
}
export function context_get_font_options(context: Pango.Context): cairo.FontOptions | null;
export function context_get_resolution(context: Pango.Context): number;
export function context_get_shape_renderer(context: Pango.Context, data: object | null): ShapeRendererFunc | null;
export function context_set_font_options(context: Pango.Context, options: cairo.FontOptions | null): void;
export function context_set_resolution(context: Pango.Context, dpi: number): void;
export function context_set_shape_renderer(context: Pango.Context, func: ShapeRendererFunc | null, data: object | null, dnotify: GLib.DestroyNotify): void;
export function create_context(cr: cairo.Context): Pango.Context;
export function create_layout(cr: cairo.Context): Pango.Layout;
export function error_underline_path(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function font_map_get_default(): Pango.FontMap;
export function font_map_new(): Pango.FontMap;
export function font_map_new_for_font_type(fonttype: cairo.FontType): Pango.FontMap | null;
export function glyph_string_path(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void;
export function layout_line_path(cr: cairo.Context, line: Pango.LayoutLine): void;
export function layout_path(cr: cairo.Context, layout: Pango.Layout): void;
export function show_error_underline(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function show_glyph_item(cr: cairo.Context, text: string, glyph_item: Pango.GlyphItem): void;
export function show_glyph_string(cr: cairo.Context, font: Pango.Font, glyphs: Pango.GlyphString): void;
export function show_layout(cr: cairo.Context, layout: Pango.Layout): void;
export function show_layout_line(cr: cairo.Context, line: Pango.LayoutLine): void;
export function update_context(cr: cairo.Context, context: Pango.Context): void;
export function update_layout(cr: cairo.Context, layout: Pango.Layout): void;