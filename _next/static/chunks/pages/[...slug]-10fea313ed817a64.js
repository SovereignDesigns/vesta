(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[330], {
    50881: function(e, n, t) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/[...slug]", function() {
            return t(31676)
        }
        ])
    },
    28094: function(e, n, t) {
        "use strict";
        t.d(n, {
            C: function() {
                return s
            }
        });
        var o = t(85893)
          , i = (t(67294),
        t(48334))
          , a = t(77687)
          , l = t(16482)
          , c = t(25675)
          , r = t.n(c)
          , s = function(e) {
            return (0,
            o.jsxs)("div", {
                className: "videoImageCopyComponent",
                children: [(0,
                o.jsx)("div", {
                    className: "videoImageCon",
                    children: e.video ? (0,
                    o.jsx)(i.n, {
                        poster: e.poster,
                        source: e.video
                    }) : e.image ? (0,
                    o.jsx)(r(), {
                        src: e.image + "?width=800",
                        alt: "",
                        quality: 100,
                        objectFit: "cover",
                        layout: "fill",
                        placeholder: "blur",
                        blurDataURL: e.image + "?width=10"
                    }) : null
                }), (0,
                o.jsxs)("div", {
                    className: "copyCon",
                    children: [e.showGradient && (0,
                    o.jsx)("div", {
                        className: "gradient"
                    }), (0,
                    o.jsx)("h2", {
                        children: e.heading
                    }), (0,
                    o.jsx)(a.a, {
                        ctaCopy: e.cta,
                        ctaURL: e.url,
                        target: e.target,
                        children: e.children && /<[a-z][\s\S]*>/i.test(e.children) ? l.$h.markMedownRich(e.children) : (0,
                        o.jsx)("p", {
                            children: e.children
                        })
                    })]
                })]
            })
        }
    },
    45818: function(e, n, t) {
        "use strict";
        var o = t(47568)
          , i = t(10092)
          , a = t(85893)
          , l = t(7422)
          , c = t.n(l)
          , r = t(11163)
          , s = t(67294)
          , d = t(16482)
          , u = t(62284);
        n.Z = function(e) {
            var n = (0,
            r.useRouter)()
              , t = (0,
            s.useState)("")
              , l = t[0]
              , m = t[1]
              , h = function() {
                var t = (0,
                o.Z)((function(t) {
                    var o, a, l;
                    return (0,
                    i.__generator)(this, (function(i) {
                        switch (i.label) {
                        case 0:
                            return t.preventDefault(),
                            o = c()(t.target, {
                                hash: !0
                            }),
                            [4, fetch("/api/submitForm", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    formId: e.formData._id,
                                    formData: o
                                })
                            })];
                        case 1:
                            return [4, i.sent()];
                        case 2:
                            return 200 !== (a = i.sent()).status ? [3, 5] : (t.target.reset(),
                            e.formData.gotoPageOnSubmit ? [4, d.$h.getURLFromUmbracoId(e.formData.gotoPageOnSubmit)] : [3, 4]);
                        case 3:
                            l = i.sent(),
                            n.push(l),
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
                    return t.apply(this, arguments)
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
                            children: d.$h.markMedownRich(l)
                        })
                    })]
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
        var o = t(85893)
          , i = (t(67294),
        t(16482))
          , a = t(4654)
          , l = function(e) {
            var n, t, l;
            return (0,
            o.jsx)("div", {
                className: "container-fluid colinfo pt-5 pb-5 icon-text-holder ".concat(e.classes),
                children: (0,
                o.jsxs)("div", {
                    className: "container",
                    children: [(0,
                    o.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        o.jsx)("div", {
                            className: "col col-lg-8",
                            children: i.$h.markMedownRich(e.copy)
                        })
                    }), e.children && (0,
                    o.jsx)("div", {
                        className: "mt-5 row justify-content-center align-items-baseline",
                        children: e.children
                    }), e.cta && (0,
                    o.jsx)("div", {
                        className: "row mt-5",
                        children: (0,
                        o.jsx)("div", {
                            className: "col",
                            children: (0,
                            o.jsx)(a.a, {
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
    75778: function(e, n, t) {
        "use strict";
        t.d(n, {
            g: function() {
                return d
            }
        });
        var o = t(47568)
          , i = t(10092)
          , a = t(85893)
          , l = t(67294)
          , c = t(16482)
          , r = t(97147)
          , s = t(32364)
          , d = function(e) {
            var n, t, d = (0,
            l.useState)(), u = d[0], m = d[1], h = e.data.newsTags.map((function(e) {
                return {
                    category_some: e
                }
            }
            )), v = JSON.stringify(h).replace(/"category_some"/g, "category_some"), x = 'query {\n    allNews(\n      first: 5,\n      orderBy: createDate_DESC,\n      where: {\n        websites_some: "Group",\n        OR: \n          '.concat(v, "\n      }\n    ) {\n      items {\n        name\n        image {\n          url\n        }\n        title\n        duration\n        datePublished\n        category\n        url\n        cTALabel\n      }\n    }\n  }");
            return (0,
            l.useEffect)((function() {
                function e() {
                    return (e = (0,
                    o.Z)((function() {
                        var e;
                        return (0,
                        i.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, c.$h.getUmbracoContentQLByID(x)];
                            case 1:
                                return e = n.sent(),
                                m(e),
                                [2]
                            }
                        }
                        ))
                    }
                    ))).apply(this, arguments)
                }
                !function() {
                    e.apply(this, arguments)
                }()
            }
            ), []),
            (0,
            a.jsxs)(a.Fragment, {
                children: [(null === (n = null === u || void 0 === u ? void 0 : u.allNews.items) || void 0 === n ? void 0 : n.length) > 0 && (0,
                a.jsx)("div", {
                    className: "container-fluid pt-5",
                    children: (0,
                    a.jsx)("div", {
                        className: "container",
                        children: (0,
                        a.jsx)("div", {
                            className: "row",
                            children: (0,
                            a.jsx)("div", {
                                className: "col text-center",
                                children: c.$h.markMedownRich(e.data.introCopy)
                            })
                        })
                    })
                }), (null === (t = null === u || void 0 === u ? void 0 : u.allNews.items) || void 0 === t ? void 0 : t.length) > 0 && (0,
                a.jsx)(r.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    showDotsDesktop: !0,
                    children: null === u || void 0 === u ? void 0 : u.allNews.items.map((function(e, n) {
                        var t = e.datePublished.split("T")[0];
                        return t = new Date(t),
                        (0,
                        a.jsx)(s.n, {
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
                })]
            })
        }
    },
    28456: function(e, n, t) {
        "use strict";
        t.d(n, {
            a: function() {
                return c
            }
        });
        var o = t(85893)
          , i = (t(67294),
        t(16482))
          , a = t(10573)
          , l = t.n(a)
          , c = function(e) {
            return (0,
            o.jsx)("div", {
                className: "blocks col-sm-12 col-md-6 col-lg-3 mt-3 justify-content-center",
                children: (0,
                o.jsxs)("div", {
                    className: "heading d-flex align-items-center flex-column",
                    children: [e.icon ? (0,
                    o.jsx)("img", {
                        className: l().img,
                        src: e.icon,
                        alt: ""
                    }) : null, (0,
                    o.jsx)("div", {
                        className: "copy-holder",
                        children: e.longCopy ? (0,
                        o.jsx)("div", {
                            className: "copy mt-4 text-center",
                            children: i.$h.markMedownRich(e.longCopy)
                        }) : null
                    })]
                })
            })
        }
    },
    24073: function(e, n, t) {
        "use strict";
        t.d(n, {
            p: function() {
                return s
            }
        });
        var o = t(85893)
          , i = t(25675)
          , a = t.n(i)
          , l = t(16482)
          , c = t(57995)
          , r = t.n(c)
          , s = function(e) {
            var n, t, i = e.data, c = e.isProductPage;
            return (0,
            o.jsx)("div", {
                className: "container-fluid my-5 ".concat(c ? r().radiant : ""),
                children: (0,
                o.jsxs)("div", {
                    className: "container",
                    children: [i.introCopy && (0,
                    o.jsx)("div", {
                        className: "row",
                        children: (0,
                        o.jsx)("div", {
                            className: "col-12 col-lg-9 text-white pt-5",
                            children: l.$h.markMedownRich(i.introCopy)
                        })
                    }), (0,
                    o.jsxs)("div", {
                        className: "row py-5 justify-content-center",
                        children: [i.headshot && (0,
                        o.jsx)("div", {
                            className: "col-12 col-lg-2",
                            children: (0,
                            o.jsx)("div", {
                                className: r().img,
                                children: (0,
                                o.jsx)(a(), {
                                    src: null === i || void 0 === i || null === (n = i.headshot) || void 0 === n ? void 0 : n.url,
                                    objectFit: "cover",
                                    layout: "fill",
                                    placeholder: "blur",
                                    blurDataURL: null === i || void 0 === i || null === (t = i.blur) || void 0 === t ? void 0 : t.url
                                })
                            })
                        }), (0,
                        o.jsx)("div", {
                            className: "col-12 ".concat((null === i || void 0 === i ? void 0 : i.headshot) ? "col-lg-10" : ""),
                            children: (0,
                            o.jsxs)("figure", {
                                children: [c ? (0,
                                o.jsxs)("blockquote", {
                                    className: "".concat(r().quote, " text-white"),
                                    children: [(0,
                                    o.jsx)("span", {
                                        className: r().quoteSymbol,
                                        children: '"'
                                    }), i.quote, (0,
                                    o.jsx)("span", {
                                        className: r().quoteSymbol,
                                        children: '"'
                                    })]
                                }) : (0,
                                o.jsx)("blockquote", {
                                    className: r().quote,
                                    children: i.quote
                                }), (0,
                                o.jsx)("hr", {}), (0,
                                o.jsx)("figcaption", {
                                    className: "".concat(r().author, " ").concat(c ? "text-white" : ""),
                                    children: i.author
                                })]
                            })
                        })]
                    })]
                })
            })
        }
    },
    32364: function(e, n, t) {
        "use strict";
        t.d(n, {
            n: function() {
                return s
            }
        });
        var o = t(85893)
          , i = (t(67294),
        t(67814))
          , a = t(41664)
          , l = t.n(a)
          , c = t(25675)
          , r = t.n(c)
          , s = function(e) {
            var n, t = e.time.trim().split(/\s+/).length, a = Math.ceil(t / 210);
            return (0,
            o.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                o.jsx)(l(), {
                    href: "/news" + e.url,
                    children: (0,
                    o.jsx)("a", {
                        children: (0,
                        o.jsxs)("div", {
                            className: "news-item",
                            children: [(0,
                            o.jsx)("div", {
                                className: "image",
                                children: null !== e.backgroundImage ? (0,
                                o.jsx)(r(), {
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
                                o.jsx)("p", {
                                    className: "category me-2",
                                    children: e
                                }, n)
                            }
                            )), (0,
                            o.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                o.jsxs)("p", {
                                    className: "time",
                                    children: [(0,
                                    o.jsx)(i.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", a <= 1 ? a + " min" : a + " mins", " "]
                                }), (0,
                                o.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    o.jsx)(i.G, {
                                        icon: ["fal", "calendar-times"]
                                    }), " ", e.date]
                                })]
                            }), (0,
                            o.jsx)("h3", {
                                className: "heading",
                                children: e.heading
                            }), e.description && (0,
                            o.jsx)("p", {
                                className: "description",
                                children: e.description
                            }), (0,
                            o.jsx)("button", {
                                className: "button primary dark",
                                children: e.ctaText
                            })]
                        })
                    })
                })
            })
        }
    },
    75186: function(e, n, t) {
        "use strict";
        var o = t(85893)
          , i = (t(67294),
        t(16482));
        n.Z = function(e) {
            var n;
            return (0,
            o.jsxs)("div", {
                className: "row my-5 justify-content-between ".concat(e.reverse ? "flex-row-reverse" : ""),
                children: [(0,
                o.jsx)("div", {
                    className: "col-sm-12 col-md-5",
                    children: (0,
                    o.jsx)("img", {
                        className: "img-fluid",
                        src: e.image,
                        alt: ""
                    })
                }), (0,
                o.jsxs)("div", {
                    className: "col-sm-12 col-md-5 p-3 p-lg-0",
                    children: [i.$h.markMedownRich(e.children), (0,
                    o.jsx)("div", {
                        className: "d-flex",
                        children: null === (n = e.ctas) || void 0 === n ? void 0 : n.map((function(e, n) {
                            var t;
                            return (0,
                            o.jsx)("a", {
                                href: null === (t = e.url) || void 0 === t ? void 0 : t.replace("/foresightgroup", ""),
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
    31676: function(e, n, t) {
        "use strict";
        t.r(n),
        t.d(n, {
            __N_SSP: function() {
                return _
            },
            default: function() {
                return T
            }
        });
        var o = t(41799)
          , i = t(85893)
          , a = t(67294)
          , l = t(13184)
          , c = t(47041)
          , r = t(87935)
          , s = t(16482)
          , d = t(73410)
          , u = t(32142)
          , m = t(97147)
          , h = t(28094)
          , v = t(75186)
          , x = t(81956)
          , g = t(11163)
          , p = t(587)
          , j = t(28456)
          , f = t(45818)
          , y = t(4654)
          , N = t(27404)
          , k = t(24073)
          , b = t(75778)
          , w = t(73983)
          , _ = !0;
        function T(e) {
            var n, t;
            (0,
            c.getCookie)("audience") || (0,
            c.setCookies)("audience", "general", {
                path: "/",
                maxAge: 2628e3,
                sameSite: !0
            });
            (0,
            g.useRouter)();
            (0,
            a.useEffect)((function() {
                var e = document.querySelector(".openCookieBox")
                  , n = document.querySelector(".custom-cookie-box");
                null === e || void 0 === e || e.addEventListener("click", (function() {
                    null === n || void 0 === n || n.style.setProperty("display", "block", "important")
                }
                ))
            }
            )),
            (0,
            a.useEffect)((function() {
                setTimeout((function() {
                    var e = document.querySelectorAll(".contact-links li");
                    e && e.forEach((function(e, n) {
                        var t = e.querySelector("a");
                        1 === n && t && ((null === C || void 0 === C ? void 0 : C.email) ? (t.href = "mailto:" + C.email,
                        t.innerText = C.email) : (null === C || void 0 === C ? void 0 : C.phone) && (t.href = "tel:" + C.phone,
                        t.innerText = C.phone))
                    }
                    ))
                }
                ), 250)
            }
            ));
            var _, T, C = e.payLoad.content;
            return (null === C || void 0 === C ? void 0 : C.hero) && "Green Gradient" === C.hero[0].content.tint ? (T = "green",
            _ = 1) : (null === C || void 0 === C ? void 0 : C.hero) && "Solid Green" === C.hero[0].content.tint ? (T = "green",
            _ = 2) : (null === C || void 0 === C ? void 0 : C.hero) && "Pink Gradient" === C.hero[0].content.tint ? (T = "purple",
            _ = 1) : (null === C || void 0 === C ? void 0 : C.hero) && "Solid Pink" === C.hero[0].content.tint && (T = "purple",
            _ = 2),
            (0,
            i.jsxs)(l.Z, {
                className: "std-page",
                children: [(0,
                i.jsx)(s.$h.PageHead, {
                    siteURL: (null === C || void 0 === C ? void 0 : C.url) ? C.url.split("foresightgroup/").join("") : "",
                    OGimageURL: null === C || void 0 === C || null === (n = C.metaImage) || void 0 === n ? void 0 : n.url,
                    OGtitle: (null === C || void 0 === C ? void 0 : C.metaTitle) || (null === C || void 0 === C ? void 0 : C.title),
                    OGpageDescription: (null === C || void 0 === C ? void 0 : C.metaDescription) || (null === C || void 0 === C ? void 0 : C.subCopy)
                }), C.topWarning ? (0,
                i.jsx)("div", {
                    className: "top-warning bg-main",
                    children: (0,
                    i.jsx)("div", {
                        className: "container-fluid py-3",
                        children: (0,
                        i.jsx)("div", {
                            className: "container",
                            children: (0,
                            i.jsx)("div", {
                                className: "row justify-content-center",
                                children: (0,
                                i.jsx)("div", {
                                    className: "col col-xl-9 text-center text-white top-warning-content",
                                    children: s.$h.markMedownRich(C.topWarning)
                                })
                            })
                        })
                    })
                }) : null, (null === C || void 0 === C ? void 0 : C.standardPageBlockList) ? "MasterHeroPrimary" === (null === C || void 0 === C ? void 0 : C.hero[0].content.__typename) ? (0,
                i.jsx)(w.Z, {
                    image: null === C || void 0 === C ? void 0 : C.hero[0].content.image.cropUrl,
                    text: C.hero[0].content.copy,
                    cta: null === C || void 0 === C ? void 0 : C.hero[0].content.cTAs,
                    level: 0
                }) : "MasterHeroSecondaryNew" === (null === C || void 0 === C ? void 0 : C.hero[0].content.__typename) ? (0,
                i.jsx)(w.Z, {
                    image: null === C || void 0 === C ? void 0 : C.hero[0].content.image.cropUrl,
                    text: C.hero[0].content.copy,
                    cta: null === C || void 0 === C ? void 0 : C.hero[0].content.cTAs,
                    level: _,
                    tint: T
                }) : "MasterHeroSecondaryOld" === (null === C || void 0 === C ? void 0 : C.hero[0].content.__typename) && (0,
                i.jsx)(w.Z, {
                    image: null === C || void 0 === C ? void 0 : C.hero[0].content.image.cropUrl,
                    text: C.hero[0].content.copy,
                    cta: null === C || void 0 === C ? void 0 : C.hero[0].content.cTAs,
                    level: 2,
                    tint: null === C || void 0 === C ? void 0 : C.hero[0].content.tint
                }) : (0,
                i.jsxs)(i.Fragment, {
                    children: [(null === C || void 0 === C ? void 0 : C.hero) ? (0,
                    i.jsx)(w.Z, {
                        text: null === C || void 0 === C ? void 0 : C.hero[0].content.copy,
                        level: 3
                    }) : (0,
                    i.jsx)(r.Z, {
                        header: (null === C || void 0 === C ? void 0 : C.title) ? C.title : null,
                        copy: (null === C || void 0 === C ? void 0 : C.subCopy) ? C.subCopy : null,
                        heroImg: (null === C || void 0 === C ? void 0 : C.image) ? C.image.url : null,
                        level: "tertiary",
                        bGColour: (null === C || void 0 === C ? void 0 : C.bGColour) ? C.bGColour : "f1f1f2"
                    }), !(null === C || void 0 === C ? void 0 : C.standardPageBlockList) && (0,
                    i.jsx)("div", {
                        className: "container mb-5",
                        children: (0,
                        i.jsx)("div", {
                            className: "row",
                            children: (0,
                            i.jsx)("div", {
                                className: "col",
                                children: (null === C || void 0 === C ? void 0 : C.body) ? s.$h.markMedownRich(C.body) : null
                            })
                        })
                    })]
                }), null === C || void 0 === C || null === (t = C.standardPageBlockList) || void 0 === t ? void 0 : t.map((function(e, n) {
                    if ("TextBlock" === e.content.__typename) {
                        var t = /text-align:\s*left;/.test(e.content.copy);
                        return (0,
                        i.jsx)("div", {
                            className: "container-fluid py-5",
                            style: {
                                backgroundColor: "#" + e.content.backgroundColour
                            },
                            children: (0,
                            i.jsx)("div", {
                                className: "container",
                                children: (0,
                                i.jsx)("div", {
                                    className: "row",
                                    children: (0,
                                    i.jsxs)("div", {
                                        className: "col-12 col-lg-9 mx-auto",
                                        children: [s.$h.markMedownRich(e.content.copy), e.content.textBlockCTA && e.content.textBlockCTA.map((function(e, n) {
                                            return (0,
                                            i.jsx)(y.a, {
                                                class: "".concat(0 !== n ? "secondary dark-text" : "primary dark", " ").concat(0 !== n ? "ms-0 ms-lg-3" : "", " ").concat(t ? "" : "d-flex mx-auto"),
                                                url: e.url,
                                                target: e.target,
                                                children: e.name
                                            }, n)
                                        }
                                        ))]
                                    })
                                })
                            })
                        }, n)
                    }
                    var a, l, c, r, g, w;
                    return "PeopleBlock" === e.content.__typename ? (0,
                    i.jsx)("div", {
                        className: "container-fluid py-5 ".concat(null === e.content.backgroundGradient || "True" === e.content.backgroundGradient ? "timeline-gradient" : ""),
                        children: (0,
                        i.jsxs)("div", {
                            className: "container",
                            children: [(0,
                            i.jsx)("div", {
                                className: "row ".concat("True" === e.content.backgroundGradient || null === e.content.backgroundGradient ? "text-white" : "text-main"),
                                children: (0,
                                i.jsx)(d.Z, {
                                    headingandcopy: e.content.introCopy,
                                    teamMembers: e.content.people,
                                    showExternal: !0,
                                    colour: "True" === e.content.backgroundGradient || null === e.content.backgroundGradient ? "white" : "purple"
                                }, n)
                            }), e.content.optionalCTA && (0,
                            i.jsx)("div", {
                                className: "row mt-4",
                                children: (0,
                                i.jsx)("div", {
                                    className: "col",
                                    children: (0,
                                    i.jsx)(y.a, {
                                        class: "primary dark mx-auto mt-4",
                                        url: null === (a = e.content.optionalCTA[0]) || void 0 === a ? void 0 : a.url,
                                        target: null === (l = e.content.optionalCTA[0]) || void 0 === l ? void 0 : l.target,
                                        children: null === (c = e.content.optionalCTA[0]) || void 0 === c ? void 0 : c.name
                                    })
                                })
                            })]
                        })
                    }) : "CarouselBlock" === e.content.__typename ? (0,
                    i.jsxs)(i.Fragment, {
                        children: [(0,
                        i.jsx)("div", {
                            className: "container-fluid",
                            children: (0,
                            i.jsx)("div", {
                                className: "container",
                                children: (0,
                                i.jsx)("div", {
                                    className: "row",
                                    children: (0,
                                    i.jsx)("div", {
                                        className: "col",
                                        children: s.$h.markMedownRich(e.content.introCopy)
                                    })
                                })
                            })
                        }), (0,
                        i.jsx)(m.a, {
                            slidesToShowDesktop: 1,
                            slidesToShowTablet: 1,
                            slidesToShowMobile: 1,
                            backgroundColour: "#E5E5E5",
                            infinite: !0,
                            classes: "light-theme",
                            sectionTitle: "",
                            showDotsDesktop: !0,
                            children: e.content.carouselItems.map((function(e, n) {
                                return e.author ? (0,
                                i.jsx)(u.g, {
                                    heading: e.title ? e.title : null,
                                    copy: e.quote ? e.quote : null,
                                    author: e.author ? e.author.name : null,
                                    title: e.author ? e.author.title : null,
                                    image: e.image ? e.image.url : null,
                                    url: e.cTALink ? e.cTALink.url : null,
                                    cta: e.cTALink ? e.cTALink.name : null,
                                    target: e.cTALink && e.cTALink.target,
                                    video: e.video
                                }, n) : (0,
                                i.jsx)(h.C, {
                                    heading: e.title ? e.title : null,
                                    image: e.image ? e.image.url : null,
                                    url: e.cTALink ? e.cTALink.url : null,
                                    cta: e.cTALink ? e.cTALink.name : null,
                                    target: e.cTALink && e.cTALink.target,
                                    video: e.video,
                                    children: e.quote ? e.quote : null
                                }, n)
                            }
                            ))
                        }, n), (0,
                        i.jsx)("div", {
                            className: "container-fluid",
                            children: (0,
                            i.jsx)("div", {
                                className: "container",
                                children: (0,
                                i.jsx)("div", {
                                    className: "row",
                                    children: (0,
                                    i.jsx)("div", {
                                        className: "col",
                                        children: e.content.carouselBlockCTA && (0,
                                        i.jsx)(y.a, {
                                            class: "primary dark mx-auto",
                                            url: e.content.carouselBlockCTA.url,
                                            target: e.content.carouselBlockCTA.target,
                                            children: e.content.carouselBlockCTA.name
                                        })
                                    })
                                })
                            })
                        })]
                    }) : "ImageTextBlock" === e.content.__typename ? (0,
                    i.jsx)("div", {
                        style: {
                            backgroundColor: e.content.backgroundColour ? "#".concat(e.content.backgroundColour) : "transparent"
                        },
                        children: (0,
                        i.jsx)("div", {
                            className: "container my-5",
                            children: (0,
                            i.jsx)("div", {
                                className: "row",
                                children: (0,
                                i.jsx)("div", {
                                    className: "col",
                                    children: (0,
                                    i.jsx)(v.Z, {
                                        reverse: "Left" === e.content.textAlign,
                                        image: e.content.image.cropUrl,
                                        ctas: e.content.imageTextBlockCTA,
                                        children: e.content.copy
                                    })
                                })
                            })
                        })
                    }) : "FAQBlockMulti" === e.content.__typename ? (0,
                    i.jsx)("div", {
                        className: "container my-5",
                        children: (0,
                        i.jsx)("div", {
                            className: "row",
                            children: (0,
                            i.jsxs)("div", {
                                className: "col",
                                children: [s.$h.markMedownRich(e.content.introCopy), (0,
                                i.jsx)(x.Z, {
                                    res: e.content.fAQs
                                }), e.content.faqBlockCTA && (0,
                                i.jsx)(y.a, {
                                    class: "primary dark mx-auto mt-4",
                                    url: null === (r = e.content.faqBlockCTA) || void 0 === r ? void 0 : r.url,
                                    target: null === (g = e.content.faqBlockCTA) || void 0 === g ? void 0 : g.target,
                                    children: null === (w = e.content.faqBlockCTA) || void 0 === w ? void 0 : w.name
                                })]
                            })
                        })
                    }) : "FormPicker" === e.content.__typename ? (0,
                    i.jsx)(i.Fragment, {
                        children: e.content.formPicker && (0,
                        i.jsxs)("div", {
                            className: "container-fluid py-5 bg-main",
                            children: [(0,
                            i.jsx)("div", {
                                className: "form-top",
                                id: "form"
                            }), (0,
                            i.jsx)("div", {
                                className: "container",
                                children: (0,
                                i.jsxs)("div", {
                                    className: "row",
                                    children: [(0,
                                    i.jsx)("div", {
                                        className: "col-12 text-white",
                                        children: s.$h.markMedownRich(e.content.copy)
                                    }), (0,
                                    i.jsx)(f.Z, {
                                        formData: e.content.formPicker
                                    })]
                                })
                            })]
                        }, n)
                    }) : "IconStatBlock" === e.content.__typename ? (0,
                    i.jsx)(p.v, {
                        copy: e.content.introCopy,
                        cta: e.content.iconStatBlockCTA,
                        children: e.content.iconsStats.map((function(e, n) {
                            var t;
                            return (0,
                            i.jsx)(j.a, {
                                icon: null === (t = e.content.imageIcon) || void 0 === t ? void 0 : t.url,
                                longCopy: e.content.copy
                            })
                        }
                        ))
                    }, n) : "CTABlock" === e.content.__typename ? (0,
                    i.jsx)(N.s, (0,
                    o.Z)({
                        intro: e.content.introCopy
                    }, [e.content.cTABlocks, e])) : "QuoteBlock" === e.content.__typename ? (0,
                    i.jsx)(k.p, {
                        data: e.content
                    }) : "NewsBlock" === e.content.__typename ? (0,
                    i.jsx)(b.g, {
                        data: e.content
                    }) : void 0
                }
                ))]
            })
        }
    },
    10573: function(e) {
        e.exports = {
            img: "IconText_img__neiEE"
        }
    },
    57995: function(e) {
        e.exports = {
            quote: "MasterPageQuote_quote__AIMIw",
            quoteSymbol: "MasterPageQuote_quoteSymbol__Q_43Y",
            radiant: "MasterPageQuote_radiant__K3DHO",
            author: "MasterPageQuote_author__sS9Oa",
            img: "MasterPageQuote_img__mYrA3"
        }
    },
    828: function(e, n, t) {
        "use strict";
        t.d(n, {
            Z: function() {
                return a
            }
        });
        var o = t(13375);
        var i = t(91566);
        function a(e, n) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || (0,
            o.Z)(e, n) || (0,
            i.Z)(e, n) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 9407, 2004, 3184, 3983, 833, 3410, 5465, 9774, 2888, 179], (function() {
        return n = 50881,
        e(e.s = n);
        var n
    }
    ));
    var n = e.O();
    _N_E = n
}
]);
