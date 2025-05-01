import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import YtVieo from "./components/YtVideo/YtVieo";
import TweetSection from "./components/TweetLove/TweetSection";
import CompanyLogoCarousel from "./components/CompanyLogoCarousel/CompanyLogoCarousel";
import Aos from "aos";
import CohortSection from "./components/CohortSection/CohortSection";

function App() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <>
      <Navbar />
      <HeroSection />
      <YtVieo />
      <TweetSection />
      <CompanyLogoCarousel />
      <CohortSection />
    </>
  );
}

export default App;
