"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[6348], {
    28094: function(e, n, t) {
        t.d(n, {
            C: function() {
                return o
            }
        });
        var s = t(85893)
          , a = (t(67294),
        t(48334))
          , c = t(77687)
          , i = t(16482)
          , r = t(25675)
          , l = t.n(r)
          , o = function(e) {
            return (0,
            s.jsxs)("div", {
                className: "videoImageCopyComponent",
                children: [(0,
                s.jsx)("div", {
                    className: "videoImageCon",
                    children: e.video ? (0,
                    s.jsx)(a.n, {
                        poster: e.poster,
                        source: e.video
                    }) : e.image ? (0,
                    s.jsx)(l(), {
                        src: e.image + "?width=800",
                        alt: "",
                        quality: 100,
                        objectFit: "cover",
                        layout: "fill",
                        placeholder: "blur",
                        blurDataURL: e.image + "?width=10"
                    }) : null
                }), (0,
                s.jsxs)("div", {
                    className: "copyCon",
                    children: [e.showGradient && (0,
                    s.jsx)("div", {
                        className: "gradient"
                    }), (0,
                    s.jsx)("h2", {
                        children: e.heading
                    }), (0,
                    s.jsx)(c.a, {
                        ctaCopy: e.cta,
                        ctaURL: e.url,
                        target: e.target,
                        children: e.children && /<[a-z][\s\S]*>/i.test(e.children) ? i.$h.markMedownRich(e.children) : (0,
                        s.jsx)("p", {
                            children: e.children
                        })
                    })]
                })]
            })
        }
    },
    50710: function(e, n, t) {
        var s = t(85893)
          , a = (t(67294),
        t(4654));
        n.Z = function(e) {
            return (0,
            s.jsx)("div", {
                className: "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
                children: (0,
                s.jsx)("div", {
                    className: "container pt-3 pb-3",
                    children: (0,
                    s.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "col",
                            children: [(0,
                            s.jsx)("h2", {
                                children: "Find out how you can be part of our journey"
                            }), (0,
                            s.jsx)("p", {
                                children: "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies."
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                            children: (0,
                            s.jsx)(a.a, {
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
        t.d(n, {
            j: function() {
                return i
            }
        });
        var s = t(85893)
          , a = (t(67294),
        t(16482))
          , c = t(67814)
          , i = function(e) {
            return (0,
            s.jsx)("div", {
                className: "blocks col-sm-12 col-md-".concat(e.columnSize),
                children: (0,
                s.jsx)("div", {
                    className: "item",
                    children: (0,
                    s.jsxs)("div", {
                        className: "heading d-flex flex-sm-column flex-md-column flex-xs-column",
                        children: [e.icon ? (0,
                        s.jsx)("img", {
                            src: e.icon,
                            alt: ""
                        }) : null, e.faIcon ? (0,
                        s.jsx)(c.G, {
                            color: "#".concat(e.iconColour),
                            icon: ["fal", "".concat(e.faIcon)]
                        }) : null, (0,
                        s.jsxs)("div", {
                            className: "copy-holder",
                            children: [(0,
                            s.jsx)("h3", {
                                className: "",
                                children: e.heading
                            }), (0,
                            s.jsx)("p", {
                                className: "copy mt-2",
                                children: e.copy
                            }), e.longCopy ? (0,
                            s.jsx)("div", {
                                className: "copy mt-2",
                                children: a.$h.markMedownRich(e.longCopy)
                            }) : null]
                        })]
                    })
                })
            })
        }
    },
    587: function(e, n, t) {
        t.d(n, {
            v: function() {
                return i
            }
        });
        var s = t(85893)
          , a = (t(67294),
        t(16482))
          , c = t(4654)
          , i = function(e) {
            var n, t, i;
            return (0,
            s.jsx)("div", {
                className: "container-fluid colinfo pt-5 pb-5 icon-text-holder ".concat(e.classes),
                children: (0,
                s.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    s.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        s.jsx)("div", {
                            className: "col col-lg-8",
                            children: a.$h.markMedownRich(e.copy)
                        })
                    }), e.children && (0,
                    s.jsx)("div", {
                        className: "mt-5 row justify-content-center align-items-baseline",
                        children: e.children
                    }), e.cta && (0,
                    s.jsx)("div", {
                        className: "row mt-5",
                        children: (0,
                        s.jsx)("div", {
                            className: "col",
                            children: (0,
                            s.jsx)(c.a, {
                                url: null === (n = e.cta) || void 0 === n ? void 0 : n.url,
                                target: null === (t = e.cta) || void 0 === t ? void 0 : t.target,
                                class: "button primary dark mx-auto",
                                children: null === (i = e.cta) || void 0 === i ? void 0 : i.name
                            })
                        })
                    })]
                })
            })
        }
    },
    32364: function(e, n, t) {
        t.d(n, {
            n: function() {
                return o
            }
        });
        var s = t(85893)
          , a = (t(67294),
        t(67814))
          , c = t(41664)
          , i = t.n(c)
          , r = t(25675)
          , l = t.n(r)
          , o = function(e) {
            var n, t = e.time.trim().split(/\s+/).length, c = Math.ceil(t / 210);
            return (0,
            s.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                s.jsx)(i(), {
                    href: "/news" + e.url,
                    children: (0,
                    s.jsx)("a", {
                        children: (0,
                        s.jsxs)("div", {
                            className: "news-item",
                            children: [(0,
                            s.jsx)("div", {
                                className: "image",
                                children: null !== e.backgroundImage ? (0,
                                s.jsx)(l(), {
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
                                s.jsx)("p", {
                                    className: "category me-2",
                                    children: e
                                }, n)
                            }
                            )), (0,
                            s.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                s.jsxs)("p", {
                                    className: "time",
                                    children: [(0,
                                    s.jsx)(a.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", c <= 1 ? c + " min" : c + " mins", " "]
                                }), (0,
                                s.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    s.jsx)(a.G, {
                                        icon: ["fal", "calendar-times"]
                                    }), " ", e.date]
                                })]
                            }), (0,
                            s.jsx)("h3", {
                                className: "heading",
                                children: e.heading
                            }), e.description && (0,
                            s.jsx)("p", {
                                className: "description",
                                children: e.description
                            }), (0,
                            s.jsx)("button", {
                                className: "button primary dark",
                                children: e.ctaText
                            })]
                        })
                    })
                })
            })
        }
    },
    94952: function(e, n, t) {
        var s = t(47568)
          , a = t(10092)
          , c = t(85893)
          , i = t(67294)
          , r = t(16482)
          , l = t(9669).default
          , o = t(30970).TU
          , d = function() {
            var e = (0,
            s.Z)((function(e) {
                return (0,
                a.__generator)(this, (function(n) {
                    switch (n.label) {
                    case 0:
                        return [4, l.get(e)];
                    case 1:
                        return [2, n.sent()]
                    }
                }
                ))
            }
            ));
            return function(n) {
                return e.apply(this, arguments)
            }
        }();
        n.Z = function(e) {
            var n = (0,
            i.useState)(!1)
              , t = n[0]
              , s = n[1]
              , a = (0,
            i.useState)(null)
              , l = a[0]
              , u = a[1]
              , h = (0,
            i.useState)([])
              , m = h[0]
              , x = h[1]
              , j = (0,
            i.useState)(!1)
              , f = (j[0],
            j[1],
            (0,
            c.jsxs)(c.Fragment, {
                children: ["Load More ", (0,
                c.jsx)("span", {
                    className: "btn-icon",
                    children: "+"
                })]
            }))
              , p = (0,
            c.jsxs)(c.Fragment, {
                children: ["Show Less ", (0,
                c.jsx)("span", {
                    className: "btn-icon",
                    children: "-"
                })]
            });
            (0,
            i.useEffect)((function() {
                u(!1 === t ? f : p),
                function(e) {
                    var n;
                    try {
                        n = new URL(e)
                    } catch (t) {
                        return !1
                    }
                    return "http:" === n.protocol || "https:" === n.protocol
                }(e.tableData) && d(e.tableData).then((function(e) {
                    return x(e.data.data)
                }
                )).catch((function(e) {
                    return console.log("error")
                }
                ))
            }
            ), [t]);
            var v = function() {
                var n = e.tableData.replace("<p>/g", "").replace(/<p[^>]*>/g, "").replace(/<\/p>/g, "");
                return (0,
                c.jsx)(c.Fragment, {
                    children: r.$h.markMedownRich(o.parse(n))
                })
            };
            return (0,
            c.jsxs)(c.Fragment, {
                children: [(0,
                c.jsx)("h2", {
                    className: "mb-5 text-center",
                    children: e.tableHeading
                }), m.length > 1 ? (0,
                c.jsxs)(c.Fragment, {
                    children: [(0,
                    c.jsxs)("table", {
                        className: "table table-striped",
                        children: [(0,
                        c.jsx)("thead", {
                            className: "d-none"
                        }), (0,
                        c.jsx)("tbody", {
                            children: m.map((function(e, n) {
                                var s = new Date(e.timestamp);
                                return (0,
                                c.jsxs)("tr", {
                                    className: n > 4 && 0 == t ? " d-none" : "",
                                    children: [(0,
                                    c.jsx)("th", {
                                        scope: "col",
                                        children: e.headline
                                    }), (0,
                                    c.jsx)("td", {
                                        scope: "col",
                                        children: s.toLocaleString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric"
                                        })
                                    }), (0,
                                    c.jsx)("td", {
                                        children: (0,
                                        c.jsx)("a", {
                                            href: e.pdfUrl,
                                            className: "doc-download",
                                            children: "View report"
                                        })
                                    })]
                                }, n)
                            }
                            ))
                        })]
                    }), (0,
                    c.jsx)("div", {
                        className: "show-more-rows justify-content-center d-flex",
                        children: (0,
                        c.jsx)("button", {
                            onClick: function() {
                                s(!t)
                            },
                            className: "button light primary",
                            children: l
                        })
                    })]
                }) : (0,
                c.jsx)(v, {})]
            })
        }
    },
    82481: function(e, n, t) {
        t.d(n, {
            n: function() {
                return r
            }
        });
        var s = t(85893)
          , a = t(11163)
          , c = t(67294)
          , i = t(19723)
          , r = function(e) {
            var n = (0,
            c.useState)(0)
              , t = n[0]
              , r = n[1]
              , l = (0,
            c.useState)(!0)
              , o = l[0]
              , d = l[1]
              , u = (0,
            a.useRouter)()
              , h = (0,
            c.useRef)(null);
            return (0,
            c.useLayoutEffect)((function() {
                var n = function() {
                    var n = 0
                      , t = u.query.tab;
                    t && (-1 !== (n = e.headings.findIndex((function(e) {
                        return e === t
                    }
                    ))) && (r(n),
                    h.current && u.asPath.includes("?tab=") && o && (setTimeout((function() {
                        h.current.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        })
                    }
                    ), 750),
                    d(!1))))
                };
                return n(),
                u.events.on("routeChangeComplete", n),
                function() {
                    u.events.off("routeChangeComplete", n)
                }
            }
            ), [u, e.headings, o]),
            (0,
            s.jsxs)("div", {
                className: "container-fluid react-tabs py-5 ".concat(e.showGradient ? "timeline-gradient" : ""),
                children: [(0,
                s.jsx)("span", {
                    className: "scroll-to-point",
                    ref: h
                }), (0,
                s.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    s.jsx)("div", {
                        className: "row",
                        children: (0,
                        s.jsxs)("div", {
                            className: "col text-center mb-5",
                            children: [(0,
                            s.jsx)("h2", {
                                className: "text-center ".concat("/capital-management" === u.pathname ? "text-subPrimaryBlue1" : "text-white"),
                                children: e.sectionTitle
                            }), e.copy]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "row",
                        children: (0,
                        s.jsx)("div", {
                            className: "col ".concat(e.showGradient ? "text-white" : ""),
                            children: (0,
                            s.jsxs)(i.mQ, {
                                selectedIndex: t,
                                onSelect: function(n) {
                                    return function(n) {
                                        var t = e.headings[n]
                                          , s = "".concat(u.asPath.split("?")[0], "?tab=").concat(t);
                                        u.push(s, s, {
                                            shallow: !0
                                        })
                                    }(n)
                                },
                                children: [(0,
                                s.jsx)(i.td, {
                                    children: e.headings.map((function(e, n) {
                                        return (0,
                                        s.jsxs)(i.OK, {
                                            children: [(0,
                                            s.jsx)("span", {
                                                children: e
                                            }), (0,
                                            s.jsxs)("div", {
                                                className: "d-flex tab-white mt-5 justify-content-center align-items-center",
                                                children: [(0,
                                                s.jsx)("div", {
                                                    style: {
                                                        opacity: t === n ? 1 : .4
                                                    },
                                                    className: "leftLine"
                                                }), (0,
                                                s.jsx)("div", {
                                                    style: {
                                                        opacity: t === n ? 1 : .4
                                                    },
                                                    className: "dot"
                                                }), (0,
                                                s.jsx)("div", {
                                                    style: {
                                                        opacity: t === n ? 1 : .4
                                                    },
                                                    className: "rightLine"
                                                })]
                                            })]
                                        }, n)
                                    }
                                    ))
                                }), e.children]
                            })
                        })
                    })]
                })]
            })
        }
    },
    77687: function(e, n, t) {
        t.d(n, {
            a: function() {
                return a
            }
        });
        var s = t(85893)
          , a = (t(67294),
        function(e) {
            return (0,
            s.jsxs)("div", {
                className: "text ".concat(e.align),
                children: [e.children, e.ctaURL ? (0,
                s.jsx)("a", {
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
