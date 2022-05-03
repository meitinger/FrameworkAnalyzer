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
importScripts("./parser.5015d2e2.js");
importScripts("./parser.f0e512c4.js");
var $752b05cf213f0866$exports = {};

var $e6kUJ = parcelRequire("e6kUJ");
var $1d936273bafb8a3f$exports = {};

var $9wYJv = parcelRequire("9wYJv");
var $1d936273bafb8a3f$require$Buffer = $9wYJv.Buffer;
!function(n, t) {
    $1d936273bafb8a3f$exports = t();
}("undefined" != typeof self ? self : $1d936273bafb8a3f$exports, function() {
    return function(n1) {
        var t1 = {};
        function r(e) {
            if (t1[e]) return t1[e].exports;
            var u = t1[e] = {
                i: e,
                l: !1,
                exports: {}
            };
            return n1[e].call(u.exports, u, u.exports, r), u.l = !0, u.exports;
        }
        return r.m = n1, r.c = t1, r.d = function(n, t, e) {
            r.o(n, t) || Object.defineProperty(n, t, {
                configurable: !1,
                enumerable: !0,
                get: e
            });
        }, r.r = function(n) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            });
        }, r.n = function(n) {
            var t = n && n.__esModule ? function t() {
                return n.default;
            } : function() {
                return n;
            };
            return r.d(t, "a", t), t;
        }, r.o = function(n, t) {
            return Object.prototype.hasOwnProperty.call(n, t);
        }, r.p = "", r(r.s = 0);
    }([
        function(n2, t2, r1) {
            "use strict";
            function e1(n) {
                if (!(this instanceof e1)) return new e1(n);
                this._ = n;
            }
            var u1 = e1.prototype;
            function o1(n, t) {
                for(var r = 0; r < n; r++)t(r);
            }
            function i1(n3, t3, r2) {
                return function(n, t) {
                    o1(t.length, function(r) {
                        n(t[r], r, t);
                    });
                }(function(r, e, u) {
                    t3 = n3(t3, r, e, u);
                }, r2), t3;
            }
            function a1(n, t4) {
                return i1(function(t, r, e, u) {
                    return t.concat([
                        n(r, e, u)
                    ]);
                }, [], t4);
            }
            function f1(n4, t5) {
                var r3 = {
                    v: 0,
                    buf: t5
                };
                return o1(n4, function() {
                    var _$n;
                    r3 = {
                        v: r3.v << 1 | (_$n = r3.buf, _$n[0] >> 7),
                        buf: function(n5) {
                            var _$t = i1(function(n, t, r, e) {
                                return n.concat(r === e.length - 1 ? $1d936273bafb8a3f$require$Buffer.from([
                                    t,
                                    0
                                ]).readUInt16BE(0) : e.readUInt16BE(r));
                            }, [], n5);
                            return $1d936273bafb8a3f$require$Buffer.from(a1(function(n) {
                                return (n << 1 & 65535) >> 8;
                            }, _$t));
                        }(r3.buf)
                    };
                }), r3;
            }
            function c1() {
                return "undefined" != typeof $1d936273bafb8a3f$require$Buffer;
            }
            function s1() {
                if (!c1()) throw new Error("Buffer global does not exist; please use webpack if you need to parse Buffers in the browser.");
            }
            function l(n6) {
                s1();
                var t6 = i1(function(n, t) {
                    return n + t;
                }, 0, n6);
                if (t6 % 8 != 0) throw new Error("The bits [" + n6.join(", ") + "] add up to " + t6 + " which is not an even number of bytes; the total should be divisible by 8");
                var r, u = t6 / 8, o = (r = function r(n) {
                    return n > 48;
                }, i1(function(n, t) {
                    return n || (r(t) ? t : n);
                }, null, n6));
                if (o) throw new Error(o + " bit range requested exceeds 48 bit (6 byte) Number max.");
                return new e1(function(t7, r) {
                    var _$e = u + r;
                    return _$e > t7.length ? x(r, u.toString() + " bytes") : b(_$e, i1(function(n, t) {
                        var _$r = f1(t, n.buf);
                        return {
                            coll: n.coll.concat(_$r.v),
                            buf: _$r.buf
                        };
                    }, {
                        coll: [],
                        buf: t7.slice(r, _$e)
                    }, n6).coll);
                });
            }
            function h(n, t) {
                return new e1(function(r, e) {
                    return s1(), e + t > r.length ? x(e, t + " bytes for " + n) : b(e + t, r.slice(e, e + t));
                });
            }
            function p1(n, t) {
                if ("number" != typeof (r = t) || Math.floor(r) !== r || t < 0 || t > 6) throw new Error(n + " requires integer length in range [0, 6].");
                var r;
            }
            function d(n) {
                return p1("uintBE", n), h("uintBE(" + n + ")", n).map(function(t) {
                    return t.readUIntBE(0, n);
                });
            }
            function v(n) {
                return p1("uintLE", n), h("uintLE(" + n + ")", n).map(function(t) {
                    return t.readUIntLE(0, n);
                });
            }
            function g(n) {
                return p1("intBE", n), h("intBE(" + n + ")", n).map(function(t) {
                    return t.readIntBE(0, n);
                });
            }
            function m(n) {
                return p1("intLE", n), h("intLE(" + n + ")", n).map(function(t) {
                    return t.readIntLE(0, n);
                });
            }
            function y(n) {
                return n instanceof e1;
            }
            function E(n) {
                return "[object Array]" === ({}).toString.call(n);
            }
            function w(n) {
                return c1() && $1d936273bafb8a3f$require$Buffer.isBuffer(n);
            }
            function b(n, t) {
                return {
                    status: !0,
                    index: n,
                    value: t,
                    furthest: -1,
                    expected: []
                };
            }
            function x(n, t) {
                return E(t) || (t = [
                    t
                ]), {
                    status: !1,
                    index: -1,
                    value: null,
                    furthest: n,
                    expected: t
                };
            }
            function B(n7, t8) {
                if (!t8) return n7;
                if (n7.furthest > t8.furthest) return n7;
                var r4 = n7.furthest === t8.furthest ? function(n, t) {
                    if (function() {
                        if (void 0 !== e1._supportsSet) return e1._supportsSet;
                        var _$n = "undefined" != typeof Set;
                        return e1._supportsSet = _$n, _$n;
                    }() && Array.from) {
                        for(var r = new Set(n), u = 0; u < t.length; u++)r.add(t[u]);
                        var o = Array.from(r);
                        return o.sort(), o;
                    }
                    for(var i = {}, a = 0; a < n.length; a++)i[n[a]] = !0;
                    for(var f = 0; f < t.length; f++)i[t[f]] = !0;
                    var c = [];
                    for(var s in i)({}).hasOwnProperty.call(i, s) && c.push(s);
                    return c.sort(), c;
                }(n7.expected, t8.expected) : t8.expected;
                return {
                    status: n7.status,
                    index: n7.index,
                    value: n7.value,
                    furthest: t8.furthest,
                    expected: r4
                };
            }
            var j = {};
            function S(n, t) {
                if (w(n)) return {
                    offset: t,
                    line: -1,
                    column: -1
                };
                n in j || (j[n] = {});
                for(var r = j[n], _$e = 0, u = 0, o = 0, i = t; i >= 0;){
                    if (i in r) {
                        _$e = r[i].line, 0 === o && (o = r[i].lineStart);
                        break;
                    }
                    ("\n" === n.charAt(i) || "\r" === n.charAt(i) && "\n" !== n.charAt(i + 1)) && (u++, 0 === o && (o = i + 1)), i--;
                }
                var a = _$e + u, f = t - o;
                return r[t] = {
                    line: a,
                    lineStart: o
                }, {
                    offset: t,
                    line: a + 1,
                    column: f + 1
                };
            }
            function _(n) {
                if (!y(n)) throw new Error("not a parser: " + n);
            }
            function L(n, t) {
                return "string" == typeof n ? n.charAt(t) : n[t];
            }
            function O(n) {
                if ("number" != typeof n) throw new Error("not a number: " + n);
            }
            function k(n) {
                if ("function" != typeof n) throw new Error("not a function: " + n);
            }
            function P(n) {
                if ("string" != typeof n) throw new Error("not a string: " + n);
            }
            var q = 2, A = 3, I = 8, F = 5 * I, M = 4 * I, z = "  ";
            function R(n, t) {
                return new Array(t + 1).join(n);
            }
            function U(n, t, r) {
                var _$e = t - n.length;
                return _$e <= 0 ? n : R(r, _$e) + n;
            }
            function W(n, t, r, e) {
                return {
                    from: n - t > 0 ? n - t : 0,
                    to: n + r > e ? e : n + r
                };
            }
            function D(n8, t9) {
                var r5, _$e1, u2, o2, f, c2 = t9.index, s = c2.offset, _$l = 1;
                if (s === n8.length) return "Got the end of the input";
                if (w(n8)) {
                    var _$h = s - s % I, p = s - _$h, _$d = W(_$h, F, M + I, n8.length), _$v = a1(function(n9) {
                        return a1(function(n) {
                            return U(n.toString(16), 2, "0");
                        }, n9);
                    }, function(n, t) {
                        var r = n.length, _$e = [], u = 0;
                        if (r <= t) return [
                            n.slice()
                        ];
                        for(var o = 0; o < r; o++)_$e[u] || _$e.push([]), _$e[u].push(n[o]), (o + 1) % t == 0 && u++;
                        return _$e;
                    }(n8.slice(_$d.from, _$d.to).toJSON().data, I));
                    o2 = function(n) {
                        return 0 === n.from && 1 === n.to ? {
                            from: n.from,
                            to: n.to
                        } : {
                            from: n.from / I,
                            to: Math.floor(n.to / I)
                        };
                    }(_$d), _$e1 = _$h / I, r5 = 3 * p, p >= 4 && (r5 += 1), _$l = 2, u2 = a1(function(n) {
                        return n.length <= 4 ? n.join(" ") : n.slice(0, 4).join(" ") + "  " + n.slice(4).join(" ");
                    }, _$v), (f = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f = 2);
                } else {
                    var _$g = n8.split(/\r\n|[\n\r\u2028\u2029]/);
                    r5 = c2.column - 1, _$e1 = c2.line - 1, o2 = W(_$e1, q, A, _$g.length), u2 = _$g.slice(o2.from, o2.to), f = o2.to.toString().length;
                }
                var _$m = _$e1 - o2.from;
                return w(n8) && (f = (8 * (o2.to > 0 ? o2.to - 1 : o2.to)).toString(16).length) < 2 && (f = 2), i1(function(t, e, u) {
                    var _$i, _$a = u === _$m, c = _$a ? "> " : z;
                    return _$i = w(n8) ? U((8 * (o2.from + u)).toString(16), f, "0") : U((o2.from + u + 1).toString(), f, " "), [].concat(t, [
                        c + _$i + " | " + e
                    ], _$a ? [
                        z + R(" ", f) + " | " + U("", r5, " ") + R("^", _$l)
                    ] : []);
                }, [], u2).join("\n");
            }
            function N(n, t) {
                var r;
                return [
                    "\n",
                    "-- PARSING FAILED " + R("-", 50),
                    "\n\n",
                    D(n, t),
                    "\n\n",
                    (r = t.expected, 1 === r.length ? "Expected:\n\n" + r[0] : "Expected one of the following: \n\n" + r.join(", ")),
                    "\n"
                ].join("");
            }
            function G(n) {
                return void 0 !== n.flags ? n.flags : [
                    n.global ? "g" : "",
                    n.ignoreCase ? "i" : "",
                    n.multiline ? "m" : "",
                    n.unicode ? "u" : "",
                    n.sticky ? "y" : ""
                ].join("");
            }
            function C() {
                for(var _$n = [].slice.call(arguments), t = _$n.length, r6 = 0; r6 < t; r6 += 1)_(_$n[r6]);
                return e1(function(r, e) {
                    for(var u, o = new Array(t), i = 0; i < t; i += 1){
                        if (!(u = B(_$n[i]._(r, e), u)).status) return u;
                        o[i] = u.value, e = u.index;
                    }
                    return B(b(e, o), u);
                });
            }
            function J() {
                var _$n = [].slice.call(arguments);
                if (0 === _$n.length) throw new Error("seqMap needs at least one argument");
                var t = _$n.pop();
                return k(t), C.apply(null, _$n).map(function(n) {
                    return t.apply(null, n);
                });
            }
            function T() {
                var _$n = [].slice.call(arguments), t10 = _$n.length;
                if (0 === t10) return Y("zero alternates");
                for(var r7 = 0; r7 < t10; r7 += 1)_(_$n[r7]);
                return e1(function(t, r) {
                    for(var _$e, u = 0; u < _$n.length; u += 1)if ((_$e = B(_$n[u]._(t, r), _$e)).status) return _$e;
                    return _$e;
                });
            }
            function V(n, t) {
                return H(n, t).or(X([]));
            }
            function H(n10, t11) {
                return _(n10), _(t11), J(n10, t11.then(n10).many(), function(n, t) {
                    return [
                        n
                    ].concat(t);
                });
            }
            function K(n) {
                P(n);
                var t = "'" + n + "'";
                return e1(function(r, e) {
                    var u = e + n.length, o = r.slice(e, u);
                    return o === n ? b(u, o) : x(e, t);
                });
            }
            function Q(n11, t) {
                !function(n) {
                    if (!(n instanceof RegExp)) throw new Error("not a regexp: " + n);
                    for(var _$t = G(n), r = 0; r < _$t.length; r++){
                        var _$e = _$t.charAt(r);
                        if ("i" !== _$e && "m" !== _$e && "u" !== _$e && "s" !== _$e) throw new Error('unsupported regexp flag "' + _$e + '": ' + n);
                    }
                }(n11), arguments.length >= 2 ? O(t) : t = 0;
                var r8 = function(n) {
                    return RegExp("^(?:" + n.source + ")", G(n));
                }(n11), u = "" + n11;
                return e1(function(n, e) {
                    var o = r8.exec(n.slice(e));
                    if (o) {
                        if (0 <= t && t <= o.length) {
                            var i = o[0], a = o[t];
                            return b(e + i.length, a);
                        }
                        return x(e, "valid match group (0 to " + o.length + ") in " + u);
                    }
                    return x(e, u);
                });
            }
            function X(n) {
                return e1(function(t, r) {
                    return b(r, n);
                });
            }
            function Y(n) {
                return e1(function(t, r) {
                    return x(r, n);
                });
            }
            function Z(n) {
                if (y(n)) return e1(function(t, r) {
                    var _$e = n._(t, r);
                    return _$e.index = r, _$e.value = "", _$e;
                });
                if ("string" == typeof n) return Z(K(n));
                if (n instanceof RegExp) return Z(Q(n));
                throw new Error("not a string, regexp, or parser: " + n);
            }
            function $(n) {
                return _(n), e1(function(t, r) {
                    var _$e = n._(t, r), u = t.slice(r, _$e.index);
                    return _$e.status ? x(r, 'not "' + u + '"') : b(r, null);
                });
            }
            function nn(n) {
                return k(n), e1(function(t, r) {
                    var _$e = L(t, r);
                    return r < t.length && n(_$e) ? b(r + 1, _$e) : x(r, "a character/byte matching " + n);
                });
            }
            function tn(n12, t) {
                arguments.length < 2 && (t = n12, n12 = void 0);
                var r = e1(function(n, e) {
                    return r._ = t()._, r._(n, e);
                });
                return n12 ? r.desc(n12) : r;
            }
            function rn() {
                return Y("fantasy-land/empty");
            }
            u1.parse = function(n) {
                if ("string" != typeof n && !w(n)) throw new Error(".parse must be called with a string or Buffer as its argument");
                var t, r = this.skip(an)._(n, 0);
                return t = r.status ? {
                    status: !0,
                    value: r.value
                } : {
                    status: !1,
                    index: S(n, r.furthest),
                    expected: r.expected
                }, delete j[n], t;
            }, u1.tryParse = function(n) {
                var t = this.parse(n);
                if (t.status) return t.value;
                var r = N(n, t), _$e = new Error(r);
                throw _$e.type = "ParsimmonError", _$e.result = t, _$e;
            }, u1.assert = function(n, t) {
                return this.chain(function(r) {
                    return n(r) ? X(r) : Y(t);
                });
            }, u1.or = function(n) {
                return T(this, n);
            }, u1.trim = function(n) {
                return this.wrap(n, n);
            }, u1.wrap = function(n, t12) {
                return J(n, this, t12, function(n, t) {
                    return t;
                });
            }, u1.thru = function(n) {
                return n(this);
            }, u1.then = function(n13) {
                return _(n13), C(this, n13).map(function(n) {
                    return n[1];
                });
            }, u1.many = function() {
                var _$n = this;
                return e1(function(t, r) {
                    for(var _$e = [], u = void 0;;){
                        if (!(u = B(_$n._(t, r), u)).status) return B(b(r, _$e), u);
                        if (r === u.index) throw new Error("infinite loop detected in .many() parser --- calling .many() on a parser which can accept zero characters is usually the cause");
                        r = u.index, _$e.push(u.value);
                    }
                });
            }, u1.tieWith = function(n14) {
                return P(n14), this.map(function(t) {
                    if (function(n) {
                        if (!E(n)) throw new Error("not an array: " + n);
                    }(t), t.length) {
                        P(t[0]);
                        for(var r = t[0], _$e = 1; _$e < t.length; _$e++)P(t[_$e]), r += n14 + t[_$e];
                        return r;
                    }
                    return "";
                });
            }, u1.tie = function() {
                return this.tieWith("");
            }, u1.times = function(n, t) {
                var r = this;
                return arguments.length < 2 && (t = n), O(n), O(t), e1(function(e, u) {
                    for(var o = [], i = void 0, a = void 0, f = 0; f < n; f += 1){
                        if (a = B(i = r._(e, u), a), !i.status) return a;
                        u = i.index, o.push(i.value);
                    }
                    for(; f < t && (a = B(i = r._(e, u), a), i.status); f += 1)u = i.index, o.push(i.value);
                    return B(b(u, o), a);
                });
            }, u1.result = function(n) {
                return this.map(function() {
                    return n;
                });
            }, u1.atMost = function(n) {
                return this.times(0, n);
            }, u1.atLeast = function(n15) {
                return J(this.times(n15), this.many(), function(n, t) {
                    return n.concat(t);
                });
            }, u1.map = function(n) {
                k(n);
                var t = this;
                return e1(function(r, e) {
                    var u = t._(r, e);
                    return u.status ? B(b(u.index, n(u.value)), u) : u;
                });
            }, u1.contramap = function(n) {
                k(n);
                var t = this;
                return e1(function(r, e) {
                    var u = t.parse(n(r.slice(e)));
                    return u.status ? b(e + r.length, u.value) : u;
                });
            }, u1.promap = function(n, t) {
                return k(n), k(t), this.contramap(n).map(t);
            }, u1.skip = function(n16) {
                return C(this, n16).map(function(n) {
                    return n[0];
                });
            }, u1.mark = function() {
                return J(en, this, en, function(n, t, r) {
                    return {
                        start: n,
                        value: t,
                        end: r
                    };
                });
            }, u1.node = function(n) {
                return J(en, this, en, function(t, r, e) {
                    return {
                        name: n,
                        value: r,
                        start: t,
                        end: e
                    };
                });
            }, u1.sepBy = function(n) {
                return V(this, n);
            }, u1.sepBy1 = function(n) {
                return H(this, n);
            }, u1.lookahead = function(n) {
                return this.skip(Z(n));
            }, u1.notFollowedBy = function(n) {
                return this.skip($(n));
            }, u1.desc = function(n) {
                E(n) || (n = [
                    n
                ]);
                var t = this;
                return e1(function(r, e) {
                    var u = t._(r, e);
                    return u.status || (u.expected = n), u;
                });
            }, u1.fallback = function(n) {
                return this.or(X(n));
            }, u1.ap = function(n17) {
                return J(n17, this, function(n, t) {
                    return n(t);
                });
            }, u1.chain = function(n) {
                var t = this;
                return e1(function(r, e) {
                    var u = t._(r, e);
                    return u.status ? B(n(u.value)._(r, u.index), u) : u;
                });
            }, u1.concat = u1.or, u1.empty = rn, u1.of = X, u1["fantasy-land/ap"] = u1.ap, u1["fantasy-land/chain"] = u1.chain, u1["fantasy-land/concat"] = u1.concat, u1["fantasy-land/empty"] = u1.empty, u1["fantasy-land/of"] = u1.of, u1["fantasy-land/map"] = u1.map;
            var en = e1(function(n, t) {
                return b(t, S(n, t));
            }), un = e1(function(n, t) {
                return t >= n.length ? x(t, "any character/byte") : b(t + 1, L(n, t));
            }), on = e1(function(n, t) {
                return b(n.length, n.slice(t));
            }), an = e1(function(n, t) {
                return t < n.length ? x(t, "EOF") : b(t, null);
            }), fn = Q(/[0-9]/).desc("a digit"), cn = Q(/[0-9]*/).desc("optional digits"), sn = Q(/[a-z]/i).desc("a letter"), ln = Q(/[a-z]*/i).desc("optional letters"), hn = Q(/\s*/).desc("optional whitespace"), pn = Q(/\s+/).desc("whitespace"), dn = K("\r"), vn = K("\n"), gn = K("\r\n"), mn = T(gn, vn, dn).desc("newline"), yn = T(mn, an);
            e1.all = on, e1.alt = T, e1.any = un, e1.cr = dn, e1.createLanguage = function(n) {
                var t = {};
                for(var r9 in n)({}).hasOwnProperty.call(n, r9) && function(r) {
                    t[r] = tn(function() {
                        return n[r](t);
                    });
                }(r9);
                return t;
            }, e1.crlf = gn, e1.custom = function(n) {
                return e1(n(b, x));
            }, e1.digit = fn, e1.digits = cn, e1.empty = rn, e1.end = yn, e1.eof = an, e1.fail = Y, e1.formatError = N, e1.index = en, e1.isParser = y, e1.lazy = tn, e1.letter = sn, e1.letters = ln, e1.lf = vn, e1.lookahead = Z, e1.makeFailure = x, e1.makeSuccess = b, e1.newline = mn, e1.noneOf = function(n) {
                return nn(function(t) {
                    return n.indexOf(t) < 0;
                }).desc("none of '" + n + "'");
            }, e1.notFollowedBy = $, e1.of = X, e1.oneOf = function(n) {
                for(var t13 = n.split(""), r = 0; r < t13.length; r++)t13[r] = "'" + t13[r] + "'";
                return nn(function(t) {
                    return n.indexOf(t) >= 0;
                }).desc(t13);
            }, e1.optWhitespace = hn, e1.Parser = e1, e1.range = function(n, t) {
                return nn(function(r) {
                    return n <= r && r <= t;
                }).desc(n + "-" + t);
            }, e1.regex = Q, e1.regexp = Q, e1.sepBy = V, e1.sepBy1 = H, e1.seq = C, e1.seqMap = J, e1.seqObj = function() {
                for(var _$n, t14 = {}, r10 = 0, u = (_$n = arguments, Array.prototype.slice.call(_$n)), o = u.length, i2 = 0; i2 < o; i2 += 1){
                    var a = u[i2];
                    if (!y(a)) {
                        if (E(a) && 2 === a.length && "string" == typeof a[0] && y(a[1])) {
                            var f = a[0];
                            if (Object.prototype.hasOwnProperty.call(t14, f)) throw new Error("seqObj: duplicate key " + f);
                            t14[f] = !0, r10++;
                            continue;
                        }
                        throw new Error("seqObj arguments must be parsers or [string, parser] array pairs.");
                    }
                }
                if (0 === r10) throw new Error("seqObj expects at least one named parser, found zero");
                return e1(function(n, t) {
                    for(var r, _$e = {}, i = 0; i < o; i += 1){
                        var a, f;
                        if (E(u[i]) ? (a = u[i][0], f = u[i][1]) : (a = null, f = u[i]), !(r = B(f._(n, t), r)).status) return r;
                        a && (_$e[a] = r.value), t = r.index;
                    }
                    return B(b(t, _$e), r);
                });
            }, e1.string = K, e1.succeed = X, e1.takeWhile = function(n) {
                return k(n), e1(function(t, r) {
                    for(var _$e = r; _$e < t.length && n(L(t, _$e));)_$e++;
                    return b(_$e, t.slice(r, _$e));
                });
            }, e1.test = nn, e1.whitespace = pn, e1["fantasy-land/empty"] = rn, e1["fantasy-land/of"] = X, e1.Binary = {
                bitSeq: l,
                bitSeqObj: function bitSeqObj(n18) {
                    s1();
                    var t15 = {}, r11 = 0, _$e2 = a1(function(n) {
                        if (E(n)) {
                            var _$e = n;
                            if (2 !== _$e.length) throw new Error("[" + _$e.join(", ") + "] should be length 2, got length " + _$e.length);
                            if (P(_$e[0]), O(_$e[1]), Object.prototype.hasOwnProperty.call(t15, _$e[0])) throw new Error("duplicate key in bitSeqObj: " + _$e[0]);
                            return t15[_$e[0]] = !0, r11++, _$e;
                        }
                        return O(n), [
                            null,
                            n
                        ];
                    }, n18);
                    if (r11 < 1) throw new Error("bitSeqObj expects at least one named pair, got [" + n18.join(", ") + "]");
                    var u = a1(function(n) {
                        return n[0];
                    }, _$e2);
                    return l(a1(function(n) {
                        return n[1];
                    }, _$e2)).map(function(n19) {
                        return i1(function(n, t) {
                            return null !== t[0] && (n[t[0]] = t[1]), n;
                        }, {}, a1(function(t, r) {
                            return [
                                t,
                                n19[r]
                            ];
                        }, u));
                    });
                },
                byte: function byte(n) {
                    if (s1(), O(n), n > 255) throw new Error("Value specified to byte constructor (" + n + "=0x" + n.toString(16) + ") is larger in value than a single byte.");
                    var t = (n > 15 ? "0x" : "0x0") + n.toString(16);
                    return e1(function(r, e) {
                        var u = L(r, e);
                        return u === n ? b(e + 1, u) : x(e, t);
                    });
                },
                buffer: function buffer(n20) {
                    return h("buffer", n20).map(function(n) {
                        return $1d936273bafb8a3f$require$Buffer.from(n);
                    });
                },
                encodedString: function encodedString(n, t16) {
                    return h("string", t16).map(function(t) {
                        return t.toString(n);
                    });
                },
                uintBE: d,
                uint8BE: d(1),
                uint16BE: d(2),
                uint32BE: d(4),
                uintLE: v,
                uint8LE: v(1),
                uint16LE: v(2),
                uint32LE: v(4),
                intBE: g,
                int8BE: g(1),
                int16BE: g(2),
                int32BE: g(4),
                intLE: m,
                int8LE: m(1),
                int16LE: m(2),
                int32LE: m(4),
                floatBE: h("floatBE", 4).map(function(n) {
                    return n.readFloatBE(0);
                }),
                floatLE: h("floatLE", 4).map(function(n) {
                    return n.readFloatLE(0);
                }),
                doubleBE: h("doubleBE", 8).map(function(n) {
                    return n.readDoubleBE(0);
                }),
                doubleLE: h("doubleLE", 8).map(function(n) {
                    return n.readDoubleLE(0);
                })
            }, n2.exports = e1;
        }
    ]);
});



