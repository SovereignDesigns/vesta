(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7594],
  {
    68107: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/products/[...slug]",
        function () {
          return t(81578);
        },
      ]);
    },
    81956: function (e, n, t) {
      "use strict";
      var o = t(85893),
        a = (t(67294), t(67814)),
        c = t(16482);
      n.Z = function (e) {
        var n = Math.floor(200 * Math.random()) + 1;
        return (0, o.jsx)("div", {
          className: "accordion",
          id: "accordion".concat(n),
          children: e.res.map(function (e, t) {
            return (0,
            o.jsxs)("div", { className: "accordion-item", children: [(0, o.jsx)("h2", { className: "accordion-header", id: "heading" + (t + n), children: (0, o.jsxs)("button", { className: "accordion-button collapsed", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#collapse" + (t + n), "aria-expanded": "true", "aria-controls": "collapse" + (t + n), children: [e.heading, " ", (0, o.jsx)(a.G, { icon: ["fal", "chevron-down"] })] }) }), (0, o.jsx)("div", { id: "collapse" + (t + n), className: "accordion-collapse collapse", "aria-labelledby": "heading" + (t + n), "data-bs-parent": "#accordion" + n, children: (0, o.jsx)("div", { className: "accordion-body", children: c.$h.markMedownRich(e.description) }) })] }, t);
          }),
        });
      };
    },
    54036: function (e, n, t) {
      "use strict";
      var o = t(85893),
        a = t(67294),
        c = t(67814),
        i = t(4654),
        r = t(16482);
      n.Z = function (e) {
        var n = (0, a.useState)(!1),
          t = n[0],
          l = n[1],
          s = (0, a.useState)("not-active"),
          d = s[0],
          u = s[1],
          m = (0, a.useState)(""),
          h = m[0],
          v = m[1],
          p = (0, a.useState)(0.4),
          x = p[0],
          g = p[1],
          f = (0, a.useState)(!1),
          j =
            (f[0],
            f[1],
            function (e) {
              return null === e || void 0 === e
                ? void 0
                : e
                    .replace(
                      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                      function (e, n, t, o) {
                        return "#" + n + n + t + t + o + o;
                      }
                    )
                    .substring(1)
                    .match(/.{2}/g)
                    .map(function (e) {
                      return parseInt(e, 16);
                    });
            });
        (0, a.useEffect)(function () {
          u(!0 === t ? "is_active" : "not-active");
          var n = e.color;
          0 === n.length && (n = "#4d384c"),
            n && v("rgba(" + j(n)[0] + "," + j(n)[1] + "," + j(n)[2]);
        });
        return (0, o.jsx)("div", {
          onClick: function () {
            l(!t), g(t ? 0.4 : 1);
          },
          className: "col-12 col-lg-4 ColContentRevealer text-white  ",
          children: (0, o.jsxs)("div", {
            className: "item ".concat(d),
            style: { backgroundColor: h + "," + "".concat(x) + ")" },
            onMouseEnter: function () {
              !t && g(1);
            },
            onMouseLeave: function () {
              !t && g(0.4);
            },
            children: [
              (0, o.jsx)("img", { src: e.image + "?width=400", alt: "" }),
              (0, o.jsx)("h2", { className: "title", children: e.title }),
              (0, o.jsx)("div", {
                className: "description h3",
                children: r.$h.markMedownRich(e.description),
              }),
              t
                ? (0, o.jsx)(c.G, {
                    className: "mt-4 contract-icon",
                    icon: ["fal", "compress-alt"],
                  })
                : (0, o.jsx)(c.G, {
                    className: "mt-4 expand-icon",
                    icon: ["fal", "expand-alt"],
                  }),
              (0, o.jsxs)("div", {
                className: "expandedCopy h3",
                children: [
                  r.$h.markMedownRich(e.expandedCopy),
                  (0, o.jsx)(i.a, {
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
    45818: function (e, n, t) {
      "use strict";
      var o = t(47568),
        a = t(10092),
        c = t(85893),
        i = t(7422),
        r = t.n(i),
        l = t(11163),
        s = t(67294),
        d = t(16482),
        u = t(62284);
      n.Z = function (e) {
        var n = (0, l.useRouter)(),
          t = (0, s.useState)(""),
          i = t[0],
          m = t[1],
          h = (function () {
            var t = (0, o.Z)(function (t) {
              var o, c, i;
              return (0, a.__generator)(this, function (a) {
                switch (a.label) {
                  case 0:
                    return (
                      t.preventDefault(),
                      (o = r()(t.target, { hash: !0 })),
                      [
                        4,
                        fetch("/api/submitForm", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({
                            formId: e.formData._id,
                            formData: o,
                          }),
                        }),
                      ]
                    );
                  case 1:
                    return [4, a.sent()];
                  case 2:
                    return 200 !== (c = a.sent()).status
                      ? [3, 5]
                      : (t.target.reset(),
                        e.formData.gotoPageOnSubmit
                          ? [
                              4,
                              d.$h.getURLFromUmbracoId(
                                e.formData.gotoPageOnSubmit
                              ),
                            ]
                          : [3, 4]);
                  case 3:
                    (i = a.sent()), n.push(i), (a.label = 4);
                  case 4:
                    return m(e.formData.messageOnSubmit), [3, 6];
                  case 5:
                    m("<span class='red'>" + c + "</span>"), (a.label = 6);
                  case 6:
                    return [2];
                }
              });
            });
            return function (e) {
              return t.apply(this, arguments);
            };
          })();
        return (0, c.jsx)(c.Fragment, {
          children:
            e.formData &&
            (0, c.jsxs)("form", {
              className: "form mt-5 ".concat(
                "white" === e.variant ? "white" : ""
              ),
              onSubmit: h,
              children: [
                (0, c.jsxs)("div", {
                  className: "row",
                  children: [
                    e.formData.pages[0].fieldsets.map(function (e) {
                      return e.columns.map(function (e, n) {
                        return (0, c.jsx)(
                          "div",
                          {
                            className: "col-lg-".concat(e.width, " text-white"),
                            children: e.fields.map(function (e, n) {
                              return (0, c.jsx)(u.Z, { props: e }, n);
                            }),
                          },
                          n
                        );
                      });
                    }),
                    (0, c.jsx)("div", {
                      className: "col-12 mt-4",
                      children: (0, c.jsx)("button", {
                        type: "submit",
                        className: "button ".concat(
                          "secondary light-text" !== e.variant
                            ? "primary dark"
                            : ""
                        ),
                        children: e.formData.submitLabel,
                      }),
                    }),
                  ],
                }),
                (0, c.jsx)("div", {
                  className: "row mt-4",
                  children: (0, c.jsx)("div", {
                    className: "col-12 col-md-8",
                    children: d.$h.markMedownRich(i),
                  }),
                }),
              ],
            }),
        });
      };
    },
    75778: function (e, n, t) {
      "use strict";
      t.d(n, {
        g: function () {
          return d;
        },
      });
      var o = t(47568),
        a = t(10092),
        c = t(85893),
        i = t(67294),
        r = t(16482),
        l = t(97147),
        s = t(32364),
        d = function (e) {
          var n,
            t,
            d = (0, i.useState)(),
            u = d[0],
            m = d[1],
            h = e.data.newsTags.map(function (e) {
              return { category_some: e };
            }),
            v = JSON.stringify(h).replace(/"category_some"/g, "category_some"),
            p =
              'query {\n    allNews(\n      first: 5,\n      orderBy: createDate_DESC,\n      where: {\n        websites_some: "Group",\n        OR: \n          '.concat(
                v,
                "\n      }\n    ) {\n      items {\n        name\n        image {\n          url\n        }\n        title\n        duration\n        datePublished\n        category\n        url\n        cTALabel\n      }\n    }\n  }"
              );
          return (
            (0, i.useEffect)(function () {
              function e() {
                return (e = (0, o.Z)(function () {
                  var e;
                  return (0, a.__generator)(this, function (n) {
                    switch (n.label) {
                      case 0:
                        return [4, r.$h.getUmbracoContentQLByID(p)];
                      case 1:
                        return (e = n.sent()), m(e), [2];
                    }
                  });
                })).apply(this, arguments);
              }
              !(function () {
                e.apply(this, arguments);
              })();
            }, []),
            (0, c.jsxs)(c.Fragment, {
              children: [
                (null ===
                  (n = null === u || void 0 === u ? void 0 : u.allNews.items) ||
                void 0 === n
                  ? void 0
                  : n.length) > 0 &&
                  (0, c.jsx)("div", {
                    className: "container-fluid pt-5",
                    children: (0, c.jsx)("div", {
                      className: "container",
                      children: (0, c.jsx)("div", {
                        className: "row",
                        children: (0, c.jsx)("div", {
                          className: "col text-center",
                          children: r.$h.markMedownRich(e.data.introCopy),
                        }),
                      }),
                    }),
                  }),
                (null ===
                  (t = null === u || void 0 === u ? void 0 : u.allNews.items) ||
                void 0 === t
                  ? void 0
                  : t.length) > 0 &&
                  (0, c.jsx)(l.a, {
                    slidesToShowDesktop: 3,
                    slidesToShowTablet: 2,
                    slidesToShowMobile: 1,
                    backgroundColour: "",
                    infinite: !0,
                    classes: "",
                    showDotsDesktop: !0,
                    children:
                      null === u || void 0 === u
                        ? void 0
                        : u.allNews.items.map(function (e, n) {
                            var t = e.datePublished.split("T")[0];
                            return (
                              (t = new Date(t)),
                              (0, c.jsx)(
                                s.n,
                                {
                                  backgroundImage: e.image && e.image.url,
                                  category: e.category,
                                  time: e.duration,
                                  date: t.toLocaleDateString("en-UK"),
                                  heading: e.title,
                                  description: e.description,
                                  url: e.url.split("all-news/").join(""),
                                  ctaText: e.cTALabel,
                                  responsiveClasses: "",
                                },
                                n
                              )
                            );
                          }),
                  }),
              ],
            })
          );
        };
    },
    28456: function (e, n, t) {
      "use strict";
      t.d(n, {
        a: function () {
          return r;
        },
      });
      var o = t(85893),
        a = (t(67294), t(16482)),
        c = t(10573),
        i = t.n(c),
        r = function (e) {
          return (0, o.jsx)("div", {
            className:
              "blocks col-sm-12 col-md-6 col-lg-3 mt-3 justify-content-center",
            children: (0, o.jsxs)("div", {
              className: "heading d-flex align-items-center flex-column",
              children: [
                e.icon
                  ? (0, o.jsx)("img", {
                      className: i().img,
                      src: e.icon,
                      alt: "",
                    })
                  : null,
                (0, o.jsx)("div", {
                  className: "copy-holder",
                  children: e.longCopy
                    ? (0, o.jsx)("div", {
                        className: "copy mt-4 text-center",
                        children: a.$h.markMedownRich(e.longCopy),
                      })
                    : null,
                }),
              ],
            }),
          });
        };
    },
    24073: function (e, n, t) {
      "use strict";
      t.d(n, {
        p: function () {
          return s;
        },
      });
      var o = t(85893),
        a = t(25675),
        c = t.n(a),
        i = t(16482),
        r = t(57995),
        l = t.n(r),
        s = function (e) {
          var n,
            t,
            a = e.data,
            r = e.isProductPage;
          return (0, o.jsx)("div", {
            className: "container-fluid my-5 ".concat(r ? l().radiant : ""),
            children: (0, o.jsxs)("div", {
              className: "container",
              children: [
                a.introCopy &&
                  (0, o.jsx)("div", {
                    className: "row",
                    children: (0, o.jsx)("div", {
                      className: "col-12 col-lg-9 text-white pt-5",
                      children: i.$h.markMedownRich(a.introCopy),
                    }),
                  }),
                (0, o.jsxs)("div", {
                  className: "row py-5 justify-content-center",
                  children: [
                    a.headshot &&
                      (0, o.jsx)("div", {
                        className: "col-12 col-lg-2",
                        children: (0, o.jsx)("div", {
                          className: l().img,
                          children: (0, o.jsx)(c(), {
                            src:
                              null === a ||
                              void 0 === a ||
                              null === (n = a.headshot) ||
                              void 0 === n
                                ? void 0
                                : n.url,
                            objectFit: "cover",
                            layout: "fill",
                            placeholder: "blur",
                            blurDataURL:
                              null === a ||
                              void 0 === a ||
                              null === (t = a.blur) ||
                              void 0 === t
                                ? void 0
                                : t.url,
                          }),
                        }),
                      }),
                    (0, o.jsx)("div", {
                      className: "col-12 ".concat(
                        (null === a || void 0 === a ? void 0 : a.headshot)
                          ? "col-lg-10"
                          : ""
                      ),
                      children: (0, o.jsxs)("figure", {
                        children: [
                          r
                            ? (0, o.jsxs)("blockquote", {
                                className: "".concat(l().quote, " text-white"),
                                children: [
                                  (0, o.jsx)("span", {
                                    className: l().quoteSymbol,
                                    children: '"',
                                  }),
                                  a.quote,
                                  (0, o.jsx)("span", {
                                    className: l().quoteSymbol,
                                    children: '"',
                                  }),
                                ],
                              })
                            : (0, o.jsx)("blockquote", {
                                className: l().quote,
                                children: a.quote,
                              }),
                          (0, o.jsx)("hr", {}),
                          (0, o.jsx)("figcaption", {
                            className: ""
                              .concat(l().author, " ")
                              .concat(r ? "text-white" : ""),
                            children: a.author,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        };
    },
    75186: function (e, n, t) {
      "use strict";
      var o = t(85893),
        a = (t(67294), t(16482));
      n.Z = function (e) {
        var n;
        return (0, o.jsxs)("div", {
          className: "row my-5 justify-content-between ".concat(
            e.reverse ? "flex-row-reverse" : ""
          ),
          children: [
            (0, o.jsx)("div", {
              className: "col-sm-12 col-md-5",
              children: (0, o.jsx)("img", {
                className: "img-fluid",
                src: e.image,
                alt: "",
              }),
            }),
            (0, o.jsxs)("div", {
              className: "col-sm-12 col-md-5 p-3 p-lg-0",
              children: [
                a.$h.markMedownRich(e.children),
                (0, o.jsx)("div", {
                  className: "d-flex",
                  children:
                    null === (n = e.ctas) || void 0 === n
                      ? void 0
                      : n.map(function (e, n) {
                          var t;
                          return (0,
                          o.jsx)("a", { href: null === (t = e.url) || void 0 === t ? void 0 : t.replace("/foresightgroup", ""), className: "button primary dark me-3", target: e.target, children: e.name });
                        }),
                }),
              ],
            }),
          ],
        });
      };
    },
    90195: function (e, n, t) {
      "use strict";
      var o = t(85893),
        a = t(67814),
        c = t(93024);
      t(67294);
      n.Z = function (e) {
        var n,
          t,
          i,
          r = "",
          l = "?" + new Date().getTime();
        return (
          (null === (n = e.item.document) || void 0 === n ? void 0 : n.url)
            ? ((r = e.item.document.url + l), "file-pdf")
            : (null === (t = e.item.file) || void 0 === t ? void 0 : t.url)
            ? ((r =
                null === (i = e.item.file) || void 0 === i ? void 0 : i.url),
              "video")
            : ((r = e.item.uRL),
              "Audio" == e.item.__typename ? "podcast" : c.xLg),
          (0, o.jsx)(
            "div",
            {
              className: "col-12 col-md-6 col-xl-3 mb-4 ",
              children: (0, o.jsx)("a", {
                href: r,
                target: "_blank",
                children: (0, o.jsxs)("div", {
                  className: "item p-4",
                  children: [
                    (0, o.jsx)(a.G, {
                      icon: ["fal", "icons"],
                      className: "logo",
                    }),
                    e.item.secondaryFilter && e.item.secondaryFilter.length > 0
                      ? (0, o.jsx)("p", {
                          className: "category",
                          children:
                            e.item.secondaryFilter[0] ||
                            e.item.secondaryFilter[0],
                        })
                      : (0, o.jsx)("p", { className: "noCategory" }),
                    (0, o.jsx)("p", {
                      className: "title h3",
                      children: e.item.name || e.item.document.name,
                    }),
                    (0, o.jsxs)("p", {
                      className: "link",
                      children: [
                        e.item.ctaCopy ? e.item.ctaCopy : "Go to resource ",
                        (0, o.jsx)(a.G, {
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
    81578: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          __N_SSP: function () {
            return U;
          },
          default: function () {
            return H;
          },
        });
      var o = t(41799),
        a = t(85893),
        c = t(67294),
        i = t(13184),
        r = t(47041),
        l = t(16482),
        s = t(73410),
        d = t(32142),
        u = t(97147),
        m = t(28094),
        h = t(75186),
        v = t(81956),
        p = t(587),
        x = t(28456),
        g = t(45818),
        f = t(4654),
        j = t(27404),
        y = t(24073),
        k = t(75778),
        N = t(73983),
        b = t(11163),
        w = t.n(b),
        C = t(90195),
        _ = function (e) {
          var n;
          return (0, a.jsx)("div", {
            className: "fundLiterature container-fluid py-5",
            children: (0, a.jsxs)("div", {
              className: "container",
              children: [
                (0, a.jsx)("div", {
                  className: "row justify-content-center",
                  children:
                    ((n = e.data),
                    n.map(function (e, n) {
                      return (0, c.createElement)(C.Z, { item: e, key: n });
                    })),
                }),
                (0, a.jsx)("div", {
                  className:
                    "row justify-content-center mt-4\n            ".concat(
                      e.data.length < 3 ? "d-none" : ""
                    ),
                  children: (0, a.jsx)("div", {
                    className: "col d-flex justify-content-center",
                    children: (0, a.jsx)("button", {
                      className: "button secondary dark-text",
                      onClick: function () {
                        localStorage.setItem("Chosen Product", e.dataFrom),
                          w().push({ pathname: "/resources/documents" });
                      },
                      children: "View All Documents",
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        T = t(94952),
        A = t(47568),
        S = t(10092),
        B = t(69396),
        L = t(26495),
        D = t(23148),
        P = t(98383),
        M = t.n(P);
      D.kL.register(D.qi, D.u, D.De);
      var G = function (e) {
        var n = e.chartData,
          t = (0, B.Z)((0, o.Z)({}, n), { labels: n.labels });
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsx)(L.$I, {
            data: t,
            options: {
              responsive: !0,
              plugins: {
                legend: {
                  display: !0,
                  position: "right",
                  labels: { boxWidth: 70, boxHeight: 20 },
                  font: { size: 21 },
                },
                tooltip: {
                  callbacks: {
                    label: function (e) {
                      return " " + e.parsed + "%";
                    },
                  },
                },
              },
            },
            "aria-label": "Chart showing percentage of each category",
            children: (0, a.jsx)("p", {
              children: n.labels.map(function (e, t) {
                var o = n.datasets[0].backgroundColor[t],
                  c = (
                    (n.datasets[0].data[t] /
                      n.datasets[0].data.reduce(function (e, n) {
                        return e + n;
                      }, 0)) *
                    100
                  ).toFixed(2);
                return (0,
                a.jsxs)("div", { className: M().keyHolder, children: [(0, a.jsx)("span", { className: M().key, style: { backgroundColor: o }, "aria-hidden": !0 }), (0, a.jsxs)("p", { className: M().label, children: [(0, a.jsx)("span", { children: e + " | " }), (0, a.jsx)("span", { className: "fw-bold", children: "".concat(c, "%") })] })] }, t);
              }),
            }),
          }),
        });
      };
      function R(e) {
        var n = e.data,
          t = (0, c.useState)(null),
          o = t[0],
          i = t[1];
        return (
          (0, c.useEffect)(function () {
            var e = (function () {
              var e = (0, A.Z)(function () {
                var e, t;
                return (0, S.__generator)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 3, , 4]), [4, fetch(n.url)];
                    case 1:
                      if (!(e = o.sent()).ok)
                        throw new Error("Network response was not ok");
                      return [4, e.json()];
                    case 2:
                      return (t = o.sent()), i(t), [3, 4];
                    case 3:
                      return o.sent(), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []),
          (0, a.jsx)("div", {
            className: "row",
            children: (0, a.jsx)("div", {
              className: "col-12",
              children: o
                ? (0, a.jsx)(G, { chartData: o })
                : (0, a.jsx)("p", { children: "Loading chart data..." }),
            }),
          })
        );
      }
      t(9085);
      var Z = function (e) {
        var n = e.chartData;
        return (0, a.jsx)(L.x1, {
          data: n,
          options: {
            scales: {
              x: { grid: { display: !1 } },
              y: { grid: { display: !0 } },
            },
            responsive: !0,
            plugins: {
              legend: { position: "bottom" },
              title: { display: !0, text: "Lorem ipsum dolor" },
            },
          },
        });
      };
      function $(e) {
        var n = e.data,
          t = (0, c.useState)(null),
          o = t[0],
          i = t[1];
        return (
          (0, c.useEffect)(function () {
            var e = (function () {
              var e = (0, A.Z)(function () {
                var e, t;
                return (0, S.__generator)(this, function (o) {
                  switch (o.label) {
                    case 0:
                      return o.trys.push([0, 3, , 4]), [4, fetch(n.url)];
                    case 1:
                      if (!(e = o.sent()).ok)
                        throw new Error("Network response was not ok");
                      return [4, e.json()];
                    case 2:
                      return (t = o.sent()), i(t), [3, 4];
                    case 3:
                      return o.sent(), [3, 4];
                    case 4:
                      return [2];
                  }
                });
              });
              return function () {
                return e.apply(this, arguments);
              };
            })();
            e();
          }, []),
          (0, a.jsx)("div", {
            className: "row",
            children: (0, a.jsx)("div", {
              className: "col-12",
              children: o
                ? (0, a.jsx)(Z, { chartData: o })
                : (0, a.jsx)("p", { children: "Loading chart data..." }),
            }),
          })
        );
      }
      var F = t(82481),
        q = t(19723),
        E = t(94574),
        I = t(77687),
        O = t(54036),
        Q = t(50710),
        U = !0;
      function H(e) {
        var n,
          t,
          b,
          w = (0, r.getCookie)("audience");
        w ||
          (0, r.setCookies)("audience", "general", {
            path: "/",
            maxAge: 2628e3,
            sameSite: !0,
          }),
          (0, c.useEffect)(function () {
            var e = document.querySelector(".openCookieBox"),
              n = document.querySelector(".custom-cookie-box");
            null === e ||
              void 0 === e ||
              e.addEventListener("click", function () {
                null === n ||
                  void 0 === n ||
                  n.style.setProperty("display", "block", "important");
              });
          }),
          (0, c.useEffect)(function () {
            H();
          }, []);
        var C = e.payLoad.content,
          A = [],
          S = [],
          B =
            null === C ||
            void 0 === C ||
            null === (n = C.blockList) ||
            void 0 === n
              ? void 0
              : n.filter(function (e) {
                  return "NewExpandingCTABlock" === e.content.__typename;
                });
        null === B ||
          void 0 === B ||
          B.map(function (e, n) {
            n <= 3 ? A.push(e) : S.push(e);
          });
        var L,
          D,
          P =
            null === C ||
            void 0 === C ||
            null === (t = C.blockList) ||
            void 0 === t
              ? void 0
              : t.filter(function (e) {
                  return "TabBlockProduct" === e.content.__typename;
                }),
          M = (0, c.useState)([]),
          G = M[0],
          Z = M[1],
          U = [],
          H = function () {
            var e, n, t;
            null === (e = P[0]) ||
              void 0 === e ||
              null === (n = e.content) ||
              void 0 === n ||
              null === (t = n.tabsContent) ||
              void 0 === t ||
              t.map(function (e, n) {
                return U.push(l.$h.markMedownRich(e.content.title)[0]), U;
              }),
              Z(U);
          };
        return (
          "Green Gradient" === (null === C || void 0 === C ? void 0 : C.tint)
            ? ((D = "green"), (L = 1))
            : "Solid Green" === (null === C || void 0 === C ? void 0 : C.tint)
            ? ((D = "green"), (L = 2))
            : "Pink Gradient" === (null === C || void 0 === C ? void 0 : C.tint)
            ? ((D = "purple"), (L = 1))
            : "Solid Pink" === (null === C || void 0 === C ? void 0 : C.tint) &&
              ((D = "purple"), (L = 2)),
          (0, a.jsxs)(i.Z, {
            children: [
              (0, a.jsx)(l.$h.PageHead, {
                siteURL: (null === C || void 0 === C ? void 0 : C.url)
                  ? C.url.split("foresightgroup/").join("")
                  : "",
                OGimageURL:
                  null === C ||
                  void 0 === C ||
                  null === (b = C.metaImage) ||
                  void 0 === b
                    ? void 0
                    : b.url,
                OGtitle:
                  (null === C || void 0 === C ? void 0 : C.metaTitle) ||
                  (null === C || void 0 === C ? void 0 : C.title),
                OGpageDescription:
                  (null === C || void 0 === C ? void 0 : C.metaDescription) ||
                  (null === C || void 0 === C ? void 0 : C.subCopy),
              }),
              C.warning
                ? (0, a.jsx)("div", {
                    className: "top-warning bg-main",
                    children: (0, a.jsx)("div", {
                      className: "container-fluid py-3",
                      children: (0, a.jsx)("div", {
                        className: "container",
                        children: (0, a.jsx)("div", {
                          className: "row justify-content-center",
                          children: (0, a.jsx)("div", {
                            className:
                              "col col-xl-9 text-center text-white top-warning-content",
                            children: l.$h.markMedownRich(C.warning),
                          }),
                        }),
                      }),
                    }),
                  })
                : null,
              (0, a.jsx)(N.Z, {
                image: null === C || void 0 === C ? void 0 : C.heroImage.url,
                text: null === C || void 0 === C ? void 0 : C.heroTitle,
                cta: null === C || void 0 === C ? void 0 : C.heroCTAS,
                level: L,
                tint: D,
                navDate:
                  null === C || void 0 === C ? void 0 : C.navPerShareText,
                navText: null === C || void 0 === C ? void 0 : C.nAVPerShare,
                message:
                  null === C || void 0 === C ? void 0 : C.openClosedMessaging,
                sharePriceFeed: (
                  null === C || void 0 === C ? void 0 : C.sharePriceFeed
                )
                  ? null === C || void 0 === C
                    ? void 0
                    : C.sharePriceFeed
                  : "",
                sharePriceFeed2: (
                  null === C || void 0 === C ? void 0 : C.sharePriceFeed2
                )
                  ? null === C || void 0 === C
                    ? void 0
                    : C.sharePriceFeed2
                  : "",
              }),
              null === C || void 0 === C
                ? void 0
                : C.blockList.map(function (e, n) {
                    if ("TextBlock" === e.content.__typename) {
                      var t = /text-align:\s*left;/.test(e.content.copy);
                      return e.content.title
                        .toLocaleLowerCase()
                        .includes("risk")
                        ? (0, a.jsx)(
                            "div",
                            {
                              className: "container-fluid bg-main",
                              children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                  className: "row",
                                  children: (0, a.jsx)("div", {
                                    className: "col-12 text-white py-5",
                                    children: (0, a.jsx)(I.a, {
                                      ctaCopy: "",
                                      ctaURL: "",
                                      target: "",
                                      children: l.$h.markMedownRich(
                                        e.content.copy
                                      ),
                                    }),
                                  }),
                                }),
                              }),
                            },
                            n
                          )
                        : (0, a.jsx)(
                            "div",
                            {
                              className: "container-fluid py-5",
                              style: {
                                backgroundColor:
                                  "#" + e.content.backgroundColour,
                              },
                              children: (0, a.jsx)("div", {
                                className: "container",
                                children: (0, a.jsx)("div", {
                                  className: "row",
                                  children: (0, a.jsxs)("div", {
                                    className: "col-12 col-lg-9 mx-auto",
                                    children: [
                                      l.$h.markMedownRich(e.content.copy),
                                      e.content.textBlockCTA &&
                                        e.content.textBlockCTA.map(function (
                                          e,
                                          n
                                        ) {
                                          return (0, a.jsx)(
                                            f.a,
                                            {
                                              class: ""
                                                .concat(
                                                  0 !== n
                                                    ? "secondary dark-text"
                                                    : "primary dark",
                                                  " "
                                                )
                                                .concat(
                                                  0 !== n ? "ms-0 ms-lg-3" : "",
                                                  " "
                                                )
                                                .concat(
                                                  t ? "" : "d-flex mx-auto"
                                                ),
                                              url: e.url,
                                              target: e.target,
                                              children: e.name,
                                            },
                                            n
                                          );
                                        }),
                                    ],
                                  }),
                                }),
                              }),
                            },
                            n
                          );
                    }
                    if ("NewExpandingCTABlock" === e.content.__typename)
                      return (0, a.jsx)(
                        "div",
                        {
                          className: "container my-5",
                          children: (0, a.jsx)("div", {
                            className: "position-relative",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: e.content.squareBlocks.map(function (
                                e,
                                n
                              ) {
                                var t, o, c;
                                return (0, a.jsx)(
                                  O.Z,
                                  {
                                    image: e.content.image.url,
                                    title: e.content.title,
                                    description: e.content.shortCopy,
                                    color: e.content.bGColour
                                      ? "#" + e.content.bGColour
                                      : "",
                                    expandedCopy: e.content.longCopy,
                                    buttonclass: "primary dark",
                                    buttontext:
                                      null === (t = e.content.cTALink) ||
                                      void 0 === t
                                        ? void 0
                                        : t.name,
                                    url:
                                      null === (o = e.content.cTALink) ||
                                      void 0 === o
                                        ? void 0
                                        : o.url,
                                    target:
                                      null === (c = e.content.cTALabel) ||
                                      void 0 === c
                                        ? void 0
                                        : c.target,
                                  },
                                  n
                                );
                              }),
                            }),
                          }),
                        },
                        n
                      );
                    if ("DocumentBlock" === e.content.__typename)
                      return (0, a.jsx)(
                        "div",
                        {
                          className: "container-flex",
                          children:
                            e.content.documentBlockDocuments &&
                            e.content.documentBlockAudience.includes(w) &&
                            (0, a.jsx)(_, {
                              dataFrom: "",
                              data: e.content.documentBlockDocuments,
                            }),
                        },
                        n
                      );
                    var c, i, r, N, b, C;
                    if ("PeopleBlock" === e.content.__typename)
                      return (0, a.jsx)(
                        "div",
                        {
                          className: "container-fluid py-5 ".concat(
                            null === e.content.backgroundGradient ||
                              "True" === e.content.backgroundGradient
                              ? "timeline-gradient"
                              : ""
                          ),
                          children: (0, a.jsxs)("div", {
                            className: "container",
                            children: [
                              (0, a.jsx)("div", {
                                className: "row ".concat(
                                  "True" === e.content.backgroundGradient ||
                                    null === e.content.backgroundGradient
                                    ? "text-white"
                                    : "text-main"
                                ),
                                children: (0, a.jsx)(
                                  s.Z,
                                  {
                                    headingandcopy: e.content.introCopy,
                                    teamMembers: e.content.people,
                                    showExternal: !0,
                                    colour:
                                      "True" === e.content.backgroundGradient ||
                                      null === e.content.backgroundGradient
                                        ? "white"
                                        : "purple",
                                  },
                                  n
                                ),
                              }),
                              e.content.optionalCTA &&
                                (0, a.jsx)("div", {
                                  className: "row mt-4",
                                  children: (0, a.jsx)("div", {
                                    className: "co-12 text-center",
                                    children: (0, a.jsx)(f.a, {
                                      class: "primary dark mx-auto mt-4",
                                      url:
                                        null ===
                                          (c = e.content.optionalCTA[0]) ||
                                        void 0 === c
                                          ? void 0
                                          : c.url,
                                      target:
                                        null ===
                                          (i = e.content.optionalCTA[0]) ||
                                        void 0 === i
                                          ? void 0
                                          : i.target,
                                      children:
                                        null ===
                                          (r = e.content.optionalCTA[0]) ||
                                        void 0 === r
                                          ? void 0
                                          : r.name,
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        },
                        n
                      );
                    if ("CTABlock" === e.content.__typename)
                      return (0, a.jsx)(
                        j.s,
                        (0, o.Z)({ intro: e.content.introCopy }, [
                          e.content.cTABlocks,
                          e,
                        ]),
                        n
                      );
                    if ("NewTableBlock" === e.content.__typename)
                      return (0, a.jsx)(
                        "div",
                        {
                          className: "container-fluid py-5",
                          children: (0, a.jsx)("div", {
                            className: "container",
                            children: (0, a.jsx)("div", {
                              className: "row justify-content-center",
                              children: (0, a.jsx)("div", {
                                className: "col col-lg-8",
                                children: (0, a.jsx)(T.Z, {
                                  tableHeading: l.$h.markMedownRich(
                                    e.content.copy
                                  ),
                                  tableData: e.content.tableContent,
                                }),
                              }),
                            }),
                          }),
                        },
                        n
                      );
                    if ("TabBlockProduct" === e.content.__typename) {
                      var A = /text-align:\s*left;/.test(e.content.copy);
                      return (0, a.jsx)("div", {
                        className: "container fluid py-5",
                        children: (0, a.jsx)("div", {
                          className: "container",
                          children: (0, a.jsx)(F.n, {
                            copy: l.$h.markMedownRich(e.content.copy),
                            headings: G,
                            children: e.content.tabsContent.map(function (
                              e,
                              n
                            ) {
                              var t, o;
                              return (0, a.jsxs)(
                                q.x4,
                                {
                                  children: [
                                    "TextBlock" === e.content.__typename &&
                                      (0, a.jsx)("div", {
                                        className: "container ".concat(
                                          e.content.backgroundColour
                                            ? "py-5"
                                            : ""
                                        ),
                                        style: {
                                          backgroundColor: e.content
                                            .backgroundColour
                                            ? "#".concat(
                                                e.content.backgroundColour
                                              )
                                            : "transparent",
                                        },
                                        children: (0, a.jsx)("div", {
                                          className: "row",
                                          children: (0, a.jsxs)("div", {
                                            className: "col-12",
                                            children: [
                                              l.$h.markMedownRich(
                                                e.content.copy
                                              ),
                                              e.content.cTA &&
                                                e.content.cTA.map(function (
                                                  e,
                                                  n
                                                ) {
                                                  return (0, a.jsx)(
                                                    f.a,
                                                    {
                                                      class:
                                                        "\n                                            "
                                                          .concat(
                                                            0 !== n
                                                              ? "secondary dark-text"
                                                              : "primary dark",
                                                            " \n                                            "
                                                          )
                                                          .concat(
                                                            0 !== n
                                                              ? "ms-0 ms-lg-3"
                                                              : "",
                                                            " \n                                            "
                                                          )
                                                          .concat(
                                                            !0 === A
                                                              ? "d-flex mx-auto"
                                                              : ""
                                                          ),
                                                      url: e.url,
                                                      target: e.target,
                                                      children: e.name,
                                                    },
                                                    n
                                                  );
                                                }),
                                            ],
                                          }),
                                        }),
                                      }),
                                    "ImageTextBlock" === e.content.__typename &&
                                      (0, a.jsx)("div", {
                                        style: {
                                          backgroundColor: e.content
                                            .backgroundColour
                                            ? "#".concat(
                                                e.content.backgroundColour
                                              )
                                            : "transparent",
                                        },
                                        children: (0, a.jsx)("div", {
                                          className: "container py-3",
                                          children: (0, a.jsx)(h.Z, {
                                            reverse:
                                              "Left" === e.content.textAlign,
                                            image: e.content.image.url,
                                            ctas: [
                                              {
                                                url:
                                                  null ===
                                                    (o =
                                                      null ===
                                                        (t = e.content) ||
                                                      void 0 === t
                                                        ? void 0
                                                        : t.cTA[0]) ||
                                                  void 0 === o
                                                    ? void 0
                                                    : o.url,
                                              },
                                            ],
                                            children: e.content.copy,
                                          }),
                                        }),
                                      }),
                                  ],
                                },
                                n
                              );
                            }),
                          }),
                        }),
                      });
                    }
                    return "PieChart" === e.content.__typename
                      ? (0, a.jsx)(
                          "div",
                          {
                            className: "container-fluid py-5",
                            style: {
                              backgroundColor: e.content
                                .pieChartBackgroundColour
                                ? "#".concat(e.content.pieChartBackgroundColour)
                                : "",
                            },
                            children: (0, a.jsxs)("div", {
                              className: "container",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "row py-5 justify-content-center",
                                  children: (0, a.jsx)("div", {
                                    className: "col text-center",
                                    children: l.$h.markMedownRich(
                                      e.content.pieChartIntroCopy
                                    ),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "row justify-content-center",
                                  children: (0, a.jsx)("div", {
                                    className: "col col-lg-8",
                                    children: (0, a.jsx)(R, {
                                      data: e.content.pieChartjSon,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          },
                          n
                        )
                      : "LineGraph" === e.content.__typename
                      ? (0, a.jsx)(
                          "div",
                          {
                            style: {
                              backgroundColor: e.content
                                .lineGraphBackgroundColour
                                ? "#".concat(
                                    e.content.lineGraphBackgroundColour
                                  )
                                : "",
                            },
                            className: "container-fluid py-5",
                            children: (0, a.jsxs)("div", {
                              className: "container",
                              children: [
                                (0, a.jsx)("div", {
                                  className: "row py-5 justify-content-center",
                                  children: (0, a.jsx)("div", {
                                    className: "col text-center",
                                    children: l.$h.markMedownRich(
                                      e.content.lineGraphIntroCopy
                                    ),
                                  }),
                                }),
                                (0, a.jsx)("div", {
                                  className: "row justify-content-center",
                                  children: (0, a.jsx)("div", {
                                    className: "col col-lg-8",
                                    children: (0, a.jsx)($, {
                                      data: e.content.lineGraphjSon,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          },
                          n
                        )
                      : "CarouselBlock" === e.content.__typename
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            e.content.introCopy &&
                              (0, a.jsx)(
                                "div",
                                {
                                  className: "container pt-3",
                                  children: (0, a.jsx)("div", {
                                    className: "row",
                                    children: (0, a.jsx)("div", {
                                      className: "col",
                                      children: l.$h.markMedownRich(
                                        e.content.introCopy
                                      ),
                                    }),
                                  }),
                                },
                                n
                              ),
                            (0, a.jsx)(
                              u.a,
                              {
                                slidesToShowDesktop: 1,
                                slidesToShowTablet: 1,
                                slidesToShowMobile: 1,
                                backgroundColour: "#fff",
                                infinite: !0,
                                classes: "",
                                sectionTitle: "",
                                showDotsDesktop: !0,
                                buttonStyle: "white",
                                children: e.content.carouselItems.map(function (
                                  e,
                                  t
                                ) {
                                  return e.author
                                    ? (0, a.jsx)(
                                        d.g,
                                        {
                                          heading: e.title ? e.title : null,
                                          copy: e.quote ? e.quote : null,
                                          author: e.author
                                            ? e.author.name
                                            : null,
                                          title: e.author
                                            ? e.author.title
                                            : null,
                                          image: e.image ? e.image.url : null,
                                          url: e.cTALink ? e.cTALink.url : null,
                                          cta: e.cTALink
                                            ? e.cTALink.name
                                            : null,
                                          target: e.cTALink && e.cTALink.target,
                                          text: e.text,
                                          showGradient: !0,
                                        },
                                        n
                                      )
                                    : (0, a.jsx)(
                                        m.C,
                                        {
                                          heading: e.title ? e.title : null,
                                          image: e.image ? e.image.url : null,
                                          url: e.cTALink ? e.cTALink.url : null,
                                          cta: e.cTALink
                                            ? e.cTALink.name
                                            : null,
                                          target: e.cTALink && e.cTALink.target,
                                          showGradient: !0,
                                          children: e.text ? e.text : null,
                                        },
                                        n
                                      );
                                }),
                              },
                              n
                            ),
                            e.content.carouselBlockCTA &&
                              (0, a.jsx)("div", {
                                className: "container-fluid",
                                children: (0, a.jsx)("div", {
                                  className: "container",
                                  children: (0, a.jsx)("div", {
                                    className: "row",
                                    children: (0, a.jsx)("div", {
                                      className: "col-12 text-center",
                                      children: (0, a.jsx)(f.a, {
                                        class: "primary dark mx-auto",
                                        url: e.content.carouselBlockCTA.url,
                                        target:
                                          e.content.carouselBlockCTA.target,
                                        children:
                                          e.content.carouselBlockCTA.name,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        })
                      : "ImageTextBlock" === e.content.__typename
                      ? (0, a.jsx)("div", {
                          style: {
                            backgroundColor: e.content.backgroundColour
                              ? "#".concat(e.content.backgroundColour)
                              : "transparent",
                          },
                          children: (0, a.jsx)("div", {
                            className: "container my-5",
                            children: (0, a.jsx)("div", {
                              className: "row",
                              children: (0, a.jsx)("div", {
                                className: "col",
                                children: (0, a.jsx)(h.Z, {
                                  reverse: "Left" === e.content.textAlign,
                                  image: e.content.image.cropUrl,
                                  ctas: e.content.imageTextBlockCTA,
                                  children: e.content.copy,
                                }),
                              }),
                            }),
                          }),
                        })
                      : "FAQBlockMulti" === e.content.__typename
                      ? (0, a.jsx)("div", {
                          className: "container my-5",
                          children: (0, a.jsx)("div", {
                            className: "row",
                            children: (0, a.jsxs)("div", {
                              className: "col",
                              children: [
                                l.$h.markMedownRich(e.content.introCopy),
                                (0, a.jsx)(v.Z, { res: e.content.fAQs }),
                                e.content.faqBlockCTA &&
                                  (0, a.jsx)(f.a, {
                                    class: "primary dark mx-auto mt-4",
                                    url:
                                      null === (N = e.content.faqBlockCTA) ||
                                      void 0 === N
                                        ? void 0
                                        : N.url,
                                    target:
                                      null === (b = e.content.faqBlockCTA) ||
                                      void 0 === b
                                        ? void 0
                                        : b.target,
                                    children:
                                      null === (C = e.content.faqBlockCTA) ||
                                      void 0 === C
                                        ? void 0
                                        : C.name,
                                  }),
                              ],
                            }),
                          }),
                        })
                      : "FormPicker" === e.content.__typename
                      ? (0, a.jsx)(a.Fragment, {
                          children:
                            e.content.formPicker &&
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "container-fluid py-5 bg-main",
                                children: [
                                  (0, a.jsx)("div", {
                                    className: "form-top",
                                    id: "form",
                                  }),
                                  (0, a.jsx)("div", {
                                    className: "container",
                                    children: (0, a.jsxs)("div", {
                                      className: "row",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "col-12 text-white",
                                          children: l.$h.markMedownRich(
                                            e.content.copy
                                          ),
                                        }),
                                        (0, a.jsx)(g.Z, {
                                          formData: e.content.formPicker,
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              },
                              n
                            ),
                        })
                      : "IconStatBlock" === e.content.__typename
                      ? (0, a.jsx)(
                          p.v,
                          {
                            copy: e.content.introCopy,
                            cta: e.content.iconStatBlockCTA,
                            classes: "\n                    ".concat(
                              "Green Gradient" ===
                                e.content.iconStatsBackgroundColour
                                ? "lighter-green"
                                : "Purple Gradient" ===
                                  e.content.iconStatsBackgroundColour
                                ? "pink-gradient-bg"
                                : "bg-white",
                              "\n                  "
                            ),
                            children: e.content.iconsStats.map(function (e, n) {
                              return "Statistic" === e.content.__typename
                                ? (0, a.jsx)(
                                    E.j,
                                    {
                                      columnSize: 3,
                                      heading: e.content.numberOfUnits,
                                      faIcon: e.content.fontAwesomeIconString,
                                      iconColour: e.content.iconColour,
                                      copy: e.content.description,
                                      longCopy: e.content.longerDescription,
                                    },
                                    n
                                  )
                                : (0, a.jsx)(x.a, {
                                    icon:
                                      null === (t = e.content.imageIcon) ||
                                      void 0 === t
                                        ? void 0
                                        : t.url,
                                    longCopy: e.content.copy,
                                  });
                              var t;
                            }),
                          },
                          n
                        )
                      : "CTABlock" === e.content.__typename
                      ? (0, a.jsx)(
                          j.s,
                          (0, o.Z)({ intro: e.content.introCopy }, [
                            e.content.cTABlocks,
                            e,
                          ])
                        )
                      : "QuoteBlock" === e.content.__typename
                      ? (0, a.jsx)(y.p, { isProductPage: !0, data: e.content })
                      : "NewsBlock" === e.content.__typename
                      ? (0, a.jsx)(k.g, { data: e.content })
                      : void 0;
                  }),
              (0, a.jsx)(Q.Z, {}),
            ],
          })
        );
      }
    },
    98383: function (e) {
      e.exports = {
        keys: "DoughnutChart_keys__0bmzs",
        keyHolder: "DoughnutChart_keyHolder__FnHlo",
        key: "DoughnutChart_key__4cNCt",
      };
    },
    10573: function (e) {
      e.exports = { img: "IconText_img__neiEE" };
    },
    57995: function (e) {
      e.exports = {
        quote: "MasterPageQuote_quote__AIMIw",
        quoteSymbol: "MasterPageQuote_quoteSymbol__Q_43Y",
        radiant: "MasterPageQuote_radiant__K3DHO",
        author: "MasterPageQuote_author__sS9Oa",
        img: "MasterPageQuote_img__mYrA3",
      };
    },
  },
  function (e) {
    e.O(
      0,
      [
        7948, 2196, 7642, 2583, 9407, 2004, 9723, 2457, 4312, 3184, 3983, 833,
        3410, 6348, 9774, 2888, 179,
      ],
      function () {
        return (n = 68107), e((e.s = n));
        var n;
      }
    );
    var n = e.O();
    _N_E = n;
  },
]);
