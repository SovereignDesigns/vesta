(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[5074], {
    69034: function(e, t, i) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/about-us/people", function() {
            return i(83133)
        }
        ])
    },
    97147: function(e, t, i) {
        "use strict";
        i.d(t, {
            a: function() {
                return c
            }
        });
        var l = i(41799)
          , s = i(69396)
          , n = i(85893)
          , a = i(67294)
          , o = i(46066)
          , r = (i(98322),
        i(98745),
        i(67814))
          , c = function(e) {
            var t = (0,
            a.useRef)(null)
              , i = (0,
            a.useRef)(null);
            (0,
            a.useRef)(null);
            (0,
            a.useEffect)((function() {
                c(),
                d()
            }
            ));
            var c = function() {
                var e, l, s, n = i, a = null === t || void 0 === t || null === (e = t.current) || void 0 === e || null === (l = e.innerSlider) || void 0 === l || null === (s = l.list) || void 0 === s ? void 0 : s.nextSibling;
                a && n.current.appendChild(a)
            }
              , d = function() {
                var e, i, l, s, n = null === (e = t.current) || void 0 === e || null === (i = e.props) || void 0 === i ? void 0 : i.children.length, a = null === (l = t.current) || void 0 === l ? void 0 : l.props.slidesToShow, o = null === (s = t.current) || void 0 === s ? void 0 : s.innerSlider.list.parentElement.previousSibling;
                n == a && (o.style.display = "none")
            }
              , m = {
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
            n.jsx)("div", {
                className: "container carousel py-5 ".concat(e.classes),
                style: {
                    backgroundColor: e.backgroundColour
                },
                children: (0,
                n.jsxs)("div", {
                    className: "container g-lg-0",
                    style: {
                        backgroundColor: e.backgroundColour
                    },
                    children: [(0,
                    n.jsx)("div", {
                        className: "row",
                        children: (0,
                        n.jsx)("div", {
                            className: "col",
                            children: e.isWebinar || e.sectionTitle && (0,
                            n.jsx)("h2", {
                                className: "text-center mb-5",
                                children: e.isWebinar ? "" : e.sectionTitle
                            })
                        })
                    }), (0,
                    n.jsxs)("div", {
                        className: " row position-relative",
                        children: [(0,
                        n.jsx)("div", {
                            className: "con ".concat("white" === e.buttonStyle ? "white" : "purple"),
                            children: (0,
                            n.jsxs)("div", {
                                children: [(0,
                                n.jsxs)("div", {
                                    className: "arrows",
                                    children: [(0,
                                    n.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === t || void 0 === t || null === (e = t.current) || void 0 === e ? void 0 : e.slickNext()
                                        },
                                        children: (0,
                                        n.jsx)(r.G, {
                                            icon: ["fal", "chevron-right"],
                                            size: "3x"
                                        })
                                    }), (0,
                                    n.jsx)("button", {
                                        className: "button",
                                        onClick: function() {
                                            var e;
                                            return null === t || void 0 === t || null === (e = t.current) || void 0 === e ? void 0 : e.slickPrev()
                                        },
                                        children: (0,
                                        n.jsx)(r.G, {
                                            icon: ["fal", "chevron-left"],
                                            size: "3x"
                                        })
                                    })]
                                }), (0,
                                n.jsx)("ul", {
                                    className: "slick-dots new-dots",
                                    ref: i
                                })]
                            })
                        }), (0,
                        n.jsx)(o.Z, (0,
                        s.Z)((0,
                        l.Z)({
                            ref: t
                        }, m), {
                            children: e.children
                        }))]
                    })]
                })
            })
        }
    },
    50710: function(e, t, i) {
        "use strict";
        var l = i(85893)
          , s = (i(67294),
        i(4654));
        t.Z = function(e) {
            return (0,
            l.jsx)("div", {
                className: "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
                children: (0,
                l.jsx)("div", {
                    className: "container pt-3 pb-3",
                    children: (0,
                    l.jsxs)("div", {
                        className: "row justify-content-center",
                        children: [(0,
                        l.jsxs)("div", {
                            className: "col",
                            children: [(0,
                            l.jsx)("h2", {
                                children: "Find out how you can be part of our journey"
                            }), (0,
                            l.jsx)("p", {
                                children: "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies."
                            })]
                        }), (0,
                        l.jsx)("div", {
                            className: "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                            children: (0,
                            l.jsx)(s.a, {
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
    32364: function(e, t, i) {
        "use strict";
        i.d(t, {
            n: function() {
                return c
            }
        });
        var l = i(85893)
          , s = (i(67294),
        i(67814))
          , n = i(41664)
          , a = i.n(n)
          , o = i(25675)
          , r = i.n(o)
          , c = function(e) {
            var t, i = e.time.trim().split(/\s+/).length, n = Math.ceil(i / 210);
            return (0,
            l.jsx)("div", {
                className: "news-item-container ".concat(e.responsiveClasses),
                children: (0,
                l.jsx)(a(), {
                    href: "/news" + e.url,
                    children: (0,
                    l.jsx)("a", {
                        children: (0,
                        l.jsxs)("div", {
                            className: "news-item",
                            children: [(0,
                            l.jsx)("div", {
                                className: "image",
                                children: null !== e.backgroundImage ? (0,
                                l.jsx)(r(), {
                                    src: e.backgroundImage,
                                    layout: "fill",
                                    objectFit: "cover",
                                    placeholder: "blur",
                                    blurDataURL: e.backgroundImage + "?width=10",
                                    style: {
                                        borderRadius: 8
                                    }
                                }) : null
                            }), null === (t = e.category) || void 0 === t ? void 0 : t.map((function(e, t) {
                                return (0,
                                l.jsx)("p", {
                                    className: "category me-2",
                                    children: e
                                }, t)
                            }
                            )), (0,
                            l.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                l.jsxs)("p", {
                                    className: "time",
                                    children: [(0,
                                    l.jsx)(s.G, {
                                        icon: ["fal", "clock"]
                                    }), " ", n <= 1 ? n + " min" : n + " mins", " "]
                                }), (0,
                                l.jsxs)("p", {
                                    className: "date",
                                    children: [(0,
                                    l.jsx)(s.G, {
                                        icon: ["fal", "calendar-times"]
                                    }), " ", e.date]
                                })]
                            }), (0,
                            l.jsx)("h3", {
                                className: "heading",
                                children: e.heading
                            }), e.description && (0,
                            l.jsx)("p", {
                                className: "description",
                                children: e.description
                            }), (0,
                            l.jsx)("button", {
                                className: "button primary dark",
                                children: e.ctaText
                            })]
                        })
                    })
                })
            })
        }
    },
    72859: function(e, t, i) {
        "use strict";
        var l = i(828)
          , s = i(85893)
          , n = i(67294)
          , a = i(67814)
          , o = i(93024)
          , r = i(16482)
          , c = i(41664)
          , d = i.n(c);
        t.Z = function(e) {
            var t = (0,
            l.Z)(n.useState(!1), 2)
              , i = (t[0],
            t[1],
            (0,
            n.useState)(!1))
              , c = i[0]
              , m = i[1]
              , u = (0,
            n.useState)(!1)
              , h = (u[0],
            u[1],
            (0,
            n.useState)(null))
              , p = (h[0],
            h[1],
            function() {
                m(!c)
            }
            );
            return (0,
            s.jsxs)("div", {
                className: "col-12 col-md-6 mb-4 team-tile-list__tile" + e.colWidth + e.hideShowClass,
                children: [(0,
                s.jsxs)("button", {
                    className: "team-tile-list__button button",
                    onClick: function() {
                        return p()
                    },
                    children: [(0,
                    s.jsx)("div", {
                        className: "team-tile-list__image-container",
                        children: (0,
                        s.jsx)("img", {
                            loading: "lazy",
                            src: e.headshot,
                            className: "team-tile-list__image"
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "team-tile-list__details ".concat("purple" === e.colour ? "team-tile-list__details--purple" : "team-tile-list__details--white"),
                        children: [(0,
                        s.jsx)("h3", {
                            className: " tc-white",
                            children: e.name
                        }), (0,
                        s.jsx)("p", {
                            className: "tc-light-pink",
                            children: e.jobTitle
                        }), (0,
                        s.jsx)("span", {
                            className: "team-tile-list__cta",
                            children: (0,
                            s.jsx)(a.G, {
                                icon: ["fal", "chevron-right"]
                            })
                        })]
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "team-tile-list__modal modal fade ".concat(!0 === c ? "show" : ""),
                    id: "staticBackdrop",
                    "data-bs-backdrop": "static",
                    "data-bs-keyboard": "false",
                    "aria-labelledby": "staticBackdropLabel",
                    "aria-hidden": "true",
                    children: (0,
                    s.jsx)("div", {
                        className: "modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down",
                        children: (0,
                        s.jsxs)("div", {
                            className: "modal-content",
                            children: [(0,
                            s.jsx)("div", {
                                className: "modal-header",
                                children: (0,
                                s.jsx)("button", {
                                    type: "button",
                                    className: "btn-close",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close",
                                    onClick: function() {
                                        return p()
                                    }
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "modal-body",
                                children: (0,
                                s.jsxs)("div", {
                                    className: "container-fluid",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "row",
                                        children: (0,
                                        s.jsx)("div", {
                                            className: "col",
                                            children: (0,
                                            s.jsxs)("h3", {
                                                children: [e.name, e.linkedin && (0,
                                                s.jsx)(d(), {
                                                    href: e.linkedin,
                                                    children: (0,
                                                    s.jsx)("a", {
                                                        target: "_blank",
                                                        children: (0,
                                                        s.jsx)(a.G, {
                                                            icon: o.D9H
                                                        })
                                                    })
                                                }), " "]
                                            })
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "row pt-3 pb-5",
                                        children: [(0,
                                        s.jsx)("div", {
                                            className: "col-md-4 pb-3",
                                            children: (0,
                                            s.jsx)("img", {
                                                src: e.headshot,
                                                className: "team-tile-list__modal-image"
                                            })
                                        }), (0,
                                        s.jsxs)("div", {
                                            className: "col-md-8",
                                            children: [(0,
                                            s.jsx)("p", {
                                                className: "tc-dark-grey",
                                                children: (0,
                                                s.jsx)("strong", {
                                                    children: e.jobTitle
                                                })
                                            }), (0,
                                            s.jsxs)("div", {
                                                children: [e.description ? r.$h.markMedownRich(e.description) : null, e.phone && (0,
                                                s.jsxs)("p", {
                                                    children: [(0,
                                                    s.jsx)(a.G, {
                                                        icon: ["fal", "phone"]
                                                    }), (0,
                                                    s.jsx)("a", {
                                                        href: "tel:".concat(e.phone),
                                                        children: e.phone
                                                    })]
                                                }), e.email && (0,
                                                s.jsxs)("p", {
                                                    children: [(0,
                                                    s.jsx)(a.G, {
                                                        icon: ["fal", "envelope"]
                                                    }), (0,
                                                    s.jsx)("a", {
                                                        href: "mailto:".concat(e.email),
                                                        children: e.email
                                                    })]
                                                })]
                                            })]
                                        })]
                                    })]
                                })
                            })]
                        })
                    })
                })]
            })
        }
    },
    83133: function(e, t, i) {
        "use strict";
        i.r(t),
        i.d(t, {
            __N_SSP: function() {
                return v
            },
            default: function() {
                return x
            }
        });
        var l = i(85893)
          , s = i(67294)
          , n = i(13184)
          , a = i(50710)
          , o = i(97147)
          , r = i(32364)
          , c = i(16482)
          , d = i(73983)
          , m = i(11163)
          , u = i(72859)
          , h = i(45879)
          , p = i(47041);
        function b(e) {
            var t = (0,
            m.useRouter)()
              , i = t.query.department
              , n = t.query.location
              , a = (0,
            s.useState)(!1)
              , o = a[0]
              , r = (a[1],
            (0,
            s.useState)(null))
              , d = (r[0],
            r[1])
              , b = (0,
            s.useState)("")
              , v = b[0]
              , x = b[1]
              , j = (0,
            s.useState)("")
              , f = j[0]
              , g = j[1]
              , N = (0,
            s.useState)("All departments")
              , w = N[0]
              , k = N[1]
              , M = (0,
            s.useState)(!1)
              , y = M[0]
              , S = M[1]
              , T = (0,
            p.getCookie)("audience")
              , _ = (0,
            l.jsxs)(l.Fragment, {
                children: ["Load More ", (0,
                l.jsx)("span", {
                    className: "btn-icon",
                    children: "+"
                })]
            })
              , C = (0,
            l.jsxs)(l.Fragment, {
                children: ["Show Less ", (0,
                l.jsx)("span", {
                    className: "btn-icon",
                    children: "-"
                })]
            });
            (0,
            s.useEffect)((function() {
                d(!1 === o ? _ : C),
                x(n || "All locations"),
                g(i || "All departments"),
                "/about-us/people" == t.pathname && ("private-investor" == T && (g(i || "Retail Investor Relations"),
                k(i || "Retail Investor Relations")),
                "institutional-investor" == T && (g(i || "Institutional Investor Relations"),
                k(i || "Institutional Investor Relations")),
                "financial-intermediary" == T && (g(i || "Retail Sales"),
                k(i || "Retail Sales")),
                "sme" == T && (g(i || "Private Equity"),
                k(i || "Private Equity"))),
                "/resources/bdm" == t.pathname && (g(i || "Retail Sales"),
                k(i || "Retail Sales"))
            }
            ), [o]);
            var I = function() {
                var t, i = [];
                if ((null === (t = e.teamMembers) || void 0 === t ? void 0 : t.length) >= 1) {
                    for (var s = 0; s < e.teamMembers.length; s++) {
                        var n, a = " col-lg-3";
                        if (!0 === e.teamMembers[s].team.includes("External"))
                            if (1 == e.showExternal)
                                i.push((0,
                                l.jsx)(u.Z, {
                                    colWidth: a,
                                    hideShowClass: "",
                                    headshot: (null === (n = e.teamMembers[s].photo) || void 0 === n ? void 0 : n.url) + "?width=250",
                                    name: e.teamMembers[s].name,
                                    jobTitle: e.teamMembers[s].jobTitle,
                                    description: e.teamMembers[s].description,
                                    linkedin: e.teamMembers[s].linkedIn && e.teamMembers[s].linkedIn.url,
                                    phone: e.teamMembers[s].phone,
                                    email: e.teamMembers[s].email,
                                    colour: e.colour
                                }));
                        if (a = e.teamMembers.length <= 3 ? " col-lg-4 col-xl-4 " : 4 === e.teamMembers.length ? " col-lg-6 col-xl-3 " : " col-lg-4 col-xl-3 ",
                        void 0 != e.teamMembers[s].location || !1 === e.teamMembers[s].team.includes("External")) {
                            var o, r, c, d;
                            if ((null === (o = e.teamMembers[s].location) || void 0 === o ? void 0 : o.includes(v)) && ("" == f || "All departments" == f))
                                i.push((0,
                                l.jsx)(u.Z, {
                                    colWidth: a,
                                    hideShowClass: "",
                                    headshot: (null === (r = e.teamMembers[s].photo) || void 0 === r ? void 0 : r.url) + "?width=250",
                                    name: e.teamMembers[s].name,
                                    jobTitle: e.teamMembers[s].jobTitle,
                                    description: e.teamMembers[s].description,
                                    linkedin: e.teamMembers[s].linkedIn && e.teamMembers[s].linkedIn.url,
                                    phone: e.teamMembers[s].phone,
                                    email: e.teamMembers[s].email,
                                    colour: e.colour
                                }, s));
                            if (e.teamMembers[s].team.includes(f) && ("" == v || "All locations" == v))
                                i.push((0,
                                l.jsx)(u.Z, {
                                    colWidth: a,
                                    hideShowClass: "",
                                    headshot: (null === (c = e.teamMembers[s].photo) || void 0 === c ? void 0 : c.url) + "?width=250",
                                    name: e.teamMembers[s].name,
                                    jobTitle: e.teamMembers[s].jobTitle,
                                    description: e.teamMembers[s].description,
                                    linkedin: e.teamMembers[s].linkedIn && e.teamMembers[s].linkedIn.url,
                                    phone: e.teamMembers[s].phone,
                                    email: e.teamMembers[s].email,
                                    colour: e.colour
                                }, s));
                            if (e.teamMembers[s].team.includes(f))
                                if (e.teamMembers[s].location.includes(v))
                                    i.push((0,
                                    l.jsx)(u.Z, {
                                        colWidth: a,
                                        hideShowClass: "",
                                        headshot: (null === (d = e.teamMembers[s].photo) || void 0 === d ? void 0 : d.url) + "?width=250",
                                        name: e.teamMembers[s].name,
                                        jobTitle: e.teamMembers[s].jobTitle,
                                        description: e.teamMembers[s].description,
                                        linkedin: e.teamMembers[s].linkedIn && e.teamMembers[s].linkedIn.url,
                                        phone: e.teamMembers[s].phone,
                                        email: e.teamMembers[s].email,
                                        colour: e.colour
                                    }, s))
                        }
                        "All departments" == f && "All locations" == v && !1 === e.teamMembers[s].team.includes("External") && i.push((0,
                        l.jsx)(u.Z, {
                            colWidth: a,
                            hideShowClass: "",
                            headshot: e.teamMembers[s].photo.url + "?width=250",
                            name: e.teamMembers[s].name,
                            jobTitle: e.teamMembers[s].jobTitle,
                            description: e.teamMembers[s].description,
                            linkedin: e.teamMembers[s].linkedIn && e.teamMembers[s].linkedIn.url,
                            phone: e.teamMembers[s].phone,
                            email: e.teamMembers[s].email,
                            colour: e.colour
                        }, s))
                    }
                    return i.length < 1 ? S(!0) : S(!1),
                    i
                }
                return i
            }
              , R = function(e) {
                x(e.target.value)
            }
              , A = function(e) {
                g(e.target.value),
                k(e.target.value)
            }
              , E = function() {
                var t, i = [];
                null === (t = e.teamMembers) || void 0 === t || t.map((function(e, t) {
                    void 0 != e.location && "External" != e.team && (e.location.length > 1 && (e.team != w && "All departments" != w || e.location.map((function(e, t) {
                        i.push(e)
                    }
                    ))),
                    1 == e.location.length && (e.team != w && "All departments" != w || i.push(e.location)))
                }
                ));
                var s, n = i.length, a = [], o = {};
                for (s = 0; s < n; s++)
                    o[i[s]] = 0;
                for (s in o)
                    a.push((0,
                    l.jsx)("li", {
                        children: (0,
                        l.jsx)("button", {
                            value: s,
                            className: "dropdown-item",
                            onClick: function(e) {
                                return R(e)
                            },
                            children: s
                        })
                    }));
                return a
            }
              , Z = function() {
                var t, i = [];
                null === (t = e.teamMembers) || void 0 === t || t.map((function(e, t) {
                    void 0 != e.team && e.team.map((function(e, t) {
                        "External" != e && i.push(e)
                    }
                    ))
                }
                ));
                var s, n = i.length, a = [], o = {};
                for (s = 0; s < n; s++)
                    o[i[s]] = 0;
                for (s in o)
                    a.push((0,
                    l.jsx)("li", {
                        children: (0,
                        l.jsx)("button", {
                            value: s,
                            className: "dropdown-item",
                            onClick: function(e) {
                                return A(e)
                            },
                            children: s
                        })
                    }));
                return a
            };
            return (0,
            l.jsxs)(l.Fragment, {
                children: [(0,
                l.jsx)("div", {
                    className: "container-fluid team-tile-filters",
                    children: (0,
                    l.jsx)("div", {
                        className: "container",
                        children: (0,
                        l.jsxs)("div", {
                            className: "row filters py-5 " + "".concat(e.showFilters ? "" : " d-none"),
                            children: [(0,
                            l.jsx)("div", {
                                className: "col-sm-6 col-md-4 col-lg-4 col-xl-3",
                                children: (0,
                                l.jsxs)(h.a, {
                                    initialText: f.length > 2 ? f : "Filter by department",
                                    children: [(0,
                                    l.jsx)("li", {
                                        children: (0,
                                        l.jsx)("button", {
                                            value: "All departments",
                                            className: "dropdown-item",
                                            onClick: function(e) {
                                                return A(e)
                                            },
                                            children: "All departments"
                                        })
                                    }), (0,
                                    l.jsx)(Z, {})]
                                })
                            }), (0,
                            l.jsx)("div", {
                                className: "col-sm-6 col-md-4 col-lg-4 col-xl-3",
                                children: (0,
                                l.jsxs)(h.a, {
                                    initialText: v.length > 2 ? v : "Filter by location",
                                    children: [(0,
                                    l.jsx)("li", {
                                        children: (0,
                                        l.jsx)("button", {
                                            value: "All locations",
                                            className: "dropdown-item",
                                            onClick: function(e) {
                                                return R(e)
                                            },
                                            children: "All locations"
                                        })
                                    }), (0,
                                    l.jsx)(E, {})]
                                })
                            })]
                        })
                    })
                }), (0,
                l.jsxs)("div", {
                    className: "container team-tile-list ",
                    children: [(0,
                    l.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        l.jsx)("div", {
                            className: "col col-lg-8",
                            children: e.headingandcopy ? c.$h.markMedownRich(e.headingandcopy) : (0,
                            l.jsxs)(l.Fragment, {
                                children: [e.heading ? (0,
                                l.jsx)("h2", {
                                    className: "mt-5 text-center",
                                    children: e.heading
                                }) : null, e.copy ? (0,
                                l.jsx)("p", {
                                    children: e.copy
                                }) : null]
                            })
                        })
                    }), (0,
                    l.jsxs)("div", {
                        className: "row justify-content-center mt-5",
                        children: [y ? (0,
                        l.jsx)("p", {
                            children: "We couldn't find anyone in that team and location, alter the filters to update your results."
                        }) : "", (0,
                        l.jsx)(I, {})]
                    })]
                })]
            })
        }
        var v = !0;
        function x(e) {
            var t, i, s = e.data.content, u = e.data.allTeamMember, h = e.data.allNews;
            "Solid Green" === s.tint ? i = "green" : "Solid Pink" === s.tint && (i = "purple");
            (0,
            m.useRouter)().query.filter;
            return (0,
            l.jsxs)(n.Z, {
                id: "root",
                className: "some-class-name complaints-page",
                children: [(0,
                l.jsx)(c.$h.PageHead, {
                    siteURL: s.url.split("foresightgroup/").join(""),
                    OGimageURL: (null === (t = s.metaImage) || void 0 === t ? void 0 : t.url) ? s.metaImage.url : "",
                    OGtitle: s.metaTitle ? s.metaTitle : "",
                    OGpageDescription: s.metaDescription ? s.metaDescription : ""
                }), (0,
                l.jsx)(d.Z, {
                    image: s.image.url + "?width=1080",
                    text: s.heroText,
                    cta: s.herocTALink,
                    level: 2,
                    tint: i
                }), (0,
                l.jsx)(b, {
                    teamMembers: u.items,
                    showFilters: !0,
                    colour: "purple"
                }), (0,
                l.jsx)(o.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "Latest News & Insights",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: h.items.map((function(e, t) {
                        var i = e.datePublished.split("T")[0];
                        return i = new Date(i),
                        (0,
                        l.jsx)(r.n, {
                            backgroundImage: e.image && e.image.url,
                            category: e.category,
                            time: e.duration,
                            date: i.toLocaleDateString("en-UK"),
                            heading: e.title,
                            description: e.description,
                            url: e.url.split("all-news/").join(""),
                            ctaText: e.cTALabel,
                            responsiveClasses: ""
                        }, t)
                    }
                    ))
                }), (0,
                l.jsx)(a.Z, {})]
            })
        }
    },
    828: function(e, t, i) {
        "use strict";
        i.d(t, {
            Z: function() {
                return n
            }
        });
        var l = i(13375);
        var s = i(91566);
        function n(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || (0,
            l.Z)(e, t) || (0,
            s.Z)(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
    }
}, function(e) {
    e.O(0, [7948, 7642, 2583, 9407, 3184, 3983, 9774, 2888, 179], (function() {
        return t = 69034,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
