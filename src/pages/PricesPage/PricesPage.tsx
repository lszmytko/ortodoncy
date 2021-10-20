import React, { useEffect, useRef } from "react";
import Blog from "../../components/Blog/Blog";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import MainInfo from "../../components/MainInfo/MainInfo";
import Map from "../../components/Map/Map";
import Navigation from "../../components/Navigation/Navigation";
import Prices from "../../components/Prices/Prices";
import Rodo from "../../components/Rodo/Rodo";
import WhyUs from "../../components/WhyUs/WhyUs";

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
