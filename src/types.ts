export interface Repository {
  namespace: Namespace;
}

export interface Namespace {
  [key: string]: any;
}
