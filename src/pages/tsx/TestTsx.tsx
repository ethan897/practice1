import React, { Component } from "react";
// import { connect } from "react-redux";


class TestTSX<T> extends Component<T> {
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
    }
    add = (a: number, b: number) => {
        return a + b
    }
    add2 = (a: number, b: number) => {
        return a + b
    }
    getFirst<T>(arr: T[]): T {
        return arr[0];
    }

    render() {
        // const num = add(1,2)
        const p = {
            firstName: "张",
            lastName: "三",
            age: 20
        }
        return (
            <div>
                <div>-----------tsx中的输出-----------</div>
                <div>1,2的和为：{this.add(1, 2)}</div>
                <div>1,2的和为：{this.add2(1, 2)}</div>
                <div>subChild: </div>
                {/* <MyComponent name="Alice" /> */}
                {/* <div>1,2的和为：{add(1, 'a')}</div> */}
                <div>{JSON.stringify(p)}</div>
                <div>[1,2,3]的首个元素是：{this.getFirst([1, 2, 3])}</div>
                <div>[1,a,3]的首个元素是：{this.getFirst([1, "a", 3])}</div>
            </div>
        )
    }
}

export default TestTSX;