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
  var t = locale === "en" ? _locales_en__WEBPACK_IMPORTED_MODULE_5__.default : _locales_tr__WEBPACK_IMPORTED_MODULE_4__.default;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      brandsData = _useState[0],
      setBrandsData = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    fetch("".concat("http://localhost:3000", "/api/").concat(router.locale, "/footer")).then(function (response) {
      return response.json();
    }).then(function (data) {
      setBrandsData(data);
      console.log(brandsData);
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brand),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/technologies/modiverse",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brandLogo),
            src: "assets/logo-modiverse.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brandName1),
            src: "assets/modiverse.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brandText),
            children: t.commons.brand1Text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brand),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/technologies/iot-ignite",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brandLogo),
            src: "assets/logo-iot-ignite.jpg"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brandName2),
            src: "assets/iot-ignite.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: (_styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default().brandText),
            children: t.commons.brand2Text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, _this);
};

_s(Brands, "WEuR+LxGr+ws9M1CeVCUGrMhUbc=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icmFuZHMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJhbmRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidCIsImVuIiwidHIiLCJ1c2VTdGF0ZSIsImJyYW5kc0RhdGEiLCJzZXRCcmFuZHNEYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwiY29tbW9ucyIsImJyYW5kMVRleHQiLCJicmFuZDJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEbUIsTUFFWEMsTUFGVyxHQUVBRixNQUZBLENBRVhFLE1BRlc7QUFHbkIsTUFBTUMsQ0FBQyxHQUFHRCxNQUFNLEtBQUssSUFBWCxHQUFrQkUsZ0RBQWxCLEdBQXVCQyxnREFBakM7O0FBSG1CLGtCQUlpQkMsK0NBQVEsQ0FBQyxFQUFELENBSnpCO0FBQUEsTUFJWkMsVUFKWTtBQUFBLE1BSUFDLGFBSkE7O0FBS25CQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxXQUFJQyx1QkFBSixrQkFBNEJYLE1BQU0sQ0FBQ0UsTUFBbkMsYUFBTCxDQUNHVSxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RQLG1CQUFhLENBQUNPLElBQUQsQ0FBYjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWVYsVUFBWjtBQUNELEtBTEg7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVXLDRFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSx3RUFBaEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBQyx5QkFBWDtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFFQSw0RUFBaEI7QUFBa0MsZUFBRyxFQUFDO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRTtBQUFLLHFCQUFTLEVBQUVBLDZFQUFoQjtBQUFtQyxlQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQUcscUJBQVMsRUFBRUEsNEVBQWQ7QUFBQSxzQkFBaUNmLENBQUMsQ0FBQ2dCLE9BQUYsQ0FBVUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBSyxlQUFTLEVBQUVGLHdFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLDBCQUFYO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQUVBLDRFQURiO0FBRUUsZUFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRUEsNkVBQWhCO0FBQW1DLGVBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUU7QUFBRyxxQkFBUyxFQUFFQSw0RUFBZDtBQUFBLHNCQUFpQ2YsQ0FBQyxDQUFDZ0IsT0FBRixDQUFVRTtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUF5QkQsQ0F2Q0Q7O0dBQU10QixNO1VBQ1dFLGtEOzs7S0FEWEYsTTtBQXlDTiwrREFBZUEsTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmJiZTNkMjI2ZTY2NDcwZDljM2Y2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvQnJhbmRzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB0ciBmcm9tIFwiLi4vLi4vbG9jYWxlcy90clwiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xvY2FsZXMvZW5cIjtcclxuXHJcbmNvbnN0IEJyYW5kcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gcm91dGVyO1xyXG4gIGNvbnN0IHQgPSBsb2NhbGUgPT09IFwiZW5cIiA/IGVuIDogdHI7XHJcbiAgY29uc3QgW2JyYW5kc0RhdGEsIHNldEJyYW5kc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChgJHtwcm9jZXNzLmVudi5IT1NUfS9hcGkvJHtyb3V0ZXIubG9jYWxlfS9mb290ZXJgKVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBzZXRCcmFuZHNEYXRhKGRhdGEpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGJyYW5kc0RhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmR9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdGVjaG5vbG9naWVzL21vZGl2ZXJzZVwiPlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmRMb2dvfSBzcmM9XCJhc3NldHMvbG9nby1tb2RpdmVyc2UuanBnXCIgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5icmFuZE5hbWUxfSBzcmM9XCJhc3NldHMvbW9kaXZlcnNlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kVGV4dH0+e3QuY29tbW9ucy5icmFuZDFUZXh0fTwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT5cclxuICAgICAgICA8TGluayBocmVmPVwiL3RlY2hub2xvZ2llcy9pb3QtaWduaXRlXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kTG9nb31cclxuICAgICAgICAgICAgICBzcmM9XCJhc3NldHMvbG9nby1pb3QtaWduaXRlLmpwZ1wiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmROYW1lMn0gc3JjPVwiYXNzZXRzL2lvdC1pZ25pdGUucG5nXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmRUZXh0fT57dC5jb21tb25zLmJyYW5kMlRleHR9PC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnJhbmRzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9