import { createContext, useState } from "react";

export const AffiliatesContext = createContext({
    affiliates: [],
    setAffiliates: () => {}
});

export const AffiliatesProvider = ({ children }) => {
    const [affiliates, setAffiliates] = useState([]);
    const value = { affiliates, setAffiliates };

    return (
        <AffiliatesContext.Provider value={value}>{children}</AffiliatesContext.Provider>
    )
}