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
})({"ahteG":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/vb/vb.ts
var conf = {
    comments: {
        lineComment: "'",
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
            "<",
            ">"
        ],
        [
            "addhandler",
            "end addhandler"
        ],
        [
            "class",
            "end class"
        ],
        [
            "enum",
            "end enum"
        ],
        [
            "event",
            "end event"
        ],
        [
            "function",
            "end function"
        ],
        [
            "get",
            "end get"
        ],
        [
            "if",
            "end if"
        ],
        [
            "interface",
            "end interface"
        ],
        [
            "module",
            "end module"
        ],
        [
            "namespace",
            "end namespace"
        ],
        [
            "operator",
            "end operator"
        ],
        [
            "property",
            "end property"
        ],
        [
            "raiseevent",
            "end raiseevent"
        ],
        [
            "removehandler",
            "end removehandler"
        ],
        [
            "select",
            "end select"
        ],
        [
            "set",
            "end set"
        ],
        [
            "structure",
            "end structure"
        ],
        [
            "sub",
            "end sub"
        ],
        [
            "synclock",
            "end synclock"
        ],
        [
            "try",
            "end try"
        ],
        [
            "while",
            "end while"
        ],
        [
            "with",
            "end with"
        ],
        [
            "using",
            "end using"
        ],
        [
            "do",
            "loop"
        ],
        [
            "for",
            "next"
        ]
    ],
    autoClosingPairs: [
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
        },
        {
            open: '"',
            close: '"',
            notIn: [
                "string",
                "comment"
            ]
        },
        {
            open: "<",
            close: ">",
            notIn: [
                "string",
                "comment"
            ]
        }
    ],
    folding: {
        markers: {
            start: new RegExp("^\\s*#Region\\b"),
            end: new RegExp("^\\s*#End Region\\b")
        }
    }
};
var language = {
    defaultToken: "",
    tokenPostfix: ".vb",
    ignoreCase: true,
    brackets: [
        {
            token: "delimiter.bracket",
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
        },
        {
            token: "delimiter.angle",
            open: "<",
            close: ">"
        },
        {
            token: "keyword.tag-addhandler",
            open: "addhandler",
            close: "end addhandler"
        },
        {
            token: "keyword.tag-class",
            open: "class",
            close: "end class"
        },
        {
            token: "keyword.tag-enum",
            open: "enum",
            close: "end enum"
        },
        {
            token: "keyword.tag-event",
            open: "event",
            close: "end event"
        },
        {
            token: "keyword.tag-function",
            open: "function",
            close: "end function"
        },
        {
            token: "keyword.tag-get",
            open: "get",
            close: "end get"
        },
        {
            token: "keyword.tag-if",
            open: "if",
            close: "end if"
        },
        {
            token: "keyword.tag-interface",
            open: "interface",
            close: "end interface"
        },
        {
            token: "keyword.tag-module",
            open: "module",
            close: "end module"
        },
        {
            token: "keyword.tag-namespace",
            open: "namespace",
            close: "end namespace"
        },
        {
            token: "keyword.tag-operator",
            open: "operator",
            close: "end operator"
        },
        {
            token: "keyword.tag-property",
            open: "property",
            close: "end property"
        },
        {
            token: "keyword.tag-raiseevent",
            open: "raiseevent",
            close: "end raiseevent"
        },
        {
            token: "keyword.tag-removehandler",
            open: "removehandler",
            close: "end removehandler"
        },
        {
            token: "keyword.tag-select",
            open: "select",
            close: "end select"
        },
        {
            token: "keyword.tag-set",
            open: "set",
            close: "end set"
        },
        {
            token: "keyword.tag-structure",
            open: "structure",
            close: "end structure"
        },
        {
            token: "keyword.tag-sub",
            open: "sub",
            close: "end sub"
        },
        {
            token: "keyword.tag-synclock",
            open: "synclock",
            close: "end synclock"
        },
        {
            token: "keyword.tag-try",
            open: "try",
            close: "end try"
        },
        {
            token: "keyword.tag-while",
            open: "while",
            close: "end while"
        },
        {
            token: "keyword.tag-with",
            open: "with",
            close: "end with"
        },
        {
            token: "keyword.tag-using",
            open: "using",
            close: "end using"
        },
        {
            token: "keyword.tag-do",
            open: "do",
            close: "loop"
        },
        {
            token: "keyword.tag-for",
            open: "for",
            close: "next"
        }
    ],
    keywords: [
        "AddHandler",
        "AddressOf",
        "Alias",
        "And",
        "AndAlso",
        "As",
        "Async",
        "Boolean",
        "ByRef",
        "Byte",
        "ByVal",
        "Call",
        "Case",
        "Catch",
        "CBool",
        "CByte",
        "CChar",
        "CDate",
        "CDbl",
        "CDec",
        "Char",
        "CInt",
        "Class",
        "CLng",
        "CObj",
        "Const",
        "Continue",
        "CSByte",
        "CShort",
        "CSng",
        "CStr",
        "CType",
        "CUInt",
        "CULng",
        "CUShort",
        "Date",
        "Decimal",
        "Declare",
        "Default",
        "Delegate",
        "Dim",
        "DirectCast",
        "Do",
        "Double",
        "Each",
        "Else",
        "ElseIf",
        "End",
        "EndIf",
        "Enum",
        "Erase",
        "Error",
        "Event",
        "Exit",
        "False",
        "Finally",
        "For",
        "Friend",
        "Function",
        "Get",
        "GetType",
        "GetXMLNamespace",
        "Global",
        "GoSub",
        "GoTo",
        "Handles",
        "If",
        "Implements",
        "Imports",
        "In",
        "Inherits",
        "Integer",
        "Interface",
        "Is",
        "IsNot",
        "Let",
        "Lib",
        "Like",
        "Long",
        "Loop",
        "Me",
        "Mod",
        "Module",
        "MustInherit",
        "MustOverride",
        "MyBase",
        "MyClass",
        "NameOf",
        "Namespace",
        "Narrowing",
        "New",
        "Next",
        "Not",
        "Nothing",
        "NotInheritable",
        "NotOverridable",
        "Object",
        "Of",
        "On",
        "Operator",
        "Option",
        "Optional",
        "Or",
        "OrElse",
        "Out",
        "Overloads",
        "Overridable",
        "Overrides",
        "ParamArray",
        "Partial",
        "Private",
        "Property",
        "Protected",
        "Public",
        "RaiseEvent",
        "ReadOnly",
        "ReDim",
        "RemoveHandler",
        "Resume",
        "Return",
        "SByte",
        "Select",
        "Set",
        "Shadows",
        "Shared",
        "Short",
        "Single",
        "Static",
        "Step",
        "Stop",
        "String",
        "Structure",
        "Sub",
        "SyncLock",
        "Then",
        "Throw",
        "To",
        "True",
        "Try",
        "TryCast",
        "TypeOf",
        "UInteger",
        "ULong",
        "UShort",
        "Using",
        "Variant",
        "Wend",
        "When",
        "While",
        "Widening",
        "With",
        "WithEvents",
        "WriteOnly",
        "Xor"
    ],
    tagwords: [
        "If",
        "Sub",
        "Select",
        "Try",
        "Class",
        "Enum",
        "Function",
        "Get",
        "Interface",
        "Module",
        "Namespace",
        "Operator",
        "Set",
        "Structure",
        "Using",
        "While",
        "With",
        "Do",
        "Loop",
        "For",
        "Next",
        "Property",
        "Continue",
        "AddHandler",
        "RemoveHandler",
        "Event",
        "RaiseEvent",
        "SyncLock"
    ],
    symbols: /[=><!~?;\.,:&|+\-*\/\^%]+/,
    integersuffix: /U?[DI%L&S@]?/,
    floatsuffix: /[R#F!]?/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            [
                /next(?!\w)/,
                {
                    token: "keyword.tag-for"
                }
            ],
            [
                /loop(?!\w)/,
                {
                    token: "keyword.tag-do"
                }
            ],
            [
                /end\s+(?!for|do)(addhandler|class|enum|event|function|get|if|interface|module|namespace|operator|property|raiseevent|removehandler|select|set|structure|sub|synclock|try|while|with|using)/,
                {
                    token: "keyword.tag-$1"
                }
            ],
            [
                /[a-zA-Z_]\w*/,
                {
                    cases: {
                        "@tagwords": {
                            token: "keyword.tag-$0"
                        },
                        "@keywords": {
                            token: "keyword.$0"
                        },
                        "@default": "identifier"
                    }
                }
            ],
            [
                /^\s*#\w+/,
                "keyword"
            ],
            [
                /\d*\d+e([\-+]?\d+)?(@floatsuffix)/,
                "number.float"
            ],
            [
                /\d*\.\d+(e[\-+]?\d+)?(@floatsuffix)/,
                "number.float"
            ],
            [
                /&H[0-9a-f]+(@integersuffix)/,
                "number.hex"
            ],
            [
                /&0[0-7]+(@integersuffix)/,
                "number.octal"
            ],
            [
                /\d+(@integersuffix)/,
                "number"
            ],
            [
                /#.*#/,
                "number"
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
                /["\u201c\u201d]/,
                {
                    token: "string.quote",
                    next: "@string"
                }
            ]
        ],
        whitespace: [
            [
                /[ \t\r\n]+/,
                ""
            ],
            [
                /(\'|REM(?!\w)).*$/,
                "comment"
            ]
        ],
        string: [
            [
                /[^"\u201c\u201d]+/,
                "string"
            ],
            [
                /["\u201c\u201d]{2}/,
                "string.escape"
            ],
            [
                /["\u201c\u201d]C?/,
                {
                    token: "string.quote",
                    next: "@pop"
                }
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=vb.2d2f1c83.js.map
