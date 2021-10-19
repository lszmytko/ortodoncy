import React from "react";
import About from "../../components/About/About";
import Blog from "../../components/Blog/Blog";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import MainInfo from "../../components/MainInfo/MainInfo";
import Map from "../../components/Map/Map";
import Navigation from "../../components/Navigation/Navigation";
import Rodo from "../../components/Rodo/Rodo";
import Treatment from "../../components/Treatment/Treatment";
import WhyUs from "../../components/WhyUs/WhyUs";

const FrontPage = () => {
  return (
    <div>
      <MainInfo />
      <div className="section-center">
        <Navigation />
        <Carousel />
        <About />
      </div>
      <WhyUs />
      <div className="section-center">
        <Treatment />
        <Gallery />
      </div>
      <Blog />
      <Map />
      <Footer />
      <Rodo />
    </div>
  );
};

export default FrontPage;
