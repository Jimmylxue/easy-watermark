(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["waterMarker"] = factory();
	else
		root["waterMarker"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imgWaterMarker = void 0;
var imgInstance_1 = __webpack_require__(2);
var canvasInstance_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(4);
var error_1 = __importStar(__webpack_require__(5));
function imgWaterMarker(config) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var src, text, size, color, padding, output, position, rotate, _a, type, img, _b, canvas, ctx, width, height, lineGradient;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    checkConfig(config, reject);
                    src = config.src, text = config.text, size = config.size, color = config.color, padding = config.padding, output = config.output, position = config.position, rotate = config.rotate, _a = config.type, type = _a === void 0 ? 'fill' : _a;
                    return [4 /*yield*/, (0, imgInstance_1.createImgInstance)({
                            source: src,
                            onError: function () { return (0, error_1.error)('注意-一个无法打开的图片资源'); },
                        })];
                case 1:
                    img = _c.sent();
                    _b = (0, canvasInstance_1.createCanvas)(), canvas = _b.canvas, ctx = _b.ctx;
                    width = img.width, height = img.height;
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.font = "".concat(size || 20, "px bold italic arial");
                    lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
                    lineGradient.addColorStop(1, color || '#ccc');
                    ctx.fillStyle = lineGradient;
                    drawText(ctx, text, position || 'right-bottom', padding, width, height, type, rotate);
                    resolve(canvas.toDataURL("image/".concat(output, "||jpeg")));
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.imgWaterMarker = imgWaterMarker;
// 检查参数是否完整
function checkConfig(config, reject) {
    if (!config.src) {
        (0, error_1.error)('请输入图片地址');
        reject('请输入图片地址');
        throw new error_1.default(1, 'configError');
    }
    if (!config.text) {
        (0, error_1.warn)('请配置水印文字');
    }
    if (!['', 'png', 'jpeg'].includes(config.output || '')) {
        (0, error_1.error)("\u4E0D\u652F\u6301".concat(config.output, "\u7C7B\u578B"));
        reject("\u4E0D\u652F\u6301".concat(config.output, "\u7C7B\u578B"));
        throw new error_1.default(1, 'configError');
    }
}
function drawText(ctx, text, position, padding, width, height, type, rotate) {
    if (padding === void 0) { padding = 30; }
    var textMsg = (0, utils_1.getTextBound)(ctx, text || 'Jimmy定制');
    if (width < textMsg.width + padding || height < textMsg.height + padding) {
        (0, error_1.error)("\u56FE\u7247\u592A\u5C0F\u6216\u6C34\u5370\u6587\u5B57\u592A\u5927");
        throw new error_1.default(2, '图片太小或水印文字太大');
    }
    var positionWidth = 0;
    var positionHeight = 0;
    switch ((0, utils_1.getPositionType)(position)) {
        case 1 /* Position.LEFT_TOP */:
            positionWidth = padding;
            positionHeight = padding;
            break;
        case 2 /* Position.LEFT_CENTER */:
            positionWidth = padding;
            positionHeight = height / 2 - textMsg.height / 2;
            break;
        case 3 /* Position.LEFT_BOTTOM */:
            positionWidth = padding;
            positionHeight = height - textMsg.height - padding;
            break;
        case 4 /* Position.CENTER_TOP */:
            positionWidth = width / 2 - textMsg.width / 2;
            positionHeight = padding;
            break;
        case 5 /* Position.CENTER */:
            positionWidth = width / 2 - textMsg.width / 2;
            positionHeight = height / 2 - textMsg.height / 2;
            break;
        case 6 /* Position.CENTER_BOTTOM */:
            positionWidth = width / 2 - textMsg.width / 2;
            positionHeight = height - textMsg.height - padding;
            break;
        case 7 /* Position.RIGHT_TOP */:
            positionWidth = width - textMsg.width - padding;
            positionHeight = padding;
            break;
        case 8 /* Position.RIGHT_CENTER */:
            positionWidth = width - textMsg.width - padding;
            positionHeight = height / 2 - textMsg.height / 2;
            break;
        case 9 /* Position.RIGHT_BOTTOM */:
            positionWidth = width - textMsg.width - padding;
            positionHeight = height - textMsg.height - padding;
            break;
    }
    if (rotate) {
        /**
         * 旋转角度的逻辑：
         * 	先设置旋转点，旋转角度之后写上字
         * 	再将旋转点转回
         */
        var rectCenterPoint = {
            x: positionWidth + textMsg.width / 2,
            y: positionHeight + textMsg.height / 2,
        };
        ctx.translate(rectCenterPoint.x, rectCenterPoint.y);
        ctx.rotate((rotate * Math.PI) / 180); // 处理旋转角度
        ctx.translate(-rectCenterPoint.x, -rectCenterPoint.y);
    }
    if (type === 'fill') {
        ctx.fillText(text || 'watermark', positionWidth, positionHeight);
    }
    else {
        ctx.strokeText(text || 'watermark', positionWidth, positionHeight);
    }
    // 后面两个数值表示从哪里开始画 如这里是从x = 100 y = 200开始画
}


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createImgInstance = void 0;
function createImgInstance(_a) {
    var source = _a.source, onError = _a.onError;
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.setAttribute('crossOrigin', '');
        img.src = source;
        img.onload = function () {
            resolve(img);
        };
        img.onerror = onError;
    });
}
exports.createImgInstance = createImgInstance;


