import Blog from "../../components/Blog";
import Carousel from "../../components/Carousel";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import MainInfo from "../../components/MainInfo";
import Map from "../../components/Map";
import Navigation from "../../components/Navigation";
import WhyUs from "../../components/WhyUs";

const ContactPage = () => {
  return (
    <div>
      <MainInfo />
      <Navigation />
      <Carousel />
      <Contact />
      <WhyUs />
      <Gallery />
      <Blog />
      <Map />
      <Footer />
    </div>
  );
};

export default ContactPage;
