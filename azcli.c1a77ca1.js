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
parcelRequire.register("ks5t2", function(module, exports) {

$parcel$export(module.exports, "conf", function () { return $ee3aa9e36a852c00$export$c83be1687c028fc9; });
$parcel$export(module.exports, "language", function () { return $ee3aa9e36a852c00$export$789c912f57fe164c; });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.31.1(337587859b1c171314b40503171188b6cea6a32a)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/ // src/basic-languages/azcli/azcli.ts
var $ee3aa9e36a852c00$export$c83be1687c028fc9 = {
    comments: {
        lineComment: "#"
    }
};
var $ee3aa9e36a852c00$export$789c912f57fe164c = {
    defaultToken: "keyword",
    ignoreCase: true,
    tokenPostfix: ".azcli",
    str: /[^#\s]/,
    tokenizer: {
        root: [
            {
                include: "@comment"
            },
            [
                /\s-+@str*\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "key.identifier",
                            next: "@popall"
                        },
                        "@default": {
                            token: "key.identifier",
                            next: "@type"
                        }
                    }
                }
            ],
            [
                /^-+@str*\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "key.identifier",
                            next: "@popall"
                        },
                        "@default": {
                            token: "key.identifier",
                            next: "@type"
                        }
                    }
                }
            ]
        ],
        type: [
            {
                include: "@comment"
            },
            [
                /-+@str*\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "key.identifier",
                            next: "@popall"
                        },
                        "@default": "key.identifier"
                    }
                }
            ],
            [
                /@str+\s*/,
                {
                    cases: {
                        "@eos": {
                            token: "string",
                            next: "@popall"
                        },
                        "@default": "string"
                    }
                }
            ]
        ],
        comment: [
            [
                /#.*$/,
                {
                    cases: {
                        "@eos": {
                            token: "comment",
                            next: "@popall"
                        }
                    }
                }
            ]
        ]
    }
};

});

})();
//# sourceMappingURL=azcli.c1a77ca1.js.map
