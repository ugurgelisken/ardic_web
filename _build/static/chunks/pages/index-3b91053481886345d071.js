(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    7433: function (e, s, t) {
      "use strict";
      t.r(s),
        t.d(s, {
          __N_SSP: function () {
            return j;
          },
          default: function () {
            return h;
          },
        });
      var n = t(5893),
        a = t(9008),
        i = t(1163),
        r = t(1997),
        c = t(1298),
        o = t(5988),
        l = t(7294),
        x = function () {
          var e = (0, i.useRouter)(),
            s = "en" === e.locale ? c.Z : r.Z,
            t = (0, l.useState)([]),
            a = t[0],
            x = t[1];
          return (
            (0, l.useEffect)(
              function () {
                fetch(
                  ""
                    .concat("http://localhost:3000", "/api/")
                    .concat(e.locale, "/references")
                )
                  .then(function (e) {
                    return e.json();
                  })
                  .then(function (e) {
                    x(e);
                  });
              },
              [e.locale]
            ),
            (0, n.jsxs)("div", {
              className: "jsx-3989760318 container-fluid",
              children: [
                (0, n.jsx)("div", {
                  className: "jsx-3989760318 section-title",
                  children: s.commons.references,
                }),
                (0, n.jsx)("div", {
                  className: "jsx-3989760318 row",
                  children: (0, n.jsx)("div", {
                    className: "jsx-3989760318 col container-references",
                    children: a.map(function (e, s) {
                      return (0,
                      n.jsx)("img", { src: "/assets/references/".concat(e.name, ".jpg"), alt: "", className: "jsx-3989760318 item" }, s);
                    }),
                  }),
                }),
                (0, n.jsx)(o.default, {
                  id: "3989760318",
                  children: [
                    ".container-references.jsx-3989760318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;margin-bottom:-10px;}",
                    ".item.jsx-3989760318{height:70px;width:auto;opacity:0.6;}",
                    ".item.jsx-3989760318:hover{opacity:1;}",
                    "@media screen and (max-width:1024px){.container.jsx-3989760318{margin-bottom:0px;}}",
                  ],
                }),
              ],
            })
          );
        },
        d = t(4823),
        p = function (e) {
          var s = e.data,
            t = "en" === (0, i.useRouter)().locale ? c.Z : r.Z;
          return (
            (0, l.useEffect)(function () {
              document.querySelectorAll("details").forEach(function (e) {
                var s = document.querySelectorAll("details");
                e.addEventListener("click", function () {
                  s.forEach(function (s) {
                    s !== e && s.removeAttribute("open");
                  });
                });
              });
            }, []),
            (0, n.jsxs)("div", {
              className: "jsx-3589217837 container-fluid",
              children: [
                (0, n.jsx)("div", {
                  className: "jsx-3589217837 section-title",
                  children: t.commons.successStories,
                }),
                (0, n.jsx)("div", {
                  className: "jsx-3589217837 row",
                  children: (0, n.jsx)("div", {
                    className: "jsx-3589217837 col p-2 pl-0",
                    children: s.map(function (e, s) {
                      return (0,
                      n.jsxs)("details", { className: "jsx-3589217837 details", children: [(0, n.jsx)("summary", { className: "jsx-3589217837", children: e.title }), (0, n.jsx)("div", { className: "jsx-3589217837 details-text", children: (0, n.jsx)("div", { dangerouslySetInnerHTML: (0, d.createHTML)(e.detailTexts, t), className: "jsx-3589217837" }) })] }, s);
                    }),
                  }),
                }),
                (0, n.jsx)(o.default, {
                  id: "3589217837",
                  children: [
                    ".details.jsx-3589217837{color:#606060;font-size:16px;font-weight:bolder;margin:16px;padding-bottom:10px;border-bottom:1px solid #f2f2f2;}",
                    "details.jsx-3589217837:hover{-webkit-transition:0,2s;transition:0,2s;opacity:0.8;}",
                    ".details-text.jsx-3589217837{font-size:16px;margin:10px;margin-left:18px;font-weight:200;margin:14px;}",
                  ],
                }),
              ],
            })
          );
        },
        m = t(1664),
        u = function (e) {
          var s = e.data,
            t = "en" === (0, i.useRouter)().locale ? c.Z : r.Z;
          return (0, n.jsxs)("div", {
            className: "jsx-3035010050 container",
            children: [
              (0, n.jsx)("div", {
                className: "jsx-3035010050 section-title",
                children: t.commons.solutions,
              }),
              (0, n.jsx)("br", { className: "jsx-3035010050" }),
              (0, n.jsx)("div", {
                className: "jsx-3035010050 row",
                children: s.solutions.map(function (e, s) {
                  return (0, n.jsx)(
                    "div",
                    {
                      className:
                        "jsx-3035010050 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                      children: (0, n.jsx)("div", {
                        className: "jsx-3035010050 item",
                        children: (0, n.jsxs)("div", {
                          className: "jsx-3035010050 card mb-4",
                          children: [
                            (0, n.jsx)("img", {
                              src: e.cover,
                              alt: e.title,
                              className: "jsx-3035010050 card-img-top",
                            }),
                            (0, n.jsxs)("div", {
                              className: "jsx-3035010050 card-body",
                              children: [
                                (0, n.jsx)("h4", {
                                  className: "jsx-3035010050 card-title",
                                  children: e.title,
                                }),
                                (0, n.jsx)("p", {
                                  className: "jsx-3035010050 card-text",
                                  children: e.summary,
                                }),
                                (0, n.jsx)("div", {
                                  className: "jsx-3035010050 iconsContainer",
                                  children: e.technologies.map(function (e, s) {
                                    return e.link
                                      ? (0, n.jsx)(m.default, {
                                          href: e.link,
                                          children: (0, n.jsx)("a", {
                                            className: "jsx-3035010050",
                                            children: (0, n.jsx)("img", {
                                              src: e.image,
                                              alt: e.name,
                                              title: e.name,
                                              className:
                                                "jsx-3035010050 icons iconsLink",
                                            }),
                                          }),
                                        })
                                      : (0, n.jsx)("img", {
                                          src: e.image,
                                          alt: e.name,
                                          title: e.name,
                                          className: "jsx-3035010050 icons",
                                        });
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    },
                    s
                  );
                }),
              }),
              (0, n.jsxs)("div", {
                className: "jsx-3035010050 row moreBox",
                children: [
                  (0, n.jsx)(m.default, {
                    href: "/contact",
                    children: (0, n.jsx)("a", {
                      className: "jsx-3035010050 plusIcon",
                      children: "+",
                    }),
                  }),
                  (0, n.jsxs)("div", {
                    className: "jsx-3035010050 plusContent",
                    children: [
                      (0, n.jsx)("h4", {
                        className: "jsx-3035010050",
                        children: s.more.title,
                      }),
                      (0, n.jsx)("p", {
                        className: "jsx-3035010050 plusText",
                        children: s.more.text,
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)(o.default, {
                id: "3035010050",
                children: [
                  ".iconsContainer.jsx-3035010050{position:absolute;top:10px;right:10px;}",
                  ".icons.jsx-3035010050{width:48px;border-radius:24px;margin-left:12px;-webkit-filter:drop-shadow(2px 2px 4px silver);filter:drop-shadow(2px 2px 4px silver);}",
                  ".iconsLink.jsx-3035010050:hover{cursor:pointer;border:1px solid whitesmoke;}",
                  ".moreBox.jsx-3035010050{border:1px solid #dedede;border-radius:2px;width:50%;max-width:600px;margin:auto auto;text-align:center;padding:10px;margin-top:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}",
                  ".plusIcon.jsx-3035010050{margin-top:-10px;margin-bottom:20px;position:relative;z-index:1;top:-50px;font-size:52px;font-weight:800;margin:auto auto;height:80px;width:80px;border-radius:100px;color:white !important;background-image:-webkit-linear-gradient( 330deg, rgb(0,228,216), rgb(132,3,255) );-webkit-filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.5));filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.5));cursor:pointer;}",
                  ".plusIcon.jsx-3035010050:hover{-webkit-filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.8));filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.8));opacity:0.95;}",
                  ".plusContent.jsx-3035010050{margin-top:-30px;}",
                  "@media screen and (max-width:1024px){.moreBox.jsx-3035010050{width:100%;margin:0px;margin-bottom:40px;margin-top:30px;}}",
                ],
              }),
            ],
          });
        },
        j = !0,
        h = function (e) {
          var s = e.successStoriesData,
            t = e.successStoriesMeta,
            o = e.solutionsMeta,
            l = e.solutionsData;
          "en" === (0, i.useRouter)().locale ? c.Z : r.Z;
          return (0, n.jsxs)("div", {
            className: "container",
            children: [
              (0, n.jsxs)(a.default, {
                children: [
                  (0, n.jsx)("title", { children: "ARDICTECH" }),
                  (0, n.jsx)("meta", {
                    name: "description",
                    content: "".concat(o.desc, " | ").concat(t.desc),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "page-box",
                children: [
                  (0, n.jsx)(u, { data: l }),
                  (0, n.jsx)(p, { data: s }),
                  (0, n.jsx)(x, {}),
                ],
              }),
            ],
          });
        };
    },
    4823: function (e) {
      e.exports = {
        createHTML: function (e, s) {
          return {
            __html: e
              .map(function (e, t) {
                return "a" === e.tag
                  ? '<a class="btn-smooth" key='
                      .concat(t, " href=")
                      .concat(
                        e.text,
                        ' target="_blank" rel="noopener noreferrer">'
                      )
                      .concat(s.commons.seeTheDocuments, "</a><br/>")
                  : "<"
                      .concat(e.tag, ' key="')
                      .concat(t, '">')
                      .concat(e.text, "</")
                      .concat(e.tag, ">");
              })
              .join("")
              .replace(/\*/g, "<br/>\u25cf")
              .replace(/\--/g, "<br/>&emsp;\u25cb")
              .replace(/\> <br/g, ""),
          };
        },
      };
    },
    8581: function (e, s, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(7433);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [774, 888, 179], function () {
      return (s = 8581), e((e.s = s));
      var s;
    });
    var s = e.O();
    _N_E = s;
  },
]);
