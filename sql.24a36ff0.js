// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"fRqcb":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conf", function() {
    return conf;
});
parcelHelpers.export(exports, "language", function() {
    return language;
});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/sql/sql.ts
var conf = {
    comments: {
        lineComment: "--",
        blockComment: [
            "/*",
            "*/"
        ]
    },
    brackets: [
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
        ],
        [
            "(",
            ")"
        ]
    ],
    autoClosingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ],
    surroundingPairs: [
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ]
};
var language = {
    defaultToken: "",
    tokenPostfix: ".sql",
    ignoreCase: true,
    brackets: [
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }
    ],
    keywords: [
        "ABORT",
        "ABSOLUTE",
        "ACTION",
        "ADA",
        "ADD",
        "AFTER",
        "ALL",
        "ALLOCATE",
        "ALTER",
        "ALWAYS",
        "ANALYZE",
        "AND",
        "ANY",
        "ARE",
        "AS",
        "ASC",
        "ASSERTION",
        "AT",
        "ATTACH",
        "AUTHORIZATION",
        "AUTOINCREMENT",
        "AVG",
        "BACKUP",
        "BEFORE",
        "BEGIN",
        "BETWEEN",
        "BIT",
        "BIT_LENGTH",
        "BOTH",
        "BREAK",
        "BROWSE",
        "BULK",
        "BY",
        "CASCADE",
        "CASCADED",
        "CASE",
        "CAST",
        "CATALOG",
        "CHAR",
        "CHARACTER",
        "CHARACTER_LENGTH",
        "CHAR_LENGTH",
        "CHECK",
        "CHECKPOINT",
        "CLOSE",
        "CLUSTERED",
        "COALESCE",
        "COLLATE",
        "COLLATION",
        "COLUMN",
        "COMMIT",
        "COMPUTE",
        "CONFLICT",
        "CONNECT",
        "CONNECTION",
        "CONSTRAINT",
        "CONSTRAINTS",
        "CONTAINS",
        "CONTAINSTABLE",
        "CONTINUE",
        "CONVERT",
        "CORRESPONDING",
        "COUNT",
        "CREATE",
        "CROSS",
        "CURRENT",
        "CURRENT_DATE",
        "CURRENT_TIME",
        "CURRENT_TIMESTAMP",
        "CURRENT_USER",
        "CURSOR",
        "DATABASE",
        "DATE",
        "DAY",
        "DBCC",
        "DEALLOCATE",
        "DEC",
        "DECIMAL",
        "DECLARE",
        "DEFAULT",
        "DEFERRABLE",
        "DEFERRED",
        "DELETE",
        "DENY",
        "DESC",
        "DESCRIBE",
        "DESCRIPTOR",
        "DETACH",
        "DIAGNOSTICS",
        "DISCONNECT",
        "DISK",
        "DISTINCT",
        "DISTRIBUTED",
        "DO",
        "DOMAIN",
        "DOUBLE",
        "DROP",
        "DUMP",
        "EACH",
        "ELSE",
        "END",
        "END-EXEC",
        "ERRLVL",
        "ESCAPE",
        "EXCEPT",
        "EXCEPTION",
        "EXCLUDE",
        "EXCLUSIVE",
        "EXEC",
        "EXECUTE",
        "EXISTS",
        "EXIT",
        "EXPLAIN",
        "EXTERNAL",
        "EXTRACT",
        "FAIL",
        "FALSE",
        "FETCH",
        "FILE",
        "FILLFACTOR",
        "FILTER",
        "FIRST",
        "FLOAT",
        "FOLLOWING",
        "FOR",
        "FOREIGN",
        "FORTRAN",
        "FOUND",
        "FREETEXT",
        "FREETEXTTABLE",
        "FROM",
        "FULL",
        "FUNCTION",
        "GENERATED",
        "GET",
        "GLOB",
        "GLOBAL",
        "GO",
        "GOTO",
        "GRANT",
        "GROUP",
        "GROUPS",
        "HAVING",
        "HOLDLOCK",
        "HOUR",
        "IDENTITY",
        "IDENTITYCOL",
        "IDENTITY_INSERT",
        "IF",
        "IGNORE",
        "IMMEDIATE",
        "IN",
        "INCLUDE",
        "INDEX",
        "INDEXED",
        "INDICATOR",
        "INITIALLY",
        "INNER",
        "INPUT",
        "INSENSITIVE",
        "INSERT",
        "INSTEAD",
        "INT",
        "INTEGER",
        "INTERSECT",
        "INTERVAL",
        "INTO",
        "IS",
        "ISNULL",
        "ISOLATION",
        "JOIN",
        "KEY",
        "KILL",
        "LANGUAGE",
        "LAST",
        "LEADING",
        "LEFT",
        "LEVEL",
        "LIKE",
        "LIMIT",
        "LINENO",
        "LOAD",
        "LOCAL",
        "LOWER",
        "MATCH",
        "MATERIALIZED",
        "MAX",
        "MERGE",
        "MIN",
        "MINUTE",
        "MODULE",
        "MONTH",
        "NAMES",
        "NATIONAL",
        "NATURAL",
        "NCHAR",
        "NEXT",
        "NO",
        "NOCHECK",
        "NONCLUSTERED",
        "NONE",
        "NOT",
        "NOTHING",
        "NOTNULL",
        "NULL",
        "NULLIF",
        "NULLS",
        "NUMERIC",
        "OCTET_LENGTH",
        "OF",
        "OFF",
        "OFFSET",
        "OFFSETS",
        "ON",
        "ONLY",
        "OPEN",
        "OPENDATASOURCE",
        "OPENQUERY",
        "OPENROWSET",
        "OPENXML",
        "OPTION",
        "OR",
        "ORDER",
        "OTHERS",
        "OUTER",
        "OUTPUT",
        "OVER",
        "OVERLAPS",
        "PAD",
        "PARTIAL",
        "PARTITION",
        "PASCAL",
        "PERCENT",
        "PIVOT",
        "PLAN",
        "POSITION",
        "PRAGMA",
        "PRECEDING",
        "PRECISION",
        "PREPARE",
        "PRESERVE",
        "PRIMARY",
        "PRINT",
        "PRIOR",
        "PRIVILEGES",
        "PROC",
        "PROCEDURE",
        "PUBLIC",
        "QUERY",
        "RAISE",
        "RAISERROR",
        "RANGE",
        "READ",
        "READTEXT",
        "REAL",
        "RECONFIGURE",
        "RECURSIVE",
        "REFERENCES",
        "REGEXP",
        "REINDEX",
        "RELATIVE",
        "RELEASE",
        "RENAME",
        "REPLACE",
        "REPLICATION",
        "RESTORE",
        "RESTRICT",
        "RETURN",
        "RETURNING",
        "REVERT",
        "REVOKE",
        "RIGHT",
        "ROLLBACK",
        "ROW",
        "ROWCOUNT",
        "ROWGUIDCOL",
        "ROWS",
        "RULE",
        "SAVE",
        "SAVEPOINT",
        "SCHEMA",
        "SCROLL",
        "SECOND",
        "SECTION",
        "SECURITYAUDIT",
        "SELECT",
        "SEMANTICKEYPHRASETABLE",
        "SEMANTICSIMILARITYDETAILSTABLE",
        "SEMANTICSIMILARITYTABLE",
        "SESSION",
        "SESSION_USER",
        "SET",
        "SETUSER",
        "SHUTDOWN",
        "SIZE",
        "SMALLINT",
        "SOME",
        "SPACE",
        "SQL",
        "SQLCA",
        "SQLCODE",
        "SQLERROR",
        "SQLSTATE",
        "SQLWARNING",
        "STATISTICS",
        "SUBSTRING",
        "SUM",
        "SYSTEM_USER",
        "TABLE",
        "TABLESAMPLE",
        "TEMP",
        "TEMPORARY",
        "TEXTSIZE",
        "THEN",
        "TIES",
        "TIME",
        "TIMESTAMP",
        "TIMEZONE_HOUR",
        "TIMEZONE_MINUTE",
        "TO",
        "TOP",
        "TRAILING",
        "TRAN",
        "TRANSACTION",
        "TRANSLATE",
        "TRANSLATION",
        "TRIGGER",
        "TRIM",
        "TRUE",
        "TRUNCATE",
        "TRY_CONVERT",
        "TSEQUAL",
        "UNBOUNDED",
        "UNION",
        "UNIQUE",
        "UNKNOWN",
        "UNPIVOT",
        "UPDATE",
        "UPDATETEXT",
        "UPPER",
        "USAGE",
        "USE",
        "USER",
        "USING",
        "VACUUM",
        "VALUE",
        "VALUES",
        "VARCHAR",
        "VARYING",
        "VIEW",
        "VIRTUAL",
        "WAITFOR",
        "WHEN",
        "WHENEVER",
        "WHERE",
        "WHILE",
        "WINDOW",
        "WITH",
        "WITHIN GROUP",
        "WITHOUT",
        "WORK",
        "WRITE",
        "WRITETEXT",
        "YEAR",
        "ZONE"
    ],
    operators: [
        "ALL",
        "AND",
        "ANY",
        "BETWEEN",
        "EXISTS",
        "IN",
        "LIKE",
        "NOT",
        "OR",
        "SOME",
        "EXCEPT",
        "INTERSECT",
        "UNION",
        "APPLY",
        "CROSS",
        "FULL",
        "INNER",
        "JOIN",
        "LEFT",
        "OUTER",
        "RIGHT",
        "CONTAINS",
        "FREETEXT",
        "IS",
        "NULL",
        "PIVOT",
        "UNPIVOT",
        "MATCHED"
    ],
    builtinFunctions: [
        "AVG",
        "CHECKSUM_AGG",
        "COUNT",
        "COUNT_BIG",
        "GROUPING",
        "GROUPING_ID",
        "MAX",
        "MIN",
        "SUM",
        "STDEV",
        "STDEVP",
        "VAR",
        "VARP",
        "CUME_DIST",
        "FIRST_VALUE",
        "LAG",
        "LAST_VALUE",
        "LEAD",
        "PERCENTILE_CONT",
        "PERCENTILE_DISC",
        "PERCENT_RANK",
        "COLLATE",
        "COLLATIONPROPERTY",
        "TERTIARY_WEIGHTS",
        "FEDERATION_FILTERING_VALUE",
        "CAST",
        "CONVERT",
        "PARSE",
        "TRY_CAST",
        "TRY_CONVERT",
        "TRY_PARSE",
        "ASYMKEY_ID",
        "ASYMKEYPROPERTY",
        "CERTPROPERTY",
        "CERT_ID",
        "CRYPT_GEN_RANDOM",
        "DECRYPTBYASYMKEY",
        "DECRYPTBYCERT",
        "DECRYPTBYKEY",
        "DECRYPTBYKEYAUTOASYMKEY",
        "DECRYPTBYKEYAUTOCERT",
        "DECRYPTBYPASSPHRASE",
        "ENCRYPTBYASYMKEY",
        "ENCRYPTBYCERT",
        "ENCRYPTBYKEY",
        "ENCRYPTBYPASSPHRASE",
        "HASHBYTES",
        "IS_OBJECTSIGNED",
        "KEY_GUID",
        "KEY_ID",
        "KEY_NAME",
        "SIGNBYASYMKEY",
        "SIGNBYCERT",
        "SYMKEYPROPERTY",
        "VERIFYSIGNEDBYCERT",
        "VERIFYSIGNEDBYASYMKEY",
        "CURSOR_STATUS",
        "DATALENGTH",
        "IDENT_CURRENT",
        "IDENT_INCR",
        "IDENT_SEED",
        "IDENTITY",
        "SQL_VARIANT_PROPERTY",
        "CURRENT_TIMESTAMP",
        "DATEADD",
        "DATEDIFF",
        "DATEFROMPARTS",
        "DATENAME",
        "DATEPART",
        "DATETIME2FROMPARTS",
        "DATETIMEFROMPARTS",
        "DATETIMEOFFSETFROMPARTS",
        "DAY",
        "EOMONTH",
        "GETDATE",
        "GETUTCDATE",
        "ISDATE",
        "MONTH",
        "SMALLDATETIMEFROMPARTS",
        "SWITCHOFFSET",
        "SYSDATETIME",
        "SYSDATETIMEOFFSET",
        "SYSUTCDATETIME",
        "TIMEFROMPARTS",
        "TODATETIMEOFFSET",
        "YEAR",
        "CHOOSE",
        "COALESCE",
        "IIF",
        "NULLIF",
        "ABS",
        "ACOS",
        "ASIN",
        "ATAN",
        "ATN2",
        "CEILING",
        "COS",
        "COT",
        "DEGREES",
        "EXP",
        "FLOOR",
        "LOG",
        "LOG10",
        "PI",
        "POWER",
        "RADIANS",
        "RAND",
        "ROUND",
        "SIGN",
        "SIN",
        "SQRT",
        "SQUARE",
        "TAN",
        "APP_NAME",
        "APPLOCK_MODE",
        "APPLOCK_TEST",
        "ASSEMBLYPROPERTY",
        "COL_LENGTH",
        "COL_NAME",
        "COLUMNPROPERTY",
        "DATABASE_PRINCIPAL_ID",
        "DATABASEPROPERTYEX",
        "DB_ID",
        "DB_NAME",
        "FILE_ID",
        "FILE_IDEX",
        "FILE_NAME",
        "FILEGROUP_ID",
        "FILEGROUP_NAME",
        "FILEGROUPPROPERTY",
        "FILEPROPERTY",
        "FULLTEXTCATALOGPROPERTY",
        "FULLTEXTSERVICEPROPERTY",
        "INDEX_COL",
        "INDEXKEY_PROPERTY",
        "INDEXPROPERTY",
        "OBJECT_DEFINITION",
        "OBJECT_ID",
        "OBJECT_NAME",
        "OBJECT_SCHEMA_NAME",
        "OBJECTPROPERTY",
        "OBJECTPROPERTYEX",
        "ORIGINAL_DB_NAME",
        "PARSENAME",
        "SCHEMA_ID",
        "SCHEMA_NAME",
        "SCOPE_IDENTITY",
        "SERVERPROPERTY",
        "STATS_DATE",
        "TYPE_ID",
        "TYPE_NAME",
        "TYPEPROPERTY",
        "DENSE_RANK",
        "NTILE",
        "RANK",
        "ROW_NUMBER",
        "PUBLISHINGSERVERNAME",
        "OPENDATASOURCE",
        "OPENQUERY",
        "OPENROWSET",
        "OPENXML",
        "CERTENCODED",
        "CERTPRIVATEKEY",
        "CURRENT_USER",
        "HAS_DBACCESS",
        "HAS_PERMS_BY_NAME",
        "IS_MEMBER",
        "IS_ROLEMEMBER",
        "IS_SRVROLEMEMBER",
        "LOGINPROPERTY",
        "ORIGINAL_LOGIN",
        "PERMISSIONS",
        "PWDENCRYPT",
        "PWDCOMPARE",
        "SESSION_USER",
        "SESSIONPROPERTY",
        "SUSER_ID",
        "SUSER_NAME",
        "SUSER_SID",
        "SUSER_SNAME",
        "SYSTEM_USER",
        "USER",
        "USER_ID",
        "USER_NAME",
        "ASCII",
        "CHAR",
        "CHARINDEX",
        "CONCAT",
        "DIFFERENCE",
        "FORMAT",
        "LEFT",
        "LEN",
        "LOWER",
        "LTRIM",
        "NCHAR",
        "PATINDEX",
        "QUOTENAME",
        "REPLACE",
        "REPLICATE",
        "REVERSE",
        "RIGHT",
        "RTRIM",
        "SOUNDEX",
        "SPACE",
        "STR",
        "STUFF",
        "SUBSTRING",
        "UNICODE",
        "UPPER",
        "BINARY_CHECKSUM",
        "CHECKSUM",
        "CONNECTIONPROPERTY",
        "CONTEXT_INFO",
        "CURRENT_REQUEST_ID",
        "ERROR_LINE",
        "ERROR_NUMBER",
        "ERROR_MESSAGE",
        "ERROR_PROCEDURE",
        "ERROR_SEVERITY",
        "ERROR_STATE",
        "FORMATMESSAGE",
        "GETANSINULL",
        "GET_FILESTREAM_TRANSACTION_CONTEXT",
        "HOST_ID",
        "HOST_NAME",
        "ISNULL",
        "ISNUMERIC",
        "MIN_ACTIVE_ROWVERSION",
        "NEWID",
        "NEWSEQUENTIALID",
        "ROWCOUNT_BIG",
        "XACT_STATE",
        "TEXTPTR",
        "TEXTVALID",
        "COLUMNS_UPDATED",
        "EVENTDATA",
        "TRIGGER_NESTLEVEL",
        "UPDATE",
        "CHANGETABLE",
        "CHANGE_TRACKING_CONTEXT",
        "CHANGE_TRACKING_CURRENT_VERSION",
        "CHANGE_TRACKING_IS_COLUMN_IN_MASK",
        "CHANGE_TRACKING_MIN_VALID_VERSION",
        "CONTAINSTABLE",
        "FREETEXTTABLE",
        "SEMANTICKEYPHRASETABLE",
        "SEMANTICSIMILARITYDETAILSTABLE",
        "SEMANTICSIMILARITYTABLE",
        "FILETABLEROOTPATH",
        "GETFILENAMESPACEPATH",
        "GETPATHLOCATOR",
        "PATHNAME",
        "GET_TRANSMISSION_STATUS"
    ],
    builtinVariables: [
        "@@DATEFIRST",
        "@@DBTS",
        "@@LANGID",
        "@@LANGUAGE",
        "@@LOCK_TIMEOUT",
        "@@MAX_CONNECTIONS",
        "@@MAX_PRECISION",
        "@@NESTLEVEL",
        "@@OPTIONS",
        "@@REMSERVER",
        "@@SERVERNAME",
        "@@SERVICENAME",
        "@@SPID",
        "@@TEXTSIZE",
        "@@VERSION",
        "@@CURSOR_ROWS",
        "@@FETCH_STATUS",
        "@@DATEFIRST",
        "@@PROCID",
        "@@ERROR",
        "@@IDENTITY",
        "@@ROWCOUNT",
        "@@TRANCOUNT",
        "@@CONNECTIONS",
        "@@CPU_BUSY",
        "@@IDLE",
        "@@IO_BUSY",
        "@@PACKET_ERRORS",
        "@@PACK_RECEIVED",
        "@@PACK_SENT",
        "@@TIMETICKS",
        "@@TOTAL_ERRORS",
        "@@TOTAL_READ",
        "@@TOTAL_WRITE"
    ],
    pseudoColumns: [
        "$ACTION",
        "$IDENTITY",
        "$ROWGUID",
        "$PARTITION"
    ],
    tokenizer: {
        root: [
            {
                include: "@comments"
            },
            {
                include: "@whitespace"
            },
            {
                include: "@pseudoColumns"
            },
            {
                include: "@numbers"
            },
            {
                include: "@strings"
            },
            {
                include: "@complexIdentifiers"
            },
            {
                include: "@scopes"
            },
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /[()]/,
                "@brackets"
            ],
            [
                /[\w@#$]+/,
                {
                    cases: {
                        "@operators": "operator",
                        "@builtinVariables": "predefined",
                        "@builtinFunctions": "predefined",
                        "@keywords": "keyword",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[<>=!%&+\-*/|~^]/,
                "operator"
            ]
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ]
        ],
        comments: [
            [
                /--+.*/,
                "comment"
            ],
            [
                /\/\*/,
                {
                    token: "comment.quote",
                    next: "@comment"
                }
            ]
        ],
        comment: [
            [
                /[^*/]+/,
                "comment"
            ],
            [
                /\*\//,
                {
                    token: "comment.quote",
                    next: "@pop"
                }
            ],
            [
                /./,
                "comment"
            ]
        ],
        pseudoColumns: [
            [
                /[$][A-Za-z_][\w@#$]*/,
                {
                    cases: {
                        "@pseudoColumns": "predefined",
                        "@default": "identifier"
                    }
                }
            ]
        ],
        numbers: [
            [
                /0[xX][0-9a-fA-F]*/,
                "number"
            ],
            [
                /[$][+-]*\d*(\.\d*)?/,
                "number"
            ],
            [
                /((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,
                "number"
            ]
        ],
        strings: [
            [
                /N'/,
                {
                    token: "string",
                    next: "@string"
                }
            ],
            [
                /'/,
                {
                    token: "string",
                    next: "@string"
                }
            ]
        ],
        string: [
            [
                /[^']+/,
                "string"
            ],
            [
                /''/,
                "string"
            ],
            [
                /'/,
                {
                    token: "string",
                    next: "@pop"
                }
            ]
        ],
        complexIdentifiers: [
            [
                /\[/,
                {
                    token: "identifier.quote",
                    next: "@bracketedIdentifier"
                }
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    next: "@quotedIdentifier"
                }
            ]
        ],
        bracketedIdentifier: [
            [
                /[^\]]+/,
                "identifier"
            ],
            [
                /]]/,
                "identifier"
            ],
            [
                /]/,
                {
                    token: "identifier.quote",
                    next: "@pop"
                }
            ]
        ],
        quotedIdentifier: [
            [
                /[^"]+/,
                "identifier"
            ],
            [
                /""/,
                "identifier"
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    next: "@pop"
                }
            ]
        ],
        scopes: [
            [
                /BEGIN\s+(DISTRIBUTED\s+)?TRAN(SACTION)?\b/i,
                "keyword"
            ],
            [
                /BEGIN\s+TRY\b/i,
                {
                    token: "keyword.try"
                }
            ],
            [
                /END\s+TRY\b/i,
                {
                    token: "keyword.try"
                }
            ],
            [
                /BEGIN\s+CATCH\b/i,
                {
                    token: "keyword.catch"
                }
            ],
            [
                /END\s+CATCH\b/i,
                {
                    token: "keyword.catch"
                }
            ],
            [
                /(BEGIN|CASE)\b/i,
                {
                    token: "keyword.block"
                }
            ],
            [
                /END\b/i,
                {
                    token: "keyword.block"
                }
            ],
            [
                /WHEN\b/i,
                {
                    token: "keyword.choice"
                }
            ],
            [
                /THEN\b/i,
                {
                    token: "keyword.choice"
                }
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=sql.24a36ff0.js.map
