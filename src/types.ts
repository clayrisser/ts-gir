export interface Repository {
  namespace: Namespace;
}

export interface Namespace {
  '@_name': string;
  class: Class[];
}

export interface Class {
  '@_name': string;
  '@_parent': Class;
  method: Method[];
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
