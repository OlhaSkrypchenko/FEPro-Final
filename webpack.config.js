const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    mode: "none",
    devtool: false,
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "JobUp",
        favicon: "./static/favicon.ico",
      }),
    ],
  };
};
