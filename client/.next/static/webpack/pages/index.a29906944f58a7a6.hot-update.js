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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-to-bottom */ \"./node_modules/react-scroll-to-bottom/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            className: \"\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    fontFamily: \"Arial, sans-serif\",\n                    maxWidth: \"400px\",\n                    margin: \"0 0 0 auto\",\n                    padding: \"20px\",\n                    borderLeft: \"4px solid black\",\n                    height: \"100vh\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"overflow-y-scroll\",\n                    style: {\n                        padding: \"20px\",\n                        height: \"85vh\",\n                        // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                        // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                        // WebkitOverflowScrolling: \"touch\",\n                        scrollbarColor: \"transparent transparent\"\n                    },\n                    children: [\n                        messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-end\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 75,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"You\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 17\n                                }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"chat chat-start\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-image avatar\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"w-10 rounded-full\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                    src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                                }, void 0, false, {\n                                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 23\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 21\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 84,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-header\",\n                                            children: \"InfoBot\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 19\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"chat-bubble\",\n                                            children: message.text\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 19\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 83,\n                                    columnNumber: 17\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 71,\n                                columnNumber: 13\n                            }, undefined)),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"absolute bottom-5\",\n                            style: {\n                                marginTop: \"10px\",\n                                display: \"flex\"\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    value: newMessage,\n                                    onChange: (e)=>setNewMessage(e.target.value),\n                                    placeholder: \"Type your message...\",\n                                    style: {\n                                        padding: \"8px\",\n                                        borderRadius: \"4px\",\n                                        border: \"1px solid #ddd\",\n                                        background: \"#2E4374\",\n                                        border: \"1px solid #333\",\n                                        color: \"#fff\"\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSendMessage,\n                                    style: {\n                                        marginLeft: \"10px\",\n                                        padding: \"8px 12px\",\n                                        borderRadius: \"4px\",\n                                        backgroundColor: \"#3498db\",\n                                        color: \"#fff\",\n                                        border: \"none\",\n                                        cursor: \"pointer\"\n                                    },\n                                    children: \"Send\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 96,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                    lineNumber: 59,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 48,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"DTIS5OvIgs5cgWPHCj6NEqfd+m8=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNUOzs7Ozs7OENBRUYsOERBQUNDO29DQUNDQyxTQUFTMUM7b0NBQ1RnQixPQUFPO3dDQUNMMkIsWUFBWTt3Q0FDWnZCLFNBQVM7d0NBQ1RpQixjQUFjO3dDQUNkTyxpQkFBaUI7d0NBQ2pCSixPQUFPO3dDQUNQRixRQUFRO3dDQUNSTyxRQUFRO29DQUNWOzhDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVakI7R0FoSU1sRDtLQUFBQTtBQWtJTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXRib3guanM/ZTg1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IFJlYWN0U2Nyb2xsVG9Cb3R0b20gZnJvbSBcInJlYWN0LXNjcm9sbC10by1ib3R0b21cIjtcclxuXHJcbmNvbnN0IENoYXRCb3ggPSAoKSA9PiB7XHJcbiAgXHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIFxyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9IGFzeW5jICgpID0+IHtcclxuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuO1xyXG5cclxuICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIHRoZSB1c2VyJ3MgbWVzc2FnZVxyXG4gICAgY29uc3QgdXBkYXRlZE1lc3NhZ2VzID0gWy4uLm1lc3NhZ2VzLCB7IHRleHQ6IG5ld01lc3NhZ2UsIHNlbmRlcjogXCJ1c2VyXCIgfV07XHJcbiAgICBzZXRNZXNzYWdlcyh1cGRhdGVkTWVzc2FnZXMpO1xyXG4gICAgc2V0TmV3TWVzc2FnZShcIlwiKTtcclxuICAgIGNvbnNvbGUubG9nKG5ld01lc3NhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gU2VuZCB0aGUgdXNlcidzIG1lc3NhZ2UgdG8gdGhlIGJhY2tlbmQgdXNpbmcgQXhpb3NcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxyXG4gICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2NoYXRcIixcclxuICAgICAgICB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBuZXdNZXNzYWdlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgICAgLy8gQXNzdW1pbmcgdGhlIHNlcnZlciByZXNwb25kcyB3aXRoIGEgSlNPTiBvYmplY3QgY29udGFpbmluZyB0aGUgYm90J3MgbWVzc2FnZVxyXG4gICAgICBjb25zdCByZXNwb25zZURhdGEgPSByZXNwb25zZS5kYXRhO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlRGF0YSk7XHJcbiAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSB3aXRoIGJvdGggdGhlIHVzZXIncyBtZXNzYWdlIGFuZCB0aGUgYm90J3MgcmVzcG9uc2VcclxuICAgICAgc2V0TWVzc2FnZXMoWy4uLnVwZGF0ZWRNZXNzYWdlcywgeyB0ZXh0OiByZXNwb25zZURhdGEsIHNlbmRlcjogXCJib3RcIiB9XSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3I6XCIsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAvLyBIYW5kbGUgZXJyb3IsIGUuZy4sIGRpc3BsYXkgYW4gZXJyb3IgbWVzc2FnZSBpbiB0aGUgY2hhdCBib3hcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFJlYWN0U2Nyb2xsVG9Cb3R0b20gY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICBcclxuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWwsIHNhbnMtc2VyaWZcIixcclxuICAgICAgICAgIG1heFdpZHRoOiBcIjQwMHB4XCIsXHJcbiAgICAgICAgICBtYXJnaW46IFwiMCAwIDAgYXV0b1wiLFxyXG4gICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICBib3JkZXJMZWZ0OiBcIjRweCBzb2xpZCBibGFja1wiLFxyXG4gICAgICAgICAgaGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy15LXNjcm9sbCdcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiODV2aFwiLFxyXG4gICAgICAgICAgICAvLyBtc092ZXJmbG93U3R5bGU6IFwibm9uZVwiLCAvLyBIaWRlIHNjcm9sbGJhciBmb3IgSUUvRWRnZVxyXG4gICAgICAgICAgICAvLyBzY3JvbGxiYXJXaWR0aDogXCJ0aGluXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBGaXJlZm94XHJcbiAgICAgICAgICAgIC8vIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXHJcbiAgICAgICAgICAgIHNjcm9sbGJhckNvbG9yOiBcInRyYW5zcGFyZW50IHRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gXCJ1c2VyXCIgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdCBjaGF0LWVuZCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPllvdTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQgY2hhdC1zdGFydCc+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMTAgcm91bmRlZC1mdWxsJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPkluZm9Cb3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtYnViYmxlJz57bWVzc2FnZS50ZXh0fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0nYWJzb2x1dGUgYm90dG9tLTUnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICB0eXBlPSd0ZXh0J1xyXG4gICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIiMyRTQzNzRcIixcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgIzMzM1wiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjhweCAxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiNHB4XCIsXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgU2VuZFxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0U2Nyb2xsVG9Cb3R0b20+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJheGlvcyIsIlJlYWN0U2Nyb2xsVG9Cb3R0b20iLCJDaGF0Qm94IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwidXBkYXRlZE1lc3NhZ2VzIiwidGV4dCIsInNlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJtZXNzYWdlIiwiaGVhZGVycyIsInJlc3BvbnNlRGF0YSIsImRhdGEiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiZm9udEZhbWlseSIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlckxlZnQiLCJoZWlnaHQiLCJzY3JvbGxiYXJDb2xvciIsIm1hcCIsImluZGV4IiwiaW1nIiwic3JjIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});