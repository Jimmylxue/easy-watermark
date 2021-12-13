const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const TenserWebpackPlugin = require('terser-webpack-plugin');
/**
 * 在个人电脑 使用 npm login 先登录之后  包文件写好了之后就可以使用 npm publish  发布这个包了
 *  包的名称就是 package.json 中的name字段
 * 下回如果包有更新的时候  记住要将 package.json 中的 version 加高一下 再使用 npm publish 就可以更新了
 */

module.exports = {
  entry: {
    'add-number': './src/main.ts',
    'add-number.min': './src/main.ts',
  },
  output: {
    filename: '[name].js',
    /**
     * 使用 library 这个字段定义打包库之后的名称，如这里的名称是 addNumber 这个库默认导出的一个相加的方法
     *  在使用开发的时候就使用  addNumber(10,20) 这样就可以了
     */
    library: 'addNumber',
    /**
     * libraryTarget 有很值，让打包之后可以有很多的规范 比如 var this global 等等
     * 最终打包的效果也就是如：
     *  var addNumber = ....
     *  this.addNumber = ....
     *
     * umd是一种标准的格式，可以兼容其他的  推荐这个一般都使用 umd
     */
    libraryTarget: 'umd', //umd 是兼容的
    /**
     * 包的导出默认是模块导出，结果是 Module {__esModule: true, Symbol(Symbol.toStringTag): 'Module'}
     * 模块导出的内容在.default,  使用这个字段可以自动我们只获取.default 中的内容
     */
    libraryExport: 'default',
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  /**
   * 因为需要打包出来一份压缩版本和未压缩版本，所以设置mode就没用了，
   * 所以这里使用专门打包压缩用的插件 terser-webpack-plugin
   */
  mode: 'none',
  /**
   * optimization webpack专门用来做优化的一个字段
   */
  optimization: {
    minimize: true, // 是否开启压缩
    minimizer: [
      new TenserWebpackPlugin({
        test: /\.min\.js$/, // 只针对 .min.js进行压缩
      }),
    ], // 压缩的方式  -- 使用 terser-webpack-plugin 压缩工具
  },
  plugins: [
    new htmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      scriptLoading: 'blocking',
    }),
  ],
  devServer: {
    // contentBase: './dist', //这个一般都不会去改的
    port: 666, //服务器端口
    open: true, //自动打开浏览器的窗口
    // 配置代理 处理跨域
    // proxy: {
    // 	'/api': {
    // 		target: 'http://localhost:777',
    // 	},
    // },
  },
};
