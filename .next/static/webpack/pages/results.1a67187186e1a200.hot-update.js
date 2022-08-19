"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/results",{

/***/ "./pages/results/index.js":
/*!********************************!*\
  !*** ./pages/results/index.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Category; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/next/dist/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _dist_global_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dist/global.js */ \"./dist/global.js\");\n/* harmony import */ var _dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dist/topmovies.js */ \"./dist/topmovies.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n\n\n\nvar stringToURL = function(movieId, media_type) {\n    ///results?search=\n    return \"\".concat(media_type, \"info?search=\").concat(movieId);\n};\nvar stringReplace = function(movieName) {\n    return \"\".concat(movieName).replaceAll(\"-\", \" \");\n};\nvar Grid = function(param) {\n    var movieName = param.movieName, _numberMovies = param.numberMovies, numberMovies = _numberMovies === void 0 ? \"5\" : _numberMovies, _media_type = param.media_type, media_type = _media_type === void 0 ? \"movie\" : _media_type;\n    _s();\n    //searchType\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null), data = ref[0], setData = ref[1];\n    if (numberMovies < 5) numberMovies = 5;\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(function() {\n        if (movieName) {\n            fetch(\"https://api.themoviedb.org/3/search/multi?api_key=c33f0232a6bc04e36368ea053300df40&language=en-US&query=\".concat(movieName)).then(function(response) {\n                return response.json();\n            }).then(function(json) {\n                setData(function() {\n                    return json;\n                });\n            });\n        }\n    }, [\n        movieName\n    ]);\n    if (!data || !movieName) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n        children: \"Fetching data\"\n    }, void 0, false, {\n        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n        lineNumber: 34,\n        columnNumber: 35\n    }, _this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"App\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"grid\",\n            children: [\n                data.results.filter(function(element) {\n                    return element.media_type == media_type;\n                }).slice(0, numberMovies).map(function(item, key) {\n                    console.log(media_type, data);\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        href: stringToURL(item.id, item.media_type),\n                        target: \"_blank\",\n                        rel: \"noopener noreferrer\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"card\",\n                            children: [\n                                media_type == \"movie\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                                    lineNumber: 55,\n                                    columnNumber: 21\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                                    children: item.name\n                                }, void 0, false, {\n                                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 21\n                                }, _this),\n                                media_type == \"person\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://image.tmdb.org/t/p/w154\".concat(item.profile_path),\n                                    className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"poster\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                                    lineNumber: 60,\n                                    columnNumber: 21\n                                }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"https://image.tmdb.org/t/p/w154\".concat(item.poster_path),\n                                    className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"poster\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                                    lineNumber: 65,\n                                    columnNumber: 21\n                                }, _this),\n                                media_type != \"person\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"rating\",\n                                    children: [\n                                        \"Rating:\",\n                                        item.vote_average\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 17\n                        }, _this)\n                    }, item.id, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 15\n                    }, _this);\n                }),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: _dist_global_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].__hash,\n                    children: _dist_global_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                }, void 0, false, void 0, _this),\n                (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                    id: _dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash,\n                    children: _dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                }, void 0, false, void 0, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n            lineNumber: 40,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, _this);\n};\n_s(Grid, \"guVkFVVSew6hH2g/XBdZM40Ur3I=\");\n_c = Grid;\nfunction Category(param) {\n    var props = param.props;\n    _s1();\n    //get Data from URL\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                    children: [\n                        \"Results \",\n                        router.query.search\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                    lineNumber: 95,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash) + \" \" + \"title\",\n                        children: [\n                            \"Search results : \",\n                            stringReplace(router.query.search)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                        children: \"Movies:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n                        movieName: router.query.search,\n                        media_type: \"movie\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                        children: \"TV Shows:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n                        movieName: router.query.search,\n                        media_type: \"tv\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 102,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                        children: \"People:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 103,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Grid, {\n                        movieName: router.query.search,\n                        media_type: \"person\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"jsx-\".concat(_dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash),\n                        children: \"← Home\"\n                    }, void 0, false, {\n                        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n                lineNumber: 107,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: _dist_global_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].__hash,\n                children: _dist_global_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: _dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"].__hash,\n                children: _dist_topmovies_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/runtime/Documents/GitHub/movie-app-next/pages/results/index.js\",\n        lineNumber: 93,\n        columnNumber: 5\n    }, this);\n};\n_s1(Category, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c1 = Category;\nvar _c, _c1;\n$RefreshReg$(_c, \"Grid\");\n$RefreshReg$(_c1, \"Category\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9yZXN1bHRzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQTZCO0FBQ0E7QUFDbUI7QUFDTTtBQUNWO0FBQ0o7QUFFeEMsSUFBTU8sV0FBVyxHQUFHLFNBQUNDLE9BQU8sRUFBRUMsVUFBVSxFQUFLO0lBQzNDLGtCQUFrQjtJQUNsQixPQUFPLEVBQUMsQ0FBMkJELE1BQU8sQ0FBaENDLFVBQVUsRUFBQyxjQUFZLENBQVUsUUFBUkQsT0FBTyxDQUFFLENBQUM7Q0FDOUM7QUFFRCxJQUFNRSxhQUFhLEdBQUcsU0FBQ0MsU0FBUyxFQUFLO0lBQ25DLE9BQU8sRUFBQyxDQUFZLE9BQVZBLFNBQVMsQ0FBRSxDQUFDQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0NBQzVDO0FBRUQsSUFBTUMsSUFBSSxHQUFHLGdCQUE2RDtRQUExREYsU0FBUyxTQUFUQSxTQUFTLHdCQUFFRyxZQUFZLEVBQVpBLFlBQVksOEJBQUcsR0FBRyxzQ0FBRUwsVUFBVSxFQUFWQSxVQUFVLDRCQUFHLE9BQU87O0lBQ2pFLFlBQVk7SUFDWixJQUF3QkosR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksQ0FBQyxFQUEvQlUsSUFBSSxHQUFhVixHQUFjLEdBQTNCLEVBQUVXLE9BQU8sR0FBSVgsR0FBYyxHQUFsQjtJQUVwQixJQUFJUyxZQUFZLEdBQUcsQ0FBQyxFQUFFQSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0lBRXZDVixnREFBUyxDQUFDLFdBQU07UUFDZCxJQUFJTyxTQUFTLEVBQUU7WUFDYk0sS0FBSyxDQUNILDBHQUF5RyxDQUFZLE9BQVZOLFNBQVMsQ0FBRSxDQUN2SCxDQUNFTyxJQUFJLENBQUMsU0FBQ0MsUUFBUTt1QkFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ25DRixJQUFJLENBQUMsU0FBQ0UsSUFBSSxFQUFLO2dCQUNkSixPQUFPLENBQUM7MkJBQU1JLElBQUk7aUJBQUEsQ0FBQyxDQUFDO2FBQ3JCLENBQUMsQ0FBQztTQUNOO0tBQ0YsRUFBRTtRQUFDVCxTQUFTO0tBQUMsQ0FBQyxDQUFDO0lBQ2hCLElBQUksQ0FBQ0ksSUFBSSxJQUFJLENBQUNKLFNBQVMsRUFBRSxxQkFBTyw4REFBQ1UsSUFBRTtrQkFBQyxlQUFhOzs7OzthQUFLLENBQUM7SUFJdkQscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLEtBQUs7a0JBQ2xCLDRFQUFDRCxLQUFHO3FDQXlDQ25CLGlFQUFlLENBaEYxQixTQXVDcUIsTUFBTTs7Z0JBQ2xCWSxJQUFJLENBQUNTLE9BQU8sQ0FDVkMsTUFBTSxDQUFDLFNBQUNDLE9BQU87MkJBQUtBLE9BQU8sQ0FBQ2pCLFVBQVUsSUFBSUEsVUFBVTtpQkFBQSxDQUFDLENBQ3JEa0IsS0FBSyxDQUFDLENBQUMsRUFBRWIsWUFBWSxDQUFDLENBQ3RCYyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxHQUFHLEVBQUs7b0JBQ2xCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ3ZCLFVBQVUsRUFBQ00sSUFBSSxDQUFDLENBQUM7b0JBQzdCLHFCQUNFLDhEQUFDZCxrREFBSTt3QkFFSGdDLElBQUksRUFBRTFCLFdBQVcsQ0FBQ3NCLElBQUksQ0FBQ0ssRUFBRSxFQUFFTCxJQUFJLENBQUNwQixVQUFVLENBQUM7d0JBQzNDMEIsTUFBTSxFQUFDLFFBQVE7d0JBQ2ZDLEdBQUcsRUFBQyxxQkFBcUI7a0NBRXpCLDRFQUFDQyxHQUFDO3FEQTRCUGxDLGlFQUFlLENBaEYxQixTQW9ENkIsTUFBTTs7Z0NBQ2hCTSxVQUFVLElBQUksT0FBTyxpQkFDcEIsOERBQUM2QixJQUFFOzZEQTBCWm5DLGlFQUFlLENBaEYxQjs4Q0FzRHlCMEIsSUFBSSxDQUFDVSxLQUFLOzs7Ozt5Q0FBTSxpQkFFckIsOERBQUNELElBQUU7NkRBd0JabkMsaUVBQWUsQ0FoRjFCOzhDQXdEeUIwQixJQUFJLENBQUNXLElBQUk7Ozs7O3lDQUFNO2dDQUVyQi9CLFVBQVUsSUFBSSxRQUFRLGlCQUNyQiw4REFBQ2dDLEtBQUc7b0NBQ0ZDLEdBQUcsRUFBRSxpQ0FBZ0MsQ0FBb0IsT0FBbEJiLElBQUksQ0FBQ2MsWUFBWSxDQUFFOzZEQW9CckV4QyxpRUFBZSxDQWhGMUIsU0E2RGdDLFFBQVE7Ozs7O3lDQUNiLGlCQUVQLDhEQUFDc0MsS0FBRztvQ0FDRkMsR0FBRyxFQUFFLGlDQUFnQyxDQUFtQixPQUFqQmIsSUFBSSxDQUFDZSxXQUFXLENBQUU7NkRBZXBFekMsaUVBQWUsQ0FoRjFCLFNBa0VnQyxRQUFROzs7Ozt5Q0FDYjtnQ0FFUk0sVUFBVSxJQUFJLFFBQVEsa0JBQ3JCLDhEQUFDb0MsR0FBQzs2REFVWDFDLGlFQUFlLENBaEYxQixTQXNFaUMsUUFBUTs7d0NBQUMsU0FBTzt3Q0FBQzBCLElBQUksQ0FBQ2lCLFlBQVk7Ozs7Ozt5Q0FBSzs7Ozs7O2lDQUVwRDt1QkF6QkNqQixJQUFJLENBQUNLLEVBQUU7Ozs7NkJBMEJQLENBQ1A7aUJBQ0gsQ0FBQzs7d0JBRURoQyw4REFBWTs4QkFBWkEsdURBQVk7Ozt3QkFHWkMsaUVBQWU7OEJBQWZBLDBEQUFlOzs7Ozs7O2lCQUVkOzs7OzthQUNGLENBQ047Q0FDSDtHQXJFS1UsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBdUVLLFNBQVNrQyxRQUFRLENBQUMsS0FBUyxFQUFFO1FBQVgsS0FBTyxHQUFQLEtBQVMsQ0FBUEMsS0FBSzs7SUFDdEMsbUJBQW1CO0lBQ25CLElBQU1DLE1BQU0sR0FBRzNDLHNEQUFTLEVBQUU7SUFFMUIscUJBQ0UsOERBQUNnQixLQUFHO2lDQXdCQ25CLGlFQUFlLENBcEh4QixTQTRGbUIsV0FBVzs7MEJBQ3hCLDhEQUFDSCxrREFBSTswQkFDSCw0RUFBQ3VDLE9BQUs7NkNBc0JMcEMsaUVBQWUsQ0FwSHhCOzt3QkE4RmUsVUFBUTt3QkFBQzhDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNOzs7Ozs7d0JBQVM7Ozs7O29CQUN2QzswQkFDUCw4REFBQ0MsTUFBSTt5Q0FvQkZqRCxpRUFBZSxDQXBIeEI7O2tDQWlHUSw4REFBQ2tELElBQUU7aURBbUJGbEQsaUVBQWUsQ0FwSHhCLFNBaUdzQixPQUFPOzs0QkFBQyxtQkFBaUI7NEJBQUNPLGFBQWEsQ0FBQ3VDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLENBQUM7Ozs7Ozs0QkFBTTtrQ0FDaEYsOERBQUM5QixJQUFFO2lEQWtCRmxCLGlFQUFlLENBcEh4QjtrQ0FrR1ksU0FBTzs7Ozs7NEJBQUs7a0NBQ2hCLDhEQUFDVSxJQUFJO3dCQUFDRixTQUFTLEVBQUVzQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsTUFBTTt3QkFBRTFDLFVBQVUsRUFBQyxPQUFPOzs7Ozs0QkFBUTtrQ0FDaEUsOERBQUNZLElBQUU7aURBZ0JGbEIsaUVBQWUsQ0FwSHhCO2tDQW9HWSxXQUFTOzs7Ozs0QkFBSztrQ0FDbEIsOERBQUNVLElBQUk7d0JBQUNGLFNBQVMsRUFBRXNDLE1BQU0sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNO3dCQUFFMUMsVUFBVSxFQUFDLElBQUk7Ozs7OzRCQUFRO2tDQUM3RCw4REFBQ1ksSUFBRTtpREFjRmxCLGlFQUFlLENBcEh4QjtrQ0FzR1ksU0FBTzs7Ozs7NEJBQUs7a0NBQ2hCLDhEQUFDVSxJQUFJO3dCQUFDRixTQUFTLEVBQUVzQyxNQUFNLENBQUNDLEtBQUssQ0FBQ0MsTUFBTTt3QkFBRTFDLFVBQVUsRUFBQyxRQUFROzs7Ozs0QkFBUTs7Ozs7O29CQUM1RDswQkFFUCw4REFBQzZDLFFBQU07eUNBVUpuRCxpRUFBZSxDQXBIeEI7MEJBMkdRLDRFQUFDRixrREFBSTtvQkFBQ2dDLElBQUksRUFBQyxHQUFHOzhCQUNaLDRFQUFDc0IsUUFBTTtpREFRUnBELGlFQUFlLENBcEh4QjtrQ0E0R2tCLFFBQU07Ozs7OzRCQUFTOzs7Ozt3QkFDbEI7Ozs7O29CQUNBOztvQkFHTkQsOERBQVk7MEJBQVpBLHVEQUFZOzs7b0JBR1pDLGlFQUFlOzBCQUFmQSwwREFBZTs7Ozs7OztZQUVkLENBQ047Q0FDSDtJQWpDdUI0QyxRQUFROztRQUVmekMsa0RBQVM7OztBQUZGeUMsTUFBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9yZXN1bHRzL2luZGV4LmpzPzdjNjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vLi4vZGlzdC9nbG9iYWwuanNcIjtcbmltcG9ydCB0b3Btb3ZpZXNTdHlsZXMgZnJvbSBcIi4uLy4uL2Rpc3QvdG9wbW92aWVzLmpzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3Qgc3RyaW5nVG9VUkwgPSAobW92aWVJZCwgbWVkaWFfdHlwZSkgPT4ge1xuICAvLy9yZXN1bHRzP3NlYXJjaD1cbiAgcmV0dXJuIGAke21lZGlhX3R5cGV9aW5mbz9zZWFyY2g9JHttb3ZpZUlkfWA7XG59O1xuXG5jb25zdCBzdHJpbmdSZXBsYWNlID0gKG1vdmllTmFtZSkgPT4ge1xuICByZXR1cm4gYCR7bW92aWVOYW1lfWAucmVwbGFjZUFsbChcIi1cIiwgXCIgXCIpO1xufTtcblxuY29uc3QgR3JpZCA9ICh7IG1vdmllTmFtZSwgbnVtYmVyTW92aWVzID0gXCI1XCIsIG1lZGlhX3R5cGUgPSBcIm1vdmllXCIgfSkgPT4ge1xuICAvL3NlYXJjaFR5cGVcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgaWYgKG51bWJlck1vdmllcyA8IDUpIG51bWJlck1vdmllcyA9IDU7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAobW92aWVOYW1lKSB7XG4gICAgICBmZXRjaChcbiAgICAgICAgYGh0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMvc2VhcmNoL211bHRpP2FwaV9rZXk9YzMzZjAyMzJhNmJjMDRlMzYzNjhlYTA1MzMwMGRmNDAmbGFuZ3VhZ2U9ZW4tVVMmcXVlcnk9JHttb3ZpZU5hbWV9YFxuICAgICAgKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgICBzZXREYXRhKCgpID0+IGpzb24pO1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sIFttb3ZpZU5hbWVdKTtcbiAgaWYgKCFkYXRhIHx8ICFtb3ZpZU5hbWUpIHJldHVybiA8aDI+RmV0Y2hpbmcgZGF0YTwvaDI+O1xuXG4gIFxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJBcHBcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiPlxuICAgICAgICB7ZGF0YS5yZXN1bHRzXG4gICAgICAgICAgLmZpbHRlcigoZWxlbWVudCkgPT4gZWxlbWVudC5tZWRpYV90eXBlID09IG1lZGlhX3R5cGUpXG4gICAgICAgICAgLnNsaWNlKDAsIG51bWJlck1vdmllcylcbiAgICAgICAgICAubWFwKChpdGVtLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lZGlhX3R5cGUsZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgICAgICBocmVmPXtzdHJpbmdUb1VSTChpdGVtLmlkLCBpdGVtLm1lZGlhX3R5cGUpfVxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICB7bWVkaWFfdHlwZSA9PSBcIm1vdmllXCIgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxoMz57aXRlbS50aXRsZX08L2gzPlxuICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgPGgzPntpdGVtLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7bWVkaWFfdHlwZSA9PSBcInBlcnNvblwiID8gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzE1NCR7aXRlbS5wcm9maWxlX3BhdGh9YH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwb3N0ZXJcIlxuICAgICAgICAgICAgICAgICAgICA+PC9pbWc+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cHM6Ly9pbWFnZS50bWRiLm9yZy90L3AvdzE1NCR7aXRlbS5wb3N0ZXJfcGF0aH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInBvc3RlclwiXG4gICAgICAgICAgICAgICAgICAgID48L2ltZz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7bWVkaWFfdHlwZSAhPSBcInBlcnNvblwiICYmIChcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmF0aW5nXCI+UmF0aW5nOntpdGVtLnZvdGVfYXZlcmFnZX08L3A+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICAgICAge2dsb2JhbFN0eWxlc31cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPHN0eWxlIGpzeCB0b3Btb3ZpZXM+XG4gICAgICAgICAge3RvcG1vdmllc1N0eWxlc31cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkoeyBwcm9wcyB9KSB7XG4gIC8vZ2V0IERhdGEgZnJvbSBVUkxcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SZXN1bHRzIHtyb3V0ZXIucXVlcnkuc2VhcmNofTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+U2VhcmNoIHJlc3VsdHMgOiB7c3RyaW5nUmVwbGFjZShyb3V0ZXIucXVlcnkuc2VhcmNoKX08L2gxPlxuICAgICAgICA8aDI+TW92aWVzOjwvaDI+XG4gICAgICAgIDxHcmlkIG1vdmllTmFtZT17cm91dGVyLnF1ZXJ5LnNlYXJjaH0gbWVkaWFfdHlwZT1cIm1vdmllXCI+PC9HcmlkPlxuICAgICAgICA8aDI+VFYgU2hvd3M6PC9oMj5cbiAgICAgICAgPEdyaWQgbW92aWVOYW1lPXtyb3V0ZXIucXVlcnkuc2VhcmNofSBtZWRpYV90eXBlPVwidHZcIj48L0dyaWQ+XG4gICAgICAgIDxoMj5QZW9wbGU6PC9oMj5cbiAgICAgICAgPEdyaWQgbW92aWVOYW1lPXtyb3V0ZXIucXVlcnkuc2VhcmNofSBtZWRpYV90eXBlPVwicGVyc29uXCI+PC9HcmlkPlxuICAgICAgPC9tYWluPlxuXG4gICAgICA8Zm9vdGVyPlxuICAgICAgICA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxidXR0b24+4oaQIEhvbWU8L2J1dHRvbj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAgICB7Z2xvYmFsU3R5bGVzfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxzdHlsZSBqc3ggdG9wbW92aWVzPlxuICAgICAgICB7dG9wbW92aWVzU3R5bGVzfVxuICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsImdsb2JhbFN0eWxlcyIsInRvcG1vdmllc1N0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwic3RyaW5nVG9VUkwiLCJtb3ZpZUlkIiwibWVkaWFfdHlwZSIsInN0cmluZ1JlcGxhY2UiLCJtb3ZpZU5hbWUiLCJyZXBsYWNlQWxsIiwiR3JpZCIsIm51bWJlck1vdmllcyIsImRhdGEiLCJzZXREYXRhIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiaDIiLCJkaXYiLCJjbGFzc05hbWUiLCJyZXN1bHRzIiwiZmlsdGVyIiwiZWxlbWVudCIsInNsaWNlIiwibWFwIiwiaXRlbSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJocmVmIiwiaWQiLCJ0YXJnZXQiLCJyZWwiLCJhIiwiaDMiLCJ0aXRsZSIsIm5hbWUiLCJpbWciLCJzcmMiLCJwcm9maWxlX3BhdGgiLCJwb3N0ZXJfcGF0aCIsInAiLCJ2b3RlX2F2ZXJhZ2UiLCJDYXRlZ29yeSIsInByb3BzIiwicm91dGVyIiwicXVlcnkiLCJzZWFyY2giLCJtYWluIiwiaDEiLCJmb290ZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/results/index.js\n"));

/***/ })

});