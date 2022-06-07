// This context will set the theme for the whole application whether it is DARK or BRIGHT
import React, { createContext , useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("DARK");

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;