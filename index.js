/**
 * 包的入口文件
 *  根据用户的环境  输出不同的包
 */

"use strict";

if (process.env.NODE_ENV === "production") {
  module.exports = require("./dist/watermark.min.js");
} else {
  module.exports = require("./dist/watermark.js");
}
