import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DarkModeProvider } from "./components/DarkModeContext";
import Home from "./Home";

export default function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}
