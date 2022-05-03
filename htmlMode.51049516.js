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
var parcelRequire = $parcel$global["parcelRequire3aa6"];
parcelRequire.register("lIPPw", function(module, exports) {

$parcel$export(module.exports, "setupMode1", function () { return $fd05e95f6c6ce790$export$972c61cff7b1bac7; });
$parcel$export(module.exports, "setupMode", function () { return $fd05e95f6c6ce790$export$6df00d141df42469; });

var $8AjFT = parcelRequire("8AjFT");

var $jKka5 = parcelRequire("jKka5");
// node_modules/vscode-languageserver-types/lib/esm/main.js
"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $fd05e95f6c6ce790$var$__defProp = Object.defineProperty;
var $fd05e95f6c6ce790$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $fd05e95f6c6ce790$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $fd05e95f6c6ce790$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $fd05e95f6c6ce790$var$__markAsModule = function(target) {
    return $fd05e95f6c6ce790$var$__defProp(target, "__esModule", {
        value: true
    });
};
var $fd05e95f6c6ce790$var$__reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!$fd05e95f6c6ce790$var$__hasOwnProp.call(target, key) && key !== "default") $fd05e95f6c6ce790$var$__defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = $fd05e95f6c6ce790$var$__getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = $fd05e95f6c6ce790$var$__getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
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
var $fd05e95f6c6ce790$var$monaco_editor_core_exports = {};
$fd05e95f6c6ce790$var$__markAsModule($fd05e95f6c6ce790$var$monaco_editor_core_exports);
$fd05e95f6c6ce790$var$__reExport($fd05e95f6c6ce790$var$monaco_editor_core_exports, $jKka5);
// src/html/workerManager.ts
var $fd05e95f6c6ce790$var$STOP_WHEN_IDLE_FOR = 120000;
var $fd05e95f6c6ce790$var$WorkerManager = /*#__PURE__*/ function() {
    "use strict";
    function _class(defaults) {
        var _this = this;
        $8AjFT.classCallCheck(this, _class);
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._idleCheckInterval = window.setInterval(function() {
            return _this._checkIfIdle();
        }, 30000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(function() {
            return _this._stopWorker();
        });
    }
    $8AjFT.createClass(_class, [
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
                clearInterval(this._idleCheckInterval);
                this._configChangeListener.dispose();
                this._stopWorker();
            }
        },
        {
            key: "_checkIfIdle",
            value: function _checkIfIdle() {
                if (!this._worker) return;
                var timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
                if (timePassedSinceLastUsed > $fd05e95f6c6ce790$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
            }
        },
        {
            key: "_getClient",
            value: function _getClient() {
                this._lastUsedTime = Date.now();
                if (!this._client) {
                    this._worker = $fd05e95f6c6ce790$var$monaco_editor_core_exports.editor.createWebWorker({
                        moduleId: "vs/language/html/htmlWorker",
                        createData: {
                            languageSettings: this._defaults.options,
                            languageId: this._defaults.languageId
                        },
                        label: this._defaults.languageId
                    });
                    this._client = this._worker.getProxy();
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
var $fd05e95f6c6ce790$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
})($fd05e95f6c6ce790$var$integer || ($fd05e95f6c6ce790$var$integer = {}));
var $fd05e95f6c6ce790$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
})($fd05e95f6c6ce790$var$uinteger || ($fd05e95f6c6ce790$var$uinteger = {}));
var $fd05e95f6c6ce790$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $fd05e95f6c6ce790$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $fd05e95f6c6ce790$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.objectLiteral(candidate) && $fd05e95f6c6ce790$var$Is.uinteger(candidate.line) && $fd05e95f6c6ce790$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($fd05e95f6c6ce790$var$Position || ($fd05e95f6c6ce790$var$Position = {}));
var $fd05e95f6c6ce790$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($fd05e95f6c6ce790$var$Is.uinteger(one) && $fd05e95f6c6ce790$var$Is.uinteger(two) && $fd05e95f6c6ce790$var$Is.uinteger(three) && $fd05e95f6c6ce790$var$Is.uinteger(four)) return {
            start: $fd05e95f6c6ce790$var$Position.create(one, two),
            end: $fd05e95f6c6ce790$var$Position.create(three, four)
        };
        else if ($fd05e95f6c6ce790$var$Position.is(one) && $fd05e95f6c6ce790$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
    Range3.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.objectLiteral(candidate) && $fd05e95f6c6ce790$var$Position.is(candidate.start) && $fd05e95f6c6ce790$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($fd05e95f6c6ce790$var$Range || ($fd05e95f6c6ce790$var$Range = {}));
var $fd05e95f6c6ce790$var$Location;
(function(Location2) {
    function create(uri, range) {
        return {
            uri: uri,
            range: range
        };
    }
    Location2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Range.is(candidate.range) && ($fd05e95f6c6ce790$var$Is.string(candidate.uri) || $fd05e95f6c6ce790$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($fd05e95f6c6ce790$var$Location || ($fd05e95f6c6ce790$var$Location = {}));
var $fd05e95f6c6ce790$var$LocationLink;
(function(LocationLink2) {
    function create(targetUri, targetRange, targetSelectionRange, originSelectionRange) {
        return {
            targetUri: targetUri,
            targetRange: targetRange,
            targetSelectionRange: targetSelectionRange,
            originSelectionRange: originSelectionRange
        };
    }
    LocationLink2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Range.is(candidate.targetRange) && $fd05e95f6c6ce790$var$Is.string(candidate.targetUri) && ($fd05e95f6c6ce790$var$Range.is(candidate.targetSelectionRange) || $fd05e95f6c6ce790$var$Is.undefined(candidate.targetSelectionRange)) && ($fd05e95f6c6ce790$var$Range.is(candidate.originSelectionRange) || $fd05e95f6c6ce790$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($fd05e95f6c6ce790$var$LocationLink || ($fd05e95f6c6ce790$var$LocationLink = {}));
var $fd05e95f6c6ce790$var$Color;
(function(Color2) {
    function create(red, green, blue, alpha) {
        return {
            red: red,
            green: green,
            blue: blue,
            alpha: alpha
        };
    }
    Color2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.numberRange(candidate.red, 0, 1) && $fd05e95f6c6ce790$var$Is.numberRange(candidate.green, 0, 1) && $fd05e95f6c6ce790$var$Is.numberRange(candidate.blue, 0, 1) && $fd05e95f6c6ce790$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($fd05e95f6c6ce790$var$Color || ($fd05e95f6c6ce790$var$Color = {}));
var $fd05e95f6c6ce790$var$ColorInformation;
(function(ColorInformation2) {
    function create(range, color) {
        return {
            range: range,
            color: color
        };
    }
    ColorInformation2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Range.is(candidate.range) && $fd05e95f6c6ce790$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($fd05e95f6c6ce790$var$ColorInformation || ($fd05e95f6c6ce790$var$ColorInformation = {}));
var $fd05e95f6c6ce790$var$ColorPresentation;
(function(ColorPresentation2) {
    function create(label, textEdit, additionalTextEdits) {
        return {
            label: label,
            textEdit: textEdit,
            additionalTextEdits: additionalTextEdits
        };
    }
    ColorPresentation2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.string(candidate.label) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.textEdit) || $fd05e95f6c6ce790$var$TextEdit.is(candidate)) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.additionalTextEdits) || $fd05e95f6c6ce790$var$Is.typedArray(candidate.additionalTextEdits, $fd05e95f6c6ce790$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($fd05e95f6c6ce790$var$ColorPresentation || ($fd05e95f6c6ce790$var$ColorPresentation = {}));
var $fd05e95f6c6ce790$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2["Comment"] = "comment";
    FoldingRangeKind2["Imports"] = "imports";
    FoldingRangeKind2["Region"] = "region";
})($fd05e95f6c6ce790$var$FoldingRangeKind || ($fd05e95f6c6ce790$var$FoldingRangeKind = {}));
var $fd05e95f6c6ce790$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($fd05e95f6c6ce790$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($fd05e95f6c6ce790$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($fd05e95f6c6ce790$var$Is.defined(kind)) result.kind = kind;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.uinteger(candidate.startLine) && $fd05e95f6c6ce790$var$Is.uinteger(candidate.startLine) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.startCharacter) || $fd05e95f6c6ce790$var$Is.uinteger(candidate.startCharacter)) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.endCharacter) || $fd05e95f6c6ce790$var$Is.uinteger(candidate.endCharacter)) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.kind) || $fd05e95f6c6ce790$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($fd05e95f6c6ce790$var$FoldingRange || ($fd05e95f6c6ce790$var$FoldingRange = {}));
var $fd05e95f6c6ce790$var$DiagnosticRelatedInformation;
(function(DiagnosticRelatedInformation2) {
    function create(location, message) {
        return {
            location: location,
            message: message
        };
    }
    DiagnosticRelatedInformation2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Location.is(candidate.location) && $fd05e95f6c6ce790$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($fd05e95f6c6ce790$var$DiagnosticRelatedInformation || ($fd05e95f6c6ce790$var$DiagnosticRelatedInformation = {}));
var $fd05e95f6c6ce790$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($fd05e95f6c6ce790$var$DiagnosticSeverity || ($fd05e95f6c6ce790$var$DiagnosticSeverity = {}));
var $fd05e95f6c6ce790$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($fd05e95f6c6ce790$var$DiagnosticTag || ($fd05e95f6c6ce790$var$DiagnosticTag = {}));
var $fd05e95f6c6ce790$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && $fd05e95f6c6ce790$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($fd05e95f6c6ce790$var$CodeDescription || ($fd05e95f6c6ce790$var$CodeDescription = {}));
var $fd05e95f6c6ce790$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        var result = {
            range: range,
            message: message
        };
        if ($fd05e95f6c6ce790$var$Is.defined(severity)) result.severity = severity;
        if ($fd05e95f6c6ce790$var$Is.defined(code)) result.code = code;
        if ($fd05e95f6c6ce790$var$Is.defined(source)) result.source = source;
        if ($fd05e95f6c6ce790$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Range.is(candidate.range) && $fd05e95f6c6ce790$var$Is.string(candidate.message) && ($fd05e95f6c6ce790$var$Is.number(candidate.severity) || $fd05e95f6c6ce790$var$Is.undefined(candidate.severity)) && ($fd05e95f6c6ce790$var$Is.integer(candidate.code) || $fd05e95f6c6ce790$var$Is.string(candidate.code) || $fd05e95f6c6ce790$var$Is.undefined(candidate.code)) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.codeDescription) || $fd05e95f6c6ce790$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($fd05e95f6c6ce790$var$Is.string(candidate.source) || $fd05e95f6c6ce790$var$Is.undefined(candidate.source)) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.relatedInformation) || $fd05e95f6c6ce790$var$Is.typedArray(candidate.relatedInformation, $fd05e95f6c6ce790$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($fd05e95f6c6ce790$var$Diagnostic || ($fd05e95f6c6ce790$var$Diagnostic = {}));
var $fd05e95f6c6ce790$var$Command;
(function(Command2) {
    function create(title, command) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var result = {
            title: title,
            command: command
        };
        if ($fd05e95f6c6ce790$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.title) && $fd05e95f6c6ce790$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($fd05e95f6c6ce790$var$Command || ($fd05e95f6c6ce790$var$Command = {}));
var $fd05e95f6c6ce790$var$TextEdit;
(function(TextEdit2) {
    function replace(range, newText) {
        return {
            range: range,
            newText: newText
        };
    }
    TextEdit2.replace = replace;
    function insert(position, newText) {
        return {
            range: {
                start: position,
                end: position
            },
            newText: newText
        };
    }
    TextEdit2.insert = insert;
    function del(range) {
        return {
            range: range,
            newText: ""
        };
    }
    TextEdit2.del = del;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.objectLiteral(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.newText) && $fd05e95f6c6ce790$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($fd05e95f6c6ce790$var$TextEdit || ($fd05e95f6c6ce790$var$TextEdit = {}));
var $fd05e95f6c6ce790$var$ChangeAnnotation;
(function(ChangeAnnotation2) {
    function create(label, needsConfirmation, description) {
        var result = {
            label: label
        };
        if (needsConfirmation !== void 0) result.needsConfirmation = needsConfirmation;
        if (description !== void 0) result.description = description;
        return result;
    }
    ChangeAnnotation2.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && $fd05e95f6c6ce790$var$Is.objectLiteral(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.label) && ($fd05e95f6c6ce790$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($fd05e95f6c6ce790$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($fd05e95f6c6ce790$var$ChangeAnnotation || ($fd05e95f6c6ce790$var$ChangeAnnotation = {}));
var $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        var candidate = value;
        return typeof candidate === "string";
    }
    ChangeAnnotationIdentifier2.is = is;
})($fd05e95f6c6ce790$var$ChangeAnnotationIdentifier || ($fd05e95f6c6ce790$var$ChangeAnnotationIdentifier = {}));
var $fd05e95f6c6ce790$var$AnnotatedTextEdit;
(function(AnnotatedTextEdit2) {
    function replace(range, newText, annotation) {
        return {
            range: range,
            newText: newText,
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.replace = replace;
    function insert(position, newText, annotation) {
        return {
            range: {
                start: position,
                end: position
            },
            newText: newText,
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.insert = insert;
    function del(range, annotation) {
        return {
            range: range,
            newText: "",
            annotationId: annotation
        };
    }
    AnnotatedTextEdit2.del = del;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$TextEdit.is(candidate) && ($fd05e95f6c6ce790$var$ChangeAnnotation.is(candidate.annotationId) || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($fd05e95f6c6ce790$var$AnnotatedTextEdit || ($fd05e95f6c6ce790$var$AnnotatedTextEdit = {}));
var $fd05e95f6c6ce790$var$TextDocumentEdit;
(function(TextDocumentEdit2) {
    function create(textDocument, edits) {
        return {
            textDocument: textDocument,
            edits: edits
        };
    }
    TextDocumentEdit2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($fd05e95f6c6ce790$var$TextDocumentEdit || ($fd05e95f6c6ce790$var$TextDocumentEdit = {}));
var $fd05e95f6c6ce790$var$CreateFile;
(function(CreateFile2) {
    function create(uri, options, annotation) {
        var result = {
            kind: "create",
            uri: uri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    CreateFile2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "create" && $fd05e95f6c6ce790$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($fd05e95f6c6ce790$var$CreateFile || ($fd05e95f6c6ce790$var$CreateFile = {}));
var $fd05e95f6c6ce790$var$RenameFile;
(function(RenameFile2) {
    function create(oldUri, newUri, options, annotation) {
        var result = {
            kind: "rename",
            oldUri: oldUri,
            newUri: newUri
        };
        if (options !== void 0 && (options.overwrite !== void 0 || options.ignoreIfExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    RenameFile2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "rename" && $fd05e95f6c6ce790$var$Is.string(candidate.oldUri) && $fd05e95f6c6ce790$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($fd05e95f6c6ce790$var$RenameFile || ($fd05e95f6c6ce790$var$RenameFile = {}));
var $fd05e95f6c6ce790$var$DeleteFile;
(function(DeleteFile2) {
    function create(uri, options, annotation) {
        var result = {
            kind: "delete",
            uri: uri
        };
        if (options !== void 0 && (options.recursive !== void 0 || options.ignoreIfNotExists !== void 0)) result.options = options;
        if (annotation !== void 0) result.annotationId = annotation;
        return result;
    }
    DeleteFile2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && candidate.kind === "delete" && $fd05e95f6c6ce790$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($fd05e95f6c6ce790$var$DeleteFile || ($fd05e95f6c6ce790$var$DeleteFile = {}));
var $fd05e95f6c6ce790$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if ($fd05e95f6c6ce790$var$Is.string(change.kind)) return $fd05e95f6c6ce790$var$CreateFile.is(change) || $fd05e95f6c6ce790$var$RenameFile.is(change) || $fd05e95f6c6ce790$var$DeleteFile.is(change);
            else return $fd05e95f6c6ce790$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($fd05e95f6c6ce790$var$WorkspaceEdit || ($fd05e95f6c6ce790$var$WorkspaceEdit = {}));
var $fd05e95f6c6ce790$var$TextEditChangeImpl = function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $fd05e95f6c6ce790$var$TextEdit.insert(position, newText);
        else if ($fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $fd05e95f6c6ce790$var$AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $fd05e95f6c6ce790$var$AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $fd05e95f6c6ce790$var$TextEdit.replace(range, newText);
        else if ($fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $fd05e95f6c6ce790$var$AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $fd05e95f6c6ce790$var$AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $fd05e95f6c6ce790$var$TextEdit.del(range);
        else if ($fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $fd05e95f6c6ce790$var$AnnotatedTextEdit.del(range, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $fd05e95f6c6ce790$var$AnnotatedTextEdit.del(range, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.add = function(edit) {
        this.edits.push(edit);
    };
    TextEditChangeImpl2.prototype.all = function() {
        return this.edits;
    };
    TextEditChangeImpl2.prototype.clear = function() {
        this.edits.splice(0, this.edits.length);
    };
    TextEditChangeImpl2.prototype.assertChangeAnnotations = function(value) {
        if (value === void 0) throw new Error("Text edit change is not configured to manage change annotations.");
    };
    return TextEditChangeImpl2;
}();
var $fd05e95f6c6ce790$var$ChangeAnnotations = function() {
    function ChangeAnnotations2(annotations) {
        this._annotations = annotations === void 0 ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
    }
    ChangeAnnotations2.prototype.all = function() {
        return this._annotations;
    };
    Object.defineProperty(ChangeAnnotations2.prototype, "size", {
        get: function get() {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
        var id;
        if ($fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
        else {
            id = this.nextId();
            annotation = idOrAnnotation;
        }
        if (this._annotations[id] !== void 0) throw new Error("Id " + id + " is already in use.");
        if (annotation === void 0) throw new Error("No annotation provided for id " + id);
        this._annotations[id] = annotation;
        this._size++;
        return id;
    };
    ChangeAnnotations2.prototype.nextId = function() {
        this._counter++;
        return this._counter.toString();
    };
    return ChangeAnnotations2;
}();
var $fd05e95f6c6ce790$var$WorkspaceChange = function() {
    function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== void 0) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new $fd05e95f6c6ce790$var$ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                    if ($fd05e95f6c6ce790$var$TextDocumentEdit.is(change)) {
                        var textEditChange = new $fd05e95f6c6ce790$var$TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                var textEditChange = new $fd05e95f6c6ce790$var$TextEditChangeImpl(workspaceEdit.changes[key]);
                _this._textEditChanges[key] = textEditChange;
            });
        } else this._workspaceEdit = {};
    }
    Object.defineProperty(WorkspaceChange2.prototype, "edit", {
        get: function get() {
            this.initDocumentChanges();
            if (this._changeAnnotations !== void 0) {
                if (this._changeAnnotations.size === 0) this._workspaceEdit.changeAnnotations = void 0;
                else this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
            }
            return this._workspaceEdit;
        },
        enumerable: false,
        configurable: true
    });
    WorkspaceChange2.prototype.getTextEditChange = function(key) {
        if ($fd05e95f6c6ce790$var$OptionalVersionedTextDocumentIdentifier.is(key)) {
            this.initDocumentChanges();
            if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
            var textDocument = {
                uri: key.uri,
                version: key.version
            };
            var result = this._textEditChanges[textDocument.uri];
            if (!result) {
                var edits = [];
                var textDocumentEdit = {
                    textDocument: textDocument,
                    edits: edits
                };
                this._workspaceEdit.documentChanges.push(textDocumentEdit);
                result = new $fd05e95f6c6ce790$var$TextEditChangeImpl(edits, this._changeAnnotations);
                this._textEditChanges[textDocument.uri] = result;
            }
            return result;
        } else {
            this.initChanges();
            if (this._workspaceEdit.changes === void 0) throw new Error("Workspace edit is not configured for normal text edit changes.");
            var result = this._textEditChanges[key];
            if (!result) {
                var edits = [];
                this._workspaceEdit.changes[key] = edits;
                result = new $fd05e95f6c6ce790$var$TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
            this._changeAnnotations = new $fd05e95f6c6ce790$var$ChangeAnnotations();
            this._workspaceEdit.documentChanges = [];
            this._workspaceEdit.changeAnnotations = this._changeAnnotations.all();
        }
    };
    WorkspaceChange2.prototype.initChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) this._workspaceEdit.changes = Object.create(null);
    };
    WorkspaceChange2.prototype.createFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($fd05e95f6c6ce790$var$ChangeAnnotation.is(optionsOrAnnotation) || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $fd05e95f6c6ce790$var$CreateFile.create(uri, options);
        else {
            id = $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $fd05e95f6c6ce790$var$CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($fd05e95f6c6ce790$var$ChangeAnnotation.is(optionsOrAnnotation) || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $fd05e95f6c6ce790$var$RenameFile.create(oldUri, newUri, options);
        else {
            id = $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $fd05e95f6c6ce790$var$RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($fd05e95f6c6ce790$var$ChangeAnnotation.is(optionsOrAnnotation) || $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $fd05e95f6c6ce790$var$DeleteFile.create(uri, options);
        else {
            id = $fd05e95f6c6ce790$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $fd05e95f6c6ce790$var$DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    return WorkspaceChange2;
}();
var $fd05e95f6c6ce790$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($fd05e95f6c6ce790$var$TextDocumentIdentifier || ($fd05e95f6c6ce790$var$TextDocumentIdentifier = {}));
var $fd05e95f6c6ce790$var$VersionedTextDocumentIdentifier;
(function(VersionedTextDocumentIdentifier2) {
    function create(uri, version) {
        return {
            uri: uri,
            version: version
        };
    }
    VersionedTextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.uri) && $fd05e95f6c6ce790$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($fd05e95f6c6ce790$var$VersionedTextDocumentIdentifier || ($fd05e95f6c6ce790$var$VersionedTextDocumentIdentifier = {}));
var $fd05e95f6c6ce790$var$OptionalVersionedTextDocumentIdentifier;
(function(OptionalVersionedTextDocumentIdentifier2) {
    function create(uri, version) {
        return {
            uri: uri,
            version: version
        };
    }
    OptionalVersionedTextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.uri) && (candidate.version === null || $fd05e95f6c6ce790$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($fd05e95f6c6ce790$var$OptionalVersionedTextDocumentIdentifier || ($fd05e95f6c6ce790$var$OptionalVersionedTextDocumentIdentifier = {}));
var $fd05e95f6c6ce790$var$TextDocumentItem;
(function(TextDocumentItem2) {
    function create(uri, languageId, version, text) {
        return {
            uri: uri,
            languageId: languageId,
            version: version,
            text: text
        };
    }
    TextDocumentItem2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.uri) && $fd05e95f6c6ce790$var$Is.string(candidate.languageId) && $fd05e95f6c6ce790$var$Is.integer(candidate.version) && $fd05e95f6c6ce790$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($fd05e95f6c6ce790$var$TextDocumentItem || ($fd05e95f6c6ce790$var$TextDocumentItem = {}));
var $fd05e95f6c6ce790$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
})($fd05e95f6c6ce790$var$MarkupKind || ($fd05e95f6c6ce790$var$MarkupKind = {}));
(function(MarkupKind2) {
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($fd05e95f6c6ce790$var$MarkupKind || ($fd05e95f6c6ce790$var$MarkupKind = {}));
var $fd05e95f6c6ce790$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.objectLiteral(value) && $fd05e95f6c6ce790$var$MarkupKind.is(candidate.kind) && $fd05e95f6c6ce790$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($fd05e95f6c6ce790$var$MarkupContent || ($fd05e95f6c6ce790$var$MarkupContent = {}));
var $fd05e95f6c6ce790$var$CompletionItemKind;
(function(CompletionItemKind2) {
    CompletionItemKind2.Text = 1;
    CompletionItemKind2.Method = 2;
    CompletionItemKind2.Function = 3;
    CompletionItemKind2.Constructor = 4;
    CompletionItemKind2.Field = 5;
    CompletionItemKind2.Variable = 6;
    CompletionItemKind2.Class = 7;
    CompletionItemKind2.Interface = 8;
    CompletionItemKind2.Module = 9;
    CompletionItemKind2.Property = 10;
    CompletionItemKind2.Unit = 11;
    CompletionItemKind2.Value = 12;
    CompletionItemKind2.Enum = 13;
    CompletionItemKind2.Keyword = 14;
    CompletionItemKind2.Snippet = 15;
    CompletionItemKind2.Color = 16;
    CompletionItemKind2.File = 17;
    CompletionItemKind2.Reference = 18;
    CompletionItemKind2.Folder = 19;
    CompletionItemKind2.EnumMember = 20;
    CompletionItemKind2.Constant = 21;
    CompletionItemKind2.Struct = 22;
    CompletionItemKind2.Event = 23;
    CompletionItemKind2.Operator = 24;
    CompletionItemKind2.TypeParameter = 25;
})($fd05e95f6c6ce790$var$CompletionItemKind || ($fd05e95f6c6ce790$var$CompletionItemKind = {}));
var $fd05e95f6c6ce790$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($fd05e95f6c6ce790$var$InsertTextFormat || ($fd05e95f6c6ce790$var$InsertTextFormat = {}));
var $fd05e95f6c6ce790$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($fd05e95f6c6ce790$var$CompletionItemTag || ($fd05e95f6c6ce790$var$CompletionItemTag = {}));
var $fd05e95f6c6ce790$var$InsertReplaceEdit;
(function(InsertReplaceEdit2) {
    function create(newText, insert, replace) {
        return {
            newText: newText,
            insert: insert,
            replace: replace
        };
    }
    InsertReplaceEdit2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $fd05e95f6c6ce790$var$Is.string(candidate.newText) && $fd05e95f6c6ce790$var$Range.is(candidate.insert) && $fd05e95f6c6ce790$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($fd05e95f6c6ce790$var$InsertReplaceEdit || ($fd05e95f6c6ce790$var$InsertReplaceEdit = {}));
var $fd05e95f6c6ce790$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($fd05e95f6c6ce790$var$InsertTextMode || ($fd05e95f6c6ce790$var$InsertTextMode = {}));
var $fd05e95f6c6ce790$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($fd05e95f6c6ce790$var$CompletionItem || ($fd05e95f6c6ce790$var$CompletionItem = {}));
var $fd05e95f6c6ce790$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($fd05e95f6c6ce790$var$CompletionList || ($fd05e95f6c6ce790$var$CompletionList = {}));
var $fd05e95f6c6ce790$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.string(candidate) || $fd05e95f6c6ce790$var$Is.objectLiteral(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.language) && $fd05e95f6c6ce790$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($fd05e95f6c6ce790$var$MarkedString || ($fd05e95f6c6ce790$var$MarkedString = {}));
var $fd05e95f6c6ce790$var$Hover;
(function(Hover2) {
    function is(value) {
        var candidate = value;
        return !!candidate && $fd05e95f6c6ce790$var$Is.objectLiteral(candidate) && ($fd05e95f6c6ce790$var$MarkupContent.is(candidate.contents) || $fd05e95f6c6ce790$var$MarkedString.is(candidate.contents) || $fd05e95f6c6ce790$var$Is.typedArray(candidate.contents, $fd05e95f6c6ce790$var$MarkedString.is)) && (value.range === void 0 || $fd05e95f6c6ce790$var$Range.is(value.range));
    }
    Hover2.is = is;
})($fd05e95f6c6ce790$var$Hover || ($fd05e95f6c6ce790$var$Hover = {}));
var $fd05e95f6c6ce790$var$ParameterInformation;
(function(ParameterInformation2) {
    function create(label, documentation) {
        return documentation ? {
            label: label,
            documentation: documentation
        } : {
            label: label
        };
    }
    ParameterInformation2.create = create;
})($fd05e95f6c6ce790$var$ParameterInformation || ($fd05e95f6c6ce790$var$ParameterInformation = {}));
var $fd05e95f6c6ce790$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation) {
        var parameters = [];
        for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
        var result = {
            label: label
        };
        if ($fd05e95f6c6ce790$var$Is.defined(documentation)) result.documentation = documentation;
        if ($fd05e95f6c6ce790$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($fd05e95f6c6ce790$var$SignatureInformation || ($fd05e95f6c6ce790$var$SignatureInformation = {}));
var $fd05e95f6c6ce790$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($fd05e95f6c6ce790$var$DocumentHighlightKind || ($fd05e95f6c6ce790$var$DocumentHighlightKind = {}));
var $fd05e95f6c6ce790$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        var result = {
            range: range
        };
        if ($fd05e95f6c6ce790$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($fd05e95f6c6ce790$var$DocumentHighlight || ($fd05e95f6c6ce790$var$DocumentHighlight = {}));
var $fd05e95f6c6ce790$var$SymbolKind;
(function(SymbolKind2) {
    SymbolKind2.File = 1;
    SymbolKind2.Module = 2;
    SymbolKind2.Namespace = 3;
    SymbolKind2.Package = 4;
    SymbolKind2.Class = 5;
    SymbolKind2.Method = 6;
    SymbolKind2.Property = 7;
    SymbolKind2.Field = 8;
    SymbolKind2.Constructor = 9;
    SymbolKind2.Enum = 10;
    SymbolKind2.Interface = 11;
    SymbolKind2.Function = 12;
    SymbolKind2.Variable = 13;
    SymbolKind2.Constant = 14;
    SymbolKind2.String = 15;
    SymbolKind2.Number = 16;
    SymbolKind2.Boolean = 17;
    SymbolKind2.Array = 18;
    SymbolKind2.Object = 19;
    SymbolKind2.Key = 20;
    SymbolKind2.Null = 21;
    SymbolKind2.EnumMember = 22;
    SymbolKind2.Struct = 23;
    SymbolKind2.Event = 24;
    SymbolKind2.Operator = 25;
    SymbolKind2.TypeParameter = 26;
})($fd05e95f6c6ce790$var$SymbolKind || ($fd05e95f6c6ce790$var$SymbolKind = {}));
var $fd05e95f6c6ce790$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($fd05e95f6c6ce790$var$SymbolTag || ($fd05e95f6c6ce790$var$SymbolTag = {}));
var $fd05e95f6c6ce790$var$SymbolInformation;
(function(SymbolInformation2) {
    function create(name, kind, range, uri, containerName) {
        var result = {
            name: name,
            kind: kind,
            location: {
                uri: uri,
                range: range
            }
        };
        if (containerName) result.containerName = containerName;
        return result;
    }
    SymbolInformation2.create = create;
})($fd05e95f6c6ce790$var$SymbolInformation || ($fd05e95f6c6ce790$var$SymbolInformation = {}));
var $fd05e95f6c6ce790$var$DocumentSymbol;
(function(DocumentSymbol2) {
    function create(name, detail, kind, range, selectionRange, children) {
        var result = {
            name: name,
            detail: detail,
            kind: kind,
            range: range,
            selectionRange: selectionRange
        };
        if (children !== void 0) result.children = children;
        return result;
    }
    DocumentSymbol2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $fd05e95f6c6ce790$var$Is.string(candidate.name) && $fd05e95f6c6ce790$var$Is.number(candidate.kind) && $fd05e95f6c6ce790$var$Range.is(candidate.range) && $fd05e95f6c6ce790$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $fd05e95f6c6ce790$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($fd05e95f6c6ce790$var$DocumentSymbol || ($fd05e95f6c6ce790$var$DocumentSymbol = {}));
var $fd05e95f6c6ce790$var$CodeActionKind;
(function(CodeActionKind2) {
    CodeActionKind2.Empty = "";
    CodeActionKind2.QuickFix = "quickfix";
    CodeActionKind2.Refactor = "refactor";
    CodeActionKind2.RefactorExtract = "refactor.extract";
    CodeActionKind2.RefactorInline = "refactor.inline";
    CodeActionKind2.RefactorRewrite = "refactor.rewrite";
    CodeActionKind2.Source = "source";
    CodeActionKind2.SourceOrganizeImports = "source.organizeImports";
    CodeActionKind2.SourceFixAll = "source.fixAll";
})($fd05e95f6c6ce790$var$CodeActionKind || ($fd05e95f6c6ce790$var$CodeActionKind = {}));
var $fd05e95f6c6ce790$var$CodeActionContext;
(function(CodeActionContext2) {
    function create(diagnostics, only) {
        var result = {
            diagnostics: diagnostics
        };
        if (only !== void 0 && only !== null) result.only = only;
        return result;
    }
    CodeActionContext2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.typedArray(candidate.diagnostics, $fd05e95f6c6ce790$var$Diagnostic.is) && (candidate.only === void 0 || $fd05e95f6c6ce790$var$Is.typedArray(candidate.only, $fd05e95f6c6ce790$var$Is.string));
    }
    CodeActionContext2.is = is;
})($fd05e95f6c6ce790$var$CodeActionContext || ($fd05e95f6c6ce790$var$CodeActionContext = {}));
var $fd05e95f6c6ce790$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = {
            title: title
        };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($fd05e95f6c6ce790$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $fd05e95f6c6ce790$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $fd05e95f6c6ce790$var$Is.typedArray(candidate.diagnostics, $fd05e95f6c6ce790$var$Diagnostic.is)) && (candidate.kind === void 0 || $fd05e95f6c6ce790$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $fd05e95f6c6ce790$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $fd05e95f6c6ce790$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $fd05e95f6c6ce790$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($fd05e95f6c6ce790$var$CodeAction || ($fd05e95f6c6ce790$var$CodeAction = {}));
var $fd05e95f6c6ce790$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        var result = {
            range: range
        };
        if ($fd05e95f6c6ce790$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Range.is(candidate.range) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.command) || $fd05e95f6c6ce790$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($fd05e95f6c6ce790$var$CodeLens || ($fd05e95f6c6ce790$var$CodeLens = {}));
var $fd05e95f6c6ce790$var$FormattingOptions;
(function(FormattingOptions2) {
    function create(tabSize, insertSpaces) {
        return {
            tabSize: tabSize,
            insertSpaces: insertSpaces
        };
    }
    FormattingOptions2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.uinteger(candidate.tabSize) && $fd05e95f6c6ce790$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($fd05e95f6c6ce790$var$FormattingOptions || ($fd05e95f6c6ce790$var$FormattingOptions = {}));
var $fd05e95f6c6ce790$var$DocumentLink;
(function(DocumentLink2) {
    function create(range, target, data) {
        return {
            range: range,
            target: target,
            data: data
        };
    }
    DocumentLink2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Range.is(candidate.range) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.target) || $fd05e95f6c6ce790$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($fd05e95f6c6ce790$var$DocumentLink || ($fd05e95f6c6ce790$var$DocumentLink = {}));
var $fd05e95f6c6ce790$var$SelectionRange;
(function(SelectionRange2) {
    function create(range, parent) {
        return {
            range: range,
            parent: parent
        };
    }
    SelectionRange2.create = create;
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && $fd05e95f6c6ce790$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($fd05e95f6c6ce790$var$SelectionRange || ($fd05e95f6c6ce790$var$SelectionRange = {}));
var $fd05e95f6c6ce790$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $fd05e95f6c6ce790$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        var candidate = value;
        return $fd05e95f6c6ce790$var$Is.defined(candidate) && $fd05e95f6c6ce790$var$Is.string(candidate.uri) && ($fd05e95f6c6ce790$var$Is.undefined(candidate.languageId) || $fd05e95f6c6ce790$var$Is.string(candidate.languageId)) && $fd05e95f6c6ce790$var$Is.uinteger(candidate.lineCount) && $fd05e95f6c6ce790$var$Is.func(candidate.getText) && $fd05e95f6c6ce790$var$Is.func(candidate.positionAt) && $fd05e95f6c6ce790$var$Is.func(candidate.offsetAt) ? true : false;
    }
    TextDocument2.is = is;
    function applyEdits(document, edits) {
        var text = document.getText();
        var sortedEdits = mergeSort(edits, function(a, b) {
            var diff = a.range.start.line - b.range.start.line;
            if (diff === 0) return a.range.start.character - b.range.start.character;
            return diff;
        });
        var lastModifiedOffset = text.length;
        for(var i = sortedEdits.length - 1; i >= 0; i--){
            var e = sortedEdits[i];
            var startOffset = document.offsetAt(e.range.start);
            var endOffset = document.offsetAt(e.range.end);
            if (endOffset <= lastModifiedOffset) text = text.substring(0, startOffset) + e.newText + text.substring(endOffset, text.length);
            else throw new Error("Overlapping edit");
            lastModifiedOffset = startOffset;
        }
        return text;
    }
    TextDocument2.applyEdits = applyEdits;
    function mergeSort(data, compare) {
        if (data.length <= 1) return data;
        var p = data.length / 2 | 0;
        var left = data.slice(0, p);
        var right = data.slice(p);
        mergeSort(left, compare);
        mergeSort(right, compare);
        var leftIdx = 0;
        var rightIdx = 0;
        var i = 0;
        while(leftIdx < left.length && rightIdx < right.length){
            var ret = compare(left[leftIdx], right[rightIdx]);
            if (ret <= 0) data[i++] = left[leftIdx++];
            else data[i++] = right[rightIdx++];
        }
        while(leftIdx < left.length)data[i++] = left[leftIdx++];
        while(rightIdx < right.length)data[i++] = right[rightIdx++];
        return data;
    }
})($fd05e95f6c6ce790$var$TextDocument || ($fd05e95f6c6ce790$var$TextDocument = {}));
var $fd05e95f6c6ce790$var$FullTextDocument = function() {
    function FullTextDocument2(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
    }
    Object.defineProperty(FullTextDocument2.prototype, "uri", {
        get: function get() {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "languageId", {
        get: function get() {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "version", {
        get: function get() {
            return this._version;
        },
        enumerable: false,
        configurable: true
    });
    FullTextDocument2.prototype.getText = function(range) {
        if (range) {
            var start = this.offsetAt(range.start);
            var end = this.offsetAt(range.end);
            return this._content.substring(start, end);
        }
        return this._content;
    };
    FullTextDocument2.prototype.update = function(event, version) {
        this._content = event.text;
        this._version = version;
        this._lineOffsets = void 0;
    };
    FullTextDocument2.prototype.getLineOffsets = function() {
        if (this._lineOffsets === void 0) {
            var lineOffsets = [];
            var text = this._content;
            var isLineStart = true;
            for(var i = 0; i < text.length; i++){
                if (isLineStart) {
                    lineOffsets.push(i);
                    isLineStart = false;
                }
                var ch = text.charAt(i);
                isLineStart = ch === "\r" || ch === "\n";
                if (ch === "\r" && i + 1 < text.length && text.charAt(i + 1) === "\n") i++;
            }
            if (isLineStart && text.length > 0) lineOffsets.push(text.length);
            this._lineOffsets = lineOffsets;
        }
        return this._lineOffsets;
    };
    FullTextDocument2.prototype.positionAt = function(offset) {
        offset = Math.max(Math.min(offset, this._content.length), 0);
        var lineOffsets = this.getLineOffsets();
        var low = 0, high = lineOffsets.length;
        if (high === 0) return $fd05e95f6c6ce790$var$Position.create(0, offset);
        while(low < high){
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        var line = low - 1;
        return $fd05e95f6c6ce790$var$Position.create(line, offset - lineOffsets[line]);
    };
    FullTextDocument2.prototype.offsetAt = function(position) {
        var lineOffsets = this.getLineOffsets();
        if (position.line >= lineOffsets.length) return this._content.length;
        else if (position.line < 0) return 0;
        var lineOffset = lineOffsets[position.line];
        var nextLineOffset = position.line + 1 < lineOffsets.length ? lineOffsets[position.line + 1] : this._content.length;
        return Math.max(Math.min(lineOffset + position.character, nextLineOffset), lineOffset);
    };
    Object.defineProperty(FullTextDocument2.prototype, "lineCount", {
        get: function get() {
            return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
    });
    return FullTextDocument2;
}();
var $fd05e95f6c6ce790$var$Is;
(function(Is2) {
    var toString = Object.prototype.toString;
    function defined(value) {
        return typeof value !== "undefined";
    }
    Is2.defined = defined;
    function undefined2(value) {
        return typeof value === "undefined";
    }
    Is2.undefined = undefined2;
    function boolean(value) {
        return value === true || value === false;
    }
    Is2.boolean = boolean;
    function string(value) {
        return toString.call(value) === "[object String]";
    }
    Is2.string = string;
    function number(value) {
        return toString.call(value) === "[object Number]";
    }
    Is2.number = number;
    function numberRange(value, min, max) {
        return toString.call(value) === "[object Number]" && min <= value && value <= max;
    }
    Is2.numberRange = numberRange;
    function integer2(value) {
        return toString.call(value) === "[object Number]" && -2147483648 <= value && value <= 2147483647;
    }
    Is2.integer = integer2;
    function uinteger2(value) {
        return toString.call(value) === "[object Number]" && 0 <= value && value <= 2147483647;
    }
    Is2.uinteger = uinteger2;
    function func(value) {
        return toString.call(value) === "[object Function]";
    }
    Is2.func = func;
    function objectLiteral(value) {
        return value !== null && typeof value === "object";
    }
    Is2.objectLiteral = objectLiteral;
    function typedArray(value, check) {
        return Array.isArray(value) && value.every(check);
    }
    Is2.typedArray = typedArray;
})($fd05e95f6c6ce790$var$Is || ($fd05e95f6c6ce790$var$Is = {}));
// src/common/lspLanguageFeatures.ts
var $fd05e95f6c6ce790$var$CompletionAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker, _triggerCharacters) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
        this._triggerCharacters = _triggerCharacters;
    }
    $8AjFT.createClass(_class, [
        {
            key: "triggerCharacters",
            get: function get() {
                return this._triggerCharacters;
            }
        },
        {
            key: "provideCompletionItems",
            value: function provideCompletionItems(model, position, context, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.doComplete(resource.toString(), $fd05e95f6c6ce790$var$fromPosition(position));
                }).then(function(info) {
                    if (!info) return;
                    var wordInfo = model.getWordUntilPosition(position);
                    var wordRange = new $fd05e95f6c6ce790$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                    var items = info.items.map(function(entry) {
                        var item = {
                            label: entry.label,
                            insertText: entry.insertText || entry.label,
                            sortText: entry.sortText,
                            filterText: entry.filterText,
                            documentation: entry.documentation,
                            detail: entry.detail,
                            command: $fd05e95f6c6ce790$var$toCommand(entry.command),
                            range: wordRange,
                            kind: $fd05e95f6c6ce790$var$toCompletionItemKind(entry.kind)
                        };
                        if (entry.textEdit) {
                            if ($fd05e95f6c6ce790$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                                insert: $fd05e95f6c6ce790$var$toRange(entry.textEdit.insert),
                                replace: $fd05e95f6c6ce790$var$toRange(entry.textEdit.replace)
                            };
                            else item.range = $fd05e95f6c6ce790$var$toRange(entry.textEdit.range);
                            item.insertText = entry.textEdit.newText;
                        }
                        if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($fd05e95f6c6ce790$var$toTextEdit);
                        if (entry.insertTextFormat === $fd05e95f6c6ce790$var$InsertTextFormat.Snippet) item.insertTextRules = $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                        return item;
                    });
                    return {
                        isIncomplete: info.isIncomplete,
                        suggestions: items
                    };
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$fromPosition(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $fd05e95f6c6ce790$var$fromRange(range) {
    if (!range) return void 0;
    return {
        start: {
            line: range.startLineNumber - 1,
            character: range.startColumn - 1
        },
        end: {
            line: range.endLineNumber - 1,
            character: range.endColumn - 1
        }
    };
}
function $fd05e95f6c6ce790$var$toRange(range) {
    if (!range) return void 0;
    return new $fd05e95f6c6ce790$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $fd05e95f6c6ce790$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $fd05e95f6c6ce790$var$toCompletionItemKind(kind) {
    var mItemKind = $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $fd05e95f6c6ce790$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $fd05e95f6c6ce790$var$CompletionItemKind.File:
            return mItemKind.File;
        case $fd05e95f6c6ce790$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $fd05e95f6c6ce790$var$toTextEdit(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $fd05e95f6c6ce790$var$toRange(textEdit.range),
        text: textEdit.newText
    };
}
function $fd05e95f6c6ce790$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $fd05e95f6c6ce790$var$HoverAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideHover",
            value: function provideHover(model, position, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.doHover(resource.toString(), $fd05e95f6c6ce790$var$fromPosition(position));
                }).then(function(info) {
                    if (!info) return;
                    return {
                        range: $fd05e95f6c6ce790$var$toRange(info.range),
                        contents: $fd05e95f6c6ce790$var$toMarkedStringArray(info.contents)
                    };
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $fd05e95f6c6ce790$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($fd05e95f6c6ce790$var$isMarkupContent(entry)) {
        if (entry.kind === "plaintext") return {
            value: entry.value.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&")
        };
        return {
            value: entry.value
        };
    }
    return {
        value: "```" + entry.language + "\n" + entry.value + "\n```\n"
    };
}
function $fd05e95f6c6ce790$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($fd05e95f6c6ce790$var$toMarkdownString);
    return [
        $fd05e95f6c6ce790$var$toMarkdownString(contents)
    ];
}
var $fd05e95f6c6ce790$var$DocumentHighlightAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideDocumentHighlights",
            value: function provideDocumentHighlights(model, position, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.findDocumentHighlights(resource.toString(), $fd05e95f6c6ce790$var$fromPosition(position));
                }).then(function(entries) {
                    if (!entries) return;
                    return entries.map(function(entry) {
                        return {
                            range: $fd05e95f6c6ce790$var$toRange(entry.range),
                            kind: $fd05e95f6c6ce790$var$toDocumentHighlightKind(entry.kind)
                        };
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $fd05e95f6c6ce790$var$DocumentHighlightKind.Read:
            return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $fd05e95f6c6ce790$var$DocumentHighlightKind.Write:
            return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $fd05e95f6c6ce790$var$DocumentHighlightKind.Text:
            return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $fd05e95f6c6ce790$var$RenameAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideRenameEdits",
            value: function provideRenameEdits(model, position, newName, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.doRename(resource.toString(), $fd05e95f6c6ce790$var$fromPosition(position), newName);
                }).then(function(edit) {
                    return $fd05e95f6c6ce790$var$toWorkspaceEdit(edit);
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    var resourceEdits = [];
    for(var uri in edit.changes){
        var _uri = $fd05e95f6c6ce790$var$monaco_editor_core_exports.Uri.parse(uri);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = edit.changes[uri][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var e = _step.value;
                resourceEdits.push({
                    resource: _uri,
                    edit: {
                        range: $fd05e95f6c6ce790$var$toRange(e.range),
                        text: e.newText
                    }
                });
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
    return {
        edits: resourceEdits
    };
}
var $fd05e95f6c6ce790$var$DocumentSymbolAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideDocumentSymbols",
            value: function provideDocumentSymbols(model, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.findDocumentSymbols(resource.toString());
                }).then(function(items) {
                    if (!items) return;
                    return items.map(function(item) {
                        return {
                            name: item.name,
                            detail: "",
                            containerName: item.containerName,
                            kind: $fd05e95f6c6ce790$var$toSymbolKind(item.kind),
                            range: $fd05e95f6c6ce790$var$toRange(item.location.range),
                            selectionRange: $fd05e95f6c6ce790$var$toRange(item.location.range),
                            tags: []
                        };
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$toSymbolKind(kind) {
    var mKind = $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $fd05e95f6c6ce790$var$SymbolKind.File:
            return mKind.Array;
        case $fd05e95f6c6ce790$var$SymbolKind.Module:
            return mKind.Module;
        case $fd05e95f6c6ce790$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $fd05e95f6c6ce790$var$SymbolKind.Package:
            return mKind.Package;
        case $fd05e95f6c6ce790$var$SymbolKind.Class:
            return mKind.Class;
        case $fd05e95f6c6ce790$var$SymbolKind.Method:
            return mKind.Method;
        case $fd05e95f6c6ce790$var$SymbolKind.Property:
            return mKind.Property;
        case $fd05e95f6c6ce790$var$SymbolKind.Field:
            return mKind.Field;
        case $fd05e95f6c6ce790$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $fd05e95f6c6ce790$var$SymbolKind.Enum:
            return mKind.Enum;
        case $fd05e95f6c6ce790$var$SymbolKind.Interface:
            return mKind.Interface;
        case $fd05e95f6c6ce790$var$SymbolKind.Function:
            return mKind.Function;
        case $fd05e95f6c6ce790$var$SymbolKind.Variable:
            return mKind.Variable;
        case $fd05e95f6c6ce790$var$SymbolKind.Constant:
            return mKind.Constant;
        case $fd05e95f6c6ce790$var$SymbolKind.String:
            return mKind.String;
        case $fd05e95f6c6ce790$var$SymbolKind.Number:
            return mKind.Number;
        case $fd05e95f6c6ce790$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $fd05e95f6c6ce790$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $fd05e95f6c6ce790$var$DocumentLinkAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideLinks",
            value: function provideLinks(model, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.findDocumentLinks(resource.toString());
                }).then(function(items) {
                    if (!items) return;
                    return {
                        links: items.map(function(item) {
                            return {
                                range: $fd05e95f6c6ce790$var$toRange(item.range),
                                url: item.target
                            };
                        })
                    };
                });
            }
        }
    ]);
    return _class;
}();
var $fd05e95f6c6ce790$var$DocumentFormattingEditProvider = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideDocumentFormattingEdits",
            value: function provideDocumentFormattingEdits(model, options, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.format(resource.toString(), null, $fd05e95f6c6ce790$var$fromFormattingOptions(options)).then(function(edits) {
                        if (!edits || edits.length === 0) return;
                        return edits.map($fd05e95f6c6ce790$var$toTextEdit);
                    });
                });
            }
        }
    ]);
    return _class;
}();
var $fd05e95f6c6ce790$var$DocumentRangeFormattingEditProvider = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideDocumentRangeFormattingEdits",
            value: function provideDocumentRangeFormattingEdits(model, range, options, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.format(resource.toString(), $fd05e95f6c6ce790$var$fromRange(range), $fd05e95f6c6ce790$var$fromFormattingOptions(options)).then(function(edits) {
                        if (!edits || edits.length === 0) return;
                        return edits.map($fd05e95f6c6ce790$var$toTextEdit);
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $fd05e95f6c6ce790$var$FoldingRangeAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideFoldingRanges",
            value: function provideFoldingRanges(model, context, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.getFoldingRanges(resource.toString(), context);
                }).then(function(ranges) {
                    if (!ranges) return;
                    return ranges.map(function(range) {
                        var result = {
                            start: range.startLine + 1,
                            end: range.endLine + 1
                        };
                        if (typeof range.kind !== "undefined") result.kind = $fd05e95f6c6ce790$var$toFoldingRangeKind(range.kind);
                        return result;
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $fd05e95f6c6ce790$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $fd05e95f6c6ce790$var$FoldingRangeKind.Comment:
            return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $fd05e95f6c6ce790$var$FoldingRangeKind.Imports:
            return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $fd05e95f6c6ce790$var$FoldingRangeKind.Region:
            return $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $fd05e95f6c6ce790$var$SelectionRangeAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8AjFT.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8AjFT.createClass(_class, [
        {
            key: "provideSelectionRanges",
            value: function provideSelectionRanges(model, positions, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.getSelectionRanges(resource.toString(), positions.map($fd05e95f6c6ce790$var$fromPosition));
                }).then(function(selectionRanges) {
                    if (!selectionRanges) return;
                    return selectionRanges.map(function(selectionRange) {
                        var result = [];
                        while(selectionRange){
                            result.push({
                                range: $fd05e95f6c6ce790$var$toRange(selectionRange.range)
                            });
                            selectionRange = selectionRange.parent;
                        }
                        return result;
                    });
                });
            }
        }
    ]);
    return _class;
}();
// src/html/htmlMode.ts
var $fd05e95f6c6ce790$var$HTMLCompletionAdapter = /*#__PURE__*/ function(CompletionAdapter) {
    "use strict";
    $8AjFT.inherits(_class, CompletionAdapter);
    var _super = $8AjFT.createSuper(_class);
    function _class(worker) {
        $8AjFT.classCallCheck(this, _class);
        return _super.call(this, worker, [
            ".",
            ":",
            "<",
            '"',
            "=",
            "/"
        ]);
    }
    return _class;
}($fd05e95f6c6ce790$var$CompletionAdapter);
function $fd05e95f6c6ce790$export$972c61cff7b1bac7(defaults) {
    var client = new $fd05e95f6c6ce790$var$WorkerManager(defaults);
    var worker = function() {
        for(var _len = arguments.length, uris = new Array(_len), _key = 0; _key < _len; _key++){
            uris[_key] = arguments[_key];
        }
        var _client;
        return (_client = client).getLanguageServiceWorker.apply(_client, $8AjFT.toConsumableArray(uris));
    };
    var languageId = defaults.languageId;
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $fd05e95f6c6ce790$var$HTMLCompletionAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $fd05e95f6c6ce790$var$HoverAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $fd05e95f6c6ce790$var$DocumentHighlightAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $fd05e95f6c6ce790$var$DocumentLinkAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $fd05e95f6c6ce790$var$FoldingRangeAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $fd05e95f6c6ce790$var$DocumentSymbolAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $fd05e95f6c6ce790$var$SelectionRangeAdapter(worker));
    $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $fd05e95f6c6ce790$var$RenameAdapter(worker));
    if (languageId === "html") {
        $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $fd05e95f6c6ce790$var$DocumentFormattingEditProvider(worker));
        $fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $fd05e95f6c6ce790$var$DocumentRangeFormattingEditProvider(worker));
    }
}
function $fd05e95f6c6ce790$export$6df00d141df42469(defaults) {
    var disposables = [];
    var providers = [];
    var client = new $fd05e95f6c6ce790$var$WorkerManager(defaults);
    disposables.push(client);
    var worker = function() {
        for(var _len = arguments.length, uris = new Array(_len), _key = 0; _key < _len; _key++){
            uris[_key] = arguments[_key];
        }
        var _client;
        return (_client = client).getLanguageServiceWorker.apply(_client, $8AjFT.toConsumableArray(uris));
    };
    function registerProviders() {
        var languageId = defaults.languageId, modeConfiguration = defaults.modeConfiguration;
        $fd05e95f6c6ce790$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $fd05e95f6c6ce790$var$HTMLCompletionAdapter(worker)));
        if (modeConfiguration.hovers) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $fd05e95f6c6ce790$var$HoverAdapter(worker)));
        if (modeConfiguration.documentHighlights) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $fd05e95f6c6ce790$var$DocumentHighlightAdapter(worker)));
        if (modeConfiguration.links) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $fd05e95f6c6ce790$var$DocumentLinkAdapter(worker)));
        if (modeConfiguration.documentSymbols) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $fd05e95f6c6ce790$var$DocumentSymbolAdapter(worker)));
        if (modeConfiguration.rename) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $fd05e95f6c6ce790$var$RenameAdapter(worker)));
        if (modeConfiguration.foldingRanges) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $fd05e95f6c6ce790$var$FoldingRangeAdapter(worker)));
        if (modeConfiguration.selectionRanges) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $fd05e95f6c6ce790$var$SelectionRangeAdapter(worker)));
        if (modeConfiguration.documentFormattingEdits) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $fd05e95f6c6ce790$var$DocumentFormattingEditProvider(worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push($fd05e95f6c6ce790$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $fd05e95f6c6ce790$var$DocumentRangeFormattingEditProvider(worker)));
    }
    registerProviders();
    disposables.push($fd05e95f6c6ce790$var$asDisposable(providers));
    return $fd05e95f6c6ce790$var$asDisposable(disposables);
}
function $fd05e95f6c6ce790$var$asDisposable(disposables) {
    return {
        dispose: function() {
            return $fd05e95f6c6ce790$var$disposeAll(disposables);
        }
    };
}
function $fd05e95f6c6ce790$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});

})();
//# sourceMappingURL=htmlMode.51049516.js.map
