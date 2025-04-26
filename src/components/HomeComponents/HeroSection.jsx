'use client';
import React from 'react';
import Image from 'next/image';
import HeroSectionImage from '../../../public/images/HomeImages/HeroSectionImage.jpg';
import Link from 'next/link';

const HeroSection = () => {
    return (
        <section className="relative  flex items-center justify-center px-4 sm:px-8 overflow-hidden">
            {/* Background Image */}
            <div className="fixed inset-0 -z-10">
                <Image
                    src={HeroSectionImage}
                    alt="Hero Background"
                    fill
                    className="object-cover  object-center fixed"
                    priority
                />
                <div className="absolute inset-0 bg-black/60 " />
            </div>

            {/* Foreground Content */}
            <div className="bg-[#e7dbc7]/80 flex flex-col items-center justify-between text-[#1f1f1f] max-w-xl text-center my-20 p-6 rounded-md shadow-lg z-10">
                <h1 className="text-2xl max-w-lg sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
                    WELCOME ABOARD FOOD ENTHUSIASTS! LET&apos;S COOK UP SUCCESS TOGETHER
                </h1>
                <p className="text-xl mb-6 max-w-sm">
                    Discover fulfilling opportunities in food, farms, nonprofits, education,
                    and government careers.
                </p>
                <Link

                    href="/carreer"

                    className="inline-block bg-[#1f1f1f] hover:bg-[#85754D] text-white text-sm font-semibold px-6 py-3 rounded transition"
                >
                    EXPLORE CAREERS
                </Link>
            </div>

        </section>
    );
};

export default HeroSection;
