(function() {
var exports = {};
exports.id = "pages/api/tr/menu";
exports.ids = ["pages/api/tr/menu"];
exports.modules = {

/***/ "./pages/api/tr/menu.js":
/*!******************************!*\
  !*** ./pages/api/tr/menu.js ***!
  \******************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/tr/menu.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmRpYy8uL3BhZ2VzL2FwaS90ci9tZW51LmpzIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwidGl0bGUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsQ0FDbkI7QUFDRUMsU0FBSyxFQUFFLFVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEbUIsRUFLbkI7QUFDRUQsU0FBSyxFQUFFLGNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMbUIsRUFTbkI7QUFDRUQsU0FBSyxFQUFFLFVBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUbUIsQ0FBckI7QUFjRCxDIiwiZmlsZSI6InBhZ2VzL2FwaS90ci9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiSGFra8SxbmRhXCIsXHJcbiAgICAgIHNsdWc6IFwiL2Fib3V0XCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCJUZWtub2xvamlsZXJcIixcclxuICAgICAgc2x1ZzogXCIvdGVjaG5vbG9naWVzXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogXCLEsGxldGnFn2ltXCIsXHJcbiAgICAgIHNsdWc6IFwiL2NvbnRhY3RcIixcclxuICAgIH0sXHJcbiAgXSk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==