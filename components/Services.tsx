const services = [
  {
    title: "ERP Development",
    description:
      "Comprehensive Odoo ERP setup tailored to streamline your business processes.",
    link: "/services/erp-development", // Link to detailed page
  },
  {
    title: "Web Development",
    description: "Custom website development to enhance your online presence.",
    link: "/services/web-development", // Link to detailed page
  },
];

const Services = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold mb-2 text-green-400">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a href={service.link}>
                <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-green-400 bg-[linear-gradient(110deg,#2e7d32,45%,#388e3c,55%,#2e7d32)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900">
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
