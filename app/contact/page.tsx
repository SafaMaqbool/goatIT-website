'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { Toaster } from 'sonner';
import { ContactForm } from './form';

const Page: React.FC = () => {
  return (
    <div className="m-16 min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-10 text-white">
      <Toaster />
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.section
          className="mb-20 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 md:text-5xl text-4xl leading-snug font-bold tracking-wide text-blue-100 uppercase">Contact Us</h2>
          <h1 className="mb-4 md:text-4xl text-3xl leading-snug font-bold tracking-wide text-blue-100 uppercase">
            We&#39;d love to hear from you!
          </h1>
          <p className="mb-8 text-xl text-gray-300">
            Continue your journey to explore, learn, and succeed with{' '}
            <span className="text-brand font-medium">GOAT</span>
          </p>
        </motion.section>

        {/* Contact Form Section */}
        <motion.section
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <ContactForm />
        </motion.section>
      </div>
    </div>
  );
};

export default Page;
