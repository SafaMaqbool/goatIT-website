'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import GoatLogo from './icons/brand';

// Variants for dropdown items
const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
};

// Testimonials auto scroll function
const scrollToTestimonials = () => {
  const testimonialsSection = document.getElementById('testimonials');
  if (testimonialsSection) {
    testimonialsSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll
  }
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const servicesDropdownRef = useRef<HTMLUListElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServicesDropdown = () => setIsServicesOpen(!isServicesOpen);
  const handleLinkClick = () => {
    setIsOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    const handleClickOutside = (event: MouseEvent) => {
      // Check if click is outside the menu and services dropdown
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        servicesDropdownRef.current &&
        !servicesDropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const renderLinks = (isMobile: boolean) =>
    ['Home', 'About', 'Services', 'Jobs', 'Testimonials', 'Contact'].map((item, index) => (
      <div key={index} className="relative">
        {item === 'Testimonials' ? (
          // Change the Testimonials link to a button that calls scrollToTestimonials
          <button
            onClick={() => {
              scrollToTestimonials();
              handleLinkClick(); // Close the menu after clicking
            }}
            className="group relative transition hover:text-green-400"
          >
            {item}
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </button>
        ) : item === 'Services' ? (
          <div className="relative">
            <button className="group relative transition hover:text-green-400" onClick={toggleServicesDropdown}>
              {item}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
            </button>

            {/* Services dropdown */}
            {isServicesOpen && (
              <motion.ul
                ref={servicesDropdownRef}
                className={`${
                  isMobile ? 'relative' : 'absolute'
                } left-0 top-full mt-2 w-[200px] rounded-lg bg-white/50 shadow-lg backdrop-blur-lg dark:border-gray-900 dark:bg-black/50`}
                initial="closed"
                animate={isServicesOpen ? 'open' : 'closed'}
                variants={{
                  open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
                  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } }
                }}
                style={{ zIndex: isMobile ? 'auto' : 1000 }}
              >
                <motion.li variants={itemVariants} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Link href="/services/erp-development" onClick={handleLinkClick}>
                    ERP Implementation
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <Link href="/services/web-development" onClick={handleLinkClick}>
                    Web Development
                  </Link>
                </motion.li>
              </motion.ul>
            )}
          </div>
        ) : (
          <Link
            href={item === 'Home' ? '/' : item === 'About' ? '/about' : `/${item.toLowerCase()}`}
            className="group relative transition hover:text-green-400"
            onClick={handleLinkClick}
          >
            {item}
            <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:left-0 group-hover:w-full"></span>
          </Link>
        )}
      </div>
    ));

  return (
    <>
      <nav className="fixed inset-x-0 top-5 z-50 mx-auto h-16 max-w-3xl rounded-full border border-gray-200 bg-white px-4 py-0.5 shadow-lg backdrop-blur-lg dark:border-gray-900 dark:bg-black/50">
        <div className="flex h-full w-full items-center justify-between text-black dark:text-white sm:justify-between lg:justify-evenly">
          <Link href="/" className="flex items-center">
            <GoatLogo className="h-7" />
          </Link>
          <div className="hidden items-center space-x-6 lg:flex">{renderLinks(false)}</div>
          <div className="cursor-pointer lg:hidden" onClick={toggleMenu}>
            {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
          </div>
        </div>
      </nav>

      {isOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 top-24 z-50 flex h-min flex-col items-center rounded-2xl border p-4 shadow-lg backdrop-blur-lg dark:border-gray-900 dark:bg-black/50 lg:hidden"
        >
          <div className="flex w-full flex-col items-center space-y-4 py-4 text-lg">{renderLinks(true)}</div>
        </div>
      )}
    </>
  );
};

export default Navbar;
