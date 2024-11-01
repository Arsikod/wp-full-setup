const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env, argv) => ({
  mode: argv.mode,
  plugins: [
    new HtmlWebpackPlugin({
      context: {
        title: "Demo",
      },
    }),
  ],
});
