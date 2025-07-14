import React, { Component } from "react";  

class CountComponent<T> extends Component<T> {
    constructor(props: T) {
        super(props)
        console.log("count constructor")
    }
    static whyDidYouRender = true; // 启用对该组件的渲染追踪
  
    render() {
        return <div>Count Component</div>;
    }
}

export default CountComponent;