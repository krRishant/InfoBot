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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst ChatBox = ()=>{\n    _s();\n    const bottomOfpannel = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (bottomOfPanel.current) {\n            bottomOfPanel.current.scrollIntoView({\n                behavior: \"smooth\"\n            });\n        }\n    }, [\n        messages\n    ]);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-scroll\",\n                style: {\n                    padding: \"20px\",\n                    height: \"85vh\",\n                    // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                    // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                    // WebkitOverflowScrolling: \"touch\",\n                    scrollbarColor: \"transparent transparent\"\n                },\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"You\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 88,\n                                                columnNumber: 23\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 87,\n                                            columnNumber: 21\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"InfoBot\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 91,\n                                        columnNumber: 19\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 92,\n                                        columnNumber: 19\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 85,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-5\",\n                        style: {\n                            marginTop: \"10px\",\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\",\n                                style: {\n                                    padding: \"8px\",\n                                    borderRadius: \"4px\",\n                                    border: \"1px solid #ddd\",\n                                    background: \"#2E4374\",\n                                    border: \"1px solid #333\",\n                                    color: \"#fff\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendMessage,\n                                style: {\n                                    marginLeft: \"10px\",\n                                    padding: \"8px 12px\",\n                                    borderRadius: \"4px\",\n                                    backgroundColor: \"#3498db\",\n                                    color: \"#fff\",\n                                    border: \"none\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 98,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: bottomOfpannel\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"3NaMkCDOlYQKiJhqwxliET4KlyY=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0gsS0FBSztnQ0FDN0NJLGFBQVk7Z0NBQ1pyQixPQUFPO29DQUNMSSxTQUFTO29DQUNUa0IsY0FBYztvQ0FDZEMsUUFBUTtvQ0FDUkMsWUFBWTtvQ0FDWkQsUUFBUTtvQ0FDUkUsT0FBTztnQ0FDVDs7Ozs7OzBDQUVGLDhEQUFDQztnQ0FDQ0MsU0FBUzFDO2dDQUNUZSxPQUFPO29DQUNMNEIsWUFBWTtvQ0FDWnhCLFNBQVM7b0NBQ1RrQixjQUFjO29DQUNkTyxpQkFBaUI7b0NBQ2pCSixPQUFPO29DQUNQRixRQUFRO29DQUNSTyxRQUFRO2dDQUNWOzBDQUFHOzs7Ozs7Ozs7Ozs7a0NBSVAsOERBQUMvQjt3QkFBSWdDLEtBQU12RDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQWxJTUQ7S0FBQUE7QUFvSU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Ym94LmpzP2U4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5jb25zdCBDaGF0Qm94ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGJvdHRvbU9mcGFubmVsID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoYm90dG9tT2ZQYW5lbC5jdXJyZW50KSB7XHJcbiAgICAgIGJvdHRvbU9mUGFuZWwuY3VycmVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICAgIH1cclxuICB9LCBbbWVzc2FnZXNdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGUgd2l0aCB0aGUgdXNlcidzIG1lc3NhZ2VcclxuICAgIGNvbnN0IHVwZGF0ZWRNZXNzYWdlcyA9IFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6IFwidXNlclwiIH1dO1xyXG4gICAgc2V0TWVzc2FnZXModXBkYXRlZE1lc3NhZ2VzKTtcclxuICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdNZXNzYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIncyBtZXNzYWdlIHRvIHRoZSBiYWNrZW5kIHVzaW5nIEF4aW9zXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jaGF0XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWVzc2FnZTogbmV3TWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEFzc3VtaW5nIHRoZSBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCBhIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGJvdCdzIG1lc3NhZ2VcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGUgd2l0aCBib3RoIHRoZSB1c2VyJ3MgbWVzc2FnZSBhbmQgdGhlIGJvdCdzIHJlc3BvbnNlXHJcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi51cGRhdGVkTWVzc2FnZXMsIHsgdGV4dDogcmVzcG9uc2VEYXRhLCBzZW5kZXI6IFwiYm90XCIgfV0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgaW4gdGhlIGNoYXQgYm94XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICBib3JkZXJMZWZ0OiBcIjRweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy15LXNjcm9sbCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODV2aFwiLFxyXG4gICAgICAgICAgICAvLyBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLCAvLyBIaWRlIHNjcm9sbGJhciBmb3IgSUUvRWRnZVxyXG4gICAgICAgICAgICAvLyBzY3JvbGxiYXJXaWR0aDogXCJ0aGluXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBGaXJlZm94XHJcbiAgICAgICAgICAgIC8vIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhckNvbG9yOiBcInRyYW5zcGFyZW50IHRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gXCJ1c2VyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPllvdTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQgY2hhdC1zdGFydCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPkluZm9Cb3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtYnViYmxlJz57bWVzc2FnZS50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTUnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyRTQzNzRcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMzM1wiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiByZWYgPXtib3R0b21PZnBhbm5lbH0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXhpb3MiLCJDaGF0Qm94IiwiYm90dG9tT2ZwYW5uZWwiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJib3R0b21PZlBhbmVsIiwiY3VycmVudCIsInNjcm9sbEludG9WaWV3IiwiYmVoYXZpb3IiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJ1cGRhdGVkTWVzc2FnZXMiLCJ0ZXh0Iiwic2VuZGVyIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwicG9zdCIsIm1lc3NhZ2UiLCJoZWFkZXJzIiwicmVzcG9uc2VEYXRhIiwiZGF0YSIsImVycm9yIiwiZGl2Iiwic3R5bGUiLCJmb250RmFtaWx5IiwibWF4V2lkdGgiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyTGVmdCIsImhlaWdodCIsImNsYXNzTmFtZSIsInNjcm9sbGJhckNvbG9yIiwibWFwIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJtYXJnaW5Ub3AiLCJkaXNwbGF5IiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmQiLCJjb2xvciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0IiwiYmFja2dyb3VuZENvbG9yIiwiY3Vyc29yIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});