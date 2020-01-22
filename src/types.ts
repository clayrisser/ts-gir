export interface Type {
  '@_name': string;
}

export interface UserConfig {
  ignoreDuplicates: boolean;
  importMap: ImportMap;
  moduleName?: string;
  output?: string;
  dir?: string;
}

export interface ImportMap {
  [key: string]: string;
}

export interface Renamed {
  classes: {
    [key: string]: {
      [key: string]: string;
    };
  };
  functions: {
    [key: string]: string;
  };
}

export interface Callback {
  '@_name': string;
  parameters?: { parameter: Parameter[] };
  'return-value': ReturnValue;
}

export interface ReturnValue {
  type?: Type;
  callback?: Callback;
  array?: {
    type?: Type;
    callback?: Callback;
  };
}

export interface Repository {
  include: Include[];
  namespace: Namespace[];
}

export interface Alias {
  '@_name': string;
}

export interface Union {
  '@_name': string;
  field: Field[];
}

export interface Include {
  '@_name': string;
  '@_version': string;
}

export interface Interface {
  '@_name': string;
  '@_parent': string;
  'virtual-method': Method[];
  field: Field[];
  function: Function[];
  method: Method[];
  property: Property[];
}

export interface Record {
  '@_name': string;
  '@_parent': string;
  'virtual-method': Method[];
  constructor: Constructor[];
  field: Field[];
  function: Function[];
  method: Method[];
  property: Property[];
}

export interface Logger {
  info(message?: string, ...args: any[]): void;
  warn(input: string | Error): void;
}

export interface ClassIdentifiers {
  [key: string]: number;
}

export interface Function {
  '@_name': string;
  parameters?: { parameter: Parameter[] };
  'return-value': ReturnValue;
}

export interface Constant {
  '@_name': string;
  type?: Type;
  callback?: Callback;
  array?: {
    type?: Type;
    callback?: Callback;
  };
}

export interface Namespace {
  '@_name': string;
  '@_version'?: string;
  '@_shared-library'?: string;
  '@_c:identifier-prefixes'?: string;
  '@_c:symbol-prefixes'?: string;
  alias: Alias[];
  bitfield: Bitfield[];
  callback: Callback[];
  class: Class[];
  constant: Constant[];
  enumeration: Enumeration[];
  function: Function[];
  interface: Interface[];
  record: Record[];
  union: Union[];
}

export interface Class {
  '@_name': string;
  '@_parent': string;
  'virtual-method': Method[];
  constructor: Constructor[];
  field: Field[];
  function: Function[];
  method: Method[];
  property: Property[];
}

export interface Constructor {
  '@_name': string;
  parameters?: { parameter: Parameter[] };
}

export interface Property {
  '@_name': string;
  '@_optional': string;
  type?: Type;
  callback?: Callback;
  array?: {
    type?: Type;
    callback?: Callback;
  };
}

export interface Field {
  '@_name': string;
  '@_optional': string;
  type?: Type;
  callback?: Callback;
  array?: {
    type?: Type;
    callback?: Callback;
  };
}

export interface Method {
  '@_name': string;
  parameters?: { parameter: Parameter[] };
  'return-value': ReturnValue;
}

export interface Parameter {
  '@_name': string;
  '@_optional': string;
  type?: Type;
  callback?: Callback;
  array?: {
    type?: Type;
    callback?: Callback;
  };
}

export interface Enumeration {
  '@_name': string;
  member: Member[];
}

export interface Bitfield {
  '@_name': string;
  member: Member[];
}

export interface Member {
  '@_name': string;
  '@_c:identifier': string;
}

export type GirType =
  | Parameter
  | Callback
  | Method
  | Function
  | Constant
  | Field
  | Property
  | ReturnValue
  | string;

export interface GirTypeStrict {
  '@_nullable': string;
  '@_optional': string;
  callback: Callback;
  type: Type;
  array: {
    type: Type;
    callback: Callback;
  };
}
