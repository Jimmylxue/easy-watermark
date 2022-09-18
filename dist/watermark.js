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
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fullMarker = exports.QRcode = exports.blur = exports.mosaic = exports.imgWaterMarker = void 0;
var waterMarker_1 = __webpack_require__(2);
Object.defineProperty(exports, "imgWaterMarker", ({ enumerable: true, get: function () { return waterMarker_1.imgWaterMarker; } }));
var mosaic_1 = __webpack_require__(8);
Object.defineProperty(exports, "mosaic", ({ enumerable: true, get: function () { return mosaic_1.mosaic; } }));
var blur_1 = __webpack_require__(10);
Object.defineProperty(exports, "blur", ({ enumerable: true, get: function () { return blur_1.blur; } }));
var QRcode_1 = __webpack_require__(11);
Object.defineProperty(exports, "QRcode", ({ enumerable: true, get: function () { return QRcode_1.QRcode; } }));
var fullMarker_1 = __webpack_require__(13);
Object.defineProperty(exports, "fullMarker", ({ enumerable: true, get: function () { return fullMarker_1.fullMarker; } }));


/***/ }),
/* 2 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var index_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var error_1 = __importStar(__webpack_require__(7));
function imgWaterMarker(config) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var src, text, _a, size, _b, color, _c, padding, _d, output, _e, position, _f, rotate, _g, type, img, _h, canvas, ctx, width, height, lineGradient;
        return __generator(this, function (_j) {
            switch (_j.label) {
                case 0:
                    checkConfig(config, reject);
                    src = config.src, text = config.text, _a = config.size, size = _a === void 0 ? 20 : _a, _b = config.color, color = _b === void 0 ? '#c0c0c0' : _b, _c = config.padding, padding = _c === void 0 ? 30 : _c, _d = config.output, output = _d === void 0 ? 'jpeg' : _d, _e = config.position, position = _e === void 0 ? 'RIGHT_BOTTOM' : _e, _f = config.rotate, rotate = _f === void 0 ? 0 : _f, _g = config.type, type = _g === void 0 ? 'fill' : _g;
                    return [4 /*yield*/, (0, index_1.createImgInstance)({
                            source: src,
                            onError: function () { return (0, error_1.error)('注意-一个无法打开的图片资源'); },
                        })];
                case 1:
                    img = _j.sent();
                    _h = (0, index_1.createCanvas)(), canvas = _h.canvas, ctx = _h.ctx;
                    width = img.width, height = img.height;
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.font = "".concat(size, "px bold italic arial");
                    lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
                    lineGradient.addColorStop(1, color);
                    ctx.fillStyle = lineGradient;
                    drawText(ctx, text, position, padding, width, height, type, rotate);
                    resolve(canvas.toDataURL("image/".concat(output)));
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
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createImgInstance = exports.createCanvas = void 0;
var canvasInstance_1 = __webpack_require__(4);
Object.defineProperty(exports, "createCanvas", ({ enumerable: true, get: function () { return canvasInstance_1.createCanvas; } }));
var imgInstance_1 = __webpack_require__(5);
Object.defineProperty(exports, "createImgInstance", ({ enumerable: true, get: function () { return imgInstance_1.createImgInstance; } }));


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCanvas = void 0;
function createCanvas() {
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    return { canvas: canvas, ctx: ctx };
}
exports.createCanvas = createCanvas;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

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
        img.onerror = function () {
            onError();
            reject('资源加载失败');
        };
    });
}
exports.createImgInstance = createImgInstance;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.gaussBlur = exports.getPositionType = exports.getTextBound = void 0;
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
        case 'LEFT_TOP':
            flag = 1 /* Position.LEFT_TOP */;
            break;
        case 'LEFT_CENTER':
            flag = 2 /* Position.LEFT_CENTER */;
            break;
        case 'LEFT_BOTTOM':
            flag = 3 /* Position.LEFT_BOTTOM */;
            break;
        case 'CENTER_TOP':
            flag = 4 /* Position.CENTER_TOP */;
            break;
        case 'CENTER':
            flag = 5 /* Position.CENTER */;
            break;
        case 'CENTER_BOTTOM':
            flag = 6 /* Position.CENTER_BOTTOM */;
            break;
        case 'RIGHT_TOP':
            flag = 7 /* Position.RIGHT_TOP */;
            break;
        case 'RIGHT_CENTER':
            flag = 8 /* Position.RIGHT_CENTER */;
            break;
        case 'RIGHT_BOTTOM':
            flag = 9 /* Position.RIGHT_BOTTOM */;
            break;
    }
    return flag;
};
exports.getPositionType = getPositionType;
function gaussBlur(imgData, radius) {
    radius *= 3; //不知为什么,我的模糊半径是 css中 filter:bulr 值的三倍时效果才一致。
    //Copy图片内容
    var pixes = new Uint8ClampedArray(imgData.data);
    var width = imgData.width;
    var height = imgData.height;
    var gaussMatrix = [], gaussSum = 0, x, y, r, g, b, a, i, j, k, w;
    radius = Math.floor(radius);
    var sigma = radius / 3;
    a = 1 / (Math.sqrt(2 * Math.PI) * sigma);
    b = -1 / (2 * sigma * sigma);
    //生成高斯矩阵
    for (i = -radius; i <= radius; i++) {
        gaussMatrix.push(a * Math.exp(b * i * i));
    }
    //x 方向一维高斯运算
    for (y = 0; y < height; y++) {
        for (x = 0; x < width; x++) {
            r = g = b = a = gaussSum = 0;
            for (j = -radius; j <= radius; j++) {
                k = x + j;
                if (k >= 0 && k < width) {
                    i = (y * width + k) * 4;
                    w = gaussMatrix[j + radius];
                    r += pixes[i] * w;
                    g += pixes[i + 1] * w;
                    b += pixes[i + 2] * w;
                    a += pixes[i + 3] * w;
                    gaussSum += w;
                }
            }
            i = (y * width + x) * 4;
            //计算加权均值
            imgData.data.set([r, g, b, a].map(function (v) { return v / gaussSum; }), i);
        }
    }
    pixes.set(imgData.data);
    //y 方向一维高斯运算
    for (x = 0; x < width; x++) {
        for (y = 0; y < height; y++) {
            r = g = b = a = gaussSum = 0;
            for (j = -radius; j <= radius; j++) {
                k = y + j;
                if (k >= 0 && k < height) {
                    i = (k * width + x) * 4;
                    w = gaussMatrix[j + radius];
                    r += pixes[i] * w;
                    g += pixes[i + 1] * w;
                    b += pixes[i + 2] * w;
                    a += pixes[i + 3] * w;
                    gaussSum += w;
                }
            }
            i = (y * width + x) * 4;
            imgData.data.set([r, g, b, a].map(function (v) { return v / gaussSum; }), i);
        }
    }
    return imgData;
}
exports.gaussBlur = gaussBlur;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

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
/* 8 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
var index_1 = __webpack_require__(3);
var index_2 = __webpack_require__(9);
function mosaic(_a) {
    var _this = this;
    var src = _a.src, _b = _a.output, output = _b === void 0 ? 'jpeg' : _b, _c = _a.size, size = _c === void 0 ? 8 : _c;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var img, _a, canvas, ctx, width, height, imgData, data, y, x, i, _b, r, g, b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, (0, index_1.createImgInstance)({
                        source: src,
                        onError: function () { return (0, index_2.error)('注意-一个无法打开的图片资源'); },
                    })];
                case 1:
                    img = _c.sent();
                    _a = (0, index_1.createCanvas)(), canvas = _a.canvas, ctx = _a.ctx;
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
                    resolve(canvas.toDataURL("image/".concat(output)));
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.mosaic = mosaic;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.error = void 0;
var error_1 = __webpack_require__(7);
Object.defineProperty(exports, "error", ({ enumerable: true, get: function () { return error_1.error; } }));


/***/ }),
/* 10 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.blur = void 0;
var imgInstance_1 = __webpack_require__(5);
var canvasInstance_1 = __webpack_require__(4);
var error_1 = __webpack_require__(7);
var utils_1 = __webpack_require__(6);
function blur(_a) {
    var _this = this;
    var src = _a.src, _b = _a.output, output = _b === void 0 ? 'jpeg' : _b, _c = _a.radius, radius = _c === void 0 ? 5 : _c;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var img, _a, canvas, ctx, width, height, imgData, data;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, (0, imgInstance_1.createImgInstance)({
                        source: src,
                        onError: function () { return (0, error_1.error)('注意-一个无法打开的图片资源'); },
                    })];
                case 1:
                    img = _b.sent();
                    _a = (0, canvasInstance_1.createCanvas)(), canvas = _a.canvas, ctx = _a.ctx;
                    width = img.width, height = img.height;
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    imgData = ctx.getImageData(0, 0, width, height);
                    data = (0, utils_1.gaussBlur)(imgData, radius);
                    ctx.putImageData(data, 0, 0);
                    resolve(canvas.toDataURL("image/".concat(output)));
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.blur = blur;


/***/ }),
/* 11 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.QRcode = void 0;
var index_1 = __webpack_require__(3);
var index_2 = __webpack_require__(9);
// @ts-ignore
var qrcode_js_1 = __webpack_require__(12);
function QRcode(_a) {
    var _this = this;
    var src = _a.src, _b = _a.output, output = _b === void 0 ? 'jpeg' : _b, source = _a.source, _c = _a.codeSize, codeSize = _c === void 0 ? 400 : _c, _d = _a.size, size = _d === void 0 ? 100 : _d, _e = _a.colorDark, colorDark = _e === void 0 ? '#000' : _e, _f = _a.colorLight, colorLight = _f === void 0 ? '#fff' : _f, _g = _a.correctLevel, correctLevel = _g === void 0 ? 2 : _g;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var _a, canvas, ctx, img;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = (0, index_1.createCanvas)(), canvas = _a.canvas, ctx = _a.ctx;
                    canvas.width = codeSize;
                    canvas.height = codeSize;
                    qrcode_js_1.api.draw(source, ctx, 0, 0, codeSize, // width
                    codeSize, // height
                    colorLight, colorDark, '', correctLevel);
                    if (!src) return [3 /*break*/, 2];
                    return [4 /*yield*/, (0, index_1.createImgInstance)({
                            source: src,
                            onError: function () { return (0, index_2.error)('注意-一个无法打开的图片资源'); },
                        })];
                case 1:
                    img = _b.sent();
                    ctx.drawImage(img, codeSize / 2 - size / 2, codeSize / 2 - size / 2, size, size);
                    _b.label = 2;
                case 2:
                    resolve(canvas.toDataURL("image/".concat(output)));
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.QRcode = QRcode;


