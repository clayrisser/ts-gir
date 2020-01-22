import * as GLib from './g-lib';
import * as Gio from './gio';
import * as GObject from './g-object';
export const ADDRESS_ANY_PORT: number;
export const ADDRESS_FAMILY: string;
export const ADDRESS_NAME: string;
export const ADDRESS_PHYSICAL: string;
export const ADDRESS_PORT: string;
export const ADDRESS_PROTOCOL: string;
export const ADDRESS_SOCKADDR: string;
export const AUTH_DOMAIN_ADD_PATH: string;
export const AUTH_DOMAIN_BASIC_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_BASIC_AUTH_DATA: string;
export const AUTH_DOMAIN_DIGEST_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_DIGEST_AUTH_DATA: string;
export const AUTH_DOMAIN_FILTER: string;
export const AUTH_DOMAIN_FILTER_DATA: string;
export const AUTH_DOMAIN_GENERIC_AUTH_CALLBACK: string;
export const AUTH_DOMAIN_GENERIC_AUTH_DATA: string;
export const AUTH_DOMAIN_PROXY: string;
export const AUTH_DOMAIN_REALM: string;
export const AUTH_DOMAIN_REMOVE_PATH: string;
export const AUTH_HOST: string;
export const AUTH_IS_AUTHENTICATED: string;
export const AUTH_IS_FOR_PROXY: string;
export const AUTH_REALM: string;
export const AUTH_SCHEME_NAME: string;
export const CHAR_HTTP_CTL: number;
export const CHAR_HTTP_SEPARATOR: number;
export const CHAR_URI_GEN_DELIMS: number;
export const CHAR_URI_PERCENT_ENCODED: number;
export const CHAR_URI_SUB_DELIMS: number;
export const COOKIE_JAR_ACCEPT_POLICY: string;
export const COOKIE_JAR_DB_FILENAME: string;
export const COOKIE_JAR_READ_ONLY: string;
export const COOKIE_JAR_TEXT_FILENAME: string;
export const COOKIE_MAX_AGE_ONE_DAY: number;
export const COOKIE_MAX_AGE_ONE_HOUR: number;
export const COOKIE_MAX_AGE_ONE_WEEK: number;
export const COOKIE_MAX_AGE_ONE_YEAR: number;
export const FORM_MIME_TYPE_MULTIPART: string;
export const FORM_MIME_TYPE_URLENCODED: string;
export const HSTS_ENFORCER_DB_FILENAME: string;
export const HSTS_POLICY_MAX_AGE_PAST: number;
export const LOGGER_LEVEL: string;
export const LOGGER_MAX_BODY_SIZE: string;
export const MAJOR_VERSION: number;
export const MESSAGE_FIRST_PARTY: string;
export const MESSAGE_FLAGS: string;
export const MESSAGE_HTTP_VERSION: string;
export const MESSAGE_METHOD: string;
export const MESSAGE_PRIORITY: string;
export const MESSAGE_REASON_PHRASE: string;
export const MESSAGE_REQUEST_BODY: string;
export const MESSAGE_REQUEST_BODY_DATA: string;
export const MESSAGE_REQUEST_HEADERS: string;
export const MESSAGE_RESPONSE_BODY: string;
export const MESSAGE_RESPONSE_BODY_DATA: string;
export const MESSAGE_RESPONSE_HEADERS: string;
export const MESSAGE_SERVER_SIDE: string;
export const MESSAGE_STATUS_CODE: string;
export const MESSAGE_TLS_CERTIFICATE: string;
export const MESSAGE_TLS_ERRORS: string;
export const MESSAGE_URI: string;
export const MICRO_VERSION: number;
export const MINOR_VERSION: number;
export const REQUEST_SESSION: string;
export const REQUEST_URI: string;
export const SERVER_ADD_WEBSOCKET_EXTENSION: string;
export const SERVER_ASYNC_CONTEXT: string;
export const SERVER_HTTPS_ALIASES: string;
export const SERVER_HTTP_ALIASES: string;
export const SERVER_INTERFACE: string;
export const SERVER_PORT: string;
export const SERVER_RAW_PATHS: string;
export const SERVER_REMOVE_WEBSOCKET_EXTENSION: string;
export const SERVER_SERVER_HEADER: string;
export const SERVER_SSL_CERT_FILE: string;
export const SERVER_SSL_KEY_FILE: string;
export const SERVER_TLS_CERTIFICATE: string;
export const SESSION_ACCEPT_LANGUAGE: string;
export const SESSION_ACCEPT_LANGUAGE_AUTO: string;
export const SESSION_ADD_FEATURE: string;
export const SESSION_ADD_FEATURE_BY_TYPE: string;
export const SESSION_ASYNC_CONTEXT: string;
export const SESSION_HTTPS_ALIASES: string;
export const SESSION_HTTP_ALIASES: string;
export const SESSION_IDLE_TIMEOUT: string;
export const SESSION_LOCAL_ADDRESS: string;
export const SESSION_MAX_CONNS: string;
export const SESSION_MAX_CONNS_PER_HOST: string;
export const SESSION_PROXY_RESOLVER: string;
export const SESSION_PROXY_URI: string;
export const SESSION_REMOVE_FEATURE_BY_TYPE: string;
export const SESSION_SSL_CA_FILE: string;
export const SESSION_SSL_STRICT: string;
export const SESSION_SSL_USE_SYSTEM_CA_FILE: string;
export const SESSION_TIMEOUT: string;
export const SESSION_TLS_DATABASE: string;
export const SESSION_TLS_INTERACTION: string;
export const SESSION_USER_AGENT: string;
export const SESSION_USE_NTLM: string;
export const SESSION_USE_THREAD_CONTEXT: string;
export const SOCKET_ASYNC_CONTEXT: string;
export const SOCKET_FLAG_NONBLOCKING: string;
export const SOCKET_IS_SERVER: string;
export const SOCKET_LOCAL_ADDRESS: string;
export const SOCKET_REMOTE_ADDRESS: string;
export const SOCKET_SSL_CREDENTIALS: string;
export const SOCKET_SSL_FALLBACK: string;
export const SOCKET_SSL_STRICT: string;
export const SOCKET_TIMEOUT: string;
export const SOCKET_TLS_CERTIFICATE: string;
export const SOCKET_TLS_ERRORS: string;
export const SOCKET_TRUSTED_CERTIFICATE: string;
export const SOCKET_USE_THREAD_CONTEXT: string;
export const VERSION_MIN_REQUIRED: number;
export enum AddressFamily {
  SOUP_ADDRESS_FAMILY_INVALID,
  SOUP_ADDRESS_FAMILY_IPV4,
  SOUP_ADDRESS_FAMILY_IPV6
}
export enum CacheResponse {
  SOUP_CACHE_RESPONSE_FRESH,
  SOUP_CACHE_RESPONSE_NEEDS_VALIDATION,
  SOUP_CACHE_RESPONSE_STALE
}
export enum CacheType {
  SOUP_CACHE_SINGLE_USER,
  SOUP_CACHE_SHARED
}
export enum ConnectionState {
  SOUP_CONNECTION_NEW,
  SOUP_CONNECTION_CONNECTING,
  SOUP_CONNECTION_IDLE,
  SOUP_CONNECTION_IN_USE,
  SOUP_CONNECTION_REMOTE_DISCONNECTED,
  SOUP_CONNECTION_DISCONNECTED
}
export enum CookieJarAcceptPolicy {
  SOUP_COOKIE_JAR_ACCEPT_ALWAYS,
  SOUP_COOKIE_JAR_ACCEPT_NEVER,
  SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY
}
export enum DateFormat {
  SOUP_DATE_HTTP,
  SOUP_DATE_COOKIE,
  SOUP_DATE_RFC2822,
  SOUP_DATE_ISO8601_COMPACT,
  SOUP_DATE_ISO8601_FULL,
  SOUP_DATE_ISO8601,
  SOUP_DATE_ISO8601_XMLRPC
}
export enum Encoding {
  SOUP_ENCODING_UNRECOGNIZED,
  SOUP_ENCODING_NONE,
  SOUP_ENCODING_CONTENT_LENGTH,
  SOUP_ENCODING_EOF,
  SOUP_ENCODING_CHUNKED,
  SOUP_ENCODING_BYTERANGES
}
export enum HTTPVersion {
  SOUP_HTTP_1_0,
  SOUP_HTTP_1_1
}
export enum KnownStatusCode {
  SOUP_KNOWN_STATUS_CODE_NONE,
  SOUP_KNOWN_STATUS_CODE_CANCELLED,
  SOUP_KNOWN_STATUS_CODE_CANT_RESOLVE,
  SOUP_KNOWN_STATUS_CODE_CANT_RESOLVE_PROXY,
  SOUP_KNOWN_STATUS_CODE_CANT_CONNECT,
  SOUP_KNOWN_STATUS_CODE_CANT_CONNECT_PROXY,
  SOUP_KNOWN_STATUS_CODE_SSL_FAILED,
  SOUP_KNOWN_STATUS_CODE_IO_ERROR,
  SOUP_KNOWN_STATUS_CODE_MALFORMED,
  SOUP_KNOWN_STATUS_CODE_TRY_AGAIN,
  SOUP_KNOWN_STATUS_CODE_TOO_MANY_REDIRECTS,
  SOUP_KNOWN_STATUS_CODE_TLS_FAILED,
  SOUP_KNOWN_STATUS_CODE_CONTINUE,
  SOUP_KNOWN_STATUS_CODE_SWITCHING_PROTOCOLS,
  SOUP_KNOWN_STATUS_CODE_PROCESSING,
  SOUP_KNOWN_STATUS_CODE_OK,
  SOUP_KNOWN_STATUS_CODE_CREATED,
  SOUP_KNOWN_STATUS_CODE_ACCEPTED,
  SOUP_KNOWN_STATUS_CODE_NON_AUTHORITATIVE,
  SOUP_KNOWN_STATUS_CODE_NO_CONTENT,
  SOUP_KNOWN_STATUS_CODE_RESET_CONTENT,
  SOUP_KNOWN_STATUS_CODE_PARTIAL_CONTENT,
  SOUP_KNOWN_STATUS_CODE_MULTI_STATUS,
  SOUP_KNOWN_STATUS_CODE_MULTIPLE_CHOICES,
  SOUP_KNOWN_STATUS_CODE_MOVED_PERMANENTLY,
  SOUP_KNOWN_STATUS_CODE_FOUND,
  SOUP_KNOWN_STATUS_CODE_MOVED_TEMPORARILY,
  SOUP_KNOWN_STATUS_CODE_SEE_OTHER,
  SOUP_KNOWN_STATUS_CODE_NOT_MODIFIED,
  SOUP_KNOWN_STATUS_CODE_USE_PROXY,
  SOUP_KNOWN_STATUS_CODE_NOT_APPEARING_IN_THIS_PROTOCOL,
  SOUP_KNOWN_STATUS_CODE_TEMPORARY_REDIRECT,
  SOUP_KNOWN_STATUS_CODE_BAD_REQUEST,
  SOUP_KNOWN_STATUS_CODE_UNAUTHORIZED,
  SOUP_KNOWN_STATUS_CODE_PAYMENT_REQUIRED,
  SOUP_KNOWN_STATUS_CODE_FORBIDDEN,
  SOUP_KNOWN_STATUS_CODE_NOT_FOUND,
  SOUP_KNOWN_STATUS_CODE_METHOD_NOT_ALLOWED,
  SOUP_KNOWN_STATUS_CODE_NOT_ACCEPTABLE,
  SOUP_KNOWN_STATUS_CODE_PROXY_AUTHENTICATION_REQUIRED,
  SOUP_KNOWN_STATUS_CODE_PROXY_UNAUTHORIZED,
  SOUP_KNOWN_STATUS_CODE_REQUEST_TIMEOUT,
  SOUP_KNOWN_STATUS_CODE_CONFLICT,
  SOUP_KNOWN_STATUS_CODE_GONE,
  SOUP_KNOWN_STATUS_CODE_LENGTH_REQUIRED,
  SOUP_KNOWN_STATUS_CODE_PRECONDITION_FAILED,
  SOUP_KNOWN_STATUS_CODE_REQUEST_ENTITY_TOO_LARGE,
  SOUP_KNOWN_STATUS_CODE_REQUEST_URI_TOO_LONG,
  SOUP_KNOWN_STATUS_CODE_UNSUPPORTED_MEDIA_TYPE,
  SOUP_KNOWN_STATUS_CODE_REQUESTED_RANGE_NOT_SATISFIABLE,
  SOUP_KNOWN_STATUS_CODE_INVALID_RANGE,
  SOUP_KNOWN_STATUS_CODE_EXPECTATION_FAILED,
  SOUP_KNOWN_STATUS_CODE_UNPROCESSABLE_ENTITY,
  SOUP_KNOWN_STATUS_CODE_LOCKED,
  SOUP_KNOWN_STATUS_CODE_FAILED_DEPENDENCY,
  SOUP_KNOWN_STATUS_CODE_INTERNAL_SERVER_ERROR,
  SOUP_KNOWN_STATUS_CODE_NOT_IMPLEMENTED,
  SOUP_KNOWN_STATUS_CODE_BAD_GATEWAY,
  SOUP_KNOWN_STATUS_CODE_SERVICE_UNAVAILABLE,
  SOUP_KNOWN_STATUS_CODE_GATEWAY_TIMEOUT,
  SOUP_KNOWN_STATUS_CODE_HTTP_VERSION_NOT_SUPPORTED,
  SOUP_KNOWN_STATUS_CODE_INSUFFICIENT_STORAGE,
  SOUP_KNOWN_STATUS_CODE_NOT_EXTENDED
}
export enum LoggerLogLevel {
  SOUP_LOGGER_LOG_NONE,
  SOUP_LOGGER_LOG_MINIMAL,
  SOUP_LOGGER_LOG_HEADERS,
  SOUP_LOGGER_LOG_BODY
}
export enum MemoryUse {
  SOUP_MEMORY_STATIC,
  SOUP_MEMORY_TAKE,
  SOUP_MEMORY_COPY,
  SOUP_MEMORY_TEMPORARY
}
export enum MessageHeadersType {
  SOUP_MESSAGE_HEADERS_REQUEST,
  SOUP_MESSAGE_HEADERS_RESPONSE,
  SOUP_MESSAGE_HEADERS_MULTIPART
}
export enum MessagePriority {
  SOUP_MESSAGE_PRIORITY_VERY_LOW,
  SOUP_MESSAGE_PRIORITY_LOW,
  SOUP_MESSAGE_PRIORITY_NORMAL,
  SOUP_MESSAGE_PRIORITY_HIGH,
  SOUP_MESSAGE_PRIORITY_VERY_HIGH
}
export enum RequestError {
  SOUP_REQUEST_ERROR_BAD_URI,
  SOUP_REQUEST_ERROR_UNSUPPORTED_URI_SCHEME,
  SOUP_REQUEST_ERROR_PARSING,
  SOUP_REQUEST_ERROR_ENCODING
}
export enum RequesterError {
  SOUP_REQUESTER_ERROR_BAD_URI,
  SOUP_REQUESTER_ERROR_UNSUPPORTED_URI_SCHEME
}
export enum SocketIOStatus {
  SOUP_SOCKET_OK,
  SOUP_SOCKET_WOULD_BLOCK,
  SOUP_SOCKET_EOF,
  SOUP_SOCKET_ERROR
}
export enum Status {
  SOUP_STATUS_NONE,
  SOUP_STATUS_CANCELLED,
  SOUP_STATUS_CANT_RESOLVE,
  SOUP_STATUS_CANT_RESOLVE_PROXY,
  SOUP_STATUS_CANT_CONNECT,
  SOUP_STATUS_CANT_CONNECT_PROXY,
  SOUP_STATUS_SSL_FAILED,
  SOUP_STATUS_IO_ERROR,
  SOUP_STATUS_MALFORMED,
  SOUP_STATUS_TRY_AGAIN,
  SOUP_STATUS_TOO_MANY_REDIRECTS,
  SOUP_STATUS_TLS_FAILED,
  SOUP_STATUS_CONTINUE,
  SOUP_STATUS_SWITCHING_PROTOCOLS,
  SOUP_STATUS_PROCESSING,
  SOUP_STATUS_OK,
  SOUP_STATUS_CREATED,
  SOUP_STATUS_ACCEPTED,
  SOUP_STATUS_NON_AUTHORITATIVE,
  SOUP_STATUS_NO_CONTENT,
  SOUP_STATUS_RESET_CONTENT,
  SOUP_STATUS_PARTIAL_CONTENT,
  SOUP_STATUS_MULTI_STATUS,
  SOUP_STATUS_MULTIPLE_CHOICES,
  SOUP_STATUS_MOVED_PERMANENTLY,
  SOUP_STATUS_FOUND,
  SOUP_STATUS_MOVED_TEMPORARILY,
  SOUP_STATUS_SEE_OTHER,
  SOUP_STATUS_NOT_MODIFIED,
  SOUP_STATUS_USE_PROXY,
  SOUP_STATUS_NOT_APPEARING_IN_THIS_PROTOCOL,
  SOUP_STATUS_TEMPORARY_REDIRECT,
  SOUP_STATUS_BAD_REQUEST,
  SOUP_STATUS_UNAUTHORIZED,
  SOUP_STATUS_PAYMENT_REQUIRED,
  SOUP_STATUS_FORBIDDEN,
  SOUP_STATUS_NOT_FOUND,
  SOUP_STATUS_METHOD_NOT_ALLOWED,
  SOUP_STATUS_NOT_ACCEPTABLE,
  SOUP_STATUS_PROXY_AUTHENTICATION_REQUIRED,
  SOUP_STATUS_PROXY_UNAUTHORIZED,
  SOUP_STATUS_REQUEST_TIMEOUT,
  SOUP_STATUS_CONFLICT,
  SOUP_STATUS_GONE,
  SOUP_STATUS_LENGTH_REQUIRED,
  SOUP_STATUS_PRECONDITION_FAILED,
  SOUP_STATUS_REQUEST_ENTITY_TOO_LARGE,
  SOUP_STATUS_REQUEST_URI_TOO_LONG,
  SOUP_STATUS_UNSUPPORTED_MEDIA_TYPE,
  SOUP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE,
  SOUP_STATUS_INVALID_RANGE,
  SOUP_STATUS_EXPECTATION_FAILED,
  SOUP_STATUS_UNPROCESSABLE_ENTITY,
  SOUP_STATUS_LOCKED,
  SOUP_STATUS_FAILED_DEPENDENCY,
  SOUP_STATUS_INTERNAL_SERVER_ERROR,
  SOUP_STATUS_NOT_IMPLEMENTED,
  SOUP_STATUS_BAD_GATEWAY,
  SOUP_STATUS_SERVICE_UNAVAILABLE,
  SOUP_STATUS_GATEWAY_TIMEOUT,
  SOUP_STATUS_HTTP_VERSION_NOT_SUPPORTED,
  SOUP_STATUS_INSUFFICIENT_STORAGE,
  SOUP_STATUS_NOT_EXTENDED
}
export enum TLDError {
  SOUP_TLD_ERROR_INVALID_HOSTNAME,
  SOUP_TLD_ERROR_IS_IP_ADDRESS,
  SOUP_TLD_ERROR_NOT_ENOUGH_DOMAINS,
  SOUP_TLD_ERROR_NO_BASE_DOMAIN,
  SOUP_TLD_ERROR_NO_PSL_DATA
}
export enum WebsocketCloseCode {
  SOUP_WEBSOCKET_CLOSE_NORMAL,
  SOUP_WEBSOCKET_CLOSE_GOING_AWAY,
  SOUP_WEBSOCKET_CLOSE_PROTOCOL_ERROR,
  SOUP_WEBSOCKET_CLOSE_UNSUPPORTED_DATA,
  SOUP_WEBSOCKET_CLOSE_NO_STATUS,
  SOUP_WEBSOCKET_CLOSE_ABNORMAL,
  SOUP_WEBSOCKET_CLOSE_BAD_DATA,
  SOUP_WEBSOCKET_CLOSE_POLICY_VIOLATION,
  SOUP_WEBSOCKET_CLOSE_TOO_BIG,
  SOUP_WEBSOCKET_CLOSE_NO_EXTENSION,
  SOUP_WEBSOCKET_CLOSE_SERVER_ERROR,
  SOUP_WEBSOCKET_CLOSE_TLS_HANDSHAKE
}
export enum WebsocketConnectionType {
  SOUP_WEBSOCKET_CONNECTION_UNKNOWN,
  SOUP_WEBSOCKET_CONNECTION_CLIENT,
  SOUP_WEBSOCKET_CONNECTION_SERVER
}
export enum WebsocketDataType {
  SOUP_WEBSOCKET_DATA_TEXT,
  SOUP_WEBSOCKET_DATA_BINARY
}
export enum WebsocketError {
  SOUP_WEBSOCKET_ERROR_FAILED,
  SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET,
  SOUP_WEBSOCKET_ERROR_BAD_HANDSHAKE,
  SOUP_WEBSOCKET_ERROR_BAD_ORIGIN
}
export enum WebsocketState {
  SOUP_WEBSOCKET_STATE_OPEN,
  SOUP_WEBSOCKET_STATE_CLOSING,
  SOUP_WEBSOCKET_STATE_CLOSED
}
export enum XMLRPCError {
  SOUP_XMLRPC_ERROR_ARGUMENTS,
  SOUP_XMLRPC_ERROR_RETVAL
}
export enum XMLRPCFault {
  SOUP_XMLRPC_FAULT_PARSE_ERROR_NOT_WELL_FORMED,
  SOUP_XMLRPC_FAULT_PARSE_ERROR_UNSUPPORTED_ENCODING,
  SOUP_XMLRPC_FAULT_PARSE_ERROR_INVALID_CHARACTER_FOR_ENCODING,
  SOUP_XMLRPC_FAULT_SERVER_ERROR_INVALID_XML_RPC,
  SOUP_XMLRPC_FAULT_SERVER_ERROR_REQUESTED_METHOD_NOT_FOUND,
  SOUP_XMLRPC_FAULT_SERVER_ERROR_INVALID_METHOD_PARAMETERS,
  SOUP_XMLRPC_FAULT_SERVER_ERROR_INTERNAL_XML_RPC_ERROR,
  SOUP_XMLRPC_FAULT_APPLICATION_ERROR,
  SOUP_XMLRPC_FAULT_SYSTEM_ERROR,
  SOUP_XMLRPC_FAULT_TRANSPORT_ERROR
}
export enum Cacheability {
  SOUP_CACHE_CACHEABLE,
  SOUP_CACHE_UNCACHEABLE,
  SOUP_CACHE_INVALIDATES,
  SOUP_CACHE_VALIDATES
}
export enum Expectation {
  SOUP_EXPECTATION_UNRECOGNIZED,
  SOUP_EXPECTATION_CONTINUE
}
export enum MessageFlags {
  SOUP_MESSAGE_NO_REDIRECT,
  SOUP_MESSAGE_CAN_REBUILD,
  SOUP_MESSAGE_OVERWRITE_CHUNKS,
  SOUP_MESSAGE_CONTENT_DECODED,
  SOUP_MESSAGE_CERTIFICATE_TRUSTED,
  SOUP_MESSAGE_NEW_CONNECTION,
  SOUP_MESSAGE_IDEMPOTENT,
  SOUP_MESSAGE_IGNORE_CONNECTION_LIMITS,
  SOUP_MESSAGE_DO_NOT_USE_AUTH_CACHE
}
export enum ServerListenOptions {
  SOUP_SERVER_LISTEN_HTTPS,
  SOUP_SERVER_LISTEN_IPV4_ONLY,
  SOUP_SERVER_LISTEN_IPV6_ONLY
}
export interface PasswordManager {
  get_passwords_async(...args: any[]): any;
  get_passwords_sync(...args: any[]): any;
}
export interface ProxyResolver {
  get_proxy_async(...args: any[]): any;
  get_proxy_sync(...args: any[]): any;
}
export interface ProxyURIResolver {
  get_proxy_uri_async(...args: any[]): any;
  get_proxy_uri_sync(...args: any[]): any;
}
export interface SessionFeature {
  add_feature(...args: any[]): any;
  attach(...args: any[]): any;
  detach(...args: any[]): any;
  has_feature(...args: any[]): any;
  remove_feature(...args: any[]): any;
}
export class Address extends GObject.Object {
  constructor(name: string, port: number);
  family: AddressFamily;
  name: string;
  physical: string;
  port: number;
  protocol: string;
  sockaddr: object;
  static parent: GObject.Object;
  equal_by_ip(addr2: Address): boolean;
  equal_by_name(addr2: Address): boolean;
  get_gsockaddr(): Gio.SocketAddress;
  get_name(): string | null;
  get_physical(): string | null;
  get_port(): number;
  get_sockaddr(len: number): object | null;
  hash_by_ip(): number;
  hash_by_name(): number;
  is_resolved(): boolean;
  resolve_async(
    async_context: GLib.MainContext | null,
    cancellable: Gio.Cancellable | null,
    callback: AddressCallback,
    user_data: object | null
  ): void;
  resolve_sync(cancellable: Gio.Cancellable | null): number;
}
export class Auth extends GObject.Object {
  constructor(type: any, msg: Message, auth_header: string);
  host: string;
  'is-authenticated': boolean;
  'is-for-proxy': boolean;
  realm: any;
  'scheme-name': string;
  static parent: GObject.Object;
  static realm: any;
  authenticate(...args: any[]): any;
  can_authenticate(...args: any[]): any;
  free_protection_space(space: GLib.SList): void;
  get_authorization(...args: any[]): any;
  get_host(): string;
  get_info(): string;
  get_protection_space(...args: any[]): any;
  get_realm(): string;
  get_saved_password(user: string): string;
  get_saved_users(): GLib.SList;
  get_scheme_name(): string;
  has_saved_password(username: string, password: string): void;
  is_authenticated(...args: any[]): any;
  is_for_proxy(): boolean;
  is_ready(...args: any[]): any;
  save_password(username: string, password: string): void;
  update(...args: any[]): any;
  authenticate(...args: any[]): any;
  can_authenticate(...args: any[]): any;
  get_authorization(...args: any[]): any;
  get_protection_space(...args: any[]): any;
  is_authenticated(...args: any[]): any;
  is_ready(...args: any[]): any;
  update(...args: any[]): any;
}
export class AuthBasic extends Auth {}
export class AuthDigest extends Auth {}
export class AuthDomain extends GObject.Object {
  'add-path': string;
  filter: AuthDomainFilter;
  'filter-data': object;
  'generic-auth-callback': AuthDomainGenericAuthCallback;
  'generic-auth-data': object;
  proxy: boolean;
  realm: string;
  'remove-path': string;
  static parent: GObject.Object;
  accepts(...args: any[]): any;
  add_path(path: string): void;
  challenge(...args: any[]): any;
  check_password(...args: any[]): any;
  covers(msg: Message): boolean;
  get_realm(): string;
  remove_path(path: string): void;
  set_filter(
    filter: AuthDomainFilter,
    filter_data: object | null,
    dnotify: GLib.DestroyNotify
  ): void;
  set_generic_auth_callback(
    auth_callback: AuthDomainGenericAuthCallback,
    auth_data: object | null,
    dnotify: GLib.DestroyNotify
  ): void;
  try_generic_auth_callback(msg: Message, username: string): boolean;
  accepts(...args: any[]): any;
  challenge(...args: any[]): any;
  check_password(...args: any[]): any;
}
export class AuthDomainBasic extends AuthDomain {
  constructor(optname1: string, ...args: any[]);
  'auth-callback': AuthDomainBasicAuthCallback;
  'auth-data': object;
  static parent: any;
  set_auth_callback(
    callback: AuthDomainBasicAuthCallback,
    user_data: object | null,
    dnotify: GLib.DestroyNotify
  ): void;
}
export class AuthDomainDigest extends AuthDomain {
  constructor(optname1: string, ...args: any[]);
  'auth-callback': AuthDomainDigestAuthCallback;
  'auth-data': object;
  static parent: any;
  set_auth_callback(
    callback: AuthDomainDigestAuthCallback,
    user_data: object | null,
    dnotify: GLib.DestroyNotify
  ): void;
  static encode_password(
    username: string,
    realm: string,
    password: string
  ): string;
}
export class AuthManager extends GObject.Object {
  static parent: GObject.Object;
  static priv: AuthManagerPrivate;
  clear_cached_credentials(): void;
  use_auth(uri: URI, auth: Auth): void;
  authenticate(msg: Message, auth: Auth, retrying: boolean): void;
}
export class AuthNTLM extends Auth {}
export class AuthNegotiate extends Auth {
  static supported(): boolean;
}
export class Cache extends GObject.Object {
  constructor(cache_dir: string | null, cache_type: CacheType);
  'cache-dir': string;
  'cache-type': CacheType;
  static parent_instance: GObject.Object;
  static priv: CachePrivate;
  clear(): void;
  dump(): void;
  flush(): void;
  get_max_size(): number;
  load(): void;
  set_max_size(max_size: number): void;
  get_cacheability(msg: Message): Cacheability;
}
export class ContentDecoder extends GObject.Object {
  static parent: GObject.Object;
  static priv: ContentDecoderPrivate;
}
export class ContentSniffer extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: ContentSnifferPrivate;
  get_buffer_size(...args: any[]): any;
  sniff(...args: any[]): any;
  get_buffer_size(...args: any[]): any;
  sniff(...args: any[]): any;
}
export class CookieJar extends GObject.Object {
  constructor();
  'accept-policy': CookieJarAcceptPolicy;
  'read-only': boolean;
  static parent: GObject.Object;
  add_cookie(cookie: Cookie): void;
  add_cookie_full(
    cookie: Cookie,
    uri: URI | null,
    first_party: URI | null
  ): void;
  add_cookie_with_first_party(first_party: URI, cookie: Cookie): void;
  all_cookies(): GLib.SList;
  delete_cookie(cookie: Cookie): void;
  get_accept_policy(): CookieJarAcceptPolicy;
  get_cookie_list(uri: URI, for_http: boolean): GLib.SList;
  get_cookies(uri: URI, for_http: boolean): string | null;
  is_persistent(...args: any[]): any;
  save(...args: any[]): any;
  set_accept_policy(policy: CookieJarAcceptPolicy): void;
  set_cookie(uri: URI, cookie: string): void;
  set_cookie_with_first_party(uri: URI, first_party: URI, cookie: string): void;
  changed(old_cookie: Cookie, new_cookie: Cookie): void;
  is_persistent(...args: any[]): any;
  save(...args: any[]): any;
}
export class CookieJarDB extends CookieJar {
  constructor(filename: string, read_only: boolean);
  filename: string;
  static parent: any;
}
export class CookieJarText extends CookieJar {
  constructor(filename: string, read_only: boolean);
  filename: string;
  static parent: any;
}
export class HSTSEnforcer extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: HSTSEnforcerPrivate;
  get_domains(session_policies: boolean): GLib.List;
  get_policies(session_policies: boolean): GLib.List;
  has_valid_policy(...args: any[]): any;
  is_persistent(...args: any[]): any;
  set_policy(policy: HSTSPolicy): void;
  set_session_policy(domain: string, include_subdomains: boolean): void;
  changed(old_policy: HSTSPolicy, new_policy: HSTSPolicy): void;
  has_valid_policy(...args: any[]): any;
  hsts_enforced(message: Message): void;
  is_persistent(...args: any[]): any;
}
export class HSTSEnforcerDB extends HSTSEnforcer {
  constructor(filename: string);
  filename: string;
  static parent: any;
  static priv: any;
}
export class Logger extends GObject.Object {
  constructor(level: LoggerLogLevel, max_body_size: number);
  level: LoggerLogLevel;
  'max-body-size': number;
  static parent: GObject.Object;
  attach(session: Session): void;
  detach(session: Session): void;
  set_printer(
    printer: LoggerPrinter,
    printer_data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
  set_request_filter(
    request_filter: LoggerFilter,
    filter_data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
  set_response_filter(
    response_filter: LoggerFilter,
    filter_data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
}
export class Message extends GObject.Object {
  constructor(method: string, uri_string: string);
  'first-party': URI;
  flags: MessageFlags;
  'http-version': HTTPVersion;
  method: any;
  priority: MessagePriority;
  'reason-phrase': string;
  'request-body': MessageBody;
  'request-body-data': GLib.Bytes;
  'request-headers': MessageHeaders;
  'response-body': MessageBody;
  'response-body-data': GLib.Bytes;
  'response-headers': MessageHeaders;
  'server-side': boolean;
  'status-code': number;
  'tls-certificate': Gio.TlsCertificate;
  'tls-errors': Gio.TlsCertificateFlags;
  uri: URI;
  static parent: GObject.Object;
  static method: any;
  static status_code: number;
  static reason_phrase: string;
  static request_body: MessageBody;
  static request_headers: MessageHeaders;
  static response_body: MessageBody;
  static response_headers: MessageHeaders;
  add_header_handler(
    signal: string,
    header: string,
    callback: GObject.Callback,
    user_data: object | null
  ): number;
  add_status_code_handler(
    signal: string,
    status_code: number,
    callback: GObject.Callback,
    user_data: object | null
  ): number;
  content_sniffed(content_type: string, params: GLib.HashTable): void;
  disable_feature(feature_type: any): void;
  finished(...args: any[]): any;
  get_address(): Address;
  get_first_party(): URI;
  get_flags(): MessageFlags;
  get_http_version(): HTTPVersion;
  get_https_status(
    certificate: Gio.TlsCertificate,
    errors: Gio.TlsCertificateFlags
  ): boolean;
  get_priority(): MessagePriority;
  get_soup_request(): Request;
  get_uri(): URI;
  got_body(...args: any[]): any;
  got_chunk(...args: any[]): any;
  got_headers(...args: any[]): any;
  got_informational(...args: any[]): any;
  is_keepalive(): boolean;
  restarted(...args: any[]): any;
  set_chunk_allocator(
    allocator: ChunkAllocator,
    user_data: object | null,
    destroy_notify: GLib.DestroyNotify
  ): void;
  set_first_party(first_party: URI): void;
  set_flags(flags: MessageFlags): void;
  set_http_version(version: HTTPVersion): void;
  set_priority(priority: MessagePriority): void;
  set_redirect(status_code: number, redirect_uri: string): void;
  set_request(
    content_type: string | null,
    req_use: MemoryUse,
    req_body: number[] | null,
    req_length: number
  ): void;
  set_response(
    content_type: string | null,
    resp_use: MemoryUse,
    resp_body: number[] | null,
    resp_length: number
  ): void;
  set_status(status_code: number): void;
  set_status_full(status_code: number, reason_phrase: string): void;
  set_uri(uri: URI): void;
  starting(...args: any[]): any;
  wrote_body(...args: any[]): any;
  wrote_body_data(chunk: Buffer): void;
  wrote_chunk(...args: any[]): any;
  wrote_headers(...args: any[]): any;
  wrote_informational(...args: any[]): any;
  finished(...args: any[]): any;
  got_body(...args: any[]): any;
  got_chunk(...args: any[]): any;
  got_headers(...args: any[]): any;
  got_informational(...args: any[]): any;
  restarted(...args: any[]): any;
  starting(...args: any[]): any;
  wrote_body(...args: any[]): any;
  wrote_chunk(...args: any[]): any;
  wrote_headers(...args: any[]): any;
  wrote_informational(...args: any[]): any;
}
export class MultipartInputStream extends Gio.FilterInputStream {
  constructor(msg: Message, base_stream: Gio.InputStream);
  message: Message;
  static parent_instance: Gio.FilterInputStream;
  static priv: MultipartInputStreamPrivate;
  get_headers(): MessageHeaders | null;
  next_part(cancellable: Gio.Cancellable | null): Gio.InputStream | null;
  next_part_async(
    io_priority: number,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    data: object | null
  ): void;
  next_part_finish(result: Gio.AsyncResult): Gio.InputStream | null;
}
export class ProxyResolverDefault extends GObject.Object {
  'gproxy-resolver': Gio.ProxyResolver;
  static parent: GObject.Object;
}
export class Request extends GObject.Object {
  session: Session;
  uri: URI;
  static parent: GObject.Object;
  static priv: RequestPrivate;
  get_content_length(...args: any[]): any;
  get_content_type(...args: any[]): any;
  get_session(): Session;
  get_uri(): URI;
  send(...args: any[]): any;
  send_async(...args: any[]): any;
  send_finish(...args: any[]): any;
  check_uri(uri: URI): boolean;
  get_content_length(...args: any[]): any;
  get_content_type(...args: any[]): any;
  send(...args: any[]): any;
  send_async(...args: any[]): any;
  send_finish(...args: any[]): any;
}
export class RequestData extends Request {
  static parent: any;
  static priv: any;
}
export class RequestFile extends Request {
  static parent: any;
  static priv: any;
  get_file(): Gio.File;
}
export class RequestHTTP extends Request {
  static parent: any;
  static priv: any;
  get_message(): Message;
}
export class Requester extends GObject.Object {
  constructor();
  static parent: GObject.Object;
  static priv: RequesterPrivate;
  request(uri_string: string): Request;
  request_uri(uri: URI): Request;
}
export class Server extends GObject.Object {
  constructor(optname1: string, ...args: any[]);
  'add-websocket-extension': any;
  'async-context': object;
  'http-aliases': string[];
  'https-aliases': string[];
  g_interface: Address;
  port: number;
  'raw-paths': boolean;
  'remove-websocket-extension': any;
  'server-header': string;
  'ssl-cert-file': string;
  'ssl-key-file': string;
  'tls-certificate': Gio.TlsCertificate;
  static parent: GObject.Object;
  accept_iostream(
    stream: Gio.IOStream,
    local_addr: Gio.SocketAddress | null,
    remote_addr: Gio.SocketAddress | null
  ): boolean;
  add_auth_domain(auth_domain: AuthDomain): void;
  add_early_handler(
    path: string | null,
    callback: ServerCallback,
    user_data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
  add_handler(
    path: string | null,
    callback: ServerCallback,
    user_data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
  add_websocket_extension(extension_type: any): void;
  add_websocket_handler(
    path: string | null,
    origin: string | null,
    protocols: string[] | null,
    callback: ServerWebsocketCallback,
    user_data: object | null,
    destroy: GLib.DestroyNotify
  ): void;
  disconnect(): void;
  get_async_context(): GLib.MainContext | null;
  get_listener(): Socket;
  get_listeners(): GLib.SList;
  get_port(): number;
  get_uris(): GLib.SList;
  is_https(): boolean;
  listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean;
  listen_all(port: number, options: ServerListenOptions): boolean;
  listen_fd(fd: number, options: ServerListenOptions): boolean;
  listen_local(port: number, options: ServerListenOptions): boolean;
  listen_socket(socket: Gio.Socket, options: ServerListenOptions): boolean;
  pause_message(msg: Message): void;
  quit(): void;
  remove_auth_domain(auth_domain: AuthDomain): void;
  remove_handler(path: string): void;
  remove_websocket_extension(extension_type: any): void;
  run(): void;
  run_async(): void;
  set_ssl_cert_file(ssl_cert_file: string, ssl_key_file: string): boolean;
  unpause_message(msg: Message): void;
  request_aborted(msg: Message, client: ClientContext): void;
  request_finished(msg: Message, client: ClientContext): void;
  request_read(msg: Message, client: ClientContext): void;
  request_started(msg: Message, client: ClientContext): void;
}
export class Session extends GObject.Object {
  constructor();
  'accept-language': string;
  'accept-language-auto': boolean;
  'add-feature': any;
  'add-feature-by-type': any;
  'async-context': object;
  'http-aliases': string[];
  'https-aliases': string[];
  'idle-timeout': number;
  'local-address': Address;
  'max-conns': number;
  'max-conns-per-host': number;
  'proxy-resolver': Gio.ProxyResolver;
  'proxy-uri': URI;
  'remove-feature-by-type': any;
  'ssl-ca-file': string;
  'ssl-strict': boolean;
  'ssl-use-system-ca-file': boolean;
  timeout: number;
  'tls-database': Gio.TlsDatabase;
  'tls-interaction': Gio.TlsInteraction;
  'use-ntlm': boolean;
  'use-thread-context': boolean;
  'user-agent': string;
  static parent: GObject.Object;
  abort(): void;
  add_feature(feature: any): void;
  add_feature_by_type(feature_type: any): void;
  cancel_message(...args: any[]): any;
  connect_async(
    uri: URI,
    cancellable: Gio.Cancellable | null,
    progress_callback: SessionConnectProgressCallback | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  connect_finish(result: Gio.AsyncResult): Gio.IOStream;
  get_async_context(): GLib.MainContext | null;
  get_feature(feature_type: any): any | null;
  get_feature_for_message(feature_type: any, msg: Message): any | null;
  get_features(feature_type: any): GLib.SList;
  has_feature(feature_type: any): boolean;
  pause_message(msg: Message): void;
  prefetch_dns(
    hostname: string,
    cancellable: Gio.Cancellable | null,
    callback: AddressCallback | null,
    user_data: object | null
  ): void;
  prepare_for_uri(uri: URI): void;
  queue_message(...args: any[]): any;
  redirect_message(msg: Message): boolean;
  remove_feature(feature: any): void;
  remove_feature_by_type(feature_type: any): void;
  request(uri_string: string): Request;
  request_http(method: string, uri_string: string): RequestHTTP;
  request_http_uri(method: string, uri: URI): RequestHTTP;
  request_uri(uri: URI): Request;
  requeue_message(...args: any[]): any;
  send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream;
  send_async(
    msg: Message,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  send_finish(result: Gio.AsyncResult): Gio.InputStream;
  send_message(...args: any[]): any;
  steal_connection(msg: Message): Gio.IOStream;
  unpause_message(msg: Message): void;
  websocket_connect_async(
    msg: Message,
    origin: string | null,
    protocols: string[] | null,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ): void;
  websocket_connect_finish(result: Gio.AsyncResult): WebsocketConnection;
  would_redirect(msg: Message): boolean;
  auth_required(msg: Message, auth: Auth, retrying: boolean): void;
  authenticate(msg: Message, auth: Auth, retrying: boolean): void;
  cancel_message(...args: any[]): any;
  flush_queue(): void;
  kick(): void;
  queue_message(...args: any[]): any;
  request_started(msg: Message, socket: Socket): void;
  requeue_message(...args: any[]): any;
  send_message(...args: any[]): any;
}
export class SessionAsync extends Session {
  constructor();
  static parent: any;
}
export class SessionSync extends Session {
  constructor();
  static parent: any;
}
export class Socket extends GObject.Object {
  constructor(optname1: string, ...args: any[]);
  'async-context': object;
  fd: number;
  gsocket: Gio.Socket;
  iostream: Gio.IOStream;
  'ipv6-only': boolean;
  'is-server': boolean;
  'local-address': Address;
  'non-blocking': boolean;
  'remote-address': Address;
  'socket-properties': any;
  'ssl-creds': object;
  'ssl-fallback': boolean;
  'ssl-strict': boolean;
  timeout: number;
  'tls-certificate': Gio.TlsCertificate;
  'tls-errors': Gio.TlsCertificateFlags;
  'trusted-certificate': boolean;
  'use-thread-context': boolean;
  static parent: GObject.Object;
  connect_async(
    cancellable: Gio.Cancellable | null,
    callback: SocketCallback,
    user_data: object | null
  ): void;
  connect_sync(cancellable: Gio.Cancellable | null): number;
  disconnect(): void;
  get_fd(): number;
  get_local_address(): Address;
  get_remote_address(): Address;
  is_connected(): boolean;
  is_ssl(): boolean;
  listen(): boolean;
  read(
    buffer: number[],
    len: number,
    nread: number,
    cancellable: Gio.Cancellable | null
  ): SocketIOStatus;
  read_until(
    buffer: number[],
    len: number,
    boundary: object | null,
    boundary_len: number,
    nread: number,
    got_boundary: boolean,
    cancellable: Gio.Cancellable | null
  ): SocketIOStatus;
  start_proxy_ssl(
    ssl_host: string,
    cancellable: Gio.Cancellable | null
  ): boolean;
  start_ssl(cancellable: Gio.Cancellable | null): boolean;
  write(
    buffer: number[],
    len: number,
    nwrote: number,
    cancellable: Gio.Cancellable | null
  ): SocketIOStatus;
  disconnected(): void;
  new_connection(new_sock: Socket): void;
  readable(): void;
  writable(): void;
}
export class WebsocketConnection extends GObject.Object {
  constructor(
    stream: Gio.IOStream,
    uri: URI,
    type: WebsocketConnectionType,
    origin: string | null,
    protocol: string | null
  );
  'connection-type': WebsocketConnectionType;
  extensions: object;
  'io-stream': Gio.IOStream;
  'keepalive-interval': number;
  'max-incoming-payload-size': number;
  origin: string;
  protocol: string;
  state: WebsocketState;
  uri: URI;
  static parent: GObject.Object;
  static pv: WebsocketConnectionPrivate;
  close(code: number, data: string | null): void;
  get_close_code(): number;
  get_close_data(): string;
  get_connection_type(): WebsocketConnectionType;
  get_extensions(): GLib.List;
  get_io_stream(): Gio.IOStream;
  get_keepalive_interval(): number;
  get_max_incoming_payload_size(): number;
  get_origin(): string | null;
  get_protocol(): string | null;
  get_state(): WebsocketState;
  get_uri(): URI;
  send_binary(data: number[] | null, length: number): void;
  send_message(type: WebsocketDataType, message: GLib.Bytes): void;
  send_text(text: string): void;
  set_keepalive_interval(interval: number): void;
  set_max_incoming_payload_size(max_incoming_payload_size: number): void;
  closed(): void;
  closing(): void;
  error(error: GLib.Error): void;
  message(type: WebsocketDataType, message: GLib.Bytes): void;
  pong(message: GLib.Bytes): void;
}
export class WebsocketExtension extends GObject.Object {
  static parent: GObject.Object;
  configure(...args: any[]): any;
  get_request_params(...args: any[]): any;
  get_response_params(...args: any[]): any;
  process_incoming_message(...args: any[]): any;
  process_outgoing_message(...args: any[]): any;
  configure(...args: any[]): any;
  get_request_params(...args: any[]): any;
  get_response_params(...args: any[]): any;
  process_incoming_message(...args: any[]): any;
  process_outgoing_message(...args: any[]): any;
}
export class WebsocketExtensionDeflate extends WebsocketExtension {
  static parent: any;
}
export class WebsocketExtensionManager extends GObject.Object {
  static parent: GObject.Object;
}
export class AddressClass {
  static parent_class: GObject.ObjectClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class AuthClass {
  static parent_class: GObject.ObjectClass;
  static scheme_name: string;
  static strength: number;
  static update: (
    auth: Auth,
    msg: Message,
    auth_header: GLib.HashTable
  ) => boolean;
  static get_protection_space: (auth: Auth, source_uri: URI) => GLib.SList;
  static authenticate: (auth: Auth, username: string, password: string) => void;
  static is_authenticated: (auth: Auth) => boolean;
  static get_authorization: (auth: Auth, msg: Message) => string;
  static is_ready: (auth: Auth, msg: Message) => boolean;
  static can_authenticate: (auth: Auth) => boolean;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class AuthDomainBasicClass {
  static parent_class: AuthDomainClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class AuthDomainClass {
  static parent_class: GObject.ObjectClass;
  static accepts: (domain: AuthDomain, msg: Message, header: string) => string;
  static challenge: (domain: AuthDomain, msg: Message) => string;
  static check_password: (
    domain: AuthDomain,
    msg: Message,
    username: string,
    password: string
  ) => boolean;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class AuthDomainDigestClass {
  static parent_class: AuthDomainClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class AuthManagerClass {
  static parent_class: GObject.ObjectClass;
  static authenticate: (
    manager: AuthManager,
    msg: Message,
    auth: Auth,
    retrying: boolean
  ) => void;
}
export class AuthManagerPrivate {}
export class Buffer {
  constructor(use: MemoryUse, data: number[], length: number);
  static data: object;
  static length: number;
  copy(): Buffer;
  free(): void;
  get_as_bytes(): GLib.Bytes;
  get_data(data: number[], length: number): void;
  get_owner(): object | null;
  new_subbuffer(offset: number, length: number): Buffer;
}
export class CacheClass {
  static parent_class: GObject.ObjectClass;
  static get_cacheability: (cache: Cache, msg: Message) => Cacheability;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
}
export class CachePrivate {}
export class ClientContext {
  get_address(): Address | null;
  get_auth_domain(): AuthDomain | null;
  get_auth_user(): string | null;
  get_gsocket(): Gio.Socket | null;
  get_host(): string | null;
  get_local_address(): Gio.SocketAddress | null;
  get_remote_address(): Gio.SocketAddress | null;
  get_socket(): Socket;
  steal_connection(): Gio.IOStream;
}
export class Connection {}
export class ContentDecoderClass {
  static parent_class: GObject.ObjectClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
  static _libsoup_reserved5: () => void;
}
export class ContentDecoderPrivate {}
export class ContentSnifferClass {
  static parent_class: GObject.ObjectClass;
  static sniff: (
    sniffer: ContentSniffer,
    msg: Message,
    buffer: Buffer,
    params: GLib.HashTable
  ) => string;
  static get_buffer_size: (sniffer: ContentSniffer) => number;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
  static _libsoup_reserved5: () => void;
}
export class ContentSnifferPrivate {}
export class Cookie {
  constructor(
    name: string,
    value: string,
    domain: string,
    path: string,
    max_age: number
  );
  static name: string;
  static value: string;
  static domain: string;
  static path: string;
  static expires: Date;
  static secure: boolean;
  static http_only: boolean;
  applies_to_uri(uri: URI): boolean;
  copy(): Cookie;
  domain_matches(host: string): boolean;
  equal(cookie2: Cookie): boolean;
  free(): void;
  get_domain(): string;
  get_expires(): Date | null;
  get_http_only(): boolean;
  get_name(): string;
  get_path(): string;
  get_secure(): boolean;
  get_value(): string;
  set_domain(domain: string): void;
  set_expires(expires: Date): void;
  set_http_only(http_only: boolean): void;
  set_max_age(max_age: number): void;
  set_name(name: string): void;
  set_path(path: string): void;
  set_secure(secure: boolean): void;
  set_value(value: string): void;
  to_cookie_header(): string;
  to_set_cookie_header(): string;
  static parse(header: string, origin: URI): Cookie | null;
}
export class CookieJarClass {
  static parent_class: GObject.ObjectClass;
  static save: (jar: CookieJar) => void;
  static is_persistent: (jar: CookieJar) => boolean;
  static changed: (
    jar: CookieJar,
    old_cookie: Cookie,
    new_cookie: Cookie
  ) => void;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
}
export class CookieJarDBClass {
  static parent_class: CookieJarClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class CookieJarTextClass {
  static parent_class: CookieJarClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class Date {
  constructor(
    year: number,
    month: number,
    day: number,
    hour: number,
    minute: number,
    second: number
  );
  static year: number;
  static month: number;
  static day: number;
  static hour: number;
  static minute: number;
  static second: number;
  static utc: boolean;
  static offset: number;
  copy(): Date;
  free(): void;
  get_day(): number;
  get_hour(): number;
  get_minute(): number;
  get_month(): number;
  get_offset(): number;
  get_second(): number;
  get_utc(): number;
  get_year(): number;
  is_past(): boolean;
  to_string(format: DateFormat): string;
  to_time_t(): number;
  to_timeval(time: GLib.TimeVal): void;
}
export class HSTSEnforcerClass {
  static parent_class: GObject.ObjectClass;
  static is_persistent: (hsts_enforcer: HSTSEnforcer) => boolean;
  static has_valid_policy: (
    hsts_enforcer: HSTSEnforcer,
    domain: string
  ) => boolean;
  static changed: (
    enforcer: HSTSEnforcer,
    old_policy: HSTSPolicy,
    new_policy: HSTSPolicy
  ) => void;
  static hsts_enforced: (enforcer: HSTSEnforcer, message: Message) => void;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class HSTSEnforcerDBClass {
  static parent_class: HSTSEnforcerClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class HSTSEnforcerDBPrivate {}
export class HSTSEnforcerPrivate {}
export class HSTSPolicy {
  constructor(domain: string, max_age: number, include_subdomains: boolean);
  static domain: string;
  static max_age: number;
  static expires: Date;
  static include_subdomains: boolean;
  copy(): HSTSPolicy;
  equal(policy2: HSTSPolicy): boolean;
  free(): void;
  get_domain(): string;
  includes_subdomains(): boolean;
  is_expired(): boolean;
  is_session_policy(): boolean;
}
export class LoggerClass {
  static parent_class: GObject.ObjectClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class MessageBody {
  constructor();
  static data: string;
  static length: number;
  append(use: MemoryUse, data: number[], length: number): void;
  append_buffer(buffer: Buffer): void;
  append_take(data: number[], length: number): void;
  complete(): void;
  flatten(): Buffer;
  free(): void;
  get_accumulate(): boolean;
  get_chunk(offset: number): Buffer | null;
  got_chunk(chunk: Buffer): void;
  set_accumulate(accumulate: boolean): void;
  truncate(): void;
  wrote_chunk(chunk: Buffer): void;
}
export class MessageClass {
  static parent_class: GObject.ObjectClass;
  static wrote_informational: (msg: Message) => void;
  static wrote_headers: (msg: Message) => void;
  static wrote_chunk: (msg: Message) => void;
  static wrote_body: (msg: Message) => void;
  static got_informational: (msg: Message) => void;
  static got_headers: (msg: Message) => void;
  static got_chunk: (msg: Message, chunk: Buffer) => void;
  static got_body: (msg: Message) => void;
  static restarted: (msg: Message) => void;
  static finished: (msg: Message) => void;
  static starting: (msg: Message) => void;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
}
export class MessageHeaders {
  constructor(type: MessageHeadersType);
  append(name: string, value: string): void;
  clean_connection_headers(): void;
  clear(): void;
  foreach(func: MessageHeadersForeachFunc, user_data: object | null): void;
  free(): void;
  free_ranges(ranges: Range): void;
  get(name: string): string | null;
  get_content_disposition(disposition: string, params: GLib.HashTable): boolean;
  get_content_length(): number;
  get_content_range(start: number, end: number, total_length?: number): boolean;
  get_content_type(params?: GLib.HashTable): string | null;
  get_encoding(): Encoding;
  get_expectations(): Expectation;
  get_headers_type(): MessageHeadersType;
  get_list(name: string): string | null;
  get_one(name: string): string | null;
  get_ranges(total_length: number, ranges: Range[], length: number): boolean;
  header_contains(name: string, token: string): boolean;
  header_equals(name: string, value: string): boolean;
  remove(name: string): void;
  replace(name: string, value: string): void;
  set_content_disposition(
    disposition: string,
    params: GLib.HashTable | null
  ): void;
  set_content_length(content_length: number): void;
  set_content_range(start: number, end: number, total_length: number): void;
  set_content_type(content_type: string, params: GLib.HashTable | null): void;
  set_encoding(encoding: Encoding): void;
  set_expectations(expectations: Expectation): void;
  set_range(start: number, end: number): void;
  set_ranges(ranges: Range, length: number): void;
}
export class MessageHeadersIter {
  static dummy: object[];
  next(name: string, value: string): boolean;
  static init(iter: MessageHeadersIter, hdrs: MessageHeaders): void;
}
export class MessageQueue {}
export class MessageQueueItem {}
export class Multipart {
  constructor(mime_type: string);
  append_form_file(
    control_name: string,
    filename: string,
    content_type: string,
    body: Buffer
  ): void;
  append_form_string(control_name: string, data: string): void;
  append_part(headers: MessageHeaders, body: Buffer): void;
  free(): void;
  get_length(): number;
  get_part(part: number, headers: MessageHeaders, body: Buffer): boolean;
  to_message(dest_headers: MessageHeaders, dest_body: MessageBody): void;
}
export class MultipartInputStreamClass {
  static parent_class: Gio.FilterInputStreamClass;
}
export class MultipartInputStreamPrivate {}
export class PasswordManagerInterface {
  static base: GObject.TypeInterface;
  static get_passwords_async: (
    password_manager: any,
    msg: Message,
    auth: Auth,
    retrying: boolean,
    async_context: GLib.MainContext,
    cancellable: Gio.Cancellable | null,
    callback: PasswordManagerCallback,
    user_data: object | null
  ) => void;
  static get_passwords_sync: (
    password_manager: any,
    msg: Message,
    auth: Auth,
    cancellable: Gio.Cancellable | null
  ) => void;
}
export class ProxyResolverDefaultClass {
  static parent_class: GObject.ObjectClass;
}
export class ProxyResolverInterface {
  static base: GObject.TypeInterface;
  static get_proxy_async: (
    proxy_resolver: any,
    msg: Message,
    async_context: GLib.MainContext,
    cancellable: Gio.Cancellable | null,
    callback: ProxyResolverCallback,
    user_data: object | null
  ) => void;
  static get_proxy_sync: (
    proxy_resolver: any,
    msg: Message,
    cancellable: Gio.Cancellable | null,
    addr: Address
  ) => number;
}
export class ProxyURIResolverInterface {
  static base: GObject.TypeInterface;
  static get_proxy_uri_async: (
    proxy_uri_resolver: any,
    uri: URI,
    async_context: GLib.MainContext | null,
    cancellable: Gio.Cancellable | null,
    callback: ProxyURIResolverCallback,
    user_data: object | null
  ) => void;
  static get_proxy_uri_sync: (
    proxy_uri_resolver: any,
    uri: URI,
    cancellable: Gio.Cancellable | null,
    proxy_uri: URI
  ) => number;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class Range {
  static start: number;
  static end: number;
}
export class RequestClass {
  static parent: GObject.ObjectClass;
  static schemes: string;
  static check_uri: (req_base: Request, uri: URI) => boolean;
  static send: (
    request: Request,
    cancellable: Gio.Cancellable | null
  ) => Gio.InputStream;
  static send_async: (
    request: Request,
    cancellable: Gio.Cancellable | null,
    callback: Gio.AsyncReadyCallback | null,
    user_data: object | null
  ) => void;
  static send_finish: (
    request: Request,
    result: Gio.AsyncResult
  ) => Gio.InputStream;
  static get_content_length: (request: Request) => number;
  static get_content_type: (request: Request) => string | null;
}
export class RequestDataClass {
  static parent: RequestClass;
}
export class RequestDataPrivate {}
export class RequestFileClass {
  static parent: RequestClass;
}
export class RequestFilePrivate {}
export class RequestHTTPClass {
  static parent: RequestClass;
}
export class RequestHTTPPrivate {}
export class RequestPrivate {}
export class RequesterClass {
  static parent_class: GObject.ObjectClass;
}
export class RequesterPrivate {}
export class ServerClass {
  static parent_class: GObject.ObjectClass;
  static request_started: (
    server: Server,
    msg: Message,
    client: ClientContext
  ) => void;
  static request_read: (
    server: Server,
    msg: Message,
    client: ClientContext
  ) => void;
  static request_finished: (
    server: Server,
    msg: Message,
    client: ClientContext
  ) => void;
  static request_aborted: (
    server: Server,
    msg: Message,
    client: ClientContext
  ) => void;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class SessionAsyncClass {
  static parent_class: SessionClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class SessionClass {
  static parent_class: GObject.ObjectClass;
  static request_started: (
    session: Session,
    msg: Message,
    socket: Socket
  ) => void;
  static authenticate: (
    session: Session,
    msg: Message,
    auth: Auth,
    retrying: boolean
  ) => void;
  static queue_message: (
    session: Session,
    msg: Message,
    callback: SessionCallback | null,
    user_data: object | null
  ) => void;
  static requeue_message: (session: Session, msg: Message) => void;
  static send_message: (session: Session, msg: Message) => number;
  static cancel_message: (
    session: Session,
    msg: Message,
    status_code: number
  ) => void;
  static auth_required: (
    session: Session,
    msg: Message,
    auth: Auth,
    retrying: boolean
  ) => void;
  static flush_queue: (session: Session) => void;
  static kick: (session: Session) => void;
  static _libsoup_reserved4: () => void;
}
export class SessionFeatureInterface {
  static parent: GObject.TypeInterface;
  static attach: (feature: any, session: Session) => void;
  static detach: (feature: any, session: Session) => void;
  static request_queued: (feature: any, session: Session, msg: Message) => void;
  static request_started: (
    feature: any,
    session: Session,
    msg: Message,
    socket: Socket
  ) => void;
  static request_unqueued: (
    feature: any,
    session: Session,
    msg: Message
  ) => void;
  static add_feature: (feature: any, type: any) => boolean;
  static remove_feature: (feature: any, type: any) => boolean;
  static has_feature: (feature: any, type: any) => boolean;
}
export class SessionSyncClass {
  static parent_class: SessionClass;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class SocketClass {
  static parent_class: GObject.ObjectClass;
  static readable: (sock: Socket) => void;
  static writable: (sock: Socket) => void;
  static disconnected: (sock: Socket) => void;
  static new_connection: (listener: Socket, new_sock: Socket) => void;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class URI {
  constructor(uri_string: string | null);
  static scheme: string;
  static user: string;
  static password: string;
  static host: string;
  static port: number;
  static path: string;
  static query: string;
  static fragment: string;
  copy(): URI;
  copy_host(): URI;
  equal(uri2: URI): boolean;
  free(): void;
  get_fragment(): string;
  get_host(): string;
  get_password(): string;
  get_path(): string;
  get_port(): number;
  get_query(): string;
  get_scheme(): string;
  get_user(): string;
  host_equal(v2: URI): boolean;
  host_hash(): number;
  set_fragment(fragment: string | null): void;
  set_host(host: string | null): void;
  set_password(password: string | null): void;
  set_path(path: string): void;
  set_port(port: number): void;
  set_query(query: string | null): void;
  set_query_from_fields(first_field: string, ...args: any[]): void;
  set_query_from_form(form: GLib.HashTable): void;
  set_scheme(scheme: string): void;
  set_user(user: string | null): void;
  to_string(just_path_and_query: boolean): string;
  uses_default_port(): boolean;
  static decode(part: string): string;
  static encode(part: string, escape_extra: string | null): string;
  static normalize(part: string, unescape_extra: string | null): string;
}
export class WebsocketConnectionClass {
  static parent: GObject.ObjectClass;
  static message: (
    self: WebsocketConnection,
    type: WebsocketDataType,
    message: GLib.Bytes
  ) => void;
  static error: (self: WebsocketConnection, error: GLib.Error) => void;
  static closing: (self: WebsocketConnection) => void;
  static closed: (self: WebsocketConnection) => void;
  static pong: (self: WebsocketConnection, message: GLib.Bytes) => void;
}
export class WebsocketConnectionPrivate {}
export class WebsocketExtensionClass {
  static parent_class: GObject.ObjectClass;
  static name: string;
  static configure: (
    extension: WebsocketExtension,
    connection_type: WebsocketConnectionType,
    params: GLib.HashTable | null
  ) => boolean;
  static get_request_params: (extension: WebsocketExtension) => string | null;
  static get_response_params: (extension: WebsocketExtension) => string | null;
  static process_outgoing_message: (
    extension: WebsocketExtension,
    header: number,
    payload: GLib.Bytes
  ) => GLib.Bytes;
  static process_incoming_message: (
    extension: WebsocketExtension,
    header: number,
    payload: GLib.Bytes
  ) => GLib.Bytes;
  static _libsoup_reserved1: () => void;
  static _libsoup_reserved2: () => void;
  static _libsoup_reserved3: () => void;
  static _libsoup_reserved4: () => void;
}
export class WebsocketExtensionDeflateClass {
  static parent_class: WebsocketExtensionClass;
}
export class WebsocketExtensionManagerClass {
  static parent_class: GObject.ObjectClass;
}
export class XMLRPCParams {
  free(): void;
  parse(signature: string | null): GLib.Variant;
}
export function add_completion(
  async_context: GLib.MainContext | null,
  _function: GLib.SourceFunc,
  data: object | null
): GLib.Source;
export function add_idle(
  async_context: GLib.MainContext | null,
  _function: GLib.SourceFunc,
  data: object | null
): GLib.Source;
export function add_io_watch(
  async_context: GLib.MainContext | null,
  chan: GLib.IOChannel,
  condition: GLib.IOCondition,
  _function: GLib.IOFunc,
  data: object | null
): GLib.Source;
export function add_timeout(
  async_context: GLib.MainContext | null,
  interval: number,
  _function: GLib.SourceFunc,
  data: object | null
): GLib.Source;
export function check_version(
  major: number,
  minor: number,
  micro: number
): boolean;
export function cookie_parse(header: string, origin: URI): Cookie | null;
export function cookies_free(cookies: GLib.SList): void;
export function cookies_from_request(msg: Message): GLib.SList;
export function cookies_from_response(msg: Message): GLib.SList;
export function cookies_to_cookie_header(cookies: GLib.SList): string;
export function cookies_to_request(cookies: GLib.SList, msg: Message): void;
export function cookies_to_response(cookies: GLib.SList, msg: Message): void;
export function form_decode(encoded_form: string): GLib.HashTable;
export function form_decode_multipart(
  msg: Message,
  file_control_name: string | null,
  filename: string,
  content_type: string,
  file: Buffer
): GLib.HashTable | null;
export function form_encode(first_field: string, ...args: any[]): string;
export function form_encode_datalist(form_data_set: GLib.Data): string;
export function form_encode_hash(form_data_set: GLib.HashTable): string;
export function form_encode_valist(first_field: string, args: any): string;
export function form_request_new(
  method: string,
  uri: string,
  first_field: string,
  ...args: any[]
): Message;
export function form_request_new_from_datalist(
  method: string,
  uri: string,
  form_data_set: GLib.Data
): Message;
export function form_request_new_from_hash(
  method: string,
  uri: string,
  form_data_set: GLib.HashTable
): Message;
export function form_request_new_from_multipart(
  uri: string,
  multipart: Multipart
): Message;
export function get_major_version(): number;
export function get_micro_version(): number;
export function get_minor_version(): number;
export function header_contains(header: string, token: string): boolean;
export function header_free_list(list: GLib.SList): void;
export function header_free_param_list(param_list: GLib.HashTable): void;
export function header_g_string_append_param(
  string: GLib.String,
  name: string,
  value: string
): void;
export function header_g_string_append_param_quoted(
  string: GLib.String,
  name: string,
  value: string
): void;
export function header_parse_list(header: string): GLib.SList;
export function header_parse_param_list(header: string): GLib.HashTable;
export function header_parse_param_list_strict(
  header: string
): GLib.HashTable | null;
export function header_parse_quality_list(
  header: string,
  unacceptable: GLib.SList
): GLib.SList;
export function header_parse_semi_param_list(header: string): GLib.HashTable;
export function header_parse_semi_param_list_strict(
  header: string
): GLib.HashTable | null;
export function headers_parse(
  str: string,
  len: number,
  dest: MessageHeaders
): boolean;
export function headers_parse_request(
  str: string,
  len: number,
  req_headers: MessageHeaders,
  req_method: string,
  req_path: string,
  ver: HTTPVersion
): number;
export function headers_parse_response(
  str: string,
  len: number,
  headers: MessageHeaders,
  ver: HTTPVersion,
  status_code: number,
  reason_phrase: string
): boolean;
export function headers_parse_status_line(
  status_line: string,
  ver: HTTPVersion,
  status_code: number,
  reason_phrase: string
): boolean;
export function http_error_quark(): GLib.Quark;
export function message_headers_iter_init(
  iter: MessageHeadersIter,
  hdrs: MessageHeaders
): void;
export function request_error_quark(): GLib.Quark;
export function requester_error_quark(): GLib.Quark;
export function status_get_phrase(status_code: number): string;
export function status_proxify(status_code: number): number;
export function str_case_equal(v1: object | null, v2: object | null): boolean;
export function str_case_hash(key: object | null): number;
export function tld_domain_is_public_suffix(domain: string): boolean;
export function tld_error_quark(): GLib.Quark;
export function tld_get_base_domain(hostname: string): string;
export function uri_decode(part: string): string;
export function uri_encode(part: string, escape_extra: string | null): string;
export function uri_normalize(
  part: string,
  unescape_extra: string | null
): string;
export function value_array_append(
  array: GObject.ValueArray,
  type: any,
  ...args: any[]
): void;
export function value_array_append_vals(
  array: GObject.ValueArray,
  first_type: any,
  ...args: any[]
): void;
export function value_array_from_args(args: any): GObject.ValueArray | null;
export function value_array_get_nth(
  array: GObject.ValueArray,
  index_: number,
  type: any,
  ...args: any[]
): boolean;
export function value_array_insert(
  array: GObject.ValueArray,
  index_: number,
  type: any,
  ...args: any[]
): void;
export function value_array_new(): GObject.ValueArray;
export function value_array_new_with_vals(
  first_type: any,
  ...args: any[]
): GObject.ValueArray;
export function value_array_to_args(
  array: GObject.ValueArray,
  args: any
): boolean;
export function value_hash_insert(
  hash: GLib.HashTable,
  key: string,
  type: any,
  ...args: any[]
): void;
export function value_hash_insert_vals(
  hash: GLib.HashTable,
  first_key: string,
  ...args: any[]
): void;
export function value_hash_insert_value(
  hash: GLib.HashTable,
  key: string,
  value: GObject.Value
): void;
export function value_hash_lookup(
  hash: GLib.HashTable,
  key: string,
  type: any,
  ...args: any[]
): boolean;
export function value_hash_lookup_vals(
  hash: GLib.HashTable,
  first_key: string,
  ...args: any[]
): boolean;
export function value_hash_new(): GLib.HashTable;
export function value_hash_new_with_vals(
  first_key: string,
  ...args: any[]
): GLib.HashTable;
export function websocket_client_prepare_handshake(
  msg: Message,
  origin: string | null,
  protocols: string[] | null
): void;
export function websocket_client_prepare_handshake_with_extensions(
  msg: Message,
  origin: string | null,
  protocols: string[] | null,
  supported_extensions: GObject.TypeClass[] | null
): void;
export function websocket_client_verify_handshake(msg: Message): boolean;
export function websocket_client_verify_handshake_with_extensions(
  msg: Message,
  supported_extensions: GObject.TypeClass[] | null,
  accepted_extensions: GLib.List
): boolean;
export function websocket_error_get_quark(): GLib.Quark;
export function websocket_server_check_handshake(
  msg: Message,
  origin: string | null,
  protocols: string[] | null
): boolean;
export function websocket_server_check_handshake_with_extensions(
  msg: Message,
  origin: string | null,
  protocols: string[] | null,
  supported_extensions: GObject.TypeClass[] | null
): boolean;
export function websocket_server_process_handshake(
  msg: Message,
  expected_origin: string | null,
  protocols: string[] | null
): boolean;
export function websocket_server_process_handshake_with_extensions(
  msg: Message,
  expected_origin: string | null,
  protocols: string[] | null,
  supported_extensions: GObject.TypeClass[] | null,
  accepted_extensions: GLib.List
): boolean;
export function xmlrpc_build_fault(
  fault_code: number,
  fault_format: string,
  ...args: any[]
): string;
export function xmlrpc_build_method_call(
  method_name: string,
  params: GObject.Value[],
  n_params: number
): string | null;
export function xmlrpc_build_method_response(
  value: GObject.Value
): string | null;
export function xmlrpc_build_request(
  method_name: string,
  params: GLib.Variant
): string;
export function xmlrpc_build_response(value: GLib.Variant): string;
export function xmlrpc_error_quark(): GLib.Quark;
export function xmlrpc_extract_method_call(
  method_call: string,
  length: number,
  method_name: string,
  ...args: any[]
): boolean;
export function xmlrpc_extract_method_response(
  method_response: string,
  length: number,
  error: GLib.Error,
  type: any,
  ...args: any[]
): boolean;
export function xmlrpc_fault_quark(): GLib.Quark;
export function xmlrpc_message_new(
  uri: string,
  method_name: string,
  params: GLib.Variant
): Message;
export function xmlrpc_message_set_fault(
  msg: Message,
  fault_code: number,
  fault_format: string,
  ...args: any[]
): void;
export function xmlrpc_message_set_response(
  msg: Message,
  value: GLib.Variant
): boolean;
export function xmlrpc_parse_method_call(
  method_call: string,
  length: number,
  method_name: string,
  params: GObject.ValueArray
): boolean;
export function xmlrpc_parse_method_response(
  method_response: string,
  length: number,
  value: GObject.Value
): boolean;
export function xmlrpc_parse_request(
  method_call: string,
  length: number,
  params: XMLRPCParams
): string;
export function xmlrpc_parse_response(
  method_response: string,
  length: number,
  signature: string | null
): GLib.Variant;
export function xmlrpc_request_new(
  uri: string,
  method_name: string,
  ...args: any[]
): Message;
export function xmlrpc_set_fault(
  msg: Message,
  fault_code: number,
  fault_format: string,
  ...args: any[]
): void;
export function xmlrpc_set_response(
  msg: Message,
  type: any,
  ...args: any[]
): void;
export function xmlrpc_variant_get_datetime(variant: GLib.Variant): Date;
export function xmlrpc_variant_new_datetime(date: Date): GLib.Variant;
export type AddressCallback = (
  addr: Address,
  status: number,
  user_data: object | null
) => void;
export type AuthDomainBasicAuthCallback = (
  domain: AuthDomainBasic,
  msg: Message,
  username: string,
  password: string,
  user_data: object | null
) => boolean;
export type AuthDomainDigestAuthCallback = (
  domain: AuthDomainDigest,
  msg: Message,
  username: string,
  user_data: object | null
) => string | null;
export type AuthDomainFilter = (
  domain: AuthDomain,
  msg: Message,
  user_data: object | null
) => boolean;
export type AuthDomainGenericAuthCallback = (
  domain: AuthDomain,
  msg: Message,
  username: string,
  user_data: object | null
) => boolean;
export type ChunkAllocator = (
  msg: Message,
  max_len: number,
  user_data: object | null
) => Buffer | null;
export type LoggerFilter = (
  logger: Logger,
  msg: Message,
  user_data: object | null
) => LoggerLogLevel;
export type LoggerPrinter = (
  logger: Logger,
  level: LoggerLogLevel,
  direction: number,
  data: string,
  user_data: object | null
) => void;
export type MessageHeadersForeachFunc = (
  name: string,
  value: string,
  user_data: object | null
) => void;
export type PasswordManagerCallback = (
  password_manager: any,
  msg: Message,
  auth: Auth,
  retrying: boolean,
  user_data: object | null
) => void;
export type ProxyResolverCallback = (
  proxy_resolver: any,
  msg: Message,
  arg: number,
  addr: Address,
  user_data: object | null
) => void;
export type ProxyURIResolverCallback = (
  resolver: any,
  status: number,
  proxy_uri: URI,
  user_data: object | null
) => void;
export type ServerCallback = (
  server: Server,
  msg: Message,
  path: string,
  query: GLib.HashTable | null,
  client: ClientContext,
  user_data: object | null
) => void;
export type ServerWebsocketCallback = (
  server: Server,
  connection: WebsocketConnection,
  path: string,
  client: ClientContext,
  user_data: object | null
) => void;
export type SessionCallback = (
  session: Session,
  msg: Message,
  user_data: object | null
) => void;
export type SessionConnectProgressCallback = (
  session: Session,
  event: Gio.SocketClientEvent,
  connection: Gio.IOStream,
  user_data: object | null
) => void;
export type SocketCallback = (
  sock: Socket,
  status: number,
  user_data: object | null
) => void;
