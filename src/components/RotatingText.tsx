import {
  useEffect,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
} from 'framer-motion';

const MIDDLE_SCHOOL_TOPICS = [
  "Mr. Beast",
  "Greek Mythology",
  "Basketball",
  "Art",
  "Volleyball",
  "Gymnastics",
  "Pokemon",
  "Minecraft",
  "Marvel",
  "Anime",
  "Soccer",
  "Fortnite",
  "Superhero",
  "Space",
  "Harry Potter",
  "Roblox",
];

interface RotatingTextProps {
  className?: string;
}

export function RotatingText({ className }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSpinning(true);

      // Add a slight delay to make the spin more noticeable
      setTimeout(() => {
        setCurrentIndex((prev) => {
          let newIndex;
          do {
            newIndex = Math.floor(Math.random() * MIDDLE_SCHOOL_TOPICS.length);
          } while (newIndex === prev && MIDDLE_SCHOOL_TOPICS.length > 1);
          return newIndex;
        });
        setIsSpinning(false);
      }, 100);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={className}>
      <AnimatePresence mode="popLayout">
        <motion.span
          key={MIDDLE_SCHOOL_TOPICS[currentIndex]}
          initial={{
            y: 30,
            opacity: 0,
            scale: 0.8,
            rotateX: -90,
            filter: "blur(4px)",
          }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
            rotateX: 0,
            filter: "blur(0px)",
          }}
          exit={{
            y: -30,
            opacity: 0,
            scale: 0.8,
            rotateX: 90,
            filter: "blur(4px)",
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            duration: 0.4,
            opacity: { duration: 0.2 },
            filter: { duration: 0.2 },
          }}
          className="inline-block text-white"
          style={{
            transformOrigin: "center",
            textShadow: isSpinning
              ? "0 0 20px rgba(147, 51, 234, 0.5)"
              : "none",
          }}
        >
          {MIDDLE_SCHOOL_TOPICS[currentIndex]}
        </motion.span>
      </AnimatePresence>
      <span>-style tutoring</span>
    </div>
  );
}
