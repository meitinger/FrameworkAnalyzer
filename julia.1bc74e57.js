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
})({"ihmOx":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/julia/julia.ts
var conf = {
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
var language = {
    tokenPostfix: ".julia",
    keywords: [
        "begin",
        "while",
        "if",
        "for",
        "try",
        "return",
        "break",
        "continue",
        "function",
        "macro",
        "quote",
        "let",
        "local",
        "global",
        "const",
        "do",
        "struct",
        "module",
        "baremodule",
        "using",
        "import",
        "export",
        "end",
        "else",
        "elseif",
        "catch",
        "finally",
        "mutable",
        "primitive",
        "abstract",
        "type",
        "in",
        "isa",
        "where",
        "new"
    ],
    types: [
        "LinRange",
        "LineNumberNode",
        "LinearIndices",
        "LoadError",
        "MIME",
        "Matrix",
        "Method",
        "MethodError",
        "Missing",
        "MissingException",
        "Module",
        "NTuple",
        "NamedTuple",
        "Nothing",
        "Number",
        "OrdinalRange",
        "OutOfMemoryError",
        "OverflowError",
        "Pair",
        "PartialQuickSort",
        "PermutedDimsArray",
        "Pipe",
        "Ptr",
        "QuoteNode",
        "Rational",
        "RawFD",
        "ReadOnlyMemoryError",
        "Real",
        "ReentrantLock",
        "Ref",
        "Regex",
        "RegexMatch",
        "RoundingMode",
        "SegmentationFault",
        "Set",
        "Signed",
        "Some",
        "StackOverflowError",
        "StepRange",
        "StepRangeLen",
        "StridedArray",
        "StridedMatrix",
        "StridedVecOrMat",
        "StridedVector",
        "String",
        "StringIndexError",
        "SubArray",
        "SubString",
        "SubstitutionString",
        "Symbol",
        "SystemError",
        "Task",
        "Text",
        "TextDisplay",
        "Timer",
        "Tuple",
        "Type",
        "TypeError",
        "TypeVar",
        "UInt",
        "UInt128",
        "UInt16",
        "UInt32",
        "UInt64",
        "UInt8",
        "UndefInitializer",
        "AbstractArray",
        "UndefKeywordError",
        "AbstractChannel",
        "UndefRefError",
        "AbstractChar",
        "UndefVarError",
        "AbstractDict",
        "Union",
        "AbstractDisplay",
        "UnionAll",
        "AbstractFloat",
        "UnitRange",
        "AbstractIrrational",
        "Unsigned",
        "AbstractMatrix",
        "AbstractRange",
        "Val",
        "AbstractSet",
        "Vararg",
        "AbstractString",
        "VecElement",
        "AbstractUnitRange",
        "VecOrMat",
        "AbstractVecOrMat",
        "Vector",
        "AbstractVector",
        "VersionNumber",
        "Any",
        "WeakKeyDict",
        "ArgumentError",
        "WeakRef",
        "Array",
        "AssertionError",
        "BigFloat",
        "BigInt",
        "BitArray",
        "BitMatrix",
        "BitSet",
        "BitVector",
        "Bool",
        "BoundsError",
        "CapturedException",
        "CartesianIndex",
        "CartesianIndices",
        "Cchar",
        "Cdouble",
        "Cfloat",
        "Channel",
        "Char",
        "Cint",
        "Cintmax_t",
        "Clong",
        "Clonglong",
        "Cmd",
        "Colon",
        "Complex",
        "ComplexF16",
        "ComplexF32",
        "ComplexF64",
        "CompositeException",
        "Condition",
        "Cptrdiff_t",
        "Cshort",
        "Csize_t",
        "Cssize_t",
        "Cstring",
        "Cuchar",
        "Cuint",
        "Cuintmax_t",
        "Culong",
        "Culonglong",
        "Cushort",
        "Cvoid",
        "Cwchar_t",
        "Cwstring",
        "DataType",
        "DenseArray",
        "DenseMatrix",
        "DenseVecOrMat",
        "DenseVector",
        "Dict",
        "DimensionMismatch",
        "Dims",
        "DivideError",
        "DomainError",
        "EOFError",
        "Enum",
        "ErrorException",
        "Exception",
        "ExponentialBackOff",
        "Expr",
        "Float16",
        "Float32",
        "Float64",
        "Function",
        "GlobalRef",
        "HTML",
        "IO",
        "IOBuffer",
        "IOContext",
        "IOStream",
        "IdDict",
        "IndexCartesian",
        "IndexLinear",
        "IndexStyle",
        "InexactError",
        "InitError",
        "Int",
        "Int128",
        "Int16",
        "Int32",
        "Int64",
        "Int8",
        "Integer",
        "InterruptException",
        "InvalidStateException",
        "Irrational",
        "KeyError"
    ],
    keywordops: [
        "<:",
        ">:",
        ":",
        "=>",
        "...",
        ".",
        "->",
        "?"
    ],
    allops: /[^\w\d\s()\[\]{}"'#]+/,
    constants: [
        "true",
        "false",
        "nothing",
        "missing",
        "undef",
        "Inf",
        "pi",
        "NaN",
        "\u03C0",
        "\u212F",
        "ans",
        "PROGRAM_FILE",
        "ARGS",
        "C_NULL",
        "VERSION",
        "DEPOT_PATH",
        "LOAD_PATH"
    ],
    operators: [
        "!",
        "!=",
        "!==",
        "%",
        "&",
        "*",
        "+",
        "-",
        "/",
        "//",
        "<",
        "<<",
        "<=",
        "==",
        "===",
        "=>",
        ">",
        ">=",
        ">>",
        ">>>",
        "\\",
        "^",
        "|",
        "|>",
        "~",
        "\xF7",
        "\u2208",
        "\u2209",
        "\u220B",
        "\u220C",
        "\u2218",
        "\u221A",
        "\u221B",
        "\u2229",
        "\u222A",
        "\u2248",
        "\u2249",
        "\u2260",
        "\u2261",
        "\u2262",
        "\u2264",
        "\u2265",
        "\u2286",
        "\u2287",
        "\u2288",
        "\u2289",
        "\u228A",
        "\u228B",
        "\u22BB"
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
    ident: /π|ℯ|\b(?!\d)\w+\b/,
    escape: /(?:[abefnrstv\\"'\n\r]|[0-7]{1,3}|x[0-9A-Fa-f]{1,2}|u[0-9A-Fa-f]{4})/,
    escapes: /\\(?:C\-(@escape|.)|c(@escape|.)|@escape)/,
    tokenizer: {
        root: [
            [
                /(::)\s*|\b(isa)\s+/,
                "keyword",
                "@typeanno"
            ],
            [
                /\b(isa)(\s*\(@ident\s*,\s*)/,
                [
                    "keyword",
                    {
                        token: "",
                        next: "@typeanno"
                    }
                ]
            ],
            [
                /\b(type|struct)[ \t]+/,
                "keyword",
                "@typeanno"
            ],
            [
                /^\s*:@ident[!?]?/,
                "metatag"
            ],
            [
                /(return)(\s*:@ident[!?]?)/,
                [
                    "keyword",
                    "metatag"
                ]
            ],
            [
                /(\(|\[|\{|@allops)(\s*:@ident[!?]?)/,
                [
                    "",
                    "metatag"
                ]
            ],
            [
                /:\(/,
                "metatag",
                "@quote"
            ],
            [
                /r"""/,
                "regexp.delim",
                "@tregexp"
            ],
            [
                /r"/,
                "regexp.delim",
                "@sregexp"
            ],
            [
                /raw"""/,
                "string.delim",
                "@rtstring"
            ],
            [
                /[bv]?"""/,
                "string.delim",
                "@dtstring"
            ],
            [
                /raw"/,
                "string.delim",
                "@rsstring"
            ],
            [
                /[bv]?"/,
                "string.delim",
                "@dsstring"
            ],
            [
                /(@ident)\{/,
                {
                    cases: {
                        "$1@types": {
                            token: "type",
                            next: "@gen"
                        },
                        "@default": {
                            token: "type",
                            next: "@gen"
                        }
                    }
                }
            ],
            [
                /@ident[!?'']?(?=\.?\()/,
                {
                    cases: {
                        "@types": "type",
                        "@keywords": "keyword",
                        "@constants": "variable",
                        "@default": "keyword.flow"
                    }
                }
            ],
            [
                /@ident[!?']?/,
                {
                    cases: {
                        "@types": "type",
                        "@keywords": "keyword",
                        "@constants": "variable",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /\$\w+/,
                "key"
            ],
            [
                /\$\(/,
                "key",
                "@paste"
            ],
            [
                /@@@ident/,
                "annotation"
            ],
            {
                include: "@whitespace"
            },
            [
                /'(?:@escapes|.)'/,
                "string.character"
            ],
            [
                /[()\[\]{}]/,
                "@brackets"
            ],
            [
                /@allops/,
                {
                    cases: {
                        "@keywordops": "keyword",
                        "@operators": "operator"
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
                /[+\-]?\d+(\.\d+)?(im?|[eE][+\-]?\d+(\.\d+)?)?/,
                "number"
            ]
        ],
        typeanno: [
            [
                /[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*\{/,
                "type",
                "@gen"
            ],
            [
                /([a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*)(\s*<:\s*)/,
                [
                    "type",
                    "keyword"
                ]
            ],
            [
                /[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*/,
                "type",
                "@pop"
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        gen: [
            [
                /[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*\{/,
                "type",
                "@push"
            ],
            [
                /[a-zA-Z_]\w*(?:\.[a-zA-Z_]\w*)*/,
                "type"
            ],
            [
                /<:/,
                "keyword"
            ],
            [
                /(\})(\s*<:\s*)/,
                [
                    "type",
                    {
                        token: "keyword",
                        next: "@pop"
                    }
                ]
            ],
            [
                /\}/,
                "type",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        quote: [
            [
                /\$\(/,
                "key",
                "@paste"
            ],
            [
                /\(/,
                "@brackets",
                "@paren"
            ],
            [
                /\)/,
                "metatag",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        paste: [
            [
                /:\(/,
                "metatag",
                "@quote"
            ],
            [
                /\(/,
                "@brackets",
                "@paren"
            ],
            [
                /\)/,
                "key",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        paren: [
            [
                /\$\(/,
                "key",
                "@paste"
            ],
            [
                /:\(/,
                "metatag",
                "@quote"
            ],
            [
                /\(/,
                "@brackets",
                "@push"
            ],
            [
                /\)/,
                "@brackets",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        sregexp: [
            [
                /^.*/,
                "invalid"
            ],
            [
                /[^\\"()\[\]{}]/,
                "regexp"
            ],
            [
                /[()\[\]{}]/,
                "@brackets"
            ],
            [
                /\\./,
                "operator.scss"
            ],
            [
                /"[imsx]*/,
                "regexp.delim",
                "@pop"
            ]
        ],
        tregexp: [
            [
                /[^\\"()\[\]{}]/,
                "regexp"
            ],
            [
                /[()\[\]{}]/,
                "@brackets"
            ],
            [
                /\\./,
                "operator.scss"
            ],
            [
                /"(?!"")/,
                "string"
            ],
            [
                /"""[imsx]*/,
                "regexp.delim",
                "@pop"
            ]
        ],
        rsstring: [
            [
                /^.*/,
                "invalid"
            ],
            [
                /[^\\"]/,
                "string"
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /"/,
                "string.delim",
                "@pop"
            ]
        ],
        rtstring: [
            [
                /[^\\"]/,
                "string"
            ],
            [
                /\\./,
                "string.escape"
            ],
            [
                /"(?!"")/,
                "string"
            ],
            [
                /"""/,
                "string.delim",
                "@pop"
            ]
        ],
        dsstring: [
            [
                /^.*/,
                "invalid"
            ],
            [
                /[^\\"\$]/,
                "string"
            ],
            [
                /\$/,
                "",
                "@interpolated"
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
                "string.delim",
                "@pop"
            ]
        ],
        dtstring: [
            [
                /[^\\"\$]/,
                "string"
            ],
            [
                /\$/,
                "",
                "@interpolated"
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
                /"(?!"")/,
                "string"
            ],
            [
                /"""/,
                "string.delim",
                "@pop"
            ]
        ],
        interpolated: [
            [
                /\(/,
                {
                    token: "",
                    switchTo: "@interpolated_compound"
                }
            ],
            [
                /[a-zA-Z_]\w*/,
                "identifier"
            ],
            [
                "",
                "",
                "@pop"
            ]
        ],
        interpolated_compound: [
            [
                /\)/,
                "",
                "@pop"
            ],
            {
                include: "@root"
            }
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /#=/,
                "comment",
                "@multi_comment"
            ],
            [
                /#.*$/,
                "comment"
            ]
        ],
        multi_comment: [
            [
                /#=/,
                "comment",
                "@push"
            ],
            [
                /=#/,
                "comment",
                "@pop"
            ],
            [
                /=(?!#)|#(?!=)/,
                "comment"
            ],
            [
                /[^#=]+/,
                "comment"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=julia.1bc74e57.js.map
