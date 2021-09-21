import React, { useState } from "react";
import Loading from "../screens/Loading";


export const LoaderContext = React.createContext();

export const LoaderProvider = (props) => {

    let [isLoading, setisLoading] = useState(false);

    function startLoader() {
        setisLoading(true)
    }
    function stopLoader() {
        setisLoading(false)
    }

    return (
        <LoaderContext.Provider value={{ startLoader: startLoader, stopLoader: stopLoader }}>
            {isLoading ? <Loading /> :
                props.children
            }
        </LoaderContext.Provider>
    )
}