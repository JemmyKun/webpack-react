const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [{ loader: "babel-loader" }]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "style-loader" // 将 JS 字符串生成为 style 节点
          },
          {
            loader: "css-loader" // 将 CSS 转化成 CommonJS 模块 | js 文件中 import 一个css文件
          },
          {
            loader: "sass-loader" // 将 Sass 编译成 CSS
          }
        ]
      }
    ]
  },
  // 其它解决方案配置 自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
  resolve: {
    modules: ["node_modules", path.join(__dirname, "../node_modules"), "./src"],
    extensions: [".js", ".jsx", ".json", ".scss"],
    alias: {
      "@": path.join(__dirname, "../lib"),
      lib: path.join(__dirname, "../lib/")
    }
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html"
    })
  ],
  devServer: {
    contentBase: require("path").join(__dirname, "build"),
    compress: true,
    port: 8088,
    host: "localhost",
    headers: { "Access-Control-Allow-Origin": "*" },
    hot: true,
    inline: true,
    progress: true,
    quiet: true,
    disableHostCheck: true
  },
  devtool: "cheap-module-eval-source-map"
};
