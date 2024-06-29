(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1624],
  {
    20229: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/resources/events-webinars",
        function () {
          return n(2074);
        },
      ]);
    },
    50710: function (e, t, n) {
      "use strict";
      var r = n(85893),
        a = (n(67294), n(4654));
      t.Z = function (e) {
        return (0, r.jsx)("div", {
          className:
            "container-fluid journey footerCTA bg-tone-light-purple pt-5 pb-5",
          children: (0, r.jsx)("div", {
            className: "container pt-3 pb-3",
            children: (0, r.jsxs)("div", {
              className: "row justify-content-center",
              children: [
                (0, r.jsxs)("div", {
                  className: "col",
                  children: [
                    (0, r.jsx)("h2", {
                      children: "Find out how you can be part of our journey",
                    }),
                    (0, r.jsx)("p", {
                      children:
                        "Foresight Group Holdings; investing to build a sustainable future and grow thriving economies.",
                    }),
                  ],
                }),
                (0, r.jsx)("div", {
                  className:
                    "col-sm-12 col-md-5 col-lg-4 d-flex justify-content-md-end align-items-end mt-3 mt-md-0",
                  children: (0, r.jsx)(a.a, {
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
    4654: function (e, t, n) {
      "use strict";
      n.d(t, {
        a: function () {
          return o;
        },
      });
      var r = n(85893),
        a = n(41664),
        i = n.n(a),
        o =
          (n(67294),
          function (e) {
            var t;
            return (0, r.jsx)(i(), {
              href: "".concat(
                null === (t = e.url) || void 0 === t
                  ? void 0
                  : t.toString().split("foresightgroup/").join("")
              ),
              children: (0, r.jsx)("a", {
                className: "button " + e.class,
                target: e.target,
                children: e.children,
              }),
            });
          });
    },
    75243: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(85893),
        a = (n(67294), n(16482)),
        i = n(4654),
        o = function (e) {
          return (0, r.jsxs)("div", {
            className: "image-block row mb-5",
            children: [
              (0, r.jsx)("div", {
                className: "col-12 col-lg-6",
                children: e.item.image
                  ? (0, r.jsx)("img", {
                      src: e.item.image.url + "?width=700",
                      className: "image-block--image",
                    })
                  : null,
              }),
              (0, r.jsx)("div", {
                className: "col-12 col-lg-".concat(e.item.image ? "6" : "12"),
                children: (0, r.jsxs)("div", {
                  className: "image-block--content pt-lg-5",
                  children: [
                    e.item.title
                      ? (0, r.jsx)("h2", { children: e.item.title })
                      : (0, r.jsx)("h2", { children: e.item.name }),
                    (0, r.jsxs)("div", {
                      children: [
                        a.$h.markMedownRich(e.item.toolDescription),
                        a.$h.markMedownRich(e.item.description),
                        e.item.cTA
                          ? (0, r.jsxs)(i.a, {
                              url: e.item.cTA[0].url
                                .split("foresightgroup/")
                                .join(""),
                              class: "button primary dark",
                              target: "",
                              children: [e.item.cTA[0].name, " "],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    2074: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          __N_SSP: function () {
            return p;
          },
          default: function () {
            return h;
          },
        });
      var r = n(41799),
        a = n(69396),
        i = n(85893),
        o = n(67294),
        c = n(13184),
        s = n(50710),
        l = n(47041),
        d = (n(18698), n(16482)),
        u = n(75243),
        m = (0, l.getCookie)("audience"),
        p = !0;
      function h(e) {
        var t = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
          n = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          l =
            (e.payLoad.allEventWebinar.items.map(function (e) {
              return new Date(e.date);
            }),
            e.payLoad.allEventWebinar.items.map(function (e) {
              return (0, a.Z)((0, r.Z)({}, e), { date: new Date(e.date) });
            })),
          p = new Date(),
          h = l
            .filter(function (e) {
              return e.date > p;
            })
            .filter(function (e) {
              return "Event" === e.type;
            }),
          g = h.sort(function (e, t) {
            return Number(e.date) - Number(t.date);
          }),
          f = h.map(function (e) {
            var t = e.date.getUTCMonth() + 1,
              n = e.date.getUTCDate(),
              i = e.date.getUTCFullYear() + "/" + t + "/" + n,
              o = e.date.getHours(),
              c = e.date.getMinutes();
            return (
              (e.time = o.toString() + ":" + c.toString().padStart(2, "0")),
              (0, a.Z)((0, r.Z)({}, e), { date: i })
            );
          }),
          y = [],
          v = (0, o.useState)(new Date(0)),
          j = v[0];
        v[1];
        return (
          g.length &&
            ((j = g[0].date),
            (y = f.find(function (e) {
              var r = j.getUTCMonth() + 1,
                a = j.getUTCDate(),
                i = j.getUTCFullYear() + "/" + r + "/" + a;
              return (
                (e.displayDate = ""
                  .concat(n[parseInt(j.getUTCDay().toPrecision())], " ")
                  .concat(j.getUTCDate(), " ")
                  .concat(t[parseInt(j.getUTCMonth().toPrecision())], " ")
                  .concat(j.getUTCFullYear())),
                e.date === i
              );
            }))),
          y || g[0],
          (0, i.jsxs)(c.Z, {
            id: "root",
            className: "some-class-name",
            children: [
              (0, i.jsx)(d.$h.PageHead, {
                siteURL: e.payLoad.content.url
                  .split("foresightgroup/")
                  .join(""),
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
                        "general" == m &&
                          d.$h.markMedownRich(
                            e.payLoad.content.generalEventIntro
                          ),
                        "private-investor" == m &&
                          d.$h.markMedownRich(
                            e.payLoad.content.individualEventIntro
                          ),
                        "institutional-investor" == m &&
                          d.$h.markMedownRich(
                            e.payLoad.content.institutionalEventIntro
                          ),
                        "financial-intermediary" == m &&
                          d.$h.markMedownRich(
                            e.payLoad.content.intermediaryEventIntro
                          ),
                        "sme" == m &&
                          d.$h.markMedownRich(e.payLoad.content.sMEEventIntro),
                      ],
                    }),
                  }),
                }),
              }),
              (0, i.jsx)("div", {
                className: "container-fluid py-5",
                children: (0, i.jsx)("div", {
                  className: "container image-block-container",
                  children:
                    e.payLoad.allEventWebinar.items.length > 0
                      ? e.payLoad.allEventWebinar.items.map(function (e, t) {
                          return (0, i.jsx)(u.r, { item: e }, t);
                        })
                      : (0, i.jsx)("p", { children: "No results" }),
                }),
              }),
              (0, i.jsx)(s.Z, {}),
            ],
          })
        );
      }
    },
    69396: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (t = null != t ? t : {}),
          Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var r = Object.getOwnPropertySymbols(e);
                  t &&
                    (r = r.filter(function (t) {
                      return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })),
                    n.push.apply(n, r);
                }
                return n;
              })(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              }),
          e
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
  },
  function (e) {
    e.O(0, [7948, 7642, 3184, 9774, 2888, 179], function () {
      return (t = 20229), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
