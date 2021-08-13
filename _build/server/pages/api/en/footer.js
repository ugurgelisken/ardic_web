(function() {
var exports = {};
exports.id = 822;
exports.ids = [822];
exports.modules = {

/***/ 9766:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json({
    copyright: "©2021 ARDIC Inc.",
    powered: " | Powered by ARDIC Technology",
    socialMedias: [{
      name: "Facebook",
      link: "https://www.facebook.com/ardictech",
      icon: "facebook"
    }, {
      name: "Instagram",
      link: "https://www.instagram.com/ardictech",
      icon: "instagram"
    }, {
      name: "Twitter",
      link: "https://twitter.com/ardictech",
      icon: "twitter"
    }, {
      name: "Linkedin",
      link: "https://www.linkedin.com/company/ardictech/mycompany",
      icon: "linkedin"
    }, {
      name: "Medium",
      link: "https://medium.com/@ardic",
      icon: "medium"
    }]
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(9766));
module.exports = __webpack_exports__;

})();