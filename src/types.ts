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
  'return-value': string;
}

export type GirType =
  | {
      [key: string]: any;
    }
  | string;
