import * as Gtk from './gtk';
import * as GObject from './g-object';
export const INDICATOR_SIGNAL_CONNECTION_CHANGED: string;
export const INDICATOR_SIGNAL_NEW_ATTENTION_ICON: string;
export const INDICATOR_SIGNAL_NEW_ICON: string;
export const INDICATOR_SIGNAL_NEW_ICON_THEME_PATH: string;
export const INDICATOR_SIGNAL_NEW_LABEL: string;
export const INDICATOR_SIGNAL_NEW_STATUS: string;
export const INDICATOR_SIGNAL_SCROLL_EVENT: string;
export enum IndicatorCategory {
  APP_INDICATOR_CATEGORY_APPLICATION_STATUS,
  APP_INDICATOR_CATEGORY_COMMUNICATIONS,
  APP_INDICATOR_CATEGORY_SYSTEM_SERVICES,
  APP_INDICATOR_CATEGORY_HARDWARE,
  APP_INDICATOR_CATEGORY_OTHER,
}
export enum IndicatorStatus {
  APP_INDICATOR_STATUS_PASSIVE,
  APP_INDICATOR_STATUS_ACTIVE,
  APP_INDICATOR_STATUS_ATTENTION,
}
export class IndicatorClass {
  static parent_class: GObject.ObjectClass;
  static new_icon: (indicator: Indicator, user_data: object | null) => void;
  static new_attention_icon: (indicator: Indicator, user_data: object | null) => void;
  static new_status: (indicator: Indicator, status: string, user_data: object | null) => void;
  static new_icon_theme_path: (indicator: Indicator, icon_theme_path: string, user_data: object | null) => void;
  static new_label: (indicator: Indicator, label: string, guide: string, user_data: object | null) => void;
  static connection_changed: (indicator: Indicator, connected: boolean, user_data: object | null) => void;
  static scroll_event: (indicator: Indicator, delta: number, direction: Gdk.ScrollDirection, user_data: object | null) => void;
  static app_indicator_reserved_ats: () => void;
  static fallback: (indicator: Indicator) => Gtk.StatusIcon;
  static unfallback: (indicator: Indicator, status_icon: Gtk.StatusIcon) => void;
  static app_indicator_reserved_1: () => void;
  static app_indicator_reserved_2: () => void;
  static app_indicator_reserved_3: () => void;
  static app_indicator_reserved_4: () => void;
  static app_indicator_reserved_5: () => void;
  static app_indicator_reserved_6: () => void;
}
export class IndicatorPrivate {}