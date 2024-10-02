import React from "react";
import { HiArrowRight } from "react-icons/hi"; // Import the arrow icon

const Services = () => {
  return (
    <div className="m-4 p-4">
      <h2 className="text-3xl text-blue-100 uppercase leading-snug tracking-wide font-bold text-center mb-8">
        Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Service 1 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://example.com/service1.jpg"
            alt="Service 1"
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Consulting Services</h3>
            <p className="mt-2">
              We provide expert consulting services to help businesses streamline their operations and improve efficiency.
            </p>
          </div>
        </div>
        {/* Service 2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://example.com/service2.jpg"
            alt="Service 2"
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Software Development</h3>
            <p className="mt-2">
              Our team specializes in custom software development tailored to meet your unique business requirements.
            </p>
          </div>
        </div>
        {/* Service 3 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://example.com/service3.jpg"
            alt="Service 3"
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">IT Support</h3>
            <p className="mt-2">
              We offer comprehensive IT support to ensure your systems run smoothly and efficiently.
            </p>
          </div>
        </div>
        {/* Service 4 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://example.com/service4.jpg"
            alt="Service 4"
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Digital Marketing</h3>
            <p className="mt-2">
              Enhance your online presence with our tailored digital marketing strategies.
            </p>
          </div>
        </div>
        {/* Service 5 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://example.com/service5.jpg"
            alt="Service 5"
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Cloud Solutions</h3>
            <p className="mt-2">
              Leverage the power of the cloud with our innovative solutions designed for scalability and efficiency.
            </p>
          </div>
        </div>
        {/* Service 6 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://example.com/service6.jpg"
            alt="Service 6"
            className="object-cover w-full h-48 rounded-t-lg"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">Cybersecurity</h3>
            <p className="mt-2">
              Protect your business with our comprehensive cybersecurity solutions that safeguard your data.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
