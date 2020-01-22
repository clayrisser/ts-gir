import * as GLib from './g-lib';
import * as GObject from './g-object';
export const EXPIRES_DEFAULT: number;
export const EXPIRES_NEVER: number;
export const VERSION_MAJOR: number;
export const VERSION_MICRO: number;
export const VERSION_MINOR: number;
export enum Urgency {
  NOTIFY_URGENCY_LOW,
  NOTIFY_URGENCY_NORMAL,
  NOTIFY_URGENCY_CRITICAL,
}
export class NotificationClass {
  static parent_class: GObject.ObjectClass;
  static closed: (notification: Notification) => void;
}
export class NotificationPrivate {}
export function get_app_name(): string;
export function get_server_caps(): GLib.List;
export function get_server_info(ret_name: string, ret_vendor: string, ret_version: string, ret_spec_version: string): boolean;
export function init(app_name: string): boolean;
export function is_initted(): boolean;
export function set_app_name(app_name: string): void;
export function uninit(): void;