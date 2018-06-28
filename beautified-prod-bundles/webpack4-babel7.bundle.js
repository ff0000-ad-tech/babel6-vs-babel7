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
        var t, i = (t = n(0)) && t.__esModule ? t : {
            default: t
        };

        function r(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }

        function o(e) {
            return Math.PI / 180 * e
        }

        function s(e, t, n, i, r) {
            return (r - n) / (i - n) * (t - e) + e
        }

        function c(e, t) {
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

        function u(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var l = function() {
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
            }], null && a(t.prototype, null), n && a(t, n), e
        }();
        u(l, "pixelRatio", window.devicePixelRatio || "unknown"), u(l, "init", function() {
            var e = this;
            e.agentString = navigator.userAgent, e._getType(), e._getBrandAndOS(), e._getBrowser(), "desktop" !== e.type && "windows" === e.os && e.osVersion <= 8 && "ie" === e.browser && e.browserVersion < 12 && (e.type = "desktop");
            Array(70).join("-");
            for (var t in e) e.hasOwnProperty(t) && "function" != typeof e[t] && e[t]
        }), u(l, "_getType", function() {
            var e = this,
                t = /(android|mobile)/gi.exec(e.agentString),
                n = /(tablet|touch)/gi.exec(e.agentString),
                i = /(ipad)/gi.exec(e.agentString);
            e.type = "desktop", t && (e.type = "mobile"), n && (e.type = "tablet"), i && (e.type = "tablet")
        }), u(l, "_getBrandAndOS", function() {
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
        }), u(l, "_getBrowser", function() {
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
        }), u(l, "_checkForSpecial", function(e, t, n) {
            for (var i, r = 0; r < t.length; r++)
                if (i = t[r].toLowerCase(), n.match(new RegExp(i, "i"))) {
                    this[e] = i;
                    break
                }
        });
        var f = function() {
            var e = this;
            e.identity = new Float32Array([1, 0, 0, 0, 1, 0]), e.data = new Float32Array(e.identity)
        };
        f.prototype = {
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
                for (var n = this, i = new Float32Array(n.data), r = t ? e : i, a = t ? i : e, o = 0; o < 6; o++) {
                    var s = 3 * Math.floor(o / 3),
                        c = o % 3;
                    n.data[o] = r[s] * a[c] + r[s + 1] * a[c + 3]
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
        var d = function() {
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
                var n = o(t);
                return new e(Math.cos(n), Math.sin(n))
            }, e.random = function(t) {
                var n = t || .01;
                return e.degreeToVector(function(e, t, n) {
                    t = t || 0, n = void 0 != n && n > 0 ? n : 1;
                    var i = Math.min(0, t),
                        r = Math.max(0, t);
                    return i = Math.ceil(i / n) * n, r = Math.floor(r / n) * n, i + Math.floor(Math.random() * ((r - i + n) / n)) / (1 / n)
                }(0, 360, n))
            }, e
        }();

        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var h = function() {};

        function v(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        g(h, "rx", []), g(h, "ry", []), g(h, "MAX_VERTICES", 256), g(h, "MAX_VERTICES_MASK", 255), g(h, "get", function(e, t) {
            return new d(h._getVal("x", e), h._getVal("y", t))
        }), g(h, "_init", function() {
            for (var e = 0; e < h.MAX_VERTICES; ++e) e === h.MAX_VERTICES - 1 && (h.rx.push(h.rx[0]), h.ry.push(h.ry[0])), h.rx.push(Math.random() - .5), h.ry.push(Math.random() - .5)
        }), g(h, "_lerp", function(e, t, n) {
            return e * (1 - n) + t * n
        }), g(h, "_getVal", function(e, t) {
            0 == h.rx.length && h._init();
            var n = "x" === e ? h.rx : h.ry,
                i = (t %= h.MAX_VERTICES) - ~~t,
                r = i * i * (3 - 2 * i),
                a = ~~t & h.MAX_VERTICES_MASK,
                o = a + 1 & h.MAX_VERTICES_MASK;
            return h._lerp(n[a], n[o], r)
        });
        var p = function() {};
        v(p, "debug_level1", !1), v(p, "debug_level2", !1), v(p, "filter", void 0), v(p, "debug_element", void 0), v(p, "debug_css_list", void 0), v(p, "init", function() {
            this.generateBrowserKeyDictionary()
        }), v(p, "setDebugLevel", function(e) {
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
        }), v(p, "setDebugFilter", function(e) {
            this.filter = e, this.debug_level1 = !0
        }), v(p, "ifDebug", function(e) {
            var t = this;
            return t.filter ? !(!t.passDebugFilter() || !t[e]) || void 0 : t[e]
        }), v(p, "passDebugFilter", function() {
            var e = this;
            if (e.debug_element && e.debug_element.id.indexOf(e.filter) > -1) return !0;
            if (e.debug_css_list)
                for (var t in e.debug_css_list) {
                    if (t.indexOf(e.filter) > -1) return !0;
                    if (String(e.debug_css_list[t]).indexOf(e.filter) > -1) return !0
                }
            return !1
        }), v(p, "generateBrowserKeyDictionary", function() {
            var e = this;
            e.deviceKeyDict = {};
            var t = document.createElement("div").style;
            for (var n in t) {
                var i = e.getPrefix(n),
                    r = e.standardizeKey(n);
                switch (l.browser) {
                    case "safari":
                        "webkit" == i ? e.deviceKeyDict[r] = e.prependPrefix("webkit", r) : e.prependPrefix("webkit", r) in t || (e.deviceKeyDict[r] = r);
                        break;
                    case "firefox":
                        var a = e.prependPrefix("Moz", r),
                            o = e.prependPrefix("Webkit", r);
                        r in t ? e.deviceKeyDict[r] = r : "moz" == i ? e.camelateKey("webkit-" + r) in t && (e.deviceKeyDict[r] = a) : "webkit" == i && (a in t || (e.deviceKeyDict[r] = o));
                        break;
                    case "chrome":
                    case "ie":
                    default:
                        r in t ? e.deviceKeyDict[r] = r : i && (e.deviceKeyDict[r] = e.prependPrefix(i, r))
                }
            }
        }), v(p, "apply", function(e, t) {
            var n = this;
            n.debug_element = e, n.debug_css_list = t, n.ifDebug("debug_level1");
            var i = {};
            for (var r in t) r.match(/^transform\(/) ? i[r] = t[r] : (n.ifDebug("debug_level1"), e.style[n.getDeviceKey(r)] = t[r]);
            n.applyTransforms(e, i), n.ifDebug("debug_level1"), n.debug_element = null, n.debug_css_list = null
        }), v(p, "conformCssObject", function(e, t) {
            var n = this;
            n.debug_element = t, n.ifDebug("debug_level1");
            var i = {};
            if (e)
                for (var r in e) {
                    n.ifDebug("debug_level2");
                    var a = n.conformKeyValue(r, e[r]);
                    for (var o in a) n.ifDebug("debug_level2"), i[a[o][0]] = a[o][1]
                }
            return n.debug_element = null, i
        }), v(p, "conformCssString", function(e, t) {
            var n = this;
            n.debug_element = t, n.ifDebug("debug_level1");
            var i = {};
            if (e) {
                var r = e.split(/\s*;\s*/);
                for (var a in r)
                    if (r[a]) {
                        var o = r[a].split(/:(.+)?/);
                        n.ifDebug("debug_level2");
                        var s = n.conformKeyValue(o[0], o[1]);
                        for (var c in s) n.ifDebug("debug_level2"), i[s[c][0]] = s[c][1]
                    }
            }
            return n.debug_element = null, i
        }), v(p, "conformCssKeyValue", function(e, t) {
            this.ifDebug("debug_level1");
            var n = {};
            return n[e] = t, this.conformCssObject(n)
        }), v(p, "applyTransforms", function(e, t) {
            var n = this;
            n.ifDebug("debug_level1");
            var i = new f,
                r = e.style[n.getDeviceKey("transform")].match(/matrix[^\)]+\)/);
            if (r && (i.setFromCss(r[0]), n.ifDebug("debug_level2")), "transforms" in e) var a = e.transforms;
            else a = {
                tx: 0,
                ty: 0,
                rz: 0,
                sx: 1,
                sy: 1
            };
            var o = {};
            for (var s in t) o[s.match(/\(\s([^\s]+)/)[1]] = t[s];
            if (void 0 != o.tx && (i.data[2] = 0), void 0 != o.ty && (i.data[5] = 0), void 0 != o.rz) {
                var c = -a.rz;
                i.rotate(c * (Math.PI / 180)), i.rotate(o.rz * (Math.PI / 180)), a.rz = o.rz
            }
            void 0 != o.sx && (c = 1 / a.sx, i.scale(c, 1), i.scale(o.sx, 1), a.sx = o.sx), void 0 != o.sy && (c = 1 / a.sy, i.scale(1, c), i.scale(1, o.sy), a.sy = o.sy), void 0 != o.tx && (i.translate(o.tx, 0), a.tx = o.tx), void 0 != o.ty && (i.translate(0, o.ty), a.ty = o.ty), e.transforms = a, n.ifDebug("debug_level2"), e.style[n.getDeviceKey("transform")] = i.getCss()
        }), v(p, "conformKeyValue", function(e, t) {
            e = String(e).trim(), t = String(t).trim();
            var n = this.standardizeKey(e);
            return this.conformValue(n, t)
        }), v(p, "hasPrefix", function(e) {
            return e.search(this.matchPrefixRegex()) > -1
        }), v(p, "getPrefix", function(e) {
            var t = e.match(this.matchPrefixRegex());
            return t ? t[1].replace(/-/g, "").toLowerCase() : null
        }), v(p, "stripPrefix", function(e) {
            var t = e.replace(this.matchPrefixRegex(), "");
            return t.charAt(0).toLowerCase() + t.slice(1)
        }), v(p, "getDeviceKey", function(e) {
            return e in this.deviceKeyDict ? this.deviceKeyDict[e] : e
        }), v(p, "prependPrefix", function(e, t) {
            return e + t.replace(/^(.)/, function(e) {
                return e.charAt(0).toUpperCase()
            })
        }), v(p, "standardizeKey", function(e) {
            var t = this;
            return e = (e = t.stripPrefix(e)) in t.keyFormatExceptions() ? t.keyFormatExceptions()[e] : t.camelateKey(e), t.ifDebug("debug_level2"), e
        }), v(p, "camelateKey", function(e) {
            return e.replace(/-(.)/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }), v(p, "keyFormatExceptions", function() {
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
        }), v(p, "conformValue", function(e, t) {
            var n, i = this,
                r = [],
                a = t.match(/\s/),
                o = t.match(i.matchNumberRegex());
            if (!a && o) {
                i.ifDebug("debug_level2"), n = Number(o[0]);
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
        }), v(p, "matchNumberRegex", function() {
            return /^[+-]?[0-9]*\.?[0-9]+/
        }), v(p, "matchPrefixRegex", function() {
            return /^-*(moz-*|webkit-*|ms-*|o-)/i
        });
        var m, b = [],
            _ = [],
            w = [],
            y = [],
            x = {},
            E = !1,
            C = 0,
            S = function() {},
            D = function() {};

        function k(t, n) {
            if (D = n || e.failAd, E) y.push(t);
            else {
                m = new i.default({
                    name: "imageManagerLoader",
                    onComplete: function(e) {
                        E = !1, T(e.getAllContentRaw())
                    },
                    onFail: function(e) {
                        E = !1, D.call()
                    }
                }), S = [].concat(t), y = [];
                var r = b.slice();
                b = [], m.add(new i.default(r, {
                    name: "dynamicImages-" + C++,
                    fileType: "jpg"
                }));
                var a = _.slice();
                _ = [], m.add(new i.default(a, {
                    name: "dynamicCanvasImages-" + C++,
                    fileType: "jpg",
                    crossOrigin: "anonymous"
                }));
                var o = w.slice();
                w = [];
                for (var s = 0; s < o.length; s++) m.add(o[s]);
                E = !0, m.load()
            }
        }

        function T(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] instanceof Image || e[t] instanceof SVGElement) {
                    var n = e[t];
                    i = e[t].id, void 0 != x[i] || (x[n.id] = n)
                }
            var i;
            for (t = 0; t < S.length; t++) S[t].call();
            y.length > 0 && k(y)
        }
        var A, P, O = {},
            F = !1,
            M = function(e, t, n, i, r, a, o, s, c, u, l) {
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
                    x: a || 0,
                    y: o || 0
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
            },
            L = function(e) {
                e && (e.stopImmediatePropagation(), O[e.type] = !0)
            },
            R = function(e) {
                return void 0 != O[e]
            },
            I = "onSelect",
            X = function() {
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
                    var i = n.eventList.indexOf(e);
                    i >= 0 && n.eventList.splice(i, 1), n._checkDragEnabled(), n._elemRemove(e, t)
                }, t._reset = function() {
                    var e = this;
                    e._cursor = "mouse", e._start = "down", e._end = "up", e.elem.addEventListener("touchstart", e._handleTouchStart), "ios" != l.os && e.elem.addEventListener("mousedown", e._handleDown)
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
                    t.debug, F || (F = !0, O = {}), t.elem.removeEventListener("touchstart", t._handleTouchStart), "ios" != l.os && t.elem.removeEventListener("mousedown", t._handleDown), t._isDragging = !1, t._add(t._end, t._handleUp), t._add("move", t._handleDrag);
                    var n = t._getEventScope(e),
                        i = n.pageX,
                        r = n.pageY,
                        a = t.elem.getBoundingClientRect(),
                        o = i - a.left,
                        s = r - a.top,
                        c = t.elem.x || W(t.elem, "x"),
                        u = t.elem.y || W(t.elem, "y"),
                        f = a.left - c,
                        d = a.top - u;
                    t._oX = f + o, t._oY = d + s;
                    var g = i - t._oX,
                        h = r - t._oY;
                    t._sX = t._p1X = t._p2X = i, t._sY = t._p1Y = t._p2Y = r,
                        function(e) {
                            if (!R(e)) {
                                var n = new M(e, i, r, o, s, g, h);
                                t.debug, t.elem.dispatchEvent(n)
                            }
                        }("onPress")
                }, t._handleUp = function(e, t) {
                    var n = this;
                    n.debug, n._remove(n._end, n._handleUp), n._remove("move", n._handleDrag);
                    var i = n._getEventScope(e),
                        r = i.pageX,
                        a = i.pageY,
                        o = n.elem.getBoundingClientRect(),
                        s = r - o.left,
                        c = a - o.top,
                        u = r - n._oX,
                        l = a - n._oY;
                    !0 !== t && v("onRelease");
                    var f = o.top + window.pageYOffset,
                        d = f + o.height,
                        g = o.left + window.pageXOffset,
                        h = g + o.width;

                    function v(e) {
                        if (!R(e)) {
                            var t = new M(e, r, a, s, c, u, l, 0, 0, n._vX, n._vY);
                            n.debug, n.elem.dispatchEvent(t)
                        }
                    }
                    n._isDragging ? n._isDragEnabled && n._dragEndOrSwipe("onDragStop") : r > g && r < h && a > f && a < d && v("onSelect"), n._isDragging && n._dragEndOrSwipe("onSwipe"), n._reset(), e.preventDefault(), F = !1
                }, t._handleTouchStart = function(e) {
                    var t = this;
                    t.debug, t._cursor = "touch", t._start = "start", t._end = "end", t._handleDown(e)
                }, t._handleDrag = function(e) {
                    var t = this;
                    t.debug;
                    var n = t._getEventScope(e),
                        i = n.pageX,
                        r = n.pageY,
                        a = i - t._p1X,
                        o = i - t._p2X;
                    t._vX = (o - a) / 2 + a;
                    var s = r - t._p1Y,
                        c = r - t._p2Y;
                    t._vY = (c - s) / 2 + s;
                    var u = i - t._oX,
                        l = r - t._oY,
                        f = t.elem.getBoundingClientRect(),
                        d = i - f.left,
                        g = r - f.top;

                    function h(e) {
                        if (!R(e)) {
                            var n = new M(e, i, r, d, g, u, l, t._p1X - t._sX, t._p1Y - t._sY, t._vX, t._vY);
                            t.debug, t.elem.dispatchEvent(n)
                        }
                    }
                    t._isDragging ? t._isDragEnabled && h("onDrag") : (Math.abs(t._sX - i) > t._give || Math.abs(t._sY - r) > t._give) && (t._isDragging = !0, t._isDragEnabled && h("onDragStart")), t._p2X = t._p1X, t._p1X = i, t._p2Y = t._p1Y, t._p1Y = r
                }, t._dragEndOrSwipe = function(e) {
                    var t = this;
                    if (t.debug, !R(name)) {
                        var n = t.elem.getBoundingClientRect(),
                            i = new M(e, t._p1X, t._p1Y, t._p1X - n.left, t._p1Y - n.top, t._p1X - t._oX, t._p1Y - t._oY, t._p2X - t._sX, t._p2Y - t._sY, t._vX, t._vY);
                        t.debug, t.elem.dispatchEvent(i)
                    }
                }, e
            }(),
            V = new function() {
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
                        var n = new X(e);
                        return t.push(n), n
                    }(e)), n
                }

                function a(t, n) {
                    var i = r(t);
                    if (i.hasActiveChildren != n) {
                        i.hasActiveChildren = n;
                        for (var a = i.elem.getElementsByTagName("*"), o = 0; o < a.length; o++) a[o].parentNode == t && (n ? e.enable(a[o]) : e.disable(a[o]))
                    }
                }

                function o(e) {
                    for (var t = [], i = function e(t, i, r, a) {
                            t.style.visibility = "hidden", a.push(t);
                            for (var o = document.elementFromPoint(i, r), s = 0; s < n.length; s++)
                                if (n[s].elem == o) return e(o, i, r, a);
                            return o
                        }(e.target, e.clientX, e.clientY, t), r = 0; r < t.length; r++) t[r].style.visibility = "visible";
                    return t = [], e.stopImmediatePropagation(), i
                }

                function s(e) {
                    var t = o(e),
                        n = document.createEvent("HTMLEvents");
                    n.initEvent(e.type, !0, !1), t.dispatchEvent(n)
                }
                e._kills = {}, e.add = e.addEventListener = function(e, t, n) {
                    r(e).register(t, n), U(e, "cursor", "pointer"), U(e, "pointer-events", "auto")
                }, e.remove = e.removeEventListener = function(e, t, n) {
                    var i = r(e);
                    i && (i.unregister(t, n), i.eventList.length <= 0 && U(e, "cursor", "auto"))
                }, e.disable = function(e) {
                    var t = r(e);
                    n.push(t), i ? (t.register(GestureEvent.CLICK, s), U(e, "cursor", "auto")) : U(e, "pointer-events", "none")
                }, e.disableChildren = function(e) {
                    a(e, !1)
                }, e.enable = function(e) {
                    for (var t = r(e), a = 0; a < n.length; a++)
                        if (t == n[a]) {
                            i ? t.unregister(GestureEvent.CLICK, s) : (U(e, "pointer-events", "auto"), U(e, "cursor", "pointer"));
                            break
                        }
                }, e.enableChildren = function(e) {
                    a(e, !0)
                }
            },
            z = {
                ENABLED: "uiComponentEnabled",
                RESIZE: "uiResize",
                SLIDER_UPDATE: "uiSliderUpdate",
                get componentEnabled() {
                    return A || (A = new CustomEvent("uiComponentEnabled")), A
                },
                get sliderUpdate() {
                    return P || (P = new CustomEvent("uiSliderUpdate")), P
                }
            };

        function j(e) {
            var t = this;
            t.pool = [], t.fps = e, t._frameTime = Math.floor(1e3 / t.fps), t._prevTime = 0, t._startTime = 0, t._nextTime = 0, t._maxLag = 400, t._shiftLag = 30, t._paused = !1, t._prevCallTime = Date.now(), t.diffTime = 0
        }
        j.prototype = {
            resume: function() {
                var e = this;
                e._isPaused && (e._startTime = Date.now(), e._prevCallTime = e._startTime, e._prevTime = e._startTime, e._nextTime = 0, e._isPaused = !1)
            },
            tick: function() {
                var e = this;
                if (!e._paused) {
                    var t = !1,
                        n = Date.now(),
                        i = n - e._prevTime;
                    i > e._maxLag && (e._startTime += i - e._shiftLag), e._prevTime = n;
                    var r = e._prevTime - e._startTime - e._nextTime;
                    r > 0 && (e._nextTime += r >= e._frameTime ? r : e._frameTime, t = !0, e.diffTime = n - e._prevCallTime, e._prevCallTime = n), t && e.dispatch()
                }
            },
            dispatch: function() {
                for (var e = 0; e < this.pool.length; e++) {
                    var t = this.pool[e];
                    t.handler.call(t.from, this)
                }
            }
        };
        for (var Y = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent), K = ["webkit", "moz"], N = 0; !window.requestAnimationFrame && N < K.length; N++) window.requestAnimationFrame = window[K[N] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[K[N] + "CancelAnimationFrame"] || window[K[N] + "CancelRequestAnimationFrame"];

        function B(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        window.requestAnimationFrame && window.cancelAnimationFrame && !Y || (window.requestAnimationFrame = function(e) {
            return setTimeout(e, 17)
        }, window.cancelAnimationFrame = clearTimeout);
        var H = function() {};

        function U(e, t) {
            e = c(e);
            var n = {};
            if (arguments.length > 2)
                for (var i = 1; i < arguments.length; i += 2) n = p.conformCssKeyValue(arguments[i], arguments[i + 1]);
            else n = "string" == typeof arguments[1] ? p.conformCssString(arguments[1], e) : p.conformCssObject(arguments[1], e);
            p.apply(e, n)
        }

        function W(e, t) {
            var n;
            if (e = c(e), "x" == t || "y" == t) {
                var i = e.style[p.getDeviceKey("transform")].replace(/[\s\(\)matrix]/g, "").split(",");
                n = i.length < 6 ? 0 : +i["x" == t ? 4 : 5]
            } else n = window.getComputedStyle(e, null).getPropertyValue(t).replace(/px/, ""), isNaN(n) || (n = parseInt(n, 10));
            return n
        }

        function q(e, t) {
            if (!document.getElementById(e)) {
                var n = document.createElement("style");
                n.type = "text/css", n.id = e;
                var i = 2 === arguments.length ? t : "";
                if (arguments.length > 2)
                    for (var r = 0; r < arguments.length - 1; r += 2) i += arguments[r + 1].replace(/\,\s+/g, ","), i += " { " + (arguments[r + 2] || "") + " }\n";
                n.innerHTML = i, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }

        function G(e, t) {
            for (var n = c(e), i = 0; i < arguments.length - 1; i++) n.classList.add(arguments[i + 1])
        }
        B(H, "_isPaused", !0), B(H, "_isActive", !0), B(H, "_sets", {}), B(H, "_RAF", void 0), B(H, "register", function(e, t, n) {
            var i = H;
            n = n || 30, i._sets[n] || (i._sets[n] = new j(n));
            for (var r = i._sets[n].pool, a = 0; a < r.length; a++)
                if (r[a].from === e && r[a].handler === t) return;
            r.push({
                handler: t,
                from: e
            }), i._isActive && i.resume()
        }), B(H, "unregister", function(e, t, n) {
            var i = H;
            for (var r in i._sets)
                if (!n || r == n) {
                    for (var a = i._sets[r].pool, o = 0; o < a.length; o++)
                        if (a[o].from === e && a[o].handler === t) {
                            a.splice(o, 1);
                            break
                        }
                    0 == a.length && delete i._sets[r]
                }
            0 === Object.keys(i._sets).length && (i.pause(), i._isActive = !0)
        }), B(H, "pause", function() {
            var e = H;
            if (arguments.length > 0) {
                for (var t = 0; t < arguments.length; t++) {
                    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
                    e._sets[n] && (e._sets[n]._paused = !0, e._isPaused = !0)
                }
                for (var i in e._sets)
                    if (!e._sets[i]._paused) {
                        e._isPaused = !1;
                        break
                    }
            } else {
                for (var i in e._sets) e._sets[i]._paused = !0;
                e._isPaused = !0
            }
            e._isPaused && (e._isActive = !1, window.cancelAnimationFrame(e._RAF))
        }), B(H, "resume", function() {
            var e = H,
                t = !e._isPaused;
            if (arguments.length > 0)
                for (var n = 0; n < arguments.length; n++) {
                    var i = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                    e._sets[i] && (e._sets[i]._paused = !1, e._isPaused = !1)
                } else {
                    for (var r in e._sets) e._sets[r]._paused = !1;
                    e._isPaused = !1
                }
            t || (e._isActive = !0, e._RAF = window.requestAnimationFrame(e.tick))
        }), B(H, "secondsAsFrames", function(e) {
            return 1 / e
        }), B(H, "tick", function() {
            var e = H;
            if (!e._isPaused) {
                for (var t in e._sets) e._sets[t].tick();
                window.requestAnimationFrame(e.tick)
            }
        });
        var Z = Object.freeze({
            setCss: U,
            getCss: W,
            injectStylesheet: q,
            addClass: G,
            removeClass: function(e, t) {
                c(e).classList.remove(t)
            }
        });

        function $(e) {
            U(e.target, {
                textShadow: function(e, t, n, i, r, a, s) {
                    var c = "",
                        u = o(-1 * e + 180);
                    return c += (Math.cos(u) * t).toFixed(8) + "px ", c += (Math.sin(u) * t).toFixed(8) + "px ", c += n + "px", c += " " + function(e, t) {
                        return "rgba(" + (e = function(e, t) {
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
                        }(e, t)).r + "," + e.g + "," + e.b + "," + e.a + ")"
                    }(r, a), (s = !!s) && (c += " inset"), c
                }(e.angle || 0, e.distance || 0, e.size || 0, 0, e.color || "#000000", e.alpha)
            })
        }
        var J = {
                x: ["offsetWidth", "width", "left", "right"],
                y: ["offsetHeight", "height", "top", "bottom"]
            },
            Q = [{
                x: "offsetWidth",
                y: "offsetHeight",
                parent: "parentNode"
            }, {
                x: "width",
                y: "height",
                parent: "stage"
            }],
            ee = "alignCenter";

        function te(e, t) {
            var n = function(e, t) {
                var n = e.canvas || c(e),
                    i = {},
                    r = !1 !== t.snap,
                    a = ie(e) ? 0 : 1;
                for (var o in "string" == typeof t && (t = ne(t)), t)
                    if ("x" == o || "y" == o) {
                        var s, u, l = t[o];
                        if (!l) continue;
                        "string" == typeof l && (l = {
                            type: l
                        });
                        var f = 0,
                            d = !1,
                            g = l.offset || 0;
                        if (void 0 !== l.against) {
                            var h = 0;
                            ie(s = l.against) ? s.canvas ? h = 1 : f = W(s, o) : "number" == typeof s ? (d = !0, f = s) : (f = s[o], h = 1), u = Q[h][o], l.type === ee && (t[o].outer = !1)
                        } else s = n[Q[a].parent], u = Q[a][o];
                        var v = n[Q[a][o]];
                        switch (e._type) {
                            case "arc":
                            case "path":
                                switch (l.type) {
                                    case ee:
                                        v = 0;
                                        break;
                                    default:
                                        g += v / 2
                                }
                                break;
                            case "text":
                                if ("x" === o) switch (e.alignText) {
                                    case "center":
                                        v = 0;
                                    case "right":
                                        v *= -1
                                }
                        }
                        var p = ne(l.type, v, d ? 0 : s[u], !d && !!t[o].outer);
                        null != p && (p += f + g, i[o] = r ? Math.round(p) : p)
                    }
                return i
            }(e, t);
            if (ie(e)) U(e.canvas || c(e), n);
            else
                for (var i in n) e[i] = n[i];
            return n
        }

        function ne(e, t, n, i) {
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

        function ie(e) {
            return e instanceof HTMLElement || void 0 != e.canvas
        }
        var re = function() {
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
            ae = "inlineFit",
            oe = function(e, t) {
                q("RED_uiElement", ".ui-elem", "position:absolute;"), t = t || "div";
                var n = document.createElement(t);
                return G(n, "ui-elem"), (e = e || {}).id && (n.id = e.id), U(n, e.css), e.target && c(e.target).appendChild(n), Object.defineProperty(n, "parent", {
                    get: function() {
                        return n.parentNode
                    }
                }), n.toString = function() {
                    return "[object UIDiv]"
                }, n
            },
            se = function(e) {
                var t, n;

                function i(t, n) {
                    var i, a = !0,
                        o = !0,
                        s = n || "div";
                    t = t || {}, n = "svg" == s ? "div" : n;
                    var u = r(r(i = e.call(this, t, n) || this));
                    return u._align = t.align, Object.defineProperties(u, {
                        x: {
                            get: function() {
                                return W(u, "x")
                            },
                            set: function(e) {
                                U(u, {
                                    x: e
                                })
                            }
                        },
                        y: {
                            get: function() {
                                return W(u, "y")
                            },
                            set: function(e) {
                                U(u, {
                                    y: e
                                })
                            }
                        },
                        enabled: {
                            get: function() {
                                return a
                            },
                            set: function(e) {
                                a = e, u.dispatchEvent(z.componentEnabled)
                            }
                        },
                        showing: {
                            get: function() {
                                return o
                            },
                            set: function() {}
                        }
                    }), "canvas" != s && "svg" != s && Object.defineProperties(u, {
                        width: {
                            get: function() {
                                return u.offsetWidth
                            },
                            set: function(e) {
                                U(u, {
                                    width: e
                                });
                                var t = new CustomEvent(z.RESIZE);
                                t.direction = "width", u.dispatchEvent(t)
                            }
                        },
                        height: {
                            get: function() {
                                return u.offsetHeight
                            },
                            set: function(e) {
                                U(u, {
                                    height: e
                                });
                                var t = new CustomEvent(z.RESIZE);
                                t.direction = "height", u.dispatchEvent(t)
                            }
                        }
                    }), u.hide = function() {
                        u.style.display = "none", o = !1
                    }, u.show = function() {
                        try {
                            u.style.removeProperty("display")
                        } catch (e) {
                            u.style.display = null
                        }
                        o = !0
                    }, u.setCss = function(e) {
                        U(u, e)
                    }, u.addChild = function(e) {
                        var t = c(e);
                        u.appendChild(t), e._align && te(e, e._align)
                    }, u.inspect = function() {
                        for (var e = {}, t = Object.getOwnPropertyNames(u), n = 0; n < t.length; n++) {
                            var i = u[t[n]];
                            e[t[n]] = i
                        }
                    }, u.toString = function() {
                        return "[object UIComponent]"
                    }, u._initAlign = function(e) {
                        var n = e ? 1 == e : void 0 != t.target;
                        t.align && n && te(u, t.align)
                    }, u.enabled = !0, u._initAlign(), u || r(i)
                }
                return n = e, (t = i).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, i
            }(oe),
            ce = function(e) {
                q("RED_uiImage", ".ui-image", "background-repeat:no-repeat; background-size:contain;");
                var t = !0,
                    n = null,
                    i = !1,
                    r = "contain",
                    a = !!e.aspectRatio;
                if (e.css, !e.source) throw new Error("UIImage : No image source set on '" + e.id + "'");
                e.css = e.css || {};
                var o = new se(e);

                function s(r) {
                    var s, c, u = i ? 2 : 1,
                        l = n.width / n.height,
                        f = e.css.width || n.width,
                        d = e.css.height || n.height,
                        g = void 0 == e.css.width,
                        h = void 0 == e.css.height;
                    t || (g = "height" == r, h = "width" == r, f = o.width, d = o.height), g && (s = a && !h ? d * l : f / u, o.style.width = Math.round(s) + "px"), h && (c = a && !g ? f / l : d / u, o.style.height = Math.round(c) + "px")
                }
                return G(o, "ui-image"), Object.defineProperties(o, {
                    source: {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            n = function(e) {
                                if (x[e]) return x[e];
                                throw new Error("ImageManager : No image named '" + e + "' has been loaded")
                            }(e), o.style.backgroundImage = "url(" + n.src + ")"
                        }
                    },
                    retina: {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            i = e, s()
                        }
                    },
                    ratio: {
                        get: function() {
                            return r
                        },
                        set: function(e) {
                            r = e, o.style.backgroundSize = e
                        }
                    },
                    aspectRatio: {
                        get: function() {
                            return a
                        },
                        set: function(e) {
                            a = e, s()
                        }
                    }
                }), o.toString = function() {
                    return "[object UIImage]"
                }, o.addEventListener(z.RESIZE, function(e) {
                    s(e.direction)
                }), o.source = e.source, o.retina = !!e.retina, e.ratio && (o.ratio = e.ratio), o._initAlign(), t = !1, o
            },
            ue = function(e) {
                var t;
                q("RED_uiTextfield", ".ui-textfield", "position:absolute; white-space:nowrap;", ".smooth-text", "-webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale;", ".ui-textfield .content", "position:relative; display:table-cell; cursor:default; pointer-events:none; line-height:100%; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
                var n, i, r, a, o, c = 0,
                    u = "",
                    l = {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0
                    },
                    f = "",
                    d = !0,
                    g = {},
                    h = new se(e = e || {});
                G(h, "ui-textfield");
                var v = document.createElement("span");

                function p() {
                    if (!d) switch (u) {
                        case "paragraphClamp":
                        case "inlineClamp":
                            b();
                            break;
                        case "inlineFitClamp":
                            u = "inlineFit", m(), u = "inlineClamp", b(), u = "inlineFitClamp";
                            break;
                        case "paragraphFitClamp":
                            u = "paragraphFit", m(), u = "paragraphClamp", b(), u = "paragraphFitClamp";
                        default:
                            m()
                    }
                }

                function m() {
                    if (U(v, {
                            verticalAlign: "auto",
                            height: "auto",
                            width: "auto"
                        }), "paragraphFit" == u) {
                        for (var e = c; h.scrollHeight > h.offsetHeight && !(e <= 0);) e--, h.style.fontSize = e + "px";
                        for (; h.scrollWidth > h.offsetWidth && !(e <= 0);) e--, h.style.fontSize = e + "px";
                        c = e, h.style.fontSize = c + "px"
                    } else if ("inlineFit" == u) {
                        var t = h.offsetWidth,
                            n = h.offsetHeight;
                        h.style.fontSize = "243px";
                        var i = v.offsetWidth,
                            r = v.offsetHeight;
                        h.style.fontSize = "182px";
                        var o = v.offsetWidth,
                            f = v.offsetHeight,
                            d = s(243, 182, i, o, t),
                            g = s(243, 182, r, f, n);
                        c = ~~Math.min(c, Math.min(d, g)), h.style.fontSize = c + "px"
                    }
                    a && U(v, {
                        verticalAlign: a,
                        height: h.offsetHeight - l.top - l.bottom,
                        width: h.offsetWidth - l.left - l.right
                    })
                }

                function b() {
                    U(v, {
                        height: "auto",
                        width: "auto"
                    }), h.width = v.offsetWidth, h.height = v.offsetHeight
                }
                return G(v, "content"), h.appendChild(v), Object.defineProperties(h, {
                        alignText: {
                            get: function() {
                                return t
                            },
                            set: function(e) {
                                if (e && t != e) {
                                    var n = ((t = e).match(/(left|right)/gi) || ["center"])[0].toLowerCase();
                                    U(h, {
                                        lineHeight: h.height,
                                        textAlign: n
                                    }), a = (t.match(/(bottom|top)/gi) || ["middle"])[0].toLowerCase(), U(v, {
                                        verticalAlign: a
                                    })
                                }
                            }
                        },
                        fontSize: {
                            get: function() {
                                return c
                            },
                            set: function(e) {
                                !isNaN(e) && e > 0 && (c = e, h.style.fontSize = ~~e + "px", p())
                            }
                        },
                        fontFamily: {
                            get: function() {
                                return n
                            },
                            set: function(e) {
                                n = e, h.style.fontFamily = e, p()
                            }
                        },
                        format: {
                            get: function() {
                                return u
                            },
                            set: function(e) {
                                u != e && (U(h, {
                                    whiteSpace: null != /inline/g.exec(u = e) ? "nowrap" : "normal"
                                }), p())
                            }
                        },
                        leading: {
                            get: function() {
                                return i
                            },
                            set: function(e) {
                                e && i != e && (U(v, {
                                    lineHeight: 100 * (i = e) + "%"
                                }), p())
                            }
                        },
                        spacing: {
                            get: function() {
                                return W(h, "letter-spacing") || r
                            },
                            set: function(e) {
                                e && r != e && (r = e, U(h, {
                                    letterSpacing: e
                                }), p())
                            }
                        },
                        bufferText: {
                            get: function() {
                                return l
                            },
                            set: function(e) {
                                if (e && l != e) {
                                    for (var t = "", n = ["top", "right", "bottom", "left"], i = 0; i < 4; i++) {
                                        var r = n[i],
                                            a = isNaN(e) ? e[r] || 0 : e;
                                        l[r] = a, t += a + "px "
                                    }
                                    U(v, {
                                        padding: t
                                    }), p()
                                }
                            }
                        },
                        text: {
                            get: function() {
                                return f
                            },
                            set: function(e) {
                                void 0 != e && "" != e && (f = e, h.setDefault("text", e), v.innerHTML = e, p())
                            }
                        },
                        smoothing: {
                            get: function() {
                                return o
                            },
                            set: function(e) {
                                Z[(o = e) ? "addClass" : "removeClass"](v, "smooth-text")
                            }
                        }
                    }), h.resetToDefault = function() {
                        if (d = !0, arguments.length > 0)
                            for (var e = 0; e < arguments.length; e++) h[arguments[e]] = g[arguments[e]];
                        else
                            for (var t in g) void 0 != h[t] && (h[t] = g[t]);
                        d = !1, p()
                    }, h.setDefault = function(e, t) {
                        g[e] = t
                    }, h.toString = function() {
                        return "[object UITextfield]"
                    }, h.enabled = !0,
                    function() {
                        for (var t in e)
                            if ("css" == t)
                                for (var n in e.css) switch (n) {
                                        case "x":
                                        case "y":
                                        case "width":
                                        case "height":
                                            g[n] = e.css[n]
                                    } else if ("bufferText" == t)
                                        for (var i in g[t] = {}, l) g[t][i] = e[t][i] || 0;
                                    else g[t] = e[t];
                        delete g.target, delete g.id
                    }(), h.format = e.format, h.fontSize = e.fontSize, h.fontFamily = e.fontFamily || "Arial", h.alignText = e.alignText, h.bufferText = e.bufferText, h.leading = e.leading, h.spacing = e.spacing, h.smoothing = 0 != e.smoothing, d = !1, h.text = e.text, h._initAlign(), h
            };
        window.Control = new function() {
            this.prepare = function(t) {
                var n = this;
                (function(e) {
                    return new Promise(function(t, n) {
                        var i;
                        l.init(), p.init(), (i = e) && T(i.getAllContentRaw()), Promise.all([]).then(function() {
                            t()
                        }).catch(function(e) {
                            n(e)
                        })
                    })
                })(t).then(function() {
                    return re.init()
                }).then(function() {
                    return new Promise(function(t, n) {
                        k(t, e.failAd)
                    })
                }).then(function() {
                    n.prepareBuild()
                }).catch(function(e) {
                    throw e
                })
            }, this.prepareBuild = function() {
                Control.preMarkup(), View.main = new function() {
                    var e = c("main");
                    return U(e, {
                        position: "absolute",
                        width: adParams.adWidth,
                        height: adParams.adHeight,
                        opacity: 0,
                        left: "0px",
                        top: "0px",
                        overflow: "hidden",
                        userSelect: "none"
                    }), e.logoContainer = new ce({
                        id: "logo-container",
                        target: e,
                        source: "template_image",
                        css: {
                            x: 9,
                            y: 60
                        }
                    }), e.txtGreeting = new ue({
                        id: "txt-greeting",
                        target: e,
                        css: {
                            width: 200,
                            height: 30,
                            color: "#ff1414"
                        },
                        align: ee,
                        fontSize: 40,
                        fontFamily: "template_font",
                        format: ae,
                        alignText: ee,
                        bufferText: {
                            left: 5,
                            right: 5
                        },
                        leading: 1,
                        text: "MOBILE ADS"
                    }), $({
                        target: e.txtGreeting,
                        angle: 45,
                        distance: 2,
                        size: 2,
                        color: "#000000",
                        alpha: .5
                    }), e.buttonCta = new function(e) {
                        (e = e || {}).css = e.css || {}, q("RED_uiButton", ".ui-button", "position:absolute", ".ui-button-state", "position: absolute; width:inherit; height:inherit;");
                        var t, n = 0,
                            i = [],
                            r = !!e.containChild,
                            a = new se(e);
                        G(a, "ui-button"), e.bg && s(e.bg, !1), u(), e.icon = e.icon || [];
                        for (var o = 0; o < e.icon.length; o++) s(e.icon[o], !0);

                        function s(n, o) {
                            var s, c = e.id + (o ? "-state-" + i.length : "-bg");
                            "string" == typeof n ? s = new ce({
                                target: a,
                                id: c,
                                source: n,
                                css: r ? {
                                    width: "inherit",
                                    height: "inherit"
                                } : {}
                            }) : ((s = n).id = c, a.addChild(s), /(UITextField)/gi.exec(s.toString()) && s.resetToDefault(), s._initAlign(!0)), o ? (i.push(s), G(s, "ui-button-state")) : t = s, V.disable(s)
                        }

                        function u() {
                            ! function(e, t, n, i) {
                                var r = c(e);
                                i = !1 !== i;
                                var a = r.childNodes,
                                    o = [],
                                    s = {};
                                /(x)/gi.exec(t) && (s.x = {}), /(y)/gi.exec(t) && (s.y = {});
                                for (var u = 0; u < a.length; u++) {
                                    var l = a[u];
                                    for (var f in o[u] = {}, s) {
                                        var d = W(l, f),
                                            g = d + l[J[f][0]],
                                            h = s[f];
                                        0 == u && (h.min = d, h.max = g), d < h.min && (h.min = d), h.max < g && (h.max = g), o[u][f] = d
                                    }
                                }
                                var v = {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0
                                };
                                if (n)
                                    for (var p in v) v[p] = isNaN(n) ? n[p] || 0 : n;
                                var m = {};
                                for (var f in s) {
                                    var b = s[f];
                                    i && (m[f] = b.min + W(r, f) - v[J[f][2]]), m[J[f][1]] = b.max - b.min + v[J[f][2]] + v[J[f][3]]
                                }
                                for (U(r, m), u = 0; u < a.length; u++) {
                                    for (var f in l = a[u], m = {}, s) m[f] = o[u][f] - s[f].min + v[J[f][2]];
                                    U(l, m)
                                }
                            }(a, "clamp" + (e.css.width ? "" : "X") + (e.css.height ? "" : "Y"), {}, !1)
                        }

                        function l(e) {
                            L(e), a.togglable && (a.state = Number(!n)), a._onClick.call(a, e), a.onClick.call(a, e)
                        }

                        function f(e) {
                            a._onOver.call(a, e), a.onOver.call(a, e)
                        }

                        function d(e) {
                            a._onOut.call(a, e), a.onOut.call(a, e)
                        }
                        return u(), a.togglable = e.icon.length > 1, Object.defineProperties(a, {
                            bg: {
                                get: function() {
                                    return t
                                }
                            },
                            icon: {
                                get: function() {
                                    return i
                                }
                            },
                            state: {
                                get: function() {
                                    return n
                                },
                                set: function(e) {
                                    n = e, e >= i.length && (n = 0);
                                    for (var t = 0; t < i.length; t++) i[t].style.visibility = t == n ? "visible" : "hidden"
                                }
                            }
                        }), a.onClick = e.onClick || function(e) {}, a.onOver = e.onOver || function(e) {}, a.onOut = e.onOut || function(e) {}, a.toString = function() {
                            return "[object UIButton]"
                        }, a._onClick = function(e) {}, a._onOver = function(e) {}, a._onOut = function(e) {}, a.addEventListener(z.ENABLED, function(e) {
                            var t = a.enabled ? "addEventListener" : "removeEventListener";
                            V[t](a, I, l), V[t](a, "mouseover", f), V[t](a, "mouseout", d)
                        }), a.enabled = !0, a.state = e.state || 0, a._initAlign(), a
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
                            x: ee,
                            y: {
                                type: "alignBottom",
                                offset: -30
                            }
                        },
                        icon: [new ue({
                            css: {
                                width: 150,
                                height: 40,
                                color: "#ffffff"
                            },
                            fontSize: 12,
                            fontFamily: "template_font",
                            format: ae,
                            alignText: ee,
                            text: "CLICK FOR MORE"
                        })]
                    }), U(e, {
                        "background-color": "#cccccc"
                    }), e
                }, View.mainBorder = new function() {
                    new function(e) {
                        var t, n, i = new oe(e);
                        G(i, "ui-border"), Object.defineProperties(i, {
                            size: {
                                get: function() {
                                    return t
                                },
                                set: function(e) {
                                    void 0 != e && t != e && U(i, {
                                        borderWidth: t = e
                                    })
                                }
                            },
                            color: {
                                get: function() {
                                    return n
                                },
                                set: function(e) {
                                    e && n != e && U(i, {
                                        borderColor: n = e
                                    })
                                }
                            }
                        }), i.toString = function() {
                            return "[object UIBorder]"
                        }, V.disable(i), i.color = e.color, i.size = e.size
                    }({
                        target: View.main,
                        size: 1,
                        color: "#000000"
                    })
                }, Control.postMarkup(), Animation.startAd()
            }, this.preMarkup = function() {}, this.postMarkup = function() {
                V.add(View.main, I, Control.handleClick)
            }, this.animationComplete = function() {}, this.handleClick = function(e) {
                Network.exit(clickTag)
            }
        }, window.Animation = new function() {
            this.startAd = function() {
                e.removePreloader(), U(View.main, {
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