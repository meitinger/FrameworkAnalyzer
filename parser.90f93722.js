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
parcelRequire.register("9NBHU", function(module, exports) {

$parcel$export(module.exports, "assertThisInitialized", function () { return (parcelRequire("hUqvX")).default; });
$parcel$export(module.exports, "classCallCheck", function () { return (parcelRequire("2542o")).default; });
$parcel$export(module.exports, "construct", function () { return (parcelRequire("b3znr")).default; });
$parcel$export(module.exports, "createClass", function () { return (parcelRequire("13tSN")).default; });
$parcel$export(module.exports, "createSuper", function () { return (parcelRequire("kDazr")).default; });
$parcel$export(module.exports, "defineProperty", function () { return (parcelRequire("1Oz8e")).default; });
$parcel$export(module.exports, "inherits", function () { return (parcelRequire("apNiO")).default; });
$parcel$export(module.exports, "objectSpread", function () { return (parcelRequire("6eSL7")).default; });
$parcel$export(module.exports, "slicedToArray", function () { return (parcelRequire("8xmWW")).default; });
$parcel$export(module.exports, "toConsumableArray", function () { return (parcelRequire("hdpFY")).default; });
$parcel$export(module.exports, "typeOf", function () { return (parcelRequire("5k3v8")).default; });





var $hUqvX = parcelRequire("hUqvX");











var $2542o = parcelRequire("2542o");
















var $b3znr = parcelRequire("b3znr");

var $13tSN = parcelRequire("13tSN");

var $kDazr = parcelRequire("kDazr");




var $1Oz8e = parcelRequire("1Oz8e");




var $apNiO = parcelRequire("apNiO");
















var $6eSL7 = parcelRequire("6eSL7");








var $8xmWW = parcelRequire("8xmWW");







var $hdpFY = parcelRequire("hdpFY");



var $5k3v8 = parcelRequire("5k3v8");




});
parcelRequire.register("hUqvX", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $d09c3bd50bcf2285$export$2e2bcd8739ae039; });
function $d09c3bd50bcf2285$export$2e2bcd8739ae039(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}

});

parcelRequire.register("2542o", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $183f2e32fab4bcc1$export$2e2bcd8739ae039; });
function $183f2e32fab4bcc1$export$2e2bcd8739ae039(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}

});

parcelRequire.register("b3znr", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $80cb6aaa12d4e88e$export$2e2bcd8739ae039; });

var $jjnLN = parcelRequire("jjnLN");
function $80cb6aaa12d4e88e$var$isNativeReflectConstruct() {
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
function $80cb6aaa12d4e88e$var$construct(Parent1, args1, Class1) {
    if ($80cb6aaa12d4e88e$var$isNativeReflectConstruct()) $80cb6aaa12d4e88e$var$construct = Reflect.construct;
    else $80cb6aaa12d4e88e$var$construct = function construct(Parent, args, Class) {
        var a = [
            null
        ];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) $jjnLN.default(instance, Class.prototype);
        return instance;
    };
    return $80cb6aaa12d4e88e$var$construct.apply(null, arguments);
}
function $80cb6aaa12d4e88e$export$2e2bcd8739ae039(Parent, args, Class) {
    return $80cb6aaa12d4e88e$var$construct.apply(null, arguments);
}

});
parcelRequire.register("jjnLN", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $e0f23ade35fcfb13$export$2e2bcd8739ae039; });
function $e0f23ade35fcfb13$var$setPrototypeOf(o1, p1) {
    $e0f23ade35fcfb13$var$setPrototypeOf = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return $e0f23ade35fcfb13$var$setPrototypeOf(o1, p1);
}
function $e0f23ade35fcfb13$export$2e2bcd8739ae039(o, p) {
    return $e0f23ade35fcfb13$var$setPrototypeOf(o, p);
}

});


parcelRequire.register("13tSN", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $0c4d405a2741f760$export$2e2bcd8739ae039; });
function $0c4d405a2741f760$var$_defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function $0c4d405a2741f760$export$2e2bcd8739ae039(Constructor, protoProps, staticProps) {
    if (protoProps) $0c4d405a2741f760$var$_defineProperties(Constructor.prototype, protoProps);
    if (staticProps) $0c4d405a2741f760$var$_defineProperties(Constructor, staticProps);
    return Constructor;
}

});

parcelRequire.register("kDazr", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $f04fa64c3d7b4317$export$2e2bcd8739ae039; });

var $6FUJE = parcelRequire("6FUJE");

var $2EI1G = parcelRequire("2EI1G");

