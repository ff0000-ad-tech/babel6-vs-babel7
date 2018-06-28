! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
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
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
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
        var t, r = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            i = (t = n(0)) && t.__esModule ? t : {
                default: t
            };

        function a(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
        }

        function o(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }

        function s(e, t) {
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
        var c = function() {
            function e() {
                o(this, e)
            }
            return r(e, null, [{
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
        c.pixelRatio = window.devicePixelRatio || "unknown", c.init = function() {
            var e = this;
            e.agentString = navigator.userAgent, e._getType(), e._getBrandAndOS(), e._getBrowser(), "desktop" !== e.type && "windows" === e.os && e.osVersion <= 8 && "ie" === e.browser && e.browserVersion < 12 && (e.type = "desktop");
            Array(70).join("-");
            for (var t in e) e.hasOwnProperty(t) && "function" != typeof e[t] && e[t]
        }, c._getType = function() {
            var e = this,
                t = /(android|mobile)/gi.exec(e.agentString),
                n = /(tablet|touch)/gi.exec(e.agentString),
                r = /(ipad)/gi.exec(e.agentString);
            e.type = "desktop", t && (e.type = "mobile"), n && (e.type = "tablet"), r && (e.type = "tablet")
        }, c._getBrandAndOS = function() {
            var e = this,
                t = e.agentString.match(/ip(hone|od|ad)|mac/gi);
            if (t) {
                e.brand = "apple", e.product = t[0].toLowerCase();
                var n = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(e.agentString);
                return e.os = "" == n[2] ? "ios" : "osx", void(e.osVersion = n[3].replace(/\_/g, "."))
            }
            var r = /(android)\/?\s*([0-9\.]+)/gi.exec(e.agentString);
            if (r) return e.brand = e.product = e.os = r[1].toLowerCase(), e._checkForSpecial("product", ["pixel 2"], e.agentString.split("(")[1].split(")")[0]), void(e.osVersion = r[2]);
            var i = /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(e.agentString);
            if (i) {
                switch (e.brand = "microsoft", e.os = "windows", i[2]) {
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
                        e.osVersion = i[2]
                }
                return e.product = i[1].toLowerCase(), void(e.product.match(/\snt/i) && (e.product = "pc"))
            }
            e.agentString.match(/(blackberry|bb10|playbook)/i) && (e.brand = e.product = e.os = "blackberry", e.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(e.agentString)[2])
        }, c._getBrowser = function() {
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
        }, c._checkForSpecial = function(e, t, n) {
            for (var r, i = 0; i < t.length; i++)
                if (r = t[i].toLowerCase(), n.match(new RegExp(r, "i"))) {
                    this[e] = r;
                    break
                }
        };
        var u = function() {
            var e = this;
            e.identity = new Float32Array([1, 0, 0, 0, 1, 0]), e.data = new Float32Array(e.identity)
        };
        u.prototype = {
            clear: function() {
                this.data = new Float32Array(this.identity)
            },
            rotate: function(e) {
                var t = this,
                    n = new Float32Array(t.identity),
                    r = Math.cos(e).toFixed(15),
                    i = Math.sin(e).toFixed(15);
                return n[0] = r, n[1] = i, n[3] = -i, n[4] = r, t.multiply(n, !1), t
            },
            scale: function(e, t) {
                var n = this,
                    r = new Float32Array(n.identity);
                return r[0] = e, r[4] = t, n.multiply(r, !1), n
            },
            skew: function(e, t) {
                var n = this,
                    r = new Float32Array(n.identity);
                return r[1] = Math.tan(e), r[3] = Math.tan(t), n.multiply(r), n
            },
            translate: function(e, t) {
                var n = this,
                    r = new Float32Array(n.identity);
                return r[2] = e || 0, r[5] = t || 0, n.multiply(r, !0), n
            },
            multiply: function(e, t) {
                for (var n = this, r = new Float32Array(n.data), i = t ? e : r, a = t ? r : e, o = 0; o < 6; o++) {
                    var s = 3 * Math.floor(o / 3),
                        c = o % 3;
                    n.data[o] = i[s] * a[c] + i[s + 1] * a[c + 3]
                }
                n.data[2] += i[2], n.data[5] += i[5]
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
        var l = function e() {
            o(this, e)
        };
        l.debug_level1 = !1, l.debug_level2 = !1, l.filter = void 0, l.debug_element = void 0, l.debug_css_list = void 0, l.init = function() {
            this.generateBrowserKeyDictionary()
        }, l.setDebugLevel = function(e) {
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
        }, l.setDebugFilter = function(e) {
            this.filter = e, this.debug_level1 = !0
        }, l.ifDebug = function(e) {
            var t = this;
            return t.filter ? !(!t.passDebugFilter() || !t[e]) || void 0 : t[e]
        }, l.passDebugFilter = function() {
            var e = this;
            if (e.debug_element && e.debug_element.id.indexOf(e.filter) > -1) return !0;
            if (e.debug_css_list)
                for (var t in e.debug_css_list) {
                    if (t.indexOf(e.filter) > -1) return !0;
                    if (String(e.debug_css_list[t]).indexOf(e.filter) > -1) return !0
                }
            return !1
        }, l.generateBrowserKeyDictionary = function() {
            var e = this;
            e.deviceKeyDict = {};
            var t = document.createElement("div").style;
            for (var n in t) {
                var r = e.getPrefix(n),
                    i = e.standardizeKey(n);
                switch (c.browser) {
                    case "safari":
                        "webkit" == r ? e.deviceKeyDict[i] = e.prependPrefix("webkit", i) : e.prependPrefix("webkit", i) in t || (e.deviceKeyDict[i] = i);
                        break;
                    case "firefox":
                        var a = e.prependPrefix("Moz", i),
                            o = e.prependPrefix("Webkit", i);
                        i in t ? e.deviceKeyDict[i] = i : "moz" == r ? e.camelateKey("webkit-" + i) in t && (e.deviceKeyDict[i] = a) : "webkit" == r && (a in t || (e.deviceKeyDict[i] = o));
                        break;
                    case "chrome":
                    case "ie":
                    default:
                        i in t ? e.deviceKeyDict[i] = i : r && (e.deviceKeyDict[i] = e.prependPrefix(r, i))
                }
            }
        }, l.apply = function(e, t) {
            var n = this;
            n.debug_element = e, n.debug_css_list = t, n.ifDebug("debug_level1");
            var r = {};
            for (var i in t) i.match(/^transform\(/) ? r[i] = t[i] : (n.ifDebug("debug_level1"), e.style[n.getDeviceKey(i)] = t[i]);
            n.applyTransforms(e, r), n.ifDebug("debug_level1"), n.debug_element = null, n.debug_css_list = null
        }, l.conformCssObject = function(e, t) {
            var n = this;
            n.debug_element = t, n.ifDebug("debug_level1");
            var r = {};
            if (e)
                for (var i in e) {
                    n.ifDebug("debug_level2");
                    var a = n.conformKeyValue(i, e[i]);
                    for (var o in a) n.ifDebug("debug_level2"), r[a[o][0]] = a[o][1]
                }
            return n.debug_element = null, r
        }, l.conformCssString = function(e, t) {
            var n = this;
            n.debug_element = t, n.ifDebug("debug_level1");
            var r = {};
            if (e) {
                var i = e.split(/\s*;\s*/);
                for (var a in i)
                    if (i[a]) {
                        var o = i[a].split(/:(.+)?/);
                        n.ifDebug("debug_level2");
                        var s = n.conformKeyValue(o[0], o[1]);
                        for (var c in s) n.ifDebug("debug_level2"), r[s[c][0]] = s[c][1]
                    }
            }
            return n.debug_element = null, r
        }, l.conformCssKeyValue = function(e, t) {
            this.ifDebug("debug_level1");
            var n = {};
            return n[e] = t, this.conformCssObject(n)
        }, l.applyTransforms = function(e, t) {
            var n = this;
            n.ifDebug("debug_level1");
            var r = new u,
                i = e.style[n.getDeviceKey("transform")].match(/matrix[^\)]+\)/);
            if (i && (r.setFromCss(i[0]), n.ifDebug("debug_level2")), "transforms" in e) var a = e.transforms;
            else a = {
                tx: 0,
                ty: 0,
                rz: 0,
                sx: 1,
                sy: 1
            };
            var o = {};
            for (var s in t) o[s.match(/\(\s([^\s]+)/)[1]] = t[s];
            if (void 0 != o.tx && (r.data[2] = 0), void 0 != o.ty && (r.data[5] = 0), void 0 != o.rz) {
                var c = -a.rz;
                r.rotate(c * (Math.PI / 180)), r.rotate(o.rz * (Math.PI / 180)), a.rz = o.rz
            }
            void 0 != o.sx && (c = 1 / a.sx, r.scale(c, 1), r.scale(o.sx, 1), a.sx = o.sx), void 0 != o.sy && (c = 1 / a.sy, r.scale(1, c), r.scale(1, o.sy), a.sy = o.sy), void 0 != o.tx && (r.translate(o.tx, 0), a.tx = o.tx), void 0 != o.ty && (r.translate(0, o.ty), a.ty = o.ty), e.transforms = a, n.ifDebug("debug_level2"), e.style[n.getDeviceKey("transform")] = r.getCss()
        }, l.conformKeyValue = function(e, t) {
            e = String(e).trim(), t = String(t).trim();
            var n = this.standardizeKey(e);
            return this.conformValue(n, t)
        }, l.hasPrefix = function(e) {
            return e.search(this.matchPrefixRegex()) > -1
        }, l.getPrefix = function(e) {
            var t = e.match(this.matchPrefixRegex());
            return t ? t[1].replace(/-/g, "").toLowerCase() : null
        }, l.stripPrefix = function(e) {
            var t = e.replace(this.matchPrefixRegex(), "");
            return t.charAt(0).toLowerCase() + t.slice(1)
        }, l.getDeviceKey = function(e) {
            return e in this.deviceKeyDict ? this.deviceKeyDict[e] : e
        }, l.prependPrefix = function(e, t) {
            return e + t.replace(/^(.)/, function(e) {
                return e.charAt(0).toUpperCase()
            })
        }, l.standardizeKey = function(e) {
            var t = this;
            return e = (e = t.stripPrefix(e)) in t.keyFormatExceptions() ? t.keyFormatExceptions()[e] : t.camelateKey(e), t.ifDebug("debug_level2"), e
        }, l.camelateKey = function(e) {
            return e.replace(/-(.)/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }, l.keyFormatExceptions = function() {
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
        }, l.conformValue = function(e, t) {
            var n, r = this,
                i = [],
                a = t.match(/\s/),
                o = t.match(r.matchNumberRegex());
            if (!a && o) {
                r.ifDebug("debug_level2"), n = Number(o[0]);
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
            } else if ("backgroundImage" == e) r.ifDebug("debug_level2"), n = 'url( "' + (t = t.replace(/^url\(\s*['"]*/, "").replace(/['"]*\s*\)$/, "")) + '" )';
            else if ("transform" == e) {
                r.ifDebug("debug_level2");
                for (var c = /([a-z0-9]+)\(([^\)]+)\)/gi; params = c.exec(t);) {
                    var u = params[2].replace(/\s/g, "").split(",").map(function(e, t, n) {
                        return Number(e.match(r.matchNumberRegex())[0])
                    });
                    switch (params[1]) {
                        case "translate":
                            i.push(["transform( tx )", u[0]]), i.push(["transform( ty )", u[1]]);
                            break;
                        case "translateX":
                            i.push(["transform( tx )", u[0]]);
                            break;
                        case "translateY":
                            i.push(["transform( ty )", u[0]]);
                            break;
                        case "rotate":
                            i.push(["transform( rz )", u[0]]);
                            break;
                        case "scale":
                            i.push(["transform( sx )", u[0]]), i.push(["transform( sy )", u[1]]);
                            break;
                        case "scaleX":
                            i.push(["transform( sx )", u[0]]);
                            break;
                        case "scaleY":
                            i.push(["transform( sy )", u[0]])
                    }
                }
            } else r.ifDebug("debug_level2"), n = t;
            if (void 0 != n) {
                r.ifDebug("debug_level2");
                for (var l = e.split(/\,/), d = 0; d < l.length; d++) i.push([l[d], n])
            }
            return i
        }, l.matchNumberRegex = function() {
            return /^[+-]?[0-9]*\.?[0-9]+/
        }, l.matchPrefixRegex = function() {
            return /^-*(moz-*|webkit-*|ms-*|o-)/i
        };
        var d = [],
            f = [],
            g = [],
            p = [],
            h = void 0,
            v = {},
            m = !1,
            b = 0,
            _ = function() {},
            y = function() {};

        function w(t, n) {
            if (y = n || e.failAd, m) p.push(t);
            else {
                h = new i.default({
                    name: "imageManagerLoader",
                    onComplete: function(e) {
                        m = !1, x(e.getAllContentRaw())
                    },
                    onFail: function(e) {
                        m = !1, y.call()
                    }
                }), _ = [].concat(t), p = [];
                var r = d.slice();
                d = [], h.add(new i.default(r, {
                    name: "dynamicImages-" + b++,
                    fileType: "jpg"
                }));
                var a = f.slice();
                f = [], h.add(new i.default(a, {
                    name: "dynamicCanvasImages-" + b++,
                    fileType: "jpg",
                    crossOrigin: "anonymous"
                }));
                var o = g.slice();
                g = [];
                for (var s = 0; s < o.length; s++) h.add(o[s]);
                m = !0, h.load()
            }
        }

        function x(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] instanceof Image || e[t] instanceof SVGElement) {
                    var n = e[t];
                    r = e[t].id, void 0 != v[r] || (v[n.id] = n)
                }
            var r;
            for (t = 0; t < _.length; t++) _[t].call();
            p.length > 0 && w(p)
        }
        for (var E, D, k = {}, S = !1, C = function(e, t, n, r, i, a, o, s, c, u, l) {
                var d = new CustomEvent(e);
                return d.mouse = {
                    global: {
                        x: t,
                        y: n
                    },
                    local: {
                        x: r,
                        y: i
                    }
                }, d.element = {
                    x: a || 0,
                    y: o || 0
                }, d.distance = {
                    x: s || 0,
                    y: c || 0
                }, d.velocity = {
                    x: u || 0,
                    y: l || 0
                }, d.direction = {
                    x: u > 0 ? "right" : u < 0 ? "left" : null,
                    y: l > 0 ? "down" : l < 0 ? "up" : null
                }, d
            }, P = function(e) {
                return void 0 != k[e]
            }, A = function() {
                function e(t) {
                    o(this, e);
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
                    var r = n.eventList.indexOf(e);
                    r >= 0 && n.eventList.splice(r, 1), n._checkDragEnabled(), n._elemRemove(e, t)
                }, e.prototype._reset = function() {
                    var e = this;
                    e._cursor = "mouse", e._start = "down", e._end = "up", e.elem.addEventListener("touchstart", e._handleTouchStart), "ios" != c.os && e.elem.addEventListener("mousedown", e._handleDown)
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
                    t.debug, S || (S = !0, k = {}), t.elem.removeEventListener("touchstart", t._handleTouchStart), "ios" != c.os && t.elem.removeEventListener("mousedown", t._handleDown), t._isDragging = !1, t._add(t._end, t._handleUp), t._add("move", t._handleDrag);
                    var n = t._getEventScope(e),
                        r = n.pageX,
                        i = n.pageY,
                        a = t.elem.getBoundingClientRect(),
                        o = r - a.left,
                        s = i - a.top,
                        u = t.elem.x || j(t.elem, "x"),
                        l = t.elem.y || j(t.elem, "y"),
                        d = a.left - u,
                        f = a.top - l;
                    t._oX = d + o, t._oY = f + s;
                    var g = r - t._oX,
                        p = i - t._oY;
                    t._sX = t._p1X = t._p2X = r, t._sY = t._p1Y = t._p2Y = i,
                        function(e) {
                            if (!P(e)) {
                                var n = new C(e, r, i, o, s, g, p);
                                t.debug, t.elem.dispatchEvent(n)
                            }
                        }("onPress")
                }, e.prototype._handleUp = function(e, t) {
                    var n = this;
                    n.debug, n._remove(n._end, n._handleUp), n._remove("move", n._handleDrag);
                    var r = n._getEventScope(e),
                        i = r.pageX,
                        a = r.pageY,
                        o = n.elem.getBoundingClientRect(),
                        s = i - o.left,
                        c = a - o.top,
                        u = i - n._oX,
                        l = a - n._oY;
                    !0 !== t && h("onRelease");
                    var d = o.top + window.pageYOffset,
                        f = d + o.height,
                        g = o.left + window.pageXOffset,
                        p = g + o.width;

                    function h(e) {
                        if (!P(e)) {
                            var t = new C(e, i, a, s, c, u, l, 0, 0, n._vX, n._vY);
                            n.debug, n.elem.dispatchEvent(t)
                        }
                    }
                    n._isDragging ? n._isDragEnabled && n._dragEndOrSwipe("onDragStop") : i > g && i < p && a > d && a < f && h("onSelect"), n._isDragging && n._dragEndOrSwipe("onSwipe"), n._reset(), e.preventDefault(), S = !1
                }, e.prototype._handleTouchStart = function(e) {
                    var t = this;
                    t.debug, t._cursor = "touch", t._start = "start", t._end = "end", t._handleDown(e)
                }, e.prototype._handleDrag = function(e) {
                    var t = this;
                    t.debug;
                    var n = t._getEventScope(e),
                        r = n.pageX,
                        i = n.pageY,
                        a = r - t._p1X,
                        o = r - t._p2X;
                    t._vX = (o - a) / 2 + a;
                    var s = i - t._p1Y,
                        c = i - t._p2Y;
                    t._vY = (c - s) / 2 + s;
                    var u = r - t._oX,
                        l = i - t._oY,
                        d = t.elem.getBoundingClientRect(),
                        f = r - d.left,
                        g = i - d.top;

                    function p(e) {
                        if (!P(e)) {
                            var n = new C(e, r, i, f, g, u, l, t._p1X - t._sX, t._p1Y - t._sY, t._vX, t._vY);
                            t.debug, t.elem.dispatchEvent(n)
                        }
                    }
                    t._isDragging ? t._isDragEnabled && p("onDrag") : (Math.abs(t._sX - r) > t._give || Math.abs(t._sY - i) > t._give) && (t._isDragging = !0, t._isDragEnabled && p("onDragStart")), t._p2X = t._p1X, t._p1X = r, t._p2Y = t._p1Y, t._p1Y = i
                }, e.prototype._dragEndOrSwipe = function(e) {
                    var t = this;
                    if (t.debug, !P(name)) {
                        var n = t.elem.getBoundingClientRect(),
                            r = new C(e, t._p1X, t._p1Y, t._p1X - n.left, t._p1Y - n.top, t._p1X - t._oX, t._p1Y - t._oY, t._p2X - t._sX, t._p2Y - t._sY, t._vX, t._vY);
                        t.debug, t.elem.dispatchEvent(r)
                    }
                }, e
            }(), O = new function() {
                var e = this,
                    t = [],
                    n = [],
                    r = void 0 != document.createEventObject;

                function i(e) {
                    for (var n = null, r = 0; r < t.length; r++)
                        if (t[r].elem === e) {
                            n = t[r];
                            break
                        }
                    return n || (n = function(e) {
                        var n = new A(e);
                        return t.push(n), n
                    }(e)), n
                }

                function a(t, n) {
                    var r = i(t);
                    if (r.hasActiveChildren != n) {
                        r.hasActiveChildren = n;
                        for (var a = r.elem.getElementsByTagName("*"), o = 0; o < a.length; o++) a[o].parentNode == t && (n ? e.enable(a[o]) : e.disable(a[o]))
                    }
                }

                function o(e) {
                    for (var t = [], r = function e(t, r, i, a) {
                            t.style.visibility = "hidden", a.push(t);
                            for (var o = document.elementFromPoint(r, i), s = 0; s < n.length; s++)
                                if (n[s].elem == o) return e(o, r, i, a);
                            return o
                        }(e.target, e.clientX, e.clientY, t), i = 0; i < t.length; i++) t[i].style.visibility = "visible";
                    return t = [], e.stopImmediatePropagation(), r
                }

                function s(e) {
                    var t = o(e),
                        n = document.createEvent("HTMLEvents");
                    n.initEvent(e.type, !0, !1), t.dispatchEvent(n)
                }
                e._kills = {}, e.add = e.addEventListener = function(e, t, n) {
                    i(e).register(t, n), F(e, "cursor", "pointer"), F(e, "pointer-events", "auto")
                }, e.remove = e.removeEventListener = function(e, t, n) {
                    var r = i(e);
                    r && (r.unregister(t, n), r.eventList.length <= 0 && F(e, "cursor", "auto"))
                }, e.disable = function(e) {
                    var t = i(e);
                    n.push(t), r ? (t.register(GestureEvent.CLICK, s), F(e, "cursor", "auto")) : F(e, "pointer-events", "none")
                }, e.disableChildren = function(e) {
                    a(e, !1)
                }, e.enable = function(e) {
                    for (var t = i(e), a = 0; a < n.length; a++)
                        if (t == n[a]) {
                            r ? t.unregister(GestureEvent.CLICK, s) : (F(e, "pointer-events", "auto"), F(e, "cursor", "pointer"));
                            break
                        }
                }, e.enableChildren = function(e) {
                    a(e, !0)
                }
            }, X = {
                ENABLED: "uiComponentEnabled",
                RESIZE: "uiResize",
                SLIDER_UPDATE: "uiSliderUpdate",
                get componentEnabled() {
                    return E || (E = new CustomEvent("uiComponentEnabled")), E
                },
                get sliderUpdate() {
                    return D || (D = new CustomEvent("uiSliderUpdate")), D
                }
            }, Y = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent), R = ["webkit", "moz"], L = 0; !window.requestAnimationFrame && L < R.length; L++) window.requestAnimationFrame = window[R[L] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[R[L] + "CancelAnimationFrame"] || window[R[L] + "CancelRequestAnimationFrame"];

        function F(e, t) {
            e = s(e);
            var n = {};
            if (arguments.length > 2)
                for (var r = 1; r < arguments.length; r += 2) n = l.conformCssKeyValue(arguments[r], arguments[r + 1]);
            else n = "string" == typeof arguments[1] ? l.conformCssString(arguments[1], e) : l.conformCssObject(arguments[1], e);
            l.apply(e, n)
        }

        function j(e, t) {
            var n;
            if (e = s(e), "x" == t || "y" == t) {
                var r = e.style[l.getDeviceKey("transform")].replace(/[\s\(\)matrix]/g, "").split(",");
                n = r.length < 6 ? 0 : +r["x" == t ? 4 : 5]
            } else n = window.getComputedStyle(e, null).getPropertyValue(t).replace(/px/, ""), isNaN(n) || (n = parseInt(n, 10));
            return n
        }

        function V(e, t) {
            if (!document.getElementById(e)) {
                var n = document.createElement("style");
                n.type = "text/css", n.id = e;
                var r = 2 === arguments.length ? t : "";
                if (arguments.length > 2)
                    for (var i = 0; i < arguments.length - 1; i += 2) r += arguments[i + 1].replace(/\,\s+/g, ","), r += " { " + (arguments[i + 2] || "") + " }\n";
                n.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }

        function K(e, t) {
            for (var n = s(e), r = 0; r < arguments.length - 1; r++) n.classList.add(arguments[r + 1])
        }
        window.requestAnimationFrame && window.cancelAnimationFrame && !Y || (window.requestAnimationFrame = function(e) {
            return setTimeout(e, 17)
        }, window.cancelAnimationFrame = clearTimeout);
        var T = [{
                x: "offsetWidth",
                y: "offsetHeight",
                parent: "parentNode"
            }, {
                x: "width",
                y: "height",
                parent: "stage"
            }],
            I = "alignCenter";

        function M(e, t) {
            var n = function(e, t) {
                var n = e.canvas || s(e),
                    r = {},
                    i = !1 !== t.snap,
                    a = B(e) ? 0 : 1;
                for (var o in "string" == typeof t && (t = z(t)), t)
                    if ("x" == o || "y" == o) {
                        var c, u, l = t[o];
                        if (!l) continue;
                        "string" == typeof l && (l = {
                            type: l
                        });
                        var d = 0,
                            f = !1,
                            g = l.offset || 0;
                        if (void 0 !== l.against) {
                            var p = 0;
                            B(c = l.against) ? c.canvas ? p = 1 : d = j(c, o) : "number" == typeof c ? (f = !0, d = c) : (d = c[o], p = 1), u = T[p][o], l.type === I && (t[o].outer = !1)
                        } else c = n[T[a].parent], u = T[a][o];
                        var h = n[T[a][o]];
                        switch (e._type) {
                            case "arc":
                            case "path":
                                switch (l.type) {
                                    case I:
                                        h = 0;
                                        break;
                                    default:
                                        g += h / 2
                                }
                                break;
                            case "text":
                                if ("x" === o) switch (e.alignText) {
                                    case "center":
                                        h = 0;
                                    case "right":
                                        h *= -1
                                }
                        }
                        var v = z(l.type, h, f ? 0 : c[u], !f && !!t[o].outer);
                        null != v && (v += d + g, r[o] = i ? Math.round(v) : v)
                    }
                return r
            }(e, t);
            if (B(e)) F(e.canvas || s(e), n);
            else
                for (var r in n) e[r] = n[r];
            return n
        }

        function z(e, t, n, r) {
            var i = 1 == arguments.length;
            switch (e) {
                case "alignBottom":
                    if (r && (t = 0), !i) return n - t;
                case "alignTop":
                    return i ? {
                        y: e
                    } : r ? -t : 0;
                case "alignRight":
                    if (r && (n += t), !i) return n - t;
                case "alignLeft":
                    return i ? {
                        x: e
                    } : r ? -t : 0;
                case "alignCenter":
                    return r && (n = 0), i ? {
                        x: e,
                        y: e
                    } : (n - t) / 2;
                default:
                    return null
            }
        }

        function B(e) {
            return e instanceof HTMLElement || void 0 != e.canvas
        }
        var N = function() {
                function t() {
                    o(this, t)
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
                }, t
            }(),
            U = function e(t, n) {
                o(this, e), V("RED_uiElement", ".ui-elem", "position:absolute;"), n = n || "div";
                var r = document.createElement(n);
                return K(r, "ui-elem"), (t = t || {}).id && (r.id = t.id), F(r, t.css), t.target && s(t.target).appendChild(r), Object.defineProperty(r, "parent", {
                    get: function() {
                        return r.parentNode
                    }
                }), r.toString = function() {
                    return "[object UIDiv]"
                }, r
            },
            W = function(e) {
                function t(n, r) {
                    o(this, t);
                    var i = !0,
                        c = !0,
                        u = r || "div";
                    n = n || {}, r = "svg" == u ? "div" : r;
                    var l = a(this, e.call(this, n, r)),
                        d = l;
                    return d._align = n.align, Object.defineProperties(d, {
                        x: {
                            get: function() {
                                return j(d, "x")
                            },
                            set: function(e) {
                                F(d, {
                                    x: e
                                })
                            }
                        },
                        y: {
                            get: function() {
                                return j(d, "y")
                            },
                            set: function(e) {
                                F(d, {
                                    y: e
                                })
                            }
                        },
                        enabled: {
                            get: function() {
                                return i
                            },
                            set: function(e) {
                                i = e, d.dispatchEvent(X.componentEnabled)
                            }
                        },
                        showing: {
                            get: function() {
                                return c
                            },
                            set: function() {}
                        }
                    }), "canvas" != u && "svg" != u && Object.defineProperties(d, {
                        width: {
                            get: function() {
                                return d.offsetWidth
                            },
                            set: function(e) {
                                F(d, {
                                    width: e
                                });
                                var t = new CustomEvent(X.RESIZE);
                                t.direction = "width", d.dispatchEvent(t)
                            }
                        },
                        height: {
                            get: function() {
                                return d.offsetHeight
                            },
                            set: function(e) {
                                F(d, {
                                    height: e
                                });
                                var t = new CustomEvent(X.RESIZE);
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
                        F(d, e)
                    }, d.addChild = function(e) {
                        var t = s(e);
                        d.appendChild(t), e._align && M(e, e._align)
                    }, d.inspect = function() {
                        for (var e = {}, t = Object.getOwnPropertyNames(d), n = 0; n < t.length; n++) {
                            var r = d[t[n]];
                            e[t[n]] = r
                        }
                    }, d.toString = function() {
                        return "[object UIComponent]"
                    }, d._initAlign = function(e) {
                        var t = e ? 1 == e : void 0 != n.target;
                        n.align && t && M(d, n.align)
                    }, d.enabled = !0, d._initAlign(), a(l, d)
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
            }(U),
            H = function e(t) {
                o(this, e), V("RED_uiImage", ".ui-image", "background-repeat:no-repeat; background-size:contain;");
                var n = !0,
                    r = null,
                    i = !1,
                    a = "contain",
                    s = !!t.aspectRatio;
                if (t.css, !t.source) throw new Error("UIImage : No image source set on '" + t.id + "'");
                t.css = t.css || {};
                var c = new W(t);

                function u(e) {
                    var a, o, u = i ? 2 : 1,
                        l = r.width / r.height,
                        d = t.css.width || r.width,
                        f = t.css.height || r.height,
                        g = void 0 == t.css.width,
                        p = void 0 == t.css.height;
                    n || (g = "height" == e, p = "width" == e, d = c.width, f = c.height), g && (a = s && !p ? f * l : d / u, c.style.width = Math.round(a) + "px"), p && (o = s && !g ? d / l : f / u, c.style.height = Math.round(o) + "px")
                }
                return K(c, "ui-image"), Object.defineProperties(c, {
                    source: {
                        get: function() {
                            return r
                        },
                        set: function(e) {
                            r = function(e) {
                                if (v[e]) return v[e];
                                throw new Error("ImageManager : No image named '" + e + "' has been loaded")
                            }(e), c.style.backgroundImage = "url(" + r.src + ")"
                        }
                    },
                    retina: {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            i = e, u()
                        }
                    },
                    ratio: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            a = e, c.style.backgroundSize = e
                        }
                    },
                    aspectRatio: {
                        get: function() {
                            return s
                        },
                        set: function(e) {
                            s = e, u()
                        }
                    }
                }), c.toString = function() {
                    return "[object UIImage]"
                }, c.addEventListener(X.RESIZE, function(e) {
                    u(e.direction)
                }), c.source = t.source, c.retina = !!t.retina, t.ratio && (c.ratio = t.ratio), c._initAlign(), n = !1, c
            };
        window.Control = new function() {
            this.prepare = function(t) {
                var n = this;
                (function(e) {
                    return new Promise(function(t, n) {
                        var r;
                        c.init(), l.init(), (r = e) && x(r.getAllContentRaw()), Promise.all([]).then(function() {
                            t()
                        }).catch(function(e) {
                            n(e)
                        })
                    })
                })(t).then(function() {
                    return N.init()
                }).then(function() {
                    return new Promise(function(t, n) {
                        w(t, e.failAd)
                    })
                }).then(function() {
                    n.prepareBuild()
                }).catch(function(e) {
                    throw e
                })
            }, this.prepareBuild = function() {
                Control.preMarkup(), View.main = new function() {
                    var e = s("main");
                    return F(e, {
                        position: "absolute",
                        width: adParams.adWidth,
                        height: adParams.adHeight,
                        opacity: 0,
                        left: "0px",
                        top: "0px",
                        overflow: "hidden",
                        userSelect: "none"
                    }), new H({
                        target: e,
                        source: "japan",
                        align: I,
                        aspectRatio: !0,
                        css: {
                            width: adParams.adWidth - 50
                        }
                    }), new H({
                        target: e,
                        source: "boring",
                        aspectRatio: !0,
                        css: {
                            x: 100,
                            y: 10,
                            width: adParams.adWidth - 50
                        }
                    }), e
                }, View.mainBorder = new function() {
                    new function e(t) {
                        var n, r;
                        o(this, e);
                        var i = new U(t);
                        return K(i, "ui-border"), Object.defineProperties(i, {
                            size: {
                                get: function() {
                                    return n
                                },
                                set: function(e) {
                                    void 0 != e && n != e && F(i, {
                                        borderWidth: n = e
                                    })
                                }
                            },
                            color: {
                                get: function() {
                                    return r
                                },
                                set: function(e) {
                                    e && r != e && F(i, {
                                        borderColor: r = e
                                    })
                                }
                            }
                        }), i.toString = function() {
                            return "[object UIBorder]"
                        }, O.disable(i), i.color = t.color, i.size = t.size, i
                    }({
                        target: View.main,
                        size: 1,
                        color: "#000000"
                    })
                }, Control.postMarkup(), Animation.startAd()
            }, this.preMarkup = function() {}, this.postMarkup = function() {
                O.add(View.main, "onSelect", Control.handleClick)
            }, this.animationComplete = function() {}, this.handleClick = function(e) {
                Network.exit(clickTag)
            }
        }, window.Animation = new function() {
            this.startAd = function() {
                e.removePreloader(), F(View.main, {
                    opacity: 1
                })
            }
        }
    }).call(this, n(1))
}]);