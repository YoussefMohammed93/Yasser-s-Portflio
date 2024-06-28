import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTopBtn";
import SettingsBox from "./SettingsBox";
import RabidSection from "./Rabid";

export default function RapidProject() {
  return (
    <div>
      <Header />
      <RabidSection />
      <Footer />
      <ScrollToTop />
      <SettingsBox />
    </div>
  );
}
