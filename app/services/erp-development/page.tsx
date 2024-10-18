import Image from 'next/image';
import React from 'react';
import OdooPartner from '@/public/official-odoo-partner.jpg';

const Page = () => {
  const services = [
    {
      title: 'Odoo Certified Partners',
      description: 'Expertise and official partnership with Odoo.',
      imageSrc: OdooPartner,
      altText: 'odoo partner image'
    },
    {
      title: 'Industry-Specific Solutions',
      description:
        'Extensive experience across various industries including retail, manufacturing, healthcare, and more.',
      imageSrc: OdooPartner,
      altText: 'industry-specific solutions image'
    },
    {
      title: 'End-to-End Implementation',
      description: 'From consultation to post-launch support, we manage the entire process.',
      imageSrc: OdooPartner,
      altText: 'end-to-end implementation image'
    },
    {
      title: 'Custom Development & Integrations',
      description: 'We customize and integrate Odoo modules to fit your unique business requirements.',
      imageSrc: OdooPartner,
      altText: 'custom development and integrations image'
    },
    {
      title: 'Ongoing Support & Training',
      description: 'Comprehensive user training and support even after implementation to ensure long-term success.',
      imageSrc: OdooPartner,
      altText: 'ongoing support and training image'
    },
    {
      title: 'Odoo Certified Partners',
      description: 'Expertise and official partnership with Odoo.',
      imageSrc: OdooPartner,
      altText: 'odoo certified partners image'
    }
  ];

  return (
    <div className="m-16 p-10">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-4xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          Odoo ERP Implementation Services
        </h1>
        <p className="max-w-[70ch] text-center text-xl">
          Transform your business with a tailored Odoo ERP solution that meets your unique requirements and scales with
          your growth.
        </p>
        <img
          className="mt-4"
          src="https://www.candidroot.com/web/image/6754-1aaf2e31/odoo-erp-implementation-services.jpg"
          alt="odoo erp image"
        />
      </div>

      <div className="m-4 flex flex-col p-4">
        <h2 className="text-center text-2xl font-medium">
          Why Partner with GOAT IT CONSULTING for Odoo ERP Implementation?
        </h2>
        <p className="mt-4 text-center text-xl">
          We are certified Odoo ERP specialists with a deep understanding of how to align the platform with your
          business goals. Our team delivers custom-tailored ERP solutions that are scalable, efficient, and designed to
          maximize ROI.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div key={index} className="flex h-full flex-col items-center rounded-lg bg-gray-800 p-6 text-center">
            <div className="mb-4 flex h-40 w-40 items-center justify-center">
              <Image src={service.imageSrc} alt={service.altText} className="h-full w-full object-contain" />
            </div>
            <h1 className="mt-4 text-2xl font-semibold">{service.title}</h1>
            <p className="mt-2 text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Contact Us Button */}
      <div className="mt-10 flex justify-center">
        <a
          href="/contact" 
          className="rounded-full bg-blue-600 px-8 py-3 text-xl font-semibold text-white transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Page;
