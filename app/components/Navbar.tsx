"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GoatLogo from "@/public/goatlogo.png"; // Adjust the path
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };

  return (
    <nav className="fixed top-5 inset-x-0 mx-auto max-w-3xl z-50 bg-white dark:bg-gray-800 rounded-full  shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-0.5">
      <div className="flex justify-between lg:justify-evenly items-center text-black dark:text-white sm:justify-between">
        {/* Logo Section */}
        <Link href="/" className="flex items-center">
          <Image
            src={GoatLogo}
            alt="Goat Logo"
            className="w-auto h-10 lg:h-12" // Adjust the height for logo
          />
        </Link>

        {/* Links Section for Desktop */}
        <div className="hidden lg:flex space-x-6 items-center">
          {["Home", "About", "Services", "Jobs", "Testimonials","Contact"].map(
            (item, index) => (
              <Link
                key={index}
                href={`/${item.toLowerCase()}`}
                className="relative group hover:text-green-400 transition"
              >
                {item}
                {/* Hover Line with Gradient */}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </Link>
            )
          )}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 mt-4 rounded-none z-50 flex flex-col items-center">
          {/* Close Button */}
          <div className="self-end p-4">
            <button onClick={toggleMenu}>
              <AiOutlineClose
                size={30}
                className="text-black dark:text-white"
              />
            </button>
          </div>
          {/* Fullscreen without rounded edges */}
          <div className="flex flex-col items-center space-y-4 py-4 text-lg w-full">
            {["Home", "About", "Services", "Jobs","Testimonials", "Contact"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-green-400 transition"
                >
                  {item}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
