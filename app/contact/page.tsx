import React from 'react';
import { Toaster } from 'sonner';
import { ContactForm } from './form';

const Page: React.FC = () => {
  return (
    <div className="min-h-screen pb-8 pt-16">
      <Toaster />
      <div className="mt-16 text-center">
        <h2 className="mb-2 text-4xl font-bold uppercase leading-snug tracking-wide text-blue-100">Contact Us</h2>
        <h1 className="mb-4 text-3xl font-bold uppercase leading-snug tracking-wide text-blue-100">
          We&#39;d love to hear from you!
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Continue your journey to explore, learn, and succeed with{' '}
          <span className="font-medium text-green-400">GOAT</span>
        </p>
      </div>
      <div className="flex items-center justify-center">
        <ContactForm />
      </div>{' '}
    </div>
  );
};

export default Page;
