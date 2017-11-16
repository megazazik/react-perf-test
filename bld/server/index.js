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

/***/ "./components/list2/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__ = __webpack_require__("fbjs/lib/shallowEqual");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__);
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};


var List = (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.defaultProps = {
            maxLength: 1
        };
        return _this;
    }
    List.prototype.shouldComponentUpdate = function (nextProps) {
        return !this.arraysAreEqual(nextProps.values, this.props.values);
    };
    List.prototype.arraysAreEqual = function (arr1, arr2) {
        if (arr1.length != arr2.length) {
            return false;
        }
        for (var i = 0; i < arr1.length; i++) {
            if (!__WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual___default()(arr1[i], arr2[i])) {
                return false;
            }
        }
        return true;
    };
    List.prototype.render = function () {
        var _this = this;
        if (this.props.values.length > this.props.maxLength) {
            var innerArrayLength = this.props.maxLength;
            while (this.props.values.length > innerArrayLength * this.props.maxLength) {
                innerArrayLength *= this.props.maxLength;
            }
            var childComponents = [];
            var _a = this.props, children = _a.children, propsNoChildren = __rest(_a, ["children"]);
            for (var i = 0; i < this.props.values.length; i += innerArrayLength) {
                childComponents.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](List, __assign({ ref: function () { }, key: "optChild" + i }, propsNoChildren, { values: this.props.values.slice(i, i + innerArrayLength) })));
            }
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, childComponents));
            // const childProps: any[][] = [];
            // const itemCount = Math.floor(this.props.values.length / this.props.maxLength);
            // for (let i = 0; i < this.props.values.length; i += itemCount) {
            // 	childProps.push(this.props.values.slice(i, i + itemCount));
            // }
            // return (
            // 	<div>
            // 		{childProps.map( (childProp, index) => React.createElement(List, {...propsNoChildren, values: childProp, key: `optChild${index}`}))}
            // 	</div>
            // );
        }
        else {
            return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", null, this.props.values.map(function (props, index) { return _this.props.getComponent(__assign({}, props, { key: "optChild" + index })); })));
        }
    };
    return List;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (List);


/***/ }),

/***/ "./components/main/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less__ = __webpack_require__("./components/main/styles.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__runner__ = __webpack_require__("./components/runner/index.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__markup_small__ = __webpack_require__("./components/markup/small.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stubs_pureStatefull__ = __webpack_require__("./components/stubs/pureStatefull.tsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stubs_statefull__ = __webpack_require__("./components/stubs/statefull.tsx");
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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};






var ComponentType;
(function (ComponentType) {
    ComponentType["PureStatefull"] = "pureStatefull";
    ComponentType["Statefull"] = "statefull";
    ComponentType["Stateless"] = "stateless";
    ComponentType["Native"] = "native";
})(ComponentType || (ComponentType = {}));
var PerformanceTesting = (function (_super) {
    __extends(PerformanceTesting, _super);
    function PerformanceTesting() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            count: 1000,
            optimized: false,
            type: ComponentType.PureStatefull,
            maxLength: 10,
            useSplitting: false
        };
        _this._components = (_a = {},
            _a[ComponentType.PureStatefull] = function (props) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__stubs_pureStatefull__["a" /* default */], __assign({ ref: function () { }, key: props.value }, props)); },
            _a[ComponentType.Statefull] = function (props) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_5__stubs_statefull__["a" /* default */], __assign({ key: props.value }, props)); },
            _a[ComponentType.Stateless] = function (props) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__markup_small__["a" /* default */], __assign({ key: props.value }, props)); },
            _a[ComponentType.Native] = __WEBPACK_IMPORTED_MODULE_3__markup_small__["a" /* default */],
            _a);
        _this._optimizedChanged = function (ev) {
            _this.setState({ optimized: ev.currentTarget.checked });
        };
        _this._countChanged = function (ev) {
            _this.setState({ count: +ev.currentTarget.value });
        };
        _this._typeChanged = function (ev) {
            _this.setState({ type: ev.currentTarget.value });
        };
        _this._maxLengthChanged = function (ev) {
            _this.setState({ maxLength: +ev.currentTarget.value });
        };
        _this._useSplittingChanged = function (ev) {
            _this.setState({ useSplitting: ev.currentTarget.checked });
        };
        return _this;
        var _a;
    }
    PerformanceTesting.prototype.render = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.container },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("table", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.params },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("thead", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "\u041A\u043E\u043C\u043F\u043E\u043D\u0435\u043D\u0442"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E"),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("th", null, "\u0420\u0430\u0437\u0431\u0438\u0435\u043D\u0438\u0435 \u0441\u043F\u0438\u0441\u043A\u0430"))),
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tbody", null,
                    __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("tr", null,
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null, Object.keys(ComponentType).map(function (type) { return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: type },
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", null,
                                type,
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "radio", value: ComponentType[type], checked: _this.state.type === ComponentType[type], onChange: _this._typeChanged })))); })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", null,
                                "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0430",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", checked: this.state.optimized, onChange: this._optimizedChanged }))),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", value: this.state.count, onChange: this._countChanged })),
                        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("td", null,
                            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("label", null,
                                "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043E",
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "checkbox", checked: this.state.useSplitting, onChange: this._useSplittingChanged })),
                            this.state.useSplitting && [
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("br", null),
                                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("input", { type: "text", value: this.state.maxLength, onChange: this._maxLengthChanged })
                            ])))),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_2__runner__["a" /* default */], { count: this.state.count, optimized: this.state.optimized, getElement: this._components[this.state.type], maxLength: this.state.maxLength, useSplitting: this.state.useSplitting })));
    };
    return PerformanceTesting;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (PerformanceTesting);


