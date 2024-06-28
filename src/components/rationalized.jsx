import { Link } from "react-router-dom";
import Header from "./Header";
import ScrollToTop from "./ScrollToTopBtn";
import SettingsBox from "./SettingsBox";
import VidOneImg from "/src/assets/yt.png";
import VidTwoImg from "/src/assets/vidtwo.jpg";

export default function RationalizedSection() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <SettingsBox />
      <main className="projects pt-24 pb-16 bg-[var(--bg-main)]">
        <h1 className="main-title text-2xl sm:text-5xl text-center font-black text-[var(--text-color)] uppercase">
          Rationalized
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 p-main pt-10 sm:pt-14">
          <div
            className="bg-[var(--bg-second)] rounded-lg project-card shadow-md"
            style={{ border: "1px solid #cbcbcb" }}
          >
            <Link
              to="https://www.youtube.com/watch?v=l57ve-PNBiE"
              target="_blank"
            >
              <img
                src={VidOneImg}
                alt="The Hannibal Directive"
                className="rationalized-img w-full sm:h-[21rem] h-[14rem]"
              />
              <div className="project-overlay flex flex-col">
                <h2 className="text-white mr-2 flex items-center mt-8 bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] transition-all duration-300 mb-3">
                  Click To View Project
                </h2>
                <p className="text-white text-base sm:text-lg">
                  The Hannibal Directive: How Israel K*lls Its Own Soldiers.
                </p>
              </div>
            </Link>
          </div>
          <div
            className="bg-[var(--bg-second)] rounded-lg project-card shadow-md"
            style={{ border: "1px solid #cbcbcb" }}
          >
            <Link
              to="https://www.youtube.com/watch?v=h9yuS836nig"
              target="_blank"
            >
              <img
                src={VidTwoImg}
                alt="Rapid"
                className="rationalized-img w-full sm:h-[21rem] h-[14rem]"
              />
              <div className="project-overlay  flex flex-col">
                <h2 className="text-white mr-2 flex items-center mt-8 bg-[var(--main-color)] font-bold py-1 px-4 rounded-full border-2 border-transparent hover:text-[var(--text-color)] transition-all duration-300 mb-3">
                  Click To View Project
                </h2>
                <p className="text-white text-base sm:text-lg">
                  Palestine-Israel, The Eternal Case.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
