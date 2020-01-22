import * as DBus from './d-bus';
import * as GObject from './g-object';
import * as GLib from './g-lib';
export const COMPONENTLAYER_COUNT: number;
export const COORD_TYPE_COUNT: number;
export const DBUS_INTERFACE_ACCESSIBLE: string;
export const DBUS_INTERFACE_ACTION: string;
export const DBUS_INTERFACE_APPLICATION: string;
export const DBUS_INTERFACE_CACHE: string;
export const DBUS_INTERFACE_COLLECTION: string;
export const DBUS_INTERFACE_COMPONENT: string;
export const DBUS_INTERFACE_DEC: string;
export const DBUS_INTERFACE_DEVICE_EVENT_LISTENER: string;
export const DBUS_INTERFACE_DOCUMENT: string;
export const DBUS_INTERFACE_EDITABLE_TEXT: string;
export const DBUS_INTERFACE_EVENT_KEYBOARD: string;
export const DBUS_INTERFACE_EVENT_MOUSE: string;
export const DBUS_INTERFACE_EVENT_OBJECT: string;
export const DBUS_INTERFACE_EVENT_SCREEN_READER: string;
export const DBUS_INTERFACE_HYPERLINK: string;
export const DBUS_INTERFACE_HYPERTEXT: string;
export const DBUS_INTERFACE_IMAGE: string;
export const DBUS_INTERFACE_REGISTRY: string;
export const DBUS_INTERFACE_SELECTION: string;
export const DBUS_INTERFACE_SOCKET: string;
export const DBUS_INTERFACE_TABLE: string;
export const DBUS_INTERFACE_TABLE_CELL: string;
export const DBUS_INTERFACE_TEXT: string;
export const DBUS_INTERFACE_VALUE: string;
export const DBUS_NAME_REGISTRY: string;
export const DBUS_PATH_DEC: string;
export const DBUS_PATH_NULL: string;
export const DBUS_PATH_REGISTRY: string;
export const DBUS_PATH_ROOT: string;
export const DBUS_PATH_SCREEN_READER: string;
export const EVENTTYPE_COUNT: number;
export const KEYEVENTTYPE_COUNT: number;
export const KEYSYNTHTYPE_COUNT: number;
export const MATCHTYPES_COUNT: number;
export const MODIFIERTYPE_COUNT: number;
export const RELATIONTYPE_COUNT: number;
export const ROLE_COUNT: number;
export const SCROLLTYPE_COUNT: number;
export const SORTORDER_COUNT: number;
export const STATETYPE_COUNT: number;
export const TEXT_BOUNDARY_TYPE_COUNT: number;
export const TEXT_CLIP_TYPE_COUNT: number;
export enum CollectionMatchType {
  ATSPI_Collection_MATCH_INVALID,
  ATSPI_Collection_MATCH_ALL,
  ATSPI_Collection_MATCH_ANY,
  ATSPI_Collection_MATCH_NONE,
  ATSPI_Collection_MATCH_EMPTY,
  ATSPI_Collection_MATCH_LAST_DEFINED,
}
export enum CollectionSortOrder {
  ATSPI_Collection_SORT_ORDER_INVALID,
  ATSPI_Collection_SORT_ORDER_CANONICAL,
  ATSPI_Collection_SORT_ORDER_FLOW,
  ATSPI_Collection_SORT_ORDER_TAB,
  ATSPI_Collection_SORT_ORDER_REVERSE_CANONICAL,
  ATSPI_Collection_SORT_ORDER_REVERSE_FLOW,
  ATSPI_Collection_SORT_ORDER_REVERSE_TAB,
  ATSPI_Collection_SORT_ORDER_LAST_DEFINED,
}
export enum CollectionTreeTraversalType {
  ATSPI_Collection_TREE_RESTRICT_CHILDREN,
  ATSPI_Collection_TREE_RESTRICT_SIBLING,
  ATSPI_Collection_TREE_INORDER,
  ATSPI_Collection_TREE_LAST_DEFINED,
}
export enum ComponentLayer {
  ATSPI_LAYER_INVALID,
  ATSPI_LAYER_BACKGROUND,
  ATSPI_LAYER_CANVAS,
  ATSPI_LAYER_WIDGET,
  ATSPI_LAYER_MDI,
  ATSPI_LAYER_POPUP,
  ATSPI_LAYER_OVERLAY,
  ATSPI_LAYER_WINDOW,
  ATSPI_LAYER_LAST_DEFINED,
}
export enum CoordType {
  ATSPI_COORD_TYPE_SCREEN,
  ATSPI_COORD_TYPE_WINDOW,
  ATSPI_COORD_TYPE_PARENT,
}
export enum EventType {
  ATSPI_KEY_PRESSED_EVENT,
  ATSPI_KEY_RELEASED_EVENT,
  ATSPI_BUTTON_PRESSED_EVENT,
  ATSPI_BUTTON_RELEASED_EVENT,
}
export enum KeyEventType {
  ATSPI_KEY_PRESSED,
  ATSPI_KEY_RELEASED,
}
export enum KeySynthType {
  ATSPI_KEY_PRESS,
  ATSPI_KEY_RELEASE,
  ATSPI_KEY_PRESSRELEASE,
  ATSPI_KEY_SYM,
  ATSPI_KEY_STRING,
  ATSPI_KEY_LOCKMODIFIERS,
  ATSPI_KEY_UNLOCKMODIFIERS,
}
export enum LocaleType {
  ATSPI_LOCALE_TYPE_MESSAGES,
  ATSPI_LOCALE_TYPE_COLLATE,
  ATSPI_LOCALE_TYPE_CTYPE,
  ATSPI_LOCALE_TYPE_MONETARY,
  ATSPI_LOCALE_TYPE_NUMERIC,
  ATSPI_LOCALE_TYPE_TIME,
}
export enum ModifierType {
  ATSPI_MODIFIER_SHIFT,
  ATSPI_MODIFIER_SHIFTLOCK,
  ATSPI_MODIFIER_CONTROL,
  ATSPI_MODIFIER_ALT,
  ATSPI_MODIFIER_META,
  ATSPI_MODIFIER_META2,
  ATSPI_MODIFIER_META3,
  ATSPI_MODIFIER_NUMLOCK,
}
export enum RelationType {
  ATSPI_RELATION_NULL,
  ATSPI_RELATION_LABEL_FOR,
  ATSPI_RELATION_LABELLED_BY,
  ATSPI_RELATION_CONTROLLER_FOR,
  ATSPI_RELATION_CONTROLLED_BY,
  ATSPI_RELATION_MEMBER_OF,
  ATSPI_RELATION_TOOLTIP_FOR,
  ATSPI_RELATION_NODE_CHILD_OF,
  ATSPI_RELATION_NODE_PARENT_OF,
  ATSPI_RELATION_EXTENDED,
  ATSPI_RELATION_FLOWS_TO,
  ATSPI_RELATION_FLOWS_FROM,
  ATSPI_RELATION_SUBWINDOW_OF,
  ATSPI_RELATION_EMBEDS,
  ATSPI_RELATION_EMBEDDED_BY,
  ATSPI_RELATION_POPUP_FOR,
  ATSPI_RELATION_PARENT_WINDOW_OF,
  ATSPI_RELATION_DESCRIPTION_FOR,
  ATSPI_RELATION_DESCRIBED_BY,
  ATSPI_RELATION_DETAILS,
  ATSPI_RELATION_DETAILS_FOR,
  ATSPI_RELATION_ERROR_MESSAGE,
  ATSPI_RELATION_ERROR_FOR,
  ATSPI_RELATION_LAST_DEFINED,
}
export enum Role {
  ATSPI_ROLE_INVALID,
  ATSPI_ROLE_ACCELERATOR_LABEL,
  ATSPI_ROLE_ALERT,
  ATSPI_ROLE_ANIMATION,
  ATSPI_ROLE_ARROW,
  ATSPI_ROLE_CALENDAR,
  ATSPI_ROLE_CANVAS,
  ATSPI_ROLE_CHECK_BOX,
  ATSPI_ROLE_CHECK_MENU_ITEM,
  ATSPI_ROLE_COLOR_CHOOSER,
  ATSPI_ROLE_COLUMN_HEADER,
  ATSPI_ROLE_COMBO_BOX,
  ATSPI_ROLE_DATE_EDITOR,
  ATSPI_ROLE_DESKTOP_ICON,
  ATSPI_ROLE_DESKTOP_FRAME,
  ATSPI_ROLE_DIAL,
  ATSPI_ROLE_DIALOG,
  ATSPI_ROLE_DIRECTORY_PANE,
  ATSPI_ROLE_DRAWING_AREA,
  ATSPI_ROLE_FILE_CHOOSER,
  ATSPI_ROLE_FILLER,
  ATSPI_ROLE_FOCUS_TRAVERSABLE,
  ATSPI_ROLE_FONT_CHOOSER,
  ATSPI_ROLE_FRAME,
  ATSPI_ROLE_GLASS_PANE,
  ATSPI_ROLE_HTML_CONTAINER,
  ATSPI_ROLE_ICON,
  ATSPI_ROLE_IMAGE,
  ATSPI_ROLE_INTERNAL_FRAME,
  ATSPI_ROLE_LABEL,
  ATSPI_ROLE_LAYERED_PANE,
  ATSPI_ROLE_LIST,
  ATSPI_ROLE_LIST_ITEM,
  ATSPI_ROLE_MENU,
  ATSPI_ROLE_MENU_BAR,
  ATSPI_ROLE_MENU_ITEM,
  ATSPI_ROLE_OPTION_PANE,
  ATSPI_ROLE_PAGE_TAB,
  ATSPI_ROLE_PAGE_TAB_LIST,
  ATSPI_ROLE_PANEL,
  ATSPI_ROLE_PASSWORD_TEXT,
  ATSPI_ROLE_POPUP_MENU,
  ATSPI_ROLE_PROGRESS_BAR,
  ATSPI_ROLE_PUSH_BUTTON,
  ATSPI_ROLE_RADIO_BUTTON,
  ATSPI_ROLE_RADIO_MENU_ITEM,
  ATSPI_ROLE_ROOT_PANE,
  ATSPI_ROLE_ROW_HEADER,
  ATSPI_ROLE_SCROLL_BAR,
  ATSPI_ROLE_SCROLL_PANE,
  ATSPI_ROLE_SEPARATOR,
  ATSPI_ROLE_SLIDER,
  ATSPI_ROLE_SPIN_BUTTON,
  ATSPI_ROLE_SPLIT_PANE,
  ATSPI_ROLE_STATUS_BAR,
  ATSPI_ROLE_TABLE,
  ATSPI_ROLE_TABLE_CELL,
  ATSPI_ROLE_TABLE_COLUMN_HEADER,
  ATSPI_ROLE_TABLE_ROW_HEADER,
  ATSPI_ROLE_TEAROFF_MENU_ITEM,
  ATSPI_ROLE_TERMINAL,
  ATSPI_ROLE_TEXT,
  ATSPI_ROLE_TOGGLE_BUTTON,
  ATSPI_ROLE_TOOL_BAR,
  ATSPI_ROLE_TOOL_TIP,
  ATSPI_ROLE_TREE,
  ATSPI_ROLE_TREE_TABLE,
  ATSPI_ROLE_UNKNOWN,
  ATSPI_ROLE_VIEWPORT,
  ATSPI_ROLE_WINDOW,
  ATSPI_ROLE_EXTENDED,
  ATSPI_ROLE_HEADER,
  ATSPI_ROLE_FOOTER,
  ATSPI_ROLE_PARAGRAPH,
  ATSPI_ROLE_RULER,
  ATSPI_ROLE_APPLICATION,
  ATSPI_ROLE_AUTOCOMPLETE,
  ATSPI_ROLE_EDITBAR,
  ATSPI_ROLE_EMBEDDED,
  ATSPI_ROLE_ENTRY,
  ATSPI_ROLE_CHART,
  ATSPI_ROLE_CAPTION,
  ATSPI_ROLE_DOCUMENT_FRAME,
  ATSPI_ROLE_HEADING,
  ATSPI_ROLE_PAGE,
  ATSPI_ROLE_SECTION,
  ATSPI_ROLE_REDUNDANT_OBJECT,
  ATSPI_ROLE_FORM,
  ATSPI_ROLE_LINK,
  ATSPI_ROLE_INPUT_METHOD_WINDOW,
  ATSPI_ROLE_TABLE_ROW,
  ATSPI_ROLE_TREE_ITEM,
  ATSPI_ROLE_DOCUMENT_SPREADSHEET,
  ATSPI_ROLE_DOCUMENT_PRESENTATION,
  ATSPI_ROLE_DOCUMENT_TEXT,
  ATSPI_ROLE_DOCUMENT_WEB,
  ATSPI_ROLE_DOCUMENT_EMAIL,
  ATSPI_ROLE_COMMENT,
  ATSPI_ROLE_LIST_BOX,
  ATSPI_ROLE_GROUPING,
  ATSPI_ROLE_IMAGE_MAP,
  ATSPI_ROLE_NOTIFICATION,
  ATSPI_ROLE_INFO_BAR,
  ATSPI_ROLE_LEVEL_BAR,
  ATSPI_ROLE_TITLE_BAR,
  ATSPI_ROLE_BLOCK_QUOTE,
  ATSPI_ROLE_AUDIO,
  ATSPI_ROLE_VIDEO,
  ATSPI_ROLE_DEFINITION,
  ATSPI_ROLE_ARTICLE,
  ATSPI_ROLE_LANDMARK,
  ATSPI_ROLE_LOG,
  ATSPI_ROLE_MARQUEE,
  ATSPI_ROLE_MATH,
  ATSPI_ROLE_RATING,
  ATSPI_ROLE_TIMER,
  ATSPI_ROLE_STATIC,
  ATSPI_ROLE_MATH_FRACTION,
  ATSPI_ROLE_MATH_ROOT,
  ATSPI_ROLE_SUBSCRIPT,
  ATSPI_ROLE_SUPERSCRIPT,
  ATSPI_ROLE_DESCRIPTION_LIST,
  ATSPI_ROLE_DESCRIPTION_TERM,
  ATSPI_ROLE_DESCRIPTION_VALUE,
  ATSPI_ROLE_FOOTNOTE,
  ATSPI_ROLE_CONTENT_DELETION,
  ATSPI_ROLE_CONTENT_INSERTION,
  ATSPI_ROLE_LAST_DEFINED,
}
export enum ScrollType {
  ATSPI_SCROLL_TOP_LEFT,
  ATSPI_SCROLL_BOTTOM_RIGHT,
  ATSPI_SCROLL_TOP_EDGE,
  ATSPI_SCROLL_BOTTOM_EDGE,
  ATSPI_SCROLL_LEFT_EDGE,
  ATSPI_SCROLL_RIGHT_EDGE,
  ATSPI_SCROLL_ANYWHERE,
}
export enum StateType {
  ATSPI_STATE_INVALID,
  ATSPI_STATE_ACTIVE,
  ATSPI_STATE_ARMED,
  ATSPI_STATE_BUSY,
  ATSPI_STATE_CHECKED,
  ATSPI_STATE_COLLAPSED,
  ATSPI_STATE_DEFUNCT,
  ATSPI_STATE_EDITABLE,
  ATSPI_STATE_ENABLED,
  ATSPI_STATE_EXPANDABLE,
  ATSPI_STATE_EXPANDED,
  ATSPI_STATE_FOCUSABLE,
  ATSPI_STATE_FOCUSED,
  ATSPI_STATE_HAS_TOOLTIP,
  ATSPI_STATE_HORIZONTAL,
  ATSPI_STATE_ICONIFIED,
  ATSPI_STATE_MODAL,
  ATSPI_STATE_MULTI_LINE,
  ATSPI_STATE_MULTISELECTABLE,
  ATSPI_STATE_OPAQUE,
  ATSPI_STATE_PRESSED,
  ATSPI_STATE_RESIZABLE,
  ATSPI_STATE_SELECTABLE,
  ATSPI_STATE_SELECTED,
  ATSPI_STATE_SENSITIVE,
  ATSPI_STATE_SHOWING,
  ATSPI_STATE_SINGLE_LINE,
  ATSPI_STATE_STALE,
  ATSPI_STATE_TRANSIENT,
  ATSPI_STATE_VERTICAL,
  ATSPI_STATE_VISIBLE,
  ATSPI_STATE_MANAGES_DESCENDANTS,
  ATSPI_STATE_INDETERMINATE,
  ATSPI_STATE_REQUIRED,
  ATSPI_STATE_TRUNCATED,
  ATSPI_STATE_ANIMATED,
  ATSPI_STATE_INVALID_ENTRY,
  ATSPI_STATE_SUPPORTS_AUTOCOMPLETION,
  ATSPI_STATE_SELECTABLE_TEXT,
  ATSPI_STATE_IS_DEFAULT,
  ATSPI_STATE_VISITED,
  ATSPI_STATE_CHECKABLE,
  ATSPI_STATE_HAS_POPUP,
  ATSPI_STATE_READ_ONLY,
  ATSPI_STATE_LAST_DEFINED,
}
export enum TextBoundaryType {
  ATSPI_TEXT_BOUNDARY_CHAR,
  ATSPI_TEXT_BOUNDARY_WORD_START,
  ATSPI_TEXT_BOUNDARY_WORD_END,
  ATSPI_TEXT_BOUNDARY_SENTENCE_START,
  ATSPI_TEXT_BOUNDARY_SENTENCE_END,
  ATSPI_TEXT_BOUNDARY_LINE_START,
  ATSPI_TEXT_BOUNDARY_LINE_END,
}
export enum TextClipType {
  ATSPI_TEXT_CLIP_NONE,
  ATSPI_TEXT_CLIP_MIN,
  ATSPI_TEXT_CLIP_MAX,
  ATSPI_TEXT_CLIP_BOTH,
}
export enum TextGranularity {
  ATSPI_TEXT_GRANULARITY_CHAR,
  ATSPI_TEXT_GRANULARITY_WORD,
  ATSPI_TEXT_GRANULARITY_SENTENCE,
  ATSPI_TEXT_GRANULARITY_LINE,
  ATSPI_TEXT_GRANULARITY_PARAGRAPH,
}
export enum Cache {
  ATSPI_CACHE_NONE,
  ATSPI_CACHE_PARENT,
  ATSPI_CACHE_CHILDREN,
  ATSPI_CACHE_NAME,
  ATSPI_CACHE_DESCRIPTION,
  ATSPI_CACHE_STATES,
  ATSPI_CACHE_ROLE,
  ATSPI_CACHE_INTERFACES,
  ATSPI_CACHE_ATTRIBUTES,
  ATSPI_CACHE_ALL,
  ATSPI_CACHE_DEFAULT,
  ATSPI_CACHE_UNDEFINED,
}
export enum KeyListenerSyncType {
  ATSPI_KEYLISTENER_NOSYNC,
  ATSPI_KEYLISTENER_SYNCHRONOUS,
  ATSPI_KEYLISTENER_CANCONSUME,
  ATSPI_KEYLISTENER_ALL_WINDOWS,
}
export type ControllerEventMask = number;
export type DeviceEventMask = number;
export type KeyEventMask = number;
export type KeyMaskType = number;
export type KeystrokeListener = void;
export interface Action {
  do_action(i: number): boolean;
  get_action_description(i: number): string;
  get_action_name(i: number): string;
  get_description(i: number): string;
  get_key_binding(i: number): string;
  get_localized_name(i: number): string;
  get_n_actions(): number;
  get_name(i: number): string;
}
export interface Collection {
  get_active_descendant(): Accessible;
  get_matches(rule: MatchRule, sortby: CollectionSortOrder, count: number, traverse: boolean): Accessible[];
  get_matches_from(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, count: number, traverse: boolean): Accessible[];
  get_matches_to(current_object: Accessible, rule: MatchRule, sortby: CollectionSortOrder, tree: CollectionTreeTraversalType, limit_scope: boolean, count: number, traverse: boolean): Accessible[];
  is_ancestor_of(test: Accessible): boolean;
}
export interface Component {
  contains(x: number, y: number, ctype: CoordType): boolean;
  get_accessible_at_point(x: number, y: number, ctype: CoordType): Accessible | null;
  get_alpha(): number;
  get_extents(ctype: CoordType): Rect;
  get_layer(): ComponentLayer;
  get_mdi_z_order(): any;
  get_position(ctype: CoordType): Point;
  get_size(): Point;
  grab_focus(): boolean;
  scroll_to(type: ScrollType): boolean;
  scroll_to_point(coords: CoordType, x: number, y: number): boolean;
  set_extents(x: number, y: number, width: number, height: number, ctype: CoordType): boolean;
  set_position(x: number, y: number, ctype: CoordType): boolean;
  set_size(width: number, height: number): boolean;
}
export interface Document {
  get_attribute_value(attribute: string): string;
  get_attributes(): GLib.HashTable;
  get_current_page_number(): number;
  get_document_attribute_value(attribute: string): string;
  get_document_attributes(): GLib.HashTable;
  get_locale(): string;
  get_page_count(): number;
}
export interface EditableText {
  copy_text(start_pos: number, end_pos: number): boolean;
  cut_text(start_pos: number, end_pos: number): boolean;
  delete_text(start_pos: number, end_pos: number): boolean;
  insert_text(position: number, text: string, length: number): boolean;
  paste_text(position: number): boolean;
  set_text_contents(new_contents: string): boolean;
}
export interface Hypertext {
  get_link(link_index: number): Hyperlink | null;
  get_link_index(character_offset: number): number;
  get_n_links(): number;
}
export interface Image {
  get_image_description(): string;
  get_image_extents(ctype: CoordType): Rect;
  get_image_locale(): string;
  get_image_position(ctype: CoordType): Point;
  get_image_size(): Point;
}
export interface Selection {
  clear_selection(): boolean;
  deselect_child(child_index: number): boolean;
  deselect_selected_child(selected_child_index: number): boolean;
  get_n_selected_children(): number;
  get_selected_child(selected_child_index: number): Accessible;
  is_child_selected(child_index: number): boolean;
  select_all(): boolean;
  select_child(child_index: number): boolean;
}
export interface Table {
  add_column_selection(column: number): boolean;
  add_row_selection(row: number): boolean;
  get_accessible_at(row: number, column: number): Accessible;
  get_caption(): Accessible;
  get_column_at_index(index: number): number;
  get_column_description(column: number): string;
  get_column_extent_at(row: number, column: number): number;
  get_column_header(column: number): Accessible;
  get_index_at(row: number, column: number): number;
  get_n_columns(): number;
  get_n_rows(): number;
  get_n_selected_columns(): number;
  get_n_selected_rows(): number;
  get_row_at_index(index: number): number;
  get_row_column_extents_at_index(index: number, row: number, col: number, row_extents: number, col_extents: number, is_selected: boolean): boolean;
  get_row_description(row: number): string;
  get_row_extent_at(row: number, column: number): number;
  get_row_header(row: number): Accessible;
  get_selected_columns(): number[];
  get_selected_rows(): number[];
  get_summary(): Accessible;
  is_column_selected(column: number): boolean;
  is_row_selected(row: number): boolean;
  is_selected(row: number, column: number): boolean;
  remove_column_selection(column: number): boolean;
  remove_row_selection(row: number): boolean;
}
export interface TableCell {
  get_column_header_cells(): Accessible[];
  get_column_index(): number;
  get_column_span(): number;
  get_position(row: number, column: number): number;
  get_row_column_span(row: number, column: number, row_span: number, column_span: number): void;
  get_row_header_cells(): Accessible[];
  get_row_span(): number;
  get_table(): Accessible;
}
export interface Text {
  add_selection(start_offset: number, end_offset: number): boolean;
  get_attribute_run(offset: number, include_defaults: boolean, start_offset: number, end_offset: number): GLib.HashTable;
  get_attribute_value(offset: number, attribute_name: string): string | null;
  get_attributes(offset: number, start_offset: number, end_offset: number): GLib.HashTable;
  get_bounded_ranges(x: number, y: number, width: number, height: number, type: CoordType, clipTypeX: TextClipType, clipTypeY: TextClipType): TextRange[];
  get_caret_offset(): number;
  get_character_at_offset(offset: number): number;
  get_character_count(): number;
  get_character_extents(offset: number, type: CoordType): Rect;
  get_default_attributes(): GLib.HashTable;
  get_n_selections(): number;
  get_offset_at_point(x: number, y: number, type: CoordType): number;
  get_range_extents(start_offset: number, end_offset: number, type: CoordType): Rect;
  get_selection(selection_num: number): Range;
  get_string_at_offset(offset: number, granularity: TextGranularity): TextRange;
  get_text(start_offset: number, end_offset: number): string;
  get_text_after_offset(offset: number, type: TextBoundaryType): TextRange;
  get_text_at_offset(offset: number, type: TextBoundaryType): TextRange;
  get_text_attribute_value(offset: number, attribute_name: string): string | null;
  get_text_attributes(offset: number, start_offset: number, end_offset: number): GLib.HashTable;
  get_text_before_offset(offset: number, type: TextBoundaryType): TextRange;
  remove_selection(selection_num: number): boolean;
  scroll_substring_to(start_offset: number, end_offset: number, type: ScrollType): boolean;
  scroll_substring_to_point(start_offset: number, end_offset: number, coords: CoordType, x: number, y: number): boolean;
  set_caret_offset(new_offset: number): boolean;
  set_selection(selection_num: number, start_offset: number, end_offset: number): boolean;
}
export interface Value {
  get_current_value(): number;
  get_maximum_value(): number;
  get_minimum_increment(): number;
  get_minimum_value(): number;
  set_current_value(new_value: number): boolean;
}
export class Accessible extends Object {
  static parent: any;
  static accessible_parent: Accessible;
  static children: object[];
  static role: Role;
  static interfaces: number;
  static name: string;
  static description: string;
  static states: StateSet;
  static attributes: GLib.HashTable;
  static cached_properties: number;
  static priv: AccessiblePrivate;
  clear_cache(): void;
  get_accessible_id(): string;
  get_action(): any;
  get_action_iface(): any;
  get_application(): Accessible;
  get_atspi_version(): string;
  get_attributes(): GLib.HashTable;
  get_attributes_as_array(): string[];
  get_child_at_index(child_index: number): Accessible;
  get_child_count(): number;
  get_collection(): any;
  get_collection_iface(): any;
  get_component(): any;
  get_component_iface(): any;
  get_description(): string;
  get_document(): any;
  get_document_iface(): any;
  get_editable_text(): any;
  get_editable_text_iface(): any;
  get_hyperlink(): Hyperlink;
  get_hypertext(): any;
  get_hypertext_iface(): any;
  get_id(): number;
  get_image(): any;
  get_image_iface(): any;
  get_index_in_parent(): number;
  get_interfaces(): string[];
  get_localized_role_name(): string;
  get_name(): string;
  get_object_locale(): string;
  get_parent(): Accessible | null;
  get_process_id(): number;
  get_relation_set(): Relation[];
  get_role(): Role;
  get_role_name(): string;
  get_selection(): any;
  get_selection_iface(): any;
  get_state_set(): StateSet;
  get_table(): any;
  get_table_cell(): any;
  get_table_iface(): any;
  get_text(): any;
  get_text_iface(): any;
  get_toolkit_name(): string;
  get_toolkit_version(): string;
  get_value(): any;
  get_value_iface(): any;
  set_cache_mask(mask: Cache): void;
  region_changed(current_offset: number, last_offset: number): void;
}
export class Application extends GObject.Object {
  static parent: GObject.Object;
  static hash: GLib.HashTable;
  static bus_name: string;
  static bus: DBus.Connection;
  static root: object;
  static cache: Cache;
  static toolkit_name: string;
  static toolkit_version: string;
  static atspi_version: string;
  static time_added: object;
}
export class DeviceListener extends GObject.Object {
  constructor(callback: DeviceListenerCB, user_data: object | null, callback_destroyed: GLib.DestroyNotify);
  static parent: GObject.Object;
  static id: number;
  static callbacks: GLib.List;
  add_callback(callback: DeviceListenerCB, callback_destroyed: GLib.DestroyNotify, user_data: object | null): void;
  remove_callback(callback: DeviceListenerCB): void;
  device_event(event: DeviceEvent): boolean;
}
export class EventListener extends GObject.Object {
  constructor(callback: EventListenerCB, user_data: object | null, callback_destroyed: GLib.DestroyNotify);
  static parent: GObject.Object;
  static callback: EventListenerCB;
  static user_data: object;
  static cb_destroyed: GLib.DestroyNotify;
  deregister(event_type: string): boolean;
  register(event_type: string): boolean;
  register_full(event_type: string, properties: string[] | null): boolean;
  static deregister_from_callback(callback: EventListenerCB, user_data: object | null, event_type: string): boolean;
  static deregister_no_data(callback: EventListenerSimpleCB, event_type: string): boolean;
  static register_from_callback(callback: EventListenerCB, user_data: object | null, callback_destroyed: GLib.DestroyNotify, event_type: string): boolean;
  static register_from_callback_full(callback: EventListenerCB | null, user_data: object | null, callback_destroyed: GLib.DestroyNotify, event_type: string, properties: string[]): boolean;
  static register_no_data(callback: EventListenerSimpleCB, callback_destroyed: GLib.DestroyNotify, event_type: string): boolean;
}
export class Hyperlink extends Object {
  static parent: any;
  get_end_index(): number;
  get_index_range(): Range;
  get_n_anchors(): number;
  get_object(i: number): Accessible;
  get_start_index(): number;
  get_uri(i: number): string;
  is_valid(): boolean;
}
export class MatchRule extends GObject.Object {
  constructor(states: StateSet, statematchtype: CollectionMatchType, attributes: GLib.HashTable, attributematchtype: CollectionMatchType, roles: Role[], rolematchtype: CollectionMatchType, interfaces: string[], interfacematchtype: CollectionMatchType, invert: boolean);
  static parent: GObject.Object;
  static states: StateSet;
  static statematchtype: CollectionMatchType;
  static attributes: GLib.HashTable;
  static attributematchtype: CollectionMatchType;
  static interfaces: object[];
  static interfacematchtype: CollectionMatchType;
  static roles: number[];
  static rolematchtype: CollectionMatchType;
  static invert: boolean;
}
export class Object extends GObject.Object {
  static parent: GObject.Object;
  static app: Application;
  static path: string;
}
export class Relation extends GObject.Object {
  static parent: GObject.Object;
  static relation_type: RelationType;
  static targets: object[];
  get_n_targets(): number;
  get_relation_type(): RelationType;
  get_target(i: number): Accessible;
}
export class StateSet extends GObject.Object {
  constructor(states: StateType[]);
  static parent: GObject.Object;
  static accessible: object;
  static states: number;
  add(state: StateType): void;
  compare(set2: StateSet): StateSet;
  contains(state: StateType): boolean;
  equals(set2: StateSet): boolean;
  get_states(): StateType[];
  is_empty(): boolean;
  remove(state: StateType): void;
  set_by_name(name: string, enabled: boolean): void;
}
export class AccessibleClass {
  static parent_class: ObjectClass;
  static region_changed: (accessible: Accessible, current_offset: number, last_offset: number) => void;
}
export class AccessiblePrivate {}
export class ApplicationClass {
  static parent_class: GObject.ObjectClass;
}
export class DeviceEvent {
  static type: EventType;
  static id: number;
  static hw_code: number;
  static modifiers: number;
  static timestamp: number;
  static event_string: string;
  static is_text: boolean;
}
export class DeviceListenerClass {
  static parent_class: GObject.ObjectClass;
  static device_event: (listener: DeviceListener, event: DeviceEvent) => boolean;
}
export class Event {
  static type: string;
  static source: Accessible;
  static detail1: number;
  static detail2: number;
  static any_data: GObject.Value;
  static sender: Accessible;
  static main(): void;
  static quit(): void;
}
export class EventListenerClass {
  static parent_class: GObject.ObjectClass;
}
export class EventListenerMode {
  static synchronous: boolean;
  static preemptive: boolean;
  static global: boolean;
}
export class HyperlinkClass {
  static parent_class: ObjectClass;
}
export class KeyDefinition {
  static keycode: number;
  static keysym: number;
  static keystring: string;
  static unused: number;
}
export class KeySet {
  static keysyms: number;
  static keycodes: number;
  static keystrings: string;
  static len: any;
}
export class MatchRuleClass {
  static parent_class: GObject.ObjectClass;
}
export class ObjectClass {
  static parent_class: GObject.ObjectClass;
}
export class Point {
  static x: number;
  static y: number;
  copy(): Point;
}
export class Range {
  static start_offset: number;
  static end_offset: number;
  copy(): Range;
}
export class Rect {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
  copy(): Rect;
}
export class RelationClass {
  static parent_class: GObject.ObjectClass;
}
export class StateSetClass {
  static parent_class: GObject.ObjectClass;
}
export class TextRange {
  static start_offset: number;
  static end_offset: number;
  static content: string;
}
export function dbus_connection_setup_with_g_main(connection: DBus.Connection, context: GLib.MainContext): void;
export function dbus_server_setup_with_g_main(server: any, context: GLib.MainContext): void;
export function deregister_device_event_listener(listener: DeviceListener, filter: object | null): boolean;
export function deregister_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask): boolean;
export function event_main(): void;
export function event_quit(): void;
export function exit(): number;
export function generate_keyboard_event(keyval: number, keystring: string | null, synth_type: KeySynthType): boolean;
export function generate_mouse_event(x: number, y: number, name: string): boolean;
export function get_a11y_bus(): DBus.Connection;
export function get_desktop(i: number): Accessible;
export function get_desktop_count(): number;
export function get_desktop_list(): Accessible[];
export function init(): number;
export function is_initialized(): boolean;
export function register_device_event_listener(listener: DeviceListener, event_types: DeviceEventMask, filter: object | null): boolean;
export function register_keystroke_listener(listener: DeviceListener, key_set: KeyDefinition[] | null, modmask: KeyMaskType, event_types: KeyEventMask, sync_type: KeyListenerSyncType): boolean;
export function role_get_name(role: Role): string;
export function set_main_context(cnx: GLib.MainContext): void;
export function set_reference_window(accessible: Accessible): void;
export function set_timeout(val: number, startup_time: number): void;
export type DeviceListenerCB = (stroke: DeviceEvent, user_data: object | null) => boolean;
export type DeviceListenerSimpleCB = (stroke: DeviceEvent) => boolean;
export type EventListenerCB = (event: Event, user_data: object | null) => void;
export type EventListenerSimpleCB = (event: Event) => void;