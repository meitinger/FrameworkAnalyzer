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
parcelRequire.register("gyZgI", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $c0ef58fd2f9d2b24$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $c0ef58fd2f9d2b24$export$789c912f57fe164c; });

var $jKka5 = parcelRequire("jKka5");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $c0ef58fd2f9d2b24$var$__defProp = Object.defineProperty;
var $c0ef58fd2f9d2b24$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $c0ef58fd2f9d2b24$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $c0ef58fd2f9d2b24$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $c0ef58fd2f9d2b24$var$__markAsModule = function(target) {
    return $c0ef58fd2f9d2b24$var$__defProp(target, "__esModule", {
        value: true
    });
};
var $c0ef58fd2f9d2b24$var$__reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!$c0ef58fd2f9d2b24$var$__hasOwnProp.call(target, key) && key !== "default") $c0ef58fd2f9d2b24$var$__defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = $c0ef58fd2f9d2b24$var$__getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = $c0ef58fd2f9d2b24$var$__getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
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
var $c0ef58fd2f9d2b24$var$monaco_editor_core_exports = {};
$c0ef58fd2f9d2b24$var$__markAsModule($c0ef58fd2f9d2b24$var$monaco_editor_core_exports);
$c0ef58fd2f9d2b24$var$__reExport($c0ef58fd2f9d2b24$var$monaco_editor_core_exports, $jKka5);
// src/basic-languages/liquid/liquid.ts
var $c0ef58fd2f9d2b24$var$EMPTY_ELEMENTS = [
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
var $c0ef58fd2f9d2b24$export$c83be1687c028fc9 = {
    wordPattern: /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g,
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
            "{%",
            "%}"
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
            open: "%",
            close: "%"
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
            beforeText: new RegExp("<(?!(?:".concat($c0ef58fd2f9d2b24$var$EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
            afterText: /^<\/(\w[\w\d]*)\s*>$/i,
            action: {
                indentAction: $c0ef58fd2f9d2b24$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp("<(?!(?:".concat($c0ef58fd2f9d2b24$var$EMPTY_ELEMENTS.join("|"), "))(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$"), "i"),
            action: {
                indentAction: $c0ef58fd2f9d2b24$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $c0ef58fd2f9d2b24$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: "",
    builtinTags: [
        "if",
        "else",
        "elseif",
        "endif",
        "render",
        "assign",
        "capture",
        "endcapture",
        "case",
        "endcase",
        "comment",
        "endcomment",
        "cycle",
        "decrement",
        "for",
        "endfor",
        "include",
        "increment",
        "layout",
        "raw",
        "endraw",
        "render",
        "tablerow",
        "endtablerow",
        "unless",
        "endunless"
    ],
    builtinFilters: [
        "abs",
        "append",
        "at_least",
        "at_most",
        "capitalize",
        "ceil",
        "compact",
        "date",
        "default",
        "divided_by",
        "downcase",
        "escape",
        "escape_once",
        "first",
        "floor",
        "join",
        "json",
        "last",
        "lstrip",
        "map",
        "minus",
        "modulo",
        "newline_to_br",
        "plus",
        "prepend",
        "remove",
        "remove_first",
        "replace",
        "replace_first",
        "reverse",
        "round",
        "rstrip",
        "size",
        "slice",
        "sort",
        "sort_natural",
        "split",
        "strip",
        "strip_html",
        "strip_newlines",
        "times",
        "truncate",
        "truncatewords",
        "uniq",
        "upcase",
        "url_decode",
        "url_encode",
        "where"
    ],
    constants: [
        "true",
        "false"
    ],
    operators: [
        "==",
        "!=",
        ">",
        "<",
        ">=",
        "<="
    ],
    symbol: /[=><!]+/,
    identifier: /[a-zA-Z_][\w]*/,
    tokenizer: {
        root: [
            [
                /\{\%\s*comment\s*\%\}/,
                "comment.start.liquid",
                "@comment"
            ],
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.root"
                }
            ],
            [
                /\{\%/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.root"
                }
            ],
            [
                /(<)([\w\-]+)(\/>)/,
                [
                    "delimiter.html",
                    "tag.html",
                    "delimiter.html"
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
                /(<\/)([\w\-]+)/,
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
        comment: [
            [
                /\{\%\s*endcomment\s*\%\}/,
                "comment.end.liquid",
                "@pop"
            ],
            [
                /./,
                "comment.content.liquid"
            ]
        ],
        otherTag: [
            [
                /\{\{/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.otherTag"
                }
            ],
            [
                /\{\%/,
                {
                    token: "@rematch",
                    switchTo: "@liquidState.otherTag"
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
        liquidState: [
            [
                /\{\{/,
                "delimiter.output.liquid"
            ],
            [
                /\}\}/,
                {
                    token: "delimiter.output.liquid",
                    switchTo: "@$S2.$S3"
                }
            ],
            [
                /\{\%/,
                "delimiter.tag.liquid"
            ],
            [
                /raw\s*\%\}/,
                "delimiter.tag.liquid",
                "@liquidRaw"
            ],
            [
                /\%\}/,
                {
                    token: "delimiter.tag.liquid",
                    switchTo: "@$S2.$S3"
                }
            ],
            {
                include: "liquidRoot"
            }
        ],
        liquidRaw: [
            [
                /^(?!\{\%\s*endraw\s*\%\}).+/
            ],
            [
                /\{\%/,
                "delimiter.tag.liquid"
            ],
            [
                /@identifier/
            ],
            [
                /\%\}/,
                {
                    token: "delimiter.tag.liquid",
                    next: "@root"
                }
            ]
        ],
        liquidRoot: [
            [
                /\d+(\.\d+)?/,
                "number.liquid"
            ],
            [
                /"[^"]*"/,
                "string.liquid"
            ],
            [
                /'[^']*'/,
                "string.liquid"
            ],
            [
                /\s+/
            ],
            [
                /@symbol/,
                {
                    cases: {
                        "@operators": "operator.liquid",
                        "@default": ""
                    }
                }
            ],
            [
                /\./
            ],
            [
                /@identifier/,
                {
                    cases: {
                        "@constants": "keyword.liquid",
                        "@builtinFilters": "predefined.liquid",
                        "@builtinTags": "predefined.liquid",
                        "@default": "variable.liquid"
                    }
                }
            ],
            [
                /[^}|%]/,
                "variable.liquid"
            ]
        ]
    }
};

});

})();
//# sourceMappingURL=liquid.39427d3a.js.map
