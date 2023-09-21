import { createContext, useState } from "react";

export const ComercioContext = createContext({
    comercios: [],
    setComercios: () => {}
});

export const ComercioProvider = ({ children }) => {
    const [comercios, setComercios] = useState([]);
    const value = { comercios, setComercios };

    return (
        <ComercioContext.Provider value={value}>{children}</ComercioContext.Provider>
    )
}