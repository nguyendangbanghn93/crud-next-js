exports.id = 323;
exports.ids = [323];
exports.modules = {

/***/ 8853:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9226);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);




const Banner = ({
  title,
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      style: {
        background: "#eee",
        padding: "25px"
      },
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: "display-3",
        children: title
      }), children]
    })
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Banner);

/***/ }),

/***/ 3229:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_Layout; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/NavbarMenu.js





const NavbarMenu = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar, {
    bg: "dark",
    variant: "dark",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Container, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        href: "/",
        passHref: true,
        children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Navbar.Brand, {
          href: "#home",
          children: "CRUD-NEXTJS"
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Nav, {
        className: "me-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
            href: "#home",
            children: "Home"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/students",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
            href: "#home",
            children: "List Student"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/students/create",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Nav.Link, {
            href: "#home",
            children: "Add student"
          })
        })]
      })]
    })
  });
};

/* harmony default export */ var components_NavbarMenu = (NavbarMenu);
;// CONCATENATED MODULE: ./components/Layout.js





const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_NavbarMenu, {}), children]
  });
};

/* harmony default export */ var components_Layout = (Layout);

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;