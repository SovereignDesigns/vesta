"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3184], {
    45879: function(e, n, t) {
        t.d(n, {
            a: function() {
                return i
            }
        });
        var a = t(85893)
          , r = t(67294)
          , s = t(67814)
          , i = function(e) {
            var n = (0,
            r.useState)()
              , t = n[0]
              , i = n[1];
            return (0,
            r.useEffect)((function() {
                i(Math.floor(99 * Math.random() + 1))
            }
            ), []),
            (0,
            a.jsxs)("div", {
                className: "dropdown customDropdown",
                children: [(0,
                a.jsxs)("button", {
                    className: "btn dropdown-toggle",
                    type: "button",
                    id: "dropdownMenuButton" + t,
                    "data-bs-toggle": "dropdown",
                    "aria-expanded": "false",
                    children: [e.initialText, (0,
                    a.jsx)(s.G, {
                        icon: ["fal", "chevron-down"],
                        color: "#33268D"
                    })]
                }), (0,
                a.jsx)("ul", {
                    className: "dropdown-menu",
                    "aria-labelledby": "dropdownMenuButton" + t,
                    children: e.children
                })]
            })
        }
    },
    62284: function(e, n, t) {
        var a = t(85893)
          , r = t(67294)
          , s = t(9198)
          , i = t.n(s)
          , o = (t(18698),
        t(16482));
        n.Z = function(e) {
            var n = (0,
            r.useState)(new Date)
              , t = n[0]
              , s = n[1]
              , l = e.props;
            return "text" === (null === l || void 0 === l ? void 0 : l.type) ? (0,
            a.jsxs)(a.Fragment, {
                children: [e.label ? (0,
                a.jsx)("label", {
                    htmlFor: l.alias,
                    className: "form-label",
                    children: l.caption
                }) : null, (0,
                a.jsx)("input", {
                    type: l.settings.fieldType ? l.settings.fieldType : "text",
                    id: l.alias,
                    name: l.alias,
                    className: "form-control",
                    required: l.required,
                    placeholder: l.required ? l.settings.placeholder + " *" : l.settings.placeholder,
                    "aria-label": l.settings.placeholder,
                    pattern: l.settings.pattern,
                    defaultValue: l.settings.defaultValue,
                    readOnly: e.readOnly
                })]
            }) : "hidden" === (null === l || void 0 === l ? void 0 : l.type) ? (0,
            a.jsxs)(a.Fragment, {
                children: [e.label ? (0,
                a.jsx)("label", {
                    htmlFor: l.alias,
                    className: "form-label",
                    children: l.caption
                }) : null, (0,
                a.jsx)("input", {
                    type: "hidden",
                    id: l.alias,
                    name: l.alias,
                    required: l.required,
                    placeholder: l.settings.placeholder,
                    "aria-label": l.settings.placeholder,
                    pattern: l.settings.pattern,
                    defaultValue: l.settings.DefaultValue,
                    readOnly: e.readOnly,
                    value: e.value
                })]
            }) : "dataConsent" === (null === l || void 0 === l ? void 0 : l.type) ? (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("input", {
                    type: "checkbox",
                    className: "form-check-input",
                    id: l.alias,
                    name: l.alias,
                    required: l.required
                }), (0,
                a.jsx)("label", {
                    htmlFor: l.alias,
                    className: "form-check-label",
                    children: o.$h.markMedownRich(null === l || void 0 === l ? void 0 : l.caption)
                })]
            }) : "textarea" === (null === l || void 0 === l ? void 0 : l.type) ? (0,
            a.jsxs)(a.Fragment, {
                children: [e.label ? (0,
                a.jsx)("label", {
                    htmlFor: l.alias,
                    className: "form-label",
                    children: l.caption
                }) : null, (0,
                a.jsx)("textarea", {
                    className: "form-control",
                    id: l.alias,
                    name: l.alias,
                    placeholder: l.settings.placeholder,
                    rows: l.settings.numberOfRows,
                    required: l.required
                })]
            }) : "select" === (null === l || void 0 === l ? void 0 : l.type) ? (0,
            a.jsxs)(a.Fragment, {
                children: [e.label ? (0,
                a.jsx)("label", {
                    htmlFor: l.alias,
                    className: "form-label",
                    children: l.caption
                }) : null, (0,
                a.jsxs)("select", {
                    className: "form-select",
                    "aria-label": l.settings.placeholder,
                    id: l.alias,
                    name: l.alias,
                    children: [(0,
                    a.jsx)("option", {
                        disabled: !0,
                        children: l.settings.defaultValue
                    }), l.preValues.map((function(e, n) {
                        return (0,
                        a.jsx)("option", {
                            value: e,
                            children: e
                        }, n)
                    }
                    ))]
                })]
            }) : "date" === (null === l || void 0 === l ? void 0 : l.type) ? (0,
            a.jsxs)(a.Fragment, {
                children: [e.label ? (0,
                a.jsx)("label", {
                    htmlFor: l.alias,
                    className: "form-label",
                    children: l.caption
                }) : null, (0,
                a.jsx)(i(), {
                    selected: t,
                    onChange: function(e) {
                        return s(e)
                    },
                    startDate: t,
                    minDate: new Date,
                    isClearable: !1,
                    dateFormat: "dd/MM/yyyy",
                    className: "form-control",
                    name: l.alias
                })]
            }) : (0,
            a.jsx)(a.Fragment, {})
        }
    },
    13184: function(e, n, t) {
        t.d(n, {
            Z: function() {
                return A
            }
        });
        var a = t(85893)
          , r = t(67294)
          , s = t(47568)
          , i = t(10092)
          , o = t(25675)
          , l = t.n(o)
          , c = t(41664)
          , u = t.n(c)
          , d = t(11163)
          , m = t.n(d)
          , p = t(45879)
          , h = t(67814)
          , g = t(93024)
          , f = t(16482)
          , v = function() {
            var e = (0,
            d.useRouter)()
              , n = (0,
            r.useState)()
              , t = n[0]
              , o = n[1]
              , c = 'query footer {\n    content(id: "b35690be-c02f-44b2-8e56-664b325b2a73") {\n      ... on Settings {\n        footerCopy\n        legalLinks {\n          ... on Link {\n            name\n            url\n            target\n          }\n        }\n        otherLinks {\n          name\n          url\n          target\n        }\n      }\n    }\n  }';
            (0,
            r.useEffect)((function() {
                function e() {
                    return (e = (0,
                    s.Z)((function() {
                        var e;
                        return (0,
                        i.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, f.$h.getUmbracoContentQLByID(c)];
                            case 1:
                                return e = n.sent(),
                                o(e),
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
            ), [c]);
            return (0,
            a.jsx)("footer", {
                className: "footer py-5",
                style: {
                    display: "/500" === e.asPath ? "none" : "block"
                },
                children: (0,
                a.jsx)("div", {
                    className: "container-fluid",
                    children: (0,
                    a.jsxs)("div", {
                        className: "container",
                        children: [(0,
                        a.jsxs)("div", {
                            className: "row",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "col-sm-12 col-lg-3 d-none d-lg-flex flex-column",
                                children: [(0,
                                a.jsx)("h3", {
                                    children: "Follow us"
                                }), (0,
                                a.jsxs)("div", {
                                    className: "d-flex social-links w-100 mb-4",
                                    children: [(0,
                                    a.jsx)("a", {
                                        href: "https://www.linkedin.com/company/foresight-group",
                                        target: "_blank",
                                        children: (0,
                                        a.jsx)(h.G, {
                                            icon: g.D9H
                                        })
                                    }), (0,
                                    a.jsx)("a", {
                                        href: "https://x.com/foresightgroup",
                                        target: "_blank",
                                        children: (0,
                                        a.jsx)(h.G, {
                                            icon: g.NCc
                                        })
                                    }), (0,
                                    a.jsx)("a", {
                                        href: "https://www.instagram.com/foresightgroup/",
                                        target: "_blank",
                                        children: (0,
                                        a.jsx)(h.G, {
                                            icon: g.Zzi
                                        })
                                    }), (0,
                                    a.jsx)("a", {
                                        href: "https://foresightgroup.libsyn.com/",
                                        target: "_blank",
                                        children: (0,
                                        a.jsx)(h.G, {
                                            icon: ["fal", "podcast"]
                                        })
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "position-relative mb-4",
                                    children: [(0,
                                    a.jsx)("h3", {
                                        children: "Visit our other sites"
                                    }), (0,
                                    a.jsxs)(p.a, {
                                        initialText: "Select site",
                                        children: [(0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)("a", {
                                                href: "https://fsfl.foresightgroup.eu/",
                                                role: "menuitem",
                                                className: "dropdown-item",
                                                target: '"_blank"',
                                                children: "Foresight Solar Fund Limited"
                                            })
                                        }), (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)("a", {
                                                href: "https://www.foresightwilliams.co.uk/",
                                                role: "menuitem",
                                                className: "dropdown-item",
                                                target: "_blank",
                                                children: "Foresight Williams Technology"
                                            })
                                        }), (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)("a", {
                                                href: "https://igbf.foresightgroup.eu/",
                                                role: "menuitem",
                                                className: "dropdown-item",
                                                target: "_blank",
                                                children: "Italian Green Bond Fund"
                                            })
                                        }), (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)("a", {
                                                href: "https://jlen.com/",
                                                role: "menuitem",
                                                className: "dropdown-item",
                                                target: "_blank",
                                                children: "JLEN"
                                            })
                                        }), (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)("a", {
                                                href: "https://www.fsg-investors.com/ ",
                                                role: "menuitem",
                                                className: "dropdown-item",
                                                target: "_blank",
                                                children: "Foresight Group Holdings"
                                            })
                                        }), (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)("a", {
                                                href: "https://fsfc.foresightgroup.eu/ ",
                                                role: "menuitem",
                                                className: "dropdown-item",
                                                target: "_blank",
                                                children: "Foresight Sustainable Forestry Company"
                                            })
                                        })]
                                    })]
                                }), (0,
                                a.jsxs)("div", {
                                    className: "d-flex",
                                    children: [(0,
                                    a.jsx)(l(), {
                                        className: "green-economy",
                                        src: "/assets/images/green-economy.png",
                                        width: 97,
                                        height: 97,
                                        quality: 95
                                    }), (0,
                                    a.jsx)(l(), {
                                        className: "green-economy",
                                        src: "/assets/images/carbon-neutral.png",
                                        width: 97,
                                        height: 97,
                                        quality: 95
                                    })]
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "col-6 col-lg-3",
                                children: [(0,
                                a.jsx)("h3", {
                                    children: "Legal information"
                                }), (0,
                                a.jsx)("ul", {
                                    children: null === t || void 0 === t ? void 0 : t.content.legalLinks.map((function(e, n) {
                                        return (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)(u(), {
                                                href: e.url.split("/foresightgroup").pop(),
                                                children: (0,
                                                a.jsx)("a", {
                                                    role: "menuitem",
                                                    target: e.target,
                                                    children: e.name
                                                })
                                            })
                                        }, n)
                                    }
                                    ))
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "col-6 col-lg-3",
                                children: [(0,
                                a.jsx)("h3", {
                                    className: "title",
                                    children: "Other information"
                                }), (0,
                                a.jsx)("ul", {
                                    children: null === t || void 0 === t ? void 0 : t.content.otherLinks.map((function(e, n) {
                                        return (0,
                                        a.jsx)("li", {
                                            children: (0,
                                            a.jsx)(u(), {
                                                href: e.url.split("/foresightgroup").pop(),
                                                children: (0,
                                                a.jsx)("a", {
                                                    role: "menuitem",
                                                    target: e.target,
                                                    children: e.name
                                                })
                                            })
                                        }, n)
                                    }
                                    ))
                                })]
                            }), (0,
                            a.jsxs)("div", {
                                className: "col-sm-12 col-lg-3",
                                children: [(0,
                                a.jsx)("h3", {
                                    className: "title",
                                    children: "Contact us"
                                }), (0,
                                a.jsxs)("ul", {
                                    className: "contact-links",
                                    children: [(0,
                                    a.jsx)("li", {
                                        children: (0,
                                        a.jsx)("a", {
                                            href: "tel:+4402036678100",
                                            children: "+44 (0)20 3667 8100"
                                        })
                                    }), (0,
                                    a.jsx)("li", {
                                        children: (0,
                                        a.jsx)("a", {
                                            href: "mailto:info@foresightgroup.eu",
                                            children: "info@foresightgroup.eu"
                                        })
                                    })]
                                })]
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "row mt-5",
                            children: (0,
                            a.jsx)("div", {
                                className: "col-sm-12 col-lg-4 col-xl-6 order-3 order-lg-1 mt-4 mt-lg-0",
                                children: (0,
                                a.jsxs)("button", {
                                    className: "manage-cookies",
                                    onClick: function() {
                                        var e;
                                        null === (e = document.querySelector(".custom-cookie-box")) || void 0 === e || e.style.setProperty("display", "block", "important")
                                    },
                                    children: ["Manage Cookies ", (0,
                                    a.jsx)(h.G, {
                                        icon: ["fal", "gear"]
                                    })]
                                })
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "row copyright mt-5",
                            children: (0,
                            a.jsxs)("div", {
                                className: "col-sm-12 justify-content-center mt-4",
                                children: [(0,
                                a.jsx)("hr", {}), f.$h.markMedownRich(null === t || void 0 === t ? void 0 : t.content.footerCopy)]
                            })
                        })]
                    })
                })
            })
        }
          , b = [{
            name: "Partner with us",
            url: "/sme"
        }, {
            name: "About us",
            subMenu: [{
                name: "Overview",
                url: "/about-us"
            }, {
                name: "Sustainability",
                url: "/about-us/sustainability"
            }, {
                name: "Diversity, Equity and Inclusion",
                url: "/about-us/diversity-inclusion"
            }]
        }, {
            name: "Our Team",
            url: "/about-us/people"
        }, {
            name: "Portfolio",
            url: "/portfolio"
        }, {
            name: "News",
            url: "/news"
        }]
          , x = t(29815)
          , y = [{
            name: "Divisions",
            subMenu: [{
                name: "Infrastructure",
                url: "/infrastructure"
            }, {
                name: "Private Equity",
                url: "/private-equity"
            }, {
                name: "Foresight Capital Management",
                url: "/capital-management"
            }]
        }, {
            name: "About us",
            subMenu: [{
                name: "Overview",
                url: "/about-us"
            }, {
                name: "People",
                url: "/about-us/people"
            }, {
                name: "Sustainability",
                url: "/about-us/sustainability"
            }, {
                name: "Diversity, Equity and Inclusion",
                url: "/about-us/diversity-inclusion"
            }]
        }, {
            name: "Resources",
            url: "/resources"
        }, {
            name: "News",
            url: "/news"
        }, {
            name: "FSG Shareholders",
            subMenu: [{
                name: "Shareholders",
                url: "/shareholders"
            }, {
                name: "Shareholder Information",
                dropdown: [{
                    name: "Share Price Information",
                    url: "/shareholder-info?tab=1"
                }, {
                    name: "Shareholder Meetings",
                    url: "/shareholder-info?tab=2"
                }, {
                    name: "Financial Calendar",
                    url: "/shareholder-info?tab=3"
                }, {
                    name: "Dividend Policy",
                    url: "/shareholder-info?tab=4"
                }, {
                    name: "Consensus Estimates",
                    url: "/shareholder-info?tab=5"
                }]
            }, {
                name: "Corporate Governance",
                dropdown: [{
                    name: "Board of Directors",
                    url: "/corporate-governance?tab=Board%20of%20Directors"
                }, {
                    name: "Board Responsibilities",
                    url: "/corporate-governance?tab=Board%20Responsibilities"
                }, {
                    name: "Board Committees",
                    url: "/corporate-governance?tab=Board%20Committees"
                }]
            }, {
                name: "Document Library",
                url: "/document-library"
            }, {
                name: "Regulatory News",
                url: "/regulatory-news"
            }]
        }]
          , j = [{
            name: "Divisions",
            subMenu: [{
                name: "Overview",
                url: "/strategies"
            }, {
                name: "Infrastructure",
                url: "/infrastructure"
            }, {
                name: "Private Equity",
                url: "/private-equity"
            }, {
                name: "Foresight Capital Management",
                url: "/capital-management"
            }]
        }, {
            name: "About us",
            subMenu: [{
                name: "Overview",
                url: "/about-us"
            }, {
                name: "People",
                url: "/about-us/people"
            }, {
                name: "Sustainability",
                url: "/about-us/sustainability"
            }, {
                name: "Diversity, Equity and Inclusion",
                url: "/about-us/diversity-inclusion"
            }]
        }, {
            name: "Resources",
            url: "/resources"
        }, {
            name: "News",
            url: "/news"
        }, {
            name: "FSG Shareholders",
            subMenu: [{
                name: "Shareholders",
                url: "/shareholders"
            }, {
                name: "Shareholder Information",
                dropdown: [{
                    name: "Share Price Information",
                    url: "/shareholder-info?tab=1"
                }, {
                    name: "Shareholder Meetings",
                    url: "/shareholder-info?tab=2"
                }, {
                    name: "Financial Calendar",
                    url: "/shareholder-info?tab=3"
                }, {
                    name: "Dividend Policy",
                    url: "/shareholder-info?tab=4"
                }, {
                    name: "Consensus Estimates",
                    url: "/shareholder-info?tab=5"
                }]
            }, {
                name: "Corporate Governance",
                dropdown: [{
                    name: "Board of Directors",
                    url: "/corporate-governance?tab=Board%20of%20Directors"
                }, {
                    name: "Board Responsibilities",
                    url: "/corporate-governance?tab=Board%20Responsibilities"
                }, {
                    name: "Board Committees",
                    url: "/corporate-governance?tab=Board%20Committees"
                }]
            }, {
                name: "Document Library",
                url: "/document-library"
            }, {
                name: "Regulatory News",
                url: "/regulatory-news"
            }]
        }]
          , w = t(10332)
          , N = t(47041)
          , k = function(e) {
            var n, t = e.dropdown, s = (0,
            d.useRouter)(), i = (0,
            r.useState)(""), o = i[0], l = i[1], c = (0,
            N.getCookie)("audience"), u = c;
            (0,
            r.useEffect)((function() {
                "general" == u ? l("General") : "sme" == u ? l("SME") : void 0 == u || void 0 != u && (u.indexOf("-") > -1 ? l(u.replace("-", " ")) : l(u))
            }
            ), []);
            var m = function(e) {
                n = e.target.value,
                u = c,
                (0,
                N.setCookie)("audience", n, {
                    path: "/",
                    maxAge: 2628e3,
                    sameSite: !0
                }),
                "general" == n && (n = ""),
                "/sme" == s.pathname || "/institutional-investor" == s.pathname || "/financial-intermediary" == s.pathname || "/private-investor" == s.pathname || "/" == s.pathname ? s.push("/" + n) : s.reload()
            };
            return (0,
            a.jsx)(p.a, {
                initialText: c ? o : "User segmentation",
                children: t.map((function(e) {
                    return (0,
                    a.jsx)("li", {
                        children: (0,
                        a.jsx)("button", {
                            className: "dropdown-item",
                            value: e.value,
                            onClick: m,
                            children: e.displayName
                        })
                    }, e.value)
                }
                ))
            })
        }
          , C = [{
            displayName: "General",
            value: "general"
        }, {
            displayName: "Private Investor",
            value: "private-investor"
        }, {
            displayName: "Institutional Investor",
            value: "institutional-investor"
        }, {
            displayName: "Financial Intermediary",
            value: "financial-intermediary"
        }, {
            displayName: "SME",
            value: "sme"
        }]
          , S = function(e) {
            var n, t = (0,
            r.useState)(""), o = t[0], l = t[1], c = (0,
            r.useState)(""), m = c[0], p = c[1], g = (0,
            r.useState)(!1), v = (g[0],
            g[1],
            (0,
            r.useState)([])), N = v[0], S = v[1], F = (0,
            d.useRouter)(), E = function() {
                var e = (0,
                s.Z)((function() {
                    var e;
                    return (0,
                    i.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return "\n    query allProducts {\n     allProductPageTemplate{\n       items{\n         name\n         url\n         productType\n       }\n     }\n   }\n    ",
                            [4, f.$h.getUmbracoContentQLByID("\n    query allProducts {\n     allProductPageTemplate{\n       items{\n         name\n         url\n         productType\n       }\n     }\n   }\n    ")];
                        case 1:
                            return e = n.sent(),
                            S(e),
                            [2]
                        }
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            (0,
            r.useEffect)((function() {
                E()
            }
            ), []),
            n = "general" === e.data ? j : "private-investor" === e.data ? N && function(e) {
                var n, t = [], a = [], r = [], s = [];
                return null === (n = e.allProductPageTemplate) || void 0 === n || n.items.forEach((function(e) {
                    var n = e.url.replace("foresightgroup", "").replace(/^\/+/, "/");
                    switch (e.productType) {
                    case "VCT":
                        t.push({
                            name: e.name || "",
                            url: n || ""
                        });
                        break;
                    case "IHT":
                        a.push({
                            name: e.name || "",
                            url: n || ""
                        });
                        break;
                    case "OEIC":
                        r.push({
                            name: e.name || "",
                            url: n || ""
                        });
                        break;
                    case "EIS":
                        s.push({
                            name: e.name || "",
                            url: n || ""
                        })
                    }
                }
                )),
                [{
                    name: "Products",
                    subMenu: [{
                        name: "Venture Capital Trusts",
                        dropdown: [{
                            name: "Overview",
                            url: "/private-investor?tab=Venture%20Capital%20Trusts"
                        }].concat((0,
                        x.Z)(t))
                    }, {
                        name: "Open Ended Investment Companies",
                        dropdown: [{
                            name: "Overview",
                            url: "/private-investor?tab=Open%20Ended%20Investment%20Companies"
                        }].concat((0,
                        x.Z)(r))
                    }, {
                        name: "Investment Companies",
                        dropdown: [{
                            name: "Overview",
                            url: "/private-investor?tab=Investment%20Companies"
                        }, {
                            name: "Foresight Solar Fund Limited (FSFL)",
                            url: "https://fsfl.foresightgroup.eu/"
                        }, {
                            name: "Foresight Sustainable Forestry Company Plc (FSFC)",
                            url: "https://fsfc.foresightgroup.eu/"
                        }, {
                            name: "JLEN Environmental Assets (JLEN)",
                            url: "https://jlen.com/"
                        }]
                    }]
                }, {
                    name: "About us",
                    subMenu: [{
                        name: "Overview",
                        url: "/about-us"
                    }, {
                        name: "People",
                        url: "/about-us/people"
                    }, {
                        name: "Sustainability",
                        url: "/about-us/sustainability"
                    }, {
                        name: "Diversity, Equity and Inclusion",
                        url: "/about-us/diversity-inclusion"
                    }]
                }, {
                    name: "Resources",
                    url: "/resources"
                }, {
                    name: "News",
                    url: "/news"
                }, {
                    name: "FSG Shareholders",
                    subMenu: [{
                        name: "Shareholders",
                        url: "/shareholders"
                    }, {
                        name: "Shareholder Information",
                        dropdown: [{
                            name: "Share Price Information",
                            url: "/shareholder-info?tab=1"
                        }, {
                            name: "Shareholder Meetings",
                            url: "/shareholder-info?tab=2"
                        }, {
                            name: "Financial Calendar",
                            url: "/shareholder-info?tab=3"
                        }, {
                            name: "Dividend Policy",
                            url: "/shareholder-info?tab=4"
                        }, {
                            name: "Consensus Estimates",
                            url: "/shareholder-info?tab=5"
                        }]
                    }, {
                        name: "Corporate Governance",
                        dropdown: [{
                            name: "Board of Directors",
                            url: "/corporate-governance?tab=Board%20of%20Directors"
                        }, {
                            name: "Board Responsibilities",
                            url: "/corporate-governance?tab=Board%20Responsibilities"
                        }, {
                            name: "Board Committees",
                            url: "/corporate-governance?tab=Board%20Committees"
                        }]
                    }, {
                        name: "Document Library",
                        url: "/document-library"
                    }, {
                        name: "Regulatory News",
                        url: "/regulatory-news"
                    }]
                }]
            }(N) : "institutional-investor" === e.data ? y : "financial-intermediary" === e.data ? N && function(e) {
                var n, t = [], a = [], r = [], s = [];
                return null === (n = e.allProductPageTemplate) || void 0 === n || n.items.forEach((function(e) {
                    var n = e.url.replace("foresightgroup", "").replace(/^\/+/, "/");
                    switch (e.productType) {
                    case "VCT":
                        t.push({
                            name: e.name || "",
                            url: n || ""
                        });
                        break;
                    case "IHT":
                        a.push({
                            name: e.name || "",
                            url: n || ""
                        });
                        break;
                    case "OEIC":
                        r.push({
                            name: e.name || "",
                            url: n || ""
                        });
                        break;
                    case "EIS":
                        s.push({
                            name: e.name || "",
                            url: n || ""
                        })
                    }
                }
                )),
                [{
                    name: "Products",
                    subMenu: [{
                        name: "Venture Capital Trusts",
                        dropdown: [{
                            name: "Overview",
                            url: "/financial-intermediary?tab=Venture%20Capital%20Trusts"
                        }].concat((0,
                        x.Z)(t))
                    }, {
                        name: "Business Relief",
                        dropdown: [{
                            name: "Overview",
                            url: "/financial-intermediary?tab=Business%20Relief"
                        }].concat((0,
                        x.Z)(a))
                    }, {
                        name: "Open Ended Investment Companies",
                        dropdown: [{
                            name: "Overview",
                            url: "/financial-intermediary?tab=Open%20Ended%20Investment%20Companies"
                        }].concat((0,
                        x.Z)(r))
                    }, {
                        name: "Enterprise Investment Scheme",
                        dropdown: [{
                            name: "Overview",
                            url: "/financial-intermediary?tab=Enterprise%20Investment%20Scheme"
                        }].concat((0,
                        x.Z)(s))
                    }, {
                        name: "Investment Companies",
                        dropdown: [{
                            name: "Overview",
                            url: "/financial-intermediary?tab=Investment%20Companies"
                        }, {
                            name: "Foresight Solar Fund Limited (FSFL)",
                            url: "https://fsfl.foresightgroup.eu/"
                        }, {
                            name: "Foresight Sustainable Forestry Company Plc (FSFC)",
                            url: "https://fsfc.foresightgroup.eu/"
                        }, {
                            name: "JLEN Environmental Assets (JLEN)",
                            url: "https://jlen.com/"
                        }]
                    }]
                }, {
                    name: "About us",
                    subMenu: [{
                        name: "Overview",
                        url: "/about-us"
                    }, {
                        name: "People",
                        url: "/about-us/people"
                    }, {
                        name: "Sustainability",
                        url: "/about-us/sustainability"
                    }, {
                        name: "Diversity, Equity and Inclusion",
                        url: "/about-us/diversity-inclusion"
                    }]
                }, {
                    name: "Adviser Centre",
                    url: "/resources"
                }, {
                    name: "News",
                    url: "/news"
                }]
            }(N) : "sme" === e.data ? b : j;
            (0,
            w.a)("(max-width: 998px)");
            var I = function(e) {
                o === e || l(e),
                p(m === e ? "" : e)
            }
              , O = function(e) {
                p(m === e ? "" : e)
            }
              , q = function(e) {
                var n, t = e.item, r = e.state, s = e.onClickFunction, i = F.pathname, o = t.url ? i === t.url : t.name === r, l = null === (n = t.subMenu) || void 0 === n ? void 0 : n.some((function(e) {
                    return i === e.url
                }
                ));
                return (0,
                a.jsx)("li", {
                    className: "nav-item ".concat(o || l ? "active" : "inactive"),
                    children: t.url ? (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(h.G, {
                            icon: ["fal", "arrow-right-long"]
                        }), (0,
                        a.jsx)(u(), {
                            href: t.url,
                            children: t.name
                        })]
                    }) : (0,
                    a.jsxs)(a.Fragment, {
                        children: [(0,
                        a.jsx)(h.G, {
                            icon: ["fal", "arrow-right-long"]
                        }), (0,
                        a.jsx)("button", {
                            type: "button",
                            className: "nav-link",
                            onClick: function() {
                                s(t.name)
                            },
                            children: t.name
                        })]
                    })
                })
            };
            return (0,
            a.jsx)("div", {
                className: "position-relative",
                children: n && (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsxs)("ul", {
                        className: "navbar-nav primary-links-area",
                        children: [(0,
                        a.jsx)("div", {
                            className: "d-block d-lg-none ms-3 mb-5",
                            children: (0,
                            a.jsx)(k, {
                                dropdown: C
                            })
                        }), n.map((function(e) {
                            return (0,
                            a.jsx)(q, {
                                item: e,
                                state: o,
                                onClickFunction: I
                            }, e.name)
                        }
                        ))]
                    }), n.map((function(e) {
                        var n;
                        return (0,
                        a.jsxs)("ul", {
                            className: "navbar-nav  secondary-links-area ".concat(e.name === o ? "expanded" : "collapsed"),
                            children: [(0,
                            a.jsx)("button", {
                                className: "close",
                                onClick: function() {
                                    l(""),
                                    p("")
                                },
                                children: (0,
                                a.jsx)(h.G, {
                                    icon: ["fal", "xmark"]
                                })
                            }), null === (n = e.subMenu) || void 0 === n ? void 0 : n.map((function(e) {
                                return (0,
                                a.jsx)(q, {
                                    item: e,
                                    state: m,
                                    onClickFunction: O
                                }, e.name)
                            }
                            ))]
                        }, e.name)
                    }
                    )), n.map((function(e) {
                        var n;
                        return null === (n = e.subMenu) || void 0 === n ? void 0 : n.map((function(e) {
                            return e.dropdown ? (0,
                            a.jsxs)("ul", {
                                className: "navbar-nav tertiary-links-area ".concat(e.name === m ? "expanded" : "collapsed"),
                                children: [(0,
                                a.jsx)("button", {
                                    className: "close",
                                    onClick: function() {
                                        return p("")
                                    },
                                    children: (0,
                                    a.jsx)(h.G, {
                                        icon: ["fal", "xmark"]
                                    })
                                }), e.dropdown.map((function(e) {
                                    return (0,
                                    a.jsx)(q, {
                                        item: e,
                                        state: m,
                                        onClickFunction: null
                                    }, e.name)
                                }
                                ))]
                            }, e.name) : ""
                        }
                        ))
                    }
                    ))]
                })
            })
        }
          , F = t(1785)
          , E = t.n(F)
          , I = t(47234)
          , O = t.n(I)
          , q = function(e) {
            var n = e.additionalLogo
              , t = (0,
            d.useRouter)()
              , s = ((0,
            r.useRef)(null),
            (0,
            r.useState)(!1))
              , i = s[0]
              , o = s[1]
              , l = (0,
            r.useState)()
              , c = l[0]
              , m = l[1]
              , p = (0,
            r.useState)(!1)
              , g = p[0]
              , f = p[1]
              , v = (0,
            N.getCookie)("audience")
              , b = ((0,
            N.getCookie)("beenHereBefore"),
            (0,
            N.getCookie)("fsgcookies"))
              , x = v;
            if (b) {
                if (v) {
                    var y = {
                        gtmId: "GTM-NM6Z8WW",
                        events: {
                            audience: v
                        }
                    };
                    E().initialize(y)
                } else
                    E().initialize({
                        gtmId: "GTM-NM6Z8WW"
                    });
                O().init("4583897", "dc", !1)
            }
            return (0,
            r.useEffect)((function() {
                m("general" == x ? "" : "sme" == x ? "sme" : void 0 == x ? "" : x)
            }
            ), []),
            (0,
            a.jsxs)("nav", {
                style: {
                    display: "/500" === t.asPath ? "none" : "flex"
                },
                className: "navbar main-header sticky-top pt-4",
                children: [(0,
                a.jsx)("div", {
                    className: "container",
                    children: (0,
                    a.jsxs)("div", {
                        className: "row w-100 justify-content-center header-content ".concat(i ? "mobile-menu-active" : ""),
                        children: [(0,
                        a.jsxs)("div", {
                            className: "col d-flex mb-2 justify-content-start",
                            children: [(0,
                            a.jsxs)("button", {
                                className: "navbar-toggler mobile-menu-toggle me-0 me-lg-5",
                                type: "button",
                                "data-bs-toggle": "collapse",
                                "data-bs-target": "#navbarNav",
                                "aria-controls": "navbarNav",
                                "aria-expanded": "false",
                                "aria-label": "Toggle navigation",
                                onClick: function() {
                                    return o(!i)
                                },
                                children: [(0,
                                a.jsx)("span", {
                                    className: "sr-only",
                                    children: "Toggle navigation"
                                }), (0,
                                a.jsx)("span", {
                                    className: "menu-toggle-burger ".concat(i ? "mobile-menu-active" : "")
                                })]
                            }), (0,
                            a.jsx)("div", {
                                className: "d-none d-lg-block",
                                children: (0,
                                a.jsx)(k, {
                                    dropdown: C
                                })
                            })]
                        }), (0,
                        a.jsx)("div", {
                            className: "col d-flex align-items-center justify-content-center",
                            children: (0,
                            a.jsx)(u(), {
                                href: "/" + c,
                                children: (0,
                                a.jsxs)("a", {
                                    className: "".concat(n ? "d-flex" : ""),
                                    children: [(0,
                                    a.jsx)("img", {
                                        src: "/assets/images/fs-logo-2020.svg",
                                        className: "fs-logo ".concat(n ? "add" : ""),
                                        alt: "Foresight logo"
                                    }), n && (0,
                                    a.jsx)("div", {
                                        className: "additional-logo d-flex align-items-end",
                                        children: (0,
                                        a.jsx)("img", {
                                            src: n,
                                            alt: ""
                                        })
                                    })]
                                })
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "col d-flex justify-content-end mb-2",
                            children: (0,
                            a.jsxs)("div", {
                                className: "header-icons d-flex align-items-center",
                                children: [(0,
                                a.jsx)(u(), {
                                    href: "/contact",
                                    children: (0,
                                    a.jsx)(h.G, {
                                        icon: ["fal", "phone"],
                                        color: "#33268D",
                                        size: "lg"
                                    })
                                }), (0,
                                a.jsx)("form", {
                                    action: "/search",
                                    method: "get",
                                    className: g ? "show" : "hide",
                                    children: (0,
                                    a.jsx)("input", {
                                        type: "text",
                                        id: "term",
                                        className: "form-control",
                                        placeholder: "Search here.....",
                                        "aria-label": "search",
                                        "aria-describedby": "search",
                                        name: "term"
                                    })
                                }), (0,
                                a.jsx)("button", {
                                    type: "button",
                                    className: "btn btn-link",
                                    onClick: function() {
                                        return f(!g)
                                    },
                                    children: (0,
                                    a.jsx)(h.G, {
                                        icon: ["fal", "search"],
                                        color: "#33268D",
                                        size: "lg"
                                    })
                                })]
                            })
                        })]
                    })
                }), (0,
                a.jsx)("div", {
                    className: "collapse navbar-collapse",
                    id: "navbarNav",
                    children: (0,
                    a.jsx)(S, {
                        data: v,
                        dropdown: C
                    })
                })]
            })
        }
          , T = t(4298)
          , G = t.n(T)
          , M = function() {
            var e = (0,
            d.useRouter)()
              , n = (0,
            r.useRef)()
              , t = (0,
            r.useState)(!0)
              , o = t[0]
              , l = (t[1],
            (0,
            r.useState)((0,
            N.getCookie)("performanceCookies")))
              , c = l[0]
              , u = l[1]
              , m = (0,
            r.useState)((0,
            N.getCookie)("targetingCookies"))
              , p = m[0]
              , h = m[1]
              , g = (0,
            r.useState)(!1)
              , v = g[0]
              , b = g[1]
              , x = (0,
            r.useState)(void 0)
              , y = x[0]
              , j = x[1]
              , w = (0,
            r.useState)()
              , k = w[0]
              , C = w[1]
              , S = 'query footer {\n    content(id: "b35690be-c02f-44b2-8e56-664b325b2a73") {\n      ... on Settings {\n        cookieBannerCopy\n        manageCookiesCopy\n        neccesary\n        performance\n        targeting\n      }\n    }\n  }'
              , F = {
                path: "/",
                maxAge: 2628e3,
                sameSite: !0
            };
            (0,
            r.useEffect)((function() {
                function e() {
                    return (e = (0,
                    s.Z)((function() {
                        var e;
                        return (0,
                        i.__generator)(this, (function(n) {
                            switch (n.label) {
                            case 0:
                                return [4, f.$h.getUmbracoContentQLByID(S)];
                            case 1:
                                return e = n.sent(),
                                C(e),
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
            ), [S]),
            (0,
            r.useEffect)((function() {
                c && E().initialize({
                    gtmId: "GTM-NM6Z8WW"
                }),
                p && (O().init("4583897", "dc", !1),
                G());
                var e = (0,
                N.getCookie)("showCookieBanner");
                void 0 === e || e ? (j(!0),
                (0,
                N.setCookie)("showCookieBanner", !0, F)) : (j(!1),
                (0,
                N.setCookie)("showCookieBanner", !1, F))
            }
            ), []);
            return (0,
            a.jsx)("div", {
                className: "custom-cookie-box text-white bg-green ".concat(y ? "d-block" : "d-none"),
                ref: n,
                children: (0,
                a.jsx)("div", {
                    className: "container py-3",
                    children: (0,
                    a.jsxs)("div", {
                        className: "row",
                        children: [(0,
                        a.jsx)("div", {
                            className: "col-12",
                            children: f.$h.markMedownRich(null === k || void 0 === k ? void 0 : k.content.cookieBannerCopy)
                        }), (0,
                        a.jsxs)("div", {
                            className: "col-sm-12 col-lg-9 d-flex flex-column",
                            children: [(0,
                            a.jsxs)("div", {
                                className: "d-flex",
                                children: [(0,
                                a.jsx)("button", {
                                    className: "button secondary green-transparent",
                                    onClick: function() {
                                        (0,
                                        N.setCookie)("necessaryCookies", !0, F),
                                        (0,
                                        N.setCookie)("performanceCookies", !0, F),
                                        (0,
                                        N.setCookie)("targetingCookies", !0, F),
                                        (0,
                                        N.setCookie)("showCookieBanner", !1, F),
                                        j(!1),
                                        n.current.removeAttribute("style"),
                                        e.reload()
                                    },
                                    children: "Accept all cookies"
                                }), (0,
                                a.jsx)("button", {
                                    className: "options",
                                    onClick: function() {
                                        return b(!v)
                                    },
                                    children: v ? "Cookie Settings -" : "Cookie Settings +"
                                })]
                            }), v ? (0,
                            a.jsxs)("div", {
                                className: "mt-4",
                                children: [f.$h.markMedownRich(null === k || void 0 === k ? void 0 : k.content.manageCookiesCopy), (0,
                                a.jsxs)("div", {
                                    className: "cookie-box-accordion mt-4",
                                    id: "cookieBoxAccordion",
                                    children: [(0,
                                    a.jsxs)("div", {
                                        className: "accordion-item",
                                        children: [(0,
                                        a.jsxs)("h2", {
                                            className: "accordion-header",
                                            id: "headingOne",
                                            children: [(0,
                                            a.jsxs)("button", {
                                                className: "accordion-button",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#collapseOne",
                                                "aria-expanded": "true",
                                                "aria-controls": "collapseOne",
                                                children: [(0,
                                                a.jsx)("div", {
                                                    className: "custom-arrow"
                                                }), " Necessary cookies"]
                                            }), (0,
                                            a.jsxs)("label", {
                                                className: "switch",
                                                children: [(0,
                                                a.jsx)("input", {
                                                    type: "checkbox",
                                                    checked: o,
                                                    disabled: !0
                                                }), (0,
                                                a.jsx)("span", {
                                                    className: "slider round"
                                                })]
                                            })]
                                        }), (0,
                                        a.jsx)("div", {
                                            id: "collapseOne",
                                            className: "accordion-collapse collapse show",
                                            "aria-labelledby": "headingOne",
                                            "data-bs-parent": "#cookieBoxAccordion",
                                            children: (0,
                                            a.jsx)("div", {
                                                className: "accordion-body",
                                                children: f.$h.markMedownRich(null === k || void 0 === k ? void 0 : k.content.neccesary)
                                            })
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "accordion-item",
                                        children: [(0,
                                        a.jsxs)("h2", {
                                            className: "accordion-header",
                                            id: "headingTwo",
                                            children: [(0,
                                            a.jsxs)("button", {
                                                className: "accordion-button collapsed",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#collapseTwo",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseTwo",
                                                children: [(0,
                                                a.jsx)("div", {
                                                    className: "custom-arrow"
                                                }), " Performance cookies"]
                                            }), (0,
                                            a.jsxs)("label", {
                                                className: "switch",
                                                children: [(0,
                                                a.jsx)("input", {
                                                    type: "checkbox",
                                                    checked: c,
                                                    onChange: function() {
                                                        u(!c)
                                                    }
                                                }), (0,
                                                a.jsx)("span", {
                                                    className: "slider round"
                                                })]
                                            })]
                                        }), (0,
                                        a.jsx)("div", {
                                            id: "collapseTwo",
                                            className: "accordion-collapse collapse",
                                            "aria-labelledby": "headingTwo",
                                            "data-bs-parent": "#cookieBoxAccordion",
                                            children: (0,
                                            a.jsx)("div", {
                                                className: "accordion-body",
                                                children: f.$h.markMedownRich(null === k || void 0 === k ? void 0 : k.content.performance)
                                            })
                                        })]
                                    }), (0,
                                    a.jsxs)("div", {
                                        className: "accordion-item",
                                        children: [(0,
                                        a.jsxs)("h2", {
                                            className: "accordion-header",
                                            id: "headingThree",
                                            children: [(0,
                                            a.jsxs)("button", {
                                                className: "accordion-button collapsed",
                                                type: "button",
                                                "data-bs-toggle": "collapse",
                                                "data-bs-target": "#collapseThree",
                                                "aria-expanded": "false",
                                                "aria-controls": "collapseThree",
                                                children: [(0,
                                                a.jsx)("div", {
                                                    className: "custom-arrow"
                                                }), " Targeting cookies"]
                                            }), (0,
                                            a.jsxs)("label", {
                                                className: "switch",
                                                children: [(0,
                                                a.jsx)("input", {
                                                    type: "checkbox",
                                                    checked: p,
                                                    onChange: function() {
                                                        h(!p)
                                                    }
                                                }), (0,
                                                a.jsx)("span", {
                                                    className: "slider round"
                                                })]
                                            })]
                                        }), (0,
                                        a.jsx)("div", {
                                            id: "collapseThree",
                                            className: "accordion-collapse collapse",
                                            "aria-labelledby": "headingThree",
                                            "data-bs-parent": "#cookieBoxAccordion",
                                            children: (0,
                                            a.jsx)("div", {
                                                className: "accordion-body",
                                                children: f.$h.markMedownRich(null === k || void 0 === k ? void 0 : k.content.targeting)
                                            })
                                        })]
                                    })]
                                }), (0,
                                a.jsx)("button", {
                                    className: "button secondary green-transparent mt-4",
                                    onClick: function() {
                                        (0,
                                        N.setCookie)("necessaryCookies", o, F),
                                        (0,
                                        N.setCookie)("performanceCookies", c, F),
                                        (0,
                                        N.setCookie)("targetingCookies", p, F),
                                        (0,
                                        N.setCookie)("showCookieBanner", !1, F),
                                        j(!1),
                                        n.current.removeAttribute("style"),
                                        e.reload()
                                    },
                                    children: "Confirm choices"
                                })]
                            }) : null]
                        })]
                    })
                })
            })
        }
          , _ = t(62284)
          , B = t(7422)
          , P = t.n(B)
          , L = t(27669)
          , R = (t(59235),
        t(31190))
          , D = function() {
            var e, n = (0,
            r.useState)([]), t = n[0], o = n[1], l = (0,
            r.useState)(), c = l[0], d = l[1], p = (0,
            r.useState)(""), g = p[0], v = p[1], b = (0,
            r.useState)(!1), x = b[0], y = b[1], j = "3ccfa685-2130-4a25-af0f-1db6f5cc8e0e", w = (0,
            L.s)(j), k = w.signUpForm, C = (w.error,
            function() {
                var e = (0,
                s.Z)((function() {
                    var e;
                    return (0,
                    i.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, k];
                        case 1:
                            return e = n.sent(),
                            d(e),
                            o(e.pages[0].fieldsets[0].columns[0].fields),
                            [2]
                        }
                    }
                    ))
                }
                ));
                return function() {
                    return e.apply(this, arguments)
                }
            }());
            (0,
            r.useEffect)((function() {
                e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                k && C()
            }
            ), [k]);
            var S = function(n) {
                (0,
                N.setCookie)("audience", n, {
                    path: "/",
                    maxAge: 2628e3,
                    sameSite: !0
                }),
                "general" == n && (n = ""),
                "/" == m().pathname ? e ? setTimeout((function() {
                    "" != n ? m().push("/".concat(n)) : location.href = "/"
                }
                ), 100) : "" != n ? m().push("/" + n) : location.href = "/" : m().reload()
            }
              , F = function(e) {
                var n = e.target.value;
                S(n)
            }
              , E = function() {
                var e = (0,
                s.Z)((function(e) {
                    var n, t;
                    return (0,
                    i.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            e.preventDefault(),
                            n = P()(e.target, {
                                hash: !0
                            }),
                            a.label = 1;
                        case 1:
                            return a.trys.push([1, 4, , 5]),
                            [4, fetch("/api/submitForm", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    formId: j,
                                    formData: n
                                })
                            })];
                        case 2:
                            return [4, a.sent().json()];
                        case 3:
                            return "Form submitted successfully" === (t = a.sent()).message ? (e.target.reset(),
                            S("financial-intermediary"),
                            v('<p style="color:green">'.concat(null === c || void 0 === c ? void 0 : c.messageOnSubmit, "</span>"))) : v('<p style="color:red">'.concat(t.message, "</span>")),
                            [3, 5];
                        case 4:
                            return a.sent(),
                            v('<p style="color:red">Failed to submit form. Please try again.</span>'),
                            [3, 5];
                        case 5:
                            return [2]
                        }
                    }
                    ))
                }
                ));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            a.jsxs)(a.Fragment, {
                children: [(0,
                a.jsx)("div", {
                    className: "main-header audience-selection",
                    children: (0,
                    a.jsx)("div", {
                        className: "container-fluid",
                        children: (0,
                        a.jsx)("div", {
                            className: "container",
                            children: (0,
                            a.jsxs)("div", {
                                className: "row header-content",
                                children: [(0,
                                a.jsx)("div", {
                                    className: "col-6 d-flex justify-content-between",
                                    children: (0,
                                    a.jsx)(u(), {
                                        href: "/",
                                        children: (0,
                                        a.jsx)("a", {
                                            className: "",
                                            children: (0,
                                            a.jsx)("img", {
                                                src: "/assets/images/fs-logo-2020.svg",
                                                className: "fs-logo"
                                            })
                                        })
                                    })
                                }), (0,
                                a.jsx)("div", {
                                    className: "col-6 d-flex justify-content-end align-items-center",
                                    children: (0,
                                    a.jsx)("div", {
                                        className: "header-icons",
                                        children: (0,
                                        a.jsx)("ul", {
                                            children: (0,
                                            a.jsx)("li", {
                                                children: (0,
                                                a.jsx)("a", {
                                                    href: "tel:+4402036678100",
                                                    children: (0,
                                                    a.jsx)(h.G, {
                                                        icon: ["fal", "phone"]
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })]
                            })
                        })
                    })
                }), (0,
                a.jsx)("div", {
                    className: "audience-selection",
                    children: (0,
                    a.jsxs)("div", {
                        className: "container-fluid audience-hero",
                        style: {
                            backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3) ), url(https://media.umbraco.io/dev-foresight/akknlicl/gettyimages-872179012.jpg?width=1440)"
                        },
                        children: [(0,
                        a.jsx)("video", {
                            className: "hero-vid",
                            autoPlay: !0,
                            loop: !0,
                            playsInline: !0,
                            muted: !0,
                            children: (0,
                            a.jsx)("source", {
                                src: "https://dev-foresight.euwest01.umbraco.io/media/1gapmsmm/hero.mp4"
                            })
                        }), (0,
                        a.jsxs)("div", {
                            className: "hero-content container",
                            children: [(0,
                            a.jsx)("div", {
                                className: "row",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "col-12 col-xl-10",
                                    children: [(0,
                                    a.jsxs)("h1", {
                                        children: ["Investing in our ", (0,
                                        a.jsx)("span", {
                                            className: "fst-italic",
                                            children: "future"
                                        })]
                                    }), (0,
                                    a.jsx)("h3", {
                                        children: "We invest to build a sustainable future and grow thriving economies."
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: ["With decades of experience, our strategies offer investors access to compelling opportunities at the forefront of change.", " "]
                                    }), (0,
                                    a.jsxs)("p", {
                                        children: ["Every day, we are actively building and growing our investments to support the energy transition, decarbonise industry, enhance nature recovery and realise the economic potential of ambitious companies.", " "]
                                    })]
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "row primary-buttons",
                                children: (0,
                                a.jsxs)("div", {
                                    className: "col-12 col-lg-12 col-xl-9 pt-5",
                                    children: [(0,
                                    a.jsx)("button", {
                                        className: "button inline primary green",
                                        onClick: F,
                                        value: "private-investor",
                                        children: "I am a private investor"
                                    }), (0,
                                    a.jsx)("button", {
                                        className: "button inline primary green",
                                        value: "financial-intermediary",
                                        onClick: function() {
                                            return y(!0)
                                        },
                                        children: "I am a financial intermediary"
                                    }), (0,
                                    a.jsx)("button", {
                                        className: "button inline primary green",
                                        onClick: F,
                                        value: "sme",
                                        children: "I am an SME seeking funding"
                                    }), (0,
                                    a.jsx)("button", {
                                        className: "button inline primary green",
                                        onClick: F,
                                        value: "institutional-investor",
                                        children: "I am an institutional investor"
                                    })]
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "row mt-4",
                                children: (0,
                                a.jsx)("div", {
                                    className: "col-12 col-md-6 col-lg-5 col-xl-4 d-flex flex-md-row flex-xs-column",
                                    children: (0,
                                    a.jsx)("button", {
                                        className: "button inline secondary green-transparent",
                                        onClick: F,
                                        value: "general",
                                        children: "I am looking for general company information"
                                    })
                                })
                            }), (0,
                            a.jsx)("div", {
                                className: "row",
                                children: (0,
                                a.jsx)("div", {
                                    className: "col-12 col-lg-9 pt-5",
                                    children: (0,
                                    a.jsxs)("p", {
                                        style: {
                                            fontSize: 14
                                        },
                                        children: ["Copyright \xa9 Foresight EN ", (new Date).getFullYear(), ". Foresight Group, The Shard, 32 London Bridge Street, London SE1 9SG. Foresight Group LLP No OC300878 is registered in England and Wales and is authorised and regulated by the Financial Conduct Authority."]
                                    })
                                })
                            })]
                        })]
                    })
                }), (0,
                a.jsx)(R.u, {
                    open: x,
                    onClose: function() {
                        return y(!1)
                    },
                    center: !0,
                    closeOnOverlayClick: !1,
                    showCloseIcon: !1,
                    classNames: {
                        modal: "customModal bg-main p-5"
                    },
                    children: (0,
                    a.jsxs)("form", {
                        className: "form",
                        onSubmit: E,
                        children: [(0,
                        a.jsx)("div", {
                            className: "row",
                            children: (0,
                            a.jsx)("div", {
                                className: "col-12",
                                children: (0,
                                a.jsx)("div", {
                                    className: "row",
                                    children: null === t || void 0 === t ? void 0 : t.map((function(e, n) {
                                        return 0 === n ? (0,
                                        a.jsxs)("div", {
                                            className: "col-12 mb-5",
                                            children: [(0,
                                            a.jsx)("h1", {
                                                className: "text-white",
                                                children: e.settings.caption
                                            }), (0,
                                            a.jsx)("p", {
                                                className: "text-white",
                                                children: e.settings.bodyText
                                            })]
                                        }, n) : n + 1 === t.length ? (0,
                                        a.jsx)("div", {
                                            className: "col-12",
                                            children: (0,
                                            a.jsx)(_.Z, {
                                                props: e
                                            })
                                        }, n) : (0,
                                        a.jsx)("div", {
                                            className: "col-12 col-md-3",
                                            children: (0,
                                            a.jsx)(_.Z, {
                                                props: e
                                            })
                                        }, n)
                                    }
                                    ))
                                })
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "row mt-5",
                            children: (0,
                            a.jsx)("div", {
                                className: "col",
                                children: (0,
                                a.jsx)("button", {
                                    type: "submit",
                                    className: "button secondary dark-text",
                                    children: null === c || void 0 === c ? void 0 : c.submitLabel
                                })
                            })
                        }), (0,
                        a.jsx)("div", {
                            className: "row",
                            children: (0,
                            a.jsx)("div", {
                                className: "col",
                                children: (0,
                                a.jsx)(a.Fragment, {
                                    children: f.$h.markMedownRich(g)
                                })
                            })
                        })]
                    })
                })]
            })
        };
        t(77720);
        t(23636).vc.autoAddCss = !1;
        var A = function(e) {
            var n = (0,
            d.useRouter)()
              , t = (0,
            N.getCookie)("audience")
              , s = (0,
            N.getCookie)("beenHereBefore")
              , i = (0,
            r.useState)(!0)
              , o = i[0]
              , l = i[1]
              , c = function() {
                (0,
                N.setCookies)("beenHereBefore", !0, {
                    path: "/",
                    maxAge: 2628e3,
                    sameSite: !0
                })
            };
            (0,
            r.useEffect)((function() {
                n.pathname.includes("news") ? n.pathname.includes("news") ? l(!0) : s || t ? l(!(s && !t)) : (l(!0),
                setTimeout((function() {
                    c()
                }
                ), 100)) : t ? setTimeout((function() {
                    c(),
                    l(!0)
                }
                ), 100) : l(!1)
            }
            ), []);
            var u = function() {
                return o ? (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(q, {
                        additionalLogo: e.additionalLogo
                    }), (0,
                    a.jsx)("main", {
                        id: e.id,
                        className: e.className,
                        children: e.children
                    }), (0,
                    a.jsx)(v, {}), (0,
                    a.jsx)(M, {})]
                }) : (0,
                a.jsxs)(a.Fragment, {
                    children: [(0,
                    a.jsx)(D, {}), (0,
                    a.jsx)(M, {})]
                })
            };
            return (0,
            a.jsx)(u, {})
        }
    },
    16482: function(e, n, t) {
        t.d(n, {
            $h: function() {
                return N
            }
        });
        var a = t(47568)
          , r = t(51438)
          , s = t(10092)
          , i = t(85893)
          , o = t(80448)
          , l = t(5152)
          , c = t.n(l)
          , u = t(93023)
          , d = t.n(u)
          , m = t(91074)
          , p = t(9008)
          , h = t.n(p)
          , g = t(11163)
          , f = t(15725)
          , v = t(83454);
        "Live" === v.env.TS_ENV && "zhSIPXIw8YNlMIFmMEcd";
        var b, x;
        b = "foresight",
        x = v.env.HEARTCORE_API_KEY;
        var y = c()((function() {
            return t.e(6013).then(t.t.bind(t, 96013, 23))
        }
        ), {
            loadableGenerated: {
                webpack: function() {
                    return [96013]
                }
            }
        })
          , j = new m.Client({
            projectAlias: b,
            apiKey: x,
            language: "en-GB"
        })
          , w = (0,
        o.eI)({
            url: "https://graphql.umbraco.io/",
            requestPolicy: "cache-and-network",
            fetchOptions: function() {
                return {
                    headers: {
                        "Umb-Project-Alias": b
                    }
                }
            }
        })
          , N = new (function() {
            function e() {
                (0,
                r.Z)(this, e)
            }
            var n = e.prototype;
            return n.PageHead = function(e) {
                (0,
                g.useRouter)();
                return (0,
                i.jsxs)(h(), {
                    children: [(0,
                    i.jsx)("title", {
                        children: e.OGtitle
                    }), (0,
                    i.jsx)("meta", {
                        name: "description",
                        content: e.OGpageDescription ? e.OGpageDescription : f.SEO.openGraph.description
                    }, "desc"), (0,
                    i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary"
                    }, "twcard"), (0,
                    i.jsx)("meta", {
                        property: "og:url",
                        content: e.siteURL ? f.SEO.openGraph.url + e.siteURL : f.SEO.openGraph.url
                    }, "ogurl"), (0,
                    i.jsx)("meta", {
                        property: "og:image",
                        content: e.OGimageURL ? e.OGimageURL : f.SEO.openGraph.image
                    }, "ogimage"), (0,
                    i.jsx)("meta", {
                        property: "og:site_name",
                        content: "Foresight"
                    }, "ogsitename"), (0,
                    i.jsx)("meta", {
                        property: "og:title",
                        content: e.OGtitle ? e.OGtitle : f.SEO.openGraph.title
                    }, "ogtitle"), (0,
                    i.jsx)("meta", {
                        property: "og:description",
                        content: e.OGpageDescription ? e.OGpageDescription : f.SEO.openGraph.description
                    }, "ogdesc"), (0,
                    i.jsx)("meta", {
                        name: "google-site-verification",
                        content: "Uv4VXKrAhb0ea_WVJNp1PpcbAzCmkNyAKhyHSSBt1I4"
                    })]
                })
            }
            ,
            n.getUmbracoContentQLByID = function(e) {
                return (0,
                a.Z)((function() {
                    var n;
                    return (0,
                    s.__generator)(this, (function(t) {
                        switch (t.label) {
                        case 0:
                            return n = "",
                            [4, w.query(e).toPromise().then((function(e) {
                                n = e.data
                            }
                            ))];
                        case 1:
                            return t.sent(),
                            [2, n]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.getUmbracoContentByID = function(e) {
                return (0,
                a.Z)((function() {
                    return (0,
                    s.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, j.delivery.content.byId(e, {
                                depth: 2
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.getUmbracoContentByType = function(e) {
                return (0,
                a.Z)((function() {
                    return (0,
                    s.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, j.delivery.content.byContentType(e)];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.getUmbracoSearch = function(e) {
                return (0,
                a.Z)((function() {
                    return (0,
                    s.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, j.delivery.content.search(e, {
                                pageSize: 500
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.getUmbracoContentByUrl = function(e) {
                return (0,
                a.Z)((function() {
                    return (0,
                    s.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, j.delivery.content.byUrl(e, {
                                depth: 2
                            })];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.getUmbracoForms = function(e) {
                return (0,
                a.Z)((function() {
                    return (0,
                    s.__generator)(this, (function(n) {
                        switch (n.label) {
                        case 0:
                            return [4, j.management.forms.byId(e)];
                        case 1:
                            return [2, n.sent()]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.getURLFromUmbracoId = function(e) {
                var n = this;
                return (0,
                a.Z)((function() {
                    var t;
                    return (0,
                    s.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return t = 'query getURLFromId {\n      content(id: "'.concat(e, '"){\n          url\n      }\n    }'),
                            [4, n.getUmbracoContentQLByID(t)];
                        case 1:
                            return [2, a.sent().content.url.split("foresightgroup/").join("")]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.postUmbracoForms = function(e, n) {
                return (0,
                a.Z)((function() {
                    var t;
                    return (0,
                    s.__generator)(this, (function(a) {
                        switch (a.label) {
                        case 0:
                            return [4, j.management.forms.submitEntry(e, n).then((function(e) {
                                t = "success"
                            }
                            ), (function(e) {
                                t = e.message
                            }
                            ))];
                        case 1:
                            return a.sent(),
                            [2, t]
                        }
                    }
                    ))
                }
                ))()
            }
            ,
            n.markMedownRich = function(e) {
                return d()(e)
            }
            ,
            n.markdown = function(e) {
                return (0,
                i.jsx)(y, {
                    children: e
                })
            }
            ,
            n.getSharePrice = function(e, n, t) {
                fetch(e).then((function(e) {
                    return e.json()
                }
                )).then((function(e) {
                    n(e.data),
                    t(!0)
                }
                ), (function(e) {}
                ))
            }
            ,
            n.audienceRemap = function(e) {
                var n = "";
                switch (e) {
                case "individual":
                    n = "private-investor";
                    break;
                case "institutional":
                    n = "institutional-investor";
                    break;
                case "intermediary":
                    n = "financial-intermediary";
                    break;
                case "sme":
                    n = "sme";
                    break;
                default:
                    n = "general"
                }
                return n
            }
            ,
            e
        }())
    },
    27669: function(e, n, t) {
        t.d(n, {
            s: function() {
                return i
            }
        });
        var a = t(47568)
          , r = t(10092)
          , s = t(67294)
          , i = function(e) {
            var n = (0,
            s.useState)(null)
              , t = n[0]
              , i = n[1]
              , o = (0,
            s.useState)(!1)
              , l = o[0]
              , c = o[1];
            return (0,
            s.useEffect)((function() {
                var n = function() {
                    var n = (0,
                    a.Z)((function() {
                        var n, t, a;
                        return (0,
                        r.__generator)(this, (function(r) {
                            switch (r.label) {
                            case 0:
                                return r.trys.push([0, 3, , 4]),
                                [4, fetch("/api/formRequest", {
                                    method: "POST",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        formId: e
                                    })
                                })];
                            case 1:
                                if (!(n = r.sent()).ok)
                                    throw new Error("Failed to fetch the latest form");
                                return [4, n.json()];
                            case 2:
                                return t = r.sent(),
                                i(t),
                                [3, 4];
                            case 3:
                                return a = r.sent(),
                                c(a.message),
                                [3, 4];
                            case 4:
                                return [2]
                            }
                        }
                        ))
                    }
                    ));
                    return function() {
                        return n.apply(this, arguments)
                    }
                }();
                n()
            }
            ), [e]),
            {
                signUpForm: t,
                error: l
            }
        }
    },
    10332: function(e, n, t) {
        t.d(n, {
            a: function() {
                return i
            }
        });
        var a = t(67294)
          , r = function(e) {
            return window.matchMedia(e)
        }
          , s = function(e) {
            return e.replaceAll("@media only screen and", "").trim()
        }
          , i = function(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]
              , t = function(e) {
                return r(s(e))
            }
              , i = (0,
            a.useState)(n)
              , o = i[0]
              , l = i[1];
            return (0,
            a.useEffect)((function() {
                var n = !0
                  , a = t(e)
                  , r = function() {
                    n && l(!!a.matches)
                };
                return a.addEventListener ? a.addEventListener("change", r) : a.addListener(r),
                l(a.matches),
                function() {
                    n = !1,
                    a.removeEventListener ? a.removeEventListener("change", r) : a.removeListener(r)
                }
            }
            ), [e]),
            o
        }
    },
    15725: function(e, n, t) {
        var a = t(83454);
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var r = t(60932).Z
          , s = t(32401).Z
          , i = [{
            key: "X-Frame-Options",
            value: "SAMEORIGIN"
        }];
        e.exports = {
            headers: function() {
                return r((function() {
                    return s(this, (function(e) {
                        return [2, [{
                            source: "/(.*)",
                            headers: i
                        }]]
                    }
                    ))
                }
                ))()
            },
            images: {
                domains: ["media.umbraco.io", "www.foresightgroup.eu", "placehold.co"]
            },
            env: {
                TS_ENV: a.env.TS_ENV
            },
            SEO: {
                title: "Foresight Group",
                description: "Foresight Group - description",
                openGraph: {
                    type: "website",
                    url: "https://www.foresightgroup.eu",
                    title: "Foresight Group - title",
                    description: "Foresight Group - description",
                    image: "https://www.foresightgroup.eu/assets/images/fs-logo-2020.svg"
                }
            },
            compiler: {
                removeConsole: !0
            },
            redirects: function() {
                return r((function() {
                    return s(this, (function(e) {
                        return [2, [{
                            source: "/privacy-cookies",
                            destination: "/privacy-policy",
                            permanent: !0
                        }, {
                            source: "/about-us/our-history",
                            destination: "/about-us",
                            permanent: !0
                        }, {
                            source: "/about-us/our-strategy",
                            destination: "/about-us",
                            permanent: !0
                        }, {
                            source: "/about-us/our-markets",
                            destination: "/about-us",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/founders-chairman",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/leadership",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/partners",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/private-equity",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/infrastructure",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/foresight-capital-management",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/finance-admin",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/sales-marketing-and-investor-relations",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/about-us/foresight-group-luxembourg",
                            destination: "/about-us/our-managers/foresight-group-luxembourg",
                            permanent: !0
                        }, {
                            source: "/about-us/foresight-group-luxembourg/managed-funds",
                            destination: "/about-us/our-managers/foresight-group-luxembourg",
                            permanent: !0
                        }, {
                            source: "/about-us/foresight-group-luxembourg/aifm-governance-and-publications",
                            destination: "/about-us/our-managers/foresight-group-luxembourg",
                            permanent: !0
                        }, {
                            source: "/about-us/foresight-group-luxembourg/luxembourg-team-and-news",
                            destination: "/about-us/our-managers/foresight-group-luxembourg",
                            permanent: !0
                        }, {
                            source: "/institutional",
                            destination: "/institutional-investor",
                            permanent: !0
                        }, {
                            source: "/about-us/investing-for-a-smarter-future",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/about-us/investing-for-a-smarter-future/protecting-the-planet-with-sunshine-and-honey",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/about-us/investing-for-a-smarter-future/reducing-co2-by-turning-the-lights-on",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/about-us/investing-for-a-smarter-future/waste-to-wattage",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/about-us/investing-for-a-smarter-future/powering-industry-with-up-to-100-clean-energy",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/about-us/investing-for-a-smarter-future/growing-the-economy-through-regional-investing",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/head-office",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/cambridge",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/edinburgh",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/guernsey",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/leicester",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/manchester",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/milton-keynes",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/nottingham",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/australia",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/italy",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/luxembourg",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/about-us/contact-us/spain",
                            destination: "/contact",
                            permanent: !0
                        }, {
                            source: "/insight",
                            destination: "/news",
                            permanent: !0
                        }, {
                            source: "/insight/:slug*",
                            destination: "/news",
                            permanent: !0
                        }, {
                            source: "/responsible-investing",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/sustainability-in-infrastructure",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/esg-approach-to-private-equity",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/sustainability-partnerships",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/governance",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/governance/women-in-finance-charter",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/governance/modern-slavery-statement",
                            destination: "/modern-slavery-statement",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/governance/stewardship-code",
                            destination: "/stewardship-code",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/governance/best-execution-disclosures",
                            destination: "/best-execution-disclosures",
                            permanent: !0
                        }, {
                            source: "/responsible-investing/governance/sustainable-finance-disclosure-regulation",
                            destination: "/about-us/sustainability",
                            permanent: !0
                        }, {
                            source: "/institutional/institutional-team",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/retail-investors",
                            destination: "/private-investor",
                            permanent: !0
                        }, {
                            source: "/retail-investors/vct",
                            destination: "/private-investor?tab=Venture%20Capital%20Trusts",
                            permanent: !0
                        }, {
                            source: "/retail-investors/vct/foresight-vct-plc",
                            destination: "/products/foresight-vct-plc",
                            permanent: !0
                        }, {
                            source: "/retail-investors/vct/foresight-enterprise-vct-plc",
                            destination: "/products/foresight-enterprise-vct-plc",
                            permanent: !0
                        }, {
                            source: "/retail-investors/vct/foresight-solar-technology-vct-plc",
                            destination: "/products/foresight-solar-and-technology-vct-plc-ordinary-shares",
                            permanent: !0
                        }, {
                            source: "/retail-investors/vct/vct-faqs",
                            destination: "/private-investor",
                            permanent: !0
                        }, {
                            source: "/retail-investors/eis/eis-faqs",
                            destination: "/private-investor",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-capital-management",
                            destination: "/capital-management",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-capital-management/fp-foresight-uk-infrastructure-income-fund",
                            destination: "/products/fp-foresight-uk-infrastructure-income-fund-fiif",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-capital-management/fp-foresight-global-real-infrastructure-fund",
                            destination: "/products/fp-foresight-global-real-infrastructure-fund-grif",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-capital-management/fp-foresight-sustainable-real-estate-securities-fund",
                            destination: "/products/fp-foresight-sustainable-real-estate-securities-fund-ref",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-capital-management/foresight-sicav",
                            destination: "/capital-management",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-capital-management/fp-foresight-sustainable-future-themes-fund",
                            destination: "/products/fp-foresight-sustainable-future-themes-fund-sft",
                            permanent: !0
                        }, {
                            source: "/retail-investors/adviser-centre",
                            destination: "/resources",
                            permanent: !0
                        }, {
                            source: "/retail-investors/retail-investor-relations",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/retail-investors/retail-investor-relations/faqs",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/retail-investors/retail-investor-relations/retail-investor-relations-team",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/retail-investors/retail-investor-relations/forms-factsheets-reports-important-dates",
                            destination: "/resources",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/private-equity",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/private-equity/partnering-with-foresight",
                            destination: "/sme",
                            permanent: !0
                        }, {
                            source: "/private-equity/transaction-types",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/private-equity/portfolio",
                            destination: "/portfolio",
                            permanent: !0
                        }, {
                            source: "/private-equity/foresight-regional-funds",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/private-equity/foresight-regional-funds/the-regional-investment-fund-series",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/private-equity/foresight-regional-funds/foresight-nottingham-fund",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/private-equity/foresight-regional-funds/foresight-meif-equity-finance",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/private-equity/foresight-regional-funds/foresight-scottish-growth-fund",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/private-equity/foresight-regional-funds/foresight-east-of-england-fund",
                            destination: "/private-equity",
                            permanent: !0
                        }, {
                            source: "/infrastructure/renewable-energy-generation",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/renewable-energy-generation/solar",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/renewable-energy-generation/bioenergy",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/renewable-energy-generation/wind",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/renewable-energy-enabling/flexible-generation-portfolio",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/renewable-energy-enabling/storage-portfolio",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/energy-management",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/infrastructure/social-infrastructure",
                            destination: "/infrastructure",
                            permanent: !0
                        }, {
                            source: "/how-to-make-a-complaint",
                            destination: "/complaints",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-inheritance-tax-solutions/foresight-inheritance-tax-solution",
                            destination: "/products/foresight-inheritance-tax-solution",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-inheritance-tax-solutions/foresight-accelerated-inheritance-tax-solution/foresight-accelerated-inheritance-tax-illustration",
                            destination: "/resources/business-hub/aits",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-inheritance-tax-solutions/foresight-accelerated-inheritance-tax-solution",
                            destination: "/products/foresight-accelerated-inheritance-tax-solution",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-inheritance-tax-solutions/foresight-accelerated-inheritance-tax-solution/foresight-accelerated-inheritance-tax-solution-change-notice",
                            destination: "/products/foresight-accelerated-inheritance-tax-solution",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-inheritance-tax-solutions/foresight-accelerated-inheritance-tax-solution/foresight-accelerated-inheritance-tax-solution-customer-agreement",
                            destination: "/products/foresight-accelerated-inheritance-tax-solution",
                            permanent: !0
                        }, {
                            source: "/media/:slug*",
                            destination: "/resources",
                            permanent: !0
                        }, {
                            source: "/retail-investors/foresight-inheritance-tax-solutions/foresight-accelerated-inheritance-tax-solution/foresight-aits-enquiry-form",
                            destination: "/products/foresight-accelerated-inheritance-tax-solution",
                            permanent: !0
                        }, {
                            source: "/about-us/our-people/:slug*",
                            destination: "/about-us/people",
                            permanent: !0
                        }, {
                            source: "/fsg-shareholders/shareholder-info",
                            destination: "/shareholder-info",
                            permanent: !0
                        }, {
                            source: "/fsg-shareholders/corporate=-governance",
                            destination: "/corporate=-governance",
                            permanent: !0
                        }, {
                            source: "/foresight-scottish-growth-fund",
                            destination: "/private-equity?tab=8",
                            permanent: !0
                        }, {
                            source: "/products/foresight-technology-vct-plc-fwt-shares",
                            destination: "/products/foresight-technology-vct-plc",
                            permanent: !0
                        }, {
                            source: "/ventures",
                            destination: "/venturecapital",
                            permanent: !0
                        }, {
                            source: "/about-us/our-managers/capital-management",
                            destination: "/about-us/people?department=Foresight%20Capital%20Management",
                            permanent: !0
                        }, {
                            source: "/landing/foresight-sustainability-partnering",
                            destination: "/foresight-sustainability-partnering",
                            permanent: !0
                        }, {
                            source: "/landing/foresight-sustainability-partnering-2023",
                            destination: "/foresight-sustainability-partnering",
                            permanent: !0
                        }]]
                    }
                    ))
                }
                ))()
            }
        }
    }
}]);
