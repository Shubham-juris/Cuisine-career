import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import AdvocacySatisfactionSection from '@/components/WhyusComponents/AdvocacySatisfactionSection'
import FeatureSection from '@/components/WhyusComponents/FeatureSection'
import WhyPostHereSection from '@/components/WhyusComponents/WhyPostHereSection'
import React from 'react'

const WhyusContainer = () => {
  return (
    <div>
        <Navbar/>
      <WhyPostHereSection/>
      <FeatureSection/>
      <AdvocacySatisfactionSection/>
      <Footer/>
    </div>
  )
}

export default WhyusContainer
