const devConfig = require("./webpack.prod");
const { merge } = require("webpack-merge");
const DotenvWebpack = require("dotenv-webpack");
const path = require("path");
const build = require("./build");
const config = merge(devConfig, {
    plugins: [
        new DotenvWebpack({
            path: path.resolve(__dirname, "./.env.development")
        })
    ]
});

build(config);
