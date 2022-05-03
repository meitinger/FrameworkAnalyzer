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
var $30108fb6629af120$exports = {};

$parcel$export($30108fb6629af120$exports, "initialize", function () { return $30108fb6629af120$export$2a47f398eeff8b01; });

var $ibiUD = parcelRequire("ibiUD");

var $bHj3S = parcelRequire("bHj3S");
let $30108fb6629af120$var$initialized = false;
function $30108fb6629af120$export$2a47f398eeff8b01(foreignModule) {
    if ($30108fb6629af120$var$initialized) return;
    $30108fb6629af120$var$initialized = true;
    const simpleWorker = new $ibiUD.SimpleWorkerServer((msg)=>{
        self.postMessage(msg);
    }, (host)=>new $bHj3S.EditorSimpleWorker(host, foreignModule)
    );
    self.onmessage = (e)=>{
        simpleWorker.onmessage(e.data);
    };
}
self.onmessage = (e)=>{
    // Ignore first message in this case and initialize if not yet initialized
    if (!$30108fb6629af120$var$initialized) $30108fb6629af120$export$2a47f398eeff8b01(null);
};


//# sourceMappingURL=editor.worker.1a46ba1d.js.map
