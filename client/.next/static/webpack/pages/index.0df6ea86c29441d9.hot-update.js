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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var react_scroll_to_bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-scroll-to-bottom */ \"./node_modules/react-scroll-to-bottom/lib/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ChatBox = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() === \"\") return;\n        // Update local state with the user's message\n        const updatedMessages = [\n            ...messages,\n            {\n                text: newMessage,\n                sender: \"user\"\n            }\n        ];\n        setMessages(updatedMessages);\n        setNewMessage(\"\");\n        console.log(newMessage);\n        try {\n            // Send the user's message to the backend using Axios\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:5000/chat\", {\n                message: newMessage\n            }, {\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                }\n            });\n            // Assuming the server responds with a JSON object containing the bot's message\n            const responseData = response.data;\n            console.log(response);\n            console.log(responseData);\n            // Update local state with both the user's message and the bot's response\n            setMessages([\n                ...updatedMessages,\n                {\n                    text: responseData,\n                    sender: \"bot\"\n                }\n            ]);\n        } catch (error) {\n            console.error(\"Error:\", error.message);\n        // Handle error, e.g., display an error message in the chat box\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                fontFamily: \"Arial, sans-serif\",\n                maxWidth: \"400px\",\n                margin: \"0 0 0 auto\",\n                padding: \"20px\",\n                borderLeft: \"4px solid black\",\n                height: \"100vh\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"overflow-y-scroll\",\n                style: {\n                    padding: \"20px\",\n                    height: \"85vh\",\n                    // msOverflowStyle: \"none\", // Hide scrollbar for IE/Edge\n                    // scrollbarWidth: \"thin\", // Hide scrollbar for Firefox\n                    // WebkitOverflowScrolling: \"touch\",\n                    scrollbarColor: \"transparent transparent\"\n                },\n                children: [\n                    messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"\",\n                            children: message.sender === \"user\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-end\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 72,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 70,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"You\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 69,\n                                columnNumber: 19\n                            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"chat chat-start\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-image avatar\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"w-10 rounded-full\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                                lineNumber: 82,\n                                                columnNumber: 25\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 23\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-header\",\n                                        children: \"InfoBot\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 21\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"chat-bubble\",\n                                        children: message.text\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 21\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 79,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                            lineNumber: 67,\n                            columnNumber: 15\n                        }, undefined)),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute bottom-5\",\n                        style: {\n                            marginTop: \"10px\",\n                            display: \"flex\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"text\",\n                                value: newMessage,\n                                onChange: (e)=>setNewMessage(e.target.value),\n                                placeholder: \"Type your message...\",\n                                style: {\n                                    padding: \"8px\",\n                                    borderRadius: \"4px\",\n                                    border: \"1px solid #ddd\",\n                                    background: \"#2E4374\",\n                                    border: \"1px solid #333\",\n                                    color: \"#fff\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 94,\n                                columnNumber: 15\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: handleSendMessage,\n                                style: {\n                                    marginLeft: \"10px\",\n                                    padding: \"8px 12px\",\n                                    borderRadius: \"4px\",\n                                    backgroundColor: \"#3498db\",\n                                    color: \"#fff\",\n                                    border: \"none\",\n                                    cursor: \"pointer\"\n                                },\n                                children: \"Send\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                                lineNumber: 108,\n                                columnNumber: 15\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n            lineNumber: 45,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\Projects\\\\rishant3\\\\components\\\\chatbox.js\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ChatBox, \"DTIS5OvIgs5cgWPHCj6NEqfd+m8=\");\n_c = ChatBox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ChatBox);\nvar _c;\n$RefreshReg$(_c, \"ChatBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FDVGUsT0FBTztvQ0FDTDRCLFlBQVk7b0NBQ1p4QixTQUFTO29DQUNUa0IsY0FBYztvQ0FDZE8saUJBQWlCO29DQUNqQkosT0FBTztvQ0FDUEYsUUFBUTtvQ0FDUk8sUUFBUTtnQ0FDVjswQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVNuQjtHQTFITWxEO0tBQUFBO0FBNEhOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2hhdGJveC5qcz9lODUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgUmVhY3RTY3JvbGxUb0JvdHRvbSBmcm9tIFwicmVhY3Qtc2Nyb2xsLXRvLWJvdHRvbVwiO1xyXG5cclxuY29uc3QgQ2hhdEJveCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgPT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGUgd2l0aCB0aGUgdXNlcidzIG1lc3NhZ2VcclxuICAgIGNvbnN0IHVwZGF0ZWRNZXNzYWdlcyA9IFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6IFwidXNlclwiIH1dO1xyXG4gICAgc2V0TWVzc2FnZXModXBkYXRlZE1lc3NhZ2VzKTtcclxuICAgIHNldE5ld01lc3NhZ2UoXCJcIik7XHJcbiAgICBjb25zb2xlLmxvZyhuZXdNZXNzYWdlKTtcclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIFNlbmQgdGhlIHVzZXIncyBtZXNzYWdlIHRvIHRoZSBiYWNrZW5kIHVzaW5nIEF4aW9zXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcclxuICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9jaGF0XCIsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgbWVzc2FnZTogbmV3TWVzc2FnZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuXHJcbiAgICAgIC8vIEFzc3VtaW5nIHRoZSBzZXJ2ZXIgcmVzcG9uZHMgd2l0aCBhIEpTT04gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIGJvdCdzIG1lc3NhZ2VcclxuICAgICAgY29uc3QgcmVzcG9uc2VEYXRhID0gcmVzcG9uc2UuZGF0YTtcclxuICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZURhdGEpO1xyXG4gICAgICAvLyBVcGRhdGUgbG9jYWwgc3RhdGUgd2l0aCBib3RoIHRoZSB1c2VyJ3MgbWVzc2FnZSBhbmQgdGhlIGJvdCdzIHJlc3BvbnNlXHJcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi51cGRhdGVkTWVzc2FnZXMsIHsgdGV4dDogcmVzcG9uc2VEYXRhLCBzZW5kZXI6IFwiYm90XCIgfV0pO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgLy8gSGFuZGxlIGVycm9yLCBlLmcuLCBkaXNwbGF5IGFuIGVycm9yIG1lc3NhZ2UgaW4gdGhlIGNoYXQgYm94XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbCwgc2Fucy1zZXJpZlwiLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IFwiNDAwcHhcIixcclxuICAgICAgICAgIG1hcmdpbjogXCIwIDAgMCBhdXRvXCIsXHJcbiAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgIGJvcmRlckxlZnQ6IFwiNHB4IHNvbGlkIGJsYWNrXCIsXHJcbiAgICAgICAgICBoZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICB9fT5cclxuICAgICAgICBcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPSdvdmVyZmxvdy15LXNjcm9sbCdcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBoZWlnaHQ6IFwiODV2aFwiLFxyXG4gICAgICAgICAgICAgIC8vIG1zT3ZlcmZsb3dTdHlsZTogXCJub25lXCIsIC8vIEhpZGUgc2Nyb2xsYmFyIGZvciBJRS9FZGdlXHJcbiAgICAgICAgICAgICAgLy8gc2Nyb2xsYmFyV2lkdGg6IFwidGhpblwiLCAvLyBIaWRlIHNjcm9sbGJhciBmb3IgRmlyZWZveFxyXG4gICAgICAgICAgICAgIC8vIFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nOiBcInRvdWNoXCIsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYmFyQ29sb3I6IFwidHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPScnPlxyXG4gICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVyID09PSBcInVzZXJcIiA/IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQgY2hhdC1lbmQnPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGF0LWltYWdlIGF2YXRhcic+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy0xMCByb3VuZGVkLWZ1bGwnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0naHR0cHM6Ly9kYWlzeXVpLmNvbS9pbWFnZXMvc3RvY2svcGhvdG8tMTUzNDUyODc0MTc3NS01Mzk5NGE2OWRhZWIuanBnJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaGVhZGVyJz5Zb3U8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQgY2hhdC1zdGFydCc+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NoYXQtaW1hZ2UgYXZhdGFyJz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEwIHJvdW5kZWQtZnVsbCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSdodHRwczovL2RhaXN5dWkuY29tL2ltYWdlcy9zdG9jay9waG90by0xNTM0NTI4NzQxNzc1LTUzOTk0YTY5ZGFlYi5qcGcnIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1oZWFkZXInPkluZm9Cb3Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY2hhdC1idWJibGUnPnttZXNzYWdlLnRleHR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2Fic29sdXRlIGJvdHRvbS01J1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxMHB4XCIsIGRpc3BsYXk6IFwiZmxleFwiIH19PlxyXG4gICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdHlwZT0ndGV4dCdcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbWVzc2FnZS4uLidcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogXCI0cHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjZGRkXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwiIzJFNDM3NFwiLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkICMzMzNcIixcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiOHB4IDEycHhcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjRweFwiLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzM0OThkYlwiLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICAgICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIFNlbmRcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhdEJveDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJheGlvcyIsIlJlYWN0U2Nyb2xsVG9Cb3R0b20iLCJDaGF0Qm94IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwidXBkYXRlZE1lc3NhZ2VzIiwidGV4dCIsInNlbmRlciIsImNvbnNvbGUiLCJsb2ciLCJyZXNwb25zZSIsInBvc3QiLCJtZXNzYWdlIiwiaGVhZGVycyIsInJlc3BvbnNlRGF0YSIsImRhdGEiLCJlcnJvciIsImRpdiIsInN0eWxlIiwiZm9udEZhbWlseSIsIm1heFdpZHRoIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlckxlZnQiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJzY3JvbGxiYXJDb2xvciIsIm1hcCIsImluZGV4IiwiaW1nIiwic3JjIiwibWFyZ2luVG9wIiwiZGlzcGxheSIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJib3JkZXJSYWRpdXMiLCJib3JkZXIiLCJiYWNrZ3JvdW5kIiwiY29sb3IiLCJidXR0b24iLCJvbkNsaWNrIiwibWFyZ2luTGVmdCIsImJhY2tncm91bmRDb2xvciIsImN1cnNvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/chatbox.js\n"));

/***/ })

});