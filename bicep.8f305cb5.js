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
})({"6JDxU":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/bicep/bicep.ts
var bounded = function(text) {
    return "\\b".concat(text, "\\b");
};
var identifierStart = "[_a-zA-Z]";
var identifierContinue = "[_a-zA-Z0-9]";
var identifier = bounded("".concat(identifierStart).concat(identifierContinue, "*"));
var keywords = [
    "targetScope",
    "resource",
    "module",
    "param",
    "var",
    "output",
    "for",
    "in",
    "if",
    "existing"
];
var namedLiterals = [
    "true",
    "false",
    "null"
];
var nonCommentWs = "[ \\t\\r\\n]";
var numericLiteral = "[0-9]+";
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
            open: "'",
            close: "'"
        },
        {
            open: "'''",
            close: "'''"
        }
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
            open: "'''",
            close: "'''",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    autoCloseBefore: ":.,=}])' \n	",
    indentationRules: {
        increaseIndentPattern: new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),
        decreaseIndentPattern: new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: ".bicep",
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
        }
    ],
    symbols: /[=><!~?:&|+\-*/^%]+/,
    keywords: keywords,
    namedLiterals: namedLiterals,
    escapes: "\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\${)",
    tokenizer: {
        root: [
            {
                include: "@expression"
            },
            {
                include: "@whitespace"
            }
        ],
        stringVerbatim: [
            {
                regex: "(|'|'')[^']",
                action: {
                    token: "string"
                }
            },
            {
                regex: "'''",
                action: {
                    token: "string.quote",
                    next: "@pop"
                }
            }
        ],
        stringLiteral: [
            {
                regex: "\\${",
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: "[^\\\\'$]+",
                action: {
                    token: "string"
                }
            },
            {
                regex: "@escapes",
                action: {
                    token: "string.escape"
                }
            },
            {
                regex: "\\\\.",
                action: {
                    token: "string.escape.invalid"
                }
            },
            {
                regex: "'",
                action: {
                    token: "string",
                    next: "@pop"
                }
            }
        ],
        bracketCounting: [
            {
                regex: "{",
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: "}",
                action: {
                    token: "delimiter.bracket",
                    next: "@pop"
                }
            },
            {
                include: "expression"
            }
        ],
        comment: [
            {
                regex: "[^\\*]+",
                action: {
                    token: "comment"
                }
            },
            {
                regex: "\\*\\/",
                action: {
                    token: "comment",
                    next: "@pop"
                }
            },
            {
                regex: "[\\/*]",
                action: {
                    token: "comment"
                }
            }
        ],
        whitespace: [
            {
                regex: nonCommentWs
            },
            {
                regex: "\\/\\*",
                action: {
                    token: "comment",
                    next: "@comment"
                }
            },
            {
                regex: "\\/\\/.*$",
                action: {
                    token: "comment"
                }
            }
        ],
        expression: [
            {
                regex: "'''",
                action: {
                    token: "string.quote",
                    next: "@stringVerbatim"
                }
            },
            {
                regex: "'",
                action: {
                    token: "string.quote",
                    next: "@stringLiteral"
                }
            },
            {
                regex: numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: identifier,
                action: {
                    cases: {
                        "@keywords": {
                            token: "keyword"
                        },
                        "@namedLiterals": {
                            token: "keyword"
                        },
                        "@default": {
                            token: "identifier"
                        }
                    }
                }
            }
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=bicep.8f305cb5.js.map