/***/ }),
/* 12 */
/***/ ((module) => {

!function(){var r,f,o,e,t,a,n=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],i=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],c=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],l=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],s=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],u=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],v=[],h=[],g=[],C=[],b=[],d=2;function k(r,f){var o;r>f&&(o=r,r=f,f=o),o=f,o*=f,o+=f,o>>=1,C[o+=r]=1}function m(r,o){var e;for(g[r+f*o]=1,e=-2;e<2;e++)g[r+e+f*(o-2)]=1,g[r-2+f*(o+e+1)]=1,g[r+2+f*(o+e)]=1,g[r+e+1+f*(o+2)]=1;for(e=0;e<2;e++)k(r-1,o+e),k(r+1,o-e),k(r-e,o-1),k(r+e,o+1)}function S(r){for(;r>=255;)r=((r-=255)>>8)+(255&r);return r}var w=[];function z(r,f,o,e){var t,a,n;for(t=0;t<e;t++)v[o+t]=0;for(t=0;t<f;t++){if(255!=(n=s[v[r+t]^v[o]]))for(a=1;a<e;a++)v[o+a-1]=v[o+a]^u[S(n+w[e-a])];else for(a=o;a<o+e;a++)v[a]=v[a+1];v[o+e-1]=255==n?0:u[S(n+w[0])]}}function A(r,f){var o;return r>f&&(o=r,r=f,f=o),o=f,o+=f*f,o>>=1,C[o+=r]}function p(r){var o,e,t,a;switch(r){case 0:for(e=0;e<f;e++)for(o=0;o<f;o++)o+e&1||A(o,e)||(g[o+e*f]^=1);break;case 1:for(e=0;e<f;e++)for(o=0;o<f;o++)1&e||A(o,e)||(g[o+e*f]^=1);break;case 2:for(e=0;e<f;e++)for(t=0,o=0;o<f;o++,t++)3==t&&(t=0),t||A(o,e)||(g[o+e*f]^=1);break;case 3:for(a=0,e=0;e<f;e++,a++)for(3==a&&(a=0),t=a,o=0;o<f;o++,t++)3==t&&(t=0),t||A(o,e)||(g[o+e*f]^=1);break;case 4:for(e=0;e<f;e++)for(t=0,a=e>>1&1,o=0;o<f;o++,t++)3==t&&(t=0,a=!a),a||A(o,e)||(g[o+e*f]^=1);break;case 5:for(a=0,e=0;e<f;e++,a++)for(3==a&&(a=0),t=0,o=0;o<f;o++,t++)3==t&&(t=0),(o&e&1)+!(!t|!a)||A(o,e)||(g[o+e*f]^=1);break;case 6:for(a=0,e=0;e<f;e++,a++)for(3==a&&(a=0),t=0,o=0;o<f;o++,t++)3==t&&(t=0),(o&e&1)+(t&&t==a)&1||A(o,e)||(g[o+e*f]^=1);break;case 7:for(a=0,e=0;e<f;e++,a++)for(3==a&&(a=0),t=0,o=0;o<f;o++,t++)3==t&&(t=0),(t&&t==a)+(o+e&1)&1||A(o,e)||(g[o+e*f]^=1);break}}function y(r){var f,o=0;for(f=0;f<=r;f++)b[f]>=5&&(o+=3+b[f]-5);for(f=3;f<r-1;f+=2)b[f-2]==b[f+2]&&b[f+2]==b[f-1]&&b[f-1]==b[f+1]&&3*b[f-1]==b[f]&&(0==b[f-3]||f+3>r||3*b[f-3]>=4*b[f]||3*b[f+3]>=4*b[f])&&(o+=40);return o}function F(){var r,o,e,t,a,n=0,i=0;for(o=0;o<f-1;o++)for(r=0;r<f-1;r++)(g[r+f*o]&&g[r+1+f*o]&&g[r+f*(o+1)]&&g[r+1+f*(o+1)]||!(g[r+f*o]||g[r+1+f*o]||g[r+f*(o+1)]||g[r+1+f*(o+1)]))&&(n+=3);for(o=0;o<f;o++){for(b[0]=0,e=t=r=0;r<f;r++)(a=g[r+f*o])==t?b[e]++:b[++e]=1,i+=(t=a)?1:-1;n+=y(e)}i<0&&(i=-i);var c=i,l=0;for(c+=c<<2,c<<=1;c>f*f;)c-=f*f,l++;for(n+=10*l,r=0;r<f;r++){for(b[0]=0,e=t=o=0;o<f;o++)(a=g[r+f*o])==t?b[e]++:b[++e]=1,t=a;n+=y(e)}return n}var R=null,_={get ecclevel(){return d},set ecclevel(r){d=r},get size(){return _size},set size(r){_size=r},get canvas(){return R},set canvas(r){R=r},getFrame:function(b){return function(b){var y,R,_,x,M,j,q,B;x=b.length,r=0;do{if(r++,_=4*(d-1)+16*(r-1),o=l[_++],e=l[_++],t=l[_++],a=l[_],x<=(_=t*(o+e)+e-3+(r<=9)))break}while(r<40);for(f=17+4*r,M=t+(t+a)*(o+e)+e,x=0;x<M;x++)h[x]=0;for(v=b.slice(0),x=0;x<f*f;x++)g[x]=0;for(x=0;x<(f*(f+1)+1)/2;x++)C[x]=0;for(x=0;x<3;x++){for(_=0,R=0,1==x&&(_=f-7),2==x&&(R=f-7),g[R+3+f*(_+3)]=1,y=0;y<6;y++)g[R+y+f*_]=1,g[R+f*(_+y+1)]=1,g[R+6+f*(_+y)]=1,g[R+y+1+f*(_+6)]=1;for(y=1;y<5;y++)k(R+y,_+1),k(R+1,_+y+1),k(R+5,_+y),k(R+y+1,_+5);for(y=2;y<4;y++)g[R+y+f*(_+2)]=1,g[R+2+f*(_+y+1)]=1,g[R+4+f*(_+y)]=1,g[R+y+1+f*(_+4)]=1}if(r>1)for(x=n[r],R=f-7;;){for(y=f-7;y>x-3&&(m(y,R),!(y<x));)y-=x;if(R<=x+9)break;m(6,R-=x),m(R,6)}for(g[8+f*(f-8)]=1,R=0;R<7;R++)k(7,R),k(f-8,R),k(7,R+f-7);for(y=0;y<8;y++)k(y,7),k(y+f-8,7),k(y,f-8);for(y=0;y<9;y++)k(y,8);for(y=0;y<8;y++)k(y+f-8,8),k(8,y);for(R=0;R<7;R++)k(8,R+f-7);for(y=0;y<f-14;y++)1&y?(k(8+y,6),k(6,8+y)):(g[8+y+6*f]=1,g[6+f*(8+y)]=1);if(r>6)for(x=i[r-7],_=17,y=0;y<6;y++)for(R=0;R<3;R++,_--)1&(_>11?r>>_-12:x>>_)?(g[5-y+f*(2-R+f-11)]=1,g[2-R+f-11+f*(5-y)]=1):(k(5-y,2-R+f-11),k(2-R+f-11,5-y));for(R=0;R<f;R++)for(y=0;y<=R;y++)g[y+f*R]&&k(y,R);for(M=v.length,j=0;j<M;j++)h[j]=v.charCodeAt(j);if(v=h.slice(0),M>=(y=t*(o+e)+e)-2&&(M=y-2,r>9&&M--),j=M,r>9){for(v[j+2]=0,v[j+3]=0;j--;)x=v[j],v[j+3]|=255&x<<4,v[j+2]=x>>4;v[2]|=255&M<<4,v[1]=M>>4,v[0]=64|M>>12}else{for(v[j+1]=0,v[j+2]=0;j--;)x=v[j],v[j+2]|=255&x<<4,v[j+1]=x>>4;v[1]|=255&M<<4,v[0]=64|M>>4}for(j=M+3-(r<10);j<y;)v[j++]=236,v[j++]=17;for(w[0]=1,j=0;j<a;j++){for(w[j+1]=1,q=j;q>0;q--)w[q]=w[q]?w[q-1]^u[S(s[w[q]]+j)]:w[q-1];w[0]=u[S(s[w[0]]+j)]}for(j=0;j<=a;j++)w[j]=s[w[j]];for(_=y,R=0,j=0;j<o;j++)z(R,t,_,a),R+=t,_+=a;for(j=0;j<e;j++)z(R,t+1,_,a),R+=t+1,_+=a;for(R=0,j=0;j<t;j++){for(q=0;q<o;q++)h[R++]=v[j+q*t];for(q=0;q<e;q++)h[R++]=v[o*t+j+q*(t+1)]}for(q=0;q<e;q++)h[R++]=v[o*t+j+q*(t+1)];for(j=0;j<a;j++)for(q=0;q<o+e;q++)h[R++]=v[y+j+q*a];for(v=h,y=R=f-1,_=M=1,B=(t+a)*(o+e)+e,j=0;j<B;j++)for(x=v[j],q=0;q<8;q++,x<<=1){128&x&&(g[y+f*R]=1);do{M?y--:(y++,_?0!=R?R--:(_=!_,6==(y-=2)&&(y--,R=9)):R!=f-1?R++:(_=!_,6==(y-=2)&&(y--,R-=8))),M=!M}while(A(y,R))}for(v=g.slice(0),x=0,R=3e4,_=0;_<8&&(p(_),(y=F())<R&&(R=y,x=_),7!=x);_++)g=v.slice(0);for(x!=_&&p(x),R=c[x+(d-1<<3)],_=0;_<8;_++,R>>=1)1&R&&(g[f-1-_+8*f]=1,_<6?g[8+f*_]=1:g[8+f*(_+1)]=1);for(_=0;_<7;_++,R>>=1)1&R&&(g[8+f*(f-7+_)]=1,_?g[6-_+8*f]=1:g[7+8*f]=1);return g}(b)},utf16to8:function(r){var f,o,e,t;for(f="",e=r.length,o=0;o<e;o++)(t=r.charCodeAt(o))>=1&&t<=127?f+=r.charAt(o):t>2047?(f+=String.fromCharCode(224|t>>12&15),f+=String.fromCharCode(128|t>>6&63),f+=String.fromCharCode(128|t>>0&63)):(f+=String.fromCharCode(192|t>>6&31),f+=String.fromCharCode(128|t>>0&63));return f},draw:function(r,o,e,t,a,n,i,c,l,s){if(d=s||d,o){var u=Math.min(a,n);r=this.utf16to8(r);var v=this.getFrame(r),h=u/f;i&&(o.fillStyle=i,o.fillRect(e,t,a,a)),o.fillStyle=c||"black";for(var g=0;g<f;g++)for(var C=0;C<f;C++)v[C*f+g]&&o.fillRect(e+h*g,t+h*C,h,h)}}};module.exports={api:_}}();

