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
})({"i9q75":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/shell/shell.ts
var conf = {
    comments: {
        lineComment: "#"
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
        },
        {
            open: "`",
            close: "`"
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
        },
        {
            open: "`",
            close: "`"
        }
    ]
};
var language = {
    defaultToken: "",
    ignoreCase: true,
    tokenPostfix: ".shell",
    brackets: [
        {
            token: "delimiter.bracket",
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
        }
    ],
    keywords: [
        "if",
        "then",
        "do",
        "else",
        "elif",
        "while",
        "until",
        "for",
        "in",
        "esac",
        "fi",
        "fin",
        "fil",
        "done",
        "exit",
        "set",
        "unset",
        "export",
        "function"
    ],
    builtins: [
        "ab",
        "awk",
        "bash",
        "beep",
        "cat",
        "cc",
        "cd",
        "chown",
        "chmod",
        "chroot",
        "clear",
        "cp",
        "curl",
        "cut",
        "diff",
        "echo",
        "find",
        "gawk",
        "gcc",
        "get",
        "git",
        "grep",
        "hg",
        "kill",
        "killall",
        "ln",
        "ls",
        "make",
        "mkdir",
        "openssl",
        "mv",
        "nc",
        "node",
        "npm",
        "ping",
        "ps",
        "restart",
        "rm",
        "rmdir",
        "sed",
        "service",
        "sh",
        "shopt",
        "shred",
        "source",
        "sort",
        "sleep",
        "ssh",
        "start",
        "stop",
        "su",
        "sudo",
        "svn",
        "tee",
        "telnet",
        "top",
        "touch",
        "vi",
        "vim",
        "wall",
        "wc",
        "wget",
        "who",
        "write",
        "yes",
        "zsh"
    ],
    symbols: /[=><!~?&|+\-*\/\^;\.,]+/,
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            [
                /[a-zA-Z]\w*/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@builtins": "type.identifier",
                        "@default": ""
                    }
                }
            ],
            {
                include: "@strings"
            },
            {
                include: "@parameters"
            },
            {
                include: "@heredoc"
            },
            [
                /[{}\[\]()]/,
                "@brackets"
            ],
            [
                /-+\w+/,
                "attribute.name"
            ],
            [
                /@symbols/,
                "delimiter"
            ],
            {
                include: "@numbers"
            },
            [
                /[,;]/,
                "delimiter"
            ]
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ],
            [
                /(^#!.*$)/,
                "metatag"
            ],
            [
                /(^#.*$)/,
                "comment"
            ]
        ],
        numbers: [
            [
                /\d*\.\d+([eE][\-+]?\d+)?/,
                "number.float"
            ],
            [
                /0[xX][0-9a-fA-F_]*[0-9a-fA-F]/,
                "number.hex"
            ],
            [
                /\d+/,
                "number"
            ]
        ],
        strings: [
            [
                /'/,
                "string",
                "@stringBody"
            ],
            [
                /"/,
                "string",
                "@dblStringBody"
            ]
        ],
        stringBody: [
            [
                /'/,
                "string",
                "@popall"
            ],
            [
                /./,
                "string"
            ]
        ],
        dblStringBody: [
            [
                /"/,
                "string",
                "@popall"
            ],
            [
                /./,
                "string"
            ]
        ],
        heredoc: [
            [
                /(<<[-<]?)(\s*)(['"`]?)([\w\-]+)(['"`]?)/,
                [
                    "constants",
                    "white",
                    "string.heredoc.delimiter",
                    "string.heredoc",
                    "string.heredoc.delimiter"
                ]
            ]
        ],
        parameters: [
            [
                /\$\d+/,
                "variable.predefined"
            ],
            [
                /\$\w+/,
                "variable"
            ],
            [
                /\$[*@#?\-$!0_]/,
                "variable"
            ],
            [
                /\$'/,
                "variable",
                "@parameterBodyQuote"
            ],
            [
                /\$"/,
                "variable",
                "@parameterBodyDoubleQuote"
            ],
            [
                /\$\(/,
                "variable",
                "@parameterBodyParen"
            ],
            [
                /\$\{/,
                "variable",
                "@parameterBodyCurlyBrace"
            ]
        ],
        parameterBodyQuote: [
            [
                /[^#:%*@\-!_']+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /[']/,
                "variable",
                "@pop"
            ]
        ],
        parameterBodyDoubleQuote: [
            [
                /[^#:%*@\-!_"]+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /["]/,
                "variable",
                "@pop"
            ]
        ],
        parameterBodyParen: [
            [
                /[^#:%*@\-!_)]+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /[)]/,
                "variable",
                "@pop"
            ]
        ],
        parameterBodyCurlyBrace: [
            [
                /[^#:%*@\-!_}]+/,
                "variable"
            ],
            [
                /[#:%*@\-!_]/,
                "delimiter"
            ],
            [
                /[}]/,
                "variable",
                "@pop"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=shell.4643d2a3.js.map
