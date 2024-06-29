(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[7452], {
    98100: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/institutional-investor", function() {
            return t(83949)
        }
        ])
    },
    97147: function(e, n, t) {
        "use strict";
        t.d(n, {
            a: function() {
                return a
            }
        });
        var i = t(41799)
          , o = t(69396)
          , s = t(85893)
          , l = t(67294)
          , c = t(46066)
          , r = (t(98322),
        t(98745),
        t(67814))
          , a = function(e) {
            var n = (0,
            l.useRef)(null)
              , t = (0,
            l.useRef)(null);
            (0,
            l.useRef)(null);
            (0,
            l.useEffect)((function() {
                a(),
                d()
            }
            ));
            var a = function() {
                var e, i, o, s = t, l = null === n || void 0 === n || null === (e = n.current) || void 0 === e || null === (i = e.innerSlider) || void 0 === i || null === (o = i.list) || void 0 === o ? void 0 : o.nextSibling;
                l && s.current.appendChild(l)
            }
              , d = function() {
                var e, t, i, o, s = null === (e = n.current) || void 0 === e || null === (t = e.props) || void 0 === t ? void 0 : t.children.length, l = null === (i = n.current) || void 0 === i ? void 0 : i.props.slidesToShow, c = null === (o = n.current) || void 0 === o ? void 0 : o.innerSlider.list.parentElement.previousSibling;
                s == l && (c.style.display = "none")
            }
              , u = {
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
            s.jsx)("div", {
                className: "container carousel py-5 ".concat(e.classes),
                style: {
                    backgroundColor: e.backgroundColour
                },
                children: (0,
                s.jsxs)("div", {
                    className: "container g-lg-0",
                    style: {
                        backgroundColor: e.backgroundColour
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: "row",
                        children: (0,
                        s.jsx)("div", {
                            className: "col",
                            children: e.isWebinar || e.sectionTitle && (0,
                            s.jsx)("h2", {
                                className: "text-center mb-5",
                                children: e.isWebinar ? "" : e.sectionTitle
                            })
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: " row position-relative",
                        children: [(0,
                        s.jsx)("div", {
                            className: "con ".concat("white" === e.buttonStyle ? "white" : "purple"),
                            children: (0,
                            s.jsxs)("div", {
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "arrows",
                                    children: [(0,
                                    s.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.slickNext()
                                        },
                                        children: (0,
                                        s.jsx)(r.G, {
                                            icon: ["fal", "chevron-right"],
                                            size: "3x"
                                        })
                                    }), (0,
                                    s.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.slickPrev()
                                        },
                                        children: (0,
                                        s.jsx)(r.G, {
                                            icon: ["fal", "chevron-left"],
                                            size: "3x"
                                        })
                                    })]
                                }), (0,
                                s.jsx)("ul", {
                                    className: "slick-dots new-dots",
                                    ref: t
                                })]
                            })
                        }), (0,
                        s.jsx)(c.Z, (0,
                        o.Z)((0,
                        i.Z)({
                            ref: n
                        }, u), {
                            children: e.children
                        }))]
                    })]
                })
            })
        }
    },
    54036: function(e, n, t) {
        "use strict";
        var i = t(85893)
          , o = t(67294)
          , s = t(67814)
          , l = t(4654)
          , c = t(16482);
        n.Z = function(e) {
            var n = (0,
            o.useState)(!1)
              , t = n[0]
              , r = n[1]
              , a = (0,
            o.useState)("not-active")
              , d = a[0]
              , u = a[1]
              , h = (0,
            o.useState)("")
              , m = h[0]
              , v = h[1]
              , p = (0,
            o.useState)(.4)
              , x = p[0]
              , g = p[1]
              , f = (0,
            o.useState)(!1)
              , j = (f[0],
            f[1],
            function(e) {
                return null === e || void 0 === e ? void 0 : e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, n, t, i) {
                    return "#" + n + n + t + t + i + i
                }
                )).substring(1).match(/.{2}/g).map((function(e) {
                    return parseInt(e, 16)
                }
                ))
            }
            );
            (0,
            o.useEffect)((function() {
                u(!0 === t ? "is_active" : "not-active");
                var n = e.color;
                0 === n.length && (n = "#4d384c"),
                n && v("rgba(" + j(n)[0] + "," + j(n)[1] + "," + j(n)[2])
            }
            ));
            return (0,
            i.jsx)("div", {
                onClick: function() {
                    r(!t),
                    g(t ? .4 : 1)
                },
                className: "col-12 col-lg-4 ColContentRevealer text-white  ",
                children: (0,
                i.jsxs)("div", {
                    className: "item ".concat(d),
                    style: {
                        backgroundColor: m + "," + "".concat(x) + ")"
                    },
                    onMouseEnter: function() {
                        !t && g(1)
                    },
                    onMouseLeave: function() {
                        !t && g(.4)
                    },
                    children: [(0,
                    i.jsx)("img", {
                        src: e.image + "?width=400",
                        alt: ""
                    }), (0,
                    i.jsx)("h2", {
                        className: "title",
                        children: e.title
                    }), (0,
                    i.jsx)("div", {
                        className: "description h3",
                        children: c.$h.markMedownRich(e.description)
                    }), t ? (0,
                    i.jsx)(s.G, {
                        className: "mt-4 contract-icon",
                        icon: ["fal", "compress-alt"]
                    }) : (0,
                    i.jsx)(s.G, {
                        className: "mt-4 expand-icon",
                        icon: ["fal", "expand-alt"]
                    }), (0,
                    i.jsxs)("div", {
                        className: "expandedCopy h3",
                        children: [c.$h.markMedownRich(e.expandedCopy), (0,
                        i.jsx)(l.a, {
                            url: e.url,
                            class: e.buttonclass,
                            target: e.target,
                            children: e.buttontext
                        })]
                    })]
                })
            })
        }
    },
    50710: function(e, n, t) {
        "use strict";
        var i = t(85893)
          , o = (t(67294),
        t(4654));
        n.Z = function(e) {
            return (0,
            i.jsx)("div", {
                className: "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
                children: (0,
                i.jsx)("div", {
                    className: "container pt-3 pb-3",
                    children: (0,
                    i.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [(0,
                        i.jsxs)("div", {
                            className: "col",
                            children: [(0,
                            i.jsx)("h2", {
                                children: "Find out how you can be part of our journey"
                            }), (0,
                            i.jsx)("p", {
                                children: "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies."
                            })]
                        }), (0,
                        i.jsx)("div", {
                            className: "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                            children: (0,
                            i.jsx)(o.a, {
                                target: "_self",
                                url: "/shareholders",
                                class: "button primary dark",
                                children: "Visit Foresight Group Holdings"
                            })
                        })]
                    })
                })
            })
        }
    },
    94574: function(e, n, t) {
        "use strict";
        t.d(n, {
            j: function() {
                return l
            }
        });
        var i = t(85893)
          , o = (t(67294),
        t(16482))
          , s = t(67814)
          , l = function(e) {
            return (0,
            i.jsx)("div", {
                className: "blocks col-sm-12 col-md-".concat(e.columnSize),
                children: (0,
                i.jsx)("div", {
                    className: "item",
                    children: (0,
                    i.jsxs)("div", {
                        className: "heading d-flex flex-sm-column flex-md-column flex-xs-column",
                        children: [e.icon ? (0,
                        i.jsx)("img", {
                            src: e.icon,
                            alt: ""
                        }) : null, e.faIcon ? (0,
                        i.jsx)(s.G, {
                            color: "#".concat(e.iconColour),
                            icon: ["fal", "".concat(e.faIcon)]
                        }) : null, (0,
                        i.jsxs)("div", {
                            className: "copy-holder",
                            children: [(0,
                            i.jsx)("h3", {
                                className: "",
                                children: e.heading
                            }), (0,
                            i.jsx)("p", {
                                className: "copy mt-2",
                                children: e.copy
                            }), e.longCopy ? (0,
                            i.jsx)("div", {
                                className: "copy mt-2",
                                children: o.$h.markMedownRich(e.longCopy)
                            }) : null]
                        })]
                    })
                })
            })
        }
    },
    587: function(e, n, t) {
        "use strict";
        t.d(n, {
            v: function() {
                return l
            }
        });
        var i = t(85893)
          , o = (t(67294),
        t(16482))
          , s = t(4654)
          , l = function(e) {
            var n, t, l;
            return (0,
            i.jsx)("div", {
                className: "container-fluid colinfo pt-5 pb-5 icon-text-holder ".concat(e.classes),
                children: (0,
                i.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    i.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        i.jsx)("div", {
                            className: "col col-lg-8",
                            children: o.$h.markMedownRich(e.copy)
                        })
                    }), e.children && (0,
                    i.jsx)("div", {
                        className: "mt-5 row justify-content-center align-items-baseline",
                        children: e.children
                    }), e.cta && (0,
                    i.jsx)("div", {
                        className: "row mt-5",
                        children: (0,
                        i.jsx)("div", {
                            className: "col",
                            children: (0,
                            i.jsx)(s.a, {
                                url: null === (n = e.cta) || void 0 === n ? void 0 : n.url,
                                target: null === (t = e.cta) || void 0 === t ? void 0 : t.target,
                                class: "button primary dark mx-auto",
                                children: null === (l = e.cta) || void 0 === l ? void 0 : l.name
                            })
                        })
                    })]
                })
            })
        }
    },
    32364: function(e, n, t) {
        "use strict";
        t.d(n, {
            n: function() {
                return a
            }
        });
        var i = t(85893)
          , o = (t(67294),
        t(67814))
          , s = t(41664)
          , l = t.n(s)
          , c = t(25675)
          , r = t.n(c)
          , a = function(e) {
            var n, t = e.time.trim().split(/\s+/).length, s = Math.ceil(t / 210);
            return (0,
            i.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                i.jsx)(l(), {
                    href: "/news" + e.url,
                    children: (0,
                    i.jsx)("a", {
                        children: (0,
                        i.jsxs)("div", {
                            className: "news-item",
                            children: [(0,
                            i.jsx)("div", {
                                className: "image",
                                children: null !== e.backgroundImage ? (0,
                                i.jsx)(r(), {
                                    src: e.backgroundImage,
                                    layout: "fill",
                                    objectFit: "cover",
                                    placeholder: "blur",
                                    blurDataURL: e.backgroundImage + "?width=10",
                                    style: {
                                        borderRadius: 8
                                    }
                                }) : null
                            }), null === (n = e.category) || void 0 === n ? void 0 : n.map((function(e, n) {
                                return (0,
                                i.jsx)("p", {
                                    className: "category me-2",
                                    children: e
                                }, n)
                            }
                            )), (0,
                            i.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                i.jsxs)("p", {
                                    className: "time",
                                    children: [(0,
                                    i.jsx)(o.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", s <= 1 ? s + " min" : s + " mins", " "]
                                }), (0,
                                i.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    i.jsx)(o.G, {
                                        icon: ["fal", "calendar-times"]
                                    }), " ", e.date]
                                })]
                            }), (0,
                            i.jsx)("h3", {
                                className: "heading",
                                children: e.heading
                            }), e.description && (0,
                            i.jsx)("p", {
                                className: "description",
                                children: e.description
                            }), (0,
                            i.jsx)("button", {
                                className: "button primary dark",
                                children: e.ctaText
                            })]
                        })
                    })
                })
            })
        }
    },
    55948: function(e, n, t) {
        "use strict";
        t.d(n, {
            p: function() {
                return d
            }
        });
        var i = t(85893)
          , o = t(25675)
          , s = t.n(o)
          , l = t(41664)
          , c = t.n(l)
          , r = t(67294)
          , a = t(10332)
          , d = function(e) {
            var n = (0,
            r.useState)("")
              , t = n[0]
              , o = n[1]
              , l = (0,
            r.useState)("0.6")
              , d = l[0]
              , u = (l[1],
            "")
              , h = (0,
            a.a)("(max-width: 998px)");
            e.responsiveCalsses && (u = e.responsiveCalsses);
            var m = function(e) {
                return null === e || void 0 === e ? void 0 : e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, n, t, i) {
                    return "#" + n + n + t + t + i + i
                }
                )).substring(1).match(/.{2}/g).map((function(e) {
                    return parseInt(e, 16)
                }
                ))
            };
            (0,
            r.useEffect)((function() {
                e.overlayColour && e.image && o("rgba(" + m(e.overlayColour)[0] + "," + m(e.overlayColour)[1] + "," + m(e.overlayColour)[2] + ", 1)"),
                e.overlayColour && !e.image && o("rgba(" + m(e.overlayColour)[0] + "," + m(e.overlayColour)[1] + "," + m(e.overlayColour)[2] + ", 1)")
            }
            ));
            var v = {
                backgroundColor: t
            };
            return (0,
            r.useEffect)((function() {
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
                              , i = 0;
                            n.forEach((function(e) {
                                i += e.offsetHeight
                            }
                            )),
                            i > t && (t = i)
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
            i.jsx)("div", {
                className: "".concat(u, " mb-3"),
                children: (0,
                i.jsxs)("div", {
                    className: "holder".concat(1 == e.isSquare ? " square" : "").concat(1 == e.centerAlign ? " d-flex align-items-center" : ""),
                    style: v,
                    children: [(0,
                    i.jsxs)("div", {
                        className: "copy-holder p-3 p-lg-5",
                        children: [e.children, e.ctaURL && (0,
                        i.jsx)(c(), {
                            href: "https://foresightgroupwellbeing.libsyn.com" === e.ctaURL ? e.ctaURL : e.ctaURL.split("foresightgroup/").join(""),
                            children: (0,
                            i.jsx)("a", {
                                target: e.target,
                                className: "button ".concat("light" === e.ctaColor ? "secondary dark-text" : "primary dark"),
                                children: e.ctaCopy
                            })
                        })]
                    }), e.image && (0,
                    i.jsx)("div", {
                        className: "square-cta-background",
                        style: {
                            opacity: d
                        },
                        children: (0,
                        i.jsx)(s(), {
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
        "use strict";
        t.d(n, {
            s: function() {
                return l
            }
        });
        var i = t(85893)
          , o = (t(67294),
        t(55948))
          , s = t(16482)
          , l = function(e) {
            var n, t = !1, l = (null === (n = e[0]) || void 0 === n ? void 0 : n.length) > 4 ? "col-sm-12 col-md-6 col-xl-3" : "col-sm-12 col-lg";
            return (0,
            i.jsx)(i.Fragment, {
                children: e[0] ? (0,
                i.jsx)("div", {
                    className: "container-fluid squareBlockCTA mt-5 mb-5",
                    children: (0,
                    i.jsx)("div", {
                        className: "container",
                        children: (0,
                        i.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            i.jsx)("div", {
                                className: "py-3",
                                children: s.$h.markMedownRich(e[1] && e[1].content.introCopy)
                            }), e[0].map((function(n, c) {
                                return 1 == e[0].length && (t = !0),
                                n.content ? (0,
                                i.jsxs)(o.p, {
                                    image: n.content.image ? n.content.image.url : "",
                                    overlayColour: n.content.bGColour ? "#" + n.content.bGColour : "#298b9b",
                                    isSquare: 1 != e[0].length,
                                    ctaCopy: n.content.cTALink && n.content.cTALink.name,
                                    ctaURL: n.content.cTALink && n.content.cTALink.url,
                                    ctaColor: n.content.cTALightDark,
                                    centerAlign: t,
                                    target: n.content.cTALink && n.content.cTALink.target,
                                    responsiveCalsses: l,
                                    children: [s.$h.markMedownRich(n.content.text), !n.content.text && n.content.title && (0,
                                    i.jsx)("p", {
                                        className: "canela",
                                        children: n.content.title
                                    })]
                                }, c) : (0,
                                i.jsxs)(o.p, {
                                    image: n.image ? n.image.url : "",
                                    overlayColour: n.bGColour ? "#" + n.bGColour : "#298b9b",
                                    isSquare: 1 != e[0].length,
                                    ctaCopy: n.cTALink && n.cTALink.name,
                                    ctaURL: n.cTALink && n.cTALink.url,
                                    ctaColor: n.cTALightDark,
                                    centerAlign: t,
                                    target: n.cTALink && n.cTALink.target,
                                    responsiveCalsses: l,
                                    children: [s.$h.markMedownRich(n.text), !n.text && n.title && (0,
                                    i.jsx)("p", {
                                        className: "canela",
                                        children: n.title
                                    })]
                                }, c)
                            }
                            ))]
                        })
                    })
                }) : null
            })
        }
    },
    83949: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSP: function() {
                return p
            },
            default: function() {
                return x
            }
        });
        var i = t(41799)
          , o = t(85893)
          , s = (t(67294),
        t(13184))
          , l = t(50710)
          , c = t(97147)
          , r = t(32364)
          , a = t(27404)
          , d = t(54036)
          , u = t(16482)
          , h = t(94574)
          , m = t(587)
          , v = t(73983)
          , p = !0;
        function x(e) {
            var n, t = e.data.content, p = e.data.allNews;
            return (0,
            o.jsxs)(s.Z, {
                id: "root",
                className: "",
                children: [(0,
                o.jsx)(u.$h.PageHead, {
                    siteURL: t.url.split("foresightgroup/").join(""),
                    OGimageURL: (null === (n = t.metaImage) || void 0 === n ? void 0 : n.url) ? t.metaImage.url : "",
                    OGtitle: t.metaTitle ? t.metaTitle : "",
                    OGpageDescription: t.metaDescription ? t.metaDescription : ""
                }), (0,
                o.jsx)(v.Z, {
                    image: t.image.url + "?width=1080",
                    text: t.heroText,
                    cta: t.cta,
                    level: 0
                }), (0,
                o.jsx)(m.v, {
                    copy: t.text,
                    classes: "text-center ".concat("Green Gradient" === t.backgroundColour ? "lighter-green" : "Purple Gradient" === t.backgroundColour ? "pink-gradient-bg" : "bg-white"),
                    children: t.iconTextBlocks.map((function(e, n) {
                        return (0,
                        o.jsx)(h.j, {
                            columnSize: 4,
                            heading: e.title,
                            copy: e.description,
                            icon: e.icon.url
                        }, n)
                    }
                    ))
                }), (0,
                o.jsx)("div", {
                    className: "container-fluid my-5",
                    children: (0,
                    o.jsx)("div", {
                        className: "container position-relative",
                        children: (0,
                        o.jsx)("div", {
                            className: "row stretched justify-content-end",
                            children: t.pictureCTAComponents.map((function(e, n) {
                                var t, i, s;
                                return (0,
                                o.jsx)(d.Z, {
                                    image: e.image.url,
                                    title: e.title,
                                    description: e.shortCopy,
                                    color: e.bGColour ? "#" + e.bGColour : "",
                                    expandedCopy: e.longCopy,
                                    buttonclass: "primary dark",
                                    buttontext: null === (t = e.cTALink) || void 0 === t ? void 0 : t.name,
                                    url: null === (i = e.cTALink) || void 0 === i ? void 0 : i.url,
                                    target: null === (s = e.cTALabel) || void 0 === s ? void 0 : s.target
                                }, n)
                            }
                            ))
                        })
                    })
                }), (0,
                o.jsx)(a.s, (0,
                i.Z)({}, [t.cTAComponents])), (0,
                o.jsx)(c.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "Latest News & Insights",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: p.items.map((function(e, n) {
                        var t = e.datePublished.split("T")[0];
                        return t = new Date(t),
                        (0,
                        o.jsx)(r.n, {
                            backgroundImage: e.image && e.image.url,
                            category: e.category,
                            time: e.duration,
                            date: t.toLocaleDateString("en-UK"),
                            heading: e.title,
                            description: e.description,
                            url: e.url.split("all-news/").join(""),
                            ctaText: e.cTALabel,
                            responsiveClasses: ""
                        }, n)
                    }
                    ))
                }), (0,
                o.jsx)(l.Z, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 9407, 3184, 3983, 9774, 2888, 179], (function() {
        return n = 98100,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);

