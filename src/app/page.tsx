import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="app background-grey">
      <Navbar />
      <HeroSection />
      <Banner />
    </div>
  );
}
