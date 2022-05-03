// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"70shU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "conf", function() {
    return conf;
});
parcelHelpers.export(exports, "language", function() {
    return language;
});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/pug/pug.ts
var conf = {
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
            open: '"',
            close: '"',
            notIn: [
                "string",
                "comment"
            ]
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
            open: "{",
            close: "}",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "[",
            close: "]",
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "(",
            close: ")",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    folding: {
        offSide: true
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: ".pug",
    ignoreCase: true,
    brackets: [
        {
            token: "delimiter.curly",
            open: "{",
            close: "}"
        },
        {
            token: "delimiter.array",
            open: "[",
            close: "]"
        },
        {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        }
    ],
    keywords: [
        "append",
        "block",
        "case",
        "default",
        "doctype",
        "each",
        "else",
        "extends",
        "for",
        "if",
        "in",
        "include",
        "mixin",
        "typeof",
        "unless",
        "var",
        "when"
    ],
    tags: [
        "a",
        "abbr",
        "acronym",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "basefont",
        "bdi",
        "bdo",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "center",
        "cite",
        "code",
        "col",
        "colgroup",
        "command",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "font",
        "footer",
        "form",
        "frame",
        "frameset",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "keygen",
        "kbd",
        "label",
        "li",
        "link",
        "map",
        "mark",
        "menu",
        "meta",
        "meter",
        "nav",
        "noframes",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strike",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "tracks",
        "tt",
        "u",
        "ul",
        "video",
        "wbr"
    ],
    symbols: /[\+\-\*\%\&\|\!\=\/\.\,\:]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [
                /^(\s*)([a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        "$2@tags": {
                            cases: {
                                "@eos": [
                                    "",
                                    "tag"
                                ],
                                "@default": [
                                    "",
                                    {
                                        token: "tag",
                                        next: "@tag.$1"
                                    }
                                ]
                            }
                        },
                        "$2@keywords": [
                            "",
                            {
                                token: "keyword.$2"
                            }
                        ],
                        "@default": [
                            "",
                            ""
                        ]
                    }
                }
            ],
            [
                /^(\s*)(#[a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        "@eos": [
                            "",
                            "tag.id"
                        ],
                        "@default": [
                            "",
                            {
                                token: "tag.id",
                                next: "@tag.$1"
                            }
                        ]
                    }
                }
            ],
            [
                /^(\s*)(\.[a-zA-Z_-][\w-]*)/,
                {
                    cases: {
                        "@eos": [
                            "",
                            "tag.class"
                        ],
                        "@default": [
                            "",
                            {
                                token: "tag.class",
                                next: "@tag.$1"
                            }
                        ]
                    }
                }
            ],
            [
                /^(\s*)(\|.*)$/,
                ""
            ],
            {
                include: "@whitespace"
            },
            [
                /[a-zA-Z_$][\w$]*/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": ""
                    }
                }
            ],
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /@symbols/,
                "delimiter"
            ],
            [
                /\d+\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /\d+/,
                "number"
            ],
            [
                /"/,
                "string",
                '@string."'
            ],
            [
                /'/,
                "string",
                "@string.'"
            ]
        ],
        tag: [
            [
                /(\.)(\s*$)/,
                [
                    {
                        token: "delimiter",
                        next: "@blockText.$S2."
                    },
                    ""
                ]
            ],
            [
                /\s+/,
                {
                    token: "",
                    next: "@simpleText"
                }
            ],
            [
                /#[a-zA-Z_-][\w-]*/,
                {
                    cases: {
                        "@eos": {
                            token: "tag.id",
                            next: "@pop"
                        },
                        "@default": "tag.id"
                    }
                }
            ],
            [
                /\.[a-zA-Z_-][\w-]*/,
                {
                    cases: {
                        "@eos": {
                            token: "tag.class",
                            next: "@pop"
                        },
                        "@default": "tag.class"
                    }
                }
            ],
            [
                /\(/,
                {
                    token: "delimiter.parenthesis",
                    next: "@attributeList"
                }
            ]
        ],
        simpleText: [
            [
                /[^#]+$/,
                {
                    token: "",
                    next: "@popall"
                }
            ],
            [
                /[^#]+/,
                {
                    token: ""
                }
            ],
            [
                /(#{)([^}]*)(})/,
                {
                    cases: {
                        "@eos": [
                            "interpolation.delimiter",
                            "interpolation",
                            {
                                token: "interpolation.delimiter",
                                next: "@popall"
                            }
                        ],
                        "@default": [
                            "interpolation.delimiter",
                            "interpolation",
                            "interpolation.delimiter"
                        ]
                    }
                }
            ],
            [
                /#$/,
                {
                    token: "",
                    next: "@popall"
                }
            ],
            [
                /#/,
                ""
            ]
        ],
        attributeList: [
            [
                /\s+/,
                ""
            ],
            [
                /(\w+)(\s*=\s*)("|')/,
                [
                    "attribute.name",
                    "delimiter",
                    {
                        token: "attribute.value",
                        next: "@value.$3"
                    }
                ]
            ],
            [
                /\w+/,
                "attribute.name"
            ],
            [
                /,/,
                {
                    cases: {
                        "@eos": {
                            token: "attribute.delimiter",
                            next: "@popall"
                        },
                        "@default": "attribute.delimiter"
                    }
                }
            ],
            [
                /\)$/,
                {
                    token: "delimiter.parenthesis",
                    next: "@popall"
                }
            ],
            [
                /\)/,
                {
                    token: "delimiter.parenthesis",
                    next: "@pop"
                }
            ]
        ],
        whitespace: [
            [
                /^(\s*)(\/\/.*)$/,
                {
                    token: "comment",
                    next: "@blockText.$1.comment"
                }
            ],
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
        blockText: [
            [
                /^\s+.*$/,
                {
                    cases: {
                        "($S2\\s+.*$)": {
                            token: "$S3"
                        },
                        "@default": {
                            token: "@rematch",
                            next: "@popall"
                        }
                    }
                }
            ],
            [
                /./,
                {
                    token: "@rematch",
                    next: "@popall"
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
        ],
        string: [
            [
                /[^\\"'#]+/,
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
                /@escapes/,
                {
                    cases: {
                        "@eos": {
                            token: "string.escape",
                            next: "@popall"
                        },
                        "@default": "string.escape"
                    }
                }
            ],
            [
                /\\./,
                {
                    cases: {
                        "@eos": {
                            token: "string.escape.invalid",
                            next: "@popall"
                        },
                        "@default": "string.escape.invalid"
                    }
                }
            ],
            [
                /(#{)([^}]*)(})/,
                [
                    "interpolation.delimiter",
                    "interpolation",
                    "interpolation.delimiter"
                ]
            ],
            [
                /#/,
                "string"
            ],
            [
                /["']/,
                {
                    cases: {
                        "$#==$S2": {
                            token: "string",
                            next: "@pop"
                        },
                        "@default": {
                            token: "string"
                        }
                    }
                }
            ]
        ],
        value: [
            [
                /[^\\"']+/,
                {
                    cases: {
                        "@eos": {
                            token: "attribute.value",
                            next: "@popall"
                        },
                        "@default": "attribute.value"
                    }
                }
            ],
            [
                /\\./,
                {
                    cases: {
                        "@eos": {
                            token: "attribute.value",
                            next: "@popall"
                        },
                        "@default": "attribute.value"
                    }
                }
            ],
            [
                /["']/,
                {
                    cases: {
                        "$#==$S2": {
                            token: "attribute.value",
                            next: "@pop"
                        },
                        "@default": {
                            token: "attribute.value"
                        }
                    }
                }
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=pug.12166a92.js.map
