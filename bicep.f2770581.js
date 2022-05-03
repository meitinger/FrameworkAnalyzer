function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var parcelRequire = $parcel$global["parcelRequire3aa6"];
parcelRequire.register("dw4og", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $9d71ab60078fae25$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $9d71ab60078fae25$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/bicep/bicep.ts
var $9d71ab60078fae25$var$bounded = (text)=>`\\b${text}\\b`
;
var $9d71ab60078fae25$var$identifierStart = "[_a-zA-Z]";
var $9d71ab60078fae25$var$identifierContinue = "[_a-zA-Z0-9]";
var $9d71ab60078fae25$var$identifier = $9d71ab60078fae25$var$bounded(`${$9d71ab60078fae25$var$identifierStart}${$9d71ab60078fae25$var$identifierContinue}*`);
var $9d71ab60078fae25$var$keywords = [
    "targetScope",
    "resource",
    "module",
    "param",
    "var",
    "output",
    "for",
    "in",
    "if",
    "existing"
];
var $9d71ab60078fae25$var$namedLiterals = [
    "true",
    "false",
    "null"
];
var $9d71ab60078fae25$var$nonCommentWs = `[ \\t\\r\\n]`;
var $9d71ab60078fae25$var$numericLiteral = `[0-9]+`;
var $9d71ab60078fae25$export$c83be1687c028fc9 = {
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
            open: "'''",
            close: "'''"
        }
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
            open: "'",
            close: "'",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "'''",
            close: "'''",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    autoCloseBefore: ":.,=}])' \n	",
    indentationRules: {
        increaseIndentPattern: new RegExp("^((?!\\/\\/).)*(\\{[^}\"'`]*|\\([^)\"'`]*|\\[[^\\]\"'`]*)$"),
        decreaseIndentPattern: new RegExp("^((?!.*?\\/\\*).*\\*/)?\\s*[\\}\\]].*$")
    }
};
var $9d71ab60078fae25$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".bicep",
    brackets: [
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }
    ],
    symbols: /[=><!~?:&|+\-*/^%]+/,
    keywords: $9d71ab60078fae25$var$keywords,
    namedLiterals: $9d71ab60078fae25$var$namedLiterals,
    escapes: `\\\\(u{[0-9A-Fa-f]+}|n|r|t|\\\\|'|\\\${)`,
    tokenizer: {
        root: [
            {
                include: "@expression"
            },
            {
                include: "@whitespace"
            }
        ],
        stringVerbatim: [
            {
                regex: `(|'|'')[^']`,
                action: {
                    token: "string"
                }
            },
            {
                regex: `'''`,
                action: {
                    token: "string.quote",
                    next: "@pop"
                }
            }
        ],
        stringLiteral: [
            {
                regex: `\\\${`,
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: `[^\\\\'$]+`,
                action: {
                    token: "string"
                }
            },
            {
                regex: "@escapes",
                action: {
                    token: "string.escape"
                }
            },
            {
                regex: `\\\\.`,
                action: {
                    token: "string.escape.invalid"
                }
            },
            {
                regex: `'`,
                action: {
                    token: "string",
                    next: "@pop"
                }
            }
        ],
        bracketCounting: [
            {
                regex: `{`,
                action: {
                    token: "delimiter.bracket",
                    next: "@bracketCounting"
                }
            },
            {
                regex: `}`,
                action: {
                    token: "delimiter.bracket",
                    next: "@pop"
                }
            },
            {
                include: "expression"
            }
        ],
        comment: [
            {
                regex: `[^\\*]+`,
                action: {
                    token: "comment"
                }
            },
            {
                regex: `\\*\\/`,
                action: {
                    token: "comment",
                    next: "@pop"
                }
            },
            {
                regex: `[\\/*]`,
                action: {
                    token: "comment"
                }
            }
        ],
        whitespace: [
            {
                regex: $9d71ab60078fae25$var$nonCommentWs
            },
            {
                regex: `\\/\\*`,
                action: {
                    token: "comment",
                    next: "@comment"
                }
            },
            {
                regex: `\\/\\/.*$`,
                action: {
                    token: "comment"
                }
            }
        ],
        expression: [
            {
                regex: `'''`,
                action: {
                    token: "string.quote",
                    next: "@stringVerbatim"
                }
            },
            {
                regex: `'`,
                action: {
                    token: "string.quote",
                    next: "@stringLiteral"
                }
            },
            {
                regex: $9d71ab60078fae25$var$numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: $9d71ab60078fae25$var$identifier,
                action: {
                    cases: {
                        "@keywords": {
                            token: "keyword"
                        },
                        "@namedLiterals": {
                            token: "keyword"
                        },
                        "@default": {
                            token: "identifier"
                        }
                    }
                }
            }
        ]
    }
};

});


//# sourceMappingURL=bicep.f2770581.js.map
