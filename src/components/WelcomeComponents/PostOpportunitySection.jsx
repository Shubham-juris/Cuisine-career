import React from 'react'

const PostOpportunitySection = () => {
  return (
    <div>
      <div className="bg-white py-12 md:py-16 px-4 md:px-8 lg:px-16 text-gray-700">
      <div className="max-w-3xl mx-auto text-center">
        <p className="mb-4 text-lg leading-relaxed">
          You have the flexibility to choose the rate that aligns with your budget and needs directly on the posting
          page.
        </p>
        <p className="mb-6 text-lg leading-relaxed">
          However, we understand that financial constraints shouldn't hinder your ability to find the right talent. As a
          social purpose-driven organization, we're committed to supporting our community rather than profiteering.
          If you're unable to pay the full rate, we offer flexible options tailored to your budget, particularly for nonprofit
          groups and startups. Simply check our rates or reach out to us for further discussion.
        </p>

        <div className="mt-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Have multiple postings? We've got you covered. Here are some options:</h3>
          <ul className="list  pl-6">
            <li className="mb-1">Pay the appropriate rate for each posting, if possible.</li>
            <li className="mb-1">Contact us via email to explore potential discounts.</li>
            <li>Consider consolidating multiple postings into a single, cost-effective listing.</li>
          </ul>
        </div>

        <p className="mb-8 text-lg italic leading-relaxed">
          At Fusion-Foodies, we're here to ensure you find the perfect fit for your team without breaking the bank.
        </p>

        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
        >
          POST AN OPPORTUNITY
        </button>
      </div>
    </div>
    </div>
  )
}

export default PostOpportunitySection
