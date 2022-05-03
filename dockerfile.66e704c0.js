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
parcelRequire.register("4UTI3", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $39479b2aa9c768e3$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $39479b2aa9c768e3$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/dockerfile/dockerfile.ts
var $39479b2aa9c768e3$export$c83be1687c028fc9 = {
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
        }
    ]
};
var $39479b2aa9c768e3$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".dockerfile",
    variable: /\${?[\w]+}?/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@comment"
            },
            [
                /(ONBUILD)(\s+)/,
                [
                    "keyword",
                    ""
                ]
            ],
            [
                /(ENV)(\s+)([\w]+)/,
                [
                    "keyword",
                    "",
                    {
                        token: "variable",
                        next: "@arguments"
                    }
                ]
            ],
            [
                /(FROM|MAINTAINER|RUN|EXPOSE|ENV|ADD|ARG|VOLUME|LABEL|USER|WORKDIR|COPY|CMD|STOPSIGNAL|SHELL|HEALTHCHECK|ENTRYPOINT)/,
                {
                    token: "keyword",
                    next: "@arguments"
                }
            ]
        ],
        arguments: [
            {
                include: "@whitespace"
            },
            {
                include: "@strings"
            },
            [
                /(@variable)/,
                {
                    cases: {
                        "@eos": {
                            token: "variable",
                            next: "@popall"
                        },
                        "@default": "variable"
                    }
                }
            ],
            [
                /\\/,
                {
                    cases: {
                        "@eos": "",
                        "@default": ""
                    }
                }
            ],
            [
                /./,
                {
                    cases: {
                        "@eos": {
                            token: "",
                            next: "@popall"
                        },
                        "@default": ""
                    }
                }
            ]
        ],
        whitespace: [
            [
                /\s+/,
                {
                    cases: {
                        "@eos": {
                            token: "",
                            next: "@popall"
                        },
                        "@default": ""
                    }
                }
            ]
        ],
        comment: [
            [
                /(^#.*$)/,
                "comment",
                "@popall"
            ]
        ],
        strings: [
            [
                /\\'$/,
                "",
                "@popall"
            ],
            [
                /\\'/,
                ""
            ],
            [
                /'$/,
                "string",
                "@popall"
            ],
            [
                /'/,
                "string",
                "@stringBody"
            ],
            [
                /"$/,
                "string",
                "@popall"
            ],
            [
                /"/,
                "string",
                "@dblStringBody"
            ]
        ],
        stringBody: [
            [
                /[^\\\$']/,
                {
                    cases: {
                        "@eos": {
                            token: "string",
                            next: "@popall"
                        },
                        "@default": "string"
                    }
                }
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /'$/,
                "string",
                "@popall"
            ],
            [
                /'/,
                "string",
                "@pop"
            ],
            [
                /(@variable)/,
                "variable"
            ],
            [
                /\\$/,
                "string"
            ],
            [
                /$/,
                "string",
                "@popall"
            ]
        ],
        dblStringBody: [
            [
                /[^\\\$"]/,
                {
                    cases: {
                        "@eos": {
                            token: "string",
                            next: "@popall"
                        },
                        "@default": "string"
                    }
                }
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /"$/,
                "string",
                "@popall"
            ],
            [
                /"/,
                "string",
                "@pop"
            ],
            [
                /(@variable)/,
                "variable"
            ],
            [
                /\\$/,
                "string"
            ],
            [
                /$/,
                "string",
                "@popall"
            ]
        ]
    }
};

});


//# sourceMappingURL=dockerfile.66e704c0.js.map
