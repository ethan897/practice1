import { useEffect } from "react";

const useMount = (didMount, willUnmount) => {
    useEffect(() => {
        didMount();
        return () => {
            willUnmount && willUnmount()
        }
         
    }, []);
}

export default useMount;