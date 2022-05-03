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
parcelRequire.register("iKFOY", function(module, exports) {

$parcel$export(module.exports, "setupMode1", function () { return $da6cf6b3e7e92737$export$972c61cff7b1bac7; });
$parcel$export(module.exports, "setupMode", function () { return $da6cf6b3e7e92737$export$6df00d141df42469; });

var $f7M7F = parcelRequire("f7M7F");
// node_modules/vscode-languageserver-types/lib/esm/main.js
"use strict";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ var $da6cf6b3e7e92737$var$__defProp = Object.defineProperty;
var $da6cf6b3e7e92737$var$__getOwnPropDesc = Object.getOwnPropertyDescriptor;
var $da6cf6b3e7e92737$var$__getOwnPropNames = Object.getOwnPropertyNames;
var $da6cf6b3e7e92737$var$__hasOwnProp = Object.prototype.hasOwnProperty;
var $da6cf6b3e7e92737$var$__markAsModule = (target)=>$da6cf6b3e7e92737$var$__defProp(target, "__esModule", {
        value: true
    })
;
var $da6cf6b3e7e92737$var$__reExport = (target, module, desc)=>{
    if (module && typeof module === "object" || typeof module === "function") {
        for (let key of $da6cf6b3e7e92737$var$__getOwnPropNames(module))if (!$da6cf6b3e7e92737$var$__hasOwnProp.call(target, key) && key !== "default") $da6cf6b3e7e92737$var$__defProp(target, key, {
            get: ()=>module[key]
            ,
            enumerable: !(desc = $da6cf6b3e7e92737$var$__getOwnPropDesc(module, key)) || desc.enumerable
        });
    }
    return target;
};
// src/fillers/monaco-editor-core.ts
var $da6cf6b3e7e92737$var$monaco_editor_core_exports = {};
$da6cf6b3e7e92737$var$__markAsModule($da6cf6b3e7e92737$var$monaco_editor_core_exports);
$da6cf6b3e7e92737$var$__reExport($da6cf6b3e7e92737$var$monaco_editor_core_exports, $f7M7F);
// src/html/workerManager.ts
var $da6cf6b3e7e92737$var$STOP_WHEN_IDLE_FOR = 120000;
var $da6cf6b3e7e92737$var$WorkerManager = class {
    _stopWorker() {
        if (this._worker) {
            this._worker.dispose();
            this._worker = null;
        }
        this._client = null;
    }
    dispose() {
        clearInterval(this._idleCheckInterval);
        this._configChangeListener.dispose();
        this._stopWorker();
    }
    _checkIfIdle() {
        if (!this._worker) return;
        let timePassedSinceLastUsed = Date.now() - this._lastUsedTime;
        if (timePassedSinceLastUsed > $da6cf6b3e7e92737$var$STOP_WHEN_IDLE_FOR) this._stopWorker();
    }
    _getClient() {
        this._lastUsedTime = Date.now();
        if (!this._client) {
            this._worker = $da6cf6b3e7e92737$var$monaco_editor_core_exports.editor.createWebWorker({
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
    getLanguageServiceWorker(...resources) {
        let _client;
        return this._getClient().then((client)=>{
            _client = client;
        }).then((_)=>{
            if (this._worker) return this._worker.withSyncedResources(resources);
        }).then((_)=>_client
        );
    }
    constructor(defaults){
        this._defaults = defaults;
        this._worker = null;
        this._client = null;
        this._idleCheckInterval = window.setInterval(()=>this._checkIfIdle()
        , 30000);
        this._lastUsedTime = 0;
        this._configChangeListener = this._defaults.onDidChange(()=>this._stopWorker()
        );
    }
};
var $da6cf6b3e7e92737$var$integer;
(function(integer2) {
    integer2.MIN_VALUE = -2147483648;
    integer2.MAX_VALUE = 2147483647;
})($da6cf6b3e7e92737$var$integer || ($da6cf6b3e7e92737$var$integer = {}));
var $da6cf6b3e7e92737$var$uinteger;
(function(uinteger2) {
    uinteger2.MIN_VALUE = 0;
    uinteger2.MAX_VALUE = 2147483647;
})($da6cf6b3e7e92737$var$uinteger || ($da6cf6b3e7e92737$var$uinteger = {}));
var $da6cf6b3e7e92737$var$Position;
(function(Position3) {
    function create(line, character) {
        if (line === Number.MAX_VALUE) line = $da6cf6b3e7e92737$var$uinteger.MAX_VALUE;
        if (character === Number.MAX_VALUE) character = $da6cf6b3e7e92737$var$uinteger.MAX_VALUE;
        return {
            line: line,
            character: character
        };
    }
    Position3.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.objectLiteral(candidate) && $da6cf6b3e7e92737$var$Is.uinteger(candidate.line) && $da6cf6b3e7e92737$var$Is.uinteger(candidate.character);
    }
    Position3.is = is;
})($da6cf6b3e7e92737$var$Position || ($da6cf6b3e7e92737$var$Position = {}));
var $da6cf6b3e7e92737$var$Range;
(function(Range3) {
    function create(one, two, three, four) {
        if ($da6cf6b3e7e92737$var$Is.uinteger(one) && $da6cf6b3e7e92737$var$Is.uinteger(two) && $da6cf6b3e7e92737$var$Is.uinteger(three) && $da6cf6b3e7e92737$var$Is.uinteger(four)) return {
            start: $da6cf6b3e7e92737$var$Position.create(one, two),
            end: $da6cf6b3e7e92737$var$Position.create(three, four)
        };
        else if ($da6cf6b3e7e92737$var$Position.is(one) && $da6cf6b3e7e92737$var$Position.is(two)) return {
            start: one,
            end: two
        };
        else throw new Error("Range#create called with invalid arguments[" + one + ", " + two + ", " + three + ", " + four + "]");
    }
    Range3.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.objectLiteral(candidate) && $da6cf6b3e7e92737$var$Position.is(candidate.start) && $da6cf6b3e7e92737$var$Position.is(candidate.end);
    }
    Range3.is = is;
})($da6cf6b3e7e92737$var$Range || ($da6cf6b3e7e92737$var$Range = {}));
var $da6cf6b3e7e92737$var$Location;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Range.is(candidate.range) && ($da6cf6b3e7e92737$var$Is.string(candidate.uri) || $da6cf6b3e7e92737$var$Is.undefined(candidate.uri));
    }
    Location2.is = is;
})($da6cf6b3e7e92737$var$Location || ($da6cf6b3e7e92737$var$Location = {}));
var $da6cf6b3e7e92737$var$LocationLink;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Range.is(candidate.targetRange) && $da6cf6b3e7e92737$var$Is.string(candidate.targetUri) && ($da6cf6b3e7e92737$var$Range.is(candidate.targetSelectionRange) || $da6cf6b3e7e92737$var$Is.undefined(candidate.targetSelectionRange)) && ($da6cf6b3e7e92737$var$Range.is(candidate.originSelectionRange) || $da6cf6b3e7e92737$var$Is.undefined(candidate.originSelectionRange));
    }
    LocationLink2.is = is;
})($da6cf6b3e7e92737$var$LocationLink || ($da6cf6b3e7e92737$var$LocationLink = {}));
var $da6cf6b3e7e92737$var$Color;
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
        return $da6cf6b3e7e92737$var$Is.numberRange(candidate.red, 0, 1) && $da6cf6b3e7e92737$var$Is.numberRange(candidate.green, 0, 1) && $da6cf6b3e7e92737$var$Is.numberRange(candidate.blue, 0, 1) && $da6cf6b3e7e92737$var$Is.numberRange(candidate.alpha, 0, 1);
    }
    Color2.is = is;
})($da6cf6b3e7e92737$var$Color || ($da6cf6b3e7e92737$var$Color = {}));
var $da6cf6b3e7e92737$var$ColorInformation;
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
        return $da6cf6b3e7e92737$var$Range.is(candidate.range) && $da6cf6b3e7e92737$var$Color.is(candidate.color);
    }
    ColorInformation2.is = is;
})($da6cf6b3e7e92737$var$ColorInformation || ($da6cf6b3e7e92737$var$ColorInformation = {}));
var $da6cf6b3e7e92737$var$ColorPresentation;
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
        return $da6cf6b3e7e92737$var$Is.string(candidate.label) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.textEdit) || $da6cf6b3e7e92737$var$TextEdit.is(candidate)) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.additionalTextEdits) || $da6cf6b3e7e92737$var$Is.typedArray(candidate.additionalTextEdits, $da6cf6b3e7e92737$var$TextEdit.is));
    }
    ColorPresentation2.is = is;
})($da6cf6b3e7e92737$var$ColorPresentation || ($da6cf6b3e7e92737$var$ColorPresentation = {}));
var $da6cf6b3e7e92737$var$FoldingRangeKind;
(function(FoldingRangeKind2) {
    FoldingRangeKind2["Comment"] = "comment";
    FoldingRangeKind2["Imports"] = "imports";
    FoldingRangeKind2["Region"] = "region";
})($da6cf6b3e7e92737$var$FoldingRangeKind || ($da6cf6b3e7e92737$var$FoldingRangeKind = {}));
var $da6cf6b3e7e92737$var$FoldingRange;
(function(FoldingRange2) {
    function create(startLine, endLine, startCharacter, endCharacter, kind) {
        var result = {
            startLine: startLine,
            endLine: endLine
        };
        if ($da6cf6b3e7e92737$var$Is.defined(startCharacter)) result.startCharacter = startCharacter;
        if ($da6cf6b3e7e92737$var$Is.defined(endCharacter)) result.endCharacter = endCharacter;
        if ($da6cf6b3e7e92737$var$Is.defined(kind)) result.kind = kind;
        return result;
    }
    FoldingRange2.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.uinteger(candidate.startLine) && $da6cf6b3e7e92737$var$Is.uinteger(candidate.startLine) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.startCharacter) || $da6cf6b3e7e92737$var$Is.uinteger(candidate.startCharacter)) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.endCharacter) || $da6cf6b3e7e92737$var$Is.uinteger(candidate.endCharacter)) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.kind) || $da6cf6b3e7e92737$var$Is.string(candidate.kind));
    }
    FoldingRange2.is = is;
})($da6cf6b3e7e92737$var$FoldingRange || ($da6cf6b3e7e92737$var$FoldingRange = {}));
var $da6cf6b3e7e92737$var$DiagnosticRelatedInformation;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Location.is(candidate.location) && $da6cf6b3e7e92737$var$Is.string(candidate.message);
    }
    DiagnosticRelatedInformation2.is = is;
})($da6cf6b3e7e92737$var$DiagnosticRelatedInformation || ($da6cf6b3e7e92737$var$DiagnosticRelatedInformation = {}));
var $da6cf6b3e7e92737$var$DiagnosticSeverity;
(function(DiagnosticSeverity2) {
    DiagnosticSeverity2.Error = 1;
    DiagnosticSeverity2.Warning = 2;
    DiagnosticSeverity2.Information = 3;
    DiagnosticSeverity2.Hint = 4;
})($da6cf6b3e7e92737$var$DiagnosticSeverity || ($da6cf6b3e7e92737$var$DiagnosticSeverity = {}));
var $da6cf6b3e7e92737$var$DiagnosticTag;
(function(DiagnosticTag2) {
    DiagnosticTag2.Unnecessary = 1;
    DiagnosticTag2.Deprecated = 2;
})($da6cf6b3e7e92737$var$DiagnosticTag || ($da6cf6b3e7e92737$var$DiagnosticTag = {}));
var $da6cf6b3e7e92737$var$CodeDescription;
(function(CodeDescription2) {
    function is(value) {
        var candidate = value;
        return candidate !== void 0 && candidate !== null && $da6cf6b3e7e92737$var$Is.string(candidate.href);
    }
    CodeDescription2.is = is;
})($da6cf6b3e7e92737$var$CodeDescription || ($da6cf6b3e7e92737$var$CodeDescription = {}));
var $da6cf6b3e7e92737$var$Diagnostic;
(function(Diagnostic2) {
    function create(range, message, severity, code, source, relatedInformation) {
        var result = {
            range: range,
            message: message
        };
        if ($da6cf6b3e7e92737$var$Is.defined(severity)) result.severity = severity;
        if ($da6cf6b3e7e92737$var$Is.defined(code)) result.code = code;
        if ($da6cf6b3e7e92737$var$Is.defined(source)) result.source = source;
        if ($da6cf6b3e7e92737$var$Is.defined(relatedInformation)) result.relatedInformation = relatedInformation;
        return result;
    }
    Diagnostic2.create = create;
    function is(value) {
        var _a;
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Range.is(candidate.range) && $da6cf6b3e7e92737$var$Is.string(candidate.message) && ($da6cf6b3e7e92737$var$Is.number(candidate.severity) || $da6cf6b3e7e92737$var$Is.undefined(candidate.severity)) && ($da6cf6b3e7e92737$var$Is.integer(candidate.code) || $da6cf6b3e7e92737$var$Is.string(candidate.code) || $da6cf6b3e7e92737$var$Is.undefined(candidate.code)) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.codeDescription) || $da6cf6b3e7e92737$var$Is.string((_a = candidate.codeDescription) === null || _a === void 0 ? void 0 : _a.href)) && ($da6cf6b3e7e92737$var$Is.string(candidate.source) || $da6cf6b3e7e92737$var$Is.undefined(candidate.source)) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.relatedInformation) || $da6cf6b3e7e92737$var$Is.typedArray(candidate.relatedInformation, $da6cf6b3e7e92737$var$DiagnosticRelatedInformation.is));
    }
    Diagnostic2.is = is;
})($da6cf6b3e7e92737$var$Diagnostic || ($da6cf6b3e7e92737$var$Diagnostic = {}));
var $da6cf6b3e7e92737$var$Command;
(function(Command2) {
    function create(title, command) {
        var args = [];
        for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
        var result = {
            title: title,
            command: command
        };
        if ($da6cf6b3e7e92737$var$Is.defined(args) && args.length > 0) result.arguments = args;
        return result;
    }
    Command2.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.title) && $da6cf6b3e7e92737$var$Is.string(candidate.command);
    }
    Command2.is = is;
})($da6cf6b3e7e92737$var$Command || ($da6cf6b3e7e92737$var$Command = {}));
var $da6cf6b3e7e92737$var$TextEdit;
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
        return $da6cf6b3e7e92737$var$Is.objectLiteral(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.newText) && $da6cf6b3e7e92737$var$Range.is(candidate.range);
    }
    TextEdit2.is = is;
})($da6cf6b3e7e92737$var$TextEdit || ($da6cf6b3e7e92737$var$TextEdit = {}));
var $da6cf6b3e7e92737$var$ChangeAnnotation;
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
        return candidate !== void 0 && $da6cf6b3e7e92737$var$Is.objectLiteral(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.label) && ($da6cf6b3e7e92737$var$Is.boolean(candidate.needsConfirmation) || candidate.needsConfirmation === void 0) && ($da6cf6b3e7e92737$var$Is.string(candidate.description) || candidate.description === void 0);
    }
    ChangeAnnotation2.is = is;
})($da6cf6b3e7e92737$var$ChangeAnnotation || ($da6cf6b3e7e92737$var$ChangeAnnotation = {}));
var $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier;
(function(ChangeAnnotationIdentifier2) {
    function is(value) {
        var candidate = value;
        return typeof candidate === "string";
    }
    ChangeAnnotationIdentifier2.is = is;
})($da6cf6b3e7e92737$var$ChangeAnnotationIdentifier || ($da6cf6b3e7e92737$var$ChangeAnnotationIdentifier = {}));
var $da6cf6b3e7e92737$var$AnnotatedTextEdit;
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
        return $da6cf6b3e7e92737$var$TextEdit.is(candidate) && ($da6cf6b3e7e92737$var$ChangeAnnotation.is(candidate.annotationId) || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    AnnotatedTextEdit2.is = is;
})($da6cf6b3e7e92737$var$AnnotatedTextEdit || ($da6cf6b3e7e92737$var$AnnotatedTextEdit = {}));
var $da6cf6b3e7e92737$var$TextDocumentEdit;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$OptionalVersionedTextDocumentIdentifier.is(candidate.textDocument) && Array.isArray(candidate.edits);
    }
    TextDocumentEdit2.is = is;
})($da6cf6b3e7e92737$var$TextDocumentEdit || ($da6cf6b3e7e92737$var$TextDocumentEdit = {}));
var $da6cf6b3e7e92737$var$CreateFile;
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
        return candidate && candidate.kind === "create" && $da6cf6b3e7e92737$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    CreateFile2.is = is;
})($da6cf6b3e7e92737$var$CreateFile || ($da6cf6b3e7e92737$var$CreateFile = {}));
var $da6cf6b3e7e92737$var$RenameFile;
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
        return candidate && candidate.kind === "rename" && $da6cf6b3e7e92737$var$Is.string(candidate.oldUri) && $da6cf6b3e7e92737$var$Is.string(candidate.newUri) && (candidate.options === void 0 || (candidate.options.overwrite === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.options.overwrite)) && (candidate.options.ignoreIfExists === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.options.ignoreIfExists))) && (candidate.annotationId === void 0 || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    RenameFile2.is = is;
})($da6cf6b3e7e92737$var$RenameFile || ($da6cf6b3e7e92737$var$RenameFile = {}));
var $da6cf6b3e7e92737$var$DeleteFile;
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
        return candidate && candidate.kind === "delete" && $da6cf6b3e7e92737$var$Is.string(candidate.uri) && (candidate.options === void 0 || (candidate.options.recursive === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.options.recursive)) && (candidate.options.ignoreIfNotExists === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.options.ignoreIfNotExists))) && (candidate.annotationId === void 0 || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(candidate.annotationId));
    }
    DeleteFile2.is = is;
})($da6cf6b3e7e92737$var$DeleteFile || ($da6cf6b3e7e92737$var$DeleteFile = {}));
var $da6cf6b3e7e92737$var$WorkspaceEdit;
(function(WorkspaceEdit2) {
    function is(value) {
        var candidate = value;
        return candidate && (candidate.changes !== void 0 || candidate.documentChanges !== void 0) && (candidate.documentChanges === void 0 || candidate.documentChanges.every(function(change) {
            if ($da6cf6b3e7e92737$var$Is.string(change.kind)) return $da6cf6b3e7e92737$var$CreateFile.is(change) || $da6cf6b3e7e92737$var$RenameFile.is(change) || $da6cf6b3e7e92737$var$DeleteFile.is(change);
            else return $da6cf6b3e7e92737$var$TextDocumentEdit.is(change);
        }));
    }
    WorkspaceEdit2.is = is;
})($da6cf6b3e7e92737$var$WorkspaceEdit || ($da6cf6b3e7e92737$var$WorkspaceEdit = {}));
var $da6cf6b3e7e92737$var$TextEditChangeImpl = function() {
    function TextEditChangeImpl2(edits, changeAnnotations) {
        this.edits = edits;
        this.changeAnnotations = changeAnnotations;
    }
    TextEditChangeImpl2.prototype.insert = function(position, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $da6cf6b3e7e92737$var$TextEdit.insert(position, newText);
        else if ($da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $da6cf6b3e7e92737$var$AnnotatedTextEdit.insert(position, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $da6cf6b3e7e92737$var$AnnotatedTextEdit.insert(position, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.replace = function(range, newText, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $da6cf6b3e7e92737$var$TextEdit.replace(range, newText);
        else if ($da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $da6cf6b3e7e92737$var$AnnotatedTextEdit.replace(range, newText, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $da6cf6b3e7e92737$var$AnnotatedTextEdit.replace(range, newText, id);
        }
        this.edits.push(edit);
        if (id !== void 0) return id;
    };
    TextEditChangeImpl2.prototype.delete = function(range, annotation) {
        var edit;
        var id;
        if (annotation === void 0) edit = $da6cf6b3e7e92737$var$TextEdit.del(range);
        else if ($da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(annotation)) {
            id = annotation;
            edit = $da6cf6b3e7e92737$var$AnnotatedTextEdit.del(range, annotation);
        } else {
            this.assertChangeAnnotations(this.changeAnnotations);
            id = this.changeAnnotations.manage(annotation);
            edit = $da6cf6b3e7e92737$var$AnnotatedTextEdit.del(range, id);
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
var $da6cf6b3e7e92737$var$ChangeAnnotations = function() {
    function ChangeAnnotations2(annotations) {
        this._annotations = annotations === void 0 ? Object.create(null) : annotations;
        this._counter = 0;
        this._size = 0;
    }
    ChangeAnnotations2.prototype.all = function() {
        return this._annotations;
    };
    Object.defineProperty(ChangeAnnotations2.prototype, "size", {
        get: function() {
            return this._size;
        },
        enumerable: false,
        configurable: true
    });
    ChangeAnnotations2.prototype.manage = function(idOrAnnotation, annotation) {
        var id;
        if ($da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(idOrAnnotation)) id = idOrAnnotation;
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
var $da6cf6b3e7e92737$var$WorkspaceChange = function() {
    function WorkspaceChange2(workspaceEdit) {
        var _this = this;
        this._textEditChanges = Object.create(null);
        if (workspaceEdit !== void 0) {
            this._workspaceEdit = workspaceEdit;
            if (workspaceEdit.documentChanges) {
                this._changeAnnotations = new $da6cf6b3e7e92737$var$ChangeAnnotations(workspaceEdit.changeAnnotations);
                workspaceEdit.changeAnnotations = this._changeAnnotations.all();
                workspaceEdit.documentChanges.forEach(function(change) {
                    if ($da6cf6b3e7e92737$var$TextDocumentEdit.is(change)) {
                        var textEditChange = new $da6cf6b3e7e92737$var$TextEditChangeImpl(change.edits, _this._changeAnnotations);
                        _this._textEditChanges[change.textDocument.uri] = textEditChange;
                    }
                });
            } else if (workspaceEdit.changes) Object.keys(workspaceEdit.changes).forEach(function(key) {
                var textEditChange = new $da6cf6b3e7e92737$var$TextEditChangeImpl(workspaceEdit.changes[key]);
                _this._textEditChanges[key] = textEditChange;
            });
        } else this._workspaceEdit = {};
    }
    Object.defineProperty(WorkspaceChange2.prototype, "edit", {
        get: function() {
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
        if ($da6cf6b3e7e92737$var$OptionalVersionedTextDocumentIdentifier.is(key)) {
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
                result = new $da6cf6b3e7e92737$var$TextEditChangeImpl(edits, this._changeAnnotations);
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
                result = new $da6cf6b3e7e92737$var$TextEditChangeImpl(edits);
                this._textEditChanges[key] = result;
            }
            return result;
        }
    };
    WorkspaceChange2.prototype.initDocumentChanges = function() {
        if (this._workspaceEdit.documentChanges === void 0 && this._workspaceEdit.changes === void 0) {
            this._changeAnnotations = new $da6cf6b3e7e92737$var$ChangeAnnotations();
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
        if ($da6cf6b3e7e92737$var$ChangeAnnotation.is(optionsOrAnnotation) || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $da6cf6b3e7e92737$var$CreateFile.create(uri, options);
        else {
            id = $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $da6cf6b3e7e92737$var$CreateFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.renameFile = function(oldUri, newUri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($da6cf6b3e7e92737$var$ChangeAnnotation.is(optionsOrAnnotation) || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $da6cf6b3e7e92737$var$RenameFile.create(oldUri, newUri, options);
        else {
            id = $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $da6cf6b3e7e92737$var$RenameFile.create(oldUri, newUri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    WorkspaceChange2.prototype.deleteFile = function(uri, optionsOrAnnotation, options) {
        this.initDocumentChanges();
        if (this._workspaceEdit.documentChanges === void 0) throw new Error("Workspace edit is not configured for document changes.");
        var annotation;
        if ($da6cf6b3e7e92737$var$ChangeAnnotation.is(optionsOrAnnotation) || $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(optionsOrAnnotation)) annotation = optionsOrAnnotation;
        else options = optionsOrAnnotation;
        var operation;
        var id;
        if (annotation === void 0) operation = $da6cf6b3e7e92737$var$DeleteFile.create(uri, options);
        else {
            id = $da6cf6b3e7e92737$var$ChangeAnnotationIdentifier.is(annotation) ? annotation : this._changeAnnotations.manage(annotation);
            operation = $da6cf6b3e7e92737$var$DeleteFile.create(uri, options, id);
        }
        this._workspaceEdit.documentChanges.push(operation);
        if (id !== void 0) return id;
    };
    return WorkspaceChange2;
}();
var $da6cf6b3e7e92737$var$TextDocumentIdentifier;
(function(TextDocumentIdentifier2) {
    function create(uri) {
        return {
            uri: uri
        };
    }
    TextDocumentIdentifier2.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.uri);
    }
    TextDocumentIdentifier2.is = is;
})($da6cf6b3e7e92737$var$TextDocumentIdentifier || ($da6cf6b3e7e92737$var$TextDocumentIdentifier = {}));
var $da6cf6b3e7e92737$var$VersionedTextDocumentIdentifier;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.uri) && $da6cf6b3e7e92737$var$Is.integer(candidate.version);
    }
    VersionedTextDocumentIdentifier2.is = is;
})($da6cf6b3e7e92737$var$VersionedTextDocumentIdentifier || ($da6cf6b3e7e92737$var$VersionedTextDocumentIdentifier = {}));
var $da6cf6b3e7e92737$var$OptionalVersionedTextDocumentIdentifier;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.uri) && (candidate.version === null || $da6cf6b3e7e92737$var$Is.integer(candidate.version));
    }
    OptionalVersionedTextDocumentIdentifier2.is = is;
})($da6cf6b3e7e92737$var$OptionalVersionedTextDocumentIdentifier || ($da6cf6b3e7e92737$var$OptionalVersionedTextDocumentIdentifier = {}));
var $da6cf6b3e7e92737$var$TextDocumentItem;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.uri) && $da6cf6b3e7e92737$var$Is.string(candidate.languageId) && $da6cf6b3e7e92737$var$Is.integer(candidate.version) && $da6cf6b3e7e92737$var$Is.string(candidate.text);
    }
    TextDocumentItem2.is = is;
})($da6cf6b3e7e92737$var$TextDocumentItem || ($da6cf6b3e7e92737$var$TextDocumentItem = {}));
var $da6cf6b3e7e92737$var$MarkupKind;
(function(MarkupKind2) {
    MarkupKind2.PlainText = "plaintext";
    MarkupKind2.Markdown = "markdown";
})($da6cf6b3e7e92737$var$MarkupKind || ($da6cf6b3e7e92737$var$MarkupKind = {}));
(function(MarkupKind2) {
    function is(value) {
        var candidate = value;
        return candidate === MarkupKind2.PlainText || candidate === MarkupKind2.Markdown;
    }
    MarkupKind2.is = is;
})($da6cf6b3e7e92737$var$MarkupKind || ($da6cf6b3e7e92737$var$MarkupKind = {}));
var $da6cf6b3e7e92737$var$MarkupContent;
(function(MarkupContent2) {
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.objectLiteral(value) && $da6cf6b3e7e92737$var$MarkupKind.is(candidate.kind) && $da6cf6b3e7e92737$var$Is.string(candidate.value);
    }
    MarkupContent2.is = is;
})($da6cf6b3e7e92737$var$MarkupContent || ($da6cf6b3e7e92737$var$MarkupContent = {}));
var $da6cf6b3e7e92737$var$CompletionItemKind;
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
})($da6cf6b3e7e92737$var$CompletionItemKind || ($da6cf6b3e7e92737$var$CompletionItemKind = {}));
var $da6cf6b3e7e92737$var$InsertTextFormat;
(function(InsertTextFormat2) {
    InsertTextFormat2.PlainText = 1;
    InsertTextFormat2.Snippet = 2;
})($da6cf6b3e7e92737$var$InsertTextFormat || ($da6cf6b3e7e92737$var$InsertTextFormat = {}));
var $da6cf6b3e7e92737$var$CompletionItemTag;
(function(CompletionItemTag2) {
    CompletionItemTag2.Deprecated = 1;
})($da6cf6b3e7e92737$var$CompletionItemTag || ($da6cf6b3e7e92737$var$CompletionItemTag = {}));
var $da6cf6b3e7e92737$var$InsertReplaceEdit;
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
        return candidate && $da6cf6b3e7e92737$var$Is.string(candidate.newText) && $da6cf6b3e7e92737$var$Range.is(candidate.insert) && $da6cf6b3e7e92737$var$Range.is(candidate.replace);
    }
    InsertReplaceEdit2.is = is;
})($da6cf6b3e7e92737$var$InsertReplaceEdit || ($da6cf6b3e7e92737$var$InsertReplaceEdit = {}));
var $da6cf6b3e7e92737$var$InsertTextMode;
(function(InsertTextMode2) {
    InsertTextMode2.asIs = 1;
    InsertTextMode2.adjustIndentation = 2;
})($da6cf6b3e7e92737$var$InsertTextMode || ($da6cf6b3e7e92737$var$InsertTextMode = {}));
var $da6cf6b3e7e92737$var$CompletionItem;
(function(CompletionItem2) {
    function create(label) {
        return {
            label: label
        };
    }
    CompletionItem2.create = create;
})($da6cf6b3e7e92737$var$CompletionItem || ($da6cf6b3e7e92737$var$CompletionItem = {}));
var $da6cf6b3e7e92737$var$CompletionList;
(function(CompletionList2) {
    function create(items, isIncomplete) {
        return {
            items: items ? items : [],
            isIncomplete: !!isIncomplete
        };
    }
    CompletionList2.create = create;
})($da6cf6b3e7e92737$var$CompletionList || ($da6cf6b3e7e92737$var$CompletionList = {}));
var $da6cf6b3e7e92737$var$MarkedString;
(function(MarkedString2) {
    function fromPlainText(plainText) {
        return plainText.replace(/[\\`*_{}[\]()#+\-.!]/g, "\\$&");
    }
    MarkedString2.fromPlainText = fromPlainText;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.string(candidate) || $da6cf6b3e7e92737$var$Is.objectLiteral(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.language) && $da6cf6b3e7e92737$var$Is.string(candidate.value);
    }
    MarkedString2.is = is;
})($da6cf6b3e7e92737$var$MarkedString || ($da6cf6b3e7e92737$var$MarkedString = {}));
var $da6cf6b3e7e92737$var$Hover;
(function(Hover2) {
    function is(value) {
        var candidate = value;
        return !!candidate && $da6cf6b3e7e92737$var$Is.objectLiteral(candidate) && ($da6cf6b3e7e92737$var$MarkupContent.is(candidate.contents) || $da6cf6b3e7e92737$var$MarkedString.is(candidate.contents) || $da6cf6b3e7e92737$var$Is.typedArray(candidate.contents, $da6cf6b3e7e92737$var$MarkedString.is)) && (value.range === void 0 || $da6cf6b3e7e92737$var$Range.is(value.range));
    }
    Hover2.is = is;
})($da6cf6b3e7e92737$var$Hover || ($da6cf6b3e7e92737$var$Hover = {}));
var $da6cf6b3e7e92737$var$ParameterInformation;
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
})($da6cf6b3e7e92737$var$ParameterInformation || ($da6cf6b3e7e92737$var$ParameterInformation = {}));
var $da6cf6b3e7e92737$var$SignatureInformation;
(function(SignatureInformation2) {
    function create(label, documentation) {
        var parameters = [];
        for(var _i = 2; _i < arguments.length; _i++)parameters[_i - 2] = arguments[_i];
        var result = {
            label: label
        };
        if ($da6cf6b3e7e92737$var$Is.defined(documentation)) result.documentation = documentation;
        if ($da6cf6b3e7e92737$var$Is.defined(parameters)) result.parameters = parameters;
        else result.parameters = [];
        return result;
    }
    SignatureInformation2.create = create;
})($da6cf6b3e7e92737$var$SignatureInformation || ($da6cf6b3e7e92737$var$SignatureInformation = {}));
var $da6cf6b3e7e92737$var$DocumentHighlightKind;
(function(DocumentHighlightKind2) {
    DocumentHighlightKind2.Text = 1;
    DocumentHighlightKind2.Read = 2;
    DocumentHighlightKind2.Write = 3;
})($da6cf6b3e7e92737$var$DocumentHighlightKind || ($da6cf6b3e7e92737$var$DocumentHighlightKind = {}));
var $da6cf6b3e7e92737$var$DocumentHighlight;
(function(DocumentHighlight2) {
    function create(range, kind) {
        var result = {
            range: range
        };
        if ($da6cf6b3e7e92737$var$Is.number(kind)) result.kind = kind;
        return result;
    }
    DocumentHighlight2.create = create;
})($da6cf6b3e7e92737$var$DocumentHighlight || ($da6cf6b3e7e92737$var$DocumentHighlight = {}));
var $da6cf6b3e7e92737$var$SymbolKind;
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
})($da6cf6b3e7e92737$var$SymbolKind || ($da6cf6b3e7e92737$var$SymbolKind = {}));
var $da6cf6b3e7e92737$var$SymbolTag;
(function(SymbolTag2) {
    SymbolTag2.Deprecated = 1;
})($da6cf6b3e7e92737$var$SymbolTag || ($da6cf6b3e7e92737$var$SymbolTag = {}));
var $da6cf6b3e7e92737$var$SymbolInformation;
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
})($da6cf6b3e7e92737$var$SymbolInformation || ($da6cf6b3e7e92737$var$SymbolInformation = {}));
var $da6cf6b3e7e92737$var$DocumentSymbol;
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
        return candidate && $da6cf6b3e7e92737$var$Is.string(candidate.name) && $da6cf6b3e7e92737$var$Is.number(candidate.kind) && $da6cf6b3e7e92737$var$Range.is(candidate.range) && $da6cf6b3e7e92737$var$Range.is(candidate.selectionRange) && (candidate.detail === void 0 || $da6cf6b3e7e92737$var$Is.string(candidate.detail)) && (candidate.deprecated === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.deprecated)) && (candidate.children === void 0 || Array.isArray(candidate.children)) && (candidate.tags === void 0 || Array.isArray(candidate.tags));
    }
    DocumentSymbol2.is = is;
})($da6cf6b3e7e92737$var$DocumentSymbol || ($da6cf6b3e7e92737$var$DocumentSymbol = {}));
var $da6cf6b3e7e92737$var$CodeActionKind;
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
})($da6cf6b3e7e92737$var$CodeActionKind || ($da6cf6b3e7e92737$var$CodeActionKind = {}));
var $da6cf6b3e7e92737$var$CodeActionContext;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.typedArray(candidate.diagnostics, $da6cf6b3e7e92737$var$Diagnostic.is) && (candidate.only === void 0 || $da6cf6b3e7e92737$var$Is.typedArray(candidate.only, $da6cf6b3e7e92737$var$Is.string));
    }
    CodeActionContext2.is = is;
})($da6cf6b3e7e92737$var$CodeActionContext || ($da6cf6b3e7e92737$var$CodeActionContext = {}));
var $da6cf6b3e7e92737$var$CodeAction;
(function(CodeAction2) {
    function create(title, kindOrCommandOrEdit, kind) {
        var result = {
            title: title
        };
        var checkKind = true;
        if (typeof kindOrCommandOrEdit === "string") {
            checkKind = false;
            result.kind = kindOrCommandOrEdit;
        } else if ($da6cf6b3e7e92737$var$Command.is(kindOrCommandOrEdit)) result.command = kindOrCommandOrEdit;
        else result.edit = kindOrCommandOrEdit;
        if (checkKind && kind !== void 0) result.kind = kind;
        return result;
    }
    CodeAction2.create = create;
    function is(value) {
        var candidate = value;
        return candidate && $da6cf6b3e7e92737$var$Is.string(candidate.title) && (candidate.diagnostics === void 0 || $da6cf6b3e7e92737$var$Is.typedArray(candidate.diagnostics, $da6cf6b3e7e92737$var$Diagnostic.is)) && (candidate.kind === void 0 || $da6cf6b3e7e92737$var$Is.string(candidate.kind)) && (candidate.edit !== void 0 || candidate.command !== void 0) && (candidate.command === void 0 || $da6cf6b3e7e92737$var$Command.is(candidate.command)) && (candidate.isPreferred === void 0 || $da6cf6b3e7e92737$var$Is.boolean(candidate.isPreferred)) && (candidate.edit === void 0 || $da6cf6b3e7e92737$var$WorkspaceEdit.is(candidate.edit));
    }
    CodeAction2.is = is;
})($da6cf6b3e7e92737$var$CodeAction || ($da6cf6b3e7e92737$var$CodeAction = {}));
var $da6cf6b3e7e92737$var$CodeLens;
(function(CodeLens2) {
    function create(range, data) {
        var result = {
            range: range
        };
        if ($da6cf6b3e7e92737$var$Is.defined(data)) result.data = data;
        return result;
    }
    CodeLens2.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Range.is(candidate.range) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.command) || $da6cf6b3e7e92737$var$Command.is(candidate.command));
    }
    CodeLens2.is = is;
})($da6cf6b3e7e92737$var$CodeLens || ($da6cf6b3e7e92737$var$CodeLens = {}));
var $da6cf6b3e7e92737$var$FormattingOptions;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.uinteger(candidate.tabSize) && $da6cf6b3e7e92737$var$Is.boolean(candidate.insertSpaces);
    }
    FormattingOptions2.is = is;
})($da6cf6b3e7e92737$var$FormattingOptions || ($da6cf6b3e7e92737$var$FormattingOptions = {}));
var $da6cf6b3e7e92737$var$DocumentLink;
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
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Range.is(candidate.range) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.target) || $da6cf6b3e7e92737$var$Is.string(candidate.target));
    }
    DocumentLink2.is = is;
})($da6cf6b3e7e92737$var$DocumentLink || ($da6cf6b3e7e92737$var$DocumentLink = {}));
var $da6cf6b3e7e92737$var$SelectionRange;
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
        return candidate !== void 0 && $da6cf6b3e7e92737$var$Range.is(candidate.range) && (candidate.parent === void 0 || SelectionRange2.is(candidate.parent));
    }
    SelectionRange2.is = is;
})($da6cf6b3e7e92737$var$SelectionRange || ($da6cf6b3e7e92737$var$SelectionRange = {}));
var $da6cf6b3e7e92737$var$TextDocument;
(function(TextDocument2) {
    function create(uri, languageId, version, content) {
        return new $da6cf6b3e7e92737$var$FullTextDocument(uri, languageId, version, content);
    }
    TextDocument2.create = create;
    function is(value) {
        var candidate = value;
        return $da6cf6b3e7e92737$var$Is.defined(candidate) && $da6cf6b3e7e92737$var$Is.string(candidate.uri) && ($da6cf6b3e7e92737$var$Is.undefined(candidate.languageId) || $da6cf6b3e7e92737$var$Is.string(candidate.languageId)) && $da6cf6b3e7e92737$var$Is.uinteger(candidate.lineCount) && $da6cf6b3e7e92737$var$Is.func(candidate.getText) && $da6cf6b3e7e92737$var$Is.func(candidate.positionAt) && $da6cf6b3e7e92737$var$Is.func(candidate.offsetAt) ? true : false;
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
})($da6cf6b3e7e92737$var$TextDocument || ($da6cf6b3e7e92737$var$TextDocument = {}));
var $da6cf6b3e7e92737$var$FullTextDocument = function() {
    function FullTextDocument2(uri, languageId, version, content) {
        this._uri = uri;
        this._languageId = languageId;
        this._version = version;
        this._content = content;
        this._lineOffsets = void 0;
    }
    Object.defineProperty(FullTextDocument2.prototype, "uri", {
        get: function() {
            return this._uri;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "languageId", {
        get: function() {
            return this._languageId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FullTextDocument2.prototype, "version", {
        get: function() {
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
        if (high === 0) return $da6cf6b3e7e92737$var$Position.create(0, offset);
        while(low < high){
            var mid = Math.floor((low + high) / 2);
            if (lineOffsets[mid] > offset) high = mid;
            else low = mid + 1;
        }
        var line = low - 1;
        return $da6cf6b3e7e92737$var$Position.create(line, offset - lineOffsets[line]);
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
        get: function() {
            return this.getLineOffsets().length;
        },
        enumerable: false,
        configurable: true
    });
    return FullTextDocument2;
}();
var $da6cf6b3e7e92737$var$Is;
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
})($da6cf6b3e7e92737$var$Is || ($da6cf6b3e7e92737$var$Is = {}));
// src/common/lspLanguageFeatures.ts
var $da6cf6b3e7e92737$var$CompletionAdapter = class {
    get triggerCharacters() {
        return this._triggerCharacters;
    }
    provideCompletionItems(model, position, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doComplete(resource.toString(), $da6cf6b3e7e92737$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            const wordInfo = model.getWordUntilPosition(position);
            const wordRange = new $da6cf6b3e7e92737$var$monaco_editor_core_exports.Range(position.lineNumber, wordInfo.startColumn, position.lineNumber, wordInfo.endColumn);
            const items = info.items.map((entry)=>{
                const item = {
                    label: entry.label,
                    insertText: entry.insertText || entry.label,
                    sortText: entry.sortText,
                    filterText: entry.filterText,
                    documentation: entry.documentation,
                    detail: entry.detail,
                    command: $da6cf6b3e7e92737$var$toCommand(entry.command),
                    range: wordRange,
                    kind: $da6cf6b3e7e92737$var$toCompletionItemKind(entry.kind)
                };
                if (entry.textEdit) {
                    if ($da6cf6b3e7e92737$var$isInsertReplaceEdit(entry.textEdit)) item.range = {
                        insert: $da6cf6b3e7e92737$var$toRange(entry.textEdit.insert),
                        replace: $da6cf6b3e7e92737$var$toRange(entry.textEdit.replace)
                    };
                    else item.range = $da6cf6b3e7e92737$var$toRange(entry.textEdit.range);
                    item.insertText = entry.textEdit.newText;
                }
                if (entry.additionalTextEdits) item.additionalTextEdits = entry.additionalTextEdits.map($da6cf6b3e7e92737$var$toTextEdit);
                if (entry.insertTextFormat === $da6cf6b3e7e92737$var$InsertTextFormat.Snippet) item.insertTextRules = $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.CompletionItemInsertTextRule.InsertAsSnippet;
                return item;
            });
            return {
                isIncomplete: info.isIncomplete,
                suggestions: items
            };
        });
    }
    constructor(_worker, _triggerCharacters){
        this._worker = _worker;
        this._triggerCharacters = _triggerCharacters;
    }
};
function $da6cf6b3e7e92737$var$fromPosition(position) {
    if (!position) return void 0;
    return {
        character: position.column - 1,
        line: position.lineNumber - 1
    };
}
function $da6cf6b3e7e92737$var$fromRange(range) {
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
function $da6cf6b3e7e92737$var$toRange(range) {
    if (!range) return void 0;
    return new $da6cf6b3e7e92737$var$monaco_editor_core_exports.Range(range.start.line + 1, range.start.character + 1, range.end.line + 1, range.end.character + 1);
}
function $da6cf6b3e7e92737$var$isInsertReplaceEdit(edit) {
    return typeof edit.insert !== "undefined" && typeof edit.replace !== "undefined";
}
function $da6cf6b3e7e92737$var$toCompletionItemKind(kind) {
    const mItemKind = $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.CompletionItemKind;
    switch(kind){
        case $da6cf6b3e7e92737$var$CompletionItemKind.Text:
            return mItemKind.Text;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Method:
            return mItemKind.Method;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Function:
            return mItemKind.Function;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Constructor:
            return mItemKind.Constructor;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Field:
            return mItemKind.Field;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Variable:
            return mItemKind.Variable;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Class:
            return mItemKind.Class;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Interface:
            return mItemKind.Interface;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Module:
            return mItemKind.Module;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Property:
            return mItemKind.Property;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Unit:
            return mItemKind.Unit;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Value:
            return mItemKind.Value;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Enum:
            return mItemKind.Enum;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Keyword:
            return mItemKind.Keyword;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Snippet:
            return mItemKind.Snippet;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Color:
            return mItemKind.Color;
        case $da6cf6b3e7e92737$var$CompletionItemKind.File:
            return mItemKind.File;
        case $da6cf6b3e7e92737$var$CompletionItemKind.Reference:
            return mItemKind.Reference;
    }
    return mItemKind.Property;
}
function $da6cf6b3e7e92737$var$toTextEdit(textEdit) {
    if (!textEdit) return void 0;
    return {
        range: $da6cf6b3e7e92737$var$toRange(textEdit.range),
        text: textEdit.newText
    };
}
function $da6cf6b3e7e92737$var$toCommand(c) {
    return c && c.command === "editor.action.triggerSuggest" ? {
        id: c.command,
        title: c.title,
        arguments: c.arguments
    } : void 0;
}
var $da6cf6b3e7e92737$var$HoverAdapter = class {
    provideHover(model, position, token) {
        let resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doHover(resource.toString(), $da6cf6b3e7e92737$var$fromPosition(position));
        }).then((info)=>{
            if (!info) return;
            return {
                range: $da6cf6b3e7e92737$var$toRange(info.range),
                contents: $da6cf6b3e7e92737$var$toMarkedStringArray(info.contents)
            };
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $da6cf6b3e7e92737$var$isMarkupContent(thing) {
    return thing && typeof thing === "object" && typeof thing.kind === "string";
}
function $da6cf6b3e7e92737$var$toMarkdownString(entry) {
    if (typeof entry === "string") return {
        value: entry
    };
    if ($da6cf6b3e7e92737$var$isMarkupContent(entry)) {
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
function $da6cf6b3e7e92737$var$toMarkedStringArray(contents) {
    if (!contents) return void 0;
    if (Array.isArray(contents)) return contents.map($da6cf6b3e7e92737$var$toMarkdownString);
    return [
        $da6cf6b3e7e92737$var$toMarkdownString(contents)
    ];
}
var $da6cf6b3e7e92737$var$DocumentHighlightAdapter = class {
    provideDocumentHighlights(model, position, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentHighlights(resource.toString(), $da6cf6b3e7e92737$var$fromPosition(position))
        ).then((entries)=>{
            if (!entries) return;
            return entries.map((entry)=>{
                return {
                    range: $da6cf6b3e7e92737$var$toRange(entry.range),
                    kind: $da6cf6b3e7e92737$var$toDocumentHighlightKind(entry.kind)
                };
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $da6cf6b3e7e92737$var$toDocumentHighlightKind(kind) {
    switch(kind){
        case $da6cf6b3e7e92737$var$DocumentHighlightKind.Read:
            return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Read;
        case $da6cf6b3e7e92737$var$DocumentHighlightKind.Write:
            return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Write;
        case $da6cf6b3e7e92737$var$DocumentHighlightKind.Text:
            return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
    }
    return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.DocumentHighlightKind.Text;
}
var $da6cf6b3e7e92737$var$RenameAdapter = class {
    provideRenameEdits(model, position, newName, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.doRename(resource.toString(), $da6cf6b3e7e92737$var$fromPosition(position), newName);
        }).then((edit)=>{
            return $da6cf6b3e7e92737$var$toWorkspaceEdit(edit);
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $da6cf6b3e7e92737$var$toWorkspaceEdit(edit) {
    if (!edit || !edit.changes) return void 0;
    let resourceEdits = [];
    for(let uri in edit.changes){
        const _uri = $da6cf6b3e7e92737$var$monaco_editor_core_exports.Uri.parse(uri);
        for (let e of edit.changes[uri])resourceEdits.push({
            resource: _uri,
            edit: {
                range: $da6cf6b3e7e92737$var$toRange(e.range),
                text: e.newText
            }
        });
    }
    return {
        edits: resourceEdits
    };
}
var $da6cf6b3e7e92737$var$DocumentSymbolAdapter = class {
    provideDocumentSymbols(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentSymbols(resource.toString())
        ).then((items)=>{
            if (!items) return;
            return items.map((item)=>({
                    name: item.name,
                    detail: "",
                    containerName: item.containerName,
                    kind: $da6cf6b3e7e92737$var$toSymbolKind(item.kind),
                    range: $da6cf6b3e7e92737$var$toRange(item.location.range),
                    selectionRange: $da6cf6b3e7e92737$var$toRange(item.location.range),
                    tags: []
                })
            );
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $da6cf6b3e7e92737$var$toSymbolKind(kind) {
    let mKind = $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.SymbolKind;
    switch(kind){
        case $da6cf6b3e7e92737$var$SymbolKind.File:
            return mKind.Array;
        case $da6cf6b3e7e92737$var$SymbolKind.Module:
            return mKind.Module;
        case $da6cf6b3e7e92737$var$SymbolKind.Namespace:
            return mKind.Namespace;
        case $da6cf6b3e7e92737$var$SymbolKind.Package:
            return mKind.Package;
        case $da6cf6b3e7e92737$var$SymbolKind.Class:
            return mKind.Class;
        case $da6cf6b3e7e92737$var$SymbolKind.Method:
            return mKind.Method;
        case $da6cf6b3e7e92737$var$SymbolKind.Property:
            return mKind.Property;
        case $da6cf6b3e7e92737$var$SymbolKind.Field:
            return mKind.Field;
        case $da6cf6b3e7e92737$var$SymbolKind.Constructor:
            return mKind.Constructor;
        case $da6cf6b3e7e92737$var$SymbolKind.Enum:
            return mKind.Enum;
        case $da6cf6b3e7e92737$var$SymbolKind.Interface:
            return mKind.Interface;
        case $da6cf6b3e7e92737$var$SymbolKind.Function:
            return mKind.Function;
        case $da6cf6b3e7e92737$var$SymbolKind.Variable:
            return mKind.Variable;
        case $da6cf6b3e7e92737$var$SymbolKind.Constant:
            return mKind.Constant;
        case $da6cf6b3e7e92737$var$SymbolKind.String:
            return mKind.String;
        case $da6cf6b3e7e92737$var$SymbolKind.Number:
            return mKind.Number;
        case $da6cf6b3e7e92737$var$SymbolKind.Boolean:
            return mKind.Boolean;
        case $da6cf6b3e7e92737$var$SymbolKind.Array:
            return mKind.Array;
    }
    return mKind.Function;
}
var $da6cf6b3e7e92737$var$DocumentLinkAdapter = class {
    provideLinks(model, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.findDocumentLinks(resource.toString())
        ).then((items)=>{
            if (!items) return;
            return {
                links: items.map((item)=>({
                        range: $da6cf6b3e7e92737$var$toRange(item.range),
                        url: item.target
                    })
                )
            };
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $da6cf6b3e7e92737$var$DocumentFormattingEditProvider = class {
    provideDocumentFormattingEdits(model, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), null, $da6cf6b3e7e92737$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($da6cf6b3e7e92737$var$toTextEdit);
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
var $da6cf6b3e7e92737$var$DocumentRangeFormattingEditProvider = class {
    provideDocumentRangeFormattingEdits(model, range, options, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>{
            return worker.format(resource.toString(), $da6cf6b3e7e92737$var$fromRange(range), $da6cf6b3e7e92737$var$fromFormattingOptions(options)).then((edits)=>{
                if (!edits || edits.length === 0) return;
                return edits.map($da6cf6b3e7e92737$var$toTextEdit);
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $da6cf6b3e7e92737$var$fromFormattingOptions(options) {
    return {
        tabSize: options.tabSize,
        insertSpaces: options.insertSpaces
    };
}
var $da6cf6b3e7e92737$var$FoldingRangeAdapter = class {
    provideFoldingRanges(model, context, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getFoldingRanges(resource.toString(), context)
        ).then((ranges)=>{
            if (!ranges) return;
            return ranges.map((range)=>{
                const result = {
                    start: range.startLine + 1,
                    end: range.endLine + 1
                };
                if (typeof range.kind !== "undefined") result.kind = $da6cf6b3e7e92737$var$toFoldingRangeKind(range.kind);
                return result;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
function $da6cf6b3e7e92737$var$toFoldingRangeKind(kind) {
    switch(kind){
        case $da6cf6b3e7e92737$var$FoldingRangeKind.Comment:
            return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.FoldingRangeKind.Comment;
        case $da6cf6b3e7e92737$var$FoldingRangeKind.Imports:
            return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.FoldingRangeKind.Imports;
        case $da6cf6b3e7e92737$var$FoldingRangeKind.Region:
            return $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.FoldingRangeKind.Region;
    }
    return void 0;
}
var $da6cf6b3e7e92737$var$SelectionRangeAdapter = class {
    provideSelectionRanges(model, positions, token) {
        const resource = model.uri;
        return this._worker(resource).then((worker)=>worker.getSelectionRanges(resource.toString(), positions.map($da6cf6b3e7e92737$var$fromPosition))
        ).then((selectionRanges)=>{
            if (!selectionRanges) return;
            return selectionRanges.map((selectionRange)=>{
                const result = [];
                while(selectionRange){
                    result.push({
                        range: $da6cf6b3e7e92737$var$toRange(selectionRange.range)
                    });
                    selectionRange = selectionRange.parent;
                }
                return result;
            });
        });
    }
    constructor(_worker){
        this._worker = _worker;
    }
};
// src/html/htmlMode.ts
var $da6cf6b3e7e92737$var$HTMLCompletionAdapter = class extends $da6cf6b3e7e92737$var$CompletionAdapter {
    constructor(worker){
        super(worker, [
            ".",
            ":",
            "<",
            '"',
            "=",
            "/"
        ]);
    }
};
function $da6cf6b3e7e92737$export$972c61cff7b1bac7(defaults) {
    const client = new $da6cf6b3e7e92737$var$WorkerManager(defaults);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    let languageId = defaults.languageId;
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $da6cf6b3e7e92737$var$HTMLCompletionAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $da6cf6b3e7e92737$var$HoverAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $da6cf6b3e7e92737$var$DocumentHighlightAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $da6cf6b3e7e92737$var$DocumentLinkAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $da6cf6b3e7e92737$var$FoldingRangeAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $da6cf6b3e7e92737$var$DocumentSymbolAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $da6cf6b3e7e92737$var$SelectionRangeAdapter(worker));
    $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $da6cf6b3e7e92737$var$RenameAdapter(worker));
    if (languageId === "html") {
        $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $da6cf6b3e7e92737$var$DocumentFormattingEditProvider(worker));
        $da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $da6cf6b3e7e92737$var$DocumentRangeFormattingEditProvider(worker));
    }
}
function $da6cf6b3e7e92737$export$6df00d141df42469(defaults) {
    const disposables = [];
    const providers = [];
    const client = new $da6cf6b3e7e92737$var$WorkerManager(defaults);
    disposables.push(client);
    const worker = (...uris)=>{
        return client.getLanguageServiceWorker(...uris);
    };
    function registerProviders() {
        const { languageId: languageId , modeConfiguration: modeConfiguration  } = defaults;
        $da6cf6b3e7e92737$var$disposeAll(providers);
        if (modeConfiguration.completionItems) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerCompletionItemProvider(languageId, new $da6cf6b3e7e92737$var$HTMLCompletionAdapter(worker)));
        if (modeConfiguration.hovers) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerHoverProvider(languageId, new $da6cf6b3e7e92737$var$HoverAdapter(worker)));
        if (modeConfiguration.documentHighlights) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentHighlightProvider(languageId, new $da6cf6b3e7e92737$var$DocumentHighlightAdapter(worker)));
        if (modeConfiguration.links) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerLinkProvider(languageId, new $da6cf6b3e7e92737$var$DocumentLinkAdapter(worker)));
        if (modeConfiguration.documentSymbols) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentSymbolProvider(languageId, new $da6cf6b3e7e92737$var$DocumentSymbolAdapter(worker)));
        if (modeConfiguration.rename) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerRenameProvider(languageId, new $da6cf6b3e7e92737$var$RenameAdapter(worker)));
        if (modeConfiguration.foldingRanges) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerFoldingRangeProvider(languageId, new $da6cf6b3e7e92737$var$FoldingRangeAdapter(worker)));
        if (modeConfiguration.selectionRanges) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerSelectionRangeProvider(languageId, new $da6cf6b3e7e92737$var$SelectionRangeAdapter(worker)));
        if (modeConfiguration.documentFormattingEdits) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentFormattingEditProvider(languageId, new $da6cf6b3e7e92737$var$DocumentFormattingEditProvider(worker)));
        if (modeConfiguration.documentRangeFormattingEdits) providers.push($da6cf6b3e7e92737$var$monaco_editor_core_exports.languages.registerDocumentRangeFormattingEditProvider(languageId, new $da6cf6b3e7e92737$var$DocumentRangeFormattingEditProvider(worker)));
    }
    registerProviders();
    disposables.push($da6cf6b3e7e92737$var$asDisposable(providers));
    return $da6cf6b3e7e92737$var$asDisposable(disposables);
}
function $da6cf6b3e7e92737$var$asDisposable(disposables) {
    return {
        dispose: ()=>$da6cf6b3e7e92737$var$disposeAll(disposables)
    };
}
function $da6cf6b3e7e92737$var$disposeAll(disposables) {
    while(disposables.length)disposables.pop().dispose();
}

});


//# sourceMappingURL=htmlMode.eb89fc45.js.map