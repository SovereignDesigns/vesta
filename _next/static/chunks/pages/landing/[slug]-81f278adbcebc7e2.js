(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6890],
  {
    69389: function (e, s, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/landing/[slug]",
        function () {
          return i(21978);
        },
      ]);
    },
    87555: function (e, s, i) {
      "use strict";
      var n = i(47568),
        o = i(10092),
        l = i(85893),
        a = i(67294),
        c = i(62284),
        t = i(7422),
        r = i.n(t),
        d = i(16482),
        m = i(11163),
        u = i(47041);
      s.Z = function (e) {
        var s,
          i = (0, u.getCookie)("audience"),
          t = (0, a.useState)(""),
          h = t[0],
          v = t[1],
          p = (0, m.useRouter)(),
          x = (function () {
            var s = (0, n.Z)(function (s) {
              var i, n, l;
              return (0, o.__generator)(this, function (o) {
                switch (o.label) {
                  case 0:
                    return (
                      s.preventDefault(),
                      (i = r()(s.target, { hash: !0 })),
                      [
                        4,
                        fetch("/api/submitForm", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            formId: e.formData._id,
                            formData: i,
                          }),
                        }),
                      ]
                    );
                  case 1:
                    return [4, o.sent()];
                  case 2:
                    return 200 !== (n = o.sent()).status
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
                    (l = o.sent()), p.push(l), (o.label = 4);
                  case 4:
                    return v(e.formData.messageOnSubmit), [3, 6];
                  case 5:
                    v("<span class='red'>" + n + "</span>"), (o.label = 6);
                  case 6:
                    return [2];
                }
              });
            });
            return function (e) {
              return s.apply(this, arguments);
            };
          })();
        return (0, l.jsxs)("form", {
          className: "form complaints-form",
          onSubmit: x,
          children: [
            (0, l.jsx)(c.Z, {
              props:
                null === (s = e.formData.pages[1]) || void 0 === s
                  ? void 0
                  : s.fieldsets[0].columns[0].fields[0],
              value: i || "no audience",
            }),
            (0, l.jsxs)("div", {
              className: "row",
              children: [
                (0, l.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, l.jsx)(c.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[0],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, l.jsx)(c.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[1],
                  }),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "row",
              children: [
                (0, l.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, l.jsx)(c.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[2],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, l.jsx)(c.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[3],
                  }),
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className: "row",
              children: [
                (0, l.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, l.jsx)(c.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[4],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "col-12 col-md-6",
                  children: (0, l.jsx)(c.Z, {
                    props:
                      e.formData.pages[0].fieldsets[0].columns[0].fields[5],
                  }),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "",
              children: (0, l.jsx)(c.Z, {
                props: e.formData.pages[0].fieldsets[0].columns[0].fields[6],
              }),
            }),
            (0, l.jsxs)("div", {
              className: "row",
              children: [
                (0, l.jsx)("div", {
                  className: "col-12 col-md-8",
                  children: (0, l.jsx)("div", {
                    className: "form-check",
                    children: (0, l.jsx)(c.Z, {
                      props:
                        e.formData.pages[0].fieldsets[0].columns[0].fields[7],
                    }),
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "col-12 col-md-4 d-flex justify-content-end",
                  children: (0, l.jsx)("button", {
                    type: "submit",
                    className: "button secondary dark-text",
                    children: e.formData.submitLabel,
                  }),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "row",
              children: (0, l.jsx)("div", {
                className: "col-12 col-md-8 text-white",
                children: d.$h.markMedownRich(h),
              }),
            }),
          ],
        });
      };
    },
    94574: function (e, s, i) {
      "use strict";
      i.d(s, {
        j: function () {
          return a;
        },
      });
      var n = i(85893),
        o = (i(67294), i(16482)),
        l = i(67814),
        a = function (e) {
          return (0, n.jsx)("div", {
            className: "blocks col-sm-12 col-md-".concat(e.columnSize),
            children: (0, n.jsx)("div", {
              className: "item",
              children: (0, n.jsxs)("div", {
                className:
                  "heading d-flex flex-sm-column flex-md-column flex-xs-column",
                children: [
                  e.icon ? (0, n.jsx)("img", { src: e.icon, alt: "" }) : null,
                  e.faIcon
                    ? (0, n.jsx)(l.G, {
                        color: "#".concat(e.iconColour),
                        icon: ["fal", "".concat(e.faIcon)],
                      })
                    : null,
                  (0, n.jsxs)("div", {
                    className: "copy-holder",
                    children: [
                      (0, n.jsx)("h3", { className: "", children: e.heading }),
                      (0, n.jsx)("p", {
                        className: "copy mt-2",
                        children: e.copy,
                      }),
                      e.longCopy
                        ? (0, n.jsx)("div", {
                            className: "copy mt-2",
                            children: o.$h.markMedownRich(e.longCopy),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        };
    },
    587: function (e, s, i) {
      "use strict";
      i.d(s, {
        v: function () {
          return a;
        },
      });
      var n = i(85893),
        o = (i(67294), i(16482)),
        l = i(4654),
        a = function (e) {
          var s, i, a;
          return (0, n.jsx)("div", {
            className:
              "container-fluid colinfo pt-5 pb-5 icon-text-holder ".concat(
                e.classes
              ),
            children: (0, n.jsxs)("div", {
              className: "container",
              children: [
                (0, n.jsx)("div", {
                  className: "row justify-content-center",
                  children: (0, n.jsx)("div", {
                    className: "col col-lg-8",
                    children: o.$h.markMedownRich(e.copy),
                  }),
                }),
                e.children &&
                  (0, n.jsx)("div", {
                    className:
                      "mt-5 row justify-content-center align-items-baseline",
                    children: e.children,
                  }),
                e.cta &&
                  (0, n.jsx)("div", {
                    className: "row mt-5",
                    children: (0, n.jsx)("div", {
                      className: "col",
                      children: (0, n.jsx)(l.a, {
                        url:
                          null === (s = e.cta) || void 0 === s ? void 0 : s.url,
                        target:
                          null === (i = e.cta) || void 0 === i
                            ? void 0
                            : i.target,
                        class: "button primary dark mx-auto",
                        children:
                          null === (a = e.cta) || void 0 === a
                            ? void 0
                            : a.name,
                      }),
                    }),
                  }),
              ],
            }),
          });
        };
    },
    21978: function (e, s, i) {
      "use strict";
      i.r(s),
        i.d(s, {
          __N_SSP: function () {
            return x;
          },
          default: function () {
            return f;
          },
        });
      var n = i(41799),
        o = i(85893),
        l = i(13184),
        a = i(16482),
        c = i(48334),
        t = i(27404),
        r = i(587),
        d = i(94574),
        m = i(87555),
        u = i(97147),
        h = i(32142),
        v = i(47041),
        p = (i(67294), i(73983)),
        x = !0;
      function f(e) {
        var s, i;
        (0, v.getCookie)("audience") ||
          (0, v.setCookies)("audience", "general", {
            path: "/",
            maxAge: 2628e3,
            sameSite: !0,
          });
        var x = e.payLoad.landingPage;
        return (0, o.jsxs)(l.Z, {
          additionalLogo:
            null === x ||
            void 0 === x ||
            null === (s = x.jointLogo) ||
            void 0 === s
              ? void 0
              : s.url,
          className: "landing",
          children: [
            (0, o.jsx)(a.$h.PageHead, {
              siteURL: (null === x || void 0 === x ? void 0 : x.url)
                ? x.url.split("foresightgroup/").join("")
                : "",
              OGimageURL:
                null === x ||
                void 0 === x ||
                null === (i = x.metaImage) ||
                void 0 === i
                  ? void 0
                  : i.url,
              OGtitle: null === x || void 0 === x ? void 0 : x.metaTitle,
              OGpageDescription:
                null === x || void 0 === x ? void 0 : x.metaDescription,
            }),
            (0, o.jsx)(p.Z, {
              text: "",
              notRichText: null === x || void 0 === x ? void 0 : x.title,
              image:
                (null === x || void 0 === x ? void 0 : x.image.url) +
                "?width=1080",
              level: 2,
              cta: null === x || void 0 === x ? void 0 : x.cTA,
              tint: "purple",
            }),
            x.sections.map(function (e, s) {
              return "CopyBlock" == e.__typename
                ? (0, o.jsx)(
                    "div",
                    {
                      className: "container py-5",
                      children: (0, o.jsx)("div", {
                        className: "row justify-content-center",
                        children: (0, o.jsxs)("div", {
                          className: "col",
                          children: [
                            (0, o.jsx)("h2", { children: e.sectionTitle }),
                            a.$h.markMedownRich(e.bodyCopy),
                          ],
                        }),
                      }),
                    },
                    s
                  )
                : "VideoBlock" == e.__typename
                ? (0, o.jsxs)(
                    "div",
                    {
                      className: "container pt-5",
                      children: [
                        (0, o.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, o.jsxs)("div", {
                            className: "col",
                            children: [
                              (0, o.jsx)("h2", { children: e.title }),
                              a.$h.markMedownRich(e.videoBlockSubCopy),
                            ],
                          }),
                        }),
                        (0, o.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, o.jsx)("div", {
                            className: "col",
                            children: (0, o.jsx)(c.n, {
                              source:
                                null === e ||
                                void 0 === e ||
                                null === (i = e.video) ||
                                void 0 === i
                                  ? void 0
                                  : i.videoURL,
                              poster: "",
                            }),
                          }),
                        }),
                      ],
                    },
                    s
                  )
                : "ColumnBlock" == e.__typename
                ? (0, o.jsx)(t.s, (0, n.Z)({}, [e.cTAComponents]), s)
                : "StatBoxes" == e.__typename
                ? (0, o.jsx)(o.Fragment, {
                    children: (0, o.jsx)(
                      r.v,
                      {
                        heading: e.sectionTitle,
                        copy: e.subCopy,
                        children: e.statBoxes.map(function (e, s) {
                          return (0,
                          o.jsx)(d.j, { columnSize: 4, heading: e.numberOfUnits, copy: a.$h.markMedownRich(e.description), faIcon: e.fontAwesomeIconString, iconColour: e.iconColour, longCopy: e.longerDescription }, s);
                        }),
                      },
                      s
                    ),
                  })
                : "FormBlock" == e.__typename
                ? (0, o.jsx)(
                    "div",
                    {
                      className: "container-fluid py-5 bg-main",
                      children: (0, o.jsx)("div", {
                        className: "container",
                        children: (0, o.jsxs)("div", {
                          className: "row",
                          children: [
                            (0, o.jsxs)("div", {
                              className: "col-12 pb-4 text-white",
                              children: [
                                (0, o.jsx)("h2", { children: e.sectionTitle }),
                                a.$h.markMedownRich(e.subCopy),
                              ],
                            }),
                            (0, o.jsx)(m.Z, { formData: e.pardotForm }),
                          ],
                        }),
                      }),
                    },
                    s
                  )
                : "CarouselBlock" == e.__typename
                ? (0, o.jsx)(u.a, {
                    slidesToShowDesktop: 1,
                    slidesToShowTablet: 1,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    sectionTitle: "",
                    showDotsDesktop: !0,
                    buttonStyle: "white",
                    children: e.carouselItems.map(function (e, s) {
                      var i, n, l;
                      return (0,
                      o.jsx)(h.g, { heading: e.title, copy: e.quote, author: null === (i = e.author) || void 0 === i ? void 0 : i.authorname, title: null === (n = e.author) || void 0 === n ? void 0 : n.title, image: null === (l = e.image) || void 0 === l ? void 0 : l.url, video: e.video, url: e.cTALink && e.cTALink.url, cta: e.cTALink && e.cTALink.name, target: e.cTALink && e.cTALink.target, showGradient: !0 }, s);
                    }),
                  })
                : "SquareBlocksLandingPage" == e.__typename
                ? (0, o.jsxs)(o.Fragment, {
                    children: [
                      e.text &&
                        (0, o.jsx)("div", {
                          className: "container pt-5",
                          children: (0, o.jsx)("div", {
                            className: "row",
                            children: (0, o.jsx)("div", {
                              className: "col",
                              children: a.$h.markMedownRich(e.text),
                            }),
                          }),
                        }),
                      (0, o.jsx)(t.s, (0, n.Z)({}, [e.squares])),
                    ],
                  })
                : void 0;
              var i;
            }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(
      0,
      [7948, 7642, 2583, 9407, 2004, 3184, 3983, 833, 9774, 2888, 179],
      function () {
        return (s = 69389), e((e.s = s));
        var s;
      }
    );
    var s = e.O();
    _N_E = s;
  },
]);
