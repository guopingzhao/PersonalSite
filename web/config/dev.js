const webpack = require("webpack")
const autoprefixer = require("autoprefixer")
const flexbugs = require('postcss-flexbugs-fixes')
const path = require("path")
const PORT = 80
module.exports = {
  entry: {
    index: [
      "react-hot-loader/patch",
      `webpack-dev-server/client?http://localhost:${PORT}`,
      "webpack/hot/only-dev-server",
      "./src/index.js",
    ],
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          "style-loader",
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
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ],

  devtool: "cheap-source-map",

  devServer: {
    contentBase: path.resolve("dist"),
    hot: true,
    publicPath: "/",
    historyApiFallback: true,
    compress: false,
    stats: { colors: true },
    host: "localhost",
    port: PORT,
    proxy: [
      {
        context: ["/dics/dc-api/**", "/dics/visualization/**", "/dics/data-api/**"],
        target: "localhost:3000",
        secure: false
      },
      {
        context: ["/socket.io/**"],
        target: "localhost:3000",
        secure: false,
        bypass: function(req, res, proxyOptions){
          console.log("socket.io代理", req, res, proxyOptions)
        }
      }
    ]
  }
}