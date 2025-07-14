const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const constant = require("./constant");

const isDevelopment = process.env.NODE_ENV === "development";

const commonCssLoader = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: isDevelopment ? "../" : "../../" // 优化：根据环境动态设置 publicPath
        }
    },
    "css-loader",
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    "autoprefixer" // 自动加前缀
                ]
            }
        }
    }
];

const commonLessLoader = [
    ...commonCssLoader,
    "less-loader" // 处理 Less 文件
];

const commonCssModulesLoader = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            publicPath: isDevelopment ? "../" : "../../" // 优化：根据环境动态设置 publicPath
        }
    },
    {
        loader: "css-loader",
        options: {
            modules: {
                namedExport: false,
                localIdentName: "[name]__[local]--[hash:base64:5]",
                exportLocalsConvention: "camelCase"
            }
        }
    },
    {
        loader: "postcss-loader",
        options: {
            postcssOptions: {
                plugins: [
                    require("autoprefixer") // 自动加前缀
                ]
            }
        }
    }
];
const commonLessModulesLoader = [
    ...commonCssModulesLoader,
    "less-loader" // 处理 Less 文件
];

module.exports = {
    entry: {
        index: path.resolve(__dirname, constant.srcDir + "index.jsx")
    },
    module: {
        rules: [
            // JavaScript, TypeScript 处理
            {
                test: /\.(js|cjs|mjs|jsx|ts|tsx)$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            cacheDirectory: true // 启用缓存，提高构建速度
                        }
                    },
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true // 只进行转译，不进行类型检查
                        }
                    }
                ],
                exclude: /node_modules/
            },

            // 处理 CSS Modules 的 LESS 文件
            {
                test: /\.module\.less$/,
                use: commonLessModulesLoader
            },

            // 处理 CSS Modules 的 CSS 文件
            {
                test: /\.module\.css$/,
                use: commonCssModulesLoader
            },

            // 处理全局的 LESS 文件
            {
                test: /\.less$/,
                exclude: /\.module\.less$/, // 排除 .module.less 文件，防止与 CSS Modules 冲突
                use: commonLessLoader
            },

            // 处理全局的 CSS 文件
            {
                test: /\.css$/,
                exclude: /\.module\.css$/, // 排除 .module.css 文件，防止与 CSS Modules 冲突
                use: [
                    ...commonCssLoader
                ]
            },

            // 图片资源处理
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: "asset/resource",
                generator: {
                    filename: "app/images/[name].[hash][ext]"
                }
            }
        ]
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
        alias: {
            "@": path.resolve(__dirname, "../src"),
            "@mocks": path.resolve(__dirname, "../mocks")
        }
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: isDevelopment ? "css/[name].css" : "app/css/[name].[fullhash].css",
            chunkFilename: isDevelopment ? "css/[id].css" : "app/css/[id].[fullhash].css"
        })
    ]
};