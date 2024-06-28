import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTopBtn";
import SettingsBox from "./components/SettingsBox";
import RabidSection from "./components/Rabid";
import Footer from "./components/Footer";

export default function Projects() {
  return (
    <div>
      <Header />
      <ScrollToTop />
      <SettingsBox />
      <main className="projects pt-24 pb-16 bg-[var(--bg-main)]">
        <div>
          <RabidSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
