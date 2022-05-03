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
parcelRequire.register("3CUep", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $2a408a140d914472$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $2a408a140d914472$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/sb/sb.ts
var $2a408a140d914472$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "'"
    },
    brackets: [
        [
            "(",
            ")"
        ],
        [
            "[",
            "]"
        ],
        [
            "If",
            "EndIf"
        ],
        [
            "While",
            "EndWhile"
        ],
        [
            "For",
            "EndFor"
        ],
        [
            "Sub",
            "EndSub"
        ]
    ],
    autoClosingPairs: [
        {
            open: '"',
            close: '"',
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
            open: "[",
            close: "]",
            notIn: [
                "string",
                "comment"
            ]
        }
    ]
};
var $2a408a140d914472$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".sb",
    ignoreCase: true,
    brackets: [
        {
            token: "delimiter.array",
            open: "[",
            close: "]"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        },
        {
            token: "keyword.tag-if",
            open: "If",
            close: "EndIf"
        },
        {
            token: "keyword.tag-while",
            open: "While",
            close: "EndWhile"
        },
        {
            token: "keyword.tag-for",
            open: "For",
            close: "EndFor"
        },
        {
            token: "keyword.tag-sub",
            open: "Sub",
            close: "EndSub"
        }
    ],
    keywords: [
        "Else",
        "ElseIf",
        "EndFor",
        "EndIf",
        "EndSub",
        "EndWhile",
        "For",
        "Goto",
        "If",
        "Step",
        "Sub",
        "Then",
        "To",
        "While"
    ],
    tagwords: [
        "If",
        "Sub",
        "While",
        "For"
    ],
    operators: [
        ">",
        "<",
        "<>",
        "<=",
        ">=",
        "And",
        "Or",
        "+",
        "-",
        "*",
        "/",
        "="
    ],
    identifier: /[a-zA-Z_][\w]*/,
    symbols: /[=><:+\-*\/%\.,]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            [
                /(@identifier)(?=[.])/,
                "type"
            ],
            [
                /@identifier/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@operators": "operator",
                        "@default": "variable.name"
                    }
                }
            ],
            [
                /([.])(@identifier)/,
                {
                    cases: {
                        $2: [
                            "delimiter",
                            "type.member"
                        ],
                        "@default": ""
                    }
                }
            ],
            [
                /\d*\.\d+/,
                "number.float"
            ],
            [
                /\d+/,
                "number"
            ],
            [
                /[()\[\]]/,
                "@brackets"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "operator",
                        "@default": "delimiter"
                    }
                }
            ],
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /"/,
                "string",
                "@string"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /(\').*$/,
                "comment"
            ]
        ],
        string: [
            [
                /[^\\"]+/,
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
                /"C?/,
                "string",
                "@pop"
            ]
        ]
    }
};

});


//# sourceMappingURL=sb.710049d8.js.map
