## 注意如需引入新的依赖，请按照以下步骤执行！！
### 1. 自查引入依赖license是否允许商用
### 2. 组织评审引入依赖
### 3. 因蜻蜓点金app android/ios端内嵌浏览器版本较低，引入依赖后需要在android/ios/browser端均完成兼容性测试

## node 版本
    node: 18.20.4
## 使用
### 安装依赖
    yarn
### 开发
    yarn dev
### 开发环境打包
    yarn build:dev
### 打包包含chii
    yarn build:dev:chii
### 生产环境打包
    yarn build:prod


### 单元测试

    yarn test

### 样式检查
    yarn lint:css
### 样式修复
    yarn lint:css:fix 

## 脚手架依赖项及配置说明

### 运行时依赖项（dependencies）

#### 依赖包

* @reduxjs/toolkit
  Redux 官方提供的一个工具包
* antd-mobile
  蚂蚁金服Ant Design设计语言的移动端React UI组件库
* axios
  发送请求
* framer-motion
  为React应用程序提供强大的动画支持
* lodash-es
  一个一致性、模块化、高性能的 JavaScript 实用工具库
* react
  提供react核心API和功能，负责定义组件的结构、逻辑以及组件之间如何交互
* react-dom
  是React 与浏览器 DOM 交互的桥梁，提供了渲染render方法
* react-redux
  是React 与 Redux 状态管理库之间的桥梁，可以更加高效集成redux
* redux
  一个独立于 React、Angular、Vue 或任何其他 UI 库的状态容器，用于管理应用的状态
* redux-thunk
  Redux 的一个中间件，可以实现在 action creators 中执行异步操作

#### 引入依赖项

* Bonree one

### 开发时依赖项（devDependencies）

#### 类型检查

* prop-types
  类型检查和验证，常用于props
* typescript-eslint
  使ESLint能够在TypeScript上运行

#### typescript配置

* @types/react
  为 React 提供了必要的类型定义
* @types/react-dom
  为 `react-dom` 提供类型定义
* @types/react-transition-group
  在 TypeScript 项目中为 `react-transition-group` 提供类型定义
* ts-loader
  在 Webpack 的构建过程中，将 TypeScript 代码转换为 JavaScript 代码
* typescript
  指定项目需要使用的TypeScript版本，并允许安装该版本范围内的更新次版本
* typescript-eslint
  扩展 ESLint 的功能，为 TypeScript 项目提供全面的代码检查

#### css样式配置

* postcss
  一个工具，通过插件系统来实现对CSS的解析、转换和优化
* postcss-loader
  一个工具，通过插件结合后提供处理css功能，如自动前缀添加，可与css-loader、style-loader配合使用
* mini-css-extract-plugin
  一个Webpack 插件，提取css，生成独立的css文件进而浏览器缓存css文件，支持异步加载
* css-loader
  在使用 webpack 打包工具时，css-loader可以加载和处理css文件，如识别@import和url())、确保外部资源被正确打包
* css-minimizer-webpack-plugin
  主要作用是优化和压缩 CSS 代码。通过去除 CSS 中的冗余代码、合并选择器、缩短属性名等方式，减少最终生成的 CSS 文件的大小，从而提升网页的加载速度和性能
* autoprefixer
  自动为需要的CSS属性添加相应的浏览器前缀（如-webkit-、-moz-、-ms-、-o-等）

#### babel配置

* @babel/core
  核心包，提供api进行代码转化
* @babel/eslint-parser
  一个在ESLint中使用的Babel解析器包装器，其主要作用在于使ESLint能够理解和校验通过Babel转换的JavaScript代码
* @babel/plugin-transform-modules-umd
  将 ES6 模块（使用 `import` 和 `export` 语法的模块）转换为 UMD（Universal Module Definition）格式的模块
* @babel/plugin-transform-runtime
  babel转译插件，可避免全局作用域污染、按需引入polyfills、保持模块化语义等
* @babel/preset-env
  使用最新的 JavaScript 语法时对目标环境所支持的语法设置相应的语法转换插件（以及可选的 polyfills），也能让打出来的 JavaScript 包更小！
