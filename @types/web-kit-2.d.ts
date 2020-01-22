import * as JavaScriptCore from './java-script-core';
import * as cairo from './cairo';
import * as Soup from './soup';
import * as Gio from './gio';
import * as Gtk from './gtk';
import * as Gdk from './gdk';
import * as GLib from './g-lib';
import * as GObject from './g-object';
export const EDITING_COMMAND_COPY: string;
export const EDITING_COMMAND_CREATE_LINK: string;
export const EDITING_COMMAND_CUT: string;
export const EDITING_COMMAND_INSERT_IMAGE: string;
export const EDITING_COMMAND_PASTE: string;
export const EDITING_COMMAND_REDO: string;
export const EDITING_COMMAND_SELECT_ALL: string;
export const EDITING_COMMAND_UNDO: string;
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export enum AuthenticationScheme {
  WEBKIT_AUTHENTICATION_SCHEME_DEFAULT,
  WEBKIT_AUTHENTICATION_SCHEME_HTTP_BASIC,
  WEBKIT_AUTHENTICATION_SCHEME_HTTP_DIGEST,
  WEBKIT_AUTHENTICATION_SCHEME_HTML_FORM,
  WEBKIT_AUTHENTICATION_SCHEME_NTLM,
  WEBKIT_AUTHENTICATION_SCHEME_NEGOTIATE,
  WEBKIT_AUTHENTICATION_SCHEME_CLIENT_CERTIFICATE_REQUESTED,
  WEBKIT_AUTHENTICATION_SCHEME_SERVER_TRUST_EVALUATION_REQUESTED,
  WEBKIT_AUTHENTICATION_SCHEME_UNKNOWN
}
export enum CacheModel {
  WEBKIT_CACHE_MODEL_DOCUMENT_VIEWER,
  WEBKIT_CACHE_MODEL_WEB_BROWSER,
  WEBKIT_CACHE_MODEL_DOCUMENT_BROWSER
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
  WEBKIT_CONTEXT_MENU_ACTION_CUSTOM
}
export enum CookieAcceptPolicy {
  WEBKIT_COOKIE_POLICY_ACCEPT_ALWAYS,
  WEBKIT_COOKIE_POLICY_ACCEPT_NEVER,
  WEBKIT_COOKIE_POLICY_ACCEPT_NO_THIRD_PARTY
}
export enum CookiePersistentStorage {
  WEBKIT_COOKIE_PERSISTENT_STORAGE_TEXT,
  WEBKIT_COOKIE_PERSISTENT_STORAGE_SQLITE
}
export enum CredentialPersistence {
  WEBKIT_CREDENTIAL_PERSISTENCE_NONE,
  WEBKIT_CREDENTIAL_PERSISTENCE_FOR_SESSION,
  WEBKIT_CREDENTIAL_PERSISTENCE_PERMANENT
}
export enum DownloadError {
  WEBKIT_DOWNLOAD_ERROR_NETWORK,
  WEBKIT_DOWNLOAD_ERROR_CANCELLED_BY_USER,
  WEBKIT_DOWNLOAD_ERROR_DESTINATION
}
export enum FaviconDatabaseError {
  WEBKIT_FAVICON_DATABASE_ERROR_NOT_INITIALIZED,
  WEBKIT_FAVICON_DATABASE_ERROR_FAVICON_NOT_FOUND,
  WEBKIT_FAVICON_DATABASE_ERROR_FAVICON_UNKNOWN
}
export enum HardwareAccelerationPolicy {
  WEBKIT_HARDWARE_ACCELERATION_POLICY_ON_DEMAND,
  WEBKIT_HARDWARE_ACCELERATION_POLICY_ALWAYS,
  WEBKIT_HARDWARE_ACCELERATION_POLICY_NEVER
}
export enum InsecureContentEvent {
  WEBKIT_INSECURE_CONTENT_RUN,
  WEBKIT_INSECURE_CONTENT_DISPLAYED
}
export enum JavascriptError {
  WEBKIT_JAVASCRIPT_ERROR_SCRIPT_FAILED
}
export enum LoadEvent {
  WEBKIT_LOAD_STARTED,
  WEBKIT_LOAD_REDIRECTED,
  WEBKIT_LOAD_COMMITTED,
  WEBKIT_LOAD_FINISHED
}
export enum NavigationType {
  WEBKIT_NAVIGATION_TYPE_LINK_CLICKED,
  WEBKIT_NAVIGATION_TYPE_FORM_SUBMITTED,
  WEBKIT_NAVIGATION_TYPE_BACK_FORWARD,
  WEBKIT_NAVIGATION_TYPE_RELOAD,
  WEBKIT_NAVIGATION_TYPE_FORM_RESUBMITTED,
  WEBKIT_NAVIGATION_TYPE_OTHER
}
export enum NetworkError {
  WEBKIT_NETWORK_ERROR_FAILED,
  WEBKIT_NETWORK_ERROR_TRANSPORT,
  WEBKIT_NETWORK_ERROR_UNKNOWN_PROTOCOL,
  WEBKIT_NETWORK_ERROR_CANCELLED,
  WEBKIT_NETWORK_ERROR_FILE_DOES_NOT_EXIST
}
export enum NetworkProxyMode {
  WEBKIT_NETWORK_PROXY_MODE_DEFAULT,
  WEBKIT_NETWORK_PROXY_MODE_NO_PROXY,
  WEBKIT_NETWORK_PROXY_MODE_CUSTOM
}
export enum PluginError {
  WEBKIT_PLUGIN_ERROR_FAILED,
  WEBKIT_PLUGIN_ERROR_CANNOT_FIND_PLUGIN,
  WEBKIT_PLUGIN_ERROR_CANNOT_LOAD_PLUGIN,
  WEBKIT_PLUGIN_ERROR_JAVA_UNAVAILABLE,
  WEBKIT_PLUGIN_ERROR_CONNECTION_CANCELLED,
  WEBKIT_PLUGIN_ERROR_WILL_HANDLE_LOAD
}
export enum PolicyDecisionType {
  WEBKIT_POLICY_DECISION_TYPE_NAVIGATION_ACTION,
  WEBKIT_POLICY_DECISION_TYPE_NEW_WINDOW_ACTION,
  WEBKIT_POLICY_DECISION_TYPE_RESPONSE
}
export enum PolicyError {
  WEBKIT_POLICY_ERROR_FAILED,
  WEBKIT_POLICY_ERROR_CANNOT_SHOW_MIME_TYPE,
  WEBKIT_POLICY_ERROR_CANNOT_SHOW_URI,
  WEBKIT_POLICY_ERROR_FRAME_LOAD_INTERRUPTED_BY_POLICY_CHANGE,
  WEBKIT_POLICY_ERROR_CANNOT_USE_RESTRICTED_PORT
}
export enum PrintError {
  WEBKIT_PRINT_ERROR_GENERAL,
  WEBKIT_PRINT_ERROR_PRINTER_NOT_FOUND,
  WEBKIT_PRINT_ERROR_INVALID_PAGE_RANGE
}
export enum PrintOperationResponse {
  WEBKIT_PRINT_OPERATION_RESPONSE_PRINT,
  WEBKIT_PRINT_OPERATION_RESPONSE_CANCEL
}
export enum ProcessModel {
  WEBKIT_PROCESS_MODEL_SHARED_SECONDARY_PROCESS,
  WEBKIT_PROCESS_MODEL_MULTIPLE_SECONDARY_PROCESSES
}
export enum SaveMode {
  WEBKIT_SAVE_MODE_MHTML
}
export enum ScriptDialogType {
  WEBKIT_SCRIPT_DIALOG_ALERT,
  WEBKIT_SCRIPT_DIALOG_CONFIRM,
  WEBKIT_SCRIPT_DIALOG_PROMPT,
  WEBKIT_SCRIPT_DIALOG_BEFORE_UNLOAD_CONFIRM
}
export enum SnapshotError {
  WEBKIT_SNAPSHOT_ERROR_FAILED_TO_CREATE
}
export enum SnapshotRegion {
  WEBKIT_SNAPSHOT_REGION_VISIBLE,
  WEBKIT_SNAPSHOT_REGION_FULL_DOCUMENT
}
export enum TLSErrorsPolicy {
  WEBKIT_TLS_ERRORS_POLICY_IGNORE,
  WEBKIT_TLS_ERRORS_POLICY_FAIL
}
export enum UserContentFilterError {
  WEBKIT_USER_CONTENT_FILTER_ERROR_INVALID_SOURCE,
  WEBKIT_USER_CONTENT_FILTER_ERROR_NOT_FOUND
}
export enum UserContentInjectedFrames {
  WEBKIT_USER_CONTENT_INJECT_ALL_FRAMES,
  WEBKIT_USER_CONTENT_INJECT_TOP_FRAME
}
export enum UserScriptInjectionTime {
  WEBKIT_USER_SCRIPT_INJECT_AT_DOCUMENT_START,
  WEBKIT_USER_SCRIPT_INJECT_AT_DOCUMENT_END
}
export enum UserStyleLevel {
  WEBKIT_USER_STYLE_LEVEL_USER,
  WEBKIT_USER_STYLE_LEVEL_AUTHOR
}
export enum WebProcessTerminationReason {
  WEBKIT_WEB_PROCESS_CRASHED,
  WEBKIT_WEB_PROCESS_EXCEEDED_MEMORY_LIMIT
}
export enum EditorTypingAttributes {
  WEBKIT_EDITOR_TYPING_ATTRIBUTE_NONE,
  WEBKIT_EDITOR_TYPING_ATTRIBUTE_BOLD,
  WEBKIT_EDITOR_TYPING_ATTRIBUTE_ITALIC,
  WEBKIT_EDITOR_TYPING_ATTRIBUTE_UNDERLINE,
  WEBKIT_EDITOR_TYPING_ATTRIBUTE_STRIKETHROUGH
}
export enum FindOptions {
  WEBKIT_FIND_OPTIONS_NONE,
  WEBKIT_FIND_OPTIONS_CASE_INSENSITIVE,
  WEBKIT_FIND_OPTIONS_AT_WORD_STARTS,
  WEBKIT_FIND_OPTIONS_TREAT_MEDIAL_CAPITAL_AS_WORD_START,
  WEBKIT_FIND_OPTIONS_BACKWARDS,
  WEBKIT_FIND_OPTIONS_WRAP_AROUND
}
export enum HitTestResultContext {
  WEBKIT_HIT_TEST_RESULT_CONTEXT_DOCUMENT,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_LINK,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_IMAGE,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_MEDIA,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_EDITABLE,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_SCROLLBAR,
  WEBKIT_HIT_TEST_RESULT_CONTEXT_SELECTION
}
export enum SnapshotOptions {
  WEBKIT_SNAPSHOT_OPTIONS_NONE,
  WEBKIT_SNAPSHOT_OPTIONS_INCLUDE_SELECTION_HIGHLIGHTING,
  WEBKIT_SNAPSHOT_OPTIONS_TRANSPARENT_BACKGROUND
}
export enum WebsiteDataTypes {
  WEBKIT_WEBSITE_DATA_MEMORY_CACHE,
  WEBKIT_WEBSITE_DATA_DISK_CACHE,
  WEBKIT_WEBSITE_DATA_OFFLINE_APPLICATION_CACHE,
  WEBKIT_WEBSITE_DATA_SESSION_STORAGE,
  WEBKIT_WEBSITE_DATA_LOCAL_STORAGE,
  WEBKIT_WEBSITE_DATA_WEBSQL_DATABASES,
  WEBKIT_WEBSITE_DATA_INDEXEDDB_DATABASES,
  WEBKIT_WEBSITE_DATA_PLUGIN_DATA,
  WEBKIT_WEBSITE_DATA_COOKIES,
  WEBKIT_WEBSITE_DATA_DEVICE_ID_HASH_SALT,
  WEBKIT_WEBSITE_DATA_HSTS_CACHE,
  WEBKIT_WEBSITE_DATA_ALL
}
export interface PermissionRequest {
  allow(...args: any[]): any;
  deny(...args: any[]): any;
}
export class AuthenticationRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: AuthenticationRequestPrivate;
  authenticate(credential: Credential | null): void;
  can_save_credentials(): boolean;
  cancel(): void;
  get_host(): string;
  get_port(): number;
  get_proposed_credential(): Credential;
  get_realm(): string;
  get_scheme(): AuthenticationScheme;
  is_for_proxy(): boolean;
  is_retry(): boolean;
}
export class AutomationSession extends GObject.Object {
  id: string;
  static parent: GObject.Object;
  static priv: AutomationSessionPrivate;
  get_application_info(): ApplicationInfo;
  get_id(): string;
  set_application_info(info: ApplicationInfo): void;
}
export class BackForwardList extends GObject.Object {
  static parent: GObject.Object;
  static priv: BackForwardListPrivate;
  get_back_item(): BackForwardListItem | null;
  get_back_list(): GLib.List;
  get_back_list_with_limit(limit: number): GLib.List;
  get_current_item(): BackForwardListItem | null;
  get_forward_item(): BackForwardListItem | null;
  get_forward_list(): GLib.List;
  get_forward_list_with_limit(limit: number): GLib.List;
  get_length(): number;
  get_nth_item(index: number): BackForwardListItem | null;
}
export class BackForwardListItem extends GObject.InitiallyUnowned {
  static parent: GObject.InitiallyUnowned;
  static priv: BackForwardListItemPrivate;
  get_original_uri(): string;
  get_title(): string;
  get_uri(): string;
}
export class ColorChooserRequest extends GObject.Object {
  rgba: Gdk.RGBA;
  static parent: GObject.Object;
  static priv: ColorChooserRequestPrivate;
  cancel(): void;
  finish(): void;
  get_element_rectangle(rect: Gdk.Rectangle): void;
  get_rgba(rgba: Gdk.RGBA): void;
  set_rgba(rgba: Gdk.RGBA): void;
}
export class ContextMenu extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: ContextMenuPrivate;
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
  static parent: GObject.InitiallyUnowned;
  static priv: ContextMenuItemPrivate;
  get_action(): Gtk.Action;
  get_gaction(): Gio.Action;
  get_stock_action(): ContextMenuAction;
  get_submenu(): ContextMenu;
  is_separator(): boolean;
  set_submenu(submenu: ContextMenu | null): void;
}
export class CookieManager extends GObject.Object {
  static parent: GObject.Object;
  static priv: CookieManagerPrivate;
  add_cookie(
    cookie: Soup.Cookie,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  add_cookie_finish(result: Gio.AsyncResult): boolean;
  delete_all_cookies(): void;
  delete_cookie(
    cookie: Soup.Cookie,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  delete_cookie_finish(result: Gio.AsyncResult): boolean;
  delete_cookies_for_domain(domain: string): void;
  get_accept_policy(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_accept_policy_finish(result: Gio.AsyncResult): CookieAcceptPolicy;
  get_cookies(
    uri: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_cookies_finish(result: Gio.AsyncResult): GLib.List;
  get_domains_with_cookies(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_domains_with_cookies_finish(result: Gio.AsyncResult): string[];
  set_accept_policy(policy: CookieAcceptPolicy): void;
  set_persistent_storage(
    filename: string,
    storage: CookiePersistentStorage
  ): void;
}
export class DeviceInfoPermissionRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: DeviceInfoPermissionRequestPrivate;
}
export class Download extends GObject.Object {
  'allow-overwrite': boolean;
  destination: string;
  'estimated-progress': number;
  response: URIResponse;
  static parent: GObject.Object;
  static priv: DownloadPrivate;
  cancel(): void;
  get_allow_overwrite(): boolean;
  get_destination(): string;
  get_elapsed_time(): number;
  get_estimated_progress(): number;
  get_received_data_length(): number;
  get_request(): URIRequest;
  get_response(): URIResponse;
  get_web_view(): WebView;
  set_allow_overwrite(allowed: boolean): void;
  set_destination(uri: string): void;
  decide_destination(suggested_filename: string): boolean;
}
export class EditorState extends GObject.Object {
  'typing-attributes': number;
  static parent: GObject.Object;
  static priv: EditorStatePrivate;
  get_typing_attributes(): number;
  is_copy_available(): boolean;
  is_cut_available(): boolean;
  is_paste_available(): boolean;
  is_redo_available(): boolean;
  is_undo_available(): boolean;
}
export class FaviconDatabase extends GObject.Object {
  static parent: GObject.Object;
  static priv: FaviconDatabasePrivate;
  clear(): void;
  get_favicon(
    page_uri: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_favicon_finish(result: Gio.AsyncResult): cairo.Surface;
  get_favicon_uri(page_uri: string): string;
}
export class FileChooserRequest extends GObject.Object {
  filter: Gtk.FileFilter;
  'mime-types': string[];
  'select-multiple': boolean;
  'selected-files': string[];
  static parent: GObject.Object;
  static priv: FileChooserRequestPrivate;
  cancel(): void;
  get_mime_types(): string[];
  get_mime_types_filter(): Gtk.FileFilter;
  get_select_multiple(): boolean;
  get_selected_files(): string[];
  select_files(files: string[]): void;
}
export class FindController extends GObject.Object {
  'max-match-count': number;
  options: FindOptions;
  text: string;
  'web-view': WebView;
  static parent: GObject.Object;
  static priv: FindControllerPrivate;
  count_matches(
    search_text: string,
    find_options: number,
    max_match_count: number
  ): void;
  get_max_match_count(): number;
  get_options(): number;
  get_search_text(): string;
  get_web_view(): WebView;
  search(
    search_text: string,
    find_options: number,
    max_match_count: number
  ): void;
  search_finish(): void;
  search_next(): void;
  search_previous(): void;
}
export class FormSubmissionRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: FormSubmissionRequestPrivate;
  get_text_fields(): GLib.HashTable | null;
  list_text_fields(field_names?: string[], field_values?: string[]): boolean;
  submit(): void;
}
export class GeolocationManager extends GObject.Object {
  'enable-high-accuracy': boolean;
  static parent: GObject.Object;
  static priv: GeolocationManagerPrivate;
  failed(error_message: string): void;
  get_enable_high_accuracy(): boolean;
  update_position(position: GeolocationPosition): void;
}
export class GeolocationPermissionRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: GeolocationPermissionRequestPrivate;
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
export class InstallMissingMediaPluginsPermissionRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: InstallMissingMediaPluginsPermissionRequestPrivate;
  get_description(): string;
}
export class NavigationPolicyDecision extends PolicyDecision {
  'frame-name': string;
  modifiers: number;
  'mouse-button': number;
  'navigation-action': NavigationAction;
  'navigation-type': NavigationType;
  request: URIRequest;
  static parent: any;
  static priv: any;
  get_frame_name(): string;
  get_modifiers(): number;
  get_mouse_button(): number;
  get_navigation_action(): NavigationAction;
  get_navigation_type(): NavigationType;
  get_request(): URIRequest;
}
export class Notification extends GObject.Object {
  body: string;
  id: number;
  tag: string;
  title: string;
  static parent: GObject.Object;
  static priv: NotificationPrivate;
  clicked(): void;
  close(): void;
  get_body(): string;
  get_id(): number;
  get_tag(): string | null;
  get_title(): string;
}
export class NotificationPermissionRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: NotificationPermissionRequestPrivate;
}
export class OptionMenu extends GObject.Object {
  static parent: GObject.Object;
  static priv: OptionMenuPrivate;
  activate_item(index: number): void;
  close(): void;
  get_item(index: number): OptionMenuItem;
  get_n_items(): number;
  select_item(index: number): void;
}
export class Plugin extends GObject.Object {
  static parent: GObject.Object;
  static priv: PluginPrivate;
  get_description(): string;
  get_mime_info_list(): GLib.List;
  get_name(): string;
  get_path(): string;
}
export class PolicyDecision extends GObject.Object {
  static parent: GObject.Object;
  static priv: PolicyDecisionPrivate;
  download(): void;
  ignore(): void;
  use(): void;
}
export class PrintCustomWidget extends GObject.Object {
  constructor(widget: Gtk.Widget, title: string);
  title: string;
  widget: Gtk.Widget;
  static parent: GObject.Object;
  static priv: PrintCustomWidgetPrivate;
  get_title(): string;
  get_widget(): Gtk.Widget;
  apply(widget: Gtk.Widget): void;
  update(
    widget: Gtk.Widget,
    page_setup: Gtk.PageSetup,
    print_settings: Gtk.PrintSettings
  ): void;
}
export class PrintOperation extends GObject.Object {
  constructor(web_view: WebView);
  'page-setup': Gtk.PageSetup;
  'print-settings': Gtk.PrintSettings;
  'web-view': WebView;
  static parent: GObject.Object;
  static priv: PrintOperationPrivate;
  get_page_setup(): Gtk.PageSetup;
  get_print_settings(): Gtk.PrintSettings;
  print(): void;
  run_dialog(parent: Gtk.Window | null): PrintOperationResponse;
  set_page_setup(page_setup: Gtk.PageSetup): void;
  set_print_settings(print_settings: Gtk.PrintSettings): void;
}
export class ResponsePolicyDecision extends PolicyDecision {
  request: URIRequest;
  response: URIResponse;
  static parent: any;
  static priv: any;
  get_request(): URIRequest;
  get_response(): URIResponse;
  is_mime_type_supported(): boolean;
}
export class SecurityManager extends GObject.Object {
  static parent: GObject.Object;
  static priv: SecurityManagerPrivate;
  register_uri_scheme_as_cors_enabled(scheme: string): void;
  register_uri_scheme_as_display_isolated(scheme: string): void;
  register_uri_scheme_as_empty_document(scheme: string): void;
  register_uri_scheme_as_local(scheme: string): void;
  register_uri_scheme_as_no_access(scheme: string): void;
  register_uri_scheme_as_secure(scheme: string): void;
  uri_scheme_is_cors_enabled(scheme: string): boolean;
  uri_scheme_is_display_isolated(scheme: string): boolean;
  uri_scheme_is_empty_document(scheme: string): boolean;
  uri_scheme_is_local(scheme: string): boolean;
  uri_scheme_is_no_access(scheme: string): boolean;
  uri_scheme_is_secure(scheme: string): boolean;
}
export class Settings extends GObject.Object {
  constructor();
  'allow-file-access-from-file-urls': boolean;
  'allow-modal-dialogs': boolean;
  'allow-universal-access-from-file-urls': boolean;
  'auto-load-images': boolean;
  'cursive-font-family': string;
  'default-charset': string;
  'default-font-family': string;
  'default-font-size': number;
  'default-monospace-font-size': number;
  'draw-compositing-indicators': boolean;
  'enable-accelerated-2d-canvas': boolean;
  'enable-back-forward-navigation-gestures': boolean;
  'enable-caret-browsing': boolean;
  'enable-developer-extras': boolean;
  'enable-dns-prefetching': boolean;
  'enable-encrypted-media': boolean;
  'enable-frame-flattening': boolean;
  'enable-fullscreen': boolean;
  'enable-html5-database': boolean;
  'enable-html5-local-storage': boolean;
  'enable-hyperlink-auditing': boolean;
  'enable-java': boolean;
  'enable-javascript': boolean;
  'enable-javascript-markup': boolean;
  'enable-media': boolean;
  'enable-media-capabilities': boolean;
  'enable-media-stream': boolean;
  'enable-mediasource': boolean;
  'enable-mock-capture-devices': boolean;
  'enable-offline-web-application-cache': boolean;
  'enable-page-cache': boolean;
  'enable-plugins': boolean;
  'enable-private-browsing': boolean;
  'enable-resizable-text-areas': boolean;
  'enable-site-specific-quirks': boolean;
  'enable-smooth-scrolling': boolean;
  'enable-spatial-navigation': boolean;
  'enable-tabs-to-links': boolean;
  'enable-webaudio': boolean;
  'enable-webgl': boolean;
  'enable-write-console-messages-to-stdout': boolean;
  'enable-xss-auditor': boolean;
  'fantasy-font-family': string;
  'hardware-acceleration-policy': HardwareAccelerationPolicy;
  'javascript-can-access-clipboard': boolean;
  'javascript-can-open-windows-automatically': boolean;
  'load-icons-ignoring-image-load-setting': boolean;
  'media-playback-allows-inline': boolean;
  'media-playback-requires-user-gesture': boolean;
  'minimum-font-size': number;
  'monospace-font-family': string;
  'pictograph-font-family': string;
  'print-backgrounds': boolean;
  'sans-serif-font-family': string;
  'serif-font-family': string;
  'user-agent': string;
  'zoom-text-only': boolean;
  static parent_instance: GObject.Object;
  static priv: SettingsPrivate;
  get_allow_file_access_from_file_urls(): boolean;
  get_allow_modal_dialogs(): boolean;
  get_allow_universal_access_from_file_urls(): boolean;
  get_auto_load_images(): boolean;
  get_cursive_font_family(): string;
  get_default_charset(): string;
  get_default_font_family(): string;
  get_default_font_size(): number;
  get_default_monospace_font_size(): number;
  get_draw_compositing_indicators(): boolean;
  get_enable_accelerated_2d_canvas(): boolean;
  get_enable_back_forward_navigation_gestures(): boolean;
  get_enable_caret_browsing(): boolean;
  get_enable_developer_extras(): boolean;
  get_enable_dns_prefetching(): boolean;
  get_enable_encrypted_media(): boolean;
  get_enable_frame_flattening(): boolean;
  get_enable_fullscreen(): boolean;
  get_enable_html5_database(): boolean;
  get_enable_html5_local_storage(): boolean;
  get_enable_hyperlink_auditing(): boolean;
  get_enable_java(): boolean;
  get_enable_javascript(): boolean;
  get_enable_javascript_markup(): boolean;
  get_enable_media(): boolean;
  get_enable_media_capabilities(): boolean;
  get_enable_media_stream(): boolean;
  get_enable_mediasource(): boolean;
  get_enable_mock_capture_devices(): boolean;
  get_enable_offline_web_application_cache(): boolean;
  get_enable_page_cache(): boolean;
  get_enable_plugins(): boolean;
  get_enable_private_browsing(): boolean;
  get_enable_resizable_text_areas(): boolean;
  get_enable_site_specific_quirks(): boolean;
  get_enable_smooth_scrolling(): boolean;
  get_enable_spatial_navigation(): boolean;
  get_enable_tabs_to_links(): boolean;
  get_enable_webaudio(): boolean;
  get_enable_webgl(): boolean;
  get_enable_write_console_messages_to_stdout(): boolean;
  get_enable_xss_auditor(): boolean;
  get_fantasy_font_family(): string;
  get_hardware_acceleration_policy(): HardwareAccelerationPolicy;
  get_javascript_can_access_clipboard(): boolean;
  get_javascript_can_open_windows_automatically(): boolean;
  get_load_icons_ignoring_image_load_setting(): boolean;
  get_media_playback_allows_inline(): boolean;
  get_media_playback_requires_user_gesture(): boolean;
  get_minimum_font_size(): number;
  get_monospace_font_family(): string;
  get_pictograph_font_family(): string;
  get_print_backgrounds(): boolean;
  get_sans_serif_font_family(): string;
  get_serif_font_family(): string;
  get_user_agent(): string;
  get_zoom_text_only(): boolean;
  set_allow_file_access_from_file_urls(allowed: boolean): void;
  set_allow_modal_dialogs(allowed: boolean): void;
  set_allow_universal_access_from_file_urls(allowed: boolean): void;
  set_auto_load_images(enabled: boolean): void;
  set_cursive_font_family(cursive_font_family: string): void;
  set_default_charset(default_charset: string): void;
  set_default_font_family(default_font_family: string): void;
  set_default_font_size(font_size: number): void;
  set_default_monospace_font_size(font_size: number): void;
  set_draw_compositing_indicators(enabled: boolean): void;
  set_enable_accelerated_2d_canvas(enabled: boolean): void;
  set_enable_back_forward_navigation_gestures(enabled: boolean): void;
  set_enable_caret_browsing(enabled: boolean): void;
  set_enable_developer_extras(enabled: boolean): void;
  set_enable_dns_prefetching(enabled: boolean): void;
  set_enable_encrypted_media(enabled: boolean): void;
  set_enable_frame_flattening(enabled: boolean): void;
  set_enable_fullscreen(enabled: boolean): void;
  set_enable_html5_database(enabled: boolean): void;
  set_enable_html5_local_storage(enabled: boolean): void;
  set_enable_hyperlink_auditing(enabled: boolean): void;
  set_enable_java(enabled: boolean): void;
  set_enable_javascript(enabled: boolean): void;
  set_enable_javascript_markup(enabled: boolean): void;
  set_enable_media(enabled: boolean): void;
  set_enable_media_capabilities(enabled: boolean): void;
  set_enable_media_stream(enabled: boolean): void;
  set_enable_mediasource(enabled: boolean): void;
  set_enable_mock_capture_devices(enabled: boolean): void;
  set_enable_offline_web_application_cache(enabled: boolean): void;
  set_enable_page_cache(enabled: boolean): void;
  set_enable_plugins(enabled: boolean): void;
  set_enable_private_browsing(enabled: boolean): void;
  set_enable_resizable_text_areas(enabled: boolean): void;
  set_enable_site_specific_quirks(enabled: boolean): void;
  set_enable_smooth_scrolling(enabled: boolean): void;
  set_enable_spatial_navigation(enabled: boolean): void;
  set_enable_tabs_to_links(enabled: boolean): void;
  set_enable_webaudio(enabled: boolean): void;
  set_enable_webgl(enabled: boolean): void;
  set_enable_write_console_messages_to_stdout(enabled: boolean): void;
  set_enable_xss_auditor(enabled: boolean): void;
  set_fantasy_font_family(fantasy_font_family: string): void;
  set_hardware_acceleration_policy(policy: HardwareAccelerationPolicy): void;
  set_javascript_can_access_clipboard(enabled: boolean): void;
  set_javascript_can_open_windows_automatically(enabled: boolean): void;
  set_load_icons_ignoring_image_load_setting(enabled: boolean): void;
  set_media_playback_allows_inline(enabled: boolean): void;
  set_media_playback_requires_user_gesture(enabled: boolean): void;
  set_minimum_font_size(font_size: number): void;
  set_monospace_font_family(monospace_font_family: string): void;
  set_pictograph_font_family(pictograph_font_family: string): void;
  set_print_backgrounds(print_backgrounds: boolean): void;
  set_sans_serif_font_family(sans_serif_font_family: string): void;
  set_serif_font_family(serif_font_family: string): void;
  set_user_agent(user_agent: string | null): void;
  set_user_agent_with_application_details(
    application_name: string | null,
    application_version: string | null
  ): void;
  set_zoom_text_only(zoom_text_only: boolean): void;
  static font_size_to_pixels(points: number): number;
  static font_size_to_points(pixels: number): number;
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
export class URISchemeRequest extends GObject.Object {
  static parent: GObject.Object;
  static priv: URISchemeRequestPrivate;
  finish(
    stream: Gio.InputStream,
    stream_length: number,
    mime_type: string | null
  ): void;
  finish_error(error: GLib.Error): void;
  get_path(): string;
  get_scheme(): string;
  get_uri(): string;
  get_web_view(): WebView;
}
export class UserContentFilterStore extends GObject.Object {
  constructor(storage_path: string);
  path: string;
  static parent: GObject.Object;
  static priv: UserContentFilterStorePrivate;
  fetch_identifiers(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  fetch_identifiers_finish(result: Gio.AsyncResult): string[];
  get_path(): string;
  load(
    identifier: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  load_finish(result: Gio.AsyncResult): UserContentFilter;
  remove(
    identifier: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  remove_finish(result: Gio.AsyncResult): boolean;
  save(
    identifier: string,
    source: GLib.Bytes,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  save_finish(result: Gio.AsyncResult): UserContentFilter;
  save_from_file(
    identifier: string,
    file: Gio.File,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  save_from_file_finish(result: Gio.AsyncResult): UserContentFilter;
}
export class UserContentManager extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: UserContentManagerPrivate;
  add_filter(filter: UserContentFilter): void;
  add_script(script: UserScript): void;
  add_style_sheet(stylesheet: UserStyleSheet): void;
  register_script_message_handler(name: string): boolean;
  register_script_message_handler_in_world(
    name: string,
    world_name: string
  ): boolean;
  remove_all_filters(): void;
  remove_all_scripts(): void;
  remove_all_style_sheets(): void;
  remove_filter(filter: UserContentFilter): void;
  remove_filter_by_id(filter_id: string): void;
  unregister_script_message_handler(name: string): void;
  unregister_script_message_handler_in_world(
    name: string,
    world_name: string
  ): void;
}
export class UserMediaPermissionRequest extends GObject.Object {
  'is-for-audio-device': boolean;
  'is-for-video-device': boolean;
  static parent: GObject.Object;
  static priv: UserMediaPermissionRequestPrivate;
}
export class WebContext extends GObject.Object {
  constructor();
  'local-storage-directory': string;
  'website-data-manager': WebsiteDataManager;
  static parent: GObject.Object;
  static priv: WebContextPrivate;
  add_path_to_sandbox(path: any, read_only: boolean): void;
  allow_tls_certificate_for_host(
    certificate: Gio.TlsCertificate,
    host: string
  ): void;
  clear_cache(): void;
  download_uri(uri: string): Download;
  get_cache_model(): CacheModel;
  get_cookie_manager(): CookieManager;
  get_favicon_database(): FaviconDatabase;
  get_favicon_database_directory(): string;
  get_geolocation_manager(): GeolocationManager;
  get_plugins(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_plugins_finish(result: Gio.AsyncResult): GLib.List;
  get_process_model(): ProcessModel;
  get_sandbox_enabled(): boolean;
  get_security_manager(): SecurityManager;
  get_spell_checking_enabled(): boolean;
  get_spell_checking_languages(): string[];
  get_tls_errors_policy(): TLSErrorsPolicy;
  get_web_process_count_limit(): number;
  get_website_data_manager(): WebsiteDataManager;
  initialize_notification_permissions(...args: any[]): any;
  is_automation_allowed(): boolean;
  is_ephemeral(): boolean;
  prefetch_dns(hostname: string): void;
  register_uri_scheme(
    scheme: string,
    callback: URISchemeRequestCallback,
    user_data: object | null,
    user_data_destroy_func: GLib.DestroyNotify
  ): void;
  set_additional_plugins_directory(directory: string): void;
  set_automation_allowed(allowed: boolean): void;
  set_cache_model(cache_model: CacheModel): void;
  set_disk_cache_directory(directory: string): void;
  set_favicon_database_directory(path: string | null): void;
  set_network_proxy_settings(
    proxy_mode: NetworkProxyMode,
    proxy_settings: NetworkProxySettings | null
  ): void;
  set_preferred_languages(languages: string[] | null): void;
  set_process_model(process_model: ProcessModel): void;
  set_sandbox_enabled(enabled: boolean): void;
  set_spell_checking_enabled(enabled: boolean): void;
  set_spell_checking_languages(languages: string[]): void;
  set_tls_errors_policy(policy: TLSErrorsPolicy): void;
  set_web_extensions_directory(directory: string): void;
  set_web_extensions_initialization_user_data(user_data: GLib.Variant): void;
  set_web_process_count_limit(limit: number): void;
  automation_started(session: AutomationSession): void;
  download_started(download: Download): void;
  initialize_notification_permissions(...args: any[]): any;
  initialize_web_extensions(): void;
  static get_default(): WebContext;
}
export class WebInspector extends GObject.Object {
  'attached-height': number;
  'can-attach': boolean;
  'inspected-uri': string;
  static parent: GObject.Object;
  static priv: WebInspectorPrivate;
  attach(): void;
  close(): void;
  detach(): void;
  get_attached_height(): number;
  get_can_attach(): boolean;
  get_inspected_uri(): string;
  get_web_view(): WebViewBase;
  is_attached(): boolean;
  show(): void;
}
export class WebResource extends GObject.Object {
  response: URIResponse;
  uri: string;
  static parent: GObject.Object;
  static priv: WebResourcePrivate;
  get_data(
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_data_finish(result: Gio.AsyncResult, length?: number): number[];
  get_response(): URIResponse;
  get_uri(): string;
}
export class WebView extends WebViewBase {
  constructor();
  editable: boolean;
  'estimated-load-progress': number;
  favicon: object;
  'is-controlled-by-automation': boolean;
  'is-ephemeral': boolean;
  'is-loading': boolean;
  'is-playing-audio': boolean;
  'related-view': WebView;
  settings: Settings;
  title: string;
  uri: string;
  'user-content-manager': UserContentManager;
  'web-context': WebContext;
  'zoom-level': number;
  static parent: WebViewBase;
  static priv: any;
  can_execute_editing_command(
    command: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  can_execute_editing_command_finish(result: Gio.AsyncResult): boolean;
  can_go_back(): boolean;
  can_go_forward(): boolean;
  can_show_mime_type(mime_type: string): boolean;
  download_uri(uri: string): Download;
  execute_editing_command(command: string): void;
  execute_editing_command_with_argument(
    command: string,
    argument: string
  ): void;
  get_back_forward_list(): BackForwardList;
  get_background_color(rgba: Gdk.RGBA): void;
  get_context(): WebContext;
  get_custom_charset(): string;
  get_editor_state(): EditorState;
  get_estimated_load_progress(): number;
  get_favicon(): cairo.Surface;
  get_find_controller(): FindController;
  get_inspector(): WebInspector;
  get_javascript_global_context(): any;
  get_main_resource(): WebResource;
  get_page_id(): number;
  get_session_state(): WebViewSessionState;
  get_settings(): Settings;
  get_snapshot(
    region: SnapshotRegion,
    options: SnapshotOptions,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  get_snapshot_finish(result: Gio.AsyncResult): cairo.Surface;
  get_title(): string;
  get_tls_info(
    certificate: Gio.TlsCertificate,
    errors: Gio.TlsCertificateFlags
  ): boolean;
  get_uri(): string;
  get_user_content_manager(): UserContentManager;
  get_website_data_manager(): WebsiteDataManager;
  get_window_properties(): WindowProperties;
  get_zoom_level(): number;
  go_back(): void;
  go_forward(): void;
  go_to_back_forward_list_item(list_item: BackForwardListItem): void;
  is_controlled_by_automation(): boolean;
  is_editable(): boolean;
  is_ephemeral(): boolean;
  is_loading(): boolean;
  is_playing_audio(): boolean;
  load_alternate_html(
    content: string,
    content_uri: string,
    base_uri: string | null
  ): void;
  load_bytes(
    bytes: GLib.Bytes,
    mime_type: string | null,
    encoding: string | null,
    base_uri: string | null
  ): void;
  load_html(content: string, base_uri: string | null): void;
  load_plain_text(plain_text: string): void;
  load_request(request: URIRequest): void;
  load_uri(uri: string): void;
  reload(): void;
  reload_bypass_cache(): void;
  restore_session_state(state: WebViewSessionState): void;
  run_javascript(
    script: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  run_javascript_finish(result: Gio.AsyncResult): JavascriptResult;
  run_javascript_from_gresource(
    resource: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  run_javascript_from_gresource_finish(
    result: Gio.AsyncResult
  ): JavascriptResult;
  run_javascript_in_world(
    script: string,
    world_name: string,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  run_javascript_in_world_finish(result: Gio.AsyncResult): JavascriptResult;
  save(
    save_mode: SaveMode,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  save_finish(result: Gio.AsyncResult): Gio.InputStream;
  save_to_file(
    file: Gio.File,
    save_mode: SaveMode,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  save_to_file_finish(result: Gio.AsyncResult): boolean;
  set_background_color(rgba: Gdk.RGBA): void;
  set_custom_charset(charset: string | null): void;
  set_editable(editable: boolean): void;
  set_settings(settings: Settings): void;
  set_zoom_level(zoom_level: number): void;
  stop_loading(): void;
  try_close(): void;
  authenticate(request: AuthenticationRequest): boolean;
  close(): void;
  context_menu(
    context_menu: ContextMenu,
    event: Gdk.Event,
    hit_test_result: HitTestResult
  ): boolean;
  context_menu_dismissed(): void;
  create(navigation_action: NavigationAction): Gtk.Widget;
  decide_policy(decision: PolicyDecision, type: PolicyDecisionType): boolean;
  enter_fullscreen(): boolean;
  insecure_content_detected(event: InsecureContentEvent): void;
  leave_fullscreen(): boolean;
  load_changed(load_event: LoadEvent): void;
  load_failed(
    load_event: LoadEvent,
    failing_uri: string,
    error: GLib.Error
  ): boolean;
  load_failed_with_tls_errors(
    failing_uri: string,
    certificate: Gio.TlsCertificate,
    errors: Gio.TlsCertificateFlags
  ): boolean;
  mouse_target_changed(hit_test_result: HitTestResult, modifiers: number): void;
  permission_request(permission_request: any): boolean;
  print(print_operation: PrintOperation): boolean;
  ready_to_show(): void;
  resource_load_started(resource: WebResource, request: URIRequest): void;
  run_as_modal(): void;
  run_color_chooser(request: ColorChooserRequest): boolean;
  run_file_chooser(request: FileChooserRequest): boolean;
  script_dialog(dialog: ScriptDialog): boolean;
  show_notification(notification: Notification): boolean;
  show_option_menu(rectangle: Gdk.Rectangle, menu: OptionMenu): boolean;
  submit_form(request: FormSubmissionRequest): void;
  web_process_crashed(): boolean;
  web_process_terminated(reason: WebProcessTerminationReason): void;
}
export class WebViewBase extends Gtk.Container {
  static parentInstance: Gtk.Container;
  static priv: WebViewBasePrivate;
}
export class WebsiteDataManager extends GObject.Object {
  constructor(first_option_name: string, ...args: any[]);
  'base-cache-directory': string;
  'base-data-directory': string;
  'disk-cache-directory': string;
  'hsts-cache-directory': string;
  'indexeddb-directory': string;
  'is-ephemeral': boolean;
  'local-storage-directory': string;
  'offline-application-cache-directory': string;
  'websql-directory': string;
  static parent: GObject.Object;
  static priv: WebsiteDataManagerPrivate;
  clear(
    types: WebsiteDataTypes,
    timespan: GLib.TimeSpan,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  clear_finish(result: Gio.AsyncResult): boolean;
  fetch(
    types: WebsiteDataTypes,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  fetch_finish(result: Gio.AsyncResult): GLib.List;
  get_base_cache_directory(): string | null;
  get_base_data_directory(): string | null;
  get_cookie_manager(): CookieManager;
  get_disk_cache_directory(): string | null;
  get_hsts_cache_directory(): string | null;
  get_indexeddb_directory(): string | null;
  get_local_storage_directory(): string | null;
  get_offline_application_cache_directory(): string | null;
  get_websql_directory(): string | null;
  is_ephemeral(): boolean;
  remove(
    types: WebsiteDataTypes,
    website_data: GLib.List,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  remove_finish(result: Gio.AsyncResult): boolean;
}
export class WindowProperties extends GObject.Object {
  fullscreen: boolean;
  geometry: Gdk.Rectangle;
  'locationbar-visible': boolean;
  'menubar-visible': boolean;
  resizable: boolean;
  'scrollbars-visible': boolean;
  'statusbar-visible': boolean;
  'toolbar-visible': boolean;
  static parent: GObject.Object;
  static priv: WindowPropertiesPrivate;
  get_fullscreen(): boolean;
  get_geometry(geometry: Gdk.Rectangle): void;
  get_locationbar_visible(): boolean;
  get_menubar_visible(): boolean;
  get_resizable(): boolean;
  get_scrollbars_visible(): boolean;
  get_statusbar_visible(): boolean;
  get_toolbar_visible(): boolean;
}
export class ApplicationInfo {
  constructor();
  get_name(): string;
  get_version(major: number, minor?: number, micro?: number): void;
  ref(): ApplicationInfo;
  set_name(name: string): void;
  set_version(major: number, minor: number, micro: number): void;
  unref(): void;
}
export class AuthenticationRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class AuthenticationRequestPrivate {}
export class AutomationSessionClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class AutomationSessionPrivate {}
export class BackForwardListClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class BackForwardListItemClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class BackForwardListItemPrivate {}
export class BackForwardListPrivate {}
export class ColorChooserRequestClass {
  static parent_class: GObject.ObjectClass;
}
export class ColorChooserRequestPrivate {}
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
export class CookieManagerClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class CookieManagerPrivate {}
export class Credential {
  constructor(
    username: string,
    password: string,
    persistence: CredentialPersistence
  );
  copy(): Credential;
  free(): void;
  get_password(): string;
  get_persistence(): CredentialPersistence;
  get_username(): string;
  has_password(): boolean;
}
export class DeviceInfoPermissionRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class DeviceInfoPermissionRequestPrivate {}
export class DownloadClass {
  static parent_class: GObject.ObjectClass;
  static decide_destination: (
    download: Download,
    suggested_filename: string
  ) => boolean;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class DownloadPrivate {}
export class EditorStateClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class EditorStatePrivate {}
export class FaviconDatabaseClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class FaviconDatabasePrivate {}
export class FileChooserRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class FileChooserRequestPrivate {}
export class FindControllerClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class FindControllerPrivate {}
export class FormSubmissionRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class FormSubmissionRequestPrivate {}
export class GeolocationManagerClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class GeolocationManagerPrivate {}
export class GeolocationPermissionRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class GeolocationPermissionRequestPrivate {}
export class GeolocationPosition {
  constructor(latitude: number, longitude: number, accuracy: number);
  copy(): GeolocationPosition;
  free(): void;
  set_altitude(altitude: number): void;
  set_altitude_accuracy(altitude_accuracy: number): void;
  set_heading(heading: number): void;
  set_speed(speed: number): void;
  set_timestamp(timestamp: number): void;
}
export class HitTestResultClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class HitTestResultPrivate {}
export class InstallMissingMediaPluginsPermissionRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class InstallMissingMediaPluginsPermissionRequestPrivate {}
export class JavascriptResult {
  get_global_context(): any;
  get_js_value(): JavaScriptCore.Value;
  get_value(): any;
  ref(): JavascriptResult;
  unref(): void;
}
export class MimeInfo {
  get_description(): string;
  get_extensions(): string[];
  get_mime_type(): string;
  ref(): MimeInfo;
  unref(): void;
}
export class NavigationAction {
  copy(): NavigationAction;
  free(): void;
  get_modifiers(): number;
  get_mouse_button(): number;
  get_navigation_type(): NavigationType;
  get_request(): URIRequest;
  is_redirect(): boolean;
  is_user_gesture(): boolean;
}
export class NavigationPolicyDecisionClass {
  static parent_class: PolicyDecisionClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class NavigationPolicyDecisionPrivate {}
export class NetworkProxySettings {
  constructor(default_proxy_uri: string | null, ignore_hosts: string[] | null);
  add_proxy_for_scheme(scheme: string, proxy_uri: string): void;
  copy(): NetworkProxySettings;
  free(): void;
}
export class NotificationClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
  static _webkit_reserved4: () => void;
  static _webkit_reserved5: () => void;
}
export class NotificationPermissionRequestClass {
  static parent_class: GObject.ObjectClass;
}
export class NotificationPermissionRequestPrivate {}
export class NotificationPrivate {}
export class OptionMenuClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class OptionMenuItem {
  copy(): OptionMenuItem;
  free(): void;
  get_label(): string;
  get_tooltip(): string;
  is_enabled(): boolean;
  is_group_child(): boolean;
  is_group_label(): boolean;
  is_selected(): boolean;
}
export class OptionMenuPrivate {}
export class PermissionRequestIface {
  static parent_interface: GObject.TypeInterface;
  static allow: (request: any) => void;
  static deny: (request: any) => void;
}
export class PluginClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class PluginPrivate {}
export class PolicyDecisionClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class PolicyDecisionPrivate {}
export class PrintCustomWidgetClass {
  static parent_class: GObject.ObjectClass;
  static apply: (
    print_custom_widget: PrintCustomWidget,
    widget: Gtk.Widget
  ) => void;
  static update: (
    print_custom_widget: PrintCustomWidget,
    widget: Gtk.Widget,
    page_setup: Gtk.PageSetup,
    print_settings: Gtk.PrintSettings
  ) => void;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class PrintCustomWidgetPrivate {}
export class PrintOperationClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class PrintOperationPrivate {}
export class ResponsePolicyDecisionClass {
  static parent_class: PolicyDecisionClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class ResponsePolicyDecisionPrivate {}
export class ScriptDialog {
  close(): void;
  confirm_set_confirmed(confirmed: boolean): void;
  get_dialog_type(): ScriptDialogType;
  get_message(): string;
  prompt_get_default_text(): string;
  prompt_set_text(text: string): void;
  ref(): ScriptDialog;
  unref(): void;
}
export class SecurityManagerClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class SecurityManagerPrivate {}
export class SecurityOrigin {
  constructor(protocol: string, host: string, port: number);
  get_host(): string | null;
  get_port(): number;
  get_protocol(): string | null;
  is_opaque(): boolean;
  ref(): SecurityOrigin;
  to_string(): string | null;
  unref(): void;
}
export class SettingsClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class SettingsPrivate {}
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
export class URISchemeRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class URISchemeRequestPrivate {}
export class UserContentFilter {
  get_identifier(): string;
  ref(): UserContentFilter;
  unref(): void;
}
export class UserContentFilterStoreClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class UserContentFilterStorePrivate {}
export class UserContentManagerClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class UserContentManagerPrivate {}
export class UserMediaPermissionRequestClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class UserMediaPermissionRequestPrivate {}
export class UserScript {
  constructor(
    source: string,
    injected_frames: UserContentInjectedFrames,
    injection_time: UserScriptInjectionTime,
    whitelist: string[] | null,
    blacklist: string[] | null
  );
  ref(): UserScript;
  unref(): void;
}
export class UserStyleSheet {
  constructor(
    source: string,
    injected_frames: UserContentInjectedFrames,
    level: UserStyleLevel,
    whitelist: string[] | null,
    blacklist: string[] | null
  );
  ref(): UserStyleSheet;
  unref(): void;
}
export class WebContextClass {
  static parent: GObject.ObjectClass;
  static download_started: (context: WebContext, download: Download) => void;
  static initialize_web_extensions: (context: WebContext) => void;
  static initialize_notification_permissions: (context: WebContext) => void;
  static automation_started: (
    context: WebContext,
    session: AutomationSession
  ) => void;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WebContextPrivate {}
export class WebInspectorClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WebInspectorPrivate {}
export class WebResourceClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WebResourcePrivate {}
export class WebViewBaseClass {
  static parentClass: Gtk.ContainerClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WebViewBasePrivate {}
export class WebViewClass {
  static parent: WebViewBaseClass;
  static load_changed: (web_view: WebView, load_event: LoadEvent) => void;
  static load_failed: (
    web_view: WebView,
    load_event: LoadEvent,
    failing_uri: string,
    error: GLib.Error
  ) => boolean;
  static create: (
    web_view: WebView,
    navigation_action: NavigationAction
  ) => Gtk.Widget;
  static ready_to_show: (web_view: WebView) => void;
  static run_as_modal: (web_view: WebView) => void;
  static close: (web_view: WebView) => void;
  static script_dialog: (web_view: WebView, dialog: ScriptDialog) => boolean;
  static decide_policy: (
    web_view: WebView,
    decision: PolicyDecision,
    type: PolicyDecisionType
  ) => boolean;
  static permission_request: (
    web_view: WebView,
    permission_request: any
  ) => boolean;
  static mouse_target_changed: (
    web_view: WebView,
    hit_test_result: HitTestResult,
    modifiers: number
  ) => void;
  static print: (web_view: WebView, print_operation: PrintOperation) => boolean;
  static resource_load_started: (
    web_view: WebView,
    resource: WebResource,
    request: URIRequest
  ) => void;
  static enter_fullscreen: (web_view: WebView) => boolean;
  static leave_fullscreen: (web_view: WebView) => boolean;
  static run_file_chooser: (
    web_view: WebView,
    request: FileChooserRequest
  ) => boolean;
  static context_menu: (
    web_view: WebView,
    context_menu: ContextMenu,
    event: Gdk.Event,
    hit_test_result: HitTestResult
  ) => boolean;
  static context_menu_dismissed: (web_view: WebView) => void;
  static submit_form: (
    web_view: WebView,
    request: FormSubmissionRequest
  ) => void;
  static insecure_content_detected: (
    web_view: WebView,
    event: InsecureContentEvent
  ) => void;
  static web_process_crashed: (web_view: WebView) => boolean;
  static authenticate: (
    web_view: WebView,
    request: AuthenticationRequest
  ) => boolean;
  static load_failed_with_tls_errors: (
    web_view: WebView,
    failing_uri: string,
    certificate: Gio.TlsCertificate,
    errors: Gio.TlsCertificateFlags
  ) => boolean;
  static show_notification: (
    web_view: WebView,
    notification: Notification
  ) => boolean;
  static run_color_chooser: (
    web_view: WebView,
    request: ColorChooserRequest
  ) => boolean;
  static show_option_menu: (
    web_view: WebView,
    rectangle: Gdk.Rectangle,
    menu: OptionMenu
  ) => boolean;
  static web_process_terminated: (
    web_view: WebView,
    reason: WebProcessTerminationReason
  ) => void;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
}
export class WebViewPrivate {}
export class WebViewSessionState {
  constructor(data: GLib.Bytes);
  ref(): WebViewSessionState;
  serialize(): GLib.Bytes;
  unref(): void;
}
export class WebsiteData {
  get_name(): string;
  get_size(types: WebsiteDataTypes): number;
  get_types(): WebsiteDataTypes;
  ref(): WebsiteData;
  unref(): void;
}
export class WebsiteDataManagerClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WebsiteDataManagerPrivate {}
export class WindowPropertiesClass {
  static parent_class: GObject.ObjectClass;
  static _webkit_reserved0: () => void;
  static _webkit_reserved1: () => void;
  static _webkit_reserved2: () => void;
  static _webkit_reserved3: () => void;
}
export class WindowPropertiesPrivate {}
export function download_error_quark(): GLib.Quark;
export function favicon_database_error_quark(): GLib.Quark;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function javascript_error_quark(): GLib.Quark;
export function network_error_quark(): GLib.Quark;
export function plugin_error_quark(): GLib.Quark;
export function policy_error_quark(): GLib.Quark;
export function print_error_quark(): GLib.Quark;
export function snapshot_error_quark(): GLib.Quark;
export function uri_for_display(uri: string): string | null;
export function user_content_filter_error_quark(): GLib.Quark;
export function user_media_permission_is_for_audio_device(
  request: UserMediaPermissionRequest
): boolean;
export function user_media_permission_is_for_video_device(
  request: UserMediaPermissionRequest
): boolean;
