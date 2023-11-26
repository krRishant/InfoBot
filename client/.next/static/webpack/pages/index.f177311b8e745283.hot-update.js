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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-to-bottom */ \"./node_modules/react-scroll-to-bottom/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = ()=>{\n    _s();\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const scrollToBottom = ()=>{\n        var _messagesEndRef_current;\n        (_messagesEndRef_current = messagesEndRef.current) === null || _messagesEndRef_current === void 0 ? void 0 : _messagesEndRef_current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-y-scroll\",\n                    style: {\n                        padding: \"20px\",\n                        height: \"85vh\",\n                        // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                        // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                        // WebkitOverflowScrolling: \"touch\",\n                        scrollbarColor: \"transparent transparent\"\n                    },\n                    children: [\n                        messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-end\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 79,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"You\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 82,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 89,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"InfoBot\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 86,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 74,\n                                columnNumber: 15\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-5\",\n                            style: {\n                                marginTop: \"10px\",\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: newMessage,\n                                    onChange: (e)=>setNewMessage(e.target.value),\n                                    placeholder: \"Type your message...\",\n                                    style: {\n                                        padding: \"8px\",\n                                        borderRadius: \"4px\",\n                                        border: \"1px solid #ddd\",\n                                        background: \"#2E4374\",\n                                        border: \"1px solid #333\",\n                                        color: \"#fff\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onEnter: true,\n                                    onClick: handleSendMessage,\n                                    style: {\n                                        marginLeft: \"10px\",\n                                        padding: \"8px 12px\",\n                                        borderRadius: \"4px\",\n                                        backgroundColor: \"#3498db\",\n                                        color: \"#fff\",\n                                        border: \"none\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 115,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        marginBottom: 100\n                    },\n                    ref: messagesEndRef\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                    lineNumber: 131,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"grm2/QFPIWgD9VcUhccQ2+eDjcA=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLENBQUNDLElBQU12QyxjQUFjdUMsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO29DQUM3Q0ksYUFBWTtvQ0FDWnJCLE9BQU87d0NBQ0xJLFNBQVM7d0NBQ1RrQixjQUFjO3dDQUNkQyxRQUFRO3dDQUNSQyxZQUFZO3dDQUNaRCxRQUFRO3dDQUNSRSxPQUFPO29DQUNUOzs7Ozs7OENBRUYsOERBQUNDO29DQUNDQyxPQUFPO29DQUNQQyxTQUFTM0M7b0NBQ1RlLE9BQU87d0NBQ0w2QixZQUFZO3dDQUNaekIsU0FBUzt3Q0FDVGtCLGNBQWM7d0NBQ2RRLGlCQUFpQjt3Q0FDakJMLE9BQU87d0NBQ1BGLFFBQVE7d0NBQ1JRLFFBQVE7b0NBQ1Y7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFLVCw4REFBQ2hDO29CQUFJQyxPQUFPO3dCQUFFZ0MsY0FBYztvQkFBSTtvQkFBR0MsS0FBS3pEOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtsRDtHQW5JTUQ7S0FBQUE7QUFxSU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Ym94LmpzP2U4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBTY3JvbGxUb0JvdHRvbSBmcm9tIFwicmVhY3Qtc2Nyb2xsLXRvLWJvdHRvbVwiO1xyXG5cclxuY29uc3QgQ2hhdEJveCA9ICgpID0+IHtcclxuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQ/LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNjcm9sbFRvQm90dG9tKCk7XHJcbiAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHdpdGggdGhlIHVzZXIncyBtZXNzYWdlXHJcbiAgICBjb25zdCB1cGRhdGVkTWVzc2FnZXMgPSBbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiBcInVzZXJcIiB9XTtcclxuICAgIHNldE1lc3NhZ2VzKHVwZGF0ZWRNZXNzYWdlcyk7XHJcbiAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2cobmV3TWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZW5kIHRoZSB1c2VyJ3MgbWVzc2FnZSB0byB0aGUgYmFja2VuZCB1c2luZyBBeGlvc1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhdFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBBc3N1bWluZyB0aGUgc2VydmVyIHJlc3BvbmRzIHdpdGggYSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBib3QncyBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHdpdGggYm90aCB0aGUgdXNlcidzIG1lc3NhZ2UgYW5kIHRoZSBib3QncyByZXNwb25zZVxyXG4gICAgICBzZXRNZXNzYWdlcyhbLi4udXBkYXRlZE1lc3NhZ2VzLCB7IHRleHQ6IHJlc3BvbnNlRGF0YSwgc2VuZGVyOiBcImJvdFwiIH1dKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGluIHRoZSBjaGF0IGJveFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICBib3JkZXJMZWZ0OiBcIjRweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICBcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy15LXNjcm9sbCdcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiODV2aFwiLFxyXG4gICAgICAgICAgICAgIC8vIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBJRS9FZGdlXHJcbiAgICAgICAgICAgICAgLy8gc2Nyb2xsYmFyV2lkdGg6IFwidGhpblwiLCAvLyBIaWRlIHNjcm9sbGJhciBmb3IgRmlyZWZveFxyXG4gICAgICAgICAgICAgIC8vIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IFwidHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09IFwidXNlclwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPllvdTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LXN0YXJ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1pbWFnZSBhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+SW5mb0JvdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTUnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMkU0Mzc0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMzM1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25FbnRlclxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQ5OGRiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDEwMCB9fSByZWY9e21lc3NhZ2VzRW5kUmVmfSAvPlxyXG4gICAgIFxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Qm94O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiU2Nyb2xsVG9Cb3R0b20iLCJDaGF0Qm94IiwibWVzc2FnZXNFbmRSZWYiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwidXBkYXRlZE1lc3NhZ2VzIiwidGV4dCIsInNlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJtZXNzYWdlIiwiaGVhZGVycyIsInJlc3BvbnNlRGF0YSIsImRhdGEiLCJlcnJvciIsImRpdiIsInN0eWxlIiwiZm9udEZhbWlseSIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlckxlZnQiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJzY3JvbGxiYXJDb2xvciIsIm1hcCIsImluZGV4IiwiaW1nIiwic3JjIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJidXR0b24iLCJvbkVudGVyIiwib25DbGljayIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJtYXJnaW5Cb3R0b20iLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});