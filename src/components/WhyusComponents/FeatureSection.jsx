import React from 'react'

const FeatureSection = () => {
  return (
    <div>
        <div className="bg-gray-100 py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {/* Effective Connections */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">EFFECTIVE CONNECTIONS</h3>
          <p className="text-gray-700 leading-relaxed">
            Our platform, Fusion-Foodies, is designed to connect you with the absolute best talent in the industry. We
            guarantee that you'll find skilled and passionate individuals who are perfect for the job at hand.
          </p>
        </div>

        {/* Fast and Easy Posting */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">FAST AND EASY POSTING</h3>
          <p className="text-gray-700 leading-relaxed">
            We understand that time is valuable. That's why we've made posting opportunities on Fusion-Foodies quick and
            effortless. Our one-step posting page takes just seconds to complete. Alternatively, you can email us your
            posting, and we'll take care of the rest.
          </p>
        </div>

        {/* Affordable Accessibility */}
        <div className="bg-white rounded-md shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">AFFORDABLE ACCESSIBILITY</h3>
          <p className="text-gray-700 leading-relaxed">
            We believe that everyone should have access to opportunities in the food industry. That's why we maintain
            modest rates to keep Fusion-Foodies running smoothly while still delivering exceptional service.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FeatureSection
