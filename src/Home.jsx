import { Link } from "react-router-dom";
import Header from "./components/Header";
import SettingsBox from "./components/SettingsBox";
import Circles from "./components/CirclesAnimation";
import YasserImg from "/src/assets/yasser.jpg";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <SettingsBox />
      <Circles />
      <main className="home-main p-main pt-20 lg:pt-44 bg-[var(--bg-main)] min-h-screen">
        <div className="home-container grid grid-cols-1 lg:grid-cols-12 items-center relative z-20">
          <div className="col-span-1 lg:col-span-6 text-center lg:text-start mt-12">
            <h1 className="text-4xl lg:text-5xl font-black text-[var(--text-color)]">
              Hi I'm Yasser Galal
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold mt-4 lg:mt-6 text-[var(--gray-color)]">
              A Content Creator From Egypt
            </h2>
            <div className="flex iteme-center justify-center lg:justify-start">
            <div className="mt-8 lg:mt-10 pb-8 lg:pb-12">
              <Link
                to="/"
                className="text-white text-lg lg:text-xl bg-[var(--main-color)] hover:bg-[var(--bg-main)] hover:text-[var(--text-color)] font-bold py-1 px-4 lg:px-12 rounded-full border-2 border-transparent hover:border-[var(--main-color)] transition-all duration-500"
              >
                Hire Me
              </Link>
            </div>
            <div className="mt-8 lg:mt-10 pb-8 lg:pb-12 ml-5">
              <Link
                to="/"
                className="text-lg lg:text-xl bg-[var(--bg-main)] text-[var(--text-color)] font-bold py-1 px-4 lg:px-12 rounded-full border-2 border-[var(--main-color)] hover:bg-[var(--main-color)] hover:text-[var(--text-white)] transition-all duration-500"
              >
                Projects
              </Link>
            </div>
            </div>
          </div>
          <div className="col-span-1 lg:col-span-6 mt-8 lg:mt-0">
            <img
              src={YasserImg}
              alt="Yasser Galal"
              className="w-full h-auto relative z-20 rounded-3xl"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
