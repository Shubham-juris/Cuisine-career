import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Platform from '@/components/WelcomeComponents/Platform'
import PostOpportunitySection from '@/components/WelcomeComponents/PostOpportunitySection'
import Welcomesection from '@/components/WelcomeComponents/Welcomesection'
import WhatDoesItCostSection from '@/components/WelcomeComponents/WhatDoesItCostSection'

import React from 'react'

const WelcomeContainer = () => {
  return (
    <div>
        <Navbar/>
      <Welcomesection/>
   
    <Platform/>
    <WhatDoesItCostSection/>
    <PostOpportunitySection/>
      <Footer/>
    </div>
  )
}

export default WelcomeContainer
