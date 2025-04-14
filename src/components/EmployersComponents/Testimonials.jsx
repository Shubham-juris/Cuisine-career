import React from 'react';


const testimonials = [
  {
    name: 'William Chen, FreshGrown Farms',
    text: "I've been blown away by the quality of candidates I've found through Fusion-Foodies. It's been the most effective platform I've used for hiring. Thank you!"
  },
  {
    name: 'Emily Dawson, Sweet Haven Bakery',
    text: "Fusion-Foodies has been a lifesaver for us. As a small-town bakery, we don’t have a big budget for hiring, but the candidates we’ve found here have been outstanding. We’re grateful for this service."
  },
  {
    name: 'David Patel, GreenLeaf Cafe',
    text: "I can't recommend Fusion-Foodies enough. We've received an overwhelming response to our job postings, and the caliber of applicants has been exceptional. It’s made our hiring process so much easier!"
  },
  {
    name: 'Jessica Lee, UrbanEats Restaurant',
    text: "Fusion-Foodies has become our go-to for recruiting. The candidates we’ve found here are passionate and dedicated. It’s truly a game-changer for our business."
  },
  {
    name: 'Alex Johnson, Harvest for All',
    text: "I have worked on several notable projects throughout my career. Some of these include developing a social media campaign for a healthcare provider that resulted in a 20% increase in patient referrals, creating a content strategy for a fintech startup that led to a 50% increase in website traffic, and managing email marketing campaigns for a technology company that resulted in a 30% increase in sales."
  },
  {
    name: 'Contact Me',
    text: "As a nonprofit organization focused on sustainable agriculture, finding the right talent is crucial for us. Fusion-Foodies has been instrumental in connecting us with like-minded individuals who share our values. Thank you for providing such a valuable service!"
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-gray-100 text-gray-800 py-12  ">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700">
          Discover What Our Users Have to Say
        </h2>
        <p className="text-sm md:text-base text-gray-600 mt-2">
          Explore firsthand experiences from members of our vibrant community:
        </p>
      </div>

      {/* Content Block */}
      <div className="bg-white shadow-lg rounded-lg p-6 px-4  md:px-40 md:p-10  mx-auto">
        <h3 className="text-2xl font-bold text-center text-gray-700 mb-6">
          JANE SMITH'S PROFESSIONAL WEBSITE
        </h3>

        <div className="flex flex-col md:flex-row gap-14 items-start">
          {/* Quote Icon */}
          <div className="bg-[#F79C1F] w-28 h-28 md:w-36 md:h-36 flex items-center justify-center rounded-md shrink-0 mx-auto md:mx-0">
            <img
              src='/images/EmployersImages/testimonials.jpg'
              alt="Quote icon"
              className="object-contain"
              
            />
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 gap-6 flex-1">
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <h4 className="font-semibold text-gray-800">
                  {testimonial.name}
                </h4>
                <p className="italic text-gray-600 mt-1">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Call-to-Action */}
      <div className="text-center mt-12">
        <p className="text-md md:text-lg text-gray-700">
          Join the growing community of satisfied users on Fusion-Foodies and discover how we can help you fin
        </p>
      </div>
    </section>
  );
}
