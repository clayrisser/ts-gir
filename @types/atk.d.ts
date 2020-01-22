import * as GObject from './g-object';
import * as GLib from './g-lib';
export const BINARY_AGE: number;
export const INTERFACE_AGE: number;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const VERSION_MIN_REQUIRED: number;
export enum CoordType {
  ATK_XY_SCREEN,
  ATK_XY_WINDOW,
  ATK_XY_PARENT
}
export enum KeyEventType {
  ATK_KEY_EVENT_PRESS,
  ATK_KEY_EVENT_RELEASE,
  ATK_KEY_EVENT_LAST_DEFINED
}
export enum Layer {
  ATK_LAYER_INVALID,
  ATK_LAYER_BACKGROUND,
  ATK_LAYER_CANVAS,
  ATK_LAYER_WIDGET,
  ATK_LAYER_MDI,
  ATK_LAYER_POPUP,
  ATK_LAYER_OVERLAY,
  ATK_LAYER_WINDOW
}
export enum RelationType {
  ATK_RELATION_NULL,
  ATK_RELATION_CONTROLLED_BY,
  ATK_RELATION_CONTROLLER_FOR,
  ATK_RELATION_LABEL_FOR,
  ATK_RELATION_LABELLED_BY,
  ATK_RELATION_MEMBER_OF,
  ATK_RELATION_NODE_CHILD_OF,
  ATK_RELATION_FLOWS_TO,
  ATK_RELATION_FLOWS_FROM,
  ATK_RELATION_SUBWINDOW_OF,
  ATK_RELATION_EMBEDS,
  ATK_RELATION_EMBEDDED_BY,
  ATK_RELATION_POPUP_FOR,
  ATK_RELATION_PARENT_WINDOW_OF,
  ATK_RELATION_DESCRIBED_BY,
  ATK_RELATION_DESCRIPTION_FOR,
  ATK_RELATION_NODE_PARENT_OF,
  ATK_RELATION_DETAILS,
  ATK_RELATION_DETAILS_FOR,
  ATK_RELATION_ERROR_MESSAGE,
  ATK_RELATION_ERROR_FOR,
  ATK_RELATION_LAST_DEFINED
}
export enum Role {
  ATK_ROLE_INVALID,
  ATK_ROLE_ACCEL_LABEL,
  ATK_ROLE_ALERT,
  ATK_ROLE_ANIMATION,
  ATK_ROLE_ARROW,
  ATK_ROLE_CALENDAR,
  ATK_ROLE_CANVAS,
  ATK_ROLE_CHECK_BOX,
  ATK_ROLE_CHECK_MENU_ITEM,
  ATK_ROLE_COLOR_CHOOSER,
  ATK_ROLE_COLUMN_HEADER,
  ATK_ROLE_COMBO_BOX,
  ATK_ROLE_DATE_EDITOR,
  ATK_ROLE_DESKTOP_ICON,
  ATK_ROLE_DESKTOP_FRAME,
  ATK_ROLE_DIAL,
  ATK_ROLE_DIALOG,
  ATK_ROLE_DIRECTORY_PANE,
  ATK_ROLE_DRAWING_AREA,
  ATK_ROLE_FILE_CHOOSER,
  ATK_ROLE_FILLER,
  ATK_ROLE_FONT_CHOOSER,
  ATK_ROLE_FRAME,
  ATK_ROLE_GLASS_PANE,
  ATK_ROLE_HTML_CONTAINER,
  ATK_ROLE_ICON,
  ATK_ROLE_IMAGE,
  ATK_ROLE_INTERNAL_FRAME,
  ATK_ROLE_LABEL,
  ATK_ROLE_LAYERED_PANE,
  ATK_ROLE_LIST,
  ATK_ROLE_LIST_ITEM,
  ATK_ROLE_MENU,
  ATK_ROLE_MENU_BAR,
  ATK_ROLE_MENU_ITEM,
  ATK_ROLE_OPTION_PANE,
  ATK_ROLE_PAGE_TAB,
  ATK_ROLE_PAGE_TAB_LIST,
  ATK_ROLE_PANEL,
  ATK_ROLE_PASSWORD_TEXT,
  ATK_ROLE_POPUP_MENU,
  ATK_ROLE_PROGRESS_BAR,
  ATK_ROLE_PUSH_BUTTON,
  ATK_ROLE_RADIO_BUTTON,
  ATK_ROLE_RADIO_MENU_ITEM,
  ATK_ROLE_ROOT_PANE,
  ATK_ROLE_ROW_HEADER,
  ATK_ROLE_SCROLL_BAR,
  ATK_ROLE_SCROLL_PANE,
  ATK_ROLE_SEPARATOR,
  ATK_ROLE_SLIDER,
  ATK_ROLE_SPLIT_PANE,
  ATK_ROLE_SPIN_BUTTON,
  ATK_ROLE_STATUSBAR,
  ATK_ROLE_TABLE,
  ATK_ROLE_TABLE_CELL,
  ATK_ROLE_TABLE_COLUMN_HEADER,
  ATK_ROLE_TABLE_ROW_HEADER,
  ATK_ROLE_TEAR_OFF_MENU_ITEM,
  ATK_ROLE_TERMINAL,
  ATK_ROLE_TEXT,
  ATK_ROLE_TOGGLE_BUTTON,
  ATK_ROLE_TOOL_BAR,
  ATK_ROLE_TOOL_TIP,
  ATK_ROLE_TREE,
  ATK_ROLE_TREE_TABLE,
  ATK_ROLE_UNKNOWN,
  ATK_ROLE_VIEWPORT,
  ATK_ROLE_WINDOW,
  ATK_ROLE_HEADER,
  ATK_ROLE_FOOTER,
  ATK_ROLE_PARAGRAPH,
  ATK_ROLE_RULER,
  ATK_ROLE_APPLICATION,
  ATK_ROLE_AUTOCOMPLETE,
  ATK_ROLE_EDITBAR,
  ATK_ROLE_EMBEDDED,
  ATK_ROLE_ENTRY,
  ATK_ROLE_CHART,
  ATK_ROLE_CAPTION,
  ATK_ROLE_DOCUMENT_FRAME,
  ATK_ROLE_HEADING,
  ATK_ROLE_PAGE,
  ATK_ROLE_SECTION,
  ATK_ROLE_REDUNDANT_OBJECT,
  ATK_ROLE_FORM,
  ATK_ROLE_LINK,
  ATK_ROLE_INPUT_METHOD_WINDOW,
  ATK_ROLE_TABLE_ROW,
  ATK_ROLE_TREE_ITEM,
  ATK_ROLE_DOCUMENT_SPREADSHEET,
  ATK_ROLE_DOCUMENT_PRESENTATION,
  ATK_ROLE_DOCUMENT_TEXT,
  ATK_ROLE_DOCUMENT_WEB,
  ATK_ROLE_DOCUMENT_EMAIL,
  ATK_ROLE_COMMENT,
  ATK_ROLE_LIST_BOX,
  ATK_ROLE_GROUPING,
  ATK_ROLE_IMAGE_MAP,
  ATK_ROLE_NOTIFICATION,
  ATK_ROLE_INFO_BAR,
  ATK_ROLE_LEVEL_BAR,
  ATK_ROLE_TITLE_BAR,
  ATK_ROLE_BLOCK_QUOTE,
  ATK_ROLE_AUDIO,
  ATK_ROLE_VIDEO,
  ATK_ROLE_DEFINITION,
  ATK_ROLE_ARTICLE,
  ATK_ROLE_LANDMARK,
  ATK_ROLE_LOG,
  ATK_ROLE_MARQUEE,
  ATK_ROLE_MATH,
  ATK_ROLE_RATING,
  ATK_ROLE_TIMER,
  ATK_ROLE_DESCRIPTION_LIST,
  ATK_ROLE_DESCRIPTION_TERM,
  ATK_ROLE_DESCRIPTION_VALUE,
  ATK_ROLE_STATIC,
  ATK_ROLE_MATH_FRACTION,
  ATK_ROLE_MATH_ROOT,
  ATK_ROLE_SUBSCRIPT,
  ATK_ROLE_SUPERSCRIPT,
  ATK_ROLE_FOOTNOTE,
  ATK_ROLE_CONTENT_DELETION,
  ATK_ROLE_CONTENT_INSERTION,
  ATK_ROLE_LAST_DEFINED
}
export enum ScrollType {
  ATK_SCROLL_TOP_LEFT,
  ATK_SCROLL_BOTTOM_RIGHT,
  ATK_SCROLL_TOP_EDGE,
  ATK_SCROLL_BOTTOM_EDGE,
  ATK_SCROLL_LEFT_EDGE,
  ATK_SCROLL_RIGHT_EDGE,
  ATK_SCROLL_ANYWHERE
}
export enum StateType {
  ATK_STATE_INVALID,
  ATK_STATE_ACTIVE,
  ATK_STATE_ARMED,
  ATK_STATE_BUSY,
  ATK_STATE_CHECKED,
  ATK_STATE_DEFUNCT,
  ATK_STATE_EDITABLE,
  ATK_STATE_ENABLED,
  ATK_STATE_EXPANDABLE,
  ATK_STATE_EXPANDED,
  ATK_STATE_FOCUSABLE,
  ATK_STATE_FOCUSED,
  ATK_STATE_HORIZONTAL,
  ATK_STATE_ICONIFIED,
  ATK_STATE_MODAL,
  ATK_STATE_MULTI_LINE,
  ATK_STATE_MULTISELECTABLE,
  ATK_STATE_OPAQUE,
  ATK_STATE_PRESSED,
  ATK_STATE_RESIZABLE,
  ATK_STATE_SELECTABLE,
  ATK_STATE_SELECTED,
  ATK_STATE_SENSITIVE,
  ATK_STATE_SHOWING,
  ATK_STATE_SINGLE_LINE,
  ATK_STATE_STALE,
  ATK_STATE_TRANSIENT,
  ATK_STATE_VERTICAL,
  ATK_STATE_VISIBLE,
  ATK_STATE_MANAGES_DESCENDANTS,
  ATK_STATE_INDETERMINATE,
  ATK_STATE_TRUNCATED,
  ATK_STATE_REQUIRED,
  ATK_STATE_INVALID_ENTRY,
  ATK_STATE_SUPPORTS_AUTOCOMPLETION,
  ATK_STATE_SELECTABLE_TEXT,
  ATK_STATE_DEFAULT,
  ATK_STATE_ANIMATED,
  ATK_STATE_VISITED,
  ATK_STATE_CHECKABLE,
  ATK_STATE_HAS_POPUP,
  ATK_STATE_HAS_TOOLTIP,
  ATK_STATE_READ_ONLY,
  ATK_STATE_LAST_DEFINED
}
export enum TextAttribute {
  ATK_TEXT_ATTR_INVALID,
  ATK_TEXT_ATTR_LEFT_MARGIN,
  ATK_TEXT_ATTR_RIGHT_MARGIN,
  ATK_TEXT_ATTR_INDENT,
  ATK_TEXT_ATTR_INVISIBLE,
  ATK_TEXT_ATTR_EDITABLE,
  ATK_TEXT_ATTR_PIXELS_ABOVE_LINES,
  ATK_TEXT_ATTR_PIXELS_BELOW_LINES,
  ATK_TEXT_ATTR_PIXELS_INSIDE_WRAP,
  ATK_TEXT_ATTR_BG_FULL_HEIGHT,
  ATK_TEXT_ATTR_RISE,
  ATK_TEXT_ATTR_UNDERLINE,
  ATK_TEXT_ATTR_STRIKETHROUGH,
  ATK_TEXT_ATTR_SIZE,
  ATK_TEXT_ATTR_SCALE,
  ATK_TEXT_ATTR_WEIGHT,
  ATK_TEXT_ATTR_LANGUAGE,
  ATK_TEXT_ATTR_FAMILY_NAME,
  ATK_TEXT_ATTR_BG_COLOR,
  ATK_TEXT_ATTR_FG_COLOR,
  ATK_TEXT_ATTR_BG_STIPPLE,
  ATK_TEXT_ATTR_FG_STIPPLE,
  ATK_TEXT_ATTR_WRAP_MODE,
  ATK_TEXT_ATTR_DIRECTION,
  ATK_TEXT_ATTR_JUSTIFICATION,
  ATK_TEXT_ATTR_STRETCH,
  ATK_TEXT_ATTR_VARIANT,
  ATK_TEXT_ATTR_STYLE,
  ATK_TEXT_ATTR_LAST_DEFINED
}
export enum TextBoundary {
  ATK_TEXT_BOUNDARY_CHAR,
  ATK_TEXT_BOUNDARY_WORD_START,
  ATK_TEXT_BOUNDARY_WORD_END,
  ATK_TEXT_BOUNDARY_SENTENCE_START,
  ATK_TEXT_BOUNDARY_SENTENCE_END,
  ATK_TEXT_BOUNDARY_LINE_START,
  ATK_TEXT_BOUNDARY_LINE_END
}
export enum TextClipType {
  ATK_TEXT_CLIP_NONE,
  ATK_TEXT_CLIP_MIN,
  ATK_TEXT_CLIP_MAX,
  ATK_TEXT_CLIP_BOTH
}
export enum TextGranularity {
  ATK_TEXT_GRANULARITY_CHAR,
  ATK_TEXT_GRANULARITY_WORD,
  ATK_TEXT_GRANULARITY_SENTENCE,
  ATK_TEXT_GRANULARITY_LINE,
  ATK_TEXT_GRANULARITY_PARAGRAPH
}
export enum ValueType {
  ATK_VALUE_VERY_WEAK,
  ATK_VALUE_WEAK,
  ATK_VALUE_ACCEPTABLE,
  ATK_VALUE_STRONG,
  ATK_VALUE_VERY_STRONG,
  ATK_VALUE_VERY_LOW,
  ATK_VALUE_LOW,
  ATK_VALUE_MEDIUM,
  ATK_VALUE_HIGH,
  ATK_VALUE_VERY_HIGH,
  ATK_VALUE_VERY_BAD,
  ATK_VALUE_BAD,
  ATK_VALUE_GOOD,
  ATK_VALUE_VERY_GOOD,
  ATK_VALUE_BEST,
  ATK_VALUE_LAST_DEFINED
}
export enum HyperlinkStateFlags {
  ATK_HYPERLINK_IS_INLINE
}
export type AttributeSet = GLib.SList;
export type State = number;
export interface Action {
  do_action(...args: any[]): any;
  get_description(...args: any[]): any;
  get_keybinding(...args: any[]): any;
  get_localized_name(...args: any[]): any;
  get_n_actions(...args: any[]): any;
  get_name(...args: any[]): any;
  set_description(...args: any[]): any;
}
export interface Component {
  add_focus_handler(...args: any[]): any;
  contains(...args: any[]): any;
  get_alpha(...args: any[]): any;
  get_extents(...args: any[]): any;
  get_layer(...args: any[]): any;
  get_mdi_zorder(...args: any[]): any;
  get_position(...args: any[]): any;
  get_size(...args: any[]): any;
  grab_focus(...args: any[]): any;
  ref_accessible_at_point(...args: any[]): any;
  remove_focus_handler(...args: any[]): any;
  scroll_to(...args: any[]): any;
  scroll_to_point(...args: any[]): any;
  set_extents(...args: any[]): any;
  set_position(...args: any[]): any;
  set_size(...args: any[]): any;
}
export interface Document {
  get_attribute_value(attribute_name: string): string | null;
  get_attributes(): AttributeSet;
  get_current_page_number(...args: any[]): any;
  get_document(...args: any[]): any;
  get_document_type(...args: any[]): any;
  get_locale(): string;
  get_page_count(...args: any[]): any;
  set_attribute_value(attribute_name: string, attribute_value: string): boolean;
}
export interface EditableText {
  copy_text(...args: any[]): any;
  cut_text(...args: any[]): any;
  delete_text(...args: any[]): any;
  insert_text(...args: any[]): any;
  paste_text(...args: any[]): any;
  set_run_attributes(...args: any[]): any;
  set_text_contents(...args: any[]): any;
}
export interface HyperlinkImpl {
  get_hyperlink(...args: any[]): any;
}
export interface Hypertext {
  get_link(...args: any[]): any;
  get_link_index(...args: any[]): any;
  get_n_links(...args: any[]): any;
}
export interface Image {
  get_image_description(...args: any[]): any;
  get_image_locale(...args: any[]): any;
  get_image_position(...args: any[]): any;
  get_image_size(...args: any[]): any;
  set_image_description(...args: any[]): any;
}
export interface ImplementorIface {}
export interface Selection {
  add_selection(...args: any[]): any;
  clear_selection(...args: any[]): any;
  get_selection_count(...args: any[]): any;
  is_child_selected(...args: any[]): any;
  ref_selection(...args: any[]): any;
  remove_selection(...args: any[]): any;
  select_all_selection(...args: any[]): any;
}
export interface StreamableContent {
  get_mime_type(...args: any[]): any;
  get_n_mime_types(...args: any[]): any;
  get_stream(...args: any[]): any;
  get_uri(...args: any[]): any;
}
export interface Table {
  add_column_selection(...args: any[]): any;
  add_row_selection(...args: any[]): any;
  get_caption(...args: any[]): any;
  get_column_at_index(...args: any[]): any;
  get_column_description(...args: any[]): any;
  get_column_extent_at(...args: any[]): any;
  get_column_header(...args: any[]): any;
  get_index_at(...args: any[]): any;
  get_n_columns(...args: any[]): any;
  get_n_rows(...args: any[]): any;
  get_row_at_index(...args: any[]): any;
  get_row_description(...args: any[]): any;
  get_row_extent_at(...args: any[]): any;
  get_row_header(...args: any[]): any;
  get_selected_columns(...args: any[]): any;
  get_selected_rows(...args: any[]): any;
  get_summary(...args: any[]): any;
  is_column_selected(...args: any[]): any;
  is_row_selected(...args: any[]): any;
  is_selected(...args: any[]): any;
  ref_at(...args: any[]): any;
  remove_column_selection(...args: any[]): any;
  remove_row_selection(...args: any[]): any;
  set_caption(...args: any[]): any;
  set_column_description(...args: any[]): any;
  set_column_header(...args: any[]): any;
  set_row_description(...args: any[]): any;
  set_row_header(...args: any[]): any;
  set_summary(...args: any[]): any;
}
export interface TableCell {
  get_column_header_cells(...args: any[]): any;
  get_column_span(...args: any[]): any;
  get_position(...args: any[]): any;
  get_row_column_span(...args: any[]): any;
  get_row_header_cells(...args: any[]): any;
  get_row_span(...args: any[]): any;
  get_table(...args: any[]): any;
}
export interface Text {
  add_selection(...args: any[]): any;
  get_bounded_ranges(...args: any[]): any;
  get_caret_offset(...args: any[]): any;
  get_character_at_offset(...args: any[]): any;
  get_character_count(...args: any[]): any;
  get_character_extents(...args: any[]): any;
  get_default_attributes(...args: any[]): any;
  get_n_selections(...args: any[]): any;
  get_offset_at_point(...args: any[]): any;
  get_range_extents(...args: any[]): any;
  get_run_attributes(...args: any[]): any;
  get_selection(...args: any[]): any;
  get_string_at_offset(...args: any[]): any;
  get_text(...args: any[]): any;
  get_text_after_offset(...args: any[]): any;
  get_text_at_offset(...args: any[]): any;
  get_text_before_offset(...args: any[]): any;
  remove_selection(...args: any[]): any;
  scroll_substring_to(...args: any[]): any;
  scroll_substring_to_point(...args: any[]): any;
  set_caret_offset(...args: any[]): any;
  set_selection(...args: any[]): any;
}
export interface Value {
  get_current_value(...args: any[]): any;
  get_increment(...args: any[]): any;
  get_maximum_value(...args: any[]): any;
  get_minimum_increment(...args: any[]): any;
  get_minimum_value(...args: any[]): any;
  get_range(...args: any[]): any;
  get_sub_ranges(...args: any[]): any;
  get_value_and_text(...args: any[]): any;
  set_current_value(...args: any[]): any;
  set_value(...args: any[]): any;
}
export interface Window {}
export class GObjectAccessible extends Object {
  static parent: any;
  get_object(): GObject.Object;
  static for_object(obj: GObject.Object): Object;
}
export class Hyperlink extends GObject.Object {
  'end-index': number;
  'number-of-anchors': number;
  'selected-link': boolean;
  'start-index': number;
  static parent: GObject.Object;
  get_end_index(...args: any[]): any;
  get_n_anchors(...args: any[]): any;
  get_object(...args: any[]): any;
  get_start_index(...args: any[]): any;
  get_uri(...args: any[]): any;
  is_inline(): boolean;
  is_selected_link(...args: any[]): any;
  is_valid(...args: any[]): any;
  get_end_index(...args: any[]): any;
  get_n_anchors(...args: any[]): any;
  get_object(...args: any[]): any;
  get_start_index(...args: any[]): any;
  get_uri(...args: any[]): any;
  is_selected_link(...args: any[]): any;
  is_valid(...args: any[]): any;
  link_activated(): void;
  link_state(): number;
}
export class Misc extends GObject.Object {
  static parent: GObject.Object;
  threads_enter(...args: any[]): any;
  threads_leave(...args: any[]): any;
  threads_enter(...args: any[]): any;
  threads_leave(...args: any[]): any;
  static get_instance(): Misc;
}
export class NoOpObject extends Object {
  constructor(obj: GObject.Object);
  static parent: any;
}
export class NoOpObjectFactory extends ObjectFactory {
  constructor();
  static parent: any;
}
export class Object extends GObject.Object {
  'accessible-component-layer': number;
  'accessible-component-mdi-zorder': number;
  'accessible-description': string;
  'accessible-hypertext-nlinks': number;
  'accessible-name': string;
  'accessible-parent': Object;
  'accessible-role': Role;
  'accessible-table-caption': string;
  'accessible-table-caption-object': Object;
  'accessible-table-column-description': string;
  'accessible-table-column-header': Object;
  'accessible-table-row-description': string;
  'accessible-table-row-header': Object;
  'accessible-table-summary': Object;
  'accessible-value': number;
  static parent: GObject.Object;
  static description: string;
  static name: string;
  static accessible_parent: Object;
  static role: Role;
  static relation_set: RelationSet;
  static layer: Layer;
  add_relationship(relationship: RelationType, target: Object): boolean;
  connect_property_change_handler(...args: any[]): any;
  get_accessible_id(): string;
  get_attributes(...args: any[]): any;
  get_description(...args: any[]): any;
  get_index_in_parent(...args: any[]): any;
  get_layer(...args: any[]): any;
  get_mdi_zorder(...args: any[]): any;
  get_n_accessible_children(): number;
  get_name(...args: any[]): any;
  get_object_locale(...args: any[]): any;
  get_parent(...args: any[]): any;
  get_role(...args: any[]): any;
  initialize(...args: any[]): any;
  notify_state_change(state: State, value: boolean): void;
  peek_parent(): Object;
  ref_accessible_child(i: number): Object;
  ref_relation_set(...args: any[]): any;
  ref_state_set(...args: any[]): any;
  remove_property_change_handler(...args: any[]): any;
  remove_relationship(relationship: RelationType, target: Object): boolean;
  set_accessible_id(name: string): void;
  set_description(...args: any[]): any;
  set_name(...args: any[]): any;
  set_parent(...args: any[]): any;
  set_role(...args: any[]): any;
  active_descendant_changed(child: object | null): void;
  children_changed(change_index: number, changed_child: object | null): void;
  connect_property_change_handler(...args: any[]): any;
  focus_event(focus_in: boolean): void;
  get_attributes(...args: any[]): any;
  get_description(...args: any[]): any;
  get_index_in_parent(...args: any[]): any;
  get_layer(...args: any[]): any;
  get_mdi_zorder(...args: any[]): any;
  get_n_children(): number;
  get_name(...args: any[]): any;
  get_object_locale(...args: any[]): any;
  get_parent(...args: any[]): any;
  get_role(...args: any[]): any;
  initialize(...args: any[]): any;
  property_change(values: PropertyValues): void;
  ref_child(i: number): Object;
  ref_relation_set(...args: any[]): any;
  ref_state_set(...args: any[]): any;
  remove_property_change_handler(...args: any[]): any;
  set_description(...args: any[]): any;
  set_name(...args: any[]): any;
  set_parent(...args: any[]): any;
  set_role(...args: any[]): any;
  state_change(name: string, state_set: boolean): void;
  visible_data_changed(): void;
}
export class ObjectFactory extends GObject.Object {
  static parent: GObject.Object;
  create_accessible(obj: GObject.Object): Object;
  get_accessible_type(): any;
  invalidate(...args: any[]): any;
  invalidate(...args: any[]): any;
}
export class Plug extends Object {
  constructor();
  static parent: any;
  get_id(): string;
  get_object_id(): string;
}
export class Registry extends GObject.Object {
  static parent: GObject.Object;
  static factory_type_registry: GLib.HashTable;
  static factory_singleton_cache: GLib.HashTable;
  get_factory(type: any): ObjectFactory;
  get_factory_type(type: any): any;
  set_factory_type(type: any, factory_type: any): void;
}
export class Relation extends GObject.Object {
  constructor(targets: Object[], n_targets: number, relationship: RelationType);
  'relation-type': RelationType;
  target: any;
  static parent: GObject.Object;
  static target: any;
  static relationship: RelationType;
  add_target(target: Object): void;
  get_relation_type(): RelationType;
  get_target(): Object[];
  remove_target(target: Object): boolean;
}
export class RelationSet extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static relations: object[];
  add(relation: Relation): void;
  add_relation_by_type(relationship: RelationType, target: Object): void;
  contains(relationship: RelationType): boolean;
  contains_target(relationship: RelationType, target: Object): boolean;
  get_n_relations(): number;
  get_relation(i: number): Relation;
  get_relation_by_type(relationship: RelationType): Relation;
  remove(relation: Relation): void;
}
export class Socket extends Object {
  constructor();
  static parent: any;
  static embedded_plug_id: string;
  embed(...args: any[]): any;
  is_occupied(): boolean;
  embed(...args: any[]): any;
}
export class StateSet extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  add_state(type: StateType): boolean;
  add_states(types: StateType[], n_types: number): void;
  and_sets(compare_set: StateSet): StateSet;
  clear_states(): void;
  contains_state(type: StateType): boolean;
  contains_states(types: StateType[], n_types: number): boolean;
  is_empty(): boolean;
  or_sets(compare_set: StateSet): StateSet | null;
  remove_state(type: StateType): boolean;
  xor_sets(compare_set: StateSet): StateSet;
}
export class Util extends GObject.Object {
  static parent: GObject.Object;
}
export class ActionIface {
  static parent: GObject.TypeInterface;
  static do_action: (action: any, i: number) => boolean;
  static get_n_actions: (action: any) => number;
  static get_description: (action: any, i: number) => string | null;
  static get_name: (action: any, i: number) => string | null;
  static get_keybinding: (action: any, i: number) => string | null;
  static set_description: (action: any, i: number, desc: string) => boolean;
  static get_localized_name: (action: any, i: number) => string | null;
}
export class Attribute {
  static name: string;
  static value: string;
  static set_free(attrib_set: AttributeSet): void;
}
export class ComponentIface {
  static parent: GObject.TypeInterface;
  static add_focus_handler: (component: any, handler: FocusHandler) => number;
  static contains: (
    component: any,
    x: number,
    y: number,
    coord_type: CoordType
  ) => boolean;
  static ref_accessible_at_point: (
    component: any,
    x: number,
    y: number,
    coord_type: CoordType
  ) => Object | null;
  static get_extents: (
    component: any,
    x: number,
    y: number,
    width: number,
    height: number,
    coord_type: CoordType
  ) => void;
  static get_position: (
    component: any,
    x: number,
    y: number,
    coord_type: CoordType
  ) => void;
  static get_size: (component: any, width: number, height: number) => void;
  static grab_focus: (component: any) => boolean;
  static remove_focus_handler: (component: any, handler_id: number) => void;
  static set_extents: (
    component: any,
    x: number,
    y: number,
    width: number,
    height: number,
    coord_type: CoordType
  ) => boolean;
  static set_position: (
    component: any,
    x: number,
    y: number,
    coord_type: CoordType
  ) => boolean;
  static set_size: (component: any, width: number, height: number) => boolean;
  static get_layer: (component: any) => Layer;
  static get_mdi_zorder: (component: any) => number;
  static bounds_changed: (component: any, bounds: Rectangle) => void;
  static get_alpha: (component: any) => number;
  static scroll_to: (component: any, type: ScrollType) => boolean;
  static scroll_to_point: (
    component: any,
    coords: CoordType,
    x: number,
    y: number
  ) => boolean;
}
export class DocumentIface {
  static parent: GObject.TypeInterface;
  static get_document_type: (document: any) => string;
  static get_document: (document: any) => object | null;
  static get_document_locale: (document: any) => string;
  static get_document_attributes: (document: any) => AttributeSet;
  static get_document_attribute_value: (
    document: any,
    attribute_name: string
  ) => string | null;
  static set_document_attribute: (
    document: any,
    attribute_name: string,
    attribute_value: string
  ) => boolean;
  static get_current_page_number: (document: any) => number;
  static get_page_count: (document: any) => number;
}
export class EditableTextIface {
  static parent_interface: GObject.TypeInterface;
  static set_run_attributes: (
    text: any,
    attrib_set: AttributeSet,
    start_offset: number,
    end_offset: number
  ) => boolean;
  static set_text_contents: (text: any, string: string) => void;
  static insert_text: (
    text: any,
    string: string,
    length: number,
    position: number
  ) => void;
  static copy_text: (text: any, start_pos: number, end_pos: number) => void;
  static cut_text: (text: any, start_pos: number, end_pos: number) => void;
  static delete_text: (text: any, start_pos: number, end_pos: number) => void;
  static paste_text: (text: any, position: number) => void;
}
export class GObjectAccessibleClass {
  static parent_class: ObjectClass;
  static pad1: Function;
  static pad2: Function;
}
export class HyperlinkClass {
  static parent: GObject.ObjectClass;
  static get_uri: (link_: Hyperlink, i: number) => string;
  static get_object: (link_: Hyperlink, i: number) => Object;
  static get_end_index: (link_: Hyperlink) => number;
  static get_start_index: (link_: Hyperlink) => number;
  static is_valid: (link_: Hyperlink) => boolean;
  static get_n_anchors: (link_: Hyperlink) => number;
  static link_state: (link_: Hyperlink) => number;
  static is_selected_link: (link_: Hyperlink) => boolean;
  static link_activated: (link_: Hyperlink) => void;
  static pad1: Function;
}
export class HyperlinkImplIface {
  static parent: GObject.TypeInterface;
  static get_hyperlink: (impl: any) => Hyperlink;
}
export class HypertextIface {
  static parent: GObject.TypeInterface;
  static get_link: (hypertext: any, link_index: number) => Hyperlink;
  static get_n_links: (hypertext: any) => number;
  static get_link_index: (hypertext: any, char_index: number) => number;
  static link_selected: (hypertext: any, link_index: number) => void;
}
export class ImageIface {
  static parent: GObject.TypeInterface;
  static get_image_position: (
    image: any,
    x: number,
    y: number,
    coord_type: CoordType
  ) => void;
  static get_image_description: (image: any) => string;
  static get_image_size: (image: any, width: number, height: number) => void;
  static set_image_description: (image: any, description: string) => boolean;
  static get_image_locale: (image: any) => string | null;
}
export class Implementor {
  ref_accessible(): Object;
}
export class KeyEventStruct {
  static type: number;
  static state: number;
  static keyval: number;
  static length: number;
  static string: string;
  static keycode: number;
  static timestamp: number;
}
export class MiscClass {
  static parent: GObject.ObjectClass;
  static threads_enter: (misc: Misc) => void;
  static threads_leave: (misc: Misc) => void;
  static vfuncs: object[];
}
export class NoOpObjectClass {
  static parent_class: ObjectClass;
}
export class NoOpObjectFactoryClass {
  static parent_class: ObjectFactoryClass;
}
export class ObjectClass {
  static parent: GObject.ObjectClass;
  static get_name: (accessible: Object) => string;
  static get_description: (accessible: Object) => string;
  static get_parent: (accessible: Object) => Object;
  static get_n_children: (accessible: Object) => number;
  static ref_child: (accessible: Object, i: number) => Object;
  static get_index_in_parent: (accessible: Object) => number;
  static ref_relation_set: (accessible: Object) => RelationSet;
  static get_role: (accessible: Object) => Role;
  static get_layer: (accessible: Object) => Layer;
  static get_mdi_zorder: (accessible: Object) => number;
  static ref_state_set: (accessible: Object) => StateSet;
  static set_name: (accessible: Object, name: string) => void;
  static set_description: (accessible: Object, description: string) => void;
  static set_parent: (accessible: Object, parent: Object) => void;
  static set_role: (accessible: Object, role: Role) => void;
  static connect_property_change_handler: (
    accessible: Object,
    handler: PropertyChangeHandler
  ) => number;
  static remove_property_change_handler: (
    accessible: Object,
    handler_id: number
  ) => void;
  static initialize: (accessible: Object, data: object | null) => void;
  static children_changed: (
    accessible: Object,
    change_index: number,
    changed_child: object | null
  ) => void;
  static focus_event: (accessible: Object, focus_in: boolean) => void;
  static property_change: (accessible: Object, values: PropertyValues) => void;
  static state_change: (
    accessible: Object,
    name: string,
    state_set: boolean
  ) => void;
  static visible_data_changed: (accessible: Object) => void;
  static active_descendant_changed: (
    accessible: Object,
    child: object | null
  ) => void;
  static get_attributes: (accessible: Object) => AttributeSet;
  static get_object_locale: (accessible: Object) => string;
  static pad1: Function;
}
export class ObjectFactoryClass {
  static parent_class: GObject.ObjectClass;
  static create_accessible: (obj: GObject.Object) => Object;
  static invalidate: (factory: ObjectFactory) => void;
  static get_accessible_type: () => any;
  static pad1: Function;
  static pad2: Function;
}
export class PlugClass {
  static parent_class: ObjectClass;
  static get_object_id: (obj: Plug) => string;
}
export class PropertyValues {
  static property_name: string;
  static old_value: GObject.Value;
  static new_value: GObject.Value;
}
export class Range {
  constructor(lower_limit: number, upper_limit: number, description: string);
  copy(): Range;
  free(): void;
  get_description(): string;
  get_lower_limit(): number;
  get_upper_limit(): number;
}
export class Rectangle {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
}
export class RegistryClass {
  static parent_class: GObject.ObjectClass;
}
export class RelationClass {
  static parent: GObject.ObjectClass;
}
export class RelationSetClass {
  static parent: GObject.ObjectClass;
  static pad1: Function;
  static pad2: Function;
}
export class SelectionIface {
  static parent: GObject.TypeInterface;
  static add_selection: (selection: any, i: number) => boolean;
  static clear_selection: (selection: any) => boolean;
  static ref_selection: (selection: any, i: number) => Object | null;
  static get_selection_count: (selection: any) => number;
  static is_child_selected: (selection: any, i: number) => boolean;
  static remove_selection: (selection: any, i: number) => boolean;
  static select_all_selection: (selection: any) => boolean;
  static selection_changed: (selection: any) => void;
}
export class SocketClass {
  static parent_class: ObjectClass;
  static embed: (obj: Socket, plug_id: string) => void;
}
export class StateSetClass {
  static parent: GObject.ObjectClass;
}
export class StreamableContentIface {
  static parent: GObject.TypeInterface;
  static get_n_mime_types: (streamable: any) => number;
  static get_mime_type: (streamable: any, i: number) => string;
  static get_stream: (streamable: any, mime_type: string) => GLib.IOChannel;
  static get_uri: (streamable: any, mime_type: string) => string | null;
  static pad1: Function;
  static pad2: Function;
  static pad3: Function;
}
export class TableCellIface {
  static parent: GObject.TypeInterface;
  static get_column_span: (cell: any) => number;
  static get_column_header_cells: (cell: any) => Object[];
  static get_position: (cell: any, row: number, column: number) => boolean;
  static get_row_span: (cell: any) => number;
  static get_row_header_cells: (cell: any) => Object[];
  static get_row_column_span: (
    cell: any,
    row: number,
    column: number,
    row_span: number,
    column_span: number
  ) => boolean;
  static get_table: (cell: any) => Object;
}
export class TableIface {
  static parent: GObject.TypeInterface;
  static ref_at: (table: any, row: number, column: number) => Object;
  static get_index_at: (table: any, row: number, column: number) => number;
  static get_column_at_index: (table: any, index_: number) => number;
  static get_row_at_index: (table: any, index_: number) => number;
  static get_n_columns: (table: any) => number;
  static get_n_rows: (table: any) => number;
  static get_column_extent_at: (
    table: any,
    row: number,
    column: number
  ) => number;
  static get_row_extent_at: (table: any, row: number, column: number) => number;
  static get_caption: (table: any) => Object | null;
  static get_column_description: (table: any, column: number) => string;
  static get_column_header: (table: any, column: number) => Object | null;
  static get_row_description: (table: any, row: number) => string | null;
  static get_row_header: (table: any, row: number) => Object | null;
  static get_summary: (table: any) => Object;
  static set_caption: (table: any, caption: Object) => void;
  static set_column_description: (
    table: any,
    column: number,
    description: string
  ) => void;
  static set_column_header: (
    table: any,
    column: number,
    header: Object
  ) => void;
  static set_row_description: (
    table: any,
    row: number,
    description: string
  ) => void;
  static set_row_header: (table: any, row: number, header: Object) => void;
  static set_summary: (table: any, accessible: Object) => void;
  static get_selected_columns: (table: any, selected: number) => number;
  static get_selected_rows: (table: any, selected: number) => number;
  static is_column_selected: (table: any, column: number) => boolean;
  static is_row_selected: (table: any, row: number) => boolean;
  static is_selected: (table: any, row: number, column: number) => boolean;
  static add_row_selection: (table: any, row: number) => boolean;
  static remove_row_selection: (table: any, row: number) => boolean;
  static add_column_selection: (table: any, column: number) => boolean;
  static remove_column_selection: (table: any, column: number) => boolean;
  static row_inserted: (table: any, row: number, num_inserted: number) => void;
  static column_inserted: (
    table: any,
    column: number,
    num_inserted: number
  ) => void;
  static row_deleted: (table: any, row: number, num_deleted: number) => void;
  static column_deleted: (
    table: any,
    column: number,
    num_deleted: number
  ) => void;
  static row_reordered: (table: any) => void;
  static column_reordered: (table: any) => void;
  static model_changed: (table: any) => void;
}
export class TextIface {
  static parent: GObject.TypeInterface;
  static get_text: (
    text: any,
    start_offset: number,
    end_offset: number
  ) => string;
  static get_text_after_offset: (
    text: any,
    offset: number,
    boundary_type: TextBoundary,
    start_offset: number,
    end_offset: number
  ) => string;
  static get_text_at_offset: (
    text: any,
    offset: number,
    boundary_type: TextBoundary,
    start_offset: number,
    end_offset: number
  ) => string;
  static get_character_at_offset: (text: any, offset: number) => number;
  static get_text_before_offset: (
    text: any,
    offset: number,
    boundary_type: TextBoundary,
    start_offset: number,
    end_offset: number
  ) => string;
  static get_caret_offset: (text: any) => number;
  static get_run_attributes: (
    text: any,
    offset: number,
    start_offset: number,
    end_offset: number
  ) => AttributeSet;
  static get_default_attributes: (text: any) => AttributeSet;
  static get_character_extents: (
    text: any,
    offset: number,
    x: number,
    y: number,
    width: number,
    height: number,
    coords: CoordType
  ) => void;
  static get_character_count: (text: any) => number;
  static get_offset_at_point: (
    text: any,
    x: number,
    y: number,
    coords: CoordType
  ) => number;
  static get_n_selections: (text: any) => number;
  static get_selection: (
    text: any,
    selection_num: number,
    start_offset: number,
    end_offset: number
  ) => string;
  static add_selection: (
    text: any,
    start_offset: number,
    end_offset: number
  ) => boolean;
  static remove_selection: (text: any, selection_num: number) => boolean;
  static set_selection: (
    text: any,
    selection_num: number,
    start_offset: number,
    end_offset: number
  ) => boolean;
  static set_caret_offset: (text: any, offset: number) => boolean;
  static text_changed: (text: any, position: number, length: number) => void;
  static text_caret_moved: (text: any, location: number) => void;
  static text_selection_changed: (text: any) => void;
  static text_attributes_changed: (text: any) => void;
  static get_range_extents: (
    text: any,
    start_offset: number,
    end_offset: number,
    coord_type: CoordType,
    rect: TextRectangle
  ) => void;
  static get_bounded_ranges: (
    text: any,
    rect: TextRectangle,
    coord_type: CoordType,
    x_clip_type: TextClipType,
    y_clip_type: TextClipType
  ) => TextRange[];
  static get_string_at_offset: (
    text: any,
    offset: number,
    granularity: TextGranularity,
    start_offset: number,
    end_offset: number
  ) => string | null;
  static scroll_substring_to: (
    text: any,
    start_offset: number,
    end_offset: number,
    type: ScrollType
  ) => boolean;
  static scroll_substring_to_point: (
    text: any,
    start_offset: number,
    end_offset: number,
    coords: CoordType,
    x: number,
    y: number
  ) => boolean;
}
export class TextRange {
  static bounds: TextRectangle;
  static start_offset: number;
  static end_offset: number;
  static content: string;
}
export class TextRectangle {
  static x: number;
  static y: number;
  static width: number;
  static height: number;
}
export class UtilClass {
  static parent: GObject.ObjectClass;
  static add_global_event_listener: (
    listener: GObject.SignalEmissionHook,
    event_type: string
  ) => number;
  static remove_global_event_listener: (listener_id: number) => void;
  static add_key_event_listener: (
    listener: KeySnoopFunc,
    data: object | null
  ) => number;
  static remove_key_event_listener: (listener_id: number) => void;
  static get_root: () => Object;
  static get_toolkit_name: () => string;
  static get_toolkit_version: () => string;
}
export class ValueIface {
  static parent: GObject.TypeInterface;
  static get_current_value: (obj: any, value: GObject.Value) => void;
  static get_maximum_value: (obj: any, value: GObject.Value) => void;
  static get_minimum_value: (obj: any, value: GObject.Value) => void;
  static set_current_value: (obj: any, value: GObject.Value) => boolean;
  static get_minimum_increment: (obj: any, value: GObject.Value) => void;
  static get_value_and_text: (obj: any, value: number, text: string) => void;
  static get_range: (obj: any) => Range | null;
  static get_increment: (obj: any) => number;
  static get_sub_ranges: (obj: any) => GLib.SList;
  static set_value: (obj: any, new_value: number) => void;
}
export class WindowIface {
  static parent: GObject.TypeInterface;
}
export function add_focus_tracker(focus_tracker: EventListener): number;
export function add_global_event_listener(
  listener: GObject.SignalEmissionHook,
  event_type: string
): number;
export function add_key_event_listener(
  listener: KeySnoopFunc,
  data: object | null
): number;
export function attribute_set_free(attrib_set: AttributeSet): void;
export function focus_tracker_init(init: EventListenerInit): void;
export function focus_tracker_notify(object: Object): void;
export function get_binary_age(): number;
export function get_default_registry(): Registry;
export function get_focus_object(): Object;
export function get_interface_age(): number;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function get_root(): Object;
export function get_toolkit_name(): string;
export function get_toolkit_version(): string;
export function get_version(): string;
export function relation_type_for_name(name: string): RelationType;
export function relation_type_get_name(type: RelationType): string;
export function relation_type_register(name: string): RelationType;
export function remove_focus_tracker(tracker_id: number): void;
export function remove_global_event_listener(listener_id: number): void;
export function remove_key_event_listener(listener_id: number): void;
export function role_for_name(name: string): Role;
export function role_get_localized_name(role: Role): string;
export function role_get_name(role: Role): string;
export function role_register(name: string): Role;
export function state_type_for_name(name: string): StateType;
export function state_type_get_name(type: StateType): string;
export function state_type_register(name: string): StateType;
export function text_attribute_for_name(name: string): TextAttribute;
export function text_attribute_get_name(attr: TextAttribute): string;
export function text_attribute_get_value(
  attr: TextAttribute,
  index_: number
): string | null;
export function text_attribute_register(name: string): TextAttribute;
export function text_free_ranges(ranges: TextRange[]): void;
export function value_type_get_localized_name(value_type: ValueType): string;
export function value_type_get_name(value_type: ValueType): string;
export type EventListener = (obj: Object) => void;
export type EventListenerInit = () => void;
export type FocusHandler = (object: Object, focus_in: boolean) => void;
export type Function = (user_data: object | null) => boolean;
export type KeySnoopFunc = (
  event: KeyEventStruct,
  user_data: object | null
) => number;
export type PropertyChangeHandler = (obj: Object, vals: PropertyValues) => void;
