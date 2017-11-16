webpackJsonp([1],{

/***/ "../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/main/styles.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".components-main-styles__container {\n  padding: 5px;\n  margin: 10px;\n  border: 1px solid #777777;\n  border-radius: 4px;\n  font-family: Helvetica, Arial, sans-serif;\n}\n.components-main-styles__params {\n  border: 0;\n  min-width: 70%;\n  margin-bottom: 20px;\n}\n.components-main-styles__params th {\n  text-align: left;\n}\n", ""]);

// exports
exports.locals = {
	"container": "components-main-styles__container",
	"params": "components-main-styles__params"
};

/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/markup/small.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".components-markup-small__element {\n  border: 1px solid #333333;\n  border-radius: 2px;\n  padding: 3px;\n}\n.components-markup-small__selected {\n  background-color: #f7c7c7;\n}\n", ""]);

// exports
exports.locals = {
	"element": "components-markup-small__element",
	"selected": "components-markup-small__selected"
};

/***/ }),

/***/ "../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/runner/styles.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../node_modules/css-loader/lib/css-base.js")(undefined);
// imports


// module
exports.push([module.i, ".components-runner-styles__container {\n  border: 1px solid lightgrey;\n  border-radius: 3px;\n}\n.components-runner-styles__buttons {\n  padding: 5px;\n  border-bottom: 1px solid lightgray;\n}\n.components-runner-styles__elements {\n  padding: 5px;\n}\n", ""]);

// exports
exports.locals = {
	"container": "components-runner-styles__container",
	"buttons": "components-runner-styles__buttons",
	"elements": "components-runner-styles__elements"
};

/***/ }),

/***/ "./components/list2/index.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_fbjs_lib_shallowEqual__ = __webpack_require__("../node_modules/fbjs/lib/shallowEqual.js");
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
                childComponents.push(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](List, __assign({ key: "optChild" + i }, propsNoChildren, { values: this.props.values.slice(i, i + innerArrayLength) })));
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
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
            maxLength: 1000,
            useSplitting: false
        };
        _this._components = (_a = {},
            _a[ComponentType.PureStatefull] = function (props) { return __WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_4__stubs_pureStatefull__["a" /* default */], __assign({ key: props.value }, props)); },
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

/***/ "./components/markup/small.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/markup/small.less");
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
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/less-loader/dist/cjs.js!./small.less", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--3-1!../../../node_modules/less-loader/dist/cjs.js!./small.less");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./components/markup/small.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getSmallMarkup;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less__ = __webpack_require__("./components/runner/styles.less");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_addons_perf__ = __webpack_require__("../node_modules/react-addons-perf/index.js");
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
            __WEBPACK_IMPORTED_MODULE_0_react__["createElement"]("div", { className: __WEBPACK_IMPORTED_MODULE_1__styles_less___default.a.elements }, this.props.useSplitting ? (__WEBPACK_IMPORTED_MODULE_0_react__["createElement"](__WEBPACK_IMPORTED_MODULE_3__list2__["a" /* default */], { values: this.state.values.map(this._getProps), getComponent: this.props.getElement, maxLength: this.props.maxLength })) : (this.state.values.map(function (i) { return _this.props.getElement(_this._getProps(i)); })))));
    };
    return TestsRunner;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]));
/* harmony default export */ __webpack_exports__["a"] = (TestsRunner);


/***/ }),

/***/ "./components/runner/styles.less":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../node_modules/css-loader/index.js?{\"modules\":true,\"localIdentName\":\"[path][name]__[local]\"}!../node_modules/less-loader/dist/cjs.js!./components/runner/styles.less");
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

/***/ "./components/stubs/pureStatefull.tsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("../node_modules/react/react.js");
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