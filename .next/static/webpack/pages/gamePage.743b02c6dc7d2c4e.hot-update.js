"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gamePage",{

/***/ "./pages/components/GamePageMain.jsx":
/*!*******************************************!*\
  !*** ./pages/components/GamePageMain.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GamePageMain; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _GamePageLeaderboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GamePageLeaderboard */ \"./pages/components/GamePageLeaderboard.jsx\");\n\n\n\n\n\nfunction GamePageMain() {\n    // this gets the current date from the built in Date method\n    const current = new Date();\n    // then it is formatted by seperating each one by a /\n    const date = \"\".concat(current.getDate(), \"/\").concat(current.getMonth() + 1, \"/\").concat(current.getFullYear());\n    return(// TODO: change the hard coded username\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" lg:grid lg:grid-cols-3 lg:gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" pt-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \" text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600\",\n                        children: \"Welcome, xszmr\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Today's Date is \",\n                            date\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \" pt-10 lg:pt-36\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \" text-4xl font-bold pb-5\",\n                                children: \"Start Playing\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                lineNumber: 26,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \" font-bold lg:text-xl\",\n                                children: \"The Rules:\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \" text-lg\",\n                                children: [\n                                    \"The aim of the game is to find the missing number within the sequence on the board. \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 48\n                                    }, this),\n                                    \" The number is hidden under an emoji.\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"/boardPage\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \" rounded-sm bg-white w-24 m-2 inline duration-300 border-2 border-blue-400 hover:bg-blue-400 hover:text-white \",\n                                    children: \"Let's Go!\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                    lineNumber: 32,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                lineNumber: 31,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" rounded-sm bg-white w-24 m-2 inline duration-300 hover:bg-black hover:text-white border-2 border-black\",\n                                children: \"Read More\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \" rounded-sm bg-white w-24 m-2 font-bold lg:mt-72 block border-2 border-red-500 hover:bg-red-500 hover:text-white duration-300\",\n                                children: \"Sign Out\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                    className: \" text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/partying_face_3d-Enhanced.png\",\n                            alt: \"Party Emoji\",\n                            width: 200,\n                            height: 200,\n                            className: \" mr-auto ml-auto mt-5 lg:mt-72 lg:w-80\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                            lineNumber: 75,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \" rounded-full bg-purple-500 w-8 h-8 text-2xl text-white animate-bounce mt-10 mb-6 lg:invisible\",\n                            children: \"↓\"\n                        }, void 0, false, {\n                            fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                            lineNumber: 77,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                    lineNumber: 74,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                lineNumber: 73,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \" pt-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_GamePageLeaderboard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n                lineNumber: 92,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/lukesizmur/Documents/Projects/University/Year3/softwareForEnterprise/assignment1/smileGame/pages/components/GamePageMain.jsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this));\n}\n_c = GamePageMain;\nvar _c;\n$RefreshReg$(_c, \"GamePageMain\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0dhbWVQYWdlTWFpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQXlCO0FBQ007QUFDRjtBQUMyQjtBQUV6QyxTQUFTSSxlQUFlO0lBQ25DLDJEQUEyRDtJQUMzRCxNQUFNQyxVQUFVLElBQUlDO0lBQ3BCLHFEQUFxRDtJQUNyRCxNQUFNQyxPQUFPLEdBQXdCRixPQUFyQkEsUUFBUUcsT0FBTyxJQUFHLEtBQTJCSCxPQUF4QkEsUUFBUUksUUFBUSxLQUFHLEdBQUUsS0FBeUIsT0FBdEJKLFFBQVFLLFdBQVc7SUFFaEYsT0FDSSx1Q0FBdUM7a0JBQ3ZDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFFWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUVYLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FJZ0M7Ozs7OztrQ0FFOUMsOERBQUNFOzs0QkFBRTs0QkFBaUJQOzs7Ozs7O2tDQUNwQiw4REFBQ1E7d0JBQVFILFdBQVU7OzBDQUNmLDhEQUFDQztnQ0FBR0QsV0FBVTswQ0FBMkI7Ozs7OzswQ0FDekMsOERBQUNJO2dDQUFHSixXQUFVOzBDQUF3Qjs7Ozs7OzBDQUN0Qyw4REFBQ0U7Z0NBQUVGLFdBQVU7O29DQUFXO2tEQUNHLDhEQUFDSzs7Ozs7b0NBQVE7Ozs7Ozs7MENBRXBDLDhEQUFDZixrREFBSUE7Z0NBQUNnQixNQUFLOzBDQUNQLDRFQUFDQztvQ0FBT1AsV0FBVTs4Q0FVQzs7Ozs7Ozs7Ozs7MENBR3ZCLDhEQUFDTztnQ0FBT1AsV0FBVTswQ0FTSjs7Ozs7OzBDQUVkLDhEQUFDTztnQ0FBT1AsV0FBVTswQ0FZSjs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUt0Qiw4REFBQ0Q7MEJBQ0csNEVBQUNJO29CQUFRSCxXQUFVOztzQ0FDZiw4REFBQ1gsbURBQUtBOzRCQUFDbUIsS0FBSTs0QkFBaUNDLEtBQUk7NEJBQWNDLE9BQU87NEJBQUtDLFFBQVE7NEJBQUtYLFdBQVU7Ozs7OztzQ0FFakcsOERBQUNPOzRCQUFPUCxXQUFVO3NDQVVKOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdEIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDVCw0REFBbUJBOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7S0E3RnVCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jb21wb25lbnRzL0dhbWVQYWdlTWFpbi5qc3g/ODhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IEdhbWVQYWdlTGVhZGVyYm9hcmQgZnJvbSAnLi9HYW1lUGFnZUxlYWRlcmJvYXJkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2FtZVBhZ2VNYWluKCkge1xuICAgIC8vIHRoaXMgZ2V0cyB0aGUgY3VycmVudCBkYXRlIGZyb20gdGhlIGJ1aWx0IGluIERhdGUgbWV0aG9kXG4gICAgY29uc3QgY3VycmVudCA9IG5ldyBEYXRlKCk7XG4gICAgLy8gdGhlbiBpdCBpcyBmb3JtYXR0ZWQgYnkgc2VwZXJhdGluZyBlYWNoIG9uZSBieSBhIC9cbiAgICBjb25zdCBkYXRlID0gYCR7Y3VycmVudC5nZXREYXRlKCl9LyR7Y3VycmVudC5nZXRNb250aCgpKzF9LyR7Y3VycmVudC5nZXRGdWxsWWVhcigpfWA7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBUT0RPOiBjaGFuZ2UgdGhlIGhhcmQgY29kZWQgdXNlcm5hbWVcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9JyBsZzpncmlkIGxnOmdyaWQtY29scy0zIGxnOmdhcC02Jz5cbiAgICAgICAgICAgIHsvKiBjb2x1bW4gMSAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgcHQtNSc+XG5cbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPScgdGV4dC02eGwgXG4gICAgICAgICAgICAgICAgZm9udC1ib2xkIFxuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNwYXJlbnQgXG4gICAgICAgICAgICAgICAgYmctY2xpcC10ZXh0IFxuICAgICAgICAgICAgICAgIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1wdXJwbGUtNTAwIHRvLXBpbmstNjAwJz5XZWxjb21lLCB4c3ptcjwvaDE+XG5cbiAgICAgICAgICAgICAgICA8cD5Ub2RheSdzIERhdGUgaXMge2RhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nIHB0LTEwIGxnOnB0LTM2Jz5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nIHRleHQtNHhsIGZvbnQtYm9sZCBwYi01Jz5TdGFydCBQbGF5aW5nPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT0nIGZvbnQtYm9sZCBsZzp0ZXh0LXhsJz5UaGUgUnVsZXM6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPScgdGV4dC1sZyc+VGhlIGFpbSBvZiB0aGUgZ2FtZSBpcyB0byBmaW5kIHRoZSBtaXNzaW5nIG51bWJlciB3aXRoaW4gdGhlXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXF1ZW5jZSBvbiB0aGUgYm9hcmQuIDxicj48L2JyPiBUaGUgbnVtYmVyIGlzIGhpZGRlbiB1bmRlciBhbiBlbW9qaS5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2JvYXJkUGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtc20gXG4gICAgICAgICAgICAgICAgICAgICAgICBiZy13aGl0ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgIHctMjQgXG4gICAgICAgICAgICAgICAgICAgICAgICBtLTIgXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmxpbmUgXG4gICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0zMDAgXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItMiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ibHVlLTQwMCBcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsdWUtNDAwIFxuICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXI6dGV4dC13aGl0ZSAnPkxldCdzIEdvITwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9JyBcbiAgICAgICAgICAgICAgICAgICAgcm91bmRlZC1zbSBcbiAgICAgICAgICAgICAgICAgICAgYmctd2hpdGUgXG4gICAgICAgICAgICAgICAgICAgIHctMjQgXG4gICAgICAgICAgICAgICAgICAgIG0tMiBcbiAgICAgICAgICAgICAgICAgICAgaW5saW5lIFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbi0zMDAgXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLWJsYWNrIFxuICAgICAgICAgICAgICAgICAgICBob3Zlcjp0ZXh0LXdoaXRlIGJvcmRlci0yIFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYmxhY2snPlJlYWQgTW9yZTwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtc20gXG4gICAgICAgICAgICAgICAgICAgIGJnLXdoaXRlIFxuICAgICAgICAgICAgICAgICAgICB3LTI0IFxuICAgICAgICAgICAgICAgICAgICBtLTIgXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtYm9sZCBcbiAgICAgICAgICAgICAgICAgICAgbGc6bXQtNzIgXG4gICAgICAgICAgICAgICAgICAgIGJsb2NrIFxuICAgICAgICAgICAgICAgICAgICBib3JkZXItMiBcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJlZC01MDAgXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOmJnLXJlZC01MDAgXG4gICAgICAgICAgICAgICAgICAgIGhvdmVyOnRleHQtd2hpdGUgXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uLTMwMCc+U2lnbiBPdXQ8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIGNvbHVtbiAyICovfVxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9JyB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvcGFydHlpbmdfZmFjZV8zZC1FbmhhbmNlZC5wbmdcIiBhbHQ9XCJQYXJ0eSBFbW9qaVwiIHdpZHRoPXsyMDB9IGhlaWdodD17MjAwfSBjbGFzc05hbWU9JyBtci1hdXRvIG1sLWF1dG8gbXQtNSBsZzptdC03MiBsZzp3LTgwJyAvPlxuICAgICAgICAgICAgICAgICAgICB7LyogdGhpcyByZW5kZXIgYSBkb3duIGFycm93IHdoaWNoIGlzIG9ubHkgdmlzaWJsZSBvbiBzbWFsbCBkZXZpY2VzIChiZWxvdyA3NjhweCkgKi99XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPScgXG4gICAgICAgICAgICAgICAgICAgIHJvdW5kZWQtZnVsbCBcbiAgICAgICAgICAgICAgICAgICAgYmctcHVycGxlLTUwMCBcbiAgICAgICAgICAgICAgICAgICAgdy04IFxuICAgICAgICAgICAgICAgICAgICBoLTggXG4gICAgICAgICAgICAgICAgICAgIHRleHQtMnhsIFxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXdoaXRlIFxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlLWJvdW5jZSBcbiAgICAgICAgICAgICAgICAgICAgbXQtMTBcbiAgICAgICAgICAgICAgICAgICAgbWItNiBcbiAgICAgICAgICAgICAgICAgICAgbGc6aW52aXNpYmxlJz4mIzg1OTU7PC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiBjb2x1bW4gMyAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScgcHQtMCc+XG4gICAgICAgICAgICAgICAgPEdhbWVQYWdlTGVhZGVyYm9hcmQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICApXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwiSW1hZ2UiLCJMaW5rIiwiR2FtZVBhZ2VMZWFkZXJib2FyZCIsIkdhbWVQYWdlTWFpbiIsImN1cnJlbnQiLCJEYXRlIiwiZGF0ZSIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJwIiwic2VjdGlvbiIsImgzIiwiYnIiLCJocmVmIiwiYnV0dG9uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/GamePageMain.jsx\n"));

/***/ })

});