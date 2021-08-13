(function () {
  var exports = {};
  exports.id = "pages/index";
  exports.ids = ["pages/index"];
  exports.modules = {
    /***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
      /***/ function (module) {
        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        }

        module.exports = _interopRequireDefault;

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
      /*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        var _typeof = __webpack_require__(
          /*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js"
        );

        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();

          _getRequireWildcardCache = function _getRequireWildcardCache() {
            return cache;
          };

          return cache;
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }

          if (
            obj === null ||
            (_typeof(obj) !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj["default"] = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        }

        module.exports = _interopRequireWildcard;

        /***/
      },

    /***/ "./node_modules/@babel/runtime/helpers/typeof.js":
      /*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
      /***/ function (module) {
        function _typeof(obj) {
          "@babel/helpers - typeof";

          if (
            typeof Symbol === "function" &&
            typeof Symbol.iterator === "symbol"
          ) {
            module.exports = _typeof = function _typeof(obj) {
              return typeof obj;
            };
          } else {
            module.exports = _typeof = function _typeof(obj) {
              return obj &&
                typeof Symbol === "function" &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? "symbol"
                : typeof obj;
            };
          }

          return _typeof(obj);
        }

        module.exports = _typeof;

        /***/
      },

    /***/ "./components/references/index.js":
      /*!****************************************!*\
  !*** ./components/references/index.js ***!
  \****************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/router */ "next/router");
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _styles_References_module_css__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../styles/References.module.css */ "./styles/References.module.css"
          );
        /* harmony import */ var _styles_References_module_css__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _styles_References_module_css__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../locales/tr */ "./locales/tr/index.js");
        /* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../locales/en */ "./locales/en/index.js");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! react */ "react");
        /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            react__WEBPACK_IMPORTED_MODULE_4__
          );

        var _jsxFileName = "D:\\ardic_web\\components\\references\\index.js";

        const References = () => {
          const router = (0,
          next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
          const { locale } = router;
          const t =
            locale === "en"
              ? _locales_en__WEBPACK_IMPORTED_MODULE_3__.default
              : _locales_tr__WEBPACK_IMPORTED_MODULE_2__.default;
          const { 0: referencesData, 1: setReferencesData } = (0,
          react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
          (0, react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
            fetch(`${"http://localhost:3000"}/api/${router.locale}/references`)
              .then((response) => response.json())
              .then((data) => {
                setReferencesData(data);
              });
          }, []);
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              className: "container-fluid",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "section-title",
                    children: t.commons.references,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 25,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "row",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      "div",
                      {
                        className:
                          "col " +
                          _styles_References_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                            .container,
                        children: referencesData.map((item, index) => {
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "img",
                            {
                              className:
                                _styles_References_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                  .item,
                              src: `/assets/references/${item.name}.jpg`,
                            },
                            index,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 30,
                              columnNumber: 15,
                            },
                            undefined
                          );
                        }),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 27,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 26,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          References;

        /***/
      },

    /***/ "./components/solutions/index.js":
      /*!***************************************!*\
  !*** ./components/solutions/index.js ***!
  \***************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/router */ "next/router");
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
        /* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_link__WEBPACK_IMPORTED_MODULE_2__
          );
        /* harmony import */ var _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../../styles/Solutions.module.css */ "./styles/Solutions.module.css"
          );
        /* harmony import */ var _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5__
          );
        /* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../locales/tr */ "./locales/tr/index.js");
        /* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(/*! ../../locales/en */ "./locales/en/index.js");

        var _jsxFileName = "D:\\ardic_web\\components\\solutions\\index.js";

        const Solutions = ({ data }) => {
          const router = (0,
          next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
          const { locale } = router;
          const t =
            locale === "en"
              ? _locales_en__WEBPACK_IMPORTED_MODULE_4__.default
              : _locales_tr__WEBPACK_IMPORTED_MODULE_3__.default;
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              className: "container",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "section-title",
                    children: t.commons.solutions,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "br",
                  {},
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 15,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "row",
                    children: data.solutions.map((item, index) => {
                      return /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "div",
                        {
                          className:
                            "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "div",
                            {
                              className:
                                _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                  .item,
                              children: /*#__PURE__*/ (0,
                              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                "div",
                                {
                                  className: "card mb-4",
                                  children: [
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                      "img",
                                      {
                                        src: item.cover,
                                        className: "card-img-top",
                                        alt: item.title,
                                      },
                                      void 0,
                                      false,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 25,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                    /*#__PURE__*/ (0,
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                      "div",
                                      {
                                        className: "card-body",
                                        children: [
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                            "h4",
                                            {
                                              className: "card-title",
                                              children: item.title,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 31,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                            "p",
                                            {
                                              className: "card-text",
                                              children: item.summary,
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 32,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                          /*#__PURE__*/ (0,
                                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                            "div",
                                            {
                                              className:
                                                _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                                  .iconsContainer,
                                              children: item.technologies.map(
                                                (icon, i) => {
                                                  return icon.link
                                                    ? /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                                        next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                                                        {
                                                          href: icon.link,
                                                          children:
                                                            /*#__PURE__*/ (0,
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                                              "a",
                                                              {
                                                                children:
                                                                  /*#__PURE__*/ (0,
                                                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                                                    "img",
                                                                    {
                                                                      className:
                                                                        _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                                                          .icons +
                                                                        " " +
                                                                        _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                                                          .iconsLink,
                                                                      src: icon.image,
                                                                      alt: icon.name,
                                                                      title:
                                                                        icon.name,
                                                                    },
                                                                    void 0,
                                                                    false,
                                                                    {
                                                                      fileName:
                                                                        _jsxFileName,
                                                                      lineNumber: 38,
                                                                      columnNumber: 31,
                                                                    },
                                                                    undefined
                                                                  ),
                                                              },
                                                              void 0,
                                                              false,
                                                              {
                                                                fileName:
                                                                  _jsxFileName,
                                                                lineNumber: 37,
                                                                columnNumber: 29,
                                                              },
                                                              undefined
                                                            ),
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 36,
                                                          columnNumber: 27,
                                                        },
                                                        undefined
                                                      )
                                                    : /*#__PURE__*/ (0,
                                                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                                        "img",
                                                        {
                                                          className:
                                                            _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                                              .icons,
                                                          src: icon.image,
                                                          alt: icon.name,
                                                          title: icon.name,
                                                        },
                                                        void 0,
                                                        false,
                                                        {
                                                          fileName:
                                                            _jsxFileName,
                                                          lineNumber: 49,
                                                          columnNumber: 27,
                                                        },
                                                        undefined
                                                      );
                                                }
                                              ),
                                            },
                                            void 0,
                                            false,
                                            {
                                              fileName: _jsxFileName,
                                              lineNumber: 33,
                                              columnNumber: 21,
                                            },
                                            undefined
                                          ),
                                        ],
                                      },
                                      void 0,
                                      true,
                                      {
                                        fileName: _jsxFileName,
                                        lineNumber: 30,
                                        columnNumber: 19,
                                      },
                                      undefined
                                    ),
                                  ],
                                },
                                void 0,
                                true,
                                {
                                  fileName: _jsxFileName,
                                  lineNumber: 24,
                                  columnNumber: 17,
                                },
                                undefined
                              ),
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 23,
                              columnNumber: 15,
                            },
                            undefined
                          ),
                        },
                        index,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 19,
                          columnNumber: 13,
                        },
                        undefined
                      );
                    }),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 16,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className:
                      "row " +
                      _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                        .moreBox,
                    children: [
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        next_link__WEBPACK_IMPORTED_MODULE_2___default(),
                        {
                          href: "/contact",
                          children: /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "a",
                            {
                              className:
                                _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                  .plusIcon,
                              children: "+",
                            },
                            void 0,
                            false,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 67,
                              columnNumber: 11,
                            },
                            undefined
                          ),
                        },
                        void 0,
                        false,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 66,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                      /*#__PURE__*/ (0,
                      react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                        "div",
                        {
                          className:
                            _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                              .plusContent,
                          children: [
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "h4",
                              {
                                children: data.more.title,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 70,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                            /*#__PURE__*/ (0,
                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                              "p",
                              {
                                className:
                                  _styles_Solutions_module_css__WEBPACK_IMPORTED_MODULE_5___default()
                                    .plusText,
                                children: data.more.text,
                              },
                              void 0,
                              false,
                              {
                                fileName: _jsxFileName,
                                lineNumber: 71,
                                columnNumber: 11,
                              },
                              undefined
                            ),
                          ],
                        },
                        void 0,
                        true,
                        {
                          fileName: _jsxFileName,
                          lineNumber: 69,
                          columnNumber: 9,
                        },
                        undefined
                      ),
                    ],
                  },
                  void 0,
                  true,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 65,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ __webpack_exports__["default"] = Solutions;

        /***/
      },

    /***/ "./components/successStories/index.js":
      /*!********************************************!*\
  !*** ./components/successStories/index.js ***!
  \********************************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/router */ "next/router");
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _styles_SuccessStories_module_css__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../../styles/SuccessStories.module.css */ "./styles/SuccessStories.module.css"
          );
        /* harmony import */ var _styles_SuccessStories_module_css__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _styles_SuccessStories_module_css__WEBPACK_IMPORTED_MODULE_4__
          );
        /* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../../locales/tr */ "./locales/tr/index.js");
        /* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../../locales/en */ "./locales/en/index.js");

        var _jsxFileName =
          "D:\\ardic_web\\components\\successStories\\index.js";

        const SuccessStories = ({ data }) => {
          const router = (0,
          next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
          const { locale } = router;
          const t =
            locale === "en"
              ? _locales_en__WEBPACK_IMPORTED_MODULE_3__.default
              : _locales_tr__WEBPACK_IMPORTED_MODULE_2__.default;
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              className: "container-fluid",
              children: [
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "section-title",
                    children: t.commons.successStories,
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 13,
                    columnNumber: 7,
                  },
                  undefined
                ),
                /*#__PURE__*/ (0,
                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                  "div",
                  {
                    className: "row",
                    children: /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      "div",
                      {
                        className:
                          "col " +
                          _styles_SuccessStories_module_css__WEBPACK_IMPORTED_MODULE_4___default()
                            .container,
                        children: data.map((item, index) => {
                          return /*#__PURE__*/ (0,
                          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                            "div",
                            {
                              className:
                                _styles_SuccessStories_module_css__WEBPACK_IMPORTED_MODULE_4___default()
                                  .item,
                              children: [
                                /*#__PURE__*/ (0,
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                  "div",
                                  {
                                    children: item.title,
                                  },
                                  void 0,
                                  false,
                                  {
                                    fileName: _jsxFileName,
                                    lineNumber: 19,
                                    columnNumber: 17,
                                  },
                                  undefined
                                ),
                                item.contents.map((content, index) => {
                                  /*#__PURE__*/
                                  (0,
                                  react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                                    "div",
                                    {
                                      children: [content.title, content.text],
                                    },
                                    void 0,
                                    true,
                                    {
                                      fileName: _jsxFileName,
                                      lineNumber: 21,
                                      columnNumber: 19,
                                    },
                                    undefined
                                  );
                                }),
                              ],
                            },
                            index,
                            true,
                            {
                              fileName: _jsxFileName,
                              lineNumber: 18,
                              columnNumber: 15,
                            },
                            undefined
                          );
                        }),
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 15,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  },
                  void 0,
                  false,
                  {
                    fileName: _jsxFileName,
                    lineNumber: 14,
                    columnNumber: 7,
                  },
                  undefined
                ),
              ],
            },
            void 0,
            true,
            {
              fileName: _jsxFileName,
              lineNumber: 12,
              columnNumber: 5,
            },
            undefined
          );
        };

        /* harmony default export */ __webpack_exports__["default"] =
          SuccessStories;
        /**/

        /***/
      },

    /***/ "./locales/en/index.js":
      /*!*****************************!*\
  !*** ./locales/en/index.js ***!
  \*****************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          button: {
            goToMainPage: "Go to main page",
            readMore: "read more →",
            visitWebSite: "Visit web site",
          },
          title: {
            _404: "404",
            index: "Ardıc",
            about: "About",
            technologies: "Technologies",
            contact: "Contact",
          },
          meta: {
            _404: "404",
            index: "Ardıc",
            about: "About",
            technologies: "Technologies",
            contact: "Contact",
          },
          commons: {
            sliderText:
              "Platforms for large-scale <br/>IoT services & deep device management<br/>",
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
            solutions: "Solutions",
          },
          page: {
            _404: {
              title: "404 | Page not found",
            },
            home: {
              title: "Ardıc",
              slug: "/",
            },
            about: {
              title: "About",
              slug: "/about",
            },
            solutions: {
              title: "Solutions",
              slug: "/solutions",
            },
            technologies: {
              title: "Technologies",
              slug: "/technologies",
            },
            contact: {
              title: "Contact",
              slug: "/contact",
            },
          },
        };

        /***/
      },

    /***/ "./locales/tr/index.js":
      /*!*****************************!*\
  !*** ./locales/tr/index.js ***!
  \*****************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony default export */ __webpack_exports__["default"] = {
          button: {
            goToMainPage: "Ana sayfaya git",
            readMore: "devamını oku →",
            visitWebSite: "Web sayfasını ziyaret et",
          },
          title: {
            _404: "404",
            index: "Ardıc",
            about: "Hakkında",
            technologies: "Teknolojiler",
            contact: "İletişim",
          },
          meta: {
            _404: "404",
            index: "Ardıc",
            about: "Hakkında",
            technologies: "Teknolojiler",
            contact: "İletişim",
          },
          commons: {
            sliderText:
              "Büyük ölçekli IoT hizmetleri<br/>& derin cihaz yönetimi için platformlar<br/>",
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
            solutions: "Çözümler",
          },
          page: {
            _404: {
              title: "404 | Sayfa Bulunamadı",
            },
            home: {
              title: "Ardıc",
              slug: "/",
            },
            about: {
              title: "Hakkında",
              slug: "/about",
            },
            solutions: {
              title: "Çözümler",
              slug: "/solutions",
            },
            technologies: {
              title: "Teknolojiler",
              slug: "/technologies",
            },
            contact: {
              title: "İletişim",
              slug: "/contact",
            },
          },
        };

        /***/
      },

    /***/ "./node_modules/next/dist/client/link.js":
      /*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
        );

        exports.__esModule = true;
        exports.default = void 0;

        var _react = _interopRequireWildcard(
          __webpack_require__(/*! react */ "react")
        );

        var _router = __webpack_require__(
          /*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"
        );

        var _router2 = __webpack_require__(
          /*! ./router */ "./node_modules/next/dist/client/router.js"
        );

        var _useIntersection = __webpack_require__(
          /*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js"
        );

        const prefetched = {};

        function prefetch(router, href, as, options) {
          if (true) return;
          if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
          // We need to handle a prefetch error here since we may be
          // loading with priority which can reject but we don't
          // want to force navigation since this is only a prefetch

          router.prefetch(href, as, options).catch((err) => {
            if (true) {
              // rethrow to show invalid URL errors
              throw err;
            }
          });
          const curLocale =
            options && typeof options.locale !== "undefined"
              ? options.locale
              : router && router.locale; // Join on an invalid URI character

          prefetched[
            href + "%" + as + (curLocale ? "%" + curLocale : "")
          ] = true;
        }

        function isModifiedEvent(event) {
          const { target } = event.currentTarget;
          return (
            (target && target !== "_self") ||
            event.metaKey ||
            event.ctrlKey ||
            event.shiftKey ||
            event.altKey || // triggers resource download
            (event.nativeEvent && event.nativeEvent.which === 2)
          );
        }

        function linkClicked(
          e,
          router,
          href,
          as,
          replace,
          shallow,
          scroll,
          locale
        ) {
          const { nodeName } = e.currentTarget;

          if (
            nodeName === "A" &&
            (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))
          ) {
            // ignore click for browser’s default behavior
            return;
          }

          e.preventDefault(); //  avoid scroll for urls with anchor refs

          if (scroll == null && as.indexOf("#") >= 0) {
            scroll = false;
          } // replace state instead of push if prop is present

          router[replace ? "replace" : "push"](href, as, {
            shallow,
            locale,
            scroll,
          });
        }

        function Link(props) {
          if (true) {
            function createPropError(args) {
              return new Error(
                `Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` +
                  (false ? 0 : "")
              );
            } // TypeScript trick for type-guarding:

            const requiredPropsGuard = {
              href: true,
            };
            const requiredProps = Object.keys(requiredPropsGuard);
            requiredProps.forEach((key) => {
              if (key === "href") {
                if (
                  props[key] == null ||
                  (typeof props[key] !== "string" &&
                    typeof props[key] !== "object")
                ) {
                  throw createPropError({
                    key,
                    expected: "`string` or `object`",
                    actual: props[key] === null ? "null" : typeof props[key],
                  });
                }
              } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
              }
            }); // TypeScript trick for type-guarding:

            const optionalPropsGuard = {
              as: true,
              replace: true,
              scroll: true,
              shallow: true,
              passHref: true,
              prefetch: true,
              locale: true,
            };
            const optionalProps = Object.keys(optionalPropsGuard);
            optionalProps.forEach((key) => {
              const valType = typeof props[key];

              if (key === "as") {
                if (
                  props[key] &&
                  valType !== "string" &&
                  valType !== "object"
                ) {
                  throw createPropError({
                    key,
                    expected: "`string` or `object`",
                    actual: valType,
                  });
                }
              } else if (key === "locale") {
                if (props[key] && valType !== "string") {
                  throw createPropError({
                    key,
                    expected: "`string`",
                    actual: valType,
                  });
                }
              } else if (
                key === "replace" ||
                key === "scroll" ||
                key === "shallow" ||
                key === "passHref" ||
                key === "prefetch"
              ) {
                if (props[key] != null && valType !== "boolean") {
                  throw createPropError({
                    key,
                    expected: "`boolean`",
                    actual: valType,
                  });
                }
              } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
              }
            }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
            // eslint-disable-next-line react-hooks/rules-of-hooks

            const hasWarned = _react.default.useRef(false);

            if (props.prefetch && !hasWarned.current) {
              hasWarned.current = true;
              console.warn(
                "Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated"
              );
            }
          }

          const p = props.prefetch !== false;
          const router = (0, _router2.useRouter)();

          const { href, as } = _react.default.useMemo(() => {
            const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(
              router,
              props.href,
              true
            );
            return {
              href: resolvedHref,
              as: props.as
                ? (0, _router.resolveHref)(router, props.as)
                : resolvedAs || resolvedHref,
            };
          }, [router, props.href, props.as]);

          let { children, replace, shallow, scroll, locale } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

          if (typeof children === "string") {
            children = /*#__PURE__*/ _react.default.createElement(
              "a",
              null,
              children
            );
          } // This will return the first child, if multiple are provided it will throw an error

          let child;

          if (true) {
            try {
              child = _react.Children.only(children);
            } catch (err) {
              throw new Error(
                `Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` +
                  (false ? 0 : "")
              );
            }
          } else {
          }

          const childRef = child && typeof child === "object" && child.ref;
          const [setIntersectionRef, isVisible] = (0,
          _useIntersection.useIntersection)({
            rootMargin: "200px",
          });

          const setRef = _react.default.useCallback(
            (el) => {
              setIntersectionRef(el);

              if (childRef) {
                if (typeof childRef === "function") childRef(el);
                else if (typeof childRef === "object") {
                  childRef.current = el;
                }
              }
            },
            [childRef, setIntersectionRef]
          );

          (0, _react.useEffect)(() => {
            const shouldPrefetch =
              isVisible && p && (0, _router.isLocalURL)(href);
            const curLocale =
              typeof locale !== "undefined" ? locale : router && router.locale;
            const isPrefetched =
              prefetched[href + "%" + as + (curLocale ? "%" + curLocale : "")];

            if (shouldPrefetch && !isPrefetched) {
              prefetch(router, href, as, {
                locale: curLocale,
              });
            }
          }, [as, href, isVisible, locale, p, router]);
          const childProps = {
            ref: setRef,
            onClick: (e) => {
              if (child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
              }

              if (!e.defaultPrevented) {
                linkClicked(
                  e,
                  router,
                  href,
                  as,
                  replace,
                  shallow,
                  scroll,
                  locale
                );
              }
            },
          };

          childProps.onMouseEnter = (e) => {
            if (!(0, _router.isLocalURL)(href)) return;

            if (child.props && typeof child.props.onMouseEnter === "function") {
              child.props.onMouseEnter(e);
            }

            prefetch(router, href, as, {
              priority: true,
            });
          }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
          // defined, we specify the current 'href', so that repetition is not needed by the user

          if (
            props.passHref ||
            (child.type === "a" && !("href" in child.props))
          ) {
            const curLocale =
              typeof locale !== "undefined" ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
            // so that locale links are still visitable in development/preview envs

            const localeDomain =
              router &&
              router.isLocaleDomain &&
              (0, _router.getDomainLocale)(
                as,
                curLocale,
                router && router.locales,
                router && router.domainLocales
              );
            childProps.href =
              localeDomain ||
              (0, _router.addBasePath)(
                (0, _router.addLocale)(
                  as,
                  curLocale,
                  router && router.defaultLocale
                )
              );
          }

          return /*#__PURE__*/ _react.default.cloneElement(child, childProps);
        }

        var _default = Link;
        exports.default = _default;

        /***/
      },

    /***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
      /*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.removePathTrailingSlash = removePathTrailingSlash;
        exports.normalizePathTrailingSlash = void 0;
        /**
         * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
         */

        function removePathTrailingSlash(path) {
          return path.endsWith("/") && path !== "/" ? path.slice(0, -1) : path;
        }
        /**
         * Normalizes the trailing slash of a path according to the `trailingSlash` option
         * in `next.config.js`.
         */

        const normalizePathTrailingSlash = false ? 0 : removePathTrailingSlash;
        exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

        /***/
      },

    /***/ "./node_modules/next/dist/client/request-idle-callback.js":
      /*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

        const requestIdleCallback =
          (typeof self !== "undefined" && self.requestIdleCallback) ||
          function (cb) {
            let start = Date.now();
            return setTimeout(function () {
              cb({
                didTimeout: false,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - start));
                },
              });
            }, 1);
          };

        exports.requestIdleCallback = requestIdleCallback;

        const cancelIdleCallback =
          (typeof self !== "undefined" && self.cancelIdleCallback) ||
          function (id) {
            return clearTimeout(id);
          };

        exports.cancelIdleCallback = cancelIdleCallback;

        /***/
      },

    /***/ "./node_modules/next/dist/client/route-loader.js":
      /*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.markAssetError = markAssetError;
        exports.isAssetError = isAssetError;
        exports.getClientBuildManifest = getClientBuildManifest;
        exports.default = void 0;

        var _getAssetPathFromRoute = _interopRequireDefault(
          __webpack_require__(
            /*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"
          )
        );

        var _requestIdleCallback = __webpack_require__(
          /*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"
        ); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
        // considers as "Good" time-to-interactive. We must assume something went
        // wrong beyond this point, and then fall-back to a full page transition to
        // show the user something of value.

        const MS_MAX_IDLE_DELAY = 3800;

        function withFuture(key, map, generator) {
          let entry = map.get(key);

          if (entry) {
            if ("future" in entry) {
              return entry.future;
            }

            return Promise.resolve(entry);
          }

          let resolver;
          const prom = new Promise((resolve) => {
            resolver = resolve;
          });
          map.set(
            key,
            (entry = {
              resolve: resolver,
              future: prom,
            })
          );
          return generator // eslint-disable-next-line no-sequences
            ? generator().then((value) => (resolver(value), value))
            : prom;
        }

        function hasPrefetch(link) {
          try {
            link = document.createElement("link");
            return (
              // detect IE11 since it supports prefetch but isn't detected
              // with relList.support
              (!!window.MSInputMethodContext && !!document.documentMode) ||
              link.relList.supports("prefetch")
            );
          } catch (_unused) {
            return false;
          }
        }

        const canPrefetch = hasPrefetch();

        function prefetchViaDom(href, as, link) {
          return new Promise((res, rej) => {
            if (
              document.querySelector(`link[rel="prefetch"][href^="${href}"]`)
            ) {
              return res();
            }

            link = document.createElement("link"); // The order of property assignment here is intentional:

            if (as) link.as = as;
            link.rel = `prefetch`;
            link.crossOrigin = undefined;
            link.onload = res;
            link.onerror = rej; // `href` should always be last:

            link.href = href;
            document.head.appendChild(link);
          });
        }

        const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR"); // TODO: unexport

        function markAssetError(err) {
          return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
        }

        function isAssetError(err) {
          return err && ASSET_LOAD_ERROR in err;
        }

        function appendScript(src, script) {
          return new Promise((resolve, reject) => {
            script = document.createElement("script"); // The order of property assignment here is intentional.
            // 1. Setup success/failure hooks in case the browser synchronously
            //    executes when `src` is set.

            script.onload = resolve;

            script.onerror = () =>
              reject(
                markAssetError(new Error(`Failed to load script: ${src}`))
              ); // 2. Configure the cross-origin attribute before setting `src` in case the
            //    browser begins to fetch.

            script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
            //    must be appended for fetching to start.

            script.src = src;
            document.body.appendChild(script);
          });
        } // Resolve a promise that times out after given amount of milliseconds.

        function resolvePromiseWithTimeout(p, ms, err) {
          return new Promise((resolve, reject) => {
            let cancelled = false;
            p.then((r) => {
              // Resolved, cancel the timeout
              cancelled = true;
              resolve(r);
            }).catch(reject);
            (0, _requestIdleCallback.requestIdleCallback)(() =>
              setTimeout(() => {
                if (!cancelled) {
                  reject(err);
                }
              }, ms)
            );
          });
        } // TODO: stop exporting or cache the failure
        // It'd be best to stop exporting this. It's an implementation detail. We're
        // only exporting it for backwards compatibilty with the `page-loader`.
        // Only cache this response as a last resort if we cannot eliminate all other
        // code branches that use the Build Manifest Callback and push them through
        // the Route Loader interface.

        function getClientBuildManifest() {
          if (self.__BUILD_MANIFEST) {
            return Promise.resolve(self.__BUILD_MANIFEST);
          }

          const onBuildManifest = new Promise((resolve) => {
            // Mandatory because this is not concurrent safe:
            const cb = self.__BUILD_MANIFEST_CB;

            self.__BUILD_MANIFEST_CB = () => {
              resolve(self.__BUILD_MANIFEST);
              cb && cb();
            };
          });
          return resolvePromiseWithTimeout(
            onBuildManifest,
            MS_MAX_IDLE_DELAY,
            markAssetError(new Error("Failed to load client build manifest"))
          );
        }

        function getFilesForRoute(assetPrefix, route) {
          if (true) {
            return Promise.resolve({
              scripts: [
                assetPrefix +
                  "/_next/static/chunks/pages" +
                  encodeURI((0, _getAssetPathFromRoute.default)(route, ".js")),
              ],
              // Styles are handled by `style-loader` in development:
              css: [],
            });
          }

          return getClientBuildManifest().then((manifest) => {
            if (!(route in manifest)) {
              throw markAssetError(
                new Error(`Failed to lookup route: ${route}`)
              );
            }

            const allFiles = manifest[route].map(
              (entry) => assetPrefix + "/_next/" + encodeURI(entry)
            );
            return {
              scripts: allFiles.filter((v) => v.endsWith(".js")),
              css: allFiles.filter((v) => v.endsWith(".css")),
            };
          });
        }

        function createRouteLoader(assetPrefix) {
          const entrypoints = new Map();
          const loadedScripts = new Map();
          const styleSheets = new Map();
          const routes = new Map();

          function maybeExecuteScript(src) {
            let prom = loadedScripts.get(src);

            if (prom) {
              return prom;
            } // Skip executing script if it's already in the DOM:

            if (document.querySelector(`script[src^="${src}"]`)) {
              return Promise.resolve();
            }

            loadedScripts.set(src, (prom = appendScript(src)));
            return prom;
          }

          function fetchStyleSheet(href) {
            let prom = styleSheets.get(href);

            if (prom) {
              return prom;
            }

            styleSheets.set(
              href,
              (prom = fetch(href)
                .then((res) => {
                  if (!res.ok) {
                    throw new Error(`Failed to load stylesheet: ${href}`);
                  }

                  return res.text().then((text) => ({
                    href: href,
                    content: text,
                  }));
                })
                .catch((err) => {
                  throw markAssetError(err);
                }))
            );
            return prom;
          }

          return {
            whenEntrypoint(route) {
              return withFuture(route, entrypoints);
            },

            onEntrypoint(route, execute) {
              Promise.resolve(execute)
                .then((fn) => fn())
                .then(
                  (exports) => ({
                    component: (exports && exports.default) || exports,
                    exports: exports,
                  }),
                  (err) => ({
                    error: err,
                  })
                )
                .then((input) => {
                  const old = entrypoints.get(route);
                  entrypoints.set(route, input);
                  if (old && "resolve" in old) old.resolve(input);
                });
            },

            loadRoute(route, prefetch) {
              return withFuture(route, routes, () => {
                return resolvePromiseWithTimeout(
                  getFilesForRoute(assetPrefix, route)
                    .then(({ scripts, css }) => {
                      return Promise.all([
                        entrypoints.has(route)
                          ? []
                          : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet)),
                      ]);
                    })
                    .then((res) => {
                      return this.whenEntrypoint(route).then((entrypoint) => ({
                        entrypoint,
                        styles: res[1],
                      }));
                    }),
                  MS_MAX_IDLE_DELAY,
                  markAssetError(
                    new Error(`Route did not complete loading: ${route}`)
                  )
                )
                  .then(({ entrypoint, styles }) => {
                    const res = Object.assign(
                      {
                        styles: styles,
                      },
                      entrypoint
                    );
                    return "error" in entrypoint ? entrypoint : res;
                  })
                  .catch((err) => {
                    if (prefetch) {
                      // we don't want to cache errors during prefetch
                      throw err;
                    }

                    return {
                      error: err,
                    };
                  });
              });
            },

            prefetch(route) {
              // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
              // License: Apache 2.0
              let cn;

              if ((cn = navigator.connection)) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType))
                  return Promise.resolve();
              }

              return getFilesForRoute(assetPrefix, route)
                .then((output) =>
                  Promise.all(
                    canPrefetch
                      ? output.scripts.map((script) =>
                          prefetchViaDom(script, "script")
                        )
                      : []
                  )
                )
                .then(() => {
                  (0, _requestIdleCallback.requestIdleCallback)(() =>
                    this.loadRoute(route, true).catch(() => {})
                  );
                })
                .catch(
                  // swallow prefetch errors
                  () => {}
                );
            },
          };
        }

        var _default = createRouteLoader;
        exports.default = _default;

        /***/
      },

    /***/ "./node_modules/next/dist/client/router.js":
      /*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireWildcard = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js"
        );

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.useRouter = useRouter;
        exports.makePublicRouterInstance = makePublicRouterInstance;
        exports.createRouter = exports.withRouter = exports.default = void 0;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _router2 = _interopRequireWildcard(
          __webpack_require__(
            /*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"
          )
        );

        exports.Router = _router2.default;
        exports.NextRouter = _router2.NextRouter;

        var _routerContext = __webpack_require__(
          /*! ../next-server/lib/router-context */ "../next-server/lib/router-context"
        );

        var _withRouter = _interopRequireDefault(
          __webpack_require__(
            /*! ./with-router */ "./node_modules/next/dist/client/with-router.js"
          )
        );

        exports.withRouter = _withRouter.default;
        /* global window */

        const singletonRouter = {
          router: null,
          // holds the actual router instance
          readyCallbacks: [],

          ready(cb) {
            if (this.router) return cb();

            if (false) {
            }
          },
        }; // Create public properties and methods of the router in the singletonRouter

        const urlPropertyFields = [
          "pathname",
          "route",
          "query",
          "asPath",
          "components",
          "isFallback",
          "basePath",
          "locale",
          "locales",
          "defaultLocale",
          "isReady",
          "isPreview",
          "isLocaleDomain",
          "domainLocales",
        ];
        const routerEvents = [
          "routeChangeStart",
          "beforeHistoryChange",
          "routeChangeComplete",
          "routeChangeError",
          "hashChangeStart",
          "hashChangeComplete",
        ];
        const coreMethodFields = [
          "push",
          "replace",
          "reload",
          "back",
          "prefetch",
          "beforePopState",
        ]; // Events is a static property on the router, the router doesn't have to be initialized to use it

        Object.defineProperty(singletonRouter, "events", {
          get() {
            return _router2.default.events;
          },
        });
        urlPropertyFields.forEach((field) => {
          // Here we need to use Object.defineProperty because we need to return
          // the property assigned to the actual router
          // The value might get changed as we change routes and this is the
          // proper way to access it
          Object.defineProperty(singletonRouter, field, {
            get() {
              const router = getRouter();
              return router[field];
            },
          });
        });
        coreMethodFields.forEach((field) => {
          // We don't really know the types here, so we add them later instead
          singletonRouter[field] = (...args) => {
            const router = getRouter();
            return router[field](...args);
          };
        });
        routerEvents.forEach((event) => {
          singletonRouter.ready(() => {
            _router2.default.events.on(event, (...args) => {
              const eventField = `on${event
                .charAt(0)
                .toUpperCase()}${event.substring(1)}`;
              const _singletonRouter = singletonRouter;

              if (_singletonRouter[eventField]) {
                try {
                  _singletonRouter[eventField](...args);
                } catch (err) {
                  console.error(
                    `Error when running the Router event: ${eventField}`
                  );
                  console.error(`${err.message}\n${err.stack}`);
                }
              }
            });
          });
        });

        function getRouter() {
          if (!singletonRouter.router) {
            const message =
              "No router instance found.\n" +
              'You should only use "next/router" on the client side of your app.\n';
            throw new Error(message);
          }

          return singletonRouter.router;
        } // Export the singletonRouter and this is the public API.

        var _default = singletonRouter; // Reexport the withRoute HOC

        exports.default = _default;

        function useRouter() {
          return _react.default.useContext(_routerContext.RouterContext);
        } // INTERNAL APIS
        // -------------
        // (do not use following exports inside the app)
        // Create a router and assign it as the singleton instance.
        // This is used in client side when we are initilizing the app.
        // This should **not** be used inside the server.

        const createRouter = (...args) => {
          singletonRouter.router = new _router2.default(...args);
          singletonRouter.readyCallbacks.forEach((cb) => cb());
          singletonRouter.readyCallbacks = [];
          return singletonRouter.router;
        }; // This function is used to create the `withRouter` router instance

        exports.createRouter = createRouter;

        function makePublicRouterInstance(router) {
          const _router = router;
          const instance = {};

          for (const property of urlPropertyFields) {
            if (typeof _router[property] === "object") {
              instance[property] = Object.assign(
                Array.isArray(_router[property]) ? [] : {},
                _router[property]
              ); // makes sure query is not stateful

              continue;
            }

            instance[property] = _router[property];
          } // Events is a static property on the router, the router doesn't have to be initialized to use it

          instance.events = _router2.default.events;
          coreMethodFields.forEach((field) => {
            instance[field] = (...args) => {
              return _router[field](...args);
            };
          });
          return instance;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/client/use-intersection.js":
      /*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.useIntersection = useIntersection;

        var _react = __webpack_require__(/*! react */ "react");

        var _requestIdleCallback = __webpack_require__(
          /*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"
        );

        const hasIntersectionObserver =
          typeof IntersectionObserver !== "undefined";

        function useIntersection({ rootMargin, disabled }) {
          const isDisabled = disabled || !hasIntersectionObserver;
          const unobserve = (0, _react.useRef)();
          const [visible, setVisible] = (0, _react.useState)(false);
          const setRef = (0, _react.useCallback)(
            (el) => {
              if (unobserve.current) {
                unobserve.current();
                unobserve.current = undefined;
              }

              if (isDisabled || visible) return;

              if (el && el.tagName) {
                unobserve.current = observe(
                  el,
                  (isVisible) => isVisible && setVisible(isVisible),
                  {
                    rootMargin,
                  }
                );
              }
            },
            [isDisabled, rootMargin, visible]
          );
          (0, _react.useEffect)(() => {
            if (!hasIntersectionObserver) {
              if (!visible) {
                const idleCallback = (0,
                _requestIdleCallback.requestIdleCallback)(() =>
                  setVisible(true)
                );
                return () =>
                  (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
              }
            }
          }, [visible]);
          return [setRef, visible];
        }

        function observe(element, callback, options) {
          const { id, observer, elements } = createObserver(options);
          elements.set(element, callback);
          observer.observe(element);
          return function unobserve() {
            elements.delete(element);
            observer.unobserve(element); // Destroy observer when there's nothing left to watch:

            if (elements.size === 0) {
              observer.disconnect();
              observers.delete(id);
            }
          };
        }

        const observers = new Map();

        function createObserver(options) {
          const id = options.rootMargin || "";
          let instance = observers.get(id);

          if (instance) {
            return instance;
          }

          const elements = new Map();
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              const callback = elements.get(entry.target);
              const isVisible =
                entry.isIntersecting || entry.intersectionRatio > 0;

              if (callback && isVisible) {
                callback(isVisible);
              }
            });
          }, options);
          observers.set(
            id,
            (instance = {
              id,
              observer,
              elements,
            })
          );
          return instance;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/client/with-router.js":
      /*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        var _interopRequireDefault = __webpack_require__(
          /*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js"
        );

        exports.__esModule = true;
        exports.default = withRouter;

        var _react = _interopRequireDefault(
          __webpack_require__(/*! react */ "react")
        );

        var _router = __webpack_require__(
          /*! ./router */ "./node_modules/next/dist/client/router.js"
        );

        function withRouter(ComposedComponent) {
          function WithRouterWrapper(props) {
            return /*#__PURE__*/ _react.default.createElement(
              ComposedComponent,
              Object.assign(
                {
                  router: (0, _router.useRouter)(),
                },
                props
              )
            );
          }

          WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps; // This is needed to allow checking for custom getInitialProps in _app
          WithRouterWrapper.origGetInitialProps =
            ComposedComponent.origGetInitialProps;

          if (true) {
            const name =
              ComposedComponent.displayName ||
              ComposedComponent.name ||
              "Unknown";
            WithRouterWrapper.displayName = `withRouter(${name})`;
          }

          return WithRouterWrapper;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js":
      /*!*****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js ***!
  \*****************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.detectDomainLocale = detectDomainLocale;

        function detectDomainLocale(domainItems, hostname, detectedLocale) {
          let domainItem;

          if (domainItems) {
            if (detectedLocale) {
              detectedLocale = detectedLocale.toLowerCase();
            }

            for (const item of domainItems) {
              var _item$domain, _item$locales; // remove port if present

              const domainHostname =
                (_item$domain = item.domain) == null
                  ? void 0
                  : _item$domain.split(":")[0].toLowerCase();

              if (
                hostname === domainHostname ||
                detectedLocale === item.defaultLocale.toLowerCase() ||
                ((_item$locales = item.locales) != null &&
                  _item$locales.some(
                    (locale) => locale.toLowerCase() === detectedLocale
                  ))
              ) {
                domainItem = item;
                break;
              }
            }
          }

          return domainItem;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.normalizeLocalePath = normalizeLocalePath;

        function normalizeLocalePath(pathname, locales) {
          let detectedLocale; // first item will be empty string from splitting at first char

          const pathnameParts = pathname.split("/");
          (locales || []).some((locale) => {
            if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
              detectedLocale = locale;
              pathnameParts.splice(1, 1);
              pathname = pathnameParts.join("/") || "/";
              return true;
            }

            return false;
          });
          return {
            pathname,
            detectedLocale,
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/mitt.js":
      /*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.default = mitt;
        /*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
        // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
        // It's been edited for the needs of this script
        // See the LICENSE at the top of the file

        function mitt() {
          const all = Object.create(null);
          return {
            on(type, handler) {
              (all[type] || (all[type] = [])).push(handler);
            },

            off(type, handler) {
              if (all[type]) {
                all[type].splice(all[type].indexOf(handler) >>> 0, 1);
              }
            },

            emit(type, ...evts) {
              // eslint-disable-next-line array-callback-return
              (all[type] || []).slice().map((handler) => {
                handler(...evts);
              });
            },
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/router.js":
      /*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.getDomainLocale = getDomainLocale;
        exports.addLocale = addLocale;
        exports.delLocale = delLocale;
        exports.hasBasePath = hasBasePath;
        exports.addBasePath = addBasePath;
        exports.delBasePath = delBasePath;
        exports.isLocalURL = isLocalURL;
        exports.interpolateAs = interpolateAs;
        exports.resolveHref = resolveHref;
        exports.default = void 0;

        var _normalizeTrailingSlash = __webpack_require__(
          /*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js"
        );

        var _routeLoader = __webpack_require__(
          /*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js"
        );

        var _denormalizePagePath = __webpack_require__(
          /*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js"
        );

        var _normalizeLocalePath = __webpack_require__(
          /*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js"
        );

        var _mitt = _interopRequireDefault(
          __webpack_require__(
            /*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"
          )
        );

        var _utils = __webpack_require__(
          /*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js"
        );

        var _isDynamic = __webpack_require__(
          /*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js"
        );

        var _parseRelativeUrl = __webpack_require__(
          /*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js"
        );

        var _querystring = __webpack_require__(
          /*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
        );

        var _resolveRewrites = _interopRequireDefault(
          __webpack_require__(/*! ./utils/resolve-rewrites */ "?ca47")
        );

        var _routeMatcher = __webpack_require__(
          /*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js"
        );

        var _routeRegex = __webpack_require__(
          /*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js"
        );

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule
            ? obj
            : {
                default: obj,
              };
        } // tslint:disable:no-console

        let detectDomainLocale;

        if (true) {
          detectDomainLocale = __webpack_require__(
            /*! ../i18n/detect-domain-locale */ "./node_modules/next/dist/next-server/lib/i18n/detect-domain-locale.js"
          ).detectDomainLocale;
        }

        const basePath = false || "";

        function buildCancellationError() {
          return Object.assign(new Error("Route Cancelled"), {
            cancelled: true,
          });
        }

        function addPathPrefix(path, prefix) {
          return prefix && path.startsWith("/")
            ? path === "/"
              ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix)
              : `${prefix}${
                  pathNoQueryHash(path) === "/" ? path.substring(1) : path
                }`
            : path;
        }

        function getDomainLocale(path, locale, locales, domainLocales) {
          if (true) {
            locale =
              locale ||
              (0, _normalizeLocalePath.normalizeLocalePath)(path, locales)
                .detectedLocale;
            const detectedDomain = detectDomainLocale(
              domainLocales,
              undefined,
              locale
            );

            if (detectedDomain) {
              return `http${detectedDomain.http ? "" : "s"}://${
                detectedDomain.domain
              }${basePath || ""}${
                locale === detectedDomain.defaultLocale ? "" : `/${locale}`
              }${path}`;
            }

            return false;
          }

          return false;
        }

        function addLocale(path, locale, defaultLocale) {
          if (true) {
            const pathname = pathNoQueryHash(path);
            const pathLower = pathname.toLowerCase();
            const localeLower = locale && locale.toLowerCase();
            return locale &&
              locale !== defaultLocale &&
              !pathLower.startsWith("/" + localeLower + "/") &&
              pathLower !== "/" + localeLower
              ? addPathPrefix(path, "/" + locale)
              : path;
          }

          return path;
        }

        function delLocale(path, locale) {
          if (true) {
            const pathname = pathNoQueryHash(path);
            const pathLower = pathname.toLowerCase();
            const localeLower = locale && locale.toLowerCase();
            return locale &&
              (pathLower.startsWith("/" + localeLower + "/") ||
                pathLower === "/" + localeLower)
              ? (pathname.length === locale.length + 1 ? "/" : "") +
                  path.substr(locale.length + 1)
              : path;
          }

          return path;
        }

        function pathNoQueryHash(path) {
          const queryIndex = path.indexOf("?");
          const hashIndex = path.indexOf("#");

          if (queryIndex > -1 || hashIndex > -1) {
            path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
          }

          return path;
        }

        function hasBasePath(path) {
          path = pathNoQueryHash(path);
          return path === basePath || path.startsWith(basePath + "/");
        }

        function addBasePath(path) {
          // we only add the basepath on relative urls
          return addPathPrefix(path, basePath);
        }

        function delBasePath(path) {
          path = path.slice(basePath.length);
          if (!path.startsWith("/")) path = `/${path}`;
          return path;
        }
        /**
         * Detects whether a given url is routable by the Next.js router (browser only).
         */

        function isLocalURL(url) {
          // prevent a hydration mismatch on href for url with anchor refs
          if (url.startsWith("/") || url.startsWith("#") || url.startsWith("?"))
            return true;

          try {
            // absolute urls can be local if they are on the same origin
            const locationOrigin = (0, _utils.getLocationOrigin)();
            const resolved = new URL(url, locationOrigin);
            return (
              resolved.origin === locationOrigin &&
              hasBasePath(resolved.pathname)
            );
          } catch (_) {
            return false;
          }
        }

        function interpolateAs(route, asPathname, query) {
          let interpolatedRoute = "";
          const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
          const dynamicGroups = dynamicRegex.groups;
          const dynamicMatches = // Try to match the dynamic route against the asPath
            (asPathname !== route
              ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname)
              : "") || // Fall back to reading the values from the href
            // TODO: should this take priority; also need to change in the router.
            query;
          interpolatedRoute = route;
          const params = Object.keys(dynamicGroups);

          if (
            !params.every((param) => {
              let value = dynamicMatches[param] || "";
              const { repeat, optional } = dynamicGroups[param]; // support single-level catch-all
              // TODO: more robust handling for user-error (passing `/`)

              let replaced = `[${repeat ? "..." : ""}${param}]`;

              if (optional) {
                replaced = `${!value ? "/" : ""}[${replaced}]`;
              }

              if (repeat && !Array.isArray(value)) value = [value];
              return (
                (optional || param in dynamicMatches) && // Interpolate group into data URL if present
                (interpolatedRoute =
                  interpolatedRoute.replace(
                    replaced,
                    repeat
                      ? value
                          .map(
                            // these values should be fully encoded instead of just
                            // path delimiter escaped since they are being inserted
                            // into the URL and we expect URL encoded segments
                            // when parsing dynamic route params
                            (segment) => encodeURIComponent(segment)
                          )
                          .join("/")
                      : encodeURIComponent(value)
                  ) || "/")
              );
            })
          ) {
            interpolatedRoute = ""; // did not satisfy all requirements
            // n.b. We ignore this error because we handle warning for this case in
            // development in the `<Link>` component directly.
          }

          return {
            params,
            result: interpolatedRoute,
          };
        }

        function omitParmsFromQuery(query, params) {
          const filteredQuery = {};
          Object.keys(query).forEach((key) => {
            if (!params.includes(key)) {
              filteredQuery[key] = query[key];
            }
          });
          return filteredQuery;
        }
        /**
         * Resolves a given hyperlink with a certain router state (basePath not included).
         * Preserves absolute urls.
         */

        function resolveHref(router, href, resolveAs) {
          // we use a dummy base url for relative urls
          let base;
          const urlAsString =
            typeof href === "string"
              ? href
              : (0, _utils.formatWithValidation)(href);

          try {
            base = new URL(
              urlAsString.startsWith("#") ? router.asPath : router.pathname,
              "http://n"
            );
          } catch (_) {
            // fallback to / for invalid asPath values e.g. //
            base = new URL("/", "http://n");
          } // Return because it cannot be routed by the Next.js router

          if (!isLocalURL(urlAsString)) {
            return resolveAs ? [urlAsString] : urlAsString;
          }

          try {
            const finalUrl = new URL(urlAsString, base);
            finalUrl.pathname = (0,
            _normalizeTrailingSlash.normalizePathTrailingSlash)(
              finalUrl.pathname
            );
            let interpolatedAs = "";

            if (
              (0, _isDynamic.isDynamicRoute)(finalUrl.pathname) &&
              finalUrl.searchParams &&
              resolveAs
            ) {
              const query = (0, _querystring.searchParamsToUrlQuery)(
                finalUrl.searchParams
              );
              const { result, params } = interpolateAs(
                finalUrl.pathname,
                finalUrl.pathname,
                query
              );

              if (result) {
                interpolatedAs = (0, _utils.formatWithValidation)({
                  pathname: result,
                  hash: finalUrl.hash,
                  query: omitParmsFromQuery(query, params),
                });
              }
            } // if the origin didn't change, it means we received a relative href

            const resolvedHref =
              finalUrl.origin === base.origin
                ? finalUrl.href.slice(finalUrl.origin.length)
                : finalUrl.href;
            return resolveAs
              ? [resolvedHref, interpolatedAs || resolvedHref]
              : resolvedHref;
          } catch (_) {
            return resolveAs ? [urlAsString] : urlAsString;
          }
        }

        function stripOrigin(url) {
          const origin = (0, _utils.getLocationOrigin)();
          return url.startsWith(origin) ? url.substring(origin.length) : url;
        }

        function prepareUrlAs(router, url, as) {
          // If url and as provided as an object representation,
          // we'll format them into the string version here.
          let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
          const origin = (0, _utils.getLocationOrigin)();
          const hrefHadOrigin = resolvedHref.startsWith(origin);
          const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
          resolvedHref = stripOrigin(resolvedHref);
          resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
          const preparedUrl = hrefHadOrigin
            ? resolvedHref
            : addBasePath(resolvedHref);
          const preparedAs = as
            ? stripOrigin(resolveHref(router, as))
            : resolvedAs || resolvedHref;
          return {
            url: preparedUrl,
            as: asHadOrigin ? preparedAs : addBasePath(preparedAs),
          };
        }

        function resolveDynamicRoute(pathname, pages) {
          const cleanPathname = (0,
          _normalizeTrailingSlash.removePathTrailingSlash)(
            (0, _denormalizePagePath.denormalizePagePath)(pathname)
          );

          if (cleanPathname === "/404" || cleanPathname === "/_error") {
            return pathname;
          } // handle resolving href for dynamic routes

          if (!pages.includes(cleanPathname)) {
            // eslint-disable-next-line array-callback-return
            pages.some((page) => {
              if (
                (0, _isDynamic.isDynamicRoute)(page) &&
                (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)
              ) {
                pathname = page;
                return true;
              }
            });
          }

          return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
        }

        const manualScrollRestoration = false && 0;
        const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");

        function fetchRetry(url, attempts) {
          return fetch(url, {
            // Cookies are required to be present for Next.js' SSG "Preview Mode".
            // Cookies may also be required for `getServerSideProps`.
            //
            // > `fetch` won’t send cookies, unless you set the credentials init
            // > option.
            // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
            //
            // > For maximum browser compatibility when it comes to sending &
            // > receiving cookies, always supply the `credentials: 'same-origin'`
            // > option instead of relying on the default.
            // https://github.com/github/fetch#caveats
            credentials: "same-origin",
          }).then((res) => {
            if (!res.ok) {
              if (attempts > 1 && res.status >= 500) {
                return fetchRetry(url, attempts - 1);
              }

              if (res.status === 404) {
                return res.json().then((data) => {
                  if (data.notFound) {
                    return {
                      notFound: SSG_DATA_NOT_FOUND,
                    };
                  }

                  throw new Error(`Failed to load static props`);
                });
              }

              throw new Error(`Failed to load static props`);
            }

            return res.json();
          });
        }

        function fetchNextData(dataHref, isServerRender) {
          return fetchRetry(dataHref, isServerRender ? 3 : 1).catch((err) => {
            // We should only trigger a server-side transition if this was caused
            // on a client-side transition. Otherwise, we'd get into an infinite
            // loop.
            if (!isServerRender) {
              (0, _routeLoader.markAssetError)(err);
            }

            throw err;
          });
        }

        class Router {
          /**
           * Map of all components loaded in `Router`
           */
          // Static Data Cache
          // In-flight Server Data Requests, for deduping
          constructor(
            _pathname,
            _query,
            _as,
            {
              initialProps,
              pageLoader,
              App,
              wrapApp,
              Component,
              err,
              subscription,
              isFallback,
              locale,
              locales,
              defaultLocale,
              domainLocales,
              isPreview,
            }
          ) {
            this.route = void 0;
            this.pathname = void 0;
            this.query = void 0;
            this.asPath = void 0;
            this.basePath = void 0;
            this.components = void 0;
            this.sdc = {};
            this.sdr = {};
            this.sub = void 0;
            this.clc = void 0;
            this.pageLoader = void 0;
            this._bps = void 0;
            this.events = void 0;
            this._wrapApp = void 0;
            this.isSsr = void 0;
            this.isFallback = void 0;
            this._inFlightRoute = void 0;
            this._shallow = void 0;
            this.locale = void 0;
            this.locales = void 0;
            this.defaultLocale = void 0;
            this.domainLocales = void 0;
            this.isReady = void 0;
            this.isPreview = void 0;
            this.isLocaleDomain = void 0;
            this._idx = 0;

            this.onPopState = (e) => {
              const state = e.state;

              if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname, query } = this;
                this.changeState(
                  "replaceState",
                  (0, _utils.formatWithValidation)({
                    pathname: addBasePath(pathname),
                    query,
                  }),
                  (0, _utils.getURL)()
                );
                return;
              }

              if (!state.__N) {
                return;
              }

              let forcedScroll;
              const { url, as, options, idx } = state;

              if (false) {
              }

              this._idx = idx;
              const { pathname } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
              // can be caused by navigating back from an external site

              if (
                this.isSsr &&
                as === this.asPath &&
                pathname === this.pathname
              ) {
                return;
              } // If the downstream application returns falsy, return.
              // They will then be responsible for handling the event.

              if (this._bps && !this._bps(state)) {
                return;
              }

              this.change(
                "replaceState",
                url,
                as,
                Object.assign({}, options, {
                  shallow: options.shallow && this._shallow,
                  locale: options.locale || this.defaultLocale,
                }),
                forcedScroll
              );
            }; // represents the current component key

            this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
              _pathname
            ); // set up the component cache (by route keys)

            this.components = {}; // We should not keep the cache, if there's an error
            // Otherwise, this cause issues when when going back and
            // come again to the errored page.

            if (_pathname !== "/_error") {
              this.components[this.route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP,
              };
            }

            this.components["/_app"] = {
              Component: App,
              styleSheets: [
                /* /_app does not need its stylesheets managed */
              ],
            }; // Backwards compat for Router.router.events
            // TODO: Should be remove the following major version as it was never documented

            this.events = Router.events;
            this.pageLoader = pageLoader;
            this.pathname = _pathname;
            this.query = _query; // if auto prerendered and dynamic route wait to update asPath
            // until after mount to prevent hydration mismatch

            const autoExportDynamic =
              (0, _isDynamic.isDynamicRoute)(_pathname) &&
              self.__NEXT_DATA__.autoExport;

            this.asPath = autoExportDynamic ? _pathname : _as;
            this.basePath = basePath;
            this.sub = subscription;
            this.clc = null;
            this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
            // back from external site

            this.isSsr = true;
            this.isFallback = isFallback;
            this.isReady = !!(
              self.__NEXT_DATA__.gssp ||
              self.__NEXT_DATA__.gip ||
              (!autoExportDynamic && !self.location.search && !false)
            );
            this.isPreview = !!isPreview;
            this.isLocaleDomain = false;

            if (true) {
              this.locale = locale;
              this.locales = locales;
              this.defaultLocale = defaultLocale;
              this.domainLocales = domainLocales;
              this.isLocaleDomain = !!detectDomainLocale(
                domainLocales,
                self.location.hostname
              );
            }

            if (false) {
            }
          }

          reload() {
            window.location.reload();
          }
          /**
           * Go back in history
           */

          back() {
            window.history.back();
          }
          /**
           * Performs a `pushState` with arguments
           * @param url of the route
           * @param as masks `url` for the browser
           * @param options object you can define `shallow` and other options
           */

          push(url, as, options = {}) {
            if (false) {
            }

            ({ url, as } = prepareUrlAs(this, url, as));
            return this.change("pushState", url, as, options);
          }
          /**
           * Performs a `replaceState` with arguments
           * @param url of the route
           * @param as masks `url` for the browser
           * @param options object you can define `shallow` and other options
           */

          replace(url, as, options = {}) {
            ({ url, as } = prepareUrlAs(this, url, as));
            return this.change("replaceState", url, as, options);
          }

          async change(method, url, as, options, forcedScroll) {
            if (!isLocalURL(url)) {
              window.location.href = url;
              return false;
            }

            const shouldResolveHref =
              url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
            // marking the router ready until after the query is updated

            if (options._h) {
              this.isReady = true;
            }

            let localeChange = options.locale !== this.locale;

            if (true) {
              this.locale =
                options.locale === false
                  ? this.defaultLocale
                  : options.locale || this.locale;

              if (typeof options.locale === "undefined") {
                options.locale = this.locale;
              }

              const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(
                hasBasePath(as) ? delBasePath(as) : as
              );
              const localePathResult = (0,
              _normalizeLocalePath.normalizeLocalePath)(
                parsedAs.pathname,
                this.locales
              );

              if (localePathResult.detectedLocale) {
                this.locale = localePathResult.detectedLocale;
                parsedAs.pathname = addBasePath(parsedAs.pathname);
                as = (0, _utils.formatWithValidation)(parsedAs);
                url = addBasePath(
                  (0, _normalizeLocalePath.normalizeLocalePath)(
                    hasBasePath(url) ? delBasePath(url) : url,
                    this.locales
                  ).pathname
                );
              }

              let didNavigate = false; // we need to wrap this in the env check again since regenerator runtime
              // moves this on its own due to the return

              if (true) {
                var _this$locales; // if the locale isn't configured hard navigate to show 404 page

                if (
                  !(
                    (_this$locales = this.locales) != null &&
                    _this$locales.includes(this.locale)
                  )
                ) {
                  parsedAs.pathname = addLocale(parsedAs.pathname, this.locale);
                  window.location.href = (0, _utils.formatWithValidation)(
                    parsedAs
                  ); // this was previously a return but was removed in favor
                  // of better dead code elimination with regenerator runtime

                  didNavigate = true;
                }
              }

              const detectedDomain = detectDomainLocale(
                this.domainLocales,
                undefined,
                this.locale
              ); // we need to wrap this in the env check again since regenerator runtime
              // moves this on its own due to the return

              if (true) {
                // if we are navigating to a domain locale ensure we redirect to the
                // correct domain
                if (
                  !didNavigate &&
                  detectedDomain &&
                  this.isLocaleDomain &&
                  self.location.hostname !== detectedDomain.domain
                ) {
                  const asNoBasePath = delBasePath(as);
                  window.location.href = `http${
                    detectedDomain.http ? "" : "s"
                  }://${detectedDomain.domain}${addBasePath(
                    `${
                      this.locale === detectedDomain.defaultLocale
                        ? ""
                        : `/${this.locale}`
                    }${asNoBasePath === "/" ? "" : asNoBasePath}` || "/"
                  )}`; // this was previously a return but was removed in favor
                  // of better dead code elimination with regenerator runtime

                  didNavigate = true;
                }
              }

              if (didNavigate) {
                return new Promise(() => {});
              }
            }

            if (!options._h) {
              this.isSsr = false;
            } // marking route changes as a navigation start entry

            if (_utils.ST) {
              performance.mark("routeChange");
            }

            const { shallow = false } = options;
            const routeProps = {
              shallow,
            };

            if (this._inFlightRoute) {
              this.abortComponentLoad(this._inFlightRoute, routeProps);
            }

            as = addBasePath(
              addLocale(
                hasBasePath(as) ? delBasePath(as) : as,
                options.locale,
                this.defaultLocale
              )
            );
            const cleanedAs = delLocale(
              hasBasePath(as) ? delBasePath(as) : as,
              this.locale
            );
            this._inFlightRoute = as; // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.

            if (!options._h && this.onlyAHashChange(cleanedAs)) {
              this.asPath = cleanedAs;
              Router.events.emit("hashChangeStart", as, routeProps); // TODO: do we need the resolved href when only a hash change?

              this.changeState(method, url, as, options);
              this.scrollToHash(cleanedAs);
              this.notify(this.components[this.route], null);
              Router.events.emit("hashChangeComplete", as, routeProps);
              return true;
            }

            let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
            let { pathname, query } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to

            let pages, rewrites;

            try {
              pages = await this.pageLoader.getPageList();
              ({ __rewrites: rewrites } = await (0,
              _routeLoader.getClientBuildManifest)());
            } catch (err) {
              // If we fail to resolve the page list or client-build manifest, we must
              // do a server-side transition:
              window.location.href = as;
              return false;
            } // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url

            if (!this.urlIsNew(cleanedAs) && !localeChange) {
              method = "replaceState";
            } // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly

            let resolvedAs = as; // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1

            pathname = pathname
              ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(
                  delBasePath(pathname)
                )
              : pathname;

            if (shouldResolveHref && pathname !== "/_error") {
              options._shouldResolveHref = true;

              if (false) {
              } else {
                parsed.pathname = resolveDynamicRoute(pathname, pages);

                if (parsed.pathname !== pathname) {
                  pathname = parsed.pathname;
                  parsed.pathname = addBasePath(pathname);
                  url = (0, _utils.formatWithValidation)(parsed);
                }
              }
            }

            const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
              pathname
            );

            if (!isLocalURL(as)) {
              if (true) {
                throw new Error(
                  `Invalid href: "${url}" and as: "${as}", received relative href and external as` +
                    `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`
                );
              }

              window.location.href = as;
              return false;
            }

            resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

            if ((0, _isDynamic.isDynamicRoute)(route)) {
              const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(
                resolvedAs
              );
              const asPathname = parsedAs.pathname;
              const routeRegex = (0, _routeRegex.getRouteRegex)(route);
              const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(
                asPathname
              );
              const shouldInterpolate = route === asPathname;
              const interpolatedAs = shouldInterpolate
                ? interpolateAs(route, asPathname, query)
                : {};

              if (
                !routeMatch ||
                (shouldInterpolate && !interpolatedAs.result)
              ) {
                const missingParams = Object.keys(routeRegex.groups).filter(
                  (param) => !query[param]
                );

                if (missingParams.length > 0) {
                  if (true) {
                    console.warn(
                      `${
                        shouldInterpolate
                          ? `Interpolating href`
                          : `Mismatching \`as\` and \`href\``
                      } failed to manually provide ` +
                        `the params: ${missingParams.join(
                          ", "
                        )} in the \`href\`'s \`query\``
                    );
                  }

                  throw new Error(
                    (shouldInterpolate
                      ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(
                          ", "
                        )}) to be interpolated properly. `
                      : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) +
                      `Read more: https://nextjs.org/docs/messages/${
                        shouldInterpolate
                          ? "href-interpolation-failed"
                          : "incompatible-href-as"
                      }`
                  );
                }
              } else if (shouldInterpolate) {
                as = (0, _utils.formatWithValidation)(
                  Object.assign({}, parsedAs, {
                    pathname: interpolatedAs.result,
                    query: omitParmsFromQuery(query, interpolatedAs.params),
                  })
                );
              } else {
                // Merge params into `query`, overwriting any specified in search
                Object.assign(query, routeMatch);
              }
            }

            Router.events.emit("routeChangeStart", as, routeProps);

            try {
              var _self$__NEXT_DATA__$p,
                _self$__NEXT_DATA__$p2,
                _options$scroll;

              let routeInfo = await this.getRouteInfo(
                route,
                pathname,
                query,
                as,
                resolvedAs,
                routeProps
              );
              let { error, props, __N_SSG, __N_SSP } = routeInfo; // handle redirect on client-transition

              if ((__N_SSG || __N_SSP) && props) {
                if (props.pageProps && props.pageProps.__N_REDIRECT) {
                  const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
                  // client-navigation if it is falling back to hard navigation if
                  // it's not

                  if (destination.startsWith("/")) {
                    const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(
                      destination
                    );
                    parsedHref.pathname = resolveDynamicRoute(
                      parsedHref.pathname,
                      pages
                    );
                    const { url: newUrl, as: newAs } = prepareUrlAs(
                      this,
                      destination,
                      destination
                    );
                    return this.change(method, newUrl, newAs, options);
                  }

                  window.location.href = destination;
                  return new Promise(() => {});
                }

                this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

                if (props.notFound === SSG_DATA_NOT_FOUND) {
                  let notFoundRoute;

                  try {
                    await this.fetchComponent("/404");
                    notFoundRoute = "/404";
                  } catch (_) {
                    notFoundRoute = "/_error";
                  }

                  routeInfo = await this.getRouteInfo(
                    notFoundRoute,
                    notFoundRoute,
                    query,
                    as,
                    resolvedAs,
                    {
                      shallow: false,
                    }
                  );
                }
              }

              Router.events.emit("beforeHistoryChange", as, routeProps);
              this.changeState(method, url, as, options);

              if (true) {
                const appComp = this.components["/_app"].Component;
                window.next.isPrerendered =
                  appComp.getInitialProps === appComp.origGetInitialProps &&
                  !routeInfo.Component.getInitialProps;
              }

              if (
                options._h &&
                pathname === "/_error" &&
                ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null
                  ? void 0
                  : (_self$__NEXT_DATA__$p2 =
                      _self$__NEXT_DATA__$p.pageProps) == null
                  ? void 0
                  : _self$__NEXT_DATA__$p2.statusCode) === 500 &&
                props != null &&
                props.pageProps
              ) {
                // ensure statusCode is still correct for static 500 page
                // when updating query information
                props.pageProps.statusCode = 500;
              } // shallow routing is only allowed for same page URL changes.

              const isValidShallowRoute =
                options.shallow && this.route === route;
              const shouldScroll =
                (_options$scroll = options.scroll) != null
                  ? _options$scroll
                  : !isValidShallowRoute;
              const resetScroll = shouldScroll
                ? {
                    x: 0,
                    y: 0,
                  }
                : null;
              await this.set(
                route,
                pathname,
                query,
                cleanedAs,
                routeInfo,
                forcedScroll != null ? forcedScroll : resetScroll
              ).catch((e) => {
                if (e.cancelled) error = error || e;
                else throw e;
              });

              if (error) {
                Router.events.emit(
                  "routeChangeError",
                  error,
                  cleanedAs,
                  routeProps
                );
                throw error;
              }

              if (true) {
                if (this.locale) {
                  document.documentElement.lang = this.locale;
                }
              }

              Router.events.emit("routeChangeComplete", as, routeProps);
              return true;
            } catch (err) {
              if (err.cancelled) {
                return false;
              }

              throw err;
            }
          }

          changeState(method, url, as, options = {}) {
            if (true) {
              if (typeof window.history === "undefined") {
                console.error(`Warning: window.history is not available.`);
                return;
              }

              if (typeof window.history[method] === "undefined") {
                console.error(
                  `Warning: window.history.${method} is not available`
                );
                return;
              }
            }

            if (method !== "pushState" || (0, _utils.getURL)() !== as) {
              this._shallow = options.shallow;
              window.history[method](
                {
                  url,
                  as,
                  options,
                  __N: true,
                  idx: (this._idx =
                    method !== "pushState" ? this._idx : this._idx + 1),
                }, // Most browsers currently ignores this parameter, although they may use it in the future.
                // Passing the empty string here should be safe against future changes to the method.
                // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
                "",
                as
              );
            }
          }

          async handleRouteInfoError(
            err,
            pathname,
            query,
            as,
            routeProps,
            loadErrorFail
          ) {
            if (err.cancelled) {
              // bubble up cancellation errors
              throw err;
            }

            if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
              Router.events.emit("routeChangeError", err, as, routeProps); // If we can't load the page it could be one of following reasons
              //  1. Page doesn't exists
              //  2. Page does exist in a different zone
              //  3. Internal error while loading the page
              // So, doing a hard reload is the proper way to deal with this.

              window.location.href = as; // Changing the URL doesn't block executing the current code path.
              // So let's throw a cancellation error stop the routing logic.

              throw buildCancellationError();
            }

            try {
              let Component;
              let styleSheets;
              let props;

              if (
                typeof Component === "undefined" ||
                typeof styleSheets === "undefined"
              ) {
                ({ page: Component, styleSheets } = await this.fetchComponent(
                  "/_error"
                ));
              }

              const routeInfo = {
                props,
                Component,
                styleSheets,
                err,
                error: err,
              };

              if (!routeInfo.props) {
                try {
                  routeInfo.props = await this.getInitialProps(Component, {
                    err,
                    pathname,
                    query,
                  });
                } catch (gipErr) {
                  console.error(
                    "Error in error page `getInitialProps`: ",
                    gipErr
                  );
                  routeInfo.props = {};
                }
              }

              return routeInfo;
            } catch (routeInfoErr) {
              return this.handleRouteInfoError(
                routeInfoErr,
                pathname,
                query,
                as,
                routeProps,
                true
              );
            }
          }

          async getRouteInfo(
            route,
            pathname,
            query,
            as,
            resolvedAs,
            routeProps
          ) {
            try {
              const existingRouteInfo = this.components[route];

              if (
                routeProps.shallow &&
                existingRouteInfo &&
                this.route === route
              ) {
                return existingRouteInfo;
              }

              const cachedRouteInfo =
                existingRouteInfo && "initial" in existingRouteInfo
                  ? undefined
                  : existingRouteInfo;
              const routeInfo = cachedRouteInfo
                ? cachedRouteInfo
                : await this.fetchComponent(route).then((res) => ({
                    Component: res.page,
                    styleSheets: res.styleSheets,
                    __N_SSG: res.mod.__N_SSG,
                    __N_SSP: res.mod.__N_SSP,
                  }));
              const { Component, __N_SSG, __N_SSP } = routeInfo;

              if (true) {
                const { isValidElementType } = __webpack_require__(
                  /*! react-is */ "react-is"
                );

                if (!isValidElementType(Component)) {
                  throw new Error(
                    `The default export is not a React Component in page: "${pathname}"`
                  );
                }
              }

              let dataHref;

              if (__N_SSG || __N_SSP) {
                dataHref = this.pageLoader.getDataHref(
                  (0, _utils.formatWithValidation)({
                    pathname,
                    query,
                  }),
                  resolvedAs,
                  __N_SSG,
                  this.locale
                );
              }

              const props = await this._getData(() =>
                __N_SSG
                  ? this._getStaticData(dataHref)
                  : __N_SSP
                  ? this._getServerData(dataHref)
                  : this.getInitialProps(
                      Component, // we provide AppTree later so this needs to be `any`
                      {
                        pathname,
                        query,
                        asPath: as,
                        locale: this.locale,
                        locales: this.locales,
                        defaultLocale: this.defaultLocale,
                      }
                    )
              );
              routeInfo.props = props;
              this.components[route] = routeInfo;
              return routeInfo;
            } catch (err) {
              return this.handleRouteInfoError(
                err,
                pathname,
                query,
                as,
                routeProps
              );
            }
          }

          set(route, pathname, query, as, data, resetScroll) {
            this.isFallback = false;
            this.route = route;
            this.pathname = pathname;
            this.query = query;
            this.asPath = as;
            return this.notify(data, resetScroll);
          }
          /**
           * Callback to execute before replacing router state
           * @param cb callback to be executed
           */

          beforePopState(cb) {
            this._bps = cb;
          }

          onlyAHashChange(as) {
            if (!this.asPath) return false;
            const [oldUrlNoHash, oldHash] = this.asPath.split("#");
            const [newUrlNoHash, newHash] = as.split("#"); // Makes sure we scroll to the provided hash if the url/hash are the same

            if (
              newHash &&
              oldUrlNoHash === newUrlNoHash &&
              oldHash === newHash
            ) {
              return true;
            } // If the urls are change, there's more than a hash change

            if (oldUrlNoHash !== newUrlNoHash) {
              return false;
            } // If the hash has changed, then it's a hash only change.
            // This check is necessary to handle both the enter and
            // leave hash === '' cases. The identity case falls through
            // and is treated as a next reload.

            return oldHash !== newHash;
          }

          scrollToHash(as) {
            const [, hash] = as.split("#"); // Scroll to top if the hash is just `#` with no value or `#top`
            // To mirror browsers

            if (hash === "" || hash === "top") {
              window.scrollTo(0, 0);
              return;
            } // First we check if the element by id is found

            const idEl = document.getElementById(hash);

            if (idEl) {
              idEl.scrollIntoView();
              return;
            } // If there's no element with the id, we check the `name` property
            // To mirror browsers

            const nameEl = document.getElementsByName(hash)[0];

            if (nameEl) {
              nameEl.scrollIntoView();
            }
          }

          urlIsNew(asPath) {
            return this.asPath !== asPath;
          }
          /**
           * Prefetch page code, you may wait for the data during page rendering.
           * This feature only works in production!
           * @param url the href of prefetched page
           * @param asPath the as path of the prefetched page
           */

          async prefetch(url, asPath = url, options = {}) {
            let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
            let { pathname } = parsed;

            if (true) {
              if (options.locale === false) {
                pathname = (0, _normalizeLocalePath.normalizeLocalePath)(
                  pathname,
                  this.locales
                ).pathname;
                parsed.pathname = pathname;
                url = (0, _utils.formatWithValidation)(parsed);
                let parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(asPath);
                const localePathResult = (0,
                _normalizeLocalePath.normalizeLocalePath)(
                  parsedAs.pathname,
                  this.locales
                );
                parsedAs.pathname = localePathResult.pathname;
                options.locale =
                  localePathResult.detectedLocale || this.defaultLocale;
                asPath = (0, _utils.formatWithValidation)(parsedAs);
              }
            }

            const pages = await this.pageLoader.getPageList();
            let resolvedAs = asPath;

            if (false) {
            } else {
              parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

              if (parsed.pathname !== pathname) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                url = (0, _utils.formatWithValidation)(parsed);
              }
            }

            const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(
              pathname
            ); // Prefetch is not supported in development mode because it would trigger on-demand-entries

            if (true) {
              return;
            }

            await Promise.all([
              this.pageLoader._isSsg(route).then((isSsg) => {
                return isSsg
                  ? this._getStaticData(
                      this.pageLoader.getDataHref(
                        url,
                        resolvedAs,
                        true,
                        typeof options.locale !== "undefined"
                          ? options.locale
                          : this.locale
                      )
                    )
                  : false;
              }),
              this.pageLoader[options.priority ? "loadPage" : "prefetch"](
                route
              ),
            ]);
          }

          async fetchComponent(route) {
            let cancelled = false;

            const cancel = (this.clc = () => {
              cancelled = true;
            });

            const componentResult = await this.pageLoader.loadPage(route);

            if (cancelled) {
              const error = new Error(
                `Abort fetching component for route: "${route}"`
              );
              error.cancelled = true;
              throw error;
            }

            if (cancel === this.clc) {
              this.clc = null;
            }

            return componentResult;
          }

          _getData(fn) {
            let cancelled = false;

            const cancel = () => {
              cancelled = true;
            };

            this.clc = cancel;
            return fn().then((data) => {
              if (cancel === this.clc) {
                this.clc = null;
              }

              if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
              }

              return data;
            });
          }

          _getStaticData(dataHref) {
            const { href: cacheKey } = new URL(dataHref, window.location.href);

            if (false) {
            }

            return fetchNextData(dataHref, this.isSsr).then((data) => {
              this.sdc[cacheKey] = data;
              return data;
            });
          }

          _getServerData(dataHref) {
            const { href: resourceKey } = new URL(
              dataHref,
              window.location.href
            );

            if (this.sdr[resourceKey]) {
              return this.sdr[resourceKey];
            }

            return (this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr)
              .then((data) => {
                delete this.sdr[resourceKey];
                return data;
              })
              .catch((err) => {
                delete this.sdr[resourceKey];
                throw err;
              }));
          }

          getInitialProps(Component, ctx) {
            const { Component: App } = this.components["/_app"];

            const AppTree = this._wrapApp(App);

            ctx.AppTree = AppTree;
            return (0, _utils.loadGetInitialProps)(App, {
              AppTree,
              Component,
              router: this,
              ctx,
            });
          }

          abortComponentLoad(as, routeProps) {
            if (this.clc) {
              Router.events.emit(
                "routeChangeError",
                buildCancellationError(),
                as,
                routeProps
              );
              this.clc();
              this.clc = null;
            }
          }

          notify(data, resetScroll) {
            return this.sub(
              data,
              this.components["/_app"].Component,
              resetScroll
            );
          }
        }

        exports.default = Router;
        Router.events = (0, _mitt.default)();

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.formatUrl = formatUrl;

        var querystring = _interopRequireWildcard(
          __webpack_require__(
            /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
          )
        );

        function _getRequireWildcardCache() {
          if (typeof WeakMap !== "function") return null;
          var cache = new WeakMap();

          _getRequireWildcardCache = function () {
            return cache;
          };

          return cache;
        }

        function _interopRequireWildcard(obj) {
          if (obj && obj.__esModule) {
            return obj;
          }

          if (
            obj === null ||
            (typeof obj !== "object" && typeof obj !== "function")
          ) {
            return {
              default: obj,
            };
          }

          var cache = _getRequireWildcardCache();

          if (cache && cache.has(obj)) {
            return cache.get(obj);
          }

          var newObj = {};
          var hasPropertyDescriptor =
            Object.defineProperty && Object.getOwnPropertyDescriptor;

          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = hasPropertyDescriptor
                ? Object.getOwnPropertyDescriptor(obj, key)
                : null;

              if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }

          newObj.default = obj;

          if (cache) {
            cache.set(obj, newObj);
          }

          return newObj;
        } // Format function modified from nodejs
        // Copyright Joyent, Inc. and other Node contributors.
        //
        // Permission is hereby granted, free of charge, to any person obtaining a
        // copy of this software and associated documentation files (the
        // "Software"), to deal in the Software without restriction, including
        // without limitation the rights to use, copy, modify, merge, publish,
        // distribute, sublicense, and/or sell copies of the Software, and to permit
        // persons to whom the Software is furnished to do so, subject to the
        // following conditions:
        //
        // The above copyright notice and this permission notice shall be included
        // in all copies or substantial portions of the Software.
        //
        // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
        // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
        // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
        // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
        // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
        // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
        // USE OR OTHER DEALINGS IN THE SOFTWARE.

        const slashedProtocols = /https?|ftp|gopher|file/;

        function formatUrl(urlObj) {
          let { auth, hostname } = urlObj;
          let protocol = urlObj.protocol || "";
          let pathname = urlObj.pathname || "";
          let hash = urlObj.hash || "";
          let query = urlObj.query || "";
          let host = false;
          auth = auth
            ? encodeURIComponent(auth).replace(/%3A/i, ":") + "@"
            : "";

          if (urlObj.host) {
            host = auth + urlObj.host;
          } else if (hostname) {
            host = auth + (~hostname.indexOf(":") ? `[${hostname}]` : hostname);

            if (urlObj.port) {
              host += ":" + urlObj.port;
            }
          }

          if (query && typeof query === "object") {
            query = String(querystring.urlQueryToSearchParams(query));
          }

          let search = urlObj.search || (query && `?${query}`) || "";
          if (protocol && protocol.substr(-1) !== ":") protocol += ":";

          if (
            urlObj.slashes ||
            ((!protocol || slashedProtocols.test(protocol)) && host !== false)
          ) {
            host = "//" + (host || "");
            if (pathname && pathname[0] !== "/") pathname = "/" + pathname;
          } else if (!host) {
            host = "";
          }

          if (hash && hash[0] !== "#") hash = "#" + hash;
          if (search && search[0] !== "?") search = "?" + search;
          pathname = pathname.replace(/[?#]/g, encodeURIComponent);
          search = search.replace("#", "%23");
          return `${protocol}${host}${pathname}${search}${hash}`;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
      /*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

        const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

        function isDynamicRoute(route) {
          return TEST_ROUTE.test(route);
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
      /*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.parseRelativeUrl = parseRelativeUrl;

        var _utils = __webpack_require__(
          /*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js"
        );

        var _querystring = __webpack_require__(
          /*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"
        );
        /**
         * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
         * (e.g. `./hello`) then at least base must be.
         * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
         * the current origin will be parsed as relative
         */

        function parseRelativeUrl(url, base) {
          const globalBase = new URL(true ? "http://n" : 0);
          const resolvedBase = base ? new URL(base, globalBase) : globalBase;
          const { pathname, searchParams, search, hash, href, origin } =
            new URL(url, resolvedBase);

          if (origin !== globalBase.origin) {
            throw new Error(
              `invariant: invalid relative URL, router received ${url}`
            );
          }

          return {
            pathname,
            query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
            search,
            hash,
            href: href.slice(globalBase.origin.length),
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
        exports.urlQueryToSearchParams = urlQueryToSearchParams;
        exports.assign = assign;

        function searchParamsToUrlQuery(searchParams) {
          const query = {};
          searchParams.forEach((value, key) => {
            if (typeof query[key] === "undefined") {
              query[key] = value;
            } else if (Array.isArray(query[key])) {
              query[key].push(value);
            } else {
              query[key] = [query[key], value];
            }
          });
          return query;
        }

        function stringifyUrlQueryParam(param) {
          if (
            typeof param === "string" ||
            (typeof param === "number" && !isNaN(param)) ||
            typeof param === "boolean"
          ) {
            return String(param);
          } else {
            return "";
          }
        }

        function urlQueryToSearchParams(urlQuery) {
          const result = new URLSearchParams();
          Object.entries(urlQuery).forEach(([key, value]) => {
            if (Array.isArray(value)) {
              value.forEach((item) =>
                result.append(key, stringifyUrlQueryParam(item))
              );
            } else {
              result.set(key, stringifyUrlQueryParam(value));
            }
          });
          return result;
        }

        function assign(target, ...searchParamsList) {
          searchParamsList.forEach((searchParams) => {
            Array.from(searchParams.keys()).forEach((key) =>
              target.delete(key)
            );
            searchParams.forEach((value, key) => target.append(key, value));
          });
          return target;
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
      /*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.getRouteMatcher = getRouteMatcher;

        function getRouteMatcher(routeRegex) {
          const { re, groups } = routeRegex;
          return (pathname) => {
            const routeMatch = re.exec(pathname);

            if (!routeMatch) {
              return false;
            }

            const decode = (param) => {
              try {
                return decodeURIComponent(param);
              } catch (_) {
                const err = new Error("failed to decode param");
                err.code = "DECODE_FAILED";
                throw err;
              }
            };

            const params = {};
            Object.keys(groups).forEach((slugName) => {
              const g = groups[slugName];
              const m = routeMatch[g.pos];

              if (m !== undefined) {
                params[slugName] = ~m.indexOf("/")
                  ? m.split("/").map((entry) => decode(entry))
                  : g.repeat
                  ? [decode(m)]
                  : decode(m);
              }
            });
            return params;
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";

        exports.__esModule = true;
        exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
        // to reduce bytes

        function escapeRegex(str) {
          return str.replace(/[|\\{}()[\]^$+*?.-]/g, "\\$&");
        }

        function parseParameter(param) {
          const optional = param.startsWith("[") && param.endsWith("]");

          if (optional) {
            param = param.slice(1, -1);
          }

          const repeat = param.startsWith("...");

          if (repeat) {
            param = param.slice(3);
          }

          return {
            key: param,
            repeat,
            optional,
          };
        }

        function getRouteRegex(normalizedRoute) {
          const segments = (normalizedRoute.replace(/\/$/, "") || "/")
            .slice(1)
            .split("/");
          const groups = {};
          let groupIndex = 1;
          const parameterizedRoute = segments
            .map((segment) => {
              if (segment.startsWith("[") && segment.endsWith("]")) {
                const { key, optional, repeat } = parseParameter(
                  segment.slice(1, -1)
                );
                groups[key] = {
                  pos: groupIndex++,
                  repeat,
                  optional,
                };
                return repeat
                  ? optional
                    ? "(?:/(.+?))?"
                    : "/(.+?)"
                  : "/([^/]+?)";
              } else {
                return `/${escapeRegex(segment)}`;
              }
            })
            .join(""); // dead code eliminate for browser since it's only needed
          // while generating routes-manifest

          if (true) {
            let routeKeyCharCode = 97;
            let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

            const getSafeRouteKey = () => {
              let routeKey = "";

              for (let i = 0; i < routeKeyCharLength; i++) {
                routeKey += String.fromCharCode(routeKeyCharCode);
                routeKeyCharCode++;

                if (routeKeyCharCode > 122) {
                  routeKeyCharLength++;
                  routeKeyCharCode = 97;
                }
              }

              return routeKey;
            };

            const routeKeys = {};
            let namedParameterizedRoute = segments
              .map((segment) => {
                if (segment.startsWith("[") && segment.endsWith("]")) {
                  const { key, optional, repeat } = parseParameter(
                    segment.slice(1, -1)
                  ); // replace any non-word characters since they can break
                  // the named regex

                  let cleanedKey = key.replace(/\W/g, "");
                  let invalidKey = false; // check if the key is still invalid and fallback to using a known
                  // safe key

                  if (cleanedKey.length === 0 || cleanedKey.length > 30) {
                    invalidKey = true;
                  }

                  if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
                    invalidKey = true;
                  }

                  if (invalidKey) {
                    cleanedKey = getSafeRouteKey();
                  }

                  routeKeys[cleanedKey] = key;
                  return repeat
                    ? optional
                      ? `(?:/(?<${cleanedKey}>.+?))?`
                      : `/(?<${cleanedKey}>.+?)`
                    : `/(?<${cleanedKey}>[^/]+?)`;
                } else {
                  return `/${escapeRegex(segment)}`;
                }
              })
              .join("");
            return {
              re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
              groups,
              routeKeys,
              namedRegex: `^${namedParameterizedRoute}(?:/)?$`,
            };
          }

          return {
            re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
            groups,
          };
        }

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/lib/utils.js":
      /*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
      /***/ function (__unused_webpack_module, exports, __webpack_require__) {
        "use strict";

        exports.__esModule = true;
        exports.execOnce = execOnce;
        exports.getLocationOrigin = getLocationOrigin;
        exports.getURL = getURL;
        exports.getDisplayName = getDisplayName;
        exports.isResSent = isResSent;
        exports.loadGetInitialProps = loadGetInitialProps;
        exports.formatWithValidation = formatWithValidation;
        exports.ST = exports.SP = exports.urlObjectKeys = void 0;

        var _formatUrl = __webpack_require__(
          /*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"
        );
        /**
         * Utils
         */

        function execOnce(fn) {
          let used = false;
          let result;
          return (...args) => {
            if (!used) {
              used = true;
              result = fn(...args);
            }

            return result;
          };
        }

        function getLocationOrigin() {
          const { protocol, hostname, port } = window.location;
          return `${protocol}//${hostname}${port ? ":" + port : ""}`;
        }

        function getURL() {
          const { href } = window.location;
          const origin = getLocationOrigin();
          return href.substring(origin.length);
        }

        function getDisplayName(Component) {
          return typeof Component === "string"
            ? Component
            : Component.displayName || Component.name || "Unknown";
        }

        function isResSent(res) {
          return res.finished || res.headersSent;
        }

        async function loadGetInitialProps(App, ctx) {
          if (true) {
            var _App$prototype;

            if (
              (_App$prototype = App.prototype) != null &&
              _App$prototype.getInitialProps
            ) {
              const message = `"${getDisplayName(
                App
              )}.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.`;
              throw new Error(message);
            }
          } // when called from _app `ctx` is nested in `ctx`

          const res = ctx.res || (ctx.ctx && ctx.ctx.res);

          if (!App.getInitialProps) {
            if (ctx.ctx && ctx.Component) {
              // @ts-ignore pageProps default
              return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx),
              };
            }

            return {};
          }

          const props = await App.getInitialProps(ctx);

          if (res && isResSent(res)) {
            return props;
          }

          if (!props) {
            const message = `"${getDisplayName(
              App
            )}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
            throw new Error(message);
          }

          if (true) {
            if (Object.keys(props).length === 0 && !ctx.ctx) {
              console.warn(
                `${getDisplayName(
                  App
                )} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps`
              );
            }
          }

          return props;
        }

        const urlObjectKeys = [
          "auth",
          "hash",
          "host",
          "hostname",
          "href",
          "path",
          "pathname",
          "port",
          "protocol",
          "query",
          "search",
          "slashes",
        ];
        exports.urlObjectKeys = urlObjectKeys;

        function formatWithValidation(url) {
          if (true) {
            if (url !== null && typeof url === "object") {
              Object.keys(url).forEach((key) => {
                if (urlObjectKeys.indexOf(key) === -1) {
                  console.warn(
                    `Unknown key passed via urlObject into url.format: ${key}`
                  );
                }
              });
            }
          }

          return (0, _formatUrl.formatUrl)(url);
        }

        const SP = typeof performance !== "undefined";
        exports.SP = SP;
        const ST =
          SP &&
          typeof performance.mark === "function" &&
          typeof performance.measure === "function";
        exports.ST = ST;

        /***/
      },

    /***/ "./pages/index.js":
      /*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ getStaticProps: function () {
            return /* binding */ getStaticProps;
          },
          /* harmony export */
        });
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! react/jsx-dev-runtime */ "react/jsx-dev-runtime"
          );
        /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
          );
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(/*! next/router */ "next/router");
        /* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            next_router__WEBPACK_IMPORTED_MODULE_1__
          );
        /* harmony import */ var _locales_tr__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(/*! ../locales/tr */ "./locales/tr/index.js");
        /* harmony import */ var _locales_en__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(/*! ../locales/en */ "./locales/en/index.js");
        /* harmony import */ var _components_references__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! ../components/references */ "./components/references/index.js"
          );
        /* harmony import */ var _components_successStories__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! ../components/successStories */ "./components/successStories/index.js"
          );
        /* harmony import */ var _components_solutions__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! ../components/solutions */ "./components/solutions/index.js"
          );

        var _jsxFileName = "D:\\ardic_web\\pages\\index.js";

        const Index = ({ successStoriesData, solutionsData }) => {
          const router = (0,
          next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
          const { locale } = router;
          const t =
            locale === "en"
              ? _locales_en__WEBPACK_IMPORTED_MODULE_3__.default
              : _locales_tr__WEBPACK_IMPORTED_MODULE_2__.default;
          return /*#__PURE__*/ (0,
          react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
            "div",
            {
              className: "container",
              children: /*#__PURE__*/ (0,
              react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                "div",
                {
                  className: "page-box",
                  children: [
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      _components_solutions__WEBPACK_IMPORTED_MODULE_6__.default,
                      {
                        data: solutionsData,
                      },
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 20,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                    /*#__PURE__*/ (0,
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(
                      _components_references__WEBPACK_IMPORTED_MODULE_4__.default,
                      {},
                      void 0,
                      false,
                      {
                        fileName: _jsxFileName,
                        lineNumber: 21,
                        columnNumber: 9,
                      },
                      undefined
                    ),
                  ],
                },
                void 0,
                true,
                {
                  fileName: _jsxFileName,
                  lineNumber: 18,
                  columnNumber: 7,
                },
                undefined
              ),
            },
            void 0,
            false,
            {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 5,
            },
            undefined
          );
        };

        const getStaticProps = async (router) => {
          // Success Stories Section
          const res_successStories = await fetch(
            `${"http://localhost:3000"}/api/${router.locale}/success-stories`
          );
          const successStoriesData = await res_successStories.json(); // Solutions Section

          const res_solutions = await fetch(
            `${"http://localhost:3000"}/api/${router.locale}/solutions`
          );
          const solutionsData = await res_solutions.json();
          return {
            props: {
              successStoriesData,
              solutionsData,
            },
          };
        };
        /* harmony default export */ __webpack_exports__["default"] = Index;

        /***/
      },

    /***/ "./styles/References.module.css":
      /*!**************************************!*\
  !*** ./styles/References.module.css ***!
  \**************************************/
      /***/ function (module) {
        // Exports
        module.exports = {
          container: "References_container__2awRL",
          item: "References_item__hFZ_s",
        };

        /***/
      },

    /***/ "./styles/Solutions.module.css":
      /*!*************************************!*\
  !*** ./styles/Solutions.module.css ***!
  \*************************************/
      /***/ function (module) {
        // Exports
        module.exports = {
          container: "Solutions_container__2O7yo",
          iconsContainer: "Solutions_iconsContainer__1rN26",
          icons: "Solutions_icons__2itk0",
          iconsLink: "Solutions_iconsLink__1-Iy3",
          moreBox: "Solutions_moreBox__3xMzI",
          plusIcon: "Solutions_plusIcon__2gHYJ",
          plusContent: "Solutions_plusContent__30PXJ",
        };

        /***/
      },

    /***/ "./styles/SuccessStories.module.css":
      /*!******************************************!*\
  !*** ./styles/SuccessStories.module.css ***!
  \******************************************/
      /***/ function (module) {
        // Exports
        module.exports = {
          container: "SuccessStories_container__2GaPm",
        };

        /***/
      },

    /***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
      /***/ function (__unused_webpack_module, exports) {
        "use strict";
        exports.__esModule = true;
        exports.normalizePathSep = normalizePathSep;
        exports.denormalizePagePath = denormalizePagePath;
        function normalizePathSep(path) {
          return path.replace(/\\/g, "/");
        }
        function denormalizePagePath(page) {
          page = normalizePathSep(page);
          if (page.startsWith("/index/")) {
            page = page.slice(6);
          } else if (page === "/index") {
            page = "/";
          }
          return page;
        }
        //# sourceMappingURL=denormalize-page-path.js.map

        /***/
      },

    /***/ "./node_modules/next/link.js":
      /*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
      /***/ function (module, __unused_webpack_exports, __webpack_require__) {
        module.exports = __webpack_require__(
          /*! ./dist/client/link */ "./node_modules/next/dist/client/link.js"
        );

        /***/
      },

    /***/ "../next-server/lib/router-context":
      /*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("next/dist/next-server/lib/router-context.js");

        /***/
      },

    /***/ "../next-server/lib/router/utils/get-asset-path-from-route":
      /*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

        /***/
      },

    /***/ "next/router":
      /*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("next/router");

        /***/
      },

    /***/ react:
      /*!************************!*\
  !*** external "react" ***!
  \************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("react");

        /***/
      },

    /***/ "react-is":
      /*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("react-is");

        /***/
      },

    /***/ "react/jsx-dev-runtime":
      /*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
      /***/ function (module) {
        "use strict";
        module.exports = require("react/jsx-dev-runtime");

        /***/
      },

    /***/ "?ca47":
      /*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
      /***/ function () {
        /* (ignored) */
        /***/
      },
  };
  // load runtime
  var __webpack_require__ = require("../webpack-runtime.js");
  __webpack_require__.C(exports);
  var __webpack_exec__ = function (moduleId) {
    return __webpack_require__((__webpack_require__.s = moduleId));
  };
  var __webpack_exports__ = __webpack_exec__("./pages/index.js");
  module.exports = __webpack_exports__;
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmRpYy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly9hcmRpYy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9jb21wb25lbnRzL3JlZmVyZW5jZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9jb21wb25lbnRzL3NvbHV0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcmRpYy8uL2NvbXBvbmVudHMvc3VjY2Vzc1N0b3JpZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9sb2NhbGVzL2VuL2luZGV4LmpzIiwid2VicGFjazovL2FyZGljLy4vbG9jYWxlcy90ci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hcmRpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlLmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9taXR0LmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci5qcyIsIndlYnBhY2s6Ly9hcmRpYy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanMiLCJ3ZWJwYWNrOi8vYXJkaWMvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9hcmRpYy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2FyZGljLy4vc3R5bGVzL1JlZmVyZW5jZXMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcmRpYy8uL3N0eWxlcy9Tb2x1dGlvbnMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9hcmRpYy8uL3N0eWxlcy9TdWNjZXNzU3Rvcmllcy5tb2R1bGUuY3NzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovL2FyZGljLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly9hcmRpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly9hcmRpYy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9hcmRpYy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYXJkaWMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2FyZGljL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly9hcmRpYy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL2FyZGljL2lnbm9yZWR8RDpcXGFyZGljX3dlYlxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIlJlZmVyZW5jZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJsb2NhbGUiLCJ0IiwiZW4iLCJ0ciIsInJlZmVyZW5jZXNEYXRhIiwic2V0UmVmZXJlbmNlc0RhdGEiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImZldGNoIiwicHJvY2VzcyIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJkYXRhIiwiY29tbW9ucyIsInJlZmVyZW5jZXMiLCJzdHlsZXMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJuYW1lIiwiU29sdXRpb25zIiwic29sdXRpb25zIiwiY292ZXIiLCJ0aXRsZSIsInN1bW1hcnkiLCJ0ZWNobm9sb2dpZXMiLCJpY29uIiwiaSIsImxpbmsiLCJpbWFnZSIsIm1vcmUiLCJ0ZXh0IiwiU3VjY2Vzc1N0b3JpZXMiLCJzdWNjZXNzU3RvcmllcyIsImNvbnRlbnRzIiwiY29udGVudCIsImJ1dHRvbiIsImdvVG9NYWluUGFnZSIsInJlYWRNb3JlIiwidmlzaXRXZWJTaXRlIiwiXzQwNCIsImFib3V0IiwiY29udGFjdCIsIm1ldGEiLCJzbGlkZXJUZXh0IiwicGx1czAiLCJwbHVzMSIsInBsdXMyIiwicGx1czMiLCJwbHVzNCIsImJyYW5kMVRleHQiLCJicmFuZDJUZXh0IiwiY29weXJpZ2h0IiwicGFnZSIsImhvbWUiLCJzbHVnIiwiX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9yZWFjdCIsIl9yb3V0ZXIiLCJfcm91dGVyMiIsIl91c2VJbnRlcnNlY3Rpb24iLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsImRlZmF1bHQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJwYXRoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJjYiIsInN0YXJ0IiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJpZCIsImNsZWFyVGltZW91dCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJNU19NQVhfSURMRV9ERUxBWSIsIndpdGhGdXR1cmUiLCJnZW5lcmF0b3IiLCJlbnRyeSIsImdldCIsImZ1dHVyZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVzb2x2ZXIiLCJwcm9tIiwic2V0IiwidmFsdWUiLCJoYXNQcmVmZXRjaCIsImRvY3VtZW50Iiwid2luZG93IiwiTVNJbnB1dE1ldGhvZENvbnRleHQiLCJkb2N1bWVudE1vZGUiLCJyZWxMaXN0Iiwic3VwcG9ydHMiLCJfdW51c2VkIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIm9ubG9hZCIsIm9uZXJyb3IiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiZGVmaW5lUHJvcGVydHkiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJjcmVhdGVSb3V0ZUxvYWRlciIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0Iiwib2siLCJ3aGVuRW50cnlwb2ludCIsIm9uRW50cnlwb2ludCIsImV4ZWN1dGUiLCJmbiIsImNvbXBvbmVudCIsImVycm9yIiwiaW5wdXQiLCJvbGQiLCJsb2FkUm91dGUiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50IiwiYXNzaWduIiwiY24iLCJuYXZpZ2F0b3IiLCJjb25uZWN0aW9uIiwic2F2ZURhdGEiLCJ0ZXN0IiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIk5leHRSb3V0ZXIiLCJfcm91dGVyQ29udGV4dCIsIl93aXRoUm91dGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImV2ZW50cyIsImZpZWxkIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiQXJyYXkiLCJpc0FycmF5IiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImRpc2FibGVkIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJkb21haW5JdGVtcyIsImhvc3RuYW1lIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkb21haW5JdGVtIiwidG9Mb3dlckNhc2UiLCJfaXRlbSRkb21haW4iLCJfaXRlbSRsb2NhbGVzIiwiZG9tYWluSG9zdG5hbWUiLCJkb21haW4iLCJzcGxpdCIsInNvbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwicGF0aG5hbWUiLCJwYXRobmFtZVBhcnRzIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJjcmVhdGUiLCJoYW5kbGVyIiwicHVzaCIsIm9mZiIsImVtaXQiLCJldnRzIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJvYmoiLCJfX2VzTW9kdWxlIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJwYXRoTG93ZXIiLCJsb2NhbGVMb3dlciIsImxlbmd0aCIsInN1YnN0ciIsInF1ZXJ5SW5kZXgiLCJoYXNoSW5kZXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsImdldExvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImdldFJvdXRlUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZ3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJnZXRSb3V0ZU1hdGNoZXIiLCJwYXJhbXMiLCJldmVyeSIsInBhcmFtIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsImFzUGF0aCIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpc0R5bmFtaWNSb3V0ZSIsInNlYXJjaFBhcmFtcyIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJoYXNoIiwic3RyaXBPcmlnaW4iLCJwcmVwYXJlVXJsQXMiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJwcmVwYXJlZFVybCIsInByZXBhcmVkQXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwicGFnZXMiLCJjbGVhblBhdGhuYW1lIiwiZGVub3JtYWxpemVQYWdlUGF0aCIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkQiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInN0YXR1cyIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsIl9wYXRobmFtZSIsIl9xdWVyeSIsIl9hcyIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50Iiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsImNvbXBvbmVudHMiLCJzZGMiLCJzZHIiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJpc1JlYWR5IiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwicGFyc2VSZWxhdGl2ZVVybCIsImNoYW5nZSIsImluaXRpYWwiLCJfX05fU1NHIiwiX19OX1NTUCIsImF1dG9FeHBvcnREeW5hbWljIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJnc3NwIiwiZ2lwIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZWxvYWQiLCJiYWNrIiwiaGlzdG9yeSIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJfc2hvdWxkUmVzb2x2ZUhyZWYiLCJsb2NhbGVDaGFuZ2UiLCJwYXJzZWRBcyIsImxvY2FsZVBhdGhSZXN1bHQiLCJkaWROYXZpZ2F0ZSIsIl90aGlzJGxvY2FsZXMiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJvbmx5QUhhc2hDaGFuZ2UiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3Iiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAiLCJfc2VsZiRfX05FWFRfREFUQV9fJHAyIiwiX29wdGlvbnMkc2Nyb2xsIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwibmV3VXJsIiwibmV3QXMiLCJfX05fUFJFVklFVyIsIm5vdEZvdW5kUm91dGUiLCJmZXRjaENvbXBvbmVudCIsImFwcENvbXAiLCJuZXh0IiwiaXNQcmVyZW5kZXJlZCIsInN0YXR1c0NvZGUiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJ4IiwieSIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsInNjcm9sbFRvIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsIl9pc1NzZyIsImlzU3NnIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJjYWNoZUtleSIsInJlc291cmNlS2V5IiwiY3R4IiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJmb3JtYXRVcmwiLCJxdWVyeXN0cmluZyIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzbGFzaGVkUHJvdG9jb2xzIiwidXJsT2JqIiwiYXV0aCIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJnbG9iYWxCYXNlIiwicmVzb2x2ZWRCYXNlIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsImlzTmFOIiwidXJsUXVlcnkiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJnIiwibSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJub3JtYWxpemVkUm91dGUiLCJzZWdtZW50cyIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJmcm9tQ2hhckNvZGUiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJSZWdFeHAiLCJuYW1lZFJlZ2V4IiwiZXhlY09uY2UiLCJnZXREaXNwbGF5TmFtZSIsImlzUmVzU2VudCIsIl9mb3JtYXRVcmwiLCJ1c2VkIiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsIl9BcHAkcHJvdG90eXBlIiwidXJsT2JqZWN0S2V5cyIsIlNQIiwibWVhc3VyZSIsIkluZGV4Iiwic3VjY2Vzc1N0b3JpZXNEYXRhIiwic29sdXRpb25zRGF0YSIsImdldFN0YXRpY1Byb3BzIiwicmVzX3N1Y2Nlc3NTdG9yaWVzIiwicmVzX3NvbHV0aW9ucyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BLGNBQWMsbUJBQU8sQ0FBQyxzRkFBK0I7O0FBRXJEO0FBQ0E7QUFDQTs7QUFFQTtB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QUFDQTs7Ozs7Ozs7Ozs7O0FDSGEsa0JBQWtCLE1BQU0sd0JBQXdCLGtCQUFrQiwyQkFBMkIscUJBQXFCLGdDQUFnQyxnQ0FBZ0MsbUNBQW1DLDRCQUE0QiwrQkFBK0Isb0JBQW9CLHlCQUF5QixVQUFVO0FBQ3BWLGlEOzs7Ozs7Ozs7O0FDREEseUdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUMseUU7Ozs7Ozs7Ozs7O0FDQUEsaUc7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7QUNBQSxlIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9SZWZlcmVuY2VzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB0ciBmcm9tIFwiLi4vLi4vbG9jYWxlcy90clwiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xvY2FsZXMvZW5cIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgUmVmZXJlbmNlcyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB7IGxvY2FsZSB9ID0gcm91dGVyO1xyXG4gIGNvbnN0IHQgPSBsb2NhbGUgPT09IFwiZW5cIiA/IGVuIDogdHI7XHJcblxyXG4gIGNvbnN0IFtyZWZlcmVuY2VzRGF0YSwgc2V0UmVmZXJlbmNlc0RhdGFdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goYCR7cHJvY2Vzcy5lbnYuSE9TVH0vYXBpLyR7cm91dGVyLmxvY2FsZX0vcmVmZXJlbmNlc2ApXHJcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIHNldFJlZmVyZW5jZXNEYXRhKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57dC5jb21tb25zLnJlZmVyZW5jZXN9PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e1wiY29sIFwiICsgc3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICB7cmVmZXJlbmNlc0RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pdGVtfVxyXG4gICAgICAgICAgICAgICAgc3JjPXtgYXNzZXRzL3JlZmVyZW5jZXMvJHtpdGVtLm5hbWV9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZWZlcmVuY2VzO1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9zdHlsZXMvU29sdXRpb25zLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB0ciBmcm9tIFwiLi4vLi4vbG9jYWxlcy90clwiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xvY2FsZXMvZW5cIjtcclxuXHJcbmNvbnN0IFNvbHV0aW9ucyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgbG9jYWxlIH0gPSByb3V0ZXI7XHJcbiAgY29uc3QgdCA9IGxvY2FsZSA9PT0gXCJlblwiID8gZW4gOiB0cjtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLXRpdGxlXCI+e3QuY29tbW9ucy5zb2x1dGlvbnN9PC9kaXY+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIHtkYXRhLnNvbHV0aW9ucy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy02IGNvbC14bC02XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItNFwiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLmNvdmVyfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2l0ZW0udGl0bGV9PC9oND5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj57aXRlbS5zdW1tYXJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmljb25zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRlY2hub2xvZ2llcy5tYXAoKGljb24sIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGljb24ubGluayA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpY29uLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzLmljb25zICsgXCIgXCIgKyBzdHlsZXMuaWNvbnNMaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aWNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2ljb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aWNvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pY29uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17aWNvbi5pbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aWNvbi5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2ljb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtcInJvdyBcIiArIHN0eWxlcy5tb3JlQm94fT5cclxuICAgICAgICA8TGluayBocmVmPVwiL2NvbnRhY3RcIj5cclxuICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLnBsdXNJY29ufT4rPC9hPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBsdXNDb250ZW50fT5cclxuICAgICAgICAgIDxoND57ZGF0YS5tb3JlLnRpdGxlfTwvaDQ+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5wbHVzVGV4dH0+e2RhdGEubW9yZS50ZXh0fTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU29sdXRpb25zO1xyXG4iLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL1N1Y2Nlc3NTdG9yaWVzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCB0ciBmcm9tIFwiLi4vLi4vbG9jYWxlcy90clwiO1xyXG5pbXBvcnQgZW4gZnJvbSBcIi4uLy4uL2xvY2FsZXMvZW5cIjtcclxuXHJcbmNvbnN0IFN1Y2Nlc3NTdG9yaWVzID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBsb2NhbGUgfSA9IHJvdXRlcjtcclxuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImVuXCIgPyBlbiA6IHRyO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tdGl0bGVcIj57dC5jb21tb25zLnN1Y2Nlc3NTdG9yaWVzfTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtcImNvbCBcIiArIHN0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuaXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PntpdGVtLnRpdGxlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uY29udGVudHMubWFwKChjb250ZW50LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHtjb250ZW50LnRleHR9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PjtcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFN1Y2Nlc3NTdG9yaWVzO1xyXG5cclxuLyoqL1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBnb1RvTWFpblBhZ2U6IFwiR28gdG8gbWFpbiBwYWdlXCIsXHJcbiAgICByZWFkTW9yZTogXCJyZWFkIG1vcmUg4oaSXCIsXHJcbiAgICB2aXNpdFdlYlNpdGU6IFwiVmlzaXQgd2ViIHNpdGVcIixcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBfNDA0OiBcIjQwNFwiLFxyXG4gICAgaW5kZXg6IFwiQXJkxLFjXCIsXHJcbiAgICBhYm91dDogXCJBYm91dFwiLFxyXG4gICAgdGVjaG5vbG9naWVzOiBcIlRlY2hub2xvZ2llc1wiLFxyXG4gICAgY29udGFjdDogXCJDb250YWN0XCIsXHJcbiAgfSxcclxuICBtZXRhOiB7XHJcbiAgICBfNDA0OiBcIjQwNFwiLFxyXG4gICAgaW5kZXg6IFwiQXJkxLFjXCIsXHJcbiAgICBhYm91dDogXCJBYm91dFwiLFxyXG4gICAgdGVjaG5vbG9naWVzOiBcIlRlY2hub2xvZ2llc1wiLFxyXG4gICAgY29udGFjdDogXCJDb250YWN0XCIsXHJcbiAgfSxcclxuICBjb21tb25zOiB7XHJcbiAgICBzbGlkZXJUZXh0OlxyXG4gICAgICBcIlBsYXRmb3JtcyBmb3IgbGFyZ2Utc2NhbGUgPGJyLz5Jb1Qgc2VydmljZXMgJiBkZWVwIGRldmljZSBtYW5hZ2VtZW50PGJyLz5cIixcclxuICAgIHBsdXMwOiBcImNvbm5lY3Rpdml0eSBtYW5hZ2VtZW50XCIsXHJcbiAgICBwbHVzMTogXCJzZXJ2aWNlIG9yY2hlc3RyYXRpb25cIixcclxuICAgIHBsdXMyOiBcImFydGlmaWNpYWwgaW50ZWxsaWdlbmNlXCIsXHJcbiAgICBwbHVzMzogXCJiaWcgZGF0YVwiLFxyXG4gICAgcGx1czQ6IFwidmVydGljYWwgc29sdXRpb25zXCIsXHJcbiAgICBicmFuZDFUZXh0OiBcIkVudGVycHJpc2UgTW9iaWxpdHkgTWFuYWdlbWVudCBhcyBhIFNlcnZpY2VcIixcclxuICAgIGJyYW5kMlRleHQ6IFwiRnVsbCBTdGFjayBJb1QgUGxhdGZvcm0gd2l0aCBFZGdlIENvbXB1dGluZ1wiLFxyXG4gICAgY29weXJpZ2h0OiBcIsKpIDIwMjEgQVJESUMgSW5jLlwiLFxyXG4gICAgcmVmZXJlbmNlczogXCJSZWZlcmVuY2VzXCIsXHJcbiAgICBzdWNjZXNzU3RvcmllczogXCJTdWNjZXNzIFN0b3JpZXNcIixcclxuICAgIHNvbHV0aW9uczogXCJTb2x1dGlvbnNcIixcclxuICB9LFxyXG4gIHBhZ2U6IHtcclxuICAgIF80MDQ6IHtcclxuICAgICAgdGl0bGU6IFwiNDA0IHwgUGFnZSBub3QgZm91bmRcIixcclxuICAgIH0sXHJcbiAgICBob21lOiB7XHJcbiAgICAgIHRpdGxlOiBcIkFyZMSxY1wiLFxyXG4gICAgICBzbHVnOiBcIi9cIixcclxuICAgIH0sXHJcbiAgICBhYm91dDoge1xyXG4gICAgICB0aXRsZTogXCJBYm91dFwiLFxyXG4gICAgICBzbHVnOiBcIi9hYm91dFwiLFxyXG4gICAgfSxcclxuICAgIHNvbHV0aW9uczoge1xyXG4gICAgICB0aXRsZTogXCJTb2x1dGlvbnNcIixcclxuICAgICAgc2x1ZzogXCIvc29sdXRpb25zXCIsXHJcbiAgICB9LFxyXG4gICAgdGVjaG5vbG9naWVzOiB7XHJcbiAgICAgIHRpdGxlOiBcIlRlY2hub2xvZ2llc1wiLFxyXG4gICAgICBzbHVnOiBcIi90ZWNobm9sb2dpZXNcIixcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcclxuICAgICAgc2x1ZzogXCIvY29udGFjdFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBnb1RvTWFpblBhZ2U6IFwiQW5hIHNheWZheWEgZ2l0XCIsXHJcbiAgICByZWFkTW9yZTogXCJkZXZhbcSxbsSxIG9rdSDihpJcIixcclxuICAgIHZpc2l0V2ViU2l0ZTogXCJXZWIgc2F5ZmFzxLFuxLEgeml5YXJldCBldFwiLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIF80MDQ6IFwiNDA0XCIsXHJcbiAgICBpbmRleDogXCJBcmTEsWNcIixcclxuICAgIGFib3V0OiBcIkhha2vEsW5kYVwiLFxyXG4gICAgdGVjaG5vbG9naWVzOiBcIlRla25vbG9qaWxlclwiLFxyXG4gICAgY29udGFjdDogXCLEsGxldGnFn2ltXCIsXHJcbiAgfSxcclxuICBtZXRhOiB7XHJcbiAgICBfNDA0OiBcIjQwNFwiLFxyXG4gICAgaW5kZXg6IFwiQXJkxLFjXCIsXHJcbiAgICBhYm91dDogXCJIYWtrxLFuZGFcIixcclxuICAgIHRlY2hub2xvZ2llczogXCJUZWtub2xvamlsZXJcIixcclxuICAgIGNvbnRhY3Q6IFwixLBsZXRpxZ9pbVwiLFxyXG4gIH0sXHJcbiAgY29tbW9uczoge1xyXG4gICAgc2xpZGVyVGV4dDpcclxuICAgICAgXCJCw7x5w7xrIMO2bMOnZWtsaSBJb1QgaGl6bWV0bGVyaTxici8+JiBkZXJpbiBjaWhheiB5w7ZuZXRpbWkgacOnaW4gcGxhdGZvcm1sYXI8YnIvPlwiLFxyXG4gICAgcGx1czA6IFwiYmHEn2xhbnTEsSB5w7ZuZXRpbWlcIixcclxuICAgIHBsdXMxOiBcImhpem1ldCBkw7x6ZW5sZW1lc2lcIixcclxuICAgIHBsdXMyOiBcInlhcGF5IHpla2FcIixcclxuICAgIHBsdXMzOiBcImLDvHnDvGsgdmVyaVwiLFxyXG4gICAgcGx1czQ6IFwiZGlrZXkgw6fDtnrDvG1sZXJcIixcclxuICAgIGJyYW5kMVRleHQ6IFwiSGl6bWV0IE9sYXJhayBLdXJ1bXNhbCBNb2JpbGl0ZSBZw7ZuZXRpbWlcIixcclxuICAgIGJyYW5kMlRleHQ6IFwiRWRnZSBDb21wdXRpbmcgaWxlIFRhbSBZxLHEn8SxbiBJb1QgUGxhdGZvcm11XCIsXHJcbiAgICBjb3B5cmlnaHQ6IFwiwqkgMjAyMSBBUkRJQyBJbmMuXCIsXHJcbiAgICByZWZlcmVuY2VzOiBcIlJlZmVyYW5zbGFyXCIsXHJcbiAgICBzdWNjZXNzU3RvcmllczogXCJCYcWfYXLEsSBIaWtheWVsZXJpXCIsXHJcbiAgICBzb2x1dGlvbnM6IFwiw4fDtnrDvG1sZXJcIixcclxuICB9LFxyXG4gIHBhZ2U6IHtcclxuICAgIF80MDQ6IHtcclxuICAgICAgdGl0bGU6IFwiNDA0IHwgU2F5ZmEgQnVsdW5hbWFkxLFcIixcclxuICAgIH0sXHJcbiAgICBob21lOiB7XHJcbiAgICAgIHRpdGxlOiBcIkFyZMSxY1wiLFxyXG4gICAgICBzbHVnOiBcIi9cIixcclxuICAgIH0sXHJcbiAgICBhYm91dDoge1xyXG4gICAgICB0aXRsZTogXCJIYWtrxLFuZGFcIixcclxuICAgICAgc2x1ZzogXCIvYWJvdXRcIixcclxuICAgIH0sXHJcbiAgICBzb2x1dGlvbnM6IHtcclxuICAgICAgdGl0bGU6IFwiw4fDtnrDvG1sZXJcIixcclxuICAgICAgc2x1ZzogXCIvc29sdXRpb25zXCIsXHJcbiAgICB9LFxyXG4gICAgdGVjaG5vbG9naWVzOiB7XHJcbiAgICAgIHRpdGxlOiBcIlRla25vbG9qaWxlclwiLFxyXG4gICAgICBzbHVnOiBcIi90ZWNobm9sb2dpZXNcIixcclxuICAgIH0sXHJcbiAgICBjb250YWN0OiB7XHJcbiAgICAgIHRpdGxlOiBcIsSwbGV0acWfaW1cIixcclxuICAgICAgc2x1ZzogXCIvY29udGFjdFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXJcIik7dmFyIF9yb3V0ZXIyPXJlcXVpcmUoXCIuL3JvdXRlclwiKTt2YXIgX3VzZUludGVyc2VjdGlvbj1yZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO2NvbnN0IHByZWZldGNoZWQ9e307ZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLGhyZWYsYXMsb3B0aW9ucyl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnfHwhcm91dGVyKXJldHVybjtpZighKDAsX3JvdXRlci5pc0xvY2FsVVJMKShocmVmKSlyZXR1cm47Ly8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4vLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbnJvdXRlci5wcmVmZXRjaChocmVmLGFzLG9wdGlvbnMpLmNhdGNoKGVycj0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXsvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG50aHJvdyBlcnI7fX0pO2NvbnN0IGN1ckxvY2FsZT1vcHRpb25zJiZ0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTpyb3V0ZXImJnJvdXRlci5sb2NhbGU7Ly8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbnByZWZldGNoZWRbaHJlZisnJScrYXMrKGN1ckxvY2FsZT8nJScrY3VyTG9jYWxlOicnKV09dHJ1ZTt9ZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KXtjb25zdHt0YXJnZXR9PWV2ZW50LmN1cnJlbnRUYXJnZXQ7cmV0dXJuIHRhcmdldCYmdGFyZ2V0IT09J19zZWxmJ3x8ZXZlbnQubWV0YUtleXx8ZXZlbnQuY3RybEtleXx8ZXZlbnQuc2hpZnRLZXl8fGV2ZW50LmFsdEtleXx8Ly8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbmV2ZW50Lm5hdGl2ZUV2ZW50JiZldmVudC5uYXRpdmVFdmVudC53aGljaD09PTI7fWZ1bmN0aW9uIGxpbmtDbGlja2VkKGUscm91dGVyLGhyZWYsYXMscmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGUpe2NvbnN0e25vZGVOYW1lfT1lLmN1cnJlbnRUYXJnZXQ7aWYobm9kZU5hbWU9PT0nQScmJihpc01vZGlmaWVkRXZlbnQoZSl8fCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKSl7Ly8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG5yZXR1cm47fWUucHJldmVudERlZmF1bHQoKTsvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbmlmKHNjcm9sbD09bnVsbCYmYXMuaW5kZXhPZignIycpPj0wKXtzY3JvbGw9ZmFsc2U7fS8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxucm91dGVyW3JlcGxhY2U/J3JlcGxhY2UnOidwdXNoJ10oaHJlZixhcyx7c2hhbGxvdyxsb2NhbGUsc2Nyb2xsfSk7fWZ1bmN0aW9uIExpbmsocHJvcHMpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJncyl7cmV0dXJuIG5ldyBFcnJvcihgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO30vLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkPXtocmVmOnRydWV9O2NvbnN0IHJlcXVpcmVkUHJvcHM9T2JqZWN0LmtleXMocmVxdWlyZWRQcm9wc0d1YXJkKTtyZXF1aXJlZFByb3BzLmZvckVhY2goa2V5PT57aWYoa2V5PT09J2hyZWYnKXtpZihwcm9wc1trZXldPT1udWxsfHx0eXBlb2YgcHJvcHNba2V5XSE9PSdzdHJpbmcnJiZ0eXBlb2YgcHJvcHNba2V5XSE9PSdvYmplY3QnKXt0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe2tleSxleHBlY3RlZDonYHN0cmluZ2Agb3IgYG9iamVjdGAnLGFjdHVhbDpwcm9wc1trZXldPT09bnVsbD8nbnVsbCc6dHlwZW9mIHByb3BzW2tleV19KTt9fWVsc2V7Ly8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbmNvbnN0IF89a2V5O319KTsvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkPXthczp0cnVlLHJlcGxhY2U6dHJ1ZSxzY3JvbGw6dHJ1ZSxzaGFsbG93OnRydWUscGFzc0hyZWY6dHJ1ZSxwcmVmZXRjaDp0cnVlLGxvY2FsZTp0cnVlfTtjb25zdCBvcHRpb25hbFByb3BzPU9iamVjdC5rZXlzKG9wdGlvbmFsUHJvcHNHdWFyZCk7b3B0aW9uYWxQcm9wcy5mb3JFYWNoKGtleT0+e2NvbnN0IHZhbFR5cGU9dHlwZW9mIHByb3BzW2tleV07aWYoa2V5PT09J2FzJyl7aWYocHJvcHNba2V5XSYmdmFsVHlwZSE9PSdzdHJpbmcnJiZ2YWxUeXBlIT09J29iamVjdCcpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgc3RyaW5nYCBvciBgb2JqZWN0YCcsYWN0dWFsOnZhbFR5cGV9KTt9fWVsc2UgaWYoa2V5PT09J2xvY2FsZScpe2lmKHByb3BzW2tleV0mJnZhbFR5cGUhPT0nc3RyaW5nJyl7dGhyb3cgY3JlYXRlUHJvcEVycm9yKHtrZXksZXhwZWN0ZWQ6J2BzdHJpbmdgJyxhY3R1YWw6dmFsVHlwZX0pO319ZWxzZSBpZihrZXk9PT0ncmVwbGFjZSd8fGtleT09PSdzY3JvbGwnfHxrZXk9PT0nc2hhbGxvdyd8fGtleT09PSdwYXNzSHJlZid8fGtleT09PSdwcmVmZXRjaCcpe2lmKHByb3BzW2tleV0hPW51bGwmJnZhbFR5cGUhPT0nYm9vbGVhbicpe3Rocm93IGNyZWF0ZVByb3BFcnJvcih7a2V5LGV4cGVjdGVkOidgYm9vbGVhbmAnLGFjdHVhbDp2YWxUeXBlfSk7fX1lbHNley8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5jb25zdCBfPWtleTt9fSk7Ly8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuY29uc3QgaGFzV2FybmVkPV9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7aWYocHJvcHMucHJlZmV0Y2gmJiFoYXNXYXJuZWQuY3VycmVudCl7aGFzV2FybmVkLmN1cnJlbnQ9dHJ1ZTtjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7fX1jb25zdCBwPXByb3BzLnByZWZldGNoIT09ZmFsc2U7Y29uc3Qgcm91dGVyPSgwLF9yb3V0ZXIyLnVzZVJvdXRlcikoKTtjb25zdHtocmVmLGFzfT1fcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57Y29uc3RbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPSgwLF9yb3V0ZXIucmVzb2x2ZUhyZWYpKHJvdXRlcixwcm9wcy5ocmVmLHRydWUpO3JldHVybntocmVmOnJlc29sdmVkSHJlZixhczpwcm9wcy5hcz8oMCxfcm91dGVyLnJlc29sdmVIcmVmKShyb3V0ZXIscHJvcHMuYXMpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZn07fSxbcm91dGVyLHByb3BzLmhyZWYscHJvcHMuYXNdKTtsZXR7Y2hpbGRyZW4scmVwbGFjZSxzaGFsbG93LHNjcm9sbCxsb2NhbGV9PXByb3BzOy8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuaWYodHlwZW9mIGNoaWxkcmVuPT09J3N0cmluZycpe2NoaWxkcmVuPS8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiYVwiLG51bGwsY2hpbGRyZW4pO30vLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbmxldCBjaGlsZDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe3RyeXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNhdGNoKGVycil7dGhyb3cgbmV3IEVycm9yKGBNdWx0aXBsZSBjaGlsZHJlbiB3ZXJlIHBhc3NlZCB0byA8TGluaz4gd2l0aCBcXGBocmVmXFxgIG9mIFxcYCR7cHJvcHMuaHJlZn1cXGAgYnV0IG9ubHkgb25lIGNoaWxkIGlzIHN1cHBvcnRlZCBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9saW5rLW11bHRpcGxlLWNoaWxkcmVuYCsodHlwZW9mIHdpbmRvdyE9PSd1bmRlZmluZWQnP1wiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIjonJykpO319ZWxzZXtjaGlsZD1fcmVhY3QuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7fWNvbnN0IGNoaWxkUmVmPWNoaWxkJiZ0eXBlb2YgY2hpbGQ9PT0nb2JqZWN0JyYmY2hpbGQucmVmO2NvbnN0W3NldEludGVyc2VjdGlvblJlZixpc1Zpc2libGVdPSgwLF91c2VJbnRlcnNlY3Rpb24udXNlSW50ZXJzZWN0aW9uKSh7cm9vdE1hcmdpbjonMjAwcHgnfSk7Y29uc3Qgc2V0UmVmPV9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKGVsPT57c2V0SW50ZXJzZWN0aW9uUmVmKGVsKTtpZihjaGlsZFJlZil7aWYodHlwZW9mIGNoaWxkUmVmPT09J2Z1bmN0aW9uJyljaGlsZFJlZihlbCk7ZWxzZSBpZih0eXBlb2YgY2hpbGRSZWY9PT0nb2JqZWN0Jyl7Y2hpbGRSZWYuY3VycmVudD1lbDt9fX0sW2NoaWxkUmVmLHNldEludGVyc2VjdGlvblJlZl0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57Y29uc3Qgc2hvdWxkUHJlZmV0Y2g9aXNWaXNpYmxlJiZwJiYoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpO2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTtjb25zdCBpc1ByZWZldGNoZWQ9cHJlZmV0Y2hlZFtocmVmKyclJythcysoY3VyTG9jYWxlPyclJytjdXJMb2NhbGU6JycpXTtpZihzaG91bGRQcmVmZXRjaCYmIWlzUHJlZmV0Y2hlZCl7cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse2xvY2FsZTpjdXJMb2NhbGV9KTt9fSxbYXMsaHJlZixpc1Zpc2libGUsbG9jYWxlLHAscm91dGVyXSk7Y29uc3QgY2hpbGRQcm9wcz17cmVmOnNldFJlZixvbkNsaWNrOmU9PntpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2s9PT0nZnVuY3Rpb24nKXtjaGlsZC5wcm9wcy5vbkNsaWNrKGUpO31pZighZS5kZWZhdWx0UHJldmVudGVkKXtsaW5rQ2xpY2tlZChlLHJvdXRlcixocmVmLGFzLHJlcGxhY2Usc2hhbGxvdyxzY3JvbGwsbG9jYWxlKTt9fX07Y2hpbGRQcm9wcy5vbk1vdXNlRW50ZXI9ZT0+e2lmKCEoMCxfcm91dGVyLmlzTG9jYWxVUkwpKGhyZWYpKXJldHVybjtpZihjaGlsZC5wcm9wcyYmdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcj09PSdmdW5jdGlvbicpe2NoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKTt9cHJlZmV0Y2gocm91dGVyLGhyZWYsYXMse3ByaW9yaXR5OnRydWV9KTt9Oy8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG5pZihwcm9wcy5wYXNzSHJlZnx8Y2hpbGQudHlwZT09PSdhJyYmISgnaHJlZidpbiBjaGlsZC5wcm9wcykpe2NvbnN0IGN1ckxvY2FsZT10eXBlb2YgbG9jYWxlIT09J3VuZGVmaW5lZCc/bG9jYWxlOnJvdXRlciYmcm91dGVyLmxvY2FsZTsvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcbmNvbnN0IGxvY2FsZURvbWFpbj1yb3V0ZXImJnJvdXRlci5pc0xvY2FsZURvbWFpbiYmKDAsX3JvdXRlci5nZXREb21haW5Mb2NhbGUpKGFzLGN1ckxvY2FsZSxyb3V0ZXImJnJvdXRlci5sb2NhbGVzLHJvdXRlciYmcm91dGVyLmRvbWFpbkxvY2FsZXMpO2NoaWxkUHJvcHMuaHJlZj1sb2NhbGVEb21haW58fCgwLF9yb3V0ZXIuYWRkQmFzZVBhdGgpKCgwLF9yb3V0ZXIuYWRkTG9jYWxlKShhcyxjdXJMb2NhbGUscm91dGVyJiZyb3V0ZXIuZGVmYXVsdExvY2FsZSkpO31yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGNoaWxkLGNoaWxkUHJvcHMpO312YXIgX2RlZmF1bHQ9TGluaztleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g9cmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7ZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaD12b2lkIDA7LyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKXtyZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpJiZwYXRoIT09Jy8nP3BhdGguc2xpY2UoMCwtMSk6cGF0aDt9LyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9cHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIP3BhdGg9PntpZigvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSl7cmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO31lbHNlIGlmKHBhdGguZW5kc1dpdGgoJy8nKSl7cmV0dXJuIHBhdGg7fWVsc2V7cmV0dXJuIHBhdGgrJy8nO319OnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO2V4cG9ydHMubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g9bm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1ub3JtYWxpemUtdHJhaWxpbmctc2xhc2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2s9ZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrPXZvaWQgMDtjb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrPXR5cGVvZiBzZWxmIT09J3VuZGVmaW5lZCcmJnNlbGYucmVxdWVzdElkbGVDYWxsYmFja3x8ZnVuY3Rpb24oY2Ipe2xldCBzdGFydD1EYXRlLm5vdygpO3JldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Y2Ioe2RpZFRpbWVvdXQ6ZmFsc2UsdGltZVJlbWFpbmluZzpmdW5jdGlvbigpe3JldHVybiBNYXRoLm1heCgwLDUwLShEYXRlLm5vdygpLXN0YXJ0KSk7fX0pO30sMSk7fTtleHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2s9cmVxdWVzdElkbGVDYWxsYmFjaztjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2s9dHlwZW9mIHNlbGYhPT0ndW5kZWZpbmVkJyYmc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2t8fGZ1bmN0aW9uKGlkKXtyZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTt9O2V4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrPWNhbmNlbElkbGVDYWxsYmFjaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5tYXJrQXNzZXRFcnJvcj1tYXJrQXNzZXRFcnJvcjtleHBvcnRzLmlzQXNzZXRFcnJvcj1pc0Fzc2V0RXJyb3I7ZXhwb3J0cy5nZXRDbGllbnRCdWlsZE1hbmlmZXN0PWdldENsaWVudEJ1aWxkTWFuaWZlc3Q7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZT1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO3ZhciBfcmVxdWVzdElkbGVDYWxsYmFjaz1yZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7Ly8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZPTM4MDA7ZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksbWFwLGdlbmVyYXRvcil7bGV0IGVudHJ5PW1hcC5nZXQoa2V5KTtpZihlbnRyeSl7aWYoJ2Z1dHVyZSdpbiBlbnRyeSl7cmV0dXJuIGVudHJ5LmZ1dHVyZTt9cmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7fWxldCByZXNvbHZlcjtjb25zdCBwcm9tPW5ldyBQcm9taXNlKHJlc29sdmU9PntyZXNvbHZlcj1yZXNvbHZlO30pO21hcC5zZXQoa2V5LGVudHJ5PXtyZXNvbHZlOnJlc29sdmVyLGZ1dHVyZTpwcm9tfSk7cmV0dXJuIGdlbmVyYXRvcj8vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG5nZW5lcmF0b3IoKS50aGVuKHZhbHVlPT4ocmVzb2x2ZXIodmFsdWUpLHZhbHVlKSk6cHJvbTt9ZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluayl7dHJ5e2xpbms9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO3JldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcbi8vIHdpdGggcmVsTGlzdC5zdXBwb3J0XG4hIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCYmISFkb2N1bWVudC5kb2N1bWVudE1vZGV8fGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7fWNhdGNoKF91bnVzZWQpe3JldHVybiBmYWxzZTt9fWNvbnN0IGNhblByZWZldGNoPWhhc1ByZWZldGNoKCk7ZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZixhcyxsaW5rKXtyZXR1cm4gbmV3IFByb21pc2UoKHJlcyxyZWopPT57aWYoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSl7cmV0dXJuIHJlcygpO31saW5rPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsOlxuaWYoYXMpbGluay5hcz1hcztsaW5rLnJlbD1gcHJlZmV0Y2hgO2xpbmsuY3Jvc3NPcmlnaW49cHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTjtsaW5rLm9ubG9hZD1yZXM7bGluay5vbmVycm9yPXJlajsvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxubGluay5ocmVmPWhyZWY7ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTt9KTt9Y29uc3QgQVNTRVRfTE9BRF9FUlJPUj1TeW1ib2woJ0FTU0VUX0xPQURfRVJST1InKTsvLyBUT0RPOiB1bmV4cG9ydFxuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVycixBU1NFVF9MT0FEX0VSUk9SLHt9KTt9ZnVuY3Rpb24gaXNBc3NldEVycm9yKGVycil7cmV0dXJuIGVyciYmQVNTRVRfTE9BRF9FUlJPUiBpbiBlcnI7fWZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsc2NyaXB0KXtyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUscmVqZWN0KT0+e3NjcmlwdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTsvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuLy8gMS4gU2V0dXAgc3VjY2Vzcy9mYWlsdXJlIGhvb2tzIGluIGNhc2UgdGhlIGJyb3dzZXIgc3luY2hyb25vdXNseVxuLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG5zY3JpcHQub25sb2FkPXJlc29sdmU7c2NyaXB0Lm9uZXJyb3I9KCk9PnJlamVjdChtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHNjcmlwdDogJHtzcmN9YCkpKTsvLyAyLiBDb25maWd1cmUgdGhlIGNyb3NzLW9yaWdpbiBhdHRyaWJ1dGUgYmVmb3JlIHNldHRpbmcgYHNyY2AgaW4gY2FzZSB0aGVcbi8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuc2NyaXB0LmNyb3NzT3JpZ2luPXByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47Ly8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcbi8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0Llxuc2NyaXB0LnNyYz1zcmM7ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO30pO30vLyBSZXNvbHZlIGEgcHJvbWlzZSB0aGF0IHRpbWVzIG91dCBhZnRlciBnaXZlbiBhbW91bnQgb2YgbWlsbGlzZWNvbmRzLlxuZnVuY3Rpb24gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChwLG1zLGVycil7cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLHJlamVjdCk9PntsZXQgY2FuY2VsbGVkPWZhbHNlO3AudGhlbihyPT57Ly8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxuY2FuY2VsbGVkPXRydWU7cmVzb2x2ZShyKTt9KS5jYXRjaChyZWplY3QpOygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRUaW1lb3V0KCgpPT57aWYoIWNhbmNlbGxlZCl7cmVqZWN0KGVycik7fX0sbXMpKTt9KTt9Ly8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmZ1bmN0aW9uIGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKXtpZihzZWxmLl9fQlVJTERfTUFOSUZFU1Qpe3JldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTt9Y29uc3Qgb25CdWlsZE1hbmlmZXN0PW5ldyBQcm9taXNlKHJlc29sdmU9PnsvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG5jb25zdCBjYj1zZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0I7c2VsZi5fX0JVSUxEX01BTklGRVNUX0NCPSgpPT57cmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO2NiJiZjYigpO307fSk7cmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LE1TX01BWF9JRExFX0RFTEFZLG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcignRmFpbGVkIHRvIGxvYWQgY2xpZW50IGJ1aWxkIG1hbmlmZXN0JykpKTt9ZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtzY3JpcHRzOlthc3NldFByZWZpeCsnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnK2VuY29kZVVSSSgoMCxfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlLmRlZmF1bHQpKHJvdXRlLCcuanMnKSldLC8vIFN0eWxlcyBhcmUgaGFuZGxlZCBieSBgc3R5bGUtbG9hZGVyYCBpbiBkZXZlbG9wbWVudDpcbmNzczpbXX0pO31yZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4obWFuaWZlc3Q9PntpZighKHJvdXRlIGluIG1hbmlmZXN0KSl7dGhyb3cgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9va3VwIHJvdXRlOiAke3JvdXRlfWApKTt9Y29uc3QgYWxsRmlsZXM9bWFuaWZlc3Rbcm91dGVdLm1hcChlbnRyeT0+YXNzZXRQcmVmaXgrJy9fbmV4dC8nK2VuY29kZVVSSShlbnRyeSkpO3JldHVybntzY3JpcHRzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuanMnKSksY3NzOmFsbEZpbGVzLmZpbHRlcih2PT52LmVuZHNXaXRoKCcuY3NzJykpfTt9KTt9ZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpe2NvbnN0IGVudHJ5cG9pbnRzPW5ldyBNYXAoKTtjb25zdCBsb2FkZWRTY3JpcHRzPW5ldyBNYXAoKTtjb25zdCBzdHlsZVNoZWV0cz1uZXcgTWFwKCk7Y29uc3Qgcm91dGVzPW5ldyBNYXAoKTtmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKXtsZXQgcHJvbT1sb2FkZWRTY3JpcHRzLmdldChzcmMpO2lmKHByb20pe3JldHVybiBwcm9tO30vLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG5pZihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBzY3JpcHRbc3JjXj1cIiR7c3JjfVwiXWApKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7fWxvYWRlZFNjcmlwdHMuc2V0KHNyYyxwcm9tPWFwcGVuZFNjcmlwdChzcmMpKTtyZXR1cm4gcHJvbTt9ZnVuY3Rpb24gZmV0Y2hTdHlsZVNoZWV0KGhyZWYpe2xldCBwcm9tPXN0eWxlU2hlZXRzLmdldChocmVmKTtpZihwcm9tKXtyZXR1cm4gcHJvbTt9c3R5bGVTaGVldHMuc2V0KGhyZWYscHJvbT1mZXRjaChocmVmKS50aGVuKHJlcz0+e2lmKCFyZXMub2spe3Rocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApO31yZXR1cm4gcmVzLnRleHQoKS50aGVuKHRleHQ9Pih7aHJlZjpocmVmLGNvbnRlbnQ6dGV4dH0pKTt9KS5jYXRjaChlcnI9Pnt0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO30pKTtyZXR1cm4gcHJvbTt9cmV0dXJue3doZW5FbnRyeXBvaW50KHJvdXRlKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxlbnRyeXBvaW50cyk7fSxvbkVudHJ5cG9pbnQocm91dGUsZXhlY3V0ZSl7UHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oZm49PmZuKCkpLnRoZW4oZXhwb3J0cz0+KHtjb21wb25lbnQ6ZXhwb3J0cyYmZXhwb3J0cy5kZWZhdWx0fHxleHBvcnRzLGV4cG9ydHM6ZXhwb3J0c30pLGVycj0+KHtlcnJvcjplcnJ9KSkudGhlbihpbnB1dD0+e2NvbnN0IG9sZD1lbnRyeXBvaW50cy5nZXQocm91dGUpO2VudHJ5cG9pbnRzLnNldChyb3V0ZSxpbnB1dCk7aWYob2xkJiYncmVzb2x2ZSdpbiBvbGQpb2xkLnJlc29sdmUoaW5wdXQpO30pO30sbG9hZFJvdXRlKHJvdXRlLHByZWZldGNoKXtyZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSxyb3V0ZXMsKCk9PntyZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LHJvdXRlKS50aGVuKCh7c2NyaXB0cyxjc3N9KT0+e3JldHVybiBQcm9taXNlLmFsbChbZW50cnlwb2ludHMuaGFzKHJvdXRlKT9bXTpQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpXSk7fSkudGhlbihyZXM9PntyZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbihlbnRyeXBvaW50PT4oe2VudHJ5cG9pbnQsc3R5bGVzOnJlc1sxXX0pKTt9KSxNU19NQVhfSURMRV9ERUxBWSxtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYFJvdXRlIGRpZCBub3QgY29tcGxldGUgbG9hZGluZzogJHtyb3V0ZX1gKSkpLnRoZW4oKHtlbnRyeXBvaW50LHN0eWxlc30pPT57Y29uc3QgcmVzPU9iamVjdC5hc3NpZ24oe3N0eWxlczpzdHlsZXN9LGVudHJ5cG9pbnQpO3JldHVybidlcnJvcidpbiBlbnRyeXBvaW50P2VudHJ5cG9pbnQ6cmVzO30pLmNhdGNoKGVycj0+e2lmKHByZWZldGNoKXsvLyB3ZSBkb24ndCB3YW50IHRvIGNhY2hlIGVycm9ycyBkdXJpbmcgcHJlZmV0Y2hcbnRocm93IGVycjt9cmV0dXJue2Vycm9yOmVycn07fSk7fSk7fSxwcmVmZXRjaChyb3V0ZSl7Ly8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxuLy8gTGljZW5zZTogQXBhY2hlIDIuMFxubGV0IGNuO2lmKGNuPW5hdmlnYXRvci5jb25uZWN0aW9uKXsvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbmlmKGNuLnNhdmVEYXRhfHwvMmcvLnRlc3QoY24uZWZmZWN0aXZlVHlwZSkpcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO31yZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCxyb3V0ZSkudGhlbihvdXRwdXQ9PlByb21pc2UuYWxsKGNhblByZWZldGNoP291dHB1dC5zY3JpcHRzLm1hcChzY3JpcHQ9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwnc2NyaXB0JykpOltdKSkudGhlbigoKT0+eygwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSx0cnVlKS5jYXRjaCgoKT0+e30pKTt9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuKCk9Pnt9KTt9fTt9dmFyIF9kZWZhdWx0PWNyZWF0ZVJvdXRlTG9hZGVyO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLWxvYWRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ9cmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZFwiKTt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy51c2VSb3V0ZXI9dXNlUm91dGVyO2V4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlPW1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZTtleHBvcnRzLmNyZWF0ZVJvdXRlcj1leHBvcnRzLndpdGhSb3V0ZXI9ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcjI9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtleHBvcnRzLlJvdXRlcj1fcm91dGVyMi5kZWZhdWx0O2V4cG9ydHMuTmV4dFJvdXRlcj1fcm91dGVyMi5OZXh0Um91dGVyO3ZhciBfcm91dGVyQ29udGV4dD1yZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0XCIpO3ZhciBfd2l0aFJvdXRlcj1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3dpdGgtcm91dGVyXCIpKTtleHBvcnRzLndpdGhSb3V0ZXI9X3dpdGhSb3V0ZXIuZGVmYXVsdDsvKiBnbG9iYWwgd2luZG93ICovY29uc3Qgc2luZ2xldG9uUm91dGVyPXtyb3V0ZXI6bnVsbCwvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxucmVhZHlDYWxsYmFja3M6W10scmVhZHkoY2Ipe2lmKHRoaXMucm91dGVyKXJldHVybiBjYigpO2lmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7dGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTt9fX07Ly8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHM9WydwYXRobmFtZScsJ3JvdXRlJywncXVlcnknLCdhc1BhdGgnLCdjb21wb25lbnRzJywnaXNGYWxsYmFjaycsJ2Jhc2VQYXRoJywnbG9jYWxlJywnbG9jYWxlcycsJ2RlZmF1bHRMb2NhbGUnLCdpc1JlYWR5JywnaXNQcmV2aWV3JywnaXNMb2NhbGVEb21haW4nLCdkb21haW5Mb2NhbGVzJ107Y29uc3Qgcm91dGVyRXZlbnRzPVsncm91dGVDaGFuZ2VTdGFydCcsJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywncm91dGVDaGFuZ2VFcnJvcicsJ2hhc2hDaGFuZ2VTdGFydCcsJ2hhc2hDaGFuZ2VDb21wbGV0ZSddO2NvbnN0IGNvcmVNZXRob2RGaWVsZHM9WydwdXNoJywncmVwbGFjZScsJ3JlbG9hZCcsJ2JhY2snLCdwcmVmZXRjaCcsJ2JlZm9yZVBvcFN0YXRlJ107Ly8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwnZXZlbnRzJyx7Z2V0KCl7cmV0dXJuIF9yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzO319KTt1cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKGZpZWxkPT57Ly8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSB3ZSBuZWVkIHRvIHJldHVyblxuLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4vLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbi8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLGZpZWxkLHtnZXQoKXtjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF07fX0pO30pO2NvcmVNZXRob2RGaWVsZHMuZm9yRWFjaChmaWVsZD0+ey8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG47c2luZ2xldG9uUm91dGVyW2ZpZWxkXT0oLi4uYXJncyk9Pntjb25zdCByb3V0ZXI9Z2V0Um91dGVyKCk7cmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncyk7fTt9KTtyb3V0ZXJFdmVudHMuZm9yRWFjaChldmVudD0+e3NpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e19yb3V0ZXIyLmRlZmF1bHQuZXZlbnRzLm9uKGV2ZW50LCguLi5hcmdzKT0+e2NvbnN0IGV2ZW50RmllbGQ9YG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO2NvbnN0IF9zaW5nbGV0b25Sb3V0ZXI9c2luZ2xldG9uUm91dGVyO2lmKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pe3RyeXtfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO31jYXRjaChlcnIpe2NvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YCk7Y29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTt9fX0pO30pO30pO2Z1bmN0aW9uIGdldFJvdXRlcigpe2lmKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKXtjb25zdCBtZXNzYWdlPSdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJysnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31yZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Ly8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG52YXIgX2RlZmF1bHQ9c2luZ2xldG9uUm91dGVyOy8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7ZnVuY3Rpb24gdXNlUm91dGVyKCl7cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7fS8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiBiZSB1c2VkIGluc2lkZSB0aGUgc2VydmVyLlxuY29uc3QgY3JlYXRlUm91dGVyPSguLi5hcmdzKT0+e3NpbmdsZXRvblJvdXRlci5yb3V0ZXI9bmV3IF9yb3V0ZXIyLmRlZmF1bHQoLi4uYXJncyk7c2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goY2I9PmNiKCkpO3NpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcz1bXTtyZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlcjt9Oy8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydHMuY3JlYXRlUm91dGVyPWNyZWF0ZVJvdXRlcjtmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKXtjb25zdCBfcm91dGVyPXJvdXRlcjtjb25zdCBpbnN0YW5jZT17fTtmb3IoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpe2lmKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XT09PSdvYmplY3QnKXtpbnN0YW5jZVtwcm9wZXJ0eV09T2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKT9bXTp7fSxfcm91dGVyW3Byb3BlcnR5XSk7Ly8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbmNvbnRpbnVlO31pbnN0YW5jZVtwcm9wZXJ0eV09X3JvdXRlcltwcm9wZXJ0eV07fS8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbmluc3RhbmNlLmV2ZW50cz1fcm91dGVyMi5kZWZhdWx0LmV2ZW50cztjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goZmllbGQ9PntpbnN0YW5jZVtmaWVsZF09KC4uLmFyZ3MpPT57cmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO307fSk7cmV0dXJuIGluc3RhbmNlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnVzZUludGVyc2VjdGlvbj11c2VJbnRlcnNlY3Rpb247dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7dmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrPXJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtjb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcj10eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIhPT0ndW5kZWZpbmVkJztmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oe3Jvb3RNYXJnaW4sZGlzYWJsZWR9KXtjb25zdCBpc0Rpc2FibGVkPWRpc2FibGVkfHwhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7Y29uc3QgdW5vYnNlcnZlPSgwLF9yZWFjdC51c2VSZWYpKCk7Y29uc3RbdmlzaWJsZSxzZXRWaXNpYmxlXT0oMCxfcmVhY3QudXNlU3RhdGUpKGZhbHNlKTtjb25zdCBzZXRSZWY9KDAsX3JlYWN0LnVzZUNhbGxiYWNrKShlbD0+e2lmKHVub2JzZXJ2ZS5jdXJyZW50KXt1bm9ic2VydmUuY3VycmVudCgpO3Vub2JzZXJ2ZS5jdXJyZW50PXVuZGVmaW5lZDt9aWYoaXNEaXNhYmxlZHx8dmlzaWJsZSlyZXR1cm47aWYoZWwmJmVsLnRhZ05hbWUpe3Vub2JzZXJ2ZS5jdXJyZW50PW9ic2VydmUoZWwsaXNWaXNpYmxlPT5pc1Zpc2libGUmJnNldFZpc2libGUoaXNWaXNpYmxlKSx7cm9vdE1hcmdpbn0pO319LFtpc0Rpc2FibGVkLHJvb3RNYXJnaW4sdmlzaWJsZV0pOygwLF9yZWFjdC51c2VFZmZlY3QpKCgpPT57aWYoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKXtpZighdmlzaWJsZSl7Y29uc3QgaWRsZUNhbGxiYWNrPSgwLF9yZXF1ZXN0SWRsZUNhbGxiYWNrLnJlcXVlc3RJZGxlQ2FsbGJhY2spKCgpPT5zZXRWaXNpYmxlKHRydWUpKTtyZXR1cm4oKT0+KDAsX3JlcXVlc3RJZGxlQ2FsbGJhY2suY2FuY2VsSWRsZUNhbGxiYWNrKShpZGxlQ2FsbGJhY2spO319fSxbdmlzaWJsZV0pO3JldHVybltzZXRSZWYsdmlzaWJsZV07fWZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCxjYWxsYmFjayxvcHRpb25zKXtjb25zdHtpZCxvYnNlcnZlcixlbGVtZW50c309Y3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7ZWxlbWVudHMuc2V0KGVsZW1lbnQsY2FsbGJhY2spO29ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7cmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpe2VsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7Ly8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuaWYoZWxlbWVudHMuc2l6ZT09PTApe29ic2VydmVyLmRpc2Nvbm5lY3QoKTtvYnNlcnZlcnMuZGVsZXRlKGlkKTt9fTt9Y29uc3Qgb2JzZXJ2ZXJzPW5ldyBNYXAoKTtmdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKXtjb25zdCBpZD1vcHRpb25zLnJvb3RNYXJnaW58fCcnO2xldCBpbnN0YW5jZT1vYnNlcnZlcnMuZ2V0KGlkKTtpZihpbnN0YW5jZSl7cmV0dXJuIGluc3RhbmNlO31jb25zdCBlbGVtZW50cz1uZXcgTWFwKCk7Y29uc3Qgb2JzZXJ2ZXI9bmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGVudHJpZXM9PntlbnRyaWVzLmZvckVhY2goZW50cnk9Pntjb25zdCBjYWxsYmFjaz1lbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtjb25zdCBpc1Zpc2libGU9ZW50cnkuaXNJbnRlcnNlY3Rpbmd8fGVudHJ5LmludGVyc2VjdGlvblJhdGlvPjA7aWYoY2FsbGJhY2smJmlzVmlzaWJsZSl7Y2FsbGJhY2soaXNWaXNpYmxlKTt9fSk7fSxvcHRpb25zKTtvYnNlcnZlcnMuc2V0KGlkLGluc3RhbmNlPXtpZCxvYnNlcnZlcixlbGVtZW50c30pO3JldHVybiBpbnN0YW5jZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9d2l0aFJvdXRlcjt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX3JvdXRlcj1yZXF1aXJlKFwiLi9yb3V0ZXJcIik7ZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCl7ZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpe3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe3JvdXRlcjooMCxfcm91dGVyLnVzZVJvdXRlcikoKX0scHJvcHMpKTt9V2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcy8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbjtXaXRoUm91dGVyV3JhcHBlci5vcmlnR2V0SW5pdGlhbFByb3BzPUNvbXBvc2VkQ29tcG9uZW50Lm9yaWdHZXRJbml0aWFsUHJvcHM7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe2NvbnN0IG5hbWU9Q29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWV8fENvbXBvc2VkQ29tcG9uZW50Lm5hbWV8fCdVbmtub3duJztXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZT1gd2l0aFJvdXRlcigke25hbWV9KWA7fXJldHVybiBXaXRoUm91dGVyV3JhcHBlcjt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD13aXRoLXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRldGVjdERvbWFpbkxvY2FsZT1kZXRlY3REb21haW5Mb2NhbGU7ZnVuY3Rpb24gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkl0ZW1zLGhvc3RuYW1lLGRldGVjdGVkTG9jYWxlKXtsZXQgZG9tYWluSXRlbTtpZihkb21haW5JdGVtcyl7aWYoZGV0ZWN0ZWRMb2NhbGUpe2RldGVjdGVkTG9jYWxlPWRldGVjdGVkTG9jYWxlLnRvTG93ZXJDYXNlKCk7fWZvcihjb25zdCBpdGVtIG9mIGRvbWFpbkl0ZW1zKXt2YXIgX2l0ZW0kZG9tYWluLF9pdGVtJGxvY2FsZXM7Ly8gcmVtb3ZlIHBvcnQgaWYgcHJlc2VudFxuY29uc3QgZG9tYWluSG9zdG5hbWU9KF9pdGVtJGRvbWFpbj1pdGVtLmRvbWFpbik9PW51bGw/dm9pZCAwOl9pdGVtJGRvbWFpbi5zcGxpdCgnOicpWzBdLnRvTG93ZXJDYXNlKCk7aWYoaG9zdG5hbWU9PT1kb21haW5Ib3N0bmFtZXx8ZGV0ZWN0ZWRMb2NhbGU9PT1pdGVtLmRlZmF1bHRMb2NhbGUudG9Mb3dlckNhc2UoKXx8KF9pdGVtJGxvY2FsZXM9aXRlbS5sb2NhbGVzKSE9bnVsbCYmX2l0ZW0kbG9jYWxlcy5zb21lKGxvY2FsZT0+bG9jYWxlLnRvTG93ZXJDYXNlKCk9PT1kZXRlY3RlZExvY2FsZSkpe2RvbWFpbkl0ZW09aXRlbTticmVhazt9fX1yZXR1cm4gZG9tYWluSXRlbTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZXRlY3QtZG9tYWluLWxvY2FsZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZUxvY2FsZVBhdGg9bm9ybWFsaXplTG9jYWxlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lLGxvY2FsZXMpe2xldCBkZXRlY3RlZExvY2FsZTsvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbmNvbnN0IHBhdGhuYW1lUGFydHM9cGF0aG5hbWUuc3BsaXQoJy8nKTsobG9jYWxlc3x8W10pLnNvbWUobG9jYWxlPT57aWYocGF0aG5hbWVQYXJ0c1sxXS50b0xvd2VyQ2FzZSgpPT09bG9jYWxlLnRvTG93ZXJDYXNlKCkpe2RldGVjdGVkTG9jYWxlPWxvY2FsZTtwYXRobmFtZVBhcnRzLnNwbGljZSgxLDEpO3BhdGhuYW1lPXBhdGhuYW1lUGFydHMuam9pbignLycpfHwnLyc7cmV0dXJuIHRydWU7fXJldHVybiBmYWxzZTt9KTtyZXR1cm57cGF0aG5hbWUsZGV0ZWN0ZWRMb2NhbGV9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9bWl0dDsvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi8gLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcbmZ1bmN0aW9uIG1pdHQoKXtjb25zdCBhbGw9T2JqZWN0LmNyZWF0ZShudWxsKTtyZXR1cm57b24odHlwZSxoYW5kbGVyKXs7KGFsbFt0eXBlXXx8KGFsbFt0eXBlXT1bXSkpLnB1c2goaGFuZGxlcik7fSxvZmYodHlwZSxoYW5kbGVyKXtpZihhbGxbdHlwZV0pe2FsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcik+Pj4wLDEpO319LGVtaXQodHlwZSwuLi5ldnRzKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG47KGFsbFt0eXBlXXx8W10pLnNsaWNlKCkubWFwKGhhbmRsZXI9PntoYW5kbGVyKC4uLmV2dHMpO30pO319O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pdHQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXREb21haW5Mb2NhbGU9Z2V0RG9tYWluTG9jYWxlO2V4cG9ydHMuYWRkTG9jYWxlPWFkZExvY2FsZTtleHBvcnRzLmRlbExvY2FsZT1kZWxMb2NhbGU7ZXhwb3J0cy5oYXNCYXNlUGF0aD1oYXNCYXNlUGF0aDtleHBvcnRzLmFkZEJhc2VQYXRoPWFkZEJhc2VQYXRoO2V4cG9ydHMuZGVsQmFzZVBhdGg9ZGVsQmFzZVBhdGg7ZXhwb3J0cy5pc0xvY2FsVVJMPWlzTG9jYWxVUkw7ZXhwb3J0cy5pbnRlcnBvbGF0ZUFzPWludGVycG9sYXRlQXM7ZXhwb3J0cy5yZXNvbHZlSHJlZj1yZXNvbHZlSHJlZjtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaD1yZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaFwiKTt2YXIgX3JvdXRlTG9hZGVyPXJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO3ZhciBfZGVub3JtYWxpemVQYWdlUGF0aD1yZXF1aXJlKFwiLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aFwiKTt2YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGg9cmVxdWlyZShcIi4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoXCIpO3ZhciBfbWl0dD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi91dGlsc1wiKTt2YXIgX2lzRHluYW1pYz1yZXF1aXJlKFwiLi91dGlscy9pcy1keW5hbWljXCIpO3ZhciBfcGFyc2VSZWxhdGl2ZVVybD1yZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7dmFyIF9xdWVyeXN0cmluZz1yZXF1aXJlKFwiLi91dGlscy9xdWVyeXN0cmluZ1wiKTt2YXIgX3Jlc29sdmVSZXdyaXRlcz1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXNcIikpO3ZhciBfcm91dGVNYXRjaGVyPXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7dmFyIF9yb3V0ZVJlZ2V4PXJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLXJlZ2V4XCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Ly8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxubGV0IGRldGVjdERvbWFpbkxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtkZXRlY3REb21haW5Mb2NhbGU9cmVxdWlyZSgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZTt9Y29uc3QgYmFzZVBhdGg9cHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSHx8Jyc7ZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpe3JldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJykse2NhbmNlbGxlZDp0cnVlfSk7fWZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCxwcmVmaXgpe3JldHVybiBwcmVmaXgmJnBhdGguc3RhcnRzV2l0aCgnLycpP3BhdGg9PT0nLyc/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKHByZWZpeCk6YCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpPT09Jy8nP3BhdGguc3Vic3RyaW5nKDEpOnBhdGh9YDpwYXRoO31mdW5jdGlvbiBnZXREb21haW5Mb2NhbGUocGF0aCxsb2NhbGUsbG9jYWxlcyxkb21haW5Mb2NhbGVzKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtsb2NhbGU9bG9jYWxlfHwoMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXRoLGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO2NvbnN0IGRldGVjdGVkRG9tYWluPWRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLHVuZGVmaW5lZCxsb2NhbGUpO2lmKGRldGVjdGVkRG9tYWluKXtyZXR1cm5gaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cD8nJzoncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aHx8Jyd9JHtsb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHtsb2NhbGV9YH0ke3BhdGh9YDt9cmV0dXJuIGZhbHNlO31yZXR1cm4gZmFsc2U7fWZ1bmN0aW9uIGFkZExvY2FsZShwYXRoLGxvY2FsZSxkZWZhdWx0TG9jYWxlKXtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtjb25zdCBwYXRobmFtZT1wYXRoTm9RdWVyeUhhc2gocGF0aCk7Y29uc3QgcGF0aExvd2VyPXBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7Y29uc3QgbG9jYWxlTG93ZXI9bG9jYWxlJiZsb2NhbGUudG9Mb3dlckNhc2UoKTtyZXR1cm4gbG9jYWxlJiZsb2NhbGUhPT1kZWZhdWx0TG9jYWxlJiYhcGF0aExvd2VyLnN0YXJ0c1dpdGgoJy8nK2xvY2FsZUxvd2VyKycvJykmJnBhdGhMb3dlciE9PScvJytsb2NhbGVMb3dlcj9hZGRQYXRoUHJlZml4KHBhdGgsJy8nK2xvY2FsZSk6cGF0aDt9cmV0dXJuIHBhdGg7fWZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLGxvY2FsZSl7aWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7Y29uc3QgcGF0aG5hbWU9cGF0aE5vUXVlcnlIYXNoKHBhdGgpO2NvbnN0IHBhdGhMb3dlcj1wYXRobmFtZS50b0xvd2VyQ2FzZSgpO2NvbnN0IGxvY2FsZUxvd2VyPWxvY2FsZSYmbG9jYWxlLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGxvY2FsZSYmKHBhdGhMb3dlci5zdGFydHNXaXRoKCcvJytsb2NhbGVMb3dlcisnLycpfHxwYXRoTG93ZXI9PT0nLycrbG9jYWxlTG93ZXIpPyhwYXRobmFtZS5sZW5ndGg9PT1sb2NhbGUubGVuZ3RoKzE/Jy8nOicnKStwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoKzEpOnBhdGg7fXJldHVybiBwYXRoO31mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCl7Y29uc3QgcXVlcnlJbmRleD1wYXRoLmluZGV4T2YoJz8nKTtjb25zdCBoYXNoSW5kZXg9cGF0aC5pbmRleE9mKCcjJyk7aWYocXVlcnlJbmRleD4tMXx8aGFzaEluZGV4Pi0xKXtwYXRoPXBhdGguc3Vic3RyaW5nKDAscXVlcnlJbmRleD4tMT9xdWVyeUluZGV4Omhhc2hJbmRleCk7fXJldHVybiBwYXRoO31mdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtyZXR1cm4gcGF0aD09PWJhc2VQYXRofHxwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGgrJy8nKTt9ZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aCl7Ly8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbnJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsYmFzZVBhdGgpO31mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKXtwYXRoPXBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtpZighcGF0aC5zdGFydHNXaXRoKCcvJykpcGF0aD1gLyR7cGF0aH1gO3JldHVybiBwYXRoO30vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9mdW5jdGlvbiBpc0xvY2FsVVJMKHVybCl7Ly8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuaWYodXJsLnN0YXJ0c1dpdGgoJy8nKXx8dXJsLnN0YXJ0c1dpdGgoJyMnKXx8dXJsLnN0YXJ0c1dpdGgoJz8nKSlyZXR1cm4gdHJ1ZTt0cnl7Ly8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG5jb25zdCBsb2NhdGlvbk9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7Y29uc3QgcmVzb2x2ZWQ9bmV3IFVSTCh1cmwsbG9jYXRpb25PcmlnaW4pO3JldHVybiByZXNvbHZlZC5vcmlnaW49PT1sb2NhdGlvbk9yaWdpbiYmaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO31jYXRjaChfKXtyZXR1cm4gZmFsc2U7fX1mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpe2xldCBpbnRlcnBvbGF0ZWRSb3V0ZT0nJztjb25zdCBkeW5hbWljUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IGR5bmFtaWNHcm91cHM9ZHluYW1pY1JlZ2V4Lmdyb3Vwcztjb25zdCBkeW5hbWljTWF0Y2hlcz0vLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4oYXNQYXRobmFtZSE9PXJvdXRlPygwLF9yb3V0ZU1hdGNoZXIuZ2V0Um91dGVNYXRjaGVyKShkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpOicnKXx8Ly8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4vLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG5xdWVyeTtpbnRlcnBvbGF0ZWRSb3V0ZT1yb3V0ZTtjb25zdCBwYXJhbXM9T2JqZWN0LmtleXMoZHluYW1pY0dyb3Vwcyk7aWYoIXBhcmFtcy5ldmVyeShwYXJhbT0+e2xldCB2YWx1ZT1keW5hbWljTWF0Y2hlc1twYXJhbV18fCcnO2NvbnN0e3JlcGVhdCxvcHRpb25hbH09ZHluYW1pY0dyb3Vwc1twYXJhbV07Ly8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4vLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG5sZXQgcmVwbGFjZWQ9YFske3JlcGVhdD8nLi4uJzonJ30ke3BhcmFtfV1gO2lmKG9wdGlvbmFsKXtyZXBsYWNlZD1gJHshdmFsdWU/Jy8nOicnfVske3JlcGxhY2VkfV1gO31pZihyZXBlYXQmJiFBcnJheS5pc0FycmF5KHZhbHVlKSl2YWx1ZT1bdmFsdWVdO3JldHVybihvcHRpb25hbHx8cGFyYW0gaW4gZHluYW1pY01hdGNoZXMpJiYoLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG5pbnRlcnBvbGF0ZWRSb3V0ZT1pbnRlcnBvbGF0ZWRSb3V0ZS5yZXBsYWNlKHJlcGxhY2VkLHJlcGVhdD92YWx1ZS5tYXAoLy8gdGhlc2UgdmFsdWVzIHNob3VsZCBiZSBmdWxseSBlbmNvZGVkIGluc3RlYWQgb2YganVzdFxuLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbi8vIHdoZW4gcGFyc2luZyBkeW5hbWljIHJvdXRlIHBhcmFtc1xuc2VnbWVudD0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpKS5qb2luKCcvJyk6ZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSl8fCcvJyk7fSkpe2ludGVycG9sYXRlZFJvdXRlPScnOy8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4vLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbn1yZXR1cm57cGFyYW1zLHJlc3VsdDppbnRlcnBvbGF0ZWRSb3V0ZX07fWZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpe2NvbnN0IGZpbHRlcmVkUXVlcnk9e307T2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goa2V5PT57aWYoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKXtmaWx0ZXJlZFF1ZXJ5W2tleV09cXVlcnlba2V5XTt9fSk7cmV0dXJuIGZpbHRlcmVkUXVlcnk7fS8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsaHJlZixyZXNvbHZlQXMpey8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG5sZXQgYmFzZTtjb25zdCB1cmxBc1N0cmluZz10eXBlb2YgaHJlZj09PSdzdHJpbmcnP2hyZWY6KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShocmVmKTt0cnl7YmFzZT1uZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKT9yb3V0ZXIuYXNQYXRoOnJvdXRlci5wYXRobmFtZSwnaHR0cDovL24nKTt9Y2F0Y2goXyl7Ly8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbmJhc2U9bmV3IFVSTCgnLycsJ2h0dHA6Ly9uJyk7fS8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXG5pZighaXNMb2NhbFVSTCh1cmxBc1N0cmluZykpe3JldHVybiByZXNvbHZlQXM/W3VybEFzU3RyaW5nXTp1cmxBc1N0cmluZzt9dHJ5e2NvbnN0IGZpbmFsVXJsPW5ldyBVUkwodXJsQXNTdHJpbmcsYmFzZSk7ZmluYWxVcmwucGF0aG5hbWU9KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gpKGZpbmFsVXJsLnBhdGhuYW1lKTtsZXQgaW50ZXJwb2xhdGVkQXM9Jyc7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoZmluYWxVcmwucGF0aG5hbWUpJiZmaW5hbFVybC5zZWFyY2hQYXJhbXMmJnJlc29sdmVBcyl7Y29uc3QgcXVlcnk9KDAsX3F1ZXJ5c3RyaW5nLnNlYXJjaFBhcmFtc1RvVXJsUXVlcnkpKGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7Y29uc3R7cmVzdWx0LHBhcmFtc309aW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSxmaW5hbFVybC5wYXRobmFtZSxxdWVyeSk7aWYocmVzdWx0KXtpbnRlcnBvbGF0ZWRBcz0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHtwYXRobmFtZTpyZXN1bHQsaGFzaDpmaW5hbFVybC5oYXNoLHF1ZXJ5Om9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSxwYXJhbXMpfSk7fX0vLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuY29uc3QgcmVzb2x2ZWRIcmVmPWZpbmFsVXJsLm9yaWdpbj09PWJhc2Uub3JpZ2luP2ZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCk6ZmluYWxVcmwuaHJlZjtyZXR1cm4gcmVzb2x2ZUFzP1tyZXNvbHZlZEhyZWYsaW50ZXJwb2xhdGVkQXN8fHJlc29sdmVkSHJlZl06cmVzb2x2ZWRIcmVmO31jYXRjaChfKXtyZXR1cm4gcmVzb2x2ZUFzP1t1cmxBc1N0cmluZ106dXJsQXNTdHJpbmc7fX1mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpe2NvbnN0IG9yaWdpbj0oMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCk7cmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbik/dXJsLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKTp1cmw7fWZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXIsdXJsLGFzKXsvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbi8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG5sZXRbcmVzb2x2ZWRIcmVmLHJlc29sdmVkQXNdPXJlc29sdmVIcmVmKHJvdXRlcix1cmwsdHJ1ZSk7Y29uc3Qgb3JpZ2luPSgwLF91dGlscy5nZXRMb2NhdGlvbk9yaWdpbikoKTtjb25zdCBocmVmSGFkT3JpZ2luPXJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7Y29uc3QgYXNIYWRPcmlnaW49cmVzb2x2ZWRBcyYmcmVzb2x2ZWRBcy5zdGFydHNXaXRoKG9yaWdpbik7cmVzb2x2ZWRIcmVmPXN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7cmVzb2x2ZWRBcz1yZXNvbHZlZEFzP3N0cmlwT3JpZ2luKHJlc29sdmVkQXMpOnJlc29sdmVkQXM7Y29uc3QgcHJlcGFyZWRVcmw9aHJlZkhhZE9yaWdpbj9yZXNvbHZlZEhyZWY6YWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtjb25zdCBwcmVwYXJlZEFzPWFzP3N0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlcixhcykpOnJlc29sdmVkQXN8fHJlc29sdmVkSHJlZjtyZXR1cm57dXJsOnByZXBhcmVkVXJsLGFzOmFzSGFkT3JpZ2luP3ByZXBhcmVkQXM6YWRkQmFzZVBhdGgocHJlcGFyZWRBcyl9O31mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLHBhZ2VzKXtjb25zdCBjbGVhblBhdGhuYW1lPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKSgoMCxfZGVub3JtYWxpemVQYWdlUGF0aC5kZW5vcm1hbGl6ZVBhZ2VQYXRoKShwYXRobmFtZSkpO2lmKGNsZWFuUGF0aG5hbWU9PT0nLzQwNCd8fGNsZWFuUGF0aG5hbWU9PT0nL19lcnJvcicpe3JldHVybiBwYXRobmFtZTt9Ly8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuaWYoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG5wYWdlcy5zb21lKHBhZ2U9PntpZigoMCxfaXNEeW5hbWljLmlzRHluYW1pY1JvdXRlKShwYWdlKSYmKDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSl7cGF0aG5hbWU9cGFnZTtyZXR1cm4gdHJ1ZTt9fSk7fXJldHVybigwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7fWNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uPXByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04mJnR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyYmJ3Njcm9sbFJlc3RvcmF0aW9uJ2luIHdpbmRvdy5oaXN0b3J5JiYhIWZ1bmN0aW9uKCl7dHJ5e2xldCB2PSdfX25leHQnOy8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbnJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsdiksc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSx0cnVlO31jYXRjaChuKXt9fSgpO2NvbnN0IFNTR19EQVRBX05PVF9GT1VORD1TeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO2Z1bmN0aW9uIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzKXtyZXR1cm4gZmV0Y2godXJsLHsvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbi8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuLy9cbi8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbi8vID4gb3B0aW9uLlxuLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuLy9cbi8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4vLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4vLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbmNyZWRlbnRpYWxzOidzYW1lLW9yaWdpbid9KS50aGVuKHJlcz0+e2lmKCFyZXMub2spe2lmKGF0dGVtcHRzPjEmJnJlcy5zdGF0dXM+PTUwMCl7cmV0dXJuIGZldGNoUmV0cnkodXJsLGF0dGVtcHRzLTEpO31pZihyZXMuc3RhdHVzPT09NDA0KXtyZXR1cm4gcmVzLmpzb24oKS50aGVuKGRhdGE9PntpZihkYXRhLm5vdEZvdW5kKXtyZXR1cm57bm90Rm91bmQ6U1NHX0RBVEFfTk9UX0ZPVU5EfTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9KTt9dGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTt9cmV0dXJuIHJlcy5qc29uKCk7fSk7fWZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsaXNTZXJ2ZXJSZW5kZXIpe3JldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLGlzU2VydmVyUmVuZGVyPzM6MSkuY2F0Y2goZXJyPT57Ly8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4vLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuLy8gbG9vcC5cbmlmKCFpc1NlcnZlclJlbmRlcil7KDAsX3JvdXRlTG9hZGVyLm1hcmtBc3NldEVycm9yKShlcnIpO310aHJvdyBlcnI7fSk7fWNsYXNzIFJvdXRlcnsvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi8gLy8gU3RhdGljIERhdGEgQ2FjaGVcbi8vIEluLWZsaWdodCBTZXJ2ZXIgRGF0YSBSZXF1ZXN0cywgZm9yIGRlZHVwaW5nXG5jb25zdHJ1Y3RvcihfcGF0aG5hbWUsX3F1ZXJ5LF9hcyx7aW5pdGlhbFByb3BzLHBhZ2VMb2FkZXIsQXBwLHdyYXBBcHAsQ29tcG9uZW50LGVycixzdWJzY3JpcHRpb24saXNGYWxsYmFjayxsb2NhbGUsbG9jYWxlcyxkZWZhdWx0TG9jYWxlLGRvbWFpbkxvY2FsZXMsaXNQcmV2aWV3fSl7dGhpcy5yb3V0ZT12b2lkIDA7dGhpcy5wYXRobmFtZT12b2lkIDA7dGhpcy5xdWVyeT12b2lkIDA7dGhpcy5hc1BhdGg9dm9pZCAwO3RoaXMuYmFzZVBhdGg9dm9pZCAwO3RoaXMuY29tcG9uZW50cz12b2lkIDA7dGhpcy5zZGM9e307dGhpcy5zZHI9e307dGhpcy5zdWI9dm9pZCAwO3RoaXMuY2xjPXZvaWQgMDt0aGlzLnBhZ2VMb2FkZXI9dm9pZCAwO3RoaXMuX2Jwcz12b2lkIDA7dGhpcy5ldmVudHM9dm9pZCAwO3RoaXMuX3dyYXBBcHA9dm9pZCAwO3RoaXMuaXNTc3I9dm9pZCAwO3RoaXMuaXNGYWxsYmFjaz12b2lkIDA7dGhpcy5faW5GbGlnaHRSb3V0ZT12b2lkIDA7dGhpcy5fc2hhbGxvdz12b2lkIDA7dGhpcy5sb2NhbGU9dm9pZCAwO3RoaXMubG9jYWxlcz12b2lkIDA7dGhpcy5kZWZhdWx0TG9jYWxlPXZvaWQgMDt0aGlzLmRvbWFpbkxvY2FsZXM9dm9pZCAwO3RoaXMuaXNSZWFkeT12b2lkIDA7dGhpcy5pc1ByZXZpZXc9dm9pZCAwO3RoaXMuaXNMb2NhbGVEb21haW49dm9pZCAwO3RoaXMuX2lkeD0wO3RoaXMub25Qb3BTdGF0ZT1lPT57Y29uc3Qgc3RhdGU9ZS5zdGF0ZTtpZighc3RhdGUpey8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4vLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4vL1xuLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbi8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbi8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG5jb25zdHtwYXRobmFtZSxxdWVyeX09dGhpczt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKHBhdGhuYW1lKSxxdWVyeX0pLCgwLF91dGlscy5nZXRVUkwpKCkpO3JldHVybjt9aWYoIXN0YXRlLl9fTil7cmV0dXJuO31sZXQgZm9yY2VkU2Nyb2xsO2NvbnN0e3VybCxhcyxvcHRpb25zLGlkeH09c3RhdGU7aWYocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTil7aWYobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pe2lmKHRoaXMuX2lkeCE9PWlkeCl7Ly8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG50cnl7c2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZCl7fS8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcbnRyeXtjb25zdCB2PXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJytpZHgpO2ZvcmNlZFNjcm9sbD1KU09OLnBhcnNlKHYpO31jYXRjaChfdW51c2VkMil7Zm9yY2VkU2Nyb2xsPXt4OjAseTowfTt9fX19dGhpcy5faWR4PWlkeDtjb25zdHtwYXRobmFtZX09KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTsvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbi8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuaWYodGhpcy5pc1NzciYmYXM9PT10aGlzLmFzUGF0aCYmcGF0aG5hbWU9PT10aGlzLnBhdGhuYW1lKXtyZXR1cm47fS8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbi8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG5pZih0aGlzLl9icHMmJiF0aGlzLl9icHMoc3RhdGUpKXtyZXR1cm47fXRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxPYmplY3QuYXNzaWduKHt9LG9wdGlvbnMse3NoYWxsb3c6b3B0aW9ucy5zaGFsbG93JiZ0aGlzLl9zaGFsbG93LGxvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlfSksZm9yY2VkU2Nyb2xsKTt9Oy8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxudGhpcy5yb3V0ZT0oMCxfbm9ybWFsaXplVHJhaWxpbmdTbGFzaC5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCkoX3BhdGhuYW1lKTsvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbnRoaXMuY29tcG9uZW50cz17fTsvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4vLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuaWYoX3BhdGhuYW1lIT09Jy9fZXJyb3InKXt0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV09e0NvbXBvbmVudCxpbml0aWFsOnRydWUscHJvcHM6aW5pdGlhbFByb3BzLGVycixfX05fU1NHOmluaXRpYWxQcm9wcyYmaW5pdGlhbFByb3BzLl9fTl9TU0csX19OX1NTUDppbml0aWFsUHJvcHMmJmluaXRpYWxQcm9wcy5fX05fU1NQfTt9dGhpcy5jb21wb25lbnRzWycvX2FwcCddPXtDb21wb25lbnQ6QXBwLHN0eWxlU2hlZXRzOlsvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXX07Ly8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbi8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG50aGlzLmV2ZW50cz1Sb3V0ZXIuZXZlbnRzO3RoaXMucGFnZUxvYWRlcj1wYWdlTG9hZGVyO3RoaXMucGF0aG5hbWU9X3BhdGhuYW1lO3RoaXMucXVlcnk9X3F1ZXJ5Oy8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4vLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuY29uc3QgYXV0b0V4cG9ydER5bmFtaWM9KDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkoX3BhdGhuYW1lKSYmc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7dGhpcy5hc1BhdGg9YXV0b0V4cG9ydER5bmFtaWM/X3BhdGhuYW1lOl9hczt0aGlzLmJhc2VQYXRoPWJhc2VQYXRoO3RoaXMuc3ViPXN1YnNjcmlwdGlvbjt0aGlzLmNsYz1udWxsO3RoaXMuX3dyYXBBcHA9d3JhcEFwcDsvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4vLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxudGhpcy5pc1Nzcj10cnVlO3RoaXMuaXNGYWxsYmFjaz1pc0ZhbGxiYWNrO3RoaXMuaXNSZWFkeT0hIShzZWxmLl9fTkVYVF9EQVRBX18uZ3NzcHx8c2VsZi5fX05FWFRfREFUQV9fLmdpcHx8IWF1dG9FeHBvcnREeW5hbWljJiYhc2VsZi5sb2NhdGlvbi5zZWFyY2gmJiFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTt0aGlzLmlzUHJldmlldz0hIWlzUHJldmlldzt0aGlzLmlzTG9jYWxlRG9tYWluPWZhbHNlO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe3RoaXMubG9jYWxlPWxvY2FsZTt0aGlzLmxvY2FsZXM9bG9jYWxlczt0aGlzLmRlZmF1bHRMb2NhbGU9ZGVmYXVsdExvY2FsZTt0aGlzLmRvbWFpbkxvY2FsZXM9ZG9tYWluTG9jYWxlczt0aGlzLmlzTG9jYWxlRG9tYWluPSEhZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7fWlmKHR5cGVvZiB3aW5kb3chPT0ndW5kZWZpbmVkJyl7Ly8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbi8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG5pZihfYXMuc3Vic3RyKDAsMikhPT0nLy8nKXsvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG5jb25zdCBvcHRpb25zPXtsb2NhbGV9O29wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmPV9hcyE9PV9wYXRobmFtZTt0aGlzLmNoYW5nZVN0YXRlKCdyZXBsYWNlU3RhdGUnLCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lOmFkZEJhc2VQYXRoKF9wYXRobmFtZSkscXVlcnk6X3F1ZXJ5fSksKDAsX3V0aWxzLmdldFVSTCkoKSxvcHRpb25zKTt9d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJyx0aGlzLm9uUG9wU3RhdGUpOy8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4vLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbmlmKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pe2lmKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKXt3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbj0nbWFudWFsJzt9fX19cmVsb2FkKCl7d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO30vKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL2JhY2soKXt3aW5kb3cuaGlzdG9yeS5iYWNrKCk7fS8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9wdXNoKHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKXsvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2Vcbi8vIGlzIGNvbXBsZXRlLCBhcyB0aGUgcG9wc3RhdGUgZXZlbnQgc2hvdWxkIGhhbmRsZSB0aGlzIGNhcHR1cmUuXG5pZihtYW51YWxTY3JvbGxSZXN0b3JhdGlvbil7dHJ5ey8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nK3RoaXMuX2lkeCxKU09OLnN0cmluZ2lmeSh7eDpzZWxmLnBhZ2VYT2Zmc2V0LHk6c2VsZi5wYWdlWU9mZnNldH0pKTt9Y2F0Y2goX3VudXNlZDMpe319fTsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9LyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL3JlcGxhY2UodXJsLGFzLG9wdGlvbnM9e30pezsoe3VybCxhc309cHJlcGFyZVVybEFzKHRoaXMsdXJsLGFzKSk7cmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLHVybCxhcyxvcHRpb25zKTt9YXN5bmMgY2hhbmdlKG1ldGhvZCx1cmwsYXMsb3B0aW9ucyxmb3JjZWRTY3JvbGwpe2lmKCFpc0xvY2FsVVJMKHVybCkpe3dpbmRvdy5sb2NhdGlvbi5ocmVmPXVybDtyZXR1cm4gZmFsc2U7fWNvbnN0IHNob3VsZFJlc29sdmVIcmVmPXVybD09PWFzfHxvcHRpb25zLl9ofHxvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjsvLyBmb3Igc3RhdGljIHBhZ2VzIHdpdGggcXVlcnkgcGFyYW1zIGluIHRoZSBVUkwgd2UgZGVsYXlcbi8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuaWYob3B0aW9ucy5faCl7dGhpcy5pc1JlYWR5PXRydWU7fWxldCBsb2NhbGVDaGFuZ2U9b3B0aW9ucy5sb2NhbGUhPT10aGlzLmxvY2FsZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXt0aGlzLmxvY2FsZT1vcHRpb25zLmxvY2FsZT09PWZhbHNlP3RoaXMuZGVmYXVsdExvY2FsZTpvcHRpb25zLmxvY2FsZXx8dGhpcy5sb2NhbGU7aWYodHlwZW9mIG9wdGlvbnMubG9jYWxlPT09J3VuZGVmaW5lZCcpe29wdGlvbnMubG9jYWxlPXRoaXMubG9jYWxlO31jb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShoYXNCYXNlUGF0aChhcyk/ZGVsQmFzZVBhdGgoYXMpOmFzKTtjb25zdCBsb2NhbGVQYXRoUmVzdWx0PSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhcnNlZEFzLnBhdGhuYW1lLHRoaXMubG9jYWxlcyk7aWYobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSl7dGhpcy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtwYXJzZWRBcy5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXJzZWRBcy5wYXRobmFtZSk7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7dXJsPWFkZEJhc2VQYXRoKCgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKGhhc0Jhc2VQYXRoKHVybCk/ZGVsQmFzZVBhdGgodXJsKTp1cmwsdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7fWxldCBkaWROYXZpZ2F0ZT1mYWxzZTsvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbi8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuaWYocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCl7dmFyIF90aGlzJGxvY2FsZXM7Ly8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuaWYoISgoX3RoaXMkbG9jYWxlcz10aGlzLmxvY2FsZXMpIT1udWxsJiZfdGhpcyRsb2NhbGVzLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpe3BhcnNlZEFzLnBhdGhuYW1lPWFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZSk7d2luZG93LmxvY2F0aW9uLmhyZWY9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWRBcyk7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319Y29uc3QgZGV0ZWN0ZWREb21haW49ZGV0ZWN0RG9tYWluTG9jYWxlKHRoaXMuZG9tYWluTG9jYWxlcyx1bmRlZmluZWQsdGhpcy5sb2NhbGUpOy8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG5pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXsvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxuLy8gY29ycmVjdCBkb21haW5cbmlmKCFkaWROYXZpZ2F0ZSYmZGV0ZWN0ZWREb21haW4mJnRoaXMuaXNMb2NhbGVEb21haW4mJnNlbGYubG9jYXRpb24uaG9zdG5hbWUhPT1kZXRlY3RlZERvbWFpbi5kb21haW4pe2NvbnN0IGFzTm9CYXNlUGF0aD1kZWxCYXNlUGF0aChhcyk7d2luZG93LmxvY2F0aW9uLmhyZWY9YGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHA/Jyc6J3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGU9PT1kZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlPycnOmAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoPT09Jy8nPycnOmFzTm9CYXNlUGF0aH1gfHwnLycpfWA7Ly8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3Jcbi8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG5kaWROYXZpZ2F0ZT10cnVlO319aWYoZGlkTmF2aWdhdGUpe3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO319aWYoIW9wdGlvbnMuX2gpe3RoaXMuaXNTc3I9ZmFsc2U7fS8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbmlmKF91dGlscy5TVCl7cGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKTt9Y29uc3R7c2hhbGxvdz1mYWxzZX09b3B0aW9ucztjb25zdCByb3V0ZVByb3BzPXtzaGFsbG93fTtpZih0aGlzLl9pbkZsaWdodFJvdXRlKXt0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLHJvdXRlUHJvcHMpO31hcz1hZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpP2RlbEJhc2VQYXRoKGFzKTphcyxvcHRpb25zLmxvY2FsZSx0aGlzLmRlZmF1bHRMb2NhbGUpKTtjb25zdCBjbGVhbmVkQXM9ZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKT9kZWxCYXNlUGF0aChhcyk6YXMsdGhpcy5sb2NhbGUpO3RoaXMuX2luRmxpZ2h0Um91dGU9YXM7Ly8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2Vcbi8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cbi8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbi8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbi8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuaWYoIW9wdGlvbnMuX2gmJnRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpe3RoaXMuYXNQYXRoPWNsZWFuZWRBcztSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsYXMscm91dGVQcm9wcyk7Ly8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbnRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTt0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO3RoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSxudWxsKTtSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsYXMscm91dGVQcm9wcyk7cmV0dXJuIHRydWU7fWxldCBwYXJzZWQ9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkodXJsKTtsZXR7cGF0aG5hbWUscXVlcnl9PXBhcnNlZDsvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4vLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbi8vIHdoZW4gcmV3cml0dGVuIHRvXG5sZXQgcGFnZXMscmV3cml0ZXM7dHJ5e3BhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpOyh7X19yZXdyaXRlczpyZXdyaXRlc309YXdhaXQoMCxfcm91dGVMb2FkZXIuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCkoKSk7fWNhdGNoKGVycil7Ly8gSWYgd2UgZmFpbCB0byByZXNvbHZlIHRoZSBwYWdlIGxpc3Qgb3IgY2xpZW50LWJ1aWxkIG1hbmlmZXN0LCB3ZSBtdXN0XG4vLyBkbyBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb246XG53aW5kb3cubG9jYXRpb24uaHJlZj1hcztyZXR1cm4gZmFsc2U7fS8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4vLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbi8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbi8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4vLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG5pZighdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpJiYhbG9jYWxlQ2hhbmdlKXttZXRob2Q9J3JlcGxhY2VTdGF0ZSc7fS8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4vLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG5sZXQgcmVzb2x2ZWRBcz1hczsvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4vLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4vLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxucGF0aG5hbWU9cGF0aG5hbWU/KDAsX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gpKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSk6cGF0aG5hbWU7aWYoc2hvdWxkUmVzb2x2ZUhyZWYmJnBhdGhuYW1lIT09Jy9fZXJyb3InKXs7b3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY9dHJ1ZTtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhcy5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHJld3JpdGVzUmVzdWx0PSgwLF9yZXNvbHZlUmV3cml0ZXMuZGVmYXVsdCkoYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGNsZWFuZWRBcyx0aGlzLmxvY2FsZSkpLHBhZ2VzLHJld3JpdGVzLHF1ZXJ5LHA9PnJlc29sdmVEeW5hbWljUm91dGUocCxwYWdlcyksdGhpcy5sb2NhbGVzKTtyZXNvbHZlZEFzPXJld3JpdGVzUmVzdWx0LmFzUGF0aDtpZihyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSYmcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKXsvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4vLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxucGF0aG5hbWU9cmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO3BhcnNlZC5wYXRobmFtZT1hZGRCYXNlUGF0aChwYXRobmFtZSk7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWVsc2V7cGFyc2VkLnBhdGhuYW1lPXJlc29sdmVEeW5hbWljUm91dGUocGF0aG5hbWUscGFnZXMpO2lmKHBhcnNlZC5wYXRobmFtZSE9PXBhdGhuYW1lKXtwYXRobmFtZT1wYXJzZWQucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPWFkZEJhc2VQYXRoKHBhdGhuYW1lKTt1cmw9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShwYXJzZWQpO319fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7aWYoIWlzTG9jYWxVUkwoYXMpKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7dGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGhyZWY6IFwiJHt1cmx9XCIgYW5kIGFzOiBcIiR7YXN9XCIsIHJlY2VpdmVkIHJlbGF0aXZlIGhyZWYgYW5kIGV4dGVybmFsIGFzYCtgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTt9d2luZG93LmxvY2F0aW9uLmhyZWY9YXM7cmV0dXJuIGZhbHNlO31yZXNvbHZlZEFzPWRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSx0aGlzLmxvY2FsZSk7aWYoKDAsX2lzRHluYW1pYy5pc0R5bmFtaWNSb3V0ZSkocm91dGUpKXtjb25zdCBwYXJzZWRBcz0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKShyZXNvbHZlZEFzKTtjb25zdCBhc1BhdGhuYW1lPXBhcnNlZEFzLnBhdGhuYW1lO2NvbnN0IHJvdXRlUmVnZXg9KDAsX3JvdXRlUmVnZXguZ2V0Um91dGVSZWdleCkocm91dGUpO2NvbnN0IHJvdXRlTWF0Y2g9KDAsX3JvdXRlTWF0Y2hlci5nZXRSb3V0ZU1hdGNoZXIpKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO2NvbnN0IHNob3VsZEludGVycG9sYXRlPXJvdXRlPT09YXNQYXRobmFtZTtjb25zdCBpbnRlcnBvbGF0ZWRBcz1zaG91bGRJbnRlcnBvbGF0ZT9pbnRlcnBvbGF0ZUFzKHJvdXRlLGFzUGF0aG5hbWUscXVlcnkpOnt9O2lmKCFyb3V0ZU1hdGNofHxzaG91bGRJbnRlcnBvbGF0ZSYmIWludGVycG9sYXRlZEFzLnJlc3VsdCl7Y29uc3QgbWlzc2luZ1BhcmFtcz1PYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKHBhcmFtPT4hcXVlcnlbcGFyYW1dKTtpZihtaXNzaW5nUGFyYW1zLmxlbmd0aD4wKXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc29sZS53YXJuKGAke3Nob3VsZEludGVycG9sYXRlP2BJbnRlcnBvbGF0aW5nIGhyZWZgOmBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGArYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYCk7fXRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGU/YFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYDpgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKStgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlPydocmVmLWludGVycG9sYXRpb24tZmFpbGVkJzonaW5jb21wYXRpYmxlLWhyZWYtYXMnfWApO319ZWxzZSBpZihzaG91bGRJbnRlcnBvbGF0ZSl7YXM9KDAsX3V0aWxzLmZvcm1hdFdpdGhWYWxpZGF0aW9uKShPYmplY3QuYXNzaWduKHt9LHBhcnNlZEFzLHtwYXRobmFtZTppbnRlcnBvbGF0ZWRBcy5yZXN1bHQscXVlcnk6b21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LGludGVycG9sYXRlZEFzLnBhcmFtcyl9KSk7fWVsc2V7Ly8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbk9iamVjdC5hc3NpZ24ocXVlcnkscm91dGVNYXRjaCk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLGFzLHJvdXRlUHJvcHMpO3RyeXt2YXIgX3NlbGYkX19ORVhUX0RBVEFfXyRwLF9zZWxmJF9fTkVYVF9EQVRBX18kcDIsX29wdGlvbnMkc2Nyb2xsO2xldCByb3V0ZUluZm89YXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUscGF0aG5hbWUscXVlcnksYXMscmVzb2x2ZWRBcyxyb3V0ZVByb3BzKTtsZXR7ZXJyb3IscHJvcHMsX19OX1NTRyxfX05fU1NQfT1yb3V0ZUluZm87Ly8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG5pZigoX19OX1NTR3x8X19OX1NTUCkmJnByb3BzKXtpZihwcm9wcy5wYWdlUHJvcHMmJnByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Qpe2NvbnN0IGRlc3RpbmF0aW9uPXByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7Ly8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbi8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbi8vIGl0J3Mgbm90XG5pZihkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpe2NvbnN0IHBhcnNlZEhyZWY9KDAsX3BhcnNlUmVsYXRpdmVVcmwucGFyc2VSZWxhdGl2ZVVybCkoZGVzdGluYXRpb24pO3BhcnNlZEhyZWYucGF0aG5hbWU9cmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLHBhZ2VzKTtjb25zdHt1cmw6bmV3VXJsLGFzOm5ld0FzfT1wcmVwYXJlVXJsQXModGhpcyxkZXN0aW5hdGlvbixkZXN0aW5hdGlvbik7cmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCxuZXdVcmwsbmV3QXMsb3B0aW9ucyk7fXdpbmRvdy5sb2NhdGlvbi5ocmVmPWRlc3RpbmF0aW9uO3JldHVybiBuZXcgUHJvbWlzZSgoKT0+e30pO310aGlzLmlzUHJldmlldz0hIXByb3BzLl9fTl9QUkVWSUVXOy8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbmlmKHByb3BzLm5vdEZvdW5kPT09U1NHX0RBVEFfTk9UX0ZPVU5EKXtsZXQgbm90Rm91bmRSb3V0ZTt0cnl7YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnLzQwNCcpO25vdEZvdW5kUm91dGU9Jy80MDQnO31jYXRjaChfKXtub3RGb3VuZFJvdXRlPScvX2Vycm9yJzt9cm91dGVJbmZvPWF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsbm90Rm91bmRSb3V0ZSxxdWVyeSxhcyxyZXNvbHZlZEFzLHtzaGFsbG93OmZhbHNlfSk7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zKTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7Y29uc3QgYXBwQ29tcD10aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O3dpbmRvdy5uZXh0LmlzUHJlcmVuZGVyZWQ9YXBwQ29tcC5nZXRJbml0aWFsUHJvcHM9PT1hcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMmJiFyb3V0ZUluZm8uQ29tcG9uZW50LmdldEluaXRpYWxQcm9wczt9aWYob3B0aW9ucy5faCYmcGF0aG5hbWU9PT0nL19lcnJvcicmJigoX3NlbGYkX19ORVhUX0RBVEFfXyRwPXNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcyk9PW51bGw/dm9pZCAwOihfc2VsZiRfX05FWFRfREFUQV9fJHAyPV9zZWxmJF9fTkVYVF9EQVRBX18kcC5wYWdlUHJvcHMpPT1udWxsP3ZvaWQgMDpfc2VsZiRfX05FWFRfREFUQV9fJHAyLnN0YXR1c0NvZGUpPT09NTAwJiZwcm9wcyE9bnVsbCYmcHJvcHMucGFnZVByb3BzKXsvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2Vcbi8vIHdoZW4gdXBkYXRpbmcgcXVlcnkgaW5mb3JtYXRpb25cbnByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlPTUwMDt9Ly8gc2hhbGxvdyByb3V0aW5nIGlzIG9ubHkgYWxsb3dlZCBmb3Igc2FtZSBwYWdlIFVSTCBjaGFuZ2VzLlxuY29uc3QgaXNWYWxpZFNoYWxsb3dSb3V0ZT1vcHRpb25zLnNoYWxsb3cmJnRoaXMucm91dGU9PT1yb3V0ZTtjb25zdCBzaG91bGRTY3JvbGw9KF9vcHRpb25zJHNjcm9sbD1vcHRpb25zLnNjcm9sbCkhPW51bGw/X29wdGlvbnMkc2Nyb2xsOiFpc1ZhbGlkU2hhbGxvd1JvdXRlO2NvbnN0IHJlc2V0U2Nyb2xsPXNob3VsZFNjcm9sbD97eDowLHk6MH06bnVsbDthd2FpdCB0aGlzLnNldChyb3V0ZSxwYXRobmFtZSxxdWVyeSxjbGVhbmVkQXMscm91dGVJbmZvLGZvcmNlZFNjcm9sbCE9bnVsbD9mb3JjZWRTY3JvbGw6cmVzZXRTY3JvbGwpLmNhdGNoKGU9PntpZihlLmNhbmNlbGxlZCllcnJvcj1lcnJvcnx8ZTtlbHNlIHRocm93IGU7fSk7aWYoZXJyb3Ipe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsZXJyb3IsY2xlYW5lZEFzLHJvdXRlUHJvcHMpO3Rocm93IGVycm9yO31pZihwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKXtpZih0aGlzLmxvY2FsZSl7ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50Lmxhbmc9dGhpcy5sb2NhbGU7fX1Sb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLGFzLHJvdXRlUHJvcHMpO3JldHVybiB0cnVlO31jYXRjaChlcnIpe2lmKGVyci5jYW5jZWxsZWQpe3JldHVybiBmYWxzZTt9dGhyb3cgZXJyO319Y2hhbmdlU3RhdGUobWV0aG9kLHVybCxhcyxvcHRpb25zPXt9KXtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYodHlwZW9mIHdpbmRvdy5oaXN0b3J5PT09J3VuZGVmaW5lZCcpe2NvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7cmV0dXJuO31pZih0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXT09PSd1bmRlZmluZWQnKXtjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO3JldHVybjt9fWlmKG1ldGhvZCE9PSdwdXNoU3RhdGUnfHwoMCxfdXRpbHMuZ2V0VVJMKSgpIT09YXMpe3RoaXMuX3NoYWxsb3c9b3B0aW9ucy5zaGFsbG93O3dpbmRvdy5oaXN0b3J5W21ldGhvZF0oe3VybCxhcyxvcHRpb25zLF9fTjp0cnVlLGlkeDp0aGlzLl9pZHg9bWV0aG9kIT09J3B1c2hTdGF0ZSc/dGhpcy5faWR4OnRoaXMuX2lkeCsxfSwvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbi8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuJycsYXMpO319YXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMsbG9hZEVycm9yRmFpbCl7aWYoZXJyLmNhbmNlbGxlZCl7Ly8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbnRocm93IGVycjt9aWYoKDAsX3JvdXRlTG9hZGVyLmlzQXNzZXRFcnJvcikoZXJyKXx8bG9hZEVycm9yRmFpbCl7Um91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJyxlcnIsYXMscm91dGVQcm9wcyk7Ly8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbi8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4vLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbi8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4vLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbndpbmRvdy5sb2NhdGlvbi5ocmVmPWFzOy8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbnRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKTt9dHJ5e2xldCBDb21wb25lbnQ7bGV0IHN0eWxlU2hlZXRzO2xldCBwcm9wcztpZih0eXBlb2YgQ29tcG9uZW50PT09J3VuZGVmaW5lZCd8fHR5cGVvZiBzdHlsZVNoZWV0cz09PSd1bmRlZmluZWQnKXs7KHtwYWdlOkNvbXBvbmVudCxzdHlsZVNoZWV0c309YXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTt9Y29uc3Qgcm91dGVJbmZvPXtwcm9wcyxDb21wb25lbnQsc3R5bGVTaGVldHMsZXJyLGVycm9yOmVycn07aWYoIXJvdXRlSW5mby5wcm9wcyl7dHJ5e3JvdXRlSW5mby5wcm9wcz1hd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQse2VycixwYXRobmFtZSxxdWVyeX0pO31jYXRjaChnaXBFcnIpe2NvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsZ2lwRXJyKTtyb3V0ZUluZm8ucHJvcHM9e307fX1yZXR1cm4gcm91dGVJbmZvO31jYXRjaChyb3V0ZUluZm9FcnIpe3JldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VycixwYXRobmFtZSxxdWVyeSxhcyxyb3V0ZVByb3BzLHRydWUpO319YXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLHJlc29sdmVkQXMscm91dGVQcm9wcyl7dHJ5e2NvbnN0IGV4aXN0aW5nUm91dGVJbmZvPXRoaXMuY29tcG9uZW50c1tyb3V0ZV07aWYocm91dGVQcm9wcy5zaGFsbG93JiZleGlzdGluZ1JvdXRlSW5mbyYmdGhpcy5yb3V0ZT09PXJvdXRlKXtyZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87fWNvbnN0IGNhY2hlZFJvdXRlSW5mbz1leGlzdGluZ1JvdXRlSW5mbyYmJ2luaXRpYWwnaW4gZXhpc3RpbmdSb3V0ZUluZm8/dW5kZWZpbmVkOmV4aXN0aW5nUm91dGVJbmZvO2NvbnN0IHJvdXRlSW5mbz1jYWNoZWRSb3V0ZUluZm8/Y2FjaGVkUm91dGVJbmZvOmF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4ocmVzPT4oe0NvbXBvbmVudDpyZXMucGFnZSxzdHlsZVNoZWV0czpyZXMuc3R5bGVTaGVldHMsX19OX1NTRzpyZXMubW9kLl9fTl9TU0csX19OX1NTUDpyZXMubW9kLl9fTl9TU1B9KSk7Y29uc3R7Q29tcG9uZW50LF9fTl9TU0csX19OX1NTUH09cm91dGVJbmZvO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXtjb25zdHtpc1ZhbGlkRWxlbWVudFR5cGV9PXJlcXVpcmUoJ3JlYWN0LWlzJyk7aWYoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKXt0aHJvdyBuZXcgRXJyb3IoYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYCk7fX1sZXQgZGF0YUhyZWY7aWYoX19OX1NTR3x8X19OX1NTUCl7ZGF0YUhyZWY9dGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikoe3BhdGhuYW1lLHF1ZXJ5fSkscmVzb2x2ZWRBcyxfX05fU1NHLHRoaXMubG9jYWxlKTt9Y29uc3QgcHJvcHM9YXdhaXQgdGhpcy5fZ2V0RGF0YSgoKT0+X19OX1NTRz90aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKTpfX05fU1NQP3RoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpOnRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxue3BhdGhuYW1lLHF1ZXJ5LGFzUGF0aDphcyxsb2NhbGU6dGhpcy5sb2NhbGUsbG9jYWxlczp0aGlzLmxvY2FsZXMsZGVmYXVsdExvY2FsZTp0aGlzLmRlZmF1bHRMb2NhbGV9KSk7cm91dGVJbmZvLnByb3BzPXByb3BzO3RoaXMuY29tcG9uZW50c1tyb3V0ZV09cm91dGVJbmZvO3JldHVybiByb3V0ZUluZm87fWNhdGNoKGVycil7cmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLHBhdGhuYW1lLHF1ZXJ5LGFzLHJvdXRlUHJvcHMpO319c2V0KHJvdXRlLHBhdGhuYW1lLHF1ZXJ5LGFzLGRhdGEscmVzZXRTY3JvbGwpe3RoaXMuaXNGYWxsYmFjaz1mYWxzZTt0aGlzLnJvdXRlPXJvdXRlO3RoaXMucGF0aG5hbWU9cGF0aG5hbWU7dGhpcy5xdWVyeT1xdWVyeTt0aGlzLmFzUGF0aD1hcztyZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSxyZXNldFNjcm9sbCk7fS8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9iZWZvcmVQb3BTdGF0ZShjYil7dGhpcy5fYnBzPWNiO31vbmx5QUhhc2hDaGFuZ2UoYXMpe2lmKCF0aGlzLmFzUGF0aClyZXR1cm4gZmFsc2U7Y29uc3Rbb2xkVXJsTm9IYXNoLG9sZEhhc2hdPXRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7Y29uc3RbbmV3VXJsTm9IYXNoLG5ld0hhc2hdPWFzLnNwbGl0KCcjJyk7Ly8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuaWYobmV3SGFzaCYmb2xkVXJsTm9IYXNoPT09bmV3VXJsTm9IYXNoJiZvbGRIYXNoPT09bmV3SGFzaCl7cmV0dXJuIHRydWU7fS8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbmlmKG9sZFVybE5vSGFzaCE9PW5ld1VybE5vSGFzaCl7cmV0dXJuIGZhbHNlO30vLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbi8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbi8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4vLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxucmV0dXJuIG9sZEhhc2ghPT1uZXdIYXNoO31zY3JvbGxUb0hhc2goYXMpe2NvbnN0WyxoYXNoXT1hcy5zcGxpdCgnIycpOy8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbi8vIFRvIG1pcnJvciBicm93c2Vyc1xuaWYoaGFzaD09PScnfHxoYXNoPT09J3RvcCcpe3dpbmRvdy5zY3JvbGxUbygwLDApO3JldHVybjt9Ly8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbmNvbnN0IGlkRWw9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaCk7aWYoaWRFbCl7aWRFbC5zY3JvbGxJbnRvVmlldygpO3JldHVybjt9Ly8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4vLyBUbyBtaXJyb3IgYnJvd3NlcnNcbmNvbnN0IG5hbWVFbD1kb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXTtpZihuYW1lRWwpe25hbWVFbC5zY3JvbGxJbnRvVmlldygpO319dXJsSXNOZXcoYXNQYXRoKXtyZXR1cm4gdGhpcy5hc1BhdGghPT1hc1BhdGg7fS8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovYXN5bmMgcHJlZmV0Y2godXJsLGFzUGF0aD11cmwsb3B0aW9ucz17fSl7bGV0IHBhcnNlZD0oMCxfcGFyc2VSZWxhdGl2ZVVybC5wYXJzZVJlbGF0aXZlVXJsKSh1cmwpO2xldHtwYXRobmFtZX09cGFyc2VkO2lmKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpe2lmKG9wdGlvbnMubG9jYWxlPT09ZmFsc2Upe3BhdGhuYW1lPSgwLF9ub3JtYWxpemVMb2NhbGVQYXRoLm5vcm1hbGl6ZUxvY2FsZVBhdGgpKHBhdGhuYW1lLHRoaXMubG9jYWxlcykucGF0aG5hbWU7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7bGV0IHBhcnNlZEFzPSgwLF9wYXJzZVJlbGF0aXZlVXJsLnBhcnNlUmVsYXRpdmVVcmwpKGFzUGF0aCk7Y29uc3QgbG9jYWxlUGF0aFJlc3VsdD0oMCxfbm9ybWFsaXplTG9jYWxlUGF0aC5ub3JtYWxpemVMb2NhbGVQYXRoKShwYXJzZWRBcy5wYXRobmFtZSx0aGlzLmxvY2FsZXMpO3BhcnNlZEFzLnBhdGhuYW1lPWxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWU7b3B0aW9ucy5sb2NhbGU9bG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZXx8dGhpcy5kZWZhdWx0TG9jYWxlO2FzUGF0aD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZEFzKTt9fWNvbnN0IHBhZ2VzPWF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO2xldCByZXNvbHZlZEFzPWFzUGF0aDtpZihwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTJiZhc1BhdGguc3RhcnRzV2l0aCgnLycpKXtsZXQgcmV3cml0ZXM7KHtfX3Jld3JpdGVzOnJld3JpdGVzfT1hd2FpdCgwLF9yb3V0ZUxvYWRlci5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KSgpKTtjb25zdCByZXdyaXRlc1Jlc3VsdD0oMCxfcmVzb2x2ZVJld3JpdGVzLmRlZmF1bHQpKGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsdGhpcy5sb2NhbGUpKSxwYWdlcyxyZXdyaXRlcyxwYXJzZWQucXVlcnkscD0+cmVzb2x2ZUR5bmFtaWNSb3V0ZShwLHBhZ2VzKSx0aGlzLmxvY2FsZXMpO3Jlc29sdmVkQXM9ZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJld3JpdGVzUmVzdWx0LmFzUGF0aCksdGhpcy5sb2NhbGUpO2lmKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlJiZyZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpey8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbi8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG5wYXRobmFtZT1yZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7cGFyc2VkLnBhdGhuYW1lPXBhdGhuYW1lO3VybD0oMCxfdXRpbHMuZm9ybWF0V2l0aFZhbGlkYXRpb24pKHBhcnNlZCk7fX1lbHNle3BhcnNlZC5wYXRobmFtZT1yZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZC5wYXRobmFtZSxwYWdlcyk7aWYocGFyc2VkLnBhdGhuYW1lIT09cGF0aG5hbWUpe3BhdGhuYW1lPXBhcnNlZC5wYXRobmFtZTtwYXJzZWQucGF0aG5hbWU9cGF0aG5hbWU7dXJsPSgwLF91dGlscy5mb3JtYXRXaXRoVmFsaWRhdGlvbikocGFyc2VkKTt9fWNvbnN0IHJvdXRlPSgwLF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKShwYXRobmFtZSk7Ly8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuaWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe3JldHVybjt9YXdhaXQgUHJvbWlzZS5hbGwoW3RoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oaXNTc2c9PntyZXR1cm4gaXNTc2c/dGhpcy5fZ2V0U3RhdGljRGF0YSh0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYodXJsLHJlc29sdmVkQXMsdHJ1ZSx0eXBlb2Ygb3B0aW9ucy5sb2NhbGUhPT0ndW5kZWZpbmVkJz9vcHRpb25zLmxvY2FsZTp0aGlzLmxvY2FsZSkpOmZhbHNlO30pLHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5Pydsb2FkUGFnZSc6J3ByZWZldGNoJ10ocm91dGUpXSk7fWFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlKXtsZXQgY2FuY2VsbGVkPWZhbHNlO2NvbnN0IGNhbmNlbD10aGlzLmNsYz0oKT0+e2NhbmNlbGxlZD10cnVlO307Y29uc3QgY29tcG9uZW50UmVzdWx0PWF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSk7aWYoY2FuY2VsbGVkKXtjb25zdCBlcnJvcj1uZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO2Vycm9yLmNhbmNlbGxlZD10cnVlO3Rocm93IGVycm9yO31pZihjYW5jZWw9PT10aGlzLmNsYyl7dGhpcy5jbGM9bnVsbDt9cmV0dXJuIGNvbXBvbmVudFJlc3VsdDt9X2dldERhdGEoZm4pe2xldCBjYW5jZWxsZWQ9ZmFsc2U7Y29uc3QgY2FuY2VsPSgpPT57Y2FuY2VsbGVkPXRydWU7fTt0aGlzLmNsYz1jYW5jZWw7cmV0dXJuIGZuKCkudGhlbihkYXRhPT57aWYoY2FuY2VsPT09dGhpcy5jbGMpe3RoaXMuY2xjPW51bGw7fWlmKGNhbmNlbGxlZCl7Y29uc3QgZXJyPW5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO2Vyci5jYW5jZWxsZWQ9dHJ1ZTt0aHJvdyBlcnI7fXJldHVybiBkYXRhO30pO31fZ2V0U3RhdGljRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpjYWNoZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0ncHJvZHVjdGlvbicmJiF0aGlzLmlzUHJldmlldyYmdGhpcy5zZGNbY2FjaGVLZXldKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSk7fXJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLHRoaXMuaXNTc3IpLnRoZW4oZGF0YT0+e3RoaXMuc2RjW2NhY2hlS2V5XT1kYXRhO3JldHVybiBkYXRhO30pO31fZ2V0U2VydmVyRGF0YShkYXRhSHJlZil7Y29uc3R7aHJlZjpyZXNvdXJjZUtleX09bmV3IFVSTChkYXRhSHJlZix3aW5kb3cubG9jYXRpb24uaHJlZik7aWYodGhpcy5zZHJbcmVzb3VyY2VLZXldKXtyZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldO31yZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldPWZldGNoTmV4dERhdGEoZGF0YUhyZWYsdGhpcy5pc1NzcikudGhlbihkYXRhPT57ZGVsZXRlIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtyZXR1cm4gZGF0YTt9KS5jYXRjaChlcnI9PntkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO3Rocm93IGVycjt9KTt9Z2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCxjdHgpe2NvbnN0e0NvbXBvbmVudDpBcHB9PXRoaXMuY29tcG9uZW50c1snL19hcHAnXTtjb25zdCBBcHBUcmVlPXRoaXMuX3dyYXBBcHAoQXBwKTtjdHguQXBwVHJlZT1BcHBUcmVlO3JldHVybigwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShBcHAse0FwcFRyZWUsQ29tcG9uZW50LHJvdXRlcjp0aGlzLGN0eH0pO31hYm9ydENvbXBvbmVudExvYWQoYXMscm91dGVQcm9wcyl7aWYodGhpcy5jbGMpe1JvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLGFzLHJvdXRlUHJvcHMpO3RoaXMuY2xjKCk7dGhpcy5jbGM9bnVsbDt9fW5vdGlmeShkYXRhLHJlc2V0U2Nyb2xsKXtyZXR1cm4gdGhpcy5zdWIoZGF0YSx0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50LHJlc2V0U2Nyb2xsKTt9fWV4cG9ydHMuZGVmYXVsdD1Sb3V0ZXI7Um91dGVyLmV2ZW50cz0oMCxfbWl0dC5kZWZhdWx0KSgpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZm9ybWF0VXJsPWZvcm1hdFVybDt2YXIgcXVlcnlzdHJpbmc9X2ludGVyb3BSZXF1aXJlV2lsZGNhcmQocmVxdWlyZShcIi4vcXVlcnlzdHJpbmdcIikpO2Z1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpe2lmKHR5cGVvZiBXZWFrTWFwIT09XCJmdW5jdGlvblwiKXJldHVybiBudWxsO3ZhciBjYWNoZT1uZXcgV2Vha01hcCgpO19nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZT1mdW5jdGlvbigpe3JldHVybiBjYWNoZTt9O3JldHVybiBjYWNoZTt9ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKXtpZihvYmomJm9iai5fX2VzTW9kdWxlKXtyZXR1cm4gb2JqO31pZihvYmo9PT1udWxsfHx0eXBlb2Ygb2JqIT09XCJvYmplY3RcIiYmdHlwZW9mIG9iaiE9PVwiZnVuY3Rpb25cIil7cmV0dXJue2RlZmF1bHQ6b2JqfTt9dmFyIGNhY2hlPV9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO2lmKGNhY2hlJiZjYWNoZS5oYXMob2JqKSl7cmV0dXJuIGNhY2hlLmdldChvYmopO312YXIgbmV3T2JqPXt9O3ZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3I9T2JqZWN0LmRlZmluZVByb3BlcnR5JiZPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO2Zvcih2YXIga2V5IGluIG9iail7aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaixrZXkpKXt2YXIgZGVzYz1oYXNQcm9wZXJ0eURlc2NyaXB0b3I/T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosa2V5KTpudWxsO2lmKGRlc2MmJihkZXNjLmdldHx8ZGVzYy5zZXQpKXtPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLGtleSxkZXNjKTt9ZWxzZXtuZXdPYmpba2V5XT1vYmpba2V5XTt9fX1uZXdPYmouZGVmYXVsdD1vYmo7aWYoY2FjaGUpe2NhY2hlLnNldChvYmosbmV3T2JqKTt9cmV0dXJuIG5ld09iajt9Ly8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHM9L2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvO2Z1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmope2xldHthdXRoLGhvc3RuYW1lfT11cmxPYmo7bGV0IHByb3RvY29sPXVybE9iai5wcm90b2NvbHx8Jyc7bGV0IHBhdGhuYW1lPXVybE9iai5wYXRobmFtZXx8Jyc7bGV0IGhhc2g9dXJsT2JqLmhhc2h8fCcnO2xldCBxdWVyeT11cmxPYmoucXVlcnl8fCcnO2xldCBob3N0PWZhbHNlO2F1dGg9YXV0aD9lbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksJzonKSsnQCc6Jyc7aWYodXJsT2JqLmhvc3Qpe2hvc3Q9YXV0aCt1cmxPYmouaG9zdDt9ZWxzZSBpZihob3N0bmFtZSl7aG9zdD1hdXRoKyh+aG9zdG5hbWUuaW5kZXhPZignOicpP2BbJHtob3N0bmFtZX1dYDpob3N0bmFtZSk7aWYodXJsT2JqLnBvcnQpe2hvc3QrPSc6Jyt1cmxPYmoucG9ydDt9fWlmKHF1ZXJ5JiZ0eXBlb2YgcXVlcnk9PT0nb2JqZWN0Jyl7cXVlcnk9U3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkpKTt9bGV0IHNlYXJjaD11cmxPYmouc2VhcmNofHxxdWVyeSYmYD8ke3F1ZXJ5fWB8fCcnO2lmKHByb3RvY29sJiZwcm90b2NvbC5zdWJzdHIoLTEpIT09JzonKXByb3RvY29sKz0nOic7aWYodXJsT2JqLnNsYXNoZXN8fCghcHJvdG9jb2x8fHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpJiZob3N0IT09ZmFsc2Upe2hvc3Q9Jy8vJysoaG9zdHx8JycpO2lmKHBhdGhuYW1lJiZwYXRobmFtZVswXSE9PScvJylwYXRobmFtZT0nLycrcGF0aG5hbWU7fWVsc2UgaWYoIWhvc3Qpe2hvc3Q9Jyc7fWlmKGhhc2gmJmhhc2hbMF0hPT0nIycpaGFzaD0nIycraGFzaDtpZihzZWFyY2gmJnNlYXJjaFswXSE9PSc/JylzZWFyY2g9Jz8nK3NlYXJjaDtwYXRobmFtZT1wYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csZW5jb2RlVVJJQ29tcG9uZW50KTtzZWFyY2g9c2VhcmNoLnJlcGxhY2UoJyMnLCclMjMnKTtyZXR1cm5gJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1mb3JtYXQtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNEeW5hbWljUm91dGU9aXNEeW5hbWljUm91dGU7Ly8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURT0vXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpLztmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZSl7cmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSk7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXMtZHluYW1pYy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLnBhcnNlUmVsYXRpdmVVcmw9cGFyc2VSZWxhdGl2ZVVybDt2YXIgX3V0aWxzPXJlcXVpcmUoXCIuLi8uLi91dGlsc1wiKTt2YXIgX3F1ZXJ5c3RyaW5nPXJlcXVpcmUoXCIuL3F1ZXJ5c3RyaW5nXCIpOy8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL2Z1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsLGJhc2Upe2NvbnN0IGdsb2JhbEJhc2U9bmV3IFVSTCh0eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc/J2h0dHA6Ly9uJzooMCxfdXRpbHMuZ2V0TG9jYXRpb25PcmlnaW4pKCkpO2NvbnN0IHJlc29sdmVkQmFzZT1iYXNlP25ldyBVUkwoYmFzZSxnbG9iYWxCYXNlKTpnbG9iYWxCYXNlO2NvbnN0e3BhdGhuYW1lLHNlYXJjaFBhcmFtcyxzZWFyY2gsaGFzaCxocmVmLG9yaWdpbn09bmV3IFVSTCh1cmwscmVzb2x2ZWRCYXNlKTtpZihvcmlnaW4hPT1nbG9iYWxCYXNlLm9yaWdpbil7dGhyb3cgbmV3IEVycm9yKGBpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMLCByb3V0ZXIgcmVjZWl2ZWQgJHt1cmx9YCk7fXJldHVybntwYXRobmFtZSxxdWVyeTooMCxfcXVlcnlzdHJpbmcuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSkoc2VhcmNoUGFyYW1zKSxzZWFyY2gsaGFzaCxocmVmOmhyZWYuc2xpY2UoZ2xvYmFsQmFzZS5vcmlnaW4ubGVuZ3RoKX07fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVsYXRpdmUtdXJsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeT1zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5O2V4cG9ydHMudXJsUXVlcnlUb1NlYXJjaFBhcmFtcz11cmxRdWVyeVRvU2VhcmNoUGFyYW1zO2V4cG9ydHMuYXNzaWduPWFzc2lnbjtmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyl7Y29uc3QgcXVlcnk9e307c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PntpZih0eXBlb2YgcXVlcnlba2V5XT09PSd1bmRlZmluZWQnKXtxdWVyeVtrZXldPXZhbHVlO31lbHNlIGlmKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpeztxdWVyeVtrZXldLnB1c2godmFsdWUpO31lbHNle3F1ZXJ5W2tleV09W3F1ZXJ5W2tleV0sdmFsdWVdO319KTtyZXR1cm4gcXVlcnk7fWZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW0pe2lmKHR5cGVvZiBwYXJhbT09PSdzdHJpbmcnfHx0eXBlb2YgcGFyYW09PT0nbnVtYmVyJyYmIWlzTmFOKHBhcmFtKXx8dHlwZW9mIHBhcmFtPT09J2Jvb2xlYW4nKXtyZXR1cm4gU3RyaW5nKHBhcmFtKTt9ZWxzZXtyZXR1cm4nJzt9fWZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXModXJsUXVlcnkpe2NvbnN0IHJlc3VsdD1uZXcgVVJMU2VhcmNoUGFyYW1zKCk7T2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksdmFsdWVdKT0+e2lmKEFycmF5LmlzQXJyYXkodmFsdWUpKXt2YWx1ZS5mb3JFYWNoKGl0ZW09PnJlc3VsdC5hcHBlbmQoa2V5LHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKTt9ZWxzZXtyZXN1bHQuc2V0KGtleSxzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSk7fX0pO3JldHVybiByZXN1bHQ7fWZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsLi4uc2VhcmNoUGFyYW1zTGlzdCl7c2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKHNlYXJjaFBhcmFtcz0+e0FycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaChrZXk9PnRhcmdldC5kZWxldGUoa2V5KSk7c2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLGtleSk9PnRhcmdldC5hcHBlbmQoa2V5LHZhbHVlKSk7fSk7cmV0dXJuIHRhcmdldDt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1xdWVyeXN0cmluZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmdldFJvdXRlTWF0Y2hlcj1nZXRSb3V0ZU1hdGNoZXI7ZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpe2NvbnN0e3JlLGdyb3Vwc309cm91dGVSZWdleDtyZXR1cm4gcGF0aG5hbWU9Pntjb25zdCByb3V0ZU1hdGNoPXJlLmV4ZWMocGF0aG5hbWUpO2lmKCFyb3V0ZU1hdGNoKXtyZXR1cm4gZmFsc2U7fWNvbnN0IGRlY29kZT1wYXJhbT0+e3RyeXtyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKTt9Y2F0Y2goXyl7Y29uc3QgZXJyPW5ldyBFcnJvcignZmFpbGVkIHRvIGRlY29kZSBwYXJhbScpO2Vyci5jb2RlPSdERUNPREVfRkFJTEVEJzt0aHJvdyBlcnI7fX07Y29uc3QgcGFyYW1zPXt9O09iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaChzbHVnTmFtZT0+e2NvbnN0IGc9Z3JvdXBzW3NsdWdOYW1lXTtjb25zdCBtPXJvdXRlTWF0Y2hbZy5wb3NdO2lmKG0hPT11bmRlZmluZWQpe3BhcmFtc1tzbHVnTmFtZV09fm0uaW5kZXhPZignLycpP20uc3BsaXQoJy8nKS5tYXAoZW50cnk9PmRlY29kZShlbnRyeSkpOmcucmVwZWF0P1tkZWNvZGUobSldOmRlY29kZShtKTt9fSk7cmV0dXJuIHBhcmFtczt9O31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlLW1hdGNoZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5nZXRSb3V0ZVJlZ2V4PWdldFJvdXRlUmVnZXg7Ly8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cil7cmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csJ1xcXFwkJicpO31mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbSl7Y29uc3Qgb3B0aW9uYWw9cGFyYW0uc3RhcnRzV2l0aCgnWycpJiZwYXJhbS5lbmRzV2l0aCgnXScpO2lmKG9wdGlvbmFsKXtwYXJhbT1wYXJhbS5zbGljZSgxLC0xKTt9Y29uc3QgcmVwZWF0PXBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpO2lmKHJlcGVhdCl7cGFyYW09cGFyYW0uc2xpY2UoMyk7fXJldHVybntrZXk6cGFyYW0scmVwZWF0LG9wdGlvbmFsfTt9ZnVuY3Rpb24gZ2V0Um91dGVSZWdleChub3JtYWxpemVkUm91dGUpe2NvbnN0IHNlZ21lbnRzPShub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sJycpfHwnLycpLnNsaWNlKDEpLnNwbGl0KCcvJyk7Y29uc3QgZ3JvdXBzPXt9O2xldCBncm91cEluZGV4PTE7Y29uc3QgcGFyYW1ldGVyaXplZFJvdXRlPXNlZ21lbnRzLm1hcChzZWdtZW50PT57aWYoc2VnbWVudC5zdGFydHNXaXRoKCdbJykmJnNlZ21lbnQuZW5kc1dpdGgoJ10nKSl7Y29uc3R7a2V5LG9wdGlvbmFsLHJlcGVhdH09cGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLC0xKSk7Z3JvdXBzW2tleV09e3Bvczpncm91cEluZGV4KysscmVwZWF0LG9wdGlvbmFsfTtyZXR1cm4gcmVwZWF0P29wdGlvbmFsPycoPzovKC4rPykpPyc6Jy8oLis/KSc6Jy8oW14vXSs/KSc7fWVsc2V7cmV0dXJuYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWA7fX0pLmpvaW4oJycpOy8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7bGV0IHJvdXRlS2V5Q2hhckNvZGU9OTc7bGV0IHJvdXRlS2V5Q2hhckxlbmd0aD0xOy8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbmNvbnN0IGdldFNhZmVSb3V0ZUtleT0oKT0+e2xldCByb3V0ZUtleT0nJztmb3IobGV0IGk9MDtpPHJvdXRlS2V5Q2hhckxlbmd0aDtpKyspe3JvdXRlS2V5Kz1TdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpO3JvdXRlS2V5Q2hhckNvZGUrKztpZihyb3V0ZUtleUNoYXJDb2RlPjEyMil7cm91dGVLZXlDaGFyTGVuZ3RoKys7cm91dGVLZXlDaGFyQ29kZT05Nzt9fXJldHVybiByb3V0ZUtleTt9O2NvbnN0IHJvdXRlS2V5cz17fTtsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGU9c2VnbWVudHMubWFwKHNlZ21lbnQ9PntpZihzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSYmc2VnbWVudC5lbmRzV2l0aCgnXScpKXtjb25zdHtrZXksb3B0aW9uYWwscmVwZWF0fT1wYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsLTEpKTsvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4vLyB0aGUgbmFtZWQgcmVnZXhcbmxldCBjbGVhbmVkS2V5PWtleS5yZXBsYWNlKC9cXFcvZywnJyk7bGV0IGludmFsaWRLZXk9ZmFsc2U7Ly8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4vLyBzYWZlIGtleVxuaWYoY2xlYW5lZEtleS5sZW5ndGg9PT0wfHxjbGVhbmVkS2V5Lmxlbmd0aD4zMCl7aW52YWxpZEtleT10cnVlO31pZighaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwxKSkpKXtpbnZhbGlkS2V5PXRydWU7fWlmKGludmFsaWRLZXkpe2NsZWFuZWRLZXk9Z2V0U2FmZVJvdXRlS2V5KCk7fXJvdXRlS2V5c1tjbGVhbmVkS2V5XT1rZXk7cmV0dXJuIHJlcGVhdD9vcHRpb25hbD9gKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YDpgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWA6YC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgO31lbHNle3JldHVybmAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gO319KS5qb2luKCcnKTtyZXR1cm57cmU6bmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxncm91cHMscm91dGVLZXlzLG5hbWVkUmVnZXg6YF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgfTt9cmV0dXJue3JlOm5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksZ3JvdXBzfTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1yZWdleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmV4ZWNPbmNlPWV4ZWNPbmNlO2V4cG9ydHMuZ2V0TG9jYXRpb25PcmlnaW49Z2V0TG9jYXRpb25PcmlnaW47ZXhwb3J0cy5nZXRVUkw9Z2V0VVJMO2V4cG9ydHMuZ2V0RGlzcGxheU5hbWU9Z2V0RGlzcGxheU5hbWU7ZXhwb3J0cy5pc1Jlc1NlbnQ9aXNSZXNTZW50O2V4cG9ydHMubG9hZEdldEluaXRpYWxQcm9wcz1sb2FkR2V0SW5pdGlhbFByb3BzO2V4cG9ydHMuZm9ybWF0V2l0aFZhbGlkYXRpb249Zm9ybWF0V2l0aFZhbGlkYXRpb247ZXhwb3J0cy5TVD1leHBvcnRzLlNQPWV4cG9ydHMudXJsT2JqZWN0S2V5cz12b2lkIDA7dmFyIF9mb3JtYXRVcmw9cmVxdWlyZShcIi4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmxcIik7LyoqXG4gKiBVdGlsc1xuICovZnVuY3Rpb24gZXhlY09uY2UoZm4pe2xldCB1c2VkPWZhbHNlO2xldCByZXN1bHQ7cmV0dXJuKC4uLmFyZ3MpPT57aWYoIXVzZWQpe3VzZWQ9dHJ1ZTtyZXN1bHQ9Zm4oLi4uYXJncyk7fXJldHVybiByZXN1bHQ7fTt9ZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKXtjb25zdHtwcm90b2NvbCxob3N0bmFtZSxwb3J0fT13aW5kb3cubG9jYXRpb247cmV0dXJuYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydD8nOicrcG9ydDonJ31gO31mdW5jdGlvbiBnZXRVUkwoKXtjb25zdHtocmVmfT13aW5kb3cubG9jYXRpb247Y29uc3Qgb3JpZ2luPWdldExvY2F0aW9uT3JpZ2luKCk7cmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpO31mdW5jdGlvbiBnZXREaXNwbGF5TmFtZShDb21wb25lbnQpe3JldHVybiB0eXBlb2YgQ29tcG9uZW50PT09J3N0cmluZyc/Q29tcG9uZW50OkNvbXBvbmVudC5kaXNwbGF5TmFtZXx8Q29tcG9uZW50Lm5hbWV8fCdVbmtub3duJzt9ZnVuY3Rpb24gaXNSZXNTZW50KHJlcyl7cmV0dXJuIHJlcy5maW5pc2hlZHx8cmVzLmhlYWRlcnNTZW50O31hc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzKEFwcCxjdHgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt2YXIgX0FwcCRwcm90b3R5cGU7aWYoKF9BcHAkcHJvdG90eXBlPUFwcC5wcm90b3R5cGUpIT1udWxsJiZfQXBwJHByb3RvdHlwZS5nZXRJbml0aWFsUHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO319Ly8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuY29uc3QgcmVzPWN0eC5yZXN8fGN0eC5jdHgmJmN0eC5jdHgucmVzO2lmKCFBcHAuZ2V0SW5pdGlhbFByb3BzKXtpZihjdHguY3R4JiZjdHguQ29tcG9uZW50KXsvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG5yZXR1cm57cGFnZVByb3BzOmF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCxjdHguY3R4KX07fXJldHVybnt9O31jb25zdCBwcm9wcz1hd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eCk7aWYocmVzJiZpc1Jlc1NlbnQocmVzKSl7cmV0dXJuIHByb3BzO31pZighcHJvcHMpe2NvbnN0IG1lc3NhZ2U9YFwiJHtnZXREaXNwbGF5TmFtZShBcHApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmA7dGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO31pZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7aWYoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aD09PTAmJiFjdHguY3R4KXtjb25zb2xlLndhcm4oYCR7Z2V0RGlzcGxheU5hbWUoQXBwKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgKTt9fXJldHVybiBwcm9wczt9Y29uc3QgdXJsT2JqZWN0S2V5cz1bJ2F1dGgnLCdoYXNoJywnaG9zdCcsJ2hvc3RuYW1lJywnaHJlZicsJ3BhdGgnLCdwYXRobmFtZScsJ3BvcnQnLCdwcm90b2NvbCcsJ3F1ZXJ5Jywnc2VhcmNoJywnc2xhc2hlcyddO2V4cG9ydHMudXJsT2JqZWN0S2V5cz11cmxPYmplY3RLZXlzO2Z1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlY9PT0nZGV2ZWxvcG1lbnQnKXtpZih1cmwhPT1udWxsJiZ0eXBlb2YgdXJsPT09J29iamVjdCcpe09iamVjdC5rZXlzKHVybCkuZm9yRWFjaChrZXk9PntpZih1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KT09PS0xKXtjb25zb2xlLndhcm4oYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YCk7fX0pO319cmV0dXJuKDAsX2Zvcm1hdFVybC5mb3JtYXRVcmwpKHVybCk7fWNvbnN0IFNQPXR5cGVvZiBwZXJmb3JtYW5jZSE9PSd1bmRlZmluZWQnO2V4cG9ydHMuU1A9U1A7Y29uc3QgU1Q9U1AmJnR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrPT09J2Z1bmN0aW9uJyYmdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmU9PT0nZnVuY3Rpb24nO2V4cG9ydHMuU1Q9U1Q7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5qcy5tYXAiLCJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHRyIGZyb20gXCIuLi9sb2NhbGVzL3RyXCI7XG5pbXBvcnQgZW4gZnJvbSBcIi4uL2xvY2FsZXMvZW5cIjtcblxuaW1wb3J0IFJlZmVyZW5jZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmVmZXJlbmNlc1wiO1xuaW1wb3J0IFN1Y2Nlc3NTdG9yaWVzIGZyb20gXCIuLi9jb21wb25lbnRzL3N1Y2Nlc3NTdG9yaWVzXCI7XG5pbXBvcnQgU29sdXRpb25zIGZyb20gXCIuLi9jb21wb25lbnRzL3NvbHV0aW9uc1wiO1xuXG5jb25zdCBJbmRleCA9ICh7IHN1Y2Nlc3NTdG9yaWVzRGF0YSwgc29sdXRpb25zRGF0YSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IGxvY2FsZSB9ID0gcm91dGVyO1xuICBjb25zdCB0ID0gbG9jYWxlID09PSBcImVuXCIgPyBlbiA6IHRyO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ib3hcIj5cbiAgICAgICAgey8qPFN1Y2Nlc3NTdG9yaWVzIGRhdGE9e3N1Y2Nlc3NTdG9yaWVzRGF0YX0gLz4qL31cbiAgICAgICAgPFNvbHV0aW9ucyBkYXRhPXtzb2x1dGlvbnNEYXRhfSAvPlxuICAgICAgICA8UmVmZXJlbmNlcyAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAocm91dGVyKSA9PiB7XG4gIC8vIFN1Y2Nlc3MgU3RvcmllcyBTZWN0aW9uXG4gIGNvbnN0IHJlc19zdWNjZXNzU3RvcmllcyA9IGF3YWl0IGZldGNoKFxuICAgIGAke3Byb2Nlc3MuZW52LkhPU1R9L2FwaS8ke3JvdXRlci5sb2NhbGV9L3N1Y2Nlc3Mtc3Rvcmllc2BcbiAgKTtcbiAgY29uc3Qgc3VjY2Vzc1N0b3JpZXNEYXRhID0gYXdhaXQgcmVzX3N1Y2Nlc3NTdG9yaWVzLmpzb24oKTtcblxuICAvLyBTb2x1dGlvbnMgU2VjdGlvblxuICBjb25zdCByZXNfc29sdXRpb25zID0gYXdhaXQgZmV0Y2goXG4gICAgYCR7cHJvY2Vzcy5lbnYuSE9TVH0vYXBpLyR7cm91dGVyLmxvY2FsZX0vc29sdXRpb25zYFxuICApO1xuICBjb25zdCBzb2x1dGlvbnNEYXRhID0gYXdhaXQgcmVzX3NvbHV0aW9ucy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgc3VjY2Vzc1N0b3JpZXNEYXRhLFxuICAgICAgc29sdXRpb25zRGF0YSxcbiAgICB9LFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJSZWZlcmVuY2VzX2NvbnRhaW5lcl9fMmF3UkxcIixcblx0XCJpdGVtXCI6IFwiUmVmZXJlbmNlc19pdGVtX19oRlpfc1wiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiU29sdXRpb25zX2NvbnRhaW5lcl9fMk83eW9cIixcblx0XCJpY29uc0NvbnRhaW5lclwiOiBcIlNvbHV0aW9uc19pY29uc0NvbnRhaW5lcl9fMXJOMjZcIixcblx0XCJpY29uc1wiOiBcIlNvbHV0aW9uc19pY29uc19fMml0azBcIixcblx0XCJpY29uc0xpbmtcIjogXCJTb2x1dGlvbnNfaWNvbnNMaW5rX18xLUl5M1wiLFxuXHRcIm1vcmVCb3hcIjogXCJTb2x1dGlvbnNfbW9yZUJveF9fM3hNeklcIixcblx0XCJwbHVzSWNvblwiOiBcIlNvbHV0aW9uc19wbHVzSWNvbl9fMmdIWUpcIixcblx0XCJwbHVzQ29udGVudFwiOiBcIlNvbHV0aW9uc19wbHVzQ29udGVudF9fMzBQWEpcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcIlN1Y2Nlc3NTdG9yaWVzX2NvbnRhaW5lcl9fMkdhUG1cIlxufTtcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==
