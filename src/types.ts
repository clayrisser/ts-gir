export interface Repository {
  namespace: Namespace;
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

export interface Namespace {
  '@_name': string;
  class: Class[];
  function: Function[];
}

export interface Class {
  '@_name': string;
  '@_parent': Class;
  method: Method[];
  property: Property[];
}

export interface Property {
  '@_name': string;
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
  type?: string;
  array?: {
    type?: string;
  };
}

export type GirType =
  | {
      [key: string]: any;
    }
  | string;

export interface DeepArray<T> extends Array<T | DeepArray<T>> {}
