const webpack = require("webpack")
const merge = require("webpack-merge")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin") 
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const autoprefixer = require("autoprefixer")                                  //自动加前缀
const CptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin") //压缩css

const PORT = 8000

module.exports = env => {
  const baseConfig = {
    output: {
      path: path.resolve("build"),
      filename: "js/[name].js",
      chunkFilename: "js/[id].js"
    },

    module: {
      rules: [
        {
          test: /\.js$/,
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
        inject: true,
        chunks: ["vender","index"],
      }),
    ],
  }

  if (!env || !env.prod) {
    return merge(baseConfig, {
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
              { loader: "style-loader", options: { sourceMap: true } },
              { loader: "css-loader", options: { sourceMap: true } },
              {
                loader: "postcss-loader",
                options: {
                  sourceMap: true,
                  plugins: [
                    require("autoprefixer")({
                      browsers: ["last 2 versions", "android >= 4.4"],
                    }),
                  ],
                },
              },
              { loader: "less-loader", options: { sourceMap: true } },
            ],
          },
        ],
      },
      plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
          DEBUG: true,
        }),
      ],

      devtool: "cheap-source-map",

      devServer: {
        contentBase: path.resolve("dist"),
        hot: true,
        publicPath: "/",
        historyApiFallback: true,
        compress: false,
        stats: { colors: true },
        host: "0.0.0.0",
        port: PORT
      },
    })
  } else {
    return merge(baseConfig, {
      entry: {
        index: "./src/index.js"
      },

      output: {
        filename: "js/[name].[chunkhash:8].js",
        chunkFilename: "js/[id].[chunkhash:8].js",
      },

      module: {
        rules: [
          {
            test: /\.less$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: [
                "css-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    plugins: [
                      require("autoprefixer")({
                        browsers: ["last 2 versions", "android >= 4.4"],
                      }),
                    ],
                  },
                },
                "less-loader",
              ],
            }),
          },
        ],
      },
      plugins: [
        new ExtractTextPlugin({
          filename: "css/[name].[contenthash:8].css",
          allChunks: true,
        }),
        new CptimizeCssAssetsPlugin({          
          cssProcessor: require("cssnano"),
          cssProcessorOptions: {discardComments: {removeAll: true }}, 
          canPrint: true        
        }),
        new webpack.DefinePlugin({
          DEBUG: false,
          "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        new webpack.LoaderOptionsPlugin({
          minimize: true,
          debug: false,
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({   //在多个路由模块中使用的只引用一次
          async: "common-in-lazy",        
          minChunks: ({resource} = {} )=>(
            resource &&
            resource.includes("node_modules") &&
            /axios/.test(resource)
          )
        }),
        new webpack.optimize.CommonsChunkPlugin({   //引用两次以上的模块加入used-twice中
          async: "used-twice",
          minChunks: 2
        }),
        new webpack.optimize.CommonsChunkPlugin({   //自动化分离第三方依赖
          name: "vender",
          filename: "js/common.[chunkhash:8].js",
          minChunks: ({resource})=>(
            resource &&
            resource.indexOf("node_modules") >=0 &&
            resource.match(/\.js$/)
          )
        })
      ],
    })
  }
}
