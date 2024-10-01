"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import GoatLogo from "@/public/goatlogo.png"; // Adjust the path
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for hamburger and close

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };

  return (
    <nav className="w-3/5 mx-auto mt-4 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-full shadow-md">
      <div className="flex justify-evenly items-center text-white">
        {/* Logo Section */}
        <Link href="/">
          <Image
            src={GoatLogo}
            alt="Goat Logo"
            className="w-auto h-32 hidden lg:block" // Increased width for desktop
          />
          <Image
            src={GoatLogo}
            alt="Goat Logo"
            className="w-12 h-auto block lg:hidden" // Increased width for mobile
          />
        </Link>

        {/* Hamburger Menu Icon */}
        <div className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>

        {/* Links Section */}
        <div
          className={`flex flex-col lg:flex-row lg:space-x-4 text-lg ${
            isOpen ? "block" : "hidden lg:block"
          }`}
        >
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-green-400 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-green-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
