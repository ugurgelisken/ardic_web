(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [335],
  {
    6999: function (s, e, a) {
      "use strict";
      a.r(e),
        a.d(e, {
          __N_SSP: function () {
            return d;
          },
          default: function () {
            return j;
          },
        });
      var i = a(5893),
        n = a(5988),
        t = a(9008),
        c = a(1664),
        l = a(1163),
        r = a(7294),
        o = a(1997),
        x = a(1298),
        m = function () {
          var s = "en" === (0, l.useRouter)().locale ? x.Z : o.Z,
            e = (0, r.useState)(""),
            a = e[0],
            t = e[1],
            c = (0, r.useState)(""),
            m = c[0],
            d = c[1],
            j = (0, r.useState)(""),
            h = j[0],
            u = j[1],
            p = (0, r.useState)(""),
            N = p[0],
            g = p[1],
            f = function (s) {
              s.preventDefault(),
                (function (s) {
                  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(s).toLowerCase()
                  );
                })(m) &&
                  a &&
                  h &&
                  "" === N &&
                  (g("sending"),
                  fetch("api/send-mail", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ name: a, email: m, message: h }),
                  })
                    .then(function (s) {
                      return s.json();
                    })
                    .then(function (s) {
                      200 === s.status &&
                        (g("sent"),
                        t(""),
                        d(""),
                        u(""),
                        setTimeout(function () {
                          g("");
                        }, 3e3)),
                        500 === s.status &&
                          (g("error"),
                          console.log(s),
                          setTimeout(function () {
                            g("");
                          }, 3e3));
                    })
                    .catch(function (s) {
                      console.log(s),
                        setTimeout(function () {
                          g("");
                        }, 3e3);
                    }));
            };
          return (0, i.jsxs)("div", {
            className: "jsx-1886508322 container-mail-form",
            children: [
              (0, i.jsx)("div", {
                className: "jsx-1886508322 container-fluid",
                children: (0, i.jsx)("div", {
                  className: "jsx-1886508322 row",
                  children: (0, i.jsx)("div", {
                    className: "jsx-1886508322 col p0",
                    children: (0, i.jsxs)("form", {
                      onSubmit: function (s) {
                        f(s);
                      },
                      className: "jsx-1886508322 main",
                      children: [
                        (0, i.jsxs)("div", {
                          className: "jsx-1886508322 inputGroup",
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: "name",
                              className: "jsx-1886508322",
                              children: s.forms.mail.name,
                            }),
                            (0, i.jsx)("input", {
                              type: "text",
                              name: "name",
                              id: "name",
                              required: !0,
                              value: a,
                              onChange: function (s) {
                                t(s.target.value);
                              },
                              className: "jsx-1886508322 form-control",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "jsx-1886508322 inputGroup",
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: "email",
                              className: "jsx-1886508322",
                              children: s.forms.mail.email,
                            }),
                            (0, i.jsx)("input", {
                              type: "email",
                              name: "email",
                              id: "email",
                              value: m,
                              pattern: "^[^ ]+@[^ ]+\\.[a-z]{2,6}$",
                              required: !0,
                              onChange: function (s) {
                                d(s.target.value);
                              },
                              className: "jsx-1886508322 form-control",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "jsx-1886508322 inputGroup",
                          children: [
                            (0, i.jsx)("label", {
                              htmlFor: "message",
                              className: "jsx-1886508322",
                              children: s.forms.mail.message,
                            }),
                            (0, i.jsx)("textarea", {
                              rows: "4",
                              type: "text",
                              name: "message",
                              id: "message",
                              value: h,
                              required: !0,
                              onChange: function (s) {
                                u(s.target.value);
                              },
                              className: "jsx-1886508322 form-control",
                            }),
                          ],
                        }),
                        (0, i.jsxs)("div", {
                          className: "jsx-1886508322 row mb-10",
                          children: [
                            (0, i.jsxs)("div", {
                              className:
                                "jsx-1886508322 col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 t-10",
                              children: [
                                "sending" === N &&
                                  (0, i.jsx)("div", {
                                    className:
                                      "jsx-1886508322 alert alert-warning fit-content mt-10",
                                    children: s.forms.mail.sending,
                                  }),
                                "sent" === N &&
                                  (0, i.jsx)("div", {
                                    className:
                                      "jsx-1886508322 alert alert-success fit-content mt-10",
                                    children: s.forms.mail.sent,
                                  }),
                                "error" === N &&
                                  (0, i.jsx)("div", {
                                    className:
                                      "jsx-1886508322 alert alert-danger fit-content mt-10",
                                    children: s.forms.mail.error,
                                  }),
                              ],
                            }),
                            (0, i.jsx)("div", {
                              className:
                                "jsx-1886508322 col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right",
                              children: (0, i.jsx)("input", {
                                type: "submit",
                                disabled: "" !== N,
                                className: "jsx-1886508322 submit",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                }),
              }),
              (0, i.jsx)(n.default, {
                id: "1886508322",
                children: [
                  ".container-mail-form.jsx-1886508322{margin-bottom:10px;}",
                  ".submit.jsx-1886508322{width:100px;float:right;border:none;padding:10px 20px;margin-top:10px;border-radius:4px;color:white !important;background-color:#54a7e4;);;}",
                  ".submit.jsx-1886508322:hover{cursor:pointer;}",
                  ".errorMessage.jsx-1886508322{margin-top:10px;margin-bottom:20px;}",
                  ".submit.jsx-1886508322:disabled,.submit[disabled].jsx-1886508322{color:silver;opacity:0.9;cursor:not-allowed;}",
                  "@media screen and (max-width:768px){.submit.jsx-1886508322{width:100%;margin-bottom:20px;}.errorMessage.jsx-1886508322{padding-top:60px;text-align:center;}.alert.jsx-1886508322{width:100% !important;}}",
                ],
              }),
            ],
          });
        },
        d = !0,
        j = function (s) {
          var e = s.data,
            a = s.meta,
            r = "en" === (0, l.useRouter)().locale ? x.Z : o.Z;
          return (0, i.jsxs)("div", {
            className: "jsx-2952233004",
            children: [
              (0, i.jsxs)(t.default, {
                children: [
                  (0, i.jsxs)("title", {
                    className: "jsx-2952233004",
                    children: ["ARDICTECH", " | ", a.title],
                  }),
                  (0, i.jsx)("meta", {
                    name: "description",
                    content: a.desc,
                    className: "jsx-2952233004",
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "jsx-2952233004 container page-box",
                children: [
                  (0, i.jsx)("div", {
                    className: "jsx-2952233004 section-title",
                    children: r.commons.contactForm,
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-2952233004 sectionHeader",
                    children: [
                      (0, i.jsx)("div", {
                        className: "jsx-2952233004 sectionHeaderIcon",
                        children: (0, i.jsx)("img", {
                          src: "/assets/icons/contact-forms.png",
                          alt: "",
                          className: "jsx-2952233004",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-2952233004 sectionHeaderBar",
                      }),
                    ],
                  }),
                  (0, i.jsx)(m, {}),
                  (0, i.jsx)("div", {
                    className: "jsx-2952233004 section-title",
                    children: r.commons.locations,
                  }),
                  (0, i.jsxs)("div", {
                    className: "jsx-2952233004 sectionHeader",
                    children: [
                      (0, i.jsx)("div", {
                        className: "jsx-2952233004 sectionHeaderIcon",
                        children: (0, i.jsx)("img", {
                          src: "/assets/icons/maps_placeholder.png",
                          alt: "",
                          className: "jsx-2952233004",
                        }),
                      }),
                      (0, i.jsx)("div", {
                        className: "jsx-2952233004 sectionHeaderBar",
                      }),
                    ],
                  }),
                  (0, i.jsx)("br", { className: "jsx-2952233004" }),
                  (0, i.jsxs)("div", {
                    className: "jsx-2952233004 row",
                    children: [
                      (0, i.jsx)("h5", {
                        className: "jsx-2952233004 text-center location-title",
                        children: a.desc,
                      }),
                      (0, i.jsx)("br", { className: "jsx-2952233004" }),
                      (0, i.jsx)("br", { className: "jsx-2952233004" }),
                      (0, i.jsx)("div", {
                        className: "jsx-2952233004 col",
                        children: e.map(function (s, e) {
                          return (0,
                          i.jsxs)("div", { className: "jsx-2952233004", children: [(0, i.jsx)("p", { className: "jsx-2952233004 page-sub-title", children: s.name }), (0, i.jsxs)("div", { className: "jsx-2952233004 row", children: [(0, i.jsx)("div", { className: "jsx-2952233004 col mw-50px", children: (0, i.jsx)("img", { src: "/assets/icons/map.png", alt: "address", className: "jsx-2952233004" }) }), (0, i.jsx)("div", { className: "jsx-2952233004 col", children: (0, i.jsx)("p", { className: "jsx-2952233004", children: s.address }) })] }), (0, i.jsxs)("div", { className: "jsx-2952233004 row", children: [(0, i.jsx)("div", { className: "jsx-2952233004 col mw-50px", children: (0, i.jsx)("img", { src: "/assets/icons/phone.png", alt: "phone", className: "jsx-2952233004" }) }), (0, i.jsx)("div", { className: "jsx-2952233004 col", children: (0, i.jsx)(c.default, { href: "tel:".concat(s.phone), children: (0, i.jsx)("a", { className: "jsx-2952233004", children: (0, i.jsx)("p", { className: "jsx-2952233004 pointer-fit", children: s.phone }) }) }) })] }), (0, i.jsxs)("div", { className: "jsx-2952233004 row", children: [(0, i.jsx)("div", { className: "jsx-2952233004 col mw-50px", children: (0, i.jsx)("img", { src: "/assets/icons/mail.png", alt: "mail", className: "jsx-2952233004" }) }), (0, i.jsx)("div", { className: "jsx-2952233004 col", children: (0, i.jsx)(c.default, { href: "mailto:".concat(s.email), children: (0, i.jsx)("a", { className: "jsx-2952233004", children: (0, i.jsx)("p", { className: "jsx-2952233004 pointer-fit", children: s.email }) }) }) })] }), (0, i.jsxs)("div", { className: "jsx-2952233004 row", children: [(0, i.jsx)("div", { className: "jsx-2952233004 col mw-50px" }), (0, i.jsx)("div", { className: "jsx-2952233004 col", children: (0, i.jsx)("iframe", { src: s.map, height: "370", width: "100%", frameBorder: "0", allowFullScreen: !0, className: "jsx-2952233004" }) })] }), (0, i.jsx)("br", { className: "jsx-2952233004" })] }, e);
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(n.default, {
                id: "2952233004",
                children: [
                  ".sectionHeader.jsx-2952233004{width:100%;height:64px;}",
                  ".sectionHeaderIcon.jsx-2952233004{width:64px;height:64px;border-radius:32px;background-color:#eaeaea;margin:auto auto;padding:16px;margin-top:10px;margin-bottom:10px;}",
                  ".sectionHeaderIcon.jsx-2952233004 img.jsx-2952233004{height:32px;width:32px;-webkit-filter:brightness(0.7);filter:brightness(0.7);}",
                  ".sectionHeaderBar.jsx-2952233004{width:100%;height:6px;background-color:#eaeaea;margin-top:-42px;position:relative;z-index:-1;}",
                  "@media screen and (max-width:1024px){.location-title.jsx-2952233004{font-size:16px;}}",
                ],
              }),
            ],
          });
        };
    },
    6849: function (s, e, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/contact",
        function () {
          return a(6999);
        },
      ]);
    },
  },
  function (s) {
    s.O(0, [774, 888, 179], function () {
      return (e = 6849), s((s.s = e));
      var e;
    });
    var e = s.O();
    _N_E = e;
  },
]);
