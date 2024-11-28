'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import Image, { StaticImageData } from 'next/image'; 

import edolutions from '@/public/edolutions logo.png';
import lunar from '@/public/lunar logo.jpg';


type Testimonial = {
  id: number;
  company: string;
  logo: StaticImageData; 
  text: string;
  author: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    company: 'Edolutions',
    logo: edolutions,
    text: "Working with GOAT for our ERP development has been a transformative experience. Their team truly understood our operational challenges and delivered a tailored solution that streamlined our processes, enhanced our data management, and improved overall efficiency. From the initial consultation to the final implementation, their professionalism and technical expertise were exceptional. We couldn't have asked for a better partner.",
    author: 'Talha Sami',
    role: 'CEO'
  },
  {
    id: 2,
    company: 'Lunar Furniture',
    logo: lunar,
    text: 'The ERP system developed by GOAT has revolutionized the way we manage our inventory, orders, and customer relationships. Their ability to customize the platform to our specific business needs was remarkable. The seamless integration of all our processes has saved us time and resources, allowing us to focus on growth. We highly recommend GOAT to any company looking for a reliable ERP solution.',
    author: 'Usman Mehanti',
    role: 'CEO'
  }
];

export default function SmoothTestimonialsSlider({ autoSlideInterval = 5000 }: { autoSlideInterval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [autoSlideInterval]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <div
      id="#testimonials"
      className="relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 p-8 shadow-lg"
    >
      <div className="absolute inset-0 bg-grid-primary/5 [mask-image:radial-gradient(white,transparent_70%)]" />
      <h2 className="font-bold m-4 text-center text-4xl uppercase leading-snug tracking-wide text-blue-100">
        What Our Clients Say
      </h2>
      <div className="relative z-10 flex h-[400px] flex-col items-center justify-center">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute flex w-full flex-col items-center space-y-6"
          >
            <Image
              src={testimonials[currentIndex].logo}
              alt={`${testimonials[currentIndex].company} logo`}
              width={250}
              height={80}
              className="shadow-md"
            />
            <blockquote className="max-w-2xl text-center">
              <p className="text-lg font-medium leading-relaxed text-foreground">&quot;{testimonials[currentIndex].text}&quot;</p>
            </blockquote>
            <div className="text-center">
              <p className="text-base font-semibold text-primary">{testimonials[currentIndex].author}</p>
              <p className="text-sm text-muted-foreground">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full bg-background/50 backdrop-blur-sm transition-colors hover:bg-background/80"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full ${index === currentIndex ? 'w-6 bg-primary' : 'w-1.5 bg-primary/30'}`}
            initial={false}
            animate={{ width: index === currentIndex ? 24 : 6 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <div className="sr-only" aria-live="polite">
        Current testimonial: {testimonials[currentIndex].text} by {testimonials[currentIndex].author} from{' '}
        {testimonials[currentIndex].company}
      </div>
    </div>
  );
}
