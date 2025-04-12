import Footer from '@/components/Footer'
import SearchByProvince from '@/components/JobSeekarComponents/SearchByProvince'
import Navbar from '@/components/Navbar'

import React from 'react'

const JobSeekersConatiner = () => {
  return (
    <div>
    <Navbar/>
    <SearchByProvince/>
    <Footer/>
    </div>
  )
}

export default JobSeekersConatiner
