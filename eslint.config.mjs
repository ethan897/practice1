import globals from "globals";// 常见全局变量的库（如 window、document 等）
import pluginJs from "@eslint/js";// ESLint 官方提供的 JavaScript 规则插件

import tseslint from "typescript-eslint";// TypeScript ESLint 插件，允许解析和检查 TypeScript 代码
import tseslintPlugin from "@typescript-eslint/eslint-plugin";
import tseslintParser from "@typescript-eslint/parser";

import reactPlugin from "eslint-plugin-react";// React 的 ESLint 插件，用于解析和检查 jsx 文件
import reactHooksPlugin from "eslint-plugin-react-hooks";

import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJest from "eslint-plugin-jest";
import babelParser from "@babel/eslint-parser";// 

// 引入在flat风格中配置还没适配的插件
// import { FlatCompat } from "@eslint/eslintrc";
// import { fileURLToPath } from "node:url";
// import path from "node:path";
// import js from "@eslint/js";


// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
//   baseDirectory: __dirname,
//   recommendedConfig: js.configs.recommended,
//   allConfig: js.configs.all
// });

const globalConfig = [{
    name: "global config",
    ignores: ["node_modules/**", "dist/**", "build/**", "public/", "config/"],
    languageOptions: {
        globals: {
            ...globals.es2022,
            ...globals.browser,
            ...globals.node,
            ...globals.jest
        },
        ecmaVersion: "latest",
        sourceType: "module",//将文件视为普通的 JavaScript 脚本
        parserOptions: {
            warnOnUnsupportedTypeScriptVersion: false
        }
    },
    settings: {
        "import/resolver": {
            webpack: {
                "config": "./config/webpack.common.js"
            },
            alias: {
                map: [
                    ["@", "./src"] // "@" 指向 "src" 目录  
                ],
                extensions: [".js", ".jsx", ".ts", ".tsx"] // 指定需要解析的文件扩展名  
            }
        },
        react: {
            pragma: "React",
            version: "detect"// 指定react 版本
        }
    },
    // 配置插件
    plugins: {
        react: reactPlugin,
        "react-hooks": reactHooksPlugin,
        import: eslintPluginImport
    },
    // 配置规则，取自原脚手架
    rules: {
    //官方文档 http://eslint.org/docs/rules/
    //警告
        "quotes": [
            2,
            "double"
        ], //建议使用双引号
        "no-extra-boolean-cast": 1, //多余的感叹号转布尔型
        "no-extra-semi": 1, //多余的分号
        "no-extra-parens": 1, //多余的括号
        "no-empty": 1, //空代码块
        "no-use-before-define": [
            1,
            "nofunc"
        ], //使用前未定义
        "no-unused-vars": 1, //变量定义后未使用
        //常见错误
        "indent": [
            2,
            4
        ], //定义缩进为4个空格
        "comma-dangle": [
            2,
            "never"
        ], //定义数组或对象最后多余的逗号
        "no-debugger": 2, //debugger 调试代码未删除
        "no-constant-condition": 2, //常量作为条件
        "no-dupe-args": 2, //参数重复
        "no-dupe-keys": 2, //对象属性重复
        "no-duplicate-case": 2, //case重复
        "no-empty-character-class": 2, //正则无法匹配任何值
        "no-invalid-regexp": 2, //无效的正则
        "no-func-assign": 2, //函数被赋值
        "valid-typeof": 2, //无效的类型判断
        "no-unreachable": 2, //不可能执行到的代码
        "no-unexpected-multiline": 2, //行尾缺少分号可能导致一些意外情况
        "no-sparse-arrays": 2, //数组中多出逗号
        "no-shadow-restricted-names": 2, //关键词与命名冲突
        "no-undef": 2, //变量未定义
        "no-cond-assign": 2, //条件语句中禁止赋值操作
        "no-native-reassign": 2, //禁止覆盖原生对象
        //代码风格优化
        "no-else-return": 1, //在else代码块中return，else是多余的
        "no-multi-spaces": 1, //不允许多个空格
        "key-spacing": [
            1,
            {
                "beforeColon": false,
                "afterColon": true
            }
        ], //object直接量建议写法 : value前留空格, key后面不留空格
        "block-scoped-var": 2, //变量应在外部上下文中声明，不应在{}代码块中
        "consistent-return": 2, //函数返回值可能是不同类型
        "accessor-pairs": 2, //object getter/setter方法需要成对出现
        "dot-location": [
            2,
            "property"
        ], //换行调用对象方法  点操作符应写在行首
        "no-lone-blocks": 2, //多余的{}嵌套
        "no-labels": 2, //无用的标记
        "no-extend-native": 2, //禁止扩展原生对象
        "no-floating-decimal": 2, //浮点型需要写全 禁止.1 或 2.写法
        "no-loop-func": 2, //禁止在循环体中定义函数
        "no-new-func": 2, //禁止new Function(...) 写法
        "no-self-compare": 2, //不允与自己比较作为条件
        "no-sequences": 2, //禁止可能导致结果不明确的逗号操作符
        "no-throw-literal": 2, //禁止抛出一个直接量 应是Error对象
        "no-return-assign": [
            2,
            "always"
        ], //不允return时有赋值操作
        "no-redeclare": [
            2,
            {
                "builtinGlobals": true
            }
        ], //不允许重复声明变量
        "no-unused-expressions": [
            2,
            {
                "allowShortCircuit": true,
                "allowTernary": true
            }
        ], //不执行的表达式
        "no-useless-call": 2, //无意义的函数call或apply
        "no-useless-concat": 2, //无意义的string concat
        "no-void": 2, //禁用void
        "no-with": 2, //禁用with
        "space-infix-ops": 2, //操作符前后空格
        "no-warning-comments": [
            2,
            {
                "terms": [
                    "todo",
                    "fixme",
                    "any other term"
                ],
                "location": "anywhere"
            }
        ], //标记未写注释
        "curly": 1, //if、else、while、for代码块用{}包围
        "no-multiple-empty-lines": [
            1,
            {
                "max": 2
            }
        ], //空行最多不能超过2行
        // 其他规则...
        "react/no-unknown-property": ["error", { "ignore": ["styleName"] }]
    }
}]

