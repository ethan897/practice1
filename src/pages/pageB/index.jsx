import {useNavigate} from "react-router-dom";
import { Flex,Button } from "antd";
import { ClockCircleTwoTone } from "@ant-design/icons";
import useCache from "@/hooks/use-cache";
import Styles from "./index.module.less";
import { useEffect } from "react";

const PageB = () => {
    let navigate = useNavigate();
    const { getItem } = useCache();

    useEffect(() => {
        console.log("这是页面B",getItem("pageA"));
    }, [])

    const goHandle = () => {
        navigate("/main-view-controller")
    }
    const goBack = () => {
        navigate(-1);
    }
    const loginTest = async() => {
        const response = await fetch("/api/login",{
            method: "post",
            body: JSON.stringify({username: "admin", password: "123456"}),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json();
        if(data.code === 200) {
            console.log("登录成功")
        }else {
            console.log("登录失败")
        }
    }
    useEffect(() => {
        loginTest();
        fetch("/api/users").then((response)=>response.json()).then((data)=>console.log("data@@",data))
    }, [])
    

    return (
        <div className={Styles.fullB}>
            <div>我是页面B</div>
            <Flex justify="flex-start" align="align-items">
                <Button type="primary" onClick={goHandle}>前往页面A</Button>
                <Button type="dashed" onClick={goBack}>
                返回页面A
                </Button>
                <ClockCircleTwoTone />
            </Flex>
        </div>
    )   
}

export default PageB;

