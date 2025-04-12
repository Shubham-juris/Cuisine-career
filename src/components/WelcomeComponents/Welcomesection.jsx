import React from 'react'
import Image from 'next/image'
import welcome from '../../../public/images/WelcomeImages/welcomephoto.jpg';



const Welcomesection = () => {
  return (
    <div>
      <div>
      <div className="bg-white">
      {/* Image Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src={welcome} // Replace with your actual image URL
          alt="Welcome Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <span className="text-4xl md:text-6xl font-bold italic">“</span>
          <h1 className="text-3xl md:text-5xl font-bold ml-4">WELCOME!</h1>
        </div>
      </div>

      {/* Text Content */}
      <div className="py-8 md:py-12 px-4 md:px-8 lg:px-16 text-center text-gray-700">
        <p className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Are you committed to finding exceptional staff who share your values? Look no further than Fusion-Foodies,
          your trusted source for meaningful employment opportunities in the realms of healthy, accessible food and
          local, sustainable farming.
        </p>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Welcomesection

