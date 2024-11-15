import { useContext } from "react";
import { ThemeContext } from "./context/Theme";
import {Moon, Sun} from 'lucide-react'

function ThemeToggleButton() {

    const toggleContext = useContext(ThemeContext);
    const {toggleTheme, handleTheme} = toggleContext ?? {}

  return (
    <button
      onClick={handleTheme}
      className="fixed top-4 right-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {toggleTheme ? (
        <Sun className="w-5 h-5 text-yellow-500"/>
      ) : (
        <Moon className="w-5 h-5 text-gray-700" />
      )}
    </button>
  )
}

export default ThemeToggleButton