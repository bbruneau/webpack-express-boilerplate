import express from "express";
// import path from "path";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../../config/webpack.dev";

const compiler = webpack(config);

const server = express();
server.use(webpackDevMiddleware(compiler, config.devServer));
server.use(webpackHotMiddleware(compiler));

server.listen(3000, () => {
  console.log("listening on 3000");
});
