"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[1255], {
    37054: function(e, t, n) {
        n.d(t, {
            Db: function() {
                return B
            },
            Jx: function() {
                return j
            },
            XL: function() {
                return J
            },
            b6: function() {
                return M
            }
        });
        var o = n(85893)
          , s = n(67294)
          , i = n(73935)
          , r = function(e, t) {
            return r = Object.setPrototypeOf || {
                __proto__: []
            }instanceof Array && function(e, t) {
                e.__proto__ = t
            }
            || function(e, t) {
                for (var n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
            }
            ,
            r(e, t)
        };
        function a(e, t) {
            if ("function" !== typeof t && null !== t)
                throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        var l = function() {
            return l = Object.assign || function(e) {
                for (var t, n = 1, o = arguments.length; n < o; n++)
                    for (var s in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
                return e
            }
            ,
            l.apply(this, arguments)
        };
        function u(e, t) {
            var n = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                    t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
            }
            return n
        }
        function p(e, t, n, o) {
            return new (n || (n = Promise))((function(s, i) {
                function r(e) {
                    try {
                        l(o.next(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function a(e) {
                    try {
                        l(o.throw(e))
                    } catch (t) {
                        i(t)
                    }
                }
                function l(e) {
                    var t;
                    e.done ? s(e.value) : (t = e.value,
                    t instanceof n ? t : new n((function(e) {
                        e(t)
                    }
                    ))).then(r, a)
                }
                l((o = o.apply(e, t || [])).next())
            }
            ))
        }
        function c(e, t) {
            var n, o, s, i, r = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            };
            return i = {
                next: a(0),
                throw: a(1),
                return: a(2)
            },
            "function" === typeof Symbol && (i[Symbol.iterator] = function() {
                return this
            }
            ),
            i;
            function a(i) {
                return function(a) {
                    return function(i) {
                        if (n)
                            throw new TypeError("Generator is already executing.");
                        for (; r; )
                            try {
                                if (n = 1,
                                o && (s = 2 & i[0] ? o.return : i[0] ? o.throw || ((s = o.return) && s.call(o),
                                0) : o.next) && !(s = s.call(o, i[1])).done)
                                    return s;
                                switch (o = 0,
                                s && (i = [2 & i[0], s.value]),
                                i[0]) {
                                case 0:
                                case 1:
                                    s = i;
                                    break;
                                case 4:
                                    return r.label++,
                                    {
                                        value: i[1],
                                        done: !1
                                    };
                                case 5:
                                    r.label++,
                                    o = i[1],
                                    i = [0];
                                    continue;
                                case 7:
                                    i = r.ops.pop(),
                                    r.trys.pop();
                                    continue;
                                default:
                                    if (!(s = (s = r.trys).length > 0 && s[s.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                        r = 0;
                                        continue
                                    }
                                    if (3 === i[0] && (!s || i[1] > s[0] && i[1] < s[3])) {
                                        r.label = i[1];
                                        break
                                    }
                                    if (6 === i[0] && r.label < s[1]) {
                                        r.label = s[1],
                                        s = i;
                                        break
                                    }
                                    if (s && r.label < s[2]) {
                                        r.label = s[2],
                                        r.ops.push(i);
                                        break
                                    }
                                    s[2] && r.ops.pop(),
                                    r.trys.pop();
                                    continue
                                }
                                i = t.call(e, r)
                            } catch (a) {
                                i = [6, a],
                                o = 0
                            } finally {
                                n = s = 0
                            }
                        if (5 & i[0])
                            throw i[1];
                        return {
                            value: i[0] ? i[1] : void 0,
                            done: !0
                        }
                    }([i, a])
                }
            }
        }
        function d(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var g = d((function(e, t, n, o, s, i, r, a) {
            if (!e) {
                var l;
                if (void 0 === t)
                    l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var u = [n, o, s, i, r, a]
                      , p = 0;
                    (l = new Error(t.replace(/%s/g, (function() {
                        return u[p++]
                    }
                    )))).name = "Invariant Violation"
                }
                throw l.framesToPop = 1,
                l
            }
        }
        ))
          , h = (0,
        s.createContext)(null);
        function m(e, t, n, o) {
            var s, i, r = {};
            return s = e,
            i = function(e, s) {
                var i = n[s];
                i !== t[s] && (r[s] = i,
                e(o, i))
            }
            ,
            Object.keys(s).forEach((function(e) {
                return i(s[e], e)
            }
            )),
            r
        }
        function f(e, t, n) {
            var o, s, i, r = (o = n,
            s = function(n, o, s) {
                return "function" === typeof e[s] && n.push(google.maps.event.addListener(t, o, e[s])),
                n
            }
            ,
            i = [],
            Object.keys(o).reduce((function(e, t) {
                return s(e, o[t], t)
            }
            ), i));
            return r
        }
        function v(e) {
            google.maps.event.removeListener(e)
        }
        function y(e) {
            void 0 === e && (e = []),
            e.forEach(v)
        }
        function L(e) {
            var t = e.updaterMap
              , n = e.eventMap
              , o = e.prevProps
              , s = e.nextProps
              , i = e.instance
              , r = f(s, i, n);
            return m(t, o, s, i),
            r
        }
        var C = {
            onDblClick: "dblclick",
            onDragEnd: "dragend",
            onDragStart: "dragstart",
            onMapTypeIdChanged: "maptypeid_changed",
            onMouseMove: "mousemove",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseDown: "mousedown",
            onMouseUp: "mouseup",
            onRightClick: "rightclick",
            onTilesLoaded: "tilesloaded",
            onBoundsChanged: "bounds_changed",
            onCenterChanged: "center_changed",
            onClick: "click",
            onDrag: "drag",
            onHeadingChanged: "heading_changed",
            onIdle: "idle",
            onProjectionChanged: "projection_changed",
            onResize: "resize",
            onTiltChanged: "tilt_changed",
            onZoomChanged: "zoom_changed"
        }
          , b = {
            extraMapTypes: function(e, t) {
                t.forEach((function(t, n) {
                    e.mapTypes.set(String(n), t)
                }
                ))
            },
            center: function(e, t) {
                e.setCenter(t)
            },
            clickableIcons: function(e, t) {
                e.setClickableIcons(t)
            },
            heading: function(e, t) {
                e.setHeading(t)
            },
            mapTypeId: function(e, t) {
                e.setMapTypeId(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            streetView: function(e, t) {
                e.setStreetView(t)
            },
            tilt: function(e, t) {
                e.setTilt(t)
            },
            zoom: function(e, t) {
                e.setZoom(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.children
              , n = e.options
              , i = e.id
              , r = e.mapContainerStyle
              , a = e.mapContainerClassName
              , l = e.center
              , u = e.onClick
              , p = e.onDblClick
              , c = e.onDrag
              , d = e.onDragEnd
              , g = e.onDragStart
              , m = e.onMouseMove
              , f = e.onMouseOut
              , v = e.onMouseOver
              , y = e.onMouseDown
              , L = e.onMouseUp
              , C = e.onRightClick
              , b = e.onCenterChanged
              , M = e.onLoad
              , E = e.onUnmount
              , x = (0,
            s.useState)(null)
              , k = x[0]
              , w = x[1]
              , S = (0,
            s.useRef)(null)
              , P = (0,
            s.useState)(null)
              , I = P[0]
              , D = P[1]
              , O = (0,
            s.useState)(null)
              , B = O[0]
              , _ = O[1]
              , T = (0,
            s.useState)(null)
              , U = T[0]
              , z = T[1]
              , R = (0,
            s.useState)(null)
              , A = R[0]
              , Z = R[1]
              , V = (0,
            s.useState)(null)
              , W = V[0]
              , j = V[1]
              , N = (0,
            s.useState)(null)
              , H = N[0]
              , G = N[1]
              , F = (0,
            s.useState)(null)
              , Y = F[0]
              , $ = F[1]
              , K = (0,
            s.useState)(null)
              , q = K[0]
              , J = K[1]
              , X = (0,
            s.useState)(null)
              , Q = X[0]
              , ee = X[1]
              , te = (0,
            s.useState)(null)
              , ne = te[0]
              , oe = te[1]
              , se = (0,
            s.useState)(null)
              , ie = se[0]
              , re = se[1]
              , ae = (0,
            s.useState)(null)
              , le = ae[0]
              , ue = ae[1];
            return (0,
            s.useEffect)((function() {
                n && null !== k && k.setOptions(n)
            }
            ), [k, n]),
            (0,
            s.useEffect)((function() {
                null !== k && "undefined" !== typeof l && k.setCenter(l)
            }
            ), [k, l]),
            (0,
            s.useEffect)((function() {
                k && p && (null !== B && google.maps.event.removeListener(B),
                _(google.maps.event.addListener(k, "dblclick", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                k && d && (null !== U && google.maps.event.removeListener(U),
                z(google.maps.event.addListener(k, "dragend", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                k && g && (null !== A && google.maps.event.removeListener(A),
                Z(google.maps.event.addListener(k, "dragstart", g)))
            }
            ), [g]),
            (0,
            s.useEffect)((function() {
                k && y && (null !== W && google.maps.event.removeListener(W),
                j(google.maps.event.addListener(k, "mousedown", y)))
            }
            ), [y]),
            (0,
            s.useEffect)((function() {
                k && m && (null !== H && google.maps.event.removeListener(H),
                G(google.maps.event.addListener(k, "mousemove", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                k && f && (null !== Y && google.maps.event.removeListener(Y),
                $(google.maps.event.addListener(k, "mouseout", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                k && v && (null !== q && google.maps.event.removeListener(q),
                J(google.maps.event.addListener(k, "mouseover", v)))
            }
            ), [v]),
            (0,
            s.useEffect)((function() {
                k && L && (null !== Q && google.maps.event.removeListener(Q),
                ee(google.maps.event.addListener(k, "mouseup", L)))
            }
            ), [L]),
            (0,
            s.useEffect)((function() {
                k && C && (null !== ne && google.maps.event.removeListener(ne),
                oe(google.maps.event.addListener(k, "rightclick", C)))
            }
            ), [C]),
            (0,
            s.useEffect)((function() {
                k && u && (null !== ie && google.maps.event.removeListener(ie),
                re(google.maps.event.addListener(k, "click", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                k && c && (null !== le && google.maps.event.removeListener(le),
                ue(google.maps.event.addListener(k, "drag", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                k && b && (null !== I && google.maps.event.removeListener(I),
                D(google.maps.event.addListener(k, "center_changed", b)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                var e = null === S.current ? null : new google.maps.Map(S.current,n);
                return w(e),
                null !== e && M && M(e),
                function() {
                    null !== e && E && E(e)
                }
            }
            ), []),
            (0,
            o.jsx)("div", {
                id: i,
                ref: S,
                style: r,
                className: a,
                children: (0,
                o.jsx)(h.Provider, {
                    value: k,
                    children: null !== k ? t : null
                })
            })
        }
        ));
        var M = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    map: null
                },
                t.registeredEvents = [],
                t.mapRef = null,
                t.getInstance = function() {
                    return null === t.mapRef ? null : new google.maps.Map(t.mapRef,t.props.options)
                }
                ,
                t.panTo = function(e) {
                    var n = t.getInstance();
                    n && n.panTo(e)
                }
                ,
                t.setMapCallback = function() {
                    null !== t.state.map && t.props.onLoad && t.props.onLoad(t.state.map)
                }
                ,
                t.getRef = function(e) {
                    t.mapRef = e
                }
                ,
                t
            }
            return a(t, e),
            t.prototype.componentDidMount = function() {
                var e = this.getInstance();
                this.registeredEvents = L({
                    updaterMap: b,
                    eventMap: C,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        map: e
                    }
                }
                ), this.setMapCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.map && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: b,
                    eventMap: C,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.map
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.map && (this.props.onUnmount && this.props.onUnmount(this.state.map),
                y(this.registeredEvents))
            }
            ,
            t.prototype.render = function() {
                return (0,
                o.jsx)("div", {
                    id: this.props.id,
                    ref: this.getRef,
                    style: this.props.mapContainerStyle,
                    className: this.props.mapContainerClassName,
                    children: (0,
                    o.jsx)(h.Provider, {
                        value: this.state.map,
                        children: null !== this.state.map ? this.props.children : null
                    })
                })
            }
            ,
            t
        }(s.PureComponent)
          , E = "undefined" !== typeof document;
        function x(e) {
            var t = e.url
              , n = e.id
              , o = e.nonce;
            return E ? new Promise((function(e, s) {
                var i = document.getElementById(n)
                  , r = window;
                if (i) {
                    var a = i.getAttribute("data-state");
                    if (i.src === t && "error" !== a) {
                        if ("ready" === a)
                            return e(n);
                        var l = r.initMap
                          , u = i.onerror;
                        return r.initMap = function() {
                            l && l(),
                            e(n)
                        }
                        ,
                        void (i.onerror = function(e) {
                            u && u(e),
                            s(e)
                        }
                        )
                    }
                    i.remove()
                }
                var p = document.createElement("script");
                p.type = "text/javascript",
                p.src = t,
                p.id = n,
                p.async = !0,
                p.nonce = o || "",
                p.onerror = function(e) {
                    p.setAttribute("data-state", "error"),
                    s(e)
                }
                ,
                r.initMap = function() {
                    p.setAttribute("data-state", "ready"),
                    e(n)
                }
                ,
                document.head.appendChild(p)
            }
            )).catch((function(e) {
                throw console.error("injectScript error: ", e),
                e
            }
            )) : Promise.reject(new Error("document is undefined"))
        }
        function k(e) {
            var t = e.href;
            return !(!t || 0 !== t.indexOf("https://fonts.googleapis.com/css?family=Roboto") && 0 !== t.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")) || ("style" === e.tagName.toLowerCase() && e.styleSheet && e.styleSheet.cssText && 0 === e.styleSheet.cssText.replace("\r\n", "").indexOf(".gm-style") ? (e.styleSheet.cssText = "",
            !0) : "style" === e.tagName.toLowerCase() && e.innerHTML && 0 === e.innerHTML.replace("\r\n", "").indexOf(".gm-style") ? (e.innerHTML = "",
            !0) : "style" === e.tagName.toLowerCase() && !e.styleSheet && !e.innerHTML)
        }
        function w() {
            var e = document.getElementsByTagName("head")[0];
            if (e) {
                var t = e.insertBefore.bind(e);
                e.insertBefore = function(n, o) {
                    return k(n) || Reflect.apply(t, e, [n, o]),
                    n
                }
                ;
                var n = e.appendChild.bind(e);
                e.appendChild = function(t) {
                    return k(t) || Reflect.apply(n, e, [t]),
                    t
                }
            }
        }
        function S(e) {
            var t = e.googleMapsApiKey
              , n = e.googleMapsClientId
              , o = e.version
              , s = void 0 === o ? "weekly" : o
              , i = e.language
              , r = e.region
              , a = e.libraries
              , l = e.channel
              , u = e.mapIds
              , p = e.authReferrerPolicy
              , c = [];
            return g(t && n || !(t && n), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."),
            t ? c.push("key=".concat(t)) : n && c.push("client=".concat(n)),
            s && c.push("v=".concat(s)),
            i && c.push("language=".concat(i)),
            r && c.push("region=".concat(r)),
            a && a.length && c.push("libraries=".concat(a.sort().join(","))),
            l && c.push("channel=".concat(l)),
            u && u.length && c.push("map_ids=".concat(u.join(","))),
            p && c.push("auth_referrer_policy=".concat(p)),
            c.push("callback=initMap"),
            "https://maps.googleapis.com/maps/api/js?".concat(c.join("&"))
        }
        var P = !1;
        function I() {
            return (0,
            o.jsx)("div", {
                children: "Loading..."
            })
        }
        var D, O = {
            id: "script-loader",
            version: "weekly"
        };
        !function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.check = (0,
                s.createRef)(),
                t.state = {
                    loaded: !1
                },
                t.cleanupCallback = function() {
                    delete window.google.maps,
                    t.injectScript()
                }
                ,
                t.isCleaningUp = function() {
                    return p(t, void 0, void 0, (function() {
                        function e(e) {
                            if (P) {
                                if (E)
                                    var t = window.setInterval((function() {
                                        P || (window.clearInterval(t),
                                        e())
                                    }
                                    ), 1)
                            } else
                                e()
                        }
                        return c(this, (function(t) {
                            return [2, new Promise(e)]
                        }
                        ))
                    }
                    ))
                }
                ,
                t.cleanup = function() {
                    P = !0;
                    var e = document.getElementById(t.props.id);
                    e && e.parentNode && e.parentNode.removeChild(e),
                    Array.prototype.slice.call(document.getElementsByTagName("script")).filter((function(e) {
                        return "string" === typeof e.src && e.src.includes("maps.googleapis")
                    }
                    )).forEach((function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    }
                    )),
                    Array.prototype.slice.call(document.getElementsByTagName("link")).filter((function(e) {
                        return "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans" === e.href
                    }
                    )).forEach((function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    }
                    )),
                    Array.prototype.slice.call(document.getElementsByTagName("style")).filter((function(e) {
                        return void 0 !== e.innerText && e.innerText.length > 0 && e.innerText.includes(".gm-")
                    }
                    )).forEach((function(e) {
                        e.parentNode && e.parentNode.removeChild(e)
                    }
                    ))
                }
                ,
                t.injectScript = function() {
                    t.props.preventGoogleFontsLoading && w(),
                    g(!!t.props.id, 'LoadScript requires "id" prop to be a string: %s', t.props.id),
                    x({
                        id: t.props.id,
                        nonce: t.props.nonce,
                        url: S(t.props)
                    }).then((function() {
                        t.props.onLoad && t.props.onLoad(),
                        t.setState((function() {
                            return {
                                loaded: !0
                            }
                        }
                        ))
                    }
                    )).catch((function(e) {
                        t.props.onError && t.props.onError(e),
                        console.error("\n          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(t.props.googleMapsApiKey || "-", ") or Client ID (").concat(t.props.googleMapsClientId || "-", ") to <LoadScript />\n          Otherwise it is a Network issue.\n        "))
                    }
                    ))
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                if (E) {
                    if (window.google && window.google.maps && !P)
                        return void console.error("google api is already presented");
                    this.isCleaningUp().then(this.injectScript).catch((function(e) {
                        console.error("Error at injecting script after cleaning up: ", e)
                    }
                    ))
                }
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                this.props.libraries !== e.libraries && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),
                E && e.language !== this.props.language && (this.cleanup(),
                this.setState((function() {
                    return {
                        loaded: !1
                    }
                }
                ), this.cleanupCallback))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e = this;
                if (E) {
                    this.cleanup();
                    window.setTimeout((function() {
                        e.check.current || (delete window.google,
                        P = !1)
                    }
                    ), 1),
                    this.props.onUnmount && this.props.onUnmount()
                }
            }
            ,
            t.prototype.render = function() {
                return (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)("div", {
                        ref: this.check
                    }), this.state.loaded ? this.props.children : this.props.loadingElement || (0,
                    o.jsx)(I, {})]
                })
            }
            ,
            t.defaultProps = O
        }(s.PureComponent);
        function B(e) {
            var t = e.id
              , n = void 0 === t ? O.id : t
              , o = e.version
              , i = void 0 === o ? O.version : o
              , r = e.nonce
              , a = e.googleMapsApiKey
              , l = e.googleMapsClientId
              , u = e.language
              , p = e.region
              , c = e.libraries
              , d = e.preventGoogleFontsLoading
              , h = e.channel
              , m = e.mapIds
              , f = e.authReferrerPolicy
              , v = (0,
            s.useRef)(!1)
              , y = (0,
            s.useState)(!1)
              , L = y[0]
              , C = y[1]
              , b = (0,
            s.useState)(void 0)
              , M = b[0]
              , k = b[1];
            (0,
            s.useEffect)((function() {
                return v.current = !0,
                function() {
                    v.current = !1
                }
            }
            ), []),
            (0,
            s.useEffect)((function() {
                E && d && w()
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                L && g(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.")
            }
            ), [L]);
            var P = S({
                version: i,
                googleMapsApiKey: a,
                googleMapsClientId: l,
                language: u,
                region: p,
                libraries: c,
                channel: h,
                mapIds: m,
                authReferrerPolicy: f
            });
            (0,
            s.useEffect)((function() {
                function e() {
                    v.current && (C(!0),
                    D = P)
                }
                E && (window.google && window.google.maps && D === P ? e() : x({
                    id: n,
                    url: P,
                    nonce: r
                }).then(e).catch((function(e) {
                    v.current && k(e),
                    console.warn("\n        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (".concat(a || "-", ") or Client ID (").concat(l || "-", ")\n        Otherwise it is a Network issue.\n      ")),
                    console.error(e)
                }
                )))
            }
            ), [n, P, r]);
            var I = (0,
            s.useRef)();
            return (0,
            s.useEffect)((function() {
                I.current && c !== I.current && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),
                I.current = c
            }
            ), [c]),
            {
                isLoaded: L,
                loadError: M,
                url: P
            }
        }
        var _ = (0,
        o.jsx)(I, {});
        (0,
        s.memo)((function(e) {
            var t = e.loadingElement
              , n = e.onLoad
              , o = e.onError
              , i = e.onUnmount
              , r = e.children
              , a = B(u(e, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]))
              , l = a.isLoaded
              , p = a.loadError;
            return (0,
            s.useEffect)((function() {
                l && "function" === typeof n && n()
            }
            ), [l, n]),
            (0,
            s.useEffect)((function() {
                p && "function" === typeof o && o(p)
            }
            ), [p, o]),
            (0,
            s.useEffect)((function() {
                return function() {
                    i && i()
                }
            }
            ), [i]),
            l ? r : t || _
        }
        ));
        var T;
        !function(e) {
            e[e.INITIALIZED = 0] = "INITIALIZED",
            e[e.LOADING = 1] = "LOADING",
            e[e.SUCCESS = 2] = "SUCCESS",
            e[e.FAILURE = 3] = "FAILURE"
        }(T || (T = {}));
        var U = {}
          , z = {
            options: function(e, t) {
                e.setOptions(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.onLoad
              , o = e.onUnmount
              , i = (0,
            s.useContext)(h)
              , r = (0,
            s.useState)(null)
              , a = r[0]
              , u = r[1];
            return (0,
            s.useEffect)((function() {
                null !== a && a.setMap(i)
            }
            ), [i]),
            (0,
            s.useEffect)((function() {
                t && null !== a && a.setOptions(t)
            }
            ), [a, t]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.TrafficLayer(l(l({}, t || {}), {
                    map: i
                }));
                return u(e),
                n && n(e),
                function() {
                    null !== a && (o && o(a),
                    a.setMap(null))
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    trafficLayer: null
                },
                t.setTrafficLayerCallback = function() {
                    null !== t.state.trafficLayer && t.props.onLoad && t.props.onLoad(t.state.trafficLayer)
                }
                ,
                t.registeredEvents = [],
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.TrafficLayer(l(l({}, this.props.options || {}), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: z,
                    eventMap: U,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        trafficLayer: e
                    }
                }
                ), this.setTrafficLayerCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.trafficLayer && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: z,
                    eventMap: U,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.trafficLayer
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.trafficLayer && (this.props.onUnmount && this.props.onUnmount(this.state.trafficLayer),
                y(this.registeredEvents),
                this.state.trafficLayer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        (0,
        s.memo)((function(e) {
            var t = e.onLoad
              , n = e.onUnmount
              , o = (0,
            s.useContext)(h)
              , i = (0,
            s.useState)(null)
              , r = i[0]
              , a = i[1];
            return (0,
            s.useEffect)((function() {
                null !== r && r.setMap(o)
            }
            ), [o]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.BicyclingLayer;
                return a(e),
                e.setMap(o),
                t && t(e),
                function() {
                    null !== e && (n && n(e),
                    e.setMap(null))
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    bicyclingLayer: null
                },
                t.setBicyclingLayerCallback = function() {
                    null !== t.state.bicyclingLayer && (t.state.bicyclingLayer.setMap(t.context),
                    t.props.onLoad && t.props.onLoad(t.state.bicyclingLayer))
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.BicyclingLayer;
                this.setState((function() {
                    return {
                        bicyclingLayer: e
                    }
                }
                ), this.setBicyclingLayerCallback)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.bicyclingLayer && (this.props.onUnmount && this.props.onUnmount(this.state.bicyclingLayer),
                this.state.bicyclingLayer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        (0,
        s.memo)((function(e) {
            var t = e.onLoad
              , n = e.onUnmount
              , o = (0,
            s.useContext)(h)
              , i = (0,
            s.useState)(null)
              , r = i[0]
              , a = i[1];
            return (0,
            s.useEffect)((function() {
                null !== r && r.setMap(o)
            }
            ), [o]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.TransitLayer;
                return a(e),
                e.setMap(o),
                t && t(e),
                function() {
                    null !== r && (n && n(r),
                    r.setMap(null))
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    transitLayer: null
                },
                t.setTransitLayerCallback = function() {
                    null !== t.state.transitLayer && (t.state.transitLayer.setMap(t.context),
                    t.props.onLoad && t.props.onLoad(t.state.transitLayer))
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.TransitLayer;
                this.setState((function() {
                    return {
                        transitLayer: e
                    }
                }
                ), this.setTransitLayerCallback)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.transitLayer && (this.props.onUnmount && this.props.onUnmount(this.state.transitLayer),
                this.state.transitLayer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var R = {
            onCircleComplete: "circlecomplete",
            onMarkerComplete: "markercomplete",
            onOverlayComplete: "overlaycomplete",
            onPolygonComplete: "polygoncomplete",
            onPolylineComplete: "polylinecomplete",
            onRectangleComplete: "rectanglecomplete"
        }
          , A = {
            drawingMode: function(e, t) {
                e.setDrawingMode(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.drawingMode
              , o = e.onCircleComplete
              , i = e.onMarkerComplete
              , r = e.onOverlayComplete
              , a = e.onPolygonComplete
              , u = e.onPolylineComplete
              , p = e.onRectangleComplete
              , c = e.onLoad
              , d = e.onUnmount
              , m = (0,
            s.useContext)(h)
              , f = (0,
            s.useState)(null)
              , v = f[0]
              , y = f[1]
              , L = (0,
            s.useState)(null)
              , C = L[0]
              , b = L[1]
              , M = (0,
            s.useState)(null)
              , E = M[0]
              , x = M[1]
              , k = (0,
            s.useState)(null)
              , w = k[0]
              , S = k[1]
              , P = (0,
            s.useState)(null)
              , I = P[0]
              , D = P[1]
              , O = (0,
            s.useState)(null)
              , B = O[0]
              , _ = O[1]
              , T = (0,
            s.useState)(null)
              , U = T[0]
              , z = T[1];
            return (0,
            s.useEffect)((function() {
                null !== v && v.setMap(m)
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                t && null !== v && v.setOptions(t)
            }
            ), [v, t]),
            (0,
            s.useEffect)((function() {
                null !== v && v.setDrawingMode(null !== n && void 0 !== n ? n : null)
            }
            ), [v, n]),
            (0,
            s.useEffect)((function() {
                v && o && (null !== C && google.maps.event.removeListener(C),
                b(google.maps.event.addListener(v, "circlecomplete", o)))
            }
            ), [v, o]),
            (0,
            s.useEffect)((function() {
                v && i && (null !== E && google.maps.event.removeListener(E),
                x(google.maps.event.addListener(v, "markercomplete", i)))
            }
            ), [v, i]),
            (0,
            s.useEffect)((function() {
                v && r && (null !== w && google.maps.event.removeListener(w),
                S(google.maps.event.addListener(v, "overlaycomplete", r)))
            }
            ), [v, r]),
            (0,
            s.useEffect)((function() {
                v && a && (null !== I && google.maps.event.removeListener(I),
                D(google.maps.event.addListener(v, "polygoncomplete", a)))
            }
            ), [v, a]),
            (0,
            s.useEffect)((function() {
                v && u && (null !== B && google.maps.event.removeListener(B),
                _(google.maps.event.addListener(v, "polylinecomplete", u)))
            }
            ), [v, u]),
            (0,
            s.useEffect)((function() {
                v && p && (null !== U && google.maps.event.removeListener(U),
                z(google.maps.event.addListener(v, "rectanglecomplete", p)))
            }
            ), [v, p]),
            (0,
            s.useEffect)((function() {
                g(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
                var e = new google.maps.drawing.DrawingManager(l(l({}, t || {}), {
                    map: m
                }));
                return n && e.setDrawingMode(n),
                o && b(google.maps.event.addListener(e, "circlecomplete", o)),
                i && x(google.maps.event.addListener(e, "markercomplete", i)),
                r && S(google.maps.event.addListener(e, "overlaycomplete", r)),
                a && D(google.maps.event.addListener(e, "polygoncomplete", a)),
                u && _(google.maps.event.addListener(e, "polylinecomplete", u)),
                p && z(google.maps.event.addListener(e, "rectanglecomplete", p)),
                y(e),
                c && c(e),
                function() {
                    null !== v && (C && google.maps.event.removeListener(C),
                    E && google.maps.event.removeListener(E),
                    w && google.maps.event.removeListener(w),
                    I && google.maps.event.removeListener(I),
                    B && google.maps.event.removeListener(B),
                    U && google.maps.event.removeListener(U),
                    d && d(v),
                    v.setMap(null))
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                return n.registeredEvents = [],
                n.state = {
                    drawingManager: null
                },
                n.setDrawingManagerCallback = function() {
                    null !== n.state.drawingManager && n.props.onLoad && n.props.onLoad(n.state.drawingManager)
                }
                ,
                g(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing),
                n
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.drawing.DrawingManager(l(l({}, this.props.options || {}), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: A,
                    eventMap: R,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        drawingManager: e
                    }
                }
                ), this.setDrawingManagerCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.drawingManager && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: A,
                    eventMap: R,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.drawingManager
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.drawingManager && (this.props.onUnmount && this.props.onUnmount(this.state.drawingManager),
                y(this.registeredEvents),
                this.state.drawingManager.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var Z = {
            onAnimationChanged: "animation_changed",
            onClick: "click",
            onClickableChanged: "clickable_changed",
            onCursorChanged: "cursor_changed",
            onDblClick: "dblclick",
            onDrag: "drag",
            onDragEnd: "dragend",
            onDraggableChanged: "draggable_changed",
            onDragStart: "dragstart",
            onFlatChanged: "flat_changed",
            onIconChanged: "icon_changed",
            onMouseDown: "mousedown",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseUp: "mouseup",
            onPositionChanged: "position_changed",
            onRightClick: "rightclick",
            onShapeChanged: "shape_changed",
            onTitleChanged: "title_changed",
            onVisibleChanged: "visible_changed",
            onZindexChanged: "zindex_changed"
        }
          , V = {
            animation: function(e, t) {
                e.setAnimation(t)
            },
            clickable: function(e, t) {
                e.setClickable(t)
            },
            cursor: function(e, t) {
                e.setCursor(t)
            },
            draggable: function(e, t) {
                e.setDraggable(t)
            },
            icon: function(e, t) {
                e.setIcon(t)
            },
            label: function(e, t) {
                e.setLabel(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            opacity: function(e, t) {
                e.setOpacity(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            position: function(e, t) {
                e.setPosition(t)
            },
            shape: function(e, t) {
                e.setShape(t)
            },
            title: function(e, t) {
                e.setTitle(t)
            },
            visible: function(e, t) {
                e.setVisible(t)
            },
            zIndex: function(e, t) {
                e.setZIndex(t)
            }
        }
          , W = {};
        (0,
        s.memo)((function(e) {
            var t = e.position
              , n = e.options
              , i = e.clusterer
              , r = e.noClustererRedraw
              , a = e.children
              , u = e.draggable
              , p = e.visible
              , c = e.animation
              , d = e.clickable
              , g = e.cursor
              , m = e.icon
              , f = e.label
              , v = e.opacity
              , y = e.shape
              , L = e.title
              , C = e.zIndex
              , b = e.onClick
              , M = e.onDblClick
              , E = e.onDrag
              , x = e.onDragEnd
              , k = e.onDragStart
              , w = e.onMouseOut
              , S = e.onMouseOver
              , P = e.onMouseUp
              , I = e.onMouseDown
              , D = e.onRightClick
              , O = e.onClickableChanged
              , B = e.onCursorChanged
              , _ = e.onAnimationChanged
              , T = e.onDraggableChanged
              , U = e.onFlatChanged
              , z = e.onIconChanged
              , R = e.onPositionChanged
              , A = e.onShapeChanged
              , Z = e.onTitleChanged
              , V = e.onVisibleChanged
              , j = e.onZindexChanged
              , N = e.onLoad
              , H = e.onUnmount
              , G = (0,
            s.useContext)(h)
              , F = (0,
            s.useState)(null)
              , Y = F[0]
              , $ = F[1]
              , K = (0,
            s.useState)(null)
              , q = K[0]
              , J = K[1]
              , X = (0,
            s.useState)(null)
              , Q = X[0]
              , ee = X[1]
              , te = (0,
            s.useState)(null)
              , ne = te[0]
              , oe = te[1]
              , se = (0,
            s.useState)(null)
              , ie = se[0]
              , re = se[1]
              , ae = (0,
            s.useState)(null)
              , le = ae[0]
              , ue = ae[1]
              , pe = (0,
            s.useState)(null)
              , ce = pe[0]
              , de = pe[1]
              , ge = (0,
            s.useState)(null)
              , he = ge[0]
              , me = ge[1]
              , fe = (0,
            s.useState)(null)
              , ve = fe[0]
              , ye = fe[1]
              , Le = (0,
            s.useState)(null)
              , Ce = Le[0]
              , be = Le[1]
              , Me = (0,
            s.useState)(null)
              , Ee = Me[0]
              , xe = Me[1]
              , ke = (0,
            s.useState)(null)
              , we = ke[0]
              , Se = ke[1]
              , Pe = (0,
            s.useState)(null)
              , Ie = Pe[0]
              , De = Pe[1]
              , Oe = (0,
            s.useState)(null)
              , Be = Oe[0]
              , _e = Oe[1]
              , Te = (0,
            s.useState)(null)
              , Ue = Te[0]
              , ze = Te[1]
              , Re = (0,
            s.useState)(null)
              , Ae = Re[0]
              , Ze = Re[1]
              , Ve = (0,
            s.useState)(null)
              , We = Ve[0]
              , je = Ve[1]
              , Ne = (0,
            s.useState)(null)
              , He = Ne[0]
              , Ge = Ne[1]
              , Fe = (0,
            s.useState)(null)
              , Ye = Fe[0]
              , $e = Fe[1]
              , Ke = (0,
            s.useState)(null)
              , qe = Ke[0]
              , Je = Ke[1]
              , Xe = (0,
            s.useState)(null)
              , Qe = Xe[0]
              , et = Xe[1]
              , tt = (0,
            s.useState)(null)
              , nt = tt[0]
              , ot = tt[1];
            (0,
            s.useEffect)((function() {
                null !== Y && Y.setMap(G)
            }
            ), [G]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof n && null !== Y && Y.setOptions(n)
            }
            ), [Y, n]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof u && null !== Y && Y.setDraggable(u)
            }
            ), [Y, u]),
            (0,
            s.useEffect)((function() {
                t && null !== Y && Y.setPosition(t)
            }
            ), [Y, t]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof p && null !== Y && Y.setVisible(p)
            }
            ), [Y, p]),
            (0,
            s.useEffect)((function() {
                null === Y || void 0 === Y || Y.setAnimation(c)
            }
            ), [Y, c]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== d && Y.setClickable(d)
            }
            ), [Y, d]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== g && Y.setCursor(g)
            }
            ), [Y, g]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== m && Y.setIcon(m)
            }
            ), [Y, m]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== f && Y.setLabel(f)
            }
            ), [Y, f]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== v && Y.setOpacity(v)
            }
            ), [Y, v]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== y && Y.setShape(y)
            }
            ), [Y, y]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== L && Y.setTitle(L)
            }
            ), [Y, L]),
            (0,
            s.useEffect)((function() {
                Y && void 0 !== C && Y.setZIndex(C)
            }
            ), [Y, C]),
            (0,
            s.useEffect)((function() {
                Y && M && (null !== q && google.maps.event.removeListener(q),
                J(google.maps.event.addListener(Y, "dblclick", M)))
            }
            ), [M]),
            (0,
            s.useEffect)((function() {
                Y && x && (null !== Q && google.maps.event.removeListener(Q),
                ee(google.maps.event.addListener(Y, "dragend", x)))
            }
            ), [x]),
            (0,
            s.useEffect)((function() {
                Y && k && (null !== ne && google.maps.event.removeListener(ne),
                oe(google.maps.event.addListener(Y, "dragstart", k)))
            }
            ), [k]),
            (0,
            s.useEffect)((function() {
                Y && I && (null !== ie && google.maps.event.removeListener(ie),
                re(google.maps.event.addListener(Y, "mousedown", I)))
            }
            ), [I]),
            (0,
            s.useEffect)((function() {
                Y && w && (null !== le && google.maps.event.removeListener(le),
                ue(google.maps.event.addListener(Y, "mouseout", w)))
            }
            ), [w]),
            (0,
            s.useEffect)((function() {
                Y && S && (null !== ce && google.maps.event.removeListener(ce),
                de(google.maps.event.addListener(Y, "mouseover", S)))
            }
            ), [S]),
            (0,
            s.useEffect)((function() {
                Y && P && (null !== he && google.maps.event.removeListener(he),
                me(google.maps.event.addListener(Y, "mouseup", P)))
            }
            ), [P]),
            (0,
            s.useEffect)((function() {
                Y && D && (null !== ve && google.maps.event.removeListener(ve),
                ye(google.maps.event.addListener(Y, "rightclick", D)))
            }
            ), [D]),
            (0,
            s.useEffect)((function() {
                Y && b && (null !== Ce && google.maps.event.removeListener(Ce),
                be(google.maps.event.addListener(Y, "click", b)))
            }
            ), [b]),
            (0,
            s.useEffect)((function() {
                Y && E && (null !== Ee && google.maps.event.removeListener(Ee),
                xe(google.maps.event.addListener(Y, "drag", E)))
            }
            ), [E]),
            (0,
            s.useEffect)((function() {
                Y && O && (null !== we && google.maps.event.removeListener(we),
                Se(google.maps.event.addListener(Y, "clickable_changed", O)))
            }
            ), [O]),
            (0,
            s.useEffect)((function() {
                Y && B && (null !== Ie && google.maps.event.removeListener(Ie),
                De(google.maps.event.addListener(Y, "cursor_changed", B)))
            }
            ), [B]),
            (0,
            s.useEffect)((function() {
                Y && _ && (null !== Be && google.maps.event.removeListener(Be),
                _e(google.maps.event.addListener(Y, "animation_changed", _)))
            }
            ), [_]),
            (0,
            s.useEffect)((function() {
                Y && T && (null !== Ue && google.maps.event.removeListener(Ue),
                ze(google.maps.event.addListener(Y, "draggable_changed", T)))
            }
            ), [T]),
            (0,
            s.useEffect)((function() {
                Y && U && (null !== Ae && google.maps.event.removeListener(Ae),
                Ze(google.maps.event.addListener(Y, "flat_changed", U)))
            }
            ), [U]),
            (0,
            s.useEffect)((function() {
                Y && z && (null !== We && google.maps.event.removeListener(We),
                je(google.maps.event.addListener(Y, "icon_changed", z)))
            }
            ), [z]),
            (0,
            s.useEffect)((function() {
                Y && R && (null !== He && google.maps.event.removeListener(He),
                Ge(google.maps.event.addListener(Y, "position_changed", R)))
            }
            ), [R]),
            (0,
            s.useEffect)((function() {
                Y && A && (null !== Ye && google.maps.event.removeListener(Ye),
                $e(google.maps.event.addListener(Y, "shape_changed", A)))
            }
            ), [A]),
            (0,
            s.useEffect)((function() {
                Y && Z && (null !== qe && google.maps.event.removeListener(qe),
                Je(google.maps.event.addListener(Y, "title_changed", Z)))
            }
            ), [Z]),
            (0,
            s.useEffect)((function() {
                Y && V && (null !== Qe && google.maps.event.removeListener(Qe),
                et(google.maps.event.addListener(Y, "visible_changed", V)))
            }
            ), [V]),
            (0,
            s.useEffect)((function() {
                Y && j && (null !== nt && google.maps.event.removeListener(nt),
                ot(google.maps.event.addListener(Y, "zindex_changed", j)))
            }
            ), [j]),
            (0,
            s.useEffect)((function() {
                var e = l(l(l({}, n || W), i ? W : {
                    map: G
                }), {
                    position: t
                })
                  , o = new google.maps.Marker(e);
                return i ? i.addMarker(o, !!r) : o.setMap(G),
                t && o.setPosition(t),
                "undefined" !== typeof p && o.setVisible(p),
                "undefined" !== typeof u && o.setDraggable(u),
                "undefined" !== typeof d && o.setClickable(d),
                "string" === typeof g && o.setCursor(g),
                m && o.setIcon(m),
                "undefined" !== typeof f && o.setLabel(f),
                "undefined" !== typeof v && o.setOpacity(v),
                y && o.setShape(y),
                "string" === typeof L && o.setTitle(L),
                "number" === typeof C && o.setZIndex(C),
                M && J(google.maps.event.addListener(o, "dblclick", M)),
                x && ee(google.maps.event.addListener(o, "dragend", x)),
                k && oe(google.maps.event.addListener(o, "dragstart", k)),
                I && re(google.maps.event.addListener(o, "mousedown", I)),
                w && ue(google.maps.event.addListener(o, "mouseout", w)),
                S && de(google.maps.event.addListener(o, "mouseover", S)),
                P && me(google.maps.event.addListener(o, "mouseup", P)),
                D && ye(google.maps.event.addListener(o, "rightclick", D)),
                b && be(google.maps.event.addListener(o, "click", b)),
                E && xe(google.maps.event.addListener(o, "drag", E)),
                O && Se(google.maps.event.addListener(o, "clickable_changed", O)),
                B && De(google.maps.event.addListener(o, "cursor_changed", B)),
                _ && _e(google.maps.event.addListener(o, "animation_changed", _)),
                T && ze(google.maps.event.addListener(o, "draggable_changed", T)),
                U && Ze(google.maps.event.addListener(o, "flat_changed", U)),
                z && je(google.maps.event.addListener(o, "icon_changed", z)),
                R && Ge(google.maps.event.addListener(o, "position_changed", R)),
                A && $e(google.maps.event.addListener(o, "shape_changed", A)),
                Z && Je(google.maps.event.addListener(o, "title_changed", Z)),
                V && et(google.maps.event.addListener(o, "visible_changed", V)),
                j && ot(google.maps.event.addListener(o, "zindex_changed", j)),
                $(o),
                N && N(o),
                function() {
                    null !== q && google.maps.event.removeListener(q),
                    null !== Q && google.maps.event.removeListener(Q),
                    null !== ne && google.maps.event.removeListener(ne),
                    null !== ie && google.maps.event.removeListener(ie),
                    null !== le && google.maps.event.removeListener(le),
                    null !== ce && google.maps.event.removeListener(ce),
                    null !== he && google.maps.event.removeListener(he),
                    null !== ve && google.maps.event.removeListener(ve),
                    null !== Ce && google.maps.event.removeListener(Ce),
                    null !== we && google.maps.event.removeListener(we),
                    null !== Ie && google.maps.event.removeListener(Ie),
                    null !== Be && google.maps.event.removeListener(Be),
                    null !== Ue && google.maps.event.removeListener(Ue),
                    null !== Ae && google.maps.event.removeListener(Ae),
                    null !== We && google.maps.event.removeListener(We),
                    null !== He && google.maps.event.removeListener(He),
                    null !== qe && google.maps.event.removeListener(qe),
                    null !== Qe && google.maps.event.removeListener(Qe),
                    null !== nt && google.maps.event.removeListener(nt),
                    H && H(o),
                    i ? i.removeMarker(o, !!r) : o && o.setMap(null)
                }
            }
            ), []);
            var st = (0,
            s.useMemo)((function() {
                return a ? s.Children.map(a, (function(e) {
                    if (!(0,
                    s.isValidElement)(e))
                        return e;
                    var t = e;
                    return (0,
                    s.cloneElement)(t, {
                        anchor: Y
                    })
                }
                )) : null
            }
            ), [a, Y]);
            return (0,
            o.jsx)(o.Fragment, {
                children: st
            }) || null
        }
        ));
        var j = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t
            }
            return a(t, e),
            t.prototype.componentDidMount = function() {
                var e = l(l(l({}, this.props.options || W), this.props.clusterer ? W : {
                    map: this.context
                }), {
                    position: this.props.position
                });
                this.marker = new google.maps.Marker(e),
                this.props.clusterer ? this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw) : this.marker.setMap(this.context),
                this.registeredEvents = L({
                    updaterMap: V,
                    eventMap: Z,
                    prevProps: {},
                    nextProps: this.props,
                    instance: this.marker
                }),
                this.props.onLoad && this.props.onLoad(this.marker)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                this.marker && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: V,
                    eventMap: Z,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.marker
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.marker && (this.props.onUnmount && this.props.onUnmount(this.marker),
                y(this.registeredEvents),
                this.props.clusterer ? this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw) : this.marker && this.marker.setMap(null))
            }
            ,
            t.prototype.render = function() {
                var e = this
                  , t = null;
                return this.props.children && (t = s.Children.map(this.props.children, (function(t) {
                    if (!(0,
                    s.isValidElement)(t))
                        return t;
                    var n = t;
                    return (0,
                    s.cloneElement)(n, {
                        anchor: e.marker
                    })
                }
                ))),
                t || null
            }
            ,
            t.contextType = h,
            t
        }(s.PureComponent)
          , N = function() {
            function e(t, n) {
                t.getClusterer().extend(e, google.maps.OverlayView),
                this.cluster = t,
                this.clusterClassName = this.cluster.getClusterer().getClusterClass(),
                this.className = this.clusterClassName,
                this.styles = n,
                this.center = void 0,
                this.div = null,
                this.sums = null,
                this.visible = !1,
                this.boundsChangedListener = null,
                this.url = "",
                this.height = 0,
                this.width = 0,
                this.anchorText = [0, 0],
                this.anchorIcon = [0, 0],
                this.textColor = "black",
                this.textSize = 11,
                this.textDecoration = "none",
                this.fontWeight = "bold",
                this.fontStyle = "normal",
                this.fontFamily = "Arial,sans-serif",
                this.backgroundPosition = "0 0",
                this.cMouseDownInCluster = null,
                this.cDraggingMapByCluster = null,
                this.timeOut = null,
                this.setMap(t.getMap()),
                this.onBoundsChanged = this.onBoundsChanged.bind(this),
                this.onMouseDown = this.onMouseDown.bind(this),
                this.onClick = this.onClick.bind(this),
                this.onMouseOver = this.onMouseOver.bind(this),
                this.onMouseOut = this.onMouseOut.bind(this),
                this.onAdd = this.onAdd.bind(this),
                this.onRemove = this.onRemove.bind(this),
                this.draw = this.draw.bind(this),
                this.hide = this.hide.bind(this),
                this.show = this.show.bind(this),
                this.useStyle = this.useStyle.bind(this),
                this.setCenter = this.setCenter.bind(this),
                this.getPosFromLatLng = this.getPosFromLatLng.bind(this)
            }
            return e.prototype.onBoundsChanged = function() {
                this.cDraggingMapByCluster = this.cMouseDownInCluster
            }
            ,
            e.prototype.onMouseDown = function() {
                this.cMouseDownInCluster = !0,
                this.cDraggingMapByCluster = !1
            }
            ,
            e.prototype.onClick = function(e) {
                if (this.cMouseDownInCluster = !1,
                !this.cDraggingMapByCluster) {
                    var t = this.cluster.getClusterer();
                    if (google.maps.event.trigger(t, "click", this.cluster),
                    google.maps.event.trigger(t, "clusterclick", this.cluster),
                    t.getZoomOnClick()) {
                        var n = t.getMaxZoom()
                          , o = this.cluster.getBounds()
                          , s = t.getMap();
                        null !== s && "fitBounds"in s && s.fitBounds(o),
                        this.timeOut = window.setTimeout((function() {
                            var e = t.getMap();
                            if (null !== e) {
                                "fitBounds"in e && e.fitBounds(o);
                                var s = e.getZoom() || 0;
                                null !== n && s > n && e.setZoom(n + 1)
                            }
                        }
                        ), 100)
                    }
                    e.cancelBubble = !0,
                    e.stopPropagation && e.stopPropagation()
                }
            }
            ,
            e.prototype.onMouseOver = function() {
                google.maps.event.trigger(this.cluster.getClusterer(), "mouseover", this.cluster)
            }
            ,
            e.prototype.onMouseOut = function() {
                google.maps.event.trigger(this.cluster.getClusterer(), "mouseout", this.cluster)
            }
            ,
            e.prototype.onAdd = function() {
                var e;
                this.div = document.createElement("div"),
                this.div.className = this.className,
                this.visible && this.show(),
                null === (e = this.getPanes()) || void 0 === e || e.overlayMouseTarget.appendChild(this.div);
                var t = this.getMap();
                null !== t && (this.boundsChangedListener = google.maps.event.addListener(t, "bounds_changed", this.onBoundsChanged),
                this.div.addEventListener("mousedown", this.onMouseDown),
                this.div.addEventListener("click", this.onClick),
                this.div.addEventListener("mouseover", this.onMouseOver),
                this.div.addEventListener("mouseout", this.onMouseOut))
            }
            ,
            e.prototype.onRemove = function() {
                this.div && this.div.parentNode && (this.hide(),
                null !== this.boundsChangedListener && google.maps.event.removeListener(this.boundsChangedListener),
                this.div.removeEventListener("mousedown", this.onMouseDown),
                this.div.removeEventListener("click", this.onClick),
                this.div.removeEventListener("mouseover", this.onMouseOver),
                this.div.removeEventListener("mouseout", this.onMouseOut),
                this.div.parentNode.removeChild(this.div),
                null !== this.timeOut && (window.clearTimeout(this.timeOut),
                this.timeOut = null),
                this.div = null)
            }
            ,
            e.prototype.draw = function() {
                if (this.visible && null !== this.div && this.center) {
                    var e = this.getPosFromLatLng(this.center);
                    this.div.style.top = null !== e ? "".concat(e.y, "px") : "0",
                    this.div.style.left = null !== e ? "".concat(e.x, "px") : "0"
                }
            }
            ,
            e.prototype.hide = function() {
                this.div && (this.div.style.display = "none"),
                this.visible = !1
            }
            ,
            e.prototype.show = function() {
                var e, t, n, o, s, i;
                if (this.div && this.center) {
                    var r = null === this.sums || "undefined" === typeof this.sums.title || "" === this.sums.title ? this.cluster.getClusterer().getTitle() : this.sums.title
                      , a = this.backgroundPosition.split(" ")
                      , l = parseInt((null === (e = a[0]) || void 0 === e ? void 0 : e.replace(/^\s+|\s+$/g, "")) || "0", 10)
                      , u = parseInt((null === (t = a[1]) || void 0 === t ? void 0 : t.replace(/^\s+|\s+$/g, "")) || "0", 10)
                      , p = this.getPosFromLatLng(this.center);
                    this.div.className = this.className,
                    this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(null !== p ? "".concat(p.y, "px") : "0", "; left: ").concat(null !== p ? "".concat(p.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
                    var c = document.createElement("img");
                    c.alt = r,
                    c.src = this.url,
                    c.width = this.width,
                    c.height = this.height,
                    c.setAttribute("style", "position: absolute; top: ".concat(u, "px; left: ").concat(l, "px")),
                    this.cluster.getClusterer().enableRetinaIcons || (c.style.clip = "rect(-".concat(u, "px, -").concat(l + this.width, "px, -").concat(u + this.height, ", -").concat(l, ")"));
                    var d = document.createElement("div");
                    d.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px")),
                    (null === (n = this.sums) || void 0 === n ? void 0 : n.text) && (d.innerText = "".concat(null === (o = this.sums) || void 0 === o ? void 0 : o.text)),
                    (null === (s = this.sums) || void 0 === s ? void 0 : s.html) && (d.innerHTML = "".concat(null === (i = this.sums) || void 0 === i ? void 0 : i.html)),
                    this.div.innerHTML = "",
                    this.div.appendChild(c),
                    this.div.appendChild(d),
                    this.div.title = r,
                    this.div.style.display = ""
                }
                this.visible = !0
            }
            ,
            e.prototype.useStyle = function(e) {
                this.sums = e;
                var t = this.cluster.getClusterer().getStyles()
                  , n = t[Math.min(t.length - 1, Math.max(0, e.index - 1))];
                n && (this.url = n.url,
                this.height = n.height,
                this.width = n.width,
                n.className && (this.className = "".concat(this.clusterClassName, " ").concat(n.className)),
                this.anchorText = n.anchorText || [0, 0],
                this.anchorIcon = n.anchorIcon || [this.height / 2, this.width / 2],
                this.textColor = n.textColor || "black",
                this.textSize = n.textSize || 11,
                this.textDecoration = n.textDecoration || "none",
                this.fontWeight = n.fontWeight || "bold",
                this.fontStyle = n.fontStyle || "normal",
                this.fontFamily = n.fontFamily || "Arial,sans-serif",
                this.backgroundPosition = n.backgroundPosition || "0 0")
            }
            ,
            e.prototype.setCenter = function(e) {
                this.center = e
            }
            ,
            e.prototype.getPosFromLatLng = function(e) {
                var t = this.getProjection().fromLatLngToDivPixel(e);
                return null !== t && (t.x -= this.anchorIcon[1],
                t.y -= this.anchorIcon[0]),
                t
            }
            ,
            e
        }()
          , H = function() {
            function e(e) {
                this.markerClusterer = e,
                this.map = this.markerClusterer.getMap(),
                this.gridSize = this.markerClusterer.getGridSize(),
                this.minClusterSize = this.markerClusterer.getMinimumClusterSize(),
                this.averageCenter = this.markerClusterer.getAverageCenter(),
                this.markers = [],
                this.center = void 0,
                this.bounds = null,
                this.clusterIcon = new N(this,this.markerClusterer.getStyles()),
                this.getSize = this.getSize.bind(this),
                this.getMarkers = this.getMarkers.bind(this),
                this.getCenter = this.getCenter.bind(this),
                this.getMap = this.getMap.bind(this),
                this.getClusterer = this.getClusterer.bind(this),
                this.getBounds = this.getBounds.bind(this),
                this.remove = this.remove.bind(this),
                this.addMarker = this.addMarker.bind(this),
                this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this),
                this.calculateBounds = this.calculateBounds.bind(this),
                this.updateIcon = this.updateIcon.bind(this),
                this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this)
            }
            return e.prototype.getSize = function() {
                return this.markers.length
            }
            ,
            e.prototype.getMarkers = function() {
                return this.markers
            }
            ,
            e.prototype.getCenter = function() {
                return this.center
            }
            ,
            e.prototype.getMap = function() {
                return this.map
            }
            ,
            e.prototype.getClusterer = function() {
                return this.markerClusterer
            }
            ,
            e.prototype.getBounds = function() {
                for (var e = new google.maps.LatLngBounds(this.center,this.center), t = 0, n = this.getMarkers(); t < n.length; t++) {
                    var o = n[t].getPosition();
                    o && e.extend(o)
                }
                return e
            }
            ,
            e.prototype.remove = function() {
                this.clusterIcon.setMap(null),
                this.markers = [],
                delete this.markers
            }
            ,
            e.prototype.addMarker = function(e) {
                var t, n;
                if (this.isMarkerAlreadyAdded(e))
                    return !1;
                if (this.center) {
                    if (this.averageCenter && (n = e.getPosition())) {
                        var o = this.markers.length + 1;
                        this.center = new google.maps.LatLng((this.center.lat() * (o - 1) + n.lat()) / o,(this.center.lng() * (o - 1) + n.lng()) / o),
                        this.calculateBounds()
                    }
                } else
                    (n = e.getPosition()) && (this.center = n,
                    this.calculateBounds());
                e.isAdded = !0,
                this.markers.push(e);
                var s = this.markers.length
                  , i = this.markerClusterer.getMaxZoom()
                  , r = null === (t = this.map) || void 0 === t ? void 0 : t.getZoom();
                if (null !== i && "undefined" !== typeof r && r > i)
                    e.getMap() !== this.map && e.setMap(this.map);
                else if (s < this.minClusterSize)
                    e.getMap() !== this.map && e.setMap(this.map);
                else if (s === this.minClusterSize)
                    for (var a = 0, l = this.markers; a < l.length; a++) {
                        l[a].setMap(null)
                    }
                else
                    e.setMap(null);
                return !0
            }
            ,
            e.prototype.isMarkerInClusterBounds = function(e) {
                if (null !== this.bounds) {
                    var t = e.getPosition();
                    if (t)
                        return this.bounds.contains(t)
                }
                return !1
            }
            ,
            e.prototype.calculateBounds = function() {
                this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))
            }
            ,
            e.prototype.updateIcon = function() {
                var e, t = this.markers.length, n = this.markerClusterer.getMaxZoom(), o = null === (e = this.map) || void 0 === e ? void 0 : e.getZoom();
                null !== n && "undefined" !== typeof o && o > n || t < this.minClusterSize ? this.clusterIcon.hide() : (this.center && this.clusterIcon.setCenter(this.center),
                this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length)),
                this.clusterIcon.show())
            }
            ,
            e.prototype.isMarkerAlreadyAdded = function(e) {
                if (this.markers.includes)
                    return this.markers.includes(e);
                for (var t = 0; t < this.markers.length; t++)
                    if (e === this.markers[t])
                        return !0;
                return !1
            }
            ,
            e
        }();
        function G(e, t) {
            var n = e.length
              , o = n.toString().length
              , s = Math.min(o, t);
            return {
                text: n.toString(),
                index: s,
                title: ""
            }
        }
        var F = [53, 56, 66, 78, 90]
          , Y = function() {
            function e(t, n, o) {
                void 0 === n && (n = []),
                void 0 === o && (o = {}),
                this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this),
                this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this),
                this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this),
                this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this),
                this.addToClosestCluster = this.addToClosestCluster.bind(this),
                this.getImageExtension = this.getImageExtension.bind(this),
                this.setImageExtension = this.setImageExtension.bind(this),
                this.getExtendedBounds = this.getExtendedBounds.bind(this),
                this.getAverageCenter = this.getAverageCenter.bind(this),
                this.setAverageCenter = this.setAverageCenter.bind(this),
                this.getTotalClusters = this.getTotalClusters.bind(this),
                this.fitMapToMarkers = this.fitMapToMarkers.bind(this),
                this.getIgnoreHidden = this.getIgnoreHidden.bind(this),
                this.setIgnoreHidden = this.setIgnoreHidden.bind(this),
                this.getClusterClass = this.getClusterClass.bind(this),
                this.setClusterClass = this.setClusterClass.bind(this),
                this.getTotalMarkers = this.getTotalMarkers.bind(this),
                this.getZoomOnClick = this.getZoomOnClick.bind(this),
                this.setZoomOnClick = this.setZoomOnClick.bind(this),
                this.getBatchSizeIE = this.getBatchSizeIE.bind(this),
                this.setBatchSizeIE = this.setBatchSizeIE.bind(this),
                this.createClusters = this.createClusters.bind(this),
                this.onZoomChanged = this.onZoomChanged.bind(this),
                this.getImageSizes = this.getImageSizes.bind(this),
                this.setImageSizes = this.setImageSizes.bind(this),
                this.getCalculator = this.getCalculator.bind(this),
                this.setCalculator = this.setCalculator.bind(this),
                this.removeMarkers = this.removeMarkers.bind(this),
                this.resetViewport = this.resetViewport.bind(this),
                this.getImagePath = this.getImagePath.bind(this),
                this.setImagePath = this.setImagePath.bind(this),
                this.pushMarkerTo = this.pushMarkerTo.bind(this),
                this.removeMarker = this.removeMarker.bind(this),
                this.clearMarkers = this.clearMarkers.bind(this),
                this.setupStyles = this.setupStyles.bind(this),
                this.getGridSize = this.getGridSize.bind(this),
                this.setGridSize = this.setGridSize.bind(this),
                this.getClusters = this.getClusters.bind(this),
                this.getMaxZoom = this.getMaxZoom.bind(this),
                this.setMaxZoom = this.setMaxZoom.bind(this),
                this.getMarkers = this.getMarkers.bind(this),
                this.addMarkers = this.addMarkers.bind(this),
                this.getStyles = this.getStyles.bind(this),
                this.setStyles = this.setStyles.bind(this),
                this.addMarker = this.addMarker.bind(this),
                this.onRemove = this.onRemove.bind(this),
                this.getTitle = this.getTitle.bind(this),
                this.setTitle = this.setTitle.bind(this),
                this.repaint = this.repaint.bind(this),
                this.onIdle = this.onIdle.bind(this),
                this.redraw = this.redraw.bind(this),
                this.onAdd = this.onAdd.bind(this),
                this.draw = this.draw.bind(this),
                this.extend = this.extend.bind(this),
                this.extend(e, google.maps.OverlayView),
                this.markers = [],
                this.clusters = [],
                this.listeners = [],
                this.activeMap = null,
                this.ready = !1,
                this.gridSize = o.gridSize || 60,
                this.minClusterSize = o.minimumClusterSize || 2,
                this.maxZoom = o.maxZoom || null,
                this.styles = o.styles || [],
                this.title = o.title || "",
                this.zoomOnClick = !0,
                void 0 !== o.zoomOnClick && (this.zoomOnClick = o.zoomOnClick),
                this.averageCenter = !1,
                void 0 !== o.averageCenter && (this.averageCenter = o.averageCenter),
                this.ignoreHidden = !1,
                void 0 !== o.ignoreHidden && (this.ignoreHidden = o.ignoreHidden),
                this.enableRetinaIcons = !1,
                void 0 !== o.enableRetinaIcons && (this.enableRetinaIcons = o.enableRetinaIcons),
                this.imagePath = o.imagePath || "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
                this.imageExtension = o.imageExtension || "png",
                this.imageSizes = o.imageSizes || F,
                this.calculator = o.calculator || G,
                this.batchSize = o.batchSize || 2e3,
                this.batchSizeIE = o.batchSizeIE || 500,
                this.clusterClass = o.clusterClass || "cluster",
                -1 !== navigator.userAgent.toLowerCase().indexOf("msie") && (this.batchSize = this.batchSizeIE),
                this.timerRefStatic = null,
                this.setupStyles(),
                this.addMarkers(n, !0),
                this.setMap(t)
            }
            return e.prototype.onZoomChanged = function() {
                var e, t;
                this.resetViewport(!1),
                (null === (e = this.getMap()) || void 0 === e ? void 0 : e.getZoom()) !== (this.get("minZoom") || 0) && (null === (t = this.getMap()) || void 0 === t ? void 0 : t.getZoom()) !== this.get("maxZoom") || google.maps.event.trigger(this, "idle")
            }
            ,
            e.prototype.onIdle = function() {
                this.redraw()
            }
            ,
            e.prototype.onAdd = function() {
                var e = this.getMap();
                this.activeMap = e,
                this.ready = !0,
                this.repaint(),
                null !== e && (this.listeners = [google.maps.event.addListener(e, "zoom_changed", this.onZoomChanged), google.maps.event.addListener(e, "idle", this.onIdle)])
            }
            ,
            e.prototype.onRemove = function() {
                for (var e = 0, t = this.markers; e < t.length; e++) {
                    var n = t[e];
                    n.getMap() !== this.activeMap && n.setMap(this.activeMap)
                }
                for (var o = 0, s = this.clusters; o < s.length; o++) {
                    s[o].remove()
                }
                this.clusters = [];
                for (var i = 0, r = this.listeners; i < r.length; i++) {
                    var a = r[i];
                    google.maps.event.removeListener(a)
                }
                this.listeners = [],
                this.activeMap = null,
                this.ready = !1
            }
            ,
            e.prototype.draw = function() {}
            ,
            e.prototype.getMap = function() {
                return null
            }
            ,
            e.prototype.getPanes = function() {
                return null
            }
            ,
            e.prototype.getProjection = function() {
                return {
                    fromContainerPixelToLatLng: function() {
                        return null
                    },
                    fromDivPixelToLatLng: function() {
                        return null
                    },
                    fromLatLngToContainerPixel: function() {
                        return null
                    },
                    fromLatLngToDivPixel: function() {
                        return null
                    },
                    getVisibleRegion: function() {
                        return null
                    },
                    getWorldWidth: function() {
                        return 0
                    }
                }
            }
            ,
            e.prototype.setMap = function() {}
            ,
            e.prototype.addListener = function() {
                return {
                    remove: function() {}
                }
            }
            ,
            e.prototype.bindTo = function() {}
            ,
            e.prototype.get = function() {}
            ,
            e.prototype.notify = function() {}
            ,
            e.prototype.set = function() {}
            ,
            e.prototype.setValues = function() {}
            ,
            e.prototype.unbind = function() {}
            ,
            e.prototype.unbindAll = function() {}
            ,
            e.prototype.setupStyles = function() {
                if (!(this.styles.length > 0))
                    for (var e = 0; e < this.imageSizes.length; e++)
                        this.styles.push({
                            url: "".concat(this.imagePath + (e + 1), ".").concat(this.imageExtension),
                            height: this.imageSizes[e] || 0,
                            width: this.imageSizes[e] || 0
                        })
            }
            ,
            e.prototype.fitMapToMarkers = function() {
                for (var e = this.getMarkers(), t = new google.maps.LatLngBounds, n = 0, o = e; n < o.length; n++) {
                    var s = o[n].getPosition();
                    s && t.extend(s)
                }
                var i = this.getMap();
                null !== i && "fitBounds"in i && i.fitBounds(t)
            }
            ,
            e.prototype.getGridSize = function() {
                return this.gridSize
            }
            ,
            e.prototype.setGridSize = function(e) {
                this.gridSize = e
            }
            ,
            e.prototype.getMinimumClusterSize = function() {
                return this.minClusterSize
            }
            ,
            e.prototype.setMinimumClusterSize = function(e) {
                this.minClusterSize = e
            }
            ,
            e.prototype.getMaxZoom = function() {
                return this.maxZoom
            }
            ,
            e.prototype.setMaxZoom = function(e) {
                this.maxZoom = e
            }
            ,
            e.prototype.getStyles = function() {
                return this.styles
            }
            ,
            e.prototype.setStyles = function(e) {
                this.styles = e
            }
            ,
            e.prototype.getTitle = function() {
                return this.title
            }
            ,
            e.prototype.setTitle = function(e) {
                this.title = e
            }
            ,
            e.prototype.getZoomOnClick = function() {
                return this.zoomOnClick
            }
            ,
            e.prototype.setZoomOnClick = function(e) {
                this.zoomOnClick = e
            }
            ,
            e.prototype.getAverageCenter = function() {
                return this.averageCenter
            }
            ,
            e.prototype.setAverageCenter = function(e) {
                this.averageCenter = e
            }
            ,
            e.prototype.getIgnoreHidden = function() {
                return this.ignoreHidden
            }
            ,
            e.prototype.setIgnoreHidden = function(e) {
                this.ignoreHidden = e
            }
            ,
            e.prototype.getEnableRetinaIcons = function() {
                return this.enableRetinaIcons
            }
            ,
            e.prototype.setEnableRetinaIcons = function(e) {
                this.enableRetinaIcons = e
            }
            ,
            e.prototype.getImageExtension = function() {
                return this.imageExtension
            }
            ,
            e.prototype.setImageExtension = function(e) {
                this.imageExtension = e
            }
            ,
            e.prototype.getImagePath = function() {
                return this.imagePath
            }
            ,
            e.prototype.setImagePath = function(e) {
                this.imagePath = e
            }
            ,
            e.prototype.getImageSizes = function() {
                return this.imageSizes
            }
            ,
            e.prototype.setImageSizes = function(e) {
                this.imageSizes = e
            }
            ,
            e.prototype.getCalculator = function() {
                return this.calculator
            }
            ,
            e.prototype.setCalculator = function(e) {
                this.calculator = e
            }
            ,
            e.prototype.getBatchSizeIE = function() {
                return this.batchSizeIE
            }
            ,
            e.prototype.setBatchSizeIE = function(e) {
                this.batchSizeIE = e
            }
            ,
            e.prototype.getClusterClass = function() {
                return this.clusterClass
            }
            ,
            e.prototype.setClusterClass = function(e) {
                this.clusterClass = e
            }
            ,
            e.prototype.getMarkers = function() {
                return this.markers
            }
            ,
            e.prototype.getTotalMarkers = function() {
                return this.markers.length
            }
            ,
            e.prototype.getClusters = function() {
                return this.clusters
            }
            ,
            e.prototype.getTotalClusters = function() {
                return this.clusters.length
            }
            ,
            e.prototype.addMarker = function(e, t) {
                this.pushMarkerTo(e),
                t || this.redraw()
            }
            ,
            e.prototype.addMarkers = function(e, t) {
                for (var n in e)
                    if (Object.prototype.hasOwnProperty.call(e, n)) {
                        var o = e[n];
                        o && this.pushMarkerTo(o)
                    }
                t || this.redraw()
            }
            ,
            e.prototype.pushMarkerTo = function(e) {
                var t = this;
                e.getDraggable() && google.maps.event.addListener(e, "dragend", (function() {
                    t.ready && (e.isAdded = !1,
                    t.repaint())
                }
                )),
                e.isAdded = !1,
                this.markers.push(e)
            }
            ,
            e.prototype.removeMarker_ = function(e) {
                var t = -1;
                if (this.markers.indexOf)
                    t = this.markers.indexOf(e);
                else
                    for (var n = 0; n < this.markers.length; n++)
                        if (e === this.markers[n]) {
                            t = n;
                            break
                        }
                return -1 !== t && (e.setMap(null),
                this.markers.splice(t, 1),
                !0)
            }
            ,
            e.prototype.removeMarker = function(e, t) {
                var n = this.removeMarker_(e);
                return !t && n && this.repaint(),
                n
            }
            ,
            e.prototype.removeMarkers = function(e, t) {
                for (var n = !1, o = 0, s = e; o < s.length; o++) {
                    var i = s[o];
                    n = n || this.removeMarker_(i)
                }
                return !t && n && this.repaint(),
                n
            }
            ,
            e.prototype.clearMarkers = function() {
                this.resetViewport(!0),
                this.markers = []
            }
            ,
            e.prototype.repaint = function() {
                var e = this.clusters.slice();
                this.clusters = [],
                this.resetViewport(!1),
                this.redraw(),
                setTimeout((function() {
                    for (var t = 0, n = e; t < n.length; t++) {
                        n[t].remove()
                    }
                }
                ), 0)
            }
            ,
            e.prototype.getExtendedBounds = function(e) {
                var t = this.getProjection()
                  , n = t.fromLatLngToDivPixel(new google.maps.LatLng(e.getNorthEast().lat(),e.getNorthEast().lng()));
                null !== n && (n.x += this.gridSize,
                n.y -= this.gridSize);
                var o = t.fromLatLngToDivPixel(new google.maps.LatLng(e.getSouthWest().lat(),e.getSouthWest().lng()));
                if (null !== o && (o.x -= this.gridSize,
                o.y += this.gridSize),
                null !== n) {
                    var s = t.fromDivPixelToLatLng(n);
                    null !== s && e.extend(s)
                }
                if (null !== o) {
                    var i = t.fromDivPixelToLatLng(o);
                    null !== i && e.extend(i)
                }
                return e
            }
            ,
            e.prototype.redraw = function() {
                this.createClusters(0)
            }
            ,
            e.prototype.resetViewport = function(e) {
                for (var t = 0, n = this.clusters; t < n.length; t++) {
                    n[t].remove()
                }
                this.clusters = [];
                for (var o = 0, s = this.markers; o < s.length; o++) {
                    var i = s[o];
                    i.isAdded = !1,
                    e && i.setMap(null)
                }
            }
            ,
            e.prototype.distanceBetweenPoints = function(e, t) {
                var n = (t.lat() - e.lat()) * Math.PI / 180
                  , o = (t.lng() - e.lng()) * Math.PI / 180
                  , s = Math.sin(n / 2) * Math.sin(n / 2) + Math.cos(e.lat() * Math.PI / 180) * Math.cos(t.lat() * Math.PI / 180) * Math.sin(o / 2) * Math.sin(o / 2);
                return 2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)) * 6371
            }
            ,
            e.prototype.isMarkerInBounds = function(e, t) {
                var n = e.getPosition();
                return !!n && t.contains(n)
            }
            ,
            e.prototype.addToClosestCluster = function(e) {
                for (var t, n = 4e4, o = null, s = 0, i = this.clusters; s < i.length; s++) {
                    var r = (t = i[s]).getCenter()
                      , a = e.getPosition();
                    if (r && a) {
                        var l = this.distanceBetweenPoints(r, a);
                        l < n && (n = l,
                        o = t)
                    }
                }
                o && o.isMarkerInClusterBounds(e) ? o.addMarker(e) : ((t = new H(this)).addMarker(e),
                this.clusters.push(t))
            }
            ,
            e.prototype.createClusters = function(e) {
                var t = this;
                if (this.ready) {
                    0 === e && (google.maps.event.trigger(this, "clusteringbegin", this),
                    null !== this.timerRefStatic && (window.clearTimeout(this.timerRefStatic),
                    delete this.timerRefStatic));
                    for (var n = this.getMap(), o = (null !== n && "getBounds"in n ? n.getBounds() : null), s = ((null === n || void 0 === n ? void 0 : n.getZoom()) || 0) > 3 ? new google.maps.LatLngBounds(null === o || void 0 === o ? void 0 : o.getSouthWest(),null === o || void 0 === o ? void 0 : o.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)), i = this.getExtendedBounds(s), r = Math.min(e + this.batchSize, this.markers.length), a = e; a < r; a++) {
                        var l = this.markers[a];
                        l && !l.isAdded && this.isMarkerInBounds(l, i) && (!this.ignoreHidden || this.ignoreHidden && l.getVisible()) && this.addToClosestCluster(l)
                    }
                    if (r < this.markers.length)
                        this.timerRefStatic = window.setTimeout((function() {
                            t.createClusters(r)
                        }
                        ), 0);
                    else {
                        this.timerRefStatic = null,
                        google.maps.event.trigger(this, "clusteringend", this);
                        for (var u = 0, p = this.clusters; u < p.length; u++) {
                            p[u].updateIcon()
                        }
                    }
                }
            }
            ,
            e.prototype.extend = function(e, t) {
                return function(e) {
                    for (var t in e.prototype) {
                        var n = t;
                        this.prototype[n] = e.prototype[n]
                    }
                    return this
                }
                .apply(e, [t])
            }
            ,
            e
        }()
          , $ = {
            onClick: "click",
            onClusteringBegin: "clusteringbegin",
            onClusteringEnd: "clusteringend",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover"
        }
          , K = {
            averageCenter: function(e, t) {
                e.setAverageCenter(t)
            },
            batchSizeIE: function(e, t) {
                e.setBatchSizeIE(t)
            },
            calculator: function(e, t) {
                e.setCalculator(t)
            },
            clusterClass: function(e, t) {
                e.setClusterClass(t)
            },
            enableRetinaIcons: function(e, t) {
                e.setEnableRetinaIcons(t)
            },
            gridSize: function(e, t) {
                e.setGridSize(t)
            },
            ignoreHidden: function(e, t) {
                e.setIgnoreHidden(t)
            },
            imageExtension: function(e, t) {
                e.setImageExtension(t)
            },
            imagePath: function(e, t) {
                e.setImagePath(t)
            },
            imageSizes: function(e, t) {
                e.setImageSizes(t)
            },
            maxZoom: function(e, t) {
                e.setMaxZoom(t)
            },
            minimumClusterSize: function(e, t) {
                e.setMinimumClusterSize(t)
            },
            styles: function(e, t) {
                e.setStyles(t)
            },
            title: function(e, t) {
                e.setTitle(t)
            },
            zoomOnClick: function(e, t) {
                e.setZoomOnClick(t)
            }
        }
          , q = {};
        (0,
        s.memo)((function(e) {
            var t = e.children
              , n = e.options
              , o = e.averageCenter
              , i = e.batchSizeIE
              , r = e.calculator
              , a = e.clusterClass
              , u = e.enableRetinaIcons
              , p = e.gridSize
              , c = e.ignoreHidden
              , d = e.imageExtension
              , g = e.imagePath
              , m = e.imageSizes
              , f = e.maxZoom
              , v = e.minimumClusterSize
              , y = e.styles
              , L = e.title
              , C = e.zoomOnClick
              , b = e.onClick
              , M = e.onClusteringBegin
              , E = e.onClusteringEnd
              , x = e.onMouseOver
              , k = e.onMouseOut
              , w = e.onLoad
              , S = e.onUnmount
              , P = (0,
            s.useState)(null)
              , I = P[0]
              , D = P[1]
              , O = (0,
            s.useContext)(h)
              , B = (0,
            s.useState)(null)
              , _ = B[0]
              , T = B[1]
              , U = (0,
            s.useState)(null)
              , z = U[0]
              , R = U[1]
              , A = (0,
            s.useState)(null)
              , Z = A[0]
              , V = A[1]
              , W = (0,
            s.useState)(null)
              , j = W[0]
              , N = W[1]
              , H = (0,
            s.useState)(null)
              , G = H[0]
              , F = H[1];
            return (0,
            s.useEffect)((function() {
                I && k && (null !== j && google.maps.event.removeListener(j),
                N(google.maps.event.addListener(I, $.onMouseOut, k)))
            }
            ), [k]),
            (0,
            s.useEffect)((function() {
                I && x && (null !== G && google.maps.event.removeListener(G),
                F(google.maps.event.addListener(I, $.onMouseOver, x)))
            }
            ), [x]),
            (0,
            s.useEffect)((function() {
                I && b && (null !== _ && google.maps.event.removeListener(_),
                T(google.maps.event.addListener(I, $.onClick, b)))
            }
            ), [b]),
            (0,
            s.useEffect)((function() {
                I && M && (null !== z && google.maps.event.removeListener(z),
                R(google.maps.event.addListener(I, $.onClusteringBegin, M)))
            }
            ), [M]),
            (0,
            s.useEffect)((function() {
                I && E && (null !== Z && google.maps.event.removeListener(Z),
                R(google.maps.event.addListener(I, $.onClusteringEnd, E)))
            }
            ), [E]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof o && null !== I && K.averageCenter(I, o)
            }
            ), [I, o]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof i && null !== I && K.batchSizeIE(I, i)
            }
            ), [I, i]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof r && null !== I && K.calculator(I, r)
            }
            ), [I, r]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof a && null !== I && K.clusterClass(I, a)
            }
            ), [I, a]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof u && null !== I && K.enableRetinaIcons(I, u)
            }
            ), [I, u]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof p && null !== I && K.gridSize(I, p)
            }
            ), [I, p]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof c && null !== I && K.ignoreHidden(I, c)
            }
            ), [I, c]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof d && null !== I && K.imageExtension(I, d)
            }
            ), [I, d]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof g && null !== I && K.imagePath(I, g)
            }
            ), [I, g]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof m && null !== I && K.imageSizes(I, m)
            }
            ), [I, m]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof f && null !== I && K.maxZoom(I, f)
            }
            ), [I, f]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof v && null !== I && K.minimumClusterSize(I, v)
            }
            ), [I, v]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof y && null !== I && K.styles(I, y)
            }
            ), [I, y]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof L && null !== I && K.title(I, L)
            }
            ), [I, L]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof C && null !== I && K.zoomOnClick(I, C)
            }
            ), [I, C]),
            (0,
            s.useEffect)((function() {
                if (O) {
                    var e = l({}, n || q)
                      , t = new Y(O,[],e);
                    return o && K.averageCenter(t, o),
                    i && K.batchSizeIE(t, i),
                    r && K.calculator(t, r),
                    a && K.clusterClass(t, a),
                    u && K.enableRetinaIcons(t, u),
                    p && K.gridSize(t, p),
                    c && K.ignoreHidden(t, c),
                    d && K.imageExtension(t, d),
                    g && K.imagePath(t, g),
                    m && K.imageSizes(t, m),
                    f && K.maxZoom(t, f),
                    v && K.minimumClusterSize(t, v),
                    y && K.styles(t, y),
                    L && K.title(t, L),
                    C && K.zoomOnClick(t, C),
                    k && N(google.maps.event.addListener(t, $.onMouseOut, k)),
                    x && F(google.maps.event.addListener(t, $.onMouseOver, x)),
                    b && T(google.maps.event.addListener(t, $.onClick, b)),
                    M && R(google.maps.event.addListener(t, $.onClusteringBegin, M)),
                    E && V(google.maps.event.addListener(t, $.onClusteringEnd, E)),
                    D(t),
                    w && w(t),
                    function() {
                        null !== j && google.maps.event.removeListener(j),
                        null !== G && google.maps.event.removeListener(G),
                        null !== _ && google.maps.event.removeListener(_),
                        null !== z && google.maps.event.removeListener(z),
                        null !== Z && google.maps.event.removeListener(Z),
                        S && S(t)
                    }
                }
            }
            ), []),
            null !== I && t(I) || null
        }
        ));
        var J = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    markerClusterer: null
                },
                t.setClustererCallback = function() {
                    null !== t.state.markerClusterer && t.props.onLoad && t.props.onLoad(t.state.markerClusterer)
                }
                ,
                t
            }
            return a(t, e),
            t.prototype.componentDidMount = function() {
                if (this.context) {
                    var e = new Y(this.context,[],this.props.options);
                    this.registeredEvents = L({
                        updaterMap: K,
                        eventMap: $,
                        prevProps: {},
                        nextProps: this.props,
                        instance: e
                    }),
                    this.setState((function() {
                        return {
                            markerClusterer: e
                        }
                    }
                    ), this.setClustererCallback)
                }
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                this.state.markerClusterer && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: K,
                    eventMap: $,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.markerClusterer
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.markerClusterer && (this.props.onUnmount && this.props.onUnmount(this.state.markerClusterer),
                y(this.registeredEvents),
                this.state.markerClusterer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null !== this.state.markerClusterer ? this.props.children(this.state.markerClusterer) : null
            }
            ,
            t.contextType = h,
            t
        }(s.PureComponent);
        function X(e) {
            e.cancelBubble = !0,
            e.stopPropagation && e.stopPropagation()
        }
        var Q = function() {
            function e(t) {
                void 0 === t && (t = {}),
                this.getCloseClickHandler = this.getCloseClickHandler.bind(this),
                this.closeClickHandler = this.closeClickHandler.bind(this),
                this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this),
                this.addClickHandler = this.addClickHandler.bind(this),
                this.getCloseBoxImg = this.getCloseBoxImg.bind(this),
                this.getBoxWidths = this.getBoxWidths.bind(this),
                this.setBoxStyle = this.setBoxStyle.bind(this),
                this.setPosition = this.setPosition.bind(this),
                this.getPosition = this.getPosition.bind(this),
                this.setOptions = this.setOptions.bind(this),
                this.setContent = this.setContent.bind(this),
                this.setVisible = this.setVisible.bind(this),
                this.getContent = this.getContent.bind(this),
                this.getVisible = this.getVisible.bind(this),
                this.setZIndex = this.setZIndex.bind(this),
                this.getZIndex = this.getZIndex.bind(this),
                this.onRemove = this.onRemove.bind(this),
                this.panBox = this.panBox.bind(this),
                this.extend = this.extend.bind(this),
                this.close = this.close.bind(this),
                this.draw = this.draw.bind(this),
                this.show = this.show.bind(this),
                this.hide = this.hide.bind(this),
                this.open = this.open.bind(this),
                this.extend(e, google.maps.OverlayView),
                this.content = t.content || "",
                this.disableAutoPan = t.disableAutoPan || !1,
                this.maxWidth = t.maxWidth || 0,
                this.pixelOffset = t.pixelOffset || new google.maps.Size(0,0),
                this.position = t.position || new google.maps.LatLng(0,0),
                this.zIndex = t.zIndex || null,
                this.boxClass = t.boxClass || "infoBox",
                this.boxStyle = t.boxStyle || {},
                this.closeBoxMargin = t.closeBoxMargin || "2px",
                this.closeBoxURL = t.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif",
                "" === t.closeBoxURL && (this.closeBoxURL = ""),
                this.infoBoxClearance = t.infoBoxClearance || new google.maps.Size(1,1),
                "undefined" === typeof t.visible && ("undefined" === typeof t.isHidden ? t.visible = !0 : t.visible = !t.isHidden),
                this.isHidden = !t.visible,
                this.alignBottom = t.alignBottom || !1,
                this.pane = t.pane || "floatPane",
                this.enableEventPropagation = t.enableEventPropagation || !1,
                this.div = null,
                this.closeListener = null,
                this.moveListener = null,
                this.mapListener = null,
                this.contextListener = null,
                this.eventListeners = null,
                this.fixedWidthSet = null
            }
            return e.prototype.createInfoBoxDiv = function() {
                var e = this;
                if (!this.div) {
                    this.div = document.createElement("div"),
                    this.setBoxStyle(),
                    "string" === typeof this.content ? this.div.innerHTML = this.getCloseBoxImg() + this.content : (this.div.innerHTML = this.getCloseBoxImg(),
                    this.div.appendChild(this.content));
                    var t = this.getPanes();
                    if (null !== t && t[this.pane].appendChild(this.div),
                    this.addClickHandler(),
                    this.div.style.width)
                        this.fixedWidthSet = !0;
                    else if (0 !== this.maxWidth && this.div.offsetWidth > this.maxWidth)
                        this.div.style.width = this.maxWidth + "px",
                        this.fixedWidthSet = !0;
                    else {
                        var n = this.getBoxWidths();
                        this.div.style.width = this.div.offsetWidth - n.left - n.right + "px",
                        this.fixedWidthSet = !1
                    }
                    if (this.panBox(this.disableAutoPan),
                    !this.enableEventPropagation) {
                        this.eventListeners = [];
                        for (var o = 0, s = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"]; o < s.length; o++) {
                            var i = s[o];
                            this.eventListeners.push(google.maps.event.addListener(this.div, i, X))
                        }
                        this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", (function() {
                            e.div && (e.div.style.cursor = "default")
                        }
                        )))
                    }
                    this.contextListener = google.maps.event.addListener(this.div, "contextmenu", (function(t) {
                        t.returnValue = !1,
                        t.preventDefault && t.preventDefault(),
                        e.enableEventPropagation || X(t)
                    }
                    )),
                    google.maps.event.trigger(this, "domready")
                }
            }
            ,
            e.prototype.getCloseBoxImg = function() {
                var e = "";
                return "" !== this.closeBoxURL && (e = '<img alt=""',
                e += ' aria-hidden="true"',
                e += " src='" + this.closeBoxURL + "'",
                e += " align=right",
                e += " style='",
                e += " position: relative;",
                e += " cursor: pointer;",
                e += " margin: " + this.closeBoxMargin + ";",
                e += "'>"),
                e
            }
            ,
            e.prototype.addClickHandler = function() {
                this.closeListener = this.div && this.div.firstChild && "" !== this.closeBoxURL ? google.maps.event.addListener(this.div.firstChild, "click", this.getCloseClickHandler()) : null
            }
            ,
            e.prototype.closeClickHandler = function(e) {
                e.cancelBubble = !0,
                e.stopPropagation && e.stopPropagation(),
                google.maps.event.trigger(this, "closeclick"),
                this.close()
            }
            ,
            e.prototype.getCloseClickHandler = function() {
                return this.closeClickHandler
            }
            ,
            e.prototype.panBox = function(e) {
                if (this.div && !e) {
                    var t = this.getMap();
                    if (t instanceof google.maps.Map) {
                        var n = 0
                          , o = 0
                          , s = t.getBounds();
                        s && !s.contains(this.position) && t.setCenter(this.position);
                        var i = t.getDiv()
                          , r = i.offsetWidth
                          , a = i.offsetHeight
                          , l = this.pixelOffset.width
                          , u = this.pixelOffset.height
                          , p = this.div.offsetWidth
                          , c = this.div.offsetHeight
                          , d = this.infoBoxClearance.width
                          , g = this.infoBoxClearance.height
                          , h = this.getProjection().fromLatLngToContainerPixel(this.position);
                        null !== h && (h.x < -l + d ? n = h.x + l - d : h.x + p + l + d > r && (n = h.x + p + l + d - r),
                        this.alignBottom ? h.y < -u + g + c ? o = h.y + u - g - c : h.y + u + g > a && (o = h.y + u + g - a) : h.y < -u + g ? o = h.y + u - g : h.y + c + u + g > a && (o = h.y + c + u + g - a)),
                        0 === n && 0 === o || t.panBy(n, o)
                    }
                }
            }
            ,
            e.prototype.setBoxStyle = function() {
                if (this.div) {
                    this.div.className = this.boxClass,
                    this.div.style.cssText = "";
                    var e = this.boxStyle;
                    for (var t in e)
                        Object.prototype.hasOwnProperty.call(e, t) && (this.div.style[t] = e[t]);
                    if (this.div.style.webkitTransform = "translateZ(0)",
                    "undefined" !== typeof this.div.style.opacity && "" !== this.div.style.opacity) {
                        var n = parseFloat(this.div.style.opacity || "");
                        this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + 100 * n + ')"',
                        this.div.style.filter = "alpha(opacity=" + 100 * n + ")"
                    }
                    this.div.style.position = "absolute",
                    this.div.style.visibility = "hidden",
                    null !== this.zIndex && (this.div.style.zIndex = this.zIndex + ""),
                    this.div.style.overflow || (this.div.style.overflow = "auto")
                }
            }
            ,
            e.prototype.getBoxWidths = function() {
                var e = {
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                };
                if (!this.div)
                    return e;
                if (document.defaultView) {
                    var t = this.div.ownerDocument
                      , n = t && t.defaultView ? t.defaultView.getComputedStyle(this.div, "") : null;
                    n && (e.top = parseInt(n.borderTopWidth || "", 10) || 0,
                    e.bottom = parseInt(n.borderBottomWidth || "", 10) || 0,
                    e.left = parseInt(n.borderLeftWidth || "", 10) || 0,
                    e.right = parseInt(n.borderRightWidth || "", 10) || 0)
                } else if (document.documentElement.currentStyle) {
                    var o = this.div.currentStyle;
                    o && (e.top = parseInt(o.borderTopWidth || "", 10) || 0,
                    e.bottom = parseInt(o.borderBottomWidth || "", 10) || 0,
                    e.left = parseInt(o.borderLeftWidth || "", 10) || 0,
                    e.right = parseInt(o.borderRightWidth || "", 10) || 0)
                }
                return e
            }
            ,
            e.prototype.onRemove = function() {
                this.div && this.div.parentNode && (this.div.parentNode.removeChild(this.div),
                this.div = null)
            }
            ,
            e.prototype.draw = function() {
                if (this.createInfoBoxDiv(),
                this.div) {
                    var e = this.getProjection().fromLatLngToDivPixel(this.position);
                    null !== e && (this.div.style.left = e.x + this.pixelOffset.width + "px",
                    this.alignBottom ? this.div.style.bottom = -(e.y + this.pixelOffset.height) + "px" : this.div.style.top = e.y + this.pixelOffset.height + "px"),
                    this.isHidden ? this.div.style.visibility = "hidden" : this.div.style.visibility = "visible"
                }
            }
            ,
            e.prototype.setOptions = function(e) {
                void 0 === e && (e = {}),
                "undefined" !== typeof e.boxClass && (this.boxClass = e.boxClass,
                this.setBoxStyle()),
                "undefined" !== typeof e.boxStyle && (this.boxStyle = e.boxStyle,
                this.setBoxStyle()),
                "undefined" !== typeof e.content && this.setContent(e.content),
                "undefined" !== typeof e.disableAutoPan && (this.disableAutoPan = e.disableAutoPan),
                "undefined" !== typeof e.maxWidth && (this.maxWidth = e.maxWidth),
                "undefined" !== typeof e.pixelOffset && (this.pixelOffset = e.pixelOffset),
                "undefined" !== typeof e.alignBottom && (this.alignBottom = e.alignBottom),
                "undefined" !== typeof e.position && this.setPosition(e.position),
                "undefined" !== typeof e.zIndex && this.setZIndex(e.zIndex),
                "undefined" !== typeof e.closeBoxMargin && (this.closeBoxMargin = e.closeBoxMargin),
                "undefined" !== typeof e.closeBoxURL && (this.closeBoxURL = e.closeBoxURL),
                "undefined" !== typeof e.infoBoxClearance && (this.infoBoxClearance = e.infoBoxClearance),
                "undefined" !== typeof e.isHidden && (this.isHidden = e.isHidden),
                "undefined" !== typeof e.visible && (this.isHidden = !e.visible),
                "undefined" !== typeof e.enableEventPropagation && (this.enableEventPropagation = e.enableEventPropagation),
                this.div && this.draw()
            }
            ,
            e.prototype.setContent = function(e) {
                this.content = e,
                this.div && (this.closeListener && (google.maps.event.removeListener(this.closeListener),
                this.closeListener = null),
                this.fixedWidthSet || (this.div.style.width = ""),
                "string" === typeof e ? this.div.innerHTML = this.getCloseBoxImg() + e : (this.div.innerHTML = this.getCloseBoxImg(),
                this.div.appendChild(e)),
                this.fixedWidthSet || (this.div.style.width = this.div.offsetWidth + "px",
                "string" === typeof e ? this.div.innerHTML = this.getCloseBoxImg() + e : (this.div.innerHTML = this.getCloseBoxImg(),
                this.div.appendChild(e))),
                this.addClickHandler()),
                google.maps.event.trigger(this, "content_changed")
            }
            ,
            e.prototype.setPosition = function(e) {
                this.position = e,
                this.div && this.draw(),
                google.maps.event.trigger(this, "position_changed")
            }
            ,
            e.prototype.setVisible = function(e) {
                this.isHidden = !e,
                this.div && (this.div.style.visibility = this.isHidden ? "hidden" : "visible")
            }
            ,
            e.prototype.setZIndex = function(e) {
                this.zIndex = e,
                this.div && (this.div.style.zIndex = e + ""),
                google.maps.event.trigger(this, "zindex_changed")
            }
            ,
            e.prototype.getContent = function() {
                return this.content
            }
            ,
            e.prototype.getPosition = function() {
                return this.position
            }
            ,
            e.prototype.getZIndex = function() {
                return this.zIndex
            }
            ,
            e.prototype.getVisible = function() {
                var e = this.getMap();
                return "undefined" !== typeof e && null !== e && !this.isHidden
            }
            ,
            e.prototype.show = function() {
                this.isHidden = !1,
                this.div && (this.div.style.visibility = "visible")
            }
            ,
            e.prototype.hide = function() {
                this.isHidden = !0,
                this.div && (this.div.style.visibility = "hidden")
            }
            ,
            e.prototype.open = function(e, t) {
                var n = this;
                t && (this.position = t.getPosition(),
                this.moveListener = google.maps.event.addListener(t, "position_changed", (function() {
                    var e = t.getPosition();
                    n.setPosition(e)
                }
                )),
                this.mapListener = google.maps.event.addListener(t, "map_changed", (function() {
                    n.setMap(t.map)
                }
                ))),
                this.setMap(e),
                this.div && this.panBox()
            }
            ,
            e.prototype.close = function() {
                if (this.closeListener && (google.maps.event.removeListener(this.closeListener),
                this.closeListener = null),
                this.eventListeners) {
                    for (var e = 0, t = this.eventListeners; e < t.length; e++) {
                        var n = t[e];
                        google.maps.event.removeListener(n)
                    }
                    this.eventListeners = null
                }
                this.moveListener && (google.maps.event.removeListener(this.moveListener),
                this.moveListener = null),
                this.mapListener && (google.maps.event.removeListener(this.mapListener),
                this.mapListener = null),
                this.contextListener && (google.maps.event.removeListener(this.contextListener),
                this.contextListener = null),
                this.setMap(null)
            }
            ,
            e.prototype.extend = function(e, t) {
                return function(e) {
                    for (var t in e.prototype)
                        Object.prototype.hasOwnProperty.call(this, t) || (this.prototype[t] = e.prototype[t]);
                    return this
                }
                .apply(e, [t])
            }
            ,
            e
        }()
          , ee = {
            onCloseClick: "closeclick",
            onContentChanged: "content_changed",
            onDomReady: "domready",
            onPositionChanged: "position_changed",
            onZindexChanged: "zindex_changed"
        }
          , te = {
            options: function(e, t) {
                e.setOptions(t)
            },
            position: function(e, t) {
                t instanceof google.maps.LatLng ? e.setPosition(t) : e.setPosition(new google.maps.LatLng(t.lat,t.lng))
            },
            visible: function(e, t) {
                e.setVisible(t)
            },
            zIndex: function(e, t) {
                e.setZIndex(t)
            }
        }
          , ne = {};
        (0,
        s.memo)((function(e) {
            var t = e.children
              , n = e.anchor
              , o = e.options
              , r = e.position
              , a = e.zIndex
              , p = e.onCloseClick
              , c = e.onDomReady
              , d = e.onContentChanged
              , m = e.onPositionChanged
              , f = e.onZindexChanged
              , v = e.onLoad
              , y = e.onUnmount
              , L = (0,
            s.useContext)(h)
              , C = (0,
            s.useState)(null)
              , b = C[0]
              , M = C[1]
              , E = (0,
            s.useState)(null)
              , x = E[0]
              , k = E[1]
              , w = (0,
            s.useState)(null)
              , S = w[0]
              , P = w[1]
              , I = (0,
            s.useState)(null)
              , D = I[0]
              , O = I[1]
              , B = (0,
            s.useState)(null)
              , _ = B[0]
              , T = B[1]
              , U = (0,
            s.useState)(null)
              , z = U[0]
              , R = U[1]
              , A = (0,
            s.useRef)(null);
            return (0,
            s.useEffect)((function() {
                L && null !== b && (b.close(),
                n ? b.open(L, n) : b.getPosition() && b.open(L))
            }
            ), [L, b, n]),
            (0,
            s.useEffect)((function() {
                o && null !== b && b.setOptions(o)
            }
            ), [b, o]),
            (0,
            s.useEffect)((function() {
                if (r && null !== b) {
                    var e = r instanceof google.maps.LatLng ? r : new google.maps.LatLng(r.lat,r.lng);
                    b.setPosition(e)
                }
            }
            ), [r]),
            (0,
            s.useEffect)((function() {
                "number" === typeof a && null !== b && b.setZIndex(a)
            }
            ), [a]),
            (0,
            s.useEffect)((function() {
                b && p && (null !== x && google.maps.event.removeListener(x),
                k(google.maps.event.addListener(b, "closeclick", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                b && c && (null !== S && google.maps.event.removeListener(S),
                P(google.maps.event.addListener(b, "domready", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                b && d && (null !== D && google.maps.event.removeListener(D),
                O(google.maps.event.addListener(b, "content_changed", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                b && m && (null !== _ && google.maps.event.removeListener(_),
                T(google.maps.event.addListener(b, "position_changed", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                b && f && (null !== z && google.maps.event.removeListener(z),
                R(google.maps.event.addListener(b, "zindex_changed", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                if (L) {
                    var e = o || ne
                      , t = e.position
                      , s = u(e, ["position"])
                      , i = void 0;
                    !t || t instanceof google.maps.LatLng || (i = new google.maps.LatLng(t.lat,t.lng));
                    var r = new Q(l(l({}, s), i ? {
                        position: i
                    } : {}));
                    A.current = document.createElement("div"),
                    M(r),
                    p && k(google.maps.event.addListener(r, "closeclick", p)),
                    c && P(google.maps.event.addListener(r, "domready", c)),
                    d && O(google.maps.event.addListener(r, "content_changed", d)),
                    m && T(google.maps.event.addListener(r, "position_changed", m)),
                    f && R(google.maps.event.addListener(r, "zindex_changed", f)),
                    r.setContent(A.current),
                    n ? r.open(L, n) : r.getPosition() ? r.open(L) : g(!1, "You must provide either an anchor or a position prop for <InfoBox>."),
                    v && v(r)
                }
                return function() {
                    null !== b && (x && google.maps.event.removeListener(x),
                    D && google.maps.event.removeListener(D),
                    S && google.maps.event.removeListener(S),
                    _ && google.maps.event.removeListener(_),
                    z && google.maps.event.removeListener(z),
                    y && y(b),
                    b.close())
                }
            }
            ), []),
            A.current ? (0,
            i.createPortal)(s.Children.only(t), A.current) : null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.containerElement = null,
                t.state = {
                    infoBox: null
                },
                t.open = function(e, n) {
                    n ? null !== t.context && e.open(t.context, n) : e.getPosition() ? null !== t.context && e.open(t.context) : g(!1, "You must provide either an anchor or a position prop for <InfoBox>.")
                }
                ,
                t.setInfoBoxCallback = function() {
                    null !== t.state.infoBox && null !== t.containerElement && (t.state.infoBox.setContent(t.containerElement),
                    t.open(t.state.infoBox, t.props.anchor),
                    t.props.onLoad && t.props.onLoad(t.state.infoBox))
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e, t = this.props.options || {}, n = t.position, o = u(t, ["position"]);
                !n || n instanceof google.maps.LatLng || (e = new google.maps.LatLng(n.lat,n.lng));
                var s = new Q(l(l({}, o), e ? {
                    position: e
                } : {}));
                this.containerElement = document.createElement("div"),
                this.registeredEvents = L({
                    updaterMap: te,
                    eventMap: ee,
                    prevProps: {},
                    nextProps: this.props,
                    instance: s
                }),
                this.setState({
                    infoBox: s
                }, this.setInfoBoxCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                var t = this.state.infoBox;
                null !== t && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: te,
                    eventMap: ee,
                    prevProps: e,
                    nextProps: this.props,
                    instance: t
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e = this.props.onUnmount
                  , t = this.state.infoBox;
                null !== t && (e && e(t),
                y(this.registeredEvents),
                t.close())
            }
            ,
            t.prototype.render = function() {
                return this.containerElement ? (0,
                i.createPortal)(s.Children.only(this.props.children), this.containerElement) : null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var oe = function e(t, n) {
            if (t === n)
                return !0;
            if (t && n && "object" == typeof t && "object" == typeof n) {
                if (t.constructor !== n.constructor)
                    return !1;
                var o, s, i;
                if (Array.isArray(t)) {
                    if ((o = t.length) != n.length)
                        return !1;
                    for (s = o; 0 !== s--; )
                        if (!e(t[s], n[s]))
                            return !1;
                    return !0
                }
                if (t.constructor === RegExp)
                    return t.source === n.source && t.flags === n.flags;
                if (t.valueOf !== Object.prototype.valueOf)
                    return t.valueOf() === n.valueOf();
                if (t.toString !== Object.prototype.toString)
                    return t.toString() === n.toString();
                if ((o = (i = Object.keys(t)).length) !== Object.keys(n).length)
                    return !1;
                for (s = o; 0 !== s--; )
                    if (!Object.prototype.hasOwnProperty.call(n, i[s]))
                        return !1;
                for (s = o; 0 !== s--; ) {
                    var r = i[s];
                    if (!e(t[r], n[r]))
                        return !1
                }
                return !0
            }
            return t !== t && n !== n
        }
          , se = d(oe);
        const ie = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array];
        class re {
            static from(e) {
                if (!(e instanceof ArrayBuffer))
                    throw new Error("Data must be an instance of ArrayBuffer.");
                const [t,n] = new Uint8Array(e,0,2);
                if (219 !== t)
                    throw new Error("Data does not appear to be in a KDBush format.");
                const o = n >> 4;
                if (1 !== o)
                    throw new Error(`Got v${o} data when expected v1.`);
                const s = ie[15 & n];
                if (!s)
                    throw new Error("Unrecognized array type.");
                const [i] = new Uint16Array(e,2,1)
                  , [r] = new Uint32Array(e,4,1);
                return new re(r,i,s,e)
            }
            constructor(e, t=64, n=Float64Array, o) {
                if (isNaN(e) || e < 0)
                    throw new Error(`Unpexpected numItems value: ${e}.`);
                this.numItems = +e,
                this.nodeSize = Math.min(Math.max(+t, 2), 65535),
                this.ArrayType = n,
                this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
                const s = ie.indexOf(this.ArrayType)
                  , i = 2 * e * this.ArrayType.BYTES_PER_ELEMENT
                  , r = e * this.IndexArrayType.BYTES_PER_ELEMENT
                  , a = (8 - r % 8) % 8;
                if (s < 0)
                    throw new Error(`Unexpected typed array class: ${n}.`);
                o && o instanceof ArrayBuffer ? (this.data = o,
                this.ids = new this.IndexArrayType(this.data,8,e),
                this.coords = new this.ArrayType(this.data,8 + r + a,2 * e),
                this._pos = 2 * e,
                this._finished = !0) : (this.data = new ArrayBuffer(8 + i + r + a),
                this.ids = new this.IndexArrayType(this.data,8,e),
                this.coords = new this.ArrayType(this.data,8 + r + a,2 * e),
                this._pos = 0,
                this._finished = !1,
                new Uint8Array(this.data,0,2).set([219, 16 + s]),
                new Uint16Array(this.data,2,1)[0] = t,
                new Uint32Array(this.data,4,1)[0] = e)
            }
            add(e, t) {
                const n = this._pos >> 1;
                return this.ids[n] = n,
                this.coords[this._pos++] = e,
                this.coords[this._pos++] = t,
                n
            }
            finish() {
                const e = this._pos >> 1;
                if (e !== this.numItems)
                    throw new Error(`Added ${e} items when expected ${this.numItems}.`);
                return ae(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0),
                this._finished = !0,
                this
            }
            range(e, t, n, o) {
                if (!this._finished)
                    throw new Error("Data not yet indexed - call index.finish().");
                const {ids: s, coords: i, nodeSize: r} = this
                  , a = [0, s.length - 1, 0]
                  , l = [];
                for (; a.length; ) {
                    const u = a.pop() || 0
                      , p = a.pop() || 0
                      , c = a.pop() || 0;
                    if (p - c <= r) {
                        for (let r = c; r <= p; r++) {
                            const a = i[2 * r]
                              , u = i[2 * r + 1];
                            a >= e && a <= n && u >= t && u <= o && l.push(s[r])
                        }
                        continue
                    }
                    const d = c + p >> 1
                      , g = i[2 * d]
                      , h = i[2 * d + 1];
                    g >= e && g <= n && h >= t && h <= o && l.push(s[d]),
                    (0 === u ? e <= g : t <= h) && (a.push(c),
                    a.push(d - 1),
                    a.push(1 - u)),
                    (0 === u ? n >= g : o >= h) && (a.push(d + 1),
                    a.push(p),
                    a.push(1 - u))
                }
                return l
            }
            within(e, t, n) {
                if (!this._finished)
                    throw new Error("Data not yet indexed - call index.finish().");
                const {ids: o, coords: s, nodeSize: i} = this
                  , r = [0, o.length - 1, 0]
                  , a = []
                  , l = n * n;
                for (; r.length; ) {
                    const u = r.pop() || 0
                      , p = r.pop() || 0
                      , c = r.pop() || 0;
                    if (p - c <= i) {
                        for (let n = c; n <= p; n++)
                            ce(s[2 * n], s[2 * n + 1], e, t) <= l && a.push(o[n]);
                        continue
                    }
                    const d = c + p >> 1
                      , g = s[2 * d]
                      , h = s[2 * d + 1];
                    ce(g, h, e, t) <= l && a.push(o[d]),
                    (0 === u ? e - n <= g : t - n <= h) && (r.push(c),
                    r.push(d - 1),
                    r.push(1 - u)),
                    (0 === u ? e + n >= g : t + n >= h) && (r.push(d + 1),
                    r.push(p),
                    r.push(1 - u))
                }
                return a
            }
        }
        function ae(e, t, n, o, s, i) {
            if (s - o <= n)
                return;
            const r = o + s >> 1;
            le(e, t, r, o, s, i),
            ae(e, t, n, o, r - 1, 1 - i),
            ae(e, t, n, r + 1, s, 1 - i)
        }
        function le(e, t, n, o, s, i) {
            for (; s > o; ) {
                if (s - o > 600) {
                    const r = s - o + 1
                      , a = n - o + 1
                      , l = Math.log(r)
                      , u = .5 * Math.exp(2 * l / 3)
                      , p = .5 * Math.sqrt(l * u * (r - u) / r) * (a - r / 2 < 0 ? -1 : 1);
                    le(e, t, n, Math.max(o, Math.floor(n - a * u / r + p)), Math.min(s, Math.floor(n + (r - a) * u / r + p)), i)
                }
                const r = t[2 * n + i];
                let a = o
                  , l = s;
                for (ue(e, t, o, n),
                t[2 * s + i] > r && ue(e, t, o, s); a < l; ) {
                    for (ue(e, t, a, l),
                    a++,
                    l--; t[2 * a + i] < r; )
                        a++;
                    for (; t[2 * l + i] > r; )
                        l--
                }
                t[2 * o + i] === r ? ue(e, t, o, l) : (l++,
                ue(e, t, l, s)),
                l <= n && (o = l + 1),
                n <= l && (s = l - 1)
            }
        }
        function ue(e, t, n, o) {
            pe(e, n, o),
            pe(t, 2 * n, 2 * o),
            pe(t, 2 * n + 1, 2 * o + 1)
        }
        function pe(e, t, n) {
            const o = e[t];
            e[t] = e[n],
            e[n] = o
        }
        function ce(e, t, n, o) {
            const s = e - n
              , i = t - o;
            return s * s + i * i
        }
        const de = {
            minZoom: 0,
            maxZoom: 16,
            minPoints: 2,
            radius: 40,
            extent: 512,
            nodeSize: 64,
            log: !1,
            generateId: !1,
            reduce: null,
            map: e=>e
        }
          , ge = Math.fround || (he = new Float32Array(1),
        e=>(he[0] = +e,
        he[0]));
        var he;
        class me {
            constructor(e) {
                this.options = Object.assign(Object.create(de), e),
                this.trees = new Array(this.options.maxZoom + 1),
                this.stride = this.options.reduce ? 7 : 6,
                this.clusterProps = []
            }
            load(e) {
                const {log: t, minZoom: n, maxZoom: o} = this.options;
                t && console.time("total time");
                const s = `prepare ${e.length} points`;
                t && console.time(s),
                this.points = e;
                const i = [];
                for (let a = 0; a < e.length; a++) {
                    const t = e[a];
                    if (!t.geometry)
                        continue;
                    const [n,o] = t.geometry.coordinates
                      , s = ge(ye(n))
                      , r = ge(Le(o));
                    i.push(s, r, 1 / 0, a, -1, 1),
                    this.options.reduce && i.push(0)
                }
                let r = this.trees[o + 1] = this._createTree(i);
                t && console.timeEnd(s);
                for (let a = o; a >= n; a--) {
                    const e = +Date.now();
                    r = this.trees[a] = this._createTree(this._cluster(r, a)),
                    t && console.log("z%d: %d clusters in %dms", a, r.numItems, +Date.now() - e)
                }
                return t && console.timeEnd("total time"),
                this
            }
            getClusters(e, t) {
                let n = ((e[0] + 180) % 360 + 360) % 360 - 180;
                const o = Math.max(-90, Math.min(90, e[1]));
                let s = 180 === e[2] ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
                const i = Math.max(-90, Math.min(90, e[3]));
                if (e[2] - e[0] >= 360)
                    n = -180,
                    s = 180;
                else if (n > s) {
                    const e = this.getClusters([n, o, 180, i], t)
                      , r = this.getClusters([-180, o, s, i], t);
                    return e.concat(r)
                }
                const r = this.trees[this._limitZoom(t)]
                  , a = r.range(ye(n), Le(i), ye(s), Le(o))
                  , l = r.data
                  , u = [];
                for (const p of a) {
                    const e = this.stride * p;
                    u.push(l[e + 5] > 1 ? fe(l, e, this.clusterProps) : this.points[l[e + 3]])
                }
                return u
            }
            getChildren(e) {
                const t = this._getOriginId(e)
                  , n = this._getOriginZoom(e)
                  , o = "No cluster with the specified id."
                  , s = this.trees[n];
                if (!s)
                    throw new Error(o);
                const i = s.data;
                if (t * this.stride >= i.length)
                    throw new Error(o);
                const r = this.options.radius / (this.options.extent * Math.pow(2, n - 1))
                  , a = i[t * this.stride]
                  , l = i[t * this.stride + 1]
                  , u = s.within(a, l, r)
                  , p = [];
                for (const c of u) {
                    const t = c * this.stride;
                    i[t + 4] === e && p.push(i[t + 5] > 1 ? fe(i, t, this.clusterProps) : this.points[i[t + 3]])
                }
                if (0 === p.length)
                    throw new Error(o);
                return p
            }
            getLeaves(e, t, n) {
                t = t || 10,
                n = n || 0;
                const o = [];
                return this._appendLeaves(o, e, t, n, 0),
                o
            }
            getTile(e, t, n) {
                const o = this.trees[this._limitZoom(e)]
                  , s = Math.pow(2, e)
                  , {extent: i, radius: r} = this.options
                  , a = r / i
                  , l = (n - a) / s
                  , u = (n + 1 + a) / s
                  , p = {
                    features: []
                };
                return this._addTileFeatures(o.range((t - a) / s, l, (t + 1 + a) / s, u), o.data, t, n, s, p),
                0 === t && this._addTileFeatures(o.range(1 - a / s, l, 1, u), o.data, s, n, s, p),
                t === s - 1 && this._addTileFeatures(o.range(0, l, a / s, u), o.data, -1, n, s, p),
                p.features.length ? p : null
            }
            getClusterExpansionZoom(e) {
                let t = this._getOriginZoom(e) - 1;
                for (; t <= this.options.maxZoom; ) {
                    const n = this.getChildren(e);
                    if (t++,
                    1 !== n.length)
                        break;
                    e = n[0].properties.cluster_id
                }
                return t
            }
            _appendLeaves(e, t, n, o, s) {
                const i = this.getChildren(t);
                for (const r of i) {
                    const t = r.properties;
                    if (t && t.cluster ? s + t.point_count <= o ? s += t.point_count : s = this._appendLeaves(e, t.cluster_id, n, o, s) : s < o ? s++ : e.push(r),
                    e.length === n)
                        break
                }
                return s
            }
            _createTree(e) {
                const t = new re(e.length / this.stride | 0,this.options.nodeSize,Float32Array);
                for (let n = 0; n < e.length; n += this.stride)
                    t.add(e[n], e[n + 1]);
                return t.finish(),
                t.data = e,
                t
            }
            _addTileFeatures(e, t, n, o, s, i) {
                for (const r of e) {
                    const e = r * this.stride
                      , a = t[e + 5] > 1;
                    let l, u, p;
                    if (a)
                        l = ve(t, e, this.clusterProps),
                        u = t[e],
                        p = t[e + 1];
                    else {
                        const n = this.points[t[e + 3]];
                        l = n.properties;
                        const [o,s] = n.geometry.coordinates;
                        u = ye(o),
                        p = Le(s)
                    }
                    const c = {
                        type: 1,
                        geometry: [[Math.round(this.options.extent * (u * s - n)), Math.round(this.options.extent * (p * s - o))]],
                        tags: l
                    };
                    let d;
                    d = a || this.options.generateId ? t[e + 3] : this.points[t[e + 3]].id,
                    void 0 !== d && (c.id = d),
                    i.features.push(c)
                }
            }
            _limitZoom(e) {
                return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1))
            }
            _cluster(e, t) {
                const {radius: n, extent: o, reduce: s, minPoints: i} = this.options
                  , r = n / (o * Math.pow(2, t))
                  , a = e.data
                  , l = []
                  , u = this.stride;
                for (let p = 0; p < a.length; p += u) {
                    if (a[p + 2] <= t)
                        continue;
                    a[p + 2] = t;
                    const n = a[p]
                      , o = a[p + 1]
                      , c = e.within(a[p], a[p + 1], r)
                      , d = a[p + 5];
                    let g = d;
                    for (const e of c) {
                        const n = e * u;
                        a[n + 2] > t && (g += a[n + 5])
                    }
                    if (g > d && g >= i) {
                        let e, i = n * d, r = o * d, h = -1;
                        const m = ((p / u | 0) << 5) + (t + 1) + this.points.length;
                        for (const n of c) {
                            const o = n * u;
                            if (a[o + 2] <= t)
                                continue;
                            a[o + 2] = t;
                            const l = a[o + 5];
                            i += a[o] * l,
                            r += a[o + 1] * l,
                            a[o + 4] = m,
                            s && (e || (e = this._map(a, p, !0),
                            h = this.clusterProps.length,
                            this.clusterProps.push(e)),
                            s(e, this._map(a, o)))
                        }
                        a[p + 4] = m,
                        l.push(i / g, r / g, 1 / 0, m, -1, g),
                        s && l.push(h)
                    } else {
                        for (let e = 0; e < u; e++)
                            l.push(a[p + e]);
                        if (g > 1)
                            for (const e of c) {
                                const n = e * u;
                                if (!(a[n + 2] <= t)) {
                                    a[n + 2] = t;
                                    for (let e = 0; e < u; e++)
                                        l.push(a[n + e])
                                }
                            }
                    }
                }
                return l
            }
            _getOriginId(e) {
                return e - this.points.length >> 5
            }
            _getOriginZoom(e) {
                return (e - this.points.length) % 32
            }
            _map(e, t, n) {
                if (e[t + 5] > 1) {
                    const o = this.clusterProps[e[t + 6]];
                    return n ? Object.assign({}, o) : o
                }
                const o = this.points[e[t + 3]].properties
                  , s = this.options.map(o);
                return n && s === o ? Object.assign({}, s) : s
            }
        }
        function fe(e, t, n) {
            return {
                type: "Feature",
                id: e[t + 3],
                properties: ve(e, t, n),
                geometry: {
                    type: "Point",
                    coordinates: [(o = e[t],
                    360 * (o - .5)), Ce(e[t + 1])]
                }
            };
            var o
        }
        function ve(e, t, n) {
            const o = e[t + 5]
              , s = o >= 1e4 ? `${Math.round(o / 1e3)}k` : o >= 1e3 ? Math.round(o / 100) / 10 + "k" : o
              , i = e[t + 6]
              , r = -1 === i ? {} : Object.assign({}, n[i]);
            return Object.assign(r, {
                cluster: !0,
                cluster_id: e[t + 3],
                point_count: o,
                point_count_abbreviated: s
            })
        }
        function ye(e) {
            return e / 360 + .5
        }
        function Le(e) {
            const t = Math.sin(e * Math.PI / 180)
              , n = .5 - .25 * Math.log((1 + t) / (1 - t)) / Math.PI;
            return n < 0 ? 0 : n > 1 ? 1 : n
        }
        function Ce(e) {
            const t = (180 - 360 * e) * Math.PI / 180;
            return 360 * Math.atan(Math.exp(t)) / Math.PI - 90
        }
        function be(e, t) {
            var n = {};
            for (var o in e)
                Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (n[o] = e[o]);
            if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (o = Object.getOwnPropertySymbols(e); s < o.length; s++)
                    t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (n[o[s]] = e[o[s]])
            }
            return n
        }
        class Me {
            static isAdvancedMarkerAvailable(e) {
                return google.maps.marker && !0 === e.getMapCapabilities().isAdvancedMarkersAvailable
            }
            static isAdvancedMarker(e) {
                return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement
            }
            static setMap(e, t) {
                this.isAdvancedMarker(e) ? e.map = t : e.setMap(t)
            }
            static getPosition(e) {
                if (this.isAdvancedMarker(e)) {
                    if (e.position) {
                        if (e.position instanceof google.maps.LatLng)
                            return e.position;
                        if (e.position.lat && e.position.lng)
                            return new google.maps.LatLng(e.position.lat,e.position.lng)
                    }
                    return new google.maps.LatLng(null)
                }
                return e.getPosition()
            }
            static getVisible(e) {
                return !!this.isAdvancedMarker(e) || e.getVisible()
            }
        }
        class Ee {
            constructor({markers: e, position: t}) {
                this.markers = e,
                t && (t instanceof google.maps.LatLng ? this._position = t : this._position = new google.maps.LatLng(t))
            }
            get bounds() {
                if (0 === this.markers.length && !this._position)
                    return;
                const e = new google.maps.LatLngBounds(this._position,this._position);
                for (const t of this.markers)
                    e.extend(Me.getPosition(t));
                return e
            }
            get position() {
                return this._position || this.bounds.getCenter()
            }
            get count() {
                return this.markers.filter((e=>Me.getVisible(e))).length
            }
            push(e) {
                this.markers.push(e)
            }
            delete() {
                this.marker && (Me.setMap(this.marker, null),
                this.marker = void 0),
                this.markers.length = 0
            }
        }
        class xe {
            constructor({maxZoom: e=16}) {
                this.maxZoom = e
            }
            noop({markers: e}) {
                return ke(e)
            }
        }
        const ke = e=>e.map((e=>new Ee({
            position: Me.getPosition(e),
            markers: [e]
        })));
        class we extends xe {
            constructor(e) {
                var {maxZoom: t, radius: n=60} = e
                  , o = be(e, ["maxZoom", "radius"]);
                super({
                    maxZoom: t
                }),
                this.state = {
                    zoom: -1
                },
                this.superCluster = new me(Object.assign({
                    maxZoom: this.maxZoom,
                    radius: n
                }, o))
            }
            calculate(e) {
                let t = !1;
                const n = {
                    zoom: e.map.getZoom()
                };
                if (!se(e.markers, this.markers)) {
                    t = !0,
                    this.markers = [...e.markers];
                    const n = this.markers.map((e=>{
                        const t = Me.getPosition(e);
                        return {
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [t.lng(), t.lat()]
                            },
                            properties: {
                                marker: e
                            }
                        }
                    }
                    ));
                    this.superCluster.load(n)
                }
                return t || (this.state.zoom <= this.maxZoom || n.zoom <= this.maxZoom) && (t = !se(this.state, n)),
                this.state = n,
                t && (this.clusters = this.cluster(e)),
                {
                    clusters: this.clusters,
                    changed: t
                }
            }
            cluster({map: e}) {
                return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map((e=>this.transformCluster(e)))
            }
            transformCluster({geometry: {coordinates: [e,t]}, properties: n}) {
                if (n.cluster)
                    return new Ee({
                        markers: this.superCluster.getLeaves(n.cluster_id, 1 / 0).map((e=>e.properties.marker)),
                        position: {
                            lat: t,
                            lng: e
                        }
                    });
                const o = n.marker;
                return new Ee({
                    markers: [o],
                    position: Me.getPosition(o)
                })
            }
        }
        class Se {
            constructor(e, t) {
                this.markers = {
                    sum: e.length
                };
                const n = t.map((e=>e.count))
                  , o = n.reduce(((e,t)=>e + t), 0);
                this.clusters = {
                    count: t.length,
                    markers: {
                        mean: o / t.length,
                        sum: o,
                        min: Math.min(...n),
                        max: Math.max(...n)
                    }
                }
            }
        }
        class Pe {
            render({count: e, position: t}, n, o) {
                const s = `<svg fill="${e > Math.max(10, n.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">\n<circle cx="120" cy="120" opacity=".6" r="70" />\n<circle cx="120" cy="120" opacity=".3" r="90" />\n<circle cx="120" cy="120" opacity=".2" r="110" />\n<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>\n</svg>`
                  , i = `Cluster of ${e} markers`
                  , r = Number(google.maps.Marker.MAX_ZINDEX) + e;
                if (Me.isAdvancedMarkerAvailable(o)) {
                    const e = (new DOMParser).parseFromString(s, "image/svg+xml").documentElement;
                    e.setAttribute("transform", "translate(0 25)");
                    const n = {
                        map: o,
                        position: t,
                        zIndex: r,
                        title: i,
                        content: e
                    };
                    return new google.maps.marker.AdvancedMarkerElement(n)
                }
                const a = {
                    position: t,
                    zIndex: r,
                    title: i,
                    icon: {
                        url: `data:image/svg+xml;base64,${btoa(s)}`,
                        anchor: new google.maps.Point(25,25)
                    }
                };
                return new google.maps.Marker(a)
            }
        }
        class Ie {
            constructor() {
                !function(e, t) {
                    for (let n in t.prototype)
                        e.prototype[n] = t.prototype[n]
                }(Ie, google.maps.OverlayView)
            }
        }
        var De;
        !function(e) {
            e.CLUSTERING_BEGIN = "clusteringbegin",
            e.CLUSTERING_END = "clusteringend",
            e.CLUSTER_CLICK = "click"
        }(De || (De = {}));
        const Oe = (e,t,n)=>{
            n.fitBounds(t.bounds)
        }
        ;
        class Be extends Ie {
            constructor({map: e, markers: t=[], algorithmOptions: n={}, algorithm: o=new we(n), renderer: s=new Pe, onClusterClick: i=Oe}) {
                super(),
                this.markers = [...t],
                this.clusters = [],
                this.algorithm = o,
                this.renderer = s,
                this.onClusterClick = i,
                e && this.setMap(e)
            }
            addMarker(e, t) {
                this.markers.includes(e) || (this.markers.push(e),
                t || this.render())
            }
            addMarkers(e, t) {
                e.forEach((e=>{
                    this.addMarker(e, !0)
                }
                )),
                t || this.render()
            }
            removeMarker(e, t) {
                const n = this.markers.indexOf(e);
                return -1 !== n && (Me.setMap(e, null),
                this.markers.splice(n, 1),
                t || this.render(),
                !0)
            }
            removeMarkers(e, t) {
                let n = !1;
                return e.forEach((e=>{
                    n = this.removeMarker(e, !0) || n
                }
                )),
                n && !t && this.render(),
                n
            }
            clearMarkers(e) {
                this.markers.length = 0,
                e || this.render()
            }
            render() {
                const e = this.getMap();
                if (e instanceof google.maps.Map && e.getProjection()) {
                    google.maps.event.trigger(this, De.CLUSTERING_BEGIN, this);
                    const {clusters: t, changed: n} = this.algorithm.calculate({
                        markers: this.markers,
                        map: e,
                        mapCanvasProjection: this.getProjection()
                    });
                    if (n || void 0 == n) {
                        const e = new Set;
                        for (const o of t)
                            1 == o.markers.length && e.add(o.markers[0]);
                        const n = [];
                        for (const t of this.clusters)
                            null != t.marker && (1 == t.markers.length ? e.has(t.marker) || Me.setMap(t.marker, null) : n.push(t.marker));
                        this.clusters = t,
                        this.renderClusters(),
                        requestAnimationFrame((()=>n.forEach((e=>Me.setMap(e, null)))))
                    }
                    google.maps.event.trigger(this, De.CLUSTERING_END, this)
                }
            }
            onAdd() {
                this.idleListener = this.getMap().addListener("idle", this.render.bind(this)),
                this.render()
            }
            onRemove() {
                google.maps.event.removeListener(this.idleListener),
                this.reset()
            }
            reset() {
                this.markers.forEach((e=>Me.setMap(e, null))),
                this.clusters.forEach((e=>e.delete())),
                this.clusters = []
            }
            renderClusters() {
                const e = new Se(this.markers,this.clusters)
                  , t = this.getMap();
                this.clusters.forEach((n=>{
                    1 === n.markers.length ? n.marker = n.markers[0] : (n.marker = this.renderer.render(n, e, t),
                    n.markers.forEach((e=>Me.setMap(e, null))),
                    this.onClusterClick && n.marker.addListener("click", (e=>{
                        google.maps.event.trigger(this, De.CLUSTER_CLICK, n),
                        this.onClusterClick(e, n, t)
                    }
                    ))),
                    Me.setMap(n.marker, t)
                }
                ))
            }
        }
        function _e(e) {
            var t = function() {
                g(!!s.useContext, "useGoogleMap is React hook and requires React version 16.8+");
                var e = (0,
                s.useContext)(h);
                return g(!!e, "useGoogleMap needs a GoogleMap available up in the tree"),
                e
            }()
              , n = (0,
            s.useState)(null)
              , o = n[0]
              , i = n[1];
            return (0,
            s.useEffect)((function() {
                if (t && null === o) {
                    var n = new Be(l(l({}, e), {
                        map: t
                    }));
                    i(n)
                }
            }
            ), [t]),
            o
        }
        (0,
        s.memo)((function(e) {
            var t = e.children
              , n = _e(e.options);
            return null !== n ? t(n) : null
        }
        ));
        var Te = {
            onCloseClick: "closeclick",
            onContentChanged: "content_changed",
            onDomReady: "domready",
            onPositionChanged: "position_changed",
            onZindexChanged: "zindex_changed"
        }
          , Ue = {
            options: function(e, t) {
                e.setOptions(t)
            },
            position: function(e, t) {
                e.setPosition(t)
            },
            zIndex: function(e, t) {
                e.setZIndex(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.children
              , n = e.anchor
              , o = e.options
              , r = e.position
              , a = e.zIndex
              , u = e.onCloseClick
              , p = e.onDomReady
              , c = e.onContentChanged
              , d = e.onPositionChanged
              , m = e.onZindexChanged
              , f = e.onLoad
              , v = e.onUnmount
              , y = (0,
            s.useContext)(h)
              , L = (0,
            s.useState)(null)
              , C = L[0]
              , b = L[1]
              , M = (0,
            s.useState)(null)
              , E = M[0]
              , x = M[1]
              , k = (0,
            s.useState)(null)
              , w = k[0]
              , S = k[1]
              , P = (0,
            s.useState)(null)
              , I = P[0]
              , D = P[1]
              , O = (0,
            s.useState)(null)
              , B = O[0]
              , _ = O[1]
              , T = (0,
            s.useState)(null)
              , U = T[0]
              , z = T[1]
              , R = (0,
            s.useRef)(null);
            return (0,
            s.useEffect)((function() {
                null !== C && (C.close(),
                n ? C.open(y, n) : C.getPosition() && C.open(y))
            }
            ), [y, C, n]),
            (0,
            s.useEffect)((function() {
                o && null !== C && C.setOptions(o)
            }
            ), [C, o]),
            (0,
            s.useEffect)((function() {
                r && null !== C && C.setPosition(r)
            }
            ), [r]),
            (0,
            s.useEffect)((function() {
                "number" === typeof a && null !== C && C.setZIndex(a)
            }
            ), [a]),
            (0,
            s.useEffect)((function() {
                C && u && (null !== E && google.maps.event.removeListener(E),
                x(google.maps.event.addListener(C, "closeclick", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                C && p && (null !== w && google.maps.event.removeListener(w),
                S(google.maps.event.addListener(C, "domready", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                C && c && (null !== I && google.maps.event.removeListener(I),
                D(google.maps.event.addListener(C, "content_changed", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                C && d && (null !== B && google.maps.event.removeListener(B),
                _(google.maps.event.addListener(C, "position_changed", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                C && m && (null !== U && google.maps.event.removeListener(U),
                z(google.maps.event.addListener(C, "zindex_changed", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.InfoWindow(l({}, o || {}));
                return b(e),
                R.current = document.createElement("div"),
                u && x(google.maps.event.addListener(e, "closeclick", u)),
                p && S(google.maps.event.addListener(e, "domready", p)),
                c && D(google.maps.event.addListener(e, "content_changed", c)),
                d && _(google.maps.event.addListener(e, "position_changed", d)),
                m && z(google.maps.event.addListener(e, "zindex_changed", m)),
                e.setContent(R.current),
                r && e.setPosition(r),
                a && e.setZIndex(a),
                n ? e.open(y, n) : e.getPosition() ? e.open(y) : g(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."),
                f && f(e),
                function() {
                    E && google.maps.event.removeListener(E),
                    I && google.maps.event.removeListener(I),
                    w && google.maps.event.removeListener(w),
                    B && google.maps.event.removeListener(B),
                    U && google.maps.event.removeListener(U),
                    v && v(e),
                    e.close()
                }
            }
            ), []),
            R.current ? (0,
            i.createPortal)(s.Children.only(t), R.current) : null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.containerElement = null,
                t.state = {
                    infoWindow: null
                },
                t.open = function(e, n) {
                    n ? e.open(t.context, n) : e.getPosition() ? e.open(t.context) : g(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")
                }
                ,
                t.setInfoWindowCallback = function() {
                    null !== t.state.infoWindow && null !== t.containerElement && (t.state.infoWindow.setContent(t.containerElement),
                    t.open(t.state.infoWindow, t.props.anchor),
                    t.props.onLoad && t.props.onLoad(t.state.infoWindow))
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.InfoWindow(l({}, this.props.options || {}));
                this.containerElement = document.createElement("div"),
                this.registeredEvents = L({
                    updaterMap: Ue,
                    eventMap: Te,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        infoWindow: e
                    }
                }
                ), this.setInfoWindowCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.infoWindow && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: Ue,
                    eventMap: Te,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.infoWindow
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.infoWindow && (y(this.registeredEvents),
                this.props.onUnmount && this.props.onUnmount(this.state.infoWindow),
                this.state.infoWindow.close())
            }
            ,
            t.prototype.render = function() {
                return this.containerElement ? (0,
                i.createPortal)(s.Children.only(this.props.children), this.containerElement) : null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var ze = {
            onClick: "click",
            onDblClick: "dblclick",
            onDrag: "drag",
            onDragEnd: "dragend",
            onDragStart: "dragstart",
            onMouseDown: "mousedown",
            onMouseMove: "mousemove",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseUp: "mouseup",
            onRightClick: "rightclick"
        }
          , Re = {
            draggable: function(e, t) {
                e.setDraggable(t)
            },
            editable: function(e, t) {
                e.setEditable(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            path: function(e, t) {
                e.setPath(t)
            },
            visible: function(e, t) {
                e.setVisible(t)
            }
        }
          , Ae = {};
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.draggable
              , o = e.editable
              , i = e.visible
              , r = e.path
              , a = e.onDblClick
              , u = e.onDragEnd
              , p = e.onDragStart
              , c = e.onMouseDown
              , d = e.onMouseMove
              , g = e.onMouseOut
              , m = e.onMouseOver
              , f = e.onMouseUp
              , v = e.onRightClick
              , y = e.onClick
              , L = e.onDrag
              , C = e.onLoad
              , b = e.onUnmount
              , M = (0,
            s.useContext)(h)
              , E = (0,
            s.useState)(null)
              , x = E[0]
              , k = E[1]
              , w = (0,
            s.useState)(null)
              , S = w[0]
              , P = w[1]
              , I = (0,
            s.useState)(null)
              , D = I[0]
              , O = I[1]
              , B = (0,
            s.useState)(null)
              , _ = B[0]
              , T = B[1]
              , U = (0,
            s.useState)(null)
              , z = U[0]
              , R = U[1]
              , A = (0,
            s.useState)(null)
              , Z = A[0]
              , V = A[1]
              , W = (0,
            s.useState)(null)
              , j = W[0]
              , N = W[1]
              , H = (0,
            s.useState)(null)
              , G = H[0]
              , F = H[1]
              , Y = (0,
            s.useState)(null)
              , $ = Y[0]
              , K = Y[1]
              , q = (0,
            s.useState)(null)
              , J = q[0]
              , X = q[1]
              , Q = (0,
            s.useState)(null)
              , ee = Q[0]
              , te = Q[1]
              , ne = (0,
            s.useState)(null)
              , oe = ne[0]
              , se = ne[1];
            return (0,
            s.useEffect)((function() {
                null !== x && x.setMap(M)
            }
            ), [M]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof t && null !== x && x.setOptions(t)
            }
            ), [x, t]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof n && null !== x && x.setDraggable(n)
            }
            ), [x, n]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof o && null !== x && x.setEditable(o)
            }
            ), [x, o]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof i && null !== x && x.setVisible(i)
            }
            ), [x, i]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof r && null !== x && x.setPath(r)
            }
            ), [x, r]),
            (0,
            s.useEffect)((function() {
                x && a && (null !== S && google.maps.event.removeListener(S),
                P(google.maps.event.addListener(x, "dblclick", a)))
            }
            ), [a]),
            (0,
            s.useEffect)((function() {
                x && u && (null !== D && google.maps.event.removeListener(D),
                O(google.maps.event.addListener(x, "dragend", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                x && p && (null !== _ && google.maps.event.removeListener(_),
                T(google.maps.event.addListener(x, "dragstart", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                x && c && (null !== z && google.maps.event.removeListener(z),
                R(google.maps.event.addListener(x, "mousedown", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                x && d && (null !== Z && google.maps.event.removeListener(Z),
                V(google.maps.event.addListener(x, "mousemove", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                x && g && (null !== j && google.maps.event.removeListener(j),
                N(google.maps.event.addListener(x, "mouseout", g)))
            }
            ), [g]),
            (0,
            s.useEffect)((function() {
                x && m && (null !== G && google.maps.event.removeListener(G),
                F(google.maps.event.addListener(x, "mouseover", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                x && f && (null !== $ && google.maps.event.removeListener($),
                K(google.maps.event.addListener(x, "mouseup", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                x && v && (null !== J && google.maps.event.removeListener(J),
                X(google.maps.event.addListener(x, "rightclick", v)))
            }
            ), [v]),
            (0,
            s.useEffect)((function() {
                x && y && (null !== ee && google.maps.event.removeListener(ee),
                te(google.maps.event.addListener(x, "click", y)))
            }
            ), [y]),
            (0,
            s.useEffect)((function() {
                x && L && (null !== oe && google.maps.event.removeListener(oe),
                se(google.maps.event.addListener(x, "drag", L)))
            }
            ), [L]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.Polyline(l(l({}, t || Ae), {
                    map: M
                }));
                return r && e.setPath(r),
                "undefined" !== typeof i && e.setVisible(i),
                "undefined" !== typeof o && e.setEditable(o),
                "undefined" !== typeof n && e.setDraggable(n),
                a && P(google.maps.event.addListener(e, "dblclick", a)),
                u && O(google.maps.event.addListener(e, "dragend", u)),
                p && T(google.maps.event.addListener(e, "dragstart", p)),
                c && R(google.maps.event.addListener(e, "mousedown", c)),
                d && V(google.maps.event.addListener(e, "mousemove", d)),
                g && N(google.maps.event.addListener(e, "mouseout", g)),
                m && F(google.maps.event.addListener(e, "mouseover", m)),
                f && K(google.maps.event.addListener(e, "mouseup", f)),
                v && X(google.maps.event.addListener(e, "rightclick", v)),
                y && te(google.maps.event.addListener(e, "click", y)),
                L && se(google.maps.event.addListener(e, "drag", L)),
                k(e),
                C && C(e),
                function() {
                    null !== S && google.maps.event.removeListener(S),
                    null !== D && google.maps.event.removeListener(D),
                    null !== _ && google.maps.event.removeListener(_),
                    null !== z && google.maps.event.removeListener(z),
                    null !== Z && google.maps.event.removeListener(Z),
                    null !== j && google.maps.event.removeListener(j),
                    null !== G && google.maps.event.removeListener(G),
                    null !== $ && google.maps.event.removeListener($),
                    null !== J && google.maps.event.removeListener(J),
                    null !== ee && google.maps.event.removeListener(ee),
                    b && b(e),
                    e.setMap(null)
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    polyline: null
                },
                t.setPolylineCallback = function() {
                    null !== t.state.polyline && t.props.onLoad && t.props.onLoad(t.state.polyline)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.Polyline(l(l({}, this.props.options || {}), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: Re,
                    eventMap: ze,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        polyline: e
                    }
                }
                ), this.setPolylineCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.polyline && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: Re,
                    eventMap: ze,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.polyline
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.polyline && (this.props.onUnmount && this.props.onUnmount(this.state.polyline),
                y(this.registeredEvents),
                this.state.polyline.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var Ze = {
            onClick: "click",
            onDblClick: "dblclick",
            onDrag: "drag",
            onDragEnd: "dragend",
            onDragStart: "dragstart",
            onMouseDown: "mousedown",
            onMouseMove: "mousemove",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseUp: "mouseup",
            onRightClick: "rightclick"
        }
          , Ve = {
            draggable: function(e, t) {
                e.setDraggable(t)
            },
            editable: function(e, t) {
                e.setEditable(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            path: function(e, t) {
                e.setPath(t)
            },
            paths: function(e, t) {
                e.setPaths(t)
            },
            visible: function(e, t) {
                e.setVisible(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.draggable
              , o = e.editable
              , i = e.visible
              , r = e.path
              , a = e.paths
              , u = e.onDblClick
              , p = e.onDragEnd
              , c = e.onDragStart
              , d = e.onMouseDown
              , g = e.onMouseMove
              , m = e.onMouseOut
              , f = e.onMouseOver
              , v = e.onMouseUp
              , y = e.onRightClick
              , L = e.onClick
              , C = e.onDrag
              , b = e.onLoad
              , M = e.onUnmount
              , E = e.onEdit
              , x = (0,
            s.useContext)(h)
              , k = (0,
            s.useState)(null)
              , w = k[0]
              , S = k[1]
              , P = (0,
            s.useState)(null)
              , I = P[0]
              , D = P[1]
              , O = (0,
            s.useState)(null)
              , B = O[0]
              , _ = O[1]
              , T = (0,
            s.useState)(null)
              , U = T[0]
              , z = T[1]
              , R = (0,
            s.useState)(null)
              , A = R[0]
              , Z = R[1]
              , V = (0,
            s.useState)(null)
              , W = V[0]
              , j = V[1]
              , N = (0,
            s.useState)(null)
              , H = N[0]
              , G = N[1]
              , F = (0,
            s.useState)(null)
              , Y = F[0]
              , $ = F[1]
              , K = (0,
            s.useState)(null)
              , q = K[0]
              , J = K[1]
              , X = (0,
            s.useState)(null)
              , Q = X[0]
              , ee = X[1]
              , te = (0,
            s.useState)(null)
              , ne = te[0]
              , oe = te[1]
              , se = (0,
            s.useState)(null)
              , ie = se[0]
              , re = se[1];
            return (0,
            s.useEffect)((function() {
                null !== w && w.setMap(x)
            }
            ), [x]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof t && null !== w && w.setOptions(t)
            }
            ), [w, t]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof n && null !== w && w.setDraggable(n)
            }
            ), [w, n]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof o && null !== w && w.setEditable(o)
            }
            ), [w, o]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof i && null !== w && w.setVisible(i)
            }
            ), [w, i]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof r && null !== w && w.setPath(r)
            }
            ), [w, r]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof a && null !== w && w.setPaths(a)
            }
            ), [w, a]),
            (0,
            s.useEffect)((function() {
                w && u && (null !== I && google.maps.event.removeListener(I),
                D(google.maps.event.addListener(w, "dblclick", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                w && (google.maps.event.addListener(w.getPath(), "insert_at", (function() {
                    null === E || void 0 === E || E(w)
                }
                )),
                google.maps.event.addListener(w.getPath(), "set_at", (function() {
                    null === E || void 0 === E || E(w)
                }
                )))
            }
            ), [w, E]),
            (0,
            s.useEffect)((function() {
                w && p && (null !== B && google.maps.event.removeListener(B),
                _(google.maps.event.addListener(w, "dragend", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                w && c && (null !== U && google.maps.event.removeListener(U),
                z(google.maps.event.addListener(w, "dragstart", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                w && d && (null !== A && google.maps.event.removeListener(A),
                Z(google.maps.event.addListener(w, "mousedown", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                w && g && (null !== W && google.maps.event.removeListener(W),
                j(google.maps.event.addListener(w, "mousemove", g)))
            }
            ), [g]),
            (0,
            s.useEffect)((function() {
                w && m && (null !== H && google.maps.event.removeListener(H),
                G(google.maps.event.addListener(w, "mouseout", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                w && f && (null !== Y && google.maps.event.removeListener(Y),
                $(google.maps.event.addListener(w, "mouseover", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                w && v && (null !== q && google.maps.event.removeListener(q),
                J(google.maps.event.addListener(w, "mouseup", v)))
            }
            ), [v]),
            (0,
            s.useEffect)((function() {
                w && y && (null !== Q && google.maps.event.removeListener(Q),
                ee(google.maps.event.addListener(w, "rightclick", y)))
            }
            ), [y]),
            (0,
            s.useEffect)((function() {
                w && L && (null !== ne && google.maps.event.removeListener(ne),
                oe(google.maps.event.addListener(w, "click", L)))
            }
            ), [L]),
            (0,
            s.useEffect)((function() {
                w && C && (null !== ie && google.maps.event.removeListener(ie),
                re(google.maps.event.addListener(w, "drag", C)))
            }
            ), [C]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.Polygon(l(l({}, t || {}), {
                    map: x
                }));
                return r && e.setPath(r),
                a && e.setPaths(a),
                "undefined" !== typeof i && e.setVisible(i),
                "undefined" !== typeof o && e.setEditable(o),
                "undefined" !== typeof n && e.setDraggable(n),
                u && D(google.maps.event.addListener(e, "dblclick", u)),
                p && _(google.maps.event.addListener(e, "dragend", p)),
                c && z(google.maps.event.addListener(e, "dragstart", c)),
                d && Z(google.maps.event.addListener(e, "mousedown", d)),
                g && j(google.maps.event.addListener(e, "mousemove", g)),
                m && G(google.maps.event.addListener(e, "mouseout", m)),
                f && $(google.maps.event.addListener(e, "mouseover", f)),
                v && J(google.maps.event.addListener(e, "mouseup", v)),
                y && ee(google.maps.event.addListener(e, "rightclick", y)),
                L && oe(google.maps.event.addListener(e, "click", L)),
                C && re(google.maps.event.addListener(e, "drag", C)),
                S(e),
                b && b(e),
                function() {
                    null !== I && google.maps.event.removeListener(I),
                    null !== B && google.maps.event.removeListener(B),
                    null !== U && google.maps.event.removeListener(U),
                    null !== A && google.maps.event.removeListener(A),
                    null !== W && google.maps.event.removeListener(W),
                    null !== H && google.maps.event.removeListener(H),
                    null !== Y && google.maps.event.removeListener(Y),
                    null !== q && google.maps.event.removeListener(q),
                    null !== Q && google.maps.event.removeListener(Q),
                    null !== ne && google.maps.event.removeListener(ne),
                    M && M(e),
                    e.setMap(null)
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    polygon: null
                },
                t.setPolygonCallback = function() {
                    null !== t.state.polygon && t.props.onLoad && t.props.onLoad(t.state.polygon)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.Polygon(l(l({}, this.props.options || {}), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: Ve,
                    eventMap: Ze,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        polygon: e
                    }
                }
                ), this.setPolygonCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.polygon && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: Ve,
                    eventMap: Ze,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.polygon
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.polygon && (this.props.onUnmount && this.props.onUnmount(this.state.polygon),
                y(this.registeredEvents),
                this.state.polygon && this.state.polygon.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var We = {
            onBoundsChanged: "bounds_changed",
            onClick: "click",
            onDblClick: "dblclick",
            onDrag: "drag",
            onDragEnd: "dragend",
            onDragStart: "dragstart",
            onMouseDown: "mousedown",
            onMouseMove: "mousemove",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseUp: "mouseup",
            onRightClick: "rightclick"
        }
          , je = {
            bounds: function(e, t) {
                e.setBounds(t)
            },
            draggable: function(e, t) {
                e.setDraggable(t)
            },
            editable: function(e, t) {
                e.setEditable(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            visible: function(e, t) {
                e.setVisible(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.bounds
              , o = e.draggable
              , i = e.editable
              , r = e.visible
              , a = e.onDblClick
              , u = e.onDragEnd
              , p = e.onDragStart
              , c = e.onMouseDown
              , d = e.onMouseMove
              , g = e.onMouseOut
              , m = e.onMouseOver
              , f = e.onMouseUp
              , v = e.onRightClick
              , y = e.onClick
              , L = e.onDrag
              , C = e.onBoundsChanged
              , b = e.onLoad
              , M = e.onUnmount
              , E = (0,
            s.useContext)(h)
              , x = (0,
            s.useState)(null)
              , k = x[0]
              , w = x[1]
              , S = (0,
            s.useState)(null)
              , P = S[0]
              , I = S[1]
              , D = (0,
            s.useState)(null)
              , O = D[0]
              , B = D[1]
              , _ = (0,
            s.useState)(null)
              , T = _[0]
              , U = _[1]
              , z = (0,
            s.useState)(null)
              , R = z[0]
              , A = z[1]
              , Z = (0,
            s.useState)(null)
              , V = Z[0]
              , W = Z[1]
              , j = (0,
            s.useState)(null)
              , N = j[0]
              , H = j[1]
              , G = (0,
            s.useState)(null)
              , F = G[0]
              , Y = G[1]
              , $ = (0,
            s.useState)(null)
              , K = $[0]
              , q = $[1]
              , J = (0,
            s.useState)(null)
              , X = J[0]
              , Q = J[1]
              , ee = (0,
            s.useState)(null)
              , te = ee[0]
              , ne = ee[1]
              , oe = (0,
            s.useState)(null)
              , se = oe[0]
              , ie = oe[1]
              , re = (0,
            s.useState)(null)
              , ae = re[0]
              , le = re[1];
            return (0,
            s.useEffect)((function() {
                null !== k && k.setMap(E)
            }
            ), [E]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof t && null !== k && k.setOptions(t)
            }
            ), [k, t]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof o && null !== k && k.setDraggable(o)
            }
            ), [k, o]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof i && null !== k && k.setEditable(i)
            }
            ), [k, i]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof r && null !== k && k.setVisible(r)
            }
            ), [k, r]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof n && null !== k && k.setBounds(n)
            }
            ), [k, n]),
            (0,
            s.useEffect)((function() {
                k && a && (null !== P && google.maps.event.removeListener(P),
                I(google.maps.event.addListener(k, "dblclick", a)))
            }
            ), [a]),
            (0,
            s.useEffect)((function() {
                k && u && (null !== O && google.maps.event.removeListener(O),
                B(google.maps.event.addListener(k, "dragend", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                k && p && (null !== T && google.maps.event.removeListener(T),
                U(google.maps.event.addListener(k, "dragstart", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                k && c && (null !== R && google.maps.event.removeListener(R),
                A(google.maps.event.addListener(k, "mousedown", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                k && d && (null !== V && google.maps.event.removeListener(V),
                W(google.maps.event.addListener(k, "mousemove", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                k && g && (null !== N && google.maps.event.removeListener(N),
                H(google.maps.event.addListener(k, "mouseout", g)))
            }
            ), [g]),
            (0,
            s.useEffect)((function() {
                k && m && (null !== F && google.maps.event.removeListener(F),
                Y(google.maps.event.addListener(k, "mouseover", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                k && f && (null !== K && google.maps.event.removeListener(K),
                q(google.maps.event.addListener(k, "mouseup", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                k && v && (null !== X && google.maps.event.removeListener(X),
                Q(google.maps.event.addListener(k, "rightclick", v)))
            }
            ), [v]),
            (0,
            s.useEffect)((function() {
                k && y && (null !== te && google.maps.event.removeListener(te),
                ne(google.maps.event.addListener(k, "click", y)))
            }
            ), [y]),
            (0,
            s.useEffect)((function() {
                k && L && (null !== se && google.maps.event.removeListener(se),
                ie(google.maps.event.addListener(k, "drag", L)))
            }
            ), [L]),
            (0,
            s.useEffect)((function() {
                k && C && (null !== ae && google.maps.event.removeListener(ae),
                le(google.maps.event.addListener(k, "bounds_changed", C)))
            }
            ), [C]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.Rectangle(l(l({}, t || {}), {
                    map: E
                }));
                return "undefined" !== typeof r && e.setVisible(r),
                "undefined" !== typeof i && e.setEditable(i),
                "undefined" !== typeof o && e.setDraggable(o),
                "undefined" !== typeof n && e.setBounds(n),
                a && I(google.maps.event.addListener(e, "dblclick", a)),
                u && B(google.maps.event.addListener(e, "dragend", u)),
                p && U(google.maps.event.addListener(e, "dragstart", p)),
                c && A(google.maps.event.addListener(e, "mousedown", c)),
                d && W(google.maps.event.addListener(e, "mousemove", d)),
                g && H(google.maps.event.addListener(e, "mouseout", g)),
                m && Y(google.maps.event.addListener(e, "mouseover", m)),
                f && q(google.maps.event.addListener(e, "mouseup", f)),
                v && Q(google.maps.event.addListener(e, "rightclick", v)),
                y && ne(google.maps.event.addListener(e, "click", y)),
                L && ie(google.maps.event.addListener(e, "drag", L)),
                C && le(google.maps.event.addListener(e, "bounds_changed", C)),
                w(e),
                b && b(e),
                function() {
                    null !== P && google.maps.event.removeListener(P),
                    null !== O && google.maps.event.removeListener(O),
                    null !== T && google.maps.event.removeListener(T),
                    null !== R && google.maps.event.removeListener(R),
                    null !== V && google.maps.event.removeListener(V),
                    null !== N && google.maps.event.removeListener(N),
                    null !== F && google.maps.event.removeListener(F),
                    null !== K && google.maps.event.removeListener(K),
                    null !== X && google.maps.event.removeListener(X),
                    null !== te && google.maps.event.removeListener(te),
                    null !== se && google.maps.event.removeListener(se),
                    null !== ae && google.maps.event.removeListener(ae),
                    M && M(e),
                    e.setMap(null)
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    rectangle: null
                },
                t.setRectangleCallback = function() {
                    null !== t.state.rectangle && t.props.onLoad && t.props.onLoad(t.state.rectangle)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.Rectangle(l(l({}, this.props.options || {}), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: je,
                    eventMap: We,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        rectangle: e
                    }
                }
                ), this.setRectangleCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.rectangle && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: je,
                    eventMap: We,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.rectangle
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.rectangle && (this.props.onUnmount && this.props.onUnmount(this.state.rectangle),
                y(this.registeredEvents),
                this.state.rectangle.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var Ne = {
            onCenterChanged: "center_changed",
            onRadiusChanged: "radius_changed",
            onClick: "click",
            onDblClick: "dblclick",
            onDrag: "drag",
            onDragEnd: "dragend",
            onDragStart: "dragstart",
            onMouseDown: "mousedown",
            onMouseMove: "mousemove",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseUp: "mouseup",
            onRightClick: "rightclick"
        }
          , He = {
            center: function(e, t) {
                e.setCenter(t)
            },
            draggable: function(e, t) {
                e.setDraggable(t)
            },
            editable: function(e, t) {
                e.setEditable(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            radius: function(e, t) {
                e.setRadius(t)
            },
            visible: function(e, t) {
                e.setVisible(t)
            }
        }
          , Ge = {};
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.center
              , o = e.radius
              , i = e.draggable
              , r = e.editable
              , a = e.visible
              , u = e.onDblClick
              , p = e.onDragEnd
              , c = e.onDragStart
              , d = e.onMouseDown
              , g = e.onMouseMove
              , m = e.onMouseOut
              , f = e.onMouseOver
              , v = e.onMouseUp
              , y = e.onRightClick
              , L = e.onClick
              , C = e.onDrag
              , b = e.onCenterChanged
              , M = e.onRadiusChanged
              , E = e.onLoad
              , x = e.onUnmount
              , k = (0,
            s.useContext)(h)
              , w = (0,
            s.useState)(null)
              , S = w[0]
              , P = w[1]
              , I = (0,
            s.useState)(null)
              , D = I[0]
              , O = I[1]
              , B = (0,
            s.useState)(null)
              , _ = B[0]
              , T = B[1]
              , U = (0,
            s.useState)(null)
              , z = U[0]
              , R = U[1]
              , A = (0,
            s.useState)(null)
              , Z = A[0]
              , V = A[1]
              , W = (0,
            s.useState)(null)
              , j = W[0]
              , N = W[1]
              , H = (0,
            s.useState)(null)
              , G = H[0]
              , F = H[1]
              , Y = (0,
            s.useState)(null)
              , $ = Y[0]
              , K = Y[1]
              , q = (0,
            s.useState)(null)
              , J = q[0]
              , X = q[1]
              , Q = (0,
            s.useState)(null)
              , ee = Q[0]
              , te = Q[1]
              , ne = (0,
            s.useState)(null)
              , oe = ne[0]
              , se = ne[1]
              , ie = (0,
            s.useState)(null)
              , re = ie[0]
              , ae = ie[1]
              , le = (0,
            s.useState)(null)
              , ue = le[0]
              , pe = le[1]
              , ce = (0,
            s.useState)(null)
              , de = ce[0]
              , ge = ce[1];
            return (0,
            s.useEffect)((function() {
                null !== S && S.setMap(k)
            }
            ), [k]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof t && null !== S && S.setOptions(t)
            }
            ), [S, t]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof i && null !== S && S.setDraggable(i)
            }
            ), [S, i]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof r && null !== S && S.setEditable(r)
            }
            ), [S, r]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof a && null !== S && S.setVisible(a)
            }
            ), [S, a]),
            (0,
            s.useEffect)((function() {
                "number" === typeof o && null !== S && S.setRadius(o)
            }
            ), [S, o]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof n && null !== S && S.setCenter(n)
            }
            ), [S, n]),
            (0,
            s.useEffect)((function() {
                S && u && (null !== D && google.maps.event.removeListener(D),
                O(google.maps.event.addListener(S, "dblclick", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                S && p && (null !== _ && google.maps.event.removeListener(_),
                T(google.maps.event.addListener(S, "dragend", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                S && c && (null !== z && google.maps.event.removeListener(z),
                R(google.maps.event.addListener(S, "dragstart", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                S && d && (null !== Z && google.maps.event.removeListener(Z),
                V(google.maps.event.addListener(S, "mousedown", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                S && g && (null !== j && google.maps.event.removeListener(j),
                N(google.maps.event.addListener(S, "mousemove", g)))
            }
            ), [g]),
            (0,
            s.useEffect)((function() {
                S && m && (null !== G && google.maps.event.removeListener(G),
                F(google.maps.event.addListener(S, "mouseout", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                S && f && (null !== $ && google.maps.event.removeListener($),
                K(google.maps.event.addListener(S, "mouseover", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                S && v && (null !== J && google.maps.event.removeListener(J),
                X(google.maps.event.addListener(S, "mouseup", v)))
            }
            ), [v]),
            (0,
            s.useEffect)((function() {
                S && y && (null !== ee && google.maps.event.removeListener(ee),
                te(google.maps.event.addListener(S, "rightclick", y)))
            }
            ), [y]),
            (0,
            s.useEffect)((function() {
                S && L && (null !== oe && google.maps.event.removeListener(oe),
                se(google.maps.event.addListener(S, "click", L)))
            }
            ), [L]),
            (0,
            s.useEffect)((function() {
                S && C && (null !== re && google.maps.event.removeListener(re),
                ae(google.maps.event.addListener(S, "drag", C)))
            }
            ), [C]),
            (0,
            s.useEffect)((function() {
                S && b && (null !== ue && google.maps.event.removeListener(ue),
                pe(google.maps.event.addListener(S, "center_changed", b)))
            }
            ), [L]),
            (0,
            s.useEffect)((function() {
                S && M && (null !== de && google.maps.event.removeListener(de),
                ge(google.maps.event.addListener(S, "radius_changed", M)))
            }
            ), [M]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.Circle(l(l({}, t || Ge), {
                    map: k
                }));
                return "number" === typeof o && e.setRadius(o),
                "undefined" !== typeof n && e.setCenter(n),
                "number" === typeof o && e.setRadius(o),
                "undefined" !== typeof a && e.setVisible(a),
                "undefined" !== typeof r && e.setEditable(r),
                "undefined" !== typeof i && e.setDraggable(i),
                u && O(google.maps.event.addListener(e, "dblclick", u)),
                p && T(google.maps.event.addListener(e, "dragend", p)),
                c && R(google.maps.event.addListener(e, "dragstart", c)),
                d && V(google.maps.event.addListener(e, "mousedown", d)),
                g && N(google.maps.event.addListener(e, "mousemove", g)),
                m && F(google.maps.event.addListener(e, "mouseout", m)),
                f && K(google.maps.event.addListener(e, "mouseover", f)),
                v && X(google.maps.event.addListener(e, "mouseup", v)),
                y && te(google.maps.event.addListener(e, "rightclick", y)),
                L && se(google.maps.event.addListener(e, "click", L)),
                C && ae(google.maps.event.addListener(e, "drag", C)),
                b && pe(google.maps.event.addListener(e, "center_changed", b)),
                M && ge(google.maps.event.addListener(e, "radius_changed", M)),
                P(e),
                E && E(e),
                function() {
                    null !== D && google.maps.event.removeListener(D),
                    null !== _ && google.maps.event.removeListener(_),
                    null !== z && google.maps.event.removeListener(z),
                    null !== Z && google.maps.event.removeListener(Z),
                    null !== j && google.maps.event.removeListener(j),
                    null !== G && google.maps.event.removeListener(G),
                    null !== $ && google.maps.event.removeListener($),
                    null !== J && google.maps.event.removeListener(J),
                    null !== ee && google.maps.event.removeListener(ee),
                    null !== oe && google.maps.event.removeListener(oe),
                    null !== ue && google.maps.event.removeListener(ue),
                    null !== de && google.maps.event.removeListener(de),
                    x && x(e),
                    e.setMap(null)
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    circle: null
                },
                t.setCircleCallback = function() {
                    null !== t.state.circle && t.props.onLoad && t.props.onLoad(t.state.circle)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.Circle(l(l({}, this.props.options || {}), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: He,
                    eventMap: Ne,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        circle: e
                    }
                }
                ), this.setCircleCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.circle && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: He,
                    eventMap: Ne,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.circle
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                var e;
                null !== this.state.circle && (this.props.onUnmount && this.props.onUnmount(this.state.circle),
                y(this.registeredEvents),
                null === (e = this.state.circle) || void 0 === e || e.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var Fe = {
            onClick: "click",
            onDblClick: "dblclick",
            onMouseDown: "mousedown",
            onMouseOut: "mouseout",
            onMouseOver: "mouseover",
            onMouseUp: "mouseup",
            onRightClick: "rightclick",
            onAddFeature: "addfeature",
            onRemoveFeature: "removefeature",
            onRemoveProperty: "removeproperty",
            onSetGeometry: "setgeometry",
            onSetProperty: "setproperty"
        }
          , Ye = {
            add: function(e, t) {
                e.add(t)
            },
            addgeojson: function(e, t, n) {
                e.addGeoJson(t, n)
            },
            contains: function(e, t) {
                e.contains(t)
            },
            foreach: function(e, t) {
                e.forEach(t)
            },
            loadgeojson: function(e, t, n, o) {
                e.loadGeoJson(t, n, o)
            },
            overridestyle: function(e, t, n) {
                e.overrideStyle(t, n)
            },
            remove: function(e, t) {
                e.remove(t)
            },
            revertstyle: function(e, t) {
                e.revertStyle(t)
            },
            controlposition: function(e, t) {
                e.setControlPosition(t)
            },
            controls: function(e, t) {
                e.setControls(t)
            },
            drawingmode: function(e, t) {
                e.setDrawingMode(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            style: function(e, t) {
                e.setStyle(t)
            },
            togeojson: function(e, t) {
                e.toGeoJson(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.options
              , n = e.onClick
              , o = e.onDblClick
              , i = e.onMouseDown
              , r = e.onMouseMove
              , a = e.onMouseOut
              , u = e.onMouseOver
              , p = e.onMouseUp
              , c = e.onRightClick
              , d = e.onAddFeature
              , g = e.onRemoveFeature
              , m = e.onRemoveProperty
              , f = e.onSetGeometry
              , v = e.onSetProperty
              , y = e.onLoad
              , L = e.onUnmount
              , C = (0,
            s.useContext)(h)
              , b = (0,
            s.useState)(null)
              , M = b[0]
              , E = b[1]
              , x = (0,
            s.useState)(null)
              , k = x[0]
              , w = x[1]
              , S = (0,
            s.useState)(null)
              , P = S[0]
              , I = S[1]
              , D = (0,
            s.useState)(null)
              , O = D[0]
              , B = D[1]
              , _ = (0,
            s.useState)(null)
              , T = _[0]
              , U = _[1]
              , z = (0,
            s.useState)(null)
              , R = z[0]
              , A = z[1]
              , Z = (0,
            s.useState)(null)
              , V = Z[0]
              , W = Z[1]
              , j = (0,
            s.useState)(null)
              , N = j[0]
              , H = j[1]
              , G = (0,
            s.useState)(null)
              , F = G[0]
              , Y = G[1]
              , $ = (0,
            s.useState)(null)
              , K = $[0]
              , q = $[1]
              , J = (0,
            s.useState)(null)
              , X = J[0]
              , Q = J[1]
              , ee = (0,
            s.useState)(null)
              , te = ee[0]
              , ne = ee[1]
              , oe = (0,
            s.useState)(null)
              , se = oe[0]
              , ie = oe[1]
              , re = (0,
            s.useState)(null)
              , ae = re[0]
              , le = re[1];
            return (0,
            s.useEffect)((function() {
                null !== M && M.setMap(C)
            }
            ), [C]),
            (0,
            s.useEffect)((function() {
                M && o && (null !== k && google.maps.event.removeListener(k),
                w(google.maps.event.addListener(M, "dblclick", o)))
            }
            ), [o]),
            (0,
            s.useEffect)((function() {
                M && i && (null !== P && google.maps.event.removeListener(P),
                I(google.maps.event.addListener(M, "mousedown", i)))
            }
            ), [i]),
            (0,
            s.useEffect)((function() {
                M && r && (null !== O && google.maps.event.removeListener(O),
                B(google.maps.event.addListener(M, "mousemove", r)))
            }
            ), [r]),
            (0,
            s.useEffect)((function() {
                M && a && (null !== T && google.maps.event.removeListener(T),
                U(google.maps.event.addListener(M, "mouseout", a)))
            }
            ), [a]),
            (0,
            s.useEffect)((function() {
                M && u && (null !== R && google.maps.event.removeListener(R),
                A(google.maps.event.addListener(M, "mouseover", u)))
            }
            ), [u]),
            (0,
            s.useEffect)((function() {
                M && p && (null !== V && google.maps.event.removeListener(V),
                W(google.maps.event.addListener(M, "mouseup", p)))
            }
            ), [p]),
            (0,
            s.useEffect)((function() {
                M && c && (null !== N && google.maps.event.removeListener(N),
                H(google.maps.event.addListener(M, "rightclick", c)))
            }
            ), [c]),
            (0,
            s.useEffect)((function() {
                M && n && (null !== F && google.maps.event.removeListener(F),
                Y(google.maps.event.addListener(M, "click", n)))
            }
            ), [n]),
            (0,
            s.useEffect)((function() {
                M && d && (null !== K && google.maps.event.removeListener(K),
                q(google.maps.event.addListener(M, "addfeature", d)))
            }
            ), [d]),
            (0,
            s.useEffect)((function() {
                M && g && (null !== X && google.maps.event.removeListener(X),
                Q(google.maps.event.addListener(M, "removefeature", g)))
            }
            ), [g]),
            (0,
            s.useEffect)((function() {
                M && m && (null !== te && google.maps.event.removeListener(te),
                ne(google.maps.event.addListener(M, "removeproperty", m)))
            }
            ), [m]),
            (0,
            s.useEffect)((function() {
                M && f && (null !== se && google.maps.event.removeListener(se),
                ie(google.maps.event.addListener(M, "setgeometry", f)))
            }
            ), [f]),
            (0,
            s.useEffect)((function() {
                M && v && (null !== ae && google.maps.event.removeListener(ae),
                le(google.maps.event.addListener(M, "setproperty", v)))
            }
            ), [v]),
            (0,
            s.useEffect)((function() {
                if (null !== C) {
                    var e = new google.maps.Data(l(l({}, t || {}), {
                        map: C
                    }));
                    o && w(google.maps.event.addListener(e, "dblclick", o)),
                    i && I(google.maps.event.addListener(e, "mousedown", i)),
                    r && B(google.maps.event.addListener(e, "mousemove", r)),
                    a && U(google.maps.event.addListener(e, "mouseout", a)),
                    u && A(google.maps.event.addListener(e, "mouseover", u)),
                    p && W(google.maps.event.addListener(e, "mouseup", p)),
                    c && H(google.maps.event.addListener(e, "rightclick", c)),
                    n && Y(google.maps.event.addListener(e, "click", n)),
                    d && q(google.maps.event.addListener(e, "addfeature", d)),
                    g && Q(google.maps.event.addListener(e, "removefeature", g)),
                    m && ne(google.maps.event.addListener(e, "removeproperty", m)),
                    f && ie(google.maps.event.addListener(e, "setgeometry", f)),
                    v && le(google.maps.event.addListener(e, "setproperty", v)),
                    E(e),
                    y && y(e)
                }
                return function() {
                    M && (null !== k && google.maps.event.removeListener(k),
                    null !== P && google.maps.event.removeListener(P),
                    null !== O && google.maps.event.removeListener(O),
                    null !== T && google.maps.event.removeListener(T),
                    null !== R && google.maps.event.removeListener(R),
                    null !== V && google.maps.event.removeListener(V),
                    null !== N && google.maps.event.removeListener(N),
                    null !== F && google.maps.event.removeListener(F),
                    null !== K && google.maps.event.removeListener(K),
                    null !== X && google.maps.event.removeListener(X),
                    null !== te && google.maps.event.removeListener(te),
                    null !== se && google.maps.event.removeListener(se),
                    null !== ae && google.maps.event.removeListener(ae),
                    L && L(M),
                    M.setMap(null))
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    data: null
                },
                t.setDataCallback = function() {
                    null !== t.state.data && t.props.onLoad && t.props.onLoad(t.state.data)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                if (null !== this.context) {
                    var e = new google.maps.Data(l(l({}, this.props.options || {}), {
                        map: this.context
                    }));
                    this.registeredEvents = L({
                        updaterMap: Ye,
                        eventMap: Fe,
                        prevProps: {},
                        nextProps: this.props,
                        instance: e
                    }),
                    this.setState((function() {
                        return {
                            data: e
                        }
                    }
                    ), this.setDataCallback)
                }
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.data && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: Ye,
                    eventMap: Fe,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.data
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.data && (this.props.onUnmount && this.props.onUnmount(this.state.data),
                y(this.registeredEvents),
                this.state.data && this.state.data.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var $e = {
            onClick: "click",
            onDefaultViewportChanged: "defaultviewport_changed",
            onStatusChanged: "status_changed"
        }
          , Ke = {
            options: function(e, t) {
                e.setOptions(t)
            },
            url: function(e, t) {
                e.setUrl(t)
            },
            zIndex: function(e, t) {
                e.setZIndex(t)
            }
        };
        !function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    kmlLayer: null
                },
                t.setKmlLayerCallback = function() {
                    null !== t.state.kmlLayer && t.props.onLoad && t.props.onLoad(t.state.kmlLayer)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.KmlLayer(l(l({}, this.props.options), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: Ke,
                    eventMap: $e,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        kmlLayer: e
                    }
                }
                ), this.setKmlLayerCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.kmlLayer && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: Ke,
                    eventMap: $e,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.kmlLayer
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.kmlLayer && (this.props.onUnmount && this.props.onUnmount(this.state.kmlLayer),
                y(this.registeredEvents),
                this.state.kmlLayer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        function qe(e, t) {
            return "function" === typeof t ? t(e.offsetWidth, e.offsetHeight) : {
                x: 0,
                y: 0
            }
        }
        function Je(e, t) {
            return new t(e.lat,e.lng)
        }
        function Xe(e, t) {
            return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))
        }
        function Qe(e, t, n, o) {
            return void 0 !== n ? function(e, t, n) {
                var o = e && e.fromLatLngToDivPixel(n.getNorthEast())
                  , s = e && e.fromLatLngToDivPixel(n.getSouthWest());
                return o && s ? {
                    left: "".concat(s.x + t.x, "px"),
                    top: "".concat(o.y + t.y, "px"),
                    width: "".concat(o.x - s.x - t.x, "px"),
                    height: "".concat(s.y - o.y - t.y, "px")
                } : {
                    left: "-9999px",
                    top: "-9999px"
                }
            }(e, t, (s = n,
            i = google.maps.LatLngBounds,
            r = Xe,
            s instanceof i ? s : r(s, i))) : function(e, t, n) {
                var o = e && e.fromLatLngToDivPixel(n);
                if (o) {
                    var s = o.x
                      , i = o.y;
                    return {
                        left: "".concat(s + t.x, "px"),
                        top: "".concat(i + t.y, "px")
                    }
                }
                return {
                    left: "-9999px",
                    top: "-9999px"
                }
            }(e, t, function(e, t, n) {
                return e instanceof t ? e : n(e, t)
            }(o, google.maps.LatLng, Je));
            var s, i, r
        }
        function et(e) {
            return e ? (e instanceof google.maps.LatLng ? e : new google.maps.LatLng(e.lat,e.lng)) + "" : ""
        }
        function tt(e) {
            return e ? (e instanceof google.maps.LatLngBounds ? e : new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,e.west))) + "" : ""
        }
        (0,
        s.memo)((function(e) {
            var t = e.position
              , n = e.bounds
              , o = e.mapPaneName
              , r = e.zIndex
              , u = e.onLoad
              , p = e.onUnmount
              , c = e.getPixelPositionOffset
              , d = e.children
              , g = (0,
            s.useContext)(h)
              , m = (0,
            s.useMemo)((function() {
                var e = document.createElement("div");
                return e.style.position = "absolute",
                e
            }
            ), [])
              , f = (0,
            s.useMemo)((function() {
                return function(e, t, n, o, s) {
                    var i = function(e) {
                        function t(t, n, o, s) {
                            var i = e.call(this) || this;
                            return i.container = t,
                            i.pane = n,
                            i.position = o,
                            i.bounds = s,
                            i
                        }
                        return a(t, e),
                        t.prototype.onAdd = function() {
                            var e, t = null === (e = this.getPanes()) || void 0 === e ? void 0 : e[this.pane];
                            null === t || void 0 === t || t.appendChild(this.container)
                        }
                        ,
                        t.prototype.draw = function() {
                            for (var e = Qe(this.getProjection(), l({}, this.container ? qe(this.container, s) : {
                                x: 0,
                                y: 0
                            }), this.bounds, this.position), t = 0, n = Object.entries(e); t < n.length; t++) {
                                var o = n[t]
                                  , i = o[0]
                                  , r = o[1];
                                this.container.style[i] = r
                            }
                        }
                        ,
                        t.prototype.onRemove = function() {
                            null !== this.container.parentNode && this.container.parentNode.removeChild(this.container)
                        }
                        ,
                        t
                    }(google.maps.OverlayView);
                    return new i(e,t,n,o)
                }(m, o, t, n, c)
            }
            ), [m, o, t, n]);
            return (0,
            s.useEffect)((function() {
                return null === u || void 0 === u || u(f),
                null === f || void 0 === f || f.setMap(g),
                function() {
                    null === p || void 0 === p || p(f),
                    null === f || void 0 === f || f.setMap(null)
                }
            }
            ), [g, f]),
            (0,
            s.useEffect)((function() {
                m.style.zIndex = "".concat(r)
            }
            ), [r, m]),
            i.createPortal(d, m)
        }
        )),
        function(e) {
            function t(t) {
                var n = e.call(this, t) || this;
                n.state = {
                    paneEl: null,
                    containerStyle: {
                        position: "absolute"
                    }
                },
                n.updatePane = function() {
                    var e = n.props.mapPaneName
                      , t = n.overlayView.getPanes();
                    g(!!e, "OverlayView requires props.mapPaneName but got %s", e),
                    t ? n.setState({
                        paneEl: t[e]
                    }) : n.setState({
                        paneEl: null
                    })
                }
                ,
                n.onAdd = function() {
                    var e, t;
                    n.updatePane(),
                    null === (t = (e = n.props).onLoad) || void 0 === t || t.call(e, n.overlayView)
                }
                ,
                n.onPositionElement = function() {
                    var e, t, o = Qe(n.overlayView.getProjection(), l({
                        x: 0,
                        y: 0
                    }, n.containerRef.current ? qe(n.containerRef.current, n.props.getPixelPositionOffset) : {}), n.props.bounds, n.props.position), s = n.state.containerStyle, i = s.left, r = s.top, a = s.width, u = s.height;
                    t = {
                        left: i,
                        top: r,
                        width: a,
                        height: u
                    },
                    ((e = o).left !== t.left || e.top !== t.top || e.width !== t.height || e.height !== t.height) && n.setState({
                        containerStyle: {
                            top: o.top || 0,
                            left: o.left || 0,
                            width: o.width || 0,
                            height: o.height || 0,
                            position: "absolute"
                        }
                    })
                }
                ,
                n.draw = function() {
                    n.onPositionElement()
                }
                ,
                n.onRemove = function() {
                    var e, t;
                    n.setState((function() {
                        return {
                            paneEl: null
                        }
                    }
                    )),
                    null === (t = (e = n.props).onUnmount) || void 0 === t || t.call(e, n.overlayView)
                }
                ,
                n.containerRef = (0,
                s.createRef)();
                var o = new google.maps.OverlayView;
                return o.onAdd = n.onAdd,
                o.draw = n.draw,
                o.onRemove = n.onRemove,
                n.overlayView = o,
                n
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                this.overlayView.setMap(this.context)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                var t = et(e.position)
                  , n = et(this.props.position)
                  , o = tt(e.bounds)
                  , s = tt(this.props.bounds);
                t === n && o === s || this.overlayView.draw(),
                e.mapPaneName !== this.props.mapPaneName && this.updatePane()
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.overlayView.setMap(null)
            }
            ,
            t.prototype.render = function() {
                var e = this.state.paneEl;
                return e ? i.createPortal((0,
                o.jsx)("div", {
                    ref: this.containerRef,
                    style: this.state.containerStyle,
                    children: s.Children.only(this.props.children)
                }), e) : null
            }
            ,
            t.FLOAT_PANE = "floatPane",
            t.MAP_PANE = "mapPane",
            t.MARKER_LAYER = "markerLayer",
            t.OVERLAY_LAYER = "overlayLayer",
            t.OVERLAY_MOUSE_TARGET = "overlayMouseTarget",
            t.contextType = h
        }(s.PureComponent);
        function nt() {}
        var ot = {
            onDblClick: "dblclick",
            onClick: "click"
        }
          , st = {
            opacity: function(e, t) {
                e.setOpacity(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.url
              , n = e.bounds
              , o = e.options
              , i = e.visible
              , r = (0,
            s.useContext)(h)
              , a = new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east))
              , u = (0,
            s.useMemo)((function() {
                return new google.maps.GroundOverlay(t,a,l({}, o))
            }
            ), []);
            return (0,
            s.useEffect)((function() {
                null !== u && u.setMap(r)
            }
            ), [r]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof t && null !== u && (u.set("url", t),
                u.setMap(r))
            }
            ), [u, t]),
            (0,
            s.useEffect)((function() {
                "undefined" !== typeof i && null !== u && u.setOpacity(i ? 1 : 0)
            }
            ), [u, i]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east));
                "undefined" !== typeof n && null !== u && (u.set("bounds", e),
                u.setMap(r))
            }
            ), [u, n]),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    groundOverlay: null
                },
                t.setGroundOverlayCallback = function() {
                    null !== t.state.groundOverlay && t.props.onLoad && t.props.onLoad(t.state.groundOverlay)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                g(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
                var e = new google.maps.GroundOverlay(this.props.url,this.props.bounds,l(l({}, this.props.options), {
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: st,
                    eventMap: ot,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        groundOverlay: e
                    }
                }
                ), this.setGroundOverlayCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.groundOverlay && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: st,
                    eventMap: ot,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.groundOverlay
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                this.state.groundOverlay && (this.props.onUnmount && this.props.onUnmount(this.state.groundOverlay),
                this.state.groundOverlay.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.defaultProps = {
                onLoad: nt
            },
            t.contextType = h
        }(s.PureComponent);
        var it = {}
          , rt = {
            data: function(e, t) {
                e.setData(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            }
        };
        (0,
        s.memo)((function(e) {
            var t = e.data
              , n = e.onLoad
              , o = e.onUnmount
              , i = e.options
              , r = (0,
            s.useContext)(h)
              , a = (0,
            s.useState)(null)
              , u = a[0]
              , p = a[1];
            return (0,
            s.useEffect)((function() {
                google.maps.visualization || g(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization)
            }
            ), []),
            (0,
            s.useEffect)((function() {
                g(!!t, "data property is required in HeatmapLayer %s", t)
            }
            ), [t]),
            (0,
            s.useEffect)((function() {
                null !== u && u.setMap(r)
            }
            ), [r]),
            (0,
            s.useEffect)((function() {
                i && null !== u && u.setOptions(i)
            }
            ), [u, i]),
            (0,
            s.useEffect)((function() {
                var e = new google.maps.visualization.HeatmapLayer(l(l({}, i || {}), {
                    data: t,
                    map: r
                }));
                return p(e),
                n && n(e),
                function() {
                    null !== u && (o && o(u),
                    u.setMap(null))
                }
            }
            ), []),
            null
        }
        )),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    heatmapLayer: null
                },
                t.setHeatmapLayerCallback = function() {
                    null !== t.state.heatmapLayer && t.props.onLoad && t.props.onLoad(t.state.heatmapLayer)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                g(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization),
                g(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
                var e = new google.maps.visualization.HeatmapLayer(l(l({}, this.props.options || {}), {
                    data: this.props.data,
                    map: this.context
                }));
                this.registeredEvents = L({
                    updaterMap: rt,
                    eventMap: it,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        heatmapLayer: e
                    }
                }
                ), this.setHeatmapLayerCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: rt,
                    eventMap: it,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.heatmapLayer
                })
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.heatmapLayer && (this.props.onUnmount && this.props.onUnmount(this.state.heatmapLayer),
                y(this.registeredEvents),
                this.state.heatmapLayer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent);
        var at = {
            onCloseClick: "closeclick",
            onPanoChanged: "pano_changed",
            onPositionChanged: "position_changed",
            onPovChanged: "pov_changed",
            onResize: "resize",
            onStatusChanged: "status_changed",
            onVisibleChanged: "visible_changed",
            onZoomChanged: "zoom_changed"
        }
          , lt = {
            register: function(e, t, n) {
                e.registerPanoProvider(t, n)
            },
            links: function(e, t) {
                e.setLinks(t)
            },
            motionTracking: function(e, t) {
                e.setMotionTracking(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            pano: function(e, t) {
                e.setPano(t)
            },
            position: function(e, t) {
                e.setPosition(t)
            },
            pov: function(e, t) {
                e.setPov(t)
            },
            visible: function(e, t) {
                e.setVisible(t)
            },
            zoom: function(e, t) {
                e.setZoom(t)
            }
        }
          , ut = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    streetViewPanorama: null
                },
                t.setStreetViewPanoramaCallback = function() {
                    null !== t.state.streetViewPanorama && t.props.onLoad && t.props.onLoad(t.state.streetViewPanorama)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e, t, n = null !== (t = null === (e = this.context) || void 0 === e ? void 0 : e.getStreetView()) && void 0 !== t ? t : null;
                this.registeredEvents = L({
                    updaterMap: lt,
                    eventMap: at,
                    prevProps: {},
                    nextProps: this.props,
                    instance: n
                }),
                this.setState((function() {
                    return {
                        streetViewPanorama: n
                    }
                }
                ), this.setStreetViewPanoramaCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.streetViewPanorama && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: lt,
                    eventMap: at,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.streetViewPanorama
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.streetViewPanorama && (this.props.onUnmount && this.props.onUnmount(this.state.streetViewPanorama),
                y(this.registeredEvents),
                this.state.streetViewPanorama.setVisible(!1))
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    streetViewService: null
                },
                t.setStreetViewServiceCallback = function() {
                    null !== t.state.streetViewService && t.props.onLoad && t.props.onLoad(t.state.streetViewService)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.StreetViewService;
                this.setState((function() {
                    return {
                        streetViewService: e
                    }
                }
                ), this.setStreetViewServiceCallback)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.streetViewService && this.props.onUnmount && this.props.onUnmount(this.state.streetViewService)
            }
            ,
            t.prototype.render = function() {
                return null
            }
            ,
            t.contextType = h
        }(s.PureComponent),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    directionsService: null
                },
                t.setDirectionsServiceCallback = function() {
                    null !== t.state.directionsService && t.props.onLoad && t.props.onLoad(t.state.directionsService)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                g(!!this.props.options, "DirectionsService expected options object as parameter, but got %s", this.props.options);
                var e = new google.maps.DirectionsService;
                this.setState((function() {
                    return {
                        directionsService: e
                    }
                }
                ), this.setDirectionsServiceCallback)
            }
            ,
            t.prototype.componentDidUpdate = function() {
                null !== this.state.directionsService && this.state.directionsService.route(this.props.options, this.props.callback)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.directionsService && this.props.onUnmount && this.props.onUnmount(this.state.directionsService)
            }
            ,
            t.prototype.render = function() {
                return null
            }
        }(s.PureComponent),
        {
            onDirectionsChanged: "directions_changed"
        })
          , pt = {
            directions: function(e, t) {
                e.setDirections(t)
            },
            map: function(e, t) {
                e.setMap(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            panel: function(e, t) {
                e.setPanel(t)
            },
            routeIndex: function(e, t) {
                e.setRouteIndex(t)
            }
        }
          , ct = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.state = {
                    directionsRenderer: null
                },
                t.setDirectionsRendererCallback = function() {
                    null !== t.state.directionsRenderer && (t.state.directionsRenderer.setMap(t.context),
                    t.props.onLoad && t.props.onLoad(t.state.directionsRenderer))
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e = new google.maps.DirectionsRenderer(this.props.options);
                this.registeredEvents = L({
                    updaterMap: pt,
                    eventMap: ut,
                    prevProps: {},
                    nextProps: this.props,
                    instance: e
                }),
                this.setState((function() {
                    return {
                        directionsRenderer: e
                    }
                }
                ), this.setDirectionsRendererCallback)
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.directionsRenderer && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: pt,
                    eventMap: ut,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.directionsRenderer
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.directionsRenderer && (this.props.onUnmount && this.props.onUnmount(this.state.directionsRenderer),
                y(this.registeredEvents),
                this.state.directionsRenderer && this.state.directionsRenderer.setMap(null))
            }
            ,
            t.prototype.render = function() {
                return (0,
                o.jsx)(o.Fragment, {})
            }
            ,
            t.contextType = h
        }(s.PureComponent),
        function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.state = {
                    distanceMatrixService: null
                },
                t.setDistanceMatrixServiceCallback = function() {
                    null !== t.state.distanceMatrixService && t.props.onLoad && t.props.onLoad(t.state.distanceMatrixService)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                g(!!this.props.options, "DistanceMatrixService expected options object as parameter, but go %s", this.props.options);
                var e = new google.maps.DistanceMatrixService;
                this.setState((function() {
                    return {
                        distanceMatrixService: e
                    }
                }
                ), this.setDistanceMatrixServiceCallback)
            }
            ,
            t.prototype.componentDidUpdate = function() {
                null !== this.state.distanceMatrixService && this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback)
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.distanceMatrixService && this.props.onUnmount && this.props.onUnmount(this.state.distanceMatrixService)
            }
            ,
            t.prototype.render = function() {
                return null
            }
        }(s.PureComponent),
        {
            onPlacesChanged: "places_changed"
        })
          , dt = {
            bounds: function(e, t) {
                e.setBounds(t)
            }
        }
          , gt = (function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.containerElement = (0,
                s.createRef)(),
                t.state = {
                    searchBox: null
                },
                t.setSearchBoxCallback = function() {
                    null !== t.state.searchBox && t.props.onLoad && t.props.onLoad(t.state.searchBox)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                if (g(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places),
                null !== this.containerElement && null !== this.containerElement.current) {
                    var e = this.containerElement.current.querySelector("input");
                    if (null !== e) {
                        var t = new google.maps.places.SearchBox(e,this.props.options);
                        this.registeredEvents = L({
                            updaterMap: dt,
                            eventMap: ct,
                            prevProps: {},
                            nextProps: this.props,
                            instance: t
                        }),
                        this.setState((function() {
                            return {
                                searchBox: t
                            }
                        }
                        ), this.setSearchBoxCallback)
                    }
                }
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                null !== this.state.searchBox && (y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: dt,
                    eventMap: ct,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.searchBox
                }))
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.searchBox && (this.props.onUnmount && this.props.onUnmount(this.state.searchBox),
                y(this.registeredEvents))
            }
            ,
            t.prototype.render = function() {
                return (0,
                o.jsx)("div", {
                    ref: this.containerElement,
                    children: s.Children.only(this.props.children)
                })
            }
            ,
            t.contextType = h
        }(s.PureComponent),
        {
            onPlaceChanged: "place_changed"
        })
          , ht = {
            bounds: function(e, t) {
                e.setBounds(t)
            },
            restrictions: function(e, t) {
                e.setComponentRestrictions(t)
            },
            fields: function(e, t) {
                e.setFields(t)
            },
            options: function(e, t) {
                e.setOptions(t)
            },
            types: function(e, t) {
                e.setTypes(t)
            }
        };
        !function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.registeredEvents = [],
                t.containerElement = (0,
                s.createRef)(),
                t.state = {
                    autocomplete: null
                },
                t.setAutocompleteCallback = function() {
                    null !== t.state.autocomplete && t.props.onLoad && t.props.onLoad(t.state.autocomplete)
                }
                ,
                t
            }
            a(t, e),
            t.prototype.componentDidMount = function() {
                var e;
                g(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
                var t = null === (e = this.containerElement.current) || void 0 === e ? void 0 : e.querySelector("input");
                if (t) {
                    var n = new google.maps.places.Autocomplete(t,this.props.options);
                    this.registeredEvents = L({
                        updaterMap: ht,
                        eventMap: gt,
                        prevProps: {},
                        nextProps: this.props,
                        instance: n
                    }),
                    this.setState((function() {
                        return {
                            autocomplete: n
                        }
                    }
                    ), this.setAutocompleteCallback)
                }
            }
            ,
            t.prototype.componentDidUpdate = function(e) {
                y(this.registeredEvents),
                this.registeredEvents = L({
                    updaterMap: ht,
                    eventMap: gt,
                    prevProps: e,
                    nextProps: this.props,
                    instance: this.state.autocomplete
                })
            }
            ,
            t.prototype.componentWillUnmount = function() {
                null !== this.state.autocomplete && y(this.registeredEvents)
            }
            ,
            t.prototype.render = function() {
                return (0,
                o.jsx)("div", {
                    ref: this.containerElement,
                    className: this.props.className,
                    children: s.Children.only(this.props.children)
                })
            }
            ,
            t.defaultProps = {
                className: ""
            },
            t.contextType = h
        }(s.PureComponent)
    }
}]);

