import React from 'react'

const AdvocacySatisfactionSection = () => {
  return (
    <div>
       <div className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {/* Foodist Advocacy */}
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 uppercase tracking-wider">FOODIST ADVOCACY</h3>
          <p className="text-gray-700 leading-relaxed">
            FoodWork is more than just a platform - it's a movement. Our team consists of local food advocates who actively
            promote sustainable and secure food practices. By using our platform, you're not just finding talent - you're
            supporting a cause.
          </p>
        </div>

        {/* Guaranteed Satisfaction */}
        <div className="p-6">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-yellow-500 mr-2">I</span> {/* Using "I" as a visual separator */}
            <h3 className="text-xl font-semibold text-gray-800 uppercase tracking-wider">GUARANTEED SATISFACTION</h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Your satisfaction is our priority. If you're not completely satisfied with the response you receive, our
            dedicated team is here to work with you to find a solution. And if we can't meet your expectations, we'll
            gladly refund your payment.
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AdvocacySatisfactionSection
