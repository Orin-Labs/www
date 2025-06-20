import {
  useEffect,
  useState,
} from 'react';

import {
  motion,
  TargetAndTransition,
  Transition,
} from 'framer-motion';
import {
  ArrowRightIcon,
  ChevronDownIcon,
} from 'lucide-react';

import { Button } from './Button';
import { BackgroundGradient } from './components/BackgroundGradient';
import {
  Message,
  Phone,
} from './components/Phone';
import { SocialProof } from './components/SocialProof';
import { useCopyVariation } from './hooks/useCopyVariation';
import { useSignupForm } from './hooks/useSignupForm';
import { cn } from './utils';

let delay = 0;
const getDelay = () => {
  const temp = delay;
  delay += 0.05;
  return temp;
};

const delayed = (): {
  initial: TargetAndTransition;
  animate: TargetAndTransition;
  transition: Transition;
} => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: {
    delay: getDelay(),
    duration: 0.5,
  },
});

const coordinationMessages: Message[] = [
  {
    id: "coord1",
    text: "Hi Sarah! Just wanted to check in on how Charlie's math session went yesterday. How did he feel about the algebra concepts we covered?",
    isFromUser: false,
    timestamp: new Date(),
  },
  {
    id: "coord2",
    text: "it went really well! he said you explained it much better than his teacher. he's actually excited for the next session",
    isFromUser: true,
    timestamp: new Date(),
  },
  {
    id: "coord3",
    text: "That's fantastic! I'm so glad he's feeling more confident. I noticed he struggled with quadratic equations, so I've prepared some extra practice problems for our next session.",
    isFromUser: false,
    timestamp: new Date(),
  },
  {
    id: "coord3b",
    text: "When works best for you this week?",
    isFromUser: false,
    timestamp: new Date(),
  },
  {
    id: "coord4",
    text: "can you do thursday at 4 again?",
    isFromUser: true,
    timestamp: new Date(),
  },
  {
    id: "coord5",
    text: "Perfect! I've got Charlie booked for Thursday at 4pm. I'll send you both a reminder 30 minutes before, and we'll focus on those quadratic equations. See you then! 📚",
    isFromUser: false,
    timestamp: new Date(),
  },
];

function App() {
  const { phoneNumber, isLoading, handlePhoneChange, speed, handleSubmit } =
    useSignupForm();
  const { headline, subheadline, cta } = useCopyVariation();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Gradient container. */}
      <section className="w-screen h-screen md:p-6 text-white">
        <div className="w-full h-full md:rounded-lg overflow-hidden relative flex flex-col justify-center items-center gap-4">
          <motion.h1
            {...delayed()}
            className="text-6xl md:text-7xl font-bold z-10 text-center"
          >
            {headline}
          </motion.h1>
          <motion.h3
            {...delayed()}
            className="text-3xl md:text-4xl max-w-xl z-10"
          >
            {subheadline}
          </motion.h3>

          <motion.div
            className="flex flex-col gap-2 items-center z-10 mt-8"
            {...delayed()}
          >
            <Button shadow="neu" bg="transparent" className="gap-2">
              Free 2 week trial
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
            <small className="text-white">No credit card required</small>
          </motion.div>

          <BackgroundGradient speed={speed} />
        </div>
      </section>

      {/* Social Proof Section */}
      <SocialProof className="mt-12" />

      {/* Seamless Coordination Section */}
      <section className="w-full bg-white border-y border-gray-100 md:h-screen min-h-[500px] md:p-16">
        <div className="grid grid-cols-1 h-full lg:grid-cols-2 items-center gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-6 flex flex-col justify-center p-8 md:p-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Seamless Coordination
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Stay connected with Orin through SMS or email.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Real-time progress updates
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Flexible scheduling coordination
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-gray-700">
                  Quick questions and clarifications
                </span>
              </div>
            </motion.div>
          </div>

          {/* Phone Component */}
          <motion.div className="flex-1 h-full flex justify-center relative md:rounded-lg overflow-hidden py-12">
            <BackgroundGradient speed={speed} />
            <div
              className={cn(
                "absolute inset-0 rounded-lg pointer-events-none z-10",
                "shadow-[inset_2px_2px_8px_#00000044,_inset_-2px_-2px_8px_#ffffffbb] dark:shadow-none"
              )}
            />
            <Phone messages={coordinationMessages} />
          </motion.div>
        </div>
      </section>

      {/* Scroll for more info */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: scrollY > 0 ? 0 : 1,
          y: scrollY > 0 ? 10 : 0,
        }}
        onClick={() => {
          window.scrollTo({
            top: 800,
            behavior: "smooth",
          });
        }}
        className={cn(
          "fixed bg-neutral-800 dark:bg-neutral-200 right-4 bottom-4 rounded-lg",
          "px-2 py-1 w-fit mx-auto text-center text-white flex items-center gap-2"
        )}
      >
        Scroll
        <ChevronDownIcon className="w-4 h-4" />
      </motion.button>
    </>
  );
}

export default App;