const babelFlagConfig = [{
    name: "babel-parser",
    languageOptions: {
        parser: babelParser,
        parserOptions: {
            babelOptions: {
                babelrc: false,
                browserslistConfigFile: false,
                presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"],
                configFile: "./.babelrc"
            },
            requireConfigFile: false
        }
    }
}]

const reactFlatConfig = [{
    name: "react-eslint",
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
        react: reactPlugin,
        "react-hooks": reactHooksPlugin
    },
    languageOptions: {
        ...reactPlugin.configs.recommended.languageOptions
    },
    rules: {
        ...reactPlugin.configs.recommended.rules,
        "react/react-in-jsx-scope": 0
    },
    settings: {
        react: {
            version: "detect"// 需要显示安装 react
        }
    }
}]

const tsFlatConfig = [{
    name: "typescript-eslint/base",
    languageOptions: {
        parser: tseslintParser,
        sourceType: "module",
        parserOptions: {
            project: "./tsconfig.json" // 指定 tsconfig.json 文件路径
        }
    },
    files: ["**/*.{ts,tsx}"],
    ignores: ["node_modules/**", "dist/**", "build/**", "public/", "config/"],
    // custom rules or use recommended rules
    rules: {
        ...tseslint.configs.recommended.rules,// 使用 TypeScript ESLint 推荐的规则配置
        ...tseslintPlugin.configs.recommended.rules
    },
    plugins: {
    // ts 语法特有的规则，例如泛型
        "@typescript-eslint": tseslintPlugin
    }
}]

const testFlagConfig = [{
    // 测试文件规则
    files: ["**/*.test.{js,jsx,ts,tsx}", "**/__tests__/**/*.{js,jsx,ts,tsx}"],
    plugins: {
        jest: eslintPluginJest
    },
    rules: {
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
}]

export default [
    // 推荐的插件
    pluginJs.configs.recommended,// 使用 ESLint 官方推荐的 JavaScript 规则配置
    // ...tseslint.configs.recommended,
    reactPlugin.configs.flat.recommended,// 使用 React 插件提供的基本规则配置
    // 还未兼容flat风格的插件
    // ...compat.extends("eslint-config-my-config"),
    // 自定义配置
    ...globalConfig,
    ...babelFlagConfig,
    ...reactFlatConfig,
    ...tsFlatConfig,
    ...testFlagConfig
]