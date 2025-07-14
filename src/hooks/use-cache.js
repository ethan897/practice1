import { useDispatch, useSelector } from "react-redux";
import { STORE_NAVPARAMS, clearSingleCacheItem, setCacheItem, setCacheScroll } from "@/redux/navParams.slice";

// 缓存
const useCache = () => {
    const { cacheList } = useSelector(state => state[STORE_NAVPARAMS]);
    const dispatch = useDispatch();

    const setItem = ({cacheId, cacheState}) => {
        dispatch(setCacheItem({
            cacheId,
            cacheState
        }))
    };

    const setScroll = ({cacheId, cacheScroll}) => {
        dispatch(setCacheScroll({
            cacheId,
            cacheScroll
        }))
    };

    const getCacheList = () => {
        return cacheList;
    };

    const getItem = (cacheId) => {
        return cacheList[cacheId] || null;
    };

    // 删除缓存
    const deleteCache = (cacheId) => {
        dispatch(clearSingleCacheItem({
            cacheId
        }))
    };

    return {
        getItem,
        setItem,
        setScroll,
        deleteCache,
        getCacheList
    };
};

export default useCache;
