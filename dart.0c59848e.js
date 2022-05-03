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
})({"5o3gN":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/dart/dart.ts
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
                "string"
            ]
        },
        {
            open: "`",
            close: "`",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "/**",
            close: " */",
            notIn: [
                "string"
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
            open: "(",
            close: ")"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "`",
            close: "`"
        }
    ],
    folding: {
        markers: {
            start: /^\s*\s*#?region\b/,
            end: /^\s*\s*#?endregion\b/
        }
    }
};
var language = {
    defaultToken: "invalid",
    tokenPostfix: ".dart",
    keywords: [
        "abstract",
        "dynamic",
        "implements",
        "show",
        "as",
        "else",
        "import",
        "static",
        "assert",
        "enum",
        "in",
        "super",
        "async",
        "export",
        "interface",
        "switch",
        "await",
        "extends",
        "is",
        "sync",
        "break",
        "external",
        "library",
        "this",
        "case",
        "factory",
        "mixin",
        "throw",
        "catch",
        "false",
        "new",
        "true",
        "class",
        "final",
        "null",
        "try",
        "const",
        "finally",
        "on",
        "typedef",
        "continue",
        "for",
        "operator",
        "var",
        "covariant",
        "Function",
        "part",
        "void",
        "default",
        "get",
        "rethrow",
        "while",
        "deferred",
        "hide",
        "return",
        "with",
        "do",
        "if",
        "set",
        "yield"
    ],
    typeKeywords: [
        "int",
        "double",
        "String",
        "bool"
    ],
    operators: [
        "+",
        "-",
        "*",
        "/",
        "~/",
        "%",
        "++",
        "--",
        "==",
        "!=",
        ">",
        "<",
        ">=",
        "<=",
        "=",
        "-=",
        "/=",
        "%=",
        ">>=",
        "^=",
        "+=",
        "*=",
        "~/=",
        "<<=",
        "&=",
        "!=",
        "||",
        "&&",
        "&",
        "|",
        "^",
        "~",
        "<<",
        ">>",
        "!",
        ">>>",
        "??",
        "?",
        ":",
        "|="
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    digits: /\d+(_+\d+)*/,
    octaldigits: /[0-7]+(_+[0-7]+)*/,
    binarydigits: /[0-1]+(_+[0-1]+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[bBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})/,
    tokenizer: {
        root: [
            [
                /[{}]/,
                "delimiter.bracket"
            ],
            {
                include: "common"
            }
        ],
        common: [
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        "@typeKeywords": "type.identifier",
                        "@keywords": "keyword",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[A-Z_$][\w\$]*/,
                "type.identifier"
            ],
            {
                include: "@whitespace"
            },
            [
                /\/(?=([^\\\/]|\\.)+\/([gimsuy]*)(\s*)(\.|;|,|\)|\]|\}|$))/,
                {
                    token: "regexp",
                    bracket: "@open",
                    next: "@regexp"
                }
            ],
            [
                /@[a-zA-Z]+/,
                "annotation"
            ],
            [
                /[()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /!(?=([^=]|$))/,
                "delimiter"
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
                /(@digits)[eE]([\-+]?(@digits))?/,
                "number.float"
            ],
            [
                /(@digits)\.(@digits)([eE][\-+]?(@digits))?/,
                "number.float"
            ],
            [
                /0[xX](@hexdigits)n?/,
                "number.hex"
            ],
            [
                /0[oO]?(@octaldigits)n?/,
                "number.octal"
            ],
            [
                /0[bB](@binarydigits)n?/,
                "number.binary"
            ],
            [
                /(@digits)n?/,
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
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /"/,
                "string",
                "@string_double"
            ],
            [
                /'/,
                "string",
                "@string_single"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /\/\*\*(?!\/)/,
                "comment.doc",
                "@jsdoc"
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/\/.*$/,
                "comment.doc"
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
        jsdoc: [
            [
                /[^\/*]+/,
                "comment.doc"
            ],
            [
                /\*\//,
                "comment.doc",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment.doc"
            ]
        ],
        regexp: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                    "regexp.escape.control",
                    "regexp.escape.control",
                    "regexp.escape.control"
                ]
            ],
            [
                /(\[)(\^?)(?=(?:[^\]\\\/]|\\.)+)/,
                [
                    "regexp.escape.control",
                    {
                        token: "regexp.escape.control",
                        next: "@regexrange"
                    }
                ]
            ],
            [
                /(\()(\?:|\?=|\?!)/,
                [
                    "regexp.escape.control",
                    "regexp.escape.control"
                ]
            ],
            [
                /[()]/,
                "regexp.escape.control"
            ],
            [
                /@regexpctl/,
                "regexp.escape.control"
            ],
            [
                /[^\\\/]/,
                "regexp"
            ],
            [
                /@regexpesc/,
                "regexp.escape"
            ],
            [
                /\\\./,
                "regexp.invalid"
            ],
            [
                /(\/)([gimsuy]*)/,
                [
                    {
                        token: "regexp",
                        bracket: "@close",
                        next: "@pop"
                    },
                    "keyword.other"
                ]
            ]
        ],
        regexrange: [
            [
                /-/,
                "regexp.escape.control"
            ],
            [
                /\^/,
                "regexp.invalid"
            ],
            [
                /@regexpesc/,
                "regexp.escape"
            ],
            [
                /[^\]]/,
                "regexp"
            ],
            [
                /\]/,
                {
                    token: "regexp.escape.control",
                    next: "@pop",
                    bracket: "@close"
                }
            ]
        ],
        string_double: [
            [
                /[^\\"\$]+/,
                "string"
            ],
            [
                /[^\\"]+/,
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
                /"/,
                "string",
                "@pop"
            ],
            [
                /\$\w+/,
                "identifier"
            ]
        ],
        string_single: [
            [
                /[^\\'\$]+/,
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
            ],
            [
                /\$\w+/,
                "identifier"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=dart.0c59848e.js.map