(function e(t, n) {
    if (typeof exports === "object" && typeof module === "object")
        module.exports = n();
    else if (typeof define === "function" && define.amd)
        define([], n);
    else {
        var i = n();
        for (var r in i)
            (typeof exports === "object" ? exports : t)[r] = i[r]
    }
}
)(window, function() {
    return function(n) {
        var i = {};
        function r(e) {
            if (i[e]) {
                return i[e].exports
            }
            var t = i[e] = {
                i: e,
                l: false,
                exports: {}
            };
            n[e].call(t.exports, t, t.exports, r);
            t.l = true;
            return t.exports
        }
        r.m = n;
        r.c = i;
        r.d = function(e, t, n) {
            if (!r.o(e, t)) {
                Object.defineProperty(e, t, {
                    enumerable: true,
                    get: n
                })
            }
        }
        ;
        r.r = function(e) {
            if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                })
            }
            Object.defineProperty(e, "__esModule", {
                value: true
            })
        }
        ;
        r.t = function(t, e) {
            if (e & 1)
                t = r(t);
            if (e & 8)
                return t;
            if (e & 4 && typeof t === "object" && t && t.__esModule)
                return t;
            var n = Object.create(null);
            r.r(n);
            Object.defineProperty(n, "default", {
                enumerable: true,
                value: t
            });
            if (e & 2 && typeof t != "string")
                for (var i in t)
                    r.d(n, i, function(e) {
                        return t[e]
                    }
                    .bind(null, i));
            return n
        }
        ;
        r.n = function(t) {
            var e = t && t.__esModule ? function e() {
                return t["default"]
            }
            : function e() {
                return t
            }
            ;
            r.d(e, "a", e);
            return e
        }
        ;
        r.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        ;
        r.p = "";
        return r(r.s = 3)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            function e() {
                r(this, e);
                this._keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
            i(e, [{
                key: "$",
                value: function e(t) {
                    var n = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
                    var i = /^(?:\s*(<[\w\W]+>)[^>]*|.([\w-]*))$/;
                    if (n.test(t)) {
                        var r = n.exec(t);
                        return document.getElementById(r[2])
                    } else if (i.test(t)) {
                        var a = i.exec(t);
                        var o = document.getElementsByTagName("*");
                        var s = [];
                        for (var l = 0, u = o.length; l < u; l++) {
                            if (o[l].className.match(new RegExp("(\\s|^)" + a[2] + "(\\s|$)"))) {
                                s.push(o[l])
                            }
                        }
                        return s
                    }
                }
            }, {
                key: "dateFormat",
                value: function e(t, n) {
                    var i = {
                        "M+": t.getMonth() + 1,
                        "d+": t.getDate(),
                        "h+": t.getHours(),
                        "m+": t.getMinutes(),
                        "s+": t.getSeconds(),
                        "q+": Math.floor((t.getMonth() + 3) / 3),
                        S: t.getMilliseconds()
                    };
                    if (/(y+)/.test(n)) {
                        n = n.replace(RegExp.$1, (t.getFullYear() + "").substr(4 - RegExp.$1.length))
                    }
                    for (var r in i) {
                        if (new RegExp("(" + r + ")").test(n)) {
                            n = n.replace(RegExp.$1, RegExp.$1.length === 1 ? i[r] : ("00" + i[r]).substr(("" + i[r]).length))
                        }
                    }
                    return n
                }
            }, {
                key: "downloadFile",
                value: function e(t, n) {
                    var i = t;
                    if (!(t instanceof Blob || t instanceof File)) {
                        i = new Blob([t])
                    }
                    var r = window.URL.createObjectURL(i);
                    var a = window.document.createElement("a");
                    a.href = r;
                    a.download = n;
                    var o = document.createEvent("MouseEvents");
                    o.initEvent("click", true, true);
                    a.dispatchEvent(o)
                }
            }, {
                key: "createxmlDoc",
                value: function e() {
                    var t;
                    var n = ["MSXML2.DOMDocument", "MSXML2.DOMDocument.5.0", "MSXML2.DOMDocument.4.0", "MSXML2.DOMDocument.3.0", "Microsoft.XmlDom"];
                    for (var i = 0, r = n.length; i < r; i++) {
                        try {
                            t = new ActiveXObject(n[i]);
                            break
                        } catch (e) {
                            t = document.implementation.createDocument("", "", null);
                            break
                        }
                    }
                    t.async = "false";
                    return t
                }
            }, {
                key: "parseXmlFromStr",
                value: function e(t) {
                    if (null === t || "" === t) {
                        return null
                    }
                    var n = this.createxmlDoc();
                    if (navigator.appName === "Netscape" || navigator.appName === "Opera") {
                        var i = new DOMParser;
                        n = i.parseFromString(t, "text/xml")
                    } else {
                        n.loadXML(t)
                    }
                    return n
                }
            }, {
                key: "encode",
                value: function e(t) {
                    var n = "";
                    var i;
                    var r;
                    var a;
                    var o;
                    var s;
                    var l;
                    var u;
                    var f = 0;
                    t = this._utf8_encode(t);
                    while (f < t.length) {
                        i = t.charCodeAt(f++);
                        r = t.charCodeAt(f++);
                        a = t.charCodeAt(f++);
                        o = i >> 2;
                        s = (i & 3) << 4 | r >> 4;
                        l = (r & 15) << 2 | a >> 6;
                        u = a & 63;
                        if (isNaN(r)) {
                            l = u = 64
                        } else if (isNaN(a)) {
                            u = 64
                        }
                        n = n + this._keyStr.charAt(o) + this._keyStr.charAt(s) + this._keyStr.charAt(l) + this._keyStr.charAt(u)
                    }
                    return n
                }
            }, {
                key: "decode",
                value: function e(t) {
                    var n = "";
                    var i;
                    var r;
                    var a;
                    var o;
                    var s;
                    var l;
                    var u;
                    var f = 0;
                    t = t.replace(/[^A-Za-z0-9+/=]/g, "");
                    while (f < t.length) {
                        o = this._keyStr.indexOf(t.charAt(f++));
                        s = this._keyStr.indexOf(t.charAt(f++));
                        l = this._keyStr.indexOf(t.charAt(f++));
                        u = this._keyStr.indexOf(t.charAt(f++));
                        i = o << 2 | s >> 4;
                        r = (s & 15) << 4 | l >> 2;
                        a = (l & 3) << 6 | u;
                        n = n + String.fromCharCode(i);
                        if (l !== 64) {
                            n = n + String.fromCharCode(r)
                        }
                        if (u !== 64) {
                            n = n + String.fromCharCode(a)
                        }
                    }
                    n = this._utf8_decode(n);
                    return n
                }
            }, {
                key: "_utf8_encode",
                value: function e(t) {
                    t = t.replace(/\r\n/g, "\n");
                    var n = "";
                    for (var i = 0; i < t.length; i++) {
                        var r = t.charCodeAt(i);
                        if (r < 128) {
                            n += String.fromCharCode(r)
                        } else if (r > 127 && r < 2048) {
                            n += String.fromCharCode(r >> 6 | 192);
                            n += String.fromCharCode(r & 63 | 128)
                        } else {
                            n += String.fromCharCode(r >> 12 | 224);
                            n += String.fromCharCode(r >> 6 & 63 | 128);
                            n += String.fromCharCode(r & 63 | 128)
                        }
                    }
                    return n
                }
            }, {
                key: "_utf8_decode",
                value: function e(t) {
                    var n = "";
                    var i = 0;
                    var r = 0;
                    var a = 0;
                    while (i < t.length) {
                        r = t.charCodeAt(i);
                        if (r < 128) {
                            n += String.fromCharCode(r);
                            i++
                        } else if (r > 191 && r < 224) {
                            a = t.charCodeAt(i + 1);
                            n += String.fromCharCode((r & 31) << 6 | a & 63);
                            i += 2
                        } else {
                            a = t.charCodeAt(i + 1);
                            var o = t.charCodeAt(i + 2);
                            n += String.fromCharCode((r & 15) << 12 | (a & 63) << 6 | o & 63);
                            i += 3
                        }
                    }
                    return n
                }
            }, {
                key: "isFirefox",
                value: function e() {
                    var t = false;
                    var n = navigator.userAgent.toLowerCase();
                    var i = "";
                    var r = -1;
                    if (n.match(/firefox\/([\d.]+)/)) {
                        i = n.match(/firefox\/([\d.]+)/)[1];
                        r = parseInt(i.split(".")[0], 10);
                        if (r > -1) {
                            t = true
                        }
                    }
                    return t
                }
            }, {
                key: "isSafari",
                value: function e() {
                    var t = false;
                    var n = navigator.userAgent.toLowerCase();
                    var i = "";
                    var r = -1;
                    if (n.match(/version\/([\d.]+).safari./)) {
                        i = n.match(/version\/([\d.]+).safari./)[1];
                        r = parseInt(i.split(".")[0], 10);
                        if (r > -1) {
                            t = true
                        }
                    }
                    return t
                }
            }, {
                key: "isEdge",
                value: function e() {
                    return navigator.userAgent.toLowerCase().indexOf("edge") > -1
                }
            }, {
                key: "isIOS",
                value: function e() {
                    var t = navigator.userAgent;
                    var n = !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
                    return n
                }
            }]);
            return e
        }();
        var o = t.oTool = new a
    }
    , function(nn, rn, e) {
        var an, on;
        /*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
        (function(e, t) {
            "use strict";
            if (true && typeof nn.exports === "object") {
                nn.exports = e.document ? t(e, true) : function(e) {
                    if (!e.document) {
                        throw new Error("jQuery requires a window with a document")
                    }
                    return t(e)
                }
            } else {
                t(e)
            }
        }
        )(typeof window !== "undefined" ? window : this, function(_, e) {
            "use strict";
            var t = [];
            var i = Object.getPrototypeOf;
            var s = t.slice;
            var v = t.flat ? function(e) {
                return t.flat.call(e)
            }
            : function(e) {
                return t.concat.apply([], e)
            }
            ;
            var l = t.push;
            var r = t.indexOf;
            var n = {};
            var a = n.toString;
            var m = n.hasOwnProperty;
            var o = m.toString;
            var u = o.call(Object);
            var y = {};
            var g = function e(t) {
                return typeof t === "function" && typeof t.nodeType !== "number" && typeof t.item !== "function"
            };
            var S = function e(t) {
                return t != null && t === t.window
            };
            var D = _.document;
            var f = {
                type: true,
                src: true,
                nonce: true,
                noModule: true
            };
            function b(e, t, n) {
                n = n || D;
                var i, r, a = n.createElement("script");
                a.text = e;
                if (t) {
                    for (i in f) {
                        r = t[i] || t.getAttribute && t.getAttribute(i);
                        if (r) {
                            a.setAttribute(i, r)
                        }
                    }
                }
                n.head.appendChild(a).parentNode.removeChild(a)
            }
            function w(e) {
                if (e == null) {
                    return e + ""
                }
                return typeof e === "object" || typeof e === "function" ? n[a.call(e)] || "object" : typeof e
            }
            var d = "3.6.0"
              , C = function(e, t) {
                return new C.fn.init(e,t)
            };
            C.fn = C.prototype = {
                jquery: d,
                constructor: C,
                length: 0,
                toArray: function() {
                    return s.call(this)
                },
                get: function(e) {
                    if (e == null) {
                        return s.call(this)
                    }
                    return e < 0 ? this[e + this.length] : this[e]
                },
                pushStack: function(e) {
                    var t = C.merge(this.constructor(), e);
                    t.prevObject = this;
                    return t
                },
                each: function(e) {
                    return C.each(this, e)
                },
                map: function(n) {
                    return this.pushStack(C.map(this, function(e, t) {
                        return n.call(e, t, e)
                    }))
                },
                slice: function() {
                    return this.pushStack(s.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                even: function() {
                    return this.pushStack(C.grep(this, function(e, t) {
                        return (t + 1) % 2
                    }))
                },
                odd: function() {
                    return this.pushStack(C.grep(this, function(e, t) {
                        return t % 2
                    }))
                },
                eq: function(e) {
                    var t = this.length
                      , n = +e + (e < 0 ? t : 0);
                    return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
                },
                end: function() {
                    return this.prevObject || this.constructor()
                },
                push: l,
                sort: t.sort,
                splice: t.splice
            };
            C.extend = C.fn.extend = function() {
                var e, t, n, i, r, a, o = arguments[0] || {}, s = 1, l = arguments.length, u = false;
                if (typeof o === "boolean") {
                    u = o;
                    o = arguments[s] || {};
                    s++
                }
                if (typeof o !== "object" && !g(o)) {
                    o = {}
                }
                if (s === l) {
                    o = this;
                    s--
                }
                for (; s < l; s++) {
                    if ((e = arguments[s]) != null) {
                        for (t in e) {
                            i = e[t];
                            if (t === "__proto__" || o === i) {
                                continue
                            }
                            if (u && i && (C.isPlainObject(i) || (r = Array.isArray(i)))) {
                                n = o[t];
                                if (r && !Array.isArray(n)) {
                                    a = []
                                } else if (!r && !C.isPlainObject(n)) {
                                    a = {}
                                } else {
                                    a = n
                                }
                                r = false;
                                o[t] = C.extend(u, a, i)
                            } else if (i !== undefined) {
                                o[t] = i
                            }
                        }
                    }
                }
                return o
            }
            ;
            C.extend({
                expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
                isReady: true,
                error: function(e) {
                    throw new Error(e)
                },
                noop: function() {},
                isPlainObject: function(e) {
                    var t, n;
                    if (!e || a.call(e) !== "[object Object]") {
                        return false
                    }
                    t = i(e);
                    if (!t) {
                        return true
                    }
                    n = m.call(t, "constructor") && t.constructor;
                    return typeof n === "function" && o.call(n) === u
                },
                isEmptyObject: function(e) {
                    var t;
                    for (t in e) {
                        return false
                    }
                    return true
                },
                globalEval: function(e, t, n) {
                    b(e, {
                        nonce: t && t.nonce
                    }, n)
                },
                each: function(e, t) {
                    var n, i = 0;
                    if (c(e)) {
                        n = e.length;
                        for (; i < n; i++) {
                            if (t.call(e[i], i, e[i]) === false) {
                                break
                            }
                        }
                    } else {
                        for (i in e) {
                            if (t.call(e[i], i, e[i]) === false) {
                                break
                            }
                        }
                    }
                    return e
                },
                makeArray: function(e, t) {
                    var n = t || [];
                    if (e != null) {
                        if (c(Object(e))) {
                            C.merge(n, typeof e === "string" ? [e] : e)
                        } else {
                            l.call(n, e)
                        }
                    }
                    return n
                },
                inArray: function(e, t, n) {
                    return t == null ? -1 : r.call(t, e, n)
                },
                merge: function(e, t) {
                    var n = +t.length
                      , i = 0
                      , r = e.length;
                    for (; i < n; i++) {
                        e[r++] = t[i]
                    }
                    e.length = r;
                    return e
                },
                grep: function(e, t, n) {
                    var i, r = [], a = 0, o = e.length, s = !n;
                    for (; a < o; a++) {
                        i = !t(e[a], a);
                        if (i !== s) {
                            r.push(e[a])
                        }
                    }
                    return r
                },
                map: function(e, t, n) {
                    var i, r, a = 0, o = [];
                    if (c(e)) {
                        i = e.length;
                        for (; a < i; a++) {
                            r = t(e[a], a, n);
                            if (r != null) {
                                o.push(r)
                            }
                        }
                    } else {
                        for (a in e) {
                            r = t(e[a], a, n);
                            if (r != null) {
                                o.push(r)
                            }
                        }
                    }
                    return v(o)
                },
                guid: 1,
                support: y
            });
            if (typeof Symbol === "function") {
                C.fn[Symbol.iterator] = t[Symbol.iterator]
            }
            C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
                n["[object " + t + "]"] = t.toLowerCase()
            });
            function c(e) {
                var t = !!e && "length"in e && e.length
                  , n = w(e);
                if (g(e) || S(e)) {
                    return false
                }
                return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
            }
            var h = /*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
            function(n) {
                var e, h, b, a, r, p, d, v, w, l, u, P, _, o, D, m, s, f, y, C = "sizzle" + 1 * new Date, c = n.document, T = 0, i = 0, g = le(), S = le(), M = le(), k = le(), x = function(e, t) {
                    if (e === t) {
                        u = true
                    }
                    return 0
                }, I = {}.hasOwnProperty, t = [], R = t.pop, A = t.push, E = t.push, z = t.slice, B = function(e, t) {
                    var n = 0
                      , i = e.length;
                    for (; n < i; n++) {
                        if (e[n] === t) {
                            return n
                        }
                    }
                    return -1
                }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", F = "[\\x20\\t\\r\\n\\f]", L = "(?:\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", U = "\\[" + F + "*(" + L + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + F + "*\\]", N = ":(" + L + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + U + ")*)|" + ".*" + ")\\)|)", W = new RegExp(F + "+","g"), q = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$","g"), H = new RegExp("^" + F + "*," + F + "*"), J = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"), Y = new RegExp(F + "|>"), j = new RegExp(N), V = new RegExp("^" + L + "$"), G = {
                    ID: new RegExp("^#(" + L + ")"),
                    CLASS: new RegExp("^\\.(" + L + ")"),
                    TAG: new RegExp("^(" + L + "|[*])"),
                    ATTR: new RegExp("^" + U),
                    PSEUDO: new RegExp("^" + N),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)","i"),
                    bool: new RegExp("^(?:" + O + ")$","i"),
                    needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)","i")
                }, X = /HTML$/i, K = /^(?:input|select|textarea|button)$/i, $ = /^h\d$/i, Z = /^[^{]+\{\s*\[native \w/, Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + F + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                    var n = "0x" + e.slice(1) - 65536;
                    return t ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, n & 1023 | 56320)
                }, ie = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, re = function(e, t) {
                    if (t) {
                        if (e === "\0") {
                            return "�"
                        }
                        return e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
                    }
                    return "\\" + e
                }, ae = function() {
                    P()
                }, oe = be(function(e) {
                    return e.disabled === true && e.nodeName.toLowerCase() === "fieldset"
                }, {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    E.apply(t = z.call(c.childNodes), c.childNodes);
                    t[c.childNodes.length].nodeType
                } catch (e) {
                    E = {
                        apply: t.length ? function(e, t) {
                            A.apply(e, z.call(t))
                        }
                        : function(e, t) {
                            var n = e.length
                              , i = 0;
                            while (e[n++] = t[i++]) {}
                            e.length = n - 1
                        }
                    }
                }
                function se(t, e, n, i) {
                    var r, a, o, s, l, u, f, d = e && e.ownerDocument, c = e ? e.nodeType : 9;
                    n = n || [];
                    if (typeof t !== "string" || !t || c !== 1 && c !== 9 && c !== 11) {
                        return n
                    }
                    if (!i) {
                        P(e);
                        e = e || _;
                        if (D) {
                            if (c !== 11 && (l = Q.exec(t))) {
                                if (r = l[1]) {
                                    if (c === 9) {
                                        if (o = e.getElementById(r)) {
                                            if (o.id === r) {
                                                n.push(o);
                                                return n
                                            }
                                        } else {
                                            return n
                                        }
                                    } else {
                                        if (d && (o = d.getElementById(r)) && y(e, o) && o.id === r) {
                                            n.push(o);
                                            return n
                                        }
                                    }
                                } else if (l[2]) {
                                    E.apply(n, e.getElementsByTagName(t));
                                    return n
                                } else if ((r = l[3]) && h.getElementsByClassName && e.getElementsByClassName) {
                                    E.apply(n, e.getElementsByClassName(r));
                                    return n
                                }
                            }
                            if (h.qsa && !k[t + " "] && (!m || !m.test(t)) && (c !== 1 || e.nodeName.toLowerCase() !== "object")) {
                                f = t;
                                d = e;
                                if (c === 1 && (Y.test(t) || J.test(t))) {
                                    d = ee.test(t) && ye(e.parentNode) || e;
                                    if (d !== e || !h.scope) {
                                        if (s = e.getAttribute("id")) {
                                            s = s.replace(ie, re)
                                        } else {
                                            e.setAttribute("id", s = C)
                                        }
                                    }
                                    u = p(t);
                                    a = u.length;
                                    while (a--) {
                                        u[a] = (s ? "#" + s : ":scope") + " " + Se(u[a])
                                    }
                                    f = u.join(",")
                                }
                                try {
                                    E.apply(n, d.querySelectorAll(f));
                                    return n
                                } catch (e) {
                                    k(t, true)
                                } finally {
                                    if (s === C) {
                                        e.removeAttribute("id")
                                    }
                                }
                            }
                        }
                    }
                    return v(t.replace(q, "$1"), e, n, i)
                }
                function le() {
                    var n = [];
                    function i(e, t) {
                        if (n.push(e + " ") > b.cacheLength) {
                            delete i[n.shift()]
                        }
                        return i[e + " "] = t
                    }
                    return i
                }
                function ue(e) {
                    e[C] = true;
                    return e
                }
                function fe(e) {
                    var t = _.createElement("fieldset");
                    try {
                        return !!e(t)
                    } catch (e) {
                        return false
                    } finally {
                        if (t.parentNode) {
                            t.parentNode.removeChild(t)
                        }
                        t = null
                    }
                }
                function de(e, t) {
                    var n = e.split("|")
                      , i = n.length;
                    while (i--) {
                        b.attrHandle[n[i]] = t
                    }
                }
                function ce(e, t) {
                    var n = t && e
                      , i = n && e.nodeType === 1 && t.nodeType === 1 && e.sourceIndex - t.sourceIndex;
                    if (i) {
                        return i
                    }
                    if (n) {
                        while (n = n.nextSibling) {
                            if (n === t) {
                                return -1
                            }
                        }
                    }
                    return e ? 1 : -1
                }
                function he(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return t === "input" && e.type === n
                    }
                }
                function pe(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return (t === "input" || t === "button") && e.type === n
                    }
                }
                function ve(t) {
                    return function(e) {
                        if ("form"in e) {
                            if (e.parentNode && e.disabled === false) {
                                if ("label"in e) {
                                    if ("label"in e.parentNode) {
                                        return e.parentNode.disabled === t
                                    } else {
                                        return e.disabled === t
                                    }
                                }
                                return e.isDisabled === t || e.isDisabled !== !t && oe(e) === t
                            }
                            return e.disabled === t
                        } else if ("label"in e) {
                            return e.disabled === t
                        }
                        return false
                    }
                }
                function me(o) {
                    return ue(function(a) {
                        a = +a;
                        return ue(function(e, t) {
                            var n, i = o([], e.length, a), r = i.length;
                            while (r--) {
                                if (e[n = i[r]]) {
                                    e[n] = !(t[n] = e[n])
                                }
                            }
                        })
                    })
                }
                function ye(e) {
                    return e && typeof e.getElementsByTagName !== "undefined" && e
                }
                h = se.support = {};
                r = se.isXML = function(e) {
                    var t = e && e.namespaceURI
                      , n = e && (e.ownerDocument || e).documentElement;
                    return !X.test(t || n && n.nodeName || "HTML")
                }
                ;
                P = se.setDocument = function(e) {
                    var t, n, i = e ? e.ownerDocument || e : c;
                    if (i == _ || i.nodeType !== 9 || !i.documentElement) {
                        return _
                    }
                    _ = i;
                    o = _.documentElement;
                    D = !r(_);
                    if (c != _ && (n = _.defaultView) && n.top !== n) {
                        if (n.addEventListener) {
                            n.addEventListener("unload", ae, false)
                        } else if (n.attachEvent) {
                            n.attachEvent("onunload", ae)
                        }
                    }
                    h.scope = fe(function(e) {
                        o.appendChild(e).appendChild(_.createElement("div"));
                        return typeof e.querySelectorAll !== "undefined" && !e.querySelectorAll(":scope fieldset div").length
                    });
                    h.attributes = fe(function(e) {
                        e.className = "i";
                        return !e.getAttribute("className")
                    });
                    h.getElementsByTagName = fe(function(e) {
                        e.appendChild(_.createComment(""));
                        return !e.getElementsByTagName("*").length
                    });
                    h.getElementsByClassName = Z.test(_.getElementsByClassName);
                    h.getById = fe(function(e) {
                        o.appendChild(e).id = C;
                        return !_.getElementsByName || !_.getElementsByName(C).length
                    });
                    if (h.getById) {
                        b.filter["ID"] = function(e) {
                            var t = e.replace(te, ne);
                            return function(e) {
                                return e.getAttribute("id") === t
                            }
                        }
                        ;
                        b.find["ID"] = function(e, t) {
                            if (typeof t.getElementById !== "undefined" && D) {
                                var n = t.getElementById(e);
                                return n ? [n] : []
                            }
                        }
                    } else {
                        b.filter["ID"] = function(e) {
                            var n = e.replace(te, ne);
                            return function(e) {
                                var t = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                                return t && t.value === n
                            }
                        }
                        ;
                        b.find["ID"] = function(e, t) {
                            if (typeof t.getElementById !== "undefined" && D) {
                                var n, i, r, a = t.getElementById(e);
                                if (a) {
                                    n = a.getAttributeNode("id");
                                    if (n && n.value === e) {
                                        return [a]
                                    }
                                    r = t.getElementsByName(e);
                                    i = 0;
                                    while (a = r[i++]) {
                                        n = a.getAttributeNode("id");
                                        if (n && n.value === e) {
                                            return [a]
                                        }
                                    }
                                }
                                return []
                            }
                        }
                    }
                    b.find["TAG"] = h.getElementsByTagName ? function(e, t) {
                        if (typeof t.getElementsByTagName !== "undefined") {
                            return t.getElementsByTagName(e)
                        } else if (h.qsa) {
                            return t.querySelectorAll(e)
                        }
                    }
                    : function(e, t) {
                        var n, i = [], r = 0, a = t.getElementsByTagName(e);
                        if (e === "*") {
                            while (n = a[r++]) {
                                if (n.nodeType === 1) {
                                    i.push(n)
                                }
                            }
                            return i
                        }
                        return a
                    }
                    ;
                    b.find["CLASS"] = h.getElementsByClassName && function(e, t) {
                        if (typeof t.getElementsByClassName !== "undefined" && D) {
                            return t.getElementsByClassName(e)
                        }
                    }
                    ;
                    s = [];
                    m = [];
                    if (h.qsa = Z.test(_.querySelectorAll)) {
                        fe(function(e) {
                            var t;
                            o.appendChild(e).innerHTML = "<a id='" + C + "'></a>" + "<select id='" + C + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                            if (e.querySelectorAll("[msallowcapture^='']").length) {
                                m.push("[*^$]=" + F + "*(?:''|\"\")")
                            }
                            if (!e.querySelectorAll("[selected]").length) {
                                m.push("\\[" + F + "*(?:value|" + O + ")")
                            }
                            if (!e.querySelectorAll("[id~=" + C + "-]").length) {
                                m.push("~=")
                            }
                            t = _.createElement("input");
                            t.setAttribute("name", "");
                            e.appendChild(t);
                            if (!e.querySelectorAll("[name='']").length) {
                                m.push("\\[" + F + "*name" + F + "*=" + F + "*(?:''|\"\")")
                            }
                            if (!e.querySelectorAll(":checked").length) {
                                m.push(":checked")
                            }
                            if (!e.querySelectorAll("a#" + C + "+*").length) {
                                m.push(".#.+[+~]")
                            }
                            e.querySelectorAll("\\\f");
                            m.push("[\\r\\n\\f]")
                        });
                        fe(function(e) {
                            e.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                            var t = _.createElement("input");
                            t.setAttribute("type", "hidden");
                            e.appendChild(t).setAttribute("name", "D");
                            if (e.querySelectorAll("[name=d]").length) {
                                m.push("name" + F + "*[*^$|!~]?=")
                            }
                            if (e.querySelectorAll(":enabled").length !== 2) {
                                m.push(":enabled", ":disabled")
                            }
                            o.appendChild(e).disabled = true;
                            if (e.querySelectorAll(":disabled").length !== 2) {
                                m.push(":enabled", ":disabled")
                            }
                            e.querySelectorAll("*,:x");
                            m.push(",.*:")
                        })
                    }
                    if (h.matchesSelector = Z.test(f = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) {
                        fe(function(e) {
                            h.disconnectedMatch = f.call(e, "*");
                            f.call(e, "[s!='']:x");
                            s.push("!=", N)
                        })
                    }
                    m = m.length && new RegExp(m.join("|"));
                    s = s.length && new RegExp(s.join("|"));
                    t = Z.test(o.compareDocumentPosition);
                    y = t || Z.test(o.contains) ? function(e, t) {
                        var n = e.nodeType === 9 ? e.documentElement : e
                          , i = t && t.parentNode;
                        return e === i || !!(i && i.nodeType === 1 && (n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16))
                    }
                    : function(e, t) {
                        if (t) {
                            while (t = t.parentNode) {
                                if (t === e) {
                                    return true
                                }
                            }
                        }
                        return false
                    }
                    ;
                    x = t ? function(e, t) {
                        if (e === t) {
                            u = true;
                            return 0
                        }
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        if (n) {
                            return n
                        }
                        n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                        if (n & 1 || !h.sortDetached && t.compareDocumentPosition(e) === n) {
                            if (e == _ || e.ownerDocument == c && y(c, e)) {
                                return -1
                            }
                            if (t == _ || t.ownerDocument == c && y(c, t)) {
                                return 1
                            }
                            return l ? B(l, e) - B(l, t) : 0
                        }
                        return n & 4 ? -1 : 1
                    }
                    : function(e, t) {
                        if (e === t) {
                            u = true;
                            return 0
                        }
                        var n, i = 0, r = e.parentNode, a = t.parentNode, o = [e], s = [t];
                        if (!r || !a) {
                            return e == _ ? -1 : t == _ ? 1 : r ? -1 : a ? 1 : l ? B(l, e) - B(l, t) : 0
                        } else if (r === a) {
                            return ce(e, t)
                        }
                        n = e;
                        while (n = n.parentNode) {
                            o.unshift(n)
                        }
                        n = t;
                        while (n = n.parentNode) {
                            s.unshift(n)
                        }
                        while (o[i] === s[i]) {
                            i++
                        }
                        return i ? ce(o[i], s[i]) : o[i] == c ? -1 : s[i] == c ? 1 : 0
                    }
                    ;
                    return _
                }
                ;
                se.matches = function(e, t) {
                    return se(e, null, null, t)
                }
                ;
                se.matchesSelector = function(e, t) {
                    P(e);
                    if (h.matchesSelector && D && !k[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) {
                        try {
                            var n = f.call(e, t);
                            if (n || h.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                                return n
                            }
                        } catch (e) {
                            k(t, true)
                        }
                    }
                    return se(t, _, null, [e]).length > 0
                }
                ;
                se.contains = function(e, t) {
                    if ((e.ownerDocument || e) != _) {
                        P(e)
                    }
                    return y(e, t)
                }
                ;
                se.attr = function(e, t) {
                    if ((e.ownerDocument || e) != _) {
                        P(e)
                    }
                    var n = b.attrHandle[t.toLowerCase()]
                      , i = n && I.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !D) : undefined;
                    return i !== undefined ? i : h.attributes || !D ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }
                ;
                se.escape = function(e) {
                    return (e + "").replace(ie, re)
                }
                ;
                se.error = function(e) {
                    throw new Error("Syntax error, unrecognized expression: " + e)
                }
                ;
                se.uniqueSort = function(e) {
                    var t, n = [], i = 0, r = 0;
                    u = !h.detectDuplicates;
                    l = !h.sortStable && e.slice(0);
                    e.sort(x);
                    if (u) {
                        while (t = e[r++]) {
                            if (t === e[r]) {
                                i = n.push(r)
                            }
                        }
                        while (i--) {
                            e.splice(n[i], 1)
                        }
                    }
                    l = null;
                    return e
                }
                ;
                a = se.getText = function(e) {
                    var t, n = "", i = 0, r = e.nodeType;
                    if (!r) {
                        while (t = e[i++]) {
                            n += a(t)
                        }
                    } else if (r === 1 || r === 9 || r === 11) {
                        if (typeof e.textContent === "string") {
                            return e.textContent
                        } else {
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                n += a(e)
                            }
                        }
                    } else if (r === 3 || r === 4) {
                        return e.nodeValue
                    }
                    return n
                }
                ;
                b = se.selectors = {
                    cacheLength: 50,
                    createPseudo: ue,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: true
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: true
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(e) {
                            e[1] = e[1].replace(te, ne);
                            e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne);
                            if (e[2] === "~=") {
                                e[3] = " " + e[3] + " "
                            }
                            return e.slice(0, 4)
                        },
                        CHILD: function(e) {
                            e[1] = e[1].toLowerCase();
                            if (e[1].slice(0, 3) === "nth") {
                                if (!e[3]) {
                                    se.error(e[0])
                                }
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                                e[5] = +(e[7] + e[8] || e[3] === "odd")
                            } else if (e[3]) {
                                se.error(e[0])
                            }
                            return e
                        },
                        PSEUDO: function(e) {
                            var t, n = !e[6] && e[2];
                            if (G["CHILD"].test(e[0])) {
                                return null
                            }
                            if (e[3]) {
                                e[2] = e[4] || e[5] || ""
                            } else if (n && j.test(n) && (t = p(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                                e[0] = e[0].slice(0, t);
                                e[2] = n.slice(0, t)
                            }
                            return e.slice(0, 3)
                        }
                    },
                    filter: {
                        TAG: function(e) {
                            var t = e.replace(te, ne).toLowerCase();
                            return e === "*" ? function() {
                                return true
                            }
                            : function(e) {
                                return e.nodeName && e.nodeName.toLowerCase() === t
                            }
                        },
                        CLASS: function(e) {
                            var t = g[e + " "];
                            return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && g(e, function(e) {
                                return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(n, i, r) {
                            return function(e) {
                                var t = se.attr(e, n);
                                if (t == null) {
                                    return i === "!="
                                }
                                if (!i) {
                                    return true
                                }
                                t += "";
                                return i === "=" ? t === r : i === "!=" ? t !== r : i === "^=" ? r && t.indexOf(r) === 0 : i === "*=" ? r && t.indexOf(r) > -1 : i === "$=" ? r && t.slice(-r.length) === r : i === "~=" ? (" " + t.replace(W, " ") + " ").indexOf(r) > -1 : i === "|=" ? t === r || t.slice(0, r.length + 1) === r + "-" : false
                            }
                        },
                        CHILD: function(p, e, t, v, m) {
                            var y = p.slice(0, 3) !== "nth"
                              , g = p.slice(-4) !== "last"
                              , S = e === "of-type";
                            return v === 1 && m === 0 ? function(e) {
                                return !!e.parentNode
                            }
                            : function(e, t, n) {
                                var i, r, a, o, s, l, u = y !== g ? "nextSibling" : "previousSibling", f = e.parentNode, d = S && e.nodeName.toLowerCase(), c = !n && !S, h = false;
                                if (f) {
                                    if (y) {
                                        while (u) {
                                            o = e;
                                            while (o = o[u]) {
                                                if (S ? o.nodeName.toLowerCase() === d : o.nodeType === 1) {
                                                    return false
                                                }
                                            }
                                            l = u = p === "only" && !l && "nextSibling"
                                        }
                                        return true
                                    }
                                    l = [g ? f.firstChild : f.lastChild];
                                    if (g && c) {
                                        o = f;
                                        a = o[C] || (o[C] = {});
                                        r = a[o.uniqueID] || (a[o.uniqueID] = {});
                                        i = r[p] || [];
                                        s = i[0] === T && i[1];
                                        h = s && i[2];
                                        o = s && f.childNodes[s];
                                        while (o = ++s && o && o[u] || (h = s = 0) || l.pop()) {
                                            if (o.nodeType === 1 && ++h && o === e) {
                                                r[p] = [T, s, h];
                                                break
                                            }
                                        }
                                    } else {
                                        if (c) {
                                            o = e;
                                            a = o[C] || (o[C] = {});
                                            r = a[o.uniqueID] || (a[o.uniqueID] = {});
                                            i = r[p] || [];
                                            s = i[0] === T && i[1];
                                            h = s
                                        }
                                        if (h === false) {
                                            while (o = ++s && o && o[u] || (h = s = 0) || l.pop()) {
                                                if ((S ? o.nodeName.toLowerCase() === d : o.nodeType === 1) && ++h) {
                                                    if (c) {
                                                        a = o[C] || (o[C] = {});
                                                        r = a[o.uniqueID] || (a[o.uniqueID] = {});
                                                        r[p] = [T, h]
                                                    }
                                                    if (o === e) {
                                                        break
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    h -= m;
                                    return h === v || h % v === 0 && h / v >= 0
                                }
                            }
                        },
                        PSEUDO: function(e, a) {
                            var t, o = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                            if (o[C]) {
                                return o(a)
                            }
                            if (o.length > 1) {
                                t = [e, e, "", a];
                                return b.setFilters.hasOwnProperty(e.toLowerCase()) ? ue(function(e, t) {
                                    var n, i = o(e, a), r = i.length;
                                    while (r--) {
                                        n = B(e, i[r]);
                                        e[n] = !(t[n] = i[r])
                                    }
                                }) : function(e) {
                                    return o(e, 0, t)
                                }
                            }
                            return o
                        }
                    },
                    pseudos: {
                        not: ue(function(e) {
                            var i = []
                              , r = []
                              , s = d(e.replace(q, "$1"));
                            return s[C] ? ue(function(e, t, n, i) {
                                var r, a = s(e, null, i, []), o = e.length;
                                while (o--) {
                                    if (r = a[o]) {
                                        e[o] = !(t[o] = r)
                                    }
                                }
                            }) : function(e, t, n) {
                                i[0] = e;
                                s(i, null, n, r);
                                i[0] = null;
                                return !r.pop()
                            }
                        }),
                        has: ue(function(t) {
                            return function(e) {
                                return se(t, e).length > 0
                            }
                        }),
                        contains: ue(function(t) {
                            t = t.replace(te, ne);
                            return function(e) {
                                return (e.textContent || a(e)).indexOf(t) > -1
                            }
                        }),
                        lang: ue(function(n) {
                            if (!V.test(n || "")) {
                                se.error("unsupported lang: " + n)
                            }
                            n = n.replace(te, ne).toLowerCase();
                            return function(e) {
                                var t;
                                do {
                                    if (t = D ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) {
                                        t = t.toLowerCase();
                                        return t === n || t.indexOf(n + "-") === 0
                                    }
                                } while ((e = e.parentNode) && e.nodeType === 1);
                                return false
                            }
                        }),
                        target: function(e) {
                            var t = n.location && n.location.hash;
                            return t && t.slice(1) === e.id
                        },
                        root: function(e) {
                            return e === o
                        },
                        focus: function(e) {
                            return e === _.activeElement && (!_.hasFocus || _.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                        },
                        enabled: ve(false),
                        disabled: ve(true),
                        checked: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && !!e.checked || t === "option" && !!e.selected
                        },
                        selected: function(e) {
                            if (e.parentNode) {
                                e.parentNode.selectedIndex
                            }
                            return e.selected === true
                        },
                        empty: function(e) {
                            for (e = e.firstChild; e; e = e.nextSibling) {
                                if (e.nodeType < 6) {
                                    return false
                                }
                            }
                            return true
                        },
                        parent: function(e) {
                            return !b.pseudos["empty"](e)
                        },
                        header: function(e) {
                            return $.test(e.nodeName)
                        },
                        input: function(e) {
                            return K.test(e.nodeName)
                        },
                        button: function(e) {
                            var t = e.nodeName.toLowerCase();
                            return t === "input" && e.type === "button" || t === "button"
                        },
                        text: function(e) {
                            var t;
                            return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                        },
                        first: me(function() {
                            return [0]
                        }),
                        last: me(function(e, t) {
                            return [t - 1]
                        }),
                        eq: me(function(e, t, n) {
                            return [n < 0 ? n + t : n]
                        }),
                        even: me(function(e, t) {
                            var n = 0;
                            for (; n < t; n += 2) {
                                e.push(n)
                            }
                            return e
                        }),
                        odd: me(function(e, t) {
                            var n = 1;
                            for (; n < t; n += 2) {
                                e.push(n)
                            }
                            return e
                        }),
                        lt: me(function(e, t, n) {
                            var i = n < 0 ? n + t : n > t ? t : n;
                            for (; --i >= 0; ) {
                                e.push(i)
                            }
                            return e
                        }),
                        gt: me(function(e, t, n) {
                            var i = n < 0 ? n + t : n;
                            for (; ++i < t; ) {
                                e.push(i)
                            }
                            return e
                        })
                    }
                };
                b.pseudos["nth"] = b.pseudos["eq"];
                for (e in {
                    radio: true,
                    checkbox: true,
                    file: true,
                    password: true,
                    image: true
                }) {
                    b.pseudos[e] = he(e)
                }
                for (e in {
                    submit: true,
                    reset: true
                }) {
                    b.pseudos[e] = pe(e)
                }
                function ge() {}
                ge.prototype = b.filters = b.pseudos;
                b.setFilters = new ge;
                p = se.tokenize = function(e, t) {
                    var n, i, r, a, o, s, l, u = S[e + " "];
                    if (u) {
                        return t ? 0 : u.slice(0)
                    }
                    o = e;
                    s = [];
                    l = b.preFilter;
                    while (o) {
                        if (!n || (i = H.exec(o))) {
                            if (i) {
                                o = o.slice(i[0].length) || o
                            }
                            s.push(r = [])
                        }
                        n = false;
                        if (i = J.exec(o)) {
                            n = i.shift();
                            r.push({
                                value: n,
                                type: i[0].replace(q, " ")
                            });
                            o = o.slice(n.length)
                        }
                        for (a in b.filter) {
                            if ((i = G[a].exec(o)) && (!l[a] || (i = l[a](i)))) {
                                n = i.shift();
                                r.push({
                                    value: n,
                                    type: a,
                                    matches: i
                                });
                                o = o.slice(n.length)
                            }
                        }
                        if (!n) {
                            break
                        }
                    }
                    return t ? o.length : o ? se.error(e) : S(e, s).slice(0)
                }
                ;
                function Se(e) {
                    var t = 0
                      , n = e.length
                      , i = "";
                    for (; t < n; t++) {
                        i += e[t].value
                    }
                    return i
                }
                function be(s, e, t) {
                    var l = e.dir
                      , u = e.next
                      , f = u || l
                      , d = t && f === "parentNode"
                      , c = i++;
                    return e.first ? function(e, t, n) {
                        while (e = e[l]) {
                            if (e.nodeType === 1 || d) {
                                return s(e, t, n)
                            }
                        }
                        return false
                    }
                    : function(e, t, n) {
                        var i, r, a, o = [T, c];
                        if (n) {
                            while (e = e[l]) {
                                if (e.nodeType === 1 || d) {
                                    if (s(e, t, n)) {
                                        return true
                                    }
                                }
                            }
                        } else {
                            while (e = e[l]) {
                                if (e.nodeType === 1 || d) {
                                    a = e[C] || (e[C] = {});
                                    r = a[e.uniqueID] || (a[e.uniqueID] = {});
                                    if (u && u === e.nodeName.toLowerCase()) {
                                        e = e[l] || e
                                    } else if ((i = r[f]) && i[0] === T && i[1] === c) {
                                        return o[2] = i[2]
                                    } else {
                                        r[f] = o;
                                        if (o[2] = s(e, t, n)) {
                                            return true
                                        }
                                    }
                                }
                            }
                        }
                        return false
                    }
                }
                function we(r) {
                    return r.length > 1 ? function(e, t, n) {
                        var i = r.length;
                        while (i--) {
                            if (!r[i](e, t, n)) {
                                return false
                            }
                        }
                        return true
                    }
                    : r[0]
                }
                function Pe(e, t, n) {
                    var i = 0
                      , r = t.length;
                    for (; i < r; i++) {
                        se(e, t[i], n)
                    }
                    return n
                }
                function _e(e, t, n, i, r) {
                    var a, o = [], s = 0, l = e.length, u = t != null;
                    for (; s < l; s++) {
                        if (a = e[s]) {
                            if (!n || n(a, i, r)) {
                                o.push(a);
                                if (u) {
                                    t.push(s)
                                }
                            }
                        }
                    }
                    return o
                }
                function De(h, p, v, m, y, e) {
                    if (m && !m[C]) {
                        m = De(m)
                    }
                    if (y && !y[C]) {
                        y = De(y, e)
                    }
                    return ue(function(e, t, n, i) {
                        var r, a, o, s = [], l = [], u = t.length, f = e || Pe(p || "*", n.nodeType ? [n] : n, []), d = h && (e || !p) ? _e(f, s, h, n, i) : f, c = v ? y || (e ? h : u || m) ? [] : t : d;
                        if (v) {
                            v(d, c, n, i)
                        }
                        if (m) {
                            r = _e(c, l);
                            m(r, [], n, i);
                            a = r.length;
                            while (a--) {
                                if (o = r[a]) {
                                    c[l[a]] = !(d[l[a]] = o)
                                }
                            }
                        }
                        if (e) {
                            if (y || h) {
                                if (y) {
                                    r = [];
                                    a = c.length;
                                    while (a--) {
                                        if (o = c[a]) {
                                            r.push(d[a] = o)
                                        }
                                    }
                                    y(null, c = [], r, i)
                                }
                                a = c.length;
                                while (a--) {
                                    if ((o = c[a]) && (r = y ? B(e, o) : s[a]) > -1) {
                                        e[r] = !(t[r] = o)
                                    }
                                }
                            }
                        } else {
                            c = _e(c === t ? c.splice(u, c.length) : c);
                            if (y) {
                                y(null, t, c, i)
                            } else {
                                E.apply(t, c)
                            }
                        }
                    })
                }
                function Ce(e) {
                    var r, t, n, i = e.length, a = b.relative[e[0].type], o = a || b.relative[" "], s = a ? 1 : 0, l = be(function(e) {
                        return e === r
                    }, o, true), u = be(function(e) {
                        return B(r, e) > -1
                    }, o, true), f = [function(e, t, n) {
                        var i = !a && (n || t !== w) || ((r = t).nodeType ? l(e, t, n) : u(e, t, n));
                        r = null;
                        return i
                    }
                    ];
                    for (; s < i; s++) {
                        if (t = b.relative[e[s].type]) {
                            f = [be(we(f), t)]
                        } else {
                            t = b.filter[e[s].type].apply(null, e[s].matches);
                            if (t[C]) {
                                n = ++s;
                                for (; n < i; n++) {
                                    if (b.relative[e[n].type]) {
                                        break
                                    }
                                }
                                return De(s > 1 && we(f), s > 1 && Se(e.slice(0, s - 1).concat({
                                    value: e[s - 2].type === " " ? "*" : ""
                                })).replace(q, "$1"), t, s < n && Ce(e.slice(s, n)), n < i && Ce(e = e.slice(n)), n < i && Se(e))
                            }
                            f.push(t)
                        }
                    }
                    return we(f)
                }
                function Te(m, y) {
                    var g = y.length > 0
                      , S = m.length > 0
                      , e = function(e, t, n, i, r) {
                        var a, o, s, l = 0, u = "0", f = e && [], d = [], c = w, h = e || S && b.find["TAG"]("*", r), p = T += c == null ? 1 : Math.random() || .1, v = h.length;
                        if (r) {
                            w = t == _ || t || r
                        }
                        for (; u !== v && (a = h[u]) != null; u++) {
                            if (S && a) {
                                o = 0;
                                if (!t && a.ownerDocument != _) {
                                    P(a);
                                    n = !D
                                }
                                while (s = m[o++]) {
                                    if (s(a, t || _, n)) {
                                        i.push(a);
                                        break
                                    }
                                }
                                if (r) {
                                    T = p
                                }
                            }
                            if (g) {
                                if (a = !s && a) {
                                    l--
                                }
                                if (e) {
                                    f.push(a)
                                }
                            }
                        }
                        l += u;
                        if (g && u !== l) {
                            o = 0;
                            while (s = y[o++]) {
                                s(f, d, t, n)
                            }
                            if (e) {
                                if (l > 0) {
                                    while (u--) {
                                        if (!(f[u] || d[u])) {
                                            d[u] = R.call(i)
                                        }
                                    }
                                }
                                d = _e(d)
                            }
                            E.apply(i, d);
                            if (r && !e && d.length > 0 && l + y.length > 1) {
                                se.uniqueSort(i)
                            }
                        }
                        if (r) {
                            T = p;
                            w = c
                        }
                        return f
                    };
                    return g ? ue(e) : e
                }
                d = se.compile = function(e, t) {
                    var n, i = [], r = [], a = M[e + " "];
                    if (!a) {
                        if (!t) {
                            t = p(e)
                        }
                        n = t.length;
                        while (n--) {
                            a = Ce(t[n]);
                            if (a[C]) {
                                i.push(a)
                            } else {
                                r.push(a)
                            }
                        }
                        a = M(e, Te(r, i));
                        a.selector = e
                    }
                    return a
                }
                ;
                v = se.select = function(e, t, n, i) {
                    var r, a, o, s, l, u = typeof e === "function" && e, f = !i && p(e = u.selector || e);
                    n = n || [];
                    if (f.length === 1) {
                        a = f[0] = f[0].slice(0);
                        if (a.length > 2 && (o = a[0]).type === "ID" && t.nodeType === 9 && D && b.relative[a[1].type]) {
                            t = (b.find["ID"](o.matches[0].replace(te, ne), t) || [])[0];
                            if (!t) {
                                return n
                            } else if (u) {
                                t = t.parentNode
                            }
                            e = e.slice(a.shift().value.length)
                        }
                        r = G["needsContext"].test(e) ? 0 : a.length;
                        while (r--) {
                            o = a[r];
                            if (b.relative[s = o.type]) {
                                break
                            }
                            if (l = b.find[s]) {
                                if (i = l(o.matches[0].replace(te, ne), ee.test(a[0].type) && ye(t.parentNode) || t)) {
                                    a.splice(r, 1);
                                    e = i.length && Se(a);
                                    if (!e) {
                                        E.apply(n, i);
                                        return n
                                    }
                                    break
                                }
                            }
                        }
                    }
                    (u || d(e, f))(i, t, !D, n, !t || ee.test(e) && ye(t.parentNode) || t);
                    return n
                }
                ;
                h.sortStable = C.split("").sort(x).join("") === C;
                h.detectDuplicates = !!u;
                P();
                h.sortDetached = fe(function(e) {
                    return e.compareDocumentPosition(_.createElement("fieldset")) & 1
                });
                if (!fe(function(e) {
                    e.innerHTML = "<a href='#'></a>";
                    return e.firstChild.getAttribute("href") === "#"
                })) {
                    de("type|href|height|width", function(e, t, n) {
                        if (!n) {
                            return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                        }
                    })
                }
                if (!h.attributes || !fe(function(e) {
                    e.innerHTML = "<input/>";
                    e.firstChild.setAttribute("value", "");
                    return e.firstChild.getAttribute("value") === ""
                })) {
                    de("value", function(e, t, n) {
                        if (!n && e.nodeName.toLowerCase() === "input") {
                            return e.defaultValue
                        }
                    })
                }
                if (!fe(function(e) {
                    return e.getAttribute("disabled") == null
                })) {
                    de(O, function(e, t, n) {
                        var i;
                        if (!n) {
                            return e[t] === true ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                        }
                    })
                }
                return se
            }(_);
            C.find = h;
            C.expr = h.selectors;
            C.expr[":"] = C.expr.pseudos;
            C.uniqueSort = C.unique = h.uniqueSort;
            C.text = h.getText;
            C.isXMLDoc = h.isXML;
            C.contains = h.contains;
            C.escapeSelector = h.escape;
            var p = function(e, t, n) {
                var i = []
                  , r = n !== undefined;
                while ((e = e[t]) && e.nodeType !== 9) {
                    if (e.nodeType === 1) {
                        if (r && C(e).is(n)) {
                            break
                        }
                        i.push(e)
                    }
                }
                return i
            };
            var P = function(e, t) {
                var n = [];
                for (; e; e = e.nextSibling) {
                    if (e.nodeType === 1 && e !== t) {
                        n.push(e)
                    }
                }
                return n
            };
            var T = C.expr.match.needsContext;
            function M(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            }
            var k = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function x(e, n, i) {
                if (g(n)) {
                    return C.grep(e, function(e, t) {
                        return !!n.call(e, t, e) !== i
                    })
                }
                if (n.nodeType) {
                    return C.grep(e, function(e) {
                        return e === n !== i
                    })
                }
                if (typeof n !== "string") {
                    return C.grep(e, function(e) {
                        return r.call(n, e) > -1 !== i
                    })
                }
                return C.filter(n, e, i)
            }
            C.filter = function(e, t, n) {
                var i = t[0];
                if (n) {
                    e = ":not(" + e + ")"
                }
                if (t.length === 1 && i.nodeType === 1) {
                    return C.find.matchesSelector(i, e) ? [i] : []
                }
                return C.find.matches(e, C.grep(t, function(e) {
                    return e.nodeType === 1
                }))
            }
            ;
            C.fn.extend({
                find: function(e) {
                    var t, n, i = this.length, r = this;
                    if (typeof e !== "string") {
                        return this.pushStack(C(e).filter(function() {
                            for (t = 0; t < i; t++) {
                                if (C.contains(r[t], this)) {
                                    return true
                                }
                            }
                        }))
                    }
                    n = this.pushStack([]);
                    for (t = 0; t < i; t++) {
                        C.find(e, r[t], n)
                    }
                    return i > 1 ? C.uniqueSort(n) : n
                },
                filter: function(e) {
                    return this.pushStack(x(this, e || [], false))
                },
                not: function(e) {
                    return this.pushStack(x(this, e || [], true))
                },
                is: function(e) {
                    return !!x(this, typeof e === "string" && T.test(e) ? C(e) : e || [], false).length
                }
            });
            var I, R = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, A = C.fn.init = function(e, t, n) {
                var i, r;
                if (!e) {
                    return this
                }
                n = n || I;
                if (typeof e === "string") {
                    if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                        i = [null, e, null]
                    } else {
                        i = R.exec(e)
                    }
                    if (i && (i[1] || !t)) {
                        if (i[1]) {
                            t = t instanceof C ? t[0] : t;
                            C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : D, true));
                            if (k.test(i[1]) && C.isPlainObject(t)) {
                                for (i in t) {
                                    if (g(this[i])) {
                                        this[i](t[i])
                                    } else {
                                        this.attr(i, t[i])
                                    }
                                }
                            }
                            return this
                        } else {
                            r = D.getElementById(i[2]);
                            if (r) {
                                this[0] = r;
                                this.length = 1
                            }
                            return this
                        }
                    } else if (!t || t.jquery) {
                        return (t || n).find(e)
                    } else {
                        return this.constructor(t).find(e)
                    }
                } else if (e.nodeType) {
                    this[0] = e;
                    this.length = 1;
                    return this
                } else if (g(e)) {
                    return n.ready !== undefined ? n.ready(e) : e(C)
                }
                return C.makeArray(e, this)
            }
            ;
            A.prototype = C.fn;
            I = C(D);
            var E = /^(?:parents|prev(?:Until|All))/
              , z = {
                children: true,
                contents: true,
                next: true,
                prev: true
            };
            C.fn.extend({
                has: function(e) {
                    var t = C(e, this)
                      , n = t.length;
                    return this.filter(function() {
                        var e = 0;
                        for (; e < n; e++) {
                            if (C.contains(this, t[e])) {
                                return true
                            }
                        }
                    })
                },
                closest: function(e, t) {
                    var n, i = 0, r = this.length, a = [], o = typeof e !== "string" && C(e);
                    if (!T.test(e)) {
                        for (; i < r; i++) {
                            for (n = this[i]; n && n !== t; n = n.parentNode) {
                                if (n.nodeType < 11 && (o ? o.index(n) > -1 : n.nodeType === 1 && C.find.matchesSelector(n, e))) {
                                    a.push(n);
                                    break
                                }
                            }
                        }
                    }
                    return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a)
                },
                index: function(e) {
                    if (!e) {
                        return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                    }
                    if (typeof e === "string") {
                        return r.call(C(e), this[0])
                    }
                    return r.call(this, e.jquery ? e[0] : e)
                },
                add: function(e, t) {
                    return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
                },
                addBack: function(e) {
                    return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
                }
            });
            function B(e, t) {
                while ((e = e[t]) && e.nodeType !== 1) {}
                return e
            }
            C.each({
                parent: function(e) {
                    var t = e.parentNode;
                    return t && t.nodeType !== 11 ? t : null
                },
                parents: function(e) {
                    return p(e, "parentNode")
                },
                parentsUntil: function(e, t, n) {
                    return p(e, "parentNode", n)
                },
                next: function(e) {
                    return B(e, "nextSibling")
                },
                prev: function(e) {
                    return B(e, "previousSibling")
                },
                nextAll: function(e) {
                    return p(e, "nextSibling")
                },
                prevAll: function(e) {
                    return p(e, "previousSibling")
                },
                nextUntil: function(e, t, n) {
                    return p(e, "nextSibling", n)
                },
                prevUntil: function(e, t, n) {
                    return p(e, "previousSibling", n)
                },
                siblings: function(e) {
                    return P((e.parentNode || {}).firstChild, e)
                },
                children: function(e) {
                    return P(e.firstChild)
                },
                contents: function(e) {
                    if (e.contentDocument != null && i(e.contentDocument)) {
                        return e.contentDocument
                    }
                    if (M(e, "template")) {
                        e = e.content || e
                    }
                    return C.merge([], e.childNodes)
                }
            }, function(i, r) {
                C.fn[i] = function(e, t) {
                    var n = C.map(this, r, e);
                    if (i.slice(-5) !== "Until") {
                        t = e
                    }
                    if (t && typeof t === "string") {
                        n = C.filter(t, n)
                    }
                    if (this.length > 1) {
                        if (!z[i]) {
                            C.uniqueSort(n)
                        }
                        if (E.test(i)) {
                            n.reverse()
                        }
                    }
                    return this.pushStack(n)
                }
            });
            var O = /[^\x20\t\r\n\f]+/g;
            function F(e) {
                var n = {};
                C.each(e.match(O) || [], function(e, t) {
                    n[t] = true
                });
                return n
            }
            C.Callbacks = function(i) {
                i = typeof i === "string" ? F(i) : C.extend({}, i);
                var n, e, t, r, a = [], o = [], s = -1, l = function() {
                    r = r || i.once;
                    t = n = true;
                    for (; o.length; s = -1) {
                        e = o.shift();
                        while (++s < a.length) {
                            if (a[s].apply(e[0], e[1]) === false && i.stopOnFalse) {
                                s = a.length;
                                e = false
                            }
                        }
                    }
                    if (!i.memory) {
                        e = false
                    }
                    n = false;
                    if (r) {
                        if (e) {
                            a = []
                        } else {
                            a = ""
                        }
                    }
                }, u = {
                    add: function() {
                        if (a) {
                            if (e && !n) {
                                s = a.length - 1;
                                o.push(e)
                            }
                            (function n(e) {
                                C.each(e, function(e, t) {
                                    if (g(t)) {
                                        if (!i.unique || !u.has(t)) {
                                            a.push(t)
                                        }
                                    } else if (t && t.length && w(t) !== "string") {
                                        n(t)
                                    }
                                })
                            }
                            )(arguments);
                            if (e && !n) {
                                l()
                            }
                        }
                        return this
                    },
                    remove: function() {
                        C.each(arguments, function(e, t) {
                            var n;
                            while ((n = C.inArray(t, a, n)) > -1) {
                                a.splice(n, 1);
                                if (n <= s) {
                                    s--
                                }
                            }
                        });
                        return this
                    },
                    has: function(e) {
                        return e ? C.inArray(e, a) > -1 : a.length > 0
                    },
                    empty: function() {
                        if (a) {
                            a = []
                        }
                        return this
                    },
                    disable: function() {
                        r = o = [];
                        a = e = "";
                        return this
                    },
                    disabled: function() {
                        return !a
                    },
                    lock: function() {
                        r = o = [];
                        if (!e && !n) {
                            a = e = ""
                        }
                        return this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(e, t) {
                        if (!r) {
                            t = t || [];
                            t = [e, t.slice ? t.slice() : t];
                            o.push(t);
                            if (!n) {
                                l()
                            }
                        }
                        return this
                    },
                    fire: function() {
                        u.fireWith(this, arguments);
                        return this
                    },
                    fired: function() {
                        return !!t
                    }
                };
                return u
            }
            ;
            function L(e) {
                return e
            }
            function U(e) {
                throw e
            }
            function N(e, t, n, i) {
                var r;
                try {
                    if (e && g(r = e.promise)) {
                        r.call(e).done(t).fail(n)
                    } else if (e && g(r = e.then)) {
                        r.call(e, t, n)
                    } else {
                        t.apply(undefined, [e].slice(i))
                    }
                } catch (e) {
                    n.apply(undefined, [e])
                }
            }
            C.extend({
                Deferred: function(e) {
                    var a = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]]
                      , r = "pending"
                      , o = {
                        state: function() {
                            return r
                        },
                        always: function() {
                            s.done(arguments).fail(arguments);
                            return this
                        },
                        catch: function(e) {
                            return o.then(null, e)
                        },
                        pipe: function() {
                            var r = arguments;
                            return C.Deferred(function(i) {
                                C.each(a, function(e, t) {
                                    var n = g(r[t[4]]) && r[t[4]];
                                    s[t[1]](function() {
                                        var e = n && n.apply(this, arguments);
                                        if (e && g(e.promise)) {
                                            e.promise().progress(i.notify).done(i.resolve).fail(i.reject)
                                        } else {
                                            i[t[0] + "With"](this, n ? [e] : arguments)
                                        }
                                    })
                                });
                                r = null
                            }).promise()
                        },
                        then: function(t, n, i) {
                            var l = 0;
                            function u(r, a, o, s) {
                                return function() {
                                    var n = this
                                      , i = arguments
                                      , e = function() {
                                        var e, t;
                                        if (r < l) {
                                            return
                                        }
                                        e = o.apply(n, i);
                                        if (e === a.promise()) {
                                            throw new TypeError("Thenable self-resolution")
                                        }
                                        t = e && (typeof e === "object" || typeof e === "function") && e.then;
                                        if (g(t)) {
                                            if (s) {
                                                t.call(e, u(l, a, L, s), u(l, a, U, s))
                                            } else {
                                                l++;
                                                t.call(e, u(l, a, L, s), u(l, a, U, s), u(l, a, L, a.notifyWith))
                                            }
                                        } else {
                                            if (o !== L) {
                                                n = undefined;
                                                i = [e]
                                            }
                                            (s || a.resolveWith)(n, i)
                                        }
                                    }
                                      , t = s ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            if (C.Deferred.exceptionHook) {
                                                C.Deferred.exceptionHook(e, t.stackTrace)
                                            }
                                            if (r + 1 >= l) {
                                                if (o !== U) {
                                                    n = undefined;
                                                    i = [e]
                                                }
                                                a.rejectWith(n, i)
                                            }
                                        }
                                    }
                                    ;
                                    if (r) {
                                        t()
                                    } else {
                                        if (C.Deferred.getStackHook) {
                                            t.stackTrace = C.Deferred.getStackHook()
                                        }
                                        _.setTimeout(t)
                                    }
                                }
                            }
                            return C.Deferred(function(e) {
                                a[0][3].add(u(0, e, g(i) ? i : L, e.notifyWith));
                                a[1][3].add(u(0, e, g(t) ? t : L));
                                a[2][3].add(u(0, e, g(n) ? n : U))
                            }).promise()
                        },
                        promise: function(e) {
                            return e != null ? C.extend(e, o) : o
                        }
                    }
                      , s = {};
                    C.each(a, function(e, t) {
                        var n = t[2]
                          , i = t[5];
                        o[t[1]] = n.add;
                        if (i) {
                            n.add(function() {
                                r = i
                            }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock)
                        }
                        n.add(t[3].fire);
                        s[t[0]] = function() {
                            s[t[0] + "With"](this === s ? undefined : this, arguments);
                            return this
                        }
                        ;
                        s[t[0] + "With"] = n.fireWith
                    });
                    o.promise(s);
                    if (e) {
                        e.call(s, s)
                    }
                    return s
                },
                when: function(e) {
                    var n = arguments.length
                      , t = n
                      , i = Array(t)
                      , r = s.call(arguments)
                      , a = C.Deferred()
                      , o = function(t) {
                        return function(e) {
                            i[t] = this;
                            r[t] = arguments.length > 1 ? s.call(arguments) : e;
                            if (!--n) {
                                a.resolveWith(i, r)
                            }
                        }
                    };
                    if (n <= 1) {
                        N(e, a.done(o(t)).resolve, a.reject, !n);
                        if (a.state() === "pending" || g(r[t] && r[t].then)) {
                            return a.then()
                        }
                    }
                    while (t--) {
                        N(r[t], o(t), a.reject)
                    }
                    return a.promise()
                }
            });
            var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            C.Deferred.exceptionHook = function(e, t) {
                if (_.console && _.console.warn && e && W.test(e.name)) {
                    _.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
                }
            }
            ;
            C.readyException = function(e) {
                _.setTimeout(function() {
                    throw e
                })
            }
            ;
            var q = C.Deferred();
            C.fn.ready = function(e) {
                q.then(e).catch(function(e) {
                    C.readyException(e)
                });
                return this
            }
            ;
            C.extend({
                isReady: false,
                readyWait: 1,
                ready: function(e) {
                    if (e === true ? --C.readyWait : C.isReady) {
                        return
                    }
                    C.isReady = true;
                    if (e !== true && --C.readyWait > 0) {
                        return
                    }
                    q.resolveWith(D, [C])
                }
            });
            C.ready.then = q.then;
            function H() {
                D.removeEventListener("DOMContentLoaded", H);
                _.removeEventListener("load", H);
                C.ready()
            }
            if (D.readyState === "complete" || D.readyState !== "loading" && !D.documentElement.doScroll) {
                _.setTimeout(C.ready)
            } else {
                D.addEventListener("DOMContentLoaded", H);
                _.addEventListener("load", H)
            }
            var J = function(e, t, n, i, r, a, o) {
                var s = 0
                  , l = e.length
                  , u = n == null;
                if (w(n) === "object") {
                    r = true;
                    for (s in n) {
                        J(e, t, s, n[s], true, a, o)
                    }
                } else if (i !== undefined) {
                    r = true;
                    if (!g(i)) {
                        o = true
                    }
                    if (u) {
                        if (o) {
                            t.call(e, i);
                            t = null
                        } else {
                            u = t;
                            t = function(e, t, n) {
                                return u.call(C(e), n)
                            }
                        }
                    }
                    if (t) {
                        for (; s < l; s++) {
                            t(e[s], n, o ? i : i.call(e[s], s, t(e[s], n)))
                        }
                    }
                }
                if (r) {
                    return e
                }
                if (u) {
                    return t.call(e)
                }
                return l ? t(e[0], n) : a
            };
            var Y = /^-ms-/
              , j = /-([a-z])/g;
            function V(e, t) {
                return t.toUpperCase()
            }
            function G(e) {
                return e.replace(Y, "ms-").replace(j, V)
            }
            var X = function(e) {
                return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
            };
            function K() {
                this.expando = C.expando + K.uid++
            }
            K.uid = 1;
            K.prototype = {
                cache: function(e) {
                    var t = e[this.expando];
                    if (!t) {
                        t = {};
                        if (X(e)) {
                            if (e.nodeType) {
                                e[this.expando] = t
                            } else {
                                Object.defineProperty(e, this.expando, {
                                    value: t,
                                    configurable: true
                                })
                            }
                        }
                    }
                    return t
                },
                set: function(e, t, n) {
                    var i, r = this.cache(e);
                    if (typeof t === "string") {
                        r[G(t)] = n
                    } else {
                        for (i in t) {
                            r[G(i)] = t[i]
                        }
                    }
                    return r
                },
                get: function(e, t) {
                    return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][G(t)]
                },
                access: function(e, t, n) {
                    if (t === undefined || t && typeof t === "string" && n === undefined) {
                        return this.get(e, t)
                    }
                    this.set(e, t, n);
                    return n !== undefined ? n : t
                },
                remove: function(e, t) {
                    var n, i = e[this.expando];
                    if (i === undefined) {
                        return
                    }
                    if (t !== undefined) {
                        if (Array.isArray(t)) {
                            t = t.map(G)
                        } else {
                            t = G(t);
                            t = t in i ? [t] : t.match(O) || []
                        }
                        n = t.length;
                        while (n--) {
                            delete i[t[n]]
                        }
                    }
                    if (t === undefined || C.isEmptyObject(i)) {
                        if (e.nodeType) {
                            e[this.expando] = undefined
                        } else {
                            delete e[this.expando]
                        }
                    }
                },
                hasData: function(e) {
                    var t = e[this.expando];
                    return t !== undefined && !C.isEmptyObject(t)
                }
            };
            var $ = new K;
            var Z = new K;
            var Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
              , ee = /[A-Z]/g;
            function te(e) {
                if (e === "true") {
                    return true
                }
                if (e === "false") {
                    return false
                }
                if (e === "null") {
                    return null
                }
                if (e === +e + "") {
                    return +e
                }
                if (Q.test(e)) {
                    return JSON.parse(e)
                }
                return e
            }
            function ne(e, t, n) {
                var i;
                if (n === undefined && e.nodeType === 1) {
                    i = "data-" + t.replace(ee, "-$&").toLowerCase();
                    n = e.getAttribute(i);
                    if (typeof n === "string") {
                        try {
                            n = te(n)
                        } catch (e) {}
                        Z.set(e, t, n)
                    } else {
                        n = undefined
                    }
                }
                return n
            }
            C.extend({
                hasData: function(e) {
                    return Z.hasData(e) || $.hasData(e)
                },
                data: function(e, t, n) {
                    return Z.access(e, t, n)
                },
                removeData: function(e, t) {
                    Z.remove(e, t)
                },
                _data: function(e, t, n) {
                    return $.access(e, t, n)
                },
                _removeData: function(e, t) {
                    $.remove(e, t)
                }
            });
            C.fn.extend({
                data: function(n, e) {
                    var t, i, r, a = this[0], o = a && a.attributes;
                    if (n === undefined) {
                        if (this.length) {
                            r = Z.get(a);
                            if (a.nodeType === 1 && !$.get(a, "hasDataAttrs")) {
                                t = o.length;
                                while (t--) {
                                    if (o[t]) {
                                        i = o[t].name;
                                        if (i.indexOf("data-") === 0) {
                                            i = G(i.slice(5));
                                            ne(a, i, r[i])
                                        }
                                    }
                                }
                                $.set(a, "hasDataAttrs", true)
                            }
                        }
                        return r
                    }
                    if (typeof n === "object") {
                        return this.each(function() {
                            Z.set(this, n)
                        })
                    }
                    return J(this, function(e) {
                        var t;
                        if (a && e === undefined) {
                            t = Z.get(a, n);
                            if (t !== undefined) {
                                return t
                            }
                            t = ne(a, n);
                            if (t !== undefined) {
                                return t
                            }
                            return
                        }
                        this.each(function() {
                            Z.set(this, n, e)
                        })
                    }, null, e, arguments.length > 1, null, true)
                },
                removeData: function(e) {
                    return this.each(function() {
                        Z.remove(this, e)
                    })
                }
            });
            C.extend({
                queue: function(e, t, n) {
                    var i;
                    if (e) {
                        t = (t || "fx") + "queue";
                        i = $.get(e, t);
                        if (n) {
                            if (!i || Array.isArray(n)) {
                                i = $.access(e, t, C.makeArray(n))
                            } else {
                                i.push(n)
                            }
                        }
                        return i || []
                    }
                },
                dequeue: function(e, t) {
                    t = t || "fx";
                    var n = C.queue(e, t)
                      , i = n.length
                      , r = n.shift()
                      , a = C._queueHooks(e, t)
                      , o = function() {
                        C.dequeue(e, t)
                    };
                    if (r === "inprogress") {
                        r = n.shift();
                        i--
                    }
                    if (r) {
                        if (t === "fx") {
                            n.unshift("inprogress")
                        }
                        delete a.stop;
                        r.call(e, o, a)
                    }
                    if (!i && a) {
                        a.empty.fire()
                    }
                },
                _queueHooks: function(e, t) {
                    var n = t + "queueHooks";
                    return $.get(e, n) || $.access(e, n, {
                        empty: C.Callbacks("once memory").add(function() {
                            $.remove(e, [t + "queue", n])
                        })
                    })
                }
            });
            C.fn.extend({
                queue: function(t, n) {
                    var e = 2;
                    if (typeof t !== "string") {
                        n = t;
                        t = "fx";
                        e--
                    }
                    if (arguments.length < e) {
                        return C.queue(this[0], t)
                    }
                    return n === undefined ? this : this.each(function() {
                        var e = C.queue(this, t, n);
                        C._queueHooks(this, t);
                        if (t === "fx" && e[0] !== "inprogress") {
                            C.dequeue(this, t)
                        }
                    })
                },
                dequeue: function(e) {
                    return this.each(function() {
                        C.dequeue(this, e)
                    })
                },
                clearQueue: function(e) {
                    return this.queue(e || "fx", [])
                },
                promise: function(e, t) {
                    var n, i = 1, r = C.Deferred(), a = this, o = this.length, s = function() {
                        if (!--i) {
                            r.resolveWith(a, [a])
                        }
                    };
                    if (typeof e !== "string") {
                        t = e;
                        e = undefined
                    }
                    e = e || "fx";
                    while (o--) {
                        n = $.get(a[o], e + "queueHooks");
                        if (n && n.empty) {
                            i++;
                            n.empty.add(s)
                        }
                    }
                    s();
                    return r.promise(t)
                }
            });
            var ie = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
            var re = new RegExp("^(?:([+-])=|)(" + ie + ")([a-z%]*)$","i");
            var ae = ["Top", "Right", "Bottom", "Left"];
            var oe = D.documentElement;
            var se = function(e) {
                return C.contains(e.ownerDocument, e)
            }
              , le = {
                composed: true
            };
            if (oe.getRootNode) {
                se = function(e) {
                    return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument
                }
            }
            var ue = function(e, t) {
                e = t || e;
                return e.style.display === "none" || e.style.display === "" && se(e) && C.css(e, "display") === "none"
            };
            function fe(e, t, n, i) {
                var r, a, o = 20, s = i ? function() {
                    return i.cur()
                }
                : function() {
                    return C.css(e, t, "")
                }
                , l = s(), u = n && n[3] || (C.cssNumber[t] ? "" : "px"), f = e.nodeType && (C.cssNumber[t] || u !== "px" && +l) && re.exec(C.css(e, t));
                if (f && f[3] !== u) {
                    l = l / 2;
                    u = u || f[3];
                    f = +l || 1;
                    while (o--) {
                        C.style(e, t, f + u);
                        if ((1 - a) * (1 - (a = s() / l || .5)) <= 0) {
                            o = 0
                        }
                        f = f / a
                    }
                    f = f * 2;
                    C.style(e, t, f + u);
                    n = n || []
                }
                if (n) {
                    f = +f || +l || 0;
                    r = n[1] ? f + (n[1] + 1) * n[2] : +n[2];
                    if (i) {
                        i.unit = u;
                        i.start = f;
                        i.end = r
                    }
                }
                return r
            }
            var de = {};
            function ce(e) {
                var t, n = e.ownerDocument, i = e.nodeName, r = de[i];
                if (r) {
                    return r
                }
                t = n.body.appendChild(n.createElement(i));
                r = C.css(t, "display");
                t.parentNode.removeChild(t);
                if (r === "none") {
                    r = "block"
                }
                de[i] = r;
                return r
            }
            function he(e, t) {
                var n, i, r = [], a = 0, o = e.length;
                for (; a < o; a++) {
                    i = e[a];
                    if (!i.style) {
                        continue
                    }
                    n = i.style.display;
                    if (t) {
                        if (n === "none") {
                            r[a] = $.get(i, "display") || null;
                            if (!r[a]) {
                                i.style.display = ""
                            }
                        }
                        if (i.style.display === "" && ue(i)) {
                            r[a] = ce(i)
                        }
                    } else {
                        if (n !== "none") {
                            r[a] = "none";
                            $.set(i, "display", n)
                        }
                    }
                }
                for (a = 0; a < o; a++) {
                    if (r[a] != null) {
                        e[a].style.display = r[a]
                    }
                }
                return e
            }
            C.fn.extend({
                show: function() {
                    return he(this, true)
                },
                hide: function() {
                    return he(this)
                },
                toggle: function(e) {
                    if (typeof e === "boolean") {
                        return e ? this.show() : this.hide()
                    }
                    return this.each(function() {
                        if (ue(this)) {
                            C(this).show()
                        } else {
                            C(this).hide()
                        }
                    })
                }
            });
            var pe = /^(?:checkbox|radio)$/i;
            var ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
            var me = /^$|^module$|\/(?:java|ecma)script/i;
            (function() {
                var e = D.createDocumentFragment()
                  , t = e.appendChild(D.createElement("div"))
                  , n = D.createElement("input");
                n.setAttribute("type", "radio");
                n.setAttribute("checked", "checked");
                n.setAttribute("name", "t");
                t.appendChild(n);
                y.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
                t.innerHTML = "<textarea>x</textarea>";
                y.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue;
                t.innerHTML = "<option></option>";
                y.option = !!t.lastChild
            }
            )();
            var ye = {
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
            ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead;
            ye.th = ye.td;
            if (!y.option) {
                ye.optgroup = ye.option = [1, "<select multiple='multiple'>", "</select>"]
            }
            function ge(e, t) {
                var n;
                if (typeof e.getElementsByTagName !== "undefined") {
                    n = e.getElementsByTagName(t || "*")
                } else if (typeof e.querySelectorAll !== "undefined") {
                    n = e.querySelectorAll(t || "*")
                } else {
                    n = []
                }
                if (t === undefined || t && M(e, t)) {
                    return C.merge([e], n)
                }
                return n
            }
            function Se(e, t) {
                var n = 0
                  , i = e.length;
                for (; n < i; n++) {
                    $.set(e[n], "globalEval", !t || $.get(t[n], "globalEval"))
                }
            }
            var be = /<|&#?\w+;/;
            function we(e, t, n, i, r) {
                var a, o, s, l, u, f, d = t.createDocumentFragment(), c = [], h = 0, p = e.length;
                for (; h < p; h++) {
                    a = e[h];
                    if (a || a === 0) {
                        if (w(a) === "object") {
                            C.merge(c, a.nodeType ? [a] : a)
                        } else if (!be.test(a)) {
                            c.push(t.createTextNode(a))
                        } else {
                            o = o || d.appendChild(t.createElement("div"));
                            s = (ve.exec(a) || ["", ""])[1].toLowerCase();
                            l = ye[s] || ye._default;
                            o.innerHTML = l[1] + C.htmlPrefilter(a) + l[2];
                            f = l[0];
                            while (f--) {
                                o = o.lastChild
                            }
                            C.merge(c, o.childNodes);
                            o = d.firstChild;
                            o.textContent = ""
                        }
                    }
                }
                d.textContent = "";
                h = 0;
                while (a = c[h++]) {
                    if (i && C.inArray(a, i) > -1) {
                        if (r) {
                            r.push(a)
                        }
                        continue
                    }
                    u = se(a);
                    o = ge(d.appendChild(a), "script");
                    if (u) {
                        Se(o)
                    }
                    if (n) {
                        f = 0;
                        while (a = o[f++]) {
                            if (me.test(a.type || "")) {
                                n.push(a)
                            }
                        }
                    }
                }
                return d
            }
            var Pe = /^([^.]*)(?:\.(.+)|)/;
            function _e() {
                return true
            }
            function De() {
                return false
            }
            function Ce(e, t) {
                return e === Te() === (t === "focus")
            }
            function Te() {
                try {
                    return D.activeElement
                } catch (e) {}
            }
            function Me(e, t, n, i, r, a) {
                var o, s;
                if (typeof t === "object") {
                    if (typeof n !== "string") {
                        i = i || n;
                        n = undefined
                    }
                    for (s in t) {
                        Me(e, s, n, i, t[s], a)
                    }
                    return e
                }
                if (i == null && r == null) {
                    r = n;
                    i = n = undefined
                } else if (r == null) {
                    if (typeof n === "string") {
                        r = i;
                        i = undefined
                    } else {
                        r = i;
                        i = n;
                        n = undefined
                    }
                }
                if (r === false) {
                    r = De
                } else if (!r) {
                    return e
                }
                if (a === 1) {
                    o = r;
                    r = function(e) {
                        C().off(e);
                        return o.apply(this, arguments)
                    }
                    ;
                    r.guid = o.guid || (o.guid = C.guid++)
                }
                return e.each(function() {
                    C.event.add(this, t, r, i, n)
                })
            }
            C.event = {
                global: {},
                add: function(t, e, n, i, r) {
                    var a, o, s, l, u, f, d, c, h, p, v, m = $.get(t);
                    if (!X(t)) {
                        return
                    }
                    if (n.handler) {
                        a = n;
                        n = a.handler;
                        r = a.selector
                    }
                    if (r) {
                        C.find.matchesSelector(oe, r)
                    }
                    if (!n.guid) {
                        n.guid = C.guid++
                    }
                    if (!(l = m.events)) {
                        l = m.events = Object.create(null)
                    }
                    if (!(o = m.handle)) {
                        o = m.handle = function(e) {
                            return typeof C !== "undefined" && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : undefined
                        }
                    }
                    e = (e || "").match(O) || [""];
                    u = e.length;
                    while (u--) {
                        s = Pe.exec(e[u]) || [];
                        h = v = s[1];
                        p = (s[2] || "").split(".").sort();
                        if (!h) {
                            continue
                        }
                        d = C.event.special[h] || {};
                        h = (r ? d.delegateType : d.bindType) || h;
                        d = C.event.special[h] || {};
                        f = C.extend({
                            type: h,
                            origType: v,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && C.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, a);
                        if (!(c = l[h])) {
                            c = l[h] = [];
                            c.delegateCount = 0;
                            if (!d.setup || d.setup.call(t, i, p, o) === false) {
                                if (t.addEventListener) {
                                    t.addEventListener(h, o)
                                }
                            }
                        }
                        if (d.add) {
                            d.add.call(t, f);
                            if (!f.handler.guid) {
                                f.handler.guid = n.guid
                            }
                        }
                        if (r) {
                            c.splice(c.delegateCount++, 0, f)
                        } else {
                            c.push(f)
                        }
                        C.event.global[h] = true
                    }
                },
                remove: function(e, t, n, i, r) {
                    var a, o, s, l, u, f, d, c, h, p, v, m = $.hasData(e) && $.get(e);
                    if (!m || !(l = m.events)) {
                        return
                    }
                    t = (t || "").match(O) || [""];
                    u = t.length;
                    while (u--) {
                        s = Pe.exec(t[u]) || [];
                        h = v = s[1];
                        p = (s[2] || "").split(".").sort();
                        if (!h) {
                            for (h in l) {
                                C.event.remove(e, h + t[u], n, i, true)
                            }
                            continue
                        }
                        d = C.event.special[h] || {};
                        h = (i ? d.delegateType : d.bindType) || h;
                        c = l[h] || [];
                        s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)");
                        o = a = c.length;
                        while (a--) {
                            f = c[a];
                            if ((r || v === f.origType) && (!n || n.guid === f.guid) && (!s || s.test(f.namespace)) && (!i || i === f.selector || i === "**" && f.selector)) {
                                c.splice(a, 1);
                                if (f.selector) {
                                    c.delegateCount--
                                }
                                if (d.remove) {
                                    d.remove.call(e, f)
                                }
                            }
                        }
                        if (o && !c.length) {
                            if (!d.teardown || d.teardown.call(e, p, m.handle) === false) {
                                C.removeEvent(e, h, m.handle)
                            }
                            delete l[h]
                        }
                    }
                    if (C.isEmptyObject(l)) {
                        $.remove(e, "handle events")
                    }
                },
                dispatch: function(e) {
                    var t, n, i, r, a, o, s = new Array(arguments.length), l = C.event.fix(e), u = ($.get(this, "events") || Object.create(null))[l.type] || [], f = C.event.special[l.type] || {};
                    s[0] = l;
                    for (t = 1; t < arguments.length; t++) {
                        s[t] = arguments[t]
                    }
                    l.delegateTarget = this;
                    if (f.preDispatch && f.preDispatch.call(this, l) === false) {
                        return
                    }
                    o = C.event.handlers.call(this, l, u);
                    t = 0;
                    while ((r = o[t++]) && !l.isPropagationStopped()) {
                        l.currentTarget = r.elem;
                        n = 0;
                        while ((a = r.handlers[n++]) && !l.isImmediatePropagationStopped()) {
                            if (!l.rnamespace || a.namespace === false || l.rnamespace.test(a.namespace)) {
                                l.handleObj = a;
                                l.data = a.data;
                                i = ((C.event.special[a.origType] || {}).handle || a.handler).apply(r.elem, s);
                                if (i !== undefined) {
                                    if ((l.result = i) === false) {
                                        l.preventDefault();
                                        l.stopPropagation()
                                    }
                                }
                            }
                        }
                    }
                    if (f.postDispatch) {
                        f.postDispatch.call(this, l)
                    }
                    return l.result
                },
                handlers: function(e, t) {
                    var n, i, r, a, o, s = [], l = t.delegateCount, u = e.target;
                    if (l && u.nodeType && !(e.type === "click" && e.button >= 1)) {
                        for (; u !== this; u = u.parentNode || this) {
                            if (u.nodeType === 1 && !(e.type === "click" && u.disabled === true)) {
                                a = [];
                                o = {};
                                for (n = 0; n < l; n++) {
                                    i = t[n];
                                    r = i.selector + " ";
                                    if (o[r] === undefined) {
                                        o[r] = i.needsContext ? C(r, this).index(u) > -1 : C.find(r, this, null, [u]).length
                                    }
                                    if (o[r]) {
                                        a.push(i)
                                    }
                                }
                                if (a.length) {
                                    s.push({
                                        elem: u,
                                        handlers: a
                                    })
                                }
                            }
                        }
                    }
                    u = this;
                    if (l < t.length) {
                        s.push({
                            elem: u,
                            handlers: t.slice(l)
                        })
                    }
                    return s
                },
                addProp: function(t, e) {
                    Object.defineProperty(C.Event.prototype, t, {
                        enumerable: true,
                        configurable: true,
                        get: g(e) ? function() {
                            if (this.originalEvent) {
                                return e(this.originalEvent)
                            }
                        }
                        : function() {
                            if (this.originalEvent) {
                                return this.originalEvent[t]
                            }
                        }
                        ,
                        set: function(e) {
                            Object.defineProperty(this, t, {
                                enumerable: true,
                                configurable: true,
                                writable: true,
                                value: e
                            })
                        }
                    })
                },
                fix: function(e) {
                    return e[C.expando] ? e : new C.Event(e)
                },
                special: {
                    load: {
                        noBubble: true
                    },
                    click: {
                        setup: function(e) {
                            var t = this || e;
                            if (pe.test(t.type) && t.click && M(t, "input")) {
                                ke(t, "click", _e)
                            }
                            return false
                        },
                        trigger: function(e) {
                            var t = this || e;
                            if (pe.test(t.type) && t.click && M(t, "input")) {
                                ke(t, "click")
                            }
                            return true
                        },
                        _default: function(e) {
                            var t = e.target;
                            return pe.test(t.type) && t.click && M(t, "input") && $.get(t, "click") || M(t, "a")
                        }
                    },
                    beforeunload: {
                        postDispatch: function(e) {
                            if (e.result !== undefined && e.originalEvent) {
                                e.originalEvent.returnValue = e.result
                            }
                        }
                    }
                }
            };
            function ke(e, r, a) {
                if (!a) {
                    if ($.get(e, r) === undefined) {
                        C.event.add(e, r, _e)
                    }
                    return
                }
                $.set(e, r, false);
                C.event.add(e, r, {
                    namespace: false,
                    handler: function(e) {
                        var t, n, i = $.get(this, r);
                        if (e.isTrigger & 1 && this[r]) {
                            if (!i.length) {
                                i = s.call(arguments);
                                $.set(this, r, i);
                                t = a(this, r);
                                this[r]();
                                n = $.get(this, r);
                                if (i !== n || t) {
                                    $.set(this, r, false)
                                } else {
                                    n = {}
                                }
                                if (i !== n) {
                                    e.stopImmediatePropagation();
                                    e.preventDefault();
                                    return n && n.value
                                }
                            } else if ((C.event.special[r] || {}).delegateType) {
                                e.stopPropagation()
                            }
                        } else if (i.length) {
                            $.set(this, r, {
                                value: C.event.trigger(C.extend(i[0], C.Event.prototype), i.slice(1), this)
                            });
                            e.stopImmediatePropagation()
                        }
                    }
                })
            }
            C.removeEvent = function(e, t, n) {
                if (e.removeEventListener) {
                    e.removeEventListener(t, n)
                }
            }
            ;
            C.Event = function(e, t) {
                if (!(this instanceof C.Event)) {
                    return new C.Event(e,t)
                }
                if (e && e.type) {
                    this.originalEvent = e;
                    this.type = e.type;
                    this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? _e : De;
                    this.target = e.target && e.target.nodeType === 3 ? e.target.parentNode : e.target;
                    this.currentTarget = e.currentTarget;
                    this.relatedTarget = e.relatedTarget
                } else {
                    this.type = e
                }
                if (t) {
                    C.extend(this, t)
                }
                this.timeStamp = e && e.timeStamp || Date.now();
                this[C.expando] = true
            }
            ;
            C.Event.prototype = {
                constructor: C.Event,
                isDefaultPrevented: De,
                isPropagationStopped: De,
                isImmediatePropagationStopped: De,
                isSimulated: false,
                preventDefault: function() {
                    var e = this.originalEvent;
                    this.isDefaultPrevented = _e;
                    if (e && !this.isSimulated) {
                        e.preventDefault()
                    }
                },
                stopPropagation: function() {
                    var e = this.originalEvent;
                    this.isPropagationStopped = _e;
                    if (e && !this.isSimulated) {
                        e.stopPropagation()
                    }
                },
                stopImmediatePropagation: function() {
                    var e = this.originalEvent;
                    this.isImmediatePropagationStopped = _e;
                    if (e && !this.isSimulated) {
                        e.stopImmediatePropagation()
                    }
                    this.stopPropagation()
                }
            };
            C.each({
                altKey: true,
                bubbles: true,
                cancelable: true,
                changedTouches: true,
                ctrlKey: true,
                detail: true,
                eventPhase: true,
                metaKey: true,
                pageX: true,
                pageY: true,
                shiftKey: true,
                view: true,
                char: true,
                code: true,
                charCode: true,
                key: true,
                keyCode: true,
                button: true,
                buttons: true,
                clientX: true,
                clientY: true,
                offsetX: true,
                offsetY: true,
                pointerId: true,
                pointerType: true,
                screenX: true,
                screenY: true,
                targetTouches: true,
                toElement: true,
                touches: true,
                which: true
            }, C.event.addProp);
            C.each({
                focus: "focusin",
                blur: "focusout"
            }, function(e, t) {
                C.event.special[e] = {
                    setup: function() {
                        ke(this, e, Ce);
                        return false
                    },
                    trigger: function() {
                        ke(this, e);
                        return true
                    },
                    _default: function() {
                        return true
                    },
                    delegateType: t
                }
            });
            C.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, function(e, a) {
                C.event.special[e] = {
                    delegateType: a,
                    bindType: a,
                    handle: function(e) {
                        var t, n = this, i = e.relatedTarget, r = e.handleObj;
                        if (!i || i !== n && !C.contains(n, i)) {
                            e.type = r.origType;
                            t = r.handler.apply(this, arguments);
                            e.type = a
                        }
                        return t
                    }
                }
            });
            C.fn.extend({
                on: function(e, t, n, i) {
                    return Me(this, e, t, n, i)
                },
                one: function(e, t, n, i) {
                    return Me(this, e, t, n, i, 1)
                },
                off: function(e, t, n) {
                    var i, r;
                    if (e && e.preventDefault && e.handleObj) {
                        i = e.handleObj;
                        C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                        return this
                    }
                    if (typeof e === "object") {
                        for (r in e) {
                            this.off(r, t, e[r])
                        }
                        return this
                    }
                    if (t === false || typeof t === "function") {
                        n = t;
                        t = undefined
                    }
                    if (n === false) {
                        n = De
                    }
                    return this.each(function() {
                        C.event.remove(this, e, n, t)
                    })
                }
            });
            var xe = /<script|<style|<link/i
              , Ie = /checked\s*(?:[^=]|=\s*.checked.)/i
              , Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Ae(e, t) {
                if (M(e, "table") && M(t.nodeType !== 11 ? t : t.firstChild, "tr")) {
                    return C(e).children("tbody")[0] || e
                }
                return e
            }
            function Ee(e) {
                e.type = (e.getAttribute("type") !== null) + "/" + e.type;
                return e
            }
            function ze(e) {
                if ((e.type || "").slice(0, 5) === "true/") {
                    e.type = e.type.slice(5)
                } else {
                    e.removeAttribute("type")
                }
                return e
            }
            function Be(e, t) {
                var n, i, r, a, o, s, l;
                if (t.nodeType !== 1) {
                    return
                }
                if ($.hasData(e)) {
                    a = $.get(e);
                    l = a.events;
                    if (l) {
                        $.remove(t, "handle events");
                        for (r in l) {
                            for (n = 0,
                            i = l[r].length; n < i; n++) {
                                C.event.add(t, r, l[r][n])
                            }
                        }
                    }
                }
                if (Z.hasData(e)) {
                    o = Z.access(e);
                    s = C.extend({}, o);
                    Z.set(t, s)
                }
            }
            function Oe(e, t) {
                var n = t.nodeName.toLowerCase();
                if (n === "input" && pe.test(e.type)) {
                    t.checked = e.checked
                } else if (n === "input" || n === "textarea") {
                    t.defaultValue = e.defaultValue
                }
            }
            function Fe(n, i, r, a) {
                i = v(i);
                var e, t, o, s, l, u, f = 0, d = n.length, c = d - 1, h = i[0], p = g(h);
                if (p || d > 1 && typeof h === "string" && !y.checkClone && Ie.test(h)) {
                    return n.each(function(e) {
                        var t = n.eq(e);
                        if (p) {
                            i[0] = h.call(this, e, t.html())
                        }
                        Fe(t, i, r, a)
                    })
                }
                if (d) {
                    e = we(i, n[0].ownerDocument, false, n, a);
                    t = e.firstChild;
                    if (e.childNodes.length === 1) {
                        e = t
                    }
                    if (t || a) {
                        o = C.map(ge(e, "script"), Ee);
                        s = o.length;
                        for (; f < d; f++) {
                            l = e;
                            if (f !== c) {
                                l = C.clone(l, true, true);
                                if (s) {
                                    C.merge(o, ge(l, "script"))
                                }
                            }
                            r.call(n[f], l, f)
                        }
                        if (s) {
                            u = o[o.length - 1].ownerDocument;
                            C.map(o, ze);
                            for (f = 0; f < s; f++) {
                                l = o[f];
                                if (me.test(l.type || "") && !$.access(l, "globalEval") && C.contains(u, l)) {
                                    if (l.src && (l.type || "").toLowerCase() !== "module") {
                                        if (C._evalUrl && !l.noModule) {
                                            C._evalUrl(l.src, {
                                                nonce: l.nonce || l.getAttribute("nonce")
                                            }, u)
                                        }
                                    } else {
                                        b(l.textContent.replace(Re, ""), l, u)
                                    }
                                }
                            }
                        }
                    }
                }
                return n
            }
            function Le(e, t, n) {
                var i, r = t ? C.filter(t, e) : e, a = 0;
                for (; (i = r[a]) != null; a++) {
                    if (!n && i.nodeType === 1) {
                        C.cleanData(ge(i))
                    }
                    if (i.parentNode) {
                        if (n && se(i)) {
                            Se(ge(i, "script"))
                        }
                        i.parentNode.removeChild(i)
                    }
                }
                return e
            }
            C.extend({
                htmlPrefilter: function(e) {
                    return e
                },
                clone: function(e, t, n) {
                    var i, r, a, o, s = e.cloneNode(true), l = se(e);
                    if (!y.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !C.isXMLDoc(e)) {
                        o = ge(s);
                        a = ge(e);
                        for (i = 0,
                        r = a.length; i < r; i++) {
                            Oe(a[i], o[i])
                        }
                    }
                    if (t) {
                        if (n) {
                            a = a || ge(e);
                            o = o || ge(s);
                            for (i = 0,
                            r = a.length; i < r; i++) {
                                Be(a[i], o[i])
                            }
                        } else {
                            Be(e, s)
                        }
                    }
                    o = ge(s, "script");
                    if (o.length > 0) {
                        Se(o, !l && ge(e, "script"))
                    }
                    return s
                },
                cleanData: function(e) {
                    var t, n, i, r = C.event.special, a = 0;
                    for (; (n = e[a]) !== undefined; a++) {
                        if (X(n)) {
                            if (t = n[$.expando]) {
                                if (t.events) {
                                    for (i in t.events) {
                                        if (r[i]) {
                                            C.event.remove(n, i)
                                        } else {
                                            C.removeEvent(n, i, t.handle)
                                        }
                                    }
                                }
                                n[$.expando] = undefined
                            }
                            if (n[Z.expando]) {
                                n[Z.expando] = undefined
                            }
                        }
                    }
                }
            });
            C.fn.extend({
                detach: function(e) {
                    return Le(this, e, true)
                },
                remove: function(e) {
                    return Le(this, e)
                },
                text: function(e) {
                    return J(this, function(e) {
                        return e === undefined ? C.text(this) : this.empty().each(function() {
                            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                                this.textContent = e
                            }
                        })
                    }, null, e, arguments.length)
                },
                append: function() {
                    return Fe(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = Ae(this, e);
                            t.appendChild(e)
                        }
                    })
                },
                prepend: function() {
                    return Fe(this, arguments, function(e) {
                        if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                            var t = Ae(this, e);
                            t.insertBefore(e, t.firstChild)
                        }
                    })
                },
                before: function() {
                    return Fe(this, arguments, function(e) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(e, this)
                        }
                    })
                },
                after: function() {
                    return Fe(this, arguments, function(e) {
                        if (this.parentNode) {
                            this.parentNode.insertBefore(e, this.nextSibling)
                        }
                    })
                },
                empty: function() {
                    var e, t = 0;
                    for (; (e = this[t]) != null; t++) {
                        if (e.nodeType === 1) {
                            C.cleanData(ge(e, false));
                            e.textContent = ""
                        }
                    }
                    return this
                },
                clone: function(e, t) {
                    e = e == null ? false : e;
                    t = t == null ? e : t;
                    return this.map(function() {
                        return C.clone(this, e, t)
                    })
                },
                html: function(e) {
                    return J(this, function(e) {
                        var t = this[0] || {}
                          , n = 0
                          , i = this.length;
                        if (e === undefined && t.nodeType === 1) {
                            return t.innerHTML
                        }
                        if (typeof e === "string" && !xe.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
                            e = C.htmlPrefilter(e);
                            try {
                                for (; n < i; n++) {
                                    t = this[n] || {};
                                    if (t.nodeType === 1) {
                                        C.cleanData(ge(t, false));
                                        t.innerHTML = e
                                    }
                                }
                                t = 0
                            } catch (e) {}
                        }
                        if (t) {
                            this.empty().append(e)
                        }
                    }, null, e, arguments.length)
                },
                replaceWith: function() {
                    var n = [];
                    return Fe(this, arguments, function(e) {
                        var t = this.parentNode;
                        if (C.inArray(this, n) < 0) {
                            C.cleanData(ge(this));
                            if (t) {
                                t.replaceChild(e, this)
                            }
                        }
                    }, n)
                }
            });
            C.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, function(e, o) {
                C.fn[e] = function(e) {
                    var t, n = [], i = C(e), r = i.length - 1, a = 0;
                    for (; a <= r; a++) {
                        t = a === r ? this : this.clone(true);
                        C(i[a])[o](t);
                        l.apply(n, t.get())
                    }
                    return this.pushStack(n)
                }
            });
            var Ue = new RegExp("^(" + ie + ")(?!px)[a-z%]+$","i");
            var Ne = function(e) {
                var t = e.ownerDocument.defaultView;
                if (!t || !t.opener) {
                    t = _
                }
                return t.getComputedStyle(e)
            };
            var We = function(e, t, n) {
                var i, r, a = {};
                for (r in t) {
                    a[r] = e.style[r];
                    e.style[r] = t[r]
                }
                i = n.call(e);
                for (r in t) {
                    e.style[r] = a[r]
                }
                return i
            };
            var qe = new RegExp(ae.join("|"),"i");
            (function() {
                function e() {
                    if (!u) {
                        return
                    }
                    l.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0";
                    u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%";
                    oe.appendChild(l).appendChild(u);
                    var e = _.getComputedStyle(u);
                    n = e.top !== "1%";
                    s = t(e.marginLeft) === 12;
                    u.style.right = "60%";
                    a = t(e.right) === 36;
                    i = t(e.width) === 36;
                    u.style.position = "absolute";
                    r = t(u.offsetWidth / 3) === 12;
                    oe.removeChild(l);
                    u = null
                }
                function t(e) {
                    return Math.round(parseFloat(e))
                }
                var n, i, r, a, o, s, l = D.createElement("div"), u = D.createElement("div");
                if (!u.style) {
                    return
                }
                u.style.backgroundClip = "content-box";
                u.cloneNode(true).style.backgroundClip = "";
                y.clearCloneStyle = u.style.backgroundClip === "content-box";
                C.extend(y, {
                    boxSizingReliable: function() {
                        e();
                        return i
                    },
                    pixelBoxStyles: function() {
                        e();
                        return a
                    },
                    pixelPosition: function() {
                        e();
                        return n
                    },
                    reliableMarginLeft: function() {
                        e();
                        return s
                    },
                    scrollboxSize: function() {
                        e();
                        return r
                    },
                    reliableTrDimensions: function() {
                        var e, t, n, i;
                        if (o == null) {
                            e = D.createElement("table");
                            t = D.createElement("tr");
                            n = D.createElement("div");
                            e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
                            t.style.cssText = "border:1px solid";
                            t.style.height = "1px";
                            n.style.height = "9px";
                            n.style.display = "block";
                            oe.appendChild(e).appendChild(t).appendChild(n);
                            i = _.getComputedStyle(t);
                            o = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === t.offsetHeight;
                            oe.removeChild(e)
                        }
                        return o
                    }
                })
            }
            )();
            function He(e, t, n) {
                var i, r, a, o, s = e.style;
                n = n || Ne(e);
                if (n) {
                    o = n.getPropertyValue(t) || n[t];
                    if (o === "" && !se(e)) {
                        o = C.style(e, t)
                    }
                    if (!y.pixelBoxStyles() && Ue.test(o) && qe.test(t)) {
                        i = s.width;
                        r = s.minWidth;
                        a = s.maxWidth;
                        s.minWidth = s.maxWidth = s.width = o;
                        o = n.width;
                        s.width = i;
                        s.minWidth = r;
                        s.maxWidth = a
                    }
                }
                return o !== undefined ? o + "" : o
            }
            function Je(e, t) {
                return {
                    get: function() {
                        if (e()) {
                            delete this.get;
                            return
                        }
                        return (this.get = t).apply(this, arguments)
                    }
                }
            }
            var Ye = ["Webkit", "Moz", "ms"]
              , je = D.createElement("div").style
              , Ve = {};
            function Ge(e) {
                var t = e[0].toUpperCase() + e.slice(1)
                  , n = Ye.length;
                while (n--) {
                    e = Ye[n] + t;
                    if (e in je) {
                        return e
                    }
                }
            }
            function Xe(e) {
                var t = C.cssProps[e] || Ve[e];
                if (t) {
                    return t
                }
                if (e in je) {
                    return e
                }
                return Ve[e] = Ge(e) || e
            }
            var Ke = /^(none|table(?!-c[ea]).+)/
              , $e = /^--/
              , Ze = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }
              , Qe = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function et(e, t, n) {
                var i = re.exec(t);
                return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
            }
            function tt(e, t, n, i, r, a) {
                var o = t === "width" ? 1 : 0
                  , s = 0
                  , l = 0;
                if (n === (i ? "border" : "content")) {
                    return 0
                }
                for (; o < 4; o += 2) {
                    if (n === "margin") {
                        l += C.css(e, n + ae[o], true, r)
                    }
                    if (!i) {
                        l += C.css(e, "padding" + ae[o], true, r);
                        if (n !== "padding") {
                            l += C.css(e, "border" + ae[o] + "Width", true, r)
                        } else {
                            s += C.css(e, "border" + ae[o] + "Width", true, r)
                        }
                    } else {
                        if (n === "content") {
                            l -= C.css(e, "padding" + ae[o], true, r)
                        }
                        if (n !== "margin") {
                            l -= C.css(e, "border" + ae[o] + "Width", true, r)
                        }
                    }
                }
                if (!i && a >= 0) {
                    l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - s - .5)) || 0
                }
                return l
            }
            function nt(e, t, n) {
                var i = Ne(e)
                  , r = !y.boxSizingReliable() || n
                  , a = r && C.css(e, "boxSizing", false, i) === "border-box"
                  , o = a
                  , s = He(e, t, i)
                  , l = "offset" + t[0].toUpperCase() + t.slice(1);
                if (Ue.test(s)) {
                    if (!n) {
                        return s
                    }
                    s = "auto"
                }
                if ((!y.boxSizingReliable() && a || !y.reliableTrDimensions() && M(e, "tr") || s === "auto" || !parseFloat(s) && C.css(e, "display", false, i) === "inline") && e.getClientRects().length) {
                    a = C.css(e, "boxSizing", false, i) === "border-box";
                    o = l in e;
                    if (o) {
                        s = e[l]
                    }
                }
                s = parseFloat(s) || 0;
                return s + tt(e, t, n || (a ? "border" : "content"), o, i, s) + "px"
            }
            C.extend({
                cssHooks: {
                    opacity: {
                        get: function(e, t) {
                            if (t) {
                                var n = He(e, "opacity");
                                return n === "" ? "1" : n
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: true,
                    columnCount: true,
                    fillOpacity: true,
                    flexGrow: true,
                    flexShrink: true,
                    fontWeight: true,
                    gridArea: true,
                    gridColumn: true,
                    gridColumnEnd: true,
                    gridColumnStart: true,
                    gridRow: true,
                    gridRowEnd: true,
                    gridRowStart: true,
                    lineHeight: true,
                    opacity: true,
                    order: true,
                    orphans: true,
                    widows: true,
                    zIndex: true,
                    zoom: true
                },
                cssProps: {},
                style: function(e, t, n, i) {
                    if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                        return
                    }
                    var r, a, o, s = G(t), l = $e.test(t), u = e.style;
                    if (!l) {
                        t = Xe(s)
                    }
                    o = C.cssHooks[t] || C.cssHooks[s];
                    if (n !== undefined) {
                        a = typeof n;
                        if (a === "string" && (r = re.exec(n)) && r[1]) {
                            n = fe(e, t, r);
                            a = "number"
                        }
                        if (n == null || n !== n) {
                            return
                        }
                        if (a === "number" && !l) {
                            n += r && r[3] || (C.cssNumber[s] ? "" : "px")
                        }
                        if (!y.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                            u[t] = "inherit"
                        }
                        if (!o || !("set"in o) || (n = o.set(e, n, i)) !== undefined) {
                            if (l) {
                                u.setProperty(t, n)
                            } else {
                                u[t] = n
                            }
                        }
                    } else {
                        if (o && "get"in o && (r = o.get(e, false, i)) !== undefined) {
                            return r
                        }
                        return u[t]
                    }
                },
                css: function(e, t, n, i) {
                    var r, a, o, s = G(t), l = $e.test(t);
                    if (!l) {
                        t = Xe(s)
                    }
                    o = C.cssHooks[t] || C.cssHooks[s];
                    if (o && "get"in o) {
                        r = o.get(e, true, n)
                    }
                    if (r === undefined) {
                        r = He(e, t, i)
                    }
                    if (r === "normal" && t in Qe) {
                        r = Qe[t]
                    }
                    if (n === "" || n) {
                        a = parseFloat(r);
                        return n === true || isFinite(a) ? a || 0 : r
                    }
                    return r
                }
            });
            C.each(["height", "width"], function(e, u) {
                C.cssHooks[u] = {
                    get: function(e, t, n) {
                        if (t) {
                            return Ke.test(C.css(e, "display")) && (!e.getClientRects().length || !e.getBoundingClientRect().width) ? We(e, Ze, function() {
                                return nt(e, u, n)
                            }) : nt(e, u, n)
                        }
                    },
                    set: function(e, t, n) {
                        var i, r = Ne(e), a = !y.scrollboxSize() && r.position === "absolute", o = a || n, s = o && C.css(e, "boxSizing", false, r) === "border-box", l = n ? tt(e, u, n, s, r) : 0;
                        if (s && a) {
                            l -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(r[u]) - tt(e, u, "border", false, r) - .5)
                        }
                        if (l && (i = re.exec(t)) && (i[3] || "px") !== "px") {
                            e.style[u] = t;
                            t = C.css(e, u)
                        }
                        return et(e, t, l)
                    }
                }
            });
            C.cssHooks.marginLeft = Je(y.reliableMarginLeft, function(e, t) {
                if (t) {
                    return (parseFloat(He(e, "marginLeft")) || e.getBoundingClientRect().left - We(e, {
                        marginLeft: 0
                    }, function() {
                        return e.getBoundingClientRect().left
                    })) + "px"
                }
            });
            C.each({
                margin: "",
                padding: "",
                border: "Width"
            }, function(r, a) {
                C.cssHooks[r + a] = {
                    expand: function(e) {
                        var t = 0
                          , n = {}
                          , i = typeof e === "string" ? e.split(" ") : [e];
                        for (; t < 4; t++) {
                            n[r + ae[t] + a] = i[t] || i[t - 2] || i[0]
                        }
                        return n
                    }
                };
                if (r !== "margin") {
                    C.cssHooks[r + a].set = et
                }
            });
            C.fn.extend({
                css: function(e, t) {
                    return J(this, function(e, t, n) {
                        var i, r, a = {}, o = 0;
                        if (Array.isArray(t)) {
                            i = Ne(e);
                            r = t.length;
                            for (; o < r; o++) {
                                a[t[o]] = C.css(e, t[o], false, i)
                            }
                            return a
                        }
                        return n !== undefined ? C.style(e, t, n) : C.css(e, t)
                    }, e, t, arguments.length > 1)
                }
            });
            function it(e, t, n, i, r) {
                return new it.prototype.init(e,t,n,i,r)
            }
            C.Tween = it;
            it.prototype = {
                constructor: it,
                init: function(e, t, n, i, r, a) {
                    this.elem = e;
                    this.prop = n;
                    this.easing = r || C.easing._default;
                    this.options = t;
                    this.start = this.now = this.cur();
                    this.end = i;
                    this.unit = a || (C.cssNumber[n] ? "" : "px")
                },
                cur: function() {
                    var e = it.propHooks[this.prop];
                    return e && e.get ? e.get(this) : it.propHooks._default.get(this)
                },
                run: function(e) {
                    var t, n = it.propHooks[this.prop];
                    if (this.options.duration) {
                        this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
                    } else {
                        this.pos = t = e
                    }
                    this.now = (this.end - this.start) * t + this.start;
                    if (this.options.step) {
                        this.options.step.call(this.elem, this.now, this)
                    }
                    if (n && n.set) {
                        n.set(this)
                    } else {
                        it.propHooks._default.set(this)
                    }
                    return this
                }
            };
            it.prototype.init.prototype = it.prototype;
            it.propHooks = {
                _default: {
                    get: function(e) {
                        var t;
                        if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                            return e.elem[e.prop]
                        }
                        t = C.css(e.elem, e.prop, "");
                        return !t || t === "auto" ? 0 : t
                    },
                    set: function(e) {
                        if (C.fx.step[e.prop]) {
                            C.fx.step[e.prop](e)
                        } else if (e.elem.nodeType === 1 && (C.cssHooks[e.prop] || e.elem.style[Xe(e.prop)] != null)) {
                            C.style(e.elem, e.prop, e.now + e.unit)
                        } else {
                            e.elem[e.prop] = e.now
                        }
                    }
                }
            };
            it.propHooks.scrollTop = it.propHooks.scrollLeft = {
                set: function(e) {
                    if (e.elem.nodeType && e.elem.parentNode) {
                        e.elem[e.prop] = e.now
                    }
                }
            };
            C.easing = {
                linear: function(e) {
                    return e
                },
                swing: function(e) {
                    return .5 - Math.cos(e * Math.PI) / 2
                },
                _default: "swing"
            };
            C.fx = it.prototype.init;
            C.fx.step = {};
            var rt, at, ot = /^(?:toggle|show|hide)$/, st = /queueHooks$/;
            function lt() {
                if (at) {
                    if (D.hidden === false && _.requestAnimationFrame) {
                        _.requestAnimationFrame(lt)
                    } else {
                        _.setTimeout(lt, C.fx.interval)
                    }
                    C.fx.tick()
                }
            }
            function ut() {
                _.setTimeout(function() {
                    rt = undefined
                });
                return rt = Date.now()
            }
            function ft(e, t) {
                var n, i = 0, r = {
                    height: e
                };
                t = t ? 1 : 0;
                for (; i < 4; i += 2 - t) {
                    n = ae[i];
                    r["margin" + n] = r["padding" + n] = e
                }
                if (t) {
                    r.opacity = r.width = e
                }
                return r
            }
            function dt(e, t, n) {
                var i, r = (pt.tweeners[t] || []).concat(pt.tweeners["*"]), a = 0, o = r.length;
                for (; a < o; a++) {
                    if (i = r[a].call(n, t, e)) {
                        return i
                    }
                }
            }
            function ct(e, t, n) {
                var i, r, a, o, s, l, u, f, d = "width"in t || "height"in t, c = this, h = {}, p = e.style, v = e.nodeType && ue(e), m = $.get(e, "fxshow");
                if (!n.queue) {
                    o = C._queueHooks(e, "fx");
                    if (o.unqueued == null) {
                        o.unqueued = 0;
                        s = o.empty.fire;
                        o.empty.fire = function() {
                            if (!o.unqueued) {
                                s()
                            }
                        }
                    }
                    o.unqueued++;
                    c.always(function() {
                        c.always(function() {
                            o.unqueued--;
                            if (!C.queue(e, "fx").length) {
                                o.empty.fire()
                            }
                        })
                    })
                }
                for (i in t) {
                    r = t[i];
                    if (ot.test(r)) {
                        delete t[i];
                        a = a || r === "toggle";
                        if (r === (v ? "hide" : "show")) {
                            if (r === "show" && m && m[i] !== undefined) {
                                v = true
                            } else {
                                continue
                            }
                        }
                        h[i] = m && m[i] || C.style(e, i)
                    }
                }
                l = !C.isEmptyObject(t);
                if (!l && C.isEmptyObject(h)) {
                    return
                }
                if (d && e.nodeType === 1) {
                    n.overflow = [p.overflow, p.overflowX, p.overflowY];
                    u = m && m.display;
                    if (u == null) {
                        u = $.get(e, "display")
                    }
                    f = C.css(e, "display");
                    if (f === "none") {
                        if (u) {
                            f = u
                        } else {
                            he([e], true);
                            u = e.style.display || u;
                            f = C.css(e, "display");
                            he([e])
                        }
                    }
                    if (f === "inline" || f === "inline-block" && u != null) {
                        if (C.css(e, "float") === "none") {
                            if (!l) {
                                c.done(function() {
                                    p.display = u
                                });
                                if (u == null) {
                                    f = p.display;
                                    u = f === "none" ? "" : f
                                }
                            }
                            p.display = "inline-block"
                        }
                    }
                }
                if (n.overflow) {
                    p.overflow = "hidden";
                    c.always(function() {
                        p.overflow = n.overflow[0];
                        p.overflowX = n.overflow[1];
                        p.overflowY = n.overflow[2]
                    })
                }
                l = false;
                for (i in h) {
                    if (!l) {
                        if (m) {
                            if ("hidden"in m) {
                                v = m.hidden
                            }
                        } else {
                            m = $.access(e, "fxshow", {
                                display: u
                            })
                        }
                        if (a) {
                            m.hidden = !v
                        }
                        if (v) {
                            he([e], true)
                        }
                        c.done(function() {
                            if (!v) {
                                he([e])
                            }
                            $.remove(e, "fxshow");
                            for (i in h) {
                                C.style(e, i, h[i])
                            }
                        })
                    }
                    l = dt(v ? m[i] : 0, i, c);
                    if (!(i in m)) {
                        m[i] = l.start;
                        if (v) {
                            l.end = l.start;
                            l.start = 0
                        }
                    }
                }
            }
            function ht(e, t) {
                var n, i, r, a, o;
                for (n in e) {
                    i = G(n);
                    r = t[i];
                    a = e[n];
                    if (Array.isArray(a)) {
                        r = a[1];
                        a = e[n] = a[0]
                    }
                    if (n !== i) {
                        e[i] = a;
                        delete e[n]
                    }
                    o = C.cssHooks[i];
                    if (o && "expand"in o) {
                        a = o.expand(a);
                        delete e[i];
                        for (n in a) {
                            if (!(n in e)) {
                                e[n] = a[n];
                                t[n] = r
                            }
                        }
                    } else {
                        t[i] = r
                    }
                }
            }
            function pt(o, e, t) {
                var n, s, i = 0, r = pt.prefilters.length, l = C.Deferred().always(function() {
                    delete a.elem
                }), a = function() {
                    if (s) {
                        return false
                    }
                    var e = rt || ut()
                      , t = Math.max(0, u.startTime + u.duration - e)
                      , n = t / u.duration || 0
                      , i = 1 - n
                      , r = 0
                      , a = u.tweens.length;
                    for (; r < a; r++) {
                        u.tweens[r].run(i)
                    }
                    l.notifyWith(o, [u, i, t]);
                    if (i < 1 && a) {
                        return t
                    }
                    if (!a) {
                        l.notifyWith(o, [u, 1, 0])
                    }
                    l.resolveWith(o, [u]);
                    return false
                }, u = l.promise({
                    elem: o,
                    props: C.extend({}, e),
                    opts: C.extend(true, {
                        specialEasing: {},
                        easing: C.easing._default
                    }, t),
                    originalProperties: e,
                    originalOptions: t,
                    startTime: rt || ut(),
                    duration: t.duration,
                    tweens: [],
                    createTween: function(e, t) {
                        var n = C.Tween(o, u.opts, e, t, u.opts.specialEasing[e] || u.opts.easing);
                        u.tweens.push(n);
                        return n
                    },
                    stop: function(e) {
                        var t = 0
                          , n = e ? u.tweens.length : 0;
                        if (s) {
                            return this
                        }
                        s = true;
                        for (; t < n; t++) {
                            u.tweens[t].run(1)
                        }
                        if (e) {
                            l.notifyWith(o, [u, 1, 0]);
                            l.resolveWith(o, [u, e])
                        } else {
                            l.rejectWith(o, [u, e])
                        }
                        return this
                    }
                }), f = u.props;
                ht(f, u.opts.specialEasing);
                for (; i < r; i++) {
                    n = pt.prefilters[i].call(u, o, f, u.opts);
                    if (n) {
                        if (g(n.stop)) {
                            C._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)
                        }
                        return n
                    }
                }
                C.map(f, dt, u);
                if (g(u.opts.start)) {
                    u.opts.start.call(o, u)
                }
                u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
                C.fx.timer(C.extend(a, {
                    elem: o,
                    anim: u,
                    queue: u.opts.queue
                }));
                return u
            }
            C.Animation = C.extend(pt, {
                tweeners: {
                    "*": [function(e, t) {
                        var n = this.createTween(e, t);
                        fe(n.elem, e, re.exec(t), n);
                        return n
                    }
                    ]
                },
                tweener: function(e, t) {
                    if (g(e)) {
                        t = e;
                        e = ["*"]
                    } else {
                        e = e.match(O)
                    }
                    var n, i = 0, r = e.length;
                    for (; i < r; i++) {
                        n = e[i];
                        pt.tweeners[n] = pt.tweeners[n] || [];
                        pt.tweeners[n].unshift(t)
                    }
                },
                prefilters: [ct],
                prefilter: function(e, t) {
                    if (t) {
                        pt.prefilters.unshift(e)
                    } else {
                        pt.prefilters.push(e)
                    }
                }
            });
            C.speed = function(e, t, n) {
                var i = e && typeof e === "object" ? C.extend({}, e) : {
                    complete: n || !n && t || g(e) && e,
                    duration: e,
                    easing: n && t || t && !g(t) && t
                };
                if (C.fx.off) {
                    i.duration = 0
                } else {
                    if (typeof i.duration !== "number") {
                        if (i.duration in C.fx.speeds) {
                            i.duration = C.fx.speeds[i.duration]
                        } else {
                            i.duration = C.fx.speeds._default
                        }
                    }
                }
                if (i.queue == null || i.queue === true) {
                    i.queue = "fx"
                }
                i.old = i.complete;
                i.complete = function() {
                    if (g(i.old)) {
                        i.old.call(this)
                    }
                    if (i.queue) {
                        C.dequeue(this, i.queue)
                    }
                }
                ;
                return i
            }
            ;
            C.fn.extend({
                fadeTo: function(e, t, n, i) {
                    return this.filter(ue).css("opacity", 0).show().end().animate({
                        opacity: t
                    }, e, n, i)
                },
                animate: function(t, e, n, i) {
                    var r = C.isEmptyObject(t)
                      , a = C.speed(e, n, i)
                      , o = function() {
                        var e = pt(this, C.extend({}, t), a);
                        if (r || $.get(this, "finish")) {
                            e.stop(true)
                        }
                    };
                    o.finish = o;
                    return r || a.queue === false ? this.each(o) : this.queue(a.queue, o)
                },
                stop: function(r, e, a) {
                    var o = function(e) {
                        var t = e.stop;
                        delete e.stop;
                        t(a)
                    };
                    if (typeof r !== "string") {
                        a = e;
                        e = r;
                        r = undefined
                    }
                    if (e) {
                        this.queue(r || "fx", [])
                    }
                    return this.each(function() {
                        var e = true
                          , t = r != null && r + "queueHooks"
                          , n = C.timers
                          , i = $.get(this);
                        if (t) {
                            if (i[t] && i[t].stop) {
                                o(i[t])
                            }
                        } else {
                            for (t in i) {
                                if (i[t] && i[t].stop && st.test(t)) {
                                    o(i[t])
                                }
                            }
                        }
                        for (t = n.length; t--; ) {
                            if (n[t].elem === this && (r == null || n[t].queue === r)) {
                                n[t].anim.stop(a);
                                e = false;
                                n.splice(t, 1)
                            }
                        }
                        if (e || !a) {
                            C.dequeue(this, r)
                        }
                    })
                },
                finish: function(o) {
                    if (o !== false) {
                        o = o || "fx"
                    }
                    return this.each(function() {
                        var e, t = $.get(this), n = t[o + "queue"], i = t[o + "queueHooks"], r = C.timers, a = n ? n.length : 0;
                        t.finish = true;
                        C.queue(this, o, []);
                        if (i && i.stop) {
                            i.stop.call(this, true)
                        }
                        for (e = r.length; e--; ) {
                            if (r[e].elem === this && r[e].queue === o) {
                                r[e].anim.stop(true);
                                r.splice(e, 1)
                            }
                        }
                        for (e = 0; e < a; e++) {
                            if (n[e] && n[e].finish) {
                                n[e].finish.call(this)
                            }
                        }
                        delete t.finish
                    })
                }
            });
            C.each(["toggle", "show", "hide"], function(e, i) {
                var r = C.fn[i];
                C.fn[i] = function(e, t, n) {
                    return e == null || typeof e === "boolean" ? r.apply(this, arguments) : this.animate(ft(i, true), e, t, n)
                }
            });
            C.each({
                slideDown: ft("show"),
                slideUp: ft("hide"),
                slideToggle: ft("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(e, i) {
                C.fn[e] = function(e, t, n) {
                    return this.animate(i, e, t, n)
                }
            });
            C.timers = [];
            C.fx.tick = function() {
                var e, t = 0, n = C.timers;
                rt = Date.now();
                for (; t < n.length; t++) {
                    e = n[t];
                    if (!e() && n[t] === e) {
                        n.splice(t--, 1)
                    }
                }
                if (!n.length) {
                    C.fx.stop()
                }
                rt = undefined
            }
            ;
            C.fx.timer = function(e) {
                C.timers.push(e);
                C.fx.start()
            }
            ;
            C.fx.interval = 13;
            C.fx.start = function() {
                if (at) {
                    return
                }
                at = true;
                lt()
            }
            ;
            C.fx.stop = function() {
                at = null
            }
            ;
            C.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            };
            C.fn.delay = function(i, e) {
                i = C.fx ? C.fx.speeds[i] || i : i;
                e = e || "fx";
                return this.queue(e, function(e, t) {
                    var n = _.setTimeout(e, i);
                    t.stop = function() {
                        _.clearTimeout(n)
                    }
                })
            }
            ;
            (function() {
                var e = D.createElement("input")
                  , t = D.createElement("select")
                  , n = t.appendChild(D.createElement("option"));
                e.type = "checkbox";
                y.checkOn = e.value !== "";
                y.optSelected = n.selected;
                e = D.createElement("input");
                e.value = "t";
                e.type = "radio";
                y.radioValue = e.value === "t"
            }
            )();
            var vt, mt = C.expr.attrHandle;
            C.fn.extend({
                attr: function(e, t) {
                    return J(this, C.attr, e, t, arguments.length > 1)
                },
                removeAttr: function(e) {
                    return this.each(function() {
                        C.removeAttr(this, e)
                    })
                }
            });
            C.extend({
                attr: function(e, t, n) {
                    var i, r, a = e.nodeType;
                    if (a === 3 || a === 8 || a === 2) {
                        return
                    }
                    if (typeof e.getAttribute === "undefined") {
                        return C.prop(e, t, n)
                    }
                    if (a !== 1 || !C.isXMLDoc(e)) {
                        r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? vt : undefined)
                    }
                    if (n !== undefined) {
                        if (n === null) {
                            C.removeAttr(e, t);
                            return
                        }
                        if (r && "set"in r && (i = r.set(e, n, t)) !== undefined) {
                            return i
                        }
                        e.setAttribute(t, n + "");
                        return n
                    }
                    if (r && "get"in r && (i = r.get(e, t)) !== null) {
                        return i
                    }
                    i = C.find.attr(e, t);
                    return i == null ? undefined : i
                },
                attrHooks: {
                    type: {
                        set: function(e, t) {
                            if (!y.radioValue && t === "radio" && M(e, "input")) {
                                var n = e.value;
                                e.setAttribute("type", t);
                                if (n) {
                                    e.value = n
                                }
                                return t
                            }
                        }
                    }
                },
                removeAttr: function(e, t) {
                    var n, i = 0, r = t && t.match(O);
                    if (r && e.nodeType === 1) {
                        while (n = r[i++]) {
                            e.removeAttribute(n)
                        }
                    }
                }
            });
            vt = {
                set: function(e, t, n) {
                    if (t === false) {
                        C.removeAttr(e, n)
                    } else {
                        e.setAttribute(n, n)
                    }
                    return n
                }
            };
            C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
                var o = mt[t] || C.find.attr;
                mt[t] = function(e, t, n) {
                    var i, r, a = t.toLowerCase();
                    if (!n) {
                        r = mt[a];
                        mt[a] = i;
                        i = o(e, t, n) != null ? a : null;
                        mt[a] = r
                    }
                    return i
                }
            });
            var yt = /^(?:input|select|textarea|button)$/i
              , gt = /^(?:a|area)$/i;
            C.fn.extend({
                prop: function(e, t) {
                    return J(this, C.prop, e, t, arguments.length > 1)
                },
                removeProp: function(e) {
                    return this.each(function() {
                        delete this[C.propFix[e] || e]
                    })
                }
            });
            C.extend({
                prop: function(e, t, n) {
                    var i, r, a = e.nodeType;
                    if (a === 3 || a === 8 || a === 2) {
                        return
                    }
                    if (a !== 1 || !C.isXMLDoc(e)) {
                        t = C.propFix[t] || t;
                        r = C.propHooks[t]
                    }
                    if (n !== undefined) {
                        if (r && "set"in r && (i = r.set(e, n, t)) !== undefined) {
                            return i
                        }
                        return e[t] = n
                    }
                    if (r && "get"in r && (i = r.get(e, t)) !== null) {
                        return i
                    }
                    return e[t]
                },
                propHooks: {
                    tabIndex: {
                        get: function(e) {
                            var t = C.find.attr(e, "tabindex");
                            if (t) {
                                return parseInt(t, 10)
                            }
                            if (yt.test(e.nodeName) || gt.test(e.nodeName) && e.href) {
                                return 0
                            }
                            return -1
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            });
            if (!y.optSelected) {
                C.propHooks.selected = {
                    get: function(e) {
                        var t = e.parentNode;
                        if (t && t.parentNode) {
                            t.parentNode.selectedIndex
                        }
                        return null
                    },
                    set: function(e) {
                        var t = e.parentNode;
                        if (t) {
                            t.selectedIndex;
                            if (t.parentNode) {
                                t.parentNode.selectedIndex
                            }
                        }
                    }
                }
            }
            C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
                C.propFix[this.toLowerCase()] = this
            });
            function St(e) {
                var t = e.match(O) || [];
                return t.join(" ")
            }
            function bt(e) {
                return e.getAttribute && e.getAttribute("class") || ""
            }
            function wt(e) {
                if (Array.isArray(e)) {
                    return e
                }
                if (typeof e === "string") {
                    return e.match(O) || []
                }
                return []
            }
            C.fn.extend({
                addClass: function(t) {
                    var e, n, i, r, a, o, s, l = 0;
                    if (g(t)) {
                        return this.each(function(e) {
                            C(this).addClass(t.call(this, e, bt(this)))
                        })
                    }
                    e = wt(t);
                    if (e.length) {
                        while (n = this[l++]) {
                            r = bt(n);
                            i = n.nodeType === 1 && " " + St(r) + " ";
                            if (i) {
                                o = 0;
                                while (a = e[o++]) {
                                    if (i.indexOf(" " + a + " ") < 0) {
                                        i += a + " "
                                    }
                                }
                                s = St(i);
                                if (r !== s) {
                                    n.setAttribute("class", s)
                                }
                            }
                        }
                    }
                    return this
                },
                removeClass: function(t) {
                    var e, n, i, r, a, o, s, l = 0;
                    if (g(t)) {
                        return this.each(function(e) {
                            C(this).removeClass(t.call(this, e, bt(this)))
                        })
                    }
                    if (!arguments.length) {
                        return this.attr("class", "")
                    }
                    e = wt(t);
                    if (e.length) {
                        while (n = this[l++]) {
                            r = bt(n);
                            i = n.nodeType === 1 && " " + St(r) + " ";
                            if (i) {
                                o = 0;
                                while (a = e[o++]) {
                                    while (i.indexOf(" " + a + " ") > -1) {
                                        i = i.replace(" " + a + " ", " ")
                                    }
                                }
                                s = St(i);
                                if (r !== s) {
                                    n.setAttribute("class", s)
                                }
                            }
                        }
                    }
                    return this
                },
                toggleClass: function(r, t) {
                    var a = typeof r
                      , o = a === "string" || Array.isArray(r);
                    if (typeof t === "boolean" && o) {
                        return t ? this.addClass(r) : this.removeClass(r)
                    }
                    if (g(r)) {
                        return this.each(function(e) {
                            C(this).toggleClass(r.call(this, e, bt(this), t), t)
                        })
                    }
                    return this.each(function() {
                        var e, t, n, i;
                        if (o) {
                            t = 0;
                            n = C(this);
                            i = wt(r);
                            while (e = i[t++]) {
                                if (n.hasClass(e)) {
                                    n.removeClass(e)
                                } else {
                                    n.addClass(e)
                                }
                            }
                        } else if (r === undefined || a === "boolean") {
                            e = bt(this);
                            if (e) {
                                $.set(this, "__className__", e)
                            }
                            if (this.setAttribute) {
                                this.setAttribute("class", e || r === false ? "" : $.get(this, "__className__") || "")
                            }
                        }
                    })
                },
                hasClass: function(e) {
                    var t, n, i = 0;
                    t = " " + e + " ";
                    while (n = this[i++]) {
                        if (n.nodeType === 1 && (" " + St(bt(n)) + " ").indexOf(t) > -1) {
                            return true
                        }
                    }
                    return false
                }
            });
            var Pt = /\r/g;
            C.fn.extend({
                val: function(n) {
                    var i, e, r, t = this[0];
                    if (!arguments.length) {
                        if (t) {
                            i = C.valHooks[t.type] || C.valHooks[t.nodeName.toLowerCase()];
                            if (i && "get"in i && (e = i.get(t, "value")) !== undefined) {
                                return e
                            }
                            e = t.value;
                            if (typeof e === "string") {
                                return e.replace(Pt, "")
                            }
                            return e == null ? "" : e
                        }
                        return
                    }
                    r = g(n);
                    return this.each(function(e) {
                        var t;
                        if (this.nodeType !== 1) {
                            return
                        }
                        if (r) {
                            t = n.call(this, e, C(this).val())
                        } else {
                            t = n
                        }
                        if (t == null) {
                            t = ""
                        } else if (typeof t === "number") {
                            t += ""
                        } else if (Array.isArray(t)) {
                            t = C.map(t, function(e) {
                                return e == null ? "" : e + ""
                            })
                        }
                        i = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()];
                        if (!i || !("set"in i) || i.set(this, t, "value") === undefined) {
                            this.value = t
                        }
                    })
                }
            });
            C.extend({
                valHooks: {
                    option: {
                        get: function(e) {
                            var t = C.find.attr(e, "value");
                            return t != null ? t : St(C.text(e))
                        }
                    },
                    select: {
                        get: function(e) {
                            var t, n, i, r = e.options, a = e.selectedIndex, o = e.type === "select-one", s = o ? null : [], l = o ? a + 1 : r.length;
                            if (a < 0) {
                                i = l
                            } else {
                                i = o ? a : 0
                            }
                            for (; i < l; i++) {
                                n = r[i];
                                if ((n.selected || i === a) && !n.disabled && (!n.parentNode.disabled || !M(n.parentNode, "optgroup"))) {
                                    t = C(n).val();
                                    if (o) {
                                        return t
                                    }
                                    s.push(t)
                                }
                            }
                            return s
                        },
                        set: function(e, t) {
                            var n, i, r = e.options, a = C.makeArray(t), o = r.length;
                            while (o--) {
                                i = r[o];
                                if (i.selected = C.inArray(C.valHooks.option.get(i), a) > -1) {
                                    n = true
                                }
                            }
                            if (!n) {
                                e.selectedIndex = -1
                            }
                            return a
                        }
                    }
                }
            });
            C.each(["radio", "checkbox"], function() {
                C.valHooks[this] = {
                    set: function(e, t) {
                        if (Array.isArray(t)) {
                            return e.checked = C.inArray(C(e).val(), t) > -1
                        }
                    }
                };
                if (!y.checkOn) {
                    C.valHooks[this].get = function(e) {
                        return e.getAttribute("value") === null ? "on" : e.value
                    }
                }
            });
            y.focusin = "onfocusin"in _;
            var _t = /^(?:focusinfocus|focusoutblur)$/
              , Dt = function(e) {
                e.stopPropagation()
            };
            C.extend(C.event, {
                trigger: function(e, t, n, i) {
                    var r, a, o, s, l, u, f, d, c = [n || D], h = m.call(e, "type") ? e.type : e, p = m.call(e, "namespace") ? e.namespace.split(".") : [];
                    a = d = o = n = n || D;
                    if (n.nodeType === 3 || n.nodeType === 8) {
                        return
                    }
                    if (_t.test(h + C.event.triggered)) {
                        return
                    }
                    if (h.indexOf(".") > -1) {
                        p = h.split(".");
                        h = p.shift();
                        p.sort()
                    }
                    l = h.indexOf(":") < 0 && "on" + h;
                    e = e[C.expando] ? e : new C.Event(h,typeof e === "object" && e);
                    e.isTrigger = i ? 2 : 3;
                    e.namespace = p.join(".");
                    e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
                    e.result = undefined;
                    if (!e.target) {
                        e.target = n
                    }
                    t = t == null ? [e] : C.makeArray(t, [e]);
                    f = C.event.special[h] || {};
                    if (!i && f.trigger && f.trigger.apply(n, t) === false) {
                        return
                    }
                    if (!i && !f.noBubble && !S(n)) {
                        s = f.delegateType || h;
                        if (!_t.test(s + h)) {
                            a = a.parentNode
                        }
                        for (; a; a = a.parentNode) {
                            c.push(a);
                            o = a
                        }
                        if (o === (n.ownerDocument || D)) {
                            c.push(o.defaultView || o.parentWindow || _)
                        }
                    }
                    r = 0;
                    while ((a = c[r++]) && !e.isPropagationStopped()) {
                        d = a;
                        e.type = r > 1 ? s : f.bindType || h;
                        u = ($.get(a, "events") || Object.create(null))[e.type] && $.get(a, "handle");
                        if (u) {
                            u.apply(a, t)
                        }
                        u = l && a[l];
                        if (u && u.apply && X(a)) {
                            e.result = u.apply(a, t);
                            if (e.result === false) {
                                e.preventDefault()
                            }
                        }
                    }
                    e.type = h;
                    if (!i && !e.isDefaultPrevented()) {
                        if ((!f._default || f._default.apply(c.pop(), t) === false) && X(n)) {
                            if (l && g(n[h]) && !S(n)) {
                                o = n[l];
                                if (o) {
                                    n[l] = null
                                }
                                C.event.triggered = h;
                                if (e.isPropagationStopped()) {
                                    d.addEventListener(h, Dt)
                                }
                                n[h]();
                                if (e.isPropagationStopped()) {
                                    d.removeEventListener(h, Dt)
                                }
                                C.event.triggered = undefined;
                                if (o) {
                                    n[l] = o
                                }
                            }
                        }
                    }
                    return e.result
                },
                simulate: function(e, t, n) {
                    var i = C.extend(new C.Event, n, {
                        type: e,
                        isSimulated: true
                    });
                    C.event.trigger(i, null, t)
                }
            });
            C.fn.extend({
                trigger: function(e, t) {
                    return this.each(function() {
                        C.event.trigger(e, t, this)
                    })
                },
                triggerHandler: function(e, t) {
                    var n = this[0];
                    if (n) {
                        return C.event.trigger(e, t, n, true)
                    }
                }
            });
            if (!y.focusin) {
                C.each({
                    focus: "focusin",
                    blur: "focusout"
                }, function(n, i) {
                    var r = function(e) {
                        C.event.simulate(i, e.target, C.event.fix(e))
                    };
                    C.event.special[i] = {
                        setup: function() {
                            var e = this.ownerDocument || this.document || this
                              , t = $.access(e, i);
                            if (!t) {
                                e.addEventListener(n, r, true)
                            }
                            $.access(e, i, (t || 0) + 1)
                        },
                        teardown: function() {
                            var e = this.ownerDocument || this.document || this
                              , t = $.access(e, i) - 1;
                            if (!t) {
                                e.removeEventListener(n, r, true);
                                $.remove(e, i)
                            } else {
                                $.access(e, i, t)
                            }
                        }
                    }
                })
            }
            var Ct = _.location;
            var Tt = {
                guid: Date.now()
            };
            var Mt = /\?/;
            C.parseXML = function(e) {
                var t, n;
                if (!e || typeof e !== "string") {
                    return null
                }
                try {
                    t = (new _.DOMParser).parseFromString(e, "text/xml")
                } catch (e) {}
                n = t && t.getElementsByTagName("parsererror")[0];
                if (!t || n) {
                    C.error("Invalid XML: " + (n ? C.map(n.childNodes, function(e) {
                        return e.textContent
                    }).join("\n") : e))
                }
                return t
            }
            ;
            var kt = /\[\]$/
              , xt = /\r?\n/g
              , It = /^(?:submit|button|image|reset|file)$/i
              , Rt = /^(?:input|select|textarea|keygen)/i;
            function At(n, e, i, r) {
                var t;
                if (Array.isArray(e)) {
                    C.each(e, function(e, t) {
                        if (i || kt.test(n)) {
                            r(n, t)
                        } else {
                            At(n + "[" + (typeof t === "object" && t != null ? e : "") + "]", t, i, r)
                        }
                    })
                } else if (!i && w(e) === "object") {
                    for (t in e) {
                        At(n + "[" + t + "]", e[t], i, r)
                    }
                } else {
                    r(n, e)
                }
            }
            C.param = function(e, t) {
                var n, i = [], r = function(e, t) {
                    var n = g(t) ? t() : t;
                    i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(n == null ? "" : n)
                };
                if (e == null) {
                    return ""
                }
                if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) {
                    C.each(e, function() {
                        r(this.name, this.value)
                    })
                } else {
                    for (n in e) {
                        At(n, e[n], t, r)
                    }
                }
                return i.join("&")
            }
            ;
            C.fn.extend({
                serialize: function() {
                    return C.param(this.serializeArray())
                },
                serializeArray: function() {
                    return this.map(function() {
                        var e = C.prop(this, "elements");
                        return e ? C.makeArray(e) : this
                    }).filter(function() {
                        var e = this.type;
                        return this.name && !C(this).is(":disabled") && Rt.test(this.nodeName) && !It.test(e) && (this.checked || !pe.test(e))
                    }).map(function(e, t) {
                        var n = C(this).val();
                        if (n == null) {
                            return null
                        }
                        if (Array.isArray(n)) {
                            return C.map(n, function(e) {
                                return {
                                    name: t.name,
                                    value: e.replace(xt, "\r\n")
                                }
                            })
                        }
                        return {
                            name: t.name,
                            value: n.replace(xt, "\r\n")
                        }
                    }).get()
                }
            });
            var Et = /%20/g
              , zt = /#.*$/
              , Bt = /([?&])_=[^&]*/
              , Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm
              , Ft = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
              , Lt = /^(?:GET|HEAD)$/
              , Ut = /^\/\//
              , Nt = {}
              , Wt = {}
              , qt = "*/".concat("*")
              , Ht = D.createElement("a");
            Ht.href = Ct.href;
            function Jt(a) {
                return function(e, t) {
                    if (typeof e !== "string") {
                        t = e;
                        e = "*"
                    }
                    var n, i = 0, r = e.toLowerCase().match(O) || [];
                    if (g(t)) {
                        while (n = r[i++]) {
                            if (n[0] === "+") {
                                n = n.slice(1) || "*";
                                (a[n] = a[n] || []).unshift(t)
                            } else {
                                (a[n] = a[n] || []).push(t)
                            }
                        }
                    }
                }
            }
            function Yt(t, r, a, o) {
                var s = {}
                  , l = t === Wt;
                function u(e) {
                    var i;
                    s[e] = true;
                    C.each(t[e] || [], function(e, t) {
                        var n = t(r, a, o);
                        if (typeof n === "string" && !l && !s[n]) {
                            r.dataTypes.unshift(n);
                            u(n);
                            return false
                        } else if (l) {
                            return !(i = n)
                        }
                    });
                    return i
                }
                return u(r.dataTypes[0]) || !s["*"] && u("*")
            }
            function jt(e, t) {
                var n, i, r = C.ajaxSettings.flatOptions || {};
                for (n in t) {
                    if (t[n] !== undefined) {
                        (r[n] ? e : i || (i = {}))[n] = t[n]
                    }
                }
                if (i) {
                    C.extend(true, e, i)
                }
                return e
            }
            function Vt(e, t, n) {
                var i, r, a, o, s = e.contents, l = e.dataTypes;
                while (l[0] === "*") {
                    l.shift();
                    if (i === undefined) {
                        i = e.mimeType || t.getResponseHeader("Content-Type")
                    }
                }
                if (i) {
                    for (r in s) {
                        if (s[r] && s[r].test(i)) {
                            l.unshift(r);
                            break
                        }
                    }
                }
                if (l[0]in n) {
                    a = l[0]
                } else {
                    for (r in n) {
                        if (!l[0] || e.converters[r + " " + l[0]]) {
                            a = r;
                            break
                        }
                        if (!o) {
                            o = r
                        }
                    }
                    a = a || o
                }
                if (a) {
                    if (a !== l[0]) {
                        l.unshift(a)
                    }
                    return n[a]
                }
            }
            function Gt(e, t, n, i) {
                var r, a, o, s, l, u = {}, f = e.dataTypes.slice();
                if (f[1]) {
                    for (o in e.converters) {
                        u[o.toLowerCase()] = e.converters[o]
                    }
                }
                a = f.shift();
                while (a) {
                    if (e.responseFields[a]) {
                        n[e.responseFields[a]] = t
                    }
                    if (!l && i && e.dataFilter) {
                        t = e.dataFilter(t, e.dataType)
                    }
                    l = a;
                    a = f.shift();
                    if (a) {
                        if (a === "*") {
                            a = l
                        } else if (l !== "*" && l !== a) {
                            o = u[l + " " + a] || u["* " + a];
                            if (!o) {
                                for (r in u) {
                                    s = r.split(" ");
                                    if (s[1] === a) {
                                        o = u[l + " " + s[0]] || u["* " + s[0]];
                                        if (o) {
                                            if (o === true) {
                                                o = u[r]
                                            } else if (u[r] !== true) {
                                                a = s[0];
                                                f.unshift(s[1])
                                            }
                                            break
                                        }
                                    }
                                }
                            }
                            if (o !== true) {
                                if (o && e.throws) {
                                    t = o(t)
                                } else {
                                    try {
                                        t = o(t)
                                    } catch (e) {
                                        return {
                                            state: "parsererror",
                                            error: o ? e : "No conversion from " + l + " to " + a
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                return {
                    state: "success",
                    data: t
                }
            }
            C.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: Ct.href,
                    type: "GET",
                    isLocal: Ft.test(Ct.protocol),
                    global: true,
                    processData: true,
                    async: true,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": qt,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": true,
                        "text json": JSON.parse,
                        "text xml": C.parseXML
                    },
                    flatOptions: {
                        url: true,
                        context: true
                    }
                },
                ajaxSetup: function(e, t) {
                    return t ? jt(jt(e, C.ajaxSettings), t) : jt(C.ajaxSettings, e)
                },
                ajaxPrefilter: Jt(Nt),
                ajaxTransport: Jt(Wt),
                ajax: function(e, t) {
                    if (typeof e === "object") {
                        t = e;
                        e = undefined
                    }
                    t = t || {};
                    var f, d, c, n, h, i, p, v, r, a, m = C.ajaxSetup({}, t), y = m.context || m, g = m.context && (y.nodeType || y.jquery) ? C(y) : C.event, S = C.Deferred(), b = C.Callbacks("once memory"), w = m.statusCode || {}, o = {}, s = {}, l = "canceled", P = {
                        readyState: 0,
                        getResponseHeader: function(e) {
                            var t;
                            if (p) {
                                if (!n) {
                                    n = {};
                                    while (t = Ot.exec(c)) {
                                        n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                                    }
                                }
                                t = n[e.toLowerCase() + " "]
                            }
                            return t == null ? null : t.join(", ")
                        },
                        getAllResponseHeaders: function() {
                            return p ? c : null
                        },
                        setRequestHeader: function(e, t) {
                            if (p == null) {
                                e = s[e.toLowerCase()] = s[e.toLowerCase()] || e;
                                o[e] = t
                            }
                            return this
                        },
                        overrideMimeType: function(e) {
                            if (p == null) {
                                m.mimeType = e
                            }
                            return this
                        },
                        statusCode: function(e) {
                            var t;
                            if (e) {
                                if (p) {
                                    P.always(e[P.status])
                                } else {
                                    for (t in e) {
                                        w[t] = [w[t], e[t]]
                                    }
                                }
                            }
                            return this
                        },
                        abort: function(e) {
                            var t = e || l;
                            if (f) {
                                f.abort(t)
                            }
                            u(0, t);
                            return this
                        }
                    };
                    S.promise(P);
                    m.url = ((e || m.url || Ct.href) + "").replace(Ut, Ct.protocol + "//");
                    m.type = t.method || t.type || m.method || m.type;
                    m.dataTypes = (m.dataType || "*").toLowerCase().match(O) || [""];
                    if (m.crossDomain == null) {
                        i = D.createElement("a");
                        try {
                            i.href = m.url;
                            i.href = i.href;
                            m.crossDomain = Ht.protocol + "//" + Ht.host !== i.protocol + "//" + i.host
                        } catch (e) {
                            m.crossDomain = true
                        }
                    }
                    if (m.data && m.processData && typeof m.data !== "string") {
                        m.data = C.param(m.data, m.traditional)
                    }
                    Yt(Nt, m, t, P);
                    if (p) {
                        return P
                    }
                    v = C.event && m.global;
                    if (v && C.active++ === 0) {
                        C.event.trigger("ajaxStart")
                    }
                    m.type = m.type.toUpperCase();
                    m.hasContent = !Lt.test(m.type);
                    d = m.url.replace(zt, "");
                    if (!m.hasContent) {
                        a = m.url.slice(d.length);
                        if (m.data && (m.processData || typeof m.data === "string")) {
                            d += (Mt.test(d) ? "&" : "?") + m.data;
                            delete m.data
                        }
                        if (m.cache === false) {
                            d = d.replace(Bt, "$1");
                            a = (Mt.test(d) ? "&" : "?") + "_=" + Tt.guid++ + a
                        }
                        m.url = d + a
                    } else if (m.data && m.processData && (m.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
                        m.data = m.data.replace(Et, "+")
                    }
                    if (m.ifModified) {
                        if (C.lastModified[d]) {
                            P.setRequestHeader("If-Modified-Since", C.lastModified[d])
                        }
                        if (C.etag[d]) {
                            P.setRequestHeader("If-None-Match", C.etag[d])
                        }
                    }
                    if (m.data && m.hasContent && m.contentType !== false || t.contentType) {
                        P.setRequestHeader("Content-Type", m.contentType)
                    }
                    P.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + (m.dataTypes[0] !== "*" ? ", " + qt + "; q=0.01" : "") : m.accepts["*"]);
                    for (r in m.headers) {
                        P.setRequestHeader(r, m.headers[r])
                    }
                    if (m.beforeSend && (m.beforeSend.call(y, P, m) === false || p)) {
                        return P.abort()
                    }
                    l = "abort";
                    b.add(m.complete);
                    P.done(m.success);
                    P.fail(m.error);
                    f = Yt(Wt, m, t, P);
                    if (!f) {
                        u(-1, "No Transport")
                    } else {
                        P.readyState = 1;
                        if (v) {
                            g.trigger("ajaxSend", [P, m])
                        }
                        if (p) {
                            return P
                        }
                        if (m.async && m.timeout > 0) {
                            h = _.setTimeout(function() {
                                P.abort("timeout")
                            }, m.timeout)
                        }
                        try {
                            p = false;
                            f.send(o, u)
                        } catch (e) {
                            if (p) {
                                throw e
                            }
                            u(-1, e)
                        }
                    }
                    function u(e, t, n, i) {
                        var r, a, o, s, l, u = t;
                        if (p) {
                            return
                        }
                        p = true;
                        if (h) {
                            _.clearTimeout(h)
                        }
                        f = undefined;
                        c = i || "";
                        P.readyState = e > 0 ? 4 : 0;
                        r = e >= 200 && e < 300 || e === 304;
                        if (n) {
                            s = Vt(m, P, n)
                        }
                        if (!r && C.inArray("script", m.dataTypes) > -1 && C.inArray("json", m.dataTypes) < 0) {
                            m.converters["text script"] = function() {}
                        }
                        s = Gt(m, s, P, r);
                        if (r) {
                            if (m.ifModified) {
                                l = P.getResponseHeader("Last-Modified");
                                if (l) {
                                    C.lastModified[d] = l
                                }
                                l = P.getResponseHeader("etag");
                                if (l) {
                                    C.etag[d] = l
                                }
                            }
                            if (e === 204 || m.type === "HEAD") {
                                u = "nocontent"
                            } else if (e === 304) {
                                u = "notmodified"
                            } else {
                                u = s.state;
                                a = s.data;
                                o = s.error;
                                r = !o
                            }
                        } else {
                            o = u;
                            if (e || !u) {
                                u = "error";
                                if (e < 0) {
                                    e = 0
                                }
                            }
                        }
                        P.status = e;
                        P.statusText = (t || u) + "";
                        if (r) {
                            S.resolveWith(y, [a, u, P])
                        } else {
                            S.rejectWith(y, [P, u, o])
                        }
                        P.statusCode(w);
                        w = undefined;
                        if (v) {
                            g.trigger(r ? "ajaxSuccess" : "ajaxError", [P, m, r ? a : o])
                        }
                        b.fireWith(y, [P, u]);
                        if (v) {
                            g.trigger("ajaxComplete", [P, m]);
                            if (!--C.active) {
                                C.event.trigger("ajaxStop")
                            }
                        }
                    }
                    return P
                },
                getJSON: function(e, t, n) {
                    return C.get(e, t, n, "json")
                },
                getScript: function(e, t) {
                    return C.get(e, undefined, t, "script")
                }
            });
            C.each(["get", "post"], function(e, r) {
                C[r] = function(e, t, n, i) {
                    if (g(t)) {
                        i = i || n;
                        n = t;
                        t = undefined
                    }
                    return C.ajax(C.extend({
                        url: e,
                        type: r,
                        dataType: i,
                        data: t,
                        success: n
                    }, C.isPlainObject(e) && e))
                }
            });
            C.ajaxPrefilter(function(e) {
                var t;
                for (t in e.headers) {
                    if (t.toLowerCase() === "content-type") {
                        e.contentType = e.headers[t] || ""
                    }
                }
            });
            C._evalUrl = function(e, t, n) {
                return C.ajax({
                    url: e,
                    type: "GET",
                    dataType: "script",
                    cache: true,
                    async: false,
                    global: false,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(e) {
                        C.globalEval(e, t, n)
                    }
                })
            }
            ;
            C.fn.extend({
                wrapAll: function(e) {
                    var t;
                    if (this[0]) {
                        if (g(e)) {
                            e = e.call(this[0])
                        }
                        t = C(e, this[0].ownerDocument).eq(0).clone(true);
                        if (this[0].parentNode) {
                            t.insertBefore(this[0])
                        }
                        t.map(function() {
                            var e = this;
                            while (e.firstElementChild) {
                                e = e.firstElementChild
                            }
                            return e
                        }).append(this)
                    }
                    return this
                },
                wrapInner: function(n) {
                    if (g(n)) {
                        return this.each(function(e) {
                            C(this).wrapInner(n.call(this, e))
                        })
                    }
                    return this.each(function() {
                        var e = C(this)
                          , t = e.contents();
                        if (t.length) {
                            t.wrapAll(n)
                        } else {
                            e.append(n)
                        }
                    })
                },
                wrap: function(t) {
                    var n = g(t);
                    return this.each(function(e) {
                        C(this).wrapAll(n ? t.call(this, e) : t)
                    })
                },
                unwrap: function(e) {
                    this.parent(e).not("body").each(function() {
                        C(this).replaceWith(this.childNodes)
                    });
                    return this
                }
            });
            C.expr.pseudos.hidden = function(e) {
                return !C.expr.pseudos.visible(e)
            }
            ;
            C.expr.pseudos.visible = function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            }
            ;
            C.ajaxSettings.xhr = function() {
                try {
                    return new _.XMLHttpRequest
                } catch (e) {}
            }
            ;
            var Xt = {
                0: 200,
                1223: 204
            }
              , Kt = C.ajaxSettings.xhr();
            y.cors = !!Kt && "withCredentials"in Kt;
            y.ajax = Kt = !!Kt;
            C.ajaxTransport(function(r) {
                var a, o;
                if (y.cors || Kt && !r.crossDomain) {
                    return {
                        send: function(e, t) {
                            var n, i = r.xhr();
                            i.open(r.type, r.url, r.async, r.username, r.password);
                            if (r.xhrFields) {
                                for (n in r.xhrFields) {
                                    i[n] = r.xhrFields[n]
                                }
                            }
                            if (r.mimeType && i.overrideMimeType) {
                                i.overrideMimeType(r.mimeType)
                            }
                            if (!r.crossDomain && !e["X-Requested-With"]) {
                                e["X-Requested-With"] = "XMLHttpRequest"
                            }
                            for (n in e) {
                                i.setRequestHeader(n, e[n])
                            }
                            a = function(e) {
                                return function() {
                                    if (a) {
                                        a = o = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null;
                                        if (e === "abort") {
                                            i.abort()
                                        } else if (e === "error") {
                                            if (typeof i.status !== "number") {
                                                t(0, "error")
                                            } else {
                                                t(i.status, i.statusText)
                                            }
                                        } else {
                                            t(Xt[i.status] || i.status, i.statusText, (i.responseType || "text") !== "text" || typeof i.responseText !== "string" ? {
                                                binary: i.response
                                            } : {
                                                text: i.responseText
                                            }, i.getAllResponseHeaders())
                                        }
                                    }
                                }
                            }
                            ;
                            i.onload = a();
                            o = i.onerror = i.ontimeout = a("error");
                            if (i.onabort !== undefined) {
                                i.onabort = o
                            } else {
                                i.onreadystatechange = function() {
                                    if (i.readyState === 4) {
                                        _.setTimeout(function() {
                                            if (a) {
                                                o()
                                            }
                                        })
                                    }
                                }
                            }
                            a = a("abort");
                            try {
                                i.send(r.hasContent && r.data || null)
                            } catch (e) {
                                if (a) {
                                    throw e
                                }
                            }
                        },
                        abort: function() {
                            if (a) {
                                a()
                            }
                        }
                    }
                }
            });
            C.ajaxPrefilter(function(e) {
                if (e.crossDomain) {
                    e.contents.script = false
                }
            });
            C.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(e) {
                        C.globalEval(e);
                        return e
                    }
                }
            });
            C.ajaxPrefilter("script", function(e) {
                if (e.cache === undefined) {
                    e.cache = false
                }
                if (e.crossDomain) {
                    e.type = "GET"
                }
            });
            C.ajaxTransport("script", function(n) {
                if (n.crossDomain || n.scriptAttrs) {
                    var i, r;
                    return {
                        send: function(e, t) {
                            i = C("<script>").attr(n.scriptAttrs || {}).prop({
                                charset: n.scriptCharset,
                                src: n.url
                            }).on("load error", r = function(e) {
                                i.remove();
                                r = null;
                                if (e) {
                                    t(e.type === "error" ? 404 : 200, e.type)
                                }
                            }
                            );
                            D.head.appendChild(i[0])
                        },
                        abort: function() {
                            if (r) {
                                r()
                            }
                        }
                    }
                }
            });
            var $t = []
              , Zt = /(=)\?(?=&|$)|\?\?/;
            C.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var e = $t.pop() || C.expando + "_" + Tt.guid++;
                    this[e] = true;
                    return e
                }
            });
            C.ajaxPrefilter("json jsonp", function(e, t, n) {
                var i, r, a, o = e.jsonp !== false && (Zt.test(e.url) ? "url" : typeof e.data === "string" && (e.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Zt.test(e.data) && "data");
                if (o || e.dataTypes[0] === "jsonp") {
                    i = e.jsonpCallback = g(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback;
                    if (o) {
                        e[o] = e[o].replace(Zt, "$1" + i)
                    } else if (e.jsonp !== false) {
                        e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i
                    }
                    e.converters["script json"] = function() {
                        if (!a) {
                            C.error(i + " was not called")
                        }
                        return a[0]
                    }
                    ;
                    e.dataTypes[0] = "json";
                    r = _[i];
                    _[i] = function() {
                        a = arguments
                    }
                    ;
                    n.always(function() {
                        if (r === undefined) {
                            C(_).removeProp(i)
                        } else {
                            _[i] = r
                        }
                        if (e[i]) {
                            e.jsonpCallback = t.jsonpCallback;
                            $t.push(i)
                        }
                        if (a && g(r)) {
                            r(a[0])
                        }
                        a = r = undefined
                    });
                    return "script"
                }
            });
            y.createHTMLDocument = function() {
                var e = D.implementation.createHTMLDocument("").body;
                e.innerHTML = "<form></form><form></form>";
                return e.childNodes.length === 2
            }();
            C.parseHTML = function(e, t, n) {
                if (typeof e !== "string") {
                    return []
                }
                if (typeof t === "boolean") {
                    n = t;
                    t = false
                }
                var i, r, a;
                if (!t) {
                    if (y.createHTMLDocument) {
                        t = D.implementation.createHTMLDocument("");
                        i = t.createElement("base");
                        i.href = D.location.href;
                        t.head.appendChild(i)
                    } else {
                        t = D
                    }
                }
                r = k.exec(e);
                a = !n && [];
                if (r) {
                    return [t.createElement(r[1])]
                }
                r = we([e], t, a);
                if (a && a.length) {
                    C(a).remove()
                }
                return C.merge([], r.childNodes)
            }
            ;
            C.fn.load = function(e, t, n) {
                var i, r, a, o = this, s = e.indexOf(" ");
                if (s > -1) {
                    i = St(e.slice(s));
                    e = e.slice(0, s)
                }
                if (g(t)) {
                    n = t;
                    t = undefined
                } else if (t && typeof t === "object") {
                    r = "POST"
                }
                if (o.length > 0) {
                    C.ajax({
                        url: e,
                        type: r || "GET",
                        dataType: "html",
                        data: t
                    }).done(function(e) {
                        a = arguments;
                        o.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
                    }).always(n && function(e, t) {
                        o.each(function() {
                            n.apply(this, a || [e.responseText, t, e])
                        })
                    }
                    )
                }
                return this
            }
            ;
            C.expr.pseudos.animated = function(t) {
                return C.grep(C.timers, function(e) {
                    return t === e.elem
                }).length
            }
            ;
            C.offset = {
                setOffset: function(e, t, n) {
                    var i, r, a, o, s, l, u, f = C.css(e, "position"), d = C(e), c = {};
                    if (f === "static") {
                        e.style.position = "relative"
                    }
                    s = d.offset();
                    a = C.css(e, "top");
                    l = C.css(e, "left");
                    u = (f === "absolute" || f === "fixed") && (a + l).indexOf("auto") > -1;
                    if (u) {
                        i = d.position();
                        o = i.top;
                        r = i.left
                    } else {
                        o = parseFloat(a) || 0;
                        r = parseFloat(l) || 0
                    }
                    if (g(t)) {
                        t = t.call(e, n, C.extend({}, s))
                    }
                    if (t.top != null) {
                        c.top = t.top - s.top + o
                    }
                    if (t.left != null) {
                        c.left = t.left - s.left + r
                    }
                    if ("using"in t) {
                        t.using.call(e, c)
                    } else {
                        d.css(c)
                    }
                }
            };
            C.fn.extend({
                offset: function(t) {
                    if (arguments.length) {
                        return t === undefined ? this : this.each(function(e) {
                            C.offset.setOffset(this, t, e)
                        })
                    }
                    var e, n, i = this[0];
                    if (!i) {
                        return
                    }
                    if (!i.getClientRects().length) {
                        return {
                            top: 0,
                            left: 0
                        }
                    }
                    e = i.getBoundingClientRect();
                    n = i.ownerDocument.defaultView;
                    return {
                        top: e.top + n.pageYOffset,
                        left: e.left + n.pageXOffset
                    }
                },
                position: function() {
                    if (!this[0]) {
                        return
                    }
                    var e, t, n, i = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    if (C.css(i, "position") === "fixed") {
                        t = i.getBoundingClientRect()
                    } else {
                        t = this.offset();
                        n = i.ownerDocument;
                        e = i.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && C.css(e, "position") === "static") {
                            e = e.parentNode
                        }
                        if (e && e !== i && e.nodeType === 1) {
                            r = C(e).offset();
                            r.top += C.css(e, "borderTopWidth", true);
                            r.left += C.css(e, "borderLeftWidth", true)
                        }
                    }
                    return {
                        top: t.top - r.top - C.css(i, "marginTop", true),
                        left: t.left - r.left - C.css(i, "marginLeft", true)
                    }
                },
                offsetParent: function() {
                    return this.map(function() {
                        var e = this.offsetParent;
                        while (e && C.css(e, "position") === "static") {
                            e = e.offsetParent
                        }
                        return e || oe
                    })
                }
            });
            C.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, function(t, r) {
                var a = "pageYOffset" === r;
                C.fn[t] = function(e) {
                    return J(this, function(e, t, n) {
                        var i;
                        if (S(e)) {
                            i = e
                        } else if (e.nodeType === 9) {
                            i = e.defaultView
                        }
                        if (n === undefined) {
                            return i ? i[r] : e[t]
                        }
                        if (i) {
                            i.scrollTo(!a ? n : i.pageXOffset, a ? n : i.pageYOffset)
                        } else {
                            e[t] = n
                        }
                    }, t, e, arguments.length)
                }
            });
            C.each(["top", "left"], function(e, n) {
                C.cssHooks[n] = Je(y.pixelPosition, function(e, t) {
                    if (t) {
                        t = He(e, n);
                        return Ue.test(t) ? C(e).position()[n] + "px" : t
                    }
                })
            });
            C.each({
                Height: "height",
                Width: "width"
            }, function(o, s) {
                C.each({
                    padding: "inner" + o,
                    content: s,
                    "": "outer" + o
                }, function(i, a) {
                    C.fn[a] = function(e, t) {
                        var n = arguments.length && (i || typeof e !== "boolean")
                          , r = i || (e === true || t === true ? "margin" : "border");
                        return J(this, function(e, t, n) {
                            var i;
                            if (S(e)) {
                                return a.indexOf("outer") === 0 ? e["inner" + o] : e.document.documentElement["client" + o]
                            }
                            if (e.nodeType === 9) {
                                i = e.documentElement;
                                return Math.max(e.body["scroll" + o], i["scroll" + o], e.body["offset" + o], i["offset" + o], i["client" + o])
                            }
                            return n === undefined ? C.css(e, t, r) : C.style(e, t, n, r)
                        }, s, n ? e : undefined, n)
                    }
                })
            });
            C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
                C.fn[t] = function(e) {
                    return this.on(t, e)
                }
            });
            C.fn.extend({
                bind: function(e, t, n) {
                    return this.on(e, null, t, n)
                },
                unbind: function(e, t) {
                    return this.off(e, null, t)
                },
                delegate: function(e, t, n, i) {
                    return this.on(t, e, n, i)
                },
                undelegate: function(e, t, n) {
                    return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
                },
                hover: function(e, t) {
                    return this.mouseenter(e).mouseleave(t || e)
                }
            });
            C.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), function(e, n) {
                C.fn[n] = function(e, t) {
                    return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n)
                }
            });
            var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            C.proxy = function(e, t) {
                var n, i, r;
                if (typeof t === "string") {
                    n = e[t];
                    t = e;
                    e = n
                }
                if (!g(e)) {
                    return undefined
                }
                i = s.call(arguments, 2);
                r = function() {
                    return e.apply(t || this, i.concat(s.call(arguments)))
                }
                ;
                r.guid = e.guid = e.guid || C.guid++;
                return r
            }
            ;
            C.holdReady = function(e) {
                if (e) {
                    C.readyWait++
                } else {
                    C.ready(true)
                }
            }
            ;
            C.isArray = Array.isArray;
            C.parseJSON = JSON.parse;
            C.nodeName = M;
            C.isFunction = g;
            C.isWindow = S;
            C.camelCase = G;
            C.type = w;
            C.now = Date.now;
            C.isNumeric = function(e) {
                var t = C.type(e);
                return (t === "number" || t === "string") && !isNaN(e - parseFloat(e))
            }
            ;
            C.trim = function(e) {
                return e == null ? "" : (e + "").replace(Qt, "")
            }
            ;
            if (true) {
                !(an = [],
                on = function() {
                    return C
                }
                .apply(rn, an),
                on !== undefined && (nn.exports = on))
            }
            var en = _.jQuery
              , tn = _.$;
            C.noConflict = function(e) {
                if (_.$ === C) {
                    _.$ = tn
                }
                if (e && _.jQuery === C) {
                    _.jQuery = en
                }
                return C
            }
            ;
            if (typeof e === "undefined") {
                _.jQuery = _.$ = C
            }
            return C
        })
    }
    , function(e, t, n) {
        "use strict";
        n.r(t);
        n.d(t, "v1", function() {
            return c
        });
        n.d(t, "v3", function() {
            return U
        });
        n.d(t, "v4", function() {
            return W
        });
        n.d(t, "v5", function() {
            return V
        });
        n.d(t, "NIL", function() {
            return G
        });
        n.d(t, "version", function() {
            return K
        });
        n.d(t, "validate", function() {
            return s
        });
        n.d(t, "stringify", function() {
            return v
        });
        n.d(t, "parse", function() {
            return b
        });
        var i;
        var r = new Uint8Array(16);
        function p() {
            if (!i) {
                i = typeof crypto !== "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== "undefined" && typeof msCrypto.getRandomValues === "function" && msCrypto.getRandomValues.bind(msCrypto);
                if (!i) {
                    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported")
                }
            }
            return i(r)
        }
        var a = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        function o(e) {
            return typeof e === "string" && a.test(e)
        }
        var s = o;
        var l = [];
        for (var u = 0; u < 256; ++u) {
            l.push((u + 256).toString(16).substr(1))
        }
        function f(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var n = (l[e[t + 0]] + l[e[t + 1]] + l[e[t + 2]] + l[e[t + 3]] + "-" + l[e[t + 4]] + l[e[t + 5]] + "-" + l[e[t + 6]] + l[e[t + 7]] + "-" + l[e[t + 8]] + l[e[t + 9]] + "-" + l[e[t + 10]] + l[e[t + 11]] + l[e[t + 12]] + l[e[t + 13]] + l[e[t + 14]] + l[e[t + 15]]).toLowerCase();
            if (!s(n)) {
                throw TypeError("Stringified UUID is invalid")
            }
            return n
        }
        var v = f;
        var m;
        var y;
        var g = 0;
        var S = 0;
        function d(e, t, n) {
            var i = t && n || 0;
            var r = t || new Array(16);
            e = e || {};
            var a = e.node || m;
            var o = e.clockseq !== undefined ? e.clockseq : y;
            if (a == null || o == null) {
                var s = e.random || (e.rng || p)();
                if (a == null) {
                    a = m = [s[0] | 1, s[1], s[2], s[3], s[4], s[5]]
                }
                if (o == null) {
                    o = y = (s[6] << 8 | s[7]) & 16383
                }
            }
            var l = e.msecs !== undefined ? e.msecs : Date.now();
            var u = e.nsecs !== undefined ? e.nsecs : S + 1;
            var f = l - g + (u - S) / 1e4;
            if (f < 0 && e.clockseq === undefined) {
                o = o + 1 & 16383
            }
            if ((f < 0 || l > g) && e.nsecs === undefined) {
                u = 0
            }
            if (u >= 1e4) {
                throw new Error("uuid.v1(): Can't create more than 10M uuids/sec")
            }
            g = l;
            S = u;
            y = o;
            l += 122192928e5;
            var d = ((l & 268435455) * 1e4 + u) % 4294967296;
            r[i++] = d >>> 24 & 255;
            r[i++] = d >>> 16 & 255;
            r[i++] = d >>> 8 & 255;
            r[i++] = d & 255;
            var c = l / 4294967296 * 1e4 & 268435455;
            r[i++] = c >>> 8 & 255;
            r[i++] = c & 255;
            r[i++] = c >>> 24 & 15 | 16;
            r[i++] = c >>> 16 & 255;
            r[i++] = o >>> 8 | 128;
            r[i++] = o & 255;
            for (var h = 0; h < 6; ++h) {
                r[i + h] = a[h]
            }
            return t || v(r)
        }
        var c = d;
        function h(e) {
            if (!s(e)) {
                throw TypeError("Invalid UUID")
            }
            var t;
            var n = new Uint8Array(16);
            n[0] = (t = parseInt(e.slice(0, 8), 16)) >>> 24;
            n[1] = t >>> 16 & 255;
            n[2] = t >>> 8 & 255;
            n[3] = t & 255;
            n[4] = (t = parseInt(e.slice(9, 13), 16)) >>> 8;
            n[5] = t & 255;
            n[6] = (t = parseInt(e.slice(14, 18), 16)) >>> 8;
            n[7] = t & 255;
            n[8] = (t = parseInt(e.slice(19, 23), 16)) >>> 8;
            n[9] = t & 255;
            n[10] = (t = parseInt(e.slice(24, 36), 16)) / 1099511627776 & 255;
            n[11] = t / 4294967296 & 255;
            n[12] = t >>> 24 & 255;
            n[13] = t >>> 16 & 255;
            n[14] = t >>> 8 & 255;
            n[15] = t & 255;
            return n
        }
        var b = h;
        function w(e) {
            e = unescape(encodeURIComponent(e));
            var t = [];
            for (var n = 0; n < e.length; ++n) {
                t.push(e.charCodeAt(n))
            }
            return t
        }
        var P = "6ba7b810-9dad-11d1-80b4-00c04fd430c8";
        var _ = "6ba7b811-9dad-11d1-80b4-00c04fd430c8";
        var D = function(e, o, s) {
            function t(e, t, n, i) {
                if (typeof e === "string") {
                    e = w(e)
                }
                if (typeof t === "string") {
                    t = b(t)
                }
                if (t.length !== 16) {
                    throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)")
                }
                var r = new Uint8Array(16 + e.length);
                r.set(t);
                r.set(e, t.length);
                r = s(r);
                r[6] = r[6] & 15 | o;
                r[8] = r[8] & 63 | 128;
                if (n) {
                    i = i || 0;
                    for (var a = 0; a < 16; ++a) {
                        n[i + a] = r[a]
                    }
                    return n
                }
                return v(r)
            }
            try {
                t.name = e
            } catch (e) {}
            t.DNS = P;
            t.URL = _;
            return t
        };
        function C(e) {
            if (typeof e === "string") {
                var t = unescape(encodeURIComponent(e));
                e = new Uint8Array(t.length);
                for (var n = 0; n < t.length; ++n) {
                    e[n] = t.charCodeAt(n)
                }
            }
            return T(k(x(e), e.length * 8))
        }
        function T(e) {
            var t = [];
            var n = e.length * 32;
            var i = "0123456789abcdef";
            for (var r = 0; r < n; r += 8) {
                var a = e[r >> 5] >>> r % 32 & 255;
                var o = parseInt(i.charAt(a >>> 4 & 15) + i.charAt(a & 15), 16);
                t.push(o)
            }
            return t
        }
        function M(e) {
            return (e + 64 >>> 9 << 4) + 14 + 1
        }
        function k(e, t) {
            e[t >> 5] |= 128 << t % 32;
            e[M(t) - 1] = t;
            var n = 1732584193;
            var i = -271733879;
            var r = -1732584194;
            var a = 271733878;
            for (var o = 0; o < e.length; o += 16) {
                var s = n;
                var l = i;
                var u = r;
                var f = a;
                n = E(n, i, r, a, e[o], 7, -680876936);
                a = E(a, n, i, r, e[o + 1], 12, -389564586);
                r = E(r, a, n, i, e[o + 2], 17, 606105819);
                i = E(i, r, a, n, e[o + 3], 22, -1044525330);
                n = E(n, i, r, a, e[o + 4], 7, -176418897);
                a = E(a, n, i, r, e[o + 5], 12, 1200080426);
                r = E(r, a, n, i, e[o + 6], 17, -1473231341);
                i = E(i, r, a, n, e[o + 7], 22, -45705983);
                n = E(n, i, r, a, e[o + 8], 7, 1770035416);
                a = E(a, n, i, r, e[o + 9], 12, -1958414417);
                r = E(r, a, n, i, e[o + 10], 17, -42063);
                i = E(i, r, a, n, e[o + 11], 22, -1990404162);
                n = E(n, i, r, a, e[o + 12], 7, 1804603682);
                a = E(a, n, i, r, e[o + 13], 12, -40341101);
                r = E(r, a, n, i, e[o + 14], 17, -1502002290);
                i = E(i, r, a, n, e[o + 15], 22, 1236535329);
                n = z(n, i, r, a, e[o + 1], 5, -165796510);
                a = z(a, n, i, r, e[o + 6], 9, -1069501632);
                r = z(r, a, n, i, e[o + 11], 14, 643717713);
                i = z(i, r, a, n, e[o], 20, -373897302);
                n = z(n, i, r, a, e[o + 5], 5, -701558691);
                a = z(a, n, i, r, e[o + 10], 9, 38016083);
                r = z(r, a, n, i, e[o + 15], 14, -660478335);
                i = z(i, r, a, n, e[o + 4], 20, -405537848);
                n = z(n, i, r, a, e[o + 9], 5, 568446438);
                a = z(a, n, i, r, e[o + 14], 9, -1019803690);
                r = z(r, a, n, i, e[o + 3], 14, -187363961);
                i = z(i, r, a, n, e[o + 8], 20, 1163531501);
                n = z(n, i, r, a, e[o + 13], 5, -1444681467);
                a = z(a, n, i, r, e[o + 2], 9, -51403784);
                r = z(r, a, n, i, e[o + 7], 14, 1735328473);
                i = z(i, r, a, n, e[o + 12], 20, -1926607734);
                n = B(n, i, r, a, e[o + 5], 4, -378558);
                a = B(a, n, i, r, e[o + 8], 11, -2022574463);
                r = B(r, a, n, i, e[o + 11], 16, 1839030562);
                i = B(i, r, a, n, e[o + 14], 23, -35309556);
                n = B(n, i, r, a, e[o + 1], 4, -1530992060);
                a = B(a, n, i, r, e[o + 4], 11, 1272893353);
                r = B(r, a, n, i, e[o + 7], 16, -155497632);
                i = B(i, r, a, n, e[o + 10], 23, -1094730640);
                n = B(n, i, r, a, e[o + 13], 4, 681279174);
                a = B(a, n, i, r, e[o], 11, -358537222);
                r = B(r, a, n, i, e[o + 3], 16, -722521979);
                i = B(i, r, a, n, e[o + 6], 23, 76029189);
                n = B(n, i, r, a, e[o + 9], 4, -640364487);
                a = B(a, n, i, r, e[o + 12], 11, -421815835);
                r = B(r, a, n, i, e[o + 15], 16, 530742520);
                i = B(i, r, a, n, e[o + 2], 23, -995338651);
                n = O(n, i, r, a, e[o], 6, -198630844);
                a = O(a, n, i, r, e[o + 7], 10, 1126891415);
                r = O(r, a, n, i, e[o + 14], 15, -1416354905);
                i = O(i, r, a, n, e[o + 5], 21, -57434055);
                n = O(n, i, r, a, e[o + 12], 6, 1700485571);
                a = O(a, n, i, r, e[o + 3], 10, -1894986606);
                r = O(r, a, n, i, e[o + 10], 15, -1051523);
                i = O(i, r, a, n, e[o + 1], 21, -2054922799);
                n = O(n, i, r, a, e[o + 8], 6, 1873313359);
                a = O(a, n, i, r, e[o + 15], 10, -30611744);
                r = O(r, a, n, i, e[o + 6], 15, -1560198380);
                i = O(i, r, a, n, e[o + 13], 21, 1309151649);
                n = O(n, i, r, a, e[o + 4], 6, -145523070);
                a = O(a, n, i, r, e[o + 11], 10, -1120210379);
                r = O(r, a, n, i, e[o + 2], 15, 718787259);
                i = O(i, r, a, n, e[o + 9], 21, -343485551);
                n = I(n, s);
                i = I(i, l);
                r = I(r, u);
                a = I(a, f)
            }
            return [n, i, r, a]
        }
        function x(e) {
            if (e.length === 0) {
                return []
            }
            var t = e.length * 8;
            var n = new Uint32Array(M(t));
            for (var i = 0; i < t; i += 8) {
                n[i >> 5] |= (e[i / 8] & 255) << i % 32
            }
            return n
        }
        function I(e, t) {
            var n = (e & 65535) + (t & 65535);
            var i = (e >> 16) + (t >> 16) + (n >> 16);
            return i << 16 | n & 65535
        }
        function R(e, t) {
            return e << t | e >>> 32 - t
        }
        function A(e, t, n, i, r, a) {
            return I(R(I(I(t, e), I(i, a)), r), n)
        }
        function E(e, t, n, i, r, a, o) {
            return A(t & n | ~t & i, e, t, r, a, o)
        }
        function z(e, t, n, i, r, a, o) {
            return A(t & i | n & ~i, e, t, r, a, o)
        }
        function B(e, t, n, i, r, a, o) {
            return A(t ^ n ^ i, e, t, r, a, o)
        }
        function O(e, t, n, i, r, a, o) {
            return A(n ^ (t | ~i), e, t, r, a, o)
        }
        var F = C;
        var L = D("v3", 48, F);
        var U = L;
        function N(e, t, n) {
            e = e || {};
            var i = e.random || (e.rng || p)();
            i[6] = i[6] & 15 | 64;
            i[8] = i[8] & 63 | 128;
            if (t) {
                n = n || 0;
                for (var r = 0; r < 16; ++r) {
                    t[n + r] = i[r]
                }
                return t
            }
            return v(i)
        }
        var W = N;
        function q(e, t, n, i) {
            switch (e) {
            case 0:
                return t & n ^ ~t & i;
            case 1:
                return t ^ n ^ i;
            case 2:
                return t & n ^ t & i ^ n & i;
            case 3:
                return t ^ n ^ i
            }
        }
        function H(e, t) {
            return e << t | e >>> 32 - t
        }
        function J(e) {
            var t = [1518500249, 1859775393, 2400959708, 3395469782];
            var n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
            if (typeof e === "string") {
                var i = unescape(encodeURIComponent(e));
                e = [];
                for (var r = 0; r < i.length; ++r) {
                    e.push(i.charCodeAt(r))
                }
            } else if (!Array.isArray(e)) {
                e = Array.prototype.slice.call(e)
            }
            e.push(128);
            var a = e.length / 4 + 2;
            var o = Math.ceil(a / 16);
            var s = new Array(o);
            for (var l = 0; l < o; ++l) {
                var u = new Uint32Array(16);
                for (var f = 0; f < 16; ++f) {
                    u[f] = e[l * 64 + f * 4] << 24 | e[l * 64 + f * 4 + 1] << 16 | e[l * 64 + f * 4 + 2] << 8 | e[l * 64 + f * 4 + 3]
                }
                s[l] = u
            }
            s[o - 1][14] = (e.length - 1) * 8 / Math.pow(2, 32);
            s[o - 1][14] = Math.floor(s[o - 1][14]);
            s[o - 1][15] = (e.length - 1) * 8 & 4294967295;
            for (var d = 0; d < o; ++d) {
                var c = new Uint32Array(80);
                for (var h = 0; h < 16; ++h) {
                    c[h] = s[d][h]
                }
                for (var p = 16; p < 80; ++p) {
                    c[p] = H(c[p - 3] ^ c[p - 8] ^ c[p - 14] ^ c[p - 16], 1)
                }
                var v = n[0];
                var m = n[1];
                var y = n[2];
                var g = n[3];
                var S = n[4];
                for (var b = 0; b < 80; ++b) {
                    var w = Math.floor(b / 20);
                    var P = H(v, 5) + q(w, m, y, g) + S + t[w] + c[b] >>> 0;
                    S = g;
                    g = y;
                    y = H(m, 30) >>> 0;
                    m = v;
                    v = P
                }
                n[0] = n[0] + v >>> 0;
                n[1] = n[1] + m >>> 0;
                n[2] = n[2] + y >>> 0;
                n[3] = n[3] + g >>> 0;
                n[4] = n[4] + S >>> 0
            }
            return [n[0] >> 24 & 255, n[0] >> 16 & 255, n[0] >> 8 & 255, n[0] & 255, n[1] >> 24 & 255, n[1] >> 16 & 255, n[1] >> 8 & 255, n[1] & 255, n[2] >> 24 & 255, n[2] >> 16 & 255, n[2] >> 8 & 255, n[2] & 255, n[3] >> 24 & 255, n[3] >> 16 & 255, n[3] >> 8 & 255, n[3] & 255, n[4] >> 24 & 255, n[4] >> 16 & 255, n[4] >> 8 & 255, n[4] & 255]
        }
        var Y = J;
        var j = D("v5", 80, Y);
        var V = j;
        var G = "00000000-0000-0000-0000-000000000000";
        function X(e) {
            if (!s(e)) {
                throw TypeError("Invalid UUID")
            }
            return parseInt(e.substr(14, 1), 16)
        }
        var K = X
    }
    , function(e, t, n) {
        e.exports = n(4)
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.JSPlugin = undefined;
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        var R = n(0);
        var A = n(5);
        var E = n(12);
        var z = n(14);
        var B = n(16);
        var r = n(1);
        var O = a(r);
        function a(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function F(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var o = function() {
            var s = -1;
            var r = 0;
            var f = 0;
            var d = 1;
            var c = 40;
            var h = 1024 * 1024 * 4;
            var p = 1001;
            var v = 1002;
            var m = 1003;
            var u = 2002;
            var S = Symbol("OPTIONS");
            var o = Symbol("CURRENTPLAYRATE");
            var l = Symbol("CURRENTSOUNDWND");
            var b = Symbol("MAXWNDNUM");
            var y = Symbol("MAXWNDNUM");
            var P = Symbol("DRAWCANVAS");
            var g = Symbol("SHAPEID");
            var w = Symbol("WINDOWFULL");
            var _ = Symbol("SINGLEWINDOW");
            var D = Symbol("FILETMP");
            var C = Symbol("STATUSTMP");
            var T = Symbol("UPGRADESTATUSURL");
            var M = Symbol("CURWNDINDEX");
            var k = Symbol("CALLBACKFUNCTION");
            var x = Symbol("PLUGINVERSION");
            var I = Symbol("CANFULLSCREEN");
            var e = function() {
                function a(e) {
                    F(this, a);
                    this.oStreamClient = new A.StreamClient;
                    this.oStorageManager = null;
                    this.oJSPlugin = null;
                    if (typeof e.staticPath === "string") {
                        this.staticPath = e.staticPath
                    }
                    var t = this;
                    var n = {
                        szId: "playWnd",
                        iMode: 0,
                        iType: 1,
                        iWidth: 400,
                        iHeight: 300,
                        iMaxSplit: 4,
                        iCurrentSplit: 2,
                        szBasePath: "./"
                    };
                    this[S] = Object.assign(n, e);
                    var i = {
                        border: "#343434",
                        borderSelect: "#FFCC00",
                        background: "#4C4B4B"
                    };
                    i = Object.assign(i, e.oStyle);
                    this[S].oStyle = i;
                    if (this[S].iCurrentSplit > this[S].iMaxSplit) {
                        this[S].iCurrentSplit = this[S].iMaxSplit
                    }
                    this[o] = 1;
                    this[l] = -1;
                    this[b] = this[S].iMaxSplit * this[S].iMaxSplit;
                    this[g] = "";
                    this[w] = false;
                    this[_] = null;
                    this[D] = null;
                    this[C] = "";
                    this[T] = "";
                    this[M] = -1;
                    this[k] = null;
                    this[I] = true;
                    this[x] = "V1.2.0 build20190123";
                    t.oStorageManager = new z.StorageManager(this[S].szBasePath + "/transform",{
                        staticPath: this.staticPath
                    });
                    if (typeof t[S].szId === "string") {
                        t.oJSPlugin = (0,
                        O.default)("#" + t[S].szId)
                    } else {
                        t.oJSPlugin = t[S].szId
                    }
                    this[y] = [];
                    for (var r = 0; r < this[b]; r++) {
                        this[y][r] = {};
                        this[y][r].bSelect = false;
                        this[y][r].bPlay = false;
                        this[y][r].bPause = false;
                        this[y][r].bRecord = false;
                        this[y][r].oPlayCtrl = null;
                        this[y][r].szPlayType = "";
                        this[y][r].szStorageUUID = "";
                        this[y][r].szStreamUUID = "";
                        this[y][r].aHead = [];
                        this[y][r].bLoad = false;
                        this[y][r].windowID = t[S].szId + "canvas" + r;
                        this[y][r].drawID = t[S].szId + "canvas_draw" + r;
                        this[y][r].iRate = 1;
                        this[y][r].bEZoom = false;
                        this[y][r].b3DZoom = false;
                        this[y][r].szSecretKey = "";
                        this[y][r].bFrameForward = false;
                        this[y][r].iDecodeType = f;
                        this[y][r].bFirstFrame = false
                    }
                    t.listenBrowserVisibility();
                    if (this[S].iMode === 0) {
                        t.createWindows()
                    } else if (this[S].iMode === 1) {} else if (this[S].iMode === 2) {
                        t.createIMGWindows()
                    }
                    this[P] = new B.ESCanvas(t[S].szId + "canvas_draw0");
                    if (this[S].iType === 0) {
                        t.oJSPlugin.hide()
                    }
                    t.initEvent();
                    t.EventCallback.windowEventSelect(0)
                }
                i(a, [{
                    key: "listenBrowserVisibility",
                    value: function e() {
                        var n = this;
                        document.addEventListener("visibilitychange", function() {
                            if (document.hidden) {
                                for (var e = 0; e < 16; e++) {
                                    if (n[y][e] && n[y][e].bLoad) {
                                        n[y][e].oPlayCtrl.PlayM4_IsVisible(false)
                                    }
                                }
                            } else {
                                for (var t = 0; t < 16; t++) {
                                    if (n[y][t] && n[y][t].bLoad) {
                                        n[y][t].oPlayCtrl.PlayM4_IsVisible(true)
                                    }
                                }
                            }
                        }, false)
                    }
                }, {
                    key: "createWindows",
                    value: function e(t, n) {
                        var i = this;
                        if (t && n) {
                            i[S].iWidth = t;
                            i[S].iHeight = n
                        }
                        var r = i[S].iWidth % i[S].iCurrentSplit;
                        var a = i[S].iHeight % i[S].iCurrentSplit;
                        var o = (i[S].iWidth - r - i[S].iCurrentSplit * 2) / i[S].iCurrentSplit;
                        var s = (i[S].iHeight - a - i[S].iCurrentSplit * 2) / i[S].iCurrentSplit;
                        var l = (i[S].iWidth - r) / i[S].iCurrentSplit;
                        var u = (i[S].iHeight - a) / i[S].iCurrentSplit;
                        var f = i[S].iCurrentSplit;
                        if (typeof i[S].szId === "string") {
                            i.oJSPlugin = (0,
                            O.default)("#" + i[S].szId)
                        } else {
                            i.oJSPlugin = i[S].szId
                        }
                        var d = '<div class="' + i[S].szId + 'parent-wnd" style="overflow:hidden;width:100%; height:100%; position: relative;">';
                        var c = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                        if (c) {
                            for (var h = 0; h < 1; h++) {
                                t = o + (h % f === f - 1 ? r : 0);
                                n = s + (h + f >= Math.pow(f, 2) ? a : 0);
                                var p = l + (h % f === f - 1 ? r : 0);
                                var v = u + (h + f >= Math.pow(f, 2) ? a : 0);
                                p = p * 2;
                                v = v * 2;
                                d += '<div style="transform: scale(0.5);text-align:left;transform-origin:0 0; width:' + p + "px;height:" + v + 'px;"><div style="float:left; background-color: ' + i[S].oStyle.background + '; position: relative; width:100%; height:100%;">' + '<canvas id="' + i[S].szId + "canvas" + h + '" class="' + i[S].szId + 'play-window" wid="' + h + '" width="' + p + '" height="' + v + '"></canvas>' + (h === 0 ? '<img style="display:none;" id="playImg' + h + '" src="">' : "") + '<canvas id="' + i[S].szId + "canvas_draw" + h + '"  class="' + i[S].szId + 'draw-window" style="border:1px solid ' + i[S].oStyle.border + ';position:absolute; top:0; left:0;" wid="' + h + '" width=' + t + " height=" + n + "></canvas>" + "</div></div>"
                            }
                        } else {
                            for (var m = 0; m < i[b]; m++) {
                                t = o + (m % f === f - 1 ? r : 0);
                                n = s + (m + f >= Math.pow(f, 2) ? a : 0);
                                var y = l + (m % f === f - 1 ? r : 0);
                                var g = u + (m + f >= Math.pow(f, 2) ? a : 0);
                                d += '<div style="float:left; background-color: ' + i[S].oStyle.background + "; position: relative; width: " + y + "px; height: " + g + 'px;">' + '<canvas id="' + i[S].szId + "canvas" + m + '" class="' + i[S].szId + 'play-window" wid="' + m + '" width="' + y + '" height="' + g + '"></canvas>' + (m === 0 ? '<img style="display:none;" id="playImg' + m + '" src="">' : "") + '<canvas id="' + i[S].szId + "canvas_draw" + m + '"  class="' + i[S].szId + 'draw-window" style="border:1px solid ' + i[S].oStyle.border + ';position:absolute; top:0; left:0;" wid="' + m + '" width=' + t + " height=" + n + "></canvas>" + "</div>"
                            }
                        }
                        d += "</div>";
                        i.oJSPlugin.html(d);
                        i.oJSPlugin.find("." + i[S].szId + "parent-wnd").eq(0).children().eq(0).find("." + i[S].szId + "draw-window").eq(0).css("border", "1px solid " + i[S].oStyle.borderSelect)
                    }
                }, {
                    key: "createIMGWindows",
                    value: function e(t, n) {
                        var i = this;
                        if (t && n) {
                            i[S].iWidth = t;
                            i[S].iHeight = n
                        }
                        var r = i[S].iWidth % i[S].iCurrentSplit;
                        var a = i[S].iHeight % i[S].iCurrentSplit;
                        var o = (i[S].iWidth - r - i[S].iCurrentSplit * 2) / i[S].iCurrentSplit;
                        var s = (i[S].iHeight - a - i[S].iCurrentSplit * 2) / i[S].iCurrentSplit;
                        var l = (i[S].iWidth - r) / i[S].iCurrentSplit;
                        var u = (i[S].iHeight - a) / i[S].iCurrentSplit;
                        var f = i[S].iCurrentSplit;
                        if (typeof i[S].szId === "string") {
                            i.oJSPlugin = (0,
                            O.default)("#" + i[S].szId)
                        } else {
                            i.oJSPlugin = i[S].szId
                        }
                        i.oJSPlugin.html("");
                        var d = '<div class="' + i[S].szId + 'parent-wnd" style="overflow:hidden;width:100%; height:100%; position: relative;">';
                        for (var c = 0; c < i[b]; c++) {
                            t = o + (c % f === f - 1 ? r : 0);
                            n = s + (c + f >= Math.pow(f, 2) ? a : 0);
                            var h = l + (c % f === f - 1 ? r : 0);
                            var p = u + (c + f >= Math.pow(f, 2) ? a : 0);
                            d += '<div style="float:left; background-color: ' + i[S].oStyle.background + "; position: relative; width: " + h + "px; height: " + p + 'px;">' + '<img id="' + i[S].szId + "canvas" + c + '" class="' + i[S].szId + 'play-window" wid="' + c + '" width="' + h + '" height="' + p + '"></img>' + '<canvas id="' + i[S].szId + "canvas_draw" + c + '"  class="' + i[S].szId + 'draw-window" style="border:1px solid ' + i[S].oStyle.border + ';position:absolute; top:0; left:0;" wid="' + c + '" width=' + t + " height=" + n + "></canvas>" + "</div>"
                        }
                        d += "</div>";
                        i.oJSPlugin.html(d);
                        i.oJSPlugin.find("." + i[S].szId + "parent-wnd").eq(0).children().eq(0).find("." + i[S].szId + "draw-window").eq(0).css("border", "1px solid " + i[S].oStyle.borderSelect)
                    }
                }, {
                    key: "initCallbackEvent",
                    value: function e() {
                        var n = this;
                        n.EventCallback = function() {
                            return {
                                loadEventHandler: function e() {
                                    window.loadEventHandler && window.loadEventHandler()
                                },
                                zoomEventResponse: function e() {},
                                windowEventSelect: function e(t) {
                                    if (n[M] === t) {
                                        return
                                    }
                                    n[M] = t;
                                    if (n[y][t].bEZoom || n[y][t].b3DZoom) {
                                        (0,
                                        O.default)("." + n[S].szId + "draw-window").unbind();
                                        n[P].setDrawStatus(false);
                                        n[P] = null;
                                        n[P] = new B.ESCanvas(n[S].szId + "canvas_draw" + t);
                                        n[P].setShapeType("Rect");
                                        n[P].setDrawStyle("#ff0000", "", 0);
                                        if (n[y][t].bEZoom) {
                                            n[P].setDrawStatus(true, function(e) {
                                                if (e.startPos && e.endPos) {
                                                    if (e.startPos[0] > e.endPos[0]) {
                                                        n[y][t].oPlayCtrl.PlayM4_SetDisplayRegion(null, false)
                                                    } else {
                                                        n[y][t].oPlayCtrl.PlayM4_SetDisplayRegion({
                                                            left: e.startPos[0],
                                                            top: e.startPos[1],
                                                            right: e.endPos[0],
                                                            bottom: e.endPos[1]
                                                        }, true)
                                                    }
                                                }
                                            })
                                        } else if (n[y][t].b3DZoom) {
                                            n[P].setDrawStatus(true, function(e) {
                                                n[k](e)
                                            })
                                        }
                                    }
                                    window.GetSelectWndInfo && window.GetSelectWndInfo(t)
                                },
                                pluginErrorHandler: function e(t, n, i) {
                                    window.PluginEventHandler && window.PluginEventHandler(t, n, i)
                                },
                                windowEventOver: function e(t) {
                                    window.windowEventOver && window.windowEventOver(t)
                                },
                                windowEventOut: function e(t) {
                                    window.windowEventOut && window.windowEventOut(t)
                                },
                                windowEventUp: function e(t) {
                                    window.windowEventUp && window.windowEventUp(t)
                                },
                                windowFullCcreenChange: function e(t) {
                                    window.windowFullCcreenChange && window.windowFullCcreenChange(t)
                                },
                                firstFrameDisplay: function e(t, n, i) {
                                    window.firstFrameDisplay && window.firstFrameDisplay(t, n, i)
                                },
                                performanceLack: function e() {
                                    window.performanceLack && window.performanceLack()
                                },
                                mouseEvent: function e(t, n, i) {
                                    var r = '<?xml version="1.0"?><MouseEvent><WndIndex>0</WndIndex><EventType>' + t + "</EventType>" + "<Position><x>" + n + "</x><y>" + i + "</y><delta>0</delta></Position></MouseEvent>";
                                    window.onMouseEvent && window.onMouseEvent(r)
                                }
                            }
                        }()
                    }
                }, {
                    key: "initEvent",
                    value: function e() {
                        var m = this;
                        m.initCallbackEvent();
                        m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).children().each(function(i) {
                            var p = this;
                            var r = false;
                            (0,
                            O.default)(p).unbind().bind("mousedown", function() {
                                m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).find("." + m[S].szId + "draw-window").css("border", "1px solid " + m[S].oStyle.border);
                                m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).children().eq(i).find("." + m[S].szId + "draw-window").eq(0).css("border", "1px solid " + m[S].oStyle.borderSelect);
                                m.EventCallback.windowEventSelect(parseInt(m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).children().eq(i).find("." + m[S].szId + "play-window").eq(0).attr("wid"), 10))
                            });
                            (0,
                            O.default)(p).bind("mouseover", function(e) {
                                m.EventCallback.windowEventOver(i);
                                e.stopPropagation()
                            });
                            (0,
                            O.default)(p).bind("mouseout", function(e) {
                                m.EventCallback.windowEventOut(i);
                                e.stopPropagation()
                            });
                            (0,
                            O.default)(p).bind("mousedown", function(e) {
                                r = true;
                                var t = e.offsetX / m[P].m_iCanvasWidth;
                                var n = e.offsetY / m[P].m_iCanvasHeight;
                                if (e.button === 2) {
                                    m.EventCallback.mouseEvent(4, t, n)
                                } else if (e.button === 0) {
                                    m.EventCallback.mouseEvent(1, t, n)
                                }
                                e.stopPropagation()
                            });
                            (0,
                            O.default)(p).bind("mousemove", function(e) {
                                var t = e.offsetX / m[P].m_iCanvasWidth;
                                var n = e.offsetY / m[P].m_iCanvasHeight;
                                if (r) {
                                    m.EventCallback.mouseEvent(7, t, n)
                                } else {
                                    m.EventCallback.mouseEvent(6, t, n)
                                }
                                e.stopPropagation()
                            });
                            (0,
                            O.default)(p).bind("mousewheel", function(e) {
                                var t = e.offsetX / m[P].m_iCanvasWidth;
                                var n = e.offsetY / m[P].m_iCanvasHeight;
                                m.EventCallback.mouseEvent(8, t, n);
                                e.stopPropagation()
                            });
                            (0,
                            O.default)(p).bind("mouseup", function(e) {
                                r = false;
                                m.EventCallback.windowEventUp(i);
                                var t = e.offsetX / m[P].m_iCanvasWidth;
                                var n = e.offsetY / m[P].m_iCanvasHeight;
                                if (e.button === 2) {
                                    m.EventCallback.mouseEvent(5, t, n)
                                } else if (e.button === 0) {
                                    m.EventCallback.mouseEvent(3, t, n)
                                }
                            });
                            var v = (new Date).getTime();
                            (0,
                            O.default)(p).bind("click", function(e) {
                                if ((new Date).getTime() - v < 500) {
                                    if (!m[y][m[M]].bPlay || m[S].iType !== 2) {
                                        return
                                    }
                                    if (!m[I]) {
                                        return
                                    }
                                    if (window.orientation === 90 || window.orientation === -90) {
                                        return
                                    }
                                    var t = (0,
                                    O.default)(p).get(0);
                                    if (!m[w]) {
                                        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                                            var n = document.documentElement.clientWidth;
                                            var i = document.documentElement.clientHeight;
                                            m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).css({
                                                width: n,
                                                height: i,
                                                "z-index": 1e4
                                            });
                                            var r = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                                            if (r) {
                                                n = n * 2;
                                                i = i * 2
                                            }
                                            var a = document.body;
                                            a = (0,
                                            O.default)("#" + m[S].szId).find("canvas#" + m[S].szId + "canvas0")[0];
                                            var o = "";
                                            o += "width:" + i + "px;";
                                            o += "height:" + n + "px;";
                                            o += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
                                            o += "-webkit-transform-origin: " + n / 2 + "px " + n / 2 + "px;";
                                            o += "transform-origin: " + n / 2 + "px " + n / 2 + "px;";
                                            o += "position: fixed;top: 0;left: 0;z-index:10000";
                                            a.style.cssText = o
                                        } else {
                                            if (t.requestFullScreen) {
                                                t.requestFullScreen()
                                            } else if (t.webkitRequestFullScreen) {
                                                t.webkitRequestFullScreen()
                                            } else if (t.mozRequestFullScreen) {
                                                t.mozRequestFullScreen()
                                            }
                                        }
                                        m[_] = (0,
                                        O.default)(p);
                                        m[w] = true
                                    } else {
                                        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                                            var s = (0,
                                            O.default)("." + m[S].szId + "parent-wnd").parent().eq(0).width();
                                            var l = (0,
                                            O.default)("." + m[S].szId + "parent-wnd").parent().eq(0).height();
                                            m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).css({
                                                width: s,
                                                height: l,
                                                "z-index": 0
                                            });
                                            var u = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                                            if (u) {
                                                s = s * 2;
                                                l = l * 2
                                            }
                                            var f = document.body;
                                            f = (0,
                                            O.default)("#" + m[S].szId).find("canvas#" + m[S].szId + "canvas0")[0];
                                            var d = "";
                                            d += "width:" + s + "px;";
                                            d += "height:" + l + "px;";
                                            d += "-webkit-transform: rotate(0); transform: rotate(0);";
                                            d += "-webkit-transform-origin: 0 0;";
                                            d += "transform-origin: 0 0;";
                                            f.style.cssText = d;
                                            m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).style = "overflow:hidden;width:100%;height:100%;position: relative;"
                                        } else {
                                            if (m.oJSPlugin.find("." + m[S].szId + "parent-wnd").eq(0).width() === (0,
                                            O.default)(window).width()) {
                                                return
                                            }
                                            if (document.exitFullscreen) {
                                                document.exitFullscreen()
                                            } else if (document.webkitCancelFullScreen) {
                                                document.webkitCancelFullScreen()
                                            } else if (document.mozCancelFullScreen) {
                                                document.mozCancelFullScreen()
                                            }
                                        }
                                        m[_] = null;
                                        m[w] = false
                                    }
                                    var c = e.offsetX / m[P].m_iCanvasWidth;
                                    var h = e.offsetX / m[P].m_iCanvasHeight;
                                    m.EventCallback.mouseEvent(2, c, h);
                                    e.stopPropagation()
                                } else {
                                    v = (new Date).getTime()
                                }
                            });
                            function e() {
                                var e = document.getElementsByTagName("body")[0];
                                var t = document.getElementsByTagName("html")[0];
                                switch (window.orientation) {
                                case -90:
                                case 90:
                                    setTimeout(function() {
                                        m.JS_FullScreenDisplay(true);
                                        t.style["overflow-y"] = "hidden";
                                        t.style["height"] = "100%";
                                        e.style["overflow-y"] = "hidden";
                                        e.style["height"] = "100%"
                                    }, 200);
                                    break;
                                case 0:
                                case 180:
                                    setTimeout(function() {
                                        m.JS_CancelFullScreenDisplay(true);
                                        t.style["overflow-y"] = "auto";
                                        e.style["overflow-y"] = "auto"
                                    }, 200);
                                    break;
                                default:
                                    break
                                }
                            }
                            window.addEventListener("orientationchange", e, false)
                        });
                        if (typeof document.fullScreen !== "undefined") {
                            document.addEventListener("fullscreenchange", function() {
                                var e = document.fullscreen || false;
                                m.EventCallback.windowFullCcreenChange(e)
                            })
                        } else if (typeof document.webkitIsFullScreen !== "undefined") {
                            document.addEventListener("webkitfullscreenchange", function() {
                                var e = document.webkitIsFullScreen || false;
                                m.EventCallback.windowFullCcreenChange(e)
                            })
                        } else if (typeof document.mozFullScreen !== "undefined") {
                            document.addEventListener("mozfullscreenchange", function() {
                                var e = document.mozFullScreen || false;
                                m.EventCallback.windowFullCcreenChange(e)
                            })
                        }
                    }
                }, {
                    key: "updateWnd",
                    value: function e() {
                        var t = this;
                        var n = t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().length;
                        var i = t[S].iWidth % t[S].iCurrentSplit;
                        var r = t[S].iHeight % t[S].iCurrentSplit;
                        var a = (t[S].iWidth - i - t[S].iCurrentSplit * 2) / t[S].iCurrentSplit;
                        var o = (t[S].iHeight - r - t[S].iCurrentSplit * 2) / t[S].iCurrentSplit;
                        var s = (t[S].iWidth - i) / t[S].iCurrentSplit;
                        var l = (t[S].iHeight - r) / t[S].iCurrentSplit;
                        var u = t[S].iCurrentSplit;
                        for (var f = 0; f < n; f++) {
                            var d = a + (f % u === u - 1 ? i : 0);
                            var c = o + (f + u >= Math.pow(u, 2) ? r : 0);
                            var h = s + (f % u === u - 1 ? i : 0);
                            var p = l + (f + u >= Math.pow(u, 2) ? r : 0);
                            t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().eq(f).width(h);
                            t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().eq(f).height(p);
                            t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().eq(f).find("." + t[S].szId + "draw-window").attr("width", d);
                            t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().eq(f).find("." + t[S].szId + "draw-window").attr("height", c);
                            t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().eq(f).find("." + t[S].szId + "play-window").attr("width", h);
                            t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).children().eq(f).find("." + t[S].szId + "play-window").attr("height", p)
                        }
                        t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(t[M]).find("." + t[S].szId + "draw-window").css("border", "1px solid " + t[S].oStyle.border);
                        t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(t[M]).children().eq(0).find("." + t[S].szId + "draw-window").eq(0).css("border", "1px solid " + t[S].oStyle.borderSelect)
                    }
                }, {
                    key: "cbPlayCtrlCallback",
                    value: function e(t, n, a, i, r, o, s) {
                        var l = this;
                        if (!(0,
                        O.default)("#" + l[y][a].windowID).length) {
                            return
                        }
                        var u = false;
                        if (i && r) {
                            u = true
                        }
                        l[y][a].bLoad = true;
                        l.oStreamClient.openStream(t, n, function(e) {
                            if (e.bHead && !l[y][a].bPlay) {
                                l[y][a].bPlay = true;
                                l[y][a].aHead = new Uint8Array(e.buf);
                                l[y][a].oPlayCtrl.PlayM4_OpenStream(e.buf, c, 1024 * 1024 * 2);
                                if (l[y][a].szSecretKey !== "") {
                                    setTimeout(function() {
                                        l[y][a].oPlayCtrl.PlayM4_SetSecretKey(1, l[y][a].szSecretKey, 128);
                                        l[y][a].szSecretKey = ""
                                    }, 100)
                                }
                                if (l[y][a].aHead[8] === 4) {
                                    l[y][a].oPlayCtrl.PlayM4_SetStreamOpenMode(0)
                                } else {
                                    l[y][a].oPlayCtrl.PlayM4_SetStreamOpenMode(1)
                                }
                                l[y][a].oPlayCtrl.PlayM4_SetInputBufSize(h);
                                l[y][a].oPlayCtrl.PlayM4_Play(l[y][a].windowID)
                            } else {
                                var t = new Uint8Array(e.buf);
                                var n = l[y][a].oPlayCtrl.PlayM4_GetInputBufSize();
                                var i = l[y][a].oPlayCtrl.PlayM4_GetYUVBufSize();
                                if (i === 2 && !l[y][a].bFirstFrame) {
                                    l[y][a].bFirstFrame = true;
                                    l[y][a].oPlayCtrl.PlayM4_GetFrameResolution(function(e, t) {
                                        l.EventCallback.firstFrameDisplay(a, e, t)
                                    })
                                }
                                var r = l[y][a].oPlayCtrl.PlayM4_GetDecodeFrameType();
                                if (n > h * .5 && n < h * .8 && l[y][a].iRate === 1) {
                                    if (r !== d && !l[y][a].bFrameForward) {
                                        l[y][a].oPlayCtrl.PlayM4_SetDecodeFrameType(d);
                                        l.EventCallback.performanceLack()
                                    }
                                } else if (n >= h * .8) {}
                                if (i > 10 && i < 15 && !l[y][a].bFrameForward) {
                                    if (r !== d) {
                                        l[y][a].oPlayCtrl.PlayM4_SetDecodeFrameType(d);
                                        l.EventCallback.performanceLack()
                                    }
                                } else if (i > 15) {}
                                if (i < 10 && n < h * .5) {
                                    if (r !== f && l[y][a].iRate === 1) {
                                        l[y][a].oPlayCtrl.PlayM4_SetDecodeFrameType(f)
                                    }
                                }
                                if (e.statusString) {
                                    l.EventCallback.pluginErrorHandler(a, p, e)
                                } else if (e.type && e.type === "exception") {
                                    l.EventCallback.pluginErrorHandler(a, v, e)
                                } else {
                                    l[y][a].oPlayCtrl.PlayM4_InputData(t, t.length)
                                }
                            }
                            if (l[y][a].szStorageUUID) {
                                l.oStorageManager.inputData(l[y][a].szStorageUUID, e.buf)
                            }
                            e = null
                        }, function() {
                            if (l[y][a].bPlay) {
                                l.EventCallback.pluginErrorHandler(a, m);
                                l[y][a].bPlay = false;
                                l[y][a].bFrameForward = false;
                                l[y][a].iRate = 1;
                                if (l[y][a].oPlayCtrl) {
                                    l[y][a].oPlayCtrl.PlayM4_Stop();
                                    l[y][a].oPlayCtrl.PlayM4_CloseStream()
                                }
                            }
                        }).then(function(e) {
                            l[y][a].szStreamUUID = e;
                            l.oStreamClient.startPlay(e, i, r).then(function() {
                                if (u) {
                                    l[y][a].szPlayType = "playback";
                                    l[y][a].iRate = 1;
                                    l[y][a].oPlayCtrl.PlayM4_PlayRate(l[y][a].iRate)
                                } else {
                                    l[y][a].szPlayType = "realplay"
                                }
                                o()
                            }, function(e) {
                                s(e)
                            })
                        }, function(e) {
                            s(e)
                        })
                    }
                }, {
                    key: "cbPlayIMGCallback",
                    value: function e(t, n, i, r, a, o, s) {
                        var l = this;
                        if (!(0,
                        O.default)("#" + l[y][i].windowID).length) {
                            return
                        }
                        l[y][i].bPlay = true;
                        l.oStreamClient.openStream(t, n, function(e) {
                            if (!e.bHead) {
                                var t = new Blob([e.buf],{
                                    type: "image/jpeg"
                                });
                                var n = URL.createObjectURL(t);
                                if ((0,
                                O.default)("#" + l[S].szId + "canvas" + i).length) {
                                    document.getElementById(l[S].szId + "canvas" + i).src = n
                                }
                            }
                        }, function() {
                            if (l[y][i].bPlay) {
                                l.EventCallback.pluginErrorHandler(i, m);
                                l[y][i].bPlay = false
                            }
                        }).then(function(e) {
                            l[y][i].szStreamUUID = e;
                            l.oStreamClient.startPlay(e, r, a).then(function() {
                                l[y][i].szPlayType = "realplay";
                                o()
                            }, function(e) {
                                s(e)
                            })
                        }, function(e) {
                            s(e)
                        })
                    }
                }, {
                    key: "JS_UpdateWindowStyle",
                    value: function e(t) {
                        var n = this;
                        this[S].oStyle = t;
                        n.updateWnd()
                    }
                }, {
                    key: "JS_GetPluginVersion",
                    value: function e() {
                        var t = this;
                        return t[x]
                    }
                }, {
                    key: "JS_ArrangeWindow",
                    value: function e(t) {
                        var n = this;
                        if (t < n[S].iMaxSplit) {
                            n[S].iCurrentSplit = t
                        } else {
                            n[S].iCurrentSplit = n[S].iMaxSplit
                        }
                        if (R.oTool.isFirefox()) {
                            for (var i = 0; i < n[S].iMaxSplit * n[S].iMaxSplit; i++) {
                                if (n[y][i].oPlayCtrl) {
                                    n[y][i].oPlayCtrl.PlayM4_ClearCanvas()
                                }
                            }
                        }
                        n.updateWnd();
                        n.EventCallback.windowEventSelect(0)
                    }
                }, {
                    key: "JS_SetSecretKey",
                    value: function e(t, n) {
                        if (t < 0) {
                            return -1
                        }
                        if (n === "" || typeof n === "undefined") {
                            return -1
                        }
                        this[y][t].szSecretKey = n;
                        return 0
                    }
                }, {
                    key: "JS_Play",
                    value: function e(i, r, a, o, s) {
                        var l = this;
                        var t = new Promise(function(t, n) {
                            if (a < 0 || a > l[b] - 1) {
                                n();
                                return
                            }
                            if (l[y][a].bFrameForward) {
                                n();
                                return
                            }
                            if (l[y][a].bPlay) {
                                l.JS_Stop(a)
                            }
                            if (l[S].iMode === 0) {
                                setTimeout(function() {
                                    l[y][a].bFirstFrame = false;
                                    l[y][a].iDecodeType = f;
                                    if (l[y][a].oPlayCtrl) {
                                        l.cbPlayCtrlCallback(i, r, a, o, s, t, n)
                                    } else {
                                        l[y][a].oPlayCtrl = new E.JSPlayCtrl(l[S].szBasePath + "/playctrl/",function(e) {
                                            if (e.cmd === "loaded" && !l[y][a].bLoad) {
                                                l.cbPlayCtrlCallback(i, r, a, o, s, t, n)
                                            } else if (e.cmd === "OnebyOne") {
                                                if (!e.status) {
                                                    if (!l[y][a].bPause) {
                                                        l.oStreamClient.pause(l[y][a].szStreamUUID);
                                                        l[y][a].bPause = true
                                                    }
                                                } else {
                                                    if (l[y][a].bPause) {
                                                        l.oStreamClient.resume(l[y][a].szStreamUUID);
                                                        l[y][a].bPause = false
                                                    }
                                                }
                                            } else if (e.cmd === "GetFrameData") {}
                                        }
                                        ,a,l.staticPath)
                                    }
                                }, 200)
                            } else if (l[S].iMode === 1) {} else if (l[S].iMode === 2) {
                                var e = (0,
                                O.default)("." + l[S].szId + "play-window").eq(a);
                                e.show();
                                l.cbPlayIMGCallback(i, r, a, o, s, t, n)
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_Seek",
                    value: function e(n, i, r) {
                        var a = this;
                        var t = new Promise(function(e, t) {
                            if (n < 0 || n > a[b] - 1) {
                                t();
                                return
                            }
                            if (!a[y][n].bPlay) {
                                t();
                                return
                            }
                            a.oStreamClient.seek(a[y][n].szStreamUUID, i, r).then(function() {
                                e()
                            }, function(e) {
                                t(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_GetSdkVersion",
                    value: function e() {
                        var t = this;
                        return t[y][0].oPlayCtrl.PlayM4_GetSdkVersion()
                    }
                }, {
                    key: "JS_isInited",
                    value: function e() {
                        var t = this;
                        return t[y][0].bLoad
                    }
                }, {
                    key: "JS_SetLostFrameMode",
                    value: function e(t) {
                        var n = this;
                        return n[y][0].oPlayCtrl.PlayM4_SetLostFrameMode(t)
                    }
                }, {
                    key: "JS_DestroyWorker",
                    value: function e() {
                        var t = this;
                        t[y].forEach(function(e) {
                            if (e.bPlay) {
                                e.oPlayCtrl.PlayM4_CloseStream()
                            }
                            if (e.oPlayCtrl) {
                                e.oPlayCtrl.PlayM4_Destroy();
                                e.oPlayCtrl = null;
                                e.bLoad = false
                            }
                        });
                        t[P].setShapeType("")
                    }
                }, {
                    key: "JS_Stop",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(t, e) {
                            if (n < 0 || n > i[b] - 1) {
                                e();
                                return
                            }
                            if (i[y][n].szStorageUUID) {
                                i.JS_StopSave(n)
                            }
                            if (i[y][n].bEZoom) {
                                i.JS_DisableZoom(n)
                            }
                            if (i[l] === n) {
                                i[l] = -1
                            }
                            i.oStreamClient.stop(i[y][n].szStreamUUID).then(function() {
                                i[y][n].bPlay = false;
                                i[y][n].bFrameForward = false;
                                i[y][n].iRate = 1;
                                if (i[S].iMode === 0) {
                                    if (i[y][n].oPlayCtrl) {
                                        i[y][n].oPlayCtrl.PlayM4_Stop && i[y][n].oPlayCtrl.PlayM4_Stop();
                                        i[y][n].oPlayCtrl.PlayM4_CloseStream && i[y][n].oPlayCtrl.PlayM4_CloseStream()
                                    }
                                } else if (i[S].iMode === 2) {
                                    var e = (0,
                                    O.default)("." + i[S].szId + "play-window").eq(n);
                                    e.hide()
                                }
                                setTimeout(function() {
                                    t()
                                }, 500)
                            }, function() {
                                setTimeout(function() {
                                    e()
                                }, 500)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_Pause",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(e, t) {
                            if (n < 0 || n > i[b] - 1) {
                                t();
                                return
                            }
                            if (!i[y][n].bPlay) {
                                t();
                                return
                            }
                            if (i[y][n].bFrameForward) {
                                t();
                                return
                            }
                            i.oStreamClient.pause(i[y][n].szStreamUUID).then(function() {
                                i[y][n].oPlayCtrl.PlayM4_Pause(true);
                                i[y][n].bPause = true;
                                e()
                            }, function(e) {
                                t(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_Resume",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(e, t) {
                            if (n < 0 || n > i[b] - 1) {
                                t();
                                return
                            }
                            if (!i[y][n].bPlay) {
                                t();
                                return
                            }
                            i.oStreamClient.resume(i[y][n].szStreamUUID).then(function() {
                                if (i[o] !== 1) {
                                    i[y][n].iRate = i[o];
                                    i.oStreamClient.setPlayRate(i[y][n].szStreamUUID, i[y][n].iRate);
                                    i[y][n].oPlayCtrl.PlayM4_PlayRate(i[y][n].iRate);
                                    if (i[o] > 1) {
                                        i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(d)
                                    } else {
                                        i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(f)
                                    }
                                }
                                if (i[y][n].bFrameForward) {
                                    i[y][n].oPlayCtrl.PlayM4_Play(i[y][n].windowID);
                                    i[y][n].bFrameForward = false
                                } else {
                                    i[y][n].oPlayCtrl.PlayM4_Pause(false)
                                }
                                i[y][n].bPause = false;
                                e()
                            }, function(e) {
                                t(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_Slow",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(e, t) {
                            if (n < 0 || n > i[b] - 1) {
                                t();
                                return
                            }
                            if (!i[y][n].bPlay) {
                                t();
                                return
                            }
                            if (i[y][n].iRate === -8) {
                                t();
                                return
                            }
                            if (i[y][n].bFrameForward) {
                                t();
                                return
                            }
                            if (i[y][n].iRate < 0 && i[y][n].iRate > -8) {
                                i[y][n].iRate *= 2
                            }
                            if (i[y][n].iRate === 1) {
                                i[y][n].iRate *= -2
                            }
                            if (i[y][n].iRate > 1) {
                                i[y][n].iRate /= 2
                            }
                            i.oStreamClient.setPlayRate(i[y][n].szStreamUUID, i[y][n].iRate).then(function() {
                                if (i[y][n].iRate < 2) {
                                    i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(f)
                                } else {
                                    i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(d);
                                    i[y][n].oPlayCtrl.PlayM4_SetIFrameDecInterval(0)
                                }
                                i[y][n].oPlayCtrl.PlayM4_PlayRate(i[y][n].iRate);
                                e()
                            }, function(e) {
                                t(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_Fast",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(e, t) {
                            if (n < 0 || n > i[b] - 1) {
                                t();
                                return
                            }
                            if (!i[y][n].bPlay) {
                                t();
                                return
                            }
                            if (i[y][n].bFrameForward) {
                                t();
                                return
                            }
                            if (i[y][n].iRate === 8) {
                                t();
                                return
                            }
                            if (i[y][n].iRate === -2) {
                                i[y][n].iRate = 1
                            } else if (i[y][n].iRate < -2) {
                                i[y][n].iRate /= 2
                            } else if (i[y][n].iRate > 0 && i[y][n].iRate < 8) {
                                i[y][n].iRate *= 2
                            }
                            i.oStreamClient.setPlayRate(i[y][n].szStreamUUID, i[y][n].iRate).then(function() {
                                if (i[y][n].iRate < 2) {
                                    i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(f)
                                } else {
                                    i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(d);
                                    if (i[y][n].iRate === 8) {
                                        i[y][n].oPlayCtrl.PlayM4_SetIFrameDecInterval(2)
                                    } else {
                                        i[y][n].oPlayCtrl.PlayM4_SetIFrameDecInterval(0)
                                    }
                                }
                                i[y][n].oPlayCtrl.PlayM4_PlayRate(i[y][n].iRate);
                                e()
                            }, function(e) {
                                t(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_Transmission",
                    value: function e(i, r) {
                        var a = this;
                        var t = new Promise(function(t, n) {
                            if (i < 0 || i > a[b] - 1) {
                                n();
                                return
                            }
                            if (!a[y][i].szStreamUUID) {
                                n();
                                return
                            }
                            a.oStreamClient.transmission(a[y][i].szStreamUUID, r).then(function(e) {
                                t(e)
                            }, function(e) {
                                n(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_FrameForward",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(e, t) {
                            if (n < 0 || n > i[b] - 1) {
                                t();
                                return
                            }
                            if (!i[y][n].bPlay) {
                                t();
                                return
                            }
                            if (i[y][n].iRate !== 1) {
                                i[y][n].iRate = 1;
                                i[o] = i[y][n].iRate;
                                i.oStreamClient.setPlayRate(i[y][n].szStreamUUID, i[y][n].iRate).then(function() {
                                    i[y][n].oPlayCtrl.PlayM4_PlayRate(i[y][n].iRate);
                                    i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(f);
                                    i[y][n].oPlayCtrl.PlayM4_OneByOne();
                                    i[y][n].bFrameForward = true
                                }, function(e) {
                                    t(e)
                                })
                            } else {
                                i[y][n].oPlayCtrl.PlayM4_PlayRate(i[y][n].iRate);
                                i[y][n].oPlayCtrl.PlayM4_SetDecodeFrameType(f);
                                i[y][n].oPlayCtrl.PlayM4_OneByOne();
                                i[y][n].bFrameForward = true
                            }
                            e()
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_GetOSDTime",
                    value: function e(n) {
                        var r = this;
                        var t = new Promise(function(i, e) {
                            if (n < 0 || n > r[b] - 1) {
                                e(s);
                                return
                            }
                            if (!r[y][n].bPlay) {
                                e(s);
                                return
                            }
                            var t = r[y][n].oPlayCtrl.PlayM4_GetOSDTime(function(e) {
                                var t = R.oTool.isIOS() || R.oTool.isSafari() || R.oTool.isEdge() ? "/" : " ";
                                var n = Date.parse(e.replace(/-/g, t)) / 1e3;
                                i(n)
                            });
                            if (t !== 0) {
                                e(s);
                                return
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_OpenSound",
                    value: function e(t) {
                        var n = this;
                        if (t < 0 || t > n[b] - 1) {
                            return s
                        }
                        if (!n[y][t].bPlay) {
                            return s
                        }
                        if (n[l] === t) {
                            return s
                        }
                        if (n[l] !== -1) {
                            n[y][n[l]].oPlayCtrl.PlayM4_StopSound()
                        }
                        if (n[y][t].oPlayCtrl.PlayM4_PlaySound(t) !== 1) {
                            return s
                        }
                        n[l] = t;
                        return r
                    }
                }, {
                    key: "JS_GetVolume",
                    value: function e(t, n) {
                        var i = this;
                        i[y][t].oPlayCtrl.PlayM4_GetVolume(function(e) {
                            n(e)
                        })
                    }
                }, {
                    key: "JS_SetVolume",
                    value: function e(t, n) {
                        var i = this;
                        if (i[y][t].oPlayCtrl.PlayM4_SetVolume(n) !== 0) {
                            return s
                        }
                        return r
                    }
                }, {
                    key: "JS_CloseSound",
                    value: function e() {
                        var t = this;
                        var n = t[l];
                        if (n < 0 || n > t[b] - 1) {
                            return s
                        }
                        if (!t[y][n].bPlay) {
                            return s
                        }
                        if (t[y][n].oPlayCtrl.PlayM4_StopSound() !== 1) {
                            return s
                        }
                        t[l] = -1;
                        return r
                    }
                }, {
                    key: "JS_EnableZoom",
                    value: function e(t) {
                        var n = this;
                        if (t < 0 || t > n[b] - 1) {
                            return s
                        }
                        if (!n[y][t].bPlay) {
                            return s
                        }
                        (0,
                        O.default)("." + n[S].szId + "draw-window").unbind();
                        this[P] = new B.ESCanvas(n[S].szId + "canvas_draw" + t);
                        this[P].setShapeType("Rect");
                        this[P].setDrawStyle("#ff0000", "", 0);
                        this[P].setDrawStatus(true, function(e) {
                            if (e.startPos && e.endPos) {
                                if (e.startPos[0] > e.endPos[0]) {
                                    n[y][t].oPlayCtrl.PlayM4_SetDisplayRegion(null, false)
                                } else {
                                    n[y][t].oPlayCtrl.PlayM4_SetDisplayRegion({
                                        left: e.startPos[0],
                                        top: e.startPos[1],
                                        right: e.endPos[0],
                                        bottom: e.endPos[1]
                                    }, true)
                                }
                            }
                        });
                        n[y][t].bEZoom = true;
                        return r
                    }
                }, {
                    key: "JS_DisableZoom",
                    value: function e(t) {
                        var n = this;
                        if (t < 0 || t > n[b] - 1) {
                            return s
                        }
                        if (!n[y][t].bPlay) {
                            return s
                        }
                        this[P].setDrawStatus(false);
                        if (this[y][t].oPlayCtrl.PlayM4_SetDisplayRegion(null, false) !== 0) {
                            return s
                        }
                        this[y][t].bEZoom = false;
                        return r
                    }
                }, {
                    key: "JS_Enable3DZoom",
                    value: function e(t, n) {
                        var i = this;
                        if (t < 0 || t > i[b] - 1) {
                            return s
                        }
                        if (!i[y][t].bPlay) {
                            return s
                        }
                        (0,
                        O.default)("." + i[S].szId + "draw-window").unbind();
                        this[k] = n;
                        this[P] = new B.ESCanvas(i[S].szId + "canvas_draw" + t);
                        this[P].setShapeType("Rect");
                        this[P].setDrawStyle("#ff0000", "", 0);
                        this[P].setDrawStatus(true, function(e) {
                            n(e)
                        });
                        i[y][t].b3DZoom = true;
                        return r
                    }
                }, {
                    key: "JS_Disable3DZoom",
                    value: function e(t) {
                        var n = this;
                        if (t < 0 || t > n[b] - 1) {
                            return s
                        }
                        if (!n[y][t].bPlay) {
                            return s
                        }
                        this[P].setDrawStatus(false);
                        this[y][t].b3DZoom = false;
                        return r
                    }
                }, {
                    key: "JS_CapturePicture",
                    value: function e(t, r, a, o, s) {
						console.log('aaa')
                        var l = this;
                        var n = new Promise(function(n, i) {
                            if (t < 0 || t > l[b] - 1) {
                                i();
                                return
                            }
                            if (!l[y][t].bPlay) {
                                i();
                                return
                            }
                            if (!a) {
                                a = "JPEG"
                            }
                            if (a === "BMP") {
                                l[y][t].oPlayCtrl.PlayM4_GetBMP(function(e) {
                                    if (e === 6) {
                                        i(u)
                                    } else {
                                        if (o) {
                                            o(e)
                                        } else {
                                            R.oTool.downloadFile(e, r + ".BMP")
                                        }
                                        n()
                                    }
                                })
                            } else if (a === "JPEG") {
                                l[y][t].oPlayCtrl.PlayM4_GetJPEG(function(e) {
                                    if (e === 6) {
                                        i(u)
                                    } else {
                                        if (o) {
                                            var t = function e(t) {
                                                var n = new Uint8Array(t);
                                                var i = "";
                                                for (var r = 0; r < n.length; r++) {
                                                    i += String.fromCharCode(n[r])
                                                }
                                                return "data:image/jpeg;base64," + window.btoa(i)
                                            };
                                            o({
                                                fileName: r + ".jpeg",
                                                fileUint8Array: e,
                                                base64: t(e)
                                            });
                                            if (s) {
                                                return false
                                            }
                                            R.oTool.downloadFile(e, r + ".jpeg")
                                        } else {
											var t = function e(t) {
											    var n = new Uint8Array(t);
											    var i = "";
											    for (var r = 0; r < n.length; r++) {
											        i += String.fromCharCode(n[r])
											    }
											    return "data:image/jpeg;base64," + window.btoa(i)
											};
                                            // R.oTool.downloadFile(e, r + ".jpeg")
											uni.postMessage({
												data: {
													action: '截图',
													base64: t(e)
												}
											}); 
                                        }
                                        n()
                                    }
                                })
                            }
                        }
                        );
                        return n
                    }
                }, {
                    key: "JS_StopRealPlayAll",
                    value: function e() {
                        var n = this;
                        n.oStreamClient.stopAll();
                        n[y].forEach(function(e, t) {
                            if (e.bPlay) {
                                if (e.szStorageUUID) {
                                    n.JS_StopSave(t)
                                }
                                if (e.bEZoom) {
                                    n.JS_DisableZoom(t)
                                }
                                if (n[S].iMode === 0) {
                                    e.oPlayCtrl.PlayM4_Stop();
                                    e.oPlayCtrl.PlayM4_CloseStream()
                                } else if (n[S].iMode === 2) {
                                    (0,
                                    O.default)("." + n[S].szId + "play-window").hide()
                                }
                            }
                            e.bPlay = false
                        });
                        n[l] = -1
                    }
                }, {
                    key: "JS_StartSave",
                    value: function e(a, o, s) {
                        var l = this;
                        var t = new Promise(function(t, e) {
                            var n = 0;
                            if (s) {
                                n = s.iPackage
                            }
                            if (a < 0 || a > l[b] - 1) {
                                e();
                                return
                            }
                            if (!l[y][a].bPlay) {
                                e();
                                return
                            }
                            if (o.indexOf(".mp4") < 0) {
                                o = o + ".mp4"
                            }
                            var i = l[y][a].aHead;
                            var r = 0;
                            if (l[y][a].szPlayType === "playback") {
                                r = 1
                            }
                            l.oStorageManager.startRecord(o, i, 2, r, {
                                cbEventHandler: function e(t) {
                                    l.EventCallback.pluginErrorHandler(a, t)
                                },
                                iPackage: n
                            }).then(function(e) {
                                l[y][a].szStorageUUID = e;
                                t()
                            }, function() {
                                e()
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_StopSave",
                    value: function e(n) {
                        var i = this;
                        var t = new Promise(function(e, t) {
                            if (!i[y][n].szStorageUUID) {
                                t();
                                return
                            }
                            i.oStorageManager.stopRecord(i[y][n].szStorageUUID).then(function() {
                                i[y][n].szStorageUUID = "";
                                e()
                            }, function(e) {
                                t(e)
                            })
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_GetLocalConfig",
                    value: function e() {
                        return ""
                    }
                }, {
                    key: "JS_SetLocalConfig",
                    value: function e() {
                        return 0
                    }
                }, {
                    key: "JS_SetGridInfo",
                    value: function e(t) {
                        if (t === null || typeof t === "undefined") {
                            return -1
                        }
                        var n = "#ff0000";
                        if (t.drawColor) {
                            n = t.drawColor
                        }
                        this[P].setDrawStyle(n);
                        this[P].setShapesInfoByType("Grid", [{
                            szGridMap: t.gridMap,
                            iGridColNum: t.gridColNum,
                            iGridRowNum: t.gridRowNum
                        }]);
                        return 0
                    }
                }, {
                    key: "JS_GetGridInfo",
                    value: function e() {
                        if (!this[P]) {
                            return {}
                        }
                        var t = this[P].getShapesInfoByType("Grid")[0];
                        if (!t) {
                            return {
                                iGridRowNum: 18,
                                iGridColNum: 22,
                                szGridMap: ""
                            }
                        }
                        return {
                            gridColNum: t.iGridColNum,
                            gridRowNum: t.iGridRowNum,
                            gridMap: t.szGridMap
                        }
                    }
                }, {
                    key: "JS_SetDrawShapeInfo",
                    value: function e(t, n) {
                        if (typeof t === "undefined" || t === "") {
                            return -1
                        }
                        this[P].setShapeType(t);
                        this[P].setDrawStyle(n.szDrawColor || "", n.szFillColor || "", n.iTranslucent || 0);
                        if (n.iMaxShapeSupport && n.iMaxShapeSupport > 0) {
                            this[P].setMaxShapeSupport(n.iMaxShapeSupport)
                        }
                        if (n.iMaxShapeSupport > 0) {
                            this[P].setCurrentShapeInfo({
                                szId: "",
                                szTips: n.szTips || "",
                                iMinClosed: 3,
                                iMaxPointNum: n.iMaxPointSupport,
                                iPolygonType: 1,
                                szDrawColor: n.szDrawColor || "",
                                szFillColor: n.szFillColor || "",
                                iTranslucent: n.iTranslucent || 0
                            })
                        }
                    }
                }, {
                    key: "JS_SetPolygonInfo",
                    value: function e(t) {
                        if (typeof t === "undefined" || !t.length) {
                            return -1
                        }
                        var n = [];
                        if (t.length > 0) {
                            for (var i = 0, r = t.length; i < r; i++) {
                                var a = t[i].aPoint;
                                if (a.length > 0) {
                                    n.push(t[i])
                                }
                            }
                        }
                        if (n.length > 0) {
                            this[P].setShapesInfoByType("Polygon", n);
                            return 0
                        }
                        return -1
                    }
                }, {
                    key: "JS_GetPolygonInfo",
                    value: function e() {
                        var t = [];
                        var n = this[P].getShapesInfoByType("Polygon");
                        for (var i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            var o = {
                                aPoint: a.aPoint,
                                bClosed: a.bClosed,
                                szTips: a.szTips
                            };
                            t.push(o)
                        }
                        return t
                    }
                }, {
                    key: "JS_SetLineInfo",
                    value: function e(t) {
                        if (typeof t === "undefined" || !t.length) {
                            return -1
                        }
                        var n = [];
                        if (t.length > 0) {
                            for (var i = 0, r = t.length; i < r; i++) {
                                var a = t[i].aPoint;
                                if (a.length > 0) {
                                    n.push(t[i])
                                }
                            }
                        }
                        if (n.length > 0) {
                            this[P].setShapesInfoByType("Line", n);
                            return 0
                        }
                        return -1
                    }
                }, {
                    key: "JS_GetLineInfo",
                    value: function e() {
                        var t = [];
                        var n = this[P].getShapesInfoByType("Line");
                        for (var i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            var o = {
                                iLineType: a.iLineType,
                                aPoint: a.aPoint,
                                szTips: a.szTips
                            };
                            t.push(o)
                        }
                        return t
                    }
                }, {
                    key: "JS_SetRectInfo",
                    value: function e(t) {
                        if (typeof t === "undefined" || !t.length) {
                            return -1
                        }
                        var n = [];
                        if (t.length > 0) {
                            for (var i = 0, r = t.length; i < r; i++) {
                                var a = t[i].aPoint;
                                if (a.length > 0) {
                                    n.push(t[i])
                                }
                            }
                        }
                        if (n.length > 0) {
                            this[P].setShapesInfoByType("Rect", n);
                            return 0
                        }
                        return -1
                    }
                }, {
                    key: "JS_GetRectInfo",
                    value: function e() {
                        var t = [];
                        var n = this[P].getShapesInfoByType("Rect");
                        for (var i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            var o = {
                                aPoint: a.aPoint,
                                szTips: a.szTips
                            };
                            t.push(o)
                        }
                        return t
                    }
                }, {
                    key: "JS_SetRegionInfo",
                    value: function e(t) {
                        var a = this;
                        this[P].clearAllShape();
                        var n = R.oTool.parseXmlFromStr(t);
                        this[P].setDrawStyle("#ff0000", "#343434", .3);
                        if ((0,
                        O.default)(n).find("DetectionRegionInfo").length > 0) {
                            this[P].setShapeType("Rect");
                            var i = parseInt((0,
                            O.default)(n).find("MaxRegionNum").eq(0).text(), 10);
                            this[P].setMaxShapeSupport(i);
                            this[P].m_szDisplayMode = (0,
                            O.default)(n).find("DisplayMode").eq(0).text();
                            this[P].m_szVideoFormat = (0,
                            O.default)(n).find("videoFormat").eq(0).text();
                            this[P].m_iHorizontalResolution = parseInt((0,
                            O.default)(n).find("HorizontalResolution").eq(0).text(), 10);
                            this[P].m_iVerticalResolution = parseInt((0,
                            O.default)(n).find("VerticalResolution").eq(0).text(), 10);
                            var o = [];
                            (0,
                            O.default)(n).find("DetectionRegion").each(function() {
                                var e = [];
                                for (var t = 0, n = (0,
                                O.default)(this).find("positionX").length; t < n; t++) {
                                    var i = Math.round((0,
                                    O.default)(this).find("positionX").eq(t).text()) * a[P].m_iCanvasWidth / a[P].m_iHorizontalResolution;
                                    var r = (a[P].m_iVerticalResolution - Math.round((0,
                                    O.default)(this).find("positionY").eq(t).text())) * a[P].m_iCanvasHeight / a[P].m_iVerticalResolution;
                                    e.push([i, r])
                                }
                                if (e.length > 0 && !(e[0][0] === 0 && e[1][0] === 0 && e[2][0] === 0 && e[3][0] === 0)) {
                                    o.push({
                                        aPoint: e,
                                        iEditType: a[P].m_szDisplayMode === "transparent" ? 1 : 0,
                                        szDrawColor: "#ff0000",
                                        szFillColor: "#343434",
                                        iTranslucent: .3
                                    })
                                }
                            });
                            this[P].setShapesInfoByType("Rect", o)
                        } else if ((0,
                        O.default)(n).find("MoveDetection").length > 0) {
                            this[P].setShapeType("Grid");
                            var r = parseInt((0,
                            O.default)(n).find("columnGranularity").eq(0).text(), 10);
                            var s = parseInt((0,
                            O.default)(n).find("rowGranularity").eq(0).text(), 10);
                            var l = (0,
                            O.default)(n).find("gridMap").eq(0).text();
                            this[P].setShapesInfoByType("Grid", [{
                                szGridMap: l,
                                iGridColNum: r,
                                iGridRowNum: s
                            }])
                        }
                        return 0
                    }
                }, {
                    key: "JS_GetRegionInfo",
                    value: function e() {
                        if (!this[P]) {
                            return ""
                        }
                        var t = this[P].getShapeType();
                        var n = '<?xml version="1.0" encoding="utf-8"?>';
                        if (t === "Rect") {
                            n += "<DetectionRegionInfo>";
                            n += "<videoFormat>" + this[P].m_szVideoFormat + "</videoFormat><RegionType>roi</RegionType>";
                            n += "<ROI><HorizontalResolution>" + this[P].m_iHorizontalResolution + "</HorizontalResolution><VerticalResolution>" + this[P].m_iVerticalResolution + "</VerticalResolution></ROI>";
                            n += "<DisplayMode>" + this[P].m_szDisplayMode + "</DisplayMode><MaxRegionNum>" + this[P].getMaxShapeSupport() + "</MaxRegionNum>";
                            n += "<DetectionRegionList>";
                            var i = this[P].getShapesInfoByType("Rect");
                            for (var r = 0, a = i.length; r < a; r++) {
                                var o = i[r].aPoint;
                                n += "<DetectionRegion><RegionCoordinatesList>";
                                n += "<RegionCoordinates><positionX>" + Math.round(o[3][0] * this[P].m_iHorizontalResolution / this[P].m_iCanvasWidth) + "</positionX><positionY>" + (this[P].m_iVerticalResolution - Math.round(o[3][1] * this[P].m_iVerticalResolution / this[P].m_iCanvasHeight)) + "</positionY></RegionCoordinates>";
                                n += "<RegionCoordinates><positionX>" + Math.round(o[2][0] * this[P].m_iHorizontalResolution / this[P].m_iCanvasWidth) + "</positionX><positionY>" + (this[P].m_iVerticalResolution - Math.round(o[2][1] * this[P].m_iVerticalResolution / this[P].m_iCanvasHeight)) + "</positionY></RegionCoordinates>";
                                n += "<RegionCoordinates><positionX>" + Math.round(o[1][0] * this[P].m_iHorizontalResolution / this[P].m_iCanvasWidth) + "</positionX><positionY>" + (this[P].m_iVerticalResolution - Math.round(o[1][1] * this[P].m_iVerticalResolution / this[P].m_iCanvasHeight)) + "</positionY></RegionCoordinates>";
                                n += "<RegionCoordinates><positionX>" + Math.round(o[0][0] * this[P].m_iHorizontalResolution / this[P].m_iCanvasWidth) + "</positionX><positionY>" + (this[P].m_iVerticalResolution - Math.round(o[0][1] * this[P].m_iVerticalResolution / this[P].m_iCanvasHeight)) + "</positionY></RegionCoordinates>";
                                n += "</RegionCoordinatesList></DetectionRegion>"
                            }
                            n += "</DetectionRegionList>";
                            n += "</DetectionRegionInfo>"
                        } else if (t === "Grid") {
                            var s = this[P].getShapesInfoByType("Grid")[0];
                            if (!s) {
                                s = {
                                    iGridRowNum: 18,
                                    iGridColNum: 22,
                                    szGridMap: ""
                                }
                            }
                            n += "<MoveDetection><videoFormat>PAL</videoFormat><RegionType>grid</RegionType>";
                            n += "<Grid><rowGranularity>" + s.iGridRowNum + "</rowGranularity><columnGranularity>" + s.iGridColNum + "</columnGranularity></Grid>";
                            n += "<DisplayMode>transparent</DisplayMode>";
                            n += "<gridMap>" + s.szGridMap + "</gridMap></MoveDetection>"
                        }
                        return n
                    }
                }, {
                    key: "JS_SetDrawStatus",
                    value: function e(t) {
                        if (!this[P]) {
                            return -1
                        }
                        this[P].setDrawStatus(t);
                        return 0
                    }
                }, {
                    key: "JS_ClearRegion",
                    value: function e() {
                        if (!this[P]) {
                            return -1
                        }
                        this[P].clearAllShape();
                        return 0
                    }
                }, {
                    key: "JS_GetTextOverlay",
                    value: function e() {
                        if (!this[P]) {
                            return ""
                        }
                        var t = '<?xml version="1.0" encoding="utf-8"?>';
                        t += "<OSD>";
                        t += "<videoResolutionWidth>" + this[P].m_iHorizontalResolution + "</videoResolutionWidth>";
                        t += "<videoResolutionHeight>" + this[P].m_iVerticalResolution + "</videoResolutionHeight>";
                        var n = "";
                        var i = "";
                        var r = "";
                        var a = this[P].getShapesInfoByType("RectOSD");
                        for (var o = 0, s = a.length; o < s; o++) {
                            var l = a[o];
                            var u = Math.round(l.iPositionX * this[P].m_iHorizontalResolution / this[P].m_iCanvasWidth);
                            var f = Math.round(l.iPositionY * this[P].m_iVerticalResolution / this[P].m_iCanvasHeight);
                            if (l.szOSDType === "overlay-date") {
                                n += "<DateTimeOverlay><Type>" + l.szDateStyle + "</Type>";
                                n += "<clockType>" + l.szClockType + "</clockType>";
                                n += "<displayWeek>" + l.szDisplayWeek + "</displayWeek>";
                                n += "<enabled>" + l.szEnabled + "</enabled>";
                                n += "<alignment>" + l.szAlignment + "</alignment>";
                                n += "<positionX>" + u + "</positionX><positionY>" + f + "</positionY></DateTimeOverlay>"
                            } else if (l.szOSDType === "overlay-ch") {
                                i += "<channelNameOverlay><enabled>" + l.szEnabled + "</enabled>";
                                i += "<ChannelName>" + l.szText + "</ChannelName>";
                                i += "<alignment>" + l.szAlignment + "</alignment>";
                                i += "<positionX>" + u + "</positionX><positionY>" + f + "</positionY></channelNameOverlay>"
                            } else if (l.szOSDType === "overlay-text") {
                                r += "<TextOverlay><id>" + l.szId + "</id><enabled>" + l.szEnabled + "</enabled>";
                                r += "<alignment>" + l.szAlignment + "</alignment>";
                                r += "<displayText>" + l.szText + "</displayText>";
                                r += "<positionX>" + u + "</positionX><positionY>" + f + "</positionY></TextOverlay>"
                            }
                        }
                        t += n;
                        t += i;
                        t += "<TextOverlayList>";
                        t += r;
                        t += "</TextOverlayList>";
                        t += "</OSD>";
                        return t
                    }
                }, {
                    key: "JS_SetTextOverlay",
                    value: function e(t) {
                        var o = this;
                        this[P].setMaxShapeSupport(20);
                        var n = R.oTool.parseXmlFromStr(t);
                        this[P].clearShapeByType("RectOSD");
                        if ((0,
                        O.default)(n).find("OSD").length > 0) {
                            this[P].setDrawStyle("#ff0000", "#343434", .7);
                            this[P].m_iHorizontalResolution = parseInt((0,
                            O.default)(n).find("videoResolutionWidth").eq(0).text(), 10);
                            this[P].m_iVerticalResolution = parseInt((0,
                            O.default)(n).find("videoResolutionHeight").eq(0).text(), 10);
                            if ((0,
                            O.default)(n).find("channelNameOverlay").length > 0) {
                                var i = (0,
                                O.default)(n).find("channelNameOverlay").eq(0);
                                var r = (0,
                                O.default)(i).find("ChannelName").eq(0).text();
                                var a = (0,
                                O.default)(i).find("enabled").eq(0).text();
                                var s = Math.round((0,
                                O.default)(i).find("positionX").eq(0).text()) * this[P].m_iCanvasWidth / this[P].m_iHorizontalResolution;
                                var l = Math.round((0,
                                O.default)(i).find("positionY").eq(0).text()) * this[P].m_iCanvasHeight / this[P].m_iVerticalResolution;
                                var u = (0,
                                O.default)(i).find("alignment").eq(0).text() || "0";
                                this[P].addOSDShape(r, a, s, l, {
                                    szOSDType: "overlay-ch",
                                    szAlignment: u
                                })
                            }
                            if ((0,
                            O.default)(n).find("DateTimeOverlay").length > 0) {
                                var f = (0,
                                O.default)(n).find("DateTimeOverlay").eq(0);
                                var d = (0,
                                O.default)(f).find("enabled").eq(0).text();
                                var c = (0,
                                O.default)(f).find("Type").eq(0).text() || (0,
                                O.default)(f).find("type").eq(0).text();
                                var h = (0,
                                O.default)(f).find("displayWeek").eq(0).text();
                                var p = (0,
                                O.default)(f).find("clockType").eq(0).text();
                                var v = "";
                                var m = "";
                                var y = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                                var g = new Date;
                                if (h === "true") {
                                    m = y[g.getDay()]
                                }
                                if (p === "24hour") {
                                    p = ""
                                } else {
                                    p = "AM/PM"
                                }
                                switch (c) {
                                case "0":
                                    v = "YYYY-MM-DD " + m + " hh:mm:ss " + p;
                                    break;
                                case "1":
                                    v = "MM-DD-YYYY " + m + " hh:mm:ss " + p;
                                    break;
                                case "2":
                                    v = "CHR-YYYY-MM-DD " + m + " hh:mm:ss " + p;
                                    break;
                                case "3":
                                    v = "CHR-MM-DD-YYYY " + m + " hh:mm:ss " + p;
                                    break;
                                case "4":
                                    v = "DD-MM-YYYY " + m + " hh:mm:ss " + p;
                                    break;
                                case "5":
                                    v = "CHR-DD-MM-YYYY " + m + " hh:mm:ss " + p;
                                    break;
                                default:
                                    break
                                }
                                var S = Math.round((0,
                                O.default)(f).find("positionX").eq(0).text()) * this[P].m_iCanvasWidth / this[P].m_iHorizontalResolution;
                                var b = Math.round((0,
                                O.default)(f).find("positionY").eq(0).text()) * this[P].m_iCanvasHeight / this[P].m_iVerticalResolution;
                                var w = (0,
                                O.default)(f).find("alignment").eq(0).text() || "0";
                                this[P].addOSDShape(v, d, S, b, {
                                    szOSDType: "overlay-date",
                                    szDateStyle: c,
                                    szDisplayWeek: h,
                                    szClockType: p,
                                    szAlignment: w
                                })
                            }
                            if ((0,
                            O.default)(n).find("TextOverlayList").length > 0) {
                                (0,
                                O.default)(n).find("TextOverlayList").eq(0).find("TextOverlay").each(function() {
                                    var e = (0,
                                    O.default)(this).find("displayText").eq(0).text();
                                    var t = (0,
                                    O.default)(this).find("enabled").eq(0).text();
                                    var n = (0,
                                    O.default)(this).find("id").eq(0).text();
                                    var i = Math.round((0,
                                    O.default)(this).find("positionX").eq(0).text()) * o[P].m_iCanvasWidth / o[P].m_iHorizontalResolution;
                                    var r = Math.round((0,
                                    O.default)(this).find("positionY").eq(0).text()) * o[P].m_iCanvasHeight / o[P].m_iVerticalResolution;
                                    var a = (0,
                                    O.default)(this).find("alignment").eq(0).text() || "0";
                                    o[P].addOSDShape(e, t, i, r, {
                                        szOSDType: "overlay-text",
                                        szId: n,
                                        szAlignment: a
                                    })
                                })
                            }
                        }
                        return 0
                    }
                }, {
                    key: "JS_ClearSnapInfo",
                    value: function e(t) {
                        if (!this[P]) {
                            return -1
                        }
                        if (t === 0) {
                            this[P].clearShapeByType("Rect")
                        } else if (t === 1) {
                            this[P].clearShapeByType("Polygon")
                        } else if (t === 2) {
                            this[P].clearShapeByType("Line")
                        } else if (t === 3) {
                            this[P].clearShapeByType("Rect");
                            this[P].clearShapeByType("Polygon")
                        } else if (t === 5) {
                            this[P].clearShapeByType("Point")
                        } else {
                            this[P].clearAllShape()
                        }
                        return 0
                    }
                }, {
                    key: "JS_ClearTargetPolygon",
                    value: function e(t) {
                        var n = R.oTool.parseXmlFromStr(t);
                        var i = this[P].getAllShapesInfo();
                        var r = i.length;
                        if (r > 0) {
                            for (var a = 0; a < r; a++) {
                                var o = (0,
                                O.default)(n).find("id").eq(0).text();
                                if (i[a].szType === "Polygon") {
                                    if (i[a].szId === o) {
                                        this[P].deleteShape(a);
                                        break
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "JS_SetSnapPolygonInfo",
                    value: function e(t) {
                        var c = this;
                        this[P].setShapeType("Polygon");
                        this[P].setMaxShapeSupport(20);
                        this[P].setDrawStyle("#FFFF00", "#FFFF00", .1);
                        var n = R.oTool.parseXmlFromStr(t);
                        var i = this[P].getAllShapesInfo();
                        var r = i.length;
                        if (r > 0) {
                            for (var a = 0; a < r; a++) {
                                var o = (0,
                                O.default)(n).find("id").eq(0).text();
                                if (i[a].szType === "Polygon") {
                                    if (i[a].szId === o) {
                                        this[P].deleteShape(a);
                                        break
                                    }
                                }
                            }
                        }
                        var h = [];
                        if ((0,
                        O.default)(n).find("SnapPolygonList").length > 0) {
                            (0,
                            O.default)(n).find("SnapPolygonList").eq(0).find("SnapPolygon").each(function() {
                                var e = (0,
                                O.default)(this).find("id").eq(0).text();
                                var t = parseInt((0,
                                O.default)(this).find("polygonType").eq(0).text() || "1", 10);
                                var n = (0,
                                O.default)(this).find("Tips").eq(0).text() || (0,
                                O.default)(this).find("tips").eq(0).text();
                                var i = parseInt((0,
                                O.default)(this).find("MinClosed").eq(0).text(), 10);
                                var r = parseInt((0,
                                O.default)(this).find("PointNumMax").eq(0).text(), 10);
                                var a = parseInt((0,
                                O.default)(this).find("EditType").eq(0).text(), 10) || parseInt((0,
                                O.default)(this).find("editType").eq(0).text(), 10) || 0;
                                var o = (0,
                                O.default)(this).find("isClosed").eq(0).text() === "true";
                                var s = "rgb(" + (0,
                                O.default)(this).find("r").eq(0).text() + "," + (0,
                                O.default)(this).find("g").eq(0).text() + "," + (0,
                                O.default)(this).find("b").eq(0).text() + ")";
                                var l = s;
                                var u = .1;
                                var f = parseInt((0,
                                O.default)(this).find("RedrawMode").eq(0).text(), 10) || 0;
                                var d = [];
                                (0,
                                O.default)(this).find("pointList").eq(0).find("point").each(function(e) {
                                    d[e] = [];
                                    d[e][0] = Math.round((0,
                                    O.default)(this).find("x").eq(0).text() * c[P].m_iCanvasWidth);
                                    d[e][1] = Math.round((0,
                                    O.default)(this).find("y").eq(0).text() * c[P].m_iCanvasHeight)
                                });
                                if (d.length > 0) {
                                    h.push({
                                        szId: e,
                                        iPolygonType: t,
                                        iMinClosed: i,
                                        iMaxPointNum: r,
                                        iEditType: a,
                                        aPoint: d,
                                        bClosed: o,
                                        szTips: n,
                                        szDrawColor: s,
                                        szFillColor: l,
                                        iTranslucent: u,
                                        iRedrawMode: f
                                    });
                                    c[P].setDrawStatus(false)
                                } else {
                                    c[P].setCurrentShapeInfo({
                                        szId: e,
                                        szTips: n,
                                        iMinClosed: i,
                                        iMaxPointNum: r,
                                        iPolygonType: t,
                                        szDrawColor: s,
                                        szFillColor: l,
                                        iTranslucent: u,
                                        iRedrawMode: f
                                    });
                                    c[P].setDrawStatus(true)
                                }
                            })
                        }
                        if (h.length > 0) {
                            this[P].setShapesInfoByType("Polygon", h)
                        }
                        return 0
                    }
                }, {
                    key: "JS_GetSnapPolygonInfo",
                    value: function e() {
                        var t = "<?xml version='1.0' encoding='utf-8'?><SnapPolygonList>";
                        var n = this[P].getShapesInfoByType("Polygon");
                        for (var i = 0, r = n.length; i < r; i++) {
                            var a = n[i];
                            t += "<SnapPolygon>";
                            t += "<id>" + a.szId + "</id>";
                            t += "<polygonType>" + a.iPolygonType + "</polygonType>";
                            t += "<color>";
                            var o = a.szDrawColor.substring(4, a.szDrawColor.length - 1).split(",");
                            t += "<r>" + o[0] + "</r>";
                            t += "<g>" + o[1] + "</g>";
                            t += "<b>" + o[2] + "</b>";
                            t += "</color>";
                            t += "<tips>" + a.szTips + "</tips>";
                            t += "<isClosed>" + a.bClosed + "</isClosed>";
                            var s = a.aPoint;
                            t += "<pointList>";
                            for (var l = 0, u = s.length; l < u; l++) {
                                t += "<point><x>" + (s[l][0] / this[P].m_iCanvasWidth).toFixed(6) + "</x><y>" + (s[l][1] / this[P].m_iCanvasHeight).toFixed(6) + "</y></point>"
                            }
                            t += "</pointList>";
                            t += "</SnapPolygon>"
                        }
                        t += "</SnapPolygonList>";
                        return t
                    }
                }, {
                    key: "JS_SetSnapDrawMode",
                    value: function e(t, n) {
                        var i = this;
                        if (!this[P]) {
                            return -1
                        }
                        this[P].setDrawMutiShapeOneTime(false);
                        if (t === 0 && n === 3) {
                            i[P].setDrawStatus(false)
                        }
                        return 0
                    }
                }, {
                    key: "JS_SetSnapLineInfo",
                    value: function e(t) {
                        var s = this;
                        this[P].setShapeType("Line");
                        this[P].setMaxShapeSupport(20);
                        this[P].setDrawStyle("#FFFF00", "#FFFF00", .1);
                        var n = R.oTool.parseXmlFromStr(t);
                        var i = this[P].getAllShapesInfo();
                        var r = i.length;
                        if (r > 0) {
                            for (var a = 0; a < r; a++) {
                                var o = (0,
                                O.default)(n).find("id").eq(0).text();
                                if (i[a].szType === "Line") {
                                    if (i[a].szId === o) {
                                        this[P].deleteShape(a);
                                        break
                                    }
                                }
                            }
                        }
                        var l = [];
                        if ((0,
                        O.default)(n).find("SnapLineList").length > 0) {
                            (0,
                            O.default)(n).find("SnapLineList").eq(0).find("SnapLine").each(function() {
                                var e = (0,
                                O.default)(this).find("id").eq(0).text();
                                var t = parseInt((0,
                                O.default)(this).find("LineTypeEx").eq(0).text(), 10);
                                var n = parseInt((0,
                                O.default)(this).find("CustomType").text() || (0,
                                O.default)(this).find("LineType").text(), 10);
                                var i = parseInt((0,
                                O.default)(this).find("ArrowType").text() || 0, 10);
                                var r = (0,
                                O.default)(this).find("Tips").eq(0).text() || (0,
                                O.default)(this).find("tips").eq(0).text();
                                var a = "rgb(" + (0,
                                O.default)(this).find("r").eq(0).text() + "," + (0,
                                O.default)(this).find("g").eq(0).text() + "," + (0,
                                O.default)(this).find("b").eq(0).text() + ")";
                                var o = [];
                                o[0] = [];
                                o[1] = [];
                                o[0][0] = Math.round((0,
                                O.default)(this).find("StartPos").eq(0).find("x").eq(0).text() * s[P].m_iCanvasWidth);
                                o[0][1] = Math.round((0,
                                O.default)(this).find("StartPos").eq(0).find("y").eq(0).text() * s[P].m_iCanvasHeight);
                                o[1][0] = Math.round((0,
                                O.default)(this).find("EndPos").eq(0).find("x").eq(0).text() * s[P].m_iCanvasWidth);
                                o[1][1] = Math.round((0,
                                O.default)(this).find("EndPos").eq(0).find("y").eq(0).text() * s[P].m_iCanvasHeight);
                                if (o.length > 0) {
                                    l.push({
                                        szId: e,
                                        iLineType: t,
                                        aPoint: o,
                                        szTips: r,
                                        iDirection: n,
                                        iArrowType: i,
                                        szDrawColor: a
                                    });
                                    s[P].setDrawStatus(false)
                                }
                            })
                        }
                        if (l.length > 0) {
                            this[P].setShapesInfoByType("Line", l)
                        }
                        return 0
                    }
                }, {
                    key: "JS_GetSnapLineInfo",
                    value: function e() {
                        var t = this;
                        var n = "<?xml version='1.0' encoding='utf-8'?><SnapLineList>";
                        var i = this[P].getShapesInfoByType("Line");
                        for (var r = 0, a = i.length; r < a; r++) {
                            n += "<SnapLine>";
                            n += "<id>" + i[r].szId + "</id>";
                            n += "<LineTypeEx>" + i[r].iLineType + "</LineTypeEx>";
                            n += "<CustomType>0</CustomType><MoveChange>0</MoveChange><ArrowType>" + i[r].iArrowType + "</ArrowType>";
                            n += "<tips>" + i[r].szTips + "</tips>";
                            var o = i[r].aPoint;
                            n += "<StartPos><x>" + (o[0][0] / t[P].m_iCanvasWidth).toFixed(6) + "</x><y>" + (o[0][1] / t[P].m_iCanvasHeight).toFixed(6) + "</y></StartPos>";
                            n += "<EndPos><x>" + (o[1][0] / t[P].m_iCanvasWidth).toFixed(6) + "</x><y>" + (o[1][1] / t[P].m_iCanvasHeight).toFixed(6) + "</y></EndPos>";
                            n += "<LineSelected>false</LineSelected>";
                            if (i[r].aCrossArrowPoint.length > 0) {
                                n += "<PDCArrow><Sp_x>" + (i[r].aCrossArrowPoint[0][0] / t[P].m_iCanvasWidth).toFixed(6) + "</Sp_x>";
                                n += "<Sp_y>" + (i[r].aCrossArrowPoint[0][1] / t[P].m_iCanvasWidth).toFixed(6) + "</Sp_y>";
                                n += "<Ep_x>" + (i[r].aCrossArrowPoint[1][0] / t[P].m_iCanvasWidth).toFixed(6) + "</Ep_x>";
                                n += "<Ep_y>" + (i[r].aCrossArrowPoint[1][1] / t[P].m_iCanvasWidth).toFixed(6) + "</Ep_y></PDCArrow>"
                            }
                            n += "<PDCShowMark>false</PDCShowMark>";
                            var s = i[r].szDrawColor.split(",")[0].split("(")[1];
                            var l = i[r].szDrawColor.split(",")[1];
                            var u = i[r].szDrawColor.split(",")[2].split(")")[0];
                            n += "<color><r>" + (s || "255") + "</r><g>" + (l || "255") + "</g><b>" + (u || "0") + "</b></color>";
                            n += "</SnapLine>"
                        }
                        n += "</SnapLineList>";
                        return n
                    }
                }, {
                    key: "JS_GetSnapPointInfo",
                    value: function e() {
                        return ""
                    }
                }, {
                    key: "JS_SelectShapeById",
                    value: function e(t, n) {
                        if (!t) {
                            return -1
                        }
                        this[P].selectShapeById(t, n);
                        return 0
                    }
                }, {
                    key: "JS_DeleteChoosedShape",
                    value: function e() {
                        var t = this[P].getAllShapesInfo();
                        var n = t.length;
                        if (n > 0) {
                            for (var i = 0; i < n; i++) {
                                if (t[i].bChoosed) {
                                    this[P].deleteShape(i);
                                    return t[i].szId
                                }
                            }
                            return ""
                        }
                        return ""
                    }
                }, {
                    key: "JS_SetSnapPointInfo",
                    value: function e(t) {
                        var i = this;
                        var n = R.oTool.parseXmlFromStr(t);
                        if ((0,
                        O.default)(n).find("mode").eq(0).text() === "1") {
                            var r = (0,
                            O.default)(n).find("id").eq(0).text();
                            var a = "rgb(" + (0,
                            O.default)(n).find("r").eq(0).text() + "," + (0,
                            O.default)(n).find("g").eq(0).text() + "," + (0,
                            O.default)(n).find("b").eq(0).text() + ")";
                            this[P].setShapeType("Point");
                            this[P].setDrawStatus(true);
                            this[P].setMaxShapeSupport(12);
                            i[P].setCurrentShapeInfo({
                                szId: r,
                                szDrawColor: a,
                                iTranslucent: 1
                            })
                        } else {
                            var o = [];
                            this[P].clearShapeByType("Point");
                            this[P].setMaxShapeSupport(12);
                            this[P].setDrawStatus(false);
                            if ((0,
                            O.default)(n).find("SnapPointList").length > 0) {
                                (0,
                                O.default)(n).find("SnapPointList").eq(0).find("SnapPoint").each(function() {
                                    var e = (0,
                                    O.default)(this).find("id").eq(0).text();
                                    var t = "rgb(" + (0,
                                    O.default)(this).find("r").eq(0).text() + "," + (0,
                                    O.default)(this).find("g").eq(0).text() + "," + (0,
                                    O.default)(this).find("b").eq(0).text() + ")";
                                    var n = [];
                                    n[0] = [];
                                    n[0][0] = Math.round((0,
                                    O.default)(this).find("positionX").eq(0).text() * i[P].m_iCanvasWidth);
                                    n[0][1] = Math.round((0,
                                    O.default)(this).find("positionY").eq(0).text() * i[P].m_iCanvasHeight);
                                    if (n.length > 0) {
                                        o.push({
                                            szId: e,
                                            aPoint: n,
                                            szDrawColor: t,
                                            iTranslucent: 1
                                        })
                                    }
                                })
                            }
                            if (o.length > 0) {
                                this[P].setShapesInfoByType("Point", o)
                            }
                        }
                        return 0
                    }
                }, {
                    key: "JS_FullScreenDisplay",
                    value: function e(t) {
                        var n = this;
                        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                            var i = document.documentElement.clientWidth;
                            var r = document.documentElement.clientHeight;
                            var a = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                            if (a) {
                                i = i * 2;
                                r = r * 2;
                                n.oJSPlugin.find("." + n[S].szId + "parent-wnd").eq(0).css({
                                    width: i,
                                    height: r,
                                    "z-index": 1e4
                                })
                            }
                            var o = document.body;
                            o = (0,
                            O.default)("#" + n[S].szId).find("canvas#" + n[S].szId + "canvas0")[0];
                            var s = "";
                            if (i >= r) {
                                s += "width:" + i + "px;";
                                s += "height:" + r + "px;";
                                s += "-webkit-transform: rotate(0); transform: rotate(0);";
                                s += "-webkit-transform-origin: 0 0;";
                                s += "transform-origin: 0 0;"
                            } else {
                                s += "width:" + r + "px;";
                                s += "height:" + i + "px;";
                                s += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
                                s += "-webkit-transform-origin: " + i / 2 + "px " + i / 2 + "px;";
                                s += "transform-origin: " + i / 2 + "px " + i / 2 + "px;"
                            }
                            s += "position: fixed;top: 0;left: 0;z-index:10";
                            o.style.cssText = s;
                            this[w] = t
                        } else {
                            if (t) {
                                var l = n.oJSPlugin.get(0);
                                if (l.requestFullScreen) {
                                    l.requestFullScreen()
                                } else if (l.webkitRequestFullScreen) {
                                    l.webkitRequestFullScreen()
                                } else if (l.mozRequestFullScreen) {
                                    l.mozRequestFullScreen()
                                } else if (l.msRequestFullscreen) {
                                    l.msRequestFullscreen()
                                } else if (l.oRequestFullscreen) {
                                    l.oRequestFullscreen()
                                }
                            }
                            this[w] = t
                        }
                    }
                }, {
                    key: "JS_CancelFullScreenDisplay",
                    value: function e() {
                        var t = this;
                        if (navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
                            var n = (0,
                            O.default)("." + t[S].szId + "parent-wnd").parent().eq(0).width();
                            var i = (0,
                            O.default)("." + t[S].szId + "parent-wnd").parent().eq(0).height();
                            var r = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                            if (r) {
                                n = n * 2;
                                i = i * 2;
                                t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).css({
                                    width: n,
                                    height: i,
                                    "z-index": 0
                                })
                            }
                            var a = document.body;
                            a = (0,
                            O.default)("#" + t[S].szId).find("canvas#" + t[S].szId + "canvas0")[0];
                            var o = "";
                            if (n >= i) {
                                o += "width:" + n + "px;";
                                o += "height:" + i + "px;";
                                o += "-webkit-transform: rotate(0); transform: rotate(0);";
                                o += "-webkit-transform-origin: 0 0;";
                                o += "transform-origin: 0 0;"
                            } else {
                                o += "width:" + i + "px;";
                                o += "height:" + n + "px;";
                                o += "-webkit-transform: rotate(90deg); transform: rotate(90deg);";
                                o += "-webkit-transform-origin: " + n / 2 + "px " + n / 2 + "px;";
                                o += "transform-origin: " + n / 2 + "px " + n / 2 + "px;"
                            }
                            a.style.cssText = o
                        } else {
                            if (t.oJSPlugin.find("." + t[S].szId + "parent-wnd").eq(0).width() === (0,
                            O.default)(window).width()) {
                                return
                            }
                            if (document.exitFullscreen) {
                                document.exitFullscreen()
                            } else if (document.webkitCancelFullScreen) {
                                document.webkitCancelFullScreen()
                            } else if (document.mozCancelFullScreen) {
                                document.mozCancelFullScreen()
                            }
                        }
                        this[_] = null;
                        this[w] = false
                    }
                }, {
                    key: "JS_FullScreenSingle",
                    value: function e(t) {
                        var n = this;
                        if (!n[y][t].bPlay) {
                            return
                        }
                        var i = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || false;
                        var r = n.oJSPlugin.find("." + n[S].szId + "parent-wnd").eq(0).children().eq(t).get(0);
                        if (!i) {
                            if (r.requestFullScreen) {
                                r.requestFullScreen()
                            } else if (r.webkitRequestFullScreen) {
                                r.webkitRequestFullScreen()
                            } else if (r.mozRequestFullScreen) {
                                r.mozRequestFullScreen()
                            }
                            n[_] = n.oJSPlugin.find("." + n[S].szId + "parent-wnd").eq(0).children().eq(t)
                        } else {
                            if (n.oJSPlugin.find("." + n[S].szId + "parent-wnd").eq(0).width() === (0,
                            O.default)(window).width()) {
                                return
                            }
                            if (document.exitFullscreen) {
                                document.exitFullscreen()
                            } else if (document.webkitCancelFullScreen) {
                                document.webkitCancelFullScreen()
                            } else if (document.mozCancelFullScreen) {
                                document.mozCancelFullScreen()
                            }
                            n[_] = null;
                            n[w] = false
                        }
                    }
                }, {
                    key: "JS_StartDownload",
                    value: function e(t, n, i, r) {
                        var a = (0,
                        O.default)(R.oTool.parseXmlFromStr(r)).find("playbackURI").eq(0).text();
                        var o = t + "?playbackURI=" + a;
                        var s = ".mp4";
                        if (t.indexOf("picture/Streaming/tracks") > 0) {
                            o = t;
                            s = ".jpg"
                        }
                        var l = o.indexOf("&name=") + 6;
                        var u = o.indexOf("&size=");
                        i = o.substring(l, u);
                        (0,
                        O.default)("body").append('<a id="jsplugin_download_a" href="' + o + '" download=' + i + s + '><li id="jsplugin_download_li"></li></a>');
                        (0,
                        O.default)("#jsplugin_download_li").trigger("click");
                        (0,
                        O.default)("#jsplugin_download_a").remove();
                        return 0
                    }
                }, {
                    key: "JS_Resize",
                    value: function e(r, a) {
                        var o = this;
                        var s = this;
                        var l = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
                        if (l) {
                            r = r * 2;
                            a = a * 2
                        }
                        setTimeout(function() {
                            var e = document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || false;
                            if (o[w] && e) {
                                r = (0,
                                O.default)(window).width();
                                a = (0,
                                O.default)(window).height();
                                s.oJSPlugin.css({
                                    width: r,
                                    height: a
                                })
                            } else {
                                s.oJSPlugin.css({
                                    width: l ? r / 2 : r,
                                    height: l ? a / 2 : a
                                })
                            }
                            var t = document.body;
                            t = (0,
                            O.default)("#" + s[S].szId).find("canvas#" + s[S].szId + "canvas0")[0];
                            var n = "";
                            n += "width:" + r + "px;";
                            n += "height:" + a + "px;";
                            n += "-webkit-transform: rotate(0); transform: rotate(0);";
                            n += "-webkit-transform-origin: 0 0;";
                            n += "transform-origin: 0 0;";
                            t.style.cssText = n;
                            o[S].iWidth = r;
                            o[S].iHeight = a;
                            if (R.oTool.isFirefox()) {
                                for (var i = 0; i < s[S].iMaxSplit * s[S].iMaxSplit; i++) {
                                    if (s[y][i].oPlayCtrl) {
                                        s[y][i].oPlayCtrl.PlayM4_ClearCanvas()
                                    }
                                }
                            }
                            s.updateWnd();
                            if (s[_] && e) {
                                r = (0,
                                O.default)(window).width();
                                a = (0,
                                O.default)(window).height();
                                s[_].css({
                                    width: r,
                                    height: a
                                });
                                s[_].find("." + s[S].szId + "play-window").attr("width", r);
                                s[_].find("." + s[S].szId + "play-window").attr("height", a);
                                s[_].find("." + s[S].szId + "draw-window").attr("width", r - 2);
                                s[_].find("." + s[S].szId + "draw-window").attr("height", a - 2)
                            }
                            if (!e) {
                                s[_] = null;
                                s[w] = false
                            }
                            o[P].resizeCanvas();
                            o[P].canvasRedraw()
                        }, 80)
                    }
                }, {
                    key: "JS_WndCreate",
                    value: function e(t, n, i) {
                        var r = this;
                        r.createWindows(n, i);
                        this[P].updateCanvas(r[S].szId + "canvas_draw0");
                        this[P].clearAllShape();
                        if (t === 0) {
                            r.oJSPlugin.hide()
                        } else {
                            r.oJSPlugin.show()
                        }
                        r.EventCallback.windowEventSelect(0);
                        r.initEvent();
                        r[D] = null
                    }
                }, {
                    key: "JS_ExportDeviceConfig",
                    value: function e(t) {
                        (0,
                        O.default)("body").append('<a id="jsplugin_download_a" href="' + t + '"><li id="jsplugin_download_li"></li></a>');
                        (0,
                        O.default)("#jsplugin_download_li").trigger("click");
                        (0,
                        O.default)("#jsplugin_download_a").remove();
                        return 0
                    }
                }, {
                    key: "JS_OpenFileBrowser",
                    value: function e(t, n, i, r, a) {
                        var o = this;
                        o[D] = null;
                        var s = window.document.createElement("input");
                        s.type = "file";
                        if (n.toLowerCase() === "bmp") {
                            s.accept = "image/bmp";
                            s.style.display = "none";
                            (0,
                            O.default)("body").append(s)
                        }
                        if (t === 0) {
                            s.setAttribute("webkitdirectory", "")
                        }
                        s.addEventListener("change", function() {
                            if (t === 1) {
                                o[D] = s.files[0];
                                i[r] = s.files[0].name;
                                a && a.$digest(function() {
                                    i[r] = s.files[0].name
                                })
                            } else if (t === 0) {
                                o[D] = s.files
                            }
                        });
                        var l = document.createEvent("MouseEvents");
                        l.that.initEvent("click", true, true);
                        s.dispatchEvent(l)
                    }
                }, {
                    key: "JS_UploadFile",
                    value: function e(t, n, i, r) {
                        var a = this;
                        var o = 0;
                        var s = new XMLHttpRequest;
                        s.onreadystatechange = function() {
                            if (s.readyState === 4) {
                                if (s.status !== 200) {
                                    o = -1
                                }
                            }
                        }
                        ;
                        s.open("put", t, false);
                        s.setRequestHeader("Content-Type", r);
                        s.send(a[D]);
                        return o
                    }
                }, {
                    key: "JS_StartAsynUpload",
                    value: function e(t) {
                        var n = this;
                        var i = new XMLHttpRequest;
                        i.onreadystatechange = function() {
                            if (i.readyState === 4) {
                                n[C] = i.responseText
                            }
                        }
                        ;
                        i.open("put", t, true);
                        i.send(n[D]);
                        return 0
                    }
                }, {
                    key: "JS_StopAsynUpload",
                    value: function e() {
                        var t = this;
                        t[C] = ""
                    }
                }, {
                    key: "JS_GetUploadErrorInfo",
                    value: function e() {
                        var t = this;
                        if (typeof t[C] === "string" && t[C].length > 0) {
                            return t[C]
                        }
                        return ""
                    }
                }, {
                    key: "JS_StartUpgradeEx",
                    value: function e(r, a) {
                        var o = this;
                        var t = new Promise(function(t, n) {
                            if (!r) {
                                n();
                                return s
                            }
                            if (!a) {
                                n();
                                return s
                            }
                            o[C] = 0;
                            var i = new XMLHttpRequest;
                            i.onreadystatechange = function() {
                                if (i.readyState === 4) {
                                    if (i.status === 200) {
                                        o[C] = 100;
                                        t()
                                    } else {
                                        o[C] = 1;
                                        var e = R.oTool.parseXmlFromStr(i.responseText);
                                        if ((0,
                                        O.default)(e).find("subStatusCode").text() === "lowPrivilege") {
                                            n(403)
                                        } else {
                                            n()
                                        }
                                    }
                                }
                            }
                            ;
                            i.open("put", r, true);
                            i.send(o[D]);
                            o[T] = a;
                            setTimeout(function() {
                                t()
                            }, 3e3)
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_UpgradeStatus",
                    value: function e() {
                        var t = this;
                        if (t[C] === 100) {
                            return 0
                        }
                        return t[C]
                    }
                }, {
                    key: "JS_UpgradeProgress",
                    value: function e() {
                        var t = this;
                        var n = 0;
                        var i = new XMLHttpRequest;
                        i.onreadystatechange = function() {
                            if (i.readyState === 4) {
                                if (i.status === 200) {
                                    n = parseInt((0,
                                    O.default)(R.oTool.parseXmlFromStr(i.responseText)).find("percent").text(), 10)
                                }
                            }
                        }
                        ;
                        i.open("get", t[T], false);
                        i.send(null);
                        if (t[C] === 100) {
                            return 100
                        }
                        return n
                    }
                }, {
                    key: "JS_StopUpgrade",
                    value: function e() {
                        var t = this;
                        t[D] = null;
                        return 0
                    }
                }, {
                    key: "JS_ExportDeviceLog",
                    value: function e(t, n) {
                        n = "Log.txt";
                        var i = [];
                        var r = [];
                        i = i.concat((0,
                        O.default)(t).find("searchMatchItem").toArray());
                        for (var a = 0; a < i.length; a++) {
                            r[a] = [];
                            r[a][0] = (0,
                            O.default)(i[a]).find("logtime").text().replace("T", " ").replace("Z", "");
                            r[a][1] = (0,
                            O.default)(i[a]).find("majortype").text();
                            r[a][2] = (0,
                            O.default)(i[a]).find("minortype").text();
                            r[a][3] = (0,
                            O.default)(i[a]).find("channelid").text();
                            r[a][4] = (0,
                            O.default)(i[a]).find("userName").text();
                            r[a][5] = (0,
                            O.default)(i[a]).find("remoteaddress").text()
                        }
                        var o = [];
                        function s(e) {
                            o.push(e);
                            var t = e.slice("");
                            if (/^[\u4e00-\u9fa5]/.test(e)) {
                                for (var n = 0; n < 30 - t.length * 2; n++) {
                                    o.push(" ")
                                }
                            } else {
                                for (var i = 0; i < 30 - t.length; i++) {
                                    o.push(" ")
                                }
                            }
                        }
                        s(" ");
                        s((0,
                        O.default)(t).find("laLogTime").text());
                        s((0,
                        O.default)(t).find("laLogMajorType").text());
                        s((0,
                        O.default)(t).find("laLogMinorType").text());
                        s((0,
                        O.default)(t).find("laLogChannel").text());
                        s((0,
                        O.default)(t).find("laLogRemoteUser").text());
                        s((0,
                        O.default)(t).find("laLogRemoteIP").text());
                        o.push("\r\n");
                        for (var l = 0; l < r.length; l++) {
                            var u = (l + 1).toString();
                            s(u);
                            for (var f = 0; f < 6; f++) {
                                s(r[l][f])
                            }
                            o.push("\r\n")
                        }
                        o = o.join("");
                        var d = new Blob([o],{
                            type: "text/plain"
                        });
                        var c = (window.URL || window.webkitURL).createObjectURL(d);
                        var h = window.document.createElement("a");
                        h.href = c;
                        h.download = n;
                        var p = document.createEvent("MouseEvents");
                        p.that.initEvent("click", true, true);
                        h.dispatchEvent(p)
                    }
                }, {
                    key: "outCsv",
                    value: function e(t, n, i, r) {
                        var a = "";
                        var o = "";
                        for (var s = 0; s < i.length; s++) {
                            o += (0,
                            O.default)(t).find(i[s]).eq(0).text() + ","
                        }
                        o = o.slice(0, -1);
                        a += o + "\r\n";
                        for (var l = 0; l < r.length; l++) {
                            o = "";
                            for (var u = 0; u < i.length; u++) {
                                o += '"' + r[l][u] + '",'
                            }
                            o.slice(0, o.length - 1);
                            a += o + "\r\n"
                        }
                        if (a === "") {
                            return
                        }
                        var f = "";
                        f += n;
                        var d = "\ufeff";
                        if (window.navigator.msSaveOrOpenBlob) {
                            var c = d + a;
                            var h = new Blob([decodeURIComponent(encodeURI(c))],{
                                type: "data:text/csv;charset=utf-8,"
                            });
                            navigator.msSaveBlob(h, f + ".csv")
                        } else {
                            d = "data:text/csv;charset=utf-8,\ufeff";
                            var p = d + a;
                            var v = encodeURI(p);
                            var m = document.createElement("a");
                            m.setAttribute("href", v);
                            m.setAttribute("download", f + ".csv");
                            document.body.appendChild(m);
                            m.click()
                        }
                    }
                }, {
                    key: "JS_ExportReport",
                    value: function e(m, y, g) {
                        var S = this;
                        var t = new Promise(function(e) {
                            var t = [];
                            var n = [];
                            var i = (0,
                            O.default)(m).find("NameList").text().split(",");
                            t = t.concat((0,
                            O.default)(m).find("tDataItem").toArray());
                            for (var r = 0; r < t.length; r++) {
                                n[r] = [];
                                for (var a = 0; a < i.length; a++) {
                                    n[r][a] = (0,
                                    O.default)(t[r]).find(i[a]).text();
                                    if (i[a] === "logtime") {
                                        n[r][a] = n[r][a].replace("T", " ").replace("Z", "")
                                    }
                                }
                            }
                            var o = [];
                            if (g === 1) {
                                S.outCsv(m, y, i, n)
                            } else {
                                var s = function e(t) {
                                    o.push(t);
                                    var n = t.slice("");
                                    if (/^[\u4e00-\u9fa5]/.test(t)) {
                                        for (var i = 0; i < 30 - n.length * 2; i++) {
                                            o.push(" ")
                                        }
                                    } else {
                                        for (var r = 0; r < 30 - n.length; r++) {
                                            o.push(" ")
                                        }
                                    }
                                };
                                s(" ");
                                for (var l = 0; l < i.length; l++) {
                                    s((0,
                                    O.default)(m).find(i[l]).eq(0).text())
                                }
                                o.push("\r\n");
                                for (var u = 0; u < n.length; u++) {
                                    var f = (u + 1).toString();
                                    s(f);
                                    for (var d = 0; d < i.length; d++) {
                                        s(n[u][d])
                                    }
                                    o.push("\r\n")
                                }
                                o = o.join("");
                                var c = void 0;
                                c = new Blob([o],{
                                    type: "text/plain"
                                });
                                var h = (window.URL || window.webkitURL).createObjectURL(c);
                                var p = window.document.createElement("a");
                                p.href = h;
                                p.download = y;
                                var v = document.createEvent("MouseEvents");
                                v.that.initEvent("click", true, true);
                                p.dispatchEvent(v)
                            }
                            e()
                        }
                        );
                        return t
                    }
                }, {
                    key: "JS_GetWndContainer",
                    value: function e(t) {
                        var n = this;
                        if (t < 0 || typeof t === "undefined" || t === null) {
                            return -1
                        }
                        return n.oJSPlugin.find("." + n[S].szId + "parent-wnd").eq(0).children().eq(t)[0]
                    }
                }, {
                    key: "JS_GetWndStatus",
                    value: function e(t) {
                        if (t < 0 || typeof t === "undefined" || t === null) {
                            return -1
                        }
                        var n = {
                            bPlay: this[y][t].bPlay,
                            bSound: this[l] === t,
                            bSelect: this[y][t].bSelect,
                            iRate: this[y][t].iRate
                        };
                        return n
                    }
                }, {
                    key: "JS_SelectWnd",
                    value: function e(t) {
                        var n = this;
                        n.oJSPlugin.find("." + n[S].szId + "parent-wnd").eq(0).children().eq(t).mousedown()
                    }
                }, {
                    key: "JS_PlayWithImg",
                    value: function e(t) {
                        var n = this;
                        if (this[S].iType !== 1) {
                            return
                        }
                        var i = (0,
                        O.default)("#" + n[S].szId + "canvas0");
                        var r = (0,
                        O.default)("#" + n[S].szId + "canvas0").width();
                        var a = (0,
                        O.default)("#" + n[S].szId + "canvas0").height();
                        i.hide();
                        var o = (0,
                        O.default)("#playImg0");
                        o.show();
                        o.css({
                            width: r + "px",
                            height: a + "px",
                            border: "1px solid " + this[S].oStyle.border
                        });
                        o.attr("src", t)
                    }
                }, {
                    key: "JS_SetCanFullScreen",
                    value: function e(t) {
                        this[I] = t
                    }
                }, {
                    key: "JS_OpenPlayerSDKPrintLog",
                    value: function e(t) {
                        var n = this;
                        n[y][t].oPlayCtrl.PlayM4_OpenPlayerSDKPrintLog(true)
                    }
                }, {
                    key: "JS_DownloadYUVdata",
                    value: function e(t) {
                        var n = this;
                        n[y][t].oPlayCtrl.PlayM4_DownloadYUVdata()
                    }
                }, {
                    key: "JS_DownloadPCMdata",
                    value: function e(t) {
                        var n = this;
                        n[y][t].oPlayCtrl.PlayM4_DownloadPCMdata()
                    }
                }]);
                return a
            }();
            return e
        }();
        t.JSPlugin = o
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.StreamClient = undefined;
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        var c = n(2);
        var r = n(6);
        var a = n(7);
        var o = n(8);
        var s = n(11);
        function l(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var u = function() {
            var D = Symbol("WEBSOCKET");
            var C = Symbol("GETINDEX");
            var T = Symbol("PROTOCOLVERSION");
            var M = Symbol("CIPHERSUITES");
            var d = new r.DirectDeviceCustom;
            var k = new a.DirectDevice;
            var x = new o.LiveMedia;
            var I = new s.LocalService;
            var e = function() {
                function e() {
                    l(this, e);
                    this[T] = "0.1";
                    this[M] = 0;
                    this[D] = [];
                    this.ERRORS = {};
                    this[C] = function(e) {
                        var t = -1;
                        for (var n = 0, i = this[D].length; n < i; n++) {
                            if (this[D][n].id === e) {
                                t = n;
                                break
                            }
                        }
                        return t
                    }
                }
                i(e, [{
                    key: "openStream",
                    value: function e(t, p, v, n) {
                        var i = false;
                        if (t.indexOf("[") > -1) {
                            i = true
                        }
                        var m = this;
                        var r = t.split("://");
                        var a = r[0];
                        var y = "";
                        var g = 7681;
                        var S = 1;
                        var b = 0;
                        var o = false;
                        if (i) {
                            y = r[1].split("]:")[0] + "]";
                            g = Math.floor(r[1].split("]:")[1].split("/")[0]);
                            S = Math.floor(r[1].split("]:")[1].split("/")[1] / 100);
                            b = Math.floor(r[1].split("]:")[1].split("/")[1] % 100) - 1
                        } else {
                            y = r[1].split(":")[0];
                            g = Math.floor(r[1].split(":")[1].split("/")[0]);
                            S = Math.floor(r[1].split(":")[1].split("/")[1] / 100);
                            b = Math.floor(r[1].split(":")[1].split("/")[1] % 100) - 1;
                            var s = r[1].split(":")[1].split("/")[2];
                            if (s !== "" && s === "webSocketVideoCtrlProxy") {
                                o = true
                            }
                        }
                        if (S === 0) {
                            b = 0
                        }
                        p = p || {};
                        var l = "&sessionID=";
                        if (p.token && !p.playURL) {
                            l = "&token="
                        }
                        var u = p.sessionID || p.session || (p.playURL ? "" : p.token) || "";
                        var w = new window.WebSocket(a + "://" + y + ":" + g + (p.mode ? "/" + p.mode : "") + (o ? "/webSocketVideoCtrlProxy" : "") + "?version=" + m[T] + "&cipherSuites=" + m[M] + l + u + (p.proxy ? "&proxy=" + p.proxy : ""));
                        w.binaryType = "arraybuffer";
                        var P = (0,
                        c.v4)();
                        var _ = -1;
                        var f = new Promise(function(c, h) {
                            w.onopen = function() {
                                if (!p.playURL && !p.sessionID && !p.deviceSerial && !p.token) {
                                    m[D].push(d.createClientObject(w, P, S, b));
                                    c(P)
                                }
                            }
                            ;
                            w.onmessage = function(e) {
                                if (typeof e.data === "string") {
                                    var t = JSON.parse(e.data);
                                    var n = m[C](P);
                                    if (t && t.version && t.cipherSuite) {
                                        m[T] = t.version;
                                        m[M] = parseInt(t.cipherSuite, 10);
                                        if (t && t.PKD && t.rand) {
                                            m[D].push(x.createClientObject(w, P, t.PKD, t.rand, p))
                                        } else {
                                            var i = "live://" + y + ":" + g + "/" + S + "/" + b;
                                            if (m[M] === -1) {
                                                m[D].push(I.createClientObject(w, P, i, p))
                                            } else {
                                                m[D].push(k.createClientObject(w, P, i))
                                            }
                                        }
                                        c(P);
                                        return
                                    }
                                    if (t && t.sdp) {
                                        var r = k.getMediaFromSdp(t.sdp);
                                        v({
                                            bHead: true,
                                            buf: r
                                        })
                                    }
                                    if (t && t.cmd) {
                                        if (t.cmd === "end") {
                                            v({
                                                type: "exception",
                                                cmd: t.cmd
                                            })
                                        }
                                    }
                                    if (t && t.statusString) {
                                        if (t.statusString.toLowerCase() === "ok") {
                                            if (m[D][n].resolve) {
                                                m[D][n].resolve(t)
                                            }
                                        }
                                        if (t.statusString.toLowerCase() !== "ok") {
                                            var a = k.getError(t);
                                            if (n > -1) {
                                                if (m[D][n].reject) {
                                                    m[D][n].reject(a)
                                                }
                                            } else {
                                                h(a)
                                            }
                                        }
                                    }
                                } else {
                                    var o = {};
                                    var s = new Uint8Array(e.data);
                                    _++;
                                    if (s.byteLength === 64 || s.byteLength === 40) {
                                        var l = -1;
                                        var u = s.byteLength;
                                        for (var f = 0; f < u; f++) {
                                            if (s[f] === 73 && s[f + 1] === 77 && s[f + 2] === 75 && s[f + 3] === 72) {
                                                l = f;
                                                break
                                            }
                                        }
                                        if (l !== -1) {
                                            var d = s.slice(l, l + 40);
                                            o = {
                                                bHead: true,
                                                buf: d
                                            }
                                        } else {
                                            o = {
                                                bHead: false,
                                                buf: s
                                            }
                                        }
                                        v(o)
                                    } else {
                                        if (_ > 0) {
                                            o = {
                                                bHead: false,
                                                buf: s
                                            };
                                            v(o)
                                        }
                                    }
                                    s = null;
                                    o = null;
                                    e = null
                                }
                            }
                            ;
                            w.onclose = function() {
                                for (var e = 0, t = m[D].length; e < t; e++) {
                                    if (m[D][e].id === P) {
                                        m[D][e].resolve();
                                        m[D].splice(e, 1);
                                        setTimeout(function() {
                                            n()
                                        }, 200);
                                        break
                                    }
                                }
                                h()
                            }
                        }
                        );
                        return f
                    }
                }, {
                    key: "startPlay",
                    value: function e(t, i, r) {
                        var a = this;
                        var o = this[C](t);
                        if (i && r && a[T] === "0.1") {
                            i = i.replace(/-/g, "").replace(/:/g, "");
                            r = r.replace(/-/g, "").replace(/:/g, "")
                        }
                        var n = new Promise(function(e, t) {
                            if (o > -1) {
                                a[D][o].resolve = e;
                                a[D][o].reject = t;
                                var n = null;
                                if (!i || !r) {
                                    if (a[D][o].iCurChannel === 0 && a[T] === "0.1") {
                                        n = d.zeroPlayCmd(a[D][o].iCurChannel, a[D][o].iCurStream)
                                    } else {
                                        if (a[T] !== "0.1") {
                                            if (a[M] === 0) {
                                                n = x.playCmd(a[D][o])
                                            } else if (a[M] === 1) {
                                                n = k.playCmd(a[D][o].playURL)
                                            } else if (a[M] === -1) {
                                                n = I.playCmd(a[D][o])
                                            }
                                        } else {
                                            n = d.playCmd(a[D][o].iCurChannel, a[D][o].iCurStream)
                                        }
                                    }
                                } else {
                                    if (a[T] !== "0.1") {
                                        if (a[M] === 0) {
                                            n = x.playbackCmd(a[D][o], i, r)
                                        } else if (a[M] === 1) {
                                            n = k.playbackCmd(i, r, a[D][o].playURL)
                                        } else if (a[M] === -1) {
                                            n = I.playbackCmd(a[D][o], i, r)
                                        }
                                    } else {
                                        n = d.playbackCmd(i, r, a[D][o].iCurChannel, a[D][o].iCurStream)
                                    }
                                }
                                a[D][o].socket.send(n);
                                if (a[T] === "0.1") {
                                    e()
                                }
                            } else {
                                if (a[T] === "0.1") {
                                    t()
                                }
                            }
                        }
                        );
                        return n
                    }
                }, {
                    key: "singleFrame",
                    value: function e() {}
                }, {
                    key: "setPlayRate",
                    value: function e(o, s) {
                        var l = this;
                        var t = new Promise(function(e, t) {
                            for (var n = 0, i = l[D].length; n < i; n++) {
                                if (l[D][n].id === o) {
                                    if (l[T] === "0.1") {
                                        var r = d.playRateCmd(s);
                                        l[D][n].socket.send(r);
                                        e();
                                        break
                                    } else {
                                        l[D][n].resolve = e;
                                        l[D][n].reject = t;
                                        var a = k.playRateCmd(s);
                                        l[D][n].socket.send(a)
                                    }
                                }
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "seek",
                    value: function e(a, o, s) {
                        var l = this;
                        var t = new Promise(function(e, t) {
                            for (var n = 0, i = l[D].length; n < i; n++) {
                                if (l[D][n].id === a) {
                                    l[D][n].resolve = e;
                                    l[D][n].reject = t;
                                    var r = x.seekCmd(o, s);
                                    l[D][n].socket.send(r)
                                }
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "pause",
                    value: function e(o) {
                        var s = this;
                        var t = new Promise(function(e, t) {
                            for (var n = 0, i = s[D].length; n < i; n++) {
                                if (s[D][n].id === o) {
                                    if (s[T] === "0.1") {
                                        var r = d.pauseCmd();
                                        s[D][n].socket.send(r);
                                        e();
                                        break
                                    } else {
                                        s[D][n].resolve = e;
                                        s[D][n].reject = t;
                                        var a = k.pauseCmd();
                                        s[D][n].socket.send(a)
                                    }
                                }
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "transmission",
                    value: function e(r, a) {
                        var o = this;
                        var t = new Promise(function(e, t) {
                            for (var n = 0, i = o[D].length; n < i; n++) {
                                if (o[D][n].id === r) {
                                    o[D][n].resolve = e;
                                    o[D][n].reject = t;
                                    o[D][n].socket.send(a)
                                }
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "resume",
                    value: function e(o) {
                        var s = this;
                        var t = new Promise(function(e, t) {
                            for (var n = 0, i = s[D].length; n < i; n++) {
                                if (s[D][n].id === o) {
                                    if (s[T] === "0.1") {
                                        var r = d.resumeCmd();
                                        s[D][n].socket.send(r);
                                        e();
                                        break
                                    } else {
                                        s[D][n].resolve = e;
                                        s[D][n].reject = t;
                                        var a = k.resumeCmd();
                                        s[D][n].socket.send(a)
                                    }
                                }
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "stop",
                    value: function e(a) {
                        var o = this;
                        var t = new Promise(function(e, t) {
                            if (!a) {
                                t()
                            } else {
                                var n = -1;
                                for (var i = 0, r = o[D].length; i < r; i++) {
                                    if (o[D][i].id === a) {
                                        n = i;
                                        o[D][i].resolve = e;
                                        o[D][i].socket.close(1e3, "CLOSE");
                                        break
                                    }
                                }
                                if (n === -1) {
                                    t()
                                }
                            }
                        }
                        );
                        return t
                    }
                }, {
                    key: "stopAll",
                    value: function e() {
                        var t = this;
                        for (var n = 0, i = t[D].length; n < i; n++) {
                            t[D][n].socket.close(1e3, "CLOSE")
                        }
                    }
                }]);
                return e
            }();
            return e
        }();
        t.StreamClient = u
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            var e = function() {
                function e() {
                    r(this, e)
                }
                i(e, [{
                    key: "createClientObject",
                    value: function e(t, n, i, r) {
                        return {
                            socket: t,
                            id: n,
                            iCurChannel: i,
                            iCurStream: r,
                            resolve: null,
                            reject: null
                        }
                    }
                }, {
                    key: "zeroPlayCmd",
                    value: function e(t, n) {
                        var i = [0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t + 1, 0, 0, 0, n, 0, 0, 4, 0];
                        return new Uint8Array(i)
                    }
                }, {
                    key: "playCmd",
                    value: function e(t, n) {
                        var i = [0, 0, 0, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, t, 0, 0, 0, n, 0, 0, 4, 0];
                        return new Uint8Array(i)
                    }
                }, {
                    key: "playbackCmd",
                    value: function e(t, n, i, r) {
                        var a = t.split("T")[0];
                        var o = t.split("T")[1];
                        var s = "0" + parseInt(a.substring(0, 4), 10).toString(16);
                        var l = parseInt(a.substring(4, 6), 10);
                        var u = parseInt(a.substring(6), 10);
                        var f = parseInt(o.substring(0, 2), 10);
                        var d = parseInt(o.substring(2, 4), 10);
                        var c = parseInt(o.substring(4, 6), 10);
                        var h = n.split("T")[0];
                        var p = n.split("T")[1];
                        var v = "0" + parseInt(h.substring(0, 4), 10).toString(16);
                        var m = parseInt(h.substring(4, 6), 10);
                        var y = parseInt(p.substring(0, 2), 10);
                        var g = parseInt(p.substring(2, 4), 10);
                        var S = parseInt(p.substring(4, 6), 10);
                        var b = [0, 0, 0, 96, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, i, 0, 0, parseInt(s.substring(0, 2), 16), parseInt(s.substring(2, 4), 16), 0, 0, 0, l, 0, 0, 0, u, 0, 0, 0, f, 0, 0, 0, d, 0, 0, 0, c, 0, 0, parseInt(v.substring(0, 2), 16), parseInt(v.substring(2, 4), 16), 0, 0, 0, m, 0, 0, 0, u, 0, 0, 0, y, 0, 0, 0, g, 0, 0, 0, S, 0, 0, 0, 0, 0, 0, 0, 0, r, 0, 0, 0];
                        return new Uint8Array(b)
                    }
                }, {
                    key: "playRateCmd",
                    value: function e(t) {
                        var n = (parseInt(t, 10) >>> 0).toString(16).toLocaleUpperCase().toString(16);
                        for (var i = n.length; i < 8; i++) {
                            n = "0" + n
                        }
                        var r = [0, 0, 0, 0];
                        for (var a = 0, o = n.length; a < o; a = a + 2) {
                            r[Math.floor(a / 2)] = parseInt(n.substring(a, a + 2), 16)
                        }
                        var s = [0, 0, 0, 36, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 47, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, r[0], r[1], r[2], r[3]];
                        return new Uint8Array(s)
                    }
                }, {
                    key: "pauseCmd",
                    value: function e() {
                        var t = [0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        return new Uint8Array(t)
                    }
                }, {
                    key: "resumeCmd",
                    value: function e() {
                        var t = [0, 0, 0, 32, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
                        return new Uint8Array(t)
                    }
                }]);
                return e
            }();
            return e
        }();
        t.DirectDeviceCustom = a
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = 3001;
        var o = 3002;
        var s = 3003;
        var l = function() {
            var e = function() {
                function e() {
                    r(this, e)
                }
                i(e, [{
                    key: "createClientObject",
                    value: function e(t, n, i) {
                        return {
                            socket: t,
                            id: n,
                            playURL: i,
                            resolve: null,
                            reject: null
                        }
                    }
                }, {
                    key: "getMediaFromSdp",
                    value: function e(t) {
                        var n = t.indexOf("MEDIAINFO=") + 10;
                        var i = t.slice(n, n + 80);
                        var r = [];
                        for (var a = 0, o = i.length / 2; a < o; a++) {
                            r[a] = parseInt(i.slice(a * 2, a * 2 + 2), 16)
                        }
                        return new Uint8Array(r)
                    }
                }, {
                    key: "playCmd",
                    value: function e(t) {
                        var n = {
                            sequence: 0,
                            cmd: "realplay",
                            url: t
                        };
                        return JSON.stringify(n)
                    }
                }, {
                    key: "playbackCmd",
                    value: function e(t, n, i) {
                        var r = {
                            sequence: 0,
                            cmd: "playback",
                            url: i,
                            startTime: t,
                            endTime: n
                        };
                        return JSON.stringify(r)
                    }
                }, {
                    key: "playRateCmd",
                    value: function e(t) {
                        var n = {
                            sequence: 0,
                            cmd: "changespeed",
                            speed: t
                        };
                        return JSON.stringify(n)
                    }
                }, {
                    key: "pauseCmd",
                    value: function e() {
                        var t = {
                            sequence: 0,
                            cmd: "pause"
                        };
                        return JSON.stringify(t)
                    }
                }, {
                    key: "resumeCmd",
                    value: function e() {
                        var t = {
                            sequence: 0,
                            cmd: "resume"
                        };
                        return JSON.stringify(t)
                    }
                }, {
                    key: "getError",
                    value: function e(t) {
                        var n = a;
                        if (t) {
                            if (parseInt(t.statusCode, 10) === 6 && t.subStatusCode === "streamLimit") {
                                n = o
                            } else if (parseInt(t.statusCode, 10) === 4 && t.subStatusCode === "badAuthorization") {
                                n = s
                            }
                        }
                        return {
                            iErrorNum: n,
                            oError: t
                        }
                    }
                }]);
                return e
            }();
            return e
        }();
        t.DirectDevice = l
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.LiveMedia = undefined;
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        var r = n(9);
        var a = s(r);
        var o = n(10);
        var l = s(o);
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var f = function() {
            var e = function() {
                function e() {
                    u(this, e)
                }
                i(e, [{
                    key: "createClientObject",
                    value: function e(t, n, i, r, a) {
                        var o = l.default.AES.encrypt((new Date).getTime().toString(), l.default.enc.Hex.parse("1234567891234567123456789123456712345678912345671234567891234567"), {
                            mode: l.default.mode.CBC,
                            iv: l.default.enc.Hex.parse("12345678912345671234567891234567"),
                            padding: l.default.pad.Pkcs7
                        }).ciphertext.toString();
                        if (o.length < 64) {
                            o = o + o
                        }
                        var s = l.default.AES.encrypt((new Date).getTime().toString(), l.default.enc.Hex.parse("12345678912345671234567891234567"), {
                            mode: l.default.mode.CBC,
                            iv: l.default.enc.Hex.parse("12345678912345671234567891234567"),
                            padding: l.default.pad.Pkcs7
                        }).ciphertext.toString();
                        return {
                            socket: t,
                            id: n,
                            PKD: i,
                            rand: r,
                            playURL: a.playURL || "",
                            auth: a.auth || "",
                            token: a.token || "",
                            key: o,
                            iv: s,
                            resolve: null,
                            reject: null
                        }
                    }
                }, {
                    key: "playCmd",
                    value: function e(t) {
                        var n = {
                            sequence: 0,
                            cmd: "realplay",
                            url: t.playURL,
                            key: a.default.encrypt(t.iv + ":" + t.key, t.PKD).cipher.split("?")[0],
                            authorization: l.default.AES.encrypt(t.rand + ":" + t.auth, l.default.enc.Hex.parse(t.key), {
                                mode: l.default.mode.CBC,
                                iv: l.default.enc.Hex.parse(t.iv),
                                padding: l.default.pad.Pkcs7
                            }).ciphertext.toString(),
                            token: l.default.AES.encrypt(t.token, l.default.enc.Hex.parse(t.key), {
                                mode: l.default.mode.CBC,
                                iv: l.default.enc.Hex.parse(t.iv),
                                padding: l.default.pad.Pkcs7
                            }).ciphertext.toString()
                        };
                        return JSON.stringify(n)
                    }
                }, {
                    key: "playbackCmd",
                    value: function e(t, n, i) {
                        var r = {
                            sequence: 0,
                            cmd: "playback",
                            url: t.playURL,
                            key: a.default.encrypt(t.iv + ":" + t.key, t.PKD).cipher.split("?")[0],
                            authorization: l.default.AES.encrypt(t.rand + ":" + t.auth, l.default.enc.Hex.parse(t.key), {
                                mode: l.default.mode.CBC,
                                iv: l.default.enc.Hex.parse(t.iv),
                                padding: l.default.pad.Pkcs7
                            }).ciphertext.toString(),
                            token: l.default.AES.encrypt(t.token, l.default.enc.Hex.parse(t.key), {
                                mode: l.default.mode.CBC,
                                iv: l.default.enc.Hex.parse(t.iv),
                                padding: l.default.pad.Pkcs7
                            }).ciphertext.toString(),
                            startTime: n,
                            endTime: i
                        };
                        return JSON.stringify(r)
                    }
                }, {
                    key: "seekCmd",
                    value: function e(t, n) {
                        var i = {
                            sequence: 0,
                            cmd: "seek",
                            startTime: t,
                            endTime: n
                        };
                        return JSON.stringify(i)
                    }
                }]);
                return e
            }();
            return e
        }();
        t.LiveMedia = f
    }
    , function(e, t, n) {
        "use strict";
        var p = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol === "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        var r = {
            appName: "Netscape",
            appVersion: 40
        };
        var a, o = 0xdeadbeefcafe, s = (o & 16777215) == 15715070;
        function m(e, t, n) {
            e != null && ("number" == typeof e ? this.fromNumber(e, t, n) : t == null && "string" != typeof e ? this.fromString(e, 256) : this.fromString(e, t))
        }
        function y() {
            return new m(null)
        }
        function l(e, t, n, i, r, a) {
            for (; --a >= 0; ) {
                var o = t * this[e++] + n[i] + r
                  , r = Math.floor(o / 67108864);
                n[i++] = o & 67108863
            }
            return r
        }
        function u(e, t, n, i, r, a) {
            var o = t & 32767;
            for (t >>= 15; --a >= 0; ) {
                var s = this[e] & 32767
                  , l = this[e++] >> 15
                  , u = t * s + l * o
                  , s = o * s + ((u & 32767) << 15) + n[i] + (r & 1073741823)
                  , r = (s >>> 30) + (u >>> 15) + t * l + (r >>> 30);
                n[i++] = s & 1073741823
            }
            return r
        }
        function f(e, t, n, i, r, a) {
            var o = t & 16383;
            for (t >>= 14; --a >= 0; ) {
                var s = this[e] & 16383
                  , l = this[e++] >> 14
                  , u = t * s + l * o
                  , s = o * s + ((u & 16383) << 14) + n[i] + r
                  , r = (s >> 28) + (u >> 14) + t * l;
                n[i++] = s & 268435455
            }
            return r
        }
        s && r.appName == "Microsoft Internet Explorer" ? (m.prototype.am = u,
        a = 30) : s && r.appName != "Netscape" ? (m.prototype.am = l,
        a = 26) : (m.prototype.am = f,
        a = 28);
        m.prototype.DB = a;
        m.prototype.DM = (1 << a) - 1;
        m.prototype.DV = 1 << a;
        var d = 52;
        m.prototype.FV = Math.pow(2, d);
        m.prototype.F1 = d - a;
        m.prototype.F2 = 2 * a - d;
        var c = "0123456789abcdefghijklmnopqrstuvwxyz", h = [], g, S;
        g = "0".charCodeAt(0);
        for (S = 0; S <= 9; ++S) {
            h[g++] = S
        }
        g = "a".charCodeAt(0);
        for (S = 10; S < 36; ++S) {
            h[g++] = S
        }
        g = "A".charCodeAt(0);
        for (S = 10; S < 36; ++S) {
            h[g++] = S
        }
        function b(e) {
            return c.charAt(e)
        }
        function w(e, t) {
            var n = h[e.charCodeAt(t)];
            return n == null ? -1 : n
        }
        function P(e) {
            for (var t = this.t - 1; t >= 0; --t) {
                e[t] = this[t]
            }
            e.t = this.t;
            e.s = this.s
        }
        function _(e) {
            this.t = 1;
            this.s = e < 0 ? -1 : 0;
            e > 0 ? this[0] = e : e < -1 ? this[0] = e + DV : this.t = 0
        }
        function D(e) {
            var t = y();
            t.fromInt(e);
            return t
        }
        function C(e, t) {
            var n;
            if (t == 16)
                n = 4;
            else if (t == 8)
                n = 3;
            else if (t == 256)
                n = 8;
            else if (t == 2)
                n = 1;
            else if (t == 32)
                n = 5;
            else if (t == 4)
                n = 2;
            else {
                this.fromRadix(e, t);
                return
            }
            this.s = this.t = 0;
            for (var i = e.length, r = !1, a = 0; --i >= 0; ) {
                var o = n == 8 ? e[i] & 255 : w(e, i);
                o < 0 ? e.charAt(i) == "-" && (r = !0) : (r = !1,
                a == 0 ? this[this.t++] = o : a + n > this.DB ? (this[this.t - 1] |= (o & (1 << this.DB - a) - 1) << a,
                this[this.t++] = o >> this.DB - a) : this[this.t - 1] |= o << a,
                a += n,
                a >= this.DB && (a -= this.DB))
            }
            if (n == 8 && (e[0] & 128) != 0)
                this.s = -1,
                a > 0 && (this[this.t - 1] |= (1 << this.DB - a) - 1 << a);
            this.clamp();
            r && m.ZERO.subTo(this, this)
        }
        function T() {
            for (var e = this.s & this.DM; this.t > 0 && this[this.t - 1] == e; ) {
                --this.t
            }
        }
        function M(e) {
            if (this.s < 0)
                return "-" + this.negate().toString(e);
            if (e == 16)
                e = 4;
            else if (e == 8)
                e = 3;
            else if (e == 2)
                e = 1;
            else if (e == 32)
                e = 5;
            else if (e == 64)
                e = 6;
            else if (e == 4)
                e = 2;
            else
                return this.toRadix(e);
            var t = (1 << e) - 1, n, i = !1, r = "", a = this.t, o = this.DB - a * this.DB % e;
            if (a-- > 0) {
                if (o < this.DB && (n = this[a] >> o) > 0)
                    i = !0,
                    r = b(n);
                for (; a >= 0; ) {
                    o < e ? (n = (this[a] & (1 << o) - 1) << e - o,
                    n |= this[--a] >> (o += this.DB - e)) : (n = this[a] >> (o -= e) & t,
                    o <= 0 && (o += this.DB,
                    --a)),
                    n > 0 && (i = !0),
                    i && (r += b(n))
                }
            }
            return i ? r : "0"
        }
        function k() {
            var e = y();
            m.ZERO.subTo(this, e);
            return e
        }
        function x() {
            return this.s < 0 ? this.negate() : this
        }
        function I(e) {
            var t = this.s - e.s;
            if (t != 0)
                return t;
            var n = this.t
              , t = n - e.t;
            if (t != 0)
                return t;
            for (; --n >= 0; ) {
                if ((t = this[n] - e[n]) != 0)
                    return t
            }
            return 0
        }
        function R(e) {
            var t = 1, n;
            if ((n = e >>> 16) != 0)
                e = n,
                t += 16;
            if ((n = e >> 8) != 0)
                e = n,
                t += 8;
            if ((n = e >> 4) != 0)
                e = n,
                t += 4;
            if ((n = e >> 2) != 0)
                e = n,
                t += 2;
            e >> 1 != 0 && (t += 1);
            return t
        }
        function A() {
            return this.t <= 0 ? 0 : this.DB * (this.t - 1) + R(this[this.t - 1] ^ this.s & this.DM)
        }
        function E(e, t) {
            var n;
            for (n = this.t - 1; n >= 0; --n) {
                t[n + e] = this[n]
            }
            for (n = e - 1; n >= 0; --n) {
                t[n] = 0
            }
            t.t = this.t + e;
            t.s = this.s
        }
        function z(e, t) {
            for (var n = e; n < this.t; ++n) {
                t[n - e] = this[n]
            }
            t.t = Math.max(this.t - e, 0);
            t.s = this.s
        }
        function B(e, t) {
            var n = e % this.DB, i = this.DB - n, r = (1 << i) - 1, a = Math.floor(e / this.DB), o = this.s << n & this.DM, s;
            for (s = this.t - 1; s >= 0; --s) {
                t[s + a + 1] = this[s] >> i | o,
                o = (this[s] & r) << n
            }
            for (s = a - 1; s >= 0; --s) {
                t[s] = 0
            }
            t[a] = o;
            t.t = this.t + a + 1;
            t.s = this.s;
            t.clamp()
        }
        function O(e, t) {
            t.s = this.s;
            var n = Math.floor(e / this.DB);
            if (n >= this.t)
                t.t = 0;
            else {
                var i = e % this.DB
                  , r = this.DB - i
                  , a = (1 << i) - 1;
                t[0] = this[n] >> i;
                for (var o = n + 1; o < this.t; ++o) {
                    t[o - n - 1] |= (this[o] & a) << r,
                    t[o - n] = this[o] >> i
                }
                i > 0 && (t[this.t - n - 1] |= (this.s & a) << r);
                t.t = this.t - n;
                t.clamp()
            }
        }
        function F(e, t) {
            for (var n = 0, i = 0, r = Math.min(e.t, this.t); n < r; ) {
                i += this[n] - e[n],
                t[n++] = i & this.DM,
                i >>= this.DB
            }
            if (e.t < this.t) {
                for (i -= e.s; n < this.t; ) {
                    i += this[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB
                }
                i += this.s
            } else {
                for (i += this.s; n < e.t; ) {
                    i -= e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB
                }
                i -= e.s
            }
            t.s = i < 0 ? -1 : 0;
            i < -1 ? t[n++] = this.DV + i : i > 0 && (t[n++] = i);
            t.t = n;
            t.clamp()
        }
        function L(e, t) {
            var n = this.abs()
              , i = e.abs()
              , r = n.t;
            for (t.t = r + i.t; --r >= 0; ) {
                t[r] = 0
            }
            for (r = 0; r < i.t; ++r) {
                t[r + n.t] = n.am(0, i[r], t, r, 0, n.t)
            }
            t.s = 0;
            t.clamp();
            this.s != e.s && m.ZERO.subTo(t, t)
        }
        function U(e) {
            for (var t = this.abs(), n = e.t = 2 * t.t; --n >= 0; ) {
                e[n] = 0
            }
            for (n = 0; n < t.t - 1; ++n) {
                var i = t.am(n, t[n], e, 2 * n, 0, 1);
                if ((e[n + t.t] += t.am(n + 1, 2 * t[n], e, 2 * n + 1, i, t.t - n - 1)) >= t.DV)
                    e[n + t.t] -= t.DV,
                    e[n + t.t + 1] = 1
            }
            e.t > 0 && (e[e.t - 1] += t.am(n, t[n], e, 2 * n, 0, 1));
            e.s = 0;
            e.clamp()
        }
        function N(e, t, n) {
            var i = e.abs();
            if (!(i.t <= 0)) {
                var r = this.abs();
                if (r.t < i.t)
                    t != null && t.fromInt(0),
                    n != null && this.copyTo(n);
                else {
                    n == null && (n = y());
                    var a = y()
                      , o = this.s
                      , e = e.s
                      , s = this.DB - R(i[i.t - 1]);
                    s > 0 ? (i.lShiftTo(s, a),
                    r.lShiftTo(s, n)) : (i.copyTo(a),
                    r.copyTo(n));
                    i = a.t;
                    r = a[i - 1];
                    if (r != 0) {
                        var l = r * (1 << this.F1) + (i > 1 ? a[i - 2] >> this.F2 : 0)
                          , u = this.FV / l
                          , l = (1 << this.F1) / l
                          , f = 1 << this.F2
                          , d = n.t
                          , c = d - i
                          , h = t == null ? y() : t;
                        a.dlShiftTo(c, h);
                        n.compareTo(h) >= 0 && (n[n.t++] = 1,
                        n.subTo(h, n));
                        m.ONE.dlShiftTo(i, h);
                        for (h.subTo(a, a); a.t < i; ) {
                            a[a.t++] = 0
                        }
                        for (; --c >= 0; ) {
                            var p = n[--d] == r ? this.DM : Math.floor(n[d] * u + (n[d - 1] + f) * l);
                            if ((n[d] += a.am(0, p, n, c, 0, i)) < p) {
                                a.dlShiftTo(c, h);
                                for (n.subTo(h, n); n[d] < --p; ) {
                                    n.subTo(h, n)
                                }
                            }
                        }
                        t != null && (n.drShiftTo(i, t),
                        o != e && m.ZERO.subTo(t, t));
                        n.t = i;
                        n.clamp();
                        s > 0 && n.rShiftTo(s, n);
                        o < 0 && m.ZERO.subTo(n, n)
                    }
                }
            }
        }
        function W(e) {
            var t = y();
            this.abs().divRemTo(e, null, t);
            this.s < 0 && t.compareTo(m.ZERO) > 0 && e.subTo(t, t);
            return t
        }
        function q(e) {
            this.m = e
        }
        function H(e) {
            return e.s < 0 || e.compareTo(this.m) >= 0 ? e.mod(this.m) : e
        }
        function J(e) {
            return e
        }
        function Y(e) {
            e.divRemTo(this.m, null, e)
        }
        function j(e, t, n) {
            e.multiplyTo(t, n);
            this.reduce(n)
        }
        function V(e, t) {
            e.squareTo(t);
            this.reduce(t)
        }
        q.prototype.convert = H;
        q.prototype.revert = J;
        q.prototype.reduce = Y;
        q.prototype.mulTo = j;
        q.prototype.sqrTo = V;
        function G() {
            if (this.t < 1)
                return 0;
            var e = this[0];
            if ((e & 1) == 0)
                return 0;
            var t = e & 3
              , t = t * (2 - (e & 15) * t) & 15
              , t = t * (2 - (e & 255) * t) & 255
              , t = t * (2 - ((e & 65535) * t & 65535)) & 65535
              , t = t * (2 - e * t % this.DV) % this.DV;
            return t > 0 ? this.DV - t : -t
        }
        function X(e) {
            this.m = e;
            this.mp = e.invDigit();
            this.mpl = this.mp & 32767;
            this.mph = this.mp >> 15;
            this.um = (1 << e.DB - 15) - 1;
            this.mt2 = 2 * e.t
        }
        function K(e) {
            var t = y();
            e.abs().dlShiftTo(this.m.t, t);
            t.divRemTo(this.m, null, t);
            e.s < 0 && t.compareTo(m.ZERO) > 0 && this.m.subTo(t, t);
            return t
        }
        function $(e) {
            var t = y();
            e.copyTo(t);
            this.reduce(t);
            return t
        }
        function Z(e) {
            for (; e.t <= this.mt2; ) {
                e[e.t++] = 0
            }
            for (var t = 0; t < this.m.t; ++t) {
                var n = e[t] & 32767
                  , i = n * this.mpl + ((n * this.mph + (e[t] >> 15) * this.mpl & this.um) << 15) & e.DM
                  , n = t + this.m.t;
                for (e[n] += this.m.am(0, i, e, t, 0, this.m.t); e[n] >= e.DV; ) {
                    e[n] -= e.DV,
                    e[++n]++
                }
            }
            e.clamp();
            e.drShiftTo(this.m.t, e);
            e.compareTo(this.m) >= 0 && e.subTo(this.m, e)
        }
        function Q(e, t) {
            e.squareTo(t);
            this.reduce(t)
        }
        function ee(e, t, n) {
            e.multiplyTo(t, n);
            this.reduce(n)
        }
        X.prototype.convert = K;
        X.prototype.revert = $;
        X.prototype.reduce = Z;
        X.prototype.mulTo = ee;
        X.prototype.sqrTo = Q;
        function te() {
            return (this.t > 0 ? this[0] & 1 : this.s) == 0
        }
        function ne(e, t) {
            if (e > 4294967295 || e < 1)
                return m.ONE;
            var n = y()
              , i = y()
              , r = t.convert(this)
              , a = R(e) - 1;
            for (r.copyTo(n); --a >= 0; ) {
                if (t.sqrTo(n, i),
                (e & 1 << a) > 0)
                    t.mulTo(i, r, n);
                else
                    var o = n
                      , n = i
                      , i = o
            }
            return t.revert(n)
        }
        function ie(e, t) {
            var n;
            n = e < 256 || t.isEven() ? new q(t) : new X(t);
            return this.exp(e, n)
        }
        m.prototype.copyTo = P;
        m.prototype.fromInt = _;
        m.prototype.fromString = C;
        m.prototype.clamp = T;
        m.prototype.dlShiftTo = E;
        m.prototype.drShiftTo = z;
        m.prototype.lShiftTo = B;
        m.prototype.rShiftTo = O;
        m.prototype.subTo = F;
        m.prototype.multiplyTo = L;
        m.prototype.squareTo = U;
        m.prototype.divRemTo = N;
        m.prototype.invDigit = G;
        m.prototype.isEven = te;
        m.prototype.exp = ne;
        m.prototype.toString = M;
        m.prototype.negate = k;
        m.prototype.abs = x;
        m.prototype.compareTo = I;
        m.prototype.bitLength = A;
        m.prototype.mod = W;
        m.prototype.modPowInt = ie;
        m.ZERO = D(0);
        m.ONE = D(1);
        function re() {
            var e = y();
            this.copyTo(e);
            return e
        }
        function ae() {
            if (this.s < 0) {
                if (this.t == 1)
                    return this[0] - this.DV;
                else {
                    if (this.t == 0)
                        return -1
                }
            } else if (this.t == 1)
                return this[0];
            else if (this.t == 0)
                return 0;
            return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
        }
        function oe() {
            return this.t == 0 ? this.s : this[0] << 24 >> 24
        }
        function se() {
            return this.t == 0 ? this.s : this[0] << 16 >> 16
        }
        function le(e) {
            return Math.floor(Math.LN2 * this.DB / Math.log(e))
        }
        function ue() {
            return this.s < 0 ? -1 : this.t <= 0 || this.t == 1 && this[0] <= 0 ? 0 : 1
        }
        function fe(e) {
            e == null && (e = 10);
            if (this.signum() == 0 || e < 2 || e > 36)
                return "0";
            var t = this.chunkSize(e)
              , t = Math.pow(e, t)
              , n = D(t)
              , i = y()
              , r = y()
              , a = "";
            for (this.divRemTo(n, i, r); i.signum() > 0; ) {
                a = (t + r.intValue()).toString(e).substr(1) + a,
                i.divRemTo(n, i, r)
            }
            return r.intValue().toString(e) + a
        }
        function de(e, t) {
            this.fromInt(0);
            t == null && (t = 10);
            for (var n = this.chunkSize(t), i = Math.pow(t, n), r = !1, a = 0, o = 0, s = 0; s < e.length; ++s) {
                var l = w(e, s);
                l < 0 ? e.charAt(s) == "-" && this.signum() == 0 && (r = !0) : (o = t * o + l,
                ++a >= n && (this.dMultiply(i),
                this.dAddOffset(o, 0),
                o = a = 0))
            }
            a > 0 && (this.dMultiply(Math.pow(t, a)),
            this.dAddOffset(o, 0));
            r && m.ZERO.subTo(this, this)
        }
        function ce(e, t, n) {
            if ("number" == typeof t) {
                if (e < 2)
                    this.fromInt(1);
                else {
                    this.fromNumber(e, n);
                    this.testBit(e - 1) || this.bitwiseTo(m.ONE.shiftLeft(e - 1), be, this);
                    for (this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(t); ) {
                        this.dAddOffset(2, 0),
                        this.bitLength() > e && this.subTo(m.ONE.shiftLeft(e - 1), this)
                    }
                }
            } else {
                var n = []
                  , i = e & 7;
                n.length = (e >> 3) + 1;
                t.nextBytes(n);
                i > 0 ? n[0] &= (1 << i) - 1 : n[0] = 0;
                this.fromString(n, 256)
            }
        }
        function he() {
            var e = this.t
              , t = [];
            t[0] = this.s;
            var n = this.DB - e * this.DB % 8, i, r = 0;
            if (e-- > 0) {
                if (n < this.DB && (i = this[e] >> n) != (this.s & this.DM) >> n)
                    t[r++] = i | this.s << this.DB - n;
                for (; e >= 0; ) {
                    if (n < 8 ? (i = (this[e] & (1 << n) - 1) << 8 - n,
                    i |= this[--e] >> (n += this.DB - 8)) : (i = this[e] >> (n -= 8) & 255,
                    n <= 0 && (n += this.DB,
                    --e)),
                    (i & 128) != 0 && (i |= -256),
                    r == 0 && (this.s & 128) != (i & 128) && ++r,
                    r > 0 || i != this.s)
                        t[r++] = i
                }
            }
            return t
        }
        function pe(e) {
            return this.compareTo(e) == 0
        }
        function ve(e) {
            return this.compareTo(e) < 0 ? this : e
        }
        function me(e) {
            return this.compareTo(e) > 0 ? this : e
        }
        function ye(e, t, n) {
            var i, r, a = Math.min(e.t, this.t);
            for (i = 0; i < a; ++i) {
                n[i] = t(this[i], e[i])
            }
            if (e.t < this.t) {
                r = e.s & this.DM;
                for (i = a; i < this.t; ++i) {
                    n[i] = t(this[i], r)
                }
                n.t = this.t
            } else {
                r = this.s & this.DM;
                for (i = a; i < e.t; ++i) {
                    n[i] = t(r, e[i])
                }
                n.t = e.t
            }
            n.s = t(this.s, e.s);
            n.clamp()
        }
        function ge(e, t) {
            return e & t
        }
        function Se(e) {
            var t = y();
            this.bitwiseTo(e, ge, t);
            return t
        }
        function be(e, t) {
            return e | t
        }
        function we(e) {
            var t = y();
            this.bitwiseTo(e, be, t);
            return t
        }
        function Pe(e, t) {
            return e ^ t
        }
        function _e(e) {
            var t = y();
            this.bitwiseTo(e, Pe, t);
            return t
        }
        function De(e, t) {
            return e & ~t
        }
        function Ce(e) {
            var t = y();
            this.bitwiseTo(e, De, t);
            return t
        }
        function Te() {
            for (var e = y(), t = 0; t < this.t; ++t) {
                e[t] = this.DM & ~this[t]
            }
            e.t = this.t;
            e.s = ~this.s;
            return e
        }
        function Me(e) {
            var t = y();
            e < 0 ? this.rShiftTo(-e, t) : this.lShiftTo(e, t);
            return t
        }
        function ke(e) {
            var t = y();
            e < 0 ? this.lShiftTo(-e, t) : this.rShiftTo(e, t);
            return t
        }
        function xe(e) {
            if (e == 0)
                return -1;
            var t = 0;
            (e & 65535) == 0 && (e >>= 16,
            t += 16);
            (e & 255) == 0 && (e >>= 8,
            t += 8);
            (e & 15) == 0 && (e >>= 4,
            t += 4);
            (e & 3) == 0 && (e >>= 2,
            t += 2);
            (e & 1) == 0 && ++t;
            return t
        }
        function Ie() {
            for (var e = 0; e < this.t; ++e) {
                if (this[e] != 0)
                    return e * this.DB + xe(this[e])
            }
            return this.s < 0 ? this.t * this.DB : -1
        }
        function Re(e) {
            for (var t = 0; e != 0; ) {
                e &= e - 1,
                ++t
            }
            return t
        }
        function Ae() {
            for (var e = 0, t = this.s & this.DM, n = 0; n < this.t; ++n) {
                e += Re(this[n] ^ t)
            }
            return e
        }
        function Ee(e) {
            var t = Math.floor(e / this.DB);
            return t >= this.t ? this.s != 0 : (this[t] & 1 << e % this.DB) != 0
        }
        function ze(e, t) {
            var n = m.ONE.shiftLeft(e);
            this.bitwiseTo(n, t, n);
            return n
        }
        function Be(e) {
            return this.changeBit(e, be)
        }
        function Oe(e) {
            return this.changeBit(e, De)
        }
        function Fe(e) {
            return this.changeBit(e, Pe)
        }
        function Le(e, t) {
            for (var n = 0, i = 0, r = Math.min(e.t, this.t); n < r; ) {
                i += this[n] + e[n],
                t[n++] = i & this.DM,
                i >>= this.DB
            }
            if (e.t < this.t) {
                for (i += e.s; n < this.t; ) {
                    i += this[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB
                }
                i += this.s
            } else {
                for (i += this.s; n < e.t; ) {
                    i += e[n],
                    t[n++] = i & this.DM,
                    i >>= this.DB
                }
                i += e.s
            }
            t.s = i < 0 ? -1 : 0;
            i > 0 ? t[n++] = i : i < -1 && (t[n++] = this.DV + i);
            t.t = n;
            t.clamp()
        }
        function Ue(e) {
            var t = y();
            this.addTo(e, t);
            return t
        }
        function Ne(e) {
            var t = y();
            this.subTo(e, t);
            return t
        }
        function We(e) {
            var t = y();
            this.multiplyTo(e, t);
            return t
        }
        function qe() {
            var e = y();
            this.squareTo(e);
            return e
        }
        function He(e) {
            var t = y();
            this.divRemTo(e, t, null);
            return t
        }
        function Je(e) {
            var t = y();
            this.divRemTo(e, null, t);
            return t
        }
        function Ye(e) {
            var t = y()
              , n = y();
            this.divRemTo(e, t, n);
            return [t, n]
        }
        function je(e) {
            this[this.t] = this.am(0, e - 1, this, 0, 0, this.t);
            ++this.t;
            this.clamp()
        }
        function Ve(e, t) {
            if (e != 0) {
                for (; this.t <= t; ) {
                    this[this.t++] = 0
                }
                for (this[t] += e; this[t] >= this.DV; ) {
                    this[t] -= this.DV,
                    ++t >= this.t && (this[this.t++] = 0),
                    ++this[t]
                }
            }
        }
        function Ge() {}
        function Xe(e) {
            return e
        }
        function Ke(e, t, n) {
            e.multiplyTo(t, n)
        }
        function $e(e, t) {
            e.squareTo(t)
        }
        Ge.prototype.convert = Xe;
        Ge.prototype.revert = Xe;
        Ge.prototype.mulTo = Ke;
        Ge.prototype.sqrTo = $e;
        function Ze(e) {
            return this.exp(e, new Ge)
        }
        function Qe(e, t, n) {
            var i = Math.min(this.t + e.t, t);
            n.s = 0;
            for (n.t = i; i > 0; ) {
                n[--i] = 0
            }
            var r;
            for (r = n.t - this.t; i < r; ++i) {
                n[i + this.t] = this.am(0, e[i], n, i, 0, this.t)
            }
            for (r = Math.min(e.t, t); i < r; ++i) {
                this.am(0, e[i], n, i, 0, t - i)
            }
            n.clamp()
        }
        function et(e, t, n) {
            --t;
            var i = n.t = this.t + e.t - t;
            for (n.s = 0; --i >= 0; ) {
                n[i] = 0
            }
            for (i = Math.max(t - this.t, 0); i < e.t; ++i) {
                n[this.t + i - t] = this.am(t - i, e[i], n, 0, 0, this.t + i - t)
            }
            n.clamp();
            n.drShiftTo(1, n)
        }
        function tt(e) {
            this.r2 = y();
            this.q3 = y();
            m.ONE.dlShiftTo(2 * e.t, this.r2);
            this.mu = this.r2.divide(e);
            this.m = e
        }
        function nt(e) {
            if (e.s < 0 || e.t > 2 * this.m.t)
                return e.mod(this.m);
            else if (e.compareTo(this.m) < 0)
                return e;
            else {
                var t = y();
                e.copyTo(t);
                this.reduce(t);
                return t
            }
        }
        function it(e) {
            return e
        }
        function rt(e) {
            e.drShiftTo(this.m.t - 1, this.r2);
            if (e.t > this.m.t + 1)
                e.t = this.m.t + 1,
                e.clamp();
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
            for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); e.compareTo(this.r2) < 0; ) {
                e.dAddOffset(1, this.m.t + 1)
            }
            for (e.subTo(this.r2, e); e.compareTo(this.m) >= 0; ) {
                e.subTo(this.m, e)
            }
        }
        function at(e, t) {
            e.squareTo(t);
            this.reduce(t)
        }
        function ot(e, t, n) {
            e.multiplyTo(t, n);
            this.reduce(n)
        }
        tt.prototype.convert = nt;
        tt.prototype.revert = it;
        tt.prototype.reduce = rt;
        tt.prototype.mulTo = ot;
        tt.prototype.sqrTo = at;
        function st(e, t) {
            var n = e.bitLength(), i, r = D(1), a;
            if (n <= 0)
                return r;
            else
                i = n < 18 ? 1 : n < 48 ? 3 : n < 144 ? 4 : n < 768 ? 5 : 6;
            a = n < 8 ? new q(t) : t.isEven() ? new tt(t) : new X(t);
            var o = []
              , s = 3
              , l = i - 1
              , u = (1 << i) - 1;
            o[1] = a.convert(this);
            if (i > 1) {
                n = y();
                for (a.sqrTo(o[1], n); s <= u; ) {
                    o[s] = y(),
                    a.mulTo(n, o[s - 2], o[s]),
                    s += 2
                }
            }
            for (var f = e.t - 1, d, c = !0, h = y(), n = R(e[f]) - 1; f >= 0; ) {
                n >= l ? d = e[f] >> n - l & u : (d = (e[f] & (1 << n + 1) - 1) << l - n,
                f > 0 && (d |= e[f - 1] >> this.DB + n - l));
                for (s = i; (d & 1) == 0; ) {
                    d >>= 1,
                    --s
                }
                if ((n -= s) < 0)
                    n += this.DB,
                    --f;
                if (c)
                    o[d].copyTo(r),
                    c = !1;
                else {
                    for (; s > 1; ) {
                        a.sqrTo(r, h),
                        a.sqrTo(h, r),
                        s -= 2
                    }
                    s > 0 ? a.sqrTo(r, h) : (s = r,
                    r = h,
                    h = s);
                    a.mulTo(h, o[d], r)
                }
                for (; f >= 0 && (e[f] & 1 << n) == 0; ) {
                    a.sqrTo(r, h),
                    s = r,
                    r = h,
                    h = s,
                    --n < 0 && (n = this.DB - 1,
                    --f)
                }
            }
            return a.revert(r)
        }
        function lt(e) {
            var t = this.s < 0 ? this.negate() : this.clone()
              , e = e.s < 0 ? e.negate() : e.clone();
            if (t.compareTo(e) < 0)
                var n = t
                  , t = e
                  , e = n;
            var n = t.getLowestSetBit()
              , i = e.getLowestSetBit();
            if (i < 0)
                return t;
            n < i && (i = n);
            i > 0 && (t.rShiftTo(i, t),
            e.rShiftTo(i, e));
            for (; t.signum() > 0; ) {
                (n = t.getLowestSetBit()) > 0 && t.rShiftTo(n, t),
                (n = e.getLowestSetBit()) > 0 && e.rShiftTo(n, e),
                t.compareTo(e) >= 0 ? (t.subTo(e, t),
                t.rShiftTo(1, t)) : (e.subTo(t, e),
                e.rShiftTo(1, e))
            }
            i > 0 && e.lShiftTo(i, e);
            return e
        }
        function ut(e) {
            if (e <= 0)
                return 0;
            var t = this.DV % e
              , n = this.s < 0 ? e - 1 : 0;
            if (this.t > 0)
                if (t == 0)
                    n = this[0] % e;
                else
                    for (var i = this.t - 1; i >= 0; --i) {
                        n = (t * n + this[i]) % e
                    }
            return n
        }
        function ft(e) {
            var t = e.isEven();
            if (this.isEven() && t || e.signum() == 0)
                return m.ZERO;
            for (var n = e.clone(), i = this.clone(), r = D(1), a = D(0), o = D(0), s = D(1); n.signum() != 0; ) {
                for (; n.isEven(); ) {
                    n.rShiftTo(1, n);
                    if (t) {
                        if (!r.isEven() || !a.isEven())
                            r.addTo(this, r),
                            a.subTo(e, a);
                        r.rShiftTo(1, r)
                    } else
                        a.isEven() || a.subTo(e, a);
                    a.rShiftTo(1, a)
                }
                for (; i.isEven(); ) {
                    i.rShiftTo(1, i);
                    if (t) {
                        if (!o.isEven() || !s.isEven())
                            o.addTo(this, o),
                            s.subTo(e, s);
                        o.rShiftTo(1, o)
                    } else
                        s.isEven() || s.subTo(e, s);
                    s.rShiftTo(1, s)
                }
                n.compareTo(i) >= 0 ? (n.subTo(i, n),
                t && r.subTo(o, r),
                a.subTo(s, a)) : (i.subTo(n, i),
                t && o.subTo(r, o),
                s.subTo(a, s))
            }
            if (i.compareTo(m.ONE) != 0)
                return m.ZERO;
            if (s.compareTo(e) >= 0)
                return s.subtract(e);
            if (s.signum() < 0)
                s.addTo(e, s);
            else
                return s;
            return s.signum() < 0 ? s.add(e) : s
        }
        var dt = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997]
          , ct = 67108864 / dt[dt.length - 1];
        function ht(e) {
            var t, n = this.abs();
            if (n.t == 1 && n[0] <= dt[dt.length - 1]) {
                for (t = 0; t < dt.length; ++t) {
                    if (n[0] == dt[t])
                        return !0
                }
                return !1
            }
            if (n.isEven())
                return !1;
            for (t = 1; t < dt.length; ) {
                for (var i = dt[t], r = t + 1; r < dt.length && i < ct; ) {
                    i *= dt[r++]
                }
                for (i = n.modInt(i); t < r; ) {
                    if (i % dt[t++] == 0)
                        return !1
                }
            }
            return n.millerRabin(e)
        }
        function pt(e) {
            var t = this.subtract(m.ONE)
              , n = t.getLowestSetBit();
            if (n <= 0)
                return !1;
            var i = t.shiftRight(n)
              , e = e + 1 >> 1;
            if (e > dt.length)
                e = dt.length;
            for (var r = y(), a = 0; a < e; ++a) {
                r.fromInt(dt[Math.floor(Math.random() * dt.length)]);
                var o = r.modPow(i, this);
                if (o.compareTo(m.ONE) != 0 && o.compareTo(t) != 0) {
                    for (var s = 1; s++ < n && o.compareTo(t) != 0; ) {
                        if (o = o.modPowInt(2, this),
                        o.compareTo(m.ONE) == 0)
                            return !1
                    }
                    if (o.compareTo(t) != 0)
                        return !1
                }
            }
            return !0
        }
        m.prototype.chunkSize = le;
        m.prototype.toRadix = fe;
        m.prototype.fromRadix = de;
        m.prototype.fromNumber = ce;
        m.prototype.bitwiseTo = ye;
        m.prototype.changeBit = ze;
        m.prototype.addTo = Le;
        m.prototype.dMultiply = je;
        m.prototype.dAddOffset = Ve;
        m.prototype.multiplyLowerTo = Qe;
        m.prototype.multiplyUpperTo = et;
        m.prototype.modInt = ut;
        m.prototype.millerRabin = pt;
        m.prototype.clone = re;
        m.prototype.intValue = ae;
        m.prototype.byteValue = oe;
        m.prototype.shortValue = se;
        m.prototype.signum = ue;
        m.prototype.toByteArray = he;
        m.prototype.equals = pe;
        m.prototype.min = ve;
        m.prototype.max = me;
        m.prototype.and = Se;
        m.prototype.or = we;
        m.prototype.xor = _e;
        m.prototype.andNot = Ce;
        m.prototype.not = Te;
        m.prototype.shiftLeft = Me;
        m.prototype.shiftRight = ke;
        m.prototype.getLowestSetBit = Ie;
        m.prototype.bitCount = Ae;
        m.prototype.testBit = Ee;
        m.prototype.setBit = Be;
        m.prototype.clearBit = Oe;
        m.prototype.flipBit = Fe;
        m.prototype.add = Ue;
        m.prototype.subtract = Ne;
        m.prototype.multiply = We;
        m.prototype.divide = He;
        m.prototype.remainder = Je;
        m.prototype.divideAndRemainder = Ye;
        m.prototype.modPow = st;
        m.prototype.modInverse = ft;
        m.prototype.pow = Ze;
        m.prototype.gcd = lt;
        m.prototype.isProbablePrime = ht;
        m.prototype.square = qe;
        (function(r, a, l, o, s, u, f) {
            function d(e) {
                var t, n, s = this, i = e.length, r = 0, a = s.i = s.j = s.m = 0;
                s.S = [];
                s.c = [];
                for (i || (e = [i++]); r < l; ) {
                    s.S[r] = r++
                }
                for (r = 0; r < l; r++) {
                    t = s.S[r],
                    a = a + t + e[r % i] & l - 1,
                    n = s.S[a],
                    s.S[r] = n,
                    s.S[a] = t
                }
                s.g = function(e) {
                    var t = s.S
                      , n = s.i + 1 & l - 1
                      , i = t[n]
                      , r = s.j + i & l - 1
                      , a = t[r];
                    t[n] = a;
                    t[r] = i;
                    for (var o = t[i + a & l - 1]; --e; ) {
                        n = n + 1 & l - 1,
                        i = t[n],
                        r = r + i & l - 1,
                        a = t[r],
                        t[n] = a,
                        t[r] = i,
                        o = o * l + t[i + a & l - 1]
                    }
                    s.i = n;
                    s.j = r;
                    return o
                }
                ;
                s.g(l)
            }
            function c(e, t, n, i, r) {
                n = [];
                r = typeof e === "undefined" ? "undefined" : p(e);
                if (t && r == "object")
                    for (i in e) {
                        if (i.indexOf("S") < 5)
                            try {
                                n.push(c(e[i], t - 1))
                            } catch (e) {}
                    }
                return n.length ? n : e + (r != "string" ? "\0" : "")
            }
            function h(e, t, n, i) {
                e += "";
                for (i = n = 0; i < e.length; i++) {
                    var r = t
                      , a = i & l - 1
                      , o = (n ^= t[i & l - 1] * 19) + e.charCodeAt(i);
                    r[a] = o & l - 1
                }
                e = "";
                for (i in t) {
                    e += String.fromCharCode(t[i])
                }
                return e
            }
            a.seedrandom = function(e, t) {
                var n = [], i, e = h(c(t ? [e, r] : arguments.length ? e : [(new Date).getTime(), r, window], 3), n);
                i = new d(n);
                h(i.S, r);
                a.random = function() {
                    for (var e = i.g(o), t = f, n = 0; e < s; ) {
                        e = (e + n) * l,
                        t *= l,
                        n = i.g(1)
                    }
                    for (; e >= u; ) {
                        e /= 2,
                        t /= 2,
                        n >>>= 1
                    }
                    return (e + n) / t
                }
                ;
                return e
            }
            ;
            f = a.pow(l, o);
            s = a.pow(2, s);
            u = s * 2;
            h(a.random(), r)
        }
        )([], Math, 256, 6, 52);
        function vt() {}
        function mt(e) {
            var t;
            for (t = 0; t < e.length; t++) {
                e[t] = Math.floor(Math.random() * 256)
            }
        }
        vt.prototype.nextBytes = mt;
        function yt() {
            this.j = this.i = 0;
            this.S = []
        }
        function gt(e) {
            var t, n, i;
            for (t = 0; t < 256; ++t) {
                this.S[t] = t
            }
            for (t = n = 0; t < 256; ++t) {
                n = n + this.S[t] + e[t % e.length] & 255,
                i = this.S[t],
                this.S[t] = this.S[n],
                this.S[n] = i
            }
            this.j = this.i = 0
        }
        function St() {
            var e;
            this.i = this.i + 1 & 255;
            this.j = this.j + this.S[this.i] & 255;
            e = this.S[this.i];
            this.S[this.i] = this.S[this.j];
            this.S[this.j] = e;
            return this.S[e + this.S[this.i] & 255]
        }
        yt.prototype.init = gt;
        yt.prototype.next = St;
        function bt() {
            return new yt
        }
        var wt = 256, Pt, _t, Dt;
        function Ct(e) {
            _t[Dt++] ^= e & 255;
            _t[Dt++] ^= e >> 8 & 255;
            _t[Dt++] ^= e >> 16 & 255;
            _t[Dt++] ^= e >> 24 & 255;
            Dt >= wt && (Dt -= wt)
        }
        function Tt() {
            Ct((new Date).getTime())
        }
        if (_t == null) {
            _t = [];
            Dt = 0;
            var Mt;
            if (r.appName == "Netscape" && r.appVersion < "5" && window.crypto) {
                var kt = window.crypto.random(32);
                for (Mt = 0; Mt < kt.length; ++Mt) {
                    _t[Dt++] = kt.charCodeAt(Mt) & 255
                }
            }
            for (; Dt < wt; ) {
                Mt = Math.floor(65536 * Math.random()),
                _t[Dt++] = Mt >>> 8,
                _t[Dt++] = Mt & 255
            }
            Dt = 0;
            Tt()
        }
        function xt() {
            if (Pt == null) {
                Tt();
                Pt = bt();
                Pt.init(_t);
                for (Dt = 0; Dt < _t.length; ++Dt) {
                    _t[Dt] = 0
                }
                Dt = 0
            }
            return Pt.next()
        }
        function It(e) {
            var t;
            for (t = 0; t < e.length; ++t) {
                e[t] = xt()
            }
        }
        function Rt() {}
        Rt.prototype.nextBytes = It;
        function At(e) {
            function y(e, t) {
                var n = (e & 65535) + (t & 65535);
                return (e >> 16) + (t >> 16) + (n >> 16) << 16 | n & 65535
            }
            function g(e, t) {
                return e >>> t | e << 32 - t
            }
            e = function(e) {
                for (var e = e.replace(/\r\n/g, "\n"), t = "", n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    i < 128 ? t += String.fromCharCode(i) : (i > 127 && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224),
                    t += String.fromCharCode(i >> 6 & 63 | 128)),
                    t += String.fromCharCode(i & 63 | 128))
                }
                return t
            }(e);
            return function(e) {
                for (var t = "", n = 0; n < e.length * 4; n++) {
                    t += "0123456789abcdef".charAt(e[n >> 2] >> (3 - n % 4) * 8 + 4 & 15) + "0123456789abcdef".charAt(e[n >> 2] >> (3 - n % 4) * 8 & 15)
                }
                return t
            }(function(e, t) {
                var n = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298], i = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], r = Array(64), a, o, s, l, u, f, d, c, h, p, v, m;
                e[t >> 5] |= 128 << 24 - t % 32;
                e[(t + 64 >> 9 << 4) + 15] = t;
                for (h = 0; h < e.length; h += 16) {
                    a = i[0];
                    o = i[1];
                    s = i[2];
                    l = i[3];
                    u = i[4];
                    f = i[5];
                    d = i[6];
                    c = i[7];
                    for (p = 0; p < 64; p++) {
                        r[p] = p < 16 ? e[p + h] : y(y(y(g(r[p - 2], 17) ^ g(r[p - 2], 19) ^ r[p - 2] >>> 10, r[p - 7]), g(r[p - 15], 7) ^ g(r[p - 15], 18) ^ r[p - 15] >>> 3), r[p - 16]),
                        v = y(y(y(y(c, g(u, 6) ^ g(u, 11) ^ g(u, 25)), u & f ^ ~u & d), n[p]), r[p]),
                        m = y(g(a, 2) ^ g(a, 13) ^ g(a, 22), a & o ^ a & s ^ o & s),
                        c = d,
                        d = f,
                        f = u,
                        u = y(l, v),
                        l = s,
                        s = o,
                        o = a,
                        a = y(v, m)
                    }
                    i[0] = y(a, i[0]);
                    i[1] = y(o, i[1]);
                    i[2] = y(s, i[2]);
                    i[3] = y(l, i[3]);
                    i[4] = y(u, i[4]);
                    i[5] = y(f, i[5]);
                    i[6] = y(d, i[6]);
                    i[7] = y(c, i[7])
                }
                return i
            }(function(e) {
                for (var t = [], n = 0; n < e.length * 8; n += 8) {
                    t[n >> 5] |= (e.charCodeAt(n / 8) & 255) << 24 - n % 32
                }
                return t
            }(e), e.length * 8))
        }
        var Et = {
            hex: function e(t) {
                return At(t)
            }
        };
        function zt(e) {
            function t(e, t) {
                return e << t | e >>> 32 - t
            }
            function n(e) {
                var t = "", n, i;
                for (n = 7; n >= 0; n--) {
                    i = e >>> n * 4 & 15,
                    t += i.toString(16)
                }
                return t
            }
            var i, r, a = Array(80), o = 1732584193, s = 4023233417, l = 2562383102, u = 271733878, f = 3285377520, d, c, h, p, v, e = function(e) {
                for (var e = e.replace(/\r\n/g, "\n"), t = "", n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    i < 128 ? t += String.fromCharCode(i) : (i > 127 && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224),
                    t += String.fromCharCode(i >> 6 & 63 | 128)),
                    t += String.fromCharCode(i & 63 | 128))
                }
                return t
            }(e);
            d = e.length;
            var m = [];
            for (i = 0; i < d - 3; i += 4) {
                r = e.charCodeAt(i) << 24 | e.charCodeAt(i + 1) << 16 | e.charCodeAt(i + 2) << 8 | e.charCodeAt(i + 3),
                m.push(r)
            }
            switch (d % 4) {
            case 0:
                i = 2147483648;
                break;
            case 1:
                i = e.charCodeAt(d - 1) << 24 | 8388608;
                break;
            case 2:
                i = e.charCodeAt(d - 2) << 24 | e.charCodeAt(d - 1) << 16 | 32768;
                break;
            case 3:
                i = e.charCodeAt(d - 3) << 24 | e.charCodeAt(d - 2) << 16 | e.charCodeAt(d - 1) << 8 | 128
            }
            for (m.push(i); m.length % 16 != 14; ) {
                m.push(0)
            }
            m.push(d >>> 29);
            m.push(d << 3 & 4294967295);
            for (e = 0; e < m.length; e += 16) {
                for (i = 0; i < 16; i++) {
                    a[i] = m[e + i]
                }
                for (i = 16; i <= 79; i++) {
                    a[i] = t(a[i - 3] ^ a[i - 8] ^ a[i - 14] ^ a[i - 16], 1)
                }
                r = o;
                d = s;
                c = l;
                h = u;
                p = f;
                for (i = 0; i <= 19; i++) {
                    v = t(r, 5) + (d & c | ~d & h) + p + a[i] + 1518500249 & 4294967295,
                    p = h,
                    h = c,
                    c = t(d, 30),
                    d = r,
                    r = v
                }
                for (i = 20; i <= 39; i++) {
                    v = t(r, 5) + (d ^ c ^ h) + p + a[i] + 1859775393 & 4294967295,
                    p = h,
                    h = c,
                    c = t(d, 30),
                    d = r,
                    r = v
                }
                for (i = 40; i <= 59; i++) {
                    v = t(r, 5) + (d & c | d & h | c & h) + p + a[i] + 2400959708 & 4294967295,
                    p = h,
                    h = c,
                    c = t(d, 30),
                    d = r,
                    r = v
                }
                for (i = 60; i <= 79; i++) {
                    v = t(r, 5) + (d ^ c ^ h) + p + a[i] + 3395469782 & 4294967295,
                    p = h,
                    h = c,
                    c = t(d, 30),
                    d = r,
                    r = v
                }
                o = o + r & 4294967295;
                s = s + d & 4294967295;
                l = l + c & 4294967295;
                u = u + h & 4294967295;
                f = f + p & 4294967295
            }
            v = n(o) + n(s) + n(l) + n(u) + n(f);
            return v.toLowerCase()
        }
        var Bt = {
            hex: function e(t) {
                return zt(t)
            }
        }
          , Ot = function e(t) {
            function s(e, t) {
                var n, i, r, a, o;
                r = e & 2147483648;
                a = t & 2147483648;
                n = e & 1073741824;
                i = t & 1073741824;
                o = (e & 1073741823) + (t & 1073741823);
                return n & i ? o ^ 2147483648 ^ r ^ a : n | i ? o & 1073741824 ? o ^ 3221225472 ^ r ^ a : o ^ 1073741824 ^ r ^ a : o ^ r ^ a
            }
            function n(e, t, n, i, r, a, o) {
                e = s(e, s(s(t & n | ~t & i, r), o));
                return s(e << a | e >>> 32 - a, t)
            }
            function i(e, t, n, i, r, a, o) {
                e = s(e, s(s(t & i | n & ~i, r), o));
                return s(e << a | e >>> 32 - a, t)
            }
            function r(e, t, n, i, r, a, o) {
                e = s(e, s(s(t ^ n ^ i, r), o));
                return s(e << a | e >>> 32 - a, t)
            }
            function a(e, t, n, i, r, a, o) {
                e = s(e, s(s(n ^ (t | ~i), r), o));
                return s(e << a | e >>> 32 - a, t)
            }
            function o(e) {
                var t = "", n = "", i;
                for (i = 0; i <= 3; i++) {
                    n = e >>> i * 8 & 255,
                    n = "0" + n.toString(16),
                    t += n.substr(n.length - 2, 2)
                }
                return t
            }
            var l = [], u, f, d, c, h, p, v, m, t = function(e) {
                for (var e = e.replace(/\r\n/g, "\n"), t = "", n = 0; n < e.length; n++) {
                    var i = e.charCodeAt(n);
                    i < 128 ? t += String.fromCharCode(i) : (i > 127 && i < 2048 ? t += String.fromCharCode(i >> 6 | 192) : (t += String.fromCharCode(i >> 12 | 224),
                    t += String.fromCharCode(i >> 6 & 63 | 128)),
                    t += String.fromCharCode(i & 63 | 128))
                }
                return t
            }(t), l = function(e) {
                var t, n = e.length;
                t = n + 8;
                for (var i = ((t - t % 64) / 64 + 1) * 16, r = Array(i - 1), a = 0, o = 0; o < n; ) {
                    t = (o - o % 4) / 4,
                    a = o % 4 * 8,
                    r[t] |= e.charCodeAt(o) << a,
                    o++
                }
                r[(o - o % 4) / 4] |= 128 << o % 4 * 8;
                r[i - 2] = n << 3;
                r[i - 1] = n >>> 29;
                return r
            }(t);
            h = 1732584193;
            p = 4023233417;
            v = 2562383102;
            m = 271733878;
            for (t = 0; t < l.length; t += 16) {
                u = h,
                f = p,
                d = v,
                c = m,
                h = n(h, p, v, m, l[t + 0], 7, 3614090360),
                m = n(m, h, p, v, l[t + 1], 12, 3905402710),
                v = n(v, m, h, p, l[t + 2], 17, 606105819),
                p = n(p, v, m, h, l[t + 3], 22, 3250441966),
                h = n(h, p, v, m, l[t + 4], 7, 4118548399),
                m = n(m, h, p, v, l[t + 5], 12, 1200080426),
                v = n(v, m, h, p, l[t + 6], 17, 2821735955),
                p = n(p, v, m, h, l[t + 7], 22, 4249261313),
                h = n(h, p, v, m, l[t + 8], 7, 1770035416),
                m = n(m, h, p, v, l[t + 9], 12, 2336552879),
                v = n(v, m, h, p, l[t + 10], 17, 4294925233),
                p = n(p, v, m, h, l[t + 11], 22, 2304563134),
                h = n(h, p, v, m, l[t + 12], 7, 1804603682),
                m = n(m, h, p, v, l[t + 13], 12, 4254626195),
                v = n(v, m, h, p, l[t + 14], 17, 2792965006),
                p = n(p, v, m, h, l[t + 15], 22, 1236535329),
                h = i(h, p, v, m, l[t + 1], 5, 4129170786),
                m = i(m, h, p, v, l[t + 6], 9, 3225465664),
                v = i(v, m, h, p, l[t + 11], 14, 643717713),
                p = i(p, v, m, h, l[t + 0], 20, 3921069994),
                h = i(h, p, v, m, l[t + 5], 5, 3593408605),
                m = i(m, h, p, v, l[t + 10], 9, 38016083),
                v = i(v, m, h, p, l[t + 15], 14, 3634488961),
                p = i(p, v, m, h, l[t + 4], 20, 3889429448),
                h = i(h, p, v, m, l[t + 9], 5, 568446438),
                m = i(m, h, p, v, l[t + 14], 9, 3275163606),
                v = i(v, m, h, p, l[t + 3], 14, 4107603335),
                p = i(p, v, m, h, l[t + 8], 20, 1163531501),
                h = i(h, p, v, m, l[t + 13], 5, 2850285829),
                m = i(m, h, p, v, l[t + 2], 9, 4243563512),
                v = i(v, m, h, p, l[t + 7], 14, 1735328473),
                p = i(p, v, m, h, l[t + 12], 20, 2368359562),
                h = r(h, p, v, m, l[t + 5], 4, 4294588738),
                m = r(m, h, p, v, l[t + 8], 11, 2272392833),
                v = r(v, m, h, p, l[t + 11], 16, 1839030562),
                p = r(p, v, m, h, l[t + 14], 23, 4259657740),
                h = r(h, p, v, m, l[t + 1], 4, 2763975236),
                m = r(m, h, p, v, l[t + 4], 11, 1272893353),
                v = r(v, m, h, p, l[t + 7], 16, 4139469664),
                p = r(p, v, m, h, l[t + 10], 23, 3200236656),
                h = r(h, p, v, m, l[t + 13], 4, 681279174),
                m = r(m, h, p, v, l[t + 0], 11, 3936430074),
                v = r(v, m, h, p, l[t + 3], 16, 3572445317),
                p = r(p, v, m, h, l[t + 6], 23, 76029189),
                h = r(h, p, v, m, l[t + 9], 4, 3654602809),
                m = r(m, h, p, v, l[t + 12], 11, 3873151461),
                v = r(v, m, h, p, l[t + 15], 16, 530742520),
                p = r(p, v, m, h, l[t + 2], 23, 3299628645),
                h = a(h, p, v, m, l[t + 0], 6, 4096336452),
                m = a(m, h, p, v, l[t + 7], 10, 1126891415),
                v = a(v, m, h, p, l[t + 14], 15, 2878612391),
                p = a(p, v, m, h, l[t + 5], 21, 4237533241),
                h = a(h, p, v, m, l[t + 12], 6, 1700485571),
                m = a(m, h, p, v, l[t + 3], 10, 2399980690),
                v = a(v, m, h, p, l[t + 10], 15, 4293915773),
                p = a(p, v, m, h, l[t + 1], 21, 2240044497),
                h = a(h, p, v, m, l[t + 8], 6, 1873313359),
                m = a(m, h, p, v, l[t + 15], 10, 4264355552),
                v = a(v, m, h, p, l[t + 6], 15, 2734768916),
                p = a(p, v, m, h, l[t + 13], 21, 1309151649),
                h = a(h, p, v, m, l[t + 4], 6, 4149444226),
                m = a(m, h, p, v, l[t + 11], 10, 3174756917),
                v = a(v, m, h, p, l[t + 2], 15, 718787259),
                p = a(p, v, m, h, l[t + 9], 21, 3951481745),
                h = s(h, u),
                p = s(p, f),
                v = s(v, d),
                m = s(m, c)
            }
            return (o(h) + o(p) + o(v) + o(m)).toLowerCase()
        };
        function Ft(e, t) {
            return new m(e,t)
        }
        function Lt(e, t) {
            for (var n = "", i = 0; i + t < e.length; ) {
                n += e.substring(i, i + t) + "\n",
                i += t
            }
            return n + e.substring(i, e.length)
        }
        function Ut(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }
        function Nt(e, t) {
            if (t < e.length + 11)
                throw "Message too long for RSA (n=" + t + ", l=" + e.length + ")";
            for (var n = [], i = e.length - 1; i >= 0 && t > 0; ) {
                var r = e.charCodeAt(i--);
                r < 128 ? n[--t] = r : r > 127 && r < 2048 ? (n[--t] = r & 63 | 128,
                n[--t] = r >> 6 | 192) : (n[--t] = r & 63 | 128,
                n[--t] = r >> 6 & 63 | 128,
                n[--t] = r >> 12 | 224)
            }
            n[--t] = 0;
            i = new Rt;
            for (r = []; t > 2; ) {
                for (r[0] = 0; r[0] == 0; ) {
                    i.nextBytes(r)
                }
                n[--t] = r[0]
            }
            n[--t] = 2;
            n[--t] = 0;
            return new m(n)
        }
        function Wt() {
            this.n = null;
            this.e = 0;
            this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
        }
        function qt(e, t) {
            e != null && t != null && e.length > 0 && t.length > 0 ? (this.n = Ft(e, 16),
            this.e = parseInt(t, 16)) : alert("Invalid RSA public key")
        }
        function Ht(e) {
            return e.modPowInt(this.e, this.n)
        }
        function Jt(e) {
            e = Nt(e, this.n.bitLength() + 7 >> 3);
            if (e == null)
                return null;
            e = this.doPublic(e);
            if (e == null)
                return null;
            e = e.toString(16);
            return (e.length & 1) == 0 ? e : "0" + e
        }
        Wt.prototype.doPublic = Ht;
        Wt.prototype.setPublic = qt;
        Wt.prototype.encrypt = Jt;
        function Yt(e, t) {
            for (var n = e.toByteArray(), i = 0; i < n.length && n[i] == 0; ) {
                ++i
            }
            if (n.length - i != t - 1 || n[i] != 2)
                return null;
            for (++i; n[i] != 0; ) {
                if (++i >= n.length)
                    return null
            }
            for (var r = ""; ++i < n.length; ) {
                var a = n[i] & 255;
                a < 128 ? r += String.fromCharCode(a) : a > 191 && a < 224 ? (r += String.fromCharCode((a & 31) << 6 | n[i + 1] & 63),
                ++i) : (r += String.fromCharCode((a & 15) << 12 | (n[i + 1] & 63) << 6 | n[i + 2] & 63),
                i += 2)
            }
            return r
        }
        function jt(e, t, n) {
            e != null && t != null && e.length > 0 && t.length > 0 ? (this.n = Ft(e, 16),
            this.e = parseInt(t, 16),
            this.d = Ft(n, 16)) : alert("Invalid RSA private key")
        }
        function Vt(e, t, n, i, r, a, o, s) {
            e != null && t != null && e.length > 0 && t.length > 0 ? (this.n = Ft(e, 16),
            this.e = parseInt(t, 16),
            this.d = Ft(n, 16),
            this.p = Ft(i, 16),
            this.q = Ft(r, 16),
            this.dmp1 = Ft(a, 16),
            this.dmq1 = Ft(o, 16),
            this.coeff = Ft(s, 16)) : alert("Invalid RSA private key")
        }
        function Gt(e, t) {
            var n = new vt
              , i = e >> 1;
            this.e = parseInt(t, 16);
            for (var r = new m(t,16); ; ) {
                for (; ; ) {
                    if (this.p = new m(e - i,1,n),
                    this.p.subtract(m.ONE).gcd(r).compareTo(m.ONE) == 0 && this.p.isProbablePrime(10))
                        break
                }
                for (; ; ) {
                    if (this.q = new m(i,1,n),
                    this.q.subtract(m.ONE).gcd(r).compareTo(m.ONE) == 0 && this.q.isProbablePrime(10))
                        break
                }
                if (this.p.compareTo(this.q) <= 0) {
                    var a = this.p;
                    this.p = this.q;
                    this.q = a
                }
                var a = this.p.subtract(m.ONE)
                  , o = this.q.subtract(m.ONE)
                  , s = a.multiply(o);
                if (s.gcd(r).compareTo(m.ONE) == 0) {
                    this.n = this.p.multiply(this.q);
                    this.d = r.modInverse(s);
                    this.dmp1 = this.d.mod(a);
                    this.dmq1 = this.d.mod(o);
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        }
        function Xt(e) {
            if (this.p == null || this.q == null)
                return e.modPow(this.d, this.n);
            for (var t = e.mod(this.p).modPow(this.dmp1, this.p), e = e.mod(this.q).modPow(this.dmq1, this.q); t.compareTo(e) < 0; ) {
                t = t.add(this.p)
            }
            return t.subtract(e).multiply(this.coeff).mod(this.p).multiply(this.q).add(e)
        }
        function Kt(e) {
            e = this.doPrivate(Ft(e, 16));
            return e == null ? null : Yt(e, this.n.bitLength() + 7 >> 3)
        }
        Wt.prototype.doPrivate = Xt;
        Wt.prototype.setPrivate = jt;
        Wt.prototype.setPrivateEx = Vt;
        Wt.prototype.generate = Gt;
        Wt.prototype.decrypt = Kt;
        var $t = [];
        $t.sha1 = "3021300906052b0e03021a05000414";
        $t.sha256 = "3031300d060960864801650304020105000420";
        var Zt = [];
        Zt.sha1 = Bt.hex;
        Zt.sha256 = Et.hex;
        function Qt(e, t, n) {
            t /= 4;
            for (var e = (0,
            Zt[n])(e), n = "00" + $t[n] + e, e = "", t = t - 4 - n.length, i = 0; i < t; i += 2) {
                e += "ff"
            }
            return sPaddedMessageHex = "0001" + e + n
        }
        function en(e, t) {
            var n = Qt(e, this.n.bitLength(), t);
            return this.doPrivate(Ft(n, 16)).toString(16)
        }
        function tn(e) {
            e = Qt(e, this.n.bitLength(), "sha1");
            return this.doPrivate(Ft(e, 16)).toString(16)
        }
        function nn(e) {
            e = Qt(e, this.n.bitLength(), "sha256");
            return this.doPrivate(Ft(e, 16)).toString(16)
        }
        function rn(e, t, n) {
            var i = new Wt;
            i.setPublic(t, n);
            return i.doPublic(e)
        }
        function an(e, t, n) {
            return rn(e, t, n).toString(16).replace(/^1f+00/, "")
        }
        function on(e) {
            for (var t in $t) {
                var n = $t[t]
                  , i = n.length;
                if (e.substring(0, i) == n)
                    return [t, e.substring(i)]
            }
            return []
        }
        function sn(e, t, n, i) {
            t = an(t, n, i);
            n = on(t);
            if (n.length == 0)
                return !1;
            t = n[1];
            e = (0,
            Zt[n[0]])(e);
            return t == e
        }
        function ln(e, t) {
            var n = Ft(e, 16);
            return sn(t, n, this.n.toString(16), this.e.toString(16))
        }
        function un(e, t) {
            var t = t.replace(/[ \n]+/g, "")
              , n = this.doPublic(Ft(t, 16)).toString(16).replace(/^1f+00/, "")
              , i = on(n);
            if (i.length == 0)
                return !1;
            n = i[1];
            i = (0,
            Zt[i[0]])(e);
            return n == i
        }
        Wt.prototype.signString = en;
        Wt.prototype.signStringWithSHA1 = tn;
        Wt.prototype.signStringWithSHA256 = nn;
        Wt.prototype.verifyString = un;
        Wt.prototype.verifyHexSignatureForMessage = ln;
        var fn = function() {
            var u = {
                Sbox: [99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215, 171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175, 156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229, 241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128, 226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214, 179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203, 190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249, 2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188, 182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23, 196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144, 136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36, 92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213, 78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28, 166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102, 72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17, 105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137, 13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22],
                ShiftRowTab: [0, 5, 10, 15, 4, 9, 14, 3, 8, 13, 2, 7, 12, 1, 6, 11]
            };
            u.Init = function() {
                u.Sbox_Inv = Array(256);
                for (var e = 0; e < 256; e++) {
                    u.Sbox_Inv[u.Sbox[e]] = e
                }
                u.ShiftRowTab_Inv = Array(16);
                for (e = 0; e < 16; e++) {
                    u.ShiftRowTab_Inv[u.ShiftRowTab[e]] = e
                }
                u.xtime = Array(256);
                for (e = 0; e < 128; e++) {
                    u.xtime[e] = e << 1,
                    u.xtime[128 + e] = e << 1 ^ 27
                }
            }
            ;
            u.Done = function() {
                delete u.Sbox_Inv;
                delete u.ShiftRowTab_Inv;
                delete u.xtime
            }
            ;
            u.ExpandKey = function(e) {
                var t = e.length, n, i = 1;
                switch (t) {
                case 16:
                    n = 176;
                    break;
                case 24:
                    n = 208;
                    break;
                case 32:
                    n = 240;
                    break;
                default:
                    alert("my.ExpandKey: Only key lengths of 16, 24 or 32 bytes allowed!")
                }
                for (var r = t; r < n; r += 4) {
                    var a = e.slice(r - 4, r);
                    if (r % t == 0) {
                        if (a = [u.Sbox[a[1]] ^ i, u.Sbox[a[2]], u.Sbox[a[3]], u.Sbox[a[0]]],
                        (i <<= 1) >= 256)
                            i ^= 283
                    } else
                        t > 24 && r % t == 16 && (a = [u.Sbox[a[0]], u.Sbox[a[1]], u.Sbox[a[2]], u.Sbox[a[3]]]);
                    for (var o = 0; o < 4; o++) {
                        e[r + o] = e[r + o - t] ^ a[o]
                    }
                }
            }
            ;
            u.Encrypt = function(e, t) {
                var n = t.length;
                u.AddRoundKey(e, t.slice(0, 16));
                for (var i = 16; i < n - 16; i += 16) {
                    u.SubBytes(e, u.Sbox),
                    u.ShiftRows(e, u.ShiftRowTab),
                    u.MixColumns(e),
                    u.AddRoundKey(e, t.slice(i, i + 16))
                }
                u.SubBytes(e, u.Sbox);
                u.ShiftRows(e, u.ShiftRowTab);
                u.AddRoundKey(e, t.slice(i, n))
            }
            ;
            u.Decrypt = function(e, t) {
                var n = t.length;
                u.AddRoundKey(e, t.slice(n - 16, n));
                u.ShiftRows(e, u.ShiftRowTab_Inv);
                u.SubBytes(e, u.Sbox_Inv);
                for (n -= 32; n >= 16; n -= 16) {
                    u.AddRoundKey(e, t.slice(n, n + 16)),
                    u.MixColumns_Inv(e),
                    u.ShiftRows(e, u.ShiftRowTab_Inv),
                    u.SubBytes(e, u.Sbox_Inv)
                }
                u.AddRoundKey(e, t.slice(0, 16))
            }
            ;
            u.SubBytes = function(e, t) {
                for (var n = 0; n < 16; n++) {
                    e[n] = t[e[n]]
                }
            }
            ;
            u.AddRoundKey = function(e, t) {
                for (var n = 0; n < 16; n++) {
                    e[n] ^= t[n]
                }
            }
            ;
            u.ShiftRows = function(e, t) {
                for (var n = [].concat(e), i = 0; i < 16; i++) {
                    e[i] = n[t[i]]
                }
            }
            ;
            u.MixColumns = function(e) {
                for (var t = 0; t < 16; t += 4) {
                    var n = e[t + 0]
                      , i = e[t + 1]
                      , r = e[t + 2]
                      , a = e[t + 3]
                      , o = n ^ i ^ r ^ a;
                    e[t + 0] ^= o ^ u.xtime[n ^ i];
                    e[t + 1] ^= o ^ u.xtime[i ^ r];
                    e[t + 2] ^= o ^ u.xtime[r ^ a];
                    e[t + 3] ^= o ^ u.xtime[a ^ n]
                }
            }
            ;
            u.MixColumns_Inv = function(e) {
                for (var t = 0; t < 16; t += 4) {
                    var n = e[t + 0]
                      , i = e[t + 1]
                      , r = e[t + 2]
                      , a = e[t + 3]
                      , o = n ^ i ^ r ^ a
                      , s = u.xtime[o]
                      , l = u.xtime[u.xtime[s ^ n ^ r]] ^ o;
                    o ^= u.xtime[u.xtime[s ^ i ^ a]];
                    e[t + 0] ^= l ^ u.xtime[n ^ i];
                    e[t + 1] ^= o ^ u.xtime[i ^ r];
                    e[t + 2] ^= l ^ u.xtime[r ^ a];
                    e[t + 3] ^= o ^ u.xtime[a ^ n]
                }
            }
            ;
            return u
        }()
          , dn = function() {
            var l = {};
            fn.Init();
            l.b256to64 = function(e) {
                var t, n, i, r = "", a = 0, o = 0, s = e.length;
                for (i = 0; i < s; i++) {
                    n = e.charCodeAt(i),
                    o == 0 ? (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 2 & 63),
                    t = (n & 3) << 4) : o == 1 ? (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t | n >> 4 & 15),
                    t = (n & 15) << 2) : o == 2 && (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t | n >> 6 & 3),
                    a += 1,
                    r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n & 63)),
                    a += 1,
                    o += 1,
                    o == 3 && (o = 0)
                }
                o > 0 && (r += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(t),
                r += "=");
                o == 1 && (r += "=");
                return r
            }
            ;
            l.b64to256 = function(e) {
                var t, n, i = "", r = 0, a = 0, o = e.length;
                for (n = 0; n < o; n++) {
                    t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(n)),
                    t >= 0 && (r && (i += String.fromCharCode(a | t >> 6 - r & 255)),
                    r = r + 2 & 7,
                    a = t << r & 255)
                }
                return i
            }
            ;
            l.b16to64 = function(e) {
                var t, n, i = "";
                e.length % 2 == 1 && (e = "0" + e);
                for (t = 0; t + 3 <= e.length; t += 3) {
                    n = parseInt(e.substring(t, t + 3), 16),
                    i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 6) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n & 63)
                }
                t + 1 == e.length ? (n = parseInt(e.substring(t, t + 1), 16),
                i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n << 2)) : t + 2 == e.length && (n = parseInt(e.substring(t, t + 2), 16),
                i += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(n >> 2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((n & 3) << 4));
                for (; (i.length & 3) > 0; ) {
                    i += "="
                }
                return i
            }
            ;
            l.b64to16 = function(e) {
                var t = "", n, i = 0, r;
                for (n = 0; n < e.length; ++n) {
                    if (e.charAt(n) == "=")
                        break;
                    v = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(e.charAt(n));
                    v < 0 || (i == 0 ? (t += b(v >> 2),
                    r = v & 3,
                    i = 1) : i == 1 ? (t += b(r << 2 | v >> 4),
                    r = v & 15,
                    i = 2) : i == 2 ? (t += b(r),
                    t += b(v >> 2),
                    r = v & 3,
                    i = 3) : (t += b(r << 2 | v >> 4),
                    t += b(v & 15),
                    i = 0))
                }
                i == 1 && (t += b(r << 2));
                return t
            }
            ;
            l.string2bytes = function(e) {
                for (var t = [], n = 0; n < e.length; n++) {
                    t.push(e.charCodeAt(n))
                }
                return t
            }
            ;
            l.bytes2string = function(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    t += String.fromCharCode(e[n])
                }
                return t
            }
            ;
            l.blockXOR = function(e, t) {
                for (var n = Array(16), i = 0; i < 16; i++) {
                    n[i] = e[i] ^ t[i]
                }
                return n
            }
            ;
            l.blockIV = function() {
                var e = new Rt
                  , t = Array(16);
                e.nextBytes(t);
                return t
            }
            ;
            l.pad16 = function(e) {
                var t = e.slice(0)
                  , n = (16 - e.length % 16) % 16;
                for (i = e.length; i < e.length + n; i++) {
                    t.push(0)
                }
                return t
            }
            ;
            l.depad = function(e) {
                for (e = e.slice(0); e[e.length - 1] == 0; ) {
                    e = e.slice(0, e.length - 1)
                }
                return e
            }
            ;
            l.encryptAESCBC = function(e, t) {
                var n = t.slice(0);
                fn.ExpandKey(n);
                for (var i = l.string2bytes(e), i = l.pad16(i), r = l.blockIV(), a = 0; a < i.length / 16; a++) {
                    var o = i.slice(a * 16, a * 16 + 16)
                      , s = r.slice(a * 16, a * 16 + 16)
                      , o = l.blockXOR(s, o);
                    fn.Encrypt(o, n);
                    r = r.concat(o)
                }
                n = l.bytes2string(r);
                return l.b256to64(n)
            }
            ;
            l.decryptAESCBC = function(e, t) {
                var n = t.slice(0);
                fn.ExpandKey(n);
                for (var e = l.b64to256(e), i = l.string2bytes(e), r = [], a = 1; a < i.length / 16; a++) {
                    var o = i.slice(a * 16, a * 16 + 16)
                      , s = i.slice((a - 1) * 16, (a - 1) * 16 + 16);
                    fn.Decrypt(o, n);
                    o = l.blockXOR(s, o);
                    r = r.concat(o)
                }
                r = l.depad(r);
                return l.bytes2string(r)
            }
            ;
            l.wrap60 = function(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    n % 60 == 0 && n != 0 && (t += "\n"),
                    t += e[n]
                }
                return t
            }
            ;
            l.generateAESKey = function() {
                var e = Array(16);
                (new Rt).nextBytes(e);
                return e
            }
            ;
            l.generateRSAKey = function(e, t) {
                Math.seedrandom(Et.hex(e));
                var n = new Wt;
                n.generate(t, "10001");
                return n
            }
            ;
            l.publicKeyString = function(e) {
                return pubkey = e.n.toString(16)
            }
            ;
            l.publicKeyID = function(e) {
                return Ot(e)
            }
            ;
            l.publicKeyFromString = function(e) {
                var e = e.split("|")[0]
                  , t = new Wt;
                t.setPublic(e, "10001");
                return t
            }
            ;
            l.encrypt = function(e, t, n) {
                var i = "";
                try {
                    var r = l.publicKeyFromString(t);
                    i += r.encrypt(e) + "?"
                } catch (e) {
                    return {
                        status: "Invalid public key"
                    }
                }
                return {
                    status: "success",
                    cipher: i
                }
            }
            ;
            l.decrypt = function(e, t) {
                var n = e.split("?")
                  , i = t.decrypt(n[0]);
                return {
                    status: "success",
                    plaintext: i,
                    signature: "unsigned"
                }
            }
            ;
            return l
        }();
        e.exports = dn
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var _ = _ || function(l, i) {
            var e = {}
              , t = e.lib = {}
              , r = function e() {}
              , n = t.Base = {
                extend: function e(t) {
                    r.prototype = this;
                    var n = new r;
                    t && n.mixIn(t);
                    n.hasOwnProperty("init") || (n.init = function() {
                        n.$super.init.apply(this, arguments)
                    }
                    );
                    n.init.prototype = n;
                    n.$super = this;
                    return n
                },
                create: function e() {
                    var t = this.extend();
                    t.init.apply(t, arguments);
                    return t
                },
                init: function e() {},
                mixIn: function e(t) {
                    for (var n in t) {
                        t.hasOwnProperty(n) && (this[n] = t[n])
                    }
                    t.hasOwnProperty("toString") && (this.toString = t.toString)
                },
                clone: function e() {
                    return this.init.prototype.extend(this)
                }
            }
              , u = t.WordArray = n.extend({
                init: function e(t, n) {
                    t = this.words = t || [];
                    this.sigBytes = n != i ? n : 4 * t.length
                },
                toString: function e(t) {
                    return (t || o).stringify(this)
                },
                concat: function e(t) {
                    var n = this.words
                      , i = t.words
                      , r = this.sigBytes;
                    t = t.sigBytes;
                    this.clamp();
                    if (r % 4)
                        for (var a = 0; a < t; a++) {
                            n[r + a >>> 2] |= (i[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 24 - 8 * ((r + a) % 4)
                        }
                    else if (65535 < i.length)
                        for (a = 0; a < t; a += 4) {
                            n[r + a >>> 2] = i[a >>> 2]
                        }
                    else
                        n.push.apply(n, i);
                    this.sigBytes += t;
                    return this
                },
                clamp: function e() {
                    var t = this.words
                      , n = this.sigBytes;
                    t[n >>> 2] &= 4294967295 << 32 - 8 * (n % 4);
                    t.length = l.ceil(n / 4)
                },
                clone: function e() {
                    var t = n.clone.call(this);
                    t.words = this.words.slice(0);
                    return t
                },
                random: function e(t) {
                    for (var n = [], i = 0; i < t; i += 4) {
                        n.push(4294967296 * l.random() | 0)
                    }
                    return new u.init(n,t)
                }
            })
              , a = e.enc = {}
              , o = a.Hex = {
                stringify: function e(t) {
                    var n = t.words;
                    t = t.sigBytes;
                    for (var i = [], r = 0; r < t; r++) {
                        var a = n[r >>> 2] >>> 24 - 8 * (r % 4) & 255;
                        i.push((a >>> 4).toString(16));
                        i.push((a & 15).toString(16))
                    }
                    return i.join("")
                },
                parse: function e(t) {
                    for (var n = t.length, i = [], r = 0; r < n; r += 2) {
                        i[r >>> 3] |= parseInt(t.substr(r, 2), 16) << 24 - 4 * (r % 8)
                    }
                    return new u.init(i,n / 2)
                }
            }
              , s = a.Latin1 = {
                stringify: function e(t) {
                    var n = t.words;
                    t = t.sigBytes;
                    for (var i = [], r = 0; r < t; r++) {
                        i.push(String.fromCharCode(n[r >>> 2] >>> 24 - 8 * (r % 4) & 255))
                    }
                    return i.join("")
                },
                parse: function e(t) {
                    for (var n = t.length, i = [], r = 0; r < n; r++) {
                        i[r >>> 2] |= (t.charCodeAt(r) & 255) << 24 - 8 * (r % 4)
                    }
                    return new u.init(i,n)
                }
            }
              , f = a.Utf8 = {
                stringify: function e(t) {
                    try {
                        return decodeURIComponent(escape(s.stringify(t)))
                    } catch (e) {
                        throw Error("Malformed UTF-8 data")
                    }
                },
                parse: function e(t) {
                    return s.parse(unescape(encodeURIComponent(t)))
                }
            }
              , d = t.BufferedBlockAlgorithm = n.extend({
                reset: function e() {
                    this._data = new u.init;
                    this._nDataBytes = 0
                },
                _append: function e(t) {
                    "string" == typeof t && (t = f.parse(t));
                    this._data.concat(t);
                    this._nDataBytes += t.sigBytes
                },
                _process: function e(t) {
                    var n = this._data
                      , i = n.words
                      , r = n.sigBytes
                      , a = this.blockSize
                      , o = r / (4 * a)
                      , o = t ? l.ceil(o) : l.max((o | 0) - this._minBufferSize, 0);
                    t = o * a;
                    r = l.min(4 * t, r);
                    if (t) {
                        for (var s = 0; s < t; s += a) {
                            this._doProcessBlock(i, s)
                        }
                        s = i.splice(0, t);
                        n.sigBytes -= r
                    }
                    return new u.init(s,r)
                },
                clone: function e() {
                    var t = n.clone.call(this);
                    t._data = this._data.clone();
                    return t
                },
                _minBufferSize: 0
            });
            t.Hasher = d.extend({
                cfg: n.extend(),
                init: function e(t) {
                    this.cfg = this.cfg.extend(t);
                    this.reset()
                },
                reset: function e() {
                    d.reset.call(this);
                    this._doReset()
                },
                update: function e(t) {
                    this._append(t);
                    this._process();
                    return this
                },
                finalize: function e(t) {
                    t && this._append(t);
                    return this._doFinalize()
                },
                blockSize: 16,
                _createHelper: function e(n) {
                    return function(e, t) {
                        return new n.init(t).finalize(e)
                    }
                },
                _createHmacHelper: function e(n) {
                    return function(e, t) {
                        return new c.HMAC.init(n,t).finalize(e)
                    }
                }
            });
            var c = e.algo = {};
            return e
        }(Math);
        (function() {
            var e = _
              , u = e.lib.WordArray;
            e.enc.Base64 = {
                stringify: function e(t) {
                    var n = t.words
                      , i = t.sigBytes
                      , r = this._map;
                    t.clamp();
                    t = [];
                    for (var a = 0; a < i; a += 3) {
                        for (var o = (n[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (n[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | n[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, s = 0; 4 > s && a + .75 * s < i; s++) {
                            t.push(r.charAt(o >>> 6 * (3 - s) & 63))
                        }
                    }
                    if (n = r.charAt(64))
                        for (; t.length % 4; ) {
                            t.push(n)
                        }
                    return t.join("")
                },
                parse: function e(t) {
                    var n = t.length
                      , i = this._map
                      , r = i.charAt(64);
                    r && (r = t.indexOf(r),
                    -1 != r && (n = r));
                    for (var r = [], a = 0, o = 0; o < n; o++) {
                        if (o % 4) {
                            var s = i.indexOf(t.charAt(o - 1)) << 2 * (o % 4)
                              , l = i.indexOf(t.charAt(o)) >>> 6 - 2 * (o % 4);
                            r[a >>> 2] |= (s | l) << 24 - 8 * (a % 4);
                            a++
                        }
                    }
                    return u.create(r, a)
                },
                _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
            }
        }
        )();
        (function(o) {
            function D(e, t, n, i, r, a, o) {
                e = e + (t & n | ~t & i) + r + o;
                return (e << a | e >>> 32 - a) + t
            }
            function C(e, t, n, i, r, a, o) {
                e = e + (t & i | n & ~i) + r + o;
                return (e << a | e >>> 32 - a) + t
            }
            function T(e, t, n, i, r, a, o) {
                e = e + (t ^ n ^ i) + r + o;
                return (e << a | e >>> 32 - a) + t
            }
            function M(e, t, n, i, r, a, o) {
                e = e + (n ^ (t | ~i)) + r + o;
                return (e << a | e >>> 32 - a) + t
            }
            for (var e = _, t = e.lib, n = t.WordArray, i = t.Hasher, t = e.algo, k = [], r = 0; 64 > r; r++) {
                k[r] = 4294967296 * o.abs(o.sin(r + 1)) | 0
            }
            t = t.MD5 = i.extend({
                _doReset: function e() {
                    this._hash = new n.init([1732584193, 4023233417, 2562383102, 271733878])
                },
                _doProcessBlock: function e(t, n) {
                    for (var i = 0; 16 > i; i++) {
                        var r = n + i
                          , a = t[r];
                        t[r] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360
                    }
                    var i = this._hash.words
                      , r = t[n + 0]
                      , a = t[n + 1]
                      , o = t[n + 2]
                      , s = t[n + 3]
                      , l = t[n + 4]
                      , u = t[n + 5]
                      , f = t[n + 6]
                      , d = t[n + 7]
                      , c = t[n + 8]
                      , h = t[n + 9]
                      , p = t[n + 10]
                      , v = t[n + 11]
                      , m = t[n + 12]
                      , y = t[n + 13]
                      , g = t[n + 14]
                      , S = t[n + 15]
                      , b = i[0]
                      , w = i[1]
                      , P = i[2]
                      , _ = i[3]
                      , b = D(b, w, P, _, r, 7, k[0])
                      , _ = D(_, b, w, P, a, 12, k[1])
                      , P = D(P, _, b, w, o, 17, k[2])
                      , w = D(w, P, _, b, s, 22, k[3])
                      , b = D(b, w, P, _, l, 7, k[4])
                      , _ = D(_, b, w, P, u, 12, k[5])
                      , P = D(P, _, b, w, f, 17, k[6])
                      , w = D(w, P, _, b, d, 22, k[7])
                      , b = D(b, w, P, _, c, 7, k[8])
                      , _ = D(_, b, w, P, h, 12, k[9])
                      , P = D(P, _, b, w, p, 17, k[10])
                      , w = D(w, P, _, b, v, 22, k[11])
                      , b = D(b, w, P, _, m, 7, k[12])
                      , _ = D(_, b, w, P, y, 12, k[13])
                      , P = D(P, _, b, w, g, 17, k[14])
                      , w = D(w, P, _, b, S, 22, k[15])
                      , b = C(b, w, P, _, a, 5, k[16])
                      , _ = C(_, b, w, P, f, 9, k[17])
                      , P = C(P, _, b, w, v, 14, k[18])
                      , w = C(w, P, _, b, r, 20, k[19])
                      , b = C(b, w, P, _, u, 5, k[20])
                      , _ = C(_, b, w, P, p, 9, k[21])
                      , P = C(P, _, b, w, S, 14, k[22])
                      , w = C(w, P, _, b, l, 20, k[23])
                      , b = C(b, w, P, _, h, 5, k[24])
                      , _ = C(_, b, w, P, g, 9, k[25])
                      , P = C(P, _, b, w, s, 14, k[26])
                      , w = C(w, P, _, b, c, 20, k[27])
                      , b = C(b, w, P, _, y, 5, k[28])
                      , _ = C(_, b, w, P, o, 9, k[29])
                      , P = C(P, _, b, w, d, 14, k[30])
                      , w = C(w, P, _, b, m, 20, k[31])
                      , b = T(b, w, P, _, u, 4, k[32])
                      , _ = T(_, b, w, P, c, 11, k[33])
                      , P = T(P, _, b, w, v, 16, k[34])
                      , w = T(w, P, _, b, g, 23, k[35])
                      , b = T(b, w, P, _, a, 4, k[36])
                      , _ = T(_, b, w, P, l, 11, k[37])
                      , P = T(P, _, b, w, d, 16, k[38])
                      , w = T(w, P, _, b, p, 23, k[39])
                      , b = T(b, w, P, _, y, 4, k[40])
                      , _ = T(_, b, w, P, r, 11, k[41])
                      , P = T(P, _, b, w, s, 16, k[42])
                      , w = T(w, P, _, b, f, 23, k[43])
                      , b = T(b, w, P, _, h, 4, k[44])
                      , _ = T(_, b, w, P, m, 11, k[45])
                      , P = T(P, _, b, w, S, 16, k[46])
                      , w = T(w, P, _, b, o, 23, k[47])
                      , b = M(b, w, P, _, r, 6, k[48])
                      , _ = M(_, b, w, P, d, 10, k[49])
                      , P = M(P, _, b, w, g, 15, k[50])
                      , w = M(w, P, _, b, u, 21, k[51])
                      , b = M(b, w, P, _, m, 6, k[52])
                      , _ = M(_, b, w, P, s, 10, k[53])
                      , P = M(P, _, b, w, p, 15, k[54])
                      , w = M(w, P, _, b, a, 21, k[55])
                      , b = M(b, w, P, _, c, 6, k[56])
                      , _ = M(_, b, w, P, S, 10, k[57])
                      , P = M(P, _, b, w, f, 15, k[58])
                      , w = M(w, P, _, b, y, 21, k[59])
                      , b = M(b, w, P, _, l, 6, k[60])
                      , _ = M(_, b, w, P, v, 10, k[61])
                      , P = M(P, _, b, w, o, 15, k[62])
                      , w = M(w, P, _, b, h, 21, k[63]);
                    i[0] = i[0] + b | 0;
                    i[1] = i[1] + w | 0;
                    i[2] = i[2] + P | 0;
                    i[3] = i[3] + _ | 0
                },
                _doFinalize: function e() {
                    var t = this._data
                      , n = t.words
                      , i = 8 * this._nDataBytes
                      , r = 8 * t.sigBytes;
                    n[r >>> 5] |= 128 << 24 - r % 32;
                    var a = o.floor(i / 4294967296);
                    n[(r + 64 >>> 9 << 4) + 15] = (a << 8 | a >>> 24) & 16711935 | (a << 24 | a >>> 8) & 4278255360;
                    n[(r + 64 >>> 9 << 4) + 14] = (i << 8 | i >>> 24) & 16711935 | (i << 24 | i >>> 8) & 4278255360;
                    t.sigBytes = 4 * (n.length + 1);
                    this._process();
                    t = this._hash;
                    n = t.words;
                    for (i = 0; 4 > i; i++) {
                        r = n[i],
                        n[i] = (r << 8 | r >>> 24) & 16711935 | (r << 24 | r >>> 8) & 4278255360
                    }
                    return t
                },
                clone: function e() {
                    var t = i.clone.call(this);
                    t._hash = this._hash.clone();
                    return t
                }
            });
            e.MD5 = i._createHelper(t);
            e.HmacMD5 = i._createHmacHelper(t)
        }
        )(Math);
        (function() {
            var e = _
              , t = e.lib
              , n = t.Base
              , f = t.WordArray
              , t = e.algo
              , i = t.EvpKDF = n.extend({
                cfg: n.extend({
                    keySize: 4,
                    hasher: t.MD5,
                    iterations: 1
                }),
                init: function e(t) {
                    this.cfg = this.cfg.extend(t)
                },
                compute: function e(t, n) {
                    for (var i = this.cfg, r = i.hasher.create(), a = f.create(), o = a.words, s = i.keySize, i = i.iterations; o.length < s; ) {
                        l && r.update(l);
                        var l = r.update(t).finalize(n);
                        r.reset();
                        for (var u = 1; u < i; u++) {
                            l = r.finalize(l),
                            r.reset()
                        }
                        a.concat(l)
                    }
                    a.sigBytes = 4 * s;
                    return a
                }
            });
            e.EvpKDF = function(e, t, n) {
                return i.create(n).compute(e, t)
            }
        }
        )();
        _.lib.Cipher || function(o) {
            var e = _
              , t = e.lib
              , n = t.Base
              , s = t.WordArray
              , i = t.BufferedBlockAlgorithm
              , r = e.enc.Base64
              , a = e.algo.EvpKDF
              , l = t.Cipher = i.extend({
                cfg: n.extend(),
                createEncryptor: function e(t, n) {
                    return this.create(this._ENC_XFORM_MODE, t, n)
                },
                createDecryptor: function e(t, n) {
                    return this.create(this._DEC_XFORM_MODE, t, n)
                },
                init: function e(t, n, i) {
                    this.cfg = this.cfg.extend(i);
                    this._xformMode = t;
                    this._key = n;
                    this.reset()
                },
                reset: function e() {
                    i.reset.call(this);
                    this._doReset()
                },
                process: function e(t) {
                    this._append(t);
                    return this._process()
                },
                finalize: function e(t) {
                    t && this._append(t);
                    return this._doFinalize()
                },
                keySize: 4,
                ivSize: 4,
                _ENC_XFORM_MODE: 1,
                _DEC_XFORM_MODE: 2,
                _createHelper: function e(r) {
                    return {
                        encrypt: function e(t, n, i) {
                            return ("string" == typeof n ? p : h).encrypt(r, t, n, i)
                        },
                        decrypt: function e(t, n, i) {
                            return ("string" == typeof n ? p : h).decrypt(r, t, n, i)
                        }
                    }
                }
            });
            t.StreamCipher = l.extend({
                _doFinalize: function e() {
                    return this._process(!0)
                },
                blockSize: 1
            });
            var u = e.mode = {}
              , f = function e(t, n, i) {
                var r = this._iv;
                r ? this._iv = o : r = this._prevBlock;
                for (var a = 0; a < i; a++) {
                    t[n + a] ^= r[a]
                }
            }
              , d = (t.BlockCipherMode = n.extend({
                createEncryptor: function e(t, n) {
                    return this.Encryptor.create(t, n)
                },
                createDecryptor: function e(t, n) {
                    return this.Decryptor.create(t, n)
                },
                init: function e(t, n) {
                    this._cipher = t;
                    this._iv = n
                }
            })).extend();
            d.Encryptor = d.extend({
                processBlock: function e(t, n) {
                    var i = this._cipher
                      , r = i.blockSize;
                    f.call(this, t, n, r);
                    i.encryptBlock(t, n);
                    this._prevBlock = t.slice(n, n + r)
                }
            });
            d.Decryptor = d.extend({
                processBlock: function e(t, n) {
                    var i = this._cipher
                      , r = i.blockSize
                      , a = t.slice(n, n + r);
                    i.decryptBlock(t, n);
                    f.call(this, t, n, r);
                    this._prevBlock = a
                }
            });
            u = u.CBC = d;
            d = (e.pad = {}).Pkcs7 = {
                pad: function e(t, n) {
                    for (var i = 4 * n, i = i - t.sigBytes % i, r = i << 24 | i << 16 | i << 8 | i, a = [], o = 0; o < i; o += 4) {
                        a.push(r)
                    }
                    i = s.create(a, i);
                    t.concat(i)
                },
                unpad: function e(t) {
                    t.sigBytes -= t.words[t.sigBytes - 1 >>> 2] & 255
                }
            };
            t.BlockCipher = l.extend({
                cfg: l.cfg.extend({
                    mode: u,
                    padding: d
                }),
                reset: function e() {
                    l.reset.call(this);
                    var t = this.cfg
                      , n = t.iv
                      , t = t.mode;
                    if (this._xformMode == this._ENC_XFORM_MODE)
                        var i = t.createEncryptor;
                    else
                        i = t.createDecryptor,
                        this._minBufferSize = 1;
                    this._mode = i.call(t, this, n && n.words)
                },
                _doProcessBlock: function e(t, n) {
                    this._mode.processBlock(t, n)
                },
                _doFinalize: function e() {
                    var t = this.cfg.padding;
                    if (this._xformMode == this._ENC_XFORM_MODE) {
                        t.pad(this._data, this.blockSize);
                        var n = this._process(!0)
                    } else
                        n = this._process(!0),
                        t.unpad(n);
                    return n
                },
                blockSize: 4
            });
            var c = t.CipherParams = n.extend({
                init: function e(t) {
                    this.mixIn(t)
                },
                toString: function e(t) {
                    return (t || this.formatter).stringify(this)
                }
            })
              , u = (e.format = {}).OpenSSL = {
                stringify: function e(t) {
                    var n = t.ciphertext;
                    t = t.salt;
                    return (t ? s.create([1398893684, 1701076831]).concat(t).concat(n) : n).toString(r)
                },
                parse: function e(t) {
                    t = r.parse(t);
                    var n = t.words;
                    if (1398893684 == n[0] && 1701076831 == n[1]) {
                        var i = s.create(n.slice(2, 4));
                        n.splice(0, 4);
                        t.sigBytes -= 16
                    }
                    return c.create({
                        ciphertext: t,
                        salt: i
                    })
                }
            }
              , h = t.SerializableCipher = n.extend({
                cfg: n.extend({
                    format: u
                }),
                encrypt: function e(t, n, i, r) {
                    r = this.cfg.extend(r);
                    var a = t.createEncryptor(i, r);
                    n = a.finalize(n);
                    a = a.cfg;
                    return c.create({
                        ciphertext: n,
                        key: i,
                        iv: a.iv,
                        algorithm: t,
                        mode: a.mode,
                        padding: a.padding,
                        blockSize: t.blockSize,
                        formatter: r.format
                    })
                },
                decrypt: function e(t, n, i, r) {
                    r = this.cfg.extend(r);
                    n = this._parse(n, r.format);
                    return t.createDecryptor(i, r).finalize(n.ciphertext)
                },
                _parse: function e(t, n) {
                    return "string" == typeof t ? n.parse(t, this) : t
                }
            })
              , e = (e.kdf = {}).OpenSSL = {
                execute: function e(t, n, i, r) {
                    r || (r = s.random(8));
                    t = a.create({
                        keySize: n + i
                    }).compute(t, r);
                    i = s.create(t.words.slice(n), 4 * i);
                    t.sigBytes = 4 * n;
                    return c.create({
                        key: t,
                        iv: i,
                        salt: r
                    })
                }
            }
              , p = t.PasswordBasedCipher = h.extend({
                cfg: h.cfg.extend({
                    kdf: e
                }),
                encrypt: function e(t, n, i, r) {
                    r = this.cfg.extend(r);
                    i = r.kdf.execute(i, t.keySize, t.ivSize);
                    r.iv = i.iv;
                    t = h.encrypt.call(this, t, n, i.key, r);
                    t.mixIn(i);
                    return t
                },
                decrypt: function e(t, n, i, r) {
                    r = this.cfg.extend(r);
                    n = this._parse(n, r.format);
                    i = r.kdf.execute(i, t.keySize, t.ivSize, n.salt);
                    r.iv = i.iv;
                    return h.decrypt.call(this, t, n, i.key, r)
                }
            })
        }();
        (function() {
            for (var e = _, t = e.lib.BlockCipher, n = e.algo, s = [], r = [], i = [], a = [], o = [], l = [], u = [], f = [], d = [], c = [], h = [], p = 0; 256 > p; p++) {
                h[p] = 128 > p ? p << 1 : p << 1 ^ 283
            }
            for (var v = 0, m = 0, p = 0; 256 > p; p++) {
                var y = m ^ m << 1 ^ m << 2 ^ m << 3 ^ m << 4
                  , y = y >>> 8 ^ y & 255 ^ 99;
                s[v] = y;
                r[y] = v;
                var g = h[v]
                  , S = h[g]
                  , b = h[S]
                  , w = 257 * h[y] ^ 16843008 * y;
                i[v] = w << 24 | w >>> 8;
                a[v] = w << 16 | w >>> 16;
                o[v] = w << 8 | w >>> 24;
                l[v] = w;
                w = 16843009 * b ^ 65537 * S ^ 257 * g ^ 16843008 * v;
                u[y] = w << 24 | w >>> 8;
                f[y] = w << 16 | w >>> 16;
                d[y] = w << 8 | w >>> 24;
                c[y] = w;
                v ? (v = g ^ h[h[h[b ^ g]]],
                m ^= h[h[m]]) : v = m = 1
            }
            var P = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
              , n = n.AES = t.extend({
                _doReset: function e() {
                    for (var t = this._key, n = t.words, i = t.sigBytes / 4, t = 4 * ((this._nRounds = i + 6) + 1), r = this._keySchedule = [], a = 0; a < t; a++) {
                        if (a < i)
                            r[a] = n[a];
                        else {
                            var o = r[a - 1];
                            a % i ? 6 < i && 4 == a % i && (o = s[o >>> 24] << 24 | s[o >>> 16 & 255] << 16 | s[o >>> 8 & 255] << 8 | s[o & 255]) : (o = o << 8 | o >>> 24,
                            o = s[o >>> 24] << 24 | s[o >>> 16 & 255] << 16 | s[o >>> 8 & 255] << 8 | s[o & 255],
                            o ^= P[a / i | 0] << 24);
                            r[a] = r[a - i] ^ o
                        }
                    }
                    n = this._invKeySchedule = [];
                    for (i = 0; i < t; i++) {
                        a = t - i,
                        o = i % 4 ? r[a] : r[a - 4],
                        n[i] = 4 > i || 4 >= a ? o : u[s[o >>> 24]] ^ f[s[o >>> 16 & 255]] ^ d[s[o >>> 8 & 255]] ^ c[s[o & 255]]
                    }
                },
                encryptBlock: function e(t, n) {
                    this._doCryptBlock(t, n, this._keySchedule, i, a, o, l, s)
                },
                decryptBlock: function e(t, n) {
                    var i = t[n + 1];
                    t[n + 1] = t[n + 3];
                    t[n + 3] = i;
                    this._doCryptBlock(t, n, this._invKeySchedule, u, f, d, c, r);
                    i = t[n + 1];
                    t[n + 1] = t[n + 3];
                    t[n + 3] = i
                },
                _doCryptBlock: function e(t, n, i, r, a, o, s, l) {
                    for (var u = this._nRounds, f = t[n] ^ i[0], d = t[n + 1] ^ i[1], c = t[n + 2] ^ i[2], h = t[n + 3] ^ i[3], p = 4, v = 1; v < u; v++) {
                        var m = r[f >>> 24] ^ a[d >>> 16 & 255] ^ o[c >>> 8 & 255] ^ s[h & 255] ^ i[p++]
                          , y = r[d >>> 24] ^ a[c >>> 16 & 255] ^ o[h >>> 8 & 255] ^ s[f & 255] ^ i[p++]
                          , g = r[c >>> 24] ^ a[h >>> 16 & 255] ^ o[f >>> 8 & 255] ^ s[d & 255] ^ i[p++]
                          , h = r[h >>> 24] ^ a[f >>> 16 & 255] ^ o[d >>> 8 & 255] ^ s[c & 255] ^ i[p++]
                          , f = m
                          , d = y
                          , c = g
                    }
                    m = (l[f >>> 24] << 24 | l[d >>> 16 & 255] << 16 | l[c >>> 8 & 255] << 8 | l[h & 255]) ^ i[p++];
                    y = (l[d >>> 24] << 24 | l[c >>> 16 & 255] << 16 | l[h >>> 8 & 255] << 8 | l[f & 255]) ^ i[p++];
                    g = (l[c >>> 24] << 24 | l[h >>> 16 & 255] << 16 | l[f >>> 8 & 255] << 8 | l[d & 255]) ^ i[p++];
                    h = (l[h >>> 24] << 24 | l[f >>> 16 & 255] << 16 | l[d >>> 8 & 255] << 8 | l[c & 255]) ^ i[p++];
                    t[n] = m;
                    t[n + 1] = y;
                    t[n + 2] = g;
                    t[n + 3] = h
                },
                keySize: 8
            });
            e.AES = t._createHelper(n)
        }
        )();
        t.default = _
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = function() {
            var e = function() {
                function e() {
                    r(this, e)
                }
                i(e, [{
                    key: "createClientObject",
                    value: function e(t, n, i, r) {
                        return {
                            socket: t,
                            id: n,
                            playURL: i,
                            deviceSerial: r.deviceSerial || "",
                            verificationCode: r.verificationCode || "",
                            resolve: null,
                            reject: null
                        }
                    }
                }, {
                    key: "playCmd",
                    value: function e(t) {
                        var n = {
                            sequence: 0,
                            cmd: "realplay",
                            deviceSerial: t.deviceSerial,
                            verificationCode: t.verificationCode,
                            url: t.playURL
                        };
                        return JSON.stringify(n)
                    }
                }, {
                    key: "playbackCmd",
                    value: function e(t, n, i) {
                        var r = {
                            sequence: 0,
                            cmd: "playback",
                            deviceSerial: t.deviceSerial,
                            verificationCode: t.verificationCode,
                            url: t.playURL,
                            startTime: n,
                            endTime: i
                        };
                        return JSON.stringify(r)
                    }
                }]);
                return e
            }();
            return e
        }();
        t.LocalService = a
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.JSPlayCtrl = undefined;
        var r = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        var i = n(13);
        var a = o(i);
        function o(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function s(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var w = 0;
        var P = 1;
        var f = 2;
        var l = 3;
        var u = 4;
        var d = 5;
        var c = 6;
        var h = 7;
        var _ = 11;
        var p = 12;
        var v = 13;
        var m = 14;
        var y = 15;
        var D = 16;
        var g = 17;
        var S = 18;
        var b = 19;
        var C = 20;
        var T = 21;
        var M = 22;
        var k = 24;
        var x = 25;
        var I = 26;
        var R = 27;
        var A = 28;
        var E = 29;
        var z = 30;
        var B = 31;
        var O = 33;
        var F = 34;
        var L = 99;
        var U = 40;
        var N = 41;
        var W = 42;
        var q = 43;
        var H = 44;
        var J = 45;
        var Y = 46;
        var j = 47;
        var V = 48;
        var G = 60;
        var X = 61;
        var K = 62;
        var $ = 63;
        var Z = 71;
        var Q = 72;
        var ee = 73;
        var te = 74;
        var ne = 75;
        var ie = 76;
        var re = 77;
        var ae = 78;
        var oe = 79;
        var se = 100;
        var le = 101;
        var ue = 1;
        var fe = 2;
        var de = 3;
        var ce = 4;
        var he = 5;
        var pe = 6;
        var ve = 1;
        var me = 2;
        var ye = 8;
        var ge = 16;
        var Se = 8e3;
        var be = 16e3;
        var we = 24e3;
        var Pe = 32e3;
        var _e = 48e3;
        var De = 64e3;
        var Ce = {
            AUDIO_G711_U: 28944,
            AUDIO_G711_A: 28945,
            AUDIO_G722_1: 29217,
            AUDIO_G726_U: 29280,
            AUDIO_G726_A: 29281,
            AUDIO_G726_2: 29282,
            AUDIO_AACLC: 8193,
            AUDIO_MPEG: 8192,
            AUDIO_ADPCM: 4096,
            AUDIO_NULL: 0
        };
        var Te = 0;
        var Me = 1;
        var ke = 1;
        var xe = 256;
        var Ie = 28944;
        var Re = 28945;
        var Ae = 0;
        var Ee = 1;
        var ze = "BMP";
        var Be = "JPEG";
        var Oe = 0;
        var Fe = 1;
        var Le = 15;
        var Ue = 8;
        var Ne = 1;
        var We = 25;
        var qe = 5;
        var He = 2;
        var Je = 5 * 1024 * 1024;
        var Ye = 100;
        var je = 1024 * 20;
        var Ve = 200;
        var Ge = 100;
        var Xe = 20;
        var Ke = 100;
        var $e = 200;
        var Ze = 1;
        var Qe = 0;
        var et = {
            left: 0,
            top: 0,
            right: 0,
            bottom: 0
        };
        var tt = {
            width: 0,
            height: 0,
            frameNum: 0,
            yuvData: null
        };
        var nt = {
            width: 0,
            height: 0,
            frameNum: 0,
            yuvData: null
        };
        var it = {
            sampleRate: 0,
            channel: 0,
            bitsPerSample: 0,
            length: 0,
            pcmData: null
        };
        var rt = false;
        var at = false;
        var ot = false;
        var st = 0;
        var lt = {
            id: null,
            cmd: null,
            data: null,
            errorCode: 0,
            status: null
        };
        var ut = t.JSPlayCtrl = function() {
            function i(e, t, o, n) {
                s(this, i);
                if (e != null && e !== undefined && typeof e === "string") {
                    this.szBasePath = e
                } else {
                    return w
                }
                if (t && typeof t === "function") {
                    this.fnCallBack = t
                } else {
                    return w
                }
                if (typeof n === "string") {
                    this.staticPath = n
                }
                this.decodeWorker = null;
                this.streamOpenMode = null;
                this.bOpenStream = false;
                this.iFrameNumOrTime = 0;
                this.bSetPlayPositionType = Qe;
                this.audioRenderer = null;
                this.aAudioBuffer = [];
                this.iAudioBufferSize = 0;
                this.bWriteAudEnc = false;
                this.iAudioEncBufferSize = 0;
                this.aAudioEncBuffer = [];
                this.oSuperRender = null;
                this.aVideoFrameBuffer = [];
                this.YUVBufferSize = Ne;
                this.szOSDTime = null;
                this.bWriteYUVData = false;
                this.iYUV10size = 0;
                this.aVideoYUVBuffer = [];
                this.bWritePCMData = false;
                this.iAudioBuffer500Size = 0;
                this.aAudioPCMBuffer = [];
                this.bWriteRawData = false;
                this.iRawDataSize = 0;
                this.aRawDataBuffer = [];
                this.bWriteRTPData = false;
                this.iRTPDataSize = 0;
                this.aRTPDataBuffer = [];
                this.downloadRTP = false;
                this.rtpNum = 0;
                this.bPlaySound = false;
                this.bPlay = false;
                this.bPause = false;
                this.bOnebyOne = false;
                this.bPlayRateChange = false;
                this.bAudioTypeSupport = true;
                this.audioNum = 0;
                this.videoNum = 0;
                this.SetPlayPositionFlag = false;
                this.FrameForwardLen = 1;
                this.bOnlyPlaySound = false;
                this.dataCallBackFun = null;
                this.YUVBufSizeCBFun = null;
                this.AudEncodeDataCBFun = null;
                this.DecCallBackFun = null;
                this.DisplayCallBackFun = null;
                this.PCMCallBackFun = null;
                this.DecInfoYUV = tt;
                this.DisplayInfoYUV = nt;
                this.DecInfoPCM = it;
                this.nWidth = 0;
                this.nHeight = 0;
                this.nSPSCropLeft = 0;
                this.nSPSCropRight = 0;
                this.nSPSCropTop = 0;
                this.nSPSCropBottom = 0;
                this.sCanvasId = null;
                this.aDisplayBuf = null;
                this.bVisibility = true;
                this.nDecFrameType = Oe;
                this.iCanvasWidth = 0;
                this.iCanvasHeight = 0;
                this.iZoomNum = 0;
                this.iRatio_x = 1;
                this.iRatio_y = 1;
                this.stDisplayRect = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                };
                this.bDisRect = false;
                this.stYUVRect = {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                };
                this.aInputDataLens = [];
                this.aInputDataBuffer = [];
                this.bIsGetYUV = false;
                this.bIsFirstFrame = true;
                this.iInputMaxBufSize = Je;
                this.bIsInput = false;
                this.bIsInputBufOver = false;
                this.iInputDataLen = je;
                var b = this;
                this.setCallBack = function(e, t, n, i, r) {
                    var a = lt;
                    a.id = o;
                    a.cmd = t;
                    a.data = n;
                    a.errorCode = i;
                    a.status = r;
                    e.fnCallBack(a)
                }
                ;
                if (!rt) {
                    rt = true;
                    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                        if (ot) {
                            console.log(">>>JS AudioRenderer.js load finish!")
                        }
                    }
                }
                if (!at) {
                    at = true;
                    if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                        if (ot) {
                            console.log(">>>JS SuperRender_10.js load finish!")
                        }
                    }
                }
                this.convertErrorCode = function(e) {
                    switch (e) {
                    case 1:
                        return P;
                    case 98:
                        return w;
                    default:
                        return e
                    }
                }
                ;
                this.arrayBufferCopy = function(e) {
                    var t = e.byteLength;
                    var n = new Uint8Array(t);
                    var i = new Uint8Array(e);
                    var r = 0;
                    for (r = 0; r < t; r++) {
                        n[r] = i[r]
                    }
                    return n
                }
                ;
                this.inputDataFun = function() {
                    var e;
                    var t;
                    var n = 0;
                    b.bIsGetYUV = false;
                    if (b.bIsInputBufOver) {
                        if (ot) {
                            console.log(">>>JS inputDataFun over!")
                        }
                        e = new Uint8Array(1);
                        t = new Uint8Array(e);
                        var i = {
                            command: "InputData",
                            data: t.buffer,
                            dataSize: 0
                        };
                        b.decodeWorker.postMessage(i, [i.data])
                    } else {
                        if (b.bPlay && (!b.bPause || b.bOnebyOne) || this.bOnlyPlaySound) {
                            while (b.aInputDataLens.length > 0) {
                                n += b.aInputDataLens.shift();
                                if (n > b.iInputDataLen) {
                                    break
                                }
                            }
                            if (ot) {
                                console.log(">>>JS inputDataFun-len:%d,totalSize:%d", n, b.aInputDataBuffer.length)
                            }
                            e = b.aInputDataBuffer.splice(0, n);
                            t = new Uint8Array(e);
                            var i = {
                                command: "InputData",
                                data: t.buffer,
                                dataSize: n
                            };
                            b.decodeWorker.postMessage(i, [i.data])
                        }
                    }
                    e = null;
                    t = null
                }
                ;
                this.getPic = function(e, t) {
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (e && typeof e === "function") {
                        this.dataCallBackFun = e
                    } else {
                        return w
                    }
                    if (0 === this.iZoomNum) {
                        this.stYUVRect.left = 0;
                        this.stYUVRect.top = 0;
                        this.stYUVRect.right = 0;
                        this.stYUVRect.bottom = 0
                    } else {
                        if (0 === this.iCanvasWidth || 0 === this.iCanvasHeight) {
                            this.stYUVRect.left = 0;
                            this.stYUVRect.top = 0;
                            this.stYUVRect.right = 0;
                            this.stYUVRect.bottom = 0
                        } else {
                            var n = this.nWidth / this.iCanvasWidth;
                            var i = this.nHeight / this.iCanvasHeight;
                            this.stYUVRect.left = Math.round(this.stDisplayRect.left * n);
                            this.stYUVRect.top = Math.round(this.stDisplayRect.top * i);
                            this.stYUVRect.right = Math.round(this.stDisplayRect.right * n);
                            this.stYUVRect.bottom = Math.round(this.stDisplayRect.bottom * i)
                        }
                        if (this.stYUVRect.right - this.stYUVRect.left < 32 || this.stYUVRect.bottom - this.stYUVRect.top < 32) {
                            return w
                        }
                    }
                    if (this.aDisplayBuf == null) {
                        return f
                    }
                    var r = this.arrayBufferCopy(this.aDisplayBuf);
                    var a = {
                        command: t,
                        data: r.buffer,
                        width: this.nWidth,
                        height: this.nHeight,
                        rect: this.stYUVRect
                    };
                    if (ot) {
                        console.log(">>>JS capture nWidth = %d,nWidth = %d", this.nWidth, this.nHeight)
                    }
                    this.decodeWorker.postMessage(a, [a.data]);
                    return P
                }
                ;
                this.createWorker = function(S) {
                    if (window.Worker) {
                        if (this.decodeWorker == null) {
                            var e = new Blob([(0,
                            a.default)(this.staticPath)]);
                            var t = URL.createObjectURL(e);
                            this.decodeWorker = new Worker(t);
                            if (ot) {
                                console.log(">>>JS  createWorker success!!!!!!!!!!!!!!!!!!!!!!!!!")
                            }
                            if (this.decodeWorker == null) {
                                return G
                            }
                        }
                        this.decodeWorker.onmessage = function(e) {
                            var t = null;
                            var n = e.data;
                            switch (n.function) {
                            case "printLog":
                                console.log("print JSPlayerSDK log failed");
                                break;
                            case "loaded":
                                t = "loaded";
                                S.setCallBack(S, "loaded", 0, 0, true);
                                break;
                            case "SetStreamOpenMode":
                                t = "SetStreamOpenMode";
                                break;
                            case "OpenStream":
                                t = "OpenStream";
                                if (1 === n.errorCode) {
                                    b.bOpenStream = true;
                                    return
                                }
                                break;
                            case "InputData":
                                t = "InputData";
                                if (n.errorCode === _) {
                                    b.bIsInputBufOver = true;
                                    b.inputDataFun();
                                    if (ot) {
                                        console.log(">>>JS InputData PLAYM4_BUF_OVER")
                                    }
                                }
                                if (n.errorCode === B) {
                                    b.bIsInputBufOver = false;
                                    if (ot) {
                                        console.log(">>>JS InputData PLAYM4_NEED_MORE_DATA")
                                    }
                                }
                                break;
                            case "GetFrameData":
                                t = "GetFrameData";
                                if (!b.bOnlyPlaySound) {
                                    if (ot) {
                                        console.log(">>>JS mainthread display GetFrameData 1-1")
                                    }
                                    if (n.data != null && n.frameInfo != null) {
                                        var i = n.frameInfo.width;
                                        var r = n.frameInfo.height
                                    }
                                    if (!b.bPlay) {
                                        return
                                    }
                                    if (!b.bIsFirstFrame && n.errorCode === B) {
                                        b.bIsInputBufOver = false;
                                        setTimeout(b.inputDataFun(), 5);
                                        break
                                    } else if (b.bIsInputBufOver) {
                                        b.inputDataFun()
                                    } else {
                                        if (n.type === "videoType") {
                                            if (b.aInputDataLens.length > 0 && b.bIsInput) {
                                                b.inputDataFun();
                                                b.bIsInput = false
                                            } else {
                                                b.bIsGetYUV = true
                                            }
                                            b.bIsFirstFrame = false
                                        }
                                    }
                                }
                                if (ot) {
                                    console.log(">>>JS mainthread display GetFrameData bVisibility:" + b.bVisibility)
                                }
                                if (b.bVisibility) {
                                    if (P === n.errorCode) {
                                        switch (n.type) {
                                        case "videoType":
                                            if (ot) {
                                                console.log(">>>JS mainthread display GetFrameData type:" + n.type)
                                            }
                                            if (n.data == null || n.frameInfo == null) {
                                                return w
                                            }
                                            if (b.DecCallBackFun != null) {
                                                if (ot) {
                                                    console.log(">>>JS MainThread-GetYUVData")
                                                }
                                                b.DecInfoYUV.height = n.frameInfo.height;
                                                b.DecInfoYUV.width = n.frameInfo.width;
                                                b.DecInfoYUV.frameNum = n.frameInfo.frameNum;
                                                b.DecInfoYUV.yuvData = new Uint8Array(n.data);
                                                b.DecCallBackFun(b.DecInfoYUV)
                                            }
                                            b.bIsFirstFrame = false;
                                            S.nWidth = n.frameInfo.width;
                                            S.nHeight = n.frameInfo.height;
                                            S.nSPSCropLeft = n.frameInfo.cropLeft;
                                            S.nSPSCropRight = n.frameInfo.cropRight;
                                            S.nSPSCropTop = n.frameInfo.cropTop;
                                            S.nSPSCropBottom = n.frameInfo.cropBottom;
                                            var a = new Object;
                                            a.data = n.data;
                                            a.osdTime = n.osd;
                                            a.nWidth = n.frameInfo.width;
                                            a.nHeight = n.frameInfo.height;
                                            a.frameNum = n.frameInfo.frameNum;
                                            a.timeStamp = n.frameInfo.timeStamp;
                                            if (S.bWriteYUVData) {
                                                var o = new Uint8Array(n.data);
                                                var s = S.aVideoYUVBuffer.length;
                                                for (var l = 0, u = o.length; l < u; l++) {
                                                    S.aVideoYUVBuffer[s + l] = o[l]
                                                }
                                                S.iYUV10size++;
                                                o = null
                                            }
                                            if (S.bWriteYUVData && S.iYUV10size >= Xe) {
                                                var f = new Uint8Array(S.aVideoYUVBuffer);
                                                S.downloadFile(f, "videoYUV.data");
                                                S.aVideoYUVBuffer.splice(0, S.aVideoYUVBuffer.length);
                                                S.bWriteYUVData = false;
                                                S.iYUV10size = 0;
                                                f = null
                                            }
                                            if (ot) {
                                                console.log(">>>JS mainthread getVideoInfo Width:" + a.nWidth + ",height:" + a.nHeight + ",frameNum:" + a.frameNum)
                                            }
                                            S.aVideoFrameBuffer.push(a);
                                            a = null;
                                            var d = S.aVideoFrameBuffer.length;
                                            if (d > qe) {
                                                if (ot) {
                                                    console.log(">>>JS render loose frame iYUVNum:%d", d)
                                                }
                                                if (!S.bOnebyOne) {
                                                    S.aVideoFrameBuffer.splice(0, He)
                                                }
                                            }
                                            if (S.SetPlayPositionFlag && S.bSetPlayPositionType === Ze && (n.frameInfo.frameNum === S.iFrameNumOrTime || n.frameInfo.timeStamp === S.iFrameNumOrTime)) {
                                                S.setCallBack(S, "SetFrameNum", 0, 0, false);
                                                S.bIsFirstFrame = true;
                                                break
                                            }
                                            if (S.bOnebyOne) {
                                                if (S.aVideoFrameBuffer.length >= Le) {
                                                    S.setCallBack(S, "OnebyOne", 0, 0, false);
                                                    S.bIsFirstFrame = true;
                                                    break
                                                }
                                            }
                                            break;
                                        case "audioType":
                                            if (ot) {
                                                console.log(">>>JS mainthread display GetFrameData 2-3 type:" + n.type + ",bPlaySound:" + S.bPlaySound + ",!bPlayRateChange:" + !S.bPlayRateChange + ",bOnlyPlaySound:" + b.bOnlyPlaySound)
                                            }
                                            if (S.bPlaySound && !S.bPlayRateChange || b.bOnlyPlaySound) {
                                                if (ot) {
                                                    console.log(">>>JS mainthread display GetFrameData 2-4 type" + n.type + "bOnlyPlaySound:" + b.bOnlyPlaySound)
                                                }
                                                if (b.PCMCallBackFun != null) {
                                                    if (ot) {
                                                        console.log(">>>JS MainThread-GetYUVData")
                                                    }
                                                    b.DecInfoPCM.sampleRate = n.frameInfo.samplesPerSec;
                                                    b.DecInfoPCM.channel = n.frameInfo.channels;
                                                    b.DecInfoPCM.bitsPerSample = n.frameInfo.bitsPerSample;
                                                    b.DecInfoPCM.pcmData = new Uint8Array(n.data);
                                                    b.DecInfoPCM.length = b.DecInfoPCM.pcmData.length;
                                                    b.PCMCallBackFun(b.DecInfoPCM)
                                                }
                                                var o = new Uint8Array(n.data);
                                                var s = S.aAudioBuffer.length;
                                                for (var l = 0, u = o.length; l < u; l++) {
                                                    S.aAudioBuffer[s + l] = o[l]
                                                }
                                                S.iAudioBufferSize++;
                                                o = null;
                                                if (ot) {
                                                    console.log(">>>JS play sound 1 iAudioBufferNum:%d, BufferLen:%d", S.iAudioBufferSize, S.aAudioBuffer.length)
                                                }
                                                if (S.bWritePCMData) {
                                                    var o = new Uint8Array(n.data);
                                                    var s = S.aAudioPCMBuffer.length;
                                                    for (var l = 0, u = o.length; l < u; l++) {
                                                        S.aAudioPCMBuffer[s + l] = o[l]
                                                    }
                                                    console.log("audio_type num:" + S.iAudioBuffer500Size + ", len:" + o.length);
                                                    S.iAudioBuffer500Size++;
                                                    o = null
                                                }
                                                if (S.bWritePCMData && S.iAudioBuffer500Size >= Ge) {
                                                    var c = new Uint8Array(S.aAudioPCMBuffer);
                                                    S.downloadFile(c, "audioPCM.data");
                                                    S.aAudioPCMBuffer.splice(0, S.aAudioPCMBuffer.length);
                                                    S.bWritePCMData = false;
                                                    S.iAudioBuffer500Size = 0;
                                                    c = null
                                                }
                                                if (S.iAudioBufferSize >= We) {
                                                    if (ot) {
                                                        console.log(">>>JS play sound 2 iAudioBufferNum:%d, BufferLen:%d", S.iAudioBufferSize, S.aAudioBuffer.length)
                                                    }
                                                    S.audioRenderer.Play(S.aAudioBuffer, S.aAudioBuffer.length, n.frameInfo);
                                                    if (ot) {
                                                        console.log(">>>JS mainthread display Audio push 3 sysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                                                    }
                                                    S.aAudioBuffer.splice(0, S.aAudioBuffer.length);
                                                    S.aAudioBuffer.length = 0;
                                                    S.iAudioBufferSize = 0
                                                }
                                            }
                                            break;
                                        case "privateType":
                                            if (ot) {
                                                console.log(">>>JS mainthread display GetFrameData 2-5 type" + n.type + "bOnlyPlaySound:" + b.bOnlyPlaySound)
                                            }
                                            break;
                                        default:
                                            if (ot) {
                                                console.log(">>>JS mainthread display GetFrameData 2-6 type:" + n.type + ",bOnlyPlaySound:" + b.bOnlyPlaySound)
                                            }
                                            break
                                        }
                                    } else {
                                        if (ot) {
                                            console.log(">>>JS mainthread GetFrameData is not Ok,errorCode:" + n.errorCode)
                                        }
                                    }
                                }
                                break;
                            case "GetRawData":
                                t = "GetRawData";
                                if (S.bWriteRawData) {
                                    var h = new Uint8Array(n.data);
                                    var p = S.aRawDataBuffer.length;
                                    for (var l = 0, u = h.length; l < u; l++) {
                                        S.aRawDataBuffer[p + l] = h[l]
                                    }
                                    S.iRawDataSize++;
                                    h = null
                                }
                                if (S.bWriteRawData && S.iRawDataSize >= Ke) {
                                    var v = new Uint8Array(S.aRawDataBuffer);
                                    S.downloadFile(v, "rawBuffer.data");
                                    S.aRawDataBuffer.splice(0, S.aRawDataBuffer.length);
                                    S.bWriteRawData = false;
                                    S.iRawDataSize = 0;
                                    v = null
                                }
                                break;
                            case "PlaySound":
                                t = "PlaySound";
                                break;
                            case "SetPlayPosition":
                                console.log(">>>JS mainthread SetPlayPosition error,errorCode:" + n.errorCode);
                                break;
                            case "GetJPEG":
                                t = "GetJPEG";
                                var m = n.data;
                                S.dataCallBackFun(m);
                                break;
                            case "GetBMP":
                                t = "GetBMP";
                                var y = n.data;
                                S.dataCallBackFun(y);
                                break;
                            case "GetAudEncodeData":
                                if (ot) {
                                    console.log(">>>JS MainThread-GetAudEncodeData 1")
                                }
                                t = "GetAudEncodeData";
                                if (P === n.errorCode) {
                                    if (b.AudEncodeDataCBFun != null) {
                                        if (ot) {
                                            console.log(">>>JS  GetAudEncodeData 1 dataSize" + n.dataSize + ", nSysTime:" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                                        }
                                        b.AudEncodeDataCBFun(new Uint8Array(n.data));
                                        if (ot) {
                                            console.log(">>>JS  GetAudEncodeData 2 dataSize" + n.dataSize + ", nSysTime:" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                                        }
                                    }
                                    if (S.bWriteAudEnc) {
                                        var o = new Uint8Array(n.data);
                                        var s = S.aAudioEncBuffer.length;
                                        for (var l = 0, u = o.length; l < u; l++) {
                                            S.aAudioEncBuffer[s + l] = o[l]
                                        }
                                        S.iAudioEncBufferSize++;
                                        o = null
                                    }
                                    if (S.bWriteAudEnc && S.iAudioEncBufferSize >= Ve) {
                                        var g = new Uint8Array(S.aAudioEncBuffer);
                                        S.downloadFile(g, "Enc.AAC");
                                        S.aAudioEncBuffer.splice(0, S.aAudioEncBuffer.length);
                                        S.bWriteAudEnc = false;
                                        S.iAudioEncBufferSize = 0;
                                        g = null
                                    }
                                } else {
                                    if (ot) {
                                        console.log(">>>JS MainThread-GetAudEncodeData 2 err")
                                    }
                                }
                                break;
                            default:
                                break
                            }
                            if ("GetFrameData" !== t || "GetAudEncodeData" !== t) {
                                S.setCallBack(S, t, 0, S.convertErrorCode(n.errorCode), true)
                            } else {
                                if (D === n.errorCode || le === n.errorCode || se === n.errorCode || V === n.errorCode) {
                                    S.setCallBack(S, t, 0, S.convertErrorCode(n.errorCode), true)
                                }
                            }
                        }
                    }
                }
                ;
                this.createWorker(b);
                this.draw = function() {
                    if (b.bPlay) {
                        if (!b.bPause || b.bOnebyOne) {
                            requestAnimationFrame(b.draw);
                            var e = b.aVideoFrameBuffer.length;
                            if (b.YUVBufSizeCBFun != null) {
                                b.YUVBufSizeCBFun(e)
                            }
                            if (b.bOnebyOne) {
                                if (e <= Ue) {
                                    b.setCallBack(b, "OnebyOne", 0, B, true)
                                }
                                if (e <= b.FrameForwardLen + 1) {
                                    b.setCallBack(b, "OnebyOne", 0, B, true);
                                    return
                                } else {
                                    var t = b.FrameForwardLen;
                                    while (t > 1) {
                                        var n = b.aVideoFrameBuffer.shift();
                                        t--
                                    }
                                }
                                b.bOnebyOne = false
                            }
                            if (ot) {
                                console.log(">>>JS Draw aVideoFrameBuffer.length == " + e)
                            }
                            if (e > b.YUVBufferSize) {
                                var i = b.aVideoFrameBuffer.shift();
                                if (b.SetPlayPositionFlag) {
                                    if (ot) {
                                        console.log(">>>JS SetPlayPositionFlag frameNumOrTime:" + b.iFrameNumOrTime + ",currentFrameNum:" + i.frameNum)
                                    }
                                    if (i.frameNum != b.iFrameNumOrTime) {
                                        if (ot) {
                                            console.log(">>>JS frameNum!= frameNumOrTime:" + i.frameNum)
                                        }
                                        return
                                    }
                                    if (b.bSetPlayPositionType === Ze) {
                                        b.bPause = true
                                    }
                                    b.SetPlayPositionFlag = false
                                }
                                if (ot) {
                                    console.log(">>>after display frameNum:" + i.frameNum)
                                }
                                b.aDisplayBuf = i.data;
                                var r = new Uint8Array(b.aDisplayBuf);
                                if (ot) {
                                    console.log(">>>JS SR_DisplayFrameData 1 nWidth:%d, nHeight:%d, nWidth1:%d, nHeight1:%d", i.nWidth, i.nHeight, b.nWidth, b.nHeight)
                                }
                                b.oSuperRender.SR_DisplayFrameData(i.nWidth, i.nHeight, r, i.nWidth - b.nSPSCropLeft - b.nSPSCropRight, i.nHeight - b.nSPSCropTop - b.nSPSCropBottom);
                                if (b.DisplayCallBackFun != null) {
                                    if (ot) {
                                        console.log(">>>JS MainThread-DisplayCallBackFun")
                                    }
                                    b.DisplayInfoYUV.height = i.nHeight;
                                    b.DisplayInfoYUV.width = i.nWidth;
                                    b.DisplayInfoYUV.frameNum = i.frameNum;
                                    b.DisplayInfoYUV.yuvData = new Uint8Array(r);
                                    b.DisplayCallBackFun(b.DisplayInfoYUV)
                                }
                                if (ot && b.bOnebyOne) {
                                    console.log("OneByOne frameNum:" + i.frameNum)
                                }
                                if (ot) {
                                    console.log(">>>JS SR_DisplayFrameData 2 nWidth:%d, nHeight:%d, nWidth1:%d, nHeight1:%d", i.nWidth, i.nHeight, b.nWidth, b.nHeight)
                                }
                                r = null;
                                b.szOSDTime = i.osdTime;
                                i = null
                            } else {
                                b.setCallBack(b, "Play", 0, B, true)
                            }
                        }
                    } else {
                        if (!b.bPlay) {
                            if (ot) {
                                console.log(">>>JS mainThread stop play jsplaySDKInterface")
                            }
                            b.aVideoFrameBuffer.splice(0, b.aVideoFrameBuffer.length);
                            b.aAudioBuffer.splice(0, b.aAudioBuffer.length)
                        }
                    }
                }
                ;
                this.checkAudioType = function(e) {
                    var t = function e(t, n) {
                        var i = t[n] & 255 | (t[n + 1] & 255) << 8 | (t[n + 2] & 255) << 16 | (t[n + 3] & 255) << 24;
                        return i
                    };
                    var n = [e[12], e[13], 0, 0];
                    var i = t(n, 0);
                    switch (i) {
                    case Ce.AUDIO_G711_A:
                    case Ce.AUDIO_G711_U:
                    case Ce.AUDIO_G722_1:
                    case Ce.AUDIO_G726_2:
                    case Ce.AUDIO_G726_A:
                    case Ce.AUDIO_G726_U:
                    case Ce.AUDIO_AACLC:
                    case Ce.AUDIO_MPEG:
                    case Ce.AUDIO_ADPCM:
                        return P;
                    default:
                        return D
                    }
                }
            }
            r(i, [{
                key: "PlayM4_SetCurrentFrameNum",
                value: function e(t, n) {
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (t < 0) {
                        return w
                    }
                    if (n !== 0 && n !== 1) {
                        return w
                    }
                    return this.PlayM4_SetPlayPosition(0, t, n)
                }
            }, {
                key: "PlayM4_SetPlayPosition",
                value: function e(t, n, i) {
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (t !== 0 && t !== 1) {
                        return w
                    }
                    if (n < 0) {
                        return w
                    }
                    if (i !== 0 && i !== 1) {
                        return w
                    }
                    this.SetPlayPositionFlag = true;
                    this.iFrameNumOrTime = n;
                    this.bSetPlayPositionType = i;
                    this.decodeWorker.postMessage({
                        command: "SetPlayPosition",
                        data: this.iFrameNumOrTime,
                        type: t
                    });
                    this.aAudioBuffer.splice(0, this.aAudioBuffer.length);
                    this.iAudioBufferSize = 0;
                    this.aVideoFrameBuffer.splice(0, this.aVideoFrameBuffer.length);
                    this.aInputDataBuffer.splice(0, this.aInputDataBuffer.length);
                    this.aInputDataLens.splice(0, this.aInputDataLens.length);
                    this.bIsFirstFrame = true;
                    this.bIsInputBufOver = false;
                    return P
                }
            }, {
                key: "PlayM4_OpenPlayerSDKPrintLog",
                value: function e(t) {
                    if (t === true) {
                        ot = true;
                        this.decodeWorker.postMessage({
                            command: "printLog",
                            data: t
                        })
                    } else {
                        ot = false;
                        this.decodeWorker.postMessage({
                            command: "printLog",
                            data: t
                        })
                    }
                    return P
                }
            }, {
                key: "PlayM4_DownloadYUVdata",
                value: function e() {
                    this.bWriteYUVData = true;
                    return P
                }
            }, {
                key: "PlayM4_DownloadPCMdata",
                value: function e() {
                    this.bWritePCMData = true;
                    return P
                }
            }, {
                key: "PlayM4_SetDecCallBack",
                value: function e(t) {
                    if (ot) {
                        console.log(">>>JS MainThread-PlayM4_SetDecCallBack")
                    }
                    if (t && typeof t === "function") {
                        this.DecCallBackFun = t;
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_SetDisplayCallBack",
                value: function e(t) {
                    if (ot) {
                        console.log(">>>JS MainThread-PlayM4_SetDisplayCallBack")
                    }
                    if (t && typeof t === "function") {
                        this.DisplayCallBackFun = t;
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_SetPCMCallBack",
                value: function e(t) {
                    if (ot) {
                        console.log(">>>JS MainThread-PlayM4_SetDisplayCallBack")
                    }
                    if (t && typeof t === "function") {
                        this.PCMCallBackFun = t;
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_SetStreamOpenMode",
                value: function e(t) {
                    if (t == null || t === undefined) {
                        return w
                    }
                    if (t !== Ae && t !== Ee) {
                        return w
                    }
                    this.streamOpenMode = t;
                    if (ot) {
                        console.log(">>>JS PlayM4_SetStreamOpenMode nMode:" + t)
                    }
                    return P
                }
            }, {
                key: "PlayM4_DownloadRTPData",
                value: function e(t) {
                    this.downloadRTP = t
                }
            }, {
                key: "PlayM4_OpenStream",
                value: function e(t, n, i) {
                    if (ot) {
                        console.log(">>>JS PlayM4_OpenStream 1 nSysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                    }
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (this.downloadRTP) {
                        var r = new Uint8Array(t.buffer);
                        this.DownloadRTPData(r);
                        console.log("write 40 hik head")
                    }
                    if (t == null || n <= 0 || i <= 0) {
                        return w
                    }
                    this.bPlay = false;
                    this.bPause = false;
                    this.bOnebyOne = false;
                    this.bIsFirstFrame = true;
                    this.bIsGetYUV = false;
                    this.bIsInput = false;
                    var a = this.checkAudioType(t);
                    if (P !== a) {
                        this.bAudioTypeSupport = false
                    } else {
                        this.bAudioTypeSupport = true
                    }
                    this.decodeWorker.postMessage({
                        command: "SetStreamOpenMode",
                        data: this.streamOpenMode
                    });
                    if (ot) {
                        console.log(">>>JS PlayM4_OpenStream 2 nSysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                    }
                    this.decodeWorker.postMessage({
                        command: "OpenStream",
                        data: t,
                        dataSize: n,
                        bufPoolSize: i
                    });
                    if (ot) {
                        console.log(">>>JS PlayM4_OpenStream 3 nSysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                    }
                    this.bOpenStream = true;
                    return P
                }
            }, {
                key: "PlayM4_CloseStream",
                value: function e() {
                    if (ot) {
                        console.log(">>>JS PlayM4_CloseStream 1 nSysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                    }
                    if (this.decodeWorker === null || this.bOpenStream === false) {
                        return f
                    }
                    this.bOnlyPlaySound = false;
                    this.PlayM4_Stop();
                    this.decodeWorker.postMessage({
                        command: "CloseStream"
                    });
                    if (this.oSuperRender !== null) {
                        this.oSuperRender.SR_Destroy();
                        this.oSuperRender = null
                    }
                    if (this.audioRenderer !== null) {
                        this.audioRenderer.Stop();
                        this.audioRenderer = null
                    }
                    this.aAudioBuffer.splice(0, this.aAudioBuffer.length);
                    this.aVideoFrameBuffer.splice(0, this.aVideoFrameBuffer.length);
                    this.aInputDataBuffer.splice(0, this.aInputDataBuffer.length);
                    this.aInputDataLens.splice(0, this.aInputDataLens.length);
                    this.aAudioEncBuffer.splice(0, this.aAudioEncBuffer.length);
                    this.aVideoYUVBuffer.splice(0, this.aVideoYUVBuffer.length);
                    this.aAudioPCMBuffer.splice(0, this.aAudioPCMBuffer.length);
                    this.aRawDataBuffer.splice(0, this.aRawDataBuffer.length);
                    this.bOpenStream = false;
                    this.iAudioBufferSize = 0;
                    this.szOSDTime = null;
                    return P
                }
            }, {
                key: "PlayM4_Destroy",
                value: function e() {
                    if (ot) {
                        console.log(">>>JS PlayM4_Destroy 1 nSysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                    }
                    if (this.decodeWorker === null) {
                        return P
                    }
                    this.PlayM4_CloseStream();
                    this.decodeWorker.terminate();
                    this.decodeWorker = null;
                    return P
                }
            }, {
                key: "PlayM4_InputData",
                value: function e(t, n) {
                    var i = this.aInputDataBuffer.length;
                    if (n === 4) {
                        var r = new Uint8Array(t.buffer);
                        if (r[0] === 1 && r[1] === 2 && r[2] === 3 && r[3] === 4) {
                            if (ot) {
                                console.log(">>>JS PlaySDKInterface PlayM4_InputData:intput end")
                            }
                            if (this.bIsFirstFrame) {
                                if (ot) {
                                    console.log(">>>JS inputData FirstTime")
                                }
                                this.inputDataFun()
                            } else {
                                if (this.bIsGetYUV) {
                                    this.inputDataFun()
                                } else {
                                    this.bIsInput = true
                                }
                            }
                            r = null;
                            return P
                        }
                    }
                    if (i + n > this.iInputMaxBufSize) {
                        console.log("input over");
                        this.inputDataFun();
                        return _
                    }
                    var a = null;
                    var o = n;
                    switch (this.streamOpenMode) {
                    case Ee:
                        a = new Uint8Array(t.buffer);
                        if (this.downloadRTP) {
                            this.DownloadRTPData(a);
                            this.rtpNum++;
                            console.log("STREAM_FILE psNUm:" + this.rtpNum)
                        }
                        this.aInputDataLens.push(n);
                        break;
                    case Ae:
                        o = n + 4;
                        var s = new Uint32Array([n]);
                        var l = new Uint8Array(s.buffer);
                        a = new Uint8Array(o);
                        a.set(l, 0);
                        a.set(t, 4);
                        if (this.downloadRTP) {
                            this.DownloadRTPData(a);
                            this.rtpNum++;
                            console.log("STREAM_REALTIME rtpNUm:" + this.rtpNum)
                        }
                        s = null;
                        l = null;
                        this.aInputDataLens.push(n + 4);
                        break;
                    default:
                        return D
                    }
                    for (var u = 0; u < o; u++) {
                        this.aInputDataBuffer[i + u] = a[u]
                    }
                    if (!this.bPlay || this.decodeWorker === null || this.bOpenStream === false) {
                        return P
                    }
                    a = null;
                    if (ot) {
                        console.log(">>>JS PlayM4_InputData 1： nSize:%d, iInputBufLen:%d, iInputMaxBufSize;%d", n, this.aInputDataBuffer.length, this.iInputMaxBufSize)
                    }
                    if (this.bOnlyPlaySound) {
                        if (ot) {
                            console.log(">>>JS PlayM4_InputData: OnlyPlaySound")
                        }
                        this.inputDataFun()
                    } else {
                        if (this.bIsFirstFrame) {
                            if (ot) {
                                console.log(">>>JS PlayM4_InputData is firstFrame")
                            }
                            this.inputDataFun()
                        } else {
                            if (this.bIsGetYUV) {
                                if (ot) {
                                    console.log(">>>JS PlayM4_InputData is GetYUV")
                                }
                                this.inputDataFun()
                            } else {
                                if (ot) {
                                    console.log(">>>JS PlayM4_InputData 1-3 sysTime:" + ((new Date).getMonth() + 1) + "-" + (new Date).getDate() + " " + (new Date).getHours() + ":" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                                }
                                this.bIsInput = true
                            }
                        }
                    }
                    return P
                }
            }, {
                key: "DownloadRTPData",
                value: function e(t) {
                    if (this.bWriteRTPData) {
                        var n = new Uint8Array(t);
                        var i = this.aRTPDataBuffer.length;
                        for (var r = 0, a = n.length; r < a; r++) {
                            this.aRTPDataBuffer[i + r] = n[r]
                        }
                        this.iRTPDataSize++;
                        n = null
                    }
                    if (this.bWriteRTPData && this.iRTPDataSize >= $e) {
                        console.log("download" + $e + "RTPdata");
                        var o = new Uint8Array(this.aRTPDataBuffer);
                        this.downloadFile(o, "RTP.data");
                        this.aRTPDataBuffer.splice(0, this.aRTPDataBuffer.length);
                        this.bWriteRTPData = false;
                        this.iRTPDataSize = 0;
                        this.rtpNum = 0;
                        this.downloadRTP = false;
                        o = null
                    }
                }
            }, {
                key: "PlayM4_Play",
                value: function e(t) {
                    if (this.decodeWorker === null) {
                        return f
                    }
                    if (ot) {
                        console.log(">>>JS PlayM4_Play canvasID: " + t)
                    }
                    if (t === null) {
                        this.bOnlyPlaySound = true;
                        this.sCanvasId = null
                    } else {
                        if (typeof t !== "string") {
                            return w
                        }
                        if (this.bOnebyOne) {
                            this.bPlayRateChange = false;
                            this.bOnebyOne = false;
                            this.bPause = false;
                            this.draw()
                        }
                        if (this.bPlay) {
                            return P
                        }
                        if (this.oSuperRender == null) {
                            this.oSuperRender = new SuperRender(t,this.szBasePath);
                            if (this.oSuperRender == null) {
                                return X
                            }
                        }
                        this.sCanvasId = t;
                        this.bPlay = true;
                        this.bPause = false;
                        this.bOnebyOne = false;
                        this.bPlaySound = false;
                        this.bPlayRateChange = false;
                        this.bOnlyPlaySound = false;
                        this.draw()
                    }
                    if (this.audioRenderer == null) {
                        this.audioRenderer = new AudioRenderer;
                        if (this.audioRenderer == null) {
                            return X
                        }
                    }
                    return P
                }
            }, {
                key: "PlayM4_Stop",
                value: function e() {
                    if (ot) {
                        console.log(">>>JS PlayM4_Stop 1")
                    }
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (this.bPlaySound) {
                        this.PlayM4_StopSound();
                        this.bPlaySound = true
                    }
                    this.bPlay = false;
                    this.bOnebyOne = false;
                    this.bPause = false;
                    this.oSuperRender.SR_SetDisplayRect(null);
                    this.iZoomNum = 0;
                    this.bDisRect = false;
                    return P
                }
            }, {
                key: "PlayM4_PlayRate",
                value: function e(t) {
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (t === 1) {
                        this.bPlayRateChange = false
                    } else {
                        this.bPlayRateChange = true
                    }
                    if (t < 1) {
                        t = 1
                    }
                    this.iInputDataLen = t * je;
                    return P
                }
            }, {
                key: "PlayM4_Pause",
                value: function e(t) {
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (this.bOnebyOne) {
                        return f
                    }
                    if (typeof t !== "boolean") {
                        return w
                    }
                    this.bPause = t;
                    this.bIsFirstFrame = true;
                    if (ot) {
                        console.log(">>>JS PlayM4_Pause:" + t)
                    }
                    if (t) {
                        if (this.bPlaySound) {
                            this.PlayM4_StopSound();
                            this.bPlaySound = true
                        }
                    } else {
                        if (this.bPlaySound) {
                            this.PlayM4_PlaySound()
                        }
                        this.draw()
                    }
                    return P
                }
            }, {
                key: "PlayM4_OneByOne",
                value: function e(t) {
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (t > 10 || t <= 0) {
                        return w
                    }
                    if (!t) {
                        t = 1
                    }
                    this.iInputDataLen = je;
                    this.FrameForwardLen = t;
                    this.bPause = true;
                    this.bOnebyOne = true;
                    this.bIsFirstFrame = true;
                    this.draw();
                    return P
                }
            }, {
                key: "PlayM4_PlaySound",
                value: function e(t) {
                    if (this.decodeWorker === null || this.bOpenStream === false) {
                        return f
                    }
                    if (!this.bAudioTypeSupport) {
                        return D
                    }
                    if (t < 0 || t > 16) {
                        return w
                    }
                    if (this.audioRenderer == null) {
                        this.audioRenderer = new AudioRenderer;
                        if (this.audioRenderer == null) {
                            return X
                        }
                    }
                    this.audioRenderer.SetWndNum(t);
                    this.audioRenderer.oAudioContext.resume();
                    this.bPlaySound = true;
                    return P
                }
            }, {
                key: "PlayM4_StopSound",
                value: function e() {
                    if (this.decodeWorker == null || this.audioRenderer == null) {
                        return f
                    }
                    if (!this.bPlaySound) {
                        return f
                    }
                    this.bPlaySound = false;
                    return P
                }
            }, {
                key: "PlayM4_SetDisplayBuf",
                value: function e(t) {
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (t <= 0) {
                        return w
                    }
                    this.YUVBufferSize = t;
                    return P
                }
            }, {
                key: "PlayM4_SetSecretKey",
                value: function e(t, n, i) {
                    if (this.decodeWorker == null || this.bOpenStream === false) {
                        return f
                    }
                    if (n == null) {
                        return w
                    }
                    if (Me === t) {
                        if (128 === i) {
                            if (n == null || n === undefined) {
                                return w
                            }
                        } else {
                            return w
                        }
                    } else if (Te === t) {} else {
                        return w
                    }
                    this.decodeWorker.postMessage({
                        command: "SetSecretKey",
                        data: n,
                        nKeyType: t,
                        nKeyLen: i
                    });
                    return P
                }
            }, {
                key: "PlayM4_SetDecodeFrameType",
                value: function e(t) {
                    if (this.decodeWorker == null || this.oSuperRender == null) {
                        return f
                    }
                    if (t !== Oe && t !== Fe) {
                        return w
                    }
                    if (ot) {
                        console.log(">>>JS PlayM4_SetDecodeFrameType");
                        console.log(t)
                    }
                    this.nDecFrameType = t;
                    this.decodeWorker.postMessage({
                        command: "SetDecodeFrameType",
                        data: t
                    });
                    return P
                }
            }, {
                key: "PlayM4_SetIFrameDecInterval",
                value: function e(t) {
                    if (this.nDecFrameType !== Fe) {
                        return f
                    }
                    if (t < 0) {
                        return w
                    }
                    this.decodeWorker.postMessage({
                        command: "SetIFrameDecInterval",
                        data: t
                    });
                    return P
                }
            }, {
                key: "PlayM4_SetLostFrameMode",
                value: function e(t) {
                    if (t < 0 || t > 1) {
                        return w
                    }
                    this.decodeWorker.postMessage({
                        command: "SetLostFrameMode",
                        data: t
                    });
                    return P
                }
            }, {
                key: "PlayM4_SetDisplayRegion",
                value: function e(t, n) {
                    if (ot) {
                        console.log("PlayM4_SetDisplayRegion ")
                    }
                    if (this.decodeWorker === null || this.bPlay === false || this.oSuperRender === null) {
                        return f
                    }
                    if (this.canvasId === null) {
                        return f
                    }
                    if (n === true) {
                        if (t === null || t === undefined) {
                            if (ot) {
                                console.log("PlayM4_SetDisplayRegion: dipalyRect is null")
                            }
                            return w
                        }
                        if (typeof t.left === "number" && typeof t.top === "number" && typeof t.right === "number" && typeof t.bottom === "number") {
                            if (t.right < 0 || t.left < 0 || t.top < 0 || t.bottom < 0) {
                                if (ot) {
                                    console.log("PlayM4_SetDisplayRegion: dipalyRect rectParameter is wrong")
                                }
                                return w
                            }
                            var i = t.left;
                            var r = t.right;
                            var a = t.top;
                            var o = t.bottom;
                            var s = document.getElementById(this.sCanvasId).getBoundingClientRect();
                            this.iCanvasWidth = s.width;
                            this.iCanvasHeight = s.height;
                            if (r - i < 16 || o - a < 16 || r - i > this.iCanvasWidth || o - a > this.iCanvasHeight) {
                                return w
                            }
                            if (this.iZoomNum !== 0) {
                                i = Math.round(i / this.iRatio_x) + this.stDisplayRect.left;
                                a = Math.round(a / this.iRatio_y) + this.stDisplayRect.top;
                                r = Math.round(r / this.iRatio_x) + this.stDisplayRect.left;
                                o = Math.round(o / this.iRatio_y) + this.stDisplayRect.top
                            }
                            this.stDisplayRect = {
                                top: a,
                                left: i,
                                right: r,
                                bottom: o
                            };
                            this.oSuperRender.SR_SetDisplayRect(this.stDisplayRect);
                            this.bDisRect = true;
                            var l = r - i;
                            var u = o - a;
                            this.iRatio_x = this.iCanvasWidth / l;
                            this.iRatio_y = this.iCanvasHeight / u;
                            this.iZoomNum++
                        } else {
                            return w
                        }
                    } else {
                        this.oSuperRender.SR_SetDisplayRect(null);
                        this.iZoomNum = 0;
                        this.bDisRect = false
                    }
                    if (this.bPause || this.bOnebyOne || this.bPlayRateChange) {
                        this.oSuperRender.SR_DisplayFrameData(this.nWidth, this.nHeight, new Uint8Array(this.aDisplayBuf))
                    }
                    return P
                }
            }, {
                key: "PlayM4_GetBMP",
                value: function e(t) {
                    return this.getPic(t, "GetBMP")
                }
            }, {
                key: "PlayM4_GetJPEG",
                value: function e(t) {
                    return this.getPic(t, "GetJPEG")
                }
            }, {
                key: "PlayM4_SetVolume",
                value: function e(t) {
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (this.audioRenderer == null) {
                        return f
                    }
                    if (t < 0 || t > 100) {
                        return w
                    }
                    this.audioRenderer.SetVolume(t / 100);
                    return P
                }
            }, {
                key: "PlayM4_GetVolume",
                value: function e(t) {
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (this.audioRenderer == null) {
                        return f
                    }
                    if (t && typeof t === "function") {
                        var n = this.audioRenderer.GetVolume();
                        if (n === null) {
                            return $
                        } else {
                            t(Math.round(n * 10) * 10);
                            return P
                        }
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_GetOSDTime",
                value: function e(t) {
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (!this.bPlay) {
                        return f
                    }
                    if (t && typeof t === "function") {
                        t(this.szOSDTime);
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_IsVisible",
                value: function e(t) {
                    this.bVisibility = t;
                    if (ot) {
                        console.log(">>>JS PlayM4_IsVisible visibility:" + t)
                    }
                    return P
                }
            }, {
                key: "PlayM4_GetSdkVersion",
                value: function e() {
                    return "07020146"
                }
            }, {
                key: "PlayM4_GetBuildDate",
                value: function e() {
                    return "20211104"
                }
            }, {
                key: "PlayM4_GetInputBufSize",
                value: function e() {
                    return this.aInputDataBuffer.length
                }
            }, {
                key: "PlayM4_SetInputBufSize",
                value: function e(t) {
                    if (t > 0) {
                        this.iInputMaxBufSize = t;
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_GetYUVBufSize",
                value: function e() {
                    return this.aVideoFrameBuffer.length
                }
            }, {
                key: "PlayM4_GetFrameResolution",
                value: function e(t) {
                    if (this.decodeWorker == null) {
                        return f
                    }
                    if (t && typeof t === "function") {
                        t(this.nWidth, this.nHeight);
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_RegisterYUVBufSizeCB",
                value: function e(t) {
                    if (t && typeof t === "function") {
                        this.YUVBufSizeCBFun = t;
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "PlayM4_UnRegisterYUVBufSizeCB",
                value: function e() {
                    if (this.YUVBufSizeCBFun != null) {
                        this.YUVBufSizeCBFun = null
                    }
                    return P
                }
            }, {
                key: "PlayM4_ClearCanvas",
                value: function e() {
                    if (this.oSuperRender == null) {
                        return f
                    }
                    return P
                }
            }, {
                key: "PlayM4_ReleaseInputBuffer",
                value: function e() {
                    if (this.aInputDataBuffer === null) {
                        return f
                    }
                    this.aInputDataBuffer.splice(0, this.aInputDataBuffer.length);
                    this.aInputDataLens.splice(0, this.aInputDataLens.length);
                    return P
                }
            }, {
                key: "PlayM4_GetDecodeFrameType",
                value: function e() {
                    return this.nDecFrameType
                }
            }, {
                key: "PlayM4_CreateAudEncode",
                value: function e(t) {
                    if (ot) {
                        console.log(">>>JS PlayM4_CreateAudEncode 1 nEncoderType:" + t)
                    }
                    if (this.decodeWorker == null) {
                        return oe
                    }
                    if (t < ue || t > pe || t === he) {
                        return Z
                    }
                    this.decodeWorker.postMessage({
                        command: "CreateAudEncode",
                        encodertype: t
                    });
                    if (ot) {
                        console.log(">>>JS PlayM4_CreateAudEncode 2 nEncoderType:" + t)
                    }
                    return P
                }
            }, {
                key: "PlayM4_SetAudEncodeParam",
                value: function e(t, n, i, r) {
                    if (ot) {
                        console.log(">>>JS PlayM4_SetAudEncodeParam 1 nSampleRate:" + t + ",nChannel:" + n + " ,nBitRate:" + i + " ,nBitWidth:" + r)
                    }
                    if (this.decodeWorker == null) {
                        return oe
                    }
                    if (n != ve || r != ge) {
                        return Z
                    }
                    this.decodeWorker.postMessage({
                        command: "SetAudEncodeParam",
                        samplerate: t,
                        channel: n,
                        bitrate: i,
                        bitwidth: r
                    });
                    if (ot) {
                        console.log(">>>JS PlayM4_SetAudEncodeParam 2 nSampleRate:" + t + ",nChannel:" + n + " ,nBitRate:" + i + " ,nBitWidth:" + r)
                    }
                    return P
                }
            }, {
                key: "PlayM4_InputAudEncodeData",
                value: function e(t, n) {
                    if (ot) {
                        console.log(">>>JS PlayM4_InputAudEncodeData 1 dataSize:" + n)
                    }
                    if (this.decodeWorker == null) {
                        return oe
                    }
                    if (ot) {
                        console.log(">>>JS  PlayM4_InputAudEncodeData 2 dataSize:" + n + ", nSysTime:" + (new Date).getMinutes() + ":" + (new Date).getSeconds() + "." + (new Date).getMilliseconds())
                    }
                    this.decodeWorker.postMessage({
                        command: "InputAudEncodeData",
                        data: t,
                        dataSize: n
                    });
                    return P
                }
            }, {
                key: "PlayM4_DestroyAudEncode",
                value: function e() {
                    if (ot) {
                        console.log(">>>JS MainThread-PlayM4_DestroyAudEncode 1 ")
                    }
                    if (this.decodeWorker == null) {
                        return oe
                    }
                    this.aAudioEncBuffer.splice(0, this.aAudioEncBuffer.length);
                    this.iAudioEncBufferSize = 0;
                    this.decodeWorker.postMessage({
                        command: "DestroyAudEncode"
                    });
                    return P
                }
            }, {
                key: "PlayM4_GetAudioEmcBuf",
                value: function e() {
                    return this.aAudioEncBuffer
                }
            }, {
                key: "PlayM4_RegisterAudEncodeCB",
                value: function e(t) {
                    if (ot) {
                        console.log(">>>JS PlayM4_RegisterAudEncodeCB 1 callback:" + t)
                    }
                    if (t && typeof t === "function") {
                        this.AudEncodeDataCBFun = t;
                        if (ot) {
                            console.log(">>>JS PlayM4_RegisterAudEncodeCB 2 callback:" + t)
                        }
                        return P
                    } else {
                        return w
                    }
                }
            }, {
                key: "downloadFile",
                value: function e(t, n) {
                    var i = t;
                    if (!(t instanceof Blob || t instanceof File)) {
                        i = new Blob([t])
                    }
                    var r = window.URL.createObjectURL(i);
                    var a = window.document.createElement("a");
                    a.href = r;
                    a.download = n;
                    var o = document.createEvent("MouseEvents");
                    o.initEvent("click", true, true);
                    a.dispatchEvent(o)
                }
            }]);
            return i
        }()
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function e() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://open.ys7.com/assets/ezuikit_v3.6";
            return "\n (function (event) {\n  const AUDIO_TYPE = 0;\t// 音频\n  const VIDEO_TYPE = 1;   // 视频\n  const PRIVT_TYPE = 2;  // 私有帧\n\n  const PLAYM4_AUDIO_FRAME = 100; // 音频帧\n  const PLAYM4_VIDEO_FRAME = 101; // 视频帧\n\n  const PLAYM4_OK = 1;\n  const PLAYM4_DECODE_ERROR = 44 \t// 解码失败\n  const PLAYM4_NOT_KEYFRAME = 48; \t// 非关键帧\n  const PLAYM4_NEED_MORE_DATA = 31;   // 需要更多数据才能解析\n  const PLAYM4_SYS_NOT_SUPPORT = 16; \t// 不支持\n\n  const PLAYM4_PARA_ENCODER_ERROR                     = 71;  //音频编码参数错误\n  const PLAYM4_PRECONDITION_ENCODER_ERROR             = 72;  //不满足音频编码条件错误\n  const PLAYM4_ENCODER_ERROR                          = 73;  //音频编码失败\n  const PLAYM4_CREATE_ENCODER_ERROR                   = 74;  //创建音频编码器失败\n  const PLAYM4_NOSUPPORT_ENCODER_ERROR                = 75;  //音频编码不支持\n  const PLAYM4_ALLOC_MEMORY_ENCODER_ERROR\t            = 76;  //音频编码相关内存申请失败\n  const PLAYM4_BUF_OVER_ENCODER_ERROR                 = 77;  //音频编码相关buffer满\n  const PLAYM4_NEED_MORE_DATA_ENCODER_ERROR           = 78;  //音频编码需要更多数据进行编码\n  const PLAYM4_CALL_ORDER_ENCODER_ERROR               = 79;  //音频编码调用顺序错误\n\n  const PLAYM4_ITYPE_DECODE_ERROR                     =100;   //定位后送进来的第一帧I帧解码失败\n  const PLAYM4_FIRST_FRAME_NOT_ICURRENT               =101;   //定位后送进来的第一帧不是定位帧所在的I帧（Ni>Mp）\n\n\n  importScripts('" + t + "/js/playctrl/Decoder.js');\n  Module.addOnPostRun(function () {\n      postMessage({'function': \"loaded\"});\n  });\n\n  var iStreamMode = 0;  // 流模式\n\n  var bOpenMode = false;\n  var bOpenStream = false;\n  \n  var funGetFrameData = null;\n  var funGetAudFrameData = null;\n\nvar bWorkerPrintLog=false;//worker层log开关\n\n  onmessage = function (event)\n  {\n      var eventData = event.data;\n      var res = 0;\n      switch (eventData.command)\n      {\n    case \"printLog\":\n        let downloadFlag=eventData.data;\n        if(downloadFlag===true)\n              {\n                  bWorkerPrintLog=true;\n                  res = Module._SetPrintLogFlag(downloadFlag);\n              }\n        else\n              {\n                  bWorkerPrintLog=false;\n                  res = Module._SetPrintLogFlag(downloadFlag);\n              }\n\n      if (res !== PLAYM4_OK)\n              {\n        console.log(\"DecodeWorker.js: PlayerSDK print log failed,res\"+res);\n                  postMessage({'function': \"printLog\", 'errorCode': res});\n              }\n      break;\n          case \"SetPlayPosition\":\n              let nFrameNumOrTime=eventData.data;\n              let enPosType=eventData.type;\n              res = Module._SetPlayPosition(nFrameNumOrTime,enPosType);\n              if (res !== PLAYM4_OK)\n              {\n                  postMessage({'function': \"SetPlayPosition\", 'errorCode': res});\n                  return;\n              }\n              //有没有buffer需要清除\n\n              break;\n          case \"SetStreamOpenMode\":\n              iStreamMode = eventData.data;\n              res = Module._SetStreamOpenMode(iStreamMode);\n              if (res !== PLAYM4_OK)\n              {\n                  postMessage({'function': \"SetStreamOpenMode\", 'errorCode': res});\n                  return;\n              }\n              bOpenMode = true;\n              break;\n\n          case \"OpenStream\":\n              // 接收到的数据\n              var iHeadLen = eventData.dataSize;\n              var pHead = Module._malloc(iHeadLen + 4);\n              if (pHead === null)\n              {\n                  return;\n              }\n              var aHead = Module.HEAPU8.subarray(pHead, pHead + iHeadLen);\n              aHead.set(eventData.data);\n              res = Module._OpenStream(pHead, iHeadLen, eventData.bufPoolSize);\n              postMessage({'function': \"OpenStream\", 'errorCode': res});\n              if (res !== PLAYM4_OK)\n              {\n                  //释放内存\n                  Module._free(pHead);\n                  pHead = null;\n                  return;\n              }\n              bOpenStream = true;\n\n              // 加4字节长度信息\n              var a32 = new Uint32Array([iHeadLen]);\n              var a8 = new Uint8Array(a32.buffer);\n              var tempBuf = new Uint8Array(iHeadLen + 4);\n              tempBuf.set(a8, 0);\n              tempBuf.set(eventData.data, 4);\n              a32 = null;\n              a8 = null;\n\n              aHead = Module.HEAPU8.subarray(pHead, pHead + iHeadLen + 4);\n              aHead.set(tempBuf);\n              tempBuf = null;\n\n              res = Module._InputData(pHead, iHeadLen + 4);\n              if (res !== PLAYM4_OK)\n              {\n                  postMessage({'function': \"InputData\", 'errorCode': res});\n                  Module._free(pHead);\n                  pHead = null;\n                  return;\n              }\n\n              // 释放内存\n              Module._free(pHead);\n              pHead = null;\n\n              if (funGetFrameData === null) {\n                  funGetFrameData = Module.cwrap('GetFrameData', 'number');\n              }\n\n              if (iStreamMode === 0) {\n                  // Module._GetFrameData();\n                  funGetFrameData();\n              }\n              break;\n\n          case \"InputData\":\n              // 接收到的数据\n              var iLen = eventData.dataSize;\n              if(bWorkerPrintLog)\n              {\n                  console.log(\"<<<Worker: DecodeWorker-InputData iLen:\"+iLen);\n              }\n              \n              if (iLen > 0)\n              {\n                  var pInputData = Module._malloc(iLen);\n                  if (pInputData === null)\n                  {\n                      return;\n                  }\n                  var inputData = new Uint8Array(eventData.data);\n                  // var aInputData = Module.HEAPU8.subarray(pInputData, pInputData + iLen);\n                  // aInputData.set(inputData);\n                  Module.writeArrayToMemory(inputData, pInputData);\n                  inputData = null;\n                  res = Module._InputData(pInputData, iLen);\n                  //console.log(\"DecodeWorker-InputData-ret:%d\", res);\n        if(bWorkerPrintLog)\n        {\n          console.log(\"<<<Worker:InputData result:\"+ +res);\n        }\n        \n                  if (res !== PLAYM4_OK)\n                  {\n                      if (res === 98)\n                      {\n                          res = 1;\n                      }\n                      postMessage({'function': \"InputData\", 'errorCode': res});\n                  }\n                  Module._free(pInputData);\n                  pInputData = null;\n              }\n\n              /////////////////////\n              if (funGetFrameData === null)\n              {\n                  funGetFrameData = Module.cwrap('GetFrameData', 'number');\n              }\n\n              while (bOpenMode && bOpenStream)\n              {\n                  \n                  var ret = getFrameData(funGetFrameData);\n                  // 直到获取视频帧或数据不足为止\n                  if (PLAYM4_VIDEO_FRAME === ret || PLAYM4_NEED_MORE_DATA === ret)\n                  {\n                      break;\n                  }\n              }\n              break;\n\n          case \"SetSecretKey\":\n              var keyLen = eventData.nKeyLen;\n              var pKeyData = Module._malloc(keyLen);\n              if (pKeyData === null) {\n                  return;\n              }\n              var nKeySize = eventData.data.length\n              var bufData = stringToBytes (eventData.data);\n              var aKeyData = Module.HEAPU8.subarray(pKeyData, pKeyData + keyLen);\n              aKeyData.set(new Uint8Array(bufData));\n\n              res = Module._SetSecretKey(eventData.nKeyType, pKeyData, keyLen, nKeySize);\n              if (res !== PLAYM4_OK) {\n                  postMessage({'function': \"SetSecretKey\", 'errorCode': res});\n                  Module._free(pKeyData);\n                  pKeyData = null;\n                  return;\n              }\n\n              Module._free(pKeyData);\n              pKeyData = null;\n              break;\n\n          case \"GetBMP\":\n              var nBMPWidth = eventData.width;\n              var nBMPHeight = eventData.height;\n              var pYUVData = eventData.data;\n              var nYUVSize = nBMPWidth * nBMPHeight * 3 / 2;\n              var oBMPCropRect = eventData.rect;\n\n              var pDataYUV = Module._malloc(nYUVSize);\n              if (pDataYUV === null) {\n                  return;\n              }\n\n              Module.writeArrayToMemory(new Uint8Array(pYUVData, 0, nYUVSize), pDataYUV);\n\n              // 分配BMP空间\n              var nBmpSize = nBMPWidth * nBMPHeight * 4 + 60;\n              var pBmpData = Module._malloc(nBmpSize);\n              var pBmpSize = Module._malloc(4);\n              if (pBmpData === null || pBmpSize === null) {\n                  Module._free(pDataYUV);\n                  pDataYUV = null;\n\n                  if (pBmpData != null) {\n                      Module._free(pBmpData);\n                      pBmpData = null;\n                  }\n\n                  if (pBmpSize != null) {\n                      Module._free(pBmpSize);\n                      pBmpSize = null;\n                  }\n                  return;\n              }\n\n             //Module._memset(pBmpSize, nBmpSize, 4); // 防止bmp截图出现输入数据过大的错误码\n              Module.setValue(pBmpSize, nBmpSize, \"i32\"); \n              res = Module._GetBMP(pDataYUV, nYUVSize, pBmpData, pBmpSize,\n                  oBMPCropRect.left, oBMPCropRect.top, oBMPCropRect.right, oBMPCropRect.bottom);\n              if (res !== PLAYM4_OK) {\n                  postMessage({'function': \"GetBMP\", 'errorCode': res});\n                  Module._free(pDataYUV);\n                  pDataYUV = null;\n                  Module._free(pBmpData);\n                  pBmpData = null;\n                  Module._free(pBmpSize);\n                  pBmpSize = null;\n                  return;\n              }\n\n              // 获取BMP图片大小\n              var nBmpDataSize = Module.getValue(pBmpSize, \"i32\");\n\n              // 获取BMP图片数据\n              var aBmpData = new Uint8Array(nBmpDataSize);\n              aBmpData.set(Module.HEAPU8.subarray(pBmpData, pBmpData + nBmpDataSize));\n\n              postMessage({'function': \"GetBMP\", 'data': aBmpData, 'errorCode': res}, [aBmpData.buffer]);\n              aBmpData=null;\n              if (pDataYUV != null) {\n                  Module._free(pDataYUV);\n                  pDataYUV = null;\n              }\n              if (pBmpData != null) {\n                  Module._free(pBmpData);\n                  pBmpData = null;\n              }\n              if (pBmpSize != null) {\n                  Module._free(pBmpSize);\n                  pBmpSize = null;\n              }\n              break;\n\n          case \"GetJPEG\":\n              var nJpegWidth = eventData.width;\n              var nJpegHeight = eventData.height;\n              var pYUVData1 = eventData.data;\n              var nYUVSize1 = nJpegWidth * nJpegHeight * 3 / 2;\n              var oJpegCropRect = eventData.rect;\n\n              var pDataYUV1 = Module._malloc(nYUVSize1);\n              if (pDataYUV1 === null) {\n                  return;\n              }\n\n              Module.writeArrayToMemory(new Uint8Array(pYUVData1, 0, nYUVSize1), pDataYUV1);\n\n              // 分配JPEG空间\n              var pJpegData = Module._malloc(nYUVSize1);\n              var pJpegSize = Module._malloc(4);\n              if (pJpegData === null || pJpegSize === null) {\n                  if (pJpegData != null) {\n                      Module._free(pJpegData);\n                      pJpegData = null;\n                  }\n\n                  if (pJpegSize != null) {\n                      Module._free(pJpegSize);\n                      pJpegSize = null;\n                  }\n\n                  if (pDataYUV1 != null) {\n                      Module._free(pDataYUV1);\n                      pDataYUV1 = null;\n                  }\n                  return;\n              }\n\n              Module.setValue(pJpegSize, nJpegWidth * nJpegHeight * 2, \"i32\");    // JPEG抓图，输入缓冲长度不小于当前帧YUV大小\n\n              res = Module._GetJPEG(pDataYUV1, nYUVSize1, pJpegData, pJpegSize,\n                  oJpegCropRect.left, oJpegCropRect.top, oJpegCropRect.right, oJpegCropRect.bottom);\n              if (res !== PLAYM4_OK) {\n                  postMessage({'function': \"GetJPEG\", 'errorCode': res});\n                  if (pJpegData != null) {\n                      Module._free(pJpegData);\n                      pJpegData = null;\n                  }\n\n                  if (pJpegSize != null) {\n                      Module._free(pJpegSize);\n                      pJpegSize = null;\n                  }\n\n                  if (pDataYUV1 != null) {\n                      Module._free(pDataYUV1);\n                      pDataYUV1 = null;\n                  }\n                  return;\n              }\n\n              // 获取JPEG图片大小\n              var nJpegSize = Module.getValue(pJpegSize, \"i32\");\n\n              // 获取JPEG图片数据\n              var aJpegData = new Uint8Array(nJpegSize);\n              aJpegData.set(Module.HEAPU8.subarray(pJpegData, pJpegData + nJpegSize));\n\n              postMessage({'function': \"GetJPEG\", 'data': aJpegData, 'errorCode': res}, [aJpegData.buffer]);\n\n              nJpegSize = null;\n              aJpegData = null;\n\n              if (pDataYUV1 != null) {\n                  Module._free(pDataYUV1);\n                  pDataYUV1 = null;\n              }\n              if (pJpegData != null) {\n                  Module._free(pJpegData);\n                  pJpegData = null;\n              }\n              if (pJpegSize != null) {\n                  Module._free(pJpegSize);\n                  pJpegSize = null;\n              }\n              break;\n\n          case \"SetDecodeFrameType\":\n              var nFrameType = eventData.data;\n              res = Module._SetDecodeFrameType(nFrameType);\n              if (res !== PLAYM4_OK) {\n                  postMessage({'function': \"SetDecodeFrameType\", 'errorCode': res});\n                  return;\n              }\n              break;\n\n          case \"DisplayRegion\":\n              var nRegionNum = eventData.nRegionNum;\n              var srcRect = eventData.srcRect;\n              var hDestWnd = eventData.hDestWnd;\n              var bEnable = eventData.bEnable;\n\n              res = Module._SetDisplayRegion(nRegionNum, srcRect, hDestWnd, bEnable);\n              if (res !== PLAYM4_OK) {\n                  postMessage({'function': \"DisplayRegion\", 'errorCode': res});\n                  return;\n              }\n              break;\n\n          case \"CloseStream\":\n              res = Module._CloseStream();\n              if (res !== PLAYM4_OK) {\n                  postMessage({'function': \"CloseStream\", 'errorCode': res});\n                  return;\n              }\n              break;\n\n          case \"SetIFrameDecInterval\":\n              Module._SetIFrameDecInterval(eventData.data);\n              break;\n    case \"SetLostFrameMode\":\n        Module._SetLostFrameMode(eventData.data);\n      break;\n    \n              /*******************************************worker音频编码相关接口实现**********************************************************/\n          case \"CreateAudEncode\":\n    \n              res = Module._CreateAudEncode(eventData.encodertype);\n              \n              postMessage({'function':\"CreateAudEncode\",'errorCode':res});\n              break;\n          case \"SetAudEncodeParam\":\n              \n              res = Module._SetAudEncodeParam(eventData.samplerate, eventData.channel, eventData.bitrate, eventData.bitwidth);\n    \n              postMessage({'function':\"SetAudEncodeParam\",'errorCode':res});\n              break;\n          case \"DestroyAudEncode\":\n             \n              res = Module._DestroyAudEncode();\n              \n              postMessage({'function':\"DestroyAudEncode\",'errorCode':res});\n              break;\n          case \"InputAudEncodeData\":\n        if(bWorkerPrintLog)\n      {\n        console.log(\"<<<Worker: 20200113 DecodeWorker-InputAudEncodeData 1\");\n      }\n              \n              var iLen = eventData.dataSize;\n              if(iLen > 0)\n              {\n                  \n                  var pAudInputData = Module._malloc(iLen);\n                  if (pAudInputData === null)\n                  {\n                      return;\n                  }\n                  var audinputData = new Uint8Array(eventData.data);\n                  Module.writeArrayToMemory(audinputData, pAudInputData);\n                  audinputData = null;\n                  res = Module._InputAudEncodeData(pAudInputData, iLen);\n        if(bWorkerPrintLog)\n        {\n          console.log(\"<<<Worker: 20200113 DecodeWorker-InputAudEncodeData 2 res:\"+res);\n        }\n                  \n                  if(res == PLAYM4_OK)  //接口返回成功，表明已编码好一帧音频数据\n                  {\n                      \n                      if (funGetAudFrameData === null)\n                      {\n                          funGetAudFrameData = Module.cwrap('GetAudFrameData', 'number');\n                      }\n                      if(bWorkerPrintLog)\n          {\n            console.log(\"<<<Worker: 20200113 DecodeWorker-InputAudEncodeData 2-1 succ\");\n          }\n                      //调用C++ GetAudFrameData\n                      var ret = getAudFrameData(funGetAudFrameData);\n                  }\n                  Module._free(pAudInputData);\n                  pAudInputData = null;\n              }\n              break;\n          default:\n              break;\n      }\n  };\n\n  function getOSDTime(oFrameInfo) {\n      var iYear = oFrameInfo.year;\n      var iMonth = oFrameInfo.month;\n      var iDay = oFrameInfo.day;\n      var iHour = oFrameInfo.hour;\n      var iMinute = oFrameInfo.minute;\n      var iSecond = oFrameInfo.second;\n\n      if (iMonth < 10) {\n          iMonth = \"0\" + iMonth;\n      }\n      if (iDay < 10) {\n          iDay = \"0\" + iDay;\n      }\n      if (iHour < 10) {\n          iHour = \"0\" + iHour;\n      }\n      if (iMinute < 10) {\n          iMinute = \"0\" + iMinute;\n      }\n      if (iSecond < 10) {\n          iSecond = \"0\" + iSecond;\n      }\n\n      return iYear + \"-\" + iMonth + \"-\" + iDay + \" \" + iHour + \":\" + iMinute + \":\" + iSecond;\n  }\n\n  function getAudFrameData(fun)\n  {\n  if(bWorkerPrintLog)\n  {\n    console.log(\"<<<Worker: DecodeWorker-getAudFrameData 1\");\n  }\n  \n      var res = fun(); // 调用C++GetAudFrameData函数\n      if(res === PLAYM4_OK)\n      {\n          var oFrameInfo = Module._GetAudFrameInfo();\n          var iSize = oFrameInfo.frameSize;\n          if (0 === iSize)\n          {\n              return null;\n          }\n\n          var pEncodeAud = Module._GetAudFrameBuffer();\n          if(pEncodeAud == null)\n          {\n              return null;\n          }\n          var aEncodeAudData = new Uint8Array(iSize);\n          aEncodeAudData.set(Module.HEAPU8.subarray(pEncodeAud, pEncodeAud + iSize));\n    if(bWorkerPrintLog)\n    {\n      console.log(\"<<<Worker: DecodeWorker-getAudFrameData 2\");\n    }\n          \n          //获取到音频编码帧数据通过worker返回\n          postMessage({'function':\"GetAudEncodeData\",'data':aEncodeAudData.buffer,'dataSize':iSize, 'errorCode': res});\n      }\n      else\n      {\n          postMessage({'function':\"GetAudEncodeData\",'data':null,'dataSize':-1, 'errorCode': res});\n      }\n      oFrameInfo=null;\n      pEncodeAud=null;\n      aEncodeAudData=null;\n      return res;\n  }\n\n  // 获取帧数据\n  function getFrameData(fun)\n  {\n  // function getFrameData() {\n      // 获取帧数据\n      // var res = Module._GetFrameData();\n      var res = fun();\n      if(bWorkerPrintLog)\n      {\n          console.log(\"<<<Worker: getFrameData Result:\"+res);\n      }\n\n      if (res === PLAYM4_OK)\n      {\n          var oFrameInfo = Module._GetFrameInfo();\n          switch (oFrameInfo.frameType)\n          {\n              case AUDIO_TYPE:\n                  var iSize = oFrameInfo.frameSize;\n                  if (0 === iSize)\n                  {\n                      return -1;\n                  }\n                  var pPCM = Module._GetFrameBuffer();\n                  // var audioBuf = new ArrayBuffer(iSize);\n                  var aPCMData = new Uint8Array(iSize);\n                  aPCMData.set(Module.HEAPU8.subarray(pPCM, pPCM + iSize));\n                  if(bWorkerPrintLog)\n                  {\n                      console.log(\"<<<Worker: audio media Info: nSise:\"+ oFrameInfo.frameSize+\",nSampleRate:\"+oFrameInfo.samplesPerSec+',channel:'+oFrameInfo.channels+',bitsPerSample:'+oFrameInfo.bitsPerSample);\n                  }\n                  postMessage({\n                      'function': \"GetFrameData\", 'type': \"audioType\", 'data': aPCMData.buffer,\n                      'frameInfo': oFrameInfo, 'errorCode': res\n                  }, [aPCMData.buffer]);\n\n                  oFrameInfo = null;\n                  pPCM = null;\n                  aPCMData = null;\n                  return PLAYM4_AUDIO_FRAME;\n\n              case VIDEO_TYPE:\n                  var szOSDTime = getOSDTime(oFrameInfo);\n\n                  var iWidth = oFrameInfo.width;\n                  var iHeight = oFrameInfo.height;\n\n                  var iYUVSize = iWidth * iHeight * 3 / 2;\n                  if (0 === iYUVSize)\n                  {\n                      return -1;\n                  }\n\n                  var pYUV = Module._GetFrameBuffer();\n\n                  // 图像数据渲染后压回，若从主码流切到子码流，存在数组大小与图像大小不匹配现象\n                  var aYUVData = new Uint8Array(iYUVSize);\n                  aYUVData.set(Module.HEAPU8.subarray(pYUV, pYUV + iYUVSize));\n                  if(bWorkerPrintLog)\n                  {\n                      console.log(\"<<<Worker: InputData-getFrameData Video: Width:\"+ oFrameInfo.width+\",Height:\"+oFrameInfo.height+\",timeStamp:\"+oFrameInfo.timeStamp);\n                  }\n\n                  postMessage({\n                    'function': \"GetFrameData\", 'type': \"videoType\", 'data': aYUVData.buffer,\n                 'dataLen': aYUVData.length,'osd': szOSDTime, 'frameInfo': oFrameInfo, 'errorCode': res\n                  }, [aYUVData.buffer]);\n\n                  oFrameInfo = null;\n                  pYUV = null;\n                  aYUVData = null;\n                  return PLAYM4_VIDEO_FRAME;\n\n              case PRIVT_TYPE:\n                  postMessage({\n                      'function': \"GetFrameData\", 'type': \"\", 'data': null,\n                      'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': PLAYM4_SYS_NOT_SUPPORT\n                  });\n                  return PLAYM4_SYS_NOT_SUPPORT;\n\n              default:\n                  postMessage({\n                      'function': \"GetFrameData\", 'type': \"\", 'data': null,\n                      'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': PLAYM4_SYS_NOT_SUPPORT\n                  });\n                  return PLAYM4_SYS_NOT_SUPPORT;\n          }\n      }\n      else {\n          //解码失败返回裸数据\n          if(PLAYM4_DECODE_ERROR===res)\n          {\n              var rawInfo=Module._GetRawDataInfo();\n              var pRawData = Module._GetRawDataBuffer();\n              var aRawData = new Uint8Array(rawInfo.isize);\n              aRawData.set(Module.HEAPU8.subarray(pRawData, pRawData + rawInfo.isize));\n              postMessage({\n                  'function': \"GetRawData\", 'type': \"\", 'data':aRawData.buffer,\n                  'rawDataLen': rawInfo.isize, 'osd': 0, 'frameInfo': null, 'errorCode': res\n              });\n              rawInfo=null;\n              pRawData=null;\n              aRawData=null;\n          }\n          //定位返回的错误\n          if(PLAYM4_FIRST_FRAME_NOT_ICURRENT===res|| PLAYM4_ITYPE_DECODE_ERROR===res)\n          {\n              postMessage({\n                  'function': \"GetFrameData\", 'type': \"\", 'data': null,\n                  'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': res\n              });\n          }\n          //需要更多数据\n          if (PLAYM4_NEED_MORE_DATA === res || PLAYM4_SYS_NOT_SUPPORT === res || PLAYM4_NOT_KEYFRAME === res){\n              postMessage({\n                  'function': \"GetFrameData\", 'type': \"\", 'data': null,\n                  'dataLen': -1, 'osd': 0, 'frameInfo': null, 'errorCode': res\n              });\n          }\n          return res;\n      }\n  }\n\n  // 开始计算时间\n  function startTime() {\n      return new Date().getTime();\n  }\n\n  // 结束计算时间\n  function endTime() {\n      return new Date().getTime();\n  }\n\n  // 字母字符串转byte数组\n  function stringToBytes ( str ) {\n      var ch, st, re = [];\n      for (var i = 0; i < str.length; i++ ) {\n          ch = str.charCodeAt(i);  // get char\n          st = [];                 // set up \"stack\"\n          do {\n              st.push( ch & 0xFF );  // push byte to stack\n              ch = ch >> 8;          // shift value down by 1 byte\n          }\n          while ( ch );\n          // add stack contents to result\n          // done because chars have \"wrong\" endianness\n          re = re.concat( st.reverse() );\n      }\n      // return an array of bytes\n      return re;\n  }\n})();\n"
        };
        t.default = i
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.StorageManager = undefined;
        var a = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        var c = n(2);
        var i = n(0);
        var r = n(15);
        var o = s(r);
        function s(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function u(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var l = "Web/RecordFiles/";
        var f = "Web/PlaybackFiles/";
        var d = 1e3;
        var h = 1;
        var p = 3001;
        window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;
        window.URL = window.URL || window.webkitURL;
        var v = function() {
            function r(e, t, n, i) {
                u(this, r);
                this.szUUID = e;
                this.szFileName = t;
                this.iStreamType = n;
                this.szPath = "";
                this.bStart = false;
                this.aStreamList = [];
                this.options = i
            }
            a(r, [{
                key: "init",
                value: function e() {
                    var n = this;
                    if (0 === this.iStreamType) {
                        this.szPath = l
                    } else if (1 === this.iStreamType) {
                        this.szPath = f
                    }
                    this.szPath += this.getDateDir();
                    var i = n.szPath.split("/");
                    var t = new Promise(function(t) {
                        window.requestFileSystem(window.TEMPORARY, n.options.iFileSize, function(e) {
                            n.createDir(e.root, i, function() {
                                t()
                            })
                        }, n.errorHandler)
                    }
                    );
                    return t
                }
            }, {
                key: "getDateDir",
                value: function e() {
                    return i.oTool.dateFormat(new Date, "yyyy-MM-dd")
                }
            }, {
                key: "createDir",
                value: function e(t, n, i) {
                    var r = this;
                    if (n.length) {
                        t.getDirectory(n[0], {
                            create: true
                        }, function(e) {
                            r.createDir(e, n.slice(1), i)
                        }, r.errorHandler)
                    } else {
                        i()
                    }
                }
            }, {
                key: "errorHandler",
                value: function e() {}
            }, {
                key: "writeFileHeader",
                value: function e(n) {
                    var i = this;
                    window.requestFileSystem(window.TEMPORARY, i.options.iFileSize, function(e) {
                        e.root.getFile(i.szPath + "/" + i.szFileName, {
                            create: true
                        }, function(e) {
                            e.createWriter(function(e) {
                                e.onwriteend = function() {
                                    i.bStart = true;
                                    i.writeFile(e)
                                }
                                ;
                                e.onerror = function() {}
                                ;
                                e.seek(e.length);
                                var t = new Blob([n]);
                                e.write(t)
                            }, i.errorHandler)
                        }, i.errorHandler)
                    }, i.errorHandler)
                }
            }, {
                key: "writeFileContent",
                value: function e(t) {
                    this.aStreamList.push(t)
                }
            }, {
                key: "writeFile",
                value: function e(t) {
                    var n = this;
                    if (this.bStart) {
                        if (this.aStreamList.length > 0) {
                            var i = this.aStreamList.shift();
                            t.seek(t.length);
                            if (t.length >= this.options.iFileSize) {
                                if (this.options.cbEventHandler) {
                                    this.options.cbEventHandler(p, this.szUUID)
                                }
                                return
                            }
                            var r = new Blob([i]);
                            t.write(r)
                        } else {
                            setTimeout(function() {
                                n.writeFile(t)
                            }, d)
                        }
                    }
                }
            }, {
                key: "stopWriteFile",
                value: function e() {
                    var n = this;
                    this.bStart = false;
                    this.aStreamList.length = 0;
                    var t = new Promise(function(t) {
                        window.requestFileSystem(window.TEMPORARY, n.options.iFileSize, function(e) {
                            e.root.getFile(n.szPath + "/" + n.szFileName, {
                                create: false
                            }, function(e) {
                                e.file(function(e) {
                                    t();
                                    i.oTool.downloadFile(e, e.name)
                                })
                            }, n.errorHandler)
                        }, n.errorHandler)
                    }
                    );
                    return t
                }
            }]);
            return r
        }();
        var m = function() {
            function l(e, t, n, i, r, a, o, s) {
                u(this, l);
                this.szBasePath = e;
                this.szUUID = t;
                this.szFileName = n;
                this.aHeadBuf = new Uint8Array(i);
                this.iPackType = r;
                this.iStreamType = a;
                this.oWorker = null;
                this.oFileSystem = null;
                this.options = o;
                this.bHead = true;
                this.staticPath = s
            }
            a(l, [{
                key: "init",
                value: function e() {
                    var n = this;
                    var t = new Promise(function(e, t) {
                        n.initFileSystem().then(function() {
                            n.initWorker().then(function() {
                                e(n.szUUID)
                            }, function(e) {
                                t(e)
                            })
                        }, function(e) {
                            t(e)
                        })
                    }
                    );
                    return t
                }
            }, {
                key: "initFileSystem",
                value: function e() {
                    var n = this;
                    this.oFileSystem = new v(this.szUUID,this.szFileName,this.iStreamType,this.options);
                    var t = new Promise(function(e, t) {
                        n.oFileSystem.init().then(function() {
                            e()
                        }, function(e) {
                            t(e)
                        })
                    }
                    );
                    return t
                }
            }, {
                key: "initWorker",
                value: function e() {
                    var a = this;
                    var t = new Promise(function(r) {
                        var e = new Blob([(0,
                        o.default)(a.staticPath)]);
                        var t = URL.createObjectURL(e);
                        a.oWorker = new Worker(t);
                        a.oWorker.onmessage = function(e) {
                            var t = e.data;
                            var n = a.iPackType;
                            if (a.options.iPackage === 1) {
                                n = 12
                            }
                            if ("loaded" === t.type) {
                                a.oWorker.postMessage({
                                    type: "create",
                                    buf: a.aHeadBuf.buffer,
                                    len: 40,
                                    packType: n
                                }, [a.aHeadBuf.buffer])
                            } else if ("created" === t.type) {
                                r()
                            } else if ("outputData" === t.type) {
                                var i = new Uint8Array(t.buf);
                                if (a.options.iPackage === 1) {
                                    if (a.bHead) {
                                        a.oFileSystem.writeFileHeader(i);
                                        a.bHead = false
                                    } else {
                                        a.oFileSystem.writeFileContent(i)
                                    }
                                } else {
                                    if (h === t.dType) {
                                        a.oFileSystem.writeFileHeader(i)
                                    } else {
                                        a.oFileSystem.writeFileContent(i)
                                    }
                                }
                            }
                        }
                    }
                    );
                    return t
                }
            }, {
                key: "inputData",
                value: function e(t) {
                    if (this.oWorker) {
                        var n = new Uint8Array(t);
                        this.oWorker.postMessage({
                            type: "inputData",
                            buf: n.buffer,
                            len: n.length
                        }, [n.buffer])
                    }
                }
            }, {
                key: "stopRecord",
                value: function e() {
                    var n = this;
                    var t = new Promise(function(e, t) {
                        if (n.oWorker) {
                            n.oWorker.postMessage({
                                type: "release"
                            })
                        } else {
                            t()
                        }
                        if (n.oFileSystem) {
                            n.oFileSystem.stopWriteFile().then(function() {
                                n.bHead = true;
                                e()
                            }, function() {
                                t()
                            })
                        } else {
                            t()
                        }
                    }
                    );
                    return t
                }
            }]);
            return l
        }();
        var y = function() {
            var d = Symbol("STORAGELIST");
            var e = function() {
                function i(e, t, n) {
                    u(this, i);
                    this.szBasePath = e;
                    this[d] = {};
                    this.options = {
                        iFileSize: 1024 * 1024 * 1024
                    };
                    Object.assign(this.options, t);
                    if (typeof t.staticPath === "string") {
                        this.staticPath = t.staticPath
                    }
                }
                a(i, [{
                    key: "startRecord",
                    value: function e(t, n, i, r, a) {
                        var o = this;
                        var s = (0,
                        c.v4)();
                        var l = Object.assign({}, this.options, a);
                        var u = new m(this.szBasePath,s,t,n,i,r,l,this.staticPath);
                        var f = new Promise(function(t, n) {
                            u.init().then(function(e) {
                                o[d][e] = u;
                                t(e)
                            }, function(e) {
                                n(e)
                            })
                        }
                        );
                        return f
                    }
                }, {
                    key: "inputData",
                    value: function e(t, n) {
                        var i = this[d][t];
                        if (i) {
                            i.inputData(n)
                        }
                    }
                }, {
                    key: "stopRecord",
                    value: function e(i) {
                        var r = this;
                        var t = new Promise(function(e, t) {
                            var n = r[d][i];
                            if (n) {
                                n.stopRecord().then(function() {
                                    delete r[d][i];
                                    e()
                                }, function() {
                                    t()
                                })
                            } else {
                                t()
                            }
                        }
                        );
                        return t
                    }
                }]);
                return i
            }();
            return e
        }();
        t.StorageManager = y
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function e() {
            var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "https://open.ys7.com/assets/ezuikit_v3.6";
            return "(function() {\n    const RECORDRTP = 0;  //录制一份未经过转封装的码流原始数据，用于定位问题\n    self.Module = { memoryInitializerRequest: loadMemInitFile(), TOTAL_MEMORY: 128*1024*1024 };\n    importScripts('" + t + '/js/transform/SystemTransform.js\');\n\n    Module.postRun.push(function() {\n        postMessage({type: "loaded"});\n    });\n\n    onmessage = function (e) {\n        var data = e.data;\n\n        if ("create" === data.type) {\n            var iHeadLen = data.len;\n            var pHead = Module._malloc(iHeadLen);\n\n            var aData = Module.HEAPU8.subarray(pHead, pHead + iHeadLen);\n            aData.set(new Uint8Array(data.buf));\n\n            var iTransType = data.packType;//目标格式 RTP->PS\n            if (RECORDRTP) {\n                postMessage({type: "created"});\n                postMessage({type: "outputData", buf: data.buf, dType: 1}, [data.buf]);\n            } else {\n                var iRet = Module._ST_Create(pHead, iHeadLen, iTransType);\n                if (iRet != 0) {\n                    console.log("_ST_Create failed!");\n                } else {\n                    Module._ST_Start();\n                    postMessage({type: "created"});\n                }\n            }\n\n        } else if ("inputData" === data.type) {\n            if (RECORDRTP) {\n                var aFileData = new Uint8Array(data.buf);  // 拷贝一份\n                var iBufferLen = aFileData.length;\n                var szBufferLen = iBufferLen.toString(16);\n                if (szBufferLen.length === 1) {\n                    szBufferLen = "000" + szBufferLen;\n                } else if (szBufferLen.length === 2) {\n                    szBufferLen = "00" + szBufferLen;\n                } else if (szBufferLen.length === 3) {\n                    szBufferLen = "0" + szBufferLen;\n                }\n                var aData = [0, 0, parseInt(szBufferLen.substring(0, 2), 16), parseInt(szBufferLen.substring(2, 4), 16)];\n                for(var iIndex = 0, iDataLength = aFileData.length; iIndex < iDataLength; iIndex++) {\n                    aData[iIndex + 4] = aFileData[iIndex]\n                }\n                var dataUint8 = new Uint8Array(aData);\n                postMessage({type: "outputData", buf: dataUint8.buffer, dType: 2}, [dataUint8.buffer]);\n            } else {\n                var iDataLen = data.len;\n                var pData = Module._malloc(iDataLen);\n\n                var aData = Module.HEAPU8.subarray(pData, pData + iDataLen);\n                aData.set(new Uint8Array(data.buf));\n\n                var iRet = Module._ST_InputData(0, pData, iDataLen);\n                if (iRet != 0) {\n                    //console.log("_ST_InputData failed!");// 一开始会有一些失败，但是不影响后面的文件存储\n                }\n\n                Module._free(pData);\n            }\n        } else if ("release" === data.type) {\n            Module._ST_Stop();\n            Module._ST_Release();\n\n            close();\n        }\n    };\n\n    function loadMemInitFile() {\n        var req = new XMLHttpRequest();\n        req.open(\'GET\', \'' + t + "/js/transform/SystemTransform.js.mem');\n        req.responseType = 'arraybuffer';\n        req.send();\n\n        return req;\n    }\n})();"
        };
        t.default = i
    }
    , function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        t.ESCanvas = undefined;
        var a = function() {
            function i(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value"in i)
                        i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(e, t, n) {
                if (t)
                    i(e.prototype, t);
                if (n)
                    i(e, n);
                return e
            }
        }();
        var i = n(1);
        var s = r(i);
        function r(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function u(e, t) {
            if (!e) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
            }
            return t && (typeof t === "object" || typeof t === "function") ? t : e
        }
        function T(e, t) {
            if (typeof t !== "function" && t !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof t)
            }
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (t)
                Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t
        }
        function M(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var o = function() {
            var g = null;
            var f = Symbol("CANVAS");
            var S = Symbol("CONTEXT");
            var d = Symbol("SHAPES");
            var c = Symbol("DRAWSTATUS");
            var h = Symbol("SHAPETYPE");
            var p = Symbol("MAXSHAPENUMSUPPORT");
            var r = Symbol("SHAPESTYLE");
            var v = Symbol("POLYGONDRAWING");
            var m = Symbol("CURRENTSHAPEINFO");
            var y = Symbol("DRAWSHAPEMULTIONETIME");
            var i = Symbol("EVENTCALLBACK");
            function b() {
                g[S].clearRect(0, 0, g.m_iCanvasWidth, g.m_iCanvasHeight);
                for (var e = 0, t = g[d].length; e < t; e++) {
                    g[d][e].draw()
                }
            }
            function w(e) {
                var t = g[d].length;
                if (t < g[p]) {
                    g[d].push(e)
                }
            }
            function n() {
                var r = false;
                var a = 0;
                var o = 0;
                var s = "draw";
                var l = null;
                function u() {
                    var e = -1;
                    for (var t = 0, n = g[d].length; t < n; t++) {
                        if (g[d][t].m_bChoosed) {
                            e = t;
                            break
                        }
                    }
                    return e
                }
                g[f][0].oncontextmenu = function() {
                    return false
                }
                ;
                g[f][0].onselectstart = function() {
                    return false
                }
                ;
                g[f].unbind();
                g[f].bind("mousedown", function(e) {
                    if (e.button === 2) {
                        if (g[v] && l) {
                            if (l.m_aPoint.length >= l.m_iMinClosed) {
                                l.m_bClosed = true;
                                g[v] = false;
                                l.setPointInfo(l.m_aPoint);
                                w(l);
                                b();
                                r = false;
                                if (!g[y]) {
                                    g[c] = false
                                }
                                window.onDrawShapeEvent && window.onDrawShapeEvent(l.m_szType, "onDrawEnd", l.m_szId)
                            }
                        }
                    } else if (e.button === 0) {
                        a = e.offsetX;
                        o = e.offsetY;
                        s = "draw";
                        if (!g[v]) {
                            var t = u();
                            if (t !== -1) {
                                if (g[d][t].inArc(e.offsetX, e.offsetY, 5)) {
                                    s = "stretch"
                                }
                            }
                            if (s !== "stretch") {
                                for (var n = 0, i = g[d].length; n < i; n++) {
                                    if (g[d][n].inShape(e.offsetX, e.offsetY) && g[d][n].m_iEditType !== 2) {
                                        g[d][n].m_bChoosed = true;
                                        g[d][n].getMouseDownPoints(e.offsetX, e.offsetY);
                                        s = "drag";
                                        window.onDrawShapeEvent && window.onDrawShapeEvent(g[d][n].m_szType, "onChoose", g[d][n].m_szId)
                                    } else {
                                        g[d][n].m_bChoosed = false
                                    }
                                }
                            }
                            if (s === "drag") {
                                g[f][0].style.cursor = "move"
                            } else {
                                g[f][0].style.cursor = "default"
                            }
                            if ("draw" === s && 1 === g[d].length && 1 === g[d][0].m_iRedrawMode) {
                                g.deleteRepeatPolyonById(g[d][0].m_szId);
                                g[c] = true
                            }
                            if (g[c] && !g[y]) {
                                s = "draw"
                            }
                        }
                        if (s === "draw") {
                            if (g[c]) {
                                if (g[p] <= g[d].length && g[h] !== "Grid" && g[h] !== "Point") {
                                    return
                                }
                                if (g[h] === "Rect") {
                                    l = new P;
                                    l.m_szTips = g[m].szTips || ""
                                } else if (g[h] === "Grid") {
                                    if (g[d].length === 0) {
                                        l = new _;
                                        w(l)
                                    }
                                } else if (g[h] === "Polygon") {
                                    if (!g[v]) {
                                        g[v] = true;
                                        l = new D;
                                        l.m_szId = g[m].szId || "";
                                        l.m_szTips = g[m].szTips || "";
                                        l.m_iMinClosed = g[m].iMinClosed || 3;
                                        l.m_iMaxPointNum = g[m].iMaxPointNum || 11;
                                        l.m_iPolygonType = g[m].iPolygonType;
                                        l.m_szDrawColor = g[m].szDrawColor;
                                        l.m_szFillColor = g[m].szFillColor;
                                        l.m_iTranslucent = g[m].iTranslucent;
                                        l.m_iRedrawMode = g[m].iRedrawMode
                                    }
                                    if (l.m_iPolygonType === 1) {
                                        l.addPoint(a, o);
                                        if (l.m_aPoint.length === l.m_iMaxPointNum) {
                                            l.m_bClosed = true;
                                            g[v] = false;
                                            w(l);
                                            b();
                                            r = false;
                                            if (!g[y]) {
                                                g[c] = false
                                            }
                                            window.onDrawShapeEvent && window.onDrawShapeEvent(l.m_szType, "onDrawEnd", l.m_szId)
                                        }
                                    }
                                } else if (g[h] === "Point") {
                                    g.clearShapeByType("Point");
                                    l = new C;
                                    l.m_szId = g[m].szId || "";
                                    l.m_szDrawColor = g[m].szDrawColor;
                                    l.setPointInfo([[a, o]]);
                                    w(l);
                                    b()
                                }
                            }
                        }
                        r = true
                    }
                });
                g[f].bind("mousemove", function(e) {
                    if (!g[v]) {
                        var t = u();
                        if (t > -1) {
                            if (r) {
                                if (s === "drag") {
                                    g[d][t].drag(e.offsetX, e.offsetY);
                                    window.onDrawShapeEvent && window.onDrawShapeEvent(g[d][t].m_szType, "onDrag", g[d][t].m_szId)
                                } else if (s === "stretch") {
                                    g[d][t].stretch(e.offsetX, e.offsetY);
                                    window.onDrawShapeEvent && window.onDrawShapeEvent(g[d][t].m_szType, "onStretch", g[d][t].m_szId)
                                }
                            }
                        } else {
                            if (g[c]) {
                                if (r) {
                                    if (g[h] === "Rect") {
                                        l.move([[a, o], [e.offsetX, e.offsetY]])
                                    } else if (g[h] === "Grid") {
                                        g[d][0].move(a, o, e.offsetX, e.offsetY)
                                    }
                                }
                            }
                        }
                    } else {
                        if (g[c]) {
                            if (r) {
                                if (g[h] === "Polygon" && l.m_iPolygonType === 0) {
                                    l.m_bClosed = true
                                }
                                b();
                                l.move(e.offsetX, e.offsetY, a, o)
                            }
                        }
                    }
                });
                g[f].bind("mouseup", function(e) {
                    g[f][0].style.cursor = "default";
                    if (l !== null && typeof l !== "undefined" && s === "draw") {
                        if (g[h] === "Rect") {
                            if (Math.abs(e.offsetX - a) > 2 && Math.abs(e.offsetY - o) > 2) {
                                w(l);
                                if (!g[y]) {
                                    g[c] = false
                                }
                            }
                            if (g[i]) {
                                var t = {
                                    startPos: [],
                                    endPos: []
                                };
                                if (e.offsetX > a && e.offsetY > o) {
                                    t.startPos = l.m_aPoint[0] || [e.offsetX, e.offsetY];
                                    t.endPos = l.m_aPoint[2] || [e.offsetX, e.offsetY]
                                } else {
                                    t.startPos = l.m_aPoint[2] || [e.offsetX, e.offsetY];
                                    t.endPos = l.m_aPoint[0] || [e.offsetX, e.offsetY]
                                }
                                g[i] && g[i](t);
                                g.clearAllShape()
                            }
                            l = null
                        } else if (g[h] === "Polygon" && l.m_iPolygonType === 0 && g[v]) {
                            if (Math.abs(e.offsetX - a) > 2 && Math.abs(e.offsetY - o) > 2) {
                                w(l);
                                g[v] = false;
                                if (!g[y]) {
                                    g[c] = false
                                }
                                window.onDrawShapeEvent && window.onDrawShapeEvent(l.m_szType, "onDrawEnd", l.m_szId)
                            }
                        }
                    }
                    if (!g[v]) {
                        r = false
                    } else {
                        r = true
                    }
                    if (!g[v]) {
                        b()
                    }
                });
                g[f].bind("dblclick", function() {
                    if (g[c]) {
                        if (g[h] === "Grid") {
                            g[d][0].m_szGridMap = "fffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffcfffffc";
                            b()
                        }
                    }
                });
                g[f].bind("mouseout", function() {
                    g[f][0].style.cursor = "default";
                    if (!g[v]) {
                        r = false
                    } else {
                        r = true
                    }
                })
            }
            var e = function() {
                function e() {
                    M(this, e);
                    this.m_szId = "";
                    this.m_aPoint = [];
                    this.m_bChoosed = false;
                    this.m_szDrawColor = g[r].szDrawColor;
                    this.m_szFillColor = g[r].szFillColor;
                    this.m_iTranslucent = g[r].iTranslucent;
                    this.m_iIndexChoosePoint = -1;
                    this.m_iDriftStartX = 0;
                    this.m_iDriftStartY = 0;
                    this.m_oEdgePoints = {
                        top: {
                            x: 0,
                            y: 0
                        },
                        left: {
                            x: 0,
                            y: 0
                        },
                        right: {
                            x: 0,
                            y: 0
                        },
                        bottom: {
                            x: 0,
                            y: 0
                        }
                    };
                    this.m_szTips = "";
                    this.m_iEditType = 0;
                    this.m_iMinClosed = 3;
                    this.m_iMaxPointNum = 11;
                    this.m_bClosed = false;
                    this.m_iRedrawMode = 0
                }
                a(e, [{
                    key: "draw",
                    value: function e() {}
                }, {
                    key: "drag",
                    value: function e(t, n) {
                        if (this.m_iEditType !== 2) {
                            var i = this.m_aPoint.length;
                            var r = 0;
                            for (r = 0; r < i; r++) {
                                if (this.m_aPoint[r][0] + t - this.m_iDriftStartX > g.m_iCanvasWidth || this.m_aPoint[r][1] + n - this.m_iDriftStartY > g.m_iCanvasHeight || this.m_aPoint[r][0] + t - this.m_iDriftStartX < 0 || this.m_aPoint[r][1] + n - this.m_iDriftStartY < 0) {
                                    this.m_iDriftStartX = t;
                                    this.m_iDriftStartY = n;
                                    return
                                }
                            }
                            for (r = 0; r < i; r++) {
                                this.m_aPoint[r][0] = this.m_aPoint[r][0] + t - this.m_iDriftStartX;
                                this.m_aPoint[r][1] = this.m_aPoint[r][1] + n - this.m_iDriftStartY
                            }
                            this.m_iDriftStartX = t;
                            this.m_iDriftStartY = n;
                            this.setPointInfo(this.m_aPoint);
                            b()
                        }
                    }
                }, {
                    key: "stretch",
                    value: function e(t, n) {
                        if (this.m_iEditType === 0) {
                            if (this.m_iIndexChoosePoint !== -1) {
                                this.m_aPoint[this.m_iIndexChoosePoint][0] = t;
                                this.m_aPoint[this.m_iIndexChoosePoint][1] = n
                            }
                            this.setPointInfo(this.m_aPoint);
                            b()
                        }
                    }
                }, {
                    key: "inShape",
                    value: function e(t, n) {
                        var i = false;
                        var r = this.m_aPoint.length;
                        for (var a = 0, o = r - 1; a < r; o = a++) {
                            if (this.m_aPoint[a][1] > n !== this.m_aPoint[o][1] > n && t < (this.m_aPoint[o][0] - this.m_aPoint[a][0]) * (n - this.m_aPoint[a][1]) / (this.m_aPoint[o][1] - this.m_aPoint[a][1]) + this.m_aPoint[a][0]) {
                                i = !i
                            }
                        }
                        return i
                    }
                }, {
                    key: "inArc",
                    value: function e(t, n, i) {
                        var r = false;
                        for (var a = 0, o = this.m_aPoint.length; a < o; a++) {
                            var s = Math.sqrt((t - this.m_aPoint[a][0]) * (t - this.m_aPoint[a][0]) + (n - this.m_aPoint[a][1]) * (n - this.m_aPoint[a][1]));
                            if (s < i) {
                                r = true;
                                this.m_iIndexChoosePoint = a;
                                break
                            }
                        }
                        return r
                    }
                }, {
                    key: "getMouseDownPoints",
                    value: function e(t, n) {
                        this.m_iDriftStartX = t;
                        this.m_iDriftStartY = n
                    }
                }, {
                    key: "getPointInfo",
                    value: function e() {
                        return this.m_aPoint
                    }
                }, {
                    key: "setPointInfo",
                    value: function e(t) {
                        if (t !== null && typeof t !== "undefined" && t.length > 0) {
                            this.m_aPoint = t;
                            this.setEdgePoints(t)
                        }
                    }
                }, {
                    key: "addPoint",
                    value: function e(t, n) {
                        if (this.m_aPoint.length < this.m_iMaxPointNum) {
                            this.m_aPoint.push([t, n])
                        }
                        if (this.m_aPoint.length === this.m_iMaxPointNum) {
                            this.setPointInfo(this.m_aPoint)
                        }
                    }
                }, {
                    key: "setEdgePoints",
                    value: function e(t) {
                        for (var n = 0, i = t.length; n < i; n++) {
                            if (n === 0) {
                                this.m_oEdgePoints.top.x = t[n][0];
                                this.m_oEdgePoints.top.y = t[n][1];
                                this.m_oEdgePoints.left.x = t[n][0];
                                this.m_oEdgePoints.left.y = t[n][1];
                                this.m_oEdgePoints.right.x = t[n][0];
                                this.m_oEdgePoints.right.y = t[n][1];
                                this.m_oEdgePoints.bottom.x = t[n][0];
                                this.m_oEdgePoints.bottom.y = t[n][1]
                            } else {
                                if (t[n][1] < this.m_oEdgePoints.top.y) {
                                    this.m_oEdgePoints.top.x = t[n][0];
                                    this.m_oEdgePoints.top.y = t[n][1]
                                }
                                if (t[n][0] > this.m_oEdgePoints.right.x) {
                                    this.m_oEdgePoints.right.x = t[n][0];
                                    this.m_oEdgePoints.right.y = t[n][1]
                                }
                                if (t[n][1] > this.m_oEdgePoints.bottom.y) {
                                    this.m_oEdgePoints.bottom.x = t[n][0];
                                    this.m_oEdgePoints.bottom.y = t[n][1]
                                }
                                if (t[n][0] < this.m_oEdgePoints.left.x) {
                                    this.m_oEdgePoints.left.x = t[n][0];
                                    this.m_oEdgePoints.left.y = t[n][1]
                                }
                            }
                        }
                    }
                }]);
                return e
            }();
            var P = function(e) {
                T(t, e);
                function t() {
                    M(this, t);
                    var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    e.m_szType = "Rect";
                    return e
                }
                a(t, [{
                    key: "setPointInfo",
                    value: function e(t) {
                        if (t !== null && typeof t !== "undefined") {
                            var n = t[0][0];
                            var i = t[0][1];
                            var r = t[0][0];
                            var a = t[0][1];
                            for (var o = 0, s = t.length; o < s; o++) {
                                if (n > t[o][0]) {
                                    n = t[o][0]
                                }
                                if (i > t[o][1]) {
                                    i = t[o][1]
                                }
                                if (r < t[o][0]) {
                                    r = t[o][0]
                                }
                                if (a < t[o][1]) {
                                    a = t[o][1]
                                }
                            }
                            this.m_aPoint = [[n, i], [r, i], [r, a], [n, a]]
                        }
                    }
                }, {
                    key: "draw",
                    value: function e() {
                        g[S].fillStyle = this.m_szFillColor;
                        g[S].strokeStyle = this.m_szDrawColor;
                        var t = this.m_aPoint[0][0];
                        var n = this.m_aPoint[0][1];
                        var i = this.m_aPoint[2][0] - t;
                        var r = this.m_aPoint[2][1] - n;
                        g[S].globalAlpha = this.m_iTranslucent;
                        g[S].fillRect(t, n, i, r);
                        g[S].globalAlpha = 1;
                        g[S].fillText(this.m_szTips, (t + this.m_aPoint[2][0]) / 2, (n + this.m_aPoint[2][1]) / 2);
                        if (this.m_bChoosed) {
                            var a = Math.round(i / 2);
                            var o = Math.round(r / 2);
                            if (this.m_iEditType === 0) {
                                var s = [t, t + a, t + i, t, t + i, t, t + a, t + i];
                                var l = [n, n, n, n + o, n + o, n + r, n + r, n + r];
                                for (var u = 0; u < 8; u++) {
                                    g[S].beginPath();
                                    g[S].arc(s[u], l[u], 3, 0, 360, false);
                                    g[S].fillStyle = this.m_szDrawColor;
                                    g[S].closePath();
                                    g[S].fill()
                                }
                            }
                        }
                        g[S].strokeRect(t, n, i, r)
                    }
                }, {
                    key: "stretch",
                    value: function e(t, n) {
                        if (this.m_iEditType === 0) {
                            if (this.m_iIndexChoosePoint === 0) {
                                if (t < this.m_aPoint[2][0] && n < this.m_aPoint[2][1]) {
                                    this.m_aPoint[0][0] = t;
                                    this.m_aPoint[0][1] = n;
                                    this.m_aPoint[3][0] = t;
                                    this.m_aPoint[1][1] = n
                                }
                            } else if (this.m_iIndexChoosePoint === 1) {
                                if (n < this.m_aPoint[2][1]) {
                                    this.m_aPoint[0][1] = n;
                                    this.m_aPoint[1][1] = n
                                }
                            } else if (this.m_iIndexChoosePoint === 2) {
                                if (t > this.m_aPoint[3][0] && n < this.m_aPoint[3][1]) {
                                    this.m_aPoint[1][0] = t;
                                    this.m_aPoint[1][1] = n;
                                    this.m_aPoint[2][0] = t;
                                    this.m_aPoint[0][1] = n
                                }
                            } else if (this.m_iIndexChoosePoint === 3) {
                                if (t < this.m_aPoint[2][0]) {
                                    this.m_aPoint[0][0] = t;
                                    this.m_aPoint[3][0] = t
                                }
                            } else if (this.m_iIndexChoosePoint === 4) {
                                if (t > this.m_aPoint[0][0]) {
                                    this.m_aPoint[1][0] = t;
                                    this.m_aPoint[2][0] = t
                                }
                            } else if (this.m_iIndexChoosePoint === 5) {
                                if (t < this.m_aPoint[1][0] && n > this.m_aPoint[1][1]) {
                                    this.m_aPoint[3][0] = t;
                                    this.m_aPoint[3][1] = n;
                                    this.m_aPoint[0][0] = t;
                                    this.m_aPoint[2][1] = n
                                }
                            } else if (this.m_iIndexChoosePoint === 6) {
                                if (n > this.m_aPoint[1][1]) {
                                    this.m_aPoint[2][1] = n;
                                    this.m_aPoint[3][1] = n
                                }
                            } else if (this.m_iIndexChoosePoint === 7) {
                                if (t > this.m_aPoint[0][0] && n > this.m_aPoint[0][1]) {
                                    this.m_aPoint[2][0] = t;
                                    this.m_aPoint[2][1] = n;
                                    this.m_aPoint[1][0] = t;
                                    this.m_aPoint[3][1] = n
                                }
                            }
                            b()
                        }
                    }
                }, {
                    key: "move",
                    value: function e(t) {
                        b();
                        this.m_bChoosed = true;
                        var n = t[0][0];
                        var i = t[0][1];
                        var r = t[1][0];
                        var a = t[1][1];
                        this.setPointInfo([[n, i], [r, i], [r, a], [n, a]]);
                        this.draw()
                    }
                }, {
                    key: "inArc",
                    value: function e(t, n, i) {
                        var r = this.m_aPoint[0][0];
                        var a = this.m_aPoint[0][1];
                        var o = this.m_aPoint[2][0] - r;
                        var s = this.m_aPoint[2][1] - a;
                        var l = Math.round(o / 2);
                        var u = Math.round(s / 2);
                        var f = [r, r + l, r + o, r, r + o, r, r + l, r + o];
                        var d = [a, a, a, a + u, a + u, a + s, a + s, a + s];
                        for (var c = 0; c < 8; c++) {
                            var h = Math.sqrt((t - f[c]) * (t - f[c]) + (n - d[c]) * (n - d[c]));
                            if (h < i) {
                                this.m_iIndexChoosePoint = c;
                                return true
                            }
                        }
                        return false
                    }
                }]);
                return t
            }(e);
            var l = function(e) {
                T(i, e);
                function i(e, t) {
                    M(this, i);
                    var n = u(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
                    n.m_szType = "RectOSD";
                    n.m_szOSDType = "overlay-date";
                    n.m_szText = e || "";
                    n.m_szEnabled = t || "";
                    n.m_szDateStyle = "";
                    n.m_szClockType = "";
                    n.m_szDisplayWeek = "";
                    n.m_szId = "";
                    n.m_szAlignment = "0";
                    return n
                }
                a(i, [{
                    key: "draw",
                    value: function e() {
                        if (this.m_szEnabled === "true") {
                            var t = this.m_aPoint[0][0];
                            var n = this.m_aPoint[0][1];
                            var i = this.m_aPoint[2][0] - t;
                            var r = this.m_aPoint[2][1] - n;
                            g[S].beginPath();
                            g[S].strokeStyle = this.m_szDrawColor;
                            g[S].globalAlpha = 1;
                            g[S].rect(t, n, i, r);
                            g[S].font = "15px serif";
                            g[S].strokeText(this.m_szText, t, n + 15);
                            g[S].stroke()
                        }
                    }
                }, {
                    key: "drag",
                    value: function e(t, n) {
                        var i = this.m_aPoint.length;
                        var r = 0;
                        if ("0" === this.m_szAlignment) {
                            for (r = 0; r < i; r++) {
                                if (this.m_aPoint[r][1] + n - this.m_iDriftStartY > g.m_iCanvasHeight || this.m_aPoint[r][0] + t - this.m_iDriftStartX < 0 || this.m_aPoint[r][1] + n - this.m_iDriftStartY < 0) {
                                    this.m_iDriftStartX = t;
                                    this.m_iDriftStartY = n;
                                    return
                                }
                            }
                            for (r = 0; r < i; r++) {
                                this.m_aPoint[r][0] = this.m_aPoint[r][0] + t - this.m_iDriftStartX;
                                this.m_aPoint[r][1] = this.m_aPoint[r][1] + n - this.m_iDriftStartY
                            }
                        } else if ("1" === this.m_szAlignment || "2" === this.m_szAlignment) {
                            for (r = 0; r < i; r++) {
                                if (this.m_aPoint[r][1] + n - this.m_iDriftStartY > g.m_iCanvasHeight || this.m_aPoint[r][1] + n - this.m_iDriftStartY < 0) {
                                    this.m_iDriftStartX = t;
                                    this.m_iDriftStartY = n;
                                    return
                                }
                            }
                            for (r = 0; r < i; r++) {
                                this.m_aPoint[r][1] = this.m_aPoint[r][1] + n - this.m_iDriftStartY
                            }
                        }
                        this.m_iDriftStartX = t;
                        this.m_iDriftStartY = n;
                        this.setEdgePoints(this.m_aPoint);
                        b()
                    }
                }, {
                    key: "stretch",
                    value: function e() {}
                }]);
                return i
            }(e);
            var _ = function(e) {
                T(t, e);
                function t() {
                    M(this, t);
                    var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    e.m_szType = "Grid";
                    e.m_iGridColNum = 22;
                    e.m_iGridRowNum = 18;
                    e.m_szGridMap = "";
                    e.m_aAddGridMap = [];
                    return e
                }
                a(t, [{
                    key: "draw",
                    value: function e() {
                        var t = g.m_iCanvasWidth / this.m_iGridColNum;
                        var n = g.m_iCanvasHeight / this.m_iGridRowNum;
                        var i = "";
                        for (var r = 0; r < this.m_iGridRowNum; r++) {
                            var a = this.m_szGridMap.substring(r * 6, r * 6 + 6);
                            var o = parseInt("f" + a, 16).toString(2).split("").slice(4);
                            var s = "";
                            for (var l = 0; l < this.m_iGridColNum; l++) {
                                var u = "";
                                if (o[l] === "1") {
                                    g[S].strokeStyle = this.m_szDrawColor;
                                    g[S].globalAlpha = 1;
                                    g[S].strokeRect(t * l, n * r, t, n);
                                    u = "1"
                                } else {
                                    u = "0"
                                }
                                if (this.m_aAddGridMap.length) {
                                    if (this.m_aAddGridMap[r][l] === 1) {
                                        g[S].strokeStyle = this.m_szDrawColor;
                                        g[S].strokeRect(t * l, n * r, t, n);
                                        u = "1"
                                    }
                                }
                                s += u
                            }
                            i += parseInt("1111" + s + "00", 2).toString(16).substring(1)
                        }
                        this.m_szGridMap = i
                    }
                }, {
                    key: "move",
                    value: function e(t, n, i, r) {
                        var a = g.m_iCanvasWidth / this.m_iGridColNum;
                        var o = g.m_iCanvasHeight / this.m_iGridRowNum;
                        var s = Math.floor(t / a);
                        var l = Math.floor(n / o);
                        var u = Math.floor(Math.abs(i - t) / a);
                        var f = Math.floor(Math.abs(r - n) / o);
                        var d = 1;
                        var c = 1;
                        if (i - t > 0) {
                            d = 1
                        } else {
                            d = -1
                        }
                        if (r - n > 0) {
                            c = 1
                        } else {
                            c = -1
                        }
                        var h = [];
                        for (var p = 0; p < this.m_iGridRowNum; p++) {
                            h[p] = [];
                            for (var v = 0; v < this.m_iGridColNum; v++) {
                                if (d === 1) {
                                    if (c === 1) {
                                        if (p >= l && p <= l + f && v >= s && v <= s + u) {
                                            h[p][v] = 1
                                        } else {
                                            h[p][v] = 0
                                        }
                                    } else {
                                        if (p <= l && p >= l - f && v >= s && v <= s + u) {
                                            h[p][v] = 1
                                        } else {
                                            h[p][v] = 0
                                        }
                                    }
                                } else {
                                    if (c === 1) {
                                        if (p >= l && p <= l + f && v <= s && v >= s - u) {
                                            h[p][v] = 1
                                        } else {
                                            h[p][v] = 0
                                        }
                                    } else {
                                        if (p <= l && p >= l - f && v <= s && v >= s - u) {
                                            h[p][v] = 1
                                        } else {
                                            h[p][v] = 0
                                        }
                                    }
                                }
                            }
                        }
                        this.m_aAddGridMap = h;
                        this.draw()
                    }
                }]);
                return t
            }(e);
            var o = function(e) {
                T(t, e);
                function t() {
                    M(this, t);
                    var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    e.m_szType = "Line";
                    e.m_iLineType = 0;
                    e.m_iDirection = 0;
                    e.m_iArrowType = 0;
                    e.m_aCrossArrowPoint = [];
                    return e
                }
                a(t, [{
                    key: "draw",
                    value: function e() {
                        if (this.m_iLineType === 0) {
                            this.drawNormalLine()
                        } else if (this.m_iLineType === 1) {
                            this.drawArrowLine()
                        } else if (this.m_iLineType === 3) {
                            this.drawCrossLine()
                        } else if (this.m_iLineType === 4) {
                            this.drawLineCount()
                        }
                    }
                }, {
                    key: "drawNormalLine",
                    value: function e() {
                        g[S].globalAlpha = 1;
                        if (this.m_aPoint.length > 0) {
                            g[S].beginPath();
                            g[S].strokeStyle = this.m_szDrawColor;
                            g[S].lineWidth = 2;
                            g[S].moveTo(this.m_aPoint[0][0], this.m_aPoint[0][1]);
                            for (var t = 1, n = this.m_aPoint.length; t < n; t++) {
                                g[S].lineTo(this.m_aPoint[t][0], this.m_aPoint[t][1])
                            }
                            g[S].stroke();
                            if (this.m_bChoosed) {
                                for (var i = 0, r = this.m_aPoint.length; i < r; i++) {
                                    g[S].beginPath();
                                    g[S].fillStyle = this.m_szDrawColor;
                                    g[S].arc(this.m_aPoint[i][0], this.m_aPoint[i][1], 3, 0, Math.PI * 2, true);
                                    g[S].closePath();
                                    g[S].fill()
                                }
                            }
                            if (this.m_szTips !== "") {
                                g[S].strokeStyle = this.m_szDrawColor;
                                g[S].fillText(this.m_szTips, this.m_aPoint[0][0] + 10, this.m_aPoint[0][1] + 4)
                            }
                        }
                    }
                }, {
                    key: "drawArrowLine",
                    value: function e(t, n, i, r, a, o, s, l) {
                        o = typeof o !== "undefined" ? o : 30;
                        s = typeof s !== "undefined" ? s : 10;
                        l = typeof l !== "undefined" ? l : 1;
                        var u = Math.atan2(i - a, n - r) * 180 / Math.PI;
                        var f = (u + o) * Math.PI / 180;
                        var d = (u - o) * Math.PI / 180;
                        var c = s * Math.cos(f);
                        var h = s * Math.sin(f);
                        var p = s * Math.cos(d);
                        var v = s * Math.sin(d);
                        g[S].save();
                        g[S].beginPath();
                        var m = n - c;
                        var y = i - h;
                        g[S].moveTo(m, y);
                        g[S].lineTo(n, i);
                        m = n - p;
                        y = i - v;
                        g[S].lineTo(m, y);
                        g[S].moveTo(n, i);
                        g[S].lineTo(r, a);
                        if (t === 1) {
                            m = r + c;
                            y = a + h;
                            g[S].moveTo(m, y);
                            g[S].lineTo(r, a);
                            m = r + p;
                            y = a + v;
                            g[S].lineTo(m, y)
                        }
                        g[S].strokeStyle = this.m_szDrawColor;
                        g[S].lineWidth = l;
                        g[S].stroke();
                        g[S].restore()
                    }
                }, {
                    key: "drawCrossLine",
                    value: function e() {
                        this.drawNormalLine();
                        var t = (this.m_aPoint[0][0] + this.m_aPoint[1][0]) / 2;
                        var n = (this.m_aPoint[0][1] + this.m_aPoint[1][1]) / 2;
                        var i = Math.atan2(n - this.m_aPoint[0][1], t - this.m_aPoint[0][0]) * 180 / Math.PI;
                        var r = (i + 90) * Math.PI / 180;
                        var a = (i - 90) * Math.PI / 180;
                        var o = 25 * Math.cos(r);
                        var s = 25 * Math.sin(r);
                        var l = 25 * Math.cos(a);
                        var u = 25 * Math.sin(a);
                        var f = 0;
                        var d = 0;
                        f = t - o;
                        d = n - s;
                        var c = 0;
                        var h = 0;
                        if (this.m_iDirection === 0) {
                            c = -10;
                            h = -15
                        } else if (this.m_iDirection === 1) {
                            c = 10;
                            h = 10
                        } else {
                            c = 10;
                            h = -15
                        }
                        if (this.m_iDirection !== 0) {
                            this.drawArrowLine(0, f, d, t, n)
                        }
                        g[S].strokeStyle = this.m_szDrawColor;
                        g[S].font = "8px";
                        g[S].strokeText("A", f + c, d + 4);
                        f = t - l;
                        d = n - u;
                        if (this.m_iDirection !== 1) {
                            this.drawArrowLine(0, f, d, t, n)
                        }
                        g[S].strokeStyle = this.m_szDrawColor;
                        g[S].font = "8px";
                        g[S].strokeText("B", f + h, d + 4)
                    }
                }, {
                    key: "drawLineCount",
                    value: function e() {
                        this.drawNormalLine();
                        var t = (this.m_aPoint[0][0] + this.m_aPoint[1][0]) / 2;
                        var n = (this.m_aPoint[0][1] + this.m_aPoint[1][1]) / 2;
                        var i = Math.atan2(n - this.m_aPoint[0][1], t - this.m_aPoint[0][0]) * 180 / Math.PI;
                        var r = (i + 90) * Math.PI / 180;
                        var a = (i - 90) * Math.PI / 180;
                        var o = 25 * Math.cos(r);
                        var s = 25 * Math.sin(r);
                        var l = 25 * Math.cos(a);
                        var u = 25 * Math.sin(a);
                        var f = 0;
                        var d = 0;
                        f = t - o;
                        d = n - s;
                        if (this.m_iArrowType === 1) {
                            f = t - l;
                            d = n - u;
                            this.drawArrowLine(0, f, d, t, n)
                        } else if (this.m_iArrowType === 0) {
                            this.drawArrowLine(0, f, d, t, n)
                        }
                        this.m_aCrossArrowPoint = [[t, n], [f, d]]
                    }
                }, {
                    key: "inShape",
                    value: function e(t, n) {
                        var i = false;
                        for (var r = 0, a = this.m_aPoint.length - 1; r < a; r++) {
                            var o = Math.sqrt((this.m_aPoint[r + 1][0] - this.m_aPoint[r][0]) * (this.m_aPoint[r + 1][0] - this.m_aPoint[r][0]) + (this.m_aPoint[r + 1][1] - this.m_aPoint[r][1]) * (this.m_aPoint[r + 1][1] - this.m_aPoint[r][1]));
                            var s = Math.sqrt((t - this.m_aPoint[r][0]) * (t - this.m_aPoint[r][0]) + (n - this.m_aPoint[r][1]) * (n - this.m_aPoint[r][1]));
                            var l = Math.sqrt((t - this.m_aPoint[r + 1][0]) * (t - this.m_aPoint[r + 1][0]) + (n - this.m_aPoint[r + 1][1]) * (n - this.m_aPoint[r + 1][1]));
                            if (s + l - o < 1) {
                                i = true
                            }
                        }
                        return i
                    }
                }]);
                return t
            }(e);
            var D = function(e) {
                T(t, e);
                function t() {
                    M(this, t);
                    var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    e.m_szType = "Polygon";
                    e.m_iPolygonType = 1;
                    return e
                }
                a(t, [{
                    key: "setPointInfo",
                    value: function e(t) {
                        if (t !== null && typeof t !== "undefined") {
                            if (this.m_iPolygonType === 0) {
                                var n = t[0][0];
                                var i = t[0][1];
                                var r = t[0][0];
                                var a = t[0][1];
                                for (var o = 0, s = t.length; o < s; o++) {
                                    if (n > t[o][0]) {
                                        n = t[o][0]
                                    }
                                    if (i > t[o][1]) {
                                        i = t[o][1]
                                    }
                                    if (r < t[o][0]) {
                                        r = t[o][0]
                                    }
                                    if (a < t[o][1]) {
                                        a = t[o][1]
                                    }
                                }
                                this.m_aPoint = [[n, i], [r, i], [r, a], [n, a]]
                            } else if (this.m_iPolygonType === 1) {
                                this.m_aPoint = t
                            } else {
                                this.m_aPoint = t
                            }
                            this.setEdgePoints(t)
                        }
                    }
                }, {
                    key: "draw",
                    value: function e() {
                        if (this.m_aPoint.length > 0) {
                            g[S].fillStyle = this.m_szFillColor;
                            g[S].strokeStyle = this.m_szDrawColor;
                            g[S].globalAlpha = 1;
                            var t = 0;
                            var n = 0;
                            if (this.m_bChoosed) {
                                for (t = 0,
                                n = this.m_aPoint.length; t < n; t++) {
                                    g[S].beginPath();
                                    g[S].arc(this.m_aPoint[t][0], this.m_aPoint[t][1], 3, 0, 360, false);
                                    g[S].fillStyle = this.m_szDrawColor;
                                    g[S].closePath();
                                    g[S].fill()
                                }
                            }
                            g[S].beginPath();
                            g[S].moveTo(this.m_aPoint[0][0], this.m_aPoint[0][1]);
                            for (t = 0,
                            n = this.m_aPoint.length; t < n; t++) {
                                if (t !== 0) {
                                    g[S].lineTo(this.m_aPoint[t][0], this.m_aPoint[t][1])
                                }
                            }
                            g[S].stroke();
                            if (this.m_bClosed) {
                                g[S].fillText(this.m_szTips, (this.m_oEdgePoints.left.x + this.m_oEdgePoints.right.x) / 2, (this.m_oEdgePoints.top.y + this.m_oEdgePoints.bottom.y) / 2);
                                g[S].closePath();
                                g[S].stroke();
                                g[S].globalAlpha = this.m_iTranslucent;
                                g[S].fill()
                            }
                        }
                    }
                }, {
                    key: "move",
                    value: function e(t, n, i, r) {
                        if (this.m_iPolygonType === 1) {
                            if (this.m_aPoint.length < this.m_iMaxPointNum && this.m_aPoint.length > 0) {
                                g[S].fillStyle = this.m_szFillColor;
                                g[S].strokeStyle = this.m_szDrawColor;
                                g[S].globalAlpha = 1;
                                var a = 0;
                                var o = 0;
                                for (a = 0,
                                o = this.m_aPoint.length; a < o; a++) {
                                    g[S].beginPath();
                                    g[S].arc(this.m_aPoint[a][0], this.m_aPoint[a][1], 3, 0, 360, false);
                                    g[S].fillStyle = this.m_szDrawColor;
                                    g[S].closePath();
                                    g[S].fill()
                                }
                                g[S].beginPath();
                                g[S].moveTo(this.m_aPoint[0][0], this.m_aPoint[0][1]);
                                for (a = 0,
                                o = this.m_aPoint.length; a < o; a++) {
                                    if (a !== 0) {
                                        g[S].lineTo(this.m_aPoint[a][0], this.m_aPoint[a][1])
                                    }
                                }
                                g[S].lineTo(t, n);
                                g[S].closePath();
                                g[S].stroke()
                            }
                        } else if (this.m_iPolygonType === 0) {
                            this.m_bChoosed = true;
                            var s = i;
                            var l = r;
                            var u = t;
                            var f = n;
                            this.setPointInfo([[s, l], [u, l], [u, f], [s, f]]);
                            this.draw()
                        }
                    }
                }, {
                    key: "stretch",
                    value: function e(t, n) {
                        if (this.m_iEditType === 0) {
                            if (this.m_iPolygonType === 1) {
                                if (this.m_iIndexChoosePoint !== -1) {
                                    this.m_aPoint[this.m_iIndexChoosePoint][0] = t;
                                    this.m_aPoint[this.m_iIndexChoosePoint][1] = n
                                }
                            } else {
                                if (this.m_iIndexChoosePoint === 0) {
                                    if (t < this.m_aPoint[2][0] && n < this.m_aPoint[2][1]) {
                                        this.m_aPoint[0][0] = t;
                                        this.m_aPoint[0][1] = n;
                                        this.m_aPoint[3][0] = t;
                                        this.m_aPoint[1][1] = n
                                    }
                                } else if (this.m_iIndexChoosePoint === 1) {
                                    if (t > this.m_aPoint[3][0] && n < this.m_aPoint[3][1]) {
                                        this.m_aPoint[1][0] = t;
                                        this.m_aPoint[1][1] = n;
                                        this.m_aPoint[2][0] = t;
                                        this.m_aPoint[0][1] = n
                                    }
                                } else if (this.m_iIndexChoosePoint === 2) {
                                    if (t > this.m_aPoint[0][0] && n > this.m_aPoint[0][1]) {
                                        this.m_aPoint[2][0] = t;
                                        this.m_aPoint[2][1] = n;
                                        this.m_aPoint[1][0] = t;
                                        this.m_aPoint[3][1] = n
                                    }
                                } else if (this.m_iIndexChoosePoint === 3) {
                                    if (t < this.m_aPoint[1][0] && n > this.m_aPoint[1][1]) {
                                        this.m_aPoint[3][0] = t;
                                        this.m_aPoint[3][1] = n;
                                        this.m_aPoint[0][0] = t;
                                        this.m_aPoint[2][1] = n
                                    }
                                }
                            }
                            this.setPointInfo(this.m_aPoint);
                            b()
                        }
                    }
                }]);
                return t
            }(e);
            var C = function(e) {
                T(t, e);
                function t() {
                    M(this, t);
                    var e = u(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    e.m_szType = "Point";
                    e.m_szId = "";
                    return e
                }
                a(t, [{
                    key: "draw",
                    value: function e() {
                        g[S].beginPath();
                        g[S].fillStyle = this.m_szDrawColor;
                        g[S].globalAlpha = 1;
                        g[S].arc(this.m_aPoint[0][0], this.m_aPoint[0][1], 10, 0, Math.PI * 2, true);
                        g[S].closePath();
                        g[S].fill()
                    }
                }, {
                    key: "drag",
                    value: function e() {}
                }, {
                    key: "stretch",
                    value: function e() {}
                }]);
                return t
            }(e);
            var t = function() {
                function t(e) {
                    M(this, t);
                    g = this;
                    this[f] = (0,
                    s.default)("#" + e);
                    this[S] = this[f][0].getContext("2d");
                    this[d] = [];
                    this[c] = false;
                    this[h] = "Rect";
                    this[p] = 10;
                    this[y] = true;
                    this[m] = {};
                    this[i] = null;
                    this[r] = {
                        szDrawColor: "#ff0000",
                        szFillColor: "#343434",
                        iTranslucent: .7
                    };
                    this[v] = false;
                    this.m_iCanvasWidth = this[f].width();
                    this.m_iCanvasHeight = this[f].height();
                    this.m_iHorizontalResolution = 0;
                    this.m_iVerticalResolution = 0;
                    this.m_szDisplayMode = "";
                    this.m_szVideoFormat = "";
                    n();
                    this[d].length = 0
                }
                a(t, [{
                    key: "setDrawMutiShapeOneTime",
                    value: function e(t) {
                        this[y] = t
                    }
                }, {
                    key: "setMaxShapeSupport",
                    value: function e(t) {
                        this[p] = t
                    }
                }, {
                    key: "getMaxShapeSupport",
                    value: function e() {
                        return this[p]
                    }
                }, {
                    key: "setDrawStatus",
                    value: function e(t, n) {
                        this[c] = t;
                        if (n && t) {
                            this[i] = n
                        }
                        if (!t) {
                            this[i] = null
                        }
                    }
                }, {
                    key: "setShapeType",
                    value: function e(t) {
                        this[h] = t;
                        b()
                    }
                }, {
                    key: "setCurrentShapeInfo",
                    value: function e(t) {
                        this[m] = t || {
                            szId: "",
                            szTips: "",
                            iMinClosed: 3,
                            iMaxPointNum: 11,
                            iPolygonType: 1,
                            iRedrawMode: 0
                        }
                    }
                }, {
                    key: "getShapeType",
                    value: function e() {
                        return this[h]
                    }
                }, {
                    key: "getAllShapesInfo",
                    value: function e() {
                        var t = [];
                        for (var n = 0, i = this[d].length; n < i; n++) {
                            if (this[d][n].m_szType === "Grid") {
                                t.push({
                                    szType: this[d][n].m_szType,
                                    szGridMap: this[d][n].m_szGridMap,
                                    iGridColNum: this[d][n].m_iGridColNum,
                                    iGridRowNum: this[d][n].m_iGridRowNum
                                })
                            } else if (this[d][n].m_szType === "RectOSD") {
                                t.push({
                                    szType: this[d][n].m_szType,
                                    szText: this[d][n].m_szText,
                                    szEnabled: this[d][n].m_szEnabled,
                                    szOSDType: this[d][n].m_szOSDType,
                                    iPositionX: this[d][n].m_aPoint[0][0],
                                    iPositionY: this[d][n].m_aPoint[0][1],
                                    szDateStyle: this[d][n].m_szDateStyle,
                                    szClockType: this[d][n].m_szClockType,
                                    szDisplayWeek: this[d][n].m_szDisplayWeek,
                                    szId: this[d][n].m_szId,
                                    szAlignment: this[d][n].m_szAlignment
                                })
                            } else {
                                t.push({
                                    szType: this[d][n].m_szType,
                                    aPoint: this[d][n].m_aPoint,
                                    szId: this[d][n].m_szId,
                                    bChoosed: this[d][n].m_bChoosed
                                })
                            }
                        }
                        return t
                    }
                }, {
                    key: "deleteRepeatPolyonById",
                    value: function e(t) {
                        var n = this.getAllShapesInfo();
                        var i = n.length;
                        if (i > 0) {
                            for (var r = 0; r < i; r++) {
                                if (n[r].szType === "Polygon") {
                                    if (n[r].szId === t) {
                                        this.deleteShape(r)
                                    }
                                }
                            }
                        }
                    }
                }, {
                    key: "getShapesInfoByType",
                    value: function e(t) {
                        var n = [];
                        for (var i = 0, r = this[d].length; i < r; i++) {
                            if (this[d][i].m_szType === t) {
                                if (this[d][i].m_szType === "Grid") {
                                    n.push({
                                        szType: this[d][i].m_szType,
                                        szGridMap: this[d][i].m_szGridMap,
                                        iGridColNum: this[d][i].m_iGridColNum,
                                        iGridRowNum: this[d][i].m_iGridRowNum
                                    })
                                } else if (this[d][i].m_szType === "RectOSD") {
                                    n.push({
                                        szType: this[d][i].m_szType,
                                        szText: this[d][i].m_szText,
                                        szEnabled: this[d][i].m_szEnabled,
                                        szOSDType: this[d][i].m_szOSDType,
                                        iPositionX: this[d][i].m_aPoint[0][0],
                                        iPositionY: this[d][i].m_aPoint[0][1],
                                        szDateStyle: this[d][i].m_szDateStyle,
                                        szClockType: this[d][i].m_szClockType,
                                        szDisplayWeek: this[d][i].m_szDisplayWeek,
                                        szId: this[d][i].m_szId,
                                        szAlignment: this[d][i].m_szAlignment
                                    })
                                } else if (t === "Polygon") {
                                    n.push({
                                        szType: this[d][i].m_szType,
                                        szId: this[d][i].m_szId,
                                        iPolygonType: this[d][i].m_iPolygonType,
                                        iMinClosed: this[d][i].m_iMinClosed,
                                        iMaxPointNum: this[d][i].m_iMaxPointNum,
                                        iEditType: this[d][i].m_iEditType,
                                        aPoint: this[d][i].m_aPoint,
                                        bClosed: this[d][i].m_bClosed,
                                        szTips: this[d][i].m_szTips,
                                        szDrawColor: this[d][i].m_szDrawColor,
                                        szFillColor: this[d][i].m_szFillColor,
                                        iTranslucent: this[d][i].m_iTranslucent
                                    })
                                } else if (t === "Line") {
                                    n.push({
                                        szType: this[d][i].m_szType,
                                        szId: this[d][i].m_szId,
                                        aPoint: this[d][i].m_aPoint,
                                        szTips: this[d][i].m_szTips,
                                        iLineType: this[d][i].m_iLineType,
                                        iDirection: this[d][i].m_iDirection,
                                        iArrowType: this[d][i].m_iArrowType,
                                        szDrawColor: this[d][i].m_szDrawColor,
                                        aCrossArrowPoint: this[d][i].m_aCrossArrowPoint
                                    })
                                } else if (t === "Rect") {
                                    n.push({
                                        szType: this[d][i].m_szType,
                                        iEditType: this[d][i].m_iEditType,
                                        aPoint: this[d][i].m_aPoint,
                                        szTips: this[d][i].m_szTips,
                                        szDrawColor: this[d][i].m_szDrawColor,
                                        szFillColor: this[d][i].m_szFillColor,
                                        iTranslucent: this[d][i].m_iTranslucent
                                    })
                                } else {
                                    n.push({
                                        szType: this[d][i].m_szType,
                                        aPoint: this[d][i].m_aPoint
                                    })
                                }
                            }
                        }
                        return n
                    }
                }, {
                    key: "setShapesInfoByType",
                    value: function e(t, n) {
                        if (!n) {
                            n = []
                        }
                        var i = null;
                        if (t === "Rect" || t === "Polygon" || t === "Line" || t === "Point") {
                            for (var r = 0, a = n.length; r < a; r++) {
                                if (t === "Rect") {
                                    i = new P;
                                    i.m_iEditType = n[r].iEditType;
                                    i.m_szTips = n[r].szTips || "";
                                    i.m_szDrawColor = n[r].szDrawColor;
                                    i.m_szFillColor = n[r].szFillColor;
                                    i.m_iTranslucent = n[r].iTranslucent;
                                    i.m_iRedrawMode = n[r].iRedrawMode
                                } else if (t === "Polygon") {
                                    i = new D;
                                    if (n[r].iPolygonType === 0) {
                                        i.m_bClosed = true
                                    } else {
                                        i.m_bClosed = n[r].bClosed
                                    }
                                    i.m_szTips = n[r].szTips || "";
                                    i.m_szId = n[r].szId || "";
                                    i.m_iPolygonType = n[r].iPolygonType;
                                    i.m_iMinClosed = n[r].iMinClosed || 3;
                                    i.m_iMaxPointNum = n[r].iMaxPointNum || 11;
                                    i.m_iEditType = n[r].iEditType;
                                    i.m_szDrawColor = n[r].szDrawColor;
                                    i.m_szFillColor = n[r].szFillColor;
                                    i.m_iTranslucent = n[r].iTranslucent;
                                    i.m_iRedrawMode = n[r].iRedrawMode
                                } else if (t === "Line") {
                                    i = new o;
                                    i.m_iLineType = n[r].iLineType;
                                    i.m_szTips = n[r].szTips || "";
                                    i.m_szId = n[r].szId;
                                    i.m_iDirection = n[r].iDirection;
                                    i.m_iArrowType = n[r].iArrowType;
                                    i.m_szDrawColor = n[r].szDrawColor;
                                    i.setPointInfo(n[r].aPoint)
                                } else if (t === "Point") {
                                    i = new C;
                                    i.m_szId = n[r].szId;
                                    i.m_szDrawColor = n[r].szDrawColor;
                                    i.setPointInfo(n[r].aPoint)
                                }
                                i.setPointInfo(n[r].aPoint);
                                if (r === 0) {
                                    i.m_bChoosed = true
                                }
                                w(i)
                            }
                        } else if (t === "Grid") {
                            i = new _;
                            i.m_szGridMap = n[0].szGridMap || "";
                            i.m_iGridColNum = n[0].iGridColNum || 22;
                            i.m_iGridRowNum = n[0].iGridRowNum || 18;
                            w(i)
                        }
                        b()
                    }
                }, {
                    key: "addOSDShape",
                    value: function e(t, n, i, r, a) {
                        if (!i && !r) {
                            i = 0;
                            r = 0
                        }
                        if (!a) {
                            a = {}
                        }
                        var o = new l(t,n);
                        var s = t.replace(/[^x00-xff]/g, "rr").length * 10;
                        o.m_szOSDType = a.szOSDType || "";
                        o.m_szDateStyle = a.szDateStyle || "";
                        o.m_szClockType = a.szClockType || "";
                        o.m_szDisplayWeek = a.szDisplayWeek || "";
                        o.m_szId = a.szId || "";
                        o.m_szAlignment = "" + a.szAlignment || "0";
                        if ("0" === o.m_szAlignment) {
                            o.m_aPoint = [[i, r], [s + i, r], [s + i, r + 20], [i, r + 20]]
                        } else if ("1" === o.m_szAlignment) {
                            o.m_aPoint = [[0, r], [s, r], [s, r + 20], [0, r + 20]]
                        } else if ("2" === o.m_szAlignment) {
                            o.m_aPoint = [[this.m_iCanvasWidth - s, r], [this.m_iCanvasWidth, r], [this.m_iCanvasWidth, r + 20], [this.m_iCanvasWidth - s, r + 20]]
                        } else {
                            o.m_aPoint = [[i, r], [s + i, r], [s + i, r + 20], [i, r + 20]]
                        }
                        w(o);
                        b()
                    }
                }, {
                    key: "selectShapeById",
                    value: function e(t, n) {
                        for (var i = 0, r = g[d].length; i < r; i++) {
                            if (t === g[d][i].m_szType) {
                                if (n === g[d][i].m_szId) {
                                    g[d][i].m_bChoosed = true
                                } else {
                                    g[d][i].m_bChoosed = false
                                }
                            }
                        }
                        b()
                    }
                }, {
                    key: "setCanvasSize",
                    value: function e(t, n) {
                        if (t > 0 && n > 0) {
                            this.m_iCanvasWidth = t;
                            this.m_iCanvasHeight = n;
                            b()
                        }
                    }
                }, {
                    key: "setDrawStyle",
                    value: function e(t, n, i) {
                        this[r] = {
                            szDrawColor: t,
                            szFillColor: n,
                            iTranslucent: i
                        }
                    }
                }, {
                    key: "clearAllShape",
                    value: function e() {
                        this[d].length = 0;
                        g[v] = false;
                        b()
                    }
                }, {
                    key: "clearShapeByType",
                    value: function e(t) {
                        var n = this[d].length;
                        for (var i = n; i > 0; i--) {
                            if (this[d][i - 1].m_szType === t) {
                                if (t === "Grid") {
                                    this[d][i - 1].m_szGridMap = "";
                                    this[d][i - 1].m_aAddGridMap = []
                                } else {
                                    this[d].splice(i - 1, 1)
                                }
                            }
                        }
                        if ("Polygon" === t) {
                            g[v] = false
                        }
                        b()
                    }
                }, {
                    key: "deleteShape",
                    value: function e(t) {
                        if (this[d].length > t) {
                            this[d].splice(t, 1)
                        }
                        b()
                    }
                }, {
                    key: "updateCanvas",
                    value: function e(t) {
                        this[f] = (0,
                        s.default)("#" + t);
                        this[S] = this[f][0].getContext("2d");
                        this.m_iCanvasWidth = this[f].width();
                        this.m_iCanvasHeight = this[f].height();
                        n()
                    }
                }, {
                    key: "resizeCanvas",
                    value: function e() {
                        this.m_iCanvasWidth = this[f].width();
                        this.m_iCanvasHeight = this[f].height()
                    }
                }, {
                    key: "canvasRedraw",
                    value: function e() {
                        b()
                    }
                }]);
                return t
            }();
            return t
        }();
        t.ESCanvas = o
    }
    ])
});
