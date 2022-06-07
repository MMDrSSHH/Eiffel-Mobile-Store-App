// This context will set the theme for the whole application whether it is DARK or BRIGHT
import React, { createContext , useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    

    return (
        <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;