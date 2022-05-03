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
parcelRequire.register("kxrp1", function(module, exports) {

$parcel$export(module.exports, "setupMode1", function () { return $ef3c25474b28ec74$export$972c61cff7b1bac7; });
$parcel$export(module.exports, "setupMode", function () { return $ef3c25474b28ec74$export$6df00d141df42469; });

var $8TSCy = parcelRequire("8TSCy");

var $2nnEZ = parcelRequire("2nnEZ");
// node_modules/vscode-languageserver-types/lib/esm/main.js
"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $ef3c25474b28ec74$var$__defProp = Object.defineProperty;
var $ef3c25474b28ec74$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $ef3c25474b28ec74$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $ef3c25474b28ec74$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $ef3c25474b28ec74$var$__markAsModule = function(target) {
    return $ef3c25474b28ec74$var$__defProp(target, "__esModule", {
        value: true
    });
};
var $ef3c25474b28ec74$var$__reExport = function(target, module, desc) {
    if (module && typeof module === "object" || typeof module === "function") {
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function(_iterator, _step) {
                var key = _step.value;
                if (!$ef3c25474b28ec74$var$__hasOwnProp.call(target, key) && key !== "default") $ef3c25474b28ec74$var$__defProp(target, key, {
                    get: function() {
                        return module[key];
                    },
                    enumerable: !(desc = $ef3c25474b28ec74$var$__getOwnPropDesc(module, key)) || desc.enumerable
                });
            };
            for(var _iterator = $ef3c25474b28ec74$var$__getOwnPropNames(module)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop(_iterator, _step);
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
var $ef3c25474b28ec74$var$monaco_editor_core_exports = {};
$ef3c25474b28ec74$var$__markAsModule($ef3c25474b28ec74$var$monaco_editor_core_exports);
$ef3c25474b28ec74$var$__reExport($ef3c25474b28ec74$var$monaco_editor_core_exports, $2nnEZ);
// src/html/workerManager.ts
var $ef3c25474b28ec74$var$STOP_WHEN_IDLE_FOR = 120000;
var $ef3c25474b28ec74$var$WorkerManager = /*#__PURE__*/ function() {
    "use strict";
    function _class(defaults) {
        var _this = this;
        $8TSCy.classCallCheck(this, _class);
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
                if (timePassedSinceLastUsed > $ef3c25474b28ec74$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
            }
        },
        {
            key: "_getClient",
            value: function _getClient() {
                this._lastUsedTime = Date.now();
                if (!this._client) {
                    this._worker = $ef3c25474b28ec74$var$monaco_editor_core_exports.editor.createWebWorker({
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
var $ef3c25474b28ec74$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
})($ef3c25474b28ec74$var$integer || ($ef3c25474b28ec74$var$integer = {}));
var $ef3c25474b28ec74$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
})($ef3c25474b28ec74$var$uinteger || ($ef3c25474b28ec74$var$uinteger = {}));
var $ef3c25474b28ec74$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $ef3c25474b28ec74$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $ef3c25474b28ec74$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.objectLiteral(candidate) && $ef3c25474b28ec74$var$Is.uinteger(candidate.line) && $ef3c25474b28ec74$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($ef3c25474b28ec74$var$Position || ($ef3c25474b28ec74$var$Position = {}));
var $ef3c25474b28ec74$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($ef3c25474b28ec74$var$Is.uinteger(one) && $ef3c25474b28ec74$var$Is.uinteger(two) && $ef3c25474b28ec74$var$Is.uinteger(three) && $ef3c25474b28ec74$var$Is.uinteger(four)) return {
            start: $ef3c25474b28ec74$var$Position.create(one, two),
            end: $ef3c25474b28ec74$var$Position.create(three, four)
        };
        else if ($ef3c25474b28ec74$var$Position.is(one) && $ef3c25474b28ec74$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
    Range3.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.objectLiteral(candidate) && $ef3c25474b28ec74$var$Position.is(candidate.start) && $ef3c25474b28ec74$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($ef3c25474b28ec74$var$Range || ($ef3c25474b28ec74$var$Range = {}));
var $ef3c25474b28ec74$var$Location;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Range.is(candidate.range) && ($ef3c25474b28ec74$var$Is.string(candidate.uri) || $ef3c25474b28ec74$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($ef3c25474b28ec74$var$Location || ($ef3c25474b28ec74$var$Location = {}));
var $ef3c25474b28ec74$var$LocationLink;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Range.is(candidate.targetRange) && $ef3c25474b28ec74$var$Is.string(candidate.targetUri) && ($ef3c25474b28ec74$var$Range.is(candidate.targetSelectionRange) || $ef3c25474b28ec74$var$Is.undefined(candidate.targetSelectionRange)) && ($ef3c25474b28ec74$var$Range.is(candidate.originSelectionRange) || $ef3c25474b28ec74$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($ef3c25474b28ec74$var$LocationLink || ($ef3c25474b28ec74$var$LocationLink = {}));
var $ef3c25474b28ec74$var$Color;
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
        return $ef3c25474b28ec74$var$Is.numberRange(candidate.red, 0, 1) && $ef3c25474b28ec74$var$Is.numberRange(candidate.green, 0, 1) && $ef3c25474b28ec74$var$Is.numberRange(candidate.blue, 0, 1) && $ef3c25474b28ec74$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($ef3c25474b28ec74$var$Color || ($ef3c25474b28ec74$var$Color = {}));
var $ef3c25474b28ec74$var$ColorInformation;
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
        return $ef3c25474b28ec74$var$Range.is(candidate.range) && $ef3c25474b28ec74$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($ef3c25474b28ec74$var$ColorInformation || ($ef3c25474b28ec74$var$ColorInformation = {}));
var $ef3c25474b28ec74$var$ColorPresentation;
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
        return $ef3c25474b28ec74$var$Is.string(candidate.label) && ($ef3c25474b28ec74$var$Is.undefined(candidate.textEdit) || $ef3c25474b28ec74$var$TextEdit.is(candidate)) && ($ef3c25474b28ec74$var$Is.undefined(candidate.additionalTextEdits) || $ef3c25474b28ec74$var$Is.typedArray(candidate.additionalTextEdits, $ef3c25474b28ec74$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($ef3c25474b28ec74$var$ColorPresentation || ($ef3c25474b28ec74$var$ColorPresentation = {}));
var $ef3c25474b28ec74$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2["Comment"] = "comment";
    FoldingRangeKind2["Imports"] = "imports";
    FoldingRangeKind2["Region"] = "region";
})($ef3c25474b28ec74$var$FoldingRangeKind || ($ef3c25474b28ec74$var$FoldingRangeKind = {}));
var $ef3c25474b28ec74$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($ef3c25474b28ec74$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($ef3c25474b28ec74$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($ef3c25474b28ec74$var$Is.defined(kind)) result.kind = kind;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.uinteger(candidate.startLine) && $ef3c25474b28ec74$var$Is.uinteger(candidate.startLine) && ($ef3c25474b28ec74$var$Is.undefined(candidate.startCharacter) || $ef3c25474b28ec74$var$Is.uinteger(candidate.startCharacter)) && ($ef3c25474b28ec74$var$Is.undefined(candidate.endCharacter) || $ef3c25474b28ec74$var$Is.uinteger(candidate.endCharacter)) && ($ef3c25474b28ec74$var$Is.undefined(candidate.kind) || $ef3c25474b28ec74$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($ef3c25474b28ec74$var$FoldingRange || ($ef3c25474b28ec74$var$FoldingRange = {}));
var $ef3c25474b28ec74$var$DiagnosticRelatedInformation;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Location.is(candidate.location) && $ef3c25474b28ec74$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($ef3c25474b28ec74$var$DiagnosticRelatedInformation || ($ef3c25474b28ec74$var$DiagnosticRelatedInformation = {}));
var $ef3c25474b28ec74$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($ef3c25474b28ec74$var$DiagnosticSeverity || ($ef3c25474b28ec74$var$DiagnosticSeverity = {}));
var $ef3c25474b28ec74$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($ef3c25474b28ec74$var$DiagnosticTag || ($ef3c25474b28ec74$var$DiagnosticTag = {}));
var $ef3c25474b28ec74$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && $ef3c25474b28ec74$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($ef3c25474b28ec74$var$CodeDescription || ($ef3c25474b28ec74$var$CodeDescription = {}));
var $ef3c25474b28ec74$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        var result = {
            range: range,
            message: message
        };
        if ($ef3c25474b28ec74$var$Is.defined(severity)) result.severity = severity;
        if ($ef3c25474b28ec74$var$Is.defined(code)) result.code = code;
        if ($ef3c25474b28ec74$var$Is.defined(source)) result.source = source;
        if ($ef3c25474b28ec74$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Range.is(candidate.range) && $ef3c25474b28ec74$var$Is.string(candidate.message) && ($ef3c25474b28ec74$var$Is.number(candidate.severity) || $ef3c25474b28ec74$var$Is.undefined(candidate.severity)) && ($ef3c25474b28ec74$var$Is.integer(candidate.code) || $ef3c25474b28ec74$var$Is.string(candidate.code) || $ef3c25474b28ec74$var$Is.undefined(candidate.code)) && ($ef3c25474b28ec74$var$Is.undefined(candidate.codeDescription) || $ef3c25474b28ec74$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($ef3c25474b28ec74$var$Is.string(candidate.source) || $ef3c25474b28ec74$var$Is.undefined(candidate.source)) && ($ef3c25474b28ec74$var$Is.undefined(candidate.relatedInformation) || $ef3c25474b28ec74$var$Is.typedArray(candidate.relatedInformation, $ef3c25474b28ec74$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($ef3c25474b28ec74$var$Diagnostic || ($ef3c25474b28ec74$var$Diagnostic = {}));
var $ef3c25474b28ec74$var$Command;
(function(Command2) {
    function create(title, command) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var result = {
            title: title,
            command: command
        };
        if ($ef3c25474b28ec74$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.title) && $ef3c25474b28ec74$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($ef3c25474b28ec74$var$Command || ($ef3c25474b28ec74$var$Command = {}));
var $ef3c25474b28ec74$var$TextEdit;
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
        return $ef3c25474b28ec74$var$Is.objectLiteral(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.newText) && $ef3c25474b28ec74$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($ef3c25474b28ec74$var$TextEdit || ($ef3c25474b28ec74$var$TextEdit = {}));
var $ef3c25474b28ec74$var$ChangeAnnotation;
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
        return candidate !== void 0 && $ef3c25474b28ec74$var$Is.objectLiteral(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.label) && ($ef3c25474b28ec74$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($ef3c25474b28ec74$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($ef3c25474b28ec74$var$ChangeAnnotation || ($ef3c25474b28ec74$var$ChangeAnnotation = {}));
var $ef3c25474b28ec74$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        var candidate = value;
        return typeof candidate === "string";
    }
    ChangeAnnotationIdentifier2.is = is;
})($ef3c25474b28ec74$var$ChangeAnnotationIdentifier || ($ef3c25474b28ec74$var$ChangeAnnotationIdentifier = {}));
var $ef3c25474b28ec74$var$AnnotatedTextEdit;
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
        return $ef3c25474b28ec74$var$TextEdit.is(candidate) && ($ef3c25474b28ec74$var$ChangeAnnotation.is(candidate.annotationId) || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($ef3c25474b28ec74$var$AnnotatedTextEdit || ($ef3c25474b28ec74$var$AnnotatedTextEdit = {}));
var $ef3c25474b28ec74$var$TextDocumentEdit;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($ef3c25474b28ec74$var$TextDocumentEdit || ($ef3c25474b28ec74$var$TextDocumentEdit = {}));
var $ef3c25474b28ec74$var$CreateFile;
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
        return candidate && candidate.kind === "create" && $ef3c25474b28ec74$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($ef3c25474b28ec74$var$CreateFile || ($ef3c25474b28ec74$var$CreateFile = {}));
var $ef3c25474b28ec74$var$RenameFile;
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
        return candidate && candidate.kind === "rename" && $ef3c25474b28ec74$var$Is.string(candidate.oldUri) && $ef3c25474b28ec74$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($ef3c25474b28ec74$var$RenameFile || ($ef3c25474b28ec74$var$RenameFile = {}));
var $ef3c25474b28ec74$var$DeleteFile;
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
        return candidate && candidate.kind === "delete" && $ef3c25474b28ec74$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($ef3c25474b28ec74$var$DeleteFile || ($ef3c25474b28ec74$var$DeleteFile = {}));
var $ef3c25474b28ec74$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if ($ef3c25474b28ec74$var$Is.string(change.kind)) return $ef3c25474b28ec74$var$CreateFile.is(change) || $ef3c25474b28ec74$var$RenameFile.is(change) || $ef3c25474b28ec74$var$DeleteFile.is(change);
            else return $ef3c25474b28ec74$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($ef3c25474b28ec74$var$WorkspaceEdit || ($ef3c25474b28ec74$var$WorkspaceEdit = {}));
var $ef3c25474b28ec74$var$TextEditChangeImpl = function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $ef3c25474b28ec74$var$TextEdit.insert(position, newText);
        else if ($ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $ef3c25474b28ec74$var$AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $ef3c25474b28ec74$var$AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $ef3c25474b28ec74$var$TextEdit.replace(range, newText);
        else if ($ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $ef3c25474b28ec74$var$AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $ef3c25474b28ec74$var$AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $ef3c25474b28ec74$var$TextEdit.del(range);
        else if ($ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $ef3c25474b28ec74$var$AnnotatedTextEdit.del(range, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $ef3c25474b28ec74$var$AnnotatedTextEdit.del(range, id);
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
var $ef3c25474b28ec74$var$ChangeAnnotations = function() {
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
        if ($ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
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
var $ef3c25474b28ec74$var$WorkspaceChange = function() {
    function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== void 0) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new $ef3c25474b28ec74$var$ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                    if ($ef3c25474b28ec74$var$TextDocumentEdit.is(change)) {
                        var textEditChange = new $ef3c25474b28ec74$var$TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                var textEditChange = new $ef3c25474b28ec74$var$TextEditChangeImpl(workspaceEdit.changes[key]);
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
        if ($ef3c25474b28ec74$var$OptionalVersionedTextDocumentIdentifier.is(key)) {
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
                result = new $ef3c25474b28ec74$var$TextEditChangeImpl(edits, this._changeAnnotations);
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
                result = new $ef3c25474b28ec74$var$TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
            this._changeAnnotations = new $ef3c25474b28ec74$var$ChangeAnnotations();
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
        if ($ef3c25474b28ec74$var$ChangeAnnotation.is(optionsOrAnnotation) || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $ef3c25474b28ec74$var$CreateFile.create(uri, options);
        else {
            id = $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $ef3c25474b28ec74$var$CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($ef3c25474b28ec74$var$ChangeAnnotation.is(optionsOrAnnotation) || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $ef3c25474b28ec74$var$RenameFile.create(oldUri, newUri, options);
        else {
            id = $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $ef3c25474b28ec74$var$RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($ef3c25474b28ec74$var$ChangeAnnotation.is(optionsOrAnnotation) || $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $ef3c25474b28ec74$var$DeleteFile.create(uri, options);
        else {
            id = $ef3c25474b28ec74$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $ef3c25474b28ec74$var$DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    return WorkspaceChange2;
}();
var $ef3c25474b28ec74$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($ef3c25474b28ec74$var$TextDocumentIdentifier || ($ef3c25474b28ec74$var$TextDocumentIdentifier = {}));
var $ef3c25474b28ec74$var$VersionedTextDocumentIdentifier;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.uri) && $ef3c25474b28ec74$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($ef3c25474b28ec74$var$VersionedTextDocumentIdentifier || ($ef3c25474b28ec74$var$VersionedTextDocumentIdentifier = {}));
var $ef3c25474b28ec74$var$OptionalVersionedTextDocumentIdentifier;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.uri) && (candidate.version === null || $ef3c25474b28ec74$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($ef3c25474b28ec74$var$OptionalVersionedTextDocumentIdentifier || ($ef3c25474b28ec74$var$OptionalVersionedTextDocumentIdentifier = {}));
var $ef3c25474b28ec74$var$TextDocumentItem;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.uri) && $ef3c25474b28ec74$var$Is.string(candidate.languageId) && $ef3c25474b28ec74$var$Is.integer(candidate.version) && $ef3c25474b28ec74$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($ef3c25474b28ec74$var$TextDocumentItem || ($ef3c25474b28ec74$var$TextDocumentItem = {}));
var $ef3c25474b28ec74$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
})($ef3c25474b28ec74$var$MarkupKind || ($ef3c25474b28ec74$var$MarkupKind = {}));
(function(MarkupKind2) {
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($ef3c25474b28ec74$var$MarkupKind || ($ef3c25474b28ec74$var$MarkupKind = {}));
var $ef3c25474b28ec74$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.objectLiteral(value) && $ef3c25474b28ec74$var$MarkupKind.is(candidate.kind) && $ef3c25474b28ec74$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($ef3c25474b28ec74$var$MarkupContent || ($ef3c25474b28ec74$var$MarkupContent = {}));
var $ef3c25474b28ec74$var$CompletionItemKind;
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
})($ef3c25474b28ec74$var$CompletionItemKind || ($ef3c25474b28ec74$var$CompletionItemKind = {}));
var $ef3c25474b28ec74$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($ef3c25474b28ec74$var$InsertTextFormat || ($ef3c25474b28ec74$var$InsertTextFormat = {}));
var $ef3c25474b28ec74$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($ef3c25474b28ec74$var$CompletionItemTag || ($ef3c25474b28ec74$var$CompletionItemTag = {}));
var $ef3c25474b28ec74$var$InsertReplaceEdit;
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
        return candidate && $ef3c25474b28ec74$var$Is.string(candidate.newText) && $ef3c25474b28ec74$var$Range.is(candidate.insert) && $ef3c25474b28ec74$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($ef3c25474b28ec74$var$InsertReplaceEdit || ($ef3c25474b28ec74$var$InsertReplaceEdit = {}));
var $ef3c25474b28ec74$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($ef3c25474b28ec74$var$InsertTextMode || ($ef3c25474b28ec74$var$InsertTextMode = {}));
var $ef3c25474b28ec74$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($ef3c25474b28ec74$var$CompletionItem || ($ef3c25474b28ec74$var$CompletionItem = {}));
var $ef3c25474b28ec74$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($ef3c25474b28ec74$var$CompletionList || ($ef3c25474b28ec74$var$CompletionList = {}));
var $ef3c25474b28ec74$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.string(candidate) || $ef3c25474b28ec74$var$Is.objectLiteral(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.language) && $ef3c25474b28ec74$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($ef3c25474b28ec74$var$MarkedString || ($ef3c25474b28ec74$var$MarkedString = {}));
var $ef3c25474b28ec74$var$Hover;
(function(Hover2) {
    function is(value) {
        var candidate = value;
        return !!candidate && $ef3c25474b28ec74$var$Is.objectLiteral(candidate) && ($ef3c25474b28ec74$var$MarkupContent.is(candidate.contents) || $ef3c25474b28ec74$var$MarkedString.is(candidate.contents) || $ef3c25474b28ec74$var$Is.typedArray(candidate.contents, $ef3c25474b28ec74$var$MarkedString.is)) && (value.range === void 0 || $ef3c25474b28ec74$var$Range.is(value.range));
    }
    Hover2.is = is;
})($ef3c25474b28ec74$var$Hover || ($ef3c25474b28ec74$var$Hover = {}));
var $ef3c25474b28ec74$var$ParameterInformation;
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
})($ef3c25474b28ec74$var$ParameterInformation || ($ef3c25474b28ec74$var$ParameterInformation = {}));
var $ef3c25474b28ec74$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation) {
        var parameters = [];
        for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
        var result = {
            label: label
        };
        if ($ef3c25474b28ec74$var$Is.defined(documentation)) result.documentation = documentation;
        if ($ef3c25474b28ec74$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($ef3c25474b28ec74$var$SignatureInformation || ($ef3c25474b28ec74$var$SignatureInformation = {}));
var $ef3c25474b28ec74$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($ef3c25474b28ec74$var$DocumentHighlightKind || ($ef3c25474b28ec74$var$DocumentHighlightKind = {}));
var $ef3c25474b28ec74$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        var result = {
            range: range
        };
        if ($ef3c25474b28ec74$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($ef3c25474b28ec74$var$DocumentHighlight || ($ef3c25474b28ec74$var$DocumentHighlight = {}));
var $ef3c25474b28ec74$var$SymbolKind;
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
})($ef3c25474b28ec74$var$SymbolKind || ($ef3c25474b28ec74$var$SymbolKind = {}));
var $ef3c25474b28ec74$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($ef3c25474b28ec74$var$SymbolTag || ($ef3c25474b28ec74$var$SymbolTag = {}));
var $ef3c25474b28ec74$var$SymbolInformation;
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
})($ef3c25474b28ec74$var$SymbolInformation || ($ef3c25474b28ec74$var$SymbolInformation = {}));
var $ef3c25474b28ec74$var$DocumentSymbol;
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
        return candidate && $ef3c25474b28ec74$var$Is.string(candidate.name) && $ef3c25474b28ec74$var$Is.number(candidate.kind) && $ef3c25474b28ec74$var$Range.is(candidate.range) && $ef3c25474b28ec74$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $ef3c25474b28ec74$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($ef3c25474b28ec74$var$DocumentSymbol || ($ef3c25474b28ec74$var$DocumentSymbol = {}));
var $ef3c25474b28ec74$var$CodeActionKind;
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
})($ef3c25474b28ec74$var$CodeActionKind || ($ef3c25474b28ec74$var$CodeActionKind = {}));
var $ef3c25474b28ec74$var$CodeActionContext;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.typedArray(candidate.diagnostics, $ef3c25474b28ec74$var$Diagnostic.is) && (candidate.only === void 0 || $ef3c25474b28ec74$var$Is.typedArray(candidate.only, $ef3c25474b28ec74$var$Is.string));
    }
    CodeActionContext2.is = is;
})($ef3c25474b28ec74$var$CodeActionContext || ($ef3c25474b28ec74$var$CodeActionContext = {}));
var $ef3c25474b28ec74$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = {
            title: title
        };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($ef3c25474b28ec74$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $ef3c25474b28ec74$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $ef3c25474b28ec74$var$Is.typedArray(candidate.diagnostics, $ef3c25474b28ec74$var$Diagnostic.is)) && (candidate.kind === void 0 || $ef3c25474b28ec74$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $ef3c25474b28ec74$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $ef3c25474b28ec74$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $ef3c25474b28ec74$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($ef3c25474b28ec74$var$CodeAction || ($ef3c25474b28ec74$var$CodeAction = {}));
var $ef3c25474b28ec74$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        var result = {
            range: range
        };
        if ($ef3c25474b28ec74$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Range.is(candidate.range) && ($ef3c25474b28ec74$var$Is.undefined(candidate.command) || $ef3c25474b28ec74$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($ef3c25474b28ec74$var$CodeLens || ($ef3c25474b28ec74$var$CodeLens = {}));
var $ef3c25474b28ec74$var$FormattingOptions;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.uinteger(candidate.tabSize) && $ef3c25474b28ec74$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($ef3c25474b28ec74$var$FormattingOptions || ($ef3c25474b28ec74$var$FormattingOptions = {}));
var $ef3c25474b28ec74$var$DocumentLink;
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
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Range.is(candidate.range) && ($ef3c25474b28ec74$var$Is.undefined(candidate.target) || $ef3c25474b28ec74$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($ef3c25474b28ec74$var$DocumentLink || ($ef3c25474b28ec74$var$DocumentLink = {}));
var $ef3c25474b28ec74$var$SelectionRange;
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
        return candidate !== void 0 && $ef3c25474b28ec74$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($ef3c25474b28ec74$var$SelectionRange || ($ef3c25474b28ec74$var$SelectionRange = {}));
var $ef3c25474b28ec74$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $ef3c25474b28ec74$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        var candidate = value;
        return $ef3c25474b28ec74$var$Is.defined(candidate) && $ef3c25474b28ec74$var$Is.string(candidate.uri) && ($ef3c25474b28ec74$var$Is.undefined(candidate.languageId) || $ef3c25474b28ec74$var$Is.string(candidate.languageId)) && $ef3c25474b28ec74$var$Is.uinteger(candidate.lineCount) && $ef3c25474b28ec74$var$Is.func(candidate.getText) && $ef3c25474b28ec74$var$Is.func(candidate.positionAt) && $ef3c25474b28ec74$var$Is.func(candidate.offsetAt) ? true : false;
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
})($ef3c25474b28ec74$var$TextDocument || ($ef3c25474b28ec74$var$TextDocument = {}));
var $ef3c25474b28ec74$var$FullTextDocument = function() {
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
        if (high === 0) return $ef3c25474b28ec74$var$Position.create(0, offset);
        while(low < high){
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        var line = low - 1;
        return $ef3c25474b28ec74$var$Position.create(line, offset - lineOffsets[line]);
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
var $ef3c25474b28ec74$var$Is;
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
})($ef3c25474b28ec74$var$Is || ($ef3c25474b28ec74$var$Is = {}));
// src/common/lspLanguageFeatures.ts
var $ef3c25474b28ec74$var$CompletionAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker, _triggerCharacters) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
        this._triggerCharacters = _triggerCharacters;
    }
    $8TSCy.createClass(_class, [
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
                    return worker.doComplete(resource.toString(), $ef3c25474b28ec74$var$fromPosition(position));
                }).then(function(info) {
                    if (!info) return;
                    var wordInfo = model.getWordUntilPosition(position);
                    var wordRange = new $ef3c25474b28ec74$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
                    var items = info.items.map(function(entry) {
                        var item = {
                            label: entry.label,
                            insertText: entry.insertText || entry.label,
                            sortText: entry.sortText,
                            filterText: entry.filterText,
                            documentation: entry.documentation,
                            detail: entry.detail,
                            command: $ef3c25474b28ec74$var$toCommand(entry.command),
                            range: wordRange,
                            kind: $ef3c25474b28ec74$var$toCompletionItemKind(entry.kind)
                        };
                        if (entry.textEdit) {
                            if ($ef3c25474b28ec74$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                                insert: $ef3c25474b28ec74$var$toRange(entry.textEdit.insert),
                                replace: $ef3c25474b28ec74$var$toRange(entry.textEdit.replace)
                            };
                            else item.range = $ef3c25474b28ec74$var$toRange(entry.textEdit.range);
                            item.insertText = entry.textEdit.newText;
                        }
                        if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($ef3c25474b28ec74$var$toTextEdit);
                        if (entry.insertTextFormat === $ef3c25474b28ec74$var$InsertTextFormat.Snippet) item.insertTextRules = $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
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
function $ef3c25474b28ec74$var$fromPosition(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $ef3c25474b28ec74$var$fromRange(range) {
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
function $ef3c25474b28ec74$var$toRange(range) {
    if (!range) return void 0;
    return new $ef3c25474b28ec74$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $ef3c25474b28ec74$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $ef3c25474b28ec74$var$toCompletionItemKind(kind) {
    var mItemKind = $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $ef3c25474b28ec74$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $ef3c25474b28ec74$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $ef3c25474b28ec74$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $ef3c25474b28ec74$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $ef3c25474b28ec74$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $ef3c25474b28ec74$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $ef3c25474b28ec74$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $ef3c25474b28ec74$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $ef3c25474b28ec74$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $ef3c25474b28ec74$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $ef3c25474b28ec74$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $ef3c25474b28ec74$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $ef3c25474b28ec74$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $ef3c25474b28ec74$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $ef3c25474b28ec74$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $ef3c25474b28ec74$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $ef3c25474b28ec74$var$CompletionItemKind.File:
            return mItemKind.File;
        case $ef3c25474b28ec74$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $ef3c25474b28ec74$var$toTextEdit(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $ef3c25474b28ec74$var$toRange(textEdit.range),
        text: textEdit.newText
    };
}
function $ef3c25474b28ec74$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $ef3c25474b28ec74$var$HoverAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideHover",
            value: function provideHover(model, position, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.doHover(resource.toString(), $ef3c25474b28ec74$var$fromPosition(position));
                }).then(function(info) {
                    if (!info) return;
                    return {
                        range: $ef3c25474b28ec74$var$toRange(info.range),
                        contents: $ef3c25474b28ec74$var$toMarkedStringArray(info.contents)
                    };
                });
            }
        }
    ]);
    return _class;
}();
function $ef3c25474b28ec74$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $ef3c25474b28ec74$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($ef3c25474b28ec74$var$isMarkupContent(entry)) {
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
function $ef3c25474b28ec74$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($ef3c25474b28ec74$var$toMarkdownString);
    return [
        $ef3c25474b28ec74$var$toMarkdownString(contents)
    ];
}
var $ef3c25474b28ec74$var$DocumentHighlightAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDocumentHighlights",
            value: function provideDocumentHighlights(model, position, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.findDocumentHighlights(resource.toString(), $ef3c25474b28ec74$var$fromPosition(position));
                }).then(function(entries) {
                    if (!entries) return;
                    return entries.map(function(entry) {
                        return {
                            range: $ef3c25474b28ec74$var$toRange(entry.range),
                            kind: $ef3c25474b28ec74$var$toDocumentHighlightKind(entry.kind)
                        };
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $ef3c25474b28ec74$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $ef3c25474b28ec74$var$DocumentHighlightKind.Read:
            return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $ef3c25474b28ec74$var$DocumentHighlightKind.Write:
            return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $ef3c25474b28ec74$var$DocumentHighlightKind.Text:
            return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $ef3c25474b28ec74$var$RenameAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideRenameEdits",
            value: function provideRenameEdits(model, position, newName, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.doRename(resource.toString(), $ef3c25474b28ec74$var$fromPosition(position), newName);
                }).then(function(edit) {
                    return $ef3c25474b28ec74$var$toWorkspaceEdit(edit);
                });
            }
        }
    ]);
    return _class;
}();
function $ef3c25474b28ec74$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    var resourceEdits = [];
    for(var uri in edit.changes){
        var _uri = $ef3c25474b28ec74$var$monaco_editor_core_exports.Uri.parse(uri);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            for(var _iterator = edit.changes[uri][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var e = _step.value;
                resourceEdits.push({
                    resource: _uri,
                    edit: {
                        range: $ef3c25474b28ec74$var$toRange(e.range),
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
var $ef3c25474b28ec74$var$DocumentSymbolAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
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
                            kind: $ef3c25474b28ec74$var$toSymbolKind(item.kind),
                            range: $ef3c25474b28ec74$var$toRange(item.location.range),
                            selectionRange: $ef3c25474b28ec74$var$toRange(item.location.range),
                            tags: []
                        };
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $ef3c25474b28ec74$var$toSymbolKind(kind) {
    var mKind = $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $ef3c25474b28ec74$var$SymbolKind.File:
            return mKind.Array;
        case $ef3c25474b28ec74$var$SymbolKind.Module:
            return mKind.Module;
        case $ef3c25474b28ec74$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $ef3c25474b28ec74$var$SymbolKind.Package:
            return mKind.Package;
        case $ef3c25474b28ec74$var$SymbolKind.Class:
            return mKind.Class;
        case $ef3c25474b28ec74$var$SymbolKind.Method:
            return mKind.Method;
        case $ef3c25474b28ec74$var$SymbolKind.Property:
            return mKind.Property;
        case $ef3c25474b28ec74$var$SymbolKind.Field:
            return mKind.Field;
        case $ef3c25474b28ec74$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $ef3c25474b28ec74$var$SymbolKind.Enum:
            return mKind.Enum;
        case $ef3c25474b28ec74$var$SymbolKind.Interface:
            return mKind.Interface;
        case $ef3c25474b28ec74$var$SymbolKind.Function:
            return mKind.Function;
        case $ef3c25474b28ec74$var$SymbolKind.Variable:
            return mKind.Variable;
        case $ef3c25474b28ec74$var$SymbolKind.Constant:
            return mKind.Constant;
        case $ef3c25474b28ec74$var$SymbolKind.String:
            return mKind.String;
        case $ef3c25474b28ec74$var$SymbolKind.Number:
            return mKind.Number;
        case $ef3c25474b28ec74$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $ef3c25474b28ec74$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $ef3c25474b28ec74$var$DocumentLinkAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
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
                                range: $ef3c25474b28ec74$var$toRange(item.range),
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
var $ef3c25474b28ec74$var$DocumentFormattingEditProvider = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDocumentFormattingEdits",
            value: function provideDocumentFormattingEdits(model, options, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.format(resource.toString(), null, $ef3c25474b28ec74$var$fromFormattingOptions(options)).then(function(edits) {
                        if (!edits || edits.length === 0) return;
                        return edits.map($ef3c25474b28ec74$var$toTextEdit);
                    });
                });
            }
        }
    ]);
    return _class;
}();
var $ef3c25474b28ec74$var$DocumentRangeFormattingEditProvider = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideDocumentRangeFormattingEdits",
            value: function provideDocumentRangeFormattingEdits(model, range, options, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.format(resource.toString(), $ef3c25474b28ec74$var$fromRange(range), $ef3c25474b28ec74$var$fromFormattingOptions(options)).then(function(edits) {
                        if (!edits || edits.length === 0) return;
                        return edits.map($ef3c25474b28ec74$var$toTextEdit);
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $ef3c25474b28ec74$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $ef3c25474b28ec74$var$FoldingRangeAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
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
                        if (typeof range.kind !== "undefined") result.kind = $ef3c25474b28ec74$var$toFoldingRangeKind(range.kind);
                        return result;
                    });
                });
            }
        }
    ]);
    return _class;
}();
function $ef3c25474b28ec74$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $ef3c25474b28ec74$var$FoldingRangeKind.Comment:
            return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $ef3c25474b28ec74$var$FoldingRangeKind.Imports:
            return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $ef3c25474b28ec74$var$FoldingRangeKind.Region:
            return $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $ef3c25474b28ec74$var$SelectionRangeAdapter = /*#__PURE__*/ function() {
    "use strict";
    function _class(_worker) {
        $8TSCy.classCallCheck(this, _class);
        this._worker = _worker;
    }
    $8TSCy.createClass(_class, [
        {
            key: "provideSelectionRanges",
            value: function provideSelectionRanges(model, positions, token) {
                var resource = model.uri;
                return this._worker(resource).then(function(worker) {
                    return worker.getSelectionRanges(resource.toString(), positions.map($ef3c25474b28ec74$var$fromPosition));
                }).then(function(selectionRanges) {
                    if (!selectionRanges) return;
                    return selectionRanges.map(function(selectionRange) {
                        var result = [];
                        while(selectionRange){
                            result.push({
                                range: $ef3c25474b28ec74$var$toRange(selectionRange.range)
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
var $ef3c25474b28ec74$var$HTMLCompletionAdapter = /*#__PURE__*/ function(CompletionAdapter) {
    "use strict";
    $8TSCy.inherits(_class, CompletionAdapter);
    var _super = $8TSCy.createSuper(_class);
    function _class(worker) {
        $8TSCy.classCallCheck(this, _class);
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
}($ef3c25474b28ec74$var$CompletionAdapter);
function $ef3c25474b28ec74$export$972c61cff7b1bac7(defaults) {
    var client = new $ef3c25474b28ec74$var$WorkerManager(defaults);
    var worker = function() {
        for(var _len = arguments.length, uris = new Array(_len), _key = 0; _key < _len; _key++){
            uris[_key] = arguments[_key];
        }
        var _client;
        return (_client = client).getLanguageServiceWorker.apply(_client, $8TSCy.toConsumableArray(uris));
    };
    var languageId = defaults.languageId;
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $ef3c25474b28ec74$var$HTMLCompletionAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $ef3c25474b28ec74$var$HoverAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $ef3c25474b28ec74$var$DocumentHighlightAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $ef3c25474b28ec74$var$DocumentLinkAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $ef3c25474b28ec74$var$FoldingRangeAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $ef3c25474b28ec74$var$DocumentSymbolAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $ef3c25474b28ec74$var$SelectionRangeAdapter(worker));
    $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $ef3c25474b28ec74$var$RenameAdapter(worker));
    if (languageId === "html") {
        $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $ef3c25474b28ec74$var$DocumentFormattingEditProvider(worker));
        $ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $ef3c25474b28ec74$var$DocumentRangeFormattingEditProvider(worker));
    }
}
function $ef3c25474b28ec74$export$6df00d141df42469(defaults) {
    var disposables = [];
    var providers = [];
    var client = new $ef3c25474b28ec74$var$WorkerManager(defaults);
    disposables.push(client);
    var worker = function() {
        for(var _len = arguments.length, uris = new Array(_len), _key = 0; _key < _len; _key++){
            uris[_key] = arguments[_key];
        }
        var _client;
        return (_client = client).getLanguageServiceWorker.apply(_client, $8TSCy.toConsumableArray(uris));
    };
    function registerProviders() {
        var languageId = defaults.languageId, modeConfiguration = defaults.modeConfiguration;
        $ef3c25474b28ec74$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $ef3c25474b28ec74$var$HTMLCompletionAdapter(worker)));
        if (modeConfiguration.hovers) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $ef3c25474b28ec74$var$HoverAdapter(worker)));
        if (modeConfiguration.documentHighlights) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $ef3c25474b28ec74$var$DocumentHighlightAdapter(worker)));
        if (modeConfiguration.links) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $ef3c25474b28ec74$var$DocumentLinkAdapter(worker)));
        if (modeConfiguration.documentSymbols) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $ef3c25474b28ec74$var$DocumentSymbolAdapter(worker)));
        if (modeConfiguration.rename) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $ef3c25474b28ec74$var$RenameAdapter(worker)));
        if (modeConfiguration.foldingRanges) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $ef3c25474b28ec74$var$FoldingRangeAdapter(worker)));
        if (modeConfiguration.selectionRanges) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $ef3c25474b28ec74$var$SelectionRangeAdapter(worker)));
        if (modeConfiguration.documentFormattingEdits) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $ef3c25474b28ec74$var$DocumentFormattingEditProvider(worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push($ef3c25474b28ec74$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $ef3c25474b28ec74$var$DocumentRangeFormattingEditProvider(worker)));
    }
    registerProviders();
    disposables.push($ef3c25474b28ec74$var$asDisposable(providers));
    return $ef3c25474b28ec74$var$asDisposable(disposables);
}
function $ef3c25474b28ec74$var$asDisposable(disposables) {
    return {
        dispose: function() {
            return $ef3c25474b28ec74$var$disposeAll(disposables);
        }
    };
}
function $ef3c25474b28ec74$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});

})();
//# sourceMappingURL=htmlMode.f022f111.js.map
