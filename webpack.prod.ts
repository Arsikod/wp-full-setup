import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { PurgeCSSPlugin } from "purgecss-webpack-plugin";
import commonConfig from "./webpack.common";
import { glob } from "glob";
import { merge } from "webpack-merge";
import path from "path";

const PATHS = {
  src: path.join(__dirname, "src"),
};

const prodConfig: Configuration = {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "styles/[name].[contenthash].css",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${PATHS.src}/**/*`, { nodir: true }),
      safelist: [],
      blocklist: [],
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
  },
};

module.exports = merge(commonConfig, prodConfig);
