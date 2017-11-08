webpackJsonp([1],{

/***/ "../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/main/styles.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".components-main-styles__container {\n  padding: 5px;\n  margin: 10px;\n  border: 1px solid #777777;\n  border-radius: 4px;\n}\n", ""]);

// exports
exports.locals = {
	"container": "components-main-styles__container"
};

/***/ }),

/***/ "./components/main/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
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
        return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.container }, "\u0422\u0435\u0441\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438... \u0420\u0430\u0431\u043E\u0442\u0430\u0435\u0442!!!");
    };
    return PerformanceTesting;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (PerformanceTesting);


/***/ }),

/***/ "./components/main/styles.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/main/styles.less");
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__("../node_modules/style-loader/lib/addStyles.js")(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/less-loader/dist/cjs.js!./styles.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/less-loader/dist/cjs.js!./styles.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./entries/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__("../node_modules/react-dom/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_components_main__ = __webpack_require__("./components/main/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_modules_lang__ = __webpack_require__("./modules/lang/index.ts");




Object(__WEBPACK_IMPORTED_MODULE_3_modules_lang__["a" /* setLanguage */])(window['__language__']);
__WEBPACK_IMPORTED_MODULE_0_react_dom__["render"](__WEBPACK_IMPORTED_MODULE_1_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2_components_main__["a" /* default */], {}), document.getElementById('content'));


/***/ }),

/***/ "./modules/lang/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return setLanguage; });
var language = 'rus';
function lang() { return language; }
var setLanguage = function (lang) { language = lang; };


/***/ })

},["./entries/index.ts"]);
//# sourceMappingURL=bundle.js.map