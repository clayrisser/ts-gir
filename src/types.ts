export interface ModulesTypes {
  [key: string]: Set<string>;
}

export interface Repository {
  include: Include[];
  namespace: Namespace[];
}

export interface Include {
  '@_name': string;
  '@_version': string;
}

export interface Interface {
  '@_name': string;
  '@_parent': string;
  method: Method[];
  property: Property[];
}

export interface Logger {
  info(message?: string, ...args: any[]): void;
  warn(input: string | Error): void;
}

export interface Function {
  '@_name': string;
  parameters?: { parameter: Parameter[] };
  'return-value': {
    type?: string;
    array?: {
      type?: string;
    };
  };
}

export interface Constant {
  '@_name': string;
  type?: string;
  array?: {
    type?: string;
  };
}

export interface Namespace {
  '@_name': string;
  class: Class[];
  constant: Constant[];
  enumeration: Enumeration[];
  function: Function[];
  interface: Interface[];
}

export interface Class {
  '@_name': string;
  '@_parent': string;
  method: Method[];
  property: Property[];
}

export interface Property {
  '@_name': string;
  '@_optional': string;
  type?: string;
  array?: {
    type?: string;
  };
}

export interface Method {
  '@_name': string;
  parameters?: { parameter: Parameter[] };
  'return-value': {
    type?: string;
    array?: {
      type?: string;
    };
  };
}

export interface Parameter {
  '@_name': string;
  '@_optional': string;
  type?: string;
  array?: {
    type?: string;
  };
}

export interface Enumeration {
  '@_name': string;
  member: Member[];
}

export interface Member {
  '@_name': string;
  '@_c:identifier': string;
}

export type GirType =
  | {
      [key: string]: any;
    }
  | string;

export interface DeepArray<T> extends Array<T | DeepArray<T>> {}
