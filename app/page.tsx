import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';

import ContactSection from '@/components/ContactSection';
import SmoothTestimonialsSlider from '@/components/TestimonialSlider';

export default function Home() {
  return (
    <div className="bg-black-100 relative mx-auto flex flex-col items-center justify-center overflow-hidden sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <About />
        <Services />
        <SmoothTestimonialsSlider />
        <ContactSection />
      </div>
    </div>
  );
}
