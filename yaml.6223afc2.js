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
})({"gEbHE":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/yaml/yaml.ts
var conf = {
    comments: {
        lineComment: "#"
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
    ],
    folding: {
        offSide: true
    }
};
var language = {
    tokenPostfix: ".yaml",
    brackets: [
        {
            token: "delimiter.bracket",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        }
    ],
    keywords: [
        "true",
        "True",
        "TRUE",
        "false",
        "False",
        "FALSE",
        "null",
        "Null",
        "Null",
        "~"
    ],
    numberInteger: /(?:0|[+-]?[0-9]+)/,
    numberFloat: /(?:0|[+-]?[0-9]+)(?:\.[0-9]+)?(?:e[-+][1-9][0-9]*)?/,
    numberOctal: /0o[0-7]+/,
    numberHex: /0x[0-9a-fA-F]+/,
    numberInfinity: /[+-]?\.(?:inf|Inf|INF)/,
    numberNaN: /\.(?:nan|Nan|NAN)/,
    numberDate: /\d{4}-\d\d-\d\d([Tt ]\d\d:\d\d:\d\d(\.\d+)?(( ?[+-]\d\d?(:\d\d)?)|Z)?)?/,
    escapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            [
                /%[^ ]+.*$/,
                "meta.directive"
            ],
            [
                /---/,
                "operators.directivesEnd"
            ],
            [
                /\.{3}/,
                "operators.documentEnd"
            ],
            [
                /[-?:](?= )/,
                "operators"
            ],
            {
                include: "@anchor"
            },
            {
                include: "@tagHandle"
            },
            {
                include: "@flowCollections"
            },
            {
                include: "@blockStyle"
            },
            [
                /@numberInteger(?![ \t]*\S+)/,
                "number"
            ],
            [
                /@numberFloat(?![ \t]*\S+)/,
                "number.float"
            ],
            [
                /@numberOctal(?![ \t]*\S+)/,
                "number.octal"
            ],
            [
                /@numberHex(?![ \t]*\S+)/,
                "number.hex"
            ],
            [
                /@numberInfinity(?![ \t]*\S+)/,
                "number.infinity"
            ],
            [
                /@numberNaN(?![ \t]*\S+)/,
                "number.nan"
            ],
            [
                /@numberDate(?![ \t]*\S+)/,
                "number.date"
            ],
            [
                /(".*?"|'.*?'|.*?)([ \t]*)(:)( |$)/,
                [
                    "type",
                    "white",
                    "operators",
                    "white"
                ]
            ],
            {
                include: "@flowScalars"
            },
            [
                /[^#]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "string"
                    }
                }
            ]
        ],
        object: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            [
                /\}/,
                "@brackets",
                "@pop"
            ],
            [
                /,/,
                "delimiter.comma"
            ],
            [
                /:(?= )/,
                "operators"
            ],
            [
                /(?:".*?"|'.*?'|[^,\{\[]+?)(?=: )/,
                "type"
            ],
            {
                include: "@flowCollections"
            },
            {
                include: "@flowScalars"
            },
            {
                include: "@tagHandle"
            },
            {
                include: "@anchor"
            },
            {
                include: "@flowNumber"
            },
            [
                /[^\},]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "string"
                    }
                }
            ]
        ],
        array: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            [
                /\]/,
                "@brackets",
                "@pop"
            ],
            [
                /,/,
                "delimiter.comma"
            ],
            {
                include: "@flowCollections"
            },
            {
                include: "@flowScalars"
            },
            {
                include: "@tagHandle"
            },
            {
                include: "@anchor"
            },
            {
                include: "@flowNumber"
            },
            [
                /[^\],]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@default": "string"
                    }
                }
            ]
        ],
        multiString: [
            [
                /^( +).+$/,
                "string",
                "@multiStringContinued.$1"
            ]
        ],
        multiStringContinued: [
            [
                /^( *).+$/,
                {
                    cases: {
                        "$1==$S2": "string",
                        "@default": {
                            token: "@rematch",
                            next: "@popall"
                        }
                    }
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ]
        ],
        comment: [
            [
                /#.*$/,
                "comment"
            ]
        ],
        flowCollections: [
            [
                /\[/,
                "@brackets",
                "@array"
            ],
            [
                /\{/,
                "@brackets",
                "@object"
            ]
        ],
        flowScalars: [
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /'([^'\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /'[^']*'/,
                "string"
            ],
            [
                /"/,
                "string",
                "@doubleQuotedString"
            ]
        ],
        doubleQuotedString: [
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
            ]
        ],
        blockStyle: [
            [
                /[>|][0-9]*[+-]?$/,
                "operators",
                "@multiString"
            ]
        ],
        flowNumber: [
            [
                /@numberInteger(?=[ \t]*[,\]\}])/,
                "number"
            ],
            [
                /@numberFloat(?=[ \t]*[,\]\}])/,
                "number.float"
            ],
            [
                /@numberOctal(?=[ \t]*[,\]\}])/,
                "number.octal"
            ],
            [
                /@numberHex(?=[ \t]*[,\]\}])/,
                "number.hex"
            ],
            [
                /@numberInfinity(?=[ \t]*[,\]\}])/,
                "number.infinity"
            ],
            [
                /@numberNaN(?=[ \t]*[,\]\}])/,
                "number.nan"
            ],
            [
                /@numberDate(?=[ \t]*[,\]\}])/,
                "number.date"
            ]
        ],
        tagHandle: [
            [
                /\![^ ]*/,
                "tag"
            ]
        ],
        anchor: [
            [
                /[&*][^ ]+/,
                "namespace"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=yaml.6223afc2.js.map
