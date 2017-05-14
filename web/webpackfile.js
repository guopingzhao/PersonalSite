const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")            //自动生成一个html 引入打包之后的js
const ExtractTextPlugin = require("extract-text-webpack-plugin")    //默认打包css 这些全部在js 里面  用这个可以分离出来 单独生成css文件  //生产环节会用到
const autoprefixer = require('autoprefixer')                       //自动加前缀
const CptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin') //压缩css

const HOST = "localhost"             //IP
const PORT = 8080                    //端口

module.exports = (env) => {
    //env 是npm script 运行webpack时传进来的  判断是否是开发环境
    const mode = (env && env.mode) || "dev"

    const options = {
        //开发工具
        devtool: mode === "dev" ? "source-map" : false,

        //开发服务器
        devServer: {
            contentBase: path.resolve(__dirname, "dist"),   //静态资源根目录
            compress: true,       //压缩
            port: PORT,           //端口
            hot: true,            //热更新
            inline: true,         //iframe 模式
            historyApiFallback: true,    //浏览器 history
            stats: {
                color: true,      //输出有颜色的信息
                errors: true,     //显示错误信息
                version: true,    //显示版本号
                warnings: true,   //显示警告
                progress: true    //显示进度
            }
        },

        //入口
        entry: mode === "dev"
            ? [
                "react-hot-loader",        //热更新
                `webpack-dev-server/client?http://${HOST}:${PORT}`,
                "webpack/hot/only-dev-server",
                path.resolve(__dirname, "src/index.js")
            ]
            : {
                app:path.resolve(__dirname, "src/index.js"),
            },

        //打包输出
        output: {
            path: path.resolve(__dirname, "buile"),
            filename: mode === "dev"
                ? "js/[name].js"
                : "js/[name].[chunkhash:8].js",
            chunkFilename: mode === "dev"
                ? "js/[name].js"
                : "js/[name].[chunkhash:8]js",
            publicPath: mode === "dev"
                ? `http://${HOST}:${PORT}/`
                : "/"
        },

        //模块加载器
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    use: [{
                        loader: "babel-loader"
                    }],
                    exclude: "/node_modules/",
                    include: [path.resolve("src")]        //只遍历src目录下的
                },
                {
                    test: /\.less$/,
                    use: mode === "dev"      //开发环境 css打包到js中
                        ? [
                            { loader: "style-loader" },          //loader 倒序执行  先执行 less-laoder
                            { loader: "css-loader", options: { minimize: false, sourceMap: true } },
                            { loader: "postcss-loader" },        //自动加前缀
                            { loader: "less-loader", options: { sourceMap: true } }
                        ]
                        : ExtractTextPlugin.extract({        //生产环境 把css单独分离出来
                            fallback: "style-loader",
                            use: [
                                "css-loader",
                                "postcss-loader",
                                {
                                    loader: "less-loader",
                                    query: {
                                        sourceMap: false,
                                    },
                                },
                            ],
                        })
                },
                {
                    test: /\.css$/,
                    use: mode === "dev"
                        ? [
                            { loader: "style-loader" },          //loader 倒序执行  先执行 less-laoder
                            { loader: "css-loader", options: { minimize: false, sourceMap: true } },
                            { loader: "postcss-loader" }
                        ]
                        : ExtractTextPlugin.extract({
                            fallback: "style-loader",
                            use: [
                                "css-loader",
                                "postcss-loader",
                                {
                                    loader: "less-loader",
                                    options: {
                                        sourceMap: false
                                    },
                                },
                            ],
                        })
                },
                {
                    test: /\.(jpg|jpeg|png|gif|cur|ico)$/,
                    use: [{
                        loader: 'file-loader',
                        options: {
                            name: "images/[name][hash:8].[ext]"          //遇到图片  生成一个images文件夹  名字.后缀的图片
                        }
                    }]
                },
                {
                    test: /\.(eot|ttf|svg|woff|woff2)$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "fonts/[name][hash:8].[ext]",
                            },
                        },
                    ],
                },
            ]
        },

        //自动补全后缀
        resolve: {
            extensions: ['.js', '.jsx','.json'],      //比如 test.js   可以写成 require('test')
            enforceExtension: false,
            modules: [
                path.resolve("src"),                  //比如 src/app/components/xx  可以写成 app/components/xx
                path.resolve("."),
                "node_modules",
            ]
        },

        //插件
        plugins: []
    }
    //根据开发环境不同  concat 不同的插件
    if (mode === "dev") {
        options.plugins = options.plugins.concat([
            new webpack.NamedModulesPlugin(),                   //打印更具可读性模块名称在浏览器控制台
            new webpack.NoEmitOnErrorsPlugin(),                 //错误不打断
            new webpack.DefinePlugin({                          //调试
                __DEBUG__: true,
            }),
            new webpack.HotModuleReplacementPlugin()           //热加载插件  
        ])
    } else {
        options.plugins = options.plugins.concat([
            new webpack.DefinePlugin({
                "process.env.NODE_ENV": JSON.stringify("production"),
                __DEBUG__: false,
            }),
            new webpack.optimize.UglifyJsPlugin({                 //压缩
                output:{
                    comments:false //移除所有注释
                },
                compress: {
                    warnings: false
                }
            }),
            new ExtractTextPlugin({                // 将打包文件中的css分离成一个单独的css文件
                filename: 'css/app.[contenthash:8].css',
                allChunks: true
            }),
            new webpack.optimize.CommonsChunkPlugin({   //在多个路由模块中使用的只引用一次
                async:"common-in-lazy",        
                minChunks:({ resource } = {} )=>(
                    resource &&
                    resource.includes('node_modules') &&
                    /axios/.test(resource)
                )
            }),
            new webpack.optimize.CommonsChunkPlugin({   //打包引用两次以上的模块
                async: 'used-twice',
                minChunks: (module, count) => (
                    count >= 2
                ),
            }),
            new webpack.optimize.CommonsChunkPlugin({ //自动化分离第三方依赖
                name:'vender',
                filename:"js/common.[chunkhash:8].js",
                minChunks:({ resource})=>(
                    resource &&
                    resource.indexOf('node_modules') >=0 &&
                    resource.match(/\.js$/)
                )
            }),
            new webpack.LoaderOptionsPlugin({    //laoder最小化
                minimize: true
            }),
            new CptimizeCssAssetsPlugin({          //压缩css  与 ExtractTextPlugin 配合使用
                cssProcessor: require('cssnano'),
                cssProcessorOptions:{discardComments:{removeAll: true }}, //移除所有注释
                canPrint:true        //是否向控制台打印消息
            })
        ])
    }
    options.plugins.push(
        new HtmlWebpackPlugin({
            title: "react-redux-webpack2 项目构建练习 ：）",
            filename: "index.html",           //自动把打包的js文件引入进去
            template: path.resolve(__dirname, "src/index.html"),  //模板文件
            hash: true,        //添加hash码
            inject: true     //注射所有资源到 body元素的底部     "head" || "body"  "body" == true
            // chunks: ["app"],     //允许只添加某些块
        })
    )
    return options
}