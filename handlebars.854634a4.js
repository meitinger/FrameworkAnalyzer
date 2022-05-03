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
parcelRequire.register("e6xcx", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $a44b614be7a14130$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $a44b614be7a14130$export$789c912f57fe164c; });

var $eJmBa = parcelRequire("eJmBa");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $a44b614be7a14130$var$__defProp = Object.defineProperty;
var $a44b614be7a14130$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $a44b614be7a14130$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $a44b614be7a14130$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $a44b614be7a14130$var$__markAsModule = (target)=>$a44b614be7a14130$var$__defProp(target, "__esModule", {
        value: true
    })
;
var $a44b614be7a14130$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $a44b614be7a14130$var$__getOwnPropNames(module))if (!$a44b614be7a14130$var$__hasOwnProp.call(target, key) && key !== "default") $a44b614be7a14130$var$__defProp(target, key, {
            get: ()=>module[key]
            ,
            enumerable: !(desc = $a44b614be7a14130$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $a44b614be7a14130$var$monaco_editor_core_exports = {};
$a44b614be7a14130$var$__markAsModule($a44b614be7a14130$var$monaco_editor_core_exports);
$a44b614be7a14130$var$__reExport($a44b614be7a14130$var$monaco_editor_core_exports, $eJmBa);
// src/basic-languages/handlebars/handlebars.ts
var $a44b614be7a14130$var$EMPTY_ELEMENTS = [
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
var $a44b614be7a14130$export$c83be1687c028fc9 = {
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
            beforeText: new RegExp(`<(?!(?:${$a44b614be7a14130$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: $a44b614be7a14130$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp(`<(?!(?:${$a44b614be7a14130$var$EMPTY_ELEMENTS.join("|")}))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$`, "i"),
            action: {
                indentAction: $a44b614be7a14130$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $a44b614be7a14130$export$789c912f57fe164c = {
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


//# sourceMappingURL=handlebars.854634a4.js.map
