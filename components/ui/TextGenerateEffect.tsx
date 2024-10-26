'use client';

import { cn } from '@/utils/cn';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  coloredIndex = 4,
  duration = 0.5
}: {
  words: string;
  className?: string;
  filter?: boolean;
  coloredIndex?: number;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(' ');

  useEffect(() => {
    animate(
      'span',
      {
        opacity: 1,
        filter: filter ? 'blur(0px)' : 'none'
      },
      {
        duration: duration,
        delay: stagger(0.2) // Stagger to animate each word
      }
    );
  }, [animate, filter, duration]);

  return (
    <motion.div
      ref={scope}
      className={cn('my-4 text-center text-3xl font-bold leading-snug tracking-wide text-white', className)}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={cn(
            'opacity-0', // All words start with opacity 0
            idx > coloredIndex ? 'text-[#41AD49]' : 'text-blue-100'
          )}
          style={{
            filter: filter ? 'blur(10px)' : 'none'
          }}
        >
          {word}{' '}
        </motion.span>
      ))}
    </motion.div>
  );
};
