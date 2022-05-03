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
parcelRequire.register("e6kUJ", function(module, exports) {

$parcel$export(module.exports, "assertThisInitialized", function () { return (parcelRequire("jzJ8f")).default; });
$parcel$export(module.exports, "classCallCheck", function () { return (parcelRequire("eOS3o")).default; });
$parcel$export(module.exports, "construct", function () { return (parcelRequire("dsFfn")).default; });
$parcel$export(module.exports, "createClass", function () { return (parcelRequire("yLxk8")).default; });
$parcel$export(module.exports, "createSuper", function () { return (parcelRequire("02PMs")).default; });
$parcel$export(module.exports, "defineProperty", function () { return (parcelRequire("j9Iow")).default; });
$parcel$export(module.exports, "inherits", function () { return (parcelRequire("4gPZ8")).default; });
$parcel$export(module.exports, "objectSpread", function () { return (parcelRequire("clf6M")).default; });
$parcel$export(module.exports, "slicedToArray", function () { return (parcelRequire("dDQ7z")).default; });
$parcel$export(module.exports, "toConsumableArray", function () { return (parcelRequire("ciubM")).default; });
$parcel$export(module.exports, "typeOf", function () { return (parcelRequire("19RbB")).default; });





var $jzJ8f = parcelRequire("jzJ8f");











var $eOS3o = parcelRequire("eOS3o");
















var $dsFfn = parcelRequire("dsFfn");

var $yLxk8 = parcelRequire("yLxk8");

var $02PMs = parcelRequire("02PMs");




var $j9Iow = parcelRequire("j9Iow");




var $4gPZ8 = parcelRequire("4gPZ8");
















var $clf6M = parcelRequire("clf6M");








var $dDQ7z = parcelRequire("dDQ7z");







var $ciubM = parcelRequire("ciubM");



var $19RbB = parcelRequire("19RbB");




});
parcelRequire.register("jzJ8f", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $e4044b8154fa92b0$export$2e2bcd8739ae039; });
function $e4044b8154fa92b0$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

});

parcelRequire.register("eOS3o", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $ac9faa26fa7ec44d$export$2e2bcd8739ae039; });
function $ac9faa26fa7ec44d$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

});

parcelRequire.register("dsFfn", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $9ccde2aba8f265cd$export$2e2bcd8739ae039; });

var $2IMmB = parcelRequire("2IMmB");
function $9ccde2aba8f265cd$var$isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function $9ccde2aba8f265cd$var$construct(Parent1, args1, Class1) {
    if ($9ccde2aba8f265cd$var$isNativeReflectConstruct()) $9ccde2aba8f265cd$var$construct = Reflect.construct;
    else $9ccde2aba8f265cd$var$construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) $2IMmB.default(instance, Class.prototype);
        return instance;
    };
    return $9ccde2aba8f265cd$var$construct.apply(null, arguments);
}
function $9ccde2aba8f265cd$export$2e2bcd8739ae039(Parent, args, Class) {
    return $9ccde2aba8f265cd$var$construct.apply(null, arguments);
}

});
parcelRequire.register("2IMmB", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $1fb534d731120aa2$export$2e2bcd8739ae039; });
function $1fb534d731120aa2$var$setPrototypeOf(o1, p1) {
    $1fb534d731120aa2$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $1fb534d731120aa2$var$setPrototypeOf(o1, p1);
}
function $1fb534d731120aa2$export$2e2bcd8739ae039(o, p) {
    return $1fb534d731120aa2$var$setPrototypeOf(o, p);
}

});


parcelRequire.register("yLxk8", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $06880cd84c64632f$export$2e2bcd8739ae039; });
function $06880cd84c64632f$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $06880cd84c64632f$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $06880cd84c64632f$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $06880cd84c64632f$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

});

parcelRequire.register("02PMs", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $00885a921b2b65db$export$2e2bcd8739ae039; });

var $5HFAF = parcelRequire("5HFAF");

var $icJ7n = parcelRequire("icJ7n");

var $fxgve = parcelRequire("fxgve");
function $00885a921b2b65db$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = $5HFAF.default();
    return function _createSuperInternal() {
        var Super = $icJ7n.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = $icJ7n.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return $fxgve.default(this, result);
    };
}

});
parcelRequire.register("5HFAF", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $42713ae858e78e0c$export$2e2bcd8739ae039; });
function $42713ae858e78e0c$export$2e2bcd8739ae039() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}

});

