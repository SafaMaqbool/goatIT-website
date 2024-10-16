
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import GoatLogo from './icons/brand';

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 text-gray-300">
     

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
