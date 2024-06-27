import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import Home from "./Home";
import About from "./About";

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
