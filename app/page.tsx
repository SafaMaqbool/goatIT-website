import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';

import ContactSection from '@/components/ContactSection';
import SmoothTestimonialsSlider from '@/components/TestimonialSlider';

export default function Home() {
  return (
    <section className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <About />
        <Services />
        {/* <Testimonials /> */}
        <SmoothTestimonialsSlider />
        <ContactSection />
      </div>
    </section>
  );
}
