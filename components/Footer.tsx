import { FaPhoneVolume}  from 'react-icons/fa6'
import { FaLinkedin, FaFacebook, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';
import GoatLogo from './icons/brand';
import Link from 'next/link'; // For internal navigation if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12 text-gray-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Branding Section */}
          <div className="space-y-4">
            <GoatLogo className="h-16" />
            <p>Empowering businesses with innovative IT solutions to achieve success and growth.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-blue-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhoneVolume />
                <span>+92 21 38949447</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt className='text-2xl'/>
                <span>Karachi Office. C 19D 4th Floor Badar Commercial Street 5 DHA Phase 5 Ext Karachi, Pakistan</span>
              </div>
              <a href="mailto:info@goatconsulting.co.uk" className="text-blue-400 hover:underline">
                info@goatconsulting.co.uk
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61566292478666"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/goat-it-consulting-ltd/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/goat_it_consulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>© {new Date().getFullYear()} Goat IT Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
