import React from 'react'
import QuateBlock from '../common/QuateBlock'
import BestOffers from '../home-page/BestOffers'
import HomeAbout from '../home-page/HomeAbout'
import HomeSlider from '../home-page/HomeSlider'
import PopularProducts from '../home-page/PopularProducts'
import Testimonials from '../home-page/Testimonials'
import TredingProducts from '../home-page/TredingProducts'

function HomePage() {
    return (
        <>
          <HomeSlider />
          <HomeAbout />
          <TredingProducts />
          <PopularProducts />
          <BestOffers />
          <QuateBlock />
          <Testimonials />
        </>
    )
}

export default HomePage;
