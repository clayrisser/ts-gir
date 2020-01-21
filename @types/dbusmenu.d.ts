import * as GLib from './g-lib';
import * as GObject from './g-object';
export const CLIENT_PROP_DBUS_NAME: string;
export const CLIENT_PROP_DBUS_OBJECT: string;
export const CLIENT_PROP_GROUP_EVENTS: string;
export const CLIENT_PROP_STATUS: string;
export const CLIENT_PROP_TEXT_DIRECTION: string;
export const CLIENT_SIGNAL_EVENT_RESULT: string;
export const CLIENT_SIGNAL_ICON_THEME_DIRS_CHANGED: string;
export const CLIENT_SIGNAL_ITEM_ACTIVATE: string;
export const CLIENT_SIGNAL_LAYOUT_UPDATED: string;
export const CLIENT_SIGNAL_NEW_MENUITEM: string;
export const CLIENT_SIGNAL_ROOT_CHANGED: string;
export const CLIENT_TYPES_DEFAULT: string;
export const CLIENT_TYPES_IMAGE: string;
export const CLIENT_TYPES_SEPARATOR: string;
export const MENUITEM_CHILD_DISPLAY_SUBMENU: string;
export const MENUITEM_DISPOSITION_ALERT: string;
export const MENUITEM_DISPOSITION_INFORMATIVE: string;
export const MENUITEM_DISPOSITION_NORMAL: string;
export const MENUITEM_DISPOSITION_WARNING: string;
export const MENUITEM_EVENT_ACTIVATED: string;
export const MENUITEM_EVENT_CLOSED: string;
export const MENUITEM_EVENT_OPENED: string;
export const MENUITEM_ICON_NAME_BLANK: string;
export const MENUITEM_PROP_ACCESSIBLE_DESC: string;
export const MENUITEM_PROP_CHILD_DISPLAY: string;
export const MENUITEM_PROP_DISPOSITION: string;
export const MENUITEM_PROP_ENABLED: string;
export const MENUITEM_PROP_ICON_DATA: string;
export const MENUITEM_PROP_ICON_NAME: string;
export const MENUITEM_PROP_LABEL: string;
export const MENUITEM_PROP_SHORTCUT: string;
export const MENUITEM_PROP_TOGGLE_STATE: string;
export const MENUITEM_PROP_TOGGLE_TYPE: string;
export const MENUITEM_PROP_TYPE: string;
export const MENUITEM_PROP_VISIBLE: string;
export const MENUITEM_SHORTCUT_ALT: string;
export const MENUITEM_SHORTCUT_CONTROL: string;
export const MENUITEM_SHORTCUT_SHIFT: string;
export const MENUITEM_SHORTCUT_SUPER: string;
export const MENUITEM_SIGNAL_ABOUT_TO_SHOW: string;
export const MENUITEM_SIGNAL_CHILD_ADDED: string;
export const MENUITEM_SIGNAL_CHILD_MOVED: string;
export const MENUITEM_SIGNAL_CHILD_REMOVED: string;
export const MENUITEM_SIGNAL_EVENT: string;
export const MENUITEM_SIGNAL_ITEM_ACTIVATED: string;
export const MENUITEM_SIGNAL_PROPERTY_CHANGED: string;
export const MENUITEM_SIGNAL_REALIZED: string;
export const MENUITEM_SIGNAL_SHOW_TO_USER: string;
export const MENUITEM_TOGGLE_CHECK: string;
export const MENUITEM_TOGGLE_RADIO: string;
export const MENUITEM_TOGGLE_STATE_CHECKED: number;
export const MENUITEM_TOGGLE_STATE_UNCHECKED: number;
export const MENUITEM_TOGGLE_STATE_UNKNOWN: number;
export const SERVER_PROP_DBUS_OBJECT: string;
export const SERVER_PROP_ROOT_NODE: string;
export const SERVER_PROP_STATUS: string;
export const SERVER_PROP_TEXT_DIRECTION: string;
export const SERVER_PROP_VERSION: string;
export const SERVER_SIGNAL_ID_PROP_UPDATE: string;
export const SERVER_SIGNAL_ID_UPDATE: string;
export const SERVER_SIGNAL_ITEM_ACTIVATION: string;
export const SERVER_SIGNAL_LAYOUT_UPDATED: string;
export enum Status {
  DBUSMENU_STATUS_NORMAL,
  DBUSMENU_STATUS_NOTICE,
}
export enum TextDirection {
  DBUSMENU_TEXT_DIRECTION_NONE,
  DBUSMENU_TEXT_DIRECTION_LTR,
  DBUSMENU_TEXT_DIRECTION_RTL,
}
export class Client extends GObject.Object {
  constructor(name: string, object: string);
  'dbus-name': string;
  'dbus-object': string;
  'group-events': boolean;
  status: any;
  'text-direction': any;
  static parent: GObject.Object;
  static priv: ClientPrivate;
  add_type_handler(type: string, newfunc: ClientTypeHandler): boolean;
  add_type_handler_full(type: string, newfunc: ClientTypeHandler, user_data: object | null, destroy_func: GLib.DestroyNotify): boolean;
  get_icon_paths(): string[];
  get_root(): Menuitem;
  get_status(): Status;
  get_text_direction(): TextDirection;
}
export class Menuitem extends GObject.Object {
  constructor();
  id: number;
  static parent: GObject.Object;
  static priv: MenuitemPrivate;
  child_add_position(child: Menuitem, position: number): boolean;
  child_append(child: Menuitem): boolean;
  child_delete(child: Menuitem): boolean;
  child_find(id: number): Menuitem;
  child_prepend(child: Menuitem): boolean;
  child_reorder(child: Menuitem, position: number): boolean;
  find_id(id: number): Menuitem;
  foreach(func: object | null, data: object | null): void;
  get_children(): GLib.List;
  get_id(): number;
  get_parent(): Menuitem;
  get_position(parent: Menuitem): number;
  get_position_realized(parent: Menuitem): number;
  get_root(): boolean;
  handle_event(...args: any[]): any;
  properties_copy(): GLib.HashTable;
  properties_list(): GLib.List;
  property_exist(property: string): boolean;
  property_get(property: string): string;
  property_get_bool(property: string): boolean;
  property_get_byte_array(property: string, nelements: number): number[];
  property_get_int(property: string): number;
  property_get_variant(property: string): GLib.Variant;
  property_remove(property: string): void;
  property_set(property: string, value: string): boolean;
  property_set_bool(property: string, value: boolean): boolean;
  property_set_byte_array(property: string, value: number, nelements: number): boolean;
  property_set_int(property: string, value: number): boolean;
  property_set_variant(property: string, value: GLib.Variant): boolean;
  send_about_to_show(...args: any[]): any;
  set_parent(parent: Menuitem): boolean;
  set_root(root: boolean): void;
  show_to_user(...args: any[]): any;
  take_children(): GLib.List;
  unparent(): boolean;
  child_added(position: number): void;
  child_moved(newpos: number, oldpos: number): void;
  child_removed(): void;
  handle_event(...args: any[]): any;
  send_about_to_show(...args: any[]): any;
  show_to_user(...args: any[]): any;
}
export class MenuitemProxy extends Menuitem {
  constructor(mi: Menuitem);
  'menu-item': Menuitem;
  static parent: any;
  static priv: any;
  get_wrapped(): Menuitem;
}
export class Server extends GObject.Object {
  constructor(object: string);
  'dbus-object': string;
  'root-node': Menuitem;
  status: any;
  'text-direction': any;
  version: number;
  static parent: GObject.Object;
  static priv: ServerPrivate;
  get_icon_paths(): string[];
  get_status(): Status;
  get_text_direction(): TextDirection;
  set_icon_paths(icon_paths: string[]): void;
  set_root(root: Menuitem): void;
  set_status(status: Status): void;
  set_text_direction(dir: TextDirection): void;
}
export class ClientClass {
  static parent_class: GObject.ObjectClass;
  static layout_updated: () => void;
  static root_changed: (newroot: Menuitem) => void;
  static new_menuitem: (newitem: Menuitem) => void;
  static item_activate: (item: Menuitem, timestamp: number) => void;
  static event_result: (item: Menuitem, event: string, data: GLib.Variant, timestamp: number, error: GLib.Error) => void;
  static icon_theme_dirs: (item: Menuitem, theme_dirs: object, error: GLib.Error) => void;
  static reserved1: () => void;
  static reserved2: () => void;
  static reserved3: () => void;
  static reserved4: () => void;
  static reserved5: () => void;
}
export class ClientPrivate {}
export class MenuitemClass {
  static parent_class: GObject.ObjectClass;
  static property_changed: (property: string, value: GLib.Variant) => void;
  static item_activated: (timestamp: number) => void;
  static child_added: (child: Menuitem, position: number) => void;
  static child_removed: (child: Menuitem) => void;
  static child_moved: (child: Menuitem, newpos: number, oldpos: number) => void;
  static realized: () => void;
  static buildvariant: any;
  static handle_event: (mi: Menuitem, name: string, variant: GLib.Variant, timestamp: number) => void;
  static send_about_to_show: (mi: Menuitem, cb: any, cb_data: object | null) => void;
  static show_to_user: (mi: Menuitem, timestamp: number, cb_data: object | null) => void;
  static about_to_show: () => boolean;
  static event: (name: string, value: GLib.Variant, timestamp: number) => void;
  static reserved1: () => void;
  static reserved2: () => void;
  static reserved3: () => void;
  static reserved4: () => void;
  static reserved5: () => void;
}
export class MenuitemPrivate {}
export class MenuitemProxyClass {
  static parent_class: MenuitemClass;
  static reserved1: () => void;
  static reserved2: () => void;
  static reserved3: () => void;
  static reserved4: () => void;
}
export class MenuitemProxyPrivate {}
export class ServerClass {
  static parent_class: GObject.ObjectClass;
  static id_prop_update: (id: number, property: string, value: string) => void;
  static id_update: (id: number) => void;
  static layout_updated: (revision: number) => void;
  static item_activation: (id: number, timestamp: number) => void;
  static reserved1: () => void;
  static reserved2: () => void;
  static reserved3: () => void;
  static reserved4: () => void;
  static reserved5: () => void;
  static reserved6: () => void;
}
export class ServerPrivate {}
export type ClientTypeHandler = (newitem: Menuitem, parent: Menuitem, client: Client, user_data: object | null) => boolean;
export type menuitem_about_to_show_cb = (mi: Menuitem, user_data: object | null) => void;
export type menuitem_buildvariant_slot_t = (mi: Menuitem, properties: string | null) => GLib.Variant;