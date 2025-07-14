
const path = require("path");

module.exports = {
    rootDir: path.resolve(__dirname, "../"),
    collectCoverage: true, // 是否收集测试时的覆盖率信息  
    collectCoverageFrom: [ // 哪些文件需要收集覆盖率信息  
        "src/utils/commonUtils.js",
        "src/pages/**/*.{js,jsx,mjs}"
    ],
    setupFiles: [
        "react-app-polyfill/jsdom"
    ],
    setupFilesAfterEnv: [
        "<rootDir>/setupTests.js"
    ],
    testEnvironment: "jsdom",
    coverageDirectory: "<rootDir>/test/coverage", // 输出覆盖信息文件的目录  
    coveragePathIgnorePatterns: [ // 统计覆盖信息时需要忽略的文件  
        "/node_modules/"
    ],
    moduleNameMapper: { // 主要用于与webpack的resolve.alias匹配，注意正则写法  
        "@/(.*)$": "<rootDir>/src/$1",
        "\\.(css|less)$": "identity-obj-proxy"
    },
    testMatch: [ // 匹配的测试文件
        "<rootDir>/test/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    //testURL: "http://localhost:8080", // 运行环境下的url  
    testEnvironmentOptions: {
        url: "http://localhost:8080" // 设置测试的基础URL
    },
    transform: {
        "^.+\\.(js|jsx|mjs|ts|tsx)$": "<rootDir>/node_modules/babel-jest"
    },
    transformIgnorePatterns: [ // 转换时需要忽略的文件
        "/node_modules/(?!lodash-es).+\\.js$"
    ],
    resetMocks: true
}
