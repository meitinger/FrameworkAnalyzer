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
parcelRequire.register("2lyQq", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $1b58925b2593c1a0$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $1b58925b2593c1a0$export$789c912f57fe164c; });

var $eJmBa = parcelRequire("eJmBa");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $1b58925b2593c1a0$var$__defProp = Object.defineProperty;
var $1b58925b2593c1a0$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $1b58925b2593c1a0$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $1b58925b2593c1a0$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $1b58925b2593c1a0$var$__markAsModule = (target)=>$1b58925b2593c1a0$var$__defProp(target, "__esModule", {
        value: true
    })
;
var $1b58925b2593c1a0$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $1b58925b2593c1a0$var$__getOwnPropNames(module))if (!$1b58925b2593c1a0$var$__hasOwnProp.call(target, key) && key !== "default") $1b58925b2593c1a0$var$__defProp(target, key, {
            get: ()=>module[key]
            ,
            enumerable: !(desc = $1b58925b2593c1a0$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $1b58925b2593c1a0$var$monaco_editor_core_exports = {};
$1b58925b2593c1a0$var$__markAsModule($1b58925b2593c1a0$var$monaco_editor_core_exports);
$1b58925b2593c1a0$var$__reExport($1b58925b2593c1a0$var$monaco_editor_core_exports, $eJmBa);
// src/basic-languages/html/html.ts
var $1b58925b2593c1a0$var$EMPTY_ELEMENTS = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "keygen",
    "link",
    "menuitem",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
];
var $1b58925b2593c1a0$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: [
            "<!--",
            "-->"
        ]
    },
    brackets: [
        [
            "<!--",
            "-->"
        ],
        [
            "<",
            ">"
        ],
        [
            "{",
            "}"
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
            open: '"',
            close: '"'
        },
        {
            open: "'",
            close: "'"
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
            open: "(",
            close: ")"
        },
        {
            open: "<",
            close: ">"
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp(`<(?!(?:${$1b58925b2593c1a0$var$EMPTY_ELEMENTS.join("|")}))([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: $1b58925b2593c1a0$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(?!(?:${$1b58925b2593c1a0$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $1b58925b2593c1a0$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*<!--\\s*#region\\b.*-->"),
            end: new RegExp("^\\s*<!--\\s*#endregion\\b.*-->")
        }
    }
};
var $1b58925b2593c1a0$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".html",
    ignoreCase: true,
    tokenizer: {
        root: [
            [
                /<!DOCTYPE/,
                "metatag",
                "@doctype"
            ],
            [
                /<!--/,
                "comment",
                "@comment"
            ],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)(\s*)(\/>)/,
                [
                    "delimiter",
                    "tag",
                    "",
                    "delimiter"
                ]
            ],
            [
                /(<)(script)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@script"
                    }
                ]
            ],
            [
                /(<)(style)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@style"
                    }
                ]
            ],
            [
                /(<)((?:[\w\-]+:)?[\w\-]+)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)((?:[\w\-]+:)?[\w\-]+)/,
                [
                    "delimiter",
                    {
                        token: "tag",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /</,
                "delimiter"
            ],
            [
                /[^<]+/
            ]
        ],
        doctype: [
            [
                /[^>]+/,
                "metatag.content"
            ],
            [
                />/,
                "metatag",
                "@pop"
            ]
        ],
        comment: [
            [
                /-->/,
                "comment",
                "@pop"
            ],
            [
                /[^-]+/,
                "comment.content"
            ],
            [
                /./,
                "comment.content"
            ]
        ],
        otherTag: [
            [
                /\/?>/,
                "delimiter",
                "@pop"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ]
        ],
        script: [
            [
                /type/,
                "attribute.name",
                "@scriptAfterType"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@scriptEmbedded",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(<\/)(script\s*)(>)/,
                [
                    "delimiter",
                    "tag",
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ]
        ],
        scriptAfterType: [
            [
                /=/,
                "delimiter",
                "@scriptAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@scriptEmbedded",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptAfterTypeEquals: [
            [
                /"([^"]*)"/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.$1"
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: "attribute.value",
                    switchTo: "@scriptWithCustomType.$1"
                }
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@scriptEmbedded",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptWithCustomType: [
            [
                />/,
                {
                    token: "delimiter",
                    next: "@scriptEmbedded.$S2",
                    nextEmbedded: "$S2"
                }
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/script\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        scriptEmbedded: [
            [
                /<\/script/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /[^<]+/,
                ""
            ]
        ],
        style: [
            [
                /type/,
                "attribute.name",
                "@styleAfterType"
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@styleEmbedded",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(<\/)(style\s*)(>)/,
                [
                    "delimiter",
                    "tag",
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ]
        ],
        styleAfterType: [
            [
                /=/,
                "delimiter",
                "@styleAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@styleEmbedded",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleAfterTypeEquals: [
            [
                /"([^"]*)"/,
                {
                    token: "attribute.value",
                    switchTo: "@styleWithCustomType.$1"
                }
            ],
            [
                /'([^']*)'/,
                {
                    token: "attribute.value",
                    switchTo: "@styleWithCustomType.$1"
                }
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@styleEmbedded",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleWithCustomType: [
            [
                />/,
                {
                    token: "delimiter",
                    next: "@styleEmbedded.$S2",
                    nextEmbedded: "$S2"
                }
            ],
            [
                /"([^"]*)"/,
                "attribute.value"
            ],
            [
                /'([^']*)'/,
                "attribute.value"
            ],
            [
                /[\w\-]+/,
                "attribute.name"
            ],
            [
                /=/,
                "delimiter"
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /<\/style\s*>/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ]
        ],
        styleEmbedded: [
            [
                /<\/style/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /[^<]+/,
                ""
            ]
        ]
    }
};

});


//# sourceMappingURL=html.a09a0d3a.js.map
