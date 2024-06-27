import { useState, useEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "/src/assets/logo.png";
import LogoWhite from "/src/assets/logo-white.png";
import { useDarkMode } from "./DarkModeContext";

export default function Header() {
  const { darkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const iconRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      iconRef.current &&
      !iconRef.current.contains(event.target)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header className="header fixed z-30 flex items-center justify-between w-full h-16 p-main bg-[var(--bg-second)] shadow-md">
      <div className="logo w-20">
        <Link to="/">
          <img src={darkMode ? LogoWhite : Logo} alt="Yasser Galal Logo" />
        </Link>
      </div>
      <nav
        ref={menuRef}
        className={`navbar sm:flex flex-col sm:flex-row gap-5 sm:gap-0 items-center transition-transform duration-500 transform sm:w-auto ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } absolute top-0 left-0 w-full bg-[#eee] sm:bg-transparent sm:relative sm:transform-none`}
      >
        <ul className="flex flex-col sm:flex-row gap-5 items-center w-full p-7 sm:p-0 sm:static bg-[var(--bg-second)] sm:bg-transparent sm:top-0 sm:gap-0">
          <li className="sm:px-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-[var(--main-color)] transition-all duration-300 hover:text-[var(--main-color)]"
                  : "text-lg font-bold text-[var(--text-color)] transition-all duration-300 hover:text-[var(--main-color)]"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="sm:px-5">
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold  text-[var(--main-color)] transition-all duration-300 hover:text-[var(--main-color)]"
                  : "text-lg font-bold text-[var(--text-color)] transition-all duration-300 hover:text-[var(--main-color)]"
              }
            >
              Projects
            </NavLink>
          </li>
          <li className="sm:px-5">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-lg font-bold text-[var(--main-color)] transition-all duration-300 hover:text-[var(--main-color)]"
                  : "text-lg font-bold text-[var(--text-color)] transition-all duration-300 hover:text-[var(--main-color)]"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="flex items-center sm:hidden">
        <Link
          to="/"
          className="text-white bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] hover:bg-[var(--bg-second)] hover:border-[var(--main-color)] transition-all duration-500"
        >
          Download Resume
        </Link>
        <button
          ref={iconRef}
          onClick={toggleMenu}
          className="ml-4 focus:outline-none relative z-40"
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-[var(--text-color)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-[var(--text-color)]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          )}
        </button>
      </div>
      <div className="hidden sm:block">
        <Link
          to="/"
          className="text-white bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] hover:bg-[var(--bg-second)] hover:border-[var(--main-color)] transition-all duration-500"
        >
          Download Resume
        </Link>
      </div>
    </header>
  );
}
