import { ThemeContext } from "./Theme";
import { useState, ReactNode } from "react";


type ThemeProviderProps = {
    children: ReactNode
}

export const ThemeProvider = ({children}: ThemeProviderProps) => {
    const [toggleTheme, setToggleTheme] = useState<boolean>(false);

    const handleTheme = () => {
        setToggleTheme(prevTheme => !prevTheme);
        document.documentElement.classList.toggle('dark');

    }

    return (
        <ThemeContext.Provider value={{handleTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}