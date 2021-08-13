(function() {
var exports = {};
exports.id = 799;
exports.ids = [799];
exports.modules = {

/***/ 7030:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json([{
    title: "Hakkında",
    slug: "/about"
  }, {
    title: "Teknolojiler",
    slug: "/technologies"
  }, {
    title: "Takım",
    slug: "/teams"
  }, {
    title: "Kariyer",
    slug: "/career"
  }, {
    title: "İletişim",
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
var __webpack_exports__ = (__webpack_exec__(7030));
module.exports = __webpack_exports__;

})();