* 注意：babel/preset-env与babel/plugin-transform-runtime同时使用时，（1）不要重复引入Polyfill,避免重复或冲突，如果useBuiltIns已管理core-js,不要在transform-runtime中再启用corejs（2）如果目标是浏览器且需全局兼容，优先使用useBuiltIns；如果是类库开发，避免全局污染，优先使用transform-runtime
* @babel/preset-react
  在 Babel 的编译过程中支持 React JSX 语法的转换
* @babel/preset-typescript
  将 TypeScript 代码转换为纯 JavaScript 代码
* @babel/runtime
  在代码转换过程中提供模块化的运行时助手（helpers）和可能的 polyfill 功能（它本身不直接包含 polyfill，但可以通过配置与 `@babel/plugin-transform-runtime` 插件结合使用
* @babel/runtime-corejs3
  提供一组基于 core-js 3 的非全局化的帮助函数和 API polyfill
* babel-jest
  一个babel插件，集成babel到jest，允许jest测试框架处理通过babel转换的代码
* babel-loader
  在使用Webpack模块打包时，编译新语法javascript（如ES6+、TypeScript等）为旧版本JavaScript代码（如ES5）
* babel-plugin-import
  将对第三方库的import语句自动转换成按需引入，并自动进行按需加载配置

#### 兼容性&&运行补丁

* core-js
  提供了ECMAScript标准中缺失的功能和特性的补丁，新功能的es'api'转换为大部分现代浏览器都可以支持运行的一个'api' 补丁包集合
* react-app-polyfill
  提供了针对老旧浏览器的polyfills，如Internet Explorer 9、10、11等。这些polyfills可以模拟现代浏览器中的API和功能，如 `Promise`、`fetch`、`Object.assign`等，使得React应用能够在这些老旧浏览器中运行。

#### ESLint配置说明

* eslint
  核心包
* eslint-import-resolver-alias
  为文件夹设置别名，如通过@访问src文件夹
* eslint-import-resolver-webpack
  解决在使用 ESLint 进行代码检查时，由于 webpack 的别名（alias）配置导致的模块解析问题
* globals
  在ESLint配置中指定项目中将要使用的全局变量

##### ESLint插件

* eslint-plugin-jest
  针对Jest测试框架的ESLint插件，可帮开发者编写更高质量的测试代码
* eslint-plugin-react
  专为React应用程序设计的ESLint插件，作用为提升React代码的质量和一致性
* eslint-plugin-react-hooks
  帮助开发者在使用React Hooks时遵循最佳实践

本地可视化查看配置命令：

```bash
npx @eslint/config-inspector
```