/***/ }),

/***/ "./components/main/styles.less":
/***/ (function(module, exports) {

module.exports = {
	"container": "components-main-styles__container",
	"params": "components-main-styles__params"
};

/***/ }),

/***/ "./components/markup/small.less":
/***/ (function(module, exports) {

module.exports = {
	"element": "components-markup-small__element",
	"selected": "components-markup-small__selected"
};

/***/ }),

/***/ "./components/markup/small.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSmallMarkup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__small_less__ = __webpack_require__("./components/markup/small.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__small_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__small_less__);


function getSmallMarkup(props) {
    return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { key: props.value, onMouseEnter: props.onSelect, onMouseLeave: props.onDeselect, className: __WEBPACK_IMPORTED_MODULE_1__small_less___default.a.element + (props.selected ? ' ' + __WEBPACK_IMPORTED_MODULE_1__small_less___default.a.selected : '') },
        __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("span", null, props.value)));
}
;


/***/ }),

/***/ "./components/runner/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less__ = __webpack_require__("./components/runner/styles.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_perf__ = __webpack_require__("react-addons-perf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_perf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_addons_perf__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list2__ = __webpack_require__("./components/list2/index.tsx");
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




var TestsRunner = (function (_super) {
    __extends(TestsRunner, _super);
    function TestsRunner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = _this._createState(_this.props.count);
        _this._cachedOnChange = function () { };
        _this._onSelectCallbacks = [];
        _this._onDeselectCallbacks = [];
        _this._getProps = function (value) {
            return {
                value: value,
                selected: _this.state.selectedValues[value],
                onSelect: _this.props.optimized ? _this._getOnSelect(value) : _this._createOnSelect(value),
                onDeselect: _this.props.optimized ? _this._getOnDeselect(value) : _this._createOnDeselect(value)
            };
        };
        _this._start = function () {
            __WEBPACK_IMPORTED_MODULE_2_react_addons_perf___default.a.start();
            _this.setState({ processing: true });
        };
        return _this;
    }
    TestsRunner.prototype._createState = function (count) {
        return {
            processing: false,
            values: Array.apply(null, Array(count)).map(function (_, i) { return i; }),
            selectedValues: Array.apply(null, Array(count)).map(function (_) { return false; })
        };
    };
    TestsRunner.prototype._createOnSelect = function (value) {
        var _this = this;
        return function () { return _this.setState(function (prevState) {
            var newValues = prevState.selectedValues.slice();
            newValues[value] = true;
            return { selectedValues: newValues };
        }); };
    };
    TestsRunner.prototype._getOnSelect = function (value) {
        if (this._onSelectCallbacks[value] === undefined) {
            this._onSelectCallbacks[value] = this._createOnSelect(value);
        }
        return this._onSelectCallbacks[value];
    };
    TestsRunner.prototype._createOnDeselect = function (value) {
        var _this = this;
        return function () { return _this.setState(function (prevState) {
            var newValues = prevState.selectedValues.slice();
            newValues[value] = false;
            return { selectedValues: newValues };
        }); };
    };
    TestsRunner.prototype._getOnDeselect = function (value) {
        if (this._onDeselectCallbacks[value] === undefined) {
            this._onDeselectCallbacks[value] = this._createOnDeselect(value);
        }
        return this._onDeselectCallbacks[value];
    };
    TestsRunner.prototype.componentWillReceiveProps = function (nextProps) {
        if (this.props.count !== nextProps.count) {
            this.setState(this._createState(nextProps.count));
        }
    };
    TestsRunner.prototype.componentWillUpdate = function () {
        performance.mark('rendering-start');
    };
    TestsRunner.prototype.componentDidUpdate = function () {
        if (this.state.processing) {
            __WEBPACK_IMPORTED_MODULE_2_react_addons_perf___default.a.stop();
            __WEBPACK_IMPORTED_MODULE_2_react_addons_perf___default.a.printInclusive();
            __WEBPACK_IMPORTED_MODULE_2_react_addons_perf___default.a.printWasted();
            this.setState({ processing: false });
        }
        performance.mark('rendering-stop');
        performance.measure('rendering', 'rendering-start', 'rendering-stop');
        var measure = performance.getEntriesByName('rendering')[0];
        console.log("Rendering time: " + measure.duration + " ms");
        performance.clearMarks();
        performance.clearMeasures();
        performance.clearResourceTimings();
    };
    TestsRunner.prototype.render = function () {
        var _this = this;
        return (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.container },
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.buttons },
                __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("button", { onClick: this._start }, "\u0417\u0430\u043F\u0443\u0441\u043A")),
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.elements }, this.props.useSplitting ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__list2__["a" /* default */], { ref: function () { }, values: this.state.values.map(this._getProps), getComponent: this.props.getElement, maxLength: this.props.maxLength })) : (this.state.values.map(function (i) { return _this.props.getElement(_this._getProps(i)); })))));
    };
    return TestsRunner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (TestsRunner);


