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
})({"gcPnT":[function(require,module,exports) {
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
 *-----------------------------------------------------------------------------*/ // src/basic-languages/redis/redis.ts
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
    defaultToken: "",
    tokenPostfix: ".redis",
    ignoreCase: true,
    brackets: [
        {
            open: "[",
            close: "]",
            token: "delimiter.square"
        },
        {
            open: "(",
            close: ")",
            token: "delimiter.parenthesis"
        }
    ],
    keywords: [
        "APPEND",
        "AUTH",
        "BGREWRITEAOF",
        "BGSAVE",
        "BITCOUNT",
        "BITFIELD",
        "BITOP",
        "BITPOS",
        "BLPOP",
        "BRPOP",
        "BRPOPLPUSH",
        "CLIENT",
        "KILL",
        "LIST",
        "GETNAME",
        "PAUSE",
        "REPLY",
        "SETNAME",
        "CLUSTER",
        "ADDSLOTS",
        "COUNT-FAILURE-REPORTS",
        "COUNTKEYSINSLOT",
        "DELSLOTS",
        "FAILOVER",
        "FORGET",
        "GETKEYSINSLOT",
        "INFO",
        "KEYSLOT",
        "MEET",
        "NODES",
        "REPLICATE",
        "RESET",
        "SAVECONFIG",
        "SET-CONFIG-EPOCH",
        "SETSLOT",
        "SLAVES",
        "SLOTS",
        "COMMAND",
        "COUNT",
        "GETKEYS",
        "CONFIG",
        "GET",
        "REWRITE",
        "SET",
        "RESETSTAT",
        "DBSIZE",
        "DEBUG",
        "OBJECT",
        "SEGFAULT",
        "DECR",
        "DECRBY",
        "DEL",
        "DISCARD",
        "DUMP",
        "ECHO",
        "EVAL",
        "EVALSHA",
        "EXEC",
        "EXISTS",
        "EXPIRE",
        "EXPIREAT",
        "FLUSHALL",
        "FLUSHDB",
        "GEOADD",
        "GEOHASH",
        "GEOPOS",
        "GEODIST",
        "GEORADIUS",
        "GEORADIUSBYMEMBER",
        "GETBIT",
        "GETRANGE",
        "GETSET",
        "HDEL",
        "HEXISTS",
        "HGET",
        "HGETALL",
        "HINCRBY",
        "HINCRBYFLOAT",
        "HKEYS",
        "HLEN",
        "HMGET",
        "HMSET",
        "HSET",
        "HSETNX",
        "HSTRLEN",
        "HVALS",
        "INCR",
        "INCRBY",
        "INCRBYFLOAT",
        "KEYS",
        "LASTSAVE",
        "LINDEX",
        "LINSERT",
        "LLEN",
        "LPOP",
        "LPUSH",
        "LPUSHX",
        "LRANGE",
        "LREM",
        "LSET",
        "LTRIM",
        "MGET",
        "MIGRATE",
        "MONITOR",
        "MOVE",
        "MSET",
        "MSETNX",
        "MULTI",
        "PERSIST",
        "PEXPIRE",
        "PEXPIREAT",
        "PFADD",
        "PFCOUNT",
        "PFMERGE",
        "PING",
        "PSETEX",
        "PSUBSCRIBE",
        "PUBSUB",
        "PTTL",
        "PUBLISH",
        "PUNSUBSCRIBE",
        "QUIT",
        "RANDOMKEY",
        "READONLY",
        "READWRITE",
        "RENAME",
        "RENAMENX",
        "RESTORE",
        "ROLE",
        "RPOP",
        "RPOPLPUSH",
        "RPUSH",
        "RPUSHX",
        "SADD",
        "SAVE",
        "SCARD",
        "SCRIPT",
        "FLUSH",
        "LOAD",
        "SDIFF",
        "SDIFFSTORE",
        "SELECT",
        "SETBIT",
        "SETEX",
        "SETNX",
        "SETRANGE",
        "SHUTDOWN",
        "SINTER",
        "SINTERSTORE",
        "SISMEMBER",
        "SLAVEOF",
        "SLOWLOG",
        "SMEMBERS",
        "SMOVE",
        "SORT",
        "SPOP",
        "SRANDMEMBER",
        "SREM",
        "STRLEN",
        "SUBSCRIBE",
        "SUNION",
        "SUNIONSTORE",
        "SWAPDB",
        "SYNC",
        "TIME",
        "TOUCH",
        "TTL",
        "TYPE",
        "UNSUBSCRIBE",
        "UNLINK",
        "UNWATCH",
        "WAIT",
        "WATCH",
        "ZADD",
        "ZCARD",
        "ZCOUNT",
        "ZINCRBY",
        "ZINTERSTORE",
        "ZLEXCOUNT",
        "ZRANGE",
        "ZRANGEBYLEX",
        "ZREVRANGEBYLEX",
        "ZRANGEBYSCORE",
        "ZRANK",
        "ZREM",
        "ZREMRANGEBYLEX",
        "ZREMRANGEBYRANK",
        "ZREMRANGEBYSCORE",
        "ZREVRANGE",
        "ZREVRANGEBYSCORE",
        "ZREVRANK",
        "ZSCORE",
        "ZUNIONSTORE",
        "SCAN",
        "SSCAN",
        "HSCAN",
        "ZSCAN"
    ],
    operators: [],
    builtinFunctions: [],
    builtinVariables: [],
    pseudoColumns: [],
    tokenizer: {
        root: [
            {
                include: "@whitespace"
            },
            {
                include: "@pseudoColumns"
            },
            {
                include: "@numbers"
            },
            {
                include: "@strings"
            },
            {
                include: "@scopes"
            },
            [
                /[;,.]/,
                "delimiter"
            ],
            [
                /[()]/,
                "@brackets"
            ],
            [
                /[\w@#$]+/,
                {
                    cases: {
                        "@keywords": "keyword",
                        "@operators": "operator",
                        "@builtinVariables": "predefined",
                        "@builtinFunctions": "predefined",
                        "@default": "identifier"
                    }
                }
            ],
            [
                /[<>=!%&+\-*/|~^]/,
                "operator"
            ]
        ],
        whitespace: [
            [
                /\s+/,
                "white"
            ]
        ],
        pseudoColumns: [
            [
                /[$][A-Za-z_][\w@#$]*/,
                {
                    cases: {
                        "@pseudoColumns": "predefined",
                        "@default": "identifier"
                    }
                }
            ]
        ],
        numbers: [
            [
                /0[xX][0-9a-fA-F]*/,
                "number"
            ],
            [
                /[$][+-]*\d*(\.\d*)?/,
                "number"
            ],
            [
                /((\d+(\.\d*)?)|(\.\d+))([eE][\-+]?\d+)?/,
                "number"
            ]
        ],
        strings: [
            [
                /'/,
                {
                    token: "string",
                    next: "@string"
                }
            ],
            [
                /"/,
                {
                    token: "string.double",
                    next: "@stringDouble"
                }
            ]
        ],
        string: [
            [
                /[^']+/,
                "string"
            ],
            [
                /''/,
                "string"
            ],
            [
                /'/,
                {
                    token: "string",
                    next: "@pop"
                }
            ]
        ],
        stringDouble: [
            [
                /[^"]+/,
                "string.double"
            ],
            [
                /""/,
                "string.double"
            ],
            [
                /"/,
                {
                    token: "string.double",
                    next: "@pop"
                }
            ]
        ],
        scopes: []
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"5oERU"}]},[], null, "parcelRequire3aa6")

//# sourceMappingURL=redis.7354e5ce.js.map
