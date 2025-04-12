
import React from 'react'

const Aboutsub = () => {
  return (
    <div>


<div className="bg-gray-50 text-center py-10">
      {/* Our Mission */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">ABOUT US</h2>
          <div className="w-12 h-1 bg-gray-800 rounded-full mx-auto mb-0"></div> </div>
      </div>



        {/* section1-the front about page */}
      <div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Image Section */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img
            src="frontabout.jpg"
            alt="Sustainable Food Preparation"
            className="w-full h-auto object-cover"
          />
          {/* Replace the placeholder URL with your actual image URL */}
        </div>

        {/* Text Section */}
        <div className="text-center text-gray-700">
          <p className="text-lg leading-relaxed mb-4">
            Join Canada's largest community of sustainable food professionals, job
            seekers, and volunteers dedicated to fostering meaningful connections
            within the realm of healthy, local, and sustainable food. At Fusion-Foodies,
            we're more than just a job board - we're a catalyst for change in the
            local food landscape.
          </p>
        </div>
      </div>
    </div>

    {/* // section 2 where two images are aparted */}

    <div className="py-12 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="frontabout.jpg"
            alt="Kitchen Preparation"
            className="w-full h-auto object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Discover Diverse Opportunities</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Fusion-Foodies serves as the ultimate platform for all kinds of work in local
              and sustainable food, spanning jobs, entrepreneurship, farming, board
              positions, internships, management roles, partnerships, and volunteering
              opportunities. From organic farmers to executive directors, from educators
              to researchers to chefs - our community embraces a wide spectrum of roles
              aimed at promoting healthy, local food practices.
            </p>
          </div>
        </div>

        {/* Right Card */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="rightdining.jpg"
            alt="Dining Table Scene"
            className="w-full h-auto object-cover"
          />
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Discover Diverse Opportunities</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Fusion-Foodies serves as the ultimate platform for all kinds of work in local
              and sustainable food, spanning jobs, entrepreneurship, farming, board
              positions, internships, management roles, partnerships, and volunteering
              opportunities. From organic farmers to executive directors, from educators
              to researchers to chefs - our community embraces a wide spectrum of roles
              aimed at promoting healthy, local food practices.
            </p>
          </div>
        </div>
      </div>
    </div>


{/* section3 the first that repeat in the 3rd section */}
<div className="bg-white py-12">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Image Section */}
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img
            src="sustainable.jpg"
            alt="Sustainable Food Preparation"
            className="w-full h-auto object-cover"
          />
          {/* Replace the placeholder URL with your actual image URL */}
        </div>

        {/* Text Section */}
        <div className="text-center text-gray-700">
            <h1 className='text-center text-black text-2xl mb-5'>Mission-Driven Advocacy</h1>
          <p className="text-lg leading-relaxed mb-4">
        Fusion-Foodies is more than just a job board -we are a catalyst for the change .We actively support the local and organic food movement ,striving to make a positive impact on our food system.        </p>
        </div>
      </div>
    </div>


{/* section4 that is te mission section */}

<div className="bg-gray-50 text-center py-10">
      {/* Our Mission */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">OUR MISSION</h2>
          <div className="w-12 h-1 bg-gray-800 rounded-full mx-auto mb-0"></div> </div>
      </div>

      <div className='text-center mt-19'>
      <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
            <li className="mb-2">
              Inspire and assist individuals in finding meaningful work with local
              food organizations, farms, businesses, schools, and institutions.
            </li>
            <li className="mb-2">
              Support local, sustainable, and organic food projects and initiatives.
            </li>
            <li>
              Empower more people to channel their energy, skills, and enthusiasm
              towards the local food movement.
            </li>
          </ul>
      </div>

{/* section5-below the mission */}
<div className="bg-gray-50 mt-16 text-center py-10">
      {/* Our Mission */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">JOIN THE MOVEMENT</h2>
          <div className="w-12 h-1 bg-gray-800 rounded-full mx-auto mb-0"></div> </div>
      </div>

      <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <img
            src="handshake.jpg"
            alt="Handshake"
            className="w-full h-auto object-cover"
          />
          {/* Replace the placeholder URL with your actual image URL */}
        </div>

        {/* Right Side: Text Content */}
        <div className="text-gray-700">
          
         
          <p className="leading-relaxed text-lg">
            With over 5,000 local food postings to date, Fusion-Foodies has a proven
            track record of success in local food employment. Whether you're seeking
            opportunities in local food, food security, food nonprofits, organic
            farming, urban agriculture, or sustainable agriculture - Fusion-Foodies is
            your gateway to meaningful work and impactful change in the food industry.
          </p>
        </div>
      </div>
    </div>




    </div>





  )
}

export default Aboutsub
