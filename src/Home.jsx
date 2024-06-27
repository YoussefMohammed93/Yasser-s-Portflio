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
        <div className="home-container grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="col-span-1 lg:col-span-6 text-center lg:text-start mt-12">
            <h1 className="text-4xl lg:text-5xl font-black text-[var(--text-color)]">
              Hi I'm Yasser Galal
            </h1>
            <h2 className="text-lg lg:text-xl font-semibold mt-4 lg:mt-6 text-[var(--gray-color)]">
              A Content Creator From Egypt
            </h2>
            <div className="mt-8 lg:mt-10 pb-8 lg:pb-12">
              <Link
                to="/"
                className="text-white text-lg lg:text-xl bg-[var(--main-color)] font-bold py-1 px-8 lg:px-12 rounded-full border-2 border-transparent hover:border-[var(--text-color)] transition-all duration-500"
              >
                Projects
              </Link>
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
