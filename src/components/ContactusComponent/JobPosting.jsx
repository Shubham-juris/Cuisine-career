

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
    <div>
      <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto max-w-3xl bg-white shadow-lg rounded-md overflow-hidden">
        {/* Header */}
        <div className="bg-gray-400 py-6 text-center">
          <h1 className="text-3xl font-bold text-white uppercase tracking-wider">WE'RE HIRING!</h1>
        </div>

        {/* Job Details */}
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
            <p className="text-gray-700 mb-1"><span className="font-semibold">Company:</span> {company}</p>
            <p className="text-gray-700 mb-4"><span className="font-semibold">Date posted:</span> {datePosted}</p>

            <ul className="list-disc pl-5 text-gray-700">
              <li className="mb-2"><span className="font-semibold">Location:</span> {location}</li>
              <li className="mb-2"><span className="font-semibold">Salary:</span> {salary}</li>
              <li className="mb-2"><span className="font-semibold">Terms of employment:</span> {employmentType}</li>
              {schedule && <li className="mb-2"><span className="font-semibold">Schedule:</span> {schedule}</li>}
              <li className="mb-2"><span className="font-semibold">Start date:</span> {startDate}</li>
              {benefits && <li className="mb-2"><span className="font-semibold">Benefits:</span> {benefits}</li>}
              <li><span className="font-semibold">Vacancies:</span> {vacancies}</li>
            </ul>

            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Overview</h3>
              {languages && (
                <div>
                  <h4 className="text-md font-semibold text-gray-700 mb-1">Languages</h4>
                  <p className="text-gray-700">{languages}</p>
                </div>
              )}
              {education && (
                <div className="mt-2">
                  <h4 className="text-md font-semibold text-gray-700 mb-1">Education</h4>
                  <p className="text-gray-700">{education}</p>
                </div>
              )}
            </div>
          </div>

          {/* Apply Now Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Apply Now</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email<span className="text-red-500">*</span></label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows="4"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="inline-flex items-center text-gray-600 text-sm hover:text-gray-800"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                  Attach Resume
                </button>
                <span className="text-gray-500 text-sm">Attachments (0)</span>
              </div>
              <button
                type="submit"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default JobPosting
