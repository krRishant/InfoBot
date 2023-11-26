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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChatBox = ()=>{\n    _s();\n    const bottomOfpannel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-scroll\",\n                style: {\n                    padding: \"20px\",\n                    height: \"85vh\",\n                    // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                    // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                    // WebkitOverflowScrolling: \"touch\",\n                    scrollbarColor: \"transparent transparent\"\n                },\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"You\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"InfoBot\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 79,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-5\",\n                        style: {\n                            marginTop: \"10px\",\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\",\n                                style: {\n                                    padding: \"8px\",\n                                    borderRadius: \"4px\",\n                                    border: \"1px solid #ddd\",\n                                    background: \"#2E4374\",\n                                    border: \"1px solid #333\",\n                                    color: \"#fff\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendMessage,\n                                style: {\n                                    marginLeft: \"10px\",\n                                    padding: \"8px 12px\",\n                                    borderRadius: \"4px\",\n                                    backgroundColor: \"#3498db\",\n                                    color: \"#fff\",\n                                    border: \"none\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 109,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: \"ref  =\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"EQkWB7DZX/D5B+XaGoiwTzotwDg=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQztnQ0FDQ0MsU0FBUzFDO2dDQUNUZSxPQUFPO29DQUNMNEIsWUFBWTtvQ0FDWnhCLFNBQVM7b0NBQ1RrQixjQUFjO29DQUNkTyxpQkFBaUI7b0NBQ2pCSixPQUFPO29DQUNQRixRQUFRO29DQUNSTyxRQUFRO2dDQUNWOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBSVAsOERBQUMvQjtrQ0FBSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtmO0dBNUhNcEI7S0FBQUE7QUE4SE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Ym94LmpzP2U4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgQ2hhdEJveCA9ICgpID0+IHtcclxuICBjb25zdCBib3R0b21PZnBhbm5lbCA9IHVzZVJlZigpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIHRoZSB1c2VyJ3MgbWVzc2FnZVxyXG4gICAgY29uc3QgdXBkYXRlZE1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzLCB7IHRleHQ6IG5ld01lc3NhZ2UsIHNlbmRlcjogXCJ1c2VyXCIgfV07XHJcbiAgICBzZXRNZXNzYWdlcyh1cGRhdGVkTWVzc2FnZXMpO1xyXG4gICAgc2V0TmV3TWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld01lc3NhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlcidzIG1lc3NhZ2UgdG8gdGhlIGJhY2tlbmQgdXNpbmcgQXhpb3NcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gQXNzdW1pbmcgdGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgYm90J3MgbWVzc2FnZVxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIGJvdGggdGhlIHVzZXIncyBtZXNzYWdlIGFuZCB0aGUgYm90J3MgcmVzcG9uc2VcclxuICAgICAgc2V0TWVzc2FnZXMoWy4uLnVwZGF0ZWRNZXNzYWdlcywgeyB0ZXh0OiByZXNwb25zZURhdGEsIHNlbmRlcjogXCJib3RcIiB9XSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3IsIGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBpbiB0aGUgY2hhdCBib3hcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgIGJvcmRlckxlZnQ6IFwiNHB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9J292ZXJmbG93LXktc2Nyb2xsJ1xyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCI4NXZoXCIsXHJcbiAgICAgICAgICAgIC8vIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBJRS9FZGdlXHJcbiAgICAgICAgICAgIC8vIHNjcm9sbGJhcldpZHRoOiBcInRoaW5cIiwgLy8gSGlkZSBzY3JvbGxiYXIgZm9yIEZpcmVmb3hcclxuICAgICAgICAgICAgLy8gV2Via2l0T3ZlcmZsb3dTY3JvbGxpbmc6IFwidG91Y2hcIixcclxuICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IFwidHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVyID09PSBcInVzZXJcIiA/IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0IGNoYXQtZW5kJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+WW91PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LXN0YXJ0Jz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+SW5mb0JvdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdhYnNvbHV0ZSBib3R0b20tNSdcclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjEwcHhcIiwgZGlzcGxheTogXCJmbGV4XCIgfX0+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbiAgICAgICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nVHlwZSB5b3VyIG1lc3NhZ2UuLi4nXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICNkZGRcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzJFNDM3NFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjMzMzXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMzQ5OGRiXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcclxuICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICBTZW5kXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PnJlZiAgPXt9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXhpb3MiLCJDaGF0Qm94IiwiYm90dG9tT2ZwYW5uZWwiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJ1cGRhdGVkTWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwiZGF0YSIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImhlaWdodCIsImNsYXNzTmFtZSIsInNjcm9sbGJhckNvbG9yIiwibWFwIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});