import { createContext, useContext, useState, useEffect } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "on"
  );

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = (isDark) => {
    setDarkMode(isDark);
    localStorage.setItem("darkMode", isDark ? "on" : "off");
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
