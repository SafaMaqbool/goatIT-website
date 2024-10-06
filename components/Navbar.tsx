import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import GoatLogo from "./icons/brand";

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServicesDropdown = () => setIsServicesOpen(!isServicesOpen);
  const handleLinkClick = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderLinks = (isMobile: boolean) =>
    ["Home", "About", "Services", "Jobs", "Testimonials", "Contact"].map(
      (item, index) => (
        <div key={index} className="relative">
          {item === "Services" ? (
            <div ref={servicesRef} className="relative">
              <button
                className="relative group hover:text-green-400 transition"
                onClick={toggleServicesDropdown}
              >
                {item}
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </button>
              {isServicesOpen && (
                <motion.ul
                  className={`absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg min-w-[200px] whitespace-nowrap flex flex-col ${
                    isMobile ? "p-6 mt-2" : ""
                  }`}
                  initial="closed"
                  animate={isServicesOpen ? "open" : "closed"}
                  variants={{
                    open: { opacity: 1, y: 0, transition: { duration: 0.2 } },
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
              }
              className="relative group hover:text-green-400 transition"
              onClick={handleLinkClick}
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          )}
        </div>
      )
    );

  return (
    <nav className="fixed top-5 inset-x-0 mx-auto max-w-3xl h-16 z-50 bg-white dark:bg-black/50 backdrop-blur-lg rounded-full shadow-lg border border-gray-200 dark:border-gray-900 px-4 py-0.5">
      <div className="flex justify-between w-full h-full lg:justify-evenly items-center text-black dark:text-white sm:justify-between">
        <Link href="/" className="flex items-center">
          <GoatLogo className="h-7" />
        </Link>
        <div className="hidden lg:flex space-x-6 items-center">
          {renderLinks(false)}
        </div>
        <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-gray-800 z-50 flex flex-col items-center mt-4">
          <div className="self-end p-4">
            <button onClick={toggleMenu}>
              <AiOutlineClose
                size={30}
                className="text-black dark:text-white"
              />
            </button>
          </div>
          <div className="flex flex-col items-center space-y-4 py-4 text-lg w-full">
            {renderLinks(true)}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