parcelRequire.register("icJ7n", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $d40c5874763bdc7f$export$2e2bcd8739ae039; });
function $d40c5874763bdc7f$var$getPrototypeOf(o1) {
    $d40c5874763bdc7f$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $d40c5874763bdc7f$var$getPrototypeOf(o1);
}
function $d40c5874763bdc7f$export$2e2bcd8739ae039(o) {
    return $d40c5874763bdc7f$var$getPrototypeOf(o);
}

});

parcelRequire.register("fxgve", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $b4f6bd33c38c53dc$export$2e2bcd8739ae039; });

var $jzJ8f = parcelRequire("jzJ8f");

var $19RbB = parcelRequire("19RbB");
function $b4f6bd33c38c53dc$export$2e2bcd8739ae039(self, call) {
    if (call && ($19RbB.default(call) === "object" || typeof call === "function")) return call;
    return $jzJ8f.default(self);
}

});
parcelRequire.register("19RbB", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $0d7fe35f5140e933$export$2e2bcd8739ae039; });
function $0d7fe35f5140e933$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}

});



parcelRequire.register("j9Iow", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $df214b6f9f1af81d$export$2e2bcd8739ae039; });
function $df214b6f9f1af81d$export$2e2bcd8739ae039(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

});

parcelRequire.register("4gPZ8", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $31c0fb2c490cea6c$export$2e2bcd8739ae039; });

var $2IMmB = parcelRequire("2IMmB");
function $31c0fb2c490cea6c$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $2IMmB.default(subClass, superClass);
}

});

parcelRequire.register("clf6M", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $8fc32a63010939ba$export$2e2bcd8739ae039; });

var $j9Iow = parcelRequire("j9Iow");
function $8fc32a63010939ba$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $j9Iow.default(target, key, source[key]);
        });
    }
    return target;
}

});

parcelRequire.register("dDQ7z", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $9ee7590ab8825966$export$2e2bcd8739ae039; });

var $1GiyC = parcelRequire("1GiyC");

var $jlEoW = parcelRequire("jlEoW");

var $blfqo = parcelRequire("blfqo");

var $f93m1 = parcelRequire("f93m1");
function $9ee7590ab8825966$export$2e2bcd8739ae039(arr, i) {
    return $1GiyC.default(arr) || $jlEoW.default(arr, i) || $f93m1.default(arr, i) || $blfqo.default();
}

});
parcelRequire.register("1GiyC", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $13981bc723750738$export$2e2bcd8739ae039; });
function $13981bc723750738$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}

});

parcelRequire.register("jlEoW", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $e15f515596a27337$export$2e2bcd8739ae039; });
function $e15f515596a27337$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

});

parcelRequire.register("blfqo", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $841d9ee9868a4d2c$export$2e2bcd8739ae039; });
function $841d9ee9868a4d2c$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});

parcelRequire.register("f93m1", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $b06a4c601790d7d1$export$2e2bcd8739ae039; });

var $iJdxk = parcelRequire("iJdxk");
function $b06a4c601790d7d1$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $iJdxk.default(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $iJdxk.default(o, minLen);
}

});
parcelRequire.register("iJdxk", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $da26ee05db0a9bd7$export$2e2bcd8739ae039; });
function $da26ee05db0a9bd7$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

});



parcelRequire.register("ciubM", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $8f3e956276a8e46b$export$2e2bcd8739ae039; });

var $9PZG0 = parcelRequire("9PZG0");

var $jlEoW = parcelRequire("jlEoW");

var $4V7K7 = parcelRequire("4V7K7");

var $f93m1 = parcelRequire("f93m1");
function $8f3e956276a8e46b$export$2e2bcd8739ae039(arr) {
    return $9PZG0.default(arr) || $jlEoW.default(arr) || $f93m1.default(arr) || $4V7K7.default();
}

});
parcelRequire.register("9PZG0", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $7298b82673fb26ab$export$2e2bcd8739ae039; });

var $iJdxk = parcelRequire("iJdxk");
function $7298b82673fb26ab$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return $iJdxk.default(arr);
}

});

parcelRequire.register("4V7K7", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $39527de157bc0a98$export$2e2bcd8739ae039; });
function $39527de157bc0a98$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});



