exports.id = 794;
exports.ids = [794];
exports.modules = {
  /***/ 6415: /***/ function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    "use strict";
    // ESM COMPAT FLAG
    __webpack_require__.r(__webpack_exports__);

    // EXPORTS
    __webpack_require__.d(__webpack_exports__, {
      default: function () {
        return /* binding */ layout;
      },
    });

    // EXTERNAL MODULE: external "react/jsx-runtime"
    var jsx_runtime_ = __webpack_require__(5282);
    // EXTERNAL MODULE: external "styled-jsx/style"
    var style_ = __webpack_require__(3289);
    var style_default = /*#__PURE__*/ __webpack_require__.n(style_);
    // EXTERNAL MODULE: external "next/router"
    var router_ = __webpack_require__(6731);
    // EXTERNAL MODULE: external "next/head"
    var head_ = __webpack_require__(701);
    var head_default = /*#__PURE__*/ __webpack_require__.n(head_);
    // EXTERNAL MODULE: external "react"
    var external_react_ = __webpack_require__(9297);
    // EXTERNAL MODULE: ./node_modules/next/link.js
    var next_link = __webpack_require__(1664); // CONCATENATED MODULE: ./components/languageChanger/index.js
    const LanguageChanger = () => {
      const { 0: selectedLanguage, 1: setSelectedLanguage } = (0,
      external_react_.useState)("");
      const router = (0, router_.useRouter)();
      const { locale } = router;
      (0, external_react_.useEffect)(() => {
        setSelectedLanguage(locale);
      }, [locale]);

      const setLanguage = (l) => {
        const locale = l;
        setSelectedLanguage(locale);
        router.push(router.pathname, router.asPath, {
          locale,
        });
      };

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-3633508269" + " " + "container-lang",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: () => setLanguage("en"),
            className:
              "jsx-3633508269" +
              " " +
              `left lang-btn ${selectedLanguage === "en" ? "active" : ""}`,
            children: "EN",
          }),
          /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: () => setLanguage("tr"),
            className:
              "jsx-3633508269" +
              " " +
              `right lang-btn ${selectedLanguage === "tr" ? "active" : ""}`,
            children: "TR",
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "3633508269",
            children: [
              ".container-lang.jsx-3633508269{position:fixed;right:24px;top:14px;z-index:2;}",
              ".active.jsx-3633508269{font-weight:bold;opacity:1 !important;background-color:#cccccc;}",
              ".lang-btn.jsx-3633508269{cursor:pointer;border:none;padding:8px;opacity:0.5;font-size:12px;}",
              ".left.jsx-3633508269{border-top-left-radius:14px;border-bottom-left-radius:14px;}",
              ".right.jsx-3633508269{border-top-right-radius:14px;border-bottom-right-radius:14px;}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var languageChanger = LanguageChanger; // CONCATENATED MODULE: ./components/menuButton/index.js
    const MenuButton = ({ title, slug, locale, router }) => {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-2987862986",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
            href: slug,
            hrefLang: locale,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
              className:
                "jsx-2987862986" +
                " " +
                `menuButton ${slug === router.route ? "active" : ""}`,
              children: title,
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "2987862986",
            children: [
              ".menuButton.jsx-2987862986{font-size:18px;display:inline-block;color:grey !important;-webkit-text-decoration:none;text-decoration:none;margin:10px 10px 0px;}",
              ".menuButton.jsx-2987862986:hover{color:black !important;}",
              ".active.jsx-2987862986{font-weight:bold;color:#3a3a3a !important;}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var menuButton = MenuButton; // CONCATENATED MODULE: ./components/menu/index.js
    const Menu = ({ menuItems, router }) => {
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-3130897579" + " " + "container-menu",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "jsx-3130897579" + " " + "menu",
            children: menuItems.map((item, index) =>
              /*#__PURE__*/ jsx_runtime_.jsx(
                menuButton,
                {
                  title: item.title,
                  slug: item.slug,
                  router: router,
                },
                index
              )
            ),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "3130897579",
            children: [
              ".container-menu.jsx-3130897579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",
              ".menu.jsx-3130897579{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:24px;padding:1px 20px;border-radius:20px;background-color:white;position:absolute;height:50px;}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var menu = Menu; // CONCATENATED MODULE: ./components/menuButtonMobile/index.js
    const menuButtonMobile_MenuButton = ({ title, slug, locale, onClick }) => {
      const router = (0, router_.useRouter)();
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-110255043",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
            href: slug,
            hrefLang: locale,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
              onClick: onClick,
              className:
                "jsx-110255043" +
                " " +
                `menuButtonMobile ${slug === router.route ? "active" : ""}`,
              children: title,
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "110255043",
            children: [
              ".menuButtonMobile.jsx-110255043{display:block;border-bottom:1px solid silver;font-size:18px;padding:16px;}",
              ".active.jsx-110255043{font-weight:bold;}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var menuButtonMobile =
      menuButtonMobile_MenuButton; // CONCATENATED MODULE: ./components/menuMobile/index.js
    function ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function _objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          ownKeys(Object(source), true).forEach(function (key) {
            _defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function _defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const menuMobile_Menu = ({ menuItems, router }) => {
      const { 0: selectedLanguage, 1: setSelectedLanguage } = (0,
      external_react_.useState)("");
      const { 0: menuState, 1: setMenuState } = (0, external_react_.useState)(
        false
      );
      const { locale } = router;
      (0, external_react_.useEffect)(() => {
        setSelectedLanguage(locale);

        window.onresize = () => {
          setMenuState(false);
        };
      }, [locale]);

      const setLanguage = (l) => {
        const locale = l;
        setSelectedLanguage(locale);
        router.push(router.pathname, router.asPath, {
          locale,
        });
      };

      const toggleMenu = () => {
        setMenuState(!menuState);
      };

      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-738701159",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx("img", {
            src: "/assets/icons/menu.png",
            alt: "menu",
            onClick: toggleMenu,
            className: "jsx-738701159" + " " + "menuIcon",
          }),
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
            className:
              "jsx-738701159" +
              " " +
              `container-menu-mobile ${menuState ? "open" : "close"}`,
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "jsx-738701159",
                children: menuItems.map((item, index) =>
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    menuButtonMobile,
                    _objectSpread(
                      _objectSpread(
                        {
                          title: item.title,
                          slug: item.slug,
                        },
                        router
                      ),
                      {},
                      {
                        onClick: toggleMenu,
                      }
                    ),
                    index
                  )
                ),
              }),
              /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
                className: "jsx-738701159" + " " + "mobileLanguageChanger",
                children: [
                  /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: () => setLanguage("en"),
                    className:
                      "jsx-738701159" +
                      " " +
                      `mobileLanguageChangerButton ${
                        selectedLanguage === "en" ? "active" : ""
                      }`,
                    children: "EN",
                  }),
                  /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: () => setLanguage("tr"),
                    className:
                      "jsx-738701159" +
                      " " +
                      `mobileLanguageChangerButton ${
                        selectedLanguage === "tr" ? "active" : ""
                      }`,
                    children: "TR",
                  }),
                ],
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "738701159",
            children: [
              ".container-menu-mobile.jsx-738701159{-webkit-transition:0.2s ease-out;transition:0.2s ease-out;display:inline-block;background-color:white;width:240px;height:calc(100vh - 60px);position:fixed;top:60px;bottom:36px;right:0;border-left:10px solid #f7f7f7;border-top:1px solid #f7f7f7;padding:10px;}",
              ".open.jsx-738701159{right:0px;opacity:0.9;}",
              ".close.jsx-738701159{right:-240px;opacity:0.5;}",
              ".menuIcon.jsx-738701159{position:fixed;right:10px;top:14px;height:32px;z-index:90;}",
              ".menuIcon.jsx-738701159:hover{cursor:pointer;}",
              ".mobileLanguageChanger.jsx-738701159{position:absolute;bottom:20px;}",
              ".mobileLanguageChangerButton.jsx-738701159{background-color:white;border-radius:10px;border:1px solid silver;margin-left:8px;font-size:14px;padding:6px 10px;}",
              ".active.jsx-738701159{font-weight:bold;color:#3a3a3a !important;}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var menuMobile = menuMobile_Menu;
    // EXTERNAL MODULE: ./locales/tr/index.js
    var tr = __webpack_require__(1997);
    // EXTERNAL MODULE: ./locales/en/index.js
    var en = __webpack_require__(1298); // CONCATENATED MODULE: ./components/slider/index.js
    const Slider = () => {
      const router = (0, router_.useRouter)();
      const { locale } = router;
      const t = locale === "en" ? en /* default */.Z : tr /* default */.Z;

      const createMarkup = () => {
        return {
          __html: t.commons.sliderText,
        };
      };

      const textLength = 5;
      const { 0: currentText, 1: setCurrentText } = (0,
      external_react_.useState)(0);
      (0, external_react_.useEffect)(() => {
        const id = setInterval(() => {
          setCurrentText(currentText + 1);

          if (currentText == textLength - 1) {
            setCurrentText(0);
          }
        }, 3000);
        return () => clearInterval(id);
      }, [currentText]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-1658230403" + " " + "container-slider",
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
            className: "jsx-1658230403" + " " + "sliderText",
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: createMarkup(),
                className: "jsx-1658230403",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-1658230403" + " " + "plus",
                children: "+",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-1658230403" + " " + "textBox",
                children: [...Array(textLength)].map((_, i) =>
                  /*#__PURE__*/ jsx_runtime_.jsx(
                    "p",
                    {
                      className:
                        "jsx-1658230403" +
                        " " +
                        ("loopTextItem " +
                          (currentText === i ? "show" : "hide") || 0),
                      children: t.commons["plus" + i],
                    },
                    i
                  )
                ),
              }),
            ],
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "1658230403",
            children: [
              ".container-slider.jsx-1658230403{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:110px;}",
              ".sliderText.jsx-1658230403{font-weight:600;font-size:28px;line-height:36px;color:white;height:110px;}",
              ".plus.jsx-1658230403{float:left;margin-top:4px;}",
              ".textBox.jsx-1658230403{background-color:rgba(255,255,255,0.8);height:40px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:4px;margin-left:24px;padding:4px 8px;}",
              ".loopTextItem.jsx-1658230403{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;background-color:white;background-image:-webkit-linear-gradient( 330deg, rgb(0,228,216), rgb(132,3,255) );background-size:100%;-webkit-background-clip:text;-webkit-text-fill-color:transparent;-moz-background-clip:text;-moz-text-fill-color:transparent;}",
              ".show.jsx-1658230403{opacity:1;white-space:nowrap;-webkit-transition:0.75s ease-out;transition:0.75s ease-out;}",
              ".hide.jsx-1658230403{opacity:0;white-space:nowrap;display:table-column;-webkit-transition:0.75s ease-out;transition:0.75s ease-out;}",
              "@media screen and (max-width:768px){.sliderText.jsx-1658230403{font-weight:400;font-size:24px;line-height:30px;color:white;padding-left:20px;}}",
              "@-webkit-keyframes fade-jsx-1658230403{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}",
              "@keyframes fade-jsx-1658230403{0%{opacity:0;}50%{opacity:1;}100%{opacity:0;}}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var slider = Slider; // CONCATENATED MODULE: ./components/header/index.js
    const Header = () => {
      const router = (0, router_.useRouter)();
      const { 0: menuItems, 1: setMenuItems } = (0, external_react_.useState)(
        []
      );
      (0, external_react_.useEffect)(() => {
        fetch(`${"http://localhost:3000"}/api/${router.locale}/menu`)
          .then((response) => response.json())
          .then((data) => {
            setMenuItems(data);
          });
      }, [router.locale]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-4190643553" + " " + "container-header",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className:
              "jsx-4190643553" +
              " " +
              "container-fluid shadow d-none d-lg-block header",
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
              className: "jsx-4190643553" + " " + "row",
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className: "jsx-4190643553" + " " + "col",
                  children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-4190643553" + " " + "brand",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(
                      next_link.default,
                      {
                        href: "/",
                        children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("a", {
                          className: "jsx-4190643553",
                          children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                              src: "/assets/ardic_180.png",
                              alt: "",
                              className: "jsx-4190643553" + " " + "logo",
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                              src: "/assets/ardic-tech.png",
                              alt: "",
                              className: "jsx-4190643553",
                            }),
                          ],
                        }),
                      }
                    ),
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className: "jsx-4190643553" + " " + "col",
                  children: /*#__PURE__*/ jsx_runtime_.jsx(menu, {
                    menuItems: menuItems,
                    router: router,
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className: "jsx-4190643553" + " " + "col",
                  children: /*#__PURE__*/ jsx_runtime_.jsx(languageChanger, {}),
                }),
              ],
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className:
              "jsx-4190643553" +
              " " +
              "container-fluid d-lg-none d-xl-none header",
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
              className: "jsx-4190643553" + " " + "row",
              children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className: "jsx-4190643553" + " " + "col mw-75 brand",
                  children: /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
                    href: "/",
                    children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("a", {
                      className: "jsx-4190643553",
                      children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                          src: "/assets/ardic_180.png",
                          alt: "",
                          className: "jsx-4190643553" + " " + "logo",
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("img", {
                          src: "/assets/ardic-tech.png",
                          alt: "",
                          className: "jsx-4190643553",
                        }),
                      ],
                    }),
                  }),
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className: "jsx-4190643553" + " " + "col",
                  children: /*#__PURE__*/ jsx_runtime_.jsx(menuMobile, {
                    menuItems: menuItems,
                    router: router,
                  }),
                }),
              ],
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(slider, {}),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "4190643553",
            children: [
              '.container-header.jsx-4190643553{width:100%;height:360px;background-image:url("/assets/header-background.jpg");background-position:center;background-repeat:no-repeat;background-size:cover;}',
              ".header.jsx-4190643553{position:fixed;z-index:10;top:0px;left:0px;right:0px;background-color:white;}",
              ".brand.jsx-4190643553{padding:14px;}",
              ".logo.jsx-4190643553{height:32px;margin-right:10px;}",
              '@media screen and (max-width:1024px){.container.jsx-4190643553{background-image:url("/assets/header-background-mobile.jpg");}}',
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var header = Header; // CONCATENATED MODULE: ./components/footer/index.js
    const Footer = () => {
      const router = (0, router_.useRouter)();
      const { 0: copyrightData, 1: setCopyrightData } = (0,
      external_react_.useState)("");
      const { 0: poweredData, 1: setPoweredData } = (0,
      external_react_.useState)("");
      const { 0: socialMediasData, 1: setSocialMediasData } = (0,
      external_react_.useState)([]);
      (0, external_react_.useEffect)(() => {
        fetch(`${"http://localhost:3000"}/api/${router.locale}/footer`)
          .then((response) => response.json())
          .then((data) => {
            setCopyrightData(data.copyright);
            setPoweredData(data.powered);
            setSocialMediasData(data.socialMedias);
          });
      }, [router.locale]);
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-2702624293" + " " + "container-footer",
        children: [
          /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "jsx-2702624293" + " " + "container-fluid",
            children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
              className: "jsx-2702624293" + " " + "row",
              children: [
                /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
                  className:
                    "jsx-2702624293" +
                    " " +
                    "col-4 col-sm-4 col-md-5 col-lg-6 col-xl-6 copyright",
                  children: [
                    copyrightData,
                    " ",
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                      className: "jsx-2702624293" + " " + "powered",
                      children: poweredData,
                    }),
                  ],
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                  className:
                    "jsx-2702624293" +
                    " " +
                    "col-8 col-sm-8 col-md-7 col-lg-6 col-xl-6",
                  children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-2702624293" + " " + "socials",
                    children: socialMediasData.map((item, index) => {
                      return /*#__PURE__*/ jsx_runtime_.jsx(
                        next_link.default,
                        {
                          href: item.link,
                          children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "jsx-2702624293",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                              src: `/assets/socials/${item.icon}.png`,
                              alt: item.name,
                              className: "jsx-2702624293" + " " + "socialIcons",
                            }),
                          }),
                        },
                        index
                      );
                    }),
                  }),
                }),
              ],
            }),
          }),
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "2702624293",
            children: [
              ".container-footer.jsx-2702624293{position:-webkit-sticky;position:sticky;bottom:0;left:0;right:0;padding:8px;font-size:14px;height:36px;color:rgb(121,121,121);background-color:whitesmoke;border-top:1px solid silver;}",
              ".socials.jsx-2702624293{text-align:right;}",
              ".socialIcons.jsx-2702624293{opacity:0.5;width:18px;height:18px;margin-left:12px;}",
              ".socialIcons.jsx-2702624293:hover{cursor:pointer;opacity:0.8;}",
              "@media screen and (max-width:768px){.container-footer.jsx-2702624293{height:64px;font-size:12px;padding:12px;border-bottom:10px solid silver;}.copyright.jsx-2702624293{padding-top:6px;}.socialIcons.jsx-2702624293{opacity:0.5;width:30px;height:30px;margin-left:16px;}}",
              "@media screen and (max-width:920px){.powered.jsx-2702624293{display:none;}}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var footer = Footer; // CONCATENATED MODULE: ./components/brands/index.js
    const Brands = () => {
      const router = (0, router_.useRouter)();
      const { 0: left, 1: setLeftData } = (0, external_react_.useState)({});
      const { 0: right, 1: setRightData } = (0, external_react_.useState)({});
      const { 0: isLoaded, 1: setIsLoaded } = (0, external_react_.useState)(
        false
      );
      (0, external_react_.useEffect)(() => {
        fetch(`${"http://localhost:3000"}/api/${router.locale}/brands`)
          .then((response) => response.json())
          .then((data) => {
            setLeftData(data.left);
            setRightData(data.right);
            setIsLoaded(true);
          });
      }, [router.locale]);
      return (
        isLoaded &&
        /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
          className: "jsx-3897846115" + " " + "container-brand",
          children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
              className: "jsx-3897846115" + " " + "brand",
              children: /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
                href: left.slug,
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("a", {
                  className: "jsx-3897846115",
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                      src: `/assets/${left.icon}.jpg`,
                      alt: "",
                      className: "jsx-3897846115" + " " + "brandLogo",
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                      src: `/assets/${left.logo}.png`,
                      alt: "",
                      className: "jsx-3897846115" + " " + "brandName1",
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                      className: "jsx-3897846115" + " " + "brandText",
                      children: left.summary,
                    }),
                  ],
                }),
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
              className: "jsx-3897846115" + " " + "brand",
              children: /*#__PURE__*/ jsx_runtime_.jsx(next_link.default, {
                className: "brand",
                href: right.slug,
                children: /*#__PURE__*/ (0, jsx_runtime_.jsxs)("a", {
                  className: "jsx-3897846115",
                  children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                      src: `/assets/${right.icon}.jpg`,
                      alt: "",
                      className: "jsx-3897846115" + " " + "brandLogo",
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                      src: `/assets/${right.logo}.png`,
                      alt: "",
                      className: "jsx-3897846115" + " " + "brandName2",
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                      className: "jsx-3897846115" + " " + "brandText",
                      children: right.summary,
                    }),
                  ],
                }),
              }),
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
              id: "3897846115",
              children: [
                ".container-brand.jsx-3897846115{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:-100px;-webkit-filter:drop-shadow(2px 2px 8px white);filter:drop-shadow(2px 2px 8px white);opacity:0.9;overflow:hidden;height:100px;}",
                ".brand.jsx-3897846115{width:300px;margin-left:5px;margin-right:5px;border-bottom:none;height:100px;background-color:white;padding:16px;overflow:hidden;}",
                ".brand.jsx-3897846115:hover{margin-top:4px;-webkit-transition:0.1s;transition:0.1s;}",
                ".brandLogo.jsx-3897846115{margin:-30px;}",
                ".brandName1.jsx-3897846115{float:right;height:22px;}",
                ".brandName2.jsx-3897846115{float:right;height:29px;}",
                ".brandText.jsx-3897846115{float:right;width:180px;text-align:right;margin-top:-36px;line-height:20px;font-size:14px;}",
                "@media screen and (max-width:640px){.container.jsx-3897846115{margin-right:10px;margin-left:10px;}.brand.jsx-3897846115{width:50%;height:100px;text-align:center;padding:4px;margin-left:0px;margin-right:0px;}.brand.jsx-3897846115:nth-child(1){border-right:1px solid rgba(0,0,0,0.2);}.brand.jsx-3897846115:nth-child(2){border-left:1px solid rgba(0,0,0,0.2);}.brandLogo.jsx-3897846115{height:80px;margin:-10px;}.brandName1.jsx-3897846115{display:none;}.brandName2.jsx-3897846115{display:none;}.brandText.jsx-3897846115{float:none;width:auto;text-align:center;margin-top:0px;font-size:14px;line-height:14px;}.container.jsx-3897846115{height:110px;opacity:1;}}",
              ],
            }),
          ],
        })
      );
    };

    /* harmony default export */ var brands = Brands;
    // EXTERNAL MODULE: ./node_modules/next/image.js
    var next_image = __webpack_require__(5675); // CONCATENATED MODULE: ./components/upward/index.js
    const Upward = () => {
      const { 0: innerHeight, 1: setInnerHeight } = (0,
      external_react_.useState)(0);
      const { 0: scrollYPosition, 1: setScrollYPosition } = (0,
      external_react_.useState)(0);
      (0, external_react_.useEffect)(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
          window.addEventListener("scroll", handleResize);
        };
      }, []);

      const handleResize = () => {
        if (window) {
          setInnerHeight(window.innerHeight);
          setScrollYPosition(window.scrollY);
        }
      };

      const scrollToUp = () => {
        window.scrollTo(0, 0);
      };

      return innerHeight != 0 &&
        scrollYPosition != 0 &&
        innerHeight / scrollYPosition < 2
        ? /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
            onClick: scrollToUp,
            className: "jsx-2105532480" + " " + "container-upward",
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx(next_image.default, {
                src: "/assets/icons/upward-arrow.png",
                width: "48",
                height: "48",
                alt: "up",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
                id: "2105532480",
                children: [
                  ".container-upward.jsx-2105532480{position:fixed;z-index:99;bottom:50px;right:30px;width:52px;height:52px;padding:8px;opacity:0.5;background-color:black;}",
                  ".container-upward.jsx-2105532480:hover{cursor:pointer;opacity:0.7;bottom:70px;-webkit-transition:0.2s;transition:0.2s;}",
                  "@media screen and (max-width:1024px){.container-upward.jsx-2105532480{bottom:50px;right:30px;width:44px;height:44px;padding:6px;}}",
                  "@media screen and (max-width:768px){.container-upward.jsx-2105532480{display:none;}}",
                ],
              }),
            ],
          })
        : null;
    };

    /* harmony default export */ var upward = Upward; // CONCATENATED MODULE: ./pages/layout.js
    function layout_ownKeys(object, enumerableOnly) {
      var keys = Object.keys(object);
      if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly)
          symbols = symbols.filter(function (sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
          });
        keys.push.apply(keys, symbols);
      }
      return keys;
    }

    function layout_objectSpread(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
          layout_ownKeys(Object(source), true).forEach(function (key) {
            layout_defineProperty(target, key, source[key]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(
            target,
            Object.getOwnPropertyDescriptors(source)
          );
        } else {
          layout_ownKeys(Object(source)).forEach(function (key) {
            Object.defineProperty(
              target,
              key,
              Object.getOwnPropertyDescriptor(source, key)
            );
          });
        }
      }
      return target;
    }

    function layout_defineProperty(obj, key, value) {
      if (key in obj) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true,
        });
      } else {
        obj[key] = value;
      }
      return obj;
    }

    const Layout = ({ children }) => {
      var _children$type, _children$type2, _children$type3, _children$type4;

      const router = (0, router_.useRouter)();
      const { locale } = router;
      const t = locale === "en" ? en /* default */.Z : tr /* default */.Z;
      return /*#__PURE__*/ (0, jsx_runtime_.jsxs)("div", {
        className: "jsx-1567705100" + " " + "content",
        children: [
          /*#__PURE__*/ (0, jsx_runtime_.jsxs)(head_default(), {
            children: [
              /*#__PURE__*/ jsx_runtime_.jsx("title", {
                className: "jsx-1567705100",
                children: "ARDICTECH",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "ARDIC",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "index, follow",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "distribution",
                content: "global",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: "ARDICTECH",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "robots",
                content: "noindex,nofollow",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "57x57",
                href: "/favicons/apple-icon-57x57.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "60x60",
                href: "/favicons/apple-icon-60x60.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "72x72",
                href: "/favicons/apple-icon-72x72.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "76x76",
                href: "/favicons/apple-icon-76x76.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "114x114",
                href: "/favicons/apple-icon-114x114.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "120x120",
                href: "/favicons/apple-icon-120x120.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "144x144",
                href: "/favicons/apple-icon-144x144.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "152x152",
                href: "/favicons/apple-icon-152x152.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "apple-touch-icon",
                sizes: "180x180",
                href: "/favicons/apple-icon-180x180.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "192x192",
                href: "/favicons/android-icon-192x192.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
                href: "/favicons/favicon-32x32.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "96x96",
                href: "/favicons/favicon-96x96.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
                href: "/favicons/favicon-16x16.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "manifest",
                href: "/favicons/manifest.json",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#ffffff",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileImage",
                content: "/ms-icon-144x144.png",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#ffffff",
                className: "jsx-1567705100",
              }),
              /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content:
                  "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover",
                className: "jsx-1567705100",
              }),
            ],
          }),
          (children === null || children === void 0
            ? void 0
            : (_children$type = children.type) === null ||
              _children$type === void 0
            ? void 0
            : _children$type.name) !== "_404"
            ? /*#__PURE__*/ jsx_runtime_.jsx(
                header,
                layout_objectSpread(
                  layout_objectSpread({}, router),
                  {},
                  {
                    t: t,
                  }
                )
              )
            : null,
          (children === null || children === void 0
            ? void 0
            : (_children$type2 = children.type) === null ||
              _children$type2 === void 0
            ? void 0
            : _children$type2.name) !== "_404"
            ? /*#__PURE__*/ jsx_runtime_.jsx(
                brands,
                layout_objectSpread(
                  layout_objectSpread({}, router),
                  {},
                  {
                    t: t,
                  }
                )
              )
            : null,
          children,
          (children === null || children === void 0
            ? void 0
            : (_children$type3 = children.type) === null ||
              _children$type3 === void 0
            ? void 0
            : _children$type3.name) !== "_404"
            ? /*#__PURE__*/ jsx_runtime_.jsx(
                upward,
                layout_objectSpread(
                  layout_objectSpread({}, router),
                  {},
                  {
                    t: t,
                  }
                )
              )
            : null,
          (children === null || children === void 0
            ? void 0
            : (_children$type4 = children.type) === null ||
              _children$type4 === void 0
            ? void 0
            : _children$type4.name) !== "_404"
            ? /*#__PURE__*/ jsx_runtime_.jsx(
                footer,
                layout_objectSpread(
                  layout_objectSpread({}, router),
                  {},
                  {
                    t: t,
                  }
                )
              )
            : null,
          /*#__PURE__*/ jsx_runtime_.jsx(style_default(), {
            id: "1567705100",
            children: [
              "html,body{padding:0;margin:0;font-family:Arial,sans-serif;background-color:whitesmoke;overflow-x:hidden;}",
              ":root{--title-color:rgb(50,50,50);--footer-color:rgb(88,88,88);--main-color:#785de8;--button-degree-background:-webkit-linear-gradient( 330deg, #5263f1, #2ae7d8 );}",
              ".btn-smooth{background-color:#627583;border-radius:6px !important;color:white !important;font-size:15px !important;padding:6px 10px !important;}",
              ".btn-smooth:hover{opacity:0.8;}",
              ".btn{border-radius:20px;box-shadow:0px 10px 30px 0px rgb(0 0 0 / 10%);-webkit-transition:opacity 0.2s ease,box-shadow 0.2s ease;transition:opacity 0.2s ease,box-shadow 0.2s ease;width:auto;padding:16px 20px;background:var(--button-degree-background);color:white;font-weight:bold;text-align:center;}",
              ".btn:hover{cursor:pointer;box-shadow:0px 0px 10px 0px rgb(0 0 0 / 10%);}",
              "a,a:hover,a:visited,a:active{color:inherit;-webkit-text-decoration:none;text-decoration:none;}",
              ".page-box{background-color:white;padding:20px;border-top:6px solid #aa03ff;-webkit-filter:drop-shadow(0px 0px 10px silver);filter:drop-shadow(0px 0px 10px silver);}",
              ".overflow-hidden{overflow:hidden;}",
              ".icons{float:left;margin-right:6px;}",
              ".mw-50px{max-width:50px;}",
              ".mw-75{min-width:75%;}",
              ".page-sub-title{background-color:#454545;padding:6px 20px;font-size:18px;color:#ffffff;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;margin-bottom:20px;margin-left:-20px;border-top-right-radius:6px;border-bottom-right-radius:6px;}",
              "h1{font-weight:800;margin:20px 0px !important;}",
              "h4{font-weight:600;font-size:22px;margin-top:20px;margin-bottom:10px;}",
              "h5{font-weight:bolder;font-size:19px;}",
              ".card-text{margin-bottom:0px !important;}",
              ".alert{padding:6px 10px !important;}",
              ".shadow{-webkit-filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.5));filter:drop-shadow(0px 0px 6px rgba(0,0,0,0.5));}",
              ".section-title{margin-left:-40px;padding-left:10px;background-color:white;font-weight:bolder;border-bottom:1px solid #e4e4e4;padding:10px;text-align:left !important;text-align:center;color:#444444;font-size:18px;}",
              ".link{background-color:#e8e8e8;border:none;border-radius:4px;padding:4px 10px;font-size:14px;color:black;}",
              ".link:hover{-webkit-transition:0.2s;transition:0.2s;background-color:#848484;color:white;}",
              ".card img:nth-child(1):hover{-webkit-transition:0.2s;transition:0.2s;-webkit-filter:saturate(0.5);filter:saturate(0.5);}",
              ".card{-webkit-transition:0.2s;transition:0.2s;overflow:hidden !important;}",
              ".p0{padding:0px !important;}",
              ".pt-10{padding-top:10px;}",
              ".pl-0{padding-left:0px !important;}",
              ".mb-20{margin-bottom:20px;}",
              ".mt-10{margin-top:10px;}",
              ".max-width-100per{max-width:100%;}",
              "label{margin-top:10px;margin-bottom:4px;}",
              ".pointer{cursor:pointer;}",
              ".pointer-fit:hover{cursor:pointer !important;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;opacity:0.7;}",
              ".fit-content{width:-webkit-fit-content !important;width:-moz-fit-content !important;width:fit-content !important;}",
              "@media screen and (max-width:768px){.section-title{font-weight:bolder;padding:10px;text-align:center !important;background-color:whitesmoke;color:#444444;font-size:18px;font-weight:100;margin:-20px;margin-bottom:3px;}}",
              "@media screen and (max-width:420px){body{-webkit-transition:0.5s;transition:0.5s;-webkit-filter:blur(10px);filter:blur(10px);pointer-events:none;position:fixed;}}",
              "@media screen and (max-width:768px){.page-sub-title{font-size:16px;}}",
            ],
          }),
        ],
      });
    };

    /* harmony default export */ var layout = Layout;

    /***/
  },

  /***/ 4453: /***/ function () {
    /* (ignored) */
    /***/
  },
};
