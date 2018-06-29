! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
    }
    var n = {};
    t.m = e, t.c = n, t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return t.d(n, "a", n), n
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, t.p = "", t(t.s = 4)
}([function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t) {
    e.exports = adLoad
}, , , function(e, t, n) {
    "use strict";
    (function(e) {
        function t(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function i(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }

        function r(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function o(e, t) {
            switch (void 0 === e ? "undefined" : Y(e)) {
                case "object":
                    e = e || {
                        r: 0,
                        g: 0,
                        b: 0,
                        a: 1
                    };
                    break;
                default:
                    if (e.indexOf("rgb") >= 0) e = e.substring(e.indexOf("(") + 1, e.lastIndexOf(")")).split(/,\s*/), e = {
                        r: parseInt(e[0]),
                        g: parseInt(e[1]),
                        b: parseInt(e[2]),
                        a: Number(e[3])
                    };
                    else {
                        if (!(e.indexOf("#") >= 0)) return e;
                        var n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(e);
                        e = n ? {
                            r: parseInt(n[1], 16),
                            g: parseInt(n[2], 16),
                            b: parseInt(n[3], 16),
                            a: n[4] ? Number(n[4], 16) : 1
                        } : null
                    }
            }
            return e.a || (e.a = 1), t >= 0 && (e.a = t), e
        }

        function a(e, t) {
            var e = o(e, t);
            return "rgba(" + e.r + "," + e.g + "," + e.b + "," + e.a + ")"
        }

        function s(e) {
            return Math.PI / 180 * e
        }

        function c(e, t, n, i, r) {
            return (r - n) / (i - n) * (t - e) + e
        }

        function u(e, t) {
            if ("string" != typeof e) return e;
            switch (t = t || document, e = e.trim(), e[0]) {
                case "#":
                    return t.getElementById(e.slice(1));
                case ".":
                    return t.getElementsByClassName(e.slice(1));
                case "<":
                    return t.getElementsByTagName(e.slice(1, e.length - 1));
                default:
                    return t.getElementById(e)
            }
        }

        function l(e) {
            if ($[e]) return $[e];
            throw new Error("ImageManager : No image named '" + e + "' has been loaded")
        }

        function f(e, t) {
            var n = void 0 != $[e];
            return n
        }

        function d(t, n) {
            if (te = n || e.failAd, J) G.push(t);
            else {
                Z = new V.default({
                    name: "imageManagerLoader",
                    onComplete: function(e) {
                        J = !1, h(e.getAllContentRaw())
                    },
                    onFail: function(e) {
                        J = !1, te.call()
                    }
                }), ee = [].concat(t), G = [];
                var i = U.slice();
                U = [], Z.add(new V.default(i, {
                    name: "dynamicImages-" + Q++,
                    fileType: "jpg"
                }));
                var r = W.slice();
                W = [], Z.add(new V.default(r, {
                    name: "dynamicCanvasImages-" + Q++,
                    fileType: "jpg",
                    crossOrigin: "anonymous"
                }));
                var o = q.slice();
                q = [];
                for (var a = 0; a < o.length; a++) Z.add(o[a]);
                J = !0, Z.load()
            }
        }

        function g(e) {
            e && h(e.getAllContentRaw())
        }

        function h(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] instanceof Image || e[t] instanceof SVGElement) {
                    var n = e[t];
                    f(e[t].id, !0) || ($[n.id] = n)
                }
            for (var t = 0; t < ee.length; t++) ee[t].call();
            G.length > 0 && d(G)
        }

        function p(e) {
            return new Promise(function(t, n) {
                var i = [];
                M.init(), N.init(), g(e), Promise.all(i).then(function() {
                    t()
                }).catch(function(e) {
                    n(e)
                })
            })
        }

        function v() {
            return new Promise(function(t, n) {
                d(t, e.failAd)
            })
        }

        function m(e, t, n, i, r, o, a, s, c, u, l) {
            var f = new CustomEvent(e);
            return f.mouse = {
                global: {
                    x: t,
                    y: n
                },
                local: {
                    x: i,
                    y: r
                }
            }, f.element = {
                x: o || 0,
                y: a || 0
            }, f.distance = {
                x: s || 0,
                y: c || 0
            }, f.velocity = {
                x: u || 0,
                y: l || 0
            }, f.direction = {
                x: u > 0 ? "right" : u < 0 ? "left" : null,
                y: l > 0 ? "down" : l < 0 ? "up" : null
            }, f
        }

        function b(e) {
            e && (e.stopImmediatePropagation(), ne[e.type] = !0)
        }

        function y(e) {
            return void 0 != ne[e]
        }

        function w() {
            ie || (ie = !0, ne = {})
        }

        function _() {
            ie = !1
        }

        function x(e, t) {
            e = u(e);
            var n = {};
            if (arguments.length > 2)
                for (var i = 1; i < arguments.length; i += 2) n = N.conformCssKeyValue(arguments[i], arguments[i + 1]);
            else n = "string" == typeof arguments[1] ? N.conformCssString(arguments[1], e) : N.conformCssObject(arguments[1], e);
            N.apply(e, n)
        }

        function C(e, t) {
            e = u(e);
            var n;
            if ("x" == t || "y" == t) {
                var i = e.style[N.getDeviceKey("transform")],
                    r = i.replace(/[\s\(\)matrix]/g, "").split(",");
                n = r.length < 6 ? 0 : +r["x" == t ? 4 : 5]
            } else {
                n = window.getComputedStyle(e, null).getPropertyValue(t).replace(/px/, ""), isNaN(n) || (n = parseInt(n, 10))
            }
            return n
        }

        function E(e, t) {
            if (!document.getElementById(e)) {
                var n = document.createElement("style");
                n.type = "text/css", n.id = e;
                var i = 2 === arguments.length ? t : "";
                if (arguments.length > 2)
                    for (var r = 0; r < arguments.length - 1; r += 2) {
                        var o = arguments[r + 1].replace(/\,\s+/g, ",");
                        i += o, i += " { " + (arguments[r + 2] || "") + " }\n"
                    }
                n.innerHTML = i, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }

        function D(e, t) {
            for (var n = u(e), i = 0; i < arguments.length - 1; i++) n.classList.add(arguments[i + 1])
        }

        function S(e, t) {
            u(e).classList.remove(t)
        }

        function k(e) {
            x(e.target, {
                textShadow: O(e.angle || 0, e.distance || 0, e.size || 0, null, e.color || "#000000", e.alpha)
            })
        }

        function O(e, t, n, i, r, o, c) {
            var u = "",
                l = -1 * e + 180,
                f = s(l);
            return u += (Math.cos(f) * t).toFixed(8) + "px ", u += (Math.sin(f) * t).toFixed(8) + "px ", u += n + "px", i && (u += " " + i + "px"), u += " " + a(r, o), c = !!c, c && (u += " inset"), u
        }

        function A(e, t, n, i) {
            var r = u(e);
            i = !1 !== i;
            var o = r.childNodes,
                a = [],
                s = {};
            /(x)/gi.exec(t) && (s.x = {}), /(y)/gi.exec(t) && (s.y = {});
            for (var c = 0; c < o.length; c++) {
                var l = o[c];
                a[c] = {};
                for (var f in s) {
                    var d = C(l, f),
                        g = l[me[f][0]],
                        h = d + g,
                        p = s[f];
                    0 == c && (p.min = d, p.max = h), d < p.min && (p.min = d), p.max < h && (p.max = h), a[c][f] = d
                }
            }
            var v = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            };
            if (n)
                for (var m in v) v[m] = isNaN(n) ? n[m] || 0 : n;
            var b = {};
            for (var f in s) {
                var y = s[f];
                i && (b[f] = y.min + C(r, f) - v[me[f][2]]), b[me[f][1]] = y.max - y.min + v[me[f][2]] + v[me[f][3]]
            }
            for (x(r, b), c = 0; c < o.length; c++) {
                var l = o[c],
                    b = {};
                for (var f in s) b[f] = a[c][f] - s[f].min + v[me[f][2]];
                x(l, b)
            }
        }

        function F(e, t) {
            var n = e.canvas || u(e),
                i = {},
                r = !1 !== t.snap,
                o = T(e) ? 0 : 1;
            "string" == typeof t && (t = L(t));
            for (var a in t)
                if ("x" == a || "y" == a) {
                    var s = t[a];
                    if (!s) continue;
                    "string" == typeof s && (s = {
                        type: s
                    });
                    var c, l, f = 0,
                        d = !1,
                        g = s.offset || 0;
                    if (void 0 !== s.against) {
                        c = s.against;
                        var h = 0;
                        T(c) ? c.canvas ? h = 1 : f = C(c, a) : "number" == typeof c ? (d = !0, f = c) : (f = c[a], h = 1), l = be[h][a], s.type === we && (t[a].outer = !1)
                    } else c = n[be[o].parent], l = be[o][a];
                    var p = n[be[o][a]];
                    switch (e._type) {
                        case "arc":
                        case "path":
                            switch (s.type) {
                                case we:
                                    p = 0;
                                    break;
                                default:
                                    g += p / 2
                            }
                            break;
                        case "text":
                            if ("x" === a) switch (e.alignText) {
                                case "center":
                                    p = 0;
                                case "right":
                                    p *= -1
                            }
                    }
                    var v = L(s.type, p, d ? 0 : c[l], !d && !!t[a].outer);
                    null != v && (v += f + g, i[a] = r ? Math.round(v) : v)
                }
            return i
        }

        function P(e, t) {
            var n = F(e, t);
            if (T(e)) {
                x(e.canvas || u(e), n)
            } else
                for (var i in n) e[i] = n[i];
            return n
        }

        function L(e, t, n, i) {
            var r = 1 == arguments.length;
            switch (e) {
                case "alignBottom":
                    if (i && (t = 0), !r) return n - t;
                case "alignTop":
                    return r ? {
                        y: e
                    } : i ? -t : 0;
                case "alignRight":
                    if (i && (n += t), !r) return n - t;
                case "alignLeft":
                    return r ? {
                        x: e
                    } : i ? -t : 0;
                case "alignCenter":
                    return i && (n = 0), r ? {
                        x: e,
                        y: e
                    } : (n - t) / 2;
                default:
                    return null
            }
        }

        function T(e) {
            return e instanceof HTMLElement || void 0 != e.canvas
        }

        function I() {
            var e = this;
            e.fonts = {
                primary: "template_font"
            }, e.colors = {}, e.svg = {}
        }

        function z() {
            var e = u("main");
            return x(e, {
                position: "absolute",
                width: adParams.adWidth,
                height: adParams.adHeight,
                opacity: 0,
                left: "0px",
                top: "0px",
                overflow: "hidden",
                userSelect: "none"
            }), e.logoContainer = new Se({
                id: "logo-container",
                target: e,
                source: "template_image",
                css: {
                    x: 9,
                    y: 60
                }
            }), e.txtGreeting = new Oe({
                id: "txt-greeting",
                target: e,
                css: {
                    width: 200,
                    height: 30,
                    color: "#ff1414"
                },
                align: we,
                fontSize: 40,
                fontFamily: "template_font",
                format: xe,
                alignText: we,
                bufferText: {
                    left: 5,
                    right: 5
                },
                leading: 1,
                text: "MOBILE ADS"
            }), k({
                target: e.txtGreeting,
                angle: 45,
                distance: 2,
                size: 2,
                color: "#000000",
                alpha: .5
            }), e.buttonCta = new ke({
                id: "btn-cta",
                target: e,
                css: {
                    width: 150,
                    height: 40,
                    backgroundColor: "grey",
                    borderRadius: 10
                },
                align: {
                    x: we,
                    y: {
                        type: ye,
                        offset: -30
                    }
                },
                icon: [new Oe({
                    css: {
                        width: 150,
                        height: 40,
                        color: "#ffffff"
                    },
                    fontSize: 12,
                    fontFamily: "template_font",
                    format: xe,
                    alignText: we,
                    text: "CLICK FOR MORE"
                })]
            }), x(e, {
                "background-color": "#cccccc"
            }), e
        }

        function R() {
            new Ee({
                target: View.main,
                size: 1,
                color: "#000000"
            })
        }
        var X = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                    }
                }
                return function(t, n, i) {
                    return n && e(t.prototype, n), i && e(t, i), t
                }
            }(),
            Y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            j = n(1),
            V = function(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }(j),
            M = function() {
                function e() {
                    r(this, e)
                }
                return X(e, null, [{
                    key: "orientation",
                    get: function() {
                        return window.innerWidth > window.innerHeight ? "landscape" : "portrait"
                    }
                }, {
                    key: "dimensions",
                    get: function() {
                        return {
                            width: window.innerWidth,
                            height: window.innerHeight
                        }
                    }
                }]), e
            }();
        M.pixelRatio = window.devicePixelRatio || "unknown", M.init = function() {
            var e = this;
            e.agentString = navigator.userAgent, e._getType(), e._getBrandAndOS(), e._getBrowser(), "desktop" !== e.type && "windows" === e.os && e.osVersion <= 8 && "ie" === e.browser && e.browserVersion < 12 && (e.type = "desktop");
            var t = Array(70).join("-"),
                n = "\n" + t;
            for (var i in e) e.hasOwnProperty(i) && "function" != typeof e[i] && (n += "\n" + i + ": " + e[i]);
            n += "\n" + t
        }, M._getType = function() {
            var e = this,
                t = /(android|mobile)/gi.exec(e.agentString),
                n = /(tablet|touch)/gi.exec(e.agentString),
                i = /(ipad)/gi.exec(e.agentString);
            e.type = "desktop", t && (e.type = "mobile"), n && (e.type = "tablet"), i && (e.type = "tablet")
        }, M._getBrandAndOS = function() {
            var e = this,
                t = e.agentString.match(/ip(hone|od|ad)|mac/gi);
            if (t) {
                e.brand = "apple", e.product = t[0].toLowerCase();
                var n = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(e.agentString);
                return e.os = "" == n[2] ? "ios" : "osx", void(e.osVersion = n[3].replace(/\_/g, "."))
            }
            var i = /(android)\/?\s*([0-9\.]+)/gi.exec(e.agentString);
            if (i) return e.brand = e.product = e.os = i[1].toLowerCase(), e._checkForSpecial("product", ["pixel 2"], e.agentString.split("(")[1].split(")")[0]), void(e.osVersion = i[2]);
            var r = /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(e.agentString);
            if (r) {
                switch (e.brand = "microsoft", e.os = "windows", r[2]) {
                    case "5.2":
                        e.osVersion = "xp";
                        break;
                    case "6.0":
                        e.osVersion = "vista";
                        break;
                    case "6.1":
                        e.osVersion = "7";
                        break;
                    case "6.2":
                        e.osVersion = "8";
                        break;
                    case "6.3":
                        e.osVersion = "8.1";
                        break;
                    case "10.0":
                        e.osVersion = "10";
                        break;
                    default:
                        e.osVersion = r[2]
                }
                return e.product = r[1].toLowerCase(), void(e.product.match(/\snt/i) && (e.product = "pc"))
            }
            e.agentString.match(/(blackberry|bb10|playbook)/i) && (e.brand = e.product = e.os = "blackberry", e.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(e.agentString)[2])
        }, M._getBrowser = function() {
            var e = this,
                t = /(edge(?=\/))\/?\s*([0-9\.]+)/i.exec(e.agentString);
            if (t || (t = e.agentString.match(/(fban|fbav|opera|chrome|crios|safari|firefox|msie|trident(?=\/))\/?\s*([0-9\.]+)/i)), !t || t.length < 3) {
                switch (e.os) {
                    case "ios":
                        e.browser = "safari";
                        break;
                    case "windows":
                        e.browser = "trident";
                        break;
                    default:
                        e.browser = "chrome"
                }
                return void(e.browserVersion = "os-default")
            }
            switch (e.browser = t[1].toLowerCase(), e.browserVersion = t[2], e.browser) {
                case "trident":
                    var n = /\brv:+(\d+)/g.exec(e.agentString);
                    n && (e.browserVersion = n[1]);
                case "msie":
                    e.browser = "ie";
                    break;
                case "crios":
                    e.browser = "chrome";
                    break;
                case "safari":
                    var n = e.agentString.match(/\sversion\/([0-9\.]+)\s/i);
                    n && (e.browserVersion = n[1]);
                    break;
                case "chrome":
                    var n = e.agentString.match(/\b(OPR)\/([0-9\.]+)/i);
                    n && (e.browser = "opera", e.browserVersion = n[2])
            }
        }, M._checkForSpecial = function(e, t, n) {
            for (var i, r = this, o = 0; o < t.length; o++)
                if (i = t[o].toLowerCase(), n.match(new RegExp(i, "i"))) {
                    r[e] = i;
                    break
                }
        };
        var K = function() {
            var e = this;
            e.identity = new Float32Array([1, 0, 0, 0, 1, 0]), e.data = new Float32Array(e.identity)
        };
        K.prototype = {
            clear: function() {
                var e = this;
                e.data = new Float32Array(e.identity)
            },
            rotate: function(e) {
                var t = this,
                    n = new Float32Array(t.identity),
                    i = Math.cos(e).toFixed(15),
                    r = Math.sin(e).toFixed(15);
                return n[0] = i, n[1] = r, n[3] = -r, n[4] = i, t.multiply(n, !1), t
            },
            scale: function(e, t) {
                var n = this,
                    i = new Float32Array(n.identity);
                return i[0] = e, i[4] = t, n.multiply(i, !1), n
            },
            skew: function(e, t) {
                var n = this,
                    i = new Float32Array(n.identity);
                return i[1] = Math.tan(e), i[3] = Math.tan(t), n.multiply(i), n
            },
            translate: function(e, t) {
                var n = this,
                    i = new Float32Array(n.identity);
                return i[2] = e || 0, i[5] = t || 0, n.multiply(i, !0), n
            },
            multiply: function(e, t) {
                for (var n = this, i = new Float32Array(n.data), r = t ? e : i, o = t ? i : e, a = 0; a < 6; a++) {
                    var s = 3 * Math.floor(a / 3),
                        c = a % 3;
                    n.data[a] = r[s] * o[c] + r[s + 1] * o[c + 3]
                }
                n.data[2] += r[2], n.data[5] += r[5]
            },
            setFromCss: function(e) {
                var t = e.match(/\(([^\)]+)\)/)[1].replace(/\s/g, "").split(",").map(Number);
                this.data = [t[0], t[1], t[4], t[2], t[3], t[5]]
            },
            getCss: function() {
                var e = this;
                return "matrix(" + e.data[0] + "," + e.data[1] + "," + e.data[3] + "," + e.data[4] + "," + e.data[2] + "," + e.data[5] + ")"
            }
        };
        var N = function e() {
            r(this, e)
        };
        N.debug_level1 = !1, N.debug_level2 = !1, N.filter = void 0, N.debug_element = void 0, N.debug_css_list = void 0, N.init = function() {
            this.generateBrowserKeyDictionary()
        }, N.setDebugLevel = function(e) {
            var t = this;
            switch (parseInt(e)) {
                case 1:
                    t.debug_level1 = !0, t.debug_level2 = !1;
                    break;
                case 2:
                    t.debug_level1 = !0, t.debug_level2 = !0;
                    break;
                default:
                    t.debug_level1 = !1, t.debug_level2 = !1
            }
        }, N.setDebugFilter = function(e) {
            var t = this;
            t.filter = e, t.debug_level1 = !0
        }, N.ifDebug = function(e) {
            var t = this;
            return t.filter ? !(!t.passDebugFilter() || !t[e]) || void 0 : t[e]
        }, N.passDebugFilter = function() {
            var e = this;
            if (e.debug_element && e.debug_element.id.indexOf(e.filter) > -1) return !0;
            if (e.debug_css_list)
                for (var t in e.debug_css_list) {
                    if (t.indexOf(e.filter) > -1) return !0;
                    if (String(e.debug_css_list[t]).indexOf(e.filter) > -1) return !0
                }
            return !1
        }, N.generateBrowserKeyDictionary = function() {
            var e = this;
            e.deviceKeyDict = {};
            var t = document.createElement("div").style;
            for (var n in t) {
                var i = e.getPrefix(n),
                    r = e.standardizeKey(n);
                switch (M.browser) {
                    case "safari":
                        "webkit" == i ? e.deviceKeyDict[r] = e.prependPrefix("webkit", r) : e.prependPrefix("webkit", r) in t || (e.deviceKeyDict[r] = r);
                        break;
                    case "firefox":
                        var o = e.prependPrefix("Moz", r),
                            a = e.prependPrefix("Webkit", r);
                        r in t ? e.deviceKeyDict[r] = r : "moz" == i ? e.camelateKey("webkit-" + r) in t && (e.deviceKeyDict[r] = o) : "webkit" == i && (o in t || (e.deviceKeyDict[r] = a));
                        break;
                    case "chrome":
                    case "ie":
                    default:
                        r in t ? e.deviceKeyDict[r] = r : i && (e.deviceKeyDict[r] = e.prependPrefix(i, r))
                }
            }
        }, N.apply = function(e, t) {
            var n = this;
            n.debug_element = e, n.debug_css_list = t, n.ifDebug("debug_level1");
            var i = {};
            for (var r in t) r.match(/^transform\(/) ? i[r] = t[r] : (n.ifDebug("debug_level1"), e.style[n.getDeviceKey(r)] = t[r]);
            n.applyTransforms(e, i), n.ifDebug("debug_level1"), n.debug_element = null, n.debug_css_list = null
        }, N.conformCssObject = function(e, t) {
            var n = this;
            n.debug_element = t, n.ifDebug("debug_level1");
            var i = {};
            if (e)
                for (var r in e) {
                    n.ifDebug("debug_level2");
                    var o = n.conformKeyValue(r, e[r]);
                    for (var a in o) n.ifDebug("debug_level2"), i[o[a][0]] = o[a][1]
                }
            return n.debug_element = null, i
        }, N.conformCssString = function(e, t) {
            var n = this;
            n.debug_element = t, n.ifDebug("debug_level1");
            var i = {};
            if (e) {
                var r = e.split(/\s*;\s*/);
                for (var o in r)
                    if (r[o]) {
                        var a = r[o].split(/:(.+)?/);
                        n.ifDebug("debug_level2");
                        var s = n.conformKeyValue(a[0], a[1]);
                        for (var c in s) n.ifDebug("debug_level2"), i[s[c][0]] = s[c][1]
                    }
            }
            return n.debug_element = null, i
        }, N.conformCssKeyValue = function(e, t) {
            var n = this;
            n.ifDebug("debug_level1");
            var i = {};
            return i[e] = t, n.conformCssObject(i)
        }, N.applyTransforms = function(e, t) {
            var n = this;
            n.ifDebug("debug_level1");
            var i = new K,
                r = e.style[n.getDeviceKey("transform")],
                o = r.match(/matrix[^\)]+\)/);
            if (o && (i.setFromCss(o[0]), n.ifDebug("debug_level2")), "transforms" in e) var a = e.transforms;
            else var a = {
                tx: 0,
                ty: 0,
                rz: 0,
                sx: 1,
                sy: 1
            };
            var s = {};
            for (var c in t) {
                s[c.match(/\(\s([^\s]+)/)[1]] = t[c]
            }
            if (void 0 != s.tx && (i.data[2] = 0), void 0 != s.ty && (i.data[5] = 0), void 0 != s.rz) {
                var u = -a.rz;
                i.rotate(u * (Math.PI / 180)), i.rotate(s.rz * (Math.PI / 180)), a.rz = s.rz
            }
            if (void 0 != s.sx) {
                var u = 1 / a.sx;
                i.scale(u, 1), i.scale(s.sx, 1), a.sx = s.sx
            }
            if (void 0 != s.sy) {
                var u = 1 / a.sy;
                i.scale(1, u), i.scale(1, s.sy), a.sy = s.sy
            }
            void 0 != s.tx && (i.translate(s.tx, 0), a.tx = s.tx), void 0 != s.ty && (i.translate(0, s.ty), a.ty = s.ty), e.transforms = a, n.ifDebug("debug_level2"), e.style[n.getDeviceKey("transform")] = i.getCss()
        }, N.conformKeyValue = function(e, t) {
            var n = this;
            e = String(e).trim(), t = String(t).trim();
            var i = n.standardizeKey(e);
            return n.conformValue(i, t)
        }, N.hasPrefix = function(e) {
            var t = this;
            return e.search(t.matchPrefixRegex()) > -1
        }, N.getPrefix = function(e) {
            var t = this,
                n = e.match(t.matchPrefixRegex());
            return n ? n[1].replace(/-/g, "").toLowerCase() : null
        }, N.stripPrefix = function(e) {
            var t = this,
                n = e.replace(t.matchPrefixRegex(), "");
            return n.charAt(0).toLowerCase() + n.slice(1)
        }, N.getDeviceKey = function(e) {
            var t = this;
            return e in t.deviceKeyDict ? t.deviceKeyDict[e] : e
        }, N.prependPrefix = function(e, t) {
            return e + t.replace(/^(.)/, function(e) {
                return e.charAt(0).toUpperCase()
            })
        }, N.standardizeKey = function(e) {
            var t = this;
            return e = t.stripPrefix(e), e = e in t.keyFormatExceptions() ? t.keyFormatExceptions()[e] : t.camelateKey(e), t.ifDebug("debug_level2"), e
        }, N.camelateKey = function(e) {
            return e = e.replace(/-(.)/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }, N.keyFormatExceptions = function() {
            return {
                x: "transform( tx )",
                translateX: "transform( tx )",
                y: "transform( ty )",
                translateY: "transform( ty )",
                rotate: "transform( rz )",
                rotation: "transform( rz )",
                scaleX: "transform( sx )",
                scaleY: "transform( sy )",
                scale: "transform( sx ),transform( sy )"
            }
        }, N.conformValue = function(e, t) {
            var n, i = this,
                r = [],
                o = t.match(/\s/),
                a = t.match(i.matchNumberRegex());
            if (!o && a) {
                i.ifDebug("debug_level2"), n = Number(a[0]);
                var s = t.match(/[^0-9\.]+$/);
                if (s) n += s[0];
                else switch (e) {
                    case "top":
                    case "right":
                    case "bottom":
                    case "left":
                    case "width":
                    case "height":
                    case "fontSize":
                    case "lineHeight":
                    case "padding":
                    case "margin":
                    case "marginRight":
                    case "marginLeft":
                    case "marginTop":
                    case "marginBottom":
                    case "borderRadius":
                    case "borderWidth":
                    case "letterSpacing":
                        n += "px"
                }
            } else if ("backgroundImage" == e) i.ifDebug("debug_level2"), t = t.replace(/^url\(\s*['"]*/, "").replace(/['"]*\s*\)$/, ""), n = 'url( "' + t + '" )';
            else if ("transform" == e) {
                i.ifDebug("debug_level2");
                for (var c = /([a-z0-9]+)\(([^\)]+)\)/gi; params = c.exec(t);) {
                    var u = params[2].replace(/\s/g, "").split(",").map(function(e, t, n) {
                        return Number(e.match(i.matchNumberRegex())[0])
                    });
                    switch (params[1]) {
                        case "translate":
                            r.push(["transform( tx )", u[0]]), r.push(["transform( ty )", u[1]]);
                            break;
                        case "translateX":
                            r.push(["transform( tx )", u[0]]);
                            break;
                        case "translateY":
                            r.push(["transform( ty )", u[0]]);
                            break;
                        case "rotate":
                            r.push(["transform( rz )", u[0]]);
                            break;
                        case "scale":
                            r.push(["transform( sx )", u[0]]), r.push(["transform( sy )", u[1]]);
                            break;
                        case "scaleX":
                            r.push(["transform( sx )", u[0]]);
                            break;
                        case "scaleY":
                            r.push(["transform( sy )", u[0]])
                    }
                }
            } else i.ifDebug("debug_level2"), n = t;
            if (void 0 != n) {
                i.ifDebug("debug_level2");
                for (var l = e.split(/\,/), f = 0; f < l.length; f++) r.push([l[f], n])
            }
            return r
        }, N.matchNumberRegex = function() {
            return /^[+-]?[0-9]*\.?[0-9]+/
        }, N.matchPrefixRegex = function() {
            return /^-*(moz-*|webkit-*|ms-*|o-)/i
        };
        for (var B, H, U = [], W = [], q = [], G = [], Z = void 0, $ = {}, J = !1, Q = 0, ee = function() {}, te = function() {}, ne = {}, ie = !1, re = m, oe = b, ae = y, se = "mouseover", ce = "mouseout", ue = "onSelect", le = function() {
                function e(t) {
                    r(this, e);
                    var n = this;
                    n.elem = t, n.hasActiveChildren = !0, n.debug = !1, n.eventList = [], n._isDragEnabled = !1, n._isDragging = !1, n._give = 2, n._oX = 0, n._oY = 0, n._p1X = 0, n._p1Y = 0, n._p2X = 0, n._p2Y = 0, n._sX = 0, n._sY = 0, n._vX = 0, n._vY = 0, n._cursor = "mouse", n._start = "down", n._end = "up", n.init()
                }
                return e.prototype.init = function() {
                    var e = this;
                    e.debug, e._handleTouchStart = e._handleTouchStart.bind(e), e._handleDown = e._handleDown.bind(e), e._handleDrag = e._handleDrag.bind(e), e._handleUp = e._handleUp.bind(e), e._elemAdd = e.elem.addEventListener.bind(e.elem), e._elemRemove = e.elem.removeEventListener.bind(e.elem), e._reset()
                }, e.prototype.register = function(e, t) {
                    var n = this;
                    n.debug, n.eventList.push(e), n._checkDragEnabled(), n._elemAdd(e, t)
                }, e.prototype.unregister = function(e, t) {
                    var n = this;
                    n.debug;
                    var i = n.eventList.indexOf(e);
                    i >= 0 && n.eventList.splice(i, 1), n._checkDragEnabled(), n._elemRemove(e, t)
                }, e.prototype._reset = function() {
                    var e = this;
                    e._cursor = "mouse", e._start = "down", e._end = "up", e.elem.addEventListener("touchstart", e._handleTouchStart), "ios" != M.os && e.elem.addEventListener("mousedown", e._handleDown)
                }, e.prototype._checkDragEnabled = function() {
                    var e = this,
                        t = e.eventList.join("").indexOf("onDrag");
                    e._isDragEnabled = t > -1
                }, e.prototype._getEventScope = function(e) {
                    return e.changedTouches ? e.changedTouches[0] : e
                }, e.prototype._add = function(e, t) {
                    window.addEventListener(this._cursor + e, t)
                }, e.prototype._remove = function(e, t) {
                    window.removeEventListener(this._cursor + e, t)
                }, e.prototype._handleDown = function(e) {
                    var t = this;
                    t.debug, w(), t.elem.removeEventListener("touchstart", t._handleTouchStart), "ios" != M.os && t.elem.removeEventListener("mousedown", t._handleDown), t._isDragging = !1, t._add(t._end, t._handleUp), t._add("move", t._handleDrag);
                    var n = t._getEventScope(e),
                        i = n.pageX,
                        r = n.pageY,
                        o = t.elem.getBoundingClientRect(),
                        a = i - o.left,
                        s = r - o.top,
                        c = t.elem.x || C(t.elem, "x"),
                        u = t.elem.y || C(t.elem, "y"),
                        l = o.left - c,
                        f = o.top - u;
                    t._oX = l + a, t._oY = f + s;
                    var d = i - t._oX,
                        g = r - t._oY;
                    t._sX = t._p1X = t._p2X = i, t._sY = t._p1Y = t._p2Y = r,
                        function(e) {
                            if (!ae(e)) {
                                var n = new re(e, i, r, a, s, d, g);
                                t.debug, t.elem.dispatchEvent(n)
                            }
                        }("onPress")
                }, e.prototype._handleUp = function(e, t) {
                    function n(e) {
                        if (!ae(e)) {
                            var t = new re(e, o, a, c, u, l, f, 0, 0, i._vX, i._vY);
                            i.debug, i.elem.dispatchEvent(t)
                        }
                    }
                    var i = this;
                    i.debug, i._remove(i._end, i._handleUp), i._remove("move", i._handleDrag);
                    var r = i._getEventScope(e),
                        o = r.pageX,
                        a = r.pageY,
                        s = i.elem.getBoundingClientRect(),
                        c = o - s.left,
                        u = a - s.top,
                        l = o - i._oX,
                        f = a - i._oY;
                    !0 !== t && n("onRelease");
                    var d = s.top + window.pageYOffset,
                        g = d + s.height,
                        h = s.left + window.pageXOffset,
                        p = h + s.width;
                    i._isDragging ? i._isDragEnabled && i._dragEndOrSwipe("onDragStop") : o > h && o < p && a > d && a < g && n("onSelect"), i._isDragging && i._dragEndOrSwipe("onSwipe"), i._reset(), e.preventDefault(), _()
                }, e.prototype._handleTouchStart = function(e) {
                    var t = this;
                    t.debug, t._cursor = "touch", t._start = "start", t._end = "end", t._handleDown(e)
                }, e.prototype._handleDrag = function(e) {
                    function t(e) {
                        if (!ae(e)) {
                            var t = new re(e, r, o, g, h, l, f, n._p1X - n._sX, n._p1Y - n._sY, n._vX, n._vY);
                            n.debug, n.elem.dispatchEvent(t)
                        }
                    }
                    var n = this;
                    n.debug;
                    var i = n._getEventScope(e),
                        r = i.pageX,
                        o = i.pageY,
                        a = r - n._p1X,
                        s = r - n._p2X;
                    n._vX = (s - a) / 2 + a;
                    var c = o - n._p1Y,
                        u = o - n._p2Y;
                    n._vY = (u - c) / 2 + c;
                    var l = r - n._oX,
                        f = o - n._oY,
                        d = n.elem.getBoundingClientRect(),
                        g = r - d.left,
                        h = o - d.top;
                    n._isDragging ? n._isDragEnabled && t("onDrag") : (Math.abs(n._sX - r) > n._give || Math.abs(n._sY - o) > n._give) && (n._isDragging = !0, n._isDragEnabled && t("onDragStart")), n._p2X = n._p1X, n._p1X = r, n._p2Y = n._p1Y, n._p1Y = o
                }, e.prototype._dragEndOrSwipe = function(e) {
                    var t = this;
                    if (t.debug, !ae(name)) {
                        var n = t.elem.getBoundingClientRect(),
                            i = new re(e, t._p1X, t._p1Y, t._p1X - n.left, t._p1Y - n.top, t._p1X - t._oX, t._p1Y - t._oY, t._p2X - t._sX, t._p2Y - t._sY, t._vX, t._vY);
                        t.debug, t.elem.dispatchEvent(i)
                    }
                }, e
            }(), fe = new function() {
                function e(e) {
                    for (var n = null, i = 0; i < s.length; i++)
                        if (s[i].elem === e) {
                            n = s[i];
                            break
                        }
                    return n || (n = t(e)), n
                }

                function t(e) {
                    var t = new le(e);
                    return s.push(t), t
                }

                function n(t, n) {
                    var i = e(t);
                    if (i.hasActiveChildren != n) {
                        i.hasActiveChildren = n;
                        for (var r = i.elem.getElementsByTagName("*"), o = 0; o < r.length; o++) r[o].parentNode == t && (n ? a.enable(r[o]) : a.disable(r[o]))
                    }
                }

                function i(e, t, n, r) {
                    e.style.visibility = "hidden", r.push(e);
                    for (var o = document.elementFromPoint(t, n), a = 0; a < c.length; a++)
                        if (c[a].elem == o) return i(o, t, n, r);
                    return o
                }

                function r(e) {
                    for (var t = [], n = i(e.target, e.clientX, e.clientY, t), r = 0; r < t.length; r++) t[r].style.visibility = "visible";
                    return t = [], e.stopImmediatePropagation(), n
                }

                function o(e) {
                    var t = r(e),
                        n = document.createEvent("HTMLEvents");
                    n.initEvent(e.type, !0, !1), t.dispatchEvent(n)
                }
                var a = this,
                    s = [],
                    c = [],
                    u = void 0 != document.createEventObject;
                a._kills = {}, a.add = a.addEventListener = function(t, n, i) {
                    e(t).register(n, i), x(t, "cursor", "pointer"), x(t, "pointer-events", "auto")
                }, a.remove = a.removeEventListener = function(t, n, i) {
                    var r = e(t);
                    r && (r.unregister(n, i), r.eventList.length <= 0 && x(t, "cursor", "auto"))
                }, a.disable = function(t) {
                    var n = e(t);
                    c.push(n), u ? (n.register(GestureEvent.CLICK, o), x(t, "cursor", "auto")) : x(t, "pointer-events", "none")
                }, a.disableChildren = function(e) {
                    n(e, !1)
                }, a.enable = function(t) {
                    for (var n = e(t), i = 0; i < c.length; i++)
                        if (n == c[i]) {
                            u ? n.unregister(GestureEvent.CLICK, o) : (x(t, "pointer-events", "auto"), x(t, "cursor", "pointer"));
                            break
                        }
                }, a.enableChildren = function(e) {
                    n(e, !0)
                }
            }, de = {
                ENABLED: "uiComponentEnabled",
                RESIZE: "uiResize",
                SLIDER_UPDATE: "uiSliderUpdate",
                get componentEnabled() {
                    return B || (B = new CustomEvent("uiComponentEnabled")), B
                },
                get sliderUpdate() {
                    return H || (H = new CustomEvent("uiSliderUpdate")), H
                }
            }, ge = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent), he = ["webkit", "moz"], pe = 0; !window.requestAnimationFrame && pe < he.length; pe++) window.requestAnimationFrame = window[he[pe] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[he[pe] + "CancelAnimationFrame"] || window[he[pe] + "CancelRequestAnimationFrame"];
        window.requestAnimationFrame && window.cancelAnimationFrame && !ge || (window.requestAnimationFrame = function(e) {
            return setTimeout(e, 17)
        }, window.cancelAnimationFrame = clearTimeout);
        var ve = Object.freeze({
                setCss: x,
                getCss: C,
                injectStylesheet: E,
                addClass: D,
                removeClass: S
            }),
            me = {
                x: ["offsetWidth", "width", "left", "right"],
                y: ["offsetHeight", "height", "top", "bottom"]
            },
            be = [{
                x: "offsetWidth",
                y: "offsetHeight",
                parent: "parentNode"
            }, {
                x: "width",
                y: "height",
                parent: "stage"
            }],
            ye = "alignBottom",
            we = "alignCenter",
            _e = function() {
                function t() {
                    r(this, t)
                }
                return t.init = function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        var i = [];
                        Promise.all(i).then(function() {
                            e.prepareAdData(), t()
                        }).catch(function(e) {
                            n(e)
                        })
                    })
                }, t.prepareAdData = function() {
                    e.adData = new I
                }, t.loadDynamicJS = function(e) {
                    return new Promise(function(e, t) {
                        e()
                    })
                }, t
            }(),
            xe = "inlineFit",
            Ce = function e(t, n) {
                r(this, e), E("RED_uiElement", ".ui-elem", "position:absolute;"), n = n || "div";
                var i = document.createElement(n);
                if (D(i, "ui-elem"), t = t || {}, t.id && (i.id = t.id), x(i, t.css), t.target) {
                    u(t.target).appendChild(i)
                }
                return Object.defineProperty(i, "parent", {
                    get: function() {
                        return i.parentNode
                    }
                }), i.toString = function() {
                    return "[object UIDiv]"
                }, i
            },
            Ee = function e(t) {
                r(this, e);
                var n, i, o = new Ce(t);
                return D(o, "ui-border"), Object.defineProperties(o, {
                    size: {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            void 0 != e && n != e && (n = e, x(o, {
                                borderWidth: n
                            }))
                        }
                    },
                    color: {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            e && i != e && (i = e, x(o, {
                                borderColor: i
                            }))
                        }
                    }
                }), o.toString = function() {
                    return "[object UIBorder]"
                }, fe.disable(o), o.color = t.color, o.size = t.size, o
            },
            De = function(e) {
                function n(i, o) {
                    var a;
                    r(this, n);
                    var s = !0,
                        c = !0,
                        l = o || "div";
                    i = i || {}, o = "svg" == l ? "div" : o;
                    var f = t(this, e.call(this, i, o)),
                        d = f;
                    return d._align = i.align, Object.defineProperties(d, {
                        x: {
                            get: function() {
                                return C(d, "x")
                            },
                            set: function(e) {
                                x(d, {
                                    x: e
                                })
                            }
                        },
                        y: {
                            get: function() {
                                return C(d, "y")
                            },
                            set: function(e) {
                                x(d, {
                                    y: e
                                })
                            }
                        },
                        enabled: {
                            get: function() {
                                return s
                            },
                            set: function(e) {
                                s = e, d.dispatchEvent(de.componentEnabled)
                            }
                        },
                        showing: {
                            get: function() {
                                return c
                            },
                            set: function() {}
                        }
                    }), "canvas" != l && "svg" != l && Object.defineProperties(d, {
                        width: {
                            get: function() {
                                return d.offsetWidth
                            },
                            set: function(e) {
                                x(d, {
                                    width: e
                                });
                                var t = new CustomEvent(de.RESIZE);
                                t.direction = "width", d.dispatchEvent(t)
                            }
                        },
                        height: {
                            get: function() {
                                return d.offsetHeight
                            },
                            set: function(e) {
                                x(d, {
                                    height: e
                                });
                                var t = new CustomEvent(de.RESIZE);
                                t.direction = "height", d.dispatchEvent(t)
                            }
                        }
                    }), d.hide = function() {
                        d.style.display = "none", c = !1
                    }, d.show = function() {
                        try {
                            d.style.removeProperty("display")
                        } catch (e) {
                            d.style.display = null
                        }
                        c = !0
                    }, d.setCss = function(e) {
                        x(d, e)
                    }, d.addChild = function(e) {
                        var t = u(e);
                        d.appendChild(t), e._align && P(e, e._align)
                    }, d.inspect = function() {
                        for (var e = {}, t = Object.getOwnPropertyNames(d), n = 0; n < t.length; n++) {
                            var i = d[t[n]];
                            e[t[n]] = i
                        }
                    }, d.toString = function() {
                        return "[object UIComponent]"
                    }, d._initAlign = function(e) {
                        var t = e ? 1 == e : void 0 != i.target;
                        i.align && t && P(d, i.align)
                    }, d.enabled = !0, d._initAlign(), a = d, t(f, a)
                }
                return i(n, e), n
            }(Ce),
            Se = function e(t) {
                function n(e) {
                    var n = s ? 2 : 1,
                        i = a.width / a.height,
                        r = t.css.width || a.width,
                        c = t.css.height || a.height,
                        l = void 0 == t.css.width,
                        d = void 0 == t.css.height;
                    if (o || (l = "height" == e, d = "width" == e, r = f.width, c = f.height), l) {
                        var g;
                        g = u && !d ? c * i : r / n, f.style.width = Math.round(g) + "px"
                    }
                    if (d) {
                        var h;
                        h = u && !l ? r / i : c / n, f.style.height = Math.round(h) + "px"
                    }
                }

                function i(e) {
                    n(e.direction)
                }
                r(this, e), E("RED_uiImage", ".ui-image", "background-repeat:no-repeat; background-size:contain;");
                var o = !0,
                    a = null,
                    s = !1,
                    c = "contain",
                    u = !!t.aspectRatio;
                t.css;
                if (!t.source) throw new Error("UIImage : No image source set on '" + t.id + "'");
                t.css = t.css || {};
                var f = new De(t);
                return D(f, "ui-image"), Object.defineProperties(f, {
                    source: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            a = l(e), f.style.backgroundImage = "url(" + a.src + ")"
                        }
                    },
                    retina: {
                        get: function() {
                            return s
                        },
                        set: function(e) {
                            s = e, n()
                        }
                    },
                    ratio: {
                        get: function() {
                            return c
                        },
                        set: function(e) {
                            c = e, f.style.backgroundSize = e
                        }
                    },
                    aspectRatio: {
                        get: function() {
                            return u
                        },
                        set: function(e) {
                            u = e, n()
                        }
                    }
                }), f.toString = function() {
                    return "[object UIImage]"
                }, f.addEventListener(de.RESIZE, i), f.source = t.source, f.retina = !!t.retina, t.ratio && (f.ratio = t.ratio), f._initAlign(), o = !1, f
            },
            ke = function e(t) {
                function n(e, n) {
                    var i, r = t.id + (n ? "-state-" + f.length : "-bg");
                    "string" == typeof e ? i = new Se({
                        target: g,
                        id: r,
                        source: e,
                        css: d ? {
                            width: "inherit",
                            height: "inherit"
                        } : {}
                    }) : (i = e, i.id = r, g.addChild(i), /(UITextField)/gi.exec(i.toString()) && i.resetToDefault(), i._initAlign(!0)), n ? (f.push(i), D(i, "ui-button-state")) : u = i, fe.disable(i)
                }

                function i() {
                    A(g, "clamp" + (t.css.width ? "" : "X") + (t.css.height ? "" : "Y"), {}, !1)
                }

                function o(e) {
                    oe(e), g.togglable && (g.state = Number(!l)), g._onClick.call(g, e), g.onClick.call(g, e)
                }

                function a(e) {
                    g._onOver.call(g, e), g.onOver.call(g, e)
                }

                function s(e) {
                    g._onOut.call(g, e), g.onOut.call(g, e)
                }

                function c(e) {
                    var t = g.enabled ? "addEventListener" : "removeEventListener";
                    fe[t](g, ue, o), fe[t](g, se, a), fe[t](g, ce, s)
                }
                r(this, e), t = t || {}, t.css = t.css || {}, E("RED_uiButton", ".ui-button", "position:absolute", ".ui-button-state", "position: absolute; width:inherit; height:inherit;");
                var u, l = 0,
                    f = [],
                    d = !!t.containChild,
                    g = new De(t);
                D(g, "ui-button"), t.bg && n(t.bg, !1), i(), t.icon = t.icon || [];
                for (var h = 0; h < t.icon.length; h++) n(t.icon[h], !0);
                return i(), g.togglable = t.icon.length > 1, Object.defineProperties(g, {
                    bg: {
                        get: function() {
                            return u
                        }
                    },
                    icon: {
                        get: function() {
                            return f
                        }
                    },
                    state: {
                        get: function() {
                            return l
                        },
                        set: function(e) {
                            l = e, e >= f.length && (l = 0);
                            for (var t = 0; t < f.length; t++) f[t].style.visibility = t == l ? "visible" : "hidden"
                        }
                    }
                }), g.onClick = t.onClick || function(e) {}, g.onOver = t.onOver || function(e) {}, g.onOut = t.onOut || function(e) {}, g.toString = function() {
                    return "[object UIButton]"
                }, g._onClick = function(e) {}, g._onOver = function(e) {}, g._onOut = function(e) {}, g.addEventListener(de.ENABLED, c), g.enabled = !0, g.state = t.state || 0, g._initAlign(), g
            },
            Oe = function e(t) {
                function n() {
                    if (!m) switch (h) {
                        case "paragraphClamp":
                        case "inlineClamp":
                            o();
                            break;
                        case "inlineFitClamp":
                            h = "inlineFit", i(), h = "inlineClamp", o(), h = "inlineFitClamp";
                            break;
                        case "paragraphFitClamp":
                            h = "paragraphFit", i(), h = "paragraphClamp", o(), h = "paragraphFitClamp";
                        default:
                            i()
                    }
                }

                function i() {
                    if (x(w, {
                            verticalAlign: "auto",
                            height: "auto",
                            width: "auto"
                        }), "paragraphFit" == h) {
                        for (var e = g; y.scrollHeight > y.offsetHeight && !(e <= 0);) e--, y.style.fontSize = e + "px";
                        for (; y.scrollWidth > y.offsetWidth && !(e <= 0);) e--, y.style.fontSize = e + "px";
                        g = e, y.style.fontSize = g + "px"
                    } else if ("inlineFit" == h) {
                        var t = y.offsetWidth,
                            n = y.offsetHeight;
                        y.style.fontSize = "243px";
                        var i = w.offsetWidth,
                            r = w.offsetHeight;
                        y.style.fontSize = "182px";
                        var o = w.offsetWidth,
                            a = w.offsetHeight,
                            s = c(243, 182, i, o, t),
                            u = c(243, 182, r, a, n);
                        g = ~~Math.min(g, Math.min(s, u)), y.style.fontSize = g + "px"
                    }
                    f && x(w, {
                        verticalAlign: f,
                        height: y.offsetHeight - p.top - p.bottom,
                        width: y.offsetWidth - p.left - p.right
                    })
                }

                function o() {
                    x(w, {
                        height: "auto",
                        width: "auto"
                    }), y.width = w.offsetWidth, y.height = w.offsetHeight
                }
                r(this, e), E("RED_uiTextfield", ".ui-textfield", "position:absolute; white-space:nowrap;", ".smooth-text", "-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;", ".ui-textfield .content", "position:relative; display:table-cell; cursor:default; pointer-events:none; line-height:100%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
                var a, s, u, l, f, d, g = 0,
                    h = "",
                    p = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    v = "",
                    m = !0,
                    b = {};
                t = t || {};
                var y = new De(t);
                D(y, "ui-textfield");
                var w = document.createElement("span");
                return D(w, "content"), y.appendChild(w), Object.defineProperties(y, {
                        alignText: {
                            get: function() {
                                return a
                            },
                            set: function(e) {
                                if (e && a != e) {
                                    a = e;
                                    var t = (a.match(/(left|right)/gi) || ["center"])[0].toLowerCase();
                                    x(y, {
                                        lineHeight: y.height,
                                        textAlign: t
                                    }), f = (a.match(/(bottom|top)/gi) || ["middle"])[0].toLowerCase(), x(w, {
                                        verticalAlign: f
                                    })
                                }
                            }
                        },
                        fontSize: {
                            get: function() {
                                return g
                            },
                            set: function(e) {
                                !isNaN(e) && e > 0 && (g = e, y.style.fontSize = ~~e + "px", n())
                            }
                        },
                        fontFamily: {
                            get: function() {
                                return s
                            },
                            set: function(e) {
                                s = e, y.style.fontFamily = e, n()
                            }
                        },
                        format: {
                            get: function() {
                                return h
                            },
                            set: function(e) {
                                h != e && (h = e, x(y, {
                                    whiteSpace: null != /inline/g.exec(h) ? "nowrap" : "normal"
                                }), n())
                            }
                        },
                        leading: {
                            get: function() {
                                return u
                            },
                            set: function(e) {
                                e && u != e && (u = e, x(w, {
                                    lineHeight: 100 * u + "%"
                                }), n())
                            }
                        },
                        spacing: {
                            get: function() {
                                return C(y, "letter-spacing") || l
                            },
                            set: function(e) {
                                e && l != e && (l = e, x(y, {
                                    letterSpacing: e
                                }), n())
                            }
                        },
                        bufferText: {
                            get: function() {
                                return p
                            },
                            set: function(e) {
                                if (e && p != e) {
                                    for (var t = "", i = ["top", "right", "bottom", "left"], r = 0; r < 4; r++) {
                                        var o = i[r],
                                            a = isNaN(e) ? e[o] || 0 : e;
                                        p[o] = a, t += a + "px "
                                    }
                                    x(w, {
                                        padding: t
                                    }), n()
                                }
                            }
                        },
                        text: {
                            get: function() {
                                return v
                            },
                            set: function(e) {
                                void 0 != e && "" != e && (v = e, y.setDefault("text", e), w.innerHTML = e, n())
                            }
                        },
                        smoothing: {
                            get: function() {
                                return d
                            },
                            set: function(e) {
                                d = e, ve[d ? "addClass" : "removeClass"](w, "smooth-text")
                            }
                        }
                    }), y.resetToDefault = function() {
                        if (m = !0, arguments.length > 0)
                            for (var e = 0; e < arguments.length; e++) y[arguments[e]] = b[arguments[e]];
                        else
                            for (var t in b) void 0 != y[t] && (y[t] = b[t]);
                        m = !1, n()
                    }, y.setDefault = function(e, t) {
                        b[e] = t
                    }, y.toString = function() {
                        return "[object UITextfield]"
                    }, y.enabled = !0,
                    function() {
                        for (var e in t)
                            if ("css" == e)
                                for (var n in t.css) switch (n) {
                                    case "x":
                                    case "y":
                                    case "width":
                                    case "height":
                                        b[n] = t.css[n]
                                } else if ("bufferText" == e) {
                                    b[e] = {};
                                    for (var i in p) b[e][i] = t[e][i] || 0
                                } else b[e] = t[e];
                        delete b.target, delete b.id
                    }(), y.format = t.format, y.fontSize = t.fontSize, y.fontFamily = t.fontFamily || "Arial", y.alignText = t.alignText, y.bufferText = t.bufferText, y.leading = t.leading, y.spacing = t.spacing, y.smoothing = 0 != t.smoothing, m = !1, y.text = t.text, y._initAlign(), y
            };
        window.Control = new function() {
            this.prepare = function(e) {
                var t = this;
                p(e).then(function() {
                    return _e.init()
                }).then(function() {
                    return v()
                }).then(function() {
                    t.prepareBuild()
                }).catch(function(e) {
                    throw e
                })
            }, this.prepareBuild = function() {
                Control.preMarkup(), View.main = new z, View.mainBorder = new R, Control.postMarkup(), Animation.startAd()
            }, this.preMarkup = function() {}, this.postMarkup = function() {
                fe.add(View.main, ue, Control.handleClick)
            }, this.animationComplete = function() {}, this.handleClick = function(e) {
                Network.exit(clickTag)
            }
        }, window.Animation = new function() {
            this.startAd = function() {
                e.removePreloader(), x(View.main, {
                    opacity: 1
                }), TweenLite.from(View.main.logoContainer, 1, {
                    y: -40
                }), TweenLite.from(View.main.txtGreeting, 1, {
                    y: 330
                })
            }
        }
    }).call(t, n(0))
}]);