import About from "../../components/About";
import Blog from "../../components/Blog";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import Gallery from "../../components/Gallery";
import MainInfo from "../../components/MainInfo";
import Map from "../../components/Map";
import Navigation from "../../components/Navigation";
import Rodo from "../../components/Rodo";
import Treatment from "../../components/Treatment";
import WhyUs from "../../components/WhyUs";

const FrontPage = () => {
  return (
    <div>
      <MainInfo />
      <Navigation />
      <Carousel />
      <About />
      <WhyUs />
      <Treatment />
      <Gallery />
      <Blog />
      <Map />
      <Footer />
      <Rodo />
    </div>
  );
};

export default FrontPage;
