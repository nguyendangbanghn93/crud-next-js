exports.id = 909;
exports.ids = [909];
exports.modules = {

/***/ 8724:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I2": function() { return /* binding */ getListStudent; },
/* harmony export */   "MA": function() { return /* binding */ deleteStudent; },
/* harmony export */   "Z0": function() { return /* binding */ student_ids; },
/* harmony export */   "KD": function() { return /* binding */ getStudentById; },
/* harmony export */   "LK": function() { return /* binding */ createStudent; },
/* harmony export */   "Gc": function() { return /* binding */ updateStudent; }
/* harmony export */ });
const getListStudent = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/students");
    const data = await response.json();
    return data.success ? data.students : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
const deleteStudent = async id => {
  try {
    const response = await fetch(`http://localhost:5000/api/students/${id}`, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data.success ? data.student : {};
  } catch (error) {
    console.log(error);
    return [];
  }
};
const student_ids = async () => {
  try {
    const students = await getListStudent();
    return students.map(student => ({
      params: {
        id: `${student._id}`
      }
    }));
  } catch (error) {
    console.log(error);
  }
};
const getStudentById = async id => {
  try {
    const response = await fetch(`http://localhost:5000/api/students/${id}`);
    const data = await response.json();
    return data.success ? data.student : {};
  } catch (error) {
    console.log(error);
    return [];
  }
};
const createStudent = async student => {
  try {
    const response = await fetch(`http://localhost:5000/api/students`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });
    const data = await response.json();
    return data.success ? data.student : {};
  } catch (error) {
    console.log(error);
    return [];
  }
};
const updateStudent = async (id, student) => {
  try {
    const response = await fetch(`http://localhost:5000/api/students/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(student)
    });
    const data = await response.json();
    console.log('data____________', data);
    return data.success ? data.student : {};
  } catch (error) {
    console.log(error);
    return [];
  }
}; // {
//     url: "http://url",
//     method: "get",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: "",
// }

/***/ }),

/***/ 4823:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": function() { return /* binding */ iDate; }
/* harmony export */ });
const iDate = (date, stringFormat) => {
  const t = new Date(date || new Date());

  if (!t.getDate()) {
    return '';
  }

  const s = Number(t);
  const o = {
    D: t.getDay(),
    // index ngày trong tuần (number)
    H: t.getHours(),
    // giờ (number/H)
    J: t.getDate(),
    //ngày trong tháng (number)
    M: t.getMinutes(),
    //phút (number/M)
    N: t.getMonth() + 1,
    //tháng Việt Nam (number)
    O: t,
    //(Date)
    S: t.getSeconds(),
    // giây (number)
    d: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"][t.getDay()],
    //thứ Việt nam (String)
    f: t.getFullYear(),
    //năm (number)
    h: ("0" + t.getHours()).substr(-2),
    //giờ (String)
    j: ("0" + t.getDate()).substr(-2),
    // ngày (String)
    m: ("0" + t.getMinutes()).substr(-2),
    //phút (String)
    n: ("0" + (t.getMonth() + 1)).substr(-2),
    // tháng (String)
    s: ("0" + t.getSeconds()).substr(-2),
    //giây (String)
    t: Number(s),
    //mls (number)
    u: parseInt(s / 1000),
    //timestamp (number)        
    y: String(t.getFullYear()).substr(-2),
    //2 số cuối của năm (String)
    toISO: t.toISOString().slice(0, 19).replace('T', ' ')
  };

  if (typeof stringFormat === "string") {
    return stringFormat.replace(/{.}/g, a => o[a.replace(/[{}]/g, "")]);
  }

  return o;
};

/***/ })

};
;