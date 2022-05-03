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
})({"d2Afp":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/elixir/elixir.ts
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
            open: '"',
            close: '"'
        }
    ],
    autoClosingPairs: [
        {
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: '"',
            close: '"',
            notIn: [
                "comment"
            ]
        },
        {
            open: '"""',
            close: '"""'
        },
        {
            open: "`",
            close: "`",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: "{",
            close: "}"
        },
        {
            open: "[",
            close: "]"
        },
        {
            open: "<<",
            close: ">>"
        }
    ],
    indentationRules: {
        increaseIndentPattern: /^\s*(after|else|catch|rescue|fn|[^#]*(do|<\-|\->|\{|\[|\=))\s*$/,
        decreaseIndentPattern: /^\s*((\}|\])\s*$|(after|else|catch|rescue|end)\b)/
    }
};
var language = {
    defaultToken: "source",
    tokenPostfix: ".elixir",
    brackets: [
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        },
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "<<",
            close: ">>",
            token: "delimiter.angle.special"
        }
    ],
    declarationKeywords: [
        "def",
        "defp",
        "defn",
        "defnp",
        "defguard",
        "defguardp",
        "defmacro",
        "defmacrop",
        "defdelegate",
        "defcallback",
        "defmacrocallback",
        "defmodule",
        "defprotocol",
        "defexception",
        "defimpl",
        "defstruct"
    ],
    operatorKeywords: [
        "and",
        "in",
        "not",
        "or",
        "when"
    ],
    namespaceKeywords: [
        "alias",
        "import",
        "require",
        "use"
    ],
    otherKeywords: [
        "after",
        "case",
        "catch",
        "cond",
        "do",
        "else",
        "end",
        "fn",
        "for",
        "if",
        "quote",
        "raise",
        "receive",
        "rescue",
        "super",
        "throw",
        "try",
        "unless",
        "unquote_splicing",
        "unquote",
        "with"
    ],
    constants: [
        "true",
        "false",
        "nil"
    ],
    nameBuiltin: [
        "__MODULE__",
        "__DIR__",
        "__ENV__",
        "__CALLER__",
        "__STACKTRACE__"
    ],
    operator: /-[->]?|!={0,2}|\*{1,2}|\/|\\\\|&{1,3}|\.\.?|\^(?:\^\^)?|\+\+?|<(?:-|<<|=|>|\|>|~>?)?|=~|={1,3}|>(?:=|>>)?|\|~>|\|>|\|{1,3}|~>>?|~~~|::/,
    variableName: /[a-z_][a-zA-Z0-9_]*[?!]?/,
    atomName: /[a-zA-Z_][a-zA-Z0-9_@]*[?!]?|@specialAtomName|@operator/,
    specialAtomName: /\.\.\.|<<>>|%\{\}|%|\{\}/,
    aliasPart: /[A-Z][a-zA-Z0-9_]*/,
    moduleName: /@aliasPart(?:\.@aliasPart)*/,
    sigilSymmetricDelimiter: /"""|'''|"|'|\/|\|/,
    sigilStartDelimiter: /@sigilSymmetricDelimiter|<|\{|\[|\(/,
    sigilEndDelimiter: /@sigilSymmetricDelimiter|>|\}|\]|\)/,
    sigilModifiers: /[a-zA-Z0-9]*/,
    decimal: /\d(?:_?\d)*/,
    hex: /[0-9a-fA-F](_?[0-9a-fA-F])*/,
    octal: /[0-7](_?[0-7])*/,
    binary: /[01](_?[01])*/,
    escape: /\\u[0-9a-fA-F]{4}|\\x[0-9a-fA-F]{2}|\\./,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@comments"
            },
            {
                include: "@keywordsShorthand"
            },
            {
                include: "@numbers"
            },
            {
                include: "@identifiers"
            },
            {
                include: "@strings"
            },
            {
                include: "@atoms"
            },
            {
                include: "@sigils"
            },
            {
                include: "@attributes"
            },
            {
                include: "@symbols"
            }
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ]
        ],
        comments: [
            [
                /(#)(.*)/,
                [
                    "comment.punctuation",
                    "comment"
                ]
            ]
        ],
        keywordsShorthand: [
            [
                /(@atomName)(:)/,
                [
                    "constant",
                    "constant.punctuation"
                ]
            ],
            [
                /"(?=([^"]|#\{.*?\}|\\")*":)/,
                {
                    token: "constant.delimiter",
                    next: "@doubleQuotedStringKeyword"
                }
            ],
            [
                /'(?=([^']|#\{.*?\}|\\')*':)/,
                {
                    token: "constant.delimiter",
                    next: "@singleQuotedStringKeyword"
                }
            ]
        ],
        doubleQuotedStringKeyword: [
            [
                /":/,
                {
                    token: "constant.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringConstantContentInterpol"
            }
        ],
        singleQuotedStringKeyword: [
            [
                /':/,
                {
                    token: "constant.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringConstantContentInterpol"
            }
        ],
        numbers: [
            [
                /0b@binary/,
                "number.binary"
            ],
            [
                /0o@octal/,
                "number.octal"
            ],
            [
                /0x@hex/,
                "number.hex"
            ],
            [
                /@decimal\.@decimal([eE]-?@decimal)?/,
                "number.float"
            ],
            [
                /@decimal/,
                "number"
            ]
        ],
        identifiers: [
            [
                /\b(defp?|defnp?|defmacrop?|defguardp?|defdelegate)(\s+)(@variableName)(?!\s+@operator)/,
                [
                    "keyword.declaration",
                    "white",
                    {
                        cases: {
                            unquote: "keyword",
                            "@default": "function"
                        }
                    }
                ]
            ],
            [
                /(@variableName)(?=\s*\.?\s*\()/,
                {
                    cases: {
                        "@declarationKeywords": "keyword.declaration",
                        "@namespaceKeywords": "keyword",
                        "@otherKeywords": "keyword",
                        "@default": "function.call"
                    }
                }
            ],
            [
                /(@moduleName)(\s*)(\.)(\s*)(@variableName)/,
                [
                    "type.identifier",
                    "white",
                    "operator",
                    "white",
                    "function.call"
                ]
            ],
            [
                /(:)(@atomName)(\s*)(\.)(\s*)(@variableName)/,
                [
                    "constant.punctuation",
                    "constant",
                    "white",
                    "operator",
                    "white",
                    "function.call"
                ]
            ],
            [
                /(\|>)(\s*)(@variableName)/,
                [
                    "operator",
                    "white",
                    {
                        cases: {
                            "@otherKeywords": "keyword",
                            "@default": "function.call"
                        }
                    }
                ]
            ],
            [
                /(&)(\s*)(@variableName)/,
                [
                    "operator",
                    "white",
                    "function.call"
                ]
            ],
            [
                /@variableName/,
                {
                    cases: {
                        "@declarationKeywords": "keyword.declaration",
                        "@operatorKeywords": "keyword.operator",
                        "@namespaceKeywords": "keyword",
                        "@otherKeywords": "keyword",
                        "@constants": "constant.language",
                        "@nameBuiltin": "variable.language",
                        "_.*": "comment.unused",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /@moduleName/,
                "type.identifier"
            ]
        ],
        strings: [
            [
                /"""/,
                {
                    token: "string.delimiter",
                    next: "@doubleQuotedHeredoc"
                }
            ],
            [
                /'''/,
                {
                    token: "string.delimiter",
                    next: "@singleQuotedHeredoc"
                }
            ],
            [
                /"/,
                {
                    token: "string.delimiter",
                    next: "@doubleQuotedString"
                }
            ],
            [
                /'/,
                {
                    token: "string.delimiter",
                    next: "@singleQuotedString"
                }
            ]
        ],
        doubleQuotedHeredoc: [
            [
                /"""/,
                {
                    token: "string.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringContentInterpol"
            }
        ],
        singleQuotedHeredoc: [
            [
                /'''/,
                {
                    token: "string.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringContentInterpol"
            }
        ],
        doubleQuotedString: [
            [
                /"/,
                {
                    token: "string.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringContentInterpol"
            }
        ],
        singleQuotedString: [
            [
                /'/,
                {
                    token: "string.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringContentInterpol"
            }
        ],
        atoms: [
            [
                /(:)(@atomName)/,
                [
                    "constant.punctuation",
                    "constant"
                ]
            ],
            [
                /:"/,
                {
                    token: "constant.delimiter",
                    next: "@doubleQuotedStringAtom"
                }
            ],
            [
                /:'/,
                {
                    token: "constant.delimiter",
                    next: "@singleQuotedStringAtom"
                }
            ]
        ],
        doubleQuotedStringAtom: [
            [
                /"/,
                {
                    token: "constant.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringConstantContentInterpol"
            }
        ],
        singleQuotedStringAtom: [
            [
                /'/,
                {
                    token: "constant.delimiter",
                    next: "@pop"
                }
            ],
            {
                include: "@stringConstantContentInterpol"
            }
        ],
        sigils: [
            [
                /~[a-z]@sigilStartDelimiter/,
                {
                    token: "@rematch",
                    next: "@sigil.interpol"
                }
            ],
            [
                /~[A-Z]@sigilStartDelimiter/,
                {
                    token: "@rematch",
                    next: "@sigil.noInterpol"
                }
            ]
        ],
        sigil: [
            [
                /~([a-zA-Z])\{/,
                {
                    token: "@rematch",
                    switchTo: "@sigilStart.$S2.$1.{.}"
                }
            ],
            [
                /~([a-zA-Z])\[/,
                {
                    token: "@rematch",
                    switchTo: "@sigilStart.$S2.$1.[.]"
                }
            ],
            [
                /~([a-zA-Z])\(/,
                {
                    token: "@rematch",
                    switchTo: "@sigilStart.$S2.$1.(.)"
                }
            ],
            [
                /~([a-zA-Z])\</,
                {
                    token: "@rematch",
                    switchTo: "@sigilStart.$S2.$1.<.>"
                }
            ],
            [
                /~([a-zA-Z])(@sigilSymmetricDelimiter)/,
                {
                    token: "@rematch",
                    switchTo: "@sigilStart.$S2.$1.$2.$2"
                }
            ]
        ],
        "sigilStart.interpol.s": [
            [
                /~s@sigilStartDelimiter/,
                {
                    token: "string.delimiter",
                    switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
                }
            ]
        ],
        "sigilContinue.interpol.s": [
            [
                /(@sigilEndDelimiter)@sigilModifiers/,
                {
                    cases: {
                        "$1==$S5": {
                            token: "string.delimiter",
                            next: "@pop"
                        },
                        "@default": "string"
                    }
                }
            ],
            {
                include: "@stringContentInterpol"
            }
        ],
        "sigilStart.noInterpol.S": [
            [
                /~S@sigilStartDelimiter/,
                {
                    token: "string.delimiter",
                    switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
                }
            ]
        ],
        "sigilContinue.noInterpol.S": [
            [
                /(^|[^\\])\\@sigilEndDelimiter/,
                "string"
            ],
            [
                /(@sigilEndDelimiter)@sigilModifiers/,
                {
                    cases: {
                        "$1==$S5": {
                            token: "string.delimiter",
                            next: "@pop"
                        },
                        "@default": "string"
                    }
                }
            ],
            {
                include: "@stringContent"
            }
        ],
        "sigilStart.interpol.r": [
            [
                /~r@sigilStartDelimiter/,
                {
                    token: "regexp.delimiter",
                    switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
                }
            ]
        ],
        "sigilContinue.interpol.r": [
            [
                /(@sigilEndDelimiter)@sigilModifiers/,
                {
                    cases: {
                        "$1==$S5": {
                            token: "regexp.delimiter",
                            next: "@pop"
                        },
                        "@default": "regexp"
                    }
                }
            ],
            {
                include: "@regexpContentInterpol"
            }
        ],
        "sigilStart.noInterpol.R": [
            [
                /~R@sigilStartDelimiter/,
                {
                    token: "regexp.delimiter",
                    switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
                }
            ]
        ],
        "sigilContinue.noInterpol.R": [
            [
                /(^|[^\\])\\@sigilEndDelimiter/,
                "regexp"
            ],
            [
                /(@sigilEndDelimiter)@sigilModifiers/,
                {
                    cases: {
                        "$1==$S5": {
                            token: "regexp.delimiter",
                            next: "@pop"
                        },
                        "@default": "regexp"
                    }
                }
            ],
            {
                include: "@regexpContent"
            }
        ],
        "sigilStart.interpol": [
            [
                /~([a-zA-Z])@sigilStartDelimiter/,
                {
                    token: "sigil.delimiter",
                    switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
                }
            ]
        ],
        "sigilContinue.interpol": [
            [
                /(@sigilEndDelimiter)@sigilModifiers/,
                {
                    cases: {
                        "$1==$S5": {
                            token: "sigil.delimiter",
                            next: "@pop"
                        },
                        "@default": "sigil"
                    }
                }
            ],
            {
                include: "@sigilContentInterpol"
            }
        ],
        "sigilStart.noInterpol": [
            [
                /~([a-zA-Z])@sigilStartDelimiter/,
                {
                    token: "sigil.delimiter",
                    switchTo: "@sigilContinue.$S2.$S3.$S4.$S5"
                }
            ]
        ],
        "sigilContinue.noInterpol": [
            [
                /(^|[^\\])\\@sigilEndDelimiter/,
                "sigil"
            ],
            [
                /(@sigilEndDelimiter)@sigilModifiers/,
                {
                    cases: {
                        "$1==$S5": {
                            token: "sigil.delimiter",
                            next: "@pop"
                        },
                        "@default": "sigil"
                    }
                }
            ],
            {
                include: "@sigilContent"
            }
        ],
        attributes: [
            [
                /\@(module|type)?doc (~[sS])?"""/,
                {
                    token: "comment.block.documentation",
                    next: "@doubleQuotedHeredocDocstring"
                }
            ],
            [
                /\@(module|type)?doc (~[sS])?"/,
                {
                    token: "comment.block.documentation",
                    next: "@doubleQuotedStringDocstring"
                }
            ],
            [
                /\@(module|type)?doc false/,
                "comment.block.documentation"
            ],
            [
                /\@(@variableName)/,
                "variable"
            ]
        ],
        doubleQuotedHeredocDocstring: [
            [
                /"""/,
                {
                    token: "comment.block.documentation",
                    next: "@pop"
                }
            ],
            {
                include: "@docstringContent"
            }
        ],
        doubleQuotedStringDocstring: [
            [
                /"/,
                {
                    token: "comment.block.documentation",
                    next: "@pop"
                }
            ],
            {
                include: "@docstringContent"
            }
        ],
        symbols: [
            [
                /\?(\\.|[^\\\s])/,
                "number.constant"
            ],
            [
                /&\d+/,
                "operator"
            ],
            [
                /<<<|>>>/,
                "operator"
            ],
            [
                /[()\[\]\{\}]|<<|>>/,
                "@brackets"
            ],
            [
                /\.\.\./,
                "identifier"
            ],
            [
                /=>/,
                "punctuation"
            ],
            [
                /@operator/,
                "operator"
            ],
            [
                /[:;,.%]/,
                "punctuation"
            ]
        ],
        stringContentInterpol: [
            {
                include: "@interpolation"
            },
            {
                include: "@escapeChar"
            },
            {
                include: "@stringContent"
            }
        ],
        stringContent: [
            [
                /./,
                "string"
            ]
        ],
        stringConstantContentInterpol: [
            {
                include: "@interpolation"
            },
            {
                include: "@escapeChar"
            },
            {
                include: "@stringConstantContent"
            }
        ],
        stringConstantContent: [
            [
                /./,
                "constant"
            ]
        ],
        regexpContentInterpol: [
            {
                include: "@interpolation"
            },
            {
                include: "@escapeChar"
            },
            {
                include: "@regexpContent"
            }
        ],
        regexpContent: [
            [
                /(\s)(#)(\s.*)$/,
                [
                    "white",
                    "comment.punctuation",
                    "comment"
                ]
            ],
            [
                /./,
                "regexp"
            ]
        ],
        sigilContentInterpol: [
            {
                include: "@interpolation"
            },
            {
                include: "@escapeChar"
            },
            {
                include: "@sigilContent"
            }
        ],
        sigilContent: [
            [
                /./,
                "sigil"
            ]
        ],
        docstringContent: [
            [
                /./,
                "comment.block.documentation"
            ]
        ],
        escapeChar: [
            [
                /@escape/,
                "constant.character.escape"
            ]
        ],
        interpolation: [
            [
                /#{/,
                {
                    token: "delimiter.bracket.embed",
                    next: "@interpolationContinue"
                }
            ]
        ],
        interpolationContinue: [
            [
                /}/,
                {
                    token: "delimiter.bracket.embed",
                    next: "@pop"
                }
            ],
            {
                include: "@root"
            }
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=elixir.c85defd5.js.map
