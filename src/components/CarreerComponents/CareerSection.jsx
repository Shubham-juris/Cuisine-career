import React from 'react';
import Link from 'next/link';

const CareerSection = () => {
  const jobCategories = [
    { name: 'Chef Jobs', path: '/careers/chef' },
    { name: 'Cook Jobs', path: '/careers/cook' },
    { name: 'Restaurant Manager Jobs', path: '/careers/restaurant-manager' },
    { name: 'Bartender Jobs', path: '/careers/bartender' },
    { name: 'Server Jobs', path: '/careers/server' },
    { name: 'Other Culinary Jobs', path: '/careers/other' },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Explore Cuisine Careers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-lg mx-auto">
          {jobCategories.map((category) => (
            <Link
              key={category.name}
              href={category.path}
              className="bg-white rounded-md shadow-md hover:shadow-lg transition duration-200 ease-in-out p-4 text-center"
            >
              <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-gray-500 text-sm">
          Looking for a specific role? Browse our categories above to find the perfect culinary career for you.
        </p>
      </div>
    </div>
  );
};

export default CareerSection;