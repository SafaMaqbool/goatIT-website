import { Spotlight } from '@/components/ui/Spotlight';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { Suspense } from 'react';
import Balancer from 'react-wrap-balancer';
import AnimatedButton from './ui/AnimatedButton';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <Suspense fallback={null}>
        <div>
          <Spotlight className="-left-10 -top-40 h-screen md:-left-32 md:-top-20" fill="white" />
          <Spotlight className="left-full top-10 h-[80vh] w-[50vw]" fill="#E6E6E6" />
          <Spotlight
            className="left-80 top-28 h-[80vh] w-[50vw]"
            fill="#A8DAB5" // Muted green
          />
        </div>
      </Suspense>

      <div className="absolute left-0 top-0 flex h-screen w-full items-center justify-center bg-black-100 bg-grid-black/[0.2]">
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 my-20 flex justify-center">
        <div className="flex max-w-[89vw] flex-col items-center justify-center md:max-w-2xl lg:max-w-[60vw]">
          <p className="max-w-80 text-center text-base uppercase tracking-widest text-blue-100">
            YOUR IDEAS, OUR SOLUTIONS
          </p>

          <h1>
            <Suspense fallback={null}>
              <Balancer>
                <TextGenerateEffect
                  duration={0.5}
                  filter={false}
                  words="WE TRANSFORM YOUR BUSINESS WITH TAILORED ODOO ERP & WEB DEVELOPMENT SOLUTIONS"
                  className="my-4 text-3xl sm:text-4xl lg:text-5xl"
                />
              </Balancer>
            </Suspense>
          </h1>

          <h2 className="mt-4 text-center text-base text-[#FDDC5B] md:tracking-wider">
            <Balancer>Goat IT Consulting - Your Trusted Partner for Digital Transformation</Balancer>
          </h2>

          <AnimatedButton className="mt-8" icon="phone" label="Contact US Now" link="/contact" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
