"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[833], {
    97147: function(e, n, t) {
        t.d(n, {
            a: function() {
                return a
            }
        });
        var l = t(41799)
          , o = t(69396)
          , i = t(85893)
          , r = t(67294)
          , s = t(46066)
          , c = (t(98322),
        t(98745),
        t(67814))
          , a = function(e) {
            var n = (0,
            r.useRef)(null)
              , t = (0,
            r.useRef)(null);
            (0,
            r.useRef)(null);
            (0,
            r.useEffect)((function() {
                a(),
                u()
            }
            ));
            var a = function() {
                var e, l, o, i = t, r = null === n || void 0 === n || null === (e = n.current) || void 0 === e || null === (l = e.innerSlider) || void 0 === l || null === (o = l.list) || void 0 === o ? void 0 : o.nextSibling;
                r && i.current.appendChild(r)
            }
              , u = function() {
                var e, t, l, o, i = null === (e = n.current) || void 0 === e || null === (t = e.props) || void 0 === t ? void 0 : t.children.length, r = null === (l = n.current) || void 0 === l ? void 0 : l.props.slidesToShow, s = null === (o = n.current) || void 0 === o ? void 0 : o.innerSlider.list.parentElement.previousSibling;
                i == r && (s.style.display = "none")
            }
              , d = {
                dots: e.showDotsDesktop,
                arrows: !1,
                infinite: e.infinite,
                speed: 500,
                slidesToShow: e.slidesToShowDesktop,
                slidesToScroll: 1,
                dotsClass: "slick-dots old-dots",
                responsive: [{
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: e.slidesToShowTablet
                    }
                }, {
                    breakpoint: 414,
                    settings: {
                        slidesToShow: e.slidesToShowMobile,
                        dots: !0
                    }
                }]
            };
            return (0,
            i.jsx)("div", {
                className: "container carousel py-5 ".concat(e.classes),
                style: {
                    backgroundColor: e.backgroundColour
                },
                children: (0,
                i.jsxs)("div", {
                    className: "container g-lg-0",
                    style: {
                        backgroundColor: e.backgroundColour
                    },
                    children: [(0,
                    i.jsx)("div", {
                        className: "row",
                        children: (0,
                        i.jsx)("div", {
                            className: "col",
                            children: e.isWebinar || e.sectionTitle && (0,
                            i.jsx)("h2", {
                                className: "text-center mb-5",
                                children: e.isWebinar ? "" : e.sectionTitle
                            })
                        })
                    }), (0,
                    i.jsxs)("div", {
                        className: " row position-relative",
                        children: [(0,
                        i.jsx)("div", {
                            className: "con ".concat("white" === e.buttonStyle ? "white" : "purple"),
                            children: (0,
                            i.jsxs)("div", {
                                children: [(0,
                                i.jsxs)("div", {
                                    className: "arrows",
                                    children: [(0,
                                    i.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.slickNext()
                                        },
                                        children: (0,
                                        i.jsx)(c.G, {
                                            icon: ["fal", "chevron-right"],
                                            size: "3x"
                                        })
                                    }), (0,
                                    i.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.slickPrev()
                                        },
                                        children: (0,
                                        i.jsx)(c.G, {
                                            icon: ["fal", "chevron-left"],
                                            size: "3x"
                                        })
                                    })]
                                }), (0,
                                i.jsx)("ul", {
                                    className: "slick-dots new-dots",
                                    ref: t
                                })]
                            })
                        }), (0,
                        i.jsx)(s.Z, (0,
                        o.Z)((0,
                        l.Z)({
                            ref: n
                        }, d), {
                            children: e.children
                        }))]
                    })]
                })
            })
        }
    },
    32142: function(e, n, t) {
        t.d(n, {
            g: function() {
                return u
            }
        });
        var l = t(85893)
          , o = (t(67294),
        t(48334))
          , i = t(16482)
          , r = function(e) {
            return (0,
            l.jsx)("div", {
                className: "quoteBlock ".concat(1 == e.padding ? "p-2 p-md-5" : ""),
                children: (0,
                l.jsxs)("div", {
                    className: "quote-con ".concat(1 == e.padding ? "padding" : ""),
                    children: [(0,
                    l.jsxs)("div", {
                        className: "quote d-flex",
                        children: [e.author ? (0,
                        l.jsx)("img", {
                            className: "me-3 mb-3 align-self-start",
                            src: "/assets/icons/quote-open.svg",
                            alt: ""
                        }) : null, i.$h.markMedownRich(e.copy), e.author ? (0,
                        l.jsx)("img", {
                            className: "ms-3 align-self-end",
                            src: "/assets/icons/quote-close.svg",
                            alt: ""
                        }) : null]
                    }), (0,
                    l.jsx)("p", {
                        className: "author",
                        children: e.author
                    }), (0,
                    l.jsx)("p", {
                        className: "title",
                        children: e.title
                    }), e.text && i.$h.markMedownRich(e.text)]
                })
            })
        }
          , s = t(4654)
          , c = t(25675)
          , a = t.n(c)
          , u = function(e) {
            return (0,
            l.jsxs)("div", {
                className: "videoImageCopyComponent",
                children: [(0,
                l.jsx)("div", {
                    className: "videoImageCon",
                    children: e.video ? (0,
                    l.jsx)(o.n, {
                        poster: e.poster,
                        source: e.video
                    }) : e.image ? (0,
                    l.jsx)(a(), {
                        src: e.image + "?width=800",
                        alt: "",
                        quality: 100,
                        objectFit: "cover",
                        layout: "fill",
                        placeholder: "blur",
                        blurDataURL: e.image + "?width=10"
                    }) : null
                }), (0,
                l.jsxs)("div", {
                    className: "copyCon",
                    children: [e.showGradient && (0,
                    l.jsx)("div", {
                        className: "gradient"
                    }), (0,
                    l.jsx)("h2", {
                        children: e.heading
                    }), (0,
                    l.jsx)(r, {
                        padding: !1,
                        copy: e.copy,
                        author: e.author,
                        title: e.title,
                        text: e.text
                    }), e.url ? (0,
                    l.jsx)(s.a, {
                        class: "primary dark",
                        url: e.url,
                        target: e.target,
                        children: e.cta
                    }) : null]
                })]
            })
        }
    },
    55948: function(e, n, t) {
        t.d(n, {
            p: function() {
                return u
            }
        });
        var l = t(85893)
          , o = t(25675)
          , i = t.n(o)
          , r = t(41664)
          , s = t.n(r)
          , c = t(67294)
          , a = t(10332)
          , u = function(e) {
            var n = (0,
            c.useState)("")
              , t = n[0]
              , o = n[1]
              , r = (0,
            c.useState)("0.6")
              , u = r[0]
              , d = (r[1],
            "")
              , h = (0,
            a.a)("(max-width: 998px)");
            e.responsiveCalsses && (d = e.responsiveCalsses);
            var v = function(e) {
                return null === e || void 0 === e ? void 0 : e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, n, t, l) {
                    return "#" + n + n + t + t + l + l
                }
                )).substring(1).match(/.{2}/g).map((function(e) {
                    return parseInt(e, 16)
                }
                ))
            };
            (0,
            c.useEffect)((function() {
                e.overlayColour && e.image && o("rgba(" + v(e.overlayColour)[0] + "," + v(e.overlayColour)[1] + "," + v(e.overlayColour)[2] + ", 1)"),
                e.overlayColour && !e.image && o("rgba(" + v(e.overlayColour)[0] + "," + v(e.overlayColour)[1] + "," + v(e.overlayColour)[2] + ", 1)")
            }
            ));
            var m = {
                backgroundColor: t
            };
            return (0,
            c.useEffect)((function() {
                var e = function() {
                    var e = document.querySelector(".squareBlockCTA");
                    if (h)
                        e && e.querySelectorAll(".button").forEach((function(e) {
                            e.style.top = ""
                        }
                        ));
                    else if (e && document.getElementById("home")) {
                        var n = e.querySelectorAll(".copy-holder")
                          , t = 0;
                        if (n.forEach((function(e) {
                            var n = e.querySelectorAll("h1, h2, h3, h4, h5, h6, p")
                              , l = 0;
                            n.forEach((function(e) {
                                l += e.offsetHeight
                            }
                            )),
                            l > t && (t = l)
                        }
                        )),
                        e)
                            e.querySelectorAll(".button").forEach((function(e) {
                                e.style.top = "calc(".concat(t, "px + 4rem + 1.875rem)")
                            }
                            ))
                    }
                };
                return e(),
                window.addEventListener("resize", e),
                function() {
                    window.removeEventListener("resize", e)
                }
            }
            ), [h]),
            (0,
            l.jsx)("div", {
                className: "".concat(d, " mb-3"),
                children: (0,
                l.jsxs)("div", {
                    className: "holder".concat(1 == e.isSquare ? " square" : "").concat(1 == e.centerAlign ? " d-flex align-items-center" : ""),
                    style: m,
                    children: [(0,
                    l.jsxs)("div", {
                        className: "copy-holder p-3 p-lg-5",
                        children: [e.children, e.ctaURL && (0,
                        l.jsx)(s(), {
                            href: "https://foresightgroupwellbeing.libsyn.com" === e.ctaURL ? e.ctaURL : e.ctaURL.split("foresightgroup/").join(""),
                            children: (0,
                            l.jsx)("a", {
                                target: e.target,
                                className: "button ".concat("light" === e.ctaColor ? "secondary dark-text" : "primary dark"),
                                children: e.ctaCopy
                            })
                        })]
                    }), e.image && (0,
                    l.jsx)("div", {
                        className: "square-cta-background",
                        style: {
                            opacity: u
                        },
                        children: (0,
                        l.jsx)(i(), {
                            src: e.image + "?width=750",
                            alt: "",
                            objectFit: "cover",
                            layout: "fill",
                            placeholder: "blur",
                            blurDataURL: e.image + "?width=10",
                            style: {
                                borderRadius: 8
                            }
                        })
                    })]
                })
            })
        }
    },
    27404: function(e, n, t) {
        t.d(n, {
            s: function() {
                return r
            }
        });
        var l = t(85893)
          , o = (t(67294),
        t(55948))
          , i = t(16482)
          , r = function(e) {
            var n, t = !1, r = (null === (n = e[0]) || void 0 === n ? void 0 : n.length) > 4 ? "col-sm-12 col-md-6 col-xl-3" : "col-sm-12 col-lg";
            return (0,
            l.jsx)(l.Fragment, {
                children: e[0] ? (0,
                l.jsx)("div", {
                    className: "container-fluid squareBlockCTA mt-5 mb-5",
                    children: (0,
                    l.jsx)("div", {
                        className: "container",
                        children: (0,
                        l.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            l.jsx)("div", {
                                className: "py-3",
                                children: i.$h.markMedownRich(e[1] && e[1].content.introCopy)
                            }), e[0].map((function(n, s) {
                                return 1 == e[0].length && (t = !0),
                                n.content ? (0,
                                l.jsxs)(o.p, {
                                    image: n.content.image ? n.content.image.url : "",
                                    overlayColour: n.content.bGColour ? "#" + n.content.bGColour : "#298b9b",
                                    isSquare: 1 != e[0].length,
                                    ctaCopy: n.content.cTALink && n.content.cTALink.name,
                                    ctaURL: n.content.cTALink && n.content.cTALink.url,
                                    ctaColor: n.content.cTALightDark,
                                    centerAlign: t,
                                    target: n.content.cTALink && n.content.cTALink.target,
                                    responsiveCalsses: r,
                                    children: [i.$h.markMedownRich(n.content.text), !n.content.text && n.content.title && (0,
                                    l.jsx)("p", {
                                        className: "canela",
                                        children: n.content.title
                                    })]
                                }, s) : (0,
                                l.jsxs)(o.p, {
                                    image: n.image ? n.image.url : "",
                                    overlayColour: n.bGColour ? "#" + n.bGColour : "#298b9b",
                                    isSquare: 1 != e[0].length,
                                    ctaCopy: n.cTALink && n.cTALink.name,
                                    ctaURL: n.cTALink && n.cTALink.url,
                                    ctaColor: n.cTALightDark,
                                    centerAlign: t,
                                    target: n.cTALink && n.cTALink.target,
                                    responsiveCalsses: r,
                                    children: [i.$h.markMedownRich(n.text), !n.text && n.title && (0,
                                    l.jsx)("p", {
                                        className: "canela",
                                        children: n.title
                                    })]
                                }, s)
                            }
                            ))]
                        })
                    })
                }) : null
            })
        }
    },
    48334: function(e, n, t) {
        t.d(n, {
            n: function() {
                return s
            }
        });
        var l = t(85893)
          , o = t(67294)
          , i = t(22004)
          , r = t.n(i)
          , s = function(e) {
            (0,
            o.useRef)(null),
            (0,
            o.useRef)(null),
            (0,
            o.useRef)(null);
            var n = (0,
            o.useState)(!1);
            n[0],
            n[1];
            (0,
            o.useEffect)((function() {}
            ));
            return (0,
            l.jsx)("div", {
                className: "video-component",
                children: e.source && (0,
                l.jsx)(r(), {
                    url: e.source,
                    width: "100%",
                    height: "500px",
                    playsinline: !0,
                    controls: !0,
                    pip: !0,
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    },
                    playing: e.isVideoPlaying
                })
            })
        }
    }
}]);

