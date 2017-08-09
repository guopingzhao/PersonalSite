const webpack = require("webpack")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const ImageminPlugin = require('imagemin-webpack-plugin').default
const imageminMozjpeg = require("imagemin-mozjpeg")
const autoprefixer = require("autoprefixer")
const flexbugs = require('postcss-flexbugs-fixes')
const CompressionPlugin = require('compression-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require("path")
module.exports = {
  entry: {
    app: "./src/index.js"
  },
  output: {
    path: path.resolve("test"),
    filename: "js/[name].js",
    chunkFilename: "js/[name].[id].js"
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
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
      "process.env.PROD": false
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true
      }
    }),
    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i,
      maxConcurrency: Infinity,
      optipng: {
        quality: 80
      },
      plugins: [
        imageminMozjpeg({
          quality: 80,
          progressive: true
        })
      ]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      children: true,
      async: "common-in-lazy",
      minChunks: ({ resource } = {}) => (
        resource &&
        resource.includes("node_modules") &&
        /axios/.test(resource)
      )
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      children: true,
      async: "used-twice",
      minChunks: (module, count) => (count >= 2)
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "app",
      filename: "js/common.[chunkhash:8].js",
      minChunks: ({ resource }) => (
        resource &&
        resource.indexOf("node_modules") >= 0 &&
        resource.match(/\.jsx?$/)
      )
    }),
    new CompressionPlugin({
      asset: "[path].gz",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0
    }),
    new BundleAnalyzerPlugin()
  ],
}