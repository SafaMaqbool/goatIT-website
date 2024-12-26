'use client';

import { services } from '@/app/data/erp-services';
import { motion } from 'framer-motion';

const Page = () => {
  return (
    <div className="lg:mx:12 mx-6 my-16 min-h-screen bg-gradient-to-br from-green-900 via-teal-700 to-gray-900 p-10 text-white sm:mx-8 xl:mx-16">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <motion.h1
            className="mb-6 text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Odoo ERP Implementation Services
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-xl text-blue-200 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Transform your business with a tailored Odoo ERP solution that meets your unique requirements and scales
            with your growth.
          </motion.p>
        </section>

        {/* Image Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-xl shadow-2xl">
            <img
              src="https://i.pinimg.com/originals/68/35/c3/6835c30f379b5aeedf023ed82929e13f.png"
              alt="Odoo ERP"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </motion.section>

        {/* Services Section */}
        <section className="mb-20">
          <h2 className="mb-12 text-center text-3xl font-bold sm:text-4xl">What We Offer</h2>
          <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-lg bg-white/10 p-6 backdrop-blur-sm transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 text-center">
                  <div className="mx-auto h-16 w-16 text-gray-800 transition-transform duration-300 group-hover:scale-110">
                    <service.icon size={80} />
                  </div>
                </div>
                <h3 className="mb-3 text-center text-xl font-semibold">{service.title}</h3>
                <p className="text-center text-blue-200">{service.description}</p>
                <div className="absolute inset-0 rounded-lg border-2 border-green-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="inline-block rounded-full bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
          >
            Get Started Today
          </a>
        </motion.section>
      </div>
    </div>
  );
};

export default Page;
