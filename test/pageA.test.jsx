import PageA from "@/pages/pageA/PageAContainer";
import { render, screen,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "@/redux";
import { HashRouter, Route, Routes,Navigate } from "react-router-dom";
import * as testService from "@/service/test";
import testService_test1 from "./testService_test1";

const renderWithReduxAndRouter = (component) => {
    return {
        ...render(<Provider store={store}>
            <HashRouter>
                <Routes>
                    <Route path="/main-view-controller" element={component} />
                    {/* 捕获所有其他路由并重定向到 "/main-view-controller" */}
                    <Route path="*" element={<Navigate replace to="/main-view-controller" />} />
                </Routes>
            </HashRouter>
        </Provider>)
    }
}

test("renders learn react link", () => {
    // 登录mock数据
    const spyFn = jest.spyOn(testService, "testService");
    spyFn.mockReturnValue(Promise.resolve(testService_test1));

    renderWithReduxAndRouter(<PageA />)
    //获取元素
    const inputElement = screen.getByRole("textbox");
    const buttonElement = screen.getByText("前往页面B");
    //模拟输入框的值变化事件
    fireEvent.change(inputElement, { target: { value: "test input" } });
    // 断言输入框的value是 'test input'
    expect(inputElement.value).toBe("test input");
    // 模拟点击事件
    fireEvent.click(buttonElement);
})

