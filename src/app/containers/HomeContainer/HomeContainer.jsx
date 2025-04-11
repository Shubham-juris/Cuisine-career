import AboutUsSection from '@/app/components/HomeComponents/AboutUsSection'
import Footer from '@/app/components/Footer'
import HeroSection from '@/app/components/HomeComponents/HeroSection'
import Navbar from '@/app/components/Navbar'
import WhyPostWithUsSection from '@/app/components/HomeComponents/WhyPostWithUsSEction'
import React from 'react'

const HomeContainer = () => {
  return (
    <div>

      <HeroSection/>
      <AboutUsSection/>
      <WhyPostWithUsSection/>
    
    </div>
  )
}

export default HomeContainer
