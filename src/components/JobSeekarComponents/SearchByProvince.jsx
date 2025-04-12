const provinces = [
    "ALBERTA",
    "ONTARIO",
    "QUEBEC",
    "NOVA SCOTIA",
    "NEW BRUNSWICK",
    "MANITOBA",
    "BRITISH COLUMBIA",
    "PRINCE EDWARD ISLAND",
    "SASKATCHEWAN",
    "NEWFOUNDLAND AND LABRADOR",
  ];
  
  export default function ProvinceList() {
    return (
      <div className="flex flex-col items-center w-full min-h-screen bg-white">
        <h1 className=" text-xl md:text-2xl lg:text-3xl font-bold my-8">SEARCH BY PROVINCE</h1>
  
        {/* Group 1 */}
        <div className="flex flex-col w-full lg:max-w-lg px-10 items-center gap-4">
          {provinces.slice(0, 4).map((province) => (
            <button
              key={province}
              className="bg-[#85754D] hover:bg-[#9F8C5C] font-semibold text-black text-center py-3 w-full"
            >
              {province}
            </button>
          ))}
        </div>
  
        {/* Spacer */}
        <div className="my-8" />
  
        {/* Group 2 */}
        <div className="flex flex-col w-full lg:max-w-lg text-semibold px-10 items-center gap-4">
          {provinces.slice(4, 8).map((province) => (
            <button
              key={province}
              className="bg-[#85754D] hover:bg-[#9F8C5C] font-semibold text-black text-center py-3 w-full"
            >
              {province}
            </button>
          ))}
        </div>
  
        {/* Spacer */}
        <div className="my-8" />
  
        {/* Group 3 */}
        <div className="flex flex-col w-full lg:max-w-lg px-10 items-center gap-4 mb-8">
          {provinces.slice(8).map((province) => (
            <button
              key={province}
              className="bg-[#85754D] font-semibold hover:bg-[#9F8C5C] text-black text-center py-3 w-full"
            >
              {province}
            </button>
          ))}
        </div>
      </div>
    );
  }
  