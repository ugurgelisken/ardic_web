(function() {
var exports = {};
exports.id = 335;
exports.ids = [335];
exports.modules = {

/***/ 6999:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ contact; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./locales/tr/index.js
var tr = __webpack_require__(1997);
// EXTERNAL MODULE: ./locales/en/index.js
var en = __webpack_require__(1298);
;// CONCATENATED MODULE: ./components/mailForm/index.js








const Footer = () => {
  const router = (0,router_.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? en/* default */.Z : tr/* default */.Z;
  const {
    0: name,
    1: setName
  } = (0,external_react_.useState)("");
  const {
    0: email,
    1: setEmail
  } = (0,external_react_.useState)("");
  const {
    0: message,
    1: setMessage
  } = (0,external_react_.useState)("");
  const {
    0: submitted,
    1: setSubmitted
  } = (0,external_react_.useState)("");

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateEmail(email) && name && message && submitted === "") {
      setSubmitted("sending");
      fetch("api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          message
        })
      }).then(response => response.json()).then(res => {
        if (res.status === 200) {
          setSubmitted("sent");
          setName("");
          setEmail("");
          setMessage("");
          setTimeout(() => {
            setSubmitted("");
          }, 3000);
        }

        if (res.status === 500) {
          setSubmitted("error");
          console.log(res);
          setTimeout(() => {
            setSubmitted("");
          }, 3000);
        }
      }).catch(e => {
        console.log(e);
        setTimeout(() => {
          setSubmitted("");
        }, 3000);
      });
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-1886508322" + " " + "container-mail-form",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-1886508322" + " " + "container-fluid",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-1886508322" + " " + "row",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-1886508322" + " " + "col p0",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
            onSubmit: e => {
              handleSubmit(e);
            },
            className: "jsx-1886508322" + " " + "main",
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-1886508322" + " " + "inputGroup",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "name",
                className: "jsx-1886508322",
                children: t.forms.mail.name
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "text",
                name: "name",
                id: "name",
                required: true,
                value: name,
                onChange: e => {
                  setName(e.target.value);
                },
                className: "jsx-1886508322" + " " + "form-control"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-1886508322" + " " + "inputGroup",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "email",
                className: "jsx-1886508322",
                children: t.forms.mail.email
              }), /*#__PURE__*/jsx_runtime_.jsx("input", {
                type: "email",
                name: "email",
                id: "email",
                value: email,
                pattern: "^[^ ]+@[^ ]+\\.[a-z]{2,6}$",
                required: true,
                onChange: e => {
                  setEmail(e.target.value);
                },
                className: "jsx-1886508322" + " " + "form-control"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-1886508322" + " " + "inputGroup",
              children: [/*#__PURE__*/jsx_runtime_.jsx("label", {
                htmlFor: "message",
                className: "jsx-1886508322",
                children: t.forms.mail.message
              }), /*#__PURE__*/jsx_runtime_.jsx("textarea", {
                rows: "4",
                type: "text",
                name: "message",
                id: "message",
                value: message,
                required: true,
                onChange: e => {
                  setMessage(e.target.value);
                },
                className: "jsx-1886508322" + " " + "form-control"
              })]
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-1886508322" + " " + "row mb-10",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-1886508322" + " " + "col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 t-10",
                children: [submitted === "sending" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-1886508322" + " " + "alert alert-warning fit-content mt-10",
                  children: t.forms.mail.sending
                }), submitted === "sent" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-1886508322" + " " + "alert alert-success fit-content mt-10",
                  children: t.forms.mail.sent
                }), submitted === "error" && /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-1886508322" + " " + "alert alert-danger fit-content mt-10",
                  children: t.forms.mail.error
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "jsx-1886508322" + " " + "col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right",
                children: /*#__PURE__*/jsx_runtime_.jsx("input", {
                  type: "submit",
                  disabled: submitted !== "",
                  className: "jsx-1886508322" + " " + "submit"
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "1886508322",
      children: [".container-mail-form.jsx-1886508322{margin-bottom:10px;}", ".submit.jsx-1886508322{width:100px;float:right;border:none;padding:10px 20px;margin-top:10px;border-radius:4px;color:white !important;background-color:#54a7e4;);;}", ".submit.jsx-1886508322:hover{cursor:pointer;}", ".errorMessage.jsx-1886508322{margin-top:10px;margin-bottom:20px;}", ".submit.jsx-1886508322:disabled,.submit[disabled].jsx-1886508322{color:silver;opacity:0.9;cursor:not-allowed;}", "@media screen and (max-width:768px){.submit.jsx-1886508322{width:100%;margin-bottom:20px;}.errorMessage.jsx-1886508322{padding-top:60px;text-align:center;}.alert.jsx-1886508322{width:100% !important;}}"]
    })]
  });
};

