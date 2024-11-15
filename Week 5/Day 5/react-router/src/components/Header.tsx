import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="bg-stone-700 p-6">
      <nav className="flex justify-between items-center text-stone-300 max-w-7xl mx-auto">
        <h1 className="text-3xl">React Router</h1>
        <ul className="flex justify-between gap-12 text-xl">
          <li className="hover:text-yellow-400 transition duration-400">
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              Home
            </NavLink>
          </li>
          <li className="hover:text-yellow-400 transition duration-400">
            <NavLink
              to={"/About"}
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              About
            </NavLink>
          </li>
          <li className="hover:text-yellow-400 transition duration-400">
            <NavLink
              to={"/Contact"}
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              Contact
            </NavLink>
          </li>
          <li className="hover:text-yellow-400 transition duration-400">
            <NavLink
              to={"/Dashboard"}
              className={({ isActive }) => (isActive ? "text-yellow-400" : "")}
            >
              Dashboard
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
