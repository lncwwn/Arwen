/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _arwen = __webpack_require__(1);
	
	var _arwen2 = _interopRequireDefault(_arwen);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var arwen = new _arwen2.default();
	arwen.fragment(function (fragment) {
	    console.log(fragment);
	    fragment.name = 'victor';
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(module) {'use strict';
	
	function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }
	
	(function webpackUniversalModuleDefinition(root, factory) {
		if (( false ? 'undefined' : _typeof(exports)) === 'object' && ( false ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Arwen"] = factory();else root["Arwen"] = factory();
	})(undefined, function () {
		return (/******/(function (modules) {
				// webpackBootstrap
				/******/ // The module cache
				/******/var installedModules = {};
				/******/
				/******/ // The require function
				/******/function __webpack_require__(moduleId) {
					/******/
					/******/ // Check if module is in cache
					/******/if (installedModules[moduleId])
						/******/return installedModules[moduleId].exports;
					/******/
					/******/ // Create a new module (and put it into the cache)
					/******/var module = installedModules[moduleId] = {
						/******/exports: {},
						/******/id: moduleId,
						/******/loaded: false
						/******/ };
					/******/
					/******/ // Execute the module function
					/******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
					/******/
					/******/ // Flag the module as loaded
					/******/module.loaded = true;
					/******/
					/******/ // Return the exports of the module
					/******/return module.exports;
					/******/
				}
				/******/
				/******/
				/******/ // expose the modules object (__webpack_modules__)
				/******/__webpack_require__.m = modules;
				/******/
				/******/ // expose the module cache
				/******/__webpack_require__.c = installedModules;
				/******/
				/******/ // __webpack_public_path__
				/******/__webpack_require__.p = "";
				/******/
				/******/ // Load entry module and return exports
				/******/return __webpack_require__(0);
				/******/
			})(
			/************************************************************************/
			/******/[
			/* 0 */
			/***/function (module, exports, __webpack_require__) {
	
				/**
	    * Arwen module
	    *
	    * @author victor li
	    * @date 2015/12/01
	    */
	
				'use strict';
	
				var _createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				})();
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				var _fragment = __webpack_require__(1);
	
				var _fragment2 = _interopRequireDefault(_fragment);
	
				function _interopRequireDefault(obj) {
					return obj && obj.__esModule ? obj : { default: obj };
				}
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				var Arwen = (function () {
					function Arwen() {
						_classCallCheck(this, Arwen);
	
						this.fragment = function (fragmentFun) {
							var fragment = new _fragment2.default();
							_fragment2.default.activeFragment = fragment;
							fragmentFun && typeof fragmentFun === 'function' && fragmentFun(fragment);
							fragment.init();
						};
					}
	
					_createClass(Arwen, [{
						key: 'toString',
						value: function toString() {
							return 'Arwen';
						}
					}]);
	
					return Arwen;
				})();
	
				;
	
				exports.default = Arwen;
	
				/***/
			},
			/* 1 */
			/***/function (module, exports) {
	
				/**
	    * Fragment module
	    *
	    * @ author victor li
	    * @date 2015/12/01
	    */
	
				'use strict';
	
				var _createClass = (function () {
					function defineProperties(target, props) {
						for (var i = 0; i < props.length; i++) {
							var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
						}
					}return function (Constructor, protoProps, staticProps) {
						if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
					};
				})();
	
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
	
				function _classCallCheck(instance, Constructor) {
					if (!(instance instanceof Constructor)) {
						throw new TypeError("Cannot call a class as a function");
					}
				}
	
				var Fragment = (function () {
					function Fragment() {
						_classCallCheck(this, Fragment);
	
						this._watchers = [];
						this._watchers.noWatch = true;
					}
	
					_createClass(Fragment, [{
						key: 'listener',
						value: function listener() {
							// todo
						}
					}, {
						key: 'watcher',
						value: function watcher(key, newValue) {
							return {
								key: key,
								dirty: true,
								last: newValue
							};
						}
						/**
	      * register watch to an element of current fragment
	      */
	
					}, {
						key: '_watch',
						value: function _watch(key) {
							var _this = this;
	
							var watchers = this._watchers;
							watchers.forEach(function (item) {
								if (item.key === key) {
									return;
								}
								_this._watchers.push(new _this.watcher(key, _this[key]));
							});
						}
					}, {
						key: 'apply',
						value: function apply(applyFun) {
							applyFun && typeof applyFun === 'function' && applyFun();
						}
					}, {
						key: '_digest',
						value: function _digest() {
							var _this2 = this;
	
							var _watchers = this.watchers;
							_watchers.forEach(function (_watcher) {
								if (_watcher.dirty || _this2[_watcher.key] !== _watcher.last) {
									_watcher.last = _this2[_watcher[key]];
									_watcher.dirty = false;
									_this2.apply();
								}
							});
						}
					}, {
						key: 'init',
						value: function init() {
							var _this3 = this;
	
							var _keys = Object.keys(this);
							_keys.forEach(function (_key) {
								typeof _this3[_key] !== 'function' && !_this3[_key].noWatch && _this3._watch(_key);
							});
						}
					}]);
	
					return Fragment;
				})();
	
				exports.default = Fragment;
	
				/***/
			}
			/******/])
		);
	});
	;
	//# sourceMappingURL=arwen.js.map
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)(module)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = function (module) {
		if (!module.webpackPolyfill) {
			module.deprecate = function () {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	};

/***/ }
/******/ ]);
//# sourceMappingURL=test.js.map