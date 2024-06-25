import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.png";
import LogoWhite from "/src/assets/logo-white.png";
import { useDarkMode } from "./DarkModeContext";

export default function Header() {
  const { darkMode } = useDarkMode();

  return (
    <header className="header flex items-center justify-between w-full h-16 p-main bg-[var(--bg-main)]">
      <div className="logo w-20">
        <img src={darkMode ? LogoWhite : Logo} alt="Yasser Galal Logo" />
      </div>
      <nav className="navbar">
        <ul className="flex items-center">
          <li>
            <Link to="/" className="px-3 text-[var(--text-color)]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" className="px-3 text-[var(--text-color)]">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-3 text-[var(--text-color)]">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <div>
        <Link
          to="/"
          className="text-white bg-[var(--main-color)] font-semibold py-2 px-4 rounded-md border-2 border-transparent hover:border-[var(--text-color)] transition-all duration-500"
        >
          Download Resume
        </Link>
      </div>
    </header>
  );
}
