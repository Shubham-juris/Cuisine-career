import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Posting from '@/components/Posting'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Posting/>
      <Footer/>
    </div>
  )
}

export default page
