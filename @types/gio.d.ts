import * as GObject from './g-object';
import * as GLib from './g-lib';
export const DESKTOP_APP_INFO_LOOKUP_EXTENSION_POINT_NAME: string;
export const DRIVE_IDENTIFIER_KIND_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_DELETE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_EXECUTE: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_READ: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_RENAME: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_TRASH: string;
export const FILE_ATTRIBUTE_ACCESS_CAN_WRITE: string;
export const FILE_ATTRIBUTE_DOS_IS_ARCHIVE: string;
export const FILE_ATTRIBUTE_DOS_IS_MOUNTPOINT: string;
export const FILE_ATTRIBUTE_DOS_IS_SYSTEM: string;
export const FILE_ATTRIBUTE_DOS_REPARSE_POINT_TAG: string;
export const FILE_ATTRIBUTE_ETAG_VALUE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_FREE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_READONLY: string;
export const FILE_ATTRIBUTE_FILESYSTEM_REMOTE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_SIZE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_TYPE: string;
export const FILE_ATTRIBUTE_FILESYSTEM_USED: string;
export const FILE_ATTRIBUTE_FILESYSTEM_USE_PREVIEW: string;
export const FILE_ATTRIBUTE_GVFS_BACKEND: string;
export const FILE_ATTRIBUTE_ID_FILE: string;
export const FILE_ATTRIBUTE_ID_FILESYSTEM: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_EJECT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_MOUNT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_POLL: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_START_DEGRADED: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_STOP: string;
export const FILE_ATTRIBUTE_MOUNTABLE_CAN_UNMOUNT: string;
export const FILE_ATTRIBUTE_MOUNTABLE_HAL_UDI: string;
export const FILE_ATTRIBUTE_MOUNTABLE_IS_MEDIA_CHECK_AUTOMATIC: string;
export const FILE_ATTRIBUTE_MOUNTABLE_START_STOP_TYPE: string;
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_MOUNTABLE_UNIX_DEVICE_FILE: string;
export const FILE_ATTRIBUTE_OWNER_GROUP: string;
export const FILE_ATTRIBUTE_OWNER_USER: string;
export const FILE_ATTRIBUTE_OWNER_USER_REAL: string;
export const FILE_ATTRIBUTE_PREVIEW_ICON: string;
export const FILE_ATTRIBUTE_RECENT_MODIFIED: string;
export const FILE_ATTRIBUTE_SELINUX_CONTEXT: string;
export const FILE_ATTRIBUTE_STANDARD_ALLOCATED_SIZE: string;
export const FILE_ATTRIBUTE_STANDARD_CONTENT_TYPE: string;
export const FILE_ATTRIBUTE_STANDARD_COPY_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_DESCRIPTION: string;
export const FILE_ATTRIBUTE_STANDARD_DISPLAY_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_EDIT_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_FAST_CONTENT_TYPE: string;
export const FILE_ATTRIBUTE_STANDARD_ICON: string;
export const FILE_ATTRIBUTE_STANDARD_IS_BACKUP: string;
export const FILE_ATTRIBUTE_STANDARD_IS_HIDDEN: string;
export const FILE_ATTRIBUTE_STANDARD_IS_SYMLINK: string;
export const FILE_ATTRIBUTE_STANDARD_IS_VIRTUAL: string;
export const FILE_ATTRIBUTE_STANDARD_IS_VOLATILE: string;
export const FILE_ATTRIBUTE_STANDARD_NAME: string;
export const FILE_ATTRIBUTE_STANDARD_SIZE: string;
export const FILE_ATTRIBUTE_STANDARD_SORT_ORDER: string;
export const FILE_ATTRIBUTE_STANDARD_SYMBOLIC_ICON: string;
export const FILE_ATTRIBUTE_STANDARD_SYMLINK_TARGET: string;
export const FILE_ATTRIBUTE_STANDARD_TARGET_URI: string;
export const FILE_ATTRIBUTE_STANDARD_TYPE: string;
export const FILE_ATTRIBUTE_THUMBNAILING_FAILED: string;
export const FILE_ATTRIBUTE_THUMBNAIL_IS_VALID: string;
export const FILE_ATTRIBUTE_THUMBNAIL_PATH: string;
export const FILE_ATTRIBUTE_TIME_ACCESS: string;
export const FILE_ATTRIBUTE_TIME_ACCESS_USEC: string;
export const FILE_ATTRIBUTE_TIME_CHANGED: string;
export const FILE_ATTRIBUTE_TIME_CHANGED_USEC: string;
export const FILE_ATTRIBUTE_TIME_CREATED: string;
export const FILE_ATTRIBUTE_TIME_CREATED_USEC: string;
export const FILE_ATTRIBUTE_TIME_MODIFIED: string;
export const FILE_ATTRIBUTE_TIME_MODIFIED_USEC: string;
export const FILE_ATTRIBUTE_TRASH_DELETION_DATE: string;
export const FILE_ATTRIBUTE_TRASH_ITEM_COUNT: string;
export const FILE_ATTRIBUTE_TRASH_ORIG_PATH: string;
export const FILE_ATTRIBUTE_UNIX_BLOCKS: string;
export const FILE_ATTRIBUTE_UNIX_BLOCK_SIZE: string;
export const FILE_ATTRIBUTE_UNIX_DEVICE: string;
export const FILE_ATTRIBUTE_UNIX_GID: string;
export const FILE_ATTRIBUTE_UNIX_INODE: string;
export const FILE_ATTRIBUTE_UNIX_IS_MOUNTPOINT: string;
export const FILE_ATTRIBUTE_UNIX_MODE: string;
export const FILE_ATTRIBUTE_UNIX_NLINK: string;
export const FILE_ATTRIBUTE_UNIX_RDEV: string;
export const FILE_ATTRIBUTE_UNIX_UID: string;
export const MENU_ATTRIBUTE_ACTION: string;
export const MENU_ATTRIBUTE_ACTION_NAMESPACE: string;
export const MENU_ATTRIBUTE_ICON: string;
export const MENU_ATTRIBUTE_LABEL: string;
export const MENU_ATTRIBUTE_TARGET: string;
export const MENU_LINK_SECTION: string;
export const MENU_LINK_SUBMENU: string;
export const NATIVE_VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
export const NETWORK_MONITOR_EXTENSION_POINT_NAME: string;
export const PROXY_EXTENSION_POINT_NAME: string;
export const PROXY_RESOLVER_EXTENSION_POINT_NAME: string;
export const SETTINGS_BACKEND_EXTENSION_POINT_NAME: string;
export const TLS_BACKEND_EXTENSION_POINT_NAME: string;
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_CLIENT: string;
export const TLS_DATABASE_PURPOSE_AUTHENTICATE_SERVER: string;
export const VFS_EXTENSION_POINT_NAME: string;
export const VOLUME_IDENTIFIER_KIND_CLASS: string;
export const VOLUME_IDENTIFIER_KIND_HAL_UDI: string;
export const VOLUME_IDENTIFIER_KIND_LABEL: string;
export const VOLUME_IDENTIFIER_KIND_NFS_MOUNT: string;
export const VOLUME_IDENTIFIER_KIND_UNIX_DEVICE: string;
export const VOLUME_IDENTIFIER_KIND_UUID: string;
export const VOLUME_MONITOR_EXTENSION_POINT_NAME: string;
export enum BusType {
  G_BUS_TYPE_STARTER,
  G_BUS_TYPE_NONE,
  G_BUS_TYPE_SYSTEM,
  G_BUS_TYPE_SESSION,
}
export enum ConverterResult {
  G_CONVERTER_ERROR,
  G_CONVERTER_CONVERTED,
  G_CONVERTER_FINISHED,
  G_CONVERTER_FLUSHED,
}
export enum CredentialsType {
  G_CREDENTIALS_TYPE_INVALID,
  G_CREDENTIALS_TYPE_LINUX_UCRED,
  G_CREDENTIALS_TYPE_FREEBSD_CMSGCRED,
  G_CREDENTIALS_TYPE_OPENBSD_SOCKPEERCRED,
  G_CREDENTIALS_TYPE_SOLARIS_UCRED,
  G_CREDENTIALS_TYPE_NETBSD_UNPCBID,
}
export enum DBusError {
  G_DBUS_ERROR_FAILED,
  G_DBUS_ERROR_NO_MEMORY,
  G_DBUS_ERROR_SERVICE_UNKNOWN,
  G_DBUS_ERROR_NAME_HAS_NO_OWNER,
  G_DBUS_ERROR_NO_REPLY,
  G_DBUS_ERROR_IO_ERROR,
  G_DBUS_ERROR_BAD_ADDRESS,
  G_DBUS_ERROR_NOT_SUPPORTED,
  G_DBUS_ERROR_LIMITS_EXCEEDED,
  G_DBUS_ERROR_ACCESS_DENIED,
  G_DBUS_ERROR_AUTH_FAILED,
  G_DBUS_ERROR_NO_SERVER,
  G_DBUS_ERROR_TIMEOUT,
  G_DBUS_ERROR_NO_NETWORK,
  G_DBUS_ERROR_ADDRESS_IN_USE,
  G_DBUS_ERROR_DISCONNECTED,
  G_DBUS_ERROR_INVALID_ARGS,
  G_DBUS_ERROR_FILE_NOT_FOUND,
  G_DBUS_ERROR_FILE_EXISTS,
  G_DBUS_ERROR_UNKNOWN_METHOD,
  G_DBUS_ERROR_TIMED_OUT,
  G_DBUS_ERROR_MATCH_RULE_NOT_FOUND,
  G_DBUS_ERROR_MATCH_RULE_INVALID,
  G_DBUS_ERROR_SPAWN_EXEC_FAILED,
  G_DBUS_ERROR_SPAWN_FORK_FAILED,
  G_DBUS_ERROR_SPAWN_CHILD_EXITED,
  G_DBUS_ERROR_SPAWN_CHILD_SIGNALED,
  G_DBUS_ERROR_SPAWN_FAILED,
  G_DBUS_ERROR_SPAWN_SETUP_FAILED,
  G_DBUS_ERROR_SPAWN_CONFIG_INVALID,
  G_DBUS_ERROR_SPAWN_SERVICE_INVALID,
  G_DBUS_ERROR_SPAWN_SERVICE_NOT_FOUND,
  G_DBUS_ERROR_SPAWN_PERMISSIONS_INVALID,
  G_DBUS_ERROR_SPAWN_FILE_INVALID,
  G_DBUS_ERROR_SPAWN_NO_MEMORY,
  G_DBUS_ERROR_UNIX_PROCESS_ID_UNKNOWN,
  G_DBUS_ERROR_INVALID_SIGNATURE,
  G_DBUS_ERROR_INVALID_FILE_CONTENT,
  G_DBUS_ERROR_SELINUX_SECURITY_CONTEXT_UNKNOWN,
  G_DBUS_ERROR_ADT_AUDIT_DATA_UNKNOWN,
  G_DBUS_ERROR_OBJECT_PATH_IN_USE,
  G_DBUS_ERROR_UNKNOWN_OBJECT,
  G_DBUS_ERROR_UNKNOWN_INTERFACE,
  G_DBUS_ERROR_UNKNOWN_PROPERTY,
  G_DBUS_ERROR_PROPERTY_READ_ONLY,
}
export enum DBusMessageByteOrder {
  G_DBUS_MESSAGE_BYTE_ORDER_BIG_ENDIAN,
  G_DBUS_MESSAGE_BYTE_ORDER_LITTLE_ENDIAN,
}
export enum DBusMessageHeaderField {
  G_DBUS_MESSAGE_HEADER_FIELD_INVALID,
  G_DBUS_MESSAGE_HEADER_FIELD_PATH,
  G_DBUS_MESSAGE_HEADER_FIELD_INTERFACE,
  G_DBUS_MESSAGE_HEADER_FIELD_MEMBER,
  G_DBUS_MESSAGE_HEADER_FIELD_ERROR_NAME,
  G_DBUS_MESSAGE_HEADER_FIELD_REPLY_SERIAL,
  G_DBUS_MESSAGE_HEADER_FIELD_DESTINATION,
  G_DBUS_MESSAGE_HEADER_FIELD_SENDER,
  G_DBUS_MESSAGE_HEADER_FIELD_SIGNATURE,
  G_DBUS_MESSAGE_HEADER_FIELD_NUM_UNIX_FDS,
}
export enum DBusMessageType {
  G_DBUS_MESSAGE_TYPE_INVALID,
  G_DBUS_MESSAGE_TYPE_METHOD_CALL,
  G_DBUS_MESSAGE_TYPE_METHOD_RETURN,
  G_DBUS_MESSAGE_TYPE_ERROR,
  G_DBUS_MESSAGE_TYPE_SIGNAL,
}
export enum DataStreamByteOrder {
  G_DATA_STREAM_BYTE_ORDER_BIG_ENDIAN,
  G_DATA_STREAM_BYTE_ORDER_LITTLE_ENDIAN,
  G_DATA_STREAM_BYTE_ORDER_HOST_ENDIAN,
}
export enum DataStreamNewlineType {
  G_DATA_STREAM_NEWLINE_TYPE_LF,
  G_DATA_STREAM_NEWLINE_TYPE_CR,
  G_DATA_STREAM_NEWLINE_TYPE_CR_LF,
  G_DATA_STREAM_NEWLINE_TYPE_ANY,
}
export enum DriveStartStopType {
  G_DRIVE_START_STOP_TYPE_UNKNOWN,
  G_DRIVE_START_STOP_TYPE_SHUTDOWN,
  G_DRIVE_START_STOP_TYPE_NETWORK,
  G_DRIVE_START_STOP_TYPE_MULTIDISK,
  G_DRIVE_START_STOP_TYPE_PASSWORD,
}
export enum EmblemOrigin {
  G_EMBLEM_ORIGIN_UNKNOWN,
  G_EMBLEM_ORIGIN_DEVICE,
  G_EMBLEM_ORIGIN_LIVEMETADATA,
  G_EMBLEM_ORIGIN_TAG,
}
export enum FileAttributeStatus {
  G_FILE_ATTRIBUTE_STATUS_UNSET,
  G_FILE_ATTRIBUTE_STATUS_SET,
  G_FILE_ATTRIBUTE_STATUS_ERROR_SETTING,
}
export enum FileAttributeType {
  G_FILE_ATTRIBUTE_TYPE_INVALID,
  G_FILE_ATTRIBUTE_TYPE_STRING,
  G_FILE_ATTRIBUTE_TYPE_BYTE_STRING,
  G_FILE_ATTRIBUTE_TYPE_BOOLEAN,
  G_FILE_ATTRIBUTE_TYPE_UINT32,
  G_FILE_ATTRIBUTE_TYPE_INT32,
  G_FILE_ATTRIBUTE_TYPE_UINT64,
  G_FILE_ATTRIBUTE_TYPE_INT64,
  G_FILE_ATTRIBUTE_TYPE_OBJECT,
  G_FILE_ATTRIBUTE_TYPE_STRINGV,
}
export enum FileMonitorEvent {
  G_FILE_MONITOR_EVENT_CHANGED,
  G_FILE_MONITOR_EVENT_CHANGES_DONE_HINT,
  G_FILE_MONITOR_EVENT_DELETED,
  G_FILE_MONITOR_EVENT_CREATED,
  G_FILE_MONITOR_EVENT_ATTRIBUTE_CHANGED,
  G_FILE_MONITOR_EVENT_PRE_UNMOUNT,
  G_FILE_MONITOR_EVENT_UNMOUNTED,
  G_FILE_MONITOR_EVENT_MOVED,
  G_FILE_MONITOR_EVENT_RENAMED,
  G_FILE_MONITOR_EVENT_MOVED_IN,
  G_FILE_MONITOR_EVENT_MOVED_OUT,
}
export enum FileType {
  G_FILE_TYPE_UNKNOWN,
  G_FILE_TYPE_REGULAR,
  G_FILE_TYPE_DIRECTORY,
  G_FILE_TYPE_SYMBOLIC_LINK,
  G_FILE_TYPE_SPECIAL,
  G_FILE_TYPE_SHORTCUT,
  G_FILE_TYPE_MOUNTABLE,
}
export enum FilesystemPreviewType {
  G_FILESYSTEM_PREVIEW_TYPE_IF_ALWAYS,
  G_FILESYSTEM_PREVIEW_TYPE_IF_LOCAL,
  G_FILESYSTEM_PREVIEW_TYPE_NEVER,
}
export enum IOErrorEnum {
  G_IO_ERROR_FAILED,
  G_IO_ERROR_NOT_FOUND,
  G_IO_ERROR_EXISTS,
  G_IO_ERROR_IS_DIRECTORY,
  G_IO_ERROR_NOT_DIRECTORY,
  G_IO_ERROR_NOT_EMPTY,
  G_IO_ERROR_NOT_REGULAR_FILE,
  G_IO_ERROR_NOT_SYMBOLIC_LINK,
  G_IO_ERROR_NOT_MOUNTABLE_FILE,
  G_IO_ERROR_FILENAME_TOO_LONG,
  G_IO_ERROR_INVALID_FILENAME,
  G_IO_ERROR_TOO_MANY_LINKS,
  G_IO_ERROR_NO_SPACE,
  G_IO_ERROR_INVALID_ARGUMENT,
  G_IO_ERROR_PERMISSION_DENIED,
  G_IO_ERROR_NOT_SUPPORTED,
  G_IO_ERROR_NOT_MOUNTED,
  G_IO_ERROR_ALREADY_MOUNTED,
  G_IO_ERROR_CLOSED,
  G_IO_ERROR_CANCELLED,
  G_IO_ERROR_PENDING,
  G_IO_ERROR_READ_ONLY,
  G_IO_ERROR_CANT_CREATE_BACKUP,
  G_IO_ERROR_WRONG_ETAG,
  G_IO_ERROR_TIMED_OUT,
  G_IO_ERROR_WOULD_RECURSE,
  G_IO_ERROR_BUSY,
  G_IO_ERROR_WOULD_BLOCK,
  G_IO_ERROR_HOST_NOT_FOUND,
  G_IO_ERROR_WOULD_MERGE,
  G_IO_ERROR_FAILED_HANDLED,
  G_IO_ERROR_TOO_MANY_OPEN_FILES,
  G_IO_ERROR_NOT_INITIALIZED,
  G_IO_ERROR_ADDRESS_IN_USE,
  G_IO_ERROR_PARTIAL_INPUT,
  G_IO_ERROR_INVALID_DATA,
  G_IO_ERROR_DBUS_ERROR,
  G_IO_ERROR_HOST_UNREACHABLE,
  G_IO_ERROR_NETWORK_UNREACHABLE,
  G_IO_ERROR_CONNECTION_REFUSED,
  G_IO_ERROR_PROXY_FAILED,
  G_IO_ERROR_PROXY_AUTH_FAILED,
  G_IO_ERROR_PROXY_NEED_AUTH,
  G_IO_ERROR_PROXY_NOT_ALLOWED,
  G_IO_ERROR_BROKEN_PIPE,
  G_IO_ERROR_CONNECTION_CLOSED,
  G_IO_ERROR_NOT_CONNECTED,
  G_IO_ERROR_MESSAGE_TOO_LARGE,
}
export enum IOModuleScopeFlags {
  G_IO_MODULE_SCOPE_NONE,
  G_IO_MODULE_SCOPE_BLOCK_DUPLICATES,
}
export enum MountOperationResult {
  G_MOUNT_OPERATION_HANDLED,
  G_MOUNT_OPERATION_ABORTED,
  G_MOUNT_OPERATION_UNHANDLED,
}
export enum NetworkConnectivity {
  G_NETWORK_CONNECTIVITY_LOCAL,
  G_NETWORK_CONNECTIVITY_LIMITED,
  G_NETWORK_CONNECTIVITY_PORTAL,
  G_NETWORK_CONNECTIVITY_FULL,
}
export enum NotificationPriority {
  G_NOTIFICATION_PRIORITY_NORMAL,
  G_NOTIFICATION_PRIORITY_LOW,
  G_NOTIFICATION_PRIORITY_HIGH,
  G_NOTIFICATION_PRIORITY_URGENT,
}
export enum PasswordSave {
  G_PASSWORD_SAVE_NEVER,
  G_PASSWORD_SAVE_FOR_SESSION,
  G_PASSWORD_SAVE_PERMANENTLY,
}
export enum PollableReturn {
  G_POLLABLE_RETURN_FAILED,
  G_POLLABLE_RETURN_OK,
  G_POLLABLE_RETURN_WOULD_BLOCK,
}
export enum ResolverError {
  G_RESOLVER_ERROR_NOT_FOUND,
  G_RESOLVER_ERROR_TEMPORARY_FAILURE,
  G_RESOLVER_ERROR_INTERNAL,
}
export enum ResolverRecordType {
  G_RESOLVER_RECORD_SRV,
  G_RESOLVER_RECORD_MX,
  G_RESOLVER_RECORD_TXT,
  G_RESOLVER_RECORD_SOA,
  G_RESOLVER_RECORD_NS,
}
export enum ResourceError {
  G_RESOURCE_ERROR_NOT_FOUND,
  G_RESOURCE_ERROR_INTERNAL,
}
export enum SocketClientEvent {
  G_SOCKET_CLIENT_RESOLVING,
  G_SOCKET_CLIENT_RESOLVED,
  G_SOCKET_CLIENT_CONNECTING,
  G_SOCKET_CLIENT_CONNECTED,
  G_SOCKET_CLIENT_PROXY_NEGOTIATING,
  G_SOCKET_CLIENT_PROXY_NEGOTIATED,
  G_SOCKET_CLIENT_TLS_HANDSHAKING,
  G_SOCKET_CLIENT_TLS_HANDSHAKED,
  G_SOCKET_CLIENT_COMPLETE,
}
export enum SocketFamily {
  G_SOCKET_FAMILY_INVALID,
  G_SOCKET_FAMILY_UNIX,
  G_SOCKET_FAMILY_IPV4,
  G_SOCKET_FAMILY_IPV6,
}
export enum SocketListenerEvent {
  G_SOCKET_LISTENER_BINDING,
  G_SOCKET_LISTENER_BOUND,
  G_SOCKET_LISTENER_LISTENING,
  G_SOCKET_LISTENER_LISTENED,
}
export enum SocketProtocol {
  G_SOCKET_PROTOCOL_UNKNOWN,
  G_SOCKET_PROTOCOL_DEFAULT,
  G_SOCKET_PROTOCOL_TCP,
  G_SOCKET_PROTOCOL_UDP,
  G_SOCKET_PROTOCOL_SCTP,
}
export enum SocketType {
  G_SOCKET_TYPE_INVALID,
  G_SOCKET_TYPE_STREAM,
  G_SOCKET_TYPE_DATAGRAM,
  G_SOCKET_TYPE_SEQPACKET,
}
export enum TlsAuthenticationMode {
  G_TLS_AUTHENTICATION_NONE,
  G_TLS_AUTHENTICATION_REQUESTED,
  G_TLS_AUTHENTICATION_REQUIRED,
}
export enum TlsCertificateRequestFlags {
  G_TLS_CERTIFICATE_REQUEST_NONE,
}
export enum TlsDatabaseLookupFlags {
  G_TLS_DATABASE_LOOKUP_NONE,
  G_TLS_DATABASE_LOOKUP_KEYPAIR,
}
export enum TlsError {
  G_TLS_ERROR_UNAVAILABLE,
  G_TLS_ERROR_MISC,
  G_TLS_ERROR_BAD_CERTIFICATE,
  G_TLS_ERROR_NOT_TLS,
  G_TLS_ERROR_HANDSHAKE,
  G_TLS_ERROR_CERTIFICATE_REQUIRED,
  G_TLS_ERROR_EOF,
  G_TLS_ERROR_INAPPROPRIATE_FALLBACK,
}
export enum TlsInteractionResult {
  G_TLS_INTERACTION_UNHANDLED,
  G_TLS_INTERACTION_HANDLED,
  G_TLS_INTERACTION_FAILED,
}
export enum TlsRehandshakeMode {
  G_TLS_REHANDSHAKE_NEVER,
  G_TLS_REHANDSHAKE_SAFELY,
  G_TLS_REHANDSHAKE_UNSAFELY,
}
export enum UnixSocketAddressType {
  G_UNIX_SOCKET_ADDRESS_INVALID,
  G_UNIX_SOCKET_ADDRESS_ANONYMOUS,
  G_UNIX_SOCKET_ADDRESS_PATH,
  G_UNIX_SOCKET_ADDRESS_ABSTRACT,
  G_UNIX_SOCKET_ADDRESS_ABSTRACT_PADDED,
}
export enum ZlibCompressorFormat {
  G_ZLIB_COMPRESSOR_FORMAT_ZLIB,
  G_ZLIB_COMPRESSOR_FORMAT_GZIP,
  G_ZLIB_COMPRESSOR_FORMAT_RAW,
}
export enum AppInfoCreateFlags {
  G_APP_INFO_CREATE_NONE,
  G_APP_INFO_CREATE_NEEDS_TERMINAL,
  G_APP_INFO_CREATE_SUPPORTS_URIS,
  G_APP_INFO_CREATE_SUPPORTS_STARTUP_NOTIFICATION,
}
export enum ApplicationFlags {
  G_APPLICATION_FLAGS_NONE,
  G_APPLICATION_IS_SERVICE,
  G_APPLICATION_IS_LAUNCHER,
  G_APPLICATION_HANDLES_OPEN,
  G_APPLICATION_HANDLES_COMMAND_LINE,
  G_APPLICATION_SEND_ENVIRONMENT,
  G_APPLICATION_NON_UNIQUE,
  G_APPLICATION_CAN_OVERRIDE_APP_ID,
  G_APPLICATION_ALLOW_REPLACEMENT,
  G_APPLICATION_REPLACE,
}
export enum AskPasswordFlags {
  G_ASK_PASSWORD_NEED_PASSWORD,
  G_ASK_PASSWORD_NEED_USERNAME,
  G_ASK_PASSWORD_NEED_DOMAIN,
  G_ASK_PASSWORD_SAVING_SUPPORTED,
  G_ASK_PASSWORD_ANONYMOUS_SUPPORTED,
  G_ASK_PASSWORD_TCRYPT,
}
export enum BusNameOwnerFlags {
  G_BUS_NAME_OWNER_FLAGS_NONE,
  G_BUS_NAME_OWNER_FLAGS_ALLOW_REPLACEMENT,
  G_BUS_NAME_OWNER_FLAGS_REPLACE,
  G_BUS_NAME_OWNER_FLAGS_DO_NOT_QUEUE,
}
export enum BusNameWatcherFlags {
  G_BUS_NAME_WATCHER_FLAGS_NONE,
  G_BUS_NAME_WATCHER_FLAGS_AUTO_START,
}
export enum ConverterFlags {
  G_CONVERTER_NO_FLAGS,
  G_CONVERTER_INPUT_AT_END,
  G_CONVERTER_FLUSH,
}
export enum DBusCallFlags {
  G_DBUS_CALL_FLAGS_NONE,
  G_DBUS_CALL_FLAGS_NO_AUTO_START,
  G_DBUS_CALL_FLAGS_ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusCapabilityFlags {
  G_DBUS_CAPABILITY_FLAGS_NONE,
  G_DBUS_CAPABILITY_FLAGS_UNIX_FD_PASSING,
}
export enum DBusConnectionFlags {
  G_DBUS_CONNECTION_FLAGS_NONE,
  G_DBUS_CONNECTION_FLAGS_AUTHENTICATION_CLIENT,
  G_DBUS_CONNECTION_FLAGS_AUTHENTICATION_SERVER,
  G_DBUS_CONNECTION_FLAGS_AUTHENTICATION_ALLOW_ANONYMOUS,
  G_DBUS_CONNECTION_FLAGS_MESSAGE_BUS_CONNECTION,
  G_DBUS_CONNECTION_FLAGS_DELAY_MESSAGE_PROCESSING,
}
export enum DBusInterfaceSkeletonFlags {
  G_DBUS_INTERFACE_SKELETON_FLAGS_NONE,
  G_DBUS_INTERFACE_SKELETON_FLAGS_HANDLE_METHOD_INVOCATIONS_IN_THREAD,
}
export enum DBusMessageFlags {
  G_DBUS_MESSAGE_FLAGS_NONE,
  G_DBUS_MESSAGE_FLAGS_NO_REPLY_EXPECTED,
  G_DBUS_MESSAGE_FLAGS_NO_AUTO_START,
  G_DBUS_MESSAGE_FLAGS_ALLOW_INTERACTIVE_AUTHORIZATION,
}
export enum DBusObjectManagerClientFlags {
  G_DBUS_OBJECT_MANAGER_CLIENT_FLAGS_NONE,
  G_DBUS_OBJECT_MANAGER_CLIENT_FLAGS_DO_NOT_AUTO_START,
}
export enum DBusPropertyInfoFlags {
  G_DBUS_PROPERTY_INFO_FLAGS_NONE,
  G_DBUS_PROPERTY_INFO_FLAGS_READABLE,
  G_DBUS_PROPERTY_INFO_FLAGS_WRITABLE,
}
export enum DBusProxyFlags {
  G_DBUS_PROXY_FLAGS_NONE,
  G_DBUS_PROXY_FLAGS_DO_NOT_LOAD_PROPERTIES,
  G_DBUS_PROXY_FLAGS_DO_NOT_CONNECT_SIGNALS,
  G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START,
  G_DBUS_PROXY_FLAGS_GET_INVALIDATED_PROPERTIES,
  G_DBUS_PROXY_FLAGS_DO_NOT_AUTO_START_AT_CONSTRUCTION,
}
export enum DBusSendMessageFlags {
  G_DBUS_SEND_MESSAGE_FLAGS_NONE,
  G_DBUS_SEND_MESSAGE_FLAGS_PRESERVE_SERIAL,
}
export enum DBusServerFlags {
  G_DBUS_SERVER_FLAGS_NONE,
  G_DBUS_SERVER_FLAGS_RUN_IN_THREAD,
  G_DBUS_SERVER_FLAGS_AUTHENTICATION_ALLOW_ANONYMOUS,
}
export enum DBusSignalFlags {
  G_DBUS_SIGNAL_FLAGS_NONE,
  G_DBUS_SIGNAL_FLAGS_NO_MATCH_RULE,
  G_DBUS_SIGNAL_FLAGS_MATCH_ARG0_NAMESPACE,
  G_DBUS_SIGNAL_FLAGS_MATCH_ARG0_PATH,
}
export enum DBusSubtreeFlags {
  G_DBUS_SUBTREE_FLAGS_NONE,
  G_DBUS_SUBTREE_FLAGS_DISPATCH_TO_UNENUMERATED_NODES,
}
export enum DriveStartFlags {
  G_DRIVE_START_NONE,
}
export enum FileAttributeInfoFlags {
  G_FILE_ATTRIBUTE_INFO_NONE,
  G_FILE_ATTRIBUTE_INFO_COPY_WITH_FILE,
  G_FILE_ATTRIBUTE_INFO_COPY_WHEN_MOVED,
}
export enum FileCopyFlags {
  G_FILE_COPY_NONE,
  G_FILE_COPY_OVERWRITE,
  G_FILE_COPY_BACKUP,
  G_FILE_COPY_NOFOLLOW_SYMLINKS,
  G_FILE_COPY_ALL_METADATA,
  G_FILE_COPY_NO_FALLBACK_FOR_MOVE,
  G_FILE_COPY_TARGET_DEFAULT_PERMS,
}
export enum FileCreateFlags {
  G_FILE_CREATE_NONE,
  G_FILE_CREATE_PRIVATE,
  G_FILE_CREATE_REPLACE_DESTINATION,
}
export enum FileMeasureFlags {
  G_FILE_MEASURE_NONE,
  G_FILE_MEASURE_REPORT_ANY_ERROR,
  G_FILE_MEASURE_APPARENT_SIZE,
  G_FILE_MEASURE_NO_XDEV,
}
export enum FileMonitorFlags {
  G_FILE_MONITOR_NONE,
  G_FILE_MONITOR_WATCH_MOUNTS,
  G_FILE_MONITOR_SEND_MOVED,
  G_FILE_MONITOR_WATCH_HARD_LINKS,
  G_FILE_MONITOR_WATCH_MOVES,
}
export enum FileQueryInfoFlags {
  G_FILE_QUERY_INFO_NONE,
  G_FILE_QUERY_INFO_NOFOLLOW_SYMLINKS,
}
export enum IOStreamSpliceFlags {
  G_IO_STREAM_SPLICE_NONE,
  G_IO_STREAM_SPLICE_CLOSE_STREAM1,
  G_IO_STREAM_SPLICE_CLOSE_STREAM2,
  G_IO_STREAM_SPLICE_WAIT_FOR_BOTH,
}
export enum MountMountFlags {
  G_MOUNT_MOUNT_NONE,
}
export enum MountUnmountFlags {
  G_MOUNT_UNMOUNT_NONE,
  G_MOUNT_UNMOUNT_FORCE,
}
export enum OutputStreamSpliceFlags {
  G_OUTPUT_STREAM_SPLICE_NONE,
  G_OUTPUT_STREAM_SPLICE_CLOSE_SOURCE,
  G_OUTPUT_STREAM_SPLICE_CLOSE_TARGET,
}
export enum ResolverNameLookupFlags {
  G_RESOLVER_NAME_LOOKUP_FLAGS_DEFAULT,
  G_RESOLVER_NAME_LOOKUP_FLAGS_IPV4_ONLY,
  G_RESOLVER_NAME_LOOKUP_FLAGS_IPV6_ONLY,
}
export enum ResourceFlags {
  G_RESOURCE_FLAGS_NONE,
  G_RESOURCE_FLAGS_COMPRESSED,
}
export enum ResourceLookupFlags {
  G_RESOURCE_LOOKUP_FLAGS_NONE,
}
export enum SettingsBindFlags {
  G_SETTINGS_BIND_DEFAULT,
  G_SETTINGS_BIND_GET,
  G_SETTINGS_BIND_SET,
  G_SETTINGS_BIND_NO_SENSITIVITY,
  G_SETTINGS_BIND_GET_NO_CHANGES,
  G_SETTINGS_BIND_INVERT_BOOLEAN,
}
export enum SocketMsgFlags {
  G_SOCKET_MSG_NONE,
  G_SOCKET_MSG_OOB,
  G_SOCKET_MSG_PEEK,
  G_SOCKET_MSG_DONTROUTE,
}
export enum SubprocessFlags {
  G_SUBPROCESS_FLAGS_NONE,
  G_SUBPROCESS_FLAGS_STDIN_PIPE,
  G_SUBPROCESS_FLAGS_STDIN_INHERIT,
  G_SUBPROCESS_FLAGS_STDOUT_PIPE,
  G_SUBPROCESS_FLAGS_STDOUT_SILENCE,
  G_SUBPROCESS_FLAGS_STDERR_PIPE,
  G_SUBPROCESS_FLAGS_STDERR_SILENCE,
  G_SUBPROCESS_FLAGS_STDERR_MERGE,
  G_SUBPROCESS_FLAGS_INHERIT_FDS,
}
export enum TestDBusFlags {
  G_TEST_DBUS_NONE,
}
export enum TlsCertificateFlags {
  G_TLS_CERTIFICATE_UNKNOWN_CA,
  G_TLS_CERTIFICATE_BAD_IDENTITY,
  G_TLS_CERTIFICATE_NOT_ACTIVATED,
  G_TLS_CERTIFICATE_EXPIRED,
  G_TLS_CERTIFICATE_REVOKED,
  G_TLS_CERTIFICATE_INSECURE,
  G_TLS_CERTIFICATE_GENERIC_ERROR,
  G_TLS_CERTIFICATE_VALIDATE_ALL,
}
export enum TlsDatabaseVerifyFlags {
  G_TLS_DATABASE_VERIFY_NONE,
}
export enum TlsPasswordFlags {
  G_TLS_PASSWORD_NONE,
  G_TLS_PASSWORD_RETRY,
  G_TLS_PASSWORD_MANY_TRIES,
  G_TLS_PASSWORD_FINAL_TRY,
}
export interface Action {
  enabled: boolean;
  name: string;
  'parameter-type': GLib.VariantType;
  state: GLib.Variant;
  'state-type': GLib.VariantType;
  activate(...args: any[]): any;
  change_state(...args: any[]): any;
  get_enabled(...args: any[]): any;
  get_name(...args: any[]): any;
  get_parameter_type(...args: any[]): any;
  get_state(...args: any[]): any;
  get_state_hint(...args: any[]): any;
  get_state_type(...args: any[]): any;
}
export interface ActionGroup {
  action_added(...args: any[]): any;
  action_enabled_changed(...args: any[]): any;
  action_removed(...args: any[]): any;
  action_state_changed(...args: any[]): any;
  activate_action(...args: any[]): any;
  change_action_state(...args: any[]): any;
  get_action_enabled(...args: any[]): any;
  get_action_parameter_type(...args: any[]): any;
  get_action_state(...args: any[]): any;
  get_action_state_hint(...args: any[]): any;
  get_action_state_type(...args: any[]): any;
  has_action(...args: any[]): any;
  list_actions(...args: any[]): any;
  query_action(...args: any[]): any;
}
export interface ActionMap {
  add_action(...args: any[]): any;
  add_action_entries(entries: ActionEntry[], n_entries: number, user_data: object | null): void;
  lookup_action(...args: any[]): any;
  remove_action(...args: any[]): any;
}
export interface AppInfo {
  add_supports_type(...args: any[]): any;
  can_delete(...args: any[]): any;
  can_remove_supports_type(...args: any[]): any;
  g_delete(): boolean;
  dup(...args: any[]): any;
  equal(...args: any[]): any;
  get_commandline(...args: any[]): any;
  get_description(...args: any[]): any;
  get_display_name(...args: any[]): any;
  get_executable(...args: any[]): any;
  get_icon(...args: any[]): any;
  get_id(...args: any[]): any;
  get_name(...args: any[]): any;
  get_supported_types(...args: any[]): any;
  launch(...args: any[]): any;
  launch_uris(...args: any[]): any;
  launch_uris_async(...args: any[]): any;
  launch_uris_finish(...args: any[]): any;
  remove_supports_type(...args: any[]): any;
  set_as_default_for_extension(...args: any[]): any;
  set_as_default_for_type(...args: any[]): any;
  set_as_last_used_for_type(...args: any[]): any;
  should_show(...args: any[]): any;
  supports_files(...args: any[]): any;
  supports_uris(...args: any[]): any;
}
export interface AsyncInitable {
  init_async(...args: any[]): any;
  init_finish(...args: any[]): any;
  new_finish(res: any): GObject.Object;
}
export interface AsyncResult {
  get_source_object(...args: any[]): any;
  get_user_data(...args: any[]): any;
  is_tagged(...args: any[]): any;
  legacy_propagate_error(): boolean;
}
export interface Converter {
  convert(...args: any[]): any;
  reset(...args: any[]): any;
}
export interface DBusInterface {
  dup_object(...args: any[]): any;
  get_info(...args: any[]): any;
  get_object(...args: any[]): any;
  set_object(...args: any[]): any;
}
export interface DBusObject {
  get_interface(...args: any[]): any;
  get_interfaces(...args: any[]): any;
  get_object_path(...args: any[]): any;
}
export interface DBusObjectManager {
  get_interface(...args: any[]): any;
  get_object(...args: any[]): any;
  get_object_path(...args: any[]): any;
  get_objects(...args: any[]): any;
}
export interface DatagramBased {
  condition_check(...args: any[]): any;
  condition_wait(...args: any[]): any;
  create_source(...args: any[]): any;
  receive_messages(...args: any[]): any;
  send_messages(...args: any[]): any;
}
export interface DesktopAppInfoLookup {
  get_default_for_uri_scheme(...args: any[]): any;
}
export interface Drive {
  can_eject(...args: any[]): any;
  can_poll_for_media(...args: any[]): any;
  can_start(...args: any[]): any;
  can_start_degraded(...args: any[]): any;
  can_stop(...args: any[]): any;
  eject(...args: any[]): any;
  eject_finish(...args: any[]): any;
  eject_with_operation(...args: any[]): any;
  eject_with_operation_finish(...args: any[]): any;
  enumerate_identifiers(...args: any[]): any;
  get_icon(...args: any[]): any;
  get_identifier(...args: any[]): any;
  get_name(...args: any[]): any;
  get_sort_key(...args: any[]): any;
  get_start_stop_type(...args: any[]): any;
  get_symbolic_icon(...args: any[]): any;
  get_volumes(...args: any[]): any;
  has_media(...args: any[]): any;
  has_volumes(...args: any[]): any;
  is_media_check_automatic(...args: any[]): any;
  is_media_removable(...args: any[]): any;
  is_removable(...args: any[]): any;
  poll_for_media(...args: any[]): any;
  poll_for_media_finish(...args: any[]): any;
  start(...args: any[]): any;
  start_finish(...args: any[]): any;
  stop(...args: any[]): any;
  stop_finish(...args: any[]): any;
}
export interface DtlsClientConnection {
  'accepted-cas': GLib.List;
  'server-identity': any;
  'validation-flags': TlsCertificateFlags;
  get_accepted_cas(): GLib.List;
  get_server_identity(): any;
  get_validation_flags(): TlsCertificateFlags;
  set_server_identity(identity: any): void;
  set_validation_flags(flags: TlsCertificateFlags): void;
}
export interface DtlsConnection {
  'advertised-protocols': string[];
  'base-socket': any;
  certificate: TlsCertificate;
  database: TlsDatabase;
  interaction: TlsInteraction;
  'negotiated-protocol': string;
  'peer-certificate': TlsCertificate;
  'peer-certificate-errors': TlsCertificateFlags;
  'rehandshake-mode': TlsRehandshakeMode;
  'require-close-notify': boolean;
  close(cancellable: Cancellable | null): boolean;
  close_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  close_finish(result: any): boolean;
  emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
  get_certificate(): TlsCertificate;
  get_database(): TlsDatabase;
  get_interaction(): TlsInteraction;
  get_negotiated_protocol(...args: any[]): any;
  get_peer_certificate(): TlsCertificate;
  get_peer_certificate_errors(): TlsCertificateFlags;
  get_rehandshake_mode(): TlsRehandshakeMode;
  get_require_close_notify(): boolean;
  handshake(...args: any[]): any;
  handshake_async(...args: any[]): any;
  handshake_finish(...args: any[]): any;
  set_advertised_protocols(...args: any[]): any;
  set_certificate(certificate: TlsCertificate): void;
  set_database(database: TlsDatabase): void;
  set_interaction(interaction: TlsInteraction | null): void;
  set_rehandshake_mode(mode: TlsRehandshakeMode): void;
  set_require_close_notify(require_close_notify: boolean): void;
  shutdown(...args: any[]): any;
  shutdown_async(...args: any[]): any;
  shutdown_finish(...args: any[]): any;
}
export interface DtlsServerConnection {
  'authentication-mode': TlsAuthenticationMode;
}
export interface File {
  append_to(...args: any[]): any;
  append_to_async(...args: any[]): any;
  append_to_finish(...args: any[]): any;
  copy(...args: any[]): any;
  copy_async(...args: any[]): any;
  copy_attributes(destination: any, flags: FileCopyFlags, cancellable: Cancellable | null): boolean;
  copy_finish(...args: any[]): any;
  create(...args: any[]): any;
  create_async(...args: any[]): any;
  create_finish(...args: any[]): any;
  create_readwrite(...args: any[]): any;
  create_readwrite_async(...args: any[]): any;
  create_readwrite_finish(...args: any[]): any;
  g_delete(cancellable: Cancellable | null): boolean;
  delete_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  delete_finish(result: any): boolean;
  dup(...args: any[]): any;
  eject_mountable(...args: any[]): any;
  eject_mountable_finish(...args: any[]): any;
  eject_mountable_with_operation(...args: any[]): any;
  eject_mountable_with_operation_finish(...args: any[]): any;
  enumerate_children(...args: any[]): any;
  enumerate_children_async(...args: any[]): any;
  enumerate_children_finish(...args: any[]): any;
  equal(...args: any[]): any;
  find_enclosing_mount(...args: any[]): any;
  find_enclosing_mount_async(...args: any[]): any;
  find_enclosing_mount_finish(...args: any[]): any;
  get_basename(...args: any[]): any;
  get_child(name: any): any;
  get_child_for_display_name(...args: any[]): any;
  get_parent(...args: any[]): any;
  get_parse_name(...args: any[]): any;
  get_path(...args: any[]): any;
  get_relative_path(...args: any[]): any;
  get_uri(...args: any[]): any;
  get_uri_scheme(...args: any[]): any;
  has_parent(parent: any | null): boolean;
  has_prefix(prefix: any): boolean;
  has_uri_scheme(...args: any[]): any;
  hash(...args: any[]): any;
  is_native(...args: any[]): any;
  load_bytes(cancellable: Cancellable | null, etag_out?: string): GLib.Bytes;
  load_bytes_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  load_bytes_finish(result: any, etag_out?: string): GLib.Bytes;
  load_contents(cancellable: Cancellable | null, contents: number[], length?: number, etag_out?: string): boolean;
  load_contents_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  load_contents_finish(res: any, contents: number[], length?: number, etag_out?: string): boolean;
  load_partial_contents_async(cancellable: Cancellable | null, read_more_callback: FileReadMoreCallback, callback: AsyncReadyCallback | null, user_data: object | null): void;
  load_partial_contents_finish(res: any, contents: number[], length?: number, etag_out?: string): boolean;
  make_directory(...args: any[]): any;
  make_directory_async(...args: any[]): any;
  make_directory_finish(...args: any[]): any;
  make_directory_with_parents(cancellable: Cancellable | null): boolean;
  make_symbolic_link(...args: any[]): any;
  measure_disk_usage(...args: any[]): any;
  measure_disk_usage_async(...args: any[]): any;
  measure_disk_usage_finish(...args: any[]): any;
  monitor(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor;
  monitor_directory(flags: FileMonitorFlags, cancellable: Cancellable | null): FileMonitor;
  monitor_file(...args: any[]): any;
  mount_enclosing_volume(...args: any[]): any;
  mount_enclosing_volume_finish(...args: any[]): any;
  mount_mountable(...args: any[]): any;
  mount_mountable_finish(...args: any[]): any;
  move(...args: any[]): any;
  open_readwrite(...args: any[]): any;
  open_readwrite_async(...args: any[]): any;
  open_readwrite_finish(...args: any[]): any;
  peek_path(): any | null;
  poll_mountable(...args: any[]): any;
  poll_mountable_finish(...args: any[]): any;
  query_default_handler(cancellable: Cancellable | null): any;
  query_default_handler_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  query_default_handler_finish(result: any): any;
  query_exists(cancellable: Cancellable | null): boolean;
  query_file_type(flags: FileQueryInfoFlags, cancellable: Cancellable | null): FileType;
  query_filesystem_info(...args: any[]): any;
  query_filesystem_info_async(...args: any[]): any;
  query_filesystem_info_finish(...args: any[]): any;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  query_settable_attributes(...args: any[]): any;
  query_writable_namespaces(...args: any[]): any;
  read(cancellable: Cancellable | null): FileInputStream;
  read_async(...args: any[]): any;
  read_finish(...args: any[]): any;
  replace(...args: any[]): any;
  replace_async(...args: any[]): any;
  replace_contents(contents: number[], length: number, etag: string | null, make_backup: boolean, flags: FileCreateFlags, new_etag?: string, cancellable?: Cancellable | null): boolean;
  replace_contents_async(contents: number[], length: number, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  replace_contents_bytes_async(contents: GLib.Bytes, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  replace_contents_finish(res: any, new_etag?: string): boolean;
  replace_finish(...args: any[]): any;
  replace_readwrite(...args: any[]): any;
  replace_readwrite_async(...args: any[]): any;
  replace_readwrite_finish(...args: any[]): any;
  resolve_relative_path(...args: any[]): any;
  set_attribute(...args: any[]): any;
  set_attribute_byte_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  set_attribute_int32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  set_attribute_int64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  set_attribute_string(attribute: string, value: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  set_attribute_uint32(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  set_attribute_uint64(attribute: string, value: number, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  set_attributes_async(...args: any[]): any;
  set_attributes_finish(...args: any[]): any;
  set_attributes_from_info(...args: any[]): any;
  set_display_name(...args: any[]): any;
  set_display_name_async(...args: any[]): any;
  set_display_name_finish(...args: any[]): any;
  start_mountable(...args: any[]): any;
  start_mountable_finish(...args: any[]): any;
  stop_mountable(...args: any[]): any;
  stop_mountable_finish(...args: any[]): any;
  supports_thread_contexts(): boolean;
  trash(...args: any[]): any;
  trash_async(...args: any[]): any;
  trash_finish(...args: any[]): any;
  unmount_mountable(...args: any[]): any;
  unmount_mountable_finish(...args: any[]): any;
  unmount_mountable_with_operation(...args: any[]): any;
  unmount_mountable_with_operation_finish(...args: any[]): any;
}
export interface FileDescriptorBased {
  get_fd(...args: any[]): any;
}
export interface Icon {
  equal(...args: any[]): any;
  serialize(...args: any[]): any;
  to_string(): string | null;
}
export interface Initable {
  init(...args: any[]): any;
}
export interface ListModel {
  get_item(...args: any[]): any;
  get_item_type(...args: any[]): any;
  get_n_items(...args: any[]): any;
  get_object(position: number): GObject.Object | null;
  items_changed(position: number, removed: number, added: number): void;
}
export interface LoadableIcon {
  load(...args: any[]): any;
  load_async(...args: any[]): any;
  load_finish(...args: any[]): any;
}
export interface Mount {
  can_eject(...args: any[]): any;
  can_unmount(...args: any[]): any;
  eject(...args: any[]): any;
  eject_finish(...args: any[]): any;
  eject_with_operation(...args: any[]): any;
  eject_with_operation_finish(...args: any[]): any;
  get_default_location(...args: any[]): any;
  get_drive(...args: any[]): any;
  get_icon(...args: any[]): any;
  get_name(...args: any[]): any;
  get_root(...args: any[]): any;
  get_sort_key(...args: any[]): any;
  get_symbolic_icon(...args: any[]): any;
  get_uuid(...args: any[]): any;
  get_volume(...args: any[]): any;
  guess_content_type(...args: any[]): any;
  guess_content_type_finish(...args: any[]): any;
  guess_content_type_sync(...args: any[]): any;
  is_shadowed(): boolean;
  remount(...args: any[]): any;
  remount_finish(...args: any[]): any;
  shadow(): void;
  unmount(...args: any[]): any;
  unmount_finish(...args: any[]): any;
  unmount_with_operation(...args: any[]): any;
  unmount_with_operation_finish(...args: any[]): any;
  unshadow(): void;
}
export interface NetworkMonitor {
  connectivity: NetworkConnectivity;
  'network-available': boolean;
  'network-metered': boolean;
  can_reach(...args: any[]): any;
  can_reach_async(...args: any[]): any;
  can_reach_finish(...args: any[]): any;
  get_connectivity(): NetworkConnectivity;
  get_network_available(): boolean;
  get_network_metered(): boolean;
}
export interface PollableInputStream {
  can_poll(...args: any[]): any;
  create_source(...args: any[]): any;
  is_readable(...args: any[]): any;
  read_nonblocking(...args: any[]): any;
}
export interface PollableOutputStream {
  can_poll(...args: any[]): any;
  create_source(...args: any[]): any;
  is_writable(...args: any[]): any;
  write_nonblocking(...args: any[]): any;
  writev_nonblocking(...args: any[]): any;
}
export interface Proxy {
  connect(...args: any[]): any;
  connect_async(...args: any[]): any;
  connect_finish(...args: any[]): any;
  supports_hostname(...args: any[]): any;
}
export interface ProxyResolver {
  is_supported(...args: any[]): any;
  lookup(...args: any[]): any;
  lookup_async(...args: any[]): any;
  lookup_finish(...args: any[]): any;
}
export interface RemoteActionGroup {
  activate_action_full(...args: any[]): any;
  change_action_state_full(...args: any[]): any;
}
export interface Seekable {
  can_seek(...args: any[]): any;
  can_truncate(...args: any[]): any;
  seek(...args: any[]): any;
  tell(...args: any[]): any;
  truncate(offset: number, cancellable: Cancellable | null): boolean;
}
export interface SocketConnectable {
  enumerate(...args: any[]): any;
  proxy_enumerate(...args: any[]): any;
  to_string(...args: any[]): any;
}
export interface TlsBackend {
  get_certificate_type(): any;
  get_client_connection_type(): any;
  get_default_database(...args: any[]): any;
  get_dtls_client_connection_type(): any;
  get_dtls_server_connection_type(): any;
  get_file_database_type(): any;
  get_server_connection_type(): any;
  set_default_database(database: TlsDatabase | null): void;
  supports_dtls(...args: any[]): any;
  supports_tls(...args: any[]): any;
}
export interface TlsClientConnection {
  'accepted-cas': GLib.List;
  'server-identity': any;
  'use-ssl3': boolean;
  'validation-flags': TlsCertificateFlags;
  copy_session_state(...args: any[]): any;
  get_accepted_cas(): GLib.List;
  get_server_identity(): any;
  get_use_ssl3(): boolean;
  get_validation_flags(): TlsCertificateFlags;
  set_server_identity(identity: any): void;
  set_use_ssl3(use_ssl3: boolean): void;
  set_validation_flags(flags: TlsCertificateFlags): void;
}
export interface TlsFileDatabase {
  anchors: string;
}
export interface TlsServerConnection {
  'authentication-mode': TlsAuthenticationMode;
}
export interface Volume {
  can_eject(...args: any[]): any;
  can_mount(...args: any[]): any;
  eject(...args: any[]): any;
  eject_finish(...args: any[]): any;
  eject_with_operation(...args: any[]): any;
  eject_with_operation_finish(...args: any[]): any;
  enumerate_identifiers(...args: any[]): any;
  get_activation_root(...args: any[]): any;
  get_drive(...args: any[]): any;
  get_icon(...args: any[]): any;
  get_identifier(...args: any[]): any;
  get_mount(...args: any[]): any;
  get_name(...args: any[]): any;
  get_sort_key(...args: any[]): any;
  get_symbolic_icon(...args: any[]): any;
  get_uuid(...args: any[]): any;
  mount(flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  mount_finish(...args: any[]): any;
  should_automount(...args: any[]): any;
}
export class AppInfoMonitor extends GObject.Object {
  static get(): AppInfoMonitor;
}
export class AppLaunchContext extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: AppLaunchContextPrivate;
  get_display(...args: any[]): any;
  get_environment(): any[];
  get_startup_notify_id(...args: any[]): any;
  launch_failed(...args: any[]): any;
  setenv(variable: any, value: any): void;
  unsetenv(variable: any): void;
  get_display(...args: any[]): any;
  get_startup_notify_id(...args: any[]): any;
  launch_failed(...args: any[]): any;
  launched(info: any, platform_data: GLib.Variant): void;
}
export class Application extends GObject.Object {
  constructor(application_id: string | null, flags: ApplicationFlags);
  'action-group': any;
  'application-id': string;
  flags: ApplicationFlags;
  'inactivity-timeout': number;
  'is-busy': boolean;
  'is-registered': boolean;
  'is-remote': boolean;
  'resource-base-path': string;
  static parent_instance: GObject.Object;
  static priv: ApplicationPrivate;
  activate(...args: any[]): any;
  add_main_option(long_name: string, short_name: number, flags: GLib.OptionFlags, arg: GLib.OptionArg, description: string, arg_description: string | null): void;
  add_main_option_entries(entries: GLib.OptionEntry[]): void;
  add_option_group(group: GLib.OptionGroup): void;
  bind_busy_property(object: GObject.Object, property: string): void;
  get_application_id(): string;
  get_dbus_connection(): DBusConnection;
  get_dbus_object_path(): string;
  get_flags(): ApplicationFlags;
  get_inactivity_timeout(): number;
  get_is_busy(): boolean;
  get_is_registered(): boolean;
  get_is_remote(): boolean;
  get_resource_base_path(): string | null;
  hold(): void;
  mark_busy(): void;
  open(...args: any[]): any;
  quit(): void;
  register(cancellable: Cancellable | null): boolean;
  release(): void;
  run(argc: number, argv: any[] | null): number;
  send_notification(id: string | null, notification: Notification): void;
  set_action_group(action_group: any | null): void;
  set_application_id(application_id: string | null): void;
  set_default(): void;
  set_flags(flags: ApplicationFlags): void;
  set_inactivity_timeout(inactivity_timeout: number): void;
  set_option_context_description(description: string | null): void;
  set_option_context_parameter_string(parameter_string: string | null): void;
  set_option_context_summary(summary: string | null): void;
  set_resource_base_path(resource_path: string | null): void;
  unbind_busy_property(object: GObject.Object, property: string): void;
  unmark_busy(): void;
  withdraw_notification(id: string): void;
  activate(...args: any[]): any;
  add_platform_data(builder: GLib.VariantBuilder): void;
  after_emit(platform_data: GLib.Variant): void;
  before_emit(platform_data: GLib.Variant): void;
  command_line(command_line: ApplicationCommandLine): number;
  dbus_register(connection: DBusConnection, object_path: string): boolean;
  dbus_unregister(connection: DBusConnection, object_path: string): void;
  handle_local_options(options: GLib.VariantDict): number;
  local_command_line(_arguments: string[], exit_status: number): boolean;
  name_lost(): boolean;
  open(...args: any[]): any;
  quit_mainloop(): void;
  run_mainloop(): void;
  shutdown(): void;
  startup(): void;
  static get_default(): Application;
  static id_is_valid(application_id: string): boolean;
}
export class ApplicationCommandLine extends GObject.Object {
  arguments: GLib.Variant;
  'is-remote': boolean;
  options: GLib.Variant;
  'platform-data': GLib.Variant;
  static parent_instance: GObject.Object;
  static priv: ApplicationCommandLinePrivate;
  create_file_for_arg(arg: any): any;
  get_arguments(argc?: number): any[];
  get_cwd(): any | null;
  get_environ(): any[];
  get_exit_status(): number;
  get_is_remote(): boolean;
  get_options_dict(): GLib.VariantDict;
  get_platform_data(): GLib.Variant | null;
  get_stdin(...args: any[]): any;
  getenv(name: any): string;
  print(format: string, ...args: any[]): void;
  printerr(format: string, ...args: any[]): void;
  set_exit_status(exit_status: number): void;
  get_stdin(...args: any[]): any;
  print_literal(message: string): void;
  printerr_literal(message: string): void;
}
export class BufferedInputStream extends FilterInputStream {
  constructor(base_stream: InputStream);
  'buffer-size': number;
  static parent_instance: any;
  static priv: BufferedInputStreamPrivate;
  fill(...args: any[]): any;
  fill_async(...args: any[]): any;
  fill_finish(...args: any[]): any;
  get_available(): number;
  get_buffer_size(): number;
  peek(buffer: number[], offset: number, count: number): number;
  peek_buffer(count: number): number[];
  read_byte(cancellable: Cancellable | null): number;
  set_buffer_size(size: number): void;
  fill(...args: any[]): any;
  fill_async(...args: any[]): any;
  fill_finish(...args: any[]): any;
}
export class BufferedOutputStream extends FilterOutputStream {
  constructor(base_stream: OutputStream);
  'auto-grow': boolean;
  'buffer-size': number;
  static parent_instance: any;
  static priv: BufferedOutputStreamPrivate;
  get_auto_grow(): boolean;
  get_buffer_size(): number;
  set_auto_grow(auto_grow: boolean): void;
  set_buffer_size(size: number): void;
}
export class BytesIcon extends GObject.Object {
  constructor(bytes: GLib.Bytes);
  bytes: GLib.Bytes;
  get_bytes(): GLib.Bytes;
}
export class Cancellable extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: CancellablePrivate;
  cancel(): void;
  connect(callback: GObject.Callback, data: object | null, data_destroy_func: GLib.DestroyNotify | null): number;
  disconnect(handler_id: number): void;
  get_fd(): number;
  is_cancelled(): boolean;
  make_pollfd(pollfd: GLib.PollFD): boolean;
  pop_current(): void;
  push_current(): void;
  release_fd(): void;
  reset(): void;
  set_error_if_cancelled(): boolean;
  source_new(): GLib.Source;
  cancelled(): void;
  static get_current(): Cancellable | null;
}
export class CharsetConverter extends GObject.Object {
  constructor(to_charset: string, from_charset: string);
  'from-charset': string;
  'to-charset': string;
  'use-fallback': boolean;
  get_num_fallbacks(): number;
  get_use_fallback(): boolean;
  set_use_fallback(use_fallback: boolean): void;
}
export class ConverterInputStream extends FilterInputStream {
  constructor(base_stream: InputStream, converter: any);
  converter: any;
  static parent_instance: any;
  static priv: ConverterInputStreamPrivate;
  get_converter(): any;
}
export class ConverterOutputStream extends FilterOutputStream {
  constructor(base_stream: OutputStream, converter: any);
  converter: any;
  static parent_instance: any;
  static priv: ConverterOutputStreamPrivate;
  get_converter(): any;
}
export class Credentials extends GObject.Object {
  constructor();
  get_native(native_type: CredentialsType): object | null;
  get_unix_pid(): number;
  get_unix_user(): number;
  is_same_user(other_credentials: Credentials): boolean;
  set_native(native_type: CredentialsType, native: object): void;
  set_unix_user(uid: number): boolean;
  to_string(): string;
}
export class DBusActionGroup extends GObject.Object {
  static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusActionGroup;
}
export class DBusAuthObserver extends GObject.Object {
  constructor();
  allow_mechanism(mechanism: string): boolean;
  authorize_authenticated_peer(stream: IOStream, credentials: Credentials | null): boolean;
}
export class DBusConnection extends GObject.Object {
  constructor(res: any);
  address: string;
  'authentication-observer': DBusAuthObserver;
  capabilities: DBusCapabilityFlags;
  closed: boolean;
  'exit-on-close': boolean;
  flags: DBusConnectionFlags;
  guid: string;
  stream: IOStream;
  'unique-name': string;
  add_filter(filter_function: DBusMessageFilterFunction, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number;
  call(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  call_finish(res: any): GLib.Variant;
  call_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant;
  call_with_unix_fd_list(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  call_with_unix_fd_list_finish(out_fd_list?: UnixFDList, res?: any): GLib.Variant;
  call_with_unix_fd_list_sync(bus_name: string | null, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant | null, reply_type: GLib.VariantType | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, out_fd_list?: UnixFDList, cancellable?: Cancellable | null): GLib.Variant;
  close(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  close_finish(res: any): boolean;
  close_sync(cancellable: Cancellable | null): boolean;
  emit_signal(destination_bus_name: string | null, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant | null): boolean;
  export_action_group(object_path: string, action_group: any): number;
  export_menu_model(object_path: string, menu: MenuModel): number;
  flush(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  flush_finish(res: any): boolean;
  flush_sync(cancellable: Cancellable | null): boolean;
  get_capabilities(): DBusCapabilityFlags;
  get_exit_on_close(): boolean;
  get_flags(): DBusConnectionFlags;
  get_guid(): string;
  get_last_serial(): number;
  get_peer_credentials(): Credentials | null;
  get_stream(): IOStream;
  get_unique_name(): string | null;
  is_closed(): boolean;
  register_object(object_path: string, interface_info: DBusInterfaceInfo, vtable: DBusInterfaceVTable | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number;
  register_object_with_closures(object_path: string, interface_info: DBusInterfaceInfo, method_call_closure: GObject.Closure | null, get_property_closure: GObject.Closure | null, set_property_closure: GObject.Closure | null): number;
  register_subtree(object_path: string, vtable: DBusSubtreeVTable, flags: DBusSubtreeFlags, user_data: object | null, user_data_free_func: GLib.DestroyNotify): number;
  remove_filter(filter_id: number): void;
  send_message(message: DBusMessage, flags: DBusSendMessageFlags, out_serial?: number): boolean;
  send_message_with_reply(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, out_serial?: number, cancellable?: Cancellable | null, callback?: AsyncReadyCallback | null, user_data?: object | null): void;
  send_message_with_reply_finish(res: any): DBusMessage;
  send_message_with_reply_sync(message: DBusMessage, flags: DBusSendMessageFlags, timeout_msec: number, out_serial?: number, cancellable?: Cancellable | null): DBusMessage;
  set_exit_on_close(exit_on_close: boolean): void;
  signal_subscribe(sender: string | null, interface_name: string | null, member: string | null, object_path: string | null, arg0: string | null, flags: DBusSignalFlags, callback: DBusSignalCallback, user_data: object | null, user_data_free_func: GLib.DestroyNotify | null): number;
  signal_unsubscribe(subscription_id: number): void;
  start_message_processing(): void;
  unexport_action_group(export_id: number): void;
  unexport_menu_model(export_id: number): void;
  unregister_object(registration_id: number): boolean;
  unregister_subtree(registration_id: number): boolean;
  static g_new(stream: IOStream, guid: string | null, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  static new_for_address(address: string, flags: DBusConnectionFlags, observer: DBusAuthObserver | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
}
export class DBusInterfaceSkeleton extends GObject.Object {
  'g-flags': DBusInterfaceSkeletonFlags;
  static parent_instance: GObject.Object;
  static priv: DBusInterfaceSkeletonPrivate;
  g_export(connection: DBusConnection, object_path: string): boolean;
  flush(...args: any[]): any;
  get_connection(): DBusConnection;
  get_connections(): GLib.List;
  get_flags(): DBusInterfaceSkeletonFlags;
  get_info(...args: any[]): any;
  get_object_path(): string;
  get_properties(...args: any[]): any;
  get_vtable(...args: any[]): any;
  has_connection(connection: DBusConnection): boolean;
  set_flags(flags: DBusInterfaceSkeletonFlags): void;
  unexport(): void;
  unexport_from_connection(connection: DBusConnection): void;
  flush(...args: any[]): any;
  g_authorize_method(invocation: DBusMethodInvocation): boolean;
  get_info(...args: any[]): any;
  get_properties(...args: any[]): any;
  get_vtable(...args: any[]): any;
}
export class DBusMenuModel extends MenuModel {
  static get(connection: DBusConnection, bus_name: string | null, object_path: string): DBusMenuModel;
}
export class DBusMessage extends GObject.Object {
  constructor();
  locked: boolean;
  copy(): DBusMessage;
  get_arg0(): string;
  get_body(): GLib.Variant;
  get_byte_order(): DBusMessageByteOrder;
  get_destination(): string;
  get_error_name(): string;
  get_flags(): DBusMessageFlags;
  get_header(header_field: DBusMessageHeaderField): GLib.Variant | null;
  get_header_fields(): number[];
  get_interface(): string;
  get_locked(): boolean;
  get_member(): string;
  get_message_type(): DBusMessageType;
  get_num_unix_fds(): number;
  get_path(): string;
  get_reply_serial(): number;
  get_sender(): string;
  get_serial(): number;
  get_signature(): string;
  get_unix_fd_list(): UnixFDList;
  lock(): void;
  new_method_error(error_name: string, error_message_format: string, ...args: any[]): DBusMessage;
  new_method_error_literal(error_name: string, error_message: string): DBusMessage;
  new_method_error_valist(error_name: string, error_message_format: string, var_args: any): DBusMessage;
  new_method_reply(): DBusMessage;
  print(indent: number): string;
  set_body(body: GLib.Variant): void;
  set_byte_order(byte_order: DBusMessageByteOrder): void;
  set_destination(value: string): void;
  set_error_name(value: string): void;
  set_flags(flags: DBusMessageFlags): void;
  set_header(header_field: DBusMessageHeaderField, value: GLib.Variant | null): void;
  set_interface(value: string): void;
  set_member(value: string): void;
  set_message_type(type: DBusMessageType): void;
  set_num_unix_fds(value: number): void;
  set_path(value: string): void;
  set_reply_serial(value: number): void;
  set_sender(value: string): void;
  set_serial(serial: number): void;
  set_signature(value: string): void;
  set_unix_fd_list(fd_list: UnixFDList | null): void;
  to_blob(out_size: number, capabilities: DBusCapabilityFlags): number[];
  to_gerror(): boolean;
  static bytes_needed(blob: number[], blob_len: number): number;
}
export class DBusMethodInvocation extends GObject.Object {
  get_connection(): DBusConnection;
  get_interface_name(): string;
  get_message(): DBusMessage;
  get_method_info(): DBusMethodInfo;
  get_method_name(): string;
  get_object_path(): string;
  get_parameters(): GLib.Variant;
  get_property_info(): DBusPropertyInfo;
  get_sender(): string;
  get_user_data(): object | null;
  return_dbus_error(error_name: string, error_message: string): void;
  return_error(domain: GLib.Quark, code: number, format: string, ...args: any[]): void;
  return_error_literal(domain: GLib.Quark, code: number, message: string): void;
  return_error_valist(domain: GLib.Quark, code: number, format: string, var_args: any): void;
  return_gerror(error: GLib.Error): void;
  return_value(parameters: GLib.Variant | null): void;
  return_value_with_unix_fd_list(parameters: GLib.Variant | null, fd_list: UnixFDList | null): void;
  take_error(error: GLib.Error): void;
}
export class DBusObjectManagerClient extends GObject.Object {
  constructor(res: any);
  'bus-type': BusType;
  connection: DBusConnection;
  flags: DBusObjectManagerClientFlags;
  'get-proxy-type-destroy-notify': object;
  'get-proxy-type-func': object;
  'get-proxy-type-user-data': object;
  name: string;
  'name-owner': string;
  'object-path': string;
  static parent_instance: GObject.Object;
  static priv: DBusObjectManagerClientPrivate;
  get_connection(): DBusConnection;
  get_flags(): DBusObjectManagerClientFlags;
  get_name(): string;
  get_name_owner(): string | null;
  interface_proxy_properties_changed(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string): void;
  interface_proxy_signal(object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant): void;
  static g_new(connection: DBusConnection, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object | null, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  static new_for_bus(bus_type: BusType, flags: DBusObjectManagerClientFlags, name: string, object_path: string, get_proxy_type_func: DBusProxyTypeFunc | null, get_proxy_type_user_data: object | null, get_proxy_type_destroy_notify: GLib.DestroyNotify | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
}
export class DBusObjectManagerServer extends GObject.Object {
  constructor(object_path: string);
  connection: DBusConnection;
  'object-path': string;
  static parent_instance: GObject.Object;
  static priv: DBusObjectManagerServerPrivate;
  g_export(object: DBusObjectSkeleton): void;
  export_uniquely(object: DBusObjectSkeleton): void;
  get_connection(): DBusConnection;
  is_exported(object: DBusObjectSkeleton): boolean;
  set_connection(connection: DBusConnection | null): void;
  unexport(object_path: string): boolean;
}
export class DBusObjectProxy extends GObject.Object {
  constructor(connection: DBusConnection, object_path: string);
  'g-connection': DBusConnection;
  'g-object-path': string;
  static parent_instance: GObject.Object;
  static priv: DBusObjectProxyPrivate;
  get_connection(): DBusConnection;
}
export class DBusObjectSkeleton extends GObject.Object {
  constructor(object_path: string);
  'g-object-path': string;
  static parent_instance: GObject.Object;
  static priv: DBusObjectSkeletonPrivate;
  add_interface(interface_: DBusInterfaceSkeleton): void;
  flush(): void;
  remove_interface(interface_: DBusInterfaceSkeleton): void;
  remove_interface_by_name(interface_name: string): void;
  set_object_path(object_path: string): void;
  authorize_method(interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation): boolean;
}
export class DBusProxy extends GObject.Object {
  constructor(res: any);
  'g-bus-type': BusType;
  'g-connection': DBusConnection;
  'g-default-timeout': number;
  'g-flags': DBusProxyFlags;
  'g-interface-info': DBusInterfaceInfo;
  'g-interface-name': string;
  'g-name': string;
  'g-name-owner': string;
  'g-object-path': string;
  static parent_instance: GObject.Object;
  static priv: DBusProxyPrivate;
  call(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  call_finish(res: any): GLib.Variant;
  call_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, cancellable: Cancellable | null): GLib.Variant;
  call_with_unix_fd_list(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  call_with_unix_fd_list_finish(out_fd_list?: UnixFDList, res?: any): GLib.Variant;
  call_with_unix_fd_list_sync(method_name: string, parameters: GLib.Variant | null, flags: DBusCallFlags, timeout_msec: number, fd_list: UnixFDList | null, out_fd_list?: UnixFDList, cancellable?: Cancellable | null): GLib.Variant;
  get_cached_property(property_name: string): GLib.Variant | null;
  get_cached_property_names(): string[] | null;
  get_connection(): DBusConnection;
  get_default_timeout(): number;
  get_flags(): DBusProxyFlags;
  get_interface_info(): DBusInterfaceInfo | null;
  get_interface_name(): string;
  get_name(): string;
  get_name_owner(): string | null;
  get_object_path(): string;
  set_cached_property(property_name: string, value: GLib.Variant | null): void;
  set_default_timeout(timeout_msec: number): void;
  set_interface_info(info: DBusInterfaceInfo | null): void;
  g_properties_changed(changed_properties: GLib.Variant, invalidated_properties: string): void;
  g_signal(sender_name: string, signal_name: string, parameters: GLib.Variant): void;
  static g_new(connection: DBusConnection, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string | null, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  static new_for_bus(bus_type: BusType, flags: DBusProxyFlags, info: DBusInterfaceInfo | null, name: string, object_path: string, interface_name: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
}
export class DBusServer extends GObject.Object {
  constructor(address: string, flags: DBusServerFlags, guid: string, observer: DBusAuthObserver | null, cancellable: Cancellable | null);
  active: boolean;
  address: string;
  'authentication-observer': DBusAuthObserver;
  'client-address': string;
  flags: DBusServerFlags;
  guid: string;
  get_client_address(): string;
  get_flags(): DBusServerFlags;
  get_guid(): string;
  is_active(): boolean;
  start(): void;
  stop(): void;
}
export class DataInputStream extends BufferedInputStream {
  constructor(base_stream: InputStream);
  'byte-order': DataStreamByteOrder;
  'newline-type': DataStreamNewlineType;
  static parent_instance: any;
  static priv: any;
  get_byte_order(): DataStreamByteOrder;
  get_newline_type(): DataStreamNewlineType;
  read_byte(...args: any[]): any;
  read_int16(cancellable: Cancellable | null): number;
  read_int32(cancellable: Cancellable | null): number;
  read_int64(cancellable: Cancellable | null): number;
  read_line(length?: number, cancellable?: Cancellable | null): number[] | null;
  read_line_async(io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  read_line_finish(result: any, length?: number): number[] | null;
  read_line_finish_utf8(result: any, length?: number): string | null;
  read_line_utf8(length?: number, cancellable?: Cancellable | null): string | null;
  read_uint16(cancellable: Cancellable | null): number;
  read_uint32(cancellable: Cancellable | null): number;
  read_uint64(cancellable: Cancellable | null): number;
  read_until(stop_chars: string, length?: number, cancellable?: Cancellable | null): string;
  read_until_async(stop_chars: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  read_until_finish(result: any, length?: number): string;
  read_upto(stop_chars: string, stop_chars_len: number, length?: number, cancellable?: Cancellable | null): string;
  read_upto_async(stop_chars: string, stop_chars_len: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  read_upto_finish(result: any, length?: number): string;
  set_byte_order(order: DataStreamByteOrder): void;
  set_newline_type(type: DataStreamNewlineType): void;
}
export class DataOutputStream extends FilterOutputStream {
  constructor(base_stream: OutputStream);
  'byte-order': DataStreamByteOrder;
  static parent_instance: any;
  static priv: DataOutputStreamPrivate;
  get_byte_order(): DataStreamByteOrder;
  put_byte(data: number, cancellable: Cancellable | null): boolean;
  put_int16(data: number, cancellable: Cancellable | null): boolean;
  put_int32(data: number, cancellable: Cancellable | null): boolean;
  put_int64(data: number, cancellable: Cancellable | null): boolean;
  put_string(str: string, cancellable: Cancellable | null): boolean;
  put_uint16(data: number, cancellable: Cancellable | null): boolean;
  put_uint32(data: number, cancellable: Cancellable | null): boolean;
  put_uint64(data: number, cancellable: Cancellable | null): boolean;
  set_byte_order(order: DataStreamByteOrder): void;
}
export class DesktopAppInfo extends GObject.Object {
  constructor(desktop_id: string);
  filename: string;
  get_action_name(action_name: string): string;
  get_boolean(key: string): boolean;
  get_categories(): string;
  get_filename(): any;
  get_generic_name(): string;
  get_is_hidden(): boolean;
  get_keywords(): string[];
  get_locale_string(key: string): string | null;
  get_nodisplay(): boolean;
  get_show_in(desktop_env: string | null): boolean;
  get_startup_wm_class(): string;
  get_string(key: string): string;
  get_string_list(key: string, length?: number): string[];
  has_key(key: string): boolean;
  launch_action(action_name: string, launch_context: AppLaunchContext | null): void;
  launch_uris_as_manager(uris: GLib.List, launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc | null, user_setup_data: object | null, pid_callback: DesktopAppLaunchCallback | null, pid_callback_data: object | null): boolean;
  launch_uris_as_manager_with_fds(uris: GLib.List, launch_context: AppLaunchContext | null, spawn_flags: GLib.SpawnFlags, user_setup: GLib.SpawnChildSetupFunc | null, user_setup_data: object | null, pid_callback: DesktopAppLaunchCallback | null, pid_callback_data: object | null, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean;
  list_actions(): string[];
  static get_implementations(_interface: string): GLib.List;
  static search(search_string: string): any[];
  static set_desktop_env(desktop_env: string): void;
}
export class Emblem extends GObject.Object {
  constructor(icon: any);
  icon: GObject.Object;
  origin: EmblemOrigin;
  get_icon(): any;
  get_origin(): EmblemOrigin;
}
export class EmblemedIcon extends GObject.Object {
  constructor(icon: any, emblem: Emblem | null);
  gicon: any;
  static parent_instance: GObject.Object;
  static priv: EmblemedIconPrivate;
  add_emblem(emblem: Emblem): void;
  clear_emblems(): void;
  get_emblems(): GLib.List;
  get_icon(): any;
}
export class FileEnumerator extends GObject.Object {
  container: any;
  static parent_instance: GObject.Object;
  static priv: FileEnumeratorPrivate;
  close(cancellable: Cancellable | null): boolean;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  get_child(info: FileInfo): any;
  get_container(): any;
  has_pending(): boolean;
  is_closed(): boolean;
  iterate(out_info?: FileInfo, out_child?: any, cancellable?: Cancellable | null): boolean;
  next_file(...args: any[]): any;
  next_files_async(...args: any[]): any;
  next_files_finish(...args: any[]): any;
  set_pending(pending: boolean): void;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  close_fn(cancellable: Cancellable | null): boolean;
  next_file(...args: any[]): any;
  next_files_async(...args: any[]): any;
  next_files_finish(...args: any[]): any;
}
export class FileIOStream extends IOStream {
  static parent_instance: any;
  static priv: any;
  get_etag(...args: any[]): any;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  can_seek(): boolean;
  can_truncate(): boolean;
  get_etag(...args: any[]): any;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean;
  tell(): number;
  truncate_fn(size: number, cancellable: Cancellable | null): boolean;
}
export class FileIcon extends GObject.Object {
  constructor(file: any);
  file: any;
  get_file(): any;
}
export class FileInfo extends GObject.Object {
  constructor();
  clear_status(): void;
  copy_into(dest_info: FileInfo): void;
  dup(): FileInfo;
  get_attribute_as_string(attribute: string): string | null;
  get_attribute_boolean(attribute: string): boolean;
  get_attribute_byte_string(attribute: string): string;
  get_attribute_data(attribute: string, type?: FileAttributeType, value_pp?: object, status?: FileAttributeStatus): boolean;
  get_attribute_int32(attribute: string): number;
  get_attribute_int64(attribute: string): number;
  get_attribute_object(attribute: string): GObject.Object;
  get_attribute_status(attribute: string): FileAttributeStatus;
  get_attribute_string(attribute: string): string;
  get_attribute_stringv(attribute: string): string[];
  get_attribute_type(attribute: string): FileAttributeType;
  get_attribute_uint32(attribute: string): number;
  get_attribute_uint64(attribute: string): number;
  get_content_type(): string;
  get_deletion_date(): GLib.DateTime;
  get_display_name(): string;
  get_edit_name(): string;
  get_etag(): string;
  get_file_type(): FileType;
  get_icon(): any;
  get_is_backup(): boolean;
  get_is_hidden(): boolean;
  get_is_symlink(): boolean;
  get_modification_date_time(): GLib.DateTime | null;
  get_modification_time(result: GLib.TimeVal): void;
  get_name(): any;
  get_size(): number;
  get_sort_order(): number;
  get_symbolic_icon(): any;
  get_symlink_target(): string;
  has_attribute(attribute: string): boolean;
  has_namespace(name_space: string): boolean;
  list_attributes(name_space: string | null): string[] | null;
  remove_attribute(attribute: string): void;
  set_attribute(attribute: string, type: FileAttributeType, value_p: object): void;
  set_attribute_boolean(attribute: string, attr_value: boolean): void;
  set_attribute_byte_string(attribute: string, attr_value: string): void;
  set_attribute_int32(attribute: string, attr_value: number): void;
  set_attribute_int64(attribute: string, attr_value: number): void;
  set_attribute_mask(mask: FileAttributeMatcher): void;
  set_attribute_object(attribute: string, attr_value: GObject.Object): void;
  set_attribute_status(attribute: string, status: FileAttributeStatus): boolean;
  set_attribute_string(attribute: string, attr_value: string): void;
  set_attribute_stringv(attribute: string, attr_value: string[]): void;
  set_attribute_uint32(attribute: string, attr_value: number): void;
  set_attribute_uint64(attribute: string, attr_value: number): void;
  set_content_type(content_type: string): void;
  set_display_name(display_name: string): void;
  set_edit_name(edit_name: string): void;
  set_file_type(type: FileType): void;
  set_icon(icon: any): void;
  set_is_hidden(is_hidden: boolean): void;
  set_is_symlink(is_symlink: boolean): void;
  set_modification_date_time(mtime: GLib.DateTime): void;
  set_modification_time(mtime: GLib.TimeVal): void;
  set_name(name: any): void;
  set_size(size: number): void;
  set_sort_order(sort_order: number): void;
  set_symbolic_icon(icon: any): void;
  set_symlink_target(symlink_target: string): void;
  unset_attribute_mask(): void;
}
export class FileInputStream extends InputStream {
  static parent_instance: any;
  static priv: any;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  can_seek(): boolean;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean;
  tell(): number;
}
export class FileMonitor extends GObject.Object {
  cancelled: boolean;
  'rate-limit': number;
  static parent_instance: GObject.Object;
  static priv: FileMonitorPrivate;
  cancel(...args: any[]): any;
  emit_event(child: any, other_file: any, event_type: FileMonitorEvent): void;
  is_cancelled(): boolean;
  set_rate_limit(limit_msecs: number): void;
  cancel(...args: any[]): any;
  changed(file: any, other_file: any, event_type: FileMonitorEvent): void;
}
export class FileOutputStream extends OutputStream {
  static parent_instance: any;
  static priv: any;
  get_etag(...args: any[]): any;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  can_seek(): boolean;
  can_truncate(): boolean;
  get_etag(...args: any[]): any;
  query_info(...args: any[]): any;
  query_info_async(...args: any[]): any;
  query_info_finish(...args: any[]): any;
  seek(offset: number, type: GLib.SeekType, cancellable: Cancellable | null): boolean;
  tell(): number;
  truncate_fn(size: number, cancellable: Cancellable | null): boolean;
}
export class FilenameCompleter extends GObject.Object {
  constructor();
  get_completion_suffix(initial_text: string): string;
  get_completions(initial_text: string): string[];
  set_dirs_only(dirs_only: boolean): void;
  got_completion_data(): void;
}
export class FilterInputStream extends InputStream {
  'base-stream': InputStream;
  'close-base-stream': boolean;
  static parent_instance: any;
  static base_stream: InputStream;
  get_base_stream(): InputStream;
  get_close_base_stream(): boolean;
  set_close_base_stream(close_base: boolean): void;
}
export class FilterOutputStream extends OutputStream {
  'base-stream': OutputStream;
  'close-base-stream': boolean;
  static parent_instance: any;
  static base_stream: OutputStream;
  get_base_stream(): OutputStream;
  get_close_base_stream(): boolean;
  set_close_base_stream(close_base: boolean): void;
}
export class IOModule extends GObject.TypeModule {
  constructor(filename: any);
  load(): void;
  unload(): void;
  static query(): string[];
}
export class IOStream extends GObject.Object {
  closed: boolean;
  'input-stream': InputStream;
  'output-stream': OutputStream;
  static parent_instance: GObject.Object;
  static priv: IOStreamPrivate;
  clear_pending(): void;
  close(cancellable: Cancellable | null): boolean;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  get_input_stream(...args: any[]): any;
  get_output_stream(...args: any[]): any;
  has_pending(): boolean;
  is_closed(): boolean;
  set_pending(): boolean;
  splice_async(stream2: IOStream, flags: IOStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  close_fn(cancellable: Cancellable | null): boolean;
  get_input_stream(...args: any[]): any;
  get_output_stream(...args: any[]): any;
  static splice_finish(result: any): boolean;
}
export class InetAddress extends GObject.Object {
  constructor(family: SocketFamily);
  bytes: object;
  family: SocketFamily;
  'is-any': boolean;
  'is-link-local': boolean;
  'is-loopback': boolean;
  'is-mc-global': boolean;
  'is-mc-link-local': boolean;
  'is-mc-node-local': boolean;
  'is-mc-org-local': boolean;
  'is-mc-site-local': boolean;
  'is-multicast': boolean;
  'is-site-local': boolean;
  static parent_instance: GObject.Object;
  static priv: InetAddressPrivate;
  equal(other_address: InetAddress): boolean;
  get_family(): SocketFamily;
  get_is_any(): boolean;
  get_is_link_local(): boolean;
  get_is_loopback(): boolean;
  get_is_mc_global(): boolean;
  get_is_mc_link_local(): boolean;
  get_is_mc_node_local(): boolean;
  get_is_mc_org_local(): boolean;
  get_is_mc_site_local(): boolean;
  get_is_multicast(): boolean;
  get_is_site_local(): boolean;
  get_native_size(): number;
  to_bytes(...args: any[]): any;
  to_string(...args: any[]): any;
  to_bytes(...args: any[]): any;
  to_string(...args: any[]): any;
}
export class InetAddressMask extends GObject.Object {
  constructor(addr: InetAddress, length: number);
  address: InetAddress;
  family: SocketFamily;
  length: number;
  static parent_instance: GObject.Object;
  static priv: InetAddressMaskPrivate;
  equal(mask2: InetAddressMask): boolean;
  get_address(): InetAddress;
  get_family(): SocketFamily;
  get_length(): number;
  matches(address: InetAddress): boolean;
  to_string(): string;
}
export class InetSocketAddress extends SocketAddress {
  constructor(address: InetAddress, port: number);
  address: InetAddress;
  flowinfo: number;
  port: number;
  'scope-id': number;
  static parent_instance: any;
  static priv: InetSocketAddressPrivate;
  get_address(): InetAddress;
  get_flowinfo(): number;
  get_port(): number;
  get_scope_id(): number;
}
export class InputStream extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: InputStreamPrivate;
  clear_pending(): void;
  close(cancellable: Cancellable | null): boolean;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  has_pending(): boolean;
  is_closed(): boolean;
  read(buffer: number[], count: number, cancellable: Cancellable | null): number;
  read_all(buffer: number[], count: number, bytes_read: number, cancellable: Cancellable | null): boolean;
  read_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  read_all_finish(result: any, bytes_read: number): boolean;
  read_async(...args: any[]): any;
  read_bytes(count: number, cancellable: Cancellable | null): GLib.Bytes;
  read_bytes_async(count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  read_bytes_finish(result: any): GLib.Bytes;
  read_finish(...args: any[]): any;
  set_pending(): boolean;
  skip(...args: any[]): any;
  skip_async(...args: any[]): any;
  skip_finish(...args: any[]): any;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  close_fn(cancellable: Cancellable | null): boolean;
  read_async(...args: any[]): any;
  read_finish(...args: any[]): any;
  read_fn(buffer: object | null, count: number, cancellable: Cancellable | null): number;
  skip(...args: any[]): any;
  skip_async(...args: any[]): any;
  skip_finish(...args: any[]): any;
}
export class ListStore extends GObject.Object {
  constructor(item_type: any);
  'item-type': any;
  append(item: GObject.Object): void;
  insert(position: number, item: GObject.Object): void;
  insert_sorted(item: GObject.Object, compare_func: GLib.CompareDataFunc, user_data: object | null): number;
  remove(position: number): void;
  remove_all(): void;
  sort(compare_func: GLib.CompareDataFunc, user_data: object | null): void;
  splice(position: number, n_removals: number, additions: GObject.Object[], n_additions: number): void;
}
export class MemoryInputStream extends InputStream {
  constructor();
  static parent_instance: any;
  static priv: any;
  add_bytes(bytes: GLib.Bytes): void;
  add_data(data: number[], len: number, destroy: GLib.DestroyNotify | null): void;
}
export class MemoryOutputStream extends OutputStream {
  constructor(data: object | null, size: number, realloc_function: ReallocFunc | null, destroy_function: GLib.DestroyNotify | null);
  data: object;
  'data-size': number;
  'destroy-function': object;
  'realloc-function': object;
  size: number;
  static parent_instance: any;
  static priv: any;
  get_data(): object | null;
  get_data_size(): number;
  get_size(): number;
  steal_as_bytes(): GLib.Bytes;
  steal_data(): object | null;
}
export class Menu extends MenuModel {
  constructor();
  append(label: string | null, detailed_action: string | null): void;
  append_item(item: MenuItem): void;
  append_section(label: string | null, section: MenuModel): void;
  append_submenu(label: string | null, submenu: MenuModel): void;
  freeze(): void;
  insert(position: number, label: string | null, detailed_action: string | null): void;
  insert_item(position: number, item: MenuItem): void;
  insert_section(position: number, label: string | null, section: MenuModel): void;
  insert_submenu(position: number, label: string | null, submenu: MenuModel): void;
  prepend(label: string | null, detailed_action: string | null): void;
  prepend_item(item: MenuItem): void;
  prepend_section(label: string | null, section: MenuModel): void;
  prepend_submenu(label: string | null, submenu: MenuModel): void;
  remove(position: number): void;
  remove_all(): void;
}
export class MenuAttributeIter extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: MenuAttributeIterPrivate;
  get_name(): string;
  get_next(...args: any[]): any;
  get_value(): GLib.Variant;
  next(): boolean;
  get_next(...args: any[]): any;
}
export class MenuItem extends GObject.Object {
  constructor(label: string | null, detailed_action: string | null);
  get_attribute(attribute: string, format_string: string, ...args: any[]): boolean;
  get_attribute_value(attribute: string, expected_type: GLib.VariantType | null): GLib.Variant;
  get_link(link: string): MenuModel;
  set_action_and_target(action: string | null, format_string: string | null, ...args: any[]): void;
  set_action_and_target_value(action: string | null, target_value: GLib.Variant | null): void;
  set_attribute(attribute: string, format_string: string | null, ...args: any[]): void;
  set_attribute_value(attribute: string, value: GLib.Variant | null): void;
  set_detailed_action(detailed_action: string): void;
  set_icon(icon: any): void;
  set_label(label: string | null): void;
  set_link(link: string, model: MenuModel | null): void;
  set_section(section: MenuModel | null): void;
  set_submenu(submenu: MenuModel | null): void;
}
export class MenuLinkIter extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: MenuLinkIterPrivate;
  get_name(): string;
  get_next(...args: any[]): any;
  get_value(): MenuModel;
  next(): boolean;
  get_next(...args: any[]): any;
}
export class MenuModel extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: MenuModelPrivate;
  get_item_attribute(item_index: number, attribute: string, format_string: string, ...args: any[]): boolean;
  get_item_attribute_value(...args: any[]): any;
  get_item_link(...args: any[]): any;
  get_n_items(...args: any[]): any;
  is_mutable(...args: any[]): any;
  items_changed(position: number, removed: number, added: number): void;
  iterate_item_attributes(...args: any[]): any;
  iterate_item_links(...args: any[]): any;
  get_item_attribute_value(...args: any[]): any;
  get_item_attributes(item_index: number, attributes: GLib.HashTable): void;
  get_item_link(...args: any[]): any;
  get_item_links(item_index: number, links: GLib.HashTable): void;
  get_n_items(...args: any[]): any;
  is_mutable(...args: any[]): any;
  iterate_item_attributes(...args: any[]): any;
  iterate_item_links(...args: any[]): any;
}
export class MountOperation extends GObject.Object {
  constructor();
  anonymous: boolean;
  choice: number;
  domain: string;
  'is-tcrypt-hidden-volume': boolean;
  'is-tcrypt-system-volume': boolean;
  password: string;
  'password-save': PasswordSave;
  pim: number;
  username: string;
  static parent_instance: GObject.Object;
  static priv: MountOperationPrivate;
  get_anonymous(): boolean;
  get_choice(): number;
  get_domain(): string;
  get_is_tcrypt_hidden_volume(): boolean;
  get_is_tcrypt_system_volume(): boolean;
  get_password(): string;
  get_password_save(): PasswordSave;
  get_pim(): number;
  get_username(): string;
  reply(...args: any[]): any;
  set_anonymous(anonymous: boolean): void;
  set_choice(choice: number): void;
  set_domain(domain: string): void;
  set_is_tcrypt_hidden_volume(hidden_volume: boolean): void;
  set_is_tcrypt_system_volume(system_volume: boolean): void;
  set_password(password: string): void;
  set_password_save(save: PasswordSave): void;
  set_pim(pim: number): void;
  set_username(username: string): void;
  aborted(): void;
  ask_password(message: string, default_user: string, default_domain: string, flags: AskPasswordFlags): void;
  ask_question(message: string, choices: string[]): void;
  reply(...args: any[]): any;
  show_processes(message: string, processes: GLib.Pid[], choices: string[]): void;
  show_unmount_progress(message: string, time_left: number, bytes_left: number): void;
}
export class NativeSocketAddress extends SocketAddress {
  constructor(native: object | null, len: number);
  static parent_instance: any;
  static priv: NativeSocketAddressPrivate;
}
export class NativeVolumeMonitor extends VolumeMonitor {
  static parent_instance: any;
}
export class NetworkAddress extends GObject.Object {
  constructor(hostname: string, port: number);
  hostname: string;
  port: number;
  scheme: string;
  static parent_instance: GObject.Object;
  static priv: NetworkAddressPrivate;
  get_hostname(): string;
  get_port(): number;
  get_scheme(): string;
  static parse(host_and_port: string, default_port: number): NetworkAddress;
  static parse_uri(uri: string, default_port: number): NetworkAddress;
}
export class NetworkService extends GObject.Object {
  constructor(service: string, protocol: string, domain: string);
  domain: string;
  protocol: string;
  scheme: string;
  service: string;
  static parent_instance: GObject.Object;
  static priv: NetworkServicePrivate;
  get_domain(): string;
  get_protocol(): string;
  get_scheme(): string;
  get_service(): string;
  set_scheme(scheme: string): void;
}
export class Notification extends GObject.Object {
  constructor(title: string);
  add_button(label: string, detailed_action: string): void;
  add_button_with_target(label: string, action: string, target_format: string | null, ...args: any[]): void;
  add_button_with_target_value(label: string, action: string, target: GLib.Variant | null): void;
  set_body(body: string | null): void;
  set_default_action(detailed_action: string): void;
  set_default_action_and_target(action: string, target_format: string | null, ...args: any[]): void;
  set_default_action_and_target_value(action: string, target: GLib.Variant | null): void;
  set_icon(icon: any): void;
  set_priority(priority: NotificationPriority): void;
  set_title(title: string): void;
  set_urgent(urgent: boolean): void;
}
export class OutputStream extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: OutputStreamPrivate;
  clear_pending(): void;
  close(cancellable: Cancellable | null): boolean;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  flush(...args: any[]): any;
  flush_async(...args: any[]): any;
  flush_finish(...args: any[]): any;
  has_pending(): boolean;
  is_closed(): boolean;
  is_closing(): boolean;
  printf(bytes_written?: number, cancellable?: Cancellable | null, error?: GLib.Error, format?: string, ...args: any[]): boolean;
  set_pending(): boolean;
  splice(...args: any[]): any;
  splice_async(...args: any[]): any;
  splice_finish(...args: any[]): any;
  vprintf(bytes_written?: number, cancellable?: Cancellable | null, error?: GLib.Error, format?: string, args?: any): boolean;
  write(buffer: number[], count: number, cancellable: Cancellable | null): number;
  write_all(buffer: number[], count: number, bytes_written?: number, cancellable?: Cancellable | null): boolean;
  write_all_async(buffer: number[], count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  write_all_finish(result: any, bytes_written?: number): boolean;
  write_async(...args: any[]): any;
  write_bytes(bytes: GLib.Bytes, cancellable: Cancellable | null): number;
  write_bytes_async(bytes: GLib.Bytes, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  write_bytes_finish(result: any): number;
  write_finish(...args: any[]): any;
  writev(vectors: OutputVector[], n_vectors: number, bytes_written?: number, cancellable?: Cancellable | null): boolean;
  writev_all(vectors: OutputVector[], n_vectors: number, bytes_written?: number, cancellable?: Cancellable | null): boolean;
  writev_all_async(vectors: OutputVector[], n_vectors: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  writev_all_finish(result: any, bytes_written?: number): boolean;
  writev_async(...args: any[]): any;
  writev_finish(...args: any[]): any;
  close_async(...args: any[]): any;
  close_finish(...args: any[]): any;
  close_fn(cancellable: Cancellable | null): boolean;
  flush(...args: any[]): any;
  flush_async(...args: any[]): any;
  flush_finish(...args: any[]): any;
  splice(...args: any[]): any;
  splice_async(...args: any[]): any;
  splice_finish(...args: any[]): any;
  write_async(...args: any[]): any;
  write_finish(...args: any[]): any;
  write_fn(buffer: number[] | null, count: number, cancellable: Cancellable | null): number;
  writev_async(...args: any[]): any;
  writev_finish(...args: any[]): any;
  writev_fn(vectors: OutputVector[], n_vectors: number, bytes_written?: number, cancellable?: Cancellable | null): boolean;
}
export class Permission extends GObject.Object {
  allowed: boolean;
  'can-acquire': boolean;
  'can-release': boolean;
  static parent_instance: GObject.Object;
  static priv: PermissionPrivate;
  acquire(...args: any[]): any;
  acquire_async(...args: any[]): any;
  acquire_finish(...args: any[]): any;
  get_allowed(): boolean;
  get_can_acquire(): boolean;
  get_can_release(): boolean;
  impl_update(allowed: boolean, can_acquire: boolean, can_release: boolean): void;
  release(...args: any[]): any;
  release_async(...args: any[]): any;
  release_finish(...args: any[]): any;
  acquire(...args: any[]): any;
  acquire_async(...args: any[]): any;
  acquire_finish(...args: any[]): any;
  release(...args: any[]): any;
  release_async(...args: any[]): any;
  release_finish(...args: any[]): any;
}
export class PropertyAction extends GObject.Object {
  constructor(name: string, object: GObject.Object, property_name: string);
  enabled: boolean;
  'invert-boolean': boolean;
  name: string;
  object: GObject.Object;
  'parameter-type': GLib.VariantType;
  'property-name': string;
  state: GLib.Variant;
  'state-type': GLib.VariantType;
}
export class ProxyAddress extends InetSocketAddress {
  constructor(inetaddr: InetAddress, port: number, protocol: string, dest_hostname: string, dest_port: number, username: string | null, password: string | null);
  'destination-hostname': string;
  'destination-port': number;
  'destination-protocol': string;
  password: string;
  protocol: string;
  uri: string;
  username: string;
  static parent_instance: any;
  static priv: any;
  get_destination_hostname(): string;
  get_destination_port(): number;
  get_destination_protocol(): string;
  get_password(): string;
  get_protocol(): string;
  get_uri(): string;
  get_username(): string;
}
export class ProxyAddressEnumerator extends SocketAddressEnumerator {
  connectable: any;
  'default-port': number;
  'proxy-resolver': any;
  uri: string;
  static parent_instance: any;
  static priv: ProxyAddressEnumeratorPrivate;
}
export class Resolver extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: ResolverPrivate;
  lookup_by_address(...args: any[]): any;
  lookup_by_address_async(...args: any[]): any;
  lookup_by_address_finish(...args: any[]): any;
  lookup_by_name(...args: any[]): any;
  lookup_by_name_async(...args: any[]): any;
  lookup_by_name_finish(...args: any[]): any;
  lookup_by_name_with_flags(...args: any[]): any;
  lookup_by_name_with_flags_async(...args: any[]): any;
  lookup_by_name_with_flags_finish(...args: any[]): any;
  lookup_records(...args: any[]): any;
  lookup_records_async(...args: any[]): any;
  lookup_records_finish(...args: any[]): any;
  lookup_service(...args: any[]): any;
  lookup_service_async(...args: any[]): any;
  lookup_service_finish(...args: any[]): any;
  set_default(): void;
  lookup_by_address(...args: any[]): any;
  lookup_by_address_async(...args: any[]): any;
  lookup_by_address_finish(...args: any[]): any;
  lookup_by_name(...args: any[]): any;
  lookup_by_name_async(...args: any[]): any;
  lookup_by_name_finish(...args: any[]): any;
  lookup_by_name_with_flags(...args: any[]): any;
  lookup_by_name_with_flags_async(...args: any[]): any;
  lookup_by_name_with_flags_finish(...args: any[]): any;
  lookup_records(...args: any[]): any;
  lookup_records_async(...args: any[]): any;
  lookup_records_finish(...args: any[]): any;
  lookup_service(...args: any[]): any;
  lookup_service_async(...args: any[]): any;
  lookup_service_finish(...args: any[]): any;
  reload(): void;
  static free_addresses(addresses: GLib.List): void;
  static free_targets(targets: GLib.List): void;
  static get_default(): Resolver;
}
export class Settings extends GObject.Object {
  constructor(schema_id: string);
  backend: SettingsBackend;
  'delay-apply': boolean;
  'has-unapplied': boolean;
  path: string;
  schema: string;
  'schema-id': string;
  'settings-schema': SettingsSchema;
  static parent_instance: GObject.Object;
  static priv: SettingsPrivate;
  apply(): void;
  bind(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags): void;
  bind_with_mapping(key: string, object: GObject.Object, property: string, flags: SettingsBindFlags, get_mapping: SettingsBindGetMapping, set_mapping: SettingsBindSetMapping, user_data: object | null, destroy: GLib.DestroyNotify): void;
  bind_writable(key: string, object: GObject.Object, property: string, inverted: boolean): void;
  create_action(key: string): any;
  delay(): void;
  get(key: string, format: string, ...args: any[]): void;
  get_boolean(key: string): boolean;
  get_child(name: string): Settings;
  get_default_value(key: string): GLib.Variant | null;
  get_double(key: string): number;
  get_enum(key: string): number;
  get_flags(key: string): number;
  get_has_unapplied(): boolean;
  get_int(key: string): number;
  get_int64(key: string): number;
  get_mapped(key: string, mapping: SettingsGetMapping, user_data: object | null): object | null;
  get_range(key: string): GLib.Variant;
  get_string(key: string): string;
  get_strv(key: string): string[];
  get_uint(key: string): number;
  get_uint64(key: string): number;
  get_user_value(key: string): GLib.Variant | null;
  get_value(key: string): GLib.Variant;
  is_writable(name: string): boolean;
  list_children(): string[];
  list_keys(): string[];
  range_check(key: string, value: GLib.Variant): boolean;
  reset(key: string): void;
  revert(): void;
  set(key: string, format: string, ...args: any[]): boolean;
  set_boolean(key: string, value: boolean): boolean;
  set_double(key: string, value: number): boolean;
  set_enum(key: string, value: number): boolean;
  set_flags(key: string, value: number): boolean;
  set_int(key: string, value: number): boolean;
  set_int64(key: string, value: number): boolean;
  set_string(key: string, value: string): boolean;
  set_strv(key: string, value: string[] | null): boolean;
  set_uint(key: string, value: number): boolean;
  set_uint64(key: string, value: number): boolean;
  set_value(key: string, value: GLib.Variant): boolean;
  change_event(keys: GLib.Quark, n_keys: number): boolean;
  changed(key: string): void;
  writable_change_event(key: GLib.Quark): boolean;
  writable_changed(key: string): void;
  static list_relocatable_schemas(): string[];
  static list_schemas(): string[];
  static sync(): void;
  static unbind(object: GObject.Object, property: string): void;
}
export class SettingsBackend extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: SettingsBackendPrivate;
  changed(key: string, origin_tag: object | null): void;
  changed_tree(tree: GLib.Tree, origin_tag: object | null): void;
  keys_changed(path: string, items: string[], origin_tag: object | null): void;
  path_changed(path: string, origin_tag: object | null): void;
  path_writable_changed(path: string): void;
  writable_changed(key: string): void;
  get_permission(path: string): Permission;
  get_writable(key: string): boolean;
  read(key: string, expected_type: GLib.VariantType, default_value: boolean): GLib.Variant;
  read_user_value(key: string, expected_type: GLib.VariantType): GLib.Variant;
  reset(key: string, origin_tag: object | null): void;
  subscribe(name: string): void;
  sync(): void;
  unsubscribe(name: string): void;
  write(key: string, value: GLib.Variant, origin_tag: object | null): boolean;
  write_tree(tree: GLib.Tree, origin_tag: object | null): boolean;
  static flatten_tree(tree: GLib.Tree, path: string, keys: string[], values?: GLib.Variant[]): void;
  static get_default(): SettingsBackend;
}
export class SimpleAction extends GObject.Object {
  constructor(name: string, parameter_type: GLib.VariantType | null);
  enabled: boolean;
  name: string;
  'parameter-type': GLib.VariantType;
  state: GLib.Variant;
  'state-type': GLib.VariantType;
  set_enabled(enabled: boolean): void;
  set_state(value: GLib.Variant): void;
  set_state_hint(state_hint: GLib.Variant | null): void;
}
export class SimpleActionGroup extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: SimpleActionGroupPrivate;
  add_entries(entries: ActionEntry[], n_entries: number, user_data: object | null): void;
  insert(action: any): void;
  lookup(action_name: string): any;
  remove(action_name: string): void;
}
export class SimpleAsyncResult extends GObject.Object {
  constructor(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object | null, source_tag: object | null);
  complete(): void;
  complete_in_idle(): void;
  get_op_res_gboolean(): boolean;
  get_op_res_gpointer(): object | null;
  get_op_res_gssize(): number;
  get_source_tag(): object | null;
  propagate_error(): boolean;
  run_in_thread(func: SimpleAsyncThreadFunc, io_priority: number, cancellable: Cancellable | null): void;
  set_check_cancellable(check_cancellable: Cancellable | null): void;
  set_error(domain: GLib.Quark, code: number, format: string, ...args: any[]): void;
  set_error_va(domain: GLib.Quark, code: number, format: string, args: any): void;
  set_from_error(error: GLib.Error): void;
  set_handle_cancellation(handle_cancellation: boolean): void;
  set_op_res_gboolean(op_res: boolean): void;
  set_op_res_gpointer(op_res: object | null, destroy_op_res: GLib.DestroyNotify): void;
  set_op_res_gssize(op_res: number): void;
  take_error(error: GLib.Error): void;
  static is_valid(result: any, source: GObject.Object | null, source_tag: object | null): boolean;
}
export class SimpleIOStream extends IOStream {
  constructor(input_stream: InputStream, output_stream: OutputStream);
  'input-stream': any;
  'output-stream': any;
}
export class SimplePermission extends Permission {
  constructor(allowed: boolean);
}
export class SimpleProxyResolver extends GObject.Object {
  'default-proxy': string;
  'ignore-hosts': string[];
  static parent_instance: GObject.Object;
  static priv: SimpleProxyResolverPrivate;
  set_default_proxy(default_proxy: string): void;
  set_ignore_hosts(ignore_hosts: string): void;
  set_uri_proxy(uri_scheme: string, proxy: string): void;
  static g_new(default_proxy: string | null, ignore_hosts: string | null): any;
}
export class Socket extends GObject.Object {
  constructor(family: SocketFamily, type: SocketType, protocol: SocketProtocol);
  blocking: boolean;
  broadcast: boolean;
  family: SocketFamily;
  fd: number;
  keepalive: boolean;
  'listen-backlog': number;
  'local-address': SocketAddress;
  'multicast-loopback': boolean;
  'multicast-ttl': number;
  protocol: SocketProtocol;
  'remote-address': SocketAddress;
  timeout: number;
  ttl: number;
  type: SocketType;
  static parent_instance: GObject.Object;
  static priv: SocketPrivate;
  accept(cancellable: Cancellable | null): Socket;
  bind(address: SocketAddress, allow_reuse: boolean): boolean;
  check_connect_result(): boolean;
  close(): boolean;
  condition_check(condition: GLib.IOCondition): GLib.IOCondition;
  condition_timed_wait(condition: GLib.IOCondition, timeout_us: number, cancellable: Cancellable | null): boolean;
  condition_wait(condition: GLib.IOCondition, cancellable: Cancellable | null): boolean;
  connect(address: SocketAddress, cancellable: Cancellable | null): boolean;
  connection_factory_create_connection(): SocketConnection;
  create_source(condition: GLib.IOCondition, cancellable: Cancellable | null): GLib.Source;
  get_available_bytes(): number;
  get_blocking(): boolean;
  get_broadcast(): boolean;
  get_credentials(): Credentials;
  get_family(): SocketFamily;
  get_fd(): number;
  get_keepalive(): boolean;
  get_listen_backlog(): number;
  get_local_address(): SocketAddress;
  get_multicast_loopback(): boolean;
  get_multicast_ttl(): number;
  get_option(level: number, optname: number, value: number): boolean;
  get_protocol(): SocketProtocol;
  get_remote_address(): SocketAddress;
  get_socket_type(): SocketType;
  get_timeout(): number;
  get_ttl(): number;
  is_closed(): boolean;
  is_connected(): boolean;
  join_multicast_group(group: InetAddress, source_specific: boolean, iface: string | null): boolean;
  join_multicast_group_ssm(group: InetAddress, source_specific: InetAddress | null, iface: string | null): boolean;
  leave_multicast_group(group: InetAddress, source_specific: boolean, iface: string | null): boolean;
  leave_multicast_group_ssm(group: InetAddress, source_specific: InetAddress | null, iface: string | null): boolean;
  listen(): boolean;
  receive(buffer: number[], size: number, cancellable: Cancellable | null): number;
  receive_from(address?: SocketAddress, buffer?: number[], size?: number, cancellable?: Cancellable | null): number;
  receive_message(address?: SocketAddress, vectors?: InputVector[], num_vectors?: number, messages?: SocketControlMessage[], num_messages?: number, flags?: number, cancellable?: Cancellable | null): number;
  receive_messages(messages: InputMessage[], num_messages: number, flags: number, cancellable: Cancellable | null): number;
  receive_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable | null): number;
  send(buffer: number[], size: number, cancellable: Cancellable | null): number;
  send_message(address: SocketAddress | null, vectors: OutputVector[], num_vectors: number, messages: SocketControlMessage[] | null, num_messages: number, flags: number, cancellable: Cancellable | null): number;
  send_message_with_timeout(address: SocketAddress | null, vectors: OutputVector[], num_vectors: number, messages: SocketControlMessage[] | null, num_messages: number, flags: number, timeout_us: number, bytes_written?: number, cancellable?: Cancellable | null): PollableReturn;
  send_messages(messages: OutputMessage[], num_messages: number, flags: number, cancellable: Cancellable | null): number;
  send_to(address: SocketAddress | null, buffer: number[], size: number, cancellable: Cancellable | null): number;
  send_with_blocking(buffer: number[], size: number, blocking: boolean, cancellable: Cancellable | null): number;
  set_blocking(blocking: boolean): void;
  set_broadcast(broadcast: boolean): void;
  set_keepalive(keepalive: boolean): void;
  set_listen_backlog(backlog: number): void;
  set_multicast_loopback(loopback: boolean): void;
  set_multicast_ttl(ttl: number): void;
  set_option(level: number, optname: number, value: number): boolean;
  set_timeout(timeout: number): void;
  set_ttl(ttl: number): void;
  shutdown(shutdown_read: boolean, shutdown_write: boolean): boolean;
  speaks_ipv4(): boolean;
}
export class SocketAddress extends GObject.Object {
  constructor(native: object, len: number);
  family: SocketFamily;
  static parent_instance: GObject.Object;
  get_family(...args: any[]): any;
  get_native_size(...args: any[]): any;
  to_native(...args: any[]): any;
  get_family(...args: any[]): any;
  get_native_size(...args: any[]): any;
  to_native(...args: any[]): any;
}
export class SocketAddressEnumerator extends GObject.Object {
  static parent_instance: GObject.Object;
  next(...args: any[]): any;
  next_async(...args: any[]): any;
  next_finish(...args: any[]): any;
  next(...args: any[]): any;
  next_async(...args: any[]): any;
  next_finish(...args: any[]): any;
}
export class SocketClient extends GObject.Object {
  constructor();
  'enable-proxy': boolean;
  family: SocketFamily;
  'local-address': SocketAddress;
  protocol: SocketProtocol;
  'proxy-resolver': any;
  timeout: number;
  tls: boolean;
  'tls-validation-flags': TlsCertificateFlags;
  type: SocketType;
  static parent_instance: GObject.Object;
  static priv: SocketClientPrivate;
  add_application_proxy(protocol: string): void;
  connect(connectable: any, cancellable: Cancellable | null): SocketConnection;
  connect_async(connectable: any, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  connect_finish(result: any): SocketConnection;
  connect_to_host(host_and_port: string, default_port: number, cancellable: Cancellable | null): SocketConnection;
  connect_to_host_async(host_and_port: string, default_port: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  connect_to_host_finish(result: any): SocketConnection;
  connect_to_service(domain: string, service: string, cancellable: Cancellable | null): SocketConnection;
  connect_to_service_async(domain: string, service: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  connect_to_service_finish(result: any): SocketConnection;
  connect_to_uri(uri: string, default_port: number, cancellable: Cancellable | null): SocketConnection;
  connect_to_uri_async(uri: string, default_port: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  connect_to_uri_finish(result: any): SocketConnection;
  get_enable_proxy(): boolean;
  get_family(): SocketFamily;
  get_local_address(): SocketAddress;
  get_protocol(): SocketProtocol;
  get_proxy_resolver(): any;
  get_socket_type(): SocketType;
  get_timeout(): number;
  get_tls(): boolean;
  get_tls_validation_flags(): TlsCertificateFlags;
  set_enable_proxy(enable: boolean): void;
  set_family(family: SocketFamily): void;
  set_local_address(address: SocketAddress | null): void;
  set_protocol(protocol: SocketProtocol): void;
  set_proxy_resolver(proxy_resolver: any | null): void;
  set_socket_type(type: SocketType): void;
  set_timeout(timeout: number): void;
  set_tls(tls: boolean): void;
  set_tls_validation_flags(flags: TlsCertificateFlags): void;
  event(event: SocketClientEvent, connectable: any, connection: IOStream): void;
}
export class SocketConnection extends IOStream {
  socket: Socket;
  static parent_instance: any;
  static priv: any;
  connect(address: SocketAddress, cancellable: Cancellable | null): boolean;
  connect_async(address: SocketAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  connect_finish(result: any): boolean;
  get_local_address(): SocketAddress;
  get_remote_address(): SocketAddress;
  get_socket(): Socket;
  is_connected(): boolean;
  static factory_lookup_type(family: SocketFamily, type: SocketType, protocol_id: number): any;
  static factory_register_type(g_type: any, family: SocketFamily, type: SocketType, protocol: number): void;
}
export class SocketControlMessage extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: SocketControlMessagePrivate;
  get_level(...args: any[]): any;
  get_msg_type(): number;
  get_size(...args: any[]): any;
  serialize(...args: any[]): any;
  get_level(...args: any[]): any;
  get_size(...args: any[]): any;
  get_type(): number;
  serialize(...args: any[]): any;
  static deserialize(level: number, type: number, size: number, data: number[]): SocketControlMessage;
}
export class SocketListener extends GObject.Object {
  constructor();
  'listen-backlog': number;
  static parent_instance: GObject.Object;
  static priv: SocketListenerPrivate;
  accept(source_object?: GObject.Object, cancellable?: Cancellable | null): SocketConnection;
  accept_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  accept_finish(result: any, source_object?: GObject.Object): SocketConnection;
  accept_socket(source_object?: GObject.Object, cancellable?: Cancellable | null): Socket;
  accept_socket_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  accept_socket_finish(result: any, source_object?: GObject.Object): Socket;
  add_address(address: SocketAddress, type: SocketType, protocol: SocketProtocol, source_object: GObject.Object | null, effective_address?: SocketAddress): boolean;
  add_any_inet_port(source_object: GObject.Object | null): number;
  add_inet_port(port: number, source_object: GObject.Object | null): boolean;
  add_socket(socket: Socket, source_object: GObject.Object | null): boolean;
  close(): void;
  set_backlog(listen_backlog: number): void;
  changed(): void;
  event(event: SocketListenerEvent, socket: Socket): void;
}
export class SocketService extends SocketListener {
  constructor();
  active: boolean;
  static parent_instance: any;
  static priv: any;
  is_active(): boolean;
  start(): void;
  stop(): void;
  incoming(connection: SocketConnection, source_object: GObject.Object): boolean;
}
export class Subprocess extends GObject.Object {
  constructor(flags: SubprocessFlags, error: GLib.Error | null, argv0: string, ...args: any[]);
  argv: string[];
  flags: SubprocessFlags;
  communicate(stdin_buf: GLib.Bytes | null, cancellable: Cancellable | null, stdout_buf?: GLib.Bytes, stderr_buf?: GLib.Bytes): boolean;
  communicate_async(stdin_buf: GLib.Bytes | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  communicate_finish(result: any, stdout_buf?: GLib.Bytes, stderr_buf?: GLib.Bytes): boolean;
  communicate_utf8(stdin_buf: string | null, cancellable: Cancellable | null, stdout_buf?: string, stderr_buf?: string): boolean;
  communicate_utf8_async(stdin_buf: string | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  communicate_utf8_finish(result: any, stdout_buf?: string, stderr_buf?: string): boolean;
  force_exit(): void;
  get_exit_status(): number;
  get_identifier(): string | null;
  get_if_exited(): boolean;
  get_if_signaled(): boolean;
  get_status(): number;
  get_stderr_pipe(): InputStream;
  get_stdin_pipe(): OutputStream;
  get_stdout_pipe(): InputStream;
  get_successful(): boolean;
  get_term_sig(): number;
  send_signal(signal_num: number): void;
  wait(cancellable: Cancellable | null): boolean;
  wait_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  wait_check(cancellable: Cancellable | null): boolean;
  wait_check_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  wait_check_finish(result: any): boolean;
  wait_finish(result: any): boolean;
}
export class SubprocessLauncher extends GObject.Object {
  constructor(flags: SubprocessFlags);
  flags: SubprocessFlags;
  getenv(variable: any): any;
  set_child_setup(child_setup: GLib.SpawnChildSetupFunc, user_data: object | null, destroy_notify: GLib.DestroyNotify): void;
  set_cwd(cwd: any): void;
  set_environ(env: any[]): void;
  set_flags(flags: SubprocessFlags): void;
  set_stderr_file_path(path: any | null): void;
  set_stdin_file_path(path: string): void;
  set_stdout_file_path(path: any | null): void;
  setenv(variable: any, value: any, overwrite: boolean): void;
  spawn(error: GLib.Error, argv0: string, ...args: any[]): Subprocess;
  spawnv(argv: any[]): Subprocess;
  take_fd(source_fd: number, target_fd: number): void;
  take_stderr_fd(fd: number): void;
  take_stdin_fd(fd: number): void;
  take_stdout_fd(fd: number): void;
  unsetenv(variable: any): void;
}
export class Task extends GObject.Object {
  constructor(source_object: GObject.Object | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, callback_data: object | null);
  completed: boolean;
  attach_source(source: GLib.Source, callback: GLib.SourceFunc): void;
  get_cancellable(): Cancellable;
  get_check_cancellable(): boolean;
  get_completed(): boolean;
  get_context(): GLib.MainContext;
  get_name(): string | null;
  get_priority(): number;
  get_return_on_cancel(): boolean;
  get_source_object(): GObject.Object | null;
  get_source_tag(): object | null;
  get_task_data(): object | null;
  had_error(): boolean;
  propagate_boolean(): boolean;
  propagate_int(): number;
  propagate_pointer(): object | null;
  return_boolean(result: boolean): void;
  return_error(error: GLib.Error): void;
  return_error_if_cancelled(): boolean;
  return_int(result: number): void;
  return_new_error(domain: GLib.Quark, code: number, format: string, ...args: any[]): void;
  return_pointer(result: object | null, result_destroy: GLib.DestroyNotify | null): void;
  run_in_thread(task_func: TaskThreadFunc): void;
  run_in_thread_sync(task_func: TaskThreadFunc): void;
  set_check_cancellable(check_cancellable: boolean): void;
  set_name(name: string | null): void;
  set_priority(priority: number): void;
  set_return_on_cancel(return_on_cancel: boolean): boolean;
  set_source_tag(source_tag: object | null): void;
  set_task_data(task_data: object | null, task_data_destroy: GLib.DestroyNotify | null): void;
  static is_valid(result: any, source_object: GObject.Object | null): boolean;
  static report_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, callback_data: object | null, source_tag: object | null, error: GLib.Error): void;
  static report_new_error(source_object: GObject.Object | null, callback: AsyncReadyCallback | null, callback_data: object | null, source_tag: object | null, domain: GLib.Quark, code: number, format: string, ...args: any[]): void;
}
export class TcpConnection extends SocketConnection {
  'graceful-disconnect': boolean;
  static parent_instance: any;
  static priv: any;
  get_graceful_disconnect(): boolean;
  set_graceful_disconnect(graceful_disconnect: boolean): void;
}
export class TcpWrapperConnection extends TcpConnection {
  constructor(base_io_stream: IOStream, socket: Socket);
  'base-io-stream': IOStream;
  static parent_instance: any;
  static priv: any;
  get_base_io_stream(): IOStream;
}
export class TestDBus extends GObject.Object {
  constructor(flags: TestDBusFlags);
  flags: TestDBusFlags;
  add_service_dir(path: string): void;
  down(): void;
  get_bus_address(): string | null;
  get_flags(): TestDBusFlags;
  stop(): void;
  up(): void;
  static unset(): void;
}
export class ThemedIcon extends GObject.Object {
  constructor(iconname: string);
  name: string;
  names: string[];
  'use-default-fallbacks': boolean;
  append_name(iconname: string): void;
  get_names(): string[];
  prepend_name(iconname: string): void;
}
export class ThreadedSocketService extends SocketService {
  constructor(max_threads: number);
  'max-threads': number;
  static parent_instance: any;
  static priv: any;
  run(connection: SocketConnection, source_object: GObject.Object): boolean;
}
export class TlsCertificate extends GObject.Object {
  constructor(file: any);
  certificate: number[];
  'certificate-pem': string;
  issuer: TlsCertificate;
  'private-key': number[];
  'private-key-pem': string;
  static parent_instance: GObject.Object;
  static priv: TlsCertificatePrivate;
  get_issuer(): TlsCertificate;
  is_same(cert_two: TlsCertificate): boolean;
  verify(...args: any[]): any;
  verify(...args: any[]): any;
  static list_new_from_file(file: any): GLib.List;
}
export class TlsConnection extends IOStream {
  'advertised-protocols': string[];
  'base-io-stream': IOStream;
  certificate: TlsCertificate;
  database: TlsDatabase;
  interaction: TlsInteraction;
  'negotiated-protocol': string;
  'peer-certificate': TlsCertificate;
  'peer-certificate-errors': TlsCertificateFlags;
  'rehandshake-mode': TlsRehandshakeMode;
  'require-close-notify': boolean;
  'use-system-certdb': boolean;
  static parent_instance: any;
  static priv: any;
  emit_accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
  get_certificate(): TlsCertificate;
  get_database(): TlsDatabase;
  get_interaction(): TlsInteraction;
  get_negotiated_protocol(): string | null;
  get_peer_certificate(): TlsCertificate;
  get_peer_certificate_errors(): TlsCertificateFlags;
  get_rehandshake_mode(): TlsRehandshakeMode;
  get_require_close_notify(): boolean;
  get_use_system_certdb(): boolean;
  handshake(...args: any[]): any;
  handshake_async(...args: any[]): any;
  handshake_finish(...args: any[]): any;
  set_advertised_protocols(protocols: string[] | null): void;
  set_certificate(certificate: TlsCertificate): void;
  set_database(database: TlsDatabase): void;
  set_interaction(interaction: TlsInteraction | null): void;
  set_rehandshake_mode(mode: TlsRehandshakeMode): void;
  set_require_close_notify(require_close_notify: boolean): void;
  set_use_system_certdb(use_system_certdb: boolean): void;
  accept_certificate(peer_cert: TlsCertificate, errors: TlsCertificateFlags): boolean;
  handshake(...args: any[]): any;
  handshake_async(...args: any[]): any;
  handshake_finish(...args: any[]): any;
}
export class TlsDatabase extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: TlsDatabasePrivate;
  create_certificate_handle(...args: any[]): any;
  lookup_certificate_for_handle(...args: any[]): any;
  lookup_certificate_for_handle_async(...args: any[]): any;
  lookup_certificate_for_handle_finish(...args: any[]): any;
  lookup_certificate_issuer(...args: any[]): any;
  lookup_certificate_issuer_async(...args: any[]): any;
  lookup_certificate_issuer_finish(...args: any[]): any;
  lookup_certificates_issued_by(...args: any[]): any;
  lookup_certificates_issued_by_async(...args: any[]): any;
  lookup_certificates_issued_by_finish(...args: any[]): any;
  verify_chain(...args: any[]): any;
  verify_chain_async(...args: any[]): any;
  verify_chain_finish(...args: any[]): any;
  create_certificate_handle(...args: any[]): any;
  lookup_certificate_for_handle(...args: any[]): any;
  lookup_certificate_for_handle_async(...args: any[]): any;
  lookup_certificate_for_handle_finish(...args: any[]): any;
  lookup_certificate_issuer(...args: any[]): any;
  lookup_certificate_issuer_async(...args: any[]): any;
  lookup_certificate_issuer_finish(...args: any[]): any;
  lookup_certificates_issued_by(...args: any[]): any;
  lookup_certificates_issued_by_async(...args: any[]): any;
  lookup_certificates_issued_by_finish(...args: any[]): any;
  verify_chain(...args: any[]): any;
  verify_chain_async(...args: any[]): any;
  verify_chain_finish(...args: any[]): any;
}
export class TlsInteraction extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: TlsInteractionPrivate;
  ask_password(...args: any[]): any;
  ask_password_async(...args: any[]): any;
  ask_password_finish(...args: any[]): any;
  invoke_ask_password(password: TlsPassword, cancellable: Cancellable | null): TlsInteractionResult;
  invoke_request_certificate(connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null): TlsInteractionResult;
  request_certificate(...args: any[]): any;
  request_certificate_async(...args: any[]): any;
  request_certificate_finish(...args: any[]): any;
  ask_password(...args: any[]): any;
  ask_password_async(...args: any[]): any;
  ask_password_finish(...args: any[]): any;
  request_certificate(...args: any[]): any;
  request_certificate_async(...args: any[]): any;
  request_certificate_finish(...args: any[]): any;
}
export class TlsPassword extends GObject.Object {
  constructor(flags: TlsPasswordFlags, description: string);
  description: string;
  flags: TlsPasswordFlags;
  warning: string;
  static parent_instance: GObject.Object;
  static priv: TlsPasswordPrivate;
  get_description(): string;
  get_flags(): TlsPasswordFlags;
  get_value(...args: any[]): any;
  get_warning(): string;
  set_description(description: string): void;
  set_flags(flags: TlsPasswordFlags): void;
  set_value(...args: any[]): any;
  set_value_full(value: number[], length: number, destroy: GLib.DestroyNotify | null): void;
  set_warning(warning: string): void;
  get_default_warning(): string;
  get_value(...args: any[]): any;
  set_value(...args: any[]): any;
}
export class UnixConnection extends SocketConnection {
  static parent_instance: any;
  static priv: any;
  receive_credentials(cancellable: Cancellable | null): Credentials;
  receive_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  receive_credentials_finish(result: any): Credentials;
  receive_fd(cancellable: Cancellable | null): number;
  send_credentials(cancellable: Cancellable | null): boolean;
  send_credentials_async(cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
  send_credentials_finish(result: any): boolean;
  send_fd(fd: number, cancellable: Cancellable | null): boolean;
}
export class UnixCredentialsMessage extends SocketControlMessage {
  constructor();
  credentials: Credentials;
  static parent_instance: any;
  static priv: any;
  get_credentials(): Credentials;
  static is_supported(): boolean;
}
export class UnixFDList extends GObject.Object {
  constructor();
  static parent_instance: GObject.Object;
  static priv: UnixFDListPrivate;
  append(fd: number): number;
  get(index_: number): number;
  get_length(): number;
  peek_fds(length?: number): number[];
  steal_fds(length?: number): number[];
}
export class UnixFDMessage extends SocketControlMessage {
  constructor();
  'fd-list': UnixFDList;
  static parent_instance: any;
  static priv: any;
  append_fd(fd: number): boolean;
  get_fd_list(): UnixFDList;
  steal_fds(length?: number): number[];
}
export class UnixInputStream extends InputStream {
  constructor(fd: number, close_fd: boolean);
  'close-fd': boolean;
  fd: number;
  static parent_instance: any;
  static priv: any;
  get_close_fd(): boolean;
  get_fd(): number;
  set_close_fd(close_fd: boolean): void;
}
export class UnixMountMonitor extends GObject.Object {
  constructor();
  set_rate_limit(limit_msec: number): void;
  static get(): UnixMountMonitor;
}
export class UnixOutputStream extends OutputStream {
  constructor(fd: number, close_fd: boolean);
  'close-fd': boolean;
  fd: number;
  static parent_instance: any;
  static priv: any;
  get_close_fd(): boolean;
  get_fd(): number;
  set_close_fd(close_fd: boolean): void;
}
export class UnixSocketAddress extends SocketAddress {
  constructor(path: string);
  abstract: boolean;
  'address-type': UnixSocketAddressType;
  path: string;
  'path-as-array': number[];
  static parent_instance: any;
  static priv: UnixSocketAddressPrivate;
  get_address_type(): UnixSocketAddressType;
  get_is_abstract(): boolean;
  get_path(): string;
  get_path_len(): number;
  static abstract_names_supported(): boolean;
}
export class Vfs extends GObject.Object {
  static parent_instance: GObject.Object;
  get_file_for_path(...args: any[]): any;
  get_file_for_uri(...args: any[]): any;
  get_supported_uri_schemes(...args: any[]): any;
  is_active(...args: any[]): any;
  parse_name(...args: any[]): any;
  register_uri_scheme(scheme: string, uri_func: VfsFileLookupFunc | null, uri_data: object | null, uri_destroy: GLib.DestroyNotify | null, parse_name_func: VfsFileLookupFunc | null, parse_name_data: object | null, parse_name_destroy: GLib.DestroyNotify | null): boolean;
  unregister_uri_scheme(scheme: string): boolean;
  add_writable_namespaces(list: FileAttributeInfoList): void;
  deserialize_icon(value: GLib.Variant): any;
  get_file_for_path(...args: any[]): any;
  get_file_for_uri(...args: any[]): any;
  get_supported_uri_schemes(...args: any[]): any;
  is_active(...args: any[]): any;
  local_file_add_info(filename: string, device: number, attribute_matcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extra_data: object | null, free_extra_data: GLib.DestroyNotify): void;
  local_file_moved(source: string, dest: string): void;
  local_file_removed(filename: string): void;
  local_file_set_attributes(filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null): boolean;
  parse_name(...args: any[]): any;
  static get_default(): Vfs;
  static get_local(): Vfs;
}
export class VolumeMonitor extends GObject.Object {
  static parent_instance: GObject.Object;
  static priv: object;
  get_connected_drives(...args: any[]): any;
  get_mount_for_uuid(...args: any[]): any;
  get_mounts(...args: any[]): any;
  get_volume_for_uuid(...args: any[]): any;
  get_volumes(...args: any[]): any;
  drive_changed(drive: any): void;
  drive_connected(drive: any): void;
  drive_disconnected(drive: any): void;
  drive_eject_button(drive: any): void;
  drive_stop_button(drive: any): void;
  get_connected_drives(...args: any[]): any;
  get_mount_for_uuid(...args: any[]): any;
  get_mounts(...args: any[]): any;
  get_volume_for_uuid(...args: any[]): any;
  get_volumes(...args: any[]): any;
  mount_added(mount: any): void;
  mount_changed(mount: any): void;
  mount_pre_unmount(mount: any): void;
  mount_removed(mount: any): void;
  volume_added(volume: any): void;
  volume_changed(volume: any): void;
  volume_removed(volume: any): void;
  static adopt_orphan_mount(mount: any): any;
  static get(): VolumeMonitor;
}
export class ZlibCompressor extends GObject.Object {
  constructor(format: ZlibCompressorFormat, level: number);
  'file-info': FileInfo;
  format: ZlibCompressorFormat;
  level: number;
  get_file_info(): FileInfo;
  set_file_info(file_info: FileInfo | null): void;
}
export class ZlibDecompressor extends GObject.Object {
  constructor(format: ZlibCompressorFormat);
  'file-info': FileInfo;
  format: ZlibCompressorFormat;
  get_file_info(): FileInfo;
}
export class ActionEntry {
  static name: string;
  static activate: (action: SimpleAction, parameter: GLib.Variant, user_data: object | null) => void;
  static parameter_type: string;
  static state: string;
  static change_state: (action: SimpleAction, value: GLib.Variant, user_data: object | null) => void;
  static padding: number[];
}
export class ActionGroupInterface {
  static g_iface: GObject.TypeInterface;
  static has_action: (action_group: any, action_name: string) => boolean;
  static list_actions: (action_group: any) => string[];
  static get_action_enabled: (action_group: any, action_name: string) => boolean;
  static get_action_parameter_type: (action_group: any, action_name: string) => GLib.VariantType | null;
  static get_action_state_type: (action_group: any, action_name: string) => GLib.VariantType | null;
  static get_action_state_hint: (action_group: any, action_name: string) => GLib.Variant | null;
  static get_action_state: (action_group: any, action_name: string) => GLib.Variant | null;
  static change_action_state: (action_group: any, action_name: string, value: GLib.Variant) => void;
  static activate_action: (action_group: any, action_name: string, parameter: GLib.Variant | null) => void;
  static action_added: (action_group: any, action_name: string) => void;
  static action_removed: (action_group: any, action_name: string) => void;
  static action_enabled_changed: (action_group: any, action_name: string, enabled: boolean) => void;
  static action_state_changed: (action_group: any, action_name: string, state: GLib.Variant) => void;
  static query_action: (action_group: any, action_name: string, enabled: boolean, parameter_type: GLib.VariantType, state_type: GLib.VariantType, state_hint: GLib.Variant, state: GLib.Variant) => boolean;
}
export class ActionInterface {
  static g_iface: GObject.TypeInterface;
  static get_name: (action: any) => string;
  static get_parameter_type: (action: any) => GLib.VariantType | null;
  static get_state_type: (action: any) => GLib.VariantType | null;
  static get_state_hint: (action: any) => GLib.Variant | null;
  static get_enabled: (action: any) => boolean;
  static get_state: (action: any) => GLib.Variant;
  static change_state: (action: any, value: GLib.Variant) => void;
  static activate: (action: any, parameter: GLib.Variant | null) => void;
}
export class ActionMapInterface {
  static g_iface: GObject.TypeInterface;
  static lookup_action: (action_map: any, action_name: string) => any;
  static add_action: (action_map: any, action: any) => void;
  static remove_action: (action_map: any, action_name: string) => void;
}
export class AppInfoIface {
  static g_iface: GObject.TypeInterface;
  static dup: (appinfo: any) => any;
  static equal: (appinfo1: any, appinfo2: any) => boolean;
  static get_id: (appinfo: any) => string;
  static get_name: (appinfo: any) => string;
  static get_description: (appinfo: any) => string;
  static get_executable: (appinfo: any) => string;
  static get_icon: (appinfo: any) => any;
  static launch: (appinfo: any, files: GLib.List | null, context: AppLaunchContext | null) => boolean;
  static supports_uris: (appinfo: any) => boolean;
  static supports_files: (appinfo: any) => boolean;
  static launch_uris: (appinfo: any, uris: GLib.List | null, context: AppLaunchContext | null) => boolean;
  static should_show: (appinfo: any) => boolean;
  static set_as_default_for_type: (appinfo: any, content_type: string) => boolean;
  static set_as_default_for_extension: (appinfo: any, extension: any) => boolean;
  static add_supports_type: (appinfo: any, content_type: string) => boolean;
  static can_remove_supports_type: (appinfo: any) => boolean;
  static remove_supports_type: (appinfo: any, content_type: string) => boolean;
  static can_delete: (appinfo: any) => boolean;
  static do_delete: (appinfo: any) => boolean;
  static get_commandline: (appinfo: any) => string;
  static get_display_name: (appinfo: any) => string;
  static set_as_last_used_for_type: (appinfo: any, content_type: string) => boolean;
  static get_supported_types: (appinfo: any) => string[];
  static launch_uris_async: (appinfo: any, uris: GLib.List | null, context: AppLaunchContext | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static launch_uris_finish: (appinfo: any, result: any) => boolean;
}
export class AppLaunchContextClass {
  static parent_class: GObject.ObjectClass;
  static get_display: (context: AppLaunchContext, info: any, files: GLib.List) => string;
  static get_startup_notify_id: (context: AppLaunchContext, info: any, files: GLib.List) => string;
  static launch_failed: (context: AppLaunchContext, startup_notify_id: string) => void;
  static launched: (context: AppLaunchContext, info: any, platform_data: GLib.Variant) => void;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
}
export class AppLaunchContextPrivate {}
export class ApplicationClass {
  static parent_class: GObject.ObjectClass;
  static startup: (application: Application) => void;
  static activate: (application: Application) => void;
  static open: (application: Application, files: any[], n_files: number, hint: string) => void;
  static command_line: (application: Application, command_line: ApplicationCommandLine) => number;
  static local_command_line: (application: Application, _arguments: string[], exit_status: number) => boolean;
  static before_emit: (application: Application, platform_data: GLib.Variant) => void;
  static after_emit: (application: Application, platform_data: GLib.Variant) => void;
  static add_platform_data: (application: Application, builder: GLib.VariantBuilder) => void;
  static quit_mainloop: (application: Application) => void;
  static run_mainloop: (application: Application) => void;
  static shutdown: (application: Application) => void;
  static dbus_register: (application: Application, connection: DBusConnection, object_path: string) => boolean;
  static dbus_unregister: (application: Application, connection: DBusConnection, object_path: string) => void;
  static handle_local_options: (application: Application, options: GLib.VariantDict) => number;
  static name_lost: (application: Application) => boolean;
  static padding: object[];
}
export class ApplicationCommandLineClass {
  static parent_class: GObject.ObjectClass;
  static print_literal: (cmdline: ApplicationCommandLine, message: string) => void;
  static printerr_literal: (cmdline: ApplicationCommandLine, message: string) => void;
  static get_stdin: (cmdline: ApplicationCommandLine) => InputStream;
  static padding: object[];
}
export class ApplicationCommandLinePrivate {}
export class ApplicationPrivate {}
export class AsyncInitableIface {
  static g_iface: GObject.TypeInterface;
  static init_async: (initable: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static init_finish: (initable: any, res: any) => boolean;
}
export class AsyncResultIface {
  static g_iface: GObject.TypeInterface;
  static get_user_data: (res: any) => object | null;
  static get_source_object: (res: any) => GObject.Object | null;
  static is_tagged: (res: any, source_tag: object | null) => boolean;
}
export class BufferedInputStreamClass {
  static parent_class: FilterInputStreamClass;
  static fill: (stream: BufferedInputStream, count: number, cancellable: Cancellable | null) => number;
  static fill_async: (stream: BufferedInputStream, count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static fill_finish: (stream: BufferedInputStream, result: any) => number;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class BufferedInputStreamPrivate {}
export class BufferedOutputStreamClass {
  static parent_class: FilterOutputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
}
export class BufferedOutputStreamPrivate {}
export class CancellableClass {
  static parent_class: GObject.ObjectClass;
  static cancelled: (cancellable: Cancellable | null) => void;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class CancellablePrivate {}
export class CharsetConverterClass {
  static parent_class: GObject.ObjectClass;
}
export class ConverterIface {
  static g_iface: GObject.TypeInterface;
  static convert: (converter: any, inbuf: number[] | null, inbuf_size: number, outbuf: number[] | null, outbuf_size: number, flags: ConverterFlags, bytes_read: number, bytes_written: number) => ConverterResult;
  static reset: (converter: any) => void;
}
export class ConverterInputStreamClass {
  static parent_class: FilterInputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class ConverterInputStreamPrivate {}
export class ConverterOutputStreamClass {
  static parent_class: FilterOutputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class ConverterOutputStreamPrivate {}
export class CredentialsClass {}
export class DBusAnnotationInfo {
  static ref_count: number;
  static key: string;
  static value: string;
  static annotations: DBusAnnotationInfo[];
  ref(): DBusAnnotationInfo;
  unref(): void;
  static lookup(annotations: DBusAnnotationInfo[] | null, name: string): string;
}
export class DBusArgInfo {
  static ref_count: number;
  static name: string;
  static signature: string;
  static annotations: DBusAnnotationInfo[];
  ref(): DBusArgInfo;
  unref(): void;
}
export class DBusErrorEntry {
  static error_code: number;
  static dbus_error_name: string;
}
export class DBusInterfaceIface {
  static parent_iface: GObject.TypeInterface;
  static get_info: (interface_: any) => DBusInterfaceInfo;
  static get_object: (interface_: any) => any;
  static set_object: (interface_: any, object: any | null) => void;
  static dup_object: (interface_: any) => any;
}
export class DBusInterfaceInfo {
  static ref_count: number;
  static name: string;
  static methods: DBusMethodInfo[];
  static signals: DBusSignalInfo[];
  static properties: DBusPropertyInfo[];
  static annotations: DBusAnnotationInfo[];
  cache_build(): void;
  cache_release(): void;
  generate_xml(indent: number, string_builder: GLib.String): void;
  lookup_method(name: string): DBusMethodInfo;
  lookup_property(name: string): DBusPropertyInfo;
  lookup_signal(name: string): DBusSignalInfo;
  ref(): DBusInterfaceInfo;
  unref(): void;
}
export class DBusInterfaceSkeletonClass {
  static parent_class: GObject.ObjectClass;
  static get_info: (interface_: DBusInterfaceSkeleton) => DBusInterfaceInfo;
  static get_vtable: (interface_: DBusInterfaceSkeleton) => DBusInterfaceVTable;
  static get_properties: (interface_: DBusInterfaceSkeleton) => GLib.Variant;
  static flush: (interface_: DBusInterfaceSkeleton) => void;
  static vfunc_padding: object[];
  static g_authorize_method: (interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean;
  static signal_padding: object[];
}
export class DBusInterfaceSkeletonPrivate {}
export class DBusInterfaceVTable {
  static method_call: DBusInterfaceMethodCallFunc;
  static get_property: DBusInterfaceGetPropertyFunc;
  static set_property: DBusInterfaceSetPropertyFunc;
  static padding: object[];
}
export class DBusMethodInfo {
  static ref_count: number;
  static name: string;
  static in_args: DBusArgInfo[];
  static out_args: DBusArgInfo[];
  static annotations: DBusAnnotationInfo[];
  ref(): DBusMethodInfo;
  unref(): void;
}
export class DBusNodeInfo {
  constructor(xml_data: string);
  static ref_count: number;
  static path: string;
  static interfaces: DBusInterfaceInfo[];
  static nodes: DBusNodeInfo[];
  static annotations: DBusAnnotationInfo[];
  generate_xml(indent: number, string_builder: GLib.String): void;
  lookup_interface(name: string): DBusInterfaceInfo;
  ref(): DBusNodeInfo;
  unref(): void;
}
export class DBusObjectIface {
  static parent_iface: GObject.TypeInterface;
  static get_object_path: (object: any) => string;
  static get_interfaces: (object: any) => GLib.List;
  static get_interface: (object: any, interface_name: string) => any;
  static interface_added: (object: any, interface_: any) => void;
  static interface_removed: (object: any, interface_: any) => void;
}
export class DBusObjectManagerClientClass {
  static parent_class: GObject.ObjectClass;
  static interface_proxy_signal: (manager: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void;
  static interface_proxy_properties_changed: (manager: DBusObjectManagerClient, object_proxy: DBusObjectProxy, interface_proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string) => void;
  static padding: object[];
}
export class DBusObjectManagerClientPrivate {}
export class DBusObjectManagerIface {
  static parent_iface: GObject.TypeInterface;
  static get_object_path: (manager: any) => string;
  static get_objects: (manager: any) => GLib.List;
  static get_object: (manager: any, object_path: string) => any;
  static get_interface: (manager: any, object_path: string, interface_name: string) => any;
  static object_added: (manager: any, object: any) => void;
  static object_removed: (manager: any, object: any) => void;
  static interface_added: (manager: any, object: any, interface_: any) => void;
  static interface_removed: (manager: any, object: any, interface_: any) => void;
}
export class DBusObjectManagerServerClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class DBusObjectManagerServerPrivate {}
export class DBusObjectProxyClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class DBusObjectProxyPrivate {}
export class DBusObjectSkeletonClass {
  static parent_class: GObject.ObjectClass;
  static authorize_method: (object: DBusObjectSkeleton, interface_: DBusInterfaceSkeleton, invocation: DBusMethodInvocation) => boolean;
  static padding: object[];
}
export class DBusObjectSkeletonPrivate {}
export class DBusPropertyInfo {
  static ref_count: number;
  static name: string;
  static signature: string;
  static flags: DBusPropertyInfoFlags;
  static annotations: DBusAnnotationInfo[];
  ref(): DBusPropertyInfo;
  unref(): void;
}
export class DBusProxyClass {
  static parent_class: GObject.ObjectClass;
  static g_properties_changed: (proxy: DBusProxy, changed_properties: GLib.Variant, invalidated_properties: string) => void;
  static g_signal: (proxy: DBusProxy, sender_name: string, signal_name: string, parameters: GLib.Variant) => void;
  static padding: object[];
}
export class DBusProxyPrivate {}
export class DBusSignalInfo {
  static ref_count: number;
  static name: string;
  static args: DBusArgInfo[];
  static annotations: DBusAnnotationInfo[];
  ref(): DBusSignalInfo;
  unref(): void;
}
export class DBusSubtreeVTable {
  static enumerate: DBusSubtreeEnumerateFunc;
  static introspect: DBusSubtreeIntrospectFunc;
  static dispatch: DBusSubtreeDispatchFunc;
  static padding: object[];
}
export class DataInputStreamClass {
  static parent_class: BufferedInputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class DataInputStreamPrivate {}
export class DataOutputStreamClass {
  static parent_class: FilterOutputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class DataOutputStreamPrivate {}
export class DatagramBasedInterface {
  static g_iface: GObject.TypeInterface;
  static receive_messages: (datagram_based: any, messages: InputMessage[], num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null) => number;
  static send_messages: (datagram_based: any, messages: OutputMessage[], num_messages: number, flags: number, timeout: number, cancellable: Cancellable | null) => number;
  static create_source: (datagram_based: any, condition: GLib.IOCondition, cancellable: Cancellable | null) => GLib.Source;
  static condition_check: (datagram_based: any, condition: GLib.IOCondition) => GLib.IOCondition;
  static condition_wait: (datagram_based: any, condition: GLib.IOCondition, timeout: number, cancellable: Cancellable | null) => boolean;
}
export class DesktopAppInfoClass {
  static parent_class: GObject.ObjectClass;
}
export class DesktopAppInfoLookupIface {
  static g_iface: GObject.TypeInterface;
  static get_default_for_uri_scheme: (lookup: any, uri_scheme: string) => any;
}
export class DriveIface {
  static g_iface: GObject.TypeInterface;
  static changed: (drive: any) => void;
  static disconnected: (drive: any) => void;
  static eject_button: (drive: any) => void;
  static get_name: (drive: any) => string;
  static get_icon: (drive: any) => any;
  static has_volumes: (drive: any) => boolean;
  static get_volumes: (drive: any) => GLib.List;
  static is_media_removable: (drive: any) => boolean;
  static has_media: (drive: any) => boolean;
  static is_media_check_automatic: (drive: any) => boolean;
  static can_eject: (drive: any) => boolean;
  static can_poll_for_media: (drive: any) => boolean;
  static eject: (drive: any, flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_finish: (drive: any, result: any) => boolean;
  static poll_for_media: (drive: any, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static poll_for_media_finish: (drive: any, result: any) => boolean;
  static get_identifier: (drive: any, kind: string) => string | null;
  static enumerate_identifiers: (drive: any) => string[];
  static get_start_stop_type: (drive: any) => DriveStartStopType;
  static can_start: (drive: any) => boolean;
  static can_start_degraded: (drive: any) => boolean;
  static start: (drive: any, flags: DriveStartFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static start_finish: (drive: any, result: any) => boolean;
  static can_stop: (drive: any) => boolean;
  static stop: (drive: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static stop_finish: (drive: any, result: any) => boolean;
  static stop_button: (drive: any) => void;
  static eject_with_operation: (drive: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_with_operation_finish: (drive: any, result: any) => boolean;
  static get_sort_key: (drive: any) => string | null;
  static get_symbolic_icon: (drive: any) => any;
  static is_removable: (drive: any) => boolean;
}
export class DtlsClientConnectionInterface {
  static g_iface: GObject.TypeInterface;
}
export class DtlsConnectionInterface {
  static g_iface: GObject.TypeInterface;
  static accept_certificate: (connection: any, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean;
  static handshake: (conn: any, cancellable: Cancellable | null) => boolean;
  static handshake_async: (conn: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static handshake_finish: (conn: any, result: any) => boolean;
  static shutdown: (conn: any, shutdown_read: boolean, shutdown_write: boolean, cancellable: Cancellable | null) => boolean;
  static shutdown_async: (conn: any, shutdown_read: boolean, shutdown_write: boolean, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static shutdown_finish: (conn: any, result: any) => boolean;
  static set_advertised_protocols: (conn: any, protocols: string[] | null) => void;
  static get_negotiated_protocol: (conn: any) => string | null;
}
export class DtlsServerConnectionInterface {
  static g_iface: GObject.TypeInterface;
}
export class EmblemClass {}
export class EmblemedIconClass {
  static parent_class: GObject.ObjectClass;
}
export class EmblemedIconPrivate {}
export class FileAttributeInfo {
  static name: string;
  static type: FileAttributeType;
  static flags: FileAttributeInfoFlags;
}
export class FileAttributeInfoList {
  constructor();
  static infos: FileAttributeInfo;
  static n_infos: number;
  add(name: string, type: FileAttributeType, flags: FileAttributeInfoFlags): void;
  dup(): FileAttributeInfoList;
  lookup(name: string): FileAttributeInfo;
  ref(): FileAttributeInfoList;
  unref(): void;
}
export class FileAttributeMatcher {
  constructor(attributes: string);
  enumerate_namespace(ns: string): boolean;
  enumerate_next(): string;
  matches(attribute: string): boolean;
  matches_only(attribute: string): boolean;
  ref(): FileAttributeMatcher;
  subtract(subtract: FileAttributeMatcher): FileAttributeMatcher;
  to_string(): string;
  unref(): void;
}
export class FileDescriptorBasedIface {
  static g_iface: GObject.TypeInterface;
  static get_fd: (fd_based: any) => number;
}
export class FileEnumeratorClass {
  static parent_class: GObject.ObjectClass;
  static next_file: (enumerator: FileEnumerator, cancellable: Cancellable | null) => FileInfo | null;
  static close_fn: (enumerator: FileEnumerator, cancellable: Cancellable | null) => boolean;
  static next_files_async: (enumerator: FileEnumerator, num_files: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static next_files_finish: (enumerator: FileEnumerator, result: any) => GLib.List;
  static close_async: (enumerator: FileEnumerator, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static close_finish: (enumerator: FileEnumerator, result: any) => boolean;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
  static _g_reserved7: () => void;
}
export class FileEnumeratorPrivate {}
export class FileIOStreamClass {
  static parent_class: IOStreamClass;
  static tell: (stream: FileIOStream) => number;
  static can_seek: (stream: FileIOStream) => boolean;
  static seek: (stream: FileIOStream, offset: number, type: GLib.SeekType, cancellable: Cancellable | null) => boolean;
  static can_truncate: (stream: FileIOStream) => boolean;
  static truncate_fn: (stream: FileIOStream, size: number, cancellable: Cancellable | null) => boolean;
  static query_info: (stream: FileIOStream, attributes: string, cancellable: Cancellable | null) => FileInfo;
  static query_info_async: (stream: FileIOStream, attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static query_info_finish: (stream: FileIOStream, result: any) => FileInfo;
  static get_etag: (stream: FileIOStream) => string;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class FileIOStreamPrivate {}
export class FileIconClass {}
export class FileIface {
  static g_iface: GObject.TypeInterface;
  static dup: (file: any) => any;
  static hash: (file: any) => number;
  static equal: (file1: any, file2: any) => boolean;
  static is_native: (file: any) => boolean;
  static has_uri_scheme: (file: any, uri_scheme: string) => boolean;
  static get_uri_scheme: (file: any) => string;
  static get_basename: (file: any) => string;
  static get_path: (file: any) => string;
  static get_uri: (file: any) => string;
  static get_parse_name: (file: any) => string;
  static get_parent: (file: any) => any | null;
  static prefix_matches: (prefix: any, file: any) => boolean;
  static get_relative_path: (parent: any, descendant: any) => string;
  static resolve_relative_path: (file: any, relative_path: any) => any;
  static get_child_for_display_name: (file: any, display_name: string) => any;
  static enumerate_children: (file: any, attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null) => FileEnumerator;
  static enumerate_children_async: (file: any, attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static enumerate_children_finish: (file: any, res: any) => FileEnumerator;
  static query_info: (file: any, attributes: string, flags: FileQueryInfoFlags, cancellable: Cancellable | null) => FileInfo;
  static query_info_async: (file: any, attributes: string, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static query_info_finish: (file: any, res: any) => FileInfo;
  static query_filesystem_info: (file: any, attributes: string, cancellable: Cancellable | null) => FileInfo;
  static query_filesystem_info_async: (file: any, attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static query_filesystem_info_finish: (file: any, res: any) => FileInfo;
  static find_enclosing_mount: (file: any, cancellable: Cancellable | null) => any;
  static find_enclosing_mount_async: (file: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static find_enclosing_mount_finish: (file: any, res: any) => any;
  static set_display_name: (file: any, display_name: string, cancellable: Cancellable | null) => any;
  static set_display_name_async: (file: any, display_name: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static set_display_name_finish: (file: any, res: any) => any;
  static query_settable_attributes: (file: any, cancellable: Cancellable | null) => FileAttributeInfoList;
  static _query_settable_attributes_async: () => void;
  static _query_settable_attributes_finish: () => void;
  static query_writable_namespaces: (file: any, cancellable: Cancellable | null) => FileAttributeInfoList;
  static _query_writable_namespaces_async: () => void;
  static _query_writable_namespaces_finish: () => void;
  static set_attribute: (file: any, attribute: string, type: FileAttributeType, value_p: object | null, flags: FileQueryInfoFlags, cancellable: Cancellable | null) => boolean;
  static set_attributes_from_info: (file: any, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null) => boolean;
  static set_attributes_async: (file: any, info: FileInfo, flags: FileQueryInfoFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static set_attributes_finish: (file: any, result: any, info: FileInfo) => boolean;
  static read_fn: (file: any, cancellable: Cancellable | null) => FileInputStream;
  static read_async: (file: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static read_finish: (file: any, res: any) => FileInputStream;
  static append_to: (file: any, flags: FileCreateFlags, cancellable: Cancellable | null) => FileOutputStream;
  static append_to_async: (file: any, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static append_to_finish: (file: any, res: any) => FileOutputStream;
  static create: (file: any, flags: FileCreateFlags, cancellable: Cancellable | null) => FileOutputStream;
  static create_async: (file: any, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static create_finish: (file: any, res: any) => FileOutputStream;
  static replace: (file: any, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null) => FileOutputStream;
  static replace_async: (file: any, etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static replace_finish: (file: any, res: any) => FileOutputStream;
  static delete_file: (file: any, cancellable: Cancellable | null) => boolean;
  static delete_file_async: (file: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static delete_file_finish: (file: any, result: any) => boolean;
  static trash: (file: any, cancellable: Cancellable | null) => boolean;
  static trash_async: (file: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static trash_finish: (file: any, result: any) => boolean;
  static make_directory: (file: any, cancellable: Cancellable | null) => boolean;
  static make_directory_async: (file: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static make_directory_finish: (file: any, result: any) => boolean;
  static make_symbolic_link: (file: any, symlink_value: any, cancellable: Cancellable | null) => boolean;
  static _make_symbolic_link_async: () => void;
  static _make_symbolic_link_finish: () => void;
  static copy: (source: any, destination: any, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object | null) => boolean;
  static copy_async: (source: any, destination: any, flags: FileCopyFlags, io_priority: number, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static copy_finish: (file: any, res: any) => boolean;
  static move: (source: any, destination: any, flags: FileCopyFlags, cancellable: Cancellable | null, progress_callback: FileProgressCallback | null, progress_callback_data: object | null) => boolean;
  static _move_async: () => void;
  static _move_finish: () => void;
  static mount_mountable: (file: any, flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static mount_mountable_finish: (file: any, result: any) => any;
  static unmount_mountable: (file: any, flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static unmount_mountable_finish: (file: any, result: any) => boolean;
  static eject_mountable: (file: any, flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_mountable_finish: (file: any, result: any) => boolean;
  static mount_enclosing_volume: (location: any, flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static mount_enclosing_volume_finish: (location: any, result: any) => boolean;
  static monitor_dir: (file: any, flags: FileMonitorFlags, cancellable: Cancellable | null) => FileMonitor;
  static monitor_file: (file: any, flags: FileMonitorFlags, cancellable: Cancellable | null) => FileMonitor;
  static open_readwrite: (file: any, cancellable: Cancellable | null) => FileIOStream;
  static open_readwrite_async: (file: any, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static open_readwrite_finish: (file: any, res: any) => FileIOStream;
  static create_readwrite: (file: any, flags: FileCreateFlags, cancellable: Cancellable | null) => FileIOStream;
  static create_readwrite_async: (file: any, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static create_readwrite_finish: (file: any, res: any) => FileIOStream;
  static replace_readwrite: (file: any, etag: string | null, make_backup: boolean, flags: FileCreateFlags, cancellable: Cancellable | null) => FileIOStream;
  static replace_readwrite_async: (file: any, etag: string | null, make_backup: boolean, flags: FileCreateFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static replace_readwrite_finish: (file: any, res: any) => FileIOStream;
  static start_mountable: (file: any, flags: DriveStartFlags, start_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static start_mountable_finish: (file: any, result: any) => boolean;
  static stop_mountable: (file: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static stop_mountable_finish: (file: any, result: any) => boolean;
  static supports_thread_contexts: boolean;
  static unmount_mountable_with_operation: (file: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static unmount_mountable_with_operation_finish: (file: any, result: any) => boolean;
  static eject_mountable_with_operation: (file: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_mountable_with_operation_finish: (file: any, result: any) => boolean;
  static poll_mountable: (file: any, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static poll_mountable_finish: (file: any, result: any) => boolean;
  static measure_disk_usage: (file: any, flags: FileMeasureFlags, cancellable: Cancellable | null, progress_callback: FileMeasureProgressCallback | null, progress_data: object | null, disk_usage: number, num_dirs: number, num_files: number) => boolean;
  static measure_disk_usage_async: (file: any, flags: FileMeasureFlags, io_priority: number, cancellable: Cancellable | null, progress_callback: FileMeasureProgressCallback | null, progress_data: object | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static measure_disk_usage_finish: (file: any, result: any, disk_usage: number, num_dirs: number, num_files: number) => boolean;
}
export class FileInfoClass {}
export class FileInputStreamClass {
  static parent_class: InputStreamClass;
  static tell: (stream: FileInputStream) => number;
  static can_seek: (stream: FileInputStream) => boolean;
  static seek: (stream: FileInputStream, offset: number, type: GLib.SeekType, cancellable: Cancellable | null) => boolean;
  static query_info: (stream: FileInputStream, attributes: string, cancellable: Cancellable | null) => FileInfo;
  static query_info_async: (stream: FileInputStream, attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static query_info_finish: (stream: FileInputStream, result: any) => FileInfo;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class FileInputStreamPrivate {}
export class FileMonitorClass {
  static parent_class: GObject.ObjectClass;
  static changed: (monitor: FileMonitor, file: any, other_file: any, event_type: FileMonitorEvent) => void;
  static cancel: (monitor: FileMonitor) => boolean;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class FileMonitorPrivate {}
export class FileOutputStreamClass {
  static parent_class: OutputStreamClass;
  static tell: (stream: FileOutputStream) => number;
  static can_seek: (stream: FileOutputStream) => boolean;
  static seek: (stream: FileOutputStream, offset: number, type: GLib.SeekType, cancellable: Cancellable | null) => boolean;
  static can_truncate: (stream: FileOutputStream) => boolean;
  static truncate_fn: (stream: FileOutputStream, size: number, cancellable: Cancellable | null) => boolean;
  static query_info: (stream: FileOutputStream, attributes: string, cancellable: Cancellable | null) => FileInfo;
  static query_info_async: (stream: FileOutputStream, attributes: string, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static query_info_finish: (stream: FileOutputStream, result: any) => FileInfo;
  static get_etag: (stream: FileOutputStream) => string;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class FileOutputStreamPrivate {}
export class FilenameCompleterClass {
  static parent_class: GObject.ObjectClass;
  static got_completion_data: (filename_completer: FilenameCompleter) => void;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
}
export class FilterInputStreamClass {
  static parent_class: InputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
}
export class FilterOutputStreamClass {
  static parent_class: OutputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
}
export class IOExtension {
  get_name(): string;
  get_priority(): number;
  get_type(): any;
  ref_class(): GObject.TypeClass;
}
export class IOExtensionPoint {
  get_extension_by_name(name: string): IOExtension;
  get_extensions(): GLib.List;
  get_required_type(): any;
  set_required_type(type: any): void;
  static implement(extension_point_name: string, type: any, extension_name: string, priority: number): IOExtension;
  static lookup(name: string): IOExtensionPoint;
  static register(name: string): IOExtensionPoint;
}
export class IOModuleClass {}
export class IOModuleScope {
  block(basename: string): void;
  free(): void;
  static g_new(flags: IOModuleScopeFlags): IOModuleScope;
}
export class IOSchedulerJob {
  send_to_mainloop(func: GLib.SourceFunc, user_data: object | null, notify: GLib.DestroyNotify | null): boolean;
  send_to_mainloop_async(func: GLib.SourceFunc, user_data: object | null, notify: GLib.DestroyNotify | null): void;
}
export class IOStreamAdapter {}
export class IOStreamClass {
  static parent_class: GObject.ObjectClass;
  static get_input_stream: (stream: IOStream) => InputStream;
  static get_output_stream: (stream: IOStream) => OutputStream;
  static close_fn: (stream: IOStream, cancellable: Cancellable | null) => boolean;
  static close_async: (stream: IOStream, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static close_finish: (stream: IOStream, result: any) => boolean;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
  static _g_reserved7: () => void;
  static _g_reserved8: () => void;
  static _g_reserved9: () => void;
  static _g_reserved10: () => void;
}
export class IOStreamPrivate {}
export class IconIface {
  static g_iface: GObject.TypeInterface;
  static hash: (icon: any) => number;
  static equal: (icon1: any | null, icon2: any | null) => boolean;
  static to_tokens: (icon: any, tokens: object[], out_version: number) => boolean;
  static from_tokens: (tokens: string, num_tokens: number, version: number) => any;
  static serialize: (icon: any) => GLib.Variant;
}
export class InetAddressClass {
  static parent_class: GObject.ObjectClass;
  static to_string: (address: InetAddress) => string;
  static to_bytes: (address: InetAddress) => number;
}
export class InetAddressMaskClass {
  static parent_class: GObject.ObjectClass;
}
export class InetAddressMaskPrivate {}
export class InetAddressPrivate {}
export class InetSocketAddressClass {
  static parent_class: SocketAddressClass;
}
export class InetSocketAddressPrivate {}
export class InitableIface {
  static g_iface: GObject.TypeInterface;
  static init: (initable: any, cancellable: Cancellable | null) => boolean;
}
export class InputMessage {
  static address: SocketAddress;
  static vectors: InputVector[];
  static num_vectors: number;
  static bytes_received: number;
  static flags: number;
  static control_messages: SocketControlMessage[];
  static num_control_messages: number;
}
export class InputStreamClass {
  static parent_class: GObject.ObjectClass;
  static read_fn: (stream: InputStream, buffer: object | null, count: number, cancellable: Cancellable | null) => number;
  static skip: (stream: InputStream, count: number, cancellable: Cancellable | null) => number;
  static close_fn: (stream: InputStream, cancellable: Cancellable | null) => boolean;
  static read_async: (stream: InputStream, buffer: number[] | null, count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static read_finish: (stream: InputStream, result: any) => number;
  static skip_async: (stream: InputStream, count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static skip_finish: (stream: InputStream, result: any) => number;
  static close_async: (stream: InputStream, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static close_finish: (stream: InputStream, result: any) => boolean;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class InputStreamPrivate {}
export class InputVector {
  static buffer: object;
  static size: number;
}
export class ListModelInterface {
  static g_iface: GObject.TypeInterface;
  static get_item_type: (list: any) => any;
  static get_n_items: (list: any) => number;
  static get_item: (list: any, position: number) => GObject.Object | null;
}
export class ListStoreClass {
  static parent_class: GObject.ObjectClass;
}
export class LoadableIconIface {
  static g_iface: GObject.TypeInterface;
  static load: (icon: any, size: number, type: string, cancellable: Cancellable | null) => InputStream;
  static load_async: (icon: any, size: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static load_finish: (icon: any, res: any, type: string) => InputStream;
}
export class MemoryInputStreamClass {
  static parent_class: InputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class MemoryInputStreamPrivate {}
export class MemoryOutputStreamClass {
  static parent_class: OutputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class MemoryOutputStreamPrivate {}
export class MenuAttributeIterClass {
  static parent_class: GObject.ObjectClass;
  static get_next: (iter: MenuAttributeIter, out_name: string, value: GLib.Variant) => boolean;
}
export class MenuAttributeIterPrivate {}
export class MenuLinkIterClass {
  static parent_class: GObject.ObjectClass;
  static get_next: (iter: MenuLinkIter, out_link: string, value: MenuModel) => boolean;
}
export class MenuLinkIterPrivate {}
export class MenuModelClass {
  static parent_class: GObject.ObjectClass;
  static is_mutable: (model: MenuModel) => boolean;
  static get_n_items: (model: MenuModel) => number;
  static get_item_attributes: (model: MenuModel, item_index: number, attributes: GLib.HashTable) => void;
  static iterate_item_attributes: (model: MenuModel, item_index: number) => MenuAttributeIter;
  static get_item_attribute_value: (model: MenuModel, item_index: number, attribute: string, expected_type: GLib.VariantType | null) => GLib.Variant;
  static get_item_links: (model: MenuModel, item_index: number, links: GLib.HashTable) => void;
  static iterate_item_links: (model: MenuModel, item_index: number) => MenuLinkIter;
  static get_item_link: (model: MenuModel, item_index: number, link: string) => MenuModel;
}
export class MenuModelPrivate {}
export class MountIface {
  static g_iface: GObject.TypeInterface;
  static changed: (mount: any) => void;
  static unmounted: (mount: any) => void;
  static get_root: (mount: any) => any;
  static get_name: (mount: any) => string;
  static get_icon: (mount: any) => any;
  static get_uuid: (mount: any) => string | null;
  static get_volume: (mount: any) => any | null;
  static get_drive: (mount: any) => any | null;
  static can_unmount: (mount: any) => boolean;
  static can_eject: (mount: any) => boolean;
  static unmount: (mount: any, flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static unmount_finish: (mount: any, result: any) => boolean;
  static eject: (mount: any, flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_finish: (mount: any, result: any) => boolean;
  static remount: (mount: any, flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static remount_finish: (mount: any, result: any) => boolean;
  static guess_content_type: (mount: any, force_rescan: boolean, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static guess_content_type_finish: (mount: any, result: any) => string[];
  static guess_content_type_sync: (mount: any, force_rescan: boolean, cancellable: Cancellable | null) => string[];
  static pre_unmount: (mount: any) => void;
  static unmount_with_operation: (mount: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static unmount_with_operation_finish: (mount: any, result: any) => boolean;
  static eject_with_operation: (mount: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_with_operation_finish: (mount: any, result: any) => boolean;
  static get_default_location: (mount: any) => any;
  static get_sort_key: (mount: any) => string | null;
  static get_symbolic_icon: (mount: any) => any;
}
export class MountOperationClass {
  static parent_class: GObject.ObjectClass;
  static ask_password: (op: MountOperation, message: string, default_user: string, default_domain: string, flags: AskPasswordFlags) => void;
  static ask_question: (op: MountOperation, message: string, choices: string[]) => void;
  static reply: (op: MountOperation, result: MountOperationResult) => void;
  static aborted: (op: MountOperation) => void;
  static show_processes: (op: MountOperation, message: string, processes: GLib.Pid[], choices: string[]) => void;
  static show_unmount_progress: (op: MountOperation, message: string, time_left: number, bytes_left: number) => void;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
  static _g_reserved7: () => void;
  static _g_reserved8: () => void;
  static _g_reserved9: () => void;
}
export class MountOperationPrivate {}
export class NativeSocketAddressClass {
  static parent_class: SocketAddressClass;
}
export class NativeSocketAddressPrivate {}
export class NativeVolumeMonitorClass {
  static parent_class: VolumeMonitorClass;
  static get_mount_for_mount_path: (mount_path: string, cancellable: Cancellable) => any;
}
export class NetworkAddressClass {
  static parent_class: GObject.ObjectClass;
}
export class NetworkAddressPrivate {}
export class NetworkMonitorInterface {
  static g_iface: GObject.TypeInterface;
  static network_changed: (monitor: any, network_available: boolean) => void;
  static can_reach: (monitor: any, connectable: any, cancellable: Cancellable | null) => boolean;
  static can_reach_async: (monitor: any, connectable: any, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static can_reach_finish: (monitor: any, result: any) => boolean;
}
export class NetworkServiceClass {
  static parent_class: GObject.ObjectClass;
}
export class NetworkServicePrivate {}
export class OutputMessage {
  static address: SocketAddress;
  static vectors: OutputVector;
  static num_vectors: number;
  static bytes_sent: number;
  static control_messages: SocketControlMessage[];
  static num_control_messages: number;
}
export class OutputStreamClass {
  static parent_class: GObject.ObjectClass;
  static write_fn: (stream: OutputStream, buffer: number[] | null, count: number, cancellable: Cancellable | null) => number;
  static splice: (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, cancellable: Cancellable | null) => number;
  static flush: (stream: OutputStream, cancellable: Cancellable | null) => boolean;
  static close_fn: (stream: OutputStream, cancellable: Cancellable | null) => boolean;
  static write_async: (stream: OutputStream, buffer: number[] | null, count: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static write_finish: (stream: OutputStream, result: any) => number;
  static splice_async: (stream: OutputStream, source: InputStream, flags: OutputStreamSpliceFlags, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static splice_finish: (stream: OutputStream, result: any) => number;
  static flush_async: (stream: OutputStream, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static flush_finish: (stream: OutputStream, result: any) => boolean;
  static close_async: (stream: OutputStream, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static close_finish: (stream: OutputStream, result: any) => boolean;
  static writev_fn: (stream: OutputStream, vectors: OutputVector[], n_vectors: number, bytes_written: number, cancellable: Cancellable | null) => boolean;
  static writev_async: (stream: OutputStream, vectors: OutputVector[], n_vectors: number, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static writev_finish: (stream: OutputStream, result: any, bytes_written: number) => boolean;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
  static _g_reserved7: () => void;
  static _g_reserved8: () => void;
}
export class OutputStreamPrivate {}
export class OutputVector {
  static buffer: object;
  static size: number;
}
export class PermissionClass {
  static parent_class: GObject.ObjectClass;
  static acquire: (permission: Permission, cancellable: Cancellable | null) => boolean;
  static acquire_async: (permission: Permission, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static acquire_finish: (permission: Permission, result: any) => boolean;
  static release: (permission: Permission, cancellable: Cancellable | null) => boolean;
  static release_async: (permission: Permission, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static release_finish: (permission: Permission, result: any) => boolean;
  static reserved: object[];
}
export class PermissionPrivate {}
export class PollableInputStreamInterface {
  static g_iface: GObject.TypeInterface;
  static can_poll: (stream: any) => boolean;
  static is_readable: (stream: any) => boolean;
  static create_source: (stream: any, cancellable: Cancellable | null) => GLib.Source;
  static read_nonblocking: (stream: any, buffer: number[] | null, count: number) => number;
}
export class PollableOutputStreamInterface {
  static g_iface: GObject.TypeInterface;
  static can_poll: (stream: any) => boolean;
  static is_writable: (stream: any) => boolean;
  static create_source: (stream: any, cancellable: Cancellable | null) => GLib.Source;
  static write_nonblocking: (stream: any, buffer: number[] | null, count: number) => number;
  static writev_nonblocking: (stream: any, vectors: OutputVector[], n_vectors: number, bytes_written: number) => PollableReturn;
}
export class ProxyAddressClass {
  static parent_class: InetSocketAddressClass;
}
export class ProxyAddressEnumeratorClass {
  static parent_class: SocketAddressEnumeratorClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
  static _g_reserved7: () => void;
}
export class ProxyAddressEnumeratorPrivate {}
export class ProxyAddressPrivate {}
export class ProxyInterface {
  static g_iface: GObject.TypeInterface;
  static connect: (proxy: any, connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null) => IOStream;
  static connect_async: (proxy: any, connection: IOStream, proxy_address: ProxyAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static connect_finish: (proxy: any, result: any) => IOStream;
  static supports_hostname: (proxy: any) => boolean;
}
export class ProxyResolverInterface {
  static g_iface: GObject.TypeInterface;
  static is_supported: (resolver: any) => boolean;
  static lookup: (resolver: any, uri: string, cancellable: Cancellable | null) => string[];
  static lookup_async: (resolver: any, uri: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_finish: (resolver: any, result: any) => string[];
}
export class RemoteActionGroupInterface {
  static g_iface: GObject.TypeInterface;
  static activate_action_full: (remote: any, action_name: string, parameter: GLib.Variant | null, platform_data: GLib.Variant) => void;
  static change_action_state_full: (remote: any, action_name: string, value: GLib.Variant, platform_data: GLib.Variant) => void;
}
export class ResolverClass {
  static parent_class: GObject.ObjectClass;
  static reload: (resolver: Resolver) => void;
  static lookup_by_name: (resolver: Resolver, hostname: string, cancellable: Cancellable | null) => GLib.List;
  static lookup_by_name_async: (resolver: Resolver, hostname: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_by_name_finish: (resolver: Resolver, result: any) => GLib.List;
  static lookup_by_address: (resolver: Resolver, address: InetAddress, cancellable: Cancellable | null) => string;
  static lookup_by_address_async: (resolver: Resolver, address: InetAddress, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_by_address_finish: (resolver: Resolver, result: any) => string;
  static lookup_service: (resolver: Resolver, rrname: string, cancellable: Cancellable | null) => GLib.List;
  static lookup_service_async: (resolver: Resolver, rrname: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_service_finish: (resolver: Resolver, result: any) => GLib.List;
  static lookup_records: (resolver: Resolver, rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null) => GLib.List;
  static lookup_records_async: (resolver: Resolver, rrname: string, record_type: ResolverRecordType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_records_finish: (resolver: Resolver, result: any) => GLib.List;
  static lookup_by_name_with_flags_async: (resolver: Resolver, hostname: string, flags: ResolverNameLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_by_name_with_flags_finish: (resolver: Resolver, result: any) => GLib.List;
  static lookup_by_name_with_flags: (resolver: Resolver, hostname: string, flags: ResolverNameLookupFlags, cancellable: Cancellable | null) => GLib.List;
}
export class ResolverPrivate {}
export class Resource {
  constructor(data: GLib.Bytes);
  _register(): void;
  _unregister(): void;
  enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[];
  get_info(path: string, lookup_flags: ResourceLookupFlags, size?: number, flags?: number): boolean;
  lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes;
  open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream;
  ref(): Resource;
  unref(): void;
  static load(filename: any): Resource;
}
export class SeekableIface {
  static g_iface: GObject.TypeInterface;
  static tell: (seekable: any) => number;
  static can_seek: (seekable: any) => boolean;
  static seek: (seekable: any, offset: number, type: GLib.SeekType, cancellable: Cancellable | null) => boolean;
  static can_truncate: (seekable: any) => boolean;
  static truncate_fn: (seekable: any, offset: number, cancellable: Cancellable | null) => boolean;
}
export class SettingsBackendClass {
  static parent_class: GObject.ObjectClass;
  static read: (backend: SettingsBackend, key: string, expected_type: GLib.VariantType, default_value: boolean) => GLib.Variant;
  static get_writable: (backend: SettingsBackend, key: string) => boolean;
  static write: (backend: SettingsBackend, key: string, value: GLib.Variant, origin_tag: object | null) => boolean;
  static write_tree: (backend: SettingsBackend, tree: GLib.Tree, origin_tag: object | null) => boolean;
  static reset: (backend: SettingsBackend, key: string, origin_tag: object | null) => void;
  static subscribe: (backend: SettingsBackend, name: string) => void;
  static unsubscribe: (backend: SettingsBackend, name: string) => void;
  static sync: (backend: SettingsBackend) => void;
  static get_permission: (backend: SettingsBackend, path: string) => Permission;
  static read_user_value: (backend: SettingsBackend, key: string, expected_type: GLib.VariantType) => GLib.Variant;
  static padding: object[];
}
export class SettingsBackendPrivate {}
export class SettingsClass {
  static parent_class: GObject.ObjectClass;
  static writable_changed: (settings: Settings, key: string) => void;
  static changed: (settings: Settings, key: string) => void;
  static writable_change_event: (settings: Settings, key: GLib.Quark) => boolean;
  static change_event: (settings: Settings, keys: GLib.Quark, n_keys: number) => boolean;
  static padding: object[];
}
export class SettingsPrivate {}
export class SettingsSchema {
  get_id(): string;
  get_key(name: string): SettingsSchemaKey;
  get_path(): string;
  has_key(name: string): boolean;
  list_children(): string[];
  list_keys(): string[];
  ref(): SettingsSchema;
  unref(): void;
}
export class SettingsSchemaKey {
  get_default_value(): GLib.Variant;
  get_description(): string;
  get_name(): string;
  get_range(): GLib.Variant;
  get_summary(): string;
  get_value_type(): GLib.VariantType;
  range_check(value: GLib.Variant): boolean;
  ref(): SettingsSchemaKey;
  unref(): void;
}
export class SettingsSchemaSource {
  constructor(directory: any, parent: SettingsSchemaSource | null, trusted: boolean);
  list_schemas(recursive: boolean, non_relocatable: string[], relocatable: string[]): void;
  lookup(schema_id: string, recursive: boolean): SettingsSchema | null;
  ref(): SettingsSchemaSource;
  unref(): void;
  static get_default(): SettingsSchemaSource | null;
}
export class SimpleActionGroupClass {
  static parent_class: GObject.ObjectClass;
  static padding: object[];
}
export class SimpleActionGroupPrivate {}
export class SimpleAsyncResultClass {}
export class SimpleProxyResolverClass {
  static parent_class: GObject.ObjectClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class SimpleProxyResolverPrivate {}
export class SocketAddressClass {
  static parent_class: GObject.ObjectClass;
  static get_family: (address: SocketAddress) => SocketFamily;
  static get_native_size: (address: SocketAddress) => number;
  static to_native: (address: SocketAddress, dest: object | null, destlen: number) => boolean;
}
export class SocketAddressEnumeratorClass {
  static parent_class: GObject.ObjectClass;
  static next: (enumerator: SocketAddressEnumerator, cancellable: Cancellable | null) => SocketAddress;
  static next_async: (enumerator: SocketAddressEnumerator, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static next_finish: (enumerator: SocketAddressEnumerator, result: any) => SocketAddress;
}
export class SocketClass {
  static parent_class: GObject.ObjectClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
  static _g_reserved7: () => void;
  static _g_reserved8: () => void;
  static _g_reserved9: () => void;
  static _g_reserved10: () => void;
}
export class SocketClientClass {
  static parent_class: GObject.ObjectClass;
  static event: (client: SocketClient, event: SocketClientEvent, connectable: any, connection: IOStream) => void;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
}
export class SocketClientPrivate {}
export class SocketConnectableIface {
  static g_iface: GObject.TypeInterface;
  static enumerate: (connectable: any) => SocketAddressEnumerator;
  static proxy_enumerate: (connectable: any) => SocketAddressEnumerator;
  static to_string: (connectable: any) => string;
}
export class SocketConnectionClass {
  static parent_class: IOStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
}
export class SocketConnectionPrivate {}
export class SocketControlMessageClass {
  static parent_class: GObject.ObjectClass;
  static get_size: (message: SocketControlMessage) => number;
  static get_level: (message: SocketControlMessage) => number;
  static get_type: (message: SocketControlMessage) => number;
  static serialize: (message: SocketControlMessage, data: object) => void;
  static deserialize: (level: number, type: number, size: number, data: object) => SocketControlMessage;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class SocketControlMessagePrivate {}
export class SocketListenerClass {
  static parent_class: GObject.ObjectClass;
  static changed: (listener: SocketListener) => void;
  static event: (listener: SocketListener, event: SocketListenerEvent, socket: Socket) => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
}
export class SocketListenerPrivate {}
export class SocketPrivate {}
export class SocketServiceClass {
  static parent_class: SocketListenerClass;
  static incoming: (service: SocketService, connection: SocketConnection, source_object: GObject.Object) => boolean;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
}
export class SocketServicePrivate {}
export class SrvTarget {
  constructor(hostname: string, port: number, priority: number, weight: number);
  copy(): SrvTarget;
  free(): void;
  get_hostname(): string;
  get_port(): number;
  get_priority(): number;
  get_weight(): number;
  static list_sort(targets: GLib.List): GLib.List;
}
export class StaticResource {
  static data: number;
  static data_len: number;
  static resource: Resource;
  static next: StaticResource;
  static padding: object;
  fini(): void;
  get_resource(): Resource;
  init(): void;
}
export class TaskClass {}
export class TcpConnectionClass {
  static parent_class: SocketConnectionClass;
}
export class TcpConnectionPrivate {}
export class TcpWrapperConnectionClass {
  static parent_class: TcpConnectionClass;
}
export class TcpWrapperConnectionPrivate {}
export class ThemedIconClass {}
export class ThreadedSocketServiceClass {
  static parent_class: SocketServiceClass;
  static run: (service: ThreadedSocketService, connection: SocketConnection, source_object: GObject.Object) => boolean;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class ThreadedSocketServicePrivate {}
export class TlsBackendInterface {
  static g_iface: GObject.TypeInterface;
  static supports_tls: (backend: any) => boolean;
  static get_certificate_type: () => any;
  static get_client_connection_type: () => any;
  static get_server_connection_type: () => any;
  static get_file_database_type: () => any;
  static get_default_database: (backend: any) => TlsDatabase;
  static supports_dtls: (backend: any) => boolean;
  static get_dtls_client_connection_type: () => any;
  static get_dtls_server_connection_type: () => any;
}
export class TlsCertificateClass {
  static parent_class: GObject.ObjectClass;
  static verify: (cert: TlsCertificate, identity: any | null, trusted_ca: TlsCertificate | null) => TlsCertificateFlags;
  static padding: object[];
}
export class TlsCertificatePrivate {}
export class TlsClientConnectionInterface {
  static g_iface: GObject.TypeInterface;
  static copy_session_state: (conn: any, source: any) => void;
}
export class TlsConnectionClass {
  static parent_class: IOStreamClass;
  static accept_certificate: (connection: TlsConnection, peer_cert: TlsCertificate, errors: TlsCertificateFlags) => boolean;
  static handshake: (conn: TlsConnection, cancellable: Cancellable | null) => boolean;
  static handshake_async: (conn: TlsConnection, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static handshake_finish: (conn: TlsConnection, result: any) => boolean;
  static padding: object[];
}
export class TlsConnectionPrivate {}
export class TlsDatabaseClass {
  static parent_class: GObject.ObjectClass;
  static verify_chain: (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: any | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null) => TlsCertificateFlags;
  static verify_chain_async: (self: TlsDatabase, chain: TlsCertificate, purpose: string, identity: any | null, interaction: TlsInteraction | null, flags: TlsDatabaseVerifyFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static verify_chain_finish: (self: TlsDatabase, result: any) => TlsCertificateFlags;
  static create_certificate_handle: (self: TlsDatabase, certificate: TlsCertificate) => string | null;
  static lookup_certificate_for_handle: (self: TlsDatabase, handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null) => TlsCertificate | null;
  static lookup_certificate_for_handle_async: (self: TlsDatabase, handle: string, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_certificate_for_handle_finish: (self: TlsDatabase, result: any) => TlsCertificate;
  static lookup_certificate_issuer: (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null) => TlsCertificate;
  static lookup_certificate_issuer_async: (self: TlsDatabase, certificate: TlsCertificate, interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_certificate_issuer_finish: (self: TlsDatabase, result: any) => TlsCertificate;
  static lookup_certificates_issued_by: (self: TlsDatabase, issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null) => GLib.List;
  static lookup_certificates_issued_by_async: (self: TlsDatabase, issuer_raw_dn: number[], interaction: TlsInteraction | null, flags: TlsDatabaseLookupFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static lookup_certificates_issued_by_finish: (self: TlsDatabase, result: any) => GLib.List;
  static padding: object[];
}
export class TlsDatabasePrivate {}
export class TlsFileDatabaseInterface {
  static g_iface: GObject.TypeInterface;
  static padding: object[];
}
export class TlsInteractionClass {
  static parent_class: GObject.ObjectClass;
  static ask_password: (interaction: TlsInteraction, password: TlsPassword, cancellable: Cancellable | null) => TlsInteractionResult;
  static ask_password_async: (interaction: TlsInteraction, password: TlsPassword, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static ask_password_finish: (interaction: TlsInteraction, result: any) => TlsInteractionResult;
  static request_certificate: (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null) => TlsInteractionResult;
  static request_certificate_async: (interaction: TlsInteraction, connection: TlsConnection, flags: TlsCertificateRequestFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static request_certificate_finish: (interaction: TlsInteraction, result: any) => TlsInteractionResult;
  static padding: object[];
}
export class TlsInteractionPrivate {}
export class TlsPasswordClass {
  static parent_class: GObject.ObjectClass;
  static get_value: (password: TlsPassword, length: number | null) => number;
  static set_value: (password: TlsPassword, value: number[], length: number, destroy: GLib.DestroyNotify | null) => void;
  static get_default_warning: (password: TlsPassword) => string;
  static padding: object[];
}
export class TlsPasswordPrivate {}
export class TlsServerConnectionInterface {
  static g_iface: GObject.TypeInterface;
}
export class UnixConnectionClass {
  static parent_class: SocketConnectionClass;
}
export class UnixConnectionPrivate {}
export class UnixCredentialsMessageClass {
  static parent_class: SocketControlMessageClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
}
export class UnixCredentialsMessagePrivate {}
export class UnixFDListClass {
  static parent_class: GObject.ObjectClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class UnixFDListPrivate {}
export class UnixFDMessageClass {
  static parent_class: SocketControlMessageClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
}
export class UnixFDMessagePrivate {}
export class UnixInputStreamClass {
  static parent_class: InputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class UnixInputStreamPrivate {}
export class UnixMountEntry {}
export class UnixMountMonitorClass {}
export class UnixMountPoint {
  compare(mount2: UnixMountPoint): number;
  copy(): UnixMountPoint;
  free(): void;
  get_device_path(): any;
  get_fs_type(): string;
  get_mount_path(): any;
  get_options(): string;
  guess_can_eject(): boolean;
  guess_icon(): any;
  guess_name(): string;
  guess_symbolic_icon(): any;
  is_loopback(): boolean;
  is_readonly(): boolean;
  is_user_mountable(): boolean;
}
export class UnixOutputStreamClass {
  static parent_class: OutputStreamClass;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
}
export class UnixOutputStreamPrivate {}
export class UnixSocketAddressClass {
  static parent_class: SocketAddressClass;
}
export class UnixSocketAddressPrivate {}
export class VfsClass {
  static parent_class: GObject.ObjectClass;
  static is_active: (vfs: Vfs) => boolean;
  static get_file_for_path: (vfs: Vfs, path: string) => any;
  static get_file_for_uri: (vfs: Vfs, uri: string) => any;
  static get_supported_uri_schemes: (vfs: Vfs) => string[];
  static parse_name: (vfs: Vfs, parse_name: string) => any;
  static local_file_add_info: (vfs: Vfs, filename: string, device: number, attribute_matcher: FileAttributeMatcher, info: FileInfo, cancellable: Cancellable | null, extra_data: object | null, free_extra_data: GLib.DestroyNotify) => void;
  static add_writable_namespaces: (vfs: Vfs, list: FileAttributeInfoList) => void;
  static local_file_set_attributes: (vfs: Vfs, filename: string, info: FileInfo, flags: FileQueryInfoFlags, cancellable: Cancellable | null) => boolean;
  static local_file_removed: (vfs: Vfs, filename: string) => void;
  static local_file_moved: (vfs: Vfs, source: string, dest: string) => void;
  static deserialize_icon: (vfs: Vfs, value: GLib.Variant) => any;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
}
export class VolumeIface {
  static g_iface: GObject.TypeInterface;
  static changed: (volume: any) => void;
  static removed: (volume: any) => void;
  static get_name: (volume: any) => string;
  static get_icon: (volume: any) => any;
  static get_uuid: (volume: any) => string | null;
  static get_drive: (volume: any) => any | null;
  static get_mount: (volume: any) => any | null;
  static can_mount: (volume: any) => boolean;
  static can_eject: (volume: any) => boolean;
  static mount_fn: (volume: any, flags: MountMountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static mount_finish: (volume: any, result: any) => boolean;
  static eject: (volume: any, flags: MountUnmountFlags, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_finish: (volume: any, result: any) => boolean;
  static get_identifier: (volume: any, kind: string) => string | null;
  static enumerate_identifiers: (volume: any) => string[];
  static should_automount: (volume: any) => boolean;
  static get_activation_root: (volume: any) => any | null;
  static eject_with_operation: (volume: any, flags: MountUnmountFlags, mount_operation: MountOperation | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null) => void;
  static eject_with_operation_finish: (volume: any, result: any) => boolean;
  static get_sort_key: (volume: any) => string | null;
  static get_symbolic_icon: (volume: any) => any;
}
export class VolumeMonitorClass {
  static parent_class: GObject.ObjectClass;
  static volume_added: (volume_monitor: VolumeMonitor, volume: any) => void;
  static volume_removed: (volume_monitor: VolumeMonitor, volume: any) => void;
  static volume_changed: (volume_monitor: VolumeMonitor, volume: any) => void;
  static mount_added: (volume_monitor: VolumeMonitor, mount: any) => void;
  static mount_removed: (volume_monitor: VolumeMonitor, mount: any) => void;
  static mount_pre_unmount: (volume_monitor: VolumeMonitor, mount: any) => void;
  static mount_changed: (volume_monitor: VolumeMonitor, mount: any) => void;
  static drive_connected: (volume_monitor: VolumeMonitor, drive: any) => void;
  static drive_disconnected: (volume_monitor: VolumeMonitor, drive: any) => void;
  static drive_changed: (volume_monitor: VolumeMonitor, drive: any) => void;
  static is_supported: () => boolean;
  static get_connected_drives: (volume_monitor: VolumeMonitor) => GLib.List;
  static get_volumes: (volume_monitor: VolumeMonitor) => GLib.List;
  static get_mounts: (volume_monitor: VolumeMonitor) => GLib.List;
  static get_volume_for_uuid: (volume_monitor: VolumeMonitor, uuid: string) => any;
  static get_mount_for_uuid: (volume_monitor: VolumeMonitor, uuid: string) => any;
  static adopt_orphan_mount: (mount: any, volume_monitor: VolumeMonitor) => any;
  static drive_eject_button: (volume_monitor: VolumeMonitor, drive: any) => void;
  static drive_stop_button: (volume_monitor: VolumeMonitor, drive: any) => void;
  static _g_reserved1: () => void;
  static _g_reserved2: () => void;
  static _g_reserved3: () => void;
  static _g_reserved4: () => void;
  static _g_reserved5: () => void;
  static _g_reserved6: () => void;
}
export class ZlibCompressorClass {
  static parent_class: GObject.ObjectClass;
}
export class ZlibDecompressorClass {
  static parent_class: GObject.ObjectClass;
}
export function action_name_is_valid(action_name: string): boolean;
export function action_parse_detailed_name(detailed_name: string, action_name: string, target_value: GLib.Variant): boolean;
export function action_print_detailed_name(action_name: string, target_value: GLib.Variant | null): string;
export function app_info_create_from_commandline(commandline: any, application_name: string | null, flags: AppInfoCreateFlags): any;
export function app_info_get_all(): GLib.List;
export function app_info_get_all_for_type(content_type: string): GLib.List;
export function app_info_get_default_for_type(content_type: string, must_support_uris: boolean): any;
export function app_info_get_default_for_uri_scheme(uri_scheme: string): any;
export function app_info_get_fallback_for_type(content_type: string): GLib.List;
export function app_info_get_recommended_for_type(content_type: string): GLib.List;
export function app_info_launch_default_for_uri(uri: string, context: AppLaunchContext | null): boolean;
export function app_info_launch_default_for_uri_async(uri: string, context: AppLaunchContext | null, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
export function app_info_launch_default_for_uri_finish(result: any): boolean;
export function app_info_reset_type_associations(content_type: string): void;
export function async_initable_newv_async(object_type: any, n_parameters: number, parameters: GObject.Parameter, io_priority: number, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
export function bus_get(bus_type: BusType, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
export function bus_get_finish(res: any): DBusConnection;
export function bus_get_sync(bus_type: BusType, cancellable: Cancellable | null): DBusConnection;
export function bus_own_name(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_handler: BusAcquiredCallback | null, name_acquired_handler: BusNameAcquiredCallback | null, name_lost_handler: BusNameLostCallback | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify | null): number;
export function bus_own_name_on_connection(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_handler: BusNameAcquiredCallback | null, name_lost_handler: BusNameLostCallback | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify | null): number;
export function bus_own_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameOwnerFlags, name_acquired_closure: GObject.Closure | null, name_lost_closure: GObject.Closure | null): number;
export function bus_own_name_with_closures(bus_type: BusType, name: string, flags: BusNameOwnerFlags, bus_acquired_closure: GObject.Closure | null, name_acquired_closure: GObject.Closure | null, name_lost_closure: GObject.Closure | null): number;
export function bus_unown_name(owner_id: number): void;
export function bus_unwatch_name(watcher_id: number): void;
export function bus_watch_name(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_handler: BusNameAppearedCallback | null, name_vanished_handler: BusNameVanishedCallback | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify | null): number;
export function bus_watch_name_on_connection(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_handler: BusNameAppearedCallback | null, name_vanished_handler: BusNameVanishedCallback | null, user_data: object | null, user_data_free_func: GLib.DestroyNotify | null): number;
export function bus_watch_name_on_connection_with_closures(connection: DBusConnection, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure | null, name_vanished_closure: GObject.Closure | null): number;
export function bus_watch_name_with_closures(bus_type: BusType, name: string, flags: BusNameWatcherFlags, name_appeared_closure: GObject.Closure | null, name_vanished_closure: GObject.Closure | null): number;
export function content_type_can_be_executable(type: string): boolean;
export function content_type_equals(type1: string, type2: string): boolean;
export function content_type_from_mime_type(mime_type: string): string | null;
export function content_type_get_description(type: string): string;
export function content_type_get_generic_icon_name(type: string): string | null;
export function content_type_get_icon(type: string): any;
export function content_type_get_mime_dirs(): string[];
export function content_type_get_mime_type(type: string): string | null;
export function content_type_get_symbolic_icon(type: string): any;
export function content_type_guess(filename: string | null, data: number[] | null, data_size: number, result_uncertain: boolean): string;
export function content_type_guess_for_tree(root: any): string[];
export function content_type_is_a(type: string, supertype: string): boolean;
export function content_type_is_mime_type(type: string, mime_type: string): boolean;
export function content_type_is_unknown(type: string): boolean;
export function content_type_set_mime_dirs(dirs: string[] | null): void;
export function content_types_get_registered(): GLib.List;
export function dbus_address_escape_value(string: string): string;
export function dbus_address_get_for_bus_sync(bus_type: BusType, cancellable: Cancellable | null): string;
export function dbus_address_get_stream(address: string, cancellable: Cancellable | null, callback: AsyncReadyCallback | null, user_data: object | null): void;
export function dbus_address_get_stream_finish(res: any, out_guid: string): IOStream;
export function dbus_address_get_stream_sync(address: string, out_guid: string, cancellable: Cancellable | null): IOStream;
export function dbus_annotation_info_lookup(annotations: DBusAnnotationInfo[] | null, name: string): string;
export function dbus_error_encode_gerror(error: GLib.Error): string;
export function dbus_error_get_remote_error(error: GLib.Error): string;
export function dbus_error_is_remote_error(error: GLib.Error): boolean;
export function dbus_error_new_for_dbus_error(dbus_error_name: string, dbus_error_message: string): GLib.Error;
export function dbus_error_quark(): GLib.Quark;
export function dbus_error_register_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean;
export function dbus_error_register_error_domain(error_domain_quark_name: string, quark_volatile: number, entries: DBusErrorEntry[], num_entries: number): void;
export function dbus_error_strip_remote_error(error: GLib.Error): boolean;
export function dbus_error_unregister_error(error_domain: GLib.Quark, error_code: number, dbus_error_name: string): boolean;
export function dbus_generate_guid(): string;
export function dbus_gvalue_to_gvariant(gvalue: GObject.Value, type: GLib.VariantType): GLib.Variant;
export function dbus_gvariant_to_gvalue(value: GLib.Variant, out_gvalue: GObject.Value): void;
export function dbus_is_address(string: string): boolean;
export function dbus_is_guid(string: string): boolean;
export function dbus_is_interface_name(string: string): boolean;
export function dbus_is_member_name(string: string): boolean;
export function dbus_is_name(string: string): boolean;
export function dbus_is_supported_address(string: string): boolean;
export function dbus_is_unique_name(string: string): boolean;
export function dtls_client_connection_new(base_socket: any, server_identity: any | null): any;
export function dtls_server_connection_new(base_socket: any, certificate: TlsCertificate | null): any;
export function file_new_for_commandline_arg(arg: any): any;
export function file_new_for_commandline_arg_and_cwd(arg: any, cwd: any): any;
export function file_new_for_path(path: any): any;
export function file_new_for_uri(uri: string): any;
export function file_new_tmp(tmpl: any | null, iostream: FileIOStream): any;
export function file_parse_name(parse_name: string): any;
export function icon_deserialize(value: GLib.Variant): any;
export function icon_hash(icon: object): number;
export function icon_new_for_string(str: string): any;
export function initable_newv(object_type: any, n_parameters: number, parameters: GObject.Parameter[], cancellable: Cancellable | null): GObject.Object;
export function io_error_from_errno(err_no: number): IOErrorEnum;
export function io_error_quark(): GLib.Quark;
export function io_extension_point_implement(extension_point_name: string, type: any, extension_name: string, priority: number): IOExtension;
export function io_extension_point_lookup(name: string): IOExtensionPoint;
export function io_extension_point_register(name: string): IOExtensionPoint;
export function io_modules_load_all_in_directory(dirname: any): GLib.List;
export function io_modules_load_all_in_directory_with_scope(dirname: any, scope: IOModuleScope): GLib.List;
export function io_modules_scan_all_in_directory(dirname: any): void;
export function io_modules_scan_all_in_directory_with_scope(dirname: any, scope: IOModuleScope): void;
export function io_scheduler_cancel_all_jobs(): void;
export function io_scheduler_push_job(job_func: IOSchedulerJobFunc, user_data: object | null, notify: GLib.DestroyNotify | null, io_priority: number, cancellable: Cancellable | null): void;
export function keyfile_settings_backend_new(filename: string, root_path: string, root_group: string | null): SettingsBackend;
export function memory_settings_backend_new(): SettingsBackend;
export function network_monitor_get_default(): any;
export function networking_init(): void;
export function null_settings_backend_new(): SettingsBackend;
export function pollable_source_new(pollable_stream: GObject.Object): GLib.Source;
export function pollable_source_new_full(pollable_stream: GObject.Object, child_source: GLib.Source | null, cancellable: Cancellable | null): GLib.Source;
export function pollable_stream_read(stream: InputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): number;
export function pollable_stream_write(stream: OutputStream, buffer: number[], count: number, blocking: boolean, cancellable: Cancellable | null): number;
export function pollable_stream_write_all(stream: OutputStream, buffer: number[], count: number, blocking: boolean, bytes_written: number, cancellable: Cancellable | null): boolean;
export function proxy_get_default_for_protocol(protocol: string): any;
export function proxy_resolver_get_default(): any;
export function resolver_error_quark(): GLib.Quark;
export function resource_error_quark(): GLib.Quark;
export function resource_load(filename: any): Resource;
export function resources_enumerate_children(path: string, lookup_flags: ResourceLookupFlags): string[];
export function resources_get_info(path: string, lookup_flags: ResourceLookupFlags, size: number, flags: number): boolean;
export function resources_lookup_data(path: string, lookup_flags: ResourceLookupFlags): GLib.Bytes;
export function resources_open_stream(path: string, lookup_flags: ResourceLookupFlags): InputStream;
export function resources_register(resource: Resource): void;
export function resources_unregister(resource: Resource): void;
export function settings_schema_source_get_default(): SettingsSchemaSource | null;
export function simple_async_report_error_in_idle(object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object | null, domain: GLib.Quark, code: number, format: string, ...args: any[]): void;
export function simple_async_report_gerror_in_idle(object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object | null, error: GLib.Error): void;
export function simple_async_report_take_gerror_in_idle(object: GObject.Object | null, callback: AsyncReadyCallback | null, user_data: object | null, error: GLib.Error): void;
export function srv_target_list_sort(targets: GLib.List): GLib.List;
export function tls_backend_get_default(): any;
export function tls_client_connection_new(base_io_stream: IOStream, server_identity: any | null): any;
export function tls_error_quark(): GLib.Quark;
export function tls_file_database_new(anchors: any): any;
export function tls_server_connection_new(base_io_stream: IOStream, certificate: TlsCertificate | null): any;
export function unix_is_mount_path_system_internal(mount_path: any): boolean;
export function unix_is_system_device_path(device_path: string): boolean;
export function unix_is_system_fs_type(fs_type: string): boolean;
export function unix_mount_at(mount_path: any, time_read: number): UnixMountEntry;
export function unix_mount_compare(mount1: UnixMountEntry, mount2: UnixMountEntry): number;
export function unix_mount_copy(mount_entry: UnixMountEntry): UnixMountEntry;
export function unix_mount_for(file_path: any, time_read: number): UnixMountEntry;
export function unix_mount_free(mount_entry: UnixMountEntry): void;
export function unix_mount_get_device_path(mount_entry: UnixMountEntry): any;
export function unix_mount_get_fs_type(mount_entry: UnixMountEntry): string;
export function unix_mount_get_mount_path(mount_entry: UnixMountEntry): any;
export function unix_mount_get_options(mount_entry: UnixMountEntry): string | null;
export function unix_mount_get_root_path(mount_entry: UnixMountEntry): string | null;
export function unix_mount_guess_can_eject(mount_entry: UnixMountEntry): boolean;
export function unix_mount_guess_icon(mount_entry: UnixMountEntry): any;
export function unix_mount_guess_name(mount_entry: UnixMountEntry): string;
export function unix_mount_guess_should_display(mount_entry: UnixMountEntry): boolean;
export function unix_mount_guess_symbolic_icon(mount_entry: UnixMountEntry): any;
export function unix_mount_is_readonly(mount_entry: UnixMountEntry): boolean;
export function unix_mount_is_system_internal(mount_entry: UnixMountEntry): boolean;
export function unix_mount_points_changed_since(time: number): boolean;
export function unix_mount_points_get(time_read: number): GLib.List;
export function unix_mounts_changed_since(time: number): boolean;
export function unix_mounts_get(time_read: number): GLib.List;
export type AsyncReadyCallback = (source_object: GObject.Object | null, res: any, user_data: object | null) => void;
export type BusAcquiredCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type BusNameAcquiredCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type BusNameAppearedCallback = (connection: DBusConnection, name: string, name_owner: string, user_data: object | null) => void;
export type BusNameLostCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type BusNameVanishedCallback = (connection: DBusConnection, name: string, user_data: object | null) => void;
export type CancellableSourceFunc = (cancellable: Cancellable | null, user_data: object | null) => boolean;
export type DBusInterfaceGetPropertyFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, error: GLib.Error, user_data: object | null) => GLib.Variant;
export type DBusInterfaceMethodCallFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, method_name: string, parameters: GLib.Variant, invocation: DBusMethodInvocation, user_data: object | null) => void;
export type DBusInterfaceSetPropertyFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, property_name: string, value: GLib.Variant, error: GLib.Error, user_data: object | null) => boolean;
export type DBusMessageFilterFunction = (connection: DBusConnection, message: DBusMessage, incoming: boolean, user_data: object | null) => DBusMessage | null;
export type DBusProxyTypeFunc = (manager: DBusObjectManagerClient, object_path: string, interface_name: string | null, user_data: object | null) => any;
export type DBusSignalCallback = (connection: DBusConnection, sender_name: string, object_path: string, interface_name: string, signal_name: string, parameters: GLib.Variant, user_data: object | null) => void;
export type DBusSubtreeDispatchFunc = (connection: DBusConnection, sender: string, object_path: string, interface_name: string, node: string, out_user_data: object, user_data: object | null) => DBusInterfaceVTable;
export type DBusSubtreeEnumerateFunc = (connection: DBusConnection, sender: string, object_path: string, user_data: object | null) => string[];
export type DBusSubtreeIntrospectFunc = (connection: DBusConnection, sender: string, object_path: string, node: string, user_data: object | null) => DBusInterfaceInfo;
export type DatagramBasedSourceFunc = (datagram_based: any, condition: GLib.IOCondition, user_data: object | null) => boolean;
export type DesktopAppLaunchCallback = (appinfo: DesktopAppInfo, pid: GLib.Pid, user_data: object | null) => void;
export type FileMeasureProgressCallback = (reporting: boolean, current_size: number, num_dirs: number, num_files: number, user_data: object | null) => void;
export type FileProgressCallback = (current_num_bytes: number, total_num_bytes: number, user_data: object | null) => void;
export type FileReadMoreCallback = (file_contents: string, file_size: number, callback_data: object | null) => boolean;
export type IOSchedulerJobFunc = (job: IOSchedulerJob, cancellable: Cancellable | null, user_data: object | null) => boolean;
export type PollableSourceFunc = (pollable_stream: GObject.Object, user_data: object | null) => boolean;
export type ReallocFunc = (data: object | null, size: number) => object | null;
export type SettingsBindGetMapping = (value: GObject.Value, variant: GLib.Variant, user_data: object | null) => boolean;
export type SettingsBindSetMapping = (value: GObject.Value, expected_type: GLib.VariantType, user_data: object | null) => GLib.Variant;
export type SettingsGetMapping = (value: GLib.Variant, result: object | null, user_data: object | null) => boolean;
export type SimpleAsyncThreadFunc = (res: SimpleAsyncResult, object: GObject.Object, cancellable: Cancellable | null) => void;
export type SocketSourceFunc = (socket: Socket, condition: GLib.IOCondition, user_data: object | null) => boolean;
export type TaskThreadFunc = (task: Task, source_object: GObject.Object, task_data: object | null, cancellable: Cancellable | null) => void;
export type VfsFileLookupFunc = (vfs: Vfs, identifier: string, user_data: object | null) => any;