(function() {
var exports = {};
exports.id = 613;
exports.ids = [613];
exports.modules = {

/***/ 8004:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json({
    left: {
      title: "Modiverse",
      summary: "Enterprise Mobility Management as a Service",
      logo: "modiverse",
      icon: "logo-modiverse",
      slug: "/technologies/modiverse"
    },
    right: {
      title: "IoT-Ignite",
      summary: "Full Stack IoT Platform with Edge Computing",
      logo: "iot-ignite",
      icon: "logo-iot-ignite",
      slug: "/technologies/iot-ignite"
    }
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(8004));
module.exports = __webpack_exports__;

})();