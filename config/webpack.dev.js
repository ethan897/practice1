var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const StylelintPlugin = require("stylelint-webpack-plugin");
var { merge } = require("webpack-merge");
var constant = require("./constant");
var common = require("./webpack.common");
const DotenvWebpack = require("dotenv-webpack");

module.exports = merge(common, {
    mode: "development",
    devtool: "eval-source-map",
    output: {
        path: path.resolve(__dirname, constant.outDir),
        publicPath: "./",
        filename: "[name].[fullhash].js",
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, constant.srcDir + "tpl/dev.html"),
            inject: "body",
            xhtml: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, constant.srcDir + "utils/sensorsdata.min.js"), to: path.resolve(__dirname, constant.outDir + "lib/sensorsdata.min.js") },
                { from: path.resolve(__dirname, constant.srcDir + "utils/vconsole.min.js"), to: path.resolve(__dirname, constant.outDir + "lib/vconsole.min.js") },
                { from: path.resolve(__dirname, "./mockServiceWorker.js"), to: path.resolve(__dirname, "../build") }
            ]
        }),
        new BrowserSyncPlugin(
            {
                host: "localhost",
                port: 3456,
                server: {
                    baseDir: [
                        path.resolve(__dirname, constant.outDir)
                    ]
                }
            }
            , {
                reload: true
            }
        ),
        new DotenvWebpack({
            path: path.resolve(__dirname, "./.env.localhost")
        }),
        new StylelintPlugin({
            files: "src/**/*.{css,scss,less}", // 配置检查哪些文件
            fix: false, // 自动修复问题
            quiet: false, // 是否输出所有的警告和错误，false 表示 Stylelint 将显示所有警告和错误。
            failOnError: false // 是否在发现错误时停止构建, 是
        })
    ],
    devServer: {
        host: "localhost",
        static: {
            publicPath: "/",
            directory: path.join(__dirname, constant.outDir) // 静态文件目录
        },
        watchFiles: ["src/**/**"],
        liveReload: true,
        compress: true,
        port: 8080,// 服务器端口
        open: false,// 启动时自动打开浏览器
        hot: true,// 热重启
        allowedHosts: "all",
        historyApiFallback: true,// 处理SPA路由
        client: {
            overlay: true// 在浏览器中显示编译错误
        },
        devMiddleware: {
            publicPath: constant.outDir, // 你的publicPath
            writeToDisk: true // 这会将生成的资源写入磁盘
        },
        proxy: [
            {
                context: ["/jian"],
                target: "https://www.jianshu.com/asimov",
                changeOrigin: true,
                ws: true,//支持websocket通信机制
                pathRewrite: {
                    "^/jian": ""
                }
            },
            {
                context: ["/zhi"],
                target: "https://www.zhihu.com/",
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    "^/zhi": ""
                }
            }
        ]
    }
})
