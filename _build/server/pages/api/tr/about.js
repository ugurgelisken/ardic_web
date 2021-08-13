(function() {
var exports = {};
exports.id = 123;
exports.ids = [123];
exports.modules = {

/***/ 7261:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Hakkında",
      desc: "Vizyona sahip yüksek teknolojili bir yazılım şirketiyiz ve üst düzey çözümler uyguluyoruz."
    },
    data: {
      text: "Vizyona sahip yüksek teknolojili bir yazılım şirketiyiz ve üst düzey çözümler uyguluyoruz.",
      section_1: {
        title: "Kurulu olan",
        value: "2008",
        icon: "start"
      },
      section_2: {
        title: "VC-funded tarafından",
        value: "2016",
        icon: "star"
      },
      section_3: {
        title: "Takımdaki üyeler",
        value: "32",
        icon: "members"
      },
      section_4: {
        title: "İlk AR-GE projeleri",
        value: "25",
        icon: "projects"
      },
      chart: {
        title: "Bağlı cihazlar",
        value_1: {
          name: "Şey",
          value: "1030k"
        },
        value_2: {
          name: "Ağ geçidi",
          value: "185k"
        }
      }
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
var __webpack_exports__ = (__webpack_exec__(7261));
module.exports = __webpack_exports__;

})();