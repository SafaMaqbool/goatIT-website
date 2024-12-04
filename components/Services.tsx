'use client';

import Link from 'next/link';

const services = [
  {
    title: 'ERP Implementation',
    description: 'Comprehensive Odoo ERP setup tailored to streamline your business processes.',
    link: '/services/erp-development', // Link to detailed page
    image: '/odoo-erp.jpg' // Corrected image path
  },
  {
    title: 'Web Development',
    description: 'Custom website development to enhance your online presence.',
    link: '/services/web-development', // Link to detailed page
    image:
      '/web.jpg' // Valid external image
  }
];

const Services = () => {
  return (
    <section className="my-36 py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-12 text-3xl md:text-4xl font-bold text-white uppercase">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative flex w-full flex-col rounded-2xl bg-gray-800 p-6 shadow-2xl transition-all hover:scale-105 hover:shadow-xl sm:w-80 md:w-96"
            >
              {/* Image with hover effect */}
              {service.image && (
                <div className="relative mb-6 overflow-hidden rounded-xl transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={service.image}
                    alt={service.title}
                    
                    className="object-cover transition-transform h-72 w-full items-center duration-300 group-hover:scale-110"
                  />
                </div>
              )}
              <div>
                <h3 className="mb-3 text-2xl font-semibold tracking-wide text-white transition-colors duration-300 group-hover:text-green-400">
                  {service.title}
                </h3>
                <p className="mb-6 text-gray-300">{service.description}</p>
              </div>
              <Link
                href={service.link}
                className="mt-auto inline-flex items-center justify-center rounded-full bg-gradient-to-r from-green-400 to-green-500 px-6 py-3 font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-400 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-700"
              >
                <span>Learn More</span>
              </Link>
              {/* Hover overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black opacity-0 transition-opacity duration-300 group-hover:opacity-50"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
