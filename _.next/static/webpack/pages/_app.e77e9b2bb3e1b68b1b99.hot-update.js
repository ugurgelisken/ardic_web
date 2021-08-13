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
        var t =
          locale === "en"
            ? _locales_en__WEBPACK_IMPORTED_MODULE_5__.default
            : _locales_tr__WEBPACK_IMPORTED_MODULE_4__.default;

        var _useState = (0, react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
          socialMediasData = _useState[0],
          setSocialMediasData = _useState[1];

        (0, react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
          fetch(
            ""
              .concat("http://localhost:3000", "/api/")
              .concat(router.locale, "/footer")
          )
            .then(function (response) {
              return response.json();
            })
            .then(function (data) {
              setCopyRightData(data.copyright);
              setSocialMediasData(data.socialMedias);
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
                      href: "/technologies/modiverse",
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
                                src: "/assets/logo-modiverse.jpg",
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
                                lineNumber: 30,
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
                                children: t.commons.brand1Text,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 31,
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
                      href: "/technologies/iot-ignite",
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
                                src: "/assets/logo-iot-ignite.jpg",
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 38,
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
                                lineNumber: 42,
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
                                children: t.commons.brand2Text,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 43,
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
                          lineNumber: 37,
                          columnNumber: 11,
                        },
                        _this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 36,
                      columnNumber: 9,
                    },
                    _this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 35,
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

      _s(Brands, "xSE+Jcdqvjyp8Q6q/0OVbkrDRXQ=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icmFuZHMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJhbmRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidCIsImVuIiwidHIiLCJ1c2VTdGF0ZSIsInNvY2lhbE1lZGlhc0RhdGEiLCJzZXRTb2NpYWxNZWRpYXNEYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRDb3B5UmlnaHREYXRhIiwiY29weXJpZ2h0Iiwic29jaWFsTWVkaWFzIiwic3R5bGVzIiwiY29tbW9ucyIsImJyYW5kMVRleHQiLCJicmFuZDJUZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEbUIsTUFFWEMsTUFGVyxHQUVBRixNQUZBLENBRVhFLE1BRlc7QUFHbkIsTUFBTUMsQ0FBQyxHQUFHRCxNQUFNLEtBQUssSUFBWCxHQUFrQkUsZ0RBQWxCLEdBQXVCQyxnREFBakM7O0FBSG1CLGtCQUk2QkMsK0NBQVEsQ0FBQyxFQUFELENBSnJDO0FBQUEsTUFJWkMsZ0JBSlk7QUFBQSxNQUlNQyxtQkFKTjs7QUFLbkJDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLFdBQUlDLHVCQUFKLGtCQUE0QlgsTUFBTSxDQUFDRSxNQUFuQyxhQUFMLENBQ0dVLElBREgsQ0FDUSxVQUFDQyxRQUFEO0FBQUEsYUFBY0EsUUFBUSxDQUFDQyxJQUFULEVBQWQ7QUFBQSxLQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDRyxJQUFELEVBQVU7QUFDZEMsc0JBQWdCLENBQUNELElBQUksQ0FBQ0UsU0FBTixDQUFoQjtBQUNBVCx5QkFBbUIsQ0FBQ08sSUFBSSxDQUFDRyxZQUFOLENBQW5CO0FBQ0QsS0FMSDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7QUFTQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUMsNEVBQWhCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLHdFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLHlCQUFYO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLDRFQUFoQjtBQUFrQyxlQUFHLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUsscUJBQVMsRUFBRUEsNkVBQWhCO0FBQW1DLGVBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGLGVBR0U7QUFBRyxxQkFBUyxFQUFFQSw0RUFBZDtBQUFBLHNCQUFpQ2hCLENBQUMsQ0FBQ2lCLE9BQUYsQ0FBVUM7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBVUU7QUFBSyxlQUFTLEVBQUVGLHdFQUFoQjtBQUFBLDZCQUNFLDhEQUFDLGtEQUFEO0FBQU0sWUFBSSxFQUFDLDBCQUFYO0FBQUEsK0JBQ0U7QUFBQSxrQ0FDRTtBQUNFLHFCQUFTLEVBQUVBLDRFQURiO0FBRUUsZUFBRyxFQUFDO0FBRk47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUtFO0FBQUsscUJBQVMsRUFBRUEsNkVBQWhCO0FBQW1DLGVBQUcsRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBTUU7QUFBRyxxQkFBUyxFQUFFQSw0RUFBZDtBQUFBLHNCQUFpQ2hCLENBQUMsQ0FBQ2lCLE9BQUYsQ0FBVUU7QUFBM0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBeUJELENBdkNEOztHQUFNdkIsTTtVQUNXRSxrRDs7O0tBRFhGLE07QUF5Q04sK0RBQWVBLE1BQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5lNzdlOWIyYmIzZTFiNjhiMWI5OS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0JyYW5kcy5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgdHIgZnJvbSBcIi4uLy4uL2xvY2FsZXMvdHJcIjtcclxuaW1wb3J0IGVuIGZyb20gXCIuLi8uLi9sb2NhbGVzL2VuXCI7XHJcblxyXG5jb25zdCBCcmFuZHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlcjtcclxuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImVuXCIgPyBlbiA6IHRyO1xyXG4gIGNvbnN0IFtzb2NpYWxNZWRpYXNEYXRhLCBzZXRTb2NpYWxNZWRpYXNEYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuSE9TVH0vYXBpLyR7cm91dGVyLmxvY2FsZX0vZm9vdGVyYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0Q29weVJpZ2h0RGF0YShkYXRhLmNvcHlyaWdodCk7XHJcbiAgICAgICAgc2V0U29jaWFsTWVkaWFzRGF0YShkYXRhLnNvY2lhbE1lZGlhcyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5icmFuZH0+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi90ZWNobm9sb2dpZXMvbW9kaXZlcnNlXCI+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5icmFuZExvZ299IHNyYz1cImFzc2V0cy9sb2dvLW1vZGl2ZXJzZS5qcGdcIiAvPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kTmFtZTF9IHNyYz1cImFzc2V0cy9tb2RpdmVyc2UucG5nXCIgLz5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmRUZXh0fT57dC5jb21tb25zLmJyYW5kMVRleHR9PC9wPlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmR9PlxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdGVjaG5vbG9naWVzL2lvdC1pZ25pdGVcIj5cclxuICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYnJhbmRMb2dvfVxyXG4gICAgICAgICAgICAgIHNyYz1cImFzc2V0cy9sb2dvLWlvdC1pZ25pdGUuanBnXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5icmFuZE5hbWUyfSBzcmM9XCJhc3NldHMvaW90LWlnbml0ZS5wbmdcIiAvPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5icmFuZFRleHR9Pnt0LmNvbW1vbnMuYnJhbmQyVGV4dH08L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmFuZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
