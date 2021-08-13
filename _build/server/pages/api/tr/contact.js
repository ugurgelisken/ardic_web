(function() {
var exports = {};
exports.id = 420;
exports.ids = [420];
exports.modules = {

/***/ 8179:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "İletişim",
      desc: "ARDIC ArGe Bilgi ve Teknoloji Çözümleri, Yazılım, Bilgisayar San. ve Tic. A.Ş."
    },
    data: [{
      name: "Istanbul Ofisi",
      address: "Atatürk Mah. Gülibrişim Cd. No:23 Evinpark Residence A1 Blok Daire:2 34758 Ataşehir/İstanbul - Turkey",
      phone: "+90 530 098 5889",
      email: "info@ardictech.com",
      map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12046.957584059248!2d29.1387946!3d40.987187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xaf1c5228c6d29173!2sARDIC+Technology!5e0!3m2!1sen!2str!4v1564054512246!5m2!1sen!2str"
    }, {
      name: "Gebze Ofisi",
      address: "TÜBİTAK MAM Gebze Yerleşkesi Teknoloji Serbest Bölgesi Yeni Teknoloji Binaları B Blok 205-206 41470 Gebze/Kocaeli - Turkey",
      phone: "-",
      email: "info@ardictech.com",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24164.64017137431!2d29.449119881342618!3d40.7932463181362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cb20fd7130460b%3A0xc156c6ebb0b5372a!2sARDIC+ARGE+Bilgi+ve+Teknoloji+%C3%87%C3%B6z%C3%BCmleri!5e0!3m2!1sen!2str!4v1564054793920!5m2!1sen!2str"
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
var __webpack_exports__ = (__webpack_exec__(8179));
module.exports = __webpack_exports__;

})();