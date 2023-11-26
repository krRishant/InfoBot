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

/***/ "./components/chatbox.js":
/*!*******************************!*\
  !*** ./components/chatbox.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChatBox = ()=>{\n    _s();\n    const bottomOfpannel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (bottomOfpannel.current) {}\n    }, [\n        third\n    ]);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-scroll\",\n                style: {\n                    padding: \"20px\",\n                    height: \"85vh\",\n                    // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                    // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                    // WebkitOverflowScrolling: \"touch\",\n                    scrollbarColor: \"transparent transparent\"\n                },\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 81,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"You\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 78,\n                                columnNumber: 17\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 89,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"InfoBot\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 95,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 88,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-5\",\n                        style: {\n                            marginTop: \"10px\",\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\",\n                                style: {\n                                    padding: \"8px\",\n                                    borderRadius: \"4px\",\n                                    border: \"1px solid #ddd\",\n                                    background: \"#2E4374\",\n                                    border: \"1px solid #333\",\n                                    color: \"#fff\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 104,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendMessage,\n                                style: {\n                                    marginLeft: \"10px\",\n                                    padding: \"8px 12px\",\n                                    borderRadius: \"4px\",\n                                    backgroundColor: \"#3498db\",\n                                    color: \"#fff\",\n                                    border: \"none\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 118,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            \"ref =\",\n                            bottomOfpannel\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 132,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"3NaMkCDOlYQKiJhqwxliET4KlyY=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixjQUFjO29DQUNkQyxRQUFRO29DQUNSQyxZQUFZO29DQUNaRCxRQUFRO29DQUNSRSxPQUFPO2dDQUNUOzs7Ozs7MENBRUYsOERBQUNDO2dDQUNDQyxTQUFTMUM7Z0NBQ1RlLE9BQU87b0NBQ0w0QixZQUFZO29DQUNaeEIsU0FBUztvQ0FDVGtCLGNBQWM7b0NBQ2RPLGlCQUFpQjtvQ0FDakJKLE9BQU87b0NBQ1BGLFFBQVE7b0NBQ1JPLFFBQVE7Z0NBQ1Y7MENBQUc7Ozs7Ozs7Ozs7OztrQ0FJUCw4REFBQy9COzs0QkFBSTs0QkFBTXJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQXJJTUQ7S0FBQUE7QUF1SU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Ym94LmpzP2U4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDaGF0Qm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvdHRvbU9mcGFubmVsID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZihib3R0b21PZnBhbm5lbC5jdXJyZW50KXtcclxuICAgICAgXHJcbiAgICB9XHJcbiAgXHJcbiAgIFxyXG4gIH0sIFt0aGlyZF0pXHJcbiAgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHdpdGggdGhlIHVzZXIncyBtZXNzYWdlXHJcbiAgICBjb25zdCB1cGRhdGVkTWVzc2FnZXMgPSBbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiBcInVzZXJcIiB9XTtcclxuICAgIHNldE1lc3NhZ2VzKHVwZGF0ZWRNZXNzYWdlcyk7XHJcbiAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2cobmV3TWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZW5kIHRoZSB1c2VyJ3MgbWVzc2FnZSB0byB0aGUgYmFja2VuZCB1c2luZyBBeGlvc1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhdFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBBc3N1bWluZyB0aGUgc2VydmVyIHJlc3BvbmRzIHdpdGggYSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBib3QncyBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHdpdGggYm90aCB0aGUgdXNlcidzIG1lc3NhZ2UgYW5kIHRoZSBib3QncyByZXNwb25zZVxyXG4gICAgICBzZXRNZXNzYWdlcyhbLi4udXBkYXRlZE1lc3NhZ2VzLCB7IHRleHQ6IHJlc3BvbnNlRGF0YSwgc2VuZGVyOiBcImJvdFwiIH1dKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGluIHRoZSBjaGF0IGJveFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgYm9yZGVyTGVmdDogXCI0cHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT0nb3ZlcmZsb3cteS1zY3JvbGwnXHJcbiAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjg1dmhcIixcclxuICAgICAgICAgICAgLy8gbXNPdmVyZmxvd1N0eWxlOiBcIm5vbmVcIiwgLy8gSGlkZSBzY3JvbGxiYXIgZm9yIElFL0VkZ2VcclxuICAgICAgICAgICAgLy8gc2Nyb2xsYmFyV2lkdGg6IFwidGhpblwiLCAvLyBIaWRlIHNjcm9sbGJhciBmb3IgRmlyZWZveFxyXG4gICAgICAgICAgICAvLyBXZWJraXRPdmVyZmxvd1Njcm9sbGluZzogXCJ0b3VjaFwiLFxyXG4gICAgICAgICAgICBzY3JvbGxiYXJDb2xvcjogXCJ0cmFuc3BhcmVudCB0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09IFwidXNlclwiID8gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQgY2hhdC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1pbWFnZSBhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9kYWlzeXVpLmNvbS9pbWFnZXMvc3RvY2svcGhvdG8tMTUzNDUyODc0MTc3NS01Mzk5NGE2OWRhZWIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaGVhZGVyJz5Zb3U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtYnViYmxlJz57bWVzc2FnZS50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0IGNoYXQtc3RhcnQnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1pbWFnZSBhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9kYWlzeXVpLmNvbS9pbWFnZXMvc3RvY2svcGhvdG8tMTUzNDUyODc0MTc3NS01Mzk5NGE2OWRhZWIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaGVhZGVyJz5JbmZvQm90PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS01J1xyXG4gICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTBweFwiLCBkaXNwbGF5OiBcImZsZXhcIiB9fT5cclxuICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbWVzc2FnZS4uLidcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgI2RkZFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMkU0Mzc0XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMzNcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMzNDk4ZGJcIixcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+cmVmID17Ym90dG9tT2ZwYW5uZWx9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXhpb3MiLCJDaGF0Qm94IiwiYm90dG9tT2ZwYW5uZWwiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJjdXJyZW50IiwidGhpcmQiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJ1cGRhdGVkTWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwiZGF0YSIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImhlaWdodCIsImNsYXNzTmFtZSIsInNjcm9sbGJhckNvbG9yIiwibWFwIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});