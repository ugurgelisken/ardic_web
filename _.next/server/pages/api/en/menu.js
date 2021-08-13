(function() {
var exports = {};
exports.id = "pages/api/en/menu";
exports.ids = ["pages/api/en/menu"];
exports.modules = {

/***/ "./pages/api/en/menu.js":
/*!******************************!*\
  !*** ./pages/api/en/menu.js ***!
  \******************************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/en/menu.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hcmRpYy8uL3BhZ2VzL2FwaS9lbi9tZW51LmpzIl0sIm5hbWVzIjpbImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwidGl0bGUiLCJzbHVnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxHQUF0QixFQUEyQjtBQUN4Q0EsS0FBRyxDQUFDQyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsQ0FDbkI7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FEbUIsRUFLbkI7QUFDRUQsU0FBSyxFQUFFLGNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FMbUIsRUFTbkI7QUFDRUQsU0FBSyxFQUFFLFNBRFQ7QUFFRUMsUUFBSSxFQUFFO0FBRlIsR0FUbUIsQ0FBckI7QUFjRCxDIiwiZmlsZSI6InBhZ2VzL2FwaS9lbi9tZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6IFwiQWJvdXRcIixcclxuICAgICAgc2x1ZzogXCIvYWJvdXRcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIlRlY2hub2xvZ2llc1wiLFxyXG4gICAgICBzbHVnOiBcIi90ZWNobm9sb2dpZXNcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiBcIkNvbnRhY3RcIixcclxuICAgICAgc2x1ZzogXCIvY29udGFjdFwiLFxyXG4gICAgfSxcclxuICBdKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9