import { useEffect, useState, useRef } from "react";
import { useDarkMode } from "./DarkModeContext";

const SettingsBox = () => {
  const [mainColor, setMainColor] = useState(
    localStorage.getItem("color-option") || "#1E90FF"
  );
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const settingsRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty("--main-color", mainColor);
    const activeElement = document.querySelector(
      `.colors-list li[data-color="${mainColor}"]`
    );
    if (activeElement) {
      activeElement.classList.add("colors-active");
    }
  }, [mainColor]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target) &&
        !toggleRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [settingsRef, toggleRef]);

  const handleColorChange = (color) => {
    setMainColor(color);
    localStorage.setItem("color-option", color);
  };

  useEffect(() => {
    const bodyClassList = document.body.classList;
    if (darkMode) {
      bodyClassList.add("dark-mode");
      bodyClassList.remove("light-mode");
    } else {
      bodyClassList.add("light-mode");
      bodyClassList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="relative">
      <div
        ref={toggleRef}
        className="fixed top-1/4 right-0 z-50 bg-[#303030] p-2 rounded-l cursor-pointer transition-all duration-500"
        style={{ right: isOpen ? "205px" : "0" }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`h-6 w-6 text-white ${isOpen ? "animate-spin" : ""}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <div
        ref={settingsRef}
        className={`fixed right-0 top-28  w-52 h-80 z-40 transition-transform duration-500 bg-[#303030] ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
        style={{
          borderTopLeftRadius: "6px",
          borderBottomLeftRadius: "6px",
        }}
      >
        <div className="settings-container relative flex items-center flex-col p-4">
          <div className="option-box flex items-center flex-col w-40 m-5 mt-14 gap-4 p-3 rounded-lg bg-[#9999992E]">
            <ul className="colors-list flex items-center justify-between gap-2">
              {["#1E90FF", "#FF7575", "#4AB84D", "#FF6A00"].map((color) => (
                <li
                  key={color}
                  className={`cursor-pointer rounded-full w-6 h-6 border-2 border-white ${
                    mainColor === color ? "opacity-100" : "opacity-40"
                  }`}
                  data-color={color}
                  style={{ backgroundColor: color }}
                  onClick={() => handleColorChange(color)}
                ></li>
              ))}
            </ul>
          </div>
          <div className="darkmode flex items-center flex-col w-40 m-5 gap-4 p-3 rounded-lg bg-[#9999992E]">
            <h3 className="text-xl font-extrabold text-[var(--main-color)]">
              Dark Mode
            </h3>
            <div className="darkmode-buttons flex items-center justify-between gap-5 transition-all duration-1000">
              <div className="darkmode-on transition-all duration-500">
                <a
                  href="#"
                  id="darkModeOn"
                  className={`rounded text-white bg-[var(--main-color)] transition-all duration-1000 px-4 ${
                    darkMode ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDarkMode(true);
                  }}
                >
                  On
                </a>
              </div>
              <div className="darkmode-off transition-all duration-1000">
                <a
                  href="#"
                  id="darkModeOff"
                  className={`rounded text-white bg-[var(--main-color)] transition-all duration-1000 px-4 ${
                    !darkMode ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleDarkMode(false);
                  }}
                >
                  Off
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsBox;
