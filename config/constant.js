var outDir = "../build/";
var releaseDir = "../release/";
var timeStamp = new Date().getTime() + "";

module.exports = {
    timeStamp: timeStamp,
    srcDir: "../src/",
    outDir: outDir,
    libPath: outDir + "lib/",
    releaseDir: releaseDir,
    distAppPath: "app/",
    publicPath: "./",
    libPathForRelease: releaseDir + "/lib/",
    libConfig: "./lib/",
    reactVendor: [
        "react",
        "react-dom",
        "react-transition-group",
        "react-router",
        "react-router-dom",
        "react-redux"
    ],
    libVendor: [
        "antd-mobile",
        "immer",
        "@reduxjs"
    ]
}