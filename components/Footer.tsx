import { FaPhoneVolume } from 'react-icons/fa6';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import GoatLogo from './icons/brand';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-gray-300">
      <div className="container mx-auto flex flex-col items-center justify-evenly px-4 md:flex-row">
        {/* Left Side - Revolutionize Your Business Text */}
        <div className="text-left">
          <p className="mb-8 max-w-[50ch] text-lg font-semibold text-white">
            Are you ready to take your business to the next level? Let's collaborate and turn your vision into reality!
          </p>
        </div>

        {/* Button */}
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {/* Adjusted the gradient color to match Goat IT theme */}
          <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
            Contact Us Now
            <FaPhoneVolume className="ml-3" /> 
          </span>
        </button>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto mt-8 flex flex-col items-center">
        {/* Logo Section */}
        <div className="mb-4 flex items-center">
          <GoatLogo className="h-16" />
        </div>

        {/* Social Media Icons */}
        <div className="mb-4 flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61566292478666" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="text-2xl text-gray-400 hover:text-blue-600" /> {/* Facebook Icon Size */}
          </a>
          <a
            href="https://www.linkedin.com/company/goat-it-consulting-ltd/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-gray-400 hover:text-blue-700" /> {/* LinkedIn Icon Size */}
          </a>
          <a href="https://www.instagram.com/goat_it_consulting/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl text-gray-400 hover:text-pink-500" /> {/* Instagram Icon Size */}
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-sm">
          <p>© {new Date().getFullYear()} Goat IT Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
