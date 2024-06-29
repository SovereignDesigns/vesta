(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5405], {
    48312: function(e, n, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
            return i(5075)
        }
        ])
    },
    28094: function(e, n, i) {
        "use strict";
        i.d(n, {
            C: function() {
                return o
            }
        });
        var t = i(85893)
          , a = (i(67294),
        i(48334))
          , s = i(77687)
          , r = i(16482)
          , c = i(25675)
          , l = i.n(c)
          , o = function(e) {
            return (0,
            t.jsxs)("div", {
                className: "videoImageCopyComponent",
                children: [(0,
                t.jsx)("div", {
                    className: "videoImageCon",
                    children: e.video ? (0,
                    t.jsx)(a.n, {
                        poster: e.poster,
                        source: e.video
                    }) : e.image ? (0,
                    t.jsx)(l(), {
                        src: e.image + "?width=800",
                        alt: "",
                        quality: 100,
                        objectFit: "cover",
                        layout: "fill",
                        placeholder: "blur",
                        blurDataURL: e.image + "?width=10"
                    }) : null
                }), (0,
                t.jsxs)("div", {
                    className: "copyCon",
                    children: [e.showGradient && (0,
                    t.jsx)("div", {
                        className: "gradient"
                    }), (0,
                    t.jsx)("h2", {
                        children: e.heading
                    }), (0,
                    t.jsx)(s.a, {
                        ctaCopy: e.cta,
                        ctaURL: e.url,
                        target: e.target,
                        children: e.children && /<[a-z][\s\S]*>/i.test(e.children) ? r.$h.markMedownRich(e.children) : (0,
                        t.jsx)("p", {
                            children: e.children
                        })
                    })]
                })]
            })
        }
    },
    50710: function(e, n, i) {
        "use strict";
        var t = i(85893)
          , a = (i(67294),
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
                            t.jsx)(a.a, {
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
    32364: function(e, n, i) {
        "use strict";
        i.d(n, {
            n: function() {
                return o
            }
        });
        var t = i(85893)
          , a = (i(67294),
        i(67814))
          , s = i(41664)
          , r = i.n(s)
          , c = i(25675)
          , l = i.n(c)
          , o = function(e) {
            var n, i = e.time.trim().split(/\s+/).length, s = Math.ceil(i / 210);
            return (0,
            t.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                t.jsx)(r(), {
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
                                t.jsx)(l(), {
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
                                    t.jsx)(a.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", s <= 1 ? s + " min" : s + " mins", " "]
                                }), (0,
                                t.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    t.jsx)(a.G, {
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
                return a
            }
        });
        var t = i(85893)
          , a = (i(67294),
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
          , a = (i(67294),
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
                                t.jsx)(a.a, {
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
    5075: function(e, n, i) {
        "use strict";
        i.r(n),
        i.d(n, {
            __N_SSP: function() {
                return j
            },
            default: function() {
                return p
            }
        });
        var t = i(41799)
          , a = i(85893)
          , s = (i(67294),
        i(13184))
          , r = i(50710)
          , c = i(97147)
          , l = i(28094)
          , o = i(32142)
          , d = i(32364)
          , u = i(27404)
          , h = i(16482)
          , m = i(73983)
          , g = i(38569)
          , x = i(77687)
          , j = !0;
        function p(e) {
            var n, i = e.data.content, j = e.data.allNews;
            return (0,
            a.jsxs)(s.Z, {
                id: "home",
                className: "",
                children: [(0,
                a.jsx)(h.$h.PageHead, {
                    siteURL: "",
                    OGimageURL: null === (n = i.metaImage) || void 0 === n ? void 0 : n.url,
                    OGtitle: i.metaTitle,
                    OGpageDescription: i.metaDescription
                }), (0,
                a.jsx)(m.Z, {
                    image: i.image.url + "?width=1080",
                    text: i.heroText,
                    cta: i.heroCTALink,
                    level: 0
                }), (0,
                a.jsx)(g.l, {
                    backgroundColour: i.backgroundColour,
                    children: (0,
                    a.jsx)(x.a, {
                        align: "Center" === i.align && "d-flex text-center flex-column align-items-center",
                        ctaURL: i.cTALink[0] && i.cTALink[0].url,
                        ctaCopy: i.cTALink[0] && i.cTALink[0].name,
                        target: i.cTALink[0] && i.cTALink[0].target,
                        children: h.$h.markMedownRich(i.bodyText)
                    })
                }), (0,
                a.jsx)(u.s, (0,
                t.Z)({}, [i.cTAComponents])), (0,
                a.jsx)(c.a, {
                    slidesToShowDesktop: 1,
                    slidesToShowTablet: 1,
                    slidesToShowMobile: 1,
                    showDotsDesktop: !0,
                    infinite: !0,
                    classes: "",
                    sectionTitle: "",
                    buttonStyle: "white",
                    children: i.carousel.map((function(e, n) {
                        return e.author ? (0,
                        a.jsx)(o.g, {
                            heading: "",
                            copy: e.text,
                            author: e.author.name,
                            title: "",
                            image: e.image.url,
                            url: e.cTALink && e.cTALink.url,
                            cta: e.cTALink && e.cTALink.name,
                            target: e.cTALink && e.cTALink.target,
                            video: e.video,
                            showGradient: !0
                        }, n) : (0,
                        a.jsx)(l.C, {
                            heading: "",
                            image: e.image.url,
                            url: e.cTALink && e.cTALink.url,
                            cta: e.cTALink && e.cTALink.name,
                            target: e.cTALink && e.cTALink.target,
                            video: e.video,
                            showGradient: !0,
                            children: e.text
                        }, n)
                    }
                    ))
                }), (0,
                a.jsx)(c.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "Latest News & Insights",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: j.items.map((function(e, n) {
                        var i = e.datePublished.split("T")[0];
                        return i = new Date(i),
                        (0,
                        a.jsx)(d.n, {
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
                a.jsx)(r.Z, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 9407, 2004, 3184, 3983, 833, 9774, 2888, 179], (function() {
        return n = 48312,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
