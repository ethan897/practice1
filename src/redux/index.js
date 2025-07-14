import { configureStore } from "@reduxjs/toolkit";
import { navParamsSlice, STORE_NAVPARAMS } from "@/redux/navParams.slice";
import { navigationSlice, STORE_NAVIGATION } from "@/redux/navigation.slice";

const rootReducer = {
    [STORE_NAVPARAMS]: navParamsSlice.reducer,
    [STORE_NAVIGATION]: navigationSlice.reducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store
