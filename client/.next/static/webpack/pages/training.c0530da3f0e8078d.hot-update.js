"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/training",{

/***/ "./pages/training.js":
/*!***************************!*\
  !*** ./pages/training.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst plus = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        title: \"Add a new question\",\n        height: \"1em\",\n        viewBox: \"0 0 512 512\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {}, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                lineNumber: 5,\n                columnNumber: 105\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                lineNumber: 5,\n                columnNumber: 120\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\nconst minus = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        height: \"1em\",\n        viewBox: \"0 0 512 512\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n            lineNumber: 9,\n            columnNumber: 78\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\nconst Training = ()=>{\n    _s();\n    const [intent, setIntent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            question: \"\",\n            answer: \"\"\n        }\n    ]);\n    const handleChange = (index, key, value)=>{\n        const newQuestions = [\n            ...questions\n        ];\n        newQuestions[index][key] = value;\n        setQuestions(newQuestions);\n    };\n    const handleAddQuestion = ()=>{\n        if (questions.length < 5) {\n            setQuestions([\n                ...questions,\n                {\n                    question: \"\",\n                    answer: \"\"\n                }\n            ]);\n        }\n    };\n    const handleRemoveQuestion = (index)=>{\n        const newQuestions = [\n            ...questions\n        ];\n        newQuestions.splice(index, 1);\n        setQuestions(newQuestions);\n    };\n    const handleSubmit = ()=>{\n        const data = {\n            intent,\n            questions: questions.map((q)=>q.question),\n            answers: questions.map((q)=>q.answer)\n        };\n        console.log(data);\n        // Send data to the backend using Axios\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/train\", data, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            console.log(\"Backend response:\", response.data);\n            alert(\"Success!\");\n        // Handle backend response as needed\n        }).catch((error)=>{\n            console.error(\"Error sending data to backend:\", error);\n        // Handle error\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"app-container\",\n                style: {\n                    backgroundColor: \"red\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"p-10\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-semibold px-1\",\n                            style: {\n                                color: \"#141E46\"\n                            },\n                            children: \"Web Page with Inputs\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"form-control flex flex-row gap-5\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-80\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"label\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"label-text\",\n                                            style: {\n                                                color: \"#141E46\"\n                                            },\n                                            children: \"Intent *\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        style: {\n                                            background: \"#2E4374\",\n                                            border: \"1px solid #333\",\n                                            color: \"#fff\"\n                                        },\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-bordered w-full max-w-xs\",\n                                        id: \"intent\",\n                                        value: intent,\n                                        onChange: (e)=>setIntent(e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, undefined),\n                        questions.map((q, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"form-control flex flex-row gap-5\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-80\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"label\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"label-text\",\n                                                    style: {\n                                                        color: \"#141E46\"\n                                                    },\n                                                    children: \"Question \".concat(index + 1, \" *\")\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                lineNumber: 83,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                style: {\n                                                    background: \"#2E4374\",\n                                                    border: \"1px solid #333\",\n                                                    color: \"#fff\"\n                                                },\n                                                type: \"text\",\n                                                placeholder: \"Type here\",\n                                                className: \"input input-bordered w-full max-w-xs\",\n                                                value: q.question,\n                                                onChange: (e)=>handleChange(index, \"question\", e.target.value),\n                                                required: true\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"w-80\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                className: \"label\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"label-text\",\n                                                    style: {\n                                                        color: \"#141E46\"\n                                                    },\n                                                    children: \"Answer\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                    lineNumber: 97,\n                                                    columnNumber: 19\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                lineNumber: 96,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                                style: {\n                                                    background: \"#2E4374\",\n                                                    border: \"1px solid #333\",\n                                                    color: \"#fff\"\n                                                },\n                                                type: \"text\",\n                                                placeholder: \"Type here\",\n                                                className: \"input input-bordered w-full max-w-xs\",\n                                                value: q.answer,\n                                                onChange: (e)=>handleChange(index, \"answer\", e.target.value)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                lineNumber: 99,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    index === questions.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex gap-1\",\n                                        children: [\n                                            index < 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                title: \"Add a new question\",\n                                                className: \"cursor-pointer\",\n                                                onClick: handleAddQuestion,\n                                                children: plus()\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                lineNumber: 109,\n                                                columnNumber: 33\n                                            }, undefined),\n                                            index > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                title: \"Remove question\",\n                                                className: \"cursor-pointer\",\n                                                onClick: ()=>handleRemoveQuestion(index),\n                                                children: minus()\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                                lineNumber: 110,\n                                                columnNumber: 33\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 17\n                                    }, undefined)\n                                ]\n                            }, index, true, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"btn btn-success mt-5 text-stone-50 border-green-950\",\n                            onClick: handleSubmit,\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                            lineNumber: 115,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                lineNumber: 60,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"blue\",\n                    height: \"100vh\",\n                    width: \"50%\"\n                },\n                children: [\n                    \"Hello world\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            paddingLeft: \"50px\",\n                            paddingTop: \"50px\",\n                            paddingRight: \"50px\",\n                            paddingBottom: \"50px\",\n                            height: \"20vh\",\n                            width: \"20vh\",\n                            backgroundColor: \"cyan\",\n                            margin\n                        },\n                        children: \"hii\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                        lineNumber: 120,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                lineNumber: 118,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Training, \"lAI9A3dqp+GF0rHRjXcrrOEZlm4=\");\n_c = Training;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Training);\nvar _c;\n$RefreshReg$(_c, \"Training\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUJBQUssOERBQUM0QjtnREFBSzNDLE9BQU07Z0RBQWtCc0MsV0FBVTtnREFBaUJnQixTQUFTLElBQU1qQyxxQkFBcUJOOzBEQUFTVDs7Ozs7Ozs7Ozs7OzsrQkE3QmhIUzs7Ozs7c0NBa0NaLDhEQUFDd0M7NEJBQU9qQixXQUFVOzRCQUFzRGdCLFNBQVMvQjtzQ0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBR3JHLDhEQUFDYztnQkFBSWxDLE9BQU87b0JBQUNvQyxpQkFBaUI7b0JBQVN0QyxRQUFPO29CQUFTdUQsT0FBTTtnQkFBSzs7b0JBQUc7a0NBRXpELDhEQUFDbkI7d0JBQUlsQyxPQUFPOzRCQUFDc0QsYUFBYTs0QkFBT0MsWUFBWTs0QkFBT0MsY0FBYzs0QkFBT0MsZUFBZTs0QkFDeEYzRCxRQUFROzRCQUNSdUQsT0FBTzs0QkFDUGpCLGlCQUFnQjs0QkFDaEJzQjt3QkFFRjtrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWpCO0dBeEhNdEQ7S0FBQUE7QUEwSE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdHJhaW5pbmcuanM/MGUwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXHJcblxyXG5jb25zdCBwbHVzID0gKCkgPT4gKFxyXG4gIDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHRpdGxlPVwiQWRkIGEgbmV3IHF1ZXN0aW9uXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHN0eWxlPjwvc3R5bGU+PHBhdGggZD1cIk0yNTYgNTEyQTI1NiAyNTYgMCAxIDAgMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMnpNMjMyIDM0NFYyODBIMTY4Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0aDY0VjE2OGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0djY0aDY0YzEzLjMgMCAyNCAxMC43IDI0IDI0cy0xMC43IDI0LTI0IDI0SDI4MHY2NGMwIDEzLjMtMTAuNyAyNC0yNCAyNHMtMjQtMTAuNy0yNC0yNHpcIi8+PC9zdmc+XHJcbik7XHJcblxyXG5jb25zdCBtaW51cyA9ICgpID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIj48cGF0aCBkPVwiTTI1NiA1MTJBMjU2IDI1NiAwIDEgMCAyNTYgMGEyNTYgMjU2IDAgMSAwIDAgNTEyek0xODQgMjMySDMyOGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgxODRjLTEzLjMgMC0yNC0xMC43LTI0LTI0czEwLjctMjQgMjQtMjR6XCIvPjwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgVHJhaW5pbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2ludGVudCwgc2V0SW50ZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtxdWVzdGlvbnMsIHNldFF1ZXN0aW9uc10gPSB1c2VTdGF0ZShbeyBxdWVzdGlvbjogXCJcIiwgYW5zd2VyOiBcIlwiIH1dKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZGV4LCBrZXksIHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBuZXdRdWVzdGlvbnMgPSBbLi4ucXVlc3Rpb25zXTtcclxuICAgIG5ld1F1ZXN0aW9uc1tpbmRleF1ba2V5XSA9IHZhbHVlO1xyXG4gICAgc2V0UXVlc3Rpb25zKG5ld1F1ZXN0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQWRkUXVlc3Rpb24gPSAoKSA9PiB7XHJcbiAgICBpZiAocXVlc3Rpb25zLmxlbmd0aCA8IDUpIHtcclxuICAgICAgc2V0UXVlc3Rpb25zKFsuLi5xdWVzdGlvbnMsIHsgcXVlc3Rpb246IFwiXCIsIGFuc3dlcjogXCJcIiB9XSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlUXVlc3Rpb24gPSAoaW5kZXgpID0+IHtcclxuICAgIGNvbnN0IG5ld1F1ZXN0aW9ucyA9IFsuLi5xdWVzdGlvbnNdO1xyXG4gICAgbmV3UXVlc3Rpb25zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBzZXRRdWVzdGlvbnMobmV3UXVlc3Rpb25zKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICBpbnRlbnQsXHJcbiAgICAgIHF1ZXN0aW9uczogcXVlc3Rpb25zLm1hcCgocSkgPT4gcS5xdWVzdGlvbiksXHJcbiAgICAgIGFuc3dlcnM6IHF1ZXN0aW9ucy5tYXAoKHEpID0+IHEuYW5zd2VyKSxcclxuICAgIH07XHJcbiAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvLyBTZW5kIGRhdGEgdG8gdGhlIGJhY2tlbmQgdXNpbmcgQXhpb3NcclxuICAgIGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdHJhaW5cIiwgZGF0YSwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJhY2tlbmQgcmVzcG9uc2U6XCIsIHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIGFsZXJ0KFwiU3VjY2VzcyFcIik7XHJcbiAgICAgICAgLy8gSGFuZGxlIGJhY2tlbmQgcmVzcG9uc2UgYXMgbmVlZGVkXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2VuZGluZyBkYXRhIHRvIGJhY2tlbmQ6XCIsIGVycm9yKTtcclxuICAgICAgICAvLyBIYW5kbGUgZXJyb3JcclxuICAgICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwLWNvbnRhaW5lclwiIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwicmVkXCJ9fT5cclxuICAgIFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwLTEwJz5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LXNlbWlib2xkIHB4LTFcIiBzdHlsZT17e2NvbG9yOiAnIzE0MUU0Nid9fT5XZWIgUGFnZSB3aXRoIElucHV0czwvaDE+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGZsZXggZmxleC1yb3cgZ2FwLTUnPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy04MCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbC10ZXh0JyBzdHlsZT17e2NvbG9yOiAnIzE0MUU0Nid9fT5JbnRlbnQgKjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e2JhY2tncm91bmQ6ICcjMkU0Mzc0JywgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLCBjb2xvcjogJyNmZmYnfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHMnXHJcbiAgICAgICAgICAgICAgICBpZD0naW50ZW50J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ludGVudH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0SW50ZW50KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGZsZXggZmxleC1yb3cgZ2FwLTUnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTgwJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbC10ZXh0JyBzdHlsZT17e2NvbG9yOiAnIzE0MUU0Nid9fT57YFF1ZXN0aW9uICR7aW5kZXggKyAxfSAqYH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7YmFja2dyb3VuZDogJyMyRTQzNzQnLCBib3JkZXI6ICcxcHggc29saWQgIzMzMycsIGNvbG9yOiAnI2ZmZid9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14cydcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3EucXVlc3Rpb259XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCAncXVlc3Rpb24nLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTgwJz5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9J2xhYmVsJz5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbC10ZXh0JyBzdHlsZT17e2NvbG9yOiAnIzE0MUU0Nid9fT5BbnN3ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7YmFja2dyb3VuZDogJyMyRTQzNzQnLCBib3JkZXI6ICcxcHggc29saWQgIzMzMycsIGNvbG9yOiAnI2ZmZid9fVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14cydcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3EuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUNoYW5nZShpbmRleCwgJ2Fuc3dlcicsIGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAge2luZGV4ID09PSBxdWVzdGlvbnMubGVuZ3RoIC0gMSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTFcIiA+XHJcbiAgICAgICAgICAgICAgICAgIHtpbmRleCA8IDQgJiYgPHNwYW4gdGl0bGU9XCJBZGQgYSBuZXcgcXVlc3Rpb25cIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUFkZFF1ZXN0aW9ufT57cGx1cygpfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICAgIHtpbmRleCA+IDAgJiYgPHNwYW4gdGl0bGU9XCJSZW1vdmUgcXVlc3Rpb25cIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVF1ZXN0aW9uKGluZGV4KX0+e21pbnVzKCl9PC9zcGFuPn1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtdC01IHRleHQtc3RvbmUtNTAgYm9yZGVyLWdyZWVuLTk1MFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwiLCAgaGVpZ2h0OlwiMTAwdmhcIiwgd2lkdGg6XCI1MCVcIn19PlxyXG4gICAgICAgICAgICAgICAgSGVsbG8gd29ybGRcclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3twYWRkaW5nTGVmdDogXCI1MHB4XCIscGFkZGluZ1RvcDogXCI1MHB4XCIscGFkZGluZ1JpZ2h0OiBcIjUwcHhcIixwYWRkaW5nQm90dG9tOiBcIjUwcHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIyMHZoXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIyMHZoXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJjeWFuXCIsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgICAgaGlpXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFpbmluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInBsdXMiLCJzdmciLCJ4bWxucyIsInRpdGxlIiwiaGVpZ2h0Iiwidmlld0JveCIsInN0eWxlIiwicGF0aCIsImQiLCJtaW51cyIsIlRyYWluaW5nIiwiaW50ZW50Iiwic2V0SW50ZW50IiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsImtleSIsInZhbHVlIiwibmV3UXVlc3Rpb25zIiwiaGFuZGxlQWRkUXVlc3Rpb24iLCJsZW5ndGgiLCJoYW5kbGVSZW1vdmVRdWVzdGlvbiIsInNwbGljZSIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJtYXAiLCJxIiwiYW5zd2VycyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImJhY2tncm91bmRDb2xvciIsImgxIiwiY29sb3IiLCJsYWJlbCIsInNwYW4iLCJpbnB1dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwib25DbGljayIsImJ1dHRvbiIsIndpZHRoIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nVG9wIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/training.js\n"));

/***/ })

});