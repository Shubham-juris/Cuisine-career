import React from "react";

const data = {
  local_food_section: {
    title: "Local Food, Whole Foods, Natural Food",
    intro:
      "Local jobs & Self-employment: Full-time & part-time positions Companies: Natural & Organic Food Stores",
    description:
      "Natural food stores play a vital role in providing local, sustainable and organic food. They’re also a great way to make a living, while helping build local community. Full-time and part-time positions are available. Or, if there’s no store near you, why not figure out how to start your own?",
    store_links: {
      Canada: ["CHFA.ca/en/Resources/Find-a-Retailer"],
      Ontario: [
        "100MileNetwork.com/health-food-stores-delivery",
        "NiceLocal.ca/ontario-ca/shops/type/natural_products/",
      ],
      More: [
        "FilsingersOrganic.com/locations",
        "OrganicTraditions.com/pages/store-locator",
      ],
      USA: {
        title: "The Tofu Tollbooth (book)",
        links: {
          borrow: "borrow",
          preview: "preview",
          used: "used",
          new: "new",
        },
      },
    },
    farmers_markets: [
      "Newfoundland",
      "Nova Scotia",
      "New Brunswick",
      "PEI",
      "Quebec",
      "Ontario",
      "Manitoba",
      "Saskatchewan",
      "Alberta",
      "BC",
      "Yukon",
    ],
    job_section: {
      title: "Jobs with local, organic & natural food",
      links: [
        "FoodWork Jobs & Internships — FoodWork.ca/Now",
        "Food organizations in Canada (local, sustainable, organic…) — FoodWork.ca/links",
      ],
    },
    start_your_own: {
      title: "Start your own local food business or natural food store…",
      links: [
        "How to start a retail business in Canada",
        "How to start a Natural food store",
        "Resources: Canadian Federation of Independent Business | Retail Council of Canada | Canadian Health Food Association",
        "Small business start-up assistance & resources (1) (2)",
        "How to… (google search)",
      ],
    },
    definition: {
      title: "What is Natural food?",
      links: ["Natural food", "Organic food", "Local food", "Healthy diet"],
      note:
        'the term "Health food store" can imply either a natural / whole foods store, or a vitamin/supplement store',
    },
  },
  job_posting: {
    title: "Employment Opportunity",
    position: {
      title: "Director of Operations and Finance",
      organization: "Natural Assets Initiative",
      location: "remote",
    },
    description:
      "As communities from coast-to-coast-to-coast experience the impacts of climate-related weather events, natural asset management is an increasingly important way to help communities protect and manage the ecosystems that deliver the key services on which all of us rely. This is the mission of Natural Assets Initiative (NAI), a multi-award-winning not-for-profit: to make natural asset management a mainstream practice across Canada, and in support of this, for local governments and others to adopt methodologies and tools in standard ways across the country.",
    role:
      "The Director of Operations and Finance is responsible for ensuring excellence in NAI’s administrative and financial systems and processes. This is critical to the timely, coordinated delivery of effective projects and activities and to NAI’s reputation as a trusted partner. Our organization is experiencing rapid growth, and so experience with change management would be a great asset in this dynamic role. The Director of Operations and Finance works collaboratively as part of the leadership team with the Executive Director, the Project and Ops Assistant, the Board Treasurer, NAI project managers, and oversees the work of a contract bookkeeper. This position is supported by NAI’s Project and Operations Assistant and an external bookkeeper.",
    qualifications: [
      "At least 5 years of experience in operations and financial management",
      "Experience in non-profit or consulting firm environment",
      "Combination of relevant skills and experience (e.g., 3 years’ operations experience plus 2 years’ finance)",
      "Operational and systems mindset and ability to work in a team",
    ],
    skills: [
      "Evaluate systems, determine potential improvements, implement and support change",
      "Deep understanding of budgeting and accounting principles, including payroll",
      "Advanced Excel and Quickbooks Online skills",
      "Excellent verbal & interpersonal communication",
      "Strong initiative / self-motivated",
      "Demonstrated leadership and ability to inspire",
    ],
    additional_skills: [
      "Human Resource management",
      "Board of Directors support",
      "Knowledge of contract management, procurement and best practices",
    ],
    benefits: [
      "Competitive wages",
      "Comprehensive health package for staff and their families",
      "Enhanced (5 weeks) vacation benefits",
      "Flexible paid sick/wellness time",
      "Training and professional development",
      "Remote position (anywhere in Canada)",
    ],
    how_to_apply:
      "To be considered for this position, please send your resume outlining your employment and educational experience and a cover letter that describes how your skills and experience will allow you to be successful in this role to sairah@naturalassetsinitiative.ca. Please indicate you saw this posting at",
  },
};

