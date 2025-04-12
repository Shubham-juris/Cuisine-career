export default function ContactAndInfoSection() {
    return (
      <section className="w-full bg-white px-4 py-4 lg:py-12 flex flex-col items-center">
        {/* Contact Us Section */}
        <div className="text-center mb-10">
          <h3 className="text-lg font-semibold text-black">Contact us</h3>
          <ul className="list-disc mt-2 text-sm text-gray-700 space-y-1 text-left mx-auto max-w-md pl-6">
            <li>
              Other/annual arrangement (please <span className="text-blue-600 underline">contact us</span>)
            </li>
            <li>
              Can’t pay/special circumstances (please <span className="text-blue-600 underline">contact us</span>)
            </li>
          </ul>
        </div>
  
        {/* Info Paragraph Section */}
        <div className="bg-[#f7f7f7] w-full px-2 lg:px-52 py-5 lg:py-10 text-sm md:text-base text-gray-800 space-y-6 ">
          <p>
            Your posting can remain online for as long as necessary, and you have the flexibility to extend it at any time.
            In the event that initial interviews don’t yield suitable candidates, you can reopen your posting at no
            additional charge.
          </p>
          <p>
            At Fusion-Foodies, we believe that financial constraints shouldn't hinder your ability to access our platform.
            No posting is rejected due to an honest inability to pay. We understand that not everyone has a budget
            available for posting opportunities.
          </p>
          <p>
            If you find yourself in a position where paying would prevent you from posting, simply email us with the
            subject ‘Can’t pay’, and we’ll handle the rest. Your opportunity deserves to be seen, and we’re committed to
            ensuring that all voices are heard, regardless of financial circumstances.
          </p>
          <p>
            Join us in fostering inclusivity and accessibility in the food industry by posting with Fusion-Foodies today.
          </p>
        </div>
  
        {/* Bottom Statement */}
        <div className="mt-10 text-center text-base text-black font-medium">
          Choose Fusion-Foodies for a streamlined, effective hiring.
        </div>
      </section>
    );
  }
  