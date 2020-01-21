import * as Soup from './soup';
import * as JavaScriptCore from './java-script-core';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as GLib from './g-lib';
import * as GObject from './g-object';
export const DOM_CSS_RULE_CHARSET_RULE: number;
export const DOM_CSS_RULE_FONT_FACE_RULE: number;
export const DOM_CSS_RULE_IMPORT_RULE: number;
export const DOM_CSS_RULE_MEDIA_RULE: number;
export const DOM_CSS_RULE_PAGE_RULE: number;
export const DOM_CSS_RULE_STYLE_RULE: number;
export const DOM_CSS_RULE_UNKNOWN_RULE: number;
export const DOM_CSS_VALUE_CSS_CUSTOM: number;
export const DOM_CSS_VALUE_CSS_INHERIT: number;
export const DOM_CSS_VALUE_CSS_PRIMITIVE_VALUE: number;
export const DOM_CSS_VALUE_CSS_VALUE_LIST: number;
export const DOM_ELEMENT_ALLOW_KEYBOARD_INPUT: number;
export const DOM_EVENT_AT_TARGET: number;
export const DOM_EVENT_BLUR: number;
export const DOM_EVENT_BUBBLING_PHASE: number;
export const DOM_EVENT_CAPTURING_PHASE: number;
export const DOM_EVENT_CHANGE: number;
export const DOM_EVENT_CLICK: number;
export const DOM_EVENT_DBLCLICK: number;
export const DOM_EVENT_DRAGDROP: number;
export const DOM_EVENT_FOCUS: number;
export const DOM_EVENT_KEYDOWN: number;
export const DOM_EVENT_KEYPRESS: number;
export const DOM_EVENT_KEYUP: number;
export const DOM_EVENT_MOUSEDOWN: number;
export const DOM_EVENT_MOUSEDRAG: number;
export const DOM_EVENT_MOUSEMOVE: number;
export const DOM_EVENT_MOUSEOUT: number;
export const DOM_EVENT_MOUSEOVER: number;
export const DOM_EVENT_MOUSEUP: number;
export const DOM_EVENT_NONE: number;
export const DOM_EVENT_SELECT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_LEFT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_NUMPAD: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_RIGHT: number;
export const DOM_KEYBOARD_EVENT_KEY_LOCATION_STANDARD: number;
export const DOM_NODE_ATTRIBUTE_NODE: number;
export const DOM_NODE_CDATA_SECTION_NODE: number;
export const DOM_NODE_COMMENT_NODE: number;
export const DOM_NODE_DOCUMENT_FRAGMENT_NODE: number;
export const DOM_NODE_DOCUMENT_NODE: number;
export const DOM_NODE_DOCUMENT_POSITION_CONTAINED_BY: number;
export const DOM_NODE_DOCUMENT_POSITION_CONTAINS: number;
export const DOM_NODE_DOCUMENT_POSITION_DISCONNECTED: number;
export const DOM_NODE_DOCUMENT_POSITION_FOLLOWING: number;
export const DOM_NODE_DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number;
export const DOM_NODE_DOCUMENT_POSITION_PRECEDING: number;
export const DOM_NODE_DOCUMENT_TYPE_NODE: number;
export const DOM_NODE_ELEMENT_NODE: number;
export const DOM_NODE_ENTITY_NODE: number;
export const DOM_NODE_ENTITY_REFERENCE_NODE: number;
export const DOM_NODE_FILTER_ACCEPT: number;
export const DOM_NODE_FILTER_REJECT: number;
export const DOM_NODE_FILTER_SHOW_ALL: number;
export const DOM_NODE_FILTER_SHOW_ATTRIBUTE: number;
export const DOM_NODE_FILTER_SHOW_CDATA_SECTION: number;
export const DOM_NODE_FILTER_SHOW_COMMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT_FRAGMENT: number;
export const DOM_NODE_FILTER_SHOW_DOCUMENT_TYPE: number;
export const DOM_NODE_FILTER_SHOW_ELEMENT: number;
export const DOM_NODE_FILTER_SHOW_ENTITY: number;
export const DOM_NODE_FILTER_SHOW_ENTITY_REFERENCE: number;
export const DOM_NODE_FILTER_SHOW_NOTATION: number;
export const DOM_NODE_FILTER_SHOW_PROCESSING_INSTRUCTION: number;
export const DOM_NODE_FILTER_SHOW_TEXT: number;
export const DOM_NODE_FILTER_SKIP: number;
export const DOM_NODE_PROCESSING_INSTRUCTION_NODE: number;
export const DOM_NODE_TEXT_NODE: number;
export const DOM_RANGE_END_TO_END: number;
export const DOM_RANGE_END_TO_START: number;
export const DOM_RANGE_NODE_AFTER: number;
export const DOM_RANGE_NODE_BEFORE: number;
export const DOM_RANGE_NODE_BEFORE_AND_AFTER: number;
export const DOM_RANGE_NODE_INSIDE: number;
export const DOM_RANGE_START_TO_END: number;
export const DOM_RANGE_START_TO_START: number;
export const DOM_XPATH_RESULT_ANY_TYPE: number;
export const DOM_XPATH_RESULT_ANY_UNORDERED_NODE_TYPE: number;
export const DOM_XPATH_RESULT_BOOLEAN_TYPE: number;
export const DOM_XPATH_RESULT_FIRST_ORDERED_NODE_TYPE: number;
export const DOM_XPATH_RESULT_NUMBER_TYPE: number;
export const DOM_XPATH_RESULT_ORDERED_NODE_ITERATOR_TYPE: number;
export const DOM_XPATH_RESULT_ORDERED_NODE_SNAPSHOT_TYPE: number;
export const DOM_XPATH_RESULT_STRING_TYPE: number;
export const DOM_XPATH_RESULT_UNORDERED_NODE_ITERATOR_TYPE: number;
export const DOM_XPATH_RESULT_UNORDERED_NODE_SNAPSHOT_TYPE: number;
export enum ConsoleMessageLevel {
  WEBKIT_CONSOLE_MESSAGE_LEVEL_INFO,
  WEBKIT_CONSOLE_MESSAGE_LEVEL_LOG,
  WEBKIT_CONSOLE_MESSAGE_LEVEL_WARNING,
  WEBKIT_CONSOLE_MESSAGE_LEVEL_ERROR,
  WEBKIT_CONSOLE_MESSAGE_LEVEL_DEBUG,
}
export enum ConsoleMessageSource {
  WEBKIT_CONSOLE_MESSAGE_SOURCE_JAVASCRIPT,
  WEBKIT_CONSOLE_MESSAGE_SOURCE_NETWORK,
  WEBKIT_CONSOLE_MESSAGE_SOURCE_CONSOLE_API,
  WEBKIT_CONSOLE_MESSAGE_SOURCE_SECURITY,
  WEBKIT_CONSOLE_MESSAGE_SOURCE_OTHER,
}
export enum ContextMenuAction {
  WEBKIT_CONTEXT_MENU_ACTION_NO_ACTION,
  WEBKIT_CONTEXT_MENU_ACTION_OPEN_LINK,
  WEBKIT_CONTEXT_MENU_ACTION_OPEN_LINK_IN_NEW_WINDOW,
  WEBKIT_CONTEXT_MENU_ACTION_DOWNLOAD_LINK_TO_DISK,
  WEBKIT_CONTEXT_MENU_ACTION_COPY_LINK_TO_CLIPBOARD,
  WEBKIT_CONTEXT_MENU_ACTION_OPEN_IMAGE_IN_NEW_WINDOW,
  WEBKIT_CONTEXT_MENU_ACTION_DOWNLOAD_IMAGE_TO_DISK,
  WEBKIT_CONTEXT_MENU_ACTION_COPY_IMAGE_TO_CLIPBOARD,
  WEBKIT_CONTEXT_MENU_ACTION_COPY_IMAGE_URL_TO_CLIPBOARD,
  WEBKIT_CONTEXT_MENU_ACTION_OPEN_FRAME_IN_NEW_WINDOW,
  WEBKIT_CONTEXT_MENU_ACTION_GO_BACK,
  WEBKIT_CONTEXT_MENU_ACTION_GO_FORWARD,
  WEBKIT_CONTEXT_MENU_ACTION_STOP,
  WEBKIT_CONTEXT_MENU_ACTION_RELOAD,
  WEBKIT_CONTEXT_MENU_ACTION_COPY,
  WEBKIT_CONTEXT_MENU_ACTION_CUT,
  WEBKIT_CONTEXT_MENU_ACTION_PASTE,
  WEBKIT_CONTEXT_MENU_ACTION_DELETE,
  WEBKIT_CONTEXT_MENU_ACTION_SELECT_ALL,
  WEBKIT_CONTEXT_MENU_ACTION_INPUT_METHODS,
  WEBKIT_CONTEXT_MENU_ACTION_UNICODE,
  WEBKIT_CONTEXT_MENU_ACTION_SPELLING_GUESS,
  WEBKIT_CONTEXT_MENU_ACTION_NO_GUESSES_FOUND,
  WEBKIT_CONTEXT_MENU_ACTION_IGNORE_SPELLING,
  WEBKIT_CONTEXT_MENU_ACTION_LEARN_SPELLING,
  WEBKIT_CONTEXT_MENU_ACTION_IGNORE_GRAMMAR,
  WEBKIT_CONTEXT_MENU_ACTION_FONT_MENU,
  WEBKIT_CONTEXT_MENU_ACTION_BOLD,
  WEBKIT_CONTEXT_MENU_ACTION_ITALIC,
  WEBKIT_CONTEXT_MENU_ACTION_UNDERLINE,
  WEBKIT_CONTEXT_MENU_ACTION_OUTLINE,
  WEBKIT_CONTEXT_MENU_ACTION_INSPECT_ELEMENT,
  WEBKIT_CONTEXT_MENU_ACTION_OPEN_VIDEO_IN_NEW_WINDOW,
  WEBKIT_CONTEXT_MENU_ACTION_OPEN_AUDIO_IN_NEW_WINDOW,
  WEBKIT_CONTEXT_MENU_ACTION_COPY_VIDEO_LINK_TO_CLIPBOARD,
  WEBKIT_CONTEXT_MENU_ACTION_COPY_AUDIO_LINK_TO_CLIPBOARD,
  WEBKIT_CONTEXT_MENU_ACTION_TOGGLE_MEDIA_CONTROLS,
  WEBKIT_CONTEXT_MENU_ACTION_TOGGLE_MEDIA_LOOP,
  WEBKIT_CONTEXT_MENU_ACTION_ENTER_VIDEO_FULLSCREEN,
  WEBKIT_CONTEXT_MENU_ACTION_MEDIA_PLAY,
  WEBKIT_CONTEXT_MENU_ACTION_MEDIA_PAUSE,
  WEBKIT_CONTEXT_MENU_ACTION_MEDIA_MUTE,
  WEBKIT_CONTEXT_MENU_ACTION_DOWNLOAD_VIDEO_TO_DISK,
  WEBKIT_CONTEXT_MENU_ACTION_DOWNLOAD_AUDIO_TO_DISK,
  WEBKIT_CONTEXT_MENU_ACTION_INSERT_EMOJI,
  WEBKIT_CONTEXT_MENU_ACTION_CUSTOM,
}
export enum FormSubmissionStep {
  WEBKIT_FORM_SUBMISSION_WILL_SEND_DOM_EVENT,
  WEBKIT_FORM_SUBMISSION_WILL_COMPLETE,
}
export enum HitTestResultContext {
  WEBKIT_HIT_TEST_RESULT_CONTEXT_DOCUMENT,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION,
}
export interface DOMEventTarget {
  add_event_listener(...args: any[]): any;
  add_event_listener_with_closure(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
  dispatch_event(...args: any[]): any;
  remove_event_listener(...args: any[]): any;
  remove_event_listener_with_closure(event_name: string, handler: GObject.Closure, use_capture: boolean): boolean;
}
export interface DOMNodeFilter {
  accept_node(...args: any[]): any;
}
export interface DOMXPathNSResolver {
  lookup_namespace_uri(...args: any[]): any;
}
export class ContextMenu extends GObject.Object {
  constructor();
  append(item: ContextMenuItem): void;
  first(): ContextMenuItem;
  get_item_at_position(position: number): ContextMenuItem;
  get_items(): GLib.List;
  get_n_items(): number;
  get_user_data(): GLib.Variant;
  insert(item: ContextMenuItem, position: number): void;
  last(): ContextMenuItem;
  move_item(item: ContextMenuItem, position: number): void;
  prepend(item: ContextMenuItem): void;
  remove(item: ContextMenuItem): void;
  remove_all(): void;
  set_user_data(user_data: GLib.Variant): void;
}
export class ContextMenuItem extends GObject.InitiallyUnowned {
  constructor(action: Gtk.Action);
  get_action(): Gtk.Action;
  get_gaction(): Gio.Action;
  get_stock_action(): ContextMenuAction;
  get_submenu(): ContextMenu;
  is_separator(): boolean;
  set_submenu(submenu: ContextMenu | null): void;
}
export class DOMAttr extends DOMNode {
  'local-name': string;
  name: string;
  'namespace-uri': string;
  'owner-element': DOMElement;
  prefix: string;
  specified: boolean;
  value: string;
  static parent_instance: any;
  get_local_name(...args: any[]): any;
  get_name(): string;
  get_namespace_uri(...args: any[]): any;
  get_owner_element(): DOMElement;
  get_prefix(...args: any[]): any;
  get_specified(): boolean;
  get_value(): string;
  set_value(value: string): void;
}
export class DOMBlob extends DOMObject {
  size: number;
  static parent_instance: DOMObject;
  get_size(): number;
}
export class DOMCDATASection extends DOMText {
  static parent_instance: any;
}
export class DOMCSSRule extends DOMObject {
  'css-text': string;
  'parent-rule': DOMCSSRule;
  'parent-style-sheet': DOMCSSStyleSheet;
  type: number;
  static parent_instance: DOMObject;
  get_css_text(): string;
  get_parent_rule(): DOMCSSRule;
  get_parent_style_sheet(): DOMCSSStyleSheet;
  get_rule_type(): number;
  set_css_text(value: string): void;
}
export class DOMCSSRuleList extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  item(index: number): DOMCSSRule;
}
export class DOMCSSStyleDeclaration extends DOMObject {
  'css-text': string;
  length: number;
  'parent-rule': DOMCSSRule;
  static parent_instance: DOMObject;
  get_css_text(): string;
  get_length(): number;
  get_parent_rule(): DOMCSSRule;
  get_property_priority(propertyName: string): string;
  get_property_shorthand(propertyName: string): string;
  get_property_value(propertyName: string): string;
  is_property_implicit(propertyName: string): boolean;
  item(index: number): string;
  remove_property(propertyName: string): string;
  set_css_text(value: string): void;
  set_property(propertyName: string, value: string, priority: string): void;
}
export class DOMCSSStyleSheet extends DOMStyleSheet {
  'css-rules': DOMCSSRuleList;
  'owner-rule': DOMCSSRule;
  rules: DOMCSSRuleList;
  static parent_instance: any;
  add_rule(selector: string, style: string, index: number): number;
  delete_rule(index: number): void;
  get_css_rules(): DOMCSSRuleList;
  get_owner_rule(): DOMCSSRule;
  get_rules(): DOMCSSRuleList;
  insert_rule(rule: string, index: number): number;
  remove_rule(index: number): void;
}
export class DOMCSSValue extends DOMObject {
  'css-text': string;
  'css-value-type': number;
  static parent_instance: DOMObject;
  get_css_text(): string;
  get_css_value_type(): number;
  set_css_text(value: string): void;
}
export class DOMCharacterData extends DOMNode {
  data: string;
  length: number;
  static parent_instance: any;
  append_data(data: string): void;
  delete_data(offset: number, length: number): void;
  get_data(): string;
  get_length(): number;
  insert_data(offset: number, data: string): void;
  replace_data(offset: number, length: number, data: string): void;
  set_data(value: string): void;
  substring_data(offset: number, length: number): string;
}
export class DOMClientRect extends DOMObject {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  static parent_instance: DOMObject;
  get_bottom(): number;
  get_height(): number;
  get_left(): number;
  get_right(): number;
  get_top(): number;
  get_width(): number;
}
export class DOMClientRectList extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  item(index: number): DOMClientRect;
}
export class DOMComment extends DOMCharacterData {
  static parent_instance: any;
}
export class DOMDOMImplementation extends DOMObject {
  static parent_instance: DOMObject;
  create_css_style_sheet(title: string, media: string): DOMCSSStyleSheet;
  create_document(namespaceURI: string | null, qualifiedName: string, doctype: DOMDocumentType | null): DOMDocument;
  create_document_type(qualifiedName: string, publicId: string, systemId: string): DOMDocumentType;
  create_html_document(title: string): DOMHTMLDocument;
  has_feature(feature: string, version: string): boolean;
}
export class DOMDOMSelection extends DOMObject {
  'anchor-node': DOMNode;
  'anchor-offset': number;
  'base-node': DOMNode;
  'base-offset': number;
  'extent-node': DOMNode;
  'extent-offset': number;
  'focus-node': DOMNode;
  'focus-offset': number;
  'is-collapsed': boolean;
  'range-count': number;
  type: string;
  static parent_instance: DOMObject;
  add_range(range: DOMRange): void;
  collapse(node: DOMNode, offset: number): void;
  collapse_to_end(): void;
  collapse_to_start(): void;
  contains_node(node: DOMNode, allowPartial: boolean): boolean;
  delete_from_document(): void;
  empty(): void;
  extend(node: DOMNode, offset: number): void;
  get_anchor_node(): DOMNode;
  get_anchor_offset(): number;
  get_base_node(): DOMNode;
  get_base_offset(): number;
  get_extent_node(): DOMNode;
  get_extent_offset(): number;
  get_focus_node(): DOMNode;
  get_focus_offset(): number;
  get_is_collapsed(): boolean;
  get_range_at(index: number): DOMRange;
  get_range_count(): number;
  get_selection_type(): string;
  modify(alter: string, direction: string, granularity: string): void;
  remove_all_ranges(): void;
  select_all_children(node: DOMNode): void;
  set_base_and_extent(baseNode: DOMNode, baseOffset: number, extentNode: DOMNode, extentOffset: number): void;
  set_position(node: DOMNode, offset: number): void;
}
export class DOMDOMTokenList extends DOMObject {
  length: number;
  value: string;
  static parent_instance: DOMObject;
  add(error: GLib.Error, ...args: any[]): void;
  contains(token: string): boolean;
  get_length(): number;
  get_value(): string;
  item(index: number): string;
  remove(error: GLib.Error, ...args: any[]): void;
  replace(token: string, newToken: string): void;
  set_value(value: string): void;
  toggle(token: string, force: boolean): boolean;
}
export class DOMDOMWindow extends DOMObject {
  closed: boolean;
  'default-status': string;
  'device-pixel-ratio': number;
  document: DOMDocument;
  'frame-element': DOMElement;
  frames: DOMDOMWindow;
  'inner-height': number;
  'inner-width': number;
  length: number;
  name: string;
  'offscreen-buffering': boolean;
  opener: DOMDOMWindow;
  orientation: number;
  'outer-height': number;
  'outer-width': number;
  'page-x-offset': number;
  'page-y-offset': number;
  parent: DOMDOMWindow;
  'screen-left': number;
  'screen-top': number;
  'screen-x': number;
  'screen-y': number;
  'scroll-x': number;
  'scroll-y': number;
  self: DOMDOMWindow;
  status: string;
  top: DOMDOMWindow;
  window: DOMDOMWindow;
  static parent_instance: DOMObject;
  alert(message: string): void;
  blur(): void;
  capture_events(): void;
  close(): void;
  confirm(message: string): boolean;
  find(string: string, caseSensitive: boolean, backwards: boolean, wrap: boolean, wholeWord: boolean, searchInFrames: boolean, showDialog: boolean): boolean;
  focus(): void;
  get_closed(): boolean;
  get_computed_style(element: DOMElement, pseudoElement: string | null): DOMCSSStyleDeclaration;
  get_default_status(): string;
  get_device_pixel_ratio(): number;
  get_document(): DOMDocument;
  get_frame_element(): DOMElement;
  get_frames(): DOMDOMWindow;
  get_inner_height(): number;
  get_inner_width(): number;
  get_length(): number;
  get_name(): string;
  get_offscreen_buffering(): boolean;
  get_opener(): DOMDOMWindow;
  get_orientation(): number;
  get_outer_height(): number;
  get_outer_width(): number;
  get_page_x_offset(): number;
  get_page_y_offset(): number;
  get_parent(): DOMDOMWindow;
  get_screen_left(): number;
  get_screen_top(): number;
  get_screen_x(): number;
  get_screen_y(): number;
  get_scroll_x(): number;
  get_scroll_y(): number;
  get_selection(): DOMDOMSelection;
  get_self(): DOMDOMWindow;
  get_status(): string;
  get_top(): DOMDOMWindow;
  get_window(): DOMDOMWindow;
  move_by(x: number, y: number): void;
  move_to(x: number, y: number): void;
  print(): void;
  prompt(message: string, defaultValue: string): string;
  release_events(): void;
  resize_by(x: number, y: number): void;
  resize_to(width: number, height: number): void;
  scroll_by(x: number, y: number): void;
  scroll_to(x: number, y: number): void;
  set_default_status(value: string): void;
  set_name(value: string): void;
  set_status(value: string): void;
  stop(): void;
  webkit_message_handlers_post_message(handler: string, message: string): boolean;
}
export class DOMDocument extends DOMNode {
  'active-element': DOMElement;
  anchors: DOMHTMLCollection;
  applets: DOMHTMLCollection;
  body: DOMHTMLElement;
  'character-set': string;
  charset: string;
  'child-element-count': number;
  children: DOMHTMLCollection;
  'compat-mode': string;
  'content-type': string;
  cookie: string;
  'current-script': DOMHTMLScriptElement;
  'default-view': DOMDOMWindow;
  'design-mode': string;
  dir: string;
  doctype: DOMDocumentType;
  'document-element': DOMElement;
  'document-uri': string;
  domain: string;
  embeds: DOMHTMLCollection;
  'first-element-child': DOMElement;
  forms: DOMHTMLCollection;
  head: DOMHTMLHeadElement;
  hidden: boolean;
  images: DOMHTMLCollection;
  implementation: DOMDOMImplementation;
  'input-encoding': string;
  'last-element-child': DOMElement;
  'last-modified': string;
  links: DOMHTMLCollection;
  origin: string;
  plugins: DOMHTMLCollection;
  'pointer-lock-element': DOMElement;
  'preferred-stylesheet-set': string;
  'ready-state': string;
  referrer: string;
  scripts: DOMHTMLCollection;
  'scrolling-element': DOMElement;
  'selected-stylesheet-set': string;
  'style-sheets': DOMStyleSheetList;
  title: string;
  url: string;
  'visibility-state': string;
  'webkit-current-full-screen-element': DOMElement;
  'webkit-full-screen-keyboard-input-allowed': boolean;
  'webkit-fullscreen-element': DOMElement;
  'webkit-fullscreen-enabled': boolean;
  'webkit-is-full-screen': boolean;
  'xml-encoding': string;
  'xml-standalone': boolean;
  'xml-version': string;
  static parent_instance: any;
  adopt_node(source: DOMNode): DOMNode;
  caret_range_from_point(x: number, y: number): DOMRange;
  create_attribute(name: string): DOMAttr;
  create_attribute_ns(namespaceURI: string | null, qualifiedName: string): DOMAttr;
  create_cdata_section(data: string): DOMCDATASection;
  create_comment(data: string): DOMComment;
  create_css_style_declaration(): DOMCSSStyleDeclaration;
  create_document_fragment(): DOMDocumentFragment;
  create_element(tagName: string): DOMElement;
  create_element_ns(namespaceURI: string | null, qualifiedName: string): DOMElement;
  create_entity_reference(name: string | null): DOMEntityReference;
  create_event(eventType: string): DOMEvent;
  create_expression(expression: string, resolver: any): DOMXPathExpression;
  create_node_iterator(root: DOMNode, whatToShow: number, filter: any | null, expandEntityReferences: boolean): DOMNodeIterator;
  create_ns_resolver(nodeResolver: DOMNode): any;
  create_processing_instruction(target: string, data: string): DOMProcessingInstruction;
  create_range(): DOMRange;
  create_text_node(data: string): DOMText;
  create_tree_walker(root: DOMNode, whatToShow: number, filter: any | null, expandEntityReferences: boolean): DOMTreeWalker;
  element_from_point(x: number, y: number): DOMElement;
  evaluate(expression: string, contextNode: DOMNode, resolver: any | null, type: number, inResult: DOMXPathResult | null): DOMXPathResult;
  exec_command(command: string, userInterface: boolean, value: string): boolean;
  exit_pointer_lock(): void;
  get_active_element(): DOMElement;
  get_anchors(): DOMHTMLCollection;
  get_applets(): DOMHTMLCollection;
  get_body(): DOMHTMLElement;
  get_character_set(): string;
  get_charset(): string;
  get_child_element_count(): number;
  get_children(): DOMHTMLCollection;
  get_compat_mode(): string;
  get_content_type(): string;
  get_cookie(): string;
  get_current_script(): DOMHTMLScriptElement;
  get_default_charset(): string;
  get_default_view(): DOMDOMWindow;
  get_design_mode(): string;
  get_dir(): string;
  get_doctype(): DOMDocumentType;
  get_document_element(): DOMElement;
  get_document_uri(): string;
  get_domain(): string;
  get_element_by_id(elementId: string): DOMElement;
  get_elements_by_class_name(class_name: string): DOMNodeList;
  get_elements_by_class_name_as_html_collection(classNames: string): DOMHTMLCollection;
  get_elements_by_name(elementName: string): DOMNodeList;
  get_elements_by_tag_name(tag_name: string): DOMNodeList;
  get_elements_by_tag_name_as_html_collection(tagname: string): DOMHTMLCollection;
  get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
  get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
  get_embeds(): DOMHTMLCollection;
  get_first_element_child(): DOMElement;
  get_forms(): DOMHTMLCollection;
  get_head(): DOMHTMLHeadElement;
  get_hidden(): boolean;
  get_images(): DOMHTMLCollection;
  get_implementation(): DOMDOMImplementation;
  get_input_encoding(): string;
  get_last_element_child(): DOMElement;
  get_last_modified(): string;
  get_links(): DOMHTMLCollection;
  get_origin(): string;
  get_override_style(element: DOMElement, pseudoElement: string | null): DOMCSSStyleDeclaration;
  get_plugins(): DOMHTMLCollection;
  get_pointer_lock_element(): DOMElement;
  get_preferred_stylesheet_set(): string;
  get_ready_state(): string;
  get_referrer(): string;
  get_scripts(): DOMHTMLCollection;
  get_scrolling_element(): DOMElement;
  get_selected_stylesheet_set(): string;
  get_style_sheets(): DOMStyleSheetList;
  get_title(): string;
  get_url(): string;
  get_visibility_state(): string;
  get_webkit_current_fullscreen_element(): DOMElement;
  get_webkit_fullscreen_element(): DOMElement;
  get_webkit_fullscreen_enabled(): boolean;
  get_webkit_fullscreen_keyboard_input_allowed(): boolean;
  get_webkit_is_fullscreen(): boolean;
  get_xml_encoding(): string;
  get_xml_standalone(): boolean;
  get_xml_version(): string;
  has_focus(): boolean;
  import_node(importedNode: DOMNode, deep: boolean): DOMNode;
  query_command_enabled(command: string): boolean;
  query_command_indeterm(command: string): boolean;
  query_command_state(command: string): boolean;
  query_command_supported(command: string): boolean;
  query_command_value(command: string): string;
  query_selector(selectors: string): DOMElement;
  query_selector_all(selectors: string): DOMNodeList;
  set_body(value: DOMHTMLElement): void;
  set_charset(value: string): void;
  set_cookie(value: string): void;
  set_design_mode(value: string): void;
  set_dir(value: string): void;
  set_document_uri(value: string): void;
  set_selected_stylesheet_set(value: string): void;
  set_title(value: string): void;
  set_xml_standalone(value: boolean): void;
  set_xml_version(value: string): void;
  webkit_cancel_fullscreen(): void;
  webkit_exit_fullscreen(): void;
}
export class DOMDocumentFragment extends DOMNode {
  'child-element-count': number;
  children: DOMHTMLCollection;
  'first-element-child': DOMElement;
  'last-element-child': DOMElement;
  static parent_instance: any;
  get_child_element_count(): number;
  get_children(): DOMHTMLCollection;
  get_element_by_id(elementId: string): DOMElement;
  get_first_element_child(): DOMElement;
  get_last_element_child(): DOMElement;
  query_selector(selectors: string): DOMElement;
  query_selector_all(selectors: string): DOMNodeList;
}
export class DOMDocumentType extends DOMNode {
  entities: DOMNamedNodeMap;
  'internal-subset': string;
  name: string;
  notations: DOMNamedNodeMap;
  'public-id': string;
  'system-id': string;
  static parent_instance: any;
  get_entities(): DOMNamedNodeMap;
  get_internal_subset(): string;
  get_name(): string;
  get_notations(): DOMNamedNodeMap;
  get_public_id(): string;
  get_system_id(): string;
}
export class DOMElement extends DOMNode {
  attributes: DOMNamedNodeMap;
  'child-element-count': number;
  children: DOMHTMLCollection;
  'class-list': DOMDOMTokenList;
  'class-name': string;
  'client-height': number;
  'client-left': number;
  'client-top': number;
  'client-width': number;
  'first-element-child': DOMElement;
  id: string;
  'inner-html': string;
  'last-element-child': DOMElement;
  'local-name': string;
  'namespace-uri': string;
  'next-element-sibling': DOMElement;
  'offset-height': number;
  'offset-left': number;
  'offset-parent': DOMElement;
  'offset-top': number;
  'offset-width': number;
  'outer-html': string;
  prefix: string;
  'previous-element-sibling': DOMElement;
  'scroll-height': number;
  'scroll-left': number;
  'scroll-top': number;
  'scroll-width': number;
  style: DOMCSSStyleDeclaration;
  'tag-name': string;
  'webkit-region-overset': string;
  static parent_instance: any;
  blur(): void;
  closest(selectors: string): DOMElement;
  focus(): void;
  get_attribute(name: string): string;
  get_attribute_node(name: string): DOMAttr;
  get_attribute_node_ns(namespaceURI: string, localName: string): DOMAttr;
  get_attribute_ns(namespaceURI: string, localName: string): string;
  get_attributes(): DOMNamedNodeMap;
  get_bounding_client_rect(): DOMClientRect;
  get_child_element_count(): number;
  get_children(): DOMHTMLCollection;
  get_class_list(): DOMDOMTokenList;
  get_class_name(): string;
  get_client_height(): number;
  get_client_left(): number;
  get_client_rects(): DOMClientRectList;
  get_client_top(): number;
  get_client_width(): number;
  get_elements_by_class_name(class_name: string): DOMNodeList;
  get_elements_by_class_name_as_html_collection(name: string): DOMHTMLCollection;
  get_elements_by_tag_name(tag_name: string): DOMNodeList;
  get_elements_by_tag_name_as_html_collection(name: string): DOMHTMLCollection;
  get_elements_by_tag_name_ns(namespace_uri: string, tag_name: string): DOMNodeList;
  get_elements_by_tag_name_ns_as_html_collection(namespaceURI: string, localName: string): DOMHTMLCollection;
  get_first_element_child(): DOMElement;
  get_id(): string;
  get_inner_html(): string;
  get_last_element_child(): DOMElement;
  get_local_name(...args: any[]): any;
  get_namespace_uri(...args: any[]): any;
  get_next_element_sibling(): DOMElement;
  get_offset_height(): number;
  get_offset_left(): number;
  get_offset_parent(): DOMElement;
  get_offset_top(): number;
  get_offset_width(): number;
  get_outer_html(): string;
  get_prefix(...args: any[]): any;
  get_previous_element_sibling(): DOMElement;
  get_scroll_height(): number;
  get_scroll_left(): number;
  get_scroll_top(): number;
  get_scroll_width(): number;
  get_style(): DOMCSSStyleDeclaration;
  get_tag_name(): string;
  get_webkit_region_overset(): string;
  has_attribute(name: string): boolean;
  has_attribute_ns(namespaceURI: string, localName: string): boolean;
  has_attributes(): boolean;
  html_input_element_get_auto_filled(): boolean;
  html_input_element_is_user_edited(): boolean;
  html_input_element_set_auto_filled(auto_filled: boolean): void;
  html_input_element_set_editing_value(value: string): void;
  insert_adjacent_element(where: string, element: DOMElement): DOMElement;
  insert_adjacent_html(where: string, html: string): void;
  insert_adjacent_text(where: string, text: string): void;
  matches(selectors: string): boolean;
  query_selector(selectors: string): DOMElement;
  query_selector_all(selectors: string): DOMNodeList;
  remove(): void;
  remove_attribute(name: string): void;
  remove_attribute_node(oldAttr: DOMAttr): DOMAttr;
  remove_attribute_ns(namespaceURI: string, localName: string): void;
  request_pointer_lock(): void;
  scroll_by_lines(lines: number): void;
  scroll_by_pages(pages: number): void;
  scroll_into_view(alignWithTop: boolean): void;
  scroll_into_view_if_needed(centerIfNeeded: boolean): void;
  set_attribute(name: string, value: string): void;
  set_attribute_node(newAttr: DOMAttr): DOMAttr;
  set_attribute_node_ns(newAttr: DOMAttr): DOMAttr;
  set_attribute_ns(namespaceURI: string | null, qualifiedName: string, value: string): void;
  set_class_name(value: string): void;
  set_id(value: string): void;
  set_inner_html(value: string): void;
  set_outer_html(value: string): void;
  set_scroll_left(value: number): void;
  set_scroll_top(value: number): void;
  webkit_matches_selector(selectors: string): boolean;
  webkit_request_fullscreen(): void;
}
export class DOMEntityReference extends DOMNode {
  static parent_instance: any;
}
export class DOMEvent extends DOMObject {
  bubbles: boolean;
  'cancel-bubble': boolean;
  cancelable: boolean;
  'current-target': any;
  'event-phase': number;
  'return-value': boolean;
  'src-element': any;
  target: any;
  'time-stamp': number;
  type: string;
  static parent_instance: DOMObject;
  get_bubbles(): boolean;
  get_cancel_bubble(): boolean;
  get_cancelable(): boolean;
  get_current_target(): any;
  get_event_phase(): number;
  get_event_type(): string;
  get_return_value(): boolean;
  get_src_element(): any;
  get_target(): any;
  get_time_stamp(): number;
  init_event(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
  prevent_default(): void;
  set_cancel_bubble(value: boolean): void;
  set_return_value(value: boolean): void;
  stop_propagation(): void;
}
export class DOMFile extends DOMBlob {
  name: string;
  static parent_instance: any;
  get_name(): string;
}
export class DOMFileList extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  item(index: number): DOMFile;
}
export class DOMHTMLAnchorElement extends DOMHTMLElement {
  charset: string;
  coords: string;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  hreflang: string;
  name: string;
  pathname: string;
  port: string;
  protocol: string;
  rel: string;
  rev: string;
  search: string;
  shape: string;
  target: string;
  text: string;
  type: string;
  static parent_instance: any;
  get_charset(): string;
  get_coords(): string;
  get_hash(): string;
  get_host(): string;
  get_hostname(): string;
  get_href(): string;
  get_hreflang(): string;
  get_name(): string;
  get_pathname(): string;
  get_port(): string;
  get_protocol(): string;
  get_rel(): string;
  get_rev(): string;
  get_search(): string;
  get_shape(): string;
  get_target(): string;
  get_text(): string;
  get_type_attr(): string;
  set_charset(value: string): void;
  set_coords(value: string): void;
  set_hash(value: string): void;
  set_host(value: string): void;
  set_hostname(value: string): void;
  set_href(value: string): void;
  set_hreflang(value: string): void;
  set_name(value: string): void;
  set_pathname(value: string): void;
  set_port(value: string): void;
  set_protocol(value: string): void;
  set_rel(value: string): void;
  set_rev(value: string): void;
  set_search(value: string): void;
  set_shape(value: string): void;
  set_target(value: string): void;
  set_text(value: string): void;
  set_type_attr(value: string): void;
}
export class DOMHTMLAppletElement extends DOMHTMLElement {
  align: string;
  alt: string;
  archive: string;
  code: string;
  'code-base': string;
  height: string;
  hspace: number;
  name: string;
  object: string;
  vspace: number;
  width: string;
  static parent_instance: any;
  get_align(): string;
  get_alt(): string;
  get_archive(): string;
  get_code(): string;
  get_code_base(): string;
  get_height(): string;
  get_hspace(): number;
  get_name(): string;
  get_object(): string;
  get_vspace(): number;
  get_width(): string;
  set_align(value: string): void;
  set_alt(value: string): void;
  set_archive(value: string): void;
  set_code(value: string): void;
  set_code_base(value: string): void;
  set_height(value: string): void;
  set_hspace(value: number): void;
  set_name(value: string): void;
  set_object(value: string): void;
  set_vspace(value: number): void;
  set_width(value: string): void;
}
export class DOMHTMLAreaElement extends DOMHTMLElement {
  alt: string;
  coords: string;
  hash: string;
  host: string;
  hostname: string;
  href: string;
  'no-href': boolean;
  pathname: string;
  port: string;
  protocol: string;
  search: string;
  shape: string;
  target: string;
  static parent_instance: any;
  get_alt(): string;
  get_coords(): string;
  get_hash(): string;
  get_host(): string;
  get_hostname(): string;
  get_href(): string;
  get_no_href(): boolean;
  get_pathname(): string;
  get_port(): string;
  get_protocol(): string;
  get_search(): string;
  get_shape(): string;
  get_target(): string;
  set_alt(value: string): void;
  set_coords(value: string): void;
  set_hash(value: string): void;
  set_host(value: string): void;
  set_hostname(value: string): void;
  set_href(value: string): void;
  set_no_href(value: boolean): void;
  set_pathname(value: string): void;
  set_port(value: string): void;
  set_protocol(value: string): void;
  set_search(value: string): void;
  set_shape(value: string): void;
  set_target(value: string): void;
}
export class DOMHTMLBRElement extends DOMHTMLElement {
  clear: string;
  static parent_instance: any;
  get_clear(): string;
  set_clear(value: string): void;
}
export class DOMHTMLBaseElement extends DOMHTMLElement {
  href: string;
  target: string;
  static parent_instance: any;
  get_href(): string;
  get_target(): string;
  set_href(value: string): void;
  set_target(value: string): void;
}
export class DOMHTMLBaseFontElement extends DOMHTMLElement {
  static parent_instance: any;
  get_color(): string;
  get_face(): string;
  get_size(): number;
  set_color(value: string): void;
  set_face(value: string): void;
  set_size(value: number): void;
}
export class DOMHTMLBodyElement extends DOMHTMLElement {
  'a-link': string;
  background: string;
  'bg-color': string;
  link: string;
  text: string;
  'v-link': string;
  static parent_instance: any;
  get_a_link(): string;
  get_background(): string;
  get_bg_color(): string;
  get_link(): string;
  get_text(): string;
  get_v_link(): string;
  set_a_link(value: string): void;
  set_background(value: string): void;
  set_bg_color(value: string): void;
  set_link(value: string): void;
  set_text(value: string): void;
  set_v_link(value: string): void;
}
export class DOMHTMLButtonElement extends DOMHTMLElement {
  autofocus: boolean;
  disabled: boolean;
  form: DOMHTMLFormElement;
  name: string;
  type: string;
  value: string;
  'will-validate': boolean;
  static parent_instance: any;
  get_autofocus(): boolean;
  get_button_type(): string;
  get_disabled(): boolean;
  get_form(): DOMHTMLFormElement;
  get_name(): string;
  get_value(): string;
  get_will_validate(): boolean;
  set_autofocus(value: boolean): void;
  set_button_type(value: string): void;
  set_disabled(value: boolean): void;
  set_name(value: string): void;
  set_value(value: string): void;
}
export class DOMHTMLCanvasElement extends DOMHTMLElement {
  height: number;
  width: number;
  static parent_instance: any;
  get_height(): number;
  get_width(): number;
  set_height(value: number): void;
  set_width(value: number): void;
}
export class DOMHTMLCollection extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  item(index: number): DOMNode;
  named_item(name: string): DOMNode;
}
export class DOMHTMLDListElement extends DOMHTMLElement {
  compact: boolean;
  static parent_instance: any;
  get_compact(): boolean;
  set_compact(value: boolean): void;
}
export class DOMHTMLDirectoryElement extends DOMHTMLElement {
  compact: boolean;
  static parent_instance: any;
  get_compact(): boolean;
  set_compact(value: boolean): void;
}
export class DOMHTMLDivElement extends DOMHTMLElement {
  align: string;
  static parent_instance: any;
  get_align(): string;
  set_align(value: string): void;
}
export class DOMHTMLDocument extends DOMDocument {
  'alink-color': string;
  'bg-color': string;
  dir: any;
  'fg-color': string;
  height: number;
  'link-color': string;
  'vlink-color': string;
  width: number;
  static parent_instance: any;
  capture_events(): void;
  clear(): void;
  close(): void;
  get_alink_color(): string;
  get_bg_color(): string;
  get_compat_mode(...args: any[]): any;
  get_design_mode(...args: any[]): any;
  get_dir(...args: any[]): any;
  get_embeds(...args: any[]): any;
  get_fg_color(): string;
  get_height(): number;
  get_link_color(): string;
  get_plugins(...args: any[]): any;
  get_scripts(...args: any[]): any;
  get_vlink_color(): string;
  get_width(): number;
  release_events(): void;
  set_alink_color(value: string): void;
  set_bg_color(value: string): void;
  set_design_mode(...args: any[]): any;
  set_dir(...args: any[]): any;
  set_fg_color(value: string): void;
  set_link_color(value: string): void;
  set_vlink_color(value: string): void;
}
export class DOMHTMLElement extends DOMElement {
  'access-key': string;
  'content-editable': string;
  dir: string;
  draggable: boolean;
  hidden: boolean;
  'inner-text': string;
  'is-content-editable': boolean;
  lang: string;
  'outer-text': string;
  spellcheck: boolean;
  'tab-index': number;
  title: string;
  translate: boolean;
  webkitdropzone: string;
  static parent_instance: any;
  click(): void;
  get_access_key(): string;
  get_children(...args: any[]): any;
  get_content_editable(): string;
  get_dir(): string;
  get_draggable(): boolean;
  get_hidden(): boolean;
  get_inner_html(...args: any[]): any;
  get_inner_text(): string;
  get_is_content_editable(): boolean;
  get_lang(): string;
  get_outer_html(...args: any[]): any;
  get_outer_text(): string;
  get_spellcheck(): boolean;
  get_tab_index(): number;
  get_title(): string;
  get_translate(): boolean;
  get_webkitdropzone(): string;
  set_access_key(value: string): void;
  set_content_editable(value: string): void;
  set_dir(value: string): void;
  set_draggable(value: boolean): void;
  set_hidden(value: boolean): void;
  set_inner_html(...args: any[]): any;
  set_inner_text(value: string): void;
  set_lang(value: string): void;
  set_outer_html(...args: any[]): any;
  set_outer_text(value: string): void;
  set_spellcheck(value: boolean): void;
  set_tab_index(value: number): void;
  set_title(value: string): void;
  set_translate(value: boolean): void;
  set_webkitdropzone(value: string): void;
}
export class DOMHTMLEmbedElement extends DOMHTMLElement {
  align: string;
  height: number;
  name: string;
  src: string;
  type: string;
  width: number;
  static parent_instance: any;
  get_align(): string;
  get_height(): number;
  get_name(): string;
  get_src(): string;
  get_type_attr(): string;
  get_width(): number;
  set_align(value: string): void;
  set_height(value: number): void;
  set_name(value: string): void;
  set_src(value: string): void;
  set_type_attr(value: string): void;
  set_width(value: number): void;
}
export class DOMHTMLFieldSetElement extends DOMHTMLElement {
  form: DOMHTMLFormElement;
  static parent_instance: any;
  get_form(): DOMHTMLFormElement;
}
export class DOMHTMLFontElement extends DOMHTMLElement {
  color: string;
  face: string;
  size: string;
  static parent_instance: any;
  get_color(): string;
  get_face(): string;
  get_size(): string;
  set_color(value: string): void;
  set_face(value: string): void;
  set_size(value: string): void;
}
export class DOMHTMLFormElement extends DOMHTMLElement {
  'accept-charset': string;
  action: string;
  elements: DOMHTMLCollection;
  encoding: string;
  enctype: string;
  length: number;
  method: string;
  name: string;
  target: string;
  static parent_instance: any;
  get_accept_charset(): string;
  get_action(): string;
  get_elements(): DOMHTMLCollection;
  get_encoding(): string;
  get_enctype(): string;
  get_length(): number;
  get_method(): string;
  get_name(): string;
  get_target(): string;
  reset(): void;
  set_accept_charset(value: string): void;
  set_action(value: string): void;
  set_encoding(value: string): void;
  set_enctype(value: string): void;
  set_method(value: string): void;
  set_name(value: string): void;
  set_target(value: string): void;
  submit(): void;
}
export class DOMHTMLFrameElement extends DOMHTMLElement {
  'content-document': DOMDocument;
  'content-window': DOMDOMWindow;
  'frame-border': string;
  height: number;
  'long-desc': string;
  'margin-height': string;
  'margin-width': string;
  name: string;
  'no-resize': boolean;
  scrolling: string;
  src: string;
  width: number;
  static parent_instance: any;
  get_content_document(): DOMDocument;
  get_content_window(): DOMDOMWindow;
  get_frame_border(): string;
  get_height(): number;
  get_long_desc(): string;
  get_margin_height(): string;
  get_margin_width(): string;
  get_name(): string;
  get_no_resize(): boolean;
  get_scrolling(): string;
  get_src(): string;
  get_width(): number;
  set_frame_border(value: string): void;
  set_long_desc(value: string): void;
  set_margin_height(value: string): void;
  set_margin_width(value: string): void;
  set_name(value: string): void;
  set_no_resize(value: boolean): void;
  set_scrolling(value: string): void;
  set_src(value: string): void;
}
export class DOMHTMLFrameSetElement extends DOMHTMLElement {
  cols: string;
  rows: string;
  static parent_instance: any;
  get_cols(): string;
  get_rows(): string;
  set_cols(value: string): void;
  set_rows(value: string): void;
}
export class DOMHTMLHRElement extends DOMHTMLElement {
  align: string;
  'no-shade': boolean;
  size: string;
  width: string;
  static parent_instance: any;
  get_align(): string;
  get_no_shade(): boolean;
  get_size(): string;
  get_width(): string;
  set_align(value: string): void;
  set_no_shade(value: boolean): void;
  set_size(value: string): void;
  set_width(value: string): void;
}
export class DOMHTMLHeadElement extends DOMHTMLElement {
  profile: string;
  static parent_instance: any;
  get_profile(): string;
  set_profile(value: string): void;
}
export class DOMHTMLHeadingElement extends DOMHTMLElement {
  align: string;
  static parent_instance: any;
  get_align(): string;
  set_align(value: string): void;
}
export class DOMHTMLHtmlElement extends DOMHTMLElement {
  version: string;
  static parent_instance: any;
  get_version(): string;
  set_version(value: string): void;
}
export class DOMHTMLIFrameElement extends DOMHTMLElement {
  align: string;
  'content-document': DOMDocument;
  'content-window': DOMDOMWindow;
  'frame-border': string;
  height: string;
  'long-desc': string;
  'margin-height': string;
  'margin-width': string;
  name: string;
  scrolling: string;
  src: string;
  width: string;
  static parent_instance: any;
  get_align(): string;
  get_content_document(): DOMDocument;
  get_content_window(): DOMDOMWindow;
  get_frame_border(): string;
  get_height(): string;
  get_long_desc(): string;
  get_margin_height(): string;
  get_margin_width(): string;
  get_name(): string;
  get_scrolling(): string;
  get_src(): string;
  get_width(): string;
  set_align(value: string): void;
  set_frame_border(value: string): void;
  set_height(value: string): void;
  set_long_desc(value: string): void;
  set_margin_height(value: string): void;
  set_margin_width(value: string): void;
  set_name(value: string): void;
  set_scrolling(value: string): void;
  set_src(value: string): void;
  set_width(value: string): void;
}
export class DOMHTMLImageElement extends DOMHTMLElement {
  align: string;
  alt: string;
  border: string;
  complete: boolean;
  height: number;
  hspace: number;
  'is-map': boolean;
  'long-desc': string;
  lowsrc: string;
  name: string;
  'natural-height': number;
  'natural-width': number;
  src: string;
  'use-map': string;
  vspace: number;
  width: number;
  x: number;
  y: number;
  static parent_instance: any;
  get_align(): string;
  get_alt(): string;
  get_border(): string;
  get_complete(): boolean;
  get_height(): number;
  get_hspace(): number;
  get_is_map(): boolean;
  get_long_desc(): string;
  get_lowsrc(): string;
  get_name(): string;
  get_natural_height(): number;
  get_natural_width(): number;
  get_src(): string;
  get_use_map(): string;
  get_vspace(): number;
  get_width(): number;
  get_x(): number;
  get_y(): number;
  set_align(value: string): void;
  set_alt(value: string): void;
  set_border(value: string): void;
  set_height(value: number): void;
  set_hspace(value: number): void;
  set_is_map(value: boolean): void;
  set_long_desc(value: string): void;
  set_lowsrc(value: string): void;
  set_name(value: string): void;
  set_src(value: string): void;
  set_use_map(value: string): void;
  set_vspace(value: number): void;
  set_width(value: number): void;
}
export class DOMHTMLInputElement extends DOMHTMLElement {
  accept: string;
  align: string;
  alt: string;
  autofocus: boolean;
  capture: string;
  checked: boolean;
  'default-checked': boolean;
  'default-value': string;
  disabled: boolean;
  files: DOMFileList;
  form: DOMHTMLFormElement;
  height: number;
  indeterminate: boolean;
  'max-length': number;
  multiple: boolean;
  name: string;
  'read-only': boolean;
  size: number;
  src: string;
  type: string;
  'use-map': string;
  value: string;
  width: number;
  'will-validate': boolean;
  static parent_instance: any;
  get_accept(): string;
  get_align(): string;
  get_alt(): string;
  get_auto_filled(): boolean;
  get_autofocus(): boolean;
  get_capture(): boolean;
  get_capture_type(): string;
  get_checked(): boolean;
  get_default_checked(): boolean;
  get_default_value(): string;
  get_disabled(): boolean;
  get_files(): DOMFileList;
  get_form(): DOMHTMLFormElement;
  get_height(): number;
  get_indeterminate(): boolean;
  get_input_type(): string;
  get_max_length(): number;
  get_multiple(): boolean;
  get_name(): string;
  get_read_only(): boolean;
  get_size(): number;
  get_src(): string;
  get_use_map(): string;
  get_value(): string;
  get_width(): number;
  get_will_validate(): boolean;
  is_edited(): boolean;
  select(): void;
  set_accept(value: string): void;
  set_align(value: string): void;
  set_alt(value: string): void;
  set_auto_filled(value: boolean): void;
  set_autofocus(value: boolean): void;
  set_capture_type(value: string): void;
  set_checked(value: boolean): void;
  set_default_checked(value: boolean): void;
  set_default_value(value: string): void;
  set_disabled(value: boolean): void;
  set_editing_value(value: string): void;
  set_files(value: DOMFileList): void;
  set_height(value: number): void;
  set_indeterminate(value: boolean): void;
  set_input_type(value: string): void;
  set_max_length(value: number): void;
  set_multiple(value: boolean): void;
  set_name(value: string): void;
  set_read_only(value: boolean): void;
  set_size(value: number): void;
  set_src(value: string): void;
  set_use_map(value: string): void;
  set_value(value: string): void;
  set_width(value: number): void;
}
export class DOMHTMLLIElement extends DOMHTMLElement {
  type: string;
  value: number;
  static parent_instance: any;
  get_type_attr(): string;
  get_value(): number;
  set_type_attr(value: string): void;
  set_value(value: number): void;
}
export class DOMHTMLLabelElement extends DOMHTMLElement {
  form: DOMHTMLFormElement;
  'html-for': string;
  static parent_instance: any;
  get_form(): DOMHTMLFormElement;
  get_html_for(): string;
  set_html_for(value: string): void;
}
export class DOMHTMLLegendElement extends DOMHTMLElement {
  align: string;
  form: DOMHTMLFormElement;
  static parent_instance: any;
  get_align(): string;
  get_form(): DOMHTMLFormElement;
  set_align(value: string): void;
}
export class DOMHTMLLinkElement extends DOMHTMLElement {
  charset: string;
  disabled: boolean;
  href: string;
  hreflang: string;
  media: string;
  rel: string;
  rev: string;
  sheet: DOMStyleSheet;
  sizes: DOMDOMTokenList;
  target: string;
  type: string;
  static parent_instance: any;
  get_charset(): string;
  get_disabled(): boolean;
  get_href(): string;
  get_hreflang(): string;
  get_media(): string;
  get_rel(): string;
  get_rev(): string;
  get_sheet(): DOMStyleSheet;
  get_sizes(): DOMDOMTokenList;
  get_target(): string;
  get_type_attr(): string;
  set_charset(value: string): void;
  set_disabled(value: boolean): void;
  set_href(value: string): void;
  set_hreflang(value: string): void;
  set_media(value: string): void;
  set_rel(value: string): void;
  set_rev(value: string): void;
  set_sizes(value: string): void;
  set_target(value: string): void;
  set_type_attr(value: string): void;
}
export class DOMHTMLMapElement extends DOMHTMLElement {
  areas: DOMHTMLCollection;
  name: string;
  static parent_instance: any;
  get_areas(): DOMHTMLCollection;
  get_name(): string;
  set_name(value: string): void;
}
export class DOMHTMLMarqueeElement extends DOMHTMLElement {
  static parent_instance: any;
  start(): void;
  stop(): void;
}
export class DOMHTMLMenuElement extends DOMHTMLElement {
  compact: boolean;
  static parent_instance: any;
  get_compact(): boolean;
  set_compact(value: boolean): void;
}
export class DOMHTMLMetaElement extends DOMHTMLElement {
  content: string;
  'http-equiv': string;
  name: string;
  scheme: string;
  static parent_instance: any;
  get_content(): string;
  get_http_equiv(): string;
  get_name(): string;
  get_scheme(): string;
  set_content(value: string): void;
  set_http_equiv(value: string): void;
  set_name(value: string): void;
  set_scheme(value: string): void;
}
export class DOMHTMLModElement extends DOMHTMLElement {
  cite: string;
  'date-time': string;
  static parent_instance: any;
  get_cite(): string;
  get_date_time(): string;
  set_cite(value: string): void;
  set_date_time(value: string): void;
}
export class DOMHTMLOListElement extends DOMHTMLElement {
  compact: boolean;
  start: number;
  type: string;
  static parent_instance: any;
  get_compact(): boolean;
  get_start(): number;
  get_type_attr(): string;
  set_compact(value: boolean): void;
  set_start(value: number): void;
  set_type_attr(value: string): void;
}
export class DOMHTMLObjectElement extends DOMHTMLElement {
  align: string;
  archive: string;
  border: string;
  code: string;
  'code-base': string;
  'code-type': string;
  'content-document': DOMDocument;
  data: string;
  declare: boolean;
  form: DOMHTMLFormElement;
  height: string;
  hspace: number;
  name: string;
  standby: string;
  type: string;
  'use-map': string;
  vspace: number;
  width: string;
  static parent_instance: any;
  get_align(): string;
  get_archive(): string;
  get_border(): string;
  get_code(): string;
  get_code_base(): string;
  get_code_type(): string;
  get_content_document(): DOMDocument;
  get_data(): string;
  get_declare(): boolean;
  get_form(): DOMHTMLFormElement;
  get_height(): string;
  get_hspace(): number;
  get_name(): string;
  get_standby(): string;
  get_type_attr(): string;
  get_use_map(): string;
  get_vspace(): number;
  get_width(): string;
  set_align(value: string): void;
  set_archive(value: string): void;
  set_border(value: string): void;
  set_code(value: string): void;
  set_code_base(value: string): void;
  set_code_type(value: string): void;
  set_data(value: string): void;
  set_declare(value: boolean): void;
  set_height(value: string): void;
  set_hspace(value: number): void;
  set_name(value: string): void;
  set_standby(value: string): void;
  set_type_attr(value: string): void;
  set_use_map(value: string): void;
  set_vspace(value: number): void;
  set_width(value: string): void;
}
export class DOMHTMLOptGroupElement extends DOMHTMLElement {
  disabled: boolean;
  label: string;
  static parent_instance: any;
  get_disabled(): boolean;
  get_label(): string;
  set_disabled(value: boolean): void;
  set_label(value: string): void;
}
export class DOMHTMLOptionElement extends DOMHTMLElement {
  'default-selected': boolean;
  disabled: boolean;
  form: DOMHTMLFormElement;
  index: number;
  label: string;
  selected: boolean;
  text: string;
  value: string;
  static parent_instance: any;
  get_default_selected(): boolean;
  get_disabled(): boolean;
  get_form(): DOMHTMLFormElement;
  get_index(): number;
  get_label(): string;
  get_selected(): boolean;
  get_text(): string;
  get_value(): string;
  set_default_selected(value: boolean): void;
  set_disabled(value: boolean): void;
  set_label(value: string): void;
  set_selected(value: boolean): void;
  set_value(value: string): void;
}
export class DOMHTMLOptionsCollection extends DOMHTMLCollection {
  length: any;
  'selected-index': number;
  static parent_instance: any;
  get_length(...args: any[]): any;
  get_selected_index(): number;
  named_item(...args: any[]): any;
  set_selected_index(value: number): void;
}
export class DOMHTMLParagraphElement extends DOMHTMLElement {
  align: string;
  static parent_instance: any;
  get_align(): string;
  set_align(value: string): void;
}
export class DOMHTMLParamElement extends DOMHTMLElement {
  name: string;
  type: string;
  value: string;
  'value-type': string;
  static parent_instance: any;
  get_name(): string;
  get_type_attr(): string;
  get_value(): string;
  get_value_type(): string;
  set_name(value: string): void;
  set_type_attr(value: string): void;
  set_value(value: string): void;
  set_value_type(value: string): void;
}
export class DOMHTMLPreElement extends DOMHTMLElement {
  width: number;
  wrap: boolean;
  static parent_instance: any;
  get_width(): number;
  get_wrap(): boolean;
  set_width(value: number): void;
  set_wrap(value: boolean): void;
}
export class DOMHTMLQuoteElement extends DOMHTMLElement {
  cite: string;
  static parent_instance: any;
  get_cite(): string;
  set_cite(value: string): void;
}
export class DOMHTMLScriptElement extends DOMHTMLElement {
  charset: string;
  defer: boolean;
  event: string;
  'html-for': string;
  src: string;
  text: string;
  type: string;
  static parent_instance: any;
  get_charset(): string;
  get_defer(): boolean;
  get_event(): string;
  get_html_for(): string;
  get_src(): string;
  get_text(): string;
  get_type_attr(): string;
  set_charset(value: string): void;
  set_defer(value: boolean): void;
  set_event(value: string): void;
  set_html_for(value: string): void;
  set_src(value: string): void;
  set_text(value: string): void;
  set_type_attr(value: string): void;
}
export class DOMHTMLSelectElement extends DOMHTMLElement {
  autofocus: boolean;
  disabled: boolean;
  form: DOMHTMLFormElement;
  length: number;
  multiple: boolean;
  name: string;
  options: DOMHTMLOptionsCollection;
  'selected-index': number;
  size: number;
  type: string;
  value: string;
  'will-validate': boolean;
  static parent_instance: any;
  add(element: DOMHTMLElement, before: DOMHTMLElement): void;
  get_autofocus(): boolean;
  get_disabled(): boolean;
  get_form(): DOMHTMLFormElement;
  get_length(): number;
  get_multiple(): boolean;
  get_name(): string;
  get_options(): DOMHTMLOptionsCollection;
  get_select_type(): string;
  get_selected_index(): number;
  get_size(): number;
  get_value(): string;
  get_will_validate(): boolean;
  item(index: number): DOMNode;
  named_item(name: string): DOMNode;
  remove(index: number): void;
  set_autofocus(value: boolean): void;
  set_disabled(value: boolean): void;
  set_length(value: number): void;
  set_multiple(value: boolean): void;
  set_name(value: string): void;
  set_selected_index(value: number): void;
  set_size(value: number): void;
  set_value(value: string): void;
}
export class DOMHTMLStyleElement extends DOMHTMLElement {
  disabled: boolean;
  media: string;
  sheet: DOMStyleSheet;
  type: string;
  static parent_instance: any;
  get_disabled(): boolean;
  get_media(): string;
  get_sheet(): DOMStyleSheet;
  get_type_attr(): string;
  set_disabled(value: boolean): void;
  set_media(value: string): void;
  set_type_attr(value: string): void;
}
export class DOMHTMLTableCaptionElement extends DOMHTMLElement {
  align: string;
  static parent_instance: any;
  get_align(): string;
  set_align(value: string): void;
}
export class DOMHTMLTableCellElement extends DOMHTMLElement {
  abbr: string;
  align: string;
  axis: string;
  'bg-color': string;
  'cell-index': number;
  ch: string;
  'ch-off': string;
  'col-span': number;
  headers: string;
  height: string;
  'no-wrap': boolean;
  'row-span': number;
  scope: string;
  'v-align': string;
  width: string;
  static parent_instance: any;
  get_abbr(): string;
  get_align(): string;
  get_axis(): string;
  get_bg_color(): string;
  get_cell_index(): number;
  get_ch(): string;
  get_ch_off(): string;
  get_col_span(): number;
  get_headers(): string;
  get_height(): string;
  get_no_wrap(): boolean;
  get_row_span(): number;
  get_scope(): string;
  get_v_align(): string;
  get_width(): string;
  set_abbr(value: string): void;
  set_align(value: string): void;
  set_axis(value: string): void;
  set_bg_color(value: string): void;
  set_ch(value: string): void;
  set_ch_off(value: string): void;
  set_col_span(value: number): void;
  set_headers(value: string): void;
  set_height(value: string): void;
  set_no_wrap(value: boolean): void;
  set_row_span(value: number): void;
  set_scope(value: string): void;
  set_v_align(value: string): void;
  set_width(value: string): void;
}
export class DOMHTMLTableColElement extends DOMHTMLElement {
  align: string;
  ch: string;
  'ch-off': string;
  span: number;
  'v-align': string;
  width: string;
  static parent_instance: any;
  get_align(): string;
  get_ch(): string;
  get_ch_off(): string;
  get_span(): number;
  get_v_align(): string;
  get_width(): string;
  set_align(value: string): void;
  set_ch(value: string): void;
  set_ch_off(value: string): void;
  set_span(value: number): void;
  set_v_align(value: string): void;
  set_width(value: string): void;
}
export class DOMHTMLTableElement extends DOMHTMLElement {
  align: string;
  'bg-color': string;
  border: string;
  caption: DOMHTMLTableCaptionElement;
  'cell-padding': string;
  'cell-spacing': string;
  rows: DOMHTMLCollection;
  rules: string;
  summary: string;
  't-bodies': DOMHTMLCollection;
  't-foot': DOMHTMLTableSectionElement;
  't-head': DOMHTMLTableSectionElement;
  width: string;
  static parent_instance: any;
  create_caption(): DOMHTMLElement;
  create_t_foot(): DOMHTMLElement;
  create_t_head(): DOMHTMLElement;
  delete_caption(): void;
  delete_row(index: number): void;
  delete_t_foot(): void;
  delete_t_head(): void;
  get_align(): string;
  get_bg_color(): string;
  get_border(): string;
  get_caption(): DOMHTMLTableCaptionElement;
  get_cell_padding(): string;
  get_cell_spacing(): string;
  get_rows(): DOMHTMLCollection;
  get_rules(): string;
  get_summary(): string;
  get_t_bodies(): DOMHTMLCollection;
  get_t_foot(): DOMHTMLTableSectionElement;
  get_t_head(): DOMHTMLTableSectionElement;
  get_width(): string;
  insert_row(index: number): DOMHTMLElement;
  set_align(value: string): void;
  set_bg_color(value: string): void;
  set_border(value: string): void;
  set_caption(value: DOMHTMLTableCaptionElement): void;
  set_cell_padding(value: string): void;
  set_cell_spacing(value: string): void;
  set_rules(value: string): void;
  set_summary(value: string): void;
  set_t_foot(value: DOMHTMLTableSectionElement): void;
  set_t_head(value: DOMHTMLTableSectionElement): void;
  set_width(value: string): void;
}
export class DOMHTMLTableRowElement extends DOMHTMLElement {
  align: string;
  'bg-color': string;
  cells: DOMHTMLCollection;
  ch: string;
  'ch-off': string;
  'row-index': number;
  'section-row-index': number;
  'v-align': string;
  static parent_instance: any;
  delete_cell(index: number): void;
  get_align(): string;
  get_bg_color(): string;
  get_cells(): DOMHTMLCollection;
  get_ch(): string;
  get_ch_off(): string;
  get_row_index(): number;
  get_section_row_index(): number;
  get_v_align(): string;
  insert_cell(index: number): DOMHTMLElement;
  set_align(value: string): void;
  set_bg_color(value: string): void;
  set_ch(value: string): void;
  set_ch_off(value: string): void;
  set_v_align(value: string): void;
}
export class DOMHTMLTableSectionElement extends DOMHTMLElement {
  align: string;
  ch: string;
  'ch-off': string;
  rows: DOMHTMLCollection;
  'v-align': string;
  static parent_instance: any;
  delete_row(index: number): void;
  get_align(): string;
  get_ch(): string;
  get_ch_off(): string;
  get_rows(): DOMHTMLCollection;
  get_v_align(): string;
  insert_row(index: number): DOMHTMLElement;
  set_align(value: string): void;
  set_ch(value: string): void;
  set_ch_off(value: string): void;
  set_v_align(value: string): void;
}
export class DOMHTMLTextAreaElement extends DOMHTMLElement {
  autofocus: boolean;
  cols: number;
  'default-value': string;
  disabled: boolean;
  form: DOMHTMLFormElement;
  name: string;
  'read-only': boolean;
  rows: number;
  'selection-end': number;
  'selection-start': number;
  type: string;
  value: string;
  'will-validate': boolean;
  static parent_instance: any;
  get_area_type(): string;
  get_autofocus(): boolean;
  get_cols(): number;
  get_default_value(): string;
  get_disabled(): boolean;
  get_form(): DOMHTMLFormElement;
  get_name(): string;
  get_read_only(): boolean;
  get_rows(): number;
  get_selection_end(): number;
  get_selection_start(): number;
  get_value(): string;
  get_will_validate(): boolean;
  is_edited(): boolean;
  select(): void;
  set_autofocus(value: boolean): void;
  set_cols(value: number): void;
  set_default_value(value: string): void;
  set_disabled(value: boolean): void;
  set_name(value: string): void;
  set_read_only(value: boolean): void;
  set_rows(value: number): void;
  set_selection_end(value: number): void;
  set_selection_range(start: number, end: number, direction: string): void;
  set_selection_start(value: number): void;
  set_value(value: string): void;
}
export class DOMHTMLTitleElement extends DOMHTMLElement {
  text: string;
  static parent_instance: any;
  get_text(): string;
  set_text(value: string): void;
}
export class DOMHTMLUListElement extends DOMHTMLElement {
  compact: boolean;
  type: string;
  static parent_instance: any;
  get_compact(): boolean;
  get_type_attr(): string;
  set_compact(value: boolean): void;
  set_type_attr(value: string): void;
}
export class DOMKeyboardEvent extends DOMUIEvent {
  'alt-graph-key': boolean;
  'alt-key': boolean;
  'ctrl-key': boolean;
  'key-identifier': string;
  'key-location': number;
  'meta-key': boolean;
  'shift-key': boolean;
  static parent_instance: any;
  get_alt_graph_key(): boolean;
  get_alt_key(): boolean;
  get_ctrl_key(): boolean;
  get_key_identifier(): string;
  get_key_location(): number;
  get_meta_key(): boolean;
  get_modifier_state(keyIdentifierArg: string): boolean;
  get_shift_key(): boolean;
  init_keyboard_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, keyIdentifier: string, location: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, altGraphKey: boolean): void;
}
export class DOMMediaList extends DOMObject {
  length: number;
  'media-text': string;
  static parent_instance: DOMObject;
  append_medium(newMedium: string): void;
  delete_medium(oldMedium: string): void;
  get_length(): number;
  get_media_text(): string;
  item(index: number): string;
  set_media_text(value: string): void;
}
export class DOMMouseEvent extends DOMUIEvent {
  'alt-key': boolean;
  button: number;
  'client-x': number;
  'client-y': number;
  'ctrl-key': boolean;
  'from-element': DOMNode;
  'meta-key': boolean;
  'offset-x': number;
  'offset-y': number;
  'related-target': any;
  'screen-x': number;
  'screen-y': number;
  'shift-key': boolean;
  'to-element': DOMNode;
  x: number;
  y: number;
  static parent_instance: any;
  get_alt_key(): boolean;
  get_button(): number;
  get_client_x(): number;
  get_client_y(): number;
  get_ctrl_key(): boolean;
  get_from_element(): DOMNode;
  get_meta_key(): boolean;
  get_offset_x(): number;
  get_offset_y(): number;
  get_related_target(): any;
  get_screen_x(): number;
  get_screen_y(): number;
  get_shift_key(): boolean;
  get_to_element(): DOMNode;
  get_x(): number;
  get_y(): number;
  init_mouse_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean, button: number, relatedTarget: any): void;
}
export class DOMNamedNodeMap extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  get_named_item(name: string): DOMNode;
  get_named_item_ns(namespaceURI: string, localName: string): DOMNode;
  item(index: number): DOMNode;
  remove_named_item(name: string): DOMNode;
  remove_named_item_ns(namespaceURI: string, localName: string): DOMNode;
  set_named_item(node: DOMNode): DOMNode;
  set_named_item_ns(node: DOMNode): DOMNode;
}
export class DOMNode extends DOMObject {
  'base-uri': string;
  'child-nodes': DOMNodeList;
  'first-child': DOMNode;
  'last-child': DOMNode;
  'next-sibling': DOMNode;
  'node-name': string;
  'node-type': number;
  'node-value': string;
  'owner-document': DOMDocument;
  'parent-element': DOMElement;
  'parent-node': DOMNode;
  'previous-sibling': DOMNode;
  'text-content': string;
  static parent_instance: DOMObject;
  append_child(newChild: DOMNode): DOMNode;
  clone_node(deep: boolean): DOMNode;
  clone_node_with_error(deep: boolean): DOMNode;
  compare_document_position(other: DOMNode): number;
  contains(other: DOMNode): boolean;
  get_base_uri(): string;
  get_child_nodes(): DOMNodeList;
  get_first_child(): DOMNode;
  get_last_child(): DOMNode;
  get_local_name(): string;
  get_namespace_uri(): string;
  get_next_sibling(): DOMNode;
  get_node_name(): string;
  get_node_type(): number;
  get_node_value(): string;
  get_owner_document(): DOMDocument;
  get_parent_element(): DOMElement;
  get_parent_node(): DOMNode;
  get_prefix(): string;
  get_previous_sibling(): DOMNode;
  get_text_content(): string;
  has_child_nodes(): boolean;
  insert_before(newChild: DOMNode, refChild: DOMNode | null): DOMNode;
  is_default_namespace(namespaceURI: string): boolean;
  is_equal_node(other: DOMNode): boolean;
  is_same_node(other: DOMNode): boolean;
  is_supported(feature: string, version: string): boolean;
  lookup_namespace_uri(prefix: string): string;
  lookup_prefix(namespaceURI: string): string;
  normalize(): void;
  remove_child(oldChild: DOMNode): DOMNode;
  replace_child(newChild: DOMNode, oldChild: DOMNode): DOMNode;
  set_node_value(value: string): void;
  set_prefix(value: string): void;
  set_text_content(value: string): void;
  static for_js_value(value: JavaScriptCore.Value): DOMNode;
}
export class DOMNodeIterator extends DOMObject {
  filter: any;
  'pointer-before-reference-node': boolean;
  'reference-node': DOMNode;
  root: DOMNode;
  'what-to-show': number;
  static parent_instance: DOMObject;
  detach(): void;
  get_expand_entity_references(): boolean;
  get_filter(): any;
  get_pointer_before_reference_node(): boolean;
  get_reference_node(): DOMNode;
  get_root(): DOMNode;
  get_what_to_show(): number;
  next_node(): DOMNode;
  previous_node(): DOMNode;
}
export class DOMNodeList extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  item(index: number): DOMNode;
}
export class DOMObject extends GObject.Object {
  'core-object': object;
  static parentInstance: GObject.Object;
  static coreObject: object;
}
export class DOMProcessingInstruction extends DOMCharacterData {
  sheet: DOMStyleSheet;
  target: string;
  static parent_instance: any;
  get_sheet(): DOMStyleSheet;
  get_target(): string;
}
export class DOMRange extends DOMObject {
  collapsed: boolean;
  'common-ancestor-container': DOMNode;
  'end-container': DOMNode;
  'end-offset': number;
  'start-container': DOMNode;
  'start-offset': number;
  text: string;
  static parent_instance: DOMObject;
  clone_contents(): DOMDocumentFragment;
  clone_range(): DOMRange;
  collapse(toStart: boolean): void;
  compare_boundary_points(how: number, sourceRange: DOMRange): any;
  compare_node(refNode: DOMNode): any;
  compare_point(refNode: DOMNode, offset: number): any;
  create_contextual_fragment(html: string): DOMDocumentFragment;
  delete_contents(): void;
  detach(): void;
  expand(unit: string): void;
  extract_contents(): DOMDocumentFragment;
  get_collapsed(): boolean;
  get_common_ancestor_container(): DOMNode;
  get_end_container(): DOMNode;
  get_end_offset(): number;
  get_start_container(): DOMNode;
  get_start_offset(): number;
  get_text(): string;
  insert_node(newNode: DOMNode): void;
  intersects_node(refNode: DOMNode): boolean;
  is_point_in_range(refNode: DOMNode, offset: number): boolean;
  select_node(refNode: DOMNode): void;
  select_node_contents(refNode: DOMNode): void;
  set_end(refNode: DOMNode, offset: number): void;
  set_end_after(refNode: DOMNode): void;
  set_end_before(refNode: DOMNode): void;
  set_start(refNode: DOMNode, offset: number): void;
  set_start_after(refNode: DOMNode): void;
  set_start_before(refNode: DOMNode): void;
  surround_contents(newParent: DOMNode): void;
  to_string(): string;
}
export class DOMStyleSheet extends DOMObject {
  disabled: boolean;
  href: string;
  media: DOMMediaList;
  'owner-node': DOMNode;
  'parent-style-sheet': DOMStyleSheet;
  title: string;
  type: string;
  static parent_instance: DOMObject;
  get_content_type(): string;
  get_disabled(): boolean;
  get_href(): string;
  get_media(): DOMMediaList;
  get_owner_node(): DOMNode;
  get_parent_style_sheet(): DOMStyleSheet;
  get_title(): string;
  set_disabled(value: boolean): void;
}
export class DOMStyleSheetList extends DOMObject {
  length: number;
  static parent_instance: DOMObject;
  get_length(): number;
  item(index: number): DOMStyleSheet;
}
export class DOMText extends DOMCharacterData {
  'whole-text': string;
  static parent_instance: any;
  get_whole_text(): string;
  replace_whole_text(content: string): DOMText;
  split_text(offset: number): DOMText;
}
export class DOMTreeWalker extends DOMObject {
  'current-node': DOMNode;
  filter: any;
  root: DOMNode;
  'what-to-show': number;
  static parent_instance: DOMObject;
  first_child(): DOMNode;
  get_current_node(): DOMNode;
  get_expand_entity_references(): boolean;
  get_filter(): any;
  get_root(): DOMNode;
  get_what_to_show(): number;
  last_child(): DOMNode;
  next_node(): DOMNode;
  next_sibling(): DOMNode;
  parent_node(): DOMNode;
  previous_node(): DOMNode;
  previous_sibling(): DOMNode;
  set_current_node(value: DOMNode): void;
}
export class DOMUIEvent extends DOMEvent {
  'char-code': number;
  detail: number;
  'key-code': number;
  'layer-x': number;
  'layer-y': number;
  'page-x': number;
  'page-y': number;
  view: DOMDOMWindow;
  static parent_instance: any;
  get_char_code(): number;
  get_detail(): number;
  get_key_code(): number;
  get_layer_x(): number;
  get_layer_y(): number;
  get_page_x(): number;
  get_page_y(): number;
  get_view(): DOMDOMWindow;
  init_ui_event(type: string, canBubble: boolean, cancelable: boolean, view: DOMDOMWindow, detail: number): void;
}
export class DOMWheelEvent extends DOMMouseEvent {
  'wheel-delta': number;
  'wheel-delta-x': number;
  'wheel-delta-y': number;
  static parent_instance: any;
  get_wheel_delta(): number;
  get_wheel_delta_x(): number;
  get_wheel_delta_y(): number;
  init_wheel_event(wheelDeltaX: number, wheelDeltaY: number, view: DOMDOMWindow, screenX: number, screenY: number, clientX: number, clientY: number, ctrlKey: boolean, altKey: boolean, shiftKey: boolean, metaKey: boolean): void;
}
export class DOMXPathExpression extends DOMObject {
  static parent_instance: DOMObject;
  evaluate(contextNode: DOMNode, type: number, inResult: DOMXPathResult): DOMXPathResult;
}
export class DOMXPathResult extends DOMObject {
  'boolean-value': boolean;
  'invalid-iterator-state': boolean;
  'number-value': number;
  'result-type': number;
  'single-node-value': DOMNode;
  'snapshot-length': number;
  'string-value': string;
  static parent_instance: DOMObject;
  get_boolean_value(): boolean;
  get_invalid_iterator_state(): boolean;
  get_number_value(): number;
  get_result_type(): number;
  get_single_node_value(): DOMNode;
  get_snapshot_length(): number;
  get_string_value(): string;
  iterate_next(): DOMNode;
  snapshot_item(index: number): DOMNode;
}
export class Frame extends GObject.Object {
  static parent: GObject.Object;
  static priv: FramePrivate;
  get_id(): number;
  get_javascript_context_for_script_world(world: ScriptWorld): any;
  get_javascript_global_context(): any;
  get_js_context(): JavaScriptCore.Context;
  get_js_context_for_script_world(world: ScriptWorld): JavaScriptCore.Context;
  get_js_value_for_dom_object(dom_object: DOMObject): JavaScriptCore.Value;
  get_js_value_for_dom_object_in_script_world(dom_object: DOMObject, world: ScriptWorld): JavaScriptCore.Value;
  get_uri(): string;
  is_main_frame(): boolean;
}
export class HitTestResult extends GObject.Object {
  context: number;
  'image-uri': string;
  'link-label': string;
  'link-title': string;
  'link-uri': string;
  'media-uri': string;
  static parent: GObject.Object;
  static priv: HitTestResultPrivate;
  context_is_editable(): boolean;
  context_is_image(): boolean;
  context_is_link(): boolean;
  context_is_media(): boolean;
  context_is_scrollbar(): boolean;
  context_is_selection(): boolean;
  get_context(): number;
  get_image_uri(): string;
  get_link_label(): string;
  get_link_title(): string;
  get_link_uri(): string;
  get_media_uri(): string;
}
export class ScriptWorld extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: ScriptWorldPrivate;
  get_name(): string;
  static get_default(): ScriptWorld;
}
export class URIRequest extends GObject.Object {
  constructor(uri: string);
  uri: string;
  static parent: GObject.Object;
  static priv: URIRequestPrivate;
  get_http_headers(): Soup.MessageHeaders;
  get_http_method(): string;
  get_uri(): string;
  set_uri(uri: string): void;
}
export class URIResponse extends GObject.Object {
  'content-length': number;
  'http-headers': Soup.MessageHeaders;
  'mime-type': string;
  'status-code': number;
  'suggested-filename': string;
  uri: string;
  static parent: GObject.Object;
  static priv: URIResponsePrivate;
  get_content_length(): number;
  get_http_headers(): Soup.MessageHeaders;
  get_mime_type(): string;
  get_status_code(): number;
  get_suggested_filename(): string;
  get_uri(): string;
}
export class WebEditor extends GObject.Object {
  static parent: GObject.Object;
  static priv: WebEditorPrivate;
  get_page(): WebPage;
}
export class WebExtension extends GObject.Object {
  static parent: GObject.Object;
  static priv: WebExtensionPrivate;
  get_page(page_id: number): WebPage;
}
export class WebHitTestResult extends HitTestResult {
  node: DOMNode;
  static parent: any;
  static priv: any;
  get_node(): DOMNode;
}
export class WebPage extends GObject.Object {
  uri: string;
  static parent: GObject.Object;
  static priv: WebPagePrivate;
  get_dom_document(): DOMDocument;
  get_editor(): WebEditor;
  get_id(): number;
  get_main_frame(): Frame;
  get_uri(): string;
}
export class ConsoleMessage {
  copy(): ConsoleMessage;
  free(): void;
  get_level(): ConsoleMessageLevel;
  get_line(): number;
  get_source(): ConsoleMessageSource;
  get_source_id(): string;
  get_text(): string;
}
export class ContextMenuClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class ContextMenuItemClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class ContextMenuItemPrivate {}
export class ContextMenuPrivate {}
export class DOMAttrClass {
  static parent_class: DOMNodeClass;
}
export class DOMBlobClass {
  static parent_class: DOMObjectClass;
}
export class DOMCDATASectionClass {
  static parent_class: DOMTextClass;
}
export class DOMCSSRuleClass {
  static parent_class: DOMObjectClass;
}
export class DOMCSSRuleListClass {
  static parent_class: DOMObjectClass;
}
export class DOMCSSStyleDeclarationClass {
  static parent_class: DOMObjectClass;
}
export class DOMCSSStyleSheetClass {
  static parent_class: DOMStyleSheetClass;
}
export class DOMCSSValueClass {
  static parent_class: DOMObjectClass;
}
export class DOMCharacterDataClass {
  static parent_class: DOMNodeClass;
}
export class DOMClientRectClass {
  static parent_class: DOMObjectClass;
}
export class DOMClientRectListClass {
  static parent_class: DOMObjectClass;
}
export class DOMCommentClass {
  static parent_class: DOMCharacterDataClass;
}
export class DOMDOMImplementationClass {
  static parent_class: DOMObjectClass;
}
export class DOMDOMSelectionClass {
  static parent_class: DOMObjectClass;
}
export class DOMDOMTokenListClass {
  static parent_class: DOMObjectClass;
}
export class DOMDOMWindowClass {
  static parent_class: DOMObjectClass;
}
export class DOMDocumentClass {
  static parent_class: DOMNodeClass;
}
export class DOMDocumentFragmentClass {
  static parent_class: DOMNodeClass;
}
export class DOMDocumentTypeClass {
  static parent_class: DOMNodeClass;
}
export class DOMElementClass {
  static parent_class: DOMNodeClass;
}
export class DOMEntityReferenceClass {
  static parent_class: DOMNodeClass;
}
export class DOMEventClass {
  static parent_class: DOMObjectClass;
}
export class DOMEventTargetIface {
  static gIface: GObject.TypeInterface;
  static dispatch_event: (target: any, event: DOMEvent) => boolean;
  static add_event_listener: (target: any, event_name: string, handler: GObject.Closure, use_capture: boolean) => boolean;
  static remove_event_listener: (target: any, event_name: string, handler: GObject.Closure, use_capture: boolean) => boolean;
  static _webkitdom_reserved0: () => void;
  static _webkitdom_reserved1: () => void;
  static _webkitdom_reserved2: () => void;
  static _webkitdom_reserved3: () => void;
}
export class DOMFileClass {
  static parent_class: DOMBlobClass;
}
export class DOMFileListClass {
  static parent_class: DOMObjectClass;
}
export class DOMHTMLAnchorElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLAppletElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLAreaElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLBRElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLBaseElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLBaseFontElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLBodyElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLButtonElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLCanvasElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLCollectionClass {
  static parent_class: DOMObjectClass;
}
export class DOMHTMLDListElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLDirectoryElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLDivElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLDocumentClass {
  static parent_class: DOMDocumentClass;
}
export class DOMHTMLElementClass {
  static parent_class: DOMElementClass;
}
export class DOMHTMLEmbedElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLFieldSetElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLFontElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLFormElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLFrameElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLFrameSetElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLHRElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLHeadElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLHeadingElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLHtmlElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLIFrameElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLImageElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLInputElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLLIElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLLabelElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLLegendElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLLinkElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLMapElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLMarqueeElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLMenuElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLMetaElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLModElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLOListElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLObjectElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLOptGroupElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLOptionElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLOptionsCollectionClass {
  static parent_class: DOMHTMLCollectionClass;
}
export class DOMHTMLParagraphElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLParamElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLPreElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLQuoteElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLScriptElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLSelectElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLStyleElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTableCaptionElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTableCellElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTableColElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTableElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTableRowElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTableSectionElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTextAreaElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLTitleElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMHTMLUListElementClass {
  static parent_class: DOMHTMLElementClass;
}
export class DOMKeyboardEventClass {
  static parent_class: DOMUIEventClass;
}
export class DOMMediaListClass {
  static parent_class: DOMObjectClass;
}
export class DOMMouseEventClass {
  static parent_class: DOMUIEventClass;
}
export class DOMNamedNodeMapClass {
  static parent_class: DOMObjectClass;
}
export class DOMNodeClass {
  static parent_class: DOMObjectClass;
}
export class DOMNodeFilterIface {
  static gIface: GObject.TypeInterface;
  static accept_node: (filter: any, node: DOMNode) => any;
  static _webkitdom_reserved0: () => void;
  static _webkitdom_reserved1: () => void;
  static _webkitdom_reserved2: () => void;
  static _webkitdom_reserved3: () => void;
}
export class DOMNodeIteratorClass {
  static parent_class: DOMObjectClass;
}
export class DOMNodeListClass {
  static parent_class: DOMObjectClass;
}
export class DOMObjectClass {
  static parentClass: GObject.ObjectClass;
}
export class DOMProcessingInstructionClass {
  static parent_class: DOMCharacterDataClass;
}
export class DOMRangeClass {
  static parent_class: DOMObjectClass;
}
export class DOMStyleSheetClass {
  static parent_class: DOMObjectClass;
}
export class DOMStyleSheetListClass {
  static parent_class: DOMObjectClass;
}
export class DOMTextClass {
  static parent_class: DOMCharacterDataClass;
}
export class DOMTreeWalkerClass {
  static parent_class: DOMObjectClass;
}
export class DOMUIEventClass {
  static parent_class: DOMEventClass;
}
export class DOMWheelEventClass {
  static parent_class: DOMMouseEventClass;
}
export class DOMXPathExpressionClass {
  static parent_class: DOMObjectClass;
}
export class DOMXPathNSResolverIface {
  static gIface: GObject.TypeInterface;
  static lookup_namespace_uri: (resolver: any, prefix: string) => string;
  static _webkitdom_reserved0: () => void;
  static _webkitdom_reserved1: () => void;
  static _webkitdom_reserved2: () => void;
  static _webkitdom_reserved3: () => void;
}
export class DOMXPathResultClass {
  static parent_class: DOMObjectClass;
}
export class FrameClass {
  static parent_class: GObject.ObjectClass;
}
export class FramePrivate {}
export class HitTestResultClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class HitTestResultPrivate {}
export class ScriptWorldClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class ScriptWorldPrivate {}
export class URIRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class URIRequestPrivate {}
export class URIResponseClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class URIResponsePrivate {}
export class WebEditorClass {
  static parent_class: GObject.ObjectClass;
}
export class WebEditorPrivate {}
export class WebExtensionClass {
  static parent_class: GObject.ObjectClass;
}
export class WebExtensionPrivate {}
export class WebHitTestResultClass {
  static parent_class: HitTestResultClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WebHitTestResultPrivate {}
export class WebPageClass {
  static parent_class: GObject.ObjectClass;
}
export class WebPagePrivate {}
export class _ContextMenu {
  static parent: GObject.Object;
  static priv: ContextMenuPrivate;
}
export class _ContextMenuItem {
  static parent: GObject.InitiallyUnowned;
  static priv: ContextMenuItemPrivate;
}
export type WebExtensionInitializeFunction = (extension: WebExtension) => void;
export type WebExtensionInitializeWithUserDataFunction = (extension: WebExtension, user_data: GLib.Variant) => void;