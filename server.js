// SERVER
// ======

delete process.env.BROWSER;

const path = require("path");

const express = require("express");
const webpack = require("webpack");
const devMiddleware = require("webpack-dev-middleware");
const hotMiddleware = require("webpack-hot-middleware");
const hotServerMiddleware = require("webpack-hot-server-middleware");

const server = express();

const port = 3000;
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

server.use(
  devMiddleware(
    compiler, {
      publicPath: webpackConfig[0].output.publicPath,
      serverSideRender: true,
    },
  ),
);

server.use(
  hotMiddleware(
    compiler.compilers.find(
      compiler => compiler.name === "client"
    ),
  ),
);

server.use(hotServerMiddleware(compiler));

server.listen(port);
