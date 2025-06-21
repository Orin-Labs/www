import React, { HTMLProps } from 'react';

import { motion } from 'framer-motion';
import {
  Mic,
  Triangle,
  VideoOff,
} from 'lucide-react';

import { cn } from '../utils';
import { BackgroundGradient } from './BackgroundGradient';

const testimonials = [
  {
    quote:
      "When Orin created a Mr. Beast-themed math lesson, my son was actually excited to solve problems. He personalized everything to his interests.",
    pullQuote: "Mr. Beast-themed math lesson",
    author: "Tyler M.",
    location: "Phoenix, AZ",
  },
  {
    quote:
      "For the first time ever, Noah *asked* to hop on another tutoring session. Orin turned homework from a battle into his idea.",
    pullQuote: "asked to hop on another session",
    author: "Erica L.",
    location: "Austin, TX",
  },
  {
    quote:
      "Emma set an alarm so she wouldn't miss her Orin call. I've never seen her that pumped about science.",
    pullQuote: "set an alarm so she wouldn't miss her Orin call",
    author: "Carlos R.",
    location: "Denver, CO",
  },
  {
    quote:
      "Orin handles everything - lesson planning, progress tracking, even sending me weekly reports. I finally get to just be a parent instead of a homework manager.",
    pullQuote:
      "I finally get to just be a parent instead of a homework manager",
    author: "Jasmine K.",
    location: "Seattle, WA",
  },
  {
    quote:
      "My daughter's eyes lit up when Orin turned algebra into a Harry Potter adventure. She's never been so engaged with equations before.",
    pullQuote: "Harry Potter adventure",
    author: "Sarah K.",
    location: "Portland, OR",
  },
  {
    quote:
      "Yesterday Lily told me, 'Math is actually fun now.' Orin flipped the switch from avoidance to curiosity.",
    pullQuote: "Math is actually fun now",
    author: "Sam P.",
    location: "Atlanta, GA",
  },
  {
    quote:
      "The weekly progress report showed my son completed 3 extra practice sessions on his own. Orin's approach makes him want to learn more.",
    pullQuote: "completed 3 extra practice sessions on his own",
    author: "David R.",
    location: "Miami, FL",
  },
];

type TestimonialCard = {
  quote: string;
  pullQuote: string;
  author: string;
  location: string;
};

type ImageCard = {
  type: "image";
  src: string;
  alt: string;
};

type Card = TestimonialCard | ImageCard | React.ReactNode;

// Create array with testimonials and image placeholders
const allCards: Card[] = [
  testimonials[0], // Mr. Beast testimonial
  {
    type: "image",
    src: "/gif1.gif",
    alt: "Student engaged in learning",
  },
  testimonials[1], // Noah testimonial
  {
    type: "image",
    src: "/gif2.gif",
    alt: "Student engaged in learning",
  },
  <div className="absolute inset-0 rounded-lg overflow-hidden flex items-center justify-center">
    <Triangle className="w-14 h-14 text-white z-10 animate-ping absolute" />
    <Triangle className="w-16 h-16 text-white z-10 mt-2" />
    <BackgroundGradient speed={0.5} />

    <div className="absolute bottom-2 right-2 backdrop-blur-sm rounded-full bg-neutral-900/50 flex z-10 text-white">
      <div
        className={cn(
          "rounded-full p-2 transition-all duration-150",
          "bg-neutral-900/0"
        )}
      >
        <Mic className="w-3 h-3" />
      </div>

      <div
        className={cn(
          "rounded-full p-2 transition-all duration-150",
          "bg-neutral-900/0"
        )}
      >
        <VideoOff className="w-3 h-3" />
      </div>
    </div>
  </div>,
  {
    type: "image",
    src: "/gif3.gif",
    alt: "Student engaged in learning",
  },
  testimonials[4], // Harry Potter testimonial

  {
    type: "image",
    src: "/gif4.gif",
    alt: "Student engaged in learning",
  },
  testimonials[3], // Jasmine testimonial
];

export const SocialProof = ({
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={cn("w-full py-16 px-6", className)} {...props}>
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-6xl mb-2 font-bold"
        >
          Loved by 100+ families
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-lg text-gray-500"
        >
          Orin has over 13,000 hours of tutoring experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3 },
              }}
              whileHover={{
                boxShadow: "2px 2px 2px #00000022, -2px -2px 2px #ffffff77",
                y: 2,
              }}
              viewport={{ once: true }}
              className={`bg-white dark:bg-neutral-800 rounded-lg p-6 relative min-h-60`}
              animate={{
                boxShadow: "2px 2px 4px #00000044, -2px -2px 4px #ffffff99",
                y: 0,
              }}
            >
              {React.isValidElement(card) ? (
                // Handle React.ReactNode (JSX elements)
                card
              ) : typeof card === "object" &&
                card !== null &&
                "type" in card &&
                card.type === "image" ? (
                // Handle ImageCard
                <img
                  src={(card as ImageCard).src}
                  alt={(card as ImageCard).alt}
                  className="w-full h-full object-cover aspect-video absolute top-0 left-0 rounded-lg"
                />
              ) : (
                // Handle TestimonialCard
                <>
                  {/* Pull quote for scannability */}
                  <div className="mb-3">
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 italic">
                      "{(card as TestimonialCard).pullQuote}"
                    </p>
                  </div>

                  <blockquote className="text-base text-gray-800 dark:text-gray-200 mb-4 leading-relaxed italic">
                    "{(card as TestimonialCard).quote}"
                  </blockquote>

                  <footer className="text-sm text-gray-600 dark:text-gray-400">
                    — {(card as TestimonialCard).author},{" "}
                    {(card as TestimonialCard).location}
                  </footer>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
