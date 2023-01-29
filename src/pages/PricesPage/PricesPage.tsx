import Blog from "../../components/Blog";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";
import MainInfo from "../../components/MainInfo";
import Map from "../../components/Map";
import Navigation from "../../components/Navigation";
import Prices from "../../components/Prices";
import Rodo from "../../components/Rodo";
import WhyUs from "../../components/WhyUs";

const PricesPage = () => {
  return (
    <div>
      <MainInfo />
      <Navigation />
      <Carousel />
      <Prices />
      <WhyUs />
      <Blog />
      <Map />
      <Footer />
      <Rodo />
    </div>
  );
};

export default PricesPage;
