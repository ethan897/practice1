import { createSlice } from "@reduxjs/toolkit";

export const STORE_NAVPARAMS = "navParams";

const initialState = {
    cacheList: {}
}

export const navParamsSlice = createSlice({
    name: STORE_NAVPARAMS,
    initialState,
    reducers: {
        setCacheItem(state, action) {
            const { cacheId, cacheState } = action.payload;
            if (state.cacheList[cacheId]) {
                state.cacheList[cacheId].cacheState = cacheState
            } else {
                state.cacheList[cacheId] = {
                    cacheId,
                    cacheState
                }
            }
        },
        setCacheScroll(state, action) {
            const { cacheId, cacheScroll } = action.payload;
            if (state.cacheList[cacheId]) {
                state.cacheList[cacheId].cacheScroll = cacheScroll
            } else {
                state.cacheList[cacheId] = {
                    cacheId,
                    cacheScroll
                }
            }
        },
        clearSingleCacheItem(state, action) {
            const { cacheId } = action.payload;
            delete state.cacheList[cacheId];
        },
        clearAllCacheItem(state) {
            state.cacheList = {};
        }
    }
})

export const { setCacheItem, clearSingleCacheItem, clearAllCacheItem, setCacheScroll } = navParamsSlice.actions;