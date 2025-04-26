'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

    import BrowseImg from '../../../public/images/HomeImages/Browse.jpg';
    import PostImg from '../../../public/images/HomeImages/Post.jpg';
import Link from 'next/link';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const WhyPostWithUsSection = () => {
  return (
    <section className="bg-[#f7f6f3] text-[#1f1f1f] px-4 sm:px-8 lg:px-20 py-16 flex flex-col items-center gap-12">
      {/* Top Section */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center max-w-3xl"
      >
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
          Why post with us?
        </h2>
        <ul className="text-sm sm:text-base space-y-3 text-left list-decimal px-4 sm:px-12">
          <li>
            <strong>Food-Centric:</strong> We specialize in sourcing top talent for local food businesses,
            nonprofits, and organic farms.
          </li>
          <li>
            <strong>Integrity:</strong> With years of dedication to the local food community, we’re committed to
            your mission.
          </li>
          <li>
            <strong>Results:</strong> Our proven track record ensures superior hiring outcomes—guaranteed.
          </li>
        </ul>

        <Link
          href="/jobs"
          className="mt-6 inline-block bg-[#c6b89e] hover:bg-[#b5a487] text-black font-semibold px-6 py-3 rounded transition duration-300"
        >
          VIEW JOBS
        </Link>
      </motion.div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-full max-w-5xl">
        {/* Browse the Postings */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative overflow-hidden  shadow-md group cursor-pointer"
        >
          <Image
            src={BrowseImg}
            alt="Browse the Postings"
            className="object-cover w-full  group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gray-800/40  bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-lg sm:text-2xl font-bold text-center px-4">
              BROWSE THE POSTINGS
            </h3>
          </div>
        </motion.div>

        {/* Post an Opportunity */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden  shadow-md group cursor-pointer"
        >
          <Image
            src={PostImg}
            alt="Post an Opportunity"
            className="object-cover w-full   group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gray-800/40  bg-opacity-40 flex items-center justify-center">
            <h3 className="text-white text-lg sm:text-2xl font-bold text-center px-4">
              POST AN OPPORTUNITY
            </h3>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyPostWithUsSection;
