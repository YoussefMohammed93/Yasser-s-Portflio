import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTopBtn";
import SettingsBox from "./components/SettingsBox";
import RabidSection from "./components/Rabid";

export default function Projects() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <SettingsBox />
      <main className="projects pt-28 bg-[var(--bg-main)]">
        <div>
          <RabidSection />
        </div>
      </main>
    </div>
  );
}
