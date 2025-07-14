var common = require("./webpack.common");
var path = require("path");
var CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CopyWebpackPlugin = require("copy-webpack-plugin");
var TerserPlugin = require("terser-webpack-plugin");
var constant = require("./constant");
var { merge } = require("webpack-merge");
var WebpackBar = require("webpackbar");
var FriendlyErrorsWebpackPlugin = require("@soda/friendly-errors-webpack-plugin");
const JavaScriptObfuscator = require("webpack-obfuscator");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

function getModulePackageName(module) {
    if (!module.context) {return null;}
    const nodeModulesPath = path.join(__dirname, "../node_modules/");
    if (module.context.substring(0, nodeModulesPath.length) !== nodeModulesPath) {
        return null;
    }
    const moduleRelativePath = module.context.substring(nodeModulesPath.length);
    const [moduleDirName] = moduleRelativePath.split(path.sep);
    let packageName = moduleDirName;
    if (packageName && packageName.match("^_")) {
        packageName = packageName.match(/^_(@?[^@]+)/)[1];
    }
    return packageName;
}
module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, constant.releaseDir),
        publicPath: constant.publicPath,
        filename: "app/js/[name]." + constant.timeStamp + ".[fullhash].js",
        clean: true
    },
    plugins: [
        new WebpackBar(),
        new FriendlyErrorsWebpackPlugin({
            clearConsole: false
        }),
        new HtmlWebpackPlugin({
            // favicon: path.resolve(__dirname, constant.srcDir + "styles/images/zxjt_login.png"),
            filename: path.resolve(__dirname, constant.releaseDir + "main.html"),
            template: path.resolve(__dirname, constant.srcDir + "tpl/index.html"),
            inject: "body",// 将资源注入生成html的body标签底部
            chunksSortMode: "manual",
            xhtml: true
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: path.resolve(__dirname, constant.srcDir + "utils/sensorsdata.min.js"), to: path.resolve(__dirname, constant.releaseDir + "lib/sensorsdata.min.js") }
            ]
        }),
        // new JavaScriptObfuscator({
        //     rotateUnicodeArray: true
        // }, ["excluded_bundle_name.js"]),
        new BundleAnalyzerPlugin({
            analyzerMode: "static",
            reportFilename: "../report/analyzer-report.html",
            openAnalyzer: false,// 不自动打开浏览器
            generateStatsFile: false,
            statsOptions: { source: false } // 排除源代码内容，加快生成速度  
        })
    ],
    stats: "errors-only",
    optimization: {
        minimizer: [
            new CssMinimizerPlugin({
                parallel: true
            }),
            new TerserPlugin({
                parallel: true,
                extractComments: false,
                exclude: /\/sensorsdata\.min\.js/,
                terserOptions: {
                    compress: {
                        passes: 2,
                        drop_debugger: true,
                        drop_console: true
                    },
                    format: {
                        comments: false
                    },
                    ecma: 5,
                    mangle: false
                }
            })
        ],
        splitChunks: {
            chunks: "all",
            minSize: 0,
            cacheGroups: {
                babelRuntime: {
                    chunks: "all",
                    test: /[\\/]node_modules[\\/]@babel[\\/]runtime[\\/]/,
                    name: "babel-runtime",
                    priority: 15
                },
                reactRel: {
                    chunks: "all",
                    name: "reactRel",
                    test: (module) => {
                        const packageName = getModulePackageName(module) || "";
                        if (packageName) {
                            return constant.reactVendor.includes(packageName);
                        }
                        return false;
                    },
                    priority: 10
                },
                libRel: {
                    chunks: "all",
                    name: "libRel",
                    test: (module) => {
                        const packageName = getModulePackageName(module) || "";
                        if (packageName) {
                            return constant.libVendor.includes(packageName);
                        }
                        return false;
                    },
                    priority: 9
                },
                vendor: {
                    chunks: "initial",
                    name: "vendors",
                    test({ resource }) {
                        return /[\\/]node_modules[\\/]/.test(resource);
                    },
                    priority: 8
                }
            }
        },
        runtimeChunk: {
            name: entrypoint => `runtime-${entrypoint.name}`
        }
    },
    performance: {
        hints: false
    }
})
