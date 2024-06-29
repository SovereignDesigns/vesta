(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6202], {
    13552: function(e, n, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us/sustainability", function() {
            return i(29026)
        }
        ])
    },
    50710: function(e, n, i) {
        "use strict";
        var c = i(85893)
          , s = (i(67294),
        i(4654));
        n.Z = function(e) {
            return (0,
            c.jsx)("div", {
                className: "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
                children: (0,
                c.jsx)("div", {
                    className: "container pt-3 pb-3",
                    children: (0,
                    c.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [(0,
                        c.jsxs)("div", {
                            className: "col",
                            children: [(0,
                            c.jsx)("h2", {
                                children: "Find out how you can be part of our journey"
                            }), (0,
                            c.jsx)("p", {
                                children: "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies."
                            })]
                        }), (0,
                        c.jsx)("div", {
                            className: "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                            children: (0,
                            c.jsx)(s.a, {
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
        var c = i(85893)
          , s = i(25675)
          , t = i.n(s)
          , a = i(67294)
          , l = i(16482);
        n.Z = function(e) {
            e.data;
            var n = (0,
            a.useState)(!1)
              , i = n[0]
              , s = n[1]
              , r = e.data.map((function(e, n) {
                return (0,
                c.jsxs)("div", {
                    className: "block ".concat(e.image ? "image-bg" : "bg-deep-purple", " ").concat(i === n ? "active" : ""),
                    children: [e.image ? (0,
                    c.jsx)("div", {
                        className: "image-container",
                        children: (0,
                        c.jsx)(t(), {
                            src: e.image.url + "?width=550",
                            layout: "fill",
                            objectFit: "cover",
                            alt: "",
                            blurDataURL: e.image.url + "?width=50",
                            placeholder: "blur"
                        })
                    }) : "", (0,
                    c.jsxs)("div", {
                        className: "block-content",
                        children: [(0,
                        c.jsx)("h3", {
                            children: e.title
                        }), (0,
                        c.jsx)("button", {
                            type: "button",
                            className: "view-toggle button ".concat(i === n ? "open" : ""),
                            onClick: function() {
                                return i === (e = n) && (e = !0),
                                void s(e);
                                var e
                            },
                            children: i === n ? "-" : "+"
                        })]
                    }), (0,
                    c.jsxs)("div", {
                        className: "block-content ".concat(i === n ? "shown" : "hidden"),
                        children: [l.$h.markMedownRich(e.description), e.cTA ? (0,
                        c.jsx)("a", {
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
            c.jsx)("div", {
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
        var c = i(85893)
          , s = (i(67294),
        i(16482))
          , t = i(67814)
          , a = function(e) {
            return (0,
            c.jsx)("div", {
                className: "blocks col-sm-12 col-md-".concat(e.columnSize),
                children: (0,
                c.jsx)("div", {
                    className: "item",
                    children: (0,
                    c.jsxs)("div", {
                        className: "heading d-flex flex-sm-column flex-md-column flex-xs-column",
                        children: [e.icon ? (0,
                        c.jsx)("img", {
                            src: e.icon,
                            alt: ""
                        }) : null, e.faIcon ? (0,
                        c.jsx)(t.G, {
                            color: "#".concat(e.iconColour),
                            icon: ["fal", "".concat(e.faIcon)]
                        }) : null, (0,
                        c.jsxs)("div", {
                            className: "copy-holder",
                            children: [(0,
                            c.jsx)("h3", {
                                className: "",
                                children: e.heading
                            }), (0,
                            c.jsx)("p", {
                                className: "copy mt-2",
                                children: e.copy
                            }), e.longCopy ? (0,
                            c.jsx)("div", {
                                className: "copy mt-2",
                                children: s.$h.markMedownRich(e.longCopy)
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
        var c = i(85893)
          , s = (i(67294),
        i(16482))
          , t = i(4654)
          , a = function(e) {
            var n, i, a;
            return (0,
            c.jsx)("div", {
                className: "container-fluid colinfo pt-5 pb-5 icon-text-holder ".concat(e.classes),
                children: (0,
                c.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    c.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        c.jsx)("div", {
                            className: "col col-lg-8",
                            children: s.$h.markMedownRich(e.copy)
                        })
                    }), e.children && (0,
                    c.jsx)("div", {
                        className: "mt-5 row justify-content-center align-items-baseline",
                        children: e.children
                    }), e.cta && (0,
                    c.jsx)("div", {
                        className: "row mt-5",
                        children: (0,
                        c.jsx)("div", {
                            className: "col",
                            children: (0,
                            c.jsx)(t.a, {
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
        var c = i(85893)
          , s = (i(67294),
        i(67814))
          , t = i(41664)
          , a = i.n(t)
          , l = i(25675)
          , r = i.n(l)
          , o = function(e) {
            var n, i = e.time.trim().split(/\s+/).length, t = Math.ceil(i / 210);
            return (0,
            c.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                c.jsx)(a(), {
                    href: "/news" + e.url,
                    children: (0,
                    c.jsx)("a", {
                        children: (0,
                        c.jsxs)("div", {
                            className: "news-item",
                            children: [(0,
                            c.jsx)("div", {
                                className: "image",
                                children: null !== e.backgroundImage ? (0,
                                c.jsx)(r(), {
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
                                c.jsx)("p", {
                                    className: "category me-2",
                                    children: e
                                }, n)
                            }
                            )), (0,
                            c.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                c.jsxs)("p", {
                                    className: "time",
                                    children: [(0,
                                    c.jsx)(s.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", t <= 1 ? t + " min" : t + " mins", " "]
                                }), (0,
                                c.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    c.jsx)(s.G, {
                                        icon: ["fal", "calendar-times"]
                                    }), " ", e.date]
                                })]
                            }), (0,
                            c.jsx)("h3", {
                                className: "heading",
                                children: e.heading
                            }), e.description && (0,
                            c.jsx)("p", {
                                className: "description",
                                children: e.description
                            }), (0,
                            c.jsx)("button", {
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
                return s
            }
        });
        var c = i(85893)
          , s = (i(67294),
        function(e) {
            return (0,
            c.jsxs)("div", {
                className: "text ".concat(e.align),
                children: [e.children, e.ctaURL ? (0,
                c.jsx)("a", {
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
                return t
            }
        });
        var c = i(85893)
          , s = (i(67294),
        i(77687))
          , t = function(e) {
            return (0,
            c.jsx)(c.Fragment, {
                children: e.children && (0,
                c.jsx)("div", {
                    className: "container-fluid  ".concat(e.backgroundColour ? "py-5 my-0" : "my-5"),
                    style: {
                        backgroundColor: "#" + e.backgroundColour
                    },
                    children: (0,
                    c.jsx)("div", {
                        className: "container",
                        children: (0,
                        c.jsx)("div", {
                            className: "row",
                            children: (0,
                            c.jsx)("div", {
                                className: "col ".concat(e.align),
                                children: (0,
                                c.jsx)(s.a, {
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
    29026: function(e, n, i) {
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
        var c = i(41799)
          , s = i(85893)
          , t = (i(67294),
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
          , j = i(94574)
          , g = i(587)
          , p = i(73983)
          , v = !0;
        function f(e) {
            var n, i, v, f = e.data.content, N = e.data.allNews, b = [], k = [];
            return null === (n = f.squareBlocks) || void 0 === n || n.map((function(e, n) {
                n <= 3 ? b.push(e) : k.push(e)
            }
            )),
            "Solid Green" === f.tint ? v = "green" : "Solid Pink" === f.tint && (v = "purple"),
            (0,
            s.jsxs)(t.Z, {
                children: [(0,
                s.jsx)(x.$h.PageHead, {
                    siteURL: f.url.split("foresightgroup/").join(""),
                    OGimageURL: (null === (i = f.metaImage) || void 0 === i ? void 0 : i.url) ? f.metaImage.url : "",
                    OGtitle: f.metaTitle ? f.metaTitle : "",
                    OGpageDescription: f.metaDescription ? f.metaDescription : ""
                }), (0,
                s.jsx)(p.Z, {
                    image: f.image.url + "?width=1080",
                    text: f.heroText,
                    cta: f.herocTALink,
                    level: 2,
                    tint: v
                }), (0,
                s.jsx)(u.l, {
                    children: (0,
                    s.jsx)(d.a, {
                        ctaCopy: "",
                        ctaURL: "",
                        target: "",
                        children: x.$h.markMedownRich(f.bodyCopy)
                    })
                }), f.iconBlocks ? (0,
                s.jsx)(g.v, {
                    heading: "",
                    copy: "",
                    classes: "".concat("Green Gradient" === f.backgroundColour ? "lighter-green" : "Purple Gradient" === f.backgroundColour ? "pink-gradient-bg" : "bg-white"),
                    children: f.iconBlocks.map((function(e, n) {
                        return (0,
                        s.jsx)(j.j, {
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
                s.jsx)(u.l, {
                    children: (0,
                    s.jsxs)(d.a, {
                        ctaCopy: "",
                        ctaURL: "",
                        target: "",
                        children: [(0,
                        s.jsx)("h2", {
                            className: "text-center",
                            children: f.sqBlockTitle
                        }), x.$h.markMedownRich(f.mainText)]
                    })
                }), (0,
                s.jsx)("div", {
                    className: "container-fluid squareBlocks pt-5 pb-5",
                    children: (0,
                    s.jsx)("div", {
                        className: "container",
                        children: (0,
                        s.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            s.jsx)(m.Z, {
                                data: b
                            }), (0,
                            s.jsx)(m.Z, {
                                data: k
                            })]
                        })
                    })
                }), (0,
                s.jsx)(l.a, {
                    slidesToShowDesktop: 1,
                    slidesToShowTablet: 1,
                    slidesToShowMobile: 1,
                    backgroundColour: "#e5ebee",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: f.carousel.map((function(e, n) {
                        var i, c, t;
                        return (0,
                        s.jsx)(h.g, {
                            text: e.text,
                            author: null === (i = e.author) || void 0 === i ? void 0 : i.authorname,
                            title: null === (c = e.author) || void 0 === c ? void 0 : c.title,
                            image: null === (t = e.image) || void 0 === t ? void 0 : t.url,
                            url: e.cTALink && e.cTALink.url,
                            cta: e.cTALink && e.cTALink.name,
                            target: e.cTALink && e.cTALink.target,
                            showGradient: !0
                        }, n)
                    }
                    ))
                }), f.rNSDocuments ? (0,
                s.jsx)("div", {
                    className: "container-fluid mb-5",
                    children: (0,
                    s.jsxs)("div", {
                        className: "container",
                        children: [f.documentTitle ? (0,
                        s.jsx)("div", {
                            className: "row",
                            children: (0,
                            s.jsx)("div", {
                                className: "col",
                                children: (0,
                                s.jsx)("h2", {
                                    className: "text-center",
                                    children: f.documentTitle
                                })
                            })
                        }) : null, (0,
                        s.jsx)("div", {
                            className: "row",
                            children: (0,
                            s.jsx)("div", {
                                className: "col",
                                children: (0,
                                s.jsxs)("table", {
                                    className: "table table-striped",
                                    children: [(0,
                                    s.jsx)("thead", {
                                        className: "d-none"
                                    }), (0,
                                    s.jsx)("tbody", {
                                        children: f.rNSDocuments.map((function(e, n) {
                                            return (0,
                                            s.jsxs)("tr", {
                                                children: [(0,
                                                s.jsx)("th", {
                                                    scope: "col",
                                                    children: e.name
                                                }), (0,
                                                s.jsx)("td", {
                                                    children: (0,
                                                    s.jsx)("a", {
                                                        href: e.url,
                                                        className: "doc-download",
                                                        children: "View document"
                                                    })
                                                })]
                                            })
                                        }
                                        ))
                                    })]
                                })
                            })
                        })]
                    })
                }) : null, (0,
                s.jsx)(o.s, (0,
                c.Z)({}, [f.cTAComponents])), (0,
                s.jsx)(l.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "Latest News & Insights",
                    showDotsDesktop: !0,
                    children: N.items.map((function(e, n) {
                        var i = e.datePublished.split("T")[0];
                        return i = new Date(i),
                        (0,
                        s.jsx)(r.n, {
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
                s.jsx)(a.Z, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 9407, 2004, 3184, 3983, 833, 9774, 2888, 179], (function() {
        return n = 13552,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
