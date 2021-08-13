self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/brands/index.js":
/*!************************************!*\
  !*** ./components/brands/index.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Brands.module.css */ "./styles/Brands.module.css");
/* harmony import */ var _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../locales/tr */ "./locales/tr/index.js");
/* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../locales/en */ "./locales/en/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\ardic_web\\components\\brands\\index.js",
    _this = undefined,
    _s = $RefreshSig$();








var Brands = function Brands() {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
  var locale = router.locale;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
      brandsData = _useState[0],
      setBrandsData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    fetch("".concat("http://localhost:3000", "/api/").concat(router.locale, "/brands")).then(function (response) {
      return response.json();
    }).then(function (data) {
      setBrandsData(data);
      console.log(data.left);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().container)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 10
  }, _this);
};

_s(Brands, "fSps+R4Ca9NvqdWZAy92genEEc0=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = Brands;
/* harmony default export */ __webpack_exports__["default"] = (Brands);

var _c;

$RefreshReg$(_c, "Brands");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icmFuZHMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJhbmRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidXNlU3RhdGUiLCJicmFuZHNEYXRhIiwic2V0QnJhbmRzRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImxlZnQiLCJzdHlsZXMiLCJjb250YWluZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLEdBQU07QUFBQTs7QUFDbkIsTUFBTUMsTUFBTSxHQUFHQyxzREFBUyxFQUF4QjtBQURtQixNQUVYQyxNQUZXLEdBRUFGLE1BRkEsQ0FFWEUsTUFGVzs7QUFBQSxrQkFJaUJDLCtDQUFRLENBQUMsRUFBRCxDQUp6QjtBQUFBLE1BSVpDLFVBSlk7QUFBQSxNQUlBQyxhQUpBOztBQU1uQkMsa0RBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssV0FBSUMsdUJBQUosa0JBQTRCUixNQUFNLENBQUNFLE1BQW5DLGFBQUwsQ0FDR08sSUFESCxDQUNRLFVBQUNDLFFBQUQ7QUFBQSxhQUFjQSxRQUFRLENBQUNDLElBQVQsRUFBZDtBQUFBLEtBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNHLElBQUQsRUFBVTtBQUNkUCxtQkFBYSxDQUFDTyxJQUFELENBQWI7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ0csSUFBakI7QUFDRCxLQUxIO0FBTUQsR0FQUSxFQU9OLEVBUE0sQ0FBVDtBQVNBLHNCQUFPO0FBQUssYUFBUyxFQUFFQyw0RUFBZ0JDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNELENBaEJEOztHQUFNbEIsTTtVQUNXRSxrRDs7O0tBRFhGLE07QUFrQk4sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZDQ1ZDA3NzZhOWE4Y2JkODY4MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0JyYW5kcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgdHIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvdHJcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9sb2NhbGVzL2VuXCI7XHJcblxyXG5jb25zdCBCcmFuZHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3QgW2JyYW5kc0RhdGEsIHNldEJyYW5kc0RhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuSE9TVH0vYXBpLyR7cm91dGVyLmxvY2FsZX0vYnJhbmRzYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0QnJhbmRzRGF0YShkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmxlZnQpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9