import * as GLib from './g-lib';
import * as GObject from './g-object';
export const MAJOR_VERSION: number;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const TYPE_TAG_N_TYPES: number;
export enum ArrayType {
  GI_ARRAY_TYPE_C,
  GI_ARRAY_TYPE_ARRAY,
  GI_ARRAY_TYPE_PTR_ARRAY,
  GI_ARRAY_TYPE_BYTE_ARRAY
}
export enum Direction {
  GI_DIRECTION_IN,
  GI_DIRECTION_OUT,
  GI_DIRECTION_INOUT
}
export enum InfoType {
  GI_INFO_TYPE_INVALID,
  GI_INFO_TYPE_FUNCTION,
  GI_INFO_TYPE_CALLBACK,
  GI_INFO_TYPE_STRUCT,
  GI_INFO_TYPE_BOXED,
  GI_INFO_TYPE_ENUM,
  GI_INFO_TYPE_FLAGS,
  GI_INFO_TYPE_OBJECT,
  GI_INFO_TYPE_INTERFACE,
  GI_INFO_TYPE_CONSTANT,
  GI_INFO_TYPE_INVALID_0,
  GI_INFO_TYPE_UNION,
  GI_INFO_TYPE_VALUE,
  GI_INFO_TYPE_SIGNAL,
  GI_INFO_TYPE_VFUNC,
  GI_INFO_TYPE_PROPERTY,
  GI_INFO_TYPE_FIELD,
  GI_INFO_TYPE_ARG,
  GI_INFO_TYPE_TYPE,
  GI_INFO_TYPE_UNRESOLVED
}
export enum RepositoryError {
  G_IREPOSITORY_ERROR_TYPELIB_NOT_FOUND,
  G_IREPOSITORY_ERROR_NAMESPACE_MISMATCH,
  G_IREPOSITORY_ERROR_NAMESPACE_VERSION_CONFLICT,
  G_IREPOSITORY_ERROR_LIBRARY_NOT_FOUND
}
export enum ScopeType {
  GI_SCOPE_TYPE_INVALID,
  GI_SCOPE_TYPE_CALL,
  GI_SCOPE_TYPE_ASYNC,
  GI_SCOPE_TYPE_NOTIFIED
}
export enum Transfer {
  GI_TRANSFER_NOTHING,
  GI_TRANSFER_CONTAINER,
  GI_TRANSFER_EVERYTHING
}
export enum TypeTag {
  GI_TYPE_TAG_VOID,
  GI_TYPE_TAG_BOOLEAN,
  GI_TYPE_TAG_INT8,
  GI_TYPE_TAG_UINT8,
  GI_TYPE_TAG_INT16,
  GI_TYPE_TAG_UINT16,
  GI_TYPE_TAG_INT32,
  GI_TYPE_TAG_UINT32,
  GI_TYPE_TAG_INT64,
  GI_TYPE_TAG_UINT64,
  GI_TYPE_TAG_FLOAT,
  GI_TYPE_TAG_DOUBLE,
  GI_TYPE_TAG_GTYPE,
  GI_TYPE_TAG_UTF8,
  GI_TYPE_TAG_FILENAME,
  GI_TYPE_TAG_ARRAY,
  GI_TYPE_TAG_INTERFACE,
  GI_TYPE_TAG_GLIST,
  GI_TYPE_TAG_GSLIST,
  GI_TYPE_TAG_GHASH,
  GI_TYPE_TAG_ERROR,
  GI_TYPE_TAG_UNICHAR
}
export enum nvokeError {
  G_INVOKE_ERROR_FAILED,
  G_INVOKE_ERROR_SYMBOL_NOT_FOUND,
  G_INVOKE_ERROR_ARGUMENT_MISMATCH
}
export enum FieldInfoFlags {
  GI_FIELD_IS_READABLE,
  GI_FIELD_IS_WRITABLE
}
export enum FunctionInfoFlags {
  GI_FUNCTION_IS_METHOD,
  GI_FUNCTION_IS_CONSTRUCTOR,
  GI_FUNCTION_IS_GETTER,
  GI_FUNCTION_IS_SETTER,
  GI_FUNCTION_WRAPS_VFUNC,
  GI_FUNCTION_THROWS
}
export enum RepositoryLoadFlags {
  G_IREPOSITORY_LOAD_FLAG_LAZY
}
export enum VFuncInfoFlags {
  GI_VFUNC_MUST_CHAIN_UP,
  GI_VFUNC_MUST_OVERRIDE,
  GI_VFUNC_MUST_NOT_OVERRIDE,
  GI_VFUNC_THROWS
}
export type ArgInfo = BaseInfo;
export type CallableInfo = BaseInfo;
export type CallbackInfo = BaseInfo;
export type ConstantInfo = BaseInfo;
export type EnumInfo = BaseInfo;
export type FieldInfo = BaseInfo;
export type FunctionInfo = BaseInfo;
export type InterfaceInfo = BaseInfo;
export type ObjectInfo = BaseInfo;
export type PropertyInfo = BaseInfo;
export type RegisteredTypeInfo = BaseInfo;
export type SignalInfo = BaseInfo;
export type StructInfo = BaseInfo;
export type TypeInfo = BaseInfo;
export type UnionInfo = BaseInfo;
export type VFuncInfo = BaseInfo;
export type ValueInfo = BaseInfo;
export type Argument = boolean | number | any | string | object;
export class AttributeIter {
  static data: object;
  static data2: object;
  static data3: object;
  static data4: object;
}
export class BaseInfo {
  static dummy1: number;
  static dummy2: number;
  static dummy3: object;
  static dummy4: object;
  static dummy5: object;
  static dummy6: number;
  static dummy7: number;
  static padding: object[];
  equal(info2: BaseInfo): boolean;
  get_attribute(name: string): string;
  get_container(): BaseInfo;
  get_name(): string;
  get_namespace(): string;
  get_type(): InfoType;
  get_typelib(): Typelib;
  is_deprecated(): boolean;
  iterate_attributes(
    iterator: AttributeIter,
    name: string,
    value: string
  ): boolean;
  ref(): BaseInfo;
  unref(): void;
}
export class RepositoryClass {
  static parent: GObject.ObjectClass;
}
export class RepositoryPrivate {}
export class Typelib {
  free(): void;
  get_namespace(): string;
  symbol(symbol_name: string, symbol: object | null): boolean;
  static new_from_const_memory(memory: number, len: number): Typelib;
  static new_from_mapped_file(mfile: GLib.MappedFile): Typelib;
  static new_from_memory(memory: number, len: number): Typelib;
}
export class UnresolvedInfo {}
export function arg_info_get_closure(info: ArgInfo): number;
export function arg_info_get_destroy(info: ArgInfo): number;
export function arg_info_get_direction(info: ArgInfo): Direction;
export function arg_info_get_ownership_transfer(info: ArgInfo): Transfer;
export function arg_info_get_scope(info: ArgInfo): ScopeType;
export function arg_info_get_type(info: ArgInfo): TypeInfo;
export function arg_info_is_caller_allocates(info: ArgInfo): boolean;
export function arg_info_is_optional(info: ArgInfo): boolean;
export function arg_info_is_return_value(info: ArgInfo): boolean;
export function arg_info_is_skip(info: ArgInfo): boolean;
export function arg_info_load_type(info: ArgInfo, type: TypeInfo): void;
export function arg_info_may_be_null(info: ArgInfo): boolean;
export function callable_info_can_throw_gerror(info: CallableInfo): boolean;
export function callable_info_get_arg(info: CallableInfo, n: number): ArgInfo;
export function callable_info_get_caller_owns(info: CallableInfo): Transfer;
export function callable_info_get_instance_ownership_transfer(
  info: CallableInfo
): Transfer;
export function callable_info_get_n_args(info: CallableInfo): number;
export function callable_info_get_return_attribute(
  info: CallableInfo,
  name: string
): string;
export function callable_info_get_return_type(info: CallableInfo): TypeInfo;
export function callable_info_invoke(
  info: CallableInfo,
  _function: object | null,
  in_args: Argument[],
  n_in_args: number,
  out_args: Argument[],
  n_out_args: number,
  return_value: Argument,
  is_method: boolean,
  throws: boolean
): boolean;
export function callable_info_is_method(info: CallableInfo): boolean;
export function callable_info_iterate_return_attributes(
  info: CallableInfo,
  iterator: AttributeIter,
  name: string,
  value: string
): boolean;
export function callable_info_load_arg(
  info: CallableInfo,
  n: number,
  arg: ArgInfo
): void;
export function callable_info_load_return_type(
  info: CallableInfo,
  type: TypeInfo
): void;
export function callable_info_may_return_null(info: CallableInfo): boolean;
export function callable_info_skip_return(info: CallableInfo): boolean;
export function cclosure_marshal_generic(
  closure: GObject.Closure,
  return_gvalue: GObject.Value,
  n_param_values: number,
  param_values: GObject.Value,
  invocation_hint: object | null,
  marshal_data: object | null
): void;
export function constant_info_free_value(
  info: ConstantInfo,
  value: Argument
): void;
export function constant_info_get_type(info: ConstantInfo): TypeInfo;
export function constant_info_get_value(
  info: ConstantInfo,
  value: Argument
): number;
export function enum_info_get_error_domain(info: EnumInfo): string;
export function enum_info_get_method(info: EnumInfo, n: number): FunctionInfo;
export function enum_info_get_n_methods(info: EnumInfo): number;
export function enum_info_get_n_values(info: EnumInfo): number;
export function enum_info_get_storage_type(info: EnumInfo): TypeTag;
export function enum_info_get_value(info: EnumInfo, n: number): ValueInfo;
export function field_info_get_field(
  field_info: FieldInfo,
  mem: object | null,
  value: Argument
): boolean;
export function field_info_get_flags(info: FieldInfo): FieldInfoFlags;
export function field_info_get_offset(info: FieldInfo): number;
export function field_info_get_size(info: FieldInfo): number;
export function field_info_get_type(info: FieldInfo): TypeInfo;
export function field_info_set_field(
  field_info: FieldInfo,
  mem: object | null,
  value: Argument
): boolean;
export function function_info_get_flags(info: FunctionInfo): FunctionInfoFlags;
export function function_info_get_property(info: FunctionInfo): PropertyInfo;
export function function_info_get_symbol(info: FunctionInfo): string;
export function function_info_get_vfunc(info: FunctionInfo): VFuncInfo;
export function function_info_invoke(
  info: FunctionInfo,
  in_args: Argument[],
  n_in_args: number,
  out_args: Argument[],
  n_out_args: number,
  return_value: Argument
): boolean;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function info_new(
  type: InfoType,
  container: BaseInfo,
  typelib: Typelib,
  offset: number
): BaseInfo;
export function info_type_to_string(type: InfoType): string;
export function interface_info_find_method(
  info: InterfaceInfo,
  name: string
): FunctionInfo;
export function interface_info_find_signal(
  info: InterfaceInfo,
  name: string
): SignalInfo;
export function interface_info_find_vfunc(
  info: InterfaceInfo,
  name: string
): VFuncInfo;
export function interface_info_get_constant(
  info: InterfaceInfo,
  n: number
): ConstantInfo;
export function interface_info_get_iface_struct(
  info: InterfaceInfo
): StructInfo;
export function interface_info_get_method(
  info: InterfaceInfo,
  n: number
): FunctionInfo;
export function interface_info_get_n_constants(info: InterfaceInfo): number;
export function interface_info_get_n_methods(info: InterfaceInfo): number;
export function interface_info_get_n_prerequisites(info: InterfaceInfo): number;
export function interface_info_get_n_properties(info: InterfaceInfo): number;
export function interface_info_get_n_signals(info: InterfaceInfo): number;
export function interface_info_get_n_vfuncs(info: InterfaceInfo): number;
export function interface_info_get_prerequisite(
  info: InterfaceInfo,
  n: number
): BaseInfo;
export function interface_info_get_property(
  info: InterfaceInfo,
  n: number
): PropertyInfo;
export function interface_info_get_signal(
  info: InterfaceInfo,
  n: number
): SignalInfo;
export function interface_info_get_vfunc(
  info: InterfaceInfo,
  n: number
): VFuncInfo;
export function invoke_error_quark(): GLib.Quark;
export function object_info_find_method(
  info: ObjectInfo,
  name: string
): FunctionInfo;
export function object_info_find_method_using_interfaces(
  info: ObjectInfo,
  name: string,
  implementor: ObjectInfo
): FunctionInfo;
export function object_info_find_signal(
  info: ObjectInfo,
  name: string
): SignalInfo;
export function object_info_find_vfunc(
  info: ObjectInfo,
  name: string
): VFuncInfo;
export function object_info_find_vfunc_using_interfaces(
  info: ObjectInfo,
  name: string,
  implementor: ObjectInfo
): VFuncInfo;
export function object_info_get_abstract(info: ObjectInfo): boolean;
export function object_info_get_class_struct(info: ObjectInfo): StructInfo;
export function object_info_get_constant(
  info: ObjectInfo,
  n: number
): ConstantInfo;
export function object_info_get_field(info: ObjectInfo, n: number): FieldInfo;
export function object_info_get_fundamental(info: ObjectInfo): boolean;
export function object_info_get_get_value_function(info: ObjectInfo): string;
export function object_info_get_get_value_function_pointer(
  info: ObjectInfo
): ObjectInfoGetValueFunction;
export function object_info_get_interface(
  info: ObjectInfo,
  n: number
): InterfaceInfo;
export function object_info_get_method(
  info: ObjectInfo,
  n: number
): FunctionInfo;
export function object_info_get_n_constants(info: ObjectInfo): number;
export function object_info_get_n_fields(info: ObjectInfo): number;
export function object_info_get_n_interfaces(info: ObjectInfo): number;
export function object_info_get_n_methods(info: ObjectInfo): number;
export function object_info_get_n_properties(info: ObjectInfo): number;
export function object_info_get_n_signals(info: ObjectInfo): number;
export function object_info_get_n_vfuncs(info: ObjectInfo): number;
export function object_info_get_parent(info: ObjectInfo): ObjectInfo;
export function object_info_get_property(
  info: ObjectInfo,
  n: number
): PropertyInfo;
export function object_info_get_ref_function(info: ObjectInfo): string;
export function object_info_get_ref_function_pointer(
  info: ObjectInfo
): ObjectInfoRefFunction;
export function object_info_get_set_value_function(info: ObjectInfo): string;
export function object_info_get_set_value_function_pointer(
  info: ObjectInfo
): ObjectInfoSetValueFunction;
export function object_info_get_signal(info: ObjectInfo, n: number): SignalInfo;
export function object_info_get_type_init(info: ObjectInfo): string;
export function object_info_get_type_name(info: ObjectInfo): string;
export function object_info_get_unref_function(info: ObjectInfo): string;
export function object_info_get_unref_function_pointer(
  info: ObjectInfo
): ObjectInfoUnrefFunction;
export function object_info_get_vfunc(info: ObjectInfo, n: number): VFuncInfo;
export function property_info_get_flags(info: PropertyInfo): GObject.ParamFlags;
export function property_info_get_ownership_transfer(
  info: PropertyInfo
): Transfer;
export function property_info_get_type(info: PropertyInfo): TypeInfo;
export function registered_type_info_get_g_type(info: RegisteredTypeInfo): any;
export function registered_type_info_get_type_init(
  info: RegisteredTypeInfo
): string;
export function registered_type_info_get_type_name(
  info: RegisteredTypeInfo
): string;
export function signal_info_get_class_closure(info: SignalInfo): VFuncInfo;
export function signal_info_get_flags(info: SignalInfo): GObject.SignalFlags;
export function signal_info_true_stops_emit(info: SignalInfo): boolean;
export function struct_info_find_field(
  info: StructInfo,
  name: string
): FieldInfo;
export function struct_info_find_method(
  info: StructInfo,
  name: string
): FunctionInfo;
export function struct_info_get_alignment(info: StructInfo): number;
export function struct_info_get_field(info: StructInfo, n: number): FieldInfo;
export function struct_info_get_method(
  info: StructInfo,
  n: number
): FunctionInfo;
export function struct_info_get_n_fields(info: StructInfo): number;
export function struct_info_get_n_methods(info: StructInfo): number;
export function struct_info_get_size(info: StructInfo): number;
export function struct_info_is_foreign(info: StructInfo): boolean;
export function struct_info_is_gtype_struct(info: StructInfo): boolean;
export function type_info_get_array_fixed_size(info: TypeInfo): number;
export function type_info_get_array_length(info: TypeInfo): number;
export function type_info_get_array_type(info: TypeInfo): ArrayType;
export function type_info_get_interface(info: TypeInfo): BaseInfo;
export function type_info_get_param_type(info: TypeInfo, n: number): TypeInfo;
export function type_info_get_tag(info: TypeInfo): TypeTag;
export function type_info_is_pointer(info: TypeInfo): boolean;
export function type_info_is_zero_terminated(info: TypeInfo): boolean;
export function type_tag_to_string(type: TypeTag): string;
export function union_info_find_method(
  info: UnionInfo,
  name: string
): FunctionInfo;
export function union_info_get_alignment(info: UnionInfo): number;
export function union_info_get_discriminator(
  info: UnionInfo,
  n: number
): ConstantInfo;
export function union_info_get_discriminator_offset(info: UnionInfo): number;
export function union_info_get_discriminator_type(info: UnionInfo): TypeInfo;
export function union_info_get_field(info: UnionInfo, n: number): FieldInfo;
export function union_info_get_method(info: UnionInfo, n: number): FunctionInfo;
export function union_info_get_n_fields(info: UnionInfo): number;
export function union_info_get_n_methods(info: UnionInfo): number;
export function union_info_get_size(info: UnionInfo): number;
export function union_info_is_discriminated(info: UnionInfo): boolean;
export function value_info_get_value(info: ValueInfo): number;
export function vfunc_info_get_address(
  info: VFuncInfo,
  implementor_gtype: any
): object | null;
export function vfunc_info_get_flags(info: VFuncInfo): VFuncInfoFlags;
export function vfunc_info_get_invoker(info: VFuncInfo): FunctionInfo;
export function vfunc_info_get_offset(info: VFuncInfo): number;
export function vfunc_info_get_signal(info: VFuncInfo): SignalInfo;
export function vfunc_info_invoke(
  info: VFuncInfo,
  implementor: any,
  in_args: Argument[],
  n_in_args: number,
  out_args: Argument[],
  n_out_args: number,
  return_value: Argument
): boolean;
export type ObjectInfoGetValueFunction = (
  value: GObject.Value
) => object | null;
export type ObjectInfoRefFunction = (object: object | null) => object | null;
export type ObjectInfoSetValueFunction = (
  value: GObject.Value,
  object: object | null
) => void;
export type ObjectInfoUnrefFunction = (object: object | null) => void;
