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
    }, n.p = "", n(n.s = 63)
}([function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.Markup = t.Styles = t.Align = t.Clamp = t.Effects = t.Ratio = t.FullScreen = void 0;
    var r, i = (r = n(62)) && r.__esModule ? r : {
        default: r
    };
    t.FullScreen = i.default;
    var a = d(n(61));
    t.Ratio = a;
    var o = d(n(60));
    t.Effects = o;
    var s = d(n(36));
    t.Clamp = s;
    var l = d(n(35));
    t.Align = l;
    var u = d(n(7));
    t.Styles = u;
    var c = d(n(6));

    function d(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }
    t.Markup = c
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(8)) && r.__esModule ? r : {
            default: r
        },
        a = n(0),
        o = n(2);

    function s(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    var l = function(e) {
        var t, n;

        function r(t, n) {
            var r, i = !0,
                l = !0,
                u = n || "div";
            t = t || {}, n = "svg" == u ? "div" : n;
            var c = s(s(r = e.call(this, t, n) || this));
            return c._align = t.align, Object.defineProperties(c, {
                x: {
                    get: function() {
                        return a.Styles.getCss(c, "x")
                    },
                    set: function(e) {
                        a.Styles.setCss(c, {
                            x: e
                        })
                    }
                },
                y: {
                    get: function() {
                        return a.Styles.getCss(c, "y")
                    },
                    set: function(e) {
                        a.Styles.setCss(c, {
                            y: e
                        })
                    }
                },
                enabled: {
                    get: function() {
                        return i
                    },
                    set: function(e) {
                        i = e, c.dispatchEvent(o.UIEvent.componentEnabled)
                    }
                },
                showing: {
                    get: function() {
                        return l
                    },
                    set: function() {}
                }
            }), "canvas" != u && "svg" != u && Object.defineProperties(c, {
                width: {
                    get: function() {
                        return c.offsetWidth
                    },
                    set: function(e) {
                        a.Styles.setCss(c, {
                            width: e
                        });
                        var t = new CustomEvent(o.UIEvent.RESIZE);
                        t.direction = "width", c.dispatchEvent(t)
                    }
                },
                height: {
                    get: function() {
                        return c.offsetHeight
                    },
                    set: function(e) {
                        a.Styles.setCss(c, {
                            height: e
                        });
                        var t = new CustomEvent(o.UIEvent.RESIZE);
                        t.direction = "height", c.dispatchEvent(t)
                    }
                }
            }), c.hide = function() {
                c.style.display = "none", l = !1
            }, c.show = function() {
                try {
                    c.style.removeProperty("display")
                } catch (e) {
                    c.style.display = null
                }
                l = !0
            }, c.setCss = function(e) {
                a.Styles.setCss(c, e)
            }, c.addChild = function(e) {
                var t = a.Markup.get(e);
                c.appendChild(t), e._align && a.Align.set(e, e._align)
            }, c.inspect = function() {
                for (var e = {}, t = Object.getOwnPropertyNames(c), n = 0; n < t.length; n++) {
                    var r = c[t[n]];
                    e[t[n]] = r
                }
            }, c.toString = function() {
                return "[object UIComponent]"
            }, c._initAlign = function(e) {
                var n = e ? 1 == e : void 0 != t.target;
                t.align && n && a.Align.set(c, t.align)
            }, c.enabled = !0, c._initAlign(), c || s(r)
        }
        return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r
    }(i.default);
    t.default = l
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.GestureEvent = t.FrameRateBase = t.FrameRate = t.UIEvent = t.GestureBase = t.Gesture = void 0;
    var r = u(n(41));
    t.Gesture = r.default;
    var i = u(n(19));
    t.GestureBase = i.default;
    var a = u(n(40));
    t.UIEvent = a.default;
    var o = u(n(39));
    t.FrameRate = o.default;
    var s = u(n(17));
    t.FrameRateBase = s.default;
    var l = function(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }(n(18));

    function u(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.GestureEvent = l
}, function(e, t, n) {
    "use strict";
    var r;
    r = function() {
        return this
    }();
    try {
        r = r || Function("return this")() || (0, eval)("this")
    } catch (e) {
        "object" == typeof window && (r = window)
    }
    e.exports = r
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.TextUtils = t.ObjectUtils = t.MonetUtils = t.MathUtils = t.ImageUtils = t.DcsUtils = t.ColorUtils = t.ArrayUtils = t.MotionUtils = t.LocationUtils = void 0;
    var r = g(n(59));
    t.LocationUtils = r.default;
    var i = g(n(58));
    t.MotionUtils = i.default;
    var a = p(n(57));
    t.ArrayUtils = a;
    var o = p(n(56));
    t.ColorUtils = o;
    var s = p(n(55));
    t.DcsUtils = s;
    var l = p(n(54));
    t.ImageUtils = l;
    var u = p(n(53));
    t.MathUtils = u;
    var c = p(n(52));
    t.MonetUtils = c;
    var d = p(n(51));
    t.ObjectUtils = d;
    var f = p(n(50));

    function p(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }

    function g(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.TextUtils = f
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.SheetManager = t.ImageManager = t.Expandable = t.Core = t.ExpandableDcs = t.CssManager = void 0;
    var r = c(n(23));
    t.CssManager = r.default;
    var i = c(n(44));
    t.ExpandableDcs = i.default;
    var a = u(n(43));
    t.Core = a;
    var o = u(n(42));
    t.Expandable = o;
    var s = u(n(20));
    t.ImageManager = s;
    var l = u(n(37));

    function u(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }

    function c(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.SheetManager = l
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
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
    t.__esModule = !0, t.get = r, t.getElement = function(e, t) {
        return r(e, t)
    }, t.removeChildren = function(e) {
        for (var t = r(e); t.firstChild;) t.removeChild(t.firstChild)
    }, t.addiFrame = function(e) {
        var t = document.createElement("iFrame");
        return t.id = e.id, t.width = e.css.width, t.height = e.css.height, delete e.css.width, delete e.css.height, t.setAttribute("src", e.source), t.setAttribute("frameborder", "0"), t.setAttribute("scrolling", "no"), t.setAttribute("allowfullscreen", ""), applyContainerCss(t, e), e.target.appendChild(t), t
    }, t.addSvg = function(e) {
        var t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        t.setAttribute("height", e.height), t.setAttribute("width", e.width);
        var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
        return n.setAttribute("d", e.d), n.setAttribute("fill", e.fill), void 0 != e.stroke && n.setAttribute("stroke", e.stroke), void 0 != e.strokeWidth && n.setAttribute("stroke-width", e.strokeWidth), t.appendChild(n), applyContainerCss(t, e), e.target.appendChild(t), t
    }, t.applyToElements = function(e) {
        var t;
        if (void 0 === e.elements.length) e.method.call(e.scope, e.elements, e.methodArg);
        else
            for (t = 0; t < e.elements.length; t++) {
                var n = e.elements[t];
                e.method.call(e.scope, n, e.methodArg)
            }
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.setCss = function(e, t) {
        e = r.get(e);
        var n = {};
        if (arguments.length > 2)
            for (var a = 1; a < arguments.length; a += 2) n = i.CssManager.conformCssKeyValue(arguments[a], arguments[a + 1]);
        else n = "string" == typeof arguments[1] ? i.CssManager.conformCssString(arguments[1], e) : i.CssManager.conformCssObject(arguments[1], e);
        i.CssManager.apply(e, n)
    }, t.getCss = function(e, t) {
        var n;
        if (e = r.get(e), "x" == t || "y" == t) {
            var a = e.style[i.CssManager.getDeviceKey("transform")].replace(/[\s\(\)matrix]/g, "").split(",");
            n = a.length < 6 ? 0 : +a["x" == t ? 4 : 5]
        } else {
            n = window.getComputedStyle(e, null).getPropertyValue(t).replace(/px/, ""), isNaN(n) || (n = parseInt(n, 10))
        }
        return n
    }, t.injectStylesheet = function(e, t) {
        if (!document.getElementById(e)) {
            var n = document.createElement("style");
            n.type = "text/css", n.id = e;
            var r = 2 === arguments.length ? t : "";
            if (arguments.length > 2)
                for (var i = 0; i < arguments.length - 1; i += 2) {
                    r += arguments[i + 1].replace(/\,\s+/g, ","), r += " { " + (arguments[i + 2] || "") + " }\n"
                }
            n.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(n)
        }
    }, t.addClass = function(e, t) {
        for (var n = r.get(e), i = 0; i < arguments.length - 1; i++) n.classList.add(arguments[i + 1])
    }, t.removeClass = function(e, t) {
        r.get(e).classList.remove(t)
    };
    var r = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e, t
        }(n(6)),
        i = n(5)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = n(0);
    t.default = function(e, t) {
        r.Styles.injectStylesheet("RED_uiElement", ".ui-elem", "position:absolute;"), t = t || "div";
        var n = document.createElement(t);
        return r.Styles.addClass(n, "ui-elem"), (e = e || {}).id && (n.id = e.id), r.Styles.setCss(n, e.css), e.target && r.Markup.get(e.target).appendChild(n), Object.defineProperty(n, "parent", {
            get: function() {
                return n.parentNode
            }
        }), n.toString = function() {
            return "[object UIDiv]"
        }, n
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.Device = void 0;
    var r, i = (r = n(49)) && r.__esModule ? r : {
        default: r
    };
    t.Device = i.default
}, function(e, t) {
    e.exports = adLoad
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        a = n(0),
        o = n(4);
    t.default = function(e) {
        var t;
        a.Styles.injectStylesheet("RED_uiTextfield", ".ui-textfield", "position:absolute; white-space:nowrap;", ".smooth-text", "-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;", ".ui-textfield .content", "position:relative; display:table-cell; cursor:default; pointer-events:none; line-height:100%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
        var n, r, s, l, u, c = 0,
            d = "",
            f = {
                top: 0,
                bottom: 0,
                left: 0,
                right: 0
            },
            p = "",
            g = !0,
            h = {};
        e = e || {};
        var v = new i.default(e);
        a.Styles.addClass(v, "ui-textfield");
        var m = document.createElement("span");

        function _() {
            if (!g) switch (d) {
                case "paragraphClamp":
                case "inlineClamp":
                    y();
                    break;
                case "inlineFitClamp":
                    d = "inlineFit", b(), d = "inlineClamp", y(), d = "inlineFitClamp";
                    break;
                case "paragraphFitClamp":
                    d = "paragraphFit", b(), d = "paragraphClamp", y(), d = "paragraphFitClamp";
                default:
                    b()
            }
        }

        function b() {
            if (a.Styles.setCss(m, {
                    verticalAlign: "auto",
                    height: "auto",
                    width: "auto"
                }), "paragraphFit" == d) {
                for (var e = c; v.scrollHeight > v.offsetHeight && !(e <= 0);) e--, v.style.fontSize = e + "px";
                for (; v.scrollWidth > v.offsetWidth && !(e <= 0);) e--, v.style.fontSize = e + "px";
                c = e, v.style.fontSize = c + "px"
            } else if ("inlineFit" == d) {
                var t = v.offsetWidth,
                    n = v.offsetHeight;
                v.style.fontSize = "243px";
                var r = m.offsetWidth,
                    i = m.offsetHeight;
                v.style.fontSize = "182px";
                var s = m.offsetWidth,
                    u = m.offsetHeight,
                    p = o.MathUtils.rel(243, 182, r, s, t),
                    g = o.MathUtils.rel(243, 182, i, u, n);
                c = ~~Math.min(c, Math.min(p, g)), v.style.fontSize = c + "px"
            }
            l && a.Styles.setCss(m, {
                verticalAlign: l,
                height: v.offsetHeight - f.top - f.bottom,
                width: v.offsetWidth - f.left - f.right
            })
        }

        function y() {
            a.Styles.setCss(m, {
                height: "auto",
                width: "auto"
            }), v.width = m.offsetWidth, v.height = m.offsetHeight
        }
        return a.Styles.addClass(m, "content"), v.appendChild(m), Object.defineProperties(v, {
                alignText: {
                    get: function() {
                        return t
                    },
                    set: function(e) {
                        if (e && t != e) {
                            var n = ((t = e).match(/(left|right)/gi) || ["center"])[0].toLowerCase();
                            a.Styles.setCss(v, {
                                lineHeight: v.height,
                                textAlign: n
                            }), l = (t.match(/(bottom|top)/gi) || ["middle"])[0].toLowerCase(), a.Styles.setCss(m, {
                                verticalAlign: l
                            })
                        }
                    }
                },
                fontSize: {
                    get: function() {
                        return c
                    },
                    set: function(e) {
                        !isNaN(e) && e > 0 && (c = e, v.style.fontSize = ~~e + "px", _())
                    }
                },
                fontFamily: {
                    get: function() {
                        return n
                    },
                    set: function(e) {
                        n = e, v.style.fontFamily = e, _()
                    }
                },
                format: {
                    get: function() {
                        return d
                    },
                    set: function(e) {
                        d != e && (d = e, a.Styles.setCss(v, {
                            whiteSpace: null != /inline/g.exec(d) ? "nowrap" : "normal"
                        }), _())
                    }
                },
                leading: {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        e && r != e && (r = e, a.Styles.setCss(m, {
                            lineHeight: 100 * r + "%"
                        }), _())
                    }
                },
                spacing: {
                    get: function() {
                        return a.Styles.getCss(v, "letter-spacing") || s
                    },
                    set: function(e) {
                        e && s != e && (s = e, a.Styles.setCss(v, {
                            letterSpacing: e
                        }), _())
                    }
                },
                bufferText: {
                    get: function() {
                        return f
                    },
                    set: function(e) {
                        if (e && f != e) {
                            for (var t = "", n = ["top", "right", "bottom", "left"], r = 0; r < 4; r++) {
                                var i = n[r],
                                    o = isNaN(e) ? e[i] || 0 : e;
                                f[i] = o, t += o + "px "
                            }
                            a.Styles.setCss(m, {
                                padding: t
                            }), _()
                        }
                    }
                },
                text: {
                    get: function() {
                        return p
                    },
                    set: function(e) {
                        void 0 != e && "" != e && (p = e, v.setDefault("text", e), m.innerHTML = e, _())
                    }
                },
                smoothing: {
                    get: function() {
                        return u
                    },
                    set: function(e) {
                        u = e, a.Styles[u ? "addClass" : "removeClass"](m, "smooth-text")
                    }
                }
            }), v.resetToDefault = function() {
                if (g = !0, arguments.length > 0)
                    for (var e = 0; e < arguments.length; e++) v[arguments[e]] = h[arguments[e]];
                else
                    for (var t in h) void 0 != v[t] && (v[t] = h[t]);
                g = !1, _()
            }, v.setDefault = function(e, t) {
                h[e] = t
            }, v.toString = function() {
                return "[object UITextfield]"
            }, v.enabled = !0,
            function() {
                for (var t in e)
                    if ("css" == t)
                        for (var n in e.css) switch (n) {
                                case "x":
                                case "y":
                                case "width":
                                case "height":
                                    h[n] = e.css[n]
                            } else if ("bufferText" == t)
                                for (var r in h[t] = {}, f) h[t][r] = e[t][r] || 0;
                            else h[t] = e[t];
                delete h.target, delete h.id
            }(), v.format = e.format, v.fontSize = e.fontSize, v.fontFamily = e.fontFamily || "Arial", v.alignText = e.alignText, v.bufferText = e.bufferText, v.leading = e.leading, v.spacing = e.spacing, v.smoothing = 0 != e.smoothing, g = !1, v.text = e.text, v._initAlign(), v
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        a = n(0),
        o = n(2);
    t.default = function(e) {
        for (var t = new i.default(e), n = e.children.slice(); n.length > 0;) {
            var r = n.shift();
            r && t.appendChild(r)
        }
        return a.Clamp.set(t, a.Clamp.XY), e.align && a.Align.set(t, e.align), o.Gesture.disable(t), t
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        a = n(5),
        o = n(0),
        s = n(2);
    t.default = function(e) {
        o.Styles.injectStylesheet("RED_uiImage", ".ui-image", "background-repeat:no-repeat; background-size:contain;");
        var t = !0,
            n = null,
            r = !1,
            l = "contain",
            u = !!e.aspectRatio;
        if (e.css, !e.source) throw new Error("UIImage : No image source set on '" + e.id + "'");
        e.css = e.css || {};
        var c = new i.default(e);

        function d(i) {
            var a, o, s = r ? 2 : 1,
                l = n.width / n.height,
                d = e.css.width || n.width,
                f = e.css.height || n.height,
                p = void 0 == e.css.width,
                g = void 0 == e.css.height;
            t || (p = "height" == i, g = "width" == i, d = c.width, f = c.height), p && (a = u && !g ? f * l : d / s, c.style.width = Math.round(a) + "px"), g && (o = u && !p ? d / l : f / s, c.style.height = Math.round(o) + "px")
        }
        return o.Styles.addClass(c, "ui-image"), Object.defineProperties(c, {
            source: {
                get: function() {
                    return n
                },
                set: function(e) {
                    n = a.ImageManager.get(e), c.style.backgroundImage = "url(" + n.src + ")"
                }
            },
            retina: {
                get: function() {
                    return r
                },
                set: function(e) {
                    r = e, d()
                }
            },
            ratio: {
                get: function() {
                    return l
                },
                set: function(e) {
                    l = e, c.style.backgroundSize = e
                }
            },
            aspectRatio: {
                get: function() {
                    return u
                },
                set: function(e) {
                    u = e, d()
                }
            }
        }), c.toString = function() {
            return "[object UIImage]"
        }, c.addEventListener(s.UIEvent.RESIZE, function(e) {
            d(e.direction)
        }), c.source = e.source, c.retina = !!e.retina, e.ratio && (c.ratio = e.ratio), c._initAlign(), t = !1, c
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.CHARACTERS = t.WORDS = t.LINES = void 0, t.LINES = "lines", t.WORDS = "words", t.CHARACTERS = "characters"
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.PARAGRAPH_FIT_CLAMP = t.PARAGRAPH_FIT = t.PARAGRAPH_CLAMP = t.PARAGRAPH = t.INLINE_FIT_CLAMP = t.INLINE_FIT = t.INLINE_CLAMP = t.INLINE = void 0, t.INLINE = "inline", t.INLINE_CLAMP = "inlineClamp", t.INLINE_FIT = "inlineFit", t.INLINE_FIT_CLAMP = "inlineFitClamp", t.PARAGRAPH = "paragraph", t.PARAGRAPH_CLAMP = "paragraphClamp", t.PARAGRAPH_FIT = "paragraphFit", t.PARAGRAPH_FIT_CLAMP = "paragraphFitClamp"
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.TextSplitType = t.TextFormat = t.UITextField = t.UISvg = t.UISplitText = t.UISlider = t.UIImage = t.UIGroup = t.UIFlex = t.UIDiv = t.UIComponent = t.UICanvas = t.UIButton = t.UIBorder = void 0;
    var r = _(n(15));
    t.TextFormat = r;
    var i = _(n(14));
    t.TextSplitType = i;
    var a = m(n(30));
    t.UIBorder = a.default;
    var o = m(n(29));
    t.UIButton = o.default;
    var s = m(n(28));
    t.UICanvas = s.default;
    var l = m(n(1));
    t.UIComponent = l.default;
    var u = m(n(8));
    t.UIDiv = u.default;
    var c = m(n(27));
    t.UIFlex = c.default;
    var d = m(n(12));
    t.UIGroup = d.default;
    var f = m(n(13));
    t.UIImage = f.default;
    var p = m(n(26));
    t.UISlider = p.default;
    var g = m(n(25));
    t.UISplitText = g.default;
    var h = m(n(24));
    t.UISvg = h.default;
    var v = m(n(11));

    function m(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }

    function _(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }
    t.UITextField = v.default
}, function(e, t, n) {
    "use strict";

    function r(e) {
        var t = this;
        t.pool = [], t.fps = e, t._frameTime = Math.floor(1e3 / t.fps), t._prevTime = 0, t._startTime = 0, t._nextTime = 0, t._maxLag = 400, t._shiftLag = 30, t._paused = !1, t._prevCallTime = Date.now(), t.diffTime = 0
    }
    t.__esModule = !0, t.default = void 0, r.prototype = {
        resume: function() {
            var e = this;
            e._isPaused && (e._startTime = Date.now(), e._prevCallTime = e._startTime, e._prevTime = e._startTime, e._nextTime = 0, e._isPaused = !1)
        },
        tick: function() {
            var e = this;
            if (!e._paused) {
                var t = !1,
                    n = Date.now(),
                    r = n - e._prevTime;
                r > e._maxLag && (e._startTime += r - e._shiftLag), e._prevTime = n;
                var i = e._prevTime - e._startTime - e._nextTime;
                i > 0 && (e._nextTime += i >= e._frameTime ? i : e._frameTime, t = !0, e.diffTime = n - e._prevCallTime, e._prevCallTime = n), t && e.dispatch()
            }
        },
        dispatch: function() {
            for (var e = 0; e < this.pool.length; e++) {
                var t = this.pool[e];
                t.handler.call(t.from, this)
            }
        }
    };
    var i = r;
    t.default = i
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.startPoint = function() {
        i || (i = !0, r = {})
    }, t.endPoint = function() {
        i = !1
    }, t.SWIPE = t.DRAG_STOP = t.DRAG_START = t.DRAG = t.CLICK = t.RELEASE = t.PRESS = t.MOVE = t.OUT = t.OVER = t.stopped = t.stop = t.Event = void 0;
    var r = {},
        i = !1;
    t.Event = function(e, t, n, r, i, a, o, s, l, u, c) {
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
            y: l || 0
        }, d.velocity = {
            x: u || 0,
            y: c || 0
        }, d.direction = {
            x: u > 0 ? "right" : u < 0 ? "left" : null,
            y: c > 0 ? "down" : c < 0 ? "up" : null
        }, d
    };
    t.stop = function(e) {
        e && (e.stopImmediatePropagation(), r[e.type] = !0)
    };
    t.stopped = function(e) {
        return void 0 != r[e]
    }, t.OVER = "mouseover", t.OUT = "mouseout", t.MOVE = "mousemove", t.PRESS = "onPress", t.RELEASE = "onRelease", t.CLICK = "onSelect", t.DRAG = "onDrag", t.DRAG_START = "onDragStart", t.DRAG_STOP = "onDragStop", t.SWIPE = "onSwipe"
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = n(9),
        i = n(0),
        a = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e, t
        }(n(18)),
        o = function() {
            function e(e) {
                var t = this;
                t.elem = e, t.hasActiveChildren = !0, t.debug = !1, t.eventList = [], t._isDragEnabled = !1, t._isDragging = !1, t._give = 2, t._oX = 0, t._oY = 0, t._p1X = 0, t._p1Y = 0, t._p2X = 0, t._p2Y = 0, t._sX = 0, t._sY = 0, t._vX = 0, t._vY = 0, t._cursor = "mouse", t._start = "down", t._end = "up", t.init()
            }
            var t = e.prototype;
            return t.init = function() {
                var e = this;
                e.debug, e._handleTouchStart = e._handleTouchStart.bind(e), e._handleDown = e._handleDown.bind(e), e._handleDrag = e._handleDrag.bind(e), e._handleUp = e._handleUp.bind(e), e._elemAdd = e.elem.addEventListener.bind(e.elem), e._elemRemove = e.elem.removeEventListener.bind(e.elem), e._reset()
            }, t.register = function(e, t) {
                var n = this;
                n.debug, n.eventList.push(e), n._checkDragEnabled(), n._elemAdd(e, t)
            }, t.unregister = function(e, t) {
                var n = this;
                n.debug;
                var r = n.eventList.indexOf(e);
                r >= 0 && n.eventList.splice(r, 1), n._checkDragEnabled(), n._elemRemove(e, t)
            }, t._reset = function() {
                var e = this;
                e._cursor = "mouse", e._start = "down", e._end = "up", e.elem.addEventListener("touchstart", e._handleTouchStart), "ios" != r.Device.os && e.elem.addEventListener("mousedown", e._handleDown)
            }, t._checkDragEnabled = function() {
                var e = this.eventList.join("").indexOf("onDrag");
                this._isDragEnabled = e > -1
            }, t._getEventScope = function(e) {
                return e.changedTouches ? e.changedTouches[0] : e
            }, t._add = function(e, t) {
                window.addEventListener(this._cursor + e, t)
            }, t._remove = function(e, t) {
                window.removeEventListener(this._cursor + e, t)
            }, t._handleDown = function(e) {
                var t = this;
                t.debug, a.startPoint(), t.elem.removeEventListener("touchstart", t._handleTouchStart), "ios" != r.Device.os && t.elem.removeEventListener("mousedown", t._handleDown), t._isDragging = !1, t._add(t._end, t._handleUp), t._add("move", t._handleDrag);
                var n = t._getEventScope(e),
                    o = n.pageX,
                    s = n.pageY,
                    l = t.elem.getBoundingClientRect(),
                    u = o - l.left,
                    c = s - l.top,
                    d = t.elem.x || i.Styles.getCss(t.elem, "x"),
                    f = t.elem.y || i.Styles.getCss(t.elem, "y"),
                    p = l.left - d,
                    g = l.top - f;
                t._oX = p + u, t._oY = g + c;
                var h = o - t._oX,
                    v = s - t._oY;
                t._sX = t._p1X = t._p2X = o, t._sY = t._p1Y = t._p2Y = s,
                    function(e) {
                        if (!a.stopped(e)) {
                            var n = new a.Event(e, o, s, u, c, h, v);
                            t.debug, t.elem.dispatchEvent(n)
                        }
                    }("onPress")
            }, t._handleUp = function(e, t) {
                var n = this;
                n.debug, n._remove(n._end, n._handleUp), n._remove("move", n._handleDrag);
                var r = n._getEventScope(e),
                    i = r.pageX,
                    o = r.pageY,
                    s = n.elem.getBoundingClientRect(),
                    l = i - s.left,
                    u = o - s.top,
                    c = i - n._oX,
                    d = o - n._oY;
                !0 !== t && v("onRelease");
                var f = s.top + window.pageYOffset,
                    p = f + s.height,
                    g = s.left + window.pageXOffset,
                    h = g + s.width;

                function v(e) {
                    if (!a.stopped(e)) {
                        var t = new a.Event(e, i, o, l, u, c, d, 0, 0, n._vX, n._vY);
                        n.debug, n.elem.dispatchEvent(t)
                    }
                }
                n._isDragging ? n._isDragEnabled && n._dragEndOrSwipe("onDragStop") : i > g && i < h && o > f && o < p && v("onSelect"), n._isDragging && n._dragEndOrSwipe("onSwipe"), n._reset(), e.preventDefault(), a.endPoint()
            }, t._handleTouchStart = function(e) {
                var t = this;
                t.debug, t._cursor = "touch", t._start = "start", t._end = "end", t._handleDown(e)
            }, t._handleDrag = function(e) {
                var t = this;
                t.debug;
                var n = t._getEventScope(e),
                    r = n.pageX,
                    i = n.pageY,
                    o = r - t._p1X,
                    s = r - t._p2X;
                t._vX = (s - o) / 2 + o;
                var l = i - t._p1Y,
                    u = i - t._p2Y;
                t._vY = (u - l) / 2 + l;
                var c = r - t._oX,
                    d = i - t._oY,
                    f = t.elem.getBoundingClientRect(),
                    p = r - f.left,
                    g = i - f.top;

                function h(e) {
                    if (!a.stopped(e)) {
                        var n = new a.Event(e, r, i, p, g, c, d, t._p1X - t._sX, t._p1Y - t._sY, t._vX, t._vY);
                        t.debug, t.elem.dispatchEvent(n)
                    }
                }
                t._isDragging ? t._isDragEnabled && h("onDrag") : (Math.abs(t._sX - r) > t._give || Math.abs(t._sY - i) > t._give) && (t._isDragging = !0, t._isDragEnabled && h("onDragStart")), t._p2X = t._p1X, t._p1X = r, t._p2Y = t._p1Y, t._p1Y = i
            }, t._dragEndOrSwipe = function(e) {
                var t = this;
                if (t.debug, !a.stopped(name)) {
                    var n = t.elem.getBoundingClientRect(),
                        r = new a.Event(e, t._p1X, t._p1Y, t._p1X - n.left, t._p1Y - n.top, t._p1X - t._oX, t._p1Y - t._oY, t._p2X - t._sX, t._p2Y - t._sY, t._vX, t._vY);
                    t.debug, t.elem.dispatchEvent(r)
                }
            }, e
        }();
    t.default = o
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.__esModule = !0, t.addToLoad = function(e, t) {
            var n = i.LoaderUtils.getFileName(e);
            g(n, !0) || (t && 1 == t.forCanvas ? o.push(e) : a.push(e));
            return n
        }, t.addLoader = function(e) {
            s.push(e)
        }, t.get = function(e) {
            if (u[e]) return u[e];
            throw new Error("ImageManager : No image named '" + e + "' has been loaded")
        }, t.available = g, t.load = h, t.addFbaImages = function(e) {
            e && v(e.getAllContentRaw())
        };
        var r, i = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e, t
            }(n(10)),
            a = [],
            o = [],
            s = [],
            l = [],
            u = {},
            c = !1,
            d = 0,
            f = function() {},
            p = function() {};

        function g(e, t) {
            return void 0 != u[e]
        }

        function h(t, n) {
            if (p = n || e.failAd, c) l.push(t);
            else {
                r = new i.default({
                    name: "imageManagerLoader",
                    onComplete: function(e) {
                        c = !1, v(e.getAllContentRaw())
                    },
                    onFail: function(e) {
                        c = !1, p.call()
                    }
                }), f = [].concat(t), l = [];
                var u = a.slice();
                a = [], r.add(new i.default(u, {
                    name: "dynamicImages-" + d++,
                    fileType: "jpg"
                }));
                var g = o.slice();
                o = [], r.add(new i.default(g, {
                    name: "dynamicCanvasImages-" + d++,
                    fileType: "jpg",
                    crossOrigin: "anonymous"
                }));
                var h = s.slice();
                s = [];
                for (var m = 0; m < h.length; m++) r.add(h[m]);
                c = !0, r.load()
            }
        }

        function v(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] instanceof Image || e[t] instanceof SVGElement) {
                    var n = e[t];
                    g(e[t].id) || (u[n.id] = n)
                }
            for (t = 0; t < f.length; t++) f[t].call();
            l.length > 0 && h(l)
        }
    }).call(this, n(3))
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = n(4),
        i = function() {
            function e(e, t) {
                this.x = e || 0, this.y = t || 0
            }
            var t = e.prototype;
            return t.add = function(e) {
                return this.x += e.x, this.y += e.y, this
            }, t.sub = function(e) {
                return this.x -= e.x, this.y -= e.y, this
            }, t.dist = function(e) {
                var t = this.x - e.x,
                    n = this.y - e.y;
                return Math.sqrt(t * t + n * n)
            }, t.mult = function(e) {
                return this.x *= e, this.y *= e, this
            }, t.div = function(e) {
                return this.x /= e, this.y /= e, this
            }, t.limit = function(e) {
                var t = this.length();
                return t > e && this.mult(e / t), this
            }, t.length = function() {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, t.normalize = function() {
                var e = 1 / this.length();
                return this.mult(e)
            }, t.clone = function() {
                return new e(this.x, this.y)
            }, e.degreeToVector = function(t) {
                var n = r.MathUtils.toRadians(t);
                return new e(Math.cos(n), Math.sin(n))
            }, e.random = function(t) {
                var n = t || .01;
                return e.degreeToVector(r.MathUtils.random(0, 360, n))
            }, e
        }();
    t.default = i
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = function() {
        var e = this;
        e.identity = new Float32Array([1, 0, 0, 0, 1, 0]), e.data = new Float32Array(e.identity)
    };
    r.prototype = {
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
                    l = o % 3;
                n.data[o] = i[s] * a[l] + i[s + 1] * a[l + 3]
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
    var i = r;
    t.default = i
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = n(9),
        i = n(48);

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = function() {};
    a(o, "debug_level1", !1), a(o, "debug_level2", !1), a(o, "filter", void 0), a(o, "debug_element", void 0), a(o, "debug_css_list", void 0), a(o, "init", function() {
        this.generateBrowserKeyDictionary()
    }), a(o, "setDebugLevel", function(e) {
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
    }), a(o, "setDebugFilter", function(e) {
        this.filter = e, this.debug_level1 = !0
    }), a(o, "ifDebug", function(e) {
        var t = this;
        return t.filter ? !(!t.passDebugFilter() || !t[e]) || void 0 : t[e]
    }), a(o, "passDebugFilter", function() {
        var e = this;
        if (e.debug_element && e.debug_element.id.indexOf(e.filter) > -1) return !0;
        if (e.debug_css_list)
            for (var t in e.debug_css_list) {
                if (t.indexOf(e.filter) > -1) return !0;
                if (String(e.debug_css_list[t]).indexOf(e.filter) > -1) return !0
            }
        return !1
    }), a(o, "generateBrowserKeyDictionary", function() {
        var e = this;
        e.deviceKeyDict = {};
        var t = document.createElement("div").style;
        for (var n in t) {
            var i = e.getPrefix(n),
                a = e.standardizeKey(n);
            switch (r.Device.browser) {
                case "safari":
                    "webkit" == i ? e.deviceKeyDict[a] = e.prependPrefix("webkit", a) : e.prependPrefix("webkit", a) in t || (e.deviceKeyDict[a] = a);
                    break;
                case "firefox":
                    var o = e.prependPrefix("Moz", a),
                        s = e.prependPrefix("Webkit", a);
                    a in t ? e.deviceKeyDict[a] = a : "moz" == i ? e.camelateKey("webkit-" + a) in t && (e.deviceKeyDict[a] = o) : "webkit" == i && (o in t || (e.deviceKeyDict[a] = s));
                    break;
                case "chrome":
                case "ie":
                default:
                    a in t ? e.deviceKeyDict[a] = a : i && (e.deviceKeyDict[a] = e.prependPrefix(i, a))
            }
        }
    }), a(o, "apply", function(e, t) {
        var n = this;
        n.debug_element = e, n.debug_css_list = t, n.ifDebug("debug_level1");
        var r = {};
        for (var i in t) i.match(/^transform\(/) ? r[i] = t[i] : (n.ifDebug("debug_level1"), e.style[n.getDeviceKey(i)] = t[i]);
        n.applyTransforms(e, r), n.ifDebug("debug_level1"), n.debug_element = null, n.debug_css_list = null
    }), a(o, "conformCssObject", function(e, t) {
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
    }), a(o, "conformCssString", function(e, t) {
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
                    for (var l in s) n.ifDebug("debug_level2"), r[s[l][0]] = s[l][1]
                }
        }
        return n.debug_element = null, r
    }), a(o, "conformCssKeyValue", function(e, t) {
        this.ifDebug("debug_level1");
        var n = {};
        return n[e] = t, this.conformCssObject(n)
    }), a(o, "applyTransforms", function(e, t) {
        var n = this;
        n.ifDebug("debug_level1");
        var r = new i.Matrix2D,
            a = e.style[n.getDeviceKey("transform")].match(/matrix[^\)]+\)/);
        if (a && (r.setFromCss(a[0]), n.ifDebug("debug_level2")), "transforms" in e) var o = e.transforms;
        else o = {
            tx: 0,
            ty: 0,
            rz: 0,
            sx: 1,
            sy: 1
        };
        var s = {};
        for (var l in t) s[l.match(/\(\s([^\s]+)/)[1]] = t[l];
        if (void 0 != s.tx && (r.data[2] = 0), void 0 != s.ty && (r.data[5] = 0), void 0 != s.rz) {
            var u = -o.rz;
            r.rotate(u * (Math.PI / 180)), r.rotate(s.rz * (Math.PI / 180)), o.rz = s.rz
        }
        void 0 != s.sx && (u = 1 / o.sx, r.scale(u, 1), r.scale(s.sx, 1), o.sx = s.sx), void 0 != s.sy && (u = 1 / o.sy, r.scale(1, u), r.scale(1, s.sy), o.sy = s.sy), void 0 != s.tx && (r.translate(s.tx, 0), o.tx = s.tx), void 0 != s.ty && (r.translate(0, s.ty), o.ty = s.ty), e.transforms = o, n.ifDebug("debug_level2"), e.style[n.getDeviceKey("transform")] = r.getCss()
    }), a(o, "conformKeyValue", function(e, t) {
        e = String(e).trim(), t = String(t).trim();
        var n = this.standardizeKey(e);
        return this.conformValue(n, t)
    }), a(o, "hasPrefix", function(e) {
        return e.search(this.matchPrefixRegex()) > -1
    }), a(o, "getPrefix", function(e) {
        var t = e.match(this.matchPrefixRegex());
        return t ? t[1].replace(/-/g, "").toLowerCase() : null
    }), a(o, "stripPrefix", function(e) {
        var t = e.replace(this.matchPrefixRegex(), "");
        return t.charAt(0).toLowerCase() + t.slice(1)
    }), a(o, "getDeviceKey", function(e) {
        return e in this.deviceKeyDict ? this.deviceKeyDict[e] : e
    }), a(o, "prependPrefix", function(e, t) {
        return e + t.replace(/^(.)/, function(e) {
            return e.charAt(0).toUpperCase()
        })
    }), a(o, "standardizeKey", function(e) {
        var t = this;
        return e = (e = t.stripPrefix(e)) in t.keyFormatExceptions() ? t.keyFormatExceptions()[e] : t.camelateKey(e), t.ifDebug("debug_level2"), e
    }), a(o, "camelateKey", function(e) {
        return e.replace(/-(.)/g, function(e) {
            return e.charAt(1).toUpperCase()
        })
    }), a(o, "keyFormatExceptions", function() {
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
    }), a(o, "conformValue", function(e, t) {
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
            for (var l = /([a-z0-9]+)\(([^\)]+)\)/gi; params = l.exec(t);) {
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
            for (var c = e.split(/\,/), d = 0; d < c.length; d++) i.push([c[d], n])
        }
        return i
    }), a(o, "matchNumberRegex", function() {
        return /^[+-]?[0-9]*\.?[0-9]+/
    }), a(o, "matchPrefixRegex", function() {
        return /^-*(moz-*|webkit-*|ms-*|o-)/i
    });
    var s = o;
    t.default = s
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        a = n(0);
    t.default = function(e) {
        e.css = e.css || {};
        var t = null,
            n = e.css || {},
            r = 1,
            o = void 0 == n.width,
            s = void 0 == n.height;
        if (o && s && (n.width = n.height = "inherit"), !e.source) throw new Error("UISvg : No markup source set on '" + e.id + "'");
        var l = new i.default(e, "svg");
        return Object.defineProperties(l, {
            source: {
                get: function() {
                    return t
                },
                set: function(e) {
                    t = e, l.innerHTML = e;
                    var n = l.getElementsByTagName("svg")[0].getAttribute("viewBox").split(/\s/g);
                    r = +n[2] / +n[3]
                }
            },
            width: {
                get: function() {
                    return l.offsetWidth
                },
                set: function(e) {
                    var t = e / r;
                    a.Styles.setCss(l, {
                        width: e,
                        height: t
                    })
                }
            },
            height: {
                get: function() {
                    return l.offsetHeight
                },
                set: function(e) {
                    var t = e * r;
                    a.Styles.setCss(l, {
                        width: t,
                        height: e
                    })
                }
            }
        }), l.toString = function() {
            return "[object UISvg]"
        }, l.source = e.source, o && s || (o ? l.height = n.height : s && (l.width = n.width)), l._initAlign(), l
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = d(n(11)),
        i = d(n(1)),
        a = d(n(12)),
        o = c(n(15)),
        s = c(n(14)),
        l = n(0),
        u = n(4);

    function c(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }

    function d(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e) {
        var t;
        delete e.bufferText, e.text = t = e.text.replace(/<br>/gi, " <br>");
        var n = [],
            c = t.indexOf("<span");
        for (t.indexOf("</span>"); c >= 0;) {
            var d = t.substring(0, c);
            n.push(d), d = (t = t.replace(d, "")).substring(0, t.indexOf(">") + 1), n.push(d), c = (t = t.replace(d, "")).indexOf("<span")
        }
        n.push(t);
        for (var f = [], p = 0; p < n.length; p++) {
            var g = n[p].split("</span>");
            f.push(g[0]), g.length > 1 && (f.push("</span>"), f.push(g[1]))
        }
        e.format = e.format || o.INLINE_CLAMP;
        var h = new r.default(e);
        if (e.format.indexOf("Clamp") < 0 && (e.format += "Clamp"), !e.text || !e.text.length) return h.lines = [], h.words = [], h.characters = [], h;
        for (var v = [], m = 0; m < f.length; m++)
            for (var _ = f[m].indexOf("span") >= 0 ? [f[m]] : f[m].split(" "), b = 0; b < _.length; b++) _[b] && v.push(_[b]);
        var y, w = new i.default({
            target: e.target,
            id: "_textContainer",
            css: u.ObjectUtils.defaults({
                x: h.x,
                y: h.y,
                width: h.width,
                height: h.height,
                opacity: 1,
                backgroundColor: e.debug ? "purple" : e.css.backgroundColor || null
            }, e.css, !0)
        });
        w.appendChild(h);
        var x = 0,
            C = 0,
            S = {
                line1: {
                    width: 0,
                    children: []
                }
            },
            E = 1;
        e.text = "|";
        var M = new r.default(e);
        e.text = "| |";
        var O = new r.default(e),
            P = (O.width - 2 * M.width) * (e.splitWordSpacing || 1);
        M.parent.removeChild(M), M = null, O.parent.removeChild(O), O = null, delete e.css.overflow;
        var T, A, I, D, F, k = {
            target: w,
            css: u.ObjectUtils.clone(e.css),
            format: o.INLINE_CLAMP,
            fontSize: h.fontSize,
            fontFamily: h.fontFamily,
            alignText: h.alignText,
            leading: h.leading,
            spacing: h.spacing,
            smoothing: h.smoothing
        };
        e.debug && k.css.color && l.Styles.setCss(h, {
            color: u.ColorUtils.invert({
                color: k.css.color
            })
        });
        for (var R = 0; R < v.length; R++) {
            var j = v[R],
                L = j.indexOf("<br>") >= 0;
            if ("<br>" === j && (A = !0), (j = j.replace(/<br>/gi, "")).indexOf("<span") >= 0) T = j;
            else if (j.indexOf("span>") >= 0) T = null;
            else if (j) {
                A && (L = !0), A = !1;
                var U = u.ObjectUtils.clone(k);
                U.css.x = x, U.css.y = C, U.text = j, U.id = j, T && (U.text = T + j + "</span>");
                var N = new r.default(U);
                N.copy = j, N.span = T, L || h.format.indexOf("paragraph") >= 0 && N.width + N.x > h.width ? (S["line" + ++E] = {
                    width: 0,
                    children: []
                }, N.x = x = 0, C += N.height, N.y = C, S["line" + E].width = 0) : y && l.Align.set(N, {
                    y: {
                        type: l.Align.CENTER,
                        against: y
                    }
                }), x += N.width + P, S["line" + E].width = N.x + N.width, S["line" + E].children.push(N), y = N
            }
        }
        for (var X in w.words = [], w.lines = [], S) {
            I = S[X];
            for (var V = 0; V < I.children.length; V++) {
                var G = I.children[V];
                w.words.push(G), h.alignText !== l.Align.LEFT && (D = h.width - I.width, h.alignText === l.Align.CENTER && (D /= 2), G.x += D)
            }
            var Y = new a.default({
                children: I.children,
                target: w
            });
            F && (Y.y = F.y + F.height * (e.splitLeading || 1));
            var B = Y.childNodes[Y.childNodes.length - 1];
            B = B.text.substring(B.text.length - 1, B.text.length), e.allowSpaceOnBreaks && B.match(new RegExp(e.spaceBreakIncludes || "a-z0-9]", "gi")) && (Y.x -= P), w.lines.push(Y), F = Y
        }
        if ((e.splitType || s.WORDS) === s.CHARACTERS) {
            w.characters = [];
            for (var z = 0; z < w.words.length; z++) {
                for (var H = w.words[z], K = H.copy; H.childNodes.length > 0;) H.removeChild(H.childNodes[0]);
                for (var W = 0, q = void 0, Z = H.width, $ = 0; $ < K.length; $++) k.css.x = W, k.css.y = 0, k.target = H, k.text = H.span ? H.span + K[$] + "</span>" : K[$], k.id = K + "_" + K[$], W += (q = new r.default(k)).width, w.characters.push(q);
                if (l.Clamp.set(H, l.Clamp.XY), l.Styles.setCss(H, {
                        overflow: "inherit",
                        backgroundColor: null
                    }), Z < H.width && H.childNodes.length) {
                    var J = (H.width - Z) / (H.childNodes.length - 1);
                    for ($ = 1; $ < H.childNodes.length; $++)(q = H.childNodes[$]).x -= Math.abs(J * $)
                }
            }
            if (e.allowSpaceOnBreaks)
                for (var Q = 0; Q < w.lines.length; Q++) l.Clamp.set(w.lines[Q], l.Clamp.XY)
        }
        return e.debug ? h.x = h.y = 0 : (w.removeChild(h), h = null), l.Clamp.set(w, l.Clamp.XY), w
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(1)) && r.__esModule ? r : {
            default: r
        },
        a = n(0),
        o = n(4),
        s = n(2);
    t.default = function(e) {
        a.Styles.injectStylesheet("RED_uiSlider", ".ui-slider", "position:absolute; width:100%; height:100%;", ".ui-slider-bg, .ui-slider-track, .ui-slider-loaded, .ui-slider-handle, .ui-slider-hitState", "position:absolute; width:100%; height:inherit;", ".ui-slider-bg", "background-color: #666666;", ".ui-slider-loaded", "background-color: #560000; width:0%;", ".ui-slider-track", "background-color: #cc0000; width:0%;", ".ui-slider-handle", "background-color: #ffffff; width:5%; left:0%;");
        var t = 0,
            n = !1,
            r = 0;
        e = e || {};
        var l = new i.default(e);
        a.Styles.addClass(l, "ui-slider");
        var u, c = ["bg", "loaded", "track", "handle", "hitState"];
        l.elements = [];
        for (var d = 0; d < c.length; d++) l[u = c[d]] = document.createElement("div"), a.Styles.addClass(l[u], "ui-slider-" + u), l[u].id = e.id + "-" + u, e[u] && a.Styles.setCss(l[u], e[u]), 0 == e[u] && (l[u].style.display = "none"), l.appendChild(l[u]), l.elements.push(l[u]);

        function f(e) {
            l.percent = e / l.offsetWidth
        }

        function p() {
            l.dispatchEvent(s.UIEvent.sliderUpdate), l.onUpdate.call(l, s.UIEvent.sliderUpdate), l._onUpdate.call(l, s.UIEvent.sliderUpdate)
        }

        function g(e) {
            n = !0, r = e.mouse.global.x - e.mouse.local.x, f(e.mouse.local.x), p()
        }

        function h(e) {
            n = !1
        }

        function v(e) {
            var t = e.mouse.local.x;
            e.mouse.global.x <= r && (t = 0), f(t), p()
        }

        function m(e) {
            s.GestureEvent.stop(e)
        }
        return Object.defineProperties(l, {
            percent: {
                get: function() {
                    return t
                },
                set: function(e) {
                    var n;
                    t = o.MathUtils.restrict(e, 0, 1), l.track.style.width = 100 * t + "%", l.handle.style.left = (n = l.handle.offsetWidth / l.offsetWidth / 2, 100 * (o.MathUtils.restrict(t, n, 1 - n) - n) + "%")
                }
            },
            dragging: {
                get: function() {
                    return n
                }
            }
        }), l.onUpdate = e.onUpdate || function(e) {}, l.toString = function() {
            return "[object UISlider]"
        }, l._onUpdate = function(e) {}, l.addEventListener(s.UIEvent.ENABLED, function(e) {
            var t = l.enabled ? "addEventListener" : "removeEventListener";
            s.Gesture[t](l.hitState, s.GestureEvent.PRESS, g), s.Gesture[t](l.hitState, s.GestureEvent.RELEASE, h), s.Gesture[t](l.hitState, s.GestureEvent.DRAG, v), s.Gesture[t](l.hitState, s.GestureEvent.CLICK, m)
        }), l.enabled = !0, l
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = n(16),
        i = n(0);

    function a(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }
    var o = function(e) {
        var t, n;

        function r(t) {
            var n, r = a(a(n = e.call(this, t) || this));
            i.Styles.injectStylesheet("RED_flex", ".flex-container", "display: flex; flex-wrap: nowrap; justify-content: space-around;", ".flex-container > div", "position: relative;"), i.Styles.addClass(r, "flex-container"), Object.defineProperties(r, {
                flexDirection: {
                    set: function(e) {
                        i.Styles.setCss(r, {
                            "flex-direction": e
                        })
                    }
                },
                justifyContent: {
                    set: function(e) {
                        i.Styles.setCss(r, {
                            "justify-content": e
                        })
                    }
                },
                flexWrap: {
                    set: function(e) {
                        i.Styles.setCss(r, {
                            "flex-wrap": e
                        })
                    }
                },
                alignItems: {
                    set: function(e) {
                        i.Styles.setCss(r, {
                            "align-items": e
                        })
                    }
                }
            });
            for (var o = ["flexDirection", "flexWrap", "justifyContent", "alignItems"], s = 0; s < o.length; s++) {
                var l = o[s];
                t[l] && (r[l] = t[l])
            }
            return r || a(n)
        }
        return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r
    }(r.UIComponent);
    t.default = o
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(1)) && r.__esModule ? r : {
        default: r
    };
    t.default = function(e) {
        var t = (e = e || {}).css.width,
            n = e.css.height;
        delete e.css.width, delete e.css.height;
        var r = new i.default(e, "canvas");
        r.setAttribute("width", t), r.setAttribute("height", n);
        var a = r.getContext("2d"),
            o = r.getContext("webgl");
        return Object.defineProperties(r, {
            context2d: {
                get: function() {
                    return a
                }
            },
            context3d: {
                get: function() {
                    return o
                }
            }
        }), r.toString = function() {
            return "[object UICanvas]"
        }, r._initAlign(!0), r
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = s(n(1)),
        i = s(n(13)),
        a = n(0),
        o = n(2);

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.default = function(e) {
        (e = e || {}).css = e.css || {}, a.Styles.injectStylesheet("RED_uiButton", ".ui-button", "position:absolute", ".ui-button-state", "position: absolute; width:inherit; height:inherit;");
        var t, n = 0,
            s = [],
            l = !!e.containChild,
            u = new r.default(e);
        a.Styles.addClass(u, "ui-button"), e.bg && d(e.bg, !1), f(), e.icon = e.icon || [];
        for (var c = 0; c < e.icon.length; c++) d(e.icon[c], !0);

        function d(n, r) {
            var c, d = e.id + (r ? "-state-" + s.length : "-bg");
            "string" == typeof n ? c = new i.default({
                target: u,
                id: d,
                source: n,
                css: l ? {
                    width: "inherit",
                    height: "inherit"
                } : {}
            }) : ((c = n).id = d, u.addChild(c), /(UITextField)/gi.exec(c.toString()) && c.resetToDefault(), c._initAlign(!0)), r ? (s.push(c), a.Styles.addClass(c, "ui-button-state")) : t = c, o.Gesture.disable(c)
        }

        function f() {
            a.Clamp.set(u, "clamp" + (e.css.width ? "" : "X") + (e.css.height ? "" : "Y"), {}, !1)
        }

        function p(e) {
            o.GestureEvent.stop(e), u.togglable && (u.state = Number(!n)), u._onClick.call(u, e), u.onClick.call(u, e)
        }

        function g(e) {
            u._onOver.call(u, e), u.onOver.call(u, e)
        }

        function h(e) {
            u._onOut.call(u, e), u.onOut.call(u, e)
        }
        return f(), u.togglable = e.icon.length > 1, Object.defineProperties(u, {
            bg: {
                get: function() {
                    return t
                }
            },
            icon: {
                get: function() {
                    return s
                }
            },
            state: {
                get: function() {
                    return n
                },
                set: function(e) {
                    n = e, e >= s.length && (n = 0);
                    for (var t = 0; t < s.length; t++) s[t].style.visibility = t == n ? "visible" : "hidden"
                }
            }
        }), u.onClick = e.onClick || function(e) {}, u.onOver = e.onOver || function(e) {}, u.onOut = e.onOut || function(e) {}, u.toString = function() {
            return "[object UIButton]"
        }, u._onClick = function(e) {}, u._onOver = function(e) {}, u._onOut = function(e) {}, u.addEventListener(o.UIEvent.ENABLED, function(e) {
            var t = u.enabled ? "addEventListener" : "removeEventListener";
            o.Gesture[t](u, o.GestureEvent.CLICK, p), o.Gesture[t](u, o.GestureEvent.OVER, g), o.Gesture[t](u, o.GestureEvent.OUT, h)
        }), u.enabled = !0, u.state = e.state || 0, u._initAlign(), u
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(8)) && r.__esModule ? r : {
            default: r
        },
        a = n(0),
        o = n(2);
    t.default = function(e) {
        var t, n, r = new i.default(e);
        return a.Styles.addClass(r, "ui-border"), Object.defineProperties(r, {
            size: {
                get: function() {
                    return t
                },
                set: function(e) {
                    void 0 != e && t != e && (t = e, a.Styles.setCss(r, {
                        borderWidth: t
                    }))
                }
            },
            color: {
                get: function() {
                    return n
                },
                set: function(e) {
                    e && n != e && (n = e, a.Styles.setCss(r, {
                        borderColor: n
                    }))
                }
            }
        }), r.toString = function() {
            return "[object UIBorder]"
        }, o.Gesture.disable(r), r.color = e.color, r.size = e.size, r
    }
}, function(e, t) {
    e.exports = "template_image"
}, function(e, t) {
    e.exports = "template_font"
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0, n(5), n(32);
    t.default = function() {
        this.fonts = {
            primary: "template_font"
        }, this.colors = {}, this.svg = {}
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.__esModule = !0, t.Common = void 0;
        var r, i = (r = n(33)) && r.__esModule ? r : {
                default: r
            },
            a = function() {
                function t() {}
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
                    e.adData = new i.default
                }, t.loadDynamicJS = function(e) {
                    return new Promise(function(e, t) {
                        e()
                    })
                }, t
            }();
        t.Common = a
    }).call(this, n(3))
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.get = l, t.set = function(e, t) {
        var n = l(e, t);
        if (c(e)) {
            var a = e.canvas || r.get(e);
            i.setCss(a, n)
        } else
            for (var o in n) e[o] = n[o];
        return n
    }, t.calculate = u, t.TOP_RIGHT = t.TOP_LEFT = t.BOTTOM_RIGHT = t.BOTTOM_LEFT = t.TOP = t.RIGHT = t.LEFT = t.CENTER = t.BOTTOM = void 0;
    var r = a(n(6)),
        i = a(n(7));

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }
    var o = [{
        x: "offsetWidth",
        y: "offsetHeight",
        parent: "parentNode"
    }, {
        x: "width",
        y: "height",
        parent: "stage"
    }];
    t.BOTTOM = "alignBottom";
    var s = "alignCenter";

    function l(e, t) {
        var n = e.canvas || r.get(e),
            a = {},
            l = !1 !== t.snap,
            d = c(e) ? 0 : 1;
        for (var f in "string" == typeof t && (t = u(t)), t)
            if ("x" == f || "y" == f) {
                var p, g, h = t[f];
                if (!h) continue;
                "string" == typeof h && (h = {
                    type: h
                });
                var v = 0,
                    m = !1,
                    _ = h.offset || 0;
                if (void 0 !== h.against) {
                    var b = 0;
                    c(p = h.against) ? p.canvas ? b = 1 : v = i.getCss(p, f) : "number" == typeof p ? (m = !0, v = p) : (v = p[f], b = 1), g = o[b][f], h.type === s && (t[f].outer = !1)
                } else p = n[o[d].parent], g = o[d][f];
                var y = n[o[d][f]];
                switch (e._type) {
                    case "arc":
                    case "path":
                        switch (h.type) {
                            case s:
                                y = 0;
                                break;
                            default:
                                _ += y / 2
                        }
                        break;
                    case "text":
                        if ("x" === f) switch (e.alignText) {
                            case "center":
                                y = 0;
                            case "right":
                                y *= -1
                        }
                }
                var w = u(h.type, y, m ? 0 : p[g], !m && !!t[f].outer);
                null != w && (w += v + _, a[f] = l ? Math.round(w) : w)
            }
        return a
    }

    function u(e, t, n, r) {
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

    function c(e) {
        return e instanceof HTMLElement || void 0 != e.canvas
    }
    t.CENTER = s, t.LEFT = "alignLeft", t.RIGHT = "alignRight", t.TOP = "alignTop", t.BOTTOM_LEFT = "alignBottomLeft", t.BOTTOM_RIGHT = "alignBottomRight", t.TOP_LEFT = "alignTopLeft", t.TOP_RIGHT = "alignTopRight"
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.set = function(e, t, n, a) {
        var s = i.get(e);
        a = !1 !== a;
        var l = s.childNodes,
            u = [],
            c = {};
        /(x)/gi.exec(t) && (c.x = {}), /(y)/gi.exec(t) && (c.y = {});
        for (var d = 0; d < l.length; d++) {
            var f = l[d];
            for (var p in u[d] = {}, c) {
                var g = r.getCss(f, p),
                    h = g + f[o[p][0]],
                    v = c[p];
                0 == d && (v.min = g, v.max = h), g < v.min && (v.min = g), v.max < h && (v.max = h), u[d][p] = g
            }
        }
        var m = {
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
        };
        if (n)
            for (var _ in m) m[_] = isNaN(n) ? n[_] || 0 : n;
        var b = {};
        for (var p in c) {
            var y = c[p];
            a && (b[p] = y.min + r.getCss(s, p) - m[o[p][2]]), b[o[p][1]] = y.max - y.min + m[o[p][2]] + m[o[p][3]]
        }
        for (r.setCss(s, b), d = 0; d < l.length; d++) {
            f = l[d], b = {};
            for (var p in c) b[p] = u[d][p] - c[p].min + m[o[p][2]];
            r.setCss(f, b)
        }
    }, t.XY = t.Y = t.X = void 0;
    var r = a(n(7)),
        i = a(n(6));

    function a(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }
    var o = {
        x: ["offsetWidth", "width", "left", "right"],
        y: ["offsetHeight", "height", "top", "bottom"]
    };
    t.X = "clampX", t.Y = "clampY", t.XY = "clampXY"
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.createGlobalNode = function(e, t) {
        if (!document.getElementById(e)) {
            var n = document.createElement("style");
            n.type = "text/css", n.id = e;
            var r = 2 === arguments.length ? t : "";
            if (arguments.length > 2)
                for (var i = 0; i < arguments.length - 1; i += 2) {
                    r += arguments[i + 1].replace(/\s*/g, ""), r += " { " + (arguments[i + 2] || "") + " }\n"
                }
            n.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(n)
        }
    }, t.addClass = function(e, t) {
        for (var n = r.Markup.getElement(e), i = 0; i < arguments.length - 1; i++) n.classList.add(arguments[i + 1])
    }, t.removeClass = function(e, t) {
        r.Markup.getElement(e).classList.remove(t)
    };
    var r = n(0)
}, function(e, t, n) {
    "use strict";
    for (var r = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent), i = ["webkit", "moz"], a = 0; !window.requestAnimationFrame && a < i.length; a++) window.requestAnimationFrame = window[i[a] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[i[a] + "CancelAnimationFrame"] || window[i[a] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame && window.cancelAnimationFrame && !r || (window.requestAnimationFrame = function(e) {
        return setTimeout(e, 17)
    }, window.cancelAnimationFrame = clearTimeout)
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(17)) && r.__esModule ? r : {
        default: r
    };

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    n(38);
    var o = function() {};
    a(o, "_isPaused", !0), a(o, "_isActive", !0), a(o, "_sets", {}), a(o, "_RAF", void 0), a(o, "register", function(e, t, n) {
        var r = o;
        n = n || 30, r._sets[n] || (r._sets[n] = new i.default(n));
        for (var a = r._sets[n].pool, s = 0; s < a.length; s++)
            if (a[s].from === e && a[s].handler === t) return;
        a.push({
            handler: t,
            from: e
        }), r._isActive && r.resume()
    }), a(o, "unregister", function(e, t, n) {
        var r = o;
        for (var i in r._sets)
            if (!n || i == n) {
                for (var a = r._sets[i].pool, s = 0; s < a.length; s++)
                    if (a[s].from === e && a[s].handler === t) {
                        a.splice(s, 1);
                        break
                    }
                0 == a.length && delete r._sets[i]
            }
        0 === Object.keys(r._sets).length && (r.pause(), r._isActive = !0)
    }), a(o, "pause", function() {
        var e = o;
        if (arguments.length > 0) {
            for (var t = 0; t < arguments.length; t++) {
                var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                e._sets[n] && (e._sets[n]._paused = !0, e._isPaused = !0)
            }
            for (var r in e._sets)
                if (!e._sets[r]._paused) {
                    e._isPaused = !1;
                    break
                }
        } else {
            for (var r in e._sets) e._sets[r]._paused = !0;
            e._isPaused = !0
        }
        e._isPaused && (e._isActive = !1, window.cancelAnimationFrame(e._RAF))
    }), a(o, "resume", function() {
        var e = o,
            t = !e._isPaused;
        if (arguments.length > 0)
            for (var n = 0; n < arguments.length; n++) {
                var r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                e._sets[r] && (e._sets[r]._paused = !1, e._isPaused = !1)
            } else {
                for (var i in e._sets) e._sets[i]._paused = !1;
                e._isPaused = !1
            }
        t || (e._isActive = !0, e._RAF = window.requestAnimationFrame(e.tick))
    }), a(o, "secondsAsFrames", function(e) {
        return 1 / e
    }), a(o, "tick", function() {
        var e = o;
        if (!e._isPaused) {
            for (var t in e._sets) e._sets[t].tick();
            window.requestAnimationFrame(e.tick)
        }
    });
    var s = o;
    t.default = s
}, function(e, t, n) {
    "use strict";
    var r, i;
    t.__esModule = !0, t.default = void 0;
    var a = {
        ENABLED: "uiComponentEnabled",
        RESIZE: "uiResize",
        SLIDER_UPDATE: "uiSliderUpdate",
        get componentEnabled() {
            return r || (r = new CustomEvent("uiComponentEnabled")), r
        },
        get sliderUpdate() {
            return i || (i = new CustomEvent("uiSliderUpdate")), i
        }
    };
    t.default = a
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(19)) && r.__esModule ? r : {
            default: r
        },
        a = n(0),
        o = new function() {
            var e = this,
                t = [],
                n = [],
                r = void 0 != document.createEventObject;

            function o(e) {
                for (var n = null, r = 0; r < t.length; r++)
                    if (t[r].elem === e) {
                        n = t[r];
                        break
                    }
                return n || (n = function(e) {
                    var n = new i.default(e);
                    return t.push(n), n
                }(e)), n
            }

            function s(t, n) {
                var r = o(t);
                if (r.hasActiveChildren != n) {
                    r.hasActiveChildren = n;
                    for (var i = r.elem.getElementsByTagName("*"), a = 0; a < i.length; a++) i[a].parentNode == t && (n ? e.enable(i[a]) : e.disable(i[a]))
                }
            }

            function l(e) {
                for (var t = [], r = function e(t, r, i, a) {
                        t.style.visibility = "hidden", a.push(t);
                        for (var o = document.elementFromPoint(r, i), s = 0; s < n.length; s++)
                            if (n[s].elem == o) return e(o, r, i, a);
                        return o
                    }(e.target, e.clientX, e.clientY, t), i = 0; i < t.length; i++) t[i].style.visibility = "visible";
                return t = [], e.stopImmediatePropagation(), r
            }

            function u(e) {
                var t = l(e),
                    n = document.createEvent("HTMLEvents");
                n.initEvent(e.type, !0, !1), t.dispatchEvent(n)
            }
            e._kills = {}, e.add = e.addEventListener = function(e, t, n) {
                o(e).register(t, n), a.Styles.setCss(e, "cursor", "pointer"), a.Styles.setCss(e, "pointer-events", "auto")
            }, e.remove = e.removeEventListener = function(e, t, n) {
                var r = o(e);
                r && (r.unregister(t, n), r.eventList.length <= 0 && a.Styles.setCss(e, "cursor", "auto"))
            }, e.disable = function(e) {
                var t = o(e);
                n.push(t), r ? (t.register(GestureEvent.CLICK, u), a.Styles.setCss(e, "cursor", "auto")) : a.Styles.setCss(e, "pointer-events", "none")
            }, e.disableChildren = function(e) {
                s(e, !1)
            }, e.enable = function(e) {
                for (var t = o(e), i = 0; i < n.length; i++)
                    if (t == n[i]) {
                        r ? t.unregister(GestureEvent.CLICK, u) : (a.Styles.setCss(e, "pointer-events", "auto"), a.Styles.setCss(e, "cursor", "pointer"));
                        break
                    }
            }, e.enableChildren = function(e) {
                s(e, !0)
            }
        };
    t.default = o
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.init = function(e) {
        (r = e || {}).expandTime = r.expandTime || .5, r.collapseTime = r.collapseTime || .5, r.extend && (s = r.extend).init(l), adParams.expandable.expanded ? (a = !1, u()) : c(!0)
    }, t.collapse = function(e) {
        i.GestureEvent.stop(e), s.collapse(e)
    }, t.expand = u, t.hasUserInteracted = function() {
        return o
    };
    var r, i = n(2),
        a = !0,
        o = !1,
        s = {
            init: function() {},
            collapse: function(e) {
                l.collapseStart()
            },
            expand: function(e) {
                l.expandStart()
            },
            collapseComplete: function() {
                l.collapseComplete()
            },
            expandComplete: function() {
                l.expandComplete()
            }
        },
        l = {
            expandStart: function(e) {
                var t;
                d("expandStart"), t = adParams.expandable, TweenLite.to(r.target, r.expandTime, {
                    x: t.expandedX,
                    y: t.expandedY,
                    width: adParams.adWidth,
                    height: adParams.adHeight,
                    onComplete: s.expandComplete
                })
            },
            expandComplete: function(e) {
                d("expandComplete"), o = a, a = !0
            },
            collapseStart: function(e) {
                c(), d("collapseStart"), o = !0
            },
            collapseComplete: function(e) {
                d("collapseComplete"), o = !0
            }
        };

    function u(e) {
        i.GestureEvent.stop(e), s.expand(e)
    }

    function c(e) {
        var t = e ? 0 : r.collapseTime,
            n = adParams.expandable;
        TweenLite.to(r.target, t, {
            x: n.collapsedX,
            y: n.collapsedY,
            width: n.collapsedWidth,
            height: n.collapsedHeight,
            onComplete: e ? void 0 : s.collapseComplete
        })
    }

    function d(e) {
        (r[e] || function() {}).call()
    }
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.__esModule = !0, t.init = function(e) {
            return new Promise(function(t, n) {
                i.Device.init(), a.default.init(), o.addFbaImages(e), Promise.all([]).then(function() {
                    t()
                }).catch(function(e) {
                    n(e)
                })
            })
        }, t.loadDynamic = function() {
            return new Promise(function(t, n) {
                o.load(t, e.failAd)
            })
        };
        var r, i = n(9),
            a = (r = n(23)) && r.__esModule ? r : {
                default: r
            },
            o = function(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e)
                        if (Object.prototype.hasOwnProperty.call(e, n)) {
                            var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                            r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                        }
                return t.default = e, t
            }(n(20))
    }).call(this, n(3))
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = {
        init: function(e) {
            Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, e.expandStart), Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, e.expandComplete), Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, e.collapseStart), Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, e.collapseComplete), adParams.expandable.expanded && Enabler.setStartExpanded(!0)
        },
        collapse: function(e) {
            Enabler.requestCollapse(), e && Enabler.reportManualClose()
        },
        expand: function(e) {
            Enabler.requestExpand()
        },
        collapseComplete: function() {
            Enabler.finishCollapse()
        },
        expandComplete: function() {
            Enabler.finishExpand()
        }
    };
    t.default = r
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(21)) && r.__esModule ? r : {
        default: r
    };

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var o = function() {};
    a(o, "rx", []), a(o, "ry", []), a(o, "MAX_VERTICES", 256), a(o, "MAX_VERTICES_MASK", 255), a(o, "get", function(e, t) {
        return new i.default(o._getVal("x", e), o._getVal("y", t))
    }), a(o, "_init", function() {
        for (var e = 0; e < o.MAX_VERTICES; ++e) e === o.MAX_VERTICES - 1 && (o.rx.push(o.rx[0]), o.ry.push(o.ry[0])), o.rx.push(Math.random() - .5), o.ry.push(Math.random() - .5)
    }), a(o, "_lerp", function(e, t, n) {
        return e * (1 - n) + t * n
    }), a(o, "_getVal", function(e, t) {
        0 == o.rx.length && o._init();
        var n = "x" === e ? o.rx : o.ry,
            r = (t %= o.MAX_VERTICES) - ~~t,
            i = r * r * (3 - 2 * r),
            a = ~~t & o.MAX_VERTICES_MASK,
            s = a + 1 & o.MAX_VERTICES_MASK;
        return o._lerp(n[a], n[s], i)
    });
    var s = o;
    t.default = s
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r, i = (r = n(22)) && r.__esModule ? r : {
            default: r
        },
        a = n(4);
    t.default = function(e) {
        var t = this;
        e = e || {}, t.rotation = e.rotation || 0, t.x = e.x || 0, t.y = e.y || 0, t.scaleX = e.scaleX || 1, t.scaleY = e.scaleY || 1, t.originX = e.originX || 0, t.originY = e.originY || 0, t.points = e.points || [], t.calculatedPoints = [];
        var n = new i.default;
        t.addPoint = function(e) {
            t.points.push(e)
        }, t.addPoints = function(e) {
            t.points = t.points.concate(e)
        }, t.update = function(e) {
            n.clear(), n.translate(t.x, t.y), n.scale(t.scaleX, t.scaleY), n.rotate(a.MathUtils.toRadians(t.rotation)), t.calculatedPoints = [];
            for (var r = 0; r < this.points.length; r++) {
                var i = (u = void 0, c = void 0, s = (o = t.points[r])[0] - t.originX, l = o[1] - t.originY, u = s * n.data[0] + l * n.data[3] + n.data[2], c = s * n.data[1] + l * n.data[4] + n.data[5], [u += t.originX, c += t.originY]);
                t.calculatedPoints.push(i)
            }
            var o, s, l, u, c;
            return e && e(t.calculatedPoints), t.calculatedPoints
        }
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = function() {
        var e = this;
        e.identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]), e.data = new Float32Array(e.identity)
    };
    r.prototype = {
        clear: function() {
            this.data.set(this.identity)
        },
        rotateX: function(e) {
            var t = this,
                n = Math.cos(e).toFixed(15),
                r = Math.sin(e).toFixed(15),
                i = new Float32Array(t.identity);
            return i[5] = n, i[6] = r, i[9] = -r, i[10] = n, t.multiply(i), t
        },
        rotateY: function(e) {
            var t = this,
                n = Math.cos(e).toFixed(15),
                r = Math.sin(e).toFixed(15),
                i = new Float32Array(t.identity);
            return i[0] = n, i[2] = -r, i[8] = r, i[10] = n, t.multiply(i), t
        },
        rotateZ: function(e) {
            var t = this,
                n = Math.cos(e).toFixed(15),
                r = Math.sin(e).toFixed(15),
                i = new Float32Array(t.identity);
            return i[0] = n, i[1] = r, i[4] = -r, i[5] = n, t.multiply(i), t
        },
        scale: function(e, t) {
            var n = this,
                r = new Float32Array(n.identity);
            return r[0] = e, r[5] = t, n.multiply(r), n
        },
        skew: function(e, t) {
            var n = this,
                r = new Float32Array(n.identity);
            return r[1] = Math.tan(t) || 0, r[4] = Math.tan(e) || 0, n.multiply(r), n
        },
        translate: function(e, t, n) {
            var r = new Float32Array(this.identity);
            return r[12] = e || 0, r[13] = t || 0, r[14] = n || 0, this.multiply(r), this
        },
        multiply: function(e) {
            var t = this,
                n = new Float32Array(t.data);
            t.data[0] = n[0] * e[0] + n[1] * e[4] + n[2] * e[8], t.data[1] = n[0] * e[1] + n[1] * e[5] + n[2] * e[9], t.data[2] = n[0] * e[2] + n[1] * e[6] + n[2] * e[10], t.data[3] = 0, t.data[4] = n[4] * e[0] + n[5] * e[4] + n[6] * e[8], t.data[5] = n[4] * e[1] + n[5] * e[5] + n[6] * e[9], t.data[6] = n[4] * e[2] + n[5] * e[6] + n[6] * e[10], t.data[7] = 0, t.data[8] = n[8] * e[0] + n[9] * e[4] + n[10] * e[8], t.data[9] = n[8] * e[1] + n[9] * e[5] + n[10] * e[9], t.data[10] = n[8] * e[2] + n[9] * e[6] + n[10] * e[10], t.data[11] = 0, t.data[12] = n[12] * e[0] + n[13] * e[4] + n[14] * e[8] + e[12], t.data[13] = n[12] * e[1] + n[13] * e[5] + n[14] * e[9] + e[13], t.data[14] = n[12] * e[2] + n[13] * e[6] + n[14] * e[10] + e[14], t.data[15] = 1
        },
        getCss: function() {
            var e = this;
            return "matrix3d(" + e.data[0] + "," + e.data[1] + "," + e.data[2] + ", 0," + e.data[4] + "," + e.data[5] + "," + e.data[6] + ", 0," + e.data[8] + "," + e.data[9] + "," + e.data[10] + ", 0," + e.data[12] + "," + e.data[13] + "," + e.data[14] + ", 1)"
        }
    }, r.cssToData = function(e) {
        return e.match(/\(([^\)]+)\)/)[1].replace(/\s/g, "").split(",").map(Number)
    };
    var i = r;
    t.default = i
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.Vector2D = t.SimpleNoise2D = t.ParentTransform = t.Matrix3D = t.Matrix2D = void 0;
    var r = l(n(22));
    t.Matrix2D = r.default;
    var i = l(n(47));
    t.Matrix3D = i.default;
    var a = l(n(46));
    t.ParentTransform = a.default;
    var o = l(n(45));
    t.SimpleNoise2D = o.default;
    var s = l(n(21));

    function l(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    t.Vector2D = s.default
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    t.__esModule = !0, t.default = void 0;
    var a = function() {
        function e() {}
        var t, n;
        return t = e, n = [{
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
        }], null && r(t.prototype, null), n && r(t, n), e
    }();
    i(a, "pixelRatio", window.devicePixelRatio || "unknown"), i(a, "init", function() {
        var e = this;
        e.agentString = navigator.userAgent, e._getType(), e._getBrandAndOS(), e._getBrowser(), "desktop" !== e.type && "windows" === e.os && e.osVersion <= 8 && "ie" === e.browser && e.browserVersion < 12 && (e.type = "desktop");
        Array(70).join("-");
        for (var t in e) e.hasOwnProperty(t) && "function" != typeof e[t] && e[t]
    }), i(a, "_getType", function() {
        var e = this,
            t = /(android|mobile)/gi.exec(e.agentString),
            n = /(tablet|touch)/gi.exec(e.agentString),
            r = /(ipad)/gi.exec(e.agentString);
        e.type = "desktop", t && (e.type = "mobile"), n && (e.type = "tablet"), r && (e.type = "tablet")
    }), i(a, "_getBrandAndOS", function() {
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
    }), i(a, "_getBrowser", function() {
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
    }), i(a, "_checkForSpecial", function(e, t, n) {
        for (var r, i = 0; i < t.length; i++)
            if (r = t[i].toLowerCase(), n.match(new RegExp(r, "i"))) {
                this[e] = r;
                break
            }
    });
    var o = a;
    t.default = o
}, function(e, t, n) {
    "use strict";
    (function(e) {
        t.__esModule = !0, t.addSpaces = function(e) {
            for (var t = "", n = 0; n < e; n++) t += "&nbsp;";
            return t
        }, t.getSpecialCharacter = function(t, r) {
            t = e.proxyStringToLowerCase.apply(t);
            for (var i = 0; i < n.length; i++) {
                if (e.proxyStringToLowerCase.apply(n[i].label) === t) return r ? n[i].upperCase : n[i].lowerCase
            }
            return !1
        }, t.trimStartAndEnd = function(e) {
            return e ? e.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : ""
        }, t.removeSpaces = function(e) {
            return e.split(" ").join("")
        }, t.pad = function(e, t) {
            var n = "";
            for (e < 0 && (n = "-"), e = e.toString().replace(/\-/, "", e); e.length < t;) e = "0" + e;
            return n + e
        };
        var n = [{
            label: "iexcl",
            upperCase: "&#161;",
            lowerCase: "&#161;"
        }, {
            label: "trademark",
            upperCase: "&#153;",
            lowerCase: "&#153;"
        }, {
            label: "copyright",
            upperCase: "&#169;",
            lowerCase: "&#169;"
        }, {
            label: "registered",
            upperCase: "&#174;",
            lowerCase: "&#174;"
        }, {
            label: "nTilde",
            upperCase: "&#209;",
            lowerCase: "&#241;"
        }, {
            label: "aAccent",
            upperCase: "&#193;",
            lowerCase: "&#225;"
        }, {
            label: "eAccent",
            upperCase: "&#201;",
            lowerCase: "&#233;"
        }, {
            label: "iAccent",
            upperCase: "&#205;",
            lowerCase: "&#237;"
        }, {
            label: "oAccent",
            upperCase: "&#211;",
            lowerCase: "&#243;"
        }, {
            label: "uAccent",
            upperCase: "&#218;",
            lowerCase: "&#250;"
        }]
    }).call(this, n(3))
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.clone = i, t.defaults = function e(t, n, r) {
        void 0 === t && (t = {});
        var a = i(t);
        for (var o in n) {
            var s = n[o];
            void 0 === a[o] ? a[o] = n[o] : r && "[object Object]" === Object.prototype.toString.call(s) && (a[o] = e(a[o], s, r))
        }
        return a
    }, t.objectifier = void 0;
    var r = {};

    function i(e) {
        if ("[object Object]" !== Object.prototype.toString.call(e)) return e;
        var t = e.constructor();
        for (var n in e) t[n] = i(e[n]);
        return t
    }
    t.objectifier = r, r.get = function(e, t) {
        void 0 === t && (t = window);
        var n = r._getSplits(e).splits;
        return r._getProperty(n, t)
    }, r.set = function(e, t, n) {
        void 0 === n && (n = window);
        var i = r._getSplits(e, !0);
        r._getProperty(i.splits, n)[i.lastKey] = t
    }, r._getSplits = function(e, t) {
        var n = e.split(".");
        return {
            splits: n,
            lastKey: t ? n.pop() : null
        }
    }, r._getProperty = function(e, t) {
        void 0 === t && (t = {});
        for (var n, r = t, i = 0; r && (n = e[i]); i++) r = n in r ? r[n] : void 0;
        return r
    }
}, function(e, t, n) {
    "use strict";
    var r;
    t.__esModule = !0, t.setData = function(e) {
        var t = e.getMonetData();
        return t.then(function(e) {
            r = e
        }), t
    }, t.getDataByKey = function(e) {
        var t, n;
        for (var a in i)
            if (r.rootAssets[a + "." + e]) {
                n = a, t = r.rootAssets[a + "." + e];
                break
            }
        return t[i[n]]
    };
    var i = {
        text: "text",
        number: "value",
        image: "url",
        video: "url",
        url: "url",
        bool: "value"
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t, n) {
        var r = Math.min(t, n);
        return e <= Math.max(t, n) && e >= r
    }
    t.__esModule = !0, t.toRadians = function(e) {
        return Math.PI / 180 * e
    }, t.toDegrees = function(e) {
        return 180 / Math.PI * e
    }, t.random = function(e, t, n) {
        t = t || 0, n = void 0 != n && n > 0 ? n : 1;
        var r = Math.min(e, t),
            i = Math.max(e, t);
        return r = Math.ceil(r / n) * n, i = Math.floor(i / n) * n, r + Math.floor(Math.random() * ((i - r + n) / n)) / (1 / n)
    }, t.randomBoolean = function(e) {
        return e = e || .5, Math.random() < e
    }, t.randomWeightedKey = function(e) {
        var t = [],
            n = [0];
        for (var i in e) t.push(i), n.push(e[i] + (n[n.length - 1] || 0));
        for (var a = 100 * Math.random().toFixed(2), o = 0; o < n.length - 1; o++) {
            if (r(a, n[o], n[o + 1])) return t[o]
        }
    }, t.rel = function(e, t, n, r, i) {
        return (i - n) / (r - n) * (t - e) + e
    }, t.inRange = r, t.isNumber = function(e) {
        return !isNaN(e)
    }, t.toNumber = function(e) {
        return +e
    }, t.restrict = function(e, t, n) {
        return Math.max(t, Math.min(n, e))
    }, t.getAnglePoint = function(e, t, n, r) {
        return [e = e + Math.cos(r) * n, t = t + Math.sin(r) * n]
    }, t.getAngle = function(e, t, n, r) {
        return n = n || 0, r = r || 0, Math.atan2(r - t, n - e)
    }, t.getDistance = function(e, t, n, r) {
        return n = n || 0, r = r || 0, Math.sqrt((r - t) * (r - t) + (n - e) * (n - e))
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.fitImageAtCoordinate = function(e, t, n) {
        var r = new Image;
        void 0 === t && void 0 === n ? e.style.backgroundPosition = "50% 50%" : r.onload = function() {
            var i = {
                    width: t || 0,
                    height: n || 0
                },
                a = {
                    width: e.offsetWidth,
                    height: e.offsetHeight
                },
                o = a.width / a.height,
                s = r.width / r.height;

            function l(t, n) {
                var o = a[t] * (r[n] / r[t]),
                    s = a[t] / r[t],
                    l = a[n] / 2 - i[n] * s,
                    u = a[n] - o;
                l > 0 ? l = 0 : l < u && (l = u), e.style.backgroundPosition = "height" === t ? l + "px 0px" : "0px " + l + "px"
            }
            o > s ? l("width", "height") : o < s && l("height", "width")
        }, r.src = e.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, "$2").split(",")[0], e.style.backgroundSize = "cover", e.style.backgroundRepeat = "no-repeat"
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.counterWithVars = function(e, t) {
        t ? Enabler.reportCustomVariableCount1(e) : Enabler.reportCustomVariableCount2(e)
    }, t.addVideoMetrics = function(e, t) {
        Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
            studio.video.Reporter.attach(t || "Video Report 1", void 0 != e.screen ? e.screen : e)
        })
    }, t.addYouTubeVideoMetrics = function(e) {
        var t = e.screen;
        t.addEventListener("play", function() {
            e.isReplay ? trackVideoReplay.call() : trackVideoPlay.call()
        }), t.addEventListener("pause", function() {
            e.complete || trackVideoPause.call()
        }), t.addEventListener("complete", function() {
            trackVideoComplete.call()
        })
    }
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        switch (typeof e) {
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

    function i(e, t) {
        return "rgba(" + (e = r(e, t)).r + "," + e.g + "," + e.b + "," + e.a + ")"
    }

    function a(e) {
        return e.from = e.from || e.color, e.from && "object" != typeof e.from && (e.from = r(e.from)), e.to && "object" != typeof e.to && (e.to = r(e.to)), e.amount = void 0 === e.amount ? 1 : e.amount, e
    }

    function o(e, t) {
        return (e = Math.floor(255 * (e + t))) < 0 && (e = 0), e
    }
    t.__esModule = !0, t.toRgba = r, t.toRgbaString = i, t.hue = function(e) {
        var t = function(e) {
            var t = e.r / 255,
                n = e.g / 255,
                r = e.b / 255,
                i = Math.max(t, n, r),
                a = Math.min(t, n, r),
                o = i - a,
                s = (i + a) / 2;
            return {
                h: 0 == o ? 0 : i == t ? (n - r) / o % 6 * 60 : i == n ? 60 * ((r - t) / o + 2) : 60 * ((t - n) / o + 4),
                s: o ? o / (1 - Math.abs(2 * s - 1)) : 0,
                l: s
            }
        }((e = a(e)).from);
        t.h = (t.h + e.amount) % 360, t.h < 0 && (t.h += 360);
        var n = function(e) {
            var t, n, r, i = e.h / 60,
                a = e.s,
                s = e.l,
                l = (1 - Math.abs(2 * s - 1)) * a,
                u = l * (1 - Math.abs(i % 2 - 1)),
                c = s - l / 2;
            switch (i = Math.floor(i)) {
                case 0:
                    t = l, n = u, r = 0;
                    break;
                case 1:
                    t = u, n = l, r = 0;
                    break;
                case 2:
                    t = 0, n = l, r = u;
                    break;
                case 3:
                    t = 0, n = u, r = l;
                    break;
                case 4:
                    t = u, n = 0, r = l;
                    break;
                case 5:
                    t = l, n = 0, r = u
            }
            return {
                r: o(t, c),
                g: o(n, c),
                b: o(r, c)
            }
        }(t);
        return e.from.a >= 0 && (n.a = e.from.a), "object" === e.format ? n : i(n)
    }, t.saturation = function(e) {
        delete e.to, e = a(e);
        var t = {};
        for (var n in e.from) {
            var r = parseInt(e.from[n]);
            if ("a" === n) t[n] = r;
            else {
                if ("r" === n) {
                    var o = 0,
                        s = 255;
                    for (var l in e.from) parseInt(e.from[l]) > o && (o = parseInt(e.from[l])), parseInt(e.from[l]) < s && (s = parseInt(e.from[l]))
                }
                t[n] = Math.round(r * e.amount + (1 - e.amount) * ((o + s) / 2))
            }
        }
        return "object" === e.format ? t : i(t)
    }, t.contrast = function(e) {
        delete e.to, e = a(e);
        var t = {};
        for (var n in e.from) {
            var r = parseInt(e.from[n]);
            t[n] = "a" === n ? r : Math.round(r * e.amount)
        }
        return "object" === e.format ? t : i(t)
    }, t.tint = function(e) {
        e = a(e);
        var t = {};
        for (var n in e.from) {
            var r = parseInt(e.from[n]);
            t[n] = "a" === n ? r : Math.round(r + (parseInt(e.to[n]) - r) * e.amount)
        }
        return "object" === e.format ? t : i(t)
    }, t.transform = function(e) {
        e = a(e);
        var t = {};
        for (var n in e.from) {
            var r = parseInt(e.from[n]);
            t[n] = "a" === n ? r : Math.round(r - (255 - parseInt(e.to[n])) * e.amount)
        }
        return "object" === e.format ? t : i(t)
    }, t.invert = function(e) {
        delete e.to, delete e.amount, e = a(e);
        var t = {};
        for (var n in e.from) {
            var r = parseInt(e.from[n]);
            t[n] = "a" === n ? r : 255 - r
        }
        return "object" === e.format ? t : i(t)
    }
}, function(e, t, n) {
    "use strict";

    function r(e) {
        return e.slice()
    }

    function i(e, t) {
        var n = r(e);
        return n.splice(t, 1), n
    }
    t.__esModule = !0, t.combine = function(e, t) {
        return e.concat(t)
    }, t.copy = r, t.insertAt = function(e, t) {
        var n = e.slice(0, t),
            r = e.slice(t, e.length),
            i = Array.prototype.slice.call(arguments),
            a = i.slice(2, i.length);
        return n.concat(a).concat(r)
    }, t.removeAt = i, t.remove = function(e, t) {
        for (var n = e.slice(); n.indexOf(t) >= 0;) n = i(n, n.indexOf(t));
        return n
    }, t.shuffle = function(e) {
        return e.sort(function() {
            return Math.random() < .5 ? 1 : -1
        })
    }, t.contains = function(e, t) {
        return e.indexOf(t) >= 0
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = function() {
        var e, t, n, r, i, a = 0,
            o = 0,
            s = 0,
            l = 0,
            u = !0,
            c = 1;

        function d(d) {
            switch (window.orientation) {
                case -90:
                    o = d.gamma, a = -d.beta;
                    break;
                case 90:
                    o = -d.gamma, a = d.beta;
                    break;
                case 180:
                    o = -d.beta, a = -d.gamma;
                    break;
                default:
                    o = d.beta, a = d.gamma
            }
            u && (s = a, l = o, u = !1), a -= s, o -= l, a *= c, o *= c, e && a < e && (a = e), t && a > t && (a = t), n && o < n && (o = n), r && o > r && (o = r), i(a, o)
        }
        return {
            ax: a,
            ay: o,
            callibrate: function() {
                u = !0
            },
            setSpeedLimits: function(i, a, o, s) {
                e = i, t = a, n = o, r = s
            },
            setSpeedMultiplier: function(e) {
                c = e <= 0 ? 1 : e
            },
            activate: function(e) {
                i = e, window.addEventListener("deviceorientation", d, !1)
            },
            deactivate: function() {
                window.removeEventListener("deviceorientation", d, !1)
            }
        }
    }();
    t.default = r
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = new function() {
            this.gpsSuccessCallback, this.gpsFailCallback, this.getGPSData = function(e, t) {
                navigator.geolocation && (r.gpsSuccessCallback = e, r.gpsFailCallback = t, navigator.geolocation.getCurrentPosition(r.onLocationRetrieved, r.onLocationFailed))
            }, this.onLocationRetrieved = function(e) {
                r.gpsSuccessCallback(e.coords)
            }, this.onLocationFailed = function(e) {
                e.code, r.gpsFailCallback && r.gpsFailCallback(e)
            }
        },
        i = r;
    t.default = i
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.blur = function(e) {
        e.amount >= 0 && i.setCss(e.target, {
            filter: "blur(" + e.amount + "px)"
        })
    }, t.dropShadow = a, t.textDropShadow = function(e) {
        i.setCss(e.target, {
            textShadow: o(e.angle || 0, e.distance || 0, e.size || 0, null, e.color || "#000000", e.alpha)
        })
    }, t.glow = function(e) {
        e.angle = 0, e.distance = 0, a(e)
    }, t.linearGradient = function(e) {
        i.setCss(e.target, {
            background: "linear-gradient(" + (e.angle || 0) + "deg, " + e.colors.toString() + ")"
        })
    }, t.radialGradient = function(e) {
        i.setCss(e.target, {
            background: "radial-gradient(" + e.colors.toString() + ")"
        })
    };
    var r = n(4),
        i = function(e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                        r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                    }
            return t.default = e, t
        }(n(7));

    function a(e) {
        i.setCss(e.target, {
            boxShadow: o(e.angle || 0, e.distance || 0, e.size || 0, e.spread || 0, e.color || "#000000", e.alpha, e.inner)
        })
    }

    function o(e, t, n, i, a, o, s) {
        var l = "",
            u = -1 * e + 180,
            c = r.MathUtils.toRadians(u);
        return l += (Math.cos(c) * t).toFixed(8) + "px ", l += (Math.sin(c) * t).toFixed(8) + "px ", l += n + "px", i && (l += " " + i + "px"), l += " " + r.ColorUtils.toRgbaString(a, o), (s = !!s) && (l += " inset"), l
    }
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.resize = function(e, t, n, o) {
        if (e = e || r, o || (o = {
                width: 0,
                height: 0
            }), e == r) o.width = t.width, o.height = t.height;
        else if (e == a) o.width = n.width, o.height = n.height;
        else {
            var s = t.width / t.height,
                l = n.width / n.height;
            (e == i ? s : l) < (e == i ? l : s) ? (o.height = t.height / (t.width / n.width), o.width = n.width) : (o.width = t.width / (t.height / n.height), o.height = n.height)
        }
        return o
    }, t.STRETCH = t.FIT = t.FILL = t.EXACT = void 0;
    var r = "auto";
    t.EXACT = r;
    var i = "cover";
    t.FILL = i, t.FIT = "contain";
    var a = "100% 100%";
    t.STRETCH = a
}, function(e, t, n) {
    "use strict";
    t.__esModule = !0, t.default = void 0;
    var r = new function() {
        var e = this;
        e.isFullScreen = function() {
            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
        }, e.enter = function(t) {
            e.isFullScreen() || (t.requestFullscreen ? t.requestFullscreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.webkitRequestFullscreen && t.webkitRequestFullscreen())
        }, e.exit = function() {
            e.isFullScreen() && (document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen())
        }
    };
    t.default = r
}, function(e, t, n) {
    "use strict";
    (function(e) {
        var t = n(0),
            r = n(5),
            i = n(2),
            a = n(34);
        n(31);
        var o = n(16);
        window.Control = new function() {
            this.prepare = function(e) {
                var t = this;
                r.Core.init(e).then(function() {
                    return a.Common.init()
                }).then(function() {
                    return r.Core.loadDynamic()
                }).then(function() {
                    t.prepareBuild()
                }).catch(function(e) {
                    throw e
                })
            }, this.prepareBuild = function() {
                Control.preMarkup(), View.main = new function() {
                    var e = t.Markup.get("main");
                    return t.Styles.setCss(e, {
                        position: "absolute",
                        width: adParams.adWidth,
                        height: adParams.adHeight,
                        opacity: 0,
                        left: "0px",
                        top: "0px",
                        overflow: "hidden",
                        userSelect: "none"
                    }), e.logoContainer = new o.UIImage({
                        id: "logo-container",
                        target: e,
                        source: "template_image",
                        css: {
                            x: 9,
                            y: 60
                        }
                    }), e.txtGreeting = new o.UITextField({
                        id: "txt-greeting",
                        target: e,
                        css: {
                            width: 200,
                            height: 30,
                            color: "#ff1414"
                        },
                        align: t.Align.CENTER,
                        fontSize: 40,
                        fontFamily: "template_font",
                        format: o.TextFormat.INLINE_FIT,
                        alignText: t.Align.CENTER,
                        bufferText: {
                            left: 5,
                            right: 5
                        },
                        leading: 1,
                        text: "MOBILE ADS"
                    }), t.Effects.textDropShadow({
                        target: e.txtGreeting,
                        angle: 45,
                        distance: 2,
                        size: 2,
                        color: "#000000",
                        alpha: .5
                    }), e.buttonCta = new o.UIButton({
                        id: "btn-cta",
                        target: e,
                        css: {
                            width: 150,
                            height: 40,
                            backgroundColor: "grey",
                            borderRadius: 10
                        },
                        align: {
                            x: t.Align.CENTER,
                            y: {
                                type: t.Align.BOTTOM,
                                offset: -30
                            }
                        },
                        icon: [new o.UITextField({
                            css: {
                                width: 150,
                                height: 40,
                                color: "#ffffff"
                            },
                            fontSize: 12,
                            fontFamily: "template_font",
                            format: o.TextFormat.INLINE_FIT,
                            alignText: t.Align.CENTER,
                            text: "CLICK FOR MORE"
                        })]
                    }), t.Styles.setCss(e, {
                        "background-color": "#cccccc"
                    }), e
                }, View.mainBorder = new function() {
                    new o.UIBorder({
                        target: View.main,
                        size: 1,
                        color: "#000000"
                    })
                }, Control.postMarkup(), Animation.startAd()
            }, this.preMarkup = function() {}, this.postMarkup = function() {
                i.Gesture.add(View.main, i.GestureEvent.CLICK, Control.handleClick)
            }, this.animationComplete = function() {}, this.handleClick = function(e) {
                Network.exit(clickTag)
            }
        }, window.Animation = new function() {
            this.startAd = function() {
                e.removePreloader(), t.Styles.setCss(View.main, {
                    opacity: 1
                }), TweenLite.from(View.main.logoContainer, 1, {
                    y: -40
                }), TweenLite.from(View.main.txtGreeting, 1, {
                    y: 330
                })
            }
        }
    }).call(this, n(3))
}]);