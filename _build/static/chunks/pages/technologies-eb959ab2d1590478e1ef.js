(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [771],
  {
    2116: function (s, e, i) {
      "use strict";
      i.r(e),
        i.d(e, {
          __N_SSP: function () {
            return d;
          },
        });
      var a = i(5893),
        l = i(5988),
        n = i(9008),
        r = i(1664),
        x = i(1163),
        c = i(1997),
        t = i(1298),
        d = !0;
      e.default = function (s) {
        var e = s.data,
          i = s.meta,
          d = (0, x.useRouter)().locale,
          o = "en" === d ? t.Z : c.Z;
        return (0, a.jsxs)("div", {
          className: "jsx-1912380199",
          children: [
            (0, a.jsxs)(n.default, {
              children: [
                (0, a.jsxs)("title", {
                  className: "jsx-1912380199",
                  children: ["ARDICTECH", " | ", i.title],
                }),
                (0, a.jsx)("meta", {
                  name: "description",
                  content: i.desc,
                  className: "jsx-1912380199",
                }),
              ],
            }),
            (0, a.jsxs)("div", {
              className: "jsx-1912380199 container page-box",
              children: [
                (0, a.jsx)("div", {
                  className: "jsx-1912380199 section-title",
                  children: i.title,
                }),
                (0, a.jsx)("br", { className: "jsx-1912380199" }),
                (0, a.jsx)("div", {
                  className: "jsx-1912380199 row",
                  children: e.map(function (s, e) {
                    return (0,
                    a.jsx)("div", { className: "jsx-1912380199 col-sm-12 col-md-12 col-lg-6 col-xl-4", children: (0, a.jsxs)("div", { className: "jsx-1912380199 box", children: [(0, a.jsx)("div", { className: "jsx-1912380199", children: (0, a.jsx)("img", { src: "/assets/icons-128/icon-".concat(s.icon, ".jpg"), alt: s.name, className: "jsx-1912380199 icon" }) }), (0, a.jsxs)("div", { className: "jsx-1912380199", children: [(0, a.jsx)("h4", { className: "jsx-1912380199", children: s.name }), (0, a.jsx)("p", { className: "jsx-1912380199 summary", children: s.summary }), s.slug && (0, a.jsx)(r.default, { href: s.slug, hrefLang: d, children: (0, a.jsx)("a", { className: "jsx-1912380199 link", children: o.button.readMore }) })] })] }) }, e);
                  }),
                }),
              ],
            }),
            (0, a.jsx)(l.default, {
              id: "1912380199",
              children: [
                ".box.jsx-1912380199{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-bottom:30px;}",
                ".icon.jsx-1912380199{width:36px;-webkit-filter:drop-shadow(0px 0px 6px silver);-webkit-filter:drop-shadow(0px 0px 6px silver);filter:drop-shadow(0px 0px 6px silver);border-radius:36px;margin-right:10px;margin-top:30px;}",
                ".summary.jsx-1912380199{text-align:left;margin-right:10px;margin-bottom:4px;}",
              ],
            }),
          ],
        });
      };
    },
    6029: function (s, e, i) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/technologies",
        function () {
          return i(2116);
        },
      ]);
    },
  },
  function (s) {
    s.O(0, [774, 888, 179], function () {
      return (e = 6029), s((s.s = e));
      var e;
    });
    var e = s.O();
    _N_E = e;
  },
]);
