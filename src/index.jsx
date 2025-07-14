import React from "react";  
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "@/redux";
import "core-js/features/queue-microtask";
import App from "@/app";

const root = createRoot(document.getElementById("app"));
if (process.env.NODE_ENV === "development" && process.env.MOCK_FLAG === "true") {
    const { mocker } = require("../mocks/browsers") ;
    mocker.start({
	  // 对于没有 mock 的接口直接通过，避免异常
	  onUnhandledRequest: "bypass"
    })
}
if (process.env.NODE_ENV === "development" && process.env.PERFORMANCE_ANALYSIS_FLAG === "true") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    whyDidYouRender(React, {  
        // trackHooks: true, // 跟踪 Hooks 的变化（需要 React 16.8+）  
        // include: [/pageA/], // 仅追踪特定组件（可选）  
        // exclude: [/pageB/], // 排除特定组件（可选）  
        // collapsePasses: true, // 合并相同的渲染原因（可选）  
        // logOnDifferentValues: true, // 当 props 或 state 的值变化时记录（可选）
        trackAllPureComponents: true, //自动检测所有PureComponent以及React.memo包裹的组件
        logOwnerReasons: true
    });  
}
root.render(
    <Provider store={store}>
        <App />
    </Provider>)