(function() {
var exports = {};
exports.id = "pages/contact";
exports.ids = ["pages/contact"];
exports.modules = {

/***/ "./locales/en/index.js":
/*!*****************************!*\
  !*** ./locales/en/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  button: {
    goToMainPage: "Go to main page",
    readMore: "read more →",
    visitWebSite: "Visit web site"
  },
  title: {
    _404: "404",
    index: "Ardıc",
    about: "About",
    technologies: "Technologies",
    contact: "Contact"
  },
  meta: {
    _404: "404",
    index: "Ardıc",
    about: "About",
    technologies: "Technologies",
    contact: "Contact"
  },
  commons: {
    sliderText: "Platforms for large-scale <br/>IoT services & deep device management<br/>",
    plus0: "connectivity management",
    plus1: "service orchestration",
    plus2: "artificial intelligence",
    plus3: "big data",
    plus4: "vertical solutions",
    brand1Text: "Enterprise Mobility Management as a Service",
    brand2Text: "Full Stack IoT Platform with Edge Computing",
    copyright: "© 2021 ARDIC Inc.",
    references: "References",
    successStories: "Success Stories",
    solutions: "Solutions"
  },
  page: {
    _404: {
      title: "404 | Page not found"
    },
    home: {
      title: "Ardıc",
      slug: "/"
    },
    about: {
      title: "About",
      slug: "/about"
    },
    solutions: {
      title: "Solutions",
      slug: "/solutions"
    },
    technologies: {
      title: "Technologies",
      slug: "/technologies"
    },
    contact: {
      title: "Contact",
      slug: "/contact"
    }
  }
});

/***/ }),

/***/ "./locales/tr/index.js":
/*!*****************************!*\
  !*** ./locales/tr/index.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  button: {
    goToMainPage: "Ana sayfaya git",
    readMore: "devamını oku →",
    visitWebSite: "Web sayfasını ziyaret et"
  },
  title: {
    _404: "404",
    index: "Ardıc",
    about: "Hakkında",
    technologies: "Teknolojiler",
    contact: "İletişim"
  },
  meta: {
    _404: "404",
    index: "Ardıc",
    about: "Hakkında",
    technologies: "Teknolojiler",
    contact: "İletişim"
  },
  commons: {
    sliderText: "Büyük ölçekli IoT hizmetleri<br/>& derin cihaz yönetimi için platformlar<br/>",
    plus0: "bağlantı yönetimi",
    plus1: "hizmet düzenlemesi",
    plus2: "yapay zeka",
    plus3: "büyük veri",
    plus4: "dikey çözümler",
    brand1Text: "Hizmet Olarak Kurumsal Mobilite Yönetimi",
    brand2Text: "Edge Computing ile Tam Yığın IoT Platformu",
    copyright: "© 2021 ARDIC Inc.",
    references: "Referanslar",
    successStories: "Başarı Hikayeleri",
    solutions: "Çözümler"
  },
  page: {
    _404: {
      title: "404 | Sayfa Bulunamadı"
    },
    home: {
      title: "Ardıc",
      slug: "/"
    },
    about: {
      title: "Hakkında",
      slug: "/about"
    },
    solutions: {
      title: "Çözümler",
      slug: "/solutions"
    },
    technologies: {
      title: "Teknolojiler",
      slug: "/technologies"
    },
    contact: {
      title: "İletişim",
      slug: "/contact"
    }
  }
});

/***/ }),

/***/ "./pages/contact/index.js":
/*!********************************!*\
  !*** ./pages/contact/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/About.module.css */ "./styles/About.module.css");
/* harmony import */ var _styles_About_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_About_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../locales/tr */ "./locales/tr/index.js");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locales/en */ "./locales/en/index.js");

var _jsxFileName = "D:\\ardic_web\\pages\\contact\\index.js";






