import { Spotlight } from "@/components/ui/Spotlight";
import TailwindCssButtons from "@/components/ui/TailwindcssButtons";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const Hero = () => {
  const words = `WE TRANSFORM YOUR BUSINESS WITH TAILORED ODOO ERP & WEB DEVELOPMENT SOLUTIONS`;
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="#E6E6E6"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#A8DAB5" // Muted green
        />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-base text-center text-blue-100 max-w-80">
            YOUR IDEAS, OUR SOLUTIONS
          </h2>

          <TextGenerateEffect duration={0.5} filter={false} words={words} />
          <p className="text-center md:tracking-wider mb-4 text-base text-[#FDDC5B]">
            Goat IT Consulting - Your Trusted Partner for Digital Transformation
          </p>

          <a href="#contact-us">
            <TailwindCssButtons title="Contact Us Now" icon={<FaPhoneVolume />} position="right"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
