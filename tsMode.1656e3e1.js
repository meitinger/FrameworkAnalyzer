(function () {
function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
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
var parcelRequire = $parcel$global["parcelRequire3aa6"];
parcelRequire.register("bd8YY", function(module, exports) {

$parcel$export(module.exports, "setupTypeScript", function () { return $8297e05bede0ca81$export$fe02e3e074fe0a0e; });
$parcel$export(module.exports, "setupJavaScript", function () { return $8297e05bede0ca81$export$4911c01acb361b94; });
$parcel$export(module.exports, "getJavaScriptWorker", function () { return $8297e05bede0ca81$export$42142bcd5970f8e8; });
$parcel$export(module.exports, "getTypeScriptWorker", function () { return $8297e05bede0ca81$export$f4433c6b950b070e; });

var $8TSCy = parcelRequire("8TSCy");

var $2TvXO = parcelRequire("2TvXO");

var $2nnEZ = parcelRequire("2nnEZ");
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $8297e05bede0ca81$var$__defProp = Object.defineProperty;
var $8297e05bede0ca81$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $8297e05bede0ca81$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $8297e05bede0ca81$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $8297e05bede0ca81$var$__markAsModule = function(target) {
    return $8297e05bede0ca81$var$__defProp(target, "__esModule", {
        value: true
    });
};
var $8297e05bede0ca81$var$__reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!$8297e05bede0ca81$var$__hasOwnProp.call(target, key) && key !== "default") $8297e05bede0ca81$var$__defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = $8297e05bede0ca81$var$__getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = $8297e05bede0ca81$var$__getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
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
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $8297e05bede0ca81$var$monaco_editor_core_exports = {};
$8297e05bede0ca81$var$__markAsModule($8297e05bede0ca81$var$monaco_editor_core_exports);
$8297e05bede0ca81$var$__reExport($8297e05bede0ca81$var$monaco_editor_core_exports, $2nnEZ);
// src/typescript/workerManager.ts
var $8297e05bede0ca81$var$WorkerManager = /*#__PURE__*/ function() {
    "use strict";
    function _class(modeId, defaults) {
        var _this = this;
        $8TSCy.classCallCheck(this, _class);
        this._modeId = modeId;
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._configChangeListener = this._defaults.onDidChange(function() {
            return _this._stopWorker();
        });
        this._updateExtraLibsToken = 0;
        this._extraLibsChangeListener = this._defaults.onDidExtraLibsChange(function() {
            return _this._updateExtraLibs();
        });
    }
    $8TSCy.createClass(_class, [
        {
            key: "_stopWorker",
            value: function _stopWorker() {
                if (this._worker) {
                    this._worker.dispose();
                    this._worker = null;
                }
                this._client = null;
            }
        },
        {
            key: "dispose",
            value: function dispose() {
                this._configChangeListener.dispose();
                this._extraLibsChangeListener.dispose();
                this._stopWorker();
            }
        },
        {
            key: "_updateExtraLibs",
            value: function _updateExtraLibs() {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var myToken, proxy;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (_this._worker) {
                                    _ctx.next = 2;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 2:
                                myToken = ++_this._updateExtraLibsToken;
                                _ctx.next = 5;
                                return _this._worker.getProxy();
                            case 5:
                                proxy = _ctx.sent;
                                if (!(_this._updateExtraLibsToken !== myToken)) {
                                    _ctx.next = 8;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 8:
                                proxy.updateExtraLibs(_this._defaults.getExtraLibs());
                            case 9:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "_getClient",
            value: function _getClient() {
                if (!this._client) {
                    var _this = this;
                    this._worker = $8297e05bede0ca81$var$monaco_editor_core_exports.editor.createWebWorker({
                        moduleId: "vs/language/typescript/tsWorker",
                        label: this._modeId,
                        keepIdleModels: true,
                        createData: {
                            compilerOptions: this._defaults.getCompilerOptions(),
                            extraLibs: this._defaults.getExtraLibs(),
                            customWorkerPath: this._defaults.workerOptions.customWorkerPath,
                            inlayHintsOptions: this._defaults.inlayHintsOptions
                        }
                    });
                    var p = this._worker.getProxy();
                    if (this._defaults.getEagerModelSync()) p = p.then(function(worker) {
                        var _this1 = _this;
                        if (_this._worker) return _this._worker.withSyncedResources($8297e05bede0ca81$var$monaco_editor_core_exports.editor.getModels().filter(function(model) {
                            return model.getLanguageId() === _this1._modeId;
                        }).map(function(model) {
                            return model.uri;
                        }));
                        return worker;
                    });
                    this._client = p;
                }
                return this._client;
            }
        },
        {
            key: "getLanguageServiceWorker",
            value: function getLanguageServiceWorker() {
                for(var _len = arguments.length, resources = new Array(_len), _key = 0; _key < _len; _key++){
                    resources[_key] = arguments[_key];
                }
                var _this = this;
                var _client;
                return this._getClient().then(function(client) {
                    _client = client;
                }).then(function(_) {
                    if (_this._worker) return _this._worker.withSyncedResources(resources);
                }).then(function(_) {
                    return _client;
                });
            }
        }
    ]);
    return _class;
}();
// src/typescript/lib/typescriptServicesMetadata.ts
var $8297e05bede0ca81$var$typescriptVersion = "4.4.4";
// src/typescript/monaco.contribution.ts
var $8297e05bede0ca81$var$ModuleKind;
(function(ModuleKind2) {
    ModuleKind2[ModuleKind2["None"] = 0] = "None";
    ModuleKind2[ModuleKind2["CommonJS"] = 1] = "CommonJS";
    ModuleKind2[ModuleKind2["AMD"] = 2] = "AMD";
    ModuleKind2[ModuleKind2["UMD"] = 3] = "UMD";
    ModuleKind2[ModuleKind2["System"] = 4] = "System";
    ModuleKind2[ModuleKind2["ES2015"] = 5] = "ES2015";
    ModuleKind2[ModuleKind2["ESNext"] = 99] = "ESNext";
})($8297e05bede0ca81$var$ModuleKind || ($8297e05bede0ca81$var$ModuleKind = {}));
var $8297e05bede0ca81$var$JsxEmit;
(function(JsxEmit2) {
    JsxEmit2[JsxEmit2["None"] = 0] = "None";
    JsxEmit2[JsxEmit2["Preserve"] = 1] = "Preserve";
    JsxEmit2[JsxEmit2["React"] = 2] = "React";
    JsxEmit2[JsxEmit2["ReactNative"] = 3] = "ReactNative";
    JsxEmit2[JsxEmit2["ReactJSX"] = 4] = "ReactJSX";
    JsxEmit2[JsxEmit2["ReactJSXDev"] = 5] = "ReactJSXDev";
})($8297e05bede0ca81$var$JsxEmit || ($8297e05bede0ca81$var$JsxEmit = {}));
var $8297e05bede0ca81$var$NewLineKind;
(function(NewLineKind2) {
    NewLineKind2[NewLineKind2["CarriageReturnLineFeed"] = 0] = "CarriageReturnLineFeed";
    NewLineKind2[NewLineKind2["LineFeed"] = 1] = "LineFeed";
})($8297e05bede0ca81$var$NewLineKind || ($8297e05bede0ca81$var$NewLineKind = {}));
var $8297e05bede0ca81$var$ScriptTarget;
(function(ScriptTarget2) {
    ScriptTarget2[ScriptTarget2["ES3"] = 0] = "ES3";
    ScriptTarget2[ScriptTarget2["ES5"] = 1] = "ES5";
    ScriptTarget2[ScriptTarget2["ES2015"] = 2] = "ES2015";
    ScriptTarget2[ScriptTarget2["ES2016"] = 3] = "ES2016";
    ScriptTarget2[ScriptTarget2["ES2017"] = 4] = "ES2017";
    ScriptTarget2[ScriptTarget2["ES2018"] = 5] = "ES2018";
    ScriptTarget2[ScriptTarget2["ES2019"] = 6] = "ES2019";
    ScriptTarget2[ScriptTarget2["ES2020"] = 7] = "ES2020";
    ScriptTarget2[ScriptTarget2["ESNext"] = 99] = "ESNext";
    ScriptTarget2[ScriptTarget2["JSON"] = 100] = "JSON";
    ScriptTarget2[ScriptTarget2["Latest"] = 99] = "Latest";
})($8297e05bede0ca81$var$ScriptTarget || ($8297e05bede0ca81$var$ScriptTarget = {}));
var $8297e05bede0ca81$var$ModuleResolutionKind;
(function(ModuleResolutionKind2) {
    ModuleResolutionKind2[ModuleResolutionKind2["Classic"] = 1] = "Classic";
    ModuleResolutionKind2[ModuleResolutionKind2["NodeJs"] = 2] = "NodeJs";
})($8297e05bede0ca81$var$ModuleResolutionKind || ($8297e05bede0ca81$var$ModuleResolutionKind = {}));
var $8297e05bede0ca81$var$LanguageServiceDefaultsImpl = /*#__PURE__*/ function() {
    "use strict";
    function _class(compilerOptions, diagnosticsOptions, workerOptions, inlayHintsOptions) {
        $8TSCy.classCallCheck(this, _class);
        this._onDidChange = new $8297e05bede0ca81$var$monaco_editor_core_exports.Emitter();
        this._onDidExtraLibsChange = new $8297e05bede0ca81$var$monaco_editor_core_exports.Emitter();
        this._extraLibs = Object.create(null);
        this._removedExtraLibs = Object.create(null);
        this._eagerModelSync = false;
        this.setCompilerOptions(compilerOptions);
        this.setDiagnosticsOptions(diagnosticsOptions);
        this.setWorkerOptions(workerOptions);
        this.setInlayHintsOptions(inlayHintsOptions);
        this._onDidExtraLibsChangeTimeout = -1;
    }
    $8TSCy.createClass(_class, [
        {
            key: "onDidChange",
            get: function get() {
                return this._onDidChange.event;
            }
        },
        {
            key: "onDidExtraLibsChange",
            get: function get() {
                return this._onDidExtraLibsChange.event;
            }
        },
        {
            key: "workerOptions",
            get: function get() {
                return this._workerOptions;
            }
        },
        {
            key: "inlayHintsOptions",
            get: function get() {
                return this._inlayHintsOptions;
            }
        },
        {
            key: "getExtraLibs",
            value: function getExtraLibs() {
                return this._extraLibs;
            }
        },
        {
            key: "addExtraLib",
            value: function addExtraLib(content, _filePath) {
                var _this = this;
                var filePath;
                if (typeof _filePath === "undefined") filePath = "ts:extralib-".concat(Math.random().toString(36).substring(2, 15));
                else filePath = _filePath;
                if (this._extraLibs[filePath] && this._extraLibs[filePath].content === content) return {
                    dispose: function() {}
                };
                var myVersion = 1;
                if (this._removedExtraLibs[filePath]) myVersion = this._removedExtraLibs[filePath] + 1;
                if (this._extraLibs[filePath]) myVersion = this._extraLibs[filePath].version + 1;
                this._extraLibs[filePath] = {
                    content: content,
                    version: myVersion
                };
                this._fireOnDidExtraLibsChangeSoon();
                return {
                    dispose: function() {
                        var extraLib = _this._extraLibs[filePath];
                        if (!extraLib) return;
                        if (extraLib.version !== myVersion) return;
                        delete _this._extraLibs[filePath];
                        _this._removedExtraLibs[filePath] = myVersion;
                        _this._fireOnDidExtraLibsChangeSoon();
                    }
                };
            }
        },
        {
            key: "setExtraLibs",
            value: function setExtraLibs(libs) {
                for(var filePath in this._extraLibs)this._removedExtraLibs[filePath] = this._extraLibs[filePath].version;
                this._extraLibs = Object.create(null);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (libs && libs.length > 0) try {
                    for(var _iterator = libs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var lib = _step.value;
                        var filePath1 = lib.filePath || "ts:extralib-".concat(Math.random().toString(36).substring(2, 15));
                        var content = lib.content;
                        var myVersion = 1;
                        if (this._removedExtraLibs[filePath1]) myVersion = this._removedExtraLibs[filePath1] + 1;
                        this._extraLibs[filePath1] = {
                            content: content,
                            version: myVersion
                        };
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
                this._fireOnDidExtraLibsChangeSoon();
            }
        },
        {
            key: "_fireOnDidExtraLibsChangeSoon",
            value: function _fireOnDidExtraLibsChangeSoon() {
                var _this = this;
                if (this._onDidExtraLibsChangeTimeout !== -1) return;
                this._onDidExtraLibsChangeTimeout = window.setTimeout(function() {
                    _this._onDidExtraLibsChangeTimeout = -1;
                    _this._onDidExtraLibsChange.fire(void 0);
                }, 0);
            }
        },
        {
            key: "getCompilerOptions",
            value: function getCompilerOptions() {
                return this._compilerOptions;
            }
        },
        {
            key: "setCompilerOptions",
            value: function setCompilerOptions(options) {
                this._compilerOptions = options || Object.create(null);
                this._onDidChange.fire(void 0);
            }
        },
        {
            key: "getDiagnosticsOptions",
            value: function getDiagnosticsOptions() {
                return this._diagnosticsOptions;
            }
        },
        {
            key: "setDiagnosticsOptions",
            value: function setDiagnosticsOptions(options) {
                this._diagnosticsOptions = options || Object.create(null);
                this._onDidChange.fire(void 0);
            }
        },
        {
            key: "setWorkerOptions",
            value: function setWorkerOptions(options) {
                this._workerOptions = options || Object.create(null);
                this._onDidChange.fire(void 0);
            }
        },
        {
            key: "setInlayHintsOptions",
            value: function setInlayHintsOptions(options) {
                this._inlayHintsOptions = options || Object.create(null);
                this._onDidChange.fire(void 0);
            }
        },
        {
            key: "setMaximumWorkerIdleTime",
            value: function setMaximumWorkerIdleTime(value) {}
        },
        {
            key: "setEagerModelSync",
            value: function setEagerModelSync(value) {
                this._eagerModelSync = value;
            }
        },
        {
            key: "getEagerModelSync",
            value: function getEagerModelSync() {
                return this._eagerModelSync;
            }
        }
    ]);
    return _class;
}();
var $8297e05bede0ca81$var$typescriptVersion2 = $8297e05bede0ca81$var$typescriptVersion;
var $8297e05bede0ca81$var$typescriptDefaults = new $8297e05bede0ca81$var$LanguageServiceDefaultsImpl({
    allowNonTsExtensions: true,
    target: 99
}, {
    noSemanticValidation: false,
    noSyntaxValidation: false,
    onlyVisible: false
}, {}, {});
var $8297e05bede0ca81$var$javascriptDefaults = new $8297e05bede0ca81$var$LanguageServiceDefaultsImpl({
    allowNonTsExtensions: true,
    allowJs: true,
    target: 99
}, {
    noSemanticValidation: true,
    noSyntaxValidation: false,
    onlyVisible: false
}, {}, {});
var $8297e05bede0ca81$var$getTypeScriptWorker = function() {
    return $8297e05bede0ca81$var$getMode().then(function(mode) {
        return mode.getTypeScriptWorker();
    });
};
var $8297e05bede0ca81$var$getJavaScriptWorker = function() {
    return $8297e05bede0ca81$var$getMode().then(function(mode) {
        return mode.getJavaScriptWorker();
    });
};
$8297e05bede0ca81$var$monaco_editor_core_exports.languages.typescript = {
    ModuleKind: $8297e05bede0ca81$var$ModuleKind,
    JsxEmit: $8297e05bede0ca81$var$JsxEmit,
    NewLineKind: $8297e05bede0ca81$var$NewLineKind,
    ScriptTarget: $8297e05bede0ca81$var$ScriptTarget,
    ModuleResolutionKind: $8297e05bede0ca81$var$ModuleResolutionKind,
    typescriptVersion: $8297e05bede0ca81$var$typescriptVersion2,
    typescriptDefaults: $8297e05bede0ca81$var$typescriptDefaults,
    javascriptDefaults: $8297e05bede0ca81$var$javascriptDefaults,
    getTypeScriptWorker: $8297e05bede0ca81$var$getTypeScriptWorker,
    getJavaScriptWorker: $8297e05bede0ca81$var$getJavaScriptWorker
};

function $8297e05bede0ca81$var$getMode() {
    var resolve, reject;
    return Promise.resolve(module.exports);
}
$8297e05bede0ca81$var$monaco_editor_core_exports.languages.onLanguage("typescript", function() {
    return $8297e05bede0ca81$var$getMode().then(function(mode) {
        return mode.setupTypeScript($8297e05bede0ca81$var$typescriptDefaults);
    });
});
$8297e05bede0ca81$var$monaco_editor_core_exports.languages.onLanguage("javascript", function() {
    return $8297e05bede0ca81$var$getMode().then(function(mode) {
        return mode.setupJavaScript($8297e05bede0ca81$var$javascriptDefaults);
    });
});
// src/typescript/lib/lib.index.ts
var $8297e05bede0ca81$var$libFileSet = {};
$8297e05bede0ca81$var$libFileSet["lib.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.dom.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.dom.iterable.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.collection.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.core.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.generator.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.iterable.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.promise.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.proxy.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.reflect.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.symbol.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2015.symbol.wellknown.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2016.array.include.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2016.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2016.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.intl.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.object.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.sharedmemory.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.string.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2017.typedarrays.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.asyncgenerator.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.asynciterable.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.intl.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.promise.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2018.regexp.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2019.array.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2019.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2019.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2019.object.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2019.string.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2019.symbol.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.bigint.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.intl.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.promise.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.sharedmemory.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.string.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2020.symbol.wellknown.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2021.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2021.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2021.promise.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2021.string.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es2021.weakref.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es5.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.es6.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.esnext.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.esnext.full.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.esnext.intl.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.esnext.promise.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.esnext.string.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.esnext.weakref.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.scripthost.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.webworker.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.webworker.importscripts.d.ts"] = true;
$8297e05bede0ca81$var$libFileSet["lib.webworker.iterable.d.ts"] = true;
// src/typescript/languageFeatures.ts
var $8297e05bede0ca81$var$IndentStyle;
(function(IndentStyle2) {
    IndentStyle2[IndentStyle2["None"] = 0] = "None";
    IndentStyle2[IndentStyle2["Block"] = 1] = "Block";
    IndentStyle2[IndentStyle2["Smart"] = 2] = "Smart";
})($8297e05bede0ca81$var$IndentStyle || ($8297e05bede0ca81$var$IndentStyle = {}));
function $8297e05bede0ca81$var$flattenDiagnosticMessageText(diag, newLine) {
    var indent = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    if (typeof diag === "string") return diag;
    else if (diag === void 0) return "";
    var result = "";
    if (indent) {
        result += newLine;
        for(var i = 0; i < indent; i++)result += "  ";
    }
    result += diag.messageText;
    indent++;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if (diag.next) try {
        for(var _iterator = diag.next[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var kid = _step.value;
            result += $8297e05bede0ca81$var$flattenDiagnosticMessageText(kid, newLine, indent);
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
}
function $8297e05bede0ca81$var$displayPartsToString(displayParts) {
    if (displayParts) return displayParts.map(function(displayPart) {
        return displayPart.text;
    }).join("");
    return "";
}
var $8297e05bede0ca81$var$Adapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "_textSpanToRange",
            value: function _textSpanToRange(model, span) {
                var p1 = model.getPositionAt(span.start);
                var p2 = model.getPositionAt(span.start + span.length);
                var startLineNumber = p1.lineNumber, startColumn = p1.column;
                var endLineNumber = p2.lineNumber, endColumn = p2.column;
                return {
                    startLineNumber: startLineNumber,
                    startColumn: startColumn,
                    endLineNumber: endLineNumber,
                    endColumn: endColumn
                };
            }
        }
    ]);
    return _class;
}();
var $8297e05bede0ca81$var$LibFiles = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
        this._libFiles = {};
        this._hasFetchedLibFiles = false;
        this._fetchLibFilesPromise = null;
    }
    $8TSCy.createClass(_class, [
        {
            key: "isLibFile",
            value: function isLibFile(uri) {
                if (!uri) return false;
                if (uri.path.indexOf("/lib.") === 0) return !!$8297e05bede0ca81$var$libFileSet[uri.path.slice(1)];
                return false;
            }
        },
        {
            key: "getOrCreateModel",
            value: function getOrCreateModel(fileName) {
                var uri = $8297e05bede0ca81$var$monaco_editor_core_exports.Uri.parse(fileName);
                var model = $8297e05bede0ca81$var$monaco_editor_core_exports.editor.getModel(uri);
                if (model) return model;
                if (this.isLibFile(uri) && this._hasFetchedLibFiles) return $8297e05bede0ca81$var$monaco_editor_core_exports.editor.createModel(this._libFiles[uri.path.slice(1)], "typescript", uri);
                var matchedLibFile = $8297e05bede0ca81$var$typescriptDefaults.getExtraLibs()[fileName];
                if (matchedLibFile) return $8297e05bede0ca81$var$monaco_editor_core_exports.editor.createModel(matchedLibFile.content, "typescript", uri);
                return null;
            }
        },
        {
            key: "_containsLibFile",
            value: function _containsLibFile(uris) {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = uris[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var uri = _step.value;
                        if (this.isLibFile(uri)) return true;
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
                return false;
            }
        },
        {
            key: "fetchLibFilesIfNecessary",
            value: function fetchLibFilesIfNecessary(uris) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                if (_this._containsLibFile(uris)) {
                                    _ctx.next = 2;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 2:
                                _ctx.next = 4;
                                return _this._fetchLibFiles();
                            case 4:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "_fetchLibFiles",
            value: function _fetchLibFiles() {
                var _this = this;
                if (!this._fetchLibFilesPromise) this._fetchLibFilesPromise = this._worker().then(function(w) {
                    return w.getLibFiles();
                }).then(function(libFiles) {
                    _this._hasFetchedLibFiles = true;
                    _this._libFiles = libFiles;
                });
                return this._fetchLibFilesPromise;
            }
        }
    ]);
    return _class;
}();
var $8297e05bede0ca81$var$DiagnosticCategory;
(function(DiagnosticCategory2) {
    DiagnosticCategory2[DiagnosticCategory2["Warning"] = 0] = "Warning";
    DiagnosticCategory2[DiagnosticCategory2["Error"] = 1] = "Error";
    DiagnosticCategory2[DiagnosticCategory2["Suggestion"] = 2] = "Suggestion";
    DiagnosticCategory2[DiagnosticCategory2["Message"] = 3] = "Message";
})($8297e05bede0ca81$var$DiagnosticCategory || ($8297e05bede0ca81$var$DiagnosticCategory = {}));
var $8297e05bede0ca81$var$DiagnosticsAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class(_libFiles, _defaults, _selector, worker) {
        $8TSCy.classCallCheck(this, _class);
        var _this;
        _this = _super.call(this, worker);
        _this._libFiles = _libFiles;
        _this._defaults = _defaults;
        _this._selector = _selector;
        _this._disposables = [];
        _this._listener = Object.create(null);
        var onModelAdd = function(model) {
            if (model.getLanguageId() !== _selector) return;
            var maybeValidate = function() {
                var onlyVisible = _this._defaults.getDiagnosticsOptions().onlyVisible;
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) _this._doValidate(model);
                } else _this._doValidate(model);
            };
            var handle;
            var changeSubscription = model.onDidChangeContent(function() {
                clearTimeout(handle);
                handle = window.setTimeout(maybeValidate, 500);
            });
            var visibleSubscription = model.onDidChangeAttached(function() {
                var onlyVisible = _this._defaults.getDiagnosticsOptions().onlyVisible;
                if (onlyVisible) {
                    if (model.isAttachedToEditor()) maybeValidate();
                    else $8297e05bede0ca81$var$monaco_editor_core_exports.editor.setModelMarkers(model, _this._selector, []);
                }
            });
            _this._listener[model.uri.toString()] = {
                dispose: function() {
                    changeSubscription.dispose();
                    visibleSubscription.dispose();
                    clearTimeout(handle);
                }
            };
            maybeValidate();
        };
        var onModelRemoved = function(model) {
            $8297e05bede0ca81$var$monaco_editor_core_exports.editor.setModelMarkers(model, _this._selector, []);
            var key = model.uri.toString();
            if (_this._listener[key]) {
                _this._listener[key].dispose();
                delete _this._listener[key];
            }
        };
        _this._disposables.push($8297e05bede0ca81$var$monaco_editor_core_exports.editor.onDidCreateModel(function(model) {
            return onModelAdd(model);
        }));
        _this._disposables.push($8297e05bede0ca81$var$monaco_editor_core_exports.editor.onWillDisposeModel(onModelRemoved));
        _this._disposables.push($8297e05bede0ca81$var$monaco_editor_core_exports.editor.onDidChangeModelLanguage(function(event) {
            onModelRemoved(event.model);
            onModelAdd(event.model);
        }));
        _this._disposables.push({
            dispose: function() {
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                try {
                    for(var _iterator = $8297e05bede0ca81$var$monaco_editor_core_exports.editor.getModels()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var model = _step.value;
                        onModelRemoved(model);
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
            }
        });
        var recomputeDiagostics = function() {
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                for(var _iterator = $8297e05bede0ca81$var$monaco_editor_core_exports.editor.getModels()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var model = _step.value;
                    onModelRemoved(model);
                    onModelAdd(model);
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
        };
        _this._disposables.push(_this._defaults.onDidChange(recomputeDiagostics));
        _this._disposables.push(_this._defaults.onDidExtraLibsChange(recomputeDiagostics));
        $8297e05bede0ca81$var$monaco_editor_core_exports.editor.getModels().forEach(function(model) {
            return onModelAdd(model);
        });
        return _this;
    }
    $8TSCy.createClass(_class, [
        {
            key: "dispose",
            value: function dispose() {
                this._disposables.forEach(function(d) {
                    return d && d.dispose();
                });
                this._disposables = [];
            }
        },
        {
            key: "_doValidate",
            value: function _doValidate(model) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var worker, promises, ref, noSyntaxValidation, noSemanticValidation, noSuggestionDiagnostics, allDiagnostics, diagnostics, relatedUris;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _ctx.next = 2;
                                return _this._worker(model.uri);
                            case 2:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 5;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 5:
                                promises = [];
                                ref = _this._defaults.getDiagnosticsOptions(), noSyntaxValidation = ref.noSyntaxValidation, noSemanticValidation = ref.noSemanticValidation, noSuggestionDiagnostics = ref.noSuggestionDiagnostics;
                                if (!noSyntaxValidation) promises.push(worker.getSyntacticDiagnostics(model.uri.toString()));
                                if (!noSemanticValidation) promises.push(worker.getSemanticDiagnostics(model.uri.toString()));
                                if (!noSuggestionDiagnostics) promises.push(worker.getSuggestionDiagnostics(model.uri.toString()));
                                _ctx.next = 12;
                                return Promise.all(promises);
                            case 12:
                                allDiagnostics = _ctx.sent;
                                if (!(!allDiagnostics || model.isDisposed())) {
                                    _ctx.next = 15;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 15:
                                diagnostics = allDiagnostics.reduce(function(p, c) {
                                    return c.concat(p);
                                }, []).filter(function(d) {
                                    return (_this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore || []).indexOf(d.code) === -1;
                                });
                                relatedUris = diagnostics.map(function(d) {
                                    return d.relatedInformation || [];
                                }).reduce(function(p, c) {
                                    return c.concat(p);
                                }, []).map(function(relatedInformation) {
                                    return relatedInformation.file ? $8297e05bede0ca81$var$monaco_editor_core_exports.Uri.parse(relatedInformation.file.fileName) : null;
                                });
                                _ctx.next = 19;
                                return _this._libFiles.fetchLibFilesIfNecessary(relatedUris);
                            case 19:
                                if (!model.isDisposed()) {
                                    _ctx.next = 21;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 21:
                                $8297e05bede0ca81$var$monaco_editor_core_exports.editor.setModelMarkers(model, _this._selector, diagnostics.map(function(d) {
                                    return _this._convertDiagnostics(model, d);
                                }));
                            case 22:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "_convertDiagnostics",
            value: function _convertDiagnostics(model, diag) {
                var diagStart = diag.start || 0;
                var diagLength = diag.length || 1;
                var ref = model.getPositionAt(diagStart), startLineNumber = ref.lineNumber, startColumn = ref.column;
                var ref1 = model.getPositionAt(diagStart + diagLength), endLineNumber = ref1.lineNumber, endColumn = ref1.column;
                var tags = [];
                if (diag.reportsUnnecessary) tags.push($8297e05bede0ca81$var$monaco_editor_core_exports.MarkerTag.Unnecessary);
                if (diag.reportsDeprecated) tags.push($8297e05bede0ca81$var$monaco_editor_core_exports.MarkerTag.Deprecated);
                return {
                    severity: this._tsDiagnosticCategoryToMarkerSeverity(diag.category),
                    startLineNumber: startLineNumber,
                    startColumn: startColumn,
                    endLineNumber: endLineNumber,
                    endColumn: endColumn,
                    message: $8297e05bede0ca81$var$flattenDiagnosticMessageText(diag.messageText, "\n"),
                    code: diag.code.toString(),
                    tags: tags,
                    relatedInformation: this._convertRelatedInformation(model, diag.relatedInformation)
                };
            }
        },
        {
            key: "_convertRelatedInformation",
            value: function _convertRelatedInformation(model, relatedInformation) {
                var _this = this;
                if (!relatedInformation) return [];
                var result = [];
                relatedInformation.forEach(function(info) {
                    var relatedResource = model;
                    if (info.file) relatedResource = _this._libFiles.getOrCreateModel(info.file.fileName);
                    if (!relatedResource) return;
                    var infoStart = info.start || 0;
                    var infoLength = info.length || 1;
                    var ref = relatedResource.getPositionAt(infoStart), startLineNumber = ref.lineNumber, startColumn = ref.column;
                    var ref2 = relatedResource.getPositionAt(infoStart + infoLength), endLineNumber = ref2.lineNumber, endColumn = ref2.column;
                    result.push({
                        resource: relatedResource.uri,
                        startLineNumber: startLineNumber,
                        startColumn: startColumn,
                        endLineNumber: endLineNumber,
                        endColumn: endColumn,
                        message: $8297e05bede0ca81$var$flattenDiagnosticMessageText(info.messageText, "\n")
                    });
                });
                return result;
            }
        },
        {
            key: "_tsDiagnosticCategoryToMarkerSeverity",
            value: function _tsDiagnosticCategoryToMarkerSeverity(category) {
                switch(category){
                    case 1:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.MarkerSeverity.Error;
                    case 3:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.MarkerSeverity.Info;
                    case 0:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.MarkerSeverity.Warning;
                    case 2:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.MarkerSeverity.Hint;
                }
                return $8297e05bede0ca81$var$monaco_editor_core_exports.MarkerSeverity.Info;
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$SuggestAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "triggerCharacters",
            get: function get() {
                return [
                    "."
                ];
            }
        },
        {
            key: "provideCompletionItems",
            value: function provideCompletionItems(model, position, _context, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var wordInfo, wordRange, resource, offset, worker, info, suggestions;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                wordInfo = model.getWordUntilPosition(position);
                                wordRange = new $8297e05bede0ca81$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 6;
                                return _this._worker(resource);
                            case 6:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 9;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 9:
                                _ctx.next = 11;
                                return worker.getCompletionsAtPosition(resource.toString(), offset);
                            case 11:
                                info = _ctx.sent;
                                if (!(!info || model.isDisposed())) {
                                    _ctx.next = 14;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 14:
                                suggestions = info.entries.map(function(entry) {
                                    var ref;
                                    var range = wordRange;
                                    if (entry.replacementSpan) {
                                        var p1 = model.getPositionAt(entry.replacementSpan.start);
                                        var p2 = model.getPositionAt(entry.replacementSpan.start + entry.replacementSpan.length);
                                        range = new $8297e05bede0ca81$var$monaco_editor_core_exports.Range(p1.lineNumber, p1.column, p2.lineNumber, p2.column);
                                    }
                                    var tags = [];
                                    if (((ref = entry.kindModifiers) === null || ref === void 0 ? void 0 : ref.indexOf("deprecated")) !== -1) tags.push($8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemTag.Deprecated);
                                    return {
                                        uri: resource,
                                        position: position,
                                        offset: offset,
                                        range: range,
                                        label: entry.name,
                                        insertText: entry.name,
                                        sortText: entry.sortText,
                                        kind: $8297e05bede0ca81$var$SuggestAdapter.convertKind(entry.kind),
                                        tags: tags
                                    };
                                });
                                return _ctx.abrupt("return", {
                                    suggestions: suggestions
                                });
                            case 16:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "resolveCompletionItem",
            value: function resolveCompletionItem(item, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var myItem, resource, position, offset, worker, details;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                myItem = item;
                                resource = myItem.uri;
                                position = myItem.position;
                                offset = myItem.offset;
                                _ctx.next = 6;
                                return _this._worker(resource);
                            case 6:
                                worker = _ctx.sent;
                                _ctx.next = 9;
                                return worker.getCompletionEntryDetails(resource.toString(), offset, myItem.label);
                            case 9:
                                details = _ctx.sent;
                                if (details) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return", myItem);
                            case 12:
                                return _ctx.abrupt("return", {
                                    uri: resource,
                                    position: position,
                                    label: details.name,
                                    kind: $8297e05bede0ca81$var$SuggestAdapter.convertKind(details.kind),
                                    detail: $8297e05bede0ca81$var$displayPartsToString(details.displayParts),
                                    documentation: {
                                        value: $8297e05bede0ca81$var$SuggestAdapter.createDocumentationString(details)
                                    }
                                });
                            case 13:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ], [
        {
            key: "convertKind",
            value: function convertKind(kind) {
                switch(kind){
                    case $8297e05bede0ca81$var$Kind.primitiveType:
                    case $8297e05bede0ca81$var$Kind.keyword:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Keyword;
                    case $8297e05bede0ca81$var$Kind.variable:
                    case $8297e05bede0ca81$var$Kind.localVariable:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Variable;
                    case $8297e05bede0ca81$var$Kind.memberVariable:
                    case $8297e05bede0ca81$var$Kind.memberGetAccessor:
                    case $8297e05bede0ca81$var$Kind.memberSetAccessor:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Field;
                    case $8297e05bede0ca81$var$Kind.function:
                    case $8297e05bede0ca81$var$Kind.memberFunction:
                    case $8297e05bede0ca81$var$Kind.constructSignature:
                    case $8297e05bede0ca81$var$Kind.callSignature:
                    case $8297e05bede0ca81$var$Kind.indexSignature:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Function;
                    case $8297e05bede0ca81$var$Kind.enum:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Enum;
                    case $8297e05bede0ca81$var$Kind.module:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Module;
                    case $8297e05bede0ca81$var$Kind.class:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Class;
                    case $8297e05bede0ca81$var$Kind.interface:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Interface;
                    case $8297e05bede0ca81$var$Kind.warning:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.File;
                }
                return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.CompletionItemKind.Property;
            }
        },
        {
            key: "createDocumentationString",
            value: function createDocumentationString(details) {
                var documentationString = $8297e05bede0ca81$var$displayPartsToString(details.documentation);
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                if (details.tags) try {
                    for(var _iterator = details.tags[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                        var tag = _step.value;
                        documentationString += "\n\n".concat($8297e05bede0ca81$var$tagToString(tag));
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
                return documentationString;
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
function $8297e05bede0ca81$var$tagToString(tag) {
    var tagLabel = "*@".concat(tag.name, "*");
    if (tag.name === "param" && tag.text) {
        var _text = $8TSCy.toArray(tag.text), paramName = _text[0], rest = _text.slice(1);
        tagLabel += "`".concat(paramName.text, "`");
        if (rest.length > 0) tagLabel += " \u2014 ".concat(rest.map(function(r) {
            return r.text;
        }).join(" "));
    } else if (Array.isArray(tag.text)) tagLabel += " \u2014 ".concat(tag.text.map(function(r) {
        return r.text;
    }).join(" "));
    else if (tag.text) tagLabel += " \u2014 ".concat(tag.text);
    return tagLabel;
}
var $8297e05bede0ca81$var$SignatureHelpAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        var _this;
        _this = _super.call.apply(_super, [
            this
        ].concat(Array.prototype.slice.call(arguments)));
        _this.signatureHelpTriggerCharacters = [
            "(",
            ","
        ];
        return _this;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideSignatureHelp",
            value: function provideSignatureHelp(model, position, token, context) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, offset, worker, info, ret;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 4;
                                return _this._worker(resource);
                            case 4:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 7;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 7:
                                _ctx.next = 9;
                                return worker.getSignatureHelpItems(resource.toString(), offset, {
                                    triggerReason: $8297e05bede0ca81$var$SignatureHelpAdapter._toSignatureHelpTriggerReason(context)
                                });
                            case 9:
                                info = _ctx.sent;
                                if (!(!info || model.isDisposed())) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 12:
                                ret = {
                                    activeSignature: info.selectedItemIndex,
                                    activeParameter: info.argumentIndex,
                                    signatures: []
                                };
                                info.items.forEach(function(item) {
                                    var signature = {
                                        label: "",
                                        parameters: []
                                    };
                                    signature.documentation = {
                                        value: $8297e05bede0ca81$var$displayPartsToString(item.documentation)
                                    };
                                    signature.label += $8297e05bede0ca81$var$displayPartsToString(item.prefixDisplayParts);
                                    item.parameters.forEach(function(p, i, a) {
                                        var label = $8297e05bede0ca81$var$displayPartsToString(p.displayParts);
                                        var parameter = {
                                            label: label,
                                            documentation: {
                                                value: $8297e05bede0ca81$var$displayPartsToString(p.documentation)
                                            }
                                        };
                                        signature.label += label;
                                        signature.parameters.push(parameter);
                                        if (i < a.length - 1) signature.label += $8297e05bede0ca81$var$displayPartsToString(item.separatorDisplayParts);
                                    });
                                    signature.label += $8297e05bede0ca81$var$displayPartsToString(item.suffixDisplayParts);
                                    ret.signatures.push(signature);
                                });
                                return _ctx.abrupt("return", {
                                    value: ret,
                                    dispose: function() {}
                                });
                            case 15:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ], [
        {
            key: "_toSignatureHelpTriggerReason",
            value: function _toSignatureHelpTriggerReason(context) {
                switch(context.triggerKind){
                    case $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.TriggerCharacter:
                        if (context.triggerCharacter) {
                            if (context.isRetrigger) return {
                                kind: "retrigger",
                                triggerCharacter: context.triggerCharacter
                            };
                            else return {
                                kind: "characterTyped",
                                triggerCharacter: context.triggerCharacter
                            };
                        } else return {
                            kind: "invoked"
                        };
                    case $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.ContentChange:
                        return context.isRetrigger ? {
                            kind: "retrigger"
                        } : {
                            kind: "invoked"
                        };
                    case $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SignatureHelpTriggerKind.Invoke:
                    default:
                        return {
                            kind: "invoked"
                        };
                }
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$QuickInfoAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideHover",
            value: function provideHover(model, position, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, offset, worker, info, documentation, tags, contents;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 4;
                                return _this._worker(resource);
                            case 4:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 7;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 7:
                                _ctx.next = 9;
                                return worker.getQuickInfoAtPosition(resource.toString(), offset);
                            case 9:
                                info = _ctx.sent;
                                if (!(!info || model.isDisposed())) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 12:
                                documentation = $8297e05bede0ca81$var$displayPartsToString(info.documentation);
                                tags = info.tags ? info.tags.map(function(tag) {
                                    return $8297e05bede0ca81$var$tagToString(tag);
                                }).join("  \n\n") : "";
                                contents = $8297e05bede0ca81$var$displayPartsToString(info.displayParts);
                                return _ctx.abrupt("return", {
                                    range: _this._textSpanToRange(model, info.textSpan),
                                    contents: [
                                        {
                                            value: "```typescript\n" + contents + "\n```\n"
                                        },
                                        {
                                            value: documentation + (tags ? "\n\n" + tags : "")
                                        }
                                    ]
                                });
                            case 16:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$OccurrencesAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDocumentHighlights",
            value: function provideDocumentHighlights(model, position, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, offset, worker, entries;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 4;
                                return _this._worker(resource);
                            case 4:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 7;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 7:
                                _ctx.next = 9;
                                return worker.getOccurrencesAtPosition(resource.toString(), offset);
                            case 9:
                                entries = _ctx.sent;
                                if (!(!entries || model.isDisposed())) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 12:
                                return _ctx.abrupt("return", entries.map(function(entry) {
                                    return {
                                        range: _this._textSpanToRange(model, entry.textSpan),
                                        kind: entry.isWriteAccess ? $8297e05bede0ca81$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write : $8297e05bede0ca81$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text
                                    };
                                }));
                            case 13:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$DefinitionAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class(_libFiles, worker) {
        $8TSCy.classCallCheck(this, _class);
        var _this;
        _this = _super.call(this, worker);
        _this._libFiles = _libFiles;
        return _this;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDefinition",
            value: function provideDefinition(model, position, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, offset, worker, entries, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry1, refModel;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 4;
                                return _this._worker(resource);
                            case 4:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 7;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 7:
                                _ctx.next = 9;
                                return worker.getDefinitionAtPosition(resource.toString(), offset);
                            case 9:
                                entries = _ctx.sent;
                                if (!(!entries || model.isDisposed())) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 12:
                                _ctx.next = 14;
                                return _this._libFiles.fetchLibFilesIfNecessary(entries.map(function(entry) {
                                    return $8297e05bede0ca81$var$monaco_editor_core_exports.Uri.parse(entry.fileName);
                                }));
                            case 14:
                                if (!model.isDisposed()) {
                                    _ctx.next = 16;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 16:
                                result = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _ctx.prev = 18;
                                for(_iterator = entries[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    entry1 = _step.value;
                                    refModel = _this._libFiles.getOrCreateModel(entry1.fileName);
                                    if (refModel) result.push({
                                        uri: refModel.uri,
                                        range: _this._textSpanToRange(refModel, entry1.textSpan)
                                    });
                                }
                                _ctx.next = 26;
                                break;
                            case 22:
                                _ctx.prev = 22;
                                _ctx.t0 = _ctx["catch"](18);
                                _didIteratorError = true;
                                _iteratorError = _ctx.t0;
                            case 26:
                                _ctx.prev = 26;
                                _ctx.prev = 27;
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            case 29:
                                _ctx.prev = 29;
                                if (!_didIteratorError) {
                                    _ctx.next = 32;
                                    break;
                                }
                                throw _iteratorError;
                            case 32:
                                return _ctx.finish(29);
                            case 33:
                                return _ctx.finish(26);
                            case 34:
                                return _ctx.abrupt("return", result);
                            case 35:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            18,
                            22,
                            26,
                            34
                        ],
                        [
                            27,
                            ,
                            29,
                            33
                        ]
                    ]);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$ReferenceAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class(_libFiles, worker) {
        $8TSCy.classCallCheck(this, _class);
        var _this;
        _this = _super.call(this, worker);
        _this._libFiles = _libFiles;
        return _this;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideReferences",
            value: function provideReferences(model, position, context, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, offset, worker, entries, result, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, entry2, refModel;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 4;
                                return _this._worker(resource);
                            case 4:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 7;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 7:
                                _ctx.next = 9;
                                return worker.getReferencesAtPosition(resource.toString(), offset);
                            case 9:
                                entries = _ctx.sent;
                                if (!(!entries || model.isDisposed())) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 12:
                                _ctx.next = 14;
                                return _this._libFiles.fetchLibFilesIfNecessary(entries.map(function(entry) {
                                    return $8297e05bede0ca81$var$monaco_editor_core_exports.Uri.parse(entry.fileName);
                                }));
                            case 14:
                                if (!model.isDisposed()) {
                                    _ctx.next = 16;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 16:
                                result = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _ctx.prev = 18;
                                for(_iterator = entries[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                    entry2 = _step.value;
                                    refModel = _this._libFiles.getOrCreateModel(entry2.fileName);
                                    if (refModel) result.push({
                                        uri: refModel.uri,
                                        range: _this._textSpanToRange(refModel, entry2.textSpan)
                                    });
                                }
                                _ctx.next = 26;
                                break;
                            case 22:
                                _ctx.prev = 22;
                                _ctx.t0 = _ctx["catch"](18);
                                _didIteratorError = true;
                                _iteratorError = _ctx.t0;
                            case 26:
                                _ctx.prev = 26;
                                _ctx.prev = 27;
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            case 29:
                                _ctx.prev = 29;
                                if (!_didIteratorError) {
                                    _ctx.next = 32;
                                    break;
                                }
                                throw _iteratorError;
                            case 32:
                                return _ctx.finish(29);
                            case 33:
                                return _ctx.finish(26);
                            case 34:
                                return _ctx.abrupt("return", result);
                            case 35:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            18,
                            22,
                            26,
                            34
                        ],
                        [
                            27,
                            ,
                            29,
                            33
                        ]
                    ]);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$OutlineAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDocumentSymbols",
            value: function provideDocumentSymbols(model, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, worker, items, convert, result;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                _ctx.next = 3;
                                return _this._worker(resource);
                            case 3:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 6;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 6:
                                _ctx.next = 8;
                                return worker.getNavigationBarItems(resource.toString());
                            case 8:
                                items = _ctx.sent;
                                if (!(!items || model.isDisposed())) {
                                    _ctx.next = 11;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 11:
                                convert = function(bucket, item, containerLabel) {
                                    var result2 = {
                                        name: item.text,
                                        detail: "",
                                        kind: $8297e05bede0ca81$var$outlineTypeTable[item.kind] || $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Variable,
                                        range: _this._textSpanToRange(model, item.spans[0]),
                                        selectionRange: _this._textSpanToRange(model, item.spans[0]),
                                        tags: []
                                    };
                                    if (containerLabel) result2.containerName = containerLabel;
                                    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                    if (item.childItems && item.childItems.length > 0) try {
                                        for(var _iterator = item.childItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                                            var child = _step.value;
                                            convert(bucket, child, result2.name);
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
                                    bucket.push(result2);
                                };
                                result = [];
                                items.forEach(function(item) {
                                    return convert(result, item);
                                });
                                return _ctx.abrupt("return", result);
                            case 15:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$Kind = function _class() {
    "use strict";
    $8TSCy.classCallCheck(this, _class);
};
$8297e05bede0ca81$var$Kind.unknown = "";
$8297e05bede0ca81$var$Kind.keyword = "keyword";
$8297e05bede0ca81$var$Kind.script = "script";
$8297e05bede0ca81$var$Kind.module = "module";
$8297e05bede0ca81$var$Kind.class = "class";
$8297e05bede0ca81$var$Kind.interface = "interface";
$8297e05bede0ca81$var$Kind.type = "type";
$8297e05bede0ca81$var$Kind.enum = "enum";
$8297e05bede0ca81$var$Kind.variable = "var";
$8297e05bede0ca81$var$Kind.localVariable = "local var";
$8297e05bede0ca81$var$Kind.function = "function";
$8297e05bede0ca81$var$Kind.localFunction = "local function";
$8297e05bede0ca81$var$Kind.memberFunction = "method";
$8297e05bede0ca81$var$Kind.memberGetAccessor = "getter";
$8297e05bede0ca81$var$Kind.memberSetAccessor = "setter";
$8297e05bede0ca81$var$Kind.memberVariable = "property";
$8297e05bede0ca81$var$Kind.constructorImplementation = "constructor";
$8297e05bede0ca81$var$Kind.callSignature = "call";
$8297e05bede0ca81$var$Kind.indexSignature = "index";
$8297e05bede0ca81$var$Kind.constructSignature = "construct";
$8297e05bede0ca81$var$Kind.parameter = "parameter";
$8297e05bede0ca81$var$Kind.typeParameter = "type parameter";
$8297e05bede0ca81$var$Kind.primitiveType = "primitive type";
$8297e05bede0ca81$var$Kind.label = "label";
$8297e05bede0ca81$var$Kind.alias = "alias";
$8297e05bede0ca81$var$Kind.const = "const";
$8297e05bede0ca81$var$Kind.let = "let";
$8297e05bede0ca81$var$Kind.warning = "warning";
var $8297e05bede0ca81$var$outlineTypeTable = Object.create(null);
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.module] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Module;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.class] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Class;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.enum] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Enum;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.interface] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Interface;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.memberFunction] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Method;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.memberVariable] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.memberGetAccessor] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.memberSetAccessor] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Property;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.variable] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.const] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.localVariable] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.variable] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Variable;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.function] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Function;
$8297e05bede0ca81$var$outlineTypeTable[$8297e05bede0ca81$var$Kind.localFunction] = $8297e05bede0ca81$var$monaco_editor_core_exports.languages.SymbolKind.Function;
var $8297e05bede0ca81$var$FormatHelper = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "_convertTextChanges",
            value: function _convertTextChanges(model, change) {
                return {
                    text: change.newText,
                    range: this._textSpanToRange(model, change.span)
                };
            }
        }
    ], [
        {
            key: "_convertOptions",
            value: function _convertOptions(options) {
                return {
                    ConvertTabsToSpaces: options.insertSpaces,
                    TabSize: options.tabSize,
                    IndentSize: options.tabSize,
                    IndentStyle: 2,
                    NewLineCharacter: "\n",
                    InsertSpaceAfterCommaDelimiter: true,
                    InsertSpaceAfterSemicolonInForStatements: true,
                    InsertSpaceBeforeAndAfterBinaryOperators: true,
                    InsertSpaceAfterKeywordsInControlFlowStatements: true,
                    InsertSpaceAfterFunctionKeywordForAnonymousFunctions: true,
                    InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis: false,
                    InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets: false,
                    InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces: false,
                    PlaceOpenBraceOnNewLineForControlBlocks: false,
                    PlaceOpenBraceOnNewLineForFunctions: false
                };
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$FormatAdapter = /*#__PURE__*/ function(FormatHelper) {
    "use strict";
    $8TSCy.inherits(_class, FormatHelper);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDocumentRangeFormattingEdits",
            value: function provideDocumentRangeFormattingEdits(model, range, options, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, startOffset, endOffset, worker, edits;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                startOffset = model.getOffsetAt({
                                    lineNumber: range.startLineNumber,
                                    column: range.startColumn
                                });
                                endOffset = model.getOffsetAt({
                                    lineNumber: range.endLineNumber,
                                    column: range.endColumn
                                });
                                _ctx.next = 5;
                                return _this._worker(resource);
                            case 5:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 8;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 8:
                                _ctx.next = 10;
                                return worker.getFormattingEditsForRange(resource.toString(), startOffset, endOffset, $8297e05bede0ca81$var$FormatHelper._convertOptions(options));
                            case 10:
                                edits = _ctx.sent;
                                if (!(!edits || model.isDisposed())) {
                                    _ctx.next = 13;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 13:
                                return _ctx.abrupt("return", edits.map(function(edit) {
                                    return _this._convertTextChanges(model, edit);
                                }));
                            case 14:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$FormatHelper);
var $8297e05bede0ca81$var$FormatOnTypeAdapter = /*#__PURE__*/ function(FormatHelper) {
    "use strict";
    $8TSCy.inherits(_class, FormatHelper);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "autoFormatTriggerCharacters",
            get: function get() {
                return [
                    ";",
                    "}",
                    "\n"
                ];
            }
        },
        {
            key: "provideOnTypeFormattingEdits",
            value: function provideOnTypeFormattingEdits(model, position, ch, options, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, offset, worker, edits;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                offset = model.getOffsetAt(position);
                                _ctx.next = 4;
                                return _this._worker(resource);
                            case 4:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 7;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 7:
                                _ctx.next = 9;
                                return worker.getFormattingEditsAfterKeystroke(resource.toString(), offset, ch, $8297e05bede0ca81$var$FormatHelper._convertOptions(options));
                            case 9:
                                edits = _ctx.sent;
                                if (!(!edits || model.isDisposed())) {
                                    _ctx.next = 12;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 12:
                                return _ctx.abrupt("return", edits.map(function(edit) {
                                    return _this._convertTextChanges(model, edit);
                                }));
                            case 13:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$FormatHelper);
var $8297e05bede0ca81$var$CodeActionAdaptor = /*#__PURE__*/ function(FormatHelper) {
    "use strict";
    $8TSCy.inherits(_class, FormatHelper);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideCodeActions",
            value: function provideCodeActions(model, range, context, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, start, end, formatOptions, errorCodes, worker, codeFixes, actions;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                start = model.getOffsetAt({
                                    lineNumber: range.startLineNumber,
                                    column: range.startColumn
                                });
                                end = model.getOffsetAt({
                                    lineNumber: range.endLineNumber,
                                    column: range.endColumn
                                });
                                formatOptions = $8297e05bede0ca81$var$FormatHelper._convertOptions(model.getOptions());
                                errorCodes = context.markers.filter(function(m) {
                                    return m.code;
                                }).map(function(m) {
                                    return m.code;
                                }).map(Number);
                                _ctx.next = 7;
                                return _this._worker(resource);
                            case 7:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 10;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 10:
                                _ctx.next = 12;
                                return worker.getCodeFixesAtPosition(resource.toString(), start, end, errorCodes, formatOptions);
                            case 12:
                                codeFixes = _ctx.sent;
                                if (!(!codeFixes || model.isDisposed())) {
                                    _ctx.next = 15;
                                    break;
                                }
                                return _ctx.abrupt("return", {
                                    actions: [],
                                    dispose: function() {}
                                });
                            case 15:
                                actions = codeFixes.filter(function(fix) {
                                    return fix.changes.filter(function(change) {
                                        return change.isNewFile;
                                    }).length === 0;
                                }).map(function(fix) {
                                    return _this._tsCodeFixActionToMonacoCodeAction(model, context, fix);
                                });
                                return _ctx.abrupt("return", {
                                    actions: actions,
                                    dispose: function() {}
                                });
                            case 17:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "_tsCodeFixActionToMonacoCodeAction",
            value: function _tsCodeFixActionToMonacoCodeAction(model, context, codeFix) {
                var edits = [];
                var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined, _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator = codeFix.changes[Symbol.iterator](), _step; !(_iteratorNormalCompletion1 = (_step = _iterator.next()).done); _iteratorNormalCompletion1 = true){
                        var change = _step.value;
                        try {
                            for(var _iterator1 = change.textChanges[Symbol.iterator](), _step1; !(_iteratorNormalCompletion = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion = true){
                                var textChange = _step1.value;
                                edits.push({
                                    resource: model.uri,
                                    edit: {
                                        range: this._textSpanToRange(model, textChange.span),
                                        text: textChange.newText
                                    }
                                });
                            }
                        } catch (err) {
                            _didIteratorError = true;
                            _iteratorError = err;
                        } finally{
                            try {
                                if (!_iteratorNormalCompletion && _iterator1.return != null) {
                                    _iterator1.return();
                                }
                            } finally{
                                if (_didIteratorError) {
                                    throw _iteratorError;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator.return != null) {
                            _iterator.return();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
                var action = {
                    title: codeFix.description,
                    edit: {
                        edits: edits
                    },
                    diagnostics: context.markers,
                    kind: "quickfix"
                };
                return action;
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$FormatHelper);
var $8297e05bede0ca81$var$RenameAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class(_libFiles, worker) {
        $8TSCy.classCallCheck(this, _class);
        var _this;
        _this = _super.call(this, worker);
        _this._libFiles = _libFiles;
        return _this;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideRenameEdits",
            value: function provideRenameEdits(model, position, newName, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, fileName, offset, worker, renameInfo, renameLocations, edits, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, renameLocation, model2;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                fileName = resource.toString();
                                offset = model.getOffsetAt(position);
                                _ctx.next = 5;
                                return _this._worker(resource);
                            case 5:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 8;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 8:
                                _ctx.next = 10;
                                return worker.getRenameInfo(fileName, offset, {
                                    allowRenameOfImportPath: false
                                });
                            case 10:
                                renameInfo = _ctx.sent;
                                if (!(renameInfo.canRename === false)) {
                                    _ctx.next = 13;
                                    break;
                                }
                                return _ctx.abrupt("return", {
                                    edits: [],
                                    rejectReason: renameInfo.localizedErrorMessage
                                });
                            case 13:
                                if (!(renameInfo.fileToRename !== void 0)) {
                                    _ctx.next = 15;
                                    break;
                                }
                                throw new Error("Renaming files is not supported.");
                            case 15:
                                _ctx.next = 17;
                                return worker.findRenameLocations(fileName, offset, false, false, false);
                            case 17:
                                renameLocations = _ctx.sent;
                                if (!(!renameLocations || model.isDisposed())) {
                                    _ctx.next = 20;
                                    break;
                                }
                                return _ctx.abrupt("return");
                            case 20:
                                edits = [];
                                _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
                                _ctx.prev = 22;
                                _iterator = renameLocations[Symbol.iterator]();
                            case 24:
                                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                    _ctx.next = 35;
                                    break;
                                }
                                renameLocation = _step.value;
                                model2 = _this._libFiles.getOrCreateModel(renameLocation.fileName);
                                if (!model2) {
                                    _ctx.next = 31;
                                    break;
                                }
                                edits.push({
                                    resource: model2.uri,
                                    edit: {
                                        range: _this._textSpanToRange(model2, renameLocation.textSpan),
                                        text: newName
                                    }
                                });
                                _ctx.next = 32;
                                break;
                            case 31:
                                throw new Error("Unknown file ".concat(renameLocation.fileName, "."));
                            case 32:
                                _iteratorNormalCompletion = true;
                                _ctx.next = 24;
                                break;
                            case 35:
                                _ctx.next = 41;
                                break;
                            case 37:
                                _ctx.prev = 37;
                                _ctx.t0 = _ctx["catch"](22);
                                _didIteratorError = true;
                                _iteratorError = _ctx.t0;
                            case 41:
                                _ctx.prev = 41;
                                _ctx.prev = 42;
                                if (!_iteratorNormalCompletion && _iterator.return != null) {
                                    _iterator.return();
                                }
                            case 44:
                                _ctx.prev = 44;
                                if (!_didIteratorError) {
                                    _ctx.next = 47;
                                    break;
                                }
                                throw _iteratorError;
                            case 47:
                                return _ctx.finish(44);
                            case 48:
                                return _ctx.finish(41);
                            case 49:
                                return _ctx.abrupt("return", {
                                    edits: edits
                                });
                            case 50:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee, null, [
                        [
                            22,
                            37,
                            41,
                            49
                        ],
                        [
                            42,
                            ,
                            44,
                            48
                        ]
                    ]);
                }))();
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
var $8297e05bede0ca81$var$InlayHintsAdapter = /*#__PURE__*/ function(Adapter) {
    "use strict";
    $8TSCy.inherits(_class, Adapter);
    var _super = $8TSCy.createSuper(_class);
    function _class() {
        $8TSCy.classCallCheck(this, _class);
        return _super.apply(this, arguments);
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideInlayHints",
            value: function provideInlayHints(model, range, token) {
                var _this = this;
                return $8TSCy.asyncToGenerator((/*@__PURE__*/$parcel$interopDefault($2TvXO)).mark(function _callee() {
                    var resource, fileName, start, end, worker, hints;
                    return (/*@__PURE__*/$parcel$interopDefault($2TvXO)).wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                resource = model.uri;
                                fileName = resource.toString();
                                start = model.getOffsetAt({
                                    lineNumber: range.startLineNumber,
                                    column: range.startColumn
                                });
                                end = model.getOffsetAt({
                                    lineNumber: range.endLineNumber,
                                    column: range.endColumn
                                });
                                _ctx.next = 6;
                                return _this._worker(resource);
                            case 6:
                                worker = _ctx.sent;
                                if (!model.isDisposed()) {
                                    _ctx.next = 9;
                                    break;
                                }
                                return _ctx.abrupt("return", []);
                            case 9:
                                _ctx.next = 11;
                                return worker.provideInlayHints(fileName, start, end);
                            case 11:
                                hints = _ctx.sent;
                                return _ctx.abrupt("return", hints.map(function(hint) {
                                    return $8TSCy.objectSpread({}, hint, {
                                        position: model.getPositionAt(hint.position),
                                        kind: _this._convertHintKind(hint.kind)
                                    });
                                }));
                            case 13:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }))();
            }
        },
        {
            key: "_convertHintKind",
            value: function _convertHintKind(kind) {
                switch(kind){
                    case "Parameter":
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.InlayHintKind.Parameter;
                    case "Type":
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.InlayHintKind.Type;
                    default:
                        return $8297e05bede0ca81$var$monaco_editor_core_exports.languages.InlayHintKind.Other;
                }
            }
        }
    ]);
    return _class;
}($8297e05bede0ca81$var$Adapter);
// src/typescript/tsMode.ts
var $8297e05bede0ca81$var$javaScriptWorker;
var $8297e05bede0ca81$var$typeScriptWorker;
function $8297e05bede0ca81$export$fe02e3e074fe0a0e(defaults) {
    $8297e05bede0ca81$var$typeScriptWorker = $8297e05bede0ca81$var$setupMode(defaults, "typescript");
}
function $8297e05bede0ca81$export$4911c01acb361b94(defaults) {
    $8297e05bede0ca81$var$javaScriptWorker = $8297e05bede0ca81$var$setupMode(defaults, "javascript");
}
function $8297e05bede0ca81$export$42142bcd5970f8e8() {
    return new Promise(function(resolve, reject) {
        if (!$8297e05bede0ca81$var$javaScriptWorker) return reject("JavaScript not registered!");
        resolve($8297e05bede0ca81$var$javaScriptWorker);
    });
}
function $8297e05bede0ca81$export$f4433c6b950b070e() {
    return new Promise(function(resolve, reject) {
        if (!$8297e05bede0ca81$var$typeScriptWorker) return reject("TypeScript not registered!");
        resolve($8297e05bede0ca81$var$typeScriptWorker);
    });
}
function $8297e05bede0ca81$var$setupMode(defaults, modeId) {
    var client = new $8297e05bede0ca81$var$WorkerManager(modeId, defaults);
    var worker = function() {
        for(var _len = arguments.length, uris = new Array(_len), _key = 0; _key < _len; _key++){
            uris[_key] = arguments[_key];
        }
        var _client;
        return (_client = client).getLanguageServiceWorker.apply(_client, $8TSCy.toConsumableArray(uris));
    };
    var libFiles = new $8297e05bede0ca81$var$LibFiles(worker);
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(modeId, new $8297e05bede0ca81$var$SuggestAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerSignatureHelpProvider(modeId, new $8297e05bede0ca81$var$SignatureHelpAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerHoverProvider(modeId, new $8297e05bede0ca81$var$QuickInfoAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(modeId, new $8297e05bede0ca81$var$OccurrencesAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerDefinitionProvider(modeId, new $8297e05bede0ca81$var$DefinitionAdapter(libFiles, worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerReferenceProvider(modeId, new $8297e05bede0ca81$var$ReferenceAdapter(libFiles, worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(modeId, new $8297e05bede0ca81$var$OutlineAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(modeId, new $8297e05bede0ca81$var$FormatAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerOnTypeFormattingEditProvider(modeId, new $8297e05bede0ca81$var$FormatOnTypeAdapter(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerCodeActionProvider(modeId, new $8297e05bede0ca81$var$CodeActionAdaptor(worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerRenameProvider(modeId, new $8297e05bede0ca81$var$RenameAdapter(libFiles, worker));
    $8297e05bede0ca81$var$monaco_editor_core_exports.languages.registerInlayHintsProvider(modeId, new $8297e05bede0ca81$var$InlayHintsAdapter(worker));
    new $8297e05bede0ca81$var$DiagnosticsAdapter(libFiles, defaults, modeId, worker);
    return worker;
}

});

})();
//# sourceMappingURL=tsMode.1656e3e1.js.map
