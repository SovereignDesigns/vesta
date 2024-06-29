(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9934],
  {
    74176: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/resources/documents",
        function () {
          return t(35922);
        },
      ]);
    },
    50710: function (e, n, t) {
      "use strict";
      var i = t(85893),
        l = (t(67294), t(4654));
      n.Z = function (e) {
        return (0, i.jsx)("div", {
          className:
            "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
          children: (0, i.jsx)("div", {
            className: "container pt-3 pb-3",
            children: (0, i.jsxs)("div", {
              className: "row justify-content-center",
              children: [
                (0, i.jsxs)("div", {
                  className: "col",
                  children: [
                    (0, i.jsx)("h2", {
                      children: "Find out how you can be part of our journey",
                    }),
                    (0, i.jsx)("p", {
                      children:
                        "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies.",
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className:
                    "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                  children: (0, i.jsx)(l.a, {
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
    4654: function (e, n, t) {
      "use strict";
      t.d(n, {
        a: function () {
          return a;
        },
      });
      var i = t(85893),
        l = t(41664),
        r = t.n(l),
        a =
          (t(67294),
          function (e) {
            var n;
            return (0, i.jsx)(r(), {
              href: "".concat(
                null === (n = e.url) || void 0 === n
                  ? void 0
                  : n.toString().split("foresightgroup/").join("")
              ),
              children: (0, i.jsx)("a", {
                className: "button " + e.class,
                target: e.target,
                children: e.children,
              }),
            });
          });
    },
    90195: function (e, n, t) {
      "use strict";
      var i = t(85893),
        l = t(67814),
        r = t(93024);
      t(67294);
      n.Z = function (e) {
        var n,
          t,
          a,
          o = "",
          c = "?" + new Date().getTime();
        return (
          (null === (n = e.item.document) || void 0 === n ? void 0 : n.url)
            ? ((o = e.item.document.url + c), "file-pdf")
            : (null === (t = e.item.file) || void 0 === t ? void 0 : t.url)
            ? ((o =
                null === (a = e.item.file) || void 0 === a ? void 0 : a.url),
              "video")
            : ((o = e.item.uRL),
              "Audio" == e.item.__typename ? "podcast" : r.xLg),
          (0, i.jsx)(
            "div",
            {
              className: "col-12 col-md-6 col-xl-3 mb-4 ",
              children: (0, i.jsx)("a", {
                href: o,
                target: "_blank",
                children: (0, i.jsxs)("div", {
                  className: "item p-4",
                  children: [
                    (0, i.jsx)(l.G, {
                      icon: ["fal", "icons"],
                      className: "logo",
                    }),
                    e.item.secondaryFilter && e.item.secondaryFilter.length > 0
                      ? (0, i.jsx)("p", {
                          className: "category",
                          children:
                            e.item.secondaryFilter[0] ||
                            e.item.secondaryFilter[0],
                        })
                      : (0, i.jsx)("p", { className: "noCategory" }),
                    (0, i.jsx)("p", {
                      className: "title h3",
                      children: e.item.name || e.item.document.name,
                    }),
                    (0, i.jsxs)("p", {
                      className: "link",
                      children: [
                        e.item.ctaCopy ? e.item.ctaCopy : "Go to resource ",
                        (0, i.jsx)(l.G, {
                          style: { top: "4px" },
                          icon: ["fal", "long-arrow-right"],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            },
            e.i
          )
        );
      };
    },
    63484: function (e, n, t) {
      "use strict";
      t.d(n, {
        R: function () {
          return o;
        },
      });
      var i = t(85893),
        l = t(67294),
        r = t(45879),
        a = t(90195),
        o = function (e) {
          var n = e.data,
            t = (0, l.useState)(e.label2 ? e.label2 : "All Document Types"),
            o = t[0],
            c = t[1],
            s = (0, l.useState)(e.label1 ? e.label1 : "All Products"),
            d = s[0],
            u = s[1],
            m = (0, l.useState)("inline"),
            h = m[0],
            f = m[1];
          (0, l.useEffect)(
            function () {
              var e = localStorage.getItem("Chosen Product");
              void 0 != e && e.length > 1 && u(e);
            },
            [d]
          );
          var p = function (e) {
              c(e.target.value);
            },
            v = function (e) {
              u(e.target.value),
                f("block"),
                localStorage.setItem("Chosen Product", "");
            },
            x = function () {
              var e = [];
              n.map(function (n) {
                var t;
                null === (t = n.primaryFilter) ||
                  void 0 === t ||
                  t.map(function (n) {
                    e.push(n);
                  });
              });
              var t,
                l = e.length,
                r = [],
                a = {};
              for (t = 0; t < l; t++) a[e[t]] = 0;
              for (t in a)
                r.push(
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(
                      "button",
                      {
                        value: t,
                        className: "dropdown-item",
                        onClick: function (e) {
                          return v(e);
                        },
                        children: t,
                      },
                      t
                    ),
                  })
                );
              return r;
            },
            j = function () {
              var e = [];
              n.map(function (n) {
                var t;
                null === (t = n.secondaryFilter) ||
                  void 0 === t ||
                  t.map(function (t) {
                    var i;
                    (null === (i = n.primaryFilter) || void 0 === i
                      ? void 0
                      : i.includes(d)) && e.push(t);
                  });
              });
              var t,
                l = e.length,
                r = [],
                a = {};
              for (t = 0; t < l; t++) a[e[t]] = 0;
              for (t in a)
                r.push(
                  (0, i.jsx)("li", {
                    children: (0, i.jsx)(
                      "button",
                      {
                        value: t,
                        className: "dropdown-item",
                        onClick: function (e) {
                          return p(e);
                        },
                        children: t,
                      },
                      t
                    ),
                  })
                );
              return r;
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)("div", {
                className: "container-fluid team-tile-filters",
                children: (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsxs)("div", {
                    className: "row filters pb-5 ",
                    children: [
                      (0, i.jsx)("div", {
                        className: "col-sm-6 col-md-4 col-lg-4 col-xl-3",
                        children: (0, i.jsxs)(r.a, {
                          initialText: d,
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("button", {
                                value: e.label1 ? e.label1 : "All Products",
                                className: "dropdown-item",
                                onClick: function (e) {
                                  return v(e);
                                },
                                children: e.label1 ? e.label1 : "All Products",
                              }),
                            }),
                            (0, i.jsx)(x, {}),
                          ],
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "col-sm-6 col-md-4 col-lg-4 col-xl-3",
                        style: { display: h },
                        children: (0, i.jsxs)(r.a, {
                          initialText: o,
                          children: [
                            (0, i.jsx)("li", {
                              children: (0, i.jsx)("button", {
                                value: e.label2
                                  ? e.label2
                                  : "All Document Types",
                                className: "dropdown-item",
                                onClick: function (e) {
                                  return p(e);
                                },
                                children: e.label2
                                  ? e.label2
                                  : "All Document Types",
                              }),
                            }),
                            (0, i.jsx)(j, {}),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "document-list container-fluid pb-5",
                children: (0, i.jsx)("div", {
                  className: "container",
                  children: (0, i.jsx)("div", {
                    className: "row justify-content-center",
                    children: (function (n) {
                      return "All Products" !== d && d !== e.label1
                        ? n
                            .filter(function (n) {
                              var t;
                              return "All Products" !== d && d !== e.label1
                                ? null === (t = n.primaryFilter) || void 0 === t
                                  ? void 0
                                  : t.includes(d)
                                : n;
                            })
                            .filter(function (n) {
                              return "All Document Types" !== o &&
                                o !== e.label2
                                ? n.secondaryFilter.includes(o)
                                : n;
                            })
                            .map(function (e) {
                              return (0, i.jsx)(a.Z, { item: e }, n.indexOf(e));
                            })
                        : n.map(function (e) {
                            return (0, i.jsx)(a.Z, { item: e }, n.indexOf(e));
                          });
                    })(e.data),
                  }),
                }),
              }),
            ],
          });
        };
    },
    35922: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return s;
          },
          default: function () {
            return d;
          },
        });
      var i = t(85893),
        l = (t(67294), t(13184)),
        r = t(50710),
        a = t(47041),
        o = t(16482),
        c = t(63484),
        s = !0;
      function d(e) {
        var n = (0, a.getCookie)("audience");
        return (0, i.jsxs)(l.Z, {
          children: [
            (0, i.jsx)(o.$h.PageHead, {
              siteURL: e.payLoad.content.url.split("foresightgroup/").join(""),
              OGimageURL: e.payLoad.content.metaImage
                ? e.payLoad.content.metaImage
                : "",
              OGtitle: e.payLoad.content.metaTitle
                ? e.payLoad.content.metaTitle
                : "",
              OGpageDescription: e.payLoad.content.metaDescription
                ? e.payLoad.content.metaDescription
                : "",
            }),
            (0, i.jsx)("div", {
              className: "container-fluid py-5",
              children: (0, i.jsx)("div", {
                className: "container",
                children: (0, i.jsx)("div", {
                  className: "row",
                  children: (0, i.jsxs)("div", {
                    className: "col",
                    children: [
                      "general" == n &&
                        o.$h.markMedownRich(e.payLoad.content.docLibraryIntro),
                      "private-investor" == n &&
                        o.$h.markMedownRich(
                          e.payLoad.content.individualDocLibraryIntro
                        ),
                      "institutional-investor" == n &&
                        o.$h.markMedownRich(
                          e.payLoad.content.institutionalDocLibraryIntro
                        ),
                      "financial-intermediary" == n &&
                        o.$h.markMedownRich(
                          e.payLoad.content.intermediaryDocLibraryIntro
                        ),
                      "sme" == n &&
                        o.$h.markMedownRich(
                          e.payLoad.content.sMEDocLibraryIntro
                        ),
                    ],
                  }),
                }),
              }),
            }),
            (0, i.jsx)(c.R, { data: e.payLoad.allDocument.items }),
            (0, i.jsx)(r.Z, {}),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [7948, 7642, 3184, 9774, 2888, 179], function () {
      return (n = 74176), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
