import * as GLib from './g-lib';
import * as GObject from './g-object';
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const OPTIONS_USE_DFG: string;
export const OPTIONS_USE_FTL: string;
export const OPTIONS_USE_JIT: string;
export const OPTIONS_USE_LLINT: string;
export enum CheckSyntaxMode {
  JSC_CHECK_SYNTAX_MODE_SCRIPT,
  JSC_CHECK_SYNTAX_MODE_MODULE,
}
export enum CheckSyntaxResult {
  JSC_CHECK_SYNTAX_RESULT_SUCCESS,
  JSC_CHECK_SYNTAX_RESULT_RECOVERABLE_ERROR,
  JSC_CHECK_SYNTAX_RESULT_IRRECOVERABLE_ERROR,
  JSC_CHECK_SYNTAX_RESULT_UNTERMINATED_LITERAL_ERROR,
  JSC_CHECK_SYNTAX_RESULT_OUT_OF_MEMORY_ERROR,
  JSC_CHECK_SYNTAX_RESULT_STACK_OVERFLOW_ERROR,
}
export enum OptionType {
  JSC_OPTION_BOOLEAN,
  JSC_OPTION_INT,
  JSC_OPTION_UINT,
  JSC_OPTION_SIZE,
  JSC_OPTION_DOUBLE,
  JSC_OPTION_STRING,
  JSC_OPTION_RANGE_STRING,
}
export enum ValuePropertyFlags {
  JSC_VALUE_PROPERTY_CONFIGURABLE,
  JSC_VALUE_PROPERTY_ENUMERABLE,
  JSC_VALUE_PROPERTY_WRITABLE,
}
export class Class extends GObject.Object {
  context: Context;
  name: string;
  parent: Class;
  add_constructor(name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: any, n_params: number, ...args: any[]): Value;
  add_constructor_variadic(name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: any): Value;
  add_constructorv(name: string | null, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: any, n_parameters: number, parameter_types: any[] | null): Value;
  add_method(name: string, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: any, n_params: number, ...args: any[]): void;
  add_method_variadic(name: string, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: any): void;
  add_methodv(name: string, callback: GObject.Callback, user_data: object | null, destroy_notify: GLib.DestroyNotify | null, return_type: any, n_parameters: number, parameter_types: any[] | null): void;
  add_property(name: string, property_type: any, getter: GObject.Callback | null, setter: GObject.Callback | null, user_data: object | null, destroy_notify: GLib.DestroyNotify | null): void;
  get_name(): string;
  get_parent(): Class;
}
export class Context extends GObject.Object {
  constructor();
  'virtual-machine': VirtualMachine;
  static parent: GObject.Object;
  static priv: ContextPrivate;
  check_syntax(code: string, length: number, mode: CheckSyntaxMode, uri: string, line_number: number, exception?: Exception): CheckSyntaxResult;
  clear_exception(): void;
  evaluate(code: string, length: number): Value;
  evaluate_in_object(code: string, length: number, object_instance: object | null, object_class: Class | null, uri: string, line_number: number, object: Value): Value;
  evaluate_with_source_uri(code: string, length: number, uri: string, line_number: number): Value;
  get_exception(): Exception | null;
  get_global_object(): Value;
  get_value(name: string): Value;
  get_virtual_machine(): VirtualMachine;
  pop_exception_handler(): void;
  push_exception_handler(handler: ExceptionHandler, user_data: object | null, destroy_notify: GLib.DestroyNotify | null): void;
  register_class(name: string, parent_class: Class | null, vtable: ClassVTable | null, destroy_notify: GLib.DestroyNotify | null): Class;
  set_value(name: string, value: Value): void;
  g_throw(error_message: string): void;
  throw_exception(exception: Exception): void;
  throw_printf(format: string, ...args: any[]): void;
  throw_with_name(error_name: string, error_message: string): void;
  throw_with_name_printf(error_name: string, format: string, ...args: any[]): void;
  static get_current(): Context | null;
}
export class Exception extends GObject.Object {
  constructor(context: Context, message: string);
  static parent: GObject.Object;
  static priv: ExceptionPrivate;
  get_backtrace_string(): string | null;
  get_column_number(): number;
  get_line_number(): number;
  get_message(): string;
  get_name(): string;
  get_source_uri(): string | null;
  report(): string;
  to_string(): string;
}
export class Value extends GObject.Object {
  constructor(context: Context, first_item_type: any, ...args: any[]);
  context: Context;
  static parent: GObject.Object;
  static priv: ValuePrivate;
  constructor_call(first_parameter_type: any, ...args: any[]): Value;
  constructor_callv(n_parameters: number, parameters: Value[] | null): Value;
  function_call(first_parameter_type: any, ...args: any[]): Value;
  function_callv(n_parameters: number, parameters: Value[] | null): Value;
  get_context(): Context;
  is_array(): boolean;
  is_boolean(): boolean;
  is_constructor(): boolean;
  is_function(): boolean;
  is_null(): boolean;
  is_number(): boolean;
  is_object(): boolean;
  is_string(): boolean;
  is_undefined(): boolean;
  object_define_property_accessor(property_name: string, flags: ValuePropertyFlags, property_type: any, getter: GObject.Callback | null, setter: GObject.Callback | null, user_data: object | null, destroy_notify: GLib.DestroyNotify | null): void;
  object_define_property_data(property_name: string, flags: ValuePropertyFlags, property_value: Value | null): void;
  object_delete_property(name: string): boolean;
  object_enumerate_properties(): string[] | null;
  object_get_property(name: string): Value;
  object_get_property_at_index(index: number): Value;
  object_has_property(name: string): boolean;
  object_invoke_method(name: string, first_parameter_type: any, ...args: any[]): Value;
  object_invoke_methodv(name: string, n_parameters: number, parameters: Value[] | null): Value;
  object_is_instance_of(name: string): boolean;
  object_set_property(name: string, property: Value): void;
  object_set_property_at_index(index: number, property: Value): void;
  to_boolean(): boolean;
  to_double(): number;
  to_int32(): number;
  to_string(): string;
  to_string_as_bytes(): GLib.Bytes;
}
export class VirtualMachine extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: VirtualMachinePrivate;
}
export class WeakValue extends GObject.Object {
  constructor(value: Value);
  value: Value;
  static parent: GObject.Object;
  static priv: WeakValuePrivate;
  get_value(): Value;
}
export class ClassClass {}
export class ClassVTable {
  static get_property: ClassGetPropertyFunction;
  static set_property: ClassSetPropertyFunction;
  static has_property: ClassHasPropertyFunction;
  static delete_property: ClassDeletePropertyFunction;
  static enumerate_properties: ClassEnumeratePropertiesFunction;
  static _jsc_reserved0: () => void;
  static _jsc_reserved1: () => void;
  static _jsc_reserved2: () => void;
  static _jsc_reserved3: () => void;
}
export class ContextClass {
  static parent_class: GObject.ObjectClass;
  static _jsc_reserved0: () => void;
  static _jsc_reserved1: () => void;
  static _jsc_reserved2: () => void;
  static _jsc_reserved3: () => void;
}
export class ContextPrivate {}
export class ExceptionClass {
  static parent_class: GObject.ObjectClass;
  static _jsc_reserved0: () => void;
  static _jsc_reserved1: () => void;
  static _jsc_reserved2: () => void;
  static _jsc_reserved3: () => void;
}
export class ExceptionPrivate {}
export class ValueClass {
  static parent_class: GObject.ObjectClass;
  static _jsc_reserved0: () => void;
  static _jsc_reserved1: () => void;
  static _jsc_reserved2: () => void;
  static _jsc_reserved3: () => void;
}
export class ValuePrivate {}
export class VirtualMachineClass {
  static parent_class: GObject.ObjectClass;
  static _jsc_reserved0: () => void;
  static _jsc_reserved1: () => void;
  static _jsc_reserved2: () => void;
  static _jsc_reserved3: () => void;
}
export class VirtualMachinePrivate {}
export class WeakValueClass {
  static parent_class: GObject.ObjectClass;
  static _jsc_reserved0: () => void;
  static _jsc_reserved1: () => void;
  static _jsc_reserved2: () => void;
  static _jsc_reserved3: () => void;
}
export class WeakValuePrivate {}
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function options_foreach(_function: OptionsFunc, user_data: object | null): void;
export function options_get_boolean(option: string, value: boolean): boolean;
export function options_get_double(option: string, value: number): boolean;
export function options_get_int(option: string, value: number): boolean;
export function options_get_option_group(): GLib.OptionGroup;
export function options_get_range_string(option: string, value: string): boolean;
export function options_get_size(option: string, value: number): boolean;
export function options_get_string(option: string, value: string): boolean;
export function options_get_uint(option: string, value: number): boolean;
export function options_set_boolean(option: string, value: boolean): boolean;
export function options_set_double(option: string, value: number): boolean;
export function options_set_int(option: string, value: number): boolean;
export function options_set_range_string(option: string, value: string): boolean;
export function options_set_size(option: string, value: number): boolean;
export function options_set_string(option: string, value: string): boolean;
export function options_set_uint(option: string, value: number): boolean;
export type ClassDeletePropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string) => boolean;
export type ClassEnumeratePropertiesFunction = (jsc_class: Class, context: Context, instance: object | null) => string[] | null;
export type ClassGetPropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string) => Value | null;
export type ClassHasPropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string) => boolean;
export type ClassSetPropertyFunction = (jsc_class: Class, context: Context, instance: object | null, name: string, value: Value) => boolean;
export type ExceptionHandler = (context: Context, exception: Exception, user_data: object | null) => void;
export type OptionsFunc = (option: string, type: OptionType, description: string | null, user_data: object | null) => boolean;