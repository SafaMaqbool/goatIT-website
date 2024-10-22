import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';

const page = () => {
  return (
    <div className="container mx-auto mt-12 flex flex-col items-center justify-center rounded-lg bg-gray-900 px-4 py-12 shadow-lg">
      <h1 className="mb-6 text-center text-4xl font-extrabold text-green-400">Welcome to the Jobs Page</h1>
      <p className="mb-8 max-w-2xl text-center text-lg leading-relaxed text-gray-300">
        We are always on the lookout for amazing talent. When we have openings, they will be posted here. Stay tuned and
        check back soon!
      </p>
      <a href="/contact">
        {/* <TailwindCssButtons title="Contact Us Now" icon={<FaPhoneVolume />} position="right"/> */}
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {/* Adjusted the gradient color to match Goat IT theme */}
          <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Us Now
            <FaPhoneVolume className="ml-3" /> {/* Arrow icon */}
          </span>
        </button>
      </a>
    </div>
  );
};

export default page;
