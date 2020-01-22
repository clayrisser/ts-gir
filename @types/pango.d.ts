import * as GLib from './g-lib';
import * as GObject from './g-object';
export const ANALYSIS_FLAG_CENTERED_BASELINE: number;
export const ANALYSIS_FLAG_IS_ELLIPSIS: number;
export const ATTR_INDEX_FROM_TEXT_BEGINNING: number;
export const ENGINE_TYPE_LANG: string;
export const ENGINE_TYPE_SHAPE: string;
export const GLYPH_EMPTY: Glyph;
export const GLYPH_INVALID_INPUT: Glyph;
export const GLYPH_UNKNOWN_FLAG: Glyph;
export const RENDER_TYPE_NONE: string;
export const SCALE: number;
export const UNKNOWN_GLYPH_HEIGHT: number;
export const UNKNOWN_GLYPH_WIDTH: number;
export const VERSION_MIN_REQUIRED: number;
export enum Alignment {
  PANGO_ALIGN_LEFT,
  PANGO_ALIGN_CENTER,
  PANGO_ALIGN_RIGHT
}
export enum AttrType {
  PANGO_ATTR_INVALID,
  PANGO_ATTR_LANGUAGE,
  PANGO_ATTR_FAMILY,
  PANGO_ATTR_STYLE,
  PANGO_ATTR_WEIGHT,
  PANGO_ATTR_VARIANT,
  PANGO_ATTR_STRETCH,
  PANGO_ATTR_SIZE,
  PANGO_ATTR_FONT_DESC,
  PANGO_ATTR_FOREGROUND,
  PANGO_ATTR_BACKGROUND,
  PANGO_ATTR_UNDERLINE,
  PANGO_ATTR_STRIKETHROUGH,
  PANGO_ATTR_RISE,
  PANGO_ATTR_SHAPE,
  PANGO_ATTR_SCALE,
  PANGO_ATTR_FALLBACK,
  PANGO_ATTR_LETTER_SPACING,
  PANGO_ATTR_UNDERLINE_COLOR,
  PANGO_ATTR_STRIKETHROUGH_COLOR,
  PANGO_ATTR_ABSOLUTE_SIZE,
  PANGO_ATTR_GRAVITY,
  PANGO_ATTR_GRAVITY_HINT,
  PANGO_ATTR_FONT_FEATURES,
  PANGO_ATTR_FOREGROUND_ALPHA,
  PANGO_ATTR_BACKGROUND_ALPHA
}
export enum BidiType {
  PANGO_BIDI_TYPE_L,
  PANGO_BIDI_TYPE_LRE,
  PANGO_BIDI_TYPE_LRO,
  PANGO_BIDI_TYPE_R,
  PANGO_BIDI_TYPE_AL,
  PANGO_BIDI_TYPE_RLE,
  PANGO_BIDI_TYPE_RLO,
  PANGO_BIDI_TYPE_PDF,
  PANGO_BIDI_TYPE_EN,
  PANGO_BIDI_TYPE_ES,
  PANGO_BIDI_TYPE_ET,
  PANGO_BIDI_TYPE_AN,
  PANGO_BIDI_TYPE_CS,
  PANGO_BIDI_TYPE_NSM,
  PANGO_BIDI_TYPE_BN,
  PANGO_BIDI_TYPE_B,
  PANGO_BIDI_TYPE_S,
  PANGO_BIDI_TYPE_WS,
  PANGO_BIDI_TYPE_ON
}
export enum CoverageLevel {
  PANGO_COVERAGE_NONE,
  PANGO_COVERAGE_FALLBACK,
  PANGO_COVERAGE_APPROXIMATE,
  PANGO_COVERAGE_EXACT
}
export enum Direction {
  PANGO_DIRECTION_LTR,
  PANGO_DIRECTION_RTL,
  PANGO_DIRECTION_TTB_LTR,
  PANGO_DIRECTION_TTB_RTL,
  PANGO_DIRECTION_WEAK_LTR,
  PANGO_DIRECTION_WEAK_RTL,
  PANGO_DIRECTION_NEUTRAL
}
export enum EllipsizeMode {
  PANGO_ELLIPSIZE_NONE,
  PANGO_ELLIPSIZE_START,
  PANGO_ELLIPSIZE_MIDDLE,
  PANGO_ELLIPSIZE_END
}
export enum Gravity {
  PANGO_GRAVITY_SOUTH,
  PANGO_GRAVITY_EAST,
  PANGO_GRAVITY_NORTH,
  PANGO_GRAVITY_WEST,
  PANGO_GRAVITY_AUTO
}
export enum GravityHint {
  PANGO_GRAVITY_HINT_NATURAL,
  PANGO_GRAVITY_HINT_STRONG,
  PANGO_GRAVITY_HINT_LINE
}
export enum RenderPart {
  PANGO_RENDER_PART_FOREGROUND,
  PANGO_RENDER_PART_BACKGROUND,
  PANGO_RENDER_PART_UNDERLINE,
  PANGO_RENDER_PART_STRIKETHROUGH
}
export enum Script {
  PANGO_SCRIPT_INVALID_CODE,
  PANGO_SCRIPT_COMMON,
  PANGO_SCRIPT_INHERITED,
  PANGO_SCRIPT_ARABIC,
  PANGO_SCRIPT_ARMENIAN,
  PANGO_SCRIPT_BENGALI,
  PANGO_SCRIPT_BOPOMOFO,
  PANGO_SCRIPT_CHEROKEE,
  PANGO_SCRIPT_COPTIC,
  PANGO_SCRIPT_CYRILLIC,
  PANGO_SCRIPT_DESERET,
  PANGO_SCRIPT_DEVANAGARI,
  PANGO_SCRIPT_ETHIOPIC,
  PANGO_SCRIPT_GEORGIAN,
  PANGO_SCRIPT_GOTHIC,
  PANGO_SCRIPT_GREEK,
  PANGO_SCRIPT_GUJARATI,
  PANGO_SCRIPT_GURMUKHI,
  PANGO_SCRIPT_HAN,
  PANGO_SCRIPT_HANGUL,
  PANGO_SCRIPT_HEBREW,
  PANGO_SCRIPT_HIRAGANA,
  PANGO_SCRIPT_KANNADA,
  PANGO_SCRIPT_KATAKANA,
  PANGO_SCRIPT_KHMER,
  PANGO_SCRIPT_LAO,
  PANGO_SCRIPT_LATIN,
  PANGO_SCRIPT_MALAYALAM,
  PANGO_SCRIPT_MONGOLIAN,
  PANGO_SCRIPT_MYANMAR,
  PANGO_SCRIPT_OGHAM,
  PANGO_SCRIPT_OLD_ITALIC,
  PANGO_SCRIPT_ORIYA,
  PANGO_SCRIPT_RUNIC,
  PANGO_SCRIPT_SINHALA,
  PANGO_SCRIPT_SYRIAC,
  PANGO_SCRIPT_TAMIL,
  PANGO_SCRIPT_TELUGU,
  PANGO_SCRIPT_THAANA,
  PANGO_SCRIPT_THAI,
  PANGO_SCRIPT_TIBETAN,
  PANGO_SCRIPT_CANADIAN_ABORIGINAL,
  PANGO_SCRIPT_YI,
  PANGO_SCRIPT_TAGALOG,
  PANGO_SCRIPT_HANUNOO,
  PANGO_SCRIPT_BUHID,
  PANGO_SCRIPT_TAGBANWA,
  PANGO_SCRIPT_BRAILLE,
  PANGO_SCRIPT_CYPRIOT,
  PANGO_SCRIPT_LIMBU,
  PANGO_SCRIPT_OSMANYA,
  PANGO_SCRIPT_SHAVIAN,
  PANGO_SCRIPT_LINEAR_B,
  PANGO_SCRIPT_TAI_LE,
  PANGO_SCRIPT_UGARITIC,
  PANGO_SCRIPT_NEW_TAI_LUE,
  PANGO_SCRIPT_BUGINESE,
  PANGO_SCRIPT_GLAGOLITIC,
  PANGO_SCRIPT_TIFINAGH,
  PANGO_SCRIPT_SYLOTI_NAGRI,
  PANGO_SCRIPT_OLD_PERSIAN,
  PANGO_SCRIPT_KHAROSHTHI,
  PANGO_SCRIPT_UNKNOWN,
  PANGO_SCRIPT_BALINESE,
  PANGO_SCRIPT_CUNEIFORM,
  PANGO_SCRIPT_PHOENICIAN,
  PANGO_SCRIPT_PHAGS_PA,
  PANGO_SCRIPT_NKO,
  PANGO_SCRIPT_KAYAH_LI,
  PANGO_SCRIPT_LEPCHA,
  PANGO_SCRIPT_REJANG,
  PANGO_SCRIPT_SUNDANESE,
  PANGO_SCRIPT_SAURASHTRA,
  PANGO_SCRIPT_CHAM,
  PANGO_SCRIPT_OL_CHIKI,
  PANGO_SCRIPT_VAI,
  PANGO_SCRIPT_CARIAN,
  PANGO_SCRIPT_LYCIAN,
  PANGO_SCRIPT_LYDIAN,
  PANGO_SCRIPT_BATAK,
  PANGO_SCRIPT_BRAHMI,
  PANGO_SCRIPT_MANDAIC,
  PANGO_SCRIPT_CHAKMA,
  PANGO_SCRIPT_MEROITIC_CURSIVE,
  PANGO_SCRIPT_MEROITIC_HIEROGLYPHS,
  PANGO_SCRIPT_MIAO,
  PANGO_SCRIPT_SHARADA,
  PANGO_SCRIPT_SORA_SOMPENG,
  PANGO_SCRIPT_TAKRI,
  PANGO_SCRIPT_BASSA_VAH,
  PANGO_SCRIPT_CAUCASIAN_ALBANIAN,
  PANGO_SCRIPT_DUPLOYAN,
  PANGO_SCRIPT_ELBASAN,
  PANGO_SCRIPT_GRANTHA,
  PANGO_SCRIPT_KHOJKI,
  PANGO_SCRIPT_KHUDAWADI,
  PANGO_SCRIPT_LINEAR_A,
  PANGO_SCRIPT_MAHAJANI,
  PANGO_SCRIPT_MANICHAEAN,
  PANGO_SCRIPT_MENDE_KIKAKUI,
  PANGO_SCRIPT_MODI,
  PANGO_SCRIPT_MRO,
  PANGO_SCRIPT_NABATAEAN,
  PANGO_SCRIPT_OLD_NORTH_ARABIAN,
  PANGO_SCRIPT_OLD_PERMIC,
  PANGO_SCRIPT_PAHAWH_HMONG,
  PANGO_SCRIPT_PALMYRENE,
  PANGO_SCRIPT_PAU_CIN_HAU,
  PANGO_SCRIPT_PSALTER_PAHLAVI,
  PANGO_SCRIPT_SIDDHAM,
  PANGO_SCRIPT_TIRHUTA,
  PANGO_SCRIPT_WARANG_CITI,
  PANGO_SCRIPT_AHOM,
  PANGO_SCRIPT_ANATOLIAN_HIEROGLYPHS,
  PANGO_SCRIPT_HATRAN,
  PANGO_SCRIPT_MULTANI,
  PANGO_SCRIPT_OLD_HUNGARIAN,
  PANGO_SCRIPT_SIGNWRITING
}
export enum Stretch {
  PANGO_STRETCH_ULTRA_CONDENSED,
  PANGO_STRETCH_EXTRA_CONDENSED,
  PANGO_STRETCH_CONDENSED,
  PANGO_STRETCH_SEMI_CONDENSED,
  PANGO_STRETCH_NORMAL,
  PANGO_STRETCH_SEMI_EXPANDED,
  PANGO_STRETCH_EXPANDED,
  PANGO_STRETCH_EXTRA_EXPANDED,
  PANGO_STRETCH_ULTRA_EXPANDED
}
export enum Style {
  PANGO_STYLE_NORMAL,
  PANGO_STYLE_OBLIQUE,
  PANGO_STYLE_ITALIC
}
export enum TabAlign {
  PANGO_TAB_LEFT
}
export enum Underline {
  PANGO_UNDERLINE_NONE,
  PANGO_UNDERLINE_SINGLE,
  PANGO_UNDERLINE_DOUBLE,
  PANGO_UNDERLINE_LOW,
  PANGO_UNDERLINE_ERROR
}
export enum Variant {
  PANGO_VARIANT_NORMAL,
  PANGO_VARIANT_SMALL_CAPS
}
export enum Weight {
  PANGO_WEIGHT_THIN,
  PANGO_WEIGHT_ULTRALIGHT,
  PANGO_WEIGHT_LIGHT,
  PANGO_WEIGHT_SEMILIGHT,
  PANGO_WEIGHT_BOOK,
  PANGO_WEIGHT_NORMAL,
  PANGO_WEIGHT_MEDIUM,
  PANGO_WEIGHT_SEMIBOLD,
  PANGO_WEIGHT_BOLD,
  PANGO_WEIGHT_ULTRABOLD,
  PANGO_WEIGHT_HEAVY,
  PANGO_WEIGHT_ULTRAHEAVY
}
export enum WrapMode {
  PANGO_WRAP_WORD,
  PANGO_WRAP_CHAR,
  PANGO_WRAP_WORD_CHAR
}
export enum FontMask {
  PANGO_FONT_MASK_FAMILY,
  PANGO_FONT_MASK_STYLE,
  PANGO_FONT_MASK_VARIANT,
  PANGO_FONT_MASK_WEIGHT,
  PANGO_FONT_MASK_STRETCH,
  PANGO_FONT_MASK_SIZE,
  PANGO_FONT_MASK_GRAVITY,
  PANGO_FONT_MASK_VARIATIONS
}
export type Glyph = number;
export type GlyphUnit = number;
export type LayoutRun = GlyphItem;
export class Context extends GObject.Object {
  constructor();
  changed(): void;
  get_base_dir(): Direction;
  get_base_gravity(): Gravity;
  get_font_description(): FontDescription;
  get_font_map(): FontMap;
  get_gravity(): Gravity;
  get_gravity_hint(): GravityHint;
  get_language(): Language;
  get_matrix(): Matrix | null;
  get_metrics(
    desc: FontDescription | null,
    language: Language | null
  ): FontMetrics;
  get_serial(): number;
  list_families(families: FontFamily[], n_families: number): void;
  load_font(desc: FontDescription): Font | null;
  load_fontset(desc: FontDescription, language: Language): Fontset | null;
  set_base_dir(direction: Direction): void;
  set_base_gravity(gravity: Gravity): void;
  set_font_description(desc: FontDescription): void;
  set_font_map(font_map: FontMap): void;
  set_gravity_hint(hint: GravityHint): void;
  set_language(language: Language): void;
  set_matrix(matrix: Matrix | null): void;
}
export class Engine extends GObject.Object {
  static parent_instance: GObject.Object;
}
export class EngineLang extends Engine {
  static parent_instance: any;
  script_break(
    text: string,
    len: number,
    analysis: Analysis,
    attrs: LogAttr,
    attrs_len: number
  ): void;
}
export class EngineShape extends Engine {
  static parent_instance: any;
  covers(font: Font, language: Language, wc: number): CoverageLevel;
  script_shape(
    font: Font,
    item_text: string,
    item_length: number,
    analysis: Analysis,
    glyphs: GlyphString,
    paragraph_text: string,
    paragraph_length: number
  ): void;
}
export class Font extends GObject.Object {
  static parent_instance: GObject.Object;
  describe(...args: any[]): any;
  describe_with_absolute_size(): FontDescription;
  find_shaper(...args: any[]): any;
  get_coverage(...args: any[]): any;
  get_font_map(...args: any[]): any;
  get_glyph_extents(...args: any[]): any;
  get_metrics(...args: any[]): any;
  describe(...args: any[]): any;
  describe_absolute(): FontDescription;
  find_shaper(...args: any[]): any;
  get_coverage(...args: any[]): any;
  get_font_map(...args: any[]): any;
  get_glyph_extents(...args: any[]): any;
  get_metrics(...args: any[]): any;
  static descriptions_free(
    descs: FontDescription[] | null,
    n_descs: number
  ): void;
}
export class FontFace extends GObject.Object {
  static parent_instance: GObject.Object;
  describe(...args: any[]): any;
  get_face_name(...args: any[]): any;
  is_synthesized(...args: any[]): any;
  list_sizes(...args: any[]): any;
  describe(...args: any[]): any;
  get_face_name(...args: any[]): any;
  is_synthesized(...args: any[]): any;
  list_sizes(...args: any[]): any;
}
export class FontFamily extends GObject.Object {
  static parent_instance: GObject.Object;
  get_name(...args: any[]): any;
  is_monospace(...args: any[]): any;
  list_faces(...args: any[]): any;
  get_name(...args: any[]): any;
  is_monospace(...args: any[]): any;
  list_faces(...args: any[]): any;
}
export class FontMap extends GObject.Object {
  static parent_instance: GObject.Object;
  changed(...args: any[]): any;
  create_context(): Context;
  get_serial(...args: any[]): any;
  get_shape_engine_type(): string;
  list_families(...args: any[]): any;
  load_font(...args: any[]): any;
  load_fontset(...args: any[]): any;
  changed(...args: any[]): any;
  get_serial(...args: any[]): any;
  list_families(...args: any[]): any;
  load_font(...args: any[]): any;
  load_fontset(...args: any[]): any;
}
export class Fontset extends GObject.Object {
  static parent_instance: GObject.Object;
  foreach(...args: any[]): any;
  get_font(...args: any[]): any;
  get_metrics(...args: any[]): any;
  foreach(...args: any[]): any;
  get_font(...args: any[]): any;
  get_language(): Language;
  get_metrics(...args: any[]): any;
}
export class FontsetSimple extends Fontset {
  constructor(language: Language);
  append(font: Font): void;
  size(): number;
}
export class Layout extends GObject.Object {
  constructor(context: Context);
  context_changed(): void;
  copy(): Layout;
  get_alignment(): Alignment;
  get_attributes(): AttrList;
  get_auto_dir(): boolean;
  get_baseline(): number;
  get_character_count(): number;
  get_context(): Context;
  get_cursor_pos(
    index_: number,
    strong_pos?: Rectangle,
    weak_pos?: Rectangle
  ): void;
  get_ellipsize(): EllipsizeMode;
  get_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_font_description(): FontDescription | null;
  get_height(): number;
  get_indent(): number;
  get_iter(): LayoutIter;
  get_justify(): boolean;
  get_line(line: number): LayoutLine | null;
  get_line_count(): number;
  get_line_readonly(line: number): LayoutLine | null;
  get_lines(): GLib.SList;
  get_lines_readonly(): GLib.SList;
  get_log_attrs(attrs: LogAttr[], n_attrs: number): void;
  get_log_attrs_readonly(n_attrs: number): LogAttr[];
  get_pixel_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_pixel_size(width?: number, height?: number): void;
  get_serial(): number;
  get_single_paragraph_mode(): boolean;
  get_size(width?: number, height?: number): void;
  get_spacing(): number;
  get_tabs(): TabArray | null;
  get_text(): string;
  get_unknown_glyphs_count(): number;
  get_width(): number;
  get_wrap(): WrapMode;
  index_to_line_x(
    index_: number,
    trailing: boolean,
    line?: number,
    x_pos?: number
  ): void;
  index_to_pos(index_: number, pos: Rectangle): void;
  is_ellipsized(): boolean;
  is_wrapped(): boolean;
  move_cursor_visually(
    strong: boolean,
    old_index: number,
    old_trailing: number,
    direction: number,
    new_index: number,
    new_trailing: number
  ): void;
  set_alignment(alignment: Alignment): void;
  set_attributes(attrs: AttrList | null): void;
  set_auto_dir(auto_dir: boolean): void;
  set_ellipsize(ellipsize: EllipsizeMode): void;
  set_font_description(desc: FontDescription | null): void;
  set_height(height: number): void;
  set_indent(indent: number): void;
  set_justify(justify: boolean): void;
  set_markup(markup: string, length: number): void;
  set_markup_with_accel(
    markup: string,
    length: number,
    accel_marker: number,
    accel_char?: number
  ): void;
  set_single_paragraph_mode(setting: boolean): void;
  set_spacing(spacing: number): void;
  set_tabs(tabs: TabArray | null): void;
  set_text(text: string, length: number): void;
  set_width(width: number): void;
  set_wrap(wrap: WrapMode): void;
  xy_to_index(x: number, y: number, index_: number, trailing: number): boolean;
}
export class Renderer extends GObject.Object {
  static parent_instance: GObject.Object;
  static underline: Underline;
  static strikethrough: boolean;
  static active_count: number;
  static matrix: Matrix;
  static priv: RendererPrivate;
  activate(): void;
  deactivate(): void;
  draw_error_underline(...args: any[]): any;
  draw_glyph(...args: any[]): any;
  draw_glyph_item(...args: any[]): any;
  draw_glyphs(...args: any[]): any;
  draw_layout(layout: Layout, x: number, y: number): void;
  draw_layout_line(line: LayoutLine, x: number, y: number): void;
  draw_rectangle(...args: any[]): any;
  draw_trapezoid(...args: any[]): any;
  get_alpha(part: RenderPart): number;
  get_color(part: RenderPart): Color | null;
  get_layout(): Layout | null;
  get_layout_line(): LayoutLine | null;
  get_matrix(): Matrix | null;
  part_changed(...args: any[]): any;
  set_alpha(part: RenderPart, alpha: number): void;
  set_color(part: RenderPart, color: Color | null): void;
  set_matrix(matrix: Matrix | null): void;
  begin(): void;
  draw_error_underline(...args: any[]): any;
  draw_glyph(...args: any[]): any;
  draw_glyph_item(...args: any[]): any;
  draw_glyphs(...args: any[]): any;
  draw_rectangle(...args: any[]): any;
  draw_shape(attr: AttrShape, x: number, y: number): void;
  draw_trapezoid(...args: any[]): any;
  end(): void;
  part_changed(...args: any[]): any;
  prepare_run(run: LayoutRun): void;
}
export class Analysis {
  static shape_engine: EngineShape;
  static lang_engine: EngineLang;
  static font: Font;
  static level: number;
  static gravity: number;
  static flags: number;
  static script: number;
  static language: Language;
  static extra_attrs: GLib.SList;
}
export class AttrClass {
  static type: AttrType;
  static copy: (attr: Attribute) => Attribute;
  static destroy: (attr: Attribute) => void;
  static equal: (attr1: Attribute, attr2: Attribute) => boolean;
}
export class AttrColor {
  static attr: Attribute;
  static color: Color;
}
export class AttrFloat {
  static attr: Attribute;
  static value: number;
}
export class AttrFontDesc {
  static attr: Attribute;
  static desc: FontDescription;
  static g_new(desc: FontDescription): Attribute;
}
export class AttrFontFeatures {
  static attr: Attribute;
  static features: string;
  static g_new(features: string): Attribute;
}
export class AttrInt {
  static attr: Attribute;
  static value: number;
}
export class AttrIterator {
  copy(): AttrIterator;
  destroy(): void;
  get(type: AttrType): Attribute | null;
  get_attrs(): GLib.SList;
  get_font(
    desc: FontDescription,
    language: Language | null,
    extra_attrs: GLib.SList | null
  ): void;
  next(): boolean;
  range(start: number, end: number): void;
}
export class AttrLanguage {
  static attr: Attribute;
  static value: Language;
  static g_new(language: Language): Attribute;
}
export class AttrList {
  constructor();
  change(attr: Attribute): void;
  copy(): AttrList | null;
  filter(func: AttrFilterFunc, data: object | null): AttrList | null;
  get_iterator(): AttrIterator;
  insert(attr: Attribute): void;
  insert_before(attr: Attribute): void;
  ref(): AttrList;
  splice(other: AttrList, pos: number, len: number): void;
  unref(): void;
}
export class AttrShape {
  static attr: Attribute;
  static ink_rect: Rectangle;
  static logical_rect: Rectangle;
  static data: object;
  static copy_func: AttrDataCopyFunc;
  static destroy_func: GLib.DestroyNotify;
  static g_new(ink_rect: Rectangle, logical_rect: Rectangle): Attribute;
  static new_with_data(
    ink_rect: Rectangle,
    logical_rect: Rectangle,
    data: object | null,
    copy_func: AttrDataCopyFunc | null,
    destroy_func: GLib.DestroyNotify | null
  ): Attribute;
}
export class AttrSize {
  static attr: Attribute;
  static size: number;
  static absolute: number;
  static g_new(size: number): Attribute;
  static new_absolute(size: number): Attribute;
}
export class AttrString {
  static attr: Attribute;
  static value: string;
}
export class Attribute {
  static klass: AttrClass;
  static start_index: number;
  static end_index: number;
  copy(): Attribute;
  destroy(): void;
  equal(attr2: Attribute): boolean;
  init(klass: AttrClass): void;
}
export class Color {
  static red: number;
  static green: number;
  static blue: number;
  copy(): Color | null;
  free(): void;
  parse(spec: string): boolean;
  to_string(): string;
}
export class ContextClass {}
export class Coverage {
  copy(): Coverage;
  get(index_: number): CoverageLevel;
  max(other: Coverage): void;
  ref(): Coverage;
  set(index_: number, level: CoverageLevel): void;
  to_bytes(bytes: number[], n_bytes: number): void;
  unref(): void;
  static from_bytes(bytes: number[], n_bytes: number): Coverage | null;
  static g_new(): Coverage;
}
export class EngineClass {
  static parent_class: GObject.ObjectClass;
}
export class EngineInfo {
  static id: string;
  static engine_type: string;
  static render_type: string;
  static scripts: EngineScriptInfo;
  static n_scripts: number;
}
export class EngineLangClass {
  static parent_class: EngineClass;
  static script_break: (
    engine: EngineLang,
    text: string,
    len: number,
    analysis: Analysis,
    attrs: LogAttr,
    attrs_len: number
  ) => void;
}
export class EngineScriptInfo {
  static script: Script;
  static langs: string;
}
export class EngineShapeClass {
  static parent_class: EngineClass;
  static script_shape: (
    engine: EngineShape,
    font: Font,
    item_text: string,
    item_length: number,
    analysis: Analysis,
    glyphs: GlyphString,
    paragraph_text: string,
    paragraph_length: number
  ) => void;
  static covers: (
    engine: EngineShape,
    font: Font,
    language: Language,
    wc: number
  ) => CoverageLevel;
}
export class FontClass {
  static parent_class: GObject.ObjectClass;
  static describe: (font: Font) => FontDescription;
  static get_coverage: (font: Font, language: Language) => Coverage;
  static find_shaper: (
    font: Font,
    language: Language,
    ch: number
  ) => EngineShape;
  static get_glyph_extents: (
    font: Font | null,
    glyph: Glyph,
    ink_rect: Rectangle,
    logical_rect: Rectangle
  ) => void;
  static get_metrics: (
    font: Font | null,
    language: Language | null
  ) => FontMetrics;
  static get_font_map: (font: Font | null) => FontMap | null;
  static describe_absolute: (font: Font) => FontDescription;
  static _pango_reserved1: () => void;
  static _pango_reserved2: () => void;
}
export class FontDescription {
  constructor();
  better_match(
    old_match: FontDescription | null,
    new_match: FontDescription
  ): boolean;
  copy(): FontDescription | null;
  copy_static(): FontDescription | null;
  equal(desc2: FontDescription): boolean;
  free(): void;
  get_family(): string | null;
  get_gravity(): Gravity;
  get_set_fields(): FontMask;
  get_size(): number;
  get_size_is_absolute(): boolean;
  get_stretch(): Stretch;
  get_style(): Style;
  get_variant(): Variant;
  get_variations(): string | null;
  get_weight(): Weight;
  hash(): number;
  merge(desc_to_merge: FontDescription | null, replace_existing: boolean): void;
  merge_static(desc_to_merge: FontDescription, replace_existing: boolean): void;
  set_absolute_size(size: number): void;
  set_family(family: string): void;
  set_family_static(family: string): void;
  set_gravity(gravity: Gravity): void;
  set_size(size: number): void;
  set_stretch(stretch: Stretch): void;
  set_style(style: Style): void;
  set_variant(variant: Variant): void;
  set_variations(settings: string): void;
  set_variations_static(settings: string): void;
  set_weight(weight: Weight): void;
  to_filename(): string;
  to_string(): string;
  unset_fields(to_unset: FontMask): void;
  static from_string(str: string): FontDescription;
}
export class FontFaceClass {
  static parent_class: GObject.ObjectClass;
  static get_face_name: (face: FontFace) => string;
  static describe: (face: FontFace) => FontDescription;
  static list_sizes: (face: FontFace, sizes: number[], n_sizes: number) => void;
  static is_synthesized: (face: FontFace) => boolean;
  static _pango_reserved3: () => void;
  static _pango_reserved4: () => void;
}
export class FontFamilyClass {
  static parent_class: GObject.ObjectClass;
  static list_faces: (
    family: FontFamily,
    faces: FontFace[],
    n_faces: number
  ) => void;
  static get_name: (family: FontFamily) => string;
  static is_monospace: (family: FontFamily) => boolean;
  static _pango_reserved2: () => void;
  static _pango_reserved3: () => void;
  static _pango_reserved4: () => void;
}
export class FontMapClass {
  static parent_class: GObject.ObjectClass;
  static load_font: (
    fontmap: FontMap,
    context: Context,
    desc: FontDescription
  ) => Font | null;
  static list_families: (
    fontmap: FontMap,
    families: FontFamily[],
    n_families: number
  ) => void;
  static load_fontset: (
    fontmap: FontMap,
    context: Context,
    desc: FontDescription,
    language: Language
  ) => Fontset | null;
  static shape_engine_type: string;
  static get_serial: (fontmap: FontMap) => number;
  static changed: (fontmap: FontMap) => void;
  static _pango_reserved1: () => void;
  static _pango_reserved2: () => void;
}
export class FontMetrics {
  constructor();
  static ref_count: number;
  static ascent: number;
  static descent: number;
  static approximate_char_width: number;
  static approximate_digit_width: number;
  static underline_position: number;
  static underline_thickness: number;
  static strikethrough_position: number;
  static strikethrough_thickness: number;
  get_approximate_char_width(): number;
  get_approximate_digit_width(): number;
  get_ascent(): number;
  get_descent(): number;
  get_strikethrough_position(): number;
  get_strikethrough_thickness(): number;
  get_underline_position(): number;
  get_underline_thickness(): number;
  ref(): FontMetrics | null;
  unref(): void;
}
export class FontsetClass {
  static parent_class: GObject.ObjectClass;
  static get_font: (fontset: Fontset, wc: number) => Font;
  static get_metrics: (fontset: Fontset) => FontMetrics;
  static get_language: (fontset: Fontset) => Language;
  static foreach: (
    fontset: Fontset,
    func: FontsetForeachFunc,
    data: object | null
  ) => void;
  static _pango_reserved1: () => void;
  static _pango_reserved2: () => void;
  static _pango_reserved3: () => void;
  static _pango_reserved4: () => void;
}
export class FontsetSimpleClass {}
export class GlyphGeometry {
  static width: GlyphUnit;
  static x_offset: GlyphUnit;
  static y_offset: GlyphUnit;
}
export class GlyphInfo {
  static glyph: Glyph;
  static geometry: GlyphGeometry;
  static attr: GlyphVisAttr;
}
export class GlyphItem {
  static item: Item;
  static glyphs: GlyphString;
  apply_attrs(text: string, list: AttrList): GLib.SList;
  copy(): GlyphItem | null;
  free(): void;
  get_logical_widths(text: string, logical_widths: number[]): void;
  letter_space(
    text: string,
    log_attrs: LogAttr[],
    letter_spacing: number
  ): void;
  split(text: string, split_index: number): GlyphItem;
}
export class GlyphItemIter {
  static glyph_item: GlyphItem;
  static text: string;
  static start_glyph: number;
  static start_index: number;
  static start_char: number;
  static end_glyph: number;
  static end_index: number;
  static end_char: number;
  copy(): GlyphItemIter | null;
  free(): void;
  init_end(glyph_item: GlyphItem, text: string): boolean;
  init_start(glyph_item: GlyphItem, text: string): boolean;
  next_cluster(): boolean;
  prev_cluster(): boolean;
}
export class GlyphString {
  constructor();
  static num_glyphs: number;
  static glyphs: GlyphInfo[];
  static log_clusters: number;
  static space: number;
  copy(): GlyphString | null;
  extents(font: Font, ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  extents_range(
    start: number,
    end: number,
    font: Font,
    ink_rect?: Rectangle,
    logical_rect?: Rectangle
  ): void;
  free(): void;
  get_logical_widths(
    text: string,
    length: number,
    embedding_level: number,
    logical_widths: number[]
  ): void;
  get_width(): number;
  index_to_x(
    text: string,
    length: number,
    analysis: Analysis,
    index_: number,
    trailing: boolean,
    x_pos: number
  ): void;
  set_size(new_len: number): void;
  x_to_index(
    text: string,
    length: number,
    analysis: Analysis,
    x_pos: number,
    index_: number,
    trailing: number
  ): void;
}
export class GlyphVisAttr {
  static is_cluster_start: number;
}
export class IncludedModule {
  static list: (engines: EngineInfo, n_engines: number) => void;
  static init: (module: GObject.TypeModule) => void;
  static exit: () => void;
  static create: (id: string) => Engine;
}
export class Item {
  constructor();
  static offset: number;
  static length: number;
  static num_chars: number;
  static analysis: Analysis;
  copy(): Item | null;
  free(): void;
  split(split_index: number, split_offset: number): Item;
}
export class Language {
  get_sample_string(): string;
  get_scripts(num_scripts?: number): Script[] | null;
  includes_script(script: Script): boolean;
  matches(range_list: string): boolean;
  to_string(): string;
  static from_string(language: string | null): Language | null;
  static get_default(): Language;
}
export class LayoutClass {}
export class LayoutIter {
  at_last_line(): boolean;
  copy(): LayoutIter | null;
  free(): void;
  get_baseline(): number;
  get_char_extents(logical_rect: Rectangle): void;
  get_cluster_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_index(): number;
  get_layout(): Layout;
  get_layout_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_line(): LayoutLine;
  get_line_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_line_readonly(): LayoutLine;
  get_line_yrange(y0_?: number, y1_?: number): void;
  get_run(): LayoutRun | null;
  get_run_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_run_readonly(): LayoutRun | null;
  next_char(): boolean;
  next_cluster(): boolean;
  next_line(): boolean;
  next_run(): boolean;
}
export class LayoutLine {
  static layout: Layout;
  static start_index: number;
  static length: number;
  static runs: GLib.SList;
  static is_paragraph_start: number;
  static resolved_dir: number;
  get_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_pixel_extents(ink_rect?: Rectangle, logical_rect?: Rectangle): void;
  get_x_ranges(
    start_index: number,
    end_index: number,
    ranges: number[],
    n_ranges: number
  ): void;
  index_to_x(index_: number, trailing: boolean, x_pos: number): void;
  ref(): LayoutLine;
  unref(): void;
  x_to_index(x_pos: number, index_: number, trailing: number): boolean;
}
export class LogAttr {
  static is_line_break: number;
  static is_mandatory_break: number;
  static is_char_break: number;
  static is_white: number;
  static is_cursor_position: number;
  static is_word_start: number;
  static is_word_end: number;
  static is_sentence_boundary: number;
  static is_sentence_start: number;
  static is_sentence_end: number;
  static backspace_deletes_character: number;
  static is_expandable_space: number;
  static is_word_boundary: number;
}
export class Map {
  get_engine(script: Script): Engine;
  get_engines(
    script: Script,
    exact_engines: GLib.SList,
    fallback_engines: GLib.SList
  ): void;
}
export class MapEntry {}
export class Matrix {
  static xx: number;
  static xy: number;
  static yx: number;
  static yy: number;
  static x0: number;
  static y0: number;
  concat(new_matrix: Matrix): void;
  copy(): Matrix | null;
  free(): void;
  get_font_scale_factor(): number;
  get_font_scale_factors(xscale?: number, yscale?: number): void;
  rotate(degrees: number): void;
  scale(scale_x: number, scale_y: number): void;
  transform_distance(dx: number, dy: number): void;
  transform_pixel_rectangle(rect: Rectangle | null): void;
  transform_point(x: number, y: number): void;
  transform_rectangle(rect: Rectangle | null): void;
  translate(tx: number, ty: number): void;
}
export class Rectangle {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
}
export class RendererClass {
  static parent_class: GObject.ObjectClass;
  static draw_glyphs: (
    renderer: Renderer,
    font: Font,
    glyphs: GlyphString,
    x: number,
    y: number
  ) => void;
  static draw_rectangle: (
    renderer: Renderer,
    part: RenderPart,
    x: number,
    y: number,
    width: number,
    height: number
  ) => void;
  static draw_error_underline: (
    renderer: Renderer,
    x: number,
    y: number,
    width: number,
    height: number
  ) => void;
  static draw_shape: (
    renderer: Renderer,
    attr: AttrShape,
    x: number,
    y: number
  ) => void;
  static draw_trapezoid: (
    renderer: Renderer,
    part: RenderPart,
    y1_: number,
    x11: number,
    x21: number,
    y2: number,
    x12: number,
    x22: number
  ) => void;
  static draw_glyph: (
    renderer: Renderer,
    font: Font,
    glyph: Glyph,
    x: number,
    y: number
  ) => void;
  static part_changed: (renderer: Renderer, part: RenderPart) => void;
  static begin: (renderer: Renderer) => void;
  static end: (renderer: Renderer) => void;
  static prepare_run: (renderer: Renderer, run: LayoutRun) => void;
  static draw_glyph_item: (
    renderer: Renderer,
    text: string | null,
    glyph_item: GlyphItem,
    x: number,
    y: number
  ) => void;
  static _pango_reserved2: () => void;
  static _pango_reserved3: () => void;
  static _pango_reserved4: () => void;
}
export class RendererPrivate {}
export class ScriptIter {
  free(): void;
  get_range(start?: string, end?: string, script?: Script): void;
  next(): boolean;
  static g_new(text: string, length: number): ScriptIter;
}
export class TabArray {
  constructor(initial_size: number, positions_in_pixels: boolean);
  copy(): TabArray;
  free(): void;
  get_positions_in_pixels(): boolean;
  get_size(): number;
  get_tab(tab_index: number, alignment?: TabAlign, location?: number): void;
  get_tabs(alignments?: TabAlign, locations?: number[]): void;
  resize(new_size: number): void;
  set_tab(tab_index: number, alignment: TabAlign, location: number): void;
}
export function attr_background_alpha_new(alpha: number): Attribute;
export function attr_background_new(
  red: number,
  green: number,
  blue: number
): Attribute;
export function attr_fallback_new(enable_fallback: boolean): Attribute;
export function attr_family_new(family: string): Attribute;
export function attr_foreground_alpha_new(alpha: number): Attribute;
export function attr_foreground_new(
  red: number,
  green: number,
  blue: number
): Attribute;
export function attr_gravity_hint_new(hint: GravityHint): Attribute;
export function attr_gravity_new(gravity: Gravity): Attribute;
export function attr_letter_spacing_new(letter_spacing: number): Attribute;
export function attr_rise_new(rise: number): Attribute;
export function attr_scale_new(scale_factor: number): Attribute;
export function attr_stretch_new(stretch: Stretch): Attribute;
export function attr_strikethrough_color_new(
  red: number,
  green: number,
  blue: number
): Attribute;
export function attr_strikethrough_new(strikethrough: boolean): Attribute;
export function attr_style_new(style: Style): Attribute;
export function attr_type_get_name(type: AttrType): string | null;
export function attr_type_register(name: string): AttrType;
export function attr_underline_color_new(
  red: number,
  green: number,
  blue: number
): Attribute;
export function attr_underline_new(underline: Underline): Attribute;
export function attr_variant_new(variant: Variant): Attribute;
export function attr_weight_new(weight: Weight): Attribute;
export function bidi_type_for_unichar(ch: number): BidiType;
export function g_break(
  text: string,
  length: number,
  analysis: Analysis,
  attrs: LogAttr[],
  attrs_len: number
): void;
export function config_key_get(key: string): string;
export function config_key_get_system(key: string): string;
export function default_break(
  text: string,
  length: number,
  analysis: Analysis | null,
  attrs: LogAttr,
  attrs_len: number
): void;
export function extents_to_pixels(
  inclusive: Rectangle | null,
  nearest: Rectangle | null
): void;
export function find_base_dir(text: string, length: number): Direction;
export function find_map(
  language: Language,
  engine_type_id: number,
  render_type_id: number
): Map;
export function find_paragraph_boundary(
  text: string,
  length: number,
  paragraph_delimiter_index: number,
  next_paragraph_start: number
): void;
export function font_description_from_string(str: string): FontDescription;
export function get_lib_subdirectory(): string;
export function get_log_attrs(
  text: string,
  length: number,
  level: number,
  language: Language,
  log_attrs: LogAttr[],
  attrs_len: number
): void;
export function get_mirror_char(ch: number, mirrored_ch: number): boolean;
export function get_sysconf_subdirectory(): string;
export function gravity_get_for_matrix(matrix: Matrix | null): Gravity;
export function gravity_get_for_script(
  script: Script,
  base_gravity: Gravity,
  hint: GravityHint
): Gravity;
export function gravity_get_for_script_and_width(
  script: Script,
  wide: boolean,
  base_gravity: Gravity,
  hint: GravityHint
): Gravity;
export function gravity_to_rotation(gravity: Gravity): number;
export function is_zero_width(ch: number): boolean;
export function itemize(
  context: Context,
  text: string,
  start_index: number,
  length: number,
  attrs: AttrList,
  cached_iter: AttrIterator | null
): GLib.List;
export function itemize_with_base_dir(
  context: Context,
  base_dir: Direction,
  text: string,
  start_index: number,
  length: number,
  attrs: AttrList,
  cached_iter: AttrIterator | null
): GLib.List;
export function language_from_string(language: string | null): Language | null;
export function language_get_default(): Language;
export function log2vis_get_embedding_levels(
  text: string,
  length: number,
  pbase_dir: Direction
): number;
export function lookup_aliases(
  fontname: string,
  families: string[],
  n_families: number
): void;
export function markup_parser_finish(
  context: GLib.MarkupParseContext,
  attr_list: AttrList,
  text: string,
  accel_char: number
): boolean;
export function markup_parser_new(
  accel_marker: number
): GLib.MarkupParseContext;
export function module_register(module: IncludedModule): void;
export function parse_enum(
  type: any,
  str: string | null,
  value: number,
  warn: boolean,
  possible_values: string
): boolean;
export function parse_markup(
  markup_text: string,
  length: number,
  accel_marker: number,
  attr_list: AttrList,
  text: string,
  accel_char: number
): boolean;
export function parse_stretch(
  str: string,
  stretch: Stretch,
  warn: boolean
): boolean;
export function parse_style(str: string, style: Style, warn: boolean): boolean;
export function parse_variant(
  str: string,
  variant: Variant,
  warn: boolean
): boolean;
export function parse_weight(
  str: string,
  weight: Weight,
  warn: boolean
): boolean;
export function quantize_line_geometry(
  thickness: number,
  position: number
): void;
export function read_line(stream: object | null, str: GLib.String): number;
export function reorder_items(logical_items: GLib.List): GLib.List;
export function scan_int(pos: string, out: number): boolean;
export function scan_string(pos: string, out: GLib.String): boolean;
export function scan_word(pos: string, out: GLib.String): boolean;
export function script_for_unichar(ch: number): Script;
export function script_get_sample_language(script: Script): Language | null;
export function shape(
  text: string,
  length: number,
  analysis: Analysis,
  glyphs: GlyphString
): void;
export function shape_full(
  item_text: string,
  item_length: number,
  paragraph_text: string | null,
  paragraph_length: number,
  analysis: Analysis,
  glyphs: GlyphString
): void;
export function skip_space(pos: string): boolean;
export function split_file_list(str: string): string[];
export function trim_string(str: string): string;
export function unichar_direction(ch: number): Direction;
export function units_from_double(d: number): number;
export function units_to_double(i: number): number;
export function version(): number;
export function version_check(
  required_major: number,
  required_minor: number,
  required_micro: number
): string | null;
export function version_string(): string;
export type AttrDataCopyFunc = (user_data: object | null) => object | null;
export type AttrFilterFunc = (
  attribute: Attribute,
  user_data: object | null
) => boolean;
export type FontsetForeachFunc = (
  fontset: Fontset,
  font: Font,
  user_data: object | null
) => boolean;
