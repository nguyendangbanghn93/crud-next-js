exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 8176:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_StudentForm; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-bootstrap"
var external_react_bootstrap_ = __webpack_require__(9226);
;// CONCATENATED MODULE: ./hooks/useInput.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const useInput = (validateValue, options) => {
  const {
    0: enteredValue,
    1: setEnteredValue
  } = (0,external_react_.useState)(options.default);
  const {
    0: isTouched,
    1: setIsTouched
  } = (0,external_react_.useState)(false);
  const valueIsValid = validateValue(enteredValue);
  const hasError = (0,external_react_.useMemo)(() => !valueIsValid && isTouched, [valueIsValid, isTouched]);
  const changeHandler = (0,external_react_.useCallback)(event => setEnteredValue(event.target.value), []);
  const blurHandler = (0,external_react_.useCallback)(event => setIsTouched(true), []);
  const setDefaultValue = (0,external_react_.useCallback)(value => setEnteredValue(value), []);
  const reset = (0,external_react_.useCallback)(() => {
    setEnteredValue('');
    setIsTouched(false);
  }, []);
  return _objectSpread({
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    changeHandler,
    blurHandler,
    setDefaultValue,
    reset
  }, options);
};

/* harmony default export */ var hooks_useInput = (useInput);
// EXTERNAL MODULE: ./utils/index.js
var utils = __webpack_require__(4823);
;// CONCATENATED MODULE: ./components/StudentForm.js







const StudentForm = ({
  student = {},
  submitHandler,
  children
}) => {
  const isNotNull = (0,external_react_.useCallback)(value => (value || "").trim() !== "", []);
  const isEmail = (0,external_react_.useCallback)(value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  }, []);
  const isPhoneNumber = (0,external_react_.useCallback)(value => {
    const re = /^((09[0-9]{8})|(08([1-9])[0-9]{7})|(01(2|6|8|9)[0-9]{8})|(069[2-9][0-9]{4,5})|(080(4|31|511|8)[0-9]{4})|(0([2-8])[0-9]{1,2}[0-9]{1,3}[0-9]{5}))$/;
    return re.test(String(value).toLowerCase());
  }, []);
  const fullname = hooks_useInput(isNotNull, {
    type: "text",
    label: "Fullname:",
    placeholder: "Enter fullname",
    errorMessage: "Fullname cannot be empty",
    default: student.fullname
  });
  const birthday = hooks_useInput(isNotNull, {
    type: "date",
    label: "Birthday:",
    placeholder: "Enter birthday",
    errorMessage: "Birthday cannot be empty",
    default: student.birthday ? (0,utils/* iDate */.a)(student.birthday, "{f}-{n}-{j}") : ""
  });
  const email = hooks_useInput(isEmail, {
    type: "email",
    label: "Email:",
    placeholder: "Enter email",
    errorMessage: "Email invalidate",
    default: student.email
  });
  const phoneNumber = hooks_useInput(isPhoneNumber, {
    type: "text",
    label: "Phone number:",
    placeholder: "Enter phone number",
    errorMessage: "Phone invalidate",
    default: student.phoneNumber
  });
  const inputs = {
    fullname,
    birthday,
    email,
    phoneNumber
  };
  const isSubmit = (0,external_react_.useMemo)(() => {
    let d = true;

    for (const k in inputs) {
      inputs[k].isValid === false && (d = false);
    }

    return d;
  }, Object.keys(inputs).map(k => inputs[k].isValid));
  const dataForm = (0,external_react_.useMemo)(() => {
    const data = {};

    for (const k in inputs) {
      data[k] = inputs[k].value;
    }

    return data;
  }, Object.keys(inputs).map(k => inputs[k].value));
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form, {
    style: {
      minWidth: "350px"
    },
    onSubmit: e => {
      e.preventDefault();
      isSubmit && submitHandler(dataForm);
    },
    onReset: () => {
      for (const k in inputs) {
        inputs[k].reset();
      }
    },
    children: [Object.keys(inputs).map(k => {
      const input = inputs[k];
      return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_bootstrap_.Form.Group, {
        className: "mb-3",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Label, {
          children: input.label
        }), /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Control, {
          type: input.type,
          placeholder: input.placeholder,
          onChange: input.changeHandler,
          onBlur: input.blurHandler,
          value: input.value
        }), input.hasError && /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
          className: "text-danger",
          children: input.errorMessage
        })]
      });
    }), !isSubmit && /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "tar mb-3",
      children: /*#__PURE__*/jsx_runtime_.jsx(external_react_bootstrap_.Form.Text, {
        className: "text-danger",
        children: "\"An invalid value cannot be submit\""
      })
    }), children]
  });
};

/* harmony default export */ var components_StudentForm = (StudentForm);

/***/ })

};
;