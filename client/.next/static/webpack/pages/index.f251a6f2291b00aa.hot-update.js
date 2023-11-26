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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = ()=>{\n    _s();\n    const messagesEndRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const scrollToBottom = ()=>{\n        messagesEndRef.current && messagesEndRef.current.scrollIntoView({\n            behavior: \"smooth\"\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"smooth\");\n        scrollToBottom();\n    }, [\n        messages\n    ]);\n    const handleSendMessage = async (e)=>{\n        e.preventDefault();\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"red\",\n                    width: \"150vh\"\n                },\n                children: \"helllooo\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    style: {\n                        fontFamily: \"Arial, sans-serif\",\n                        maxWidth: \"400px\",\n                        margin: \"0 0 0 0\",\n                        padding: \"20px\",\n                        borderLeft: \"4px solid black\",\n                        height: \"100vh\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"overflow-y-scroll\",\n                        style: {\n                            padding: \"20px\",\n                            height: \"85vh\",\n                            scrollbarColor: \"transparent transparent\"\n                        },\n                        children: [\n                            messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\",\n                                    children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat chat-end\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"chat-image avatar\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"w-10 rounded-full\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"chat-header\",\n                                                children: \"You\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"chat-bubble\",\n                                                children: message.text\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 91,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                        lineNumber: 84,\n                                        columnNumber: 19\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat chat-start\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"chat-image avatar\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    className: \"w-10 rounded-full\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                        src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                        lineNumber: 97,\n                                                        columnNumber: 25\n                                                    }, undefined)\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 96,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 95,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"chat-header\",\n                                                children: \"InfoBot\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 100,\n                                                columnNumber: 21\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"chat-bubble\",\n                                                children: message.text\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                                lineNumber: 101,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                        lineNumber: 94,\n                                        columnNumber: 19\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 15\n                                }, undefined)),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                className: \"absolute bottom-5\",\n                                style: {\n                                    marginTop: \"10px\",\n                                    display: \"flex\"\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: newMessage,\n                                        onChange: (e)=>setNewMessage(e.target.value),\n                                        placeholder: \"Type your message...\",\n                                        style: {\n                                            padding: \"8px\",\n                                            borderRadius: \"4px\",\n                                            border: \"1px solid #ddd\",\n                                            background: \"#2E4374\",\n                                            border: \"1px solid #333\",\n                                            color: \"#fff\"\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        onClick: handleSendMessage,\n                                        style: {\n                                            marginLeft: \"10px\",\n                                            padding: \"8px 12px\",\n                                            borderRadius: \"4px\",\n                                            backgroundColor: \"#3498db\",\n                                            color: \"#fff\",\n                                            border: \"none\",\n                                            cursor: \"pointer\"\n                                        },\n                                        children: \"Send\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                        lineNumber: 123,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    marginBottom: 100\n                                },\n                                ref: messagesEndRef\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                                lineNumber: 138,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                        lineNumber: 73,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Projects\\\\infoBot\\\\client\\\\components\\\\chatbox.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"grm2/QFPIWgD9VcUhccQ2+eDjcA=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVkMsT0FBTztvQ0FBRWUsV0FBVztvQ0FBUUMsU0FBUztnQ0FBTzs7a0RBQzVDLDhEQUFDQzt3Q0FDQ0MsTUFBSzt3Q0FDTEMsT0FBTzNDO3dDQUNQNEMsVUFBVSxDQUFDbkMsSUFBTVIsY0FBY1EsRUFBRW9DLE1BQU0sQ0FBQ0YsS0FBSzt3Q0FDN0NHLGFBQVk7d0NBQ1p0QixPQUFPOzRDQUNMTSxTQUFTOzRDQUNUaUIsY0FBYzs0Q0FDZEMsUUFBUTs0Q0FDUkMsWUFBWTs0Q0FDWkQsUUFBUTs0Q0FDUkUsT0FBTzt3Q0FDVDs7Ozs7O2tEQUVGLDhEQUFDQzt3Q0FDQ1QsTUFBSzt3Q0FDTFUsU0FBUzVDO3dDQUNUZ0IsT0FBTzs0Q0FDTDZCLFlBQVk7NENBQ1p2QixTQUFTOzRDQUNUaUIsY0FBYzs0Q0FDZHRCLGlCQUFpQjs0Q0FDakJ5QixPQUFPOzRDQUNQRixRQUFROzRDQUNSTSxRQUFRO3dDQUNWO2tEQUFHOzs7Ozs7Ozs7Ozs7MENBSVAsOERBQUNoQztnQ0FBSUUsT0FBTztvQ0FBRStCLGNBQWM7Z0NBQUk7Z0NBQUdDLEtBQUszRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wRDtHQTNJTUQ7S0FBQUE7QUE2SU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Ym94LmpzP2U4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjc2VkIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5jb25zdCBDaGF0Qm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IG1lc3NhZ2VzRW5kUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IHNjcm9sbFRvQm90dG9tID0gKCkgPT4ge1xyXG4gICAgbWVzc2FnZXNFbmRSZWYuY3VycmVudCAmJlxyXG4gICAgICBtZXNzYWdlc0VuZFJlZi5jdXJyZW50LnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwic21vb3RoXCIpO1xyXG4gICAgc2Nyb2xsVG9Cb3R0b20oKTtcclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHdpdGggdGhlIHVzZXIncyBtZXNzYWdlXHJcbiAgICBjb25zdCB1cGRhdGVkTWVzc2FnZXMgPSBbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiBcInVzZXJcIiB9XTtcclxuICAgIHNldE1lc3NhZ2VzKHVwZGF0ZWRNZXNzYWdlcyk7XHJcbiAgICBzZXROZXdNZXNzYWdlKFwiXCIpO1xyXG4gICAgY29uc29sZS5sb2cobmV3TWVzc2FnZSk7XHJcbiAgICB0cnkge1xyXG4gICAgICAvLyBTZW5kIHRoZSB1c2VyJ3MgbWVzc2FnZSB0byB0aGUgYmFja2VuZCB1c2luZyBBeGlvc1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXHJcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvY2hhdFwiLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIG1lc3NhZ2U6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcblxyXG4gICAgICAvLyBBc3N1bWluZyB0aGUgc2VydmVyIHJlc3BvbmRzIHdpdGggYSBKU09OIG9iamVjdCBjb250YWluaW5nIHRoZSBib3QncyBtZXNzYWdlXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IHJlc3BvbnNlLmRhdGE7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2VEYXRhKTtcclxuICAgICAgLy8gVXBkYXRlIGxvY2FsIHN0YXRlIHdpdGggYm90aCB0aGUgdXNlcidzIG1lc3NhZ2UgYW5kIHRoZSBib3QncyByZXNwb25zZVxyXG4gICAgICBzZXRNZXNzYWdlcyhbLi4udXBkYXRlZE1lc3NhZ2VzLCB7IHRleHQ6IHJlc3BvbnNlRGF0YSwgc2VuZGVyOiBcImJvdFwiIH1dKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgIC8vIEhhbmRsZSBlcnJvciwgZS5nLiwgZGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIGluIHRoZSBjaGF0IGJveFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cclxuICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGU9e3tiYWNrZ3JvdW5kOiBjc2VkfX0+XHJcbiAgICAgICAgPGltZyBzcmM9XCJcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICA8L2Rpdj4gKi99XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicmVkXCIsIHdpZHRoOiBcIjE1MHZoXCJ9fT5oZWxsbG9vb1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgICAgbWFyZ2luOiBcIjAgMCAwIDBcIixcclxuICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgIGJvcmRlckxlZnQ6IFwiNHB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgfX0+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nb3ZlcmZsb3cteS1zY3JvbGwnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjg1dmhcIixcclxuXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IFwidHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9Jyc+XHJcbiAgICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09IFwidXNlclwiID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPllvdTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LXN0YXJ0Jz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1pbWFnZSBhdmF0YXInPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9J2h0dHBzOi8vZGFpc3l1aS5jb20vaW1hZ2VzL3N0b2NrL3Bob3RvLTE1MzQ1Mjg3NDE3NzUtNTM5OTRhNjlkYWViLmpwZycgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWhlYWRlcic+SW5mb0JvdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWJ1YmJsZSc+e21lc3NhZ2UudGV4dH08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS01J1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbWVzc2FnZS4uLidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzJFNDM3NFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMzNcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTAwIH19IHJlZj17bWVzc2FnZXNFbmRSZWZ9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJheGlvcyIsImNzZWQiLCJDaGF0Qm94IiwibWVzc2FnZXNFbmRSZWYiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJzY3JvbGxUb0JvdHRvbSIsImN1cnJlbnQiLCJzY3JvbGxJbnRvVmlldyIsImJlaGF2aW9yIiwiY29uc29sZSIsImxvZyIsImhhbmRsZVNlbmRNZXNzYWdlIiwiZSIsInByZXZlbnREZWZhdWx0IiwidHJpbSIsInVwZGF0ZWRNZXNzYWdlcyIsInRleHQiLCJzZW5kZXIiLCJyZXNwb25zZSIsInBvc3QiLCJtZXNzYWdlIiwiaGVhZGVycyIsInJlc3BvbnNlRGF0YSIsImRhdGEiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwid2lkdGgiLCJmb250RmFtaWx5IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImhlaWdodCIsInNjcm9sbGJhckNvbG9yIiwibWFwIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJmb3JtIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwiY3Vyc29yIiwibWFyZ2luQm90dG9tIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});