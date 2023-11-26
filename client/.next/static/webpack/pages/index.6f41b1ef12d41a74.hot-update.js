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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-to-bottom */ \"./node_modules/react-scroll-to-bottom/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                className: \"chat-box\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-y-scroll\",\n                    style: {\n                        padding: \"20px\",\n                        height: \"85vh\",\n                        // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                        // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                        // WebkitOverflowScrolling: \"touch\",\n                        scrollbarColor: \"transparent transparent\"\n                    },\n                    children: [\n                        messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-end\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"You\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 87,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 86,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"InfoBot\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 91,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 72,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-5\",\n                            style: {\n                                marginTop: \"10px\",\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: newMessage,\n                                    onChange: (e)=>setNewMessage(e.target.value),\n                                    placeholder: \"Type your message...\",\n                                    style: {\n                                        padding: \"8px\",\n                                        borderRadius: \"4px\",\n                                        border: \"1px solid #ddd\",\n                                        background: \"#2E4374\",\n                                        border: \"1px solid #333\",\n                                        color: \"#fff\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSendMessage,\n                                    style: {\n                                        marginLeft: \"10px\",\n                                        padding: \"8px 12px\",\n                                        borderRadius: \"4px\",\n                                        backgroundColor: \"#3498db\",\n                                        color: \"#fff\",\n                                        border: \"none\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 97,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                    lineNumber: 60,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 59,\n                columnNumber: 12\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 49,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"DTIS5OvIgs5cgWPHCj6NEqfd+m8=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q1Q7Ozs7Ozs4Q0FFRiw4REFBQ0M7b0NBQ0NDLFNBQVMxQztvQ0FDVGUsT0FBTzt3Q0FDTDRCLFlBQVk7d0NBQ1p4QixTQUFTO3dDQUNUa0IsY0FBYzt3Q0FDZE8saUJBQWlCO3dDQUNqQkosT0FBTzt3Q0FDUEYsUUFBUTt3Q0FDUk8sUUFBUTtvQ0FDVjs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVWpCO0dBaklNbEQ7S0FBQUE7QUFtSU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGF0Ym94LmpzP2U4NTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBSZWFjdFNjcm9sbFRvQm90dG9tIGZyb20gXCJyZWFjdC1zY3JvbGwtdG8tYm90dG9tXCI7XHJcblxyXG5jb25zdCBDaGF0Qm94ID0gKCkgPT4ge1xyXG4gIFxyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGUgd2l0aCB0aGUgdXNlcidzIG1lc3NhZ2VcclxuICAgIGNvbnN0IHVwZGF0ZWRNZXNzYWdlcyA9IFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6IFwidXNlclwiIH1dO1xyXG4gICAgc2V0TWVzc2FnZXModXBkYXRlZE1lc3NhZ2VzKTtcclxuICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdNZXNzYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIncyBtZXNzYWdlIHRvIHRoZSBiYWNrZW5kIHVzaW5nIEF4aW9zXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jaGF0XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWVzc2FnZTogbmV3TWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEFzc3VtaW5nIHRoZSBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCBhIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGJvdCdzIG1lc3NhZ2VcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGUgd2l0aCBib3RoIHRoZSB1c2VyJ3MgbWVzc2FnZSBhbmQgdGhlIGJvdCdzIHJlc3BvbnNlXHJcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi51cGRhdGVkTWVzc2FnZXMsIHsgdGV4dDogcmVzcG9uc2VEYXRhLCBzZW5kZXI6IFwiYm90XCIgfV0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgaW4gdGhlIGNoYXQgYm94XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgXHJcbiAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsLCBzYW5zLXNlcmlmXCIsXHJcbiAgICAgICAgICBtYXhXaWR0aDogXCI0MDBweFwiLFxyXG4gICAgICAgICAgbWFyZ2luOiBcIjAgMCAwIGF1dG9cIixcclxuICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgYm9yZGVyTGVmdDogXCI0cHggc29saWQgYmxhY2tcIixcclxuICAgICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgIH19PlxyXG4gICAgICAgICAgIDxSZWFjdFNjcm9sbFRvQm90dG9tIGNsYXNzTmFtZT1cImNoYXQtYm94XCI+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy15LXNjcm9sbCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODV2aFwiLFxyXG4gICAgICAgICAgICAvLyBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLCAvLyBIaWRlIHNjcm9sbGJhciBmb3IgSUUvRWRnZVxyXG4gICAgICAgICAgICAvLyBzY3JvbGxiYXJXaWR0aDogXCJ0aGluXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBGaXJlZm94XHJcbiAgICAgICAgICAgIC8vIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhckNvbG9yOiBcInRyYW5zcGFyZW50IHRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gXCJ1c2VyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPllvdTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQgY2hhdC1zdGFydCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPkluZm9Cb3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtYnViYmxlJz57bWVzc2FnZS50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTUnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyRTQzNzRcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMzM1wiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9SZWFjdFNjcm9sbFRvQm90dG9tPiBcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXRCb3g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiYXhpb3MiLCJSZWFjdFNjcm9sbFRvQm90dG9tIiwiQ2hhdEJveCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsInVwZGF0ZWRNZXNzYWdlcyIsInRleHQiLCJzZW5kZXIiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwibWVzc2FnZSIsImhlYWRlcnMiLCJyZXNwb25zZURhdGEiLCJkYXRhIiwiZXJyb3IiLCJkaXYiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJtYXhXaWR0aCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXJMZWZ0IiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwic2Nyb2xsYmFyQ29sb3IiLCJtYXAiLCJpbmRleCIsImltZyIsInNyYyIsIm1hcmdpblRvcCIsImRpc3BsYXkiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYm9yZGVyUmFkaXVzIiwiYm9yZGVyIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiYnV0dG9uIiwib25DbGljayIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});