importScripts("./parser.443e51b6.js");
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
})({"lol6O":[function(require,module,exports) {
var _helpers = require("@swc/helpers");
/*
 * Monotone Framework Analyzer
 * Copyright (C) 2022  Manuel Meitinger
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */ var _helpers1 = require("./helpers");
_helpers1.runWorker(function(param) {
    var program = param.program, state = param.state;
    var evalNumeric = function(expression) {
        switch(expression.type){
            case 'n':
                return expression.value;
            case 'var':
                var _name;
                return (_name = state[expression.name]) !== null && _name !== void 0 ? _name : _helpers1._throw(new TypeError('Variable "'.concat(expression.name, '" not defined.')));
            case '+':
                return evalNumeric(expression.left) + evalNumeric(expression.right);
            case '-':
                return evalNumeric(expression.left) - evalNumeric(expression.right);
            case '*':
                return evalNumeric(expression.left) * evalNumeric(expression.right);
            case '/':
                return Math.trunc(evalNumeric(expression.left) / evalNumeric(expression.right));
        }
    };
    var evalBoolean = function(expression) {
        switch(expression.type){
            case 'true':
                return true;
            case 'false':
                return false;
            case 'not':
                return !evalBoolean(expression.value);
            case '<':
                return evalNumeric(expression.left) < evalNumeric(expression.right);
            case '>':
                return evalNumeric(expression.left) > evalNumeric(expression.right);
            case '<=':
                return evalNumeric(expression.left) <= evalNumeric(expression.right);
            case '>=':
                return evalNumeric(expression.left) >= evalNumeric(expression.right);
            case '==':
                return evalNumeric(expression.left) === evalNumeric(expression.right);
            case '!=':
                return evalNumeric(expression.left) !== evalNumeric(expression.right);
            case 'or':
                return evalBoolean(expression.left) || evalBoolean(expression.right);
            case 'and':
                return evalBoolean(expression.left) && evalBoolean(expression.right);
        }
    };
    var run = function(statement) {
        switch(statement.type){
            case 'skip':
                break;
            case 'assign':
                state = _helpers.objectSpread({}, state, _helpers.defineProperty({}, statement.variable, evalNumeric(statement.expression)));
                break;
            case 'if':
                if (evalBoolean(statement.condition)) run(statement.ifBody);
                else run(statement.elseBody);
                break;
            case 'while':
                while(evalBoolean(statement.condition))run(statement.body);
                break;
            case 'seq':
                statement.statements.forEach(run);
                break;
        }
    };
    run(program);
    return {
        state: state
    };
});

},{"@swc/helpers":"a3Ul6","./helpers":"4IhXk"}]},["lol6O"], "lol6O", "parcelRequire3aa6")

//# sourceMappingURL=runner.965c9320.js.map
