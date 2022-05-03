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
})({"4ivHV":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/powershell/powershell.ts
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#%\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
    comments: {
        lineComment: "#",
        blockComment: [
            "<#",
            "#>"
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
            close: '"',
            notIn: [
                "string"
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
            start: new RegExp("^\\s*#region\\b"),
            end: new RegExp("^\\s*#endregion\\b")
        }
    }
};
var language = {
    defaultToken: "",
    ignoreCase: true,
    tokenPostfix: ".ps1",
    brackets: [
        {
            token: "delimiter.curly",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        }
    ],
    keywords: [
        "begin",
        "break",
        "catch",
        "class",
        "continue",
        "data",
        "define",
        "do",
        "dynamicparam",
        "else",
        "elseif",
        "end",
        "exit",
        "filter",
        "finally",
        "for",
        "foreach",
        "from",
        "function",
        "if",
        "in",
        "param",
        "process",
        "return",
        "switch",
        "throw",
        "trap",
        "try",
        "until",
        "using",
        "var",
        "while",
        "workflow",
        "parallel",
        "sequence",
        "inlinescript",
        "configuration"
    ],
    helpKeywords: /SYNOPSIS|DESCRIPTION|PARAMETER|EXAMPLE|INPUTS|OUTPUTS|NOTES|LINK|COMPONENT|ROLE|FUNCTIONALITY|FORWARDHELPTARGETNAME|FORWARDHELPCATEGORY|REMOTEHELPRUNSPACE|EXTERNALHELP/,
    symbols: /[=><!~?&%|+\-*\/\^;\.,]+/,
    escapes: /`(?:[abfnrtv\\"'$]|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [
                /[a-zA-Z_][\w-]*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": ""
                    }
                }
            ],
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /^:\w*/,
                "metatag"
            ],
            [
                /\$(\{((global|local|private|script|using):)?[\w]+\}|((global|local|private|script|using):)?[\w]+)/,
                "variable"
            ],
            [
                /<#/,
                "comment",
                "@comment"
            ],
            [
                /#.*$/,
                "comment"
            ],
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /@symbols/,
                "delimiter"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,
                "number.hex"
            ],
            [
                /\d+?/,
                "number"
            ],
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /\@"/,
                "string",
                '@herestring."'
            ],
            [
                /\@'/,
                "string",
                "@herestring.'"
            ],
            [
                /"/,
                {
                    cases: {
                        "@eos": "string",
                        "@default": {
                            token: "string",
                            next: '@string."'
                        }
                    }
                }
            ],
            [
                /'/,
                {
                    cases: {
                        "@eos": "string",
                        "@default": {
                            token: "string",
                            next: "@string.'"
                        }
                    }
                }
            ]
        ],
        string: [
            [
                /[^"'\$`]+/,
                {
                    cases: {
                        "@eos": {
                            token: "string",
                            next: "@popall"
                        },
                        "@default": "string"
                    }
                }
            ],
            [
                /@escapes/,
                {
                    cases: {
                        "@eos": {
                            token: "string.escape",
                            next: "@popall"
                        },
                        "@default": "string.escape"
                    }
                }
            ],
            [
                /`./,
                {
                    cases: {
                        "@eos": {
                            token: "string.escape.invalid",
                            next: "@popall"
                        },
                        "@default": "string.escape.invalid"
                    }
                }
            ],
            [
                /\$[\w]+$/,
                {
                    cases: {
                        '$S2=="': {
                            token: "variable",
                            next: "@popall"
                        },
                        "@default": {
                            token: "string",
                            next: "@popall"
                        }
                    }
                }
            ],
            [
                /\$[\w]+/,
                {
                    cases: {
                        '$S2=="': "variable",
                        "@default": "string"
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        "$#==$S2": {
                            token: "string",
                            next: "@pop"
                        },
                        "@default": {
                            cases: {
                                "@eos": {
                                    token: "string",
                                    next: "@popall"
                                },
                                "@default": "string"
                            }
                        }
                    }
                }
            ]
        ],
        herestring: [
            [
                /^\s*(["'])@/,
                {
                    cases: {
                        "$1==$S2": {
                            token: "string",
                            next: "@pop"
                        },
                        "@default": "string"
                    }
                }
            ],
            [
                /[^\$`]+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /`./,
                "string.escape.invalid"
            ],
            [
                /\$[\w]+/,
                {
                    cases: {
                        '$S2=="': "variable",
                        "@default": "string"
                    }
                }
            ]
        ],
        comment: [
            [
                /[^#\.]+/,
                "comment"
            ],
            [
                /#>/,
                "comment",
                "@pop"
            ],
            [
                /(\.)(@helpKeywords)(?!\w)/,
                {
                    token: "comment.keyword.$2"
                }
            ],
            [
                /[\.#]/,
                "comment"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=powershell.13551b71.js.map
