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
              console.log(data);
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
                                lineNumber: 31,
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
                                lineNumber: 35,
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
                                lineNumber: 36,
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
                          lineNumber: 30,
                          columnNumber: 11,
                        },
                        _this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 29,
                      columnNumber: 9,
                    },
                    _this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 28,
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
                                lineNumber: 43,
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
                                lineNumber: 47,
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
                                lineNumber: 48,
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
                          lineNumber: 42,
                          columnNumber: 11,
                        },
                        _this
                      ),
                    },
                    void 0,
                    false,
                    {
                      fileName: _jsxFileName,
                      lineNumber: 41,
                      columnNumber: 9,
                    },
                    _this
                  ),
                },
                void 0,
                false,
                {
                  fileName: _jsxFileName,
                  lineNumber: 40,
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
            lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9icmFuZHMvaW5kZXguanMiXSwibmFtZXMiOlsiQnJhbmRzIiwicm91dGVyIiwidXNlUm91dGVyIiwibG9jYWxlIiwidCIsImVuIiwidHIiLCJ1c2VTdGF0ZSIsImJyYW5kc0RhdGEiLCJzZXRCcmFuZHNEYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJwcm9jZXNzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwic3R5bGVzIiwibGVmdCIsImxpbmsiLCJsb2dvIiwic3VtbWFyeSIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0Msc0RBQVMsRUFBeEI7QUFEbUIsTUFFWEMsTUFGVyxHQUVBRixNQUZBLENBRVhFLE1BRlc7QUFHbkIsTUFBTUMsQ0FBQyxHQUFHRCxNQUFNLEtBQUssSUFBWCxHQUFrQkUsZ0RBQWxCLEdBQXVCQyxnREFBakM7O0FBSG1CLGtCQUtpQkMsK0NBQVEsQ0FBQyxFQUFELENBTHpCO0FBQUEsTUFLWkMsVUFMWTtBQUFBLE1BS0FDLGFBTEE7O0FBT25CQyxrREFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxXQUFJQyx1QkFBSixrQkFBNEJYLE1BQU0sQ0FBQ0UsTUFBbkMsYUFBTCxDQUNHVSxJQURILENBQ1EsVUFBQ0MsUUFBRDtBQUFBLGFBQWNBLFFBQVEsQ0FBQ0MsSUFBVCxFQUFkO0FBQUEsS0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0csSUFBRCxFQUFVO0FBQ2RQLG1CQUFhLENBQUNPLElBQUQsQ0FBYjtBQUNBQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNELEtBTEg7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUO0FBU0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVHLDRFQUFoQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQSx3RUFBaEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRVgsVUFBVSxDQUFDWSxJQUFYLENBQWdCQyxJQUE1QjtBQUFBLCtCQUNFO0FBQUEsa0NBQ0U7QUFDRSxxQkFBUyxFQUFFRiw0RUFEYjtBQUVFLGVBQUcsbUJBQVlYLFVBQVUsQ0FBQ1ksSUFBWCxDQUFnQkUsSUFBNUI7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBS0U7QUFBSyxxQkFBUyxFQUFFSCw2RUFBaEI7QUFBbUMsZUFBRyxFQUFDO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFNRTtBQUFHLHFCQUFTLEVBQUVBLDRFQUFkO0FBQUEsc0JBQWlDWCxVQUFVLENBQUNZLElBQVgsQ0FBZ0JHO0FBQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWFFO0FBQUssZUFBUyxFQUFFSix3RUFBaEI7QUFBQSw2QkFDRSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRVgsVUFBVSxDQUFDZ0IsS0FBWCxDQUFpQkgsSUFBN0I7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBRUYsNEVBRGI7QUFFRSxlQUFHLG1CQUFZWCxVQUFVLENBQUNnQixLQUFYLENBQWlCRixJQUE3QjtBQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLHFCQUFTLEVBQUVILDZFQUFoQjtBQUFtQyxlQUFHLEVBQUM7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRixlQU1FO0FBQUcscUJBQVMsRUFBRUEsNEVBQWQ7QUFBQSxzQkFBaUNYLFVBQVUsQ0FBQ2dCLEtBQVgsQ0FBaUJEO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTRCRCxDQTVDRDs7R0FBTXZCLE07VUFDV0Usa0Q7OztLQURYRixNO0FBOENOLCtEQUFlQSxNQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMDAyOTE2NjhjYzI0ZjRiZjNlNjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9CcmFuZHMubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IHRyIGZyb20gXCIuLi8uLi9sb2NhbGVzL3RyXCI7XHJcbmltcG9ydCBlbiBmcm9tIFwiLi4vLi4vbG9jYWxlcy9lblwiO1xyXG5cclxuY29uc3QgQnJhbmRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbG9jYWxlIH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgdCA9IGxvY2FsZSA9PT0gXCJlblwiID8gZW4gOiB0cjtcclxuXHJcbiAgY29uc3QgW2JyYW5kc0RhdGEsIHNldEJyYW5kc0RhdGFdID0gdXNlU3RhdGUoe30pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuSE9TVH0vYXBpLyR7cm91dGVyLmxvY2FsZX0vYnJhbmRzYClcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgc2V0QnJhbmRzRGF0YShkYXRhKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT5cclxuICAgICAgICA8TGluayBocmVmPXticmFuZHNEYXRhLmxlZnQubGlua30+XHJcbiAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kTG9nb31cclxuICAgICAgICAgICAgICBzcmM9e2Bhc3NldHMvJHticmFuZHNEYXRhLmxlZnQubG9nb30uanBnYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e3N0eWxlcy5icmFuZE5hbWUxfSBzcmM9XCJhc3NldHMvbW9kaXZlcnNlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kVGV4dH0+e2JyYW5kc0RhdGEubGVmdC5zdW1tYXJ5fTwvcD5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kfT5cclxuICAgICAgICA8TGluayBocmVmPXticmFuZHNEYXRhLnJpZ2h0Lmxpbmt9PlxyXG4gICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5icmFuZExvZ299XHJcbiAgICAgICAgICAgICAgc3JjPXtgYXNzZXRzLyR7YnJhbmRzRGF0YS5yaWdodC5sb2dvfS5qcGdgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kTmFtZTJ9IHNyYz1cImFzc2V0cy9pb3QtaWduaXRlLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJyYW5kVGV4dH0+e2JyYW5kc0RhdGEucmlnaHQuc3VtbWFyeX08L3A+XHJcbiAgICAgICAgICA8L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCcmFuZHM7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
