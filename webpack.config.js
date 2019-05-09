const path = require("path");

const webpack = require("webpack");

const paths = {
  assets: path.join(__dirname, "dist", "assets"),
  dist: path.join(__dirname, "dist"),
  source: path.join(__dirname, "src"),
  styles: path.join(__dirname, "src", "styles"),
};

module.exports = [
  {
    name: "client",
    mode: "development",
    entry: [
      "@babel/polyfill",
      "webpack-hot-middleware/client",
      path.join(paths.source, "clientEntry.js"),
    ],
    output: {
      path: paths.assets,
      filename: "[name].js",
      publicPath: "/assets/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [paths.source],
          use: {
            loader: "babel-loader",
            options: { babelrc: true }
          },
        },
        {
          test: /\.css$/,
          include: [paths.styles],
          use: [
            "isomorphic-style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    ],
  },
  {
    name: "server",
    mode: "development",
    target: "node",
    entry: path.join(paths.source, "serverEntry.js"),
    output: {
      path: paths.assets,
      filename: "server.js",
      libraryTarget: "commonjs2",
      publicPath: "/assets/"
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [paths.source],
          use: {
            loader: "babel-loader",
            options: { babelrc: true },
          },
        },
        {
          test: /\.css$/,
          include: [paths.styles],
          use: [
            "isomorphic-style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
              },
            },
          ],
        },
      ],
    },
  },
];