/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

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
exports.fullMarker = void 0;
var index_1 = __webpack_require__(3);
var utils_1 = __webpack_require__(6);
var error_1 = __importStar(__webpack_require__(7));
function fullMarker(config) {
    var _this = this;
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var src, text, _a, size, _b, color, _c, padding, _d, output, _e, rotate, _f, type, img, _g, canvas, ctx, width, height, lineGradient;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    checkConfig(config, reject);
                    src = config.src, text = config.text, _a = config.size, size = _a === void 0 ? 20 : _a, _b = config.color, color = _b === void 0 ? '#c0c0c0' : _b, _c = config.padding, padding = _c === void 0 ? 20 : _c, _d = config.output, output = _d === void 0 ? 'jpeg' : _d, _e = config.rotate, rotate = _e === void 0 ? 0 : _e, _f = config.type, type = _f === void 0 ? 'fill' : _f;
                    return [4 /*yield*/, (0, index_1.createImgInstance)({
                            source: src,
                            onError: function () { return (0, error_1.error)('注意-一个无法打开的图片资源'); },
                        })];
                case 1:
                    img = _h.sent();
                    _g = (0, index_1.createCanvas)(), canvas = _g.canvas, ctx = _g.ctx;
                    width = img.width, height = img.height;
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    ctx.font = "".concat(size, "px bold italic arial");
                    lineGradient = ctx.createLinearGradient(100, 200, 200, 200);
                    lineGradient.addColorStop(1, color);
                    ctx.fillStyle = lineGradient;
                    drawText(ctx, text, padding, width, height, type, rotate);
                    resolve(canvas.toDataURL("image/".concat(output)));
                    return [2 /*return*/];
            }
        });
    }); });
}
exports.fullMarker = fullMarker;
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
function drawText(ctx, text, padding, width, height, type, rotate) {
    if (padding === void 0) { padding = 30; }
    var textMsg = (0, utils_1.getTextBound)(ctx, text || 'Jimmy定制');
    if (width < textMsg.width + padding || height < textMsg.height + padding) {
        (0, error_1.error)("\u56FE\u7247\u592A\u5C0F\u6216\u6C34\u5370\u6587\u5B57\u592A\u5927");
        throw new error_1.default(2, '图片太小或水印文字太大');
    }
    var positionWidth = 0;
    var positionHeight = 0;
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
    var startX = 0, startY = 0;
    var count = 0;
    var diff = function (startX, startY) {
        if (startX < width) {
            count++;
            type === 'fill'
                ? ctx.fillText(text || 'watermark', positionWidth + startX, positionHeight + startY)
                : ctx.strokeText(text || 'watermark', positionWidth + startX, positionHeight + startY);
            startX += textMsg.width + padding;
            diff(startX, startY);
        }
        else if (startY < height) {
            startY += textMsg.height * 2 + padding;
            startX = 0;
            diff(startX, startY);
        }
        else {
            console.log('diff结束', count);
        }
    };
    diff(startX, startY);
}


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fullMarker = exports.QRcode = exports.blur = exports.mosaic = exports.marker = void 0;
var index_1 = __webpack_require__(1);
Object.defineProperty(exports, "marker", ({ enumerable: true, get: function () { return index_1.imgWaterMarker; } }));
Object.defineProperty(exports, "mosaic", ({ enumerable: true, get: function () { return index_1.mosaic; } }));
Object.defineProperty(exports, "blur", ({ enumerable: true, get: function () { return index_1.blur; } }));
Object.defineProperty(exports, "QRcode", ({ enumerable: true, get: function () { return index_1.QRcode; } }));
Object.defineProperty(exports, "fullMarker", ({ enumerable: true, get: function () { return index_1.fullMarker; } }));
exports["default"] = { marker: index_1.imgWaterMarker, mosaic: index_1.mosaic, blur: index_1.blur, QRcode: index_1.QRcode, fullMarker: index_1.fullMarker };

})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});