import { createContext } from "react";

interface ThemeContextType {
    handleTheme: () => void;
    toggleTheme: boolean;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);