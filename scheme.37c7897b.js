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
parcelRequire.register("bExc3", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $87bd2dac107a5fa3$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $87bd2dac107a5fa3$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/scheme/scheme.ts
var $87bd2dac107a5fa3$export$c83be1687c028fc9 = {
    comments: {
        lineComment: ";",
        blockComment: [
            "#|",
            "|#"
        ]
    },
    brackets: [
        [
            "(",
            ")"
        ],
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
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
        }
    ]
};
var $87bd2dac107a5fa3$export$789c912f57fe164c = {
    defaultToken: "",
    ignoreCase: true,
    tokenPostfix: ".scheme",
    brackets: [
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
            open: "[",
            close: "]",
            token: "delimiter.square"
        }
    ],
    keywords: [
        "case",
        "do",
        "let",
        "loop",
        "if",
        "else",
        "when",
        "cons",
        "car",
        "cdr",
        "cond",
        "lambda",
        "lambda*",
        "syntax-rules",
        "format",
        "set!",
        "quote",
        "eval",
        "append",
        "list",
        "list?",
        "member?",
        "load"
    ],
    constants: [
        "#t",
        "#f"
    ],
    operators: [
        "eq?",
        "eqv?",
        "equal?",
        "and",
        "or",
        "not",
        "null?"
    ],
    tokenizer: {
        root: [
            [
                /#[xXoObB][0-9a-fA-F]+/,
                "number.hex"
            ],
            [
                /[+-]?\d+(?:(?:\.\d*)?(?:[eE][+-]?\d+)?)?/,
                "number.float"
            ],
            [
                /(?:\b(?:(define|define-syntax|define-macro))\b)(\s+)((?:\w|\-|\!|\?)*)/,
                [
                    "keyword",
                    "white",
                    "variable"
                ]
            ],
            {
                include: "@whitespace"
            },
            {
                include: "@strings"
            },
            [
                /[a-zA-Z_#][a-zA-Z0-9_\-\?\!\*]*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@constants": "constant",
                        "@operators": "operators",
                        "@default": "identifier"
                    }
                }
            ]
        ],
        comment: [
            [
                /[^\|#]+/,
                "comment"
            ],
            [
                /#\|/,
                "comment",
                "@push"
            ],
            [
                /\|#/,
                "comment",
                "@pop"
            ],
            [
                /[\|#]/,
                "comment"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /#\|/,
                "comment",
                "@comment"
            ],
            [
                /;.*$/,
                "comment"
            ]
        ],
        strings: [
            [
                /"$/,
                "string",
                "@popall"
            ],
            [
                /"(?=.)/,
                "string",
                "@multiLineString"
            ]
        ],
        multiLineString: [
            [
                /[^\\"]+$/,
                "string",
                "@popall"
            ],
            [
                /[^\\"]+/,
                "string"
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /"/,
                "string",
                "@popall"
            ],
            [
                /\\$/,
                "string"
            ]
        ]
    }
};

});


//# sourceMappingURL=scheme.37c7897b.js.map