/* harmony default export */ var mailForm = (Footer);
;// CONCATENATED MODULE: ./pages/contact/index.js










const Contact = ({
  data,
  meta
}) => {
  const router = (0,router_.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? en/* default */.Z : tr/* default */.Z;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-2952233004",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("title", {
        className: "jsx-2952233004",
        children: ["ARDICTECH", " | ", meta.title]
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: meta.desc,
        className: "jsx-2952233004"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-2952233004" + " " + "container page-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2952233004" + " " + "section-title",
        children: t.commons.contactForm
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2952233004" + " " + "sectionHeader",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2952233004" + " " + "sectionHeaderIcon",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/assets/icons/contact-forms.png",
            alt: "",
            className: "jsx-2952233004"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2952233004" + " " + "sectionHeaderBar"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx(mailForm, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-2952233004" + " " + "section-title",
        children: t.commons.locations
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2952233004" + " " + "sectionHeader",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2952233004" + " " + "sectionHeaderIcon",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: "/assets/icons/maps_placeholder.png",
            alt: "",
            className: "jsx-2952233004"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2952233004" + " " + "sectionHeaderBar"
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("br", {
        className: "jsx-2952233004"
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-2952233004" + " " + "row",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h5", {
          className: "jsx-2952233004" + " " + "text-center location-title",
          children: meta.desc
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2952233004"
        }), /*#__PURE__*/jsx_runtime_.jsx("br", {
          className: "jsx-2952233004"
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-2952233004" + " " + "col",
          children: data.map((item, index) => {
            return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-2952233004",
              children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
                className: "jsx-2952233004" + " " + "page-sub-title",
                children: item.name
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-2952233004" + " " + "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col mw-50px",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/icons/map.png",
                    alt: "address",
                    className: "jsx-2952233004"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                    className: "jsx-2952233004",
                    children: item.address
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-2952233004" + " " + "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col mw-50px",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/icons/phone.png",
                    alt: "phone",
                    className: "jsx-2952233004"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: `tel:${item.phone}`,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "jsx-2952233004",
                      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                        className: "jsx-2952233004" + " " + "pointer-fit",
                        children: item.phone
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-2952233004" + " " + "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col mw-50px",
                  children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                    src: "assets/icons/mail.png",
                    alt: "mail",
                    className: "jsx-2952233004"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                    href: `mailto:${item.email}`,
                    children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                      className: "jsx-2952233004",
                      children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                        className: "jsx-2952233004" + " " + "pointer-fit",
                        children: item.email
                      })
                    })
                  })
                })]
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-2952233004" + " " + "row",
                children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col mw-50px"
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-2952233004" + " " + "col",
                  children: /*#__PURE__*/jsx_runtime_.jsx("iframe", {
                    src: item.map,
                    height: "370",
                    width: "100%",
                    frameBorder: "0",
                    allowFullScreen: true,
                    className: "jsx-2952233004"
                  })
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx("br", {
                className: "jsx-2952233004"
              })]
            }, index);
          })
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "2952233004",
      children: [".sectionHeader.jsx-2952233004{width:100%;height:64px;}", ".sectionHeaderIcon.jsx-2952233004{width:64px;height:64px;border-radius:32px;background-color:#eaeaea;margin:auto auto;padding:16px;margin-top:10px;margin-bottom:10px;}", ".sectionHeaderIcon.jsx-2952233004 img.jsx-2952233004{height:32px;width:32px;-webkit-filter:brightness(0.7);filter:brightness(0.7);}", ".sectionHeaderBar.jsx-2952233004{width:100%;height:6px;background-color:#eaeaea;margin-top:-42px;position:relative;z-index:-1;}", "@media screen and (max-width:1024px){.location-title.jsx-2952233004{font-size:16px;}}"]
    })]
  });
};

const getServerSideProps = async router => {
  const res = await fetch(`${"http://localhost:3000"}/api/${router.locale}/contact`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta
    }
  };
};
/* harmony default export */ var contact = (Contact);

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 701:
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,969], function() { return __webpack_exec__(6999); });
module.exports = __webpack_exports__;

})();