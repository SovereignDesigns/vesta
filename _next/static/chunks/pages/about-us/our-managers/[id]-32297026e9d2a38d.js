(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3333],
  {
    39703: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/about-us/our-managers/[id]",
        function () {
          return n(52247);
        },
      ]);
    },
    54036: function (e, t, n) {
      "use strict";
      var a = n(85893),
        c = n(67294),
        i = n(67814),
        r = n(4654),
        s = n(16482);
      t.Z = function (e) {
        var t = (0, c.useState)(!1),
          n = t[0],
          l = t[1],
          o = (0, c.useState)("not-active"),
          d = o[0],
          u = o[1],
          m = (0, c.useState)(""),
          h = m[0],
          x = m[1],
          f = (0, c.useState)(0.4),
          j = f[0],
          p = f[1],
          v = (0, c.useState)(!1),
          g =
            (v[0],
            v[1],
            function (e) {
              return null === e || void 0 === e
                ? void 0
                : e
                    .replace(
                      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      function (e, t, n, a) {
                        return "#" + t + t + n + n + a + a;
                      }
                    )
                    .substring(1)
                    .match(/.{2}/g)
                    .map(function (e) {
                      return parseInt(e, 16);
                    });
            });
        (0, c.useEffect)(function () {
          u(!0 === n ? "is_active" : "not-active");
          var t = e.color;
          0 === t.length && (t = "#4d384c"),
            t && x("rgba(" + g(t)[0] + "," + g(t)[1] + "," + g(t)[2]);
        });
        return (0, a.jsx)("div", {
          onClick: function () {
            l(!n), p(n ? 0.4 : 1);
          },
          className: "col-12 col-lg-4 ColContentRevealer text-white  ",
          children: (0, a.jsxs)("div", {
            className: "item ".concat(d),
            style: { backgroundColor: h + "," + "".concat(j) + ")" },
            onMouseEnter: function () {
              !n && p(1);
            },
            onMouseLeave: function () {
              !n && p(0.4);
            },
            children: [
              (0, a.jsx)("img", { src: e.image + "?width=400", alt: "" }),
              (0, a.jsx)("h2", { className: "title", children: e.title }),
              (0, a.jsx)("div", {
                className: "description h3",
                children: s.$h.markMedownRich(e.description),
              }),
              n
                ? (0, a.jsx)(i.G, {
                    className: "mt-4 contract-icon",
                    icon: ["fal", "compress-alt"],
                  })
                : (0, a.jsx)(i.G, {
                    className: "mt-4 expand-icon",
                    icon: ["fal", "expand-alt"],
                  }),
              (0, a.jsxs)("div", {
                className: "expandedCopy h3",
                children: [
                  s.$h.markMedownRich(e.expandedCopy),
                  (0, a.jsx)(r.a, {
                    url: e.url,
                    class: e.buttonclass,
                    target: e.target,
                    children: e.buttontext,
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    77687: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return c;
        },
      });
      var a = n(85893),
        c =
          (n(67294),
          function (e) {
            return (0, a.jsxs)("div", {
              className: "text ".concat(e.align),
              children: [
                e.children,
                e.ctaURL
                  ? (0, a.jsx)("a", {
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
    38569: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return i;
        },
      });
      var a = n(85893),
        c = (n(67294), n(77687)),
        i = function (e) {
          return (0, a.jsx)(a.Fragment, {
            children:
              e.children &&
              (0, a.jsx)("div", {
                className: "container-fluid  ".concat(
                  e.backgroundColour ? "py-5 my-0" : "my-5"
                ),
                style: { backgroundColor: "#" + e.backgroundColour },
                children: (0, a.jsx)("div", {
                  className: "container",
                  children: (0, a.jsx)("div", {
                    className: "row",
                    children: (0, a.jsx)("div", {
                      className: "col ".concat(e.align),
                      children: (0, a.jsx)(c.a, {
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
    52247: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return d;
          },
          default: function () {
            return u;
          },
        });
      var a = n(85893),
        c = (n(67294), n(54036)),
        i = n(13184),
        r = n(77687),
        s = n(38569),
        l = n(16482),
        o = n(73983),
        d = !0;
      function u(e) {
        var t,
          n = e.data.content;
        return (
          "Solid Green" === n.tint
            ? (t = "green")
            : "Solid Pink" === n.tint && (t = "purple"),
          (0, a.jsxs)(i.Z, {
            id: "root",
            className: "some-class-name",
            children: [
              (0, a.jsx)(l.$h.PageHead, {
                siteURL: n.url.split("foresightgroup/").join(""),
                OGimageURL: n.metaImage ? n.metaImage : "",
                OGtitle: n.metaTitle ? n.metaTitle : "",
                OGpageDescription: n.metaDescription ? n.metaDescription : "",
              }),
              (0, a.jsx)(o.Z, {
                image: n.image.url + "?width=1080",
                text: n.heroText,
                level: 2,
                tint: t,
              }),
              (0, a.jsx)(s.l, {
                children: (0, a.jsx)(r.a, {
                  ctaURL: "",
                  ctaCopy: "",
                  target: "",
                  children: l.$h.markMedownRich(n.bodyCopy),
                }),
              }),
              (0, a.jsx)("div", {
                className: "container-fluid my-5",
                children: (0, a.jsx)("div", {
                  className: "container position-relative",
                  children: (0, a.jsx)("div", {
                    className: "row stretched justify-content-center",
                    children: n.managedFunds.map(function (e, t) {
                      var n, i;
                      return (0,
                      a.jsx)(c.Z, { image: null === (n = e.image) || void 0 === n ? void 0 : n.url, title: e.title, description: e.shortCopy, color: e.bGColour ? "#" + e.bGColour : "", expandedCopy: e.longCopy, buttonclass: "primary dark", buttontext: e.cTALink && e.cTALink.name, url: e.cTALink && e.cTALink.url, target: null === (i = e.cTALabel) || void 0 === i ? void 0 : i.target }, t);
                    }),
                  }),
                }),
              }),
              n.rNSDocuments
                ? (0, a.jsx)("div", {
                    className: "container-fluid mb-5",
                    children: (0, a.jsxs)("div", {
                      className: "container",
                      children: [
                        n.documentTitle
                          ? (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsx)("div", {
                                className: "col",
                                children: (0, a.jsx)("h2", {
                                  className: "text-center",
                                  children: n.documentTitle,
                                }),
                              }),
                            })
                          : null,
                        (0, a.jsx)("div", {
                          className: "row",
                          children: (0, a.jsx)("div", {
                            className: "col",
                            children: (0, a.jsxs)("table", {
                              className: "table table-striped",
                              children: [
                                (0, a.jsx)("thead", { className: "d-none" }),
                                (0, a.jsx)("tbody", {
                                  children: n.rNSDocuments.map(function (e, t) {
                                    return (0,
                                    a.jsxs)("tr", { children: [(0, a.jsx)("th", { scope: "col", children: e.name }), (0, a.jsx)("td", { children: (0, a.jsx)("a", { href: e.url, className: "doc-download", children: "View report" }) })] });
                                  }),
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                  })
                : null,
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [7948, 7642, 9407, 3184, 3983, 9774, 2888, 179], function () {
      return (t = 39703), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
