const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = () => {
  return {
    mode: "development",
    devtool: false,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./static/template.html",
        title: "JobUp",
        favicon: "./static/favicon.ico",
      }),
    ],
  };
};
