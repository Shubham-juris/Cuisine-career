import React from 'react'
import JobPosting from './JobPosting'


const Contact = ({ jobs }) => {
  return (
    <div>
       {jobs.map((job, index) => (
        <JobPosting key={index} job={job} />
      ))}
    </div>
  )
}

export default Contact

