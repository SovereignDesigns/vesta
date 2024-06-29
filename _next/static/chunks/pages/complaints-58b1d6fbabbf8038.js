(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[8067], {
    81150: function(e, s, a) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/complaints", function() {
            return a(1837)
        }
        ])
    },
    81956: function(e, s, a) {
        "use strict";
        var i = a(85893)
          , c = (a(67294),
        a(67814))
          , r = a(16482);
        s.Z = function(e) {
            var s = Math.floor(200 * Math.random()) + 1;
            return (0,
            i.jsx)("div", {
                className: "accordion",
                id: "accordion".concat(s),
                children: e.res.map((function(e, a) {
                    return (0,
                    i.jsxs)("div", {
                        className: "accordion-item",
                        children: [(0,
                        i.jsx)("h2", {
                            className: "accordion-header",
                            id: "heading" + (a + s),
                            children: (0,
                            i.jsxs)("button", {
                                className: "accordion-button collapsed",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#collapse" + (a + s),
                                "aria-expanded": "true",
                                "aria-controls": "collapse" + (a + s),
                                children: [e.heading, " ", (0,
                                i.jsx)(c.G, {
                                    icon: ["fal", "chevron-down"]
                                })]
                            })
                        }), (0,
                        i.jsx)("div", {
                            id: "collapse" + (a + s),
                            className: "accordion-collapse collapse",
                            "aria-labelledby": "heading" + (a + s),
                            "data-bs-parent": "#accordion" + s,
                            children: (0,
                            i.jsx)("div", {
                                className: "accordion-body",
                                children: r.$h.markMedownRich(e.description)
                            })
                        })]
                    }, a)
                }
                ))
            })
        }
    },
    50710: function(e, s, a) {
        "use strict";
        var i = a(85893)
          , c = (a(67294),
        a(4654));
        s.Z = function(e) {
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
                            i.jsx)(c.a, {
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
    32112: function(e, s, a) {
        "use strict";
        var i = a(47568)
          , c = a(10092)
          , r = a(85893)
          , n = a(67294)
          , l = a(62284)
          , t = a(7422)
          , o = a.n(t)
          , d = a(16482)
          , m = a(11163);
        s.Z = function(e) {
            var s = (0,
            n.useState)("")
              , a = s[0]
              , t = s[1]
              , h = (0,
            m.useRouter)()
              , u = function() {
                var s = (0,
                i.Z)((function(s) {
                    var a, i, r;
                    return (0,
                    c.__generator)(this, (function(c) {
                        switch (c.label) {
                        case 0:
                            return s.preventDefault(),
                            a = o()(s.target, {
                                hash: !0
                            }),
                            [4, fetch("/api/submitForm", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    formId: e.formData._id,
                                    formData: a
                                })
                            })];
                        case 1:
                            return [4, c.sent()];
                        case 2:
                            return 200 !== (i = c.sent()).status ? [3, 5] : (s.target.reset(),
                            e.formData.gotoPageOnSubmit ? [4, d.$h.getURLFromUmbracoId(e.formData.gotoPageOnSubmit)] : [3, 4]);
                        case 3:
                            r = c.sent(),
                            h.push(r),
                            c.label = 4;
                        case 4:
                            return t(e.formData.messageOnSubmit),
                            [3, 6];
                        case 5:
                            t("<span class='red'>" + i + "</span>"),
                            c.label = 6;
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
            return a ? (0,
            r.jsx)("div", {
                className: "row",
                children: (0,
                r.jsx)("div", {
                    className: "col-12 col-md-8",
                    children: d.$h.markMedownRich(a)
                })
            }) : (0,
            r.jsxs)("form", {
                className: "form complaints-form",
                onSubmit: u,
                children: [(0,
                r.jsxs)("div", {
                    className: "row",
                    children: [(0,
                    r.jsx)("div", {
                        className: "col-12 col-md-6",
                        children: (0,
                        r.jsx)(l.Z, {
                            props: e.formData.pages[0].fieldsets[0].columns[0].fields[0]
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "col-12 col-md-6",
                        children: (0,
                        r.jsx)(l.Z, {
                            props: e.formData.pages[0].fieldsets[0].columns[0].fields[1]
                        })
                    })]
                }), (0,
                r.jsxs)("div", {
                    className: "row",
                    children: [(0,
                    r.jsx)("div", {
                        className: "col-12 col-md-6",
                        children: (0,
                        r.jsx)(l.Z, {
                            props: e.formData.pages[0].fieldsets[0].columns[0].fields[2]
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "col-12 col-md-6",
                        children: (0,
                        r.jsx)(l.Z, {
                            props: e.formData.pages[0].fieldsets[0].columns[0].fields[3]
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "row",
                    children: (0,
                    r.jsx)("div", {
                        className: "col-12 col-md-12",
                        children: (0,
                        r.jsx)(l.Z, {
                            props: e.formData.pages[0].fieldsets[0].columns[0].fields[4]
                        })
                    })
                }), (0,
                r.jsx)("div", {
                    className: "",
                    children: (0,
                    r.jsx)(l.Z, {
                        props: e.formData.pages[0].fieldsets[0].columns[0].fields[6]
                    })
                }), (0,
                r.jsxs)("div", {
                    className: "row",
                    children: [(0,
                    r.jsx)("div", {
                        className: "col-12 col-md-8",
                        children: (0,
                        r.jsx)("div", {
                            className: "form-check",
                            children: (0,
                            r.jsx)(l.Z, {
                                props: e.formData.pages[0].fieldsets[0].columns[0].fields[7]
                            })
                        })
                    }), (0,
                    r.jsx)("div", {
                        className: "col-12 col-md-4 d-flex justify-content-end",
                        children: (0,
                        r.jsx)("button", {
                            type: "submit",
                            className: "button secondary dark-text",
                            children: e.formData.submitLabel
                        })
                    })]
                }), (0,
                r.jsx)("div", {
                    className: "row",
                    children: (0,
                    r.jsx)("div", {
                        className: "col-12 col-md-8",
                        children: d.$h.markMedownRich(a)
                    })
                })]
            })
        }
    },
    77687: function(e, s, a) {
        "use strict";
        a.d(s, {
            a: function() {
                return c
            }
        });
        var i = a(85893)
          , c = (a(67294),
        function(e) {
            return (0,
            i.jsxs)("div", {
                className: "text ".concat(e.align),
                children: [e.children, e.ctaURL ? (0,
                i.jsx)("a", {
                    href: e.ctaURL,
                    className: "button primary dark",
                    target: e.target,
                    children: e.ctaCopy
                }) : null]
            })
        }
        )
    },
    1837: function(e, s, a) {
        "use strict";
        a.r(s),
        a.d(s, {
            __N_SSP: function() {
                return u
            },
            default: function() {
                return f
            }
        });
        var i = a(85893)
          , c = (a(67294),
        a(13184))
          , r = a(50710)
          , n = a(77687)
          , l = a(81956)
          , t = a(32112)
          , o = a(67814)
          , d = a(16482)
          , m = a(27669)
          , h = a(73983)
          , u = !0;
        function f(e) {
            var s, a = (0,
            m.s)(e.data.content.form._id), u = a.signUpForm, f = a.error, p = e.data.content;
            return "Solid Green" === p.tint ? s = "green" : "Solid Pink" === p.tint && (s = "purple"),
            (0,
            i.jsxs)(c.Z, {
                id: "root",
                className: "complaints-page",
                children: [(0,
                i.jsx)(d.$h.PageHead, {
                    siteURL: p.url.split("foresightgroup/").join(""),
                    OGimageURL: p.metaImage,
                    OGtitle: p.metaTitle,
                    OGpageDescription: p.metaDescription
                }), (0,
                i.jsx)(h.Z, {
                    image: p.image.url + "?width=1080",
                    text: p.heroText,
                    cta: p.herocTALink,
                    level: 2,
                    tint: s
                }), (0,
                i.jsx)("div", {
                    className: "container-fluid py-5 bg-main text-white",
                    children: (0,
                    i.jsx)("div", {
                        className: "container",
                        children: (0,
                        i.jsxs)("div", {
                            className: "row pt-5",
                            children: [(0,
                            i.jsx)("div", {
                                className: "col-12 col-lg-4",
                                children: (0,
                                i.jsxs)(n.a, {
                                    ctaCopy: "",
                                    ctaURL: "",
                                    target: "",
                                    children: [d.$h.markMedownRich(p.bodyCopy), (0,
                                    i.jsxs)("ul", {
                                        className: "contact-links",
                                        children: [(0,
                                        i.jsxs)("li", {
                                            children: [(0,
                                            i.jsx)(o.G, {
                                                icon: ["fal", "phone"]
                                            }), (0,
                                            i.jsx)("a", {
                                                href: "tel:" + p.telephone,
                                                children: p.telephone
                                            })]
                                        }), (0,
                                        i.jsxs)("li", {
                                            children: [(0,
                                            i.jsx)(o.G, {
                                                icon: ["fal", "envelope"]
                                            }), (0,
                                            i.jsx)("a", {
                                                href: "mailto:" + p.email,
                                                children: d.$h.markMedownRich(p.email)
                                            })]
                                        }), (0,
                                        i.jsxs)("li", {
                                            children: [(0,
                                            i.jsx)(o.G, {
                                                icon: ["fal", "location-arrow"]
                                            }), d.$h.markMedownRich(p.address)]
                                        })]
                                    })]
                                })
                            }), (0,
                            i.jsx)("div", {
                                className: "col-12 col-lg-8",
                                children: u ? (0,
                                i.jsx)(t.Z, {
                                    formData: u
                                }) : (0,
                                i.jsx)("p", {
                                    children: f || "Error loading the form"
                                })
                            })]
                        })
                    })
                }), (0,
                i.jsx)("div", {
                    className: "container-fluid pt-5",
                    children: (0,
                    i.jsxs)("div", {
                        className: "container",
                        children: [(0,
                        i.jsx)("div", {
                            className: "row",
                            children: (0,
                            i.jsx)("div", {
                                className: "col",
                                children: (0,
                                i.jsx)("h2", {
                                    className: "text-center",
                                    children: p.fAQTitle
                                })
                            })
                        }), (0,
                        i.jsx)("div", {
                            className: "row py-5",
                            children: (0,
                            i.jsx)("div", {
                                className: "col",
                                children: (0,
                                i.jsx)(l.Z, {
                                    res: p.fAQs
                                })
                            })
                        })]
                    })
                }), (0,
                i.jsx)(r.Z, {})]
            })
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 9407, 3184, 3983, 9774, 2888, 179], (function() {
        return s = 81150,
        e(e.s = s);
        var s
    }
    ));
    var s = e.O();
    _N_E = s
}
]);
