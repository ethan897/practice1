const prodConfig = require("./webpack.prod");
const { merge } = require("webpack-merge");
const DotenvWebpack = require("dotenv-webpack");
const path = require("path");
const build = require("./build");
const config = merge(prodConfig, {
    plugins: [
        new DotenvWebpack({
            path: path.resolve(__dirname, "./.env.production")
        })
    ]
});

build(config);
