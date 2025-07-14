import { useCallback, useReducer } from "react";

/**
 * status: "idle" | "loading" | "error" | "success"
 */
const defaultInitailState = {
    status: "idle",
    data: null,
    error: null
}

export const useAsync = (initialState = {}) => {
    const [state, dispatch] = useReducer(
        (state, action) => ({
            ...state,
            ...action
        }),
        {
            ...defaultInitailState,
            ...initialState
        }
    );

    const setData = useCallback(data => dispatch({
        status: "success",
        data,
        error: null
    }), [dispatch])

    const setError = useCallback((error) => dispatch({
        error,
        status: "error",
        data: null
    }), [dispatch])

    const run = useCallback(promise => {
        dispatch({
            status: "loading"
        });
        return promise.then(data => {
            setData(data)
            return data;
        }).catch(error => {
            setError(error)
            return Promise.reject(error);
        });
    }, [dispatch, setData, setError])

    return {
        isIdle: state.status === "idle",
        isLoading: state.status === "loading",
        isError: state.status === "error",
        isSuccess: state.status === "success",
        setError,
        setData,
        run,
        ...state
    }
}