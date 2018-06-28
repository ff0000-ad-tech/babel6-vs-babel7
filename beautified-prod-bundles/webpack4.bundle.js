! function(e) {
    var t = {};

    function n(i) {
        if (t[i]) return t[i].exports;
        var r = t[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, i) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var r in e) n.d(i, r, function(t) {
                return e[t]
            }.bind(null, r));
        return i
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 2)
}([function(e, t) {
    e.exports = adLoad
}, function(e, t) {
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
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var t, i = function() {
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
            r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            o = (t = n(0)) && t.__esModule ? t : {
                default: t
            };

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function s(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function c(e, t) {
            return "rgba(" + (e = function(e, t) {
                switch (void 0 === e ? "undefined" : r(e)) {
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
            }(e, t)).r + "," + e.g + "," + e.b + "," + e.a + ")"
        }

        function u(e, t, n, i, r) {
            return (r - n) / (i - n) * (t - e) + e
        }

        function l(e, t) {
            if ("string" != typeof e) return e;
            switch (t = t || document, (e = e.trim())[0]) {
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
        var f = function() {
            function e() {
                s(this, e)
            }
            return i(e, null, [{
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
        f.pixelRatio = window.devicePixelRatio || "unknown", f.init = function() {
            var e = this;
            e.agentString = navigator.userAgent, e._getType(), e._getBrandAndOS(), e._getBrowser(), "desktop" !== e.type && "windows" === e.os && e.osVersion <= 8 && "ie" === e.browser && e.browserVersion < 12 && (e.type = "desktop");
            Array(70).join("-");
            for (var t in e) e.hasOwnProperty(t) && "function" != typeof e[t] && e[t]
        }, f._getType = function() {
            var e = this,
                t = /(android|mobile)/gi.exec(e.agentString),
                n = /(tablet|touch)/gi.exec(e.agentString),
                i = /(ipad)/gi.exec(e.agentString);
            e.type = "desktop", t && (e.type = "mobile"), n && (e.type = "tablet"), i && (e.type = "tablet")
        }, f._getBrandAndOS = function() {
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
        }, f._getBrowser = function() {
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
                e.browserVersion = "os-default"
            } else switch (e.browser = t[1].toLowerCase(), e.browserVersion = t[2], e.browser) {
                case "trident":
                    (n = /\brv:+(\d+)/g.exec(e.agentString)) && (e.browserVersion = n[1]);
                case "msie":
                    e.browser = "ie";
                    break;
                case "crios":
                    e.browser = "chrome";
                    break;
                case "safari":
                    (n = e.agentString.match(/\sversion\/([0-9\.]+)\s/i)) && (e.browserVersion = n[1]);
                    break;
                case "chrome":
                    var n;
                    (n = e.agentString.match(/\b(OPR)\/([0-9\.]+)/i)) && (e.browser = "opera", e.browserVersion = n[2])
            }
        }, f._checkForSpecial = function(e, t, n) {
            for (var i, r = 0; r < t.length; r++)
                if (i = t[r].toLowerCase(), n.match(new RegExp(i, "i"))) {
                    this[e] = i;
                    break
                }
        };
        var d = function() {
            var e = this;
            e.identity = new Float32Array([1, 0, 0, 0, 1, 0]), e.data = new Float32Array(e.identity)
        };
        d.prototype = {
            clear: function() {
                this.data = new Float32Array(this.identity)
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
        var g = function e() {
            s(this, e)
        };
        g.debug_level1 = !1, g.debug_level2 = !1, g.filter = void 0, g.debug_element = void 0, g.debug_css_list = void 0, g.init = function() {
            this.generateBrowserKeyDictionary()
        }, g.setDebugLevel = function(e) {
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
        }, g.setDebugFilter = function(e) {
            this.filter = e, this.debug_level1 = !0
        }, g.ifDebug = function(e) {
            var t = this;
            return t.filter ? !(!t.passDebugFilter() || !t[e]) || void 0 : t[e]
        }, g.passDebugFilter = function() {
            var e = this;
            if (e.debug_element && e.debug_element.id.indexOf(e.filter) > -1) return !0;
            if (e.debug_css_list)
                for (var t in e.debug_css_list) {
                    if (t.indexOf(e.filter) > -1) return !0;
                    if (String(e.debug_css_list[t]).indexOf(e.filter) > -1) return !0
                }
            return !1
        }, g.generateBrowserKeyDictionary = function() {
            var e = this;
            e.deviceKeyDict = {};
            var t = document.createElement("div").style;
            for (var n in t) {
                var i = e.getPrefix(n),
                    r = e.standardizeKey(n);
                switch (f.browser) {
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
        }, g.apply = function(e, t) {
            var n = this;
            n.debug_element = e, n.debug_css_list = t, n.ifDebug("debug_level1");
            var i = {};
            for (var r in t) r.match(/^transform\(/) ? i[r] = t[r] : (n.ifDebug("debug_level1"), e.style[n.getDeviceKey(r)] = t[r]);
            n.applyTransforms(e, i), n.ifDebug("debug_level1"), n.debug_element = null, n.debug_css_list = null
        }, g.conformCssObject = function(e, t) {
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
        }, g.conformCssString = function(e, t) {
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
        }, g.conformCssKeyValue = function(e, t) {
            this.ifDebug("debug_level1");
            var n = {};
            return n[e] = t, this.conformCssObject(n)
        }, g.applyTransforms = function(e, t) {
            var n = this;
            n.ifDebug("debug_level1");
            var i = new d,
                r = e.style[n.getDeviceKey("transform")].match(/matrix[^\)]+\)/);
            if (r && (i.setFromCss(r[0]), n.ifDebug("debug_level2")), "transforms" in e) var o = e.transforms;
            else o = {
                tx: 0,
                ty: 0,
                rz: 0,
                sx: 1,
                sy: 1
            };
            var a = {};
            for (var s in t) a[s.match(/\(\s([^\s]+)/)[1]] = t[s];
            if (void 0 != a.tx && (i.data[2] = 0), void 0 != a.ty && (i.data[5] = 0), void 0 != a.rz) {
                var c = -o.rz;
                i.rotate(c * (Math.PI / 180)), i.rotate(a.rz * (Math.PI / 180)), o.rz = a.rz
            }
            void 0 != a.sx && (c = 1 / o.sx, i.scale(c, 1), i.scale(a.sx, 1), o.sx = a.sx), void 0 != a.sy && (c = 1 / o.sy, i.scale(1, c), i.scale(1, a.sy), o.sy = a.sy), void 0 != a.tx && (i.translate(a.tx, 0), o.tx = a.tx), void 0 != a.ty && (i.translate(0, a.ty), o.ty = a.ty), e.transforms = o, n.ifDebug("debug_level2"), e.style[n.getDeviceKey("transform")] = i.getCss()
        }, g.conformKeyValue = function(e, t) {
            e = String(e).trim(), t = String(t).trim();
            var n = this.standardizeKey(e);
            return this.conformValue(n, t)
        }, g.hasPrefix = function(e) {
            return e.search(this.matchPrefixRegex()) > -1
        }, g.getPrefix = function(e) {
            var t = e.match(this.matchPrefixRegex());
            return t ? t[1].replace(/-/g, "").toLowerCase() : null
        }, g.stripPrefix = function(e) {
            var t = e.replace(this.matchPrefixRegex(), "");
            return t.charAt(0).toLowerCase() + t.slice(1)
        }, g.getDeviceKey = function(e) {
            return e in this.deviceKeyDict ? this.deviceKeyDict[e] : e
        }, g.prependPrefix = function(e, t) {
            return e + t.replace(/^(.)/, function(e) {
                return e.charAt(0).toUpperCase()
            })
        }, g.standardizeKey = function(e) {
            var t = this;
            return e = (e = t.stripPrefix(e)) in t.keyFormatExceptions() ? t.keyFormatExceptions()[e] : t.camelateKey(e), t.ifDebug("debug_level2"), e
        }, g.camelateKey = function(e) {
            return e.replace(/-(.)/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }, g.keyFormatExceptions = function() {
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
        }, g.conformValue = function(e, t) {
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
            } else if ("backgroundImage" == e) i.ifDebug("debug_level2"), n = 'url( "' + (t = t.replace(/^url\(\s*['"]*/, "").replace(/['"]*\s*\)$/, "")) + '" )';
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
        }, g.matchNumberRegex = function() {
            return /^[+-]?[0-9]*\.?[0-9]+/
        }, g.matchPrefixRegex = function() {
            return /^-*(moz-*|webkit-*|ms-*|o-)/i
        };
        var h = [],
            p = [],
            v = [],
            m = [],
            b = void 0,
            y = {},
            w = !1,
            _ = 0,
            x = function() {},
            C = function() {};

        function E(t, n) {
            if (C = n || e.failAd, w) m.push(t);
            else {
                b = new o.default({
                    name: "imageManagerLoader",
                    onComplete: function(e) {
                        w = !1, S(e.getAllContentRaw())
                    },
                    onFail: function(e) {
                        w = !1, C.call()
                    }
                }), x = [].concat(t), m = [];
                var i = h.slice();
                h = [], b.add(new o.default(i, {
                    name: "dynamicImages-" + _++,
                    fileType: "jpg"
                }));
                var r = p.slice();
                p = [], b.add(new o.default(r, {
                    name: "dynamicCanvasImages-" + _++,
                    fileType: "jpg",
                    crossOrigin: "anonymous"
                }));
                var a = v.slice();
                v = [];
                for (var s = 0; s < a.length; s++) b.add(a[s]);
                w = !0, b.load()
            }
        }

        function S(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] instanceof Image || e[t] instanceof SVGElement) {
                    var n = e[t];
                    i = e[t].id, void 0 != y[i] || (y[n.id] = n)
                }
            var i;
            for (t = 0; t < x.length; t++) x[t].call();
            m.length > 0 && E(m)
        }
        for (var D, k, O = {}, A = !1, P = function(e, t, n, i, r, o, a, s, c, u, l) {
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
            }, F = function(e) {
                e && (e.stopImmediatePropagation(), O[e.type] = !0)
            }, L = function(e) {
                return void 0 != O[e]
            }, T = "onSelect", I = function() {
                function e(t) {
                    s(this, e);
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
                    e._cursor = "mouse", e._start = "down", e._end = "up", e.elem.addEventListener("touchstart", e._handleTouchStart), "ios" != f.os && e.elem.addEventListener("mousedown", e._handleDown)
                }, e.prototype._checkDragEnabled = function() {
                    var e = this.eventList.join("").indexOf("onDrag");
                    this._isDragEnabled = e > -1
                }, e.prototype._getEventScope = function(e) {
                    return e.changedTouches ? e.changedTouches[0] : e
                }, e.prototype._add = function(e, t) {
                    window.addEventListener(this._cursor + e, t)
                }, e.prototype._remove = function(e, t) {
                    window.removeEventListener(this._cursor + e, t)
                }, e.prototype._handleDown = function(e) {
                    var t = this;
                    t.debug, A || (A = !0, O = {}), t.elem.removeEventListener("touchstart", t._handleTouchStart), "ios" != f.os && t.elem.removeEventListener("mousedown", t._handleDown), t._isDragging = !1, t._add(t._end, t._handleUp), t._add("move", t._handleDrag);
                    var n = t._getEventScope(e),
                        i = n.pageX,
                        r = n.pageY,
                        o = t.elem.getBoundingClientRect(),
                        a = i - o.left,
                        s = r - o.top,
                        c = t.elem.x || V(t.elem, "x"),
                        u = t.elem.y || V(t.elem, "y"),
                        l = o.left - c,
                        d = o.top - u;
                    t._oX = l + a, t._oY = d + s;
                    var g = i - t._oX,
                        h = r - t._oY;
                    t._sX = t._p1X = t._p2X = i, t._sY = t._p1Y = t._p2Y = r,
                        function(e) {
                            if (!L(e)) {
                                var n = new P(e, i, r, a, s, g, h);
                                t.debug, t.elem.dispatchEvent(n)
                            }
                        }("onPress")
                }, e.prototype._handleUp = function(e, t) {
                    var n = this;
                    n.debug, n._remove(n._end, n._handleUp), n._remove("move", n._handleDrag);
                    var i = n._getEventScope(e),
                        r = i.pageX,
                        o = i.pageY,
                        a = n.elem.getBoundingClientRect(),
                        s = r - a.left,
                        c = o - a.top,
                        u = r - n._oX,
                        l = o - n._oY;
                    !0 !== t && p("onRelease");
                    var f = a.top + window.pageYOffset,
                        d = f + a.height,
                        g = a.left + window.pageXOffset,
                        h = g + a.width;

                    function p(e) {
                        if (!L(e)) {
                            var t = new P(e, r, o, s, c, u, l, 0, 0, n._vX, n._vY);
                            n.debug, n.elem.dispatchEvent(t)
                        }
                    }
                    n._isDragging ? n._isDragEnabled && n._dragEndOrSwipe("onDragStop") : r > g && r < h && o > f && o < d && p("onSelect"), n._isDragging && n._dragEndOrSwipe("onSwipe"), n._reset(), e.preventDefault(), A = !1
                }, e.prototype._handleTouchStart = function(e) {
                    var t = this;
                    t.debug, t._cursor = "touch", t._start = "start", t._end = "end", t._handleDown(e)
                }, e.prototype._handleDrag = function(e) {
                    var t = this;
                    t.debug;
                    var n = t._getEventScope(e),
                        i = n.pageX,
                        r = n.pageY,
                        o = i - t._p1X,
                        a = i - t._p2X;
                    t._vX = (a - o) / 2 + o;
                    var s = r - t._p1Y,
                        c = r - t._p2Y;
                    t._vY = (c - s) / 2 + s;
                    var u = i - t._oX,
                        l = r - t._oY,
                        f = t.elem.getBoundingClientRect(),
                        d = i - f.left,
                        g = r - f.top;

                    function h(e) {
                        if (!L(e)) {
                            var n = new P(e, i, r, d, g, u, l, t._p1X - t._sX, t._p1Y - t._sY, t._vX, t._vY);
                            t.debug, t.elem.dispatchEvent(n)
                        }
                    }
                    t._isDragging ? t._isDragEnabled && h("onDrag") : (Math.abs(t._sX - i) > t._give || Math.abs(t._sY - r) > t._give) && (t._isDragging = !0, t._isDragEnabled && h("onDragStart")), t._p2X = t._p1X, t._p1X = i, t._p2Y = t._p1Y, t._p1Y = r
                }, e.prototype._dragEndOrSwipe = function(e) {
                    var t = this;
                    if (t.debug, !L(name)) {
                        var n = t.elem.getBoundingClientRect(),
                            i = new P(e, t._p1X, t._p1Y, t._p1X - n.left, t._p1Y - n.top, t._p1X - t._oX, t._p1Y - t._oY, t._p2X - t._sX, t._p2Y - t._sY, t._vX, t._vY);
                        t.debug, t.elem.dispatchEvent(i)
                    }
                }, e
            }(), z = new function() {
                var e = this,
                    t = [],
                    n = [],
                    i = void 0 != document.createEventObject;

                function r(e) {
                    for (var n = null, i = 0; i < t.length; i++)
                        if (t[i].elem === e) {
                            n = t[i];
                            break
                        }
                    return n || (n = function(e) {
                        var n = new I(e);
                        return t.push(n), n
                    }(e)), n
                }

                function o(t, n) {
                    var i = r(t);
                    if (i.hasActiveChildren != n) {
                        i.hasActiveChildren = n;
                        for (var o = i.elem.getElementsByTagName("*"), a = 0; a < o.length; a++) o[a].parentNode == t && (n ? e.enable(o[a]) : e.disable(o[a]))
                    }
                }

                function a(e) {
                    for (var t = [], i = function e(t, i, r, o) {
                            t.style.visibility = "hidden", o.push(t);
                            for (var a = document.elementFromPoint(i, r), s = 0; s < n.length; s++)
                                if (n[s].elem == a) return e(a, i, r, o);
                            return a
                        }(e.target, e.clientX, e.clientY, t), r = 0; r < t.length; r++) t[r].style.visibility = "visible";
                    return t = [], e.stopImmediatePropagation(), i
                }

                function s(e) {
                    var t = a(e),
                        n = document.createEvent("HTMLEvents");
                    n.initEvent(e.type, !0, !1), t.dispatchEvent(n)
                }
                e._kills = {}, e.add = e.addEventListener = function(e, t, n) {
                    r(e).register(t, n), M(e, "cursor", "pointer"), M(e, "pointer-events", "auto")
                }, e.remove = e.removeEventListener = function(e, t, n) {
                    var i = r(e);
                    i && (i.unregister(t, n), i.eventList.length <= 0 && M(e, "cursor", "auto"))
                }, e.disable = function(e) {
                    var t = r(e);
                    n.push(t), i ? (t.register(GestureEvent.CLICK, s), M(e, "cursor", "auto")) : M(e, "pointer-events", "none")
                }, e.disableChildren = function(e) {
                    o(e, !1)
                }, e.enable = function(e) {
                    for (var t = r(e), o = 0; o < n.length; o++)
                        if (t == n[o]) {
                            i ? t.unregister(GestureEvent.CLICK, s) : (M(e, "pointer-events", "auto"), M(e, "cursor", "pointer"));
                            break
                        }
                }, e.enableChildren = function(e) {
                    o(e, !0)
                }
            }, R = {
                ENABLED: "uiComponentEnabled",
                RESIZE: "uiResize",
                SLIDER_UPDATE: "uiSliderUpdate",
                get componentEnabled() {
                    return D || (D = new CustomEvent("uiComponentEnabled")), D
                },
                get sliderUpdate() {
                    return k || (k = new CustomEvent("uiSliderUpdate")), k
                }
            }, X = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent), Y = ["webkit", "moz"], j = 0; !window.requestAnimationFrame && j < Y.length; j++) window.requestAnimationFrame = window[Y[j] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[Y[j] + "CancelAnimationFrame"] || window[Y[j] + "CancelRequestAnimationFrame"];

        function M(e, t) {
            e = l(e);
            var n = {};
            if (arguments.length > 2)
                for (var i = 1; i < arguments.length; i += 2) n = g.conformCssKeyValue(arguments[i], arguments[i + 1]);
            else n = "string" == typeof arguments[1] ? g.conformCssString(arguments[1], e) : g.conformCssObject(arguments[1], e);
            g.apply(e, n)
        }

        function V(e, t) {
            var n;
            if (e = l(e), "x" == t || "y" == t) {
                var i = e.style[g.getDeviceKey("transform")].replace(/[\s\(\)matrix]/g, "").split(",");
                n = i.length < 6 ? 0 : +i["x" == t ? 4 : 5]
            } else n = window.getComputedStyle(e, null).getPropertyValue(t).replace(/px/, ""), isNaN(n) || (n = parseInt(n, 10));
            return n
        }

        function K(e, t) {
            if (!document.getElementById(e)) {
                var n = document.createElement("style");
                n.type = "text/css", n.id = e;
                var i = 2 === arguments.length ? t : "";
                if (arguments.length > 2)
                    for (var r = 0; r < arguments.length - 1; r += 2) i += arguments[r + 1].replace(/\,\s+/g, ","), i += " { " + (arguments[r + 2] || "") + " }\n";
                n.innerHTML = i, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }

        function N(e, t) {
            for (var n = l(e), i = 0; i < arguments.length - 1; i++) n.classList.add(arguments[i + 1])
        }
        window.requestAnimationFrame && window.cancelAnimationFrame && !X || (window.requestAnimationFrame = function(e) {
            return setTimeout(e, 17)
        }, window.cancelAnimationFrame = clearTimeout);
        var B = Object.freeze({
            setCss: M,
            getCss: V,
            injectStylesheet: K,
            addClass: N,
            removeClass: function(e, t) {
                l(e).classList.remove(t)
            }
        });
        var H = {
                x: ["offsetWidth", "width", "left", "right"],
                y: ["offsetHeight", "height", "top", "bottom"]
            },
            U = [{
                x: "offsetWidth",
                y: "offsetHeight",
                parent: "parentNode"
            }, {
                x: "width",
                y: "height",
                parent: "stage"
            }],
            W = "alignCenter";

        function q(e, t) {
            var n = function(e, t) {
                var n = e.canvas || l(e),
                    i = {},
                    r = !1 !== t.snap,
                    o = Z(e) ? 0 : 1;
                for (var a in "string" == typeof t && (t = G(t)), t)
                    if ("x" == a || "y" == a) {
                        var s, c, u = t[a];
                        if (!u) continue;
                        "string" == typeof u && (u = {
                            type: u
                        });
                        var f = 0,
                            d = !1,
                            g = u.offset || 0;
                        if (void 0 !== u.against) {
                            var h = 0;
                            Z(s = u.against) ? s.canvas ? h = 1 : f = V(s, a) : "number" == typeof s ? (d = !0, f = s) : (f = s[a], h = 1), c = U[h][a], u.type === W && (t[a].outer = !1)
                        } else s = n[U[o].parent], c = U[o][a];
                        var p = n[U[o][a]];
                        switch (e._type) {
                            case "arc":
                            case "path":
                                switch (u.type) {
                                    case W:
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
                        var v = G(u.type, p, d ? 0 : s[c], !d && !!t[a].outer);
                        null != v && (v += f + g, i[a] = r ? Math.round(v) : v)
                    }
                return i
            }(e, t);
            if (Z(e)) M(e.canvas || l(e), n);
            else
                for (var i in n) e[i] = n[i];
            return n
        }

        function G(e, t, n, i) {
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

        function Z(e) {
            return e instanceof HTMLElement || void 0 != e.canvas
        }
        var $ = function() {
                function t() {
                    s(this, t)
                }
                return t.init = function() {
                    var e = this;
                    return new Promise(function(t, n) {
                        Promise.all([]).then(function() {
                            e.prepareAdData(), t()
                        }).catch(function(e) {
                            n(e)
                        })
                    })
                }, t.prepareAdData = function() {
                    e.adData = new function() {
                        this.fonts = {
                            primary: "template_font"
                        }, this.colors = {}, this.svg = {}
                    }
                }, t.loadDynamicJS = function(e) {
                    return new Promise(function(e, t) {
                        e()
                    })
                }, t
            }(),
            J = "inlineFit",
            Q = function e(t, n) {
                s(this, e), K("RED_uiElement", ".ui-elem", "position:absolute;"), n = n || "div";
                var i = document.createElement(n);
                return N(i, "ui-elem"), (t = t || {}).id && (i.id = t.id), M(i, t.css), t.target && l(t.target).appendChild(i), Object.defineProperty(i, "parent", {
                    get: function() {
                        return i.parentNode
                    }
                }), i.toString = function() {
                    return "[object UIDiv]"
                }, i
            },
            ee = function(e) {
                function t(n, i) {
                    s(this, t);
                    var r = !0,
                        o = !0,
                        c = i || "div";
                    n = n || {}, i = "svg" == c ? "div" : i;
                    var u = a(this, e.call(this, n, i)),
                        f = u;
                    return f._align = n.align, Object.defineProperties(f, {
                        x: {
                            get: function() {
                                return V(f, "x")
                            },
                            set: function(e) {
                                M(f, {
                                    x: e
                                })
                            }
                        },
                        y: {
                            get: function() {
                                return V(f, "y")
                            },
                            set: function(e) {
                                M(f, {
                                    y: e
                                })
                            }
                        },
                        enabled: {
                            get: function() {
                                return r
                            },
                            set: function(e) {
                                r = e, f.dispatchEvent(R.componentEnabled)
                            }
                        },
                        showing: {
                            get: function() {
                                return o
                            },
                            set: function() {}
                        }
                    }), "canvas" != c && "svg" != c && Object.defineProperties(f, {
                        width: {
                            get: function() {
                                return f.offsetWidth
                            },
                            set: function(e) {
                                M(f, {
                                    width: e
                                });
                                var t = new CustomEvent(R.RESIZE);
                                t.direction = "width", f.dispatchEvent(t)
                            }
                        },
                        height: {
                            get: function() {
                                return f.offsetHeight
                            },
                            set: function(e) {
                                M(f, {
                                    height: e
                                });
                                var t = new CustomEvent(R.RESIZE);
                                t.direction = "height", f.dispatchEvent(t)
                            }
                        }
                    }), f.hide = function() {
                        f.style.display = "none", o = !1
                    }, f.show = function() {
                        try {
                            f.style.removeProperty("display")
                        } catch (e) {
                            f.style.display = null
                        }
                        o = !0
                    }, f.setCss = function(e) {
                        M(f, e)
                    }, f.addChild = function(e) {
                        var t = l(e);
                        f.appendChild(t), e._align && q(e, e._align)
                    }, f.inspect = function() {
                        for (var e = {}, t = Object.getOwnPropertyNames(f), n = 0; n < t.length; n++) {
                            var i = f[t[n]];
                            e[t[n]] = i
                        }
                    }, f.toString = function() {
                        return "[object UIComponent]"
                    }, f._initAlign = function(e) {
                        var t = e ? 1 == e : void 0 != n.target;
                        n.align && t && q(f, n.align)
                    }, f.enabled = !0, f._initAlign(), a(u, f)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), t
            }(Q),
            te = function e(t) {
                s(this, e), K("RED_uiImage", ".ui-image", "background-repeat:no-repeat; background-size:contain;");
                var n = !0,
                    i = null,
                    r = !1,
                    o = "contain",
                    a = !!t.aspectRatio;
                if (t.css, !t.source) throw new Error("UIImage : No image source set on '" + t.id + "'");
                t.css = t.css || {};
                var c = new ee(t);

                function u(e) {
                    var o, s, u = r ? 2 : 1,
                        l = i.width / i.height,
                        f = t.css.width || i.width,
                        d = t.css.height || i.height,
                        g = void 0 == t.css.width,
                        h = void 0 == t.css.height;
                    n || (g = "height" == e, h = "width" == e, f = c.width, d = c.height), g && (o = a && !h ? d * l : f / u, c.style.width = Math.round(o) + "px"), h && (s = a && !g ? f / l : d / u, c.style.height = Math.round(s) + "px")
                }
                return N(c, "ui-image"), Object.defineProperties(c, {
                    source: {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            i = function(e) {
                                if (y[e]) return y[e];
                                throw new Error("ImageManager : No image named '" + e + "' has been loaded")
                            }(e), c.style.backgroundImage = "url(" + i.src + ")"
                        }
                    },
                    retina: {
                        get: function() {
                            return r
                        },
                        set: function(e) {
                            r = e, u()
                        }
                    },
                    ratio: {
                        get: function() {
                            return o
                        },
                        set: function(e) {
                            o = e, c.style.backgroundSize = e
                        }
                    },
                    aspectRatio: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            a = e, u()
                        }
                    }
                }), c.toString = function() {
                    return "[object UIImage]"
                }, c.addEventListener(R.RESIZE, function(e) {
                    u(e.direction)
                }), c.source = t.source, c.retina = !!t.retina, t.ratio && (c.ratio = t.ratio), c._initAlign(), n = !1, c
            },
            ne = function e(t) {
                var n;
                s(this, e), K("RED_uiTextfield", ".ui-textfield", "position:absolute; white-space:nowrap;", ".smooth-text", "-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;", ".ui-textfield .content", "position:relative; display:table-cell; cursor:default; pointer-events:none; line-height:100%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
                var i, r, o, a, c, l = 0,
                    f = "",
                    d = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    g = "",
                    h = !0,
                    p = {},
                    v = new ee(t = t || {});
                N(v, "ui-textfield");
                var m = document.createElement("span");

                function b() {
                    if (!h) switch (f) {
                        case "paragraphClamp":
                        case "inlineClamp":
                            w();
                            break;
                        case "inlineFitClamp":
                            f = "inlineFit", y(), f = "inlineClamp", w(), f = "inlineFitClamp";
                            break;
                        case "paragraphFitClamp":
                            f = "paragraphFit", y(), f = "paragraphClamp", w(), f = "paragraphFitClamp";
                        default:
                            y()
                    }
                }

                function y() {
                    if (M(m, {
                            verticalAlign: "auto",
                            height: "auto",
                            width: "auto"
                        }), "paragraphFit" == f) {
                        for (var e = l; v.scrollHeight > v.offsetHeight && !(e <= 0);) e--, v.style.fontSize = e + "px";
                        for (; v.scrollWidth > v.offsetWidth && !(e <= 0);) e--, v.style.fontSize = e + "px";
                        l = e, v.style.fontSize = l + "px"
                    } else if ("inlineFit" == f) {
                        var t = v.offsetWidth,
                            n = v.offsetHeight;
                        v.style.fontSize = "243px";
                        var i = m.offsetWidth,
                            r = m.offsetHeight;
                        v.style.fontSize = "182px";
                        var o = m.offsetWidth,
                            s = m.offsetHeight,
                            c = u(243, 182, i, o, t),
                            g = u(243, 182, r, s, n);
                        l = ~~Math.min(l, Math.min(c, g)), v.style.fontSize = l + "px"
                    }
                    a && M(m, {
                        verticalAlign: a,
                        height: v.offsetHeight - d.top - d.bottom,
                        width: v.offsetWidth - d.left - d.right
                    })
                }

                function w() {
                    M(m, {
                        height: "auto",
                        width: "auto"
                    }), v.width = m.offsetWidth, v.height = m.offsetHeight
                }
                return N(m, "content"), v.appendChild(m), Object.defineProperties(v, {
                        alignText: {
                            get: function() {
                                return n
                            },
                            set: function(e) {
                                if (e && n != e) {
                                    var t = ((n = e).match(/(left|right)/gi) || ["center"])[0].toLowerCase();
                                    M(v, {
                                        lineHeight: v.height,
                                        textAlign: t
                                    }), a = (n.match(/(bottom|top)/gi) || ["middle"])[0].toLowerCase(), M(m, {
                                        verticalAlign: a
                                    })
                                }
                            }
                        },
                        fontSize: {
                            get: function() {
                                return l
                            },
                            set: function(e) {
                                !isNaN(e) && e > 0 && (l = e, v.style.fontSize = ~~e + "px", b())
                            }
                        },
                        fontFamily: {
                            get: function() {
                                return i
                            },
                            set: function(e) {
                                i = e, v.style.fontFamily = e, b()
                            }
                        },
                        format: {
                            get: function() {
                                return f
                            },
                            set: function(e) {
                                f != e && (M(v, {
                                    whiteSpace: null != /inline/g.exec(f = e) ? "nowrap" : "normal"
                                }), b())
                            }
                        },
                        leading: {
                            get: function() {
                                return r
                            },
                            set: function(e) {
                                e && r != e && (M(m, {
                                    lineHeight: 100 * (r = e) + "%"
                                }), b())
                            }
                        },
                        spacing: {
                            get: function() {
                                return V(v, "letter-spacing") || o
                            },
                            set: function(e) {
                                e && o != e && (o = e, M(v, {
                                    letterSpacing: e
                                }), b())
                            }
                        },
                        bufferText: {
                            get: function() {
                                return d
                            },
                            set: function(e) {
                                if (e && d != e) {
                                    for (var t = "", n = ["top", "right", "bottom", "left"], i = 0; i < 4; i++) {
                                        var r = n[i],
                                            o = isNaN(e) ? e[r] || 0 : e;
                                        d[r] = o, t += o + "px "
                                    }
                                    M(m, {
                                        padding: t
                                    }), b()
                                }
                            }
                        },
                        text: {
                            get: function() {
                                return g
                            },
                            set: function(e) {
                                void 0 != e && "" != e && (g = e, v.setDefault("text", e), m.innerHTML = e, b())
                            }
                        },
                        smoothing: {
                            get: function() {
                                return c
                            },
                            set: function(e) {
                                B[(c = e) ? "addClass" : "removeClass"](m, "smooth-text")
                            }
                        }
                    }), v.resetToDefault = function() {
                        if (h = !0, arguments.length > 0)
                            for (var e = 0; e < arguments.length; e++) v[arguments[e]] = p[arguments[e]];
                        else
                            for (var t in p) void 0 != v[t] && (v[t] = p[t]);
                        h = !1, b()
                    }, v.setDefault = function(e, t) {
                        p[e] = t
                    }, v.toString = function() {
                        return "[object UITextfield]"
                    }, v.enabled = !0,
                    function() {
                        for (var e in t)
                            if ("css" == e)
                                for (var n in t.css) switch (n) {
                                        case "x":
                                        case "y":
                                        case "width":
                                        case "height":
                                            p[n] = t.css[n]
                                    } else if ("bufferText" == e)
                                        for (var i in p[e] = {}, d) p[e][i] = t[e][i] || 0;
                                    else p[e] = t[e];
                        delete p.target, delete p.id
                    }(), v.format = t.format, v.fontSize = t.fontSize, v.fontFamily = t.fontFamily || "Arial", v.alignText = t.alignText, v.bufferText = t.bufferText, v.leading = t.leading, v.spacing = t.spacing, v.smoothing = 0 != t.smoothing, h = !1, v.text = t.text, v._initAlign(), v
            };
        window.Control = new function() {
            this.prepare = function(t) {
                var n = this;
                (function(e) {
                    return new Promise(function(t, n) {
                        var i;
                        f.init(), g.init(), (i = e) && S(i.getAllContentRaw()), Promise.all([]).then(function() {
                            t()
                        }).catch(function(e) {
                            n(e)
                        })
                    })
                })(t).then(function() {
                    return $.init()
                }).then(function() {
                    return new Promise(function(t, n) {
                        E(t, e.failAd)
                    })
                }).then(function() {
                    n.prepareBuild()
                }).catch(function(e) {
                    throw e
                })
            }, this.prepareBuild = function() {
                Control.preMarkup(), View.main = new function() {
                    var e = l("main");
                    return M(e, {
                            position: "absolute",
                            width: adParams.adWidth,
                            height: adParams.adHeight,
                            opacity: 0,
                            left: "0px",
                            top: "0px",
                            overflow: "hidden",
                            userSelect: "none"
                        }), e.logoContainer = new te({
                            id: "logo-container",
                            target: e,
                            source: "template_image",
                            css: {
                                x: 9,
                                y: 60
                            }
                        }), e.txtGreeting = new ne({
                            id: "txt-greeting",
                            target: e,
                            css: {
                                width: 200,
                                height: 30,
                                color: "#ff1414"
                            },
                            align: W,
                            fontSize: 40,
                            fontFamily: "template_font",
                            format: J,
                            alignText: W,
                            bufferText: {
                                left: 5,
                                right: 5
                            },
                            leading: 1,
                            text: "MOBILE ADS"
                        }),
                        function(e) {
                            M(e.target, {
                                textShadow: function(e, t, n, i, r, o, a) {
                                    var s, u = "",
                                        l = (s = -1 * e + 180, Math.PI / 180 * s);
                                    return u += (Math.cos(l) * t).toFixed(8) + "px ", u += (Math.sin(l) * t).toFixed(8) + "px ", u += n + "px", u += " " + c(r, o), (a = !!a) && (u += " inset"), u
                                }(e.angle || 0, e.distance || 0, e.size || 0, 0, e.color || "#000000", e.alpha)
                            })
                        }({
                            target: e.txtGreeting,
                            angle: 45,
                            distance: 2,
                            size: 2,
                            color: "#000000",
                            alpha: .5
                        }), e.buttonCta = new function e(t) {
                            s(this, e), (t = t || {}).css = t.css || {}, K("RED_uiButton", ".ui-button", "position:absolute", ".ui-button-state", "position: absolute; width:inherit; height:inherit;");
                            var n, i = 0,
                                r = [],
                                o = !!t.containChild,
                                a = new ee(t);
                            N(a, "ui-button"), t.bg && u(t.bg, !1), f(), t.icon = t.icon || [];
                            for (var c = 0; c < t.icon.length; c++) u(t.icon[c], !0);

                            function u(e, i) {
                                var s, c = t.id + (i ? "-state-" + r.length : "-bg");
                                "string" == typeof e ? s = new te({
                                    target: a,
                                    id: c,
                                    source: e,
                                    css: o ? {
                                        width: "inherit",
                                        height: "inherit"
                                    } : {}
                                }) : ((s = e).id = c, a.addChild(s), /(UITextField)/gi.exec(s.toString()) && s.resetToDefault(), s._initAlign(!0)), i ? (r.push(s), N(s, "ui-button-state")) : n = s, z.disable(s)
                            }

                            function f() {
                                ! function(e, t, n, i) {
                                    var r = l(e);
                                    i = !1 !== i;
                                    var o = r.childNodes,
                                        a = [],
                                        s = {};
                                    /(x)/gi.exec(t) && (s.x = {}), /(y)/gi.exec(t) && (s.y = {});
                                    for (var c = 0; c < o.length; c++) {
                                        var u = o[c];
                                        for (var f in a[c] = {}, s) {
                                            var d = V(u, f),
                                                g = d + u[H[f][0]],
                                                h = s[f];
                                            0 == c && (h.min = d, h.max = g), d < h.min && (h.min = d), h.max < g && (h.max = g), a[c][f] = d
                                        }
                                    }
                                    var p = {
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        right: 0
                                    };
                                    if (n)
                                        for (var v in p) p[v] = isNaN(n) ? n[v] || 0 : n;
                                    var m = {};
                                    for (var f in s) {
                                        var b = s[f];
                                        i && (m[f] = b.min + V(r, f) - p[H[f][2]]), m[H[f][1]] = b.max - b.min + p[H[f][2]] + p[H[f][3]]
                                    }
                                    for (M(r, m), c = 0; c < o.length; c++) {
                                        for (var f in u = o[c], m = {}, s) m[f] = a[c][f] - s[f].min + p[H[f][2]];
                                        M(u, m)
                                    }
                                }(a, "clamp" + (t.css.width ? "" : "X") + (t.css.height ? "" : "Y"), {}, !1)
                            }

                            function d(e) {
                                F(e), a.togglable && (a.state = Number(!i)), a._onClick.call(a, e), a.onClick.call(a, e)
                            }

                            function g(e) {
                                a._onOver.call(a, e), a.onOver.call(a, e)
                            }

                            function h(e) {
                                a._onOut.call(a, e), a.onOut.call(a, e)
                            }
                            return f(), a.togglable = t.icon.length > 1, Object.defineProperties(a, {
                                bg: {
                                    get: function() {
                                        return n
                                    }
                                },
                                icon: {
                                    get: function() {
                                        return r
                                    }
                                },
                                state: {
                                    get: function() {
                                        return i
                                    },
                                    set: function(e) {
                                        i = e, e >= r.length && (i = 0);
                                        for (var t = 0; t < r.length; t++) r[t].style.visibility = t == i ? "visible" : "hidden"
                                    }
                                }
                            }), a.onClick = t.onClick || function(e) {}, a.onOver = t.onOver || function(e) {}, a.onOut = t.onOut || function(e) {}, a.toString = function() {
                                return "[object UIButton]"
                            }, a._onClick = function(e) {}, a._onOver = function(e) {}, a._onOut = function(e) {}, a.addEventListener(R.ENABLED, function(e) {
                                var t = a.enabled ? "addEventListener" : "removeEventListener";
                                z[t](a, T, d), z[t](a, "mouseover", g), z[t](a, "mouseout", h)
                            }), a.enabled = !0, a.state = t.state || 0, a._initAlign(), a
                        }({
                            id: "btn-cta",
                            target: e,
                            css: {
                                width: 150,
                                height: 40,
                                backgroundColor: "grey",
                                borderRadius: 10
                            },
                            align: {
                                x: W,
                                y: {
                                    type: "alignBottom",
                                    offset: -30
                                }
                            },
                            icon: [new ne({
                                css: {
                                    width: 150,
                                    height: 40,
                                    color: "#ffffff"
                                },
                                fontSize: 12,
                                fontFamily: "template_font",
                                format: J,
                                alignText: W,
                                text: "CLICK FOR MORE"
                            })]
                        }), M(e, {
                            "background-color": "#cccccc"
                        }), e
                }, View.mainBorder = new function() {
                    new function e(t) {
                        var n, i;
                        s(this, e);
                        var r = new Q(t);
                        return N(r, "ui-border"), Object.defineProperties(r, {
                            size: {
                                get: function() {
                                    return n
                                },
                                set: function(e) {
                                    void 0 != e && n != e && M(r, {
                                        borderWidth: n = e
                                    })
                                }
                            },
                            color: {
                                get: function() {
                                    return i
                                },
                                set: function(e) {
                                    e && i != e && M(r, {
                                        borderColor: i = e
                                    })
                                }
                            }
                        }), r.toString = function() {
                            return "[object UIBorder]"
                        }, z.disable(r), r.color = t.color, r.size = t.size, r
                    }({
                        target: View.main,
                        size: 1,
                        color: "#000000"
                    })
                }, Control.postMarkup(), Animation.startAd()
            }, this.preMarkup = function() {}, this.postMarkup = function() {
                z.add(View.main, T, Control.handleClick)
            }, this.animationComplete = function() {}, this.handleClick = function(e) {
                Network.exit(clickTag)
            }
        }, window.Animation = new function() {
            this.startAd = function() {
                e.removePreloader(), M(View.main, {
                    opacity: 1
                }), TweenLite.from(View.main.logoContainer, 1, {
                    y: -40
                }), TweenLite.from(View.main.txtGreeting, 1, {
                    y: 330
                })
            }
        }
    }).call(this, n(1))
}]);