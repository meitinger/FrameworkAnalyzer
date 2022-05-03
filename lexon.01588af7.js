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
})({"9Asxj":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/lexon/lexon.ts
var conf = {
    comments: {
        lineComment: "COMMENT"
    },
    brackets: [
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
            open: ":",
            close: "."
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
            open: "`",
            close: "`"
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
            open: ":",
            close: "."
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*(::\\s*|COMMENT\\s+)#region"),
            end: new RegExp("^\\s*(::\\s*|COMMENT\\s+)#endregion")
        }
    }
};
var language = {
    tokenPostfix: ".lexon",
    ignoreCase: true,
    keywords: [
        "lexon",
        "lex",
        "clause",
        "terms",
        "contracts",
        "may",
        "pay",
        "pays",
        "appoints",
        "into",
        "to"
    ],
    typeKeywords: [
        "amount",
        "person",
        "key",
        "time",
        "date",
        "asset",
        "text"
    ],
    operators: [
        "less",
        "greater",
        "equal",
        "le",
        "gt",
        "or",
        "and",
        "add",
        "added",
        "subtract",
        "subtracted",
        "multiply",
        "multiplied",
        "times",
        "divide",
        "divided",
        "is",
        "be",
        "certified"
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    tokenizer: {
        root: [
            [
                /^(\s*)(comment:?(?:\s.*|))$/,
                [
                    "",
                    "comment"
                ]
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    bracket: "@open",
                    next: "@quoted_identifier"
                }
            ],
            [
                "LEX$",
                {
                    token: "keyword",
                    bracket: "@open",
                    next: "@identifier_until_period"
                }
            ],
            [
                "LEXON",
                {
                    token: "keyword",
                    bracket: "@open",
                    next: "@semver"
                }
            ],
            [
                ":",
                {
                    token: "delimiter",
                    bracket: "@open",
                    next: "@identifier_until_period"
                }
            ],
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        "@operators": "operator",
                        "@typeKeywords": "keyword.type",
                        "@keywords": "keyword",
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
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /@symbols/,
                "delimiter"
            ],
            [
                /\d*\.\d*\.\d*/,
                "number.semver"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F]+/,
                "number.hex"
            ],
            [
                /\d+/,
                "number"
            ],
            [
                /[;,.]/,
                "delimiter"
            ]
        ],
        quoted_identifier: [
            [
                /[^\\"]+/,
                "identifier"
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        space_identifier_until_period: [
            [
                ":",
                "delimiter"
            ],
            [
                " ",
                {
                    token: "white",
                    next: "@identifier_rest"
                }
            ]
        ],
        identifier_until_period: [
            {
                include: "@whitespace"
            },
            [
                ":",
                {
                    token: "delimiter",
                    next: "@identifier_rest"
                }
            ],
            [
                /[^\\.]+/,
                "identifier"
            ],
            [
                /\./,
                {
                    token: "delimiter",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        identifier_rest: [
            [
                /[^\\.]+/,
                "identifier"
            ],
            [
                /\./,
                {
                    token: "delimiter",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        semver: [
            {
                include: "@whitespace"
            },
            [
                ":",
                "delimiter"
            ],
            [
                /\d*\.\d*\.\d*/,
                {
                    token: "number.semver",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=lexon.01588af7.js.map
