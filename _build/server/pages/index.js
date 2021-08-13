(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 7433:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ pages; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./locales/tr/index.js
var tr = __webpack_require__(1997);
// EXTERNAL MODULE: ./locales/en/index.js
var en = __webpack_require__(1298);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(3289);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: ./components/references/index.js








const References = () => {
  const router = (0,router_.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? en/* default */.Z : tr/* default */.Z;
  const {
    0: referencesData,
    1: setReferencesData
  } = (0,external_react_.useState)([]);
  (0,external_react_.useEffect)(() => {
    fetch(`${"http://localhost:3000"}/api/${router.locale}/references`).then(response => response.json()).then(data => {
      setReferencesData(data);
    });
  }, [router.locale]);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3989760318" + " " + "container-fluid",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3989760318" + " " + "section-title",
      children: t.commons.references
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3989760318" + " " + "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3989760318" + " " + "col container-references",
        children: referencesData.map((item, index) => {
          return /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: `assets/references/${item.name}.jpg`,
            alt: "",
            className: "jsx-3989760318" + " " + "item"
          }, index);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3989760318",
      children: [".container-references.jsx-3989760318{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin-top:10px;margin-bottom:-10px;}", ".item.jsx-3989760318{height:70px;width:auto;opacity:0.6;}", ".item.jsx-3989760318:hover{opacity:1;}", "@media screen and (max-width:1024px){.container.jsx-3989760318{margin-bottom:0px;}}"]
    })]
  });
};

/* harmony default export */ var references = (References);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(4823);
;// CONCATENATED MODULE: ./components/successStories/index.js









const SuccessStories = ({
  data
}) => {
  const router = (0,router_.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? en/* default */.Z : tr/* default */.Z;
  (0,external_react_.useEffect)(() => {
    // Close all opened details element
    const details = document.querySelectorAll("details");
    details.forEach(targetDetail => {
      const details = document.querySelectorAll("details");
      targetDetail.addEventListener("click", () => {
        details.forEach(detail => {
          if (detail !== targetDetail) {
            detail.removeAttribute("open");
          }
        });
      });
    });
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3589217837" + " " + "container-fluid",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3589217837" + " " + "section-title",
      children: t.commons.successStories
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3589217837" + " " + "row",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "jsx-3589217837" + " " + "col p-2 pl-0",
        children: data.map((item, index) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)("details", {
            className: "jsx-3589217837" + " " + "details",
            children: [/*#__PURE__*/jsx_runtime_.jsx("summary", {
              className: "jsx-3589217837",
              children: item.title
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "jsx-3589217837" + " " + "details-text",
              children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                dangerouslySetInnerHTML: (0,utils.createHTML)(item.detailTexts, t),
                className: "jsx-3589217837"
              })
            })]
          }, index);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3589217837",
      children: [".details.jsx-3589217837{color:#606060;font-size:16px;font-weight:bolder;margin:16px;padding-bottom:10px;border-bottom:1px solid #f2f2f2;}", "details.jsx-3589217837:hover{-webkit-transition:0,2s;transition:0,2s;opacity:0.8;}", ".details-text.jsx-3589217837{font-size:16px;margin:10px;margin-left:18px;font-weight:200;margin:14px;}"]
    })]
  });
};

/* harmony default export */ var successStories = (SuccessStories);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/solutions/index.js








