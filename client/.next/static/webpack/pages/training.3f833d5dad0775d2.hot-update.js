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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst plus = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        title: \"Add a new question\",\n        height: \"1em\",\n        viewBox: \"0 0 512 512\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"style\", {}, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                lineNumber: 5,\n                columnNumber: 105\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                d: \"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                lineNumber: 5,\n                columnNumber: 120\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\nconst minus = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        xmlns: \"http://www.w3.org/2000/svg\",\n        height: \"1em\",\n        viewBox: \"0 0 512 512\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n            d: \"M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232H328c13.3 0 24 10.7 24 24s-10.7 24-24 24H184c-13.3 0-24-10.7-24-24s10.7-24 24-24z\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n            lineNumber: 9,\n            columnNumber: 78\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\nconst Training = ()=>{\n    _s();\n    const [intent, setIntent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [questions, setQuestions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            question: \"\",\n            answer: \"\"\n        }\n    ]);\n    const handleChange = (index, key, value)=>{\n        const newQuestions = [\n            ...questions\n        ];\n        newQuestions[index][key] = value;\n        setQuestions(newQuestions);\n    };\n    const handleAddQuestion = ()=>{\n        if (questions.length < 5) {\n            setQuestions([\n                ...questions,\n                {\n                    question: \"\",\n                    answer: \"\"\n                }\n            ]);\n        }\n    };\n    const handleRemoveQuestion = (index)=>{\n        const newQuestions = [\n            ...questions\n        ];\n        newQuestions.splice(index, 1);\n        setQuestions(newQuestions);\n    };\n    const handleSubmit = ()=>{\n        const data = {\n            intent,\n            questions: questions.map((q)=>q.question),\n            answers: questions.map((q)=>q.answer)\n        };\n        console.log(data);\n        // Send data to the backend using Axios\n        axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/train\", data, {\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then((response)=>{\n            console.log(\"Backend response:\", response.data);\n            alert(\"Success!\");\n        // Handle backend response as needed\n        }).catch((error)=>{\n            console.error(\"Error sending data to backend:\", error);\n        // Handle error\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"app-container\",\n        style: {\n            bgc\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-2xl font-semibold px-1\",\n                    style: {\n                        color: \"#141E46\"\n                    },\n                    children: \"Web Page with Inputs\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-control flex flex-row gap-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-80\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: \"label\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"label-text\",\n                                    style: {\n                                        color: \"#141E46\"\n                                    },\n                                    children: \"Intent *\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 15\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                style: {\n                                    background: \"#2E4374\",\n                                    border: \"1px solid #333\",\n                                    color: \"#fff\"\n                                },\n                                type: \"text\",\n                                placeholder: \"Type here\",\n                                className: \"input input-bordered w-full max-w-xs\",\n                                id: \"intent\",\n                                value: intent,\n                                onChange: (e)=>setIntent(e.target.value),\n                                required: true\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, undefined),\n                questions.map((q, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"form-control flex flex-row gap-5\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-80\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"label\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"label-text\",\n                                            style: {\n                                                color: \"#141E46\"\n                                            },\n                                            children: \"Question \".concat(index + 1, \" *\")\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        style: {\n                                            background: \"#2E4374\",\n                                            border: \"1px solid #333\",\n                                            color: \"#fff\"\n                                        },\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-bordered w-full max-w-xs\",\n                                        value: q.question,\n                                        onChange: (e)=>handleChange(index, \"question\", e.target.value),\n                                        required: true\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 81,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-80\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"label\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"label-text\",\n                                            style: {\n                                                color: \"#141E46\"\n                                            },\n                                            children: \"Answer\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        style: {\n                                            background: \"#2E4374\",\n                                            border: \"1px solid #333\",\n                                            color: \"#fff\"\n                                        },\n                                        type: \"text\",\n                                        placeholder: \"Type here\",\n                                        className: \"input input-bordered w-full max-w-xs\",\n                                        value: q.answer,\n                                        onChange: (e)=>handleChange(index, \"answer\", e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 94,\n                                columnNumber: 13\n                            }, undefined),\n                            index === questions.length - 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex gap-1\",\n                                children: [\n                                    index < 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        title: \"Add a new question\",\n                                        className: \"cursor-pointer\",\n                                        onClick: handleAddQuestion,\n                                        children: plus()\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 108,\n                                        columnNumber: 31\n                                    }, undefined),\n                                    index > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        title: \"Remove question\",\n                                        className: \"cursor-pointer\",\n                                        onClick: ()=>handleRemoveQuestion(index),\n                                        children: minus()\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 31\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                                lineNumber: 107,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                        lineNumber: 80,\n                        columnNumber: 11\n                    }, undefined)),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"btn btn-success mt-5 text-stone-50 border-green-950\",\n                    onClick: handleSubmit,\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n                    lineNumber: 114,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\pages\\\\training.js\",\n        lineNumber: 59,\n        columnNumber: 3\n    }, undefined);\n};\n_s(Training, \"lAI9A3dqp+GF0rHRjXcrrOEZlm4=\");\n_c = Training;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Training);\nvar _c;\n$RefreshReg$(_c, \"Training\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO3dDQUFpQmdCLFNBQVMsSUFBTWpDLHFCQUFxQk47a0RBQVNUOzs7Ozs7Ozs7Ozs7O3VCQTdCaEhTOzs7Ozs4QkFrQ1osOERBQUN3QztvQkFBT2pCLFdBQVU7b0JBQXNEZ0IsU0FBUy9COzhCQUFjOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2RztHQTFHTWhCO0tBQUFBO0FBNEdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RyYWluaW5nLmpzPzBlMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxyXG5cclxuY29uc3QgcGx1cyA9ICgpID0+IChcclxuICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB0aXRsZT1cIkFkZCBhIG5ldyBxdWVzdGlvblwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgNTEyIDUxMlwiPjxzdHlsZT48L3N0eWxlPjxwYXRoIGQ9XCJNMjU2IDUxMkEyNTYgMjU2IDAgMSAwIDI1NiAwYTI1NiAyNTYgMCAxIDAgMCA1MTJ6TTIzMiAzNDRWMjgwSDE2OGMtMTMuMyAwLTI0LTEwLjctMjQtMjRzMTAuNy0yNCAyNC0yNGg2NFYxNjhjMC0xMy4zIDEwLjctMjQgMjQtMjRzMjQgMTAuNyAyNCAyNHY2NGg2NGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNEgyODB2NjRjMCAxMy4zLTEwLjcgMjQtMjQgMjRzLTI0LTEwLjctMjQtMjR6XCIvPjwvc3ZnPlxyXG4pO1xyXG5cclxuY29uc3QgbWludXMgPSAoKSA9PiAoXHJcbiAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCA1MTIgNTEyXCI+PHBhdGggZD1cIk0yNTYgNTEyQTI1NiAyNTYgMCAxIDAgMjU2IDBhMjU2IDI1NiAwIDEgMCAwIDUxMnpNMTg0IDIzMkgzMjhjMTMuMyAwIDI0IDEwLjcgMjQgMjRzLTEwLjcgMjQtMjQgMjRIMTg0Yy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0elwiLz48L3N2Zz5cclxuKTtcclxuXHJcbmNvbnN0IFRyYWluaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpbnRlbnQsIHNldEludGVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW3sgcXVlc3Rpb246IFwiXCIsIGFuc3dlcjogXCJcIiB9XSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmRleCwga2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgY29uc3QgbmV3UXVlc3Rpb25zID0gWy4uLnF1ZXN0aW9uc107XHJcbiAgICBuZXdRdWVzdGlvbnNbaW5kZXhdW2tleV0gPSB2YWx1ZTtcclxuICAgIHNldFF1ZXN0aW9ucyhuZXdRdWVzdGlvbnMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUFkZFF1ZXN0aW9uID0gKCkgPT4ge1xyXG4gICAgaWYgKHF1ZXN0aW9ucy5sZW5ndGggPCA1KSB7XHJcbiAgICAgIHNldFF1ZXN0aW9ucyhbLi4ucXVlc3Rpb25zLCB7IHF1ZXN0aW9uOiBcIlwiLCBhbnN3ZXI6IFwiXCIgfV0pO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZVF1ZXN0aW9uID0gKGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBuZXdRdWVzdGlvbnMgPSBbLi4ucXVlc3Rpb25zXTtcclxuICAgIG5ld1F1ZXN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgc2V0UXVlc3Rpb25zKG5ld1F1ZXN0aW9ucyk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgaW50ZW50LFxyXG4gICAgICBxdWVzdGlvbnM6IHF1ZXN0aW9ucy5tYXAoKHEpID0+IHEucXVlc3Rpb24pLFxyXG4gICAgICBhbnN3ZXJzOiBxdWVzdGlvbnMubWFwKChxKSA9PiBxLmFuc3dlciksXHJcbiAgICB9O1xyXG4gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gU2VuZCBkYXRhIHRvIHRoZSBiYWNrZW5kIHVzaW5nIEF4aW9zXHJcbiAgICBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL3RyYWluXCIsIGRhdGEsIHtcclxuICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICB9LFxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCYWNrZW5kIHJlc3BvbnNlOlwiLCByZXNwb25zZS5kYXRhKTtcclxuICAgICAgICBhbGVydChcIlN1Y2Nlc3MhXCIpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBiYWNrZW5kIHJlc3BvbnNlIGFzIG5lZWRlZFxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNlbmRpbmcgZGF0YSB0byBiYWNrZW5kOlwiLCBlcnJvcik7XHJcbiAgICAgICAgLy8gSGFuZGxlIGVycm9yXHJcbiAgICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJhcHAtY29udGFpbmVyXCIgc3R5bGU9e3tiZ2N9fT5cclxuICAgIFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncC0xMCc+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgcHgtMVwiIHN0eWxlPXt7Y29sb3I6ICcjMTQxRTQ2J319PldlYiBQYWdlIHdpdGggSW5wdXRzPC9oMT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9ybS1jb250cm9sIGZsZXggZmxleC1yb3cgZ2FwLTUnPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctODAnPlxyXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbC10ZXh0JyBzdHlsZT17e2NvbG9yOiAnIzE0MUU0Nid9fT5JbnRlbnQgKjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgPGlucHV0IHN0eWxlPXt7YmFja2dyb3VuZDogJyMyRTQzNzQnLCBib3JkZXI6ICcxcHggc29saWQgIzMzMycsIGNvbG9yOiAnI2ZmZid9fVxyXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgaGVyZSdcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2lucHV0IGlucHV0LWJvcmRlcmVkIHctZnVsbCBtYXgtdy14cydcclxuICAgICAgICAgICAgICBpZD0naW50ZW50J1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtpbnRlbnR9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRJbnRlbnQoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cXVlc3Rpb25zLm1hcCgocSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPSdmb3JtLWNvbnRyb2wgZmxleCBmbGV4LXJvdyBnYXAtNSc+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTgwJz5cclxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPSdsYWJlbCc+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J2xhYmVsLXRleHQnIHN0eWxlPXt7Y29sb3I6ICcjMTQxRTQ2J319PntgUXVlc3Rpb24gJHtpbmRleCArIDF9ICpgfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCBzdHlsZT17e2JhY2tncm91bmQ6ICcjMkU0Mzc0JywgYm9yZGVyOiAnMXB4IHNvbGlkICMzMzMnLCBjb2xvcjogJyNmZmYnfX1cclxuICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSBoZXJlJ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdpbnB1dCBpbnB1dC1ib3JkZXJlZCB3LWZ1bGwgbWF4LXcteHMnXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cS5xdWVzdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gaGFuZGxlQ2hhbmdlKGluZGV4LCAncXVlc3Rpb24nLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy04MCc+XHJcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT0nbGFiZWwnPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSdsYWJlbC10ZXh0JyBzdHlsZT17e2NvbG9yOiAnIzE0MUU0Nid9fT5BbnN3ZXI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICA8aW5wdXQgc3R5bGU9e3tiYWNrZ3JvdW5kOiAnIzJFNDM3NCcsIGJvcmRlcjogJzFweCBzb2xpZCAjMzMzJywgY29sb3I6ICcjZmZmJ319XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgaGVyZSdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0naW5wdXQgaW5wdXQtYm9yZGVyZWQgdy1mdWxsIG1heC13LXhzJ1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3EuYW5zd2VyfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoaW5kZXgsICdhbnN3ZXInLCBlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpbmRleCA9PT0gcXVlc3Rpb25zLmxlbmd0aCAtIDEgJiYgKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAtMVwiID5cclxuICAgICAgICAgICAgICAgIHtpbmRleCA8IDQgJiYgPHNwYW4gdGl0bGU9XCJBZGQgYSBuZXcgcXVlc3Rpb25cIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIG9uQ2xpY2s9e2hhbmRsZUFkZFF1ZXN0aW9ufT57cGx1cygpfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgICB7aW5kZXggPiAwICYmIDxzcGFuIHRpdGxlPVwiUmVtb3ZlIHF1ZXN0aW9uXCIgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVSZW1vdmVRdWVzdGlvbihpbmRleCl9PnttaW51cygpfTwvc3Bhbj59XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBtdC01IHRleHQtc3RvbmUtNTAgYm9yZGVyLWdyZWVuLTk1MFwiIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUcmFpbmluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInBsdXMiLCJzdmciLCJ4bWxucyIsInRpdGxlIiwiaGVpZ2h0Iiwidmlld0JveCIsInN0eWxlIiwicGF0aCIsImQiLCJtaW51cyIsIlRyYWluaW5nIiwiaW50ZW50Iiwic2V0SW50ZW50IiwicXVlc3Rpb25zIiwic2V0UXVlc3Rpb25zIiwicXVlc3Rpb24iLCJhbnN3ZXIiLCJoYW5kbGVDaGFuZ2UiLCJpbmRleCIsImtleSIsInZhbHVlIiwibmV3UXVlc3Rpb25zIiwiaGFuZGxlQWRkUXVlc3Rpb24iLCJsZW5ndGgiLCJoYW5kbGVSZW1vdmVRdWVzdGlvbiIsInNwbGljZSIsImhhbmRsZVN1Ym1pdCIsImRhdGEiLCJtYXAiLCJxIiwiYW5zd2VycyIsImNvbnNvbGUiLCJsb2ciLCJwb3N0IiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsImFsZXJ0IiwiY2F0Y2giLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImJnYyIsImgxIiwiY29sb3IiLCJsYWJlbCIsInNwYW4iLCJpbnB1dCIsImJhY2tncm91bmQiLCJib3JkZXIiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInJlcXVpcmVkIiwib25DbGljayIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/training.js\n"));

/***/ })

});