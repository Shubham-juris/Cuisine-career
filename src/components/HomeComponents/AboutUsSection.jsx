  'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import AboutSectionImage from '../../../public/images/HomeImages/AboutSectionImage.jpg';

const AboutUsSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-13 py-16 flex flex-col gap-15 items-center bg-white text-[#1f1f1f]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide uppercase">
          About Us
        </h2>
        <div className="w-16 h-0.5 bg-[#85754D]/40 mx-auto mt-5" />
      </motion.div>

      {/* Main Content: Image + Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 h-[290px] flex justify-center"
        >
          <Image
            src={AboutSectionImage}
            alt="About Us"
            className="w-full max-w-md md:max-w-full rounded-md shadow-md object-cover"
            priority
          />
        </motion.div>

        {/* Right: Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 sm:text-base leading-relaxed space-y-4 text-center flex flex-col justify-center px-1"
        >
          <p className="text-sm lg:text-md">
            Welcome to <strong>Fusion Foodies</strong>, your premier destination for culinary careers! At Fusion Foodies, we understand the passion and dedication that goes into creating extraordinary culinary experiences. That’s why we’re here to connect talented chefs and kitchen workers with their dream jobs in the dynamic world of food.
          </p>
          <p className="text-sm lg:text-md">
            With a deep appreciation for the art of cooking and a commitment to supporting the culinary community, Fusion Foodies is more than just a job-seeking website. We’re a platform built by food enthusiasts, for food enthusiasts. Our mission is simple: to empower chefs and kitchen professionals to find meaningful employment opportunities that align with their skills, aspirations, and values.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsSection;
