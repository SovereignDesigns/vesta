(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[3983], {
    73983: function(e, r, o) {
        "use strict";
        var t = o(7297)
          , _ = o(85893)
          , d = o(67294)
          , l = o(21139)
          , a = o.n(l)
          , h = o(10508)
          , b = o(16482)
          , g = o(25675)
          , i = o.n(g)
          , n = o(4654)
          , s = o(67814)
          , c = o(10332)
          , p = o(11163);
        function u() {
            var e = (0,
            t.Z)(['\n  &::before {\n    content: " ";\n    position: absolute;\n    height: 100%;\n    min-height: ', ";\n    width: ", ";\n    top: 0;\n    right: 0;\n    background: ", ";\n    background-size: cover;\n    ", "\n  }\n"]);
            return u = function() {
                return e
            }
            ,
            e
        }
        var m = h.ZP.div(u(), (function(e) {
            return e.isMobile ? "50vw" : "auto"
        }
        ), (function(e) {
            return e.isMobile ? "100vw" : function(e) {
                return 3 === e.$level ? "100vw" : "50vw"
            }
        }
        ), (function(e) {
            return 0 === e.$level ? 'C:/Users/Sovereign/Desktop/top/www.foresight.group/assets/images/blue-green-purple-gradient.png")' : 1 === e.$level ? "linear-gradient(180deg, ".concat("purple" === e.$tint ? "rgba(249,248,255,1) 0%, rgba(211,195,246,1)" : "rgba(239,253,250,1) 0%, rgba(155,225,214,1)", "   100%)") : "purple" === e.$tint ? "#EFEEF6" : "#D6FBF1"
        }
        ), (function(e) {
            return e.showPseudoElement ? "" : "display: none;"
        }
        ));
        r.Z = function(e) {
            var r = e.image
              , o = e.text
              , t = e.cta
              , l = e.level
              , h = e.tint
              , g = e.message
              , u = e.navText
              , y = e.bannerBg
              , x = e.navDate
              , f = e.sharePriceFeed
              , k = e.sharePriceFeed2
              , w = e.notRichText
              , j = (0,
            d.useState)(!1)
              , v = j[0]
              , N = j[1]
              , U = (0,
            c.a)("(max-width: 998px)")
              , D = (0,
            d.useState)()
              , I = D[0]
              , P = D[1]
              , S = (0,
            d.useState)()
              , G = S[0]
              , F = S[1]
              , W = (0,
            d.useState)(!1)
              , M = (W[0],
            W[1])
              , Y = (0,
            d.useState)(!1)
              , E = (Y[0],
            Y[1])
              , T = (0,
            p.useRouter)();
            (0,
            d.useEffect)((function() {
                var e = setTimeout((function() {
                    N(!0)
                }
                ), 100);
                return function() {
                    return clearTimeout(e)
                }
            }
            ), []),
            (0,
            d.useEffect)((function() {
                f && b.$h.getSharePrice(f, P, M)
            }
            ), [f]),
            (0,
            d.useEffect)((function() {
                k && b.$h.getSharePrice(k, F, E)
            }
            ), [k]);
            var J = function(e) {
                if (I) {
                    var r = new Date(I.timestamp);
                    return (0,
                    _.jsxs)("div", {
                        className: "sharebox ".concat(a().sharebox),
                        children: [(0,
                        _.jsxs)("p", {
                            className: "mb-1",
                            children: ["Accumulation Share Price", (0,
                            _.jsx)("br", {}), (0,
                            _.jsxs)("strong", {
                                className: "fs-1",
                                children: [I.last.toFixed(2), "GBp", I.change < 0 ? (0,
                                _.jsx)(s.G, {
                                    icon: ["fal", "caret-up"]
                                }) : (0,
                                _.jsx)(s.G, {
                                    icon: ["fal", "caret-down"]
                                })]
                            })]
                        }), (0,
                        _.jsxs)("p", {
                            className: "small",
                            children: ["Price as at", " ", r.toLocaleString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }), " ", "GMT"]
                        })]
                    })
                }
                return null
            }
              , Z = function(e) {
                if (G) {
                    var r = new Date(G.timestamp);
                    return (0,
                    _.jsxs)("div", {
                        className: "sharebox ".concat(a().sharebox),
                        children: [(0,
                        _.jsxs)("p", {
                            className: "mb-1",
                            children: ["Income Share Price", (0,
                            _.jsx)("br", {}), (0,
                            _.jsxs)("strong", {
                                className: "fs-1",
                                children: [G.last.toFixed(2), "GBp", G.change < 0 ? (0,
                                _.jsx)(s.G, {
                                    icon: ["fal", "caret-up"]
                                }) : (0,
                                _.jsx)(s.G, {
                                    icon: ["fal", "caret-down"]
                                })]
                            })]
                        }), (0,
                        _.jsxs)("p", {
                            className: "small",
                            children: ["Price as at", " ", r.toLocaleString("en-GB", {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                hour: "2-digit",
                                minute: "2-digit"
                            }), " ", "GMT"]
                        })]
                    })
                }
                return null
            }
              , B = function(e) {
                return (0,
                _.jsxs)("div", {
                    className: a().nav,
                    children: [(0,
                    _.jsxs)("p", {
                        className: "mb-1",
                        children: ["NAV Per Share", (0,
                        _.jsx)("br", {}), (0,
                        _.jsxs)("strong", {
                            className: "fs-1",
                            children: [e.text, "p"]
                        })]
                    }), (0,
                    _.jsx)("p", {
                        className: "small",
                        children: e.date
                    })]
                })
            };
            return (0,
            _.jsxs)("div", {
                className: "position-relative d-block d-lg-flex heroPad ".concat(a().heroHeight, " ").concat(3 === l ? "bg-main mb-5" : ""),
                children: [g && (0,
                _.jsx)("div", {
                    style: {
                        backgroundColor: /open(ed)?|close(d)?/i.test(g) ? /open(ed)?/i.test(g) ? "#02A288" : "#FC7A80" : y
                    },
                    className: a().message,
                    children: (0,
                    _.jsx)("p", {
                        className: "text-white",
                        children: g
                    })
                }), U && (0,
                _.jsx)(m, {
                    isMobile: U,
                    $level: l,
                    $tint: h,
                    showPseudoElement: v
                }, "".concat(l, "-").concat(h)), (0,
                _.jsx)("div", {
                    className: "container ".concat(a().hero),
                    children: (0,
                    _.jsxs)("div", {
                        className: "row h-100 g-0",
                        children: [(0,
                        _.jsxs)("div", {
                            className: "col-12 col-lg-".concat(3 === l ? "12" : "6", " position-relative d-flex justify-content-center flex-column ").concat(a().left, " py-5 ").concat(g ? "mt-4" : ""),
                            children: [3 !== l && !U && (0,
                            _.jsx)(m, {
                                isMobile: U,
                                $level: l,
                                $tint: h,
                                showPseudoElement: v
                            }, "".concat(l, "-").concat(h)), b.$h.markMedownRich(o), w && (0,
                            _.jsx)("h1", {
                                children: w
                            }), (0,
                            _.jsxs)("div", {
                                className: "row",
                                children: [(0,
                                _.jsx)("div", {
                                    className: "col-12 col-lg-6",
                                    children: f ? (0,
                                    _.jsx)(J, {
                                        url: f
                                    }) : null
                                }), (0,
                                _.jsx)("div", {
                                    className: "col-12 col-lg-6",
                                    children: k ? (0,
                                    _.jsx)(Z, {
                                        url: k
                                    }) : null
                                })]
                            }), u && (0,
                            _.jsx)(B, {
                                text: u,
                                date: x
                            }), (0,
                            _.jsx)("div", {
                                className: "d-flex flex-column flex-lg-row",
                                children: Array.isArray(t) ? t.map((function(e, r) {
                                    return (0,
                                    _.jsx)(n.a, {
                                        class: "button ".concat(r > 0 ? "secondary dark-text" : "primary dark", " inline ").concat(r > 0 ? "ms-lg-3" : ""),
                                        url: e.url,
                                        target: e.target,
                                        children: e.name
                                    }, r)
                                }
                                )) : t && (0,
                                _.jsx)(n.a, {
                                    class: "button primary dark inline",
                                    url: t.url,
                                    target: t.target,
                                    children: t.name
                                })
                            })]
                        }), 3 !== l && "/500" !== T.asPath && (0,
                        _.jsx)("div", {
                            className: "col-sm-12 col-lg-6 position-relative text-right",
                            children: (0,
                            _.jsx)("a", {
                                className: "d-none d-lg-flex ".concat(a().down),
                                href: "#main",
                                children: (0,
                                _.jsx)(s.G, {
                                    icon: ["fal", "chevron-down"]
                                })
                            })
                        })]
                    })
                }), (0,
                _.jsxs)("div", {
                    className: "container-fluid h-100 g-0 ".concat(a().heroImageSide, " ").concat(3 === l ? "d-none" : ""),
                    style: {
                        top: 0
                    },
                    children: [(0,
                    _.jsx)("img", {
                        className: a().ripple,
                        src: "background-image: url('C:/websites/vesta-start/www.vestastart.com/assets/images/ripple.png",
                        alt: ""
                    }), (0,
                    _.jsx)("div", {
                        className: "row h-100 g-0",
                        children: (0,
                        _.jsx)("div", {
                            className: "col-sm-12 col-lg-6 h-100 position-relative ms-auto",
                            children: (0,
                            _.jsx)(i(), {
                                src: r,
                                layout: "fill",
                                className: a().image
                            })
                        })
                    }), (0,
                    _.jsx)("a", {
                        className: "anchor",
                        id: "main"
                    })]
                })]
            })
        }
    },
    4654: function(e, r, o) {
        "use strict";
        o.d(r, {
            a: function() {
                return l
            }
        });
        var t = o(85893)
          , _ = o(41664)
          , d = o.n(_)
          , l = (o(67294),
        function(e) {
            var r;
            return (0,
            t.jsx)(d(), {
                href: "".concat(null === (r = e.url) || void 0 === r ? void 0 : r.toString().split("foresightgroup/").join("")),
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
    21139: function(e) {
        e.exports = {
            white: "#fff",
            main: "#273a84",
            "dark-main": "#0d5963",
            "light-grey": "#f1f1f2",
            "light-blue": "#e5ebee",
            grey: "#e6e7e8",
            "dark-grey": "#808285",
            "darkest-grey": "#332680",
            gold: "#ac924d",
            gold2: "#afa95c",
            body: "#332680",
            "dark-gold": "#716036",
            "deep-purple": "#6b5168",
            yellow: "#e1d155",
            "pale-yellow": "#f9f7ec",
            red: "red",
            "very-light-green-gradient-bg": "hero_very-light-green-gradient-bg__oCjHj",
            "light-green-gradient-bg": "hero_light-green-gradient-bg__ia8wK",
            "lighter-green": "hero_lighter-green__OJssr",
            "pink-gradient-bg": "hero_pink-gradient-bg__IbUrd",
            "text-white": "hero_text-white__qauUx",
            "text-main": "hero_text-main__mvs52",
            "text-dark-main": "hero_text-dark-main__57VBr",
            "text-light-grey": "hero_text-light-grey__YloLG",
            "text-light-blue": "hero_text-light-blue__zpmWm",
            "text-grey": "hero_text-grey__p9iZ3",
            "text-dark-grey": "hero_text-dark-grey__4GRpX",
            "text-darkest-grey": "hero_text-darkest-grey__kBJ7e",
            "text-gold": "hero_text-gold__YgfHX",
            "text-gold2": "hero_text-gold2__SOAUq",
            "text-body": "hero_text-body__lkvP9",
            "text-dark-gold": "hero_text-dark-gold__y4Nf8",
            "text-deep-purple": "hero_text-deep-purple__vdIQZ",
            "text-yellow": "hero_text-yellow__WMFZi",
            "text-pale-yellow": "hero_text-pale-yellow__3bJwU",
            "text-red": "hero_text-red___c7wP",
            "text-UIDark": "hero_text-UIDark__h17vp",
            "text-tone-light-purple": "hero_text-tone-light-purple__wANhT",
            "text-green": "hero_text-green__Ogasx",
            "bg-white": "hero_bg-white___WYGA",
            button: "hero_button__iAAmv",
            "bg-main": "hero_bg-main__aQZg8",
            "bg-dark-main": "hero_bg-dark-main__tLZan",
            "bg-light-grey": "hero_bg-light-grey__ZZPun",
            "bg-light-blue": "hero_bg-light-blue__Qp_W3",
            "bg-grey": "hero_bg-grey__7ry7o",
            "bg-dark-grey": "hero_bg-dark-grey__Ec820",
            "bg-darkest-grey": "hero_bg-darkest-grey__gUrDX",
            "bg-gold": "hero_bg-gold__FJJDB",
            "bg-gold2": "hero_bg-gold2__z_tR6",
            "bg-body": "hero_bg-body__UU54X",
            "bg-dark-gold": "hero_bg-dark-gold__lw_nL",
            "bg-deep-purple": "hero_bg-deep-purple__byuBF",
            "bg-yellow": "hero_bg-yellow__WcsIY",
            "bg-pale-yellow": "hero_bg-pale-yellow__Hhrwn",
            "bg-red": "hero_bg-red__mNR3p",
            "bg-UIDark": "hero_bg-UIDark__XWjMY",
            "bg-tone-light-purple": "hero_bg-tone-light-purple__87dY4",
            "bg-green": "hero_bg-green__bVwin",
            "border-top-white": "hero_border-top-white__qsvQm",
            "border-bottom-white": "hero_border-bottom-white__H8iPo",
            "border-left-white": "hero_border-left-white__g_33Y",
            "border-right-white": "hero_border-right-white__GcWpD",
            "border-white": "hero_border-white__cFUdt",
            "border-top-main": "hero_border-top-main__oYoWw",
            "border-bottom-main": "hero_border-bottom-main__TWDac",
            "border-left-main": "hero_border-left-main__FufP1",
            "border-right-main": "hero_border-right-main__018yi",
            "border-main": "hero_border-main__7uiOH",
            "border-top-dark-main": "hero_border-top-dark-main__UFMOy",
            "border-bottom-dark-main": "hero_border-bottom-dark-main__Or__7",
            "border-left-dark-main": "hero_border-left-dark-main__kjkjc",
            "border-right-dark-main": "hero_border-right-dark-main__Iqhtl",
            "border-dark-main": "hero_border-dark-main__cfjbW",
            "border-top-light-grey": "hero_border-top-light-grey__baf0l",
            "border-bottom-light-grey": "hero_border-bottom-light-grey__7lKvw",
            "border-left-light-grey": "hero_border-left-light-grey___M6DI",
            "border-right-light-grey": "hero_border-right-light-grey__zlZsS",
            "border-light-grey": "hero_border-light-grey__rwcvp",
            "border-top-light-blue": "hero_border-top-light-blue__yqJx2",
            "border-bottom-light-blue": "hero_border-bottom-light-blue__tCoxR",
            "border-left-light-blue": "hero_border-left-light-blue__OmSeF",
            "border-right-light-blue": "hero_border-right-light-blue__GUANZ",
            "border-light-blue": "hero_border-light-blue__WaVH_",
            "border-top-grey": "hero_border-top-grey__udGh5",
            "border-bottom-grey": "hero_border-bottom-grey__px434",
            "border-left-grey": "hero_border-left-grey___qIW5",
            "border-right-grey": "hero_border-right-grey__nhNir",
            "border-grey": "hero_border-grey__5aACS",
            "border-top-dark-grey": "hero_border-top-dark-grey__Rsaki",
            "border-bottom-dark-grey": "hero_border-bottom-dark-grey__3Z4j1",
            "border-left-dark-grey": "hero_border-left-dark-grey__5_l4R",
            "border-right-dark-grey": "hero_border-right-dark-grey__iPofV",
            "border-dark-grey": "hero_border-dark-grey__SnTcS",
            "border-top-darkest-grey": "hero_border-top-darkest-grey___zH_D",
            "border-bottom-darkest-grey": "hero_border-bottom-darkest-grey__VEocy",
            "border-left-darkest-grey": "hero_border-left-darkest-grey__ejJsZ",
            "border-right-darkest-grey": "hero_border-right-darkest-grey__Tp5uN",
            "border-darkest-grey": "hero_border-darkest-grey__M0DT6",
            "border-top-gold": "hero_border-top-gold__a7lA2",
            "border-bottom-gold": "hero_border-bottom-gold__4TRNl",
            "border-left-gold": "hero_border-left-gold__B5zgE",
            "border-right-gold": "hero_border-right-gold__F_IU5",
            "border-gold": "hero_border-gold__tJMby",
            "border-top-gold2": "hero_border-top-gold2__qgyjP",
            "border-bottom-gold2": "hero_border-bottom-gold2__7XuoI",
            "border-left-gold2": "hero_border-left-gold2__f4ucd",
            "border-right-gold2": "hero_border-right-gold2__WtWtX",
            "border-gold2": "hero_border-gold2__krUuf",
            "border-top-body": "hero_border-top-body__0E0YJ",
            "border-bottom-body": "hero_border-bottom-body__a7yaw",
            "border-left-body": "hero_border-left-body__VGxri",
            "border-right-body": "hero_border-right-body__xknbf",
            "border-body": "hero_border-body__u9smJ",
            "border-top-dark-gold": "hero_border-top-dark-gold___xGWp",
            "border-bottom-dark-gold": "hero_border-bottom-dark-gold__neWLj",
            "border-left-dark-gold": "hero_border-left-dark-gold__4RT4u",
            "border-right-dark-gold": "hero_border-right-dark-gold__B62UW",
            "border-dark-gold": "hero_border-dark-gold__P9Z_g",
            "border-top-deep-purple": "hero_border-top-deep-purple__X7JMd",
            "border-bottom-deep-purple": "hero_border-bottom-deep-purple__SJWjF",
            "border-left-deep-purple": "hero_border-left-deep-purple__4Gv7t",
            "border-right-deep-purple": "hero_border-right-deep-purple__BYLY9",
            "border-deep-purple": "hero_border-deep-purple__gTh1Y",
            "border-top-yellow": "hero_border-top-yellow__PjiQU",
            "border-bottom-yellow": "hero_border-bottom-yellow__6GM5z",
            "border-left-yellow": "hero_border-left-yellow__5LUX7",
            "border-right-yellow": "hero_border-right-yellow__aloJO",
            "border-yellow": "hero_border-yellow__gd7Y2",
            "border-top-pale-yellow": "hero_border-top-pale-yellow__Kgjwo",
            "border-bottom-pale-yellow": "hero_border-bottom-pale-yellow__y92Mz",
            "border-left-pale-yellow": "hero_border-left-pale-yellow___6CKf",
            "border-right-pale-yellow": "hero_border-right-pale-yellow___gbb3",
            "border-pale-yellow": "hero_border-pale-yellow__ohU65",
            "border-top-red": "hero_border-top-red__svQBY",
            "border-bottom-red": "hero_border-bottom-red__PlHWu",
            "border-left-red": "hero_border-left-red__Tb7NQ",
            "border-right-red": "hero_border-right-red__V5TLU",
            "border-red": "hero_border-red__xuz97",
            "border-top-UIDark": "hero_border-top-UIDark__uVNcw",
            "border-bottom-UIDark": "hero_border-bottom-UIDark___x5Z6",
            "border-left-UIDark": "hero_border-left-UIDark__9trCv",
            "border-right-UIDark": "hero_border-right-UIDark__EoK8e",
            "border-UIDark": "hero_border-UIDark__pYbYq",
            "border-top-tone-light-purple": "hero_border-top-tone-light-purple__MYBfh",
            "border-bottom-tone-light-purple": "hero_border-bottom-tone-light-purple__JJ7Cd",
            "border-left-tone-light-purple": "hero_border-left-tone-light-purple__qhw9n",
            "border-right-tone-light-purple": "hero_border-right-tone-light-purple__r0Kyl",
            "border-tone-light-purple": "hero_border-tone-light-purple__a_YN_",
            "border-top-green": "hero_border-top-green__eDowr",
            "border-bottom-green": "hero_border-bottom-green__hF2vu",
            "border-left-green": "hero_border-left-green__a3DCn",
            "border-right-green": "hero_border-right-green__MTdgL",
            "border-green": "hero_border-green__6brHQ",
            heroHeight: "hero_heroHeight__joEyE",
            hero: "hero_hero__wRCSW",
            gradient: "hero_gradient__6vJgo",
            left: "hero_left__H5Rgs",
            ripple: "hero_ripple__c2TVp",
            image: "hero_image__lzebx",
            down: "hero_down__ehFwj",
            message: "hero_message__tO0x3",
            heroImageSide: "hero_heroImageSide__MRYst",
            nav: "hero_nav__VaVKO",
            sharebox: "hero_sharebox__c4sjh"
        }
    }
}]);
