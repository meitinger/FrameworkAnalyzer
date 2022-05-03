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
parcelRequire.register("kvMvc", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $eeec5369ef26d9d8$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $eeec5369ef26d9d8$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/qsharp/qsharp.ts
var $eeec5369ef26d9d8$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "//"
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
            close: '"',
            notIn: [
                "string",
                "comment"
            ]
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
var $eeec5369ef26d9d8$export$789c912f57fe164c = {
    keywords: [
        "namespace",
        "open",
        "as",
        "operation",
        "function",
        "body",
        "adjoint",
        "newtype",
        "controlled",
        "if",
        "elif",
        "else",
        "repeat",
        "until",
        "fixup",
        "for",
        "in",
        "while",
        "return",
        "fail",
        "within",
        "apply",
        "Adjoint",
        "Controlled",
        "Adj",
        "Ctl",
        "is",
        "self",
        "auto",
        "distribute",
        "invert",
        "intrinsic",
        "let",
        "set",
        "w/",
        "new",
        "not",
        "and",
        "or",
        "use",
        "borrow",
        "using",
        "borrowing",
        "mutable"
    ],
    typeKeywords: [
        "Unit",
        "Int",
        "BigInt",
        "Double",
        "Bool",
        "String",
        "Qubit",
        "Result",
        "Pauli",
        "Range"
    ],
    invalidKeywords: [
        "abstract",
        "base",
        "bool",
        "break",
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
        "enum",
        "event",
        "explicit",
        "extern",
        "finally",
        "fixed",
        "float",
        "foreach",
        "goto",
        "implicit",
        "int",
        "interface",
        "lock",
        "long",
        "null",
        "object",
        "operator",
        "out",
        "override",
        "params",
        "private",
        "protected",
        "public",
        "readonly",
        "ref",
        "sbyte",
        "sealed",
        "short",
        "sizeof",
        "stackalloc",
        "static",
        "string",
        "struct",
        "switch",
        "this",
        "throw",
        "try",
        "typeof",
        "unit",
        "ulong",
        "unchecked",
        "unsafe",
        "ushort",
        "virtual",
        "void",
        "volatile"
    ],
    constants: [
        "true",
        "false",
        "PauliI",
        "PauliX",
        "PauliY",
        "PauliZ",
        "One",
        "Zero"
    ],
    builtin: [
        "X",
        "Y",
        "Z",
        "H",
        "HY",
        "S",
        "T",
        "SWAP",
        "CNOT",
        "CCNOT",
        "MultiX",
        "R",
        "RFrac",
        "Rx",
        "Ry",
        "Rz",
        "R1",
        "R1Frac",
        "Exp",
        "ExpFrac",
        "Measure",
        "M",
        "MultiM",
        "Message",
        "Length",
        "Assert",
        "AssertProb",
        "AssertEqual"
    ],
    operators: [
        "and=",
        "<-",
        "->",
        "*",
        "*=",
        "@",
        "!",
        "^",
        "^=",
        ":",
        "::",
        "..",
        "==",
        "...",
        "=",
        "=>",
        ">",
        ">=",
        "<",
        "<=",
        "-",
        "-=",
        "!=",
        "or=",
        "%",
        "%=",
        "|",
        "+",
        "+=",
        "?",
        "/",
        "/=",
        "&&&",
        "&&&=",
        "^^^",
        "^^^=",
        ">>>",
        ">>>=",
        "<<<",
        "<<<=",
        "|||",
        "|||=",
        "~~~",
        "_",
        "w/",
        "w/="
    ],
    namespaceFollows: [
        "namespace",
        "open"
    ],
    symbols: /[=><!~?:&|+\-*\/\^%@._]+/,
    escapes: /\\[\s\S]/,
    tokenizer: {
        root: [
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        "@namespaceFollows": {
                            token: "keyword.$0",
                            next: "@namespace"
                        },
                        "@typeKeywords": "type",
                        "@keywords": "keyword",
                        "@constants": "constant",
                        "@builtin": "keyword",
                        "@invalidKeywords": "invalid",
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
                /@symbols/,
                {
                    cases: {
                        "@operators": "operator",
                        "@default": ""
                    }
                }
            ],
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /\d+/,
                "number"
            ],
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /"/,
                {
                    token: "string.quote",
                    bracket: "@open",
                    next: "@string"
                }
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
                /"/,
                {
                    token: "string.quote",
                    bracket: "@close",
                    next: "@pop"
                }
            ]
        ],
        namespace: [
            {
                include: "@whitespace"
            },
            [
                /[A-Za-z]\w*/,
                "namespace"
            ],
            [
                /[\.=]/,
                "delimiter"
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                "white"
            ],
            [
                /(\/\/).*/,
                "comment"
            ]
        ]
    }
};

});

})();
//# sourceMappingURL=qsharp.e0d35d4b.js.map
