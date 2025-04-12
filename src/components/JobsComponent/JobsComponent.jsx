const jobData = [
    {
      title: "CHEFS, COOKS, LINE COOKS, DISHWASHERS",
      employer: "Moraine Lake Lodge",
      location: "Lake Louise, Alberta",
      posted: "April 01, 2024",
      expiry: "September 01, 2024",
      season: "May 25th, 2024 to October 2nd, 2024",
      workPermitNote: "Candidates must be legally entitled to work in Canada. We are unable to support work permit applications.",
      positions: [
        "Sous Chef",
        "Chef Tournant",
        "Line Cook",
        "Breakfast Cook",
        "Staff Chef",
        "Dishwasher"
      ],
      wages: [
        { role: "Sous Chef", wage: "$26 - $28 per hour" },
        { role: "Chef Tournant", wage: "$24 - $26 per hour" },
        { role: "Line Cook", wage: "$23 - $25 per hour" },
        { role: "Breakfast Chef", wage: "$23 - $25 per hour" },
        { role: "Line Cook / Breakfast Cover", wage: "$23 - $25 per hour" },
        { role: "Staff Chef / Cafe Prep", wage: "$20 per hour" },
        { role: "Dishwasher", wage: "$19 per hour" }
      ],
      applyLink: "https://applytojob.com"
    },
    {
      title: "COOK",
      employer: "2511592 Alberta Limited (Pints and Bites Gastropub)",
      location: "Wetaskiwin, ABT9A 0S8",
      salary: "$29.30 hourly / 30 to 40 hours per Week",
      employmentType: "Permanent employment/Full time",
      shifts: ["Day", "Early Morning", "Evening", "Morning", "Night", "Weekend"],
      startDate: "As soon as possible",
      benefits: ["Dental plan", "Health care plan"],
      vacancies: 2,
      source: "Job Bank #2843701",
      posted: "April 01, 2024",
      expiry: "September 01, 2024",
      language: "English",
      education: "Secondary (high) school graduation certificate",
      experience: "3 years to less than 5 years",
      tasks: [
        "Prepare and cook complete meals or individual dishes and foods",
        "Prepare and cook special meals for patients as instructed by dietitian or chef",
        "Plan menus, determine size of food portions, estimate food requirements and costs, and monitor and order supplies",
        "Inspect kitchens and food service areas",
        "Train staff in preparation, cooking and handling of food",
        "Order supplies and equipment",
        "Supervise kitchen staff and helpers",
        "Maintain inventory and records of food, supplies and equipment",
        "Recruit and hire staff",
        "Organize buffets and banquets",
        "Manage kitchen operations"
      ],
      employmentGroups: ["Indigenous people", "Newcomers to Canada", "Youth"],
      howToApply: "pintsandbites@gmail.com"
    }
  ];
  
  export default function JobsComponent() {
    return (
      <div className="p-6 space-y-8 flex-col w-full justify-center items-center">
        {jobData.map((job, idx) => (
    <div className="w-full flex flex-col justify-center items-center ">
          <div key={idx} className="bg-white max-w-xl flex flex-col gap-6  p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl w-full flex items-center justify-center font-bold text-gray-800 mb-2">{job.title}</h2>
            <p className="text-sm text-gray-600">Employer: {job.employer}; Location: {job.location}</p>
            <p className="text-sm  text-gray-600 mb-4">Date of posting: {job.posted} | Date of expiry: {job.expiry}</p>
  
            {job.season && (
              <div className="mb-4">
                <h3 className="font-semibold">Details</h3>
                <p className="max-w-lg">Our summer season runs from {job.season}. {job.workPermitNote}</p>
              </div>
            )}
  
            {job.positions && (
              <div className="mb-4">
                <h3 className="font-semibold">We are currently hiring for the following positions</h3>
                <ul className="list-disc list-inside">
                  {job.positions.map((pos, i) => <li key={i}>{pos}</li>)}
                </ul>
              </div>
            )}
  
            {job.wages && (
              <div className="mb-4">
                <h3 className="font-semibold">Wages</h3>
                <ul className="list-disc list-inside">
                  {job.wages.map((w, i) => <li key={i}>{w.role} - {w.wage}</li>)}
                </ul>
              </div>
            )}
  
            {job.salary && <p><strong>Salary:</strong> {job.salary}</p>}
            {job.employmentType && <p><strong>Terms of employment:</strong> {job.employmentType}</p>}
            {job.shifts && <p><strong>Shifts:</strong> {job.shifts.join(", ")}</p>}
            {job.startDate && <p><strong>Start date:</strong> {job.startDate}</p>}
            {job.benefits && (
              <div className="mb-4">
                <h3 className="font-semibold">Benefits</h3>
                <ul className="list-disc list-inside">
                  {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </div>
            )}
            {job.language && <p><strong>Languages:</strong> {job.language}</p>}
            {job.education && <p><strong>Education:</strong> {job.education}</p>}
            {job.experience && <p><strong>Experience:</strong> {job.experience}</p>}
  
            {job.tasks && (
              <div className="mb-4">
                <h3 className="font-semibold">Tasks</h3>
                <ul className="list-disc list-inside">
                  {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                </ul>
              </div>
            )}
  
            {job.employmentGroups && (
              <p><strong>Employment groups:</strong> {job.employmentGroups.join(", ")}</p>
            )}
  
            {job.applyLink && (
              <p className="mt-4"><a href={job.applyLink} className="text-blue-600 underline">Apply Online</a></p>
            )}
            {job.howToApply && (
              <p className="mt-4"><strong>How to apply:</strong> By email: <a href={`mailto:${job.howToApply}`} className="text-blue-600 underline">{job.howToApply}</a></p>
            )}
          </div>
          </div>
        ))}
      </div>
    );
  }
  