const SectionHeader = ({ title }) => (
  <h2 className="text-xl font-medium text-[#8a7f72] mt-10 mb-4 border-b border-gray-200 pb-1">
    {title}
  </h2>
);

const NovaScotia = () => {
  const { local_food_section, job_posting } = data;

  return (
    <div className="text-[#4a443f] max-w-4xl mx-auto px-4 py-6 font-serif">
      <h1 className="text-3xl font-bold text-center mb-6 text-[#776b5d]">
        {local_food_section.title}
      </h1>
      <p className="mb-4 text-lg">
        <strong>{local_food_section.intro}</strong>
      </p>
      <p className="mb-6 text-base">{local_food_section.description}</p>

      <SectionHeader title="Natural food stores in Canada & USA" />
      <ul className="list-disc pl-5 space-y-1">
        {Object.entries(local_food_section.store_links).map(([region, links]) => (
          <li key={region}>
            <strong>{region}:</strong>{" "}
            {Array.isArray(links)
              ? links.join(", ")
              : Object.entries(links.links)
                  .map(([k, v]) => `${k}: ${v}`)
                  .join(" | ")}
          </li>
        ))}
      </ul>

      <SectionHeader title="Farmers' Markets" />
      <p className="mb-4">{local_food_section.farmers_markets.join(", ")}</p>

      <SectionHeader title={local_food_section.job_section.title} />
      <ul className="list-disc pl-5">
        {local_food_section.job_section.links.map((link, idx) => (
          <li key={idx}>{link}</li>
        ))}
      </ul>

      <SectionHeader title={local_food_section.start_your_own.title} />
      <ul className="list-disc pl-5">
        {local_food_section.start_your_own.links.map((link, idx) => (
          <li key={idx}>{link}</li>
        ))}
      </ul>

      <SectionHeader title={local_food_section.definition.title} />
      <p>
        {local_food_section.definition.links.map((link, idx) => (
          <span key={idx} className="underline mr-2">
            {link}
          </span>
        ))}
      </p>
      <p className="mt-2 italic text-sm">{local_food_section.definition.note}</p>

      {/* Main Job Title */}
      <h1 className="text-3xl font-bold text-center mt-12 mb-6 text-[#776b5d]">
        {job_posting.title}
      </h1>

      <p className="font-bold">
        Position: {job_posting.position.title} <br />
        Organization: {job_posting.position.organization} <br />
        Location: {job_posting.position.location}
      </p>
      <p className="mt-4">{job_posting.description}</p>

      <SectionHeader title="Role" />
      <p>{job_posting.role}</p>

      <SectionHeader title="Required Experience and Minimum Qualifications" />
      <ul className="list-disc pl-5">
        {job_posting.qualifications.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>

      <SectionHeader title="Skills & Experience" />
      <ul className="list-disc pl-5">
        {job_posting.skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <SectionHeader title="Additional Relevant Skills" />
      <ul className="list-disc pl-5">
        {job_posting.additional_skills.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>

      <SectionHeader title="Benefits" />
      <ul className="list-disc pl-5">
        {job_posting.benefits.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>

      <SectionHeader title="How to Apply" />
      <p className="mt-2">{job_posting.how_to_apply}</p>
    </div>
  );
};

export default NovaScotia;
