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
parcelRequire.register("c3kJS", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $8c65da2e3f384fa6$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $8c65da2e3f384fa6$export$789c912f57fe164c; });

var $f7M7F = parcelRequire("f7M7F");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $8c65da2e3f384fa6$var$__defProp = Object.defineProperty;
var $8c65da2e3f384fa6$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $8c65da2e3f384fa6$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $8c65da2e3f384fa6$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $8c65da2e3f384fa6$var$__markAsModule = (target)=>$8c65da2e3f384fa6$var$__defProp(target, "__esModule", {
        value: true
    })
;
var $8c65da2e3f384fa6$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $8c65da2e3f384fa6$var$__getOwnPropNames(module))if (!$8c65da2e3f384fa6$var$__hasOwnProp.call(target, key) && key !== "default") $8c65da2e3f384fa6$var$__defProp(target, key, {
            get: ()=>module[key]
            ,
            enumerable: !(desc = $8c65da2e3f384fa6$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $8c65da2e3f384fa6$var$monaco_editor_core_exports = {};
$8c65da2e3f384fa6$var$__markAsModule($8c65da2e3f384fa6$var$monaco_editor_core_exports);
$8c65da2e3f384fa6$var$__reExport($8c65da2e3f384fa6$var$monaco_editor_core_exports, $f7M7F);
// src/basic-languages/handlebars/handlebars.ts
var $8c65da2e3f384fa6$var$EMPTY_ELEMENTS = [
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
var $8c65da2e3f384fa6$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
    comments: {
        blockComment: [
            "{{!--",
            "--}}"
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
            "{{",
            "}}"
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
            open: "<",
            close: ">"
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
    onEnterRules: [
        {
            beforeText: new RegExp(`<(?!(?:${$8c65da2e3f384fa6$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: $8c65da2e3f384fa6$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(?!(?:${$8c65da2e3f384fa6$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $8c65da2e3f384fa6$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $8c65da2e3f384fa6$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: "",
    tokenizer: {
        root: [
            [
                /\{\{!--/,
                "comment.block.start.handlebars",
                "@commentBlock"
            ],
            [
                /\{\{!/,
                "comment.start.handlebars",
                "@comment"
            ],
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.root"
                }
            ],
            [
                /<!DOCTYPE/,
                "metatag.html",
                "@doctype"
            ],
            [
                /<!--/,
                "comment.html",
                "@commentHtml"
            ],
            [
                /(<)(\w+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
                ]
            ],
            [
                /(<)(script)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@script"
                    }
                ]
            ],
            [
                /(<)(style)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@style"
                    }
                ]
            ],
            [
                /(<)([:\w]+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /(<\/)(\w+)/,
                [
                    "delimiter.html",
                    {
                        token: "tag.html",
                        next: "@otherTag"
                    }
                ]
            ],
            [
                /</,
                "delimiter.html"
            ],
            [
                /\{/,
                "delimiter.html"
            ],
            [
                /[^<{]+/
            ]
        ],
        doctype: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.comment"
                }
            ],
            [
                /[^>]+/,
                "metatag.content.html"
            ],
            [
                />/,
                "metatag.html",
                "@pop"
            ]
        ],
        comment: [
            [
                /\}\}/,
                "comment.end.handlebars",
                "@pop"
            ],
            [
                /./,
                "comment.content.handlebars"
            ]
        ],
        commentBlock: [
            [
                /--\}\}/,
                "comment.block.end.handlebars",
                "@pop"
            ],
            [
                /./,
                "comment.content.handlebars"
            ]
        ],
        commentHtml: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.comment"
                }
            ],
            [
                /-->/,
                "comment.html",
                "@pop"
            ],
            [
                /[^-]+/,
                "comment.content.html"
            ],
            [
                /./,
                "comment.content.html"
            ]
        ],
        otherTag: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.otherTag"
                }
            ],
            [
                /\/?>/,
                "delimiter.html",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.script"
                }
            ],
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
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
                    nextEmbedded: "text/javascript"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(<\/)(script\s*)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    {
                        token: "delimiter.html",
                        next: "@pop"
                    }
                ]
            ]
        ],
        scriptAfterType: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.scriptAfterType"
                }
            ],
            [
                /=/,
                "delimiter",
                "@scriptAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.scriptAfterTypeEquals"
                }
            ],
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
                    token: "delimiter.html",
                    next: "@scriptEmbedded.text/javascript",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.scriptWithCustomType.$S2"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInEmbeddedState.scriptEmbedded.$S2",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /<\/script/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        style: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.style"
                }
            ],
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
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
                    nextEmbedded: "text/css"
                }
            ],
            [
                /[ \t\r\n]+/
            ],
            [
                /(<\/)(style\s*)(>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    {
                        token: "delimiter.html",
                        next: "@pop"
                    }
                ]
            ]
        ],
        styleAfterType: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.styleAfterType"
                }
            ],
            [
                /=/,
                "delimiter",
                "@styleAfterTypeEquals"
            ],
            [
                />/,
                {
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.styleAfterTypeEquals"
                }
            ],
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
                    token: "delimiter.html",
                    next: "@styleEmbedded.text/css",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInSimpleState.styleWithCustomType.$S2"
                }
            ],
            [
                />/,
                {
                    token: "delimiter.html",
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
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@handlebarsInEmbeddedState.styleEmbedded.$S2",
                    nextEmbedded: "@pop"
                }
            ],
            [
                /<\/style/,
                {
                    token: "@rematch",
                    next: "@pop",
                    nextEmbedded: "@pop"
                }
            ]
        ],
        handlebarsInSimpleState: [
            [
                /\{\{\{?/,
                "delimiter.handlebars"
            ],
            [
                /\}\}\}?/,
                {
                    token: "delimiter.handlebars",
                    switchTo: "@$S2.$S3"
                }
            ],
            {
                include: "handlebarsRoot"
            }
        ],
        handlebarsInEmbeddedState: [
            [
                /\{\{\{?/,
                "delimiter.handlebars"
            ],
            [
                /\}\}\}?/,
                {
                    token: "delimiter.handlebars",
                    switchTo: "@$S2.$S3",
                    nextEmbedded: "$S3"
                }
            ],
            {
                include: "handlebarsRoot"
            }
        ],
        handlebarsRoot: [
            [
                /"[^"]*"/,
                "string.handlebars"
            ],
            [
                /[#/][^\s}]+/,
                "keyword.helper.handlebars"
            ],
            [
                /else\b/,
                "keyword.helper.handlebars"
            ],
            [
                /[\s]+/
            ],
            [
                /[^}]/,
                "variable.parameter.handlebars"
            ]
        ]
    }
};

});


//# sourceMappingURL=handlebars.754f795c.js.map