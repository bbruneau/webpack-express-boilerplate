import { Configuration, HotModuleReplacementPlugin } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";

const config: Configuration = {
  entry: {
    main: ["react-hot-loader/patch", "./src/client/index.ts"]
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
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
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
    new HotModuleReplacementPlugin(),
    new HTMLWebpackPlugin({
      template: "./src/client/index.html",
      xhtml: true
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  }
};

export default config;
