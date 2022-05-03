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
})({"7mYHD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conf", function() {
    return conf;
});
parcelHelpers.export(exports, "language", function() {
    return language;
});
var _editorApiJs = require("../../editor/editor.api.js");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = function(target) {
    return __defProp(target, "__esModule", {
        value: true
    });
};
var __reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!__hasOwnProp.call(target, key) && key !== "default") __defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = __getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__markAsModule(monaco_editor_core_exports);
__reExport(monaco_editor_core_exports, _editorApiJs);
// src/basic-languages/razor/razor.ts
var EMPTY_ELEMENTS = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: [
            "<!--",
            "-->"
        ]
    },
    brackets: [
        [
            "<!--",
            "-->"
        ],
        [
            "<",
            ">"
        ],
        [
            "{",
            "}"
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: "<",
            close: ">"
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<(?!(?:".concat(EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp("<(?!(?:".concat(EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
            action: {
                indentAction: monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var language = {
    defaultToken: "",
    tokenPostfix: "",
    tokenizer: {
        root: [
            [
                /@@@@/
            ],
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.root"
                }
            ],
            [
                /<!DOCTYPE/,
                "metatag.html",
                "@doctype"
            ],
            [
                /<!--/,
                "comment.html",
                "@comment"
            ],
            [
                /(<)([\w\-]+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<)(script)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@script"
                    }
                ]
            ],
            [
                /(<)(style)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@style"
                    }
                ]
            ],
            [
                /(<)([:\w\-]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)([\w\-]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /</,
                "delimiter.html"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /[^<@]+/
            ]
        ],
        doctype: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.comment"
                }
            ],
            [
                /[^>]+/,
                "metatag.content.html"
            ],
            [
                />/,
                "metatag.html",
                "@pop"
            ]
        ],
        comment: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.comment"
                }
            ],
            [
                /-->/,
                "comment.html",
                "@pop"
            ],
            [
                /[^-]+/,
                "comment.content.html"
            ],
            [
                /./,
                "comment.content.html"
            ]
        ],
        otherTag: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.otherTag"
                }
            ],
            [
                /\/?>/,
                "delimiter.html",
                "@pop"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ]
        ],
        script: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.script"
                }
            ],
            [
                /type/,
                "attribute.name",
                "@scriptAfterType"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(<\/)(script\s*)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    {
                        token: "delimiter.html",
                        next: "@pop"
                    }
                ]
            ]
        ],
        scriptAfterType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.scriptAfterType"
                }
            ],
            [
                /=/,
                "delimiter",
                "@scriptAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptAfterTypeEquals: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.scriptAfterTypeEquals"
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.$1"
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.$1"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptWithCustomType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.scriptWithCustomType.$S2"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.$S2",
                    nextEmbedded: "$S2"
                }
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptEmbedded: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInEmbeddedState.scriptEmbedded.$S2",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /<\/script/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        style: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.style"
                }
            ],
            [
                /type/,
                "attribute.name",
                "@styleAfterType"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(<\/)(style\s*)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    {
                        token: "delimiter.html",
                        next: "@pop"
                    }
                ]
            ]
        ],
        styleAfterType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.styleAfterType"
                }
            ],
            [
                /=/,
                "delimiter",
                "@styleAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleAfterTypeEquals: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.styleAfterTypeEquals"
                }
            ],
            [
                /"([^"]*)"/,
                {
                    token: "attribute.value",
                    switchTo: "@styleWithCustomType.$1"
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: "attribute.value",
                    switchTo: "@styleWithCustomType.$1"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleWithCustomType: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInSimpleState.styleWithCustomType.$S2"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.$S2",
                    nextEmbedded: "$S2"
                }
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleEmbedded: [
            [
                /@[^@]/,
                {
                    token: "@rematch",
                    switchTo: "@razorInEmbeddedState.styleEmbedded.$S2",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /<\/style/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        razorInSimpleState: [
            [
                /@\*/,
                "comment.cs",
                "@razorBlockCommentTopLevel"
            ],
            [
                /@[{(]/,
                "metatag.cs",
                "@razorRootTopLevel"
            ],
            [
                /(@)(\s*[\w]+)/,
                [
                    "metatag.cs",
                    {
                        token: "identifier.cs",
                        switchTo: "@$S2.$S3"
                    }
                ]
            ],
            [
                /[})]/,
                {
                    token: "metatag.cs",
                    switchTo: "@$S2.$S3"
                }
            ],
            [
                /\*@/,
                {
                    token: "comment.cs",
                    switchTo: "@$S2.$S3"
                }
            ]
        ],
        razorInEmbeddedState: [
            [
                /@\*/,
                "comment.cs",
                "@razorBlockCommentTopLevel"
            ],
            [
                /@[{(]/,
                "metatag.cs",
                "@razorRootTopLevel"
            ],
            [
                /(@)(\s*[\w]+)/,
                [
                    "metatag.cs",
                    {
                        token: "identifier.cs",
                        switchTo: "@$S2.$S3",
                        nextEmbedded: "$S3"
                    }
                ]
            ],
            [
                /[})]/,
                {
                    token: "metatag.cs",
                    switchTo: "@$S2.$S3",
                    nextEmbedded: "$S3"
                }
            ],
            [
                /\*@/,
                {
                    token: "comment.cs",
                    switchTo: "@$S2.$S3",
                    nextEmbedded: "$S3"
                }
            ]
        ],
        razorBlockCommentTopLevel: [
            [
                /\*@/,
                "@rematch",
                "@pop"
            ],
            [
                /[^*]+/,
                "comment.cs"
            ],
            [
                /./,
                "comment.cs"
            ]
        ],
        razorBlockComment: [
            [
                /\*@/,
                "comment.cs",
                "@pop"
            ],
            [
                /[^*]+/,
                "comment.cs"
            ],
            [
                /./,
                "comment.cs"
            ]
        ],
        razorRootTopLevel: [
            [
                /\{/,
                "delimiter.bracket.cs",
                "@razorRoot"
            ],
            [
                /\(/,
                "delimiter.parenthesis.cs",
                "@razorRoot"
            ],
            [
                /[})]/,
                "@rematch",
                "@pop"
            ],
            {
                include: "razorCommon"
            }
        ],
        razorRoot: [
            [
                /\{/,
                "delimiter.bracket.cs",
                "@razorRoot"
            ],
            [
                /\(/,
                "delimiter.parenthesis.cs",
                "@razorRoot"
            ],
            [
                /\}/,
                "delimiter.bracket.cs",
                "@pop"
            ],
            [
                /\)/,
                "delimiter.parenthesis.cs",
                "@pop"
            ],
            {
                include: "razorCommon"
            }
        ],
        razorCommon: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@razorKeywords": {
                            token: "keyword.cs"
                        },
                        "@default": "identifier.cs"
                    }
                }
            ],
            [
                /[\[\]]/,
                "delimiter.array.cs"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /\/\/.*$/,
                "comment.cs"
            ],
            [
                /@\*/,
                "comment.cs",
                "@razorBlockComment"
            ],
            [
                /"([^"]*)"/,
                "string.cs"
            ],
            [
                /'([^']*)'/,
                "string.cs"
            ],
            [
                /(<)([\w\-]+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<)([\w\-]+)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<\/)([\w\-]+)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,]/,
                "delimiter.cs"
            ],
            [
                /\d*\d+[eE]([\-+]?\d+)?/,
                "number.float.cs"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float.cs"
            ],
            [
                /0[xX][0-9a-fA-F']*[0-9a-fA-F]/,
                "number.hex.cs"
            ],
            [
                /0[0-7']*[0-7]/,
                "number.octal.cs"
            ],
            [
                /0[bB][0-1']*[0-1]/,
                "number.binary.cs"
            ],
            [
                /\d[\d']*/,
                "number.cs"
            ],
            [
                /\d/,
                "number.cs"
            ]
        ]
    },
    razorKeywords: [
        "abstract",
        "as",
        "async",
        "await",
        "base",
        "bool",
        "break",
        "by",
        "byte",
        "case",
        "catch",
        "char",
        "checked",
        "class",
        "const",
        "continue",
        "decimal",
        "default",
        "delegate",
        "do",
        "double",
        "descending",
        "explicit",
        "event",
        "extern",
        "else",
        "enum",
        "false",
        "finally",
        "fixed",
        "float",
        "for",
        "foreach",
        "from",
        "goto",
        "group",
        "if",
        "implicit",
        "in",
        "int",
        "interface",
        "internal",
        "into",
        "is",
        "lock",
        "long",
        "nameof",
        "new",
        "null",
        "namespace",
        "object",
        "operator",
        "out",
        "override",
        "orderby",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "ref",
        "return",
        "switch",
        "struct",
        "sbyte",
        "sealed",
        "short",
        "sizeof",
        "stackalloc",
        "static",
        "string",
        "select",
        "this",
        "throw",
        "true",
        "try",
        "typeof",
        "uint",
        "ulong",
        "unchecked",
        "unsafe",
        "ushort",
        "using",
        "var",
        "virtual",
        "volatile",
        "void",
        "when",
        "while",
        "where",
        "yield",
        "model",
        "inject"
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};

},{"../../editor/editor.api.js":"8ZK4U","@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=razor.e0fc9a50.js.map