var $dK56A = parcelRequire("dK56A");
function $f04fa64c3d7b4317$export$2e2bcd8739ae039(Derived) {
    var hasNativeReflectConstruct = $6FUJE.default();
    return function _createSuperInternal() {
        var Super = $2EI1G.default(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = $2EI1G.default(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return $dK56A.default(this, result);
    };
}

});
parcelRequire.register("6FUJE", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $4dc294de69933118$export$2e2bcd8739ae039; });
function $4dc294de69933118$export$2e2bcd8739ae039() {
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

parcelRequire.register("2EI1G", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $1ef177db56fc0dc4$export$2e2bcd8739ae039; });
function $1ef177db56fc0dc4$var$getPrototypeOf(o1) {
    $1ef177db56fc0dc4$var$getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return $1ef177db56fc0dc4$var$getPrototypeOf(o1);
}
function $1ef177db56fc0dc4$export$2e2bcd8739ae039(o) {
    return $1ef177db56fc0dc4$var$getPrototypeOf(o);
}

});

parcelRequire.register("dK56A", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $a013880c9e4ed998$export$2e2bcd8739ae039; });

var $hUqvX = parcelRequire("hUqvX");

var $5k3v8 = parcelRequire("5k3v8");
function $a013880c9e4ed998$export$2e2bcd8739ae039(self, call) {
    if (call && ($5k3v8.default(call) === "object" || typeof call === "function")) return call;
    return $hUqvX.default(self);
}

});
parcelRequire.register("5k3v8", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $3e01894717a02377$export$2e2bcd8739ae039; });
function $3e01894717a02377$export$2e2bcd8739ae039(obj) {
    return obj && obj.constructor === Symbol ? "symbol" : typeof obj;
}

});



parcelRequire.register("1Oz8e", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $1525b66991b027ce$export$2e2bcd8739ae039; });
function $1525b66991b027ce$export$2e2bcd8739ae039(obj, key, value) {
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

parcelRequire.register("apNiO", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $79527ba00aad5d01$export$2e2bcd8739ae039; });

var $jjnLN = parcelRequire("jjnLN");
function $79527ba00aad5d01$export$2e2bcd8739ae039(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) $jjnLN.default(subClass, superClass);
}

});

parcelRequire.register("6eSL7", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $48ae86e2b9d833d0$export$2e2bcd8739ae039; });

var $1Oz8e = parcelRequire("1Oz8e");
function $48ae86e2b9d833d0$export$2e2bcd8739ae039(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        var ownKeys = Object.keys(source);
        if (typeof Object.getOwnPropertySymbols === 'function') ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {
            return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
        ownKeys.forEach(function(key) {
            $1Oz8e.default(target, key, source[key]);
        });
    }
    return target;
}

});

parcelRequire.register("8xmWW", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $637335197d0db8c1$export$2e2bcd8739ae039; });

var $gLzaO = parcelRequire("gLzaO");

var $feyZw = parcelRequire("feyZw");

var $hpifX = parcelRequire("hpifX");

var $2hzsx = parcelRequire("2hzsx");
function $637335197d0db8c1$export$2e2bcd8739ae039(arr, i) {
    return $gLzaO.default(arr) || $feyZw.default(arr, i) || $2hzsx.default(arr, i) || $hpifX.default();
}

});
parcelRequire.register("gLzaO", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $0326646a95881fee$export$2e2bcd8739ae039; });
function $0326646a95881fee$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return arr;
}

});

parcelRequire.register("feyZw", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $b1734e6030a23d62$export$2e2bcd8739ae039; });
function $b1734e6030a23d62$export$2e2bcd8739ae039(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

});

parcelRequire.register("hpifX", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $cac2eec898ea3060$export$2e2bcd8739ae039; });
function $cac2eec898ea3060$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});

parcelRequire.register("2hzsx", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $1a98acc87c3a9cc2$export$2e2bcd8739ae039; });

var $kNr9X = parcelRequire("kNr9X");
function $1a98acc87c3a9cc2$export$2e2bcd8739ae039(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $kNr9X.default(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $kNr9X.default(o, minLen);
}

});
parcelRequire.register("kNr9X", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $f23d739495d11fae$export$2e2bcd8739ae039; });
function $f23d739495d11fae$export$2e2bcd8739ae039(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}

});



parcelRequire.register("hdpFY", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $c887914da228827e$export$2e2bcd8739ae039; });

var $fe3fN = parcelRequire("fe3fN");

var $feyZw = parcelRequire("feyZw");

var $1BUxq = parcelRequire("1BUxq");

var $2hzsx = parcelRequire("2hzsx");
function $c887914da228827e$export$2e2bcd8739ae039(arr) {
    return $fe3fN.default(arr) || $feyZw.default(arr) || $2hzsx.default(arr) || $1BUxq.default();
}

});
parcelRequire.register("fe3fN", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $b15aaff80a45556e$export$2e2bcd8739ae039; });

