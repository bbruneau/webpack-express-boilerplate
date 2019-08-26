import express from "express";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware, {
  Options as WebpackDevMiddlewareOptions
} from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";

import config from "../../config/webpack.dev.babel";

const compiler = webpack(config);

const server = express();

server.use(
  webpackDevMiddleware(
    compiler,
    config.devServer as WebpackDevMiddlewareOptions
  )
);
server.use(webpackHotMiddleware(compiler));

server.listen(3000, () => {
  console.log("listening on 3000");
});
