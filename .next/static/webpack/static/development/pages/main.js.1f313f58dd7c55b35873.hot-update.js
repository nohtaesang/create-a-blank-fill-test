webpackHotUpdate("static\\development\\pages\\main.js",{

/***/ "./src/ts/layouts/content.tsx":
/*!************************************!*\
  !*** ./src/ts/layouts/content.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_models_subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/models/subject */ "./src/ts/redux/models/subject.ts");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
var _jsxFileName = "C:\\Users\\BLOCK_BANK_007\\Desktop\\github\\create-a-blank-fill-test\\src\\ts\\layouts\\content.tsx";





var Content = function Content(props) {
  var onClickGetSubjectList = function onClickGetSubjectList() {
    props.getSubjectList(0);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: onClickGetSubjectList,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "bye"));
};

var mapStateToProps = function mapStateToProps(state) {
  var subjectReducer = state.subjectReducer;
  var subjectList = subjectReducer.subjectList;
  return {
    subjectList: subjectList
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getSubjectList: Object(redux__WEBPACK_IMPORTED_MODULE_3__["bindActionCreators"])(_redux_models_subject__WEBPACK_IMPORTED_MODULE_2__["getSubjectList"], dispatch)
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Content));

/***/ })

})
//# sourceMappingURL=main.js.1f313f58dd7c55b35873.hot-update.js.map