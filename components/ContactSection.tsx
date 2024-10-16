import React from 'react';
import { FaPhoneVolume } from 'react-icons/fa6';
import Link from 'next/link'; // Import Link for routing

const ContactSection = () => {
  return (
    <div className="container mx-auto mt-8 flex flex-col items-center justify-evenly px-4 md:flex-row">
      {/* Left Side - Revolutionize Your Business Text */}
      <div className="text-left">
        <p className="mb-8 max-w-[50ch] text-lg font-semibold text-white">
          Are you ready to take your business to the next level? Let's collaborate and turn your vision into reality!
        </p>
      </div>

      {/* Button with routing */}
      <Link href="/contact">
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {/* Adjusted the gradient color to match Goat IT theme */}
          <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Us Now
            <FaPhoneVolume className="ml-3" />
          </span>
        </button>
      </Link>
    </div>
  );
};

export default ContactSection;
