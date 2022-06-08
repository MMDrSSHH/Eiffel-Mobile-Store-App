// This context will set the theme for the whole application whether it is DARK or BRIGHT
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();


const ThemeContextProvider = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(!!localStorage.getItem("appTheme") ? true : false);


    // In the themeHandler the value of the theme will persist between page refreshes
    // by saving its value in localStorage
    const themeHandler = (newTheme) => {
        localStorage.setItem("appTheme", JSON.stringify(newTheme));
        setDarkTheme(newTheme);
    }

    return (
        <ThemeContext.Provider value={{ darkTheme, themeHandler }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;