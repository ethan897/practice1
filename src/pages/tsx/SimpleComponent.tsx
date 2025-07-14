import React, { Component } from "react";  
// import axios from "axios" ;
// import CountComponent from "./CountComponent";

class SimpleComponent extends Component { 
    state = { count: 0 }; 
    componentDidMount() {
        console.log("componentDidMount")
        // 发起一个post请求
        // axios({
        //     method: "get",
        //     url: "/user/12345",
        //     data: {
        //         firstName: "Fred",
        //         lastName: "Flintstone"
        //     }
        // }).then(res => {
        //     console.log(res)
        // });
        // 发送需要跨域的请求
        fetch("/jian/subscriptions/recommended_collections")
            .then(response => response.json())
            .then(value => {
                console.log("简书", value)
            })
        fetch("/zhi/api/v4/questions/23178572/concerned_followers?limit=7&offset=0")
            .then(response => response.json())
            .then(value => {
                console.log("知乎", value);
            }); 
    }
    add = (a: number, b: number) => {
        return a + b
    }
    increment = () => {
        console.log("increment")
        this.setState({ count: this.state.count + 1 });
    };
    render() {  
        return (
            <div>
                <div>Hello, World!!</div>
                <div>1,2的和为：{this.add(1, 2)}</div>
                <div>
                    <button onClick={this.increment}>Increment</button>
                    {/* <CountComponent style={{width: "100%"}}/> */}
                </div>
            </div>
        );  
    }  
}  

export default SimpleComponent;