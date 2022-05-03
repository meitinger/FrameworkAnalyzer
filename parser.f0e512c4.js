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
parcelRequire.register("9wYJv", function(module, exports) {

$parcel$export(module.exports, "Buffer", function () { return $6f06367fe79734cf$export$a143d493d941bafc; }, function (v) { return $6f06367fe79734cf$export$a143d493d941bafc = v; });
$parcel$export(module.exports, "INSPECT_MAX_BYTES", function () { return $6f06367fe79734cf$export$f99ded8fe4b79145; }, function (v) { return $6f06367fe79734cf$export$f99ded8fe4b79145 = v; });
parcelRequire("e6kUJ");
var $19RbB = parcelRequire("19RbB");
var $4gPZ8 = parcelRequire("4gPZ8");
var $02PMs = parcelRequire("02PMs");
var $eOS3o = parcelRequire("eOS3o");
var $jzJ8f = parcelRequire("jzJ8f");
var $yLxk8 = parcelRequire("yLxk8");
var $6f06367fe79734cf$export$a143d493d941bafc;
var $6f06367fe79734cf$export$e4cf37d7f6fb9e0a;
var $6f06367fe79734cf$export$f99ded8fe4b79145;
var $6f06367fe79734cf$export$599f31c3813fae4d;
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';

var $hfwrD = parcelRequire("hfwrD");

var $h1LEL = parcelRequire("h1LEL");
var $6f06367fe79734cf$var$customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' // eslint-disable-line dot-notation
 ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
 : null;
$6f06367fe79734cf$export$a143d493d941bafc = $6f06367fe79734cf$var$Buffer;
$6f06367fe79734cf$export$e4cf37d7f6fb9e0a = $6f06367fe79734cf$var$SlowBuffer;
$6f06367fe79734cf$export$f99ded8fe4b79145 = 50;
var $6f06367fe79734cf$var$K_MAX_LENGTH = 0x7fffffff;
$6f06367fe79734cf$export$599f31c3813fae4d = $6f06367fe79734cf$var$K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ $6f06367fe79734cf$var$Buffer.TYPED_ARRAY_SUPPORT = $6f06367fe79734cf$var$typedArraySupport();
if (!$6f06367fe79734cf$var$Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function $6f06367fe79734cf$var$typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function foo() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty($6f06367fe79734cf$var$Buffer.prototype, 'parent', {
    enumerable: true,
    get: function get() {
        if (!$6f06367fe79734cf$var$Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty($6f06367fe79734cf$var$Buffer.prototype, 'offset', {
    enumerable: true,
    get: function get() {
        if (!$6f06367fe79734cf$var$Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function $6f06367fe79734cf$var$createBuffer(length) {
    if (length > $6f06367fe79734cf$var$K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, $6f06367fe79734cf$var$Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function $6f06367fe79734cf$var$Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return $6f06367fe79734cf$var$allocUnsafe(arg);
    }
    return $6f06367fe79734cf$var$from(arg, encodingOrOffset, length);
}
$6f06367fe79734cf$var$Buffer.poolSize = 8192 // not used by this implementation
;
function $6f06367fe79734cf$var$from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return $6f06367fe79734cf$var$fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return $6f06367fe79734cf$var$fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (typeof value === "undefined" ? "undefined" : $19RbB.default(value)));
    if ($6f06367fe79734cf$var$isInstance(value, ArrayBuffer) || value && $6f06367fe79734cf$var$isInstance(value.buffer, ArrayBuffer)) return $6f06367fe79734cf$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && ($6f06367fe79734cf$var$isInstance(value, SharedArrayBuffer) || value && $6f06367fe79734cf$var$isInstance(value.buffer, SharedArrayBuffer))) return $6f06367fe79734cf$var$fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return $6f06367fe79734cf$var$Buffer.from(valueOf, encodingOrOffset, length);
    var b = $6f06367fe79734cf$var$fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return $6f06367fe79734cf$var$Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + (typeof value === "undefined" ? "undefined" : $19RbB.default(value)));
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ $6f06367fe79734cf$var$Buffer.from = function(value, encodingOrOffset, length) {
    return $6f06367fe79734cf$var$from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf($6f06367fe79734cf$var$Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf($6f06367fe79734cf$var$Buffer, Uint8Array);
function $6f06367fe79734cf$var$assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function $6f06367fe79734cf$var$alloc(size, fill, encoding) {
    $6f06367fe79734cf$var$assertSize(size);
    if (size <= 0) return $6f06367fe79734cf$var$createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? $6f06367fe79734cf$var$createBuffer(size).fill(fill, encoding) : $6f06367fe79734cf$var$createBuffer(size).fill(fill);
    return $6f06367fe79734cf$var$createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ $6f06367fe79734cf$var$Buffer.alloc = function(size, fill, encoding) {
    return $6f06367fe79734cf$var$alloc(size, fill, encoding);
};
function $6f06367fe79734cf$var$allocUnsafe(size) {
    $6f06367fe79734cf$var$assertSize(size);
    return $6f06367fe79734cf$var$createBuffer(size < 0 ? 0 : $6f06367fe79734cf$var$checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ $6f06367fe79734cf$var$Buffer.allocUnsafe = function(size) {
    return $6f06367fe79734cf$var$allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ $6f06367fe79734cf$var$Buffer.allocUnsafeSlow = function(size) {
    return $6f06367fe79734cf$var$allocUnsafe(size);
};
function $6f06367fe79734cf$var$fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!$6f06367fe79734cf$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = $6f06367fe79734cf$var$byteLength(string, encoding) | 0;
    var buf = $6f06367fe79734cf$var$createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function $6f06367fe79734cf$var$fromArrayLike(array) {
    var length = array.length < 0 ? 0 : $6f06367fe79734cf$var$checked(array.length) | 0;
    var buf = $6f06367fe79734cf$var$createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function $6f06367fe79734cf$var$fromArrayView(arrayView) {
    if ($6f06367fe79734cf$var$isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return $6f06367fe79734cf$var$fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return $6f06367fe79734cf$var$fromArrayLike(arrayView);
}
function $6f06367fe79734cf$var$fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, $6f06367fe79734cf$var$Buffer.prototype);
    return buf;
}
function $6f06367fe79734cf$var$fromObject(obj) {
    if ($6f06367fe79734cf$var$Buffer.isBuffer(obj)) {
        var len = $6f06367fe79734cf$var$checked(obj.length) | 0;
        var buf = $6f06367fe79734cf$var$createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || $6f06367fe79734cf$var$numberIsNaN(obj.length)) return $6f06367fe79734cf$var$createBuffer(0);
        return $6f06367fe79734cf$var$fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return $6f06367fe79734cf$var$fromArrayLike(obj.data);
}
function $6f06367fe79734cf$var$checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= $6f06367fe79734cf$var$K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + $6f06367fe79734cf$var$K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function $6f06367fe79734cf$var$SlowBuffer(length) {
    if (+length != length) length = 0;
    return $6f06367fe79734cf$var$Buffer.alloc(+length);
}
$6f06367fe79734cf$var$Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== $6f06367fe79734cf$var$Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
    ;
};
$6f06367fe79734cf$var$Buffer.compare = function compare(a, b) {
    if ($6f06367fe79734cf$var$isInstance(a, Uint8Array)) a = $6f06367fe79734cf$var$Buffer.from(a, a.offset, a.byteLength);
    if ($6f06367fe79734cf$var$isInstance(b, Uint8Array)) b = $6f06367fe79734cf$var$Buffer.from(b, b.offset, b.byteLength);
    if (!$6f06367fe79734cf$var$Buffer.isBuffer(a) || !$6f06367fe79734cf$var$Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
$6f06367fe79734cf$var$Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
$6f06367fe79734cf$var$Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return $6f06367fe79734cf$var$Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = $6f06367fe79734cf$var$Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if ($6f06367fe79734cf$var$isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) {
                if (!$6f06367fe79734cf$var$Buffer.isBuffer(buf)) buf = $6f06367fe79734cf$var$Buffer.from(buf);
                buf.copy(buffer, pos);
            } else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!$6f06367fe79734cf$var$Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function $6f06367fe79734cf$var$byteLength(string, encoding) {
    if ($6f06367fe79734cf$var$Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || $6f06367fe79734cf$var$isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + (typeof string === "undefined" ? "undefined" : $19RbB.default(string)));
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return $6f06367fe79734cf$var$utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return $6f06367fe79734cf$var$base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : $6f06367fe79734cf$var$utf8ToBytes(string).length // assume utf8
            ;
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
$6f06367fe79734cf$var$Buffer.byteLength = $6f06367fe79734cf$var$byteLength;
function $6f06367fe79734cf$var$slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return $6f06367fe79734cf$var$hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return $6f06367fe79734cf$var$utf8Slice(this, start, end);
        case 'ascii':
            return $6f06367fe79734cf$var$asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return $6f06367fe79734cf$var$latin1Slice(this, start, end);
        case 'base64':
            return $6f06367fe79734cf$var$base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $6f06367fe79734cf$var$utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
$6f06367fe79734cf$var$Buffer.prototype._isBuffer = true;
function $6f06367fe79734cf$var$swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
$6f06367fe79734cf$var$Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)$6f06367fe79734cf$var$swap(this, i, i + 1);
    return this;
};
$6f06367fe79734cf$var$Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        $6f06367fe79734cf$var$swap(this, i, i + 3);
        $6f06367fe79734cf$var$swap(this, i + 1, i + 2);
    }
    return this;
};
$6f06367fe79734cf$var$Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        $6f06367fe79734cf$var$swap(this, i, i + 7);
        $6f06367fe79734cf$var$swap(this, i + 1, i + 6);
        $6f06367fe79734cf$var$swap(this, i + 2, i + 5);
        $6f06367fe79734cf$var$swap(this, i + 3, i + 4);
    }
    return this;
};
$6f06367fe79734cf$var$Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return $6f06367fe79734cf$var$utf8Slice(this, 0, length);
    return $6f06367fe79734cf$var$slowToString.apply(this, arguments);
};
$6f06367fe79734cf$var$Buffer.prototype.toLocaleString = $6f06367fe79734cf$var$Buffer.prototype.toString;
$6f06367fe79734cf$var$Buffer.prototype.equals = function equals(b) {
    if (!$6f06367fe79734cf$var$Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return $6f06367fe79734cf$var$Buffer.compare(this, b) === 0;
};
$6f06367fe79734cf$var$Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = $6f06367fe79734cf$export$f99ded8fe4b79145;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if ($6f06367fe79734cf$var$customInspectSymbol) $6f06367fe79734cf$var$Buffer.prototype[$6f06367fe79734cf$var$customInspectSymbol] = $6f06367fe79734cf$var$Buffer.prototype.inspect;
$6f06367fe79734cf$var$Buffer.prototype.compare = function compare(target, start, end, thisStart, thisEnd) {
    if ($6f06367fe79734cf$var$isInstance(target, Uint8Array)) target = $6f06367fe79734cf$var$Buffer.from(target, target.offset, target.byteLength);
    if (!$6f06367fe79734cf$var$Buffer.isBuffer(target)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + (typeof target === "undefined" ? "undefined" : $19RbB.default(target)));
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function $6f06367fe79734cf$var$bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 0x7fffffff) byteOffset = 0x7fffffff;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset // Coerce to Number.
    ;
    if ($6f06367fe79734cf$var$numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = $6f06367fe79734cf$var$Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if ($6f06367fe79734cf$var$Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return $6f06367fe79734cf$var$arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 0xFF // Search for a byte value [0-255]
        ;
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return $6f06367fe79734cf$var$arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function $6f06367fe79734cf$var$arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i1;
    if (dir) {
        var foundIndex = -1;
        for(i1 = byteOffset; i1 < arrLength; i1++)if (read(arr, i1) === read(val, foundIndex === -1 ? 0 : i1 - foundIndex)) {
            if (foundIndex === -1) foundIndex = i1;
            if (i1 - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i1 -= i1 - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i1 = byteOffset; i1 >= 0; i1--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i1 + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i1;
        }
    }
    return -1;
}
$6f06367fe79734cf$var$Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
$6f06367fe79734cf$var$Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return $6f06367fe79734cf$var$bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
$6f06367fe79734cf$var$Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return $6f06367fe79734cf$var$bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function $6f06367fe79734cf$var$hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    var i;
    for(i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if ($6f06367fe79734cf$var$numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function $6f06367fe79734cf$var$utf8Write(buf, string, offset, length) {
    return $6f06367fe79734cf$var$blitBuffer($6f06367fe79734cf$var$utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function $6f06367fe79734cf$var$asciiWrite(buf, string, offset, length) {
    return $6f06367fe79734cf$var$blitBuffer($6f06367fe79734cf$var$asciiToBytes(string), buf, offset, length);
}
function $6f06367fe79734cf$var$base64Write(buf, string, offset, length) {
    return $6f06367fe79734cf$var$blitBuffer($6f06367fe79734cf$var$base64ToBytes(string), buf, offset, length);
}
function $6f06367fe79734cf$var$ucs2Write(buf, string, offset, length) {
    return $6f06367fe79734cf$var$blitBuffer($6f06367fe79734cf$var$utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
$6f06367fe79734cf$var$Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return $6f06367fe79734cf$var$hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return $6f06367fe79734cf$var$utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return $6f06367fe79734cf$var$asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return $6f06367fe79734cf$var$base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return $6f06367fe79734cf$var$ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
$6f06367fe79734cf$var$Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function $6f06367fe79734cf$var$base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return $hfwrD.fromByteArray(buf);
    else return $hfwrD.fromByteArray(buf.slice(start, end));
}
function $6f06367fe79734cf$var$utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 0xEF ? 4 : firstByte > 0xDF ? 3 : firstByte > 0xBF ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte = void 0, thirdByte = void 0, fourthByte = void 0, tempCodePoint = void 0;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 0x80) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0x1F) << 0x6 | secondByte & 0x3F;
                        if (tempCodePoint > 0x7F) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | thirdByte & 0x3F;
                        if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                        tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | fourthByte & 0x3F;
                        if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 0xFFFD;
            bytesPerSequence = 1;
        } else if (codePoint > 0xFFFF) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 0x10000;
            res.push(codePoint >>> 10 & 0x3FF | 0xD800);
            codePoint = 0xDC00 | codePoint & 0x3FF;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return $6f06367fe79734cf$var$decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var $6f06367fe79734cf$var$MAX_ARGUMENTS_LENGTH = 0x1000;
function $6f06367fe79734cf$var$decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= $6f06367fe79734cf$var$MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
    ;
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += $6f06367fe79734cf$var$MAX_ARGUMENTS_LENGTH));
    return res;
}
function $6f06367fe79734cf$var$asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 0x7F);
    return ret;
}
function $6f06367fe79734cf$var$latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function $6f06367fe79734cf$var$hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += $6f06367fe79734cf$var$hexSliceLookupTable[buf[i]];
    return out;
}
function $6f06367fe79734cf$var$utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
$6f06367fe79734cf$var$Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, $6f06367fe79734cf$var$Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function $6f06367fe79734cf$var$checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
$6f06367fe79734cf$var$Buffer.prototype.readUintLE = $6f06367fe79734cf$var$Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    return val;
};
$6f06367fe79734cf$var$Buffer.prototype.readUintBE = $6f06367fe79734cf$var$Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset + --byteLength];
    var mul = 1;
    while(byteLength > 0 && (mul *= 0x100))val += this[offset + --byteLength] * mul;
    return val;
};
$6f06367fe79734cf$var$Buffer.prototype.readUint8 = $6f06367fe79734cf$var$Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 1, this.length);
    return this[offset];
};
$6f06367fe79734cf$var$Buffer.prototype.readUint16LE = $6f06367fe79734cf$var$Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
$6f06367fe79734cf$var$Buffer.prototype.readUint16BE = $6f06367fe79734cf$var$Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
$6f06367fe79734cf$var$Buffer.prototype.readUint32LE = $6f06367fe79734cf$var$Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 0x1000000;
};
$6f06367fe79734cf$var$Buffer.prototype.readUint32BE = $6f06367fe79734cf$var$Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 4, this.length);
    return this[offset] * 0x1000000 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
$6f06367fe79734cf$var$Buffer.prototype.readBigUInt64LE = $6f06367fe79734cf$var$defineBigIntMethod(function readBigUInt64LE(offset) {
    offset = offset >>> 0;
    $6f06367fe79734cf$var$validateNumber(offset, 'offset');
    var first = this[offset];
    var last = this[offset + 7];
    if (first === undefined || last === undefined) $6f06367fe79734cf$var$boundsError(offset, this.length - 8);
    var lo = first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * Math.pow(2, 24);
    var hi = this[++offset] + this[++offset] * 256 + this[++offset] * 65536 + last * Math.pow(2, 24);
    return BigInt(lo) + (BigInt(hi) << BigInt(32));
});
$6f06367fe79734cf$var$Buffer.prototype.readBigUInt64BE = $6f06367fe79734cf$var$defineBigIntMethod(function readBigUInt64BE(offset) {
    offset = offset >>> 0;
    $6f06367fe79734cf$var$validateNumber(offset, 'offset');
    var first = this[offset];
    var last = this[offset + 7];
    if (first === undefined || last === undefined) $6f06367fe79734cf$var$boundsError(offset, this.length - 8);
    var hi = first * Math.pow(2, 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    var lo = this[++offset] * Math.pow(2, 24) + this[++offset] * 65536 + this[++offset] * 256 + last;
    return (BigInt(hi) << BigInt(32)) + BigInt(lo);
});
$6f06367fe79734cf$var$Buffer.prototype.readIntLE = function readIntLE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, byteLength, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while(++i < byteLength && (mul *= 0x100))val += this[offset + i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$6f06367fe79734cf$var$Buffer.prototype.readIntBE = function readIntBE(offset, byteLength, noAssert) {
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, byteLength, this.length);
    var i = byteLength;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 0x100))val += this[offset + --i] * mul;
    mul *= 0x80;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength);
    return val;
};
$6f06367fe79734cf$var$Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 1, this.length);
    if (!(this[offset] & 0x80)) return this[offset];
    return (0xff - this[offset] + 1) * -1;
};
$6f06367fe79734cf$var$Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$6f06367fe79734cf$var$Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 0x8000 ? val | 0xFFFF0000 : val;
};
$6f06367fe79734cf$var$Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
$6f06367fe79734cf$var$Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
$6f06367fe79734cf$var$Buffer.prototype.readBigInt64LE = $6f06367fe79734cf$var$defineBigIntMethod(function readBigInt64LE(offset) {
    offset = offset >>> 0;
    $6f06367fe79734cf$var$validateNumber(offset, 'offset');
    var first = this[offset];
    var last = this[offset + 7];
    if (first === undefined || last === undefined) $6f06367fe79734cf$var$boundsError(offset, this.length - 8);
    var val = this[offset + 4] + this[offset + 5] * 256 + this[offset + 6] * 65536 + (last << 24 // Overflow
    );
    return (BigInt(val) << BigInt(32)) + BigInt(first + this[++offset] * 256 + this[++offset] * 65536 + this[++offset] * Math.pow(2, 24));
});
$6f06367fe79734cf$var$Buffer.prototype.readBigInt64BE = $6f06367fe79734cf$var$defineBigIntMethod(function readBigInt64BE(offset) {
    offset = offset >>> 0;
    $6f06367fe79734cf$var$validateNumber(offset, 'offset');
    var first = this[offset];
    var last = this[offset + 7];
    if (first === undefined || last === undefined) $6f06367fe79734cf$var$boundsError(offset, this.length - 8);
    var val = (first << 24) + this[++offset] * 65536 + this[++offset] * 256 + this[++offset];
    return (BigInt(val) << BigInt(32)) + BigInt(this[++offset] * Math.pow(2, 24) + this[++offset] * 65536 + this[++offset] * 256 + last);
});
$6f06367fe79734cf$var$Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 4, this.length);
    return $h1LEL.read(this, offset, true, 23, 4);
};
$6f06367fe79734cf$var$Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 4, this.length);
    return $h1LEL.read(this, offset, false, 23, 4);
};
$6f06367fe79734cf$var$Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 8, this.length);
    return $h1LEL.read(this, offset, true, 52, 8);
};
$6f06367fe79734cf$var$Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkOffset(offset, 8, this.length);
    return $h1LEL.read(this, offset, false, 52, 8);
};
function $6f06367fe79734cf$var$checkInt(buf, value, offset, ext, max, min) {
    if (!$6f06367fe79734cf$var$Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
$6f06367fe79734cf$var$Buffer.prototype.writeUintLE = $6f06367fe79734cf$var$Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $6f06367fe79734cf$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$6f06367fe79734cf$var$Buffer.prototype.writeUintBE = $6f06367fe79734cf$var$Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength = byteLength >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength) - 1;
        $6f06367fe79734cf$var$checkInt(this, value, offset, byteLength, maxBytes, 0);
    }
    var i = byteLength - 1;
    var mul = 1;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100))this[offset + i] = value / mul & 0xFF;
    return offset + byteLength;
};
$6f06367fe79734cf$var$Buffer.prototype.writeUint8 = $6f06367fe79734cf$var$Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 1, 0xff, 0);
    this[offset] = value & 0xff;
    return offset + 1;
};
$6f06367fe79734cf$var$Buffer.prototype.writeUint16LE = $6f06367fe79734cf$var$Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$6f06367fe79734cf$var$Buffer.prototype.writeUint16BE = $6f06367fe79734cf$var$Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 2, 0xffff, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$6f06367fe79734cf$var$Buffer.prototype.writeUint32LE = $6f06367fe79734cf$var$Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 0xff;
    return offset + 4;
};
$6f06367fe79734cf$var$Buffer.prototype.writeUint32BE = $6f06367fe79734cf$var$Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 4, 0xffffffff, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
function $6f06367fe79734cf$var$wrtBigUInt64LE(buf, value, offset, min, max) {
    $6f06367fe79734cf$var$checkIntBI(value, min, max, buf, offset, 7);
    var lo = Number(value & BigInt(0xffffffff));
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    lo = lo >> 8;
    buf[offset++] = lo;
    var hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    hi = hi >> 8;
    buf[offset++] = hi;
    return offset;
}
function $6f06367fe79734cf$var$wrtBigUInt64BE(buf, value, offset, min, max) {
    $6f06367fe79734cf$var$checkIntBI(value, min, max, buf, offset, 7);
    var lo = Number(value & BigInt(0xffffffff));
    buf[offset + 7] = lo;
    lo = lo >> 8;
    buf[offset + 6] = lo;
    lo = lo >> 8;
    buf[offset + 5] = lo;
    lo = lo >> 8;
    buf[offset + 4] = lo;
    var hi = Number(value >> BigInt(32) & BigInt(0xffffffff));
    buf[offset + 3] = hi;
    hi = hi >> 8;
    buf[offset + 2] = hi;
    hi = hi >> 8;
    buf[offset + 1] = hi;
    hi = hi >> 8;
    buf[offset] = hi;
    return offset + 8;
}
$6f06367fe79734cf$var$Buffer.prototype.writeBigUInt64LE = $6f06367fe79734cf$var$defineBigIntMethod(function writeBigUInt64LE(value) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return $6f06367fe79734cf$var$wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
$6f06367fe79734cf$var$Buffer.prototype.writeBigUInt64BE = $6f06367fe79734cf$var$defineBigIntMethod(function writeBigUInt64BE(value) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return $6f06367fe79734cf$var$wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'));
});
$6f06367fe79734cf$var$Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        $6f06367fe79734cf$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 0xFF;
    while(++i < byteLength && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$6f06367fe79734cf$var$Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength - 1);
        $6f06367fe79734cf$var$checkInt(this, value, offset, byteLength, limit - 1, -limit);
    }
    var i = byteLength - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 0xFF;
    while(--i >= 0 && (mul *= 0x100)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 0xFF;
    }
    return offset + byteLength;
};
$6f06367fe79734cf$var$Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 1, 0x7f, -128);
    if (value < 0) value = 0xff + value + 1;
    this[offset] = value & 0xff;
    return offset + 1;
};
$6f06367fe79734cf$var$Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
$6f06367fe79734cf$var$Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 2, 0x7fff, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 0xff;
    return offset + 2;
};
$6f06367fe79734cf$var$Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    this[offset] = value & 0xff;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
$6f06367fe79734cf$var$Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkInt(this, value, offset, 4, 0x7fffffff, -2147483648);
    if (value < 0) value = 0xffffffff + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 0xff;
    return offset + 4;
};
$6f06367fe79734cf$var$Buffer.prototype.writeBigInt64LE = $6f06367fe79734cf$var$defineBigIntMethod(function writeBigInt64LE(value) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return $6f06367fe79734cf$var$wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
$6f06367fe79734cf$var$Buffer.prototype.writeBigInt64BE = $6f06367fe79734cf$var$defineBigIntMethod(function writeBigInt64BE(value) {
    var offset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    return $6f06367fe79734cf$var$wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'));
});
function $6f06367fe79734cf$var$checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function $6f06367fe79734cf$var$writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -340282346638528860000000000000000000000);
    $h1LEL.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
