import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem('theme') || 'system'
    });

    useEffect(() => {
        const root = document.documentElement;

        const systemTheme = window.matchMedia(
            '(prefers-color-scheme: dark)'
        ).matches ? 'dark' : 'light'

        const currentTheme = theme === 'system' ? systemTheme : theme;

        if(currentTheme === 'dark'){
            root.classList.add('dark')
        }else{
            root.classList.remove('dark')
        }

        if(theme === 'system'){
            localStorage.removeItem('theme')
        }else{
            localStorage.setItem('theme', theme)
        }

    }, [theme])

    return(
        <ThemeContext.Provider  value={{theme, setTheme}}>
            { children }
        </ThemeContext.Provider>
    )
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme }