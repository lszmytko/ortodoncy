import React from 'react'
import Dentists from '../../components/Dentists/Dentists'
import Footer from '../../components/Footer/Footer'
import MainInfo from '../../components/MainInfo/MainInfo'
import Map from '../../components/Map/Map'
import Navigation from '../../components/Navigation/Navigation'
import WhyUs from '../../components/WhyUs/WhyUs'

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
    )
}

export default AboutUsPage
