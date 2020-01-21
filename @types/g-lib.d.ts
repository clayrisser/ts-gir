export const ANALYZER_ANALYZING: number;
export const ASCII_DTOSTR_BUF_SIZE: number;
export const BIG_ENDIAN: number;
export const CSET_A_2_Z: string;
export const CSET_DIGITS: string;
export const CSET_a_2_z: string;
export const DATALIST_FLAGS_MASK: number;
export const DATE_BAD_DAY: number;
export const DATE_BAD_JULIAN: number;
export const DATE_BAD_YEAR: number;
export const DIR_SEPARATOR: number;
export const DIR_SEPARATOR_S: string;
export const E: number;
export const GINT16_FORMAT: string;
export const GINT16_MODIFIER: string;
export const GINT32_FORMAT: string;
export const GINT32_MODIFIER: string;
export const GINT64_FORMAT: string;
export const GINT64_MODIFIER: string;
export const GINTPTR_FORMAT: string;
export const GINTPTR_MODIFIER: string;
export const GNUC_FUNCTION: string;
export const GNUC_PRETTY_FUNCTION: string;
export const GSIZE_FORMAT: string;
export const GSIZE_MODIFIER: string;
export const GSSIZE_FORMAT: string;
export const GSSIZE_MODIFIER: string;
export const GUINT16_FORMAT: string;
export const GUINT32_FORMAT: string;
export const GUINT64_FORMAT: string;
export const GUINTPTR_FORMAT: string;
export const HAVE_GINT64: number;
export const HAVE_GNUC_VARARGS: number;
export const HAVE_GNUC_VISIBILITY: number;
export const HAVE_GROWING_STACK: number;
export const HAVE_ISO_VARARGS: number;
export const HOOK_FLAG_USER_SHIFT: number;
export const IEEE754_DOUBLE_BIAS: number;
export const IEEE754_FLOAT_BIAS: number;
export const KEY_FILE_DESKTOP_ACTION_GROUP_PREFIX: string;
export const KEY_FILE_DESKTOP_GROUP: string;
export const KEY_FILE_DESKTOP_KEY_ACTIONS: string;
export const KEY_FILE_DESKTOP_KEY_CATEGORIES: string;
export const KEY_FILE_DESKTOP_KEY_COMMENT: string;
export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string;
export const KEY_FILE_DESKTOP_KEY_EXEC: string;
export const KEY_FILE_DESKTOP_KEY_FULLNAME: string;
export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string;
export const KEY_FILE_DESKTOP_KEY_GETTEXT_DOMAIN: string;
export const KEY_FILE_DESKTOP_KEY_HIDDEN: string;
export const KEY_FILE_DESKTOP_KEY_ICON: string;
export const KEY_FILE_DESKTOP_KEY_KEYWORDS: string;
export const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string;
export const KEY_FILE_DESKTOP_KEY_NAME: string;
export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string;
export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string;
export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string;
export const KEY_FILE_DESKTOP_KEY_PATH: string;
export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string;
export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string;
export const KEY_FILE_DESKTOP_KEY_TERMINAL: string;
export const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string;
export const KEY_FILE_DESKTOP_KEY_TYPE: string;
export const KEY_FILE_DESKTOP_KEY_URL: string;
export const KEY_FILE_DESKTOP_KEY_VERSION: string;
export const KEY_FILE_DESKTOP_TYPE_APPLICATION: string;
export const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string;
export const KEY_FILE_DESKTOP_TYPE_LINK: string;
export const LITTLE_ENDIAN: number;
export const LN10: number;
export const LN2: number;
export const LOG_2_BASE_10: number;
export const LOG_DOMAIN: number;
export const LOG_FATAL_MASK: number;
export const LOG_LEVEL_USER_SHIFT: number;
export const MAJOR_VERSION: number;
export const MAXINT16: number;
export const MAXINT32: number;
export const MAXINT64: number;
export const MAXINT8: number;
export const MAXUINT16: number;
export const MAXUINT32: number;
export const MAXUINT64: number;
export const MAXUINT8: number;
export const MICRO_VERSION: number;
export const MININT16: number;
export const MININT32: number;
export const MININT64: number;
export const MININT8: number;
export const MINOR_VERSION: number;
export const MODULE_SUFFIX: string;
export const OPTION_REMAINING: string;
export const PDP_ENDIAN: number;
export const PI: number;
export const PID_FORMAT: string;
export const PI_2: number;
export const PI_4: number;
export const POLLFD_FORMAT: string;
export const PRIORITY_DEFAULT: number;
export const PRIORITY_DEFAULT_IDLE: number;
export const PRIORITY_HIGH: number;
export const PRIORITY_HIGH_IDLE: number;
export const PRIORITY_LOW: number;
export const SEARCHPATH_SEPARATOR: number;
export const SEARCHPATH_SEPARATOR_S: string;
export const SIZEOF_LONG: number;
export const SIZEOF_SIZE_T: number;
export const SIZEOF_SSIZE_T: number;
export const SIZEOF_VOID_P: number;
export const SOURCE_CONTINUE: boolean;
export const SOURCE_REMOVE: boolean;
export const SQRT2: number;
export const STR_DELIMITERS: string;
export const SYSDEF_AF_INET: number;
export const SYSDEF_AF_INET6: number;
export const SYSDEF_AF_UNIX: number;
export const SYSDEF_MSG_DONTROUTE: number;
export const SYSDEF_MSG_OOB: number;
export const SYSDEF_MSG_PEEK: number;
export const TEST_OPTION_ISOLATE_DIRS: string;
export const TIME_SPAN_DAY: number;
export const TIME_SPAN_HOUR: number;
export const TIME_SPAN_MILLISECOND: number;
export const TIME_SPAN_MINUTE: number;
export const TIME_SPAN_SECOND: number;
export const UNICHAR_MAX_DECOMPOSITION_LENGTH: number;
export const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string;
export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string;
export const USEC_PER_SEC: number;
export const VA_COPY_AS_ARRAY: number;
export const VERSION_MIN_REQUIRED: number;
export const WIN32_MSG_HANDLE: number;
export enum BookmarkFileError {
  G_BOOKMARK_FILE_ERROR_INVALID_URI,
  G_BOOKMARK_FILE_ERROR_INVALID_VALUE,
  G_BOOKMARK_FILE_ERROR_APP_NOT_REGISTERED,
  G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND,
  G_BOOKMARK_FILE_ERROR_READ,
  G_BOOKMARK_FILE_ERROR_UNKNOWN_ENCODING,
  G_BOOKMARK_FILE_ERROR_WRITE,
  G_BOOKMARK_FILE_ERROR_FILE_NOT_FOUND,
}
export enum ChecksumType {
  G_CHECKSUM_MD5,
  G_CHECKSUM_SHA1,
  G_CHECKSUM_SHA256,
  G_CHECKSUM_SHA512,
  G_CHECKSUM_SHA384,
}
export enum ConvertError {
  G_CONVERT_ERROR_NO_CONVERSION,
  G_CONVERT_ERROR_ILLEGAL_SEQUENCE,
  G_CONVERT_ERROR_FAILED,
  G_CONVERT_ERROR_PARTIAL_INPUT,
  G_CONVERT_ERROR_BAD_URI,
  G_CONVERT_ERROR_NOT_ABSOLUTE_PATH,
  G_CONVERT_ERROR_NO_MEMORY,
  G_CONVERT_ERROR_EMBEDDED_NUL,
}
export enum DateDMY {
  G_DATE_DAY,
  G_DATE_MONTH,
  G_DATE_YEAR,
}
export enum DateMonth {
  G_DATE_BAD_MONTH,
  G_DATE_JANUARY,
  G_DATE_FEBRUARY,
  G_DATE_MARCH,
  G_DATE_APRIL,
  G_DATE_MAY,
  G_DATE_JUNE,
  G_DATE_JULY,
  G_DATE_AUGUST,
  G_DATE_SEPTEMBER,
  G_DATE_OCTOBER,
  G_DATE_NOVEMBER,
  G_DATE_DECEMBER,
}
export enum DateWeekday {
  G_DATE_BAD_WEEKDAY,
  G_DATE_MONDAY,
  G_DATE_TUESDAY,
  G_DATE_WEDNESDAY,
  G_DATE_THURSDAY,
  G_DATE_FRIDAY,
  G_DATE_SATURDAY,
  G_DATE_SUNDAY,
}
export enum ErrorType {
  G_ERR_UNKNOWN,
  G_ERR_UNEXP_EOF,
  G_ERR_UNEXP_EOF_IN_STRING,
  G_ERR_UNEXP_EOF_IN_COMMENT,
  G_ERR_NON_DIGIT_IN_CONST,
  G_ERR_DIGIT_RADIX,
  G_ERR_FLOAT_RADIX,
  G_ERR_FLOAT_MALFORMED,
}
export enum FileError {
  G_FILE_ERROR_EXIST,
  G_FILE_ERROR_ISDIR,
  G_FILE_ERROR_ACCES,
  G_FILE_ERROR_NAMETOOLONG,
  G_FILE_ERROR_NOENT,
  G_FILE_ERROR_NOTDIR,
  G_FILE_ERROR_NXIO,
  G_FILE_ERROR_NODEV,
  G_FILE_ERROR_ROFS,
  G_FILE_ERROR_TXTBSY,
  G_FILE_ERROR_FAULT,
  G_FILE_ERROR_LOOP,
  G_FILE_ERROR_NOSPC,
  G_FILE_ERROR_NOMEM,
  G_FILE_ERROR_MFILE,
  G_FILE_ERROR_NFILE,
  G_FILE_ERROR_BADF,
  G_FILE_ERROR_INVAL,
  G_FILE_ERROR_PIPE,
  G_FILE_ERROR_AGAIN,
  G_FILE_ERROR_INTR,
  G_FILE_ERROR_IO,
  G_FILE_ERROR_PERM,
  G_FILE_ERROR_NOSYS,
  G_FILE_ERROR_FAILED,
}
export enum IOChannelError {
  G_IO_CHANNEL_ERROR_FBIG,
  G_IO_CHANNEL_ERROR_INVAL,
  G_IO_CHANNEL_ERROR_IO,
  G_IO_CHANNEL_ERROR_ISDIR,
  G_IO_CHANNEL_ERROR_NOSPC,
  G_IO_CHANNEL_ERROR_NXIO,
  G_IO_CHANNEL_ERROR_OVERFLOW,
  G_IO_CHANNEL_ERROR_PIPE,
  G_IO_CHANNEL_ERROR_FAILED,
}
export enum IOError {
  G_IO_ERROR_NONE,
  G_IO_ERROR_AGAIN,
  G_IO_ERROR_INVAL,
  G_IO_ERROR_UNKNOWN,
}
export enum IOStatus {
  G_IO_STATUS_ERROR,
  G_IO_STATUS_NORMAL,
  G_IO_STATUS_EOF,
  G_IO_STATUS_AGAIN,
}
export enum KeyFileError {
  G_KEY_FILE_ERROR_UNKNOWN_ENCODING,
  G_KEY_FILE_ERROR_PARSE,
  G_KEY_FILE_ERROR_NOT_FOUND,
  G_KEY_FILE_ERROR_KEY_NOT_FOUND,
  G_KEY_FILE_ERROR_GROUP_NOT_FOUND,
  G_KEY_FILE_ERROR_INVALID_VALUE,
}
export enum LogWriterOutput {
  G_LOG_WRITER_HANDLED,
  G_LOG_WRITER_UNHANDLED,
}
export enum MarkupError {
  G_MARKUP_ERROR_BAD_UTF8,
  G_MARKUP_ERROR_EMPTY,
  G_MARKUP_ERROR_PARSE,
  G_MARKUP_ERROR_UNKNOWN_ELEMENT,
  G_MARKUP_ERROR_UNKNOWN_ATTRIBUTE,
  G_MARKUP_ERROR_INVALID_CONTENT,
  G_MARKUP_ERROR_MISSING_ATTRIBUTE,
}
export enum NormalizeMode {
  G_NORMALIZE_DEFAULT,
  G_NORMALIZE_NFD,
  G_NORMALIZE_DEFAULT_COMPOSE,
  G_NORMALIZE_NFC,
  G_NORMALIZE_ALL,
  G_NORMALIZE_NFKD,
  G_NORMALIZE_ALL_COMPOSE,
  G_NORMALIZE_NFKC,
}
export enum NumberParserError {
  G_NUMBER_PARSER_ERROR_INVALID,
  G_NUMBER_PARSER_ERROR_OUT_OF_BOUNDS,
}
export enum OnceStatus {
  G_ONCE_STATUS_NOTCALLED,
  G_ONCE_STATUS_PROGRESS,
  G_ONCE_STATUS_READY,
}
export enum OptionArg {
  G_OPTION_ARG_NONE,
  G_OPTION_ARG_STRING,
  G_OPTION_ARG_INT,
  G_OPTION_ARG_CALLBACK,
  G_OPTION_ARG_FILENAME,
  G_OPTION_ARG_STRING_ARRAY,
  G_OPTION_ARG_FILENAME_ARRAY,
  G_OPTION_ARG_DOUBLE,
  G_OPTION_ARG_INT64,
}
export enum OptionError {
  G_OPTION_ERROR_UNKNOWN_OPTION,
  G_OPTION_ERROR_BAD_VALUE,
  G_OPTION_ERROR_FAILED,
}
export enum RegexError {
  G_REGEX_ERROR_COMPILE,
  G_REGEX_ERROR_OPTIMIZE,
  G_REGEX_ERROR_REPLACE,
  G_REGEX_ERROR_MATCH,
  G_REGEX_ERROR_INTERNAL,
  G_REGEX_ERROR_STRAY_BACKSLASH,
  G_REGEX_ERROR_MISSING_CONTROL_CHAR,
  G_REGEX_ERROR_UNRECOGNIZED_ESCAPE,
  G_REGEX_ERROR_QUANTIFIERS_OUT_OF_ORDER,
  G_REGEX_ERROR_QUANTIFIER_TOO_BIG,
  G_REGEX_ERROR_UNTERMINATED_CHARACTER_CLASS,
  G_REGEX_ERROR_INVALID_ESCAPE_IN_CHARACTER_CLASS,
  G_REGEX_ERROR_RANGE_OUT_OF_ORDER,
  G_REGEX_ERROR_NOTHING_TO_REPEAT,
  G_REGEX_ERROR_UNRECOGNIZED_CHARACTER,
  G_REGEX_ERROR_POSIX_NAMED_CLASS_OUTSIDE_CLASS,
  G_REGEX_ERROR_UNMATCHED_PARENTHESIS,
  G_REGEX_ERROR_INEXISTENT_SUBPATTERN_REFERENCE,
  G_REGEX_ERROR_UNTERMINATED_COMMENT,
  G_REGEX_ERROR_EXPRESSION_TOO_LARGE,
  G_REGEX_ERROR_MEMORY_ERROR,
  G_REGEX_ERROR_VARIABLE_LENGTH_LOOKBEHIND,
  G_REGEX_ERROR_MALFORMED_CONDITION,
  G_REGEX_ERROR_TOO_MANY_CONDITIONAL_BRANCHES,
  G_REGEX_ERROR_ASSERTION_EXPECTED,
  G_REGEX_ERROR_UNKNOWN_POSIX_CLASS_NAME,
  G_REGEX_ERROR_POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED,
  G_REGEX_ERROR_HEX_CODE_TOO_LARGE,
  G_REGEX_ERROR_INVALID_CONDITION,
  G_REGEX_ERROR_SINGLE_BYTE_MATCH_IN_LOOKBEHIND,
  G_REGEX_ERROR_INFINITE_LOOP,
  G_REGEX_ERROR_MISSING_SUBPATTERN_NAME_TERMINATOR,
  G_REGEX_ERROR_DUPLICATE_SUBPATTERN_NAME,
  G_REGEX_ERROR_MALFORMED_PROPERTY,
  G_REGEX_ERROR_UNKNOWN_PROPERTY,
  G_REGEX_ERROR_SUBPATTERN_NAME_TOO_LONG,
  G_REGEX_ERROR_TOO_MANY_SUBPATTERNS,
  G_REGEX_ERROR_INVALID_OCTAL_VALUE,
  G_REGEX_ERROR_TOO_MANY_BRANCHES_IN_DEFINE,
  G_REGEX_ERROR_DEFINE_REPETION,
  G_REGEX_ERROR_INCONSISTENT_NEWLINE_OPTIONS,
  G_REGEX_ERROR_MISSING_BACK_REFERENCE,
  G_REGEX_ERROR_INVALID_RELATIVE_REFERENCE,
  G_REGEX_ERROR_BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN,
  G_REGEX_ERROR_UNKNOWN_BACKTRACKING_CONTROL_VERB,
  G_REGEX_ERROR_NUMBER_TOO_BIG,
  G_REGEX_ERROR_MISSING_SUBPATTERN_NAME,
  G_REGEX_ERROR_MISSING_DIGIT,
  G_REGEX_ERROR_INVALID_DATA_CHARACTER,
  G_REGEX_ERROR_EXTRA_SUBPATTERN_NAME,
  G_REGEX_ERROR_BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED,
  G_REGEX_ERROR_INVALID_CONTROL_CHAR,
  G_REGEX_ERROR_MISSING_NAME,
  G_REGEX_ERROR_NOT_SUPPORTED_IN_CLASS,
  G_REGEX_ERROR_TOO_MANY_FORWARD_REFERENCES,
  G_REGEX_ERROR_NAME_TOO_LONG,
  G_REGEX_ERROR_CHARACTER_VALUE_TOO_LARGE,
}
export enum SeekType {
  G_SEEK_CUR,
  G_SEEK_SET,
  G_SEEK_END,
}
export enum ShellError {
  G_SHELL_ERROR_BAD_QUOTING,
  G_SHELL_ERROR_EMPTY_STRING,
  G_SHELL_ERROR_FAILED,
}
export enum SliceConfig {
  G_SLICE_CONFIG_ALWAYS_MALLOC,
  G_SLICE_CONFIG_BYPASS_MAGAZINES,
  G_SLICE_CONFIG_WORKING_SET_MSECS,
  G_SLICE_CONFIG_COLOR_INCREMENT,
  G_SLICE_CONFIG_CHUNK_SIZES,
  G_SLICE_CONFIG_CONTENTION_COUNTER,
}
export enum SpawnError {
  G_SPAWN_ERROR_FORK,
  G_SPAWN_ERROR_READ,
  G_SPAWN_ERROR_CHDIR,
  G_SPAWN_ERROR_ACCES,
  G_SPAWN_ERROR_PERM,
  G_SPAWN_ERROR_TOO_BIG,
  G_SPAWN_ERROR_2BIG,
  G_SPAWN_ERROR_NOEXEC,
  G_SPAWN_ERROR_NAMETOOLONG,
  G_SPAWN_ERROR_NOENT,
  G_SPAWN_ERROR_NOMEM,
  G_SPAWN_ERROR_NOTDIR,
  G_SPAWN_ERROR_LOOP,
  G_SPAWN_ERROR_TXTBUSY,
  G_SPAWN_ERROR_IO,
  G_SPAWN_ERROR_NFILE,
  G_SPAWN_ERROR_MFILE,
  G_SPAWN_ERROR_INVAL,
  G_SPAWN_ERROR_ISDIR,
  G_SPAWN_ERROR_LIBBAD,
  G_SPAWN_ERROR_FAILED,
}
export enum TestFileType {
  G_TEST_DIST,
  G_TEST_BUILT,
}
export enum TestLogType {
  G_TEST_LOG_NONE,
  G_TEST_LOG_ERROR,
  G_TEST_LOG_START_BINARY,
  G_TEST_LOG_LIST_CASE,
  G_TEST_LOG_SKIP_CASE,
  G_TEST_LOG_START_CASE,
  G_TEST_LOG_STOP_CASE,
  G_TEST_LOG_MIN_RESULT,
  G_TEST_LOG_MAX_RESULT,
  G_TEST_LOG_MESSAGE,
  G_TEST_LOG_START_SUITE,
  G_TEST_LOG_STOP_SUITE,
}
export enum TestResult {
  G_TEST_RUN_SUCCESS,
  G_TEST_RUN_SKIPPED,
  G_TEST_RUN_FAILURE,
  G_TEST_RUN_INCOMPLETE,
}
export enum ThreadError {
  G_THREAD_ERROR_AGAIN,
}
export enum TimeType {
  G_TIME_TYPE_STANDARD,
  G_TIME_TYPE_DAYLIGHT,
  G_TIME_TYPE_UNIVERSAL,
}
export enum TokenType {
  G_TOKEN_EOF,
  G_TOKEN_LEFT_PAREN,
  G_TOKEN_RIGHT_PAREN,
  G_TOKEN_LEFT_CURLY,
  G_TOKEN_RIGHT_CURLY,
  G_TOKEN_LEFT_BRACE,
  G_TOKEN_RIGHT_BRACE,
  G_TOKEN_EQUAL_SIGN,
  G_TOKEN_COMMA,
  G_TOKEN_NONE,
  G_TOKEN_ERROR,
  G_TOKEN_CHAR,
  G_TOKEN_BINARY,
  G_TOKEN_OCTAL,
  G_TOKEN_INT,
  G_TOKEN_HEX,
  G_TOKEN_FLOAT,
  G_TOKEN_STRING,
  G_TOKEN_SYMBOL,
  G_TOKEN_IDENTIFIER,
  G_TOKEN_IDENTIFIER_NULL,
  G_TOKEN_COMMENT_SINGLE,
  G_TOKEN_COMMENT_MULTI,
}
export enum TraverseType {
  G_IN_ORDER,
  G_PRE_ORDER,
  G_POST_ORDER,
  G_LEVEL_ORDER,
}
export enum UnicodeBreakType {
  G_UNICODE_BREAK_MANDATORY,
  G_UNICODE_BREAK_CARRIAGE_RETURN,
  G_UNICODE_BREAK_LINE_FEED,
  G_UNICODE_BREAK_COMBINING_MARK,
  G_UNICODE_BREAK_SURROGATE,
  G_UNICODE_BREAK_ZERO_WIDTH_SPACE,
  G_UNICODE_BREAK_INSEPARABLE,
  G_UNICODE_BREAK_NON_BREAKING_GLUE,
  G_UNICODE_BREAK_CONTINGENT,
  G_UNICODE_BREAK_SPACE,
  G_UNICODE_BREAK_AFTER,
  G_UNICODE_BREAK_BEFORE,
  G_UNICODE_BREAK_BEFORE_AND_AFTER,
  G_UNICODE_BREAK_HYPHEN,
  G_UNICODE_BREAK_NON_STARTER,
  G_UNICODE_BREAK_OPEN_PUNCTUATION,
  G_UNICODE_BREAK_CLOSE_PUNCTUATION,
  G_UNICODE_BREAK_QUOTATION,
  G_UNICODE_BREAK_EXCLAMATION,
  G_UNICODE_BREAK_IDEOGRAPHIC,
  G_UNICODE_BREAK_NUMERIC,
  G_UNICODE_BREAK_INFIX_SEPARATOR,
  G_UNICODE_BREAK_SYMBOL,
  G_UNICODE_BREAK_ALPHABETIC,
  G_UNICODE_BREAK_PREFIX,
  G_UNICODE_BREAK_POSTFIX,
  G_UNICODE_BREAK_COMPLEX_CONTEXT,
  G_UNICODE_BREAK_AMBIGUOUS,
  G_UNICODE_BREAK_UNKNOWN,
  G_UNICODE_BREAK_NEXT_LINE,
  G_UNICODE_BREAK_WORD_JOINER,
  G_UNICODE_BREAK_HANGUL_L_JAMO,
  G_UNICODE_BREAK_HANGUL_V_JAMO,
  G_UNICODE_BREAK_HANGUL_T_JAMO,
  G_UNICODE_BREAK_HANGUL_LV_SYLLABLE,
  G_UNICODE_BREAK_HANGUL_LVT_SYLLABLE,
  G_UNICODE_BREAK_CLOSE_PARANTHESIS,
  G_UNICODE_BREAK_CONDITIONAL_JAPANESE_STARTER,
  G_UNICODE_BREAK_HEBREW_LETTER,
  G_UNICODE_BREAK_REGIONAL_INDICATOR,
  G_UNICODE_BREAK_EMOJI_BASE,
  G_UNICODE_BREAK_EMOJI_MODIFIER,
  G_UNICODE_BREAK_ZERO_WIDTH_JOINER,
}
export enum UnicodeScript {
  G_UNICODE_SCRIPT_INVALID_CODE,
  G_UNICODE_SCRIPT_COMMON,
  G_UNICODE_SCRIPT_INHERITED,
  G_UNICODE_SCRIPT_ARABIC,
  G_UNICODE_SCRIPT_ARMENIAN,
  G_UNICODE_SCRIPT_BENGALI,
  G_UNICODE_SCRIPT_BOPOMOFO,
  G_UNICODE_SCRIPT_CHEROKEE,
  G_UNICODE_SCRIPT_COPTIC,
  G_UNICODE_SCRIPT_CYRILLIC,
  G_UNICODE_SCRIPT_DESERET,
  G_UNICODE_SCRIPT_DEVANAGARI,
  G_UNICODE_SCRIPT_ETHIOPIC,
  G_UNICODE_SCRIPT_GEORGIAN,
  G_UNICODE_SCRIPT_GOTHIC,
  G_UNICODE_SCRIPT_GREEK,
  G_UNICODE_SCRIPT_GUJARATI,
  G_UNICODE_SCRIPT_GURMUKHI,
  G_UNICODE_SCRIPT_HAN,
  G_UNICODE_SCRIPT_HANGUL,
  G_UNICODE_SCRIPT_HEBREW,
  G_UNICODE_SCRIPT_HIRAGANA,
  G_UNICODE_SCRIPT_KANNADA,
  G_UNICODE_SCRIPT_KATAKANA,
  G_UNICODE_SCRIPT_KHMER,
  G_UNICODE_SCRIPT_LAO,
  G_UNICODE_SCRIPT_LATIN,
  G_UNICODE_SCRIPT_MALAYALAM,
  G_UNICODE_SCRIPT_MONGOLIAN,
  G_UNICODE_SCRIPT_MYANMAR,
  G_UNICODE_SCRIPT_OGHAM,
  G_UNICODE_SCRIPT_OLD_ITALIC,
  G_UNICODE_SCRIPT_ORIYA,
  G_UNICODE_SCRIPT_RUNIC,
  G_UNICODE_SCRIPT_SINHALA,
  G_UNICODE_SCRIPT_SYRIAC,
  G_UNICODE_SCRIPT_TAMIL,
  G_UNICODE_SCRIPT_TELUGU,
  G_UNICODE_SCRIPT_THAANA,
  G_UNICODE_SCRIPT_THAI,
  G_UNICODE_SCRIPT_TIBETAN,
  G_UNICODE_SCRIPT_CANADIAN_ABORIGINAL,
  G_UNICODE_SCRIPT_YI,
  G_UNICODE_SCRIPT_TAGALOG,
  G_UNICODE_SCRIPT_HANUNOO,
  G_UNICODE_SCRIPT_BUHID,
  G_UNICODE_SCRIPT_TAGBANWA,
  G_UNICODE_SCRIPT_BRAILLE,
  G_UNICODE_SCRIPT_CYPRIOT,
  G_UNICODE_SCRIPT_LIMBU,
  G_UNICODE_SCRIPT_OSMANYA,
  G_UNICODE_SCRIPT_SHAVIAN,
  G_UNICODE_SCRIPT_LINEAR_B,
  G_UNICODE_SCRIPT_TAI_LE,
  G_UNICODE_SCRIPT_UGARITIC,
  G_UNICODE_SCRIPT_NEW_TAI_LUE,
  G_UNICODE_SCRIPT_BUGINESE,
  G_UNICODE_SCRIPT_GLAGOLITIC,
  G_UNICODE_SCRIPT_TIFINAGH,
  G_UNICODE_SCRIPT_SYLOTI_NAGRI,
  G_UNICODE_SCRIPT_OLD_PERSIAN,
  G_UNICODE_SCRIPT_KHAROSHTHI,
  G_UNICODE_SCRIPT_UNKNOWN,
  G_UNICODE_SCRIPT_BALINESE,
  G_UNICODE_SCRIPT_CUNEIFORM,
  G_UNICODE_SCRIPT_PHOENICIAN,
  G_UNICODE_SCRIPT_PHAGS_PA,
  G_UNICODE_SCRIPT_NKO,
  G_UNICODE_SCRIPT_KAYAH_LI,
  G_UNICODE_SCRIPT_LEPCHA,
  G_UNICODE_SCRIPT_REJANG,
  G_UNICODE_SCRIPT_SUNDANESE,
  G_UNICODE_SCRIPT_SAURASHTRA,
  G_UNICODE_SCRIPT_CHAM,
  G_UNICODE_SCRIPT_OL_CHIKI,
  G_UNICODE_SCRIPT_VAI,
  G_UNICODE_SCRIPT_CARIAN,
  G_UNICODE_SCRIPT_LYCIAN,
  G_UNICODE_SCRIPT_LYDIAN,
  G_UNICODE_SCRIPT_AVESTAN,
  G_UNICODE_SCRIPT_BAMUM,
  G_UNICODE_SCRIPT_EGYPTIAN_HIEROGLYPHS,
  G_UNICODE_SCRIPT_IMPERIAL_ARAMAIC,
  G_UNICODE_SCRIPT_INSCRIPTIONAL_PAHLAVI,
  G_UNICODE_SCRIPT_INSCRIPTIONAL_PARTHIAN,
  G_UNICODE_SCRIPT_JAVANESE,
  G_UNICODE_SCRIPT_KAITHI,
  G_UNICODE_SCRIPT_LISU,
  G_UNICODE_SCRIPT_MEETEI_MAYEK,
  G_UNICODE_SCRIPT_OLD_SOUTH_ARABIAN,
  G_UNICODE_SCRIPT_OLD_TURKIC,
  G_UNICODE_SCRIPT_SAMARITAN,
  G_UNICODE_SCRIPT_TAI_THAM,
  G_UNICODE_SCRIPT_TAI_VIET,
  G_UNICODE_SCRIPT_BATAK,
  G_UNICODE_SCRIPT_BRAHMI,
  G_UNICODE_SCRIPT_MANDAIC,
  G_UNICODE_SCRIPT_CHAKMA,
  G_UNICODE_SCRIPT_MEROITIC_CURSIVE,
  G_UNICODE_SCRIPT_MEROITIC_HIEROGLYPHS,
  G_UNICODE_SCRIPT_MIAO,
  G_UNICODE_SCRIPT_SHARADA,
  G_UNICODE_SCRIPT_SORA_SOMPENG,
  G_UNICODE_SCRIPT_TAKRI,
  G_UNICODE_SCRIPT_BASSA_VAH,
  G_UNICODE_SCRIPT_CAUCASIAN_ALBANIAN,
  G_UNICODE_SCRIPT_DUPLOYAN,
  G_UNICODE_SCRIPT_ELBASAN,
  G_UNICODE_SCRIPT_GRANTHA,
  G_UNICODE_SCRIPT_KHOJKI,
  G_UNICODE_SCRIPT_KHUDAWADI,
  G_UNICODE_SCRIPT_LINEAR_A,
  G_UNICODE_SCRIPT_MAHAJANI,
  G_UNICODE_SCRIPT_MANICHAEAN,
  G_UNICODE_SCRIPT_MENDE_KIKAKUI,
  G_UNICODE_SCRIPT_MODI,
  G_UNICODE_SCRIPT_MRO,
  G_UNICODE_SCRIPT_NABATAEAN,
  G_UNICODE_SCRIPT_OLD_NORTH_ARABIAN,
  G_UNICODE_SCRIPT_OLD_PERMIC,
  G_UNICODE_SCRIPT_PAHAWH_HMONG,
  G_UNICODE_SCRIPT_PALMYRENE,
  G_UNICODE_SCRIPT_PAU_CIN_HAU,
  G_UNICODE_SCRIPT_PSALTER_PAHLAVI,
  G_UNICODE_SCRIPT_SIDDHAM,
  G_UNICODE_SCRIPT_TIRHUTA,
  G_UNICODE_SCRIPT_WARANG_CITI,
  G_UNICODE_SCRIPT_AHOM,
  G_UNICODE_SCRIPT_ANATOLIAN_HIEROGLYPHS,
  G_UNICODE_SCRIPT_HATRAN,
  G_UNICODE_SCRIPT_MULTANI,
  G_UNICODE_SCRIPT_OLD_HUNGARIAN,
  G_UNICODE_SCRIPT_SIGNWRITING,
  G_UNICODE_SCRIPT_ADLAM,
  G_UNICODE_SCRIPT_BHAIKSUKI,
  G_UNICODE_SCRIPT_MARCHEN,
  G_UNICODE_SCRIPT_NEWA,
  G_UNICODE_SCRIPT_OSAGE,
  G_UNICODE_SCRIPT_TANGUT,
  G_UNICODE_SCRIPT_MASARAM_GONDI,
  G_UNICODE_SCRIPT_NUSHU,
  G_UNICODE_SCRIPT_SOYOMBO,
  G_UNICODE_SCRIPT_ZANABAZAR_SQUARE,
  G_UNICODE_SCRIPT_DOGRA,
  G_UNICODE_SCRIPT_GUNJALA_GONDI,
  G_UNICODE_SCRIPT_HANIFI_ROHINGYA,
  G_UNICODE_SCRIPT_MAKASAR,
  G_UNICODE_SCRIPT_MEDEFAIDRIN,
  G_UNICODE_SCRIPT_OLD_SOGDIAN,
  G_UNICODE_SCRIPT_SOGDIAN,
  G_UNICODE_SCRIPT_ELYMAIC,
  G_UNICODE_SCRIPT_NANDINAGARI,
  G_UNICODE_SCRIPT_NYIAKENG_PUACHUE_HMONG,
  G_UNICODE_SCRIPT_WANCHO,
}
export enum UnicodeType {
  G_UNICODE_CONTROL,
  G_UNICODE_FORMAT,
  G_UNICODE_UNASSIGNED,
  G_UNICODE_PRIVATE_USE,
  G_UNICODE_SURROGATE,
  G_UNICODE_LOWERCASE_LETTER,
  G_UNICODE_MODIFIER_LETTER,
  G_UNICODE_OTHER_LETTER,
  G_UNICODE_TITLECASE_LETTER,
  G_UNICODE_UPPERCASE_LETTER,
  G_UNICODE_SPACING_MARK,
  G_UNICODE_ENCLOSING_MARK,
  G_UNICODE_NON_SPACING_MARK,
  G_UNICODE_DECIMAL_NUMBER,
  G_UNICODE_LETTER_NUMBER,
  G_UNICODE_OTHER_NUMBER,
  G_UNICODE_CONNECT_PUNCTUATION,
  G_UNICODE_DASH_PUNCTUATION,
  G_UNICODE_CLOSE_PUNCTUATION,
  G_UNICODE_FINAL_PUNCTUATION,
  G_UNICODE_INITIAL_PUNCTUATION,
  G_UNICODE_OTHER_PUNCTUATION,
  G_UNICODE_OPEN_PUNCTUATION,
  G_UNICODE_CURRENCY_SYMBOL,
  G_UNICODE_MODIFIER_SYMBOL,
  G_UNICODE_MATH_SYMBOL,
  G_UNICODE_OTHER_SYMBOL,
  G_UNICODE_LINE_SEPARATOR,
  G_UNICODE_PARAGRAPH_SEPARATOR,
  G_UNICODE_SPACE_SEPARATOR,
}
export enum UserDirectory {
  G_USER_DIRECTORY_DESKTOP,
  G_USER_DIRECTORY_DOCUMENTS,
  G_USER_DIRECTORY_DOWNLOAD,
  G_USER_DIRECTORY_MUSIC,
  G_USER_DIRECTORY_PICTURES,
  G_USER_DIRECTORY_PUBLIC_SHARE,
  G_USER_DIRECTORY_TEMPLATES,
  G_USER_DIRECTORY_VIDEOS,
  G_USER_N_DIRECTORIES,
}
export enum VariantClass {
  G_VARIANT_CLASS_BOOLEAN,
  G_VARIANT_CLASS_BYTE,
  G_VARIANT_CLASS_INT16,
  G_VARIANT_CLASS_UINT16,
  G_VARIANT_CLASS_INT32,
  G_VARIANT_CLASS_UINT32,
  G_VARIANT_CLASS_INT64,
  G_VARIANT_CLASS_UINT64,
  G_VARIANT_CLASS_HANDLE,
  G_VARIANT_CLASS_DOUBLE,
  G_VARIANT_CLASS_STRING,
  G_VARIANT_CLASS_OBJECT_PATH,
  G_VARIANT_CLASS_SIGNATURE,
  G_VARIANT_CLASS_VARIANT,
  G_VARIANT_CLASS_MAYBE,
  G_VARIANT_CLASS_ARRAY,
  G_VARIANT_CLASS_TUPLE,
  G_VARIANT_CLASS_DICT_ENTRY,
}
export enum VariantParseError {
  G_VARIANT_PARSE_ERROR_FAILED,
  G_VARIANT_PARSE_ERROR_BASIC_TYPE_EXPECTED,
  G_VARIANT_PARSE_ERROR_CANNOT_INFER_TYPE,
  G_VARIANT_PARSE_ERROR_DEFINITE_TYPE_EXPECTED,
  G_VARIANT_PARSE_ERROR_INPUT_NOT_AT_END,
  G_VARIANT_PARSE_ERROR_INVALID_CHARACTER,
  G_VARIANT_PARSE_ERROR_INVALID_FORMAT_STRING,
  G_VARIANT_PARSE_ERROR_INVALID_OBJECT_PATH,
  G_VARIANT_PARSE_ERROR_INVALID_SIGNATURE,
  G_VARIANT_PARSE_ERROR_INVALID_TYPE_STRING,
  G_VARIANT_PARSE_ERROR_NO_COMMON_TYPE,
  G_VARIANT_PARSE_ERROR_NUMBER_OUT_OF_RANGE,
  G_VARIANT_PARSE_ERROR_NUMBER_TOO_BIG,
  G_VARIANT_PARSE_ERROR_TYPE_ERROR,
  G_VARIANT_PARSE_ERROR_UNEXPECTED_TOKEN,
  G_VARIANT_PARSE_ERROR_UNKNOWN_KEYWORD,
  G_VARIANT_PARSE_ERROR_UNTERMINATED_STRING_CONSTANT,
  G_VARIANT_PARSE_ERROR_VALUE_EXPECTED,
}
export enum AsciiType {
  G_ASCII_ALNUM,
  G_ASCII_ALPHA,
  G_ASCII_CNTRL,
  G_ASCII_DIGIT,
  G_ASCII_GRAPH,
  G_ASCII_LOWER,
  G_ASCII_PRINT,
  G_ASCII_PUNCT,
  G_ASCII_SPACE,
  G_ASCII_UPPER,
  G_ASCII_XDIGIT,
}
export enum FileTest {
  G_FILE_TEST_IS_REGULAR,
  G_FILE_TEST_IS_SYMLINK,
  G_FILE_TEST_IS_DIR,
  G_FILE_TEST_IS_EXECUTABLE,
  G_FILE_TEST_EXISTS,
}
export enum FormatSizeFlags {
  G_FORMAT_SIZE_DEFAULT,
  G_FORMAT_SIZE_LONG_FORMAT,
  G_FORMAT_SIZE_IEC_UNITS,
  G_FORMAT_SIZE_BITS,
}
export enum HookFlagMask {
  G_HOOK_FLAG_ACTIVE,
  G_HOOK_FLAG_IN_CALL,
  G_HOOK_FLAG_MASK,
}
export enum IOCondition {
  G_IO_IN,
  G_IO_OUT,
  G_IO_PRI,
  G_IO_ERR,
  G_IO_HUP,
  G_IO_NVAL,
}
export enum IOFlags {
  G_IO_FLAG_APPEND,
  G_IO_FLAG_NONBLOCK,
  G_IO_FLAG_IS_READABLE,
  G_IO_FLAG_IS_WRITABLE,
  G_IO_FLAG_IS_WRITEABLE,
  G_IO_FLAG_IS_SEEKABLE,
  G_IO_FLAG_MASK,
  G_IO_FLAG_GET_MASK,
  G_IO_FLAG_SET_MASK,
}
export enum KeyFileFlags {
  G_KEY_FILE_NONE,
  G_KEY_FILE_KEEP_COMMENTS,
  G_KEY_FILE_KEEP_TRANSLATIONS,
}
export enum LogLevelFlags {
  G_LOG_FLAG_RECURSION,
  G_LOG_FLAG_FATAL,
  G_LOG_LEVEL_ERROR,
  G_LOG_LEVEL_CRITICAL,
  G_LOG_LEVEL_WARNING,
  G_LOG_LEVEL_MESSAGE,
  G_LOG_LEVEL_INFO,
  G_LOG_LEVEL_DEBUG,
  G_LOG_LEVEL_MASK,
}
export enum MarkupCollectType {
  G_MARKUP_COLLECT_INVALID,
  G_MARKUP_COLLECT_STRING,
  G_MARKUP_COLLECT_STRDUP,
  G_MARKUP_COLLECT_BOOLEAN,
  G_MARKUP_COLLECT_TRISTATE,
  G_MARKUP_COLLECT_OPTIONAL,
}
export enum MarkupParseFlags {
  G_MARKUP_DO_NOT_USE_THIS_UNSUPPORTED_FLAG,
  G_MARKUP_TREAT_CDATA_AS_TEXT,
  G_MARKUP_PREFIX_ERROR_POSITION,
  G_MARKUP_IGNORE_QUALIFIED,
}
export enum OptionFlags {
  G_OPTION_FLAG_NONE,
  G_OPTION_FLAG_HIDDEN,
  G_OPTION_FLAG_IN_MAIN,
  G_OPTION_FLAG_REVERSE,
  G_OPTION_FLAG_NO_ARG,
  G_OPTION_FLAG_FILENAME,
  G_OPTION_FLAG_OPTIONAL_ARG,
  G_OPTION_FLAG_NOALIAS,
}
export enum RegexCompileFlags {
  G_REGEX_CASELESS,
  G_REGEX_MULTILINE,
  G_REGEX_DOTALL,
  G_REGEX_EXTENDED,
  G_REGEX_ANCHORED,
  G_REGEX_DOLLAR_ENDONLY,
  G_REGEX_UNGREEDY,
  G_REGEX_RAW,
  G_REGEX_NO_AUTO_CAPTURE,
  G_REGEX_OPTIMIZE,
  G_REGEX_FIRSTLINE,
  G_REGEX_DUPNAMES,
  G_REGEX_NEWLINE_CR,
  G_REGEX_NEWLINE_LF,
  G_REGEX_NEWLINE_CRLF,
  G_REGEX_NEWLINE_ANYCRLF,
  G_REGEX_BSR_ANYCRLF,
  G_REGEX_JAVASCRIPT_COMPAT,
}
export enum RegexMatchFlags {
  G_REGEX_MATCH_ANCHORED,
  G_REGEX_MATCH_NOTBOL,
  G_REGEX_MATCH_NOTEOL,
  G_REGEX_MATCH_NOTEMPTY,
  G_REGEX_MATCH_PARTIAL,
  G_REGEX_MATCH_NEWLINE_CR,
  G_REGEX_MATCH_NEWLINE_LF,
  G_REGEX_MATCH_NEWLINE_CRLF,
  G_REGEX_MATCH_NEWLINE_ANY,
  G_REGEX_MATCH_NEWLINE_ANYCRLF,
  G_REGEX_MATCH_BSR_ANYCRLF,
  G_REGEX_MATCH_BSR_ANY,
  G_REGEX_MATCH_PARTIAL_SOFT,
  G_REGEX_MATCH_PARTIAL_HARD,
  G_REGEX_MATCH_NOTEMPTY_ATSTART,
}
export enum SpawnFlags {
  G_SPAWN_DEFAULT,
  G_SPAWN_LEAVE_DESCRIPTORS_OPEN,
  G_SPAWN_DO_NOT_REAP_CHILD,
  G_SPAWN_SEARCH_PATH,
  G_SPAWN_STDOUT_TO_DEV_NULL,
  G_SPAWN_STDERR_TO_DEV_NULL,
  G_SPAWN_CHILD_INHERITS_STDIN,
  G_SPAWN_FILE_AND_ARGV_ZERO,
  G_SPAWN_SEARCH_PATH_FROM_ENVP,
  G_SPAWN_CLOEXEC_PIPES,
}
export enum TestSubprocessFlags {
  G_TEST_SUBPROCESS_INHERIT_STDIN,
  G_TEST_SUBPROCESS_INHERIT_STDOUT,
  G_TEST_SUBPROCESS_INHERIT_STDERR,
}
export enum TestTrapFlags {
  G_TEST_TRAP_SILENCE_STDOUT,
  G_TEST_TRAP_SILENCE_STDERR,
  G_TEST_TRAP_INHERIT_STDIN,
}
export enum TraverseFlags {
  G_TRAVERSE_LEAVES,
  G_TRAVERSE_NON_LEAVES,
  G_TRAVERSE_ALL,
  G_TRAVERSE_MASK,
  G_TRAVERSE_LEAFS,
  G_TRAVERSE_NON_LEAFS,
}
export type DateDay = number;
export type DateYear = number;
export type MutexLocker = void;
export type Pid = number;
export type Quark = number;
export type RWLockReaderLocker = void;
export type RWLockWriterLocker = void;
export type RecMutexLocker = void;
export type RefString = number;
export type Strv = string;
export type Time = number;
export type TimeSpan = number;
export type Type = number;
export type DoubleIEEE754 = number;
export type FloatIEEE754 = number;
export type Mutex = object | number[];
export type TokenValue = object | string | number;
export class Array {
  static data: string;
  static len: number;
  static append_vals(array: object[], data: object, len: number): object[];
  static binary_search(array: object[], target: object | null, compare_func: CompareFunc, out_match_index?: number): boolean;
  static copy(array: object[]): object[];
  static free(array: object[], free_segment: boolean): string;
  static get_element_size(array: object[]): number;
  static insert_vals(array: object[], index_: number, data: object | null, len: number): object[];
  static g_new(zero_terminated: boolean, clear_: boolean, element_size: number): object[];
  static prepend_vals(array: object[], data: object | null, len: number): object[];
  static ref(array: object[]): object[];
  static remove_index(array: object[], index_: number): object[];
  static remove_index_fast(array: object[], index_: number): object[];
  static remove_range(array: object[], index_: number, length: number): object[];
  static set_clear_func(array: object[], clear_func: DestroyNotify): void;
  static set_size(array: object[], length: number): object[];
  static sized_new(zero_terminated: boolean, clear_: boolean, element_size: number, reserved_size: number): object[];
  static sort(array: object[], compare_func: CompareFunc): void;
  static sort_with_data(array: object[], compare_func: CompareDataFunc, user_data: object | null): void;
  static unref(array: object[]): void;
}
export class AsyncQueue {
  length(): number;
  length_unlocked(): number;
  lock(): void;
  pop(): object | null;
  pop_unlocked(): object | null;
  push(data: object | null): void;
  push_front(item: object | null): void;
  push_front_unlocked(item: object | null): void;
  push_sorted(data: object | null, func: CompareDataFunc, user_data: object | null): void;
  push_sorted_unlocked(data: object | null, func: CompareDataFunc, user_data: object | null): void;
  push_unlocked(data: object | null): void;
  ref(): AsyncQueue;
  ref_unlocked(): void;
  remove(item: object | null): boolean;
  remove_unlocked(item: object | null): boolean;
  sort(func: CompareDataFunc, user_data: object | null): void;
  sort_unlocked(func: CompareDataFunc, user_data: object | null): void;
  timed_pop(end_time: TimeVal): object | null;
  timed_pop_unlocked(end_time: TimeVal): object | null;
  timeout_pop(timeout: number): object | null;
  timeout_pop_unlocked(timeout: number): object | null;
  try_pop(): object | null;
  try_pop_unlocked(): object | null;
  unlock(): void;
  unref(): void;
  unref_and_unlock(): void;
  static g_new(): AsyncQueue;
  static new_full(item_free_func: DestroyNotify): AsyncQueue;
}
export class BookmarkFile {
  add_application(uri: string, name: string | null, exec: string | null): void;
  add_group(uri: string, group: string): void;
  free(): void;
  get_added(uri: string): number;
  get_app_info(uri: string, name: string, exec?: string, count?: number, stamp?: number): boolean;
  get_applications(uri: string, length?: number): string[];
  get_description(uri: string): string;
  get_groups(uri: string, length?: number): string[];
  get_icon(uri: string, href?: string, mime_type?: string): boolean;
  get_is_private(uri: string): boolean;
  get_mime_type(uri: string): string;
  get_modified(uri: string): number;
  get_size(): number;
  get_title(uri: string | null): string;
  get_uris(length?: number): string[];
  get_visited(uri: string): number;
  has_application(uri: string, name: string): boolean;
  has_group(uri: string, group: string): boolean;
  has_item(uri: string): boolean;
  load_from_data(data: number[], length: number): boolean;
  load_from_data_dirs(file: any, full_path?: any): boolean;
  load_from_file(filename: any): boolean;
  move_item(old_uri: string, new_uri: string | null): boolean;
  remove_application(uri: string, name: string): boolean;
  remove_group(uri: string, group: string): boolean;
  remove_item(uri: string): boolean;
  set_added(uri: string, added: number): void;
  set_app_info(uri: string, name: string, exec: string, count: number, stamp: number): boolean;
  set_description(uri: string | null, description: string): void;
  set_groups(uri: string, groups: string[] | null, length: number): void;
  set_icon(uri: string, href: string | null, mime_type: string): void;
  set_is_private(uri: string, is_private: boolean): void;
  set_mime_type(uri: string, mime_type: string): void;
  set_modified(uri: string, modified: number): void;
  set_title(uri: string | null, title: string): void;
  set_visited(uri: string, visited: number): void;
  to_data(length?: number): number[];
  to_file(filename: any): boolean;
  static error_quark(): Quark;
  static g_new(): BookmarkFile;
}
export class ByteArray {
  static data: number;
  static len: number;
  static append(array: number[], data: number, len: number): number[];
  static free(array: number[], free_segment: boolean): number;
  static free_to_bytes(array: number[]): Bytes;
  static g_new(): number[];
  static new_take(data: number[], len: number): number[];
  static prepend(array: number[], data: number, len: number): number[];
  static ref(array: number[]): number[];
  static remove_index(array: number[], index_: number): number[];
  static remove_index_fast(array: number[], index_: number): number[];
  static remove_range(array: number[], index_: number, length: number): number[];
  static set_size(array: number[], length: number): number[];
  static sized_new(reserved_size: number): number[];
  static sort(array: number[], compare_func: CompareFunc): void;
  static sort_with_data(array: number[], compare_func: CompareDataFunc, user_data: object | null): void;
  static unref(array: number[]): void;
}
export class Bytes {
  constructor(data: number[] | null, size: number);
  compare(bytes2: Bytes): number;
  equal(bytes2: Bytes): boolean;
  get_data(size?: number): number[] | null;
  get_size(): number;
  hash(): number;
  new_from_bytes(offset: number, length: number): Bytes;
  ref(): Bytes;
  unref(): void;
  unref_to_array(): number[];
  unref_to_data(size: number): number[];
}
export class Checksum {
  constructor(checksum_type: ChecksumType);
  copy(): Checksum;
  free(): void;
  get_digest(buffer: number[], digest_len: number): void;
  get_string(): string;
  reset(): void;
  update(data: number[], length: number): void;
  static type_get_length(checksum_type: ChecksumType): number;
}
export class Cond {
  static p: object;
  static i: number[];
  broadcast(): void;
  clear(): void;
  init(): void;
  signal(): void;
  wait(mutex: Mutex): void;
  wait_until(mutex: Mutex, end_time: number): boolean;
}
export class Data {}
export class Date {
  constructor();
  static julian_days: number;
  static julian: number;
  static dmy: number;
  static day: number;
  static month: number;
  static year: number;
  add_days(n_days: number): void;
  add_months(n_months: number): void;
  add_years(n_years: number): void;
  clamp(min_date: Date, max_date: Date): void;
  clear(n_dates: number): void;
  compare(rhs: Date): number;
  copy(): Date;
  days_between(date2: Date): number;
  free(): void;
  get_day(): DateDay;
  get_day_of_year(): number;
  get_iso8601_week_of_year(): number;
  get_julian(): number;
  get_monday_week_of_year(): number;
  get_month(): DateMonth;
  get_sunday_week_of_year(): number;
  get_weekday(): DateWeekday;
  get_year(): DateYear;
  is_first_of_month(): boolean;
  is_last_of_month(): boolean;
  order(date2: Date): void;
  set_day(day: DateDay): void;
  set_dmy(day: DateDay, month: DateMonth, y: DateYear): void;
  set_julian(julian_date: number): void;
  set_month(month: DateMonth): void;
  set_parse(str: string): void;
  set_time(time_: Time): void;
  set_time_t(timet: number): void;
  set_time_val(timeval: TimeVal): void;
  set_year(year: DateYear): void;
  subtract_days(n_days: number): void;
  subtract_months(n_months: number): void;
  subtract_years(n_years: number): void;
  to_struct_tm(tm: object): void;
  valid(): boolean;
  static get_days_in_month(month: DateMonth, year: DateYear): number;
  static get_monday_weeks_in_year(year: DateYear): number;
  static get_sunday_weeks_in_year(year: DateYear): number;
  static is_leap_year(year: DateYear): boolean;
  static strftime(s: string, slen: number, format: string, date: Date): number;
  static valid_day(day: DateDay): boolean;
  static valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
  static valid_julian(julian_date: number): boolean;
  static valid_month(month: DateMonth): boolean;
  static valid_weekday(weekday: DateWeekday): boolean;
  static valid_year(year: DateYear): boolean;
}
export class DateTime {
  constructor(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number);
  add(timespan: TimeSpan): DateTime;
  add_days(days: number): DateTime;
  add_full(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime;
  add_hours(hours: number): DateTime;
  add_minutes(minutes: number): DateTime;
  add_months(months: number): DateTime;
  add_seconds(seconds: number): DateTime;
  add_weeks(weeks: number): DateTime;
  add_years(years: number): DateTime;
  difference(begin: DateTime): TimeSpan;
  format(format: string): string;
  format_iso8601(): string;
  get_day_of_month(): number;
  get_day_of_week(): number;
  get_day_of_year(): number;
  get_hour(): number;
  get_microsecond(): number;
  get_minute(): number;
  get_month(): number;
  get_second(): number;
  get_seconds(): number;
  get_timezone(): TimeZone;
  get_timezone_abbreviation(): string;
  get_utc_offset(): TimeSpan;
  get_week_numbering_year(): number;
  get_week_of_year(): number;
  get_year(): number;
  get_ymd(year?: number, month?: number, day?: number): void;
  is_daylight_savings(): boolean;
  ref(): DateTime;
  to_local(): DateTime;
  to_timeval(tv: TimeVal): boolean;
  to_timezone(tz: TimeZone): DateTime;
  to_unix(): number;
  to_utc(): DateTime;
  unref(): void;
  static compare(dt1: object, dt2: object): number;
  static equal(dt1: object, dt2: object): boolean;
  static hash(datetime: object): number;
}
export class DebugKey {
  static key: string;
  static value: number;
}
export class Dir {
  close(): void;
  read_name(): any;
  rewind(): void;
  static make_tmp(tmpl: any | null): any;
  static open(path: string, flags: number): Dir;
}
export class Error {
  constructor(domain: Quark, code: number, format: string, ...args: any[]);
  static domain: Quark;
  static code: number;
  static message: string;
  copy(): Error;
  free(): void;
  matches(domain: Quark, code: number): boolean;
}
export class HashTable {
  static add(hash_table: HashTable, key: object | null): boolean;
  static contains(hash_table: HashTable, key: object | null): boolean;
  static destroy(hash_table: HashTable): void;
  static find(hash_table: HashTable, predicate: HRFunc, user_data: object | null): object | null;
  static foreach(hash_table: HashTable, func: HFunc, user_data: object | null): void;
  static foreach_remove(hash_table: HashTable, func: HRFunc, user_data: object | null): number;
  static foreach_steal(hash_table: HashTable, func: HRFunc, user_data: object | null): number;
  static get_keys(hash_table: HashTable): List;
  static get_keys_as_array(hash_table: HashTable, length: number): object[];
  static get_values(hash_table: HashTable): List;
  static insert(hash_table: HashTable, key: object | null, value: object | null): boolean;
  static lookup(hash_table: HashTable, key: object | null): object | null;
  static lookup_extended(hash_table: HashTable, lookup_key: object | null, orig_key?: object, value?: object): boolean;
  static g_new(hash_func: HashFunc, key_equal_func: EqualFunc): HashTable;
  static new_full(hash_func: HashFunc, key_equal_func: EqualFunc, key_destroy_func: DestroyNotify | null, value_destroy_func: DestroyNotify | null): HashTable;
  static ref(hash_table: HashTable): HashTable;
  static remove(hash_table: HashTable, key: object | null): boolean;
  static remove_all(hash_table: HashTable): void;
  static replace(hash_table: HashTable, key: object | null, value: object | null): boolean;
  static size(hash_table: HashTable): number;
  static steal(hash_table: HashTable, key: object | null): boolean;
  static steal_all(hash_table: HashTable): void;
  static steal_extended(hash_table: HashTable, lookup_key: object | null, stolen_key?: object, stolen_value?: object): boolean;
  static unref(hash_table: HashTable): void;
}
export class HashTableIter {
  static dummy1: object;
  static dummy2: object;
  static dummy3: object;
  static dummy4: number;
  static dummy5: boolean;
  static dummy6: object;
  get_hash_table(): HashTable;
  init(hash_table: HashTable): void;
  next(key?: object, value?: object): boolean;
  remove(): void;
  replace(value: object | null): void;
  steal(): void;
}
export class Hmac {
  copy(): Hmac;
  get_digest(buffer: number[], digest_len: number): void;
  get_string(): string;
  ref(): Hmac;
  unref(): void;
  update(data: number[], length: number): void;
  static g_new(digest_type: ChecksumType, key: number[], key_len: number): Hmac;
}
export class Hook {
  static data: object;
  static next: Hook;
  static prev: Hook;
  static ref_count: number;
  static hook_id: number;
  static flags: number;
  static func: object;
  static destroy: any;
  compare_ids(sibling: Hook): number;
  static alloc(hook_list: HookList): Hook;
  static destroy(...args: any[]): any;
  static destroy_link(hook_list: HookList, hook: Hook): void;
  static find(hook_list: HookList, need_valids: boolean, func: HookFindFunc, data: object | null): Hook;
  static find_data(hook_list: HookList, need_valids: boolean, data: object | null): Hook;
  static find_func(hook_list: HookList, need_valids: boolean, func: object | null): Hook;
  static find_func_data(hook_list: HookList, need_valids: boolean, func: object, data: object | null): Hook;
  static first_valid(hook_list: HookList, may_be_in_call: boolean): Hook;
  static free(hook_list: HookList, hook: Hook): void;
  static get(hook_list: HookList, hook_id: number): Hook;
  static insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void;
  static insert_sorted(hook_list: HookList, hook: Hook, func: HookCompareFunc): void;
  static next_valid(hook_list: HookList, hook: Hook, may_be_in_call: boolean): Hook;
  static prepend(hook_list: HookList, hook: Hook): void;
  static ref(hook_list: HookList, hook: Hook): Hook;
  static unref(hook_list: HookList, hook: Hook): void;
}
export class HookList {
  static seq_id: number;
  static hook_size: number;
  static is_setup: number;
  static hooks: Hook;
  static dummy3: object;
  static finalize_hook: HookFinalizeFunc;
  static dummy: object[];
  clear(): void;
  init(hook_size: number): void;
  invoke(may_recurse: boolean): void;
  invoke_check(may_recurse: boolean): void;
  marshal(may_recurse: boolean, marshaller: HookMarshaller, marshal_data: object | null): void;
  marshal_check(may_recurse: boolean, marshaller: HookCheckMarshaller, marshal_data: object | null): void;
}
export class IConv {
  close(): number;
  static open(to_codeset: string, from_codeset: string): IConv;
}
export class IOChannel {
  constructor(filename: any, mode: string);
  static ref_count: number;
  static funcs: IOFuncs;
  static encoding: string;
  static read_cd: IConv;
  static write_cd: IConv;
  static line_term: string;
  static line_term_len: number;
  static buf_size: number;
  static read_buf: String;
  static encoded_read_buf: String;
  static write_buf: String;
  static partial_write_buf: number[];
  static use_buffer: number;
  static do_encode: number;
  static close_on_unref: number;
  static is_readable: number;
  static is_writeable: number;
  static is_seekable: number;
  static reserved1: object;
  static reserved2: object;
  close(): void;
  flush(): IOStatus;
  get_buffer_condition(): IOCondition;
  get_buffer_size(): number;
  get_buffered(): boolean;
  get_close_on_unref(): boolean;
  get_encoding(): string;
  get_flags(): IOFlags;
  get_line_term(length: number): string;
  init(): void;
  read(buf: string, count: number, bytes_read: number): IOError;
  read_chars(buf: number[], count: number, bytes_read?: number): IOStatus;
  read_line(str_return: string, length?: number, terminator_pos?: number): IOStatus;
  read_line_string(buffer: String, terminator_pos: number | null): IOStatus;
  read_to_end(str_return: number[], length: number): IOStatus;
  read_unichar(thechar: number): IOStatus;
  ref(): IOChannel;
  seek(offset: number, type: SeekType): IOError;
  seek_position(offset: number, type: SeekType): IOStatus;
  set_buffer_size(size: number): void;
  set_buffered(buffered: boolean): void;
  set_close_on_unref(do_close: boolean): void;
  set_encoding(encoding: string | null): IOStatus;
  set_flags(flags: IOFlags): IOStatus;
  set_line_term(line_term: string | null, length: number): void;
  shutdown(flush: boolean): IOStatus;
  unix_get_fd(): number;
  unref(): void;
  write(buf: string, count: number, bytes_written: number): IOError;
  write_chars(buf: number[], count: number, bytes_written: number): IOStatus;
  write_unichar(thechar: number): IOStatus;
  static error_from_errno(en: number): IOChannelError;
  static error_quark(): Quark;
}
export class IOFuncs {
  static io_read: (channel: IOChannel, buf: string, count: number, bytes_read: number) => IOStatus;
  static io_write: (channel: IOChannel, buf: string, count: number, bytes_written: number) => IOStatus;
  static io_seek: (channel: IOChannel, offset: number, type: SeekType) => IOStatus;
  static io_close: (channel: IOChannel) => IOStatus;
  static io_create_watch: (channel: IOChannel, condition: IOCondition) => Source;
  static io_free: (channel: IOChannel) => void;
  static io_set_flags: (channel: IOChannel, flags: IOFlags) => IOStatus;
  static io_get_flags: (channel: IOChannel) => IOFlags;
}
export class KeyFile {
  constructor();
  free(): void;
  get_boolean(group_name: string, key: string): boolean;
  get_boolean_list(group_name: string, key: string, length: number): boolean[];
  get_comment(group_name: string | null, key: string): string;
  get_double(group_name: string, key: string): number;
  get_double_list(group_name: string, key: string, length: number): number[];
  get_groups(length?: number): string[];
  get_int64(group_name: string, key: string): number;
  get_integer(group_name: string, key: string): number;
  get_integer_list(group_name: string, key: string, length: number): number[];
  get_keys(group_name: string, length?: number): string[];
  get_locale_for_key(group_name: string, key: string, locale: string | null): string | null;
  get_locale_string(group_name: string, key: string, locale: string | null): string;
  get_locale_string_list(group_name: string, key: string, locale: string | null, length?: number): string[];
  get_start_group(): string;
  get_string(group_name: string, key: string): string;
  get_string_list(group_name: string, key: string, length?: number): string[];
  get_uint64(group_name: string, key: string): number;
  get_value(group_name: string, key: string): string;
  has_group(group_name: string): boolean;
  has_key(group_name: string, key: string): boolean;
  load_from_bytes(bytes: Bytes, flags: KeyFileFlags): boolean;
  load_from_data(data: string, length: number, flags: KeyFileFlags): boolean;
  load_from_data_dirs(file: any, full_path?: any, flags?: KeyFileFlags): boolean;
  load_from_dirs(file: any, search_dirs: any[], full_path?: any, flags?: KeyFileFlags): boolean;
  load_from_file(file: any, flags: KeyFileFlags): boolean;
  ref(): KeyFile;
  remove_comment(group_name: string | null, key: string | null): boolean;
  remove_group(group_name: string): boolean;
  remove_key(group_name: string, key: string): boolean;
  save_to_file(filename: string): boolean;
  set_boolean(group_name: string, key: string, value: boolean): void;
  set_boolean_list(group_name: string, key: string, list: boolean[], length: number): void;
  set_comment(group_name: string | null, key: string | null, comment: string): boolean;
  set_double(group_name: string, key: string, value: number): void;
  set_double_list(group_name: string, key: string, list: number[], length: number): void;
  set_int64(group_name: string, key: string, value: number): void;
  set_integer(group_name: string, key: string, value: number): void;
  set_integer_list(group_name: string, key: string, list: number[], length: number): void;
  set_list_separator(separator: number): void;
  set_locale_string(group_name: string, key: string, locale: string, string: string): void;
  set_locale_string_list(group_name: string, key: string, locale: string, list: string[], length: number): void;
  set_string(group_name: string, key: string, string: string): void;
  set_string_list(group_name: string, key: string, list: string[], length: number): void;
  set_uint64(group_name: string, key: string, value: number): void;
  set_value(group_name: string, key: string, value: string): void;
  to_data(length?: number): string;
  unref(): void;
  static error_quark(): Quark;
}
export class List {
  static data: object;
  static next: List;
  static prev: List;
  static alloc(): List;
  static append(list: List, data: object | null): List;
  static concat(list1: List, list2: List): List;
  static copy(list: List): List;
  static copy_deep(list: List, func: CopyFunc, user_data: object | null): List;
  static delete_link(list: List, link_: List): List;
  static find(list: List, data: object | null): List;
  static find_custom(list: List, data: object | null, func: CompareFunc): List;
  static first(list: List): List;
  static foreach(list: List, func: Func, user_data: object | null): void;
  static free(list: List): void;
  static free_1(list: List): void;
  static free_full(list: List, free_func: DestroyNotify): void;
  static index(list: List, data: object | null): number;
  static insert(list: List, data: object | null, position: number): List;
  static insert_before(list: List, sibling: List, data: object | null): List;
  static insert_before_link(list: List, sibling: List | null, link_: List): List;
  static insert_sorted(list: List, data: object | null, func: CompareFunc): List;
  static insert_sorted_with_data(list: List, data: object | null, func: CompareDataFunc, user_data: object | null): List;
  static last(list: List): List;
  static length(list: List): number;
  static nth(list: List, n: number): List;
  static nth_data(list: List, n: number): object | null;
  static nth_prev(list: List, n: number): List;
  static position(list: List, llink: List): number;
  static prepend(list: List, data: object | null): List;
  static remove(list: List, data: object | null): List;
  static remove_all(list: List, data: object | null): List;
  static remove_link(list: List, llink: List): List;
  static reverse(list: List): List;
  static sort(list: List, compare_func: CompareFunc): List;
  static sort_with_data(list: List, compare_func: CompareDataFunc, user_data: object | null): List;
}
export class LogField {
  static key: string;
  static value: object;
  static length: number;
}
export class MainContext {
  constructor();
  acquire(): boolean;
  add_poll(fd: PollFD, priority: number): void;
  check(max_priority: number, fds: PollFD[], n_fds: number): boolean;
  dispatch(): void;
  find_source_by_funcs_user_data(funcs: SourceFuncs, user_data: object | null): Source;
  find_source_by_id(source_id: number): Source;
  find_source_by_user_data(user_data: object | null): Source;
  get_poll_func(): PollFunc;
  invoke(_function: SourceFunc, data: object | null): void;
  invoke_full(priority: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): void;
  is_owner(): boolean;
  iteration(may_block: boolean): boolean;
  pending(): boolean;
  pop_thread_default(): void;
  prepare(priority?: number): boolean;
  push_thread_default(): void;
  query(max_priority: number, timeout_: number, fds: PollFD[], n_fds: number): number;
  ref(): MainContext;
  release(): void;
  remove_poll(fd: PollFD): void;
  set_poll_func(func: PollFunc): void;
  unref(): void;
  wait(cond: Cond, mutex: Mutex): boolean;
  wakeup(): void;
  static g_default(): MainContext;
  static get_thread_default(): MainContext;
  static ref_thread_default(): MainContext;
}
export class MainLoop {
  constructor(context: MainContext | null, is_running: boolean);
  get_context(): MainContext;
  is_running(): boolean;
  quit(): void;
  ref(): MainLoop;
  run(): void;
  unref(): void;
}
export class MappedFile {
  constructor(filename: any, writable: boolean);
  free(): void;
  get_bytes(): Bytes;
  get_contents(): string;
  get_length(): number;
  ref(): MappedFile;
  unref(): void;
}
export class MarkupParseContext {
  constructor(parser: MarkupParser, flags: MarkupParseFlags, user_data: object | null, user_data_dnotify: DestroyNotify);
  end_parse(): boolean;
  free(): void;
  get_element(): string;
  get_element_stack(): SList;
  get_position(line_number: number | null, char_number: number | null): void;
  get_user_data(): object | null;
  parse(text: string, text_len: number): boolean;
  pop(): object | null;
  push(parser: MarkupParser, user_data: object | null): void;
  ref(): MarkupParseContext;
  unref(): void;
}
export class MarkupParser {
  static start_element: (context: MarkupParseContext, element_name: string, attribute_names: string, attribute_values: string, user_data: object | null) => void;
  static end_element: (context: MarkupParseContext, element_name: string, user_data: object | null) => void;
  static text: (context: MarkupParseContext, text: string, text_len: number, user_data: object | null) => void;
  static passthrough: (context: MarkupParseContext, passthrough_text: string, text_len: number, user_data: object | null) => void;
  static error: (context: MarkupParseContext, error: Error, user_data: object | null) => void;
}
export class MatchInfo {
  expand_references(string_to_expand: string): string | null;
  fetch(match_num: number): string | null;
  fetch_all(): string[];
  fetch_named(name: string): string | null;
  fetch_named_pos(name: string, start_pos?: number, end_pos?: number): boolean;
  fetch_pos(match_num: number, start_pos?: number, end_pos?: number): boolean;
  free(): void;
  get_match_count(): number;
  get_regex(): Regex;
  get_string(): string;
  is_partial_match(): boolean;
  matches(): boolean;
  next(): boolean;
  ref(): MatchInfo;
  unref(): void;
}
export class MemVTable {
  static malloc: (n_bytes: number) => object;
  static realloc: (mem: object, n_bytes: number) => object;
  static free: (mem: object) => void;
  static calloc: (n_blocks: number, n_block_bytes: number) => object;
  static try_malloc: (n_bytes: number) => object;
  static try_realloc: (mem: object, n_bytes: number) => object;
}
export class Node {
  static data: object;
  static next: Node;
  static prev: Node;
  static parent: Node;
  static children: Node;
  child_index(data: object | null): number;
  child_position(child: Node): number;
  children_foreach(flags: TraverseFlags, func: NodeForeachFunc, data: object | null): void;
  copy(): Node;
  copy_deep(copy_func: CopyFunc, data: object | null): Node;
  depth(): number;
  destroy(): void;
  find(order: TraverseType, flags: TraverseFlags, data: object | null): Node;
  find_child(flags: TraverseFlags, data: object | null): Node;
  first_sibling(): Node;
  get_root(): Node;
  insert(position: number, node: Node): Node;
  insert_after(sibling: Node, node: Node): Node;
  insert_before(sibling: Node, node: Node): Node;
  is_ancestor(descendant: Node): boolean;
  last_child(): Node;
  last_sibling(): Node;
  max_height(): number;
  n_children(): number;
  n_nodes(flags: TraverseFlags): number;
  nth_child(n: number): Node;
  prepend(node: Node): Node;
  reverse_children(): void;
  traverse(order: TraverseType, flags: TraverseFlags, max_depth: number, func: NodeTraverseFunc, data: object | null): void;
  unlink(): void;
  static g_new(data: object | null): Node;
}
export class Once {
  static status: OnceStatus;
  static retval: object;
  impl(func: ThreadFunc, arg: object | null): object | null;
  static init_enter(location: object): boolean;
  static init_leave(location: object, result: number): void;
}
export class OptionContext {
  add_group(group: OptionGroup): void;
  add_main_entries(entries: OptionEntry, translation_domain: string | null): void;
  free(): void;
  get_description(): string;
  get_help(main_help: boolean, group: OptionGroup | null): string;
  get_help_enabled(): boolean;
  get_ignore_unknown_options(): boolean;
  get_main_group(): OptionGroup;
  get_strict_posix(): boolean;
  get_summary(): string;
  parse(argc?: number, argv?: string[]): boolean;
  parse_strv(_arguments: string[]): boolean;
  set_description(description: string | null): void;
  set_help_enabled(help_enabled: boolean): void;
  set_ignore_unknown_options(ignore_unknown: boolean): void;
  set_main_group(group: OptionGroup): void;
  set_strict_posix(strict_posix: boolean): void;
  set_summary(summary: string | null): void;
  set_translate_func(func: TranslateFunc | null, data: object | null, destroy_notify: DestroyNotify | null): void;
  set_translation_domain(domain: string): void;
  static g_new(parameter_string: string | null): OptionContext;
}
export class OptionEntry {
  static long_name: string;
  static short_name: number;
  static flags: number;
  static arg: OptionArg;
  static arg_data: object;
  static description: string;
  static arg_description: string;
}
export class OptionGroup {
  constructor(name: string, description: string, help_description: string, user_data: object | null, destroy: DestroyNotify | null);
  add_entries(entries: OptionEntry): void;
  free(): void;
  ref(): OptionGroup;
  set_error_hook(error_func: OptionErrorFunc): void;
  set_parse_hooks(pre_parse_func: OptionParseFunc | null, post_parse_func: OptionParseFunc | null): void;
  set_translate_func(func: TranslateFunc | null, data: object | null, destroy_notify: DestroyNotify | null): void;
  set_translation_domain(domain: string): void;
  unref(): void;
}
export class PatternSpec {
  equal(pspec2: PatternSpec): boolean;
  free(): void;
  static g_new(pattern: string): PatternSpec;
}
export class PollFD {
  static fd: number;
  static events: number;
  static revents: number;
}
export class Private {
  static p: object;
  static notify: DestroyNotify;
  static future: object[];
  get(): object | null;
  replace(value: object | null): void;
  set(value: object | null): void;
}
export class PtrArray {
  static pdata: object;
  static len: number;
  static add(array: object[], data: object | null): void;
  static copy(array: object[], func: CopyFunc | null, user_data: object | null): object[];
  static extend(array_to_extend: object[], array: object[], func: CopyFunc | null, user_data: object | null): void;
  static extend_and_steal(array_to_extend: object[], array: object[]): void;
  static find(haystack: object[], needle: object | null, index_?: number): boolean;
  static find_with_equal_func(haystack: object[], needle: object | null, equal_func: EqualFunc | null, index_?: number): boolean;
  static foreach(array: object[], func: Func, user_data: object | null): void;
  static free(array: object[], free_seg: boolean): object | null;
  static insert(array: object[], index_: number, data: object | null): void;
  static g_new(): object[];
  static new_full(reserved_size: number, element_free_func: DestroyNotify | null): object[];
  static new_with_free_func(element_free_func: DestroyNotify | null): object[];
  static ref(array: object[]): object[];
  static remove(array: object[], data: object | null): boolean;
  static remove_fast(array: object[], data: object | null): boolean;
  static remove_index(array: object[], index_: number): object | null;
  static remove_index_fast(array: object[], index_: number): object | null;
  static remove_range(array: object[], index_: number, length: number): object[];
  static set_free_func(array: object[], element_free_func: DestroyNotify | null): void;
  static set_size(array: object[], length: number): void;
  static sized_new(reserved_size: number): object[];
  static sort(array: object[], compare_func: CompareFunc): void;
  static sort_with_data(array: object[], compare_func: CompareDataFunc, user_data: object | null): void;
  static steal_index(array: object[], index_: number): object | null;
  static steal_index_fast(array: object[], index_: number): object | null;
  static unref(array: object[]): void;
}
export class Queue {
  static head: List;
  static tail: List;
  static length: number;
  clear(): void;
  clear_full(free_func: DestroyNotify | null): void;
  copy(): Queue;
  delete_link(link_: List): void;
  find(data: object | null): List;
  find_custom(data: object | null, func: CompareFunc): List;
  foreach(func: Func, user_data: object | null): void;
  free(): void;
  free_full(free_func: DestroyNotify): void;
  get_length(): number;
  index(data: object | null): number;
  init(): void;
  insert_after(sibling: List | null, data: object | null): void;
  insert_after_link(sibling: List | null, link_: List): void;
  insert_before(sibling: List | null, data: object | null): void;
  insert_before_link(sibling: List | null, link_: List): void;
  insert_sorted(data: object | null, func: CompareDataFunc, user_data: object | null): void;
  is_empty(): boolean;
  link_index(link_: List): number;
  peek_head(): object | null;
  peek_head_link(): List;
  peek_nth(n: number): object | null;
  peek_nth_link(n: number): List;
  peek_tail(): object | null;
  peek_tail_link(): List;
  pop_head(): object | null;
  pop_head_link(): List;
  pop_nth(n: number): object | null;
  pop_nth_link(n: number): List;
  pop_tail(): object | null;
  pop_tail_link(): List;
  push_head(data: object | null): void;
  push_head_link(link_: List): void;
  push_nth(data: object | null, n: number): void;
  push_nth_link(n: number, link_: List): void;
  push_tail(data: object | null): void;
  push_tail_link(link_: List): void;
  remove(data: object | null): boolean;
  remove_all(data: object | null): number;
  reverse(): void;
  sort(compare_func: CompareDataFunc, user_data: object | null): void;
  unlink(link_: List): void;
  static g_new(): Queue;
}
export class RWLock {
  static p: object;
  static i: number[];
  clear(): void;
  init(): void;
  reader_lock(): void;
  reader_trylock(): boolean;
  reader_unlock(): void;
  writer_lock(): void;
  writer_trylock(): boolean;
  writer_unlock(): void;
}
export class Rand {
  copy(): Rand;
  double(): number;
  double_range(begin: number, end: number): number;
  free(): void;
  int(): number;
  int_range(begin: number, end: number): number;
  set_seed(seed: number): void;
  set_seed_array(seed: number, seed_length: number): void;
  static g_new(): Rand;
  static new_with_seed(seed: number): Rand;
  static new_with_seed_array(seed: number, seed_length: number): Rand;
}
export class RecMutex {
  static p: object;
  static i: number[];
  clear(): void;
  init(): void;
  lock(): void;
  trylock(): boolean;
  unlock(): void;
}
export class Regex {
  constructor(pattern: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags);
  get_capture_count(): number;
  get_compile_flags(): RegexCompileFlags;
  get_has_cr_or_lf(): boolean;
  get_match_flags(): RegexMatchFlags;
  get_max_backref(): number;
  get_max_lookbehind(): number;
  get_pattern(): string;
  get_string_number(name: string): number;
  match(string: string, match_options: RegexMatchFlags, match_info?: MatchInfo): boolean;
  match_all(string: string, match_options: RegexMatchFlags, match_info?: MatchInfo): boolean;
  match_all_full(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags, match_info?: MatchInfo): boolean;
  match_full(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags, match_info?: MatchInfo): boolean;
  ref(): Regex;
  replace(string: string[], string_len: number, start_position: number, replacement: string, match_options: RegexMatchFlags): string;
  replace_eval(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags, _eval: RegexEvalCallback, user_data: object | null): string;
  replace_literal(string: string[], string_len: number, start_position: number, replacement: string, match_options: RegexMatchFlags): string;
  split(string: string, match_options: RegexMatchFlags): string[];
  split_full(string: string[], string_len: number, start_position: number, match_options: RegexMatchFlags, max_tokens: number): string[];
  unref(): void;
  static check_replacement(replacement: string, has_references?: boolean): boolean;
  static error_quark(): Quark;
  static escape_nul(string: string, length: number): string;
  static escape_string(string: string[], length: number): string;
  static match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): boolean;
  static split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): string[];
}
export class SList {
  static data: object;
  static next: SList;
  static alloc(): SList;
  static append(list: SList, data: object | null): SList;
  static concat(list1: SList, list2: SList): SList;
  static copy(list: SList): SList;
  static copy_deep(list: SList, func: CopyFunc, user_data: object | null): SList;
  static delete_link(list: SList, link_: SList): SList;
  static find(list: SList, data: object | null): SList;
  static find_custom(list: SList, data: object | null, func: CompareFunc): SList;
  static foreach(list: SList, func: Func, user_data: object | null): void;
  static free(list: SList): void;
  static free_1(list: SList): void;
  static free_full(list: SList, free_func: DestroyNotify): void;
  static index(list: SList, data: object | null): number;
  static insert(list: SList, data: object | null, position: number): SList;
  static insert_before(slist: SList, sibling: SList, data: object | null): SList;
  static insert_sorted(list: SList, data: object | null, func: CompareFunc): SList;
  static insert_sorted_with_data(list: SList, data: object | null, func: CompareDataFunc, user_data: object | null): SList;
  static last(list: SList): SList;
  static length(list: SList): number;
  static nth(list: SList, n: number): SList;
  static nth_data(list: SList, n: number): object | null;
  static position(list: SList, llink: SList): number;
  static prepend(list: SList, data: object | null): SList;
  static remove(list: SList, data: object | null): SList;
  static remove_all(list: SList, data: object | null): SList;
  static remove_link(list: SList, link_: SList): SList;
  static reverse(list: SList): SList;
  static sort(list: SList, compare_func: CompareFunc): SList;
  static sort_with_data(list: SList, compare_func: CompareDataFunc, user_data: object | null): SList;
}
export class Scanner {
  static user_data: object;
  static max_parse_errors: number;
  static parse_errors: number;
  static input_name: string;
  static qdata: Data;
  static config: ScannerConfig;
  static token: TokenType;
  static value: TokenValue;
  static line: number;
  static position: number;
  static next_token: TokenType;
  static next_value: TokenValue;
  static next_line: number;
  static next_position: number;
  static symbol_table: HashTable;
  static input_fd: number;
  static text: string;
  static text_end: string;
  static buffer: string;
  static scope_id: number;
  static msg_handler: ScannerMsgFunc;
  cur_line(): number;
  cur_position(): number;
  cur_token(): TokenType;
  cur_value(): TokenValue;
  destroy(): void;
  eof(): boolean;
  error(format: string, ...args: any[]): void;
  get_next_token(): TokenType;
  input_file(input_fd: number): void;
  input_text(text: string, text_len: number): void;
  lookup_symbol(symbol: string): object | null;
  peek_next_token(): TokenType;
  scope_add_symbol(scope_id: number, symbol: string, value: object | null): void;
  scope_foreach_symbol(scope_id: number, func: HFunc, user_data: object | null): void;
  scope_lookup_symbol(scope_id: number, symbol: string): object | null;
  scope_remove_symbol(scope_id: number, symbol: string): void;
  set_scope(scope_id: number): number;
  sync_file_offset(): void;
  unexp_token(expected_token: TokenType, identifier_spec: string, symbol_spec: string, symbol_name: string, message: string, is_error: number): void;
  warn(format: string, ...args: any[]): void;
  static g_new(config_templ: ScannerConfig): Scanner;
}
export class ScannerConfig {
  static cset_skip_characters: string;
  static cset_identifier_first: string;
  static cset_identifier_nth: string;
  static cpair_comment_single: string;
  static case_sensitive: number;
  static skip_comment_multi: number;
  static skip_comment_single: number;
  static scan_comment_multi: number;
  static scan_identifier: number;
  static scan_identifier_1char: number;
  static scan_identifier_NULL: number;
  static scan_symbols: number;
  static scan_binary: number;
  static scan_octal: number;
  static scan_float: number;
  static scan_hex: number;
  static scan_hex_dollar: number;
  static scan_string_sq: number;
  static scan_string_dq: number;
  static numbers_2_int: number;
  static int_2_float: number;
  static identifier_2_string: number;
  static char_2_token: number;
  static symbol_2_token: number;
  static scope_0_fallback: number;
  static store_int64: number;
  static padding_dummy: number;
}
export class Sequence {
  append(data: object | null): SequenceIter;
  foreach(func: Func, user_data: object | null): void;
  free(): void;
  get_begin_iter(): SequenceIter;
  get_end_iter(): SequenceIter;
  get_iter_at_pos(pos: number): SequenceIter;
  get_length(): number;
  insert_sorted(data: object | null, cmp_func: CompareDataFunc, cmp_data: object | null): SequenceIter;
  insert_sorted_iter(data: object | null, iter_cmp: SequenceIterCompareFunc, cmp_data: object | null): SequenceIter;
  is_empty(): boolean;
  lookup(data: object | null, cmp_func: CompareDataFunc, cmp_data: object | null): SequenceIter | null;
  lookup_iter(data: object | null, iter_cmp: SequenceIterCompareFunc, cmp_data: object | null): SequenceIter | null;
  prepend(data: object | null): SequenceIter;
  search(data: object | null, cmp_func: CompareDataFunc, cmp_data: object | null): SequenceIter;
  search_iter(data: object | null, iter_cmp: SequenceIterCompareFunc, cmp_data: object | null): SequenceIter;
  sort(cmp_func: CompareDataFunc, cmp_data: object | null): void;
  sort_iter(cmp_func: SequenceIterCompareFunc, cmp_data: object | null): void;
  static foreach_range(begin: SequenceIter, end: SequenceIter, func: Func, user_data: object | null): void;
  static get(iter: SequenceIter): object | null;
  static insert_before(iter: SequenceIter, data: object | null): SequenceIter;
  static move(src: SequenceIter, dest: SequenceIter): void;
  static move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
  static g_new(data_destroy: DestroyNotify | null): Sequence;
  static range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter;
  static remove(iter: SequenceIter): void;
  static remove_range(begin: SequenceIter, end: SequenceIter): void;
  static set(iter: SequenceIter, data: object | null): void;
  static sort_changed(iter: SequenceIter, cmp_func: CompareDataFunc, cmp_data: object | null): void;
  static sort_changed_iter(iter: SequenceIter, iter_cmp: SequenceIterCompareFunc, cmp_data: object | null): void;
  static swap(a: SequenceIter, b: SequenceIter): void;
}
export class SequenceIter {
  compare(b: SequenceIter): number;
  get_position(): number;
  get_sequence(): Sequence;
  is_begin(): boolean;
  is_end(): boolean;
  move(delta: number): SequenceIter;
  next(): SequenceIter;
  prev(): SequenceIter;
}
export class Source {
  constructor(source_funcs: SourceFuncs, struct_size: number);
  static callback_data: object;
  static callback_funcs: SourceCallbackFuncs;
  static source_funcs: SourceFuncs;
  static ref_count: number;
  static context: MainContext;
  static priority: number;
  static flags: number;
  static source_id: number;
  static poll_fds: SList;
  static prev: Source;
  static next: Source;
  static name: string;
  static priv: SourcePrivate;
  add_child_source(child_source: Source): void;
  add_poll(fd: PollFD): void;
  add_unix_fd(fd: number, events: IOCondition): object;
  attach(context: MainContext | null): number;
  destroy(): void;
  get_can_recurse(): boolean;
  get_context(): MainContext | null;
  get_current_time(timeval: TimeVal): void;
  get_id(): number;
  get_name(): string;
  get_priority(): number;
  get_ready_time(): number;
  get_time(): number;
  is_destroyed(): boolean;
  modify_unix_fd(tag: object, new_events: IOCondition): void;
  query_unix_fd(tag: object): IOCondition;
  ref(): Source;
  remove_child_source(child_source: Source): void;
  remove_poll(fd: PollFD): void;
  remove_unix_fd(tag: object): void;
  set_callback(func: SourceFunc, data: object | null, notify: DestroyNotify | null): void;
  set_callback_indirect(callback_data: object | null, callback_funcs: SourceCallbackFuncs): void;
  set_can_recurse(can_recurse: boolean): void;
  set_funcs(funcs: SourceFuncs): void;
  set_name(name: string): void;
  set_priority(priority: number): void;
  set_ready_time(ready_time: number): void;
  unref(): void;
  static remove(tag: number): boolean;
  static remove_by_funcs_user_data(funcs: SourceFuncs, user_data: object | null): boolean;
  static remove_by_user_data(user_data: object | null): boolean;
  static set_name_by_id(tag: number, name: string): void;
}
export class SourceCallbackFuncs {
  static ref: (cb_data: object) => void;
  static unref: (cb_data: object) => void;
  static get: (cb_data: object, source: Source, func: SourceFunc, data: object | null) => void;
}
export class SourceFuncs {
  static prepare: (source: Source, timeout_: number) => boolean;
  static check: (source: Source) => boolean;
  static dispatch: (source: Source, callback: SourceFunc, user_data: object | null) => boolean;
  static finalize: (source: Source) => void;
  static closure_callback: SourceFunc;
  static closure_marshal: SourceDummyMarshal;
}
export class SourcePrivate {}
export class StatBuf {}
export class String {
  static str: string;
  static len: number;
  static allocated_len: number;
  append(val: string): String;
  append_c(c: number): String;
  append_len(val: string, len: number): String;
  append_printf(format: string, ...args: any[]): void;
  append_unichar(wc: number): String;
  append_uri_escaped(unescaped: string, reserved_chars_allowed: string, allow_utf8: boolean): String;
  append_vprintf(format: string, args: any): void;
  ascii_down(): String;
  ascii_up(): String;
  assign(rval: string): String;
  down(): String;
  equal(v2: String): boolean;
  erase(pos: number, len: number): String;
  free(free_segment: boolean): string | null;
  free_to_bytes(): Bytes;
  hash(): number;
  insert(pos: number, val: string): String;
  insert_c(pos: number, c: number): String;
  insert_len(pos: number, val: string, len: number): String;
  insert_unichar(pos: number, wc: number): String;
  overwrite(pos: number, val: string): String;
  overwrite_len(pos: number, val: string, len: number): String;
  prepend(val: string): String;
  prepend_c(c: number): String;
  prepend_len(val: string, len: number): String;
  prepend_unichar(wc: number): String;
  printf(format: string, ...args: any[]): void;
  set_size(len: number): String;
  truncate(len: number): String;
  up(): String;
  vprintf(format: string, args: any): void;
}
export class StringChunk {
  clear(): void;
  free(): void;
  insert(string: string): string;
  insert_const(string: string): string;
  insert_len(string: string, len: number): string;
  static g_new(size: number): StringChunk;
}
export class TestCase {}
export class TestConfig {
  static test_initialized: boolean;
  static test_quick: boolean;
  static test_perf: boolean;
  static test_verbose: boolean;
  static test_quiet: boolean;
  static test_undefined: boolean;
}
export class TestLogBuffer {
  static data: String;
  static msgs: SList;
  free(): void;
  pop(): TestLogMsg;
  push(n_bytes: number, bytes: number): void;
  static g_new(): TestLogBuffer;
}
export class TestLogMsg {
  static log_type: TestLogType;
  static n_strings: number;
  static strings: string;
  static n_nums: number;
  static nums: number;
  free(): void;
}
export class TestSuite {
  add(test_case: TestCase): void;
  add_suite(nestedsuite: TestSuite): void;
}
export class Thread {
  constructor(name: string | null, func: ThreadFunc, data: object | null);
  join(): object | null;
  ref(): Thread;
  unref(): void;
  static error_quark(): Quark;
  static exit(retval: object | null): void;
  static self(): Thread;
  static g_yield(): void;
}
export class ThreadPool {
  static func: Func;
  static user_data: object;
  static exclusive: boolean;
  free(immediate: boolean, wait_: boolean): void;
  get_max_threads(): number;
  get_num_threads(): number;
  move_to_front(data: object | null): boolean;
  push(data: object | null): boolean;
  set_max_threads(max_threads: number): boolean;
  set_sort_function(func: CompareDataFunc, user_data: object | null): void;
  unprocessed(): number;
  static get_max_idle_time(): number;
  static get_max_unused_threads(): number;
  static get_num_unused_threads(): number;
  static g_new(func: Func, user_data: object | null, max_threads: number, exclusive: boolean): ThreadPool;
  static set_max_idle_time(interval: number): void;
  static set_max_unused_threads(max_threads: number): void;
  static stop_unused_threads(): void;
}
export class TimeVal {
  static tv_sec: number;
  static tv_usec: number;
  add(microseconds: number): void;
  to_iso8601(): string | null;
  static from_iso8601(iso_date: string, time_: TimeVal): boolean;
}
export class TimeZone {
  constructor(identifier: string | null);
  adjust_time(type: TimeType, time_: number): number;
  find_interval(type: TimeType, time_: number): number;
  get_abbreviation(interval: number): string;
  get_identifier(): string;
  get_offset(interval: number): number;
  is_dst(interval: number): boolean;
  ref(): TimeZone;
  unref(): void;
}
export class Timer {
  g_continue(): void;
  destroy(): void;
  elapsed(microseconds: number): number;
  is_active(): boolean;
  reset(): void;
  start(): void;
  stop(): void;
  static g_new(): Timer;
}
export class TrashStack {
  static next: TrashStack;
  static height(stack_p: TrashStack): number;
  static peek(stack_p: TrashStack): object | null;
  static pop(stack_p: TrashStack): object | null;
  static push(stack_p: TrashStack, data_p: object): void;
}
export class Tree {
  destroy(): void;
  foreach(func: TraverseFunc, user_data: object | null): void;
  height(): number;
  insert(key: object | null, value: object | null): void;
  lookup(key: object | null): object | null;
  lookup_extended(lookup_key: object | null, orig_key?: object, value?: object): boolean;
  nnodes(): number;
  ref(): Tree;
  remove(key: object | null): boolean;
  replace(key: object | null, value: object | null): void;
  search(search_func: CompareFunc, user_data: object | null): object | null;
  steal(key: object | null): boolean;
  traverse(traverse_func: TraverseFunc, traverse_type: TraverseType, user_data: object | null): void;
  unref(): void;
  static g_new(key_compare_func: CompareFunc): Tree;
  static new_full(key_compare_func: CompareDataFunc, key_compare_data: object | null, key_destroy_func: DestroyNotify, value_destroy_func: DestroyNotify): Tree;
  static new_with_data(key_compare_func: CompareDataFunc, key_compare_data: object | null): Tree;
}
export class Variant {
  constructor(format_string: string, ...args: any[]);
  byteswap(): Variant;
  check_format_string(format_string: string, copy_only: boolean): boolean;
  classify(): VariantClass;
  compare(two: Variant): number;
  dup_bytestring(length?: number): number[];
  dup_bytestring_array(length?: number): string[];
  dup_objv(length?: number): string[];
  dup_string(length: number): string;
  dup_strv(length?: number): string[];
  equal(two: Variant): boolean;
  get(format_string: string, ...args: any[]): void;
  get_boolean(): boolean;
  get_byte(): number;
  get_bytestring(): number[];
  get_bytestring_array(length?: number): string[];
  get_child(index_: number, format_string: string, ...args: any[]): void;
  get_child_value(index_: number): Variant;
  get_data(): object | null;
  get_data_as_bytes(): Bytes;
  get_double(): number;
  get_fixed_array(n_elements: number, element_size: number): object[];
  get_handle(): number;
  get_int16(): number;
  get_int32(): number;
  get_int64(): number;
  get_maybe(): Variant | null;
  get_normal_form(): Variant;
  get_objv(length?: number): string[];
  get_size(): number;
  get_string(length?: number): string;
  get_strv(length?: number): string[];
  get_type(): VariantType;
  get_type_string(): string;
  get_uint16(): number;
  get_uint32(): number;
  get_uint64(): number;
  get_va(format_string: string, endptr: string | null, app: any): void;
  get_variant(): Variant;
  hash(): number;
  is_container(): boolean;
  is_floating(): boolean;
  is_normal_form(): boolean;
  is_of_type(type: VariantType): boolean;
  iter_new(): VariantIter;
  lookup(key: string, format_string: string, ...args: any[]): boolean;
  lookup_value(key: string, expected_type: VariantType | null): Variant;
  n_children(): number;
  print(type_annotate: boolean): string;
  print_string(string: String | null, type_annotate: boolean): String;
  ref(): Variant;
  ref_sink(): Variant;
  store(data: object): void;
  take_ref(): Variant;
  unref(): void;
  static is_object_path(string: string): boolean;
  static is_signature(string: string): boolean;
  static parse(type: VariantType | null, text: string, limit: string | null, endptr: string | null): Variant;
  static parse_error_print_context(error: Error, source_str: string): string;
  static parse_error_quark(): Quark;
  static parser_get_error_quark(): Quark;
}
export class VariantBuilder {
  constructor(type: VariantType);
  add(format_string: string, ...args: any[]): void;
  add_parsed(format: string, ...args: any[]): void;
  add_value(value: Variant): void;
  clear(): void;
  close(): void;
  end(): Variant;
  init(type: VariantType): void;
  open(type: VariantType): void;
  ref(): VariantBuilder;
  unref(): void;
}
export class VariantDict {
  constructor(from_asv: Variant | null);
  clear(): void;
  contains(key: string): boolean;
  end(): Variant;
  init(from_asv: Variant | null): void;
  insert(key: string, format_string: string, ...args: any[]): void;
  insert_value(key: string, value: Variant): void;
  lookup(key: string, format_string: string, ...args: any[]): boolean;
  lookup_value(key: string, expected_type: VariantType | null): Variant;
  ref(): VariantDict;
  remove(key: string): boolean;
  unref(): void;
}
export class VariantIter {
  static x: number[];
  copy(): VariantIter;
  free(): void;
  init(value: Variant): number;
  loop(format_string: string, ...args: any[]): boolean;
  n_children(): number;
  next(format_string: string, ...args: any[]): boolean;
  next_value(): Variant | null;
}
export class VariantType {
  constructor(type_string: string);
  copy(): VariantType;
  dup_string(): string;
  element(): VariantType;
  equal(type2: VariantType): boolean;
  first(): VariantType;
  free(): void;
  get_string_length(): number;
  hash(): number;
  is_array(): boolean;
  is_basic(): boolean;
  is_container(): boolean;
  is_definite(): boolean;
  is_dict_entry(): boolean;
  is_maybe(): boolean;
  is_subtype_of(supertype: VariantType): boolean;
  is_tuple(): boolean;
  is_variant(): boolean;
  key(): VariantType;
  n_items(): number;
  next(): VariantType;
  peek_string(): string;
  value(): VariantType;
  static checked_(arg0: string): VariantType;
  static string_get_depth_(type_string: string): number;
  static string_is_valid(type_string: string): boolean;
  static string_scan(string: string, limit: string | null, endptr?: string): boolean;
}
export function access(filename: any, mode: number): number;
export function ascii_digit_value(c: number): number;
export function ascii_dtostr(buffer: string, buf_len: number, d: number): string;
export function ascii_formatd(buffer: string, buf_len: number, format: string, d: number): string;
export function ascii_strcasecmp(s1: string, s2: string): number;
export function ascii_strdown(str: string, len: number): string;
export function ascii_string_to_signed(str: string, base: number, min: number, max: number, out_num: number): boolean;
export function ascii_string_to_unsigned(str: string, base: number, min: number, max: number, out_num: number): boolean;
export function ascii_strncasecmp(s1: string, s2: string, n: number): number;
export function ascii_strtod(nptr: string, endptr: string): number;
export function ascii_strtoll(nptr: string, endptr: string, base: number): number;
export function ascii_strtoull(nptr: string, endptr: string, base: number): number;
export function ascii_strup(str: string, len: number): string;
export function ascii_tolower(c: number): number;
export function ascii_toupper(c: number): number;
export function ascii_xdigit_value(c: number): number;
export function assert_warning(log_domain: string, file: string, line: number, pretty_function: string, expression: string): void;
export function assertion_message(domain: string, file: string, line: number, func: string, message: string): void;
export function assertion_message_cmpnum(domain: string, file: string, line: number, func: string, expr: string, arg1: number, cmp: string, arg2: number, numtype: number): void;
export function assertion_message_cmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void;
export function assertion_message_error(domain: string, file: string, line: number, func: string, expr: string, error: Error, error_domain: Quark, error_code: number): void;
export function assertion_message_expr(domain: string | null, file: string, line: number, func: string, expr: string | null): void;
export function atexit(func: VoidFunc): void;
export function atomic_int_add(atomic: number, val: number): number;
export function atomic_int_and(atomic: number, val: number): number;
export function atomic_int_compare_and_exchange(atomic: number, oldval: number, newval: number): boolean;
export function atomic_int_dec_and_test(atomic: number): boolean;
export function atomic_int_exchange_and_add(atomic: number, val: number): number;
export function atomic_int_get(atomic: number): number;
export function atomic_int_inc(atomic: number): void;
export function atomic_int_or(atomic: number, val: number): number;
export function atomic_int_set(atomic: number, newval: number): void;
export function atomic_int_xor(atomic: number, val: number): number;
export function atomic_pointer_add(atomic: object, val: number): number;
export function atomic_pointer_and(atomic: object, val: number): number;
export function atomic_pointer_compare_and_exchange(atomic: object, oldval: object | null, newval: object | null): boolean;
export function atomic_pointer_get(atomic: object): object | null;
export function atomic_pointer_or(atomic: object, val: number): number;
export function atomic_pointer_set(atomic: object, newval: object | null): void;
export function atomic_pointer_xor(atomic: object, val: number): number;
export function atomic_rc_box_acquire(mem_block: object): object;
export function atomic_rc_box_alloc(block_size: number): object;
export function atomic_rc_box_alloc0(block_size: number): object;
export function atomic_rc_box_dup(block_size: number, mem_block: object): object;
export function atomic_rc_box_get_size(mem_block: object): number;
export function atomic_rc_box_release(mem_block: object): void;
export function atomic_rc_box_release_full(mem_block: object, clear_func: DestroyNotify): void;
export function atomic_ref_count_compare(arc: number, val: number): boolean;
export function atomic_ref_count_dec(arc: number): boolean;
export function atomic_ref_count_inc(arc: number): void;
export function atomic_ref_count_init(arc: number): void;
export function base64_decode(text: string, out_len: number): number[];
export function base64_decode_inplace(text: number[], out_len: number): number;
export function base64_decode_step(_in: number[], len: number, out: number[], state: number, save: number): number;
export function base64_encode(data: number[] | null, len: number): string;
export function base64_encode_close(break_lines: boolean, out: number[], state: number, save: number): number;
export function base64_encode_step(_in: number[], len: number, break_lines: boolean, out: number[], state: number, save: number): number;
export function basename(file_name: any): any;
export function bit_lock(address: number, lock_bit: number): void;
export function bit_nth_lsf(mask: number, nth_bit: number): number;
export function bit_nth_msf(mask: number, nth_bit: number): number;
export function bit_storage(number: number): number;
export function bit_trylock(address: number, lock_bit: number): boolean;
export function bit_unlock(address: number, lock_bit: number): void;
export function bookmark_file_error_quark(): Quark;
export function build_filename(first_element: any, ...args: any[]): any;
export function build_filename_valist(first_element: any, args: any): any;
export function build_filenamev(args: any[]): any;
export function build_path(separator: any, first_element: any, ...args: any[]): any;
export function build_pathv(separator: string, args: any[]): any;
export function byte_array_free(array: number[], free_segment: boolean): number;
export function byte_array_free_to_bytes(array: number[]): Bytes;
export function byte_array_new(): number[];
export function byte_array_new_take(data: number[], len: number): number[];
export function byte_array_unref(array: number[]): void;
export function canonicalize_filename(filename: any, relative_to: any | null): any;
export function chdir(path: any): number;
export function check_version(required_major: number, required_minor: number, required_micro: number): string;
export function checksum_type_get_length(checksum_type: ChecksumType): number;
export function child_watch_add(pid: Pid, _function: ChildWatchFunc, data: object | null): number;
export function child_watch_add_full(priority: number, pid: Pid, _function: ChildWatchFunc, data: object | null, notify: DestroyNotify | null): number;
export function child_watch_source_new(pid: Pid): Source;
export function clear_error(): void;
export function clear_handle_id(tag_ptr: number, clear_func: ClearHandleFunc): void;
export function clear_pointer(pp: object, destroy: DestroyNotify): void;
export function close(fd: number): boolean;
export function compute_checksum_for_bytes(checksum_type: ChecksumType, data: Bytes): string;
export function compute_checksum_for_data(checksum_type: ChecksumType, data: number[], length: number): string;
export function compute_checksum_for_string(checksum_type: ChecksumType, str: string, length: number): string;
export function compute_hmac_for_bytes(digest_type: ChecksumType, key: Bytes, data: Bytes): string;
export function compute_hmac_for_data(digest_type: ChecksumType, key: number[], key_len: number, data: number[], length: number): string;
export function compute_hmac_for_string(digest_type: ChecksumType, key: number[], key_len: number, str: string, length: number): string;
export function convert(str: number[], len: number, to_codeset: string, from_codeset: string, bytes_read: number, bytes_written: number): number[];
export function convert_error_quark(): Quark;
export function convert_with_fallback(str: number[], len: number, to_codeset: string, from_codeset: string, fallback: string, bytes_read: number, bytes_written: number): number[];
export function convert_with_iconv(str: number[], len: number, converter: IConv, bytes_read: number, bytes_written: number): number[];
export function datalist_clear(datalist: Data): void;
export function datalist_foreach(datalist: Data, func: DataForeachFunc, user_data: object | null): void;
export function datalist_get_data(datalist: Data, key: string): object | null;
export function datalist_get_flags(datalist: Data): number;
export function datalist_id_dup_data(datalist: Data, key_id: Quark, dup_func: DuplicateFunc | null, user_data: object | null): object | null;
export function datalist_id_get_data(datalist: Data, key_id: Quark): object | null;
export function datalist_id_remove_no_notify(datalist: Data, key_id: Quark): object | null;
export function datalist_id_replace_data(datalist: Data, key_id: Quark, oldval: object | null, newval: object | null, destroy: DestroyNotify | null, old_destroy: DestroyNotify): boolean;
export function datalist_id_set_data_full(datalist: Data, key_id: Quark, data: object | null, destroy_func: DestroyNotify | null): void;
export function datalist_init(datalist: Data): void;
export function datalist_set_flags(datalist: Data, flags: number): void;
export function datalist_unset_flags(datalist: Data, flags: number): void;
export function dataset_destroy(dataset_location: object): void;
export function dataset_foreach(dataset_location: object, func: DataForeachFunc, user_data: object | null): void;
export function dataset_id_get_data(dataset_location: object, key_id: Quark): object | null;
export function dataset_id_remove_no_notify(dataset_location: object, key_id: Quark): object | null;
export function dataset_id_set_data_full(dataset_location: object, key_id: Quark, data: object | null, destroy_func: DestroyNotify): void;
export function date_get_days_in_month(month: DateMonth, year: DateYear): number;
export function date_get_monday_weeks_in_year(year: DateYear): number;
export function date_get_sunday_weeks_in_year(year: DateYear): number;
export function date_is_leap_year(year: DateYear): boolean;
export function date_strftime(s: string, slen: number, format: string, date: Date): number;
export function date_time_compare(dt1: object, dt2: object): number;
export function date_time_equal(dt1: object, dt2: object): boolean;
export function date_time_hash(datetime: object): number;
export function date_valid_day(day: DateDay): boolean;
export function date_valid_dmy(day: DateDay, month: DateMonth, year: DateYear): boolean;
export function date_valid_julian(julian_date: number): boolean;
export function date_valid_month(month: DateMonth): boolean;
export function date_valid_weekday(weekday: DateWeekday): boolean;
export function date_valid_year(year: DateYear): boolean;
export function dcgettext(domain: string | null, msgid: string, category: number): string;
export function dgettext(domain: string | null, msgid: string): string;
export function dir_make_tmp(tmpl: any | null): any;
export function direct_equal(v1: object | null, v2: object | null): boolean;
export function direct_hash(v: object | null): number;
export function dngettext(domain: string | null, msgid: string, msgid_plural: string, n: number): string;
export function double_equal(v1: object, v2: object): boolean;
export function double_hash(v: object): number;
export function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string;
export function dpgettext2(domain: string | null, context: string, msgid: string): string;
export function environ_getenv(envp: any[] | null, variable: any): any;
export function environ_setenv(envp: any[] | null, variable: any, value: any, overwrite: boolean): any[];
export function environ_unsetenv(envp: any[] | null, variable: any): any[];
export function file_error_from_errno(err_no: number): FileError;
export function file_error_quark(): Quark;
export function file_get_contents(filename: any, contents: number[], length: number | null): boolean;
export function file_open_tmp(tmpl: any | null, name_used: any): number;
export function file_read_link(filename: any): any;
export function file_set_contents(filename: any, contents: number[], length: number): boolean;
export function file_test(filename: any, test: FileTest): boolean;
export function filename_display_basename(filename: any): string;
export function filename_display_name(filename: any): string;
export function filename_from_uri(uri: string, hostname: string): any;
export function filename_from_utf8(utf8string: string, len: number, bytes_read: number, bytes_written: number): any;
export function filename_to_uri(filename: any, hostname: string | null): string;
export function filename_to_utf8(opsysstring: any, len: number, bytes_read: number, bytes_written: number): string;
export function find_program_in_path(program: any): any;
export function format_size(size: number): string;
export function format_size_for_display(size: number): string;
export function format_size_full(size: number, flags: FormatSizeFlags): string;
export function fprintf(file: object, format: string, ...args: any[]): number;
export function free(mem: object | null): void;
export function get_application_name(): string;
export function get_charset(charset: string): boolean;
export function get_codeset(): string;
export function get_console_charset(charset: string): boolean;
export function get_current_dir(): any;
export function get_current_time(result: TimeVal): void;
export function get_environ(): any[];
export function get_filename_charsets(filename_charsets: string[]): boolean;
export function get_home_dir(): any;
export function get_host_name(): string;
export function get_language_names(): string[];
export function get_language_names_with_category(category_name: string): string[];
export function get_locale_variants(locale: string): string[];
export function get_monotonic_time(): number;
export function get_num_processors(): number;
export function get_prgname(): string | null;
export function get_real_name(): any;
export function get_real_time(): number;
export function get_system_config_dirs(): any[];
export function get_system_data_dirs(): any[];
export function get_tmp_dir(): any;
export function get_user_cache_dir(): any;
export function get_user_config_dir(): any;
export function get_user_data_dir(): any;
export function get_user_name(): any;
export function get_user_runtime_dir(): any;
export function get_user_special_dir(directory: UserDirectory): any;
export function getenv(variable: any): any;
export function hash_table_add(hash_table: HashTable, key: object | null): boolean;
export function hash_table_contains(hash_table: HashTable, key: object | null): boolean;
export function hash_table_destroy(hash_table: HashTable): void;
export function hash_table_insert(hash_table: HashTable, key: object | null, value: object | null): boolean;
export function hash_table_lookup(hash_table: HashTable, key: object | null): object | null;
export function hash_table_lookup_extended(hash_table: HashTable, lookup_key: object | null, orig_key: object, value: object): boolean;
export function hash_table_remove(hash_table: HashTable, key: object | null): boolean;
export function hash_table_remove_all(hash_table: HashTable): void;
export function hash_table_replace(hash_table: HashTable, key: object | null, value: object | null): boolean;
export function hash_table_size(hash_table: HashTable): number;
export function hash_table_steal(hash_table: HashTable, key: object | null): boolean;
export function hash_table_steal_all(hash_table: HashTable): void;
export function hash_table_steal_extended(hash_table: HashTable, lookup_key: object | null, stolen_key: object, stolen_value: object): boolean;
export function hash_table_unref(hash_table: HashTable): void;
export function hook_destroy(hook_list: HookList, hook_id: number): boolean;
export function hook_destroy_link(hook_list: HookList, hook: Hook): void;
export function hook_free(hook_list: HookList, hook: Hook): void;
export function hook_insert_before(hook_list: HookList, sibling: Hook | null, hook: Hook): void;
export function hook_prepend(hook_list: HookList, hook: Hook): void;
export function hook_unref(hook_list: HookList, hook: Hook): void;
export function hostname_is_ascii_encoded(hostname: string): boolean;
export function hostname_is_ip_address(hostname: string): boolean;
export function hostname_is_non_ascii(hostname: string): boolean;
export function hostname_to_ascii(hostname: string): string;
export function hostname_to_unicode(hostname: string): string;
export function iconv(converter: IConv, inbuf: string, inbytes_left: number, outbuf: string, outbytes_left: number): number;
export function iconv_open(to_codeset: string, from_codeset: string): IConv;
export function idle_add(_function: SourceFunc, data: object | null): number;
export function idle_add_full(priority: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): number;
export function idle_remove_by_data(data: object | null): boolean;
export function idle_source_new(): Source;
export function int64_equal(v1: object, v2: object): boolean;
export function int64_hash(v: object): number;
export function int_equal(v1: object, v2: object): boolean;
export function int_hash(v: object): number;
export function intern_static_string(string: string | null): string;
export function intern_string(string: string | null): string;
export function io_add_watch(channel: IOChannel, condition: IOCondition, func: IOFunc, user_data: object | null): number;
export function io_add_watch_full(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc, user_data: object | null, notify: DestroyNotify): number;
export function io_channel_error_from_errno(en: number): IOChannelError;
export function io_channel_error_quark(): Quark;
export function io_create_watch(channel: IOChannel, condition: IOCondition): Source;
export function key_file_error_quark(): Quark;
export function listenv(): any[];
export function locale_from_utf8(utf8string: string, len: number, bytes_read: number, bytes_written: number): number[];
export function locale_to_utf8(opsysstring: number[], len: number, bytes_read: number, bytes_written: number): string;
export function log(log_domain: string | null, log_level: LogLevelFlags, format: string, ...args: any[]): void;
export function log_default_handler(log_domain: string | null, log_level: LogLevelFlags, message: string | null, unused_data: object | null): void;
export function log_remove_handler(log_domain: string, handler_id: number): void;
export function log_set_always_fatal(fatal_mask: LogLevelFlags): LogLevelFlags;
export function log_set_default_handler(log_func: LogFunc, user_data: object | null): LogFunc;
export function log_set_fatal_mask(log_domain: string, fatal_mask: LogLevelFlags): LogLevelFlags;
export function log_set_handler(log_domain: string | null, log_levels: LogLevelFlags, log_func: LogFunc, user_data: object | null): number;
export function log_set_handler_full(log_domain: string | null, log_levels: LogLevelFlags, log_func: LogFunc, user_data: object | null, destroy: DestroyNotify): number;
export function log_set_writer_func(func: LogWriterFunc | null, user_data: object | null, user_data_free: DestroyNotify): void;
export function log_structured(log_domain: string, log_level: LogLevelFlags, ...args: any[]): void;
export function log_structured_array(log_level: LogLevelFlags, fields: LogField[], n_fields: number): void;
export function log_structured_standard(log_domain: string, log_level: LogLevelFlags, file: string, line: string, func: string, message_format: string, ...args: any[]): void;
export function log_variant(log_domain: string | null, log_level: LogLevelFlags, fields: Variant): void;
export function log_writer_default(log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null): LogWriterOutput;
export function log_writer_format_fields(log_level: LogLevelFlags, fields: LogField[], n_fields: number, use_color: boolean): string;
export function log_writer_is_journald(output_fd: number): boolean;
export function log_writer_journald(log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null): LogWriterOutput;
export function log_writer_standard_streams(log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null): LogWriterOutput;
export function log_writer_supports_color(output_fd: number): boolean;
export function logv(log_domain: string | null, log_level: LogLevelFlags, format: string, args: any): void;
export function main_context_default(): MainContext;
export function main_context_get_thread_default(): MainContext;
export function main_context_ref_thread_default(): MainContext;
export function main_current_source(): Source;
export function main_depth(): number;
export function malloc(n_bytes: number): object | null;
export function malloc0(n_bytes: number): object | null;
export function malloc0_n(n_blocks: number, n_block_bytes: number): object | null;
export function malloc_n(n_blocks: number, n_block_bytes: number): object | null;
export function markup_collect_attributes(element_name: string, attribute_names: string, attribute_values: string, error: Error, first_type: MarkupCollectType, first_attr: string, ...args: any[]): boolean;
export function markup_error_quark(): Quark;
export function markup_escape_text(text: string, length: number): string;
export function markup_printf_escaped(format: string, ...args: any[]): string;
export function markup_vprintf_escaped(format: string, args: any): string;
export function mem_is_system_malloc(): boolean;
export function mem_profile(): void;
export function mem_set_vtable(vtable: MemVTable): void;
export function memdup(mem: object | null, byte_size: number): object | null;
export function mkdir_with_parents(pathname: any, mode: number): number;
export function mkdtemp(tmpl: any): any | null;
export function mkdtemp_full(tmpl: any, mode: number): any | null;
export function mkstemp(tmpl: any): number;
export function mkstemp_full(tmpl: any, flags: number, mode: number): number;
export function nullify_pointer(nullify_location: object): void;
export function number_parser_error_quark(): Quark;
export function on_error_query(prg_name: string): void;
export function on_error_stack_trace(prg_name: string): void;
export function once_init_enter(location: object): boolean;
export function once_init_leave(location: object, result: number): void;
export function option_error_quark(): Quark;
export function parse_debug_string(string: string | null, keys: DebugKey[], nkeys: number): number;
export function path_get_basename(file_name: any): any;
export function path_get_dirname(file_name: any): any;
export function path_is_absolute(file_name: any): boolean;
export function path_skip_root(file_name: any): any | null;
export function pattern_match(pspec: PatternSpec, string_length: number, string: string, string_reversed: string | null): boolean;
export function pattern_match_simple(pattern: string, string: string): boolean;
export function pattern_match_string(pspec: PatternSpec, string: string): boolean;
export function pointer_bit_lock(address: object, lock_bit: number): void;
export function pointer_bit_trylock(address: object, lock_bit: number): boolean;
export function pointer_bit_unlock(address: object, lock_bit: number): void;
export function poll(fds: PollFD, nfds: number, timeout: number): number;
export function prefix_error(err: Error, format: string, ...args: any[]): void;
export function print(format: string, ...args: any[]): void;
export function printerr(format: string, ...args: any[]): void;
export function printf(format: string, ...args: any[]): number;
export function printf_string_upper_bound(format: string, args: any): number;
export function propagate_error(dest: Error, src: Error): void;
export function propagate_prefixed_error(dest: Error, src: Error, format: string, ...args: any[]): void;
export function ptr_array_find(haystack: object[], needle: object | null, index_: number): boolean;
export function ptr_array_find_with_equal_func(haystack: object[], needle: object | null, equal_func: EqualFunc | null, index_: number): boolean;
export function qsort_with_data(pbase: object, total_elems: number, size: number, compare_func: CompareDataFunc, user_data: object | null): void;
export function quark_from_static_string(string: string | null): Quark;
export function quark_from_string(string: string | null): Quark;
export function quark_to_string(quark: Quark): string;
export function quark_try_string(string: string | null): Quark;
export function random_double(): number;
export function random_double_range(begin: number, end: number): number;
export function random_int(): number;
export function random_int_range(begin: number, end: number): number;
export function random_set_seed(seed: number): void;
export function rc_box_acquire(mem_block: object): object;
export function rc_box_alloc(block_size: number): object;
export function rc_box_alloc0(block_size: number): object;
export function rc_box_dup(block_size: number, mem_block: object): object;
export function rc_box_get_size(mem_block: object): number;
export function rc_box_release(mem_block: object): void;
export function rc_box_release_full(mem_block: object, clear_func: DestroyNotify): void;
export function realloc(mem: object | null, n_bytes: number): object | null;
export function realloc_n(mem: object | null, n_blocks: number, n_block_bytes: number): object | null;
export function ref_count_compare(rc: number, val: number): boolean;
export function ref_count_dec(rc: number): boolean;
export function ref_count_inc(rc: number): void;
export function ref_count_init(rc: number): void;
export function ref_string_acquire(str: string): string;
export function ref_string_length(str: string): number;
export function ref_string_new(str: string): string;
export function ref_string_new_intern(str: string): string;
export function ref_string_new_len(str: string, len: number): string;
export function ref_string_release(str: string): void;
export function regex_check_replacement(replacement: string, has_references: boolean): boolean;
export function regex_error_quark(): Quark;
export function regex_escape_nul(string: string, length: number): string;
export function regex_escape_string(string: string[], length: number): string;
export function regex_match_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): boolean;
export function regex_split_simple(pattern: string, string: string, compile_options: RegexCompileFlags, match_options: RegexMatchFlags): string[];
export function reload_user_special_dirs_cache(): void;
export function return_if_fail_warning(log_domain: string | null, pretty_function: string, expression: string | null): void;
export function rmdir(filename: any): number;
export function sequence_get(iter: SequenceIter): object | null;
export function sequence_insert_before(iter: SequenceIter, data: object | null): SequenceIter;
export function sequence_move(src: SequenceIter, dest: SequenceIter): void;
export function sequence_move_range(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void;
export function sequence_range_get_midpoint(begin: SequenceIter, end: SequenceIter): SequenceIter;
export function sequence_remove(iter: SequenceIter): void;
export function sequence_remove_range(begin: SequenceIter, end: SequenceIter): void;
export function sequence_set(iter: SequenceIter, data: object | null): void;
export function sequence_swap(a: SequenceIter, b: SequenceIter): void;
export function set_application_name(application_name: string): void;
export function set_error(err: Error, domain: Quark, code: number, format: string, ...args: any[]): void;
export function set_error_literal(err: Error, domain: Quark, code: number, message: string): void;
export function set_prgname(prgname: string): void;
export function set_print_handler(func: PrintFunc): PrintFunc;
export function set_printerr_handler(func: PrintFunc): PrintFunc;
export function setenv(variable: any, value: any, overwrite: boolean): boolean;
export function shell_error_quark(): Quark;
export function shell_parse_argv(command_line: any, argcp: number, argvp: any[]): boolean;
export function shell_quote(unquoted_string: any): any;
export function shell_unquote(quoted_string: any): any;
export function slice_alloc(block_size: number): object | null;
export function slice_alloc0(block_size: number): object | null;
export function slice_copy(block_size: number, mem_block: object | null): object | null;
export function slice_free1(block_size: number, mem_block: object | null): void;
export function slice_free_chain_with_offset(block_size: number, mem_chain: object | null, next_offset: number): void;
export function slice_get_config(ckey: SliceConfig): number;
export function slice_get_config_state(ckey: SliceConfig, address: number, n_values: number): number;
export function slice_set_config(ckey: SliceConfig, value: number): void;
export function snprintf(string: string, n: number, format: string, ...args: any[]): number;
export function source_remove(tag: number): boolean;
export function source_remove_by_funcs_user_data(funcs: SourceFuncs, user_data: object | null): boolean;
export function source_remove_by_user_data(user_data: object | null): boolean;
export function source_set_name_by_id(tag: number, name: string): void;
export function spaced_primes_closest(num: number): number;
export function spawn_async(working_directory: any | null, argv: any[], envp: any[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null, child_pid: Pid): boolean;
export function spawn_async_with_fds(working_directory: any | null, argv: string[], envp: string[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null, child_pid: Pid, stdin_fd: number, stdout_fd: number, stderr_fd: number): boolean;
export function spawn_async_with_pipes(working_directory: any | null, argv: any[], envp: any[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null, child_pid: Pid, standard_input: number, standard_output: number, standard_error: number): boolean;
export function spawn_check_exit_status(exit_status: number): boolean;
export function spawn_close_pid(pid: Pid): void;
export function spawn_command_line_async(command_line: any): boolean;
export function spawn_command_line_sync(command_line: any, standard_output: number[], standard_error: number[], exit_status: number): boolean;
export function spawn_error_quark(): Quark;
export function spawn_exit_error_quark(): Quark;
export function spawn_sync(working_directory: any | null, argv: any[], envp: any[] | null, flags: SpawnFlags, child_setup: SpawnChildSetupFunc | null, user_data: object | null, standard_output: number[], standard_error: number[], exit_status: number): boolean;
export function sprintf(string: string, format: string, ...args: any[]): number;
export function stpcpy(dest: string, src: string): string;
export function str_equal(v1: object, v2: object): boolean;
export function str_has_prefix(str: string, prefix: string): boolean;
export function str_has_suffix(str: string, suffix: string): boolean;
export function str_hash(v: object): number;
export function str_is_ascii(str: string): boolean;
export function str_match_string(search_term: string, potential_hit: string, accept_alternates: boolean): boolean;
export function str_to_ascii(str: string, from_locale: string | null): string;
export function str_tokenize_and_fold(string: string, translit_locale: string | null, ascii_alternates: string[]): string[];
export function strcanon(string: string, valid_chars: string, substitutor: number): string;
export function strcasecmp(s1: string, s2: string): number;
export function strchomp(string: string): string;
export function strchug(string: string): string;
export function strcmp0(str1: string | null, str2: string | null): number;
export function strcompress(source: string): string;
export function strconcat(string1: string, ...args: any[]): string;
export function strdelimit(string: string, delimiters: string | null, new_delimiter: number): string;
export function strdown(string: string): string;
export function strdup(str: string | null): string;
export function strdup_printf(format: string, ...args: any[]): string;
export function strdup_vprintf(format: string, args: any): string;
export function strdupv(str_array: string | null): string[] | null;
export function strerror(errnum: number): string;
export function strescape(source: string, exceptions: string | null): string;
export function strfreev(str_array: string | null): void;
export function string_new(init: string | null): String;
export function string_new_len(init: string, len: number): String;
export function string_sized_new(dfl_size: number): String;
export function strip_context(msgid: string, msgval: string): string;
export function strjoin(separator: string | null, ...args: any[]): string;
export function strjoinv(separator: string | null, str_array: string): string;
export function strlcat(dest: string, src: string, dest_size: number): number;
export function strlcpy(dest: string, src: string, dest_size: number): number;
export function strncasecmp(s1: string, s2: string, n: number): number;
export function strndup(str: string, n: number): string;
export function strnfill(length: number, fill_char: number): string;
export function strreverse(string: string): string;
export function strrstr(haystack: string, needle: string): string;
export function strrstr_len(haystack: string, haystack_len: number, needle: string): string;
export function strsignal(signum: number): string;
export function strsplit(string: string, delimiter: string, max_tokens: number): string[];
export function strsplit_set(string: string, delimiters: string, max_tokens: number): string[];
export function strstr_len(haystack: string, haystack_len: number, needle: string): string;
export function strtod(nptr: string, endptr: string): number;
export function strup(string: string): string;
export function strv_contains(strv: string, str: string): boolean;
export function strv_equal(strv1: string, strv2: string): boolean;
export function strv_get_type(): any;
export function strv_length(str_array: string): number;
export function test_add_data_func(testpath: string, test_data: object | null, test_func: TestDataFunc): void;
export function test_add_data_func_full(testpath: string, test_data: object | null, test_func: TestDataFunc, data_free_func: DestroyNotify): void;
export function test_add_func(testpath: string, test_func: TestFunc): void;
export function test_add_vtable(testpath: string, data_size: number, test_data: object | null, data_setup: TestFixtureFunc, data_test: TestFixtureFunc, data_teardown: TestFixtureFunc): void;
export function test_assert_expected_messages_internal(domain: string, file: string, line: number, func: string): void;
export function test_bug(bug_uri_snippet: string): void;
export function test_bug_base(uri_pattern: string): void;
export function test_build_filename(file_type: TestFileType, first_path: string, ...args: any[]): string;
export function test_create_case(test_name: string, data_size: number, test_data: object | null, data_setup: TestFixtureFunc, data_test: TestFixtureFunc, data_teardown: TestFixtureFunc): TestCase;
export function test_create_suite(suite_name: string): TestSuite;
export function test_expect_message(log_domain: string | null, log_level: LogLevelFlags, pattern: string): void;
export function test_fail(): void;
export function test_failed(): boolean;
export function test_get_dir(file_type: TestFileType): any;
export function test_get_filename(file_type: TestFileType, first_path: string, ...args: any[]): string;
export function test_get_root(): TestSuite;
export function test_incomplete(msg: string | null): void;
export function test_init(argc: number, argv: string, ...args: any[]): void;
export function test_log_set_fatal_handler(log_func: TestLogFatalFunc, user_data: object | null): void;
export function test_log_type_name(log_type: TestLogType): string;
export function test_maximized_result(maximized_quantity: number, format: string, ...args: any[]): void;
export function test_message(format: string, ...args: any[]): void;
export function test_minimized_result(minimized_quantity: number, format: string, ...args: any[]): void;
export function test_queue_destroy(destroy_func: DestroyNotify, destroy_data: object | null): void;
export function test_queue_free(gfree_pointer: object | null): void;
export function test_rand_double(): number;
export function test_rand_double_range(range_start: number, range_end: number): number;
export function test_rand_int(): number;
export function test_rand_int_range(begin: number, end: number): number;
export function test_run(): number;
export function test_run_suite(suite: TestSuite): number;
export function test_set_nonfatal_assertions(): void;
export function test_skip(msg: string | null): void;
export function test_subprocess(): boolean;
export function test_summary(summary: string): void;
export function test_timer_elapsed(): number;
export function test_timer_last(): number;
export function test_timer_start(): void;
export function test_trap_assertions(domain: string, file: string, line: number, func: string, assertion_flags: number, pattern: string): void;
export function test_trap_fork(usec_timeout: number, test_trap_flags: TestTrapFlags): boolean;
export function test_trap_has_passed(): boolean;
export function test_trap_reached_timeout(): boolean;
export function test_trap_subprocess(test_path: string | null, usec_timeout: number, test_flags: TestSubprocessFlags): void;
export function thread_error_quark(): Quark;
export function thread_exit(retval: object | null): void;
export function thread_pool_get_max_idle_time(): number;
export function thread_pool_get_max_unused_threads(): number;
export function thread_pool_get_num_unused_threads(): number;
export function thread_pool_set_max_idle_time(interval: number): void;
export function thread_pool_set_max_unused_threads(max_threads: number): void;
export function thread_pool_stop_unused_threads(): void;
export function thread_self(): Thread;
export function thread_yield(): void;
export function time_val_from_iso8601(iso_date: string, time_: TimeVal): boolean;
export function timeout_add(interval: number, _function: SourceFunc, data: object | null): number;
export function timeout_add_full(priority: number, interval: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): number;
export function timeout_add_seconds(interval: number, _function: SourceFunc, data: object | null): number;
export function timeout_add_seconds_full(priority: number, interval: number, _function: SourceFunc, data: object | null, notify: DestroyNotify | null): number;
export function timeout_source_new(interval: number): Source;
export function timeout_source_new_seconds(interval: number): Source;
export function trash_stack_height(stack_p: TrashStack): number;
export function trash_stack_peek(stack_p: TrashStack): object | null;
export function trash_stack_pop(stack_p: TrashStack): object | null;
export function trash_stack_push(stack_p: TrashStack, data_p: object): void;
export function try_malloc(n_bytes: number): object | null;
export function try_malloc0(n_bytes: number): object | null;
export function try_malloc0_n(n_blocks: number, n_block_bytes: number): object | null;
export function try_malloc_n(n_blocks: number, n_block_bytes: number): object | null;
export function try_realloc(mem: object | null, n_bytes: number): object | null;
export function try_realloc_n(mem: object | null, n_blocks: number, n_block_bytes: number): object | null;
export function ucs4_to_utf16(str: number, len: number, items_read: number, items_written: number): number;
export function ucs4_to_utf8(str: number, len: number, items_read: number, items_written: number): string;
export function unichar_break_type(c: number): UnicodeBreakType;
export function unichar_combining_class(uc: number): number;
export function unichar_compose(a: number, b: number, ch: number): boolean;
export function unichar_decompose(ch: number, a: number, b: number): boolean;
export function unichar_digit_value(c: number): number;
export function unichar_fully_decompose(ch: number, compat: boolean, result: number, result_len: number): number;
export function unichar_get_mirror_char(ch: number, mirrored_ch: number): boolean;
export function unichar_get_script(ch: number): UnicodeScript;
export function unichar_isalnum(c: number): boolean;
export function unichar_isalpha(c: number): boolean;
export function unichar_iscntrl(c: number): boolean;
export function unichar_isdefined(c: number): boolean;
export function unichar_isdigit(c: number): boolean;
export function unichar_isgraph(c: number): boolean;
export function unichar_islower(c: number): boolean;
export function unichar_ismark(c: number): boolean;
export function unichar_isprint(c: number): boolean;
export function unichar_ispunct(c: number): boolean;
export function unichar_isspace(c: number): boolean;
export function unichar_istitle(c: number): boolean;
export function unichar_isupper(c: number): boolean;
export function unichar_iswide(c: number): boolean;
export function unichar_iswide_cjk(c: number): boolean;
export function unichar_isxdigit(c: number): boolean;
export function unichar_iszerowidth(c: number): boolean;
export function unichar_to_utf8(c: number, outbuf: string): number;
export function unichar_tolower(c: number): number;
export function unichar_totitle(c: number): number;
export function unichar_toupper(c: number): number;
export function unichar_type(c: number): UnicodeType;
export function unichar_validate(ch: number): boolean;
export function unichar_xdigit_value(c: number): number;
export function unicode_canonical_decomposition(ch: number, result_len: number): number;
export function unicode_canonical_ordering(string: number, len: number): void;
export function unicode_script_from_iso15924(iso15924: number): UnicodeScript;
export function unicode_script_to_iso15924(script: UnicodeScript): number;
export function unix_error_quark(): Quark;
export function unix_fd_add(fd: number, condition: IOCondition, _function: UnixFDSourceFunc, user_data: object | null): number;
export function unix_fd_add_full(priority: number, fd: number, condition: IOCondition, _function: UnixFDSourceFunc, user_data: object | null, notify: DestroyNotify): number;
export function unix_fd_source_new(fd: number, condition: IOCondition): Source;
export function unix_open_pipe(fds: number, flags: number): boolean;
export function unix_set_fd_nonblocking(fd: number, nonblock: boolean): boolean;
export function unix_signal_add(signum: number, handler: SourceFunc, user_data: object | null): number;
export function unix_signal_add_full(priority: number, signum: number, handler: SourceFunc, user_data: object | null, notify: DestroyNotify): number;
export function unix_signal_source_new(signum: number): Source;
export function unlink(filename: any): number;
export function unsetenv(variable: any): void;
export function uri_escape_string(unescaped: string, reserved_chars_allowed: string | null, allow_utf8: boolean): string;
export function uri_list_extract_uris(uri_list: string): string[];
export function uri_parse_scheme(uri: string): string;
export function uri_unescape_segment(escaped_string: string | null, escaped_string_end: string | null, illegal_characters: string | null): string;
export function uri_unescape_string(escaped_string: string, illegal_characters: string | null): string;
export function usleep(microseconds: number): void;
export function utf16_to_ucs4(str: number, len: number, items_read: number, items_written: number): number;
export function utf16_to_utf8(str: number, len: number, items_read: number, items_written: number): string;
export function utf8_casefold(str: string, len: number): string;
export function utf8_collate(str1: string, str2: string): number;
export function utf8_collate_key(str: string, len: number): string;
export function utf8_collate_key_for_filename(str: string, len: number): string;
export function utf8_find_next_char(p: string, end: string | null): string | null;
export function utf8_find_prev_char(str: string, p: string): string | null;
export function utf8_get_char(p: string): number;
export function utf8_get_char_validated(p: string, max_len: number): number;
export function utf8_make_valid(str: string, len: number): string;
export function utf8_normalize(str: string, len: number, mode: NormalizeMode): string | null;
export function utf8_offset_to_pointer(str: string, offset: number): string;
export function utf8_pointer_to_offset(str: string, pos: string): number;
export function utf8_prev_char(p: string): string;
export function utf8_strchr(p: string, len: number, c: number): string | null;
export function utf8_strdown(str: string, len: number): string;
export function utf8_strlen(p: string, max: number): number;
export function utf8_strncpy(dest: string, src: string, n: number): string;
export function utf8_strrchr(p: string, len: number, c: number): string | null;
export function utf8_strreverse(str: string, len: number): string;
export function utf8_strup(str: string, len: number): string;
export function utf8_substring(str: string, start_pos: number, end_pos: number): string;
export function utf8_to_ucs4(str: string, len: number, items_read: number, items_written: number): number;
export function utf8_to_ucs4_fast(str: string, len: number, items_written: number): number;
export function utf8_to_utf16(str: string, len: number, items_read: number, items_written: number): number;
export function utf8_validate(str: number[], max_len: number, end: string): boolean;
export function utf8_validate_len(str: number[], max_len: number, end: string): boolean;
export function uuid_string_is_valid(str: string): boolean;
export function uuid_string_random(): string;
export function variant_get_gtype(): any;
export function variant_is_object_path(string: string): boolean;
export function variant_is_signature(string: string): boolean;
export function variant_parse(type: VariantType | null, text: string, limit: string | null, endptr: string | null): Variant;
export function variant_parse_error_print_context(error: Error, source_str: string): string;
export function variant_parse_error_quark(): Quark;
export function variant_parser_get_error_quark(): Quark;
export function variant_type_checked_(arg0: string): VariantType;
export function variant_type_string_get_depth_(type_string: string): number;
export function variant_type_string_is_valid(type_string: string): boolean;
export function variant_type_string_scan(string: string, limit: string | null, endptr: string): boolean;
export function vasprintf(string: string, format: string, args: any): number;
export function vfprintf(file: object, format: string, args: any): number;
export function vprintf(format: string, args: any): number;
export function vsnprintf(string: string, n: number, format: string, args: any): number;
export function vsprintf(string: string, format: string, args: any): number;
export function warn_message(domain: string | null, file: string, line: number, func: string, warnexpr: string | null): void;
export type ChildWatchFunc = (pid: Pid, status: number, user_data: object | null) => void;
export type ClearHandleFunc = (handle_id: number) => void;
export type CompareDataFunc = (a: object | null, b: object | null, user_data: object | null) => number;
export type CompareFunc = (a: object | null, b: object | null) => number;
export type CopyFunc = (src: object, data: object | null) => object;
export type DataForeachFunc = (key_id: Quark, data: object | null, user_data: object | null) => void;
export type DestroyNotify = (data: object | null) => void;
export type DuplicateFunc = (data: object | null, user_data: object | null) => object | null;
export type EqualFunc = (a: object | null, b: object | null) => boolean;
export type FreeFunc = (data: object | null) => void;
export type Func = (data: object | null, user_data: object | null) => void;
export type HFunc = (key: object | null, value: object | null, user_data: object | null) => void;
export type HRFunc = (key: object | null, value: object | null, user_data: object | null) => boolean;
export type HashFunc = (key: object | null) => number;
export type HookCheckFunc = (data: object | null) => boolean;
export type HookCheckMarshaller = (hook: Hook, marshal_data: object | null) => boolean;
export type HookCompareFunc = (new_hook: Hook, sibling: Hook) => number;
export type HookFinalizeFunc = (hook_list: HookList, hook: Hook) => void;
export type HookFindFunc = (hook: Hook, data: object | null) => boolean;
export type HookFunc = (data: object | null) => void;
export type HookMarshaller = (hook: Hook, marshal_data: object | null) => void;
export type IOFunc = (source: IOChannel, condition: IOCondition, data: object | null) => boolean;
export type LogFunc = (log_domain: string, log_level: LogLevelFlags, message: string, user_data: object | null) => void;
export type LogWriterFunc = (log_level: LogLevelFlags, fields: LogField[], n_fields: number, user_data: object | null) => LogWriterOutput;
export type NodeForeachFunc = (node: Node, data: object | null) => void;
export type NodeTraverseFunc = (node: Node, data: object | null) => boolean;
export type OptionArgFunc = (option_name: string, value: string, data: object | null) => boolean;
export type OptionErrorFunc = (context: OptionContext, group: OptionGroup, data: object | null) => void;
export type OptionParseFunc = (context: OptionContext, group: OptionGroup, data: object | null) => boolean;
export type PollFunc = (ufds: PollFD, nfsd: number, timeout_: number) => number;
export type PrintFunc = (string: string) => void;
export type RegexEvalCallback = (match_info: MatchInfo, result: String, user_data: object | null) => boolean;
export type ScannerMsgFunc = (scanner: Scanner, message: string, error: boolean) => void;
export type SequenceIterCompareFunc = (a: SequenceIter, b: SequenceIter, data: object | null) => number;
export type SourceDummyMarshal = () => void;
export type SourceFunc = (user_data: object | null) => boolean;
export type SpawnChildSetupFunc = (user_data: object | null) => void;
export type TestDataFunc = (user_data: object | null) => void;
export type TestFixtureFunc = (fixture: object, user_data: object | null) => void;
export type TestFunc = () => void;
export type TestLogFatalFunc = (log_domain: string, log_level: LogLevelFlags, message: string, user_data: object | null) => boolean;
export type ThreadFunc = (data: object | null) => object | null;
export type TranslateFunc = (str: string, data: object | null) => string;
export type TraverseFunc = (key: object | null, value: object | null, data: object | null) => boolean;
export type UnixFDSourceFunc = (fd: number, condition: IOCondition, user_data: object | null) => boolean;
export type VoidFunc = () => void;