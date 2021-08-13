(function() {
var exports = {};
exports.id = "pages/404";
exports.ids = ["pages/404"];
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

/***/ "./pages/404.js":
/*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_404_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/_404.module.css */ "./styles/_404.module.css");
/* harmony import */ var _styles_404_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_404_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../locales/tr */ "./locales/tr/index.js");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../locales/en */ "./locales/en/index.js");

var _jsxFileName = "D:\\ardic_web\\pages\\404.js";






const _404 = data => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_4__.default : _locales_tr__WEBPACK_IMPORTED_MODULE_3__.default;

  const redirectIndexPage = () => {
    router.push("/about");
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_404_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: t.page._404.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
      children: t.page._404.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
      className: (_styles_404_module_css__WEBPACK_IMPORTED_MODULE_5___default()["small-button"]),
      onClick: () => redirectIndexPage(),
      children: t.button.goToMainPage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (_404);

/***/ }),

/***/ "./styles/_404.module.css":
/*!********************************!*\
  !*** ./styles/_404.module.css ***!
  \********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "_404_container__10Gog",
	"small-button": "_404_small-button__2xpqL"
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
var __webpack_exports__ = (__webpack_exec__("./pages/404.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmRpYy8uL2xvY2FsZXMvZW4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9sb2NhbGVzL3RyL2luZGV4LmpzIiwid2VicGFjazovL2FyZGljLy4vcGFnZXMvNDA0LmpzIiwid2VicGFjazovL2FyZGljLy4vc3R5bGVzL180MDQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcmRpYy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL2FyZGljL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9hcmRpYy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImJ1dHRvbiIsImdvVG9NYWluUGFnZSIsInJlYWRNb3JlIiwidmlzaXRXZWJTaXRlIiwidGl0bGUiLCJfNDA0IiwiaW5kZXgiLCJhYm91dCIsInRlY2hub2xvZ2llcyIsImNvbnRhY3QiLCJtZXRhIiwiY29tbW9ucyIsInNsaWRlclRleHQiLCJwbHVzMCIsInBsdXMxIiwicGx1czIiLCJwbHVzMyIsInBsdXM0IiwiYnJhbmQxVGV4dCIsImJyYW5kMlRleHQiLCJjb3B5cmlnaHQiLCJyZWZlcmVuY2VzIiwic3VjY2Vzc1N0b3JpZXMiLCJzb2x1dGlvbnMiLCJwYWdlIiwiaG9tZSIsInNsdWciLCJkYXRhIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidCIsImVuIiwidHIiLCJyZWRpcmVjdEluZGV4UGFnZSIsInB1c2giLCJzdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0RBQWU7QUFDYkEsUUFBTSxFQUFFO0FBQ05DLGdCQUFZLEVBQUUsaUJBRFI7QUFFTkMsWUFBUSxFQUFFLGFBRko7QUFHTkMsZ0JBQVksRUFBRTtBQUhSLEdBREs7QUFNYkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRSxLQUREO0FBRUxDLFNBQUssRUFBRSxPQUZGO0FBR0xDLFNBQUssRUFBRSxPQUhGO0FBSUxD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QTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLHVDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzLzQwNC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcclxuICBidXR0b246IHtcclxuICAgIGdvVG9NYWluUGFnZTogXCJHbyB0byBtYWluIHBhZ2VcIixcclxuICAgIHJlYWRNb3JlOiBcInJlYWQgbW9yZSDihpJcIixcclxuICAgIHZpc2l0V2ViU2l0ZTogXCJWaXNpdCB3ZWIgc2l0ZVwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIF80MDQ6IFwiNDA0XCIsXHJcbiAgICBpbmRleDogXCJBcmTEsWNcIixcclxuICAgIGFib3V0OiBcIkFib3V0XCIsXHJcbiAgICB0ZWNobm9sb2dpZXM6IFwiVGVjaG5vbG9naWVzXCIsXHJcbiAgICBjb250YWN0OiBcIkNvbnRhY3RcIixcclxuICB9LFxyXG4gIG1ldGE6IHtcclxuICAgIF80MDQ6IFwiNDA0XCIsXHJcbiAgICBpbmRleDogXCJBcmTEsWNcIixcclxuICAgIGFib3V0OiBcIkFib3V0XCIsXHJcbiAgICB0ZWNobm9sb2dpZXM6IFwiVGVjaG5vbG9naWVzXCIsXHJcbiAgICBjb250YWN0OiBcIkNvbnRhY3RcIixcclxuICB9LFxyXG4gIGNvbW1vbnM6IHtcclxuICAgIHNsaWRlclRleHQ6XHJcbiAgICAgIFwiUGxhdGZvcm1zIGZvciBsYXJnZS1zY2FsZSA8YnIvPklvVCBzZXJ2aWNlcyAmIGRlZXAgZGV2aWNlIG1hbmFnZW1lbnQ8YnIvPlwiLFxyXG4gICAgcGx1czA6IFwiY29ubmVjdGl2aXR5IG1hbmFnZW1lbnRcIixcclxuICAgIHBsdXMxOiBcInNlcnZpY2Ugb3JjaGVzdHJhdGlvblwiLFxyXG4gICAgcGx1czI6IFwiYXJ0aWZpY2lhbCBpbnRlbGxpZ2VuY2VcIixcclxuICAgIHBsdXMzOiBcImJpZyBkYXRhXCIsXHJcbiAgICBwbHVzNDogXCJ2ZXJ0aWNhbCBzb2x1dGlvbnNcIixcclxuICAgIGJyYW5kMVRleHQ6IFwiRW50ZXJwcmlzZSBNb2JpbGl0eSBNYW5hZ2VtZW50IGFzIGEgU2VydmljZVwiLFxyXG4gICAgYnJhbmQyVGV4dDogXCJGdWxsIFN0YWNrIElvVCBQbGF0Zm9ybSB3aXRoIEVkZ2UgQ29tcHV0aW5nXCIsXHJcbiAgICBjb3B5cmlnaHQ6IFwiwqkgMjAyMSBBUkRJQyBJbmMuXCIsXHJcbiAgICByZWZlcmVuY2VzOiBcIlJlZmVyZW5jZXNcIixcclxuICAgIHN1Y2Nlc3NTdG9yaWVzOiBcIlN1Y2Nlc3MgU3Rvcmllc1wiLFxyXG4gICAgc29sdXRpb25zOiBcIlNvbHV0aW9uc1wiLFxyXG4gIH0sXHJcbiAgcGFnZToge1xyXG4gICAgXzQwNDoge1xyXG4gICAgICB0aXRsZTogXCI0MDQgfCBQYWdlIG5vdCBmb3VuZFwiLFxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgdGl0bGU6IFwiQXJkxLFjXCIsXHJcbiAgICAgIHNsdWc6IFwiL1wiLFxyXG4gICAgfSxcclxuICAgIGFib3V0OiB7XHJcbiAgICAgIHRpdGxlOiBcIkFib3V0XCIsXHJcbiAgICAgIHNsdWc6IFwiL2Fib3V0XCIsXHJcbiAgICB9LFxyXG4gICAgc29sdXRpb25zOiB7XHJcbiAgICAgIHRpdGxlOiBcIlNvbHV0aW9uc1wiLFxyXG4gICAgICBzbHVnOiBcIi9zb2x1dGlvbnNcIixcclxuICAgIH0sXHJcbiAgICB0ZWNobm9sb2dpZXM6IHtcclxuICAgICAgdGl0bGU6IFwiVGVjaG5vbG9naWVzXCIsXHJcbiAgICAgIHNsdWc6IFwiL3RlY2hub2xvZ2llc1wiLFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3Q6IHtcclxuICAgICAgdGl0bGU6IFwiQ29udGFjdFwiLFxyXG4gICAgICBzbHVnOiBcIi9jb250YWN0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuICBidXR0b246IHtcclxuICAgIGdvVG9NYWluUGFnZTogXCJBbmEgc2F5ZmF5YSBnaXRcIixcclxuICAgIHJlYWRNb3JlOiBcImRldmFtxLFuxLEgb2t1IOKGklwiLFxyXG4gICAgdmlzaXRXZWJTaXRlOiBcIldlYiBzYXlmYXPEsW7EsSB6aXlhcmV0IGV0XCIsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgXzQwNDogXCI0MDRcIixcclxuICAgIGluZGV4OiBcIkFyZMSxY1wiLFxyXG4gICAgYWJvdXQ6IFwiSGFra8SxbmRhXCIsXHJcbiAgICB0ZWNobm9sb2dpZXM6IFwiVGVrbm9sb2ppbGVyXCIsXHJcbiAgICBjb250YWN0OiBcIsSwbGV0acWfaW1cIixcclxuICB9LFxyXG4gIG1ldGE6IHtcclxuICAgIF80MDQ6IFwiNDA0XCIsXHJcbiAgICBpbmRleDogXCJBcmTEsWNcIixcclxuICAgIGFib3V0OiBcIkhha2vEsW5kYVwiLFxyXG4gICAgdGVjaG5vbG9naWVzOiBcIlRla25vbG9qaWxlclwiLFxyXG4gICAgY29udGFjdDogXCLEsGxldGnFn2ltXCIsXHJcbiAgfSxcclxuICBjb21tb25zOiB7XHJcbiAgICBzbGlkZXJUZXh0OlxyXG4gICAgICBcIkLDvHnDvGsgw7Zsw6dla2xpIElvVCBoaXptZXRsZXJpPGJyLz4mIGRlcmluIGNpaGF6IHnDtm5ldGltaSBpw6dpbiBwbGF0Zm9ybWxhcjxici8+XCIsXHJcbiAgICBwbHVzMDogXCJiYcSfbGFudMSxIHnDtm5ldGltaVwiLFxyXG4gICAgcGx1czE6IFwiaGl6bWV0IGTDvHplbmxlbWVzaVwiLFxyXG4gICAgcGx1czI6IFwieWFwYXkgemVrYVwiLFxyXG4gICAgcGx1czM6IFwiYsO8ecO8ayB2ZXJpXCIsXHJcbiAgICBwbHVzNDogXCJkaWtleSDDp8O2esO8bWxlclwiLFxyXG4gICAgYnJhbmQxVGV4dDogXCJIaXptZXQgT2xhcmFrIEt1cnVtc2FsIE1vYmlsaXRlIFnDtm5ldGltaVwiLFxyXG4gICAgYnJhbmQyVGV4dDogXCJFZGdlIENvbXB1dGluZyBpbGUgVGFtIFnEscSfxLFuIElvVCBQbGF0Zm9ybXVcIixcclxuICAgIGNvcHlyaWdodDogXCLCqSAyMDIxIEFSRElDIEluYy5cIixcclxuICAgIHJlZmVyZW5jZXM6IFwiUmVmZXJhbnNsYXJcIixcclxuICAgIHN1Y2Nlc3NTdG9yaWVzOiBcIkJhxZ9hcsSxIEhpa2F5ZWxlcmlcIixcclxuICAgIHNvbHV0aW9uczogXCLDh8O2esO8bWxlclwiLFxyXG4gIH0sXHJcbiAgcGFnZToge1xyXG4gICAgXzQwNDoge1xyXG4gICAgICB0aXRsZTogXCI0MDQgfCBTYXlmYSBCdWx1bmFtYWTEsVwiLFxyXG4gICAgfSxcclxuICAgIGhvbWU6IHtcclxuICAgICAgdGl0bGU6IFwiQXJkxLFjXCIsXHJcbiAgICAgIHNsdWc6IFwiL1wiLFxyXG4gICAgfSxcclxuICAgIGFib3V0OiB7XHJcbiAgICAgIHRpdGxlOiBcIkhha2vEsW5kYVwiLFxyXG4gICAgICBzbHVnOiBcIi9hYm91dFwiLFxyXG4gICAgfSxcclxuICAgIHNvbHV0aW9uczoge1xyXG4gICAgICB0aXRsZTogXCLDh8O2esO8bWxlclwiLFxyXG4gICAgICBzbHVnOiBcIi9zb2x1dGlvbnNcIixcclxuICAgIH0sXHJcbiAgICB0ZWNobm9sb2dpZXM6IHtcclxuICAgICAgdGl0bGU6IFwiVGVrbm9sb2ppbGVyXCIsXHJcbiAgICAgIHNsdWc6IFwiL3RlY2hub2xvZ2llc1wiLFxyXG4gICAgfSxcclxuICAgIGNvbnRhY3Q6IHtcclxuICAgICAgdGl0bGU6IFwixLBsZXRpxZ9pbVwiLFxyXG4gICAgICBzbHVnOiBcIi9jb250YWN0XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9fNDA0Lm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB0ciBmcm9tIFwiLi4vbG9jYWxlcy90clwiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uL2xvY2FsZXMvZW5cIjtcclxuXHJcbmNvbnN0IF80MDQgPSAoZGF0YSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbG9jYWxlIH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgdCA9IGxvY2FsZSA9PT0gXCJlblwiID8gZW4gOiB0cjtcclxuXHJcbiAgY29uc3QgcmVkaXJlY3RJbmRleFBhZ2UgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9hYm91dFwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImNvbnRhaW5lclwiXX0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT57dC5wYWdlLl80MDQudGl0bGV9PC90aXRsZT5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aDI+e3QucGFnZS5fNDA0LnRpdGxlfTwvaDI+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8c21hbGxcclxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcInNtYWxsLWJ1dHRvblwiXX1cclxuICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWRpcmVjdEluZGV4UGFnZSgpfVxyXG4gICAgICA+XHJcbiAgICAgICAge3QuYnV0dG9uLmdvVG9NYWluUGFnZX1cclxuICAgICAgPC9zbWFsbD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBfNDA0O1xyXG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJfNDA0X2NvbnRhaW5lcl9fMTBHb2dcIixcblx0XCJzbWFsbC1idXR0b25cIjogXCJfNDA0X3NtYWxsLWJ1dHRvbl9fMnhwcUxcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==