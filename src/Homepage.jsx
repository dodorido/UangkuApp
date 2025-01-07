import Footer  from "./component/Footer";
import FAQsection  from "./component/FAQsection";
import FeatureSection from "./component/FeatureSection";
import HeroSection  from "./component/HeroSection";
import Navbar from "./component/Navbar";


export const Homepage = () => {
  
  return (
  <div className="homepage-container">
    <Navbar />
        <div className="max-w-7xl mx-auto pt-20 px-6">
            <HeroSection />
            <FeatureSection />
            <FAQsection />
            <Footer />
        </div>
  </div>
  )
}
export default Homepage;