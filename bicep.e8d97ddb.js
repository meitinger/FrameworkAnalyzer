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
parcelRequire.register("eyYff", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $a9a2f908653be7cf$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $a9a2f908653be7cf$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/bicep/bicep.ts
var $a9a2f908653be7cf$var$bounded = (text)=>`\\b${text}\\b`
;
var $a9a2f908653be7cf$var$identifierStart = "[_a-zA-Z]";
var $a9a2f908653be7cf$var$identifierContinue = "[_a-zA-Z0-9]";
var $a9a2f908653be7cf$var$identifier = $a9a2f908653be7cf$var$bounded(`${$a9a2f908653be7cf$var$identifierStart}${$a9a2f908653be7cf$var$identifierContinue}*`);
var $a9a2f908653be7cf$var$keywords = [
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
var $a9a2f908653be7cf$var$namedLiterals = [
    "true",
    "false",
    "null"
];
var $a9a2f908653be7cf$var$nonCommentWs = `[ \\t\\r\\n]`;
var $a9a2f908653be7cf$var$numericLiteral = `[0-9]+`;
var $a9a2f908653be7cf$export$c83be1687c028fc9 = {
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
var $a9a2f908653be7cf$export$789c912f57fe164c = {
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
    keywords: $a9a2f908653be7cf$var$keywords,
    namedLiterals: $a9a2f908653be7cf$var$namedLiterals,
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
                regex: $a9a2f908653be7cf$var$nonCommentWs
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
                regex: $a9a2f908653be7cf$var$numericLiteral,
                action: {
                    token: "number"
                }
            },
            {
                regex: $a9a2f908653be7cf$var$identifier,
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


//# sourceMappingURL=bicep.e8d97ddb.js.map
