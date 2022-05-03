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
parcelRequire.register("hN0YV", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $cf37c635d4e6b4a8$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $cf37c635d4e6b4a8$export$789c912f57fe164c; });

var $2nnEZ = parcelRequire("2nnEZ");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $cf37c635d4e6b4a8$var$__defProp = Object.defineProperty;
var $cf37c635d4e6b4a8$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $cf37c635d4e6b4a8$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $cf37c635d4e6b4a8$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $cf37c635d4e6b4a8$var$__markAsModule = function(target) {
    return $cf37c635d4e6b4a8$var$__defProp(target, "__esModule", {
        value: true
    });
};
var $cf37c635d4e6b4a8$var$__reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!$cf37c635d4e6b4a8$var$__hasOwnProp.call(target, key) && key !== "default") $cf37c635d4e6b4a8$var$__defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = $cf37c635d4e6b4a8$var$__getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = $cf37c635d4e6b4a8$var$__getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
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
var $cf37c635d4e6b4a8$var$monaco_editor_core_exports = {};
$cf37c635d4e6b4a8$var$__markAsModule($cf37c635d4e6b4a8$var$monaco_editor_core_exports);
$cf37c635d4e6b4a8$var$__reExport($cf37c635d4e6b4a8$var$monaco_editor_core_exports, $2nnEZ);
// src/basic-languages/xml/xml.ts
var $cf37c635d4e6b4a8$export$c83be1687c028fc9 = {
    comments: {
        blockComment: [
            "<!--",
            "-->"
        ]
    },
    brackets: [
        [
            "<",
            ">"
        ]
    ],
    autoClosingPairs: [
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ],
    surroundingPairs: [
        {
            open: "<",
            close: ">"
        },
        {
            open: "'",
            close: "'"
        },
        {
            open: '"',
            close: '"'
        }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
            action: {
                indentAction: $cf37c635d4e6b4a8$var$monaco_editor_core_exports.languages.IndentAction.IndentOutdent
            }
        },
        {
            beforeText: new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
            action: {
                indentAction: $cf37c635d4e6b4a8$var$monaco_editor_core_exports.languages.IndentAction.Indent
            }
        }
    ]
};
var $cf37c635d4e6b4a8$export$789c912f57fe164c = {
    defaultToken: "",
    tokenPostfix: ".xml",
    ignoreCase: true,
    qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
    tokenizer: {
        root: [
            [
                /[^<&]+/,
                ""
            ],
            {
                include: "@whitespace"
            },
            [
                /(<)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "tag",
                        next: "@tag"
                    }
                ]
            ],
            [
                /(<\/)(@qualifiedName)(\s*)(>)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "tag"
                    },
                    "",
                    {
                        token: "delimiter"
                    }
                ]
            ],
            [
                /(<\?)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "metatag",
                        next: "@tag"
                    }
                ]
            ],
            [
                /(<\!)(@qualifiedName)/,
                [
                    {
                        token: "delimiter"
                    },
                    {
                        token: "metatag",
                        next: "@tag"
                    }
                ]
            ],
            [
                /<\!\[CDATA\[/,
                {
                    token: "delimiter.cdata",
                    next: "@cdata"
                }
            ],
            [
                /&\w+;/,
                "string.escape"
            ]
        ],
        cdata: [
            [
                /[^\]]+/,
                ""
            ],
            [
                /\]\]>/,
                {
                    token: "delimiter.cdata",
                    next: "@pop"
                }
            ],
            [
                /\]/,
                ""
            ]
        ],
        tag: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/,
                [
                    "attribute.name",
                    "",
                    "attribute.value"
                ]
            ],
            [
                /@qualifiedName/,
                "attribute.name"
            ],
            [
                /\?>/,
                {
                    token: "delimiter",
                    next: "@pop"
                }
            ],
            [
                /(\/)(>)/,
                [
                    {
                        token: "tag"
                    },
                    {
                        token: "delimiter",
                        next: "@pop"
                    }
                ]
            ],
            [
                />/,
                {
                    token: "delimiter",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /<!--/,
                {
                    token: "comment",
                    next: "@comment"
                }
            ]
        ],
        comment: [
            [
                /[^<\-]+/,
                "comment.content"
            ],
            [
                /-->/,
                {
                    token: "comment",
                    next: "@pop"
                }
            ],
            [
                /<!--/,
                "comment.content.invalid"
            ],
            [
                /[<\-]/,
                "comment.content"
            ]
        ]
    }
};

});

})();
//# sourceMappingURL=xml.68ef0353.js.map
