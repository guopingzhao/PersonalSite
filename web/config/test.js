const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const autoprefixer = require("autoprefixer")
const flexbugs = require('postcss-flexbugs-fixes')
const path = require("path")
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve("test"),
    filename: "js/[name].js",
    chunkFilename: "js/[id].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          publicPath: "../",
          use: [
            "css-loader",
            {
              loader: "postcss-loader",
              options: {
                plugins: [
                  flexbugs,
                  autoprefixer({
                    browsers: ["last 6 versions", "android >= 4.0", "ios >= 5.0", '>1%', 'Firefox ESR', 'not ie < 9']
                  })
                ]
              }
            },
            "less-loader"
          ]
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "css/[name].[contenthash:8].css",
      allChunks: true
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.PROD": false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({   //在多个路由模块中使用的只引用一次
      async: "common-in-lazy",
      minChunks: ({ resource } = {}) => (
        resource &&
        resource.includes("node_modules") &&
        /axios/.test(resource)
      )
    }),
    new webpack.optimize.CommonsChunkPlugin({   //引用两次以上的模块加入used-twice中
      async: "used-twice",
      minChunks: (module, count) => (count > 1)
    }),
    new webpack.optimize.CommonsChunkPlugin({   //自动化分离第三方依赖
      name: "vender",
      filename: "js/common.[chunkhash:8].js",
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf("node_modules") >= 0 &&
        resource.match(/\.js$/)
      )
    })
  ],
}