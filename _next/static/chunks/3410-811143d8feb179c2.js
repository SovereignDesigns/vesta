"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3410], {
    73410: function(e, t, l) {
        l.d(t, {
            Z: function() {
                return m
            }
        });
        var s = l(85893)
          , a = l(67294)
          , i = l(16482)
          , n = l(72859)
          , o = l(45879)
          , r = l(11163)
          , c = l(47041);
        function m(e) {
            var t = (0,
            r.useRouter)()
              , l = t.query.department
              , m = t.query.location
              , d = (0,
            a.useState)(!1)
              , u = d[0]
              , h = (d[1],
            (0,
            a.useState)(null))
              , b = (h[0],
            h[1])
              , p = (0,
            a.useState)("")
              , j = p[0]
              , x = p[1]
              , v = (0,
            a.useState)("")
              , f = v[0]
              , M = v[1]
              , g = (0,
            a.useState)("")
              , N = g[0]
              , k = (g[1],
            (0,
            a.useState)(""))
              , w = (k[0],
            k[1])
              , S = (0,
            a.useState)("")
              , y = S[0]
              , _ = S[1]
              , C = (0,
            a.useState)([])
              , I = C[0]
              , R = C[1]
              , T = (0,
            a.useState)("All departments")
              , A = T[0]
              , W = T[1]
              , E = (0,
            a.useState)(!1)
              , L = E[0]
              , Z = E[1]
              , F = (0,
            c.getCookie)("audience")
              , q = (0,
            a.useState)(e.teamMembers)
              , z = (q[0],
            q[1],
            (0,
            s.jsxs)(s.Fragment, {
                children: ["Load More ", (0,
                s.jsx)("span", {
                    className: "btn-icon",
                    children: "+"
                })]
            }))
              , G = (0,
            s.jsxs)(s.Fragment, {
                children: ["Show Less ", (0,
                s.jsx)("span", {
                    className: "btn-icon",
                    children: "-"
                })]
            })
              , $ = (0,
            a.useRef)(null);
            (0,
            a.useEffect)((function() {
                b(!1 === u ? z : G),
                x(m || "All locations"),
                M(l || "All departments"),
                "/about-us/people" == t.pathname && ("private-investor" == F && (M(l || "Retail Investor Relations"),
                W(l || "Retail Investor Relations")),
                "institutional-investor" == F && (M(l || "Institutional Investor Relations"),
                W(l || "Institutional Investor Relations")),
                "financial-intermediary" == F && (M(l || "Retail Sales"),
                W(l || "Retail Sales")),
                "sme" == F && (M(l || "Private Equity"),
                W(l || "Private Equity"))),
                "/resources/bdm" == t.pathname && (M(l || "Retail Sales"),
                W(l || "Retail Sales"))
            }
            ), [u, I, y]);
            var B = function(e) {
                var t = e.target.value.trim().toLowerCase().replace(/\s/g, "");
                w(t),
                D()
            }
              , D = function() {
                var t = $.current.value.trim().toLowerCase().replace(/\s/g, "");
                _(t);
                var l = e.teamMembers.filter((function(e) {
                    var l = e.postcodes.split(",").map((function(e) {
                        return e.trim().toLowerCase()
                    }
                    ));
                    if (/^[a-z]\d+$/i.test(t))
                        return l.some((function(e) {
                            return e.toLowerCase().substring(0, 1).startsWith(t.substring(0, 1))
                        }
                        ));
                    if ("cm" === t)
                        return l.some((function(e) {
                            return "cm" === e.toLowerCase()
                        }
                        ));
                    if (!/^(cm|bn)\d+/i.test(t))
                        return l.some((function(e) {
                            return e.toLowerCase().includes(t.substring(0, 2))
                        }
                        ));
                    if ("cm23" === t || "cm24" === t)
                        return l.includes(t);
                    var s = t.match(/^(cm|bn)\d+[a-z0-9]*$/i)
                      , a = t.match(/^[a-z]+\d*/i);
                    if (s) {
                        var i = s[0];
                        return l.some((function(e) {
                            return e.startsWith(i.substring(0, 4))
                        }
                        ))
                    }
                    if (a && !s) {
                        var n = a[0];
                        return l.some((function(e) {
                            return e.startsWith(n)
                        }
                        ))
                    }
                    return !1
                }
                ));
                R(l)
            }
              , P = function() {
                var t, l = [];
                if ((null === (t = e.teamMembers) || void 0 === t ? void 0 : t.length) >= 1) {
                    for (var a = 0; a < e.teamMembers.length; a++) {
                        var i, o = " col-lg-3";
                        if (y)
                            return I.map((function(t, l) {
                                var a;
                                return (0,
                                s.jsx)(n.Z, {
                                    colWidth: "col-lg-4 col-xl-3",
                                    hideShowClass: "",
                                    headshot: (null === (a = t.photo) || void 0 === a ? void 0 : a.url) + "?width=250",
                                    name: t.name,
                                    jobTitle: t.jobTitle,
                                    description: t.description,
                                    linkedin: t.linkedIn && t.linkedIn.url,
                                    phone: t.phone,
                                    email: t.email,
                                    colour: e.colour
                                }, l)
                            }
                            ));
                        if (!0 === e.teamMembers[a].team.includes("External"))
                            if (1 == e.showExternal)
                                l.push((0,
                                s.jsx)(n.Z, {
                                    colWidth: o,
                                    hideShowClass: "",
                                    headshot: (null === (i = e.teamMembers[a].photo) || void 0 === i ? void 0 : i.url) + "?width=250",
                                    name: e.teamMembers[a].name,
                                    jobTitle: e.teamMembers[a].jobTitle,
                                    description: e.teamMembers[a].description,
                                    linkedin: e.teamMembers[a].linkedIn && e.teamMembers[a].linkedIn.url,
                                    phone: e.teamMembers[a].phone,
                                    email: e.teamMembers[a].email,
                                    colour: e.colour
                                }));
                        if (o = e.teamMembers.length <= 3 ? " col-lg-4 col-xl-4 " : 4 === e.teamMembers.length ? " col-lg-6 col-xl-3 " : " col-lg-4 col-xl-3 ",
                        void 0 != e.teamMembers[a].location || !1 === e.teamMembers[a].team.includes("External")) {
                            var r, c, m, d;
                            if ((null === (r = e.teamMembers[a].location) || void 0 === r ? void 0 : r.includes(j)) && ("" == f || "All departments" == f) && ("" == N || I))
                                l.push((0,
                                s.jsx)(n.Z, {
                                    colWidth: o,
                                    hideShowClass: "",
                                    headshot: (null === (c = e.teamMembers[a].photo) || void 0 === c ? void 0 : c.url) + "?width=250",
                                    name: e.teamMembers[a].name,
                                    jobTitle: e.teamMembers[a].jobTitle,
                                    description: e.teamMembers[a].description,
                                    linkedin: e.teamMembers[a].linkedIn && e.teamMembers[a].linkedIn.url,
                                    phone: e.teamMembers[a].phone,
                                    email: e.teamMembers[a].email,
                                    colour: e.colour
                                }, a));
                            if (e.teamMembers[a].team.includes(f) && ("" == j || "All locations" == j) && ("" == N || I))
                                l.push((0,
                                s.jsx)(n.Z, {
                                    colWidth: o,
                                    hideShowClass: "",
                                    headshot: (null === (m = e.teamMembers[a].photo) || void 0 === m ? void 0 : m.url) + "?width=250",
                                    name: e.teamMembers[a].name,
                                    jobTitle: e.teamMembers[a].jobTitle,
                                    description: e.teamMembers[a].description,
                                    linkedin: e.teamMembers[a].linkedIn && e.teamMembers[a].linkedIn.url,
                                    phone: e.teamMembers[a].phone,
                                    email: e.teamMembers[a].email,
                                    colour: e.colour
                                }, a));
                            if (e.teamMembers[a].team.includes(f))
                                if (e.teamMembers[a].location.includes(j) && ("" == N || I))
                                    l.push((0,
                                    s.jsx)(n.Z, {
                                        colWidth: o,
                                        hideShowClass: "",
                                        headshot: (null === (d = e.teamMembers[a].photo) || void 0 === d ? void 0 : d.url) + "?width=250",
                                        name: e.teamMembers[a].name,
                                        jobTitle: e.teamMembers[a].jobTitle,
                                        description: e.teamMembers[a].description,
                                        linkedin: e.teamMembers[a].linkedIn && e.teamMembers[a].linkedIn.url,
                                        phone: e.teamMembers[a].phone,
                                        email: e.teamMembers[a].email,
                                        colour: e.colour
                                    }, a))
                        }
                        "All departments" != f || "All locations" != j || !1 !== e.teamMembers[a].team.includes("External") || "" != N && !I || l.push((0,
                        s.jsx)(n.Z, {
                            colWidth: o,
                            hideShowClass: "",
                            headshot: e.teamMembers[a].photo.url + "?width=250",
                            name: e.teamMembers[a].name,
                            jobTitle: e.teamMembers[a].jobTitle,
                            description: e.teamMembers[a].description,
                            linkedin: e.teamMembers[a].linkedIn && e.teamMembers[a].linkedIn.url,
                            phone: e.teamMembers[a].phone,
                            email: e.teamMembers[a].email,
                            colour: e.colour
                        }, a))
                    }
                    return l.length < 1 ? Z(!0) : Z(!1),
                    l
                }
                return l
            }
              , H = function(e) {
                x(e.target.value)
            }
              , K = function() {
                var t, l = [];
                null === (t = e.teamMembers) || void 0 === t || t.map((function(e, t) {
                    void 0 != e.location && "External" != e.team && (e.location.length > 1 && (e.team != A && "All departments" != A || e.location.map((function(e, t) {
                        l.push(e)
                    }
                    ))),
                    1 == e.location.length && (e.team != A && "All departments" != A || l.push(e.location)))
                }
                ));
                var a, i = l.length, n = [], o = {};
                for (a = 0; a < i; a++)
                    o[l[a]] = 0;
                for (a in o)
                    n.push((0,
                    s.jsx)("li", {
                        children: (0,
                        s.jsx)("button", {
                            value: a,
                            className: "dropdown-item",
                            onClick: function(e) {
                                return H(e)
                            },
                            children: a
                        })
                    }));
                return n
            };
            (0,
            a.useRef)(null);
            return (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsx)("div", {
                    className: "container-fluid team-tile-filters",
                    children: (0,
                    s.jsx)("div", {
                        className: "container",
                        children: (0,
                        s.jsxs)("div", {
                            className: "row filters py-5 " + "".concat(e.showFilters ? "" : " d-none"),
                            children: [(0,
                            s.jsx)("div", {
                                className: "col-sm-6 col-md-4 col-lg-3 col-xl-3",
                                children: (0,
                                s.jsxs)(o.a, {
                                    initialText: j.length > 2 ? j : "Filter by location",
                                    children: [(0,
                                    s.jsx)("li", {
                                        children: (0,
                                        s.jsx)("button", {
                                            value: "All locations",
                                            className: "dropdown-item",
                                            onClick: function(e) {
                                                return H(e)
                                            },
                                            children: "All locations"
                                        })
                                    }), (0,
                                    s.jsx)(K, {})]
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "col-sm-6 col-md-4 col-lg-1 col-xl-1 d-flex align-items-center justify-content-center",
                                children: (0,
                                s.jsx)("span", {
                                    children: "Or:"
                                })
                            }), (0,
                            s.jsx)("div", {
                                className: "col-sm-6 col-md-4 col-lg-3 col-xl-3",
                                children: (0,
                                s.jsx)("input", {
                                    placeholder: "Search by postcode",
                                    type: "text",
                                    ref: $,
                                    onChange: B,
                                    onKeyDown: B,
                                    className: "form-control postcode-input"
                                })
                            })]
                        })
                    })
                }), (0,
                s.jsxs)("div", {
                    className: "container team-tile-list ",
                    children: [(0,
                    s.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0,
                        s.jsx)("div", {
                            className: "col col-lg-8",
                            children: e.headingandcopy ? i.$h.markMedownRich(e.headingandcopy) : (0,
                            s.jsxs)(s.Fragment, {
                                children: [e.heading ? (0,
                                s.jsx)("h2", {
                                    className: "mt-5 text-center",
                                    children: e.heading
                                }) : null, e.copy ? (0,
                                s.jsx)("p", {
                                    children: e.copy
                                }) : null]
                            })
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "row mt-5 ".concat(I ? "justify-content-start" : "justify-content-center"),
                        children: [L ? (0,
                        s.jsx)("p", {
                            children: "We couldn't find anyone in that team and location, alter the filters to update your results."
                        }) : "", (0,
                        s.jsx)(P, {})]
                    })]
                })]
            })
        }
    },
    72859: function(e, t, l) {
        var s = l(828)
          , a = l(85893)
          , i = l(67294)
          , n = l(67814)
          , o = l(93024)
          , r = l(16482)
          , c = l(41664)
          , m = l.n(c);
        t.Z = function(e) {
            var t = (0,
            s.Z)(i.useState(!1), 2)
              , l = (t[0],
            t[1],
            (0,
            i.useState)(!1))
              , c = l[0]
              , d = l[1]
              , u = (0,
            i.useState)(!1)
              , h = (u[0],
            u[1],
            (0,
            i.useState)(null))
              , b = (h[0],
            h[1],
            function() {
                d(!c)
            }
            );
            return (0,
            a.jsxs)("div", {
                className: "col-12 col-md-6 mb-4 team-tile-list__tile" + e.colWidth + e.hideShowClass,
                children: [(0,
                a.jsxs)("button", {
                    className: "team-tile-list__button button",
                    onClick: function() {
                        return b()
                    },
                    children: [(0,
                    a.jsx)("div", {
                        className: "team-tile-list__image-container",
                        children: (0,
                        a.jsx)("img", {
                            loading: "lazy",
                            src: e.headshot,
                            className: "team-tile-list__image"
                        })
                    }), (0,
                    a.jsxs)("div", {
                        className: "team-tile-list__details ".concat("purple" === e.colour ? "team-tile-list__details--purple" : "team-tile-list__details--white"),
                        children: [(0,
                        a.jsx)("h3", {
                            className: " tc-white",
                            children: e.name
                        }), (0,
                        a.jsx)("p", {
                            className: "tc-light-pink",
                            children: e.jobTitle
                        }), (0,
                        a.jsx)("span", {
                            className: "team-tile-list__cta",
                            children: (0,
                            a.jsx)(n.G, {
                                icon: ["fal", "chevron-right"]
                            })
                        })]
                    })]
                }), (0,
                a.jsx)("div", {
                    className: "team-tile-list__modal modal fade ".concat(!0 === c ? "show" : ""),
                    id: "staticBackdrop",
                    "data-bs-backdrop": "static",
                    "data-bs-keyboard": "false",
                    "aria-labelledby": "staticBackdropLabel",
                    "aria-hidden": "true",
                    children: (0,
                    a.jsx)("div", {
                        className: "modal-dialog modal-dialog-centered modal-lg modal-fullscreen-sm-down",
                        children: (0,
                        a.jsxs)("div", {
                            className: "modal-content",
                            children: [(0,
                            a.jsx)("div", {
                                className: "modal-header",
                                children: (0,
                                a.jsx)("button", {
                                    type: "button",
                                    className: "btn-close",
                                    "data-bs-dismiss": "modal",
                                    "aria-label": "Close",
                                    onClick: function() {
                                        return b()
                                    }
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "modal-body",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "container-fluid",
                                    children: [(0,
                                    a.jsx)("div", {
                                        className: "row",
                                        children: (0,
                                        a.jsx)("div", {
                                            className: "col",
                                            children: (0,
                                            a.jsxs)("h3", {
                                                children: [e.name, e.linkedin && (0,
                                                a.jsx)(m(), {
                                                    href: e.linkedin,
                                                    children: (0,
                                                    a.jsx)("a", {
                                                        target: "_blank",
                                                        children: (0,
                                                        a.jsx)(n.G, {
                                                            icon: o.D9H
                                                        })
                                                    })
                                                }), " "]
                                            })
                                        })
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "row pt-3 pb-5",
                                        children: [(0,
                                        a.jsx)("div", {
                                            className: "col-md-4 pb-3",
                                            children: (0,
                                            a.jsx)("img", {
                                                src: e.headshot,
                                                className: "team-tile-list__modal-image"
                                            })
                                        }), (0,
                                        a.jsxs)("div", {
                                            className: "col-md-8",
                                            children: [(0,
                                            a.jsx)("p", {
                                                className: "tc-dark-grey",
                                                children: (0,
                                                a.jsx)("strong", {
                                                    children: e.jobTitle
                                                })
                                            }), (0,
                                            a.jsxs)("div", {
                                                children: [e.description ? r.$h.markMedownRich(e.description) : null, e.phone && (0,
                                                a.jsxs)("p", {
                                                    children: [(0,
                                                    a.jsx)(n.G, {
                                                        icon: ["fal", "phone"]
                                                    }), (0,
                                                    a.jsx)("a", {
                                                        href: "tel:".concat(e.phone),
                                                        children: e.phone
                                                    })]
                                                }), e.email && (0,
                                                a.jsxs)("p", {
                                                    children: [(0,
                                                    a.jsx)(n.G, {
                                                        icon: ["fal", "envelope"]
                                                    }), (0,
                                                    a.jsx)("a", {
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
    }
}]);
