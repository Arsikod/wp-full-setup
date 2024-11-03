const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
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
};
