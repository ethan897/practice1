import { Routes, Route, Navigate} from "react-router-dom";
import { Suspense, lazy } from "react";
import { PageTransition } from "@/components/Animated/AnimatedComponent";
import { AnimatePresence } from "framer-motion";
import "../styles/ui.css";
import "../styles/reset.css";

const PageA = lazy(() => import("./pageA/index"));
const PageB = lazy(() => import("./pageB/index"));
const Simple = lazy(() => import("./tsx/SimpleComponent"));

const routes = [
    { path: "/main-view-controller", element: <PageA /> },
    { path: "/hello2", element: <PageB />}
]

const Container = () => {
    return (
        <div className="router-wrapper" >
            <Suspense fallback={<div>loading...</div>}>
                <AnimatePresence mode="wait">
                    <Routes>
                        {routes.map((route) => 
                            <Route
                                key={route.path}
                                path={route.path || ""}
                                element={<PageTransition>{route.element}</PageTransition>}
                            // element={route.element}
                            />
                        )}
                        {/* <Route path="/main-view-controller" element={<PageA />} />
                        <Route path="/hello2" element={<PageB />} /> */}
                        <Route path="/testTSX" element={<Simple />} />
                        {/* 捕获所有其他路由并重定向到 "/main-view-controller" */}
                        <Route path="*" element={<Navigate replace to="/main-view-controller" />} />
                    </Routes>
                </AnimatePresence>
            </Suspense>
        </div>

    );
}

export default Container;
