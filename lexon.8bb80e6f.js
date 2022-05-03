(function () {
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
parcelRequire.register("5yazK", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $40a854cd7a3fa72a$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $40a854cd7a3fa72a$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/lexon/lexon.ts
var $40a854cd7a3fa72a$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "COMMENT"
    },
    brackets: [
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
            open: ":",
            close: "."
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
            open: "`",
            close: "`"
        },
        {
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: ":",
            close: "."
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*(::\\s*|COMMENT\\s+)#region"),
            end: new RegExp("^\\s*(::\\s*|COMMENT\\s+)#endregion")
        }
    }
};
var $40a854cd7a3fa72a$export$789c912f57fe164c = {
    tokenPostfix: ".lexon",
    ignoreCase: true,
    keywords: [
        "lexon",
        "lex",
        "clause",
        "terms",
        "contracts",
        "may",
        "pay",
        "pays",
        "appoints",
        "into",
        "to"
    ],
    typeKeywords: [
        "amount",
        "person",
        "key",
        "time",
        "date",
        "asset",
        "text"
    ],
    operators: [
        "less",
        "greater",
        "equal",
        "le",
        "gt",
        "or",
        "and",
        "add",
        "added",
        "subtract",
        "subtracted",
        "multiply",
        "multiplied",
        "times",
        "divide",
        "divided",
        "is",
        "be",
        "certified"
    ],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    tokenizer: {
        root: [
            [
                /^(\s*)(comment:?(?:\s.*|))$/,
                [
                    "",
                    "comment"
                ]
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    bracket: "@open",
                    next: "@quoted_identifier"
                }
            ],
            [
                "LEX$",
                {
                    token: "keyword",
                    bracket: "@open",
                    next: "@identifier_until_period"
                }
            ],
            [
                "LEXON",
                {
                    token: "keyword",
                    bracket: "@open",
                    next: "@semver"
                }
            ],
            [
                ":",
                {
                    token: "delimiter",
                    bracket: "@open",
                    next: "@identifier_until_period"
                }
            ],
            [
                /[a-z_$][\w$]*/,
                {
                    cases: {
                        "@operators": "operator",
                        "@typeKeywords": "keyword.type",
                        "@keywords": "keyword",
                        "@default": "identifier"
                    }
                }
            ],
            {
                include: "@whitespace"
            },
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /@symbols/,
                "delimiter"
            ],
            [
                /\d*\.\d*\.\d*/,
                "number.semver"
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F]+/,
                "number.hex"
            ],
            [
                /\d+/,
                "number"
            ],
            [
                /[;,.]/,
                "delimiter"
            ]
        ],
        quoted_identifier: [
            [
                /[^\\"]+/,
                "identifier"
            ],
            [
                /"/,
                {
                    token: "identifier.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        space_identifier_until_period: [
            [
                ":",
                "delimiter"
            ],
            [
                " ",
                {
                    token: "white",
                    next: "@identifier_rest"
                }
            ]
        ],
        identifier_until_period: [
            {
                include: "@whitespace"
            },
            [
                ":",
                {
                    token: "delimiter",
                    next: "@identifier_rest"
                }
            ],
            [
                /[^\\.]+/,
                "identifier"
            ],
            [
                /\./,
                {
                    token: "delimiter",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        identifier_rest: [
            [
                /[^\\.]+/,
                "identifier"
            ],
            [
                /\./,
                {
                    token: "delimiter",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        semver: [
            {
                include: "@whitespace"
            },
            [
                ":",
                "delimiter"
            ],
            [
                /\d*\.\d*\.\d*/,
                {
                    token: "number.semver",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ]
        ]
    }
};

});

})();
//# sourceMappingURL=lexon.8bb80e6f.js.map