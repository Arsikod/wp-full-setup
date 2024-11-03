import { Configuration } from "webpack";
import { Configuration as ServerConfig } from "webpack-dev-server";
import commonConfig from "./webpack.common";
import { merge } from "webpack-merge";

const devServer: ServerConfig = {
  port: 3000,
  open: true,
  hot: true,
};

const devConfig: Configuration = {
  mode: "development",
  devServer: devServer,
};

module.exports = merge(commonConfig, devConfig);
