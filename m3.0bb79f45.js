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
})({"14Tb2":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/m3/m3.ts
var conf = {
    comments: {
        blockComment: [
            "(*",
            "*)"
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
            open: "[",
            close: "]"
        },
        {
            open: "{",
            close: "}"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: "(*",
            close: "*)"
        },
        {
            open: "<*",
            close: "*>"
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
    ]
};
var language = {
    defaultToken: "",
    tokenPostfix: ".m3",
    brackets: [
        {
            token: "delimiter.curly",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        }
    ],
    keywords: [
        "AND",
        "ANY",
        "ARRAY",
        "AS",
        "BEGIN",
        "BITS",
        "BRANDED",
        "BY",
        "CASE",
        "CONST",
        "DIV",
        "DO",
        "ELSE",
        "ELSIF",
        "END",
        "EVAL",
        "EXCEPT",
        "EXCEPTION",
        "EXIT",
        "EXPORTS",
        "FINALLY",
        "FOR",
        "FROM",
        "GENERIC",
        "IF",
        "IMPORT",
        "IN",
        "INTERFACE",
        "LOCK",
        "LOOP",
        "METHODS",
        "MOD",
        "MODULE",
        "NOT",
        "OBJECT",
        "OF",
        "OR",
        "OVERRIDES",
        "PROCEDURE",
        "RAISE",
        "RAISES",
        "READONLY",
        "RECORD",
        "REF",
        "REPEAT",
        "RETURN",
        "REVEAL",
        "SET",
        "THEN",
        "TO",
        "TRY",
        "TYPE",
        "TYPECASE",
        "UNSAFE",
        "UNTIL",
        "UNTRACED",
        "VALUE",
        "VAR",
        "WHILE",
        "WITH"
    ],
    reservedConstNames: [
        "ABS",
        "ADR",
        "ADRSIZE",
        "BITSIZE",
        "BYTESIZE",
        "CEILING",
        "DEC",
        "DISPOSE",
        "FALSE",
        "FIRST",
        "FLOAT",
        "FLOOR",
        "INC",
        "ISTYPE",
        "LAST",
        "LOOPHOLE",
        "MAX",
        "MIN",
        "NARROW",
        "NEW",
        "NIL",
        "NUMBER",
        "ORD",
        "ROUND",
        "SUBARRAY",
        "TRUE",
        "TRUNC",
        "TYPECODE",
        "VAL"
    ],
    reservedTypeNames: [
        "ADDRESS",
        "ANY",
        "BOOLEAN",
        "CARDINAL",
        "CHAR",
        "EXTENDED",
        "INTEGER",
        "LONGCARD",
        "LONGINT",
        "LONGREAL",
        "MUTEX",
        "NULL",
        "REAL",
        "REFANY",
        "ROOT",
        "TEXT"
    ],
    operators: [
        "+",
        "-",
        "*",
        "/",
        "&",
        "^",
        "."
    ],
    relations: [
        "=",
        "#",
        "<",
        "<=",
        ">",
        ">=",
        "<:",
        ":"
    ],
    delimiters: [
        "|",
        "..",
        "=>",
        ",",
        ";",
        ":="
    ],
    symbols: /[>=<#.,:;+\-*/&^]+/,
    escapes: /\\(?:[\\fnrt"']|[0-7]{3})/,
    tokenizer: {
        root: [
            [
                /_\w*/,
                "invalid"
            ],
            [
                /[a-zA-Z][a-zA-Z0-9_]*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@reservedConstNames": {
                            token: "constant.reserved.$0"
                        },
                        "@reservedTypeNames": {
                            token: "type.reserved.$0"
                        },
                        "@default": "identifier"
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
                /[0-9]+\.[0-9]+(?:[DdEeXx][\+\-]?[0-9]+)?/,
                "number.float"
            ],
            [
                /[0-9]+(?:\_[0-9a-fA-F]+)?L?/,
                "number"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "operators",
                        "@relations": "operators",
                        "@delimiters": "delimiter",
                        "@default": "invalid"
                    }
                }
            ],
            [
                /'[^\\']'/,
                "string.char"
            ],
            [
                /(')(@escapes)(')/,
                [
                    "string.char",
                    "string.escape",
                    "string.char"
                ]
            ],
            [
                /'/,
                "invalid"
            ],
            [
                /"([^"\\]|\\.)*$/,
                "invalid"
            ],
            [
                /"/,
                "string.text",
                "@text"
            ]
        ],
        text: [
            [
                /[^\\"]+/,
                "string.text"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "invalid"
            ],
            [
                /"/,
                "string.text",
                "@pop"
            ]
        ],
        comment: [
            [
                /\(\*/,
                "comment",
                "@push"
            ],
            [
                /\*\)/,
                "comment",
                "@pop"
            ],
            [
                /./,
                "comment"
            ]
        ],
        pragma: [
            [
                /<\*/,
                "keyword.pragma",
                "@push"
            ],
            [
                /\*>/,
                "keyword.pragma",
                "@pop"
            ],
            [
                /./,
                "keyword.pragma"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /\(\*/,
                "comment",
                "@comment"
            ],
            [
                /<\*/,
                "keyword.pragma",
                "@pragma"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=m3.0bb79f45.js.map
