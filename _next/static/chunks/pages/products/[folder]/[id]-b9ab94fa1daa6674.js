(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2820],
  {
    93088: function (e, s, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[folder]/[id]",
        function () {
          return r(95129);
        },
      ]);
    },
    50710: function (e, s, r) {
      "use strict";
      var t = r(85893),
        n = (r(67294), r(4654));
      s.Z = function (e) {
        return (0, t.jsx)("div", {
          className:
            "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
          children: (0, t.jsx)("div", {
            className: "container pt-3 pb-3",
            children: (0, t.jsxs)("div", {
              className: "row justify-content-center",
              children: [
                (0, t.jsxs)("div", {
                  className: "col",
                  children: [
                    (0, t.jsx)("h2", {
                      children: "Find out how you can be part of our journey",
                    }),
                    (0, t.jsx)("p", {
                      children:
                        "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies.",
                    }),
                  ],
                }),
                (0, t.jsx)("div", {
                  className:
                    "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                  children: (0, t.jsx)(n.a, {
                    target: "_self",
                    url: "/shareholders",
                    class: "button primary dark",
                    children: "Visit Foresight Group Holdings",
                  }),
                }),
              ],
            }),
          }),
        });
      };
    },
    87555: function (e, s, r) {
      "use strict";
      var t = r(47568),
        n = r(10092),
        a = r(85893),
        i = r(67294),
        l = r(62284),
        c = r(7422),
        o = r.n(c),
        d = r(16482),
        u = r(11163),
        m = r(47041);
      s.Z = function (e) {
        var s,
          r = (0, m.getCookie)("audience"),
          c = (0, i.useState)(""),
          f = c[0],
          h = c[1],
          x = (0, u.useRouter)(),
          p = (function () {
            var s = (0, t.Z)(function (s) {
              var r, t, a;
              return (0, n.__generator)(this, function (n) {
                switch (n.label) {
                  case 0:
                    return (
                      s.preventDefault(),
                      (r = o()(s.target, { hash: !0 })),
                      [
                        4,
                        fetch("/api/submitForm", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            formId: e.formData._id,
                            formData: r,
                          }),
                        }),
                      ]
                    );
                  case 1:
                    return [4, n.sent()];
                  case 2:
                    return 200 !== (t = n.sent()).status
                      ? [3, 5]
                      : (s.target.reset(),
                        e.formData.gotoPageOnSubmit
                          ? [
                              4,
                              d.$h.getURLFromUmbracoId(
                                e.formData.gotoPageOnSubmit
                              ),
                            ]
                          : [3, 4]);
                  case 3:
                    (a = n.sent()), x.push(a), (n.label = 4);
                  case 4:
                    return h(e.formData.messageOnSubmit), [3, 6];
                  case 5:
                    h("<span class='red'>" + t + "</span>"), (n.label = 6);
                  case 6:
                    return [2];
                }
              });
            });
            return function (e) {
              return s.apply(this, arguments);
            };
          })();
        return (0, a.jsxs)("form", {
          className: "form complaints-form",
          onSubmit: p,
          children: [
            (0, a.jsx)(l.Z, {
              props:
                null === (s = e.formData.pages[1]) || void 0 === s
                  ? void 0
                  : s.fieldsets[0].columns[0].fields[0],
              value: r || "no audience",
            }),
            (0, a.jsxs)("div", {
              className: "row",
              children: [
                (0, a.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, a.jsx)(l.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[0],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, a.jsx)(l.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[1],
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "row",
              children: [
                (0, a.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, a.jsx)(l.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[2],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, a.jsx)(l.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[3],
                  }),
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "row",
              children: [
                (0, a.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, a.jsx)(l.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[4],
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, a.jsx)(l.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[5],
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "",
              children: (0, a.jsx)(l.Z, {
                props: e.formData.pages[0].fieldsets[0].columns[0].fields[6],
              }),
            }),
            (0, a.jsxs)("div", {
              className: "row",
              children: [
                (0, a.jsx)("div", {
                  className: "col-12 col-md-8",
                  children: (0, a.jsx)("div", {
                    className: "form-check",
                    children: (0, a.jsx)(l.Z, {
                      props:
                        e.formData.pages[0].fieldsets[0].columns[0].fields[7],
                    }),
                  }),
                }),
                (0, a.jsx)("div", {
                  className: "col-12 col-md-4 d-flex justify-content-end",
                  children: (0, a.jsx)("button", {
                    type: "submit",
                    className: "button secondary dark-text",
                    children: e.formData.submitLabel,
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "row",
              children: (0, a.jsx)("div", {
                className: "col-12 col-md-8 text-white",
                children: d.$h.markMedownRich(f),
              }),
            }),
          ],
        });
      };
    },
    77687: function (e, s, r) {
      "use strict";
      r.d(s, {
        a: function () {
          return n;
        },
      });
      var t = r(85893),
        n =
          (r(67294),
          function (e) {
            return (0, t.jsxs)("div", {
              className: "text ".concat(e.align),
              children: [
                e.children,
                e.ctaURL
                  ? (0, t.jsx)("a", {
                      href: e.ctaURL,
                      className: "button primary dark",
                      target: e.target,
                      children: e.ctaCopy,
                    })
                  : null,
              ],
            });
          });
    },
    38569: function (e, s, r) {
      "use strict";
      r.d(s, {
        l: function () {
          return a;
        },
      });
      var t = r(85893),
        n = (r(67294), r(77687)),
        a = function (e) {
          return (0, t.jsx)(t.Fragment, {
            children:
              e.children &&
              (0, t.jsx)("div", {
                className: "container-fluid  ".concat(
                  e.backgroundColour ? "py-5 my-0" : "my-5"
                ),
                style: { backgroundColor: "#" + e.backgroundColour },
                children: (0, t.jsx)("div", {
                  className: "container",
                  children: (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsx)("div", {
                      className: "col ".concat(e.align),
                      children: (0, t.jsx)(n.a, {
                        ctaCopy: "",
                        ctaURL: "",
                        target: "",
                        children: e.children,
                      }),
                    }),
                  }),
                }),
              }),
          });
        };
    },
    47941: function (e, s, r) {
      "use strict";
      r.d(s, {
        A: function () {
          return n;
        },
      });
      var t = r(85893),
        n =
          (r(67294),
          function (e) {
            return (0, t.jsx)("div", {
              className: "col-6 col-md-4 col-lg-3 portfolio-tile",
              children:
                "N/A" != e.link
                  ? (0, t.jsx)("a", {
                      href: e.link,
                      target: "_blank",
                      children: (0, t.jsx)("div", {
                        className: "item",
                        children: (0, t.jsx)("img", {
                          src: e.logo + "?width=250",
                          alt: e.altText,
                          loading: "lazy",
                        }),
                      }),
                    })
                  : (0, t.jsx)("div", {
                      className: "item",
                      children: (0, t.jsx)("img", {
                        src: e.logo + "?width=250",
                        alt: e.altText,
                        loading: "lazy",
                      }),
                    }),
            });
          });
    },
    45511: function (e, s, r) {
      "use strict";
      r.d(s, {
        x: function () {
          return n;
        },
      });
      var t = r(85893),
        n =
          (r(67294),
          function (e) {
            return (0, t.jsx)("div", {
              className: "container-fluid pt-5 portfolio-tile-holder ".concat(
                e.classes
              ),
              children: (0, t.jsxs)("div", {
                className: "container",
                children: [
                  (0, t.jsx)("div", {
                    className: "row",
                    children: (0, t.jsxs)("div", {
                      className: "col",
                      children: [
                        (0, t.jsx)("h2", {
                          className: "text-center",
                          children: e.heading,
                        }),
                        (0, t.jsx)("p", {
                          className: "mb-4",
                          children: e.copy,
                        }),
                      ],
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "row justify-content-center",
                    children: e.children,
                  }),
                ],
              }),
            });
          });
    },
    95129: function (e, s, r) {
      "use strict";
      r.r(s),
        r.d(s, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return p;
          },
        });
      var t = r(85893),
        n = r(67294),
        a = r(13184),
        i = r(50710),
        l = r(16482),
        c = r(47941),
        o = r(45511),
        d = r(77687),
        u = r(38569),
        m = r(87555),
        f = r(73983),
        h = function (e) {
          var s, r;
          return (
            "Solid Green" === e.res.tint
              ? (r = "green")
              : "Solid Pink" === e.res.tint && (r = "purple"),
            (0, t.jsxs)("div", {
              children: [
                (0, t.jsx)(l.$h.PageHead, {
                  siteURL: e.res.url.split("foresightgroup/").join(""),
                  OGimageURL: (
                    null === (s = e.res.metaImage) || void 0 === s
                      ? void 0
                      : s.url
                  )
                    ? e.res.metaImage.url
                    : "",
                  OGtitle: e.res.metaTitle ? e.res.metaTitle : "",
                  OGpageDescription: e.res.metaDescription
                    ? e.res.metaDescription
                    : "",
                }),
                (0, t.jsx)(f.Z, {
                  image: e.res.image.url + "?width=1080",
                  level: 2,
                  text: e.res.heroText,
                  tint: r,
                }),
                (0, t.jsx)(u.l, {
                  children: (0, t.jsx)(d.a, {
                    ctaCopy: "",
                    ctaURL: "",
                    target: "",
                    children: l.$h.markMedownRich(e.res.bodyCopy),
                  }),
                }),
                e.res.form &&
                  (0, t.jsx)("div", {
                    className: "container-fluid py-5 bg-light-blue",
                    children: (0, t.jsx)("div", {
                      className: "container ",
                      children: (0, t.jsx)("div", {
                        className: "row col",
                        children: (0, t.jsx)(m.Z, { formData: e.res.form }),
                      }),
                    }),
                  }),
                e.res.platformLinks &&
                  (0, t.jsx)(o.x, {
                    heading: "",
                    copy: "",
                    classes: "",
                    children: e.res.platformLinks.map(function (e, s) {
                      return (0,
                      t.jsx)(c.A, { altText: e.name, logo: e.logo ? e.logo.url : "/assets/images/fs-logo-2020.svg", link: e.link ? e.link : "https://www.foresightgroup.eu/" }, s);
                    }),
                  }),
              ],
            })
          );
        },
        x = !0;
      function p(e) {
        return (
          (0, n.useEffect)(function () {}),
          (0, t.jsxs)(a.Z, {
            id: "root",
            className: "some-class-name",
            children: [
              1 == e.showInvestInPlatformLinks
                ? (0, t.jsx)(h, { res: e.data.content })
                : "",
              (0, t.jsx)(i.Z, {}),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [7948, 7642, 9407, 3184, 3983, 9774, 2888, 179], function () {
      return (s = 93088), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