$6f06367fe79734cf$var$Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return $6f06367fe79734cf$var$writeFloat(this, value, offset, true, noAssert);
};
$6f06367fe79734cf$var$Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return $6f06367fe79734cf$var$writeFloat(this, value, offset, false, noAssert);
};
function $6f06367fe79734cf$var$writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) $6f06367fe79734cf$var$checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    $h1LEL.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
$6f06367fe79734cf$var$Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return $6f06367fe79734cf$var$writeDouble(this, value, offset, true, noAssert);
};
$6f06367fe79734cf$var$Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return $6f06367fe79734cf$var$writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
$6f06367fe79734cf$var$Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!$6f06367fe79734cf$var$Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
$6f06367fe79734cf$var$Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !$6f06367fe79734cf$var$Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = $6f06367fe79734cf$var$Buffer.isBuffer(val) ? val : $6f06367fe79734cf$var$Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// CUSTOM ERRORS
// =============
// Simplified versions from Node, changed for Buffer-only usage
var $6f06367fe79734cf$var$errors = {};
function $6f06367fe79734cf$var$E(sym, getMessage, Base1) {
    $6f06367fe79734cf$var$errors[sym] = /*#__PURE__*/ function(Base) {
        $4gPZ8.default(NodeError, Base);
        var _super = $02PMs.default(NodeError);
        function NodeError() {
            $eOS3o.default(this, NodeError);
            var _this;
            _this = _super.call(this);
            Object.defineProperty($jzJ8f.default(_this), 'message', {
                value: getMessage.apply($jzJ8f.default(_this), arguments),
                writable: true,
                configurable: true
            });
            // Add the error code to the name to include it in the stack trace.
            _this.name = "".concat(_this.name, " [").concat(sym, "]");
            // Access the stack to generate the error message including the error code
            // from the name.
            _this.stack // eslint-disable-line no-unused-expressions
            ;
            // Reset the name to the actual name.
            delete _this.name;
            return _this;
        }
        $yLxk8.default(NodeError, [
            {
                key: "code",
                get: function get() {
                    return sym;
                },
                set: function set(value) {
                    Object.defineProperty(this, 'code', {
                        configurable: true,
                        enumerable: true,
                        value: value,
                        writable: true
                    });
                }
            },
            {
                key: "toString",
                value: function toString() {
                    return "".concat(this.name, " [").concat(sym, "]: ").concat(this.message);
                }
            }
        ]);
        return NodeError;
    }(Base1);
}
$6f06367fe79734cf$var$E('ERR_BUFFER_OUT_OF_BOUNDS', function(name) {
    if (name) return "".concat(name, " is outside of buffer bounds");
    return 'Attempt to access memory outside buffer bounds';
}, RangeError);
$6f06367fe79734cf$var$E('ERR_INVALID_ARG_TYPE', function(name, actual) {
    return 'The "'.concat(name, '" argument must be of type number. Received type ').concat(typeof actual === "undefined" ? "undefined" : $19RbB.default(actual));
}, TypeError);
$6f06367fe79734cf$var$E('ERR_OUT_OF_RANGE', function(str, range, input) {
    var msg = 'The value of "'.concat(str, '" is out of range.');
    var received = input;
    if (Number.isInteger(input) && Math.abs(input) > Math.pow(2, 32)) received = $6f06367fe79734cf$var$addNumericalSeparator(String(input));
    else if ((typeof input === "undefined" ? "undefined" : $19RbB.default(input)) === 'bigint') {
        received = String(input);
        if (input > Math.pow(BigInt(2), BigInt(32)) || input < -Math.pow(BigInt(2), BigInt(32))) received = $6f06367fe79734cf$var$addNumericalSeparator(received);
        received += 'n';
    }
    msg += " It must be ".concat(range, ". Received ").concat(received);
    return msg;
}, RangeError);
function $6f06367fe79734cf$var$addNumericalSeparator(val) {
    var res = '';
    var i = val.length;
    var start = val[0] === '-' ? 1 : 0;
    for(; i >= start + 4; i -= 3)res = "_".concat(val.slice(i - 3, i)).concat(res);
    return "".concat(val.slice(0, i)).concat(res);
}
// CHECK FUNCTIONS
// ===============
function $6f06367fe79734cf$var$checkBounds(buf, offset, byteLength) {
    $6f06367fe79734cf$var$validateNumber(offset, 'offset');
    if (buf[offset] === undefined || buf[offset + byteLength] === undefined) $6f06367fe79734cf$var$boundsError(offset, buf.length - (byteLength + 1));
}
function $6f06367fe79734cf$var$checkIntBI(value, min, max, buf, offset, byteLength) {
    if (value > max || value < min) {
        var n = (typeof min === "undefined" ? "undefined" : $19RbB.default(min)) === 'bigint' ? 'n' : '';
        var range;
        if (byteLength > 3) {
            if (min === 0 || min === BigInt(0)) range = ">= 0".concat(n, " and < 2").concat(n, " ** ").concat((byteLength + 1) * 8).concat(n);
            else range = ">= -(2".concat(n, " ** ").concat((byteLength + 1) * 8 - 1).concat(n, ") and < 2 ** ") + "".concat((byteLength + 1) * 8 - 1).concat(n);
        } else range = ">= ".concat(min).concat(n, " and <= ").concat(max).concat(n);
        throw new $6f06367fe79734cf$var$errors.ERR_OUT_OF_RANGE('value', range, value);
    }
    $6f06367fe79734cf$var$checkBounds(buf, offset, byteLength);
}
function $6f06367fe79734cf$var$validateNumber(value, name) {
    if (typeof value !== 'number') throw new $6f06367fe79734cf$var$errors.ERR_INVALID_ARG_TYPE(name, 'number', value);
}
function $6f06367fe79734cf$var$boundsError(value, length, type) {
    if (Math.floor(value) !== value) {
        $6f06367fe79734cf$var$validateNumber(value, type);
        throw new $6f06367fe79734cf$var$errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value);
    }
    if (length < 0) throw new $6f06367fe79734cf$var$errors.ERR_BUFFER_OUT_OF_BOUNDS();
    throw new $6f06367fe79734cf$var$errors.ERR_OUT_OF_RANGE(type || 'offset', ">= ".concat(type ? 1 : 0, " and <= ").concat(length), value);
}
// HELPER FUNCTIONS
// ================
var $6f06367fe79734cf$var$INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function $6f06367fe79734cf$var$base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace($6f06367fe79734cf$var$INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function $6f06367fe79734cf$var$utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 0xD7FF && codePoint < 0xE000) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 0xDBFF) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 0xDC00) {
                if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 0x80) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 0x800) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 0x6 | 0xC0, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x10000) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 0xC | 0xE0, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else if (codePoint < 0x110000) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 0x12 | 0xF0, codePoint >> 0xC & 0x3F | 0x80, codePoint >> 0x6 & 0x3F | 0x80, codePoint & 0x3F | 0x80);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function $6f06367fe79734cf$var$asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF);
    return byteArray;
}
function $6f06367fe79734cf$var$utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function $6f06367fe79734cf$var$base64ToBytes(str) {
    return $hfwrD.toByteArray($6f06367fe79734cf$var$base64clean(str));
}
function $6f06367fe79734cf$var$blitBuffer(src, dst, offset, length) {
    var i;
    for(i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function $6f06367fe79734cf$var$isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function $6f06367fe79734cf$var$numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj // eslint-disable-line no-self-compare
    ;
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var $6f06367fe79734cf$var$hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();
// Return not function with Error if BigInt not supported
function $6f06367fe79734cf$var$defineBigIntMethod(fn) {
    return typeof BigInt === 'undefined' ? $6f06367fe79734cf$var$BufferBigIntNotDefined : fn;
}
function $6f06367fe79734cf$var$BufferBigIntNotDefined() {
    throw new Error('BigInt not supported');
}

});
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