parcelRequire.register("h8qvp", function(module, exports) {

$parcel$export(module.exports, "_throw", function () { return $8175df34f7d64e6e$export$82a8af9b11518516; });
$parcel$export(module.exports, "runWorker", function () { return $8175df34f7d64e6e$export$dd2e08b4a54c623f; });
$parcel$export(module.exports, "cardinality", function () { return $8175df34f7d64e6e$export$9e9949f96c411257; });
$parcel$export(module.exports, "difference", function () { return $8175df34f7d64e6e$export$acaf96a27438246b; });
$parcel$export(module.exports, "intersection", function () { return $8175df34f7d64e6e$export$bc86dfbf7795668c; });
$parcel$export(module.exports, "isElement", function () { return $8175df34f7d64e6e$export$45a5e7f76e0caa8d; });
$parcel$export(module.exports, "isEqual", function () { return $8175df34f7d64e6e$export$248d38f6296296c5; });
$parcel$export(module.exports, "isStrictSubset", function () { return $8175df34f7d64e6e$export$9cd5ab22e2b3eb2a; });
$parcel$export(module.exports, "isSubset", function () { return $8175df34f7d64e6e$export$af04532ec9ff13d2; });
$parcel$export(module.exports, "union", function () { return $8175df34f7d64e6e$export$971dd5b0dfd021b6; });
$parcel$export(module.exports, "formatExpression", function () { return $8175df34f7d64e6e$export$495510c2c593da91; });
var $8175df34f7d64e6e$export$82a8af9b11518516 = function(e) {
    throw e;
};
var $8175df34f7d64e6e$export$dd2e08b4a54c623f = function(worker) {
    onmessage = function(e) {
        return postMessage(worker(e.data));
    };
};
var $8175df34f7d64e6e$var$asSet = function(values) {
    return values instanceof Set ? values : new Set(values);
};
var $8175df34f7d64e6e$export$9e9949f96c411257 = function(s) {
    return $8175df34f7d64e6e$var$asSet(s).size;
};
var $8175df34f7d64e6e$export$acaf96a27438246b = function(a, b) {
    var result = new Set(a);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = b[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            result.delete(value);
        }
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
    return result;
};
var $8175df34f7d64e6e$export$bc86dfbf7795668c = function(a, b) {
    var result = new Set();
    var setA = $8175df34f7d64e6e$var$asSet(a);
    var setB = $8175df34f7d64e6e$var$asSet(b);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = setB[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            if (setA.has(value)) result.add(value);
        }
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
    return result;
};
var $8175df34f7d64e6e$export$45a5e7f76e0caa8d = function(e, s) {
    return Array.isArray(s) ? s.includes(e) : $8175df34f7d64e6e$var$asSet(s).has(e);
};
var $8175df34f7d64e6e$var$internalIsSubset = function(setA, setB) {
    if (setA.size > setB.size) return false;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = setA[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var key = _step.value;
            if (!setB.has(key)) return false;
        }
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
    return true;
};
var $8175df34f7d64e6e$export$248d38f6296296c5 = function(a, b) {
    var setA = $8175df34f7d64e6e$var$asSet(a);
    var setB = $8175df34f7d64e6e$var$asSet(b);
    return setA.size === setB.size && $8175df34f7d64e6e$var$internalIsSubset(setA, setB);
};
var $8175df34f7d64e6e$export$9cd5ab22e2b3eb2a = function(a, b) {
    var setA = $8175df34f7d64e6e$var$asSet(a);
    var setB = $8175df34f7d64e6e$var$asSet(b);
    return setA.size !== setB.size && $8175df34f7d64e6e$var$internalIsSubset(setA, setB);
};
var $8175df34f7d64e6e$export$af04532ec9ff13d2 = function(a, b) {
    return $8175df34f7d64e6e$var$internalIsSubset($8175df34f7d64e6e$var$asSet(a), $8175df34f7d64e6e$var$asSet(b));
};
var $8175df34f7d64e6e$export$971dd5b0dfd021b6 = function(a, b) {
    var result = new Set(a);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = b[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var value = _step.value;
            result.add(value);
        }
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
    return result;
};
var $8175df34f7d64e6e$export$495510c2c593da91 = function(expression) {
    switch(expression.type){
        case 'true':
        case 'false':
            return expression.type;
        case 'var':
            return expression.name;
        case 'not':
            return "(not ".concat($8175df34f7d64e6e$export$495510c2c593da91(expression.value), ")");
        case 'n':
            return expression.value.toString();
        case '+':
        case '-':
        case '*':
        case '/':
        case '<':
        case '>':
        case '<=':
        case '>=':
        case '==':
        case '!=':
        case 'or':
        case 'and':
            return "(".concat($8175df34f7d64e6e$export$495510c2c593da91(expression.left), " ").concat(expression.type, " ").concat($8175df34f7d64e6e$export$495510c2c593da91(expression.right), ")");
    }
};

});

})();
//# sourceMappingURL=parser.5015d2e2.js.map
