import React from 'react'
import Image from 'next/image'
import platform from '../../../public/images/WelcomeImages/platform.jpg'
const Platform = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="rounded-lg overflow-hidden shadow-md">
          <Image
            src={platform}// Replace with your actual image URL
            alt="Professional Kitchen"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Unlike other platforms, we understand that authenticity and quality matter.</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            When you post with Fusion-Foodies, you're not just casting a net into the vast sea of job-seekers - you're engaging
            with a community of like-minded individuals who are genuinely interested in your opportunity.
          </p>
        </div>
      </div>

      {/* Guarantee Section */}
      <div className="container mx-auto mt-12 py-8 border-t border-gray-300">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-600 leading-relaxed mb-4">
            Say goodbye to sifting through countless resumes from candidates who haven't even bothered to read your posting.
            Instead, expect to receive a concise yet highly qualified pool of motivated candidates who are genuinely excited
            about the prospect of joining your team.
          </p>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Guarantee:</h3>
            <p className="text-gray-600 leading-relaxed">
              We're confident that you'll be thrilled with the results of your posting on Fusion-Foodies. However, if for
              any reason you're not completely satisfied, we stand by our promise to refund your payment without any questions
              or hassle. Your satisfaction is our priority.
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Platform
