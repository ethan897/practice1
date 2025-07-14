const webpack = require("webpack");
const formatStats = require("./formatStats");

module.exports = function build(config) {
    const compiler = webpack(config);
    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) {
                reject(err);
                return
            }

            if (stats.hasErrors()) {
                reject("Build failed with errors.")
                return
            }

            const webpackLogPath = config.mode === "production" ? "./release" : "./build"
            console.log(formatStats(stats, webpackLogPath))
            resolve();
        });
    })
}
