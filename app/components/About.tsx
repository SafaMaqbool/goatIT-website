"use client";
import React, { useEffect, useState } from "react";
import { HiArrowRight } from "react-icons/hi"; // Import the arrow icon

const images = [
  "https://i.insider.com/57e14d88b0ef97f0288b6a1d?width=1136&format=jpeg",
  "https://images.inc.com/uploaded_files/image/1920x1080/getty_504987926_183876.jpg",
  "https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg",
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false); // State to handle fade effect

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true); // Start fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false); // Start fade-in after changing the image
      }, 500); // Time to match fade-out duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-4 p-4">
      {/* Animated Image Section */}
      <div className="flex justify-center mb-4 md:mb-0 order-1 md:order-2">
        {" "}
        {/* Change order for mobile */}
        <div
          className="relative w-full h-0"
          style={{ paddingBottom: "56.25%" }}
        >
          {/* 16:9 Aspect Ratio */}
          <img
            src={images[currentImageIndex]} // Use the current image index
            alt="Consulting"
            className={`absolute inset-0 object-cover w-full h-full rounded-lg transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-0" : "opacity-100"
            }`} // Smooth opacity transition
          />
        </div>
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
        {" "}
        {/* Change order for mobile */}
        <h2 className="text-3xl text-blue-100 uppercase leading-snug tracking-wide font-bold">
          Who We Are?
        </h2>
        <p className="mt-4">
          At Goat IT Consulting, we empower businesses to navigate the digital
          landscape with innovative IT solutions tailored to your needs.
        </p>
        <div className="flex justify-center md:justify-start mt-6">
          <a
            href="/aboutPage"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
            <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
              Discover More
              <HiArrowRight className="ml-2" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