var $h8qvp = parcelRequire("h8qvp");
$h8qvp.runWorker(function(param1) {
    var program = param1.program;
    var _P;
    var __ = function() {
        for(var _len = arguments.length, seps = new Array(_len), _key = 0; _key < _len; _key++){
            seps[_key] = arguments[_key];
        }
        return (_P = $1d936273bafb8a3f$exports).alt.apply(_P, $e6kUJ.toConsumableArray(seps.map(function(sep) {
            return $1d936273bafb8a3f$exports.string(sep);
        }))).trim($1d936273bafb8a3f$exports.regexp(/[^\S\n]*/));
    };
    var inner = function(arg) {
        return arg[1];
    };
    var label1 = 0;
    var parser = $1d936273bafb8a3f$exports.createLanguage({
        separator: function() {
            return $1d936273bafb8a3f$exports.regexp(/([^\S\n]*[;\n])+[^\S\n]*/);
        },
        variable: function() {
            return $1d936273bafb8a3f$exports.regexp(/[a-z_]+/);
        },
        program: function(r) {
            return r.block.trim($1d936273bafb8a3f$exports.optWhitespace);
        },
        block: function(r) {
            return $1d936273bafb8a3f$exports.alt(r.statementSequence, $1d936273bafb8a3f$exports.seq(__('('), r.statementSequence, __(')')).map(inner));
        },
        statement: function(r) {
            return $1d936273bafb8a3f$exports.alt(r.statementSkip, r.statementAssign, r.statementIf, r.statementWhile);
        },
        statementSkip: function() {
            return $1d936273bafb8a3f$exports.seq($1d936273bafb8a3f$exports.string('skip'), $1d936273bafb8a3f$exports.index).map(function(param) {
                var _param = $e6kUJ.slicedToArray(param, 2), type = _param[0], position = _param[1];
                return $e6kUJ.objectSpread({
                    type: type,
                    label: label1
                }, position);
            });
        },
        statementAssign: function(r) {
            return $1d936273bafb8a3f$exports.seq(r.variable, __(':='), r.numeric, $1d936273bafb8a3f$exports.index).map(function(param) {
                var _param = $e6kUJ.slicedToArray(param, 4), variable = _param[0], _ = _param[1], expression = _param[2], position = _param[3];
                return $e6kUJ.objectSpread({
                    type: 'assign',
                    label: label1,
                    variable: variable,
                    expression: expression
                }, position);
            });
        },
        statementIf: function(r) {
            return $1d936273bafb8a3f$exports.seq(__('if'), r.boolean, $1d936273bafb8a3f$exports.index, __('then'), r.block, __('else'), r.block).map(function(param) {
                var _param = $e6kUJ.slicedToArray(param, 7), _if = _param[0], condition = _param[1], position = _param[2], _then = _param[3], ifBody = _param[4], _else = _param[5], elseBody = _param[6];
                return $e6kUJ.objectSpread({
                    type: 'if',
                    label: label1,
                    condition: condition,
                    ifBody: ifBody,
                    elseBody: elseBody
                }, position);
            });
        },
        statementWhile: function(r) {
            return $1d936273bafb8a3f$exports.seq(__('while'), r.boolean, $1d936273bafb8a3f$exports.index, __('do'), r.block).map(function(param) {
                var _param = $e6kUJ.slicedToArray(param, 5), _while = _param[0], condition = _param[1], position = _param[2], _do = _param[3], body = _param[4];
                return $e6kUJ.objectSpread({
                    type: 'while',
                    label: label1,
                    condition: condition,
                    body: body
                }, position);
            });
        },
        statementSequence: function(r) {
            return $1d936273bafb8a3f$exports.sepBy1(r.statement, r.separator.atLeast(1)).trim(r.separator.many()).map(function(statements) {
                return {
                    type: 'seq',
                    statements: statements
                };
            });
        },
        numeric: function(r) {
            return r.numericLevel1;
        },
        numericLevel1: function(r) {
            return $1d936273bafb8a3f$exports.seq(r.numericLevel2, $1d936273bafb8a3f$exports.seq(__('+', '-'), r.numericLevel2).many()).map(function(param2) {
                var _param1 = $e6kUJ.slicedToArray(param2, 2), init = _param1[0], expr = _param1[1];
                return expr.reduce(function(left, param) {
                    var _param = $e6kUJ.slicedToArray(param, 2), type = _param[0], right = _param[1];
                    return {
                        type: type,
                        left: left,
                        right: right
                    };
                }, init);
            });
        },
        numericLevel2: function(r) {
            return $1d936273bafb8a3f$exports.seq(r.numericLevel3, $1d936273bafb8a3f$exports.seq(__('*', '/'), r.numericLevel3).many()).map(function(param3) {
                var _param2 = $e6kUJ.slicedToArray(param3, 2), init = _param2[0], expr = _param2[1];
                return expr.reduce(function(left, param) {
                    var _param = $e6kUJ.slicedToArray(param, 2), type = _param[0], right = _param[1];
                    return {
                        type: type,
                        left: left,
                        right: right
                    };
                }, init);
            });
        },
        numericLevel3: function(r) {
            return $1d936273bafb8a3f$exports.alt(r.numericConstant, r.numericVariable, r.numericGroup);
        },
        numericConstant: function() {
            return $1d936273bafb8a3f$exports.regex(/-?[0-9]+/).map(Number).map(function(value) {
                return {
                    type: 'n',
                    value: value
                };
            });
        },
        numericVariable: function(r) {
            return r.variable.map(function(name) {
                return {
                    type: 'var',
                    name: name
                };
            });
        },
        numericGroup: function(r) {
            return $1d936273bafb8a3f$exports.seq(__('('), r.numeric, __(')')).map(inner);
        },
        boolean: function(r) {
            return r.booleanLevel1;
        },
        booleanLevel1: function(r) {
            return $1d936273bafb8a3f$exports.seq(r.booleanLevel2, $1d936273bafb8a3f$exports.seq(__('or'), r.booleanLevel2).many()).map(function(param4) {
                var _param3 = $e6kUJ.slicedToArray(param4, 2), init = _param3[0], expr = _param3[1];
                return expr.reduce(function(left, param) {
                    var _param = $e6kUJ.slicedToArray(param, 2), type = _param[0], right = _param[1];
                    return {
                        type: type,
                        left: left,
                        right: right
                    };
                }, init);
            });
        },
        booleanLevel2: function(r) {
            return $1d936273bafb8a3f$exports.seq(r.booleanLevel3, $1d936273bafb8a3f$exports.seq(__('and'), r.booleanLevel3).many()).map(function(param5) {
                var _param4 = $e6kUJ.slicedToArray(param5, 2), init = _param4[0], expr = _param4[1];
                return expr.reduce(function(left, param) {
                    var _param = $e6kUJ.slicedToArray(param, 2), type = _param[0], right = _param[1];
                    return {
                        type: type,
                        left: left,
                        right: right
                    };
                }, init);
            });
        },
        booleanLevel3: function(r) {
            return $1d936273bafb8a3f$exports.alt(r.booleanConstant, r.booleanComparison, r.booleanGroup, r.booleanNegation);
        },
        booleanConstant: function() {
            return $1d936273bafb8a3f$exports.alt($1d936273bafb8a3f$exports.string('true'), $1d936273bafb8a3f$exports.string('false')).map(function(type) {
                return {
                    type: type
                };
            });
        },
        booleanComparison: function(r) {
            return $1d936273bafb8a3f$exports.seq(r.numeric, __('<', '>', '<=', '>=', '==', '!='), r.numeric).map(function(param) {
                var _param = $e6kUJ.slicedToArray(param, 3), left = _param[0], type = _param[1], right = _param[2];
                return {
                    type: type,
                    left: left,
                    right: right
                };
            });
        },
        booleanGroup: function(r) {
            return $1d936273bafb8a3f$exports.seq(__('('), r.boolean, __(')')).map(inner);
        },
        booleanNegation: function(r) {
            return $1d936273bafb8a3f$exports.seq(__('not'), r.boolean).map(function(param) {
                var _param = $e6kUJ.slicedToArray(param, 2), type = _param[0], value = _param[1];
                return {
                    type: type,
                    value: value
                };
            });
        }
    });
    var parserResult = parser.program.parse(program);
    if (parserResult.status) {
        var inlayHints = new Array();
        var variables = new Set();
        var findVariables = function(expression) {
            switch(expression.type){
                case 'true':
                case 'false':
                case 'n':
                    break;
                case 'var':
                    variables.add(expression.name);
                    break;
                case 'not':
                    findVariables(expression.value);
                    break;
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
                    findVariables(expression.right);
                    findVariables(expression.left);
                    break;
            }
        };
        var relabelStatement = function(statement) {
            if (statement.type === 'seq') return $e6kUJ.objectSpread({}, statement, {
                statements: statement.statements.map(relabelStatement)
            });
            var label = inlayHints.length + 1;
            inlayHints.push({
                text: label.toString(),
                position: {
                    lineNumber: statement.line,
                    column: statement.column
                },
                kind: 0
            });
            switch(statement.type){
                case 'skip':
                    return $e6kUJ.objectSpread({}, statement, {
                        label: label
                    });
                case 'assign':
                    variables.add(statement.variable);
                    findVariables(statement.expression);
                    return $e6kUJ.objectSpread({}, statement, {
                        label: label
                    });
                case 'if':
                    findVariables(statement.condition);
                    return $e6kUJ.objectSpread({}, statement, {
                        label: label,
                        ifBody: relabelStatement(statement.ifBody),
                        elseBody: relabelStatement(statement.elseBody)
                    });
                case 'while':
                    findVariables(statement.condition);
                    return $e6kUJ.objectSpread({}, statement, {
                        label: label,
                        body: relabelStatement(statement.body)
                    });
            }
        };
        return {
            succeeded: true,
            program: relabelStatement(parserResult.value),
            inlayHints: inlayHints,
            variables: $e6kUJ.toConsumableArray(variables)
        };
    } else return $e6kUJ.objectSpread({
        succeeded: false,
        expected: parserResult.expected
    }, parserResult.index);
});

})();
//# sourceMappingURL=parser.2a6ea6ca.js.map
