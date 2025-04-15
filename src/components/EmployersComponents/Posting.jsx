import React from 'react';

export default function Posting() {
  return (
    <section className="bg-white text-gray-800 py-12 px-4 md:px-16">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#a89984] tracking-wide uppercase">Unlock Opportunities</h2>
        <div className="w-12 h-1 bg-[#a89984] mx-auto my-2" />
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Discover seamless ways to post your opportunities and manage them effortlessly with Fusion-Foodies:
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-10">
        {/* Post Opportunity Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Post Your Opportunity</h3>
          <p className="text-gray-700 mt-2">
            
            Easily share your job, contract, RFP, board position, internship, or volunteer opportunity using our user-friendly "Post a Job" page. 
            Alternatively, you can email your posting to: 
            <a href="mailto:cuisineCareers@fusion-foodies.com" className="text-blue-600 underline ml-1">cuisineCareers@fusion-foodies.com</a>.
          </p>
          <button className="mt-4 bg-[#d6c7b0] hover:bg-[#c8b49a] text-black px-6 py-2 rounded shadow-sm transition">POST</button>
        </div>

        {/* View Posting Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">View Your Posting</h3>
          <p className="text-gray-700 mt-2">

            Sit back as our dedicated staff prepare and distribute your posting promptly. Receive a confirmation email with a direct link to your posting, allowing you to revise, share, or manage it with ease. Keep an eye out for your posting in our job listings.
          </p>
          <button className="mt-4 bg-[#d6c7b0] hover:bg-[#c8b49a] text-black px-6 py-2 rounded shadow-sm transition">VIEW POSTING</button>
        </div>

        {/* Modify Posting */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Modify Your Posting</h3>
          <p className="text-gray-700 mt-2">

            Tailor your posting anytime to meet your evolving needs. Access all the necessary tools for revision and management in the "Thank you for posting" message we sent when your posting went live. Reach out to us for further assistance if needed.
          </p>
        </div>

        {/* Extend Posting */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Extend Your Posting</h3>
          <p className="text-gray-700 mt-2">
            Extend the lifespan of your posting effortlessly. Utilize the tools provided in the "Thank you for posting" message or contact us directly for seamless extension services, free of charge.
          </p>
        </div>

        {/* Amplify Posting */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Amplify Your Posting</h3>
          <p className="text-gray-700 mt-2">
            Maximize your reach by promoting your posting further. Contact our team for personalized support, troubleshooting, and strategic solutions to attract the ideal candidates. Our assistance comes at no additional cost to you.
          </p>
        </div>

        {/* Close Posting */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Close Your Posting</h3>
          <p className="text-gray-700 mt-2">
            Conclude your posting at your convenience. Whether it’s on the designated "display until" date or earlier, you can easily close it using the "Revise" link in the "Thank you for posting" message.
          </p>
        </div>

        {/* Retrieve Old Postings */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Retrieve Old Postings</h3>
          <p className="text-gray-700 mt-2">
            Facilitate payments seamlessly through our secure online platform. Choose from various payment options, including VISA, MasterCard, PayPal, or Interac e-Transfer. Your contributions sustain Fusion-Foodies and enable us to maintain our renowned level of service.
          </p>
        </div>

        {/* Need Assistance */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900">Need Assistance?</h3>
          <p className="text-gray-700 mt-2">
            Have questions or seeking guidance on finding the best candidates? Reach out to us directly or refer to our Employer FAQ for comprehensive assistance. We're here to support your hiring needs every step of the way.
          </p>
          <button className="mt-4 bg-[#d6c7b0] hover:bg-[#c8b49a] text-black px-6 py-2 rounded shadow-sm transition">FAQ</button>
        </div>
      </div>
    </section>
  );
}
