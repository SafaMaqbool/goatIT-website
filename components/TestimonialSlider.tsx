'use client';

import { testimonials } from '@/app/data/testimonials';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { Button } from './ui/Button';

export default function SmoothTestimonialsSlider({ autoSlideInterval = 5000 }: { autoSlideInterval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  const prevTestimonial = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextTestimonial, autoSlideInterval);
    return () => clearInterval(intervalId);
  }, [autoSlideInterval, nextTestimonial]);

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
    <div className="from-primary/5 to-secondary/5 relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl bg-gradient-to-br p-8 shadow-lg">
      <div className="bg-grid-primary/5 mask-radial-gradient absolute inset-0" />
      <h2 className="m-4 text-center text-3xl md:text-4xl leading-snug font-bold tracking-wide text-blue-100 uppercase">
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
              className="rounded-md shadow-md"
            />
            <blockquote className="max-w-2xl text-center">
              <p className="text-foreground text-lg leading-relaxed font-medium">
                &quot;{testimonials[currentIndex].text}&quot;
              </p>
            </blockquote>
            <div className="text-center">
              <p className="text-primary text-base font-semibold">{testimonials[currentIndex].author}</p>
              <p className="text-muted-foreground text-sm">
                {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Next and Previous Buttons */}
      <div className="absolute inset-y-0 left-4 z-10 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/50 hover:bg-background/80 rounded-full backdrop-blur-xs transition-colors"
          onClick={prevTestimonial}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute inset-y-0 right-4 z-10 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="bg-background/50 hover:bg-background/80 rounded-full backdrop-blur-xs transition-colors"
          onClick={nextTestimonial}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 transform space-x-2">
        {testimonials.map((_, index) => (
          <motion.div
            key={index}
            className={`h-1.5 rounded-full ${index === currentIndex ? 'bg-primary w-6' : 'bg-primary/30 w-1.5'}`}
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
