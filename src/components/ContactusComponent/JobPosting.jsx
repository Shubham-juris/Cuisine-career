

import React from 'react'

const JobPosting = ({ job }) => {
    const {
        title,
        company,
        datePosted,
        location,
        salary,
        employmentType,
        schedule,
        startDate,
        benefits,
        vacancies,
        languages,
        education,
      } = job;
    
  return (
    <div className="bg-gradient-to-br from-gray-200 to-gray-300 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
    <div className="container mx-auto max-w-3xl bg-white shadow-xl rounded-xl overflow-hidden">
      {/* Header with a more vibrant background */}
      <div className="bg-indigo-600 py-8 text-center">
        <h1 className="text-4xl font-extrabold text-white uppercase tracking-wider mb-2 animate-pulse">
          Exciting Opportunity!
        </h1>
        <p className="text-lg text-indigo-200">Join our growing team!</p>
      </div>
  
      {/* Job Details with improved spacing and typography */}
      <div className="p-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="text-lg text-gray-700">
            <span className="font-semibold text-indigo-600">Company:</span> {company}
          </p>
          <p className="text-gray-600">
            <span className="font-semibold text-indigo-600">Posted on:</span> {datePosted}
          </p>
  
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              <span className="font-semibold text-indigo-600">Location:</span> {location}
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Salary:</span> {salary}
            </li>
            <li>
              <span className="font-semibold text-indigo-600">Employment:</span> {employmentType}
            </li>
            {schedule && (
              <li>
                <span className="font-semibold text-indigo-600">Schedule:</span> {schedule}
              </li>
            )}
            <li>
              <span className="font-semibold text-indigo-600">Start Date:</span> {startDate}
            </li>
            {benefits && (
              <li>
                <span className="font-semibold text-indigo-600">Benefits:</span> {benefits}
              </li>
            )}
            <li>
              <span className="font-semibold text-indigo-600">Openings:</span> {vacancies}
            </li>
          </ul>
  
          <div className="mt-8 space-y-4">
            <h3 className="text-xl font-semibold text-gray-900">Job Overview</h3>
            {languages && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Languages</h4>
                <p className="text-gray-700">{languages}</p>
              </div>
            )}
            {education && (
              <div>
                <h4 className="text-lg font-semibold text-gray-800">Education</h4>
                <p className="text-gray-700">{education}</p>
              </div>
            )}
          </div>
        </div>
  
        {/* Apply Now Form with improved styling */}
        <div className="bg-gray-50 rounded-md p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Apply for this Position</h2>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                Email Address<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                Brief Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="Tell us why you're interested"
              ></textarea>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="button"
                className="inline-flex items-center text-gray-600 text-sm hover:text-gray-800"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
                Attach Resume
              </button>
              <span className="text-gray-500 text-sm">No file chosen</span>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  )
}

export default JobPosting
