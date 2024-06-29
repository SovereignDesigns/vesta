(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[4347], {
    91845: function(e, n, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us/diversity-inclusion", function() {
            return i(97730)
        }
        ])
    },
    50710: function(e, n, i) {
        "use strict";
        var t = i(85893)
          , c = (i(67294),
        i(4654));
        n.Z = function(e) {
            return (0,
            t.jsx)("div", {
                className: "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
                children: (0,
                t.jsx)("div", {
                    className: "container pt-3 pb-3",
                    children: (0,
                    t.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [(0,
                        t.jsxs)("div", {
                            className: "col",
                            children: [(0,
                            t.jsx)("h2", {
                                children: "Find out how you can be part of our journey"
                            }), (0,
                            t.jsx)("p", {
                                children: "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies."
                            })]
                        }), (0,
                        t.jsx)("div", {
                            className: "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                            children: (0,
                            t.jsx)(c.a, {
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
    18880: function(e, n, i) {
        "use strict";
        var t = i(85893)
          , c = i(25675)
          , s = i.n(c)
          , a = i(67294)
          , l = i(16482);
        n.Z = function(e) {
            e.data;
            var n = (0,
            a.useState)(!1)
              , i = n[0]
              , c = n[1]
              , r = e.data.map((function(e, n) {
                return (0,
                t.jsxs)("div", {
                    className: "block ".concat(e.image ? "image-bg" : "bg-deep-purple", " ").concat(i === n ? "active" : ""),
                    children: [e.image ? (0,
                    t.jsx)("div", {
                        className: "image-container",
                        children: (0,
                        t.jsx)(s(), {
                            src: e.image.url + "?width=550",
                            layout: "fill",
                            objectFit: "cover",
                            alt: "",
                            blurDataURL: e.image.url + "?width=50",
                            placeholder: "blur"
                        })
                    }) : "", (0,
                    t.jsxs)("div", {
                        className: "block-content",
                        children: [(0,
                        t.jsx)("h3", {
                            children: e.title
                        }), (0,
                        t.jsx)("button", {
                            type: "button",
                            className: "view-toggle button ".concat(i === n ? "open" : ""),
                            onClick: function() {
                                return i === (e = n) && (e = !0),
                                void c(e);
                                var e
                            },
                            children: i === n ? "-" : "+"
                        })]
                    }), (0,
                    t.jsxs)("div", {
                        className: "block-content ".concat(i === n ? "shown" : "hidden"),
                        children: [l.$h.markMedownRich(e.description), e.cTA ? (0,
                        t.jsx)("a", {
                            href: e.cTA.url.replace(/\/foresightgroup/g, ""),
                            className: "button primary dark",
                            target: e.cTA.target ? e.cTA.target : "_self",
                            children: e.cTA.name
                        }) : null]
                    })]
                }, n)
            }
            ));
            return (0,
            t.jsx)("div", {
                className: "col-sm-12 col-xl-6 blocks gx-0",
                children: r
            })
        }
    },
    94574: function(e, n, i) {
        "use strict";
        i.d(n, {
            j: function() {
                return a
            }
        });
        var t = i(85893)
          , c = (i(67294),
        i(16482))
          , s = i(67814)
          , a = function(e) {
            return (0,
            t.jsx)("div", {
                className: "blocks col-sm-12 col-md-".concat(e.columnSize),
                children: (0,
                t.jsx)("div", {
                    className: "item",
                    children: (0,
                    t.jsxs)("div", {
                        className: "heading d-flex flex-sm-column flex-md-column flex-xs-column",
                        children: [e.icon ? (0,
                        t.jsx)("img", {
                            src: e.icon,
                            alt: ""
                        }) : null, e.faIcon ? (0,
                        t.jsx)(s.G, {
                            color: "#".concat(e.iconColour),
                            icon: ["fal", "".concat(e.faIcon)]
                        }) : null, (0,
                        t.jsxs)("div", {
                            className: "copy-holder",
                            children: [(0,
                            t.jsx)("h3", {
                                className: "",
                                children: e.heading
                            }), (0,
                            t.jsx)("p", {
                                className: "copy mt-2",
                                children: e.copy
                            }), e.longCopy ? (0,
                            t.jsx)("div", {
                                className: "copy mt-2",
                                children: c.$h.markMedownRich(e.longCopy)
                            }) : null]
                        })]
                    })
                })
            })
        }
    },
    587: function(e, n, i) {
        "use strict";
        i.d(n, {
            v: function() {
                return a
            }
        });
        var t = i(85893)
          , c = (i(67294),
        i(16482))
          , s = i(4654)
          , a = function(e) {
            var n, i, a;
            return (0,
            t.jsx)("div", {
                className: "container-fluid colinfo pt-5 pb-5 icon-text-holder ".concat(e.classes),
                children: (0,
                t.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    t.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        t.jsx)("div", {
                            className: "col col-lg-8",
                            children: c.$h.markMedownRich(e.copy)
                        })
                    }), e.children && (0,
                    t.jsx)("div", {
                        className: "mt-5 row justify-content-center align-items-baseline",
                        children: e.children
                    }), e.cta && (0,
                    t.jsx)("div", {
                        className: "row mt-5",
                        children: (0,
                        t.jsx)("div", {
                            className: "col",
                            children: (0,
                            t.jsx)(s.a, {
                                url: null === (n = e.cta) || void 0 === n ? void 0 : n.url,
                                target: null === (i = e.cta) || void 0 === i ? void 0 : i.target,
                                class: "button primary dark mx-auto",
                                children: null === (a = e.cta) || void 0 === a ? void 0 : a.name
                            })
                        })
                    })]
                })
            })
        }
    },
    32364: function(e, n, i) {
        "use strict";
        i.d(n, {
            n: function() {
                return o
            }
        });
        var t = i(85893)
          , c = (i(67294),
        i(67814))
          , s = i(41664)
          , a = i.n(s)
          , l = i(25675)
          , r = i.n(l)
          , o = function(e) {
            var n, i = e.time.trim().split(/\s+/).length, s = Math.ceil(i / 210);
            return (0,
            t.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                t.jsx)(a(), {
                    href: "/news" + e.url,
                    children: (0,
                    t.jsx)("a", {
                        children: (0,
                        t.jsxs)("div", {
                            className: "news-item",
                            children: [(0,
                            t.jsx)("div", {
                                className: "image",
                                children: null !== e.backgroundImage ? (0,
                                t.jsx)(r(), {
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
                                t.jsx)("p", {
                                    className: "category me-2",
                                    children: e
                                }, n)
                            }
                            )), (0,
                            t.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                t.jsxs)("p", {
                                    className: "time",
                                    children: [(0,
                                    t.jsx)(c.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", s <= 1 ? s + " min" : s + " mins", " "]
                                }), (0,
                                t.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    t.jsx)(c.G, {
                                        icon: ["fal", "calendar-times"]
                                    }), " ", e.date]
                                })]
                            }), (0,
                            t.jsx)("h3", {
                                className: "heading",
                                children: e.heading
                            }), e.description && (0,
                            t.jsx)("p", {
                                className: "description",
                                children: e.description
                            }), (0,
                            t.jsx)("button", {
                                className: "button primary dark",
                                children: e.ctaText
                            })]
                        })
                    })
                })
            })
        }
    },
    77687: function(e, n, i) {
        "use strict";
        i.d(n, {
            a: function() {
                return c
            }
        });
        var t = i(85893)
          , c = (i(67294),
        function(e) {
            return (0,
            t.jsxs)("div", {
                className: "text ".concat(e.align),
                children: [e.children, e.ctaURL ? (0,
                t.jsx)("a", {
                    href: e.ctaURL,
                    className: "button primary dark",
                    target: e.target,
                    children: e.ctaCopy
                }) : null]
            })
        }
        )
    },
    38569: function(e, n, i) {
        "use strict";
        i.d(n, {
            l: function() {
                return s
            }
        });
        var t = i(85893)
          , c = (i(67294),
        i(77687))
          , s = function(e) {
            return (0,
            t.jsx)(t.Fragment, {
                children: e.children && (0,
                t.jsx)("div", {
                    className: "container-fluid  ".concat(e.backgroundColour ? "py-5 my-0" : "my-5"),
                    style: {
                        backgroundColor: "#" + e.backgroundColour
                    },
                    children: (0,
                    t.jsx)("div", {
                        className: "container",
                        children: (0,
                        t.jsx)("div", {
                            className: "row",
                            children: (0,
                            t.jsx)("div", {
                                className: "col ".concat(e.align),
                                children: (0,
                                t.jsx)(c.a, {
                                    ctaCopy: "",
                                    ctaURL: "",
                                    target: "",
                                    children: e.children
                                })
                            })
                        })
                    })
                })
            })
        }
    },
    97730: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            __N_SSP: function() {
                return v
            },
            default: function() {
                return f
            }
        });
        var t = i(41799)
          , c = i(85893)
          , s = (i(67294),
        i(13184))
          , a = i(50710)
          , l = i(97147)
          , r = i(32364)
          , o = i(27404)
          , d = i(77687)
          , u = i(38569)
          , h = i(32142)
          , m = i(18880)
          , x = i(16482)
          , g = i(94574)
          , j = i(587)
          , p = i(73983)
          , v = !0;
        function f(e) {
            var n, i, v = e.data.content, f = e.data.allNews, b = [], N = [];
            return v.squareBlocks.map((function(e, n) {
                n <= 3 ? b.push(e) : N.push(e)
            }
            )),
            "Solid Green" === v.tint ? i = "green" : "Solid Pink" === v.tint && (i = "purple"),
            (0,
            c.jsxs)(s.Z, {
                children: [(0,
                c.jsx)(x.$h.PageHead, {
                    siteURL: v.url.split("foresightgroup/").join(""),
                    OGimageURL: (null === (n = v.metaImage) || void 0 === n ? void 0 : n.url) ? v.metaImage.url : "",
                    OGtitle: v.metaTitle ? v.metaTitle : "",
                    OGpageDescription: v.metaDescription ? v.metaDescription : ""
                }), (0,
                c.jsx)(p.Z, {
                    image: v.image.url + "?width=1080",
                    text: v.heroText,
                    cta: v.herocTALink,
                    level: 2,
                    tint: i
                }), (0,
                c.jsx)(u.l, {
                    children: (0,
                    c.jsx)(d.a, {
                        ctaCopy: "",
                        ctaURL: "",
                        target: "",
                        children: x.$h.markMedownRich(v.bodyCopy)
                    })
                }), v.iconBlocks ? (0,
                c.jsx)(j.v, {
                    heading: "",
                    copy: "",
                    classes: "bg-grey",
                    children: v.iconBlocks.map((function(e, n) {
                        return (0,
                        c.jsx)(g.j, {
                            columnSize: 4,
                            heading: e.numberOfUnits,
                            copy: x.$h.markMedownRich(e.description),
                            faIcon: e.fontAwesomeIconString,
                            iconColour: e.iconColour,
                            longCopy: e.longerDescription
                        })
                    }
                    ))
                }) : null, (0,
                c.jsx)(u.l, {
                    children: (0,
                    c.jsxs)(d.a, {
                        ctaCopy: "",
                        ctaURL: "",
                        target: "",
                        children: [(0,
                        c.jsx)("h2", {
                            className: "text-center",
                            children: v.sqBlockTitle
                        }), x.$h.markMedownRich(v.mainText)]
                    })
                }), (0,
                c.jsx)("div", {
                    className: "container-fluid squareBlocks pt-5 pb-5",
                    children: (0,
                    c.jsx)("div", {
                        className: "container",
                        children: (0,
                        c.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            c.jsx)(m.Z, {
                                data: b
                            }), (0,
                            c.jsx)(m.Z, {
                                data: N
                            })]
                        })
                    })
                }), (0,
                c.jsx)(l.a, {
                    slidesToShowDesktop: 1,
                    slidesToShowTablet: 1,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: v.carousel.map((function(e, n) {
                        var i, t, s, a, l, r;
                        return (0,
                        c.jsx)(h.g, {
                            author: null === (i = e.author) || void 0 === i ? void 0 : i.name,
                            title: null === (t = e.author) || void 0 === t ? void 0 : t.title,
                            image: null === (s = e.image) || void 0 === s ? void 0 : s.url,
                            url: null === (a = e.cTALink) || void 0 === a ? void 0 : a.url,
                            cta: null === (l = e.cTALink) || void 0 === l ? void 0 : l.name,
                            target: null === (r = e.cTALink) || void 0 === r ? void 0 : r.target,
                            text: e.text,
                            showGradient: !0
                        }, n)
                    }
                    ))
                }), (0,
                c.jsx)(o.s, (0,
                t.Z)({}, [v.cTAComponents])), (0,
                c.jsx)(l.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "Latest News & Insights",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: f.items.map((function(e, n) {
                        var i = e.datePublished.split("T")[0];
                        return i = new Date(i),
                        (0,
                        c.jsx)(r.n, {
                            backgroundImage: e.image && e.image.url,
                            category: e.category,
                            time: e.duration,
                            date: i.toLocaleDateString("en-UK"),
                            heading: e.title,
                            description: e.description,
                            url: e.url.split("all-news/").join(""),
                            ctaText: e.cTALabel,
                            responsiveClasses: ""
                        }, n)
                    }
                    ))
                }), (0,
                c.jsx)(a.Z, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 9407, 2004, 3184, 3983, 833, 9774, 2888, 179], (function() {
        return n = 91845,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
