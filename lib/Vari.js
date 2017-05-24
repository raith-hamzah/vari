(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("mathjs"));
	else if(typeof define === 'function' && define.amd)
		define("Vari", ["mathjs"], factory);
	else if(typeof exports === 'object')
		exports["Vari"] = factory(require("mathjs"));
	else
		root["Vari"] = factory(root["mathjs"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (n, k) {
	return _mathjs2.default.fact(n) / (_mathjs2.default.fact(n - k) * _mathjs2.default.fact(k));
};

var _mathjs = __webpack_require__(0);

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (array, property) {
	var ev = 0;
	var ev2 = 0;
	if (!property) {
		array.forEach(function (datum) {
			ev += datum;
		});
		array.forEach(array, function (datum) {
			ev2 += datum * datum;
		});
		return ev2 / array.length - Math.pow(ev / array.length, 2);
	} else {
		array.forEach(function (datum) {
			ev += datum[property];
		});
		array.forEach(array, function (datum) {
			ev2 += datum[property] * datum[property];
		});
		return ev2 / array.length - Math.pow(ev / array.length, 2);
	}
};

module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (n, p) {
	var _this = this;

	var expectedValue = n * p;
	var variance = n * p * (1 - p);
	var standardDeviation = Math.sqrt(variance);
	var mode = Math.floor((n + 1) * p);
	var median = Math.floor(n * p);
	var skewness = (1 - 2 * p) / Math.sqrt(n * p * (1 - p));
	return {
		expectedValue: expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance: variance,
		var: variance,
		standardDeviation: standardDeviation,
		sd: standardDeviation,
		mode: mode,
		median: median,
		pmf: function pmf(k) {
			return (0, _binomialCoefficient2.default)(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
		},
		cdf: function cdf(k) {
			var cumulation = 0;
			for (var i = 0; i <= k; i++) {
				cumulation += _this.pmf(i);
			}
			return cumulation;
		},
		skewness: skewness

	};
};

var _binomialCoefficient = __webpack_require__(1);

var _binomialCoefficient2 = _interopRequireDefault(_binomialCoefficient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (array, property) {
	var total = 0;
	if (!property) {
		array.forEach(function (value) {
			total += value;
		});
		return total / array.length;
	} else {
		array.forEach(function (value) {
			total[property] += value;
		});
		return total[property] / array.length;
	}
};

module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (lambda) {
	var expectedValue = 1 / lambda;
	var variance = 1 / Math.pow(lambda, 2);
	var standardDeviation = Math.sqrt(variance);
	var mode = 0;
	var median = expectedValue * Math.log(2);
	var skewness = 2;
	return {
		expectedValue: expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance: variance,
		var: variance,
		standardDeviation: standardDeviation,
		sd: standardDeviation,
		mode: mode,
		median: median,
		pdf: function pdf(x) {
			return lambda * Math.pow(Math.E, (0 - lambda) * x);
		},
		cdf: function cdf(x) {
			return 1 - Math.pow(Math.E, (0 - lambda) * x);
		},
		skewness: skewness,
		entropy: 1 - Math.log(lambda)

	};
};

var _mathjs = __webpack_require__(0);

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (N, K, n) {
	var _this = this;

	var expectedValue = n * (K / N);
	var variance = n * (K / N) * ((N - K) / N) * ((N - n) / (N - 1));
	var standardDeviation = Math.sqrt(variance);
	var mode = Math.floor((n + 1) * (K + 1) / (n + 2));
	var skewness = (N - 2 * K) * Math.sqrt(N - 1) * (N - 2 * n) / (Math.sqrt(n * K * (N - K) * (N - n)) * (N - 2));
	return {
		expectedValue: expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance: variance,
		var: variance,
		standardDeviation: standardDeviation,
		sd: standardDeviation,
		mode: mode,
		pmf: function pmf(k) {
			return (0, _binomialCoefficient2.default)(K, k) * (0, _binomialCoefficient2.default)(N - K, n - k) / (0, _binomialCoefficient2.default)(N, n);
		},
		cdf: function cdf(k) {
			var cumulation = 0;
			for (var i = 0; i <= k; i++) {
				cumulation += _this.pmf(i);
			}
			return cumulation;
		},
		skewness: skewness

	};
};

var _binomialCoefficient = __webpack_require__(1);

var _binomialCoefficient2 = _interopRequireDefault(_binomialCoefficient);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (mu, v) {
	var sigma = Math.sqrt(v);
	var expectedValue = mu;
	var variance = sigma * sigma;
	var standardDeviation = sigma;
	var mode = mu;
	var median = mu;
	var skewness = 0;
	return {
		expectedValue: expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance: variance,
		var: variance,
		standardDeviation: standardDeviation,
		sd: standardDeviation,
		mode: mode,
		median: median,
		pdf: function pdf(x) {
			return 1 / Math.sqrt(2 * Math.PI * sigma * sigma) * Math.pow(Math.E, -(Math.pow(x - mu, 2) / (2 * sigma * sigma)));
		},
		cdf: function cdf(x) {
			return 0.5 * (1 + _mathjs2.default.erf((x - mu) / (sigma * Math.sqrt(2))));
		},
		skewness: skewness,
		entropy: 0.5 * Math.log(2 * Math.PI * Math.E * sigma * sigma)

	};
};

var _mathjs = __webpack_require__(0);

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (lambda) {
	var _this = this;

	var expectedValue = lambda;
	var variance = lambda;
	var standardDeviation = Math.sqrt(variance);
	var mode = Math.floor(lambda);
	var median = Math.floor(lambda + 1 / 3 - 0.02 / lambda);
	var skewness = Math.pow(lambda, -1 / 2);
	return {
		expectedValue: expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance: variance,
		var: variance,
		standardDeviation: standardDeviation,
		sd: standardDeviation,
		mode: mode,
		median: median,
		pmf: function pmf(k) {
			return Math.pow(lambda, k) * Math.pow(Math.E, lambda * -1) / _mathjs2.default.fact(k);
		},
		cdf: function cdf(k) {
			var cumulation = 0;
			for (var i = 0; i <= k; i++) {
				cumulation += _this.pmf(i);
			}
			return cumulation;
		},
		skewness: skewness

	};
};

var _mathjs = __webpack_require__(0);

var _mathjs2 = _interopRequireDefault(_mathjs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (array, property) {
	return Math.sqrt((0, _variance2.default)(array, property));
};

var _variance = __webpack_require__(2);

var _variance2 = _interopRequireDefault(_variance);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

exports.default = function (a, b) {
	var expectedValue = 0.5 * (a + b);
	var variance = 1 / 12 * Math.pow(b - a, 2);
	var standardDeviation = Math.sqrt(variance);
	var mode = null;
	var median = expectedValue;
	var skewness = 0;
	return {
		expectedValue: expectedValue,
		mean: expectedValue,
		ev: expectedValue,
		variance: variance,
		var: variance,
		standardDeviation: standardDeviation,
		sd: standardDeviation,
		mode: mode,
		median: median,
		pdf: function pdf(x) {
			if (x < a || x > b) {
				return 0;
			} else {
				return 1 / (b - a);
			}
		},
		cdf: function cdf(x) {
			if (x < a) {
				return 0;
			} else if (x > b) {
				return 1;
			} else {
				return (x - a) / (b - a);
			}
		},
		entropy: Math.log10(b - a),
		skewness: skewness

	};
};

module.exports = exports["default"];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _binomialCoefficient = __webpack_require__(1);

var _binomialCoefficient2 = _interopRequireDefault(_binomialCoefficient);

var _expectedValue = __webpack_require__(4);

var _expectedValue2 = _interopRequireDefault(_expectedValue);

var _standardDeviation = __webpack_require__(9);

var _standardDeviation2 = _interopRequireDefault(_standardDeviation);

var _variance = __webpack_require__(2);

var _variance2 = _interopRequireDefault(_variance);

var _exponentialDistribution = __webpack_require__(5);

var _exponentialDistribution2 = _interopRequireDefault(_exponentialDistribution);

var _binomialDistribution = __webpack_require__(3);

var _binomialDistribution2 = _interopRequireDefault(_binomialDistribution);

var _normalDistribution = __webpack_require__(7);

var _normalDistribution2 = _interopRequireDefault(_normalDistribution);

var _poissonDistribution = __webpack_require__(8);

var _poissonDistribution2 = _interopRequireDefault(_poissonDistribution);

var _uniformDistribution = __webpack_require__(10);

var _uniformDistribution2 = _interopRequireDefault(_uniformDistribution);

var _hypergeometricDistribution = __webpack_require__(6);

var _hypergeometricDistribution2 = _interopRequireDefault(_hypergeometricDistribution);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Vari = {
	name: 'Vari',
	version: '0.2.0',
	ncr: _binomialCoefficient2.default,
	nchoosek: _binomialCoefficient2.default,
	binomialCoefficient: _binomialCoefficient2.default,
	ev: _expectedValue2.default,
	mean: _expectedValue2.default,
	expectedValue: _expectedValue2.default,
	sd: _standardDeviation2.default,
	standardDeviation: _standardDeviation2.default,
	variance: _variance2.default,
	var: _variance2.default,
	Exponential: _exponentialDistribution2.default,
	Exp: _exponentialDistribution2.default,
	Binomial: _binomialDistribution2.default,
	B: _binomialDistribution2.default,
	Normal: _normalDistribution2.default,
	N: _normalDistribution2.default,
	Poisson: _poissonDistribution2.default,
	P: _poissonDistribution2.default,
	Uniform: _uniformDistribution2.default,
	U: _uniformDistribution2.default,
	Hypergeometric: _hypergeometricDistribution2.default,
	H: _hypergeometricDistribution2.default

};

exports.default = Vari;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=Vari.js.map