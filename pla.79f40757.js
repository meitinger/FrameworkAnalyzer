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
})({"548ov":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/pla/pla.ts
var conf = {
    comments: {
        lineComment: "#"
    },
    brackets: [
        [
            "[",
            "]"
        ],
        [
            "<",
            ">"
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
            open: "<",
            close: ">"
        },
        {
            open: "(",
            close: ")"
        }
    ],
    surroundingPairs: [
        {
            open: "[",
            close: "]"
        },
        {
            open: "<",
            close: ">"
        },
        {
            open: "(",
            close: ")"
        }
    ]
};
var language = {
    defaultToken: "",
    tokenPostfix: ".pla",
    brackets: [
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "<",
            close: ">",
            token: "delimiter.angle"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }
    ],
    keywords: [
        ".i",
        ".o",
        ".mv",
        ".ilb",
        ".ob",
        ".label",
        ".type",
        ".phase",
        ".pair",
        ".symbolic",
        ".symbolic-output",
        ".kiss",
        ".p",
        ".e",
        ".end"
    ],
    comment: /#.*$/,
    identifier: /[a-zA-Z]+[a-zA-Z0-9_\-]*/,
    plaContent: /[01\-~\|]+/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            [
                /@comment/,
                "comment"
            ],
            [
                /\.([a-zA-Z_\-]+)/,
                {
                    cases: {
                        "@eos": {
                            token: "keyword.$1"
                        },
                        "@keywords": {
                            cases: {
                                ".type": {
                                    token: "keyword.$1",
                                    next: "@type"
                                },
                                "@default": {
                                    token: "keyword.$1",
                                    next: "@keywordArg"
                                }
                            }
                        },
                        "@default": {
                            token: "keyword.$1"
                        }
                    }
                }
            ],
            [
                /@identifier/,
                "identifier"
            ],
            [
                /@plaContent/,
                "string"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ]
        ],
        type: [
            {
                include: "@whitespace"
            },
            [
                /\w+/,
                {
                    token: "type",
                    next: "@pop"
                }
            ]
        ],
        keywordArg: [
            [
                /[ \t\r\n]+/,
                {
                    cases: {
                        "@eos": {
                            token: "",
                            next: "@pop"
                        },
                        "@default": ""
                    }
                }
            ],
            [
                /@comment/,
                "comment",
                "@pop"
            ],
            [
                /[<>()\[\]]/,
                {
                    cases: {
                        "@eos": {
                            token: "@brackets",
                            next: "@pop"
                        },
                        "@default": "@brackets"
                    }
                }
            ],
            [
                /\-?\d+/,
                {
                    cases: {
                        "@eos": {
                            token: "number",
                            next: "@pop"
                        },
                        "@default": "number"
                    }
                }
            ],
            [
                /@identifier/,
                {
                    cases: {
                        "@eos": {
                            token: "identifier",
                            next: "@pop"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[;=]/,
                {
                    cases: {
                        "@eos": {
                            token: "delimiter",
                            next: "@pop"
                        },
                        "@default": "delimiter"
                    }
                }
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=pla.79f40757.js.map
