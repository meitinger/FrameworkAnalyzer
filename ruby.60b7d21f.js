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
})({"49DGz":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/ruby/ruby.ts
var conf = {
    comments: {
        lineComment: "#",
        blockComment: [
            "=begin",
            "=end"
        ]
    },
    brackets: [
        [
            "(",
            ")"
        ],
        [
            "{",
            "}"
        ],
        [
            "[",
            "]"
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
    ],
    indentationRules: {
        increaseIndentPattern: new RegExp("^\\s*((begin|class|(private|protected)\\s+def|def|else|elsif|ensure|for|if|module|rescue|unless|until|when|while|case)|([^#]*\\sdo\\b)|([^#]*=\\s*(case|if|unless)))\\b([^#\\{;]|(\"|'|/).*\\4)*(#.*)?$"),
        decreaseIndentPattern: new RegExp("^\\s*([}\\]]([,)]?\\s*(#|$)|\\.[a-zA-Z_]\\w*\\b)|(end|rescue|ensure|else|elsif|when)\\b)")
    }
};
var language = {
    tokenPostfix: ".ruby",
    keywords: [
        "__LINE__",
        "__ENCODING__",
        "__FILE__",
        "BEGIN",
        "END",
        "alias",
        "and",
        "begin",
        "break",
        "case",
        "class",
        "def",
        "defined?",
        "do",
        "else",
        "elsif",
        "end",
        "ensure",
        "for",
        "false",
        "if",
        "in",
        "module",
        "next",
        "nil",
        "not",
        "or",
        "redo",
        "rescue",
        "retry",
        "return",
        "self",
        "super",
        "then",
        "true",
        "undef",
        "unless",
        "until",
        "when",
        "while",
        "yield"
    ],
    keywordops: [
        "::",
        "..",
        "...",
        "?",
        ":",
        "=>"
    ],
    builtins: [
        "require",
        "public",
        "private",
        "include",
        "extend",
        "attr_reader",
        "protected",
        "private_class_method",
        "protected_class_method",
        "new"
    ],
    declarations: [
        "module",
        "class",
        "def",
        "case",
        "do",
        "begin",
        "for",
        "if",
        "while",
        "until",
        "unless"
    ],
    linedecls: [
        "def",
        "case",
        "do",
        "begin",
        "for",
        "if",
        "while",
        "until",
        "unless"
    ],
    operators: [
        "^",
        "&",
        "|",
        "<=>",
        "==",
        "===",
        "!~",
        "=~",
        ">",
        ">=",
        "<",
        "<=",
        "<<",
        ">>",
        "+",
        "-",
        "*",
        "/",
        "%",
        "**",
        "~",
        "+@",
        "-@",
        "[]",
        "[]=",
        "`",
        "+=",
        "-=",
        "*=",
        "**=",
        "/=",
        "^=",
        "%=",
        "<<=",
        ">>=",
        "&=",
        "&&=",
        "||=",
        "|="
    ],
    brackets: [
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        },
        {
            open: "{",
            close: "}",
            token: "delimiter.curly"
        },
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        }
    ],
    symbols: /[=><!~?:&|+\-*\/\^%\.]+/,
    escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
    escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
    decpart: /\d(_?\d)*/,
    decimal: /0|@decpart/,
    delim: /[^a-zA-Z0-9\s\n\r]/,
    heredelim: /(?:\w+|'[^']*'|"[^"]*"|`[^`]*`)/,
    regexpctl: /[(){}\[\]\$\^|\-*+?\.]/,
    regexpesc: /\\(?:[AzZbBdDfnrstvwWn0\\\/]|@regexpctl|c[A-Z]|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4})?/,
    tokenizer: {
        root: [
            [
                /^(\s*)([a-z_]\w*[!?=]?)/,
                [
                    "white",
                    {
                        cases: {
                            "for|until|while": {
                                token: "keyword.$2",
                                next: "@dodecl.$2"
                            },
                            "@declarations": {
                                token: "keyword.$2",
                                next: "@root.$2"
                            },
                            end: {
                                token: "keyword.$S2",
                                next: "@pop"
                            },
                            "@keywords": "keyword",
                            "@builtins": "predefined",
                            "@default": "identifier"
                        }
                    }
                ]
            ],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        "if|unless|while|until": {
                            token: "keyword.$0x",
                            next: "@modifier.$0x"
                        },
                        for: {
                            token: "keyword.$2",
                            next: "@dodecl.$2"
                        },
                        "@linedecls": {
                            token: "keyword.$0",
                            next: "@root.$0"
                        },
                        end: {
                            token: "keyword.$S2",
                            next: "@pop"
                        },
                        "@keywords": "keyword",
                        "@builtins": "predefined",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[A-Z][\w]*[!?=]?/,
                "constructor.identifier"
            ],
            [
                /\$[\w]*/,
                "global.constant"
            ],
            [
                /@[\w]*/,
                "namespace.instance.identifier"
            ],
            [
                /@@@[\w]*/,
                "namespace.class.identifier"
            ],
            [
                /<<[-~](@heredelim).*/,
                {
                    token: "string.heredoc.delimiter",
                    next: "@heredoc.$1"
                }
            ],
            [
                /[ \t\r\n]+<<(@heredelim).*/,
                {
                    token: "string.heredoc.delimiter",
                    next: "@heredoc.$1"
                }
            ],
            [
                /^<<(@heredelim).*/,
                {
                    token: "string.heredoc.delimiter",
                    next: "@heredoc.$1"
                }
            ],
            {
                include: "@whitespace"
            },
            [
                /"/,
                {
                    token: "string.d.delim",
                    next: '@dstring.d."'
                }
            ],
            [
                /'/,
                {
                    token: "string.sq.delim",
                    next: "@sstring.sq"
                }
            ],
            [
                /%([rsqxwW]|Q?)/,
                {
                    token: "@rematch",
                    next: "pstring"
                }
            ],
            [
                /`/,
                {
                    token: "string.x.delim",
                    next: "@dstring.x.`"
                }
            ],
            [
                /:(\w|[$@])\w*[!?=]?/,
                "string.s"
            ],
            [
                /:"/,
                {
                    token: "string.s.delim",
                    next: '@dstring.s."'
                }
            ],
            [
                /:'/,
                {
                    token: "string.s.delim",
                    next: "@sstring.s"
                }
            ],
            [
                /\/(?=(\\\/|[^\/\n])+\/)/,
                {
                    token: "regexp.delim",
                    next: "@regexp"
                }
            ],
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@keywordops": "keyword",
                        "@operators": "operator",
                        "@default": ""
                    }
                }
            ],
            [
                /[;,]/,
                "delimiter"
            ],
            [
                /0[xX][0-9a-fA-F](_?[0-9a-fA-F])*/,
                "number.hex"
            ],
            [
                /0[_oO][0-7](_?[0-7])*/,
                "number.octal"
            ],
            [
                /0[bB][01](_?[01])*/,
                "number.binary"
            ],
            [
                /0[dD]@decpart/,
                "number"
            ],
            [
                /@decimal((\.@decpart)?([eE][\-+]?@decpart)?)/,
                {
                    cases: {
                        $1: "number.float",
                        "@default": "number"
                    }
                }
            ]
        ],
        dodecl: [
            [
                /^/,
                {
                    token: "",
                    switchTo: "@root.$S2"
                }
            ],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        end: {
                            token: "keyword.$S2",
                            next: "@pop"
                        },
                        do: {
                            token: "keyword",
                            switchTo: "@root.$S2"
                        },
                        "@linedecls": {
                            token: "@rematch",
                            switchTo: "@root.$S2"
                        },
                        "@keywords": "keyword",
                        "@builtins": "predefined",
                        "@default": "identifier"
                    }
                }
            ],
            {
                include: "@root"
            }
        ],
        modifier: [
            [
                /^/,
                "",
                "@pop"
            ],
            [
                /[a-z_]\w*[!?=]?/,
                {
                    cases: {
                        end: {
                            token: "keyword.$S2",
                            next: "@pop"
                        },
                        "then|else|elsif|do": {
                            token: "keyword",
                            switchTo: "@root.$S2"
                        },
                        "@linedecls": {
                            token: "@rematch",
                            switchTo: "@root.$S2"
                        },
                        "@keywords": "keyword",
                        "@builtins": "predefined",
                        "@default": "identifier"
                    }
                }
            ],
            {
                include: "@root"
            }
        ],
        sstring: [
            [
                /[^\\']+/,
                "string.$S2"
            ],
            [
                /\\\\|\\'|\\$/,
                "string.$S2.escape"
            ],
            [
                /\\./,
                "string.$S2.invalid"
            ],
            [
                /'/,
                {
                    token: "string.$S2.delim",
                    next: "@pop"
                }
            ]
        ],
        dstring: [
            [
                /[^\\`"#]+/,
                "string.$S2"
            ],
            [
                /#/,
                "string.$S2.escape",
                "@interpolated"
            ],
            [
                /\\$/,
                "string.$S2.escape"
            ],
            [
                /@escapes/,
                "string.$S2.escape"
            ],
            [
                /\\./,
                "string.$S2.escape.invalid"
            ],
            [
                /[`"]/,
                {
                    cases: {
                        "$#==$S3": {
                            token: "string.$S2.delim",
                            next: "@pop"
                        },
                        "@default": "string.$S2"
                    }
                }
            ]
        ],
        heredoc: [
            [
                /^(\s*)(@heredelim)$/,
                {
                    cases: {
                        "$2==$S2": [
                            "string.heredoc",
                            {
                                token: "string.heredoc.delimiter",
                                next: "@pop"
                            }
                        ],
                        "@default": [
                            "string.heredoc",
                            "string.heredoc"
                        ]
                    }
                }
            ],
            [
                /.*/,
                "string.heredoc"
            ]
        ],
        interpolated: [
            [
                /\$\w*/,
                "global.constant",
                "@pop"
            ],
            [
                /@\w*/,
                "namespace.class.identifier",
                "@pop"
            ],
            [
                /@@@\w*/,
                "namespace.instance.identifier",
                "@pop"
            ],
            [
                /[{]/,
                {
                    token: "string.escape.curly",
                    switchTo: "@interpolated_compound"
                }
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        interpolated_compound: [
            [
                /[}]/,
                {
                    token: "string.escape.curly",
                    next: "@pop"
                }
            ],
            {
                include: "@root"
            }
        ],
        pregexp: [
            {
                include: "@whitespace"
            },
            [
                /[^\(\{\[\\]/,
                {
                    cases: {
                        "$#==$S3": {
                            token: "regexp.delim",
                            next: "@pop"
                        },
                        "$#==$S2": {
                            token: "regexp.delim",
                            next: "@push"
                        },
                        "~[)}\\]]": "@brackets.regexp.escape.control",
                        "~@regexpctl": "regexp.escape.control",
                        "@default": "regexp"
                    }
                }
            ],
            {
                include: "@regexcontrol"
            }
        ],
        regexp: [
            {
                include: "@regexcontrol"
            },
            [
                /[^\\\/]/,
                "regexp"
            ],
            [
                "/[ixmp]*",
                {
                    token: "regexp.delim"
                },
                "@pop"
            ]
        ],
        regexcontrol: [
            [
                /(\{)(\d+(?:,\d*)?)(\})/,
                [
                    "@brackets.regexp.escape.control",
                    "regexp.escape.control",
                    "@brackets.regexp.escape.control"
                ]
            ],
            [
                /(\[)(\^?)/,
                [
                    "@brackets.regexp.escape.control",
                    {
                        token: "regexp.escape.control",
                        next: "@regexrange"
                    }
                ]
            ],
            [
                /(\()(\?[:=!])/,
                [
                    "@brackets.regexp.escape.control",
                    "regexp.escape.control"
                ]
            ],
            [
                /\(\?#/,
                {
                    token: "regexp.escape.control",
                    next: "@regexpcomment"
                }
            ],
            [
                /[()]/,
                "@brackets.regexp.escape.control"
            ],
            [
                /@regexpctl/,
                "regexp.escape.control"
            ],
            [
                /\\$/,
                "regexp.escape"
            ],
            [
                /@regexpesc/,
                "regexp.escape"
            ],
            [
                /\\\./,
                "regexp.invalid"
            ],
            [
                /#/,
                "regexp.escape",
                "@interpolated"
            ]
        ],
        regexrange: [
            [
                /-/,
                "regexp.escape.control"
            ],
            [
                /\^/,
                "regexp.invalid"
            ],
            [
                /\\$/,
                "regexp.escape"
            ],
            [
                /@regexpesc/,
                "regexp.escape"
            ],
            [
                /[^\]]/,
                "regexp"
            ],
            [
                /\]/,
                "@brackets.regexp.escape.control",
                "@pop"
            ]
        ],
        regexpcomment: [
            [
                /[^)]+/,
                "comment"
            ],
            [
                /\)/,
                {
                    token: "regexp.escape.control",
                    next: "@pop"
                }
            ]
        ],
        pstring: [
            [
                /%([qws])\(/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qstring.$1.(.)"
                }
            ],
            [
                /%([qws])\[/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qstring.$1.[.]"
                }
            ],
            [
                /%([qws])\{/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qstring.$1.{.}"
                }
            ],
            [
                /%([qws])</,
                {
                    token: "string.$1.delim",
                    switchTo: "@qstring.$1.<.>"
                }
            ],
            [
                /%([qws])(@delim)/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qstring.$1.$2.$2"
                }
            ],
            [
                /%r\(/,
                {
                    token: "regexp.delim",
                    switchTo: "@pregexp.(.)"
                }
            ],
            [
                /%r\[/,
                {
                    token: "regexp.delim",
                    switchTo: "@pregexp.[.]"
                }
            ],
            [
                /%r\{/,
                {
                    token: "regexp.delim",
                    switchTo: "@pregexp.{.}"
                }
            ],
            [
                /%r</,
                {
                    token: "regexp.delim",
                    switchTo: "@pregexp.<.>"
                }
            ],
            [
                /%r(@delim)/,
                {
                    token: "regexp.delim",
                    switchTo: "@pregexp.$1.$1"
                }
            ],
            [
                /%(x|W|Q?)\(/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qqstring.$1.(.)"
                }
            ],
            [
                /%(x|W|Q?)\[/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qqstring.$1.[.]"
                }
            ],
            [
                /%(x|W|Q?)\{/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qqstring.$1.{.}"
                }
            ],
            [
                /%(x|W|Q?)</,
                {
                    token: "string.$1.delim",
                    switchTo: "@qqstring.$1.<.>"
                }
            ],
            [
                /%(x|W|Q?)(@delim)/,
                {
                    token: "string.$1.delim",
                    switchTo: "@qqstring.$1.$2.$2"
                }
            ],
            [
                /%([rqwsxW]|Q?)./,
                {
                    token: "invalid",
                    next: "@pop"
                }
            ],
            [
                /./,
                {
                    token: "invalid",
                    next: "@pop"
                }
            ]
        ],
        qstring: [
            [
                /\\$/,
                "string.$S2.escape"
            ],
            [
                /\\./,
                "string.$S2.escape"
            ],
            [
                /./,
                {
                    cases: {
                        "$#==$S4": {
                            token: "string.$S2.delim",
                            next: "@pop"
                        },
                        "$#==$S3": {
                            token: "string.$S2.delim",
                            next: "@push"
                        },
                        "@default": "string.$S2"
                    }
                }
            ]
        ],
        qqstring: [
            [
                /#/,
                "string.$S2.escape",
                "@interpolated"
            ],
            {
                include: "@qstring"
            }
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /^\s*=begin\b/,
                "comment",
                "@comment"
            ],
            [
                /#.*$/,
                "comment"
            ]
        ],
        comment: [
            [
                /[^=]+/,
                "comment"
            ],
            [
                /^\s*=begin\b/,
                "comment.invalid"
            ],
            [
                /^\s*=end\b.*/,
                "comment",
                "@pop"
            ],
            [
                /[=]/,
                "comment"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=ruby.60b7d21f.js.map
