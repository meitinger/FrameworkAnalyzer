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
var $8e8e70f2d189c6ff$exports = {};

$parcel$export($8e8e70f2d189c6ff$exports, "initialize", function () { return $8e8e70f2d189c6ff$export$2a47f398eeff8b01; });

var $eE29s = parcelRequire("eE29s");

var $3M0HZ = parcelRequire("3M0HZ");
var $8e8e70f2d189c6ff$var$initialized = false;
function $8e8e70f2d189c6ff$export$2a47f398eeff8b01(foreignModule) {
    if ($8e8e70f2d189c6ff$var$initialized) return;
    $8e8e70f2d189c6ff$var$initialized = true;
    var simpleWorker = new $eE29s.SimpleWorkerServer(function(msg) {
        self.postMessage(msg);
    }, function(host) {
        return new $3M0HZ.EditorSimpleWorker(host, foreignModule);
    });
    self.onmessage = function(e) {
        simpleWorker.onmessage(e.data);
    };
}
self.onmessage = function(e) {
    // Ignore first message in this case and initialize if not yet initialized
    if (!$8e8e70f2d189c6ff$var$initialized) $8e8e70f2d189c6ff$export$2a47f398eeff8b01(null);
};

})();
//# sourceMappingURL=editor.worker.dea0ec09.js.map
