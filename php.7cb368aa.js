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
})({"lLL4l":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/php/php.ts
var conf = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\#\%\^\&\*\(\)\-\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\?\s]+)/g,
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
            close: "}",
            notIn: [
                "string"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string"
            ]
        },
        {
            open: "(",
            close: ")",
            notIn: [
                "string"
            ]
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
    folding: {
        markers: {
            start: new RegExp("^\\s*(#|//)region\\b"),
            end: new RegExp("^\\s*(#|//)endregion\\b")
        }
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: "",
    tokenizer: {
        root: [
            [
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.root"
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
                /(<)(\w+)(\/>)/,
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
                /(<)([:\w]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)(\w+)/,
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
                /[^<]+/
            ]
        ],
        doctype: [
            [
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.comment"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.comment"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.otherTag"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.script"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.scriptAfterType"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.scriptAfterTypeEquals"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.scriptWithCustomType.$S2"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInEmbeddedState.scriptEmbedded.$S2",
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.style"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.styleAfterType"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.styleAfterTypeEquals"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInSimpleState.styleWithCustomType.$S2"
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
                /<\?((php)|=)?/,
                {
                    token: "@rematch",
                    switchTo: "@phpInEmbeddedState.styleEmbedded.$S2",
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
        phpInSimpleState: [
            [
                /<\?((php)|=)?/,
                "metatag.php"
            ],
            [
                /\?>/,
                {
                    token: "metatag.php",
                    switchTo: "@$S2.$S3"
                }
            ],
            {
                include: "phpRoot"
            }
        ],
        phpInEmbeddedState: [
            [
                /<\?((php)|=)?/,
                "metatag.php"
            ],
            [
                /\?>/,
                {
                    token: "metatag.php",
                    switchTo: "@$S2.$S3",
                    nextEmbedded: "$S3"
                }
            ],
            {
                include: "phpRoot"
            }
        ],
        phpRoot: [
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@phpKeywords": {
                            token: "keyword.php"
                        },
                        "@phpCompileTimeConstants": {
                            token: "constant.php"
                        },
                        "@default": "identifier.php"
                    }
                }
            ],
            [
                /[$a-zA-Z_]\w*/,
                {
                    cases: {
                        "@phpPreDefinedVariables": {
                            token: "variable.predefined.php"
                        },
                        "@default": "variable.php"
                    }
                }
            ],
            [
                /[{}]/,
                "delimiter.bracket.php"
            ],
            [
                /[\[\]]/,
                "delimiter.array.php"
            ],
            [
                /[()]/,
                "delimiter.parenthesis.php"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(#|\/\/)$/,
                "comment.php"
            ],
            [
                /(#|\/\/)/,
                "comment.php",
                "@phpLineComment"
            ],
            [
                /\/\*/,
                "comment.php",
                "@phpComment"
            ],
            [
                /"/,
                "string.php",
                "@phpDoubleQuoteString"
            ],
            [
                /'/,
                "string.php",
                "@phpSingleQuoteString"
            ],
            [
                /[\+\-\*\%\&\|\^\~\!\=\<\>\/\?\;\:\.\,\@]/,
                "delimiter.php"
            ],
            [
                /\d*\d+[eE]([\-+]?\d+)?/,
                "number.float.php"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float.php"
            ],
            [
                /0[xX][0-9a-fA-F']*[0-9a-fA-F]/,
                "number.hex.php"
            ],
            [
                /0[0-7']*[0-7]/,
                "number.octal.php"
            ],
            [
                /0[bB][0-1']*[0-1]/,
                "number.binary.php"
            ],
            [
                /\d[\d']*/,
                "number.php"
            ],
            [
                /\d/,
                "number.php"
            ]
        ],
        phpComment: [
            [
                /\*\//,
                "comment.php",
                "@pop"
            ],
            [
                /[^*]+/,
                "comment.php"
            ],
            [
                /./,
                "comment.php"
            ]
        ],
        phpLineComment: [
            [
                /\?>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ],
            [
                /.$/,
                "comment.php",
                "@pop"
            ],
            [
                /[^?]+$/,
                "comment.php",
                "@pop"
            ],
            [
                /[^?]+/,
                "comment.php"
            ],
            [
                /./,
                "comment.php"
            ]
        ],
        phpDoubleQuoteString: [
            [
                /[^\\"]+/,
                "string.php"
            ],
            [
                /@escapes/,
                "string.escape.php"
            ],
            [
                /\\./,
                "string.escape.invalid.php"
            ],
            [
                /"/,
                "string.php",
                "@pop"
            ]
        ],
        phpSingleQuoteString: [
            [
                /[^\\']+/,
                "string.php"
            ],
            [
                /@escapes/,
                "string.escape.php"
            ],
            [
                /\\./,
                "string.escape.invalid.php"
            ],
            [
                /'/,
                "string.php",
                "@pop"
            ]
        ]
    },
    phpKeywords: [
        "abstract",
        "and",
        "array",
        "as",
        "break",
        "callable",
        "case",
        "catch",
        "cfunction",
        "class",
        "clone",
        "const",
        "continue",
        "declare",
        "default",
        "do",
        "else",
        "elseif",
        "enddeclare",
        "endfor",
        "endforeach",
        "endif",
        "endswitch",
        "endwhile",
        "extends",
        "false",
        "final",
        "for",
        "foreach",
        "function",
        "global",
        "goto",
        "if",
        "implements",
        "interface",
        "instanceof",
        "insteadof",
        "namespace",
        "new",
        "null",
        "object",
        "old_function",
        "or",
        "private",
        "protected",
        "public",
        "resource",
        "static",
        "switch",
        "throw",
        "trait",
        "try",
        "true",
        "use",
        "var",
        "while",
        "xor",
        "die",
        "echo",
        "empty",
        "exit",
        "eval",
        "include",
        "include_once",
        "isset",
        "list",
        "require",
        "require_once",
        "return",
        "print",
        "unset",
        "yield",
        "__construct"
    ],
    phpCompileTimeConstants: [
        "__CLASS__",
        "__DIR__",
        "__FILE__",
        "__LINE__",
        "__NAMESPACE__",
        "__METHOD__",
        "__FUNCTION__",
        "__TRAIT__"
    ],
    phpPreDefinedVariables: [
        "$GLOBALS",
        "$_SERVER",
        "$_GET",
        "$_POST",
        "$_FILES",
        "$_REQUEST",
        "$_SESSION",
        "$_ENV",
        "$_COOKIE",
        "$php_errormsg",
        "$HTTP_RAW_POST_DATA",
        "$http_response_header",
        "$argc",
        "$argv"
    ],
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=php.7cb368aa.js.map
