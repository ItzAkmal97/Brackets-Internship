import { Link } from "react-router-dom"
function Header() {
  return (
    <header className="bg-stone-700 p-6">
      <nav className="flex justify-between items-center text-stone-300 max-w-7xl mx-auto">
        <h1 className="text-3xl">React Router</h1>
        <ul className="flex justify-between gap-12 text-xl">
            <li className="hover:text-yellow-400 transition duration-400">
                <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-400">
                <Link to={"/About"}>About</Link>
            </li>
            <li className="hover:text-yellow-400 transition duration-400">
                <Link to={"/Contact"}>Contact</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header