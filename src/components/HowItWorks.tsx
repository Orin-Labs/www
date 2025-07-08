import { HTMLProps, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

import { cn } from "../utils";
import { BackgroundGradient } from "./BackgroundGradient";
import { Message } from "./Phone";

// Lazy loading image component
const LazyImage = ({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Much larger margin to delay loading further
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Only load image when user explicitly scrolls near them
  const handleLoadImage = () => {
    setIsInView(true);
  };

  return (
    <div ref={imgRef} className={cn("w-full h-full", className)}>
      {!isInView && (
        <div
          className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg absolute top-0 left-0 flex items-center justify-center cursor-pointer"
          onClick={handleLoadImage}
        >
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-2">📚</div>
            <div className="text-sm">Click to load lesson</div>
          </div>
        </div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
          onLoad={() => setIsLoaded(true)}
          style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s" }}
        />
      )}
      {isInView && !isLoaded && (
        <div className="w-full h-full bg-gray-200 animate-pulse rounded-lg absolute top-0 left-0" />
      )}
    </div>
  );
};

// Gradient number badge component
const GradientNumberBadge = ({
  number,
  speed,
}: {
  number: number;
  speed: number;
}) => (
  <div className="w-12 h-12 rounded-full flex items-center justify-center relative overflow-hidden">
    <BackgroundGradient speed={speed} />
    <div
      className={cn(
        "absolute inset-0 rounded-full pointer-events-none z-10",
        "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb] dark:shadow-none"
      )}
    />
    <span className="text-white text-xl font-bold z-20 relative">{number}</span>
  </div>
);

// Simple floating message component
const FloatingMessage = ({
  message,
  delay = 0,
}: {
  message: Message;
  delay?: number;
}) => {
  if (message.isFromUser) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay }}
        className="flex justify-end mb-3 font-system"
      >
        <div className="ml-2 relative rounded-[18px] max-w-[280px] bg-[#0078FF] px-4 py-2 text-white shadow-lg">
          <p className="text-sm">{message.text}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex justify-start mb-3 font-system"
    >
      <div className="mr-2 relative rounded-[18px] max-w-[280px] bg-[#E9E9EB] dark:bg-[#414141] px-4 py-2 text-black dark:text-white shadow-lg">
        <p className="text-sm">{message.text}</p>
      </div>
    </motion.div>
  );
};

// Message visualization component
const MessageVisualization = ({ messages }: { messages: Message[] }) => (
  <div className="flex justify-center">
    <div className="w-full max-w-[320px] space-y-2">
      {messages.map((message, index) => (
        <FloatingMessage
          key={message.id}
          message={message}
          delay={index * 0.3}
        />
      ))}
    </div>
  </div>
);

// Step content component
const StepContent = ({
  number,
  title,
  description,
  speed,
}: {
  number: number;
  title: string;
  description: string;
  speed: number;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
    className="space-y-6"
  >
    <div className="flex items-center gap-4">
      <GradientNumberBadge number={number} speed={speed} />
      <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
    <p className="text-lg text-gray-600 leading-relaxed dark:text-gray-400">
      {description}
    </p>
  </motion.div>
);

// Step visualization component
const StepVisualization = ({
  children,
  delay = 0.2,
  rightAligned = false,
}: {
  children: React.ReactNode;
  delay?: number;
  rightAligned?: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, x: rightAligned ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`flex justify-center ${
      rightAligned ? "order-2 lg:order-1" : ""
    }`}
  >
    {children}
  </motion.div>
);

// Step container component
const Step = ({
  content,
  visualization,
  rightAligned = false,
}: {
  content: React.ReactNode;
  visualization: React.ReactNode;
  rightAligned?: boolean;
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
    <div className={rightAligned ? "order-1 lg:order-2" : ""}>{content}</div>
    {visualization}
  </div>
);

interface HowItWorksProps extends HTMLProps<HTMLElement> {
  speed: number;
}

// Step data
const stepData = [
  {
    number: 1,
    title: "Meet Orin",
    description:
      "Tell Orin about your student's interests, learning styles, and goals before picking a time for their first lesson. Orin gets to know your child personally to create the perfect learning experience.",
    messages: [
      {
        id: "meet1",
        text: "Hi! I'm Orin. Tell me about your student's interests and what they're struggling with 📚",
        isFromUser: false,
        timestamp: new Date(),
      },
      {
        id: "meet2",
        text: "Emma loves art and is having trouble with algebra word problems",
        isFromUser: true,
        timestamp: new Date(),
      },
    ],
  },
  {
    number: 2,
    title: "First Lesson",
    description:
      "Have your student join a one-on-one video session where Orin delivers an interactive lesson tailored specifically to their needs and pace. Every lesson is personalized and engaging.",
    isImagePlaceholder: true,
  },
  {
    number: 3,
    title: "Track Progress & Continue",
    description:
      "Receive a detailed summary of what your child learned and their progress. Then set up regular sessions to keep the momentum going and watch your student thrive.",
    messages: [
      {
        id: "progress1",
        text: "Emma mastered 2-step equations today! 🌟 Ready to schedule next week?",
        isFromUser: false,
        timestamp: new Date(),
      },
      {
        id: "progress2",
        text: "Amazing! Same time next week works perfectly",
        isFromUser: true,
        timestamp: new Date(),
      },
    ],
  },
];

export function HowItWorks({ speed, className }: HowItWorksProps) {
  return (
    <section
      className={cn(
        "w-full py-16 md:py-24 bg-gray-50 dark:bg-neutral-900",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Your personalized AI tutor is ready in three simple steps
          </p>
        </motion.div>

        {stepData.map((step, index) => {
          const isRightAligned = index === 1; // Step 2 is right-aligned

          const content = (
            <StepContent
              number={step.number}
              title={step.title}
              description={step.description}
              speed={speed}
            />
          );

          const visualization = (
            <StepVisualization rightAligned={isRightAligned}>
              {step.isImagePlaceholder ? (
                <LazyImage src="/lesson.png" alt="lesson" />
              ) : (
                <MessageVisualization messages={step.messages!} />
              )}
            </StepVisualization>
          );

          return (
            <Step
              key={step.number}
              content={content}
              visualization={visualization}
              rightAligned={isRightAligned}
            />
          );
        })}
      </div>
    </section>
  );
}
