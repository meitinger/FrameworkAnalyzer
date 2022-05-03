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
var $805fec2cffdc5594$exports = {};

$parcel$export($805fec2cffdc5594$exports, "initialize", function () { return $805fec2cffdc5594$export$2a47f398eeff8b01; });

var $eChNA = parcelRequire("eChNA");

var $2mnn5 = parcelRequire("2mnn5");
var $805fec2cffdc5594$var$initialized = false;
function $805fec2cffdc5594$export$2a47f398eeff8b01(foreignModule) {
    if ($805fec2cffdc5594$var$initialized) return;
    $805fec2cffdc5594$var$initialized = true;
    var simpleWorker = new $eChNA.SimpleWorkerServer(function(msg) {
        self.postMessage(msg);
    }, function(host) {
        return new $2mnn5.EditorSimpleWorker(host, foreignModule);
    });
    self.onmessage = function(e) {
        simpleWorker.onmessage(e.data);
    };
}
self.onmessage = function(e) {
    // Ignore first message in this case and initialize if not yet initialized
    if (!$805fec2cffdc5594$var$initialized) $805fec2cffdc5594$export$2a47f398eeff8b01(null);
};

})();
//# sourceMappingURL=editor.worker.4b12dda9.js.map
