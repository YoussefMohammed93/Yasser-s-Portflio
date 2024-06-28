import { Link } from "react-router-dom";
import Header from "./components/Header";
import SettingsBox from "./components/SettingsBox";
import SkillsSection from "./components/Skills";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTopBtn";
import YasserImg from "/src/assets/about2.jpg";
import YoutubeIcon from "/src/assets/youtube.png";
import XIcon from "/src/assets/twitter.png";
import BuyMeCoffe from "/src/assets/buymecoffe.png";
import InstagramIcon from "/src/assets/instagram.png";
import AnimatedText from "./components/AnimatedText";

export default function About() {
  return (
    <div>
      <Header />
      <SettingsBox />
      <main className="about bg-[var(--bg-main)] min-h-screen">
        <div className="pt-24 pb-4 sm:pb-8">
          <h1 className="main-title text-4xl sm:text-5xl text-center font-black text-[var(--text-color)] uppercase">
            About
          </h1>
        </div>
        <div className="about-container p-main min-h-[80vh] pb-10 pt-4 sm:pt-12">
          <div className="grid items-start grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <div className="col-span-1 lg:col-span-6 flex justify-center lg:justify-start mt-4 sm:mt-0 mb-6">
              <img
                src={YasserImg}
                alt="Yasser Galal"
                className="w-full h-auto lg:max-w-full rounded-xl"
              />
            </div>
            <div className="col-span-1 lg:col-span-6">
              <AnimatedText />
              <div>
                <div className="flex items-center mt-8">
                  <Link
                    to="https://www.youtube.com/@rationalized"
                    className=""
                    target="_blank"
                  >
                    <img
                      src={YoutubeIcon}
                      alt="Youtube"
                      className="w-10 h-10"
                    />
                  </Link>
                  <Link
                    to="https://x.com/RationalizedYT"
                    className="mx-5"
                    target="_blank"
                  >
                    <img src={XIcon} alt="X - Twitter" className="w-9 h-9" />
                  </Link>
                  <Link
                    to="https://www.instagram.com/yaserahmad0_0?igsh=MWVhejZvZ2F2ODE0MA=="
                    className="ml-3 mr-5"
                    target="_blank"
                  >
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="w-9 h-9"
                    />
                  </Link>
                  <Link
                    to="https://buymeacoffee.com/rationalized"
                    className=""
                    target="_blank"
                  >
                    <img
                      src={BuyMeCoffe}
                      alt="Buy Me a Coffee"
                      className="w-11 h-11"
                    />
                  </Link>
                </div>
              </div>
              <div className="resume mt-10 flex flex-col sm:flex-row">
                <Link
                  to="https://drive.google.com/file/d/1ZsUCT-qrY2kBMYH9z0PEfQct8ocHWLgZ/view"
                  target="_blank"
                  className="text-white text-lg xl:text-xl text-center bg-[var(--main-color)] hover:bg-[var(--bg-main)] hover:text-[var(--text-color)] font-bold py-2 px-4 lg:px-6 rounded-lg border-2 border-transparent hover:border-[var(--main-color)] transition-all duration-500"
                >
                  Check Out My Resume!
                </Link>
                <Link
                  to="mailto:theyasergalal@gmail.com"
                  target="_blank"
                  className="text-lg xl:text-xl mt-5 sm:mt-0 ml-0 sm:ml-8 text-center bg-[var(--bg-main)] text-[var(--text-color)] font-bold py-2 px-4 lg:px-6 rounded-lg border-2 border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--text-white)] transition-all duration-500"
                >
                  Get In Touch With Me!
                </Link>
              </div>
            </div>
          </div>
        </div>
        <SkillsSection />
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}
