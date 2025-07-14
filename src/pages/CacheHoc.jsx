/* eslint-disable no-unused-vars */
import { useMemo, useCallback, useRef } from "react";
import useCache from "@/hooks/use-cache";
import useMount from "@/hooks/use-mount";
import { useNavigate, useNavigationType,useLocation} from "react-router-dom";

const CacheHoc = (Comp, { cacheId, scroll }) => {
    const CacheComp = (props) => {
        const { getItem, setItem, setScroll } = useCache();
        const _ref = useRef(null);
        const _timeout = useRef(null);
        const navigate = useNavigate();
        const navigateType = useNavigationType();
        const location = useLocation(); 

        const cache = useMemo(
            () => {
                if (navigateType === "POP") {
                    // 回退时使用缓存
                    return getItem(cacheId) ?? {};
                }
                // 前进时不使用缓存
                return {};
            },
            [navigateType, getItem]
        )

        const handleScroll = useCallback(({target}) => {
            if (target.id) {
                // _timeout.current && clearTimeout(_timeout.current);
                _timeout.current = setTimeout(() => {
                    setScroll({
                        cacheId, 
                        cacheScroll: {
                            [target.id]: target.scrollTop
                        }
                    })
                    // _timeout.current && clearTimeout(_timeout.current);
                }, 200)
            }
        }, [setScroll]);

        useMount(() => {
            if (scroll) {
                _ref.current.addEventListener("scroll", handleScroll, true);
                const scrollKeys = Object.keys(cache.cacheScroll ?? {});
                if (navigateType === "POP" && scrollKeys.length > 0) {
                    scrollKeys.forEach(v => {
                        var dom = document.getElementById(v);
                        dom.scrollTop = cache.cacheScroll[v];
                    })
                }
            }
        })
        
        const setCacheHandle = useCallback(
            (cacheState) => {
                setItem({
                    cacheId, 
                    cacheState})
            },
            [setItem]
        )

        const leavePage = useCallback(
            ({ cacheState, ...others }) => {
                setCacheHandle(cacheState);
                navigate(others)
            },
            [navigate, setCacheHandle]
        )
        
        return <div
            ref={_ref}>
            <Comp
                cacheState={cache.cacheState} 
                cacheScroll={cache.cacheScroll} 
                leavePage={leavePage}
                {...props}
            />
        </div>
            
    }

    return CacheComp
}

export default CacheHoc;