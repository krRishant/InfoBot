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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = ()=>{\n    _s();\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const scrollToBottom = ()=>{\n        messagesEndRef.current && messagesEndRef.current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"smooth\");\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    const handleSendMessage = async (e)=>{\n        e.preventDefault();\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"Arial, sans-serif\",\n                    maxWidth: \"400px\",\n                    margin: \"0 0 0 auto\",\n                    padding: \"20px\",\n                    borderLeft: \"4px solid black\",\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-y-scroll\",\n                    style: {\n                        padding: \"20px\",\n                        height: \"85vh\",\n                        scrollbarColor: \"transparent transparent\"\n                    },\n                    children: [\n                        messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-end\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 83,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"You\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                            lineNumber: 86,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                    lineNumber: 80,\n                                    columnNumber: 19\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 93,\n                                                    columnNumber: 25\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 92,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"InfoBot\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                            lineNumber: 96,\n                                            columnNumber: 21\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                            lineNumber: 97,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                    lineNumber: 90,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                lineNumber: 78,\n                                columnNumber: 15\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"absolute bottom-5\",\n                            style: {\n                                marginTop: \"10px\",\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: newMessage,\n                                    onChange: (e)=>setNewMessage(e.target.value),\n                                    placeholder: \"Type your message...\",\n                                    style: {\n                                        padding: \"8px\",\n                                        borderRadius: \"4px\",\n                                        border: \"1px solid #ddd\",\n                                        background: \"#2E4374\",\n                                        border: \"1px solid #333\",\n                                        color: \"#fff\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                    lineNumber: 105,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    onClick: handleSendMessage,\n                                    style: {\n                                        marginLeft: \"10px\",\n                                        padding: \"8px 12px\",\n                                        borderRadius: \"4px\",\n                                        backgroundColor: \"#3498db\",\n                                        color: \"#fff\",\n                                        border: \"none\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                    lineNumber: 119,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                            lineNumber: 102,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: {\n                                marginBottom: 100\n                            },\n                            ref: messagesEndRef\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                            lineNumber: 134,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n            lineNumber: 59,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"grm2/QFPIWgD9VcUhccQ2+eDjcA=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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b0NBQ1AwQyxVQUFVLENBQUNqQyxJQUFNUixjQUFjUSxFQUFFa0MsTUFBTSxDQUFDRixLQUFLO29DQUM3Q0csYUFBWTtvQ0FDWnJCLE9BQU87d0NBQ0xJLFNBQVM7d0NBQ1RrQixjQUFjO3dDQUNkQyxRQUFRO3dDQUNSQyxZQUFZO3dDQUNaRCxRQUFRO3dDQUNSRSxPQUFPO29DQUNUOzs7Ozs7OENBRUYsOERBQUNDO29DQUNDVCxNQUFLO29DQUNMVSxTQUFTMUM7b0NBQ1RlLE9BQU87d0NBQ0w0QixZQUFZO3dDQUNaeEIsU0FBUzt3Q0FDVGtCLGNBQWM7d0NBQ2RPLGlCQUFpQjt3Q0FDakJKLE9BQU87d0NBQ1BGLFFBQVE7d0NBQ1JPLFFBQVE7b0NBQ1Y7OENBQUc7Ozs7Ozs7Ozs7OztzQ0FJUCw4REFBQy9COzRCQUFJQyxPQUFPO2dDQUFFK0IsY0FBYzs0QkFBSTs0QkFBR0MsS0FBSzFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEQ7R0F2SU1EO0tBQUFBO0FBeUlOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdGJveC5qcz9lODUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgY3NlZCBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgQ2hhdEJveCA9ICgpID0+IHtcclxuICBjb25zdCBtZXNzYWdlc0VuZFJlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBzY3JvbGxUb0JvdHRvbSA9ICgpID0+IHtcclxuICAgIG1lc3NhZ2VzRW5kUmVmLmN1cnJlbnQgJiZcclxuICAgICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNtb290aFwiKTtcclxuICAgIHNjcm9sbFRvQm90dG9tKCk7XHJcbiAgfSwgW21lc3NhZ2VzXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIHRoZSB1c2VyJ3MgbWVzc2FnZVxyXG4gICAgY29uc3QgdXBkYXRlZE1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzLCB7IHRleHQ6IG5ld01lc3NhZ2UsIHNlbmRlcjogXCJ1c2VyXCIgfV07XHJcbiAgICBzZXRNZXNzYWdlcyh1cGRhdGVkTWVzc2FnZXMpO1xyXG4gICAgc2V0TmV3TWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld01lc3NhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlcidzIG1lc3NhZ2UgdG8gdGhlIGJhY2tlbmQgdXNpbmcgQXhpb3NcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gQXNzdW1pbmcgdGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgYm90J3MgbWVzc2FnZVxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIGJvdGggdGhlIHVzZXIncyBtZXNzYWdlIGFuZCB0aGUgYm90J3MgcmVzcG9uc2VcclxuICAgICAgc2V0TWVzc2FnZXMoWy4uLnVwZGF0ZWRNZXNzYWdlcywgeyB0ZXh0OiByZXNwb25zZURhdGEsIHNlbmRlcjogXCJib3RcIiB9XSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3IsIGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBpbiB0aGUgY2hhdCBib3hcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBjc2VkfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgYm9yZGVyTGVmdDogXCI0cHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy15LXNjcm9sbCdcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiODV2aFwiLFxyXG5cclxuICAgICAgICAgICAgICBzY3JvbGxiYXJDb2xvcjogXCJ0cmFuc3BhcmVudCB0cmFuc3BhcmVudFwiLFxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gXCJ1c2VyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0IGNoYXQtZW5kJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1pbWFnZSBhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+WW91PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtYnViYmxlJz57bWVzc2FnZS50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0IGNoYXQtc3RhcnQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9kYWlzeXVpLmNvbS9pbWFnZXMvc3RvY2svcGhvdG8tMTUzNDUyODc0MTc3NS01Mzk5NGE2OWRhZWIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaGVhZGVyJz5JbmZvQm90PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtYnViYmxlJz57bWVzc2FnZS50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8Zm9ybVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTUnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIixcclxuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCIjMkU0Mzc0XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMzM1wiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT0nc3VibWl0J1xyXG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCI4cHggMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQ5OGRiXCIsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxMDAgfX0gcmVmPXttZXNzYWdlc0VuZFJlZn0gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGF0Qm94O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsImF4aW9zIiwiY3NlZCIsIkNoYXRCb3giLCJtZXNzYWdlc0VuZFJlZiIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsInNjcm9sbFRvQm90dG9tIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0cmltIiwidXBkYXRlZE1lc3NhZ2VzIiwidGV4dCIsInNlbmRlciIsInJlc3BvbnNlIiwicG9zdCIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwiZGF0YSIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImhlaWdodCIsImNsYXNzTmFtZSIsInNjcm9sbGJhckNvbG9yIiwibWFwIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJmb3JtIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwibWFyZ2luQm90dG9tIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});