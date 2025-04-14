'use client'
import { useState } from 'react';

const Faqs = [
  {
    question: "What types of jobs are available on Cuisine Career Job Board?",
    answer: "We list jobs across the food industry — including chefs, food scientists, nutritionists, farm workers, nonprofit food organizations, and government roles."
  },
  {
    question: "Is the job board free to use?",
    answer: "Yes! Job seekers can search and apply for jobs absolutely free. Employers can post jobs based on selected pricing plans."
  },
  {
    question: "How can I apply for a job?",
    answer: "Once you find a job you're interested in, click the 'Apply Now' button and follow the instructions. You may need to create a profile and upload your resume."
  },
  {
    question: "How can I contact support?",
    answer: "You can reach us via the Contact Us page or email us directly at cuisineCareers@fusion-foodies.com."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Frequently Asked Questions</h2>
      <div className="space-y-6">
        {Faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-sm bg-white">
            <button
              onClick={() => toggle(index)}
              className="w-full text-left p-4 font-medium text-lg text-gray-800 hover:bg-gray-100 flex justify-between items-center"
            >
              {faq.question}
              <span className="ml-2">{openIndex === index ? '−' : '+'}</span>
            </button>
            {openIndex === index && (
              <div className="px-4 pb-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
