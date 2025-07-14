import React, { Component } from "react";
// import { connect } from "react-redux";
import axios from "axios" 

class TestTSX<T extends object> extends Component<T> {
    constructor(props: T) {
        super(props);
        console.log(props)
        this.state = {
            num: 1,
            text: 2
        }
    }
    componentDidMount() {
        console.log("componentDidMount")
        // 发起一个post请求
        axios({
            method: "post",
            url: "/user/12345",
            data: {
                firstName: "Fred",
                lastName: "Flintstone"
            }
        }).then(res => {
            console.log(res)
        });
    }

    add = (a: number, b: number) => {
        return a + b
    }

    render() {
        // const num = add(1,2)
        return (
            <div>
                <div>-----------tsx中的输出-----------</div>
                <div>请求的返回数据为：{this.add(1, 2)}</div>
            </div>
        )
    }
}

export default TestTSX;