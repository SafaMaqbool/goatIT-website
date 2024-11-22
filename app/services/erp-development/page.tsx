import AnimatedButton from '@/components/ui/AnimatedButton';
import { AiFillSetting } from 'react-icons/ai';
import { FaChalkboardTeacher, FaCode, FaHandshake, FaIndustry, FaTools } from 'react-icons/fa';

const Page = () => {
  const services = [
    {
      title: 'Odoo Certified Partners',
      description: 'Expertise and official partnership with Odoo.',
      icon: <FaHandshake size={80} />,
      altText: 'odoo certified partners icon'
    },
    {
      title: 'Industry-Specific Solutions',
      description:
        'Extensive experience across various industries including retail, manufacturing, healthcare, and more.',
      icon: <FaIndustry size={80} />,
      altText: 'industry-specific solutions icon'
    },
    {
      title: 'End-to-End Implementation',
      description: 'From consultation to post-launch support, we manage the entire process.',
      icon: <FaTools size={80} />,
      altText: 'end-to-end implementation icon'
    },
    {
      title: 'Custom Development & Integrations',
      description: 'We customize and integrate Odoo modules to fit your unique business requirements.',
      icon: <FaCode size={80} />,
      altText: 'custom development and integrations icon'
    },
    {
      title: 'Ongoing Support & Training',
      description: 'Comprehensive user training and support even after implementation to ensure long-term success.',
      icon: <FaChalkboardTeacher size={80} />,
      altText: 'ongoing support and training icon'
    },
    {
      title: 'System Configuration & Optimization',
      description: 'Optimize your Odoo system for maximum performance and scalability.',
      icon: <AiFillSetting size={80} />,
      altText: 'system configuration icon'
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
        <div className="overflow-hidden rounded-lg bg-white">
          <img
            className="mt-4 max-h-[30rem]"
            src="https://i.pinimg.com/originals/68/35/c3/6835c30f379b5aeedf023ed82929e13f.png"
            alt="odoo erp image"
          />
        </div>
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
            <div className="mb-4 flex h-40 w-40 items-center justify-center">{service.icon}</div>
            <h1 className="mt-4 text-2xl font-semibold">{service.title}</h1>
            <p className="mt-2 text-lg">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Centered Contact Us Button */}
      <div className="mt-10 flex justify-center">
        <AnimatedButton icon="phone" label="Contact US Now" link="/contact" />
      </div>
    </div>
  );
};

export default Page;
