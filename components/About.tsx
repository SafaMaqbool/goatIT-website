'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import AnimatedButton from './ui/AnimatedButton';

const images = [
  'https://i.insider.com/57e14d88b0ef97f0288b6a1d?width=1136&format=jpeg',
  'https://images.inc.com/uploaded_files/image/1920x1080/getty_504987926_183876.jpg',
  'https://www.betterup.com/hubfs/Happy-work-team-cheering-and-celebrating-at-meeting-team-collaboration.jpg'
];

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(false);

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
    <div className="m-4 flex flex-col items-center justify-center gap-8 p-4 md:flex-row">
      {/* Animated Image Section */}
      <motion.div
        variants={{ hidden: { x: 50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -300px 0px' }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="order-1 mb-4 flex justify-center md:order-2 md:mb-0"
      >
        <div className="relative aspect-video w-full max-w-2xl">
          <img
            src={images[currentImageIndex]}
            width={1280}
            height={720}
            alt="Consulting"
            className={`h-full w-full rounded-xl object-cover transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        variants={{ hidden: { x: -50, opacity: 0 }, visible: { x: 0, opacity: 1 } }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '0px 0px -300px 0px' }}
        transition={{ type: 'spring', duration: 0.5 }}
        className="order-2 flex flex-col justify-center text-center md:order-1 md:text-left"
      >
        <h3 className="text-4xl leading-snug font-bold tracking-wide text-blue-100 uppercase">Who We Are?</h3>
        <p className="mt-4 max-w-[50ch]">
          At Goat IT Consulting, we empower businesses to navigate the digital landscape with innovative IT solutions
          tailored to your needs.
        </p>
        <div className="mt-6 flex justify-center md:justify-start">
          <AnimatedButton icon="right-arrow" label="Discover US" link="/about" />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
