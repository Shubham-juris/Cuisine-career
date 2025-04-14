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
      title: "COOK JOB",
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
    },
    {
      "title": "FOOD MANAGER",
      "employer": "Local Harvest Café",
      "location": "Chilliwack, BC",
      "posted": "April 10, 2024",
      "expiry": "August 15, 2024",
      "season": "May 1st, 2024 to September 30th, 2024",
      "workPermitNote": "Candidates must be legally entitled to work in Canada. No immigration support provided.",
      "positions": ["Line Cook", "Prep Cook", "Sous Chef"],
      "wages": [
        { "role": "Line Cook", "wage": "$21 - $23 per hour" },
        { "role": "Prep Cook", "wage": "$19 - $21 per hour" },
        { "role": "Sous Chef", "wage": "$24 - $26 per hour" }
      ],
      "applyLink": "https://applytoharvestcafe.com"
    },
    {
      "title": "RESTAURANT MANAGER",
      "employer": "Field & Flame Bistro",
      "location": "Langley, BC",
      "posted": "April 12, 2024",
      "expiry": "July 15, 2024",
      "season": "Full-time, Year-Round",
      "workPermitNote": "Applicants must be eligible to work in Canada. LMIA not available.",
      "positions": ["Restaurant Manager"],
      "wages": [
        { "role": "Restaurant Manager", "wage": "$50,000 - $58,000 per year (plus bonuses)" }
      ],
      "applyLink": "https://fieldflame.ca/jobs"
    },
    {
      "title": "ORGANIC VEGETABLE FARM WORKERS",
      "employer": "BC Local Roots Farm Co-op",
      "location": "Abbotsford, BC",
      "posted": "April 05, 2024",
      "expiry": "September 10, 2024",
      "season": "April 15th, 2024 to October 31st, 2024",
      "workPermitNote": "Only applicants who can legally work in Canada will be considered.",
      "positions": ["Field Hand", "Harvest Assistant", "Wash/Pack Staff"],
      "wages": [
        { "role": "Field Hand", "wage": "$18.50 per hour" },
        { "role": "Harvest Assistant", "wage": "$19 per hour" },
        { "role": "Wash/Pack Staff", "wage": "$19.50 per hour" }
      ],
      "applyLink": "https://localrootscoop.org/jobs"
    },
    {
      "title": "FOOD COUNTER ATTENDANTS",
      "employer": "Green Fork Organic Eatery",
      "location": "Surrey, BC",
      "posted": "April 08, 2024",
      "expiry": "July 20, 2024",
      "season": "Part-time & Full-time available",
      "workPermitNote": "Must be eligible to work in Canada.",
      "positions": ["Food Counter Attendant", "Cashier", "Cafe Server"],
      "wages": [
        { "role": "Food Counter Attendant", "wage": "$17.75 per hour" },
        { "role": "Cashier", "wage": "$18 per hour" },
        { "role": "Cafe Server", "wage": "$18.50 per hour" }
      ],
      "applyLink": "https://greenforkjobs.ca/apply"
    },
    {
      "title": "FOOD SERVICE SUPERVISOR",
      "employer": "West Coast Organic Deli",
      "location": "Burnaby, BC",
      "posted": "April 09, 2024",
      "expiry": "August 31, 2024",
      "season": "Permanent, Full-time",
      "workPermitNote": "No work permit assistance provided. Must be authorized to work in Canada.",
      "positions": ["Food Service Supervisor"],
      "wages": [
        { "role": "Food Service Supervisor", "wage": "$21 - $23 per hour" }
      ],
      "applyLink": "https://westcoastdeli.ca/careers"
    },
    {
      "title": "KITCHEN MANAGER",
      "employer": "Harvest Table Farm Café",
      "location": "Maple Ridge, BC",
      "posted": "April 07, 2024",
      "expiry": "September 01, 2024",
      "season": "Full-time, Seasonal or Permanent",
      "workPermitNote": "Only applicants legally allowed to work in Canada will be considered.",
      "positions": ["Kitchen Manager"],
      "wages": [
        { "role": "Kitchen Manager", "wage": "$25 - $28 per hour" }
      ],
      "applyLink": "https://harvesttablefarmcafe.ca/jobs"
    },
    {
      "title": "BAKERS",
      "employer": "Sunshine Organic Bakery",
      "location": "Victoria, BC",
      "posted": "April 11, 2024",
      "expiry": "August 15, 2024",
      "season": "Full-time, Year-Round",
      "workPermitNote": "Must be eligible to work in Canada.",
      "positions": ["Baker", "Pastry Chef"],
      "wages": [
        { "role": "Baker", "wage": "$20 - $22 per hour" },
        { "role": "Pastry Chef", "wage": "$22 - $24 per hour" }
      ],
      "applyLink": "https://sunshinebakery.ca/careers"
    },
    {
      "title": "FOOD COUNTER SUPERVISOR",
      "employer": "Harvest Table Bistro",
      "location": "Vancouver, British Columbia",
      "posted": "April 10, 2024",
      "expiry": "September 15, 2024",
      "season": "June 1st, 2024 to October 15th, 2024",
      "workPermitNote": "Candidates must be legally entitled to work in Canada. We are unable to support work permit applications.",
      "positions": [
        "Line Cook",
        "Prep Cook",
        "Breakfast Cook"
      ],
      "wages": [
        { "role": "Line Cook", "wage": "$21 - $24 per hour" },
        { "role": "Prep Cook", "wage": "$20 - $22 per hour" },
        { "role": "Breakfast Cook", "wage": "$22 - $24 per hour" }
      ],
      "applyLink": "https://harvesttablebistro.com/jobs"
    },
    {
      "title": "RESTRATURANT MANAGER",
      "employer": "Ocean Breeze Dining",
      "location": "Victoria, British Columbia",
      "posted": "March 20, 2024",
      "expiry": "August 20, 2024",
      "season": "Year-round position",
      "workPermitNote": "Applicants must have permanent residency or valid Canadian work authorization.",
      "positions": [
        "Restaurant Manager"
      ],
      "wages": [
        { "role": "Restaurant Manager", "wage": "$50,000 - $60,000 annually" }
      ],
      "applyLink": "https://oceanbreezedining.ca/careers"
    },
    {
      "title": "ORGANIC FARM WORKERS",
      "employer": "GreenSprout Farms",
      "location": "Fraser Valley, British Columbia",
      "posted": "April 05, 2024",
      "expiry": "September 30, 2024",
      "season": "May 25th, 2024 to October 2nd, 2024",
      "workPermitNote": "Candidates must be legally entitled to work in Canada. We are unable to support work permit applications.",
      "positions": [
        "Farm Labourer",
        "Harvest Crew",
        "Packing & Sorting"
      ],
      "wages": [
        { "role": "Farm Labourer", "wage": "$18 - $20 per hour" },
        { "role": "Harvest Crew", "wage": "$19 - $21 per hour" },
        { "role": "Packing & Sorting", "wage": "$18 per hour" }
      ],
      "applyLink": "https://greensproutfarms.ca/apply"
    },
    {
      "title": "FOOD COUNTER ATTENDANT",
      "employer": "Maple Café",
      "location": "Burnaby, British Columbia",
      "posted": "April 03, 2024",
      "expiry": "August 31, 2024",
      "season": "Year-round position",
      "workPermitNote": "Must be legally allowed to work in Canada.",
      "positions": [
        "Food Counter Attendant"
      ],
      "wages": [
        { "role": "Food Counter Attendant", "wage": "$17.50 - $19 per hour" }
      ],
      "applyLink": "https://maplecafe.ca/careers"
    },
    {
      "title": "LOWER MAINLAND BC ORGANIC FARM WORKERS",
      "employer": "Cedar Hill Food Services",
      "location": "Surrey, British Columbia",
      "posted": "April 12, 2024",
      "expiry": "September 10, 2024",
      "season": "Year-round position",
      "workPermitNote": "Must have open work permit or Canadian PR status.",
      "positions": [
        "Food Services Supervisor"
      ],
      "wages": [
        { "role": "Food Services Supervisor", "wage": "$20 - $22.50 per hour" }
      ],
      "applyLink": "https://cedarhillfoods.ca/jobs"
    },
    {
      "title": "BC LOCAL FOOD AND FARMING JOBS",
      "employer": "The Local Table",
      "location": "Richmond, British Columbia",
      "posted": "April 07, 2024",
      "expiry": "September 25, 2024",
      "season": "Full-time, permanent",
      "workPermitNote": "Must be legally eligible to work in Canada.",
      "positions": [
        "Kitchen Manager"
      ],
      "wages": [
        { "role": "Kitchen Manager", "wage": "$52,000 - $58,000 annually" }
      ],
      "applyLink": "https://thelocaltable.ca/careers"
    },
    {
      "title": "ORGANIC MARKET GARDEN ASSISTANTS",
      "employer": "BC Local Food & Farming",
      "location": "Lower Mainland, British Columbia",
      "posted": "April 01, 2024",
      "expiry": "September 15, 2024",
      "season": "May 15th, 2024 to October 5th, 2024",
      "workPermitNote": "Must have Canadian work rights. Seasonal workers must already reside in Canada.",
      "positions": [
        "Market Garden Assistant",
        "Irrigation Technician",
        "Farmers Market Vendor Support"
      ],
      "wages": [
        { "role": "Market Garden Assistant", "wage": "$19 - $21 per hour" },
        { "role": "Irrigation Technician", "wage": "$20 - $22 per hour" },
        { "role": "Farmers Market Vendor Support", "wage": "$18.50 per hour" }
      ],
      "applyLink": "https://bclocalfoodfarming.org/apply"
    },
    {
      "title": "COOK",
      "employer": "2511592 Alberta Limited (Pints and Bites Gastropub)",
      "location": "Wetaskiwin, AB T9A 0S8",
      "salary": "$29.30 hourly / 30 to 40 hours per Week",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Day", "Early Morning", "Evening", "Morning", "Night", "Weekend"],
      "startDate": "As soon as possible",
      "benefits": ["Dental plan", "Health care plan"],
      "vacancies": 2,
      "source": "Job Bank #2843701",
      "posted": "April 01, 2024",
      "expiry": "September 01, 2024",
      "language": "English",
      "education": "Secondary (high) school graduation certificate",
      "experience": "3 years to less than 5 years",
      "tasks": [
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
      "employmentGroups": ["Indigenous people", "Newcomers to Canada", "Youth"],
      "howToApply": "pintsandbites@gmail.com"
    },
    {
      "title": "RESTAURANT MANAGER",
      "employer": "TasteFusion Inc.",
      "location": "Calgary, AB T2P 1J9",
      "salary": "$28.50 hourly / 35 to 40 hours per Week",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Day", "Evening", "Weekend"],
      "startDate": "As soon as possible",
      "benefits": ["Health benefits", "Paid vacation"],
      "vacancies": 1,
      "source": "Job Bank #2845992",
      "posted": "April 03, 2024",
      "expiry": "August 30, 2024",
      "language": "English",
      "education": "College diploma in hospitality or related field",
      "experience": "2 years to less than 3 years",
      "tasks": [
        "Plan, organize, direct, control and evaluate daily operations",
        "Balance cash and complete balance sheets, cash reports and related forms",
        "Conduct performance reviews",
        "Manage staff and assign duties",
        "Recruit, train and supervise staff",
        "Monitor revenues and modify procedures and prices",
        "Address customers’ complaints or concerns",
        "Ensure health and safety regulations are followed"
      ],
      "employmentGroups": ["Visible minorities", "Youth"],
      "howToApply": "careers@tastefusion.ca"
    },
    {
      "title": "FOOD COUNTER ATTENDANT",
      "employer": "QuickBite Foods Ltd.",
      "location": "Surrey, BC V3W 3M8",
      "salary": "$16.75 hourly / 30 to 40 hours per Week",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Morning", "Evening", "Weekend"],
      "startDate": "As soon as possible",
      "benefits": [],
      "vacancies": 3,
      "source": "Job Bank #2846880",
      "posted": "April 06, 2024",
      "expiry": "August 31, 2024",
      "language": "English",
      "education": "No degree, certificate or diploma",
      "experience": "Will train",
      "tasks": [
        "Take customers' orders",
        "Prepare, heat and finish simple food items",
        "Serve customers at counters or buffet tables",
        "Stock refrigerators and salad bars",
        "Clean and sanitize kitchen including work surfaces, cupboards, storage areas, appliances and equipment"
      ],
      "employmentGroups": ["Newcomers to Canada", "Youth"],
      "howToApply": "quickbitefoods.jobs@gmail.com"
    },
    {
      "title": "KITCHEN MANAGER",
      "employer": "Bella's Kitchen Ltd.",
      "location": "Kelowna, BC V1Y 1H9",
      "salary": "$52,000 annually",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Day", "Evening"],
      "startDate": "As soon as possible",
      "benefits": ["Extended medical", "Performance bonus"],
      "vacancies": 1,
      "source": "Job Bank #2847234",
      "posted": "April 04, 2024",
      "expiry": "September 10, 2024",
      "language": "English",
      "education": "College/CEGEP or equivalent experience",
      "experience": "2 years to less than 5 years",
      "tasks": [
        "Supervise kitchen staff and ensure food quality standards",
        "Create staff schedules and manage labor costs",
        "Order food and kitchen supplies",
        "Ensure compliance with sanitation and safety regulations",
        "Develop new recipes and seasonal menus"
      ],
      "employmentGroups": ["Visible minorities", "Youth"],
      "howToApply": "bellaskitchen.hiring@gmail.com"
    },
    {
      "title": "FARM MANAGER",
      "employer": "Harvest Harmony Organics",
      "location": "Abbotsford, BC V3G 1J3",
      "salary": "$60,000 to $70,000 annually",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Day", "Weekend"],
      "startDate": "As soon as possible",
      "benefits": ["Extended health", "Farm accommodation", "CSA membership"],
      "vacancies": 1,
      "source": "BC Local Food Jobs",
      "posted": "April 10, 2024",
      "expiry": "August 30, 2024",
      "language": "English",
      "education": "Diploma or degree in Agriculture or Horticulture",
      "experience": "3 years or more in organic/permaculture farm leadership",
      "tasks": [
        "Plan and coordinate planting, irrigation, fertilizing, and harvesting",
        "Supervise farm workers and seasonal staff",
        "Ensure compliance with organic certification and food safety standards",
        "Monitor crop health, soil quality, and pest management",
        "Manage inventory, budgets, and equipment maintenance",
        "Coordinate weekly CSA program and market logistics"
      ],
      "employmentGroups": ["Youth", "Visible minorities", "Newcomers to Canada"],
      "howToApply": "careers@harvestharmony.ca"
    },
    {
      "title": "GREENHOUSE TECHNICIAN",
      "employer": "EcoSprout Farms",
      "location": "Langley, BC V2Z 2Y3",
      "salary": "$20.50 to $23.00 hourly / 35 to 40 hours per Week",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Day", "Morning", "Weekend"],
      "startDate": "May 15, 2024",
      "benefits": ["Employee discount on produce", "Flexible hours"],
      "vacancies": 2,
      "source": "BC Green Jobs",
      "posted": "April 08, 2024",
      "expiry": "September 05, 2024",
      "language": "English",
      "education": "Secondary school graduation or horticulture certification",
      "experience": "1 year or more preferred",
      "tasks": [
        "Monitor and adjust environmental conditions (humidity, temperature, lighting)",
        "Transplant seedlings and manage nutrient solutions",
        "Conduct pest control using organic methods",
        "Harvest microgreens and specialty produce",
        "Maintain greenhouse systems and cleanliness",
        "Document growth data and production yields"
      ],
      "employmentGroups": ["Newcomers to Canada", "Youth", "Indigenous people"],
      "howToApply": "ecosproutbc@gmail.com"
    },
    {
      "title": "ORGANIC FOOD PROCESSOR",
      "employer": "Coastal Harvest Collective",
      "location": "Courtenay, BC V9N 2C4",
      "salary": "$20.00 to $22.50 hourly / 30 to 40 hours per Week",
      "employmentType": "Permanent employment/Full time",
      "shifts": ["Day", "Evening", "Weekend"],
      "startDate": "As soon as possible",
      "benefits": ["Extended health benefits", "In-house training"],
      "vacancies": 2,
      "source": "Good Food Jobs BC",
      "posted": "April 13, 2024",
      "expiry": "August 31, 2024",
      "language": "English",
      "education": "High school diploma or equivalent",
      "experience": "1 year in food processing or production",
      "tasks": [
        "Wash, peel, chop and prepare organic produce for value-added products",
        "Operate equipment such as dehydrators, blenders, sealers and canners",
        "Ensure food safety standards and organic protocols are maintained",
        "Label and package finished goods for sale and distribution",
        "Track production volumes and perform quality control checks"
      ],
      "employmentGroups": ["Newcomers to Canada", "Youth", "Visible minorities"],
      "howToApply": "jobs@coastalharvest.ca"
    },
    {
      "title": "FIELD CREW LEAD",
      "employer": "Rising Roots Organic Farm",
      "location": "Chilliwack, BC V2P 4Z1",
      "salary": "$22.00 to $24.00 hourly / 35 to 45 hours per Week",
      "employmentType": "Seasonal employment/Full time",
      "shifts": ["Day", "Early Morning"],
      "startDate": "May 1, 2024",
      "benefits": ["Team meals", "Season-end bonus", "Skill development opportunities"],
      "vacancies": 1,
      "source": "Young Agrarians Jobs Board",
      "posted": "April 13, 2024",
      "expiry": "September 05, 2024",
      "language": "English",
      "education": "No formal education required",
      "experience": "1-2 seasons of farm work required, leadership experience preferred",
      "tasks": [
        "Lead daily harvest and planting tasks with seasonal crew",
        "Monitor crop progress and report issues to farm manager",
        "Train and support new farm workers",
        "Organize tools, equipment, and supplies efficiently",
        "Ensure organic practices and food safety protocols are followed"
      ],
      "employmentGroups": ["Youth", "Newcomers to Canada", "Indigenous people"],
      "season": "May 1st, 2024 to October 10th, 2024",
      "howToApply": "jobs@risingrootsorganic.ca"
    },
    
    
  ];
  
  export default function JobsComponent() {
    return (
    //   <div className="p-6 space-y-8 flex-col w-full justify-center items-center">
    //     {jobData.map((job, idx) => (
    // <div className="w-full flex flex-col justify-center items-center ">
    //       <div key={idx} className="bg-white max-w-xl flex flex-col gap-6  p-6 rounded-2xl shadow-md">
    //         <h2 className="text-2xl w-full flex items-center justify-center font-bold text-gray-800 mb-2">{job.title}</h2>
    //         <p className="text-sm text-gray-600">Employer: {job.employer}; Location: {job.location}</p>
    //         <p className="text-sm  text-gray-600 mb-4">Date of posting: {job.posted} | Date of expiry: {job.expiry}</p>
  
    //         {job.season && (
    //           <div className="mb-4">
    //             <h3 className="font-semibold">Details</h3>
    //             <p className="max-w-lg">Our summer season runs from {job.season}. {job.workPermitNote}</p>
    //           </div>
    //         )}
  
    //         {job.positions && (
    //           <div className="mb-4">
    //             <h3 className="font-semibold">We are currently hiring for the following positions</h3>
    //             <ul className="list-disc list-inside">
    //               {job.positions.map((pos, i) => <li key={i}>{pos}</li>)}
    //             </ul>
    //           </div>
    //         )}
  
    //         {job.wages && (
    //           <div className="mb-4">
    //             <h3 className="font-semibold">Wages</h3>
    //             <ul className="list-disc list-inside">
    //               {job.wages.map((w, i) => <li key={i}>{w.role} - {w.wage}</li>)}
    //             </ul>
    //           </div>
    //         )}
  
    //         {job.salary && <p><strong>Salary:</strong> {job.salary}</p>}
    //         {job.employmentType && <p><strong>Terms of employment:</strong> {job.employmentType}</p>}
    //         {job.shifts && <p><strong>Shifts:</strong> {job.shifts.join(", ")}</p>}
    //         {job.startDate && <p><strong>Start date:</strong> {job.startDate}</p>}
    //         {job.benefits && (
    //           <div className="mb-4">
    //             <h3 className="font-semibold">Benefits</h3>
    //             <ul className="list-disc list-inside">
    //               {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
    //             </ul>
    //           </div>
    //         )}
    //         {job.language && <p><strong>Languages:</strong> {job.language}</p>}
    //         {job.education && <p><strong>Education:</strong> {job.education}</p>}
    //         {job.experience && <p><strong>Experience:</strong> {job.experience}</p>}
  
    //         {job.tasks && (
    //           <div className="mb-4">
    //             <h3 className="font-semibold">Tasks</h3>
    //             <ul className="list-disc list-inside">
    //               {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
    //             </ul>
    //           </div>
    //         )}
  
    //         {job.employmentGroups && (
    //           <p><strong>Employment groups:</strong> {job.employmentGroups.join(", ")}</p>
    //         )}
  
    //         {job.applyLink && (
    //           <p className="mt-4"><a href={job.applyLink} className="text-blue-600 underline">Apply Online</a></p>
    //         )}
    //         {job.howToApply && (
    //           <p className="mt-4"><strong>How to apply:</strong> By email: <a href={`mailto:${job.howToApply}`} className="text-blue-600 underline">{job.howToApply}</a></p>
    //         )}
    //       </div>
    //       </div>
    //     ))}
    //   </div>
    <div className="px-6 py-10 space-y-16 w-full max-w-5xl mx-auto">
  {jobData.map((job, idx) => (
    <div key={idx} className="relative pl-6 border-l-4 border-green-500 group">
      <div className="absolute -left-3.5 top-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white group-hover:scale-110 transition"></div>

      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-gray-900">{job.title}</h2>
        <p className="text-sm text-gray-500">Employer: {job.employer} &bull; Location: {job.location}</p>
        <p className="text-sm text-gray-500">Posted: {job.posted} &bull; Expires: {job.expiry}</p>

        {job.season && (
          <div>
            <p className="italic text-gray-700">🌿 Our summer season runs from <strong>{job.season}</strong>.</p>
            <p className="text-gray-600">{job.workPermitNote}</p>
          </div>
        )}

        {job.positions && (
          <div>
            <h3 className="font-semibold text-gray-800">Positions Available:</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.positions.map((pos, i) => <li key={i}>{pos}</li>)}
            </ul>
          </div>
        )}

        {job.wages && (
          <div>
            <h3 className="font-semibold text-gray-800">Wages</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.wages.map((w, i) => <li key={i}>{w.role} - {w.wage}</li>)}
            </ul>
          </div>
        )}

        {job.salary && <p><strong>💰 Salary:</strong> {job.salary}</p>}
        {job.employmentType && <p><strong>🕒 Employment Type:</strong> {job.employmentType}</p>}
        {job.shifts && <p><strong>🗓️ Shifts:</strong> {job.shifts.join(", ")}</p>}
        {job.startDate && <p><strong>🚀 Start Date:</strong> {job.startDate}</p>}

        {job.benefits?.length > 0 && (
          <div>
            <h3 className="font-semibold text-gray-800">Benefits</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.benefits.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        )}

        {job.language && <p><strong>🌐 Languages:</strong> {job.language}</p>}
        {job.education && <p><strong>🎓 Education:</strong> {job.education}</p>}
        {job.experience && <p><strong>📋 Experience:</strong> {job.experience}</p>}

        {job.tasks && (
          <div>
            <h3 className="font-semibold text-gray-800">Tasks</h3>
            <ul className="list-disc list-inside text-gray-700">
              {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
            </ul>
          </div>
        )}

        {job.employmentGroups && (
          <p><strong>👥 Employment Groups:</strong> {job.employmentGroups.join(", ")}</p>
        )}

        {job.applyLink && (
          <p className="mt-4">
            <a href={job.applyLink} className="text-green-600 font-medium underline hover:text-green-800">Apply Online</a>
          </p>
        )}

        {job.howToApply && (
          <p className="mt-2">
            <strong>📧 How to Apply:</strong> <a href={`mailto:${job.howToApply}`} className="text-green-600 underline hover:text-green-800">{job.howToApply}</a>
          </p>
        )}
      </div>
    </div>
  ))}
</div>

    );
  }
  