const Contact = ({
  data
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_4__.default : _locales_tr__WEBPACK_IMPORTED_MODULE_3__.default;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_About_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: ["ARDICTECH", " | ", t.title.contact]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: t.meta.contact
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container page-box",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "section-title",
        children: t.title.contact
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "col",
          children: data.map((item, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                className: "page-sub-title",
                children: [item.name, " : ", item.organization]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 29,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col mw-50px",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "assets/icons/map.png",
                    alt: "address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: item.address
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 37,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col mw-50px",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "assets/icons/phone.png",
                    alt: "address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: item.phone
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col mw-50px",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                    src: "assets/icons/mail.png",
                    alt: "address"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 50,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 49,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                    children: item.email
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 53,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "row",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col mw-50px"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 57,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "col",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("iframe", {
                    src: item.map,
                    height: "370",
                    width: "100%",
                    frameBorder: "0",
                    allowFullScreen: true
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 59,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 58,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 56,
                columnNumber: 19
              }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, undefined)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 17
            }, undefined);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined);
};

const getStaticProps = async router => {
  const res = await fetch(`${"http://localhost:3000"}/api/${router.locale}/contact`);
  const data = await res.json();
  return {
    props: {
      data
    }
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./styles/About.module.css":
/*!*********************************!*\
  !*** ./styles/About.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"charValue1": "About_charValue1__ylkmA",
	"charValue2": "About_charValue2__8jWhH",
	"chartImage": "About_chartImage__2fa5C",
	"chartValueName": "About_chartValueName__-zrdt",
	"chartBoxValues": "About_chartBoxValues__3C5gf",
	"box": "About_box__3WePB",
	"boxText": "About_boxText__2f3An",
	"boxIcon": "About_boxIcon__TKfni"
};


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/contact/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmRpYy8uL2xvY2FsZXMvZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9sb2NhbGVzL3RyL2luZGV4LmpzIiwid2VicGFjazovL2FyZGljLy4vcGFnZXMvY29udGFjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcmRpYy8uL3N0eWxlcy9BYm91dC5tb2R1bGUuY3NzIiwid2VicGFjazovL2FyZGljL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vYXJkaWMvZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovL2FyZGljL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiYnV0dG9uIiwiZ29Ub01haW5QYWdlIiwicmVhZE1vcmUiLCJ2aXNpdFdlYlNpdGUiLCJ0aXRsZSIsIl80MDQiLCJpbmRleCIsImFib3V0IiwidGVjaG5vbG9naWVzIiwiY29udGFjdCIsIm1ldGEiLCJjb21tb25zIiwic2xpZGVyVGV4dCIsInBsdXMwIiwicGx1czEiLCJwbHVzMiIsInBsdXMzIiwicGx1czQiLCJicmFuZDFUZXh0IiwiYnJhbmQyVGV4dCIsImNvcHlyaWdodCIsInJlZmVyZW5jZXMiLCJzdWNjZXNzU3RvcmllcyIsInNvbHV0aW9ucyIsInBhZ2UiLCJob21lIiwic2x1ZyIsIkNvbnRhY3QiLCJkYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidCIsImVuIiwidHIiLCJzdHlsZXMiLCJwcm9jZXNzIiwibWFwIiwiaXRlbSIsIm5hbWUiLCJvcmdhbml6YXRpb24iLCJhZGRyZXNzIiwicGhvbmUiLCJlbWFpbCIsImdldFN0YXRpY1Byb3BzIiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQWU7QUFDYkEsUUFBTSxFQUFFO0FBQ05DLGdCQUFZLEVBQUUsaUJBRFI7QUFFTkMsWUFBUSxFQUFFLGFBRko7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RSxHQUFFVix1QkFBaUIsUUFBT1AsTUFBTSxDQUFDRSxNQUFPLFVBQTFDLENBQXZCO0FBQ0EsUUFBTUgsSUFBSSxHQUFHLE1BQU1pQixHQUFHLENBQUNFLElBQUosRUFBbkI7QUFDQSxTQUFPO0FBQ0xDLFNBQUssRUFBRTtBQUNMcEI7QUFESztBQURGLEdBQVA7QUFLRCxDQVJNO0FBVVAsK0RBQWVELE9BQWYsRTs7Ozs7Ozs7OztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNWQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9jb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgZ29Ub01haW5QYWdlOiBcIkdvIHRvIG1haW4gcGFnZVwiLFxyXG4gICAgcmVhZE1vcmU6IFwicmVhZCBtb3JlIOKGklwiLFxyXG4gICAgdmlzaXRXZWJTaXRlOiBcIlZpc2l0IHdlYiBzaXRlXCIsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgXzQwNDogXCI0MDRcIixcclxuICAgIGluZGV4OiBcIkFyZMSxY1wiLFxyXG4gICAgYWJvdXQ6IFwiQWJvdXRcIixcclxuICAgIHRlY2hub2xvZ2llczogXCJUZWNobm9sb2dpZXNcIixcclxuICAgIGNvbnRhY3Q6IFwiQ29udGFjdFwiLFxyXG4gIH0sXHJcbiAgbWV0YToge1xyXG4gICAgXzQwNDogXCI0MDRcIixcclxuICAgIGluZGV4OiBcIkFyZMSxY1wiLFxyXG4gICAgYWJvdXQ6IFwiQWJvdXRcIixcclxuICAgIHRlY2hub2xvZ2llczogXCJUZWNobm9sb2dpZXNcIixcclxuICAgIGNvbnRhY3Q6IFwiQ29udGFjdFwiLFxyXG4gIH0sXHJcbiAgY29tbW9uczoge1xyXG4gICAgc2xpZGVyVGV4dDpcclxuICAgICAgXCJQbGF0Zm9ybXMgZm9yIGxhcmdlLXNjYWxlIDxici8+SW9UIHNlcnZpY2VzICYgZGVlcCBkZXZpY2UgbWFuYWdlbWVudDxici8+XCIsXHJcbiAgICBwbHVzMDogXCJjb25uZWN0aXZpdHkgbWFuYWdlbWVudFwiLFxyXG4gICAgcGx1czE6IFwic2VydmljZSBvcmNoZXN0cmF0aW9uXCIsXHJcbiAgICBwbHVzMjogXCJhcnRpZmljaWFsIGludGVsbGlnZW5jZVwiLFxyXG4gICAgcGx1czM6IFwiYmlnIGRhdGFcIixcclxuICAgIHBsdXM0OiBcInZlcnRpY2FsIHNvbHV0aW9uc1wiLFxyXG4gICAgYnJhbmQxVGV4dDogXCJFbnRlcnByaXNlIE1vYmlsaXR5IE1hbmFnZW1lbnQgYXMgYSBTZXJ2aWNlXCIsXHJcbiAgICBicmFuZDJUZXh0OiBcIkZ1bGwgU3RhY2sgSW9UIFBsYXRmb3JtIHdpdGggRWRnZSBDb21wdXRpbmdcIixcclxuICAgIGNvcHlyaWdodDogXCLCqSAyMDIxIEFSRElDIEluYy5cIixcclxuICAgIHJlZmVyZW5jZXM6IFwiUmVmZXJlbmNlc1wiLFxyXG4gICAgc3VjY2Vzc1N0b3JpZXM6IFwiU3VjY2VzcyBTdG9yaWVzXCIsXHJcbiAgICBzb2x1dGlvbnM6IFwiU29sdXRpb25zXCIsXHJcbiAgfSxcclxuICBwYWdlOiB7XHJcbiAgICBfNDA0OiB7XHJcbiAgICAgIHRpdGxlOiBcIjQwNCB8IFBhZ2Ugbm90IGZvdW5kXCIsXHJcbiAgICB9LFxyXG4gICAgaG9tZToge1xyXG4gICAgICB0aXRsZTogXCJBcmTEsWNcIixcclxuICAgICAgc2x1ZzogXCIvXCIsXHJcbiAgICB9LFxyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgdGl0bGU6IFwiQWJvdXRcIixcclxuICAgICAgc2x1ZzogXCIvYWJvdXRcIixcclxuICAgIH0sXHJcbiAgICBzb2x1dGlvbnM6IHtcclxuICAgICAgdGl0bGU6IFwiU29sdXRpb25zXCIsXHJcbiAgICAgIHNsdWc6IFwiL3NvbHV0aW9uc1wiLFxyXG4gICAgfSxcclxuICAgIHRlY2hub2xvZ2llczoge1xyXG4gICAgICB0aXRsZTogXCJUZWNobm9sb2dpZXNcIixcclxuICAgICAgc2x1ZzogXCIvdGVjaG5vbG9naWVzXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICB0aXRsZTogXCJDb250YWN0XCIsXHJcbiAgICAgIHNsdWc6IFwiL2NvbnRhY3RcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgZ29Ub01haW5QYWdlOiBcIkFuYSBzYXlmYXlhIGdpdFwiLFxyXG4gICAgcmVhZE1vcmU6IFwiZGV2YW3EsW7EsSBva3Ug4oaSXCIsXHJcbiAgICB2aXNpdFdlYlNpdGU6IFwiV2ViIHNheWZhc8SxbsSxIHppeWFyZXQgZXRcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBfNDA0OiBcIjQwNFwiLFxyXG4gICAgaW5kZXg6IFwiQXJkxLFjXCIsXHJcbiAgICBhYm91dDogXCJIYWtrxLFuZGFcIixcclxuICAgIHRlY2hub2xvZ2llczogXCJUZWtub2xvamlsZXJcIixcclxuICAgIGNvbnRhY3Q6IFwixLBsZXRpxZ9pbVwiLFxyXG4gIH0sXHJcbiAgbWV0YToge1xyXG4gICAgXzQwNDogXCI0MDRcIixcclxuICAgIGluZGV4OiBcIkFyZMSxY1wiLFxyXG4gICAgYWJvdXQ6IFwiSGFra8SxbmRhXCIsXHJcbiAgICB0ZWNobm9sb2dpZXM6IFwiVGVrbm9sb2ppbGVyXCIsXHJcbiAgICBjb250YWN0OiBcIsSwbGV0acWfaW1cIixcclxuICB9LFxyXG4gIGNvbW1vbnM6IHtcclxuICAgIHNsaWRlclRleHQ6XHJcbiAgICAgIFwiQsO8ecO8ayDDtmzDp2VrbGkgSW9UIGhpem1ldGxlcmk8YnIvPiYgZGVyaW4gY2loYXogecO2bmV0aW1pIGnDp2luIHBsYXRmb3JtbGFyPGJyLz5cIixcclxuICAgIHBsdXMwOiBcImJhxJ9sYW50xLEgecO2bmV0aW1pXCIsXHJcbiAgICBwbHVzMTogXCJoaXptZXQgZMO8emVubGVtZXNpXCIsXHJcbiAgICBwbHVzMjogXCJ5YXBheSB6ZWthXCIsXHJcbiAgICBwbHVzMzogXCJiw7x5w7xrIHZlcmlcIixcclxuICAgIHBsdXM0OiBcImRpa2V5IMOnw7Z6w7xtbGVyXCIsXHJcbiAgICBicmFuZDFUZXh0OiBcIkhpem1ldCBPbGFyYWsgS3VydW1zYWwgTW9iaWxpdGUgWcO2bmV0aW1pXCIsXHJcbiAgICBicmFuZDJUZXh0OiBcIkVkZ2UgQ29tcHV0aW5nIGlsZSBUYW0gWcSxxJ/EsW4gSW9UIFBsYXRmb3JtdVwiLFxyXG4gICAgY29weXJpZ2h0OiBcIsKpIDIwMjEgQVJESUMgSW5jLlwiLFxyXG4gICAgcmVmZXJlbmNlczogXCJSZWZlcmFuc2xhclwiLFxyXG4gICAgc3VjY2Vzc1N0b3JpZXM6IFwiQmHFn2FyxLEgSGlrYXllbGVyaVwiLFxyXG4gICAgc29sdXRpb25zOiBcIsOHw7Z6w7xtbGVyXCIsXHJcbiAgfSxcclxuICBwYWdlOiB7XHJcbiAgICBfNDA0OiB7XHJcbiAgICAgIHRpdGxlOiBcIjQwNCB8IFNheWZhIEJ1bHVuYW1hZMSxXCIsXHJcbiAgICB9LFxyXG4gICAgaG9tZToge1xyXG4gICAgICB0aXRsZTogXCJBcmTEsWNcIixcclxuICAgICAgc2x1ZzogXCIvXCIsXHJcbiAgICB9LFxyXG4gICAgYWJvdXQ6IHtcclxuICAgICAgdGl0bGU6IFwiSGFra8SxbmRhXCIsXHJcbiAgICAgIHNsdWc6IFwiL2Fib3V0XCIsXHJcbiAgICB9LFxyXG4gICAgc29sdXRpb25zOiB7XHJcbiAgICAgIHRpdGxlOiBcIsOHw7Z6w7xtbGVyXCIsXHJcbiAgICAgIHNsdWc6IFwiL3NvbHV0aW9uc1wiLFxyXG4gICAgfSxcclxuICAgIHRlY2hub2xvZ2llczoge1xyXG4gICAgICB0aXRsZTogXCJUZWtub2xvamlsZXJcIixcclxuICAgICAgc2x1ZzogXCIvdGVjaG5vbG9naWVzXCIsXHJcbiAgICB9LFxyXG4gICAgY29udGFjdDoge1xyXG4gICAgICB0aXRsZTogXCLEsGxldGnFn2ltXCIsXHJcbiAgICAgIHNsdWc6IFwiL2NvbnRhY3RcIixcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9BYm91dC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgdHIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvdHJcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9sb2NhbGVzL2VuXCI7XHJcblxyXG5jb25zdCBDb250YWN0ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlcjtcclxuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImVuXCIgPyBlbiA6IHRyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5cclxuICAgICAgICAgIHtwcm9jZXNzLmVudi5BUFBfTkFNRX0gfCB7dC50aXRsZS5jb250YWN0fVxyXG4gICAgICAgIDwvdGl0bGU+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17dC5tZXRhLmNvbnRhY3R9IC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGFnZS1ib3hcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57dC50aXRsZS5jb250YWN0fTwvZGl2PlxyXG4gICAgICAgIDxiciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhZ2Utc3ViLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubmFtZX0gOiB7aXRlbS5vcmdhbml6YXRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtdy01MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9tYXAucG5nXCIgYWx0PVwiYWRkcmVzc1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLmFkZHJlc3N9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtdy01MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9waG9uZS5wbmdcIiBhbHQ9XCJhZGRyZXNzXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0ucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtdy01MHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImFzc2V0cy9pY29ucy9tYWlsLnBuZ1wiIGFsdD1cImFkZHJlc3NcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS5lbWFpbH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG13LTUwcHhcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW0ubWFwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIzNzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUJvcmRlcj1cIjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd0Z1bGxTY3JlZW49e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIChyb3V0ZXIpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5IT1NUfS9hcGkvJHtyb3V0ZXIubG9jYWxlfS9jb250YWN0YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGFyVmFsdWUxXCI6IFwiQWJvdXRfY2hhclZhbHVlMV9feWxrbUFcIixcblx0XCJjaGFyVmFsdWUyXCI6IFwiQWJvdXRfY2hhclZhbHVlMl9fOGpXaEhcIixcblx0XCJjaGFydEltYWdlXCI6IFwiQWJvdXRfY2hhcnRJbWFnZV9fMmZhNUNcIixcblx0XCJjaGFydFZhbHVlTmFtZVwiOiBcIkFib3V0X2NoYXJ0VmFsdWVOYW1lX18tenJkdFwiLFxuXHRcImNoYXJ0Qm94VmFsdWVzXCI6IFwiQWJvdXRfY2hhcnRCb3hWYWx1ZXNfXzNDNWdmXCIsXG5cdFwiYm94XCI6IFwiQWJvdXRfYm94X18zV2VQQlwiLFxuXHRcImJveFRleHRcIjogXCJBYm91dF9ib3hUZXh0X18yZjNBblwiLFxuXHRcImJveEljb25cIjogXCJBYm91dF9ib3hJY29uX19US2ZuaVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9