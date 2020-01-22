import * as libxml2 from './libxml-2';
import * as GObject from './g-object';
import * as GLib from './g-lib';
export const ATTRIBUTE_AUTO_INCREMENT: string;
export const ATTRIBUTE_DESCRIPTION: string;
export const ATTRIBUTE_IS_DEFAULT: string;
export const ATTRIBUTE_NAME: string;
export const ATTRIBUTE_NUMERIC_PRECISION: string;
export const ATTRIBUTE_NUMERIC_SCALE: string;
export const ATTRIBUTE_TREE_NODE_UNKNOWN_CHILDREN: string;
export const EXTRA_AUTO_INCREMENT: string;
export const SERVER_PROVIDER_UNDEFINED_LIMITING_THREAD: object;
export const SQLSTATE_GENERAL_ERROR: string;
export const SQLSTATE_NO_ERROR: string;
export const TIMEZONE_INVALID: number;
export enum BatchError {
  GDA_BATCH_CONFLICTING_PARAMETER_ERROR
}
export enum ConfigError {
  GDA_CONFIG_DSN_NOT_FOUND_ERROR,
  GDA_CONFIG_PERMISSION_ERROR,
  GDA_CONFIG_PROVIDER_NOT_FOUND_ERROR,
  GDA_CONFIG_PROVIDER_CREATION_ERROR
}
export enum ConnectionError {
  GDA_CONNECTION_DSN_NOT_FOUND_ERROR,
  GDA_CONNECTION_PROVIDER_NOT_FOUND_ERROR,
  GDA_CONNECTION_PROVIDER_ERROR,
  GDA_CONNECTION_NO_CNC_SPEC_ERROR,
  GDA_CONNECTION_NO_PROVIDER_SPEC_ERROR,
  GDA_CONNECTION_OPEN_ERROR,
  GDA_CONNECTION_STATEMENT_TYPE_ERROR,
  GDA_CONNECTION_CANT_LOCK_ERROR,
  GDA_CONNECTION_TASK_NOT_FOUND_ERROR,
  GDA_CONNECTION_UNSUPPORTED_THREADS_ERROR,
  GDA_CONNECTION_CLOSED_ERROR,
  GDA_CONNECTION_META_DATA_CONTEXT_ERROR,
  GDA_CONNECTION_UNSUPPORTED_ASYNC_EXEC_ERROR
}
export enum ConnectionEventCode {
  GDA_CONNECTION_EVENT_CODE_CONSTRAINT_VIOLATION,
  GDA_CONNECTION_EVENT_CODE_RESTRICT_VIOLATION,
  GDA_CONNECTION_EVENT_CODE_NOT_NULL_VIOLATION,
  GDA_CONNECTION_EVENT_CODE_FOREIGN_KEY_VIOLATION,
  GDA_CONNECTION_EVENT_CODE_UNIQUE_VIOLATION,
  GDA_CONNECTION_EVENT_CODE_CHECK_VIOLATION,
  GDA_CONNECTION_EVENT_CODE_INSUFFICIENT_PRIVILEGES,
  GDA_CONNECTION_EVENT_CODE_UNDEFINED_COLUMN,
  GDA_CONNECTION_EVENT_CODE_UNDEFINED_FUNCTION,
  GDA_CONNECTION_EVENT_CODE_UNDEFINED_TABLE,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_COLUMN,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_DATABASE,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_FUNCTION,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_SCHEMA,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_TABLE,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_ALIAS,
  GDA_CONNECTION_EVENT_CODE_DUPLICATE_OBJECT,
  GDA_CONNECTION_EVENT_CODE_SYNTAX_ERROR,
  GDA_CONNECTION_EVENT_CODE_UNKNOWN
}
export enum ConnectionEventType {
  GDA_CONNECTION_EVENT_NOTICE,
  GDA_CONNECTION_EVENT_WARNING,
  GDA_CONNECTION_EVENT_ERROR,
  GDA_CONNECTION_EVENT_COMMAND
}
export enum ConnectionFeature {
  GDA_CONNECTION_FEATURE_AGGREGATES,
  GDA_CONNECTION_FEATURE_BLOBS,
  GDA_CONNECTION_FEATURE_INDEXES,
  GDA_CONNECTION_FEATURE_INHERITANCE,
  GDA_CONNECTION_FEATURE_NAMESPACES,
  GDA_CONNECTION_FEATURE_PROCEDURES,
  GDA_CONNECTION_FEATURE_SEQUENCES,
  GDA_CONNECTION_FEATURE_SQL,
  GDA_CONNECTION_FEATURE_TRANSACTIONS,
  GDA_CONNECTION_FEATURE_SAVEPOINTS,
  GDA_CONNECTION_FEATURE_SAVEPOINTS_REMOVE,
  GDA_CONNECTION_FEATURE_TRIGGERS,
  GDA_CONNECTION_FEATURE_UPDATABLE_CURSOR,
  GDA_CONNECTION_FEATURE_USERS,
  GDA_CONNECTION_FEATURE_VIEWS,
  GDA_CONNECTION_FEATURE_XA_TRANSACTIONS,
  GDA_CONNECTION_FEATURE_MULTI_THREADING,
  GDA_CONNECTION_FEATURE_ASYNC_EXEC,
  GDA_CONNECTION_FEATURE_LAST
}
export enum ConnectionMetaType {
  GDA_CONNECTION_META_NAMESPACES,
  GDA_CONNECTION_META_TYPES,
  GDA_CONNECTION_META_TABLES,
  GDA_CONNECTION_META_VIEWS,
  GDA_CONNECTION_META_FIELDS,
  GDA_CONNECTION_META_INDEXES
}
export enum DataComparatorError {
  GDA_DATA_COMPARATOR_MISSING_DATA_MODEL_ERROR,
  GDA_DATA_COMPARATOR_COLUMN_TYPES_MISMATCH_ERROR,
  GDA_DATA_COMPARATOR_MODEL_ACCESS_ERROR,
  GDA_DATA_COMPARATOR_USER_CANCELLED_ERROR
}
export enum DataModelError {
  GDA_DATA_MODEL_ROW_OUT_OF_RANGE_ERROR,
  GDA_DATA_MODEL_COLUMN_OUT_OF_RANGE_ERROR,
  GDA_DATA_MODEL_VALUES_LIST_ERROR,
  GDA_DATA_MODEL_VALUE_TYPE_ERROR,
  GDA_DATA_MODEL_ROW_NOT_FOUND_ERROR,
  GDA_DATA_MODEL_ACCESS_ERROR,
  GDA_DATA_MODEL_FEATURE_NON_SUPPORTED_ERROR,
  GDA_DATA_MODEL_FILE_EXIST_ERROR,
  GDA_DATA_MODEL_XML_FORMAT_ERROR,
  GDA_DATA_MODEL_TRUNCATED_ERROR,
  GDA_DATA_MODEL_OTHER_ERROR
}
export enum DataModelHint {
  GDA_DATA_MODEL_HINT_START_BATCH_UPDATE,
  GDA_DATA_MODEL_HINT_END_BATCH_UPDATE,
  GDA_DATA_MODEL_HINT_REFRESH
}
export enum DataModelIOFormat {
  GDA_DATA_MODEL_IO_DATA_ARRAY_XML,
  GDA_DATA_MODEL_IO_TEXT_SEPARATED,
  GDA_DATA_MODEL_IO_TEXT_TABLE
}
export enum DataModelIterError {
  GDA_DATA_MODEL_ITER_COLUMN_OUT_OF_RANGE_ERROR
}
export enum DataPivotAggregate {
  GDA_DATA_PIVOT_AVG,
  GDA_DATA_PIVOT_COUNT,
  GDA_DATA_PIVOT_MAX,
  GDA_DATA_PIVOT_MIN,
  GDA_DATA_PIVOT_SUM
}
export enum DataPivotError {
  GDA_DATA_PIVOT_INTERNAL_ERROR,
  GDA_DATA_PIVOT_SOURCE_MODEL_ERROR,
  GDA_DATA_PIVOT_FIELD_FORMAT_ERROR,
  GDA_DATA_PIVOT_USAGE_ERROR,
  GDA_DATA_PIVOT_OVERFLOW_ERROR
}
export enum DataPivotFieldType {
  GDA_DATA_PIVOT_FIELD_ROW,
  GDA_DATA_PIVOT_FIELD_COLUMN
}
export enum DataProxyError {
  GDA_DATA_PROXY_COMMIT_ERROR,
  GDA_DATA_PROXY_COMMIT_CANCELLED,
  GDA_DATA_PROXY_READ_ONLY_VALUE,
  GDA_DATA_PROXY_READ_ONLY_ROW,
  GDA_DATA_PROXY_FILTER_ERROR
}
export enum DataSelectConditionType {
  GDA_DATA_SELECT_COND_PK,
  GDA_DATA_SELECT_COND_ALL_COLUMNS
}
export enum DataSelectError {
  GDA_DATA_SELECT_MODIFICATION_STATEMENT_ERROR,
  GDA_DATA_SELECT_MISSING_MODIFICATION_STATEMENT_ERROR,
  GDA_DATA_SELECT_CONNECTION_ERROR,
  GDA_DATA_SELECT_ACCESS_ERROR,
  GDA_DATA_SELECT_SQL_ERROR,
  GDA_DATA_SELECT_SAFETY_LOCKED_ERROR
}
export enum DiffType {
  GDA_DIFF_ADD_ROW,
  GDA_DIFF_REMOVE_ROW,
  GDA_DIFF_MODIFY_ROW
}
export enum HolderError {
  GDA_HOLDER_STRING_CONVERSION_ERROR,
  GDA_HOLDER_VALUE_TYPE_ERROR,
  GDA_HOLDER_VALUE_NULL_ERROR
}
export enum MetaDbObjectType {
  GDA_META_DB_UNKNOWN,
  GDA_META_DB_TABLE,
  GDA_META_DB_VIEW
}
export enum MetaForeignKeyPolicy {
  GDA_META_FOREIGN_KEY_UNKNOWN,
  GDA_META_FOREIGN_KEY_NONE,
  GDA_META_FOREIGN_KEY_NO_ACTION,
  GDA_META_FOREIGN_KEY_RESTRICT,
  GDA_META_FOREIGN_KEY_CASCADE,
  GDA_META_FOREIGN_KEY_SET_NULL,
  GDA_META_FOREIGN_KEY_SET_DEFAULT
}
export enum MetaSortType {
  GDA_META_SORT_ALHAPETICAL,
  GDA_META_SORT_DEPENDENCIES
}
export enum MetaStoreChangeType {
  GDA_META_STORE_ADD,
  GDA_META_STORE_REMOVE,
  GDA_META_STORE_MODIFY
}
export enum MetaStoreError {
  GDA_META_STORE_INCORRECT_SCHEMA_ERROR,
  GDA_META_STORE_UNSUPPORTED_PROVIDER_ERROR,
  GDA_META_STORE_INTERNAL_ERROR,
  GDA_META_STORE_META_CONTEXT_ERROR,
  GDA_META_STORE_MODIFY_CONTENTS_ERROR,
  GDA_META_STORE_EXTRACT_SQL_ERROR,
  GDA_META_STORE_ATTRIBUTE_NOT_FOUND_ERROR,
  GDA_META_STORE_ATTRIBUTE_ERROR,
  GDA_META_STORE_SCHEMA_OBJECT_NOT_FOUND_ERROR,
  GDA_META_STORE_SCHEMA_OBJECT_CONFLICT_ERROR,
  GDA_META_STORE_SCHEMA_OBJECT_DESCR_ERROR,
  GDA_META_STORE_TRANSACTION_ALREADY_STARTED_ERROR
}
export enum MetaStructError {
  GDA_META_STRUCT_UNKNOWN_OBJECT_ERROR,
  GDA_META_STRUCT_DUPLICATE_OBJECT_ERROR,
  GDA_META_STRUCT_INCOHERENCE_ERROR,
  GDA_META_STRUCT_XML_ERROR
}
export enum ServerOperationError {
  GDA_SERVER_OPERATION_OBJECT_NAME_ERROR,
  GDA_SERVER_OPERATION_INCORRECT_VALUE_ERROR,
  GDA_SERVER_OPERATION_XML_ERROR
}
export enum ServerOperationNodeStatus {
  GDA_SERVER_OPERATION_STATUS_OPTIONAL,
  GDA_SERVER_OPERATION_STATUS_REQUIRED,
  GDA_SERVER_OPERATION_STATUS_UNKNOWN
}
export enum ServerOperationNodeType {
  GDA_SERVER_OPERATION_NODE_PARAMLIST,
  GDA_SERVER_OPERATION_NODE_DATA_MODEL,
  GDA_SERVER_OPERATION_NODE_PARAM,
  GDA_SERVER_OPERATION_NODE_SEQUENCE,
  GDA_SERVER_OPERATION_NODE_SEQUENCE_ITEM,
  GDA_SERVER_OPERATION_NODE_DATA_MODEL_COLUMN,
  GDA_SERVER_OPERATION_NODE_UNKNOWN
}
export enum ServerOperationType {
  GDA_SERVER_OPERATION_CREATE_DB,
  GDA_SERVER_OPERATION_DROP_DB,
  GDA_SERVER_OPERATION_CREATE_TABLE,
  GDA_SERVER_OPERATION_DROP_TABLE,
  GDA_SERVER_OPERATION_RENAME_TABLE,
  GDA_SERVER_OPERATION_ADD_COLUMN,
  GDA_SERVER_OPERATION_DROP_COLUMN,
  GDA_SERVER_OPERATION_CREATE_INDEX,
  GDA_SERVER_OPERATION_DROP_INDEX,
  GDA_SERVER_OPERATION_CREATE_VIEW,
  GDA_SERVER_OPERATION_DROP_VIEW,
  GDA_SERVER_OPERATION_COMMENT_TABLE,
  GDA_SERVER_OPERATION_COMMENT_COLUMN,
  GDA_SERVER_OPERATION_CREATE_USER,
  GDA_SERVER_OPERATION_ALTER_USER,
  GDA_SERVER_OPERATION_DROP_USER,
  GDA_SERVER_OPERATION_LAST
}
export enum ServerProviderError {
  GDA_SERVER_PROVIDER_METHOD_NON_IMPLEMENTED_ERROR,
  GDA_SERVER_PROVIDER_PREPARE_STMT_ERROR,
  GDA_SERVER_PROVIDER_EMPTY_STMT_ERROR,
  GDA_SERVER_PROVIDER_MISSING_PARAM_ERROR,
  GDA_SERVER_PROVIDER_STATEMENT_EXEC_ERROR,
  GDA_SERVER_PROVIDER_OPERATION_ERROR,
  GDA_SERVER_PROVIDER_INTERNAL_ERROR,
  GDA_SERVER_PROVIDER_BUSY_ERROR,
  GDA_SERVER_PROVIDER_NON_SUPPORTED_ERROR,
  GDA_SERVER_PROVIDER_SERVER_VERSION_ERROR,
  GDA_SERVER_PROVIDER_DATA_ERROR,
  GDA_SERVER_PROVIDER_DEFAULT_VALUE_HANDLING_ERROR,
  GDA_SERVER_PROVIDER_MISUSE_ERROR,
  GDA_SERVER_PROVIDER_FILE_NOT_FOUND_ERROR
}
export enum SetError {
  GDA_SET_XML_SPEC_ERROR,
  GDA_SET_HOLDER_NOT_FOUND_ERROR,
  GDA_SET_INVALID_ERROR,
  GDA_SET_READ_ONLY_ERROR,
  GDA_SET_IMPLEMENTATION_ERROR
}
export enum SqlAnyPartType {
  GDA_SQL_ANY_STMT_SELECT,
  GDA_SQL_ANY_STMT_INSERT,
  GDA_SQL_ANY_STMT_UPDATE,
  GDA_SQL_ANY_STMT_DELETE,
  GDA_SQL_ANY_STMT_COMPOUND,
  GDA_SQL_ANY_STMT_BEGIN,
  GDA_SQL_ANY_STMT_ROLLBACK,
  GDA_SQL_ANY_STMT_COMMIT,
  GDA_SQL_ANY_STMT_SAVEPOINT,
  GDA_SQL_ANY_STMT_ROLLBACK_SAVEPOINT,
  GDA_SQL_ANY_STMT_DELETE_SAVEPOINT,
  GDA_SQL_ANY_STMT_UNKNOWN,
  GDA_SQL_ANY_EXPR,
  GDA_SQL_ANY_SQL_FIELD,
  GDA_SQL_ANY_SQL_TABLE,
  GDA_SQL_ANY_SQL_FUNCTION,
  GDA_SQL_ANY_SQL_OPERATION,
  GDA_SQL_ANY_SQL_CASE,
  GDA_SQL_ANY_SQL_SELECT_FIELD,
  GDA_SQL_ANY_SQL_SELECT_TARGET,
  GDA_SQL_ANY_SQL_SELECT_JOIN,
  GDA_SQL_ANY_SQL_SELECT_FROM,
  GDA_SQL_ANY_SQL_SELECT_ORDER
}
export enum SqlBuilderError {
  GDA_SQL_BUILDER_WRONG_TYPE_ERROR,
  GDA_SQL_BUILDER_MISUSE_ERROR
}
export enum SqlError {
  GDA_SQL_STRUCTURE_CONTENTS_ERROR,
  GDA_SQL_MALFORMED_IDENTIFIER_ERROR,
  GDA_SQL_MISSING_IDENTIFIER_ERROR,
  GDA_SQL_VALIDATION_ERROR
}
export enum SqlOperatorType {
  GDA_SQL_OPERATOR_TYPE_AND,
  GDA_SQL_OPERATOR_TYPE_OR,
  GDA_SQL_OPERATOR_TYPE_EQ,
  GDA_SQL_OPERATOR_TYPE_IS,
  GDA_SQL_OPERATOR_TYPE_LIKE,
  GDA_SQL_OPERATOR_TYPE_BETWEEN,
  GDA_SQL_OPERATOR_TYPE_GT,
  GDA_SQL_OPERATOR_TYPE_LT,
  GDA_SQL_OPERATOR_TYPE_GEQ,
  GDA_SQL_OPERATOR_TYPE_LEQ,
  GDA_SQL_OPERATOR_TYPE_DIFF,
  GDA_SQL_OPERATOR_TYPE_REGEXP,
  GDA_SQL_OPERATOR_TYPE_REGEXP_CI,
  GDA_SQL_OPERATOR_TYPE_NOT_REGEXP,
  GDA_SQL_OPERATOR_TYPE_NOT_REGEXP_CI,
  GDA_SQL_OPERATOR_TYPE_SIMILAR,
  GDA_SQL_OPERATOR_TYPE_ISNULL,
  GDA_SQL_OPERATOR_TYPE_ISNOTNULL,
  GDA_SQL_OPERATOR_TYPE_NOT,
  GDA_SQL_OPERATOR_TYPE_IN,
  GDA_SQL_OPERATOR_TYPE_NOTIN,
  GDA_SQL_OPERATOR_TYPE_CONCAT,
  GDA_SQL_OPERATOR_TYPE_PLUS,
  GDA_SQL_OPERATOR_TYPE_MINUS,
  GDA_SQL_OPERATOR_TYPE_STAR,
  GDA_SQL_OPERATOR_TYPE_DIV,
  GDA_SQL_OPERATOR_TYPE_REM,
  GDA_SQL_OPERATOR_TYPE_BITAND,
  GDA_SQL_OPERATOR_TYPE_BITOR,
  GDA_SQL_OPERATOR_TYPE_BITNOT,
  GDA_SQL_OPERATOR_TYPE_ILIKE,
  GDA_SQL_OPERATOR_TYPE_NOTLIKE,
  GDA_SQL_OPERATOR_TYPE_NOTILIKE,
  GDA_SQL_OPERATOR_TYPE_GLOB
}
export enum SqlParserError {
  GDA_SQL_PARSER_SYNTAX_ERROR,
  GDA_SQL_PARSER_OVERFLOW_ERROR,
  GDA_SQL_PARSER_EMPTY_SQL_ERROR
}
export enum SqlParserFlavour {
  GDA_SQL_PARSER_FLAVOUR_STANDARD,
  GDA_SQL_PARSER_FLAVOUR_SQLITE,
  GDA_SQL_PARSER_FLAVOUR_MYSQL,
  GDA_SQL_PARSER_FLAVOUR_ORACLE,
  GDA_SQL_PARSER_FLAVOUR_POSTGRESQL
}
export enum SqlParserMode {
  GDA_SQL_PARSER_MODE_PARSE,
  GDA_SQL_PARSER_MODE_DELIMIT
}
export enum SqlSelectJoinType {
  GDA_SQL_SELECT_JOIN_CROSS,
  GDA_SQL_SELECT_JOIN_NATURAL,
  GDA_SQL_SELECT_JOIN_INNER,
  GDA_SQL_SELECT_JOIN_LEFT,
  GDA_SQL_SELECT_JOIN_RIGHT,
  GDA_SQL_SELECT_JOIN_FULL
}
export enum SqlStatementCompoundType {
  GDA_SQL_STATEMENT_COMPOUND_UNION,
  GDA_SQL_STATEMENT_COMPOUND_UNION_ALL,
  GDA_SQL_STATEMENT_COMPOUND_INTERSECT,
  GDA_SQL_STATEMENT_COMPOUND_INTERSECT_ALL,
  GDA_SQL_STATEMENT_COMPOUND_EXCEPT,
  GDA_SQL_STATEMENT_COMPOUND_EXCEPT_ALL
}
export enum SqlStatementType {
  GDA_SQL_STATEMENT_SELECT,
  GDA_SQL_STATEMENT_INSERT,
  GDA_SQL_STATEMENT_UPDATE,
  GDA_SQL_STATEMENT_DELETE,
  GDA_SQL_STATEMENT_COMPOUND,
  GDA_SQL_STATEMENT_BEGIN,
  GDA_SQL_STATEMENT_ROLLBACK,
  GDA_SQL_STATEMENT_COMMIT,
  GDA_SQL_STATEMENT_SAVEPOINT,
  GDA_SQL_STATEMENT_ROLLBACK_SAVEPOINT,
  GDA_SQL_STATEMENT_DELETE_SAVEPOINT,
  GDA_SQL_STATEMENT_UNKNOWN,
  GDA_SQL_STATEMENT_NONE
}
export enum StatementError {
  GDA_STATEMENT_PARSE_ERROR,
  GDA_STATEMENT_SYNTAX_ERROR,
  GDA_STATEMENT_NO_CNC_ERROR,
  GDA_STATEMENT_CNC_CLOSED_ERROR,
  GDA_STATEMENT_EXEC_ERROR,
  GDA_STATEMENT_PARAM_TYPE_ERROR,
  GDA_STATEMENT_PARAM_ERROR
}
export enum ThreadNotificationType {
  GDA_THREAD_NOTIFICATION_JOB,
  GDA_THREAD_NOTIFICATION_SIGNAL
}
export enum ThreadWrapperError {
  GDA_THREAD_WRAPPER_UNKNOWN_ERROR
}
export enum TransactionIsolation {
  GDA_TRANSACTION_ISOLATION_UNKNOWN,
  GDA_TRANSACTION_ISOLATION_READ_COMMITTED,
  GDA_TRANSACTION_ISOLATION_READ_UNCOMMITTED,
  GDA_TRANSACTION_ISOLATION_REPEATABLE_READ,
  GDA_TRANSACTION_ISOLATION_SERIALIZABLE
}
export enum TransactionStatusEventType {
  GDA_TRANSACTION_STATUS_EVENT_SAVEPOINT,
  GDA_TRANSACTION_STATUS_EVENT_SQL,
  GDA_TRANSACTION_STATUS_EVENT_SUB_TRANSACTION
}
export enum TransactionStatusState {
  GDA_TRANSACTION_STATUS_STATE_OK,
  GDA_TRANSACTION_STATUS_STATE_FAILED
}
export enum TreeError {
  GDA_TREE_UNKNOWN_ERROR
}
export enum TreeManagerError {
  GDA_TREE_MANAGER_UNKNOWN_ERROR
}
export enum TreeNodeError {
  GDA_TREE_NODE_UNKNOWN_ERROR
}
export enum XaTransactionError {
  GDA_XA_TRANSACTION_ALREADY_REGISTERED_ERROR,
  GDA_XA_TRANSACTION_DTP_NOT_SUPPORTED_ERROR,
  GDA_XA_TRANSACTION_CONNECTION_BRANCH_LENGTH_ERROR
}
export enum ConnectionOptions {
  GDA_CONNECTION_OPTIONS_NONE,
  GDA_CONNECTION_OPTIONS_READ_ONLY,
  GDA_CONNECTION_OPTIONS_SQL_IDENTIFIERS_CASE_SENSITIVE,
  GDA_CONNECTION_OPTIONS_THREAD_SAFE,
  GDA_CONNECTION_OPTIONS_THREAD_ISOLATED,
  GDA_CONNECTION_OPTIONS_AUTO_META_DATA
}
export enum DataModelAccessFlags {
  GDA_DATA_MODEL_ACCESS_RANDOM,
  GDA_DATA_MODEL_ACCESS_CURSOR_FORWARD,
  GDA_DATA_MODEL_ACCESS_CURSOR_BACKWARD,
  GDA_DATA_MODEL_ACCESS_CURSOR,
  GDA_DATA_MODEL_ACCESS_INSERT,
  GDA_DATA_MODEL_ACCESS_UPDATE,
  GDA_DATA_MODEL_ACCESS_DELETE,
  GDA_DATA_MODEL_ACCESS_WRITE
}
export enum MetaGraphInfo {
  GDA_META_GRAPH_COLUMNS
}
export enum MetaStructFeature {
  GDA_META_STRUCT_FEATURE_NONE,
  GDA_META_STRUCT_FEATURE_FOREIGN_KEYS,
  GDA_META_STRUCT_FEATURE_VIEW_DEPENDENCIES,
  GDA_META_STRUCT_FEATURE_ALL
}
export enum ServerOperationCreateTableFlag {
  GDA_SERVER_OPERATION_CREATE_TABLE_NOTHING_FLAG,
  GDA_SERVER_OPERATION_CREATE_TABLE_PKEY_FLAG,
  GDA_SERVER_OPERATION_CREATE_TABLE_NOT_NULL_FLAG,
  GDA_SERVER_OPERATION_CREATE_TABLE_UNIQUE_FLAG,
  GDA_SERVER_OPERATION_CREATE_TABLE_AUTOINC_FLAG,
  GDA_SERVER_OPERATION_CREATE_TABLE_FKEY_FLAG,
  GDA_SERVER_OPERATION_CREATE_TABLE_PKEY_AUTOINC_FLAG
}
export enum SqlIdentifierStyle {
  GDA_SQL_IDENTIFIERS_LOWER_CASE,
  GDA_SQL_IDENTIFIERS_UPPER_CASE
}
export enum StatementModelUsage {
  GDA_STATEMENT_MODEL_RANDOM_ACCESS,
  GDA_STATEMENT_MODEL_CURSOR_FORWARD,
  GDA_STATEMENT_MODEL_CURSOR_BACKWARD,
  GDA_STATEMENT_MODEL_CURSOR,
  GDA_STATEMENT_MODEL_ALLOW_NOPARAM,
  GDA_STATEMENT_MODEL_OFFLINE
}
export enum StatementSqlFlag {
  GDA_STATEMENT_SQL_PARAMS_AS_VALUES,
  GDA_STATEMENT_SQL_PRETTY,
  GDA_STATEMENT_SQL_PARAMS_LONG,
  GDA_STATEMENT_SQL_PARAMS_SHORT,
  GDA_STATEMENT_SQL_PARAMS_AS_COLON,
  GDA_STATEMENT_SQL_PARAMS_AS_DOLLAR,
  GDA_STATEMENT_SQL_PARAMS_AS_QMARK,
  GDA_STATEMENT_SQL_PARAMS_AS_UQMARK,
  GDA_STATEMENT_SQL_TIMEZONE_TO_GMT
}
export enum ValueAttribute {
  GDA_VALUE_ATTR_NONE,
  GDA_VALUE_ATTR_IS_NULL,
  GDA_VALUE_ATTR_CAN_BE_NULL,
  GDA_VALUE_ATTR_IS_DEFAULT,
  GDA_VALUE_ATTR_CAN_BE_DEFAULT,
  GDA_VALUE_ATTR_IS_UNCHANGED,
  GDA_VALUE_ATTR_ACTIONS_SHOWN,
  GDA_VALUE_ATTR_DATA_NON_VALID,
  GDA_VALUE_ATTR_HAS_VALUE_ORIG,
  GDA_VALUE_ATTR_NO_MODIF,
  GDA_VALUE_ATTR_UNUSED
}
export type Mutex = GLib.RecMutex;
export type SqlBuilderId = number;
export type SqlErrorType = SqlError;
export interface DataHandler {
  accepts_g_type(...args: any[]): any;
  get_descr(...args: any[]): any;
  get_sane_init_value(...args: any[]): any;
  get_sql_from_value(...args: any[]): any;
  get_str_from_value(...args: any[]): any;
  get_value_from_sql(...args: any[]): any;
  get_value_from_str(...args: any[]): any;
}
export interface DataModel {
  add_data_from_xml_node(node: libxml2.NodePtr): boolean;
  append_row(): number;
  append_values(values: GLib.List | null): number;
  array_copy_model(): DataModelArray | null;
  array_copy_model_ext(ncols: number, cols: number[]): DataModelArray | null;
  create_iter(): DataModelIter;
  describe_column(col: number): Column | null;
  dump(to_stream: object | null): void;
  dump_as_string(): string;
  export_to_file(
    format: DataModelIOFormat,
    file: string,
    cols: number[] | null,
    nb_cols: number,
    rows: number[] | null,
    nb_rows: number,
    options: Set
  ): boolean;
  export_to_string(
    format: DataModelIOFormat,
    cols: number[] | null,
    nb_cols: number,
    rows: number[] | null,
    nb_rows: number,
    options: Set
  ): string;
  freeze(): void;
  get_access_flags(): DataModelAccessFlags;
  get_attributes_at(col: number, row: number): ValueAttribute;
  get_column_index(name: string): number;
  get_column_name(col: number): string;
  get_column_title(col: number): string;
  get_exceptions(): GLib.Error[];
  get_n_columns(): number;
  get_n_rows(): number;
  get_notify(): boolean;
  get_row_from_values(values: GLib.SList, cols_index: number[]): number;
  get_typed_value_at(
    col: number,
    row: number,
    expected_type: any,
    nullok: boolean
  ): GObject.Value | null;
  get_value_at(col: number, row: number): GObject.Value | null;
  import_from_file(
    file: string,
    cols_trans: GLib.HashTable | null,
    options: Set
  ): boolean;
  import_from_model(
    from: any,
    overwrite: boolean,
    cols_trans: GLib.HashTable | null
  ): boolean;
  import_from_string(
    string: string,
    cols_trans: GLib.HashTable | null,
    options: Set
  ): boolean;
  iter_at_row(iter: DataModelIter, row: number): boolean;
  iter_move_next_default(iter: DataModelIter): boolean;
  iter_move_prev_default(iter: DataModelIter): boolean;
  iter_move_to_row_default(iter: DataModelIter, row: number): boolean;
  iter_next(iter: DataModelIter): boolean;
  iter_prev(iter: DataModelIter): boolean;
  iter_set_value(
    iter: DataModelIter,
    col: number,
    value: GObject.Value
  ): boolean;
  remove_row(row: number): boolean;
  reset(...args: any[]): any;
  row_inserted(...args: any[]): any;
  row_removed(...args: any[]): any;
  row_updated(...args: any[]): any;
  send_hint(hint: DataModelHint, hint_value: GObject.Value | null): void;
  set_column_name(col: number, name: string): void;
  set_column_title(col: number, title: string): void;
  set_notify(do_notify_changes: boolean): void;
  set_value_at(col: number, row: number, value: GObject.Value): boolean;
  set_values(row: number, values: GLib.List | null): boolean;
  thaw(): void;
}
export interface Lockable {
  lock(): void;
  trylock(): boolean;
  unlock(): void;
}
export class Batch extends GObject.Object {
  constructor();
  static object: GObject.Object;
  static priv: BatchPrivate;
  add_statement(stmt: Statement): void;
  copy(): Batch;
  get_parameters(out_params?: Set): boolean;
  get_statements(): GLib.SList;
  remove_statement(stmt: Statement): void;
  serialize(): string;
  changed(changed_stmt: Statement): void;
  static error_quark(): GLib.Quark;
}
export class BlobOp extends GObject.Object {
  static object: GObject.Object;
  static _gda_reserved1: object;
  get_length(...args: any[]): any;
  read(...args: any[]): any;
  read_all(blob: Blob): boolean;
  write(...args: any[]): any;
  write_all(...args: any[]): any;
  get_length(...args: any[]): any;
  read(...args: any[]): any;
  write(...args: any[]): any;
  write_all(...args: any[]): any;
}
export class Column extends GObject.Object {
  constructor();
  id: string;
  static object: GObject.Object;
  static priv: ColumnPrivate;
  copy(): Column;
  get_allow_null(): boolean;
  get_attribute(attribute: string): GObject.Value;
  get_auto_increment(): boolean;
  get_dbms_type(): string;
  get_default_value(): GObject.Value | null;
  get_description(): string;
  get_g_type(): any;
  get_name(): string;
  get_position(): number;
  set_allow_null(allow: boolean): void;
  set_attribute(
    attribute: string,
    value: GObject.Value | null,
    destroy: GLib.DestroyNotify | null
  ): void;
  set_auto_increment(is_auto: boolean): void;
  set_dbms_type(dbms_type: string): void;
  set_default_value(default_value: GObject.Value | null): void;
  set_description(title: string): void;
  set_g_type(type: any): void;
  set_name(name: string): void;
  set_position(position: number): void;
  g_type_changed(old_type: any, new_type: any): void;
  name_changed(old_name: string): void;
}
export class Config extends GObject.Object {
  'system-filename': string;
  'user-filename': string;
  static object: GObject.Object;
  static priv: ConfigPrivate;
  dsn_added(new_dsn: DsnInfo): void;
  dsn_changed(dsn: DsnInfo): void;
  dsn_removed(old_dsn: DsnInfo): void;
  dsn_to_be_removed(old_dsn: DsnInfo): void;
  static can_modify_system_config(): boolean;
  static define_dsn(info: DsnInfo): boolean;
  static dsn_needs_authentication(dsn_name: string): boolean;
  static error_quark(): GLib.Quark;
  static get(): Config;
  static get_dsn_info(dsn_name: string): DsnInfo;
  static get_dsn_info_at_index(index: number): DsnInfo;
  static get_dsn_info_index(dsn_name: string): number;
  static get_nb_dsn(): number;
  static get_provider(provider_name: string): ServerProvider;
  static get_provider_info(provider_name: string): ProviderInfo;
  static list_dsn(): any;
  static list_providers(): any;
  static remove_dsn(dsn_name: string): boolean;
}
export class Connection extends GObject.Object {
  constructor(
    dsn: string,
    auth_string: string | null,
    options: ConnectionOptions
  );
  'auth-string': string;
  'cnc-string': string;
  dsn: string;
  'events-history-size': number;
  'execution-slowdown': number;
  'execution-timer': boolean;
  'is-wrapper': boolean;
  'meta-store': MetaStore;
  'monitor-wrapped-in-mainloop': boolean;
  options: any;
  provider: ServerProvider;
  'thread-owner': object;
  static object: GObject.Object;
  static priv: ConnectionPrivate;
  add_event(event: ConnectionEvent): void;
  add_event_string(str: string, ...args: any[]): ConnectionEvent;
  add_prepared_statement(gda_stmt: Statement, prepared_stmt: PStmt): void;
  add_savepoint(name: string | null): boolean;
  async_cancel(task_id: number): boolean;
  async_fetch_result(task_id: number, last_insert_row?: Set): GObject.Object;
  async_statement_execute(
    stmt: Statement,
    params: Set | null,
    model_usage: StatementModelUsage,
    col_types: any[] | null,
    need_last_insert_row: boolean
  ): number;
  batch_execute(
    batch: Batch,
    params: Set | null,
    model_usage: StatementModelUsage
  ): GLib.SList;
  begin_transaction(name: string | null, level: TransactionIsolation): boolean;
  clear_events_list(): void;
  close(): void;
  close_no_warning(): void;
  commit_transaction(name: string | null): boolean;
  create_operation(
    type: ServerOperationType,
    options: Set | null
  ): ServerOperation;
  create_parser(): SqlParser;
  del_prepared_statement(gda_stmt: Statement): void;
  delete_row_from_table(
    table: string,
    condition_column_name: string,
    condition_value: GObject.Value
  ): boolean;
  delete_savepoint(name: string | null): boolean;
  execute_non_select_command(sql: string): number;
  execute_select_command(sql: string): any;
  get_authentication(): string;
  get_cnc_string(): string;
  get_date_format(
    out_first?: GLib.DateDMY,
    out_second?: GLib.DateDMY,
    out_third?: GLib.DateDMY,
    out_sep?: string
  ): boolean;
  get_dsn(): string;
  get_events(): GLib.List;
  get_meta_store(): MetaStore;
  get_meta_store_data(
    meta_type: ConnectionMetaType,
    error: GLib.Error,
    nb_filters: number,
    ...args: any[]
  ): any;
  get_meta_store_data_v(meta_type: ConnectionMetaType, filters: GLib.List): any;
  get_options(): ConnectionOptions;
  get_prepared_statement(gda_stmt: Statement): PStmt;
  get_provider(): ServerProvider;
  get_provider_name(): string;
  get_transaction_status(): TransactionStatus;
  insert_row_into_table(
    table: string,
    error: GLib.Error,
    ...args: any[]
  ): boolean;
  insert_row_into_table_v(
    table: string,
    col_names: GLib.SList,
    values: GLib.SList
  ): boolean;
  internal_change_transaction_state(newstate: TransactionStatusState): void;
  internal_get_provider_data(): object | null;
  internal_get_provider_data_error(): object | null;
  internal_reset_transaction_status(): void;
  internal_savepoint_added(parent_trans: string | null, svp_name: string): void;
  internal_savepoint_removed(svp_name: string | null): void;
  internal_savepoint_rolledback(svp_name: string | null): void;
  internal_set_provider_data(
    data: object | null,
    destroy_func: GLib.DestroyNotify
  ): void;
  internal_statement_executed(
    stmt: Statement,
    params: Set | null,
    error: ConnectionEvent
  ): void;
  internal_transaction_committed(trans_name: string | null): void;
  internal_transaction_rolledback(trans_name: string | null): void;
  internal_transaction_started(
    parent_trans: string | null,
    trans_name: string,
    isol_level: TransactionIsolation
  ): void;
  is_opened(): boolean;
  open(): boolean;
  parse_sql_string(sql: string, params?: Set): Statement;
  perform_operation(op: ServerOperation): boolean;
  point_available_event(type: ConnectionEventType): ConnectionEvent;
  quote_sql_identifier(id: string): string;
  repetitive_statement_execute(
    rstmt: RepetitiveStatement,
    model_usage: StatementModelUsage,
    col_types: any[] | null,
    stop_on_error: boolean
  ): GLib.SList;
  rollback_savepoint(name: string | null): boolean;
  rollback_transaction(name: string | null): boolean;
  statement_execute(
    stmt: Statement,
    params: Set | null,
    model_usage: StatementModelUsage,
    last_insert_row?: Set
  ): GObject.Object;
  statement_execute_non_select(
    stmt: Statement,
    params: Set | null,
    last_insert_row?: Set
  ): number;
  statement_execute_select(stmt: Statement, params: Set | null): any;
  statement_execute_select_full(
    stmt: Statement,
    params: Set | null,
    model_usage: StatementModelUsage,
    col_types: any[] | null
  ): any;
  statement_execute_select_fullv(
    stmt: Statement,
    params: Set | null,
    model_usage: StatementModelUsage,
    error: GLib.Error,
    ...args: any[]
  ): any;
  statement_prepare(stmt: Statement): boolean;
  statement_to_sql(
    stmt: Statement,
    params: Set | null,
    flags: StatementSqlFlag,
    params_used?: GLib.SList
  ): string;
  supports_feature(feature: ConnectionFeature): boolean;
  update_meta_store(context: MetaContext | null): boolean;
  update_row_in_table(
    table: string,
    condition_column_name: string,
    condition_value: GObject.Value,
    error: GLib.Error,
    ...args: any[]
  ): boolean;
  update_row_in_table_v(
    table: string,
    condition_column_name: string,
    condition_value: GObject.Value,
    col_names: GLib.SList,
    values: GLib.SList
  ): boolean;
  value_to_sql_string(from: GObject.Value): string;
  conn_closed(): void;
  conn_opened(): void;
  conn_to_close(): void;
  dsn_changed(): void;
  error(error: ConnectionEvent): void;
  transaction_status_changed(): void;
  static error_quark(): GLib.Quark;
  static open_from_dsn(
    dsn: string,
    auth_string: string | null,
    options: ConnectionOptions
  ): Connection;
  static open_from_string(
    provider_name: string | null,
    cnc_string: string,
    auth_string: string | null,
    options: ConnectionOptions
  ): Connection;
  static open_sqlite(
    directory: string | null,
    filename: string,
    auto_unlink: boolean
  ): Connection;
  static string_split(
    string: string,
    out_cnc_params: string,
    out_provider: string,
    out_username: string,
    out_password: string | null
  ): void;
}
export class ConnectionEvent extends GObject.Object {
  type: number;
  static object: GObject.Object;
  static priv: ConnectionEventPrivate;
  get_code(): number;
  get_description(): string;
  get_event_type(): ConnectionEventType;
  get_gda_code(): ConnectionEventCode;
  get_source(): string;
  get_sqlstate(): string;
  set_code(code: number): void;
  set_description(description: string | null): void;
  set_event_type(type: ConnectionEventType): void;
  set_gda_code(code: ConnectionEventCode): void;
  set_source(source: string): void;
  set_sqlstate(sqlstate: string): void;
}
export class DataAccessWrapper extends GObject.Object {
  model: any;
  static object: GObject.Object;
  static priv: DataAccessWrapperPrivate;
  set_mapping(mapping: number[] | null, mapping_size: number): boolean;
  static g_new(model: any): any;
}
export class DataComparator extends GObject.Object {
  constructor(old_model: any, new_model: any);
  'new-model': any;
  'old-model': any;
  static object: GObject.Object;
  static priv: DataComparatorPrivate;
  compute_diff(): boolean;
  get_diff(pos: number): Diff;
  get_n_diffs(): number;
  set_key_columns(col_numbers: number[], nb_cols: number): void;
  diff_computed(diff: Diff): boolean;
  static error_quark(): GLib.Quark;
}
export class DataModelArray extends GObject.Object {
  'n-columns': number;
  'read-only': boolean;
  static object: GObject.Object;
  static priv: DataModelArrayPrivate;
  clear(): void;
  get_row(row: number): Row;
  set_n_columns(cols: number): void;
  static g_new(cols: number): any;
  static new_with_g_types(cols: number, ...args: any[]): any;
  static new_with_g_types_v(cols: number, types: any[]): any;
}
export class DataModelDir extends GObject.Object {
  basedir: string;
  static object: GObject.Object;
  static priv: DataModelDirPrivate;
  clean_errors(): void;
  get_errors(): GLib.SList;
  static g_new(basedir: string): any;
}
export class DataModelImport extends GObject.Object {
  'data-string': string;
  filename: string;
  options: Set;
  'random-access': boolean;
  strict: boolean;
  'xml-node': object;
  static object: GObject.Object;
  static priv: DataModelImportPrivate;
  clean_errors(): void;
  get_errors(): GLib.SList;
  static new_file(
    filename: string,
    random_access: boolean,
    options: Set | null
  ): any;
  static new_mem(
    data: string,
    random_access: boolean,
    options: Set | null
  ): any;
  static new_xml_node(node: libxml2.NodePtr): any;
}
export class DataModelIter extends Set {
  'current-row': number;
  'data-model': any;
  'forced-model': any;
  'update-model': boolean;
  static object: any;
  static priv: any;
  get_column_for_param(param: Holder): number;
  get_holder_for_field(col: number): Holder;
  get_row(): number;
  get_value_at(col: number): GObject.Value | null;
  get_value_at_e(col: number): GObject.Value | null;
  get_value_for_field(field_name: string): GObject.Value | null;
  invalidate_contents(): void;
  is_valid(...args: any[]): any;
  move_next(): boolean;
  move_prev(): boolean;
  move_to_row(row: number): boolean;
  set_value_at(col: number, value: GObject.Value): boolean;
  end_of_data(): void;
  row_changed(row: number): void;
  static error_quark(...args: any[]): any;
}
export class DataPivot extends GObject.Object {
  model: any;
  static object: GObject.Object;
  static priv: DataPivotPrivate;
  add_data(
    aggregate_type: DataPivotAggregate,
    field: string,
    alias: string | null
  ): boolean;
  add_field(
    field_type: DataPivotFieldType,
    field: string,
    alias: string | null
  ): boolean;
  populate(): boolean;
  static error_quark(): GLib.Quark;
  static g_new(model: any | null): any;
}
export class DataProxy extends GObject.Object {
  constructor(model: any);
  'cache-changes': boolean;
  'defer-sync': boolean;
  model: any;
  'prepend-null-entry': boolean;
  'sample-size': number;
  static object: GObject.Object;
  static priv: DataProxyPrivate;
  alter_value_attributes(
    proxy_row: number,
    col: number,
    alter_flags: ValueAttribute
  ): void;
  apply_all_changes(): boolean;
  apply_row_changes(proxy_row: number): boolean;
  cancel_all_changes(): boolean;
  cancel_row_changes(proxy_row: number, col: number): void;
  g_delete(proxy_row: number): void;
  get_filter_expr(): string;
  get_filtered_n_rows(): number;
  get_n_modified_rows(): number;
  get_n_new_rows(): number;
  get_proxied_model(): any;
  get_proxied_model_n_cols(): number;
  get_proxied_model_n_rows(): number;
  get_proxied_model_row(proxy_row: number): number;
  get_sample_end(): number;
  get_sample_size(): number;
  get_sample_start(): number;
  get_value_attributes(proxy_row: number, col: number): ValueAttribute;
  get_values(
    proxy_row: number,
    cols_index: number[],
    n_cols: number
  ): GLib.SList;
  has_changed(): boolean;
  is_read_only(): boolean;
  row_has_changed(proxy_row: number): boolean;
  row_is_deleted(proxy_row: number): boolean;
  row_is_inserted(proxy_row: number): boolean;
  set_filter_expr(filter_expr: string | null): boolean;
  set_ordering_column(col: number): boolean;
  set_sample_size(sample_size: number): void;
  set_sample_start(sample_start: number): void;
  undelete(proxy_row: number): void;
  filter_changed(): void;
  row_changes_applied(row: number, proxied_row: number): void;
  row_delete_changed(row: number, to_be_deleted: boolean): void;
  sample_changed(sample_start: number, sample_end: number): void;
  sample_size_changed(sample_size: number): void;
  validate_row_changes(row: number, proxied_row: number): GLib.Error;
  static error_quark(): GLib.Quark;
}
export class DataSelect extends GObject.Object {
  'auto-reset': boolean;
  connection: Connection;
  'delete-stmt': Statement;
  'exec-params': Set;
  'execution-delay': number;
  'insert-stmt': Statement;
  'model-usage': number;
  'prepared-stmt': PStmt;
  'select-stmt': Statement;
  'store-all-rows': boolean;
  'update-stmt': Statement;
  static object: GObject.Object;
  static priv: DataSelectPrivate;
  static prep_stmt: PStmt;
  static nb_stored_rows: number;
  static advertized_nrows: number;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
  compute_columns_attributes(): boolean;
  compute_modification_statements(): boolean;
  compute_modification_statements_ext(
    cond_type: DataSelectConditionType
  ): boolean;
  compute_row_selection_condition(): boolean;
  get_connection(): Connection;
  prepare_for_offline(): boolean;
  rerun(): boolean;
  set_modification_statement(mod_stmt: Statement): boolean;
  set_modification_statement_sql(sql: string): boolean;
  set_row_selection_condition(expr: SqlExpr): boolean;
  set_row_selection_condition_sql(sql_where: string): boolean;
  fetch_at(prow: Row, rownum: number): boolean;
  fetch_nb_rows(): number;
  fetch_next(prow: Row, rownum: number): boolean;
  fetch_prev(prow: Row, rownum: number): boolean;
  fetch_random(prow: Row, rownum: number): boolean;
  store_all(): boolean;
  static error_quark(): GLib.Quark;
}
export class HandlerBin extends GObject.Object {
  static object: GObject.Object;
  static priv: HandlerBinPriv;
  static g_new(): any;
}
export class HandlerBoolean extends GObject.Object {
  static object: GObject.Object;
  static priv: HandlerBooleanPriv;
  static g_new(): any;
}
export class HandlerNumerical extends GObject.Object {
  static object: GObject.Object;
  static priv: HandlerNumericalPriv;
  static g_new(): any;
}
export class HandlerString extends GObject.Object {
  static object: GObject.Object;
  static priv: HandlerStringPriv;
  static g_new(): any;
  static new_with_provider(prov: ServerProvider, cnc: Connection | null): any;
}
export class HandlerTime extends GObject.Object {
  static object: GObject.Object;
  static priv: HandlerTimePriv;
  get_format(type: any): string;
  get_no_locale_str_from_value(value: GObject.Value): string;
  set_sql_spec(
    first: GLib.DateDMY,
    sec: GLib.DateDMY,
    third: GLib.DateDMY,
    separator: number,
    twodigits_years: boolean
  ): void;
  set_str_spec(
    first: GLib.DateDMY,
    sec: GLib.DateDMY,
    third: GLib.DateDMY,
    separator: number,
    twodigits_years: boolean
  ): void;
  static g_new(): any;
  static new_no_locale(): any;
}
export class HandlerType extends GObject.Object {
  static object: GObject.Object;
  static priv: HandlerTypePriv;
  static g_new(): any;
}
export class Holder extends GObject.Object {
  constructor(type: any);
  description: string;
  'full-bind': Holder;
  'g-type': any;
  id: string;
  name: string;
  'not-null': boolean;
  'simple-bind': Holder;
  'source-column': number;
  'source-model': any;
  'validate-changes': boolean;
  static object: GObject.Object;
  static priv: HolderPrivate;
  copy(): Holder;
  force_invalid(): void;
  force_invalid_e(error: GLib.Error | null): void;
  get_alphanum_id(): string;
  get_attribute(attribute: string): GObject.Value;
  get_bind(): Holder;
  get_default_value(): GObject.Value;
  get_g_type(): any;
  get_id(): string;
  get_not_null(): boolean;
  get_source_model(col: number): any;
  get_value(): GObject.Value | null;
  get_value_str(dh: any | null): string;
  is_valid(): boolean;
  is_valid_e(): boolean;
  set_attribute(
    attribute: string,
    value: GObject.Value,
    destroy: GLib.DestroyNotify
  ): void;
  set_bind(bind_to: Holder): boolean;
  set_default_value(value: GObject.Value): void;
  set_not_null(not_null: boolean): void;
  set_source_model(model: any, col: number): boolean;
  set_value(value: GObject.Value | null): boolean;
  set_value_str(dh: any, value: string): boolean;
  set_value_to_default(): boolean;
  take_static_value(
    value: GObject.Value,
    value_changed: boolean
  ): GObject.Value;
  take_value(value: GObject.Value): boolean;
  value_is_default(): boolean;
  att_changed(att_name: string, att_value: GObject.Value): void;
  changed(): void;
  source_changed(): void;
  validate_change(new_value: GObject.Value): GLib.Error;
  static error_quark(): GLib.Quark;
}
export class MetaStore extends GObject.Object {
  constructor(cnc_string: string | null);
  catalog: string;
  cnc: Connection;
  'cnc-string': string;
  schema: string;
  static object: GObject.Object;
  static priv: MetaStorePrivate;
  create_modify_data_model(table_name: string): any;
  declare_foreign_key(
    mstruct: MetaStruct | null,
    fk_name: string,
    catalog: string | null,
    schema: string | null,
    table: string,
    ref_catalog: string | null,
    ref_schema: string | null,
    ref_table: string,
    nb_cols: number,
    colnames: string[],
    ref_colnames: string[]
  ): boolean;
  extract(select_sql: string, error: GLib.Error | null, ...args: any[]): any;
  extract_v(select_sql: string, vars: GLib.HashTable | null): any;
  get_attribute_value(att_name: string, att_value: string): boolean;
  get_internal_connection(): Connection;
  get_version(): number;
  modify(
    table_name: string,
    new_data: any | null,
    condition: string | null,
    error: GLib.Error | null,
    ...args: any[]
  ): boolean;
  modify_v(
    table_name: string,
    new_data: any | null,
    condition: string | null,
    nvalues: number,
    value_names: string[],
    values: GObject.Value[]
  ): boolean;
  modify_with_context(context: MetaContext, new_data: any | null): boolean;
  schema_add_custom_object(xml_description: string): boolean;
  schema_get_all_tables(): GLib.SList;
  schema_get_depend_tables(table_name: string): GLib.SList;
  schema_get_structure(): MetaStruct;
  schema_remove_custom_object(obj_name: string): boolean;
  set_attribute_value(att_name: string, att_value: string | null): boolean;
  set_identifiers_style(style: SqlIdentifierStyle): void;
  set_reserved_keywords_func(func: SqlReservedKeywordsFunc | null): void;
  undeclare_foreign_key(
    mstruct: MetaStruct | null,
    fk_name: string,
    catalog: string | null,
    schema: string | null,
    table: string,
    ref_catalog: string | null,
    ref_schema: string | null,
    ref_table: string
  ): boolean;
  meta_changed(changes: GLib.SList): void;
  meta_reset(): void;
  suggest_update(suggest: MetaContext): GLib.Error;
  static error_quark(): GLib.Quark;
  static sql_identifier_quote(id: string, cnc: Connection): string;
}
export class MetaStruct extends GObject.Object {
  constructor(store: MetaStore, features: MetaStructFeature);
  features: number;
  'meta-store': MetaStore;
  static object: GObject.Object;
  static priv: MetaStructPrivate;
  complement(
    type: MetaDbObjectType,
    catalog: GObject.Value | null,
    schema: GObject.Value | null,
    name: GObject.Value
  ): MetaDbObject;
  complement_all(): boolean;
  complement_default(): boolean;
  complement_depend(dbo: MetaDbObject): boolean;
  complement_schema(
    catalog: GObject.Value | null,
    schema: GObject.Value | null
  ): boolean;
  dump_as_graph(info: MetaGraphInfo): string;
  get_all_db_objects(): GLib.SList;
  get_db_object(
    catalog: GObject.Value | null,
    schema: GObject.Value | null,
    name: GObject.Value
  ): MetaDbObject;
  get_table_column(table: MetaTable, col_name: GObject.Value): MetaTableColumn;
  load_from_xml_file(
    catalog: string | null,
    schema: string | null,
    xml_spec_file: string
  ): boolean;
  sort_db_objects(sort_type: MetaSortType): boolean;
  static error_quark(): GLib.Quark;
}
export class PStmt extends GObject.Object {
  static object: GObject.Object;
  static priv: PStmtPrivate;
  static sql: string;
  static param_ids: GLib.SList;
  static ncols: number;
  static types: any;
  static tmpl_columns: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy_contents(dest: PStmt): void;
  get_gda_statement(): Statement;
  set_gda_statement(stmt: Statement | null): void;
}
export class RepetitiveStatement extends GObject.Object {
  constructor(stmt: Statement);
  statement: Statement;
  static parent_instance: GObject.Object;
  append_set(values: Set, make_copy: boolean): boolean;
  get_all_sets(): GLib.SList;
  get_template_set(set: Set): boolean;
}
export class Row extends GObject.Object {
  constructor(count: number);
  'nb-values': number;
  static object: GObject.Object;
  static priv: RowPrivate;
  get_length(): number;
  get_value(num: number): GObject.Value | null;
  invalidate_value(value: GObject.Value): void;
  invalidate_value_e(value: GObject.Value, error: GLib.Error | null): void;
  value_is_valid(value: GObject.Value): boolean;
  value_is_valid_e(value: GObject.Value): boolean;
}
export class ServerOperation extends GObject.Object {
  constructor(op_type: ServerOperationType, xml_file: string);
  connection: Connection;
  'op-type': number;
  provider: ServerProvider;
  'spec-filename': string;
  static object: GObject.Object;
  static priv: ServerOperationPrivate;
  add_item_to_sequence(seq_path: string): number;
  del_item_from_sequence(item_path: string): boolean;
  get_node_info(
    path_format: string,
    ...args: any[]
  ): ServerOperationNode | null;
  get_node_parent(path: string): string;
  get_node_path_portion(path: string): string;
  get_node_type(
    path: string,
    status: ServerOperationNodeStatus | null
  ): ServerOperationNodeType;
  get_op_type(): ServerOperationType;
  get_root_nodes(): string[];
  get_sequence_item_names(path: string): string[];
  get_sequence_max_size(path: string): number;
  get_sequence_min_size(path: string): number;
  get_sequence_name(path: string): string;
  get_sequence_size(path: string): number;
  get_sql_identifier_at(
    cnc: Connection | null,
    prov: ServerProvider | null,
    path_format: string,
    ...args: any[]
  ): string;
  get_sql_identifier_at_path(
    cnc: Connection | null,
    prov: ServerProvider | null,
    path: string
  ): string;
  get_value_at(path_format: string, ...args: any[]): GObject.Value;
  get_value_at_path(path: string): GObject.Value | null;
  is_valid(xml_file: string | null): boolean;
  load_data_from_xml(node: libxml2.NodePtr): boolean;
  perform_create_database(provider: string | null): boolean;
  perform_create_table(): boolean;
  perform_drop_database(provider: string | null): boolean;
  perform_drop_table(): boolean;
  save_data_to_xml(): libxml2.NodePtr;
  set_value_at(
    value: string | null,
    error: GLib.Error,
    path_format: string,
    ...args: any[]
  ): boolean;
  set_value_at_path(value: string | null, path: string): boolean;
  seq_item_added(seq_path: string, item_index: number): void;
  seq_item_remove(seq_path: string, item_index: number): void;
  static error_quark(): GLib.Quark;
  static op_type_to_string(type: ServerOperationType): string;
  static prepare_create_database(
    provider: string,
    db_name: string | null
  ): ServerOperation | null;
  static prepare_create_table(
    cnc: Connection,
    table_name: string,
    error: GLib.Error,
    ...args: any[]
  ): ServerOperation | null;
  static prepare_drop_database(
    provider: string,
    db_name: string | null
  ): ServerOperation | null;
  static prepare_drop_table(
    cnc: Connection,
    table_name: string
  ): ServerOperation | null;
  static string_to_op_type(str: string): ServerOperationType;
}
export class ServerProvider extends GObject.Object {
  static object: GObject.Object;
  static priv: ServerProviderPrivate;
  create_operation(...args: any[]): any;
  create_parser(...args: any[]): any;
  escape_string(...args: any[]): any;
  find_file(inst_dir: string, filename: string): string;
  get_data_handler_dbms(cnc: Connection | null, for_type: string): any;
  get_data_handler_default(
    cnc: Connection | null,
    type: any,
    dbms_type: string
  ): any;
  get_data_handler_g_type(cnc: Connection | null, for_type: any): any;
  get_default_dbms_type(cnc: Connection | null, type: any): string | null;
  get_name(...args: any[]): any;
  get_server_version(...args: any[]): any;
  get_version(...args: any[]): any;
  handler_declare(
    dh: any,
    cnc: Connection,
    g_type: any,
    dbms_type: string
  ): void;
  handler_find(
    cnc: Connection | null,
    g_type: any,
    dbms_type: string | null
  ): any;
  handler_use_default(type: any): any;
  internal_get_parser(): SqlParser;
  perform_operation(...args: any[]): any;
  perform_operation_default(
    cnc: Connection | null,
    op: ServerOperation
  ): boolean;
  render_operation(...args: any[]): any;
  string_to_value(
    cnc: Connection | null,
    string: string,
    preferred_type: any,
    dbms_type: string | null
  ): GObject.Value;
  supports_feature(...args: any[]): any;
  supports_operation(...args: any[]): any;
  unescape_string(...args: any[]): any;
  value_to_sql_string(cnc: Connection | null, from: GObject.Value): string;
  add_savepoint(cnc: Connection, name: string): boolean;
  begin_transaction(
    cnc: Connection,
    name: string,
    level: TransactionIsolation
  ): boolean;
  cancel(cnc: Connection, task_id: number): boolean;
  close_connection(cnc: Connection): boolean;
  commit_transaction(cnc: Connection, name: string): boolean;
  create_connection(): Connection;
  create_operation(...args: any[]): any;
  create_parser(...args: any[]): any;
  delete_savepoint(cnc: Connection, name: string): boolean;
  escape_string(...args: any[]): any;
  get_data_handler(cnc: Connection, g_type: any, dbms_type: string): any;
  get_database(cnc: Connection): string;
  get_def_dbms_type(cnc: Connection, g_type: any): string;
  get_name(...args: any[]): any;
  get_server_version(...args: any[]): any;
  get_version(...args: any[]): any;
  handle_async(cnc: Connection): boolean;
  identifier_quote(
    cnc: Connection,
    id: string,
    for_meta_store: boolean,
    force_quotes: boolean
  ): string;
  is_busy(cnc: Connection): boolean;
  open_connection(
    cnc: Connection,
    params: QuarkList,
    auth: QuarkList,
    task_id: number,
    async_cb: ServerProviderAsyncCallback,
    cb_data: object | null
  ): boolean;
  perform_operation(...args: any[]): any;
  render_operation(...args: any[]): any;
  rollback_savepoint(cnc: Connection, name: string): boolean;
  rollback_transaction(cnc: Connection, name: string): boolean;
  statement_execute(
    cnc: Connection,
    stmt: Statement,
    params: Set,
    model_usage: StatementModelUsage,
    col_types: any,
    last_inserted_row: Set,
    task_id: number,
    exec_cb: ServerProviderExecCallback,
    cb_data: object | null
  ): GObject.Object;
  statement_prepare(cnc: Connection, stmt: Statement): boolean;
  statement_rewrite(
    cnc: Connection,
    stmt: Statement,
    params: Set
  ): SqlStatement;
  statement_to_sql(
    cnc: Connection,
    stmt: Statement,
    params: Set,
    flags: StatementSqlFlag,
    params_used: GLib.SList
  ): string;
  supports_feature(...args: any[]): any;
  supports_operation(...args: any[]): any;
  unescape_string(...args: any[]): any;
  static error_quark(): GLib.Quark;
  static load_file_contents(
    inst_dir: string,
    data_dir: string,
    filename: string
  ): string;
}
export class Set extends GObject.Object {
  constructor(holders: GLib.SList);
  description: string;
  holders: any;
  id: string;
  name: string;
  'validate-changes': boolean;
  static object: GObject.Object;
  static priv: SetPrivate;
  static holders: any;
  static nodes_list: GLib.SList;
  static sources_list: GLib.SList;
  static groups_list: GLib.SList;
  add_holder(holder: Holder): boolean;
  copy(): Set;
  get_group(holder: Holder): SetGroup;
  get_holder(holder_id: string): Holder;
  get_holder_value(holder_id: string): GObject.Value | null;
  get_node(holder: Holder): SetNode;
  get_nth_holder(pos: number): Holder;
  get_source(holder: Holder): SetSource;
  get_source_for_model(model: any): SetSource;
  is_valid(): boolean;
  merge_with_set(set_to_merge: Set): void;
  remove_holder(holder: Holder): void;
  replace_source_model(source: SetSource, model: any): void;
  set_holder_value(
    error: GLib.Error | null,
    holder_id: string,
    ...args: any[]
  ): boolean;
  holder_attr_changed(
    holder: Holder,
    attr_name: string,
    attr_value: GObject.Value
  ): void;
  holder_changed(holder: Holder): void;
  holder_type_set(holder: Holder): void;
  public_data_changed(): void;
  source_model_changed(source: SetSource): void;
  validate_holder_change(holder: Holder, new_value: GObject.Value): GLib.Error;
  validate_set(): GLib.Error;
  static error_quark(): GLib.Quark;
}
export class Short {}
export class SqlBuilder extends GObject.Object {
  constructor(stmt_type: SqlStatementType);
  'stmt-type': any;
  static object: GObject.Object;
  static priv: SqlBuilderPrivate;
  add_case(
    test_expr: SqlBuilderId,
    else_expr: SqlBuilderId,
    ...args: any[]
  ): SqlBuilderId;
  add_case_v(
    test_expr: SqlBuilderId,
    else_expr: SqlBuilderId,
    when_array: SqlBuilderId[],
    then_array: SqlBuilderId[],
    args_size: number
  ): SqlBuilderId;
  add_cond(
    op: SqlOperatorType,
    op1: SqlBuilderId,
    op2: SqlBuilderId,
    op3: SqlBuilderId
  ): SqlBuilderId;
  add_cond_v(
    op: SqlOperatorType,
    op_ids: SqlBuilderId[],
    op_ids_size: number
  ): SqlBuilderId;
  add_expr(dh: any | null, type: any, ...args: any[]): SqlBuilderId;
  add_expr_value(dh: any | null, value: GObject.Value | null): SqlBuilderId;
  add_field_id(field_name: string, table_name: string | null): SqlBuilderId;
  add_field_value(field_name: string, type: any, ...args: any[]): void;
  add_field_value_as_gvalue(
    field_name: string,
    value: GObject.Value | null
  ): void;
  add_field_value_id(field_id: SqlBuilderId, value_id: SqlBuilderId): void;
  add_function(func_name: string, ...args: any[]): SqlBuilderId;
  add_function_v(
    func_name: string,
    args: SqlBuilderId[],
    args_size: number
  ): SqlBuilderId;
  add_id(str: string): SqlBuilderId;
  add_param(param_name: string, type: any, nullok: boolean): SqlBuilderId;
  add_sub_select(sqlst: SqlStatement): SqlBuilderId;
  compound_add_sub_select(sqlst: SqlStatement): void;
  compound_add_sub_select_from_builder(subselect: SqlBuilder): void;
  compound_set_type(compound_type: SqlStatementCompoundType): void;
  export_expression(id: SqlBuilderId): SqlExpr;
  get_sql_statement(): SqlStatement | null;
  get_statement(): Statement;
  import_expression(expr: SqlExpr): SqlBuilderId;
  import_expression_from_builder(
    query: SqlBuilder,
    expr_id: SqlBuilderId
  ): SqlBuilderId;
  join_add_field(join_id: SqlBuilderId, field_name: string): void;
  select_add_field(
    field_name: string,
    table_name: string | null,
    alias: string | null
  ): SqlBuilderId;
  select_add_target(table_name: string, alias: string | null): SqlBuilderId;
  select_add_target_id(
    table_id: SqlBuilderId,
    alias: string | null
  ): SqlBuilderId;
  select_group_by(expr_id: SqlBuilderId): void;
  select_join_targets(
    left_target_id: SqlBuilderId,
    right_target_id: SqlBuilderId,
    join_type: SqlSelectJoinType,
    join_expr: SqlBuilderId
  ): SqlBuilderId;
  select_order_by(
    expr_id: SqlBuilderId,
    asc: boolean,
    collation_name: string | null
  ): void;
  select_set_distinct(distinct: boolean, expr_id: SqlBuilderId): void;
  select_set_having(cond_id: SqlBuilderId): void;
  select_set_limit(
    limit_count_expr_id: SqlBuilderId,
    limit_offset_expr_id: SqlBuilderId
  ): void;
  set_table(table_name: string): void;
  set_where(cond_id: SqlBuilderId): void;
  static error_quark(): GLib.Quark;
}
export class SqlParser extends GObject.Object {
  constructor();
  'column-error': number;
  'line-error': number;
  mode: number;
  'tokenizer-flavour': number;
  static object: GObject.Object;
  static priv: SqlParserPrivate;
  parse_file_as_batch(filename: string): Batch | null;
  parse_string(sql: string, remain?: string): Statement | null;
  parse_string_as_batch(sql: string, remain?: string): Batch | null;
  set_overflow_error(): void;
  set_syntax_error(): void;
  static error_quark(): GLib.Quark;
}
export class Statement extends GObject.Object {
  constructor();
  structure: object;
  static object: GObject.Object;
  static priv: StatementPrivate;
  check_structure(): boolean;
  check_validity(cnc: Connection | null): boolean;
  copy(): Statement;
  get_parameters(out_params?: Set): boolean;
  get_statement_type(): SqlStatementType;
  is_useless(): boolean;
  normalize(cnc: Connection): boolean;
  rewrite_for_default_values(params: Set, remove: boolean): SqlStatement;
  serialize(): string;
  to_sql_extended(
    cnc: Connection | null,
    params: Set | null,
    flags: StatementSqlFlag,
    params_used?: GLib.SList
  ): string;
  to_sql_real(context: SqlRenderingContext): string;
  checked(cnc: Connection, checked: boolean): void;
  reset(): void;
  static error_quark(): GLib.Quark;
}
export class ThreadWrapper extends GObject.Object {
  constructor();
  static object: GObject.Object;
  static priv: ThreadWrapperPrivate;
  cancel(id: number): boolean;
  connect_raw(
    instance: object | null,
    sig_name: string,
    private_thread: boolean,
    private_job: boolean,
    callback: ThreadWrapperCallback,
    data: object | null
  ): number;
  disconnect(id: number): void;
  execute(
    func: ThreadWrapperFunc,
    arg: object | null,
    arg_destroy_func: GLib.DestroyNotify | null
  ): number;
  execute_void(
    func: ThreadWrapperVoidFunc,
    arg: object | null,
    arg_destroy_func: GLib.DestroyNotify | null
  ): number;
  fetch_result(may_lock: boolean, exp_id: number): object | null;
  get_io_channel(): GLib.IOChannel;
  get_waiting_size(): number;
  iterate(may_block: boolean): void;
  steal_signal(id: number): void;
  unset_io_channel(): void;
  static error_quark(): GLib.Quark;
}
export class TransactionStatus extends GObject.Object {
  constructor(name: string);
  static object: GObject.Object;
  static name: string;
  static isolation_level: TransactionIsolation;
  static state: TransactionStatusState;
  static events: GLib.List;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  add_event_sql(
    sql: string,
    conn_event: ConnectionEvent
  ): TransactionStatusEvent;
  add_event_sub(sub_trans: TransactionStatus): TransactionStatusEvent;
  add_event_svp(svp_name: string): TransactionStatusEvent;
  find(str: string, destev: TransactionStatusEvent): TransactionStatus | null;
  find_current(
    destev: TransactionStatusEvent,
    unnamed_only: boolean
  ): TransactionStatus | null;
  free_events(event: TransactionStatusEvent, free_after: boolean): void;
}
export class Tree extends GObject.Object {
  constructor();
  'is-list': boolean;
  static object: GObject.Object;
  static priv: TreePrivate;
  add_manager(manager: TreeManager): void;
  clean(): void;
  dump(node: TreeNode | null, stream: object | null): void;
  get_node(tree_path: string, use_names: boolean): TreeNode | null;
  get_node_manager(node: TreeNode): TreeManager;
  get_node_path(node: TreeNode): string;
  get_nodes_in_path(tree_path: string | null, use_names: boolean): GLib.SList;
  set_attribute(
    attribute: string,
    value: GObject.Value,
    destroy: GLib.DestroyNotify
  ): void;
  update_all(): boolean;
  update_children(node: TreeNode | null): boolean;
  update_part(node: TreeNode): boolean;
  node_changed(node: TreeNode): void;
  node_deleted(node_path: string): void;
  node_has_child_toggled(node: TreeNode): void;
  node_inserted(node: TreeNode): void;
  static error_quark(): GLib.Quark;
}
export class TreeManager extends GObject.Object {
  constructor(update_func: TreeManagerNodesFunc);
  func: object;
  recursive: boolean;
  static object: GObject.Object;
  static priv: TreeManagerPrivate;
  add_manager(sub: TreeManager): void;
  add_new_node_attribute(attribute: string, value: GObject.Value | null): void;
  create_node(parent: TreeNode | null, name: string | null): TreeNode;
  get_managers(): GLib.SList;
  get_node_create_func(): TreeManagerNodeFunc;
  set_node_create_func(func: TreeManagerNodeFunc | null): void;
  update_children(
    node: TreeNode,
    children_nodes: GLib.SList,
    out_error: boolean
  ): GLib.SList;
  static error_quark(): GLib.Quark;
}
export class TreeMgrColumns extends TreeManager {
  constructor(cnc: Connection, schema: string, table_name: string);
  connection: Connection;
  'meta-store': MetaStore;
  schema: string;
  'table-name': string;
  static object: any;
  static priv: any;
}
export class TreeMgrLabel extends TreeManager {
  constructor(label: string);
  label: string;
  static object: any;
  static priv: any;
}
export class TreeMgrSchemas extends TreeManager {
  constructor(cnc: Connection);
  connection: Connection;
  'meta-store': MetaStore;
  static object: any;
  static priv: any;
}
export class TreeMgrSelect extends TreeManager {
  constructor(cnc: Connection, stmt: Statement, params: Set);
  connection: Connection;
  params: Set;
  statement: Statement;
  static object: any;
  static priv: any;
}
export class TreeMgrTables extends TreeManager {
  constructor(cnc: Connection, schema: string | null);
  connection: Connection;
  'meta-store': MetaStore;
  schema: string;
  static object: any;
  static priv: any;
}
export class TreeNode extends GObject.Object {
  constructor(name: string | null);
  name: string;
  static object: GObject.Object;
  static priv: TreeNodePrivate;
  fetch_attribute(attribute: string): GObject.Value;
  get_child_index(index: number): TreeNode;
  get_child_name(name: string): TreeNode;
  get_children(): GLib.SList;
  get_node_attribute(attribute: string): GObject.Value;
  get_parent(): TreeNode;
  set_node_attribute(
    attribute: string,
    value: GObject.Value | null,
    destroy: GLib.DestroyNotify
  ): void;
  dump_children(prefix: string, in_string: GLib.String): void;
  dump_header(): string;
  node_changed(node: TreeNode): void;
  node_deleted(relative_path: string): void;
  node_has_child_toggled(node: TreeNode): void;
  node_inserted(node: TreeNode): void;
  static error_quark(): GLib.Quark;
}
export class UShort {}
export class XaTransaction extends GObject.Object {
  constructor(format: number, global_transaction_id: string);
  'format-id': number;
  'transaction-id': string;
  static object: GObject.Object;
  static priv: XaTransactionPrivate;
  begin(): boolean;
  commit(cnc_to_recover?: GLib.SList): boolean;
  commit_recovered(cnc_to_recover?: GLib.SList): boolean;
  register_connection(cnc: Connection, branch: string): boolean;
  rollback(): boolean;
  unregister_connection(cnc: Connection): void;
  static error_quark(): GLib.Quark;
  static string_to_id(str: string): XaTransactionId;
}
export class AttributesManager {
  clear(ptr: object | null): void;
  copy(from: object | null, to_mgr: AttributesManager, to: object | null): void;
  foreach(
    ptr: object | null,
    func: AttributesManagerFunc,
    data: object | null
  ): void;
  free(): void;
  get(ptr: object | null, att_name: string): GObject.Value;
  set(ptr: object | null, att_name: string, value: GObject.Value): void;
  set_full(
    ptr: object | null,
    att_name: string,
    value: GObject.Value,
    destroy: GLib.DestroyNotify
  ): void;
  static g_new(
    for_objects: boolean,
    signal_func: AttributesManagerSignal,
    signal_data: object | null
  ): AttributesManager;
}
export class BatchClass {
  static parent_class: GObject.ObjectClass;
  static changed: (batch: Batch, changed_stmt: Statement) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class BatchPrivate {}
export class Binary {
  static data: number[];
  static binary_length: number;
  to_string(maxlen: number): string;
  static copy(boxed: object | null): object | null;
  static free(boxed: object | null): void;
}
export class Blob {
  static data: Binary;
  static op: BlobOp;
  set_op(op: BlobOp | null): void;
  to_string(maxlen: number): string;
  static copy(boxed: object | null): object | null;
  static free(boxed: object | null): void;
}
export class BlobOpClass {
  static parent_class: GObject.ObjectClass;
  static get_length: (op: BlobOp) => number;
  static read: (op: BlobOp, blob: Blob, offset: number, size: number) => number;
  static write: (op: BlobOp, blob: Blob, offset: number) => number;
  static write_all: (op: BlobOp, blob: Blob) => boolean;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ColumnClass {
  static parent_class: GObject.ObjectClass;
  static name_changed: (column: Column, old_name: string) => void;
  static g_type_changed: (column: Column, old_type: any, new_type: any) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ColumnPrivate {}
export class ConfigClass {
  static object_class: GObject.ObjectClass;
  static dsn_added: (conf: Config, new_dsn: DsnInfo) => void;
  static dsn_to_be_removed: (conf: Config, old_dsn: DsnInfo) => void;
  static dsn_removed: (conf: Config, old_dsn: DsnInfo) => void;
  static dsn_changed: (conf: Config, dsn: DsnInfo) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ConfigPrivate {}
export class ConnectionClass {
  static object_class: GObject.ObjectClass;
  static error: (cnc: Connection, error: ConnectionEvent) => void;
  static conn_opened: (obj: Connection) => void;
  static conn_to_close: (obj: Connection) => void;
  static conn_closed: (obj: Connection) => void;
  static dsn_changed: (obj: Connection) => void;
  static transaction_status_changed: (obj: Connection) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ConnectionEventClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ConnectionEventPrivate {}
export class ConnectionPrivate {}
export class DataAccessWrapperClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataAccessWrapperPrivate {}
export class DataComparatorClass {
  static parent_class: GObject.ObjectClass;
  static diff_computed: (comp: DataComparator, diff: Diff) => boolean;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataComparatorPrivate {}
export class DataHandlerIface {
  static g_iface: GObject.TypeInterface;
  static get_sql_from_value: (dh: any, value: GObject.Value | null) => string;
  static get_str_from_value: (dh: any, value: GObject.Value | null) => string;
  static get_value_from_sql: (
    dh: any,
    sql: string | null,
    type: any
  ) => GObject.Value;
  static get_value_from_str: (
    dh: any,
    str: string | null,
    type: any
  ) => GObject.Value;
  static get_sane_init_value: (dh: any, type: any) => GObject.Value | null;
  static accepts_g_type: (dh: any, type: any) => boolean;
  static get_descr: (dh: any) => string;
}
export class DataModelArrayClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataModelArrayPrivate {}
export class DataModelDirClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataModelDirPrivate {}
export class DataModelIface {
  static g_iface: GObject.TypeInterface;
  static i_get_n_rows: (model: any) => number;
  static i_get_n_columns: (model: any) => number;
  static i_describe_column: (model: any, col: number) => Column | null;
  static i_get_access_flags: (model: any) => DataModelAccessFlags;
  static i_get_value_at: (
    model: any,
    col: number,
    row: number
  ) => GObject.Value | null;
  static i_get_attributes_at: (
    model: any,
    col: number,
    row: number
  ) => ValueAttribute;
  static i_create_iter: (model: any) => DataModelIter;
  static i_iter_at_row: (
    model: any,
    iter: DataModelIter,
    row: number
  ) => boolean;
  static i_iter_next: (model: any, iter: DataModelIter) => boolean;
  static i_iter_prev: (model: any, iter: DataModelIter) => boolean;
  static i_set_value_at: (
    model: any,
    col: number,
    row: number,
    value: GObject.Value
  ) => boolean;
  static i_iter_set_value: (
    model: any,
    iter: DataModelIter,
    col: number,
    value: GObject.Value
  ) => boolean;
  static i_set_values: (
    model: any,
    row: number,
    values: GLib.List | null
  ) => boolean;
  static i_append_values: (model: any, values: GLib.List | null) => number;
  static i_append_row: (model: any) => number;
  static i_remove_row: (model: any, row: number) => boolean;
  static i_find_row: (
    model: any,
    values: GLib.SList,
    cols_index: number[]
  ) => number;
  static i_set_notify: (model: any, do_notify_changes: boolean) => void;
  static i_get_notify: (model: any) => boolean;
  static i_send_hint: (
    model: any,
    hint: DataModelHint,
    hint_value: GObject.Value | null
  ) => void;
  static row_inserted: (model: any, row: number) => void;
  static row_updated: (model: any, row: number) => void;
  static row_removed: (model: any, row: number) => void;
  static changed: (model: any) => void;
  static reset: (model: any) => void;
  static access_changed: (model: any) => void;
  static i_get_exceptions: (model: any) => GLib.Error[];
}
export class DataModelImportClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataModelImportPrivate {}
export class DataModelIterClass {
  static parent_class: SetClass;
  static row_changed: (iter: DataModelIter, row: number) => void;
  static end_of_data: (iter: DataModelIter) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataModelIterPrivate {}
export class DataPivotClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataPivotPrivate {}
export class DataProxyClass {
  static parent_class: GObject.ObjectClass;
  static row_delete_changed: (
    proxy: DataProxy,
    row: number,
    to_be_deleted: boolean
  ) => void;
  static sample_size_changed: (proxy: DataProxy, sample_size: number) => void;
  static sample_changed: (
    proxy: DataProxy,
    sample_start: number,
    sample_end: number
  ) => void;
  static validate_row_changes: (
    proxy: DataProxy,
    row: number,
    proxied_row: number
  ) => GLib.Error;
  static row_changes_applied: (
    proxy: DataProxy,
    row: number,
    proxied_row: number
  ) => void;
  static filter_changed: (proxy: DataProxy) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataProxyPrivate {}
export class DataSelectClass {
  static parent_class: GObject.ObjectClass;
  static fetch_nb_rows: (model: DataSelect) => number;
  static fetch_random: (
    model: DataSelect,
    prow: Row,
    rownum: number
  ) => boolean;
  static store_all: (model: DataSelect) => boolean;
  static fetch_next: (model: DataSelect, prow: Row, rownum: number) => boolean;
  static fetch_prev: (model: DataSelect, prow: Row, rownum: number) => boolean;
  static fetch_at: (model: DataSelect, prow: Row, rownum: number) => boolean;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class DataSelectPrivate {}
export class Diff {
  static type: DiffType;
  static old_row: number;
  static new_row: number;
  static values: GLib.HashTable;
}
export class DsnInfo {
  constructor();
  static name: string;
  static provider: string;
  static description: string;
  static cnc_string: string;
  static auth_string: string;
  static is_system: boolean;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
  copy(): DsnInfo;
  free(): void;
}
export class GeometricPoint {
  static x: number;
  static y: number;
  static copy(boxed: object | null): object | null;
  static free(boxed: object | null): void;
}
export class HandlerBinClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
}
export class HandlerBinPriv {}
export class HandlerBooleanClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
}
export class HandlerBooleanPriv {}
export class HandlerNumericalClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
}
export class HandlerNumericalPriv {}
export class HandlerStringClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
}
export class HandlerStringPriv {}
export class HandlerTimeClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
}
export class HandlerTimePriv {}
export class HandlerTypeClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
}
export class HandlerTypePriv {}
export class HolderClass {
  static parent_class: GObject.ObjectClass;
  static changed: (holder: Holder) => void;
  static source_changed: (holder: Holder) => void;
  static validate_change: (
    holder: Holder,
    new_value: GObject.Value
  ) => GLib.Error;
  static att_changed: (
    holder: Holder,
    att_name: string,
    att_value: GObject.Value
  ) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class HolderPrivate {}
export class LockableIface {
  static g_iface: GObject.TypeInterface;
  static i_lock: (lock: any) => void;
  static i_trylock: (lock: any) => boolean;
  static i_unlock: (lock: any) => void;
}
export class MetaContext {
  constructor();
  static table_name: string;
  static size: number;
  static column_names: string[];
  static column_values: GObject.Value[];
  static columns: GLib.HashTable;
  copy(): MetaContext;
  free(): void;
  get_table(): string;
  set_column(
    column: string,
    value: GObject.Value,
    cnc: Connection | null
  ): void;
  set_columns(columns: GLib.HashTable, cnc: Connection | null): void;
  set_table(table: string): void;
}
export class MetaDbObject {
  static obj_type: MetaDbObjectType;
  static outdated: boolean;
  static obj_catalog: string;
  static obj_schema: string;
  static obj_name: string;
  static obj_short_name: string;
  static obj_full_name: string;
  static obj_owner: string;
  static depend_list: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class MetaStoreChange {
  static c_type: MetaStoreChangeType;
  static table_name: string;
  static keys: GLib.HashTable;
}
export class MetaStoreClass {
  static parent_class: GObject.ObjectClass;
  static cpriv: MetaStoreClassPrivate;
  static meta_reset: (store: MetaStore) => void;
  static suggest_update: (store: MetaStore, suggest: MetaContext) => GLib.Error;
  static meta_changed: (store: MetaStore, changes: GLib.SList) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class MetaStoreClassPrivate {}
export class MetaStorePrivate {}
export class MetaStructClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class MetaStructPrivate {}
export class MetaTable {
  static columns: GLib.SList;
  static pk_cols_array: number;
  static pk_cols_nb: number;
  static reverse_fk_list: GLib.SList;
  static fk_list: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class MetaTableColumn {
  static column_name: string;
  static column_type: string;
  static gtype: any;
  static pkey: boolean;
  static nullok: boolean;
  static default_value: string;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
  foreach_attribute(func: AttributesManagerFunc, data: object | null): void;
  get_attribute(attribute: string): GObject.Value;
  set_attribute(
    attribute: string,
    value: GObject.Value | null,
    destroy: GLib.DestroyNotify | null
  ): void;
}
export class MetaTableForeignKey {
  static meta_table: MetaDbObject;
  static depend_on: MetaDbObject;
  static cols_nb: number;
  static fk_cols_array: number;
  static fk_names_array: string;
  static ref_pk_cols_array: number;
  static ref_pk_names_array: string;
  static on_update_policy: MetaForeignKeyPolicy;
  static on_delete_policy: MetaForeignKeyPolicy;
  static declared: boolean;
  static fk_name: string;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class MetaView {
  static table: MetaTable;
  static view_def: string;
  static is_updatable: boolean;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class Numeric {
  constructor();
  static number: string;
  static precision: number;
  static width: number;
  static reserved: object;
  copy(): Numeric;
  free(): void;
  get_double(): number;
  get_precision(): number;
  get_string(): string | null;
  get_width(): number;
  set_double(number: number): void;
  set_from_string(str: string): void;
  set_precision(precision: number): void;
  set_width(width: number): void;
}
export class PStmtClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class PStmtPrivate {}
export class ProviderInfo {
  static id: string;
  static location: string;
  static description: string;
  static dsn_params: Set;
  static auth_params: Set;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class QuarkList {
  constructor();
  add_from_string(string: string, cleanup: boolean): void;
  clear(): void;
  copy(): QuarkList;
  find(name: string): string;
  foreach(func: GLib.HFunc, user_data: object | null): void;
  free(): void;
  protect_values(): void;
  remove(name: string): void;
}
export class RepetitiveStatementClass {
  static parent_class: GObject.ObjectClass;
}
export class RowClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class RowPrivate {}
export class ServerOperationClass {
  static parent_class: GObject.ObjectClass;
  static seq_item_added: (
    op: ServerOperation,
    seq_path: string,
    item_index: number
  ) => void;
  static seq_item_remove: (
    op: ServerOperation,
    seq_path: string,
    item_index: number
  ) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ServerOperationNode {
  static type: ServerOperationNodeType;
  static status: ServerOperationNodeStatus;
  static plist: Set;
  static model: any;
  static column: Column;
  static param: Holder;
  static priv: object;
}
export class ServerOperationPrivate {}
export class ServerProviderClass {
  static parent_class: GObject.ObjectClass;
  static limiting_thread: GLib.Thread;
  static get_name: (provider: ServerProvider) => string;
  static get_version: (provider: ServerProvider) => string;
  static get_server_version: (
    provider: ServerProvider,
    cnc: Connection
  ) => string;
  static supports_feature: (
    provider: ServerProvider,
    cnc: Connection | null,
    feature: ConnectionFeature
  ) => boolean;
  static get_data_handler: (
    provider: ServerProvider,
    cnc: Connection,
    g_type: any,
    dbms_type: string
  ) => any;
  static get_def_dbms_type: (
    provider: ServerProvider,
    cnc: Connection,
    g_type: any
  ) => string;
  static escape_string: (
    provider: ServerProvider,
    cnc: Connection | null,
    str: string
  ) => string;
  static unescape_string: (
    provider: ServerProvider,
    cnc: Connection | null,
    str: string
  ) => string;
  static open_connection: (
    provider: ServerProvider,
    cnc: Connection,
    params: QuarkList,
    auth: QuarkList,
    task_id: number,
    async_cb: ServerProviderAsyncCallback,
    cb_data: object | null
  ) => boolean;
  static close_connection: (
    provider: ServerProvider,
    cnc: Connection
  ) => boolean;
  static get_database: (provider: ServerProvider, cnc: Connection) => string;
  static supports_operation: (
    provider: ServerProvider,
    cnc: Connection | null,
    type: ServerOperationType,
    options: Set | null
  ) => boolean;
  static create_operation: (
    provider: ServerProvider,
    cnc: Connection | null,
    type: ServerOperationType,
    options: Set | null
  ) => ServerOperation | null;
  static render_operation: (
    provider: ServerProvider,
    cnc: Connection | null,
    op: ServerOperation
  ) => string | null;
  static perform_operation: (
    provider: ServerProvider,
    cnc: Connection,
    op: ServerOperation,
    task_id: number,
    async_cb: ServerProviderAsyncCallback,
    cb_data: object | null
  ) => boolean;
  static begin_transaction: (
    provider: ServerProvider,
    cnc: Connection,
    name: string,
    level: TransactionIsolation
  ) => boolean;
  static commit_transaction: (
    provider: ServerProvider,
    cnc: Connection,
    name: string
  ) => boolean;
  static rollback_transaction: (
    provider: ServerProvider,
    cnc: Connection,
    name: string
  ) => boolean;
  static add_savepoint: (
    provider: ServerProvider,
    cnc: Connection,
    name: string
  ) => boolean;
  static rollback_savepoint: (
    provider: ServerProvider,
    cnc: Connection,
    name: string
  ) => boolean;
  static delete_savepoint: (
    provider: ServerProvider,
    cnc: Connection,
    name: string
  ) => boolean;
  static create_parser: (
    provider: ServerProvider,
    cnc: Connection | null
  ) => SqlParser;
  static statement_to_sql: (
    provider: ServerProvider,
    cnc: Connection,
    stmt: Statement,
    params: Set,
    flags: StatementSqlFlag,
    params_used: GLib.SList
  ) => string;
  static statement_prepare: (
    provider: ServerProvider,
    cnc: Connection,
    stmt: Statement
  ) => boolean;
  static statement_execute: (
    provider: ServerProvider,
    cnc: Connection,
    stmt: Statement,
    params: Set,
    model_usage: StatementModelUsage,
    col_types: any,
    last_inserted_row: Set,
    task_id: number,
    exec_cb: ServerProviderExecCallback,
    cb_data: object | null
  ) => GObject.Object;
  static is_busy: (provider: ServerProvider, cnc: Connection) => boolean;
  static cancel: (
    provider: ServerProvider,
    cnc: Connection,
    task_id: number
  ) => boolean;
  static create_connection: (provider: ServerProvider) => Connection;
  static meta_funcs: ServerProviderMeta;
  static xa_funcs: ServerProviderXa;
  static identifier_quote: (
    provider: ServerProvider,
    cnc: Connection,
    id: string,
    for_meta_store: boolean,
    force_quotes: boolean
  ) => string;
  static handle_async: (provider: ServerProvider, cnc: Connection) => boolean;
  static statement_rewrite: (
    provider: ServerProvider,
    cnc: Connection,
    stmt: Statement,
    params: Set
  ) => SqlStatement;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
  static _gda_reserved5: () => void;
  static _gda_reserved6: () => void;
}
export class ServerProviderHandlerInfo {
  static cnc: Connection;
  static g_type: any;
  static dbms_type: string;
}
export class ServerProviderInfo {}
export class ServerProviderMeta {
  static _info: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static _btypes: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static _udt: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static udt: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    udt_catalog: GObject.Value,
    udt_schema: GObject.Value
  ) => boolean;
  static _udt_cols: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static udt_cols: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    udt_catalog: GObject.Value,
    udt_schema: GObject.Value,
    udt_name: GObject.Value
  ) => boolean;
  static _enums: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static enums: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    udt_catalog: GObject.Value,
    udt_schema: GObject.Value,
    udt_name: GObject.Value
  ) => boolean;
  static _domains: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static domains: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    domain_catalog: GObject.Value,
    domain_schema: GObject.Value
  ) => boolean;
  static _constraints_dom: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static constraints_dom: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    domain_catalog: GObject.Value,
    domain_schema: GObject.Value,
    domain_name: GObject.Value
  ) => boolean;
  static _el_types: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static el_types: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    specific_name: GObject.Value
  ) => boolean;
  static _collations: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static collations: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    collation_catalog: GObject.Value,
    collation_schema: GObject.Value,
    collation_name_n: GObject.Value
  ) => boolean;
  static _character_sets: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static character_sets: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    chset_catalog: GObject.Value,
    chset_schema: GObject.Value,
    chset_name_n: GObject.Value
  ) => boolean;
  static _schemata: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static schemata: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    catalog_name: GObject.Value,
    schema_name_n: GObject.Value
  ) => boolean;
  static _tables_views: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static tables_views: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name_n: GObject.Value
  ) => boolean;
  static _columns: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static columns: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value
  ) => boolean;
  static _view_cols: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static view_cols: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    view_catalog: GObject.Value,
    view_schema: GObject.Value,
    view_name: GObject.Value
  ) => boolean;
  static _constraints_tab: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static constraints_tab: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value,
    constraint_name_n: GObject.Value
  ) => boolean;
  static _constraints_ref: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static constraints_ref: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value,
    constraint_name: GObject.Value
  ) => boolean;
  static _key_columns: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static key_columns: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value,
    constraint_name: GObject.Value
  ) => boolean;
  static _check_columns: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static check_columns: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value,
    constraint_name: GObject.Value
  ) => boolean;
  static _triggers: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static triggers: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value
  ) => boolean;
  static _routines: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static routines: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    routine_catalog: GObject.Value,
    routine_schema: GObject.Value,
    routine_name_n: GObject.Value
  ) => boolean;
  static _routine_col: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static routine_col: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    rout_catalog: GObject.Value,
    rout_schema: GObject.Value,
    rout_name: GObject.Value
  ) => boolean;
  static _routine_par: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static routine_par: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    rout_catalog: GObject.Value,
    rout_schema: GObject.Value,
    rout_name: GObject.Value
  ) => boolean;
  static _indexes_tab: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static indexes_tab: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value,
    index_name_n: GObject.Value
  ) => boolean;
  static _index_cols: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext
  ) => boolean;
  static index_cols: (
    prov: ServerProvider,
    cnc: Connection,
    meta: MetaStore,
    ctx: MetaContext,
    error: GLib.Error,
    table_catalog: GObject.Value,
    table_schema: GObject.Value,
    table_name: GObject.Value,
    index_name: GObject.Value
  ) => boolean;
  static _gda_reserved5: () => void;
  static _gda_reserved6: () => void;
  static _gda_reserved7: () => void;
  static _gda_reserved8: () => void;
  static _gda_reserved9: () => void;
  static _gda_reserved10: () => void;
  static _gda_reserved11: () => void;
  static _gda_reserved12: () => void;
  static _gda_reserved13: () => void;
  static _gda_reserved14: () => void;
  static _gda_reserved15: () => void;
  static _gda_reserved16: () => void;
}
export class ServerProviderPrivate {
  static data_handlers: GLib.HashTable;
  static parser: SqlParser;
}
export class ServerProviderXa {
  static xa_start: (
    prov: ServerProvider,
    cnc: Connection,
    trx: XaTransactionId
  ) => boolean;
  static xa_end: (
    prov: ServerProvider,
    cnc: Connection,
    trx: XaTransactionId
  ) => boolean;
  static xa_prepare: (
    prov: ServerProvider,
    cnc: Connection,
    trx: XaTransactionId
  ) => boolean;
  static xa_commit: (
    prov: ServerProvider,
    cnc: Connection,
    trx: XaTransactionId
  ) => boolean;
  static xa_rollback: (
    prov: ServerProvider,
    cnc: Connection,
    trx: XaTransactionId
  ) => boolean;
  static xa_recover: (prov: ServerProvider, cnc: Connection) => GLib.List;
}
export class SetClass {
  static parent_class: GObject.ObjectClass;
  static validate_holder_change: (
    set: Set,
    holder: Holder,
    new_value: GObject.Value
  ) => GLib.Error;
  static validate_set: (set: Set) => GLib.Error;
  static holder_changed: (set: Set, holder: Holder) => void;
  static holder_attr_changed: (
    set: Set,
    holder: Holder,
    attr_name: string,
    attr_value: GObject.Value
  ) => void;
  static public_data_changed: (set: Set) => void;
  static holder_type_set: (set: Set, holder: Holder) => void;
  static source_model_changed: (set: Set, source: SetSource) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class SetGroup {
  constructor(node: SetNode);
  static nodes: GLib.SList;
  static nodes_source: SetSource;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  add_node(node: SetNode): void;
  copy(): SetGroup;
  free(): void;
  get_n_nodes(): number;
  get_node(): SetNode;
  get_nodes(): GLib.SList;
  get_source(): SetSource;
  set_source(source: SetSource): void;
}
export class SetNode {
  constructor(holder: Holder);
  static holder: Holder;
  static source_model: any;
  static source_column: number;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SetNode;
  free(): void;
  get_data_model(): any;
  get_holder(): Holder;
  get_source_column(): number;
  set_data_model(model: any | null): void;
  set_holder(holder: Holder): void;
  set_source_column(column: number): void;
}
export class SetPrivate {}
export class SetSource {
  constructor(model: any);
  static data_model: any;
  static nodes: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
  add_node(node: SetNode): void;
  copy(): SetSource;
  free(): void;
  get_data_model(): any;
  get_n_nodes(): number;
  get_nodes(): GLib.SList;
  set_data_model(model: any): void;
}
export class SqlAnyPart {
  static type: SqlAnyPartType;
  static parent: SqlAnyPart;
  check_structure(): boolean;
  foreach(func: SqlForeachFunc, data: object | null): boolean;
}
export class SqlBuilderClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class SqlBuilderPrivate {}
export class SqlCase {
  static any: SqlAnyPart;
  static base_expr: SqlExpr;
  static when_expr_list: GLib.SList;
  static then_expr_list: GLib.SList;
  static else_expr: SqlExpr;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlCase;
  free(): void;
  serialize(): string;
  static g_new(parent: SqlAnyPart): SqlCase;
}
export class SqlExpr {
  constructor(parent: SqlAnyPart);
  static any: SqlAnyPart;
  static value: GObject.Value;
  static param_spec: any;
  static func: SqlFunction;
  static cond: SqlOperation;
  static select: SqlAnyPart;
  static case_s: SqlCase;
  static cast_as: string;
  static value_is_ident: boolean;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
  copy(): SqlExpr;
  free(): void;
  serialize(): string;
  take_select(stmt: SqlStatement): void;
}
export class SqlField {
  static any: SqlAnyPart;
  static field_name: string;
  static validity_meta_table_column: MetaTableColumn;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlField;
  free(): void;
  serialize(): string;
  take_name(value: GObject.Value): void;
  static g_new(parent: SqlAnyPart): SqlField;
}
export class SqlFunction {
  static any: SqlAnyPart;
  static function_name: string;
  static args_list: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  check_clean(): void;
  copy(): SqlFunction;
  free(): void;
  serialize(): string;
  take_args_list(args: GLib.SList): void;
  take_name(value: GObject.Value): void;
  static g_new(parent: SqlAnyPart): SqlFunction;
}
export class SqlOperation {
  static any: SqlAnyPart;
  static operator_type: SqlOperatorType;
  static operands: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlOperation;
  free(): void;
  serialize(): string;
  static g_new(parent: SqlAnyPart): SqlOperation;
  static operator_from_string(op: string): SqlOperatorType;
  static operator_to_string(op: SqlOperatorType): string;
}
export class SqlParserClass {
  static parent_class: GObject.ObjectClass;
  static delim_alloc: (f: object) => object;
  static delim_free: (d: object, f: object) => void;
  static delim_trace: (d: object, s: string) => void;
  static delim_parse: (
    d: object,
    i: number,
    v: GObject.Value,
    iface: SqlParserIface
  ) => void;
  static delim_tokens_trans: number;
  static parser_alloc: (f: object) => object;
  static parser_free: (p: object, f: object) => void;
  static parser_trace: (p: object, s: string) => void;
  static parser_parse: (
    p: object,
    i: number,
    v: GObject.Value,
    iface: SqlParserIface
  ) => void;
  static parser_tokens_trans: number;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class SqlParserIface {
  static parser: SqlParser;
  static parsed_statement: SqlStatement;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
}
export class SqlParserPrivate {}
export class SqlRenderingContext {
  static flags: StatementSqlFlag;
  static params: Set;
  static params_used: GLib.SList;
  static provider: ServerProvider;
  static cnc: Connection;
  static render_value: SqlRenderingValue;
  static render_param_spec: SqlRenderingPSpecFunc;
  static render_expr: SqlRenderingExpr;
  static render_unknown: SqlRenderingFunc;
  static render_begin: SqlRenderingFunc;
  static render_rollback: SqlRenderingFunc;
  static render_commit: SqlRenderingFunc;
  static render_savepoint: SqlRenderingFunc;
  static render_rollback_savepoint: SqlRenderingFunc;
  static render_delete_savepoint: SqlRenderingFunc;
  static render_select: SqlRenderingFunc;
  static render_insert: SqlRenderingFunc;
  static render_delete: SqlRenderingFunc;
  static render_update: SqlRenderingFunc;
  static render_compound: SqlRenderingFunc;
  static render_field: SqlRenderingFunc;
  static render_table: SqlRenderingFunc;
  static render_function: SqlRenderingFunc;
  static render_operation: SqlRenderingFunc;
  static render_case: SqlRenderingFunc;
  static render_select_field: SqlRenderingFunc;
  static render_select_target: SqlRenderingFunc;
  static render_select_join: SqlRenderingFunc;
  static render_select_from: SqlRenderingFunc;
  static render_select_order: SqlRenderingFunc;
  static render_distinct: SqlRenderingFunc;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
  static _gda_reserved5: () => void;
  static _gda_reserved6: () => void;
  static _gda_reserved7: () => void;
}
export class SqlSelectField {
  static any: SqlAnyPart;
  static expr: SqlExpr;
  static field_name: string;
  static table_name: string;
  static as: string;
  static validity_meta_object: MetaDbObject;
  static validity_meta_table_column: MetaTableColumn;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlSelectField;
  free(): void;
  serialize(): string;
  take_alias(alias: GObject.Value): void;
  take_expr(expr: SqlExpr): void;
  take_star_value(value: GObject.Value): void;
  static g_new(parent: SqlAnyPart): SqlSelectField;
}
export class SqlSelectFrom {
  static any: SqlAnyPart;
  static targets: GLib.SList;
  static joins: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlSelectFrom;
  free(): void;
  serialize(): string;
  take_new_join(join: SqlSelectJoin): void;
  take_new_target(target: SqlSelectTarget): void;
  static g_new(parent: SqlAnyPart): SqlSelectFrom;
}
export class SqlSelectJoin {
  static any: SqlAnyPart;
  static type: SqlSelectJoinType;
  static position: number;
  static expr: SqlExpr;
  static use: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlSelectJoin;
  free(): void;
  serialize(): string;
  static g_new(parent: SqlAnyPart): SqlSelectJoin;
  static type_to_string(type: SqlSelectJoinType): string;
}
export class SqlSelectOrder {
  static any: SqlAnyPart;
  static expr: SqlExpr;
  static asc: boolean;
  static collation_name: string;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlSelectOrder;
  free(): void;
  serialize(): string;
  static g_new(parent: SqlAnyPart): SqlSelectOrder;
}
export class SqlSelectTarget {
  static any: SqlAnyPart;
  static expr: SqlExpr;
  static table_name: string;
  static as: string;
  static validity_meta_object: MetaDbObject;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlSelectTarget;
  free(): void;
  serialize(): string;
  take_alias(alias: GObject.Value): void;
  take_select(stmt: SqlStatement): void;
  take_table_name(value: GObject.Value): void;
  static g_new(parent: SqlAnyPart): SqlSelectTarget;
}
export class SqlStatement {
  compound_set_type(type: SqlStatementCompoundType): void;
  compound_take_stmt(s: SqlStatement): void;
}
export class SqlStatementCheckValidityData {
  static cnc: Connection;
  static store: MetaStore;
  static mstruct: MetaStruct;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class SqlStatementCompound {
  static any: SqlAnyPart;
  static compound_type: SqlStatementCompoundType;
  static stmt_list: GLib.SList;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
}
export class SqlStatementContentsInfo {
  static type: SqlStatementType;
  static name: string;
  static construct: () => object;
  static free: (stm: object) => void;
  static copy: (stm: object) => object;
  static serialize: (stm: object) => string;
  static check_structure_func: SqlForeachFunc;
  static check_validity_func: SqlForeachFunc;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  static _gda_reserved3: object;
  static _gda_reserved4: object;
}
export class SqlStatementDelete {}
export class SqlStatementInsert {}
export class SqlStatementSelect {}
export class SqlStatementTransaction {}
export class SqlStatementUnknown {}
export class SqlStatementUpdate {}
export class SqlTable {
  static any: SqlAnyPart;
  static table_name: string;
  static validity_meta_object: MetaDbObject;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
  copy(): SqlTable;
  free(): void;
  serialize(): string;
  take_name(value: GObject.Value): void;
  static g_new(parent: SqlAnyPart): SqlTable;
}
export class StatementClass {
  static parent_class: GObject.ObjectClass;
  static checked: (stmt: Statement, cnc: Connection, checked: boolean) => void;
  static reset: (stmt: Statement) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class StatementPrivate {}
export class ThreadNotification {
  static type: ThreadNotificationType;
  static job_id: number;
}
export class ThreadWrapperClass {
  static object_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class ThreadWrapperPrivate {}
export class Time {
  static hour: number;
  static minute: number;
  static second: number;
  static fraction: number;
  static timezone: number;
  change_timezone(ntz: number): void;
  valid(): boolean;
  static copy(boxed: object | null): object | null;
  static free(boxed: object | null): void;
}
export class Timestamp {
  static year: any;
  static month: number;
  static day: number;
  static hour: number;
  static minute: number;
  static second: number;
  static fraction: number;
  static timezone: number;
  change_timezone(ntz: number): void;
  valid(): boolean;
  static copy(boxed: object | null): object | null;
  static free(boxed: object | null): void;
}
export class TransactionStatusClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class TransactionStatusEvent {
  static trans: TransactionStatus;
  static type: TransactionStatusEventType;
  static conn_event: ConnectionEvent;
  static _gda_reserved1: object;
  static _gda_reserved2: object;
}
export class TreeClass {
  static object_class: GObject.ObjectClass;
  static node_changed: (tree: Tree, node: TreeNode) => void;
  static node_inserted: (tree: Tree, node: TreeNode) => void;
  static node_has_child_toggled: (tree: Tree, node: TreeNode) => void;
  static node_deleted: (tree: Tree, node_path: string) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class TreeManagerClass {
  static object_class: GObject.ObjectClass;
  static update_children: (
    manager: TreeManager,
    node: TreeNode,
    children_nodes: GLib.SList,
    out_error: boolean
  ) => GLib.SList;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class TreeManagerPrivate {}
export class TreeMgrColumnsClass {
  static object_class: TreeManagerClass;
}
export class TreeMgrColumnsPriv {}
export class TreeMgrLabelClass {
  static object_class: TreeManagerClass;
}
export class TreeMgrLabelPriv {}
export class TreeMgrSchemasClass {
  static object_class: TreeManagerClass;
}
export class TreeMgrSchemasPriv {}
export class TreeMgrSelectClass {
  static object_class: TreeManagerClass;
}
export class TreeMgrSelectPriv {}
export class TreeMgrTablesClass {
  static object_class: TreeManagerClass;
}
export class TreeMgrTablesPriv {}
export class TreeNodeClass {
  static object_class: GObject.ObjectClass;
  static node_changed: (reporting: TreeNode, node: TreeNode) => void;
  static node_inserted: (reporting: TreeNode, node: TreeNode) => void;
  static node_has_child_toggled: (reporting: TreeNode, node: TreeNode) => void;
  static node_deleted: (reporting: TreeNode, relative_path: string) => void;
  static dump_header: (node: TreeNode) => string;
  static dump_children: (
    node: TreeNode,
    prefix: string,
    in_string: GLib.String
  ) => void;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class TreeNodePrivate {}
export class TreePrivate {}
export class XaTransactionClass {
  static parent_class: GObject.ObjectClass;
  static _gda_reserved1: () => void;
  static _gda_reserved2: () => void;
  static _gda_reserved3: () => void;
  static _gda_reserved4: () => void;
}
export class XaTransactionId {
  static format: number;
  static gtrid_length: number;
  static bqual_length: number;
  static data: number[];
  to_string(): string;
}
export class XaTransactionPrivate {}
export function alphanum_to_text(text: string): string;
export function attributes_manager_new(
  for_objects: boolean,
  signal_func: AttributesManagerSignal,
  signal_data: object | null
): AttributesManager;
export function binary_copy(boxed: object | null): object | null;
export function binary_free(boxed: object | null): void;
export function blob_copy(boxed: object | null): object | null;
export function blob_free(boxed: object | null): void;
export function completion_list_get(
  cnc: Connection,
  sql: string,
  start: number,
  end: number
): string[] | null;
export function compute_dml_statements(
  cnc: Connection,
  select_stmt: Statement,
  require_pk: boolean,
  insert_stmt: Statement | null,
  update_stmt: Statement | null,
  delete_stmt: Statement | null
): boolean;
export function compute_select_statement_from_update(
  update_stmt: Statement
): SqlStatement;
export function compute_unique_table_row_condition(
  stsel: SqlStatementSelect,
  mtable: MetaTable,
  require_pk: boolean
): SqlExpr;
export function compute_unique_table_row_condition_with_cnc(
  cnc: Connection | null,
  stsel: SqlStatementSelect,
  mtable: MetaTable,
  require_pk: boolean
): SqlExpr;
export function data_handler_get_default(for_type: any): any;
export function data_model_error_quark(): GLib.Quark;
export function default_escape_string(string: string): string;
export function default_unescape_string(string: string): string;
export function dsn_split(
  string: string,
  out_dsn: string,
  out_username: string,
  out_password: string
): void;
export function g_type_from_string(str: string): any;
export function g_type_to_string(type: any): string;
export function geometricpoint_copy(boxed: object | null): object | null;
export function geometricpoint_free(boxed: object | null): void;
export function get_application_exec_path(app_name: string): string;
export function identifier_equal(id1: string, id2: string): boolean;
export function identifier_hash(id: string): number;
export function init(): void;
export function locale_changed(): void;
export function log_disable(): void;
export function log_enable(): void;
export function log_error(format: string, ...args: any[]): void;
export function log_is_enabled(): boolean;
export function log_message(format: string, ...args: any[]): void;
export function mutex_free(mutex: Mutex): void;
export function mutex_lock(mutex: Mutex): void;
export function mutex_new(): Mutex;
export function mutex_trylock(mutex: Mutex): boolean;
export function mutex_unlock(mutex: Mutex): void;
export function parse_formatted_date(
  gdate: GLib.Date,
  value: string,
  first: GLib.DateDMY,
  second: GLib.DateDMY,
  third: GLib.DateDMY,
  sep: number
): boolean;
export function parse_formatted_time(
  timegda: Time,
  value: string,
  sep: number
): boolean;
export function parse_formatted_timestamp(
  timestamp: Timestamp,
  value: string,
  first: GLib.DateDMY,
  second: GLib.DateDMY,
  third: GLib.DateDMY,
  sep: number
): boolean;
export function parse_iso8601_date(gdate: GLib.Date, value: string): boolean;
export function parse_iso8601_time(timegda: Time, value: string): boolean;
export function parse_iso8601_timestamp(
  timestamp: Timestamp,
  value: string
): boolean;
export function rewrite_sql_statement_for_null_parameters(
  sqlst: SqlStatement,
  params: Set,
  out_modified: boolean | null
): SqlStatement;
export function rewrite_statement_for_null_parameters(
  stmt: Statement,
  params: Set,
  out_stmt: Statement | null
): boolean;
export function rfc1738_decode(string: string): boolean;
export function rfc1738_encode(string: string): string;
export function select_alter_select_for_empty(stmt: Statement): Statement;
export function sql_case_new(parent: SqlAnyPart): SqlCase;
export function sql_error_quark(): GLib.Quark;
export function sql_field_new(parent: SqlAnyPart): SqlField;
export function sql_function_new(parent: SqlAnyPart): SqlFunction;
export function sql_identifier_quote(
  id: string,
  cnc: Connection | null,
  prov: ServerProvider | null,
  meta_store_convention: boolean,
  force_quotes: boolean
): string;
export function sql_identifier_split(id: string): string[] | null;
export function sql_operation_new(parent: SqlAnyPart): SqlOperation;
export function sql_operation_operator_from_string(op: string): SqlOperatorType;
export function sql_operation_operator_to_string(op: SqlOperatorType): string;
export function sql_select_field_new(parent: SqlAnyPart): SqlSelectField;
export function sql_select_from_new(parent: SqlAnyPart): SqlSelectFrom;
export function sql_select_join_new(parent: SqlAnyPart): SqlSelectJoin;
export function sql_select_join_type_to_string(type: SqlSelectJoinType): string;
export function sql_select_order_new(parent: SqlAnyPart): SqlSelectOrder;
export function sql_select_target_new(parent: SqlAnyPart): SqlSelectTarget;
export function sql_table_new(parent: SqlAnyPart): SqlTable;
export function string_to_binary(str: string | null): Binary;
export function string_to_blob(str: string): Blob;
export function text_to_alphanum(text: string): string;
export function time_copy(boxed: object | null): object | null;
export function time_free(boxed: object | null): void;
export function timestamp_copy(boxed: object | null): object | null;
export function timestamp_free(boxed: object | null): void;
export function utility_check_data_model(
  model: any,
  nbcols: number,
  ...args: any[]
): boolean;
export function utility_check_data_model_v(
  model: any,
  nbcols: number,
  types: any[]
): boolean;
export function utility_data_model_dump_data_to_xml(
  model: any,
  parent: libxml2.NodePtr,
  cols: number[] | null,
  nb_cols: number,
  rows: number[] | null,
  nb_rows: number,
  use_col_ids: boolean
): boolean;
export function utility_data_model_find_column_description(
  model: DataSelect,
  field_name: string
): string;
export function utility_holder_load_attributes(
  holder: Holder,
  node: libxml2.NodePtr,
  sources: GLib.SList
): boolean;
export function value_compare(
  value1: GObject.Value,
  value2: GObject.Value
): number;
export function value_copy(value: GObject.Value): GObject.Value;
export function value_differ(
  value1: GObject.Value,
  value2: GObject.Value
): number;
export function value_free(value: GObject.Value | null): void;
export function value_get_binary(value: GObject.Value): Binary;
export function value_get_blob(value: GObject.Value): Blob;
export function value_get_geometric_point(value: GObject.Value): GeometricPoint;
export function value_get_numeric(value: GObject.Value): Numeric;
export function value_get_short(value: GObject.Value): any;
export function value_get_time(value: GObject.Value): Time;
export function value_get_timestamp(value: GObject.Value): Timestamp;
export function value_get_ushort(value: GObject.Value): number;
export function value_is_null(value: GObject.Value): boolean;
export function value_is_number(value: GObject.Value): boolean;
export function value_new(type: any): GObject.Value;
export function value_new_binary(val: number, size: number): GObject.Value;
export function value_new_blob(val: number, size: number): GObject.Value;
export function value_new_blob_from_file(filename: string): GObject.Value;
export function value_new_default(default_val: string | null): GObject.Value;
export function value_new_from_string(
  as_string: string,
  type: any
): GObject.Value;
export function value_new_from_xml(node: libxml2.NodePtr): GObject.Value;
export function value_new_null(): GObject.Value;
export function value_new_timestamp_from_timet(val: number): GObject.Value;
export function value_reset_with_type(value: GObject.Value, type: any): void;
export function value_set_binary(value: GObject.Value, binary: Binary): void;
export function value_set_blob(value: GObject.Value, blob: Blob): void;
export function value_set_from_string(
  value: GObject.Value,
  as_string: string,
  type: any
): boolean;
export function value_set_from_value(
  value: GObject.Value,
  from: GObject.Value
): boolean;
export function value_set_geometric_point(
  value: GObject.Value,
  val: GeometricPoint
): void;
export function value_set_null(value: GObject.Value): void;
export function value_set_numeric(value: GObject.Value, val: Numeric): void;
export function value_set_short(value: GObject.Value, val: any): void;
export function value_set_time(value: GObject.Value, val: Time): void;
export function value_set_timestamp(value: GObject.Value, val: Timestamp): void;
export function value_set_ushort(value: GObject.Value, val: number): void;
export function value_stringify(value: GObject.Value): string;
export function value_take_binary(value: GObject.Value, binary: Binary): void;
export function value_take_blob(value: GObject.Value, blob: Blob): void;
export function value_to_xml(value: GObject.Value): libxml2.NodePtr;
export type AttributesManagerFunc = (
  att_name: string,
  value: GObject.Value,
  data: object | null
) => void;
export type AttributesManagerSignal = (
  obj: GObject.Object,
  att_name: string,
  value: GObject.Value,
  data: object | null
) => void;
export type ServerProviderAsyncCallback = (
  provider: ServerProvider,
  cnc: Connection,
  task_id: number,
  result_status: boolean,
  error: GLib.Error,
  data: object | null
) => void;
export type ServerProviderExecCallback = (
  provider: ServerProvider,
  cnc: Connection,
  task_id: number,
  result_obj: GObject.Object,
  error: GLib.Error,
  data: object | null
) => void;
export type SqlForeachFunc = (part: SqlAnyPart, data: object | null) => boolean;
export type SqlRenderingExpr = (
  expr: SqlExpr,
  context: SqlRenderingContext,
  is_default: boolean,
  is_null: boolean
) => string;
export type SqlRenderingFunc = (
  node: SqlAnyPart,
  context: SqlRenderingContext
) => string;
export type SqlRenderingPSpecFunc = (
  pspec: any,
  expr: SqlExpr | null,
  context: SqlRenderingContext,
  is_default: boolean,
  is_null: boolean
) => string;
export type SqlRenderingValue = (
  value: GObject.Value,
  context: SqlRenderingContext
) => string;
export type SqlReservedKeywordsFunc = (word: string) => boolean;
export type ThreadWrapperCallback = (
  wrapper: ThreadWrapper,
  instance: object | null,
  signame: string,
  n_param_values: number,
  param_values: GObject.Value,
  gda_reserved: object | null,
  data: object | null
) => void;
export type ThreadWrapperFunc = (arg: object | null) => object | null;
export type ThreadWrapperVoidFunc = (arg: object | null) => void;
export type TreeManagerNodeFunc = (
  manager: TreeManager,
  parent: TreeNode,
  name: string
) => TreeNode;
export type TreeManagerNodesFunc = (
  manager: TreeManager,
  node: TreeNode,
  children_nodes: GLib.SList,
  out_error: boolean
) => GLib.SList;
