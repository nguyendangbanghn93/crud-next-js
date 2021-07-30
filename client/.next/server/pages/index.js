(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 8017:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: external "next/Link"
var Link_namespaceObject = require("next/Link");;
var Link_default = /*#__PURE__*/__webpack_require__.n(Link_namespaceObject);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__(8853);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(3229);
;// CONCATENATED MODULE: ./pages/index.js






function Home() {
  return /*#__PURE__*/jsx_runtime_.jsx(Layout/* default */.Z, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Banner/* default */.Z, {
      title: "Student Manager",
      children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "This is my Student-manager app"
      }), /*#__PURE__*/jsx_runtime_.jsx((Link_default()), {
        href: "/students",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
          variant: "dark",
          children: "Start"
        })
      })]
    })
  });
} // export const

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 9226:
/***/ (function(module) {

"use strict";
module.exports = require("react-bootstrap");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,323], function() { return __webpack_exec__(8017); });
module.exports = __webpack_exports__;

})();