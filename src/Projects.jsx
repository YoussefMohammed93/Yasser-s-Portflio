import { Link } from "react-router-dom";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTopBtn";
import SettingsBox from "./components/SettingsBox";
import Footer from "./components/Footer";
import RapidPhoto from "/src/assets/rabid.png";
import YasserYT from "/src/assets/yaser3.png";

export default function Projects() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <SettingsBox />
      <main className="projects pt-24 pb-16 bg-[var(--bg-main)]">
        <h1 className="main-title text-4xl sm:text-5xl text-center font-black text-[var(--text-color)] uppercase">
          Projects
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 p-main pt-14">
          <div
            className="bg-[var(--bg-second)] p-4 rounded-lg project-card shadow-md"
            style={{ border: "1px solid #cbcbcb" }}
          >
            <Link to="/rapid">
              <img src={RapidPhoto} alt="Rapid" />
              <div className="project-overlay">
                <h2 className="text-2xl sm:text-4xl font-bold text-center text-white">
                  View
                </h2>
              </div>
              <h2 className="text-5xl font-bold text-center mt-3 text-[var(--text-color)]">
                Rapid
              </h2>
            </Link>
          </div>
          <div
            className="bg-[var(--bg-second)] p-4 rounded-lg project-card shadow-md"
            style={{ border: "1px solid #cbcbcb" }}
          >
            <Link to="/rationalized">
              <img src={YasserYT} alt="Rapid" />
              <div className="project-overlay">
                <h2 className="text-2xl sm:text-4xl font-bold text-center text-white">
                  View
                </h2>
              </div>
              <h2 className="text-5xl font-bold text-center mt-3 text-[var(--text-color)]">
                Rationalized
              </h2>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
