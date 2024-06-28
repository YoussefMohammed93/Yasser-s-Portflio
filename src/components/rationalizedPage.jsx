import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTopBtn";
import SettingsBox from "./SettingsBox";
import RationalizedSection from "./rationalized";

export default function RationalizedProject() {
  return (
    <div>
      <Header />
      <RationalizedSection />
      <Footer />
      <ScrollToTop />
      <SettingsBox />
    </div>
  );
}
