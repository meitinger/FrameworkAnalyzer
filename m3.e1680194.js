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
parcelRequire.register("8l3Qm", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $6123442397ead99d$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $6123442397ead99d$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/m3/m3.ts
var $6123442397ead99d$export$c83be1687c028fc9 = {
    comments: {
        blockComment: [
            "(*",
            "*)"
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
            open: "[",
            close: "]"
        },
        {
            open: "{",
            close: "}"
        },
        {
            open: "(",
            close: ")"
        },
        {
            open: "(*",
            close: "*)"
        },
        {
            open: "<*",
            close: "*>"
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
            open: '"',
            close: '"',
            notIn: [
                "string",
                "comment"
            ]
        }
    ]
};
var $6123442397ead99d$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".m3",
    brackets: [
        {
            token: "delimiter.curly",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        },
        {
            token: "delimiter.square",
            open: "[",
            close: "]"
        }
    ],
    keywords: [
        "AND",
        "ANY",
        "ARRAY",
        "AS",
        "BEGIN",
        "BITS",
        "BRANDED",
        "BY",
        "CASE",
        "CONST",
        "DIV",
        "DO",
        "ELSE",
        "ELSIF",
        "END",
        "EVAL",
        "EXCEPT",
        "EXCEPTION",
        "EXIT",
        "EXPORTS",
        "FINALLY",
        "FOR",
        "FROM",
        "GENERIC",
        "IF",
        "IMPORT",
        "IN",
        "INTERFACE",
        "LOCK",
        "LOOP",
        "METHODS",
        "MOD",
        "MODULE",
        "NOT",
        "OBJECT",
        "OF",
        "OR",
        "OVERRIDES",
        "PROCEDURE",
        "RAISE",
        "RAISES",
        "READONLY",
        "RECORD",
        "REF",
        "REPEAT",
        "RETURN",
        "REVEAL",
        "SET",
        "THEN",
        "TO",
        "TRY",
        "TYPE",
        "TYPECASE",
        "UNSAFE",
        "UNTIL",
        "UNTRACED",
        "VALUE",
        "VAR",
        "WHILE",
        "WITH"
    ],
    reservedConstNames: [
        "ABS",
        "ADR",
        "ADRSIZE",
        "BITSIZE",
        "BYTESIZE",
        "CEILING",
        "DEC",
        "DISPOSE",
        "FALSE",
        "FIRST",
        "FLOAT",
        "FLOOR",
        "INC",
        "ISTYPE",
        "LAST",
        "LOOPHOLE",
        "MAX",
        "MIN",
        "NARROW",
        "NEW",
        "NIL",
        "NUMBER",
        "ORD",
        "ROUND",
        "SUBARRAY",
        "TRUE",
        "TRUNC",
        "TYPECODE",
        "VAL"
    ],
    reservedTypeNames: [
        "ADDRESS",
        "ANY",
        "BOOLEAN",
        "CARDINAL",
        "CHAR",
        "EXTENDED",
        "INTEGER",
        "LONGCARD",
        "LONGINT",
        "LONGREAL",
        "MUTEX",
        "NULL",
        "REAL",
        "REFANY",
        "ROOT",
        "TEXT"
    ],
    operators: [
        "+",
        "-",
        "*",
        "/",
        "&",
        "^",
        "."
    ],
    relations: [
        "=",
        "#",
        "<",
        "<=",
        ">",
        ">=",
        "<:",
        ":"
    ],
    delimiters: [
        "|",
        "..",
        "=>",
        ",",
        ";",
        ":="
    ],
    symbols: /[>=<#.,:;+\-*/&^]+/,
    escapes: /\\(?:[\\fnrt"']|[0-7]{3})/,
    tokenizer: {
        root: [
            [
                /_\w*/,
                "invalid"
            ],
            [
                /[a-zA-Z][a-zA-Z0-9_]*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@reservedConstNames": {
                            token: "constant.reserved.$0"
                        },
                        "@reservedTypeNames": {
                            token: "type.reserved.$0"
                        },
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
                /[0-9]+\.[0-9]+(?:[DdEeXx][\+\-]?[0-9]+)?/,
                "number.float"
            ],
            [
                /[0-9]+(?:\_[0-9a-fA-F]+)?L?/,
                "number"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "operators",
                        "@relations": "operators",
                        "@delimiters": "delimiter",
                        "@default": "invalid"
                    }
                }
            ],
            [
                /'[^\\']'/,
                "string.char"
            ],
            [
                /(')(@escapes)(')/,
                [
                    "string.char",
                    "string.escape",
                    "string.char"
                ]
            ],
            [
                /'/,
                "invalid"
            ],
            [
                /"([^"\\]|\\.)*$/,
                "invalid"
            ],
            [
                /"/,
                "string.text",
                "@text"
            ]
        ],
        text: [
            [
                /[^\\"]+/,
                "string.text"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "invalid"
            ],
            [
                /"/,
                "string.text",
                "@pop"
            ]
        ],
        comment: [
            [
                /\(\*/,
                "comment",
                "@push"
            ],
            [
                /\*\)/,
                "comment",
                "@pop"
            ],
            [
                /./,
                "comment"
            ]
        ],
        pragma: [
            [
                /<\*/,
                "keyword.pragma",
                "@push"
            ],
            [
                /\*>/,
                "keyword.pragma",
                "@pop"
            ],
            [
                /./,
                "keyword.pragma"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /\(\*/,
                "comment",
                "@comment"
            ],
            [
                /<\*/,
                "keyword.pragma",
                "@pragma"
            ]
        ]
    }
};

});


//# sourceMappingURL=m3.e1680194.js.map
