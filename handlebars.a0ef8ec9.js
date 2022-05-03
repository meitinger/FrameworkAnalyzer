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
parcelRequire.register("2BGn4", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $1e5fe77e9bd538e7$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $1e5fe77e9bd538e7$export$789c912f57fe164c; });

var $2nnEZ = parcelRequire("2nnEZ");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $1e5fe77e9bd538e7$var$__defProp = Object.defineProperty;
var $1e5fe77e9bd538e7$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $1e5fe77e9bd538e7$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $1e5fe77e9bd538e7$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $1e5fe77e9bd538e7$var$__markAsModule = function(target) {
    return $1e5fe77e9bd538e7$var$__defProp(target, "__esModule", {
        value: true
    });
};
var $1e5fe77e9bd538e7$var$__reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!$1e5fe77e9bd538e7$var$__hasOwnProp.call(target, key) && key !== "default") $1e5fe77e9bd538e7$var$__defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = $1e5fe77e9bd538e7$var$__getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = $1e5fe77e9bd538e7$var$__getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $1e5fe77e9bd538e7$var$monaco_editor_core_exports = {};
$1e5fe77e9bd538e7$var$__markAsModule($1e5fe77e9bd538e7$var$monaco_editor_core_exports);
$1e5fe77e9bd538e7$var$__reExport($1e5fe77e9bd538e7$var$monaco_editor_core_exports, $2nnEZ);
// src/basic-languages/handlebars/handlebars.ts
var $1e5fe77e9bd538e7$var$EMPTY_ELEMENTS = [
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
var $1e5fe77e9bd538e7$export$c83be1687c028fc9 = {
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
            beforeText: new RegExp("<(?!(?:".concat($1e5fe77e9bd538e7$var$EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: $1e5fe77e9bd538e7$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp("<(?!(?:".concat($1e5fe77e9bd538e7$var$EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
            action: {
                indentAction: $1e5fe77e9bd538e7$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $1e5fe77e9bd538e7$export$789c912f57fe164c = {
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

})();
//# sourceMappingURL=handlebars.a0ef8ec9.js.map
