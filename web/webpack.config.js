const merge = require("webpack-merge")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = env => {
  const baseConfig = {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve("src")],
          loader: "babel-loader",
        },
        {
          test: /\.(png|jpg|gif)$/,
          use: [
            {
              loader: "file-loader",
              options: { name: "images/[name].[ext]" },
            },
          ],
        },
        {
          test: /\.(eot|ttf|svg|woff|woff2)$/,
          use: [
            {
              loader: "file-loader",
              options: { name: "fonts/[name].[ext]" },
            },
          ],
        },
      ],
    },
    resolve: {
      modules: [
        path.resolve("src"),
        path.resolve("."),
        "node_modules"
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: "index.html",
        template: "src/index.html",
        inject: true
      })
    ]
  }

  if (!env || !env.prod) {
    return merge(baseConfig, require("./config/dev"))
  }

  if (env && env.prod === "test") {
    return merge(baseConfig, require("./config/test"))
  }

  if (env && env.prod === "prod") {
    return merge(baseConfig, require("./config/prod"))
  }
}
