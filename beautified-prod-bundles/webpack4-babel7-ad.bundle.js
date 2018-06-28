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
        var t, r = (t = n(0)) && t.__esModule ? t : {
            default: t
        };

        function i(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }

        function a(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
            }
        }

        function o(e, t) {
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

        function s(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var u = function() {
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
        s(u, "pixelRatio", window.devicePixelRatio || "unknown"), s(u, "init", function() {
            var e = this;
            e.agentString = navigator.userAgent, e._getType(), e._getBrandAndOS(), e._getBrowser(), "desktop" !== e.type && "windows" === e.os && e.osVersion <= 8 && "ie" === e.browser && e.browserVersion < 12 && (e.type = "desktop");
            Array(70).join("-");
            for (var t in e) e.hasOwnProperty(t) && "function" != typeof e[t] && e[t]
        }), s(u, "_getType", function() {
            var e = this,
                t = /(android|mobile)/gi.exec(e.agentString),
                n = /(tablet|touch)/gi.exec(e.agentString),
                r = /(ipad)/gi.exec(e.agentString);
            e.type = "desktop", t && (e.type = "mobile"), n && (e.type = "tablet"), r && (e.type = "tablet")
        }), s(u, "_getBrandAndOS", function() {
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
        }), s(u, "_getBrowser", function() {
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
        }), s(u, "_checkForSpecial", function(e, t, n) {
            for (var r, i = 0; i < t.length; i++)
                if (r = t[i].toLowerCase(), n.match(new RegExp(r, "i"))) {
                    this[e] = r;
                    break
                }
        });
        var c = function() {
            var e = this;
            e.identity = new Float32Array([1, 0, 0, 0, 1, 0]), e.data = new Float32Array(e.identity)
        };
        c.prototype = {
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
                        u = o % 3;
                    n.data[o] = i[s] * a[u] + i[s + 1] * a[u + 3]
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
        var l = function() {
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
                var n, r = (n = t, Math.PI / 180 * n);
                return new e(Math.cos(r), Math.sin(r))
            }, e.random = function(t) {
                var n = t || .01;
                return e.degreeToVector(function(e, t, n) {
                    t = t || 0, n = void 0 != n && n > 0 ? n : 1;
                    var r = Math.min(0, t),
                        i = Math.max(0, t);
                    return r = Math.ceil(r / n) * n, i = Math.floor(i / n) * n, r + Math.floor(Math.random() * ((i - r + n) / n)) / (1 / n)
                }(0, 360, n))
            }, e
        }();

        function d(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        var f = function() {};

        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        d(f, "rx", []), d(f, "ry", []), d(f, "MAX_VERTICES", 256), d(f, "MAX_VERTICES_MASK", 255), d(f, "get", function(e, t) {
            return new l(f._getVal("x", e), f._getVal("y", t))
        }), d(f, "_init", function() {
            for (var e = 0; e < f.MAX_VERTICES; ++e) e === f.MAX_VERTICES - 1 && (f.rx.push(f.rx[0]), f.ry.push(f.ry[0])), f.rx.push(Math.random() - .5), f.ry.push(Math.random() - .5)
        }), d(f, "_lerp", function(e, t, n) {
            return e * (1 - n) + t * n
        }), d(f, "_getVal", function(e, t) {
            0 == f.rx.length && f._init();
            var n = "x" === e ? f.rx : f.ry,
                r = (t %= f.MAX_VERTICES) - ~~t,
                i = r * r * (3 - 2 * r),
                a = ~~t & f.MAX_VERTICES_MASK,
                o = a + 1 & f.MAX_VERTICES_MASK;
            return f._lerp(n[a], n[o], i)
        });
        var h = function() {};
        g(h, "debug_level1", !1), g(h, "debug_level2", !1), g(h, "filter", void 0), g(h, "debug_element", void 0), g(h, "debug_css_list", void 0), g(h, "init", function() {
            this.generateBrowserKeyDictionary()
        }), g(h, "setDebugLevel", function(e) {
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
        }), g(h, "setDebugFilter", function(e) {
            this.filter = e, this.debug_level1 = !0
        }), g(h, "ifDebug", function(e) {
            var t = this;
            return t.filter ? !(!t.passDebugFilter() || !t[e]) || void 0 : t[e]
        }), g(h, "passDebugFilter", function() {
            var e = this;
            if (e.debug_element && e.debug_element.id.indexOf(e.filter) > -1) return !0;
            if (e.debug_css_list)
                for (var t in e.debug_css_list) {
                    if (t.indexOf(e.filter) > -1) return !0;
                    if (String(e.debug_css_list[t]).indexOf(e.filter) > -1) return !0
                }
            return !1
        }), g(h, "generateBrowserKeyDictionary", function() {
            var e = this;
            e.deviceKeyDict = {};
            var t = document.createElement("div").style;
            for (var n in t) {
                var r = e.getPrefix(n),
                    i = e.standardizeKey(n);
                switch (u.browser) {
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
        }), g(h, "apply", function(e, t) {
            var n = this;
            n.debug_element = e, n.debug_css_list = t, n.ifDebug("debug_level1");
            var r = {};
            for (var i in t) i.match(/^transform\(/) ? r[i] = t[i] : (n.ifDebug("debug_level1"), e.style[n.getDeviceKey(i)] = t[i]);
            n.applyTransforms(e, r), n.ifDebug("debug_level1"), n.debug_element = null, n.debug_css_list = null
        }), g(h, "conformCssObject", function(e, t) {
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
        }), g(h, "conformCssString", function(e, t) {
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
                        for (var u in s) n.ifDebug("debug_level2"), r[s[u][0]] = s[u][1]
                    }
            }
            return n.debug_element = null, r
        }), g(h, "conformCssKeyValue", function(e, t) {
            this.ifDebug("debug_level1");
            var n = {};
            return n[e] = t, this.conformCssObject(n)
        }), g(h, "applyTransforms", function(e, t) {
            var n = this;
            n.ifDebug("debug_level1");
            var r = new c,
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
                var u = -a.rz;
                r.rotate(u * (Math.PI / 180)), r.rotate(o.rz * (Math.PI / 180)), a.rz = o.rz
            }
            void 0 != o.sx && (u = 1 / a.sx, r.scale(u, 1), r.scale(o.sx, 1), a.sx = o.sx), void 0 != o.sy && (u = 1 / a.sy, r.scale(1, u), r.scale(1, o.sy), a.sy = o.sy), void 0 != o.tx && (r.translate(o.tx, 0), a.tx = o.tx), void 0 != o.ty && (r.translate(0, o.ty), a.ty = o.ty), e.transforms = a, n.ifDebug("debug_level2"), e.style[n.getDeviceKey("transform")] = r.getCss()
        }), g(h, "conformKeyValue", function(e, t) {
            e = String(e).trim(), t = String(t).trim();
            var n = this.standardizeKey(e);
            return this.conformValue(n, t)
        }), g(h, "hasPrefix", function(e) {
            return e.search(this.matchPrefixRegex()) > -1
        }), g(h, "getPrefix", function(e) {
            var t = e.match(this.matchPrefixRegex());
            return t ? t[1].replace(/-/g, "").toLowerCase() : null
        }), g(h, "stripPrefix", function(e) {
            var t = e.replace(this.matchPrefixRegex(), "");
            return t.charAt(0).toLowerCase() + t.slice(1)
        }), g(h, "getDeviceKey", function(e) {
            return e in this.deviceKeyDict ? this.deviceKeyDict[e] : e
        }), g(h, "prependPrefix", function(e, t) {
            return e + t.replace(/^(.)/, function(e) {
                return e.charAt(0).toUpperCase()
            })
        }), g(h, "standardizeKey", function(e) {
            var t = this;
            return e = (e = t.stripPrefix(e)) in t.keyFormatExceptions() ? t.keyFormatExceptions()[e] : t.camelateKey(e), t.ifDebug("debug_level2"), e
        }), g(h, "camelateKey", function(e) {
            return e.replace(/-(.)/g, function(e) {
                return e.charAt(1).toUpperCase()
            })
        }), g(h, "keyFormatExceptions", function() {
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
        }), g(h, "conformValue", function(e, t) {
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
                for (var u = /([a-z0-9]+)\(([^\)]+)\)/gi; params = u.exec(t);) {
                    var c = params[2].replace(/\s/g, "").split(",").map(function(e, t, n) {
                        return Number(e.match(r.matchNumberRegex())[0])
                    });
                    switch (params[1]) {
                        case "translate":
                            i.push(["transform( tx )", c[0]]), i.push(["transform( ty )", c[1]]);
                            break;
                        case "translateX":
                            i.push(["transform( tx )", c[0]]);
                            break;
                        case "translateY":
                            i.push(["transform( ty )", c[0]]);
                            break;
                        case "rotate":
                            i.push(["transform( rz )", c[0]]);
                            break;
                        case "scale":
                            i.push(["transform( sx )", c[0]]), i.push(["transform( sy )", c[1]]);
                            break;
                        case "scaleX":
                            i.push(["transform( sx )", c[0]]);
                            break;
                        case "scaleY":
                            i.push(["transform( sy )", c[0]])
                    }
                }
            } else r.ifDebug("debug_level2"), n = t;
            if (void 0 != n) {
                r.ifDebug("debug_level2");
                for (var l = e.split(/\,/), d = 0; d < l.length; d++) i.push([l[d], n])
            }
            return i
        }), g(h, "matchNumberRegex", function() {
            return /^[+-]?[0-9]*\.?[0-9]+/
        }), g(h, "matchPrefixRegex", function() {
            return /^-*(moz-*|webkit-*|ms-*|o-)/i
        });
        var v, p = [],
            m = [],
            _ = [],
            b = [],
            w = {},
            y = !1,
            x = 0,
            E = function() {},
            D = function() {};

        function S(t, n) {
            if (D = n || e.failAd, y) b.push(t);
            else {
                v = new r.default({
                    name: "imageManagerLoader",
                    onComplete: function(e) {
                        y = !1, k(e.getAllContentRaw())
                    },
                    onFail: function(e) {
                        y = !1, D.call()
                    }
                }), E = [].concat(t), b = [];
                var i = p.slice();
                p = [], v.add(new r.default(i, {
                    name: "dynamicImages-" + x++,
                    fileType: "jpg"
                }));
                var a = m.slice();
                m = [], v.add(new r.default(a, {
                    name: "dynamicCanvasImages-" + x++,
                    fileType: "jpg",
                    crossOrigin: "anonymous"
                }));
                var o = _.slice();
                _ = [];
                for (var s = 0; s < o.length; s++) v.add(o[s]);
                y = !0, v.load()
            }
        }

        function k(e) {
            for (var t = 0; t < e.length; t++)
                if (e[t] instanceof Image || e[t] instanceof SVGElement) {
                    var n = e[t];
                    r = e[t].id, void 0 != w[r] || (w[n.id] = n)
                }
            var r;
            for (t = 0; t < E.length; t++) E[t].call();
            b.length > 0 && S(b)
        }
        var C, A, P = {},
            T = !1,
            M = function(e, t, n, r, i, a, o, s, u, c, l) {
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
                    y: u || 0
                }, d.velocity = {
                    x: c || 0,
                    y: l || 0
                }, d.direction = {
                    x: c > 0 ? "right" : c < 0 ? "left" : null,
                    y: l > 0 ? "down" : l < 0 ? "up" : null
                }, d
            },
            R = function(e) {
                return void 0 != P[e]
            },
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
                    var r = n.eventList.indexOf(e);
                    r >= 0 && n.eventList.splice(r, 1), n._checkDragEnabled(), n._elemRemove(e, t)
                }, t._reset = function() {
                    var e = this;
                    e._cursor = "mouse", e._start = "down", e._end = "up", e.elem.addEventListener("touchstart", e._handleTouchStart), "ios" != u.os && e.elem.addEventListener("mousedown", e._handleDown)
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
                    t.debug, T || (T = !0, P = {}), t.elem.removeEventListener("touchstart", t._handleTouchStart), "ios" != u.os && t.elem.removeEventListener("mousedown", t._handleDown), t._isDragging = !1, t._add(t._end, t._handleUp), t._add("move", t._handleDrag);
                    var n = t._getEventScope(e),
                        r = n.pageX,
                        i = n.pageY,
                        a = t.elem.getBoundingClientRect(),
                        o = r - a.left,
                        s = i - a.top,
                        c = t.elem.x || B(t.elem, "x"),
                        l = t.elem.y || B(t.elem, "y"),
                        d = a.left - c,
                        f = a.top - l;
                    t._oX = d + o, t._oY = f + s;
                    var g = r - t._oX,
                        h = i - t._oY;
                    t._sX = t._p1X = t._p2X = r, t._sY = t._p1Y = t._p2Y = i,
                        function(e) {
                            if (!R(e)) {
                                var n = new M(e, r, i, o, s, g, h);
                                t.debug, t.elem.dispatchEvent(n)
                            }
                        }("onPress")
                }, t._handleUp = function(e, t) {
                    var n = this;
                    n.debug, n._remove(n._end, n._handleUp), n._remove("move", n._handleDrag);
                    var r = n._getEventScope(e),
                        i = r.pageX,
                        a = r.pageY,
                        o = n.elem.getBoundingClientRect(),
                        s = i - o.left,
                        u = a - o.top,
                        c = i - n._oX,
                        l = a - n._oY;
                    !0 !== t && v("onRelease");
                    var d = o.top + window.pageYOffset,
                        f = d + o.height,
                        g = o.left + window.pageXOffset,
                        h = g + o.width;

                    function v(e) {
                        if (!R(e)) {
                            var t = new M(e, i, a, s, u, c, l, 0, 0, n._vX, n._vY);
                            n.debug, n.elem.dispatchEvent(t)
                        }
                    }
                    n._isDragging ? n._isDragEnabled && n._dragEndOrSwipe("onDragStop") : i > g && i < h && a > d && a < f && v("onSelect"), n._isDragging && n._dragEndOrSwipe("onSwipe"), n._reset(), e.preventDefault(), T = !1
                }, t._handleTouchStart = function(e) {
                    var t = this;
                    t.debug, t._cursor = "touch", t._start = "start", t._end = "end", t._handleDown(e)
                }, t._handleDrag = function(e) {
                    var t = this;
                    t.debug;
                    var n = t._getEventScope(e),
                        r = n.pageX,
                        i = n.pageY,
                        a = r - t._p1X,
                        o = r - t._p2X;
                    t._vX = (o - a) / 2 + a;
                    var s = i - t._p1Y,
                        u = i - t._p2Y;
                    t._vY = (u - s) / 2 + s;
                    var c = r - t._oX,
                        l = i - t._oY,
                        d = t.elem.getBoundingClientRect(),
                        f = r - d.left,
                        g = i - d.top;

                    function h(e) {
                        if (!R(e)) {
                            var n = new M(e, r, i, f, g, c, l, t._p1X - t._sX, t._p1Y - t._sY, t._vX, t._vY);
                            t.debug, t.elem.dispatchEvent(n)
                        }
                    }
                    t._isDragging ? t._isDragEnabled && h("onDrag") : (Math.abs(t._sX - r) > t._give || Math.abs(t._sY - i) > t._give) && (t._isDragging = !0, t._isDragEnabled && h("onDragStart")), t._p2X = t._p1X, t._p1X = r, t._p2Y = t._p1Y, t._p1Y = i
                }, t._dragEndOrSwipe = function(e) {
                    var t = this;
                    if (t.debug, !R(name)) {
                        var n = t.elem.getBoundingClientRect(),
                            r = new M(e, t._p1X, t._p1Y, t._p1X - n.left, t._p1Y - n.top, t._p1X - t._oX, t._p1Y - t._oY, t._p2X - t._sX, t._p2Y - t._sY, t._vX, t._vY);
                        t.debug, t.elem.dispatchEvent(r)
                    }
                }, e
            }(),
            V = new function() {
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
                        var n = new X(e);
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
                    i(e).register(t, n), z(e, "cursor", "pointer"), z(e, "pointer-events", "auto")
                }, e.remove = e.removeEventListener = function(e, t, n) {
                    var r = i(e);
                    r && (r.unregister(t, n), r.eventList.length <= 0 && z(e, "cursor", "auto"))
                }, e.disable = function(e) {
                    var t = i(e);
                    n.push(t), r ? (t.register(GestureEvent.CLICK, s), z(e, "cursor", "auto")) : z(e, "pointer-events", "none")
                }, e.disableChildren = function(e) {
                    a(e, !1)
                }, e.enable = function(e) {
                    for (var t = i(e), a = 0; a < n.length; a++)
                        if (t == n[a]) {
                            r ? t.unregister(GestureEvent.CLICK, s) : (z(e, "pointer-events", "auto"), z(e, "cursor", "pointer"));
                            break
                        }
                }, e.enableChildren = function(e) {
                    a(e, !0)
                }
            },
            O = {
                ENABLED: "uiComponentEnabled",
                RESIZE: "uiResize",
                SLIDER_UPDATE: "uiSliderUpdate",
                get componentEnabled() {
                    return C || (C = new CustomEvent("uiComponentEnabled")), C
                },
                get sliderUpdate() {
                    return A || (A = new CustomEvent("uiSliderUpdate")), A
                }
            };

        function L(e) {
            var t = this;
            t.pool = [], t.fps = e, t._frameTime = Math.floor(1e3 / t.fps), t._prevTime = 0, t._startTime = 0, t._nextTime = 0, t._maxLag = 400, t._shiftLag = 30, t._paused = !1, t._prevCallTime = Date.now(), t.diffTime = 0
        }
        L.prototype = {
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
        for (var F = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent), Y = ["webkit", "moz"], I = 0; !window.requestAnimationFrame && I < Y.length; I++) window.requestAnimationFrame = window[Y[I] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[Y[I] + "CancelAnimationFrame"] || window[Y[I] + "CancelRequestAnimationFrame"];

        function j(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n, e
        }
        window.requestAnimationFrame && window.cancelAnimationFrame && !F || (window.requestAnimationFrame = function(e) {
            return setTimeout(e, 17)
        }, window.cancelAnimationFrame = clearTimeout);
        var K = function() {};

        function z(e, t) {
            e = o(e);
            var n = {};
            if (arguments.length > 2)
                for (var r = 1; r < arguments.length; r += 2) n = h.conformCssKeyValue(arguments[r], arguments[r + 1]);
            else n = "string" == typeof arguments[1] ? h.conformCssString(arguments[1], e) : h.conformCssObject(arguments[1], e);
            h.apply(e, n)
        }

        function B(e, t) {
            var n;
            if (e = o(e), "x" == t || "y" == t) {
                var r = e.style[h.getDeviceKey("transform")].replace(/[\s\(\)matrix]/g, "").split(",");
                n = r.length < 6 ? 0 : +r["x" == t ? 4 : 5]
            } else n = window.getComputedStyle(e, null).getPropertyValue(t).replace(/px/, ""), isNaN(n) || (n = parseInt(n, 10));
            return n
        }

        function N(e, t) {
            if (!document.getElementById(e)) {
                var n = document.createElement("style");
                n.type = "text/css", n.id = e;
                var r = 2 === arguments.length ? t : "";
                if (arguments.length > 2)
                    for (var i = 0; i < arguments.length - 1; i += 2) r += arguments[i + 1].replace(/\,\s+/g, ","), r += " { " + (arguments[i + 2] || "") + " }\n";
                n.innerHTML = r, document.getElementsByTagName("head")[0].appendChild(n)
            }
        }

        function U(e, t) {
            for (var n = o(e), r = 0; r < arguments.length - 1; r++) n.classList.add(arguments[r + 1])
        }
        j(K, "_isPaused", !0), j(K, "_isActive", !0), j(K, "_sets", {}), j(K, "_RAF", void 0), j(K, "register", function(e, t, n) {
            var r = K;
            n = n || 30, r._sets[n] || (r._sets[n] = new L(n));
            for (var i = r._sets[n].pool, a = 0; a < i.length; a++)
                if (i[a].from === e && i[a].handler === t) return;
            i.push({
                handler: t,
                from: e
            }), r._isActive && r.resume()
        }), j(K, "unregister", function(e, t, n) {
            var r = K;
            for (var i in r._sets)
                if (!n || i == n) {
                    for (var a = r._sets[i].pool, o = 0; o < a.length; o++)
                        if (a[o].from === e && a[o].handler === t) {
                            a.splice(o, 1);
                            break
                        }
                    0 == a.length && delete r._sets[i]
                }
            0 === Object.keys(r._sets).length && (r.pause(), r._isActive = !0)
        }), j(K, "pause", function() {
            var e = K;
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
        }), j(K, "resume", function() {
            var e = K,
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
        }), j(K, "secondsAsFrames", function(e) {
            return 1 / e
        }), j(K, "tick", function() {
            var e = K;
            if (!e._isPaused) {
                for (var t in e._sets) e._sets[t].tick();
                window.requestAnimationFrame(e.tick)
            }
        });
        var q = [{
                x: "offsetWidth",
                y: "offsetHeight",
                parent: "parentNode"
            }, {
                x: "width",
                y: "height",
                parent: "stage"
            }],
            W = "alignCenter";

        function H(e, t) {
            var n = function(e, t) {
                var n = e.canvas || o(e),
                    r = {},
                    i = !1 !== t.snap,
                    a = G(e) ? 0 : 1;
                for (var s in "string" == typeof t && (t = Z(t)), t)
                    if ("x" == s || "y" == s) {
                        var u, c, l = t[s];
                        if (!l) continue;
                        "string" == typeof l && (l = {
                            type: l
                        });
                        var d = 0,
                            f = !1,
                            g = l.offset || 0;
                        if (void 0 !== l.against) {
                            var h = 0;
                            G(u = l.against) ? u.canvas ? h = 1 : d = B(u, s) : "number" == typeof u ? (f = !0, d = u) : (d = u[s], h = 1), c = q[h][s], l.type === W && (t[s].outer = !1)
                        } else u = n[q[a].parent], c = q[a][s];
                        var v = n[q[a][s]];
                        switch (e._type) {
                            case "arc":
                            case "path":
                                switch (l.type) {
                                    case W:
                                        v = 0;
                                        break;
                                    default:
                                        g += v / 2
                                }
                                break;
                            case "text":
                                if ("x" === s) switch (e.alignText) {
                                    case "center":
                                        v = 0;
                                    case "right":
                                        v *= -1
                                }
                        }
                        var p = Z(l.type, v, f ? 0 : u[c], !f && !!t[s].outer);
                        null != p && (p += d + g, r[s] = i ? Math.round(p) : p)
                    }
                return r
            }(e, t);
            if (G(e)) z(e.canvas || o(e), n);
            else
                for (var r in n) e[r] = n[r];
            return n
        }

        function Z(e, t, n, r) {
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

        function G(e) {
            return e instanceof HTMLElement || void 0 != e.canvas
        }
        var $ = function() {
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
                }, t
            }(),
            J = function(e, t) {
                N("RED_uiElement", ".ui-elem", "position:absolute;"), t = t || "div";
                var n = document.createElement(t);
                return U(n, "ui-elem"), (e = e || {}).id && (n.id = e.id), z(n, e.css), e.target && o(e.target).appendChild(n), Object.defineProperty(n, "parent", {
                    get: function() {
                        return n.parentNode
                    }
                }), n.toString = function() {
                    return "[object UIDiv]"
                }, n
            },
            Q = function(e) {
                var t, n;

                function r(t, n) {
                    var r, a = !0,
                        s = !0,
                        u = n || "div";
                    t = t || {}, n = "svg" == u ? "div" : n;
                    var c = i(i(r = e.call(this, t, n) || this));
                    return c._align = t.align, Object.defineProperties(c, {
                        x: {
                            get: function() {
                                return B(c, "x")
                            },
                            set: function(e) {
                                z(c, {
                                    x: e
                                })
                            }
                        },
                        y: {
                            get: function() {
                                return B(c, "y")
                            },
                            set: function(e) {
                                z(c, {
                                    y: e
                                })
                            }
                        },
                        enabled: {
                            get: function() {
                                return a
                            },
                            set: function(e) {
                                a = e, c.dispatchEvent(O.componentEnabled)
                            }
                        },
                        showing: {
                            get: function() {
                                return s
                            },
                            set: function() {}
                        }
                    }), "canvas" != u && "svg" != u && Object.defineProperties(c, {
                        width: {
                            get: function() {
                                return c.offsetWidth
                            },
                            set: function(e) {
                                z(c, {
                                    width: e
                                });
                                var t = new CustomEvent(O.RESIZE);
                                t.direction = "width", c.dispatchEvent(t)
                            }
                        },
                        height: {
                            get: function() {
                                return c.offsetHeight
                            },
                            set: function(e) {
                                z(c, {
                                    height: e
                                });
                                var t = new CustomEvent(O.RESIZE);
                                t.direction = "height", c.dispatchEvent(t)
                            }
                        }
                    }), c.hide = function() {
                        c.style.display = "none", s = !1
                    }, c.show = function() {
                        try {
                            c.style.removeProperty("display")
                        } catch (e) {
                            c.style.display = null
                        }
                        s = !0
                    }, c.setCss = function(e) {
                        z(c, e)
                    }, c.addChild = function(e) {
                        var t = o(e);
                        c.appendChild(t), e._align && H(e, e._align)
                    }, c.inspect = function() {
                        for (var e = {}, t = Object.getOwnPropertyNames(c), n = 0; n < t.length; n++) {
                            var r = c[t[n]];
                            e[t[n]] = r
                        }
                    }, c.toString = function() {
                        return "[object UIComponent]"
                    }, c._initAlign = function(e) {
                        var n = e ? 1 == e : void 0 != t.target;
                        t.align && n && H(c, t.align)
                    }, c.enabled = !0, c._initAlign(), c || i(r)
                }
                return n = e, (t = r).prototype = Object.create(n.prototype), t.prototype.constructor = t, t.__proto__ = n, r
            }(J),
            ee = function(e) {
                N("RED_uiImage", ".ui-image", "background-repeat:no-repeat; background-size:contain;");
                var t = !0,
                    n = null,
                    r = !1,
                    i = "contain",
                    a = !!e.aspectRatio;
                if (e.css, !e.source) throw new Error("UIImage : No image source set on '" + e.id + "'");
                e.css = e.css || {};
                var o = new Q(e);

                function s(i) {
                    var s, u, c = r ? 2 : 1,
                        l = n.width / n.height,
                        d = e.css.width || n.width,
                        f = e.css.height || n.height,
                        g = void 0 == e.css.width,
                        h = void 0 == e.css.height;
                    t || (g = "height" == i, h = "width" == i, d = o.width, f = o.height), g && (s = a && !h ? f * l : d / c, o.style.width = Math.round(s) + "px"), h && (u = a && !g ? d / l : f / c, o.style.height = Math.round(u) + "px")
                }
                return U(o, "ui-image"), Object.defineProperties(o, {
                    source: {
                        get: function() {
                            return n
                        },
                        set: function(e) {
                            n = function(e) {
                                if (w[e]) return w[e];
                                throw new Error("ImageManager : No image named '" + e + "' has been loaded")
                            }(e), o.style.backgroundImage = "url(" + n.src + ")"
                        }
                    },
                    retina: {
                        get: function() {
                            return r
                        },
                        set: function(e) {
                            r = e, s()
                        }
                    },
                    ratio: {
                        get: function() {
                            return i
                        },
                        set: function(e) {
                            i = e, o.style.backgroundSize = e
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
                }, o.addEventListener(O.RESIZE, function(e) {
                    s(e.direction)
                }), o.source = e.source, o.retina = !!e.retina, e.ratio && (o.ratio = e.ratio), o._initAlign(), t = !1, o
            };
        window.Control = new function() {
            this.prepare = function(t) {
                var n = this;
                (function(e) {
                    return new Promise(function(t, n) {
                        var r;
                        u.init(), h.init(), (r = e) && k(r.getAllContentRaw()), Promise.all([]).then(function() {
                            t()
                        }).catch(function(e) {
                            n(e)
                        })
                    })
                })(t).then(function() {
                    return $.init()
                }).then(function() {
                    return new Promise(function(t, n) {
                        S(t, e.failAd)
                    })
                }).then(function() {
                    n.prepareBuild()
                }).catch(function(e) {
                    throw e
                })
            }, this.prepareBuild = function() {
                Control.preMarkup(), View.main = new function() {
                    var e = o("main");
                    return z(e, {
                        position: "absolute",
                        width: adParams.adWidth,
                        height: adParams.adHeight,
                        opacity: 0,
                        left: "0px",
                        top: "0px",
                        overflow: "hidden",
                        userSelect: "none"
                    }), new ee({
                        target: e,
                        source: "japan",
                        align: W,
                        aspectRatio: !0,
                        css: {
                            width: adParams.adWidth - 50
                        }
                    }), new ee({
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
                    new function(e) {
                        var t, n, r = new J(e);
                        U(r, "ui-border"), Object.defineProperties(r, {
                            size: {
                                get: function() {
                                    return t
                                },
                                set: function(e) {
                                    void 0 != e && t != e && z(r, {
                                        borderWidth: t = e
                                    })
                                }
                            },
                            color: {
                                get: function() {
                                    return n
                                },
                                set: function(e) {
                                    e && n != e && z(r, {
                                        borderColor: n = e
                                    })
                                }
                            }
                        }), r.toString = function() {
                            return "[object UIBorder]"
                        }, V.disable(r), r.color = e.color, r.size = e.size
                    }({
                        target: View.main,
                        size: 1,
                        color: "#000000"
                    })
                }, Control.postMarkup(), Animation.startAd()
            }, this.preMarkup = function() {}, this.postMarkup = function() {
                V.add(View.main, "onSelect", Control.handleClick)
            }, this.animationComplete = function() {}, this.handleClick = function(e) {
                Network.exit(clickTag)
            }
        }, window.Animation = new function() {
            this.startAd = function() {
                e.removePreloader(), z(View.main, {
                    opacity: 1
                })
            }
        }
    }).call(this, n(1))
}]);