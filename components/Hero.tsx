import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { FaPhoneVolume } from 'react-icons/fa6';

const Hero = () => {
  const words = `WE TRANSFORM YOUR BUSINESS WITH TAILORED ODOO ERP & WEB DEVELOPMENT SOLUTIONS`;
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
        <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="#E6E6E6" />
        <Spotlight
          className="left-80 top-28 h-[80vh] w-[50vw]"
          fill="#A8DAB5" // Muted green
        />
      </div>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100"></div>
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <h2 className="max-w-80 text-center text-base uppercase tracking-widest text-blue-100">
            YOUR IDEAS, OUR SOLUTIONS
          </h2>

          <TextGenerateEffect duration={0.5} filter={false} words={words} />
          <p className="mb-4 text-center text-base text-[#FDDC5B] md:tracking-wider">
            Goat IT Consulting - Your Trusted Partner for Digital Transformation
          </p>

          <a href="/contact">
            {/* <TailwindCssButtons title="Contact Us Now" icon={<FaPhoneVolume />} position="right"/> */}
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              {/* Adjusted the gradient color to match Goat IT theme */}
              <span className="absolute inset-0 animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
              <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white backdrop-blur-3xl">
                Contact Us Now
                <FaPhoneVolume className="ml-3" /> {/* Arrow icon */}
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