/***/ }),

/***/ "./components/runner/styles.less":
/***/ (function(module, exports) {

module.exports = {
	"container": "components-runner-styles__container",
	"buttons": "components-runner-styles__buttons",
	"elements": "components-runner-styles__elements"
};

/***/ }),

/***/ "./components/stubs/pureStatefull.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markup_small__ = __webpack_require__("./components/markup/small.tsx");
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


var PureStateFull = (function (_super) {
    __extends(PureStateFull, _super);
    function PureStateFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureStateFull.prototype.render = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1__markup_small__["a" /* default */])(this.props);
    };
    return PureStateFull;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]));
/* harmony default export */ __webpack_exports__["a"] = (PureStateFull);


/***/ }),

/***/ "./components/stubs/statefull.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__markup_small__ = __webpack_require__("./components/markup/small.tsx");
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


var StateFull = (function (_super) {
    __extends(StateFull, _super);
    function StateFull() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StateFull.prototype.render = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_1__markup_small__["a" /* default */])(this.props);
    };
    return StateFull;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (StateFull);


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

/***/ "fbjs/lib/shallowEqual":
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/shallowEqual");

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

/***/ "react-addons-perf":
/***/ (function(module, exports) {

module.exports = require("react-addons-perf");

/***/ }),

/***/ "react-dom/server":
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map