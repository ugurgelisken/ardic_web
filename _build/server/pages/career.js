(function() {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 3944:
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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(701);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4823);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1997);
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1298);










const Career = ({
  data,
  meta
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z : _locales_tr__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "jsx-963297604",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        className: "jsx-963297604",
        children: ["ARDICTECH", " | ", meta.title]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: meta.desc,
        className: "jsx-963297604"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-963297604" + " " + "container page-box",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-963297604" + " " + "section-title",
        children: meta.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
        className: "jsx-963297604"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-963297604" + " " + "teams-texts",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "jsx-963297604" + " " + "pointer",
          children: data.title_1
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "jsx-963297604",
          children: data.text_1
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-963297604" + " " + "cover-img mb-10 overflow-hidden",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          src: data.cover,
          alt: meta.title,
          className: "jsx-963297604" + " " + "max-width-100per"
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "jsx-963297604" + " " + "text-center",
        children: data.title_2
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_4__.default, {
        href: `mailto:${data.email}`,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          className: "jsx-963297604",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-963297604" + " " + "text-center pointer",
            children: data.text_2
          })
        })
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-963297604" + " " + "row",
        children: data.positions.map((item, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-963297604" + " " + "card mb-2",
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
              className: "jsx-963297604" + " " + "card-body",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-963297604" + " " + "row",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                  className: "jsx-963297604" + " " + "col col-12 col-sm-12 col-md-4 col-lg-3 col-xl-2 pl-0",
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: item.img,
                    alt: item.name,
                    className: "jsx-963297604" + " " + "carreer-img"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                  className: "jsx-963297604" + " " + "col col-12 col-sm-12 col-md-8 col-lg-9 col-xl-10",
                  children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: "jsx-963297604",
                    children: item.name
                  }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    dangerouslySetInnerHTML: (0,_utils__WEBPACK_IMPORTED_MODULE_5__.createHTML)(item.detailTexts, t),
                    className: "jsx-963297604"
                  })]
                })]
              })
            })
          }, index);
        })
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "963297604",
      children: [".cover-img{min-height:400px;}", ".teams-texts{position:absolute;top:200px;left:40%;right:10px;border-top:1px solid #eaeaea;padding:20px;text-align:justify;background-color:rgba(255,255,255,0.6);}", ".meet-team-title{font-size:40px;font-weight:800;position:absolute;top:30px;right:60x;}", ".carreer-img{width:100%;margin-bottom:10px;}", "@media screen and (max-width:720px){.teams-texts{position:unset;padding:10px;text-align:left;margin-bottom:-10px;margin-top:-30px;border-top:none;}.card-body{padding:0px !important;padding-top:10px !important;}}", "@media screen and (max-width:1020px){.teams-texts{position:unset;padding:10px;text-align:left;margin-bottom:-20px;}.max-width-100per{width:100%;}}"]
    })]
  });
};

const getServerSideProps = async router => {
  const res = await fetch(`${"http://localhost:3000"}/api/${router.locale}/career`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Career);

/***/ }),

/***/ 4823:
/***/ (function(module) {

const createHTML = (data, t) => {
  const htmlText = data.map((item, index) => {
    if (item.tag === "a") {
      return `<a class="btn-smooth" key=${index} href=${item.text} target="_blank" rel="noopener noreferrer">${t.commons.seeTheDocuments}</a><br/>`;
    }

    return `<${item.tag} key="${index}">${item.text}</${item.tag}>`;
  });
  return {
    __html: htmlText.join("").replace(/\*/g, "<br/>●").replace(/\--/g, "<br/>&emsp;○").replace(/\> <br/g, "")
  };
};

module.exports = {
  createHTML
};

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
var __webpack_exports__ = __webpack_require__.X(0, [664,969], function() { return __webpack_exec__(3944); });
module.exports = __webpack_exports__;

})();