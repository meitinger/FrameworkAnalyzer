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
})({"fAym3":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/scala/scala.ts
var conf = {
    wordPattern: /(unary_[@~!#%^&*()\-=+\\|:<>\/?]+)|([a-zA-Z_$][\w$]*?_=)|(`[^`]+`)|([a-zA-Z_$][\w$]*)/g,
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
            start: new RegExp("^\\s*//\\s*(?:(?:#?region\\b)|(?:<editor-fold\\b))"),
            end: new RegExp("^\\s*//\\s*(?:(?:#?endregion\\b)|(?:</editor-fold>))")
        }
    }
};
var language = {
    tokenPostfix: ".scala",
    keywords: [
        "asInstanceOf",
        "catch",
        "class",
        "classOf",
        "def",
        "do",
        "else",
        "extends",
        "finally",
        "for",
        "foreach",
        "forSome",
        "if",
        "import",
        "isInstanceOf",
        "macro",
        "match",
        "new",
        "object",
        "package",
        "return",
        "throw",
        "trait",
        "try",
        "type",
        "until",
        "val",
        "var",
        "while",
        "with",
        "yield",
        "given",
        "enum",
        "then"
    ],
    softKeywords: [
        "as",
        "export",
        "extension",
        "end",
        "derives",
        "on"
    ],
    constants: [
        "true",
        "false",
        "null",
        "this",
        "super"
    ],
    modifiers: [
        "abstract",
        "final",
        "implicit",
        "lazy",
        "override",
        "private",
        "protected",
        "sealed"
    ],
    softModifiers: [
        "inline",
        "opaque",
        "open",
        "transparent",
        "using"
    ],
    name: /(?:[a-z_$][\w$]*|`[^`]+`)/,
    type: /(?:[A-Z][\w$]*)/,
    symbols: /[=><!~?:&|+\-*\/^\\%@#]+/,
    digits: /\d+(_+\d+)*/,
    hexdigits: /[[0-9a-fA-F]+(_+[0-9a-fA-F]+)*/,
    escapes: /\\(?:[btnfr\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    fstring_conv: /[bBhHsScCdoxXeEfgGaAt]|[Tn](?:[HIklMSLNpzZsQ]|[BbhAaCYyjmde]|[RTrDFC])/,
    tokenizer: {
        root: [
            [
                /\braw"""/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@rawstringt"
                }
            ],
            [
                /\braw"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@rawstring"
                }
            ],
            [
                /\bs"""/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@sstringt"
                }
            ],
            [
                /\bs"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@sstring"
                }
            ],
            [
                /\bf""""/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@fstringt"
                }
            ],
            [
                /\bf"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@fstring"
                }
            ],
            [
                /"""/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@stringt"
                }
            ],
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@string"
                }
            ],
            [
                /(@digits)[eE]([\-+]?(@digits))?[fFdD]?/,
                "number.float",
                "@allowMethod"
            ],
            [
                /(@digits)\.(@digits)([eE][\-+]?(@digits))?[fFdD]?/,
                "number.float",
                "@allowMethod"
            ],
            [
                /0[xX](@hexdigits)[Ll]?/,
                "number.hex",
                "@allowMethod"
            ],
            [
                /(@digits)[fFdD]/,
                "number.float",
                "@allowMethod"
            ],
            [
                /(@digits)[lL]?/,
                "number",
                "@allowMethod"
            ],
            [
                /\b_\*/,
                "key"
            ],
            [
                /\b(_)\b/,
                "keyword",
                "@allowMethod"
            ],
            [
                /\bimport\b/,
                "keyword",
                "@import"
            ],
            [
                /\b(case)([ \t]+)(class)\b/,
                [
                    "keyword.modifier",
                    "white",
                    "keyword"
                ]
            ],
            [
                /\bcase\b/,
                "keyword",
                "@case"
            ],
            [
                /\bva[lr]\b/,
                "keyword",
                "@vardef"
            ],
            [
                /\b(def)([ \t]+)((?:unary_)?@symbols|@name(?:_=)|@name)/,
                [
                    "keyword",
                    "white",
                    "identifier"
                ]
            ],
            [
                /@name(?=[ \t]*:(?!:))/,
                "variable"
            ],
            [
                /(\.)(@name|@symbols)/,
                [
                    "operator",
                    {
                        token: "@rematch",
                        next: "@allowMethod"
                    }
                ]
            ],
            [
                /([{(])(\s*)(@name(?=\s*=>))/,
                [
                    "@brackets",
                    "white",
                    "variable"
                ]
            ],
            [
                /@name/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@softKeywords": "keyword",
                        "@modifiers": "keyword.modifier",
                        "@softModifiers": "keyword.modifier",
                        "@constants": {
                            token: "constant",
                            next: "@allowMethod"
                        },
                        "@default": {
                            token: "identifier",
                            next: "@allowMethod"
                        }
                    }
                }
            ],
            [
                /@type/,
                "type",
                "@allowMethod"
            ],
            {
                include: "@whitespace"
            },
            [
                /@[a-zA-Z_$][\w$]*(?:\.[a-zA-Z_$][\w$]*)*/,
                "annotation"
            ],
            [
                /[{(]/,
                "@brackets"
            ],
            [
                /[})]/,
                "@brackets",
                "@allowMethod"
            ],
            [
                /\[/,
                "operator.square"
            ],
            [
                /](?!\s*(?:va[rl]|def|type)\b)/,
                "operator.square",
                "@allowMethod"
            ],
            [
                /]/,
                "operator.square"
            ],
            [
                /([=-]>|<-|>:|<:|:>|<%)(?=[\s\w()[\]{},\."'`])/,
                "keyword"
            ],
            [
                /@symbols/,
                "operator"
            ],
            [
                /[;,\.]/,
                "delimiter"
            ],
            [
                /'[a-zA-Z$][\w$]*(?!')/,
                "attribute.name"
            ],
            [
                /'[^\\']'/,
                "string",
                "@allowMethod"
            ],
            [
                /(')(@escapes)(')/,
                [
                    "string",
                    "string.escape",
                    {
                        token: "string",
                        next: "@allowMethod"
                    }
                ]
            ],
            [
                /'/,
                "string.invalid"
            ]
        ],
        import: [
            [
                /;/,
                "delimiter",
                "@pop"
            ],
            [
                /^|$/,
                "",
                "@pop"
            ],
            [
                /[ \t]+/,
                "white"
            ],
            [
                /[\n\r]+/,
                "white",
                "@pop"
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /@name|@type/,
                "type"
            ],
            [
                /[(){}]/,
                "@brackets"
            ],
            [
                /[[\]]/,
                "operator.square"
            ],
            [
                /[\.,]/,
                "delimiter"
            ]
        ],
        allowMethod: [
            [
                /^|$/,
                "",
                "@pop"
            ],
            [
                /[ \t]+/,
                "white"
            ],
            [
                /[\n\r]+/,
                "white",
                "@pop"
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /(?==>[\s\w([{])/,
                "keyword",
                "@pop"
            ],
            [
                /(@name|@symbols)(?=[ \t]*[[({"'`]|[ \t]+(?:[+-]?\.?\d|\w))/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword",
                            next: "@pop"
                        },
                        "->|<-|>:|<:|<%": {
                            token: "keyword",
                            next: "@pop"
                        },
                        "@default": {
                            token: "@rematch",
                            next: "@pop"
                        }
                    }
                }
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        comment: [
            [
                /[^\/*]+/,
                "comment"
            ],
            [
                /\/\*/,
                "comment",
                "@push"
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
        case: [
            [
                /\b_\*/,
                "key"
            ],
            [
                /\b(_|true|false|null|this|super)\b/,
                "keyword",
                "@allowMethod"
            ],
            [
                /\bif\b|=>/,
                "keyword",
                "@pop"
            ],
            [
                /`[^`]+`/,
                "identifier",
                "@allowMethod"
            ],
            [
                /@name/,
                "variable",
                "@allowMethod"
            ],
            [
                /:::?|\||@(?![a-z_$])/,
                "keyword"
            ],
            {
                include: "@root"
            }
        ],
        vardef: [
            [
                /\b_\*/,
                "key"
            ],
            [
                /\b(_|true|false|null|this|super)\b/,
                "keyword"
            ],
            [
                /@name/,
                "variable"
            ],
            [
                /:::?|\||@(?![a-z_$])/,
                "keyword"
            ],
            [
                /=|:(?!:)/,
                "operator",
                "@pop"
            ],
            [
                /$/,
                "white",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        string: [
            [
                /[^\\"\n\r]+/,
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
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ]
        ],
        stringt: [
            [
                /[^\\"\n\r]+/,
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
                /"(?=""")/,
                "string"
            ],
            [
                /"""/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ],
            [
                /"/,
                "string"
            ]
        ],
        fstring: [
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ],
            [
                /\$\$/,
                "string"
            ],
            [
                /(\$)([a-z_]\w*)/,
                [
                    "operator",
                    "identifier"
                ]
            ],
            [
                /\$\{/,
                "operator",
                "@interp"
            ],
            [
                /%%/,
                "string"
            ],
            [
                /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                [
                    "metatag",
                    "keyword.modifier",
                    "number",
                    "metatag"
                ]
            ],
            [
                /(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                [
                    "metatag",
                    "number",
                    "metatag"
                ]
            ],
            [
                /(%)([\-#+ 0,(])(@fstring_conv)/,
                [
                    "metatag",
                    "keyword.modifier",
                    "metatag"
                ]
            ],
            [
                /(%)(@fstring_conv)/,
                [
                    "metatag",
                    "metatag"
                ]
            ],
            [
                /./,
                "string"
            ]
        ],
        fstringt: [
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /"(?=""")/,
                "string"
            ],
            [
                /"""/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ],
            [
                /\$\$/,
                "string"
            ],
            [
                /(\$)([a-z_]\w*)/,
                [
                    "operator",
                    "identifier"
                ]
            ],
            [
                /\$\{/,
                "operator",
                "@interp"
            ],
            [
                /%%/,
                "string"
            ],
            [
                /(%)([\-#+ 0,(])(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                [
                    "metatag",
                    "keyword.modifier",
                    "number",
                    "metatag"
                ]
            ],
            [
                /(%)(\d+|\.\d+|\d+\.\d+)(@fstring_conv)/,
                [
                    "metatag",
                    "number",
                    "metatag"
                ]
            ],
            [
                /(%)([\-#+ 0,(])(@fstring_conv)/,
                [
                    "metatag",
                    "keyword.modifier",
                    "metatag"
                ]
            ],
            [
                /(%)(@fstring_conv)/,
                [
                    "metatag",
                    "metatag"
                ]
            ],
            [
                /./,
                "string"
            ]
        ],
        sstring: [
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ],
            [
                /\$\$/,
                "string"
            ],
            [
                /(\$)([a-z_]\w*)/,
                [
                    "operator",
                    "identifier"
                ]
            ],
            [
                /\$\{/,
                "operator",
                "@interp"
            ],
            [
                /./,
                "string"
            ]
        ],
        sstringt: [
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /"(?=""")/,
                "string"
            ],
            [
                /"""/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ],
            [
                /\$\$/,
                "string"
            ],
            [
                /(\$)([a-z_]\w*)/,
                [
                    "operator",
                    "identifier"
                ]
            ],
            [
                /\$\{/,
                "operator",
                "@interp"
            ],
            [
                /./,
                "string"
            ]
        ],
        interp: [
            [
                /{/,
                "operator",
                "@push"
            ],
            [
                /}/,
                "operator",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        rawstring: [
            [
                /[^"]/,
                "string"
            ],
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ]
        ],
        rawstringt: [
            [
                /[^"]/,
                "string"
            ],
            [
                /"(?=""")/,
                "string"
            ],
            [
                /"""/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    switchTo: "@allowMethod"
                }
            ],
            [
                /"/,
                "string"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=scala.6daf37ff.js.map
