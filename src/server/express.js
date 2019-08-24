import express from "express";
import path from "path";

const server = express();

const webpack = require("webpack");
const config = require("../../config/webpack.dev");
const compiler = webpack(config);

const webpackDevMiddleware = require("webpack-dev-middleware")(
  compiler,
  config.devServer
);

const webpackHotMiddleware = require("webpack-hot-middleware")(compiler);

server.use(webpackDevMiddleware);
server.use(webpackHotMiddleware);

server.listen(3000, () => {
  console.log("listening on 3000");
});
