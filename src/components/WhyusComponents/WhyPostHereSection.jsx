
import React from 'react'
import Image from 'next/image';
import whyus from'../../../public/images/WelcomeImages/whyus.jpg';

const WhyPostHereSection = () => {
  return (
    <div>
      <div className="bg-white">
      {/* Image Banner */}
      <div className="relative w-full h-64 md:h-96 overflow-hidden">
        <Image
          src={whyus} // Replace with your actual image URL
          alt="Food Preparation"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <span className="text-4xl md:text-6xl font-bold italic">“</span>
          <h2 className="text-3xl md:text-5xl font-bold ml-4">WHY POST HERE?</h2>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="py-8 md:py-12 px-4 md:px-8 lg:px-16 text-center text-gray-700">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">WELCOME TO FUSION-FOODIES, WHERE WE'RE PROUD TO BE</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 uppercase tracking-wider">CANADA'S</h2>
        {/* You might have more text following "CANADA'S" based on the full context */}
      </div>
    </div>
    </div>
  )
}

export default WhyPostHereSection