var $kNr9X = parcelRequire("kNr9X");
function $b15aaff80a45556e$export$2e2bcd8739ae039(arr) {
    if (Array.isArray(arr)) return $kNr9X.default(arr);
}

});

parcelRequire.register("1BUxq", function(module, exports) {

$parcel$export(module.exports, "default", function () { return $12c51a6fb7731a35$export$2e2bcd8739ae039; });
function $12c51a6fb7731a35$export$2e2bcd8739ae039() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

});



parcelRequire.register("bKYYH", function(module, exports) {

$parcel$export(module.exports, "_throw", function () { return $66e29410be2879a4$export$82a8af9b11518516; });
$parcel$export(module.exports, "runWorker", function () { return $66e29410be2879a4$export$dd2e08b4a54c623f; });
$parcel$export(module.exports, "cardinality", function () { return $66e29410be2879a4$export$9e9949f96c411257; });
$parcel$export(module.exports, "difference", function () { return $66e29410be2879a4$export$acaf96a27438246b; });
$parcel$export(module.exports, "intersection", function () { return $66e29410be2879a4$export$bc86dfbf7795668c; });
$parcel$export(module.exports, "isElement", function () { return $66e29410be2879a4$export$45a5e7f76e0caa8d; });
$parcel$export(module.exports, "isEqual", function () { return $66e29410be2879a4$export$248d38f6296296c5; });
$parcel$export(module.exports, "isStrictSubset", function () { return $66e29410be2879a4$export$9cd5ab22e2b3eb2a; });
$parcel$export(module.exports, "isSubset", function () { return $66e29410be2879a4$export$af04532ec9ff13d2; });
$parcel$export(module.exports, "union", function () { return $66e29410be2879a4$export$971dd5b0dfd021b6; });
$parcel$export(module.exports, "formatExpression", function () { return $66e29410be2879a4$export$495510c2c593da91; });
var $66e29410be2879a4$export$82a8af9b11518516 = function(e) {
    throw e;
};
var $66e29410be2879a4$export$dd2e08b4a54c623f = function(worker) {
    onmessage = function(e) {
        return postMessage(worker(e.data));
    };
};
var $66e29410be2879a4$var$asSet = function(values) {
    return values instanceof Set ? values : new Set(values);
};
var $66e29410be2879a4$export$9e9949f96c411257 = function(s) {
    return $66e29410be2879a4$var$asSet(s).size;
};
var $66e29410be2879a4$export$acaf96a27438246b = function(a, b) {
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
var $66e29410be2879a4$export$bc86dfbf7795668c = function(a, b) {
    var result = new Set();
    var setA = $66e29410be2879a4$var$asSet(a);
    var setB = $66e29410be2879a4$var$asSet(b);
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
var $66e29410be2879a4$export$45a5e7f76e0caa8d = function(e, s) {
    return Array.isArray(s) ? s.includes(e) : $66e29410be2879a4$var$asSet(s).has(e);
};
var $66e29410be2879a4$var$internalIsSubset = function(setA, setB) {
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
var $66e29410be2879a4$export$248d38f6296296c5 = function(a, b) {
    var setA = $66e29410be2879a4$var$asSet(a);
    var setB = $66e29410be2879a4$var$asSet(b);
    return setA.size === setB.size && $66e29410be2879a4$var$internalIsSubset(setA, setB);
};
var $66e29410be2879a4$export$9cd5ab22e2b3eb2a = function(a, b) {
    var setA = $66e29410be2879a4$var$asSet(a);
    var setB = $66e29410be2879a4$var$asSet(b);
    return setA.size !== setB.size && $66e29410be2879a4$var$internalIsSubset(setA, setB);
};
var $66e29410be2879a4$export$af04532ec9ff13d2 = function(a, b) {
    return $66e29410be2879a4$var$internalIsSubset($66e29410be2879a4$var$asSet(a), $66e29410be2879a4$var$asSet(b));
};
var $66e29410be2879a4$export$971dd5b0dfd021b6 = function(a, b) {
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
var $66e29410be2879a4$export$495510c2c593da91 = function(expression) {
    switch(expression.type){
        case 'true':
        case 'false':
            return expression.type;
        case 'var':
            return expression.name;
        case 'not':
            return "(not ".concat($66e29410be2879a4$export$495510c2c593da91(expression.value), ")");
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
            return "(".concat($66e29410be2879a4$export$495510c2c593da91(expression.left), " ").concat(expression.type, " ").concat($66e29410be2879a4$export$495510c2c593da91(expression.right), ")");
    }
};

});

})();
//# sourceMappingURL=parser.90f93722.js.map