更多配置说明请参考confluence：[ESLint的引入和使用 - 前端开发者社区 - Confluence (csc.com.cn)](https://confluence.csc.com.cn/pages/viewpage.action?pageId=58390572)

#### mock服务

* mock-service-worker（msw）
  不依赖后端，本地mock api服务
* graphql
  msw运行依赖项，该依赖需独立安装

更多配置说明请参考confluence：

#### Testing Library

* @testing-library/dom
  测试 Web 应用程序中 DOM 元素的行为和交互的工具集
* @testing-library/jest-dom
  Testing Library 的一个扩展库，专为 Jest 测试框架设计
* @testing-library/react
  Testing Library 中专门用于测试 React 组件的一个库
* @testing-library/user-event
  React 组件的测试中模拟用户交互

#### jest测试及相关

* jest
  开源前端测试框架jest核心包
* jest-environment-jsdom
  为 Jest 测试提供一个模拟的浏览器环境
* identity-obj-proxy
  使用Webpack和Jest等工具时，模拟或代理某些特定的导入模块，尤其是CSS模块

更多配置说明请参考confluence：

#### 浏览器查看

* browser-sync
  监视指定（如HTML、CSS、JavaScript等）的更改，并在文件保存后自动刷新浏览器
* browser-sync-webpack-plugin
  一个webpack插件，构建完成后刷新浏览器
* webpack-dev-server
  可通过前端方式，解决在浏览器中查看时，跨域请求后端接口问题

#### 提交校验

* lint-staged
  Git 提交阶段，针对暂存区（staged）的文件运行预定义的代码检查任务，确保代码质量，避免低质量代码的混入。
* husky
  增强Git钩子，允许在特定的操作（如提交commit、推送push等）执行前后运行自定义脚本

#### webpack打包相关

* assets-webpack-plugin
  自动处理各种类型的静态文件，包括图片、字体、多媒体文件，自动识别不同类型的资源并进行分类，然后将它们归类并存储于对应的文件夹下（如image, font, media），从而提供更清晰的目录结构和高效的资源加载
* webpack
  核心包
* webpack-cli
  命令行接口
* webpack-merge
  根据开发、生产环境的不同，选择合并不同的配置文件
* webpack-obfuscator
  用于混淆webpack打包后的javascript插件
* @soda/friendly-errors-webpack-plugin
  friendly-errors-webpack-plugin停止维护后的社区更新版，提升 Webpack 构建过程中的错误提示友好性
* webpackbar
  Webpack的编译过程中展示美观的进度条
* copy-webpack-plugin
  将指定的文件或目录从源位置复制到构建目录（通常是 `dist`目录）中
* html-webpack-plugin
  根据Webpack的构建配置，在构建过程中自动生成一个或多个HTML文件
* dotenv-webpack
  引入配置文件
* webpack-bundle-analyzer
  生成交互式可视化报告，展示bundle中包含了哪些模块，以及他们各自占用的空间

#### 代码混淆工具

* javascript-obfuscator
  js混淆
  更多配置说明请参考confluence：[代码混淆器：JavaScript Obfuscator - 前端开发者社区 - Confluence (csc.com.cn)](https://confluence.csc.com.cn/pages/viewpage.action?pageId=58392373)
* webpack-obfuscator

### 配置文件

- 本地配置文件 `./config/.env.localhost`，本地开发用
- 打包配置文件 `./config/.env.development`、`./config/.env.production`，打包部署用

 如需新增配置文件，例如要新增预上线环境配置文件，操作步骤如下：

1、新建配置文件：`./config/.env.prod_test`

2、新建打包入口文件：`./config/build_prod_test.js`

```javascript
const prodConfig = require("./webpack.prod");
const { merge } = require("webpack-merge");
const DotenvWebpack = require("dotenv-webpack");
const path = require("path");
const build = require("./build");
const config = merge(prodConfig, {
    plugins: [
        new DotenvWebpack({
            path: path.resolve(__dirname, "./.env.prod_test")
        })
    ]
});

build(config);
```

3、在 `package.json`文件中新增打包命令：

```json
{
    "scripts": {
        "build:prod_test": "node ./config/build_prod_test.js",
  },
}
```

## 项目扫描报告
### 代码重复率报告（jscpd）
  jscpd是一个用于检测代码重复情况的组件，打包时默认生成可视化报告路径：report/jscpd
  jscpd可配置项（package.json内）：
    1. 重复阈值：threshold
    2. 报告形式：reporters
    3. 忽略文件：ignore
    4. 扫描文件类型：format
    5. 报告生成路径：output

### webpack打包后各模块分析报告
  webpack-bundle-analyzer是webpack静态资源包分析插件，可生成打包结果的可视化报告：
    1. 展示打包后的模块大小
    2. 展示各个模块的依赖关系
    3. 评估性能优化效果，确保优化后的文件大小和性能得到提升

### 样式检查Stylelint
Stylelint可以帮助规避样式代码中的错误并保持一致的编码风格
* 规避错误例如：
1.无效的内容，例如：错误的 grid 定义
2.有效但有问题的内容，例如：重复的选择器
3.位置内容，例如：拼写错误的属性名
* 强化规则，例如：
1.禁止某些内容，例如：特定的数值单位
2.强制命名规范，例如：针对自定义属性名
3.设置边界，例如：ID 选择器的数量
4.指定某些标记符号，例如：最新的处理颜色的函数
更多说明请参考confluence：[脚手架Stylelint说明 - 前端开发者社区 - Confluence (csc.com.cn)](https://confluence.csc.com.cn/pages/viewpage.action?pageId=68813702)