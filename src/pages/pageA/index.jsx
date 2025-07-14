import { useState, useEffect } from "react";
import CacheHoc from "@/pages/CacheHoc";
import PropTypes from "prop-types";
import {testService} from "@/service/test";
import Styles from "./index.module.css";

const CONST_CACHEID = "pageA";
const PageA = ({leavePage, cacheState}) => {
    const [value, setValue] = useState(cacheState?.value || "");

    useEffect(() => {
        console.log("我是页面A");
        testService();

    }, []) 

    const goOtherPage = () => {
        leavePage({
            pathname: "/hello2",
            cacheState: {
                value
            }
        })
    }
    return (
        <div className={Styles.fullA} id="fullA">
            <div>我是页面A</div>
            <h1>计算结果：{process.env.NODE_ENV}</h1>
            {/* {result !== null ? <div>{result}</div> : <div>正在加载...</div>} */}
            <input type="text" value={value} onChange={e => setValue(e.target.value)}></input>
            <button style={{width: 100, height: 100}} onClick={goOtherPage}>前往页面B</button>
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
            <br />
            <div style={{height: 100}} onClick={goOtherPage}>测试进入保留页面滑动状态...</div>
        </div>
    )
}

PageA.propTypes = {
    leavePage: PropTypes.func,
    cacheState: PropTypes.object || null
}

export default CacheHoc(PageA, {
    cacheId: CONST_CACHEID,
    scroll: true
});
