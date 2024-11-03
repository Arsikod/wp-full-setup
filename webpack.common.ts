const HtmlWebpackPlugin = require("html-webpack-plugin");

import { Configuration } from "webpack";

const config: Configuration = {
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 3 * 1024, // 20kb
          },
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin()],
  output: {
    clean: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

export default config;
