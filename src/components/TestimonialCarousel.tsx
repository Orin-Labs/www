import {
  useEffect,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

import { testimonials } from '../constants/testimonials';

export function TestimonialCarousel() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence mode="wait">
        <motion.p
          key={currentTestimonial}
          className="text-gray-50 italic block"
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -10,
          }}
          transition={{ duration: 0.25 }}
        >
          "
          {testimonials[currentTestimonial].quote
            .split("//")
            .map((line, index) => (
              <span key={index}>
                {line}
                {index !==
                  testimonials[currentTestimonial].quote.split("//").length -
                    1 && <br className="hidden md:block" />}
              </span>
            ))}
          "
          <br />
          <span className="text-gray-50 text-sm not-italic">
            - {testimonials[currentTestimonial].source}
          </span>
        </motion.p>
      </AnimatePresence>
    </motion.div>
  );
}
