import * as Pango from './pango';
import * as Gdk from './gdk';
import * as GObject from './g-object';
import * as GLib from './g-lib';
import * as Gtk from './gtk';
import * as GdkPixbuf from './gdk-pixbuf';
import * as Gio from './gio';
export enum BackgroundPatternType {
  GTK_SOURCE_BACKGROUND_PATTERN_TYPE_NONE,
  GTK_SOURCE_BACKGROUND_PATTERN_TYPE_GRID
}
export enum BracketMatchType {
  GTK_SOURCE_BRACKET_MATCH_NONE,
  GTK_SOURCE_BRACKET_MATCH_OUT_OF_RANGE,
  GTK_SOURCE_BRACKET_MATCH_NOT_FOUND,
  GTK_SOURCE_BRACKET_MATCH_FOUND
}
export enum ChangeCaseType {
  GTK_SOURCE_CHANGE_CASE_LOWER,
  GTK_SOURCE_CHANGE_CASE_UPPER,
  GTK_SOURCE_CHANGE_CASE_TOGGLE,
  GTK_SOURCE_CHANGE_CASE_TITLE
}
export enum CompletionError {
  GTK_SOURCE_COMPLETION_ERROR_ALREADY_BOUND,
  GTK_SOURCE_COMPLETION_ERROR_NOT_BOUND
}
export enum CompressionType {
  GTK_SOURCE_COMPRESSION_TYPE_NONE,
  GTK_SOURCE_COMPRESSION_TYPE_GZIP
}
export enum FileLoaderError {
  GTK_SOURCE_FILE_LOADER_ERROR_TOO_BIG,
  GTK_SOURCE_FILE_LOADER_ERROR_ENCODING_AUTO_DETECTION_FAILED,
  GTK_SOURCE_FILE_LOADER_ERROR_CONVERSION_FALLBACK
}
export enum FileSaverError {
  GTK_SOURCE_FILE_SAVER_ERROR_INVALID_CHARS,
  GTK_SOURCE_FILE_SAVER_ERROR_EXTERNALLY_MODIFIED
}
export enum GutterRendererAlignmentMode {
  GTK_SOURCE_GUTTER_RENDERER_ALIGNMENT_MODE_CELL,
  GTK_SOURCE_GUTTER_RENDERER_ALIGNMENT_MODE_FIRST,
  GTK_SOURCE_GUTTER_RENDERER_ALIGNMENT_MODE_LAST
}
export enum NewlineType {
  GTK_SOURCE_NEWLINE_TYPE_LF,
  GTK_SOURCE_NEWLINE_TYPE_CR,
  GTK_SOURCE_NEWLINE_TYPE_CR_LF
}
export enum SmartHomeEndType {
  GTK_SOURCE_SMART_HOME_END_DISABLED,
  GTK_SOURCE_SMART_HOME_END_BEFORE,
  GTK_SOURCE_SMART_HOME_END_AFTER,
  GTK_SOURCE_SMART_HOME_END_ALWAYS
}
export enum ViewGutterPosition {
  GTK_SOURCE_VIEW_GUTTER_POSITION_LINES,
  GTK_SOURCE_VIEW_GUTTER_POSITION_MARKS
}
export enum CompletionActivation {
  GTK_SOURCE_COMPLETION_ACTIVATION_NONE,
  GTK_SOURCE_COMPLETION_ACTIVATION_INTERACTIVE,
  GTK_SOURCE_COMPLETION_ACTIVATION_USER_REQUESTED
}
export enum DrawSpacesFlags {
  GTK_SOURCE_DRAW_SPACES_SPACE,
  GTK_SOURCE_DRAW_SPACES_TAB,
  GTK_SOURCE_DRAW_SPACES_NEWLINE,
  GTK_SOURCE_DRAW_SPACES_NBSP,
  GTK_SOURCE_DRAW_SPACES_LEADING,
  GTK_SOURCE_DRAW_SPACES_TEXT,
  GTK_SOURCE_DRAW_SPACES_TRAILING,
  GTK_SOURCE_DRAW_SPACES_ALL
}
export enum FileSaverFlags {
  GTK_SOURCE_FILE_SAVER_FLAGS_NONE,
  GTK_SOURCE_FILE_SAVER_FLAGS_IGNORE_INVALID_CHARS,
  GTK_SOURCE_FILE_SAVER_FLAGS_IGNORE_MODIFICATION_TIME,
  GTK_SOURCE_FILE_SAVER_FLAGS_CREATE_BACKUP
}
export enum GutterRendererState {
  GTK_SOURCE_GUTTER_RENDERER_STATE_NORMAL,
  GTK_SOURCE_GUTTER_RENDERER_STATE_CURSOR,
  GTK_SOURCE_GUTTER_RENDERER_STATE_PRELIT,
  GTK_SOURCE_GUTTER_RENDERER_STATE_SELECTED
}
export enum SortFlags {
  GTK_SOURCE_SORT_FLAGS_NONE,
  GTK_SOURCE_SORT_FLAGS_CASE_SENSITIVE,
  GTK_SOURCE_SORT_FLAGS_REVERSE_ORDER,
  GTK_SOURCE_SORT_FLAGS_REMOVE_DUPLICATES
}
export enum SpaceLocationFlags {
  GTK_SOURCE_SPACE_LOCATION_NONE,
  GTK_SOURCE_SPACE_LOCATION_LEADING,
  GTK_SOURCE_SPACE_LOCATION_INSIDE_TEXT,
  GTK_SOURCE_SPACE_LOCATION_TRAILING,
  GTK_SOURCE_SPACE_LOCATION_ALL
}
export enum SpaceTypeFlags {
  GTK_SOURCE_SPACE_TYPE_NONE,
  GTK_SOURCE_SPACE_TYPE_SPACE,
  GTK_SOURCE_SPACE_TYPE_TAB,
  GTK_SOURCE_SPACE_TYPE_NEWLINE,
  GTK_SOURCE_SPACE_TYPE_NBSP,
  GTK_SOURCE_SPACE_TYPE_ALL
}
export interface CompletionProposal {
  changed(...args: any[]): any;
  equal(...args: any[]): any;
  get_gicon(...args: any[]): any;
  get_icon(...args: any[]): any;
  get_icon_name(...args: any[]): any;
  get_info(...args: any[]): any;
  get_label(...args: any[]): any;
  get_markup(...args: any[]): any;
  get_text(...args: any[]): any;
  hash(...args: any[]): any;
}
export interface CompletionProvider {
  activate_proposal(...args: any[]): any;
  get_activation(...args: any[]): any;
  get_gicon(...args: any[]): any;
  get_icon(...args: any[]): any;
  get_icon_name(...args: any[]): any;
  get_info_widget(...args: any[]): any;
  get_interactive_delay(...args: any[]): any;
  get_name(...args: any[]): any;
  get_priority(...args: any[]): any;
  get_start_iter(...args: any[]): any;
  match(...args: any[]): any;
  populate(...args: any[]): any;
  update_info(...args: any[]): any;
}
export interface StyleSchemeChooser {
  'style-scheme': StyleScheme;
  get_style_scheme(...args: any[]): any;
  set_style_scheme(...args: any[]): any;
}
export interface UndoManager {
  begin_not_undoable_action(...args: any[]): any;
  can_redo(...args: any[]): any;
  can_redo_changed(...args: any[]): any;
  can_undo(...args: any[]): any;
  can_undo_changed(...args: any[]): any;
  end_not_undoable_action(...args: any[]): any;
  redo(...args: any[]): any;
  undo(...args: any[]): any;
}
export class Buffer extends Gtk.TextBuffer {
  constructor(table: Gtk.TextTagTable | null);
  'can-redo': boolean;
  'can-undo': boolean;
  'highlight-matching-brackets': boolean;
  'highlight-syntax': boolean;
  'implicit-trailing-newline': boolean;
  language: Language;
  'max-undo-levels': number;
  'style-scheme': StyleScheme;
  'undo-manager': any;
  static parent_instance: Gtk.TextBuffer;
  static priv: BufferPrivate;
  backward_iter_to_source_mark(
    iter: Gtk.TextIter,
    category: string | null
  ): boolean;
  begin_not_undoable_action(): void;
  can_redo(): boolean;
  can_undo(): boolean;
  change_case(
    case_type: ChangeCaseType,
    start: Gtk.TextIter,
    end: Gtk.TextIter
  ): void;
  create_source_mark(
    name: string | null,
    category: string,
    where: Gtk.TextIter
  ): Mark;
  create_source_tag(
    tag_name: string | null,
    first_property_name: string | null,
    ...args: any[]
  ): Gtk.TextTag;
  end_not_undoable_action(): void;
  ensure_highlight(start: Gtk.TextIter, end: Gtk.TextIter): void;
  forward_iter_to_source_mark(
    iter: Gtk.TextIter,
    category: string | null
  ): boolean;
  get_context_classes_at_iter(iter: Gtk.TextIter): string[];
  get_highlight_matching_brackets(): boolean;
  get_highlight_syntax(): boolean;
  get_implicit_trailing_newline(): boolean;
  get_language(): Language | null;
  get_max_undo_levels(): number;
  get_source_marks_at_iter(
    iter: Gtk.TextIter,
    category: string | null
  ): GLib.SList;
  get_source_marks_at_line(line: number, category: string | null): GLib.SList;
  get_style_scheme(): StyleScheme | null;
  get_undo_manager(): any | null;
  iter_backward_to_context_class_toggle(
    iter: Gtk.TextIter,
    context_class: string
  ): boolean;
  iter_forward_to_context_class_toggle(
    iter: Gtk.TextIter,
    context_class: string
  ): boolean;
  iter_has_context_class(iter: Gtk.TextIter, context_class: string): boolean;
  join_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
  redo(...args: any[]): any;
  remove_source_marks(
    start: Gtk.TextIter,
    end: Gtk.TextIter,
    category: string | null
  ): void;
  set_highlight_matching_brackets(highlight: boolean): void;
  set_highlight_syntax(highlight: boolean): void;
  set_implicit_trailing_newline(implicit_trailing_newline: boolean): void;
  set_language(language: Language | null): void;
  set_max_undo_levels(max_undo_levels: number): void;
  set_style_scheme(scheme: StyleScheme | null): void;
  set_undo_manager(manager: any | null): void;
  sort_lines(
    start: Gtk.TextIter,
    end: Gtk.TextIter,
    flags: SortFlags,
    column: number
  ): void;
  undo(...args: any[]): any;
  bracket_matched(iter: Gtk.TextIter, state: BracketMatchType): void;
  redo(...args: any[]): any;
  undo(...args: any[]): any;
}
export class Completion extends GObject.Object {
  accelerators: number;
  'auto-complete-delay': number;
  'proposal-page-size': number;
  'provider-page-size': number;
  'remember-info-visibility': boolean;
  'select-on-show': boolean;
  'show-headers': boolean;
  'show-icons': boolean;
  view: View;
  static parent_instance: GObject.Object;
  static priv: CompletionPrivate;
  add_provider(provider: any): boolean;
  block_interactive(): void;
  create_context(position: Gtk.TextIter | null): CompletionContext;
  get_info_window(): CompletionInfo;
  get_providers(): GLib.List;
  get_view(): View | null;
  hide(...args: any[]): any;
  move_window(iter: Gtk.TextIter): void;
  remove_provider(provider: any): boolean;
  show(...args: any[]): any;
  unblock_interactive(): void;
  activate_proposal(): void;
  hide(...args: any[]): any;
  move_cursor(step: Gtk.ScrollStep, num: number): void;
  move_page(step: Gtk.ScrollStep, num: number): void;
  populate_context(context: CompletionContext): void;
  proposal_activated(provider: any, proposal: any): boolean;
  show(...args: any[]): any;
}
export class CompletionContext extends GObject.InitiallyUnowned {
  activation: CompletionActivation;
  completion: Completion;
  iter: Gtk.TextIter;
  static parent: GObject.InitiallyUnowned;
  static priv: CompletionContextPrivate;
  add_proposals(
    provider: any,
    proposals: GLib.List | null,
    finished: boolean
  ): void;
  get_activation(): CompletionActivation;
  get_iter(iter: Gtk.TextIter): boolean;
  cancelled(): void;
}
export class CompletionInfo extends Gtk.Window {
  constructor();
  static parent: Gtk.Window;
  static priv: CompletionInfoPrivate;
  get_widget(): Gtk.Widget;
  move_to_iter(view: Gtk.TextView, iter: Gtk.TextIter | null): void;
  set_widget(widget: Gtk.Widget | null): void;
  before_show(): void;
}
export class CompletionItem extends GObject.Object {
  constructor(
    label: string,
    text: string,
    icon: GdkPixbuf.Pixbuf | null,
    info: string | null
  );
  gicon: Gio.Icon;
  icon: GdkPixbuf.Pixbuf;
  'icon-name': string;
  info: string;
  label: string;
  markup: string;
  text: string;
  static parent: GObject.Object;
  static priv: CompletionItemPrivate;
  set_gicon(gicon: Gio.Icon | null): void;
  set_icon(icon: GdkPixbuf.Pixbuf | null): void;
  set_icon_name(icon_name: string | null): void;
  set_info(info: string | null): void;
  set_label(label: string | null): void;
  set_markup(markup: string | null): void;
  set_text(text: string | null): void;
  static new2(): CompletionItem;
}
export class CompletionWords extends GObject.Object {
  constructor(name: string | null, icon: GdkPixbuf.Pixbuf | null);
  activation: CompletionActivation;
  icon: GdkPixbuf.Pixbuf;
  'interactive-delay': number;
  'minimum-word-size': number;
  name: string;
  priority: number;
  'proposals-batch-size': number;
  'scan-batch-size': number;
  static parent: GObject.Object;
  static priv: CompletionWordsPrivate;
  register(buffer: Gtk.TextBuffer): void;
  unregister(buffer: Gtk.TextBuffer): void;
}
export class File extends GObject.Object {
  constructor();
  'compression-type': CompressionType;
  encoding: Encoding;
  location: Gio.File;
  'newline-type': NewlineType;
  'read-only': boolean;
  static parent: GObject.Object;
  static priv: FilePrivate;
  check_file_on_disk(): void;
  get_compression_type(): CompressionType;
  get_encoding(): Encoding;
  get_location(): Gio.File;
  get_newline_type(): NewlineType;
  is_deleted(): boolean;
  is_externally_modified(): boolean;
  is_local(): boolean;
  is_readonly(): boolean;
  set_location(location: Gio.File | null): void;
  set_mount_operation_factory(
    callback: MountOperationFactory,
    user_data: object | null,
    notify: GLib.DestroyNotify | null
  ): void;
}
export class FileLoader extends GObject.Object {
  constructor(buffer: Buffer, file: File);
  buffer: Buffer;
  file: File;
  'input-stream': Gio.InputStream;
  location: Gio.File;
  static parent: GObject.Object;
  static priv: FileLoaderPrivate;
  get_buffer(): Buffer;
  get_compression_type(): CompressionType;
  get_encoding(): Encoding;
  get_file(): File;
  get_input_stream(): Gio.InputStream | null;
  get_location(): Gio.File | null;
  get_newline_type(): NewlineType;
  load_async(
    io_priority: number,
    cancellable: Gio.Cancellable | null,
    progress_callback: Gio.FileProgressCallback | null,
    progress_callback_data: object | null,
    progress_callback_notify: GLib.DestroyNotify | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  load_finish(result: Gio.AsyncResult): boolean;
  set_candidate_encodings(candidate_encodings: GLib.SList): void;
}
export class FileSaver extends GObject.Object {
  constructor(buffer: Buffer, file: File);
  buffer: Buffer;
  'compression-type': CompressionType;
  encoding: Encoding;
  file: File;
  flags: FileSaverFlags;
  location: Gio.File;
  'newline-type': NewlineType;
  static object: GObject.Object;
  static priv: FileSaverPrivate;
  get_buffer(): Buffer;
  get_compression_type(): CompressionType;
  get_encoding(): Encoding;
  get_file(): File;
  get_flags(): FileSaverFlags;
  get_location(): Gio.File;
  get_newline_type(): NewlineType;
  save_async(
    io_priority: number,
    cancellable: Gio.Cancellable | null,
    progress_callback: Gio.FileProgressCallback | null,
    progress_callback_data: object | null,
    progress_callback_notify: GLib.DestroyNotify | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  save_finish(result: Gio.AsyncResult): boolean;
  set_compression_type(compression_type: CompressionType): void;
  set_encoding(encoding: Encoding | null): void;
  set_flags(flags: FileSaverFlags): void;
  set_newline_type(newline_type: NewlineType): void;
}
export class Gutter extends GObject.Object {
  view: View;
  'window-type': Gtk.TextWindowType;
  xpad: number;
  ypad: number;
  static parent: GObject.Object;
  static priv: GutterPrivate;
  get_padding(xpad: number, ypad: number): void;
  get_renderer_at_pos(x: number, y: number): GutterRenderer | null;
  get_view(): View;
  get_window(): Gdk.Window;
  get_window_type(): Gtk.TextWindowType;
  insert(renderer: GutterRenderer, position: number): boolean;
  queue_draw(): void;
  remove(renderer: GutterRenderer): void;
  reorder(renderer: GutterRenderer, position: number): void;
  set_padding(xpad: number, ypad: number): void;
}
export class GutterRenderer extends GObject.InitiallyUnowned {
  'alignment-mode': GutterRendererAlignmentMode;
  'background-rgba': Gdk.RGBA;
  'background-set': boolean;
  size: number;
  view: Gtk.TextView;
  visible: boolean;
  'window-type': Gtk.TextWindowType;
  xalign: number;
  xpad: number;
  yalign: number;
  ypad: number;
  static parent: GObject.InitiallyUnowned;
  static priv: GutterRendererPrivate;
  activate(...args: any[]): any;
  begin(...args: any[]): any;
  draw(...args: any[]): any;
  end(...args: any[]): any;
  get_alignment(xalign?: number, yalign?: number): void;
  get_alignment_mode(): GutterRendererAlignmentMode;
  get_background(color?: Gdk.RGBA): boolean;
  get_padding(xpad?: number, ypad?: number): void;
  get_size(): number;
  get_view(): Gtk.TextView;
  get_visible(): boolean;
  get_window_type(): Gtk.TextWindowType;
  query_activatable(...args: any[]): any;
  query_data(...args: any[]): any;
  query_tooltip(...args: any[]): any;
  queue_draw(...args: any[]): any;
  set_alignment(xalign: number, yalign: number): void;
  set_alignment_mode(mode: GutterRendererAlignmentMode): void;
  set_background(color: Gdk.RGBA | null): void;
  set_padding(xpad: number, ypad: number): void;
  set_size(size: number): void;
  set_visible(visible: boolean): void;
  activate(...args: any[]): any;
  begin(...args: any[]): any;
  change_buffer(old_buffer: Gtk.TextBuffer | null): void;
  change_view(old_view: Gtk.TextView | null): void;
  draw(...args: any[]): any;
  end(...args: any[]): any;
  query_activatable(...args: any[]): any;
  query_data(...args: any[]): any;
  query_tooltip(...args: any[]): any;
  queue_draw(...args: any[]): any;
}
export class GutterRendererPixbuf extends GutterRenderer {
  constructor();
  gicon: Gio.Icon;
  'icon-name': string;
  pixbuf: GdkPixbuf.Pixbuf;
  'stock-id': string;
  static parent: any;
  static priv: any;
  get_gicon(): Gio.Icon;
  get_icon_name(): string;
  get_pixbuf(): GdkPixbuf.Pixbuf;
  get_stock_id(): string;
  set_gicon(icon: Gio.Icon | null): void;
  set_icon_name(icon_name: string | null): void;
  set_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_stock_id(stock_id: string | null): void;
}
export class GutterRendererText extends GutterRenderer {
  constructor();
  markup: string;
  text: string;
  static parent: any;
  static priv: any;
  measure(text: string, width?: number, height?: number): void;
  measure_markup(markup: string, width?: number, height?: number): void;
  set_markup(markup: string, length: number): void;
  set_text(text: string, length: number): void;
}
export class Language extends GObject.Object {
  hidden: boolean;
  id: string;
  name: string;
  section: string;
  static parent_instance: GObject.Object;
  static priv: LanguagePrivate;
  get_globs(): string[] | null;
  get_hidden(): boolean;
  get_id(): string;
  get_metadata(name: string): string | null;
  get_mime_types(): string[] | null;
  get_name(): string;
  get_section(): string;
  get_style_fallback(style_id: string): string | null;
  get_style_ids(): string[] | null;
  get_style_name(style_id: string): string | null;
}
export class LanguageManager extends GObject.Object {
  constructor();
  'language-ids': string[];
  'search-path': string[];
  static parent_instance: GObject.Object;
  static priv: LanguageManagerPrivate;
  get_language(id: string): Language | null;
  get_language_ids(): string[] | null;
  get_search_path(): string[];
  guess_language(
    filename: string | null,
    content_type: string | null
  ): Language | null;
  set_search_path(dirs: string[] | null): void;
  static get_default(): LanguageManager;
}
export class Map extends View {
  constructor();
  'font-desc': Pango.FontDescription;
  view: View;
  static parent_instance: View;
  get_view(): View | null;
  set_view(view: View): void;
}
export class Mark extends Gtk.TextMark {
  constructor(name: string, category: string);
  category: string;
  static parent_instance: Gtk.TextMark;
  static priv: MarkPrivate;
  get_category(): string;
  next(category: string | null): Mark | null;
  prev(category: string): Mark | null;
}
export class MarkAttributes extends GObject.Object {
  constructor();
  background: Gdk.RGBA;
  gicon: Gio.Icon;
  'icon-name': string;
  pixbuf: GdkPixbuf.Pixbuf;
  'stock-id': string;
  static parent: GObject.Object;
  static priv: MarkAttributesPrivate;
  get_background(background: Gdk.RGBA): boolean;
  get_gicon(): Gio.Icon;
  get_icon_name(): string;
  get_pixbuf(): GdkPixbuf.Pixbuf;
  get_stock_id(): string;
  get_tooltip_markup(mark: Mark): string;
  get_tooltip_text(mark: Mark): string;
  render_icon(widget: Gtk.Widget, size: number): GdkPixbuf.Pixbuf;
  set_background(background: Gdk.RGBA): void;
  set_gicon(gicon: Gio.Icon): void;
  set_icon_name(icon_name: string): void;
  set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
  set_stock_id(stock_id: string): void;
}
export class PrintCompositor extends GObject.Object {
  constructor(buffer: Buffer);
  'body-font-name': string;
  buffer: Buffer;
  'footer-font-name': string;
  'header-font-name': string;
  'highlight-syntax': boolean;
  'line-numbers-font-name': string;
  'n-pages': number;
  'print-footer': boolean;
  'print-header': boolean;
  'print-line-numbers': number;
  'tab-width': number;
  'wrap-mode': Gtk.WrapMode;
  static parent_instance: GObject.Object;
  static priv: PrintCompositorPrivate;
  draw_page(context: Gtk.PrintContext, page_nr: number): void;
  get_body_font_name(): string;
  get_bottom_margin(unit: Gtk.Unit): number;
  get_buffer(): Buffer;
  get_footer_font_name(): string;
  get_header_font_name(): string;
  get_highlight_syntax(): boolean;
  get_left_margin(unit: Gtk.Unit): number;
  get_line_numbers_font_name(): string;
  get_n_pages(): number;
  get_pagination_progress(): number;
  get_print_footer(): boolean;
  get_print_header(): boolean;
  get_print_line_numbers(): number;
  get_right_margin(unit: Gtk.Unit): number;
  get_tab_width(): number;
  get_top_margin(unit: Gtk.Unit): number;
  get_wrap_mode(): Gtk.WrapMode;
  paginate(context: Gtk.PrintContext): boolean;
  set_body_font_name(font_name: string): void;
  set_bottom_margin(margin: number, unit: Gtk.Unit): void;
  set_footer_font_name(font_name: string | null): void;
  set_footer_format(
    separator: boolean,
    left: string | null,
    center: string | null,
    right: string | null
  ): void;
  set_header_font_name(font_name: string | null): void;
  set_header_format(
    separator: boolean,
    left: string | null,
    center: string | null,
    right: string | null
  ): void;
  set_highlight_syntax(highlight: boolean): void;
  set_left_margin(margin: number, unit: Gtk.Unit): void;
  set_line_numbers_font_name(font_name: string | null): void;
  set_print_footer(print: boolean): void;
  set_print_header(print: boolean): void;
  set_print_line_numbers(interval: number): void;
  set_right_margin(margin: number, unit: Gtk.Unit): void;
  set_tab_width(width: number): void;
  set_top_margin(margin: number, unit: Gtk.Unit): void;
  set_wrap_mode(wrap_mode: Gtk.WrapMode): void;
}
export class Region extends GObject.Object {
  constructor(buffer: Gtk.TextBuffer);
  buffer: Gtk.TextBuffer;
  static parent_instance: GObject.Object;
  add_region(region_to_add: Region | null): void;
  add_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
  get_bounds(start?: Gtk.TextIter, end?: Gtk.TextIter): boolean;
  get_buffer(): Gtk.TextBuffer | null;
  get_start_region_iter(iter: RegionIter): void;
  intersect_region(region2: Region | null): Region | null;
  intersect_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): Region | null;
  is_empty(): boolean;
  subtract_region(region_to_subtract: Region | null): void;
  subtract_subregion(_start: Gtk.TextIter, _end: Gtk.TextIter): void;
  to_string(): string | null;
}
export class SearchContext extends GObject.Object {
  constructor(buffer: Buffer, settings: SearchSettings | null);
  buffer: Buffer;
  highlight: boolean;
  'match-style': Style;
  'occurrences-count': number;
  'regex-error': object;
  settings: SearchSettings;
  static parent: GObject.Object;
  static priv: SearchContextPrivate;
  backward(
    iter: Gtk.TextIter,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter
  ): boolean;
  backward2(
    iter: Gtk.TextIter,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter,
    has_wrapped_around?: boolean
  ): boolean;
  backward_async(
    iter: Gtk.TextIter,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  backward_finish(
    result: Gio.AsyncResult,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter
  ): boolean;
  backward_finish2(
    result: Gio.AsyncResult,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter,
    has_wrapped_around?: boolean
  ): boolean;
  forward(
    iter: Gtk.TextIter,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter
  ): boolean;
  forward2(
    iter: Gtk.TextIter,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter,
    has_wrapped_around?: boolean
  ): boolean;
  forward_async(
    iter: Gtk.TextIter,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  forward_finish(
    result: Gio.AsyncResult,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter
  ): boolean;
  forward_finish2(
    result: Gio.AsyncResult,
    match_start?: Gtk.TextIter,
    match_end?: Gtk.TextIter,
    has_wrapped_around?: boolean
  ): boolean;
  get_buffer(): Buffer;
  get_highlight(): boolean;
  get_match_style(): Style;
  get_occurrence_position(
    match_start: Gtk.TextIter,
    match_end: Gtk.TextIter
  ): number;
  get_occurrences_count(): number;
  get_regex_error(): GLib.Error | null;
  get_settings(): SearchSettings;
  replace(
    match_start: Gtk.TextIter,
    match_end: Gtk.TextIter,
    replace: string,
    replace_length: number
  ): boolean;
  replace2(
    match_start: Gtk.TextIter,
    match_end: Gtk.TextIter,
    replace: string,
    replace_length: number
  ): boolean;
  replace_all(replace: string, replace_length: number): number;
  set_highlight(highlight: boolean): void;
  set_match_style(match_style: Style | null): void;
  set_settings(settings: SearchSettings | null): void;
}
export class SearchSettings extends GObject.Object {
  constructor();
  'at-word-boundaries': boolean;
  'case-sensitive': boolean;
  'regex-enabled': boolean;
  'search-text': string;
  'wrap-around': boolean;
  static parent: GObject.Object;
  static priv: SearchSettingsPrivate;
  get_at_word_boundaries(): boolean;
  get_case_sensitive(): boolean;
  get_regex_enabled(): boolean;
  get_search_text(): string | null;
  get_wrap_around(): boolean;
  set_at_word_boundaries(at_word_boundaries: boolean): void;
  set_case_sensitive(case_sensitive: boolean): void;
  set_regex_enabled(regex_enabled: boolean): void;
  set_search_text(search_text: string | null): void;
  set_wrap_around(wrap_around: boolean): void;
}
export class SpaceDrawer extends GObject.Object {
  constructor();
  'enable-matrix': boolean;
  matrix: GLib.Variant;
  static parent: GObject.Object;
  static priv: SpaceDrawerPrivate;
  bind_matrix_setting(
    settings: Gio.Settings,
    key: string,
    flags: Gio.SettingsBindFlags
  ): void;
  get_enable_matrix(): boolean;
  get_matrix(): GLib.Variant;
  get_types_for_locations(locations: SpaceLocationFlags): SpaceTypeFlags;
  set_enable_matrix(enable_matrix: boolean): void;
  set_matrix(matrix: GLib.Variant | null): void;
  set_types_for_locations(
    locations: SpaceLocationFlags,
    types: SpaceTypeFlags
  ): void;
}
export class Style extends GObject.Object {
  background: string;
  'background-set': boolean;
  bold: boolean;
  'bold-set': boolean;
  foreground: string;
  'foreground-set': boolean;
  italic: boolean;
  'italic-set': boolean;
  'line-background': string;
  'line-background-set': boolean;
  'pango-underline': Pango.Underline;
  scale: string;
  'scale-set': boolean;
  strikethrough: boolean;
  'strikethrough-set': boolean;
  underline: boolean;
  'underline-color': string;
  'underline-color-set': boolean;
  'underline-set': boolean;
  apply(tag: Gtk.TextTag): void;
  copy(): Style;
}
export class StyleScheme extends GObject.Object {
  description: string;
  filename: string;
  id: string;
  name: string;
  static base: GObject.Object;
  static priv: StyleSchemePrivate;
  get_authors(): string[] | null;
  get_description(): string | null;
  get_filename(): string | null;
  get_id(): string;
  get_name(): string;
  get_style(style_id: string): Style | null;
}
export class StyleSchemeChooserButton extends Gtk.Button {
  constructor();
  static parent: Gtk.Button;
}
export class StyleSchemeChooserWidget extends Gtk.Bin {
  constructor();
  static parent: Gtk.Bin;
}
export class StyleSchemeManager extends GObject.Object {
  constructor();
  'scheme-ids': string[];
  'search-path': string[];
  static parent: GObject.Object;
  static priv: StyleSchemeManagerPrivate;
  append_search_path(path: string): void;
  force_rescan(): void;
  get_scheme(scheme_id: string): StyleScheme;
  get_scheme_ids(): string[] | null;
  get_search_path(): string[];
  prepend_search_path(path: string): void;
  set_search_path(path: string[] | null): void;
  static get_default(): StyleSchemeManager;
}
export class Tag extends Gtk.TextTag {
  constructor(name: string | null);
  'draw-spaces': boolean;
  'draw-spaces-set': boolean;
  static parent_instance: Gtk.TextTag;
}
export class View extends Gtk.TextView {
  constructor();
  'auto-indent': boolean;
  'background-pattern': BackgroundPatternType;
  completion: Completion;
  'draw-spaces': DrawSpacesFlags;
  'highlight-current-line': boolean;
  'indent-on-tab': boolean;
  'indent-width': number;
  'insert-spaces-instead-of-tabs': boolean;
  'right-margin-position': number;
  'show-line-marks': boolean;
  'show-line-numbers': boolean;
  'show-right-margin': boolean;
  'smart-backspace': boolean;
  'smart-home-end': SmartHomeEndType;
  'space-drawer': SpaceDrawer;
  'tab-width': number;
  static parent: Gtk.TextView;
  static priv: ViewPrivate;
  get_auto_indent(): boolean;
  get_background_pattern(): BackgroundPatternType;
  get_completion(): Completion;
  get_draw_spaces(): DrawSpacesFlags;
  get_gutter(window_type: Gtk.TextWindowType): Gutter;
  get_highlight_current_line(): boolean;
  get_indent_on_tab(): boolean;
  get_indent_width(): number;
  get_insert_spaces_instead_of_tabs(): boolean;
  get_mark_attributes(category: string, priority: number): MarkAttributes;
  get_right_margin_position(): number;
  get_show_line_marks(): boolean;
  get_show_line_numbers(): boolean;
  get_show_right_margin(): boolean;
  get_smart_backspace(): boolean;
  get_smart_home_end(): SmartHomeEndType;
  get_space_drawer(): SpaceDrawer;
  get_tab_width(): number;
  get_visual_column(iter: Gtk.TextIter): number;
  indent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
  set_auto_indent(enable: boolean): void;
  set_background_pattern(background_pattern: BackgroundPatternType): void;
  set_draw_spaces(flags: DrawSpacesFlags): void;
  set_highlight_current_line(highlight: boolean): void;
  set_indent_on_tab(enable: boolean): void;
  set_indent_width(width: number): void;
  set_insert_spaces_instead_of_tabs(enable: boolean): void;
  set_mark_attributes(
    category: string,
    attributes: MarkAttributes,
    priority: number
  ): void;
  set_right_margin_position(pos: number): void;
  set_show_line_marks(show: boolean): void;
  set_show_line_numbers(show: boolean): void;
  set_show_right_margin(show: boolean): void;
  set_smart_backspace(smart_backspace: boolean): void;
  set_smart_home_end(smart_home_end: SmartHomeEndType): void;
  set_tab_width(width: number): void;
  unindent_lines(start: Gtk.TextIter, end: Gtk.TextIter): void;
  line_mark_activated(iter: Gtk.TextIter, event: Gdk.Event): void;
  move_lines(copy: boolean, step: number): void;
  move_words(step: number): void;
  redo(): void;
  show_completion(): void;
  undo(): void;
}
export class BufferClass {
  static parent_class: Gtk.TextBufferClass;
  static undo: (buffer: Buffer) => void;
  static redo: (buffer: Buffer) => void;
  static bracket_matched: (
    buffer: Buffer,
    iter: Gtk.TextIter,
    state: BracketMatchType
  ) => void;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
  static _gtk_source_reserved3: () => void;
}
export class BufferPrivate {}
export class CompletionClass {
  static parent_class: GObject.ObjectClass;
  static proposal_activated: (
    completion: Completion,
    provider: any,
    proposal: any
  ) => boolean;
  static show: (completion: Completion) => void;
  static hide: (completion: Completion) => void;
  static populate_context: (
    completion: Completion,
    context: CompletionContext
  ) => void;
  static move_cursor: (
    completion: Completion,
    step: Gtk.ScrollStep,
    num: number
  ) => void;
  static move_page: (
    completion: Completion,
    step: Gtk.ScrollStep,
    num: number
  ) => void;
  static activate_proposal: (completion: Completion) => void;
}
export class CompletionContextClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static cancelled: (context: CompletionContext) => void;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
  static _gtk_source_reserved3: () => void;
}
export class CompletionContextPrivate {}
export class CompletionInfoClass {
  static parent_class: Gtk.WindowClass;
  static before_show: (info: CompletionInfo) => void;
}
export class CompletionInfoPrivate {}
export class CompletionItemClass {
  static parent_class: GObject.ObjectClass;
}
export class CompletionItemPrivate {}
export class CompletionPrivate {}
export class CompletionProposalIface {
  static parent: GObject.TypeInterface;
  static get_label: (proposal: any) => string;
  static get_markup: (proposal: any) => string;
  static get_text: (proposal: any) => string;
  static get_icon: (proposal: any) => GdkPixbuf.Pixbuf | null;
  static get_icon_name: (proposal: any) => string | null;
  static get_gicon: (proposal: any) => Gio.Icon | null;
  static get_info: (proposal: any) => string | null;
  static hash: (proposal: any) => number;
  static equal: (proposal: any, other: any) => boolean;
  static changed: (proposal: any) => void;
}
export class CompletionProviderIface {
  static g_iface: GObject.TypeInterface;
  static get_name: (provider: any) => string;
  static get_icon: (provider: any) => GdkPixbuf.Pixbuf | null;
  static get_icon_name: (provider: any) => string | null;
  static get_gicon: (provider: any) => Gio.Icon | null;
  static populate: (provider: any, context: CompletionContext) => void;
  static match: (provider: any, context: CompletionContext) => boolean;
  static get_activation: (provider: any) => CompletionActivation;
  static get_info_widget: (provider: any, proposal: any) => Gtk.Widget | null;
  static update_info: (
    provider: any,
    proposal: any,
    info: CompletionInfo
  ) => void;
  static get_start_iter: (
    provider: any,
    context: CompletionContext,
    proposal: any,
    iter: Gtk.TextIter
  ) => boolean;
  static activate_proposal: (
    provider: any,
    proposal: any,
    iter: Gtk.TextIter
  ) => boolean;
  static get_interactive_delay: (provider: any) => number;
  static get_priority: (provider: any) => number;
}
export class CompletionWordsClass {
  static parent_class: GObject.ObjectClass;
}
export class CompletionWordsPrivate {}
export class Encoding {
  copy(): Encoding;
  free(): void;
  get_charset(): string;
  get_name(): string;
  to_string(): string;
  static get_all(): GLib.SList;
  static get_current(): Encoding;
  static get_default_candidates(): GLib.SList;
  static get_from_charset(charset: string): Encoding | null;
  static get_utf8(): Encoding;
}
export class FileClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class FileLoaderClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class FileLoaderPrivate {}
export class FilePrivate {}
export class FileSaverClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class FileSaverPrivate {}
export class GutterClass {
  static parent_class: GObject.ObjectClass;
}
export class GutterPrivate {}
export class GutterRendererClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static begin: (
    renderer: GutterRenderer,
    cr: cairo.Context,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    start: Gtk.TextIter,
    end: Gtk.TextIter
  ) => void;
  static draw: (
    renderer: GutterRenderer,
    cr: cairo.Context,
    background_area: Gdk.Rectangle,
    cell_area: Gdk.Rectangle,
    start: Gtk.TextIter,
    end: Gtk.TextIter,
    state: GutterRendererState
  ) => void;
  static end: (renderer: GutterRenderer) => void;
  static change_view: (
    renderer: GutterRenderer,
    old_view: Gtk.TextView | null
  ) => void;
  static change_buffer: (
    renderer: GutterRenderer,
    old_buffer: Gtk.TextBuffer | null
  ) => void;
  static query_activatable: (
    renderer: GutterRenderer,
    iter: Gtk.TextIter,
    area: Gdk.Rectangle,
    event: Gdk.Event
  ) => boolean;
  static activate: (
    renderer: GutterRenderer,
    iter: Gtk.TextIter,
    area: Gdk.Rectangle,
    event: Gdk.Event
  ) => void;
  static queue_draw: (renderer: GutterRenderer) => void;
  static query_tooltip: (
    renderer: GutterRenderer,
    iter: Gtk.TextIter,
    area: Gdk.Rectangle,
    x: number,
    y: number,
    tooltip: Gtk.Tooltip
  ) => boolean;
  static query_data: (
    renderer: GutterRenderer,
    start: Gtk.TextIter,
    end: Gtk.TextIter,
    state: GutterRendererState
  ) => void;
}
export class GutterRendererPixbufClass {
  static parent_class: GutterRendererClass;
}
export class GutterRendererPixbufPrivate {}
export class GutterRendererPrivate {}
export class GutterRendererTextClass {
  static parent_class: GutterRendererClass;
}
export class GutterRendererTextPrivate {}
export class LanguageClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
}
export class LanguageManagerClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
  static _gtk_source_reserved3: () => void;
  static _gtk_source_reserved4: () => void;
}
export class LanguageManagerPrivate {}
export class LanguagePrivate {}
export class MapClass {
  static parent_class: ViewClass;
  static padding: object[];
}
export class MarkAttributesClass {
  static parent_class: GObject.ObjectClass;
}
export class MarkAttributesPrivate {}
export class MarkClass {
  static parent_class: Gtk.TextMarkClass;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
}
export class MarkPrivate {}
export class PrintCompositorClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
}
export class PrintCompositorPrivate {}
export class RegionClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class RegionIter {
  static dummy1: object;
  static dummy2: number;
  static dummy3: object;
  get_subregion(start?: Gtk.TextIter, end?: Gtk.TextIter): boolean;
  is_end(): boolean;
  next(): boolean;
}
export class SearchContextClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class SearchContextPrivate {}
export class SearchSettingsClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class SearchSettingsPrivate {}
export class SpaceDrawerClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class SpaceDrawerPrivate {}
export class StyleClass {}
export class StyleSchemeChooserButtonClass {
  static parent: Gtk.ButtonClass;
}
export class StyleSchemeChooserInterface {
  static base_interface: GObject.TypeInterface;
  static get_style_scheme: (chooser: any) => StyleScheme;
  static set_style_scheme: (chooser: any, scheme: StyleScheme) => void;
  static padding: object[];
}
export class StyleSchemeChooserWidgetClass {
  static parent: Gtk.BinClass;
}
export class StyleSchemeClass {
  static base_class: GObject.ObjectClass;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
}
export class StyleSchemeManagerClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_source_reserved1: () => void;
  static _gtk_source_reserved2: () => void;
  static _gtk_source_reserved3: () => void;
  static _gtk_source_reserved4: () => void;
}
export class StyleSchemeManagerPrivate {}
export class StyleSchemePrivate {}
export class TagClass {
  static parent_class: Gtk.TextTagClass;
  static padding: object[];
}
export class UndoManagerIface {
  static parent: GObject.TypeInterface;
  static can_undo: (manager: any) => boolean;
  static can_redo: (manager: any) => boolean;
  static undo: (manager: any) => void;
  static redo: (manager: any) => void;
  static begin_not_undoable_action: (manager: any) => void;
  static end_not_undoable_action: (manager: any) => void;
  static can_undo_changed: (manager: any) => void;
  static can_redo_changed: (manager: any) => void;
}
export class ViewClass {
  static parent_class: Gtk.TextViewClass;
  static undo: (view: View) => void;
  static redo: (view: View) => void;
  static line_mark_activated: (
    view: View,
    iter: Gtk.TextIter,
    event: Gdk.Event
  ) => void;
  static show_completion: (view: View) => void;
  static move_lines: (view: View, copy: boolean, step: number) => void;
  static move_words: (view: View, step: number) => void;
}
export class ViewPrivate {}
export function completion_error_quark(): GLib.Quark;
export function encoding_get_all(): GLib.SList;
export function encoding_get_current(): Encoding;
export function encoding_get_default_candidates(): GLib.SList;
export function encoding_get_from_charset(charset: string): Encoding | null;
export function encoding_get_utf8(): Encoding;
export function file_loader_error_quark(): GLib.Quark;
export function file_saver_error_quark(): GLib.Quark;
export function utils_escape_search_text(text: string): string;
export function utils_unescape_search_text(text: string): string;
