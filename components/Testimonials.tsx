'use client';
import edolutions from '@/public/edolutions logo.png';
import lunar from '@/public/lunar logo.jpg';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa'; // Importing star icon from react-icons

const Testimonials = () => {
  const testimonials = [
    {
      text: "Working with GOAT for our ERP development has been a transformative experience. Their team truly understood our operational challenges and delivered a tailored solution that streamlined our processes, enhanced our data management, and improved overall efficiency. From the initial consultation to the final implementation, their professionalism and technical expertise were exceptional. We couldn't have asked for a better partner.",
      name: 'Talha Sami',
      title: 'CEO @ Edolutions',
      image: edolutions,
      rating: 5 // Added rating for each testimonial
    },
    {
      text: 'The ERP system developed by GOAT has revolutionized the way we manage our inventory, orders, and customer relationships. Their ability to customize the platform to our specific business needs was remarkable. The seamless integration of all our processes has saved us time and resources, allowing us to focus on growth. We highly recommend GOAT to any company looking for a reliable ERP solution.',
      name: 'Usman Mehanti',
      title: 'CEO @ Lunar Furniture',
      image: lunar,
      rating: 5 // Added rating for each testimonial
    }
  ];

  // State to control the current testimonial being shown
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect for automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="scroll-m-36 bg-gray-900 py-16">
      {' '}
      {/* Dark background for the section */}
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          What our Clients say
        </h2>
        <div className="relative mx-auto mt-10 max-w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full flex-none p-4" // Full-width on all screens
              >
                <div
                  className="relative z-10 rounded-xl bg-gray-800 p-6 shadow-lg" // Dark card background
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 transform">
                    <Image
                      src={testimonial.image}
                      alt="logo"
                      className="h-28 w-28" // Adjusted size for modern look
                    />
                  </div>
                  <div className="mt-16 text-center">
                    <div className="text-xl font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.title}</div>
                    <div className="mt-1 flex justify-center">
                      {Array.from({ length: testimonial.rating }, (_, i) => (
                        <FaStar key={i} className="text-yellow-400" /> // Render stars
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 text-center text-lg tracking-tight text-gray-200">{testimonial.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
