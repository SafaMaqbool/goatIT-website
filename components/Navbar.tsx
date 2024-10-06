"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import GoatLogo from "@/public/goatlogo.png"; // Adjust the path
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { motion, Variants } from "framer-motion";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu visibility
  const [isServicesOpen, setIsServicesOpen] = useState(false); // State for the services dropdown
  const servicesRef = useRef<HTMLDivElement>(null); // Ref for the services dropdown

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility
  };

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen); // Toggle the services dropdown visibility
  };

  // Function to handle link click
  const handleLinkClick = () => {
    setIsOpen(false); // Close the menu on link click
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false); // Close dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="fixed top-5 inset-x-0 mx-auto max-w-3xl z-50 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 px-4 py-0.5">
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
          {["Home", "About", "Services", "Jobs", "Testimonials", "Contact"].map(
            (item, index) => (
              <div key={index} className="relative">
                {item === "Services" ? (
                  <div ref={servicesRef} className="relative">
                    <button
                      className="relative group hover:text-green-400 transition"
                      onClick={toggleServicesDropdown}
                    >
                      {item}
                      {/* Hover Line with Gradient */}
                      <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                    </button>
                    {isServicesOpen && (
                      <motion.ul
                        className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg min-w-[200px] whitespace-nowrap flex flex-col"
                        initial="closed"
                        animate={isServicesOpen ? "open" : "closed"}
                        variants={{
                          open: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.2 },
                          },
                          closed: {
                            opacity: 0,
                            y: 20,
                            transition: { duration: 0.2 },
                          },
                        }}
                      >
                        <motion.li
                          variants={itemVariants}
                          className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Link
                            href="/services/erp-development"
                            onClick={handleLinkClick}
                          >
                            ERP Implementation
                          </Link>
                        </motion.li>
                        <motion.li
                          variants={itemVariants}
                          className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          <Link
                            href="/services/web-development"
                            onClick={handleLinkClick}
                          >
                            Web Development
                          </Link>
                        </motion.li>
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About"
                        ? "/aboutPage"
                        : `/${item.toLowerCase()}`
                    } // Home points to root, About to aboutPage
                    className="relative group hover:text-green-400 transition"
                    onClick={handleLinkClick} // Close menu on click
                  >
                    {item}
                    {/* Hover Line with Gradient */}
                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
                  </Link>
                )}
              </div>
            )
          )}
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 z-50 flex flex-col items-center mt-4">
          {/* Close Button */}
          <div className="self-end p-4">
            <button onClick={toggleMenu}>
              <AiOutlineClose
                size={30}
                className="text-black dark:text-white"
              />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 py-4 text-lg w-full">
            {[
              "Home",
              "About",
              "Services",
              "Jobs",
              "Testimonials",
              "Contact",
            ].map((item, index) => (
              <div key={index} className="relative">
                {item === "Services" ? (
                  <div ref={servicesRef}>
                    <button
                      className="hover:text-green-400 transition"
                      onClick={toggleServicesDropdown}
                    >
                      {item}
                    </button>
                    {isServicesOpen && (
                      <motion.ul
                        className="bg-white dark:bg-gray-800 shadow-lg rounded-lg flex flex-col min-w-[200px] whitespace-nowrap p-6 mt-2"
                        initial="closed"
                        animate={isServicesOpen ? "open" : "closed"}
                        variants={{
                          open: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.2 },
                          },
                          closed: {
                            opacity: 0,
                            y: 20,
                            transition: { duration: 0.2 },
                          },
                        }}
                      >
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/services/erp-development"
                            onClick={handleLinkClick}
                            className="w-full text-left p-2"
                          >
                            ERP Implementation
                          </Link>
                        </motion.li>
                        <motion.li variants={itemVariants}>
                          <Link
                            href="/services/web-development"
                            onClick={handleLinkClick}
                            className="w-full text-left p-2"
                          >
                            Web Development
                          </Link>
                        </motion.li>
                      </motion.ul>
                    )}
                  </div>
                ) : (
                  <Link
                    href={
                      item === "Home"
                        ? "/"
                        : item === "About"
                        ? "/aboutPage"
                        : `/${item.toLowerCase()}`
                    }
                    className="hover:text-green-400 transition"
                    onClick={handleLinkClick}
                  >
                    {item}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
