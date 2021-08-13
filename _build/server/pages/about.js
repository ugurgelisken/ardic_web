(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 8160:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3289);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1997);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1298);








const About = ({
  data,
  meta
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z : _locales_tr__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "jsx-4097930389",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        className: "jsx-4097930389",
        children: ["ARDICTECH", " | ", meta.title]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: meta.desc,
        className: "jsx-4097930389"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-4097930389" + " " + "container page-box",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-4097930389" + " " + "section-title",
        children: meta.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
        className: "jsx-4097930389"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        className: "jsx-4097930389" + " " + "mb-4 text-center",
        children: data.text
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-4097930389" + " " + "row mt-4",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-4097930389" + " " + "col-sm-12 col-md-6 col-lg-3 col-xl-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4097930389" + " " + "box",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              className: "jsx-4097930389",
              children: data.section_1.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-4097930389" + " " + "boxText",
              children: data.section_1.value
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: `assets/icons/${data.section_1.icon}.png`,
              alt: data.section_1.title,
              className: "jsx-4097930389" + " " + "boxIcon"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-4097930389" + " " + "col-sm-12 col-md-6 col-lg-3 col-xl-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4097930389" + " " + "box",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              className: "jsx-4097930389",
              children: data.section_2.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-4097930389" + " " + "boxText",
              children: data.section_2.value
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: `assets/icons/${data.section_2.icon}.png`,
              alt: data.section_2.title,
              className: "jsx-4097930389" + " " + "boxIcon"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-4097930389" + " " + "col-sm-12 col-md-6 col-lg-3 col-xl-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4097930389" + " " + "box",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              className: "jsx-4097930389",
              children: data.section_3.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-4097930389" + " " + "boxText",
              children: data.section_3.value
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: `assets/icons/${data.section_3.icon}.png`,
              alt: data.section_3.title,
              className: "jsx-4097930389" + " " + "boxIcon"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-4097930389" + " " + "col-sm-12 col-md-6 col-lg-3 col-xl-3",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4097930389" + " " + "box",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              className: "jsx-4097930389",
              children: data.section_4.title
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
              className: "jsx-4097930389" + " " + "boxText",
              children: data.section_4.value
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: `assets/icons/${data.section_4.icon}.png`,
              alt: data.section_4.title,
              className: "jsx-4097930389" + " " + "boxIcon"
            })]
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          className: "jsx-4097930389" + " " + "col-sm-12 col-md-12 col-lg-6 col-xl-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "jsx-4097930389" + " " + "box",
            children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
              className: "jsx-4097930389",
              children: data.chart.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "jsx-4097930389" + " " + "chartBoxValues",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4097930389",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-4097930389" + " " + "chartValueName",
                  children: data.chart.value_2.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-4097930389" + " " + "charValue2",
                  children: data.chart.value_2.value
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-4097930389",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-4097930389" + " " + "chartValueName",
                  children: data.chart.value_1.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                  className: "jsx-4097930389" + " " + "charValue1",
                  children: data.chart.value_1.value
                })]
              })]
            }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
              src: "assets/chart.png",
              alt: "",
              className: "jsx-4097930389" + " " + "chartImage"
            })]
          })
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "4097930389",
      children: [".charValue1.jsx-4097930389{font-size:40px;line-height:1em;font-weight:700;background:-webkit-linear-gradient(338deg,#67a0fd,#9a6bfb);-webkit-background-clip:text;-webkit-text-fill-color:transparent;width:-moz-fit-content;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}", ".charValue2.jsx-4097930389{font-size:40px;line-height:1em;font-weight:700;background:-webkit-linear-gradient(338deg,#a25dff,#df68ff);-webkit-background-clip:text;-webkit-text-fill-color:transparent;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}", ".chartImage.jsx-4097930389{width:100%;}", ".chartValueName.jsx-4097930389{font-size:20px;font-weight:bolder;color:silver;margin-bottom:0px;}", ".chartBoxValues.jsx-4097930389{position:relative;left:10px;top:10px;height:0px;background-color:white;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;}", ".box.jsx-4097930389{border-radius:10px;padding:10px;-webkit-filter:drop-shadow(0px 0px 6px silver);filter:drop-shadow(0px 0px 6px silver);background-color:white;min-height:110px;margin-right:10px;margin-bottom:30px;}", ".boxText.jsx-4097930389{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:white;background-image:-webkit-linear-gradient( 330deg, rgb(0,228,216), rgb(132,3,255) );font-size:4rem;font-weight:bolder;margin:auto auto;background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;}", ".boxIcon.jsx-4097930389{height:30px;opacity:0.4;position:absolute;bottom:10px;right:10px;}", "@media screen and (max-width:768px){.charValue1.jsx-4097930389,.charValue2.jsx-4097930389{font-size:32px;}}"]
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (About);
const getServerSideProps = async router => {
  const res = await fetch(`${"http://localhost:3000"}/api/${router.locale}/about`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta
    }
  };
};

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

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 3289:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [969], function() { return __webpack_exec__(8160); });
module.exports = __webpack_exports__;

})();