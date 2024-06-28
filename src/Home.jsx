import { Link } from "react-router-dom";
import Header from "./components/Header";
import SettingsBox from "./components/SettingsBox";
import Circles from "./components/CirclesAnimation";
import SkillsSection from "./components/Skills";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTopBtn";
import YasserImg from "/src/assets/yasser.jpg";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <SettingsBox />
      <Circles />
      <main className="home-main p-main pt-20 lg:pt-52 bg-[var(--bg-main)] min-h-screen">
        <section className="home-container grid grid-cols-1 lg:grid-cols-12 items-center relative z-20">
          <div className="col-span-1 lg:col-span-6 text-center lg:text-start mt-12">
            <h1 className="text-4xl lg:text-5xl font-black text-[var(--text-color)]">
              Hello , I'm Yaser
            </h1>
            <h2 className="text-2xl mt-4 lg:mt-6 text-[var(--gray-color)]">
              A Creative{" "}
              <span className="text-[var(--main-color)] text-4xl font-bold ml-1 text-glow">
                Artist
              </span>
            </h2>
            <div className="flex iteme-center justify-center lg:justify-start">
              <div className="mt-8 lg:mt-10 pb-8 lg:pb-12">
                <Link
                  to="projects"
                  className="text-white flex items-center text-lg lg:text-xl bg-[var(--main-color)] hover:bg-[var(--bg-main)] hover:text-[var(--text-color)] font-bold py-2 px-4 lg:px-6 rounded-full border-2 border-transparent hover:border-[var(--main-color)] transition-all duration-500"
                >
                  Projects
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill={"none"}
                    className="ml-2 mt-1"
                  >
                    <path
                      d="M11 6L21 6"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 12L21 12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 18L21 18"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M3 7.39286C3 7.39286 4 8.04466 4.5 9C4.5 9 6 5.25 8 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 18.3929C3 18.3929 4 19.0447 4.5 20C4.5 20 6 16.25 8 15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
              <div className="mt-8 lg:mt-10 pb-8 lg:pb-12 ml-5">
                <Link
                  to="about"
                  className="text-lg flex items-center lg:text-xl bg-[var(--bg-main)] text-[var(--text-color)] font-bold py-2 px-4 lg:px-6 rounded-full border-2 border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--text-white)] transition-all duration-500"
                >
                  About Me
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    fill={"none"}
                    className="ml-2"
                  >
                    <path
                      d="M7.78256 17.1112C6.68218 17.743 3.79706 19.0331 5.55429 20.6474C6.41269 21.436 7.36872 22 8.57068 22H15.4293C16.6313 22 17.5873 21.436 18.4457 20.6474C20.2029 19.0331 17.3178 17.743 16.2174 17.1112C13.6371 15.6296 10.3629 15.6296 7.78256 17.1112Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5 10C15.5 11.933 13.933 13.5 12 13.5C10.067 13.5 8.5 11.933 8.5 10C8.5 8.067 10.067 6.5 12 6.5C13.933 6.5 15.5 8.067 15.5 10Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2.854 16C2.30501 14.7664 2 13.401 2 11.9646C2 6.46129 6.47715 2 12 2C17.5228 2 22 6.46129 22 11.9646C22 13.401 21.695 14.7664 21.146 16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 mt-5 lg:mt-0">
            <img
              src={YasserImg}
              alt="Yasser Galal"
              className="w-full h-auto relative z-20 rounded-2xl"
            />
          </div>
        </section>
      </main>
      <SkillsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
