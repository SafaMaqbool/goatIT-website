'use client';

const services = [
  {
    title: 'ERP Implementation',
    description: 'Comprehensive Odoo ERP setup tailored to streamline your business processes.',
    link: '/services/erp-development', // Link to detailed page
    image: '/odoo-framework.png' // Corrected image path
  },
  {
    title: 'Web Development',
    description: 'Custom website development to enhance your online presence.',
    link: '/services/web-development', // Link to detailed page
    image:
      'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=612x612&w=0&k=20&c=5f5qgmdm1_isNCz_ISP61-2QPfEtRl0Fz1ZVplTD7ek=' // Valid external image
  }
];

const Services = () => {
  return (
    <section className="bg-gray-900 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-8 text-center text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          Our Services
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-lg bg-gray-800 p-6 shadow-md transition hover:shadow-lg"
            >
              {/* Uniform image styling */}
              {service.image && (
                <div className="relative mb-4 w-full overflow-hidden rounded-md">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-fill"
                  />
                </div>
              )}
              <h3 className="mb-2 text-2xl font-semibold leading-snug tracking-wide text-green-400">
                {service.title}
              </h3>
              <p className="mb-4 text-gray-300">{service.description}</p>
              <a href={service.link}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-full border border-green-400 bg-[linear-gradient(110deg,#2e7d32,45%,#388e3c,55%,#2e7d32)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-400">
                  Learn More
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
