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
parcelRequire.register("gWQah", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $c56a86fbe3a0e2cc$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $c56a86fbe3a0e2cc$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/shell/shell.ts
var $c56a86fbe3a0e2cc$export$c83be1687c028fc9 = {
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
        },
        {
            open: "`",
            close: "`"
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
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: "`",
            close: "`"
        }
    ]
};
var $c56a86fbe3a0e2cc$export$789c912f57fe164c = {
    defaultToken: "",
    ignoreCase: true,
    tokenPostfix: ".shell",
    brackets: [
        {
            token: "delimiter.bracket",
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
        "if",
        "then",
        "do",
        "else",
        "elif",
        "while",
        "until",
        "for",
        "in",
        "esac",
        "fi",
        "fin",
        "fil",
        "done",
        "exit",
        "set",
        "unset",
        "export",
        "function"
    ],
    builtins: [
        "ab",
        "awk",
        "bash",
        "beep",
        "cat",
        "cc",
        "cd",
        "chown",
        "chmod",
        "chroot",
        "clear",
        "cp",
        "curl",
        "cut",
        "diff",
        "echo",
        "find",
        "gawk",
        "gcc",
        "get",
        "git",
        "grep",
        "hg",
        "kill",
        "killall",
        "ln",
        "ls",
        "make",
        "mkdir",
        "openssl",
        "mv",
        "nc",
        "node",
        "npm",
        "ping",
        "ps",
        "restart",
        "rm",
        "rmdir",
        "sed",
        "service",
        "sh",
        "shopt",
        "shred",
        "source",
        "sort",
        "sleep",
        "ssh",
        "start",
        "stop",
        "su",
        "sudo",
        "svn",
        "tee",
        "telnet",
        "top",
        "touch",
        "vi",
        "vim",
        "wall",
        "wc",
        "wget",
        "who",
        "write",
        "yes",
        "zsh"
    ],
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@builtins": "type.identifier",
                        "@default": ""
                    }
                }
            ],
            {
                include: "@strings"
            },
            {
                include: "@parameters"
            },
            {
                include: "@heredoc"
            },
            [
                /[{}\[\]()]/,
                "@brackets"
            ],
            [
                /-+\w+/,
                "attribute.name"
            ],
            [
                /@symbols/,
                "delimiter"
            ],
            {
                include: "@numbers"
            },
            [
                /[,;]/,
                "delimiter"
            ]
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ],
            [
                /(^#!.*$)/,
                "metatag"
            ],
            [
                /(^#.*$)/,
                "comment"
            ]
        ],
        numbers: [
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,
                "number.hex"
            ],
            [
                /\d+/,
                "number"
            ]
        ],
        strings: [
            [
                /'/,
                "string",
                "@stringBody"
            ],
            [
                /"/,
                "string",
                "@dblStringBody"
            ]
        ],
        stringBody: [
            [
                /'/,
                "string",
                "@popall"
            ],
            [
                /./,
                "string"
            ]
        ],
        dblStringBody: [
            [
                /"/,
                "string",
                "@popall"
            ],
            [
                /./,
                "string"
            ]
        ],
        heredoc: [
            [
                /(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,
                [
                    "constants",
                    "white",
                    "string.heredoc.delimiter",
                    "string.heredoc",
                    "string.heredoc.delimiter"
                ]
            ]
        ],
        parameters: [
            [
                /\$\d+/,
                "variable.predefined"
            ],
            [
                /\$\w+/,
                "variable"
            ],
            [
                /\$[*@#?\-$!0_]/,
                "variable"
            ],
            [
                /\$'/,
                "variable",
                "@parameterBodyQuote"
            ],
            [
                /\$"/,
                "variable",
                "@parameterBodyDoubleQuote"
            ],
            [
                /\$\(/,
                "variable",
                "@parameterBodyParen"
            ],
            [
                /\$\{/,
                "variable",
                "@parameterBodyCurlyBrace"
            ]
        ],
        parameterBodyQuote: [
            [
                /[^#:%*@\-!_']+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /[']/,
                "variable",
                "@pop"
            ]
        ],
        parameterBodyDoubleQuote: [
            [
                /[^#:%*@\-!_"]+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /["]/,
                "variable",
                "@pop"
            ]
        ],
        parameterBodyParen: [
            [
                /[^#:%*@\-!_)]+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /[)]/,
                "variable",
                "@pop"
            ]
        ],
        parameterBodyCurlyBrace: [
            [
                /[^#:%*@\-!_}]+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /[}]/,
                "variable",
                "@pop"
            ]
        ]
    }
};

});


//# sourceMappingURL=shell.72293a6a.js.map
