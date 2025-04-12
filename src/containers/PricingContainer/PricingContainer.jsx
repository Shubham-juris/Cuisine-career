import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import ContactAndInfoSection from '@/components/PricingComponents/ContactAndInfoSection'
import HiringSection from '@/components/PricingComponents/HiringSection'
import RatesSection from '@/components/PricingComponents/RateSection'
import React from 'react'

const PricingCongtainer = () => {
  return (
    <div>
      <Navbar/>
      <HiringSection/>
      <RatesSection/>
      <ContactAndInfoSection/>
      <Footer/>
    </div>
  )
}

export default PricingCongtainer
