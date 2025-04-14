export default function RatesSection() {
    const rates = [
      { price: "$25", desc: "Budget rate (special situations with limited budget)" },
      { price: "$50", desc: "Standard rate (enhanced targeting, promotion, and reach)" },
      { price: "$100", desc: "Senior or hard-to-fill positions" },
      { price: "$100", desc: "Commercial/institutional rate" },
      { price: "$200", desc: "Includes partner sites and social media promotion" },
      { price: "$300", desc: "Includes paid, targeted social media promotion" },
    ];
  
    return (
      <section className="bg-white w-full px-4 py-4 lg:py-12 flex flex-col items-center">
        {/* Title */}
        <h2 className="text-2xl md:text-4xl font-semibold text-[#a99b8f] uppercase tracking-wide text-center">
          RATES
        </h2>
  
        {/* Line under title */}
        <div className="w-10 h-0.5 bg-[#c0b3a6] my-4" />
  
        {/* Grid of Rates */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mt-8 text-center">
          {rates.map((rate, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-xl font-semibold text-black">{rate.price}</div>
              <p className="text-sm text-[#444] max-w-xs mx-auto">{rate.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  