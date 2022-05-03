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
})({"7eA8X":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/less/less.ts
var conf = {
    wordPattern: /(#?-?\d*\.\d\w*%?)|([@#!.:]?[\w-?]+%?)|[@#!.]/g,
    comments: {
        blockComment: [
            "/*",
            "*/"
        ],
        lineComment: "//"
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
            close: "}",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "(",
            close: ")",
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
        },
        {
            open: "'",
            close: "'",
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*\\/\\*\\s*#region\\b\\s*(.*?)\\s*\\*\\/"),
            end: new RegExp("^\\s*\\/\\*\\s*#endregion\\b.*\\*\\/")
        }
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: ".less",
    identifier: "-?-?([a-zA-Z]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",
    identifierPlus: "-?-?([a-zA-Z:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))([\\w\\-:.]|(\\\\(([0-9a-fA-F]{1,6}\\s?)|[^[0-9a-fA-F])))*",
    brackets: [
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.bracket"
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
    tokenizer: {
        root: [
            {
                include: "@nestedJSBegin"
            },
            [
                "[ \\t\\r\\n]+",
                ""
            ],
            {
                include: "@comments"
            },
            {
                include: "@keyword"
            },
            {
                include: "@strings"
            },
            {
                include: "@numbers"
            },
            [
                "[*_]?[a-zA-Z\\-\\s]+(?=:.*(;|(\\\\$)))",
                "attribute.name",
                "@attribute"
            ],
            [
                "url(\\-prefix)?\\(",
                {
                    token: "tag",
                    next: "@urldeclaration"
                }
            ],
            [
                "[{}()\\[\\]]",
                "@brackets"
            ],
            [
                "[,:;]",
                "delimiter"
            ],
            [
                "#@identifierPlus",
                "tag.id"
            ],
            [
                "&",
                "tag"
            ],
            [
                "\\.@identifierPlus(?=\\()",
                "tag.class",
                "@attribute"
            ],
            [
                "\\.@identifierPlus",
                "tag.class"
            ],
            [
                "@identifierPlus",
                "tag"
            ],
            {
                include: "@operators"
            },
            [
                "@(@identifier(?=[:,\\)]))",
                "variable",
                "@attribute"
            ],
            [
                "@(@identifier)",
                "variable"
            ],
            [
                "@",
                "key",
                "@atRules"
            ]
        ],
        nestedJSBegin: [
            [
                "``",
                "delimiter.backtick"
            ],
            [
                "`",
                {
                    token: "delimiter.backtick",
                    next: "@nestedJSEnd",
                    nextEmbedded: "text/javascript"
                }
            ]
        ],
        nestedJSEnd: [
            [
                "`",
                {
                    token: "delimiter.backtick",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        operators: [
            [
                "[<>=\\+\\-\\*\\/\\^\\|\\~]",
                "operator"
            ]
        ],
        keyword: [
            [
                "(@[\\s]*import|![\\s]*important|true|false|when|iscolor|isnumber|isstring|iskeyword|isurl|ispixel|ispercentage|isem|hue|saturation|lightness|alpha|lighten|darken|saturate|desaturate|fadein|fadeout|fade|spin|mix|round|ceil|floor|percentage)\\b",
                "keyword"
            ]
        ],
        urldeclaration: [
            {
                include: "@strings"
            },
            [
                "[^)\r\n]+",
                "string"
            ],
            [
                "\\)",
                {
                    token: "tag",
                    next: "@pop"
                }
            ]
        ],
        attribute: [
            {
                include: "@nestedJSBegin"
            },
            {
                include: "@comments"
            },
            {
                include: "@strings"
            },
            {
                include: "@numbers"
            },
            {
                include: "@keyword"
            },
            [
                "[a-zA-Z\\-]+(?=\\()",
                "attribute.value",
                "@attribute"
            ],
            [
                ">",
                "operator",
                "@pop"
            ],
            [
                "@identifier",
                "attribute.value"
            ],
            {
                include: "@operators"
            },
            [
                "@(@identifier)",
                "variable"
            ],
            [
                "[)\\}]",
                "@brackets",
                "@pop"
            ],
            [
                "[{}()\\[\\]>]",
                "@brackets"
            ],
            [
                "[;]",
                "delimiter",
                "@pop"
            ],
            [
                "[,=:]",
                "delimiter"
            ],
            [
                "\\s",
                ""
            ],
            [
                ".",
                "attribute.value"
            ]
        ],
        comments: [
            [
                "\\/\\*",
                "comment",
                "@comment"
            ],
            [
                "\\/\\/+.*",
                "comment"
            ]
        ],
        comment: [
            [
                "\\*\\/",
                "comment",
                "@pop"
            ],
            [
                ".",
                "comment"
            ]
        ],
        numbers: [
            [
                "(\\d*\\.)?\\d+([eE][\\-+]?\\d+)?",
                {
                    token: "attribute.value.number",
                    next: "@units"
                }
            ],
            [
                "#[0-9a-fA-F_]+(?!\\w)",
                "attribute.value.hex"
            ]
        ],
        units: [
            [
                "(em|ex|ch|rem|vmin|vmax|vw|vh|vm|cm|mm|in|px|pt|pc|deg|grad|rad|turn|s|ms|Hz|kHz|%)?",
                "attribute.value.unit",
                "@pop"
            ]
        ],
        strings: [
            [
                '~?"',
                {
                    token: "string.delimiter",
                    next: "@stringsEndDoubleQuote"
                }
            ],
            [
                "~?'",
                {
                    token: "string.delimiter",
                    next: "@stringsEndQuote"
                }
            ]
        ],
        stringsEndDoubleQuote: [
            [
                '\\\\"',
                "string"
            ],
            [
                '"',
                {
                    token: "string.delimiter",
                    next: "@popall"
                }
            ],
            [
                ".",
                "string"
            ]
        ],
        stringsEndQuote: [
            [
                "\\\\'",
                "string"
            ],
            [
                "'",
                {
                    token: "string.delimiter",
                    next: "@popall"
                }
            ],
            [
                ".",
                "string"
            ]
        ],
        atRules: [
            {
                include: "@comments"
            },
            {
                include: "@strings"
            },
            [
                "[()]",
                "delimiter"
            ],
            [
                "[\\{;]",
                "delimiter",
                "@pop"
            ],
            [
                ".",
                "key"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=less.0685c758.js.map
