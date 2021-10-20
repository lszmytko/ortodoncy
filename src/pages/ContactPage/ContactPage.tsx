import React from 'react';
import Blog from '../../components/Blog/Blog';
import Carousel from '../../components/Carousel/Carousel';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/Gallery';
import MainInfo from '../../components/MainInfo/MainInfo';
import Map from '../../components/Map/Map';
import Navigation from '../../components/Navigation/Navigation';
import WhyUs from '../../components/WhyUs/WhyUs';

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
    )
}

export default ContactPage
