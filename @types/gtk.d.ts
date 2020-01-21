import * as xlib from './xlib';
import * as cairo from './cairo';
import * as GdkPixbuf from './gdk-pixbuf';
import * as Pango from './pango';
import * as Atk from './atk';
import * as GObject from './g-object';
import * as Gio from './gio';
import * as GLib from './g-lib';
import * as Gdk from './gdk';
export const BINARY_AGE: number;
export const INPUT_ERROR: number;
export const INTERFACE_AGE: number;
export const LEVEL_BAR_OFFSET_FULL: string;
export const LEVEL_BAR_OFFSET_HIGH: string;
export const LEVEL_BAR_OFFSET_LOW: string;
export const MAJOR_VERSION: number;
export const MAX_COMPOSE_LEN: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const PAPER_NAME_A3: string;
export const PAPER_NAME_A4: string;
export const PAPER_NAME_A5: string;
export const PAPER_NAME_B5: string;
export const PAPER_NAME_EXECUTIVE: string;
export const PAPER_NAME_LEGAL: string;
export const PAPER_NAME_LETTER: string;
export const PATH_PRIO_MASK: number;
export const PRINT_SETTINGS_COLLATE: string;
export const PRINT_SETTINGS_DEFAULT_SOURCE: string;
export const PRINT_SETTINGS_DITHER: string;
export const PRINT_SETTINGS_DUPLEX: string;
export const PRINT_SETTINGS_FINISHINGS: string;
export const PRINT_SETTINGS_MEDIA_TYPE: string;
export const PRINT_SETTINGS_NUMBER_UP: string;
export const PRINT_SETTINGS_NUMBER_UP_LAYOUT: string;
export const PRINT_SETTINGS_N_COPIES: string;
export const PRINT_SETTINGS_ORIENTATION: string;
export const PRINT_SETTINGS_OUTPUT_BASENAME: string;
export const PRINT_SETTINGS_OUTPUT_BIN: string;
export const PRINT_SETTINGS_OUTPUT_DIR: string;
export const PRINT_SETTINGS_OUTPUT_FILE_FORMAT: string;
export const PRINT_SETTINGS_OUTPUT_URI: string;
export const PRINT_SETTINGS_PAGE_RANGES: string;
export const PRINT_SETTINGS_PAGE_SET: string;
export const PRINT_SETTINGS_PAPER_FORMAT: string;
export const PRINT_SETTINGS_PAPER_HEIGHT: string;
export const PRINT_SETTINGS_PAPER_WIDTH: string;
export const PRINT_SETTINGS_PRINTER: string;
export const PRINT_SETTINGS_PRINTER_LPI: string;
export const PRINT_SETTINGS_PRINT_PAGES: string;
export const PRINT_SETTINGS_QUALITY: string;
export const PRINT_SETTINGS_RESOLUTION: string;
export const PRINT_SETTINGS_RESOLUTION_X: string;
export const PRINT_SETTINGS_RESOLUTION_Y: string;
export const PRINT_SETTINGS_REVERSE: string;
export const PRINT_SETTINGS_SCALE: string;
export const PRINT_SETTINGS_USE_COLOR: string;
export const PRINT_SETTINGS_WIN32_DRIVER_EXTRA: string;
export const PRINT_SETTINGS_WIN32_DRIVER_VERSION: string;
export const PRIORITY_RESIZE: number;
export const STOCK_ABOUT: string;
export const STOCK_ADD: string;
export const STOCK_APPLY: string;
export const STOCK_BOLD: string;
export const STOCK_CANCEL: string;
export const STOCK_CAPS_LOCK_WARNING: string;
export const STOCK_CDROM: string;
export const STOCK_CLEAR: string;
export const STOCK_CLOSE: string;
export const STOCK_COLOR_PICKER: string;
export const STOCK_CONNECT: string;
export const STOCK_CONVERT: string;
export const STOCK_COPY: string;
export const STOCK_CUT: string;
export const STOCK_DELETE: string;
export const STOCK_DIALOG_AUTHENTICATION: string;
export const STOCK_DIALOG_ERROR: string;
export const STOCK_DIALOG_INFO: string;
export const STOCK_DIALOG_QUESTION: string;
export const STOCK_DIALOG_WARNING: string;
export const STOCK_DIRECTORY: string;
export const STOCK_DISCARD: string;
export const STOCK_DISCONNECT: string;
export const STOCK_DND: string;
export const STOCK_DND_MULTIPLE: string;
export const STOCK_EDIT: string;
export const STOCK_EXECUTE: string;
export const STOCK_FILE: string;
export const STOCK_FIND: string;
export const STOCK_FIND_AND_REPLACE: string;
export const STOCK_FLOPPY: string;
export const STOCK_FULLSCREEN: string;
export const STOCK_GOTO_BOTTOM: string;
export const STOCK_GOTO_FIRST: string;
export const STOCK_GOTO_LAST: string;
export const STOCK_GOTO_TOP: string;
export const STOCK_GO_BACK: string;
export const STOCK_GO_DOWN: string;
export const STOCK_GO_FORWARD: string;
export const STOCK_GO_UP: string;
export const STOCK_HARDDISK: string;
export const STOCK_HELP: string;
export const STOCK_HOME: string;
export const STOCK_INDENT: string;
export const STOCK_INDEX: string;
export const STOCK_INFO: string;
export const STOCK_ITALIC: string;
export const STOCK_JUMP_TO: string;
export const STOCK_JUSTIFY_CENTER: string;
export const STOCK_JUSTIFY_FILL: string;
export const STOCK_JUSTIFY_LEFT: string;
export const STOCK_JUSTIFY_RIGHT: string;
export const STOCK_LEAVE_FULLSCREEN: string;
export const STOCK_MEDIA_FORWARD: string;
export const STOCK_MEDIA_NEXT: string;
export const STOCK_MEDIA_PAUSE: string;
export const STOCK_MEDIA_PLAY: string;
export const STOCK_MEDIA_PREVIOUS: string;
export const STOCK_MEDIA_RECORD: string;
export const STOCK_MEDIA_REWIND: string;
export const STOCK_MEDIA_STOP: string;
export const STOCK_MISSING_IMAGE: string;
export const STOCK_NETWORK: string;
export const STOCK_NEW: string;
export const STOCK_NO: string;
export const STOCK_OK: string;
export const STOCK_OPEN: string;
export const STOCK_ORIENTATION_LANDSCAPE: string;
export const STOCK_ORIENTATION_PORTRAIT: string;
export const STOCK_ORIENTATION_REVERSE_LANDSCAPE: string;
export const STOCK_ORIENTATION_REVERSE_PORTRAIT: string;
export const STOCK_PAGE_SETUP: string;
export const STOCK_PASTE: string;
export const STOCK_PREFERENCES: string;
export const STOCK_PRINT: string;
export const STOCK_PRINT_ERROR: string;
export const STOCK_PRINT_PAUSED: string;
export const STOCK_PRINT_PREVIEW: string;
export const STOCK_PRINT_REPORT: string;
export const STOCK_PRINT_WARNING: string;
export const STOCK_PROPERTIES: string;
export const STOCK_QUIT: string;
export const STOCK_REDO: string;
export const STOCK_REFRESH: string;
export const STOCK_REMOVE: string;
export const STOCK_REVERT_TO_SAVED: string;
export const STOCK_SAVE: string;
export const STOCK_SAVE_AS: string;
export const STOCK_SELECT_ALL: string;
export const STOCK_SELECT_COLOR: string;
export const STOCK_SELECT_FONT: string;
export const STOCK_SORT_ASCENDING: string;
export const STOCK_SORT_DESCENDING: string;
export const STOCK_SPELL_CHECK: string;
export const STOCK_STOP: string;
export const STOCK_STRIKETHROUGH: string;
export const STOCK_UNDELETE: string;
export const STOCK_UNDERLINE: string;
export const STOCK_UNDO: string;
export const STOCK_UNINDENT: string;
export const STOCK_YES: string;
export const STOCK_ZOOM_100: string;
export const STOCK_ZOOM_FIT: string;
export const STOCK_ZOOM_IN: string;
export const STOCK_ZOOM_OUT: string;
export const STYLE_CLASS_ACCELERATOR: string;
export const STYLE_CLASS_ARROW: string;
export const STYLE_CLASS_BACKGROUND: string;
export const STYLE_CLASS_BOTTOM: string;
export const STYLE_CLASS_BUTTON: string;
export const STYLE_CLASS_CALENDAR: string;
export const STYLE_CLASS_CELL: string;
export const STYLE_CLASS_CHECK: string;
export const STYLE_CLASS_COMBOBOX_ENTRY: string;
export const STYLE_CLASS_CONTEXT_MENU: string;
export const STYLE_CLASS_CSD: string;
export const STYLE_CLASS_CURSOR_HANDLE: string;
export const STYLE_CLASS_DEFAULT: string;
export const STYLE_CLASS_DESTRUCTIVE_ACTION: string;
export const STYLE_CLASS_DIM_LABEL: string;
export const STYLE_CLASS_DND: string;
export const STYLE_CLASS_DOCK: string;
export const STYLE_CLASS_ENTRY: string;
export const STYLE_CLASS_ERROR: string;
export const STYLE_CLASS_EXPANDER: string;
export const STYLE_CLASS_FLAT: string;
export const STYLE_CLASS_FRAME: string;
export const STYLE_CLASS_GRIP: string;
export const STYLE_CLASS_HEADER: string;
export const STYLE_CLASS_HIGHLIGHT: string;
export const STYLE_CLASS_HORIZONTAL: string;
export const STYLE_CLASS_IMAGE: string;
export const STYLE_CLASS_INFO: string;
export const STYLE_CLASS_INLINE_TOOLBAR: string;
export const STYLE_CLASS_INSERTION_CURSOR: string;
export const STYLE_CLASS_LABEL: string;
export const STYLE_CLASS_LEFT: string;
export const STYLE_CLASS_LEVEL_BAR: string;
export const STYLE_CLASS_LINKED: string;
export const STYLE_CLASS_LIST: string;
export const STYLE_CLASS_LIST_ROW: string;
export const STYLE_CLASS_MARK: string;
export const STYLE_CLASS_MENU: string;
export const STYLE_CLASS_MENUBAR: string;
export const STYLE_CLASS_MENUITEM: string;
export const STYLE_CLASS_MESSAGE_DIALOG: string;
export const STYLE_CLASS_MONOSPACE: string;
export const STYLE_CLASS_NEEDS_ATTENTION: string;
export const STYLE_CLASS_NOTEBOOK: string;
export const STYLE_CLASS_OSD: string;
export const STYLE_CLASS_OVERSHOOT: string;
export const STYLE_CLASS_PANE_SEPARATOR: string;
export const STYLE_CLASS_PAPER: string;
export const STYLE_CLASS_POPOVER: string;
export const STYLE_CLASS_POPUP: string;
export const STYLE_CLASS_PRIMARY_TOOLBAR: string;
export const STYLE_CLASS_PROGRESSBAR: string;
export const STYLE_CLASS_PULSE: string;
export const STYLE_CLASS_QUESTION: string;
export const STYLE_CLASS_RADIO: string;
export const STYLE_CLASS_RAISED: string;
export const STYLE_CLASS_READ_ONLY: string;
export const STYLE_CLASS_RIGHT: string;
export const STYLE_CLASS_RUBBERBAND: string;
export const STYLE_CLASS_SCALE: string;
export const STYLE_CLASS_SCALE_HAS_MARKS_ABOVE: string;
export const STYLE_CLASS_SCALE_HAS_MARKS_BELOW: string;
export const STYLE_CLASS_SCROLLBAR: string;
export const STYLE_CLASS_SCROLLBARS_JUNCTION: string;
export const STYLE_CLASS_SEPARATOR: string;
export const STYLE_CLASS_SIDEBAR: string;
export const STYLE_CLASS_SLIDER: string;
export const STYLE_CLASS_SPINBUTTON: string;
export const STYLE_CLASS_SPINNER: string;
export const STYLE_CLASS_STATUSBAR: string;
export const STYLE_CLASS_SUBTITLE: string;
export const STYLE_CLASS_SUGGESTED_ACTION: string;
export const STYLE_CLASS_TITLE: string;
export const STYLE_CLASS_TITLEBAR: string;
export const STYLE_CLASS_TOOLBAR: string;
export const STYLE_CLASS_TOOLTIP: string;
export const STYLE_CLASS_TOP: string;
export const STYLE_CLASS_TOUCH_SELECTION: string;
export const STYLE_CLASS_TROUGH: string;
export const STYLE_CLASS_UNDERSHOOT: string;
export const STYLE_CLASS_VERTICAL: string;
export const STYLE_CLASS_VIEW: string;
export const STYLE_CLASS_WARNING: string;
export const STYLE_CLASS_WIDE: string;
export const STYLE_PROPERTY_BACKGROUND_COLOR: string;
export const STYLE_PROPERTY_BACKGROUND_IMAGE: string;
export const STYLE_PROPERTY_BORDER_COLOR: string;
export const STYLE_PROPERTY_BORDER_RADIUS: string;
export const STYLE_PROPERTY_BORDER_STYLE: string;
export const STYLE_PROPERTY_BORDER_WIDTH: string;
export const STYLE_PROPERTY_COLOR: string;
export const STYLE_PROPERTY_FONT: string;
export const STYLE_PROPERTY_MARGIN: string;
export const STYLE_PROPERTY_PADDING: string;
export const STYLE_PROVIDER_PRIORITY_APPLICATION: number;
export const STYLE_PROVIDER_PRIORITY_FALLBACK: number;
export const STYLE_PROVIDER_PRIORITY_SETTINGS: number;
export const STYLE_PROVIDER_PRIORITY_THEME: number;
export const STYLE_PROVIDER_PRIORITY_USER: number;
export const STYLE_REGION_COLUMN: string;
export const STYLE_REGION_COLUMN_HEADER: string;
export const STYLE_REGION_ROW: string;
export const STYLE_REGION_TAB: string;
export const TEXT_VIEW_PRIORITY_VALIDATE: number;
export const TREE_SORTABLE_DEFAULT_SORT_COLUMN_ID: number;
export const TREE_SORTABLE_UNSORTED_SORT_COLUMN_ID: number;
export enum Align {
  GTK_ALIGN_FILL,
  GTK_ALIGN_START,
  GTK_ALIGN_END,
  GTK_ALIGN_CENTER,
  GTK_ALIGN_BASELINE,
}
export enum ArrowPlacement {
  GTK_ARROWS_BOTH,
  GTK_ARROWS_START,
  GTK_ARROWS_END,
}
export enum ArrowType {
  GTK_ARROW_UP,
  GTK_ARROW_DOWN,
  GTK_ARROW_LEFT,
  GTK_ARROW_RIGHT,
  GTK_ARROW_NONE,
}
export enum AssistantPageType {
  GTK_ASSISTANT_PAGE_CONTENT,
  GTK_ASSISTANT_PAGE_INTRO,
  GTK_ASSISTANT_PAGE_CONFIRM,
  GTK_ASSISTANT_PAGE_SUMMARY,
  GTK_ASSISTANT_PAGE_PROGRESS,
  GTK_ASSISTANT_PAGE_CUSTOM,
}
export enum BaselinePosition {
  GTK_BASELINE_POSITION_TOP,
  GTK_BASELINE_POSITION_CENTER,
  GTK_BASELINE_POSITION_BOTTOM,
}
export enum BorderStyle {
  GTK_BORDER_STYLE_NONE,
  GTK_BORDER_STYLE_SOLID,
  GTK_BORDER_STYLE_INSET,
  GTK_BORDER_STYLE_OUTSET,
  GTK_BORDER_STYLE_HIDDEN,
  GTK_BORDER_STYLE_DOTTED,
  GTK_BORDER_STYLE_DASHED,
  GTK_BORDER_STYLE_DOUBLE,
  GTK_BORDER_STYLE_GROOVE,
  GTK_BORDER_STYLE_RIDGE,
}
export enum BuilderError {
  GTK_BUILDER_ERROR_INVALID_TYPE_FUNCTION,
  GTK_BUILDER_ERROR_UNHANDLED_TAG,
  GTK_BUILDER_ERROR_MISSING_ATTRIBUTE,
  GTK_BUILDER_ERROR_INVALID_ATTRIBUTE,
  GTK_BUILDER_ERROR_INVALID_TAG,
  GTK_BUILDER_ERROR_MISSING_PROPERTY_VALUE,
  GTK_BUILDER_ERROR_INVALID_VALUE,
  GTK_BUILDER_ERROR_VERSION_MISMATCH,
  GTK_BUILDER_ERROR_DUPLICATE_ID,
  GTK_BUILDER_ERROR_OBJECT_TYPE_REFUSED,
  GTK_BUILDER_ERROR_TEMPLATE_MISMATCH,
  GTK_BUILDER_ERROR_INVALID_PROPERTY,
  GTK_BUILDER_ERROR_INVALID_SIGNAL,
  GTK_BUILDER_ERROR_INVALID_ID,
}
export enum ButtonBoxStyle {
  GTK_BUTTONBOX_SPREAD,
  GTK_BUTTONBOX_EDGE,
  GTK_BUTTONBOX_START,
  GTK_BUTTONBOX_END,
  GTK_BUTTONBOX_CENTER,
  GTK_BUTTONBOX_EXPAND,
}
export enum ButtonRole {
  GTK_BUTTON_ROLE_NORMAL,
  GTK_BUTTON_ROLE_CHECK,
  GTK_BUTTON_ROLE_RADIO,
}
export enum ButtonsType {
  GTK_BUTTONS_NONE,
  GTK_BUTTONS_OK,
  GTK_BUTTONS_CLOSE,
  GTK_BUTTONS_CANCEL,
  GTK_BUTTONS_YES_NO,
  GTK_BUTTONS_OK_CANCEL,
}
export enum CellRendererAccelMode {
  GTK_CELL_RENDERER_ACCEL_MODE_GTK,
  GTK_CELL_RENDERER_ACCEL_MODE_OTHER,
  GTK_CELL_RENDERER_ACCEL_MODE_MODIFIER_TAP,
}
export enum CellRendererMode {
  GTK_CELL_RENDERER_MODE_INERT,
  GTK_CELL_RENDERER_MODE_ACTIVATABLE,
  GTK_CELL_RENDERER_MODE_EDITABLE,
}
export enum CornerType {
  GTK_CORNER_TOP_LEFT,
  GTK_CORNER_BOTTOM_LEFT,
  GTK_CORNER_TOP_RIGHT,
  GTK_CORNER_BOTTOM_RIGHT,
}
export enum CssProviderError {
  GTK_CSS_PROVIDER_ERROR_FAILED,
  GTK_CSS_PROVIDER_ERROR_SYNTAX,
  GTK_CSS_PROVIDER_ERROR_IMPORT,
  GTK_CSS_PROVIDER_ERROR_NAME,
  GTK_CSS_PROVIDER_ERROR_DEPRECATED,
  GTK_CSS_PROVIDER_ERROR_UNKNOWN_VALUE,
}
export enum CssSectionType {
  GTK_CSS_SECTION_DOCUMENT,
  GTK_CSS_SECTION_IMPORT,
  GTK_CSS_SECTION_COLOR_DEFINITION,
  GTK_CSS_SECTION_BINDING_SET,
  GTK_CSS_SECTION_RULESET,
  GTK_CSS_SECTION_SELECTOR,
  GTK_CSS_SECTION_DECLARATION,
  GTK_CSS_SECTION_VALUE,
  GTK_CSS_SECTION_KEYFRAMES,
}
export enum DeleteType {
  GTK_DELETE_CHARS,
  GTK_DELETE_WORD_ENDS,
  GTK_DELETE_WORDS,
  GTK_DELETE_DISPLAY_LINES,
  GTK_DELETE_DISPLAY_LINE_ENDS,
  GTK_DELETE_PARAGRAPH_ENDS,
  GTK_DELETE_PARAGRAPHS,
  GTK_DELETE_WHITESPACE,
}
export enum DirectionType {
  GTK_DIR_TAB_FORWARD,
  GTK_DIR_TAB_BACKWARD,
  GTK_DIR_UP,
  GTK_DIR_DOWN,
  GTK_DIR_LEFT,
  GTK_DIR_RIGHT,
}
export enum DragResult {
  GTK_DRAG_RESULT_SUCCESS,
  GTK_DRAG_RESULT_NO_TARGET,
  GTK_DRAG_RESULT_USER_CANCELLED,
  GTK_DRAG_RESULT_TIMEOUT_EXPIRED,
  GTK_DRAG_RESULT_GRAB_BROKEN,
  GTK_DRAG_RESULT_ERROR,
}
export enum EntryIconPosition {
  GTK_ENTRY_ICON_PRIMARY,
  GTK_ENTRY_ICON_SECONDARY,
}
export enum EventSequenceState {
  GTK_EVENT_SEQUENCE_NONE,
  GTK_EVENT_SEQUENCE_CLAIMED,
  GTK_EVENT_SEQUENCE_DENIED,
}
export enum ExpanderStyle {
  GTK_EXPANDER_COLLAPSED,
  GTK_EXPANDER_SEMI_COLLAPSED,
  GTK_EXPANDER_SEMI_EXPANDED,
  GTK_EXPANDER_EXPANDED,
}
export enum FileChooserAction {
  GTK_FILE_CHOOSER_ACTION_OPEN,
  GTK_FILE_CHOOSER_ACTION_SAVE,
  GTK_FILE_CHOOSER_ACTION_SELECT_FOLDER,
  GTK_FILE_CHOOSER_ACTION_CREATE_FOLDER,
}
export enum FileChooserConfirmation {
  GTK_FILE_CHOOSER_CONFIRMATION_CONFIRM,
  GTK_FILE_CHOOSER_CONFIRMATION_ACCEPT_FILENAME,
  GTK_FILE_CHOOSER_CONFIRMATION_SELECT_AGAIN,
}
export enum FileChooserError {
  GTK_FILE_CHOOSER_ERROR_NONEXISTENT,
  GTK_FILE_CHOOSER_ERROR_BAD_FILENAME,
  GTK_FILE_CHOOSER_ERROR_ALREADY_EXISTS,
  GTK_FILE_CHOOSER_ERROR_INCOMPLETE_HOSTNAME,
}
export enum IMPreeditStyle {
  GTK_IM_PREEDIT_NOTHING,
  GTK_IM_PREEDIT_CALLBACK,
  GTK_IM_PREEDIT_NONE,
}
export enum IMStatusStyle {
  GTK_IM_STATUS_NOTHING,
  GTK_IM_STATUS_CALLBACK,
  GTK_IM_STATUS_NONE,
}
export enum IconSize {
  GTK_ICON_SIZE_INVALID,
  GTK_ICON_SIZE_MENU,
  GTK_ICON_SIZE_SMALL_TOOLBAR,
  GTK_ICON_SIZE_LARGE_TOOLBAR,
  GTK_ICON_SIZE_BUTTON,
  GTK_ICON_SIZE_DND,
  GTK_ICON_SIZE_DIALOG,
}
export enum IconThemeError {
  GTK_ICON_THEME_NOT_FOUND,
  GTK_ICON_THEME_FAILED,
}
export enum IconViewDropPosition {
  GTK_ICON_VIEW_NO_DROP,
  GTK_ICON_VIEW_DROP_INTO,
  GTK_ICON_VIEW_DROP_LEFT,
  GTK_ICON_VIEW_DROP_RIGHT,
  GTK_ICON_VIEW_DROP_ABOVE,
  GTK_ICON_VIEW_DROP_BELOW,
}
export enum ImageType {
  GTK_IMAGE_EMPTY,
  GTK_IMAGE_PIXBUF,
  GTK_IMAGE_STOCK,
  GTK_IMAGE_ICON_SET,
  GTK_IMAGE_ANIMATION,
  GTK_IMAGE_ICON_NAME,
  GTK_IMAGE_GICON,
  GTK_IMAGE_SURFACE,
}
export enum InputPurpose {
  GTK_INPUT_PURPOSE_FREE_FORM,
  GTK_INPUT_PURPOSE_ALPHA,
  GTK_INPUT_PURPOSE_DIGITS,
  GTK_INPUT_PURPOSE_NUMBER,
  GTK_INPUT_PURPOSE_PHONE,
  GTK_INPUT_PURPOSE_URL,
  GTK_INPUT_PURPOSE_EMAIL,
  GTK_INPUT_PURPOSE_NAME,
  GTK_INPUT_PURPOSE_PASSWORD,
  GTK_INPUT_PURPOSE_PIN,
}
export enum Justification {
  GTK_JUSTIFY_LEFT,
  GTK_JUSTIFY_RIGHT,
  GTK_JUSTIFY_CENTER,
  GTK_JUSTIFY_FILL,
}
export enum LevelBarMode {
  GTK_LEVEL_BAR_MODE_CONTINUOUS,
  GTK_LEVEL_BAR_MODE_DISCRETE,
}
export enum License {
  GTK_LICENSE_UNKNOWN,
  GTK_LICENSE_CUSTOM,
  GTK_LICENSE_GPL_2_0,
  GTK_LICENSE_GPL_3_0,
  GTK_LICENSE_LGPL_2_1,
  GTK_LICENSE_LGPL_3_0,
  GTK_LICENSE_BSD,
  GTK_LICENSE_MIT_X11,
  GTK_LICENSE_ARTISTIC,
  GTK_LICENSE_GPL_2_0_ONLY,
  GTK_LICENSE_GPL_3_0_ONLY,
  GTK_LICENSE_LGPL_2_1_ONLY,
  GTK_LICENSE_LGPL_3_0_ONLY,
  GTK_LICENSE_AGPL_3_0,
  GTK_LICENSE_AGPL_3_0_ONLY,
}
export enum MenuDirectionType {
  GTK_MENU_DIR_PARENT,
  GTK_MENU_DIR_CHILD,
  GTK_MENU_DIR_NEXT,
  GTK_MENU_DIR_PREV,
}
export enum MessageType {
  GTK_MESSAGE_INFO,
  GTK_MESSAGE_WARNING,
  GTK_MESSAGE_QUESTION,
  GTK_MESSAGE_ERROR,
  GTK_MESSAGE_OTHER,
}
export enum MovementStep {
  GTK_MOVEMENT_LOGICAL_POSITIONS,
  GTK_MOVEMENT_VISUAL_POSITIONS,
  GTK_MOVEMENT_WORDS,
  GTK_MOVEMENT_DISPLAY_LINES,
  GTK_MOVEMENT_DISPLAY_LINE_ENDS,
  GTK_MOVEMENT_PARAGRAPHS,
  GTK_MOVEMENT_PARAGRAPH_ENDS,
  GTK_MOVEMENT_PAGES,
  GTK_MOVEMENT_BUFFER_ENDS,
  GTK_MOVEMENT_HORIZONTAL_PAGES,
}
export enum NotebookTab {
  GTK_NOTEBOOK_TAB_FIRST,
  GTK_NOTEBOOK_TAB_LAST,
}
export enum NumberUpLayout {
  GTK_NUMBER_UP_LAYOUT_LEFT_TO_RIGHT_TOP_TO_BOTTOM,
  GTK_NUMBER_UP_LAYOUT_LEFT_TO_RIGHT_BOTTOM_TO_TOP,
  GTK_NUMBER_UP_LAYOUT_RIGHT_TO_LEFT_TOP_TO_BOTTOM,
  GTK_NUMBER_UP_LAYOUT_RIGHT_TO_LEFT_BOTTOM_TO_TOP,
  GTK_NUMBER_UP_LAYOUT_TOP_TO_BOTTOM_LEFT_TO_RIGHT,
  GTK_NUMBER_UP_LAYOUT_TOP_TO_BOTTOM_RIGHT_TO_LEFT,
  GTK_NUMBER_UP_LAYOUT_BOTTOM_TO_TOP_LEFT_TO_RIGHT,
  GTK_NUMBER_UP_LAYOUT_BOTTOM_TO_TOP_RIGHT_TO_LEFT,
}
export enum Orientation {
  GTK_ORIENTATION_HORIZONTAL,
  GTK_ORIENTATION_VERTICAL,
}
export enum PackDirection {
  GTK_PACK_DIRECTION_LTR,
  GTK_PACK_DIRECTION_RTL,
  GTK_PACK_DIRECTION_TTB,
  GTK_PACK_DIRECTION_BTT,
}
export enum PackType {
  GTK_PACK_START,
  GTK_PACK_END,
}
export enum PadActionType {
  GTK_PAD_ACTION_BUTTON,
  GTK_PAD_ACTION_RING,
  GTK_PAD_ACTION_STRIP,
}
export enum PageOrientation {
  GTK_PAGE_ORIENTATION_PORTRAIT,
  GTK_PAGE_ORIENTATION_LANDSCAPE,
  GTK_PAGE_ORIENTATION_REVERSE_PORTRAIT,
  GTK_PAGE_ORIENTATION_REVERSE_LANDSCAPE,
}
export enum PageSet {
  GTK_PAGE_SET_ALL,
  GTK_PAGE_SET_EVEN,
  GTK_PAGE_SET_ODD,
}
export enum PanDirection {
  GTK_PAN_DIRECTION_LEFT,
  GTK_PAN_DIRECTION_RIGHT,
  GTK_PAN_DIRECTION_UP,
  GTK_PAN_DIRECTION_DOWN,
}
export enum PathPriorityType {
  GTK_PATH_PRIO_LOWEST,
  GTK_PATH_PRIO_GTK,
  GTK_PATH_PRIO_APPLICATION,
  GTK_PATH_PRIO_THEME,
  GTK_PATH_PRIO_RC,
  GTK_PATH_PRIO_HIGHEST,
}
export enum PathType {
  GTK_PATH_WIDGET,
  GTK_PATH_WIDGET_CLASS,
  GTK_PATH_CLASS,
}
export enum PolicyType {
  GTK_POLICY_ALWAYS,
  GTK_POLICY_AUTOMATIC,
  GTK_POLICY_NEVER,
  GTK_POLICY_EXTERNAL,
}
export enum PopoverConstraint {
  GTK_POPOVER_CONSTRAINT_NONE,
  GTK_POPOVER_CONSTRAINT_WINDOW,
}
export enum PositionType {
  GTK_POS_LEFT,
  GTK_POS_RIGHT,
  GTK_POS_TOP,
  GTK_POS_BOTTOM,
}
export enum PrintDuplex {
  GTK_PRINT_DUPLEX_SIMPLEX,
  GTK_PRINT_DUPLEX_HORIZONTAL,
  GTK_PRINT_DUPLEX_VERTICAL,
}
export enum PrintError {
  GTK_PRINT_ERROR_GENERAL,
  GTK_PRINT_ERROR_INTERNAL_ERROR,
  GTK_PRINT_ERROR_NOMEM,
  GTK_PRINT_ERROR_INVALID_FILE,
}
export enum PrintOperationAction {
  GTK_PRINT_OPERATION_ACTION_PRINT_DIALOG,
  GTK_PRINT_OPERATION_ACTION_PRINT,
  GTK_PRINT_OPERATION_ACTION_PREVIEW,
  GTK_PRINT_OPERATION_ACTION_EXPORT,
}
export enum PrintOperationResult {
  GTK_PRINT_OPERATION_RESULT_ERROR,
  GTK_PRINT_OPERATION_RESULT_APPLY,
  GTK_PRINT_OPERATION_RESULT_CANCEL,
  GTK_PRINT_OPERATION_RESULT_IN_PROGRESS,
}
export enum PrintPages {
  GTK_PRINT_PAGES_ALL,
  GTK_PRINT_PAGES_CURRENT,
  GTK_PRINT_PAGES_RANGES,
  GTK_PRINT_PAGES_SELECTION,
}
export enum PrintQuality {
  GTK_PRINT_QUALITY_LOW,
  GTK_PRINT_QUALITY_NORMAL,
  GTK_PRINT_QUALITY_HIGH,
  GTK_PRINT_QUALITY_DRAFT,
}
export enum PrintStatus {
  GTK_PRINT_STATUS_INITIAL,
  GTK_PRINT_STATUS_PREPARING,
  GTK_PRINT_STATUS_GENERATING_DATA,
  GTK_PRINT_STATUS_SENDING_DATA,
  GTK_PRINT_STATUS_PENDING,
  GTK_PRINT_STATUS_PENDING_ISSUE,
  GTK_PRINT_STATUS_PRINTING,
  GTK_PRINT_STATUS_FINISHED,
  GTK_PRINT_STATUS_FINISHED_ABORTED,
}
export enum PropagationPhase {
  GTK_PHASE_NONE,
  GTK_PHASE_CAPTURE,
  GTK_PHASE_BUBBLE,
  GTK_PHASE_TARGET,
}
export enum RcTokenType {
  GTK_RC_TOKEN_INVALID,
  GTK_RC_TOKEN_INCLUDE,
  GTK_RC_TOKEN_NORMAL,
  GTK_RC_TOKEN_ACTIVE,
  GTK_RC_TOKEN_PRELIGHT,
  GTK_RC_TOKEN_SELECTED,
  GTK_RC_TOKEN_INSENSITIVE,
  GTK_RC_TOKEN_FG,
  GTK_RC_TOKEN_BG,
  GTK_RC_TOKEN_TEXT,
  GTK_RC_TOKEN_BASE,
  GTK_RC_TOKEN_XTHICKNESS,
  GTK_RC_TOKEN_YTHICKNESS,
  GTK_RC_TOKEN_FONT,
  GTK_RC_TOKEN_FONTSET,
  GTK_RC_TOKEN_FONT_NAME,
  GTK_RC_TOKEN_BG_PIXMAP,
  GTK_RC_TOKEN_PIXMAP_PATH,
  GTK_RC_TOKEN_STYLE,
  GTK_RC_TOKEN_BINDING,
  GTK_RC_TOKEN_BIND,
  GTK_RC_TOKEN_WIDGET,
  GTK_RC_TOKEN_WIDGET_CLASS,
  GTK_RC_TOKEN_CLASS,
  GTK_RC_TOKEN_LOWEST,
  GTK_RC_TOKEN_GTK,
  GTK_RC_TOKEN_APPLICATION,
  GTK_RC_TOKEN_THEME,
  GTK_RC_TOKEN_RC,
  GTK_RC_TOKEN_HIGHEST,
  GTK_RC_TOKEN_ENGINE,
  GTK_RC_TOKEN_MODULE_PATH,
  GTK_RC_TOKEN_IM_MODULE_PATH,
  GTK_RC_TOKEN_IM_MODULE_FILE,
  GTK_RC_TOKEN_STOCK,
  GTK_RC_TOKEN_LTR,
  GTK_RC_TOKEN_RTL,
  GTK_RC_TOKEN_COLOR,
  GTK_RC_TOKEN_UNBIND,
  GTK_RC_TOKEN_LAST,
}
export enum RecentChooserError {
  GTK_RECENT_CHOOSER_ERROR_NOT_FOUND,
  GTK_RECENT_CHOOSER_ERROR_INVALID_URI,
}
export enum RecentManagerError {
  GTK_RECENT_MANAGER_ERROR_NOT_FOUND,
  GTK_RECENT_MANAGER_ERROR_INVALID_URI,
  GTK_RECENT_MANAGER_ERROR_INVALID_ENCODING,
  GTK_RECENT_MANAGER_ERROR_NOT_REGISTERED,
  GTK_RECENT_MANAGER_ERROR_READ,
  GTK_RECENT_MANAGER_ERROR_WRITE,
  GTK_RECENT_MANAGER_ERROR_UNKNOWN,
}
export enum RecentSortType {
  GTK_RECENT_SORT_NONE,
  GTK_RECENT_SORT_MRU,
  GTK_RECENT_SORT_LRU,
  GTK_RECENT_SORT_CUSTOM,
}
export enum ReliefStyle {
  GTK_RELIEF_NORMAL,
  GTK_RELIEF_HALF,
  GTK_RELIEF_NONE,
}
export enum ResizeMode {
  GTK_RESIZE_PARENT,
  GTK_RESIZE_QUEUE,
  GTK_RESIZE_IMMEDIATE,
}
export enum ResponseType {
  GTK_RESPONSE_NONE,
  GTK_RESPONSE_REJECT,
  GTK_RESPONSE_ACCEPT,
  GTK_RESPONSE_DELETE_EVENT,
  GTK_RESPONSE_OK,
  GTK_RESPONSE_CANCEL,
  GTK_RESPONSE_CLOSE,
  GTK_RESPONSE_YES,
  GTK_RESPONSE_NO,
  GTK_RESPONSE_APPLY,
  GTK_RESPONSE_HELP,
}
export enum RevealerTransitionType {
  GTK_REVEALER_TRANSITION_TYPE_NONE,
  GTK_REVEALER_TRANSITION_TYPE_CROSSFADE,
  GTK_REVEALER_TRANSITION_TYPE_SLIDE_RIGHT,
  GTK_REVEALER_TRANSITION_TYPE_SLIDE_LEFT,
  GTK_REVEALER_TRANSITION_TYPE_SLIDE_UP,
  GTK_REVEALER_TRANSITION_TYPE_SLIDE_DOWN,
}
export enum ScrollStep {
  GTK_SCROLL_STEPS,
  GTK_SCROLL_PAGES,
  GTK_SCROLL_ENDS,
  GTK_SCROLL_HORIZONTAL_STEPS,
  GTK_SCROLL_HORIZONTAL_PAGES,
  GTK_SCROLL_HORIZONTAL_ENDS,
}
export enum ScrollType {
  GTK_SCROLL_NONE,
  GTK_SCROLL_JUMP,
  GTK_SCROLL_STEP_BACKWARD,
  GTK_SCROLL_STEP_FORWARD,
  GTK_SCROLL_PAGE_BACKWARD,
  GTK_SCROLL_PAGE_FORWARD,
  GTK_SCROLL_STEP_UP,
  GTK_SCROLL_STEP_DOWN,
  GTK_SCROLL_PAGE_UP,
  GTK_SCROLL_PAGE_DOWN,
  GTK_SCROLL_STEP_LEFT,
  GTK_SCROLL_STEP_RIGHT,
  GTK_SCROLL_PAGE_LEFT,
  GTK_SCROLL_PAGE_RIGHT,
  GTK_SCROLL_START,
  GTK_SCROLL_END,
}
export enum ScrollablePolicy {
  GTK_SCROLL_MINIMUM,
  GTK_SCROLL_NATURAL,
}
export enum SelectionMode {
  GTK_SELECTION_NONE,
  GTK_SELECTION_SINGLE,
  GTK_SELECTION_BROWSE,
  GTK_SELECTION_MULTIPLE,
}
export enum SensitivityType {
  GTK_SENSITIVITY_AUTO,
  GTK_SENSITIVITY_ON,
  GTK_SENSITIVITY_OFF,
}
export enum ShadowType {
  GTK_SHADOW_NONE,
  GTK_SHADOW_IN,
  GTK_SHADOW_OUT,
  GTK_SHADOW_ETCHED_IN,
  GTK_SHADOW_ETCHED_OUT,
}
export enum ShortcutType {
  GTK_SHORTCUT_ACCELERATOR,
  GTK_SHORTCUT_GESTURE_PINCH,
  GTK_SHORTCUT_GESTURE_STRETCH,
  GTK_SHORTCUT_GESTURE_ROTATE_CLOCKWISE,
  GTK_SHORTCUT_GESTURE_ROTATE_COUNTERCLOCKWISE,
  GTK_SHORTCUT_GESTURE_TWO_FINGER_SWIPE_LEFT,
  GTK_SHORTCUT_GESTURE_TWO_FINGER_SWIPE_RIGHT,
  GTK_SHORTCUT_GESTURE,
}
export enum SizeGroupMode {
  GTK_SIZE_GROUP_NONE,
  GTK_SIZE_GROUP_HORIZONTAL,
  GTK_SIZE_GROUP_VERTICAL,
  GTK_SIZE_GROUP_BOTH,
}
export enum SizeRequestMode {
  GTK_SIZE_REQUEST_HEIGHT_FOR_WIDTH,
  GTK_SIZE_REQUEST_WIDTH_FOR_HEIGHT,
  GTK_SIZE_REQUEST_CONSTANT_SIZE,
}
export enum SortType {
  GTK_SORT_ASCENDING,
  GTK_SORT_DESCENDING,
}
export enum SpinButtonUpdatePolicy {
  GTK_UPDATE_ALWAYS,
  GTK_UPDATE_IF_VALID,
}
export enum SpinType {
  GTK_SPIN_STEP_FORWARD,
  GTK_SPIN_STEP_BACKWARD,
  GTK_SPIN_PAGE_FORWARD,
  GTK_SPIN_PAGE_BACKWARD,
  GTK_SPIN_HOME,
  GTK_SPIN_END,
  GTK_SPIN_USER_DEFINED,
}
export enum StackTransitionType {
  GTK_STACK_TRANSITION_TYPE_NONE,
  GTK_STACK_TRANSITION_TYPE_CROSSFADE,
  GTK_STACK_TRANSITION_TYPE_SLIDE_RIGHT,
  GTK_STACK_TRANSITION_TYPE_SLIDE_LEFT,
  GTK_STACK_TRANSITION_TYPE_SLIDE_UP,
  GTK_STACK_TRANSITION_TYPE_SLIDE_DOWN,
  GTK_STACK_TRANSITION_TYPE_SLIDE_LEFT_RIGHT,
  GTK_STACK_TRANSITION_TYPE_SLIDE_UP_DOWN,
  GTK_STACK_TRANSITION_TYPE_OVER_UP,
  GTK_STACK_TRANSITION_TYPE_OVER_DOWN,
  GTK_STACK_TRANSITION_TYPE_OVER_LEFT,
  GTK_STACK_TRANSITION_TYPE_OVER_RIGHT,
  GTK_STACK_TRANSITION_TYPE_UNDER_UP,
  GTK_STACK_TRANSITION_TYPE_UNDER_DOWN,
  GTK_STACK_TRANSITION_TYPE_UNDER_LEFT,
  GTK_STACK_TRANSITION_TYPE_UNDER_RIGHT,
  GTK_STACK_TRANSITION_TYPE_OVER_UP_DOWN,
  GTK_STACK_TRANSITION_TYPE_OVER_DOWN_UP,
  GTK_STACK_TRANSITION_TYPE_OVER_LEFT_RIGHT,
  GTK_STACK_TRANSITION_TYPE_OVER_RIGHT_LEFT,
}
export enum StateType {
  GTK_STATE_NORMAL,
  GTK_STATE_ACTIVE,
  GTK_STATE_PRELIGHT,
  GTK_STATE_SELECTED,
  GTK_STATE_INSENSITIVE,
  GTK_STATE_INCONSISTENT,
  GTK_STATE_FOCUSED,
}
export enum TextBufferTargetInfo {
  GTK_TEXT_BUFFER_TARGET_INFO_BUFFER_CONTENTS,
  GTK_TEXT_BUFFER_TARGET_INFO_RICH_TEXT,
  GTK_TEXT_BUFFER_TARGET_INFO_TEXT,
}
export enum TextDirection {
  GTK_TEXT_DIR_NONE,
  GTK_TEXT_DIR_LTR,
  GTK_TEXT_DIR_RTL,
}
export enum TextExtendSelection {
  GTK_TEXT_EXTEND_SELECTION_WORD,
  GTK_TEXT_EXTEND_SELECTION_LINE,
}
export enum TextViewLayer {
  GTK_TEXT_VIEW_LAYER_BELOW,
  GTK_TEXT_VIEW_LAYER_ABOVE,
  GTK_TEXT_VIEW_LAYER_BELOW_TEXT,
  GTK_TEXT_VIEW_LAYER_ABOVE_TEXT,
}
export enum TextWindowType {
  GTK_TEXT_WINDOW_PRIVATE,
  GTK_TEXT_WINDOW_WIDGET,
  GTK_TEXT_WINDOW_TEXT,
  GTK_TEXT_WINDOW_LEFT,
  GTK_TEXT_WINDOW_RIGHT,
  GTK_TEXT_WINDOW_TOP,
  GTK_TEXT_WINDOW_BOTTOM,
}
export enum ToolbarSpaceStyle {
  GTK_TOOLBAR_SPACE_EMPTY,
  GTK_TOOLBAR_SPACE_LINE,
}
export enum ToolbarStyle {
  GTK_TOOLBAR_ICONS,
  GTK_TOOLBAR_TEXT,
  GTK_TOOLBAR_BOTH,
  GTK_TOOLBAR_BOTH_HORIZ,
}
export enum TreeViewColumnSizing {
  GTK_TREE_VIEW_COLUMN_GROW_ONLY,
  GTK_TREE_VIEW_COLUMN_AUTOSIZE,
  GTK_TREE_VIEW_COLUMN_FIXED,
}
export enum TreeViewDropPosition {
  GTK_TREE_VIEW_DROP_BEFORE,
  GTK_TREE_VIEW_DROP_AFTER,
  GTK_TREE_VIEW_DROP_INTO_OR_BEFORE,
  GTK_TREE_VIEW_DROP_INTO_OR_AFTER,
}
export enum TreeViewGridLines {
  GTK_TREE_VIEW_GRID_LINES_NONE,
  GTK_TREE_VIEW_GRID_LINES_HORIZONTAL,
  GTK_TREE_VIEW_GRID_LINES_VERTICAL,
  GTK_TREE_VIEW_GRID_LINES_BOTH,
}
export enum Unit {
  GTK_UNIT_NONE,
  GTK_UNIT_POINTS,
  GTK_UNIT_INCH,
  GTK_UNIT_MM,
}
export enum WidgetHelpType {
  GTK_WIDGET_HELP_TOOLTIP,
  GTK_WIDGET_HELP_WHATS_THIS,
}
export enum WindowPosition {
  GTK_WIN_POS_NONE,
  GTK_WIN_POS_CENTER,
  GTK_WIN_POS_MOUSE,
  GTK_WIN_POS_CENTER_ALWAYS,
  GTK_WIN_POS_CENTER_ON_PARENT,
}
export enum WindowType {
  GTK_WINDOW_TOPLEVEL,
  GTK_WINDOW_POPUP,
}
export enum WrapMode {
  GTK_WRAP_NONE,
  GTK_WRAP_CHAR,
  GTK_WRAP_WORD,
  GTK_WRAP_WORD_CHAR,
}
export enum AccelFlags {
  GTK_ACCEL_VISIBLE,
  GTK_ACCEL_LOCKED,
  GTK_ACCEL_MASK,
}
export enum ApplicationInhibitFlags {
  GTK_APPLICATION_INHIBIT_LOGOUT,
  GTK_APPLICATION_INHIBIT_SWITCH,
  GTK_APPLICATION_INHIBIT_SUSPEND,
  GTK_APPLICATION_INHIBIT_IDLE,
}
export enum AttachOptions {
  GTK_EXPAND,
  GTK_SHRINK,
  GTK_FILL,
}
export enum CalendarDisplayOptions {
  GTK_CALENDAR_SHOW_HEADING,
  GTK_CALENDAR_SHOW_DAY_NAMES,
  GTK_CALENDAR_NO_MONTH_CHANGE,
  GTK_CALENDAR_SHOW_WEEK_NUMBERS,
  GTK_CALENDAR_SHOW_DETAILS,
}
export enum CellRendererState {
  GTK_CELL_RENDERER_SELECTED,
  GTK_CELL_RENDERER_PRELIT,
  GTK_CELL_RENDERER_INSENSITIVE,
  GTK_CELL_RENDERER_SORTED,
  GTK_CELL_RENDERER_FOCUSED,
  GTK_CELL_RENDERER_EXPANDABLE,
  GTK_CELL_RENDERER_EXPANDED,
}
export enum DebugFlag {
  GTK_DEBUG_MISC,
  GTK_DEBUG_PLUGSOCKET,
  GTK_DEBUG_TEXT,
  GTK_DEBUG_TREE,
  GTK_DEBUG_UPDATES,
  GTK_DEBUG_KEYBINDINGS,
  GTK_DEBUG_MULTIHEAD,
  GTK_DEBUG_MODULES,
  GTK_DEBUG_GEOMETRY,
  GTK_DEBUG_ICONTHEME,
  GTK_DEBUG_PRINTING,
  GTK_DEBUG_BUILDER,
  GTK_DEBUG_SIZE_REQUEST,
  GTK_DEBUG_NO_CSS_CACHE,
  GTK_DEBUG_BASELINES,
  GTK_DEBUG_PIXEL_CACHE,
  GTK_DEBUG_NO_PIXEL_CACHE,
  GTK_DEBUG_INTERACTIVE,
  GTK_DEBUG_TOUCHSCREEN,
  GTK_DEBUG_ACTIONS,
  GTK_DEBUG_RESIZE,
  GTK_DEBUG_LAYOUT,
}
export enum DestDefaults {
  GTK_DEST_DEFAULT_MOTION,
  GTK_DEST_DEFAULT_HIGHLIGHT,
  GTK_DEST_DEFAULT_DROP,
  GTK_DEST_DEFAULT_ALL,
}
export enum DialogFlags {
  GTK_DIALOG_MODAL,
  GTK_DIALOG_DESTROY_WITH_PARENT,
  GTK_DIALOG_USE_HEADER_BAR,
}
export enum EventControllerScrollFlags {
  GTK_EVENT_CONTROLLER_SCROLL_NONE,
  GTK_EVENT_CONTROLLER_SCROLL_VERTICAL,
  GTK_EVENT_CONTROLLER_SCROLL_HORIZONTAL,
  GTK_EVENT_CONTROLLER_SCROLL_DISCRETE,
  GTK_EVENT_CONTROLLER_SCROLL_KINETIC,
  GTK_EVENT_CONTROLLER_SCROLL_BOTH_AXES,
}
export enum FileFilterFlags {
  GTK_FILE_FILTER_FILENAME,
  GTK_FILE_FILTER_URI,
  GTK_FILE_FILTER_DISPLAY_NAME,
  GTK_FILE_FILTER_MIME_TYPE,
}
export enum FontChooserLevel {
  GTK_FONT_CHOOSER_LEVEL_FAMILY,
  GTK_FONT_CHOOSER_LEVEL_STYLE,
  GTK_FONT_CHOOSER_LEVEL_SIZE,
  GTK_FONT_CHOOSER_LEVEL_VARIATIONS,
  GTK_FONT_CHOOSER_LEVEL_FEATURES,
}
export enum IconLookupFlags {
  GTK_ICON_LOOKUP_NO_SVG,
  GTK_ICON_LOOKUP_FORCE_SVG,
  GTK_ICON_LOOKUP_USE_BUILTIN,
  GTK_ICON_LOOKUP_GENERIC_FALLBACK,
  GTK_ICON_LOOKUP_FORCE_SIZE,
  GTK_ICON_LOOKUP_FORCE_REGULAR,
  GTK_ICON_LOOKUP_FORCE_SYMBOLIC,
  GTK_ICON_LOOKUP_DIR_LTR,
  GTK_ICON_LOOKUP_DIR_RTL,
}
export enum InputHints {
  GTK_INPUT_HINT_NONE,
  GTK_INPUT_HINT_SPELLCHECK,
  GTK_INPUT_HINT_NO_SPELLCHECK,
  GTK_INPUT_HINT_WORD_COMPLETION,
  GTK_INPUT_HINT_LOWERCASE,
  GTK_INPUT_HINT_UPPERCASE_CHARS,
  GTK_INPUT_HINT_UPPERCASE_WORDS,
  GTK_INPUT_HINT_UPPERCASE_SENTENCES,
  GTK_INPUT_HINT_INHIBIT_OSK,
  GTK_INPUT_HINT_VERTICAL_WRITING,
  GTK_INPUT_HINT_EMOJI,
  GTK_INPUT_HINT_NO_EMOJI,
}
export enum JunctionSides {
  GTK_JUNCTION_NONE,
  GTK_JUNCTION_CORNER_TOPLEFT,
  GTK_JUNCTION_CORNER_TOPRIGHT,
  GTK_JUNCTION_CORNER_BOTTOMLEFT,
  GTK_JUNCTION_CORNER_BOTTOMRIGHT,
  GTK_JUNCTION_TOP,
  GTK_JUNCTION_BOTTOM,
  GTK_JUNCTION_LEFT,
  GTK_JUNCTION_RIGHT,
}
export enum PlacesOpenFlags {
  GTK_PLACES_OPEN_NORMAL,
  GTK_PLACES_OPEN_NEW_TAB,
  GTK_PLACES_OPEN_NEW_WINDOW,
}
export enum RcFlags {
  GTK_RC_FG,
  GTK_RC_BG,
  GTK_RC_TEXT,
  GTK_RC_BASE,
}
export enum RecentFilterFlags {
  GTK_RECENT_FILTER_URI,
  GTK_RECENT_FILTER_DISPLAY_NAME,
  GTK_RECENT_FILTER_MIME_TYPE,
  GTK_RECENT_FILTER_APPLICATION,
  GTK_RECENT_FILTER_GROUP,
  GTK_RECENT_FILTER_AGE,
}
export enum RegionFlags {
  GTK_REGION_EVEN,
  GTK_REGION_ODD,
  GTK_REGION_FIRST,
  GTK_REGION_LAST,
  GTK_REGION_ONLY,
  GTK_REGION_SORTED,
}
export enum StateFlags {
  GTK_STATE_FLAG_NORMAL,
  GTK_STATE_FLAG_ACTIVE,
  GTK_STATE_FLAG_PRELIGHT,
  GTK_STATE_FLAG_SELECTED,
  GTK_STATE_FLAG_INSENSITIVE,
  GTK_STATE_FLAG_INCONSISTENT,
  GTK_STATE_FLAG_FOCUSED,
  GTK_STATE_FLAG_BACKDROP,
  GTK_STATE_FLAG_DIR_LTR,
  GTK_STATE_FLAG_DIR_RTL,
  GTK_STATE_FLAG_LINK,
  GTK_STATE_FLAG_VISITED,
  GTK_STATE_FLAG_CHECKED,
  GTK_STATE_FLAG_DROP_ACTIVE,
}
export enum StyleContextPrintFlags {
  GTK_STYLE_CONTEXT_PRINT_NONE,
  GTK_STYLE_CONTEXT_PRINT_RECURSE,
  GTK_STYLE_CONTEXT_PRINT_SHOW_STYLE,
}
export enum TargetFlags {
  GTK_TARGET_SAME_APP,
  GTK_TARGET_SAME_WIDGET,
  GTK_TARGET_OTHER_APP,
  GTK_TARGET_OTHER_WIDGET,
}
export enum TextSearchFlags {
  GTK_TEXT_SEARCH_VISIBLE_ONLY,
  GTK_TEXT_SEARCH_TEXT_ONLY,
  GTK_TEXT_SEARCH_CASE_INSENSITIVE,
}
export enum ToolPaletteDragTargets {
  GTK_TOOL_PALETTE_DRAG_ITEMS,
  GTK_TOOL_PALETTE_DRAG_GROUPS,
}
export enum TreeModelFlags {
  GTK_TREE_MODEL_ITERS_PERSIST,
  GTK_TREE_MODEL_LIST_ONLY,
}
export enum UIManagerItemType {
  GTK_UI_MANAGER_AUTO,
  GTK_UI_MANAGER_MENUBAR,
  GTK_UI_MANAGER_MENU,
  GTK_UI_MANAGER_TOOLBAR,
  GTK_UI_MANAGER_PLACEHOLDER,
  GTK_UI_MANAGER_POPUP,
  GTK_UI_MANAGER_MENUITEM,
  GTK_UI_MANAGER_TOOLITEM,
  GTK_UI_MANAGER_SEPARATOR,
  GTK_UI_MANAGER_ACCELERATOR,
  GTK_UI_MANAGER_POPUP_WITH_ACCELS,
}
export type Allocation = Gdk.Rectangle;
export type Stock = string;
export interface Actionable {
  'action-name': string;
  'action-target': GLib.Variant;
  get_action_name(...args: any[]): any;
  get_action_target_value(...args: any[]): any;
  set_action_name(...args: any[]): any;
  set_action_target(format_string: string, ...args: any[]): void;
  set_action_target_value(...args: any[]): any;
  set_detailed_action_name(detailed_action_name: string): void;
}
export interface Activatable {
  'related-action': Action;
  'use-action-appearance': boolean;
  do_set_related_action(action: Action): void;
  get_related_action(): Action;
  get_use_action_appearance(): boolean;
  set_related_action(action: Action): void;
  set_use_action_appearance(use_appearance: boolean): void;
  sync_action_properties(...args: any[]): any;
}
export interface AppChooser {
  'content-type': string;
  get_app_info(): Gio.AppInfo | null;
  get_content_type(): string;
  refresh(): void;
}
export interface Buildable {
  add_child(...args: any[]): any;
  construct_child(...args: any[]): any;
  custom_finished(...args: any[]): any;
  custom_tag_end(...args: any[]): any;
  custom_tag_start(...args: any[]): any;
  get_internal_child(...args: any[]): any;
  get_name(...args: any[]): any;
  parser_finished(...args: any[]): any;
  set_buildable_property(...args: any[]): any;
  set_name(...args: any[]): any;
}
export interface CellAccessibleParent {
  activate(...args: any[]): any;
  edit(...args: any[]): any;
  expand_collapse(...args: any[]): any;
  get_cell_area(...args: any[]): any;
  get_cell_extents(...args: any[]): any;
  get_cell_position(...args: any[]): any;
  get_child_index(...args: any[]): any;
  get_column_header_cells(...args: any[]): any;
  get_renderer_state(...args: any[]): any;
  get_row_header_cells(...args: any[]): any;
  grab_focus(...args: any[]): any;
  update_relationset(...args: any[]): any;
}
export interface CellEditable {
  'editing-canceled': boolean;
  editing_done(...args: any[]): any;
  remove_widget(...args: any[]): any;
  start_editing(...args: any[]): any;
}
export interface CellLayout {
  add_attribute(...args: any[]): any;
  clear(...args: any[]): any;
  clear_attributes(...args: any[]): any;
  get_area(...args: any[]): any;
  get_cells(...args: any[]): any;
  pack_end(...args: any[]): any;
  pack_start(...args: any[]): any;
  reorder(...args: any[]): any;
  set_attributes(cell: CellRenderer, ...args: any[]): void;
  set_cell_data_func(...args: any[]): any;
}
export interface ColorChooser {
  rgba: Gdk.RGBA;
  'use-alpha': boolean;
  add_palette(...args: any[]): any;
  get_rgba(...args: any[]): any;
  get_use_alpha(): boolean;
  set_rgba(...args: any[]): any;
  set_use_alpha(use_alpha: boolean): void;
}
export interface Editable {
  copy_clipboard(): void;
  cut_clipboard(): void;
  delete_selection(): void;
  delete_text(...args: any[]): any;
  get_chars(...args: any[]): any;
  get_editable(): boolean;
  get_position(...args: any[]): any;
  get_selection_bounds(...args: any[]): any;
  insert_text(...args: any[]): any;
  paste_clipboard(): void;
  select_region(start_pos: number, end_pos: number): void;
  set_editable(is_editable: boolean): void;
  set_position(...args: any[]): any;
}
export interface FileChooser {
  action: FileChooserAction;
  'create-folders': boolean;
  'do-overwrite-confirmation': boolean;
  'extra-widget': Widget;
  filter: FileFilter;
  'local-only': boolean;
  'preview-widget': Widget;
  'preview-widget-active': boolean;
  'select-multiple': boolean;
  'show-hidden': boolean;
  'use-preview-label': boolean;
  add_choice(id: string, label: string, options: string[] | null, option_labels: string[] | null): void;
  add_filter(filter: FileFilter): void;
  add_shortcut_folder(folder: any): boolean;
  add_shortcut_folder_uri(uri: string): boolean;
  get_action(): FileChooserAction;
  get_choice(id: string): string;
  get_create_folders(): boolean;
  get_current_folder(): any | null;
  get_current_folder_file(): Gio.File;
  get_current_folder_uri(): string | null;
  get_current_name(): string;
  get_do_overwrite_confirmation(): boolean;
  get_extra_widget(): Widget | null;
  get_file(): Gio.File;
  get_filename(): any | null;
  get_filenames(): GLib.SList;
  get_files(): GLib.SList;
  get_filter(): FileFilter | null;
  get_local_only(): boolean;
  get_preview_file(): Gio.File | null;
  get_preview_filename(): any | null;
  get_preview_uri(): string | null;
  get_preview_widget(): Widget | null;
  get_preview_widget_active(): boolean;
  get_select_multiple(): boolean;
  get_show_hidden(): boolean;
  get_uri(): string | null;
  get_uris(): GLib.SList;
  get_use_preview_label(): boolean;
  list_filters(): GLib.SList;
  list_shortcut_folder_uris(): GLib.SList | null;
  list_shortcut_folders(): GLib.SList | null;
  remove_choice(id: string): void;
  remove_filter(filter: FileFilter): void;
  remove_shortcut_folder(folder: any): boolean;
  remove_shortcut_folder_uri(uri: string): boolean;
  select_all(): void;
  select_file(file: Gio.File): boolean;
  select_filename(filename: any): boolean;
  select_uri(uri: string): boolean;
  set_action(action: FileChooserAction): void;
  set_choice(id: string, option: string): void;
  set_create_folders(create_folders: boolean): void;
  set_current_folder(filename: any): boolean;
  set_current_folder_file(file: Gio.File): boolean;
  set_current_folder_uri(uri: string): boolean;
  set_current_name(name: any): void;
  set_do_overwrite_confirmation(do_overwrite_confirmation: boolean): void;
  set_extra_widget(extra_widget: Widget): void;
  set_file(file: Gio.File): boolean;
  set_filename(filename: any): boolean;
  set_filter(filter: FileFilter): void;
  set_local_only(local_only: boolean): void;
  set_preview_widget(preview_widget: Widget): void;
  set_preview_widget_active(active: boolean): void;
  set_select_multiple(select_multiple: boolean): void;
  set_show_hidden(show_hidden: boolean): void;
  set_uri(uri: string): boolean;
  set_use_preview_label(use_label: boolean): void;
  unselect_all(): void;
  unselect_file(file: Gio.File): void;
  unselect_filename(filename: any): void;
  unselect_uri(uri: string): void;
}
export interface FontChooser {
  font: string;
  'font-desc': Pango.FontDescription;
  'font-features': string;
  language: string;
  level: FontChooserLevel;
  'preview-text': string;
  'show-preview-entry': boolean;
  get_font(): string | null;
  get_font_desc(): Pango.FontDescription | null;
  get_font_face(...args: any[]): any;
  get_font_family(...args: any[]): any;
  get_font_features(): string;
  get_font_map(...args: any[]): any;
  get_font_size(...args: any[]): any;
  get_language(): string;
  get_level(): FontChooserLevel;
  get_preview_text(): string;
  get_show_preview_entry(): boolean;
  set_filter_func(...args: any[]): any;
  set_font(fontname: string): void;
  set_font_desc(font_desc: Pango.FontDescription): void;
  set_font_map(...args: any[]): any;
  set_language(language: string): void;
  set_level(level: FontChooserLevel): void;
  set_preview_text(text: string): void;
  set_show_preview_entry(show_preview_entry: boolean): void;
}
export interface Orientable {
  orientation: Orientation;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export interface PrintOperationPreview {
  end_preview(...args: any[]): any;
  is_selected(...args: any[]): any;
  render_page(...args: any[]): any;
}
export interface RecentChooser {
  filter: RecentFilter;
  limit: number;
  'local-only': boolean;
  'recent-manager': RecentManager;
  'select-multiple': boolean;
  'show-icons': boolean;
  'show-not-found': boolean;
  'show-private': boolean;
  'show-tips': boolean;
  'sort-type': RecentSortType;
  add_filter(...args: any[]): any;
  get_current_item(): RecentInfo;
  get_current_uri(...args: any[]): any;
  get_filter(): RecentFilter;
  get_items(...args: any[]): any;
  get_limit(): number;
  get_local_only(): boolean;
  get_select_multiple(): boolean;
  get_show_icons(): boolean;
  get_show_not_found(): boolean;
  get_show_private(): boolean;
  get_show_tips(): boolean;
  get_sort_type(): RecentSortType;
  get_uris(length?: number): string[];
  list_filters(...args: any[]): any;
  remove_filter(...args: any[]): any;
  select_all(...args: any[]): any;
  select_uri(...args: any[]): any;
  set_current_uri(...args: any[]): any;
  set_filter(filter: RecentFilter | null): void;
  set_limit(limit: number): void;
  set_local_only(local_only: boolean): void;
  set_select_multiple(select_multiple: boolean): void;
  set_show_icons(show_icons: boolean): void;
  set_show_not_found(show_not_found: boolean): void;
  set_show_private(show_private: boolean): void;
  set_show_tips(show_tips: boolean): void;
  set_sort_func(...args: any[]): any;
  set_sort_type(sort_type: RecentSortType): void;
  unselect_all(...args: any[]): any;
  unselect_uri(...args: any[]): any;
}
export interface Scrollable {
  hadjustment: Adjustment;
  'hscroll-policy': ScrollablePolicy;
  vadjustment: Adjustment;
  'vscroll-policy': ScrollablePolicy;
  get_border(...args: any[]): any;
  get_hadjustment(): Adjustment;
  get_hscroll_policy(): ScrollablePolicy;
  get_vadjustment(): Adjustment;
  get_vscroll_policy(): ScrollablePolicy;
  set_hadjustment(hadjustment: Adjustment | null): void;
  set_hscroll_policy(policy: ScrollablePolicy): void;
  set_vadjustment(vadjustment: Adjustment | null): void;
  set_vscroll_policy(policy: ScrollablePolicy): void;
}
export interface StyleProvider {
  get_icon_factory(...args: any[]): any;
  get_style(...args: any[]): any;
  get_style_property(...args: any[]): any;
}
export interface ToolShell {
  get_ellipsize_mode(...args: any[]): any;
  get_icon_size(...args: any[]): any;
  get_orientation(...args: any[]): any;
  get_relief_style(...args: any[]): any;
  get_style(...args: any[]): any;
  get_text_alignment(...args: any[]): any;
  get_text_orientation(...args: any[]): any;
  get_text_size_group(...args: any[]): any;
  rebuild_menu(...args: any[]): any;
}
export interface TreeDragDest {
  drag_data_received(...args: any[]): any;
  row_drop_possible(...args: any[]): any;
}
export interface TreeDragSource {
  drag_data_delete(...args: any[]): any;
  drag_data_get(...args: any[]): any;
  row_draggable(...args: any[]): any;
}
export interface TreeModel {
  filter_new(root: TreePath | null): any;
  foreach(func: TreeModelForeachFunc, user_data: object | null): void;
  get(iter: TreeIter, ...args: any[]): void;
  get_column_type(...args: any[]): any;
  get_flags(...args: any[]): any;
  get_iter(...args: any[]): any;
  get_iter_first(iter: TreeIter): boolean;
  get_iter_from_string(iter: TreeIter, path_string: string): boolean;
  get_n_columns(...args: any[]): any;
  get_path(...args: any[]): any;
  get_string_from_iter(iter: TreeIter): string;
  get_valist(iter: TreeIter, var_args: any): void;
  get_value(...args: any[]): any;
  iter_children(...args: any[]): any;
  iter_has_child(...args: any[]): any;
  iter_n_children(...args: any[]): any;
  iter_next(...args: any[]): any;
  iter_nth_child(...args: any[]): any;
  iter_parent(...args: any[]): any;
  iter_previous(...args: any[]): any;
  ref_node(...args: any[]): any;
  row_changed(...args: any[]): any;
  row_deleted(...args: any[]): any;
  row_has_child_toggled(...args: any[]): any;
  row_inserted(...args: any[]): any;
  rows_reordered(...args: any[]): any;
  rows_reordered_with_length(path: TreePath, iter: TreeIter | null, new_order: number[], length: number): void;
  sort_new_with_model(): any;
  unref_node(...args: any[]): any;
}
export interface TreeSortable {
  get_sort_column_id(...args: any[]): any;
  has_default_sort_func(...args: any[]): any;
  set_default_sort_func(...args: any[]): any;
  set_sort_column_id(...args: any[]): any;
  set_sort_func(...args: any[]): any;
  sort_column_changed(...args: any[]): any;
}
export class AboutDialog extends Dialog {
  constructor();
  artists: string[];
  authors: string[];
  comments: string;
  copyright: string;
  documenters: string[];
  license: string;
  'license-type': License;
  logo: GdkPixbuf.Pixbuf;
  'logo-icon-name': string;
  'program-name': string;
  'translator-credits': string;
  version: string;
  website: string;
  'website-label': string;
  'wrap-license': boolean;
  static parent_instance: Dialog;
  static priv: any;
  add_credit_section(section_name: string, people: string[]): void;
  get_artists(): string[];
  get_authors(): string[];
  get_comments(): string;
  get_copyright(): string;
  get_documenters(): string[];
  get_license(): string;
  get_license_type(): License;
  get_logo(): GdkPixbuf.Pixbuf;
  get_logo_icon_name(): string;
  get_program_name(): string;
  get_translator_credits(): string;
  get_version(): string;
  get_website(): string;
  get_website_label(): string;
  get_wrap_license(): boolean;
  set_artists(artists: string[]): void;
  set_authors(authors: string[]): void;
  set_comments(comments: string | null): void;
  set_copyright(copyright: string | null): void;
  set_documenters(documenters: string[]): void;
  set_license(license: string | null): void;
  set_license_type(license_type: License): void;
  set_logo(logo: GdkPixbuf.Pixbuf | null): void;
  set_logo_icon_name(icon_name: string | null): void;
  set_program_name(name: string): void;
  set_translator_credits(translator_credits: string | null): void;
  set_version(version: string | null): void;
  set_website(website: string | null): void;
  set_website_label(website_label: string): void;
  set_wrap_license(wrap_license: boolean): void;
  activate_link(uri: string): boolean;
}
export class AccelGroup extends GObject.Object {
  constructor();
  'is-locked': boolean;
  'modifier-mask': Gdk.ModifierType;
  static parent: GObject.Object;
  static priv: AccelGroupPrivate;
  activate(accel_quark: GLib.Quark, acceleratable: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
  connect(accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags, closure: GObject.Closure): void;
  connect_by_path(accel_path: string, closure: GObject.Closure): void;
  disconnect(closure: GObject.Closure | null): boolean;
  disconnect_key(accel_key: number, accel_mods: Gdk.ModifierType): boolean;
  find(find_func: AccelGroupFindFunc, data: object | null): AccelKey;
  get_is_locked(): boolean;
  get_modifier_mask(): Gdk.ModifierType;
  lock(): void;
  query(accel_key: number, accel_mods: Gdk.ModifierType, n_entries?: number): AccelGroupEntry[] | null;
  unlock(): void;
  accel_changed(keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure): void;
  static from_accel_closure(closure: GObject.Closure): AccelGroup | null;
}
export class AccelLabel extends Label {
  constructor(string: string);
  'accel-closure': GObject.Closure;
  'accel-widget': Widget;
  static label: any;
  static priv: any;
  get_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType): void;
  get_accel_widget(): Widget | null;
  get_accel_width(): number;
  refetch(): boolean;
  set_accel(accelerator_key: number, accelerator_mods: Gdk.ModifierType): void;
  set_accel_closure(accel_closure: GObject.Closure | null): void;
  set_accel_widget(accel_widget: Widget | null): void;
}
export class AccelMap extends GObject.Object {
  static add_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType): void;
  static add_filter(filter_pattern: string): void;
  static change_entry(accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, replace: boolean): boolean;
  static foreach(data: object | null, foreach_func: AccelMapForeach): void;
  static foreach_unfiltered(data: object | null, foreach_func: AccelMapForeach): void;
  static get(): AccelMap;
  static load(file_name: any): void;
  static load_fd(fd: number): void;
  static load_scanner(scanner: GLib.Scanner): void;
  static lock_path(accel_path: string): void;
  static lookup_entry(accel_path: string, key?: AccelKey): boolean;
  static save(file_name: any): void;
  static save_fd(fd: number): void;
  static unlock_path(accel_path: string): void;
}
export class Accessible extends Atk.Object {
  widget: Widget;
  static parent: Atk.Object;
  static priv: AccessiblePrivate;
  connect_widget_destroyed(...args: any[]): any;
  get_widget(): Widget | null;
  set_widget(widget: Widget | null): void;
  connect_widget_destroyed(...args: any[]): any;
  widget_set(): void;
  widget_unset(): void;
}
export class Action extends GObject.Object {
  constructor(name: string, label: string | null, tooltip: string | null, stock_id: string | null);
  'action-group': ActionGroup;
  'always-show-image': boolean;
  gicon: Gio.Icon;
  'hide-if-empty': boolean;
  'icon-name': string;
  'is-important': boolean;
  label: string;
  name: string;
  sensitive: boolean;
  'short-label': string;
  'stock-id': string;
  tooltip: string;
  visible: boolean;
  'visible-horizontal': boolean;
  'visible-overflown': boolean;
  'visible-vertical': boolean;
  static object: GObject.Object;
  static private_data: ActionPrivate;
  activate(...args: any[]): any;
  block_activate(): void;
  connect_accelerator(): void;
  create_icon(icon_size: number): Widget;
  create_menu(...args: any[]): any;
  create_menu_item(...args: any[]): any;
  create_tool_item(...args: any[]): any;
  disconnect_accelerator(): void;
  get_accel_closure(): GObject.Closure;
  get_accel_path(): string;
  get_always_show_image(): boolean;
  get_gicon(): Gio.Icon;
  get_icon_name(): string;
  get_is_important(): boolean;
  get_label(): string;
  get_name(): string;
  get_proxies(): GLib.SList;
  get_sensitive(): boolean;
  get_short_label(): string;
  get_stock_id(): string;
  get_tooltip(): string;
  get_visible(): boolean;
  get_visible_horizontal(): boolean;
  get_visible_vertical(): boolean;
  is_sensitive(): boolean;
  is_visible(): boolean;
  set_accel_group(accel_group: AccelGroup | null): void;
  set_accel_path(accel_path: string): void;
  set_always_show_image(always_show: boolean): void;
  set_gicon(icon: Gio.Icon): void;
  set_icon_name(icon_name: string): void;
  set_is_important(is_important: boolean): void;
  set_label(label: string): void;
  set_sensitive(sensitive: boolean): void;
  set_short_label(short_label: string): void;
  set_stock_id(stock_id: string): void;
  set_tooltip(tooltip: string): void;
  set_visible(visible: boolean): void;
  set_visible_horizontal(visible_horizontal: boolean): void;
  set_visible_vertical(visible_vertical: boolean): void;
  unblock_activate(): void;
  activate(...args: any[]): any;
  connect_proxy(proxy: Widget): void;
  create_menu(...args: any[]): any;
  create_menu_item(...args: any[]): any;
  create_tool_item(...args: any[]): any;
  disconnect_proxy(proxy: Widget): void;
}
export class ActionBar extends Bin {
  constructor();
  static bin: Bin;
  get_center_widget(): Widget | null;
  pack_end(child: Widget): void;
  pack_start(child: Widget): void;
  set_center_widget(center_widget: Widget | null): void;
}
export class ActionGroup extends GObject.Object {
  constructor(name: string);
  'accel-group': AccelGroup;
  name: string;
  sensitive: boolean;
  visible: boolean;
  static parent: GObject.Object;
  static priv: ActionGroupPrivate;
  add_action(action: Action): void;
  add_action_with_accel(action: Action, accelerator: string | null): void;
  add_actions(entries: ActionEntry[], n_entries: number, user_data: object | null): void;
  add_actions_full(entries: ActionEntry[], n_entries: number, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
  add_radio_actions(entries: RadioActionEntry[], n_entries: number, value: number, on_change: GObject.Callback, user_data: object | null): void;
  add_radio_actions_full(entries: RadioActionEntry[], n_entries: number, value: number, on_change: GObject.Callback, user_data: object | null, destroy: GLib.DestroyNotify): void;
  add_toggle_actions(entries: ToggleActionEntry[], n_entries: number, user_data: object | null): void;
  add_toggle_actions_full(entries: ToggleActionEntry[], n_entries: number, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
  get_accel_group(): AccelGroup;
  get_action(...args: any[]): any;
  get_name(): string;
  get_sensitive(): boolean;
  get_visible(): boolean;
  list_actions(): GLib.List;
  remove_action(action: Action): void;
  set_accel_group(accel_group: AccelGroup | null): void;
  set_sensitive(sensitive: boolean): void;
  set_translate_func(func: TranslateFunc, data: object | null, notify: GLib.DestroyNotify): void;
  set_translation_domain(domain: string | null): void;
  set_visible(visible: boolean): void;
  translate_string(string: string): string;
  get_action(...args: any[]): any;
}
export class Adjustment extends GObject.InitiallyUnowned {
  constructor(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number);
  lower: number;
  'page-increment': number;
  'page-size': number;
  'step-increment': number;
  upper: number;
  value: number;
  static parent_instance: GObject.InitiallyUnowned;
  static priv: AdjustmentPrivate;
  changed(...args: any[]): any;
  clamp_page(lower: number, upper: number): void;
  configure(value: number, lower: number, upper: number, step_increment: number, page_increment: number, page_size: number): void;
  get_lower(): number;
  get_minimum_increment(): number;
  get_page_increment(): number;
  get_page_size(): number;
  get_step_increment(): number;
  get_upper(): number;
  get_value(): number;
  set_lower(lower: number): void;
  set_page_increment(page_increment: number): void;
  set_page_size(page_size: number): void;
  set_step_increment(step_increment: number): void;
  set_upper(upper: number): void;
  set_value(value: number): void;
  value_changed(...args: any[]): any;
  changed(...args: any[]): any;
  value_changed(...args: any[]): any;
}
export class Alignment extends Bin {
  constructor(xalign: number, yalign: number, xscale: number, yscale: number);
  'bottom-padding': number;
  'left-padding': number;
  'right-padding': number;
  'top-padding': number;
  xalign: number;
  xscale: number;
  yalign: number;
  yscale: number;
  static bin: Bin;
  static priv: any;
  get_padding(padding_top?: number, padding_bottom?: number, padding_left?: number, padding_right?: number): void;
  set(xalign: number, yalign: number, xscale: number, yscale: number): void;
  set_padding(padding_top: number, padding_bottom: number, padding_left: number, padding_right: number): void;
}
export class AppChooserButton extends ComboBox {
  constructor(content_type: string);
  heading: string;
  'show-default-item': boolean;
  'show-dialog-item': boolean;
  static parent: ComboBox;
  static priv: any;
  append_custom_item(name: string, label: string, icon: Gio.Icon): void;
  append_separator(): void;
  get_heading(): string | null;
  get_show_default_item(): boolean;
  get_show_dialog_item(): boolean;
  set_active_custom_item(name: string): void;
  set_heading(heading: string): void;
  set_show_default_item(setting: boolean): void;
  set_show_dialog_item(setting: boolean): void;
  custom_item_activated(item_name: string): void;
}
export class AppChooserDialog extends Dialog {
  constructor(parent: Window | null, flags: DialogFlags, file: Gio.File);
  gfile: Gio.File;
  heading: string;
  static parent: Dialog;
  static priv: any;
  get_heading(): string | null;
  get_widget(): Widget;
  set_heading(heading: string): void;
}
export class AppChooserWidget extends Box {
  constructor(content_type: string);
  'default-text': string;
  'show-all': boolean;
  'show-default': boolean;
  'show-fallback': boolean;
  'show-other': boolean;
  'show-recommended': boolean;
  static parent: Box;
  static priv: any;
  get_default_text(): string;
  get_show_all(): boolean;
  get_show_default(): boolean;
  get_show_fallback(): boolean;
  get_show_other(): boolean;
  get_show_recommended(): boolean;
  set_default_text(text: string): void;
  set_show_all(setting: boolean): void;
  set_show_default(setting: boolean): void;
  set_show_fallback(setting: boolean): void;
  set_show_other(setting: boolean): void;
  set_show_recommended(setting: boolean): void;
  application_activated(app_info: Gio.AppInfo): void;
  application_selected(app_info: Gio.AppInfo): void;
  populate_popup(menu: Menu, app_info: Gio.AppInfo): void;
}
export class Application extends Gio.Application {
  constructor(application_id: string | null, flags: Gio.ApplicationFlags);
  'active-window': Window;
  'app-menu': Gio.MenuModel;
  menubar: Gio.MenuModel;
  'register-session': boolean;
  'screensaver-active': boolean;
  static parent: Gio.Application;
  static priv: ApplicationPrivate;
  add_accelerator(accelerator: string, action_name: string, parameter: GLib.Variant | null): void;
  add_window(window: Window): void;
  get_accels_for_action(detailed_action_name: string): string[];
  get_actions_for_accel(accel: string): string[];
  get_active_window(): Window | null;
  get_app_menu(): Gio.MenuModel | null;
  get_menu_by_id(id: string): Gio.Menu;
  get_menubar(): Gio.MenuModel;
  get_window_by_id(id: number): Window | null;
  get_windows(): GLib.List;
  inhibit(window: Window | null, flags: ApplicationInhibitFlags, reason: string | null): number;
  is_inhibited(flags: ApplicationInhibitFlags): boolean;
  list_action_descriptions(): string[];
  prefers_app_menu(): boolean;
  remove_accelerator(action_name: string, parameter: GLib.Variant | null): void;
  remove_window(window: Window): void;
  set_accels_for_action(detailed_action_name: string, accels: string[]): void;
  set_app_menu(app_menu: Gio.MenuModel | null): void;
  set_menubar(menubar: Gio.MenuModel | null): void;
  uninhibit(cookie: number): void;
  window_added(window: Window): void;
  window_removed(window: Window): void;
}
export class ApplicationWindow extends Window {
  constructor(application: Application);
  'show-menubar': boolean;
  static parent_instance: Window;
  static priv: any;
  get_help_overlay(): ShortcutsWindow | null;
  get_id(): number;
  get_show_menubar(): boolean;
  set_help_overlay(help_overlay: ShortcutsWindow | null): void;
  set_show_menubar(show_menubar: boolean): void;
}
export class Arrow extends Misc {
  constructor(arrow_type: ArrowType, shadow_type: ShadowType);
  'arrow-type': ArrowType;
  'shadow-type': ShadowType;
  static misc: Misc;
  static priv: any;
  set(arrow_type: ArrowType, shadow_type: ShadowType): void;
}
export class ArrowAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class AspectFrame extends Frame {
  constructor(label: string | null, xalign: number, yalign: number, ratio: number, obey_child: boolean);
  'obey-child': boolean;
  ratio: number;
  xalign: number;
  yalign: number;
  static frame: Frame;
  static priv: any;
  set(xalign: number, yalign: number, ratio: number, obey_child: boolean): void;
}
export class Assistant extends Window {
  constructor();
  'use-header-bar': number;
  static parent: Window;
  static priv: any;
  add_action_widget(child: Widget): void;
  append_page(page: Widget): number;
  commit(): void;
  get_current_page(): number;
  get_n_pages(): number;
  get_nth_page(page_num: number): Widget | null;
  get_page_complete(page: Widget): boolean;
  get_page_has_padding(page: Widget): boolean;
  get_page_header_image(page: Widget): GdkPixbuf.Pixbuf;
  get_page_side_image(page: Widget): GdkPixbuf.Pixbuf;
  get_page_title(page: Widget): string;
  get_page_type(page: Widget): AssistantPageType;
  insert_page(page: Widget, position: number): number;
  next_page(): void;
  prepend_page(page: Widget): number;
  previous_page(): void;
  remove_action_widget(child: Widget): void;
  remove_page(page_num: number): void;
  set_current_page(page_num: number): void;
  set_forward_page_func(page_func: AssistantPageFunc | null, data: object | null, destroy: GLib.DestroyNotify): void;
  set_page_complete(page: Widget, complete: boolean): void;
  set_page_has_padding(page: Widget, has_padding: boolean): void;
  set_page_header_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_page_side_image(page: Widget, pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_page_title(page: Widget, title: string): void;
  set_page_type(page: Widget, type: AssistantPageType): void;
  update_buttons_state(): void;
  apply(): void;
  cancel(): void;
  close(...args: any[]): any;
  prepare(page: Widget): void;
}
export class Bin extends Container {
  static container: Container;
  static priv: any;
  get_child(): Widget | null;
}
export class BooleanCellAccessible extends RendererCellAccessible {
  static parent: any;
  static priv: any;
}
export class Box extends Container {
  constructor(orientation: Orientation, spacing: number);
  'baseline-position': BaselinePosition;
  homogeneous: boolean;
  spacing: number;
  static container: Container;
  static priv: any;
  get_baseline_position(): BaselinePosition;
  get_center_widget(): Widget | null;
  get_homogeneous(): boolean;
  get_spacing(): number;
  pack_end(child: Widget, expand: boolean, fill: boolean, padding: number): void;
  pack_start(child: Widget, expand: boolean, fill: boolean, padding: number): void;
  query_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType): void;
  reorder_child(child: Widget, position: number): void;
  set_baseline_position(position: BaselinePosition): void;
  set_center_widget(widget: Widget | null): void;
  set_child_packing(child: Widget, expand: boolean, fill: boolean, padding: number, pack_type: PackType): void;
  set_homogeneous(homogeneous: boolean): void;
  set_spacing(spacing: number): void;
}
export class Builder extends GObject.Object {
  constructor();
  'translation-domain': string;
  static parent_instance: GObject.Object;
  static priv: BuilderPrivate;
  add_callback_symbol(callback_name: string, callback_symbol: GObject.Callback): void;
  add_callback_symbols(first_callback_name: string, first_callback_symbol: GObject.Callback, ...args: any[]): void;
  add_from_file(filename: string): number;
  add_from_resource(resource_path: string): number;
  add_from_string(buffer: string, length: number): number;
  add_objects_from_file(filename: string, object_ids: string[]): number;
  add_objects_from_resource(resource_path: string, object_ids: string[]): number;
  add_objects_from_string(buffer: string, length: number, object_ids: string[]): number;
  connect_signals(user_data: object | null): void;
  connect_signals_full(func: BuilderConnectFunc, user_data: object | null): void;
  expose_object(name: string, object: GObject.Object): void;
  extend_with_template(widget: Widget, template_type: any, buffer: string, length: number): number;
  get_application(): Application | null;
  get_object(name: string): GObject.Object | null;
  get_objects(): GLib.SList;
  get_translation_domain(): string;
  get_type_from_name(...args: any[]): any;
  lookup_callback_symbol(callback_name: string): GObject.Callback | null;
  set_application(application: Application): void;
  set_translation_domain(domain: string | null): void;
  value_from_string(pspec: GObject.ParamSpec, string: string, value: GObject.Value): boolean;
  value_from_string_type(type: any, string: string, value: GObject.Value): boolean;
  get_type_from_name(...args: any[]): any;
}
export class Button extends Bin {
  constructor();
  'always-show-image': boolean;
  image: Widget;
  'image-position': PositionType;
  label: string;
  relief: ReliefStyle;
  'use-stock': boolean;
  'use-underline': boolean;
  xalign: number;
  yalign: number;
  static bin: Bin;
  static priv: any;
  clicked(...args: any[]): any;
  enter(...args: any[]): any;
  get_alignment(xalign: number, yalign: number): void;
  get_always_show_image(): boolean;
  get_event_window(): Gdk.Window;
  get_focus_on_click(): boolean;
  get_image(): Widget | null;
  get_image_position(): PositionType;
  get_label(): string;
  get_relief(): ReliefStyle;
  get_use_stock(): boolean;
  get_use_underline(): boolean;
  leave(...args: any[]): any;
  pressed(...args: any[]): any;
  released(...args: any[]): any;
  set_alignment(xalign: number, yalign: number): void;
  set_always_show_image(always_show: boolean): void;
  set_focus_on_click(focus_on_click: boolean): void;
  set_image(image: Widget | null): void;
  set_image_position(position: PositionType): void;
  set_label(label: string): void;
  set_relief(relief: ReliefStyle): void;
  set_use_stock(use_stock: boolean): void;
  set_use_underline(use_underline: boolean): void;
  activate(): void;
  clicked(...args: any[]): any;
  enter(...args: any[]): any;
  leave(...args: any[]): any;
  pressed(...args: any[]): any;
  released(...args: any[]): any;
}
export class ButtonAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class ButtonBox extends Box {
  constructor(orientation: Orientation);
  'layout-style': ButtonBoxStyle;
  static box: Box;
  static priv: any;
  get_child_non_homogeneous(child: Widget): boolean;
  get_child_secondary(child: Widget): boolean;
  get_layout(): ButtonBoxStyle;
  set_child_non_homogeneous(child: Widget, non_homogeneous: boolean): void;
  set_child_secondary(child: Widget, is_secondary: boolean): void;
  set_layout(layout_style: ButtonBoxStyle): void;
}
export class Calendar extends Widget {
  constructor();
  day: number;
  'detail-height-rows': number;
  'detail-width-chars': number;
  month: number;
  'no-month-change': boolean;
  'show-day-names': boolean;
  'show-details': boolean;
  'show-heading': boolean;
  'show-week-numbers': boolean;
  year: number;
  static widget: Widget;
  static priv: any;
  clear_marks(): void;
  get_date(year?: number, month?: number, day?: number): void;
  get_day_is_marked(day: number): boolean;
  get_detail_height_rows(): number;
  get_detail_width_chars(): number;
  get_display_options(): CalendarDisplayOptions;
  mark_day(day: number): void;
  select_day(day: number): void;
  select_month(month: number, year: number): void;
  set_detail_func(func: CalendarDetailFunc, data: object | null, destroy: GLib.DestroyNotify): void;
  set_detail_height_rows(rows: number): void;
  set_detail_width_chars(chars: number): void;
  set_display_options(flags: CalendarDisplayOptions): void;
  unmark_day(day: number): void;
  day_selected(): void;
  day_selected_double_click(): void;
  month_changed(): void;
  next_month(): void;
  next_year(): void;
  prev_month(): void;
  prev_year(): void;
}
export class CellAccessible extends Accessible {
  static parent: any;
  static priv: any;
  update_cache(emit_signal: boolean): void;
}
export class CellArea extends GObject.InitiallyUnowned {
  'edit-widget': any;
  'edited-cell': CellRenderer;
  'focus-cell': CellRenderer;
  static parent_instance: GObject.InitiallyUnowned;
  static priv: CellAreaPrivate;
  activate(...args: any[]): any;
  activate_cell(widget: Widget, renderer: CellRenderer, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState): boolean;
  add(...args: any[]): any;
  add_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
  add_with_properties(renderer: CellRenderer, first_prop_name: string, ...args: any[]): void;
  apply_attributes(...args: any[]): any;
  attribute_connect(renderer: CellRenderer, attribute: string, column: number): void;
  attribute_disconnect(renderer: CellRenderer, attribute: string): void;
  attribute_get_column(renderer: CellRenderer, attribute: string): number;
  cell_get(renderer: CellRenderer, first_prop_name: string, ...args: any[]): void;
  cell_get_property(renderer: CellRenderer, property_name: string, value: GObject.Value): void;
  cell_get_valist(renderer: CellRenderer, first_property_name: string, var_args: any): void;
  cell_set(renderer: CellRenderer, first_prop_name: string, ...args: any[]): void;
  cell_set_property(renderer: CellRenderer, property_name: string, value: GObject.Value): void;
  cell_set_valist(renderer: CellRenderer, first_property_name: string, var_args: any): void;
  copy_context(...args: any[]): any;
  create_context(...args: any[]): any;
  event(...args: any[]): any;
  focus(...args: any[]): any;
  foreach(...args: any[]): any;
  foreach_alloc(...args: any[]): any;
  get_cell_allocation(context: CellAreaContext, widget: Widget, renderer: CellRenderer, cell_area: Gdk.Rectangle, allocation: Gdk.Rectangle): void;
  get_cell_at_position(context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, x: number, y: number, alloc_area?: Gdk.Rectangle): CellRenderer;
  get_current_path_string(): string;
  get_edit_widget(): any;
  get_edited_cell(): CellRenderer;
  get_focus_cell(): CellRenderer;
  get_focus_from_sibling(renderer: CellRenderer): CellRenderer | null;
  get_focus_siblings(renderer: CellRenderer): GLib.List;
  get_preferred_height(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  get_request_mode(...args: any[]): any;
  has_renderer(renderer: CellRenderer): boolean;
  inner_cell_area(widget: Widget, cell_area: Gdk.Rectangle, inner_area: Gdk.Rectangle): void;
  is_activatable(...args: any[]): any;
  is_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): boolean;
  remove(...args: any[]): any;
  remove_focus_sibling(renderer: CellRenderer, sibling: CellRenderer): void;
  render(...args: any[]): any;
  request_renderer(renderer: CellRenderer, orientation: Orientation, widget: Widget, for_size: number, minimum_size?: number, natural_size?: number): void;
  set_focus_cell(renderer: CellRenderer): void;
  stop_editing(canceled: boolean): void;
  activate(...args: any[]): any;
  add(...args: any[]): any;
  apply_attributes(...args: any[]): any;
  copy_context(...args: any[]): any;
  create_context(...args: any[]): any;
  event(...args: any[]): any;
  focus(...args: any[]): any;
  foreach(...args: any[]): any;
  foreach_alloc(...args: any[]): any;
  get_cell_property(renderer: CellRenderer, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
  get_preferred_height(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  get_request_mode(...args: any[]): any;
  is_activatable(...args: any[]): any;
  remove(...args: any[]): any;
  render(...args: any[]): any;
  set_cell_property(renderer: CellRenderer, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
}
export class CellAreaBox extends CellArea {
  constructor();
  spacing: number;
  static parent_instance: any;
  static priv: any;
  get_spacing(): number;
  pack_end(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
  pack_start(renderer: CellRenderer, expand: boolean, align: boolean, fixed: boolean): void;
  set_spacing(spacing: number): void;
}
export class CellAreaContext extends GObject.Object {
  area: CellArea;
  'minimum-height': number;
  'minimum-width': number;
  'natural-height': number;
  'natural-width': number;
  static parent_instance: GObject.Object;
  static priv: CellAreaContextPrivate;
  allocate(...args: any[]): any;
  get_allocation(width?: number, height?: number): void;
  get_area(): CellArea;
  get_preferred_height(minimum_height?: number, natural_height?: number): void;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_width(minimum_width?: number, natural_width?: number): void;
  get_preferred_width_for_height(...args: any[]): any;
  push_preferred_height(minimum_height: number, natural_height: number): void;
  push_preferred_width(minimum_width: number, natural_width: number): void;
  reset(...args: any[]): any;
  allocate(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  reset(...args: any[]): any;
}
export class CellRenderer extends GObject.InitiallyUnowned {
  'cell-background': string;
  'cell-background-gdk': Gdk.Color;
  'cell-background-rgba': Gdk.RGBA;
  'cell-background-set': boolean;
  editing: boolean;
  height: number;
  'is-expanded': boolean;
  'is-expander': boolean;
  mode: CellRendererMode;
  sensitive: boolean;
  visible: boolean;
  width: number;
  xalign: number;
  xpad: number;
  yalign: number;
  ypad: number;
  static parent_instance: GObject.InitiallyUnowned;
  static priv: CellRendererPrivate;
  activate(...args: any[]): any;
  get_aligned_area(...args: any[]): any;
  get_alignment(xalign?: number, yalign?: number): void;
  get_fixed_size(width?: number, height?: number): void;
  get_padding(xpad?: number, ypad?: number): void;
  get_preferred_height(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_size(widget: Widget, minimum_size?: Requisition, natural_size?: Requisition): void;
  get_preferred_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  get_request_mode(...args: any[]): any;
  get_sensitive(): boolean;
  get_size(...args: any[]): any;
  get_state(widget: Widget | null, cell_state: CellRendererState): StateFlags;
  get_visible(): boolean;
  is_activatable(): boolean;
  render(...args: any[]): any;
  set_alignment(xalign: number, yalign: number): void;
  set_fixed_size(width: number, height: number): void;
  set_padding(xpad: number, ypad: number): void;
  set_sensitive(sensitive: boolean): void;
  set_visible(visible: boolean): void;
  start_editing(...args: any[]): any;
  stop_editing(canceled: boolean): void;
  activate(...args: any[]): any;
  editing_canceled(): void;
  editing_started(editable: any, path: string): void;
  get_aligned_area(...args: any[]): any;
  get_preferred_height(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  get_request_mode(...args: any[]): any;
  get_size(...args: any[]): any;
  render(...args: any[]): any;
  start_editing(...args: any[]): any;
}
export class CellRendererAccel extends CellRendererText {
  constructor();
  'accel-key': number;
  'accel-mode': CellRendererAccelMode;
  'accel-mods': Gdk.ModifierType;
  keycode: number;
  static parent: any;
  static priv: any;
  accel_cleared(path_string: string): void;
  accel_edited(path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number): void;
}
export class CellRendererCombo extends CellRendererText {
  constructor();
  'has-entry': boolean;
  model: any;
  'text-column': number;
  static parent: any;
  static priv: any;
}
export class CellRendererPixbuf extends CellRenderer {
  constructor();
  'follow-state': boolean;
  gicon: Gio.Icon;
  'icon-name': string;
  pixbuf: GdkPixbuf.Pixbuf;
  'pixbuf-expander-closed': GdkPixbuf.Pixbuf;
  'pixbuf-expander-open': GdkPixbuf.Pixbuf;
  'stock-detail': string;
  'stock-id': string;
  'stock-size': number;
  surface: cairo.Surface;
  static parent: CellRenderer;
  static priv: any;
}
export class CellRendererProgress extends CellRenderer {
  constructor();
  inverted: boolean;
  pulse: number;
  text: string;
  'text-xalign': number;
  'text-yalign': number;
  value: number;
  static parent_instance: any;
  static priv: any;
}
export class CellRendererSpin extends CellRendererText {
  constructor();
  adjustment: Adjustment;
  'climb-rate': number;
  digits: number;
  static parent: any;
  static priv: any;
}
export class CellRendererSpinner extends CellRenderer {
  constructor();
  active: boolean;
  pulse: number;
  size: IconSize;
  static parent: CellRenderer;
  static priv: any;
}
export class CellRendererText extends CellRenderer {
  constructor();
  'align-set': boolean;
  alignment: Pango.Alignment;
  attributes: Pango.AttrList;
  background: string;
  'background-gdk': Gdk.Color;
  'background-rgba': Gdk.RGBA;
  'background-set': boolean;
  editable: boolean;
  'editable-set': boolean;
  ellipsize: Pango.EllipsizeMode;
  'ellipsize-set': boolean;
  family: string;
  'family-set': boolean;
  font: string;
  'font-desc': Pango.FontDescription;
  foreground: string;
  'foreground-gdk': Gdk.Color;
  'foreground-rgba': Gdk.RGBA;
  'foreground-set': boolean;
  language: string;
  'language-set': boolean;
  markup: string;
  'max-width-chars': number;
  'placeholder-text': string;
  rise: number;
  'rise-set': boolean;
  scale: number;
  'scale-set': boolean;
  'single-paragraph-mode': boolean;
  size: number;
  'size-points': number;
  'size-set': boolean;
  stretch: Pango.Stretch;
  'stretch-set': boolean;
  strikethrough: boolean;
  'strikethrough-set': boolean;
  style: Pango.Style;
  'style-set': boolean;
  text: string;
  underline: Pango.Underline;
  'underline-set': boolean;
  variant: Pango.Variant;
  'variant-set': boolean;
  weight: number;
  'weight-set': boolean;
  'width-chars': number;
  'wrap-mode': Pango.WrapMode;
  'wrap-width': number;
  static parent: CellRenderer;
  static priv: any;
  set_fixed_height_from_font(number_of_rows: number): void;
  edited(path: string, new_text: string): void;
}
export class CellRendererToggle extends CellRenderer {
  constructor();
  activatable: boolean;
  active: boolean;
  inconsistent: boolean;
  'indicator-size': number;
  radio: boolean;
  static parent: CellRenderer;
  static priv: any;
  get_activatable(): boolean;
  get_active(): boolean;
  get_radio(): boolean;
  set_activatable(setting: boolean): void;
  set_active(setting: boolean): void;
  set_radio(radio: boolean): void;
  toggled(path: string): void;
}
export class CellView extends Widget {
  constructor();
  background: string;
  'background-gdk': Gdk.Color;
  'background-rgba': Gdk.RGBA;
  'background-set': boolean;
  'cell-area': CellArea;
  'cell-area-context': CellAreaContext;
  'draw-sensitive': boolean;
  'fit-model': boolean;
  model: any;
  static parent_instance: any;
  static priv: any;
  get_displayed_row(): TreePath | null;
  get_draw_sensitive(): boolean;
  get_fit_model(): boolean;
  get_model(): any | null;
  get_size_of_row(path: TreePath, requisition: Requisition): boolean;
  set_background_color(color: Gdk.Color): void;
  set_background_rgba(rgba: Gdk.RGBA): void;
  set_displayed_row(path: TreePath | null): void;
  set_draw_sensitive(draw_sensitive: boolean): void;
  set_fit_model(fit_model: boolean): void;
  set_model(model: any | null): void;
}
export class CheckButton extends ToggleButton {
  constructor();
  static toggle_button: ToggleButton;
  draw_indicator(cr: cairo.Context): void;
}
export class CheckMenuItem extends MenuItem {
  constructor();
  active: boolean;
  'draw-as-radio': boolean;
  inconsistent: boolean;
  static menu_item: MenuItem;
  static priv: any;
  get_active(): boolean;
  get_draw_as_radio(): boolean;
  get_inconsistent(): boolean;
  set_active(is_active: boolean): void;
  set_draw_as_radio(draw_as_radio: boolean): void;
  set_inconsistent(setting: boolean): void;
  toggled(...args: any[]): any;
  draw_indicator(cr: cairo.Context): void;
  toggled(...args: any[]): any;
}
export class CheckMenuItemAccessible extends MenuItemAccessible {
  static parent: any;
  static priv: any;
}
export class Clipboard extends GObject.Object {
  clear(): void;
  get_display(): Gdk.Display;
  get_owner(): GObject.Object | null;
  get_selection(): Gdk.Atom;
  request_contents(target: Gdk.Atom, callback: ClipboardReceivedFunc, user_data: object | null): void;
  request_image(callback: ClipboardImageReceivedFunc, user_data: object | null): void;
  request_rich_text(buffer: TextBuffer, callback: ClipboardRichTextReceivedFunc, user_data: object | null): void;
  request_targets(callback: ClipboardTargetsReceivedFunc, user_data: object | null): void;
  request_text(callback: ClipboardTextReceivedFunc, user_data: object | null): void;
  request_uris(callback: ClipboardURIReceivedFunc, user_data: object | null): void;
  set_can_store(targets: TargetEntry[] | null, n_targets: number): void;
  set_image(pixbuf: GdkPixbuf.Pixbuf): void;
  set_text(text: string, len: number): void;
  set_with_data(targets: TargetEntry[], n_targets: number, get_func: ClipboardGetFunc, clear_func: ClipboardClearFunc, user_data: object | null): boolean;
  set_with_owner(targets: TargetEntry[], n_targets: number, get_func: ClipboardGetFunc, clear_func: ClipboardClearFunc, owner: GObject.Object): boolean;
  store(): void;
  wait_for_contents(target: Gdk.Atom): SelectionData | null;
  wait_for_image(): GdkPixbuf.Pixbuf | null;
  wait_for_rich_text(buffer: TextBuffer, format: Gdk.Atom, length: number): number[] | null;
  wait_for_targets(targets: Gdk.Atom[], n_targets: number): boolean;
  wait_for_text(): string | null;
  wait_for_uris(): string[] | null;
  wait_is_image_available(): boolean;
  wait_is_rich_text_available(buffer: TextBuffer): boolean;
  wait_is_target_available(target: Gdk.Atom): boolean;
  wait_is_text_available(): boolean;
  wait_is_uris_available(): boolean;
  static get(selection: Gdk.Atom): Clipboard;
  static get_default(display: Gdk.Display): Clipboard;
  static get_for_display(display: Gdk.Display, selection: Gdk.Atom): Clipboard;
}
export class ColorButton extends Button {
  constructor();
  alpha: number;
  color: Gdk.Color;
  rgba: Gdk.RGBA;
  'show-editor': boolean;
  title: string;
  'use-alpha': boolean;
  static button: Button;
  static priv: any;
  get_alpha(): number;
  get_color(color: Gdk.Color): void;
  get_rgba(rgba: Gdk.RGBA): void;
  get_title(): string;
  get_use_alpha(): boolean;
  set_alpha(alpha: number): void;
  set_color(color: Gdk.Color): void;
  set_rgba(rgba: Gdk.RGBA): void;
  set_title(title: string): void;
  set_use_alpha(use_alpha: boolean): void;
  color_set(): void;
}
export class ColorChooserDialog extends Dialog {
  constructor(title: string | null, parent: Window | null);
  'show-editor': boolean;
  static parent_instance: Dialog;
  static priv: any;
}
export class ColorChooserWidget extends Box {
  constructor();
  'show-editor': boolean;
  static parent_instance: Box;
  static priv: any;
}
export class ColorSelection extends Box {
  constructor();
  'current-alpha': number;
  'current-color': Gdk.Color;
  'current-rgba': Gdk.RGBA;
  'has-opacity-control': boolean;
  'has-palette': boolean;
  static parent_instance: Box;
  static private_data: ColorSelectionPrivate;
  get_current_alpha(): number;
  get_current_color(color: Gdk.Color): void;
  get_current_rgba(rgba: Gdk.RGBA): void;
  get_has_opacity_control(): boolean;
  get_has_palette(): boolean;
  get_previous_alpha(): number;
  get_previous_color(color: Gdk.Color): void;
  get_previous_rgba(rgba: Gdk.RGBA): void;
  is_adjusting(): boolean;
  set_current_alpha(alpha: number): void;
  set_current_color(color: Gdk.Color): void;
  set_current_rgba(rgba: Gdk.RGBA): void;
  set_has_opacity_control(has_opacity: boolean): void;
  set_has_palette(has_palette: boolean): void;
  set_previous_alpha(alpha: number): void;
  set_previous_color(color: Gdk.Color): void;
  set_previous_rgba(rgba: Gdk.RGBA): void;
  color_changed(): void;
  static palette_from_string(str: string, colors: Gdk.Color[], n_colors: number): boolean;
  static palette_to_string(colors: Gdk.Color[], n_colors: number): string;
  static set_change_palette_with_screen_hook(func: ColorSelectionChangePaletteWithScreenFunc): ColorSelectionChangePaletteWithScreenFunc;
}
export class ColorSelectionDialog extends Dialog {
  constructor(title: string);
  'cancel-button': Widget;
  'color-selection': Widget;
  'help-button': Widget;
  'ok-button': Widget;
  static parent_instance: Dialog;
  static priv: any;
  get_color_selection(): Widget;
}
export class ComboBox extends Bin {
  constructor();
  active: number;
  'active-id': string;
  'add-tearoffs': boolean;
  'button-sensitivity': SensitivityType;
  'cell-area': CellArea;
  'column-span-column': number;
  'entry-text-column': number;
  'has-entry': boolean;
  'has-frame': boolean;
  'id-column': number;
  model: any;
  'popup-fixed-width': boolean;
  'popup-shown': boolean;
  'row-span-column': number;
  'tearoff-title': string;
  'wrap-width': number;
  static parent_instance: Bin;
  static priv: any;
  get_active(): number;
  get_active_id(): string | null;
  get_active_iter(iter: TreeIter): boolean;
  get_add_tearoffs(): boolean;
  get_button_sensitivity(): SensitivityType;
  get_column_span_column(): number;
  get_entry_text_column(): number;
  get_focus_on_click(): boolean;
  get_has_entry(): boolean;
  get_id_column(): number;
  get_model(): any;
  get_popup_accessible(): Atk.Object;
  get_popup_fixed_width(): boolean;
  get_row_separator_func(): TreeViewRowSeparatorFunc;
  get_row_span_column(): number;
  get_title(): string;
  get_wrap_width(): number;
  popdown(): void;
  popup(): void;
  popup_for_device(device: Gdk.Device): void;
  set_active(index_: number): void;
  set_active_id(active_id: string | null): boolean;
  set_active_iter(iter: TreeIter | null): void;
  set_add_tearoffs(add_tearoffs: boolean): void;
  set_button_sensitivity(sensitivity: SensitivityType): void;
  set_column_span_column(column_span: number): void;
  set_entry_text_column(text_column: number): void;
  set_focus_on_click(focus_on_click: boolean): void;
  set_id_column(id_column: number): void;
  set_model(model: any | null): void;
  set_popup_fixed_width(fixed: boolean): void;
  set_row_separator_func(func: TreeViewRowSeparatorFunc, data: object | null, destroy: GLib.DestroyNotify | null): void;
  set_row_span_column(row_span: number): void;
  set_title(title: string): void;
  set_wrap_width(width: number): void;
  changed(): void;
  format_entry_text(path: string): string;
}
export class ComboBoxAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class ComboBoxText extends ComboBox {
  constructor();
  static parent_instance: any;
  static priv: any;
  append(id: string | null, text: string): void;
  append_text(text: string): void;
  get_active_text(): string;
  insert(position: number, id: string | null, text: string): void;
  insert_text(position: number, text: string): void;
  prepend(id: string | null, text: string): void;
  prepend_text(text: string): void;
  remove(position: number): void;
  remove_all(): void;
}
export class Container extends Widget {
  'border-width': number;
  child: Widget;
  'resize-mode': ResizeMode;
  static widget: Widget;
  static priv: any;
  add(...args: any[]): any;
  add_with_properties(widget: Widget, first_prop_name: string, ...args: any[]): void;
  check_resize(...args: any[]): any;
  child_get(child: Widget, first_prop_name: string, ...args: any[]): void;
  child_get_property(child: Widget, property_name: string, value: GObject.Value): void;
  child_get_valist(child: Widget, first_property_name: string, var_args: any): void;
  child_notify(...args: any[]): any;
  child_notify_by_pspec(child: Widget, pspec: GObject.ParamSpec): void;
  child_set(child: Widget, first_prop_name: string, ...args: any[]): void;
  child_set_property(child: Widget, property_name: string, value: GObject.Value): void;
  child_set_valist(child: Widget, first_property_name: string, var_args: any): void;
  child_type(...args: any[]): any;
  forall(...args: any[]): any;
  foreach(callback: Callback, callback_data: object | null): void;
  get_border_width(): number;
  get_children(): GLib.List;
  get_focus_chain(focusable_widgets: GLib.List): boolean;
  get_focus_child(): Widget | null;
  get_focus_hadjustment(): Adjustment | null;
  get_focus_vadjustment(): Adjustment | null;
  get_path_for_child(...args: any[]): any;
  get_resize_mode(): ResizeMode;
  propagate_draw(child: Widget, cr: cairo.Context): void;
  remove(...args: any[]): any;
  resize_children(): void;
  set_border_width(border_width: number): void;
  set_focus_chain(focusable_widgets: GLib.List): void;
  set_focus_child(...args: any[]): any;
  set_focus_hadjustment(adjustment: Adjustment): void;
  set_focus_vadjustment(adjustment: Adjustment): void;
  set_reallocate_redraws(needs_redraws: boolean): void;
  set_resize_mode(resize_mode: ResizeMode): void;
  unset_focus_chain(): void;
  add(...args: any[]): any;
  check_resize(...args: any[]): any;
  child_type(...args: any[]): any;
  composite_name(child: Widget): string;
  forall(...args: any[]): any;
  get_child_property(child: Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
  get_path_for_child(...args: any[]): any;
  remove(...args: any[]): any;
  set_child_property(child: Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec): void;
  set_focus_child(...args: any[]): any;
}
export class ContainerAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class ContainerCellAccessible extends CellAccessible {
  constructor();
  static parent: any;
  static priv: any;
  add_child(child: CellAccessible): void;
  get_children(): GLib.List;
  remove_child(child: CellAccessible): void;
}
export class CssProvider extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: CssProviderPrivate;
  load_from_data(data: number[], length: number): boolean;
  load_from_file(file: Gio.File): boolean;
  load_from_path(path: string): boolean;
  load_from_resource(resource_path: string): void;
  to_string(): string;
  parsing_error(section: CssSection, error: GLib.Error): void;
  static get_default(): CssProvider;
  static get_named(name: string, variant: string | null): CssProvider;
}
export class Dialog extends Window {
  constructor();
  'use-header-bar': number;
  static window: Window;
  static priv: any;
  add_action_widget(child: Widget, response_id: number): void;
  add_button(button_text: string, response_id: number): Widget;
  add_buttons(first_button_text: string, ...args: any[]): void;
  get_action_area(): Widget;
  get_content_area(): Box;
  get_header_bar(): Widget;
  get_response_for_widget(widget: Widget): number;
  get_widget_for_response(response_id: number): Widget | null;
  response(...args: any[]): any;
  run(): number;
  set_alternative_button_order(first_response_id: number, ...args: any[]): void;
  set_alternative_button_order_from_array(n_params: number, new_order: number[]): void;
  set_default_response(response_id: number): void;
  set_response_sensitive(response_id: number, setting: boolean): void;
  close(...args: any[]): any;
  response(...args: any[]): any;
}
export class DrawingArea extends Widget {
  constructor();
  static widget: Widget;
  static dummy: object;
}
export class Entry extends Widget {
  constructor();
  'activates-default': boolean;
  attributes: Pango.AttrList;
  buffer: EntryBuffer;
  'caps-lock-warning': boolean;
  completion: EntryCompletion;
  'cursor-position': number;
  editable: boolean;
  'enable-emoji-completion': boolean;
  'has-frame': boolean;
  'im-module': string;
  'inner-border': Border;
  'input-hints': InputHints;
  'input-purpose': InputPurpose;
  'invisible-char': number;
  'invisible-char-set': boolean;
  'max-length': number;
  'max-width-chars': number;
  'overwrite-mode': boolean;
  'placeholder-text': string;
  'populate-all': boolean;
  'primary-icon-activatable': boolean;
  'primary-icon-gicon': Gio.Icon;
  'primary-icon-name': string;
  'primary-icon-pixbuf': GdkPixbuf.Pixbuf;
  'primary-icon-sensitive': boolean;
  'primary-icon-stock': string;
  'primary-icon-storage-type': ImageType;
  'primary-icon-tooltip-markup': string;
  'primary-icon-tooltip-text': string;
  'progress-fraction': number;
  'progress-pulse-step': number;
  'scroll-offset': number;
  'secondary-icon-activatable': boolean;
  'secondary-icon-gicon': Gio.Icon;
  'secondary-icon-name': string;
  'secondary-icon-pixbuf': GdkPixbuf.Pixbuf;
  'secondary-icon-sensitive': boolean;
  'secondary-icon-stock': string;
  'secondary-icon-storage-type': ImageType;
  'secondary-icon-tooltip-markup': string;
  'secondary-icon-tooltip-text': string;
  'selection-bound': number;
  'shadow-type': ShadowType;
  'show-emoji-icon': boolean;
  tabs: Pango.TabArray;
  text: string;
  'text-length': number;
  'truncate-multiline': boolean;
  visibility: boolean;
  'width-chars': number;
  xalign: number;
  static parent_instance: any;
  static priv: any;
  get_activates_default(): boolean;
  get_alignment(): number;
  get_attributes(): Pango.AttrList | null;
  get_buffer(): EntryBuffer;
  get_completion(): EntryCompletion;
  get_current_icon_drag_source(): number;
  get_cursor_hadjustment(): Adjustment | null;
  get_has_frame(): boolean;
  get_icon_activatable(icon_pos: EntryIconPosition): boolean;
  get_icon_area(icon_pos: EntryIconPosition, icon_area: Gdk.Rectangle): void;
  get_icon_at_pos(x: number, y: number): number;
  get_icon_gicon(icon_pos: EntryIconPosition): Gio.Icon | null;
  get_icon_name(icon_pos: EntryIconPosition): string | null;
  get_icon_pixbuf(icon_pos: EntryIconPosition): GdkPixbuf.Pixbuf | null;
  get_icon_sensitive(icon_pos: EntryIconPosition): boolean;
  get_icon_stock(icon_pos: EntryIconPosition): string;
  get_icon_storage_type(icon_pos: EntryIconPosition): ImageType;
  get_icon_tooltip_markup(icon_pos: EntryIconPosition): string | null;
  get_icon_tooltip_text(icon_pos: EntryIconPosition): string | null;
  get_inner_border(): Border | null;
  get_input_hints(): InputHints;
  get_input_purpose(): InputPurpose;
  get_invisible_char(): number;
  get_layout(): Pango.Layout;
  get_layout_offsets(x?: number, y?: number): void;
  get_max_length(): number;
  get_max_width_chars(): number;
  get_overwrite_mode(): boolean;
  get_placeholder_text(): string;
  get_progress_fraction(): number;
  get_progress_pulse_step(): number;
  get_tabs(): Pango.TabArray | null;
  get_text(): string;
  get_text_area(text_area: Gdk.Rectangle): void;
  get_text_length(): number;
  get_visibility(): boolean;
  get_width_chars(): number;
  grab_focus_without_selecting(): void;
  im_context_filter_keypress(event: Gdk.EventKey): boolean;
  layout_index_to_text_index(layout_index: number): number;
  progress_pulse(): void;
  reset_im_context(): void;
  set_activates_default(setting: boolean): void;
  set_alignment(xalign: number): void;
  set_attributes(attrs: Pango.AttrList): void;
  set_buffer(buffer: EntryBuffer): void;
  set_completion(completion: EntryCompletion | null): void;
  set_cursor_hadjustment(adjustment: Adjustment | null): void;
  set_has_frame(setting: boolean): void;
  set_icon_activatable(icon_pos: EntryIconPosition, activatable: boolean): void;
  set_icon_drag_source(icon_pos: EntryIconPosition, target_list: TargetList, actions: Gdk.DragAction): void;
  set_icon_from_gicon(icon_pos: EntryIconPosition, icon: Gio.Icon | null): void;
  set_icon_from_icon_name(icon_pos: EntryIconPosition, icon_name: string | null): void;
  set_icon_from_pixbuf(icon_pos: EntryIconPosition, pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_icon_from_stock(icon_pos: EntryIconPosition, stock_id: string | null): void;
  set_icon_sensitive(icon_pos: EntryIconPosition, sensitive: boolean): void;
  set_icon_tooltip_markup(icon_pos: EntryIconPosition, tooltip: string | null): void;
  set_icon_tooltip_text(icon_pos: EntryIconPosition, tooltip: string | null): void;
  set_inner_border(border: Border | null): void;
  set_input_hints(hints: InputHints): void;
  set_input_purpose(purpose: InputPurpose): void;
  set_invisible_char(ch: number): void;
  set_max_length(max: number): void;
  set_max_width_chars(n_chars: number): void;
  set_overwrite_mode(overwrite: boolean): void;
  set_placeholder_text(text: string | null): void;
  set_progress_fraction(fraction: number): void;
  set_progress_pulse_step(fraction: number): void;
  set_tabs(tabs: Pango.TabArray): void;
  set_text(text: string): void;
  set_visibility(visible: boolean): void;
  set_width_chars(n_chars: number): void;
  text_index_to_layout_index(text_index: number): number;
  unset_invisible_char(): void;
  activate(...args: any[]): any;
  backspace(): void;
  copy_clipboard(): void;
  cut_clipboard(): void;
  delete_from_cursor(type: DeleteType, count: number): void;
  get_frame_size(x: number, y: number, width: number, height: number): void;
  get_text_area_size(x: number, y: number, width: number, height: number): void;
  insert_at_cursor(str: string): void;
  insert_emoji(): void;
  move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
  paste_clipboard(): void;
  populate_popup(popup: Widget): void;
  toggle_overwrite(): void;
}
export class EntryAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class EntryBuffer extends GObject.Object {
  constructor(initial_chars: string | null, n_initial_chars: number);
  length: number;
  'max-length': number;
  text: string;
  static parent_instance: GObject.Object;
  static priv: EntryBufferPrivate;
  delete_text(...args: any[]): any;
  emit_deleted_text(position: number, n_chars: number): void;
  emit_inserted_text(position: number, chars: string, n_chars: number): void;
  get_bytes(): number;
  get_length(...args: any[]): any;
  get_max_length(): number;
  get_text(...args: any[]): any;
  insert_text(...args: any[]): any;
  set_max_length(max_length: number): void;
  set_text(chars: string, n_chars: number): void;
  delete_text(...args: any[]): any;
  deleted_text(position: number, n_chars: number): void;
  get_length(...args: any[]): any;
  get_text(...args: any[]): any;
  insert_text(...args: any[]): any;
  inserted_text(position: number, chars: string, n_chars: number): void;
}
export class EntryCompletion extends GObject.Object {
  constructor();
  'cell-area': CellArea;
  'inline-completion': boolean;
  'inline-selection': boolean;
  'minimum-key-length': number;
  model: any;
  'popup-completion': boolean;
  'popup-set-width': boolean;
  'popup-single-match': boolean;
  'text-column': number;
  static parent_instance: GObject.Object;
  static priv: EntryCompletionPrivate;
  complete(): void;
  compute_prefix(key: string): string | null;
  delete_action(index_: number): void;
  get_completion_prefix(): string;
  get_entry(): Widget;
  get_inline_completion(): boolean;
  get_inline_selection(): boolean;
  get_minimum_key_length(): number;
  get_model(): any | null;
  get_popup_completion(): boolean;
  get_popup_set_width(): boolean;
  get_popup_single_match(): boolean;
  get_text_column(): number;
  insert_action_markup(index_: number, markup: string): void;
  insert_action_text(index_: number, text: string): void;
  insert_prefix(...args: any[]): any;
  set_inline_completion(inline_completion: boolean): void;
  set_inline_selection(inline_selection: boolean): void;
  set_match_func(func: EntryCompletionMatchFunc, func_data: object | null, func_notify: GLib.DestroyNotify): void;
  set_minimum_key_length(length: number): void;
  set_model(model: any | null): void;
  set_popup_completion(popup_completion: boolean): void;
  set_popup_set_width(popup_set_width: boolean): void;
  set_popup_single_match(popup_single_match: boolean): void;
  set_text_column(column: number): void;
  action_activated(index_: number): void;
  cursor_on_match(model: any, iter: TreeIter): boolean;
  insert_prefix(...args: any[]): any;
  match_selected(model: any, iter: TreeIter): boolean;
  no_matches(): void;
}
export class EntryIconAccessible extends Atk.Object {}
export class EventBox extends Bin {
  constructor();
  'above-child': boolean;
  'visible-window': boolean;
  static bin: Bin;
  static priv: any;
  get_above_child(): boolean;
  get_visible_window(): boolean;
  set_above_child(above_child: boolean): void;
  set_visible_window(visible_window: boolean): void;
}
export class EventController extends GObject.Object {
  'propagation-phase': PropagationPhase;
  widget: Widget;
  get_propagation_phase(): PropagationPhase;
  get_widget(): Widget;
  handle_event(event: Gdk.Event): boolean;
  reset(): void;
  set_propagation_phase(phase: PropagationPhase): void;
}
export class EventControllerKey extends EventController {
  constructor(widget: Widget);
  forward(widget: Widget): boolean;
  get_group(): number;
  get_im_context(): IMContext;
  set_im_context(im_context: IMContext): void;
}
export class EventControllerMotion extends EventController {
  constructor(widget: Widget);
}
export class EventControllerScroll extends EventController {
  constructor(widget: Widget, flags: EventControllerScrollFlags);
  flags: EventControllerScrollFlags;
  get_flags(): EventControllerScrollFlags;
  set_flags(flags: EventControllerScrollFlags): void;
}
export class Expander extends Bin {
  constructor(label: string | null);
  expanded: boolean;
  label: string;
  'label-fill': boolean;
  'label-widget': Widget;
  'resize-toplevel': boolean;
  spacing: number;
  'use-markup': boolean;
  'use-underline': boolean;
  static bin: Bin;
  static priv: any;
  get_expanded(): boolean;
  get_label(): string | null;
  get_label_fill(): boolean;
  get_label_widget(): Widget | null;
  get_resize_toplevel(): boolean;
  get_spacing(): number;
  get_use_markup(): boolean;
  get_use_underline(): boolean;
  set_expanded(expanded: boolean): void;
  set_label(label: string | null): void;
  set_label_fill(label_fill: boolean): void;
  set_label_widget(label_widget: Widget | null): void;
  set_resize_toplevel(resize_toplevel: boolean): void;
  set_spacing(spacing: number): void;
  set_use_markup(use_markup: boolean): void;
  set_use_underline(use_underline: boolean): void;
  activate(): void;
}
export class ExpanderAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class FileChooserButton extends Box {
  constructor(title: string, action: FileChooserAction);
  dialog: any;
  title: string;
  'width-chars': number;
  static parent: Box;
  static priv: any;
  get_focus_on_click(): boolean;
  get_title(): string;
  get_width_chars(): number;
  set_focus_on_click(focus_on_click: boolean): void;
  set_title(title: string): void;
  set_width_chars(n_chars: number): void;
  file_set(): void;
}
export class FileChooserDialog extends Dialog {
  constructor(title: string | null, parent: Window | null, action: FileChooserAction, first_button_text: string | null, ...args: any[]);
  static parent_instance: Dialog;
  static priv: any;
}
export class FileChooserNative extends NativeDialog {
  constructor(title: string | null, parent: Window | null, action: FileChooserAction, accept_label: string | null, cancel_label: string | null);
  'accept-label': string;
  'cancel-label': string;
  get_accept_label(): string | null;
  get_cancel_label(): string | null;
  set_accept_label(accept_label: string | null): void;
  set_cancel_label(cancel_label: string | null): void;
}
export class FileChooserWidget extends Box {
  constructor(action: FileChooserAction);
  'search-mode': boolean;
  subtitle: string;
  static parent_instance: Box;
  static priv: any;
}
export class FileFilter extends GObject.InitiallyUnowned {
  constructor();
  add_custom(needed: FileFilterFlags, func: FileFilterFunc, data: object | null, notify: GLib.DestroyNotify): void;
  add_mime_type(mime_type: string): void;
  add_pattern(pattern: string): void;
  add_pixbuf_formats(): void;
  filter(filter_info: FileFilterInfo): boolean;
  get_name(): string | null;
  get_needed(): FileFilterFlags;
  set_name(name: string | null): void;
  to_gvariant(): GLib.Variant;
}
export class Fixed extends Container {
  constructor();
  static container: Container;
  static priv: any;
  move(widget: Widget, x: number, y: number): void;
  put(widget: Widget, x: number, y: number): void;
}
export class FlowBox extends Container {
  constructor();
  'activate-on-single-click': boolean;
  'column-spacing': number;
  homogeneous: boolean;
  'max-children-per-line': number;
  'min-children-per-line': number;
  'row-spacing': number;
  'selection-mode': SelectionMode;
  static container: Container;
  bind_model(model: Gio.ListModel | null, create_widget_func: FlowBoxCreateWidgetFunc, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
  get_activate_on_single_click(): boolean;
  get_child_at_index(idx: number): FlowBoxChild | null;
  get_child_at_pos(x: number, y: number): FlowBoxChild | null;
  get_column_spacing(): number;
  get_homogeneous(): boolean;
  get_max_children_per_line(): number;
  get_min_children_per_line(): number;
  get_row_spacing(): number;
  get_selected_children(): GLib.List;
  get_selection_mode(): SelectionMode;
  insert(widget: Widget, position: number): void;
  invalidate_filter(): void;
  invalidate_sort(): void;
  select_all(...args: any[]): any;
  select_child(child: FlowBoxChild): void;
  selected_foreach(func: FlowBoxForeachFunc, data: object | null): void;
  set_activate_on_single_click(single: boolean): void;
  set_column_spacing(spacing: number): void;
  set_filter_func(filter_func: FlowBoxFilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
  set_hadjustment(adjustment: Adjustment): void;
  set_homogeneous(homogeneous: boolean): void;
  set_max_children_per_line(n_children: number): void;
  set_min_children_per_line(n_children: number): void;
  set_row_spacing(spacing: number): void;
  set_selection_mode(mode: SelectionMode): void;
  set_sort_func(sort_func: FlowBoxSortFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
  set_vadjustment(adjustment: Adjustment): void;
  unselect_all(...args: any[]): any;
  unselect_child(child: FlowBoxChild): void;
  activate_cursor_child(): void;
  child_activated(child: FlowBoxChild): void;
  move_cursor(step: MovementStep, count: number): boolean;
  select_all(...args: any[]): any;
  selected_children_changed(): void;
  toggle_cursor_child(): void;
  unselect_all(...args: any[]): any;
}
export class FlowBoxAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class FlowBoxChild extends Bin {
  constructor();
  static parent_instance: Bin;
  changed(): void;
  get_index(): number;
  is_selected(): boolean;
  activate(): void;
}
export class FlowBoxChildAccessible extends ContainerAccessible {
  static parent: any;
}
export class FontButton extends Button {
  constructor();
  'font-name': string;
  'show-size': boolean;
  'show-style': boolean;
  title: string;
  'use-font': boolean;
  'use-size': boolean;
  static button: Button;
  static priv: any;
  get_font_name(): string;
  get_show_size(): boolean;
  get_show_style(): boolean;
  get_title(): string;
  get_use_font(): boolean;
  get_use_size(): boolean;
  set_font_name(fontname: string): boolean;
  set_show_size(show_size: boolean): void;
  set_show_style(show_style: boolean): void;
  set_title(title: string): void;
  set_use_font(use_font: boolean): void;
  set_use_size(use_size: boolean): void;
  font_set(): void;
}
export class FontChooserDialog extends Dialog {
  constructor(title: string | null, parent: Window | null);
  static parent_instance: Dialog;
  static priv: any;
}
export class FontChooserWidget extends Box {
  constructor();
  'tweak-action': Gio.Action;
  static parent_instance: Box;
  static priv: any;
}
export class FontSelection extends Box {
  constructor();
  'font-name': string;
  'preview-text': string;
  static parent_instance: Box;
  static priv: any;
  get_face(): Pango.FontFace;
  get_face_list(): Widget;
  get_family(): Pango.FontFamily;
  get_family_list(): Widget;
  get_font_name(): string;
  get_preview_entry(): Widget;
  get_preview_text(): string;
  get_size(): number;
  get_size_entry(): Widget;
  get_size_list(): Widget;
  set_font_name(fontname: string): boolean;
  set_preview_text(text: string): void;
}
export class FontSelectionDialog extends Dialog {
  constructor(title: string);
  static parent_instance: Dialog;
  static priv: any;
  get_cancel_button(): Widget;
  get_font_name(): string;
  get_font_selection(): Widget;
  get_ok_button(): Widget;
  get_preview_text(): string;
  set_font_name(fontname: string): boolean;
  set_preview_text(text: string): void;
}
export class Frame extends Bin {
  constructor(label: string | null);
  label: string;
  'label-widget': Widget;
  'label-xalign': number;
  'label-yalign': number;
  'shadow-type': ShadowType;
  static bin: Bin;
  static priv: any;
  get_label(): string | null;
  get_label_align(xalign?: number, yalign?: number): void;
  get_label_widget(): Widget | null;
  get_shadow_type(): ShadowType;
  set_label(label: string | null): void;
  set_label_align(xalign: number, yalign: number): void;
  set_label_widget(label_widget: Widget | null): void;
  set_shadow_type(type: ShadowType): void;
  compute_child_allocation(allocation: Allocation): void;
}
export class FrameAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class GLArea extends Widget {
  constructor();
  'auto-render': boolean;
  context: Gdk.GLContext;
  'has-alpha': boolean;
  'has-depth-buffer': boolean;
  'has-stencil-buffer': boolean;
  'use-es': boolean;
  static parent_instance: any;
  attach_buffers(): void;
  get_auto_render(): boolean;
  get_context(): Gdk.GLContext;
  get_error(): GLib.Error | null;
  get_has_alpha(): boolean;
  get_has_depth_buffer(): boolean;
  get_has_stencil_buffer(): boolean;
  get_required_version(major: number, minor: number): void;
  get_use_es(): boolean;
  make_current(): void;
  queue_render(): void;
  set_auto_render(auto_render: boolean): void;
  set_error(error: GLib.Error | null): void;
  set_has_alpha(has_alpha: boolean): void;
  set_has_depth_buffer(has_depth_buffer: boolean): void;
  set_has_stencil_buffer(has_stencil_buffer: boolean): void;
  set_required_version(major: number, minor: number): void;
  set_use_es(use_es: boolean): void;
  create_context(): Gdk.GLContext;
  render(context: Gdk.GLContext): boolean;
  resize(width: number, height: number): void;
}
export class Gesture extends EventController {
  'n-points': number;
  window: Gdk.Window;
  get_bounding_box(rect: Gdk.Rectangle): boolean;
  get_bounding_box_center(x: number, y: number): boolean;
  get_device(): Gdk.Device | null;
  get_group(): GLib.List;
  get_last_event(sequence: Gdk.EventSequence | null): Gdk.Event | null;
  get_last_updated_sequence(): Gdk.EventSequence | null;
  get_point(sequence: Gdk.EventSequence | null, x?: number, y?: number): boolean;
  get_sequence_state(sequence: Gdk.EventSequence): EventSequenceState;
  get_sequences(): GLib.List;
  get_window(): Gdk.Window | null;
  group(gesture: Gesture): void;
  handles_sequence(sequence: Gdk.EventSequence | null): boolean;
  is_active(): boolean;
  is_grouped_with(other: Gesture): boolean;
  is_recognized(): boolean;
  set_sequence_state(sequence: Gdk.EventSequence, state: EventSequenceState): boolean;
  set_state(state: EventSequenceState): boolean;
  set_window(window: Gdk.Window | null): void;
  ungroup(): void;
}
export class GestureDrag extends GestureSingle {
  constructor(widget: Widget);
  get_offset(x: number | null, y: number | null): boolean;
  get_start_point(x: number | null, y: number | null): boolean;
}
export class GestureLongPress extends GestureSingle {
  constructor(widget: Widget);
  'delay-factor': number;
}
export class GestureMultiPress extends GestureSingle {
  constructor(widget: Widget);
  get_area(rect: Gdk.Rectangle): boolean;
  set_area(rect: Gdk.Rectangle | null): void;
}
export class GesturePan extends GestureDrag {
  constructor(widget: Widget, orientation: Orientation);
  orientation: Orientation;
  get_orientation(): Orientation;
  set_orientation(orientation: Orientation): void;
}
export class GestureRotate extends Gesture {
  constructor(widget: Widget);
  get_angle_delta(): number;
}
export class GestureSingle extends Gesture {
  button: number;
  exclusive: boolean;
  'touch-only': boolean;
  get_button(): number;
  get_current_button(): number;
  get_current_sequence(): Gdk.EventSequence | null;
  get_exclusive(): boolean;
  get_touch_only(): boolean;
  set_button(button: number): void;
  set_exclusive(exclusive: boolean): void;
  set_touch_only(touch_only: boolean): void;
}
export class GestureStylus extends GestureSingle {
  constructor(widget: Widget);
  get_axes(axes: Gdk.AxisUse[], values: number[]): boolean;
  get_axis(axis: Gdk.AxisUse, value: number): boolean;
  get_device_tool(): Gdk.DeviceTool | null;
}
export class GestureSwipe extends GestureSingle {
  constructor(widget: Widget);
  get_velocity(velocity_x: number, velocity_y: number): boolean;
}
export class GestureZoom extends Gesture {
  constructor(widget: Widget);
  get_scale_delta(): number;
}
export class Grid extends Container {
  constructor();
  'baseline-row': number;
  'column-homogeneous': boolean;
  'column-spacing': number;
  'row-homogeneous': boolean;
  'row-spacing': number;
  static container: Container;
  static priv: any;
  attach(child: Widget, left: number, top: number, width: number, height: number): void;
  attach_next_to(child: Widget, sibling: Widget | null, side: PositionType, width: number, height: number): void;
  get_baseline_row(): number;
  get_child_at(left: number, top: number): Widget | null;
  get_column_homogeneous(): boolean;
  get_column_spacing(): number;
  get_row_baseline_position(row: number): BaselinePosition;
  get_row_homogeneous(): boolean;
  get_row_spacing(): number;
  insert_column(position: number): void;
  insert_next_to(sibling: Widget, side: PositionType): void;
  insert_row(position: number): void;
  remove_column(position: number): void;
  remove_row(position: number): void;
  set_baseline_row(row: number): void;
  set_column_homogeneous(homogeneous: boolean): void;
  set_column_spacing(spacing: number): void;
  set_row_baseline_position(row: number, pos: BaselinePosition): void;
  set_row_homogeneous(homogeneous: boolean): void;
  set_row_spacing(spacing: number): void;
}
export class HBox extends Box {
  constructor(homogeneous: boolean, spacing: number);
  static box: Box;
}
export class HButtonBox extends ButtonBox {
  constructor();
  static button_box: ButtonBox;
}
export class HPaned extends Paned {
  constructor();
  static paned: Paned;
}
export class HSV extends Widget {
  constructor();
  static parent_instance: any;
  static priv: any;
  get_color(h: number, s: number, v: number): void;
  get_metrics(size: number, ring_width: number): void;
  is_adjusting(): boolean;
  set_color(h: number, s: number, v: number): void;
  set_metrics(size: number, ring_width: number): void;
  changed(): void;
  move(type: DirectionType): void;
  static to_rgb(h: number, s: number, v: number, r: number, g: number, b: number): void;
}
export class HScale extends Scale {
  constructor(adjustment: Adjustment | null);
  static scale: Scale;
}
export class HScrollbar extends Scrollbar {
  constructor(adjustment: Adjustment | null);
  static scrollbar: Scrollbar;
}
export class HSeparator extends Separator {
  constructor();
  static separator: Separator;
}
export class HandleBox extends Bin {
  constructor();
  'child-detached': boolean;
  'handle-position': PositionType;
  'shadow-type': ShadowType;
  'snap-edge': PositionType;
  'snap-edge-set': boolean;
  static bin: Bin;
  static priv: any;
  get_child_detached(): boolean;
  get_handle_position(): PositionType;
  get_shadow_type(): ShadowType;
  get_snap_edge(): PositionType;
  set_handle_position(position: PositionType): void;
  set_shadow_type(type: ShadowType): void;
  set_snap_edge(edge: PositionType): void;
  child_attached(child: Widget): void;
  child_detached(child: Widget): void;
}
export class HeaderBar extends Container {
  constructor();
  'custom-title': Widget;
  'decoration-layout': string;
  'decoration-layout-set': boolean;
  'has-subtitle': boolean;
  'show-close-button': boolean;
  spacing: number;
  subtitle: string;
  title: string;
  static container: Container;
  get_custom_title(): Widget | null;
  get_decoration_layout(): string;
  get_has_subtitle(): boolean;
  get_show_close_button(): boolean;
  get_subtitle(): string | null;
  get_title(): string | null;
  pack_end(child: Widget): void;
  pack_start(child: Widget): void;
  set_custom_title(title_widget: Widget | null): void;
  set_decoration_layout(layout: string | null): void;
  set_has_subtitle(setting: boolean): void;
  set_show_close_button(setting: boolean): void;
  set_subtitle(subtitle: string | null): void;
  set_title(title: string | null): void;
}
export class HeaderBarAccessible extends ContainerAccessible {
  static parent: any;
}
export class IMContext extends GObject.Object {
  'input-hints': InputHints;
  'input-purpose': InputPurpose;
  static parent_instance: GObject.Object;
  delete_surrounding(...args: any[]): any;
  filter_keypress(...args: any[]): any;
  focus_in(...args: any[]): any;
  focus_out(...args: any[]): any;
  get_preedit_string(...args: any[]): any;
  get_surrounding(...args: any[]): any;
  reset(...args: any[]): any;
  set_client_window(...args: any[]): any;
  set_cursor_location(...args: any[]): any;
  set_surrounding(...args: any[]): any;
  set_use_preedit(...args: any[]): any;
  commit(str: string): void;
  delete_surrounding(...args: any[]): any;
  filter_keypress(...args: any[]): any;
  focus_in(...args: any[]): any;
  focus_out(...args: any[]): any;
  get_preedit_string(...args: any[]): any;
  get_surrounding(...args: any[]): any;
  preedit_changed(): void;
  preedit_end(): void;
  preedit_start(): void;
  reset(...args: any[]): any;
  retrieve_surrounding(): boolean;
  set_client_window(...args: any[]): any;
  set_cursor_location(...args: any[]): any;
  set_surrounding(...args: any[]): any;
  set_use_preedit(...args: any[]): any;
}
export class IMContextSimple extends IMContext {
  constructor();
  static object: IMContext;
  static priv: IMContextSimplePrivate;
  add_compose_file(compose_file: string): void;
  add_table(data: number[], max_seq_len: number, n_seqs: number): void;
}
export class IMMulticontext extends IMContext {
  constructor();
  static object: IMContext;
  static priv: IMMulticontextPrivate;
  append_menuitems(menushell: MenuShell): void;
  get_context_id(): string;
  set_context_id(context_id: string): void;
}
export class IconFactory extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: IconFactoryPrivate;
  add(stock_id: string, icon_set: IconSet): void;
  add_default(): void;
  lookup(stock_id: string): IconSet;
  remove_default(): void;
  static lookup_default(stock_id: string): IconSet;
}
export class IconInfo extends GObject.Object {
  constructor(icon_theme: IconTheme, pixbuf: GdkPixbuf.Pixbuf);
  copy(): IconInfo;
  free(): void;
  get_attach_points(points?: Gdk.Point[], n_points?: number): boolean;
  get_base_scale(): number;
  get_base_size(): number;
  get_builtin_pixbuf(): GdkPixbuf.Pixbuf | null;
  get_display_name(): string;
  get_embedded_rect(rectangle: Gdk.Rectangle): boolean;
  get_filename(): any | null;
  is_symbolic(): boolean;
  load_icon(): GdkPixbuf.Pixbuf;
  load_icon_async(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  load_icon_finish(res: Gio.AsyncResult): GdkPixbuf.Pixbuf;
  load_surface(for_window: Gdk.Window | null): cairo.Surface;
  load_symbolic(fg: Gdk.RGBA, success_color: Gdk.RGBA | null, warning_color: Gdk.RGBA | null, error_color: Gdk.RGBA | null, was_symbolic?: boolean): GdkPixbuf.Pixbuf;
  load_symbolic_async(fg: Gdk.RGBA, success_color: Gdk.RGBA | null, warning_color: Gdk.RGBA | null, error_color: Gdk.RGBA | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  load_symbolic_finish(res: Gio.AsyncResult, was_symbolic?: boolean): GdkPixbuf.Pixbuf;
  load_symbolic_for_context(context: StyleContext, was_symbolic?: boolean): GdkPixbuf.Pixbuf;
  load_symbolic_for_context_async(context: StyleContext, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null, user_data: object | null): void;
  load_symbolic_for_context_finish(res: Gio.AsyncResult, was_symbolic?: boolean): GdkPixbuf.Pixbuf;
  load_symbolic_for_style(style: Style, state: StateType, was_symbolic?: boolean): GdkPixbuf.Pixbuf;
  set_raw_coordinates(raw_coordinates: boolean): void;
}
export class IconTheme extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: IconThemePrivate;
  add_resource_path(path: string): void;
  append_search_path(path: any): void;
  choose_icon(icon_names: string[], size: number, flags: IconLookupFlags): IconInfo | null;
  choose_icon_for_scale(icon_names: string[], size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
  get_example_icon_name(): string | null;
  get_icon_sizes(icon_name: string): number[];
  get_search_path(path?: any[], n_elements?: number): void;
  has_icon(icon_name: string): boolean;
  list_contexts(): GLib.List;
  list_icons(context: string | null): GLib.List;
  load_icon(icon_name: string, size: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
  load_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): GdkPixbuf.Pixbuf | null;
  load_surface(icon_name: string, size: number, scale: number, for_window: Gdk.Window | null, flags: IconLookupFlags): cairo.Surface | null;
  lookup_by_gicon(icon: Gio.Icon, size: number, flags: IconLookupFlags): IconInfo | null;
  lookup_by_gicon_for_scale(icon: Gio.Icon, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
  lookup_icon(icon_name: string, size: number, flags: IconLookupFlags): IconInfo | null;
  lookup_icon_for_scale(icon_name: string, size: number, scale: number, flags: IconLookupFlags): IconInfo | null;
  prepend_search_path(path: any): void;
  rescan_if_needed(): boolean;
  set_custom_theme(theme_name: string | null): void;
  set_screen(screen: Gdk.Screen): void;
  set_search_path(path: any[], n_elements: number): void;
  changed(): void;
  static add_builtin_icon(icon_name: string, size: number, pixbuf: GdkPixbuf.Pixbuf): void;
  static get_default(): IconTheme;
  static get_for_screen(screen: Gdk.Screen): IconTheme;
}
export class IconView extends Container {
  constructor();
  'activate-on-single-click': boolean;
  'cell-area': CellArea;
  'column-spacing': number;
  columns: number;
  'item-orientation': Orientation;
  'item-padding': number;
  'item-width': number;
  margin: number;
  'markup-column': number;
  model: any;
  'pixbuf-column': number;
  reorderable: boolean;
  'row-spacing': number;
  'selection-mode': SelectionMode;
  spacing: number;
  'text-column': number;
  'tooltip-column': number;
  static parent: Container;
  static priv: any;
  convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number): void;
  create_drag_icon(path: TreePath): cairo.Surface;
  enable_model_drag_dest(targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
  enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
  get_activate_on_single_click(): boolean;
  get_cell_rect(path: TreePath, cell: CellRenderer | null, rect: Gdk.Rectangle): boolean;
  get_column_spacing(): number;
  get_columns(): number;
  get_cursor(path?: TreePath, cell?: CellRenderer): boolean;
  get_dest_item_at_pos(drag_x: number, drag_y: number, path?: TreePath, pos?: IconViewDropPosition): boolean;
  get_drag_dest_item(path?: TreePath, pos?: IconViewDropPosition): void;
  get_item_at_pos(x: number, y: number, path?: TreePath, cell?: CellRenderer): boolean;
  get_item_column(path: TreePath): number;
  get_item_orientation(): Orientation;
  get_item_padding(): number;
  get_item_row(path: TreePath): number;
  get_item_width(): number;
  get_margin(): number;
  get_markup_column(): number;
  get_model(): any | null;
  get_path_at_pos(x: number, y: number): TreePath | null;
  get_pixbuf_column(): number;
  get_reorderable(): boolean;
  get_row_spacing(): number;
  get_selected_items(): GLib.List;
  get_selection_mode(): SelectionMode;
  get_spacing(): number;
  get_text_column(): number;
  get_tooltip_column(): number;
  get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model?: any, path?: TreePath, iter?: TreeIter): boolean;
  get_visible_range(start_path?: TreePath, end_path?: TreePath): boolean;
  item_activated(...args: any[]): any;
  path_is_selected(path: TreePath): boolean;
  scroll_to_path(path: TreePath, use_align: boolean, row_align: number, col_align: number): void;
  select_all(...args: any[]): any;
  select_path(path: TreePath): void;
  selected_foreach(func: IconViewForeachFunc, data: object | null): void;
  set_activate_on_single_click(single: boolean): void;
  set_column_spacing(column_spacing: number): void;
  set_columns(columns: number): void;
  set_cursor(path: TreePath, cell: CellRenderer | null, start_editing: boolean): void;
  set_drag_dest_item(path: TreePath | null, pos: IconViewDropPosition): void;
  set_item_orientation(orientation: Orientation): void;
  set_item_padding(item_padding: number): void;
  set_item_width(item_width: number): void;
  set_margin(margin: number): void;
  set_markup_column(column: number): void;
  set_model(model: any | null): void;
  set_pixbuf_column(column: number): void;
  set_reorderable(reorderable: boolean): void;
  set_row_spacing(row_spacing: number): void;
  set_selection_mode(mode: SelectionMode): void;
  set_spacing(spacing: number): void;
  set_text_column(column: number): void;
  set_tooltip_cell(tooltip: Tooltip, path: TreePath, cell: CellRenderer | null): void;
  set_tooltip_column(column: number): void;
  set_tooltip_item(tooltip: Tooltip, path: TreePath): void;
  unselect_all(...args: any[]): any;
  unselect_path(path: TreePath): void;
  unset_model_drag_dest(): void;
  unset_model_drag_source(): void;
  activate_cursor_item(): boolean;
  item_activated(...args: any[]): any;
  move_cursor(step: MovementStep, count: number): boolean;
  select_all(...args: any[]): any;
  select_cursor_item(): void;
  selection_changed(): void;
  toggle_cursor_item(): void;
  unselect_all(...args: any[]): any;
}
export class IconViewAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class Image extends Misc {
  constructor();
  file: string;
  gicon: Gio.Icon;
  'icon-name': string;
  'icon-set': IconSet;
  'icon-size': number;
  pixbuf: GdkPixbuf.Pixbuf;
  'pixbuf-animation': GdkPixbuf.PixbufAnimation;
  'pixel-size': number;
  resource: string;
  stock: string;
  'storage-type': ImageType;
  surface: cairo.Surface;
  'use-fallback': boolean;
  static misc: Misc;
  static priv: any;
  clear(): void;
  get_animation(): GdkPixbuf.PixbufAnimation | null;
  get_gicon(gicon?: Gio.Icon, size?: number): void;
  get_icon_name(icon_name?: string, size?: number): void;
  get_icon_set(icon_set?: IconSet, size?: number): void;
  get_pixbuf(): GdkPixbuf.Pixbuf | null;
  get_pixel_size(): number;
  get_stock(stock_id?: string, size?: number): void;
  get_storage_type(): ImageType;
  set_from_animation(animation: GdkPixbuf.PixbufAnimation): void;
  set_from_file(filename: any | null): void;
  set_from_gicon(icon: Gio.Icon, size: number): void;
  set_from_icon_name(icon_name: string | null, size: number): void;
  set_from_icon_set(icon_set: IconSet, size: number): void;
  set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_from_resource(resource_path: string | null): void;
  set_from_stock(stock_id: string, size: number): void;
  set_from_surface(surface: cairo.Surface | null): void;
  set_pixel_size(pixel_size: number): void;
}
export class ImageAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class ImageCellAccessible extends RendererCellAccessible {
  static parent: any;
  static priv: any;
}
export class ImageMenuItem extends MenuItem {
  constructor();
  'accel-group': AccelGroup;
  'always-show-image': boolean;
  image: Widget;
  'use-stock': boolean;
  static menu_item: MenuItem;
  static priv: any;
  get_always_show_image(): boolean;
  get_image(): Widget;
  get_use_stock(): boolean;
  set_accel_group(accel_group: AccelGroup): void;
  set_always_show_image(always_show: boolean): void;
  set_image(image: Widget | null): void;
  set_use_stock(use_stock: boolean): void;
}
export class InfoBar extends Box {
  constructor();
  'message-type': MessageType;
  revealed: boolean;
  'show-close-button': boolean;
  static parent: Box;
  static priv: any;
  add_action_widget(child: Widget, response_id: number): void;
  add_button(button_text: string, response_id: number): Button;
  add_buttons(first_button_text: string, ...args: any[]): void;
  get_action_area(): Widget;
  get_content_area(): Widget;
  get_message_type(): MessageType;
  get_revealed(): boolean;
  get_show_close_button(): boolean;
  response(...args: any[]): any;
  set_default_response(response_id: number): void;
  set_message_type(message_type: MessageType): void;
  set_response_sensitive(response_id: number, setting: boolean): void;
  set_revealed(revealed: boolean): void;
  set_show_close_button(setting: boolean): void;
  close(): void;
  response(...args: any[]): any;
}
export class Invisible extends Widget {
  constructor();
  screen: Gdk.Screen;
  static widget: Widget;
  static priv: any;
  get_screen(...args: any[]): any;
  set_screen(screen: Gdk.Screen): void;
}
export class Label extends Misc {
  constructor(str: string | null);
  angle: number;
  attributes: Pango.AttrList;
  'cursor-position': number;
  ellipsize: Pango.EllipsizeMode;
  justify: Justification;
  label: string;
  lines: number;
  'max-width-chars': number;
  'mnemonic-keyval': number;
  'mnemonic-widget': Widget;
  pattern: string;
  selectable: boolean;
  'selection-bound': number;
  'single-line-mode': boolean;
  'track-visited-links': boolean;
  'use-markup': boolean;
  'use-underline': boolean;
  'width-chars': number;
  wrap: boolean;
  'wrap-mode': Pango.WrapMode;
  xalign: any;
  yalign: any;
  static misc: Misc;
  static priv: any;
  get_angle(): number;
  get_attributes(): Pango.AttrList | null;
  get_current_uri(): string;
  get_ellipsize(): Pango.EllipsizeMode;
  get_justify(): Justification;
  get_label(): string;
  get_layout(): Pango.Layout;
  get_layout_offsets(x?: number, y?: number): void;
  get_line_wrap(): boolean;
  get_line_wrap_mode(): Pango.WrapMode;
  get_lines(): number;
  get_max_width_chars(): number;
  get_mnemonic_keyval(): number;
  get_mnemonic_widget(): Widget | null;
  get_selectable(): boolean;
  get_selection_bounds(start: number, end: number): boolean;
  get_single_line_mode(): boolean;
  get_text(): string;
  get_track_visited_links(): boolean;
  get_use_markup(): boolean;
  get_use_underline(): boolean;
  get_width_chars(): number;
  get_xalign(): number;
  get_yalign(): number;
  select_region(start_offset: number, end_offset: number): void;
  set_angle(angle: number): void;
  set_attributes(attrs: Pango.AttrList | null): void;
  set_ellipsize(mode: Pango.EllipsizeMode): void;
  set_justify(jtype: Justification): void;
  set_label(str: string): void;
  set_line_wrap(wrap: boolean): void;
  set_line_wrap_mode(wrap_mode: Pango.WrapMode): void;
  set_lines(lines: number): void;
  set_markup(str: string): void;
  set_markup_with_mnemonic(str: string): void;
  set_max_width_chars(n_chars: number): void;
  set_mnemonic_widget(widget: Widget | null): void;
  set_pattern(pattern: string): void;
  set_selectable(setting: boolean): void;
  set_single_line_mode(single_line_mode: boolean): void;
  set_text(str: string): void;
  set_text_with_mnemonic(str: string): void;
  set_track_visited_links(track_links: boolean): void;
  set_use_markup(setting: boolean): void;
  set_use_underline(setting: boolean): void;
  set_width_chars(n_chars: number): void;
  set_xalign(xalign: number): void;
  set_yalign(yalign: number): void;
  activate_link(uri: string): boolean;
  copy_clipboard(): void;
  move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
  populate_popup(menu: Menu): void;
}
export class LabelAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class Layout extends Container {
  constructor(hadjustment: Adjustment | null, vadjustment: Adjustment | null);
  height: number;
  width: number;
  static container: Container;
  static priv: any;
  get_bin_window(): Gdk.Window;
  get_hadjustment(): Adjustment;
  get_size(width?: number, height?: number): void;
  get_vadjustment(): Adjustment;
  move(child_widget: Widget, x: number, y: number): void;
  put(child_widget: Widget, x: number, y: number): void;
  set_hadjustment(adjustment: Adjustment | null): void;
  set_size(width: number, height: number): void;
  set_vadjustment(adjustment: Adjustment | null): void;
}
export class LevelBar extends Widget {
  constructor();
  inverted: boolean;
  'max-value': number;
  'min-value': number;
  mode: LevelBarMode;
  value: number;
  static parent: any;
  static priv: any;
  add_offset_value(name: string, value: number): void;
  get_inverted(): boolean;
  get_max_value(): number;
  get_min_value(): number;
  get_mode(): LevelBarMode;
  get_offset_value(name: string | null, value: number): boolean;
  get_value(): number;
  remove_offset_value(name: string | null): void;
  set_inverted(inverted: boolean): void;
  set_max_value(value: number): void;
  set_min_value(value: number): void;
  set_mode(mode: LevelBarMode): void;
  set_value(value: number): void;
  offset_changed(name: string): void;
}
export class LevelBarAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class LinkButton extends Button {
  constructor(uri: string);
  uri: string;
  visited: boolean;
  static parent_instance: Button;
  static priv: any;
  get_uri(): string;
  get_visited(): boolean;
  set_uri(uri: string): void;
  set_visited(visited: boolean): void;
  activate_link(): boolean;
}
export class LinkButtonAccessible extends ButtonAccessible {
  static parent: any;
  static priv: any;
}
export class ListBox extends Container {
  constructor();
  'activate-on-single-click': boolean;
  'selection-mode': SelectionMode;
  static parent_instance: Container;
  bind_model(model: Gio.ListModel | null, create_widget_func: ListBoxCreateWidgetFunc | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): void;
  drag_highlight_row(row: ListBoxRow): void;
  drag_unhighlight_row(): void;
  get_activate_on_single_click(): boolean;
  get_adjustment(): Adjustment;
  get_row_at_index(index_: number): ListBoxRow | null;
  get_row_at_y(y: number): ListBoxRow | null;
  get_selected_row(): ListBoxRow;
  get_selected_rows(): GLib.List;
  get_selection_mode(): SelectionMode;
  insert(child: Widget, position: number): void;
  invalidate_filter(): void;
  invalidate_headers(): void;
  invalidate_sort(): void;
  prepend(child: Widget): void;
  select_all(...args: any[]): any;
  select_row(row: ListBoxRow | null): void;
  selected_foreach(func: ListBoxForeachFunc, data: object | null): void;
  set_activate_on_single_click(single: boolean): void;
  set_adjustment(adjustment: Adjustment | null): void;
  set_filter_func(filter_func: ListBoxFilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
  set_header_func(update_header: ListBoxUpdateHeaderFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
  set_placeholder(placeholder: Widget | null): void;
  set_selection_mode(mode: SelectionMode): void;
  set_sort_func(sort_func: ListBoxSortFunc | null, user_data: object | null, destroy: GLib.DestroyNotify): void;
  unselect_all(...args: any[]): any;
  unselect_row(row: ListBoxRow): void;
  activate_cursor_row(): void;
  move_cursor(step: MovementStep, count: number): void;
  row_activated(row: ListBoxRow): void;
  row_selected(row: ListBoxRow): void;
  select_all(...args: any[]): any;
  selected_rows_changed(): void;
  toggle_cursor_row(): void;
  unselect_all(...args: any[]): any;
}
export class ListBoxAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class ListBoxRow extends Bin {
  constructor();
  activatable: boolean;
  selectable: boolean;
  static parent_instance: Bin;
  changed(): void;
  get_activatable(): boolean;
  get_header(): Widget | null;
  get_index(): number;
  get_selectable(): boolean;
  is_selected(): boolean;
  set_activatable(activatable: boolean): void;
  set_header(header: Widget | null): void;
  set_selectable(selectable: boolean): void;
  activate(): void;
}
export class ListBoxRowAccessible extends ContainerAccessible {
  static parent: any;
}
export class ListStore extends GObject.Object {
  constructor(n_columns: number, ...args: any[]);
  static parent: GObject.Object;
  static priv: ListStorePrivate;
  append(iter: TreeIter): void;
  clear(): void;
  insert(iter: TreeIter, position: number): void;
  insert_after(iter: TreeIter, sibling: TreeIter | null): void;
  insert_before(iter: TreeIter, sibling: TreeIter | null): void;
  insert_with_values(iter?: TreeIter, position?: number, ...args: any[]): void;
  insert_with_valuesv(iter?: TreeIter, position?: number, columns?: number[], values?: GObject.Value[], n_values?: number): void;
  iter_is_valid(iter: TreeIter): boolean;
  move_after(iter: TreeIter, position: TreeIter | null): void;
  move_before(iter: TreeIter, position: TreeIter | null): void;
  prepend(iter: TreeIter): void;
  remove(iter: TreeIter): boolean;
  reorder(new_order: number[]): void;
  set(iter: TreeIter, ...args: any[]): void;
  set_column_types(n_columns: number, types: any[]): void;
  set_valist(iter: TreeIter, var_args: any): void;
  set_value(iter: TreeIter, column: number, value: GObject.Value): void;
  set_valuesv(iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number): void;
  swap(a: TreeIter, b: TreeIter): void;
}
export class LockButton extends Button {
  constructor(permission: Gio.Permission | null);
  permission: Gio.Permission;
  'text-lock': string;
  'text-unlock': string;
  'tooltip-lock': string;
  'tooltip-not-authorized': string;
  'tooltip-unlock': string;
  static parent: Button;
  static priv: any;
  get_permission(): Gio.Permission;
  set_permission(permission: Gio.Permission | null): void;
}
export class LockButtonAccessible extends ButtonAccessible {
  static parent: any;
  static priv: any;
}
export class Menu extends MenuShell {
  constructor();
  'accel-group': AccelGroup;
  'accel-path': string;
  active: number;
  'anchor-hints': Gdk.AnchorHints;
  'attach-widget': Widget;
  'menu-type-hint': Gdk.WindowTypeHint;
  monitor: number;
  'rect-anchor-dx': number;
  'rect-anchor-dy': number;
  'reserve-toggle-size': boolean;
  'tearoff-state': boolean;
  'tearoff-title': string;
  static menu_shell: MenuShell;
  static priv: any;
  attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
  attach_to_widget(attach_widget: Widget, detacher: MenuDetachFunc | null): void;
  detach(): void;
  get_accel_group(): AccelGroup;
  get_accel_path(): string;
  get_active(): Widget;
  get_attach_widget(): Widget;
  get_monitor(): number;
  get_reserve_toggle_size(): boolean;
  get_tearoff_state(): boolean;
  get_title(): string;
  place_on_monitor(monitor: Gdk.Monitor): void;
  popdown(): void;
  popup(parent_menu_shell: Widget | null, parent_menu_item: Widget | null, func: MenuPositionFunc | null, data: object | null, button: number, activate_time: number): void;
  popup_at_pointer(trigger_event: Gdk.Event | null): void;
  popup_at_rect(rect_window: Gdk.Window, rect: Gdk.Rectangle, rect_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event: Gdk.Event | null): void;
  popup_at_widget(widget: Widget, widget_anchor: Gdk.Gravity, menu_anchor: Gdk.Gravity, trigger_event: Gdk.Event | null): void;
  popup_for_device(device: Gdk.Device | null, parent_menu_shell: Widget | null, parent_menu_item: Widget | null, func: MenuPositionFunc | null, data: object | null, destroy: GLib.DestroyNotify | null, button: number, activate_time: number): void;
  reorder_child(child: Widget, position: number): void;
  reposition(): void;
  set_accel_group(accel_group: AccelGroup | null): void;
  set_accel_path(accel_path: string | null): void;
  set_active(index: number): void;
  set_monitor(monitor_num: number): void;
  set_reserve_toggle_size(reserve_toggle_size: boolean): void;
  set_screen(screen: Gdk.Screen | null): void;
  set_tearoff_state(torn_off: boolean): void;
  set_title(title: string | null): void;
  static get_for_attach_widget(widget: Widget): GLib.List;
}
export class MenuAccessible extends MenuShellAccessible {
  static parent: any;
  static priv: any;
}
export class MenuBar extends MenuShell {
  constructor();
  'child-pack-direction': PackDirection;
  'pack-direction': PackDirection;
  static menu_shell: MenuShell;
  static priv: any;
  get_child_pack_direction(): PackDirection;
  get_pack_direction(): PackDirection;
  set_child_pack_direction(child_pack_dir: PackDirection): void;
  set_pack_direction(pack_dir: PackDirection): void;
}
export class MenuButton extends ToggleButton {
  constructor();
  'align-widget': Container;
  direction: ArrowType;
  'menu-model': Gio.MenuModel;
  popover: Popover;
  popup: Menu;
  'use-popover': boolean;
  static parent: ToggleButton;
  static priv: any;
  get_align_widget(): Widget | null;
  get_direction(): ArrowType;
  get_menu_model(): Gio.MenuModel | null;
  get_popover(): Popover | null;
  get_popup(): Menu | null;
  get_use_popover(): boolean;
  set_align_widget(align_widget: Widget | null): void;
  set_direction(direction: ArrowType): void;
  set_menu_model(menu_model: Gio.MenuModel | null): void;
  set_popover(popover: Widget | null): void;
  set_popup(menu: Widget | null): void;
  set_use_popover(use_popover: boolean): void;
}
export class MenuButtonAccessible extends ToggleButtonAccessible {
  static parent: any;
  static priv: any;
}
export class MenuItem extends Bin {
  constructor();
  'accel-path': string;
  label: string;
  'right-justified': boolean;
  submenu: Menu;
  'use-underline': boolean;
  static bin: Bin;
  static priv: any;
  activate(...args: any[]): any;
  deselect(...args: any[]): any;
  get_accel_path(): string | null;
  get_label(...args: any[]): any;
  get_reserve_indicator(): boolean;
  get_right_justified(): boolean;
  get_submenu(): Widget | null;
  get_use_underline(): boolean;
  select(...args: any[]): any;
  set_accel_path(accel_path: string | null): void;
  set_label(...args: any[]): any;
  set_reserve_indicator(reserve: boolean): void;
  set_right_justified(right_justified: boolean): void;
  set_submenu(submenu: Menu | null): void;
  set_use_underline(setting: boolean): void;
  toggle_size_allocate(...args: any[]): any;
  toggle_size_request(...args: any[]): any;
  activate(...args: any[]): any;
  activate_item(): void;
  deselect(...args: any[]): any;
  get_label(...args: any[]): any;
  select(...args: any[]): any;
  set_label(...args: any[]): any;
  toggle_size_allocate(...args: any[]): any;
  toggle_size_request(...args: any[]): any;
}
export class MenuItemAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class MenuShell extends Container {
  'take-focus': boolean;
  static container: Container;
  static priv: any;
  activate_item(menu_item: Widget, force_deactivate: boolean): void;
  append(child: MenuItem): void;
  bind_model(model: Gio.MenuModel | null, action_namespace: string | null, with_separators: boolean): void;
  cancel(...args: any[]): any;
  deactivate(...args: any[]): any;
  deselect(): void;
  get_parent_shell(): Widget;
  get_selected_item(): Widget;
  get_take_focus(): boolean;
  insert(...args: any[]): any;
  prepend(child: Widget): void;
  select_first(search_sensitive: boolean): void;
  select_item(...args: any[]): any;
  set_take_focus(take_focus: boolean): void;
  activate_current(force_hide: boolean): void;
  cancel(...args: any[]): any;
  deactivate(...args: any[]): any;
  get_popup_delay(): number;
  insert(...args: any[]): any;
  move_current(direction: MenuDirectionType): void;
  move_selected(distance: number): boolean;
  select_item(...args: any[]): any;
  selection_done(): void;
}
export class MenuShellAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class MenuToolButton extends ToolButton {
  constructor(icon_widget: Widget | null, label: string | null);
  menu: Menu;
  static parent: any;
  static priv: any;
  get_menu(): Widget;
  set_arrow_tooltip_markup(markup: string): void;
  set_arrow_tooltip_text(text: string): void;
  set_menu(menu: Widget): void;
  show_menu(): void;
}
export class MessageDialog extends Dialog {
  constructor(parent: Window | null, flags: DialogFlags, type: MessageType, buttons: ButtonsType, message_format: string | null, ...args: any[]);
  buttons: ButtonsType;
  image: Widget;
  'message-area': Widget;
  'message-type': MessageType;
  'secondary-text': string;
  'secondary-use-markup': boolean;
  text: string;
  'use-markup': boolean;
  static parent_instance: Dialog;
  static priv: any;
  format_secondary_markup(message_format: string, ...args: any[]): void;
  format_secondary_text(message_format: string | null, ...args: any[]): void;
  get_image(): Widget;
  get_message_area(): Widget;
  set_image(image: Widget): void;
  set_markup(str: string): void;
}
export class Misc extends Widget {
  xalign: number;
  xpad: number;
  yalign: number;
  ypad: number;
  static widget: Widget;
  static priv: any;
  get_alignment(xalign?: number, yalign?: number): void;
  get_padding(xpad?: number, ypad?: number): void;
  set_alignment(xalign: number, yalign: number): void;
  set_padding(xpad: number, ypad: number): void;
}
export class ModelButton extends Button {
  constructor();
  active: boolean;
  centered: boolean;
  icon: Gio.Icon;
  iconic: boolean;
  inverted: boolean;
  'menu-name': string;
  role: ButtonRole;
  text: string;
  'use-markup': boolean;
}
export class MountOperation extends Gio.MountOperation {
  constructor(parent: Window | null);
  'is-showing': boolean;
  parent: Window;
  screen: Gdk.Screen;
  static parent_instance: Gio.MountOperation;
  static priv: MountOperationPrivate;
  get_parent(): Window;
  get_screen(): Gdk.Screen;
  is_showing(): boolean;
  set_parent(parent: Window | null): void;
  set_screen(screen: Gdk.Screen): void;
}
export class NativeDialog extends GObject.Object {
  modal: boolean;
  title: string;
  'transient-for': Window;
  visible: boolean;
  static parent_instance: GObject.Object;
  destroy(): void;
  get_modal(): boolean;
  get_title(): string | null;
  get_transient_for(): Window | null;
  get_visible(): boolean;
  hide(...args: any[]): any;
  run(): number;
  set_modal(modal: boolean): void;
  set_title(title: string): void;
  set_transient_for(parent: Window | null): void;
  show(...args: any[]): any;
  hide(...args: any[]): any;
  response(response_id: number): void;
  show(...args: any[]): any;
}
export class Notebook extends Container {
  constructor();
  'enable-popup': boolean;
  'group-name': string;
  page: number;
  scrollable: boolean;
  'show-border': boolean;
  'show-tabs': boolean;
  'tab-pos': PositionType;
  static container: Container;
  static priv: any;
  append_page(child: Widget, tab_label: Widget | null): number;
  append_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null): number;
  detach_tab(child: Widget): void;
  get_action_widget(pack_type: PackType): Widget | null;
  get_current_page(): number;
  get_group_name(): string | null;
  get_menu_label(child: Widget): Widget | null;
  get_menu_label_text(child: Widget): string | null;
  get_n_pages(): number;
  get_nth_page(page_num: number): Widget | null;
  get_scrollable(): boolean;
  get_show_border(): boolean;
  get_show_tabs(): boolean;
  get_tab_detachable(child: Widget): boolean;
  get_tab_hborder(): number;
  get_tab_label(child: Widget): Widget | null;
  get_tab_label_text(child: Widget): string | null;
  get_tab_pos(): PositionType;
  get_tab_reorderable(child: Widget): boolean;
  get_tab_vborder(): number;
  insert_page(...args: any[]): any;
  insert_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null, position: number): number;
  next_page(): void;
  page_num(child: Widget): number;
  popup_disable(): void;
  popup_enable(): void;
  prepend_page(child: Widget, tab_label: Widget | null): number;
  prepend_page_menu(child: Widget, tab_label: Widget | null, menu_label: Widget | null): number;
  prev_page(): void;
  remove_page(page_num: number): void;
  reorder_child(child: Widget, position: number): void;
  set_action_widget(widget: Widget, pack_type: PackType): void;
  set_current_page(page_num: number): void;
  set_group_name(group_name: string | null): void;
  set_menu_label(child: Widget, menu_label: Widget | null): void;
  set_menu_label_text(child: Widget, menu_text: string): void;
  set_scrollable(scrollable: boolean): void;
  set_show_border(show_border: boolean): void;
  set_show_tabs(show_tabs: boolean): void;
  set_tab_detachable(child: Widget, detachable: boolean): void;
  set_tab_label(child: Widget, tab_label: Widget | null): void;
  set_tab_label_text(child: Widget, tab_text: string): void;
  set_tab_pos(pos: PositionType): void;
  set_tab_reorderable(child: Widget, reorderable: boolean): void;
  change_current_page(offset: number): boolean;
  create_window(page: Widget, x: number, y: number): Notebook;
  focus_tab(type: NotebookTab): boolean;
  insert_page(...args: any[]): any;
  move_focus_out(direction: DirectionType): void;
  page_added(child: Widget, page_num: number): void;
  page_removed(child: Widget, page_num: number): void;
  page_reordered(child: Widget, page_num: number): void;
  reorder_tab(direction: DirectionType, move_to_last: boolean): boolean;
  select_page(move_focus: boolean): boolean;
  switch_page(page: Widget, page_num: number): void;
}
export class NotebookAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class NotebookPageAccessible extends Atk.Object {
  constructor(notebook: NotebookAccessible, child: Widget);
  static parent: Atk.Object;
  static priv: NotebookPageAccessiblePrivate;
  invalidate(): void;
}
export class NumerableIcon extends Gio.EmblemedIcon {
  'background-icon': Gio.Icon;
  'background-icon-name': string;
  count: number;
  label: string;
  'style-context': StyleContext;
  static parent: Gio.EmblemedIcon;
  static priv: NumerableIconPrivate;
  get_background_gicon(): Gio.Icon | null;
  get_background_icon_name(): string | null;
  get_count(): number;
  get_label(): string | null;
  get_style_context(): StyleContext | null;
  set_background_gicon(icon: Gio.Icon | null): void;
  set_background_icon_name(icon_name: string | null): void;
  set_count(count: number): void;
  set_label(label: string | null): void;
  set_style_context(style: StyleContext): void;
  static g_new(base_icon: Gio.Icon): Gio.Icon;
  static new_with_style_context(base_icon: Gio.Icon, context: StyleContext): Gio.Icon;
}
export class OffscreenWindow extends Window {
  constructor();
  static parent_object: Window;
  get_pixbuf(): GdkPixbuf.Pixbuf | null;
  get_surface(): cairo.Surface | null;
}
export class Overlay extends Bin {
  constructor();
  static parent: Bin;
  static priv: any;
  add_overlay(widget: Widget): void;
  get_overlay_pass_through(widget: Widget): boolean;
  reorder_overlay(child: Widget, index_: number): void;
  set_overlay_pass_through(widget: Widget, pass_through: boolean): void;
  get_child_position(widget: Widget, allocation: Allocation): boolean;
}
export class PadController extends EventController {
  constructor(window: Window, group: Gio.ActionGroup, pad: Gdk.Device | null);
  'action-group': Gio.ActionGroup;
  pad: Gdk.Device;
  set_action(type: PadActionType, index: number, mode: number, label: string, action_name: string): void;
  set_action_entries(entries: PadActionEntry[], n_entries: number): void;
}
export class PageSetup extends GObject.Object {
  constructor();
  copy(): PageSetup;
  get_bottom_margin(unit: Unit): number;
  get_left_margin(unit: Unit): number;
  get_orientation(): PageOrientation;
  get_page_height(unit: Unit): number;
  get_page_width(unit: Unit): number;
  get_paper_height(unit: Unit): number;
  get_paper_size(): PaperSize;
  get_paper_width(unit: Unit): number;
  get_right_margin(unit: Unit): number;
  get_top_margin(unit: Unit): number;
  load_file(file_name: any): boolean;
  load_key_file(key_file: GLib.KeyFile, group_name: string | null): boolean;
  set_bottom_margin(margin: number, unit: Unit): void;
  set_left_margin(margin: number, unit: Unit): void;
  set_orientation(orientation: PageOrientation): void;
  set_paper_size(size: PaperSize): void;
  set_paper_size_and_default_margins(size: PaperSize): void;
  set_right_margin(margin: number, unit: Unit): void;
  set_top_margin(margin: number, unit: Unit): void;
  to_file(file_name: any): boolean;
  to_gvariant(): GLib.Variant;
  to_key_file(key_file: GLib.KeyFile, group_name: string | null): void;
}
export class Paned extends Container {
  constructor(orientation: Orientation);
  'max-position': number;
  'min-position': number;
  position: number;
  'position-set': boolean;
  'wide-handle': boolean;
  static container: Container;
  static priv: any;
  add1(child: Widget): void;
  add2(child: Widget): void;
  get_child1(): Widget | null;
  get_child2(): Widget | null;
  get_handle_window(): Gdk.Window;
  get_position(): number;
  get_wide_handle(): boolean;
  pack1(child: Widget, resize: boolean, shrink: boolean): void;
  pack2(child: Widget, resize: boolean, shrink: boolean): void;
  set_position(position: number): void;
  set_wide_handle(wide: boolean): void;
  accept_position(): boolean;
  cancel_position(): boolean;
  cycle_child_focus(reverse: boolean): boolean;
  cycle_handle_focus(reverse: boolean): boolean;
  move_handle(scroll: ScrollType): boolean;
  toggle_handle_focus(): boolean;
}
export class PanedAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class PlacesSidebar extends ScrolledWindow {
  constructor();
  'local-only': boolean;
  location: Gio.File;
  'open-flags': PlacesOpenFlags;
  'populate-all': boolean;
  'show-connect-to-server': boolean;
  'show-desktop': boolean;
  'show-enter-location': boolean;
  'show-other-locations': boolean;
  'show-recent': boolean;
  'show-starred-location': boolean;
  'show-trash': boolean;
  add_shortcut(location: Gio.File): void;
  get_local_only(): boolean;
  get_location(): Gio.File | null;
  get_nth_bookmark(n: number): Gio.File | null;
  get_open_flags(): PlacesOpenFlags;
  get_show_connect_to_server(): boolean;
  get_show_desktop(): boolean;
  get_show_enter_location(): boolean;
  get_show_other_locations(): boolean;
  get_show_recent(): boolean;
  get_show_starred_location(): boolean;
  get_show_trash(): boolean;
  list_shortcuts(): GLib.SList;
  remove_shortcut(location: Gio.File): void;
  set_drop_targets_visible(visible: boolean, context: Gdk.DragContext): void;
  set_local_only(local_only: boolean): void;
  set_location(location: Gio.File | null): void;
  set_open_flags(flags: PlacesOpenFlags): void;
  set_show_connect_to_server(show_connect_to_server: boolean): void;
  set_show_desktop(show_desktop: boolean): void;
  set_show_enter_location(show_enter_location: boolean): void;
  set_show_other_locations(show_other_locations: boolean): void;
  set_show_recent(show_recent: boolean): void;
  set_show_starred_location(show_starred_location: boolean): void;
  set_show_trash(show_trash: boolean): void;
}
export class Plug extends Window {
  constructor(socket_id: xlib.Window);
  embedded: any;
  'socket-window': Gdk.Window;
  static window: Window;
  static priv: any;
  construct(socket_id: xlib.Window): void;
  construct_for_display(display: Gdk.Display, socket_id: xlib.Window): void;
  get_embedded(): boolean;
  get_id(): xlib.Window;
  get_socket_window(): Gdk.Window | null;
  embedded(...args: any[]): any;
}
export class Popover extends Bin {
  constructor(relative_to: Widget | null);
  'constrain-to': PopoverConstraint;
  modal: boolean;
  'pointing-to': Gdk.Rectangle;
  position: PositionType;
  'relative-to': Widget;
  'transitions-enabled': boolean;
  static parent_instance: Bin;
  static priv: any;
  bind_model(model: Gio.MenuModel | null, action_namespace: string | null): void;
  get_constrain_to(): PopoverConstraint;
  get_default_widget(): Widget | null;
  get_modal(): boolean;
  get_pointing_to(rect: Gdk.Rectangle): boolean;
  get_position(): PositionType;
  get_relative_to(): Widget;
  get_transitions_enabled(): boolean;
  popdown(): void;
  popup(): void;
  set_constrain_to(constraint: PopoverConstraint): void;
  set_default_widget(widget: Widget | null): void;
  set_modal(modal: boolean): void;
  set_pointing_to(rect: Gdk.Rectangle): void;
  set_position(position: PositionType): void;
  set_relative_to(relative_to: Widget | null): void;
  set_transitions_enabled(transitions_enabled: boolean): void;
  closed(): void;
}
export class PopoverAccessible extends ContainerAccessible {
  static parent: any;
}
export class PopoverMenu extends Popover {
  constructor();
  'visible-submenu': string;
  open_submenu(name: string): void;
}
export class PrintContext extends GObject.Object {
  create_pango_context(): Pango.Context;
  create_pango_layout(): Pango.Layout;
  get_cairo_context(): cairo.Context;
  get_dpi_x(): number;
  get_dpi_y(): number;
  get_hard_margins(top: number, bottom: number, left: number, right: number): boolean;
  get_height(): number;
  get_page_setup(): PageSetup;
  get_pango_fontmap(): Pango.FontMap;
  get_width(): number;
  set_cairo_context(cr: cairo.Context, dpi_x: number, dpi_y: number): void;
}
export class PrintOperation extends GObject.Object {
  constructor();
  'allow-async': boolean;
  'current-page': number;
  'custom-tab-label': string;
  'default-page-setup': PageSetup;
  'embed-page-setup': boolean;
  'export-filename': string;
  'has-selection': boolean;
  'job-name': string;
  'n-pages': number;
  'n-pages-to-print': number;
  'print-settings': PrintSettings;
  'show-progress': boolean;
  status: PrintStatus;
  'status-string': string;
  'support-selection': boolean;
  'track-print-status': boolean;
  unit: Unit;
  'use-full-page': boolean;
  static parent_instance: GObject.Object;
  static priv: PrintOperationPrivate;
  cancel(): void;
  draw_page_finish(): void;
  get_default_page_setup(): PageSetup;
  get_embed_page_setup(): boolean;
  get_error(): void;
  get_has_selection(): boolean;
  get_n_pages_to_print(): number;
  get_print_settings(): PrintSettings;
  get_status(): PrintStatus;
  get_status_string(): string;
  get_support_selection(): boolean;
  is_finished(): boolean;
  run(action: PrintOperationAction, parent: Window | null): PrintOperationResult;
  set_allow_async(allow_async: boolean): void;
  set_current_page(current_page: number): void;
  set_custom_tab_label(label: string | null): void;
  set_default_page_setup(default_page_setup: PageSetup | null): void;
  set_defer_drawing(): void;
  set_embed_page_setup(embed: boolean): void;
  set_export_filename(filename: any): void;
  set_has_selection(has_selection: boolean): void;
  set_job_name(job_name: string): void;
  set_n_pages(n_pages: number): void;
  set_print_settings(print_settings: PrintSettings | null): void;
  set_show_progress(show_progress: boolean): void;
  set_support_selection(support_selection: boolean): void;
  set_track_print_status(track_status: boolean): void;
  set_unit(unit: Unit): void;
  set_use_full_page(full_page: boolean): void;
  begin_print(context: PrintContext): void;
  create_custom_widget(): Widget;
  custom_widget_apply(widget: Widget): void;
  done(result: PrintOperationResult): void;
  draw_page(context: PrintContext, page_nr: number): void;
  end_print(context: PrintContext): void;
  paginate(context: PrintContext): boolean;
  preview(preview: any, context: PrintContext, parent: Window): boolean;
  request_page_setup(context: PrintContext, page_nr: number, setup: PageSetup): void;
  status_changed(): void;
  update_custom_widget(widget: Widget, setup: PageSetup, settings: PrintSettings): void;
}
export class PrintSettings extends GObject.Object {
  constructor();
  copy(): PrintSettings;
  foreach(func: PrintSettingsFunc, user_data: object | null): void;
  get(key: string): string;
  get_bool(key: string): boolean;
  get_collate(): boolean;
  get_default_source(): string;
  get_dither(): string;
  get_double(key: string): number;
  get_double_with_default(key: string, def: number): number;
  get_duplex(): PrintDuplex;
  get_finishings(): string;
  get_int(key: string): number;
  get_int_with_default(key: string, def: number): number;
  get_length(key: string, unit: Unit): number;
  get_media_type(): string;
  get_n_copies(): number;
  get_number_up(): number;
  get_number_up_layout(): NumberUpLayout;
  get_orientation(): PageOrientation;
  get_output_bin(): string;
  get_page_ranges(num_ranges: number): PageRange[];
  get_page_set(): PageSet;
  get_paper_height(unit: Unit): number;
  get_paper_size(): PaperSize;
  get_paper_width(unit: Unit): number;
  get_print_pages(): PrintPages;
  get_printer(): string;
  get_printer_lpi(): number;
  get_quality(): PrintQuality;
  get_resolution(): number;
  get_resolution_x(): number;
  get_resolution_y(): number;
  get_reverse(): boolean;
  get_scale(): number;
  get_use_color(): boolean;
  has_key(key: string): boolean;
  load_file(file_name: any): boolean;
  load_key_file(key_file: GLib.KeyFile, group_name: string | null): boolean;
  set(key: string, value: string | null): void;
  set_bool(key: string, value: boolean): void;
  set_collate(collate: boolean): void;
  set_default_source(default_source: string): void;
  set_dither(dither: string): void;
  set_double(key: string, value: number): void;
  set_duplex(duplex: PrintDuplex): void;
  set_finishings(finishings: string): void;
  set_int(key: string, value: number): void;
  set_length(key: string, value: number, unit: Unit): void;
  set_media_type(media_type: string): void;
  set_n_copies(num_copies: number): void;
  set_number_up(number_up: number): void;
  set_number_up_layout(number_up_layout: NumberUpLayout): void;
  set_orientation(orientation: PageOrientation): void;
  set_output_bin(output_bin: string): void;
  set_page_ranges(page_ranges: PageRange[], num_ranges: number): void;
  set_page_set(page_set: PageSet): void;
  set_paper_height(height: number, unit: Unit): void;
  set_paper_size(paper_size: PaperSize): void;
  set_paper_width(width: number, unit: Unit): void;
  set_print_pages(pages: PrintPages): void;
  set_printer(printer: string): void;
  set_printer_lpi(lpi: number): void;
  set_quality(quality: PrintQuality): void;
  set_resolution(resolution: number): void;
  set_resolution_xy(resolution_x: number, resolution_y: number): void;
  set_reverse(reverse: boolean): void;
  set_scale(scale: number): void;
  set_use_color(use_color: boolean): void;
  to_file(file_name: any): boolean;
  to_gvariant(): GLib.Variant;
  to_key_file(key_file: GLib.KeyFile, group_name: string | null): void;
  unset(key: string): void;
}
export class ProgressBar extends Widget {
  constructor();
  ellipsize: Pango.EllipsizeMode;
  fraction: number;
  inverted: boolean;
  'pulse-step': number;
  'show-text': boolean;
  text: string;
  static parent: any;
  static priv: any;
  get_ellipsize(): Pango.EllipsizeMode;
  get_fraction(): number;
  get_inverted(): boolean;
  get_pulse_step(): number;
  get_show_text(): boolean;
  get_text(): string | null;
  pulse(): void;
  set_ellipsize(mode: Pango.EllipsizeMode): void;
  set_fraction(fraction: number): void;
  set_inverted(inverted: boolean): void;
  set_pulse_step(fraction: number): void;
  set_show_text(show_text: boolean): void;
  set_text(text: string | null): void;
}
export class ProgressBarAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class RadioAction extends ToggleAction {
  constructor(name: string, label: string | null, tooltip: string | null, stock_id: string | null, value: number);
  'current-value': number;
  group: RadioAction;
  value: number;
  static parent: any;
  static private_data: any;
  get_current_value(): number;
  get_group(): GLib.SList;
  join_group(group_source: RadioAction | null): void;
  set_current_value(current_value: number): void;
  set_group(group: GLib.SList | null): void;
  changed(current: RadioAction): void;
}
export class RadioButton extends CheckButton {
  constructor(group: GLib.SList | null);
  group: RadioButton;
  static check_button: CheckButton;
  static priv: RadioButtonPrivate;
  get_group(): GLib.SList;
  join_group(group_source: RadioButton | null): void;
  set_group(group: GLib.SList | null): void;
  group_changed(): void;
}
export class RadioButtonAccessible extends ToggleButtonAccessible {
  static parent: any;
  static priv: any;
}
export class RadioMenuItem extends CheckMenuItem {
  constructor(group: GLib.SList | null);
  group: RadioMenuItem;
  static check_menu_item: CheckMenuItem;
  static priv: any;
  get_group(): GLib.SList;
  join_group(group_source: RadioMenuItem | null): void;
  set_group(group: GLib.SList | null): void;
  group_changed(): void;
}
export class RadioMenuItemAccessible extends CheckMenuItemAccessible {
  static parent: any;
  static priv: any;
}
export class RadioToolButton extends ToggleToolButton {
  constructor(group: GLib.SList | null);
  group: RadioToolButton;
  static parent: any;
  get_group(): GLib.SList;
  set_group(group: GLib.SList | null): void;
}
export class Range extends Widget {
  adjustment: Adjustment;
  'fill-level': number;
  inverted: boolean;
  'lower-stepper-sensitivity': SensitivityType;
  'restrict-to-fill-level': boolean;
  'round-digits': number;
  'show-fill-level': boolean;
  'upper-stepper-sensitivity': SensitivityType;
  static widget: Widget;
  static priv: any;
  get_adjustment(): Adjustment;
  get_fill_level(): number;
  get_flippable(): boolean;
  get_inverted(): boolean;
  get_lower_stepper_sensitivity(): SensitivityType;
  get_min_slider_size(): number;
  get_range_rect(range_rect: Gdk.Rectangle): void;
  get_restrict_to_fill_level(): boolean;
  get_round_digits(): number;
  get_show_fill_level(): boolean;
  get_slider_range(slider_start?: number, slider_end?: number): void;
  get_slider_size_fixed(): boolean;
  get_upper_stepper_sensitivity(): SensitivityType;
  get_value(): number;
  set_adjustment(adjustment: Adjustment): void;
  set_fill_level(fill_level: number): void;
  set_flippable(flippable: boolean): void;
  set_increments(step: number, page: number): void;
  set_inverted(setting: boolean): void;
  set_lower_stepper_sensitivity(sensitivity: SensitivityType): void;
  set_min_slider_size(min_size: number): void;
  set_range(min: number, max: number): void;
  set_restrict_to_fill_level(restrict_to_fill_level: boolean): void;
  set_round_digits(round_digits: number): void;
  set_show_fill_level(show_fill_level: boolean): void;
  set_slider_size_fixed(size_fixed: boolean): void;
  set_upper_stepper_sensitivity(sensitivity: SensitivityType): void;
  set_value(value: number): void;
  adjust_bounds(new_value: number): void;
  change_value(scroll: ScrollType, new_value: number): boolean;
  get_range_border(border_: Border): void;
  get_range_size_request(orientation: Orientation, minimum: number, natural: number): void;
  move_slider(scroll: ScrollType): void;
  value_changed(): void;
}
export class RangeAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class RcStyle extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static name: string;
  static bg_pixmap_name: string[];
  static font_desc: Pango.FontDescription;
  static color_flags: RcFlags[];
  static fg: Gdk.Color[];
  static bg: Gdk.Color[];
  static text: Gdk.Color[];
  static base: Gdk.Color[];
  static xthickness: number;
  static ythickness: number;
  static rc_properties: object[];
  static rc_style_lists: GLib.SList;
  static icon_factories: GLib.SList;
  static engine_specified: number;
  copy(): RcStyle;
  create_rc_style(): RcStyle;
  create_style(): Style;
  merge(src: RcStyle): void;
  parse(settings: Settings, scanner: GLib.Scanner): number;
}
export class RecentAction extends Action {
  constructor(name: string, label: string | null, tooltip: string | null, stock_id: string | null);
  'show-numbers': boolean;
  static parent_instance: Action;
  static priv: RecentActionPrivate;
  get_show_numbers(): boolean;
  set_show_numbers(show_numbers: boolean): void;
}
export class RecentChooserDialog extends Dialog {
  constructor(title: string | null, parent: Window | null, first_button_text: string | null, ...args: any[]);
  static parent_instance: Dialog;
  static priv: any;
}
export class RecentChooserMenu extends Menu {
  constructor();
  'show-numbers': boolean;
  static parent_instance: Menu;
  static priv: any;
  get_show_numbers(): boolean;
  set_show_numbers(show_numbers: boolean): void;
}
export class RecentChooserWidget extends Box {
  constructor();
  static parent_instance: Box;
  static priv: any;
}
export class RecentFilter extends GObject.InitiallyUnowned {
  constructor();
  add_age(days: number): void;
  add_application(application: string): void;
  add_custom(needed: RecentFilterFlags, func: RecentFilterFunc, data: object | null, data_destroy: GLib.DestroyNotify): void;
  add_group(group: string): void;
  add_mime_type(mime_type: string): void;
  add_pattern(pattern: string): void;
  add_pixbuf_formats(): void;
  filter(filter_info: RecentFilterInfo): boolean;
  get_name(): string | null;
  get_needed(): RecentFilterFlags;
  set_name(name: string): void;
}
export class RecentManager extends GObject.Object {
  constructor();
  filename: string;
  size: number;
  static parent_instance: GObject.Object;
  static priv: RecentManagerPrivate;
  add_full(uri: string, recent_data: RecentData): boolean;
  add_item(uri: string): boolean;
  get_items(): GLib.List;
  has_item(uri: string): boolean;
  lookup_item(uri: string): RecentInfo | null;
  move_item(uri: string, new_uri: string | null): boolean;
  purge_items(): number;
  remove_item(uri: string): boolean;
  changed(): void;
  static get_default(): RecentManager;
}
export class RendererCellAccessible extends CellAccessible {
  constructor(renderer: CellRenderer);
  renderer: CellRenderer;
  static parent: any;
  static priv: any;
}
export class Revealer extends Bin {
  constructor();
  'child-revealed': boolean;
  'reveal-child': boolean;
  'transition-duration': number;
  'transition-type': RevealerTransitionType;
  static parent_instance: Bin;
  get_child_revealed(): boolean;
  get_reveal_child(): boolean;
  get_transition_duration(): number;
  get_transition_type(): RevealerTransitionType;
  set_reveal_child(reveal_child: boolean): void;
  set_transition_duration(duration: number): void;
  set_transition_type(transition: RevealerTransitionType): void;
}
export class Scale extends Range {
  constructor(orientation: Orientation, adjustment: Adjustment | null);
  digits: number;
  'draw-value': boolean;
  'has-origin': boolean;
  'value-pos': PositionType;
  static range: Range;
  static priv: any;
  add_mark(value: number, position: PositionType, markup: string | null): void;
  clear_marks(): void;
  get_digits(): number;
  get_draw_value(): boolean;
  get_has_origin(): boolean;
  get_layout(): Pango.Layout | null;
  get_layout_offsets(...args: any[]): any;
  get_value_pos(): PositionType;
  set_digits(digits: number): void;
  set_draw_value(draw_value: boolean): void;
  set_has_origin(has_origin: boolean): void;
  set_value_pos(pos: PositionType): void;
  draw_value(): void;
  format_value(value: number): string;
  get_layout_offsets(...args: any[]): any;
}
export class ScaleAccessible extends RangeAccessible {
  static parent: any;
  static priv: any;
}
export class ScaleButton extends Button {
  constructor(size: number, min: number, max: number, step: number, icons: string[] | null);
  adjustment: Adjustment;
  icons: string[];
  size: IconSize;
  value: number;
  static parent: Button;
  static priv: any;
  get_adjustment(): Adjustment;
  get_minus_button(): Button;
  get_plus_button(): Button;
  get_popup(): Widget;
  get_value(): number;
  set_adjustment(adjustment: Adjustment): void;
  set_icons(icons: string[]): void;
  set_value(value: number): void;
  value_changed(value: number): void;
}
export class ScaleButtonAccessible extends ButtonAccessible {
  static parent: any;
  static priv: any;
}
export class Scrollbar extends Range {
  constructor(orientation: Orientation, adjustment: Adjustment | null);
  static range: Range;
}
export class ScrolledWindow extends Bin {
  constructor(hadjustment: Adjustment | null, vadjustment: Adjustment | null);
  hadjustment: Adjustment;
  'hscrollbar-policy': PolicyType;
  'kinetic-scrolling': boolean;
  'max-content-height': number;
  'max-content-width': number;
  'min-content-height': number;
  'min-content-width': number;
  'overlay-scrolling': boolean;
  'propagate-natural-height': boolean;
  'propagate-natural-width': boolean;
  'shadow-type': ShadowType;
  vadjustment: Adjustment;
  'vscrollbar-policy': PolicyType;
  'window-placement': CornerType;
  'window-placement-set': boolean;
  static container: any;
  static priv: any;
  add_with_viewport(child: Widget): void;
  get_capture_button_press(): boolean;
  get_hadjustment(): Adjustment;
  get_hscrollbar(): Widget;
  get_kinetic_scrolling(): boolean;
  get_max_content_height(): number;
  get_max_content_width(): number;
  get_min_content_height(): number;
  get_min_content_width(): number;
  get_overlay_scrolling(): boolean;
  get_placement(): CornerType;
  get_policy(hscrollbar_policy?: PolicyType, vscrollbar_policy?: PolicyType): void;
  get_propagate_natural_height(): boolean;
  get_propagate_natural_width(): boolean;
  get_shadow_type(): ShadowType;
  get_vadjustment(): Adjustment;
  get_vscrollbar(): Widget;
  set_capture_button_press(capture_button_press: boolean): void;
  set_hadjustment(hadjustment: Adjustment | null): void;
  set_kinetic_scrolling(kinetic_scrolling: boolean): void;
  set_max_content_height(height: number): void;
  set_max_content_width(width: number): void;
  set_min_content_height(height: number): void;
  set_min_content_width(width: number): void;
  set_overlay_scrolling(overlay_scrolling: boolean): void;
  set_placement(window_placement: CornerType): void;
  set_policy(hscrollbar_policy: PolicyType, vscrollbar_policy: PolicyType): void;
  set_propagate_natural_height(propagate: boolean): void;
  set_propagate_natural_width(propagate: boolean): void;
  set_shadow_type(type: ShadowType): void;
  set_vadjustment(vadjustment: Adjustment | null): void;
  unset_placement(): void;
  move_focus_out(direction: DirectionType): void;
  scroll_child(scroll: ScrollType, horizontal: boolean): boolean;
}
export class ScrolledWindowAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class SearchBar extends Bin {
  constructor();
  'search-mode-enabled': boolean;
  'show-close-button': boolean;
  static parent: Bin;
  connect_entry(entry: Entry): void;
  get_search_mode(): boolean;
  get_show_close_button(): boolean;
  handle_event(event: Gdk.Event): boolean;
  set_search_mode(search_mode: boolean): void;
  set_show_close_button(visible: boolean): void;
}
export class SearchEntry extends Entry {
  constructor();
  static parent: Entry;
  handle_event(event: Gdk.Event): boolean;
  next_match(): void;
  previous_match(): void;
  search_changed(): void;
  stop_search(): void;
}
export class Separator extends Widget {
  constructor(orientation: Orientation);
  static widget: Widget;
  static priv: any;
}
export class SeparatorMenuItem extends MenuItem {
  constructor();
  static menu_item: MenuItem;
}
export class SeparatorToolItem extends ToolItem {
  constructor();
  draw: boolean;
  static parent: any;
  static priv: any;
  get_draw(): boolean;
  set_draw(draw: boolean): void;
}
export class Settings extends GObject.Object {
  'color-hash': GLib.HashTable;
  'gtk-alternative-button-order': boolean;
  'gtk-alternative-sort-arrows': boolean;
  'gtk-application-prefer-dark-theme': boolean;
  'gtk-auto-mnemonics': boolean;
  'gtk-button-images': boolean;
  'gtk-can-change-accels': boolean;
  'gtk-color-palette': string;
  'gtk-color-scheme': string;
  'gtk-cursor-blink': boolean;
  'gtk-cursor-blink-time': number;
  'gtk-cursor-blink-timeout': number;
  'gtk-cursor-theme-name': string;
  'gtk-cursor-theme-size': number;
  'gtk-decoration-layout': string;
  'gtk-dialogs-use-header': boolean;
  'gtk-dnd-drag-threshold': number;
  'gtk-double-click-distance': number;
  'gtk-double-click-time': number;
  'gtk-enable-accels': boolean;
  'gtk-enable-animations': boolean;
  'gtk-enable-event-sounds': boolean;
  'gtk-enable-input-feedback-sounds': boolean;
  'gtk-enable-mnemonics': boolean;
  'gtk-enable-primary-paste': boolean;
  'gtk-enable-tooltips': boolean;
  'gtk-entry-password-hint-timeout': number;
  'gtk-entry-select-on-focus': boolean;
  'gtk-error-bell': boolean;
  'gtk-fallback-icon-theme': string;
  'gtk-file-chooser-backend': string;
  'gtk-font-name': string;
  'gtk-fontconfig-timestamp': number;
  'gtk-icon-sizes': string;
  'gtk-icon-theme-name': string;
  'gtk-im-module': string;
  'gtk-im-preedit-style': IMPreeditStyle;
  'gtk-im-status-style': IMStatusStyle;
  'gtk-key-theme-name': string;
  'gtk-keynav-cursor-only': boolean;
  'gtk-keynav-use-caret': boolean;
  'gtk-keynav-wrap-around': boolean;
  'gtk-label-select-on-focus': boolean;
  'gtk-long-press-time': number;
  'gtk-menu-bar-accel': string;
  'gtk-menu-bar-popup-delay': number;
  'gtk-menu-images': boolean;
  'gtk-menu-popdown-delay': number;
  'gtk-menu-popup-delay': number;
  'gtk-modules': string;
  'gtk-overlay-scrolling': boolean;
  'gtk-primary-button-warps-slider': boolean;
  'gtk-print-backends': string;
  'gtk-print-preview-command': string;
  'gtk-recent-files-enabled': boolean;
  'gtk-recent-files-limit': number;
  'gtk-recent-files-max-age': number;
  'gtk-scrolled-window-placement': CornerType;
  'gtk-shell-shows-app-menu': boolean;
  'gtk-shell-shows-desktop': boolean;
  'gtk-shell-shows-menubar': boolean;
  'gtk-show-input-method-menu': boolean;
  'gtk-show-unicode-menu': boolean;
  'gtk-sound-theme-name': string;
  'gtk-split-cursor': boolean;
  'gtk-theme-name': string;
  'gtk-timeout-expand': number;
  'gtk-timeout-initial': number;
  'gtk-timeout-repeat': number;
  'gtk-titlebar-double-click': string;
  'gtk-titlebar-middle-click': string;
  'gtk-titlebar-right-click': string;
  'gtk-toolbar-icon-size': IconSize;
  'gtk-toolbar-style': ToolbarStyle;
  'gtk-tooltip-browse-mode-timeout': number;
  'gtk-tooltip-browse-timeout': number;
  'gtk-tooltip-timeout': number;
  'gtk-touchscreen-mode': boolean;
  'gtk-visible-focus': PolicyType;
  'gtk-xft-antialias': number;
  'gtk-xft-dpi': number;
  'gtk-xft-hinting': number;
  'gtk-xft-hintstyle': string;
  'gtk-xft-rgba': string;
  static parent_instance: GObject.Object;
  static priv: SettingsPrivate;
  reset_property(name: string): void;
  set_double_property(name: string, v_double: number, origin: string): void;
  set_long_property(name: string, v_long: number, origin: string): void;
  set_property_value(name: string, svalue: SettingsValue): void;
  set_string_property(name: string, v_string: string, origin: string): void;
  static get_default(): Settings | null;
  static get_for_screen(screen: Gdk.Screen): Settings;
  static install_property(pspec: GObject.ParamSpec): void;
  static install_property_parser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;
}
export class ShortcutLabel extends Box {
  constructor(accelerator: string);
  accelerator: string;
  'disabled-text': string;
  get_accelerator(): string | null;
  get_disabled_text(): string | null;
  set_accelerator(accelerator: string): void;
  set_disabled_text(disabled_text: string): void;
}
export class ShortcutsGroup extends Box {
  'accel-size-group': SizeGroup;
  height: number;
  title: string;
  'title-size-group': SizeGroup;
  view: string;
}
export class ShortcutsSection extends Box {
  'max-height': number;
  'section-name': string;
  title: string;
  'view-name': string;
}
export class ShortcutsShortcut extends Box {
  'accel-size-group': SizeGroup;
  accelerator: string;
  'action-name': string;
  direction: TextDirection;
  icon: Gio.Icon;
  'icon-set': boolean;
  'shortcut-type': ShortcutType;
  subtitle: string;
  'subtitle-set': boolean;
  title: string;
  'title-size-group': SizeGroup;
}
export class ShortcutsWindow extends Window {
  'section-name': string;
  'view-name': string;
  static window: Window;
  close(...args: any[]): any;
  search(): void;
}
export class SizeGroup extends GObject.Object {
  constructor(mode: SizeGroupMode);
  'ignore-hidden': boolean;
  mode: SizeGroupMode;
  static parent_instance: GObject.Object;
  static priv: SizeGroupPrivate;
  add_widget(widget: Widget): void;
  get_ignore_hidden(): boolean;
  get_mode(): SizeGroupMode;
  get_widgets(): GLib.SList;
  remove_widget(widget: Widget): void;
  set_ignore_hidden(ignore_hidden: boolean): void;
  set_mode(mode: SizeGroupMode): void;
}
export class Socket extends Container {
  constructor();
  static container: Container;
  static priv: any;
  add_id(window: xlib.Window): void;
  get_id(): xlib.Window;
  get_plug_window(): Gdk.Window | null;
  plug_added(): void;
  plug_removed(): boolean;
}
export class SpinButton extends Entry {
  constructor(adjustment: Adjustment | null, climb_rate: number, digits: number);
  adjustment: Adjustment;
  'climb-rate': number;
  digits: number;
  numeric: boolean;
  'snap-to-ticks': boolean;
  'update-policy': SpinButtonUpdatePolicy;
  value: number;
  wrap: boolean;
  static entry: Entry;
  static priv: any;
  configure(adjustment: Adjustment | null, climb_rate: number, digits: number): void;
  get_adjustment(): Adjustment;
  get_digits(): number;
  get_increments(step?: number, page?: number): void;
  get_numeric(): boolean;
  get_range(min?: number, max?: number): void;
  get_snap_to_ticks(): boolean;
  get_update_policy(): SpinButtonUpdatePolicy;
  get_value(): number;
  get_value_as_int(): number;
  get_wrap(): boolean;
  set_adjustment(adjustment: Adjustment): void;
  set_digits(digits: number): void;
  set_increments(step: number, page: number): void;
  set_numeric(numeric: boolean): void;
  set_range(min: number, max: number): void;
  set_snap_to_ticks(snap_to_ticks: boolean): void;
  set_update_policy(policy: SpinButtonUpdatePolicy): void;
  set_value(value: number): void;
  set_wrap(wrap: boolean): void;
  spin(direction: SpinType, increment: number): void;
  update(): void;
  change_value(scroll: ScrollType): void;
  input(new_value: number): number;
  output(): number;
  value_changed(): void;
  wrapped(): void;
}
export class SpinButtonAccessible extends EntryAccessible {
  static parent: any;
  static priv: any;
}
export class Spinner extends Widget {
  constructor();
  active: boolean;
  static parent: any;
  static priv: any;
  start(): void;
  stop(): void;
}
export class SpinnerAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class Stack extends Container {
  constructor();
  hhomogeneous: boolean;
  homogeneous: boolean;
  'interpolate-size': boolean;
  'transition-duration': number;
  'transition-running': boolean;
  'transition-type': StackTransitionType;
  vhomogeneous: boolean;
  'visible-child': Widget;
  'visible-child-name': string;
  static parent_instance: Container;
  add_named(child: Widget, name: string): void;
  add_titled(child: Widget, name: string, title: string): void;
  get_child_by_name(name: string): Widget | null;
  get_hhomogeneous(): boolean;
  get_homogeneous(): boolean;
  get_interpolate_size(): boolean;
  get_transition_duration(): number;
  get_transition_running(): boolean;
  get_transition_type(): StackTransitionType;
  get_vhomogeneous(): boolean;
  get_visible_child(): Widget | null;
  get_visible_child_name(): string | null;
  set_hhomogeneous(hhomogeneous: boolean): void;
  set_homogeneous(homogeneous: boolean): void;
  set_interpolate_size(interpolate_size: boolean): void;
  set_transition_duration(duration: number): void;
  set_transition_type(transition: StackTransitionType): void;
  set_vhomogeneous(vhomogeneous: boolean): void;
  set_visible_child(child: Widget): void;
  set_visible_child_full(name: string, transition: StackTransitionType): void;
  set_visible_child_name(name: string): void;
}
export class StackAccessible extends ContainerAccessible {
  static parent: any;
}
export class StackSidebar extends Bin {
  constructor();
  stack: Stack;
  static parent: Bin;
  get_stack(): Stack | null;
  set_stack(stack: Stack): void;
}
export class StackSwitcher extends Box {
  constructor();
  'icon-size': number;
  stack: Stack;
  static widget: Box;
  get_stack(): Stack | null;
  set_stack(stack: Stack | null): void;
}
export class StatusIcon extends GObject.Object {
  constructor();
  embedded: boolean;
  file: string;
  gicon: Gio.Icon;
  'has-tooltip': boolean;
  'icon-name': string;
  orientation: Orientation;
  pixbuf: GdkPixbuf.Pixbuf;
  screen: Gdk.Screen;
  size: number;
  stock: string;
  'storage-type': ImageType;
  title: string;
  'tooltip-markup': string;
  'tooltip-text': string;
  visible: boolean;
  static parent_instance: GObject.Object;
  static priv: StatusIconPrivate;
  get_geometry(screen?: Gdk.Screen, area?: Gdk.Rectangle, orientation?: Orientation): boolean;
  get_gicon(): Gio.Icon | null;
  get_has_tooltip(): boolean;
  get_icon_name(): string | null;
  get_pixbuf(): GdkPixbuf.Pixbuf | null;
  get_screen(): Gdk.Screen;
  get_size(): number;
  get_stock(): string | null;
  get_storage_type(): ImageType;
  get_title(): string;
  get_tooltip_markup(): string | null;
  get_tooltip_text(): string | null;
  get_visible(): boolean;
  get_x11_window_id(): number;
  is_embedded(): boolean;
  set_from_file(filename: any): void;
  set_from_gicon(icon: Gio.Icon): void;
  set_from_icon_name(icon_name: string): void;
  set_from_pixbuf(pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_from_stock(stock_id: string): void;
  set_has_tooltip(has_tooltip: boolean): void;
  set_name(name: string): void;
  set_screen(screen: Gdk.Screen): void;
  set_title(title: string): void;
  set_tooltip_markup(markup: string | null): void;
  set_tooltip_text(text: string): void;
  set_visible(visible: boolean): void;
  activate(): void;
  button_press_event(event: Gdk.EventButton): boolean;
  button_release_event(event: Gdk.EventButton): boolean;
  popup_menu(button: number, activate_time: number): void;
  query_tooltip(x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip): boolean;
  scroll_event(event: Gdk.EventScroll): boolean;
  size_changed(size: number): boolean;
  static position_menu(menu: Menu, x: number, y: number, push_in: boolean, user_data: StatusIcon): void;
}
export class Statusbar extends Box {
  constructor();
  static parent_widget: Box;
  static priv: any;
  get_context_id(context_description: string): number;
  get_message_area(): Box;
  pop(context_id: number): void;
  push(context_id: number, text: string): number;
  remove(context_id: number, message_id: number): void;
  remove_all(context_id: number): void;
  text_popped(context_id: number, text: string): void;
  text_pushed(context_id: number, text: string): void;
}
export class StatusbarAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class Style extends GObject.Object {
  constructor();
  context: StyleContext;
  static parent_instance: GObject.Object;
  static fg: Gdk.Color[];
  static bg: Gdk.Color[];
  static light: Gdk.Color[];
  static dark: Gdk.Color[];
  static mid: Gdk.Color[];
  static text: Gdk.Color[];
  static base: Gdk.Color[];
  static text_aa: Gdk.Color[];
  static black: Gdk.Color;
  static white: Gdk.Color;
  static font_desc: Pango.FontDescription;
  static xthickness: number;
  static ythickness: number;
  static background: cairo.Pattern[];
  static attach_count: number;
  static visual: Gdk.Visual;
  static private_font_desc: Pango.FontDescription;
  static rc_style: RcStyle;
  static styles: GLib.SList;
  static property_cache: object[];
  static icon_factories: GLib.SList;
  apply_default_background(cr: cairo.Context, window: Gdk.Window, state_type: StateType, x: number, y: number, width: number, height: number): void;
  attach(window: Gdk.Window): Style;
  copy(...args: any[]): any;
  detach(): void;
  get(widget_type: any, first_property_name: string, ...args: any[]): void;
  get_style_property(widget_type: any, property_name: string, value: GObject.Value): void;
  get_valist(widget_type: any, first_property_name: string, var_args: any): void;
  has_context(): boolean;
  lookup_color(color_name: string, color: Gdk.Color): boolean;
  lookup_icon_set(stock_id: string): IconSet;
  render_icon(...args: any[]): any;
  set_background(...args: any[]): any;
  clone(): Style;
  copy(...args: any[]): any;
  draw_arrow(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;
  draw_box(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_box_gap(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
  draw_check(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_diamond(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_expander(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, expander_style: ExpanderStyle): void;
  draw_extension(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
  draw_flat_box(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_focus(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_handle(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation): void;
  draw_hline(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x1: number, x2: number, y: number): void;
  draw_layout(cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget, detail: string, x: number, y: number, layout: Pango.Layout): void;
  draw_option(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_resize_grip(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number): void;
  draw_shadow(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_shadow_gap(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
  draw_slider(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation): void;
  draw_spinner(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, step: number, x: number, y: number, width: number, height: number): void;
  draw_tab(cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number): void;
  draw_vline(cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number): void;
  init_from_rc(rc_style: RcStyle): void;
  realize(): void;
  render_icon(...args: any[]): any;
  set_background(...args: any[]): any;
  unrealize(): void;
}
export class StyleContext extends GObject.Object {
  constructor();
  direction: TextDirection;
  'paint-clock': Gdk.FrameClock;
  parent: StyleContext;
  screen: Gdk.Screen;
  static parent_object: GObject.Object;
  static priv: StyleContextPrivate;
  add_class(class_name: string): void;
  add_provider(provider: any, priority: number): void;
  add_region(region_name: string, flags: RegionFlags): void;
  cancel_animations(region_id: object | null): void;
  get(state: StateFlags, ...args: any[]): void;
  get_background_color(state: StateFlags, color: Gdk.RGBA): void;
  get_border(state: StateFlags, border: Border): void;
  get_border_color(state: StateFlags, color: Gdk.RGBA): void;
  get_color(state: StateFlags, color: Gdk.RGBA): void;
  get_direction(): TextDirection;
  get_font(state: StateFlags): Pango.FontDescription;
  get_frame_clock(): Gdk.FrameClock | null;
  get_junction_sides(): JunctionSides;
  get_margin(state: StateFlags, margin: Border): void;
  get_padding(state: StateFlags, padding: Border): void;
  get_parent(): StyleContext | null;
  get_path(): WidgetPath;
  get_property(property: string, state: StateFlags, value: GObject.Value): void;
  get_scale(): number;
  get_screen(): Gdk.Screen;
  get_section(property: string): CssSection | null;
  get_state(): StateFlags;
  get_style(...args: any[]): void;
  get_style_property(property_name: string, value: GObject.Value): void;
  get_style_valist(args: any): void;
  get_valist(state: StateFlags, args: any): void;
  has_class(class_name: string): boolean;
  has_region(region_name: string, flags_return?: RegionFlags): boolean;
  invalidate(): void;
  list_classes(): GLib.List;
  list_regions(): GLib.List;
  lookup_color(color_name: string, color: Gdk.RGBA): boolean;
  lookup_icon_set(stock_id: string): IconSet | null;
  notify_state_change(window: Gdk.Window, region_id: object | null, state: StateType, state_value: boolean): void;
  pop_animatable_region(): void;
  push_animatable_region(region_id: object | null): void;
  remove_class(class_name: string): void;
  remove_provider(provider: any): void;
  remove_region(region_name: string): void;
  restore(): void;
  save(): void;
  scroll_animations(window: Gdk.Window, dx: number, dy: number): void;
  set_background(window: Gdk.Window): void;
  set_direction(direction: TextDirection): void;
  set_frame_clock(frame_clock: Gdk.FrameClock): void;
  set_junction_sides(sides: JunctionSides): void;
  set_parent(parent: StyleContext | null): void;
  set_path(path: WidgetPath): void;
  set_scale(scale: number): void;
  set_screen(screen: Gdk.Screen): void;
  set_state(flags: StateFlags): void;
  state_is_running(state: StateType, progress: number): boolean;
  to_string(flags: StyleContextPrintFlags): string;
  changed(): void;
  static add_provider_for_screen(screen: Gdk.Screen, provider: any, priority: number): void;
  static remove_provider_for_screen(screen: Gdk.Screen, provider: any): void;
  static reset_widgets(screen: Gdk.Screen): void;
}
export class StyleProperties extends GObject.Object {
  constructor();
  static parent_object: GObject.Object;
  static priv: StylePropertiesPrivate;
  clear(): void;
  get(state: StateFlags, ...args: any[]): void;
  get_property(property: string, state: StateFlags, value: GObject.Value): boolean;
  get_valist(state: StateFlags, args: any): void;
  lookup_color(name: string): SymbolicColor;
  map_color(name: string, color: SymbolicColor): void;
  merge(props_to_merge: StyleProperties, replace: boolean): void;
  set(state: StateFlags, ...args: any[]): void;
  set_property(property: string, state: StateFlags, value: GObject.Value): void;
  set_valist(state: StateFlags, args: any): void;
  unset_property(property: string, state: StateFlags): void;
  static lookup_property(property_name: string, parse_func: StylePropertyParser, pspec: GObject.ParamSpec): boolean;
  static register_property(parse_func: StylePropertyParser | null, pspec: GObject.ParamSpec): void;
}
export class Switch extends Widget {
  constructor();
  active: boolean;
  state: boolean;
  static parent_instance: any;
  static priv: any;
  get_active(): boolean;
  get_state(...args: any[]): any;
  set_active(is_active: boolean): void;
  set_state(...args: any[]): any;
  activate(...args: any[]): any;
  state_set(state: boolean): boolean;
}
export class SwitchAccessible extends WidgetAccessible {
  static parent: any;
  static priv: any;
}
export class Table extends Container {
  constructor(rows: number, columns: number, homogeneous: boolean);
  'column-spacing': number;
  homogeneous: boolean;
  'n-columns': number;
  'n-rows': number;
  'row-spacing': number;
  static container: Container;
  static priv: any;
  attach(child: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number, xoptions: AttachOptions, yoptions: AttachOptions, xpadding: number, ypadding: number): void;
  attach_defaults(widget: Widget, left_attach: number, right_attach: number, top_attach: number, bottom_attach: number): void;
  get_col_spacing(column: number): number;
  get_default_col_spacing(): number;
  get_default_row_spacing(): number;
  get_homogeneous(): boolean;
  get_row_spacing(row: number): number;
  get_size(rows?: number, columns?: number): void;
  resize(rows: number, columns: number): void;
  set_col_spacing(column: number, spacing: number): void;
  set_col_spacings(spacing: number): void;
  set_homogeneous(homogeneous: boolean): void;
  set_row_spacing(row: number, spacing: number): void;
  set_row_spacings(spacing: number): void;
}
export class TearoffMenuItem extends MenuItem {
  constructor();
  static menu_item: MenuItem;
  static priv: any;
}
export class TextBuffer extends GObject.Object {
  constructor(table: TextTagTable | null);
  'copy-target-list': TargetList;
  'cursor-position': number;
  'has-selection': boolean;
  'paste-target-list': TargetList;
  'tag-table': TextTagTable;
  text: string;
  static parent_instance: GObject.Object;
  static priv: TextBufferPrivate;
  add_mark(mark: TextMark, where: TextIter): void;
  add_selection_clipboard(clipboard: Clipboard): void;
  apply_tag(...args: any[]): any;
  apply_tag_by_name(name: string, start: TextIter, end: TextIter): void;
  backspace(iter: TextIter, interactive: boolean, default_editable: boolean): boolean;
  begin_user_action(...args: any[]): any;
  copy_clipboard(clipboard: Clipboard): void;
  create_child_anchor(iter: TextIter): TextChildAnchor;
  create_mark(mark_name: string | null, where: TextIter, left_gravity: boolean): TextMark;
  create_tag(tag_name: string | null, first_property_name: string | null, ...args: any[]): TextTag;
  cut_clipboard(clipboard: Clipboard, default_editable: boolean): void;
  g_delete(start: TextIter, end: TextIter): void;
  delete_interactive(start_iter: TextIter, end_iter: TextIter, default_editable: boolean): boolean;
  delete_mark(mark: TextMark): void;
  delete_mark_by_name(name: string): void;
  delete_selection(interactive: boolean, default_editable: boolean): boolean;
  deserialize(content_buffer: TextBuffer, format: Gdk.Atom, iter: TextIter, data: number[], length: number): boolean;
  deserialize_get_can_create_tags(format: Gdk.Atom): boolean;
  deserialize_set_can_create_tags(format: Gdk.Atom, can_create_tags: boolean): void;
  end_user_action(...args: any[]): any;
  get_bounds(start: TextIter, end: TextIter): void;
  get_char_count(): number;
  get_copy_target_list(): TargetList;
  get_deserialize_formats(n_formats: number): Gdk.Atom[];
  get_end_iter(iter: TextIter): void;
  get_has_selection(): boolean;
  get_insert(): TextMark;
  get_iter_at_child_anchor(iter: TextIter, anchor: TextChildAnchor): void;
  get_iter_at_line(iter: TextIter, line_number: number): void;
  get_iter_at_line_index(iter: TextIter, line_number: number, byte_index: number): void;
  get_iter_at_line_offset(iter: TextIter, line_number: number, char_offset: number): void;
  get_iter_at_mark(iter: TextIter, mark: TextMark): void;
  get_iter_at_offset(iter: TextIter, char_offset: number): void;
  get_line_count(): number;
  get_mark(name: string): TextMark | null;
  get_modified(): boolean;
  get_paste_target_list(): TargetList;
  get_selection_bound(): TextMark;
  get_selection_bounds(start: TextIter, end: TextIter): boolean;
  get_serialize_formats(n_formats: number): Gdk.Atom[];
  get_slice(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
  get_start_iter(iter: TextIter): void;
  get_tag_table(): TextTagTable;
  get_text(start: TextIter, end: TextIter, include_hidden_chars: boolean): string;
  insert(iter: TextIter, text: string, len: number): void;
  insert_at_cursor(text: string, len: number): void;
  insert_child_anchor(...args: any[]): any;
  insert_interactive(iter: TextIter, text: string, len: number, default_editable: boolean): boolean;
  insert_interactive_at_cursor(text: string, len: number, default_editable: boolean): boolean;
  insert_markup(iter: TextIter, markup: string, len: number): void;
  insert_pixbuf(...args: any[]): any;
  insert_range(iter: TextIter, start: TextIter, end: TextIter): void;
  insert_range_interactive(iter: TextIter, start: TextIter, end: TextIter, default_editable: boolean): boolean;
  insert_with_tags(iter: TextIter, text: string, len: number, first_tag: TextTag, ...args: any[]): void;
  insert_with_tags_by_name(iter: TextIter, text: string, len: number, first_tag_name: string, ...args: any[]): void;
  move_mark(mark: TextMark, where: TextIter): void;
  move_mark_by_name(name: string, where: TextIter): void;
  paste_clipboard(clipboard: Clipboard, override_location: TextIter | null, default_editable: boolean): void;
  place_cursor(where: TextIter): void;
  register_deserialize_format(mime_type: string, _function: TextBufferDeserializeFunc, user_data: object | null, user_data_destroy: GLib.DestroyNotify): Gdk.Atom;
  register_deserialize_tagset(tagset_name: string | null): Gdk.Atom;
  register_serialize_format(mime_type: string, _function: TextBufferSerializeFunc, user_data: object | null, user_data_destroy: GLib.DestroyNotify): Gdk.Atom;
  register_serialize_tagset(tagset_name: string | null): Gdk.Atom;
  remove_all_tags(start: TextIter, end: TextIter): void;
  remove_selection_clipboard(clipboard: Clipboard): void;
  remove_tag(...args: any[]): any;
  remove_tag_by_name(name: string, start: TextIter, end: TextIter): void;
  select_range(ins: TextIter, bound: TextIter): void;
  serialize(content_buffer: TextBuffer, format: Gdk.Atom, start: TextIter, end: TextIter, length: number): number[];
  set_modified(setting: boolean): void;
  set_text(text: string, len: number): void;
  unregister_deserialize_format(format: Gdk.Atom): void;
  unregister_serialize_format(format: Gdk.Atom): void;
  apply_tag(...args: any[]): any;
  begin_user_action(...args: any[]): any;
  changed(): void;
  delete_range(start: TextIter, end: TextIter): void;
  end_user_action(...args: any[]): any;
  insert_child_anchor(...args: any[]): any;
  insert_pixbuf(...args: any[]): any;
  insert_text(pos: TextIter, new_text: string, new_text_length: number): void;
  mark_deleted(mark: TextMark): void;
  mark_set(location: TextIter, mark: TextMark): void;
  modified_changed(): void;
  paste_done(clipboard: Clipboard): void;
  remove_tag(...args: any[]): any;
}
export class TextCellAccessible extends RendererCellAccessible {
  static parent: any;
  static priv: any;
}
export class TextChildAnchor extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static segment: object;
  get_deleted(): boolean;
  get_widgets(): GLib.List;
}
export class TextMark extends GObject.Object {
  constructor(name: string | null, left_gravity: boolean);
  'left-gravity': boolean;
  name: string;
  static parent_instance: GObject.Object;
  static segment: object;
  get_buffer(): TextBuffer;
  get_deleted(): boolean;
  get_left_gravity(): boolean;
  get_name(): string | null;
  get_visible(): boolean;
  set_visible(setting: boolean): void;
}
export class TextTag extends GObject.Object {
  constructor(name: string | null);
  'accumulative-margin': boolean;
  background: string;
  'background-full-height': boolean;
  'background-full-height-set': boolean;
  'background-gdk': Gdk.Color;
  'background-rgba': Gdk.RGBA;
  'background-set': boolean;
  direction: TextDirection;
  editable: boolean;
  'editable-set': boolean;
  fallback: boolean;
  'fallback-set': boolean;
  family: string;
  'family-set': boolean;
  font: string;
  'font-desc': Pango.FontDescription;
  'font-features': string;
  'font-features-set': boolean;
  foreground: string;
  'foreground-gdk': Gdk.Color;
  'foreground-rgba': Gdk.RGBA;
  'foreground-set': boolean;
  indent: number;
  'indent-set': boolean;
  invisible: boolean;
  'invisible-set': boolean;
  justification: Justification;
  'justification-set': boolean;
  language: string;
  'language-set': boolean;
  'left-margin': number;
  'left-margin-set': boolean;
  'letter-spacing': number;
  'letter-spacing-set': boolean;
  name: string;
  'paragraph-background': string;
  'paragraph-background-gdk': Gdk.Color;
  'paragraph-background-rgba': Gdk.RGBA;
  'paragraph-background-set': boolean;
  'pixels-above-lines': number;
  'pixels-above-lines-set': boolean;
  'pixels-below-lines': number;
  'pixels-below-lines-set': boolean;
  'pixels-inside-wrap': number;
  'pixels-inside-wrap-set': boolean;
  'right-margin': number;
  'right-margin-set': boolean;
  rise: number;
  'rise-set': boolean;
  scale: number;
  'scale-set': boolean;
  size: number;
  'size-points': number;
  'size-set': boolean;
  stretch: Pango.Stretch;
  'stretch-set': boolean;
  strikethrough: boolean;
  'strikethrough-rgba': Gdk.RGBA;
  'strikethrough-rgba-set': boolean;
  'strikethrough-set': boolean;
  style: Pango.Style;
  'style-set': boolean;
  tabs: Pango.TabArray;
  'tabs-set': boolean;
  underline: Pango.Underline;
  'underline-rgba': Gdk.RGBA;
  'underline-rgba-set': boolean;
  'underline-set': boolean;
  variant: Pango.Variant;
  'variant-set': boolean;
  weight: number;
  'weight-set': boolean;
  'wrap-mode': WrapMode;
  'wrap-mode-set': boolean;
  static parent_instance: GObject.Object;
  static priv: TextTagPrivate;
  changed(size_changed: boolean): void;
  event(...args: any[]): any;
  get_priority(): number;
  set_priority(priority: number): void;
  event(...args: any[]): any;
}
export class TextTagTable extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: TextTagTablePrivate;
  add(tag: TextTag): boolean;
  foreach(func: TextTagTableForeach, data: object | null): void;
  get_size(): number;
  lookup(name: string): TextTag | null;
  remove(tag: TextTag): void;
  tag_added(tag: TextTag): void;
  tag_changed(tag: TextTag, size_changed: boolean): void;
  tag_removed(tag: TextTag): void;
}
export class TextView extends Container {
  constructor();
  'accepts-tab': boolean;
  'bottom-margin': number;
  buffer: TextBuffer;
  'cursor-visible': boolean;
  editable: boolean;
  'im-module': string;
  indent: number;
  'input-hints': InputHints;
  'input-purpose': InputPurpose;
  justification: Justification;
  'left-margin': number;
  monospace: boolean;
  overwrite: boolean;
  'pixels-above-lines': number;
  'pixels-below-lines': number;
  'pixels-inside-wrap': number;
  'populate-all': boolean;
  'right-margin': number;
  tabs: Pango.TabArray;
  'top-margin': number;
  'wrap-mode': WrapMode;
  static parent_instance: Container;
  static priv: any;
  add_child_at_anchor(child: Widget, anchor: TextChildAnchor): void;
  add_child_in_window(child: Widget, which_window: TextWindowType, xpos: number, ypos: number): void;
  backward_display_line(iter: TextIter): boolean;
  backward_display_line_start(iter: TextIter): boolean;
  buffer_to_window_coords(win: TextWindowType, buffer_x: number, buffer_y: number, window_x?: number, window_y?: number): void;
  forward_display_line(iter: TextIter): boolean;
  forward_display_line_end(iter: TextIter): boolean;
  get_accepts_tab(): boolean;
  get_border_window_size(type: TextWindowType): number;
  get_bottom_margin(): number;
  get_buffer(): TextBuffer;
  get_cursor_locations(iter: TextIter | null, strong?: Gdk.Rectangle, weak?: Gdk.Rectangle): void;
  get_cursor_visible(): boolean;
  get_default_attributes(): TextAttributes;
  get_editable(): boolean;
  get_hadjustment(): Adjustment;
  get_indent(): number;
  get_input_hints(): InputHints;
  get_input_purpose(): InputPurpose;
  get_iter_at_location(iter: TextIter, x: number, y: number): boolean;
  get_iter_at_position(iter: TextIter, trailing?: number, x?: number, y?: number): boolean;
  get_iter_location(iter: TextIter, location: Gdk.Rectangle): void;
  get_justification(): Justification;
  get_left_margin(): number;
  get_line_at_y(target_iter: TextIter, y: number, line_top: number): void;
  get_line_yrange(iter: TextIter, y: number, height: number): void;
  get_monospace(): boolean;
  get_overwrite(): boolean;
  get_pixels_above_lines(): number;
  get_pixels_below_lines(): number;
  get_pixels_inside_wrap(): number;
  get_right_margin(): number;
  get_tabs(): Pango.TabArray | null;
  get_top_margin(): number;
  get_vadjustment(): Adjustment;
  get_visible_rect(visible_rect: Gdk.Rectangle): void;
  get_window(win: TextWindowType): Gdk.Window | null;
  get_window_type(window: Gdk.Window): TextWindowType;
  get_wrap_mode(): WrapMode;
  im_context_filter_keypress(event: Gdk.EventKey): boolean;
  move_child(child: Widget, xpos: number, ypos: number): void;
  move_mark_onscreen(mark: TextMark): boolean;
  move_visually(iter: TextIter, count: number): boolean;
  place_cursor_onscreen(): boolean;
  reset_cursor_blink(): void;
  reset_im_context(): void;
  scroll_mark_onscreen(mark: TextMark): void;
  scroll_to_iter(iter: TextIter, within_margin: number, use_align: boolean, xalign: number, yalign: number): boolean;
  scroll_to_mark(mark: TextMark, within_margin: number, use_align: boolean, xalign: number, yalign: number): void;
  set_accepts_tab(accepts_tab: boolean): void;
  set_border_window_size(type: TextWindowType, size: number): void;
  set_bottom_margin(bottom_margin: number): void;
  set_buffer(buffer: TextBuffer | null): void;
  set_cursor_visible(setting: boolean): void;
  set_editable(setting: boolean): void;
  set_indent(indent: number): void;
  set_input_hints(hints: InputHints): void;
  set_input_purpose(purpose: InputPurpose): void;
  set_justification(justification: Justification): void;
  set_left_margin(left_margin: number): void;
  set_monospace(monospace: boolean): void;
  set_overwrite(overwrite: boolean): void;
  set_pixels_above_lines(pixels_above_lines: number): void;
  set_pixels_below_lines(pixels_below_lines: number): void;
  set_pixels_inside_wrap(pixels_inside_wrap: number): void;
  set_right_margin(right_margin: number): void;
  set_tabs(tabs: Pango.TabArray): void;
  set_top_margin(top_margin: number): void;
  set_wrap_mode(wrap_mode: WrapMode): void;
  starts_display_line(iter: TextIter): boolean;
  window_to_buffer_coords(win: TextWindowType, window_x: number, window_y: number, buffer_x?: number, buffer_y?: number): void;
  backspace(): void;
  copy_clipboard(): void;
  create_buffer(): TextBuffer;
  cut_clipboard(): void;
  delete_from_cursor(type: DeleteType, count: number): void;
  draw_layer(layer: TextViewLayer, cr: cairo.Context): void;
  extend_selection(granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter): boolean;
  insert_at_cursor(str: string): void;
  insert_emoji(): void;
  move_cursor(step: MovementStep, count: number, extend_selection: boolean): void;
  paste_clipboard(): void;
  populate_popup(popup: Widget): void;
  set_anchor(): void;
  toggle_overwrite(): void;
}
export class TextViewAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class ThemingEngine extends GObject.Object {
  name: string;
  static parent_object: GObject.Object;
  static priv: ThemingEnginePrivate;
  get(state: StateFlags, ...args: any[]): void;
  get_background_color(state: StateFlags, color: Gdk.RGBA): void;
  get_border(state: StateFlags, border: Border): void;
  get_border_color(state: StateFlags, color: Gdk.RGBA): void;
  get_color(state: StateFlags, color: Gdk.RGBA): void;
  get_direction(): TextDirection;
  get_font(state: StateFlags): Pango.FontDescription;
  get_junction_sides(): JunctionSides;
  get_margin(state: StateFlags, margin: Border): void;
  get_padding(state: StateFlags, padding: Border): void;
  get_path(): WidgetPath;
  get_property(property: string, state: StateFlags, value: GObject.Value): void;
  get_screen(): Gdk.Screen | null;
  get_state(): StateFlags;
  get_style(...args: any[]): void;
  get_style_property(property_name: string, value: GObject.Value): void;
  get_style_valist(args: any): void;
  get_valist(state: StateFlags, args: any): void;
  has_class(style_class: string): boolean;
  has_region(style_region: string, flags?: RegionFlags): boolean;
  lookup_color(color_name: string, color: Gdk.RGBA): boolean;
  state_is_running(state: StateType, progress: number): boolean;
  render_activity(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_arrow(cr: cairo.Context, angle: number, x: number, y: number, size: number): void;
  render_background(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_check(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_expander(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_extension(cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
  render_focus(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_frame(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_frame_gap(cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number): void;
  render_handle(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_icon(cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): void;
  render_icon_pixbuf(source: IconSource, size: IconSize): GdkPixbuf.Pixbuf;
  render_icon_surface(cr: cairo.Context, surface: cairo.Surface, x: number, y: number): void;
  render_layout(cr: cairo.Context, x: number, y: number, layout: Pango.Layout): void;
  render_line(cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
  render_option(cr: cairo.Context, x: number, y: number, width: number, height: number): void;
  render_slider(cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation): void;
  static load(name: string): ThemingEngine | null;
  static register_property(name_space: string, parse_func: StylePropertyParser | null, pspec: GObject.ParamSpec): void;
}
export class ToggleAction extends Action {
  constructor(name: string, label: string | null, tooltip: string | null, stock_id: string | null);
  active: boolean;
  'draw-as-radio': boolean;
  static parent: Action;
  static private_data: any;
  get_active(): boolean;
  get_draw_as_radio(): boolean;
  set_active(is_active: boolean): void;
  set_draw_as_radio(draw_as_radio: boolean): void;
  toggled(...args: any[]): any;
  toggled(...args: any[]): any;
}
export class ToggleButton extends Button {
  constructor();
  active: boolean;
  'draw-indicator': boolean;
  inconsistent: boolean;
  static button: Button;
  static priv: any;
  get_active(): boolean;
  get_inconsistent(): boolean;
  get_mode(): boolean;
  set_active(is_active: boolean): void;
  set_inconsistent(setting: boolean): void;
  set_mode(draw_indicator: boolean): void;
  toggled(...args: any[]): any;
  toggled(...args: any[]): any;
}
export class ToggleButtonAccessible extends ButtonAccessible {
  static parent: any;
  static priv: any;
}
export class ToggleToolButton extends ToolButton {
  constructor();
  active: boolean;
  static parent: any;
  static priv: any;
  get_active(): boolean;
  set_active(is_active: boolean): void;
  toggled(): void;
}
export class ToolButton extends ToolItem {
  constructor(icon_widget: Widget | null, label: string | null);
  'icon-name': string;
  'icon-widget': Widget;
  label: string;
  'label-widget': Widget;
  'stock-id': string;
  'use-underline': boolean;
  static parent: any;
  static priv: any;
  get_icon_name(): string | null;
  get_icon_widget(): Widget | null;
  get_label(): string | null;
  get_label_widget(): Widget | null;
  get_stock_id(): string;
  get_use_underline(): boolean;
  set_icon_name(icon_name: string | null): void;
  set_icon_widget(icon_widget: Widget | null): void;
  set_label(label: string | null): void;
  set_label_widget(label_widget: Widget | null): void;
  set_stock_id(stock_id: string | null): void;
  set_use_underline(use_underline: boolean): void;
  clicked(): void;
}
export class ToolItem extends Bin {
  constructor();
  'is-important': boolean;
  'visible-horizontal': boolean;
  'visible-vertical': boolean;
  static parent: Bin;
  static priv: any;
  get_ellipsize_mode(): Pango.EllipsizeMode;
  get_expand(): boolean;
  get_homogeneous(): boolean;
  get_icon_size(): number;
  get_is_important(): boolean;
  get_orientation(): Orientation;
  get_proxy_menu_item(menu_item_id: string): Widget | null;
  get_relief_style(): ReliefStyle;
  get_text_alignment(): number;
  get_text_orientation(): Orientation;
  get_text_size_group(): SizeGroup;
  get_toolbar_style(): ToolbarStyle;
  get_use_drag_window(): boolean;
  get_visible_horizontal(): boolean;
  get_visible_vertical(): boolean;
  rebuild_menu(): void;
  retrieve_proxy_menu_item(): Widget;
  set_expand(expand: boolean): void;
  set_homogeneous(homogeneous: boolean): void;
  set_is_important(is_important: boolean): void;
  set_proxy_menu_item(menu_item_id: string, menu_item: Widget | null): void;
  set_tooltip_markup(markup: string): void;
  set_tooltip_text(text: string): void;
  set_use_drag_window(use_drag_window: boolean): void;
  set_visible_horizontal(visible_horizontal: boolean): void;
  set_visible_vertical(visible_vertical: boolean): void;
  toolbar_reconfigured(...args: any[]): any;
  create_menu_proxy(): boolean;
  toolbar_reconfigured(...args: any[]): any;
}
export class ToolItemGroup extends Container {
  constructor(label: string);
  collapsed: boolean;
  ellipsize: Pango.EllipsizeMode;
  'header-relief': ReliefStyle;
  label: string;
  'label-widget': Widget;
  static parent_instance: Container;
  static priv: any;
  get_collapsed(): boolean;
  get_drop_item(x: number, y: number): ToolItem;
  get_ellipsize(): Pango.EllipsizeMode;
  get_header_relief(): ReliefStyle;
  get_item_position(item: ToolItem): number;
  get_label(): string;
  get_label_widget(): Widget;
  get_n_items(): number;
  get_nth_item(index: number): ToolItem;
  insert(item: ToolItem, position: number): void;
  set_collapsed(collapsed: boolean): void;
  set_ellipsize(ellipsize: Pango.EllipsizeMode): void;
  set_header_relief(style: ReliefStyle): void;
  set_item_position(item: ToolItem, position: number): void;
  set_label(label: string): void;
  set_label_widget(label_widget: Widget): void;
}
export class ToolPalette extends Container {
  constructor();
  'icon-size': IconSize;
  'icon-size-set': boolean;
  'toolbar-style': ToolbarStyle;
  static parent_instance: Container;
  static priv: any;
  add_drag_dest(widget: Widget, flags: DestDefaults, targets: ToolPaletteDragTargets, actions: Gdk.DragAction): void;
  get_drag_item(selection: SelectionData): Widget;
  get_drop_group(x: number, y: number): ToolItemGroup | null;
  get_drop_item(x: number, y: number): ToolItem | null;
  get_exclusive(group: ToolItemGroup): boolean;
  get_expand(group: ToolItemGroup): boolean;
  get_group_position(group: ToolItemGroup): number;
  get_hadjustment(): Adjustment;
  get_icon_size(): number;
  get_style(): ToolbarStyle;
  get_vadjustment(): Adjustment;
  set_drag_source(targets: ToolPaletteDragTargets): void;
  set_exclusive(group: ToolItemGroup, exclusive: boolean): void;
  set_expand(group: ToolItemGroup, expand: boolean): void;
  set_group_position(group: ToolItemGroup, position: number): void;
  set_icon_size(icon_size: number): void;
  set_style(style: ToolbarStyle): void;
  unset_icon_size(): void;
  unset_style(): void;
  static get_drag_target_group(): TargetEntry;
  static get_drag_target_item(): TargetEntry;
}
export class Toolbar extends Container {
  constructor();
  'icon-size': IconSize;
  'icon-size-set': boolean;
  'show-arrow': boolean;
  'toolbar-style': ToolbarStyle;
  static container: Container;
  static priv: any;
  get_drop_index(x: number, y: number): number;
  get_icon_size(): IconSize;
  get_item_index(item: ToolItem): number;
  get_n_items(): number;
  get_nth_item(n: number): ToolItem | null;
  get_relief_style(): ReliefStyle;
  get_show_arrow(): boolean;
  get_style(): ToolbarStyle;
  insert(item: ToolItem, pos: number): void;
  set_drop_highlight_item(tool_item: ToolItem | null, index_: number): void;
  set_icon_size(icon_size: IconSize): void;
  set_show_arrow(show_arrow: boolean): void;
  set_style(style: ToolbarStyle): void;
  unset_icon_size(): void;
  unset_style(): void;
  orientation_changed(orientation: Orientation): void;
  popup_context_menu(x: number, y: number, button_number: number): boolean;
  style_changed(style: ToolbarStyle): void;
}
export class Tooltip extends GObject.Object {
  set_custom(custom_widget: Widget | null): void;
  set_icon(pixbuf: GdkPixbuf.Pixbuf | null): void;
  set_icon_from_gicon(gicon: Gio.Icon | null, size: number): void;
  set_icon_from_icon_name(icon_name: string | null, size: number): void;
  set_icon_from_stock(stock_id: string | null, size: number): void;
  set_markup(markup: string | null): void;
  set_text(text: string | null): void;
  set_tip_area(rect: Gdk.Rectangle): void;
  static trigger_tooltip_query(display: Gdk.Display): void;
}
export class ToplevelAccessible extends Atk.Object {
  static parent: Atk.Object;
  static priv: ToplevelAccessiblePrivate;
  get_children(): GLib.List;
}
export class TreeModelFilter extends GObject.Object {
  'child-model': any;
  'virtual-root': TreePath;
  static parent: GObject.Object;
  static priv: TreeModelFilterPrivate;
  clear_cache(): void;
  convert_child_iter_to_iter(filter_iter: TreeIter, child_iter: TreeIter): boolean;
  convert_child_path_to_path(child_path: TreePath): TreePath | null;
  convert_iter_to_child_iter(child_iter: TreeIter, filter_iter: TreeIter): void;
  convert_path_to_child_path(filter_path: TreePath): TreePath | null;
  get_model(): any;
  refilter(): void;
  set_modify_func(n_columns: number, types: any[], func: TreeModelFilterModifyFunc, data: object | null, destroy: GLib.DestroyNotify | null): void;
  set_visible_column(column: number): void;
  set_visible_func(func: TreeModelFilterVisibleFunc, data: object | null, destroy: GLib.DestroyNotify | null): void;
  modify(child_model: any, iter: TreeIter, value: GObject.Value, column: number): void;
  visible(child_model: any, iter: TreeIter): boolean;
}
export class TreeModelSort extends GObject.Object {
  model: any;
  static parent: GObject.Object;
  static priv: TreeModelSortPrivate;
  clear_cache(): void;
  convert_child_iter_to_iter(sort_iter: TreeIter, child_iter: TreeIter): boolean;
  convert_child_path_to_path(child_path: TreePath): TreePath | null;
  convert_iter_to_child_iter(child_iter: TreeIter, sorted_iter: TreeIter): void;
  convert_path_to_child_path(sorted_path: TreePath): TreePath | null;
  get_model(): any;
  iter_is_valid(iter: TreeIter): boolean;
  reset_default_sort_func(): void;
}
export class TreeSelection extends GObject.Object {
  mode: SelectionMode;
  static parent: GObject.Object;
  static priv: TreeSelectionPrivate;
  count_selected_rows(): number;
  get_mode(): SelectionMode;
  get_select_function(): TreeSelectionFunc;
  get_selected(model?: any, iter?: TreeIter): boolean;
  get_selected_rows(model?: any): GLib.List;
  get_tree_view(): TreeView;
  get_user_data(): object | null;
  iter_is_selected(iter: TreeIter): boolean;
  path_is_selected(path: TreePath): boolean;
  select_all(): void;
  select_iter(iter: TreeIter): void;
  select_path(path: TreePath): void;
  select_range(start_path: TreePath, end_path: TreePath): void;
  selected_foreach(func: TreeSelectionForeachFunc, data: object | null): void;
  set_mode(type: SelectionMode): void;
  set_select_function(func: TreeSelectionFunc | null, data: object | null, destroy: GLib.DestroyNotify): void;
  unselect_all(): void;
  unselect_iter(iter: TreeIter): void;
  unselect_path(path: TreePath): void;
  unselect_range(start_path: TreePath, end_path: TreePath): void;
  changed(): void;
}
export class TreeStore extends GObject.Object {
  constructor(n_columns: number, ...args: any[]);
  static parent: GObject.Object;
  static priv: TreeStorePrivate;
  append(iter: TreeIter, parent: TreeIter | null): void;
  clear(): void;
  insert(iter: TreeIter, parent: TreeIter | null, position: number): void;
  insert_after(iter: TreeIter, parent: TreeIter | null, sibling: TreeIter | null): void;
  insert_before(iter: TreeIter, parent: TreeIter | null, sibling: TreeIter | null): void;
  insert_with_values(iter?: TreeIter, parent?: TreeIter | null, position?: number, ...args: any[]): void;
  insert_with_valuesv(iter?: TreeIter, parent?: TreeIter | null, position?: number, columns?: number[], values?: GObject.Value[], n_values?: number): void;
  is_ancestor(iter: TreeIter, descendant: TreeIter): boolean;
  iter_depth(iter: TreeIter): number;
  iter_is_valid(iter: TreeIter): boolean;
  move_after(iter: TreeIter, position: TreeIter | null): void;
  move_before(iter: TreeIter, position: TreeIter | null): void;
  prepend(iter: TreeIter, parent: TreeIter | null): void;
  remove(iter: TreeIter): boolean;
  reorder(parent: TreeIter | null, new_order: number[]): void;
  set(iter: TreeIter, ...args: any[]): void;
  set_column_types(n_columns: number, types: any[]): void;
  set_valist(iter: TreeIter, var_args: any): void;
  set_value(iter: TreeIter, column: number, value: GObject.Value): void;
  set_valuesv(iter: TreeIter, columns: number[], values: GObject.Value[], n_values: number): void;
  swap(a: TreeIter, b: TreeIter): void;
}
export class TreeView extends Container {
  constructor();
  'activate-on-single-click': boolean;
  'enable-grid-lines': TreeViewGridLines;
  'enable-search': boolean;
  'enable-tree-lines': boolean;
  'expander-column': TreeViewColumn;
  'fixed-height-mode': boolean;
  'headers-clickable': boolean;
  'headers-visible': boolean;
  'hover-expand': boolean;
  'hover-selection': boolean;
  'level-indentation': number;
  model: any;
  reorderable: boolean;
  'rubber-banding': boolean;
  'rules-hint': boolean;
  'search-column': number;
  'show-expanders': boolean;
  'tooltip-column': number;
  'ubuntu-almost-fixed-height-mode': boolean;
  static parent: Container;
  static priv: any;
  append_column(column: TreeViewColumn): number;
  collapse_all(): void;
  collapse_row(path: TreePath): boolean;
  columns_autosize(): void;
  convert_bin_window_to_tree_coords(bx: number, by: number, tx: number, ty: number): void;
  convert_bin_window_to_widget_coords(bx: number, by: number, wx: number, wy: number): void;
  convert_tree_to_bin_window_coords(tx: number, ty: number, bx: number, by: number): void;
  convert_tree_to_widget_coords(tx: number, ty: number, wx: number, wy: number): void;
  convert_widget_to_bin_window_coords(wx: number, wy: number, bx: number, by: number): void;
  convert_widget_to_tree_coords(wx: number, wy: number, tx: number, ty: number): void;
  create_row_drag_icon(path: TreePath): cairo.Surface;
  enable_model_drag_dest(targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
  enable_model_drag_source(start_button_mask: Gdk.ModifierType, targets: TargetEntry[], n_targets: number, actions: Gdk.DragAction): void;
  expand_all(): void;
  expand_row(path: TreePath, open_all: boolean): boolean;
  expand_to_path(path: TreePath): void;
  get_activate_on_single_click(): boolean;
  get_background_area(path: TreePath | null, column: TreeViewColumn | null, rect: Gdk.Rectangle): void;
  get_bin_window(): Gdk.Window | null;
  get_cell_area(path: TreePath | null, column: TreeViewColumn | null, rect: Gdk.Rectangle): void;
  get_column(n: number): TreeViewColumn | null;
  get_columns(): GLib.List;
  get_cursor(path?: TreePath, focus_column?: TreeViewColumn): void;
  get_dest_row_at_pos(drag_x: number, drag_y: number, path?: TreePath, pos?: TreeViewDropPosition): boolean;
  get_drag_dest_row(path?: TreePath, pos?: TreeViewDropPosition): void;
  get_enable_search(): boolean;
  get_enable_tree_lines(): boolean;
  get_expander_column(): TreeViewColumn;
  get_fixed_height_mode(): boolean;
  get_grid_lines(): TreeViewGridLines;
  get_hadjustment(): Adjustment;
  get_headers_clickable(): boolean;
  get_headers_visible(): boolean;
  get_hover_expand(): boolean;
  get_hover_selection(): boolean;
  get_level_indentation(): number;
  get_model(): any | null;
  get_n_columns(): number;
  get_path_at_pos(x: number, y: number, path?: TreePath, column?: TreeViewColumn, cell_x?: number, cell_y?: number): boolean;
  get_reorderable(): boolean;
  get_row_separator_func(): TreeViewRowSeparatorFunc;
  get_rubber_banding(): boolean;
  get_rules_hint(): boolean;
  get_search_column(): number;
  get_search_entry(): Entry;
  get_search_equal_func(): TreeViewSearchEqualFunc;
  get_search_position_func(): TreeViewSearchPositionFunc;
  get_selection(): TreeSelection;
  get_show_expanders(): boolean;
  get_tooltip_column(): number;
  get_tooltip_context(x: number, y: number, keyboard_tip: boolean, model?: any, path?: TreePath, iter?: TreeIter): boolean;
  get_vadjustment(): Adjustment;
  get_visible_range(start_path?: TreePath, end_path?: TreePath): boolean;
  get_visible_rect(visible_rect: Gdk.Rectangle): void;
  insert_column(column: TreeViewColumn, position: number): number;
  insert_column_with_attributes(position: number, title: string, cell: CellRenderer, ...args: any[]): number;
  insert_column_with_data_func(position: number, title: string, cell: CellRenderer, func: TreeCellDataFunc, data: object | null, dnotify: GLib.DestroyNotify): number;
  is_blank_at_pos(x: number, y: number, path?: TreePath, column?: TreeViewColumn, cell_x?: number, cell_y?: number): boolean;
  is_rubber_banding_active(): boolean;
  map_expanded_rows(func: TreeViewMappingFunc, data: object | null): void;
  move_column_after(column: TreeViewColumn, base_column: TreeViewColumn | null): void;
  remove_column(column: TreeViewColumn): number;
  row_activated(...args: any[]): any;
  row_expanded(...args: any[]): any;
  scroll_to_cell(path: TreePath | null, column: TreeViewColumn | null, use_align: boolean, row_align: number, col_align: number): void;
  scroll_to_point(tree_x: number, tree_y: number): void;
  set_activate_on_single_click(single: boolean): void;
  set_column_drag_function(func: TreeViewColumnDropFunc | null, user_data: object | null, destroy: GLib.DestroyNotify | null): void;
  set_cursor(path: TreePath, focus_column: TreeViewColumn | null, start_editing: boolean): void;
  set_cursor_on_cell(path: TreePath, focus_column: TreeViewColumn | null, focus_cell: CellRenderer | null, start_editing: boolean): void;
  set_destroy_count_func(func: TreeDestroyCountFunc | null, data: object | null, destroy: GLib.DestroyNotify | null): void;
  set_drag_dest_row(path: TreePath | null, pos: TreeViewDropPosition): void;
  set_enable_search(enable_search: boolean): void;
  set_enable_tree_lines(enabled: boolean): void;
  set_expander_column(column: TreeViewColumn | null): void;
  set_fixed_height_mode(enable: boolean): void;
  set_grid_lines(grid_lines: TreeViewGridLines): void;
  set_hadjustment(adjustment: Adjustment | null): void;
  set_headers_clickable(setting: boolean): void;
  set_headers_visible(headers_visible: boolean): void;
  set_hover_expand(expand: boolean): void;
  set_hover_selection(hover: boolean): void;
  set_level_indentation(indentation: number): void;
  set_model(model: any | null): void;
  set_reorderable(reorderable: boolean): void;
  set_row_separator_func(func: TreeViewRowSeparatorFunc | null, data: object | null, destroy: GLib.DestroyNotify | null): void;
  set_rubber_banding(enable: boolean): void;
  set_rules_hint(setting: boolean): void;
  set_search_column(column: number): void;
  set_search_entry(entry: Entry | null): void;
  set_search_equal_func(search_equal_func: TreeViewSearchEqualFunc, search_user_data: object | null, search_destroy: GLib.DestroyNotify | null): void;
  set_search_position_func(func: TreeViewSearchPositionFunc | null, data: object | null, destroy: GLib.DestroyNotify | null): void;
  set_show_expanders(enabled: boolean): void;
  set_tooltip_cell(tooltip: Tooltip, path: TreePath | null, column: TreeViewColumn | null, cell: CellRenderer | null): void;
  set_tooltip_column(column: number): void;
  set_tooltip_row(tooltip: Tooltip, path: TreePath): void;
  set_vadjustment(adjustment: Adjustment | null): void;
  unset_rows_drag_dest(): void;
  unset_rows_drag_source(): void;
  columns_changed(): void;
  cursor_changed(): void;
  expand_collapse_cursor_row(logical: boolean, expand: boolean, open_all: boolean): boolean;
  move_cursor(step: MovementStep, count: number): boolean;
  row_activated(...args: any[]): any;
  row_collapsed(iter: TreeIter, path: TreePath): void;
  row_expanded(...args: any[]): any;
  select_all(): boolean;
  select_cursor_parent(): boolean;
  select_cursor_row(start_editing: boolean): boolean;
  start_interactive_search(): boolean;
  test_collapse_row(iter: TreeIter, path: TreePath): boolean;
  test_expand_row(iter: TreeIter, path: TreePath): boolean;
  toggle_cursor_row(): boolean;
  unselect_all(): boolean;
}
export class TreeViewAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class TreeViewColumn extends GObject.InitiallyUnowned {
  constructor();
  alignment: number;
  'cell-area': CellArea;
  clickable: boolean;
  expand: boolean;
  'fixed-width': number;
  'max-width': number;
  'min-width': number;
  reorderable: boolean;
  resizable: boolean;
  sizing: TreeViewColumnSizing;
  'sort-column-id': number;
  'sort-indicator': boolean;
  'sort-order': SortType;
  spacing: number;
  title: string;
  visible: boolean;
  widget: Widget;
  width: number;
  'x-offset': number;
  static parent_instance: GObject.InitiallyUnowned;
  static priv: TreeViewColumnPrivate;
  add_attribute(cell_renderer: CellRenderer, attribute: string, column: number): void;
  cell_get_position(cell_renderer: CellRenderer, x_offset?: number, width?: number): boolean;
  cell_get_size(cell_area: Gdk.Rectangle | null, x_offset?: number, y_offset?: number, width?: number, height?: number): void;
  cell_is_visible(): boolean;
  cell_set_cell_data(tree_model: any, iter: TreeIter, is_expander: boolean, is_expanded: boolean): void;
  clear(): void;
  clear_attributes(cell_renderer: CellRenderer): void;
  clicked(...args: any[]): any;
  focus_cell(cell: CellRenderer): void;
  get_alignment(): number;
  get_button(): Widget;
  get_clickable(): boolean;
  get_expand(): boolean;
  get_fixed_width(): number;
  get_max_width(): number;
  get_min_width(): number;
  get_reorderable(): boolean;
  get_resizable(): boolean;
  get_sizing(): TreeViewColumnSizing;
  get_sort_column_id(): number;
  get_sort_indicator(): boolean;
  get_sort_order(): SortType;
  get_spacing(): number;
  get_title(): string;
  get_tree_view(): Widget | null;
  get_visible(): boolean;
  get_widget(): Widget | null;
  get_width(): number;
  get_x_offset(): number;
  pack_end(cell: CellRenderer, expand: boolean): void;
  pack_start(cell: CellRenderer, expand: boolean): void;
  queue_resize(): void;
  set_alignment(xalign: number): void;
  set_attributes(cell_renderer: CellRenderer, ...args: any[]): void;
  set_cell_data_func(cell_renderer: CellRenderer, func: TreeCellDataFunc | null, func_data: object | null, destroy: GLib.DestroyNotify): void;
  set_clickable(clickable: boolean): void;
  set_expand(expand: boolean): void;
  set_fixed_width(fixed_width: number): void;
  set_max_width(max_width: number): void;
  set_min_width(min_width: number): void;
  set_reorderable(reorderable: boolean): void;
  set_resizable(resizable: boolean): void;
  set_sizing(type: TreeViewColumnSizing): void;
  set_sort_column_id(sort_column_id: number): void;
  set_sort_indicator(setting: boolean): void;
  set_sort_order(order: SortType): void;
  set_spacing(spacing: number): void;
  set_title(title: string): void;
  set_visible(visible: boolean): void;
  set_widget(widget: Widget | null): void;
  clicked(...args: any[]): any;
}
export class UIManager extends GObject.Object {
  constructor();
  'add-tearoffs': boolean;
  ui: string;
  static parent: GObject.Object;
  static private_data: UIManagerPrivate;
  add_ui(merge_id: number, path: string, name: string, action: string | null, type: UIManagerItemType, top: boolean): void;
  add_ui_from_file(filename: any): number;
  add_ui_from_resource(resource_path: string): number;
  add_ui_from_string(buffer: string, length: number): number;
  ensure_update(): void;
  get_accel_group(): AccelGroup;
  get_action(...args: any[]): any;
  get_action_groups(): GLib.List;
  get_add_tearoffs(): boolean;
  get_toplevels(types: UIManagerItemType): GLib.SList;
  get_ui(): string;
  get_widget(...args: any[]): any;
  insert_action_group(action_group: ActionGroup, pos: number): void;
  new_merge_id(): number;
  remove_action_group(action_group: ActionGroup): void;
  remove_ui(merge_id: number): void;
  set_add_tearoffs(add_tearoffs: boolean): void;
  actions_changed(): void;
  add_widget(widget: Widget): void;
  connect_proxy(action: Action, proxy: Widget): void;
  disconnect_proxy(action: Action, proxy: Widget): void;
  get_action(...args: any[]): any;
  get_widget(...args: any[]): any;
  post_activate(action: Action): void;
  pre_activate(action: Action): void;
}
export class VBox extends Box {
  constructor(homogeneous: boolean, spacing: number);
  static box: Box;
}
export class VButtonBox extends ButtonBox {
  constructor();
  static button_box: ButtonBox;
}
export class VPaned extends Paned {
  constructor();
  static paned: Paned;
}
export class VScale extends Scale {
  constructor(adjustment: Adjustment);
  static scale: Scale;
}
export class VScrollbar extends Scrollbar {
  constructor(adjustment: Adjustment | null);
  static scrollbar: Scrollbar;
}
export class VSeparator extends Separator {
  constructor();
  static separator: Separator;
}
export class Viewport extends Bin {
  constructor(hadjustment: Adjustment | null, vadjustment: Adjustment | null);
  'shadow-type': ShadowType;
  static bin: Bin;
  static priv: any;
  get_bin_window(): Gdk.Window;
  get_hadjustment(): Adjustment;
  get_shadow_type(): ShadowType;
  get_vadjustment(): Adjustment;
  get_view_window(): Gdk.Window;
  set_hadjustment(adjustment: Adjustment | null): void;
  set_shadow_type(type: ShadowType): void;
  set_vadjustment(adjustment: Adjustment | null): void;
}
export class VolumeButton extends ScaleButton {
  constructor();
  'use-symbolic': boolean;
  static parent: any;
}
export class Widget extends GObject.InitiallyUnowned {
  constructor(type: any, first_property_name: string, ...args: any[]);
  'app-paintable': boolean;
  'can-default': boolean;
  'can-focus': boolean;
  'composite-child': boolean;
  'double-buffered': boolean;
  events: Gdk.EventMask;
  expand: boolean;
  'focus-on-click': boolean;
  halign: Align;
  'has-default': boolean;
  'has-focus': boolean;
  'has-tooltip': boolean;
  'height-request': number;
  hexpand: boolean;
  'hexpand-set': boolean;
  'is-focus': boolean;
  margin: number;
  'margin-bottom': number;
  'margin-end': number;
  'margin-left': number;
  'margin-right': number;
  'margin-start': number;
  'margin-top': number;
  name: string;
  'no-show-all': boolean;
  opacity: number;
  parent: Container;
  'receives-default': boolean;
  'scale-factor': number;
  sensitive: boolean;
  style: Style;
  'tooltip-markup': string;
  'tooltip-text': string;
  valign: Align;
  vexpand: boolean;
  'vexpand-set': boolean;
  visible: boolean;
  'width-request': number;
  window: Gdk.Window;
  static parent_instance: GObject.InitiallyUnowned;
  static priv: WidgetPrivate;
  activate(): boolean;
  add_accelerator(accel_signal: string, accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType, accel_flags: AccelFlags): void;
  add_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
  add_events(events: number): void;
  add_mnemonic_label(label: Widget): void;
  add_tick_callback(callback: TickCallback, user_data: object | null, notify: GLib.DestroyNotify): number;
  can_activate_accel(...args: any[]): any;
  child_focus(direction: DirectionType): boolean;
  child_notify(...args: any[]): any;
  class_path(path_length?: number, path?: string, path_reversed?: string): void;
  compute_expand(...args: any[]): any;
  create_pango_context(): Pango.Context;
  create_pango_layout(text: string | null): Pango.Layout;
  destroy(...args: any[]): any;
  destroyed(widget_pointer: Widget): void;
  device_is_shadowed(device: Gdk.Device): boolean;
  drag_begin(...args: any[]): any;
  drag_begin_with_coordinates(targets: TargetList, actions: Gdk.DragAction, button: number, event: Gdk.Event | null, x: number, y: number): Gdk.DragContext;
  drag_check_threshold(start_x: number, start_y: number, current_x: number, current_y: number): boolean;
  drag_dest_add_image_targets(): void;
  drag_dest_add_text_targets(): void;
  drag_dest_add_uri_targets(): void;
  drag_dest_find_target(context: Gdk.DragContext, target_list: TargetList | null): Gdk.Atom;
  drag_dest_get_target_list(): TargetList | null;
  drag_dest_get_track_motion(): boolean;
  drag_dest_set(flags: DestDefaults, targets: TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void;
  drag_dest_set_proxy(proxy_window: Gdk.Window, protocol: Gdk.DragProtocol, use_coordinates: boolean): void;
  drag_dest_set_target_list(target_list: TargetList | null): void;
  drag_dest_set_track_motion(track_motion: boolean): void;
  drag_dest_unset(): void;
  drag_get_data(context: Gdk.DragContext, target: Gdk.Atom, time_: number): void;
  drag_highlight(): void;
  drag_source_add_image_targets(): void;
  drag_source_add_text_targets(): void;
  drag_source_add_uri_targets(): void;
  drag_source_get_target_list(): TargetList | null;
  drag_source_set(start_button_mask: Gdk.ModifierType, targets: TargetEntry[] | null, n_targets: number, actions: Gdk.DragAction): void;
  drag_source_set_icon_gicon(icon: Gio.Icon): void;
  drag_source_set_icon_name(icon_name: string): void;
  drag_source_set_icon_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
  drag_source_set_icon_stock(stock_id: string): void;
  drag_source_set_target_list(target_list: TargetList | null): void;
  drag_source_unset(): void;
  drag_unhighlight(): void;
  draw(...args: any[]): any;
  ensure_style(): void;
  error_bell(): void;
  event(...args: any[]): any;
  freeze_child_notify(): void;
  get_accessible(...args: any[]): any;
  get_action_group(prefix: string): Gio.ActionGroup | null;
  get_allocated_baseline(): number;
  get_allocated_height(): number;
  get_allocated_size(allocation: Allocation, baseline?: number): void;
  get_allocated_width(): number;
  get_allocation(allocation: Allocation): void;
  get_ancestor(widget_type: any): Widget | null;
  get_app_paintable(): boolean;
  get_can_default(): boolean;
  get_can_focus(): boolean;
  get_child_requisition(requisition: Requisition): void;
  get_child_visible(): boolean;
  get_clip(clip: Allocation): void;
  get_clipboard(selection: Gdk.Atom): Clipboard;
  get_composite_name(): string;
  get_device_enabled(device: Gdk.Device): boolean;
  get_device_events(device: Gdk.Device): Gdk.EventMask;
  get_direction(): TextDirection;
  get_display(): Gdk.Display;
  get_double_buffered(): boolean;
  get_events(): number;
  get_focus_on_click(): boolean;
  get_font_map(): Pango.FontMap | null;
  get_font_options(): cairo.FontOptions | null;
  get_frame_clock(): Gdk.FrameClock | null;
  get_halign(): Align;
  get_has_tooltip(): boolean;
  get_has_window(): boolean;
  get_hexpand(): boolean;
  get_hexpand_set(): boolean;
  get_mapped(): boolean;
  get_margin_bottom(): number;
  get_margin_end(): number;
  get_margin_left(): number;
  get_margin_right(): number;
  get_margin_start(): number;
  get_margin_top(): number;
  get_modifier_mask(intent: Gdk.ModifierIntent): Gdk.ModifierType;
  get_modifier_style(): RcStyle;
  get_name(): string;
  get_no_show_all(): boolean;
  get_opacity(): number;
  get_pango_context(): Pango.Context;
  get_parent(): Widget | null;
  get_parent_window(): Gdk.Window | null;
  get_path(): WidgetPath;
  get_pointer(x?: number, y?: number): void;
  get_preferred_height(...args: any[]): any;
  get_preferred_height_and_baseline_for_width(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_size(minimum_size?: Requisition, natural_size?: Requisition): void;
  get_preferred_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  get_realized(): boolean;
  get_receives_default(): boolean;
  get_request_mode(...args: any[]): any;
  get_requisition(requisition: Requisition): void;
  get_root_window(): Gdk.Window;
  get_scale_factor(): number;
  get_screen(): Gdk.Screen;
  get_sensitive(): boolean;
  get_settings(): Settings;
  get_size_request(width?: number, height?: number): void;
  get_state(): StateType;
  get_state_flags(): StateFlags;
  get_style(): Style;
  get_style_context(): StyleContext;
  get_support_multidevice(): boolean;
  get_template_child(widget_type: any, name: string): GObject.Object;
  get_tooltip_markup(): string | null;
  get_tooltip_text(): string | null;
  get_tooltip_window(): Window;
  get_toplevel(): Widget;
  get_valign(): Align;
  get_valign_with_baseline(): Align;
  get_vexpand(): boolean;
  get_vexpand_set(): boolean;
  get_visible(): boolean;
  get_visual(): Gdk.Visual;
  get_window(): Gdk.Window | null;
  grab_add(): void;
  grab_default(): void;
  grab_focus(...args: any[]): any;
  grab_remove(): void;
  has_default(): boolean;
  has_focus(): boolean;
  has_grab(): boolean;
  has_rc_style(): boolean;
  has_screen(): boolean;
  has_visible_focus(): boolean;
  hide(...args: any[]): any;
  hide_on_delete(): boolean;
  in_destruction(): boolean;
  init_template(): void;
  input_shape_combine_region(region: cairo.Region | null): void;
  insert_action_group(name: string, group: Gio.ActionGroup | null): void;
  intersect(area: Gdk.Rectangle, intersection?: Gdk.Rectangle): boolean;
  is_ancestor(ancestor: Widget): boolean;
  is_composited(): boolean;
  is_drawable(): boolean;
  is_focus(): boolean;
  is_sensitive(): boolean;
  is_toplevel(): boolean;
  is_visible(): boolean;
  keynav_failed(...args: any[]): any;
  list_accel_closures(): GLib.List;
  list_action_prefixes(): string[];
  list_mnemonic_labels(): GLib.List;
  map(...args: any[]): any;
  mnemonic_activate(...args: any[]): any;
  modify_base(state: StateType, color: Gdk.Color | null): void;
  modify_bg(state: StateType, color: Gdk.Color | null): void;
  modify_cursor(primary: Gdk.Color | null, secondary: Gdk.Color | null): void;
  modify_fg(state: StateType, color: Gdk.Color | null): void;
  modify_font(font_desc: Pango.FontDescription | null): void;
  modify_style(style: RcStyle): void;
  modify_text(state: StateType, color: Gdk.Color | null): void;
  override_background_color(state: StateFlags, color: Gdk.RGBA | null): void;
  override_color(state: StateFlags, color: Gdk.RGBA | null): void;
  override_cursor(cursor: Gdk.RGBA | null, secondary_cursor: Gdk.RGBA | null): void;
  override_font(font_desc: Pango.FontDescription | null): void;
  override_symbolic_color(name: string, color: Gdk.RGBA | null): void;
  path(path_length?: number, path?: string, path_reversed?: string): void;
  queue_allocate(): void;
  queue_compute_expand(): void;
  queue_draw(): void;
  queue_draw_area(x: number, y: number, width: number, height: number): void;
  queue_draw_region(...args: any[]): any;
  queue_resize(): void;
  queue_resize_no_redraw(): void;
  realize(...args: any[]): any;
  region_intersect(region: cairo.Region): cairo.Region;
  register_window(window: Gdk.Window): void;
  remove_accelerator(accel_group: AccelGroup, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
  remove_mnemonic_label(label: Widget): void;
  remove_tick_callback(id: number): void;
  render_icon(stock_id: string, size: number, detail: string | null): GdkPixbuf.Pixbuf | null;
  render_icon_pixbuf(stock_id: string, size: number): GdkPixbuf.Pixbuf | null;
  reparent(new_parent: Widget): void;
  reset_rc_styles(): void;
  reset_style(): void;
  send_expose(event: Gdk.Event): number;
  send_focus_change(event: Gdk.Event): boolean;
  set_accel_path(accel_path: string | null, accel_group: AccelGroup | null): void;
  set_allocation(allocation: Allocation): void;
  set_app_paintable(app_paintable: boolean): void;
  set_can_default(can_default: boolean): void;
  set_can_focus(can_focus: boolean): void;
  set_child_visible(is_visible: boolean): void;
  set_clip(clip: Allocation): void;
  set_composite_name(name: string): void;
  set_device_enabled(device: Gdk.Device, enabled: boolean): void;
  set_device_events(device: Gdk.Device, events: Gdk.EventMask): void;
  set_direction(dir: TextDirection): void;
  set_double_buffered(double_buffered: boolean): void;
  set_events(events: number): void;
  set_focus_on_click(focus_on_click: boolean): void;
  set_font_map(font_map: Pango.FontMap | null): void;
  set_font_options(options: cairo.FontOptions | null): void;
  set_halign(align: Align): void;
  set_has_tooltip(has_tooltip: boolean): void;
  set_has_window(has_window: boolean): void;
  set_hexpand(expand: boolean): void;
  set_hexpand_set(set: boolean): void;
  set_mapped(mapped: boolean): void;
  set_margin_bottom(margin: number): void;
  set_margin_end(margin: number): void;
  set_margin_left(margin: number): void;
  set_margin_right(margin: number): void;
  set_margin_start(margin: number): void;
  set_margin_top(margin: number): void;
  set_name(name: string): void;
  set_no_show_all(no_show_all: boolean): void;
  set_opacity(opacity: number): void;
  set_parent(parent: Widget): void;
  set_parent_window(parent_window: Gdk.Window): void;
  set_realized(realized: boolean): void;
  set_receives_default(receives_default: boolean): void;
  set_redraw_on_allocate(redraw_on_allocate: boolean): void;
  set_sensitive(sensitive: boolean): void;
  set_size_request(width: number, height: number): void;
  set_state(state: StateType): void;
  set_state_flags(flags: StateFlags, clear: boolean): void;
  set_style(style: Style | null): void;
  set_support_multidevice(support_multidevice: boolean): void;
  set_tooltip_markup(markup: string | null): void;
  set_tooltip_text(text: string | null): void;
  set_tooltip_window(custom_window: Window | null): void;
  set_valign(align: Align): void;
  set_vexpand(expand: boolean): void;
  set_vexpand_set(set: boolean): void;
  set_visible(visible: boolean): void;
  set_visual(visual: Gdk.Visual | null): void;
  set_window(window: Gdk.Window): void;
  shape_combine_region(region: cairo.Region | null): void;
  show(...args: any[]): any;
  show_all(...args: any[]): any;
  show_now(): void;
  size_allocate(...args: any[]): any;
  size_allocate_with_baseline(allocation: Allocation, baseline: number): void;
  size_request(requisition: Requisition): void;
  style_attach(): void;
  style_get(first_property_name: string, ...args: any[]): void;
  style_get_property(property_name: string, value: GObject.Value): void;
  style_get_valist(first_property_name: string, var_args: any): void;
  thaw_child_notify(): void;
  translate_coordinates(dest_widget: Widget, src_x: number, src_y: number, dest_x?: number, dest_y?: number): boolean;
  trigger_tooltip_query(): void;
  unmap(...args: any[]): any;
  unparent(): void;
  unrealize(...args: any[]): any;
  unregister_window(window: Gdk.Window): void;
  unset_state_flags(flags: StateFlags): void;
  adjust_baseline_allocation(baseline: number): void;
  adjust_baseline_request(minimum_baseline: number, natural_baseline: number): void;
  adjust_size_allocation(orientation: Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number): void;
  adjust_size_request(orientation: Orientation, minimum_size: number, natural_size: number): void;
  button_press_event(event: Gdk.EventButton): boolean;
  button_release_event(event: Gdk.EventButton): boolean;
  can_activate_accel(...args: any[]): any;
  child_notify(...args: any[]): any;
  composited_changed(): void;
  compute_expand(...args: any[]): any;
  configure_event(event: Gdk.EventConfigure): boolean;
  damage_event(event: Gdk.EventExpose): boolean;
  delete_event(event: Gdk.EventAny): boolean;
  destroy(...args: any[]): any;
  destroy_event(event: Gdk.EventAny): boolean;
  direction_changed(previous_direction: TextDirection): void;
  dispatch_child_properties_changed(n_pspecs: number, pspecs: GObject.ParamSpec): void;
  drag_begin(...args: any[]): any;
  drag_data_delete(context: Gdk.DragContext): void;
  drag_data_get(context: Gdk.DragContext, selection_data: SelectionData, info: number, time_: number): void;
  drag_data_received(context: Gdk.DragContext, x: number, y: number, selection_data: SelectionData, info: number, time_: number): void;
  drag_drop(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
  drag_end(context: Gdk.DragContext): void;
  drag_failed(context: Gdk.DragContext, result: DragResult): boolean;
  drag_leave(context: Gdk.DragContext, time_: number): void;
  drag_motion(context: Gdk.DragContext, x: number, y: number, time_: number): boolean;
  draw(...args: any[]): any;
  enter_notify_event(event: Gdk.EventCrossing): boolean;
  event(...args: any[]): any;
  focus(direction: DirectionType): boolean;
  focus_in_event(event: Gdk.EventFocus): boolean;
  focus_out_event(event: Gdk.EventFocus): boolean;
  get_accessible(...args: any[]): any;
  get_preferred_height(...args: any[]): any;
  get_preferred_height_and_baseline_for_width(...args: any[]): any;
  get_preferred_height_for_width(...args: any[]): any;
  get_preferred_width(...args: any[]): any;
  get_preferred_width_for_height(...args: any[]): any;
  get_request_mode(...args: any[]): any;
  grab_broken_event(event: Gdk.EventGrabBroken): boolean;
  grab_focus(...args: any[]): any;
  grab_notify(was_grabbed: boolean): void;
  hide(...args: any[]): any;
  hierarchy_changed(previous_toplevel: Widget): void;
  key_press_event(event: Gdk.EventKey): boolean;
  key_release_event(event: Gdk.EventKey): boolean;
  keynav_failed(...args: any[]): any;
  leave_notify_event(event: Gdk.EventCrossing): boolean;
  map(...args: any[]): any;
  map_event(event: Gdk.EventAny): boolean;
  mnemonic_activate(...args: any[]): any;
  motion_notify_event(event: Gdk.EventMotion): boolean;
  move_focus(direction: DirectionType): void;
  parent_set(previous_parent: Widget): void;
  popup_menu(): boolean;
  property_notify_event(event: Gdk.EventProperty): boolean;
  proximity_in_event(event: Gdk.EventProximity): boolean;
  proximity_out_event(event: Gdk.EventProximity): boolean;
  query_tooltip(x: number, y: number, keyboard_tooltip: boolean, tooltip: Tooltip): boolean;
  queue_draw_region(...args: any[]): any;
  realize(...args: any[]): any;
  screen_changed(previous_screen: Gdk.Screen): void;
  scroll_event(event: Gdk.EventScroll): boolean;
  selection_clear_event(event: Gdk.EventSelection): boolean;
  selection_get(selection_data: SelectionData, info: number, time_: number): void;
  selection_notify_event(event: Gdk.EventSelection): boolean;
  selection_received(selection_data: SelectionData, time_: number): void;
  selection_request_event(event: Gdk.EventSelection): boolean;
  show(...args: any[]): any;
  show_all(...args: any[]): any;
  show_help(help_type: WidgetHelpType): boolean;
  size_allocate(...args: any[]): any;
  state_changed(previous_state: StateType): void;
  state_flags_changed(previous_state_flags: StateFlags): void;
  style_set(previous_style: Style): void;
  style_updated(): void;
  touch_event(event: Gdk.EventTouch): boolean;
  unmap(...args: any[]): any;
  unmap_event(event: Gdk.EventAny): boolean;
  unrealize(...args: any[]): any;
  visibility_notify_event(event: Gdk.EventVisibility): boolean;
  window_state_event(event: Gdk.EventWindowState): boolean;
  static get_default_direction(): TextDirection;
  static get_default_style(): Style;
  static pop_composite_child(): void;
  static push_composite_child(): void;
  static set_default_direction(dir: TextDirection): void;
}
export class WidgetAccessible extends Accessible {
  static parent: any;
  static priv: any;
}
export class Window extends Bin {
  constructor(type: WindowType);
  'accept-focus': boolean;
  application: Application;
  'attached-to': Widget;
  decorated: boolean;
  'default-height': number;
  'default-width': number;
  deletable: boolean;
  'destroy-with-parent': boolean;
  'focus-on-map': boolean;
  'focus-visible': boolean;
  gravity: Gdk.Gravity;
  'has-resize-grip': boolean;
  'has-toplevel-focus': boolean;
  'hide-titlebar-when-maximized': boolean;
  icon: GdkPixbuf.Pixbuf;
  'icon-name': string;
  'is-active': boolean;
  'is-maximized': boolean;
  'mnemonics-visible': boolean;
  modal: boolean;
  resizable: boolean;
  'resize-grip-visible': boolean;
  role: string;
  screen: Gdk.Screen;
  'skip-pager-hint': boolean;
  'skip-taskbar-hint': boolean;
  'startup-id': string;
  title: string;
  'transient-for': Window;
  type: WindowType;
  'type-hint': Gdk.WindowTypeHint;
  'urgency-hint': boolean;
  'window-position': WindowPosition;
  static bin: Bin;
  static priv: any;
  activate_default(...args: any[]): any;
  activate_focus(...args: any[]): any;
  activate_key(event: Gdk.EventKey): boolean;
  add_accel_group(accel_group: AccelGroup): void;
  add_mnemonic(keyval: number, target: Widget): void;
  begin_move_drag(button: number, root_x: number, root_y: number, timestamp: number): void;
  begin_resize_drag(edge: Gdk.WindowEdge, button: number, root_x: number, root_y: number, timestamp: number): void;
  close(): void;
  deiconify(): void;
  fullscreen(): void;
  fullscreen_on_monitor(screen: Gdk.Screen, monitor: number): void;
  get_accept_focus(): boolean;
  get_application(): Application | null;
  get_attached_to(): Widget | null;
  get_decorated(): boolean;
  get_default_size(width?: number, height?: number): void;
  get_default_widget(): Widget | null;
  get_deletable(): boolean;
  get_destroy_with_parent(): boolean;
  get_focus(): Widget | null;
  get_focus_on_map(): boolean;
  get_focus_visible(): boolean;
  get_gravity(): Gdk.Gravity;
  get_group(): WindowGroup;
  get_has_resize_grip(): boolean;
  get_hide_titlebar_when_maximized(): boolean;
  get_icon(): GdkPixbuf.Pixbuf | null;
  get_icon_list(): GLib.List;
  get_icon_name(): string | null;
  get_mnemonic_modifier(): Gdk.ModifierType;
  get_mnemonics_visible(): boolean;
  get_modal(): boolean;
  get_opacity(): number;
  get_position(root_x?: number, root_y?: number): void;
  get_resizable(): boolean;
  get_resize_grip_area(rect: Gdk.Rectangle): boolean;
  get_role(): string | null;
  get_screen(): Gdk.Screen;
  get_size(width: number | null, height: number | null): void;
  get_skip_pager_hint(): boolean;
  get_skip_taskbar_hint(): boolean;
  get_title(): string | null;
  get_titlebar(): Widget | null;
  get_transient_for(): Window | null;
  get_type_hint(): Gdk.WindowTypeHint;
  get_urgency_hint(): boolean;
  get_window_type(): WindowType;
  has_group(): boolean;
  has_toplevel_focus(): boolean;
  iconify(): void;
  is_active(): boolean;
  is_maximized(): boolean;
  maximize(): void;
  mnemonic_activate(keyval: number, modifier: Gdk.ModifierType): boolean;
  move(x: number, y: number): void;
  parse_geometry(geometry: string): boolean;
  present(): void;
  present_with_time(timestamp: number): void;
  propagate_key_event(event: Gdk.EventKey): boolean;
  remove_accel_group(accel_group: AccelGroup): void;
  remove_mnemonic(keyval: number, target: Widget): void;
  reshow_with_initial_size(): void;
  resize(width: number, height: number): void;
  resize_grip_is_visible(): boolean;
  resize_to_geometry(width: number, height: number): void;
  set_accept_focus(setting: boolean): void;
  set_application(application: Application | null): void;
  set_attached_to(attach_widget: Widget | null): void;
  set_decorated(setting: boolean): void;
  set_default(default_widget: Widget | null): void;
  set_default_geometry(width: number, height: number): void;
  set_default_size(width: number, height: number): void;
  set_deletable(setting: boolean): void;
  set_destroy_with_parent(setting: boolean): void;
  set_focus(...args: any[]): any;
  set_focus_on_map(setting: boolean): void;
  set_focus_visible(setting: boolean): void;
  set_geometry_hints(geometry_widget: Widget | null, geometry: Gdk.Geometry | null, geom_mask: Gdk.WindowHints): void;
  set_gravity(gravity: Gdk.Gravity): void;
  set_has_resize_grip(value: boolean): void;
  set_has_user_ref_count(setting: boolean): void;
  set_hide_titlebar_when_maximized(setting: boolean): void;
  set_icon(icon: GdkPixbuf.Pixbuf | null): void;
  set_icon_from_file(filename: any): boolean;
  set_icon_list(list: GLib.List): void;
  set_icon_name(name: string | null): void;
  set_keep_above(setting: boolean): void;
  set_keep_below(setting: boolean): void;
  set_mnemonic_modifier(modifier: Gdk.ModifierType): void;
  set_mnemonics_visible(setting: boolean): void;
  set_modal(modal: boolean): void;
  set_opacity(opacity: number): void;
  set_position(position: WindowPosition): void;
  set_resizable(resizable: boolean): void;
  set_role(role: string): void;
  set_screen(screen: Gdk.Screen): void;
  set_skip_pager_hint(setting: boolean): void;
  set_skip_taskbar_hint(setting: boolean): void;
  set_startup_id(startup_id: string): void;
  set_title(title: string): void;
  set_titlebar(titlebar: Widget | null): void;
  set_transient_for(parent: Window | null): void;
  set_type_hint(hint: Gdk.WindowTypeHint): void;
  set_urgency_hint(setting: boolean): void;
  set_wmclass(wmclass_name: string, wmclass_class: string): void;
  stick(): void;
  unfullscreen(): void;
  unmaximize(): void;
  unstick(): void;
  activate_default(...args: any[]): any;
  activate_focus(...args: any[]): any;
  enable_debugging(toggle: boolean): boolean;
  keys_changed(): void;
  set_focus(...args: any[]): any;
  static get_default_icon_list(): GLib.List;
  static get_default_icon_name(): string;
  static list_toplevels(): GLib.List;
  static set_auto_startup_notification(setting: boolean): void;
  static set_default_icon(icon: GdkPixbuf.Pixbuf): void;
  static set_default_icon_from_file(filename: any): boolean;
  static set_default_icon_list(list: GLib.List): void;
  static set_default_icon_name(name: string): void;
  static set_interactive_debugging(enable: boolean): void;
}
export class WindowAccessible extends ContainerAccessible {
  static parent: any;
  static priv: any;
}
export class WindowGroup extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: WindowGroupPrivate;
  add_window(window: Window): void;
  get_current_device_grab(device: Gdk.Device): Widget | null;
  get_current_grab(): Widget;
  list_windows(): GLib.List;
  remove_window(window: Window): void;
}
export class AboutDialogClass {
  static parent_class: DialogClass;
  static activate_link: (dialog: AboutDialog, uri: string) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AboutDialogPrivate {}
export class AccelGroupClass {
  static parent_class: GObject.ObjectClass;
  static accel_changed: (accel_group: AccelGroup, keyval: number, modifier: Gdk.ModifierType, accel_closure: GObject.Closure) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AccelGroupEntry {
  static key: AccelKey;
  static closure: GObject.Closure;
  static accel_path_quark: GLib.Quark;
}
export class AccelGroupPrivate {}
export class AccelKey {
  static accel_key: number;
  static accel_mods: Gdk.ModifierType;
  static accel_flags: number;
}
export class AccelLabelClass {
  static parent_class: LabelClass;
  static signal_quote1: string;
  static signal_quote2: string;
  static mod_name_shift: string;
  static mod_name_control: string;
  static mod_name_alt: string;
  static mod_separator: string;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AccelLabelPrivate {}
export class AccelMapClass {}
export class AccessibleClass {
  static parent_class: Atk.ObjectClass;
  static connect_widget_destroyed: (accessible: Accessible) => void;
  static widget_set: (accessible: Accessible) => void;
  static widget_unset: (accessible: Accessible) => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AccessiblePrivate {}
export class ActionBarClass {
  static parent_class: BinClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ActionBarPrivate {}
export class ActionClass {
  static parent_class: GObject.ObjectClass;
  static activate: (action: Action) => void;
  static menu_item_type: any;
  static toolbar_item_type: any;
  static create_menu_item: (action: Action) => Widget;
  static create_tool_item: (action: Action) => Widget;
  static connect_proxy: (action: Action, proxy: Widget) => void;
  static disconnect_proxy: (action: Action, proxy: Widget) => void;
  static create_menu: (action: Action) => Widget;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ActionEntry {
  static name: string;
  static stock_id: string;
  static label: string;
  static accelerator: string;
  static tooltip: string;
  static callback: GObject.Callback;
}
export class ActionGroupClass {
  static parent_class: GObject.ObjectClass;
  static get_action: (action_group: ActionGroup, action_name: string) => Action;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ActionGroupPrivate {}
export class ActionPrivate {}
export class ActionableInterface {
  static g_iface: GObject.TypeInterface;
  static get_action_name: (actionable: any) => string | null;
  static set_action_name: (actionable: any, action_name: string | null) => void;
  static get_action_target_value: (actionable: any) => GLib.Variant;
  static set_action_target_value: (actionable: any, target_value: GLib.Variant | null) => void;
}
export class ActivatableIface {
  static g_iface: GObject.TypeInterface;
  static update: (activatable: any, action: Action, property_name: string) => void;
  static sync_action_properties: (activatable: any, action: Action | null) => void;
}
export class AdjustmentClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static changed: (adjustment: Adjustment) => void;
  static value_changed: (adjustment: Adjustment) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AdjustmentPrivate {}
export class AlignmentClass {
  static parent_class: BinClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AlignmentPrivate {}
export class AppChooserButtonClass {
  static parent_class: ComboBoxClass;
  static custom_item_activated: (self: AppChooserButton, item_name: string) => void;
  static padding: object[];
}
export class AppChooserButtonPrivate {}
export class AppChooserDialogClass {
  static parent_class: DialogClass;
  static padding: object[];
}
export class AppChooserDialogPrivate {}
export class AppChooserWidgetClass {
  static parent_class: BoxClass;
  static application_selected: (self: AppChooserWidget, app_info: Gio.AppInfo) => void;
  static application_activated: (self: AppChooserWidget, app_info: Gio.AppInfo) => void;
  static populate_popup: (self: AppChooserWidget, menu: Menu, app_info: Gio.AppInfo) => void;
  static padding: object[];
}
export class AppChooserWidgetPrivate {}
export class ApplicationClass {
  static parent_class: Gio.ApplicationClass;
  static window_added: (application: Application, window: Window) => void;
  static window_removed: (application: Application, window: Window) => void;
  static padding: object[];
}
export class ApplicationPrivate {}
export class ApplicationWindowClass {
  static parent_class: WindowClass;
  static padding: object[];
}
export class ApplicationWindowPrivate {}
export class ArrowAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class ArrowAccessiblePrivate {}
export class ArrowClass {
  static parent_class: MiscClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ArrowPrivate {}
export class AspectFrameClass {
  static parent_class: FrameClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class AspectFramePrivate {}
export class AssistantClass {
  static parent_class: WindowClass;
  static prepare: (assistant: Assistant, page: Widget) => void;
  static apply: (assistant: Assistant) => void;
  static close: (assistant: Assistant) => void;
  static cancel: (assistant: Assistant) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
}
export class AssistantPrivate {}
export class BinClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class BinPrivate {}
export class BindingArg {
  static arg_type: any;
}
export class BindingEntry {
  static keyval: number;
  static modifiers: Gdk.ModifierType;
  static binding_set: BindingSet;
  static destroyed: number;
  static in_emission: number;
  static marks_unbound: number;
  static set_next: BindingEntry;
  static hash_next: BindingEntry;
  static signals: BindingSignal;
  static add_signal(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, n_args: number, ...args: any[]): void;
  static add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
  static add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: GLib.SList): void;
  static remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
  static skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
}
export class BindingSet {
  static set_name: string;
  static priority: number;
  static widget_path_pspecs: GLib.SList;
  static widget_class_pspecs: GLib.SList;
  static class_branch_pspecs: GLib.SList;
  static entries: BindingEntry;
  static current: BindingEntry;
  static parsed: number;
  activate(keyval: number, modifiers: Gdk.ModifierType, object: GObject.Object): boolean;
  add_path(path_type: PathType, path_pattern: string, priority: PathPriorityType): void;
  static by_class(object_class: object | null): BindingSet;
  static find(set_name: string): BindingSet | null;
  static g_new(set_name: string): BindingSet;
}
export class BindingSignal {
  static next: BindingSignal;
  static signal_name: string;
  static n_args: number;
  static args: BindingArg[];
}
export class BooleanCellAccessibleClass {
  static parent_class: RendererCellAccessibleClass;
}
export class BooleanCellAccessiblePrivate {}
export class Border {
  constructor();
  static left: number;
  static right: number;
  static top: number;
  static bottom: number;
  copy(): Border;
  free(): void;
}
export class BoxClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class BoxPrivate {}
export class BuildableIface {
  static g_iface: GObject.TypeInterface;
  static set_name: (buildable: any, name: string) => void;
  static get_name: (buildable: any) => string;
  static add_child: (buildable: any, builder: Builder, child: GObject.Object, type: string | null) => void;
  static set_buildable_property: (buildable: any, builder: Builder, name: string, value: GObject.Value) => void;
  static construct_child: (buildable: any, builder: Builder, name: string) => GObject.Object;
  static custom_tag_start: (buildable: any, builder: Builder, child: GObject.Object | null, tagname: string, parser: GLib.MarkupParser, data: object | null) => boolean;
  static custom_tag_end: (buildable: any, builder: Builder, child: GObject.Object | null, tagname: string, data: object | null) => void;
  static custom_finished: (buildable: any, builder: Builder, child: GObject.Object | null, tagname: string, data: object | null) => void;
  static parser_finished: (buildable: any, builder: Builder) => void;
  static get_internal_child: (buildable: any, builder: Builder, childname: string) => GObject.Object;
}
export class BuilderClass {
  static parent_class: GObject.ObjectClass;
  static get_type_from_name: (builder: Builder, type_name: string) => any;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class BuilderPrivate {}
export class ButtonAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class ButtonAccessiblePrivate {}
export class ButtonBoxClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ButtonBoxPrivate {}
export class ButtonClass {
  static parent_class: BinClass;
  static pressed: (button: Button) => void;
  static released: (button: Button) => void;
  static clicked: (button: Button) => void;
  static enter: (button: Button) => void;
  static leave: (button: Button) => void;
  static activate: (button: Button) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ButtonPrivate {}
export class CalendarClass {
  static parent_class: WidgetClass;
  static month_changed: (calendar: Calendar) => void;
  static day_selected: (calendar: Calendar) => void;
  static day_selected_double_click: (calendar: Calendar) => void;
  static prev_month: (calendar: Calendar) => void;
  static next_month: (calendar: Calendar) => void;
  static prev_year: (calendar: Calendar) => void;
  static next_year: (calendar: Calendar) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CalendarPrivate {}
export class CellAccessibleClass {
  static parent_class: AccessibleClass;
  static update_cache: (cell: CellAccessible, emit_signal: boolean) => void;
}
export class CellAccessibleParentIface {
  static parent: GObject.TypeInterface;
  static get_cell_extents: (parent: any, cell: CellAccessible, x: number, y: number, width: number, height: number, coord_type: Atk.CoordType) => void;
  static get_cell_area: (parent: any, cell: CellAccessible, cell_rect: Gdk.Rectangle) => void;
  static grab_focus: (parent: any, cell: CellAccessible) => boolean;
  static get_child_index: (parent: any, cell: CellAccessible) => number;
  static get_renderer_state: (parent: any, cell: CellAccessible) => CellRendererState;
  static expand_collapse: (parent: any, cell: CellAccessible) => void;
  static activate: (parent: any, cell: CellAccessible) => void;
  static edit: (parent: any, cell: CellAccessible) => void;
  static update_relationset: (parent: any, cell: CellAccessible, relationset: Atk.RelationSet) => void;
  static get_cell_position: (parent: any, cell: CellAccessible, row: number, column: number) => void;
  static get_column_header_cells: (parent: any, cell: CellAccessible) => Atk.Object[];
  static get_row_header_cells: (parent: any, cell: CellAccessible) => Atk.Object[];
}
export class CellAccessiblePrivate {}
export class CellAreaBoxClass {
  static parent_class: CellAreaClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellAreaBoxPrivate {}
export class CellAreaClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static add: (area: CellArea, renderer: CellRenderer) => void;
  static remove: (area: CellArea, renderer: CellRenderer) => void;
  static foreach: (area: CellArea, callback: CellCallback, callback_data: object | null) => void;
  static foreach_alloc: (area: CellArea, context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, background_area: Gdk.Rectangle, callback: CellAllocCallback, callback_data: object | null) => void;
  static event: (area: CellArea, context: CellAreaContext, widget: Widget, event: Gdk.Event, cell_area: Gdk.Rectangle, flags: CellRendererState) => number;
  static render: (area: CellArea, context: CellAreaContext, widget: Widget, cr: cairo.Context, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState, paint_focus: boolean) => void;
  static apply_attributes: (area: CellArea, tree_model: any, iter: TreeIter, is_expander: boolean, is_expanded: boolean) => void;
  static create_context: (area: CellArea) => CellAreaContext;
  static copy_context: (area: CellArea, context: CellAreaContext) => CellAreaContext;
  static get_request_mode: (area: CellArea) => SizeRequestMode;
  static get_preferred_width: (area: CellArea, context: CellAreaContext, widget: Widget, minimum_width: number, natural_width: number) => void;
  static get_preferred_height_for_width: (area: CellArea, context: CellAreaContext, widget: Widget, width: number, minimum_height: number, natural_height: number) => void;
  static get_preferred_height: (area: CellArea, context: CellAreaContext, widget: Widget, minimum_height: number, natural_height: number) => void;
  static get_preferred_width_for_height: (area: CellArea, context: CellAreaContext, widget: Widget, height: number, minimum_width: number, natural_width: number) => void;
  static set_cell_property: (area: CellArea, renderer: CellRenderer, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec) => void;
  static get_cell_property: (area: CellArea, renderer: CellRenderer, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec) => void;
  static focus: (area: CellArea, direction: DirectionType) => boolean;
  static is_activatable: (area: CellArea) => boolean;
  static activate: (area: CellArea, context: CellAreaContext, widget: Widget, cell_area: Gdk.Rectangle, flags: CellRendererState, edit_only: boolean) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
  find_cell_property(property_name: string): GObject.ParamSpec;
  install_cell_property(property_id: number, pspec: GObject.ParamSpec): void;
  list_cell_properties(n_properties: number): GObject.ParamSpec[];
}
export class CellAreaContextClass {
  static parent_class: GObject.ObjectClass;
  static allocate: (context: CellAreaContext, width: number, height: number) => void;
  static reset: (context: CellAreaContext) => void;
  static get_preferred_height_for_width: (context: CellAreaContext, width: number, minimum_height: number, natural_height: number) => void;
  static get_preferred_width_for_height: (context: CellAreaContext, height: number, minimum_width: number, natural_width: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
}
export class CellAreaContextPrivate {}
export class CellAreaPrivate {}
export class CellEditableIface {
  static g_iface: GObject.TypeInterface;
  static editing_done: (cell_editable: any) => void;
  static remove_widget: (cell_editable: any) => void;
  static start_editing: (cell_editable: any, event: Gdk.Event | null) => void;
}
export class CellLayoutIface {
  static g_iface: GObject.TypeInterface;
  static pack_start: (cell_layout: any, cell: CellRenderer, expand: boolean) => void;
  static pack_end: (cell_layout: any, cell: CellRenderer, expand: boolean) => void;
  static clear: (cell_layout: any) => void;
  static add_attribute: (cell_layout: any, cell: CellRenderer, attribute: string, column: number) => void;
  static set_cell_data_func: (cell_layout: any, cell: CellRenderer, func: CellLayoutDataFunc | null, func_data: object | null, destroy: GLib.DestroyNotify) => void;
  static clear_attributes: (cell_layout: any, cell: CellRenderer) => void;
  static reorder: (cell_layout: any, cell: CellRenderer, position: number) => void;
  static get_cells: (cell_layout: any) => GLib.List;
  static get_area: (cell_layout: any) => CellArea | null;
}
export class CellRendererAccelClass {
  static parent_class: CellRendererTextClass;
  static accel_edited: (accel: CellRendererAccel, path_string: string, accel_key: number, accel_mods: Gdk.ModifierType, hardware_keycode: number) => void;
  static accel_cleared: (accel: CellRendererAccel, path_string: string) => void;
  static _gtk_reserved0: () => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererAccelPrivate {}
export class CellRendererClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static get_request_mode: (cell: CellRenderer) => SizeRequestMode;
  static get_preferred_width: (cell: CellRenderer, widget: Widget, minimum_size: number, natural_size: number) => void;
  static get_preferred_height_for_width: (cell: CellRenderer, widget: Widget, width: number, minimum_height: number, natural_height: number) => void;
  static get_preferred_height: (cell: CellRenderer, widget: Widget, minimum_size: number, natural_size: number) => void;
  static get_preferred_width_for_height: (cell: CellRenderer, widget: Widget, height: number, minimum_width: number, natural_width: number) => void;
  static get_aligned_area: (cell: CellRenderer, widget: Widget, flags: CellRendererState, cell_area: Gdk.Rectangle, aligned_area: Gdk.Rectangle) => void;
  static get_size: (cell: CellRenderer, widget: Widget, cell_area: Gdk.Rectangle | null, x_offset: number, y_offset: number, width: number, height: number) => void;
  static render: (cell: CellRenderer, cr: cairo.Context, widget: Widget, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState) => void;
  static activate: (cell: CellRenderer, event: Gdk.Event, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState) => boolean;
  static start_editing: (cell: CellRenderer, event: Gdk.Event | null, widget: Widget, path: string, background_area: Gdk.Rectangle, cell_area: Gdk.Rectangle, flags: CellRendererState) => any | null;
  static editing_canceled: (cell: CellRenderer) => void;
  static editing_started: (cell: CellRenderer, editable: any, path: string) => void;
  static priv: CellRendererClassPrivate;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  set_accessible_type(type: any): void;
}
export class CellRendererClassPrivate {}
export class CellRendererComboClass {
  static parent: CellRendererTextClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererComboPrivate {}
export class CellRendererPixbufClass {
  static parent_class: CellRendererClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererPixbufPrivate {}
export class CellRendererPrivate {}
export class CellRendererProgressClass {
  static parent_class: CellRendererClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererProgressPrivate {}
export class CellRendererSpinClass {
  static parent: CellRendererTextClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererSpinPrivate {}
export class CellRendererSpinnerClass {
  static parent_class: CellRendererClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererSpinnerPrivate {}
export class CellRendererTextClass {
  static parent_class: CellRendererClass;
  static edited: (cell_renderer_text: CellRendererText, path: string, new_text: string) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererTextPrivate {}
export class CellRendererToggleClass {
  static parent_class: CellRendererClass;
  static toggled: (cell_renderer_toggle: CellRendererToggle, path: string) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellRendererTogglePrivate {}
export class CellViewClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CellViewPrivate {}
export class CheckButtonClass {
  static parent_class: ToggleButtonClass;
  static draw_indicator: (check_button: CheckButton, cr: cairo.Context) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CheckMenuItemAccessibleClass {
  static parent_class: MenuItemAccessibleClass;
}
export class CheckMenuItemAccessiblePrivate {}
export class CheckMenuItemClass {
  static parent_class: MenuItemClass;
  static toggled: (check_menu_item: CheckMenuItem) => void;
  static draw_indicator: (check_menu_item: CheckMenuItem, cr: cairo.Context) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CheckMenuItemPrivate {}
export class ColorButtonClass {
  static parent_class: ButtonClass;
  static color_set: (cp: ColorButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ColorButtonPrivate {}
export class ColorChooserDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ColorChooserDialogPrivate {}
export class ColorChooserInterface {
  static base_interface: GObject.TypeInterface;
  static get_rgba: (chooser: any, color: Gdk.RGBA) => void;
  static set_rgba: (chooser: any, color: Gdk.RGBA) => void;
  static add_palette: (chooser: any, orientation: Orientation, colors_per_line: number, n_colors: number, colors: Gdk.RGBA[] | null) => void;
  static color_activated: (chooser: any, color: Gdk.RGBA) => void;
  static padding: object[];
}
export class ColorChooserWidgetClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class ColorChooserWidgetPrivate {}
export class ColorSelectionClass {
  static parent_class: BoxClass;
  static color_changed: (color_selection: ColorSelection) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ColorSelectionDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ColorSelectionDialogPrivate {}
export class ColorSelectionPrivate {}
export class ComboBoxAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class ComboBoxAccessiblePrivate {}
export class ComboBoxClass {
  static parent_class: BinClass;
  static changed: (combo_box: ComboBox) => void;
  static format_entry_text: (combo_box: ComboBox, path: string) => string;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
}
export class ComboBoxPrivate {}
export class ComboBoxTextClass {
  static parent_class: ComboBoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ComboBoxTextPrivate {}
export class ContainerAccessibleClass {
  static parent_class: WidgetAccessibleClass;
  static add_gtk: (container: Container, widget: Widget, data: object) => number;
  static remove_gtk: (container: Container, widget: Widget, data: object) => number;
}
export class ContainerAccessiblePrivate {}
export class ContainerCellAccessibleClass {
  static parent_class: CellAccessibleClass;
}
export class ContainerCellAccessiblePrivate {}
export class ContainerClass {
  static parent_class: WidgetClass;
  static add: (container: Container, widget: Widget) => void;
  static remove: (container: Container, widget: Widget) => void;
  static check_resize: (container: Container) => void;
  static forall: (container: Container, include_internals: boolean, callback: Callback, callback_data: object | null) => void;
  static set_focus_child: (container: Container, child: Widget | null) => void;
  static child_type: (container: Container) => any;
  static composite_name: (container: Container, child: Widget) => string;
  static set_child_property: (container: Container, child: Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec) => void;
  static get_child_property: (container: Container, child: Widget, property_id: number, value: GObject.Value, pspec: GObject.ParamSpec) => void;
  static get_path_for_child: (container: Container, child: Widget) => WidgetPath;
  static _handle_border_width: number;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
  find_child_property(property_name: string): GObject.ParamSpec | null;
  handle_border_width(): void;
  install_child_properties(n_pspecs: number, pspecs: GObject.ParamSpec[]): void;
  install_child_property(property_id: number, pspec: GObject.ParamSpec): void;
  list_child_properties(n_properties: number): GObject.ParamSpec[];
}
export class ContainerPrivate {}
export class CssProviderClass {
  static parent_class: GObject.ObjectClass;
  static parsing_error: (provider: CssProvider, section: CssSection, error: GLib.Error) => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class CssProviderPrivate {}
export class CssSection {
  get_end_line(): number;
  get_end_position(): number;
  get_file(): Gio.File;
  get_parent(): CssSection | null;
  get_section_type(): CssSectionType;
  get_start_line(): number;
  get_start_position(): number;
  ref(): CssSection;
  unref(): void;
}
export class DialogClass {
  static parent_class: WindowClass;
  static response: (dialog: Dialog, response_id: number) => void;
  static close: (dialog: Dialog) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class DialogPrivate {}
export class DrawingAreaClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class EditableInterface {
  static base_iface: GObject.TypeInterface;
  static insert_text: (editable: any, new_text: string, new_text_length: number, position: number) => void;
  static delete_text: (editable: any, start_pos: number, end_pos: number) => void;
  static changed: (editable: any) => void;
  static do_insert_text: (editable: any, new_text: string, new_text_length: number, position: number) => void;
  static do_delete_text: (editable: any, start_pos: number, end_pos: number) => void;
  static get_chars: (editable: any, start_pos: number, end_pos: number) => string;
  static set_selection_bounds: (editable: any, start_pos: number, end_pos: number) => void;
  static get_selection_bounds: (editable: any, start_pos: number, end_pos: number) => boolean;
  static set_position: (editable: any, position: number) => void;
  static get_position: (editable: any) => number;
}
export class EntryAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class EntryAccessiblePrivate {}
export class EntryBufferClass {
  static parent_class: GObject.ObjectClass;
  static inserted_text: (buffer: EntryBuffer, position: number, chars: string, n_chars: number) => void;
  static deleted_text: (buffer: EntryBuffer, position: number, n_chars: number) => void;
  static get_text: (buffer: EntryBuffer, n_bytes: number) => string;
  static get_length: (buffer: EntryBuffer) => number;
  static insert_text: (buffer: EntryBuffer, position: number, chars: string, n_chars: number) => number;
  static delete_text: (buffer: EntryBuffer, position: number, n_chars: number) => number;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class EntryBufferPrivate {}
export class EntryClass {
  static parent_class: WidgetClass;
  static populate_popup: (entry: Entry, popup: Widget) => void;
  static activate: (entry: Entry) => void;
  static move_cursor: (entry: Entry, step: MovementStep, count: number, extend_selection: boolean) => void;
  static insert_at_cursor: (entry: Entry, str: string) => void;
  static delete_from_cursor: (entry: Entry, type: DeleteType, count: number) => void;
  static backspace: (entry: Entry) => void;
  static cut_clipboard: (entry: Entry) => void;
  static copy_clipboard: (entry: Entry) => void;
  static paste_clipboard: (entry: Entry) => void;
  static toggle_overwrite: (entry: Entry) => void;
  static get_text_area_size: (entry: Entry, x: number, y: number, width: number, height: number) => void;
  static get_frame_size: (entry: Entry, x: number, y: number, width: number, height: number) => void;
  static insert_emoji: (entry: Entry) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
}
export class EntryCompletionClass {
  static parent_class: GObject.ObjectClass;
  static match_selected: (completion: EntryCompletion, model: any, iter: TreeIter) => boolean;
  static action_activated: (completion: EntryCompletion, index_: number) => void;
  static insert_prefix: (completion: EntryCompletion, prefix: string) => boolean;
  static cursor_on_match: (completion: EntryCompletion, model: any, iter: TreeIter) => boolean;
  static no_matches: (completion: EntryCompletion) => void;
  static _gtk_reserved0: () => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
}
export class EntryCompletionPrivate {}
export class EntryPrivate {}
export class EventBoxClass {
  static parent_class: BinClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class EventBoxPrivate {}
export class EventControllerClass {}
export class EventControllerKeyClass {}
export class EventControllerMotionClass {}
export class EventControllerScrollClass {}
export class ExpanderAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class ExpanderAccessiblePrivate {}
export class ExpanderClass {
  static parent_class: BinClass;
  static activate: (expander: Expander) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ExpanderPrivate {}
export class FileChooserButtonClass {
  static parent_class: BoxClass;
  static file_set: (fc: FileChooserButton) => void;
  static __gtk_reserved1: () => void;
  static __gtk_reserved2: () => void;
  static __gtk_reserved3: () => void;
  static __gtk_reserved4: () => void;
}
export class FileChooserButtonPrivate {}
export class FileChooserDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FileChooserDialogPrivate {}
export class FileChooserNativeClass {
  static parent_class: NativeDialogClass;
}
export class FileChooserWidgetClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FileChooserWidgetPrivate {}
export class FileFilterInfo {
  static contains: FileFilterFlags;
  static filename: string;
  static uri: string;
  static display_name: string;
  static mime_type: string;
}
export class FixedChild {
  static widget: Widget;
  static x: number;
  static y: number;
}
export class FixedClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FixedPrivate {}
export class FlowBoxAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class FlowBoxAccessiblePrivate {}
export class FlowBoxChildAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class FlowBoxChildClass {
  static parent_class: BinClass;
  static activate: (child: FlowBoxChild) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
}
export class FlowBoxClass {
  static parent_class: ContainerClass;
  static child_activated: (box: FlowBox, child: FlowBoxChild) => void;
  static selected_children_changed: (box: FlowBox) => void;
  static activate_cursor_child: (box: FlowBox) => void;
  static toggle_cursor_child: (box: FlowBox) => void;
  static move_cursor: (box: FlowBox, step: MovementStep, count: number) => boolean;
  static select_all: (box: FlowBox) => void;
  static unselect_all: (box: FlowBox) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
}
export class FontButtonClass {
  static parent_class: ButtonClass;
  static font_set: (gfp: FontButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FontButtonPrivate {}
export class FontChooserDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FontChooserDialogPrivate {}
export class FontChooserIface {
  static base_iface: GObject.TypeInterface;
  static get_font_family: (fontchooser: any) => Pango.FontFamily | null;
  static get_font_face: (fontchooser: any) => Pango.FontFace | null;
  static get_font_size: (fontchooser: any) => number;
  static set_filter_func: (fontchooser: any, filter: FontFilterFunc | null, user_data: object | null, destroy: GLib.DestroyNotify) => void;
  static font_activated: (chooser: any, fontname: string) => void;
  static set_font_map: (fontchooser: any, fontmap: Pango.FontMap | null) => void;
  static get_font_map: (fontchooser: any) => Pango.FontMap | null;
  static padding: object[];
}
export class FontChooserWidgetClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class FontChooserWidgetPrivate {}
export class FontSelectionClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FontSelectionDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FontSelectionDialogPrivate {}
export class FontSelectionPrivate {}
export class FrameAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class FrameAccessiblePrivate {}
export class FrameClass {
  static parent_class: BinClass;
  static compute_child_allocation: (frame: Frame, allocation: Allocation) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class FramePrivate {}
export class GLAreaClass {
  static parent_class: WidgetClass;
  static render: (area: GLArea, context: Gdk.GLContext) => boolean;
  static resize: (area: GLArea, width: number, height: number) => void;
  static create_context: (area: GLArea) => Gdk.GLContext;
  static _padding: object[];
}
export class GestureClass {}
export class GestureDragClass {}
export class GestureLongPressClass {}
export class GestureMultiPressClass {}
export class GesturePanClass {}
export class GestureRotateClass {}
export class GestureSingleClass {}
export class GestureStylusClass {}
export class GestureSwipeClass {}
export class GestureZoomClass {}
export class Gradient {
  constructor(x0: number, y0: number, x1: number, y1: number);
  add_color_stop(offset: number, color: SymbolicColor): void;
  ref(): Gradient;
  resolve(props: StyleProperties, resolved_gradient: cairo.Pattern): boolean;
  resolve_for_context(context: StyleContext): cairo.Pattern;
  to_string(): string;
  unref(): void;
}
export class GridClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class GridPrivate {}
export class HBoxClass {
  static parent_class: BoxClass;
}
export class HButtonBoxClass {
  static parent_class: ButtonBoxClass;
}
export class HPanedClass {
  static parent_class: PanedClass;
}
export class HSVClass {
  static parent_class: WidgetClass;
  static changed: (hsv: HSV) => void;
  static move: (hsv: HSV, type: DirectionType) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class HSVPrivate {}
export class HScaleClass {
  static parent_class: ScaleClass;
}
export class HScrollbarClass {
  static parent_class: ScrollbarClass;
}
export class HSeparatorClass {
  static parent_class: SeparatorClass;
}
export class HandleBoxClass {
  static parent_class: BinClass;
  static child_attached: (handle_box: HandleBox, child: Widget) => void;
  static child_detached: (handle_box: HandleBox, child: Widget) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class HandleBoxPrivate {}
export class HeaderBarAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class HeaderBarAccessiblePrivate {}
export class HeaderBarClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class HeaderBarPrivate {}
export class IMContextClass {
  static parent_class: GObject.ObjectClass;
  static preedit_start: (context: IMContext) => void;
  static preedit_end: (context: IMContext) => void;
  static preedit_changed: (context: IMContext) => void;
  static commit: (context: IMContext, str: string) => void;
  static retrieve_surrounding: (context: IMContext) => boolean;
  static delete_surrounding: (context: IMContext, offset: number, n_chars: number) => boolean;
  static set_client_window: (context: IMContext, window: Gdk.Window | null) => void;
  static get_preedit_string: (context: IMContext, str: string, attrs: Pango.AttrList, cursor_pos: number) => void;
  static filter_keypress: (context: IMContext, event: Gdk.EventKey) => boolean;
  static focus_in: (context: IMContext) => void;
  static focus_out: (context: IMContext) => void;
  static reset: (context: IMContext) => void;
  static set_cursor_location: (context: IMContext, area: Gdk.Rectangle) => void;
  static set_use_preedit: (context: IMContext, use_preedit: boolean) => void;
  static set_surrounding: (context: IMContext, text: string, len: number, cursor_index: number) => void;
  static get_surrounding: (context: IMContext, text: string, cursor_index: number) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
}
export class IMContextInfo {
  static context_id: string;
  static context_name: string;
  static domain: string;
  static domain_dirname: string;
  static default_locales: string;
}
export class IMContextSimpleClass {
  static parent_class: IMContextClass;
}
export class IMContextSimplePrivate {}
export class IMMulticontextClass {
  static parent_class: IMContextClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class IMMulticontextPrivate {}
export class IconFactoryClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class IconFactoryPrivate {}
export class IconInfoClass {}
export class IconSet {
  constructor();
  add_source(source: IconSource): void;
  copy(): IconSet;
  get_sizes(sizes: number[], n_sizes: number): void;
  ref(): IconSet;
  render_icon(style: Style | null, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null): GdkPixbuf.Pixbuf;
  render_icon_pixbuf(context: StyleContext, size: number): GdkPixbuf.Pixbuf;
  render_icon_surface(context: StyleContext, size: number, scale: number, for_window: Gdk.Window | null): cairo.Surface;
  unref(): void;
}
export class IconSource {
  constructor();
  copy(): IconSource;
  free(): void;
  get_direction(): TextDirection;
  get_direction_wildcarded(): boolean;
  get_filename(): any;
  get_icon_name(): string;
  get_pixbuf(): GdkPixbuf.Pixbuf;
  get_size(): number;
  get_size_wildcarded(): boolean;
  get_state(): StateType;
  get_state_wildcarded(): boolean;
  set_direction(direction: TextDirection): void;
  set_direction_wildcarded(setting: boolean): void;
  set_filename(filename: any): void;
  set_icon_name(icon_name: string | null): void;
  set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): void;
  set_size(size: number): void;
  set_size_wildcarded(setting: boolean): void;
  set_state(state: StateType): void;
  set_state_wildcarded(setting: boolean): void;
}
export class IconThemeClass {
  static parent_class: GObject.ObjectClass;
  static changed: (icon_theme: IconTheme) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class IconThemePrivate {}
export class IconViewAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class IconViewAccessiblePrivate {}
export class IconViewClass {
  static parent_class: ContainerClass;
  static item_activated: (icon_view: IconView, path: TreePath) => void;
  static selection_changed: (icon_view: IconView) => void;
  static select_all: (icon_view: IconView) => void;
  static unselect_all: (icon_view: IconView) => void;
  static select_cursor_item: (icon_view: IconView) => void;
  static toggle_cursor_item: (icon_view: IconView) => void;
  static move_cursor: (icon_view: IconView, step: MovementStep, count: number) => boolean;
  static activate_cursor_item: (icon_view: IconView) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class IconViewPrivate {}
export class ImageAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class ImageAccessiblePrivate {}
export class ImageCellAccessibleClass {
  static parent_class: RendererCellAccessibleClass;
}
export class ImageCellAccessiblePrivate {}
export class ImageClass {
  static parent_class: MiscClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ImageMenuItemClass {
  static parent_class: MenuItemClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ImageMenuItemPrivate {}
export class ImagePrivate {}
export class InfoBarClass {
  static parent_class: BoxClass;
  static response: (info_bar: InfoBar, response_id: number) => void;
  static close: (info_bar: InfoBar) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class InfoBarPrivate {}
export class InvisibleClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class InvisiblePrivate {}
export class LabelAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class LabelAccessiblePrivate {}
export class LabelClass {
  static parent_class: MiscClass;
  static move_cursor: (label: Label, step: MovementStep, count: number, extend_selection: boolean) => void;
  static copy_clipboard: (label: Label) => void;
  static populate_popup: (label: Label, menu: Menu) => void;
  static activate_link: (label: Label, uri: string) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class LabelPrivate {}
export class LabelSelectionInfo {}
export class LayoutClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class LayoutPrivate {}
export class LevelBarAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class LevelBarAccessiblePrivate {}
export class LevelBarClass {
  static parent_class: WidgetClass;
  static offset_changed: (self: LevelBar, name: string) => void;
  static padding: object[];
}
export class LevelBarPrivate {}
export class LinkButtonAccessibleClass {
  static parent_class: ButtonAccessibleClass;
}
export class LinkButtonAccessiblePrivate {}
export class LinkButtonClass {
  static parent_class: ButtonClass;
  static activate_link: (button: LinkButton) => boolean;
  static _gtk_padding1: () => void;
  static _gtk_padding2: () => void;
  static _gtk_padding3: () => void;
  static _gtk_padding4: () => void;
}
export class LinkButtonPrivate {}
export class ListBoxAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class ListBoxAccessiblePrivate {}
export class ListBoxClass {
  static parent_class: ContainerClass;
  static row_selected: (box: ListBox, row: ListBoxRow) => void;
  static row_activated: (box: ListBox, row: ListBoxRow) => void;
  static activate_cursor_row: (box: ListBox) => void;
  static toggle_cursor_row: (box: ListBox) => void;
  static move_cursor: (box: ListBox, step: MovementStep, count: number) => void;
  static selected_rows_changed: (box: ListBox) => void;
  static select_all: (box: ListBox) => void;
  static unselect_all: (box: ListBox) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
}
export class ListBoxRowAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class ListBoxRowClass {
  static parent_class: BinClass;
  static activate: (row: ListBoxRow) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
}
export class ListStoreClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ListStorePrivate {}
export class LockButtonAccessibleClass {
  static parent_class: ButtonAccessibleClass;
}
export class LockButtonAccessiblePrivate {}
export class LockButtonClass {
  static parent_class: ButtonClass;
  static reserved0: () => void;
  static reserved1: () => void;
  static reserved2: () => void;
  static reserved3: () => void;
  static reserved4: () => void;
  static reserved5: () => void;
  static reserved6: () => void;
  static reserved7: () => void;
}
export class LockButtonPrivate {}
export class MenuAccessibleClass {
  static parent_class: MenuShellAccessibleClass;
}
export class MenuAccessiblePrivate {}
export class MenuBarClass {
  static parent_class: MenuShellClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MenuBarPrivate {}
export class MenuButtonAccessibleClass {
  static parent_class: ToggleButtonAccessibleClass;
}
export class MenuButtonAccessiblePrivate {}
export class MenuButtonClass {
  static parent_class: ToggleButtonClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MenuButtonPrivate {}
export class MenuClass {
  static parent_class: MenuShellClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MenuItemAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class MenuItemAccessiblePrivate {}
export class MenuItemClass {
  static parent_class: BinClass;
  static hide_on_activate: number;
  static activate: (menu_item: MenuItem) => void;
  static activate_item: (menu_item: MenuItem) => void;
  static toggle_size_request: (menu_item: MenuItem, requisition: number) => void;
  static toggle_size_allocate: (menu_item: MenuItem, allocation: number) => void;
  static set_label: (menu_item: MenuItem, label: string) => void;
  static get_label: (menu_item: MenuItem) => string;
  static select: (menu_item: MenuItem) => void;
  static deselect: (menu_item: MenuItem) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MenuItemPrivate {}
export class MenuPrivate {}
export class MenuShellAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class MenuShellAccessiblePrivate {}
export class MenuShellClass {
  static parent_class: ContainerClass;
  static submenu_placement: number;
  static deactivate: (menu_shell: MenuShell) => void;
  static selection_done: (menu_shell: MenuShell) => void;
  static move_current: (menu_shell: MenuShell, direction: MenuDirectionType) => void;
  static activate_current: (menu_shell: MenuShell, force_hide: boolean) => void;
  static cancel: (menu_shell: MenuShell) => void;
  static select_item: (menu_shell: MenuShell, menu_item: Widget) => void;
  static insert: (menu_shell: MenuShell, child: Widget, position: number) => void;
  static get_popup_delay: (menu_shell: MenuShell) => number;
  static move_selected: (menu_shell: MenuShell, distance: number) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MenuShellPrivate {}
export class MenuToolButtonClass {
  static parent_class: ToolButtonClass;
  static show_menu: (button: MenuToolButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MenuToolButtonPrivate {}
export class MessageDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MessageDialogPrivate {}
export class MiscClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MiscPrivate {}
export class MountOperationClass {
  static parent_class: Gio.MountOperationClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class MountOperationPrivate {}
export class NativeDialogClass {
  static parent_class: GObject.ObjectClass;
  static response: (self: NativeDialog, response_id: number) => void;
  static show: (self: NativeDialog) => void;
  static hide: (self: NativeDialog) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class NotebookAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class NotebookAccessiblePrivate {}
export class NotebookClass {
  static parent_class: ContainerClass;
  static switch_page: (notebook: Notebook, page: Widget, page_num: number) => void;
  static select_page: (notebook: Notebook, move_focus: boolean) => boolean;
  static focus_tab: (notebook: Notebook, type: NotebookTab) => boolean;
  static change_current_page: (notebook: Notebook, offset: number) => boolean;
  static move_focus_out: (notebook: Notebook, direction: DirectionType) => void;
  static reorder_tab: (notebook: Notebook, direction: DirectionType, move_to_last: boolean) => boolean;
  static insert_page: (notebook: Notebook, child: Widget, tab_label: Widget, menu_label: Widget, position: number) => number;
  static create_window: (notebook: Notebook, page: Widget, x: number, y: number) => Notebook;
  static page_reordered: (notebook: Notebook, child: Widget, page_num: number) => void;
  static page_removed: (notebook: Notebook, child: Widget, page_num: number) => void;
  static page_added: (notebook: Notebook, child: Widget, page_num: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class NotebookPageAccessibleClass {
  static parent_class: Atk.ObjectClass;
}
export class NotebookPageAccessiblePrivate {}
export class NotebookPrivate {}
export class NumerableIconClass {
  static parent_class: Gio.EmblemedIconClass;
  static padding: object[];
}
export class NumerableIconPrivate {}
export class OffscreenWindowClass {
  static parent_class: WindowClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class OrientableIface {
  static base_iface: GObject.TypeInterface;
}
export class OverlayClass {
  static parent_class: BinClass;
  static get_child_position: (overlay: Overlay, widget: Widget, allocation: Allocation) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class OverlayPrivate {}
export class PadActionEntry {
  static type: PadActionType;
  static index: number;
  static mode: number;
  static label: string;
  static action_name: string;
}
export class PadControllerClass {}
export class PageRange {
  static start: number;
  static end: number;
}
export class PanedAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class PanedAccessiblePrivate {}
export class PanedClass {
  static parent_class: ContainerClass;
  static cycle_child_focus: (paned: Paned, reverse: boolean) => boolean;
  static toggle_handle_focus: (paned: Paned) => boolean;
  static move_handle: (paned: Paned, scroll: ScrollType) => boolean;
  static cycle_handle_focus: (paned: Paned, reverse: boolean) => boolean;
  static accept_position: (paned: Paned) => boolean;
  static cancel_position: (paned: Paned) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class PanedPrivate {}
export class PaperSize {
  constructor(name: string | null);
  copy(): PaperSize;
  free(): void;
  get_default_bottom_margin(unit: Unit): number;
  get_default_left_margin(unit: Unit): number;
  get_default_right_margin(unit: Unit): number;
  get_default_top_margin(unit: Unit): number;
  get_display_name(): string;
  get_height(unit: Unit): number;
  get_name(): string;
  get_ppd_name(): string;
  get_width(unit: Unit): number;
  is_custom(): boolean;
  is_equal(size2: PaperSize): boolean;
  is_ipp(): boolean;
  set_size(width: number, height: number, unit: Unit): void;
  to_gvariant(): GLib.Variant;
  to_key_file(key_file: GLib.KeyFile, group_name: string): void;
  static get_default(): string;
  static get_paper_sizes(include_custom: boolean): GLib.List;
}
export class PlacesSidebarClass {}
export class PlugClass {
  static parent_class: WindowClass;
  static embedded: (plug: Plug) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class PlugPrivate {}
export class PopoverAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class PopoverClass {
  static parent_class: BinClass;
  static closed: (popover: Popover) => void;
  static reserved: object[];
}
export class PopoverMenuClass {
  static parent_class: PopoverClass;
  static reserved: object[];
}
export class PopoverPrivate {}
export class PrintOperationClass {
  static parent_class: GObject.ObjectClass;
  static done: (operation: PrintOperation, result: PrintOperationResult) => void;
  static begin_print: (operation: PrintOperation, context: PrintContext) => void;
  static paginate: (operation: PrintOperation, context: PrintContext) => boolean;
  static request_page_setup: (operation: PrintOperation, context: PrintContext, page_nr: number, setup: PageSetup) => void;
  static draw_page: (operation: PrintOperation, context: PrintContext, page_nr: number) => void;
  static end_print: (operation: PrintOperation, context: PrintContext) => void;
  static status_changed: (operation: PrintOperation) => void;
  static create_custom_widget: (operation: PrintOperation) => Widget;
  static custom_widget_apply: (operation: PrintOperation, widget: Widget) => void;
  static preview: (operation: PrintOperation, preview: any, context: PrintContext, parent: Window) => boolean;
  static update_custom_widget: (operation: PrintOperation, widget: Widget, setup: PageSetup, settings: PrintSettings) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class PrintOperationPreviewIface {
  static g_iface: GObject.TypeInterface;
  static ready: (preview: any, context: PrintContext) => void;
  static got_page_size: (preview: any, context: PrintContext, page_setup: PageSetup) => void;
  static render_page: (preview: any, page_nr: number) => void;
  static is_selected: (preview: any, page_nr: number) => boolean;
  static end_preview: (preview: any) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class PrintOperationPrivate {}
export class ProgressBarAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class ProgressBarAccessiblePrivate {}
export class ProgressBarClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ProgressBarPrivate {}
export class RadioActionClass {
  static parent_class: ToggleActionClass;
  static changed: (action: RadioAction, current: RadioAction) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RadioActionEntry {
  static name: string;
  static stock_id: string;
  static label: string;
  static accelerator: string;
  static tooltip: string;
  static value: number;
}
export class RadioActionPrivate {}
export class RadioButtonAccessibleClass {
  static parent_class: ToggleButtonAccessibleClass;
}
export class RadioButtonAccessiblePrivate {}
export class RadioButtonClass {
  static parent_class: CheckButtonClass;
  static group_changed: (radio_button: RadioButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RadioButtonPrivate {}
export class RadioMenuItemAccessibleClass {
  static parent_class: CheckMenuItemAccessibleClass;
}
export class RadioMenuItemAccessiblePrivate {}
export class RadioMenuItemClass {
  static parent_class: CheckMenuItemClass;
  static group_changed: (radio_menu_item: RadioMenuItem) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RadioMenuItemPrivate {}
export class RadioToolButtonClass {
  static parent_class: ToggleToolButtonClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RangeAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class RangeAccessiblePrivate {}
export class RangeClass {
  static parent_class: WidgetClass;
  static slider_detail: string;
  static stepper_detail: string;
  static value_changed: (range: Range) => void;
  static adjust_bounds: (range: Range, new_value: number) => void;
  static move_slider: (range: Range, scroll: ScrollType) => void;
  static get_range_border: (range: Range, border_: Border) => void;
  static change_value: (range: Range, scroll: ScrollType, new_value: number) => boolean;
  static get_range_size_request: (range: Range, orientation: Orientation, minimum: number, natural: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
}
export class RangePrivate {}
export class RcContext {}
export class RcProperty {
  static type_name: GLib.Quark;
  static property_name: GLib.Quark;
  static origin: string;
  static value: GObject.Value;
  static parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
  static parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
  static parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
  static parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
  static parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
}
export class RcStyleClass {
  static parent_class: GObject.ObjectClass;
  static create_rc_style: (rc_style: RcStyle) => RcStyle;
  static parse: (rc_style: RcStyle, settings: Settings, scanner: GLib.Scanner) => number;
  static merge: (dest: RcStyle, src: RcStyle) => void;
  static create_style: (rc_style: RcStyle) => Style;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RecentActionClass {
  static parent_class: ActionClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RecentActionPrivate {}
export class RecentChooserDialogClass {
  static parent_class: DialogClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RecentChooserDialogPrivate {}
export class RecentChooserIface {
  static base_iface: GObject.TypeInterface;
  static set_current_uri: (chooser: any, uri: string) => boolean;
  static get_current_uri: (chooser: any) => string;
  static select_uri: (chooser: any, uri: string) => boolean;
  static unselect_uri: (chooser: any, uri: string) => void;
  static select_all: (chooser: any) => void;
  static unselect_all: (chooser: any) => void;
  static get_items: (chooser: any) => GLib.List;
  static get_recent_manager: (chooser: any) => RecentManager;
  static add_filter: (chooser: any, filter: RecentFilter) => void;
  static remove_filter: (chooser: any, filter: RecentFilter) => void;
  static list_filters: (chooser: any) => GLib.SList;
  static set_sort_func: (chooser: any, sort_func: RecentSortFunc, sort_data: object | null, data_destroy: GLib.DestroyNotify | null) => void;
  static item_activated: (chooser: any) => void;
  static selection_changed: (chooser: any) => void;
}
export class RecentChooserMenuClass {
  static parent_class: MenuClass;
  static gtk_recent1: () => void;
  static gtk_recent2: () => void;
  static gtk_recent3: () => void;
  static gtk_recent4: () => void;
}
export class RecentChooserMenuPrivate {}
export class RecentChooserWidgetClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class RecentChooserWidgetPrivate {}
export class RecentData {
  static display_name: string;
  static description: string;
  static mime_type: string;
  static app_name: string;
  static app_exec: string;
  static groups: string[];
  static is_private: boolean;
}
export class RecentFilterInfo {
  static contains: RecentFilterFlags;
  static uri: string;
  static display_name: string;
  static mime_type: string;
  static applications: string[];
  static groups: string[];
  static age: number;
}
export class RecentInfo {
  create_app_info(app_name: string | null): Gio.AppInfo | null;
  exists(): boolean;
  get_added(): number;
  get_age(): number;
  get_application_info(app_name: string, app_exec: string, count: number, time_: number): boolean;
  get_applications(length?: number): string[];
  get_description(): string;
  get_display_name(): string;
  get_gicon(): Gio.Icon | null;
  get_groups(length?: number): string[];
  get_icon(size: number): GdkPixbuf.Pixbuf | null;
  get_mime_type(): string;
  get_modified(): number;
  get_private_hint(): boolean;
  get_short_name(): string;
  get_uri(): string;
  get_uri_display(): string | null;
  get_visited(): number;
  has_application(app_name: string): boolean;
  has_group(group_name: string): boolean;
  is_local(): boolean;
  last_application(): string;
  match(info_b: RecentInfo): boolean;
  ref(): RecentInfo;
  unref(): void;
}
export class RecentManagerClass {
  static parent_class: GObject.ObjectClass;
  static changed: (manager: RecentManager) => void;
  static _gtk_recent1: () => void;
  static _gtk_recent2: () => void;
  static _gtk_recent3: () => void;
  static _gtk_recent4: () => void;
}
export class RecentManagerPrivate {}
export class RendererCellAccessibleClass {
  static parent_class: CellAccessibleClass;
}
export class RendererCellAccessiblePrivate {}
export class RequestedSize {
  static data: object;
  static minimum_size: number;
  static natural_size: number;
}
export class Requisition {
  constructor();
  static width: number;
  static height: number;
  copy(): Requisition;
  free(): void;
}
export class RevealerClass {
  static parent_class: BinClass;
}
export class ScaleAccessibleClass {
  static parent_class: RangeAccessibleClass;
}
export class ScaleAccessiblePrivate {}
export class ScaleButtonAccessibleClass {
  static parent_class: ButtonAccessibleClass;
}
export class ScaleButtonAccessiblePrivate {}
export class ScaleButtonClass {
  static parent_class: ButtonClass;
  static value_changed: (button: ScaleButton, value: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ScaleButtonPrivate {}
export class ScaleClass {
  static parent_class: RangeClass;
  static format_value: (scale: Scale, value: number) => string;
  static draw_value: (scale: Scale) => void;
  static get_layout_offsets: (scale: Scale, x: number, y: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ScalePrivate {}
export class ScrollableInterface {
  static base_iface: GObject.TypeInterface;
  static get_border: (scrollable: any, border: Border) => boolean;
}
export class ScrollbarClass {
  static parent_class: RangeClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ScrolledWindowAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class ScrolledWindowAccessiblePrivate {}
export class ScrolledWindowClass {
  static parent_class: BinClass;
  static scrollbar_spacing: number;
  static scroll_child: (scrolled_window: ScrolledWindow, scroll: ScrollType, horizontal: boolean) => boolean;
  static move_focus_out: (scrolled_window: ScrolledWindow, direction: DirectionType) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ScrolledWindowPrivate {}
export class SearchBarClass {
  static parent_class: BinClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SearchEntryClass {
  static parent_class: EntryClass;
  static search_changed: (entry: SearchEntry) => void;
  static next_match: (entry: SearchEntry) => void;
  static previous_match: (entry: SearchEntry) => void;
  static stop_search: (entry: SearchEntry) => void;
}
export class SelectionData {
  copy(): SelectionData;
  free(): void;
  get_data(): number[];
  get_data_type(): Gdk.Atom;
  get_data_with_length(length: number): number[];
  get_display(): Gdk.Display;
  get_format(): number;
  get_length(): number;
  get_pixbuf(): GdkPixbuf.Pixbuf | null;
  get_selection(): Gdk.Atom;
  get_target(): Gdk.Atom;
  get_targets(targets: Gdk.Atom[], n_atoms: number): boolean;
  get_text(): string | null;
  get_uris(): string[];
  set(type: Gdk.Atom, format: number, data: number[], length: number): void;
  set_pixbuf(pixbuf: GdkPixbuf.Pixbuf): boolean;
  set_text(str: string, len: number): boolean;
  set_uris(uris: string[]): boolean;
  targets_include_image(writable: boolean): boolean;
  targets_include_rich_text(buffer: TextBuffer): boolean;
  targets_include_text(): boolean;
  targets_include_uri(): boolean;
}
export class SeparatorClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SeparatorMenuItemClass {
  static parent_class: MenuItemClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SeparatorPrivate {}
export class SeparatorToolItemClass {
  static parent_class: ToolItemClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SeparatorToolItemPrivate {}
export class SettingsClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SettingsPrivate {}
export class SettingsValue {
  static origin: string;
  static value: GObject.Value;
}
export class ShortcutLabelClass {}
export class ShortcutsGroupClass {}
export class ShortcutsSectionClass {}
export class ShortcutsShortcutClass {}
export class ShortcutsWindowClass {
  static parent_class: WindowClass;
  static close: (self: ShortcutsWindow) => void;
  static search: (self: ShortcutsWindow) => void;
}
export class SizeGroupClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SizeGroupPrivate {}
export class SocketClass {
  static parent_class: ContainerClass;
  static plug_added: (socket_: Socket) => void;
  static plug_removed: (socket_: Socket) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SocketPrivate {}
export class SpinButtonAccessibleClass {
  static parent_class: EntryAccessibleClass;
}
export class SpinButtonAccessiblePrivate {}
export class SpinButtonClass {
  static parent_class: EntryClass;
  static input: (spin_button: SpinButton, new_value: number) => number;
  static output: (spin_button: SpinButton) => number;
  static value_changed: (spin_button: SpinButton) => void;
  static change_value: (spin_button: SpinButton, scroll: ScrollType) => void;
  static wrapped: (spin_button: SpinButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SpinButtonPrivate {}
export class SpinnerAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class SpinnerAccessiblePrivate {}
export class SpinnerClass {
  static parent_class: WidgetClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class SpinnerPrivate {}
export class StackAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class StackClass {
  static parent_class: ContainerClass;
}
export class StackSidebarClass {
  static parent_class: BinClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class StackSidebarPrivate {}
export class StackSwitcherClass {
  static parent_class: BoxClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class StatusIconClass {
  static parent_class: GObject.ObjectClass;
  static activate: (status_icon: StatusIcon) => void;
  static popup_menu: (status_icon: StatusIcon, button: number, activate_time: number) => void;
  static size_changed: (status_icon: StatusIcon, size: number) => boolean;
  static button_press_event: (status_icon: StatusIcon, event: Gdk.EventButton) => boolean;
  static button_release_event: (status_icon: StatusIcon, event: Gdk.EventButton) => boolean;
  static scroll_event: (status_icon: StatusIcon, event: Gdk.EventScroll) => boolean;
  static query_tooltip: (status_icon: StatusIcon, x: number, y: number, keyboard_mode: boolean, tooltip: Tooltip) => boolean;
  static __gtk_reserved1: () => void;
  static __gtk_reserved2: () => void;
  static __gtk_reserved3: () => void;
  static __gtk_reserved4: () => void;
}
export class StatusIconPrivate {}
export class StatusbarAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class StatusbarAccessiblePrivate {}
export class StatusbarClass {
  static parent_class: BoxClass;
  static reserved: object;
  static text_pushed: (statusbar: Statusbar, context_id: number, text: string) => void;
  static text_popped: (statusbar: Statusbar, context_id: number, text: string) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class StatusbarPrivate {}
export class StockItem {
  static stock_id: string;
  static label: string;
  static modifier: Gdk.ModifierType;
  static keyval: number;
  static translation_domain: string;
  copy(): StockItem;
  free(): void;
}
export class StyleClass {
  static parent_class: GObject.ObjectClass;
  static realize: (style: Style) => void;
  static unrealize: (style: Style) => void;
  static copy: (style: Style, src: Style) => void;
  static clone: (style: Style) => Style;
  static init_from_rc: (style: Style, rc_style: RcStyle) => void;
  static set_background: (style: Style, window: Gdk.Window, state_type: StateType) => void;
  static render_icon: (style: Style, source: IconSource, direction: TextDirection, state: StateType, size: number, widget: Widget | null, detail: string | null) => GdkPixbuf.Pixbuf;
  static draw_hline: (style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x1: number, x2: number, y: number) => void;
  static draw_vline: (style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, y1_: number, y2_: number, x: number) => void;
  static draw_shadow: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_arrow: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number) => void;
  static draw_diamond: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_box: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_flat_box: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_check: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_option: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_tab: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_shadow_gap: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number) => void;
  static draw_box_gap: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number) => void;
  static draw_extension: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, gap_side: PositionType) => void;
  static draw_focus: (style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, width: number, height: number) => void;
  static draw_slider: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation) => void;
  static draw_handle: (style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget, detail: string, x: number, y: number, width: number, height: number, orientation: Orientation) => void;
  static draw_expander: (style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, x: number, y: number, expander_style: ExpanderStyle) => void;
  static draw_layout: (style: Style, cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget, detail: string, x: number, y: number, layout: Pango.Layout) => void;
  static draw_resize_grip: (style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number) => void;
  static draw_spinner: (style: Style, cr: cairo.Context, state_type: StateType, widget: Widget, detail: string, step: number, x: number, y: number, width: number, height: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
  static _gtk_reserved9: () => void;
  static _gtk_reserved10: () => void;
  static _gtk_reserved11: () => void;
}
export class StyleContextClass {
  static parent_class: GObject.ObjectClass;
  static changed: (context: StyleContext) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class StyleContextPrivate {}
export class StylePropertiesClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class StylePropertiesPrivate {}
export class StyleProviderIface {
  static g_iface: GObject.TypeInterface;
  static get_style: (provider: any, path: WidgetPath) => StyleProperties | null;
  static get_style_property: (provider: any, path: WidgetPath, state: StateFlags, pspec: GObject.ParamSpec, value: GObject.Value) => boolean;
  static get_icon_factory: (provider: any, path: WidgetPath) => IconFactory | null;
}
export class SwitchAccessibleClass {
  static parent_class: WidgetAccessibleClass;
}
export class SwitchAccessiblePrivate {}
export class SwitchClass {
  static parent_class: WidgetClass;
  static activate: (sw: Switch) => void;
  static state_set: (sw: Switch, state: boolean) => boolean;
  static _switch_padding_1: () => void;
  static _switch_padding_2: () => void;
  static _switch_padding_3: () => void;
  static _switch_padding_4: () => void;
  static _switch_padding_5: () => void;
}
export class SwitchPrivate {}
export class SymbolicColor {
  constructor(color: SymbolicColor, factor: number);
  ref(): SymbolicColor;
  resolve(props: StyleProperties | null, resolved_color: Gdk.RGBA): boolean;
  to_string(): string;
  unref(): void;
}
export class TableChild {
  static widget: Widget;
  static left_attach: number;
  static right_attach: number;
  static top_attach: number;
  static bottom_attach: number;
  static xpadding: number;
  static ypadding: number;
  static xexpand: number;
  static yexpand: number;
  static xshrink: number;
  static yshrink: number;
  static xfill: number;
  static yfill: number;
}
export class TableClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TablePrivate {}
export class TableRowCol {
  static requisition: number;
  static allocation: number;
  static spacing: number;
  static need_expand: number;
  static need_shrink: number;
  static expand: number;
  static shrink: number;
  static empty: number;
}
export class TargetEntry {
  constructor(target: string, flags: number, info: number);
  static target: string;
  static flags: number;
  static info: number;
  copy(): TargetEntry;
  free(): void;
}
export class TargetList {
  constructor(targets: TargetEntry[] | null, ntargets: number);
  add(target: Gdk.Atom, flags: number, info: number): void;
  add_image_targets(info: number, writable: boolean): void;
  add_rich_text_targets(info: number, deserializable: boolean, buffer: TextBuffer): void;
  add_table(targets: TargetEntry[], ntargets: number): void;
  add_text_targets(info: number): void;
  add_uri_targets(info: number): void;
  find(target: Gdk.Atom, info?: number): boolean;
  ref(): TargetList;
  remove(target: Gdk.Atom): void;
  unref(): void;
}
export class TargetPair {
  static target: Gdk.Atom;
  static flags: number;
  static info: number;
}
export class TearoffMenuItemClass {
  static parent_class: MenuItemClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TearoffMenuItemPrivate {}
export class TextAppearance {
  static bg_color: Gdk.Color;
  static fg_color: Gdk.Color;
  static rise: number;
  static underline: number;
  static strikethrough: number;
  static draw_bg: number;
  static inside_selection: number;
  static is_text: number;
}
export class TextAttributes {
  constructor();
  static refcount: number;
  static appearance: TextAppearance;
  static justification: Justification;
  static direction: TextDirection;
  static font: Pango.FontDescription;
  static font_scale: number;
  static left_margin: number;
  static right_margin: number;
  static indent: number;
  static pixels_above_lines: number;
  static pixels_below_lines: number;
  static pixels_inside_wrap: number;
  static tabs: Pango.TabArray;
  static wrap_mode: WrapMode;
  static language: Pango.Language;
  static pg_bg_color: Gdk.Color;
  static invisible: number;
  static bg_full_height: number;
  static editable: number;
  static no_fallback: number;
  static pg_bg_rgba: Gdk.RGBA;
  static letter_spacing: number;
  copy(): TextAttributes;
  copy_values(dest: TextAttributes): void;
  ref(): TextAttributes;
  unref(): void;
}
export class TextBTree {}
export class TextBufferClass {
  static parent_class: GObject.ObjectClass;
  static insert_text: (buffer: TextBuffer, pos: TextIter, new_text: string, new_text_length: number) => void;
  static insert_pixbuf: (buffer: TextBuffer, iter: TextIter, pixbuf: GdkPixbuf.Pixbuf) => void;
  static insert_child_anchor: (buffer: TextBuffer, iter: TextIter, anchor: TextChildAnchor) => void;
  static delete_range: (buffer: TextBuffer, start: TextIter, end: TextIter) => void;
  static changed: (buffer: TextBuffer) => void;
  static modified_changed: (buffer: TextBuffer) => void;
  static mark_set: (buffer: TextBuffer, location: TextIter, mark: TextMark) => void;
  static mark_deleted: (buffer: TextBuffer, mark: TextMark) => void;
  static apply_tag: (buffer: TextBuffer, tag: TextTag, start: TextIter, end: TextIter) => void;
  static remove_tag: (buffer: TextBuffer, tag: TextTag, start: TextIter, end: TextIter) => void;
  static begin_user_action: (buffer: TextBuffer) => void;
  static end_user_action: (buffer: TextBuffer) => void;
  static paste_done: (buffer: TextBuffer, clipboard: Clipboard) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TextBufferPrivate {}
export class TextCellAccessibleClass {
  static parent_class: RendererCellAccessibleClass;
}
export class TextCellAccessiblePrivate {}
export class TextChildAnchorClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TextIter {
  static dummy1: object;
  static dummy2: object;
  static dummy3: number;
  static dummy4: number;
  static dummy5: number;
  static dummy6: number;
  static dummy7: number;
  static dummy8: number;
  static dummy9: object;
  static dummy10: object;
  static dummy11: number;
  static dummy12: number;
  static dummy13: number;
  static dummy14: object;
  assign(other: TextIter): void;
  backward_char(): boolean;
  backward_chars(count: number): boolean;
  backward_cursor_position(): boolean;
  backward_cursor_positions(count: number): boolean;
  backward_find_char(pred: TextCharPredicate, user_data: object | null, limit: TextIter | null): boolean;
  backward_line(): boolean;
  backward_lines(count: number): boolean;
  backward_search(str: string, flags: TextSearchFlags, match_start?: TextIter, match_end?: TextIter, limit?: TextIter | null): boolean;
  backward_sentence_start(): boolean;
  backward_sentence_starts(count: number): boolean;
  backward_to_tag_toggle(tag: TextTag | null): boolean;
  backward_visible_cursor_position(): boolean;
  backward_visible_cursor_positions(count: number): boolean;
  backward_visible_line(): boolean;
  backward_visible_lines(count: number): boolean;
  backward_visible_word_start(): boolean;
  backward_visible_word_starts(count: number): boolean;
  backward_word_start(): boolean;
  backward_word_starts(count: number): boolean;
  begins_tag(tag: TextTag | null): boolean;
  can_insert(default_editability: boolean): boolean;
  compare(rhs: TextIter): number;
  copy(): TextIter;
  editable(default_setting: boolean): boolean;
  ends_line(): boolean;
  ends_sentence(): boolean;
  ends_tag(tag: TextTag | null): boolean;
  ends_word(): boolean;
  equal(rhs: TextIter): boolean;
  forward_char(): boolean;
  forward_chars(count: number): boolean;
  forward_cursor_position(): boolean;
  forward_cursor_positions(count: number): boolean;
  forward_find_char(pred: TextCharPredicate, user_data: object | null, limit: TextIter | null): boolean;
  forward_line(): boolean;
  forward_lines(count: number): boolean;
  forward_search(str: string, flags: TextSearchFlags, match_start?: TextIter, match_end?: TextIter, limit?: TextIter | null): boolean;
  forward_sentence_end(): boolean;
  forward_sentence_ends(count: number): boolean;
  forward_to_end(): void;
  forward_to_line_end(): boolean;
  forward_to_tag_toggle(tag: TextTag | null): boolean;
  forward_visible_cursor_position(): boolean;
  forward_visible_cursor_positions(count: number): boolean;
  forward_visible_line(): boolean;
  forward_visible_lines(count: number): boolean;
  forward_visible_word_end(): boolean;
  forward_visible_word_ends(count: number): boolean;
  forward_word_end(): boolean;
  forward_word_ends(count: number): boolean;
  free(): void;
  get_attributes(values: TextAttributes): boolean;
  get_buffer(): TextBuffer;
  get_bytes_in_line(): number;
  get_char(): number;
  get_chars_in_line(): number;
  get_child_anchor(): TextChildAnchor;
  get_language(): Pango.Language;
  get_line(): number;
  get_line_index(): number;
  get_line_offset(): number;
  get_marks(): GLib.SList;
  get_offset(): number;
  get_pixbuf(): GdkPixbuf.Pixbuf;
  get_slice(end: TextIter): string;
  get_tags(): GLib.SList;
  get_text(end: TextIter): string;
  get_toggled_tags(toggled_on: boolean): GLib.SList;
  get_visible_line_index(): number;
  get_visible_line_offset(): number;
  get_visible_slice(end: TextIter): string;
  get_visible_text(end: TextIter): string;
  has_tag(tag: TextTag): boolean;
  in_range(start: TextIter, end: TextIter): boolean;
  inside_sentence(): boolean;
  inside_word(): boolean;
  is_cursor_position(): boolean;
  is_end(): boolean;
  is_start(): boolean;
  order(second: TextIter): void;
  set_line(line_number: number): void;
  set_line_index(byte_on_line: number): void;
  set_line_offset(char_on_line: number): void;
  set_offset(char_offset: number): void;
  set_visible_line_index(byte_on_line: number): void;
  set_visible_line_offset(char_on_line: number): void;
  starts_line(): boolean;
  starts_sentence(): boolean;
  starts_tag(tag: TextTag | null): boolean;
  starts_word(): boolean;
  toggles_tag(tag: TextTag | null): boolean;
}
export class TextMarkClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TextTagClass {
  static parent_class: GObject.ObjectClass;
  static event: (tag: TextTag, event_object: GObject.Object, event: Gdk.Event, iter: TextIter) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TextTagPrivate {}
export class TextTagTableClass {
  static parent_class: GObject.ObjectClass;
  static tag_changed: (table: TextTagTable, tag: TextTag, size_changed: boolean) => void;
  static tag_added: (table: TextTagTable, tag: TextTag) => void;
  static tag_removed: (table: TextTagTable, tag: TextTag) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TextTagTablePrivate {}
export class TextViewAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class TextViewAccessiblePrivate {}
export class TextViewClass {
  static parent_class: ContainerClass;
  static populate_popup: (text_view: TextView, popup: Widget) => void;
  static move_cursor: (text_view: TextView, step: MovementStep, count: number, extend_selection: boolean) => void;
  static set_anchor: (text_view: TextView) => void;
  static insert_at_cursor: (text_view: TextView, str: string) => void;
  static delete_from_cursor: (text_view: TextView, type: DeleteType, count: number) => void;
  static backspace: (text_view: TextView) => void;
  static cut_clipboard: (text_view: TextView) => void;
  static copy_clipboard: (text_view: TextView) => void;
  static paste_clipboard: (text_view: TextView) => void;
  static toggle_overwrite: (text_view: TextView) => void;
  static create_buffer: (text_view: TextView) => TextBuffer;
  static draw_layer: (text_view: TextView, layer: TextViewLayer, cr: cairo.Context) => void;
  static extend_selection: (text_view: TextView, granularity: TextExtendSelection, location: TextIter, start: TextIter, end: TextIter) => boolean;
  static insert_emoji: (text_view: TextView) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TextViewPrivate {}
export class ThemeEngine {}
export class ThemingEngineClass {
  static parent_class: GObject.ObjectClass;
  static render_line: (engine: ThemingEngine, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number) => void;
  static render_background: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_frame: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_frame_gap: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number) => void;
  static render_extension: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType) => void;
  static render_check: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_option: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_arrow: (engine: ThemingEngine, cr: cairo.Context, angle: number, x: number, y: number, size: number) => void;
  static render_expander: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_focus: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_layout: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, layout: Pango.Layout) => void;
  static render_slider: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation) => void;
  static render_handle: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_activity: (engine: ThemingEngine, cr: cairo.Context, x: number, y: number, width: number, height: number) => void;
  static render_icon_pixbuf: (engine: ThemingEngine, source: IconSource, size: IconSize) => GdkPixbuf.Pixbuf;
  static render_icon: (engine: ThemingEngine, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number) => void;
  static render_icon_surface: (engine: ThemingEngine, cr: cairo.Context, surface: cairo.Surface, x: number, y: number) => void;
  static padding: object[];
}
export class ThemingEnginePrivate {}
export class ToggleActionClass {
  static parent_class: ActionClass;
  static toggled: (action: ToggleAction) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToggleActionEntry {
  static name: string;
  static stock_id: string;
  static label: string;
  static accelerator: string;
  static tooltip: string;
  static callback: GObject.Callback;
  static is_active: boolean;
}
export class ToggleActionPrivate {}
export class ToggleButtonAccessibleClass {
  static parent_class: ButtonAccessibleClass;
}
export class ToggleButtonAccessiblePrivate {}
export class ToggleButtonClass {
  static parent_class: ButtonClass;
  static toggled: (toggle_button: ToggleButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToggleButtonPrivate {}
export class ToggleToolButtonClass {
  static parent_class: ToolButtonClass;
  static toggled: (button: ToggleToolButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToggleToolButtonPrivate {}
export class ToolButtonClass {
  static parent_class: ToolItemClass;
  static button_type: any;
  static clicked: (tool_item: ToolButton) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToolButtonPrivate {}
export class ToolItemClass {
  static parent_class: BinClass;
  static create_menu_proxy: (tool_item: ToolItem) => boolean;
  static toolbar_reconfigured: (tool_item: ToolItem) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToolItemGroupClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToolItemGroupPrivate {}
export class ToolItemPrivate {}
export class ToolPaletteClass {
  static parent_class: ContainerClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToolPalettePrivate {}
export class ToolShellIface {
  static g_iface: GObject.TypeInterface;
  static get_icon_size: (shell: any) => IconSize;
  static get_orientation: (shell: any) => Orientation;
  static get_style: (shell: any) => ToolbarStyle;
  static get_relief_style: (shell: any) => ReliefStyle;
  static rebuild_menu: (shell: any) => void;
  static get_text_orientation: (shell: any) => Orientation;
  static get_text_alignment: (shell: any) => number;
  static get_ellipsize_mode: (shell: any) => Pango.EllipsizeMode;
  static get_text_size_group: (shell: any) => SizeGroup;
}
export class ToolbarClass {
  static parent_class: ContainerClass;
  static orientation_changed: (toolbar: Toolbar, orientation: Orientation) => void;
  static style_changed: (toolbar: Toolbar, style: ToolbarStyle) => void;
  static popup_context_menu: (toolbar: Toolbar, x: number, y: number, button_number: number) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ToolbarPrivate {}
export class ToplevelAccessibleClass {
  static parent_class: Atk.ObjectClass;
}
export class ToplevelAccessiblePrivate {}
export class TreeDragDestIface {
  static g_iface: GObject.TypeInterface;
  static drag_data_received: (drag_dest: any, dest: TreePath, selection_data: SelectionData) => boolean;
  static row_drop_possible: (drag_dest: any, dest_path: TreePath, selection_data: SelectionData) => boolean;
}
export class TreeDragSourceIface {
  static g_iface: GObject.TypeInterface;
  static row_draggable: (drag_source: any, path: TreePath) => boolean;
  static drag_data_get: (drag_source: any, path: TreePath, selection_data: SelectionData) => boolean;
  static drag_data_delete: (drag_source: any, path: TreePath) => boolean;
}
export class TreeIter {
  static stamp: number;
  static user_data: object;
  static user_data2: object;
  static user_data3: object;
  copy(): TreeIter;
  free(): void;
}
export class TreeModelFilterClass {
  static parent_class: GObject.ObjectClass;
  static visible: (self: TreeModelFilter, child_model: any, iter: TreeIter) => boolean;
  static modify: (self: TreeModelFilter, child_model: any, iter: TreeIter, value: GObject.Value, column: number) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TreeModelFilterPrivate {}
export class TreeModelIface {
  static g_iface: GObject.TypeInterface;
  static row_changed: (tree_model: any, path: TreePath, iter: TreeIter) => void;
  static row_inserted: (tree_model: any, path: TreePath, iter: TreeIter) => void;
  static row_has_child_toggled: (tree_model: any, path: TreePath, iter: TreeIter) => void;
  static row_deleted: (tree_model: any, path: TreePath) => void;
  static rows_reordered: (tree_model: any, path: TreePath, iter: TreeIter, new_order: number) => void;
  static get_flags: (tree_model: any) => TreeModelFlags;
  static get_n_columns: (tree_model: any) => number;
  static get_column_type: (tree_model: any, index_: number) => any;
  static get_iter: (tree_model: any, iter: TreeIter, path: TreePath) => boolean;
  static get_path: (tree_model: any, iter: TreeIter) => TreePath;
  static get_value: (tree_model: any, iter: TreeIter, column: number, value: GObject.Value) => void;
  static iter_next: (tree_model: any, iter: TreeIter) => boolean;
  static iter_previous: (tree_model: any, iter: TreeIter) => boolean;
  static iter_children: (tree_model: any, iter: TreeIter, parent: TreeIter | null) => boolean;
  static iter_has_child: (tree_model: any, iter: TreeIter) => boolean;
  static iter_n_children: (tree_model: any, iter: TreeIter | null) => number;
  static iter_nth_child: (tree_model: any, iter: TreeIter, parent: TreeIter | null, n: number) => boolean;
  static iter_parent: (tree_model: any, iter: TreeIter, child: TreeIter) => boolean;
  static ref_node: (tree_model: any, iter: TreeIter) => void;
  static unref_node: (tree_model: any, iter: TreeIter) => void;
}
export class TreeModelSortClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TreeModelSortPrivate {}
export class TreePath {
  constructor();
  append_index(index_: number): void;
  compare(b: TreePath): number;
  copy(): TreePath;
  down(): void;
  free(): void;
  get_depth(): number;
  get_indices(): number;
  get_indices_with_depth(depth?: number): number[];
  is_ancestor(descendant: TreePath): boolean;
  is_descendant(ancestor: TreePath): boolean;
  next(): void;
  prepend_index(index_: number): void;
  prev(): boolean;
  to_string(): string;
  up(): boolean;
}
export class TreeRowReference {
  constructor(model: any, path: TreePath);
  copy(): TreeRowReference;
  free(): void;
  get_model(): any;
  get_path(): TreePath | null;
  valid(): boolean;
  static deleted(proxy: GObject.Object, path: TreePath): void;
  static inserted(proxy: GObject.Object, path: TreePath): void;
  static reordered(proxy: GObject.Object, path: TreePath, iter: TreeIter, new_order: number[]): void;
}
export class TreeSelectionClass {
  static parent_class: GObject.ObjectClass;
  static changed: (selection: TreeSelection) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TreeSelectionPrivate {}
export class TreeSortableIface {
  static g_iface: GObject.TypeInterface;
  static sort_column_changed: (sortable: any) => void;
  static get_sort_column_id: (sortable: any, sort_column_id: number, order: SortType) => boolean;
  static set_sort_column_id: (sortable: any, sort_column_id: number, order: SortType) => void;
  static set_sort_func: (sortable: any, sort_column_id: number, sort_func: TreeIterCompareFunc, user_data: object | null, destroy: GLib.DestroyNotify | null) => void;
  static set_default_sort_func: (sortable: any, sort_func: TreeIterCompareFunc, user_data: object | null, destroy: GLib.DestroyNotify | null) => void;
  static has_default_sort_func: (sortable: any) => boolean;
}
export class TreeStoreClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TreeStorePrivate {}
export class TreeViewAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class TreeViewAccessiblePrivate {}
export class TreeViewClass {
  static parent_class: ContainerClass;
  static row_activated: (tree_view: TreeView, path: TreePath, column: TreeViewColumn) => void;
  static test_expand_row: (tree_view: TreeView, iter: TreeIter, path: TreePath) => boolean;
  static test_collapse_row: (tree_view: TreeView, iter: TreeIter, path: TreePath) => boolean;
  static row_expanded: (tree_view: TreeView, iter: TreeIter, path: TreePath) => void;
  static row_collapsed: (tree_view: TreeView, iter: TreeIter, path: TreePath) => void;
  static columns_changed: (tree_view: TreeView) => void;
  static cursor_changed: (tree_view: TreeView) => void;
  static move_cursor: (tree_view: TreeView, step: MovementStep, count: number) => boolean;
  static select_all: (tree_view: TreeView) => boolean;
  static unselect_all: (tree_view: TreeView) => boolean;
  static select_cursor_row: (tree_view: TreeView, start_editing: boolean) => boolean;
  static toggle_cursor_row: (tree_view: TreeView) => boolean;
  static expand_collapse_cursor_row: (tree_view: TreeView, logical: boolean, expand: boolean, open_all: boolean) => boolean;
  static select_cursor_parent: (tree_view: TreeView) => boolean;
  static start_interactive_search: (tree_view: TreeView) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
  static _gtk_reserved5: () => void;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  static _gtk_reserved8: () => void;
}
export class TreeViewColumnClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static clicked: (tree_column: TreeViewColumn) => void;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class TreeViewColumnPrivate {}
export class TreeViewPrivate {}
export class UIManagerClass {
  static parent_class: GObject.ObjectClass;
  static add_widget: (manager: UIManager, widget: Widget) => void;
  static actions_changed: (manager: UIManager) => void;
  static connect_proxy: (manager: UIManager, action: Action, proxy: Widget) => void;
  static disconnect_proxy: (manager: UIManager, action: Action, proxy: Widget) => void;
  static pre_activate: (manager: UIManager, action: Action) => void;
  static post_activate: (manager: UIManager, action: Action) => void;
  static get_widget: (manager: UIManager, path: string) => Widget;
  static get_action: (manager: UIManager, path: string) => Action;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class UIManagerPrivate {}
export class VBoxClass {
  static parent_class: BoxClass;
}
export class VButtonBoxClass {
  static parent_class: ButtonBoxClass;
}
export class VPanedClass {
  static parent_class: PanedClass;
}
export class VScaleClass {
  static parent_class: ScaleClass;
}
export class VScrollbarClass {
  static parent_class: ScrollbarClass;
}
export class VSeparatorClass {
  static parent_class: SeparatorClass;
}
export class ViewportClass {
  static parent_class: BinClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class ViewportPrivate {}
export class VolumeButtonClass {
  static parent_class: ScaleButtonClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class WidgetAccessibleClass {
  static parent_class: AccessibleClass;
  static notify_gtk: (object: GObject.Object, pspec: GObject.ParamSpec) => void;
}
export class WidgetAccessiblePrivate {}
export class WidgetClass {
  static parent_class: GObject.InitiallyUnownedClass;
  static activate_signal: number;
  static dispatch_child_properties_changed: (widget: Widget, n_pspecs: number, pspecs: GObject.ParamSpec) => void;
  static destroy: (widget: Widget) => void;
  static show: (widget: Widget) => void;
  static show_all: (widget: Widget) => void;
  static hide: (widget: Widget) => void;
  static map: (widget: Widget) => void;
  static unmap: (widget: Widget) => void;
  static realize: (widget: Widget) => void;
  static unrealize: (widget: Widget) => void;
  static size_allocate: (widget: Widget, allocation: Allocation) => void;
  static state_changed: (widget: Widget, previous_state: StateType) => void;
  static state_flags_changed: (widget: Widget, previous_state_flags: StateFlags) => void;
  static parent_set: (widget: Widget, previous_parent: Widget) => void;
  static hierarchy_changed: (widget: Widget, previous_toplevel: Widget) => void;
  static style_set: (widget: Widget, previous_style: Style) => void;
  static direction_changed: (widget: Widget, previous_direction: TextDirection) => void;
  static grab_notify: (widget: Widget, was_grabbed: boolean) => void;
  static child_notify: (widget: Widget, child_property: GObject.ParamSpec) => void;
  static draw: (widget: Widget, cr: cairo.Context) => boolean;
  static get_request_mode: (widget: Widget) => SizeRequestMode;
  static get_preferred_height: (widget: Widget, minimum_height: number, natural_height: number) => void;
  static get_preferred_width_for_height: (widget: Widget, height: number, minimum_width: number, natural_width: number) => void;
  static get_preferred_width: (widget: Widget, minimum_width: number, natural_width: number) => void;
  static get_preferred_height_for_width: (widget: Widget, width: number, minimum_height: number, natural_height: number) => void;
  static mnemonic_activate: (widget: Widget, group_cycling: boolean) => boolean;
  static grab_focus: (widget: Widget) => void;
  static focus: (widget: Widget, direction: DirectionType) => boolean;
  static move_focus: (widget: Widget, direction: DirectionType) => void;
  static keynav_failed: (widget: Widget, direction: DirectionType) => boolean;
  static event: (widget: Widget, event: Gdk.Event) => boolean;
  static button_press_event: (widget: Widget, event: Gdk.EventButton) => boolean;
  static button_release_event: (widget: Widget, event: Gdk.EventButton) => boolean;
  static scroll_event: (widget: Widget, event: Gdk.EventScroll) => boolean;
  static motion_notify_event: (widget: Widget, event: Gdk.EventMotion) => boolean;
  static delete_event: (widget: Widget, event: Gdk.EventAny) => boolean;
  static destroy_event: (widget: Widget, event: Gdk.EventAny) => boolean;
  static key_press_event: (widget: Widget, event: Gdk.EventKey) => boolean;
  static key_release_event: (widget: Widget, event: Gdk.EventKey) => boolean;
  static enter_notify_event: (widget: Widget, event: Gdk.EventCrossing) => boolean;
  static leave_notify_event: (widget: Widget, event: Gdk.EventCrossing) => boolean;
  static configure_event: (widget: Widget, event: Gdk.EventConfigure) => boolean;
  static focus_in_event: (widget: Widget, event: Gdk.EventFocus) => boolean;
  static focus_out_event: (widget: Widget, event: Gdk.EventFocus) => boolean;
  static map_event: (widget: Widget, event: Gdk.EventAny) => boolean;
  static unmap_event: (widget: Widget, event: Gdk.EventAny) => boolean;
  static property_notify_event: (widget: Widget, event: Gdk.EventProperty) => boolean;
  static selection_clear_event: (widget: Widget, event: Gdk.EventSelection) => boolean;
  static selection_request_event: (widget: Widget, event: Gdk.EventSelection) => boolean;
  static selection_notify_event: (widget: Widget, event: Gdk.EventSelection) => boolean;
  static proximity_in_event: (widget: Widget, event: Gdk.EventProximity) => boolean;
  static proximity_out_event: (widget: Widget, event: Gdk.EventProximity) => boolean;
  static visibility_notify_event: (widget: Widget, event: Gdk.EventVisibility) => boolean;
  static window_state_event: (widget: Widget, event: Gdk.EventWindowState) => boolean;
  static damage_event: (widget: Widget, event: Gdk.EventExpose) => boolean;
  static grab_broken_event: (widget: Widget, event: Gdk.EventGrabBroken) => boolean;
  static selection_get: (widget: Widget, selection_data: SelectionData, info: number, time_: number) => void;
  static selection_received: (widget: Widget, selection_data: SelectionData, time_: number) => void;
  static drag_begin: (widget: Widget, context: Gdk.DragContext) => void;
  static drag_end: (widget: Widget, context: Gdk.DragContext) => void;
  static drag_data_get: (widget: Widget, context: Gdk.DragContext, selection_data: SelectionData, info: number, time_: number) => void;
  static drag_data_delete: (widget: Widget, context: Gdk.DragContext) => void;
  static drag_leave: (widget: Widget, context: Gdk.DragContext, time_: number) => void;
  static drag_motion: (widget: Widget, context: Gdk.DragContext, x: number, y: number, time_: number) => boolean;
  static drag_drop: (widget: Widget, context: Gdk.DragContext, x: number, y: number, time_: number) => boolean;
  static drag_data_received: (widget: Widget, context: Gdk.DragContext, x: number, y: number, selection_data: SelectionData, info: number, time_: number) => void;
  static drag_failed: (widget: Widget, context: Gdk.DragContext, result: DragResult) => boolean;
  static popup_menu: (widget: Widget) => boolean;
  static show_help: (widget: Widget, help_type: WidgetHelpType) => boolean;
  static get_accessible: (widget: Widget) => Atk.Object;
  static screen_changed: (widget: Widget, previous_screen: Gdk.Screen) => void;
  static can_activate_accel: (widget: Widget, signal_id: number) => boolean;
  static composited_changed: (widget: Widget) => void;
  static query_tooltip: (widget: Widget, x: number, y: number, keyboard_tooltip: boolean, tooltip: Tooltip) => boolean;
  static compute_expand: (widget: Widget, hexpand_p: boolean, vexpand_p: boolean) => void;
  static adjust_size_request: (widget: Widget, orientation: Orientation, minimum_size: number, natural_size: number) => void;
  static adjust_size_allocation: (widget: Widget, orientation: Orientation, minimum_size: number, natural_size: number, allocated_pos: number, allocated_size: number) => void;
  static style_updated: (widget: Widget) => void;
  static touch_event: (widget: Widget, event: Gdk.EventTouch) => boolean;
  static get_preferred_height_and_baseline_for_width: (widget: Widget, width: number, minimum_height: number, natural_height: number, minimum_baseline: number, natural_baseline: number) => void;
  static adjust_baseline_request: (widget: Widget, minimum_baseline: number, natural_baseline: number) => void;
  static adjust_baseline_allocation: (widget: Widget, baseline: number) => void;
  static queue_draw_region: (widget: Widget, region: cairo.Region) => void;
  static priv: WidgetClassPrivate;
  static _gtk_reserved6: () => void;
  static _gtk_reserved7: () => void;
  bind_template_callback_full(callback_name: string, callback_symbol: GObject.Callback): void;
  bind_template_child_full(name: string, internal_child: boolean, struct_offset: number): void;
  find_style_property(property_name: string): GObject.ParamSpec;
  get_css_name(): string;
  install_style_property(pspec: GObject.ParamSpec): void;
  install_style_property_parser(pspec: GObject.ParamSpec, parser: RcPropertyParser): void;
  list_style_properties(n_properties: number): GObject.ParamSpec[];
  set_accessible_role(role: Atk.Role): void;
  set_accessible_type(type: any): void;
  set_connect_func(connect_func: BuilderConnectFunc, connect_data: object | null, connect_data_destroy: GLib.DestroyNotify): void;
  set_css_name(name: string): void;
  set_template(template_bytes: GLib.Bytes): void;
  set_template_from_resource(resource_name: string): void;
}
export class WidgetClassPrivate {}
export class WidgetPath {
  constructor();
  append_for_widget(widget: Widget): number;
  append_type(type: any): number;
  append_with_siblings(siblings: WidgetPath, sibling_index: number): number;
  copy(): WidgetPath;
  free(): void;
  get_object_type(): any;
  has_parent(type: any): boolean;
  is_type(type: any): boolean;
  iter_add_class(pos: number, name: string): void;
  iter_add_region(pos: number, name: string, flags: RegionFlags): void;
  iter_clear_classes(pos: number): void;
  iter_clear_regions(pos: number): void;
  iter_get_name(pos: number): string | null;
  iter_get_object_name(pos: number): string | null;
  iter_get_object_type(pos: number): any;
  iter_get_sibling_index(pos: number): number;
  iter_get_siblings(pos: number): WidgetPath;
  iter_get_state(pos: number): StateFlags;
  iter_has_class(pos: number, name: string): boolean;
  iter_has_name(pos: number, name: string): boolean;
  iter_has_qclass(pos: number, qname: GLib.Quark): boolean;
  iter_has_qname(pos: number, qname: GLib.Quark): boolean;
  iter_has_qregion(pos: number, qname: GLib.Quark, flags: RegionFlags): boolean;
  iter_has_region(pos: number, name: string, flags: RegionFlags): boolean;
  iter_list_classes(pos: number): GLib.SList;
  iter_list_regions(pos: number): GLib.SList;
  iter_remove_class(pos: number, name: string): void;
  iter_remove_region(pos: number, name: string): void;
  iter_set_name(pos: number, name: string): void;
  iter_set_object_name(pos: number, name: string | null): void;
  iter_set_object_type(pos: number, type: any): void;
  iter_set_state(pos: number, state: StateFlags): void;
  length(): number;
  prepend_type(type: any): void;
  ref(): WidgetPath;
  to_string(): string;
  unref(): void;
}
export class WidgetPrivate {}
export class WindowAccessibleClass {
  static parent_class: ContainerAccessibleClass;
}
export class WindowAccessiblePrivate {}
export class WindowClass {
  static parent_class: BinClass;
  static set_focus: (window: Window, focus: Widget | null) => void;
  static activate_focus: (window: Window) => void;
  static activate_default: (window: Window) => void;
  static keys_changed: (window: Window) => void;
  static enable_debugging: (window: Window, toggle: boolean) => boolean;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
}
export class WindowGeometryInfo {}
export class WindowGroupClass {
  static parent_class: GObject.ObjectClass;
  static _gtk_reserved1: () => void;
  static _gtk_reserved2: () => void;
  static _gtk_reserved3: () => void;
  static _gtk_reserved4: () => void;
}
export class WindowGroupPrivate {}
export class WindowPrivate {}
export function accel_groups_activate(object: GObject.Object, accel_key: number, accel_mods: Gdk.ModifierType): boolean;
export function accel_groups_from_object(object: GObject.Object): GLib.SList;
export function accelerator_get_default_mod_mask(): Gdk.ModifierType;
export function accelerator_get_label(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;
export function accelerator_get_label_with_keycode(display: Gdk.Display | null, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType): string;
export function accelerator_name(accelerator_key: number, accelerator_mods: Gdk.ModifierType): string;
export function accelerator_name_with_keycode(display: Gdk.Display | null, accelerator_key: number, keycode: number, accelerator_mods: Gdk.ModifierType): string;
export function accelerator_parse(accelerator: string, accelerator_key: number, accelerator_mods: Gdk.ModifierType): void;
export function accelerator_parse_with_keycode(accelerator: string, accelerator_key: number, accelerator_codes: number[], accelerator_mods: Gdk.ModifierType): void;
export function accelerator_set_default_mod_mask(default_mod_mask: Gdk.ModifierType): void;
export function accelerator_valid(keyval: number, modifiers: Gdk.ModifierType): boolean;
export function alternative_dialog_button_order(screen: Gdk.Screen | null): boolean;
export function binding_entry_add_signal_from_string(binding_set: BindingSet, signal_desc: string): GLib.TokenType;
export function binding_entry_add_signall(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType, signal_name: string, binding_args: GLib.SList): void;
export function binding_entry_remove(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
export function binding_entry_skip(binding_set: BindingSet, keyval: number, modifiers: Gdk.ModifierType): void;
export function binding_set_by_class(object_class: object | null): BindingSet;
export function binding_set_find(set_name: string): BindingSet | null;
export function binding_set_new(set_name: string): BindingSet;
export function bindings_activate(object: GObject.Object, keyval: number, modifiers: Gdk.ModifierType): boolean;
export function bindings_activate_event(object: GObject.Object, event: Gdk.EventKey): boolean;
export function builder_error_quark(): GLib.Quark;
export function cairo_should_draw_window(cr: cairo.Context, window: Gdk.Window): boolean;
export function cairo_transform_to_window(cr: cairo.Context, widget: Widget, window: Gdk.Window): void;
export function check_version(required_major: number, required_minor: number, required_micro: number): string | null;
export function css_provider_error_quark(): GLib.Quark;
export function device_grab_add(widget: Widget, device: Gdk.Device, block_others: boolean): void;
export function device_grab_remove(widget: Widget, device: Gdk.Device): void;
export function disable_setlocale(): void;
export function distribute_natural_allocation(extra_space: number, n_requested_sizes: number, sizes: RequestedSize): number;
export function drag_cancel(context: Gdk.DragContext): void;
export function drag_finish(context: Gdk.DragContext, success: boolean, del: boolean, time_: number): void;
export function drag_get_source_widget(context: Gdk.DragContext): Widget | null;
export function drag_set_icon_default(context: Gdk.DragContext): void;
export function drag_set_icon_gicon(context: Gdk.DragContext, icon: Gio.Icon, hot_x: number, hot_y: number): void;
export function drag_set_icon_name(context: Gdk.DragContext, icon_name: string, hot_x: number, hot_y: number): void;
export function drag_set_icon_pixbuf(context: Gdk.DragContext, pixbuf: GdkPixbuf.Pixbuf, hot_x: number, hot_y: number): void;
export function drag_set_icon_stock(context: Gdk.DragContext, stock_id: string, hot_x: number, hot_y: number): void;
export function drag_set_icon_surface(context: Gdk.DragContext, surface: cairo.Surface): void;
export function drag_set_icon_widget(context: Gdk.DragContext, widget: Widget, hot_x: number, hot_y: number): void;
export function draw_insertion_cursor(widget: Widget, cr: cairo.Context, location: Gdk.Rectangle, is_primary: boolean, direction: TextDirection, draw_arrow: boolean): void;
export function events_pending(): boolean;
export function g_false(): boolean;
export function file_chooser_error_quark(): GLib.Quark;
export function get_binary_age(): number;
export function get_current_event(): Gdk.Event | null;
export function get_current_event_device(): Gdk.Device | null;
export function get_current_event_state(state: Gdk.ModifierType): boolean;
export function get_current_event_time(): number;
export function get_debug_flags(): number;
export function get_default_language(): Pango.Language;
export function get_event_widget(event: Gdk.Event): Widget | null;
export function get_interface_age(): number;
export function get_locale_direction(): TextDirection;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function get_option_group(open_default_display: boolean): GLib.OptionGroup;
export function grab_get_current(): Widget | null;
export function icon_size_from_name(name: string): number;
export function icon_size_get_name(size: number): string;
export function icon_size_lookup(size: number, width: number, height: number): boolean;
export function icon_size_lookup_for_settings(settings: Settings, size: number, width: number, height: number): boolean;
export function icon_size_register(name: string, width: number, height: number): number;
export function icon_size_register_alias(alias: string, target: number): void;
export function icon_theme_error_quark(): GLib.Quark;
export function init(argc: number, argv: string[] | null): void;
export function init_check(argc: number, argv: string[] | null): boolean;
export function init_with_args(argc: number, argv: string[] | null, parameter_string: string | null, entries: GLib.OptionEntry[], translation_domain: string | null): boolean;
export function key_snooper_install(snooper: KeySnoopFunc, func_data: object | null): number;
export function key_snooper_remove(snooper_handler_id: number): void;
export function main(): void;
export function main_do_event(event: Gdk.Event): void;
export function main_iteration(): boolean;
export function main_iteration_do(blocking: boolean): boolean;
export function main_level(): number;
export function main_quit(): void;
export function paint_arrow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, arrow_type: ArrowType, fill: boolean, x: number, y: number, width: number, height: number): void;
export function paint_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_box_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
export function paint_check(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_diamond(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_expander(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x: number, y: number, expander_style: ExpanderStyle): void;
export function paint_extension(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
export function paint_flat_box(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_focus(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_handle(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: Orientation): void;
export function paint_hline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, x1: number, x2: number, y: number): void;
export function paint_layout(style: Style, cr: cairo.Context, state_type: StateType, use_text: boolean, widget: Widget | null, detail: string | null, x: number, y: number, layout: Pango.Layout): void;
export function paint_option(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_resize_grip(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, edge: Gdk.WindowEdge, x: number, y: number, width: number, height: number): void;
export function paint_shadow(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_shadow_gap(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, gap_side: PositionType, gap_x: number, gap_width: number): void;
export function paint_slider(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number, orientation: Orientation): void;
export function paint_spinner(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, step: number, x: number, y: number, width: number, height: number): void;
export function paint_tab(style: Style, cr: cairo.Context, state_type: StateType, shadow_type: ShadowType, widget: Widget | null, detail: string | null, x: number, y: number, width: number, height: number): void;
export function paint_vline(style: Style, cr: cairo.Context, state_type: StateType, widget: Widget | null, detail: string | null, y1_: number, y2_: number, x: number): void;
export function paper_size_get_default(): string;
export function paper_size_get_paper_sizes(include_custom: boolean): GLib.List;
export function parse_args(argc: number, argv: string[]): boolean;
export function print_error_quark(): GLib.Quark;
export function print_run_page_setup_dialog(parent: Window | null, page_setup: PageSetup | null, settings: PrintSettings): PageSetup;
export function print_run_page_setup_dialog_async(parent: Window | null, page_setup: PageSetup | null, settings: PrintSettings, done_cb: PageSetupDoneFunc, data: object | null): void;
export function propagate_event(widget: Widget, event: Gdk.Event): void;
export function rc_add_default_file(filename: any): void;
export function rc_find_module_in_path(module_file: string): any;
export function rc_find_pixmap_in_path(settings: Settings, scanner: GLib.Scanner, pixmap_file: string): any;
export function rc_get_default_files(): any[];
export function rc_get_im_module_file(): any;
export function rc_get_im_module_path(): any;
export function rc_get_module_dir(): any;
export function rc_get_style(widget: Widget): Style;
export function rc_get_style_by_paths(settings: Settings, widget_path: string | null, class_path: string | null, type: any): Style | null;
export function rc_get_theme_dir(): string;
export function rc_parse(filename: string): void;
export function rc_parse_color(scanner: GLib.Scanner, color: Gdk.Color): number;
export function rc_parse_color_full(scanner: GLib.Scanner, style: RcStyle | null, color: Gdk.Color): number;
export function rc_parse_priority(scanner: GLib.Scanner, priority: PathPriorityType): number;
export function rc_parse_state(scanner: GLib.Scanner, state: StateType): number;
export function rc_parse_string(rc_string: string): void;
export function rc_property_parse_border(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
export function rc_property_parse_color(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
export function rc_property_parse_enum(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
export function rc_property_parse_flags(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
export function rc_property_parse_requisition(pspec: GObject.ParamSpec, gstring: GLib.String, property_value: GObject.Value): boolean;
export function rc_reparse_all(): boolean;
export function rc_reparse_all_for_settings(settings: Settings, force_load: boolean): boolean;
export function rc_reset_styles(settings: Settings): void;
export function rc_scanner_new(): GLib.Scanner;
export function rc_set_default_files(filenames: any[]): void;
export function recent_chooser_error_quark(): GLib.Quark;
export function recent_manager_error_quark(): GLib.Quark;
export function render_activity(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_arrow(context: StyleContext, cr: cairo.Context, angle: number, x: number, y: number, size: number): void;
export function render_background(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_background_get_clip(context: StyleContext, x: number, y: number, width: number, height: number, out_clip: Gdk.Rectangle): void;
export function render_check(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_expander(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_extension(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType): void;
export function render_focus(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_frame(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_frame_gap(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, gap_side: PositionType, xy0_gap: number, xy1_gap: number): void;
export function render_handle(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_icon(context: StyleContext, cr: cairo.Context, pixbuf: GdkPixbuf.Pixbuf, x: number, y: number): void;
export function render_icon_pixbuf(context: StyleContext, source: IconSource, size: number): GdkPixbuf.Pixbuf;
export function render_icon_surface(context: StyleContext, cr: cairo.Context, surface: cairo.Surface, x: number, y: number): void;
export function render_insertion_cursor(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout, index: number, direction: Pango.Direction): void;
export function render_layout(context: StyleContext, cr: cairo.Context, x: number, y: number, layout: Pango.Layout): void;
export function render_line(context: StyleContext, cr: cairo.Context, x0: number, y0: number, x1: number, y1: number): void;
export function render_option(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number): void;
export function render_slider(context: StyleContext, cr: cairo.Context, x: number, y: number, width: number, height: number, orientation: Orientation): void;
export function rgb_to_hsv(r: number, g: number, b: number, h: number, s: number, v: number): void;
export function selection_add_target(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, info: number): void;
export function selection_add_targets(widget: Widget, selection: Gdk.Atom, targets: TargetEntry[], ntargets: number): void;
export function selection_clear_targets(widget: Widget, selection: Gdk.Atom): void;
export function selection_convert(widget: Widget, selection: Gdk.Atom, target: Gdk.Atom, time_: number): boolean;
export function selection_owner_set(widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;
export function selection_owner_set_for_display(display: Gdk.Display, widget: Widget | null, selection: Gdk.Atom, time_: number): boolean;
export function selection_remove_all(widget: Widget): void;
export function set_debug_flags(flags: number): void;
export function show_about_dialog(parent: Window | null, first_property_name: string, ...args: any[]): void;
export function show_uri(screen: Gdk.Screen | null, uri: string, timestamp: number): boolean;
export function show_uri_on_window(parent: Window | null, uri: string, timestamp: number): boolean;
export function stock_add(items: StockItem[], n_items: number): void;
export function stock_add_static(items: StockItem[], n_items: number): void;
export function stock_list_ids(): GLib.SList;
export function stock_lookup(stock_id: string, item: StockItem): boolean;
export function stock_set_translate_func(domain: string, func: TranslateFunc, data: object | null, notify: GLib.DestroyNotify): void;
export function target_table_free(targets: TargetEntry[], n_targets: number): void;
export function target_table_new_from_list(list: TargetList, n_targets: number): TargetEntry[];
export function targets_include_image(targets: Gdk.Atom[], n_targets: number, writable: boolean): boolean;
export function targets_include_rich_text(targets: Gdk.Atom[], n_targets: number, buffer: TextBuffer): boolean;
export function targets_include_text(targets: Gdk.Atom[], n_targets: number): boolean;
export function targets_include_uri(targets: Gdk.Atom[], n_targets: number): boolean;
export function test_create_simple_window(window_title: string, dialog_text: string): Widget;
export function test_create_widget(widget_type: any, first_property_name: string | null, ...args: any[]): Widget;
export function test_display_button_window(window_title: string, dialog_text: string, ...args: any[]): Widget;
export function test_find_label(widget: Widget, label_pattern: string): Widget;
export function test_find_sibling(base_widget: Widget, widget_type: any): Widget;
export function test_find_widget(widget: Widget, label_pattern: string, widget_type: any): Widget | null;
export function test_init(argcp: number, argvp: string[], ...args: any[]): void;
export function test_list_all_types(n_types: number): any[];
export function test_register_all_types(): void;
export function test_slider_get_value(widget: Widget): number;
export function test_slider_set_perc(widget: Widget, percentage: number): void;
export function test_spin_button_click(spinner: SpinButton, button: number, upwards: boolean): boolean;
export function test_text_get(widget: Widget): string;
export function test_text_set(widget: Widget, string: string): void;
export function test_widget_click(widget: Widget, button: number, modifiers: Gdk.ModifierType): boolean;
export function test_widget_send_key(widget: Widget, keyval: number, modifiers: Gdk.ModifierType): boolean;
export function test_widget_wait_for_draw(widget: Widget): void;
export function tree_get_row_drag_data(selection_data: SelectionData, tree_model: any, path: TreePath): boolean;
export function tree_row_reference_deleted(proxy: GObject.Object, path: TreePath): void;
export function tree_row_reference_inserted(proxy: GObject.Object, path: TreePath): void;
export function tree_row_reference_reordered(proxy: GObject.Object, path: TreePath, iter: TreeIter, new_order: number[]): void;
export function tree_set_row_drag_data(selection_data: SelectionData, tree_model: any, path: TreePath): boolean;
export function g_true(): boolean;
export type AccelGroupActivate = (accel_group: AccelGroup, acceleratable: GObject.Object, keyval: number, modifier: Gdk.ModifierType) => boolean;
export type AccelGroupFindFunc = (key: AccelKey, closure: GObject.Closure, data: object | null) => boolean;
export type AccelMapForeach = (data: object | null, accel_path: string, accel_key: number, accel_mods: Gdk.ModifierType, changed: boolean) => void;
export type AssistantPageFunc = (current_page: number, data: object | null) => number;
export type BuilderConnectFunc = (builder: Builder, object: GObject.Object, signal_name: string, handler_name: string, connect_object: GObject.Object | null, flags: GObject.ConnectFlags, user_data: object | null) => void;
export type CalendarDetailFunc = (calendar: Calendar, year: number, month: number, day: number, user_data: object | null) => string | null;
export type Callback = (widget: Widget, data: object | null) => void;
export type CellAllocCallback = (renderer: CellRenderer, cell_area: Gdk.Rectangle, cell_background: Gdk.Rectangle, data: object | null) => boolean;
export type CellCallback = (renderer: CellRenderer, data: object | null) => boolean;
export type CellLayoutDataFunc = (cell_layout: any, cell: CellRenderer, tree_model: any, iter: TreeIter, data: object | null) => void;
export type ClipboardClearFunc = (clipboard: Clipboard, user_data_or_owner: object | null) => void;
export type ClipboardGetFunc = (clipboard: Clipboard, selection_data: SelectionData, info: number, user_data_or_owner: object | null) => void;
export type ClipboardImageReceivedFunc = (clipboard: Clipboard, pixbuf: GdkPixbuf.Pixbuf, data: object | null) => void;
export type ClipboardReceivedFunc = (clipboard: Clipboard, selection_data: SelectionData, data: object | null) => void;
export type ClipboardRichTextReceivedFunc = (clipboard: Clipboard, format: Gdk.Atom, text: string | null, length: number, data: object | null) => void;
export type ClipboardTargetsReceivedFunc = (clipboard: Clipboard, atoms: Gdk.Atom[] | null, n_atoms: number, data: object | null) => void;
export type ClipboardTextReceivedFunc = (clipboard: Clipboard, text: string | null, data: object | null) => void;
export type ClipboardURIReceivedFunc = (clipboard: Clipboard, uris: string[], data: object | null) => void;
export type ColorSelectionChangePaletteFunc = (colors: Gdk.Color[], n_colors: number) => void;
export type ColorSelectionChangePaletteWithScreenFunc = (screen: Gdk.Screen, colors: Gdk.Color[], n_colors: number) => void;
export type EntryCompletionMatchFunc = (completion: EntryCompletion, key: string, iter: TreeIter, user_data: object | null) => boolean;
export type FileFilterFunc = (filter_info: FileFilterInfo, data: object | null) => boolean;
export type FlowBoxCreateWidgetFunc = (item: GObject.Object, user_data: object | null) => Widget;
export type FlowBoxFilterFunc = (child: FlowBoxChild, user_data: object | null) => boolean;
export type FlowBoxForeachFunc = (box: FlowBox, child: FlowBoxChild, user_data: object | null) => void;
export type FlowBoxSortFunc = (child1: FlowBoxChild, child2: FlowBoxChild, user_data: object | null) => number;
export type FontFilterFunc = (family: Pango.FontFamily, face: Pango.FontFace, data: object | null) => boolean;
export type IconViewForeachFunc = (icon_view: IconView, path: TreePath, data: object | null) => void;
export type KeySnoopFunc = (grab_widget: Widget, event: Gdk.EventKey, func_data: object | null) => number;
export type ListBoxCreateWidgetFunc = (item: GObject.Object, user_data: object | null) => Widget;
export type ListBoxFilterFunc = (row: ListBoxRow, user_data: object | null) => boolean;
export type ListBoxForeachFunc = (box: ListBox, row: ListBoxRow, user_data: object | null) => void;
export type ListBoxSortFunc = (row1: ListBoxRow, row2: ListBoxRow, user_data: object | null) => number;
export type ListBoxUpdateHeaderFunc = (row: ListBoxRow, before: ListBoxRow | null, user_data: object | null) => void;
export type MenuDetachFunc = (attach_widget: Widget, menu: Menu) => void;
export type MenuPositionFunc = (menu: Menu, x: number, y: number, push_in: boolean, user_data: object | null) => void;
export type ModuleDisplayInitFunc = (display: Gdk.Display) => void;
export type ModuleInitFunc = (argc: number | null, argv: string[] | null) => void;
export type PageSetupDoneFunc = (page_setup: PageSetup, data: object | null) => void;
export type PrintSettingsFunc = (key: string, value: string, user_data: object | null) => void;
export type RcPropertyParser = (pspec: GObject.ParamSpec, rc_string: GLib.String, property_value: GObject.Value) => boolean;
export type RecentFilterFunc = (filter_info: RecentFilterInfo, user_data: object | null) => boolean;
export type RecentSortFunc = (a: RecentInfo, b: RecentInfo, user_data: object | null) => number;
export type StylePropertyParser = (string: string, value: GObject.Value) => boolean;
export type TextBufferDeserializeFunc = (register_buffer: TextBuffer, content_buffer: TextBuffer, iter: TextIter, data: number[], length: number, create_tags: boolean, user_data: object | null) => boolean;
export type TextBufferSerializeFunc = (register_buffer: TextBuffer, content_buffer: TextBuffer, start: TextIter, end: TextIter, length: number, user_data: object | null) => number | null;
export type TextCharPredicate = (ch: number, user_data: object | null) => boolean;
export type TextTagTableForeach = (tag: TextTag, data: object | null) => void;
export type TickCallback = (widget: Widget, frame_clock: Gdk.FrameClock, user_data: object | null) => boolean;
export type TranslateFunc = (path: string, func_data: object | null) => string;
export type TreeCellDataFunc = (tree_column: TreeViewColumn, cell: CellRenderer, tree_model: any, iter: TreeIter, data: object | null) => void;
export type TreeDestroyCountFunc = (tree_view: TreeView, path: TreePath, children: number, user_data: object | null) => void;
export type TreeIterCompareFunc = (model: any, a: TreeIter, b: TreeIter, user_data: object | null) => number;
export type TreeModelFilterModifyFunc = (model: any, iter: TreeIter, value: GObject.Value, column: number, data: object | null) => void;
export type TreeModelFilterVisibleFunc = (model: any, iter: TreeIter, data: object | null) => boolean;
export type TreeModelForeachFunc = (model: any, path: TreePath, iter: TreeIter, data: object | null) => boolean;
export type TreeSelectionForeachFunc = (model: any, path: TreePath, iter: TreeIter, data: object | null) => void;
export type TreeSelectionFunc = (selection: TreeSelection, model: any, path: TreePath, path_currently_selected: boolean, data: object | null) => boolean;
export type TreeViewColumnDropFunc = (tree_view: TreeView, column: TreeViewColumn, prev_column: TreeViewColumn, next_column: TreeViewColumn, data: object | null) => boolean;
export type TreeViewMappingFunc = (tree_view: TreeView, path: TreePath, user_data: object | null) => void;
export type TreeViewRowSeparatorFunc = (model: any, iter: TreeIter, data: object | null) => boolean;
export type TreeViewSearchEqualFunc = (model: any, column: number, key: string, iter: TreeIter, search_data: object | null) => boolean;
export type TreeViewSearchPositionFunc = (tree_view: TreeView, search_dialog: Widget, user_data: object | null) => void;