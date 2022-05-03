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
})({"cwTw5":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/csp/csp.ts
var conf = {
    brackets: [],
    autoClosingPairs: [],
    surroundingPairs: []
};
var language = {
    keywords: [],
    typeKeywords: [],
    tokenPostfix: ".csp",
    operators: [],
    symbols: /[=><!~?:&|+\-*\/\^%]+/,
    escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
    tokenizer: {
        root: [
            [
                /child-src/,
                "string.quote"
            ],
            [
                /connect-src/,
                "string.quote"
            ],
            [
                /default-src/,
                "string.quote"
            ],
            [
                /font-src/,
                "string.quote"
            ],
            [
                /frame-src/,
                "string.quote"
            ],
            [
                /img-src/,
                "string.quote"
            ],
            [
                /manifest-src/,
                "string.quote"
            ],
            [
                /media-src/,
                "string.quote"
            ],
            [
                /object-src/,
                "string.quote"
            ],
            [
                /script-src/,
                "string.quote"
            ],
            [
                /style-src/,
                "string.quote"
            ],
            [
                /worker-src/,
                "string.quote"
            ],
            [
                /base-uri/,
                "string.quote"
            ],
            [
                /plugin-types/,
                "string.quote"
            ],
            [
                /sandbox/,
                "string.quote"
            ],
            [
                /disown-opener/,
                "string.quote"
            ],
            [
                /form-action/,
                "string.quote"
            ],
            [
                /frame-ancestors/,
                "string.quote"
            ],
            [
                /report-uri/,
                "string.quote"
            ],
            [
                /report-to/,
                "string.quote"
            ],
            [
                /upgrade-insecure-requests/,
                "string.quote"
            ],
            [
                /block-all-mixed-content/,
                "string.quote"
            ],
            [
                /require-sri-for/,
                "string.quote"
            ],
            [
                /reflected-xss/,
                "string.quote"
            ],
            [
                /referrer/,
                "string.quote"
            ],
            [
                /policy-uri/,
                "string.quote"
            ],
            [
                /'self'/,
                "string.quote"
            ],
            [
                /'unsafe-inline'/,
                "string.quote"
            ],
            [
                /'unsafe-eval'/,
                "string.quote"
            ],
            [
                /'strict-dynamic'/,
                "string.quote"
            ],
            [
                /'unsafe-hashed-attributes'/,
                "string.quote"
            ]
        ]
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=csp.69d3019e.js.map
