import * as GLib from './g-lib';
export const PARAM_MASK: number;
export const PARAM_STATIC_STRINGS: number;
export const PARAM_USER_SHIFT: number;
export const SIGNAL_FLAGS_MASK: number;
export const SIGNAL_MATCH_MASK: number;
export const TYPE_FLAG_RESERVED_ID_BIT: GLib.Type;
export const TYPE_FUNDAMENTAL_MAX: number;
export const TYPE_FUNDAMENTAL_SHIFT: number;
export const TYPE_RESERVED_BSE_FIRST: number;
export const TYPE_RESERVED_BSE_LAST: number;
export const TYPE_RESERVED_GLIB_FIRST: number;
export const TYPE_RESERVED_GLIB_LAST: number;
export const TYPE_RESERVED_USER_FIRST: number;
export const VALUE_NOCOPY_CONTENTS: number;
export enum BindingFlags {
  G_BINDING_DEFAULT,
  G_BINDING_BIDIRECTIONAL,
  G_BINDING_SYNC_CREATE,
  G_BINDING_INVERT_BOOLEAN
}
export enum ConnectFlags {
  G_CONNECT_AFTER,
  G_CONNECT_SWAPPED
}
export enum ParamFlags {
  G_PARAM_READABLE,
  G_PARAM_WRITABLE,
  G_PARAM_READWRITE,
  G_PARAM_CONSTRUCT,
  G_PARAM_CONSTRUCT_ONLY,
  G_PARAM_LAX_VALIDATION,
  G_PARAM_STATIC_NAME,
  G_PARAM_PRIVATE,
  G_PARAM_STATIC_NICK,
  G_PARAM_STATIC_BLURB,
  G_PARAM_EXPLICIT_NOTIFY,
  G_PARAM_DEPRECATED
}
export enum SignalFlags {
  G_SIGNAL_RUN_FIRST,
  G_SIGNAL_RUN_LAST,
  G_SIGNAL_RUN_CLEANUP,
  G_SIGNAL_NO_RECURSE,
  G_SIGNAL_DETAILED,
  G_SIGNAL_ACTION,
  G_SIGNAL_NO_HOOKS,
  G_SIGNAL_MUST_COLLECT,
  G_SIGNAL_DEPRECATED
}
export enum SignalMatchType {
  G_SIGNAL_MATCH_ID,
  G_SIGNAL_MATCH_DETAIL,
  G_SIGNAL_MATCH_CLOSURE,
  G_SIGNAL_MATCH_FUNC,
  G_SIGNAL_MATCH_DATA,
  G_SIGNAL_MATCH_UNBLOCKED
}
export enum TypeDebugFlags {
  G_TYPE_DEBUG_NONE,
  G_TYPE_DEBUG_OBJECTS,
  G_TYPE_DEBUG_SIGNALS,
  G_TYPE_DEBUG_INSTANCE_COUNT,
  G_TYPE_DEBUG_MASK
}
export enum TypeFlags {
  G_TYPE_FLAG_ABSTRACT,
  G_TYPE_FLAG_VALUE_ABSTRACT
}
export enum TypeFundamentalFlags {
  G_TYPE_FLAG_CLASSED,
  G_TYPE_FLAG_INSTANTIATABLE,
  G_TYPE_FLAG_DERIVABLE,
  G_TYPE_FLAG_DEEP_DERIVABLE
}
export type SignalCMarshaller = ClosureMarshal;
export type SignalCVaMarshaller = VaClosureMarshal;
export type Type = number;
export type TypeCValue = any;
export type _Value__data__union = number | object;
export interface TypePlugin {
  complete_interface_info(
    instance_type: any,
    interface_type: any,
    info: InterfaceInfo
  ): void;
  complete_type_info(
    g_type: any,
    info: TypeInfo,
    value_table: TypeValueTable
  ): void;
  unuse(): void;
  use(): void;
}
export class Binding extends Object {
  flags: BindingFlags;
  source: Object;
  'source-property': string;
  target: Object;
  'target-property': string;
  get_flags(): BindingFlags;
  get_source(): Object;
  get_source_property(): string;
  get_target(): Object;
  get_target_property(): string;
  unbind(): void;
}
export class InitiallyUnowned extends Object {
  static g_type_instance: any;
  static ref_count: any;
  static qdata: any;
}
export class Object {
  constructor(object_type: any, first_property_name: string, ...args: any[]);
  static g_type_instance: TypeInstance;
  static ref_count: number;
  static qdata: GLib.Data;
  add_toggle_ref(notify: ToggleNotify, data: object | null): void;
  add_weak_pointer(weak_pointer_location: object): void;
  bind_property(
    source_property: string,
    target: Object,
    target_property: string,
    flags: BindingFlags
  ): Binding;
  bind_property_full(
    source_property: string,
    target: Object,
    target_property: string,
    flags: BindingFlags,
    transform_to: BindingTransformFunc | null,
    transform_from: BindingTransformFunc | null,
    user_data: object | null,
    notify: GLib.DestroyNotify | null
  ): Binding;
  bind_property_with_closures(
    source_property: string,
    target: Object,
    target_property: string,
    flags: BindingFlags,
    transform_to: Closure,
    transform_from: Closure
  ): Binding;
  connect(signal_spec: string, ...args: any[]): Object;
  disconnect(signal_spec: string, ...args: any[]): void;
  dup_data(
    key: string,
    dup_func: GLib.DuplicateFunc | null,
    user_data: object | null
  ): object | null;
  dup_qdata(
    quark: GLib.Quark,
    dup_func: GLib.DuplicateFunc | null,
    user_data: object | null
  ): object | null;
  force_floating(): void;
  freeze_notify(): void;
  get(first_property_name: string, ...args: any[]): void;
  get_data(key: string): object | null;
  get_property(...args: any[]): any;
  get_qdata(quark: GLib.Quark): object | null;
  get_valist(first_property_name: string, var_args: any): void;
  getv(n_properties: number, names: string[], values: Value[]): void;
  is_floating(): boolean;
  notify(...args: any[]): any;
  notify_by_pspec(pspec: ParamSpec): void;
  ref(): Object;
  ref_sink(): Object;
  remove_toggle_ref(notify: ToggleNotify, data: object | null): void;
  remove_weak_pointer(weak_pointer_location: object): void;
  replace_data(
    key: string,
    oldval: object | null,
    newval: object | null,
    destroy: GLib.DestroyNotify | null,
    old_destroy?: GLib.DestroyNotify
  ): boolean;
  replace_qdata(
    quark: GLib.Quark,
    oldval: object | null,
    newval: object | null,
    destroy: GLib.DestroyNotify | null,
    old_destroy?: GLib.DestroyNotify
  ): boolean;
  run_dispose(): void;
  set(first_property_name: string, ...args: any[]): void;
  set_data(key: string, data: object | null): void;
  set_data_full(
    key: string,
    data: object | null,
    destroy: GLib.DestroyNotify | null
  ): void;
  set_property(...args: any[]): any;
  set_qdata(quark: GLib.Quark, data: object | null): void;
  set_qdata_full(
    quark: GLib.Quark,
    data: object | null,
    destroy: GLib.DestroyNotify | null
  ): void;
  set_valist(first_property_name: string, var_args: any): void;
  setv(n_properties: number, names: string[], values: Value[]): void;
  steal_data(key: string): object | null;
  steal_qdata(quark: GLib.Quark): object | null;
  thaw_notify(): void;
  unref(): void;
  watch_closure(closure: Closure): void;
  weak_ref(notify: WeakNotify, data: object | null): void;
  weak_unref(notify: WeakNotify, data: object | null): void;
  constructed(): void;
  dispatch_properties_changed(n_pspecs: number, pspecs: ParamSpec): void;
  dispose(): void;
  finalize(): void;
  get_property(...args: any[]): any;
  notify(...args: any[]): any;
  set_property(...args: any[]): any;
  static compat_control(what: number, data: object | null): number;
  static interface_find_property(
    g_iface: TypeInterface,
    property_name: string
  ): ParamSpec;
  static interface_install_property(
    g_iface: TypeInterface,
    pspec: ParamSpec
  ): void;
  static interface_list_properties(
    g_iface: TypeInterface,
    n_properties_p: number
  ): ParamSpec[];
}
export class ParamSpec {
  static g_type_instance: TypeInstance;
  static name: string;
  static flags: ParamFlags;
  static value_type: any;
  static owner_type: any;
  static _nick: string;
  static _blurb: string;
  static qdata: GLib.Data;
  static ref_count: number;
  static param_id: number;
  get_blurb(): string;
  get_default_value(): Value;
  get_name(): string;
  get_name_quark(): GLib.Quark;
  get_nick(): string;
  get_qdata(quark: GLib.Quark): object | null;
  get_redirect_target(): ParamSpec;
  ref(): ParamSpec;
  ref_sink(): ParamSpec;
  set_qdata(quark: GLib.Quark, data: object | null): void;
  set_qdata_full(
    quark: GLib.Quark,
    data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
  sink(): void;
  steal_qdata(quark: GLib.Quark): object | null;
  unref(): void;
  finalize(): void;
  value_set_default(value: Value): void;
  value_validate(value: Value): boolean;
  values_cmp(value1: Value, value2: Value): number;
  static internal(
    param_type: any,
    name: string,
    nick: string,
    blurb: string,
    flags: ParamFlags
  ): ParamSpec;
}
export class ParamSpecBoolean extends ParamSpec {
  static parent_instance: ParamSpec;
  static default_value: boolean;
}
export class ParamSpecBoxed extends ParamSpec {
  static parent_instance: ParamSpec;
}
export class ParamSpecChar extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecDouble extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
  static epsilon: number;
}
export class ParamSpecEnum extends ParamSpec {
  static parent_instance: ParamSpec;
  static enum_class: EnumClass;
  static default_value: number;
}
export class ParamSpecFlags extends ParamSpec {
  static parent_instance: ParamSpec;
  static flags_class: FlagsClass;
  static default_value: number;
}
export class ParamSpecFloat extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
  static epsilon: number;
}
export class ParamSpecGType extends ParamSpec {
  static parent_instance: ParamSpec;
  static is_a_type: any;
}
export class ParamSpecInt extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecInt64 extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecLong extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecObject extends ParamSpec {
  static parent_instance: ParamSpec;
}
export class ParamSpecOverride extends ParamSpec {
  static parent_instance: ParamSpec;
  static overridden: ParamSpec;
}
export class ParamSpecParam extends ParamSpec {
  static parent_instance: ParamSpec;
}
export class ParamSpecPointer extends ParamSpec {
  static parent_instance: ParamSpec;
}
export class ParamSpecString extends ParamSpec {
  static parent_instance: ParamSpec;
  static default_value: string;
  static cset_first: string;
  static cset_nth: string;
  static substitutor: number;
  static null_fold_if_empty: number;
  static ensure_non_null: number;
}
export class ParamSpecUChar extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecUInt extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecUInt64 extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecULong extends ParamSpec {
  static parent_instance: ParamSpec;
  static minimum: number;
  static maximum: number;
  static default_value: number;
}
export class ParamSpecUnichar extends ParamSpec {
  static parent_instance: ParamSpec;
  static default_value: number;
}
export class ParamSpecValueArray extends ParamSpec {
  static parent_instance: ParamSpec;
  static element_spec: ParamSpec;
  static fixed_n_elements: number;
}
export class ParamSpecVariant extends ParamSpec {
  static parent_instance: ParamSpec;
  static type: GLib.VariantType;
  static default_value: GLib.Variant;
  static padding: object[];
}
export class TypeModule extends Object {
  static parent_instance: Object;
  static use_count: number;
  static type_infos: GLib.SList;
  static interface_infos: GLib.SList;
  static name: string;
  add_interface(
    instance_type: any,
    interface_type: any,
    interface_info: InterfaceInfo
  ): void;
  register_enum(name: string, const_static_values: EnumValue): any;
  register_flags(name: string, const_static_values: FlagsValue): any;
  register_type(
    parent_type: any,
    type_name: string,
    type_info: TypeInfo,
    flags: TypeFlags
  ): any;
  set_name(name: string): void;
  unuse(): void;
  use(): boolean;
  load(): boolean;
  unload(): void;
}
export class CClosure {
  static closure: Closure;
  static callback: object;
  static marshal_BOOLEAN__BOXED_BOXED(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_BOOLEAN__BOXED_BOXEDv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_BOOLEAN__FLAGS(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_BOOLEAN__FLAGSv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_STRING__OBJECT_POINTER(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_STRING__OBJECT_POINTERv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__BOOLEAN(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__BOOLEANv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__BOXED(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__BOXEDv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__CHAR(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__CHARv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__DOUBLE(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__DOUBLEv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__ENUM(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__ENUMv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__FLAGS(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__FLAGSv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__FLOAT(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__FLOATv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__INT(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__INTv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__LONG(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__LONGv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__OBJECT(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__OBJECTv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__PARAM(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__PARAMv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__POINTER(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__POINTERv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__STRING(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__STRINGv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__UCHAR(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__UCHARv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__UINT(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__UINT_POINTER(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__UINT_POINTERv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__UINTv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__ULONG(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__ULONGv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__VARIANT(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__VARIANTv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_VOID__VOID(
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_VOID__VOIDv(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static marshal_generic(
    closure: Closure,
    return_gvalue: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object | null,
    marshal_data: object | null
  ): void;
  static marshal_generic_va(
    closure: Closure,
    return_value: Value | null,
    instance: TypeInstance,
    args_list: any,
    marshal_data: object | null,
    n_params: number,
    param_types: any[]
  ): void;
  static g_new(
    callback_func: Callback | null,
    user_data: object | null,
    destroy_data: ClosureNotify
  ): Closure;
  static new_object(callback_func: Callback, object: Object): Closure;
  static new_object_swap(callback_func: Callback, object: Object): Closure;
  static new_swap(
    callback_func: Callback | null,
    user_data: object | null,
    destroy_data: ClosureNotify
  ): Closure;
}
export class Closure {
  constructor(sizeof_closure: number, object: Object);
  static ref_count: number;
  static meta_marshal_nouse: number;
  static n_guards: number;
  static n_fnotifiers: number;
  static n_inotifiers: number;
  static in_inotify: number;
  static floating: number;
  static derivative_flag: number;
  static in_marshal: number;
  static is_invalid: number;
  static marshal: (
    closure: Closure,
    return_value: Value,
    n_param_values: number,
    param_values: Value,
    invocation_hint: object,
    marshal_data: object
  ) => void;
  static data: object;
  static notifiers: ClosureNotifyData;
  add_finalize_notifier(
    notify_data: object | null,
    notify_func: ClosureNotify | null
  ): void;
  add_invalidate_notifier(
    notify_data: object | null,
    notify_func: ClosureNotify | null
  ): void;
  add_marshal_guards(
    pre_marshal_data: object | null,
    pre_marshal_notify: ClosureNotify | null,
    post_marshal_data: object | null,
    post_marshal_notify: ClosureNotify | null
  ): void;
  invalidate(): void;
  invoke(
    return_value?: Value,
    n_param_values?: number,
    param_values?: Value[],
    invocation_hint?: object | null
  ): void;
  ref(): Closure;
  remove_finalize_notifier(
    notify_data: object | null,
    notify_func: ClosureNotify
  ): void;
  remove_invalidate_notifier(
    notify_data: object | null,
    notify_func: ClosureNotify
  ): void;
  set_marshal(marshal: ClosureMarshal): void;
  set_meta_marshal(
    marshal_data: object | null,
    meta_marshal: ClosureMarshal | null
  ): void;
  sink(): void;
  unref(): void;
}
export class ClosureNotifyData {
  static data: object;
  static notify: ClosureNotify;
}
export class EnumClass {
  static g_type_class: TypeClass;
  static minimum: number;
  static maximum: number;
  static n_values: number;
  static values: EnumValue;
}
export class EnumValue {
  static value: number;
  static value_name: string;
  static value_nick: string;
}
export class FlagsClass {
  static g_type_class: TypeClass;
  static mask: number;
  static n_values: number;
  static values: FlagsValue;
}
export class FlagsValue {
  static value: number;
  static value_name: string;
  static value_nick: string;
}
export class InitiallyUnownedClass {
  static g_type_class: TypeClass;
  static construct_properties: GLib.SList;
  static g_constructor: (
    type: any,
    n_construct_properties: number,
    construct_properties: ObjectConstructParam
  ) => Object;
  static set_property: (
    object: Object,
    property_id: number,
    value: Value,
    pspec: ParamSpec
  ) => void;
  static get_property: (
    object: Object,
    property_id: number,
    value: Value,
    pspec: ParamSpec
  ) => void;
  static dispose: (object: Object) => void;
  static finalize: (object: Object) => void;
  static dispatch_properties_changed: (
    object: Object,
    n_pspecs: number,
    pspecs: ParamSpec
  ) => void;
  static notify: (object: Object, pspec: ParamSpec) => void;
  static constructed: (object: Object) => void;
  static flags: number;
  static pdummy: object[];
}
export class InterfaceInfo {
  static interface_init: InterfaceInitFunc;
  static interface_finalize: InterfaceFinalizeFunc;
  static interface_data: object;
}
export class ObjectClass {
  static g_type_class: TypeClass;
  static construct_properties: GLib.SList;
  static g_constructor: (
    type: any,
    n_construct_properties: number,
    construct_properties: ObjectConstructParam
  ) => Object;
  static set_property: (
    object: Object,
    property_id: number,
    value: Value,
    pspec: ParamSpec
  ) => void;
  static get_property: (
    object: Object,
    property_id: number,
    value: Value,
    pspec: ParamSpec
  ) => void;
  static dispose: (object: Object) => void;
  static finalize: (object: Object) => void;
  static dispatch_properties_changed: (
    object: Object,
    n_pspecs: number,
    pspecs: ParamSpec
  ) => void;
  static notify: (object: Object, pspec: ParamSpec) => void;
  static constructed: (object: Object) => void;
  static flags: number;
  static pdummy: object[];
  find_property(property_name: string): ParamSpec;
  install_properties(n_pspecs: number, pspecs: ParamSpec[]): void;
  install_property(property_id: number, pspec: ParamSpec): void;
  list_properties(n_properties: number): ParamSpec[];
  override_property(property_id: number, name: string): void;
}
export class ObjectConstructParam {
  static pspec: ParamSpec;
  static value: Value;
}
export class ParamSpecClass {
  static g_type_class: TypeClass;
  static value_type: any;
  static finalize: (pspec: ParamSpec) => void;
  static value_set_default: (pspec: ParamSpec, value: Value) => void;
  static value_validate: (pspec: ParamSpec, value: Value) => boolean;
  static values_cmp: (pspec: ParamSpec, value1: Value, value2: Value) => number;
  static dummy: object[];
}
export class ParamSpecPool {
  insert(pspec: ParamSpec, owner_type: any): void;
  list(owner_type: any, n_pspecs_p: number): ParamSpec[];
  list_owned(owner_type: any): GLib.List;
  lookup(
    param_name: string,
    owner_type: any,
    walk_ancestors: boolean
  ): ParamSpec;
  remove(pspec: ParamSpec): void;
  static g_new(type_prefixing: boolean): ParamSpecPool;
}
export class ParamSpecTypeInfo {
  static instance_size: number;
  static n_preallocs: number;
  static instance_init: (pspec: ParamSpec) => void;
  static value_type: any;
  static finalize: (pspec: ParamSpec) => void;
  static value_set_default: (pspec: ParamSpec, value: Value) => void;
  static value_validate: (pspec: ParamSpec, value: Value) => boolean;
  static values_cmp: (pspec: ParamSpec, value1: Value, value2: Value) => number;
}
export class Parameter {
  static name: string;
  static value: Value;
}
export class SignalInvocationHint {
  static signal_id: number;
  static detail: GLib.Quark;
  static run_type: SignalFlags;
}
export class SignalQuery {
  static signal_id: number;
  static signal_name: string;
  static itype: any;
  static signal_flags: SignalFlags;
  static return_type: any;
  static n_params: number;
  static param_types: any[];
}
export class TypeClass {
  static g_type: any;
  add_private(private_size: number): void;
  get_instance_private_offset(): number;
  get_private(private_type: any): object | null;
  peek_parent(): TypeClass;
  unref(): void;
  unref_uncached(): void;
  static adjust_private_offset(
    g_class: object | null,
    private_size_or_offset: number
  ): void;
  static peek(type: any): TypeClass;
  static peek_static(type: any): TypeClass;
  static ref(type: any): TypeClass;
}
export class TypeFundamentalInfo {
  static type_flags: TypeFundamentalFlags;
}
export class TypeInfo {
  static class_size: number;
  static base_init: BaseInitFunc;
  static base_finalize: BaseFinalizeFunc;
  static class_init: ClassInitFunc;
  static class_finalize: ClassFinalizeFunc;
  static class_data: object;
  static instance_size: number;
  static n_preallocs: number;
  static instance_init: InstanceInitFunc;
  static value_table: TypeValueTable;
}
export class TypeInstance {
  static g_class: TypeClass;
  get_private(private_type: any): object | null;
}
export class TypeInterface {
  static g_type: any;
  static g_instance_type: any;
  peek_parent(): TypeInterface;
  static add_prerequisite(interface_type: any, prerequisite_type: any): void;
  static get_plugin(instance_type: any, interface_type: any): any;
  static peek(instance_class: TypeClass, iface_type: any): TypeInterface;
  static prerequisites(interface_type: any, n_prerequisites?: number): any[];
}
export class TypeModuleClass {
  static parent_class: ObjectClass;
  static load: (module: TypeModule) => boolean;
  static unload: (module: TypeModule) => void;
  static reserved1: () => void;
  static reserved2: () => void;
  static reserved3: () => void;
  static reserved4: () => void;
}
export class TypePluginClass {
  static base_iface: TypeInterface;
  static use_plugin: TypePluginUse;
  static unuse_plugin: TypePluginUnuse;
  static complete_type_info: TypePluginCompleteTypeInfo;
  static complete_interface_info: TypePluginCompleteInterfaceInfo;
}
export class TypeQuery {
  static type: any;
  static type_name: string;
  static class_size: number;
  static instance_size: number;
}
export class TypeValueTable {
  static value_init: (value: Value) => void;
  static value_free: (value: Value) => void;
  static value_copy: (src_value: Value, dest_value: Value) => void;
  static value_peek_pointer: (value: Value) => object;
  static collect_format: string;
  static collect_value: (
    value: Value,
    n_collect_values: number,
    collect_values: TypeCValue,
    collect_flags: number
  ) => string;
  static lcopy_format: string;
  static lcopy_value: (
    value: Value,
    n_collect_values: number,
    collect_values: TypeCValue,
    collect_flags: number
  ) => string;
  static peek(type: any): TypeValueTable;
}
export class Value {
  static g_type: any;
  static data: _Value__data__union[];
  copy(dest_value: Value): void;
  dup_boxed(): object | null;
  dup_object(): Object;
  dup_param(): ParamSpec;
  dup_string(): string;
  dup_variant(): GLib.Variant | null;
  fits_pointer(): boolean;
  get_boolean(): boolean;
  get_boxed(): object | null;
  get_char(): number;
  get_double(): number;
  get_enum(): number;
  get_flags(): number;
  get_float(): number;
  get_gtype(): any;
  get_int(): number;
  get_int64(): number;
  get_long(): number;
  get_object(): Object;
  get_param(): ParamSpec;
  get_pointer(): object | null;
  get_schar(): number;
  get_string(): string;
  get_uchar(): number;
  get_uint(): number;
  get_uint64(): number;
  get_ulong(): number;
  get_variant(): GLib.Variant | null;
  init(g_type: any): Value;
  init_from_instance(instance: TypeInstance): void;
  peek_pointer(): object | null;
  reset(): Value;
  set_boolean(v_boolean: boolean): void;
  set_boxed(v_boxed: object | null): void;
  set_boxed_take_ownership(v_boxed: object | null): void;
  set_char(v_char: number): void;
  set_double(v_double: number): void;
  set_enum(v_enum: number): void;
  set_flags(v_flags: number): void;
  set_float(v_float: number): void;
  set_gtype(v_gtype: any): void;
  set_instance(instance: object | null): void;
  set_int(v_int: number): void;
  set_int64(v_int64: number): void;
  set_long(v_long: number): void;
  set_object(v_object: Object | null): void;
  set_object_take_ownership(v_object: object | null): void;
  set_param(param: ParamSpec | null): void;
  set_param_take_ownership(param: ParamSpec | null): void;
  set_pointer(v_pointer: object | null): void;
  set_schar(v_char: number): void;
  set_static_boxed(v_boxed: object | null): void;
  set_static_string(v_string: string | null): void;
  set_string(v_string: string | null): void;
  set_string_take_ownership(v_string: string | null): void;
  set_uchar(v_uchar: number): void;
  set_uint(v_uint: number): void;
  set_uint64(v_uint64: number): void;
  set_ulong(v_ulong: number): void;
  set_variant(variant: GLib.Variant | null): void;
  take_boxed(v_boxed: object | null): void;
  take_object(v_object: object | null): void;
  take_param(param: ParamSpec | null): void;
  take_string(v_string: string | null): void;
  take_variant(variant: GLib.Variant | null): void;
  transform(dest_value: Value): boolean;
  unset(): void;
  static register_transform_func(
    src_type: any,
    dest_type: any,
    transform_func: ValueTransform
  ): void;
  static type_compatible(src_type: any, dest_type: any): boolean;
  static type_transformable(src_type: any, dest_type: any): boolean;
}
export class ValueArray {
  constructor(n_prealloced: number);
  static n_values: number;
  static values: Value;
  static n_prealloced: number;
  append(value: Value | null): ValueArray;
  copy(): ValueArray;
  free(): void;
  get_nth(index_: number): Value;
  insert(index_: number, value: Value | null): ValueArray;
  prepend(value: Value | null): ValueArray;
  remove(index_: number): ValueArray;
  sort(compare_func: GLib.CompareFunc): ValueArray;
  sort_with_data(
    compare_func: GLib.CompareDataFunc,
    user_data: object | null
  ): ValueArray;
}
export class WeakRef {
  clear(): void;
  get(): Object;
  init(object: Object | null): void;
  set(object: Object | null): void;
}
export function boxed_copy(boxed_type: any, src_boxed: object): object;
export function boxed_free(boxed_type: any, boxed: object): void;
export function boxed_type_register_static(
  name: string,
  boxed_copy: BoxedCopyFunc,
  boxed_free: BoxedFreeFunc
): any;
export function cclosure_marshal_BOOLEAN__BOXED_BOXED(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_BOOLEAN__FLAGS(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_STRING__OBJECT_POINTER(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__BOOLEAN(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__BOXED(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__CHAR(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__DOUBLE(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__ENUM(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__FLAGS(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__FLOAT(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__INT(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__LONG(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__OBJECT(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__PARAM(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__POINTER(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__STRING(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__UCHAR(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__UINT(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__UINT_POINTER(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__ULONG(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__VARIANT(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_VOID__VOID(
  closure: Closure,
  return_value: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_marshal_generic(
  closure: Closure,
  return_gvalue: Value,
  n_param_values: number,
  param_values: Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function cclosure_new(
  callback_func: Callback | null,
  user_data: object | null,
  destroy_data: ClosureNotify
): Closure;
export function cclosure_new_object(
  callback_func: Callback,
  object: Object
): Closure;
export function cclosure_new_object_swap(
  callback_func: Callback,
  object: Object
): Closure;
export function cclosure_new_swap(
  callback_func: Callback | null,
  user_data: object | null,
  destroy_data: ClosureNotify
): Closure;
export function clear_object(object_ptr: Object): void;
export function clear_signal_handler(
  handler_id_ptr: number,
  instance: Object
): void;
export function enum_complete_type_info(
  g_enum_type: any,
  info: TypeInfo,
  const_values: EnumValue
): void;
export function enum_get_value(enum_class: EnumClass, value: number): EnumValue;
export function enum_get_value_by_name(
  enum_class: EnumClass,
  name: string
): EnumValue;
export function enum_get_value_by_nick(
  enum_class: EnumClass,
  nick: string
): EnumValue;
export function enum_register_static(
  name: string,
  const_static_values: EnumValue
): any;
export function enum_to_string(g_enum_type: any, value: number): string;
export function flags_complete_type_info(
  g_flags_type: any,
  info: TypeInfo,
  const_values: FlagsValue
): void;
export function flags_get_first_value(
  flags_class: FlagsClass,
  value: number
): FlagsValue;
export function flags_get_value_by_name(
  flags_class: FlagsClass,
  name: string
): FlagsValue;
export function flags_get_value_by_nick(
  flags_class: FlagsClass,
  nick: string
): FlagsValue;
export function flags_register_static(
  name: string,
  const_static_values: FlagsValue
): any;
export function flags_to_string(flags_type: any, value: number): string;
export function gtype_get_type(): any;
export function param_spec_boolean(
  name: string,
  nick: string,
  blurb: string,
  default_value: boolean,
  flags: ParamFlags
): ParamSpec;
export function param_spec_boxed(
  name: string,
  nick: string,
  blurb: string,
  boxed_type: any,
  flags: ParamFlags
): ParamSpec;
export function param_spec_char(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_double(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_enum(
  name: string,
  nick: string,
  blurb: string,
  enum_type: any,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_flags(
  name: string,
  nick: string,
  blurb: string,
  flags_type: any,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_float(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_gtype(
  name: string,
  nick: string,
  blurb: string,
  is_a_type: any,
  flags: ParamFlags
): ParamSpec;
export function param_spec_int(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_int64(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_long(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_object(
  name: string,
  nick: string,
  blurb: string,
  object_type: any,
  flags: ParamFlags
): ParamSpec;
export function param_spec_override(
  name: string,
  overridden: ParamSpec
): ParamSpec;
export function param_spec_param(
  name: string,
  nick: string,
  blurb: string,
  param_type: any,
  flags: ParamFlags
): ParamSpec;
export function param_spec_pointer(
  name: string,
  nick: string,
  blurb: string,
  flags: ParamFlags
): ParamSpec;
export function param_spec_pool_new(type_prefixing: boolean): ParamSpecPool;
export function param_spec_string(
  name: string,
  nick: string,
  blurb: string,
  default_value: string | null,
  flags: ParamFlags
): ParamSpec;
export function param_spec_uchar(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_uint(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_uint64(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_ulong(
  name: string,
  nick: string,
  blurb: string,
  minimum: number,
  maximum: number,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_unichar(
  name: string,
  nick: string,
  blurb: string,
  default_value: number,
  flags: ParamFlags
): ParamSpec;
export function param_spec_value_array(
  name: string,
  nick: string,
  blurb: string,
  element_spec: ParamSpec,
  flags: ParamFlags
): ParamSpec;
export function param_spec_variant(
  name: string,
  nick: string,
  blurb: string,
  type: GLib.VariantType,
  default_value: GLib.Variant | null,
  flags: ParamFlags
): ParamSpec;
export function param_type_register_static(
  name: string,
  pspec_info: ParamSpecTypeInfo
): any;
export function param_value_convert(
  pspec: ParamSpec,
  src_value: Value,
  dest_value: Value,
  strict_validation: boolean
): boolean;
export function param_value_defaults(pspec: ParamSpec, value: Value): boolean;
export function param_value_set_default(pspec: ParamSpec, value: Value): void;
export function param_value_validate(pspec: ParamSpec, value: Value): boolean;
export function param_values_cmp(
  pspec: ParamSpec,
  value1: Value,
  value2: Value
): number;
export function pointer_type_register_static(name: string): any;
export function signal_accumulator_first_wins(
  ihint: SignalInvocationHint,
  return_accu: Value,
  handler_return: Value,
  dummy: object | null
): boolean;
export function signal_accumulator_true_handled(
  ihint: SignalInvocationHint,
  return_accu: Value,
  handler_return: Value,
  dummy: object | null
): boolean;
export function signal_add_emission_hook(
  signal_id: number,
  detail: GLib.Quark,
  hook_func: SignalEmissionHook,
  hook_data: object | null,
  data_destroy: GLib.DestroyNotify
): number;
export function signal_chain_from_overridden(
  instance_and_params: Value[],
  return_value: Value
): void;
export function signal_chain_from_overridden_handler(
  instance: TypeInstance,
  ...args: any[]
): void;
export function signal_connect_closure(
  instance: Object,
  detailed_signal: string,
  closure: Closure,
  after: boolean
): number;
export function signal_connect_closure_by_id(
  instance: Object,
  signal_id: number,
  detail: GLib.Quark,
  closure: Closure,
  after: boolean
): number;
export function signal_connect_data(
  instance: Object,
  detailed_signal: string,
  c_handler: Callback,
  data: object | null,
  destroy_data: ClosureNotify,
  connect_flags: ConnectFlags
): number;
export function signal_connect_object(
  instance: TypeInstance,
  detailed_signal: string,
  c_handler: Callback,
  gobject: Object | null,
  connect_flags: ConnectFlags
): number;
export function signal_emit(
  instance: Object,
  signal_id: number,
  detail: GLib.Quark,
  ...args: any[]
): void;
export function signal_emit_by_name(
  instance: Object,
  detailed_signal: string,
  ...args: any[]
): void;
export function signal_emit_valist(
  instance: TypeInstance,
  signal_id: number,
  detail: GLib.Quark,
  var_args: any
): void;
export function signal_emitv(
  instance_and_params: Value[],
  signal_id: number,
  detail: GLib.Quark,
  return_value: Value
): void;
export function signal_get_invocation_hint(
  instance: Object
): SignalInvocationHint;
export function signal_handler_block(
  instance: Object,
  handler_id: number
): void;
export function signal_handler_disconnect(
  instance: Object,
  handler_id: number
): void;
export function signal_handler_find(
  instance: Object,
  mask: SignalMatchType,
  signal_id: number,
  detail: GLib.Quark,
  closure: Closure | null,
  func: object | null,
  data: object | null
): number;
export function signal_handler_is_connected(
  instance: Object,
  handler_id: number
): boolean;
export function signal_handler_unblock(
  instance: Object,
  handler_id: number
): void;
export function signal_handlers_block_matched(
  instance: Object,
  mask: SignalMatchType,
  signal_id: number,
  detail: GLib.Quark,
  closure: Closure | null,
  func: object | null,
  data: object | null
): number;
export function signal_handlers_destroy(instance: Object): void;
export function signal_handlers_disconnect_matched(
  instance: Object,
  mask: SignalMatchType,
  signal_id: number,
  detail: GLib.Quark,
  closure: Closure | null,
  func: object | null,
  data: object | null
): number;
export function signal_handlers_unblock_matched(
  instance: Object,
  mask: SignalMatchType,
  signal_id: number,
  detail: GLib.Quark,
  closure: Closure | null,
  func: object | null,
  data: object | null
): number;
export function signal_has_handler_pending(
  instance: Object,
  signal_id: number,
  detail: GLib.Quark,
  may_be_blocked: boolean
): boolean;
export function signal_list_ids(itype: any, n_ids: number): number[];
export function signal_lookup(name: string, itype: any): number;
export function signal_name(signal_id: number): string;
export function signal_new(
  signal_name: string,
  itype: any,
  signal_flags: SignalFlags,
  class_offset: number,
  accumulator: SignalAccumulator,
  accu_data: object | null,
  c_marshaller: SignalCMarshaller | null,
  return_type: any,
  n_params: number,
  ...args: any[]
): number;
export function signal_new_class_handler(
  signal_name: string,
  itype: any,
  signal_flags: SignalFlags,
  class_handler: Callback,
  accumulator: SignalAccumulator,
  accu_data: object | null,
  c_marshaller: SignalCMarshaller | null,
  return_type: any,
  n_params: number,
  ...args: any[]
): number;
export function signal_new_valist(
  signal_name: string,
  itype: any,
  signal_flags: SignalFlags,
  class_closure: Closure,
  accumulator: SignalAccumulator,
  accu_data: object | null,
  c_marshaller: SignalCMarshaller | null,
  return_type: any,
  n_params: number,
  args: any
): number;
export function signal_newv(
  signal_name: string,
  itype: any,
  signal_flags: SignalFlags,
  class_closure: Closure | null,
  accumulator: SignalAccumulator | null,
  accu_data: object | null,
  c_marshaller: SignalCMarshaller | null,
  return_type: any,
  n_params: number,
  param_types: any[]
): number;
export function signal_override_class_closure(
  signal_id: number,
  instance_type: any,
  class_closure: Closure
): void;
export function signal_override_class_handler(
  signal_name: string,
  instance_type: any,
  class_handler: Callback
): void;
export function signal_parse_name(
  detailed_signal: string,
  itype: any,
  signal_id_p: number,
  detail_p: GLib.Quark,
  force_detail_quark: boolean
): boolean;
export function signal_query(signal_id: number, query: SignalQuery): void;
export function signal_remove_emission_hook(
  signal_id: number,
  hook_id: number
): void;
export function signal_set_va_marshaller(
  signal_id: number,
  instance_type: any,
  va_marshaller: SignalCVaMarshaller
): void;
export function signal_stop_emission(
  instance: Object,
  signal_id: number,
  detail: GLib.Quark
): void;
export function signal_stop_emission_by_name(
  instance: Object,
  detailed_signal: string
): void;
export function signal_type_cclosure_new(
  itype: any,
  struct_offset: number
): Closure;
export function source_set_closure(source: GLib.Source, closure: Closure): void;
export function source_set_dummy_callback(source: GLib.Source): void;
export function strdup_value_contents(value: Value): string;
export function type_add_class_cache_func(
  cache_data: object | null,
  cache_func: TypeClassCacheFunc
): void;
export function type_add_class_private(
  class_type: any,
  private_size: number
): void;
export function type_add_instance_private(
  class_type: any,
  private_size: number
): number;
export function type_add_interface_check(
  check_data: object | null,
  check_func: TypeInterfaceCheckFunc
): void;
export function type_add_interface_dynamic(
  instance_type: any,
  interface_type: any,
  plugin: any
): void;
export function type_add_interface_static(
  instance_type: any,
  interface_type: any,
  info: InterfaceInfo
): void;
export function type_check_class_cast(
  g_class: TypeClass,
  is_a_type: any
): TypeClass;
export function type_check_class_is_a(
  g_class: TypeClass,
  is_a_type: any
): boolean;
export function type_check_instance(instance: TypeInstance): boolean;
export function type_check_instance_cast(
  instance: TypeInstance,
  iface_type: any
): TypeInstance;
export function type_check_instance_is_a(
  instance: TypeInstance,
  iface_type: any
): boolean;
export function type_check_instance_is_fundamentally_a(
  instance: TypeInstance,
  fundamental_type: any
): boolean;
export function type_check_is_value_type(type: any): boolean;
export function type_check_value(value: Value): boolean;
export function type_check_value_holds(value: Value, type: any): boolean;
export function type_children(type: any, n_children: number): any[];
export function type_class_adjust_private_offset(
  g_class: object | null,
  private_size_or_offset: number
): void;
export function type_class_peek(type: any): TypeClass;
export function type_class_peek_static(type: any): TypeClass;
export function type_class_ref(type: any): TypeClass;
export function type_create_instance(type: any): TypeInstance;
export function type_default_interface_peek(g_type: any): TypeInterface;
export function type_default_interface_ref(g_type: any): TypeInterface;
export function type_default_interface_unref(g_iface: TypeInterface): void;
export function type_depth(type: any): number;
export function type_ensure(type: any): void;
export function type_free_instance(instance: TypeInstance): void;
export function type_from_name(name: string): any;
export function type_fundamental(type_id: any): any;
export function type_fundamental_next(): any;
export function type_get_instance_count(type: any): number;
export function type_get_plugin(type: any): any;
export function type_get_qdata(type: any, quark: GLib.Quark): object | null;
export function type_get_type_registration_serial(): number;
export function type_init(): void;
export function type_init_with_debug_flags(debug_flags: TypeDebugFlags): void;
export function type_interface_add_prerequisite(
  interface_type: any,
  prerequisite_type: any
): void;
export function type_interface_get_plugin(
  instance_type: any,
  interface_type: any
): any;
export function type_interface_peek(
  instance_class: TypeClass,
  iface_type: any
): TypeInterface;
export function type_interface_prerequisites(
  interface_type: any,
  n_prerequisites: number
): any[];
export function type_interfaces(type: any, n_interfaces: number): any[];
export function type_is_a(type: any, is_a_type: any): boolean;
export function type_name(type: any): string;
export function type_name_from_class(g_class: TypeClass): string;
export function type_name_from_instance(instance: TypeInstance): string;
export function type_next_base(leaf_type: any, root_type: any): any;
export function type_parent(type: any): any;
export function type_qname(type: any): GLib.Quark;
export function type_query(type: any, query: TypeQuery): void;
export function type_register_dynamic(
  parent_type: any,
  type_name: string,
  plugin: any,
  flags: TypeFlags
): any;
export function type_register_fundamental(
  type_id: any,
  type_name: string,
  info: TypeInfo,
  finfo: TypeFundamentalInfo,
  flags: TypeFlags
): any;
export function type_register_static(
  parent_type: any,
  type_name: string,
  info: TypeInfo,
  flags: TypeFlags
): any;
export function type_register_static_simple(
  parent_type: any,
  type_name: string,
  class_size: number,
  class_init: ClassInitFunc,
  instance_size: number,
  instance_init: InstanceInitFunc,
  flags: TypeFlags
): any;
export function type_remove_class_cache_func(
  cache_data: object | null,
  cache_func: TypeClassCacheFunc
): void;
export function type_remove_interface_check(
  check_data: object | null,
  check_func: TypeInterfaceCheckFunc
): void;
export function type_set_qdata(
  type: any,
  quark: GLib.Quark,
  data: object | null
): void;
export function type_test_flags(type: any, flags: number): boolean;
export function type_value_table_peek(type: any): TypeValueTable;
export function value_register_transform_func(
  src_type: any,
  dest_type: any,
  transform_func: ValueTransform
): void;
export function value_type_compatible(src_type: any, dest_type: any): boolean;
export function value_type_transformable(
  src_type: any,
  dest_type: any
): boolean;
export type BaseFinalizeFunc = (g_class: TypeClass) => void;
export type BaseInitFunc = (g_class: TypeClass) => void;
export type BindingTransformFunc = (
  binding: Binding,
  from_value: Value,
  to_value: Value,
  user_data: object | null
) => boolean;
export type BoxedCopyFunc = (boxed: object) => object;
export type BoxedFreeFunc = (boxed: object) => void;
export type Callback = () => void;
export type ClassFinalizeFunc = (
  g_class: TypeClass,
  class_data: object | null
) => void;
export type ClassInitFunc = (
  g_class: TypeClass,
  class_data: object | null
) => void;
export type ClosureMarshal = (
  closure: Closure,
  return_value: Value | null,
  n_param_values: number,
  param_values: Value[],
  invocation_hint: object | null,
  marshal_data: object | null
) => void;
export type ClosureNotify = (data: object | null, closure: Closure) => void;
export type InstanceInitFunc = (
  instance: TypeInstance,
  g_class: TypeClass
) => void;
export type InterfaceFinalizeFunc = (
  g_iface: TypeInterface,
  iface_data: object | null
) => void;
export type InterfaceInitFunc = (
  g_iface: TypeInterface,
  iface_data: object | null
) => void;
export type ObjectFinalizeFunc = (object: Object) => void;
export type ObjectGetPropertyFunc = (
  object: Object,
  property_id: number,
  value: Value,
  pspec: ParamSpec
) => void;
export type ObjectSetPropertyFunc = (
  object: Object,
  property_id: number,
  value: Value,
  pspec: ParamSpec
) => void;
export type SignalAccumulator = (
  ihint: SignalInvocationHint,
  return_accu: Value,
  handler_return: Value,
  data: object | null
) => boolean;
export type SignalEmissionHook = (
  ihint: SignalInvocationHint,
  n_param_values: number,
  param_values: Value[],
  data: object | null
) => boolean;
export type ToggleNotify = (
  data: object | null,
  object: Object,
  is_last_ref: boolean
) => void;
export type TypeClassCacheFunc = (
  cache_data: object | null,
  g_class: TypeClass
) => boolean;
export type TypeInterfaceCheckFunc = (
  check_data: object | null,
  g_iface: TypeInterface
) => void;
export type TypePluginCompleteInterfaceInfo = (
  plugin: any,
  instance_type: any,
  interface_type: any,
  info: InterfaceInfo
) => void;
export type TypePluginCompleteTypeInfo = (
  plugin: any,
  g_type: any,
  info: TypeInfo,
  value_table: TypeValueTable
) => void;
export type TypePluginUnuse = (plugin: any) => void;
export type TypePluginUse = (plugin: any) => void;
export type VaClosureMarshal = (
  closure: Closure,
  return_value: Value | null,
  instance: TypeInstance,
  args: any,
  marshal_data: object | null,
  n_params: number,
  param_types: any[]
) => void;
export type ValueTransform = (src_value: Value, dest_value: Value) => void;
export type WeakNotify = (
  data: object | null,
  where_the_object_was: Object
) => void;
