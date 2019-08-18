export interface Repository {
  namespace: Namespace;
}

export interface Namespace {
  alias: any[];
  bitfield: any[];
  callback: any[];
  constant: any[];
  enumeration: any[];
  function: any[];
  record: any[];
  union: any[];
}
