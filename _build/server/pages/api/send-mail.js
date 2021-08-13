(function() {
var exports = {};
exports.id = 615;
exports.ids = [615];
exports.modules = {

/***/ 327:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const sendMail = (req, res) => {
  res.status(200);

  let nodemailer = __webpack_require__(8123);

  const dotenv = __webpack_require__(334);

  dotenv.config();
  const mailData = {
    from: `${req.body.name} <${req.body.email}>`,
    to: process.env.MAIL_TO,
    subject: `${"ARDICTECH"} | Contact Form`,
    text: `${req.body.message}`,
    html: `<p>${req.body.message}</p>`
  };
  const transporter = nodemailer.createTransport({
    tls: {
      rejectUnauthorized: false
    },
    port: process.env.MAIL_PORT,
    secure: true,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
    logger: true,
    debug: false
  });
  transporter.sendMail(mailData, function (error, info) {
    if (error) {
      console.log("[ ! ] Mail not sent. ", error);
      return res.status(500).json(_objectSpread({
        status: 500
      }, error));
    }

    console.log("[ ✓ ] Mail sent sucessfully. Info: ", info);
    return res.status(200).json(_objectSpread({
      status: 200
    }, info));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (sendMail);

/***/ }),

/***/ 334:
/***/ (function(module) {

"use strict";
module.exports = require("dotenv");;

/***/ }),

/***/ 8123:
/***/ (function(module) {

"use strict";
module.exports = require("nodemailer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(327));
module.exports = __webpack_exports__;

})();