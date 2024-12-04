'use client';

import AnimatedButton from '@/components/ui/AnimatedButton';
import { motion } from 'framer-motion';

const About = () => {
  const sections = [
    {
      title: 'Who we are',
      text: 'At Goat IT Consulting, we empower businesses to navigate the digital landscape with innovative IT solutions tailored to your needs. Our mission is to drive growth and efficiency through strategic technology consulting, ensuring you stay ahead in a rapidly changing market.',
      imageUrl:
        'https://media.istockphoto.com/id/1373240838/photo/positive-team-motivation.jpg?s=612x612&w=0&k=20&c=zyLDqvjxYDV0nhKf7laXUcOer5ZW-FH864I9k6LXgjI=',
      alt: 'People Working'
    },
    {
      title: 'Our Mission',
      text: 'Our mission is to provide cutting-edge technology solutions that help our clients achieve operational excellence and business transformation. We are dedicated to fostering a collaborative environment where creativity and innovation thrive, with a focus on ERP solutions that streamline business operations.'
    },
    {
      title: 'Our Vision',
      text: 'Our vision is to be a global leader in IT consulting, recognized for our commitment to excellence and innovation. We aim to empower businesses through technology, helping them unlock their full potential and achieve sustainable growth. Our web development services are designed to build impactful digital presences for our clients.'
    }
  ];

  return (
    <div className="from-brand m-16 min-h-screen bg-gradient-to-br via-green-900 to-teal-900 p-10 text-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-6xl leading-snug font-bold tracking-wide text-blue-100 uppercase">{sections[0].title}</h2>
          <p className="mt-8 max-w-4xl text-lg text-gray-100">{sections[0].text}</p>
        </motion.div>

        {/* 2-Column Grid Section with ERP and Web Development Images */}
        <div className="mx-auto mt-24 grid w-full max-w-6xl gap-8 md:grid-cols-2">
          {/* "Our Mission" Section */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl leading-snug font-bold tracking-wide text-blue-100 uppercase md:text-3xl">
              {sections[1].title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">{sections[1].text}</p>
          </motion.div>

          {/* "Our Vision" Section */}
          <motion.div
            className="flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h2 className="text-2xl leading-snug font-bold tracking-wide text-blue-100 uppercase md:text-3xl">
              {sections[2].title}
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-gray-300">{sections[2].text}</p>
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <AnimatedButton icon="phone" label="Contact US Now" link="/contact" />
      </div>
    </div>
  );
};

export default About;
