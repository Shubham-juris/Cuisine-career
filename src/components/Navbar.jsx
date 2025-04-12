import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between px-4 md:px-8 py-3">
        {/* Left: Social Icons */}
        <div className="flex gap-4 text-lg text-gray-700 mb-2 lg:mb-0">
        <a href="#" className=" rounded-full p-1 text-white bg-blue-600">
         <FaFacebookF />
         </a>
          
          <a href="#" className="rounded-full p-1 text-white bg-pink-600">
            <FaInstagram />
          </a>
          <a href="#" className="rounded-full p-1 text-white bg-black">
            <FaXTwitter />
          </a>
        </div>

        {/* Center: Title */}
        <h1 className="text-lg md:text-4xl font-semibold tracking-wide text-[#85754D] uppercase text-center">
          Cuisine Career Job Board
        </h1>

        {/* Spacer for symmetry */}
        <div className="hidden lg:flex w-12" />
      </div>

      {/* Bottom Nav */}
      <nav className="w-full bg-gray-50">
        <ul className="flex flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-8 py-3 text-sm md:text-base font-medium text-gray-700">
          <li><a href="#" className="hover:text-[#85754D]">Home</a></li>
          <li><Link href="/about" className="hover:text-[#85754D]">About</Link></li>
          <li><a href="#" className="hover:text-[#85754D]">View Jobs</a></li>
          <li><a href="#" className="hover:text-[#85754D]">Job Seekers</a></li>
          <li><a href="#" className="hover:text-[#85754D]">Blogs</a></li>

          {/* Employers with dropdown icon */}
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#85754D]">
            Employers
            <FaChevronDown className="text-xs" />
          </li>

          <li><a href="#" className="hover:text-[#85754D]">Price</a></li>
          <li><a href="#" className="hover:text-[#85754D]">Contact Us</a></li>

          {/* Location with dropdown icon */}
          <li className="flex items-center gap-1 cursor-pointer hover:text-[#85754D]">
            Location
            <FaChevronDown className="text-xs" />
          </li>

          <li><a href="#" className="hover:text-[#85754D]">Careers</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

