(function() {
var exports = {};
exports.id = 219;
exports.ids = [219];
exports.modules = {

/***/ 9535:
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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);






const Teams = ({
  data,
  meta
}) => {
  const moveToDiv = id => {
    const elmntToView = document.getElementById(id);
    elmntToView.scrollIntoView();
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "jsx-1141428875",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
        className: "jsx-1141428875",
        children: ["ARDICTECH", " | ", meta.title]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
        name: "description",
        content: meta.desc,
        className: "jsx-1141428875"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: "jsx-1141428875" + " " + "container page-box",
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1141428875" + " " + "section-title",
        children: meta.title
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {
        className: "jsx-1141428875"
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
        className: "jsx-1141428875" + " " + "text-center mb-3",
        children: data.summary
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "jsx-1141428875" + " " + "cover-img mb-10 overflow-hidden",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
          clasName: "max-width-100per",
          src: data.cover,
          alt: meta.title,
          className: "jsx-1141428875"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-1141428875" + " " + "teams-texts",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          onClick: () => {
            moveToDiv("teams");
          },
          className: "jsx-1141428875" + " " + "pointer",
          children: data.title_1
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
          className: "jsx-1141428875",
          children: data.text_1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-1141428875" + " " + "teams-determined mb-3",
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
          className: "jsx-1141428875",
          children: data.title_2
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
          className: "jsx-1141428875",
          children: data.text_2
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        id: "teams",
        className: "jsx-1141428875" + " " + "row",
        children: data.members.map((member, index) => {
          return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "jsx-1141428875" + " " + "col col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
              className: "jsx-1141428875" + " " + "card mb-4",
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: member.photo,
                alt: member.name,
                className: "jsx-1141428875" + " " + "card-img-top"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "jsx-1141428875" + " " + "card-body",
                children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                  className: "jsx-1141428875",
                  children: member.name
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                  className: "jsx-1141428875",
                  children: member.position
                }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_3__.default, {
                  href: member.linkedin,
                  children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "jsx-1141428875",
                    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                      src: "/assets/socials/linkedin-2.png",
                      alt: "",
                      className: "jsx-1141428875" + " " + "linkedinIcon"
                    })
                  })
                })]
              })]
            })
          }, index);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "jsx-1141428875" + " " + "statistics-box-area",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1141428875" + " " + "statistics-box",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: data.commons.cupOfCoffe.image,
            alt: data.commons.cupOfCoffe.text,
            className: "jsx-1141428875" + " " + "statistics-img"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "jsx-1141428875" + " " + "statistics-name",
            children: data.commons.cupOfCoffe.text
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-1141428875" + " " + "statistics-value",
            children: data.commons.cupOfCoffe.value
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1141428875" + " " + "statistics-box",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: data.commons.nights.image,
            alt: data.commons.nights.text,
            className: "jsx-1141428875" + " " + "statistics-img"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "jsx-1141428875" + " " + "statistics-name",
            children: data.commons.nights.text
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-1141428875" + " " + "statistics-value",
            children: data.commons.nights.value
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
          className: "jsx-1141428875" + " " + "statistics-box",
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
            src: data.commons.years.image,
            alt: data.commons.years.text,
            className: "jsx-1141428875" + " " + "statistics-img"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
            className: "jsx-1141428875" + " " + "statistics-name",
            children: data.commons.years.text
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            className: "jsx-1141428875" + " " + "statistics-value",
            children: data.commons.years.value
          })]
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
      id: "1141428875",
      children: [".statistics-box-area{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-top:1px solid #eaeaea;padding:20px 10px 10px 10px;}", ".statistics-box{width:20%;min-width:160px;height:160px;text-align:center;padding:10px 20px 10px 20px;}", ".statistics-img{height:80px;}", ".statistics-name{margin-top:6px;margin-bottom:-4px;font-size:16px;}", ".statistics-value{font-size:30px;font-weight:600;opacity:0.8;}", ".cover-img{min-height:400px;}", ".teams-determined{text-align:center;margin:10px;}", ".teams-texts{position:absolute;top:260px;left:40%;right:10px;border-top:1px solid #eaeaea;padding:20px;text-align:justify;background-color:rgba(255,255,255,0.6);}", ".meet-team-title{font-size:40px;font-weight:800;position:absolute;top:30px;right:60x;}", ".linkedinIcon{float:right;height:32px;width:32px;}", ".linkedinIcon:hover{opacity:0.8;}", "@media screen and (max-width:640px){.teams-determined{text-align:left;}.statistics-box{height:120px;}.statistics-value{font-size:16px;}}", "@media screen and (max-width:1024px){.statistics-box{width:30%;height:140px;text-align:center;padding:10px 20px 10px 20px;}.statistics-img{height:60px;}.statistics-value{font-size:20px;}.teams-texts{position:unset;padding:10px;text-align:left;margin-bottom:-30px;}.max-width-100per{width:100%;}}"]
    })]
  });
};

const getServerSideProps = async router => {
  const res = await fetch(`${"http://localhost:3000"}/api/${router.locale}/teams`);
  const data = await res.json();
  return {
    props: {
      data: data.data,
      meta: data.meta
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Teams);

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(9535); });
module.exports = __webpack_exports__;

})();