const Solutions = ({
  data
}) => {
  const router = (0,router_.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? en/* default */.Z : tr/* default */.Z;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-3035010050" + " " + "container",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3035010050" + " " + "section-title",
      children: t.commons.solutions
    }), /*#__PURE__*/jsx_runtime_.jsx("br", {
      className: "jsx-3035010050"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-3035010050" + " " + "row",
      children: data.solutions.map((item, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "jsx-3035010050" + " " + "col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "jsx-3035010050" + " " + "item",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "jsx-3035010050" + " " + "card mb-4",
              children: [/*#__PURE__*/jsx_runtime_.jsx("img", {
                src: item.cover,
                alt: item.title,
                className: "jsx-3035010050" + " " + "card-img-top"
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "jsx-3035010050" + " " + "card-body",
                children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
                  className: "jsx-3035010050" + " " + "card-title",
                  children: item.title
                }), /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "jsx-3035010050" + " " + "card-text",
                  children: item.summary
                }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "jsx-3035010050" + " " + "iconsContainer",
                  children: item.technologies.map((icon, i) => {
                    return icon.link ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: icon.link,
                      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                        className: "jsx-3035010050",
                        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                          src: icon.image,
                          alt: icon.name,
                          title: icon.name,
                          className: "jsx-3035010050" + " " + "icons iconsLink"
                        })
                      })
                    }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: icon.image,
                      alt: icon.name,
                      title: icon.name,
                      className: "jsx-3035010050" + " " + "icons"
                    });
                  })
                })]
              })]
            })
          })
        }, index);
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "jsx-3035010050" + " " + "row moreBox",
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/contact",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "jsx-3035010050" + " " + "plusIcon",
          children: "+"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "jsx-3035010050" + " " + "plusContent",
        children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
          className: "jsx-3035010050",
          children: data.more.title
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "jsx-3035010050" + " " + "plusText",
          children: data.more.text
        })]
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3035010050",
      children: [".iconsContainer.jsx-3035010050{position:absolute;top:10px;right:10px;}", ".icons.jsx-3035010050{width:48px;border-radius:24px;margin-left:12px;-webkit-filter:drop-shadow(2px 2px 4px silver);filter:drop-shadow(2px 2px 4px silver);}", ".iconsLink.jsx-3035010050:hover{cursor:pointer;border:1px solid whitesmoke;}", ".moreBox.jsx-3035010050{border:1px solid #dedede;border-radius:2px;width:50%;max-width:600px;margin:auto auto;text-align:center;padding:10px;margin-top:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}", ".plusIcon.jsx-3035010050{margin-top:-10px;margin-bottom:20px;position:relative;z-index:1;top:-50px;font-size:52px;font-weight:800;margin:auto auto;height:80px;width:80px;border-radius:100px;color:white !important;background-image:-webkit-linear-gradient( 330deg, rgb(0,228,216), rgb(132,3,255) );-webkit-filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.5));filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.5));cursor:pointer;}", ".plusIcon.jsx-3035010050:hover{-webkit-filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.8));filter:drop-shadow(1px 1px 4px rgba(0,0,0,0.8));opacity:0.95;}", ".plusContent.jsx-3035010050{margin-top:-30px;}", "@media screen and (max-width:1024px){.moreBox.jsx-3035010050{width:100%;margin:0px;margin-bottom:40px;margin-top:30px;}}"]
    })]
  });
};

/* harmony default export */ var solutions = (Solutions);
;// CONCATENATED MODULE: ./pages/index.js










const Index = ({
  successStoriesData,
  successStoriesMeta,
  solutionsMeta,
  solutionsData
}) => {
  const router = (0,router_.useRouter)();
  const {
    locale
  } = router;
  const t = locale === "en" ? en/* default */.Z : tr/* default */.Z;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "container",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "ARDICTECH"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: `${solutionsMeta.desc} | ${successStoriesMeta.desc}`
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "page-box",
      children: [/*#__PURE__*/jsx_runtime_.jsx(solutions, {
        data: solutionsData
      }), /*#__PURE__*/jsx_runtime_.jsx(successStories, {
        data: successStoriesData
      }), /*#__PURE__*/jsx_runtime_.jsx(references, {})]
    })]
  });
};

const getServerSideProps = async router => {
  // Success Stories Section
  const res_successStories = await fetch(`${"http://localhost:3000"}/api/${router.locale}/success-stories`);
  const successStoriesData = await res_successStories.json(); // Solutions Section

  const res_solutions = await fetch(`${"http://localhost:3000"}/api/${router.locale}/solutions`);
  const solutionsData = await res_solutions.json();
  return {
    props: {
      successStoriesMeta: successStoriesData.meta,
      successStoriesData: successStoriesData.data,
      solutionsMeta: solutionsData.meta,
      solutionsData: solutionsData.data
    }
  };
};
/* harmony default export */ var pages = (Index);

/***/ }),

/***/ 4823:
/***/ (function(module) {

const createHTML = (data, t) => {
  const htmlText = data.map((item, index) => {
    if (item.tag === "a") {
      return `<a class="btn-smooth" key=${index} href=${item.text} target="_blank" rel="noopener noreferrer">${t.commons.seeTheDocuments}</a><br/>`;
    }

    return `<${item.tag} key="${index}">${item.text}</${item.tag}>`;
  });
  return {
    __html: htmlText.join("").replace(/\*/g, "<br/>●").replace(/\--/g, "<br/>&emsp;○").replace(/\> <br/g, "")
  };
};

module.exports = {
  createHTML
};

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

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,969], function() { return __webpack_exec__(7433); });
module.exports = __webpack_exports__;

})();