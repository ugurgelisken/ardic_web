(function() {
var exports = {};
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 7393:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
function handler(req, res) {
  res.status(200).json({
    meta: {
      title: "Teknolojiler",
      desc: "Ignite Cloud, PilarOS, ArCloud, Ignite Edge, AFEX, Makina Öğrenmesi, Ignite Metrics, Modiverse, Derin Öğrenme, Blok Zincir"
    },
    data: [{
      name: "Ignite Cloud",
      summary: "Multi-layered platform technology,  enabling provisioning , management and automation of the connected devices over the air providing REST APIs for integration. ",
      icon: "ignite-cloud",
      slug: "/technologies/ignite-cloud"
    }, {
      name: "PilarOS",
      summary: "AKA TRDROID, is ARDIC’s industrial Android distro with extended security and manageability framework over 1800 new APIs built on Android",
      icon: "pilaros",
      slug: "/technologies/pilaros"
    }, {
      name: "ArCoud",
      summary: " ARDIC developed its own cloud and operates on it. This is an AWS-like cloud service.",
      icon: "arcloud",
      slug: "/technologies/arcloud"
    }, {
      name: "Ignite Edge",
      summary: "Data is handled on the IoT device itself before reaching the cloud enabling lower bandwidth, faster data access, and simplified data management. Smart edge gateways execute rules, allow efficient decision-making, and are fully under your control even without cloud connectivity. ",
      icon: "ignite-edge",
      slug: "/technologies/ignite-edge"
    }, {
      name: "AFEX",
      summary: " ARDIC’s framework that enables end-to-end secure and manageable services on any Android device. AFEX can be embedded or integrated into any Android device by running a simple script, or installed into devices as a mobile app for certain features.",
      icon: "afex",
      slug: "/technologies/afex"
    }, {
      name: "Machine Learning",
      summary: "We use machine learning algorithms to analyze and evaluate the data coming from the field both at edge and cloud.",
      icon: "machine-learning",
      slug: ""
    }, {
      name: "Ignite Metrics",
      summary: "Real-time visibility and optimization tools for field personnels, managers and leaders to increase efficiency.",
      icon: "ignite-metrics",
      slug: "/technologies/ignite-metrics"
    }, {
      name: "Modiverse",
      summary: "Cloud-based enterprise-grade mobile device management platform.",
      icon: "modiverse",
      slug: "/technologies/modiverse"
    }, {
      name: "Deep Learning",
      summary: "Similarly, to interpret the data and to build a decision making mechanism, we are working on our deep learning techniques.",
      icon: "deep-learning",
      slug: ""
    }, {
      name: "Block Chain",
      summary: "For reliable and private IoT applications, we enable blockchain technologies to track connected devices and data.",
      icon: "block-chain",
      slug: ""
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
var __webpack_exports__ = (__webpack_exec__(7393));
module.exports = __webpack_exports__;

})();