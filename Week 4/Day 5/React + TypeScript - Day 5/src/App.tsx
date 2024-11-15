import Signup from "./Signup";
import { UserProvider } from "./context/UserContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import ThemeToggleButton from "./ThemeToggleButton.tsx";

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
          <ThemeToggleButton />
          <main>
            <Signup />
          </main>
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
