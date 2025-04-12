import Footer from '@/components/Footer'
import JobsComponent from '@/components/JobsComponent/JobsComponent'
import Navbar from '@/components/Navbar'
import React from 'react'

const JobsContainer = () => {
  return (
    <div>
        <Navbar/>
      <JobsComponent/>
      <Footer/>
    </div>
  )
}

export default JobsContainer
