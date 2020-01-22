import * as cairo from './cairo';
import * as xlib from './xlib';
import * as Gdk from './gdk';
export class X11AppLaunchContext extends Gdk.AppLaunchContext {}
export class X11Cursor extends Gdk.Cursor {
  get_xcursor(): xlib.Cursor;
  get_xdisplay(): xlib.Display;
}
export class X11DeviceCore extends Gdk.Device {}
export class X11DeviceManagerCore extends Gdk.DeviceManager {}
export class X11DeviceManagerXI2 extends X11DeviceManagerCore {
  major: number;
  minor: number;
  opcode: number;
}
export class X11DeviceXI2 extends Gdk.Device {
  'device-id': number;
}
export class X11Display extends Gdk.Display {
  broadcast_startup_message(message_type: string, ...args: any[]): void;
  error_trap_pop(): number;
  error_trap_pop_ignored(): void;
  error_trap_push(): void;
  get_startup_notification_id(): string;
  get_user_time(): number;
  get_xdisplay(): xlib.Display;
  grab(): void;
  set_cursor_theme(theme: string | null, size: number): void;
  set_startup_notification_id(startup_id: string): void;
  set_window_scale(scale: number): void;
  string_to_compound_text(str: string, encoding: Gdk.Atom, format: number, ctext: number[], length: number): number;
  text_property_to_text_list(encoding: Gdk.Atom, format: number, text: number, length: number, list: string): number;
  ungrab(): void;
  utf8_to_compound_text(str: string, encoding: Gdk.Atom, format: number, ctext: number[], length: number): boolean;
  static get_glx_version(display: Gdk.Display, major: number, minor: number): boolean;
}
export class X11DisplayManager extends Gdk.DisplayManager {}
export class X11DragContext extends Gdk.DragContext {}
export class X11GLContext extends Gdk.GLContext {}
export class X11Keymap extends Gdk.Keymap {
  get_group_for_state(state: number): number;
  key_is_modifier(keycode: number): boolean;
}
export class X11Monitor extends Gdk.Monitor {
  static get_output(monitor: Gdk.Monitor): xlib.XID;
}
export class X11Screen extends Gdk.Screen {
  get_current_desktop(): number;
  get_monitor_output(monitor_num: number): xlib.XID;
  get_number_of_desktops(): number;
  get_screen_number(): number;
  get_window_manager_name(): string;
  get_xscreen(): xlib.Screen;
  lookup_visual(xvisualid: xlib.VisualID): X11Visual;
  supports_net_wm_hint(property: Gdk.Atom): boolean;
}
export class X11Visual extends Gdk.Visual {
  get_xvisual(): xlib.Visual;
}
export class X11Window extends Gdk.Window {
  constructor(display: X11Display, window: xlib.Window);
  get_desktop(): number;
  get_xid(): xlib.Window;
  move_to_current_desktop(): void;
  move_to_desktop(desktop: number): void;
  set_frame_extents(left: number, right: number, top: number, bottom: number): void;
  set_frame_sync_enabled(frame_sync_enabled: boolean): void;
  set_hide_titlebar_when_maximized(hide_titlebar_when_maximized: boolean): void;
  set_theme_variant(variant: string): void;
  set_user_time(timestamp: number): void;
  set_utf8_property(name: string, value: string | null): void;
  static lookup_for_display(display: X11Display, window: xlib.Window): X11Window;
}
export class X11AppLaunchContextClass {}
export class X11CursorClass {}
export class X11DeviceCoreClass {}
export class X11DeviceManagerCoreClass {}
export class X11DeviceManagerXI2Class {}
export class X11DeviceXI2Class {}
export class X11DisplayClass {}
export class X11DisplayManagerClass {}
export class X11DragContextClass {}
export class X11GLContextClass {}
export class X11KeymapClass {}
export class X11MonitorClass {}
export class X11ScreenClass {}
export class X11VisualClass {}
export class X11WindowClass {}
export function x11_atom_to_xatom(atom: Gdk.Atom): xlib.Atom;
export function x11_atom_to_xatom_for_display(display: X11Display, atom: Gdk.Atom): xlib.Atom;
export function x11_device_get_id(device: X11DeviceCore): number;
export function x11_device_manager_lookup(device_manager: X11DeviceManagerCore, device_id: number): X11DeviceCore | null;
export function x11_free_compound_text(ctext: number): void;
export function x11_free_text_list(list: string): void;
export function x11_get_default_root_xwindow(): xlib.Window;
export function x11_get_default_screen(): number;
export function x11_get_default_xdisplay(): xlib.Display;
export function x11_get_parent_relative_pattern(): cairo.Pattern;
export function x11_get_server_time(window: X11Window): number;
export function x11_get_xatom_by_name(atom_name: string): xlib.Atom;
export function x11_get_xatom_by_name_for_display(display: X11Display, atom_name: string): xlib.Atom;
export function x11_get_xatom_name(xatom: xlib.Atom): string;
export function x11_get_xatom_name_for_display(display: X11Display, xatom: xlib.Atom): string;
export function x11_grab_server(): void;
export function x11_lookup_xdisplay(xdisplay: xlib.Display): X11Display;
export function x11_register_standard_event_type(display: X11Display, event_base: number, n_events: number): void;
export function x11_set_sm_client_id(sm_client_id: string | null): void;
export function x11_ungrab_server(): void;
export function x11_xatom_to_atom(xatom: xlib.Atom): Gdk.Atom;
export function x11_xatom_to_atom_for_display(display: X11Display, xatom: xlib.Atom): Gdk.Atom;