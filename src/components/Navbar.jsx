'use client';
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaXTwitter, FaBars } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import logo from '../../public/logo.webp'
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenLocation, setIsOpenLocation] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);

  return (
    <header className="w-full sticky top-0 bg-white border-b border-gray-200 shadow-sm z-50">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto w-full px-4 md:px-8 py-3 flex justify-between items-center relative">
        {/* Title */}
      <Link href='/'> <Image src={logo} className="w-10 h-10" alt='logo'/>
        <h1 className="hidden md:block md:text-4xl font-semibold tracking-wide text-[#85754D] uppercase 
          lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
              Cuisine Career Job Board
        </h1></Link> 

        {/* Social Icons */}
        <div className="hidden lg:flex gap-4 text-lg text-gray-700">
          <a href="#" className="rounded-full p-1 text-white bg-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" className="rounded-full p-1 text-white bg-pink-600">
            <FaInstagram />
          </a>
          <a href="#" className="rounded-full p-1 text-white bg-black">
            <FaXTwitter />
          </a>
        </div>

        {/* Hamburger Menu */}
        <button
          className="lg:hidden text-2xl text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </div>

      {/* Bottom Nav */}
      <nav
        className={`w-full bg-gray-50 ${isMenuOpen ? "block" : "hidden"} lg:block transition-all`}
      >
        <ul className="flex flex-col lg:flex-row flex-wrap justify-center gap-4 md:gap-8 px-4 md:px-8 py-3 text-sm md:text-base font-medium text-gray-700">
          <li><Link href="/" className="hover:text-[#85754D]">Home</Link></li>
          <li><Link href="/about" className="hover:text-[#85754D]">About</Link></li>
          <li><Link href="/jobs" className="hover:text-[#85754D]">View Jobs</Link></li>
          <li><Link href="/jobseeker" className="hover:text-[#85754D]">Job Seekers</Link></li>
          <li><Link href="/blog" className="hover:text-[#85754D]">Blogs</Link></li>

          {/* Employers Dropdown */}
          <div className="relative" onMouseLeave={closeDropdown}>
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-[#85754D]"
              onMouseEnter={toggleDropdown}
            >
              Employers
              <FaChevronDown className="text-xs" />
            </li>
            {isOpen && (
              <ul className="absolute top-full left-0 bg-white border rounded shadow-md z-50 py-2 px-4 space-y-2 min-w-[160px]">
                <li><Link href="/employers/welcome" className="hover:text-[#85754D] block">WELCOME</Link></li>
                <li><Link href="/employers/why-us" className="hover:text-[#85754D] block">WHY US?</Link></li>
                <li><Link href="/employers/testimonials" className="hover:text-[#85754D] block">TESTIMONIALS</Link></li>
                <li><Link href="/employers/posting" className="hover:text-[#85754D] block">POSTING</Link></li>
                <li><Link href="/employers/faqs" className="hover:text-[#85754D] block">FAQS</Link></li>
              </ul>
            )}
          </div>

          <li><Link href="/pricing" className="hover:text-[#85754D]">Price</Link></li>
          <li><Link href="/contact" className="hover:text-[#85754D]">Contact Us</Link></li>

          {/* Location Dropdown */}
          <div className="relative" onMouseLeave={() => setIsOpenLocation(false)}>
            <li
              className="flex items-center gap-1 cursor-pointer hover:text-[#85754D]"
              onMouseEnter={() => setIsOpenLocation(true)}
            >
              Location
              <FaChevronDown className="text-xs" />
            </li>
            {isOpenLocation && (
              <ul className="absolute top-full left-0 bg-white border rounded shadow-md z-50 py-2 px-4 space-y-2 min-w-[200px]">
                {[
                  "Alberta",
                  "Ontario",
                  "Quebec",
                  "Nova Scotia",
                  "New Brunswick",
                  "Manitoba",
                  "British Columbia",
                  "Prince Edward Island",
                  "Saskatchewan",
                  "Newfoundland and Labrador"
                ].map((province) => (
                  <li key={province}>
                    <Link
                      href={`/location/${province.toLowerCase().replace(/\s+/g, '-')}`}
                      className="hover:text-[#85754D] block"
                    >
                      {province}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <li><Link href="/carreer" className="hover:text-[#85754D]">Careers</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
