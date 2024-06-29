(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2232], {
    83578: function(e, n, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/news/[id]", function() {
            return s(96431)
        }
        ])
    },
    97147: function(e, n, s) {
        "use strict";
        s.d(n, {
            a: function() {
                return o
            }
        });
        var t = s(41799)
          , i = s(69396)
          , a = s(85893)
          , c = s(67294)
          , r = s(46066)
          , l = (s(98322),
        s(98745),
        s(67814))
          , o = function(e) {
            var n = (0,
            c.useRef)(null)
              , s = (0,
            c.useRef)(null);
            (0,
            c.useRef)(null);
            (0,
            c.useEffect)((function() {
                o(),
                d()
            }
            ));
            var o = function() {
                var e, t, i, a = s, c = null === n || void 0 === n || null === (e = n.current) || void 0 === e || null === (t = e.innerSlider) || void 0 === t || null === (i = t.list) || void 0 === i ? void 0 : i.nextSibling;
                c && a.current.appendChild(c)
            }
              , d = function() {
                var e, s, t, i, a = null === (e = n.current) || void 0 === e || null === (s = e.props) || void 0 === s ? void 0 : s.children.length, c = null === (t = n.current) || void 0 === t ? void 0 : t.props.slidesToShow, r = null === (i = n.current) || void 0 === i ? void 0 : i.innerSlider.list.parentElement.previousSibling;
                a == c && (r.style.display = "none")
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
            a.jsx)("div", {
                className: "container carousel py-5 ".concat(e.classes),
                style: {
                    backgroundColor: e.backgroundColour
                },
                children: (0,
                a.jsxs)("div", {
                    className: "container g-lg-0",
                    style: {
                        backgroundColor: e.backgroundColour
                    },
                    children: [(0,
                    a.jsx)("div", {
                        className: "row",
                        children: (0,
                        a.jsx)("div", {
                            className: "col",
                            children: e.isWebinar || e.sectionTitle && (0,
                            a.jsx)("h2", {
                                className: "text-center mb-5",
                                children: e.isWebinar ? "" : e.sectionTitle
                            })
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: " row position-relative",
                        children: [(0,
                        a.jsx)("div", {
                            className: "con ".concat("white" === e.buttonStyle ? "white" : "purple"),
                            children: (0,
                            a.jsxs)("div", {
                                children: [(0,
                                a.jsxs)("div", {
                                    className: "arrows",
                                    children: [(0,
                                    a.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.slickNext()
                                        },
                                        children: (0,
                                        a.jsx)(l.G, {
                                            icon: ["fal", "chevron-right"],
                                            size: "3x"
                                        })
                                    }), (0,
                                    a.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === n || void 0 === n || null === (e = n.current) || void 0 === e ? void 0 : e.slickPrev()
                                        },
                                        children: (0,
                                        a.jsx)(l.G, {
                                            icon: ["fal", "chevron-left"],
                                            size: "3x"
                                        })
                                    })]
                                }), (0,
                                a.jsx)("ul", {
                                    className: "slick-dots new-dots",
                                    ref: s
                                })]
                            })
                        }), (0,
                        a.jsx)(r.Z, (0,
                        i.Z)((0,
                        t.Z)({
                            ref: n
                        }, u), {
                            children: e.children
                        }))]
                    })]
                })
            })
        }
    },
    50710: function(e, n, s) {
        "use strict";
        var t = s(85893)
          , i = (s(67294),
        s(4654));
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
                            t.jsx)(i.a, {
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
    45818: function(e, n, s) {
        "use strict";
        var t = s(47568)
          , i = s(10092)
          , a = s(85893)
          , c = s(7422)
          , r = s.n(c)
          , l = s(11163)
          , o = s(67294)
          , d = s(16482)
          , u = s(62284);
        n.Z = function(e) {
            var n = (0,
            l.useRouter)()
              , s = (0,
            o.useState)("")
              , c = s[0]
              , m = s[1]
              , h = function() {
                var s = (0,
                t.Z)((function(s) {
                    var t, a, c;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return s.preventDefault(),
                            t = r()(s.target, {
                                hash: !0
                            }),
                            [4, fetch("/api/submitForm", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    formId: e.formData._id,
                                    formData: t
                                })
                            })];
                        case 1:
                            return [4, i.sent()];
                        case 2:
                            return 200 !== (a = i.sent()).status ? [3, 5] : (s.target.reset(),
                            e.formData.gotoPageOnSubmit ? [4, d.$h.getURLFromUmbracoId(e.formData.gotoPageOnSubmit)] : [3, 4]);
                        case 3:
                            c = i.sent(),
                            n.push(c),
                            i.label = 4;
                        case 4:
                            return m(e.formData.messageOnSubmit),
                            [3, 6];
                        case 5:
                            m("<span class='red'>" + a + "</span>"),
                            i.label = 6;
                        case 6:
                            return [2]
                        }
                    }
                    ))
                }
                ));
                return function(e) {
                    return s.apply(this, arguments)
                }
            }();
            return (0,
            a.jsx)(a.Fragment, {
                children: e.formData && (0,
                a.jsxs)("form", {
                    className: "form mt-5 ".concat("white" === e.variant ? "white" : ""),
                    onSubmit: h,
                    children: [(0,
                    a.jsxs)("div", {
                        className: "row",
                        children: [e.formData.pages[0].fieldsets.map((function(e) {
                            return e.columns.map((function(e, n) {
                                return (0,
                                a.jsx)("div", {
                                    className: "col-lg-".concat(e.width, " text-white"),
                                    children: e.fields.map((function(e, n) {
                                        return (0,
                                        a.jsx)(u.Z, {
                                            props: e
                                        }, n)
                                    }
                                    ))
                                }, n)
                            }
                            ))
                        }
                        )), (0,
                        a.jsx)("div", {
                            className: "col-12 mt-4",
                            children: (0,
                            a.jsx)("button", {
                                type: "submit",
                                className: "button ".concat("secondary light-text" !== e.variant ? "primary dark" : ""),
                                children: e.formData.submitLabel
                            })
                        })]
                    }), (0,
                    a.jsx)("div", {
                        className: "row mt-4",
                        children: (0,
                        a.jsx)("div", {
                            className: "col-12 col-md-8",
                            children: d.$h.markMedownRich(c)
                        })
                    })]
                })
            })
        }
    },
    587: function(e, n, s) {
        "use strict";
        s.d(n, {
            v: function() {
                return c
            }
        });
        var t = s(85893)
          , i = (s(67294),
        s(16482))
          , a = s(4654)
          , c = function(e) {
            var n, s, c;
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
                            children: i.$h.markMedownRich(e.copy)
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
                            t.jsx)(a.a, {
                                url: null === (n = e.cta) || void 0 === n ? void 0 : n.url,
                                target: null === (s = e.cta) || void 0 === s ? void 0 : s.target,
                                class: "button primary dark mx-auto",
                                children: null === (c = e.cta) || void 0 === c ? void 0 : c.name
                            })
                        })
                    })]
                })
            })
        }
    },
    28456: function(e, n, s) {
        "use strict";
        s.d(n, {
            a: function() {
                return r
            }
        });
        var t = s(85893)
          , i = (s(67294),
        s(16482))
          , a = s(10573)
          , c = s.n(a)
          , r = function(e) {
            return (0,
            t.jsx)("div", {
                className: "blocks col-sm-12 col-md-6 col-lg-3 mt-3 justify-content-center",
                children: (0,
                t.jsxs)("div", {
                    className: "heading d-flex align-items-center flex-column",
                    children: [e.icon ? (0,
                    t.jsx)("img", {
                        className: c().img,
                        src: e.icon,
                        alt: ""
                    }) : null, (0,
                    t.jsx)("div", {
                        className: "copy-holder",
                        children: e.longCopy ? (0,
                        t.jsx)("div", {
                            className: "copy mt-4 text-center",
                            children: i.$h.markMedownRich(e.longCopy)
                        }) : null
                    })]
                })
            })
        }
    },
    79281: function(e, n, s) {
        "use strict";
        s.d(n, {
            V: function() {
                return l
            }
        });
        var t = s(85893)
          , i = s(67294)
          , a = s(4654)
          , c = s(67814)
          , r = s(16482)
          , l = function(e) {
            var n;
            e.date.split("T")[0];
            new Date;
            var s = e.time.trim().split(/\s+/).length
              , l = Math.ceil(s / 210);
            return (0,
            i.useEffect)((function() {}
            ), []),
            n = e.isNew ? "/assets/images/ripple16by9.png" : "/assets/images/news-ripple.png",
            (0,
            t.jsxs)("div", {
                className: "position-relative",
                children: [(0,
                t.jsx)("div", {
                    className: "news-hero container-fluid ".concat(e.isNew ? "news-hero-new" : ""),
                    children: (0,
                    t.jsx)("div", {
                        className: "container",
                        children: (0,
                        t.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            t.jsx)("div", {
                                className: "col col-xl-9 col-xxl-6",
                                children: (0,
                                t.jsxs)("div", {
                                    className: "news-hero-content",
                                    children: [function() {
                                        var n, s = [];
                                        return null === (n = e.category) || void 0 === n || n.map((function(e) {
                                            s.push((0,
                                            t.jsx)("p", {
                                                className: "category",
                                                children: e
                                            }))
                                        }
                                        )),
                                        s
                                    }(), (0,
                                    t.jsxs)("div", {
                                        className: "d-flex",
                                        children: [(0,
                                        t.jsxs)("p", {
                                            className: "time",
                                            children: [(0,
                                            t.jsx)(c.G, {
                                                icon: ["fal", "clock"],
                                                color: "#33268d"
                                            }), " ", l <= 1 ? l + " minute" : l + " minutes", " "]
                                        }), (0,
                                        t.jsxs)("p", {
                                            className: "date",
                                            children: [(0,
                                            t.jsx)(c.G, {
                                                icon: ["fal", "calendar-times"],
                                                color: "#33268d"
                                            }), " ", new Date(e.date).toLocaleDateString("en-UK")]
                                        })]
                                    }), (0,
                                    t.jsx)("h2", {
                                        className: "heading",
                                        children: e.heading
                                    }), (0,
                                    t.jsx)("div", {
                                        className: "description",
                                        children: r.$h.markMedownRich(e.description)
                                    }), e.url.length > 0 ? (0,
                                    t.jsx)(a.a, {
                                        class: "primary dark",
                                        url: e.url,
                                        target: "",
                                        children: e.ctaText
                                    }) : ""]
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "col-xl-6"
                            })]
                        })
                    })
                }), (0,
                t.jsx)("div", {
                    className: "container-fluid position-absolute h-100 g-0 ".concat(e.isNew ? "news-hero-image-side-new" : "news-hero-image-side"),
                    style: {
                        top: 0
                    },
                    children: (0,
                    t.jsxs)("div", {
                        className: "container position-relative h-100",
                        children: [(0,
                        t.jsx)("div", {
                            className: "row",
                            children: (0,
                            t.jsxs)("div", {
                                className: "col",
                                children: [(0,
                                t.jsx)("img", {
                                    className: "news-ripple",
                                    src: n,
                                    alt: ""
                                }), (0,
                                t.jsx)("div", {
                                    className: "news-ripple-mask",
                                    children: (0,
                                    t.jsx)("img", {
                                        src: e.backgroundImage,
                                        className: "",
                                        alt: ""
                                    })
                                })]
                            })
                        }), (0,
                        t.jsx)("div", {
                            className: "row h-100 g-0",
                            children: (0,
                            t.jsx)("div", {
                                className: "col-6 h-100 position-relative ms-auto"
                            })
                        })]
                    })
                })]
            })
        }
    },
    32364: function(e, n, s) {
        "use strict";
        s.d(n, {
            n: function() {
                return o
            }
        });
        var t = s(85893)
          , i = (s(67294),
        s(67814))
          , a = s(41664)
          , c = s.n(a)
          , r = s(25675)
          , l = s.n(r)
          , o = function(e) {
            var n, s = e.time.trim().split(/\s+/).length, a = Math.ceil(s / 210);
            return (0,
            t.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                t.jsx)(c(), {
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
                                    t.jsx)(i.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", a <= 1 ? a + " min" : a + " mins", " "]
                                }), (0,
                                t.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    t.jsx)(i.G, {
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
    75186: function(e, n, s) {
        "use strict";
        var t = s(85893)
          , i = (s(67294),
        s(16482));
        n.Z = function(e) {
            var n;
            return (0,
            t.jsxs)("div", {
                className: "row my-5 justify-content-between ".concat(e.reverse ? "flex-row-reverse" : ""),
                children: [(0,
                t.jsx)("div", {
                    className: "col-sm-12 col-md-5",
                    children: (0,
                    t.jsx)("img", {
                        className: "img-fluid",
                        src: e.image,
                        alt: ""
                    })
                }), (0,
                t.jsxs)("div", {
                    className: "col-sm-12 col-md-5 p-3 p-lg-0",
                    children: [i.$h.markMedownRich(e.children), (0,
                    t.jsx)("div", {
                        className: "d-flex",
                        children: null === (n = e.ctas) || void 0 === n ? void 0 : n.map((function(e, n) {
                            var s;
                            return (0,
                            t.jsx)("a", {
                                href: null === (s = e.url) || void 0 === s ? void 0 : s.replace("/foresightgroup", ""),
                                className: "button primary dark me-3",
                                target: e.target,
                                children: e.name
                            })
                        }
                        ))
                    })]
                })]
            })
        }
    },
    77687: function(e, n, s) {
        "use strict";
        s.d(n, {
            a: function() {
                return i
            }
        });
        var t = s(85893)
          , i = (s(67294),
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
    38569: function(e, n, s) {
        "use strict";
        s.d(n, {
            l: function() {
                return a
            }
        });
        var t = s(85893)
          , i = (s(67294),
        s(77687))
          , a = function(e) {
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
                                t.jsx)(i.a, {
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
    4654: function(e, n, s) {
        "use strict";
        s.d(n, {
            a: function() {
                return c
            }
        });
        var t = s(85893)
          , i = s(41664)
          , a = s.n(i)
          , c = (s(67294),
        function(e) {
            var n;
            return (0,
            t.jsx)(a(), {
                href: "".concat(null === (n = e.url) || void 0 === n ? void 0 : n.toString().split("foresightgroup/").join("")),
                children: (0,
                t.jsx)("a", {
                    className: "button " + e.class,
                    target: e.target,
                    children: e.children
                })
            })
        }
        )
    },
    96431: function(e, n, s) {
        "use strict";
        s.r(n),
        s.d(n, {
            __N_SSP: function() {
                return g
            },
            default: function() {
                return j
            }
        });
        var t = s(85893)
          , i = (s(67294),
        s(13184))
          , a = s(32364)
          , c = s(50710)
          , r = s(97147)
          , l = s(79281)
          , o = s(38569)
          , d = s(11163)
          , u = s(16482)
          , m = s(45818)
          , h = s(587)
          , v = s(28456)
          , x = s(75186)
          , p = s(4654)
          , g = !0;
        function j(e) {
            var n, s, g, j, f = e.data.content, N = e.data.allNews, w = new Date("2024-03-15T00:00:00.05Z");
            (0,
            d.useRouter)();
            return (0,
            t.jsxs)(i.Z, {
                id: "root",
                className: "news-article",
                children: [(0,
                t.jsx)(u.$h.PageHead, {
                    siteURL: f.url.split("foresightgroup/").join(""),
                    OGimageURL: (null === (n = f.metaImage) || void 0 === n ? void 0 : n.url) ? null === (s = f.metaImage) || void 0 === s ? void 0 : s.url : null === (g = f.image) || void 0 === g ? void 0 : g.url,
                    OGtitle: f.title,
                    OGpageDescription: f.subCopy
                }), (0,
                t.jsx)(l.V, {
                    backgroundImage: f.image && f.image.url,
                    category: f.category,
                    time: f.bodyCopy,
                    date: f.datePublished,
                    heading: f.title,
                    description: f.subCopy,
                    url: "",
                    ctaText: "",
                    isNew: new Date(f.updateDate) > w
                }), (0,
                t.jsx)(o.l, {
                    children: (0,
                    t.jsx)("div", {
                        className: "bodyCopy row",
                        children: u.$h.markMedownRich(f.bodyCopy)
                    })
                }), f.blocks && (0,
                t.jsx)(t.Fragment, {
                    children: null === (j = f.blocks) || void 0 === j ? void 0 : j.map((function(e, n) {
                        if ("TextBlock" === e.content.__typename) {
                            var s = /text-align:\s*left;/.test(e.content.copy);
                            return (0,
                            t.jsx)("div", {
                                className: "container-fluid py-5 textBlock",
                                style: {
                                    backgroundColor: "#" + e.content.backgroundColour
                                },
                                children: (0,
                                t.jsx)("div", {
                                    className: "container",
                                    children: (0,
                                    t.jsx)("div", {
                                        className: "row",
                                        children: (0,
                                        t.jsxs)("div", {
                                            className: "col-12",
                                            children: [u.$h.markMedownRich(e.content.copy), e.content.textBlockCTA && (0,
                                            t.jsx)("div", {
                                                className: s ? "" : "d-flex justify-content-center",
                                                children: e.content.textBlockCTA.map((function(e, n) {
                                                    return (0,
                                                    t.jsx)(p.a, {
                                                        class: "".concat(0 !== n ? "secondary inline dark-text" : "primary inline dark", " ").concat(0 !== n ? "ms-0 ms-lg-3" : "", " "),
                                                        url: e.url,
                                                        target: e.target,
                                                        children: e.name
                                                    }, n)
                                                }
                                                ))
                                            })]
                                        })
                                    })
                                })
                            }, n)
                        }
                        return "ImageTextBlock" === e.content.__typename ? (0,
                        t.jsx)("div", {
                            style: {
                                backgroundColor: e.content.backgroundColour ? "#".concat(e.content.backgroundColour) : "transparent"
                            },
                            children: (0,
                            t.jsx)("div", {
                                className: "container my-5",
                                children: (0,
                                t.jsx)("div", {
                                    className: "row",
                                    children: (0,
                                    t.jsx)("div", {
                                        className: "col",
                                        children: (0,
                                        t.jsx)(x.Z, {
                                            reverse: "Left" === e.content.textAlign,
                                            image: e.content.image.cropUrl,
                                            ctas: e.content.imageTextBlockCTA,
                                            children: e.content.copy
                                        })
                                    })
                                })
                            })
                        }) : "FormPicker" === e.content.__typename ? (0,
                        t.jsx)(t.Fragment, {
                            children: e.content.formPicker && (0,
                            t.jsxs)("div", {
                                className: "container-fluid py-5",
                                children: [(0,
                                t.jsx)("div", {
                                    className: "form-top",
                                    id: "form"
                                }), (0,
                                t.jsx)("div", {
                                    className: "container",
                                    children: (0,
                                    t.jsxs)("div", {
                                        className: "row",
                                        children: [(0,
                                        t.jsx)("div", {
                                            className: "col-12 text-main",
                                            children: u.$h.markMedownRich(e.content.copy)
                                        }), (0,
                                        t.jsx)(m.Z, {
                                            formData: e.content.formPicker,
                                            variant: "white"
                                        })]
                                    })
                                })]
                            }, n)
                        }) : "IconStatBlock" === e.content.__typename ? (0,
                        t.jsx)(h.v, {
                            copy: e.content.introCopy,
                            cta: e.content.iconStatBlockCTA,
                            children: e.content.iconsStats.map((function(e, n) {
                                var s;
                                return (0,
                                t.jsx)(v.a, {
                                    icon: null === (s = e.content.imageIcon) || void 0 === s ? void 0 : s.url,
                                    longCopy: e.content.copy
                                })
                            }
                            ))
                        }, n) : void 0
                    }
                    ))
                }), (0,
                t.jsx)(r.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "Latest News & Insights",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: N.items.map((function(e, n) {
                        var s = e.datePublished.split("T")[0];
                        return s = new Date(s),
                        (0,
                        t.jsx)(a.n, {
                            backgroundImage: e.metaImage ? e.metaImage.url : e.image.url,
                            category: e.category,
                            time: e.duration,
                            date: s.toLocaleDateString("en-UK"),
                            heading: e.title,
                            description: e.description,
                            url: e.url.split("all-news/").join(""),
                            ctaText: e.cTALabel,
                            responsiveClasses: ""
                        }, n)
                    }
                    ))
                }), (0,
                t.jsx)(c.Z, {})]
            })
        }
    },
    10573: function(e) {
        e.exports = {
            img: "IconText_img__neiEE"
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 3184, 9774, 2888, 179], (function() {
        return n = 83578,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);

