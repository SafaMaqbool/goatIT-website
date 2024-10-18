import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaShoppingCart, FaSearch, FaServer, FaCogs } from 'react-icons/fa'; // Import icons

const services = [
  {
    icon: <FaLaptopCode className="mb-4 text-6xl text-blue-400" />,
    title: 'Custom Website Design & Development',
    description: 'Tailored to your brand, business goals, and audience.'
  },
  {
    icon: <FaMobileAlt className="mb-4 text-6xl text-blue-400" />,
    title: 'Responsive Web Design',
    description: 'Ensure your website looks great and functions flawlessly on any device.'
  },
  {
    icon: <FaShoppingCart className="mb-4 text-6xl text-blue-400" />,
    title: 'E-commerce Solutions',
    description: 'Build online stores with integrated payment gateways and product management.'
  },
  {
    icon: <FaSearch className="mb-4 text-6xl text-blue-400" />,
    title: 'SEO Optimization',
    description: 'Drive traffic to your site with on-page and technical SEO best practices.'
  },
  {
    icon: <FaServer className="mb-4 text-6xl text-blue-400" />,
    title: 'CMS Integration',
    description: 'Easily manage your site’s content with custom WordPress or other CMS setups.'
  },
  {
    icon: <FaCogs className="mb-4 text-6xl text-blue-400" />,
    title: 'Web Hosting & Maintenance',
    description: 'We provide hosting and ongoing support to keep your site running smoothly.'
  }
];

const Page = () => {
  return (
    <div className="m-16 p-10">
      {/* Heading Section */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-4xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          Web Development Services
        </h1>
        <p className="max-w-[70ch] text-center text-xl">
          Boost your business with a powerful online presence through a custom-designed website that meets your unique
          needs and engages your audience.
        </p>
      </div>

      {/* Image or Visual Representation */}
      <div className="mt-4 flex justify-center">
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20231205165904/web-development-image.webp" // Replace with actual image
          alt="Web Development"
          className="w-full max-w-lg"
        />
      </div>
      
      <h1 className=''>What we Offer</h1>

      {/* Services Array Style Grid Section */}
      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center rounded-lg bg-gray-800 p-6 text-center shadow-md">
            {service.icon}
            <h3 className="mb-2 text-2xl font-semibold">{service.title}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Button */}
      <div className="mt-10 flex justify-center">
        <a
          href="/contact" // Update this link to your actual contact page
          className="rounded-full bg-blue-600 px-8 py-3 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Get Started Today
        </a>
      </div>
    </div>
  );
};

export default Page;
