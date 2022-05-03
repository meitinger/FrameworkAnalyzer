(function () {
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
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire3aa6"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire3aa6"] = parcelRequire;
}
importScripts("./parser.90f93722.js");
var $06618b3441ef18a5$exports = {};

var $9NBHU = parcelRequire("9NBHU");

var $bKYYH = parcelRequire("bKYYH");
$bKYYH.runWorker(function(param) {
    var program = param.program, state = param.state;
    var evalNumeric = function(expression) {
        switch(expression.type){
            case 'n':
                return expression.value;
            case 'var':
                var _name;
                return (_name = state[expression.name]) !== null && _name !== void 0 ? _name : $bKYYH._throw(new TypeError('Variable "'.concat(expression.name, '" not defined.')));
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
                state = $9NBHU.objectSpread({}, state, $9NBHU.defineProperty({}, statement.variable, evalNumeric(statement.expression)));
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

})();
//# sourceMappingURL=runner.136fd6ef.js.map