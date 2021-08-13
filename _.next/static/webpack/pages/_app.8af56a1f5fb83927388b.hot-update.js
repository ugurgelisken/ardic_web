self["webpackHotUpdate_N_E"]("pages/_app", {
  /***/ "./components/brands/index.js":
    /*!************************************!*\
  !*** ./components/brands/index.js ***!
  \************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__(
          /*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js"
        );
      /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
        /*#__PURE__*/ __webpack_require__.n(
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
        );
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
        __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
      /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_router__WEBPACK_IMPORTED_MODULE_1__
        );
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ =
        __webpack_require__(/*! react */ "./node_modules/react/index.js");
      /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default =
        /*#__PURE__*/ __webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ =
        __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
      /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default =
        /*#__PURE__*/ __webpack_require__.n(
          next_link__WEBPACK_IMPORTED_MODULE_3__
        );
      /* harmony import */ var _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6__ =
        __webpack_require__(
          /*! ../../styles/Brands.module.css */ "./styles/Brands.module.css"
        );
      /* harmony import */ var _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default =
        /*#__PURE__*/ __webpack_require__.n(
          _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6__
        );
      /* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_4__ =
        __webpack_require__(/*! ../../locales/tr */ "./locales/tr/index.js");
      /* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_5__ =
        __webpack_require__(/*! ../../locales/en */ "./locales/en/index.js");
      /* module decorator */ module = __webpack_require__.hmd(module);

      var _jsxFileName = "D:\\ardic_web\\components\\brands\\index.js",
        _this = undefined,
        _s = $RefreshSig$();

      var Brands = function Brands() {
        _s();

        var router = (0, next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
        var locale = router.locale;

        var _useState = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),
          brandsData = _useState[0],
          setBrandsData = _useState[1];

        (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
          fetch(
            ""
              .concat("http://localhost:3000", "/api/")
              .concat(router.locale, "/brands")
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              setBrandsData(data);
            });
        }, []);
        return /*#__PURE__*/ (0,
        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
          "div",
          {
            className:
              _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                .container,
            children: [
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                "div",
                {
                  className:
                    _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                      .brand,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                    next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                    {
                      href: brandsData.left.link,
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "a",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "img",
                              {
                                className:
                                  _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                                    .brandLogo,
                                src: "/assets/".concat(
                                  brandsData.left.logo,
                                  ".jpg"
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 29,
                                columnNumber: 13,
                              },
                              _this
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "img",
                              {
                                className:
                                  _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                                    .brandName1,
                                src: "/assets/modiverse.png",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 33,
                                columnNumber: 13,
                              },
                              _this
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "p",
                              {
                                className:
                                  _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                                    .brandText,
                                children: brandsData.left.summary,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 34,
                                columnNumber: 13,
                              },
                              _this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 28,
                          columnNumber: 11,
                        },
                        _this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 27,
                      columnNumber: 9,
                    },
                    _this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 26,
                  columnNumber: 7,
                },
                _this
              ),
              /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                "div",
                {
                  className:
                    _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                      .brand,
                  children: /*#__PURE__*/ (0,
                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                    next_link__WEBPACK_IMPORTED_MODULE_3___default(),
                    {
                      href: brandsData.right.link,
                      children: /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "a",
                        {
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "img",
                              {
                                className:
                                  _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                                    .brandLogo,
                                src: "/assets/".concat(
                                  brandsData.right.logo,
                                  ".jpg"
                                ),
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 41,
                                columnNumber: 13,
                              },
                              _this
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "img",
                              {
                                className:
                                  _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                                    .brandName2,
                                src: "/assets/iot-ignite.png",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 45,
                                columnNumber: 13,
                              },
                              _this
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "p",
                              {
                                className:
                                  _styles_Brands_module_css__WEBPACK_IMPORTED_MODULE_6___default()
                                    .brandText,
                                children: brandsData.right.summary,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 46,
                                columnNumber: 13,
                              },
                              _this
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 40,
                          columnNumber: 11,
                        },
                        _this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 39,
                      columnNumber: 9,
                    },
                    _this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 7,
                },
                _this
              ),
            ],
          },
          void 0,
          true,
          {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 5,
          },
          _this
        );
      };

      _s(Brands, "fSps+R4Ca9NvqdWZAy92genEEc0=", false, function () {
        return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
      });

      _c = Brands;
      /* harmony default export */ __webpack_exports__["default"] = Brands;

      var _c;

      $RefreshReg$(_c, "Brands");

      var _a, _b;
      // Legacy CSS implementations will `eval` browser code in a Node.js context
      // to extract CSS. For backwards compatibility, we need to check we're in a
      // browser context before continuing.
      if (
        typeof self !== "undefined" &&
        // AMP / No-JS mode does not inject these helpers:
        "$RefreshHelpers$" in self
      ) {
        var currentExports = module.__proto__.exports;
        var prevExports =
          (_b =
            (_a = module.hot.data) === null || _a === void 0
              ? void 0
              : _a.prevExports) !== null && _b !== void 0
            ? _b
            : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(
          currentExports,
          module.id
        );
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
            if (
              self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                prevExports,
                currentExports
              )
            ) {
              module.hot.invalidate();
            } else {
              self.$RefreshHelpers$.scheduleUpdate();
            }
          }
        } else {
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

      /***/
    },
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icmFuZHMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJhbmRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidXNlU3RhdGUiLCJicmFuZHNEYXRhIiwic2V0QnJhbmRzRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwic3R5bGVzIiwibGVmdCIsImxpbmsiLCJsb2dvIiwic3VtbWFyeSIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEbUIsTUFFWEMsTUFGVyxHQUVBRixNQUZBLENBRVhFLE1BRlc7O0FBQUEsa0JBSWlCQywrQ0FBUSxDQUFDLEVBQUQsQ0FKekI7QUFBQSxNQUlaQyxVQUpZO0FBQUEsTUFJQUMsYUFKQTs7QUFNbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLFdBQUlDLHVCQUFKLGtCQUE0QlIsTUFBTSxDQUFDRSxNQUFuQyxhQUFMLENBQ0dPLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZFAsbUJBQWEsQ0FBQ08sSUFBRCxDQUFiO0FBQ0QsS0FKSDtBQUtELEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHdFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFVCxVQUFVLENBQUNVLElBQVgsQ0FBZ0JDLElBQTVCO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQUVGLDRFQURiO0FBRUUsZUFBRyxtQkFBWVQsVUFBVSxDQUFDVSxJQUFYLENBQWdCRSxJQUE1QjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUVILDZFQUFoQjtBQUFtQyxlQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQUcscUJBQVMsRUFBRUEsNEVBQWQ7QUFBQSxzQkFBaUNULFVBQVUsQ0FBQ1UsSUFBWCxDQUFnQkc7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBYUU7QUFBSyxlQUFTLEVBQUVKLHdFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFFVCxVQUFVLENBQUNjLEtBQVgsQ0FBaUJILElBQTdCO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQUVGLDRFQURiO0FBRUUsZUFBRyxtQkFBWVQsVUFBVSxDQUFDYyxLQUFYLENBQWlCRixJQUE3QjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUVILDZFQUFoQjtBQUFtQyxlQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQUcscUJBQVMsRUFBRUEsNEVBQWQ7QUFBQSxzQkFBaUNULFVBQVUsQ0FBQ2MsS0FBWCxDQUFpQkQ7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBNEJELENBMUNEOztHQUFNbEIsTTtVQUNXRSxrRDs7O0tBRFhGLE07QUE0Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44YWY1NmExZjVmYjgzOTI3Mzg4Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0JyYW5kcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgdHIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvdHJcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9sb2NhbGVzL2VuXCI7XHJcblxyXG5jb25zdCBCcmFuZHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlcjtcclxuXHJcbiAgY29uc3QgW2JyYW5kc0RhdGEsIHNldEJyYW5kc0RhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuSE9TVH0vYXBpLyR7cm91dGVyLmxvY2FsZX0vYnJhbmRzYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0QnJhbmRzRGF0YShkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT5cclxuICAgICAgICA8TGluayBocmVmPXticmFuZHNEYXRhLmxlZnQubGlua30+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kTG9nb31cclxuICAgICAgICAgICAgICBzcmM9e2Bhc3NldHMvJHticmFuZHNEYXRhLmxlZnQubG9nb30uanBnYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5icmFuZE5hbWUxfSBzcmM9XCJhc3NldHMvbW9kaXZlcnNlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kVGV4dH0+e2JyYW5kc0RhdGEubGVmdC5zdW1tYXJ5fTwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT5cclxuICAgICAgICA8TGluayBocmVmPXticmFuZHNEYXRhLnJpZ2h0Lmxpbmt9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZExvZ299XHJcbiAgICAgICAgICAgICAgc3JjPXtgYXNzZXRzLyR7YnJhbmRzRGF0YS5yaWdodC5sb2dvfS5qcGdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kTmFtZTJ9IHNyYz1cImFzc2V0cy9pb3QtaWduaXRlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kVGV4dH0+e2JyYW5kc0RhdGEucmlnaHQuc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmFuZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
