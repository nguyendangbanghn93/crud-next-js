(function() {
var exports = {};
exports.id = 609;
exports.ids = [609];
exports.modules = {

/***/ 2395:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ students; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
// EXTERNAL MODULE: ./components/Layout.js + 1 modules
var Layout = __webpack_require__(3229);
;// CONCATENATED MODULE: ./components/MyTable.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const MyTable = props => {
  const options = _objectSpread({
    configColumn: {
      "column_1": {
        name: "Column 1"
      },
      "column_2": {
        name: "Column 2"
      },
      "column_3": {
        name: "Column 3"
      },
      "action": {
        name: "Action",
        handler: (val, dataRow) => {
          return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.ButtonGroup, {
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
              variant: "outline-warning",
              children: "Edit"
            }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
              variant: "outline-danger",
              children: "Delete"
            })]
          });
        }
      },
      sortColumn: ["column_1", "column_2", "column_3", "action"]
    },
    serial: {
      name: "STT"
    },
    data: [{
      "column_1": "Value 1_1",
      "column_2": "Value 1_2",
      "column_3": "Value 1_3"
    }, {
      "column_1": "Value 2_1",
      "column_2": "Value 2_2",
      "column_3": "Value 2_3"
    }, {
      "column_1": "Value 3_1",
      "column_2": "Value 3_2",
      "column_3": "Value 3_3"
    }]
  }, props);

  const sortColumn = options.serial ? ["#", ...options.configColumn.sortColumn] : [...options.configColumn.sortColumn];
  const data = [...options.data];
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Table, {
    striped: true,
    bordered: true,
    hover: true,
    responsive: true,
    children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
      children: /*#__PURE__*/jsx_runtime_.jsx("tr", {
        children: sortColumn.map((key, index) => {
          if (key === "#") {
            return /*#__PURE__*/jsx_runtime_.jsx("th", {
              children: options.serial.name
            }, index);
          }

          return /*#__PURE__*/jsx_runtime_.jsx("th", {
            children: options.configColumn[key] && options.configColumn[key].name
          }, index);
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
      children: data.map((dataRow, index) => {
        return /*#__PURE__*/jsx_runtime_.jsx("tr", {
          children: sortColumn.map(key => {
            const config = options.configColumn[key];

            if (key === "#") {
              return /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: index + 1
              }, key);
            } else if (config && typeof config.handler === "function") {
              return /*#__PURE__*/jsx_runtime_.jsx("td", {
                children: config.handler(dataRow[key], dataRow)
              }, key);
            }

            return /*#__PURE__*/jsx_runtime_.jsx("td", {
              children: dataRow[key]
            }, key);
          })
        }, index);
      })
    })]
  });
};

/* harmony default export */ var components_MyTable = (MyTable);
// EXTERNAL MODULE: ./lib/student.js
var student = __webpack_require__(8724);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(4823);
;// CONCATENATED MODULE: ./components/Modal.js




function Modal_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Modal_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Modal_ownKeys(Object(source), true).forEach(function (key) { Modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Modal_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Modal = props => {
  const options = Modal_objectSpread({
    clickOverlayHandler: () => console.log('click overlay'),
    title: "Title",
    body: props.children || "Body",
    headerClass: "ps t0 l0 bgcf",
    wrapClass: "pf t50 l50 tt z100",
    cardClass: "mh1v oya pr",
    overlayClass: "pf t0 l0 r0 b0 z99 overlay",
    headerStyle: {},
    wrapStyle: {},
    cardStyle: {},
    overlayStyle: {},
    nameBtnYes: "Có",
    nameBtnNo: "Không",
    noHandler: () => {},
    yesHandler: false,
    isShow: false
  }, props);

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: options.isShow && /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: options.overlayClass,
        style: options.overlayStyle,
        onClick: options.clickOverlayHandler
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: options.wrapClass,
        style: options.wrapStyle,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Card, {
          className: options.cardClass,
          style: options.cardStyle,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Header, {
            className: options.headerClass,
            style: options.headerStyle,
            children: options.title
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Body, {
            children: options.body
          }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Card.Footer, {
            style: {
              textAlign: "right"
            },
            children: options.yesHandler && /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.ButtonGroup, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "success",
                onClick: options.yesHandler,
                children: options.nameBtnYes
              }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                variant: "danger",
                onClick: options.noHandler,
                children: options.nameBtnNo
              })]
            })
          })]
        })
      })]
    })
  });
};

/* harmony default export */ var components_Modal = (Modal);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/Banner.js
var Banner = __webpack_require__(8853);
;// CONCATENATED MODULE: ./pages/students/index.js












const Students = ({
  students: listStudent
}) => {
  const {
    0: isShowConfirmDeleteStudent,
    1: setIsShowConfirmDeleteStudent
  } = (0,external_react_.useState)(false);
  const {
    0: dataStudent,
    1: setDataStudent
  } = (0,external_react_.useState)({});
  const {
    0: students,
    1: setStudents
  } = (0,external_react_.useState)(listStudent);
  const deleteHandler = (0,external_react_.useCallback)(data => {
    setDataStudent(data);
    setIsShowConfirmDeleteStudent(true);
  }, []);
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Modal, {
      isShow: isShowConfirmDeleteStudent,
      clickOverlayHandler: () => setIsShowConfirmDeleteStudent(false),
      title: "Th\xF4ng b\xE1o",
      body: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: ["B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a th\xF4ng tin h\u1ECDc sinh ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("b", {
          children: ["\"", dataStudent.fullname, "\""]
        })]
      }),
      yesHandler: async () => {
        const studentDelete = await (0,student/* deleteStudent */.MA)(dataStudent._id);
        setStudents(prevState => prevState.filter(student => student._id != studentDelete._id));
        setIsShowConfirmDeleteStudent(false);
      },
      noHandler: () => setIsShowConfirmDeleteStudent(false)
    }), /*#__PURE__*/jsx_runtime_.jsx(Banner/* default */.Z, {
      title: "List Student"
    }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Container, {
      className: "mt50",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_MyTable, {
        configColumn: {
          fullname: {
            name: "Fullname"
          },
          birthday: {
            name: "Birthday",
            handler: val => (0,utils/* iDate */.a)(val, "{j}/{n}/{f}")
          },
          email: {
            name: "Email"
          },
          phoneNumber: {
            name: "Phone number"
          },
          action: {
            name: "Action",
            handler: (val, dataRow) => {
              return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.ButtonGroup, {
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `/students/${dataRow._id}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                    variant: "outline-success",
                    children: "Detail"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: `/students/update/${dataRow._id}`,
                  children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                    variant: "outline-warning",
                    children: "Edit"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Button, {
                  variant: "outline-danger",
                  onClick: () => deleteHandler(dataRow),
                  children: "Delete"
                })]
              });
            }
          },
          sortColumn: ["fullname", "birthday", "email", "phoneNumber", "action"]
        },
        data: students
      })
    })]
  });
};

const getStaticProps = async () => {
  const students = await (0,student/* getListStudent */.I2)();
  return {
    props: {
      students,
      revalidate: 1
    }
  };
};
/* harmony default export */ var students = (Students);

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
var __webpack_exports__ = __webpack_require__.X(0, [664,323,909], function() { return __webpack_exec__(2395); });
module.exports = __webpack_exports__;

})();