/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCanvas = void 0;
function createCanvas() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    return { canvas: canvas, ctx: ctx };
}
exports.createCanvas = createCanvas;


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getPositionType = exports.getTextBound = void 0;
// 获取文字的宽高
var getTextBound = function (ctx, font) {
    var baseMsg = ctx.measureText(font);
    return {
        width: baseMsg.width,
        height: baseMsg.actualBoundingBoxDescent,
    };
};
exports.getTextBound = getTextBound;
// 获取方位
var getPositionType = function (position) {
    var flag;
    switch (position) {
        case 'left-top':
            flag = 1 /* Position.LEFT_TOP */;
            break;
        case 'left-center':
            flag = 2 /* Position.LEFT_CENTER */;
            break;
        case 'left-bottom':
            flag = 3 /* Position.LEFT_BOTTOM */;
            break;
        case 'center-top':
            flag = 4 /* Position.CENTER_TOP */;
            break;
        case 'center':
            flag = 5 /* Position.CENTER */;
            break;
        case 'center-bottom':
            flag = 6 /* Position.CENTER_BOTTOM */;
            break;
        case 'right-top':
            flag = 7 /* Position.RIGHT_TOP */;
            break;
        case 'right-center':
            flag = 8 /* Position.RIGHT_CENTER */;
            break;
        case 'right-bottom':
            flag = 9 /* Position.RIGHT_BOTTOM */;
            break;
    }
    return flag;
};
exports.getPositionType = getPositionType;


/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports) {


/**
 * 通用错误处理
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = exports.warn = void 0;
var ErrorType;
(function (ErrorType) {
    ErrorType[ErrorType["ConfigError"] = 1] = "ConfigError";
    ErrorType[ErrorType["RenderError"] = 2] = "RenderError";
    ErrorType[ErrorType["SourceError"] = 3] = "SourceError";
})(ErrorType || (ErrorType = {}));
var warn = function (msg) {
    console.warn(msg);
};
exports.warn = warn;
var error = function (msg) {
    console.error(msg);
};
exports.error = error;
var BaseError = /** @class */ (function (_super) {
    __extends(BaseError, _super);
    function BaseError(type, msg) {
        var _this = _super.call(this) || this;
        // this.message = value;
        switch (type) {
            case ErrorType.ConfigError:
                _this.name = ErrorType[ErrorType.ConfigError];
                _this.message = msg;
                break;
            case ErrorType.RenderError:
                _this.name = ErrorType[ErrorType.RenderError];
                _this.message = msg;
                break;
            case ErrorType.SourceError:
                _this.name = ErrorType[ErrorType.SourceError];
                _this.message = msg;
                break;
        }
        return _this;
    }
    return BaseError;
}(Error));
exports["default"] = BaseError;


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mosaic = void 0;
var imgInstance_1 = __webpack_require__(2);
var canvasInstance_1 = __webpack_require__(3);
var error_1 = __webpack_require__(5);
function mosaic(_a) {
    var _this = this;
    var src = _a.src, _b = _a.output, output = _b === void 0 ? 'jpeg' : _b, _c = _a.size, size = _c === void 0 ? 8 : _c;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var img, _a, canvas, ctx, width, height, imgData, data, y, x, i, _b, r, g, b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, imgInstance_1.createImgInstance)({
                        source: src,
                        onError: function () { return (0, error_1.error)('注意-一个无法打开的图片资源'); },
                    })];
                case 1:
                    img = _c.sent();
                    _a = (0, canvasInstance_1.createCanvas)(), canvas = _a.canvas, ctx = _a.ctx;
                    width = img.width, height = img.height;
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    imgData = ctx.getImageData(0, 0, width, height);
                    data = imgData.data;
                    ctx.fillRect(0, 0, width, height);
                    /*行列遍历*/
                    for (y = 0; y < height; y += size) {
                        for (x = 0; x < width; x += size) {
                            i = (y * width + x) * 4;
                            _b = [data[i], data[i + 1], data[i + 2]], r = _b[0], g = _b[1], b = _b[2];
                            ctx.fillStyle = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
                            ctx.beginPath();
                            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
                            ctx.fill();
                        }
                    }
                    resolve(canvas.toDataURL("image/".concat(output, "||jpeg")));
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.mosaic = mosaic;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mosaic = exports.imgWaterMarker = void 0;
var waterMarker_1 = __webpack_require__(1);
Object.defineProperty(exports, "imgWaterMarker", ({ enumerable: true, get: function () { return waterMarker_1.imgWaterMarker; } }));
var mosaic_1 = __webpack_require__(6);
Object.defineProperty(exports, "mosaic", ({ enumerable: true, get: function () { return mosaic_1.mosaic; } }));

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});