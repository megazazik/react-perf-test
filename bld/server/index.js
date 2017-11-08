module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entries/server/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/main/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less__ = __webpack_require__("./components/main/styles.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_less__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var PerformanceTesting = (function (_super) {
    __extends(PerformanceTesting, _super);
    function PerformanceTesting() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PerformanceTesting.prototype.render = function () {
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.container }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438...");
    };
    return PerformanceTesting;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (PerformanceTesting);


/***/ }),

/***/ "./components/main/styles.less":
/***/ (function(module, exports) {

module.exports = {
	"container": "components-main-styles__container"
};

/***/ }),

/***/ "./entries/server/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__server__ = __webpack_require__("./server/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_minimist__ = __webpack_require__("minimist");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_minimist___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_minimist__);


var params = __WEBPACK_IMPORTED_MODULE_1_minimist___default()(process.argv.slice(2));
Object(__WEBPACK_IMPORTED_MODULE_0__server__["a" /* default */])({ port: params.port });


/***/ }),

/***/ "./modules/lang/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLanguage; });
var language = 'rus';
function lang() { return language; }
var setLanguage = function (lang) { language = lang; };


/***/ }),

/***/ "./server/getMarkUp.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server__ = __webpack_require__("react-dom/server");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_main__ = __webpack_require__("./components/main/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_lang__ = __webpack_require__("./modules/lang/index.ts");




/* harmony default export */ __webpack_exports__["a"] = (function () {
    var currentLanguage = 'rus';
    Object(__WEBPACK_IMPORTED_MODULE_3_modules_lang__["a" /* setLanguage */])(currentLanguage);
    var html = Object(__WEBPACK_IMPORTED_MODULE_1_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_components_main__["a" /* default */], {}));
    return "\n<!doctype html>\n<html>\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>Typescript application template</title>\n\t</head>\n\t<body>\n\t\t<div id=\"content\">" + html + "</div>\n\t\t<script>\n\t\t\twindow.__language__ = \"" + currentLanguage + "\";\n\t\t</script>\n\t\t<script src=\"/static/manifest.js\"></script>\n\t\t<script src=\"/static/vendors.js\"></script>\n\t\t<script src=\"/static/bundle." + currentLanguage + ".js\"></script>\n\t\t<script src=\"/static/bundle.js\"></script>\n\t</body>\n</html>";
});;


/***/ }),

/***/ "./server/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = startServer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__("express");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getMarkUp__ = __webpack_require__("./server/getMarkUp.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path__ = __webpack_require__("path");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_path___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_path__);



function startServer(_a) {
    var _b = (_a === void 0 ? {} : _a).port, port = _b === void 0 ? 8080 : _b;
    var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();
    /** @todo разобраться с относительными путями */
    app.use('/static', __WEBPACK_IMPORTED_MODULE_0_express___default.a.static(__WEBPACK_IMPORTED_MODULE_2_path__["resolve"](__dirname, '../public/')));
    app.get('/', function (req, res) {
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        res.send(Object(__WEBPACK_IMPORTED_MODULE_1__getMarkUp__["a" /* default */])());
    });
    app.use(function (req, res) {
        res.status(404).send('Page not found!');
        console.log('Url not found: ' + req.url);
    });
    app.use(function (err, req, res, next) {
        console.log(err.stack);
        res.status(500).send('Something broke!');
    });
    app.listen(port, function () {
        console.log("The application started on port " + port + ".");
    });
}


/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "minimist":
/***/ (function(module, exports) {

module.exports = require("minimist");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map