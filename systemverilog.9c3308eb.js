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
})({"k4LLg":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/systemverilog/systemverilog.ts
var conf = {
    comments: {
        lineComment: "//",
        blockComment: [
            "/*",
            "*/"
        ]
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
        ],
        [
            "begin",
            "end"
        ],
        [
            "case",
            "endcase"
        ],
        [
            "casex",
            "endcase"
        ],
        [
            "casez",
            "endcase"
        ],
        [
            "checker",
            "endchecker"
        ],
        [
            "class",
            "endclass"
        ],
        [
            "clocking",
            "endclocking"
        ],
        [
            "config",
            "endconfig"
        ],
        [
            "function",
            "endfunction"
        ],
        [
            "generate",
            "endgenerate"
        ],
        [
            "group",
            "endgroup"
        ],
        [
            "interface",
            "endinterface"
        ],
        [
            "module",
            "endmodule"
        ],
        [
            "package",
            "endpackage"
        ],
        [
            "primitive",
            "endprimitive"
        ],
        [
            "program",
            "endprogram"
        ],
        [
            "property",
            "endproperty"
        ],
        [
            "specify",
            "endspecify"
        ],
        [
            "sequence",
            "endsequence"
        ],
        [
            "table",
            "endtable"
        ],
        [
            "task",
            "endtask"
        ]
    ],
    autoClosingPairs: [
        {
            open: "[",
            close: "]"
        },
        {
            open: "{",
            close: "}"
        },
        {
            open: "(",
            close: ")"
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
            open: '"',
            close: '"',
            notIn: [
                "string"
            ]
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
    folding: {
        offSide: false,
        markers: {
            start: new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:begin|case(x|z)?|class|clocking|config|covergroup|function|generate|interface|module|package|primitive|property|program|sequence|specify|table|task)\\b"),
            end: new RegExp("^(?:\\s*|.*(?!\\/[\\/\\*])[^\\w])(?:end|endcase|endclass|endclocking|endconfig|endgroup|endfunction|endgenerate|endinterface|endmodule|endpackage|endprimitive|endproperty|endprogram|endsequence|endspecify|endtable|endtask)\\b")
        }
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: ".sv",
    brackets: [
        {
            token: "delimiter.curly",
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
        },
        {
            token: "delimiter.angle",
            open: "<",
            close: ">"
        }
    ],
    keywords: [
        "accept_on",
        "alias",
        "always",
        "always_comb",
        "always_ff",
        "always_latch",
        "and",
        "assert",
        "assign",
        "assume",
        "automatic",
        "before",
        "begin",
        "bind",
        "bins",
        "binsof",
        "bit",
        "break",
        "buf",
        "bufif0",
        "bufif1",
        "byte",
        "case",
        "casex",
        "casez",
        "cell",
        "chandle",
        "checker",
        "class",
        "clocking",
        "cmos",
        "config",
        "const",
        "constraint",
        "context",
        "continue",
        "cover",
        "covergroup",
        "coverpoint",
        "cross",
        "deassign",
        "default",
        "defparam",
        "design",
        "disable",
        "dist",
        "do",
        "edge",
        "else",
        "end",
        "endcase",
        "endchecker",
        "endclass",
        "endclocking",
        "endconfig",
        "endfunction",
        "endgenerate",
        "endgroup",
        "endinterface",
        "endmodule",
        "endpackage",
        "endprimitive",
        "endprogram",
        "endproperty",
        "endspecify",
        "endsequence",
        "endtable",
        "endtask",
        "enum",
        "event",
        "eventually",
        "expect",
        "export",
        "extends",
        "extern",
        "final",
        "first_match",
        "for",
        "force",
        "foreach",
        "forever",
        "fork",
        "forkjoin",
        "function",
        "generate",
        "genvar",
        "global",
        "highz0",
        "highz1",
        "if",
        "iff",
        "ifnone",
        "ignore_bins",
        "illegal_bins",
        "implements",
        "implies",
        "import",
        "incdir",
        "include",
        "initial",
        "inout",
        "input",
        "inside",
        "instance",
        "int",
        "integer",
        "interconnect",
        "interface",
        "intersect",
        "join",
        "join_any",
        "join_none",
        "large",
        "let",
        "liblist",
        "library",
        "local",
        "localparam",
        "logic",
        "longint",
        "macromodule",
        "matches",
        "medium",
        "modport",
        "module",
        "nand",
        "negedge",
        "nettype",
        "new",
        "nexttime",
        "nmos",
        "nor",
        "noshowcancelled",
        "not",
        "notif0",
        "notif1",
        "null",
        "or",
        "output",
        "package",
        "packed",
        "parameter",
        "pmos",
        "posedge",
        "primitive",
        "priority",
        "program",
        "property",
        "protected",
        "pull0",
        "pull1",
        "pulldown",
        "pullup",
        "pulsestyle_ondetect",
        "pulsestyle_onevent",
        "pure",
        "rand",
        "randc",
        "randcase",
        "randsequence",
        "rcmos",
        "real",
        "realtime",
        "ref",
        "reg",
        "reject_on",
        "release",
        "repeat",
        "restrict",
        "return",
        "rnmos",
        "rpmos",
        "rtran",
        "rtranif0",
        "rtranif1",
        "s_always",
        "s_eventually",
        "s_nexttime",
        "s_until",
        "s_until_with",
        "scalared",
        "sequence",
        "shortint",
        "shortreal",
        "showcancelled",
        "signed",
        "small",
        "soft",
        "solve",
        "specify",
        "specparam",
        "static",
        "string",
        "strong",
        "strong0",
        "strong1",
        "struct",
        "super",
        "supply0",
        "supply1",
        "sync_accept_on",
        "sync_reject_on",
        "table",
        "tagged",
        "task",
        "this",
        "throughout",
        "time",
        "timeprecision",
        "timeunit",
        "tran",
        "tranif0",
        "tranif1",
        "tri",
        "tri0",
        "tri1",
        "triand",
        "trior",
        "trireg",
        "type",
        "typedef",
        "union",
        "unique",
        "unique0",
        "unsigned",
        "until",
        "until_with",
        "untyped",
        "use",
        "uwire",
        "var",
        "vectored",
        "virtual",
        "void",
        "wait",
        "wait_order",
        "wand",
        "weak",
        "weak0",
        "weak1",
        "while",
        "wildcard",
        "wire",
        "with",
        "within",
        "wor",
        "xnor",
        "xor"
    ],
    builtin_gates: [
        "and",
        "nand",
        "nor",
        "or",
        "xor",
        "xnor",
        "buf",
        "not",
        "bufif0",
        "bufif1",
        "notif1",
        "notif0",
        "cmos",
        "nmos",
        "pmos",
        "rcmos",
        "rnmos",
        "rpmos",
        "tran",
        "tranif1",
        "tranif0",
        "rtran",
        "rtranif1",
        "rtranif0"
    ],
    operators: [
        "=",
        "+=",
        "-=",
        "*=",
        "/=",
        "%=",
        "&=",
        "|=",
        "^=",
        "<<=",
        ">>+",
        "<<<=",
        ">>>=",
        "?",
        ":",
        "+",
        "-",
        "!",
        "~",
        "&",
        "~&",
        "|",
        "~|",
        "^",
        "~^",
        "^~",
        "+",
        "-",
        "*",
        "/",
        "%",
        "==",
        "!=",
        "===",
        "!==",
        "==?",
        "!=?",
        "&&",
        "||",
        "**",
        "<",
        "<=",
        ">",
        ">=",
        "&",
        "|",
        "^",
        ">>",
        "<<",
        ">>>",
        "<<<",
        "++",
        "--",
        "->",
        "<->",
        "inside",
        "dist",
        "::",
        "+:",
        "-:",
        "*>",
        "&&&",
        "|->",
        "|=>",
        "#=#"
    ],
    symbols: /[=><!~?:&|+\-*\/\^%#]+/,
    escapes: /%%|\\(?:[antvf\\"']|x[0-9A-Fa-f]{1,2}|[0-7]{1,3})/,
    identifier: /(?:[a-zA-Z_][a-zA-Z0-9_$\.]*|\\\S+ )/,
    systemcall: /[$][a-zA-Z0-9_]+/,
    timeunits: /s|ms|us|ns|ps|fs/,
    tokenizer: {
        root: [
            [
                /^(\s*)(@identifier)/,
                [
                    "",
                    {
                        cases: {
                            "@builtin_gates": {
                                token: "keyword.$2",
                                next: "@module_instance"
                            },
                            table: {
                                token: "keyword.$2",
                                next: "@table"
                            },
                            "@keywords": {
                                token: "keyword.$2"
                            },
                            "@default": {
                                token: "identifier",
                                next: "@module_instance"
                            }
                        }
                    }
                ]
            ],
            [
                /^\s*`include/,
                {
                    token: "keyword.directive.include",
                    next: "@include"
                }
            ],
            [
                /^\s*`\s*\w+/,
                "keyword"
            ],
            {
                include: "@identifier_or_keyword"
            },
            {
                include: "@whitespace"
            },
            [
                /\(\*.*\*\)/,
                "annotation"
            ],
            [
                /@systemcall/,
                "variable.predefined"
            ],
            [
                /[{}()\[\]]/,
                "@brackets"
            ],
            [
                /[<>](?!@symbols)/,
                "@brackets"
            ],
            [
                /@symbols/,
                {
                    cases: {
                        "@operators": "delimiter",
                        "@default": ""
                    }
                }
            ],
            {
                include: "@numbers"
            },
            [
                /[;,.]/,
                "delimiter"
            ],
            {
                include: "@strings"
            }
        ],
        identifier_or_keyword: [
            [
                /@identifier/,
                {
                    cases: {
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": "identifier"
                    }
                }
            ]
        ],
        numbers: [
            [
                /\d+?[\d_]*(?:\.[\d_]+)?[eE][\-+]?\d+/,
                "number.float"
            ],
            [
                /\d+?[\d_]*\.[\d_]+(?:\s*@timeunits)?/,
                "number.float"
            ],
            [
                /(?:\d+?[\d_]*\s*)?'[sS]?[dD]\s*[0-9xXzZ?]+?[0-9xXzZ?_]*/,
                "number"
            ],
            [
                /(?:\d+?[\d_]*\s*)?'[sS]?[bB]\s*[0-1xXzZ?]+?[0-1xXzZ?_]*/,
                "number.binary"
            ],
            [
                /(?:\d+?[\d_]*\s*)?'[sS]?[oO]\s*[0-7xXzZ?]+?[0-7xXzZ?_]*/,
                "number.octal"
            ],
            [
                /(?:\d+?[\d_]*\s*)?'[sS]?[hH]\s*[0-9a-fA-FxXzZ?]+?[0-9a-fA-FxXzZ?_]*/,
                "number.hex"
            ],
            [
                /1step/,
                "number"
            ],
            [
                /[\dxXzZ]+?[\dxXzZ_]*(?:\s*@timeunits)?/,
                "number"
            ],
            [
                /'[01xXzZ]+/,
                "number"
            ]
        ],
        module_instance: [
            {
                include: "@whitespace"
            },
            [
                /(#?)(\()/,
                [
                    "",
                    {
                        token: "@brackets",
                        next: "@port_connection"
                    }
                ]
            ],
            [
                /@identifier\s*[;={}\[\],]/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ],
            [
                /@symbols|[;={}\[\],]/,
                {
                    token: "@rematch",
                    next: "@pop"
                }
            ],
            [
                /@identifier/,
                "type"
            ],
            [
                /;/,
                "delimiter",
                "@pop"
            ]
        ],
        port_connection: [
            {
                include: "@identifier_or_keyword"
            },
            {
                include: "@whitespace"
            },
            [
                /@systemcall/,
                "variable.predefined"
            ],
            {
                include: "@numbers"
            },
            {
                include: "@strings"
            },
            [
                /[,]/,
                "delimiter"
            ],
            [
                /\(/,
                "@brackets",
                "@port_connection"
            ],
            [
                /\)/,
                "@brackets",
                "@pop"
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /\/\*/,
                "comment",
                "@comment"
            ],
            [
                /\/\/.*$/,
                "comment"
            ]
        ],
        comment: [
            [
                /[^\/*]+/,
                "comment"
            ],
            [
                /\*\//,
                "comment",
                "@pop"
            ],
            [
                /[\/*]/,
                "comment"
            ]
        ],
        strings: [
            [
                /"([^"\\]|\\.)*$/,
                "string.invalid"
            ],
            [
                /"/,
                "string",
                "@string"
            ]
        ],
        string: [
            [
                /[^\\"]+/,
                "string"
            ],
            [
                /@escapes/,
                "string.escape"
            ],
            [
                /\\./,
                "string.escape.invalid"
            ],
            [
                /"/,
                "string",
                "@pop"
            ]
        ],
        include: [
            [
                /(\s*)(")([\w*\/*]*)(.\w*)(")/,
                [
                    "",
                    "string.include.identifier",
                    "string.include.identifier",
                    "string.include.identifier",
                    {
                        token: "string.include.identifier",
                        next: "@pop"
                    }
                ]
            ],
            [
                /(\s*)(<)([\w*\/*]*)(.\w*)(>)/,
                [
                    "",
                    "string.include.identifier",
                    "string.include.identifier",
                    "string.include.identifier",
                    {
                        token: "string.include.identifier",
                        next: "@pop"
                    }
                ]
            ]
        ],
        table: [
            {
                include: "@whitespace"
            },
            [
                /[()]/,
                "@brackets"
            ],
            [
                /[:;]/,
                "delimiter"
            ],
            [
                /[01\-*?xXbBrRfFpPnN]/,
                "variable.predefined"
            ],
            [
                "endtable",
                "keyword.endtable",
                "@pop"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=systemverilog.9c3308eb.js.map
