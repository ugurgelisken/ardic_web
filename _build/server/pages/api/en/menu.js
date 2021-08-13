(function() {
var exports = {};
exports.id = 725;
exports.ids = [725];
exports.modules = {

/***/ 150:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json([{
    title: "About",
    slug: "/about"
  }, {
    title: "Technologies",
    slug: "/technologies"
  }, {
    title: "Teams",
    slug: "/teams"
  }, {
    title: "Careers",
    slug: "/career"
  }, {
    title: "Contact",
    slug: "/contact"
  }]);
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(150));
module.exports = __webpack_exports__;

})();