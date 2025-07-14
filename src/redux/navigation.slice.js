import { createSlice } from "@reduxjs/toolkit";

export const STORE_NAVIGATION = "navigation";

const initialState = {
    navigation: []
}

export const navigationSlice = createSlice({
    name: STORE_NAVIGATION,
    initialState,
    reducers: {
        push(state, action) {
            state.navigation.push(action.payload);
        },
        pop(state, action) {
            state.navigation = state.navigation.slice(0, action.payload);
        }
    }
})

export const { push, pop } = navigationSlice.actions;