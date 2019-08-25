import webpack from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";

module.exports = {
  entry: {
    main: ["./src/client/index.ts"]
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/"
  },
  devServer: {
    contentBase: "dist",
    hot: true,
    overlay: true
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }]
      },
      {
        test: /\.html$/,
        use: "html-loader"
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/client/index.html"
    })
  ]
};
