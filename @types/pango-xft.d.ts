import * as GLib from './g-lib';
import * as freetype2 from './freetype-2';
import * as xft from './xft';
import * as xlib from './xlib';
import * as Pango from './pango';
export class Font extends Pango.Font {
  static get_display(font: Pango.Font): xlib.Display;
  static get_font(font: Pango.Font | null): xft.Font | null;
  static get_glyph(font: Pango.Font, wc: number): number;
  static get_unknown_glyph(font: Pango.Font, wc: number): Pango.Glyph;
  static has_char(font: Pango.Font, wc: number): boolean;
  static lock_face(font: Pango.Font): freetype2.Face;
  static unlock_face(font: Pango.Font): void;
}
export class FontMap extends Pango.FontMap {}
export class Renderer extends Pango.Renderer {
  constructor(display: xlib.Display, screen: number);
  display: any;
  screen: any;
  static parent_instance: Pango.Renderer;
  static display: any;
  static screen: any;
  static draw: xft.Draw;
  static priv: RendererPrivate;
  set_default_color(default_color: Pango.Color): void;
  set_draw(draw: xft.Draw): void;
  composite_glyphs(
    xft_font: xft.Font,
    glyphs: xft.GlyphSpec,
    n_glyphs: number
  ): void;
  composite_trapezoids(
    part: Pango.RenderPart,
    trapezoids: xlib.XTrapezoid,
    n_trapezoids: number
  ): void;
}
export class RendererClass {
  static parent_class: Pango.RendererClass;
  static composite_trapezoids: (
    xftrenderer: Renderer,
    part: Pango.RenderPart,
    trapezoids: xlib.XTrapezoid,
    n_trapezoids: number
  ) => void;
  static composite_glyphs: (
    xftrenderer: Renderer,
    xft_font: xft.Font,
    glyphs: xft.GlyphSpec,
    n_glyphs: number
  ) => void;
}
export class RendererPrivate {}
export function get_context(
  display: xlib.Display,
  screen: number
): Pango.Context;
export function get_font_map(
  display: xlib.Display,
  screen: number
): Pango.FontMap;
export function picture_render(
  display: xlib.Display,
  src_picture: xlib.Picture,
  dest_picture: xlib.Picture,
  font: Pango.Font,
  glyphs: Pango.GlyphString,
  x: number,
  y: number
): void;
export function render(
  draw: xft.Draw,
  color: xft.Color,
  font: Pango.Font,
  glyphs: Pango.GlyphString,
  x: number,
  y: number
): void;
export function render_layout(
  draw: xft.Draw,
  color: xft.Color,
  layout: Pango.Layout,
  x: number,
  y: number
): void;
export function render_layout_line(
  draw: xft.Draw,
  color: xft.Color,
  line: Pango.LayoutLine,
  x: number,
  y: number
): void;
export function render_transformed(
  draw: xft.Draw,
  color: xft.Color,
  matrix: Pango.Matrix | null,
  font: Pango.Font,
  glyphs: Pango.GlyphString,
  x: number,
  y: number
): void;
export function set_default_substitute(
  display: xlib.Display,
  screen: number,
  func: SubstituteFunc,
  data: object | null,
  notify: GLib.DestroyNotify
): void;
export function shutdown_display(display: xlib.Display, screen: number): void;
export function substitute_changed(display: xlib.Display, screen: number): void;
