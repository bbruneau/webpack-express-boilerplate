import express from "express";
import path from "path";
import webpack from "webpack";
import webpackDevMiddleware, {
  Options as WebpackDevMiddlewareOptions
} from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import colors from "colors/safe";

import config from "../../config/webpack.dev.babel";

const { PORT = 3000 } = process.env;

const compiler = webpack(config);

const server = express();

server.use(
  webpackDevMiddleware(
    compiler,
    config.devServer as WebpackDevMiddlewareOptions
  )
);
server.use(webpackHotMiddleware(compiler));

server.listen(PORT, () => {
  const msg = `Server listening on port ${PORT}`;
  const line = Array.from(Array(msg.length + 6))
    .map((_, i) => `=`)
    .join("");
  console.log(
    colors.rainbow(`
${line}
   ${msg}   
${line}
  `)
  );
});
