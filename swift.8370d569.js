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
})({"8eMug":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conf", function() {
    return conf;
}) /*!---------------------------------------------------------------------------------------------
 *  Copyright (C) David Owens II, owensd.io. All rights reserved.
 *--------------------------------------------------------------------------------------------*/ ;
parcelHelpers.export(exports, "language", function() {
    return language;
});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/swift/swift.ts
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: "`",
            close: "`"
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
        },
        {
            open: "`",
            close: "`"
        }
    ]
};
var language = {
    defaultToken: "",
    tokenPostfix: ".swift",
    identifier: /[a-zA-Z_][\w$]*/,
    attributes: [
        "@autoclosure",
        "@noescape",
        "@noreturn",
        "@NSApplicationMain",
        "@NSCopying",
        "@NSManaged",
        "@objc",
        "@UIApplicationMain",
        "@noreturn",
        "@availability",
        "@IBAction",
        "@IBDesignable",
        "@IBInspectable",
        "@IBOutlet"
    ],
    accessmodifiers: [
        "public",
        "private",
        "fileprivate",
        "internal"
    ],
    keywords: [
        "__COLUMN__",
        "__FILE__",
        "__FUNCTION__",
        "__LINE__",
        "as",
        "as!",
        "as?",
        "associativity",
        "break",
        "case",
        "catch",
        "class",
        "continue",
        "convenience",
        "default",
        "deinit",
        "didSet",
        "do",
        "dynamic",
        "dynamicType",
        "else",
        "enum",
        "extension",
        "fallthrough",
        "fileprivate",
        "final",
        "for",
        "func",
        "get",
        "guard",
        "if",
        "import",
        "in",
        "infix",
        "init",
        "inout",
        "internal",
        "is",
        "lazy",
        "left",
        "let",
        "mutating",
        "nil",
        "none",
        "nonmutating",
        "operator",
        "optional",
        "override",
        "postfix",
        "precedence",
        "prefix",
        "private",
        "protocol",
        "Protocol",
        "public",
        "repeat",
        "required",
        "return",
        "right",
        "self",
        "Self",
        "set",
        "static",
        "struct",
        "subscript",
        "super",
        "switch",
        "throw",
        "throws",
        "try",
        "try!",
        "Type",
        "typealias",
        "unowned",
        "var",
        "weak",
        "where",
        "while",
        "willSet",
        "FALSE",
        "TRUE"
    ],
    symbols: /[=(){}\[\].,:;@#\_&\-<>`?!+*\\\/]/,
    operatorstart: /[\/=\-+!*%<>&|^~?\u00A1-\u00A7\u00A9\u00AB\u00AC\u00AE\u00B0-\u00B1\u00B6\u00BB\u00BF\u00D7\u00F7\u2016-\u2017\u2020-\u2027\u2030-\u203E\u2041-\u2053\u2055-\u205E\u2190-\u23FF\u2500-\u2775\u2794-\u2BFF\u2E00-\u2E7F\u3001-\u3003\u3008-\u3030]/,
    operatorend: /[\u0300-\u036F\u1DC0-\u1DFF\u20D0-\u20FF\uFE00-\uFE0F\uFE20-\uFE2F\uE0100-\uE01EF]/,
    operators: /(@operatorstart)((@operatorstart)|(@operatorend))*/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            {
                include: "@attribute"
            },
            {
                include: "@literal"
            },
            {
                include: "@keyword"
            },
            {
                include: "@invokedmethod"
            },
            {
                include: "@symbol"
            }
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ],
            [
                /"""/,
                "string.quote",
                "@endDblDocString"
            ]
        ],
        endDblDocString: [
            [
                /[^"]+/,
                "string"
            ],
            [
                /\\"/,
                "string"
            ],
            [
                /"""/,
                "string.quote",
                "@popall"
            ],
            [
                /"/,
                "string"
            ]
        ],
        symbol: [
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /[.]/,
                "delimiter"
            ],
            [
                /@operators/,
                "operator"
            ],
            [
                /@symbols/,
                "operator"
            ]
        ],
        comment: [
            [
                /\/\/\/.*$/,
                "comment.doc"
            ],
            [
                /\/\*\*/,
                "comment.doc",
                "@commentdocbody"
            ],
            [
                /\/\/.*$/,
                "comment"
            ],
            [
                /\/\*/,
                "comment",
                "@commentbody"
            ]
        ],
        commentdocbody: [
            [
                /\/\*/,
                "comment",
                "@commentbody"
            ],
            [
                /\*\//,
                "comment.doc",
                "@pop"
            ],
            [
                /\:[a-zA-Z]+\:/,
                "comment.doc.param"
            ],
            [
                /./,
                "comment.doc"
            ]
        ],
        commentbody: [
            [
                /\/\*/,
                "comment",
                "@commentbody"
            ],
            [
                /\*\//,
                "comment",
                "@pop"
            ],
            [
                /./,
                "comment"
            ]
        ],
        attribute: [
            [
                /@@@identifier/,
                {
                    cases: {
                        "@attributes": "keyword.control",
                        "@default": ""
                    }
                }
            ]
        ],
        literal: [
            [
                /"/,
                {
                    token: "string.quote",
                    next: "@stringlit"
                }
            ],
            [
                /0[b]([01]_?)+/,
                "number.binary"
            ],
            [
                /0[o]([0-7]_?)+/,
                "number.octal"
            ],
            [
                /0[x]([0-9a-fA-F]_?)+([pP][\-+](\d_?)+)?/,
                "number.hex"
            ],
            [
                /(\d_?)*\.(\d_?)+([eE][\-+]?(\d_?)+)?/,
                "number.float"
            ],
            [
                /(\d_?)+/,
                "number"
            ]
        ],
        stringlit: [
            [
                /\\\(/,
                {
                    token: "operator",
                    next: "@interpolatedexpression"
                }
            ],
            [
                /@escapes/,
                "string"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /"/,
                {
                    token: "string.quote",
                    next: "@pop"
                }
            ],
            [
                /./,
                "string"
            ]
        ],
        interpolatedexpression: [
            [
                /\(/,
                {
                    token: "operator",
                    next: "@interpolatedexpression"
                }
            ],
            [
                /\)/,
                {
                    token: "operator",
                    next: "@pop"
                }
            ],
            {
                include: "@literal"
            },
            {
                include: "@keyword"
            },
            {
                include: "@symbol"
            }
        ],
        keyword: [
            [
                /`/,
                {
                    token: "operator",
                    next: "@escapedkeyword"
                }
            ],
            [
                /@identifier/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "[A-Z][a-zA-Z0-9$]*": "type.identifier",
                        "@default": "identifier"
                    }
                }
            ]
        ],
        escapedkeyword: [
            [
                /`/,
                {
                    token: "operator",
                    next: "@pop"
                }
            ],
            [
                /./,
                "identifier"
            ]
        ],
        invokedmethod: [
            [
                /([.])(@identifier)/,
                {
                    cases: {
                        $2: [
                            "delimeter",
                            "type.identifier"
                        ],
                        "@default": ""
                    }
                }
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=swift.8370d569.js.map
