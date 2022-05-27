"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Email-collector/EmailCollector.jsx":
/*!***********************************************************!*\
  !*** ./src/components/Email-collector/EmailCollector.jsx ***!
  \***********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_app_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../data/app.json */ \"./src/data/app.json\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-toast */ \"./node_modules/react-hot-toast/dist/react-hot-toast.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/mac/Documents/Projects/storyforge/client/src/components/Email-collector/EmailCollector.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar EmailCollector = function EmailCollector(_ref) {\n  _s();\n\n  var style = _ref.style,\n      lines = _ref.lines;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  var validateEmail = function validateEmail() {\n    if (/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/.test(email)) {\n      return true;\n    }\n\n    return false;\n  };\n\n  var handleAddEmail = function handleAddEmail() {\n    if (validateEmail()) axios__WEBPACK_IMPORTED_MODULE_3___default().post('http://localhost:5000/api/add-email', {\n      email: email\n    }).then(function (response) {\n      if (response.status == 200) {\n        react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].success('Email collected!');\n        setEmail('');\n      }\n    });else react_hot_toast__WEBPACK_IMPORTED_MODULE_5__[\"default\"].error('Invalid email!');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"section\", {\n    className: \"services bords section-padding \".concat(style === '4item' ? 'lficon' : lines ? '' : 'pt-0'),\n    style: {\n      paddingBottom: '0px',\n      paddingTop: '80px'\n    },\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_hot_toast__WEBPACK_IMPORTED_MODULE_5__.Toaster, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n      className: \"container\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"col-lg-8 col-md-10\",\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n            className: \"sec-head  text-center\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h6\", {\n              className: \"wow fadeIn\",\n              \"data-wow-delay\": \".5s\",\n              children: \"Interested in finding out more?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h3\", {\n              className: \"wow color-font\",\n              children: \"Want to be one of our very first beta test writers?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n              style: {\n                paddingBottom: '0px',\n                paddingTop: '70px'\n              },\n              children: \"Sign up below for awesome (and free) in-app rewards.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"row justify-content-center\",\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n          className: \"subscribe\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"input\", {\n            type: \"text\",\n            placeholder: \"Type Your Email\",\n            onChange: function onChange(e) {\n              return setEmail(e.target.value);\n            },\n            value: email\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"span\", {\n            style: {\n              cursor: 'pointer'\n            },\n            onClick: handleAddEmail,\n            className: \"subs pe-7s-paper-plane\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), lines ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"line top left\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n        className: \"line bottom right\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true) : null]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(EmailCollector, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n\n_c = EmailCollector;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EmailCollector);\n\nvar _c;\n\n$RefreshReg$(_c, \"EmailCollector\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9FbWFpbC1jb2xsZWN0b3IvRW1haWxDb2xsZWN0b3IuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUEsSUFBTU8sY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzNDLGtCQUEwQlIsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT1MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBRUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFNO0FBQzFCLFFBQUksZ0RBQWdEQyxJQUFoRCxDQUFxREgsS0FBckQsQ0FBSixFQUFpRTtBQUMvRCxhQUFPLElBQVA7QUFDRDs7QUFDRCxXQUFPLEtBQVA7QUFDRCxHQUxEOztBQU9BLE1BQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBTTtBQUMzQixRQUFJRixhQUFhLEVBQWpCLEVBQ0VSLGlEQUFBLENBQ1EscUNBRFIsRUFDK0M7QUFBRU0sTUFBQUEsS0FBSyxFQUFFQTtBQUFULEtBRC9DLEVBRUdNLElBRkgsQ0FFUSxVQUFDQyxRQUFELEVBQWM7QUFDbEIsVUFBSUEsUUFBUSxDQUFDQyxNQUFULElBQW1CLEdBQXZCLEVBQTRCO0FBQzFCYixRQUFBQSwrREFBQSxDQUFjLGtCQUFkO0FBQ0FNLFFBQUFBLFFBQVEsQ0FBQyxFQUFELENBQVI7QUFDRDtBQUNGLEtBUEgsRUFERixLQVNLTiw2REFBQSxDQUFZLGdCQUFaO0FBQ04sR0FYRDs7QUFZQSxzQkFDRTtBQUNFLGFBQVMsMkNBQ1BHLEtBQUssS0FBSyxPQUFWLEdBQW9CLFFBQXBCLEdBQStCQyxLQUFLLEdBQUcsRUFBSCxHQUFRLE1BRHJDLENBRFg7QUFJRSxTQUFLLEVBQUU7QUFBRVksTUFBQUEsYUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxNQUFBQSxVQUFVLEVBQUU7QUFBcEMsS0FKVDtBQUFBLDRCQU1FLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORixlQVFFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsb0JBQWY7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsdUJBQWY7QUFBQSxvQ0FDRTtBQUFJLHVCQUFTLEVBQUMsWUFBZDtBQUEyQixnQ0FBZSxLQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFO0FBQUksdUJBQVMsRUFBQyxnQkFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQU9FO0FBQUcsbUJBQUssRUFBRTtBQUFFRCxnQkFBQUEsYUFBYSxFQUFFLEtBQWpCO0FBQXdCQyxnQkFBQUEsVUFBVSxFQUFFO0FBQXBDLGVBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQWdCRTtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUNFO0FBQ0UsZ0JBQUksRUFBQyxNQURQO0FBRUUsdUJBQVcsRUFBQyxpQkFGZDtBQUdFLG9CQUFRLEVBQUUsa0JBQUNDLENBQUQ7QUFBQSxxQkFBT1osUUFBUSxDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFmO0FBQUEsYUFIWjtBQUlFLGlCQUFLLEVBQUVmO0FBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FO0FBQ0UsaUJBQUssRUFBRTtBQUFFZ0IsY0FBQUEsTUFBTSxFQUFFO0FBQVYsYUFEVDtBQUVFLG1CQUFPLEVBQUVaLGNBRlg7QUFHRSxxQkFBUyxFQUFDO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJGLEVBd0NHTCxLQUFLLGdCQUNKO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUEsb0JBREksR0FLRixJQTdDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlERCxDQXZFRDs7R0FBTUY7O0tBQUFBO0FBeUVOLCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0VtYWlsLWNvbGxlY3Rvci9FbWFpbENvbGxlY3Rvci5qc3g/ZDhjNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IGFwcERhdGEgZnJvbSAnLi4vLi4vZGF0YS9hcHAuanNvbic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHRvYXN0LCB7IFRvYXN0ZXIgfSBmcm9tICdyZWFjdC1ob3QtdG9hc3QnO1xuXG5jb25zdCBFbWFpbENvbGxlY3RvciA9ICh7IHN0eWxlLCBsaW5lcyB9KSA9PiB7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuXG4gIGNvbnN0IHZhbGlkYXRlRW1haWwgPSAoKSA9PiB7XG4gICAgaWYgKC9eXFx3KyhbXFwuLV0/XFx3KykqQFxcdysoW1xcLi1dP1xcdyspKihcXC5cXHd7MiwzfSkrJC8udGVzdChlbWFpbCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQWRkRW1haWwgPSAoKSA9PiB7XG4gICAgaWYgKHZhbGlkYXRlRW1haWwoKSlcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjUwMDAvYXBpL2FkZC1lbWFpbCcsIHsgZW1haWw6IGVtYWlsIH0pXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKCdFbWFpbCBjb2xsZWN0ZWQhJyk7XG4gICAgICAgICAgICBzZXRFbWFpbCgnJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICBlbHNlIHRvYXN0LmVycm9yKCdJbnZhbGlkIGVtYWlsIScpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uXG4gICAgICBjbGFzc05hbWU9e2BzZXJ2aWNlcyBib3JkcyBzZWN0aW9uLXBhZGRpbmcgJHtcbiAgICAgICAgc3R5bGUgPT09ICc0aXRlbScgPyAnbGZpY29uJyA6IGxpbmVzID8gJycgOiAncHQtMCdcbiAgICAgIH1gfVxuICAgICAgc3R5bGU9e3sgcGFkZGluZ0JvdHRvbTogJzBweCcsIHBhZGRpbmdUb3A6ICc4MHB4JyB9fVxuICAgID5cbiAgICAgIDxUb2FzdGVyIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXInPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbGctOCBjb2wtbWQtMTAnPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NlYy1oZWFkICB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9J3dvdyBmYWRlSW4nIGRhdGEtd293LWRlbGF5PScuNXMnPlxuICAgICAgICAgICAgICAgIEludGVyZXN0ZWQgaW4gZmluZGluZyBvdXQgbW9yZT9cbiAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nd293IGNvbG9yLWZvbnQnPlxuICAgICAgICAgICAgICAgIFdhbnQgdG8gYmUgb25lIG9mIG91ciB2ZXJ5IGZpcnN0IGJldGEgdGVzdCB3cml0ZXJzP1xuICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICA8cCBzdHlsZT17eyBwYWRkaW5nQm90dG9tOiAnMHB4JywgcGFkZGluZ1RvcDogJzcwcHgnIH19PlxuICAgICAgICAgICAgICAgIFNpZ24gdXAgYmVsb3cgZm9yIGF3ZXNvbWUgKGFuZCBmcmVlKSBpbi1hcHAgcmV3YXJkcy5cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93IGp1c3RpZnktY29udGVudC1jZW50ZXInPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzdWJzY3JpYmUnPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIFlvdXIgRW1haWwnXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQWRkRW1haWx9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nc3VicyBwZS03cy1wYXBlci1wbGFuZSdcbiAgICAgICAgICAgID48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICB7bGluZXMgPyAoXG4gICAgICAgIDw+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpbmUgdG9wIGxlZnQnPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdsaW5lIGJvdHRvbSByaWdodCc+PC9kaXY+XG4gICAgICAgIDwvPlxuICAgICAgKSA6IG51bGx9XG4gICAgPC9zZWN0aW9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRW1haWxDb2xsZWN0b3I7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkxpbmsiLCJhcHBEYXRhIiwiYXhpb3MiLCJ0b2FzdCIsIlRvYXN0ZXIiLCJFbWFpbENvbGxlY3RvciIsInN0eWxlIiwibGluZXMiLCJlbWFpbCIsInNldEVtYWlsIiwidmFsaWRhdGVFbWFpbCIsInRlc3QiLCJoYW5kbGVBZGRFbWFpbCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzdWNjZXNzIiwiZXJyb3IiLCJwYWRkaW5nQm90dG9tIiwicGFkZGluZ1RvcCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Email-collector/EmailCollector.jsx\n");

/***/ })

});