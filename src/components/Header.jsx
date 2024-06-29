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
        } absolute top-0 left-0 w-full bg-[#eee] sm:bg-transparent sm:relative sm:transform-none border-b border-gray-400 sm:border-none`}
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
        <a
          href="/pdf.pdf"
          download="/pdf.pdf"
          className="text-white flex items-center bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] hover:bg-[var(--bg-second)] hover:border-[var(--main-color)] transition-all duration-500"
        >
          Download Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            fill={"none"}
            className="ml-2"
          >
            <path
              d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18.5 21.5L18.5 13.5M18.5 21.5C17.7998 21.5 16.4915 19.5057 16 19M18.5 21.5C19.2002 21.5 20.5085 19.5057 21 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
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
        <a
          href="/pdf.pdf"
          download="/pdf.pdf" 
          className="text-white flex items-center bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] hover:bg-[var(--bg-second)] hover:border-[var(--main-color)] transition-all duration-500"
        >
          Download Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={20}
            height={20}
            fill={"none"}
            className="ml-2"
          >
            <path
              d="M7 6.5H16.75C18.8567 6.5 19.91 6.5 20.6667 7.00559C20.9943 7.22447 21.2755 7.50572 21.4944 7.83329C21.9579 8.52694 21.9965 9.25981 21.9997 11M12 6.5L11.3666 5.23313C10.8418 4.18358 10.3622 3.12712 9.19926 2.69101C8.6899 2.5 8.10802 2.5 6.94427 2.5C5.1278 2.5 4.21956 2.5 3.53806 2.88032C3.05227 3.15142 2.65142 3.55227 2.38032 4.03806C2 4.71956 2 5.6278 2 7.44427V10.5C2 15.214 2 17.5711 3.46447 19.0355C4.8215 20.3926 6.94493 20.4921 11 20.4994H12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M18.5 21.5L18.5 13.5M18.5 21.5C17.7998 21.5 16.4915 19.5057 16 19M18.5 21.5C19.2002 21.5 20.5085 19.5057 21 19"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}
