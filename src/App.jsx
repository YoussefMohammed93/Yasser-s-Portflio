import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import RapidProject from "./components/RapidPage";
import RationalizedProject from "./components/rationalizedPage";

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/rationalized" element={<RationalizedProject />} />
          <Route path="/rapid" element={<RapidProject />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
