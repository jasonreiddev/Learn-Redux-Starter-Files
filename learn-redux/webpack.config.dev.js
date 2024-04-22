var path = require("path");
const baseConfig = require("./webpack.config.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  ...baseConfig,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      ...baseConfig.module.rules,
    ],
  },
  plugins: [
    ...baseConfig.plugins,
    new HtmlWebpackPlugin({
      title: "Development",
      template: "./index.html",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    runtimeChunk: "single",
  },
};
