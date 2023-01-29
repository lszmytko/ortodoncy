import Dentists from "../../components/Dentists";
import Footer from "../../components/Footer";
import MainInfo from "../../components/MainInfo";
import Map from "../../components/Map";
import Navigation from "../../components/Navigation";
import WhyUs from "../../components/WhyUs";

const AboutUsPage = () => {
  return (
    <div>
      <MainInfo />
      <Navigation />
      <Dentists />
      <WhyUs />
      <Map />
      <Footer />
    </div>
  );
};

export default AboutUsPage;
