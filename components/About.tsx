'use client';

import { useEffect, useState } from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // For scroll detection

const images = [
  'https://i.insider.com/57e14d88b0ef97f0288b6a1d?width=1136&format=jpeg',
  'https://images.inc.com/uploaded_files/image/1920x1080/getty_504987926_183876.jpg',
  'https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg'
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const controlsText = useAnimation(); // Control animations for text
  const controlsImage = useAnimation(); // Control animations for image
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true }); // Detect when component is in view

  // Trigger animations when section comes into view
  useEffect(() => {
    if (inView) {
      controlsText.start({ x: 0, opacity: 1, transition: { duration: 1 } });
      controlsImage.start({ x: 0, opacity: 1, transition: { duration: 1 } });
    }
  }, [controlsText, controlsImage, inView]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      const fadeOutTimeout = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setFade(false);
      }, 500);

      return () => clearTimeout(fadeOutTimeout);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={ref} className="m-4 flex flex-col items-center justify-center gap-8 p-4 md:flex-row">
      {/* Animated Image Section */}
      <motion.div
        initial={{ x: 50, opacity: 0 }} // Initial state of the image
        animate={controlsImage} // Control the animation
        className="order-1 mb-4 flex justify-center md:order-2 md:mb-0"
      >
        <div className="relative aspect-video w-full max-w-2xl">
          <img
            src={images[currentImageIndex]}
            width={1280}
            height={720}
            alt="Consulting"
            className={`h-full w-full rounded-lg object-cover transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: -50, opacity: 0 }} // Initial state of the text
        animate={controlsText} // Control the animation
        className="order-2 flex flex-col justify-center text-center md:order-1 md:text-left"
      >
        <h2 className="text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">Who We Are?</h2>
        <p className="mt-4 max-w-[50ch]">
          At Goat IT Consulting, we empower businesses to navigate the digital landscape with innovative IT solutions
          tailored to your needs.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <a
            href="/aboutPage"
            className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2"
            aria-label="Discover more about us"
          >
            <span className="absolute inset-0 animate-spin bg-[conic-gradient(from_90deg_at_50%_50%,#41AD49_0%,#FDDC5B_50%,#41AD49_100%)]" />
            <span className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white">
              Discover More
              <HiArrowRight className="ml-2" />
            </span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
