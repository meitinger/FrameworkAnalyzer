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
})({"g7pMI":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/markdown/markdown.ts
var conf = {
    comments: {
        blockComment: [
            "<!--",
            "-->"
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
            open: "<",
            close: ">",
            notIn: [
                "string"
            ]
        }
    ],
    surroundingPairs: [
        {
            open: "(",
            close: ")"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "`",
            close: "`"
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#?region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#?endregion\\b.*-->")
        }
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: ".md",
    control: /[\\`*_\[\]{}()#+\-\.!]/,
    noncontrol: /[^\\`*_\[\]{}()#+\-\.!]/,
    escapes: /\\(?:@control)/,
    jsescapes: /\\(?:[btnfr\\"']|[0-7][0-7]?|[0-3][0-7]{2})/,
    empty: [
        "area",
        "base",
        "basefont",
        "br",
        "col",
        "frame",
        "hr",
        "img",
        "input",
        "isindex",
        "link",
        "meta",
        "param"
    ],
    tokenizer: {
        root: [
            [
                /^\s*\|/,
                "@rematch",
                "@table_header"
            ],
            [
                /^(\s{0,3})(#+)((?:[^\\#]|@escapes)+)((?:#+)?)/,
                [
                    "white",
                    "keyword",
                    "keyword",
                    "keyword"
                ]
            ],
            [
                /^\s*(=+|\-+)\s*$/,
                "keyword"
            ],
            [
                /^\s*((\*[ ]?)+)\s*$/,
                "meta.separator"
            ],
            [
                /^\s*>+/,
                "comment"
            ],
            [
                /^\s*([\*\-+:]|\d+\.)\s/,
                "keyword"
            ],
            [
                /^(\t|[ ]{4})[^ ].*$/,
                "string"
            ],
            [
                /^\s*~~~\s*((?:\w|[\/\-#])+)?\s*$/,
                {
                    token: "string",
                    next: "@codeblock"
                }
            ],
            [
                /^\s*```\s*((?:\w|[\/\-#])+).*$/,
                {
                    token: "string",
                    next: "@codeblockgh",
                    nextEmbedded: "$1"
                }
            ],
            [
                /^\s*```\s*$/,
                {
                    token: "string",
                    next: "@codeblock"
                }
            ],
            {
                include: "@linecontent"
            }
        ],
        table_header: [
            {
                include: "@table_common"
            },
            [
                /[^\|]+/,
                "keyword.table.header"
            ]
        ],
        table_body: [
            {
                include: "@table_common"
            },
            {
                include: "@linecontent"
            }
        ],
        table_common: [
            [
                /\s*[\-:]+\s*/,
                {
                    token: "keyword",
                    switchTo: "table_body"
                }
            ],
            [
                /^\s*\|/,
                "keyword.table.left"
            ],
            [
                /^\s*[^\|]/,
                "@rematch",
                "@pop"
            ],
            [
                /^\s*$/,
                "@rematch",
                "@pop"
            ],
            [
                /\|/,
                {
                    cases: {
                        "@eos": "keyword.table.right",
                        "@default": "keyword.table.middle"
                    }
                }
            ]
        ],
        codeblock: [
            [
                /^\s*~~~\s*$/,
                {
                    token: "string",
                    next: "@pop"
                }
            ],
            [
                /^\s*```\s*$/,
                {
                    token: "string",
                    next: "@pop"
                }
            ],
            [
                /.*$/,
                "variable.source"
            ]
        ],
        codeblockgh: [
            [
                /```\s*$/,
                {
                    token: "string",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /[^`]+/,
                "variable.source"
            ]
        ],
        linecontent: [
            [
                /&\w+;/,
                "string.escape"
            ],
            [
                /@escapes/,
                "escape"
            ],
            [
                /\b__([^\\_]|@escapes|_(?!_))+__\b/,
                "strong"
            ],
            [
                /\*\*([^\\*]|@escapes|\*(?!\*))+\*\*/,
                "strong"
            ],
            [
                /\b_[^_]+_\b/,
                "emphasis"
            ],
            [
                /\*([^\\*]|@escapes)+\*/,
                "emphasis"
            ],
            [
                /`([^\\`]|@escapes)+`/,
                "variable"
            ],
            [
                /\{+[^}]+\}+/,
                "string.target"
            ],
            [
                /(!?\[)((?:[^\]\\]|@escapes)*)(\]\([^\)]+\))/,
                [
                    "string.link",
                    "",
                    "string.link"
                ]
            ],
            [
                /(!?\[)((?:[^\]\\]|@escapes)*)(\])/,
                "string.link"
            ],
            {
                include: "html"
            }
        ],
        html: [
            [
                /<(\w+)\/>/,
                "tag"
            ],
            [
                /<(\w+)/,
                {
                    cases: {
                        "@empty": {
                            token: "tag",
                            next: "@tag.$1"
                        },
                        "@default": {
                            token: "tag",
                            next: "@tag.$1"
                        }
                    }
                }
            ],
            [
                /<\/(\w+)\s*>/,
                {
                    token: "tag"
                }
            ],
            [
                /<!--/,
                "comment",
                "@comment"
            ]
        ],
        comment: [
            [
                /[^<\-]+/,
                "comment.content"
            ],
            [
                /-->/,
                "comment",
                "@pop"
            ],
            [
                /<!--/,
                "comment.content.invalid"
            ],
            [
                /[<\-]/,
                "comment.content"
            ]
        ],
        tag: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /(type)(\s*=\s*)(")([^"]+)(")/,
                [
                    "attribute.name.html",
                    "delimiter.html",
                    "string.html",
                    {
                        token: "string.html",
                        switchTo: "@tag.$S2.$4"
                    },
                    "string.html"
                ]
            ],
            [
                /(type)(\s*=\s*)(')([^']+)(')/,
                [
                    "attribute.name.html",
                    "delimiter.html",
                    "string.html",
                    {
                        token: "string.html",
                        switchTo: "@tag.$S2.$4"
                    },
                    "string.html"
                ]
            ],
            [
                /(\w+)(\s*=\s*)("[^"]*"|'[^']*')/,
                [
                    "attribute.name.html",
                    "delimiter.html",
                    "string.html"
                ]
            ],
            [
                /\w+/,
                "attribute.name.html"
            ],
            [
                /\/>/,
                "tag",
                "@pop"
            ],
            [
                />/,
                {
                    cases: {
                        "$S2==style": {
                            token: "tag",
                            switchTo: "embeddedStyle",
                            nextEmbedded: "text/css"
                        },
                        "$S2==script": {
                            cases: {
                                $S3: {
                                    token: "tag",
                                    switchTo: "embeddedScript",
                                    nextEmbedded: "$S3"
                                },
                                "@default": {
                                    token: "tag",
                                    switchTo: "embeddedScript",
                                    nextEmbedded: "text/javascript"
                                }
                            }
                        },
                        "@default": {
                            token: "tag",
                            next: "@pop"
                        }
                    }
                }
            ]
        ],
        embeddedStyle: [
            [
                /[^<]+/,
                ""
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /</,
                ""
            ]
        ],
        embeddedScript: [
            [
                /[^<]+/,
                ""
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /</,
                ""
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=markdown.08b42974.js.map
