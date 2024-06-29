"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5465], {
    81956: function(e, a, n) {
        var r = n(85893)
          , i = (n(67294),
        n(67814))
          , l = n(16482);
        a.Z = function(e) {
            var a = Math.floor(200 * Math.random()) + 1;
            return (0,
            r.jsx)("div", {
                className: "accordion",
                id: "accordion".concat(a),
                children: e.res.map((function(e, n) {
                    return (0,
                    r.jsxs)("div", {
                        className: "accordion-item",
                        children: [(0,
                        r.jsx)("h2", {
                            className: "accordion-header",
                            id: "heading" + (n + a),
                            children: (0,
                            r.jsxs)("button", {
                                className: "accordion-button collapsed",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse" + (n + a),
                                "aria-expanded": "true",
                                "aria-controls": "collapse" + (n + a),
                                children: [e.heading, " ", (0,
                                r.jsx)(i.G, {
                                    icon: ["fal", "chevron-down"]
                                })]
                            })
                        }), (0,
                        r.jsx)("div", {
                            id: "collapse" + (n + a),
                            className: "accordion-collapse collapse",
                            "aria-labelledby": "heading" + (n + a),
                            "data-bs-parent": "#accordion" + a,
                            children: (0,
                            r.jsx)("div", {
                                className: "accordion-body",
                                children: l.$h.markMedownRich(e.description)
                            })
                        })]
                    }, n)
                }
                ))
            })
        }
    },
    87935: function(e, a, n) {
        var r = n(85893)
          , i = n(67294)
          , l = n(67814)
          , t = n(48334)
          , s = n(4654)
          , c = n(16482)
          , d = n(47041)
          , o = n(25675)
          , u = n.n(o);
        a.Z = function(e) {
            var a, n, o, m, h, x, v, g, j, p, f = (0,
            i.useState)(!1), b = (f[0],
            f[1]), y = (0,
            i.useState)(!1), N = y[0], S = y[1], k = (0,
            i.useState)(), w = k[0], L = k[1], G = (0,
            i.useState)(), P = G[0], F = G[1], M = (0,
            i.useState)(!1), T = M[0], R = M[1], E = (0,
            i.useState)(!1), I = E[0], V = E[1], $ = (0,
            i.useState)(!1), C = ($[0],
            $[1],
            (0,
            i.useState)(!1)), B = (C[0],
            C[1],
            i.useRef(null)), D = (0,
            d.getCookie)("audience");
            (0,
            i.useEffect)((function() {
                A()
            }
            ), []),
            function(e, a) {
                (0,
                i.useEffect)((function() {
                    var n = function(n) {
                        e.current && !e.current.contains(n.target) && a(n)
                    };
                    return document.addEventListener("mousedown", n),
                    document.addEventListener("touchstart", n),
                    function() {
                        document.removeEventListener("mousedown", n),
                        document.removeEventListener("touchstart", n)
                    }
                }
                ), [e, a])
            }(B, (function() {
                return S(!1)
            }
            ));
            var _ = function(e) {
                if (!1 === T && c.$h.getSharePrice(e.url, L, R),
                w) {
                    var a = new Date(w.timestamp);
                    return (0,
                    r.jsx)("div", {
                        className: "sharebox col-lg-6 mt-5 pl-0",
                        children: (0,
                        r.jsxs)("div", {
                            className: "cont",
                            children: [(0,
                            r.jsxs)("span", {
                                className: "big",
                                children: ["Accumulation Share Price", (0,
                                r.jsxs)("strong", {
                                    children: [w.last.toFixed(2), "GBp", w.change < 0 ? (0,
                                    r.jsx)(l.G, {
                                        icon: ["fal", "caret-up"]
                                    }) : (0,
                                    r.jsx)(l.G, {
                                        icon: ["fal", "caret-down"]
                                    })]
                                })]
                            }), "Price as at", " ", a.toLocaleString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }), " ", "GMT", (0,
                            r.jsx)("br", {})]
                        })
                    })
                }
                return null
            }
              , U = function(e) {
                if (!1 === I && c.$h.getSharePrice(e.url, F, V),
                P) {
                    var a = new Date(P.timestamp);
                    return (0,
                    r.jsx)("div", {
                        className: "sharebox col-lg-6 mt-5 pl-0",
                        children: (0,
                        r.jsxs)("div", {
                            className: "cont",
                            children: [(0,
                            r.jsxs)("span", {
                                className: "big",
                                children: ["Income Share Price", (0,
                                r.jsxs)("strong", {
                                    children: [P.last.toFixed(2), "GBp", P.change < 0 ? (0,
                                    r.jsx)(l.G, {
                                        icon: ["fal", "caret-up"]
                                    }) : (0,
                                    r.jsx)(l.G, {
                                        icon: ["fal", "caret-down"]
                                    })]
                                })]
                            }), "Price as at", " ", a.toLocaleString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }), " ", "GMT", (0,
                            r.jsx)("br", {})]
                        })
                    })
                }
                return null
            }
              , z = function(e) {
                var a = new Date(e.date);
                return (0,
                r.jsx)("div", {
                    className: "sharebox col-lg-6 mt-5 pl-0",
                    children: (0,
                    r.jsxs)("div", {
                        className: "cont",
                        children: [(0,
                        r.jsxs)("span", {
                            className: "big",
                            children: ["NAV Per Share", (0,
                            r.jsxs)("strong", {
                                children: [e.text, "p"]
                            })]
                        }), "Price as at", " ", a.toLocaleString("en-GB", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit"
                        }), " ", "GMT", (0,
                        r.jsx)("br", {})]
                    })
                })
            }
              , A = function() {
                e.vidSrc && b(!0)
            };
            return (0,
            r.jsxs)(r.Fragment, {
                children: [(0,
                r.jsxs)("div", {
                    className: "container-fluid hero ".concat(e.classNames ? e.classNames : (e.level,
                    e.level)),
                    children: [(0,
                    r.jsx)("div", {
                        className: "image-holder",
                        children: e.is404 ? (0,
                        r.jsx)("img", {
                            style: {
                                height: "inherit",
                                width: "100%"
                            },
                            src: e.heroImg
                        }) : e.heroImg && (0,
                        r.jsx)(u(), {
                            src: e.heroImg + "?width=1080",
                            layout: "fill",
                            priority: !0,
                            loading: "eager",
                            objectFit: "cover",
                            placeholder: "blur",
                            blurDataURL: e.heroImg + "?width=10"
                        })
                    }), (0,
                    r.jsx)("video", {
                        className: "hero-vid",
                        autoPlay: !0,
                        muted: !0,
                        playsInline: !0,
                        children: (0,
                        r.jsx)("source", {
                            src: e.bgVidSrc
                        })
                    }), "tertiary" === e.level ? (0,
                    r.jsx)("div", {
                        className: "hero-content-tertiary pl-0 pr-0 container",
                        children: (0,
                        r.jsxs)("div", {
                            className: "col-lg-4 tertiary col-lg-offset-1 pl-0",
                            children: [(0,
                            r.jsx)("h1", {
                                children: c.$h.markMedownRich(e.header)
                            }), c.$h.markMedownRich(e.copy), (null === (a = e.ctaLink) || void 0 === a ? void 0 : a.length) > 0 ? null === (n = e.ctaLink) || void 0 === n ? void 0 : n.map((function(a, n) {
                                return e.vidSrc && e.vidSrcText ? 0 == n && (0,
                                r.jsxs)(r.Fragment, {
                                    children: [(0,
                                    r.jsx)(s.a, {
                                        class: "primary dark inline me-3",
                                        url: a.url,
                                        target: a.target,
                                        children: a.name
                                    }, n), (0,
                                    r.jsxs)("button", {
                                        className: "button primary inverted inline",
                                        type: "button",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#VideoModal1",
                                        children: [(0,
                                        r.jsx)(l.G, {
                                            icon: ["fal", "play"]
                                        }), e.vidSrcText]
                                    })]
                                }) : (0,
                                r.jsx)(s.a, {
                                    class: "primary dark inline me-3",
                                    url: a.url,
                                    target: a.target,
                                    children: a.name
                                }, n)
                            }
                            )) : (0,
                            r.jsx)(s.a, {
                                class: "primary dark inline",
                                url: null === (o = e.ctaLink) || void 0 === o ? void 0 : o.url,
                                target: null === (m = e.ctaLink) || void 0 === m ? void 0 : m.target,
                                children: null === (h = e.ctaLink) || void 0 === h ? void 0 : h.name
                            }), (0,
                            r.jsx)("a", {
                                href: "#main",
                                className: "arrow",
                                children: (0,
                                r.jsx)("div", {
                                    className: "scroll-down",
                                    children: (0,
                                    r.jsx)(l.G, {
                                        icon: ["fal", "angle-down"]
                                    })
                                })
                            })]
                        })
                    }) : (0,
                    r.jsxs)(r.Fragment, {
                        children: [e.message ? (0,
                        r.jsxs)("div", {
                            className: "message",
                            children: [(0,
                            r.jsx)(l.G, {
                                icon: ["fal", "bell"]
                            }), "\xa0", e.message]
                        }) : null, (0,
                        r.jsxs)("div", {
                            className: "hero-content pl-0 pr-0 container",
                            children: [(0,
                            r.jsx)("div", {
                                className: "pl-0",
                                children: (0,
                                r.jsx)("h1", {
                                    children: c.$h.markMedownRich(e.header)
                                })
                            }), c.$h.markMedownRich(e.copy), (null === (x = e.ctaLink) || void 0 === x ? void 0 : x.length) > 0 ? null === (v = e.ctaLink) || void 0 === v ? void 0 : v.map((function(a, n) {
                                return e.vidSrc && e.vidSrcText ? 0 == n && (0,
                                r.jsxs)(r.Fragment, {
                                    children: ["financial-intermediary" == D ? (0,
                                    r.jsx)(s.a, {
                                        class: "primary dark inline me-3",
                                        url: a.url,
                                        target: a.target,
                                        children: a.name
                                    }, n) : a.name.includes("illustration") ? (0,
                                    r.jsx)("p", {
                                        style: {
                                            fontSize: "smaller",
                                            fontStyle: "italic"
                                        },
                                        children: "Our illustration tools are for advisers only"
                                    }) : (0,
                                    r.jsx)(s.a, {
                                        class: "primary dark inline me-3",
                                        url: a.url,
                                        target: a.target,
                                        children: "private-investor" == D && a.name.includes("Want") ? null : a.name
                                    }, n), (0,
                                    r.jsxs)("button", {
                                        className: "button primary inverted inline",
                                        type: "button",
                                        "data-bs-toggle": "modal",
                                        "data-bs-target": "#VideoModal1",
                                        children: [(0,
                                        r.jsx)(l.G, {
                                            icon: ["fal", "play"]
                                        }), e.vidSrcText]
                                    })]
                                }) : (0,
                                r.jsx)(r.Fragment, {
                                    children: "financial-intermediary" == D ? (0,
                                    r.jsx)(s.a, {
                                        class: "primary dark inline me-3",
                                        url: a.url,
                                        target: a.target,
                                        children: a.name
                                    }, n) : a.name.includes("illustration") ? (0,
                                    r.jsx)("p", {
                                        style: {
                                            fontSize: "smaller",
                                            fontStyle: "italic"
                                        },
                                        children: "Our illustration tools are for advisers only"
                                    }) : (0,
                                    r.jsx)(s.a, {
                                        class: "primary dark inline me-3",
                                        url: a.url,
                                        target: a.target,
                                        children: "private-investor" == D && a.name.includes("Want") ? null : a.name
                                    }, n)
                                })
                            }
                            )) : (0,
                            r.jsxs)(r.Fragment, {
                                children: [(0,
                                r.jsx)(s.a, {
                                    class: "primary dark inline",
                                    url: null === (g = e.ctaLink) || void 0 === g ? void 0 : g.url,
                                    target: null === (j = e.ctaLink) || void 0 === j ? void 0 : j.target,
                                    children: null === (p = e.ctaLink) || void 0 === p ? void 0 : p.name
                                }), e.vidSrcText ? (0,
                                r.jsxs)("button", {
                                    className: "button primary inverted inline",
                                    type: "button",
                                    "data-bs-toggle": "modal",
                                    "data-bs-target": "#VideoModal1",
                                    children: [(0,
                                    r.jsx)(l.G, {
                                        icon: ["fal", "play"]
                                    }), e.vidSrcText]
                                }) : null]
                            }), (0,
                            r.jsxs)("div", {
                                className: "row ".concat(e.sharePriceFeed || e.sharePriceFeed2 || e.navText ? "" : "d-none"),
                                children: [e.sharePriceFeed ? (0,
                                r.jsx)(_, {
                                    url: e.sharePriceFeed
                                }) : null, e.sharePriceFeed2 ? (0,
                                r.jsx)(U, {
                                    url: e.sharePriceFeed2
                                }) : null, e.navText ? (0,
                                r.jsx)(z, {
                                    text: e.navText,
                                    date: e.navDate
                                }) : null]
                            })]
                        }), (0,
                        r.jsx)("a", {
                            href: "#main",
                            className: "arrow",
                            children: (0,
                            r.jsx)("div", {
                                className: "scroll-down",
                                children: (0,
                                r.jsx)(l.G, {
                                    icon: ["fal", "angle-down"]
                                })
                            })
                        })]
                    })]
                }), (0,
                r.jsx)("a", {
                    className: "anchor",
                    id: "main"
                }), e.vidSrc ? (0,
                r.jsxs)(r.Fragment, {
                    children: [(0,
                    r.jsx)("div", {
                        className: "modal fade",
                        id: "VideoModal1",
                        tabIndex: -1,
                        "aria-labelledby": "exampleModalLabel",
                        "aria-hidden": "true",
                        children: (0,
                        r.jsx)("div", {
                            className: "modal-dialog modal-dialog-centered modal-lg",
                            children: (0,
                            r.jsxs)("div", {
                                ref: B,
                                className: "modal-content",
                                children: [(0,
                                r.jsx)("div", {
                                    className: "modal-header",
                                    children: (0,
                                    r.jsx)("button", {
                                        type: "button",
                                        className: "btn-close",
                                        "data-bs-dismiss": "modal",
                                        "aria-label": "Close",
                                        onClick: function() {
                                            return S(!1)
                                        }
                                    })
                                }), (0,
                                r.jsx)("div", {
                                    className: "modal-body",
                                    children: (0,
                                    r.jsx)(t.n, {
                                        setIsVideoPlaying: S,
                                        isVideoPlaying: N,
                                        poster: e.vidPoster,
                                        source: e.vidSrc
                                    })
                                })]
                            })
                        })
                    }), (0,
                    r.jsx)("a", {
                        className: "anchor",
                        id: "main"
                    })]
                }) : null]
            })
        }
    },
    77687: function(e, a, n) {
        n.d(a, {
            a: function() {
                return i
            }
        });
        var r = n(85893)
          , i = (n(67294),
        function(e) {
            return (0,
            r.jsxs)("div", {
                className: "text ".concat(e.align),
                children: [e.children, e.ctaURL ? (0,
                r.jsx)("a", {
                    href: e.ctaURL,
                    className: "button primary dark",
                    target: e.target,
                    children: e.ctaCopy
                }) : null]
            })
        }
        )
    }
}]);

