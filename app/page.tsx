import Testimonials from '@/components/Testimonials';
import About from '../components/About';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-hidden bg-black-100 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
        <About />
        <Services />
        <Testimonials/>
        <Footer/>
      </div>
    </main>
  );
}
