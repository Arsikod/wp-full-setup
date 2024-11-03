const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common.js");

const devServer = {
  port: 3000,
  open: true,
  hot: true,
};

const devConfig = {
  mode: "development",
  devServer: devServer,
};

module.exports = merge(commonConfig, devConfig);
