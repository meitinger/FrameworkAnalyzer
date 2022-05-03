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
})({"jBDcx":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/ecl/ecl.ts
var conf = {
    comments: {
        lineComment: "//",
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
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: '"',
            close: '"',
            notIn: [
                "string",
                "comment"
            ]
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
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ]
};
var language = {
    defaultToken: "",
    tokenPostfix: ".ecl",
    ignoreCase: true,
    brackets: [
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        },
        {
            open: "<",
            close: ">",
            token: "delimiter.angle"
        }
    ],
    pounds: [
        "append",
        "break",
        "declare",
        "demangle",
        "end",
        "for",
        "getdatatype",
        "if",
        "inmodule",
        "loop",
        "mangle",
        "onwarning",
        "option",
        "set",
        "stored",
        "uniquename"
    ].join("|"),
    keywords: [
        "__compressed__",
        "after",
        "all",
        "and",
        "any",
        "as",
        "atmost",
        "before",
        "beginc",
        "best",
        "between",
        "case",
        "cluster",
        "compressed",
        "compression",
        "const",
        "counter",
        "csv",
        "default",
        "descend",
        "embed",
        "encoding",
        "encrypt",
        "end",
        "endc",
        "endembed",
        "endmacro",
        "enum",
        "escape",
        "except",
        "exclusive",
        "expire",
        "export",
        "extend",
        "fail",
        "few",
        "fileposition",
        "first",
        "flat",
        "forward",
        "from",
        "full",
        "function",
        "functionmacro",
        "group",
        "grouped",
        "heading",
        "hole",
        "ifblock",
        "import",
        "in",
        "inner",
        "interface",
        "internal",
        "joined",
        "keep",
        "keyed",
        "last",
        "left",
        "limit",
        "linkcounted",
        "literal",
        "little_endian",
        "load",
        "local",
        "locale",
        "lookup",
        "lzw",
        "macro",
        "many",
        "maxcount",
        "maxlength",
        "min skew",
        "module",
        "mofn",
        "multiple",
        "named",
        "namespace",
        "nocase",
        "noroot",
        "noscan",
        "nosort",
        "not",
        "noxpath",
        "of",
        "onfail",
        "only",
        "opt",
        "or",
        "outer",
        "overwrite",
        "packed",
        "partition",
        "penalty",
        "physicallength",
        "pipe",
        "prefetch",
        "quote",
        "record",
        "repeat",
        "retry",
        "return",
        "right",
        "right1",
        "right2",
        "rows",
        "rowset",
        "scan",
        "scope",
        "self",
        "separator",
        "service",
        "shared",
        "skew",
        "skip",
        "smart",
        "soapaction",
        "sql",
        "stable",
        "store",
        "terminator",
        "thor",
        "threshold",
        "timelimit",
        "timeout",
        "token",
        "transform",
        "trim",
        "type",
        "unicodeorder",
        "unordered",
        "unsorted",
        "unstable",
        "update",
        "use",
        "validate",
        "virtual",
        "whole",
        "width",
        "wild",
        "within",
        "wnotrim",
        "xml",
        "xpath"
    ],
    functions: [
        "abs",
        "acos",
        "aggregate",
        "allnodes",
        "apply",
        "ascii",
        "asin",
        "assert",
        "asstring",
        "atan",
        "atan2",
        "ave",
        "build",
        "buildindex",
        "case",
        "catch",
        "choose",
        "choosen",
        "choosesets",
        "clustersize",
        "combine",
        "correlation",
        "cos",
        "cosh",
        "count",
        "covariance",
        "cron",
        "dataset",
        "dedup",
        "define",
        "denormalize",
        "dictionary",
        "distribute",
        "distributed",
        "distribution",
        "ebcdic",
        "enth",
        "error",
        "evaluate",
        "event",
        "eventextra",
        "eventname",
        "exists",
        "exp",
        "fail",
        "failcode",
        "failmessage",
        "fetch",
        "fromunicode",
        "fromxml",
        "getenv",
        "getisvalid",
        "global",
        "graph",
        "group",
        "hash",
        "hash32",
        "hash64",
        "hashcrc",
        "hashmd5",
        "having",
        "httpcall",
        "httpheader",
        "if",
        "iff",
        "index",
        "intformat",
        "isvalid",
        "iterate",
        "join",
        "keydiff",
        "keypatch",
        "keyunicode",
        "length",
        "library",
        "limit",
        "ln",
        "loadxml",
        "local",
        "log",
        "loop",
        "map",
        "matched",
        "matchlength",
        "matchposition",
        "matchtext",
        "matchunicode",
        "max",
        "merge",
        "mergejoin",
        "min",
        "nofold",
        "nolocal",
        "nonempty",
        "normalize",
        "nothor",
        "notify",
        "output",
        "parallel",
        "parse",
        "pipe",
        "power",
        "preload",
        "process",
        "project",
        "pull",
        "random",
        "range",
        "rank",
        "ranked",
        "realformat",
        "recordof",
        "regexfind",
        "regexreplace",
        "regroup",
        "rejected",
        "rollup",
        "round",
        "roundup",
        "row",
        "rowdiff",
        "sample",
        "sequential",
        "set",
        "sin",
        "sinh",
        "sizeof",
        "soapcall",
        "sort",
        "sorted",
        "sqrt",
        "stepped",
        "stored",
        "sum",
        "table",
        "tan",
        "tanh",
        "thisnode",
        "topn",
        "tounicode",
        "toxml",
        "transfer",
        "transform",
        "trim",
        "truncate",
        "typeof",
        "ungroup",
        "unicodeorder",
        "variance",
        "wait",
        "which",
        "workunit",
        "xmldecode",
        "xmlencode",
        "xmltext",
        "xmlunicode"
    ],
    typesint: [
        "integer",
        "unsigned"
    ].join("|"),
    typesnum: [
        "data",
        "qstring",
        "string",
        "unicode",
        "utf8",
        "varstring",
        "varunicode"
    ],
    typesone: [
        "ascii",
        "big_endian",
        "boolean",
        "data",
        "decimal",
        "ebcdic",
        "grouped",
        "integer",
        "linkcounted",
        "pattern",
        "qstring",
        "real",
        "record",
        "rule",
        "set of",
        "streamed",
        "string",
        "token",
        "udecimal",
        "unicode",
        "unsigned",
        "utf8",
        "varstring",
        "varunicode"
    ].join("|"),
    operators: [
        "+",
        "-",
        "/",
        ":=",
        "<",
        "<>",
        "=",
        ">",
        "\\",
        "and",
        "in",
        "not",
        "or"
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [
                /@typesint[4|8]/,
                "type"
            ],
            [
                /#(@pounds)/,
                "type"
            ],
            [
                /@typesone/,
                "type"
            ],
            [
                /[a-zA-Z_$][\w-$]*/,
                {
                    cases: {
                        "@functions": "keyword.function",
                        "@keywords": "keyword",
                        "@operators": "operator"
                    }
                }
            ],
            {
                include: "@whitespace"
            },
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "delimiter",
                        "@default": ""
                    }
                }
            ],
            [
                /[0-9_]*\.[0-9_]+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F_]+/,
                "number.hex"
            ],
            [
                /0[bB][01]+/,
                "number.hex"
            ],
            [
                /[0-9_]+/,
                "number"
            ],
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /"/,
                "string",
                "@string"
            ],
            [
                /'[^\\']'/,
                "string"
            ],
            [
                /(')(@escapes)(')/,
                [
                    "string",
                    "string.escape",
                    "string"
                ]
            ],
            [
                /'/,
                "string.invalid"
            ]
        ],
        whitespace: [
            [
                /[ \t\v\f\r\n]+/,
                ""
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ],
        comment: [
            [
                /[^\/*]+/,
                "comment"
            ],
            [
                /\*\//,
                "comment",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment"
            ]
        ],
        string: [
            [
                /[^\\']+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /'/,
                "string",
                "@pop"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=ecl.ad219576.js.map