parcelRequire.register("hfwrD", function(module, exports) {

$parcel$export(module.exports, "toByteArray", function () { return $c8ed013625a6069c$export$d622b2ad8d90c771; }, function (v) { return $c8ed013625a6069c$export$d622b2ad8d90c771 = v; });
$parcel$export(module.exports, "fromByteArray", function () { return $c8ed013625a6069c$export$6100ba28696e12de; }, function (v) { return $c8ed013625a6069c$export$6100ba28696e12de = v; });
var $c8ed013625a6069c$export$a48f0734ac7c2329;
var $c8ed013625a6069c$export$d622b2ad8d90c771;
var $c8ed013625a6069c$export$6100ba28696e12de;
'use strict';
$c8ed013625a6069c$export$a48f0734ac7c2329 = $c8ed013625a6069c$var$byteLength;
$c8ed013625a6069c$export$d622b2ad8d90c771 = $c8ed013625a6069c$var$toByteArray;
$c8ed013625a6069c$export$6100ba28696e12de = $c8ed013625a6069c$var$fromByteArray;
var $c8ed013625a6069c$var$lookup = [];
var $c8ed013625a6069c$var$revLookup = [];
var $c8ed013625a6069c$var$Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var $c8ed013625a6069c$var$code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var $c8ed013625a6069c$var$i = 0, $c8ed013625a6069c$var$len = $c8ed013625a6069c$var$code.length; $c8ed013625a6069c$var$i < $c8ed013625a6069c$var$len; ++$c8ed013625a6069c$var$i){
    $c8ed013625a6069c$var$lookup[$c8ed013625a6069c$var$i] = $c8ed013625a6069c$var$code[$c8ed013625a6069c$var$i];
    $c8ed013625a6069c$var$revLookup[$c8ed013625a6069c$var$code.charCodeAt($c8ed013625a6069c$var$i)] = $c8ed013625a6069c$var$i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
$c8ed013625a6069c$var$revLookup['-'.charCodeAt(0)] = 62;
$c8ed013625a6069c$var$revLookup['_'.charCodeAt(0)] = 63;
function $c8ed013625a6069c$var$getLens(b64) {
    var len = b64.length;
    if (len % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len;
    var placeHoldersLen = validLen === len ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function $c8ed013625a6069c$var$byteLength(b64) {
    var lens = $c8ed013625a6069c$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $c8ed013625a6069c$var$_byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function $c8ed013625a6069c$var$toByteArray(b64) {
    var tmp;
    var lens = $c8ed013625a6069c$var$getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new $c8ed013625a6069c$var$Arr($c8ed013625a6069c$var$_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i;
    for(i = 0; i < len; i += 4){
        tmp = $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i)] << 18 | $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i + 1)] << 12 | $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i + 2)] << 6 | $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i + 3)];
        arr[curByte++] = tmp >> 16 & 0xFF;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 2) {
        tmp = $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i)] << 2 | $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i + 1)] >> 4;
        arr[curByte++] = tmp & 0xFF;
    }
    if (placeHoldersLen === 1) {
        tmp = $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i)] << 10 | $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i + 1)] << 4 | $c8ed013625a6069c$var$revLookup[b64.charCodeAt(i + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 0xFF;
        arr[curByte++] = tmp & 0xFF;
    }
    return arr;
}
function $c8ed013625a6069c$var$tripletToBase64(num) {
    return $c8ed013625a6069c$var$lookup[num >> 18 & 0x3F] + $c8ed013625a6069c$var$lookup[num >> 12 & 0x3F] + $c8ed013625a6069c$var$lookup[num >> 6 & 0x3F] + $c8ed013625a6069c$var$lookup[num & 0x3F];
}
function $c8ed013625a6069c$var$encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i = start; i < end; i += 3){
        tmp = (uint8[i] << 16 & 0xFF0000) + (uint8[i + 1] << 8 & 0xFF00) + (uint8[i + 2] & 0xFF);
        output.push($c8ed013625a6069c$var$tripletToBase64(tmp));
    }
    return output.join('');
}
function $c8ed013625a6069c$var$fromByteArray(uint8) {
    var tmp;
    var len = uint8.length;
    var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383 // must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength)parts.push($c8ed013625a6069c$var$encodeChunk(uint8, i, i + maxChunkLength > len2 ? len2 : i + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len - 1];
        parts.push($c8ed013625a6069c$var$lookup[tmp >> 2] + $c8ed013625a6069c$var$lookup[tmp << 4 & 0x3F] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len - 2] << 8) + uint8[len - 1];
        parts.push($c8ed013625a6069c$var$lookup[tmp >> 10] + $c8ed013625a6069c$var$lookup[tmp >> 4 & 0x3F] + $c8ed013625a6069c$var$lookup[tmp << 2 & 0x3F] + '=');
    }
    return parts.join('');
}

});

parcelRequire.register("h1LEL", function(module, exports) {

$parcel$export(module.exports, "read", function () { return $c6577f45011b0941$export$aafa59e2e03f2942; }, function (v) { return $c6577f45011b0941$export$aafa59e2e03f2942 = v; });
$parcel$export(module.exports, "write", function () { return $c6577f45011b0941$export$68d8715fc104d294; }, function (v) { return $c6577f45011b0941$export$68d8715fc104d294 = v; });
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var $c6577f45011b0941$export$aafa59e2e03f2942;
var $c6577f45011b0941$export$68d8715fc104d294;
$c6577f45011b0941$export$aafa59e2e03f2942 = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
$c6577f45011b0941$export$68d8715fc104d294 = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

});


})();
//# sourceMappingURL=parser.f0e512c4.js.map
